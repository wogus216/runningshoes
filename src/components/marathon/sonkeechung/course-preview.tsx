"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { RacePreparation } from "./race-preparation";
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
  const [seekRequest, setSeekRequest] = useState<{ progress: number; id: number } | null>(null);
  return (
    <article className={styles.experience}>
      <header className={styles.header}>
        <Link href="/marathon/sonkeechung-peace-marathon-2026">
          ← 대회 안내
        </Link>
        <span>2026 손기정평화마라톤 · 풀코스 미리보기</span>
      </header>
      <section className={styles.memorialHero} aria-label="손기정 선생을 기억하며">
        <div className={styles.memorialCopy}>
          <h1>
            <span>손기정</span>
            평화마라톤
          </h1>
          <p className={styles.memorialLead}>
            그 이름을 기억하며,<br />
            임진각에서 다시 달리다.
          </p>
          <p className={styles.memorialDescription}>
            나라를 잃었던 1936년,<br />
            베를린에서 올림픽 신기록으로 우승한 손기정.<br />
            90년이 지난 오늘, 그의 이름을 떠올리며<br />
            우리가 달릴 42.195km를 미리 봅니다.
          </p>
          <a className={styles.courseEntry} href="#course-introduction">
            임진각 코스 미리보기 <ArrowDown size={16} aria-hidden="true" />
          </a>
          <div className={styles.heroDate}>
            <time dateTime="2026-11-15T10:00:00+09:00">2026.11.15 일요일 · 10:00</time>
            <span>파주 임진각 · 풀코스 42.195km</span>
          </div>
        </div>
        <figure className={styles.archivePortrait}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/marathon/sonkeechung-peace-marathon-2026/sohn-1936-ceremony.webp"
            alt="1936년 베를린 올림픽 시상식에서 월계관을 쓰고 기념수를 든 손기정 선생"
            width="1000"
            height="1447"
            fetchPriority="high"
          />
          <figcaption>
            <span>손기정 孫基禎 · 1912–2002</span>
            <a href="https://commons.wikimedia.org/wiki/File:Sohn_Kee-chung_(Kitei_Son)_Medal_Ceremony_1936_Summer_Olympics.jpg" target="_blank" rel="noopener noreferrer">1936 베를린 · 기록 사진 ↗</a>
          </figcaption>
        </figure>
      </section>
      <section className={styles.remembrance} aria-labelledby="remembrance-title">
        <div className={styles.remembranceIntro}>
          <h2 id="remembrance-title">기록 너머,<br />우리가 기억할 이름.</h2>
          <p>11월 15일은 손기정 선생이 세상을 떠난 날입니다.<br />그날, 우리는 임진각에서 그의 이름을 기억하며 달립니다.</p>
        </div>
        <ol className={styles.memoryTimeline}>
          <li>
            <time dateTime="1936-08-09">1936.08.09</time>
            <h3>베를린의 손기정</h3>
            <p>2시간 29분 19초 2.<br />올림픽 신기록과 함께 마라톤 우승.</p>
            <a href="https://digital.la84.org/digital/collection/p17103coll8/id/15240/" target="_blank" rel="noopener noreferrer">올림픽 공식 기록 ↗</a>
          </li>
          <li>
            <time dateTime="2002-11-15">2002.11.15</time>
            <h3>오래 기억할 이름</h3>
            <p>손기정 선생 타계.<br />11월 15일, 선생을 떠올립니다.</p>
            <a href="https://db.history.go.kr/id/tcct_2002_11_15_0060" target="_blank" rel="noopener noreferrer">국사편찬위원회 기록 ↗</a>
          </li>
          <li>
            <time dateTime="2026-11-15">2026.11.15</time>
            <h3>임진각의 우리</h3>
            <p>손기정평화마라톤.<br />이제, 우리가 달릴 길을 살펴봅니다.</p>
            <a href="https://son.wizrun.com/" target="_blank" rel="noopener noreferrer">대회 공식 안내 ↗</a>
          </li>
        </ol>
        <p className={styles.archiveContext}>사진은 일제강점기에 일본 대표로 출전했던 당시의 기록입니다. 사진 속 인물·복장을 수정하지 않았습니다.</p>
      </section>
      <div id="course-introduction" className={styles.courseIntroduction}>
        <h2>기억을 품고,<br />평화의 길 42.195km.</h2>
        <p>임진각에서 출발해 통일대교를 건너 다시 임진각으로.<br />두 번의 반환과 돌아오는 길을 거리·고도와 함께 확인하세요.</p>
      </div>
      <ol className={styles.quickNotes} aria-label="출발 전 확인할 세 가지">
        <li><strong>반환은 두 번</strong><span>도라산역 방면 → 리비삼거리 방면</span></li>
        <li><strong>돌아오는 길도 확인</strong><span>여우고개·마정교차로를 지나 임진각으로</span></li>
        <li><strong>내 위치의 고도 보기</strong><span>아래 그래프를 움직여 구간별 참고 고도 확인</span></li>
      </ol>
      <section id="course-stage" className={styles.stage} aria-label="손기정 풀코스 3D 미리보기">
        {started ? (
          <Player seekRequest={seekRequest} />
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
              임진각, 평화의 길을 따라<small>손기정평화마라톤 3D 코스 시작 · 42초</small>
            </span>
          </button>
        )}
      </section>
      <RacePreparation onSeek={(progress) => {
        setStarted(true);
        setSeekRequest((previous) => ({ progress, id: (previous?.id ?? 0) + 1 }));
        document.getElementById("course-stage")?.scrollIntoView({ block: "start" });
      }} />
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
            확정되지 않았습니다. 거리·고도 흐름은 참고용이며 주변 지형은 높이 과장 없이 표현했습니다.
          </p>
          <p>러닝의 모든것이 제작한 비공식 코스 미리보기입니다. 손기정 선생의 생애·기록은 위의 역사 자료를 참고했으며, 소개 문구는 편집 문구입니다. 기록 사진: 1936년 베를린 올림픽 현장 언론 촬영, Wikimedia Commons 공개 도메인 표기 자료. WebP 형식으로 변환했습니다.</p>
          <p>
            주변 배치는 2025년 11월 12일 촬영 Sentinel-2 위성영상(약 10m 해상도), Copernicus DEM GLO-30 지형과 OpenStreetMap 건물·도로 자료를 사용했습니다. 건물 높이는 대부분 추정값이며 외벽·교량은 단순화했습니다. 대회 당일 현장을 촬영한 자료는 아닙니다.
          </p>
          <p>produced using Copernicus WorldDEM-30 © DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018 provided under COPERNICUS by the European Union and ESA; all rights reserved</p>
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
              href="https://registry.opendata.aws/copernicus-dem/"
              target="_blank"
              rel="noopener noreferrer"
            >
              지형 데이터 ↗
            </a>
            <a href="https://registry.opendata.aws/sentinel-2-l2a-cogs/" target="_blank" rel="noopener noreferrer">
              위성영상 · Copernicus Sentinel (2025) ↗
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
