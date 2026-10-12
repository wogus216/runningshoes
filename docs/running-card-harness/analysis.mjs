// 실제 글꼴로 분석 이미지의 읽기 크기·잘림·숨김을 검증한다.
// node docs/running-card-harness/analysis.mjs <output>
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import os from 'node:os';
import { spawn, execFileSync } from 'node:child_process';

const [dest] = process.argv.slice(2);
if (!dest) throw new Error('output directory required');
const root = process.cwd(), output = path.resolve(dest);
fs.mkdirSync(output, { recursive: true });
const cards = JSON.parse(execFileSync(process.execPath, ['--require', 'tsx/cjs', '-e', `
const { RUNNER_CHARACTERS } = require('./src/lib/runner-analysis/characters.ts');
const { getCharacterPresentation, LEAD_TAG, RECOVERY_MARGIN_NOTE } = require('./src/lib/runner-analysis/presentation.ts');
const { analyzeRunner } = require('./src/lib/runner-analysis/analyze.ts');
const { explainRunner, runnerShareAnalysis } = require('./src/lib/runner-analysis/explain.ts');
const base = {windowDays:28,totalDistanceKm:96,runCount:12,averagePaceSecPerKm:360,longestRunKm:16,qualitySessionCount:1,goal:'habit',usualWeekdays:[1,3,5]};
const cases = [base, {...base,runCount:1,totalDistanceKm:5,longestRunKm:5,qualitySessionCount:0}, {...base,usualWeekdays:undefined}, {...base,qualitySessionCount:6}, {...base,usualWeekdays:[0,1,2,3,4,5,6]}, {...base,totalDistanceKm:123456789,runCount:123456,longestRunKm:123456,qualitySessionCount:6}];
const cards = [];
for (const [i,sample] of cases.entries()) for(const goal of ['habit','health_fun','record','race','endurance']) {
 const s={...sample,goal};
 for(const character of RUNNER_CHARACTERS) {
 const a=analyzeRunner(s,[character]),e=explainRunner(s,a),p=getCharacterPresentation(character.id);
 cards.push({id:i+'-'+goal+'-'+character.id,house:character.house,name:character.name,title:p.title,oracle:p.oracle,leadTag:LEAD_TAG,recoveryNote:RECOVERY_MARGIN_NOTE,analysis:{visible:runnerShareAnalysis(e,false),hidden:runnerShareAnalysis(e,true)}});
 }
}
console.log(JSON.stringify(cards));
`], { cwd: root, encoding: 'utf8', maxBuffer: 8*1024*1024 }));
const html = `<!doctype html><meta charset="utf-8"><style>
@import url('/type/pretendardvariable-dynamic-subset.css');
@font-face{font-family:StudySans;src:url('/font/medal-sans.woff2');font-weight:45 920}@font-face{font-family:StudyCondensed;src:url('/font/medal-condensed.woff2');font-weight:700}
</style><script type="module">
import {drawAnalysis, SHARE_SIZES} from '/module/medal3d-share.js';
window.make = async (cards) => {
 const report=[];let minFont=Infinity;
 for(const card of cards) for(const kind of ['feed','story']) for(const hidden of [false,true]) {
  const [width,height]=SHARE_SIZES[kind],canvas=Object.assign(document.createElement('canvas'),{width,height}),g=canvas.getContext('2d');
  const original=g.fillText.bind(g), texts=[];
  g.fillText=(text,x,y)=>{
   const metrics=g.measureText(text),left=g.textAlign==='right'?x-metrics.width:x;
   if(left<83||left+metrics.width>width-83||y>height||y<0)throw new Error('text overflow '+card.id+' '+text);
   const size=parseFloat(g.font.match(/([0-9.]+)px/)[1]);minFont=Math.min(minFont,size);
   texts.push({text,size});original(text,x,y);
  };
  try {await drawAnalysis(g,kind,card,hidden);}catch(e){throw new Error(card.id+' '+kind+' '+hidden+': '+e.message);}
  const save=card.id==='0-habit-athena'||card.id==='1-health_fun-hestia';
  report.push({id:card.id,kind,hidden,png:save?canvas.toDataURL('image/png').split(',')[1]:undefined});
 }
 return {report,minFont};
};
window.ready=true;
</script>`;
const modules = new Set(['medal3d-share.js']);
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://qa').pathname;
  if (url === '/') { res.setHeader('content-type', 'text/html'); res.end(html); return; }
  let file;
  if (url.startsWith('/module/') && modules.has(url.slice(8))) file = path.join(root, 'src/components/running-card/medal', url.slice(8));
  if (url.startsWith('/font/') && ['medal-sans.woff2', 'medal-condensed.woff2'].includes(url.slice(6))) file = path.join(root, 'src/components/running-card/medal/fonts', url.slice(6));
  if (url.startsWith('/three/') && ['three.module.js', 'three.core.js'].includes(url.slice(7))) file = path.join(root, 'node_modules/three/build', url.slice(7));
  if (url.startsWith('/type/') && /^(?:woff2-dynamic-subset\/)?[\w.-]+$/.test(url.slice(6))) file = path.join(root, 'src/app/fonts/pretendard-dynamic', url.slice(6));
  if (!file || !fs.existsSync(file)) { res.writeHead(404); res.end('not found'); return; }
  res.setHeader('content-type', file.endsWith('.css') ? 'text/css' : file.endsWith('.woff2') ? 'font/woff2' : 'text/javascript');
  fs.createReadStream(file).pipe(res);
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const port = 9900 + Math.floor(Math.random() * 500), profile = fs.mkdtempSync(path.join(os.tmpdir(), 'm2-cover-chrome-'));
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--no-first-run', '--disable-extensions', '--enable-unsafe-swiftshader', '--use-angle=swiftshader', 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(r => setTimeout(r, ms));
let ws;
try {
  let page;
  for (let i = 0; i < 100 && !page; i++) { try { page = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json(); } catch { await sleep(100); } }
  if (!page) throw new Error('Chrome target unavailable');
  ws = new WebSocket(page.webSocketDebuggerUrl); await new Promise(r => ws.onopen = r);
  let id = 0; const pending = new Map(), errors = [];
  ws.onmessage = e => {
    const m = JSON.parse(e.data); if (pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
    if (m.method === 'Runtime.exceptionThrown') errors.push(m.params.exceptionDetails.exception?.description || 'exception');
    if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') errors.push(m.params.args.map(a => a.value || a.description).join(' '));
  };
  const send = (method, params = {}) => new Promise(r => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async expression => {
    const m = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (m.result?.exceptionDetails) throw new Error(m.result.exceptionDetails.exception?.description || JSON.stringify(m.result.exceptionDetails));
    return m.result?.result?.value;
  };
  await send('Runtime.enable'); await send('Page.enable');
  await send('Page.navigate', { url: `http://127.0.0.1:${server.address().port}/` });
  for (let i = 0; i < 100 && !(await ev('!!window.ready')); i++) await sleep(100);
  const report = []; let minFont = Infinity;
  // Small batches keep CDP output and font loading bounded.
  for (let start = 0; start < cards.length; start += 36) {
    const r = await ev(`window.make(${JSON.stringify(cards.slice(start,start+36))})`);
    minFont = Math.min(minFont, r.minFont);
    for (const row of r.report) {
      if(row.png)fs.writeFileSync(path.join(output, `${row.id}-${row.kind}-${row.hidden?'hidden':'shown'}.png`),Buffer.from(row.png,'base64'));
      delete row.png; report.push(row);
    }
  }
  if(errors.length)throw new Error(errors.join('\n'));
  fs.writeFileSync(path.join(output,'report.json'),JSON.stringify({cases:report.length,minFont,errors},null,2));
  console.log({cases:report.length,minFont,errors});
} finally { ws?.close(); chrome.kill('SIGKILL'); server.close(); }
