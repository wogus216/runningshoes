'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { QuickSpecs } from '@/components/detail/quick-specs';
import { DetailedSpecs } from '@/components/detail/detailed-specs';
import { BiomechanicsAnalysis } from '@/components/detail/biomechanics-analysis';
import { InjuryPrevention } from '@/components/detail/injury-prevention';
import { KoreanFootFit } from '@/components/detail/korean-foot-fit';
import { FitHelper } from '@/components/detail/fit-helper';
import { ValueAnalysis, type ResolvedAlternative } from '@/components/detail/value-analysis';
import { PurchaseLinks } from '@/components/detail/purchase-links';
import { ReplacementCalculator } from '@/components/detail/replacement-calculator';
import { ReviewsSection } from '@/components/detail/reviews-section';
import { SimilarShoes } from '@/components/detail/similar-shoes';
import { cn } from '@/lib/utils';
import type { Shoe } from '@/types/shoe';
import type { SimilarShoeInfo } from '@/lib/data/shoes';
import { getShoeDurability } from '@/lib/durability';

// Recharts가 무거워서 dynamic import로 분리 (에러 처리 포함)
const SpecRadarChart = dynamic(
  () => import('@/components/detail/spec-radar-chart')
    .then(mod => ({ default: mod.SpecRadarChart }))
    .catch(() => ({
      default: () => (
        <div className="h-[300px] flex items-center justify-center text-tertiary">
          차트를 불러올 수 없습니다
        </div>
      )
    })),
  {
    loading: () => (
      <div className="h-[300px] flex items-center justify-center text-tertiary">
        차트 로딩 중...
      </div>
    ),
    ssr: false,
  }
);

type ShoeDetailTabsProps = {
  shoe: Shoe;
  similarShoesData?: SimilarShoeInfo[];
  resolvedAlternatives?: ResolvedAlternative[];
};

/**
 * 모바일 라벨은 데스크톱을 줄인 축약어가 아니라 **러너가 실제로 쓰는 말**이어야 한다.
 *
 * 2026-08-25 모바일 페르소나 평가에서 '발형'이 걸렸다 — 발볼이 넓어 와이드를 찾는
 * 러너가 "내 발볼 맞나?"를 알고 싶을 때, '발볼'도 '사이즈'도 '핏'도 아닌 '발형'을
 * 누를 이유가 없다. 정작 그 탭 안에 이 사이트의 최대 강점인 발볼 매칭 도구가 있다.
 * 데스크톱은 '한국인 발'로 뜻이 통하는데 모바일만 의미가 깎여 있었고,
 * 트래픽 대부분이 모바일이라 손해가 큰 쪽이 축약을 받고 있었다.
 *
 * 탭바는 overflow-x-auto 라 가로 여유가 있지만, 6개가 한 화면에 다 보여야
 * "탭이 더 있다"는 걸 알 수 있어 3글자를 상한으로 잡았다.
 */
const tabs = [
  { id: 'specs', label: '스펙', mobileLabel: '스펙' },
  { id: 'biomechanics', label: '생체역학', mobileLabel: '주행감' },
  { id: 'injury', label: '부상 예방', mobileLabel: '부상' },
  { id: 'koreanfoot', label: '한국인 발', mobileLabel: '발볼' },
  { id: 'price', label: '가격', mobileLabel: '가격' },
  { id: 'reviews', label: '분석', mobileLabel: '유형별' },
] as const;

type TabId = typeof tabs[number]['id'];

