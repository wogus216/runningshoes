'use client';

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, TrendingUp, Snowflake, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AddToCompareButton } from "@/components/compare/add-to-compare-button";
import type { Shoe } from "@/types/shoe";

type ShoeCardProps = {
  shoe: Shoe;
  index?: number;
  onTagClick?: (tag: string) => void;
};

const statusLabels: Record<NonNullable<Shoe["status"]>, { label: string; className: string }> = {
  new: { label: "NEW", className: "bg-emerald-500/20 text-emerald-200" },
  updated: { label: "UPDATED", className: "bg-sky-500/20 text-sky-100" },
  featured: { label: "FEATURED", className: "bg-fuchsia-500/20 text-fuchsia-100" },
  great: { label: "GREAT 87+", className: "bg-blue-500/20 text-blue-100" },
};

function getStatus(shoe: Shoe): Shoe["status"] | undefined {
  if (shoe.status) {
    return shoe.status;
  }
  return shoe.rating >= 5 ? "great" : undefined;
}

export const ShoeCard = memo(function ShoeCard({ shoe, index = 0, onTagClick }: ShoeCardProps) {
  const status = getStatus(shoe);
  const href = shoe.slug ? `/shoes/${shoe.slug}` : "#";

  // 가성비 배지 (valueRating 8 이상)
  const isGoodValue = shoe.priceAnalysis?.valueRating && shoe.priceAnalysis.valueRating >= 8;
  // 겨울 호환 배지 (excellent or good)
  const isWinterReady = shoe.koreanFootFit?.winterCompatibility &&
    ['excellent', 'good'].includes(shoe.koreanFootFit.winterCompatibility);
  // 카본 플레이트 배지
  const hasCarbonPlate = shoe.biomechanics?.carbonPlate;

  // 클릭 가능한 태그 (최대 2개)
  const clickableTags = shoe.tags?.slice(0, 2) || [];

  const cardContent = (
    <Card
      className={cn(
        "group/card relative overflow-hidden border-white/20 bg-white/10 text-slate-900 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.6)]",
        "backdrop-blur-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-white/40 hover:shadow-[0_24px_50px_-28px_rgba(88,119,255,0.6)]",
        "animate-fade-in-up cursor-pointer"
      )}
      style={{ animationDelay: `${Math.min(index, 12) * 80}ms` }}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#4facfe] transition-transform duration-300 ease-out group-hover/card:scale-x-100" />
      <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#4facfe]/40 via-[#f093fb]/40 to-transparent blur-3xl" />

      <div className="group/card relative flex flex-col gap-4 p-5">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
          <span>{shoe.brand}</span>
          <div className="flex items-center gap-1.5">
            {isGoodValue && (
              <Badge className="border-none bg-green-500/20 text-green-600 px-1.5 py-0.5 text-[9px] tracking-normal flex items-center gap-0.5">
                <TrendingUp className="h-2.5 w-2.5" />
                가성비
              </Badge>
            )}
            {isWinterReady && (
              <Badge className="border-none bg-sky-500/20 text-sky-600 px-1.5 py-0.5 text-[9px] tracking-normal flex items-center gap-0.5">
                <Snowflake className="h-2.5 w-2.5" />
                겨울
              </Badge>
            )}
            {hasCarbonPlate && (
              <Badge className="border-none bg-amber-500/20 text-amber-600 px-1.5 py-0.5 text-[9px] tracking-normal flex items-center gap-0.5">
                <Zap className="h-2.5 w-2.5" />
                카본
              </Badge>
            )}
            {status && !isGoodValue && !isWinterReady && !hasCarbonPlate && (
              <Badge className={cn("border-none px-2 py-0.5 text-[10px] tracking-[0.2em]", statusLabels[status].className)}>
                {statusLabels[status].label}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <h3 className="text-lg font-bold tracking-tight text-slate-900 drop-shadow-sm">{shoe.name}</h3>
            <div className="flex flex-wrap items-center gap-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <span className="rounded-full bg-slate-900/5 px-2 py-1 text-xs text-slate-600">{shoe.category}</span>
              {clickableTags.map(tag => (
                <button
                  key={tag}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onTagClick?.(tag);
                  }}
                  className="rounded-full bg-[#4facfe]/15 px-2 py-1 text-xs text-slate-700 hover:bg-[#4facfe]/25 transition-colors normal-case tracking-normal font-medium"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          <div
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/40 text-2xl shadow-inner transition-transform duration-500 ease-out group-hover/card:-translate-y-1 group-hover/card:rotate-3 group-hover/card:scale-110 overflow-hidden"
          >
            {shoe.image ? (
              <Image
                src={shoe.image}
                alt={shoe.name}
                width={48}
                height={48}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            ) : (
              <span>🏃</span>
            )}
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs font-medium text-slate-600">
            {Array.from({ length: 5 }).map((_, starIndex) => {
              const isActive = starIndex < Math.round(shoe.rating);
              return (
                <Star
                  key={starIndex}
                  className={cn("h-3.5 w-3.5", isActive ? "fill-[#ffd700] stroke-[#ffd700]" : "stroke-slate-400")}
                />
              );
            })}
            <span className="ml-1 rounded-full bg-slate-900/5 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
              {shoe.rating.toFixed(1)}
            </span>
          </div>
          {shoe.specs && <AddToCompareButton shoe={shoe} variant="icon" />}
        </div>
      </div>
    </Card>
  );

  if (shoe.slug) {
    return <Link href={href as `/shoes/${string}`}>{cardContent}</Link>;
  }

  return cardContent;
});
