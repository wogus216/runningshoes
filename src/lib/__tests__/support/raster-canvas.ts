// 테스트 전용 2D 캔버스 — 메달 부조(src/components/running-card/medal/medal3d-relief.js)가 쓰는 만큼만 소프트웨어로 그린다.
// Node(vitest)에는 캔버스가 없어서, 부조 모듈을 워커 밖에서 돌리려고 둔다.
// 브라우저(Skia)와 같은 픽셀을 내지 않는다. '같은 입력 → 같은 픽셀'(결정성)과 '그린 것이 실제로 칠해지는가'를 볼 때만 쓴다.
// 글자는 글꼴 없이 그린다: 한 글자를 글자 코드로 정한 3×3 칸 무늬로 대신한다(글자가 다르면 픽셀이 다르다).
// 면적은 픽셀당 4×4 표본으로 센다. 선 이음은 둥글게(round) 아니면 깎은 모서리(bevel)로 그린다 — miter 는 bevel 로 갈음한다.
type Pt = [number, number];
type Sub = { pts: Pt[]; closed: boolean };
type Matrix = [number, number, number, number, number, number];

const SS = 4;
const TAU = Math.PI * 2;

function grayOf(style: string): number {
  const s = style.trim().toLowerCase();
  if (s.startsWith('#')) {
    const h = s.slice(1);
    return parseInt(h.length === 3 ? h[0] + h[0] : h.slice(0, 2), 16) / 255;
  }
  const m = /rgba?\(\s*([\d.]+)/.exec(s);
  return m ? Number(m[1]) / 255 : 0;
}
const area = (p: Pt[]) => p.reduce((n, [x, y], i) => { const [x2, y2] = p[(i + 1) % p.length]; return n + x * y2 - x2 * y; }, 0) / 2;
const ccw = (p: Pt[]) => (area(p) < 0 ? p.slice().reverse() : p);
function circle([cx, cy]: Pt, r: number): Pt[] {
  const n = Math.max(8, Math.ceil(r * 1.5));
  return Array.from({ length: n }, (_, i): Pt => [cx + r * Math.cos(i / n * TAU), cy + r * Math.sin(i / n * TAU)]);
}

// 다각형들(닫힌 것으로 본다)을 덮은 비율(0..1)을 픽셀마다 센다.
function rasterize(polys: Pt[][], W: number, H: number, rule: 'nonzero' | 'evenodd' = 'nonzero'): Float32Array {
  const cov = new Float32Array(W * H);
  const edges: { x0: number; y0: number; x1: number; y1: number; d: number }[] = [];
  let minY = Infinity, maxY = -Infinity;
  for (const p of polys) {
    if (p.length < 3) continue;
    for (let i = 0; i < p.length; i++) {
      const [x0, y0] = p[i], [x1, y1] = p[(i + 1) % p.length];
      if (y0 === y1) continue;
      edges.push(y0 < y1 ? { x0, y0, x1, y1, d: 1 } : { x0: x1, y0: y1, x1: x0, y1: y0, d: -1 });
      minY = Math.min(minY, y0, y1); maxY = Math.max(maxY, y0, y1);
    }
  }
  if (!edges.length) return cov;
  edges.sort((a, b) => a.y0 - b.y0);
  const active: typeof edges = [], w = 1 / (SS * SS), limit = W * SS - 1;
  let next = 0;
  for (let row = Math.max(0, Math.floor(minY)); row <= Math.min(H - 1, Math.ceil(maxY)); row++) {
    for (let j = 0; j < SS; j++) {
      const y = row + (j + .5) / SS;
      while (next < edges.length && edges[next].y0 <= y) active.push(edges[next++]);
      for (let k = active.length - 1; k >= 0; k--) if (active[k].y1 <= y) active.splice(k, 1);
      const xs = active.map(e => ({ x: e.x0 + (y - e.y0) * (e.x1 - e.x0) / (e.y1 - e.y0), d: e.d })).sort((a, b) => a.x - b.x);
      let wind = 0, from = 0;
      for (const { x, d } of xs) {
        const was = rule === 'nonzero' ? wind !== 0 : (wind & 1) === 1;
        wind += rule === 'nonzero' ? d : 1;
        const is = rule === 'nonzero' ? wind !== 0 : (wind & 1) === 1;
        if (!was && is) from = x;
        else if (was && !is) {
          const k0 = Math.max(0, Math.ceil(from * SS - .5)), k1 = Math.min(limit, Math.ceil(x * SS - .5) - 1), o = row * W;
          for (let k = k0; k <= k1; k++) cov[o + (k / SS | 0)] += w;
        }
      }
    }
  }
  return cov;
}

function dashed(pts: Pt[], pattern: number[]): Pt[][] {
  if (pattern.reduce((a, b) => a + b, 0) <= 0) return [pts];
  const out: Pt[][] = [];
  let idx = 0, left = pattern[0], on = true, cur: Pt[] | null = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    let [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i], len = Math.hypot(x1 - x0, y1 - y0);
    if (!len) continue;
    const ux = (x1 - x0) / len, uy = (y1 - y0) / len;
    let seg = len;
    while (seg > left) {
      x0 += ux * left; y0 += uy * left; seg -= left;
      if (on && cur) { cur.push([x0, y0]); out.push(cur); cur = null; } else cur = [[x0, y0]];
      on = !on; idx = (idx + 1) % pattern.length; left = pattern[idx];
    }
    left -= seg;
    if (on && cur) cur.push([x1, y1]);
  }
  if (on && cur && cur.length > 1) out.push(cur);
  return out;
}

