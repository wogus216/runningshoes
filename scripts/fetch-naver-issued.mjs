/**
 * 네이버 쇼핑 커넥트 "발급 링크 관리"의 발급 내역을 수거해 JSON으로 저장한다.
 * 실행: npm run links:fetch
 *
 * 저장 위치: .omc/naver-issued-links.json (gitignore 대상)
 * 이 파일을 check-purchase-links.ts 가 읽어 naver.me 링크의 실제 판매 상태를 판정한다.
 *
 * ⚠️ 로컬 전용 — Aside 브라우저에 네이버 로그인 세션이 있어야 한다. CI에서는 돌지 않는다.
 *
 * 2026-10-18 aside repl 로 이식 (ego-browser 는 2026-10-08 제거됐다):
 * - 화면 페이지네이션·XHR 훅 대신 목록 API 를 페이지 안에서 직접 부른다.
 *   `POST gw-brandconnect.naver.com/affiliate/query/affiliate-urls/search` + 헤더 `X-Space-Id`.
 *   본문은 앱이 보내는 형식 그대로여야 한다 — sortType 을 앱에 없는 값으로 바꾸면 400 이 난다.
 * - `enable` 을 빼고 부른다. 화면 기본 필터("진행 상태 ON")로 모으면 커넥트 OFF 링크가 빠져
 *   체커가 "발급 내역에 없음"으로 읽는다. ON·OFF 를 따로 한 번 더 불러 합친다.
 *
 * 안전장치 (2026-09-29):
 * - 수거 0건이거나 로그인 페이지로 튕겼으면 파일을 덮어쓰지 않고 exit 1.
 *   이 파일은 모든 worktree 가 링크로 공유한다 — 9/29 무로그인 실행이 0건으로 덮어써 체커가 눈을 잃었다.
 */

