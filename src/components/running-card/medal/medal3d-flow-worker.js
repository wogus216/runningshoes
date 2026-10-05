// 3D-2 relief worker: builds coin faces, socket floors, the plate and the ribbon off the main thread, so a ruler drag
// never waits for a height field. Same code as the page (medal3d-relief.js) on an OffscreenCanvas, with the study fonts
// loaded here as well. If this browser cannot draw the fonts in a worker, it says so and the page builds on its own
// thread instead (the faces must carry the same letters either way).
import * as Relief from './medal3d-relief.js';

const send = (msg, buffers = []) => self.postMessage(msg, buffers);
// Rows turned over for WebGL unless the page wants them as drawn (the flat fallback reads them top-down).
const rows = (a, w, h, ch, up) => up ? Relief.bottomUp(a, w, h, ch) : a;

async function init(fonts) {
  if (typeof OffscreenCanvas === 'undefined') throw new Error('OffscreenCanvas 없음');
  const probe = new OffscreenCanvas(8, 8).getContext('2d');
  if (!probe) throw new Error('OffscreenCanvas 2D 없음');
  if (!self.FontFace || !self.fonts) throw new Error('워커 FontFace 없음');
  // The page sends the font files' bytes (read once on the main thread); a URL is the fallback.
  await Promise.all(fonts.map(async ({ family, url, data, descriptors }) => { const f = new FontFace(family, data || `url(${url})`, descriptors); await f.load(); self.fonts.add(f); }));
  // The fonts must really reach the canvas: a condensed figure is narrower than the fallback's.
  const width = font => { probe.font = font; return probe.measureText('0123456789 KM').width; };
  if (Math.abs(width('700 40px StudyCondensed') - width('700 40px sans-serif')) < 1) throw new Error('워커 캔버스에 글꼴이 안 닿음');
}

let ready = null;
self.onmessage = async ({ data: m }) => {
  if (m.type === 'init') {
    ready = init(m.fonts);
    try { await ready; send({ type: 'ready', ok: true }); } catch (e) { send({ type: 'ready', ok: false, reason: String(e && e.message || e) }); }
    return;
  }
  await ready;
  const t0 = performance.now();
  if (m.type === 'coin') {
    const f = Relief.coin(m.key, m.rec, m.state, m.S, { height: true }), S = f.S;
    const out = { polish: rows(f.polish, S, S, 1, m.up), normal: rows(f.normal, S, S, 4, m.up), orm: rows(f.orm, S, S, 2, m.up), height: rows(f.height, S, S, 1, m.up) };
    send({ type: 'built', id: m.id, S, ms: performance.now() - t0, ...out }, Object.values(out).map(a => a.buffer));
  } else if (m.type === 'socket') {
    const f = Relief.socket(m.S, m.label), S = f.S;
    const out = { polish: rows(f.polish, S, S, 1, m.up), normal: rows(f.normal, S, S, 4, m.up), orm: rows(f.orm, S, S, 2, m.up) };
    send({ type: 'built', id: m.id, S, ms: performance.now() - t0, ...out }, Object.values(out).map(a => a.buffer));
  } else if (m.type === 'plate') {
    const p = Relief.plate(), W = p.W, Hh = p.Hh;
    const out = { polish: rows(p.polish, W, Hh, 1, m.up), normal: rows(p.normal, W, Hh, 4, m.up), orm: rows(p.orm, W, Hh, 2, m.up), metal: rows(p.metal, W, Hh, 1, m.up) };
    send({ type: 'built', id: m.id, W, Hh, ms: performance.now() - t0, ...out }, Object.values(out).map(a => a.buffer));
  } else if (m.type === 'ribbon') {
    const r = Relief.ribbon(m.W), W = r.W, Hh = r.Hh;
    const out = { print: rows(new Uint8Array(r.print.buffer.slice(0)), W, Hh, 4, m.up), normal: rows(r.normal, W, Hh, 4, m.up) };
    send({ type: 'built', id: m.id, W, Hh, ms: performance.now() - t0, ...out }, Object.values(out).map(a => a.buffer));
  }
};
