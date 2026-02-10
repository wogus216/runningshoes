'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const article = document.querySelector('[data-blog-content]');
    if (!article) return;

    const elements = article.querySelectorAll('h2, h3');
    const items: TocItem[] = [];

    elements.forEach((el, index) => {
      const id = el.id || `heading-${index}`;
      if (!el.id) el.id = id;
      items.push({
        id,
        text: el.textContent || '',
        level: el.tagName === 'H2' ? 2 : 3,
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
                    : 'text-gray-400 hover:text-gray-600'
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
