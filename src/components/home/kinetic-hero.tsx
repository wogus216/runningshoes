'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { track } from '@/lib/analytics';
import { HeroSilhouette, HeroSilhouetteDefs, HeroFootFigure } from './hero-silhouette';
import styles from './kinetic-hero.module.css';

const MOTION_KEY = 'arb:hero-played';

/**
 * 히어로 자동 연출은 **세션당 1회**다. 홈은 1인당 3~4회 경유하는 순회 허브라
 * 매번 재생하면 방해가 된다(스펙 §2-7).
 *
 * 재생하지 않기로 결정하면 아무것도 하지 않는다 — CSS 기본값이 이미 최종 장면이라
 * 모션 없이도 라벨·실루엣·발 윤곽이 그대로 보인다.
 */
function useHeroMotion() {
  const ref = useRef<HTMLElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let played = false;
    try {
      played = sessionStorage.getItem(MOTION_KEY) === '1';
    } catch {
      /* 사파리 프라이빗 모드 등 sessionStorage 차단 환경 — 재생하되 기록만 못 한다 */
    }
    if (reduce || played) return;

    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setPlay(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPlay(true);
          try {
            sessionStorage.setItem(MOTION_KEY, '1');
          } catch {
            /* noop */
          }
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, play };
}

/** 잔류 라벨 4개 — 최종 장면까지 남는다. 실측 수치가 아니라 기준 축의 예시 표기다. */
const KEEP_LABELS = [
  { text: '249g', top: '23%', dx: '-170px', dy: '52px', d: '.03s' },
  { text: '8mm DROP', top: '42%', dx: '-240px', dy: '-40px', d: '.09s' },
  { text: 'WIDE 76mm', top: '61%', dx: '-200px', dy: '96px', d: '.15s' },
  { text: 'DAILY', top: '80%', dx: '-280px', dy: '-70px', d: '.21s' },
];

/** 소멸 라벨 4개 — 정렬 후 사라진다. 모바일에서는 렌더하지 않는다. */
const DROP_LABELS = [
  { text: '278g', left: '26%', top: '21%', dx: '-150px', dy: '130px', d: '.06s' },
  { text: '5mm DROP', left: '29%', top: '40%', dx: '-190px', dy: '-118px', d: '.12s' },
  { text: 'STANDARD', left: '27%', top: '59%', dx: '-260px', dy: '44px', d: '.18s' },
  { text: 'RACING', left: '24%', top: '78%', dx: '-210px', dy: '-150px', d: '.24s' },
];

/** 제품명 라벨 — 실존 모델만 쓴다(전부 DB 확인됨). 정렬 장면에서 사라진다. */
const NAME_LABELS = [
  { text: 'NOVABLAST 6', left: '8%', top: '4%', d: '0s' },
  { text: 'PEGASUS 42', left: '54%', top: '12%', d: '.05s' },
  { text: 'SC ELITE V5', left: '20%', top: '92%', d: '.1s' },
  { text: 'GEL-KAYANO 33', left: '62%', top: '78%', d: '.15s' },
];

const RAILS = [
  { tag: 'WEIGHT', top: '26%', tagTop: '24%', d: '.04s' },
  { tag: 'DROP', top: '45%', tagTop: '43%', d: '.11s' },
  { tag: 'FIT', top: '64%', tagTop: '62%', d: '.18s' },
  { tag: 'USE', top: '83%', tagTop: '81%', d: '.25s' },
];

const STREAKS = [
  { right: '64%', top: '59%', width: '24%', d: '.02s' },
  { right: '69%', top: '66%', width: '17%', d: '.09s' },
  { right: '63%', top: '73%', width: '29%', d: '.16s' },
];

