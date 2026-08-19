import { HeroStill } from './hero-still';
import { RACE_META, SATURDAY_COPY } from '@/lib/data/challenge/saturday';
import styles from '@/app/(challenge)/saturday/saturday.module.css';

export function MissionHero() {
  return (
    // data-beat는 서버에서 렌더하지 않는다. JS 이전 상태의 기본은 완성 포스터다.
    <section
      className={`${styles.scene} ${styles.hero}`}
      data-cinematic-scene="hero"
      aria-labelledby="mission-hero-title"
    >
      <div className={`${styles.stage} ${styles.heroStage}`}>
        <HeroStill />
        <div className={styles.filmGrain} aria-hidden="true" />
        <div className={styles.trackLines} aria-hidden="true" />

        {/* 씬 넘버·촬영 라벨 같은 군더더기는 걷어낸다.
            남길 건 이 이야기가 언제 시작됐는지 한 줄뿐 */}
        <div className={styles.heroLabel}>
          <span>어느 토요일 아침</span>
        </div>

        <div className={styles.heroCopy}>
          <h1 id="mission-hero-title" className={`${styles.heroBeat} ${styles.heroQuestion}`}>
            <span>풀마라톤,</span>
            <span>다 같이 한번</span>
            <span>해볼까?</span>
          </h1>
          <p className={`${styles.heroBeat} ${styles.heroTurn}`}>{SATURDAY_COPY.hero.turn}</p>
          <p className={`${styles.heroBeat} ${styles.heroHook}`}>
            {SATURDAY_COPY.hero.hook}
            <i aria-hidden="true" />
          </p>
          <div className={`${styles.heroBeat} ${styles.heroFinal}`}>
            <p>{SATURDAY_COPY.hero.support}</p>
          </div>
        </div>

        <div className={styles.heroMeta}>
          <span>{RACE_META.dateLabel}</span>
          <span>{RACE_META.name}</span>
          <span>{RACE_META.place}</span>
        </div>
        <div className={styles.scrollCue} aria-hidden="true"><i /> 내려서 보기</div>
        <div className={styles.progress} aria-hidden="true"><i /></div>
      </div>
    </section>
  );
}
