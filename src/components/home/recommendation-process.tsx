import { SectionHead } from './section-head';
import styles from './recommendation-process.module.css';

export type RecommendationProcessProps = {
  /** 설문 문항 수. getHomeStats()에서 산출한다 — 화면에 하드코딩하지 않는다 */
  questionCount: number;
  /** 예상 소요 시간(분) */
  minutes: number;
};

const STEPS = [
  '러닝 경험과 주간 거리를 확인합니다.',
  '발볼과 신발에서 불편했던 부분을 반영합니다.',
  '러닝 목적과 예산에 맞춰 후보를 줄입니다.',
];

/** 한 켤레만 던지지 않는다 — 역할이 다른 셋을 놓고 고르게 한다. */
const ROLES = [
  { badge: 'BEST MATCH', title: '가장 잘 맞는 선택', desc: '발볼·러닝 목적·사용 거리의 균형이 가장 좋은 모델', lead: true },
  { badge: 'COMFORT', title: '더 편안한 선택', desc: '쿠션과 안정성을 우선할 때 적합한 모델', lead: false },
  { badge: 'VALUE', title: '더 경제적인 선택', desc: '예산 안에서 조건을 가장 많이 충족하는 모델', lead: false },
];

/**
 * 결과에 붙는 적합도 예시.
 *
 * 검증되지 않은 종합점수(예: "92점")를 쓰지 않는다(스펙 §11). 항목별 등급으로 나누고
 * 막대는 보조 신호로만 둔다 — 등급 텍스트가 항상 함께 있어 색·길이만으로 읽히지 않는다.
 */
const FITS = [
  { key: '발볼 적합도', width: 92, grade: '매우 높음', mid: false },
  { key: '러닝 목적', width: 74, grade: '높음', mid: false },
  { key: '예산 적합도', width: 50, grade: '보통', mid: true },
  { key: '국내 구매', width: 95, grade: '매우 높음', mid: false },
];

export function RecommendationProcess({ questionCount, minutes }: RecommendationProcessProps) {
  return (
    <section className={styles.sec}>
      <SectionHead
        eyebrow="HOW IT WORKS"
        title={`약 ${minutes}분, ${questionCount}문항이면 충분합니다.`}
        lead="한 켤레만 고르라고 하지 않습니다. 역할이 다른 세 가지를 놓고 비교하실 수 있게 정리합니다."
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
        <p className={styles.fitsH}>결과에 붙는 적합도 — 종합점수 대신 항목별로</p>
        {FITS.map((f) => (
          <div key={f.key} className={styles.fitRow}>
            <span className={styles.fitK}>{f.key}</span>
            <span className={`${styles.fitBar} ${f.mid ? styles.mid : ''}`} aria-hidden="true">
              <i style={{ width: `${f.width}%` }} />
            </span>
            <span className={styles.fitV}>{f.grade}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
