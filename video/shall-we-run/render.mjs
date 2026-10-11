// Render the actual /shall-we-run DOM. No separate approximation of the website.
// Usage: node video/shall-we-run/render.mjs http://localhost:3027 /absolute/output
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawn, execFileSync } from 'node:child_process';
import { once } from 'node:events';
import sharp from 'sharp';

const [base = 'http://localhost:3027', destination] = process.argv.slice(2);
if (!destination) throw new Error('An output directory is required.');
const output = path.resolve(destination);
fs.mkdirSync(output, { recursive: true });
const chromePath = process.env.SHALL_WE_RUN_CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'shall-we-run-chrome-'));
const chrome = spawn(chromePath, ['--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`, '--no-first-run', '--disable-extensions', '--hide-scrollbars', 'about:blank'], { stdio: 'ignore' });
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let ws, encoder;
let encoderError = '';
const errors = [];
try {
  let port;
  for (let i = 0; i < 100 && !port; i++) {
    try { port = Number(fs.readFileSync(path.join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0]); } catch { await sleep(100); }
  }
  if (!port) throw new Error('Chrome did not start.');
  const page = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
  ws = new WebSocket(page.webSocketDebuggerUrl);
  await once(ws, 'open');
  let id = 0;
  const pending = new Map();
  ws.onmessage = event => {
    const message = JSON.parse(event.data);
    if (pending.has(message.id)) { pending.get(message.id)(message); pending.delete(message.id); }
    if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.exception?.description || 'Browser exception');
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const callId = ++id;
    pending.set(callId, message => message.error ? reject(new Error(JSON.stringify(message.error))) : resolve(message.result));
    ws.send(JSON.stringify({ id: callId, method, params }));
  });
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || 'Evaluation failed');
    return result.result?.value;
  };
  await send('Page.enable'); await send('Runtime.enable');
  const viewport = async (width, height = 800, dpr = 1) => send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: dpr, mobile: true });
  const load = async capture => {
    await send('Page.navigate', { url: `${base}/shall-we-run${capture ? '?capture=1' : ''}` });
    let ready = false;
    for (let i = 0; i < 200 && !ready; i++) {
      ready = await evaluate(capture ? 'typeof window.setShallWeRunTime === "function"' : '!!document.querySelector("[data-enhanced]")');
      if (!ready) await sleep(100);
    }
    if (!ready) throw new Error('Story director did not initialize.');
    await evaluate(`(async()=>{await document.fonts.ready; await Promise.all([...document.images].map(i=>i.decode())); document.querySelectorAll('nextjs-portal').forEach(e=>e.remove());})()`);
  };
  const screenshot = async (format = 'png') => Buffer.from((await send('Page.captureScreenshot', { format, ...(format === 'jpeg' ? { quality: 95 } : {}), captureBeyondViewport: false })).data, 'base64');

  const report = { viewports: [], scroll: [], reducedMotion: null, noJavaScript: null, video: null, errors };
  for (const width of [360, 390, 430, 1440]) {
    await viewport(width, width > 600 ? 900 : 800);
    await load(false);
    const result = await evaluate(`(()=>{const e=document.querySelector('[data-enhanced]'),s=e.querySelector('[data-scene]');return {width:innerWidth,documentWidth:document.documentElement.scrollWidth,stageHeight:s.clientHeight,overflow:document.documentElement.scrollWidth>innerWidth};})()`);
    if (result.overflow) throw new Error(`Horizontal overflow at ${width}px`);
    report.viewports.push(result);
    fs.writeFileSync(path.join(output, `web-${width}.png`), await screenshot());
  }
  await viewport(390); await load(false);
  for (const time of [0, 6, 12, 16, 24, 32]) {
    await evaluate(`(()=>{const rail=document.querySelector('[data-enhanced]').firstElementChild; const distance=rail.offsetHeight-innerHeight; window.scrollTo(0,rail.getBoundingClientRect().top+scrollY+distance*${time}/34);})()`);
    await sleep(120);
    const state = await evaluate(`(()=>{const e=[...document.querySelectorAll('[data-scene]')].find(e=>getComputedStyle(e).visibility==='visible');return {scene:e?.id,stageTop:document.querySelector('[data-scene]').parentElement.getBoundingClientRect().top,scrollY};})()`);
    const expected = time < 3 ? 'start' : time < 10 ? 'film' : time < 15 ? 'weekend' : time < 20 ? 'reason' : time < 27 ? 'finish' : 'next';
    if (state.scene !== expected || Math.abs(state.stageTop) > 1) throw new Error(`Scroll scene mismatch: ${JSON.stringify(state)}`);
    report.scroll.push({ time, ...state });
  }
  report.marathons = [];
  await evaluate(`document.querySelector('[data-nav-scene="1"]').click()`);
  await sleep(1000);
  for (const [i, expected] of ['tokyo', 'boston', 'london', 'sydney', 'berlin', 'chicago', 'new-york'].entries()) {
    await evaluate(`document.querySelector('[data-marathon-link="${i}"]').click()`);
    await sleep(700);
    const state = await evaluate(`(()=>{const r=document.querySelector('[data-race]');return {race:r.dataset.race,pressed:r.querySelector('[data-marathon-link="${i}"]').getAttribute('aria-pressed')};})()`);
    if (state.race !== expected || state.pressed !== 'true') throw new Error(`Marathon navigation failed: ${expected}`);
    report.marathons.push(state);
  }
  // The chapter navigation must move the native page to the requested chapter.
  await evaluate(`document.querySelector('[data-nav-scene="4"]').click()`);
  await sleep(1000);
  if (await evaluate(`document.querySelector('#finish').getAttribute('aria-hidden')`) !== 'false') throw new Error('Chapter navigation failed');

  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  await sleep(300);
  report.reducedMotion = await evaluate(`(()=>{const r=document.querySelector('[data-scene]').parentElement.parentElement.parentElement;return {enhanced:r.hasAttribute('data-enhanced'),visible:[...r.querySelectorAll('[data-scene]')].filter(e=>getComputedStyle(e).visibility==='visible').length};})()`);
  if (report.reducedMotion.enhanced || report.reducedMotion.visible !== 6) throw new Error('Reduced motion must show all chapters');
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
  await send('Emulation.setScriptExecutionDisabled', { value: true });
  await send('Page.navigate', { url: `${base}/shall-we-run` }); await sleep(1500);
  const nojs = await send('DOM.getDocument', { depth: -1 });
  const documentHTML = await send('DOM.getOuterHTML', { nodeId: nojs.root.nodeId });
  report.noJavaScript = { scenes: (documentHTML.outerHTML.match(/data-scene="true"/g) || []).length, hasTitle: documentHTML.outerHTML.includes('나는 달렸다.') };
  if (!report.noJavaScript.hasTitle || !documentHTML.outerHTML.includes('badge-original.jpg')) throw new Error('SSR content unavailable');
  fs.writeFileSync(path.join(output, 'web-no-js.png'), await screenshot());
  await send('Emulation.setScriptExecutionDisabled', { value: false });

  await viewport(360, 640, 3); await load(true);
  await evaluate(`window.setShallWeRunTime(24);document.querySelector('[data-enhanced]').dataset.cover='true'`);
  const cover = await screenshot();
  fs.writeFileSync(path.join(output, 'shall-we-run-cover-1080x1920.png'), cover);
  // Both preview crops are samples to review, not a promise about Instagram UI.
  await sharp(cover).extract({ left: 0, top: 285, width: 1080, height: 1350 }).toFile(path.join(output, 'cover-preview-4x5.png'));
  await sharp(cover).extract({ left: 0, top: 420, width: 1080, height: 1080 }).toFile(path.join(output, 'cover-preview-square.png'));
  await evaluate(`delete document.querySelector('[data-enhanced]').dataset.cover`);
  for (const time of [0, 6, 12, 19, 24, 32]) {
    await evaluate(`window.setShallWeRunTime(${time})`);
    fs.writeFileSync(path.join(output, `scene-${time}s.png`), await screenshot());
  }
  for (let i = 0; i < 7; i++) {
    await evaluate(`window.setShallWeRunTime(${3.5 + i})`);
    fs.writeFileSync(path.join(output, `marathon-${i + 1}.png`), await screenshot());
  }
  const sheet = await sharp({ create: { width: 1080, height: 1280, channels: 3, background: '#101010' } })
    .composite(await Promise.all([0, 6, 12, 19, 24, 32].map(async (time, i) => ({ input: await sharp(path.join(output, `scene-${time}s.png`)).resize(360, 640).toBuffer(), left: (i % 3) * 360, top: Math.floor(i / 3) * 640 })))).png().toBuffer();
  fs.writeFileSync(path.join(output, 'storyboard-contact-sheet.png'), sheet);

  const videoPath = path.join(output, 'shall-we-run-reel-1080x1920.mp4');
  encoder = spawn('ffmpeg', ['-y', '-hide_banner', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', '30', '-vcodec', 'mjpeg', '-i', 'pipe:0', '-an', '-vf', 'scale=in_range=full:out_range=tv', '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-color_range', 'tv', '-movflags', '+faststart', videoPath], { stdio: ['pipe', 'ignore', 'pipe'] });
  encoder.stderr.on('data', chunk => { encoderError += chunk.toString(); });
  const completion = once(encoder, 'close');
  let heldBadge, heldEnd;
  for (let frame = 0; frame < 1020; frame++) {
    const time = frame / 30;
    let jpg;
    if (time >= 20.4 && time < 27 && heldBadge) jpg = heldBadge;
    else if (time >= 30 && heldEnd) jpg = heldEnd;
    else {
      await evaluate(`window.setShallWeRunTime(${time})`);
      jpg = await screenshot('jpeg');
      if (time >= 20.4 && time < 27) heldBadge = jpg;
      if (time >= 30) heldEnd = jpg;
    }
    if (!encoder.stdin.write(jpg)) await once(encoder.stdin, 'drain');
    if (frame % 90 === 0) console.log(`Rendered ${time.toFixed(0)} / 34 seconds`);
  }
  encoder.stdin.end();
  const [code] = await completion;
  if (code !== 0) throw new Error(`ffmpeg failed: ${encoderError}`);
  report.video = JSON.parse(execFileSync('ffprobe', ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', videoPath], { encoding: 'utf8' }));
  if (errors.length) throw new Error(errors.join('\n'));
  fs.writeFileSync(path.join(output, 'render-report.json'), JSON.stringify(report, null, 2));
  console.log(`Saved reel, cover, six scenes and verification report to ${output}`);
} finally {
  ws?.close(); encoder?.stdin.destroy(); chrome.kill('SIGKILL');
  // Wait for Chrome to release the temporary profile before removing it.
  await sleep(200);
  fs.rmSync(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
}
