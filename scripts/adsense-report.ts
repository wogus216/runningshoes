#!/usr/bin/env tsx
/**
 * AdSense 리포트 — 일자별 노출·수익, 수동 광고 칸 vs Auto ads 분리 (AdSense Management API v2, 읽기 전용)
 *
 * 사용법:
 *   npm run adsense                          # 최근 14일, 일자별
 *   npm run adsense -- --from 2026-09-15 --to 2026-09-23
 *   npm run adsense -- --by unit             # 광고 단위(수동 칸)별 합계
 *   npm run adsense -- --by device           # 날짜×기기(모바일/데스크톱) — 전체 로드 실험 판정용
 *
 * 핵심 지표는 **세션당 수익**이다(GA 세션으로 나눈다). AdSense 페이지뷰는 문서 로드만 세서
 * 클라이언트 이동(세션의 2번째 페이지부터)이 빠진다 — 9/1~21 AdSense PV 가 GA 세션과 1.05배로
 * 같았다. 그래서 AdSense 페이지 RPM 은 이동 방식이 바뀌면 정의가 흔들린다.
 *
 * 측정 함정 — 이 스크립트가 미리 막아둔 것:
 * - **이 AdSense 계정엔 다른 사이트(tistory·onestepblog 등)도 붙어 있다.** 필터 없이 뽑으면
 *   노출의 ~15%가 남의 사이트다. 항상 `DOMAIN_NAME==allrunabout.com` 으로 거른다.
 * - **`PAGE_URL` 차원은 이 계정에서 거의 비어 있다**(9/15~21 에 홈 1행만 반환). 페이지별 분석은 불가.
 * - 자동/수동은 `AD_PLACEMENT_NAME`(Auto ads / Manual)으로 직접 나눈다. 앵커는 `AD_FORMAT_NAME=Anchor`.
 *
 * 인증: AdSense API 는 서비스 계정을 받지 않아 사용자 OAuth 토큰(adsense.readonly)을 쓴다.
 * 토큰은 레포에 두지 않는다 — `ADSENSE_TOKEN_FILE` → blog-auto 의 sessions/adsense_token.json
 * → 루트 `.adsense-token.json`(gitignore) 순으로 찾는다. refresh_token 으로 매번 갱신한다.
 *
 * 날짜는 계정 시간대(Asia/Seoul) 기준이고, 오늘 값은 부분일이다.
 */
import { readFileSync, existsSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import { OAuth2Client } from 'google-auth-library';
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { resolveKeyFile } from './lib/google-auth';

const ACCOUNT = 'accounts/pub-5040630448523471';
const DOMAIN = 'allrunabout.com';

function tokenFile(): string {
  const candidates = [
    process.env.ADSENSE_TOKEN_FILE,
    join(homedir(), 'Programming/sancho/blog-auto/sessions/adsense_token.json'),
    join(process.cwd(), '.adsense-token.json'),
  ].filter(Boolean) as string[];
  const found = candidates.find((p) => existsSync(p));
  if (!found) throw new Error(`AdSense 토큰 파일 없음 — 확인한 경로: ${candidates.join(', ')}`);
  return found;
}

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : undefined;
}

const ymd = (d: Date) => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(d);

function pad(s: string | number, n: number): string {
  const str = String(s);
  let w = 0;
  for (const ch of str) w += ch.charCodeAt(0) > 0x2e80 ? 2 : 1;
  return str + ' '.repeat(Math.max(0, n - w));
}

type Report = { rows?: { cells: { value: string }[] }[] };

const DEVICE: Record<string, string> = { 'High-end mobile devices': 'mobile', Desktop: 'desktop', Tablets: 'tablet' };

