'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

import type { CourseMapData } from '@/lib/course-map';

/**
 * 코스를 '보는 것'이 아니라 '미리 달려보는 것'으로 만드는 뷰.
 *
 * 배경 지형은 <img> 로 뺀 정적 SVG 다(문서를 60KB 무겁게 만들지 않으려고).
 * 그 위에 겹치는 인라인 SVG 에는 경로와 표식만 있고, 글자는 HTML 로 띄운다 —
 * SVG 안의 text 는 지도가 작아지면 같이 줄어들어 모바일에서 읽히지 않는다.
 */

const RUN_MS = 3400;

export function CourseMapView({ data }: { data: CourseMapData }) {
  const [, , vbW, vbH] = data.viewBox;
  const pathRef = useRef<SVGPathElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const [len, setLen] = useState(0);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const [running, setRunning] = useState(false);
  const [still, setStill] = useState(false); // 모션을 줄이기로 한 사용자

  useEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength());
    setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const stop = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  const run = useCallback(
    (from = 0) => {
      stop();
      setRunning(true);
      const t0 = performance.now();
      const span = 1 - from;
      const tick = (t: number) => {
        const raw = Math.min(1, (t - t0) / (RUN_MS * span));
        const p = from + span * (1 - Math.pow(1 - raw, 2));
        setProgress(p);
        if (raw < 1) rafRef.current = requestAnimationFrame(tick);
        else {
          rafRef.current = null;
          setRunning(false);
          // 다 달리고 나면 마지막 노트만 켜져 있는 게 아니라 목록 전체가 다시 읽히게 둔다
          setActive(null);
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    },
    [],
  );

  // 화면에 처음 들어올 때 한 번 달린다. 그 뒤로는 사용자가 조작한다
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    if (still) {
      setProgress(1);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            io.disconnect();
            run(0);
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
  }, [run, still]);

  useEffect(() => stop, []);

  // 달리는 동안 지나친 구간이 곧 지금 읽어야 할 노트다
  useEffect(() => {
    if (!running || !data.beats.length) return;
    let i = -1;
    data.beats.forEach((b, idx) => {
      if (progress >= b.at - 0.001) i = idx;
    });
    setActive(i >= 0 ? i : null);
  }, [progress, running, data.beats]);

  const point = (p: number) => {
    const path = pathRef.current;
    if (!path || !len) return null;
    const pt = path.getPointAtLength(len * Math.min(1, Math.max(0, p)));
    return { left: `${(pt.x / vbW) * 100}%`, top: `${(pt.y / vbH) * 100}%` };
  };

  const runner = progress > 0 && progress < 1 ? point(progress) : null;

  const goTo = (idx: number) => {
    const b = data.beats[idx];
    if (!b) return;
    setActive(idx);
    stop();
    setRunning(false);
    setProgress(b.at === 0 ? 0.001 : b.at);
  };

  const dash = len ? `${len}` : undefined;

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_19rem]">
      {/* ── 지도 ───────────────────────────────────────── */}
      <div
        ref={boxRef}
        className="relative overflow-hidden rounded-[6px] border border-[var(--accent-line)] bg-[#faf8f4]"
      >
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
          {/* 아직 안 달린 구간도 옅게 깔아둔다 — 어디를 도는 코스인지가 먼저다 */}
          <path
            d={data.course}
            fill="none"
            stroke="#b0a494"
            strokeWidth={4}
            strokeDasharray="3 7"
            strokeLinecap="round"
          />
          <path d={data.course} fill="none" stroke="#ffffff" strokeWidth={12} strokeLinejoin="round" strokeLinecap="round"
            strokeDasharray={dash} strokeDashoffset={len ? len * (1 - progress) : 0} />
          <path
            ref={pathRef}
            d={data.course}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={6}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray={dash}
            strokeDashoffset={len ? len * (1 - progress) : 0}
          />

          {data.beats.map((b, i) => (
            <circle
              key={`b${i}`}
              cx={b.x}
              cy={b.y}
              r={active === i ? 15 : 8}
              fill="#ffffff"
              stroke={active === i ? 'var(--accent)' : '#b8ada0'}
              strokeWidth={active === i ? 6 : 4}
            />
          ))}
          {data.markers.map((m, i) => (
            <g key={`m${i}`}>
              <circle cx={m.x} cy={m.y} r={m.kind === 'start' ? 15 : 12} fill="#1c1a17" />
              <circle cx={m.x} cy={m.y} r={m.kind === 'start' ? 5 : 4} fill="#ffffff" />
            </g>
          ))}
        </svg>

        {/* 글자는 HTML 로 — 지도가 줄어도 크기가 유지된다 */}
        {data.landmarks.map((l, i) => (
          <span
            key={`l${i}`}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-medium tracking-tight text-slate-500 sm:text-xs"
            style={{
              left: `${(l.x / vbW) * 100}%`,
              top: `${(l.y / vbH) * 100}%`,
              textShadow: '0 0 4px #fff, 0 0 4px #fff, 0 0 4px #fff',
            }}
          >
            {l.name}
          </span>
        ))}
        {data.markers.map((m, i) => (
          <span
            key={`ml${i}`}
            className="pointer-events-none absolute -translate-x-1/2 whitespace-nowrap text-[11px] font-bold text-slate-900 sm:text-xs"
            style={{
              left: `${(m.x / vbW) * 100}%`,
              top: `calc(${(m.y / vbH) * 100}% + 1.1rem)`,
              textShadow: '0 0 4px #fff, 0 0 4px #fff, 0 0 4px #fff',
            }}
          >
            {m.kind === 'start' ? '출발 · 피니시' : '반환점'}
          </span>
        ))}

        {runner && (
          <span
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={runner}
            aria-hidden="true"
          >
            <span className="block h-3.5 w-3.5 rounded-full ring-[3px] ring-white shadow-[0_0_0_1px_var(--accent-line)]" style={{ background: 'var(--accent)' }} />
          </span>
        )}

        <button
          type="button"
          onClick={() => {
            setActive(null);
            setProgress(0);
            run(0);
          }}
          className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full border border-[var(--accent-line)] bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-white hover:text-[var(--accent)]"
        >
          <Play className="h-3 w-3" />
          코스 달려보기
        </button>

        <span className="pointer-events-none absolute bottom-1 right-2 text-[10px] leading-none text-slate-400">
          {data.attribution}
        </span>
      </div>

      {/* ── 구간 노트 ──────────────────────────────────── */}
      <ol className="flex flex-col gap-1.5">
        {data.beats.map((b, i) => (
          <li key={i}>
            <button
              type="button"
              onMouseEnter={() => goTo(i)}
              onFocus={() => goTo(i)}
              onClick={() => goTo(i)}
              aria-current={active === i}
              className={`w-full rounded-[4px] border-l-[3px] px-3 py-2 text-left transition ${
                active === i
                  ? 'bg-[color-mix(in_srgb,var(--accent)_7%,transparent)] border-[var(--accent)]'
                  : 'border-transparent bg-surface hover:border-[var(--accent-line)]'
              }`}
            >
              <span className="block text-sm font-bold text-primary">{b.title}</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-secondary">{b.note}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
