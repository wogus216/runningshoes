"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import styles from "./course-preview.module.css";

const Player = dynamic(
  () => import("./course-player").then((m) => m.CoursePlayer),
  {
    ssr: false,
    loading: () => (
      <div className={styles.fallback}>3D 장면을 준비하는 중…</div>
    ),
  },
);

export function SonkeechungPreview() {
  const [started, setStarted] = useState(false);
  return (
    <article className={styles.experience}>
      <header className={styles.header}>
        <Link href="/marathon/sonkeechung-peace-marathon-2026">
          ← 대회 안내
        </Link>
        <span>ALLRUNABOUT / COURSE FILM 01</span>
      </header>
      <div className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>SON KEE CHUNG PEACE MARATHON</p>
          <h1>
            그날의 길을,
            <br />
            먼저 달리다.
          </h1>
          <p className={styles.subhead}>
            임진각에서 시작해, 두 번의 반환을 지나 다시 임진각으로.
          </p>
        </div>
        <div className={styles.raceNumber}>
          <strong>42.195</strong>
          <span>FULL MARATHON / KM</span>
          <p>2026.11.15 SUN · 10:00</p>
        </div>
      </div>
      <section className={styles.stage} aria-label="손기정 풀코스 3D 미리보기">
        {started ? (
          <Player />
        ) : (
          <button className={styles.launch} onClick={() => setStarted(true)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/marathon/sonkeechung-peace-marathon-2026/course-preview.webp"
              alt="임진강과 지형 위에 손기정마라톤 복원 코스를 표시한 3D 조망"
              width="1600"
              height="1000"
            />
            <div className={styles.posterShade} />
            <span className={styles.launchIcon}>▶</span>
            <span className={styles.launchCopy}>
              길을 따라가 볼까요?<small>3D 코스 미리보기 시작 · 42초</small>
            </span>
          </button>
        )}
      </section>
      <footer className={styles.sources}>
        <div>
          <span>ABOUT THIS PREVIEW</span>
          <h2>
            실제 지형 위에,
            <br />
            참고 경로를 그렸습니다.
          </h2>
        </div>
        <div>
          <p>
            주최 측 코스 안내와 개인 제작 GPX를 대조해 만든 3D 미리보기입니다.
            공식 측량·인증 경로가 아니며, 반환점·통제 차로와 교량의 노면 높이는
            확정되지 않았습니다. 거리·고도 흐름은 참고용이고 지형 높이는 1.8배로
            표현했습니다.
          </p>
          <p>
            지형은 Mapzen / USGS SRTM 자료를 사용하고, 비정상적인 격자값을 주변
            값으로 보정했습니다. 주변 모델과 색감은 시각화 표현이며 실제 현장의
            모습과 다를 수 있습니다.
          </p>
          <div className={styles.sourceLinks}>
            <a
              href="https://son.wizrun.com/full"
              target="_blank"
              rel="noopener noreferrer"
            >
              공식 코스 ↗
            </a>
            <a
              href="https://www.runruun.com/posts/108/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GPX 제작·분석: RUNRUUN ↗
            </a>
            <a
              href="https://registry.opendata.aws/terrain-tiles/"
              target="_blank"
              rel="noopener noreferrer"
            >
              지형 데이터 ↗
            </a>
            <a
              href="https://www.openstreetmap.org/copyright"
              target="_blank"
              rel="noopener noreferrer"
            >
              © OpenStreetMap contributors ↗
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
