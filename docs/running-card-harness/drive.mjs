// Drives /running-card in headless Chrome over CDP with mouse clicks at element centres, then saves the share images
// through the result card's own buttons and reads them back from the '열기' links (blob URLs).
// Usage: node drive.mjs <outDir> <url> [label] [distanceKm] [hard] [goal]
// Ad and analytics hosts are blocked (a headless run must not count as ad impressions).
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const [OUT, URL_, LABEL = 'run', DIST = '', HARD = '2', GOAL = 'habit'] = process.argv.slice(2);
fs.mkdirSync(OUT, { recursive: true });
const PORT = 9300 + Math.floor(Math.random() * 600);
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${path.join(OUT, `.chrome-${PORT}`)}`,
  '--window-size=390,844', '--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--no-first-run', '--force-device-scale-factor=2', '--host-resolver-rules=MAP *googlesyndication.com 0.0.0.0, MAP *doubleclick.net 0.0.0.0, MAP *google-analytics.com 0.0.0.0, MAP *googletagmanager.com 0.0.0.0, MAP *adtrafficquality.google 0.0.0.0, MAP *googleadservices.com 0.0.0.0, MAP *fundingchoicesmessages.google.com 0.0.0.0', '--disable-extensions', '--disable-component-extensions-with-background-pages', 'about:blank',
], { stdio: 'ignore' });
const kill = () => { try { chrome.kill('SIGKILL'); } catch {} };
const watchdog = setTimeout(() => { console.log('WATCHDOG: 480s'); kill(); process.exit(2); }, 480000);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const LOGF = path.join(OUT, `${LABEL}-log.txt`);
const log = (...a) => { const line = `[${new Date().toISOString().slice(11, 19)}] [${LABEL}] ${a.map((x) => (typeof x === "string" ? x : JSON.stringify(x))).join(" ")}`; console.log(line); fs.appendFileSync(LOGF, line + "\n"); };

let ws;
for (let i = 0; i < 160 && !ws; i++) {
  try {
    const list = await (await fetch(`http://127.0.0.1:${PORT}/json`)).json();
    let page = null;
    if (list.length) page = await (await fetch(`http://127.0.0.1:${PORT}/json/new?${URL_}`, { method: "PUT" })).json();
    if (page) ws = new WebSocket(page.webSocketDebuggerUrl);
  } catch (e) { if (i % 40 === 39) console.log('waiting for chrome', String(e).slice(0, 120)); }
  if (!ws) await sleep(250);
}
if (!ws) { console.log('FAIL: no page target'); kill(); process.exit(1); }
await new Promise((r) => (ws.onopen = r)); log("connected", PORT);
let id = 0;
const pending = new Map();
const errors = [];
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); return; }
  if (m.method === 'Runtime.exceptionThrown') errors.push(m.params.exceptionDetails?.exception?.description?.slice(0, 300) || 'exception');
  if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') errors.push(m.params.args.map((a) => a.value ?? a.description).join(' ').slice(0, 300));
};
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (expression) => {
  const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description || JSON.stringify(r.result.exceptionDetails).slice(0, 300));
  return r.result?.result?.value;
};
// A real click: scroll the element into view, then press and release the mouse at its centre.
async function click(selector) {
  const box = await ev(`(() => { const e = document.querySelector(${JSON.stringify(selector)}); if (!e) return null; e.scrollIntoView({ block: 'center' }); const r = e.getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; })()`);
  if (!box) throw new Error(`no element ${selector}`);
  await sleep(120);
  for (const type of ['mousePressed', 'mouseReleased']) await send('Input.dispatchMouseEvent', { type, x: box.x, y: box.y, button: 'left', clickCount: 1 });
  await sleep(250);
}
const vis = (sel) => `(() => { const e = document.querySelector(${JSON.stringify(sel)}); return !!e && !e.closest('[hidden]') && e.getClientRects().length > 0; })()`;

log('setup'); await send('Network.enable'); log('network');
await send('Network.setBlockedURLs', { urls: ['*googlesyndication*', '*doubleclick*', '*googletagmanager*', '*google-analytics*', '*adtrafficquality*', '*googleadservices*', '*fundingchoices*'] });
await send('Runtime.enable');
await send('Page.enable');
await send('Browser.setDownloadBehavior', { behavior: 'deny' });
log('opened with the page');
for (let i = 0; i < 240 && !(await ev(`!!document.querySelector('#next')`)); i++) await sleep(500);
if (!(await ev(`!!document.querySelector('#next')`))) {
  log('FAIL: flow not mounted', await ev(`location.href + ' | ' + document.body.innerText.slice(0, 300)`));
  console.log(errors.join('\n')); kill(); process.exit(1);
}
await sleep(2500);

