'use client';

import Link from 'next/link';
import Image from 'next/image';
import { track } from '@/lib/analytics';
import { PROBLEMS, PROBLEM_DISCLAIMER, type Problem } from '@/lib/home/problems';
import type { ProblemThumb } from '@/lib/home/problem-counts';
import styles from './problem-explorer.module.css';

export type ProblemExplorerProps = {
  /** 고민 slug → /best 매트릭스 결과 수. 서버에서 산출해 넘긴다(getProblemData) */
  counts: Record<string, number>;
  /** 주요 패널 썸네일 3종. 비어 있으면 썸네일 줄을 렌더하지 않는다 */
  leadThumbs?: ProblemThumb[];
};

/** rank → 그리드 영역 클래스. 시안의 lead/mid1/mid2/row1~3 배치를 그대로 따른다. */
const AREA: Record<Problem['rank'], string> = {
  1: styles.lead,
  2: styles.mid1,
  3: styles.mid2,
  4: styles.row1,
  5: styles.row2,
  6: styles.row3,
};

function badge(rank: number) {
  return String(rank).padStart(2, '0');
}

export function ProblemExplorer({ counts, leadThumbs = [] }: ProblemExplorerProps) {
  const send = (p: Problem) =>
    track('home_problem_category_click', {
      section_name: 'problem_explorer',
      item_name: p.id,
      destination_path: `/best/${p.slug}`,
    });

  const [lead, ...rest] = PROBLEMS;

  return (
    <section className={styles.sec} id="problem">
      <div className={styles.secTop}>
        <p className={styles.eyebrow}>START FROM YOUR PROBLEM</p>
        <h2 className={styles.secH}>지금 어떤 신발이 필요하세요?</h2>
        <p className={styles.secP}>
          전문 용어를 몰라도 됩니다. 고민을 고르면 어떤 기준으로 걸렀는지까지 함께 보여드립니다.
        </p>
      </div>

      <div className={styles.prob}>
        {/* 주요 패널만 stretched-link 패턴 — 패널 전체가 목적지로 가되 썸네일은 각 신발
            상세로 따로 빠진다. 중첩 <a> 를 피하는 기존 프로젝트 패턴(shoe-card 와 동일). */}
        <div className={`${styles.item} ${AREA[lead.rank]}`}>
          <p className={styles.n}>
            {badge(lead.rank)} <span className={styles.nText}>/ 가장 많이 찾는 고민</span>
          </p>
          <p className={styles.q}>{lead.question}</p>
          <p className={styles.c}>{lead.leadCriteria ?? lead.criteria}</p>

          {lead.keys && lead.keys.length > 0 && (
            <div className={styles.keys}>
              {lead.keys.map((k) => (
                <span key={k}>{k}</span>
              ))}
            </div>
          )}

          {leadThumbs.length > 0 && (
            <div className={styles.thumbs}>
              {leadThumbs.map((s) => (
                <Link
                  key={s.slug}
                  className={styles.thumb}
                  href={`/shoes/${s.slug}`}
                  onClick={() =>
                    track('home_shoe_detail_click', {
                      section_name: 'problem_explorer',
                      item_name: s.slug,
                      destination_path: `/shoes/${s.slug}`,
                    })
                  }
                >
                  {/* 원본은 정사각(800×800) 제품샷이라 1:1로 예약하고, 표시 크기는 CSS가 잡는다
                      (max-height + width:auto). next.config.js 가 unoptimized:true 라 변환 없이 서빙된다 */}
                  <Image src={s.image} alt={`${s.brand} ${s.name}`} width={100} height={100} />
                  <span>{s.name}</span>
                </Link>
              ))}
            </div>
          )}

          <p className={styles.f}>
            <span>
              <b>{counts[lead.slug] ?? 0}</b>종 정리됨
            </span>
            <Link className={styles.go} href={`/best/${lead.slug}`} onClick={() => send(lead)}>
              입문화 보기 →
            </Link>
          </p>
        </div>

        {rest.map((p) => (
          <Link
            key={p.id}
            className={`${styles.item} ${AREA[p.rank]}`}
            href={`/best/${p.slug}`}
            onClick={() => send(p)}
          >
            <p className={styles.n}>{badge(p.rank)}</p>
            <p className={styles.q}>{p.question}</p>
            <p className={styles.c}>
              {p.criteria}
              {p.note ? ` ${p.note}` : ''}
            </p>
            <p className={styles.f}>
              <span>
                <b>{counts[p.slug] ?? 0}</b>종
              </span>
              <span aria-hidden="true">→</span>
            </p>
          </Link>
        ))}
      </div>

      <p className={styles.disclaim}>{PROBLEM_DISCLAIMER}</p>
    </section>
  );
}
