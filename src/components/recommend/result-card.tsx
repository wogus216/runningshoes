'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AddToCompareButton } from '@/components/compare/add-to-compare-button';
import { shoeThumbnail } from '@/lib/shoe-thumbnail';
import type { RecommendedShoe } from '@/lib/recommendation';

type ResultCardProps = {
  shoe: RecommendedShoe;
  rank: number;
};

export const ResultCard = memo(function ResultCard({ shoe, rank }: ResultCardProps) {
  const isTopPick = rank === 1;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[4px] border p-4",
        isTopPick
          ? "border-sky-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(247,244,237,0.96))] ring-2 ring-sky-200"
          : "border-[var(--accent-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,244,237,0.94))]"
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--accent)_0%,var(--signal-dark)_100%)]" />
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
          isTopPick ? "bg-[var(--navy)] text-white" : "border border-sky-100 bg-white text-primary"
        )}>{rank}</span>
        {isTopPick && <span className="rounded-full bg-[var(--navy)] px-3 py-1 text-xs font-medium text-white">먼저 비교할 후보</span>}
      </div>

      {/* 헤더 */}
      <div className="mb-4 grid grid-cols-[4rem_minmax(0,1fr)] items-start gap-x-3 gap-y-2 sm:grid-cols-[4rem_minmax(0,1fr)_auto]">
        {/* 이미지 */}
        <div className="row-span-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-[4px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,240,252,0.92))] sm:row-span-1">
          {shoe.image ? (
            <Image src={shoeThumbnail(shoe.image)} alt={shoe.name} width={64} height={64} className="object-contain" />
          ) : (
            <span className="text-2xl">👟</span>
          )}
        </div>

        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider text-sky-700">
            {shoe.brand}
          </p>
          <h3 className="break-keep text-lg font-bold text-primary">{shoe.name}</h3>
          <p className="text-sm text-secondary">{shoe.category}</p>
        </div>

        <div className="min-w-0 text-left sm:text-right">
          {shoe.price && (
            <p className="mt-1 whitespace-nowrap text-lg font-bold text-primary">
              ₩{shoe.price.toLocaleString()}
            </p>
          )}
        </div>
      </div>

      {/* 추천 이유 태그 */}
      {showDetails && shoe.matchReasons.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-2">
            확인한 조건
          </p>
          <div className="flex flex-wrap gap-2">
            {shoe.matchReasons.slice(0, 4).map((reason, idx) => (
              <span
                key={idx}
                className="inline-flex max-w-full items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
              >
                <Check className="h-3 w-3 shrink-0" />
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
            aria-expanded={showDetails}
            className="flex items-center gap-2 text-sm font-medium text-sky-700 transition hover:opacity-80"
          >
            <ChevronDown className={cn("h-4 w-4 transition-transform", showDetails && "rotate-180")} />
            {showDetails ? '간단히 보기' : '선정 기준 보기'}
          </button>

          {showDetails && (
            <div className="mt-3 rounded-[4px] border border-sky-100 bg-sky-50/60 p-4">
              <p className="text-sm text-secondary leading-relaxed">
                {shoe.detailedReason}
              </p>


            </div>
          )}
        </div>
      )}

      {/* 주요 스펙 */}
      <div className="mb-4 grid grid-cols-2 gap-1 rounded-[4px] bg-sky-50 p-3 sm:gap-3">
        <div className="text-center">
          <p className="text-xs text-tertiary">무게</p>
          <p className="break-words text-sm font-bold text-primary sm:text-base">{shoe.specs?.weight}g</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-tertiary">드롭</p>
          <p className="break-words text-sm font-bold text-primary sm:text-base">{shoe.specs?.drop}mm</p>
        </div>
      </div>

      {/* 액션 버튼 */}
      <div className="flex items-center gap-3">
        <Link href={{ pathname: `/shoes/${shoe.slug}`, query: { from: 'recommend' } }} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--navy)] py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-soft)]">
          상세 보기
          <ArrowRight className="h-4 w-4" />
        </Link>
        <AddToCompareButton shoe={shoe} variant="icon" className="h-12 w-12" />
      </div>
    </div>
  );
});
