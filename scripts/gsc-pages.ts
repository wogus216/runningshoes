#!/usr/bin/env tsx
/**
 * GSC 페이지별 진단 — 특정 글 묶음의 노출·클릭·순위와 실제 유입 검색어를 본다.
 *
 * `npm run gsc`(전체 상위 12페이지)로는 개별 글의 성과를 알 수 없다.
 * 발행한 글이 "안 먹혔다"고 판단하기 전에 이 스크립트로 실제 수치를 확인한다.
 *
 * 사용법:
 *   npm run gsc:pages -- <slug|경로조각> [...]        # 최근 90일
 *   npm run gsc:pages -- --days=180 <slug> [...]
 *   npm run gsc:pages -- --since=2026-05-25 <slug> [...]
 *   npm run gsc:pages -- --prefix=/blog/ unique-running-courses-7   # 부분일치 묶음
 *
 * 예:
 *   npm run gsc:pages -- unique-running-courses-7
 *   npm run gsc:pages -- --days=30 asics-gel-kayano-33-review
 *
 * ⚠️ 앵커 URL 함정: GSC는 `/blog/x`와 `/blog/x#heading-0`을 별도 행으로 준다.
 *    경로 기준으로 합산하지 않으면 앵커 행이 본문 행을 덮어써 수치가 1/40로 보인다
 *    (2026-08-18 실측: 카야노 후기가 노출 5,975 → 137로 보였음).
 *
 * 선행 조건은 gsc-report.ts와 동일(서비스 계정이 GSC 속성에 추가돼 있어야 함).
 */
import { resolveKeyFile } from './lib/google-auth';
import { JWT } from 'google-auth-library';

const SITE_CANDIDATES = process.env.GSC_SITE
  ? [process.env.GSC_SITE]
  : ['sc-domain:allrunabout.com', 'https://allrunabout.com/'];

type Row = { keys: string[]; clicks: number; impressions: number; ctr: number; position: number };
type Agg = { clicks: number; impressions: number; posSum: number; impForPos: number };

