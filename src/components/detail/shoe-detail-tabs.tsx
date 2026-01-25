'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { QuickSpecs } from '@/components/detail/quick-specs';
import { BiomechanicsAnalysis } from '@/components/detail/biomechanics-analysis';
import { InjuryPrevention } from '@/components/detail/injury-prevention';
import { KoreanFootFit } from '@/components/detail/korean-foot-fit';
import { ValueAnalysis } from '@/components/detail/value-analysis';
import { ReviewsSection } from '@/components/detail/reviews-section';
import { SimilarShoes } from '@/components/detail/similar-shoes';
import { cn } from '@/lib/utils';
import type { Shoe } from '@/types/shoe';
import type { SimilarShoeInfo } from '@/lib/data/shoes';
import { DetailSpecAd } from '@/components/ads/ad-unit';

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
};

const tabs = [
  { id: 'specs', label: '스펙', mobileLabel: '스펙' },
  { id: 'biomechanics', label: '생체역학', mobileLabel: '역학' },
  { id: 'injury', label: '부상 예방', mobileLabel: '부상' },
  { id: 'koreanfoot', label: '한국인 발', mobileLabel: '발형' },
  { id: 'price', label: '가격', mobileLabel: '가격' },
  { id: 'reviews', label: '리뷰', mobileLabel: '리뷰' },
] as const;

type TabId = typeof tabs[number]['id'];

export function ShoeDetailTabs({ shoe, similarShoesData }: ShoeDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('specs');

  return (
    <div className="space-y-4">
      {/* 탭 네비게이션 */}
      <div className="section-card sticky top-14 z-40">
        <div className="flex overflow-x-auto border-b border-border scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "tab-btn px-3 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-medium whitespace-nowrap transition",
                activeTab === tab.id && "active"
              )}
            >
              <span className="md:hidden">{tab.mobileLabel}</span>
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 탭 콘텐츠 */}
      <div className="space-y-4">
        {/* 스펙 탭 */}
        {activeTab === 'specs' && (
          <>
            {shoe.specs && (
              <div className="section-card p-6">
                <QuickSpecs specs={shoe.specs} koreanFootFit={shoe.koreanFootFit} />
              </div>
            )}
            {shoe.specs && (
              <div className="section-card p-6">
                <h2 className="font-bold mb-5 text-primary">스펙 차트</h2>
                <SpecRadarChart
                  specs={shoe.specs}
                  priceValueRating={shoe.priceAnalysis?.valueRating}
                  shoeName={shoe.name}
                />
              </div>
            )}
            {/* 스펙 아래 광고 */}
            <DetailSpecAd />
          </>
        )}

        {/* 생체역학 탭 */}
        {activeTab === 'biomechanics' && shoe.biomechanics && (
          <div className="section-card p-6">
            <BiomechanicsAnalysis biomechanics={shoe.biomechanics} weight={shoe.specs?.weight} />
          </div>
        )}

        {/* 부상 예방 탭 */}
        {activeTab === 'injury' && shoe.injuryPrevention && (
          <div className="section-card p-6">
            <InjuryPrevention injuryPrevention={shoe.injuryPrevention} />
          </div>
        )}

        {/* 한국인 발 탭 */}
        {activeTab === 'koreanfoot' && (
          <>
            {shoe.koreanFootFit && (
              <div className="section-card p-6">
                <KoreanFootFit
                  koreanFootFit={shoe.koreanFootFit}
                  shoeName={shoe.name}
                  brand={shoe.brand}
                />
              </div>
            )}
            {similarShoesData && similarShoesData.length > 0 && (
              <SimilarShoes currentShoe={shoe} similarShoesData={similarShoesData} currentCategory={shoe.category} />
            )}
          </>
        )}

        {/* 가격 탭 */}
        {activeTab === 'price' && shoe.priceAnalysis && (
          <div className="section-card p-6">
            <ValueAnalysis
              priceAnalysis={shoe.priceAnalysis}
              shoeName={shoe.name}
              brand={shoe.brand}
              category={shoe.category}
              specs={shoe.specs}
            />
          </div>
        )}

        {/* 리뷰 탭 */}
        {activeTab === 'reviews' && (
          <div className="section-card p-6">
            {shoe.reviews && shoe.reviews.length > 0 ? (
              <ReviewsSection reviews={shoe.reviews} />
            ) : (
              <div className="text-center py-8">
                <p className="text-secondary">아직 등록된 리뷰가 없습니다.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
