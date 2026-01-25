'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Scale, X, ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCompare } from '@/contexts/compare-context';

export function CompareFloatingButton() {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const [isExpanded, setIsExpanded] = useState(false);

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* 확장된 패널 */}
      {isExpanded && (
        <div className="mb-3 w-72 rounded-2xl border border-border bg-white p-4 shadow-2xl animate-fade-in-up">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-primary">비교함 ({compareList.length}/4)</h4>
            <button
              onClick={clearCompare}
              className="text-xs text-tertiary hover:text-negative"
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
              className="block w-full text-center rounded-full bg-accent text-white py-2.5 text-sm font-medium hover:opacity-90 transition"
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
        className={cn(
          "flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-white shadow-lg transition-all",
          "bg-accent hover:shadow-xl hover:scale-105",
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
