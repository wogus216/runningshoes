'use client';

import Link from 'next/link';
import { track } from '@/lib/analytics';
import { SectionHead } from './section-head';
import styles from './trust-metrics.module.css';

export type TrustMetricsProps = {
  /** 분석 중인 러닝화 수. getHomeStats()에서 산출한다 — 하드코딩하지 않는다 */
  shoeCount: number;
  /** 최근 데이터 갱신일(ISO). 없으면 갱신 지표를 그리지 않는다 */
  lastUpdated: string | null;
};

/**
 * 데이터 상태. 색은 보조 신호일 뿐이고 텍스트가 항상 함께 있다(스펙 §9·§11).
 * `외부 랩 확인`만 시그널로 강조한다 — 이 사이트가 유일하게 외부 실측을 인용하는 구간이다.
 *
 * ⚠️ 스펙 §5.2 는 6종을 열거하지만 그중 `직접 착화`는 **뺐다.** 이 사이트는 제품을 신어보고
 * 평가하지 않으며(운영자 프로필·About 서술과 일치), 신발 데이터 어디에도 그 상태를 부여한
 * 근거가 없다. 부여할 수 없는 상태를 범례에 세워 두면 없는 데이터 소스를 있다고 알리는 셈이다.
 * → 스펙 §5.2 의 배지 목록을 5종으로 정정할 것.
 */
const BADGES = [
  { label: '공식 정보', tone: 'ok' as const },
  { label: '외부 랩 확인', tone: 'on' as const },
  { label: '리뷰 종합', tone: 'plain' as const },
  { label: '추정치', tone: 'est' as const },
  { label: '갱신 대기', tone: 'est' as const },
];

/**
 * 방법론 요약.
 *
 * 이 사이트는 랩 테스트를 직접 수행하지 않는다. 스펙 §11 의 금지 표현군(실측을 자처하는
 * 문구, 검증을 자처하는 인증 문구 등)을 쓰지 않고, 무엇을 하고 무엇을 하지 않는지 그대로 적는다.
 * 금지어 목록은 스펙 §11 에 있다 — 여기에 옮겨 적으면 금지어 검사 grep 이 이 주석에 걸려
 * 검사가 영영 헛돈다(Task 12 의 면책 문구와 같은 이유).
 */
const METHOD = [
  '제조사 공식 스펙과 국내 출시 정보를 먼저 확인합니다.',
  '외부 전문 랩의 공개 측정치(충격흡수·경도·에너지 리턴 등)를 인용하고, 출처를 항목마다 표시합니다.',
  '국내외 리뷰를 같은 항목으로 정리해 서로 어긋나는 부분을 드러냅니다.',
  '한국 러너 기준(발볼·국내 가격·구매 경로)으로 다시 해석합니다.',
  '측정치가 없는 항목은 추정치로 표시하고, 무엇을 근거로 추정했는지 함께 적습니다.',
];

/** ISO 날짜 → "07.31". 연도는 지표 라벨이 아니라 맥락에서 읽히므로 생략한다. */
function formatUpdated(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return `${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

export function TrustMetrics({ shoeCount, lastUpdated }: TrustMetricsProps) {
  const updated = lastUpdated ? formatUpdated(lastUpdated) : '';

  return (
    <section className={styles.sec}>
      <div className={styles.grid}>
        <div>
          <SectionHead
            eyebrow="WHAT THE NUMBERS COME FROM"
            title={
              <>
                어디서 온 데이터인지
                <br />
                먼저 밝힙니다.
              </>
            }
          />
          <div className={styles.metrics}>
            <div className={styles.met}>
              <p className={`${styles.metV} ${styles.sig}`}>{shoeCount}</p>
              <p className={styles.metL}>분석 중인 러닝화</p>
            </div>
            {updated && (
              <div className={styles.met}>
                <p className={styles.metV}>{updated}</p>
                <p className={styles.metL}>최근 데이터 갱신</p>
              </div>
            )}
            <div className={styles.met}>
              <p className={`${styles.metV} ${styles.word}`}>공개</p>
              <p className={styles.metL}>평가 기준과 출처</p>
            </div>
          </div>
        </div>

        <div>
          <p className={styles.quote}>
            공식 정보와 전문 랩 데이터, 국내외 리뷰를 같은 기준으로 정리합니다. 한국 러너가
            확인해야 할 정보를 분리해 보여드립니다.
          </p>

          <div className={styles.badges}>
            {BADGES.map((b) => (
              <span
                key={b.label}
                className={`${styles.badge} ${b.tone !== 'plain' ? styles[b.tone] : ''}`}
              >
                {b.label}
              </span>
            ))}
          </div>

          <details
            className={styles.method}
            onToggle={(e) => {
              if ((e.currentTarget as HTMLDetailsElement).open) {
                track('home_trust_methodology_open', { section_name: 'trust' });
              }
            }}
          >
            <summary className={styles.methodSummary}>평가 기준과 출처</summary>
            <ul className={styles.methodBody}>
              {METHOD.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <Link className={styles.methodLink} href="/about">
              전체 기준 보기 →
            </Link>
          </details>
        </div>
      </div>
    </section>
  );
}