export function KineticHero() {
  const { ref, play } = useHeroMotion();

  const handleRecommendClick = () => {
    track('home_recommend_start', {
      section_name: 'hero',
      destination_path: '/recommend',
      device_type: window.matchMedia('(max-width: 900px)').matches ? 'mobile' : 'desktop',
    });
  };

  return (
    <section ref={ref} className={`${styles.hero} ${play ? styles.run : ''}`}>
      <div className={styles.heroIn}>
        <div>
          <p className={styles.hKicker}>KOREAN RUNNER FIT INDEX</p>
          <h1 className={styles.hTitle}>
            감으로 고르지
            <br />
            <em>않는다.</em>
          </h1>
          <p className={styles.hSub}>
            발볼, 국내 출시, 러닝 목적까지.
            <br />
            해외 평가를 한국 러너의 기준으로 다시 봅니다.
          </p>
          <Link href="/recommend" className={styles.hCta} onClick={handleRecommendClick}>
            약 1분 · 9문항 맞춤 추천 <span className={styles.arw}>→</span>
          </Link>
          <p className={styles.hMeta}>러닝 경험 · 주간 거리 · 발볼 · 러닝 목적 · 예산</p>
          <br />
          <a className={styles.hAlt} href="#problem">
            고민별로 찾아보기
          </a>
        </div>

        <div className={styles.viz} aria-hidden="true">
          <div className={styles.track}>
            <span className={styles.lane} />
            <span className={styles.lane} />
            <span className={styles.lane} />
            <span className={styles.lane} />
            <span className={styles.lane} />
          </div>

          <span className={styles.startline} />
          <span className={styles.startlineTag}>START</span>

          {/* 속도선 — 실루엣 힐 뒤쪽에서 왼쪽으로 뻗는다 */}
          {STREAKS.map((s, i) => (
            <span
              key={i}
              className={styles.streak}
              style={{ right: s.right, top: s.top, width: s.width, '--d': s.d } as CSSProperties}
            />
          ))}

          {/* 기울어진 데이터 좌표계 — 기준선과 라벨이 함께 산다 */}
          <div className={styles.rig}>
            {RAILS.map((r) => (
              <span key={r.tag} className={styles.rail} style={{ top: r.top, '--d': r.d } as CSSProperties} />
            ))}
            {RAILS.map((r) => (
              <span
                key={r.tag}
                className={styles.railTag}
                style={{ top: r.tagTop, '--d': r.d } as CSSProperties}
              >
                {r.tag}
              </span>
            ))}

            {NAME_LABELS.map((l) => (
              <span
                key={l.text}
                className={`${styles.lab} ${styles.name}`}
                style={{ left: l.left, top: l.top, '--d': l.d } as CSSProperties}
              >
                {l.text}
              </span>
            ))}

            {KEEP_LABELS.map((l) => (
              <span
                key={l.text}
                className={`${styles.lab} ${styles.data} ${styles.keep}`}
                style={
                  { left: '7%', top: l.top, '--dx': l.dx, '--dy': l.dy, '--d': l.d } as CSSProperties
                }
              >
                {l.text}
              </span>
            ))}

            {DROP_LABELS.map((l) => (
              <span
                key={l.text}
                className={`${styles.lab} ${styles.data} ${styles.drop}`}
                style={
                  { left: l.left, top: l.top, '--dx': l.dx, '--dy': l.dy, '--d': l.d } as CSSProperties
                }
              >
                {l.text}
              </span>
            ))}
          </div>

          {/* 러닝화 와이어프레임 — 중립 SVG 실루엣. 특정 모델을 trace하지 않았다.
              고스트(첫 프레임부터 .12) 위에 샤프(왼→오른 와이프)를 겹친다. */}
          <div className={styles.figWrap}>
            <HeroSilhouetteDefs />
            <HeroSilhouette layer="ghost" className={`${styles.sil} ${styles.silGhost}`} />
            <HeroSilhouette layer="sharp" className={`${styles.sil} ${styles.silSharp}`} />
            <HeroFootFigure
              className={styles.fig}
              classNames={{ fit: styles.figFit, foot: styles.figFoot, tick: styles.figTick }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