// The seven steps: samples confirmed, or the given distance typed; choices for 05–07.
for (let step = 0; step < 60; step++) {
  log("step", step, await ev(`document.querySelector("#chapter-name")?.textContent + " | " + document.querySelector("#next-label")?.textContent`));
  if (await ev(vis('.complete'))) break;
  if (await ev(vis('#sample-confirm'))) { await click('#sample-keep'); await sleep(900); continue; }
  if (await ev(vis('#race-goal'))) { await click('#race-goal-clear'); await sleep(600); continue; }
  if (await ev(vis('#hard-fields')) && !(await ev(`!!document.querySelector('input[name=hard]:checked')`))) { await click(`input[name=hard][value="${HARD}"] + span`); continue; }
  if (await ev(vis('#goal-fields')) && !(await ev(`!!document.querySelector('input[name=goal]:checked')`))) { await click(`input[name=goal][value="${GOAL}"] + span`); continue; }
  if (await ev(vis('#day-fields')) && !(await ev(`!!document.querySelector('[data-day][aria-pressed=true]')`))) { for (const d of [1, 3, 5]) await click(`[data-day="${d}"]`); continue; }
  if (DIST && step === 0 && await ev(vis('#record-value'))) {
    await click('#record-value'); await sleep(400);
    await ev(`(() => { const i = document.activeElement; if (i && i.tagName === 'INPUT') { i.select(); } return i && i.id; })()`);
    await send('Input.insertText', { text: DIST }); await sleep(400);
  }
  await click('#next'); await sleep(1400);
}
if (!(await ev(vis('.complete')))) { log('FAIL: never reached the finished medal'); console.log(errors.join('\n')); kill(); process.exit(1); }
await sleep(3500);
const figure = await ev(`document.querySelector('#complete-epithet')?.textContent`);
log('완성:', figure);
await click('#open-result');
await sleep(3500);
const name = await ev(`(() => { const h = document.querySelector('.rc-share') && document.querySelector('h2, .rc-name, [class*=name]'); return document.title + ' | ' + (document.querySelector('.rcm h2')?.textContent || ''); })()`);
log('결과:', name);

async function grab(tag) {
  // Intercept only the new-tab destination; render the current settings through the real button.
  await ev(`window.__qaOpenOriginal = window.open; window.__qaCreateOriginal = URL.createObjectURL; window.__qaBlobs = {}; URL.createObjectURL = (blob) => {const url = window.__qaCreateOriginal(blob); window.__qaBlobs[url] = blob; return url}; window.__qaImageUrls = []; window.open = () => ({opener: null, document: {body: {}}, location: {set href(url) {window.__qaImageUrls.push(url)}}, close() {}})`);
  for (const [i, selector] of ['.rc-open button:first-child', '.rc-open button:last-child'].entries()) {
    await click(selector);
    for (let wait = 0; wait < 120; wait++) {
      await sleep(250);
      if (await ev(`window.__qaImageUrls.length > ${i}`)) break;
    }
    const href = await ev(`window.__qaImageUrls[${i}]`);
    if (!href) throw new Error('current-settings image did not open');
    const b64 = await ev(`new Promise(res => { const f = new FileReader(); f.onload = () => res(f.result.split(',')[1]); f.readAsDataURL(window.__qaBlobs[${JSON.stringify(href)}]); })`);
    const file = path.join(OUT, `${LABEL}-${tag}-${i + 1}.png`);
    fs.writeFileSync(file, Buffer.from(b64, 'base64'));
    log('저장', path.basename(file), fs.statSync(file).size);
  }
  await ev('window.open = window.__qaOpenOriginal; URL.createObjectURL = window.__qaCreateOriginal');
}
async function saveTwo(tag) {
  await click('.rc-actions .rc-primary');
  for (let i = 0; i < 80; i++) { await sleep(500); if (await ev(`(() => { const s = document.querySelector('.rc-status')?.textContent || ''; return /저장을 시작|만들었어요|새 탭/.test(s) || /만들지 못/.test(s); })()`)) break; }
  log(tag, await ev(`document.querySelector('.rc-status')?.textContent`));
  await grab(tag);
}
const pressed = () => ev(`document.querySelector('.rc-toggle')?.getAttribute('aria-pressed')`);
for (const kind of ['feed', 'story']) {
  await click(`input[name=rc-size][value=${kind}] + span`);
  if ((await pressed()) === 'true') await click('.rc-toggle');
  await saveTwo(`${kind}-shown`);
  await click('.rc-toggle');
  log('toggle', await pressed());
  await saveTwo(`${kind}-hidden`);
  await click('.rc-toggle');
  await grab(`${kind}-shown-without-saving`);
  await click('.rc-toggle');
  await grab(`${kind}-hidden-without-saving`);
}
// The share section as it reads on the phone.
await ev(`document.querySelector('.rc-share').scrollIntoView({ block: 'start' })`);
await sleep(600);
// The same settings must redraw identical PNG bytes even without pressing Save again.
for (const kind of ['feed', 'story']) {
  for (const mode of ['shown', 'hidden']) {
    for (const page of [1, 2]) {
      const saved = fs.readFileSync(path.join(OUT, `${LABEL}-${kind}-${mode}-${page}.png`));
      const reopened = fs.readFileSync(path.join(OUT, `${LABEL}-${kind}-${mode}-without-saving-${page}.png`));
      if (!saved.equals(reopened)) throw new Error(`${kind} ${mode} reopened stale image ${page}`);
    }
  }
}
// Android-capable browsers receive actual PNG File objects through Web Share.
await ev(`(() => {navigator.canShare=({files})=>files?.every(f=>f.type==='image/png');navigator.share=async payload=>{window.__qaSharedFiles=payload.files.map(f=>({name:f.name,size:f.size,type:f.type}))}})()`);
await click('.rc-actions .rc-primary');
for(let i=0;i<80;i++){await sleep(500);if(await ev(`!!document.querySelector('.rc-share > button.rc-primary')`))break;}
await click('.rc-share > button.rc-primary');
const sharedFiles=await ev('window.__qaSharedFiles');
if(sharedFiles?.length!==2||sharedFiles.some(f=>f.size<1000||f.type!=='image/png'))throw new Error('native image share did not receive PNG files');
log('native share files',sharedFiles);
const shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(OUT, `${LABEL}-share-section.png`), Buffer.from(shot.result.data, 'base64'));
log('errors', errors.length ? errors : '없음');
clearTimeout(watchdog);
kill();
process.exit(errors.length ? 1 : 0);