export function ShoeDetailTabs({ shoe, similarShoesData, resolvedAlternatives }: ShoeDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('specs');
  // 내구성 범위·근거 등급은 한 번만 계산해 스펙/가격 탭이 같은 값을 쓰게 한다
  const durability = getShoeDurability(shoe);

  return (
    <div className="space-y-5">
      <div className="sticky top-16 z-40 border-2 border-primary bg-[var(--navy)] p-2">
        <div className="mb-2 px-3 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-100/45">Detail Panel</p>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "min-h-[44px] whitespace-nowrap border-b-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all md:px-5 md:text-sm",
                activeTab === tab.id
                  ? "border-accent text-white"
                  : "border-transparent text-white/60 hover:text-white"
              )}
            >
              <span className="md:hidden">{tab.mobileLabel}</span>
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className={activeTab === 'specs' ? '' : 'hidden'}>
          {shoe.specs && (
            <div className="border border-border bg-white p-5 md:p-6">
              <QuickSpecs specs={shoe.specs} koreanFootFit={shoe.koreanFootFit} durability={durability} />
            </div>
          )}
          {shoe.specs && (
            <div className="border border-border bg-white p-5 md:p-6">
              <div className="mb-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-700">Spec Chart</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">숫자로 보는 성향</h2>
              </div>
              <SpecRadarChart
                specs={shoe.specs}
                priceValueRating={shoe.priceAnalysis?.valueRating}
                shoeName={shoe.name}
              />
            </div>
          )}
          {shoe.detailedSpecs && (
            <div className="border border-border bg-white p-5 md:p-6">
              <DetailedSpecs specs={shoe.detailedSpecs} />
            </div>
          )}
        </div>

        <div className={activeTab === 'biomechanics' ? '' : 'hidden'}>
          {shoe.biomechanics && (
            <div className="border border-border bg-white p-5 md:p-6">
              <BiomechanicsAnalysis biomechanics={shoe.biomechanics} />
            </div>
          )}
        </div>

        <div className={activeTab === 'injury' ? '' : 'hidden'}>
          {shoe.injuryPrevention && (
            <div className="border border-border bg-white p-5 md:p-6">
              <InjuryPrevention injuryPrevention={shoe.injuryPrevention} />
            </div>
          )}
        </div>

        <div className={activeTab === 'koreanfoot' ? '' : 'hidden'}>
          {shoe.koreanFootFit && (
            <div className="border border-border bg-white p-5 md:p-6">
              <KoreanFootFit
                koreanFootFit={shoe.koreanFootFit}
                shoeName={shoe.name}
                brand={shoe.brand}
              />
            </div>
          )}
          {shoe.koreanFootFit && (
            <div className="border border-border bg-white p-5 md:p-6">
              <FitHelper
                koreanFootFit={shoe.koreanFootFit}
                shoeName={shoe.name}
                brand={shoe.brand}
              />
            </div>
          )}
          {similarShoesData && similarShoesData.length > 0 && (
            <SimilarShoes currentShoe={shoe} similarShoesData={similarShoesData} currentCategory={shoe.category} />
          )}
        </div>

        <div className={activeTab === 'price' ? '' : 'hidden'}>
          {shoe.priceAnalysis && (
            <div className="border border-border bg-white p-5 md:p-6">
              <ValueAnalysis
                resolvedAlternatives={resolvedAlternatives}
                priceAnalysis={shoe.priceAnalysis}
                shoeName={shoe.name}
                brand={shoe.brand}
                category={shoe.category}
                durability={durability}
              />
            </div>
          )}
          {shoe.specs && (
            <div className="border border-border bg-white p-5 md:p-6">
              <ReplacementCalculator
                durability={durability}
                shoeName={shoe.name}
              />
            </div>
          )}
          {shoe.purchaseLinks && shoe.purchaseLinks.length > 0 && (
            <div className="border border-border bg-white p-5 md:p-6">
              <PurchaseLinks
                purchaseLinks={shoe.purchaseLinks}
                shoeName={shoe.name}
                brand={shoe.brand}
                msrp={shoe.priceAnalysis?.msrp ?? shoe.price}
              />
            </div>
          )}
        </div>

        <div className={activeTab === 'reviews' ? '' : 'hidden'}>
          <div className="border border-border bg-white p-5 md:p-6">
            {shoe.reviews && shoe.reviews.length > 0 ? (
              <ReviewsSection reviews={shoe.reviews} />
            ) : (
              <div className="text-center py-8">
                <p className="text-secondary">아직 등록된 리뷰가 없습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
