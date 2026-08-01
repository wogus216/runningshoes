'use client';

import Link from 'next/link';
import { track } from '@/lib/analytics';
import styles from './final-cta.module.css';

export type FinalCTAProps = {
  questionCount: number;
  minutes: number;
  shoeCount: number;
  categoryCount: number;
  brandCount: number;
  gelCount: number;
  /** "07.31" 형식으로 이미 포맷된 갱신일. 없으면 지표를 하나 줄인다 */
  updatedLabel?: string;
};

/**
 * 마지막 CTA 밴드.
 *
 * 페이지에서 유일한 다크 영역이고, 오렌지 솔리드 면 2곳 중 하나다(스펙 §3).
 * 이탈 직전에 순회 경로를 한 번 더 여는 게 목적이라 추천·인덱스·비교 세 갈래와
 * 브랜드·젤 허브 링크를 함께 둔다.
 */
export function FinalCTA({
  questionCount,
  minutes,
  shoeCount,
  categoryCount,
  brandCount,
  gelCount,
  updatedLabel,
}: FinalCTAProps) {
  const go = (name: string, path: string) =>
    track(name === 'recommend' ? 'home_recommend_start' : 'home_compare_click', {
      section_name: 'final_cta',
      item_name: name,
      destination_path: path,
    });

  return (
    <section className={styles.final}>
      <div className={styles.track} aria-hidden="true">
        <span className={styles.lane} />
        <span className={styles.lane} />
        <span className={styles.lane} />
        <span className={styles.lane} />
        <span className={styles.lane} />
      </div>

      <div className={styles.in}>
        <div>
          <h2 className={styles.h}>
            수많은 러닝화 중
            <br />
            내게 맞는 선택만 남겨보세요.
          </h2>
          <p className={styles.s}>
            약 {minutes}분 · {questionCount}문항 · 로그인 없이
          </p>
        </div>
        <div className={styles.actions}>
          <Link className={styles.btn} href="/recommend" onClick={() => go('recommend', '/recommend')}>
            {questionCount}문항 맞춤 추천 시작 <span aria-hidden="true">→</span>
          </Link>
          <a className={styles.alt} href="#shoe-index">
            전체 러닝화 보기
          </a>
        </div>
      </div>

      <div className={styles.routesWrap}>
        <div className={styles.routes}>
          <Link className={styles.fr} href="/recommend" onClick={() => go('recommend', '/recommend')}>
            <span className={styles.frN}>01</span>
            <span className={styles.frT}>맞춤 추천</span>
            <span className={styles.frA} aria-hidden="true">→</span>
            <span className={styles.frD}>
              {questionCount}문항으로 역할이 다른 3켤레를 받습니다
            </span>
          </Link>
          <a className={styles.fr} href="#shoe-index">
            <span className={styles.frN}>02</span>
            <span className={styles.frT}>러닝화 인덱스</span>
            <span className={styles.frA} aria-hidden="true">→</span>
            <span className={styles.frD}>{shoeCount}종을 같은 기준으로 놓고 좁혀봅니다</span>
          </a>
          <Link className={styles.fr} href="/compare" onClick={() => go('compare', '/compare')}>
            <span className={styles.frN}>03</span>
            <span className={styles.frT}>직접 비교</span>
            <span className={styles.frA} aria-hidden="true">→</span>
            <span className={styles.frD}>후보를 나란히 놓고 수치를 맞대봅니다</span>
          </Link>
        </div>

        <p className={styles.frMore}>
          <Link href="/brands">
            브랜드별 보기 <span className={styles.frmN}>{brandCount}</span>
          </Link>
          <Link href="/gels">
            에너지 젤 <span className={styles.frmN}>{gelCount}</span>
          </Link>
        </p>
      </div>

      <div className={styles.foot}>
        <div>
          <p className={styles.fsV}>{shoeCount}</p>
          <p className={styles.fsL}>정리된 러닝화</p>
        </div>
        <div>
          <p className={styles.fsV}>{categoryCount}</p>
          <p className={styles.fsL}>카테고리</p>
        </div>
        {updatedLabel && (
          <div>
            <p className={styles.fsV}>{updatedLabel}</p>
            <p className={styles.fsL}>최근 갱신</p>
          </div>
        )}
        <div>
          <p className={`${styles.fsV} ${styles.word}`}>공개</p>
          <p className={styles.fsL}>평가 기준과 출처</p>
        </div>
      </div>
    </section>
  );
}
