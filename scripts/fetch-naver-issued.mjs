/**
 * 네이버 쇼핑 커넥트 "발급 링크 관리"에서 발급 내역을 수거해 JSON으로 저장한다.
 * 실행: npm run links:fetch
 *
 * 저장 위치: .omc/naver-issued-links.json (gitignore 대상)
 * 이 파일을 check-purchase-links.ts 가 읽어 naver.me 링크의 실제 판매 상태를 판정한다.
 *
 * ⚠️ 로컬 전용 — ego-browser(Ego Lite)에 네이버 로그인 세션이 있어야 한다. CI에서는 돌지 않는다.
 * 커넥트 화면은 페이지당 10건이라, 페이지네이션을 돌며 XHR 응답을 모아 합친다.
 */

import { spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const OUT = resolve(process.cwd(), '.omc/naver-issued-links.json');
const CREATOR_SPACE = '896243244568480';

const script = `
const task = await taskSpace(${process.env.EGO_SPACE ?? 42});
const p = task.page("p2");
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
console.log("__RESULT__" + JSON.stringify(uniq));
`;

console.log('🔗 네이버 커넥트 발급 내역 수거 중... (ego-browser 로그인 세션 필요)');

// ⚠️ ego-browser 는 스크립트의 console.log 를 stderr 로 내보낸다 — 둘 다 받아야 한다.
const proc = spawnSync('ego-browser', ['nodejs'], {
  input: script,
  encoding: 'utf8',
  timeout: 5 * 60 * 1000,
  maxBuffer: 64 * 1024 * 1024,
});
if (proc.error) {
  console.error('❌ ego-browser 실행 실패 —', proc.error.message);
  console.error('   Ego Lite 가 실행 중이고 브랜드커넥트에 로그인돼 있는지 확인할 것.');
  process.exit(1);
}
const stdout = (proc.stdout ?? '') + (proc.stderr ?? '');

// ego-browser 가 JSON 뒤에 자체 출력(안내·개행)을 덧붙일 수 있으므로
// 마커 뒤 첫 '[' 부터 마지막 ']' 까지만 잘라 쓴다.
const marker = stdout.lastIndexOf('__RESULT__');
if (marker < 0) {
  console.error('❌ 응답을 파싱하지 못했다. ego-browser 출력:\n' + stdout.slice(-800));
  process.exit(1);
}
const tail = stdout.slice(marker + '__RESULT__'.length);
const from = tail.indexOf('[');
const to = tail.lastIndexOf(']');
if (from < 0 || to <= from) {
  console.error('❌ JSON 배열을 찾지 못했다. 꼬리 출력:\n' + tail.slice(0, 500));
  process.exit(1);
}

let rows;
try {
  rows = JSON.parse(tail.slice(from, to + 1));
} catch (error) {
  console.error('❌ JSON 파싱 실패 —', error.message);
  process.exit(1);
}
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
