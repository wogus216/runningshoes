'use client';

import { useState } from 'react';
import { DetailedSpecs } from '@/components/detail/detailed-specs';
import { BiomechanicsAnalysis } from '@/components/detail/biomechanics-analysis';
import { KoreanFootFit } from '@/components/detail/korean-foot-fit';
import { FitHelper } from '@/components/detail/fit-helper';
import { ValueAnalysis, type ResolvedAlternative } from '@/components/detail/value-analysis';
import { PurchaseLinks } from '@/components/detail/purchase-links';
import { ReviewsSection } from '@/components/detail/reviews-section';
import { SimilarShoes } from '@/components/detail/similar-shoes';
import { cn } from '@/lib/utils';
import type { Shoe } from '@/types/shoe';
import type { SimilarShoeInfo } from '@/lib/data/shoes';

type ShoeDetailTabsProps = {
  shoe: Shoe;
  similarShoesData?: SimilarShoeInfo[];
  resolvedAlternatives?: ResolvedAlternative[];
};

const tabs = [
  { id: 'specs', label: '스펙', mobileLabel: '스펙' },
  { id: 'biomechanics', label: '생체역학', mobileLabel: '주행감' },
  { id: 'koreanfoot', label: '핏·폭 옵션', mobileLabel: '발볼' },
  { id: 'price', label: '가격', mobileLabel: '가격' },
  { id: 'reviews', label: '분석', mobileLabel: '분석' },
] as const;

type TabId = typeof tabs[number]['id'];

export function ShoeDetailTabs({ shoe, similarShoesData, resolvedAlternatives }: ShoeDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('specs');


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
          {shoe.detailedSpecs && (
            <div className="border border-border bg-white p-5 md:p-6">
              <DetailedSpecs specs={shoe.detailedSpecs} showVerifiedConditions={Boolean(shoe.verification)} />
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

        <div className={activeTab === 'koreanfoot' ? '' : 'hidden'}>
          {shoe.koreanFootFit?.wideOptions === true && (
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
          {shoe.priceCheck && (
            <div className="border border-border bg-white p-5 text-sm leading-relaxed text-secondary md:p-6">
              {shoe.priceCheck.amount !== undefined && (
                <p className="mb-2 font-semibold text-primary">
                  {shoe.priceCheck.kind === 'official-listing' ? '공식몰 표시가' : shoe.priceCheck.kind === 'retailer' ? '판매점 기준가' : '과거 확인 금액'} {shoe.priceCheck.amount.toLocaleString('ko-KR')}원
                </p>
              )}
              <p>{shoe.priceCheck.note}</p>
              <a href={shoe.priceCheck.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block underline underline-offset-4">
                가격 확인 근거 · {shoe.priceCheck.checkedAt}
              </a>
            </div>
          )}
          {shoe.priceAnalysis && (shoe.price || shoe.priceAnalysis.msrp || shoe.priceAnalysis.streetPrice || shoe.priceAnalysis.valueAdvantages?.length || resolvedAlternatives?.some(alternative => alternative.slug)) && (
            <div className="border border-border bg-white p-5 md:p-6">
              <ValueAnalysis
                resolvedAlternatives={resolvedAlternatives}
                priceAnalysis={shoe.priceAnalysis}
                shoeName={shoe.name}
                brand={shoe.brand}
                price={shoe.price}
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
            {shoe.verification && (
                <aside className="mb-6 space-y-3 border-b border-border pb-6 text-sm text-secondary">
                  <h3 className="font-bold text-primary">출처 재확인 · {shoe.verification.checkedAt}</h3>
                  <p>{shoe.verification.scope}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {shoe.verification.sources.map((source) => (
                      <li key={source.url}><a className="underline" href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a> — {source.note}</li>
                    ))}
                  </ul>
                  {shoe.verification.limitations.map((note) => <p key={note}>{note}</p>)}
                </aside>
              )}
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
