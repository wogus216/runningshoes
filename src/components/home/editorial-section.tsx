'use client';

import Link from 'next/link';
import Image from 'next/image';
import { track } from '@/lib/analytics';
import type { BlogCardMeta } from '@/types/blog';
import { SectionHead } from './section-head';
import sectionStyles from './home-section.module.css';
import styles from './editorial-section.module.css';

export type EditorialSectionProps = {
  /** 대표 글 — 큰 비주얼 + 헤드라인 */
  lead: BlogCardMeta;
  /** 목록 글. 대표 글은 제외한 상태로 넘긴다 */
  items: BlogCardMeta[];
};

/** "2026-07-29" → "2026.07.29" */
function dot(iso: string): string {
  return iso.slice(0, 10).replace(/-/g, '.');
}

function minutes(readingTime?: number | string): string {
  if (typeof readingTime === 'number') return `${readingTime}분`;
  if (typeof readingTime === 'string' && readingTime) return readingTime.replace(/\s*min.*/i, '분');
  return '';
}

export function EditorialSection({ lead, items }: EditorialSectionProps) {
  const send = (slug: string) =>
    track('home_blog_click', {
      section_name: 'editorial',
      item_name: slug,
      destination_path: `/blog/${slug}`,
    });

  return (
    <section className={styles.sec}>
      <div className={sectionStyles.wrap}>
        <SectionHead
          eyebrow="BEYOND THE NUMBERS"
          title="숫자가 말해주지 않는 것"
          lead="스펙표로는 안 보이는 판단들. 세대교체에서 무엇이 사라졌는지, 관행처럼 도는 숫자의 출처가 어디인지 짚습니다."
        />

        <div className={styles.ed}>
          <Link href={`/blog/${lead.slug}`} onClick={() => send(lead.slug)}>
            {lead.thumbnail ? (
              <Image
                className={styles.leadImg}
                src={lead.thumbnail}
                alt=""
                width={720}
                height={480}
                aria-hidden="true"
              />
            ) : (
              <span className={styles.leadBlank} aria-hidden="true" />
            )}
            <p className={styles.meta}>
              <span className={styles.cat}>{lead.category?.toUpperCase()}</span>
              <span>{dot(lead.publishedAt)}</span>
              <span>{minutes(lead.readingTime)}</span>
            </p>
            <h3 className={styles.leadT}>{lead.title}</h3>
            <p className={styles.leadX}>{lead.description}</p>
            <p className={styles.by}>{lead.author}</p>
          </Link>

          <div className={styles.list}>
            {items.map((p) => (
              <Link
                key={p.slug}
                className={styles.item}
                href={`/blog/${p.slug}`}
                onClick={() => send(p.slug)}
              >
                <p className={styles.itemM}>
                  <span className={styles.cat}>{p.category?.toUpperCase()}</span>
                  <span>{minutes(p.readingTime)}</span>
                </p>
                <p className={styles.itemT}>{p.title}</p>
              </Link>
            ))}

            <Link
              className={`${styles.item} ${styles.more}`}
              href="/blog"
              onClick={() =>
                track('home_blog_click', {
                  section_name: 'editorial',
                  item_name: 'blog_index',
                  destination_path: '/blog',
                })
              }
            >
              <span>블로그 전체 보기</span>
              <span className={styles.moreGo} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
    </div>
    </section>
  );
}
