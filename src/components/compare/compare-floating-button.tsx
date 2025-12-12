'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Scale, X, ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCompare } from '@/contexts/compare-context';
import { Button } from '@/components/ui/button';

export function CompareFloatingButton() {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const [isExpanded, setIsExpanded] = useState(false);

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* 확장된 패널 */}
      {isExpanded && (
        <div className="mb-3 w-72 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-xl animate-fade-in-up">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-slate-900">비교함 ({compareList.length}/4)</h4>
            <button
              onClick={clearCompare}
              className="text-xs text-slate-500 hover:text-red-500"
            >
              전체 삭제
            </button>
          </div>

          <div className="space-y-2 mb-4">
            {compareList.map(shoe => (
              <div
                key={shoe.id || shoe.slug}
                className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-500">{shoe.brand}</p>
                  <p className="text-sm font-semibold text-slate-900 truncate">{shoe.name}</p>
                </div>
                <button
                  onClick={() => removeFromCompare(shoe.id || shoe.slug || '')}
                  className="ml-2 text-slate-400 hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {compareList.length >= 2 && (
            <Link href="/compare" className="block">
              <Button className="w-full rounded-full bg-[#4facfe] hover:bg-[#4facfe]/90">
                비교하기
              </Button>
            </Link>
          )}
          {compareList.length < 2 && (
            <p className="text-center text-xs text-slate-500">
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
          "bg-gradient-to-r from-[#4facfe] to-[#00f2fe] hover:shadow-xl hover:scale-105",
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
