'use client';

import { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { TrendingUp, Snowflake, Zap, Check, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { AddToCompareButton } from "@/components/compare/add-to-compare-button";
import { SaveButton } from "@/components/saved/save-button";
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

  const statChips = useMemo(() => {
    const chips: string[] = [];

    if (shoe.specs?.weight) {
      chips.push(`${shoe.specs.weight}g`);
    }
    if (shoe.biomechanics?.drop !== undefined) {
      chips.push(`드롭 ${shoe.biomechanics.drop}mm`);
    }
    if (shoe.priceAnalysis?.valueRating) {
      chips.push(`가치 ${shoe.priceAnalysis.valueRating.toFixed(1)}`);
    }

    return chips.slice(0, 2);
  }, [shoe.specs?.weight, shoe.biomechanics?.drop, shoe.priceAnalysis?.valueRating]);

  const mobileBadge = badges[0];
  const mobileTag = recommendTags[0];

  const cardContent = (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--accent-line)]",
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,250,255,0.96))]",
        "shadow-[0_20px_40px_-34px_rgba(8,18,38,0.32)]",
        "transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-34px_rgba(2,132,199,0.24)]",
        "focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:animate-none",
        "animate-fade-in-up"
      )}
      style={{ animationDelay: `${Math.min(index, 12) * 60}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,240,252,0.92))] px-2 pb-1 pt-9 md:aspect-square md:flex md:items-center md:justify-center md:p-4">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#38bdf8_0%,#0ea5e9_48%,#f97316_100%)]" aria-hidden="true" />
        <div className="absolute inset-x-2.5 top-2.5 z-20 flex items-start justify-between gap-2 md:inset-x-4 md:top-4">
          <span className="rounded-full border border-sky-200 bg-white/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-sky-800 backdrop-blur md:px-2.5 md:py-1 md:text-[10px] md:tracking-[0.18em]">
            {shoe.category}
          </span>
          <div className="flex items-center gap-1.5">
            {shoe.slug && <SaveButton slug={shoe.slug} className="h-8 w-8" />}
            {shoe.specs && <AddToCompareButton shoe={shoe} variant="icon" className="bg-white/80 backdrop-blur hover:bg-white" />}
          </div>
        </div>

        {shoe.image ? (
          <Image
            src={shoe.image}
            alt={`${shoe.brand} ${shoe.name}`}
            width={300}
            height={300}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            {...(index !== undefined && index < 4 ? { priority: true } : { loading: 'lazy' as const })}
          />
        ) : (
          <span className="text-4xl" aria-hidden="true">👟</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3 md:p-5">
        <div className="mb-2.5 flex items-start justify-between gap-2 md:mb-3 md:gap-3">
          <div className="min-w-0">
            <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-700 md:mb-1 md:text-[11px] md:tracking-[0.18em]">{shoe.brand}</p>
            <h3 className="line-clamp-2 min-h-[2.25rem] text-[13px] font-bold leading-4.5 text-slate-950 md:min-h-[3rem] md:text-base md:leading-5">
              {shoe.slug ? (
                <Link
                  href={href as `/shoes/${string}`}
                  className="outline-none after:absolute after:inset-0 after:rounded-[28px] after:content-[''] focus-visible:outline-none"
                  aria-label={`${shoe.brand} ${shoe.name} 상세 보기`}
                >
                  {shoe.name}
                </Link>
              ) : (
                shoe.name
              )}
            </h3>
          </div>
          <div className="flex-shrink-0 rounded-2xl bg-[var(--navy)] px-2 py-1 text-right text-white shadow-[0_14px_28px_-20px_rgba(2,132,199,0.85)] md:px-2.5">
            <p className="text-[9px] uppercase tracking-[0.14em] text-sky-100/55 md:text-[10px] md:tracking-[0.18em]">Score</p>
            <p className="text-[13px] font-black md:text-sm">{shoe.rating.toFixed(1)}</p>
          </div>
        </div>

        <div className="mb-2 flex flex-wrap items-center gap-1.5 md:hidden">
          <span className="rounded-full bg-[var(--navy)] px-2.5 py-1 text-[11px] font-bold text-white">
            ₩{shoe.price?.toLocaleString()}
          </span>
          {mobileBadge && (
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-semibold",
                mobileBadge.color === 'positive' && "bg-teal-50 text-teal-700",
                mobileBadge.color === 'warning' && "bg-orange-50 text-orange-700",
                mobileBadge.color === 'accent' && "bg-sky-50 text-sky-700"
              )}
            >
              {mobileBadge.icon === 'value' && <TrendingUp className="w-3 h-3" aria-hidden="true" />}
              {mobileBadge.icon === 'carbon' && <Zap className="w-3 h-3" aria-hidden="true" />}
              {mobileBadge.icon === 'winter' && <Snowflake className="w-3 h-3" aria-hidden="true" />}
              {mobileBadge.text}
            </span>
          )}
        </div>

        <div className="mb-3 hidden flex-wrap items-center gap-1.5 md:flex">
          <span className="rounded-full bg-[var(--navy)] px-2.5 py-1 text-xs font-bold text-white">
            ₩{shoe.price?.toLocaleString()}
          </span>
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold",
                badge.color === 'positive' && "bg-teal-50 text-teal-700",
                badge.color === 'warning' && "bg-orange-50 text-orange-700",
                badge.color === 'accent' && "bg-sky-50 text-sky-700"
              )}
            >
              {badge.icon === 'value' && <TrendingUp className="w-3 h-3" aria-hidden="true" />}
              {badge.icon === 'carbon' && <Zap className="w-3 h-3" aria-hidden="true" />}
              {badge.icon === 'winter' && <Snowflake className="w-3 h-3" aria-hidden="true" />}
              {badge.text}
            </span>
          ))}
        </div>

        {statChips.length > 0 && (
          <div className="mb-3 hidden flex-wrap gap-1.5 md:flex">
            {statChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-sky-100 bg-white/78 px-2.5 py-1 text-[11px] font-medium text-slate-600"
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        <div className="min-h-[1rem] md:hidden">
          {mobileTag && (
            <span
              className={cn(
                "inline-flex items-center gap-1 text-[10px] font-semibold",
                mobileTag.type === 'positive' ? "text-teal-700" : "text-orange-700"
              )}
            >
              {mobileTag.type === 'positive' ? (
                <Check className="w-3 h-3" aria-hidden="true" />
              ) : (
                <AlertTriangle className="w-3 h-3" aria-hidden="true" />
              )}
              {mobileTag.text}
            </span>
          )}
        </div>

        <div className="hidden min-h-[1.25rem] items-center gap-3 overflow-hidden md:flex">
          {recommendTags.map((tag, idx) => (
            <span
              key={idx}
              className={cn(
                "inline-flex items-center gap-1 text-[11px] font-semibold flex-shrink-0",
                tag.type === 'positive' ? "text-teal-700" : "text-orange-700"
              )}
            >
              {tag.type === 'positive' ? (
                <Check className="w-3 h-3" aria-hidden="true" />
              ) : (
                <AlertTriangle className="w-3 h-3" aria-hidden="true" />
              )}
              {tag.text}
            </span>
          ))}
        </div>

        {shoe.tags && shoe.tags.length > 0 && onTagClick && (
          <div className="relative z-10 mt-auto hidden gap-1.5 overflow-hidden pt-3 md:flex">
            {shoe.tags.slice(0, 2).map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onTagClick(tag)}
                className="max-w-[88px] truncate rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 transition-colors hover:bg-sky-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                aria-label={`${tag} 태그로 필터링`}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  return cardContent;
});
