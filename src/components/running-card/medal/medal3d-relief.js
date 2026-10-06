// 3D-1 relief maps for the seven coins of the 28-day medal. No three.js here: every coin face is drawn as a height field
// in face units (the struck face is the unit disc, y down), then turned into the maps the coin material reads —
// polish (oxidised 0 … polished 1), normal, and AO/roughness/metalness. Heights come from the entered values only, and the
// sand and patina noise is hashed from pixel positions, so the same record always gives the same pixels.
// Coin ↔ input: 1 총거리 = laps of a track · 2 러닝 횟수 = domed dots in frames of ten · 3 평균 페이스 = guilloché waves
// (faster is tighter) · 4 최장거리 = the ridden share of a winding road · 5 강한 훈련 = chevrons raised out of six slots ·
// 6 목표 = one of five emblems · 7 요일 = seven segments of a week ring, the chosen days raised and polished.

export const KEYS = ['distance', 'count', 'pace', 'longest', 'hard', 'goal', 'days'];
export const NAMES = { distance: '총거리', count: '횟수', pace: '페이스', longest: '최장거리', hard: '강한 훈련', goal: '목표', days: '요일' };
export const GOALS = { habit: '습관', endurance: '지구력', record: '기록', race: '대회', health_fun: '건강과 재미' };
export const DAYS = ['월', '화', '수', '목', '금', '토', '일'];

const TAU = Math.PI * 2;
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// Face layout (face units). The coin's raised rim is real geometry outside the unit disc. Beads sit on oxidised ground
// outside a raised ring line; the field inside it holds the motif above the exergue line and the legend below.
const BEAD_R = .942, LINE_R = .872, FIELD = .852, EX = .36;
// The motifs are drawn in their own space (field radius .79, exergue .335, centre −.235) and scaled up to the field.
const MOTIF = FIELD / .79, FIELD_M = .79, EX_M = .335, FC = -.235;
let unit = 1;
// Heights: oxidised ground, the bead band (still oxidised), raised (polished) relief, carved slots and grooves.
const GROUND = .10, BAND = .17, RAISE = .56, LOW = .02;

// ---- mappings (also used by the page for its labels) ---------------------------------------------------------------
const speed = pace => 3600 / clamp(pace, 120, 779);
export const map = {
  // 총거리: one lap of the track per 50 km; the remainder is a partial lap ending in the runner's dot.
  laps: km => Math.max(0, km) / 50,
  // 횟수: one dot per run, in frames of ten; 60 at most (the count itself is kept as entered).
  dots: n => clamp(Math.round(n), 0, 60),
  // 평균 페이스: waves per turn of the rosette (M1's lobes) and the ring pitch; both tighten with speed.
  lobes: pace => clamp(Math.round(6 + (speed(pace) - 5) * 3.2), 6, 60),
  pitch: pace => clamp(.075 * 10.9 / speed(pace), .05, .11),
  // 최장거리: the ridden share of the road, the same square-root share as step 04 of the input study.
  reach: (longest, distance) => .18 + .82 * Math.sqrt(clamp(longest / Math.max(distance, .1), 0, 1)),
};
const km = n => `${(+n).toLocaleString('ko-KR', { maximumFractionDigits: 1 })}`;
export const paceText = sec => `${Math.floor(sec / 60)}'${String(Math.round(sec % 60)).padStart(2, '0')}"`;
// The small legend in each coin's exergue (the city-name place of the reference).
export function label(key, rec) {
  switch (key) {
    case 'distance': return `${km(rec.distance)} KM`;
    case 'count': return `${rec.count}회`;
    case 'pace': return paceText(rec.pace);
    case 'longest': return `최장 ${km(rec.longest)}KM`;
    case 'hard': return rec.hard >= 6 ? '강한 6회+' : `강한 ${rec.hard}회`;
    case 'goal': return GOALS[rec.goal] || '';
    case 'days': return !rec.days || !rec.days.length ? '건너뜀' : rec.days.length === 7 ? '매일' : rec.days.map(d => DAYS[d]).join('');
  }
  return '';
}
// What a coin's face depends on — the cache key, so a coin is redrawn only when its own input changes.
export function signature(key, rec, state, S) {
  const v = { distance: rec.distance, count: map.dots(rec.count), pace: rec.pace, longest: `${rec.longest}/${rec.distance}`, hard: Math.min(rec.hard, 6), goal: rec.goal, days: (rec.days || []).join('') }[key];
  return state === 'struck' ? `${key}:${v}:${label(key, rec)}:${S}` : `${key}:${state}:${S}`;
}

