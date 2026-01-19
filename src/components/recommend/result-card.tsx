'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Check, ArrowRight, ChevronDown, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AddToCompareButton } from '@/components/compare/add-to-compare-button';
import type { RecommendedShoe } from '@/lib/recommendation';

type ResultCardProps = {
  shoe: RecommendedShoe;
  rank: number;
};

export const ResultCard = memo(function ResultCard({ shoe, rank }: ResultCardProps) {
  const isTopPick = rank === 1;
  const [showDetails, setShowDetails] = useState(isTopPick);

  const getComparisonIcon = (value: number, inverted = false) => {
    const isPositive = inverted ? value < 0 : value > 0;
    const isNegative = inverted ? value > 0 : value < 0;

    if (isPositive) return <TrendingUp className="h-3 w-3 text-positive" />;
    if (isNegative) return <TrendingDown className="h-3 w-3 text-negative" />;
    return <Minus className="h-3 w-3 text-tertiary" />;
  };

  const getComparisonText = (value: number, unit: string, inverted = false) => {
    if (value === 0) return '평균';
    const absValue = Math.abs(value);
    const direction = inverted
      ? (value < 0 ? '+' : '-')
      : (value > 0 ? '+' : '-');
    return `${direction}${absValue}${unit}`;
  };

  return (
    <div
      className={cn(
        "section-card p-6 relative",
        isTopPick && "ring-2 ring-accent"
      )}
    >
      {/* 랭킹 뱃지 */}
      <div
        className={cn(
          "absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold",
          isTopPick
            ? "bg-accent text-white"
            : "bg-surface text-primary border border-border"
        )}
      >
        {rank}
      </div>

      {isTopPick && (
        <span className="absolute -top-3 right-4 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
          최고 추천
        </span>
      )}

      {/* 헤더 */}
      <div className="flex items-start gap-4 mb-4 pt-2">
        {/* 이미지 */}
        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
          {shoe.image ? (
            <Image src={shoe.image} alt={shoe.name} width={64} height={64} className="object-contain" />
          ) : (
            <span className="text-2xl">👟</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs text-tertiary uppercase tracking-wider">
            {shoe.brand}
          </p>
          <h3 className="text-lg font-bold text-primary truncate">{shoe.name}</h3>
          <p className="text-sm text-secondary">{shoe.category}</p>
        </div>

        <div className="text-right flex-shrink-0">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3.5 w-3.5",
                  i < Math.round(shoe.rating)
                    ? "fill-warning stroke-warning"
                    : "stroke-border"
                )}
              />
            ))}
          </div>
          {shoe.price && (
            <p className="text-lg font-bold text-primary mt-1">
              ₩{shoe.price.toLocaleString()}
            </p>
          )}
        </div>
      </div>

      {/* 매칭 점수 */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-secondary">매칭 점수</span>
          <span className="text-sm font-bold text-accent">{shoe.matchScore}점</span>
        </div>
        <div className="h-2 bg-surface rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all"
            style={{ width: `${Math.min(shoe.matchScore, 100)}%` }}
          />
        </div>
      </div>

      {/* 추천 이유 태그 */}
      {shoe.matchReasons.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-2">
            추천 이유
          </p>
          <div className="flex flex-wrap gap-2">
            {shoe.matchReasons.slice(0, 4).map((reason, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 rounded-full bg-positive/10 px-3 py-1 text-xs font-medium text-positive"
              >
                <Check className="h-3 w-3" />
                {reason}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 상세 추천 이유 */}
      {shoe.detailedReason && (
        <div className="mb-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-sm font-medium text-accent hover:opacity-80 transition"
          >
            <ChevronDown className={cn("h-4 w-4 transition-transform", showDetails && "rotate-180")} />
            {showDetails ? '간단히 보기' : '상세 분석 보기'}
          </button>

          {showDetails && (
            <div className="mt-3 p-4 rounded-xl bg-surface border border-border">
              <p className="text-sm text-secondary leading-relaxed">
                {shoe.detailedReason}
              </p>

              {shoe.comparisonToAvg && (
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-2">
                    추천 신발 평균 대비
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex items-center gap-1 text-xs">
                      {getComparisonIcon(shoe.comparisonToAvg.cushioning)}
                      <span className="text-secondary">쿠셔닝</span>
                      <span className={cn(
                        "font-medium",
                        shoe.comparisonToAvg.cushioning > 0 ? "text-positive" :
                        shoe.comparisonToAvg.cushioning < 0 ? "text-negative" : "text-tertiary"
                      )}>
                        {getComparisonText(shoe.comparisonToAvg.cushioning, '')}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      {getComparisonIcon(shoe.comparisonToAvg.weight, true)}
                      <span className="text-secondary">무게</span>
                      <span className={cn(
                        "font-medium",
                        shoe.comparisonToAvg.weight < 0 ? "text-positive" :
                        shoe.comparisonToAvg.weight > 0 ? "text-negative" : "text-tertiary"
                      )}>
                        {getComparisonText(shoe.comparisonToAvg.weight, 'g', true)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs">
                      {getComparisonIcon(shoe.comparisonToAvg.durability)}
                      <span className="text-secondary">내구성</span>
                      <span className={cn(
                        "font-medium",
                        shoe.comparisonToAvg.durability > 0 ? "text-positive" :
                        shoe.comparisonToAvg.durability < 0 ? "text-negative" : "text-tertiary"
                      )}>
                        {getComparisonText(shoe.comparisonToAvg.durability, 'km')}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 주요 스펙 */}
      <div className="grid grid-cols-3 gap-3 mb-4 p-3 rounded-xl bg-surface">
        <div className="text-center">
          <p className="text-xs text-tertiary">무게</p>
          <p className="font-bold text-primary">{shoe.specs?.weight}g</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-tertiary">쿠셔닝</p>
          <p className="font-bold text-primary">{shoe.specs?.cushioning}/10</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-tertiary">내구성</p>
          <p className="font-bold text-primary">{shoe.specs?.durability}km</p>
        </div>
      </div>

      {/* 액션 버튼 */}
      <div className="flex items-center gap-3">
        <Link href={`/shoes/${shoe.slug}`} className="flex-1">
          <button className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-white hover:opacity-90 transition flex items-center justify-center gap-2">
            상세 보기
            <ArrowRight className="h-4 w-4" />
          </button>
        </Link>
        <AddToCompareButton shoe={shoe} variant="icon" className="h-12 w-12" />
      </div>
    </div>
  );
});
