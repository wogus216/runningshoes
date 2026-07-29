#!/usr/bin/env tsx
/**
 * GSC(서치콘솔) 검색 성과 리포트 — GA4와 같은 서비스 계정 사용
 *
 * 사용법:
 *   npm run gsc             # 최근 28일
 *   npm run gsc -- 7        # 최근 7일
 *
 * 선행 조건 (1회, 운영자):
 *   ① GCP 프로젝트 blog-auto-494801에서 "Google Search Console API" 사용 설정
 *   ② GSC 속성 설정 > 사용자 및 권한에 ga-leader@blog-auto-494801.iam.gserviceaccount.com 추가 (전체 권한 불필요, '제한됨'이면 충분)
 *
 * 키 파일 해석 순서는 ga-report.ts와 동일 (GA_KEY_FILE → ~/Downloads/blog-auto-494801-*.json → ./.ga-key.json)
 */
import { JWT } from 'google-auth-library';
import { readdirSync, statSync, existsSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

function resolveKeyFile(): string {
  if (process.env.GA_KEY_FILE) return process.env.GA_KEY_FILE;
  const downloads = join(homedir(), 'Downloads');
  try {
    const matches = readdirSync(downloads)
      .filter((f) => /^blog-auto-494801-.*\.json$/.test(f))
      .map((f) => join(downloads, f))
      .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
    if (matches.length) return matches[0];
  } catch {
    /* Downloads 접근 불가 시 로컬 키로 폴백 */
  }
  const local = join(process.cwd(), '.ga-key.json');
  if (existsSync(local)) return local;
  return join(downloads, 'blog-auto-494801-4f5d2392338c.json');
}

// 속성 후보: 환경변수 우선, 없으면 도메인 속성 → URL 접두 속성 순서로 시도
const SITE_CANDIDATES = process.env.GSC_SITE
  ? [process.env.GSC_SITE]
  : ['sc-domain:allrunabout.com', 'https://allrunabout.com/'];

function pad(s: string, n: number): string {
  const str = String(s);
  let w = 0;
  for (const ch of str) w += ch.charCodeAt(0) > 0x2e80 ? 2 : 1;
  return str + ' '.repeat(Math.max(0, n - w));
}

function fmtDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

type Row = { keys: string[]; clicks: number; impressions: number; ctr: number; position: number };

async function query(client: JWT, site: string, body: object): Promise<Row[]> {
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`;
  const res = await client.request<{ rows?: Row[] }>({ url, method: 'POST', data: body });
  return res.data.rows ?? [];
}

async function main() {
  const days = Number(process.argv[2]) || 28;
  const keyFile = resolveKeyFile();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const key = require(keyFile);
  const client = new JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });

  // GSC 데이터는 2~3일 지연 — 종료일을 3일 전으로
  const end = new Date();
  end.setDate(end.getDate() - 3);
  const start = new Date(end);
  start.setDate(start.getDate() - days);
  const range = { startDate: fmtDate(start), endDate: fmtDate(end) };

  console.log(`\n🔎 GSC 리포트 — ${range.startDate} ~ ${range.endDate} (${days}일, 데이터 3일 지연 반영)`);
  console.log(`🔑 키: ${keyFile.replace(homedir(), '~')}`);

  // 접근 가능한 속성 찾기
  let site: string | null = null;
  let firstErr = '';
  for (const cand of SITE_CANDIDATES) {
    try {
      await query(client, cand, { ...range, rowLimit: 1 });
      site = cand;
      break;
    } catch (e) {
      firstErr = e instanceof Error ? e.message : String(e);
    }
  }
  if (!site) {
    console.error(`\n❌ 접근 가능한 GSC 속성이 없습니다 (시도: ${SITE_CANDIDATES.join(', ')})`);
    console.error(`   마지막 오류: ${firstErr}`);
    console.error(`   → GSC 속성에 서비스 계정(${key.client_email})이 사용자로 추가됐는지,`);
    console.error(`   → GCP에서 Search Console API가 사용 설정됐는지 확인하세요.`);
    process.exit(1);
  }
  console.log(`🌐 속성: ${site}\n`);

  // 1) 상위 검색어
  const queries = await query(client, site, { ...range, dimensions: ['query'], rowLimit: 15 });
  console.log('── 상위 검색어 (클릭순) ──');
  console.log(pad('검색어', 34) + pad('클릭', 7) + pad('노출', 8) + pad('CTR', 7) + '순위');
  for (const r of queries) {
    console.log(
      pad(r.keys[0], 34) + pad(String(r.clicks), 7) + pad(String(r.impressions), 8) +
      pad((r.ctr * 100).toFixed(1) + '%', 7) + r.position.toFixed(1)
    );
  }

  // 2) 순위 공략 후보: 평균 순위 5~12위 + 노출 상위 (순위 올리면 CTR 2배 구간)
  const all = await query(client, site, { ...range, dimensions: ['query'], rowLimit: 500 });
  const targets = all
    .filter((r) => r.position >= 5 && r.position <= 12 && r.impressions >= 50)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 12);
  console.log('\n── 순위 공략 후보 (5~12위 · 노출 50+ · 노출순) — 콘텐츠 보강 대상 ──');
  console.log(pad('검색어', 34) + pad('순위', 7) + pad('노출', 8) + pad('클릭', 7) + 'CTR');
  for (const r of targets) {
    console.log(
      pad(r.keys[0], 34) + pad(r.position.toFixed(1), 7) + pad(String(r.impressions), 8) +
      pad(String(r.clicks), 7) + (r.ctr * 100).toFixed(1) + '%'
    );
  }

  // 3) 상위 페이지
  const pages = await query(client, site, { ...range, dimensions: ['page'], rowLimit: 12 });
  console.log('\n── 상위 페이지 (클릭순) ──');
  console.log(pad('경로', 52) + pad('클릭', 7) + pad('노출', 8) + '순위');
  for (const r of pages) {
    const path = r.keys[0].replace(/^https?:\/\/[^/]+/, '') || '/';
    console.log(pad(path.slice(0, 50), 52) + pad(String(r.clicks), 7) + pad(String(r.impressions), 8) + r.position.toFixed(1));
  }

  // 4) 합계
  const total = await query(client, site, { ...range, rowLimit: 1 });
  if (total.length) {
    const t = total[0];
    console.log(`\n── 합계 ── 클릭 ${t.clicks} · 노출 ${t.impressions} · CTR ${(t.ctr * 100).toFixed(1)}% · 평균순위 ${t.position.toFixed(1)}`);
  }
}

main().catch((e) => {
  console.error('오류:', e instanceof Error ? e.message : e);
  process.exit(1);
});