// ---- raster helpers -------------------------------------------------------------------------------------------------
const scratch = new Map();
// In a worker (3D-2 builds faces off the main thread) there is no document: an OffscreenCanvas does the same work.
function canvas2d(w, h = w) {
  const k = `${w}x${h}`;
  if (!scratch.has(k)) { const c = typeof document === 'undefined' ? new OffscreenCanvas(w, h) : Object.assign(document.createElement('canvas'), { width: w, height: h }); scratch.set(k, { c, g: c.getContext('2d', { willReadFrequently: true }) }); }
  return scratch.get(k);
}
// Maps come as top-down rows; a WebGL DataTexture's first row is the bottom. Turns a copy over.
export function bottomUp(src, w, h, channels) {
  const row = w * channels, out = new Uint8Array(w * h * channels);
  for (let y = 0; y < h; y++) out.set(src.subarray((h - 1 - y) * row, (h - y) * row), y * row);
  return out;
}
// White-on-black mask drawn in face units; returns 0..1 per pixel.
function mask(S, draw, W = S, Hh = S, scale = S / 2) {
  const { g } = canvas2d(W, Hh);
  g.setTransform(1, 0, 0, 1, 0, 0); g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1;
  g.fillStyle = '#000'; g.fillRect(0, 0, W, Hh);
  g.setTransform(scale * unit, 0, 0, scale * unit, W / 2, Hh / 2);
  g.save(); g.fillStyle = g.strokeStyle = '#fff'; g.lineJoin = 'round'; g.lineCap = 'round';
  draw(g);
  g.restore();
  const d = g.getImageData(0, 0, W, Hh).data, m = new Float32Array(W * Hh);
  for (let i = 0; i < m.length; i++) m[i] = d[i * 4] / 255;
  return m;
}
function blurPass(src, dst, W, Hh, r, horizontal) {
  const n = horizontal ? W : Hh, lines = horizontal ? Hh : W, step = horizontal ? 1 : W, w = 2 * r + 1;
  for (let l = 0; l < lines; l++) {
    const o = horizontal ? l * W : l;
    let sum = 0;
    for (let k = -r; k <= r; k++) sum += src[o + clamp(k, 0, n - 1) * step];
    for (let x = 0; x < n; x++) {
      dst[o + x * step] = sum / w;
      sum += src[o + Math.min(x + r + 1, n - 1) * step] - src[o + Math.max(x - r, 0) * step];
    }
  }
}
// Two box passes per axis ≈ a gaussian; edges clamp.
function blur(src, W, Hh, r, passes = 2) {
  const a = Float32Array.from(src);
  if (r < 1) return a;
  const b = new Float32Array(a.length);
  for (let p = 0; p < passes; p++) { blurPass(a, b, W, Hh, r, true); blurPass(b, a, W, Hh, r, false); }
  return a;
}
// A struck edge: the blurred mask squeezed back into flat top, flat bottom and a short steep wall (a chamfer, not a pillow).
// Radii are given for a 512 face and scaled with the map, so a 1024 map has the same walls, only sharper texels.
let pxs = 1;
function bevel(m, W, Hh, r) {
  const b = blur(m, W, Hh, Math.max(1, Math.round(r * pxs)));
  for (let i = 0; i < b.length; i++) b[i] = smooth(.15, .85, b[i]);
  return b;
}
// Move the surface toward `h` wherever the mask is on.
function level(H, m, h) { for (let i = 0; i < H.length; i++) if (m[i] > 0) H[i] += (h - H[i]) * m[i]; }
// A polished hemisphere (beads, runner, hubs) — written analytically so it is round at any size.
function dome(H, S, x, y, rad, peak, flat = 0) {
  x *= unit; y *= unit; rad *= unit;
  const s = S / 2, cx = (x + 1) * s, cy = (y + 1) * s, rp = rad * s;
  for (let py = Math.max(0, Math.floor(cy - rp - 1)); py <= Math.min(S - 1, Math.ceil(cy + rp + 1)); py++) {
    for (let px = Math.max(0, Math.floor(cx - rp - 1)); px <= Math.min(S - 1, Math.ceil(cx + rp + 1)); px++) {
      const d = Math.hypot(px + .5 - cx, py + .5 - cy) / rp;
      if (d >= 1 + 1 / rp) continue;
      const i = py * S + px, edge = clamp((1 - d) * rp + .5, 0, 1);
      const z = peak - (peak - GROUND) * (1 - Math.sqrt(Math.max(0, 1 - Math.min(d, 1) ** 2))) * (1 - flat);
      H[i] = Math.max(H[i], H[i] + (z - H[i]) * edge);
    }
  }
}
// Hashed noise: per-pixel sand and a soft patina (two octaves of value noise). Cached per size.
const noises = new Map();
function hash(x, y, seed) { let h = (Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(seed, 2246822519)) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
function valueNoise(W, Hh, cell, seed) {
  const out = new Float32Array(W * Hh);
  for (let y = 0; y < Hh; y++) for (let x = 0; x < W; x++) {
    const gx = x / cell, gy = y / cell, ix = Math.floor(gx), iy = Math.floor(gy), fx = gx - ix, fy = gy - iy;
    const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    const a = hash(ix, iy, seed), b = hash(ix + 1, iy, seed), c = hash(ix, iy + 1, seed), d = hash(ix + 1, iy + 1, seed);
    out[y * W + x] = (a + (b - a) * sx) + ((c + (d - c) * sx) - (a + (b - a) * sx)) * sy;
  }
  return out;
}
function noise(W, Hh = W) {
  const k = `${W}x${Hh}`;
  if (!noises.has(k)) {
    const sand = new Float32Array(W * Hh);
    for (let y = 0; y < Hh; y++) for (let x = 0; x < W; x++) sand[y * W + x] = hash(x, y, 7);
    const a = valueNoise(W, Hh, W / 9, 3), b = valueNoise(W, Hh, W / 23, 5), patina = new Float32Array(W * Hh);
    for (let i = 0; i < patina.length; i++) patina[i] = a[i] * .65 + b[i] * .35;
    // grain: the cast skin, a few texels across · smudge: handled and buffed patches that change the roughness only.
    noises.set(k, { sand: blur(sand, W, Hh, 1, 1), patina, grain: valueNoise(W, Hh, Math.max(2, W / 110), 13), smudge: valueNoise(W, Hh, W / 5, 11) });
  }
  return noises.get(k);
}
const forEachPixel = (S, f) => { for (let py = 0; py < S; py++) for (let px = 0; px < S; px++) f((px + .5) / S * 2 - 1, (py + .5) / S * 2 - 1, py * S + px); };

// ---- the struck coin: border band, beads, ring line, exergue line, sand ground --------------------------------------
const bases = new Map();
function struckBase(S) {
  if (bases.has(S)) return Float32Array.from(bases.get(S));
  const H = new Float32Array(S * S), { sand, grain } = noise(S);
  // The ground is cast, not polished: fine sand plus a coarser grain.
  forEachPixel(S, (x, y, i) => { H[i] = GROUND + .02 * (sand[i] - .5) + .03 * (grain[i] - .5); });
  level(H, bevel(mask(S, g => { g.beginPath(); g.arc(0, 0, 1.05, 0, TAU); g.arc(0, 0, .89, 0, TAU, true); g.fill(); }), S, S, 2), BAND);
  level(H, bevel(mask(S, g => {
    g.lineWidth = .028; g.beginPath(); g.arc(0, 0, LINE_R, 0, TAU); g.stroke();
    // Exergue line: the legend sits below it, as on a coin.
    const half = Math.sqrt(FIELD * FIELD - EX * EX) + .01; g.lineCap = 'butt'; g.lineWidth = .026; g.beginPath(); g.moveTo(-half, EX); g.lineTo(half, EX); g.stroke();
  }), S, S, 1), RAISE);
  const beads = 60;
  for (let k = 0; k < beads; k++) { const a = k / beads * TAU - Math.PI / 2; dome(H, S, BEAD_R * Math.cos(a), BEAD_R * Math.sin(a), .03, .62, .1); }
  bases.set(S, H);
  return Float32Array.from(H);
}
// Motifs are clipped to the field above the exergue line.
function fieldClip(g) { g.beginPath(); g.rect(-1.2, -1.2, 2.4, 1.2 + EX_M - .022); g.clip(); g.beginPath(); g.arc(0, 0, FIELD_M - .012, 0, TAU); g.clip(); }
// The legend: raised polished letters, condensed figures with Korean falling back to the sans.
function legend(H, S, text) {
  if (!text) return;
  const m = mask(S, g => {
    g.setTransform(1, 0, 0, 1, 0, 0);
    let fs = .31 * S / 2;
    const font = s => `700 ${s}px StudyCondensed, StudySans, sans-serif`;
    g.font = font(fs);
    const maxW = .94 * S / 2, w = g.measureText(text).width;
    if (w > maxW) { fs *= maxW / w; g.font = font(fs); }
    g.textAlign = 'center'; g.textBaseline = 'alphabetic';
    const y = (1 + EX + .232) * S / 2 + fs * .35;
    g.lineWidth = .011 * S / 2; g.lineJoin = 'round';
    g.fillText(text, S / 2, y); g.strokeText(text, S / 2, y);
  });
  level(H, bevel(m, S, S, 1), RAISE);
}

// 1 총거리 — laps of a track, outer lane first; a partial lap runs counter-clockwise from the start line and ends in a dot.
function stadium(a, b, cx, cy, n = 480) {
  // Arc-length parameterised, starting at the bottom centre and running counter-clockwise on screen.
  const s = a - b, segs = [s, Math.PI * b, 2 * s, Math.PI * b, s], total = segs.reduce((p, q) => p + q, 0), pts = [];
  for (let i = 0; i <= n; i++) {
    let d = i / n * total, k = 0;
    while (k < 4 && d > segs[k]) { d -= segs[k]; k++; }
    if (k === 0) pts.push([cx + d, cy + b]);
    else if (k === 1) { const t = Math.PI / 2 - d / b; pts.push([cx + s + b * Math.cos(t), cy + b * Math.sin(t)]); }
    else if (k === 2) pts.push([cx + s - d, cy - b]);
    else if (k === 3) { const t = -Math.PI / 2 - d / b; pts.push([cx - s + b * Math.cos(t), cy + b * Math.sin(t)]); }
    else pts.push([cx - s + d, cy + b]);
  }
  return pts;
}
function polyline(g, pts, upto = pts.length) { g.beginPath(); pts.slice(0, upto).forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); }
function distanceCoin(H, S, rec) {
  const laps = map.laps(rec.distance), full = Math.floor(laps + 1e-9), part = laps - full, n = full + (part > .005 ? 1 : 0);
  const s = Math.min(.068, .30 / Math.max(n, 1)), lw = Math.max(.024, s * .5), A = .64, B = .38;
  let end = null;
  level(H, bevel(mask(S, g => {
    fieldClip(g); g.lineWidth = lw;
    for (let i = 0; i < full; i++) { polyline(g, stadium(A - i * s, B - i * s, 0, FC)); g.closePath(); g.stroke(); }
    if (part > .005) { const pts = stadium(A - full * s, B - full * s, 0, FC); const k = Math.max(2, Math.round(part * (pts.length - 1))); polyline(g, pts, k); g.stroke(); end = pts[k - 1]; }
    // Start line across every lane at the bottom straight.
    g.lineCap = 'butt'; g.lineWidth = .02; g.beginPath(); g.moveTo(0, FC + B + lw * .6); g.lineTo(0, FC + B - Math.max(n - 1, 0) * s - lw * .6); g.stroke();
  }), S, S, 1), RAISE);
  const [ex, ey] = end || [0, FC + B];
  dome(H, S, ex, ey, lw * 1.25 + .012, .70);
}
// 2 러닝 횟수 — domed dots, five to a row, two rows to a frame of ten; frames stack, then fill a second column.
function countCoin(H, S, rec) {
  const N = map.dots(rec.count), B = Math.max(1, Math.ceil(N / 10)), cols = B <= 3 ? 1 : 2, rows = Math.ceil(B / cols);
  const s = Math.min(.20, 1.24 / (cols * 5 + (cols - 1) * .8), .90 / (rows * 2 + (rows - 1) * .7));
  const blockW = 5 * s, blockH = 2 * s, gx = .8 * s, gy = .7 * s, totalW = cols * blockW + (cols - 1) * gx, totalH = rows * blockH + (rows - 1) * gy;
  const x0 = -totalW / 2, y0 = FC - totalH / 2 + .01;
  const frame = b => [x0 + (b % cols) * (blockW + gx), y0 + Math.floor(b / cols) * (blockH + gy)];
  // Frames: a carved groove around each ten, so the count reads as tens plus dots.
  level(H, bevel(mask(S, g => {
    g.lineWidth = Math.max(.012, s * .09);
    for (let b = 0; b < B; b++) { const [x, y] = frame(b), p = s * .12; g.beginPath(); if (g.roundRect) g.roundRect(x - p, y - p, blockW + 2 * p, blockH + 2 * p, s * .3); else g.rect(x - p, y - p, blockW + 2 * p, blockH + 2 * p); g.stroke(); }
  }), S, S, 1), LOW);
  for (let k = 0; k < N; k++) {
    const b = Math.floor(k / 10), j = k % 10, [x, y] = frame(b);
    dome(H, S, x + (j % 5 + .5) * s, y + (Math.floor(j / 5) + .5) * s, s * .36, .66, .15);
  }
}
// 3 평균 페이스 — an engine-turned rosette: two families of wavy rings in opposite phase. Faster = more waves, tighter rings.
function paceCoin(H, S, rec) {
  const L = map.lobes(rec.pace), p = map.pitch(rec.pace), Rr = .50, a = .32 * p, top = RAISE - .04;
  const ridge = ph => smooth(.60, .86, .5 + .5 * Math.cos(TAU * ph));
  forEachPixel(S, (x, y, i) => {
    const dx = x / unit, dy = y / unit - FC, rho = Math.hypot(dx, dy);
    if (rho >= Rr) return;
    const th = Math.atan2(dy, dx), amp = a * smooth(.05, .20, rho);
    const r1 = ridge((rho + amp * Math.sin(L * th)) / p), r2 = ridge((rho + amp * Math.sin(L * th + Math.PI)) / p);
    const k = Math.max(r1, r2) * smooth(Rr, Rr - .02, rho);
    H[i] += (top - H[i]) * k;
  });
  level(H, bevel(mask(S, g => { g.lineWidth = .026; g.beginPath(); g.arc(0, FC, Rr + .012, 0, TAU); g.stroke(); }), S, S, 1), RAISE);
  dome(H, S, 0, FC, .07, .66, .3);
}
// 4 최장거리 — a winding road up the field: the whole course is a carved groove, the ridden share is raised and polished.
function course() {
  const pts = [];
  for (let i = 0; i <= 600; i++) {
    const t = i / 600, y = .20 - .92 * t, half = Math.max(0, Math.sqrt(Math.max(0, .74 * .74 - y * y)) - .10);
    pts.push([half * .86 * Math.sin(Math.PI * (.5 + 3 * t)), y]);
  }
  return pts;
}
function longestCoin(H, S, rec) {
  const pts = course(), len = [0];
  for (let i = 1; i < pts.length; i++) len.push(len[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const ridden = map.reach(rec.longest, rec.distance) * len[len.length - 1];
  const k = Math.max(2, len.findIndex(l => l >= ridden) + 1 || pts.length);
  level(H, bevel(mask(S, g => { fieldClip(g); g.lineWidth = .03; polyline(g, pts); g.stroke(); }), S, S, 1), LOW);
  level(H, bevel(mask(S, g => { fieldClip(g); g.lineWidth = .088; polyline(g, pts, k); g.stroke(); }), S, S, 2), RAISE);
  // Lane dashes along the ridden road.
  level(H, bevel(mask(S, g => { fieldClip(g); g.lineWidth = .013; g.lineCap = 'butt'; g.setLineDash([.035, .03]); polyline(g, pts, k); g.stroke(); }), S, S, 1), RAISE - .17);
  const [ex, ey] = pts[k - 1];
  dome(H, S, ex, ey, .058, .72);
  // Start bar across the road.
  level(H, bevel(mask(S, g => { g.lineCap = 'butt'; g.lineWidth = .028; const [sx, sy] = pts[0]; g.beginPath(); g.moveTo(sx - .07, sy); g.lineTo(sx + .07, sy); g.stroke(); }), S, S, 1), RAISE + .04);
}
// 5 강한 훈련 — six nested chevron slots, one per chip (0 … 5 and 6 = '6회 이상'); the first N from the top are raised and
// polished, the rest stay carved. Six fit where three did by a flatter angle and narrower strokes: the stack runs from
// .45 above the motif centre to just over the exergue line, and the gap between strokes stays about half a stroke.
function hardCoin(H, S, rec) {
  const n = Math.min(6, Math.max(0, rec.hard)), rise = .30, half = .42, top = FC - .45, pitch = .132;
  const chevron = (g, k) => { const ay = top + k * pitch; g.beginPath(); g.moveTo(-half, ay + rise); g.lineTo(0, ay); g.lineTo(half, ay + rise); };
  for (let k = 0; k < 6; k++) {
    const on = k < n;
    level(H, bevel(mask(S, g => { g.lineJoin = 'miter'; g.lineCap = 'butt'; g.lineWidth = on ? .07 : .062; chevron(g, k); g.stroke(); }), S, S, on ? 2 : 1), on ? RAISE : LOW);
  }
}
// 6 목표 — one emblem per goal.
function goalCoin(H, S, rec) {
  const goal = rec.goal, cy = FC;
  const raise = (draw, r = 2, h = RAISE) => level(H, bevel(mask(S, g => { fieldClip(g); draw(g); }), S, S, r), h);
  if (goal === 'habit') {
    // A loop that keeps going: a band wound one and a bit times, its end passing over its start.
    raise(g => { g.lineWidth = .10; g.beginPath(); for (let i = 0; i <= 240; i++) { const t = i / 240, a = -Math.PI / 2 + t * TAU * 1.18, r = .29 + .10 * t; if (i) g.lineTo(r * Math.cos(a), cy + r * Math.sin(a)); else g.moveTo(r * Math.cos(a), cy + r * Math.sin(a)); } g.stroke(); });
    raise(g => { g.lineWidth = .016; g.lineCap = 'butt'; const a = -Math.PI / 2 + TAU * 1.0, r1 = .29 + .10 * (1 / 1.18); g.beginPath(); g.arc(0, cy, r1 - .055, a - .05, a + .05); g.stroke(); }, 1, LOW);
    dome(H, S, 0, cy, .07, .62, .2);
  } else if (goal === 'endurance') {
    // Two peaks over a horizon, a carved switchback trail up the larger one.
    raise(g => { g.beginPath(); g.moveTo(-.60, cy + .30); g.lineTo(-.24, cy - .26); g.lineTo(-.06, cy - .02); g.lineTo(.18, cy - .44); g.lineTo(.60, cy + .30); g.closePath(); g.fill(); });
    raise(g => { g.lineWidth = .018; g.beginPath(); g.moveTo(.30, cy + .26); g.lineTo(.08, cy + .12); g.lineTo(.30, cy - .02); g.lineTo(.12, cy - .16); g.lineTo(.22, cy - .30); g.stroke(); }, 1, LOW + .1);
    raise(g => { g.lineWidth = .024; g.beginPath(); g.moveTo(-.66, cy + .38); g.lineTo(.66, cy + .38); g.stroke(); }, 1);
  } else if (goal === 'record') {
    // A stopwatch: case, crown, twelve marks, one hand.
    raise(g => { g.lineWidth = .075; g.beginPath(); g.arc(0, cy + .05, .36, 0, TAU); g.stroke(); g.lineWidth = .05; g.beginPath(); g.moveTo(0, cy - .31); g.lineTo(0, cy - .40); g.stroke(); if (g.roundRect) { g.beginPath(); g.roundRect(-.085, cy - .48, .17, .075, .02); g.fill(); } else g.fillRect(-.085, cy - .48, .17, .075); });
    raise(g => { g.lineWidth = .036; g.lineCap = 'round'; g.beginPath(); g.moveTo(0, cy + .05); const a = -Math.PI / 2 + TAU * .37; g.lineTo(.25 * Math.cos(a), cy + .05 + .25 * Math.sin(a)); g.stroke(); });
    for (let k = 0; k < 12; k++) { const a = k / 12 * TAU; dome(H, S, .26 * Math.cos(a), cy + .05 + .26 * Math.sin(a), k % 3 ? .018 : .028, .60); }
    dome(H, S, 0, cy + .05, .05, .66, .2);
  } else if (goal === 'race') {
    // A finish gate: two posts, a chequered banner across them, the line on the ground.
    raise(g => { g.lineCap = 'butt'; g.lineWidth = .075; g.beginPath(); g.moveTo(-.36, cy - .22); g.lineTo(-.36, cy + .30); g.moveTo(.36, cy - .22); g.lineTo(.36, cy + .30); g.stroke(); g.fillRect(-.50, cy - .44, 1.0, .22); });
    raise(g => { for (let c = 0; c < 9; c++) for (let r = 0; r < 2; r++) if ((c + r) % 2) g.fillRect(-.45 + c * .1, cy - .42 + r * .09, .1, .09); }, 1, LOW + .14);
    raise(g => { g.lineCap = 'butt'; g.lineWidth = .03; g.beginPath(); g.moveTo(-.62, cy + .31); g.lineTo(.62, cy + .31); g.stroke(); }, 1);
    raise(g => { g.lineCap = 'butt'; g.lineWidth = .05; g.setLineDash([.05, .05]); g.beginPath(); g.moveTo(-.30, cy + .22); g.lineTo(.30, cy + .22); g.stroke(); }, 1, RAISE - .1);
  } else if (goal === 'health_fun') {
    // Two loops joined: ∞.
    raise(g => { g.lineWidth = .10; g.beginPath(); for (let i = 0; i <= 360; i++) { const t = i / 360 * TAU, d = 1 + Math.sin(t) ** 2; const x = .55 * Math.cos(t) / d, y = .55 * Math.sin(t) * Math.cos(t) / d; if (i) g.lineTo(x, cy + y); else g.moveTo(x, cy + y); } g.closePath(); g.stroke(); });
  }
}
// 7 요일 — a week ring, Monday at the top, clockwise. Chosen days rise and are polished; the rest stay carved.
function daysCoin(H, S, rec) {
  const set = new Set(rec.days || []), skipped = !rec.days || !rec.days.length, r0 = .29, r1 = .53, gap = .06;
  for (let k = 0; k < 7; k++) {
    const a0 = -Math.PI / 2 + (k - .5) / 7 * TAU + gap, a1 = -Math.PI / 2 + (k + .5) / 7 * TAU - gap, on = set.has(k);
    const seg = g => { g.beginPath(); g.arc(0, FC, r1, a0, a1); g.arc(0, FC, r0, a1, a0, true); g.closePath(); };
    if (skipped) level(H, bevel(mask(S, g => { g.lineWidth = .016; seg(g); g.stroke(); }), S, S, 1), LOW);
    else level(H, bevel(mask(S, g => { seg(g); g.fill(); }), S, S, on ? 2 : 1), on ? RAISE : LOW);
    // Day initial: carved into a raised segment, raised a little out of a carved one.
    const am = (a0 + a1) / 2, rm = (r0 + r1) / 2;
    level(H, bevel(mask(S, g => {
      g.setTransform(1, 0, 0, 1, 0, 0); g.font = `700 ${.15 * unit * S / 2}px StudySans, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(DAYS[k], (1 + unit * rm * Math.cos(am)) * S / 2, (1 + unit * (FC + rm * Math.sin(am))) * S / 2 + .006 * S);
    }), S, S, 1), on ? GROUND + .12 : skipped ? GROUND + .04 : GROUND + .18);
  }
  dome(H, S, 0, FC, .09, .64, .25);
}
const motifs = { distance: distanceCoin, count: countCoin, pace: paceCoin, longest: longestCoin, hard: hardCoin, goal: goalCoin, days: daysCoin };

// ---- micro layer: polishing marks ---------------------------------------------------------------------------------------
// Fine concentric scratches (the coin was buffed turning about its centre) and a few stray straight ones. Seeded by the
// coin, so a coin always carries the same marks; they are a hair deep and only read where the metal is polished.
function seedOf(text) { let h = 2166136261; for (const ch of text) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return h >>> 0; }
function rng(seed) { let a = seed; return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function scratches(H, S, seed, count = 170) {
  const r = rng(seed);
  const m = mask(S, g => {
    g.lineCap = 'round';
    for (let k = 0; k < count; k++) {
      const rad = .12 + .86 * Math.sqrt(r()), a0 = r() * TAU, span = .04 + .32 * r() * r();
      g.globalAlpha = .35 + .65 * r(); g.lineWidth = (.8 + .9 * r()) * 2 / S;
      g.beginPath(); g.arc(0, 0, rad, a0, a0 + span); g.stroke();
    }
    for (let k = 0; k < 9; k++) {
      const x = r() * 1.6 - .8, y = r() * 1.6 - .8, a = r() * TAU, l = .05 + .18 * r();
      g.globalAlpha = .5 + .5 * r(); g.lineWidth = 1.2 * 2 / S;
      g.beginPath(); g.moveTo(x, y); g.lineTo(x + l * Math.cos(a), y + l * Math.sin(a)); g.stroke();
    }
  });
  for (let i = 0; i < H.length; i++) if (m[i] > 0) H[i] -= .016 * m[i];
  return m;
}

// ---- height field → maps ---------------------------------------------------------------------------------------------
// depth: relief height of H = 1 in texels (sets how steep the walls read). Layers that only change the finish:
// · polish by height — oxide stays in the low ground and in the foot of each wall (cavity); the ground keeps a patina;
// · wear — convex edges of the raised relief are rubbed brighter and smoother than its flat tops;
// · relief shadow — the key light's direction (upper left, ~47° high) baked as a soft occlusion on the far side of each
//   raised form, so the relief does not read as a flat decal;
// · roughness — two noises (smudges, sand) and the scratch marks, so reflections are not glass-smooth.
// Outputs are top-down rows: polish (1 channel), normal (RGBA), ao + roughness (2 channels), metal (1 channel, optional).
const LIGHT = [-.61, -.79];
function maps(H, W, Hh, { depth, lo = .26, hi = .42, oxide = [.004, .02], top = .9, rough = [.64, .26], metal = null, ao = 1, marks = null, shadow = .5, wear = .75 }) {
  const { sand, patina, smudge } = noise(W, Hh);
  const b1 = blur(H, W, Hh, Math.max(1, Math.round(W / 100))), b2 = blur(H, W, Hh, Math.max(2, Math.round(W / 30))), b0 = blur(H, W, Hh, Math.max(1, Math.round(W / 256)));
  const polish = new Uint8Array(W * Hh), normal = new Uint8Array(W * Hh * 4), orm = new Uint8Array(W * Hh * 2), metalOut = metal ? new Uint8Array(W * Hh) : null;
  const step = Math.max(1, W / 512), rise = 1.07 / depth;
  for (let y = 0; y < Hh; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x, o = i * 4;
    const xl = H[i - (x > 0 ? 1 : 0)], xr = H[i + (x < W - 1 ? 1 : 0)], yu = H[i - (y > 0 ? W : 0)], yd = H[i + (y < Hh - 1 ? W : 0)];
    // Image y runs down, the surface's v runs up.
    let nx = -(xr - xl) / 2 * depth, ny = (yd - yu) / 2 * depth, nz = 1;
    const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
    normal[o] = (nx * .5 + .5) * 255; normal[o + 1] = (ny * .5 + .5) * 255; normal[o + 2] = (nz * .5 + .5) * 255; normal[o + 3] = 255;
    // Toward the light: if the surface there rises above the light's ray, this texel is in its shadow.
    let sh = 0;
    if (shadow) for (let k = 1; k <= 8; k++) {
      const sx = Math.round(x + LIGHT[0] * k * step), sy = Math.round(y + LIGHT[1] * k * step);
      if (sx < 0 || sy < 0 || sx >= W || sy >= Hh) break;
      sh = Math.max(sh, b0[sy * W + sx] - H[i] - k * step * rise);
    }
    sh = clamp(sh * 5, 0, 1) * shadow;
    const cav = clamp((b1[i] - H[i]) * 3, 0, 1), deep = clamp((b2[i] - H[i]) * 1.6, 0, 1), conv = clamp((H[i] - b1[i]) * 5, 0, 1) * wear;
    const up = smooth(lo, hi, H[i]) * (1 - .55 * cav);
    const ground = oxide[0] + (oxide[1] - oxide[0]) * patina[i];
    let p = ground + (top - .08 * patina[i] - ground) * up;
    p += (Math.min(1, top + .08) - p) * conv * up;
    const scratch = marks ? marks[i] : 0;
    polish[i] = clamp(p * (1 - .45 * sh) * (1 - .25 * scratch * up), 0, 1) * 255;
    orm[i * 2] = clamp(1 - ao * (.55 * cav + .35 * deep + .4 * sh), 0, 1) * 255;
    orm[i * 2 + 1] = clamp(rough[0] + (rough[1] - rough[0]) * up - .1 * conv + .14 * (smudge[i] - .5) + .05 * (sand[i] - .5) + .12 * scratch, .06, 1) * 255;
    if (metalOut) metalOut[i] = metal[i] * 255;
  }
  return { polish, normal, orm, metal: metalOut };
}

// ---- public builders -------------------------------------------------------------------------------------------------
// One coin face at S×S. state: 'struck' (the input's relief), 'blank' (an unstruck planchet: the value was left as the
// sample). Layers, in order: base (band, beads, ring and exergue lines on a cast ground) → the input's motif → the
// legend → polishing marks; then the finish layers in maps().
// With { height: true } it also returns `height` for a displacement map (3D-2): the height field softened to about the
// vertex spacing of a dense face mesh, as 0..1 of H = .8, so the mesh follows the large forms and the normal map keeps
// the sharp walls.
export function coin(key, rec, state = 'struck', S = 512, { height = false } = {}) {
  const out = struckOrBlank(key, rec, state, S);
  if (height) {
    const b = blur(out.H, S, S, Math.max(1, Math.round(S / 320))), h = new Uint8Array(S * S);
    for (let i = 0; i < h.length; i++) h[i] = clamp(b[i] / .8, 0, 1) * 255;
    out.height = h;
  }
  return out;
}
function struckOrBlank(key, rec, state, S) {
  pxs = S / 512;
  let H;
  if (state === 'struck') { H = struckBase(S); unit = MOTIF; try { motifs[key](H, S, rec); } finally { unit = 1; } legend(H, S, label(key, rec)); }
  else {
    // Blank: a smooth satin planchet, very slightly dished — no beads, no legend, nothing struck.
    H = new Float32Array(S * S);
    const { sand } = noise(S);
    forEachPixel(S, (x, y, i) => { const r = Math.hypot(x, y); H[i] = .36 - .03 * r * r + .004 * (sand[i] - .5) - .06 * smooth(.95, 1.02, r); });
  }
  const marks = scratches(H, S, seedOf(`${key}:${state}`), state === 'struck' ? 170 : 120);
  // The face disc spans .93 coin radii: depth = relief of .10 coin radii per H unit, in texels.
  const depth = .10 / (1.86 / S);
  const out = state === 'struck' ? maps(H, S, S, { depth, marks }) : maps(H, S, S, { depth, marks, lo: -1, hi: 0, top: .82, rough: [.32, .28], ao: .6, shadow: 0, wear: 0 });
  pxs = 1;
  return { S, H, ...out };
}
// The floor of an empty socket: an oxidised recess, darker toward its wall, with a dashed guide where the coin's edge
// will sit and a centring dimple — the same dashed guide the earlier studies used for a part not yet engraved.
// With a label (3D-2: the step number, 01 … 07) the label takes the dimple's place, small and polished like the guide.
export function socket(S = 256, label = '') {
  pxs = S / 512;
  const H = new Float32Array(S * S), { grain } = noise(S);
  forEachPixel(S, (x, y, i) => { const r = Math.hypot(x, y); H[i] = .30 - .22 * smooth(.70, 1.0, r) + .02 * (grain[i] - .5); });
  level(H, bevel(mask(S, g => { g.lineWidth = .028; g.lineCap = 'butt'; g.setLineDash([.07, .055]); g.beginPath(); g.arc(0, 0, .84, 0, TAU); g.stroke(); g.setLineDash([]); if (!label) { g.beginPath(); g.arc(0, 0, .05, 0, TAU); g.fill(); } }), S, S, 2), .52);
  if (label) level(H, bevel(mask(S, g => { g.setTransform(1, 0, 0, 1, 0, 0); g.font = `700 ${.3 * S / 2}px StudyCondensed, StudySans, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(label, S / 2, S / 2 + .012 * S); }), S, S, 1), .52);
  pxs = 1;
  return { S, H, ...maps(H, S, S, { depth: .05 / (2 / S), lo: .42, hi: .5, oxide: [.05, .06], top: .55, rough: [.55, .35], ao: 1, shadow: 0, wear: 0 }) };
}
// ---- the eighth strike: the figure's house sign ----------------------------------------------------------------------
// S3 (step 1 of D8): one sign per house of the twelve, drawn as Canvas paths in a box of ±1 (y down) and struck like the
// coins' motifs — white is raised metal, black (carve) cuts back to the enamel. Plain silhouettes with strokes of .13 box
// units or more: on the finished medal the sign is about 25–30px tall. The house of 니케 gets the herald's staff without
// wings (D9: no wings next to that name).
const carve = (g, draw) => { g.save(); g.fillStyle = g.strokeStyle = '#000'; draw(); g.restore(); };
const shape = (g, pts) => { g.beginPath(); pts.forEach(([x, y], i) => i ? g.lineTo(x, y) : g.moveTo(x, y)); g.closePath(); };
// A ring of round shapes each cut out of the ones drawn before it, so they read as separate grains, grapes.
const cut = (g, path, w = .07) => { path(); carve(g, () => { g.lineWidth = w; g.stroke(); }); g.fill(); };
export const SIGNS = {
  // A thunderbolt.
  '제우스': g => { shape(g, [[-.04, -1], [.52, -1], [.14, -.2], [.5, -.2], [-.4, 1], [-.06, .1], [-.44, .1]]); g.fill(); },
  // The eye of a peacock's feather on its quill.
  '헤라': g => {
    g.beginPath(); g.moveTo(0, -1); g.bezierCurveTo(.8, -.72, .8, .3, 0, .52); g.bezierCurveTo(-.8, .3, -.8, -.72, 0, -1); g.fill();
    g.lineWidth = .17; g.lineCap = 'butt'; g.beginPath(); g.moveTo(0, .42); g.lineTo(0, 1); g.stroke();
    carve(g, () => { g.beginPath(); g.ellipse(0, -.17, .36, .42, 0, 0, TAU); g.fill(); });
    g.beginPath(); g.ellipse(0, -.15, .21, .25, 0, 0, TAU); g.fill();
  },
  // A trident.
  '포세이돈': g => {
    g.lineWidth = .2; g.lineCap = 'butt';
    g.beginPath(); g.moveTo(0, 1); g.lineTo(0, -.66); g.stroke();
    g.beginPath(); g.moveTo(-.6, -.66); g.lineTo(-.6, -.44); g.quadraticCurveTo(-.6, -.12, 0, -.12); g.quadraticCurveTo(.6, -.12, .6, -.44); g.lineTo(.6, -.66); g.stroke();
    for (const x of [-.6, 0, .6]) { shape(g, [[x, -1], [x + .2, -.6], [x - .2, -.6]]); g.fill(); }
  },
  // An ear of wheat: a top grain and three pairs down a stem.
  '데메테르': g => {
    g.lineWidth = .12; g.lineCap = 'butt'; g.beginPath(); g.moveTo(0, 1); g.lineTo(0, -.4); g.stroke();
    const grains = [[0, -.72, 0], ...[-.38, -.04, .3].flatMap(y => [[-.22, y, -.6], [.22, y, .6]])];
    for (const [x, y, a] of grains) cut(g, () => { g.beginPath(); g.ellipse(x, y, .17, .29, a, 0, TAU); });
  },
  // An owl, face on: ear tufts, two eyes cut into the face, the beak.
  '아테나': g => {
    g.beginPath(); g.ellipse(0, .14, .7, .86, 0, 0, TAU); g.fill();
    for (const s of [-1, 1]) { shape(g, [[s * .18, -.52], [s * .66, -1], [s * .7, -.4]]); g.fill(); }
    carve(g, () => { for (const s of [-1, 1]) { g.beginPath(); g.arc(s * .29, -.2, .25, 0, TAU); g.fill(); } shape(g, [[-.11, .12], [.11, .12], [0, .36]]); g.fill(); });
    for (const s of [-1, 1]) { g.beginPath(); g.arc(s * .29, -.2, .11, 0, TAU); g.fill(); }
  },
  // The sun: a disc ringed by eight rays.
  '아폴론': g => {
    g.beginPath(); g.arc(0, 0, .46, 0, TAU); g.fill();
    for (let k = 0; k < 8; k++) { const a = k / 8 * TAU - Math.PI / 2, w = .17; shape(g, [[.6 * Math.cos(a - w), .6 * Math.sin(a - w)], [Math.cos(a), Math.sin(a)], [.6 * Math.cos(a + w), .6 * Math.sin(a + w)]]); g.fill(); }
    carve(g, () => { g.lineWidth = .08; g.beginPath(); g.arc(0, 0, .3, 0, TAU); g.stroke(); });
  },
  // A crescent moon, horns up.
  '아르테미스': g => {
    g.beginPath(); g.arc(0, -.22, .86, 0, TAU); g.fill();
    carve(g, () => { g.beginPath(); g.arc(0, -.64, .76, 0, TAU); g.fill(); });
  },
  // A round shield over a spear.
  '아레스': g => {
    g.lineWidth = .14; g.lineCap = 'butt'; g.beginPath(); g.moveTo(-.88, .88); g.lineTo(.7, -.7); g.stroke();
    shape(g, [[.98, -.98], [.54, -.8], [.8, -.54]]); g.fill();
    g.beginPath(); g.arc(-.04, .04, .66, 0, TAU); g.fill();
    carve(g, () => { g.lineWidth = .09; g.beginPath(); g.arc(-.04, .04, .5, 0, TAU); g.stroke(); g.lineWidth = .07; g.beginPath(); g.arc(-.04, .04, .18, 0, TAU); g.stroke(); });
  },
  // A scallop shell: a fan of seven ribs with a scalloped rim, on its hinge.
  '아프로디테': g => {
    const cy = .4, R = 1.0, a0 = Math.PI * 1.14, a1 = Math.PI * 1.86, ribs = 7, at = (a, r) => [r * Math.cos(a), cy + r * Math.sin(a)];
    g.beginPath(); g.moveTo(0, cy); g.lineTo(...at(a0, .93 * R));
    for (let k = 0; k < ribs; k++) { const t1 = a0 + (a1 - a0) * (k + 1) / ribs, tm = a0 + (a1 - a0) * (k + .5) / ribs; g.quadraticCurveTo(...at(tm, 1.07 * R), ...at(t1, .93 * R)); }
    g.closePath(); g.fill();
    shape(g, [[-.22, cy - .04], [.22, cy - .04], [.13, cy + .2], [-.13, cy + .2]]); g.fill();
    carve(g, () => { g.lineWidth = .07; g.lineCap = 'butt'; for (let k = 1; k < ribs; k++) { const t = a0 + (a1 - a0) * k / ribs; g.beginPath(); g.moveTo(...at(t, .26)); g.lineTo(...at(t, .86 * R)); g.stroke(); } });
  },
  // An anvil, horn to the left.
  '헤파이스토스': g => {
    g.beginPath(); g.moveTo(-.3, -.66); g.lineTo(.96, -.66); g.lineTo(.96, -.4); g.lineTo(.46, -.32); g.lineTo(.3, .16); g.lineTo(.72, .46); g.lineTo(.72, .66);
    g.lineTo(-.72, .66); g.lineTo(-.72, .46); g.lineTo(-.3, .16); g.lineTo(-.42, -.3); g.quadraticCurveTo(-.74, -.34, -1, -.56); g.quadraticCurveTo(-.7, -.7, -.3, -.66); g.closePath(); g.fill();
  },
  // The herald's staff with two snakes wound round it, their heads facing at the top (wingless, see above).
  '헤르메스': g => {
    g.lineWidth = .14; g.lineCap = 'butt'; g.beginPath(); g.moveTo(0, 1); g.lineTo(0, -.74); g.stroke();
    g.beginPath(); g.arc(0, -.84, .15, 0, TAU); g.fill();
    g.lineWidth = .15; g.lineCap = 'round';
    for (const s of [-1, 1]) {
      const pt = t => [s * .46 * Math.sin(TAU * 1.25 * t), .8 - 1.36 * t];
      g.beginPath(); for (let i = 0; i <= 64; i++) { const [x, y] = pt(.9 * i / 64); if (i) g.lineTo(x, y); else g.moveTo(x, y); } g.stroke();
      const [hx, hy] = pt(.9); g.beginPath(); g.ellipse(hx - s * .04, hy - .02, .13, .1, 0, 0, TAU); g.fill();
    }
  },
  // A bunch of grapes under its leaf.
  '디오니소스': g => {
    g.lineWidth = .11; g.lineCap = 'butt'; g.beginPath(); g.moveTo(0, -.5); g.quadraticCurveTo(.02, -.8, .22, -.98); g.stroke();
    g.beginPath(); g.ellipse(-.36, -.7, .34, .17, -.35, 0, TAU); g.fill();
    for (const [y, xs] of [[-.3, [-.42, -.14, .14, .42]], [.02, [-.28, 0, .28]], [.34, [-.14, .14]], [.66, [0]]]) for (const x of xs) cut(g, () => { g.beginPath(); g.arc(x, y, .18, 0, TAU); });
  },
};
// Plate layout (plate units, centre origin, y down): the sign on the left, a short rule, then the name and its house
// centred in the rest. 지난 28일 leaves the plate: the share image's masthead and the ribbon carry it.
const SIGN_X = -.64, SIGN_R = .265, RULE_X = -.27, TEXT_X = .37, TEXT_W = 1.1, NAME_Y = .02, HOUSE_Y = .215;
function figurePlate(figure, W, Hh, scale) {
  const sign = SIGNS[figure.house];
  const a = bevel(mask(W, g => { g.translate(SIGN_X, 0); g.scale(SIGN_R, SIGN_R); if (sign) sign(g); }, W, Hh, scale), W, Hh, 2);
  const b = bevel(mask(W, g => {
    g.setTransform(1, 0, 0, 1, 0, 0);
    const fit = (text, size, weight) => { g.font = `${weight} ${size * scale}px StudySans, sans-serif`; const w = g.measureText(text).width; if (w > TEXT_W * scale) g.font = `${weight} ${size * scale * TEXT_W * scale / w}px StudySans, sans-serif`; };
    g.textAlign = 'center'; g.textBaseline = 'alphabetic';
    const x = W / 2 + TEXT_X * scale, y = v => Hh / 2 + v * scale;
    fit(figure.name, .25, 760); g.fillText(figure.name, x, y(NAME_Y));
    fit(`${figure.house} 가문`, .135, 550); g.fillText(`${figure.house} 가문`, x, y(HOUSE_Y));
    g.fillRect(W / 2 + RULE_X * scale - .007 * scale, y(-.21), .014 * scale, .42 * scale);
  }, W, Hh, scale), W, Hh, 1);
  for (let i = 0; i < a.length; i++) a[i] = Math.max(a[i], b[i]);
  return a;
}
// The centre plate's enamel: one ink enamel with raised metal letters. Until the judgement it reads 지난 28일 over a
// rule; with a figure ({ name, house }: the eighth strike) it carries the house sign and the name. polish is 1 on metal,
// 0 on enamel, and the metal channel matches it. Same figure, same pixels.
/** @param {{ name: string, house: string } | null} [figure] */
export function plate(figure = null, W = 1024, Hh = 338, size = [2.18, .72]) {
  pxs = W / 1024;
  const scale = W / size[0];
  const m = figure ? figurePlate(figure, W, Hh, scale) : bevel(mask(W, g => {
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.font = `650 ${.2 * scale}px StudySans, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'alphabetic';
    g.fillText('지난 28일', W / 2, Hh * .44);
    g.fillRect(W / 2 - .42 * scale, Hh * .56, .84 * scale, .014 * scale);
  }, W, Hh, scale), W, Hh, 1);
  const H = new Float32Array(W * Hh);
  for (let i = 0; i < H.length; i++) H[i] = .2 + .5 * m[i];
  const metal = m.map(v => smooth(.3, .6, v));
  const out = maps(H, W, Hh, { depth: .03 / (size[0] / W), lo: .3, hi: .5, oxide: [0, 0], top: .95, rough: [.10, .34], metal, ao: .4, shadow: 0, wear: .4 });
  pxs = 1;
  return { W, Hh, H, ...out };
}
// Ribbon print: signal orange with ink edge stripes and the allrunabout wordmark repeated along the length. Texture x =
// across the ribbon, y = along it. The weave (normal map): grosgrain ribs across the width — the weft — over fine warp
// threads along the length, each rib a little uneven, and the selvedge rolled at both edges.
export function ribbon(W = 512, Hh = 2048) {
  const { g } = canvas2d(W, Hh);
  g.setTransform(1, 0, 0, 1, 0, 0);
  g.fillStyle = '#ff4d00'; g.fillRect(0, 0, W, Hh);
  g.fillStyle = '#17150f'; g.fillRect(W * .07, 0, W * .014, Hh); g.fillRect(W * (1 - .084), 0, W * .014, Hh);
  g.save(); g.translate(W / 2, 0); g.rotate(Math.PI / 2);
  g.font = `760 ${W * .34}px StudySans, sans-serif`; g.textBaseline = 'middle'; g.textAlign = 'left';
  const word = 'allrunabout', stepW = g.measureText(word).width + W * .7;
  for (let x = W * .3; x < Hh; x += stepW) { g.fillText(word, x, 0); g.beginPath(); g.arc(x + stepW - W * .35, 0, W * .045, 0, TAU); g.fill(); }
  g.restore();
  const print = g.getImageData(0, 0, W, Hh).data;
  const n = new Uint8Array(W * Hh * 4), { sand, grain } = noise(W, Hh), rib = 4.2, warp = 2.6;
  for (let y = 0; y < Hh; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x, o = i * 4;
    const ry = TAU * (y + 1.4 * (grain[i] - .5)) / rib, wx = TAU * x / warp;
    // Slopes of a height made of ribs (strong) and threads (weak), plus the rolled edges.
    let dx = -.22 * Math.sin(wx) * (.6 + .4 * Math.cos(ry)), dy = -.9 * Math.sin(ry) + .12 * (sand[i] - .5);
    if (x < W * .025) dx -= .6 * (1 - x / (W * .025)); else if (x > W * .975) dx += .6 * (1 - (W - x) / (W * .025));
    const l = Math.hypot(dx, dy, 1);
    n[o] = (dx / l * .5 + .5) * 255; n[o + 1] = (dy / l * .5 + .5) * 255; n[o + 2] = (1 / l * .5 + .5) * 255; n[o + 3] = 255;
  }
  return { W, Hh, print, normal: n };
}
// A flat, lit preview of a coin (or of the plate: W × Hh) from its own maps (used when WebGL is not available).
export function preview(face, metal, oxide, light = [-.5, -.62, .6]) {
  const { S, polish, normal } = face, W = face.W || S, Hh = face.Hh || S, out = new ImageData(W, Hh);
  const l = Math.hypot(...light), L = light.map(v => v / l);
  for (let i = 0; i < W * Hh; i++) {
    const o = i * 4, p = polish[i] / 255, nx = normal[o] / 127.5 - 1, ny = -(normal[o + 1] / 127.5 - 1), nz = normal[o + 2] / 127.5 - 1;
    const lam = clamp(nx * L[0] + ny * L[1] + nz * L[2], 0, 1), spec = Math.pow(clamp(lam, 0, 1), 18) * p;
    for (let c = 0; c < 3; c++) out.data[o + c] = clamp((oxide[c] + (metal[c] - oxide[c]) * p) * (.35 + .75 * lam) + spec * 90, 0, 255);
    out.data[o + 3] = 255;
  }
  return out;
}
