#!/usr/bin/env tsx
/**
 * GA4 운영 리포트 — 기존 자동 외부 링크 click 데이터까지 재활용한다.
 * 사용법: npm run ga:ops          # 최근 28일 vs 직전 28일 (오늘 제외)
 *         npm run ga:ops -- 7     # 최근 7일 vs 직전 7일
 *
 * purchase_link_click과 자동 click은 같은 사용자 행동을 중복 측정하므로 합산하지 않는다.
 * 구매처 집계는 click의 pagePath+linkUrl을 현재 신발 DB/블로그 CTA와 대조한다.
 * 링크를 교체한 뒤에도 옛 URL 클릭이 빠지지 않도록 신발·블로그 페이지 모두 제휴 호스트(naver.me·쿠팡)는 폴백으로 센다.
 *
 * 측정 보정 (2026-09-29):
 * - GA4는 처리에 24~48시간이 걸린다. 창 끝날(어제)의 참여 세션 비율이 20% 미만이면 미처리로 보고
 *   현재·비교 창 양쪽에서 같은 위치의 날을 빼 같은 일수로 비교한다(9/28 참여 1.6%가 7일 창을 오염시킨 사례).
 * - GSC는 `/blog/x#heading-N` 앵커 행을 기본 URL과 합치면 CTR이 왜곡된다(카야노 33, 8/29~9/26: 합산 1.41% vs 기본 4.15%).
 *   CTR·순위·후보 판정은 `#` 없는 기본 URL 행만 쓰고, 앵커 노출은 별도로 표기한다.
 * - GSC 창은 정확히 N일(종료일 = 오늘−3일, 시작일 = 종료일−(N−1)일).
 */
import { BetaAnalyticsDataClient, type protos } from '@google-analytics/data';
import { JWT } from 'google-auth-library';
import { getShoes } from '../src/lib/data/shoes';
import { blogPosts } from '../src/lib/data/blog/posts';
import { resolveKeyFile } from './lib/google-auth';

type Row = protos.google.analytics.data.v1beta.IRow;
type PurchaseTarget = { type: 'shoe' | 'apparel'; name: string; store: string };
type SearchPageRow = { keys: string[]; clicks: number; impressions: number; ctr: number; position: number };
type SearchPage = { clicks: number; impressions: number; weightedPosition: number; anchorClicks: number; anchorImpressions: number };
type DateRange = { startDate: string; endDate: string };

const days = Number(process.argv[2] ?? 28);
if (!Number.isInteger(days) || days < 1 || days > 90) {
  console.error('사용법: npm run ga:ops -- [1~90일]');
  process.exit(1);
}

const client = new BetaAnalyticsDataClient({ keyFilename: resolveKeyFile() });
const property = `properties/${process.env.GA_PROPERTY_ID || '523714985'}`;
// 창 끝에서 미처리로 판정해 뺀 날 수(trim)만큼 현재·비교 창의 끝을 똑같이 당긴다. trim=0이면 기존 창 그대로.
const windows = (trim: number) => ({
  current: { startDate: `${days}daysAgo`, endDate: trim ? `${1 + trim}daysAgo` : 'yesterday' },
  previous: { startDate: `${days * 2}daysAgo`, endDate: `${days + 1 + trim}daysAgo` },
});
const INCOMPLETE_ENGAGED_RATIO = 0.2; // 8/1~9/27 일별 최저 59.1%, 미처리였던 9/28은 1.6%
const MAX_TRIM_DAYS = 2; // 공식 처리 지연 24~48시간
const value = (row: Row, i: number) => row.dimensionValues?.[i]?.value ?? '';
const metric = (row: Row, i: number) => Number(row.metricValues?.[i]?.value ?? 0);
const number = (n: number) => Math.round(n).toLocaleString('ko-KR');
const change = (now: number, before: number) => before ? `${now >= before ? '+' : ''}${((now / before - 1) * 100).toFixed(1)}%` : '비교 불가';
const perHundred = (clicks: number, views: number) => views ? (clicks / views * 100).toFixed(1) : '-';
const kst = (date: Date) => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(date);
const daysAgo = (n: number) => new Date(Date.now() - n * 86400_000);
const periodStart = daysAgo(days);
const searchEnd = daysAgo(3);
const searchStart = new Date(searchEnd.getTime() - (days - 1) * 86400_000); // 양끝 포함 정확히 N일
// GA 'date' 값(YYYYMMDD)에서 n일 전 날짜를 YYYY-MM-DD로 — 시간대 변환 없이 달력 계산만 한다.
const shiftDate = (yyyymmdd: string, n: number) => {
  const d = new Date(Date.UTC(+yyyymmdd.slice(0, 4), +yyyymmdd.slice(4, 6) - 1, +yyyymmdd.slice(6, 8) - n));
  return d.toISOString().slice(0, 10);
};

