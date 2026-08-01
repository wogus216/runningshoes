'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { track } from '@/lib/analytics';
import { readResume, clearResume, type ResumeData } from '@/lib/recent';
import styles from './resume-section.module.css';

export type ResumeSectionProps = {
  /** 삭제된 신발을 가리키는 기록을 걸러내기 위한 유효 slug 목록 */
  validSlugs: string[];
  /** 추천 카드 배지에 쓰는 문항 수. 없으면 배지를 그리지 않는다(하드코딩 금지) */
  questionCount?: number;
};

const DAY = 86_400_000;

/** "방금 / N시간 전 / N일 전". 마운트 후에만 계산하므로 하이드레이션 불일치가 없다. */
function ago(at: number): string {
  const diff = Date.now() - at;
  if (diff < 3_600_000) return '방금';
  if (diff < DAY) return `${Math.floor(diff / 3_600_000)}시간 전`;
  return `${Math.floor(diff / DAY)}일 전`;
}

/**
 * 재방문 이어보기.
 *
 * SSG라 서버에서는 기록을 알 수 없다. 마운트 후 localStorage를 읽고, 기록이 하나도 없으면
 * `null`을 반환해 **섹션 자체를 렌더하지 않는다**(스펙 §10 — 빈 상태를 만들지 않는다).
 *
 * 신규 방문자에게는 아무 비용이 없어야 하므로 신발 이름·이미지를 홈 페이로드로 내리지 않는다.
 * 대신 기록 시점에 이름·이미지를 함께 저장해 뒀다(`recent.ts` 참고). 여기서 받는 prop은
 * 유효성 검사에 쓰는 slug 목록뿐이다.
 */
export function ResumeSection({ validSlugs, questionCount }: ResumeSectionProps) {
  const [data, setData] = useState<ResumeData | null>(null);

  useEffect(() => {
    setData(readResume(new Set(validSlugs)));
  }, [validSlugs]);

  if (!data || (!data.shoe && !data.compare && !data.recommend)) return null;

  const { shoe, compare, recommend } = data;

  const send = (item: string, path: string) =>
    track('home_resume_click', {
      section_name: 'resume',
      item_name: item,
      destination_path: path,
    });

  const handleClear = () => {
    clearResume();
    setData(null);
    track('home_resume_clear', { section_name: 'resume' });
  };

  // typedRoutes 는 쿼리가 붙은 문자열 href 를 받지 않는다 — UrlObject 로 넘긴다.
  // 슬러그를 실어 보내야 "비교 이어서 보기"가 실제로 이어진다(시안은 /compare 로만 갔다).
  const compareSlugs = compare ? compare.shoes.map((s) => s.slug).join(',') : '';
  const comparePath = { pathname: '/compare' as const, query: { shoes: compareSlugs } };
  const compareTitle = compare
    ? compare.shoes.slice(0, 2).map((s) => s.name).join(' vs ') +
      (compare.shoes.length > 2 ? ` 외 ${compare.shoes.length - 2}켤레` : '')
    : '';

  return (
    <section className={styles.sec}>
      <div className={styles.top}>
        <div>
          <p className={styles.eyebrow}>CONTINUE</p>
          <h2 className={styles.h}>다시 이어볼까요?</h2>
        </div>
        <button type="button" className={styles.clear} onClick={handleClear}>
          기록 지우기
        </button>
      </div>

      <div className={styles.list}>
        {shoe && (
          <Link
            className={styles.item}
            href={`/shoes/${shoe.slug}`}
            onClick={() => send('recent_shoe', `/shoes/${shoe.slug}`)}
          >
            <span className={styles.thumb}>
              {shoe.image && (
                <Image src={shoe.image} alt="" width={56} height={40} aria-hidden="true" />
              )}
            </span>
            <span>
              <span className={styles.k}>최근 본 신발</span>
              <span className={styles.v}>{shoe.name}</span>
              <span className={styles.x}>
                {ago(shoe.at)} · {shoe.category}
              </span>
            </span>
          </Link>
        )}

        {compare && (
          <Link
            className={styles.item}
            href={comparePath}
            onClick={() => send('recent_compare', `/compare?shoes=${compareSlugs}`)}
          >
            <span className={`${styles.thumb} ${styles.dbl}`}>
              {compare.shoes
                .slice(0, 2)
                .map((s) =>
                  s.image ? (
                    <Image key={s.slug} src={s.image} alt="" width={40} height={30} aria-hidden="true" />
                  ) : null,
                )}
            </span>
            <span>
              <span className={styles.k}>비교하던 신발</span>
              <span className={styles.v}>{compareTitle}</span>
              <span className={styles.x}>비교 이어서 보기</span>
            </span>
          </Link>
        )}

        {recommend && (
          <Link
            className={styles.item}
            href="/recommend"
            onClick={() => send('recent_recommend', '/recommend')}
          >
            <span className={styles.thumb}>
              {questionCount ? (
                <span className={styles.badge}>
                  {questionCount}/{questionCount}
                </span>
              ) : null}
            </span>
            <span>
              <span className={styles.k}>지난 추천 결과</span>
              <span className={styles.v}>{recommend.summary}</span>
              <span className={styles.x}>추천 결과 다시 보기</span>
            </span>
          </Link>
        )}
      </div>
    </section>
  );
}
