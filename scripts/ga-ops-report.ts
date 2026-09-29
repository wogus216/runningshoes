#!/usr/bin/env tsx
/**
 * GA4 운영 리포트 — 기존 자동 외부 링크 click 데이터까지 재활용한다.
 * 사용법: npm run ga:ops          # 최근 28일 vs 직전 28일 (오늘 제외)
 *         npm run ga:ops -- 7     # 최근 7일 vs 직전 7일
 *
 * purchase_link_click과 자동 click은 같은 사용자 행동을 중복 측정하므로 합산하지 않는다.
 * 구매처 집계는 click의 pagePath+linkUrl을 현재 신발 DB/블로그 CTA와 대조한다.
 */
import { BetaAnalyticsDataClient, type protos } from '@google-analytics/data';
import { getShoes } from '../src/lib/data/shoes';
import { blogPosts } from '../src/lib/data/blog/posts';
import { resolveKeyFile } from './lib/google-auth';

type Row = protos.google.analytics.data.v1beta.IRow;
type PurchaseTarget = { type: 'shoe' | 'apparel'; name: string; store: string };

const days = Number(process.argv[2] ?? 28);
if (!Number.isInteger(days) || days < 1 || days > 90) {
  console.error('사용법: npm run ga:ops -- [1~90일]');
  process.exit(1);
}

const client = new BetaAnalyticsDataClient({ keyFilename: resolveKeyFile() });
const property = `properties/${process.env.GA_PROPERTY_ID || '523714985'}`;
const current = { startDate: `${days}daysAgo`, endDate: 'yesterday' };
const previous = { startDate: `${days * 2}daysAgo`, endDate: `${days + 1}daysAgo` };
const value = (row: Row, i: number) => row.dimensionValues?.[i]?.value ?? '';
const metric = (row: Row, i: number) => Number(row.metricValues?.[i]?.value ?? 0);
const number = (n: number) => Math.round(n).toLocaleString('ko-KR');
const change = (now: number, before: number) => before ? `${now >= before ? '+' : ''}${((now / before - 1) * 100).toFixed(1)}%` : '비교 불가';
const perHundred = (clicks: number, views: number) => views ? (clicks / views * 100).toFixed(1) : '-';
const kst = (date: Date) => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(date);
const periodEnd = new Date(Date.now() - 86400_000);
const periodStart = new Date(Date.now() - days * 86400_000);

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
  return { targets, shoes };
}

