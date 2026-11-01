"use client";

import { Component, type ReactNode, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { CourseScene } from "./course-scene";
import {
  COURSE_SECONDS,
  chapterAt,
  currentMarker,
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

function Profile({ data, progress }: { data: CourseData; progress: number }) {
  const width = 800,
    height = 62,
    pad = 5;
  const values = data.points.filter((_, i) => i % 4 === 0);
  const top = Math.max(80, ...values.map((p) => p[2]));
  const line = values
    .map(
      (p, i) =>
        `${i ? "L" : "M"}${((p[3] / data.routeDistanceKm) * width).toFixed(1)},${(height - pad - (p[2] / top) * (height - pad * 2)).toFixed(1)}`,
    )
    .join(" ");
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={styles.profile}
      role="img"
      aria-label="공개 GPX 기준 참고용 고도 흐름"
    >
      <path
        d={`${line} L${width},${height} L0,${height}Z`}
        fill="rgba(230,197,148,.09)"
      />
      <path d={line} stroke="#c8ae85" strokeWidth="1.4" fill="none" />
      <line
        x1={progress * width}
        y1="0"
        x2={progress * width}
        y2={height}
        stroke="#f5e6cc"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function CoursePlayer() {
  const [data, setData] = useState<CourseData | null>(null),
    [error, setError] = useState(false);
  const [time, setTime] = useState(0),
    [playing, setPlaying] = useState(false),
    [overview, setOverview] = useState(false);
  const reduced = useRef(false);
  const playhead = useRef(0);
  useEffect(() => {
    playhead.current = time;
  }, [time]);
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
    marker = currentMarker(data, progress);
  return (
    <>
      <div className={styles.viewport}>
        <SceneBoundary>
          <Canvas
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
        </SceneBoundary>
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
          <span>지형 높이 1.8× · 복원 경로</span>
        </div>
        <div className={styles.distance}>
          <strong>{(progress * data.routeDistanceKm).toFixed(1)}</strong>
          <span>km / 참고 경로</span>
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
        <Profile data={data} progress={progress} />
        <p className={styles.profileNote}>
          공개 GPX의 고도 흐름 · 교량 노면 및 반환 위치 미확정 · 실제 레이스
          안내 우선
        </p>
      </div>
    </>
  );
}
