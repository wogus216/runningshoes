'use client';

import { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Snowflake, Zap, Check, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { AddToCompareButton } from "@/components/compare/add-to-compare-button";
import type { Shoe } from "@/types/shoe";

type ShoeCardProps = {
  shoe: Shoe;
  index?: number;
  onTagClick?: (tag: string) => void;
};

export const ShoeCard = memo(function ShoeCard({ shoe, index = 0, onTagClick }: ShoeCardProps) {
  const href = shoe.slug ? `/shoes/${shoe.slug}` : "#";

  // 배지 계산 (최대 2개만 표시)
  const badges = useMemo(() => {
    const result: { icon: 'value' | 'winter' | 'carbon'; text: string; color: string }[] = [];

    // 가성비 배지 (valueRating 8 이상)
    if (shoe.priceAnalysis?.valueRating && shoe.priceAnalysis.valueRating >= 8) {
      result.push({ icon: 'value', text: '가성비', color: 'positive' });
    }
    // 카본 플레이트 배지
    if (shoe.biomechanics?.carbonPlate) {
      result.push({ icon: 'carbon', text: '카본', color: 'warning' });
    }
    // 겨울 호환 배지
    if (shoe.koreanFootFit?.winterCompatibility &&
        ['excellent', 'good'].includes(shoe.koreanFootFit.winterCompatibility)) {
      result.push({ icon: 'winter', text: '겨울', color: 'accent' });
    }

    return result.slice(0, 2); // 최대 2개
  }, [shoe.priceAnalysis?.valueRating, shoe.biomechanics?.carbonPlate, shoe.koreanFootFit?.winterCompatibility]);

  // 추천 태그 (최대 2개)
  const recommendTags = useMemo(() => {
    const tags: { text: string; type: 'positive' | 'warning' }[] = [];

    // 평발 적합성
    if (shoe.koreanFootFit?.flatFootCompatibility === 'excellent' ||
        shoe.koreanFootFit?.flatFootCompatibility === 'good') {
      tags.push({ text: '평발OK', type: 'positive' });
    }

    // 무릎 보호
    if (shoe.injuryPrevention?.kneeIssues === 'excellent' ||
        shoe.injuryPrevention?.kneeIssues === 'good') {
      tags.push({ text: '무릎보호', type: 'positive' });
    }

    // 발볼 넓음
    if (shoe.koreanFootFit?.toBoxWidth === 'wide') {
      tags.push({ text: '발볼넓음', type: 'positive' });
    }

    // 초보 추천
    if (shoe.targetUsers?.recommended?.some(t => t.includes('초보') || t.includes('입문'))) {
      tags.push({ text: '초보추천', type: 'positive' });
    }

    // 토박스 좁음 경고
    if (shoe.koreanFootFit?.toBoxWidth === 'narrow') {
      tags.push({ text: '발볼좁음', type: 'warning' });
    }

    return tags.slice(0, 2); // 최대 2개
  }, [shoe.koreanFootFit, shoe.injuryPrevention, shoe.targetUsers]);

  const cardContent = (
    <div
      className={cn(
        "bg-white border border-border rounded-2xl overflow-hidden card-hover block h-full flex flex-col",
        "animate-fade-in-up"
      )}
      style={{ animationDelay: `${Math.min(index, 12) * 60}ms` }}
    >
      {/* 이미지 영역 - 고정 비율, 이미지 크기 통일 */}
      <div className="aspect-square bg-white flex items-center justify-center relative flex-shrink-0 p-4">
        {shoe.image ? (
          <Image
            src={shoe.image}
            alt={shoe.name}
            width={300}
            height={300}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <span className="text-4xl">👟</span>
        )}
        <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur rounded-md text-xs font-medium text-primary">
          {shoe.category}
        </span>
        {/* 비교 버튼 */}
        {shoe.specs && (
          <div className="absolute top-3 right-3">
            <AddToCompareButton shoe={shoe} variant="icon" />
          </div>
        )}
      </div>

      {/* 정보 영역 - 고정 높이 */}
      <div className="p-3 md:p-4 flex flex-col flex-1">
        {/* 브랜드 & 이름 - 고정 영역 */}
        <div className="mb-2">
          <p className="text-xs text-tertiary mb-0.5">{shoe.brand}</p>
          <h3 className="font-semibold text-sm md:text-base text-primary line-clamp-1">{shoe.name}</h3>
        </div>

        {/* 가격 + 배지 - 한 줄 고정 */}
        <div className="flex items-center gap-1.5 mb-2 h-6 overflow-hidden">
          <span className="text-sm font-bold text-primary flex-shrink-0">
            ₩{shoe.price?.toLocaleString()}
          </span>
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className={cn(
                "text-xs px-1.5 py-0.5 rounded flex items-center gap-0.5 flex-shrink-0",
                badge.color === 'positive' && "text-positive bg-positive/10",
                badge.color === 'warning' && "text-warning bg-warning/10",
                badge.color === 'accent' && "text-accent bg-accent/10"
              )}
            >
              {badge.icon === 'value' && <TrendingUp className="w-3 h-3" />}
              {badge.icon === 'carbon' && <Zap className="w-3 h-3" />}
              {badge.icon === 'winter' && <Snowflake className="w-3 h-3" />}
              {badge.text}
            </span>
          ))}
        </div>

        {/* 추천 태그 - 고정 높이 영역 (항상 공간 확보) */}
        <div className="h-5 flex items-center gap-2 overflow-hidden">
          {recommendTags.map((tag, idx) => (
            <span
              key={idx}
              className={cn(
                "inline-flex items-center gap-0.5 text-xs flex-shrink-0",
                tag.type === 'positive' ? "text-positive" : "text-warning"
              )}
            >
              {tag.type === 'positive' ? (
                <Check className="w-3 h-3" />
              ) : (
                <AlertTriangle className="w-3 h-3" />
              )}
              {tag.text}
            </span>
          ))}
        </div>

        {/* 해시태그 - 하단 고정 (mt-auto로 밀어내기) */}
        {shoe.tags && shoe.tags.length > 0 && onTagClick && (
          <div className="flex gap-1 mt-auto pt-2 overflow-hidden">
            {shoe.tags.slice(0, 2).map(tag => (
              <button
                key={tag}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onTagClick(tag);
                }}
                className="text-xs px-2 py-0.5 bg-surface rounded text-secondary hover:bg-border transition truncate max-w-[80px]"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (shoe.slug) {
    return (
      <Link href={href as `/shoes/${string}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
});
