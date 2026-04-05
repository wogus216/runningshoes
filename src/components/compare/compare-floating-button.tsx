'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale, X, ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCompare } from '@/contexts/compare-context';

export function CompareFloatingButton() {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const isDetailPage = pathname.startsWith('/shoes/');
  const isComparePage = pathname.startsWith('/compare');

  if (compareList.length === 0 || isComparePage) return null;

  return (
    <div
      className={cn(
        "fixed right-4 z-40 md:right-6 md:bottom-6",
        "bottom-[calc(env(safe-area-inset-bottom)+6rem)]",
        isDetailPage && "hidden md:block"
      )}
    >
      {/* 확장된 패널 */}
      {isExpanded && (
        <div className="mb-3 w-72 rounded-[26px] border border-stone-900/10 bg-white/95 p-4 shadow-[0_28px_50px_-32px_rgba(15,23,42,0.55)] backdrop-blur-xl animate-fade-in-up">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-primary">비교함 ({compareList.length}/4)</h4>
            <button
              onClick={clearCompare}
              className="text-xs text-tertiary transition-colors hover:text-negative"
              aria-label="비교함 전체 삭제"
            >
              전체 삭제
            </button>
          </div>

          <div className="space-y-2 mb-4">
            {compareList.map(shoe => (
              <div
                key={shoe.id || shoe.slug}
                className="flex items-center justify-between rounded-lg bg-surface px-3 py-2"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-tertiary">{shoe.brand}</p>
                  <p className="text-sm font-semibold text-primary truncate">{shoe.name}</p>
                </div>
                <button
                  onClick={() => removeFromCompare(shoe.id || shoe.slug || '')}
                  className="ml-2 text-tertiary hover:text-negative"
                  aria-label={`${shoe.name} 비교함에서 제거`}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {compareList.length >= 2 ? (
            <Link
              href={`/compare?shoes=${compareList.map(s => s.slug).join(',')}`}
              className="block w-full rounded-full bg-stone-950 py-2.5 text-center text-sm font-medium text-white transition hover:bg-stone-900"
            >
              비교하기
            </Link>
          ) : (
            <p className="text-center text-xs text-tertiary">
              2개 이상 선택해주세요
            </p>
          )}
        </div>
      )}

      {/* 플로팅 버튼 */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label={isExpanded ? "비교함 접기" : "비교함 펼치기"}
        className={cn(
          "flex min-h-[48px] items-center gap-2 rounded-full px-5 py-3 font-semibold text-white shadow-lg transition-all",
          "bg-stone-950 hover:-translate-y-0.5 hover:bg-stone-900",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2",
          "animate-fade-in-up"
        )}
      >
        <Scale className="h-5 w-5" />
        <span>비교 {compareList.length}</span>
        {isExpanded ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronUp className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
