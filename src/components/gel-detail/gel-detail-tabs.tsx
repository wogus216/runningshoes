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
import Link from 'next/link';
import Image from 'next/image';
import { img } from '@/lib/image';

type GelDetailTabsProps = {
  gel: Gel;
  similarGelsData?: SimilarGelInfo[];
};

const tabs = [
  { id: 'nutrition', label: '영양성분', mobileLabel: '영양' },
  { id: 'carb', label: '탄수화물 과학', mobileLabel: '과학' },
  { id: 'gi', label: '섭취 시 확인', mobileLabel: '섭취' },
  { id: 'flavor', label: '맛 옵션', mobileLabel: '맛' },
  { id: 'usage', label: '섭취 가이드', mobileLabel: '가이드' },
  { id: 'reviews', label: '적합성 분석', mobileLabel: '적합성' },
] as const;

type TabId = typeof tabs[number]['id'];

export function GelDetailTabs({ gel, similarGelsData }: GelDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('nutrition');
  const availableTabs = tabs
    .filter(tab => tab.id !== 'reviews' || gel.reviews.length > 0)
    .filter(tab =>
      tab.id !== 'flavor'
      || gel.flavorProfile.flavors.length > 0
      || gel.flavorProfile.texture
      || gel.flavorProfile.aftertaste
    );

  return (
    <div className="space-y-4">
      {/* 탭 네비게이션 */}
      <div className="sticky top-14 z-40 overflow-hidden rounded-[4px] border border-sky-950/20 bg-[rgba(8,18,38,0.92)] backdrop-blur-xl">
        <div role="group" aria-label="젤 상세 항목" className="flex overflow-x-auto">
          {availableTabs.map((tab) => (
            <button
              key={tab.id}
              aria-label={tab.label}
              aria-pressed={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "min-h-11 whitespace-nowrap rounded-full px-3 py-2.5 text-xs font-medium transition md:px-5 md:py-3 md:text-sm",
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

        {/* 리뷰 탭 */}
        {activeTab === 'reviews' && (
          <div className="section-card border border-[var(--accent-line)] bg-white/88 p-6">
            <h2 className="font-bold mb-2 text-primary">러너 유형별 적합성 분석</h2>
            <p className="mb-4 text-xs leading-relaxed text-slate-500 md:mb-5">
              성분·용량·제형 데이터를 러너 유형별로 해석한 결과입니다. 실사용자 후기를 수집하지 않으므로 실제 섭취 후기가 아닙니다.
            </p>
            {gel.reviews && gel.reviews.length > 0 ? (
              <div className="space-y-4">
                {gel.reviews.map((review, index) => (
                  <div key={index} className="rounded-[4px] border border-sky-100 bg-sky-50 p-4">
                    <p className="mb-3 text-sm font-medium text-primary">
                      {review.userType}
                    </p>
                    <p className="text-sm text-secondary leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-secondary">아직 등록된 분석이 없습니다.</p>
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
                  <div className="mb-3 flex h-24 sm:h-auto sm:aspect-square items-center justify-center overflow-hidden rounded-[4px] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,244,237,0.88))]">
                    <Image
                      src={img(similarGel.image)}
                      alt={`${similarGel.brand} ${similarGel.name}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="mb-3 flex h-24 sm:h-auto sm:aspect-square items-center justify-center rounded-[4px] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,244,237,0.88))]">
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
                  </div>
                  {similarGel.price && (
                    <p className="text-sm font-bold text-primary">
                      ₩{similarGel.price.toLocaleString()}
                    </p>
                  )}
                  {similarGel.nutritionFacts && (
                    <div className="flex gap-2 text-xs text-tertiary mt-2">
                      <span>{similarGel.nutritionFacts.totalCarbs === undefined ? '탄수화물 미확인' : `${similarGel.nutritionFacts.totalCarbs}g 탄수화물`}</span>
                      {(similarGel.nutritionFacts.caffeine ?? 0) > 0 && (
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
