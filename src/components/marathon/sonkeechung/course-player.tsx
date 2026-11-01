"use client";

import { Component, type ReactNode, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CourseScene } from "./course-scene";
import {
  COURSE_SECONDS,
  chapterAt,
  currentMarker,
  clamp,
  pointAt,
  routeProgress,
  type CourseData,
} from "./course-model";
import styles from "./course-preview.module.css";

class SceneBoundary extends Component<
  { children: ReactNode },
  { error: boolean }
> {
  state = { error: false };
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    return this.state.error ? (
      <div className={styles.fallback}>
        3D 화면을 실행하지 못했습니다.
        <br />
        <a
          href="https://son.wizrun.com/full"
          target="_blank"
          rel="noopener noreferrer"
        >
          공식 코스 지도 보기 ↗
        </a>
      </div>
    ) : (
      this.props.children
    );
  }
}

function Profile({ data, progress, onSeek }: {
  data: CourseData;
  progress: number;
  onSeek: (progress: number) => void;
}) {
  const width = 800, height = 90, left = 0, right = 0, bottom = 20;
  const plotWidth = width - left - right, plotHeight = height - bottom - 8;
  const values = data.points.filter((_, i) => i % 4 === 0 || i === data.points.length - 1);
  const top = Math.ceil(Math.max(60, ...values.map((p) => p[2])) / 20) * 20;
  const x = (km: number) => left + km / data.routeDistanceKm * plotWidth;
  const y = (m: number) => height - bottom - m / top * plotHeight;
  const line = values.map((p, i) => `${i ? "L" : "M"}${x(p[3]).toFixed(1)},${y(p[2]).toFixed(1)}`).join(" ");
  const current = pointAt(data, progress);
  return (
    <div className={styles.profileControl}>
      <div className={styles.profileHeading}>
        <span>거리별 고도</span>
        <span>약 {current[3].toFixed(1)}km · 고도 약 {Math.round(current[2])}m</span>
      </div>
      <div className={styles.profilePlot}>
      <div className={styles.elevationAxis} aria-hidden="true"><span>{top}m</span><span>{top / 2}m</span><span>0m</span></div>
      <svg viewBox={`0 0 ${width} ${height - bottom}`} preserveAspectRatio="none" className={styles.profile} aria-hidden="true">
        {[0, top / 2, top].map((m) => <g key={m}>
          <line x1={left} x2={width - right} y1={y(m)} y2={y(m)} stroke="#ffffff18" />

        </g>)}

        <path d={`${line} L${x(data.routeDistanceKm)},${height - bottom} L${left},${height - bottom}Z`} fill="rgba(230,197,148,.12)" />
        <path d={line} stroke="#c8ae85" strokeWidth="1.6" fill="none" />
        <line x1={x(current[3])} y1="3" x2={x(current[3])} y2={height - bottom} stroke="#f5e6cc" strokeWidth="1.5" />
        <circle cx={x(current[3])} cy={y(current[2])} r="3.5" fill="#fff0cd" />
      </svg>
      <div className={styles.distanceAxis} aria-hidden="true">{[0, 10, 20, 30, 42.2].map((km) => <span key={km}>{km}km</span>)}</div>
      <input className={styles.profileSeek} type="range" min="0" max="1000" value={Math.round(progress * 1000)}
        aria-label="고도 그래프에서 코스 위치 선택"
        aria-valuetext={`약 ${current[3].toFixed(1)}km, 참고 고도 약 ${Math.round(current[2])}m`}
        onChange={(e) => onSeek(clamp(Number(e.target.value) / 1000))} />
      </div>
    </div>
  );
}

