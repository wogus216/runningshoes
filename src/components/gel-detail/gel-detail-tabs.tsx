'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { Gel, SimilarGelInfo } from '@/types/gel';
import type { Route } from 'next';
import { NutritionSpecs } from './nutrition-specs';
import { CarbScience } from './carb-science';
import { GITolerance } from './gi-tolerance';
import { FlavorTexture } from './flavor-texture';
import { UsageGuide } from './usage-guide';
import { DollarSign, Star, TrendingDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type GelDetailTabsProps = {
  gel: Gel;
  similarGelsData?: SimilarGelInfo[];
};

const tabs = [
  { id: 'nutrition', label: '영양성분', mobileLabel: '영양' },
  { id: 'carb', label: '탄수화물 과학', mobileLabel: '과학' },
  { id: 'gi', label: '위장 안정성', mobileLabel: '위장' },
  { id: 'flavor', label: '맛/식감', mobileLabel: '맛' },
  { id: 'usage', label: '섭취 가이드', mobileLabel: '가이드' },
  { id: 'price', label: '가격', mobileLabel: '가격' },
  { id: 'reviews', label: '리뷰', mobileLabel: '리뷰' },
] as const;

type TabId = typeof tabs[number]['id'];

export function GelDetailTabs({ gel, similarGelsData }: GelDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('nutrition');

  // 별점 렌더링
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-3 h-3 ${
              star <= rating
                ? 'fill-sky-500 text-sky-500'
                : 'text-border'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* 탭 네비게이션 */}
      <div className="sticky top-14 z-40 overflow-hidden rounded-[28px] border border-sky-950/20 bg-[rgba(8,18,38,0.92)] shadow-[0_22px_44px_-36px_rgba(8,18,38,0.52)] backdrop-blur-xl">
        <div className="mb-2 px-4 pt-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-100/45">Gel Panel</p>
        </div>
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "whitespace-nowrap rounded-full px-3 py-2.5 text-xs font-medium transition md:px-5 md:py-3 md:text-sm",
                activeTab === tab.id
                  ? "bg-white text-slate-950"
                  : "text-white/60 hover:bg-white/8 hover:text-white"
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
        {/* 영양성분 탭 */}
        {activeTab === 'nutrition' && (
          <div className="section-card border border-[var(--accent-line)] bg-white/88 p-6">
            <NutritionSpecs gel={gel} />
          </div>
        )}

        {/* 탄수화물 과학 탭 */}
        {activeTab === 'carb' && (
          <div className="section-card border border-[var(--accent-line)] bg-white/88 p-6">
            <CarbScience gel={gel} />
          </div>
        )}

        {/* 위장 안정성 탭 */}
        {activeTab === 'gi' && (
          <div className="section-card border border-[var(--accent-line)] bg-white/88 p-6">
            <GITolerance gel={gel} />
          </div>
        )}

        {/* 맛/식감 탭 */}
        {activeTab === 'flavor' && (
          <div className="section-card border border-[var(--accent-line)] bg-white/88 p-6">
            <FlavorTexture gel={gel} />
          </div>
        )}

        {/* 섭취 가이드 탭 */}
        {activeTab === 'usage' && (
          <div className="section-card border border-[var(--accent-line)] bg-white/88 p-6">
            <UsageGuide gel={gel} />
          </div>
        )}

        {/* 가격 탭 */}
        {activeTab === 'price' && gel.priceAnalysis && (
          <div className="section-card border border-[var(--accent-line)] bg-white/88 p-6">
            <h2 className="font-bold mb-4 md:mb-5 text-primary">가격 분석</h2>

            {/* 가격 정보 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div className="rounded-xl bg-sky-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-sky-700" />
                  <h3 className="text-sm font-bold text-primary">개당 가격</h3>
                </div>
                <p className="text-2xl font-bold text-primary">
                  ₩{gel.priceAnalysis.msrp.toLocaleString()}
                </p>
              </div>

              {gel.priceAnalysis.bulkPrice && (
                <div className="rounded-xl bg-sky-50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-4 h-4 text-sky-700" />
                    <h3 className="text-sm font-bold text-primary">묶음 구매</h3>
                  </div>
                  <p className="text-2xl font-bold text-sky-700">
                    ₩{gel.priceAnalysis.bulkPrice.toLocaleString()}
                  </p>
                  <p className="text-xs text-tertiary mt-1">
                    개당 ₩{(gel.priceAnalysis.msrp - gel.priceAnalysis.bulkPrice).toLocaleString()} 절약
                  </p>
                </div>
              )}

              <div className="rounded-xl bg-sky-50 p-4">
                <h3 className="text-sm font-bold text-primary mb-2">풀마라톤 1회 비용</h3>
                <p className="text-xl font-bold text-primary">
                  ₩{gel.priceAnalysis.marathonCost.toLocaleString()}
                </p>
              </div>

              <div className="rounded-xl bg-sky-50 p-4">
                <h3 className="text-sm font-bold text-primary mb-2">가격대</h3>
                <p className="text-sm text-secondary capitalize">
                  {gel.priceAnalysis.priceTier === 'budget' && '예산형'}
                  {gel.priceAnalysis.priceTier === 'entry' && '입문형'}
                  {gel.priceAnalysis.priceTier === 'mid' && '중가형'}
                  {gel.priceAnalysis.priceTier === 'premium' && '프리미엄'}
                  {gel.priceAnalysis.priceTier === 'super-premium' && '슈퍼 프리미엄'}
                </p>
              </div>
            </div>

            {/* 양갱 비교 */}
            <div className="mb-5 rounded-xl border border-sky-200 bg-sky-50 p-4">
              <h3 className="mb-2 text-sm font-bold text-sky-700">양갱 대비 가성비</h3>
              <p className="text-sm text-secondary leading-relaxed">
                {gel.priceAnalysis.yangGangComparison}
              </p>
            </div>

            {/* 가치 평가 바 */}
            <div className="mb-5">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-primary font-bold">가치 평가</span>
                <span className="font-medium text-primary">
                  {gel.priceAnalysis.valueRating}/10
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-sky-100">
                <div
                  className={cn(
                    "h-full rounded-full transition-all",
                    gel.priceAnalysis.valueRating >= 8 ? "bg-sky-600" :
                    gel.priceAnalysis.valueRating >= 6 ? "bg-sky-500" :
                    "bg-sky-400"
                  )}
                  style={{ width: `${gel.priceAnalysis.valueRating * 10}%` }}
                />
              </div>
            </div>

            {/* 가격 정보 출처 */}
            <div className="text-xs text-tertiary">
              <p>가격 확인일: {gel.priceAnalysis.priceCheckedAt}</p>
              <p>출처: {gel.priceAnalysis.priceSource}</p>
            </div>

            {/* 비슷한 가격대 대안 */}
            {gel.priceAnalysis.alternatives.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-bold text-primary mb-3">비슷한 가격대 대안</h3>
                <div className="flex flex-wrap gap-2">
                  {gel.priceAnalysis.alternatives.map((alt, index) => (
                    <Link
                      key={index}
                      href={`/gels/${alt}` as Route}
                      className="rounded-lg border border-sky-100 bg-sky-50 px-3 py-1.5 text-sm text-secondary transition hover:border-sky-200 hover:bg-sky-100 hover:text-sky-700"
                    >
                      {alt}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 리뷰 탭 */}
        {activeTab === 'reviews' && (
          <div className="section-card border border-[var(--accent-line)] bg-white/88 p-6">
            <h2 className="font-bold mb-4 md:mb-5 text-primary">사용자 리뷰</h2>
            {gel.reviews && gel.reviews.length > 0 ? (
              <div className="space-y-4">
                {gel.reviews.map((review, index) => (
                  <div key={index} className="rounded-xl border border-sky-100 bg-sky-50 p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm font-medium text-primary mb-1">
                          {review.userType}
                        </p>
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <p className="text-sm text-secondary leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-secondary">아직 등록된 리뷰가 없습니다.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 비슷한 젤 추천 (탭 외부, 하단에 고정) */}
      {similarGelsData && similarGelsData.length > 0 && (
        <div className="section-card border border-[var(--accent-line)] bg-white/88 p-6">
          <h2 className="font-bold mb-4 md:mb-5 text-primary">비슷한 젤</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {similarGelsData.map((similarGel) => (
              <Link
                key={similarGel.slug}
                href={`/gels/${similarGel.slug}` as Route}
                className="group rounded-[22px] border border-sky-100 bg-white/84 p-4 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/60"
              >
                {/* 이미지 */}
                {similarGel.image ? (
                  <div className="mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,247,255,0.88))]">
                    <Image
                      src={similarGel.image}
                      alt={`${similarGel.brand} ${similarGel.name}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="mb-3 flex aspect-square items-center justify-center rounded-lg bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,247,255,0.88))]">
                    <span className="text-4xl opacity-20">⚡</span>
                  </div>
                )}

                {/* 정보 */}
                <div className="space-y-1">
                  <p className="text-xs text-tertiary">{similarGel.brand}</p>
                  <h3 className="text-sm font-bold text-primary transition group-hover:text-sky-700">
                    {similarGel.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {renderStars(similarGel.rating)}
                    <span className="text-xs text-tertiary">({similarGel.rating})</span>
                  </div>
                  {similarGel.price && (
                    <p className="text-sm font-bold text-primary">
                      ₩{similarGel.price.toLocaleString()}
                    </p>
                  )}
                  {similarGel.nutritionFacts && (
                    <div className="flex gap-2 text-xs text-tertiary mt-2">
                      <span>{similarGel.nutritionFacts.totalCarbs}g 탄수화물</span>
                      {similarGel.nutritionFacts.caffeine > 0 && (
                        <span>· {similarGel.nutritionFacts.caffeine}mg 카페인</span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
