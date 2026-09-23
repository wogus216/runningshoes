#!/usr/bin/env tsx
/**
 * AdSense 리포트 — 일자별 노출·수익, 수동 광고 칸 vs Auto ads 분리 (AdSense Management API v2, 읽기 전용)
 *
 * 사용법:
 *   npm run adsense                          # 최근 14일, 일자별
 *   npm run adsense -- --from 2026-09-15 --to 2026-09-23
 *   npm run adsense -- --by unit             # 광고 단위(수동 칸)별 합계
 *
 * 측정 함정 — 이 스크립트가 미리 막아둔 것:
 * - **이 AdSense 계정엔 다른 사이트(tistory·onestepblog 등)도 붙어 있다.** 필터 없이 뽑으면
 *   노출의 ~15%가 남의 사이트다. 항상 `DOMAIN_NAME==allrunabout.com` 으로 거른다.
 * - **`PAGE_URL` 차원은 이 계정에서 거의 비어 있다**(9/15~21 에 홈 1행만 반환). 페이지별 분석은 불가.
 * - Auto ads 는 광고 단위 이름이 없다 → `자동 = 사이트 전체 노출 − 수동 단위 노출 합` 으로 역산한다.
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

  const [daily, units] = await Promise.all([
    report(['DATE'], ['PAGE_VIEWS', 'IMPRESSIONS', 'CLICKS', 'ESTIMATED_EARNINGS', 'PAGE_VIEWS_RPM']),
    report(['DATE', 'AD_UNIT_NAME'], ['IMPRESSIONS']),
  ]);
  const manual = new Map<string, number>();
  for (const [date, , imp] of units) manual.set(date, (manual.get(date) ?? 0) + Number(imp));

  console.log(pad('날짜', 12), ...['페이지뷰', '노출', '수동칸', '자동(역산)', '클릭', '수익(원)', 'RPM'].map((h) => pad(h, 10)));
  for (const [date, pv, imp, clk, earn, rpm] of daily) {
    const m = manual.get(date) ?? 0;
    console.log(pad(date, 12), ...[pv, imp, m, Number(imp) - m, clk, Math.round(Number(earn)), Math.round(Number(rpm))].map((v) => pad(v, 10)));
  }
}

main().catch((e) => {
  console.error('❌', e.response?.status ?? '', JSON.stringify(e.response?.data ?? e.message).slice(0, 400));
  process.exit(1);
});