function normalizedUrl(raw: string): string | null {
  try {
    const url = new URL(raw);
    return /^https?:$/.test(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function affiliateStore(raw: string): string | null {
  const host = new URL(raw).hostname;
  if (host === 'naver.me') return '네이버';
  if (host === 'link.coupang.com' || host === 'coupa.ng') return '쿠팡';
  return null;
}

function purchaseCatalog() {
  const targets = new Map<string, Map<string, PurchaseTarget>>();
  const shoes = new Map<string, ReturnType<typeof getShoes>[number]>();
  const blogs = new Set<string>();
  const add = (path: string, raw: string, target: PurchaseTarget) => {
    const url = normalizedUrl(raw);
    if (!url) return;
    const links = targets.get(path) ?? new Map<string, PurchaseTarget>();
    links.set(url, target);
    targets.set(path, links);
  };

  for (const shoe of getShoes()) {
    const path = `/shoes/${shoe.slug}`;
    shoes.set(path, shoe);
    for (const link of shoe.purchaseLinks ?? []) {
      add(path, link.url, { type: 'shoe', name: `${shoe.brand} ${shoe.name}`, store: link.store });
    }
  }

  // 기존 affiliate-btn와 앞으로 글에 넣을 data-purchase-link를 모두 같은 목록에 넣는다.
  for (const post of blogPosts) {
    blogs.add(`/blog/${post.slug}`);
    for (const match of Array.from(post.content.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi))) {
      const attrs = match[1];
      if (!/\baffiliate-btn\b|\bdata-purchase-link\b/.test(attrs)) continue;
      const href = attrs.match(/\bhref="([^"]+)"/)?.[1];
      if (!href) continue;
      const type = attrs.match(/\bdata-purchase-product-type="([^"]+)"/)?.[1] === 'apparel' ? 'apparel' : 'shoe';
      const name = attrs.match(/\bdata-purchase-product-name="([^"]+)"/)?.[1]
        ?? match[2].match(/affiliate-btn-product[^>]*>([^<]+)/)?.[1]?.replace(/\s+(최저가|구매|정보|상세)\s*→?$/, '').trim()
        ?? post.title;
      const store = attrs.match(/\bdata-purchase-store="([^"]+)"/)?.[1]
        ?? match[2].match(/affiliate-btn-store[^>]*>([^<]+)/)?.[1]?.trim()
        ?? new URL(href, 'https://allrunabout.com').hostname;
      add(`/blog/${post.slug}`, href, { type, name, store });
    }
  }
  return { targets, shoes, blogs };
}

async function report(dateRange: DateRange, dimensions: string[], metrics: string[], eventName?: string) {
  const [response] = await client.runReport({
    property,
    dateRanges: [dateRange],
    dimensions: dimensions.map((name) => ({ name })),
    metrics: metrics.map((name) => ({ name })),
    ...(eventName && { dimensionFilter: { filter: { fieldName: 'eventName', stringFilter: { value: eventName } } } }),
    limit: 10000,
  });
  if ((response.rowCount ?? 0) > 10000) throw new Error(`${dimensions.join('+')} 보고서가 10,000행을 초과했습니다. 부분 집계로 보고하지 않습니다.`);
  return response.rows ?? [];
}

/**
 * 창 끝(어제부터 거꾸로)에서 GA4 일일 처리가 끝나지 않은 것으로 보이는 날.
 * 참여 세션 비율 20% 미만(또는 세션 0)이면 미처리로 본다. 처리된 날이 나오면 멈춘다.
 * 하루씩 따로 조회해 날짜 문자열은 GA가 준 값(속성 시간대)을 그대로 쓴다.
 */
async function incompleteTrailingDays() {
  const checks = await Promise.all(Array.from({ length: MAX_TRIM_DAYS }, async (_, i) => {
    const n = i + 1;
    const [row] = await report({ startDate: `${n}daysAgo`, endDate: `${n}daysAgo` }, ['date'], ['sessions', 'engagedSessions']);
    const sessions = row ? metric(row, 0) : 0;
    const engaged = row ? metric(row, 1) : 0;
    const date = row ? value(row, 0) : kst(daysAgo(n)).replace(/-/g, '');
    return { date, sessions, engaged, ratio: sessions ? engaged / sessions : 0 };
  }));
  const flagged: typeof checks = [];
  for (const day of checks) {
    if (day.sessions && day.ratio >= INCOMPLETE_ENGAGED_RATIO) break;
    flagged.push(day);
  }
  return flagged;
}