async function query(client: JWT, site: string, body: object): Promise<Row[]> {
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`;
  const res = await client.request<{ rows?: Row[] }>({ url, method: 'POST', data: body });
  return res.data.rows ?? [];
}

function pathOf(u: string): string {
  try {
    return new URL(u).pathname.replace(/\/$/, '');
  } catch {
    return u;
  }
}

function addTo(map: Map<string, Agg>, key: string, r: Row): void {
  const cur = map.get(key) ?? { clicks: 0, impressions: 0, posSum: 0, impForPos: 0 };
  cur.clicks += r.clicks;
  cur.impressions += r.impressions;
  cur.posSum += r.position * r.impressions; // 노출 가중 평균순위
  cur.impForPos += r.impressions;
  map.set(key, cur);
}

const pos = (a: Agg): number => (a.impForPos ? a.posSum / a.impForPos : 0);
const ctr = (a: Agg): number => (a.impressions ? (a.clicks / a.impressions) * 100 : 0);

async function main() {
  const argv = process.argv.slice(2);
  const days = Number(argv.find((a) => a.startsWith('--days='))?.slice(7)) || 90;
  const since = argv.find((a) => a.startsWith('--since='))?.slice(8);
  const prefix = argv.find((a) => a.startsWith('--prefix='))?.slice(9) ?? '';
  const targets = argv.filter((a) => !a.startsWith('--'));

  if (!targets.length) {
    console.error('사용법: npm run gsc:pages -- <slug|경로조각> [...]');
    console.error('예:    npm run gsc:pages -- unique-running-courses-7');
    process.exit(1);
  }

  // GSC 데이터는 약 3일 지연된다
  const end = new Date(Date.now() - 3 * 864e5);
  const start = since ? new Date(since) : new Date(end.getTime() - days * 864e5);
  const startDate = start.toISOString().slice(0, 10);
  const endDate = end.toISOString().slice(0, 10);

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const key = require(resolveKeyFile());
  const client = new JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  // ⚠️ page 차원과 query+page 차원은 총계가 다르다.
  //    query를 붙이면 GSC가 저볼륨 검색어를 익명화하며 그 노출이 통째로 빠진다
  //    (2026-08-18 실측: 코스 13편이 page 기준 2,054 vs query+page 기준 320).
  //    따라서 페이지별 수치는 page 차원으로, 검색어 분석은 query+page로 따로 조회한다.
  let site = '';
  let pageRows: Row[] = [];
  let lastErr = '';
  for (const cand of SITE_CANDIDATES) {
    try {
      pageRows = await query(client, cand, {
        startDate,
        endDate,
        dimensions: ['page'],
        rowLimit: 25000,
      });
      site = cand;
      break;
    } catch (e) {
      lastErr = (e as Error).message;
    }
  }
  if (!site) {
    console.error(`GSC 속성 접근 실패: ${lastErr}`);
    process.exit(1);
  }

  const hitsPath = (p: string): boolean => {
    if (prefix && !p.startsWith(prefix)) return false;
    return targets.some((t) => p.includes(t));
  };

  const byPage = new Map<string, Agg>();
  for (const r of pageRows) {
    const p = pathOf(r.keys[0]);
    if (hitsPath(p)) addTo(byPage, p, r); // 앵커 URL 합산
  }

  console.log(`\n📊 GSC 페이지 진단 — ${startDate} ~ ${endDate}`);
  console.log(`   속성 ${site} · 대상 "${targets.join('", "')}"${prefix ? ` · prefix ${prefix}` : ''}`);

  if (!byPage.size) {
    console.log('\n  ⛔ 노출 0 — 색인이 안 됐거나 해당 검색어에서 전혀 노출되지 않고 있다.\n');
    return;
  }

  console.log('\n━━━ 페이지별 (page 차원 = 실제 총계) ━━━');
  const pages = Array.from(byPage.entries()).sort((a, b) => b[1].impressions - a[1].impressions);
  let tImp = 0;
  let tClick = 0;
  for (const [p, a] of pages) {
    tImp += a.impressions;
    tClick += a.clicks;
    console.log(
      `  노출 ${String(a.impressions).padStart(6)} · 클릭 ${String(a.clicks).padStart(4)} · CTR ${ctr(a).toFixed(1).padStart(5)}% · 순위 ${pos(a).toFixed(1).padStart(5)}  ${p}`,
    );
  }
  console.log(`  → 합계 노출 ${tImp} · 클릭 ${tClick} · 페이지 ${pages.length}개\n`);

  const qRows = await query(client, site, {
    startDate,
    endDate,
    dimensions: ['query', 'page'],
    rowLimit: 25000,
  });
  const byQuery = new Map<string, Agg>();
  for (const r of qRows) {
    if (hitsPath(pathOf(r.keys[1]))) addTo(byQuery, r.keys[0], r);
  }

  if (!byQuery.size) {
    console.log('━━━ 유입 검색어 ━━━\n  (공개된 검색어 없음 — 전부 익명화된 저볼륨 쿼리)\n');
    return;
  }

  console.log('━━━ 유입 검색어 TOP 20 ━━━');
  const queries = Array.from(byQuery.entries()).sort((a, b) => b[1].impressions - a[1].impressions).slice(0, 20);
  for (const [q, a] of queries) {
    console.log(
      `  노출 ${String(a.impressions).padStart(5)} · 클릭 ${String(a.clicks).padStart(4)} · 순위 ${pos(a).toFixed(1).padStart(5)}  "${q}"`,
    );
  }
  const shown = Array.from(byQuery.values()).reduce((s, a) => s + a.impressions, 0);
  const pct = tImp ? ((shown / tImp) * 100).toFixed(0) : '0';
  console.log(
    `\n  ⚠️ 검색어가 공개된 노출은 ${shown}/${tImp}건(${pct}%)뿐이다. 나머지는 GSC가 익명화한 저볼륨 쿼리로,`,
  );
  console.log('     "유입 검색어가 이게 전부"라고 읽으면 안 된다.\n');
}

main().catch((e) => {
  console.error(e?.message || e);
  process.exit(1);
});
