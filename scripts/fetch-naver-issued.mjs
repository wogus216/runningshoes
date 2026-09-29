/**
 * 네이버 쇼핑 커넥트 "발급 링크 관리"에서 발급 내역을 수거해 JSON으로 저장한다.
 * 실행: npm run links:fetch
 *       EGO_SPACE=<TaskSpace 번호> npm run links:fetch   # 이미 열어 둔 공간을 쓸 때
 *
 * 저장 위치: .omc/naver-issued-links.json (gitignore 대상)
 * 이 파일을 check-purchase-links.ts 가 읽어 naver.me 링크의 실제 판매 상태를 판정한다.
 *
 * ⚠️ 로컬 전용 — ego-browser(Ego Lite)에 네이버 로그인 세션이 있어야 한다. CI에서는 돌지 않는다.
 * 커넥트 화면은 페이지당 10건이라, 페이지네이션을 돌며 XHR 응답을 모아 합친다.
 *
 * 안전장치 (2026-09-29):
 * - 수거 0건이거나 로그인 페이지로 튕겼으면 파일을 덮어쓰지 않고 exit 1.
 *   이 파일은 모든 worktree 가 링크로 공유한다 — 9/29 무로그인 실행이 0건으로 덮어써 체커가 눈을 잃었다.
 * - EGO_SPACE 미지정 시 이름으로 TaskSpace 를 만들어 기본 페이지 p1 을 쓰고, 끝나면 finish 한다.
 *   (옛 기본값 42 는 없는 공간이라 `task space not found: 42`, 지정해도 `page label not found: p2` 로 실패했다)
 *   지정 시엔 그 공간의 첫 관리 페이지를 쓰고, 없으면 newPage() 로 만든다. 남의 공간이므로 finish 하지 않는다.
 */

import { spawnSync } from 'node:child_process';
import { mkdirSync, realpathSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const OUT = resolve(process.cwd(), '.omc/naver-issued-links.json');
const CREATOR_SPACE = '896243244568480';
const SPACE_NAME = 'naver-connect-links-fetch';

/** ego-browser nodejs 로 넘길 스크립트. egoSpace 는 숫자 문자열 또는 undefined. */
export function buildScript(egoSpace) {
  const open = egoSpace
    ? `const task = await taskSpace(${Number(egoSpace)});\nconst created = false;`
    : `const task = await taskSpace(${JSON.stringify(SPACE_NAME)});\nconst created = true;`;
  return `
${open}
const p = (await task.pages())[0] ?? (await task.newPage());
await p.cdp("Page.addScriptToEvaluateOnNewDocument", {
  source: \`
    window.__cap = [];
    (function(){
      const ox = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function(m,u){
        this.addEventListener("load", ()=>{ try{ if(/affiliate-urls\\\\/search/.test(String(u))) window.__cap.push(String(this.responseText)); }catch(e){} });
        return ox.apply(this, arguments);
      };
      const of = window.fetch;
      window.fetch = async function(...a){
        const res = await of.apply(this,a);
        try { if(/affiliate-urls\\\\/search/.test(String(a[0]))) { const c=res.clone(); c.text().then(t=>window.__cap.push(t)).catch(()=>{}); } } catch(e){}
        return res;
      };
    })();
  \`,
});
await p.goto("https://brandconnect.naver.com/${CREATOR_SPACE}/affiliate/products-link");
await p.waitForTimeout(6000);
const landed = await p.url();
for (let i = 0; i < 40; i++) {
  const moved = await p.evaluate(() => {
    const cand = [...document.querySelectorAll("button,a")].filter((b) => {
      const t = (b.textContent || "").trim();
      return t === "다음" || /다음/.test(b.getAttribute("aria-label") || "") || /next/i.test(b.className);
    });
    const b = cand.find((x) => !x.disabled);
    if (b) { b.click(); return true; }
    return false;
  });
  if (!moved) break;
  await p.waitForTimeout(2200);
}
const caps = await p.evaluate(() => window.__cap || []);
const rows = [];
for (const c of caps) { try { (JSON.parse(c).data || []).forEach((r) => rows.push(r)); } catch (e) {} }
const uniq = [...new Map(rows.map((r) => [r.affiliateUrlId, r])).values()];
if (created) {
  try { await task.finish({ keep: [] }); } catch (e) { console.log("__FINISH_ERROR__" + e.message); }
}
console.log("__URL__" + landed);
console.log("__RESULT__" + JSON.stringify(uniq));
`;
}

/**
 * ego-browser 출력에서 수거 결과를 꺼낸다. 실패하면 { error }.
 * ego-browser 가 JSON 뒤에 자체 출력(안내·개행)을 덧붙일 수 있으므로
 * 마커 뒤 첫 '[' 부터 마지막 ']' 까지만 잘라 쓴다.
 */
export function parseEgoOutput(output) {
  const urlAt = output.lastIndexOf('__URL__');
  const finalUrl = urlAt < 0 ? null : output.slice(urlAt + '__URL__'.length).split('\n')[0].trim();
  const marker = output.lastIndexOf('__RESULT__');
  if (marker < 0) return { error: '응답을 파싱하지 못했다. ego-browser 출력:\n' + output.slice(-800) };
  const tail = output.slice(marker + '__RESULT__'.length);
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
    '   Ego Lite 에서 brandconnect.naver.com 에 로그인한 뒤 다시 실행할 것. 기존 파일은 덮어쓰지 않았다.'
  );
}

function main() {
  const egoSpace = process.env.EGO_SPACE;
  if (egoSpace !== undefined && !/^\d+$/.test(egoSpace)) {
    console.error(`❌ EGO_SPACE 는 TaskSpace 번호(숫자)여야 한다: "${egoSpace}". 비우면 새 공간을 만든다.`);
    process.exit(1);
  }

  console.log('🔗 네이버 커넥트 발급 내역 수거 중... (ego-browser 로그인 세션 필요)');
  console.log(egoSpace ? `   TaskSpace ${egoSpace} 사용` : `   새 TaskSpace "${SPACE_NAME}" 생성 → 끝나면 닫음`);

  // ⚠️ ego-browser 는 스크립트의 console.log 를 stderr 로 내보낸다 — 둘 다 받아야 한다.
  const proc = spawnSync('ego-browser', ['nodejs'], {
    input: buildScript(egoSpace),
    encoding: 'utf8',
    timeout: 5 * 60 * 1000,
    maxBuffer: 64 * 1024 * 1024,
  });
  if (proc.error) {
    console.error('❌ ego-browser 실행 실패 —', proc.error.message);
    console.error('   Ego Lite 가 실행 중이고 브랜드커넥트에 로그인돼 있는지 확인할 것.');
    process.exit(1);
  }
  const output = (proc.stdout ?? '') + (proc.stderr ?? '');
  if (output.includes('__FINISH_ERROR__')) console.warn('⚠️  TaskSpace 정리(finish) 실패 — 수거 결과는 계속 처리한다.');

  const parsed = parseEgoOutput(output);
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
