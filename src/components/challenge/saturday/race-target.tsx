import { DdayCounter } from './d-day-counter';
import { RACE_META, SATURDAY_COPY } from '@/lib/data/challenge/saturday';
import styles from '@/app/(challenge)/saturday/saturday.module.css';

export function RaceTarget() {
  return (
    <section
      className={`${styles.scene} ${styles.race}`}
      data-cinematic-scene="race"
      aria-labelledby="race-title"
    >
      <div className={`${styles.stage} ${styles.raceStage}`}>
          <div className={styles.filmGrain} aria-hidden="true" />
          <div className={styles.raceSlash} aria-hidden="true" />

          <div className={styles.raceTop}>
            <span className={styles.lightKicker}>{SATURDAY_COPY.race.eyebrow}</span>
            {/* 11 / 15가 이미 날짜를 말한다. 영문 날짜 반복은 뺀다 */}
            <p>{RACE_META.place}</p>
          </div>

          <p className={styles.raceDate} aria-label="11월 15일">
            <span>11</span>
            <b aria-hidden="true">/</b>
            <span>15</span>
          </p>

          <div className={styles.raceBottom}>
            <div>
              <span className={styles.dday}>
                <DdayCounter />
              </span>
              <h2 id="race-title">{RACE_META.name}</h2>
            </div>
            <div className={styles.raceCopy}>
              <p>{SATURDAY_COPY.race.hook}</p>
            </div>
          </div>

        <div className={styles.progress} aria-hidden="true">
          <i />
        </div>

        <section className={styles.blackout} aria-label="다음 미션 예고">
          <span className={styles.lightKicker}>첫 번째 이야기</span>
          <p className={styles.blackoutTitle} aria-hidden="true">
            <i>TO BE</i>
            <br />
            <span>CONTINUED</span>
          </p>
          <p className={styles.blackoutEnding}>{SATURDAY_COPY.race.ending}</p>
          <b className={styles.blackoutNext}>{SATURDAY_COPY.race.next}</b>
        </section>
      </div>
    </section>
  );
}
