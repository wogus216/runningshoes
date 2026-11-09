import { SectionHead } from './section-head';
import sectionStyles from './home-section.module.css';
import styles from './recommendation-process.module.css';

export type RecommendationProcessProps = {
  /** 설문 문항 수. getHomeStats()에서 산출한다 — 화면에 하드코딩하지 않는다 */
  questionCount: number;
  /** 예상 소요 시간(분) */
  minutes: number;
};

const STEPS = [
  '러닝 경험과 주간 거리를 확인합니다.',
  '선택한 발볼 분류와 폭 옵션 정보를 비교합니다.',
  '러닝 목적과 예산에 맞춰 후보를 줄입니다.',
];

const ROLES = [
  { badge: 'PURPOSE', title: '러닝 용도', desc: '주로 달릴 노면과 훈련 목적에 맞는 후보 비교', lead: true },
  { badge: 'FIT', title: '착화 확인', desc: '너비 분류와 폭 옵션을 참고하고 실제 착화로 확인', lead: false },
  { badge: 'BUDGET', title: '예산 상한', desc: '확인된 한국 정가가 선택한 예산 안에 있는지 확인', lead: false },
];

export function RecommendationProcess({ questionCount, minutes }: RecommendationProcessProps) {
  return (
    <section className={styles.sec}>
      <div className={sectionStyles.wrap}>
        <SectionHead
          eyebrow="HOW IT WORKS"
          title={`약 ${minutes}분, ${questionCount}문항이면 충분합니다.`}
          lead="러닝 용도와 예산으로 후보를 좁히고, 추천 이유와 개별 스펙을 비교하세요."
        />

        <div className={styles.steps}>
          {STEPS.map((t, i) => (
            <div key={t} className={styles.step}>
              <p className={styles.stepN}>{String(i + 1).padStart(2, '0')}</p>
              <p className={styles.stepT}>{t}</p>
            </div>
          ))}
        </div>

        <div className={styles.roles}>
          {ROLES.map((r) => (
            <div key={r.badge} className={`${styles.role} ${r.lead ? styles.lead : ''}`}>
              <span className={styles.roleB}>{r.badge}</span>
              <p className={styles.roleT}>{r.title}</p>
              <p className={styles.roleD}>{r.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.fits}>
          <p className={styles.fitsH}>추천 점수는 후보 사이의 상대 비교입니다.</p>
          <p className={styles.roleD}>개인의 착화감이나 치료·부상 예방 효과를 보장하지 않습니다. 표시한 이유와 실제 착화를 함께 확인하세요.</p>
        </div>
      </div>
    </section>
  );
}