/** GA 세션 — key: 날짜(YYYY-MM-DD) 또는 날짜|기기 */
async function gaSessions(from: string, to: string, byDevice: boolean): Promise<Map<string, number>> {
  const ga = new BetaAnalyticsDataClient({ keyFilename: resolveKeyFile() });
  const [r] = await ga.runReport({
    property: `properties/${process.env.GA_PROPERTY_ID || '523714985'}`,
    dateRanges: [{ startDate: from, endDate: to }],
    dimensions: byDevice ? [{ name: 'date' }, { name: 'deviceCategory' }] : [{ name: 'date' }],
    metrics: [{ name: 'sessions' }],
    limit: 10000,
  });
  const out = new Map<string, number>();
  for (const row of r.rows ?? []) {
    const d = row.dimensionValues![0].value!;
    const date = `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
    const key = byDevice ? `${date}|${row.dimensionValues![1].value}` : date;
    out.set(key, Number(row.metricValues![0].value));
  }
  return out;
}

async function main() {
  const by = arg('by') ?? 'date';
  const to = arg('to') ?? ymd(new Date());
  const from = arg('from') ?? ymd(new Date(Date.now() - 13 * 86400_000));

  const t = JSON.parse(readFileSync(tokenFile(), 'utf8'));
  const client = new OAuth2Client(t.client_id, t.client_secret);
  client.setCredentials({ refresh_token: t.refresh_token });

  const report = async (dimensions: string[], metrics: string[]) => {
    const p = new URLSearchParams({ dateRange: 'CUSTOM', currencyCode: 'KRW', filters: `DOMAIN_NAME==${DOMAIN}` });
    const [fy, fm, fd] = from.split('-').map(Number);
    const [ty, tm, td] = to.split('-').map(Number);
    Object.entries({ 'startDate.year': fy, 'startDate.month': fm, 'startDate.day': fd, 'endDate.year': ty, 'endDate.month': tm, 'endDate.day': td })
      .forEach(([k, v]) => p.append(k, String(v)));
    dimensions.forEach((d) => p.append('dimensions', d));
    metrics.forEach((m) => p.append('metrics', m));
    const { data } = await client.request<Report>({ url: `https://adsense.googleapis.com/v2/${ACCOUNT}/reports:generate?${p}` });
    return (data.rows ?? []).map((r) => r.cells.map((c) => c.value));
  };

  console.log(`\n💰 AdSense ${DOMAIN} — ${from} ~ ${to} (KST, 오늘은 부분일)\n`);

  if (by === 'unit') {
    const rows = await report(['AD_UNIT_NAME'], ['IMPRESSIONS', 'CLICKS', 'ESTIMATED_EARNINGS']);
    console.log(pad('광고 단위', 22), pad('노출', 10), pad('클릭', 8), '수익(원)');
    for (const [name, imp, clk, earn] of rows.sort((a, b) => Number(b[1]) - Number(a[1]))) {
      console.log(pad(name, 22), pad(imp, 10), pad(clk, 8), Math.round(Number(earn)));
    }
    return;
  }

  const byDevice = by === 'device';
  const [rows, sessions] = await Promise.all([
    report(
      byDevice ? ['DATE', 'PLATFORM_TYPE_NAME', 'AD_PLACEMENT_NAME', 'AD_FORMAT_NAME'] : ['DATE', 'AD_PLACEMENT_NAME', 'AD_FORMAT_NAME'],
      ['IMPRESSIONS', 'ESTIMATED_EARNINGS'],
    ),
    gaSessions(from, to, byDevice),
  ]);
  const pvRows = byDevice ? [] : await report(['DATE'], ['PAGE_VIEWS']);
  const pv = new Map(pvRows.map(([d, v]) => [d, Number(v)]));

  // key → [자동 노출, 수동 노출, 앵커 노출, 수익]
  const agg = new Map<string, number[]>();
  for (const r of rows) {
    const [date, ...rest] = r;
    const device = byDevice ? DEVICE[rest.shift() as string] : undefined;
    if (byDevice && !device) continue; // Connected TV 등
    const [placement, format, imp, earn] = rest;
    const key = byDevice ? `${date}|${device}` : date;
    const a = agg.get(key) ?? [0, 0, 0, 0];
    if (placement === 'Manual') a[1] += Number(imp); else a[0] += Number(imp);
    if (format === 'Anchor') a[2] += Number(imp);
    a[3] += Number(earn);
    agg.set(key, a);
  }

  const per = (n: number, s: number) => (s ? (n / s).toFixed(2) : '-');
  const head = ['GA세션', ...(byDevice ? [] : ['AdSense PV']), '자동노출', '수동노출', '수익(원)', '수익/세션', '자동/세션', '앵커/세션'];
  console.log(pad(byDevice ? '날짜 · 기기' : '날짜', 20), ...head.map((h) => pad(h, 11)));
  const keys = Array.from(new Set(Array.from(agg.keys()).concat(Array.from(sessions.keys())))).filter((k) => !byDevice || !k.endsWith('|tablet')).sort();
  const total = new Map<string, number[]>(); // 기기별 기간 합계
  for (const key of keys) {
    const [auto, man, anchor, earn] = agg.get(key) ?? [0, 0, 0, 0];
    const s = sessions.get(key) ?? 0;
    const label = byDevice ? key.replace('|', ' · ') : key;
    console.log(pad(label, 20), ...[s, ...(byDevice ? [] : [pv.get(key) ?? 0]), auto, man, Math.round(earn), per(earn, s), per(auto, s), per(anchor, s)].map((v) => pad(v, 11)));
    const g = byDevice ? key.split('|')[1] : '전체';
    const t = total.get(g) ?? [0, 0, 0, 0, 0];
    [s, auto, man, anchor, earn].forEach((v, i) => (t[i] += v));
    total.set(g, t);
  }
  console.log('\n기간 합계');
  for (const [g, [s, auto, man, anchor, earn]] of Array.from(total.entries())) {
    console.log(pad(g, 20), `세션 ${s} · 수익 ${Math.round(earn)}원 · 수익/세션 ${per(earn, s)} · 자동/세션 ${per(auto, s)} · 앵커/세션 ${per(anchor, s)} · 수동/세션 ${per(man, s)}`);
  }
}

main().catch((e) => {
  console.error('❌', e.response?.status ?? '', JSON.stringify(e.response?.data ?? e.message).slice(0, 400));
  process.exit(1);
});
