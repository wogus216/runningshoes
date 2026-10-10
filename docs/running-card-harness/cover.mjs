// Source-module visual QA for the M2 cover, without adding a product route.
// node docs/running-card-harness/cover.mjs <output> [all|id,id] [webgl|flat] [gold|silver|brass]
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import os from 'node:os';
import { spawn, execFileSync } from 'node:child_process';

const [dest, selected = 'hephaestus,apollo,zeus', mode = 'webgl', finish = 'gold'] = process.argv.slice(2);
if (!dest) throw new Error('output directory required');
const root = process.cwd(), output = path.resolve(dest);
fs.mkdirSync(output, { recursive: true });
const cards = JSON.parse(execFileSync(process.execPath, ['--require', 'tsx/cjs', '-e', `
const { RUNNER_CHARACTERS } = require('./src/lib/runner-analysis/characters.ts');
const { getCharacterTitle, getCharacterPresentation } = require('./src/lib/runner-analysis/presentation.ts');
console.log(JSON.stringify(RUNNER_CHARACTERS.map(c=>({id:c.id,house:c.house,name:c.name,title:getCharacterTitle(c.id),oracle:getCharacterPresentation(c.id).oracle,scores:[],evidence:[],strength:'',watchout:'',next:'',leadTag:'',recoveryNote:''}))));
`], { cwd: root, encoding: 'utf8' }));
const chosen = selected === 'all' ? cards : selected.split(',').map(id => {
  const c = cards.find(c => c.id === id); if (!c) throw new Error(`unknown figure ${id}`); return c;
});
const html = `<!doctype html><meta charset="utf-8"><style>
@import url('/type/pretendardvariable-dynamic-subset.css');
@font-face{font-family:StudySans;src:url('/font/medal-sans.woff2');font-weight:45 920}
@font-face{font-family:StudyCondensed;src:url('/font/medal-condensed.woff2');font-weight:700}
body{background:#17150f;color:#eee;font:14px sans-serif}
</style><script type="importmap">{"imports":{"three":"/three/three.module.js"}}</script>
<script type="module">
import {renderCoverMedal,paintCoverMedal,coverRelief} from '/module/medal-cover-renderer.js';
import {drawCover,SHARE_SIZES} from '/module/medal3d-share.js';
window.make=async(card,finish,webgl)=>{const start=performance.now();const relief=coverRelief(card.id,256);const raised=relief.height.filter(x=>x>.5).length/relief.height.length;if(raised<.01||raised>.35)throw new Error('empty or solid mark '+card.id);const medal=await renderCoverMedal({id:card.id,finish,webgl});const images={};for(const kind of ['feed','story']){const [w,h]=SHARE_SIZES[kind];const c=Object.assign(document.createElement('canvas'),{width:w,height:h});await drawCover(c.getContext('2d'),kind,card,(fig,target=c.getContext('2d'))=>paintCoverMedal(target,fig,medal));images[kind]=c.toDataURL('image/png').split(',')[1]}return {images,raised,renderer:medal.dataset.renderer,ms:Math.round(performance.now()-start),medal:medal.toDataURL('image/png').split(',')[1]}};
window.ready=true;
</script>`;
const modules = new Set(['medal-cover-renderer.js', 'medal3d-character-signs.js', 'medal3d-three.js', 'medal3d-share.js']);
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
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--no-first-run', '--disable-extensions', '--enable-unsafe-swiftshader', '--use-angle=swiftshader', ...(mode === 'flat' ? ['--disable-3d-apis'] : []), 'about:blank'], { stdio: 'ignore' });
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
  const report = [], unique = new Set();
  for (const c of chosen) {
    const r = await ev(`window.make(${JSON.stringify(c)},${JSON.stringify(finish)},${mode !== 'flat'})`);
    if (r.renderer !== mode) throw new Error(`expected ${mode}, got ${r.renderer}`);
    if(unique.has(r.medal))throw new Error(`duplicate medal ${c.id}`);unique.add(r.medal);
    for (const [kind, png] of Object.entries(r.images)) fs.writeFileSync(path.join(output, `${c.id}-${finish}-${kind}.png`), Buffer.from(png, 'base64'));
    fs.writeFileSync(path.join(output, `${c.id}-${finish}-medal.png`), Buffer.from(r.medal, 'base64'));
    report.push({ id: c.id, renderer: r.renderer, ms: r.ms, raised: r.raised }); console.log(report.at(-1));
  }
  // A new renderer after disposal must produce the same result with the same inputs.
  const c = chosen[0], repeat = await ev(`window.make(${JSON.stringify(c)},${JSON.stringify(finish)},${mode !== 'flat'})`);
  fs.writeFileSync(path.join(output,'repeat-medal.png'),Buffer.from(repeat.medal,'base64'));
  fs.writeFileSync(path.join(output,'repeat-feed.png'),Buffer.from(repeat.images.feed,'base64'));
  for (const kind of ['feed', 'story']) if (!fs.readFileSync(path.join(output, `${c.id}-${finish}-${kind}.png`)).equals(Buffer.from(repeat.images[kind], 'base64'))) throw new Error(`non-deterministic ${kind} after renderer disposal`);
  if (errors.length) throw new Error(errors.join('\n'));
  fs.writeFileSync(path.join(output, 'report.json'), JSON.stringify({ report, repeat: 'identical', errors }, null, 2));
} finally { ws?.close(); chrome.kill('SIGKILL'); server.close(); }
