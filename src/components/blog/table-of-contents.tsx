'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

type TocProps = {
  /**
   * sidebar — 기존 데스크톱 사이드바(xl 이상에서만 보임)
   * mobile  — 본문 위 접이식. xl 미만에서만 보이며 sidebar 와 짝을 이룬다
   */
  variant?: 'sidebar' | 'mobile';
};

/**
 * 모바일 목차를 띄우기 시작하는 섹션 수.
 *
 * 2026-08-25 모바일 실측: 인기 비교글이 **17.2화면(14,532px)에 섹션 27개**인데
 * 목차가 `hidden xl:block` 이라 모바일에선 아예 없었다. 1280px 이상 화면만 목차를
 * 받고, 정작 스크롤이 힘든 모바일이 순차 탐색을 강요당하고 있었다.
 * (신발 상세의 모바일 탭 라벨과 같은 패턴 — 손해 보는 쪽이 축약을 받고 있었다.)
 *
 * 짧은 글에까지 목차를 얹으면 본문 진입만 늦어지므로 하한을 둔다.
 */
const MOBILE_TOC_MIN_HEADINGS = 5;

export function TableOfContents({ variant = 'sidebar' }: TocProps = {}) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    /*
      ⚠️ querySelector(단수)가 아니라 **All** 이어야 한다.
      본문은 중간 광고 삽입 때문에 `splitContentAtMidH2` 로 여러 조각으로 나뉘고
      조각마다 `data-blog-content` 가 붙는다. 단수로 읽으면 **첫 조각만** 목차에 잡힌다 —
      2026-08-25 실측에서 제목 27개짜리 비교글의 목차에 8개만 나오고 있었다.
      데스크톱 사이드바도 같은 증상이었다.
    */
    const articles = document.querySelectorAll('[data-blog-content]');
    if (articles.length === 0) return;

    const items: TocItem[] = [];
    // id 는 조각을 가로질러 이어지는 순번으로 매긴다 — 조각마다 0부터 세면 id 가 충돌한다
    let index = 0;
    articles.forEach((article) => {
      article.querySelectorAll('h2, h3').forEach((el) => {
        const id = el.id || `heading-${index}`;
        if (!el.id) el.id = id;
        items.push({
          id,
          text: el.textContent || '',
          level: el.tagName === 'H2' ? 2 : 3,
        });
        index += 1;
      });
    });

    setHeadings(items);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  if (variant === 'mobile') {
    if (headings.length < MOBILE_TOC_MIN_HEADINGS) return null;
    return (
      <details className="xl:hidden mb-6 border border-border bg-surface">
        <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-primary [&::-webkit-details-marker]:hidden">
          <span className="inline-flex w-full items-center justify-between gap-2">
            <span>목차 · {headings.length}개 섹션</span>
            <span aria-hidden="true" className="font-mono text-xs text-tertiary">펼치기</span>
          </span>
        </summary>
        <ul className="border-t border-border px-2 py-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block py-2 text-sm leading-snug text-secondary ${heading.level === 3 ? 'pl-7' : 'pl-3'}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </details>
    );
  }

  return (
    <nav className="hidden xl:block w-56 shrink-0">
      <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto text-sm">
        <ul className="space-y-1.5 border-l-2 border-gray-100">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block transition-colors duration-200 ${
                  heading.level === 3 ? 'pl-6' : 'pl-4'
                } py-1 ${
                  activeId === heading.id
                    ? 'text-gray-900 font-medium border-l-2 border-gray-900 -ml-[2px]'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