export function CoursePlayer({ seekRequest = null }: {
  seekRequest?: { progress: number; id: number } | null;
}) {
  const [data, setData] = useState<CourseData | null>(null),
    [error, setError] = useState(false);
  const [contextLost, setContextLost] = useState(false);
  const [time, setTime] = useState(0),
    [playing, setPlaying] = useState(false),
    [overview, setOverview] = useState(false);
  const reduced = useRef(false);
  const playhead = useRef(0);
  useEffect(() => {
    playhead.current = time;
  }, [time]);
  useEffect(() => {
    if (!seekRequest || !data) return;
    setTime(0.085 + clamp(seekRequest.progress) * 0.82);
    setPlaying(false);
  }, [seekRequest, data]);
  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const controller = new AbortController();
    fetch("/data/sonkeechung/course.json", { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error("course");
        return r.json();
      })
      .then((d) => {
        setData(d);
        setPlaying(!reduced.current);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setError(true);
      });
    return () => controller.abort();
  }, []);
  useEffect(() => {
    if (!playing) return;
    let id = 0,
      last = performance.now(),
      throttle = 0;
    const tick = (now: number) => {
      const delta = Math.min((now - last) / 1000, 0.1);
      last = now;
      throttle += delta;
      if (throttle >= 1 / 30) {
        const elapsed = throttle;
        throttle = 0;
        const next = Math.min(1, playhead.current + elapsed / COURSE_SECONDS);
        playhead.current = next;
        setTime(next);
        if (next >= 1) setPlaying(false);
      }
      id = requestAnimationFrame(tick);
    };
    const pause = () => {
      if (document.hidden) setPlaying(false);
    };
    document.addEventListener("visibilitychange", pause);
    id = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("visibilitychange", pause);
    };
  }, [playing]);
  if (error)
    return (
      <div className={styles.fallback}>
        코스 데이터를 불러오지 못했습니다.
        <button onClick={() => window.location.reload()}>다시 시도</button>
      </div>
    );
  if (!data)
    return (
      <div className={styles.fallback} role="status">
        임진강의 지형을 불러오는 중…
      </div>
    );
  const progress = routeProgress(time),
    chapter = chapterAt(time * COURSE_SECONDS),
    marker = currentMarker(data, progress),
    current = pointAt(data, progress);
  return (
    <>
      <div className={styles.viewport}>
        {contextLost ? (
          <div className={styles.fallback} style={{ position: "absolute", inset: 0, zIndex: 4, background: "#1b241e" }} role="status">
            <p>3D 화면 연결이 일시적으로 끊겼습니다.</p>
            <button onClick={() => setContextLost(false)}>3D 화면 다시 열기</button>
          </div>
        ) : <SceneBoundary>
          <Canvas
            frameloop="demand"
            onCreated={({ gl }) => {
              gl.domElement.addEventListener("webglcontextlost", (event) => {
                event.preventDefault();
                setPlaying(false);
                setContextLost(true);
              }, { once: true });
            }}
            shadows="soft"
            dpr={[1, 1.5]}
            camera={{ fov: 43, near: 0.05, far: 1000 }}
            gl={{ antialias: true, alpha: false }}
            fallback={
              <div className={styles.fallback}>
                이 브라우저는 3D 화면을 지원하지 않습니다.
              </div>
            }
          >
            <CourseScene data={data} time={time} overview={overview} />
          </Canvas>
        </SceneBoundary>}
        <div className={styles.shade} />
        <div className={styles.sceneHeading}>
          <span>{chapter.label}</span>
          <h2>
            {chapter.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <p>{chapter.body}</p>
        </div>
        <div className={styles.sceneMeta}>
          <span>2026.11.15 · 파주</span>
          <span>높이 {data.verticalScale}× · 위성영상 2025.11</span>
        </div>
        <div className={styles.distance}>
          <strong>{(progress * data.routeDistanceKm).toFixed(1)}</strong>
          <span>km / 참고 경로</span>
          <p className={styles.elevation}>고도 약 <b>{Math.round(current[2])}</b> m</p>
          <span>공개 GPX 참고값</span>
        </div>
      </div>
      <div className={styles.transport}>
        <button
          className={styles.play}
          onClick={() => {
            if (time >= 1) setTime(0);
            setPlaying((p) => !p);
          }}
          aria-label={playing ? "코스 영상 일시정지" : "코스 영상 재생"}
        >
          {playing ? "Ⅱ" : "▶"}
          <span>{playing ? "일시정지" : "재생"}</span>
        </button>
        <label className={styles.scrub}>
          <span className={styles.srOnly}>코스 진행 위치</span>
          <input
            type="range"
            min="0"
            max="1000"
            value={Math.round(time * 1000)}
            aria-valuetext={`참고 경로 약 ${(progress * data.routeDistanceKm).toFixed(1)}km`}
            onChange={(e) => {
              setTime(Number(e.target.value) / 1000);
              setPlaying(false);
            }}
          />
          <span>
            {Math.floor(time * COURSE_SECONDS)
              .toString()
              .padStart(2, "0")}{" "}
            / {COURSE_SECONDS}s
          </span>
        </label>
        <button
          className={styles.mode}
          aria-pressed={overview}
          onClick={() => setOverview((v) => !v)}
        >
          {overview ? "코스 따라가기 ↗" : "전체 조망 ↗"}
        </button>
      </div>
      <div className={styles.routeNotes}>
        <div className={styles.notesHeading}>
          <span>THE ROUTE</span>
          <p>{marker.label}</p>
        </div>
        <div className={styles.stops}>
          {data.markers.map((m, i) => (
            <button
              key={m.id}
              aria-pressed={marker.id === m.id}
              onClick={() => {
                setTime(0.085 + m.at * 0.82);
                setPlaying(false);
              }}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {m.label.replace(" · ", "\n")}
            </button>
          ))}
        </div>
        <Profile data={data} progress={progress} onSeek={(p) => {
          setTime(0.085 + p * 0.82);
          setPlaying(false);
        }} />
        <p className={styles.profileNote}>
          그래프를 드래그하면 해당 위치로 이동합니다. 고도는 공개 GPX 참고값이며 주변 지형의 표고와는 별도 자료입니다. 교량 노면 및 반환 위치 미확정.
        </p>
      </div>
    </>
  );
}
