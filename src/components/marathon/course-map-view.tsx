'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Pause, Play, Rocket } from 'lucide-react';

import type { CourseMapData } from '@/lib/course-map';

// 타보기를 누르는 사람만 이 코드를 받는다
const CourseRide = dynamic(() => import('./course-ride').then((m) => m.CourseRide), {
  ssr: false,
});

/**
 * 코스를 '보는 것'이 아니라 '미리 달려보는 것'으로 만드는 뷰.
 *
 * ── 입체 ──
 * 지면은 눕히고, 그 위에 OSM 에 **실제 높이가 등록된 건물만** 세운 도시를 깐다
 * (빌더가 저작 시점에 구워둔 정적 SVG). 높이가 없는 건물은 세우지 않는다 —
 * 기본값으로 세우면 없는 도시를 지어내는 것이다.
 * 코스 고도는 쓰지 않는다. 추정 경로 위에 노이즈 섞인 SRTM 고도를 얹으면
 * 거짓말이 하나 더 는다.
 *
 * ── 플라이오버 ──
 * 진짜 3D 카메라가 아니다. 구워둔 씬 하나를 CSS transform 으로 확대·이동해
 * 주자를 따라간다. 런타임 3D·타일·지형 메시가 전부 필요 없다.
 *
 * ── 성능 ──
 * 진행률은 state 가 아니다. rAF 마다 setState 하면 3.4초 동안 React 트리를
 * 200번 다시 그린다. 진행률은 ref 로 DOM 을 직접 만지고, state 는 활성 구간이
 * 바뀔 때만 건드린다(달리는 동안 최대 5번).
 */

/**
 * 코스 한 바퀴를 도는 시간. 3.4초는 너무 빨랐다 — 지형을 알아볼 틈이 없다.
 * 중간에 언제든 멈추거나 구간을 눌러 건너뛸 수 있으니 넉넉하게 잡는다.
 */
const RUN_MS = 8200;
/** 주자 뒤로 남는 잔광의 길이(경로 대비 비율) */
const TRAIL = 0.06;
/** 구간을 눌렀을 때 그 지점까지 달려가는 시간 — 거리에 비례 */
const SEEK_MIN_MS = 320;
const SEEK_MAX_MS = 900;
/**
 * 이징. ease-out 을 쓰면 초반 30% 시간에 거리의 절반을 지나가서 출발이 튄다.
 * 부드럽게 붙었다 부드럽게 떨어지는 smoothstep 이 맞다.
 */
const ease = (t: number) => t * t * (3 - 2 * t);

/** 플라이오버 확대 배율 */
const FLY_ZOOM = 2.4;
/** 줌인·줌아웃에 쓰는 진행률 구간 */
const FLY_IN = 0.08;
const FLY_OUT = 0.06;

