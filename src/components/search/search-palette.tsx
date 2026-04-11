'use client';

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, CornerDownLeft } from 'lucide-react';
import type { SearchItem } from '@/lib/search-index';

type SearchPaletteProps = {
  items: SearchItem[];
};

function scoreMatch(query: string, item: SearchItem): number {
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  const title = item.title.toLowerCase();
  const kw = item.keywords;

  // exact title match
  if (title === q) return 1000;
  // title startsWith
  if (title.startsWith(q)) return 500;
  // title contains
  if (title.includes(q)) return 250;
  // every query token in keywords
  const tokens = q.split(/\s+/).filter(Boolean);
  const allInKw = tokens.every((t) => kw.includes(t));
  if (allInKw) return 100;
  return 0;
}

export function SearchPalette({ items }: SearchPaletteProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Cmd+K / Ctrl+K 단축키
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === '/' && !open && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // 열렸을 때 포커스
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
      setCursor(0);
    } else {
      setQuery('');
    }
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return items.slice(0, 10);
    return items
      .map((item) => ({ item, score: scoreMatch(query, item) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)
      .map((r) => r.item);
  }, [query, items]);

  const go = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href as never);
    },
    [router],
  );

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, results.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    }
    if (e.key === 'Enter' && results[cursor]) {
      e.preventDefault();
      go(results[cursor].href);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/80 px-3 py-2 text-sm text-slate-600 transition hover:bg-white md:min-w-[200px]"
        aria-label="검색"
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left hidden sm:inline">신발 이름으로 검색...</span>
        <kbd className="hidden md:inline rounded border border-stone-900/10 bg-surface px-1.5 py-0.5 text-[10px] font-mono text-tertiary">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/40 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <Search className="h-5 w-5 text-tertiary shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setCursor(0);
                }}
                onKeyDown={onKeyDown}
                placeholder="신발 이름, 브랜드, 카테고리로 검색 (예: 페가수스, 카본, 입문화)"
                className="flex-1 bg-transparent text-base text-primary placeholder:text-tertiary outline-none"
              />
              <button
                onClick={() => setOpen(false)}
                className="shrink-0 rounded-full p-1 text-tertiary hover:bg-surface"
                aria-label="닫기"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <div className="p-8 text-center text-sm text-tertiary">
                  검색 결과가 없습니다. 다른 키워드로 시도해보세요.
                </div>
              ) : (
                <ul className="py-2">
                  {results.map((item, i) => (
                    <li key={`${item.type}-${item.href}`}>
                      <button
                        onClick={() => go(item.href)}
                        onMouseEnter={() => setCursor(i)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition ${
                          i === cursor ? 'bg-sky-50' : 'hover:bg-surface'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-primary truncate">{item.title}</div>
                          {item.subtitle && (
                            <div className="text-xs text-tertiary truncate">{item.subtitle}</div>
                          )}
                        </div>
                        {i === cursor && (
                          <CornerDownLeft className="h-4 w-4 text-sky-600 shrink-0" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border bg-surface/50 px-4 py-2 text-[10px] text-tertiary">
              <div className="flex items-center gap-3">
                <span><kbd className="px-1 rounded bg-white border border-border">↑↓</kbd> 이동</span>
                <span><kbd className="px-1 rounded bg-white border border-border">Enter</kbd> 선택</span>
                <span><kbd className="px-1 rounded bg-white border border-border">Esc</kbd> 닫기</span>
              </div>
              <span>{results.length}개 결과</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
