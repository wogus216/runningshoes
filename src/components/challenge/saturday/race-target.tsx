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
              {/* 예고는 남기되 무대는 없앴다. 전에는 이 한 줄을 위해 화면 하나를 더 쓰면서
                  'TO BE CONTINUED'를 210px로 세웠고, 그 결과 페이지의 마지막 인상이
                  대회 날짜가 아니라 장식 문구였다. 이제 마지막에 남는 건 11 / 15 다 */}
              <b className={styles.raceNext}>{SATURDAY_COPY.race.next}</b>
            </div>
          </div>

        <div className={styles.progress} aria-hidden="true">
          <i />
        </div>
      </div>
    </section>
  );
}