export function CourseMapView({ data }: { data: CourseMapData }) {
  const [, , vbW, vbH] = data.viewBox;

  const liftedRef = useRef<SVGPathElement>(null);
  const groundRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const haloRef = useRef<SVGPathElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const runnerRef = useRef<HTMLSpanElement>(null);
  const beaconRef = useRef<SVGLineElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const followRef = useRef(true);
  const zoomRef = useRef(1);

  const rafRef = useRef<number | null>(null);
  const lenRef = useRef(0);
  const progressRef = useRef(0);
  const activeRef = useRef<number | null>(null);

  const [active, setActive] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const [still, setStill] = useState(false); // 모션을 줄이기로 한 사용자
  const [follow, setFollow] = useState(true);
  const [riding, setRiding] = useState(false);

  /**
   * 카메라 — 구워둔 씬을 확대해 (fx, fy) 지점을 화면 가운데로 가져온다.
   * transform-origin 이 0 0 이라 scale(S) 뒤의 translate 는 S 로 나눠 계산한다.
   * 글자와 주자는 같이 커지면 안 되므로 1/S 로 되돌린다.
   */
  const camera = useCallback((fx: number, fy: number, S: number) => {
    const world = worldRef.current;
    if (!world) return;
    zoomRef.current = S;
    const cx = Math.min(1 - 0.5 / S, Math.max(0.5 / S, fx));
    const cy = Math.min(1 - 0.5 / S, Math.max(0.5 / S, fy));
    world.style.transform =
      S === 1
        ? 'none'
        : `scale(${S}) translate(${(0.5 / S - cx) * 100}%, ${(0.5 / S - cy) * 100}%)`;
    const inv = S === 1 ? '' : ` scale(${1 / S})`;
    world.querySelectorAll<HTMLElement>('[data-keep-size]').forEach((el) => {
      el.style.transform = `${el.dataset.base ?? ''}${inv}`;
    });
  }, []);

  /** 진행률을 DOM 에 바른다. 렌더를 거치지 않는다 */
  const paint = useCallback(
    (p: number) => {
      const len = lenRef.current;
      if (!len) return;
      progressRef.current = p;
      const off = len * (1 - p);
      for (const r of [liftedRef, groundRef, glowRef, haloRef]) {
        if (r.current) r.current.style.strokeDashoffset = String(off);
      }
      if (trailRef.current) {
        const w = len * TRAIL;
        const s = Math.max(0, len * p - w);
        trailRef.current.style.strokeDasharray = `0 ${s} ${Math.min(w, len * p)} ${len}`;
      }
      const path = liftedRef.current;
      const runner = runnerRef.current;
      // 끝점(p=1)에서도 주자를 남긴다 — 피니시 구간을 골랐을 때 점이 사라지면
      // '달려가 멈춘다'는 약속이 깨진다
      const show = p > 0.001;
      if (runner) runner.style.display = show ? '' : 'none';
      if (beaconRef.current) beaconRef.current.style.display = show ? '' : 'none';
      if (show && path && runner) {
        const pt = path.getPointAtLength(len * Math.min(1, p));
        runner.style.left = `${(pt.x / vbW) * 100}%`;
        runner.style.top = `${(pt.y / vbH) * 100}%`;
        if (followRef.current) {
          // 출발에서 줌인, 피니시 직전에 줌아웃 — 그 사이는 주자를 따라간다
          const inZ = Math.min(1, p / FLY_IN);
          const outZ = Math.min(1, (1 - p) / FLY_OUT);
          const S = 1 + (FLY_ZOOM - 1) * Math.min(inZ, outZ);
          camera(pt.x / vbW, pt.y / vbH, S);
        }
        if (beaconRef.current) {
          beaconRef.current.setAttribute('x1', String(pt.x));
          beaconRef.current.setAttribute('x2', String(pt.x));
          beaconRef.current.setAttribute('y1', String(pt.y));
          beaconRef.current.setAttribute('y2', String(pt.y + data.lift));
        }
      }
    },
    [vbW, vbH, data.lift, camera],
  );

  const markBeat = useCallback(
    (i: number | null) => {
      if (activeRef.current === i) return;
      activeRef.current = i;
      setActive(i);
    },
    [],
  );

  const stop = useCallback(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }, []);

  /** from → to 로 이동. followBeats 면 지나치는 구간 노트를 같이 켠다 */
  const animate = useCallback(
    (from: number, to: number, ms: number, followBeats: boolean) => {
      stop();
      if (still || ms <= 0) {
        paint(to);
        return;
      }
      setRunning(followBeats);
      const t0 = performance.now();
      const span = to - from;
      const tick = (t: number) => {
        const raw = Math.min(1, (t - t0) / ms);
        const p = from + span * ease(raw);
        paint(p);
        if (followBeats) {
          let cur = -1;
          data.beats.forEach((b, k) => {
            if (p >= b.at - 0.001) cur = k;
          });
          markBeat(cur >= 0 ? cur : null);
        }
        if (raw < 1) rafRef.current = requestAnimationFrame(tick);
        else {
          rafRef.current = null;
          setRunning(false);
          // 다 달리고 나면 목록 전체가 다시 읽히게 두고 카메라도 물린다
          if (followBeats) {
            markBeat(null);
            camera(0.5, 0.5, 1);
          }
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    },
    [data.beats, markBeat, paint, still, stop, camera],
  );

  // 길이 측정 + 모션 설정 구독(런타임 변경도 따라간다)
  useEffect(() => {
    const path = liftedRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    lenRef.current = len;
    for (const r of [liftedRef, groundRef, glowRef, haloRef]) {
      if (r.current) r.current.style.strokeDasharray = String(len);
    }
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setStill(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // 화면에 처음 들어올 때 한 번 달린다. 그 뒤로는 사용자가 조작한다
  useEffect(() => {
    const el = boxRef.current;
    if (!el || !lenRef.current) return;
    if (still) {
      paint(1);
      return;
    }
    paint(0);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            io.disconnect();
            followRef.current = true;
            animate(0, 1, RUN_MS, true);
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stop();
    };
  }, [animate, paint, still, stop]);

  useEffect(() => stop, [stop]);

  const goTo = (idx: number) => {
    const b = data.beats[idx];
    if (!b) return;
    // 구간을 직접 고르는 건 코스 전체를 견주어 보려는 행동이다 — 카메라는 물린다
    followRef.current = false;
    camera(0.5, 0.5, 1);
    setRunning(false);
    markBeat(idx);
    const from = progressRef.current;
    const to = b.at === 0 ? 0.002 : b.at;
    const ms = Math.min(SEEK_MAX_MS, Math.max(SEEK_MIN_MS, Math.abs(to - from) * SEEK_MAX_MS * 1.6));
    animate(from, to, ms, false);
  };

  /** 달리는 중이면 멈추고, 멈춰 있으면 그 자리에서 이어 달린다 */
  const togglePlay = () => {
    if (running) {
      stop();
      setRunning(false);
      return;
    }
    followRef.current = follow;
    const from = progressRef.current >= 0.999 ? 0 : progressRef.current;
    if (from === 0) markBeat(null);
    animate(from, 1, RUN_MS * (1 - from), true);
  };

  const toggleFollow = () => {
    const next = !follow;
    setFollow(next);
    followRef.current = next && running;
    if (!next) camera(0.5, 0.5, 1);
  };

  const activeBeat = active !== null ? data.beats[active] : null;

  return (
    <div className="course-skin grid gap-4 lg:grid-cols-[minmax(0,1fr)_19rem]">
      {/* ── 지도 ───────────────────────────────────────── */}
      <div
        ref={boxRef}
        className="relative overflow-hidden rounded-[6px] border border-[var(--accent-line)]"
      >
        {/* 카메라가 움직이는 대상 — 씬 전체를 한 덩어리로 확대·이동한다 */}
        <div ref={worldRef} className="origin-top-left will-change-transform">
        {/* 배경 지형 — 저작 시점에 구운 정적 SVG. 런타임 타일 호출 없음 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.background}
          alt=""
          aria-hidden="true"
          width={vbW}
          height={vbH}
          className="block h-auto w-full"
        />

        <svg
          viewBox={`0 0 ${vbW} ${vbH}`}
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="코스 경로 개요도"
        >
          <defs>
            <filter id="course-soft" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="9" />
            </filter>
          </defs>

          {/* 코스를 지면에서 띄운 경우에만 그림자와 받침선을 깐다.
              건물이 깊이를 만드는 지도에서는 lift 가 0이라 이 층이 통째로 빠진다 */}
          {data.lift > 0 && (
            <>
              <path
                d={data.courseGround}
                fill="none"
                stroke="var(--m-shadow)"
                strokeWidth={7}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.5}
              />
              <g stroke="var(--m-stilt)" strokeWidth={1.5} strokeLinecap="round">
                {data.stilts.map((d, i) => (
                  <path key={`s${i}`} d={d} fill="none" />
                ))}
              </g>
            </>
          )}

          {/* 아직 안 달린 구간도 옅게 깔아둔다 — 어디를 도는 코스인지가 먼저다 */}
          <path
            d={data.course}
            fill="none"
            stroke="var(--m-ghost)"
            strokeWidth={4}
            strokeDasharray="3 7"
            strokeLinecap="round"
          />

          {data.lift > 0 && (
            <path
              ref={groundRef}
              d={data.courseGround}
              fill="none"
              stroke="var(--m-shadow)"
              strokeWidth={5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
          <path
            ref={glowRef}
            className="course-glow"
            d={data.course}
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            ref={haloRef}
            d={data.course}
            fill="none"
            stroke="var(--m-halo)"
            strokeWidth={12}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            ref={liftedRef}
            d={data.course}
            fill="none"
            stroke="var(--m-course)"
            strokeWidth={6}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            ref={trailRef}
            d={data.course}
            fill="none"
            stroke="var(--m-trail)"
            strokeWidth={9}
            strokeLinecap="round"
          />

          {/* 주자에서 지면으로 내리는 기둥 */}
          <line ref={beaconRef} stroke="var(--accent)" strokeWidth={2} opacity={0.5} style={{ display: 'none' }} />

          {data.beats.map((b, i) => (
            <circle
              key={`b${i}`}
              cx={b.x}
              cy={b.y}
              r={active === i ? 15 : 8}
              fill="none"
              stroke={active === i ? 'var(--accent)' : 'var(--m-bdot)'}
              strokeWidth={active === i ? 6 : 4}
            />
          ))}
          {data.markers.map((m, i) => (
            <g key={`m${i}`}>
              {data.lift > 0 && (
                <>
                  <ellipse cx={m.x} cy={m.groundY} rx={9} ry={5} fill="var(--m-shadow)" opacity={0.65} />
                  <line x1={m.x} y1={m.groundY} x2={m.x} y2={m.y} stroke="var(--m-stilt)" strokeWidth={2} />
                </>
              )}
              <circle cx={m.x} cy={m.y} r={m.kind === 'start' ? 14 : 11} fill="var(--m-mark)" />
              <circle cx={m.x} cy={m.y} r={m.kind === 'start' ? 5 : 4} fill="var(--m-bdot)" />
            </g>
          ))}
        </svg>

        {/* 글자는 HTML 로 — 지도가 줄어도 크기가 유지된다 */}
        {data.landmarks.map((l, i) => (
          <span
            key={`l${i}`}
            data-keep-size
            data-base="translate(-50%,-50%)"
            className="pointer-events-none absolute whitespace-nowrap text-[11px] font-semibold tracking-[0.16em]"
            style={{
              left: `${(l.x / vbW) * 100}%`,
              top: `${(l.y / vbH) * 100}%`,
              color: 'var(--m-lm)',
              transform: 'translate(-50%,-50%)',
            }}
          >
            {l.name}
          </span>
        ))}
        {data.markers.map((m, i) => (
          <span
            key={`ml${i}`}
            data-keep-size
            data-base="translate(-50%,-100%)"
            className="pointer-events-none absolute whitespace-nowrap text-[11px] font-extrabold"
            style={{
              left: `${(m.x / vbW) * 100}%`,
              top: `calc(${(m.y / vbH) * 100}% - 1.2rem)`,
              color: 'var(--m-mklab)',
              transform: 'translate(-50%,-100%)',
            }}
          >
            {m.kind === 'start' ? '출발 · 피니시' : '반환점'}
          </span>
        ))}

        <span
          ref={runnerRef}
          data-keep-size
          data-base="translate(-50%,-50%)"
          className="pointer-events-none absolute z-10"
          style={{ display: 'none', transform: 'translate(-50%,-50%)' }}
          aria-hidden="true"
        >
          <span
            className="block h-3.5 w-3.5 rounded-full"
            style={{
              background: 'var(--accent)',
              boxShadow: '0 0 0 3px var(--m-halo, #fff), 0 0 20px 6px var(--accent-line)',
            }}
          />
        </span>
        </div>

        <button
          type="button"
          onClick={togglePlay}
          className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          style={{ background: 'var(--m-btnBg)', borderColor: 'var(--m-btnLine)', color: 'var(--m-btnFg)' }}
        >
          {running ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          {running ? '여기서 멈추기' : '코스 달려보기'}
        </button>

        <button
          type="button"
          onClick={toggleFollow}
          aria-pressed={follow}
          className="absolute right-2 top-11 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold backdrop-blur transition hover:border-[var(--accent)]"
          style={
            follow
              ? { background: 'var(--accent)', borderColor: 'var(--accent)', color: '#fff' }
              : { background: 'var(--m-btnBg)', borderColor: 'var(--m-btnLine)', color: 'var(--m-btnFg)' }
          }
        >
          {follow ? '따라가는 중' : '전체 보기'}
        </button>

        {/* 모바일은 지도와 노트가 위아래로 갈린다 — 지금 어느 구간인지 지도 안에서 알려준다 */}
        {activeBeat && (
          <div
            className="pointer-events-none absolute inset-x-2 bottom-2 rounded-[4px] px-3 py-2 text-xs font-bold backdrop-blur lg:hidden"
            style={{ background: 'var(--m-btnBg)', color: 'var(--m-mklab)' }}
          >
            {activeBeat.title}
          </div>
        )}

        <span
          className="pointer-events-none absolute bottom-1 right-2 text-[10px] leading-none opacity-80 lg:bottom-1"
          style={{ color: 'var(--m-lm)' }}
        >
          {data.attribution}
        </span>

        {data.ride && !riding && (
          <button
            type="button"
            onClick={() => {
              stop();
              setRunning(false);
              setRiding(true);
            }}
            className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold shadow-sm backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            style={{ background: 'var(--m-btnBg)', borderColor: 'var(--m-btnLine)', color: 'var(--m-btnFg)' }}
          >
            <Rocket className="h-3 w-3" />
            코스 타보기
          </button>
        )}

        {riding && data.ride && (
          <CourseRide src={data.ride} beats={data.beats} onExit={() => setRiding(false)} />
        )}

      </div>

      {/* ── 구간 노트 ──────────────────────────────────── */}
      <ol
        className="flex flex-col gap-1.5 rounded-[6px] p-1.5"
        style={{ background: 'var(--m-panel)', color: 'var(--m-panelFg)' }}
      >
        {data.beats.map((b, i) => (
          <li key={i}>
            <button
              type="button"
              onMouseEnter={() => goTo(i)}
              onFocus={() => goTo(i)}
              onClick={() => goTo(i)}
              aria-current={active === i}
              className="flex w-full gap-2.5 rounded-r-[4px] border-l-[3px] px-3 py-2 text-left transition"
              style={{
                borderLeftColor: active === i ? 'var(--accent)' : 'transparent',
                background: active === i ? 'var(--m-beatOn)' : 'transparent',
              }}
            >
              <span className="flex-none pt-0.5 font-mono text-[10.5px] font-extrabold text-[var(--accent)]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>
                <span className="block text-[13.5px] font-extrabold leading-snug">{b.title}</span>
                <span className="mt-0.5 block text-xs leading-relaxed" style={{ color: 'var(--m-lm)' }}>
                  {b.note}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