class RasterContext {
  readonly canvas: RasterCanvas;
  private readonly data: Float32Array;
  private m: Matrix = [1, 0, 0, 1, 0, 0];
  fillStyle = '#000';
  strokeStyle = '#000';
  lineWidth = 1;
  lineCap = 'butt';
  lineJoin = 'miter';
  globalAlpha = 1;
  globalCompositeOperation = 'source-over';
  font = '10px sans-serif';
  textAlign = 'start';
  textBaseline = 'alphabetic';
  private dash: number[] = [];
  private clipMask: Float32Array | null = null;
  private stack: Record<string, unknown>[] = [];
  private subs: Sub[] = [];
  private cur: Sub | null = null;

  constructor(canvas: RasterCanvas) { this.canvas = canvas; this.data = new Float32Array(canvas.width * canvas.height); }

  // ---- 상태
  save() {
    const { m, fillStyle, strokeStyle, lineWidth, lineCap, lineJoin, globalAlpha, globalCompositeOperation, font, textAlign, textBaseline, dash, clipMask } = this;
    this.stack.push({ m: [...m], fillStyle, strokeStyle, lineWidth, lineCap, lineJoin, globalAlpha, globalCompositeOperation, font, textAlign, textBaseline, dash: [...dash], clipMask });
  }
  restore() { const s = this.stack.pop(); if (s) Object.assign(this, s); }
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number) { this.m = [a, b, c, d, e, f]; }
  translate(x: number, y: number) { const [a, b, c, d, e, f] = this.m; this.m = [a, b, c, d, a * x + c * y + e, b * x + d * y + f]; }
  scale(x: number, y: number) { const [a, b, c, d, e, f] = this.m; this.m = [a * x, b * x, c * y, d * y, e, f]; }
  rotate(t: number) { const [a, b, c, d, e, f] = this.m, cs = Math.cos(t), sn = Math.sin(t); this.m = [a * cs + c * sn, b * cs + d * sn, c * cs - a * sn, d * cs - b * sn, e, f]; }
  setLineDash(d: number[]) { this.dash = [...d]; }
  getLineDash() { return [...this.dash]; }
  private T(x: number, y: number): Pt { const [a, b, c, d, e, f] = this.m; return [a * x + c * y + e, b * x + d * y + f]; }
  private get unit() { const [a, b, c, d] = this.m; return Math.sqrt(Math.abs(a * d - b * c)); }

  // ---- 경로 (점은 그 순간의 변환으로 기기 좌표에 바로 옮긴다 — 캔버스와 같다)
  beginPath() { this.subs = []; this.cur = null; }
  moveTo(x: number, y: number) { this.cur = { pts: [this.T(x, y)], closed: false }; this.subs.push(this.cur); }
  lineTo(x: number, y: number) { if (!this.cur) this.moveTo(x, y); else this.cur.pts.push(this.T(x, y)); }
  closePath() { if (!this.cur) return; this.cur.closed = true; this.cur = { pts: [this.cur.pts[0]], closed: false }; this.subs.push(this.cur); }
  private push(p: Pt, first: boolean) { if (first && !this.cur) { this.cur = { pts: [p], closed: false }; this.subs.push(this.cur); } else if (this.cur) this.cur.pts.push(p); }
  ellipse(x: number, y: number, rx: number, ry: number, rot: number, a0: number, a1: number, anticlockwise = false) {
    let da = a1 - a0;
    if (!anticlockwise) da = da >= TAU ? TAU : ((da % TAU) + TAU) % TAU;
    else da = -da >= TAU ? -TAU : -((((a0 - a1) % TAU) + TAU) % TAU);
    const n = Math.min(1024, Math.max(8, Math.ceil(Math.abs(da) * Math.max(rx, ry) * this.unit / 1.5)));
    const cr = Math.cos(rot), sr = Math.sin(rot);
    for (let i = 0; i <= n; i++) {
      const t = a0 + da * i / n, lx = rx * Math.cos(t), ly = ry * Math.sin(t);
      this.push(this.T(x + lx * cr - ly * sr, y + lx * sr + ly * cr), i === 0);
    }
  }
  arc(x: number, y: number, r: number, a0: number, a1: number, anticlockwise = false) { this.ellipse(x, y, r, r, 0, a0, a1, anticlockwise); }
  // 곡선은 32토막 꺾은선으로 편다. 시작점은 지금 경로의 마지막 점이다.
  private curve(start: Pt, f: (p0: Pt, t: number) => Pt, n = 32) {
    if (!this.cur) this.moveTo(...start);
    const sub = this.cur as Sub;
    const p0 = sub.pts[sub.pts.length - 1];
    for (let i = 1; i <= n; i++) sub.pts.push(f(p0, i / n));
  }
  quadraticCurveTo(cx: number, cy: number, x: number, y: number) {
    const p1 = this.T(cx, cy), p2 = this.T(x, y);
    this.curve([cx, cy], (p0, t) => [(1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t * t * p2[0], (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t * t * p2[1]]);
  }
  bezierCurveTo(c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number) {
    const p1 = this.T(c1x, c1y), p2 = this.T(c2x, c2y), p3 = this.T(x, y);
    const b = (p0: Pt, t: number, i: 0 | 1) => (1 - t) ** 3 * p0[i] + 3 * (1 - t) ** 2 * t * p1[i] + 3 * (1 - t) * t * t * p2[i] + t ** 3 * p3[i];
    this.curve([c1x, c1y], (p0, t) => [b(p0, t, 0), b(p0, t, 1)]);
  }
  rect(x: number, y: number, w: number, h: number) { this.moveTo(x, y); this.lineTo(x + w, y); this.lineTo(x + w, y + h); this.lineTo(x, y + h); this.closePath(); }
  roundRect(x: number, y: number, w: number, h: number, radii: number | number[] = 0) {
    const r = Math.min(Array.isArray(radii) ? radii[0] ?? 0 : radii, Math.abs(w) / 2, Math.abs(h) / 2);
    this.moveTo(x + r, y); this.lineTo(x + w - r, y); this.arc(x + w - r, y + r, r, -Math.PI / 2, 0);
    this.lineTo(x + w, y + h - r); this.arc(x + w - r, y + h - r, r, 0, Math.PI / 2);
    this.lineTo(x + r, y + h); this.arc(x + r, y + h - r, r, Math.PI / 2, Math.PI);
    this.lineTo(x, y + r); this.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5); this.closePath();
  }

  // ---- 칠하기
  private paint(cov: Float32Array, style: string) {
    const v = grayOf(style), a = this.globalAlpha, clip = this.clipMask, d = this.data;
    for (let i = 0; i < d.length; i++) {
      let c = cov[i];
      if (!c) continue;
      if (clip) c *= clip[i];
      c = Math.min(1, c) * a;
      d[i] += (v - d[i]) * c;
    }
  }
  private polys() { return this.subs.map(s => s.pts).filter(p => p.length > 2); }
  fill(rule: 'nonzero' | 'evenodd' = 'nonzero') { this.paint(rasterize(this.polys(), this.canvas.width, this.canvas.height, rule), this.fillStyle); }
  clip(rule: 'nonzero' | 'evenodd' = 'nonzero') {
    const cov = rasterize(this.polys(), this.canvas.width, this.canvas.height, rule).map(c => Math.min(1, c));
    if (this.clipMask) for (let i = 0; i < cov.length; i++) cov[i] *= this.clipMask[i];
    this.clipMask = cov;
  }
  fillRect(x: number, y: number, w: number, h: number) {
    this.paint(rasterize([[this.T(x, y), this.T(x + w, y), this.T(x + w, y + h), this.T(x, y + h)]], this.canvas.width, this.canvas.height), this.fillStyle);
  }
  clearRect() { this.data.fill(0); }
  private outline(): Pt[][] {
    const hw = this.lineWidth * this.unit / 2, out: Pt[][] = [], round = this.lineJoin === 'round';
    for (const sub of this.subs) {
      const pts = sub.pts.filter((p, i) => i === 0 || p[0] !== sub.pts[i - 1][0] || p[1] !== sub.pts[i - 1][1]);
      if (sub.closed && pts.length > 1) pts.push(pts[0]);
      const pieces = this.dash.length ? dashed(pts, this.dash.map(d => d * this.unit)) : [pts];
      for (const pc of pieces) {
        if (pc.length === 1) { if (this.lineCap === 'round' && sub.pts.length === 1) out.push(circle(pc[0], hw)); continue; }
        const normals: Pt[] = [];
        for (let i = 1; i < pc.length; i++) {
          const [x0, y0] = pc[i - 1], [x1, y1] = pc[i], len = Math.hypot(x1 - x0, y1 - y0), nx = -(y1 - y0) / len * hw, ny = (x1 - x0) / len * hw;
          normals.push([nx, ny]);
          out.push(ccw([[x0 + nx, y0 + ny], [x1 + nx, y1 + ny], [x1 - nx, y1 - ny], [x0 - nx, y0 - ny]]));
        }
        const closed = sub.closed && !this.dash.length;
        for (let i = closed ? 0 : 1; i < pc.length - 1; i++) {
          const p = pc[i], n1 = normals[(i - 1 + normals.length) % normals.length], n2 = normals[i % normals.length];
          if (round) out.push(circle(p, hw));
          else { out.push(ccw([p, [p[0] + n1[0], p[1] + n1[1]], [p[0] + n2[0], p[1] + n2[1]]])); out.push(ccw([p, [p[0] - n1[0], p[1] - n1[1]], [p[0] - n2[0], p[1] - n2[1]]])); }
        }
        if (!closed && this.lineCap !== 'butt') {
          for (const [p, q] of [[pc[0], pc[1]], [pc[pc.length - 1], pc[pc.length - 2]]] as [Pt, Pt][]) {
            if (this.lineCap === 'round') { out.push(circle(p, hw)); continue; }
            const len = Math.hypot(p[0] - q[0], p[1] - q[1]), ux = (p[0] - q[0]) / len * hw, uy = (p[1] - q[1]) / len * hw;
            out.push(ccw([[p[0] - uy, p[1] + ux], [p[0] + ux - uy, p[1] + uy + ux], [p[0] + ux + uy, p[1] + uy - ux], [p[0] + uy, p[1] - ux]]));
          }
        }
      }
    }
    return out;
  }
  stroke() { this.paint(rasterize(this.outline(), this.canvas.width, this.canvas.height), this.strokeStyle); }

  // ---- 글자 대신 칸 무늬
  private size() { const m = /([\d.]+)px/.exec(this.font); return m ? Number(m[1]) : 10; }
  measureText(text: string) { const s = this.size(), w = Array.from(text).length * s * .9; return { width: w, actualBoundingBoxAscent: s * .78, actualBoundingBoxDescent: s * .02, actualBoundingBoxLeft: 0, actualBoundingBoxRight: w }; }
  fillText(text: string, x: number, y: number) {
    const s = this.size(), chars = Array.from(text), adv = s * .9, total = chars.length * adv;
    const x0 = this.textAlign === 'center' ? x - total / 2 : this.textAlign === 'right' || this.textAlign === 'end' ? x - total : x;
    const top = this.textBaseline === 'middle' ? y - .4 * s : this.textBaseline === 'top' ? y : y - .78 * s;
    const cells: Pt[][] = [];
    chars.forEach((ch, i) => {
      const bits = Math.imul(ch.codePointAt(0) ?? 0, 2654435761) >>> 0;
      for (let k = 0; k < 9; k++) {
        if (!((bits >>> k) & 1) && k !== 4) continue;
        const cx = x0 + i * adv + (k % 3) * adv * .3, cy = top + Math.floor(k / 3) * s * .26, w = adv * .28, h = s * .24;
        cells.push([this.T(cx, cy), this.T(cx + w, cy), this.T(cx + w, cy + h), this.T(cx, cy + h)]);
      }
    });
    this.paint(rasterize(cells, this.canvas.width, this.canvas.height), this.fillStyle);
  }
  strokeText(text: string, x: number, y: number) { this.fillText(text, x, y); }

  getImageData(x: number, y: number, w: number, h: number) {
    const W = this.canvas.width, out = new Uint8ClampedArray(w * h * 4);
    for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
      const v = Math.round(Math.min(1, Math.max(0, this.data[(y + j) * W + x + i])) * 255), o = (j * w + i) * 4;
      out[o] = out[o + 1] = out[o + 2] = v; out[o + 3] = 255;
    }
    return { data: out, width: w, height: h };
  }
}

export class RasterCanvas {
  readonly width: number;
  readonly height: number;
  private readonly ctx: RasterContext;
  constructor(width: number, height: number) { this.width = width; this.height = height; this.ctx = new RasterContext(this); }
  getContext(type: string) { return type === '2d' ? this.ctx : null; }
}
