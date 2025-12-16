'use client';

import dynamic from 'next/dynamic';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QuickSpecs } from '@/components/detail/quick-specs';
import { TargetRecommendation } from '@/components/detail/target-recommendation';
import { BiomechanicsAnalysis } from '@/components/detail/biomechanics-analysis';
import { InjuryPrevention } from '@/components/detail/injury-prevention';
import { KoreanFootFit } from '@/components/detail/korean-foot-fit';
import { KeyFeatures } from '@/components/detail/key-features';
import { ReviewsSection } from '@/components/detail/reviews-section';
import { DetailedSpecs } from '@/components/detail/detailed-specs';
import { ValueAnalysis } from '@/components/detail/value-analysis';
import { SimilarShoes } from '@/components/detail/similar-shoes';
import { FinalRating } from '@/components/detail/final-rating';
import { ReferencesSection } from '@/components/detail/references-section';
import type { Shoe } from '@/types/shoe';
import type { SimilarShoeInfo } from '@/lib/data/shoes';

// Recharts가 무거워서 dynamic import로 분리 (스펙 탭 클릭 시에만 로드)
const SpecRadarChart = dynamic(() => import('@/components/detail/spec-radar-chart').then(mod => ({ default: mod.SpecRadarChart })), {
  loading: () => (
    <div className="h-[300px] flex items-center justify-center text-slate-400">
      차트 로딩 중...
    </div>
  ),
  ssr: false,
});

type ShoeDetailTabsProps = {
  shoe: Shoe;
  similarShoesData?: SimilarShoeInfo[];
};

export function ShoeDetailTabs({ shoe, similarShoesData }: ShoeDetailTabsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full grid grid-cols-4 h-auto p-1 bg-white/50 backdrop-blur-sm sticky top-20 z-40">
        <TabsTrigger
          value="overview"
          className="py-3 text-xs sm:text-sm data-[state=active]:bg-[#4facfe] data-[state=active]:text-white"
        >
          개요
        </TabsTrigger>
        <TabsTrigger
          value="specs"
          className="py-3 text-xs sm:text-sm data-[state=active]:bg-[#4facfe] data-[state=active]:text-white"
        >
          스펙
        </TabsTrigger>
        <TabsTrigger
          value="fit"
          className="py-3 text-xs sm:text-sm data-[state=active]:bg-[#4facfe] data-[state=active]:text-white"
        >
          적합도
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="py-3 text-xs sm:text-sm data-[state=active]:bg-[#4facfe] data-[state=active]:text-white"
        >
          리뷰
        </TabsTrigger>
      </TabsList>

      {/* 개요 탭 */}
      <TabsContent value="overview" className="space-y-6">
        {/* 빠른 스펙 */}
        {shoe.specs && <QuickSpecs specs={shoe.specs} />}

        {/* 추천 대상 */}
        {shoe.targetUsers && (
          <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg">
            <TargetRecommendation targetUsers={shoe.targetUsers} />
          </div>
        )}

        {/* 핵심 특징 */}
        {shoe.features && shoe.features.length > 0 && (
          <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg">
            <KeyFeatures features={shoe.features} />
          </div>
        )}

        {/* 가격 분석 */}
        {shoe.priceAnalysis && (
          <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg">
            <ValueAnalysis
              priceAnalysis={shoe.priceAnalysis}
              shoeName={shoe.name}
              brand={shoe.brand}
              category={shoe.category}
              specs={shoe.specs}
            />
          </div>
        )}
      </TabsContent>

      {/* 스펙 탭 */}
      <TabsContent value="specs" className="space-y-6">
        {/* 레이더 차트 */}
        {shoe.specs && (
          <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg">
            <SpecRadarChart
              specs={shoe.specs}
              priceValueRating={shoe.priceAnalysis?.valueRating}
              shoeName={shoe.name}
            />
          </div>
        )}

        {/* 생체역학 분석 */}
        {shoe.biomechanics && (
          <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg">
            <BiomechanicsAnalysis biomechanics={shoe.biomechanics} weight={shoe.specs?.weight} />
          </div>
        )}

        {/* 상세 스펙 */}
        {shoe.detailedSpecs && (
          <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg">
            <DetailedSpecs specs={shoe.detailedSpecs} />
          </div>
        )}

        {/* 종합 평점 */}
        {shoe.specs && (
          <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg">
            <FinalRating
              specs={shoe.specs}
              priceAnalysis={shoe.priceAnalysis}
              shoeName={shoe.name}
              brand={shoe.brand}
              category={shoe.category}
              durabilityKm={shoe.specs?.durability ? { min: shoe.specs.durability - 100, max: shoe.specs.durability } : undefined}
            />
          </div>
        )}
      </TabsContent>

      {/* 적합도 탭 */}
      <TabsContent value="fit" className="space-y-6">
        {/* 부상 예방 */}
        {shoe.injuryPrevention && (
          <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg">
            <InjuryPrevention injuryPrevention={shoe.injuryPrevention} />
          </div>
        )}

        {/* 한국인 발 적합도 */}
        {shoe.koreanFootFit && (
          <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg">
            <KoreanFootFit
              koreanFootFit={shoe.koreanFootFit}
              shoeName={shoe.name}
              brand={shoe.brand}
            />
          </div>
        )}

        {/* 비슷한 신발 */}
        {similarShoesData && similarShoesData.length > 0 && (
          <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg">
            <SimilarShoes similarShoesData={similarShoesData} currentCategory={shoe.category} />
          </div>
        )}
      </TabsContent>

      {/* 리뷰 탭 */}
      <TabsContent value="reviews" className="space-y-6">
        {/* 리뷰 섹션 */}
        {shoe.reviews && shoe.reviews.length > 0 ? (
          <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg">
            <ReviewsSection reviews={shoe.reviews} />
          </div>
        ) : (
          <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg text-center">
            <p className="text-slate-500">아직 등록된 리뷰가 없습니다.</p>
          </div>
        )}

        {/* 참고자료 */}
        <div className="bg-white/95 rounded-3xl p-6 lg:p-8 shadow-lg">
          <ReferencesSection />
        </div>
      </TabsContent>
    </Tabs>
  );
}
