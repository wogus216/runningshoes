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
 *
 * 색은 전부 globals.css 의 `.course-skin[data-skin]` 이 쥔다. 배경 SVG 만 색이
 * 박혀 있어서 스킨마다 파일이 따로 있다.
 */

const RUN_MS = 3400;
/** 주자 뒤로 남는 잔광의 길이(경로 대비 비율) */
const TRAIL = 0.06;

const SKIN_LABEL: Record<string, string> = {
  night: '나이트 트랙',
  print: '프린트',
  light: '현재 배포본',
};

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
  const [skin, setSkin] = useState(data.skins?.[0] ?? 'light');

  useEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength());
    setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const stop = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  };

  const run = useCallback((from = 0) => {
    stop();
    setRunning(true);
    const t0 = performance.now();
    const span = 1 - from;
    const tick = (t: number) => {
      const raw = Math.min(1, (t - t0) / (RUN_MS * span));
      setProgress(from + span * (1 - Math.pow(1 - raw, 2)));
      if (raw < 1) rafRef.current = requestAnimationFrame(tick);
      else {
        rafRef.current = null;
        setRunning(false);
        // 다 달리고 나면 마지막 노트만 켜져 있는 게 아니라 목록 전체가 다시 읽히게 둔다
        setActive(null);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

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

  const runner = progress > 0.001 && progress < 0.999 ? point(progress) : null;

  const goTo = (idx: number) => {
    const b = data.beats[idx];
    if (!b) return;
    setActive(idx);
    stop();
    setRunning(false);
    setProgress(b.at === 0 ? 0.002 : b.at);
  };

  const drawn = { strokeDasharray: len || undefined, strokeDashoffset: len ? len * (1 - progress) : 0 };
  // 잔광 — 주자 바로 뒤 구간만 밝게. 정지 화면에도 '방금 지나갔다'가 남는다
  const trailWindow = len * TRAIL;
  const trailDash = len
    ? `0 ${Math.max(0, len * progress - trailWindow)} ${Math.min(trailWindow, len * progress)} ${len}`
    : undefined;

  return (
    <div className="course-skin grid gap-4 lg:grid-cols-[minmax(0,1fr)_19rem]" data-skin={skin}>
      {/* ── 지도 ───────────────────────────────────────── */}
      <div
        ref={boxRef}
        className="relative overflow-hidden rounded-[6px] border border-[var(--accent-line)]"
      >
        {/* 배경 지형 — 저작 시점에 구운 정적 SVG. 런타임 타일 호출 없음 */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.background.replace('{skin}', skin)}
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

          {/* 아직 안 달린 구간도 옅게 깔아둔다 — 어디를 도는 코스인지가 먼저다 */}
          <path
            d={data.course}
            fill="none"
            stroke="var(--m-ghost)"
            strokeWidth={4}
            strokeDasharray="3 7"
            strokeLinecap="round"
          />
          {/* 발광 — 선이 잉크가 아니라 빛으로 읽히게 한다 (라이트 스킨에선 opacity 0) */}
          <path className="course-glow" d={data.course} fill="none" strokeLinejoin="round" strokeLinecap="round" style={drawn} />
          <path d={data.course} fill="none" stroke="var(--m-halo)" strokeWidth={12} strokeLinejoin="round" strokeLinecap="round" style={drawn} />
          <path
            ref={pathRef}
            d={data.course}
            fill="none"
            stroke="var(--m-course)"
            strokeWidth={6}
            strokeLinejoin="round"
            strokeLinecap="round"
            style={drawn}
          />
          <path
            d={data.course}
            fill="none"
            stroke="var(--m-trail)"
            strokeWidth={9}
            strokeLinecap="round"
            style={{ strokeDasharray: trailDash }}
          />

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
              <circle cx={m.x} cy={m.y} r={m.kind === 'start' ? 15 : 12} fill="var(--m-mark)" />
              <circle cx={m.x} cy={m.y} r={m.kind === 'start' ? 5 : 4} fill="var(--m-bdot)" />
            </g>
          ))}
        </svg>

        {/* 글자는 HTML 로 — 지도가 줄어도 크기가 유지된다 */}
        {data.landmarks.map((l, i) => (
          <span
            key={`l${i}`}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-semibold tracking-[0.16em]"
            style={{
              left: `${(l.x / vbW) * 100}%`,
              top: `${(l.y / vbH) * 100}%`,
              color: 'var(--m-lm)',
            }}
          >
            {l.name}
          </span>
        ))}
        {data.markers.map((m, i) => (
          <span
            key={`ml${i}`}
            className="pointer-events-none absolute -translate-x-1/2 whitespace-nowrap text-[11px] font-extrabold"
            style={{
              left: `${(m.x / vbW) * 100}%`,
              top: `calc(${(m.y / vbH) * 100}% + 1.1rem)`,
              color: 'var(--m-mklab)',
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
            <span
              className="block h-3.5 w-3.5 rounded-full"
              style={{
                background: 'var(--accent)',
                boxShadow: '0 0 0 3px var(--m-halo, #fff), 0 0 20px 6px var(--accent-line)',
              }}
            />
          </span>
        )}

        <button
          type="button"
          onClick={() => {
            setActive(null);
            setProgress(0);
            run(0);
          }}
          className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          style={{ background: 'var(--m-btnBg)', borderColor: 'var(--m-btnLine)', color: 'var(--m-btnFg)' }}
        >
          <Play className="h-3 w-3" />
          코스 달려보기
        </button>

        <span
          className="pointer-events-none absolute bottom-1 right-2 text-[10px] leading-none opacity-80"
          style={{ color: 'var(--m-lm)' }}
        >
          {data.attribution}
        </span>

        {/* 톤 고르기 — 개발 중에만 뜬다. 배포본에는 없다 */}
        {process.env.NODE_ENV !== 'production' && (data.skins?.length ?? 0) > 1 && (
          <div className="absolute left-2 top-2 flex gap-1">
            {data.skins!.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSkin(s)}
                aria-pressed={skin === s}
                className={`rounded-full border px-2.5 py-1 text-[11px] font-bold backdrop-blur transition ${
                  skin === s ? 'border-[var(--accent)] bg-[var(--accent)] text-white' : ''
                }`}
                style={
                  skin === s
                    ? undefined
                    : { background: 'var(--m-btnBg)', borderColor: 'var(--m-btnLine)', color: 'var(--m-btnFg)' }
                }
              >
                {SKIN_LABEL[s] ?? s}
              </button>
            ))}
          </div>
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