function searchPath(raw: string): string {
  try {
    return new URL(raw).pathname.replace(/\/$/, '') || '/';
  } catch {
    return raw.replace(/#.*$/, '').replace(/\/$/, '') || '/';
  }
}

async function searchConsolePages(): Promise<Map<string, SearchPage>> {
  const key = require(resolveKeyFile());
  const auth = new JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const sites = process.env.GSC_SITE ? [process.env.GSC_SITE] : ['sc-domain:allrunabout.com', 'https://allrunabout.com/'];
  const dateRange = { startDate: kst(searchStart), endDate: kst(searchEnd) };
  let site = '';
  let rows: SearchPageRow[] = [];
  let lastError = '';
  for (const candidate of sites) {
    try {
      const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(candidate)}/searchAnalytics/query`;
      const result = await auth.request<{ rows?: SearchPageRow[] }>({
        url,
        method: 'POST',
        data: { ...dateRange, dimensions: ['page'], rowLimit: 25000 },
      });
      site = candidate;
      rows = result.data.rows ?? [];
      break;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }
  }
  if (!site) throw new Error(`GSC 속성 접근 실패: ${lastError}`);

  const pages = new Map<string, SearchPage>();
  for (const row of rows) {
    const path = searchPath(row.keys[0]);
    const page = pages.get(path) ?? { clicks: 0, impressions: 0, weightedPosition: 0, anchorClicks: 0, anchorImpressions: 0 };
    if (row.keys[0].includes('#')) {
      // `#heading-N` 앵커 행은 합치면 CTR·순위가 왜곡된다(파일 머리 주석 참고) — 참고용으로만 따로 센다.
      page.anchorClicks += row.clicks;
      page.anchorImpressions += row.impressions;
    } else {
      page.clicks += row.clicks;
      page.impressions += row.impressions;
      page.weightedPosition += row.position * row.impressions;
    }
    pages.set(path, page);
  }
  return pages;
}

function contentGroup(path: string): string {
  if (path.startsWith('/blog/')) return '블로그';
  if (path.startsWith('/shoes/')) return '신발 상세';
  if (path.startsWith('/marathon/')) return '대회 상세';
  if (path.startsWith('/vs/')) return '신발 비교 글';
  if (path.startsWith('/best/')) return '추천 목록';
  if (path === '/compare') return '비교';
  if (path === '/recommend') return '추천';
  if (path.startsWith('/brands/')) return '브랜드';
  if (path.startsWith('/gels/')) return '젤·영양';
  if (path.startsWith('/fabrics/')) return '의류 소재';
  if (path.startsWith('/saturday')) return '산초 토요일';
  if (path === '/') return '홈';
  return '기타';
}

function purchaseClicks(rows: Row[], catalog: ReturnType<typeof purchaseCatalog>) {
  const byPage = new Map<string, number>();
  const byStore = new Map<string, number>();
  const byType = new Map<string, number>();
  let unmatchedShoe = 0;
  let blogFallback = 0;
  for (const row of rows) {
    const page = value(row, 0).replace(/\/$/, '') || '/';
    const url = normalizedUrl(value(row, 1));
    if (!url) continue;
    const target = catalog.targets.get(page)?.get(url);
    const shoe = catalog.shoes.get(page);
    // 링크가 교체된 과거 기록도 제휴 단축 링크라면 놓치지 않는다 — 신발·블로그 모두.
    // (블로그는 2026-09-29 추가: 페가 41 vs 42 글 CTA를 바꾸자 옛 URL 클릭이 집계에서 빠졌다.)
    // 한 행은 target 또는 폴백 중 하나로만 세고, /shoes/와 /blog/ 경로는 겹치지 않아 중복 집계가 없다.
    const fallbackStore = shoe || catalog.blogs.has(page) ? affiliateStore(url) : null;
    if (!target && !fallbackStore) {
      if (shoe) unmatchedShoe += metric(row, 0);
      continue;
    }
    const clicks = metric(row, 0);
    const store = target?.store ?? fallbackStore!;
    // 블로그 폴백은 상품 유형을 알 수 없다 — 그 글의 현재 CTA가 전부 의류일 때만 의류로 본다.
    const pageTargets = Array.from(catalog.targets.get(page)?.values() ?? []);
    const type = target?.type ?? (!shoe && pageTargets.length && pageTargets.every((t) => t.type === 'apparel') ? 'apparel' : 'shoe');
    if (!target && !shoe) blogFallback += clicks;
    byPage.set(page, (byPage.get(page) ?? 0) + clicks);
    byStore.set(store, (byStore.get(store) ?? 0) + clicks);
    byType.set(type, (byType.get(type) ?? 0) + clicks);
  }
  return { byPage, byStore, byType, unmatchedShoe, blogFallback, total: Array.from(byPage.values()).reduce((a, b) => a + b, 0) };
}

