'use client';

import { useMemo, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Sparkles, GitCompare, SlidersHorizontal } from "lucide-react";
import { BrandView } from "@/components/brand-view";
import { HierarchyView } from "@/components/hierarchy-view";
import { ViewToggle, type ViewMode } from "@/components/view-toggle";
import { FilterPanel } from "@/components/filters/filter-panel";
import { useShoeFilters } from "@/hooks/useShoeFilters";
import { categoryOrder, getBrandsFromShoes } from "@/lib/data/shoes";
import type { Shoe } from "@/types/shoe";
import { MainHeroAd, MainMidListAd } from "@/components/ads/ad-unit";
import { TechBanner } from "@/components/home/tech-banner";

interface HomeContentProps {
  initialShoes: Shoe[];
}

export function HomeContent({ initialShoes }: HomeContentProps) {
  const searchParams = useSearchParams();

  // URL에서 view 파라미터 읽기 (기본값: hierarchy)
  const viewParam = searchParams.get('view');
  const initialView: ViewMode = viewParam === 'brand' ? 'brand' : 'hierarchy';
  const [view, setView] = useState<ViewMode>(initialView);

  // view 변경 시 URL 업데이트
  const handleViewChange = useCallback((newView: ViewMode) => {
    setView(newView);
    const params = new URLSearchParams(searchParams.toString());
    if (newView === 'hierarchy') {
      params.delete('view'); // 기본값이면 URL에서 제거
    } else {
      params.set('view', newView);
    }
    const queryString = params.toString();
    window.history.replaceState(null, '', queryString ? `/?${queryString}` : '/');
  }, [searchParams]);

  // URL 파라미터 변경 시 view 동기화
  useEffect(() => {
    const urlView = searchParams.get('view');
    const newView: ViewMode = urlView === 'brand' ? 'brand' : 'hierarchy';
    setView(newView);
  }, [searchParams]);

  const {
    filters,
    filterOptions,
    filteredShoes,
    activeFilterCount,
    setSearchQuery,
    toggleCategory,
    toggleBrand,
    setPriceRange,
    toggleToBoxWidth,
    toggleFlatFootCompatibility,
    setCarbonPlate,
    toggleInjuryType,
    resetFilters,
  } = useShoeFilters(initialShoes);

  const totalBrands = useMemo(() => new Set(initialShoes.map((shoe) => shoe.brand)).size, [initialShoes]);

  const categories = useMemo(() => {
    const existingCategories = new Set(filteredShoes.map((shoe) => shoe.category));
    return categoryOrder.filter((cat) => existingCategories.has(cat));
  }, [filteredShoes]);

  const brands = useMemo(() => getBrandsFromShoes(filteredShoes), [filteredShoes]);

  const handleTagClick = useCallback((tag: string) => {
    setSearchQuery(tag);
  }, [setSearchQuery]);

  return (
    <div className="space-y-6">
      {/* 히어로 */}
      <section className="py-4 md:py-8 text-center">
        <p className="text-sm text-secondary mb-2">{initialShoes.length}개 모델 · {totalBrands}개 브랜드 · 전문 데이터 분석</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight text-primary">
          나에게 맞는 러닝화,<br/>
          <span className="text-accent">데이터로 찾다</span>
        </h1>
        <p className="text-secondary text-sm max-w-lg mx-auto px-4 md:px-0 mb-4 md:mb-6">
          스펙, 착화감, 가성비까지 꼼꼼하게 분석해서<br className="hidden sm:block"/>
          당신에게 딱 맞는 러닝화를 찾아드려요
        </p>

        {/* 질문형 태그 */}
        <div className="flex flex-wrap justify-center gap-2 px-4 md:px-0 mb-4 md:mb-6">
          <button
            onClick={() => setSearchQuery('마라톤')}
            className="px-3 py-1.5 bg-surface rounded-full text-sm hover:bg-border transition"
          >
            🏃 첫 마라톤 준비 중
          </button>
          <button
            onClick={() => setSearchQuery('무릎')}
            className="px-3 py-1.5 bg-surface rounded-full text-sm hover:bg-border transition"
          >
            🦵 무릎이 아파요
          </button>
          <button
            onClick={() => setSearchQuery('발볼')}
            className="px-3 py-1.5 bg-surface rounded-full text-sm hover:bg-border transition"
          >
            👟 발볼이 넓어요
          </button>
          <button
            onClick={() => setSearchQuery('가성비')}
            className="px-3 py-1.5 bg-surface rounded-full text-sm hover:bg-border transition"
          >
            💰 가성비 좋은 신발
          </button>
        </div>

        <Link
          href="/recommend"
          className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition"
        >
          맞춤 추천 받기
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </Link>
      </section>

      {/* 기능 소개 */}
      <section className="grid grid-cols-3 gap-3 px-4 md:px-0">
        <Link
          href="/recommend"
          className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-border hover:border-accent/30 hover:shadow-sm transition text-center"
        >
          <span className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-accent" />
          </span>
          <span className="text-xs md:text-sm font-medium text-primary">맞춤 추천</span>
        </Link>
        <Link
          href="/compare"
          className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-border hover:border-positive/30 hover:shadow-sm transition text-center"
        >
          <span className="w-10 h-10 bg-positive/10 rounded-xl flex items-center justify-center">
            <GitCompare className="w-5 h-5 text-positive" />
          </span>
          <span className="text-xs md:text-sm font-medium text-primary">신발 비교</span>
        </Link>
        <button
          onClick={() => document.getElementById('filter-panel')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-border hover:border-warning/30 hover:shadow-sm transition text-center"
        >
          <span className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center">
            <SlidersHorizontal className="w-5 h-5 text-warning" />
          </span>
          <span className="text-xs md:text-sm font-medium text-primary">상세 필터</span>
        </button>
      </section>

      {/* 러닝 신발 테크 배너 */}
      <TechBanner />

      {/* 필터 패널 */}
      <div id="filter-panel">
        <FilterPanel
        filters={filters}
        filterOptions={filterOptions}
        activeFilterCount={activeFilterCount}
        onSearchChange={setSearchQuery}
        onToggleCategory={toggleCategory}
        onToggleBrand={toggleBrand}
        onSetPriceRange={setPriceRange}
        onToggleToBoxWidth={toggleToBoxWidth}
        onToggleFlatFoot={toggleFlatFootCompatibility}
        onToggleCarbonPlate={setCarbonPlate}
        onToggleInjuryType={toggleInjuryType}
        onReset={resetFilters}
        />
      </div>

      {/* 필터 결과 */}
      <div className="flex items-center justify-center">
        <p className="text-sm text-secondary">
          {activeFilterCount > 0 ? (
            <>
              <span className="font-semibold text-accent">{filteredShoes.length}</span>개 신발이 검색되었습니다
            </>
          ) : (
            <>
              총 <span className="font-semibold text-accent">{filteredShoes.length}</span>개 신발
            </>
          )}
        </p>
      </div>

      <ViewToggle view={view} onChange={handleViewChange} categories={categories} brands={brands} />

      {/* 광고 - 신발 목록 전 (20개 이상일 때) */}
      {filteredShoes.length >= 20 && <MainMidListAd />}

      {filteredShoes.length > 0 ? (
        view === "hierarchy" ? (
          <HierarchyView shoes={filteredShoes} onTagClick={handleTagClick} />
        ) : (
          <BrandView shoes={filteredShoes} onTagClick={handleTagClick} />
        )
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-secondary">검색 결과가 없습니다</p>
          <p className="text-sm text-tertiary mt-2">필터 조건을 변경해보세요</p>
        </div>
      )}

      {/* 광고 - 신발 목록 아래 */}
      <MainHeroAd />
    </div>
  );
}
