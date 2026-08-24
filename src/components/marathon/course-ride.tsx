'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Pause, Play, X } from 'lucide-react';

/**
 * 코스 타보기 — 코스를 따라 도시 위를 나는 1인칭 시점.
 *
 * 라이브러리를 쓰지 않는다. 필요한 건 원근 투영 하나뿐이고, 그건 20줄이다.
 * Three.js 를 넣으면 이 버튼을 안 누르는 사람까지 150KB 를 받는다.
 * 데이터(건물 발자국·높이·코스, 미터 좌표)도 이 버튼을 누를 때만 받아온다.
 *
 * 카메라는 코스 위 35m 를 난다. **레일을 공중에 띄우지 않는다** — 띄우면
 * '이 코스가 고가도로'로 읽혀서, 추정 경로에 없는 사실을 하나 더 얹게 된다.
 * 커브에서 기우는 건 카메라지 코스가 아니다.
 */

type RideData = {
  buildings: number[][]; // [높이m, x0,y0, x1,y1, ...]
  water: number[][]; // [x0,y0, x1,y1, ...]
  roads: number[][]; // [폭m, x0,y0, x1,y1, ...]
  green: number[][];
  trees: number[]; // [x0,y0, x1,y1, ...]
  course: number[]; // [x0,y0, x1,y1, ...]
};

/**
 * 시점 둘.
 *
 * 드론은 코스 전체 모양을 보여준다. 러너는 그 자리에 서 본 느낌을 준다 —
 * 위에서 보면 아무리 입체로 세워도 결국 '지도'로 읽히기 때문이다.
 * 러너 시점은 보이는 거리가 짧아 FAR 도 같이 줄인다(그만큼 가볍다).
 */
const CAM = {
  drone: { eye: 95, pitch: 0.38, fov: 1.15, far: 950, speed: 95, roll: 0.34 },
  runner: { eye: 1.65, pitch: 0.02, fov: 1.34, far: 420, speed: 16, roll: 0.1 },
} as const;
type Mode = keyof typeof CAM;

const NEAR = 2; // 근평면(m)
const LOOK_AHEAD = 55; // 진행 방향을 이 거리 앞으로 잡아 흔들림을 줄인다