import { spawnSync } from 'node:child_process';
import { mkdirSync, realpathSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const OUT = resolve(process.cwd(), '.omc/naver-issued-links.json');
const CREATOR_SPACE = '896243244568480';

/** aside repl 로 넘길 스크립트. 한 번의 호출 안에서 끝낸다(호출마다 새 세션). */
export function buildScript(today = new Date().toISOString().slice(0, 10)) {
  return `
const nvTab = await openTab("https://brandconnect.naver.com/${CREATOR_SPACE}/affiliate/products-link");
const nvLanded = page.url();
const nvRows = await page.evaluate(async ({ space, today }) => {
  const all = [];
  for (const enable of [undefined, true, false]) {
    for (let pageNo = 1; pageNo <= 30; pageNo++) {
      const body = {
        name: "", minCommissionRate: 1, maxCommissionRate: 50,
        minAffiliateUrlCreatedDate: "2024-01-01", maxAffiliateUrlCreatedDate: today,
        pageSize: 100, sortType: "AFFILIATE_URL_COMMISSION_RATE", page: pageNo,
      };
      if (enable !== undefined) body.enable = enable;
      const res = await fetch("https://gw-brandconnect.naver.com/affiliate/query/affiliate-urls/search", {
        method: "POST", credentials: "include",
        headers: { Accept: "application/json, text/plain, */*", "Content-Type": "application/json", "X-Space-Id": space },
        body: JSON.stringify(body),
      });
      if (!res.ok) return { error: "HTTP " + res.status + " (enable=" + enable + ", page=" + pageNo + ")" };
      const j = await res.json();
      const data = j.data || [];
      all.push(...data);
      if (data.length < 100) break;
    }
  }
  return { rows: [...new Map(all.map((r) => [r.affiliateUrlId, r])).values()] };
}, { space: "${CREATOR_SPACE}", today: ${JSON.stringify(today)} });
await closeTab(nvTab);
console.log("__URL__" + nvLanded);
if (nvRows.error) console.log("__ERROR__" + nvRows.error);
console.log("__RESULT__" + JSON.stringify(nvRows.rows || []));
`;
}

/**
 * aside repl 출력에서 수거 결과를 꺼낸다. 실패하면 { error }.
 * aside 가 출력 끝에 자체 줄("[ok | 1234ms]")을 덧붙이므로 — 그 안에도 ']' 가 있다 —
 * 마커가 있는 줄 하나만 잘라 그 안의 첫 '[' 부터 마지막 ']' 까지 쓴다.
 */
export function parseAsideOutput(output) {
  const urlAt = output.lastIndexOf('__URL__');
  const finalUrl = urlAt < 0 ? null : output.slice(urlAt + '__URL__'.length).split('\n')[0].trim();
  const marker = output.lastIndexOf('__RESULT__');
  if (marker < 0) return { error: '응답을 파싱하지 못했다. aside 출력:\n' + output.slice(-800) };
  const tail = output.slice(marker + '__RESULT__'.length).split('\n')[0];
  const from = tail.indexOf('[');
  const to = tail.lastIndexOf(']');
  if (from < 0 || to <= from) return { error: 'JSON 배열을 찾지 못했다. 꼬리 출력:\n' + tail.slice(0, 500) };
  try {
    return { rows: JSON.parse(tail.slice(from, to + 1)), finalUrl };
  } catch (error) {
    return { error: 'JSON 파싱 실패 — ' + error.message };
  }
}

/** 덮어써도 되는 결과인가. 안 되면 사유 문자열, 되면 null. */
export function refuseToWrite({ rows, finalUrl }) {
  if (!Array.isArray(rows)) return '수거 결과가 배열이 아니다.';
  const loginPage = Boolean(finalUrl) && /nid\.naver\.com|nidlogin|\/login/i.test(finalUrl);
  if (rows.length > 0 && !loginPage) return null;
  return (
    `수거 ${rows.length}건${loginPage ? ` · 로그인 페이지로 이동됨 (${finalUrl})` : ''} — 네이버 로그인이 필요하다.\n` +
    '   Aside 브라우저에서 brandconnect.naver.com 에 로그인한 뒤 다시 실행할 것. 기존 파일은 덮어쓰지 않았다.'
  );
}

function main() {
  console.log('🔗 네이버 커넥트 발급 내역 수거 중... (Aside 브라우저 로그인 세션 필요)');

  const proc = spawnSync('aside', ['repl', buildScript()], {
    encoding: 'utf8',
    timeout: 3 * 60 * 1000,
    maxBuffer: 64 * 1024 * 1024,
  });
  if (proc.error) {
    console.error('❌ aside 실행 실패 —', proc.error.message);
    console.error('   Aside 가 실행 중이고 브랜드커넥트에 로그인돼 있는지 확인할 것.');
    process.exit(1);
  }
  const output = (proc.stdout ?? '') + (proc.stderr ?? '');
  const apiError = output.match(/__ERROR__(.*)/)?.[1];
  if (apiError) {
    console.error('❌ 목록 API 실패 — ' + apiError + '. 기존 파일은 덮어쓰지 않았다.');
    process.exit(1);
  }

  const parsed = parseAsideOutput(output);
  if (parsed.error) {
    console.error('❌ ' + parsed.error);
    process.exit(1);
  }
  const refusal = refuseToWrite(parsed);
  if (refusal) {
    console.error('❌ ' + refusal);
    process.exit(1);
  }

  const { rows } = parsed;
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify({ fetchedAt: new Date().toISOString(), rows }, null, 1));

  const tally = {};
  for (const r of rows) tally[r.productStatus] = (tally[r.productStatus] ?? 0) + 1;

  console.log(`✅ ${rows.length}건 저장 → ${OUT}`);
  console.log(
    '   상태별: ' +
      Object.entries(tally)
        .sort((a, b) => b[1] - a[1])
        .map(([k, v]) => `${k} ${v}`)
        .join(' · '),
  );
  console.log('\n다음: npm run links:check');
}

// import 해서 함수만 쓸 때(단위 확인)는 실행하지 않는다.
if (process.argv[1] && import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href) main();
