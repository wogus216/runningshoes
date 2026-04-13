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

const tabs = [
  { id: 'specs', label: '스펙', mobileLabel: '스펙' },
  { id: 'biomechanics', label: '생체역학', mobileLabel: '역학' },
  { id: 'injury', label: '부상 예방', mobileLabel: '부상' },
  { id: 'koreanfoot', label: '한국인 발', mobileLabel: '발형' },
  { id: 'price', label: '가격', mobileLabel: '가격' },
  { id: 'reviews', label: '분석', mobileLabel: '분석' },
] as const;

type TabId = typeof tabs[number]['id'];

export function ShoeDetailTabs({ shoe, similarShoesData, resolvedAlternatives }: ShoeDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('specs');

  return (
    <div className="space-y-5">
      <div className="sticky top-16 z-40 overflow-hidden rounded-[30px] border border-sky-950/20 bg-[rgba(8,18,38,0.92)] p-2 shadow-[0_24px_48px_-38px_rgba(8,18,38,0.62)] backdrop-blur-xl">
        <div className="mb-2 px-3 pt-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-100/45">Detail Panel</p>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "min-h-[44px] whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all md:px-5 md:text-sm",
                activeTab === tab.id
                  ? "bg-white text-slate-950 shadow-[0_16px_32px_-22px_rgba(255,255,255,0.7)]"
                  : "text-white/60 hover:bg-white/8 hover:text-white"
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
            <div className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
              <QuickSpecs specs={shoe.specs} koreanFootFit={shoe.koreanFootFit} heelStack={shoe.biomechanics?.stackHeight?.heel} />
            </div>
          )}
          {shoe.specs && (
            <div className="rounded-[30px] border border-[var(--accent-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(239,247,255,0.92))] p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] md:p-6">
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
            <div className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
              <DetailedSpecs specs={shoe.detailedSpecs} />
            </div>
          )}
        </div>

        <div className={activeTab === 'biomechanics' ? '' : 'hidden'}>
          {shoe.biomechanics && (
            <div className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
              <BiomechanicsAnalysis biomechanics={shoe.biomechanics} weight={shoe.specs?.weight} />
            </div>
          )}
        </div>

        <div className={activeTab === 'injury' ? '' : 'hidden'}>
          {shoe.injuryPrevention && (
            <div className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
              <InjuryPrevention injuryPrevention={shoe.injuryPrevention} />
            </div>
          )}
        </div>

        <div className={activeTab === 'koreanfoot' ? '' : 'hidden'}>
          {shoe.koreanFootFit && (
            <div className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
              <KoreanFootFit
                koreanFootFit={shoe.koreanFootFit}
                shoeName={shoe.name}
                brand={shoe.brand}
              />
            </div>
          )}
          {shoe.koreanFootFit && (
            <div className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
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
            <div className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
              <ValueAnalysis
                resolvedAlternatives={resolvedAlternatives}
                priceAnalysis={shoe.priceAnalysis}
                shoeName={shoe.name}
                brand={shoe.brand}
                category={shoe.category}
                specs={shoe.specs}
              />
            </div>
          )}
          {shoe.specs && (
            <div className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
              <ReplacementCalculator
                durabilityKm={shoe.specs.durability}
                shoeName={shoe.name}
              />
            </div>
          )}
          {shoe.purchaseLinks && shoe.purchaseLinks.length > 0 && (
            <div className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
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
          <div className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
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