async function main() {
  const catalog = purchaseCatalog();
  const incomplete = await incompleteTrailingDays();
  const trim = Math.min(incomplete.length, days - 1); // 창은 최소 1일 남긴다
  const { current, previous } = windows(trim);
  const effectiveDays = days - trim;
  const periodEnd = daysAgo(1 + trim);
  const [tot, oldTot, sources, pageRaw, oldViewsRaw, landingRaw, oldLandingRaw, clicksRaw, oldClicksRaw, eventRaw, metadata] = await Promise.all([
    report(current, [], ['sessions', 'screenPageViews', 'engagementRate']),
    report(previous, [], ['sessions', 'screenPageViews', 'engagementRate']),
    report(current, ['sessionSourceMedium'], ['sessions']),
    report(current, ['pagePath'], ['screenPageViews', 'userEngagementDuration']),
    report(previous, ['pagePath'], ['screenPageViews', 'userEngagementDuration']),
    report(current, ['landingPage'], ['sessions', 'bounceRate', 'engagedSessions']),
    report(previous, ['landingPage'], ['sessions', 'bounceRate', 'engagedSessions']),
    report(current, ['pagePath', 'linkUrl'], ['eventCount'], 'click'),
    report(previous, ['pagePath', 'linkUrl'], ['eventCount'], 'click'),
    report(current, ['eventName'], ['eventCount']),
    client.getMetadata({ name: `${property}/metadata` }),
  ]);
  const now = tot[0], before = oldTot[0];
  const views = new Map(pageRaw.map((row) => [value(row, 0).replace(/\/$/, '') || '/', {
    views: metric(row, 0),
    engagementSeconds: metric(row, 1),
  }]));
  const oldViews = new Map(oldViewsRaw.map((row) => [value(row, 0).replace(/\/$/, '') || '/', {
    views: metric(row, 0),
    engagementSeconds: metric(row, 1),
  }]));
  const clicks = purchaseClicks(clicksRaw, catalog);
  const oldClicks = purchaseClicks(oldClicksRaw, catalog);
  const dimensions = new Set((metadata[0].dimensions ?? []).map((d) => d.apiName));
  const wanted = ['product_type', 'product_name', 'brand', 'store', 'affiliate_type', 'button_position', 'apparel_category'];
  const registered = wanted.filter((name) => dimensions.has(`customEvent:${name}`));

  const trimNote = trim ? ` · 미처리 ${trim}일 제외` : '';
  console.log(`\n📊 GA4 운영 리포트 · ${kst(periodStart)} ~ ${kst(periodEnd)} (${effectiveDays}일, 오늘 제외${trimNote})`);
  console.log(`기준: ${property} · 직전 ${effectiveDays}일과 비교 · 구매 완료/수익 아님`);
  const excludedCurrent = incomplete.slice(0, trim).map((d) => shiftDate(d.date, 0));
  const excludedPrevious = incomplete.slice(0, trim).map((d) => shiftDate(d.date, days));
  for (const day of incomplete) {
    const detail = day.sessions ? `참여 세션 ${number(day.engaged)}/${number(day.sessions)} (${(day.ratio * 100).toFixed(1)}%)` : '세션 0';
    console.log(`⚠️  GA4 처리 전으로 보이는 날: ${shiftDate(day.date, 0)} ${detail} — 참여 비율 ${INCOMPLETE_ENGAGED_RATIO * 100}% 미만`);
  }
  if (trim) {
    console.log(`   → 현재 창에서 ${excludedCurrent.join(', ')}, 같은 규칙(창 끝 ${trim}일)으로 비교 창에서 ${excludedPrevious.join(', ')} 제외 — 양쪽 ${effectiveDays}일씩 비교`);
  }
  if (incomplete.length > trim) {
    console.log(`   → 창을 최소 1일 남기느라 ${incomplete.slice(trim).map((d) => shiftDate(d.date, 0)).join(', ')}는 제외하지 못함. 이 결과는 판단에 쓰지 말고 1~2일 뒤 다시 실행할 것.`);
  }
  console.log('');
  console.log(`세션 ${number(metric(now, 0))} (${change(metric(now, 0), metric(before, 0))}) · 조회 ${number(metric(now, 1))} (${change(metric(now, 1), metric(before, 1))}) · 참여율 ${(metric(now, 2) * 100).toFixed(1)}%`);
  console.log(`구매처 이동 클릭 ${number(clicks.total)} (${change(clicks.total, oldClicks.total)}) · 신발 ${number(clicks.byType.get('shoe') ?? 0)} / 의류 ${number(clicks.byType.get('apparel') ?? 0)}`);
  console.log('※ GA4 자동 외부 링크 click만 집계. 새 purchase_link_click 이벤트를 더하지 않아 중복 없음.');

  console.log('\n━━ 유입 TOP 5 (세션) ━━');
  for (const row of [...sources].sort((a, b) => metric(b, 0) - metric(a, 0)).slice(0, 5)) {
    console.log(`  ${value(row, 0)} · ${number(metric(row, 0))}`);
  }
  const sourceSessions = new Map(sources.map((row) => [value(row, 0), metric(row, 0)]));
  const naverSessions = (sourceSessions.get('m.search.naver.com / referral') ?? 0) + (sourceSessions.get('naver / organic') ?? 0);
  console.log(`  네이버 관련 두 경로 합계 ${number(naverSessions)} · 구글 자연검색 ${number(sourceSessions.get('google / organic') ?? 0)} (GA4 채널 표기는 서로 다름)`);

  const posts = blogPosts.map((post) => ({ post, views: views.get(`/blog/${post.slug}`)?.views ?? 0, prev: oldViews.get(`/blog/${post.slug}`)?.views ?? 0 }));
  console.log('\n━━ 많이 읽은 글 TOP 5 ━━');
  for (const item of posts.sort((a, b) => b.views - a.views).slice(0, 5)) {
    console.log(`  ${number(item.views)}회 · ${item.post.title.slice(0, 47)} · /blog/${item.post.slug}`);
  }
  const rising = posts.filter((p) => p.views >= 50 && p.views - p.prev >= 20).sort((a, b) => (b.views - b.prev) - (a.views - a.prev)).slice(0, 3);
  console.log('\n━━ 급상승 글 (직전 기간 대비 조회 증가) ━━');
  for (const item of rising) console.log(`  +${number(item.views - item.prev)}회 · ${item.post.title.slice(0, 47)}`);
  if (!rising.length) console.log('  충분한 증가 사례 없음');

  const pageRows = Array.from(views.entries()).map(([path, data]) => ({
    path,
    ...data,
    secondsPerView: data.views ? data.engagementSeconds / data.views : 0,
  }));
  const pageLabel = (path: string) => {
    const post = blogPosts.find((item) => `/blog/${item.slug}` === path);
    if (post) return `${post.title.slice(0, 38)} · ${path}`;
    const shoe = catalog.shoes.get(path);
    if (shoe) return `${shoe.brand} ${shoe.name} · ${path}`;
    return path;
  };

  const groups = new Map<string, { views: number; engagementSeconds: number; pages: number }>();
  const oldGroups = new Map<string, { views: number; engagementSeconds: number }>();
  for (const page of pageRows) {
    const group = contentGroup(page.path);
    const item = groups.get(group) ?? { views: 0, engagementSeconds: 0, pages: 0 };
    item.views += page.views;
    item.engagementSeconds += page.engagementSeconds;
    item.pages += 1;
    groups.set(group, item);
  }
  for (const [path, data] of Array.from(oldViews.entries())) {
    const group = contentGroup(path);
    const item = oldGroups.get(group) ?? { views: 0, engagementSeconds: 0 };
    item.views += data.views;
    item.engagementSeconds += data.engagementSeconds;
    oldGroups.set(group, item);
  }
  console.log('\n━━ 콘텐츠 유형별 소비 (직전 기간 비교) ━━');
  for (const [group, data] of Array.from(groups.entries()).sort((a, b) => b[1].views - a[1].views)) {
    const avg = data.views ? data.engagementSeconds / data.views : 0;
    const old = oldGroups.get(group) ?? { views: 0, engagementSeconds: 0 };
    const oldAvg = old.views ? old.engagementSeconds / old.views : 0;
    console.log(`  ${group} · ${number(data.views)}조회 (${change(data.views, old.views)}) · 참여 ${Math.round(data.engagementSeconds / 3600)}시간 · 조회당 ${avg.toFixed(1)}초 (${old.views ? `${avg - oldAvg >= 0 ? '+' : ''}${(avg - oldAvg).toFixed(1)}초` : '비교 불가'}) · ${data.pages}개 경로`);
  }
  console.log('  ※ 조회당 참여 시간은 userEngagementDuration ÷ 조회수로 계산한 평균치.');

  console.log('\n━━ 오래 읽힌 페이지 TOP 5 (조회 ≥30) ━━');
  const deepReads = pageRows.filter((page) => page.views >= 30 && contentGroup(page.path) !== '기타')
    .sort((a, b) => b.secondsPerView - a.secondsPerView).slice(0, 5);
  for (const page of deepReads) console.log(`  조회당 ${page.secondsPerView.toFixed(1)}초 · ${number(page.views)}조회 · ${pageLabel(page.path)}`);
  if (!deepReads.length) console.log('  기준을 만족하는 페이지 없음');

  const landingRows = landingRaw.map((row) => ({ path: value(row, 0), sessions: metric(row, 0), bounceRate: metric(row, 1), engaged: metric(row, 2) }));
  const oldLanding = new Map(oldLandingRaw.map((row) => [value(row, 0), { sessions: metric(row, 0), bounceRate: metric(row, 1) }]));
  const unknownLandingSessions = landingRows.filter((row) => !row.path || row.path === '(not set)').reduce((sum, row) => sum + row.sessions, 0);
  const highBounce = landingRows.filter((row) => row.path.startsWith('/') && row.sessions >= 20)
    .sort((a, b) => b.bounceRate - a.bounceRate).slice(0, 5);
  console.log('\n━━ 이탈률 높은 랜딩 페이지 TOP 5 (세션 ≥20) ━━');
  for (const row of highBounce) {
    const old = oldLanding.get(row.path);
    const delta = old ? `${(row.bounceRate - old.bounceRate) * 100 >= 0 ? '+' : ''}${((row.bounceRate - old.bounceRate) * 100).toFixed(1)}%p` : '비교 불가';
    console.log(`  이탈률 ${(row.bounceRate * 100).toFixed(1)}% (${delta}) · ${number(row.sessions)}세션 · 참여 ${number(row.engaged)} · ${pageLabel(row.path)}`);
  }
  if (!highBounce.length) console.log('  기준을 만족하는 랜딩 페이지 없음');
  console.log(`  (not set)/경로 없음 ${number(unknownLandingSessions)}세션은 페이지별 이탈 목록에서 제외.`);
  console.log('  ※ 이탈률은 참여 없는 세션 비율. 의도한 정보를 빠르게 얻고 끝난 방문도 포함될 수 있어 페이지 내용과 함께 판단.');

  console.log(`\n━━ GSC 검색 유입 콘텐츠 (${kst(searchStart)} ~ ${kst(searchEnd)}, ${days}일, 약 3일 지연) ━━`);
  const seoCandidatePaths: string[] = [];
  try {
    const searchPages = await searchConsolePages();
    const anchorNote = (data: SearchPage) => data.anchorImpressions ? ` · 앵커 노출 ${number(data.anchorImpressions)}(클릭 ${number(data.anchorClicks)}) 별도` : '';
    const byClicks = Array.from(searchPages.entries()).sort((a, b) => b[1].clicks - a[1].clicks).slice(0, 5);
    for (const [path, data] of byClicks) {
      const ctr = data.impressions ? (data.clicks / data.impressions) * 100 : 0;
      const position = data.impressions ? data.weightedPosition / data.impressions : 0;
      const page = views.get(path);
      const engagedPerView = page?.views ? page.engagementSeconds / page.views : 0;
      console.log(`  검색 클릭 ${number(data.clicks)} · 노출 ${number(data.impressions)} · CTR ${ctr.toFixed(1)}% · 평균순위 ${position.toFixed(1)}${anchorNote(data)} · GA 조회 ${number(page?.views ?? 0)} · 참여 ${engagedPerView.toFixed(1)}초/조회 · 제휴 이동 ${number(clicks.byPage.get(path) ?? 0)} · ${pageLabel(path)}`);
    }
    if (!byClicks.length) console.log('  해당 기간 검색 유입 페이지 없음');
    const seoCandidates = Array.from(searchPages.entries())
      .filter(([, data]) => data.impressions >= 50 && data.weightedPosition / data.impressions <= 12 && data.clicks / data.impressions < 0.03)
      .sort((a, b) => b[1].impressions - a[1].impressions).slice(0, 5);
    console.log('  검색 개선 후보: 노출 ≥50, 평균순위 12위 이내, CTR <3% (# 없는 기본 URL 기준)');
    for (const [path, data] of seoCandidates) {
      seoCandidatePaths.push(path);
      console.log(`    노출 ${number(data.impressions)} · CTR ${(data.clicks / data.impressions * 100).toFixed(1)}% · 평균순위 ${(data.weightedPosition / data.impressions).toFixed(1)}${anchorNote(data)} · ${pageLabel(path)}`);
    }
    if (!seoCandidates.length) console.log('    해당 후보 없음');
    const anchored = Array.from(searchPages.values()).filter((data) => data.anchorImpressions);
    const anchorImpressions = anchored.reduce((sum, data) => sum + data.anchorImpressions, 0);
    const anchorClicks = anchored.reduce((sum, data) => sum + data.anchorClicks, 0);
    console.log(`  ※ CTR·순위·후보는 # 없는 기본 URL 행만으로 계산. #앵커 행(${anchored.length}개 페이지, 노출 ${number(anchorImpressions)}·클릭 ${number(anchorClicks)})은 합치면 CTR이 왜곡돼 따로 표기.`);
    console.log('  ※ GSC 검색 클릭과 GA 조회는 집계 기간·정의가 달라 일치 비율로 해석하지 않음.');
  } catch (error) {
    console.log(`  GSC 조회 불가: ${error instanceof Error ? error.message : String(error)} (GA4 나머지 보고는 계속 표시)`);
  }

  const eventCounts = new Map(eventRaw.map((row) => [value(row, 0), metric(row, 0)]));
  const navigationEvents = [
    ['home_recommend_start', '홈 추천 시작 클릭'],
    ['home_problem_category_click', '홈 문제별 탐색'],
    ['home_shoe_detail_click', '홈 신발 상세 이동'],
    ['home_compare_click', '홈 비교 이동 클릭'],
    ['home_blog_click', '홈 블로그 이동'],
    ['home_filter_apply', '홈 신발 목록 필터 적용'],
    ['home_shoe_index_expand', '홈 신발 목록 더 보기'],
    ['home_resume_click', '최근 본 항목 이어보기'],
    ['home_resume_clear', '최근 기록 지우기'],
    ['home_ad_view', '홈 광고 영역 노출'],
    ['home_trust_methodology_open', '분석 방법 보기'],
  ] as const;
  console.log('\n━━ 이미 수집 중인 홈 상호작용 ━━');
  for (const [event, label] of navigationEvents) console.log(`  ${label} · ${number(eventCounts.get(event) ?? 0)}회`);
  console.log('  ※ 이벤트 발생 횟수. 추천 완료·비교 구성 완료는 별도 이벤트가 아직 없어 단계별 전환율로 보지 않음.');

  const shoeRows = Array.from(catalog.shoes.entries()).map(([path, shoe]) => ({
    path, shoe, views: views.get(path)?.views ?? 0, clicks: clicks.byPage.get(path) ?? 0,
  }));
  console.log('\n━━ 구매처 클릭 상위 신발 ━━');
  for (const item of shoeRows.sort((a, b) => b.clicks - a.clicks).slice(0, 8)) {
    console.log(`  ${number(item.clicks)}클릭 / ${number(item.views)}조회 (100조회당 ${perHundred(item.clicks, item.views)}) · ${item.shoe.brand} ${item.shoe.name}`);
  }
  console.log('  판매처: ' + Array.from(clicks.byStore.entries()).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([name, count]) => `${name} ${number(count)}`).join(' · '));

  const low = shoeRows.filter((s) => s.views >= 50 && (s.shoe.purchaseLinks?.length ?? 0) > 0 && s.clicks / s.views < 0.05)
    .sort((a, b) => b.views - a.views).slice(0, 5);
  console.log('\n━━ 검토 후보: 조회 ≥50, 100조회당 구매처 클릭 <5 ━━');
  for (const item of low) console.log(`  ${number(item.views)}조회 / ${number(item.clicks)}클릭 · ${item.shoe.brand} ${item.shoe.name} · ${item.path}`);
  if (!low.length) console.log('  해당 신발 없음');
  console.log('  ※ 행동 지표일 뿐 구매 의도·실제 판매량은 아님. 링크 품질과 글 맥락을 함께 확인.');

  const blogClickRows = blogPosts.map((post) => {
    const path = `/blog/${post.slug}`;
    const page = views.get(path);
    const pageClicks = clicks.byPage.get(path) ?? 0;
    return { post, views: page?.views ?? 0, secondsPerView: page?.views ? page.engagementSeconds / page.views : 0, clicks: pageClicks };
  }).filter((row) => row.views >= 20).sort((a, b) => b.clicks - a.clicks);
  console.log('\n━━ 블로그 구매처 이동 TOP 5 (조회 ≥20) ━━');
  for (const row of blogClickRows.slice(0, 5)) console.log(`  ${number(row.clicks)}클릭 / ${number(row.views)}조회 (${perHundred(row.clicks, row.views)} /100조회) · ${row.secondsPerView.toFixed(1)}초/조회 · ${row.post.title.slice(0, 42)}`);
  if (!blogClickRows.length) console.log('  기준을 만족하는 블로그 없음');
  console.log('  ※ 자동 외부 click 중 블로그 CTA URL과 일치하거나 제휴 호스트(naver.me·쿠팡)인 이벤트만 포함(교체 전 옛 링크 포함). 구매 건수나 수익이 아님.');

  console.log('\n━━ 측정 상태 ━━');
  console.log(`  맞춤 측정기준 Data API 반영 ${registered.length}/${wanted.length}: ${registered.length === wanted.length ? '모두 표시' : `아직 반영되지 않음 (${wanted.filter((d) => !registered.includes(d)).join(', ')})`}`);
  console.log('  ※ GA4 관리자에서 저장한 뒤 Data API에 표시되기까지 시간이 걸릴 수 있음. 미표시만으로 미등록이라고 판단하지 않음.');
  console.log(`  신발 페이지에서 구매처로 확인되지 않은 외부 클릭 ${number(clicks.unmatchedShoe)}건은 합계에서 제외(옛 제휴 단축 링크는 포함).`);
  console.log(`  블로그 현재 CTA에 없는 옛 제휴 링크 클릭 ${number(clicks.blogFallback)}건은 합계에 포함.`);
  if (trim) console.log(`  GA 창 끝 미처리 제외: 현재 창 ${excludedCurrent.join(', ')} · 비교 창 ${excludedPrevious.join(', ')} (참여 세션 비율 ${INCOMPLETE_ENGAGED_RATIO * 100}% 미만 기준).`);
  const unknownSource = sourceSessions.get('(not set)') ?? 0;
  console.log(`  유입 출처 (not set) ${number(unknownSource)}세션 (${metric(now, 0) ? (unknownSource / metric(now, 0) * 100).toFixed(1) : '0.0'}%) — 원인 미확인.`);
  console.log('  자동 click만으로 상품·버튼 위치를 분해하지 않음. 새 purchase_link_click 매개변수는 GA4에서 사용 가능해진 뒤 보고서·탐색에서 볼 수 있음.');
  const actions: string[] = [];
  if (seoCandidatePaths[0]) actions.push(`검색 노출은 있으나 CTR이 낮은 “${pageLabel(seoCandidatePaths[0]).slice(0, 34)}…”의 제목·검색 설명을 먼저 점검 (GSC 후보 기준)`);
  if (blogClickRows[0]?.clicks) actions.push(`구매처 이동이 발생한 “${blogClickRows[0].post.title.slice(0, 30)}…” CTA의 가격·재고와 문맥 확인 (클릭 이벤트 기준)`);
  if (low[0]) actions.push(`${low[0].shoe.brand} ${low[0].shoe.name}: 조회 대비 구매처 이동이 낮은 페이지에서 버튼 위치·링크 작동 점검`);
  if (highBounce[0]) actions.push(`랜딩 이탈 상위 “${pageLabel(highBounce[0].path).slice(0, 34)}…”가 검색 의도에 답하는지 확인; 이탈률만으로 실패 판정 금지`);
  if (rising.length) actions.push(`급상승 글 “${rising[0].post.title.slice(0, 28)}…”에 관련 신발 상세 내부 링크가 있는지 확인`);
  if (unknownSource / Math.max(1, metric(now, 0)) > 0.05 || unknownLandingSessions / Math.max(1, metric(now, 0)) > 0.05) actions.push(`측정 품질 점검: 유입 (not set) ${((unknownSource / Math.max(1, metric(now, 0))) * 100).toFixed(1)}%, 랜딩 경로 누락 ${((unknownLandingSessions / Math.max(1, metric(now, 0))) * 100).toFixed(1)}%`);
  if (!actions.length) actions.push('유의한 개선 후보가 없어 현재 콘텐츠·링크 상태 유지 후 다음 기간 비교');
  console.log('\n━━ 이번 주 우선순위 (최대 5개) ━━');
  actions.slice(0, 5).forEach((action, index) => console.log(`  ${index + 1}. ${action}`));
  console.log('  ※ 추천 후보일 뿐 인과관계·전환 성과 확정이 아님. 한 번에 한 변경만 기록하고 다음 동일 기간과 비교.\n');
}

main().catch((error) => {
  console.error('❌ GA4 운영 리포트 실패:', error.message);
  process.exit(1);
});
