import type { CSSProperties } from 'react';
import { SATURDAY_COPY, SATURDAY_CREW } from '@/lib/data/challenge/saturday';
import styles from '@/app/(challenge)/saturday/saturday.module.css';

// 거리 상수는 한 군데에만 둔다. 리스트 라벨과 합계가 같은 값을 쓴다.
const DISTANCE_KM = { 풀코스: 42.195, '10K': 10 } as const;

export function CrewReveal() {
  const fullCount = SATURDAY_CREW.filter((m) => m.distance === '풀코스').length;
  const tenCount = SATURDAY_CREW.length - fullCount;
  const totalKm = SATURDAY_CREW.reduce((sum, m) => sum + DISTANCE_KM[m.distance], 0);
  const [totalWhole, totalFraction] = totalKm.toFixed(2).split('.');

  // '준비 상태는 제각각. 접수 상태는 전원 완료.' → 두 문장으로. 뒤 문장이 펀치라인이다.
  const statusParts = SATURDAY_COPY.crew.statusLine
    .split(/(?<=\.)\s+/)
    .filter(Boolean);

  return (
    <section
      className={`${styles.scene} ${styles.crew}`}
      data-cinematic-scene="crew"
      aria-labelledby="crew-title"
    >
      <div className={`${styles.stage} ${styles.crewStage}`}>
        <div className={styles.paperGrid} aria-hidden="true" />
        {/* 배경 사진을 걷어냈다(2026-08-19). 두 가지 이유다 —
            하나, 일곱 명을 소개하는 화면의 배경이 AI로 만든 익명의 러너들이었다.
            둘, 바로 다음 섹션이 진짜 사진 벽이라 사진이 두 화면 연속으로 온다.
            크루는 종이면으로 둔다. 히어로(검정) → 단톡(새벽) → 크루(종이) 계단이 그래야 선다. */}
        <div className={styles.crewHeader}>
          <div>
            <span className={styles.darkKicker}>같이 출발하는 사람들</span>
            <h2 id="crew-title">
              <span>이 말에 책임질</span>
              <span>일곱 명.</span>
            </h2>
          </div>
          <p>{SATURDAY_COPY.crew.support}</p>
        </div>

        {/* 장식어 '모였다.'를 뺐다 — 208px로 이 섹션 h2(116px)보다 컸다.
            뜻이 없는 말이 뜻이 있는 말보다 크면 화면이 분위기만 외치고 내용은 속삭인다 */}
        <ol className={styles.crewList} aria-label="쎄러데이 멤버 7명">
          {SATURDAY_CREW.map((member, index) => (
            <li
              className={styles.crewEntry}
              key={member.id}
              style={{ '--entry-index': index } as CSSProperties}
            >
              <span className={styles.crewIndex}>{String(index + 1).padStart(2, '0')}</span>
              <strong>{member.codeName}</strong>
              <span className={styles.crewDistance}>
                <b>{DISTANCE_KM[member.distance]}</b>
                <i>KM</i>
              </span>
            </li>
          ))}
        </ol>

        {/* 이 섹션에서 가장 이 크루다운 문장은 합계가 아니라 농담이다.
            각주 크기 mono에 묻어두지 않고 주연으로 세운다 */}
        <div className={styles.crewFinale}>
          <p className={styles.crewStatus}>
            {/* 정본 문구를 그대로 쓰되 문장 경계에서만 나눠 강조한다 (하드코딩 금지) */}
            {statusParts.map((part, index) => (
              index === statusParts.length - 1
                ? <b key={part}>{part}</b>
                : <span key={part}>{part}</span>
            ))}
          </p>
          {/* 3칸 표를 걷어냈다 — 같은 정보를 세 번 나눠 적으니 아무것도 안 커 보였다.
              그날 일곱 명이 함께 밟는 거리 하나로 세운다. 값은 로스터에서 계산된다. */}
          <div className={styles.totals}>
            <p className={styles.totalKm}>
              <strong>{totalWhole}</strong>
              <em>.{totalFraction}</em>
              <i>KM</i>
            </p>
            <p className={styles.totalNote}>
              그날 일곱 명이 함께 밟는 거리
              <span>
                42.195 KM × {fullCount}
                <b> · </b>
                10 KM × {tenCount}
              </span>
            </p>
          </div>
        </div>

        <div className={`${styles.progress} ${styles.progressDark}`} aria-hidden="true"><i /></div>
      </div>
    </section>
  );
}