/** 밤 도시 팔레트 — 지도 스킨과 별개로 이 화면 고유의 톤이다 */
const SKY_TOP = '#05070a';
const SKY_HORIZON = '#16232f';
const GROUND = '#0b0f14';
const WATER = '#0d1c28';
const GREEN = '#0e1611';
const ROAD = '#161d24';
const ROAD_EDGE = 'rgba(150,170,190,.13)';
const TREE = '#16241a';
const TRUNK = '#1b1a16';
const WALL = '#141c23';
const ROOF = '#28333d';
const EDGE = 'rgba(255,255,255,.10)';

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/** 밝기 배율 — 면 방향에 따라 빛을 다르게 받게 한다 */
function shade(hex: string, k: number) {
  const p = [1, 3, 5].map((i) => Math.min(255, Math.round(parseInt(hex.slice(i, i + 2), 16) * k)));
  return `#${p.map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

/** #rrggbb 두 색을 섞는다 — 거리 안개용 */
function mix(a: string, b: string, t: number) {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  return `rgb(${pa.map((v, i) => Math.round(lerp(v, pb[i], t))).join(',')})`;
}

export function CourseRide({
  src,
  beats,
  onExit,
}: {
  src: string;
  beats: { title: string; at: number }[];
  onExit: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dataRef = useRef<RideData | null>(null);
  const rafRef = useRef<number | null>(null);
  const distRef = useRef(0);
  const rollRef = useRef(0);
  const lastRef = useRef(0);

  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [playing, setPlaying] = useState(true);
  const [mode, setMode] = useState<Mode>('drone');
  const modeRef = useRef<Mode>('drone');
  const [beat, setBeat] = useState<string | null>(null);
  const [pct, setPct] = useState(0);

  // 코스를 누적거리로 바꿔 두면 위치·방향을 거리로 바로 뽑을 수 있다
  const cumRef = useRef<number[]>([]);

  useEffect(() => {
    let alive = true;
    fetch(src)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d: RideData) => {
        if (!alive) return;
        dataRef.current = d;
        const cum = [0];
        for (let i = 2; i < d.course.length; i += 2) {
          cum.push(
            cum[cum.length - 1] +
              Math.hypot(d.course[i] - d.course[i - 2], d.course[i + 1] - d.course[i - 1]),
          );
        }
        cumRef.current = cum;
        setStatus('ready');
      })
      .catch(() => alive && setStatus('error'));
    return () => {
      alive = false;
    };
  }, [src]);

  /** 누적거리 d 지점의 좌표 */
  const at = useCallback((d: number): [number, number] => {
    const c = dataRef.current!.course;
    const cum = cumRef.current;
    const total = cum[cum.length - 1];
    const t = ((d % total) + total) % total;
    let lo = 0;
    let hi = cum.length - 1;
    while (lo < hi - 1) {
      const mid = (lo + hi) >> 1;
      if (cum[mid] <= t) lo = mid;
      else hi = mid;
    }
    const seg = cum[hi] - cum[lo] || 1;
    const k = (t - cum[lo]) / seg;
    return [
      lerp(c[lo * 2], c[hi * 2], k),
      lerp(c[lo * 2 + 1], c[hi * 2 + 1], k),
    ];
  }, []);

  const draw = useCallback(() => {
    const cv = canvasRef.current;
    const data = dataRef.current;
    if (!cv || !data) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = cv.clientWidth;
    const H = cv.clientHeight;
    if (cv.width !== W * dpr || cv.height !== H * dpr) {
      cv.width = W * dpr;
      cv.height = H * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cam = CAM[modeRef.current];
    const { eye: EYE_M, pitch: PITCH, fov: FOV, far: FAR } = cam;
    const total = cumRef.current[cumRef.current.length - 1];
    const d = distRef.current;
    const [cx, cy] = at(d);
    const [ax, ay] = at(d + LOOK_AHEAD);
    let fx = ax - cx;
    let fy = ay - cy;
    const fl = Math.hypot(fx, fy) || 1;
    fx /= fl;
    fy /= fl;

    // 커브에서 기운다 — 조금 앞뒤의 방향 차이가 곧 곡률이다
    const [bx, by] = at(d + LOOK_AHEAD * 2);
    const nx = bx - ax;
    const ny = by - ay;
    const cross = fx * ny - fy * nx;
    const turn = Math.atan2(cross, fx * nx + fy * ny);
    rollRef.current = lerp(rollRef.current, Math.max(-cam.roll, Math.min(cam.roll, -turn * 1.5)), 0.08);
    const roll = rollRef.current;

    const focal = W / 2 / Math.tan(FOV / 2);
    const cosP = Math.cos(PITCH);
    const sinP = Math.sin(PITCH);
    const cosR = Math.cos(roll);
    const sinR = Math.sin(roll);

    /** 월드 → 뷰(right, fwd, up). 카메라 뒤는 fwd<=0 */
    const view = (px: number, py: number, pz: number): [number, number, number] => {
      const dx = px - cx;
      const dy = py - cy;
      const dz = pz - EYE_M;
      const right = dx * fy - dy * fx;
      const fwd = dx * fx + dy * fy;
      return [right, fwd * cosP - dz * sinP, fwd * sinP + dz * cosP];
    };
    const project = (v: [number, number, number]): [number, number] => {
      const sx = (v[0] / v[1]) * focal;
      const sy = -(v[2] / v[1]) * focal;
      return [W / 2 + sx * cosR - sy * sinR, H / 2 + sx * sinR + sy * cosR];
    };
    /** 근평면 하나만 자른다 — 카메라를 스치는 건물이 화면을 폭발시키는 걸 막는다 */
    const clipNear = (poly: [number, number, number][]) => {
      const out: [number, number, number][] = [];
      for (let i = 0; i < poly.length; i++) {
        const a = poly[i];
        const b = poly[(i + 1) % poly.length];
        const ain = a[1] >= NEAR;
        const bin = b[1] >= NEAR;
        if (ain) out.push(a);
        if (ain !== bin) {
          const t = (NEAR - a[1]) / (b[1] - a[1]);
          out.push([lerp(a[0], b[0], t), NEAR, lerp(a[2], b[2], t)]);
        }
      }
      return out;
    };
    const fillPoly = (poly: [number, number, number][], fill: string, stroke?: string) => {
      const c = clipNear(poly);
      if (c.length < 3) return;
      ctx.beginPath();
      c.forEach((v, i) => {
        const [x, y] = project(v);
        if (i) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
      });
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
      if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    // ── 하늘과 지면 ──
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, SKY_TOP);
    sky.addColorStop(1, SKY_HORIZON);
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);
    // 지평선은 원근 투영에서 up=0, fwd=∞ 인 방향 — 화면상 y 는 pitch 로만 정해진다
    const horizonY = H / 2 + Math.tan(PITCH) * focal;
    ctx.save();
    ctx.translate(W / 2, H / 2);
    ctx.rotate(roll);
    ctx.translate(-W / 2, -H / 2);
    ctx.fillStyle = GROUND;
    ctx.fillRect(-W, horizonY, W * 3, H * 2);
    ctx.restore();

    // 물·녹지·도로 — 지면이 비어 있으면 속도가 느껴지지 않는다.
    // 스쳐 지나가는 선이 곧 움직임이다
    /** 전부 FAR 밖이면 건너뛴다 */
    const tooFar = (flat: number[], from = 0) => {
      for (let i = from; i < flat.length; i += 2) {
        const dx = flat[i] - cx;
        const dy = flat[i + 1] - cy;
        if (dx * dx + dy * dy <= FAR * FAR) return false;
      }
      return true;
    };
    const groundPoly = (flat: number[], fill: string) => {
      if (tooFar(flat)) return;
      const poly: [number, number, number][] = [];
      for (let i = 0; i < flat.length; i += 2) poly.push(view(flat[i], flat[i + 1], 0));
      fillPoly(poly, fill);
    };
    for (const g of data.green) groundPoly(g, GREEN);
    for (const w of data.water) groundPoly(w, WATER);
    // 노면 — 폭 있는 띠로 깐다. 선 하나로는 눈높이에서 바닥이 되지 않는다
    ctx.beginPath();
    for (const r of data.roads) {
      if (tooFar(r, 1)) continue;
      const hw = r[0] / 2;
      for (let i = 1; i + 3 < r.length; i += 2) {
        const x0 = r[i];
        const y0 = r[i + 1];
        const x1 = r[i + 2];
        const y1 = r[i + 3];
        const ex = x1 - x0;
        const ey = y1 - y0;
        const el = Math.hypot(ex, ey) || 1;
        const nx = (-ey / el) * hw;
        const ny = (ex / el) * hw;
        const quad = clipNear([
          view(x0 + nx, y0 + ny, 0),
          view(x1 + nx, y1 + ny, 0),
          view(x1 - nx, y1 - ny, 0),
          view(x0 - nx, y0 - ny, 0),
        ]);
        if (quad.length < 3) continue;
        quad.forEach((v, k) => {
          const [px, py] = project(v);
          if (k) ctx.lineTo(px, py);
          else ctx.moveTo(px, py);
        });
        ctx.closePath();
      }
    }
    ctx.fillStyle = ROAD;
    ctx.fill();
    ctx.strokeStyle = ROAD_EDGE;
    ctx.lineWidth = 1;
    ctx.stroke();

    // 가로수 — OSM 에 실제로 찍힌 나무만. 높이·수관은 종 정보가 없어 균일하게 둔다
    for (let i = 0; i < data.trees.length; i += 2) {
      const tx = data.trees[i];
      const ty = data.trees[i + 1];
      const dx = tx - cx;
      const dy = ty - cy;
      const dd = dx * dx + dy * dy;
      if (dd > FAR * FAR || dx * fx + dy * fy < 0) continue;
      const base = view(tx, ty, 0);
      const top = view(tx, ty, 7);
      if (base[1] < NEAR || top[1] < NEAR) continue;
      const [bxp, byp] = project(base);
      const [txp, typ] = project(top);
      const rad2 = Math.abs(byp - typ) * 0.42;
      ctx.strokeStyle = TRUNK;
      ctx.lineWidth = Math.max(1, rad2 * 0.22);
      ctx.beginPath();
      ctx.moveTo(bxp, byp);
      ctx.lineTo(txp, typ);
      ctx.stroke();
      ctx.fillStyle = mix(TREE, SKY_HORIZON, Math.min(0.85, Math.sqrt(dd) / FAR));
      ctx.beginPath();
      ctx.ellipse(txp, typ, rad2, rad2 * 0.85, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // ── 건물: 먼 것부터 ──
    const near: { d2: number; b: number[] }[] = [];
    for (const b of data.buildings) {
      const dx = b[1] - cx;
      const dy = b[2] - cy;
      const d2 = dx * dx + dy * dy;
      if (d2 > FAR * FAR) continue;
      if (dx * fx + dy * fy < -80) continue; // 완전히 등 뒤
      near.push({ d2, b });
    }
    near.sort((p, q) => q.d2 - p.d2);

    for (const { d2, b } of near) {
      const h = b[0];
      const n = (b.length - 1) / 2;
      const fog = Math.min(0.88, Math.sqrt(d2) / FAR);
      const roof = mix(ROOF, SKY_HORIZON, fog);
      const edge = fog > 0.6 ? undefined : EDGE;

      // 옆면 — 화면 기준 뒷면은 건너뛴다(정점 수를 절반으로 줄인다)
      const faces: { z: number; lambert: number; poly: [number, number, number][] }[] = [];
      for (let i = 0; i < n; i++) {
        const x0 = b[1 + i * 2];
        const y0 = b[2 + i * 2];
        const x1 = b[1 + ((i + 1) % n) * 2];
        const y1 = b[2 + ((i + 1) % n) * 2];
        // 벽의 바깥 법선이 카메라를 향하는지 (2D 외적)
        const mx = (x0 + x1) / 2 - cx;
        const my = (y0 + y1) / 2 - cy;
        const ex = x1 - x0;
        const ey = y1 - y0;
        if (ex * my - ey * mx <= 0) continue;
        // 램버트 근사 — 벽마다 밝기가 달라야 상자가 아니라 건물로 보인다
        const nl = Math.hypot(ex, ey) || 1;
        const lambert = 0.62 + 0.38 * Math.max(0, (ey / nl) * 0.45 + (-ex / nl) * -0.89);
        faces.push({
          lambert,
          z: mx * mx + my * my,
          poly: [
            view(x0, y0, 0),
            view(x1, y1, 0),
            view(x1, y1, h),
            view(x0, y0, h),
          ],
        });
      }
      faces.sort((p, q) => q.z - p.z);
      for (const f of faces) fillPoly(f.poly, mix(shade(WALL, f.lambert), SKY_HORIZON, fog), edge);

      const top: [number, number, number][] = [];
      for (let i = 0; i < n; i++) top.push(view(b[1 + i * 2], b[2 + i * 2], h));
      fillPoly(top, roof, edge);
    }

    // ── 코스 ──
    // 드론에서는 공중에 뜬 선이 코스를 읽게 해주지만, 눈높이에서는 자기가 밟는 길이
    // 눈앞에 떠 있는 셈이 된다. 러너 시점에서는 노면에 칠한 띠로 바꾼다
    const accent =
      getComputedStyle(cv).getPropertyValue('--accent').trim() || '#FF4D00';
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (modeRef.current === 'runner') {
      // 노면에 그은 안내선. 실제 도로 표시 폭(약 40cm)이 아니면 발밑에서
      // 화면을 덮는 오렌지 삼각형이 된다
      const HW = 0.2;
      ctx.beginPath();
      for (let s0 = 0; s0 < cam.far; s0 += 6) {
        const [x0, y0] = at(d + s0);
        const [x1, y1] = at(d + s0 + 6);
        const ex = x1 - x0;
        const ey = y1 - y0;
        const el = Math.hypot(ex, ey) || 1;
        const nx = (-ey / el) * HW;
        const ny = (ex / el) * HW;
        const quad = clipNear([
          view(x0 + nx, y0 + ny, 0.04),
          view(x1 + nx, y1 + ny, 0.04),
          view(x1 - nx, y1 - ny, 0.04),
          view(x0 - nx, y0 - ny, 0.04),
        ]);
        if (quad.length < 3) continue;
        quad.forEach((v, k) => {
          const [px, py] = project(v);
          if (k) ctx.lineTo(px, py);
          else ctx.moveTo(px, py);
        });
        ctx.closePath();
      }
      ctx.fillStyle = accent;
      ctx.globalAlpha = 0.85;
      ctx.fill();
    } else {
      for (const [width, alpha] of [
        [16, 0.18],
        [7, 0.5],
        [3, 1],
      ] as const) {
        ctx.beginPath();
        let started = false;
        for (let s0 = -40; s0 < 780; s0 += 8) {
          const [px0, py0] = at(d + s0);
          const v = view(px0, py0, 1);
          if (v[1] < NEAR) {
            started = false;
            continue;
          }
          const [x, y] = project(v);
          if (started) ctx.lineTo(x, y);
          else {
            ctx.moveTo(x, y);
            started = true;
          }
        }
        ctx.globalAlpha = alpha;
        ctx.lineWidth = width;
        ctx.strokeStyle = accent;
        ctx.stroke();
      }
    }
    ctx.restore();

    // ── HUD 로 넘길 상태 ──
    const p = d / total;
    setPct(p);
    let cur: string | null = null;
    for (const b of beats) if (p >= b.at - 0.001) cur = b.title;
    setBeat(cur);
  }, [at, beats]);

  // 주행 루프
  useEffect(() => {
    if (status !== 'ready') return;
    const total = cumRef.current[cumRef.current.length - 1];
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (still) {
      draw();
      return;
    }
    const tick = (t: number) => {
      const dt = lastRef.current ? Math.min(0.05, (t - lastRef.current) / 1000) : 0;
      lastRef.current = t;
      if (playing) {
        distRef.current += CAM[modeRef.current].speed * dt;
        if (distRef.current >= total) distRef.current = 0;
      }
      draw();
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastRef.current = 0;
    };
  }, [status, playing, draw]);

  return (
    <div className="absolute inset-0 z-20 overflow-hidden bg-[#05070a]">
      {status !== 'ready' && (
        <div className="flex h-full items-center justify-center text-xs text-slate-400">
          {status === 'loading' ? '코스를 불러오는 중…' : '주행 데이터를 불러오지 못했습니다.'}
        </div>
      )}
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />

      {status === 'ready' && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/55 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

          {beat && (
            <div className="pointer-events-none absolute inset-x-3 bottom-9 text-[13px] font-extrabold text-white drop-shadow">
              {beat}
            </div>
          )}
          {/* 구간 점프 — 눈높이에서 10km 를 다 달릴 수는 없다. 진행 바가 곧 목차다 */}
          <div className="absolute inset-x-3 bottom-5 h-[3px] rounded-full bg-white/20">
            <div
              className="pointer-events-none h-full rounded-full"
              style={{ width: `${pct * 100}%`, background: 'var(--accent)' }}
            />
            {beats.map((b, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  distRef.current = cumRef.current[cumRef.current.length - 1] * b.at;
                  draw();
                }}
                title={b.title}
                aria-label={b.title}
                className="absolute -top-[5px] h-[13px] w-[13px] -translate-x-1/2 rounded-full border-2 border-white/60 bg-black/60 transition hover:border-[var(--accent)] hover:bg-[var(--accent)]"
                style={{ left: `${b.at * 100}%` }}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              const next: Mode = mode === 'drone' ? 'runner' : 'drone';
              modeRef.current = next;
              setMode(next);
              draw();
            }}
            className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur transition hover:bg-white/20"
          >
            {mode === 'drone' ? '🏃 러너 눈높이로' : '🛩 드론 시점으로'}
          </button>

          <button
            type="button"
            onClick={() => setPlaying((v) => !v)}
            className="absolute bottom-3 right-12 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            aria-label={playing ? '멈추기' : '이어서 타기'}
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
        </>
      )}

      <button
        type="button"
        onClick={onExit}
        className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
      >
        <X className="h-3 w-3" />
        지도로
      </button>

      <span className="pointer-events-none absolute left-3 top-3 max-w-[60%] text-[10px] leading-snug tracking-wide text-white/45">
        건물 높이·노면 폭·가로수는 OpenStreetMap 에 등록된 값만 세웠습니다.
        난간·가로등·간판은 데이터가 없어 비어 있습니다
      </span>
    </div>
  );
}