async function report(dateRange: typeof current, dimensions: string[], metrics: string[], eventName?: string) {
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

function counts(rows: Row[]) {
  return new Map(rows.map((row) => [value(row, 0).replace(/\/$/, '') || '/', metric(row, 0)]));
}

function purchaseClicks(rows: Row[], catalog: ReturnType<typeof purchaseCatalog>) {
  const byPage = new Map<string, number>();
  const byStore = new Map<string, number>();
  const byType = new Map<string, number>();
  let unmatchedShoe = 0;
  for (const row of rows) {
    const page = value(row, 0).replace(/\/$/, '') || '/';
    const url = normalizedUrl(value(row, 1));
    if (!url) continue;
    const target = catalog.targets.get(page)?.get(url);
    const shoe = catalog.shoes.get(page);
    // 링크가 교체된 과거 신발 기록도 제휴 단축 링크라면 놓치지 않는다.
    const fallbackStore = shoe ? affiliateStore(url) : null;
    if (!target && !fallbackStore) {
      if (shoe) unmatchedShoe += metric(row, 0);
      continue;
    }
    const clicks = metric(row, 0);
    const store = target?.store ?? fallbackStore!;
    const type = target?.type ?? 'shoe';
    byPage.set(page, (byPage.get(page) ?? 0) + clicks);
    byStore.set(store, (byStore.get(store) ?? 0) + clicks);
    byType.set(type, (byType.get(type) ?? 0) + clicks);
  }
  return { byPage, byStore, byType, unmatchedShoe, total: Array.from(byPage.values()).reduce((a, b) => a + b, 0) };
}

async function main() {
  const catalog = purchaseCatalog();
  const [tot, oldTot, sources, viewsRaw, oldViewsRaw, clicksRaw, oldClicksRaw, metadata] = await Promise.all([
    report(current, [], ['sessions', 'screenPageViews', 'engagementRate']),
    report(previous, [], ['sessions', 'screenPageViews', 'engagementRate']),
    report(current, ['sessionSourceMedium'], ['sessions']),
    report(current, ['pagePath'], ['screenPageViews']),
    report(previous, ['pagePath'], ['screenPageViews']),
    report(current, ['pagePath', 'linkUrl'], ['eventCount'], 'click'),
    report(previous, ['pagePath', 'linkUrl'], ['eventCount'], 'click'),
    client.getMetadata({ name: `${property}/metadata` }),
  ]);
  const now = tot[0], before = oldTot[0];
  const views = counts(viewsRaw), oldViews = counts(oldViewsRaw);
  const clicks = purchaseClicks(clicksRaw, catalog);
  const oldClicks = purchaseClicks(oldClicksRaw, catalog);
  const dimensions = new Set((metadata[0].dimensions ?? []).map((d) => d.apiName));
  const wanted = ['product_type', 'product_name', 'brand', 'store', 'affiliate_type', 'button_position', 'apparel_category'];
  const registered = wanted.filter((name) => dimensions.has(`customEvent:${name}`));

  console.log(`\n📊 GA4 운영 리포트 · ${kst(periodStart)} ~ ${kst(periodEnd)} (${days}일, 오늘 제외)`);
  console.log(`기준: ${property} · 직전 ${days}일과 비교 · 구매 완료/수익 아님\n`);
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

  const posts = blogPosts.map((post) => ({ post, views: views.get(`/blog/${post.slug}`) ?? 0, prev: oldViews.get(`/blog/${post.slug}`) ?? 0 }));
  console.log('\n━━ 많이 읽은 글 TOP 5 ━━');
  for (const item of posts.sort((a, b) => b.views - a.views).slice(0, 5)) {
    console.log(`  ${number(item.views)}회 · ${item.post.title.slice(0, 47)} · /blog/${item.post.slug}`);
  }
  const rising = posts.filter((p) => p.views >= 50 && p.views - p.prev >= 20).sort((a, b) => (b.views - b.prev) - (a.views - a.prev)).slice(0, 3);
  console.log('\n━━ 급상승 글 (직전 기간 대비 조회 증가) ━━');
  for (const item of rising) console.log(`  +${number(item.views - item.prev)}회 · ${item.post.title.slice(0, 47)}`);
  if (!rising.length) console.log('  충분한 증가 사례 없음');

  const shoeRows = Array.from(catalog.shoes.entries()).map(([path, shoe]) => ({
    path, shoe, views: views.get(path) ?? 0, clicks: clicks.byPage.get(path) ?? 0,
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

  console.log('\n━━ 측정 상태 ━━');
  console.log(`  맞춤 측정기준 Data API 반영 ${registered.length}/${wanted.length}: ${registered.length === wanted.length ? '모두 표시' : `아직 반영되지 않음 (${wanted.filter((d) => !registered.includes(d)).join(', ')})`}`);
  console.log('  ※ GA4 관리자에서 저장한 뒤 Data API에 표시되기까지 시간이 걸릴 수 있음. 미표시만으로 미등록이라고 판단하지 않음.');
  console.log(`  신발 페이지에서 구매처로 확인되지 않은 외부 클릭 ${number(clicks.unmatchedShoe)}건은 합계에서 제외(옛 제휴 단축 링크는 포함).`);
  const unknownSource = sourceSessions.get('(not set)') ?? 0;
  console.log(`  유입 출처 (not set) ${number(unknownSource)}세션 (${metric(now, 0) ? (unknownSource / metric(now, 0) * 100).toFixed(1) : '0.0'}%) — 원인 미확인.`);
  console.log('  자동 click만으로 상품·버튼 위치를 분해하지 않음. 새 purchase_link_click 매개변수는 GA4에서 사용 가능해진 뒤 보고서·탐색에서 볼 수 있음.');
  const actions = [];
  if (rising.length) actions.push(`급상승 글 “${rising[0].post.title.slice(0, 22)}…”의 신발 내부 링크 점검`);
  if (shoeRows[0]?.clicks) actions.push(`${shoeRows[0].shoe.brand} ${shoeRows[0].shoe.name} 판매처 가격·재고 확인`);
  if (low.length) actions.push(`${low[0].shoe.brand} ${low[0].shoe.name} 구매 버튼·판매처 점검`);
  if (unknownSource / Math.max(1, metric(now, 0)) > 0.05) actions.push('유입 출처 (not set) 증가 원인 점검');
  if (!actions.length) actions.push('현재 추세 유지, 다음 기간에 다시 비교');
  console.log('\n다음 행동: ' + actions.map((action, index) => `${index + 1}. ${action}`).join(' · ') + '\n');
}

main().catch((error) => {
  console.error('❌ GA4 운영 리포트 실패:', error.message);
  process.exit(1);
});
