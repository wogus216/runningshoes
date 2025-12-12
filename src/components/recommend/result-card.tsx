'use client';

import Link from 'next/link';
import { Star, Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { AddToCompareButton } from '@/components/compare/add-to-compare-button';
import type { RecommendedShoe } from '@/lib/recommendation';

type ResultCardProps = {
  shoe: RecommendedShoe;
  rank: number;
};

export function ResultCard({ shoe, rank }: ResultCardProps) {
  const isTopPick = rank === 1;

  return (
    <div
      className={cn(
        "relative rounded-3xl border-2 p-6 transition-all",
        isTopPick
          ? "border-[#4facfe] bg-gradient-to-br from-[#4facfe]/10 to-[#00f2fe]/10"
          : "border-white/30 bg-white/50"
      )}
    >
      {/* 랭킹 뱃지 */}
      <div
        className={cn(
          "absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold",
          isTopPick
            ? "bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white"
            : "bg-slate-200 text-slate-600"
        )}
      >
        {rank}
      </div>

      {isTopPick && (
        <Badge className="absolute -top-3 right-4 bg-[#4facfe] text-white">
          최고 추천
        </Badge>
      )}

      {/* 헤더 */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {shoe.brand}
          </p>
          <h3 className="text-xl font-bold text-slate-900">{shoe.name}</h3>
          <p className="text-sm text-slate-500">{shoe.category}</p>
        </div>

        <div className="text-right">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.round(shoe.rating)
                    ? "fill-[#ffd700] stroke-[#ffd700]"
                    : "stroke-slate-300"
                )}
              />
            ))}
          </div>
          {shoe.priceAnalysis?.msrp && (
            <p className="text-lg font-bold text-slate-900 mt-1">
              ₩{shoe.priceAnalysis.msrp.toLocaleString()}
            </p>
          )}
        </div>
      </div>

      {/* 매칭 점수 */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">매칭 점수</span>
          <span className="text-sm font-bold text-[#4facfe]">{shoe.matchScore}점</span>
        </div>
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe]"
            style={{ width: `${Math.min(shoe.matchScore, 100)}%` }}
          />
        </div>
      </div>

      {/* 추천 이유 */}
      {shoe.matchReasons.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            추천 이유
          </p>
          <div className="flex flex-wrap gap-2">
            {shoe.matchReasons.slice(0, 4).map((reason, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700"
              >
                <Check className="h-3 w-3" />
                {reason}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 주요 스펙 */}
      <div className="grid grid-cols-3 gap-3 mb-4 p-3 rounded-xl bg-slate-50">
        <div className="text-center">
          <p className="text-xs text-slate-500">무게</p>
          <p className="font-bold text-slate-900">{shoe.specs?.weight}g</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-slate-500">쿠셔닝</p>
          <p className="font-bold text-slate-900">{shoe.specs?.cushioning}/10</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-slate-500">내구성</p>
          <p className="font-bold text-slate-900">{shoe.specs?.durability}km</p>
        </div>
      </div>

      {/* 액션 버튼 */}
      <div className="flex items-center gap-3">
        <Link href={`/shoes/${shoe.slug}`} className="flex-1">
          <button className="w-full rounded-full bg-slate-900 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
            상세 보기
            <ArrowRight className="h-4 w-4" />
          </button>
        </Link>
        <AddToCompareButton shoe={shoe} variant="icon" className="h-12 w-12" />
      </div>
    </div>
  );
}
