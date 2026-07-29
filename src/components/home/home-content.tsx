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
import { categoryOrder } from "@/types/shoe";
import type { GridShoe } from "@/lib/data/shoes";
import { TechBanner } from "@/components/home/tech-banner";
import { GelBanner } from "@/components/home/gel-banner";
import { GuideBanner } from "@/components/home/guide-banner";
import { AdSlot } from "@/components/ads/ad-slot";
import { ADSENSE_SLOTS } from "@/lib/constants";

interface HomeContentProps {
  initialShoes: GridShoe[];
}

export function HomeContent({ initialShoes }: HomeContentProps) {
  const searchParams = useSearchParams();
  const quickSearches = [
    { label: "첫 10K", query: "입문화", hint: "과한 스펙보다 편한 첫 켤레" },
    { label: "무릎 부담 감소", query: "무릎", hint: "안정성과 쿠션 우선" },
    { label: "발볼 여유", query: "발볼", hint: "답답한 라스트 피하기" },
    { label: "템포 업", query: "레이싱", hint: "반응성과 경량감 중심" },
  ];

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
  const heroStats = [
    { label: "모델", value: `${initialShoes.length}+` },
    { label: "브랜드", value: `${totalBrands}` },
    { label: "업데이트", value: "2026.03" },
  ];

  const categories = useMemo(() => {
    const existingCategories = new Set(filteredShoes.map((shoe) => shoe.category));
    return categoryOrder.filter((cat) => existingCategories.has(cat));
  }, [filteredShoes]);

  const brands = useMemo(() => Array.from(new Set(filteredShoes.map(s => s.brand))).sort(), [filteredShoes]);

  const handleTagClick = useCallback((tag: string) => {
    setSearchQuery(tag);
  }, [setSearchQuery]);

  const scrollToFilterPanel = useCallback(() => {
    document.getElementById('filter-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="space-y-8">
      <section className="grid overflow-hidden border-2 border-primary bg-background lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b-2 border-primary px-5 py-7 md:px-8 md:py-9 lg:border-b-0 lg:border-r-2">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-secondary">
            <span>INK &amp; SIGNAL — LAB INDEX</span>
            <span className="flex flex-wrap gap-x-3">
              {heroStats.map((stat, idx) => (
                <span key={stat.label}>
                  <b className="text-accent">{stat.value}</b> {stat.label}
                  {idx < heroStats.length - 1 ? " ·" : ""}
                </span>
              ))}
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="mt-4 text-balance text-4xl font-black leading-[0.95] tracking-tight text-primary md:text-6xl">
              러닝화를 감으로 고르지 않게.
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
              단순히 브랜드를 훑는 곳이 아니라, 쿠션감, 안정성, 발볼, 용도까지 빠르게 걸러서 판단할 수 있는 러닝화 에디토리얼 인덱스로 다시 정리했습니다.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/recommend"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[4px] bg-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E64500]"
            >
              맞춤 추천 시작
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <button
              onClick={scrollToFilterPanel}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[4px] border border-primary bg-background px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-[var(--accent-soft)]"
            >
              필터부터 바로 보기
            </button>
          </div>

          <div className="mt-7 grid gap-px border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
            {quickSearches.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setSearchQuery(item.query);
                  scrollToFilterPanel();
                }}
                className="group bg-background p-4 text-left transition-colors hover:bg-[var(--accent-soft)]"
              >
                <p className="text-sm font-bold text-primary">{item.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-secondary">{item.hint}</p>
                <p className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.query}
                </p>
              </button>
            ))}
          </div>
        </div>

        <aside className="relative bg-[var(--navy)] px-6 py-8 text-white md:px-8 md:py-9">
          <div
            className="absolute inset-x-0 top-0 h-1.5"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, var(--accent) 0 18px, transparent 18px 26px)" }}
            aria-hidden="true"
          />
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">Start From</p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-white">많이 찾는 시작 기준</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            검색창에 아무 말이나 넣기 전에, 러너들이 실제로 많이 걸러보는 조건부터 시작하세요.
          </p>

          <div className="mt-6 border-t border-white/15">
            {[
              { label: "쿠션 우선", query: "쿠션화" },
              { label: "가성비 우선", query: "가성비" },
              { label: "풀코스 준비", query: "마라톤" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setSearchQuery(item.query);
                  scrollToFilterPanel();
                }}
                className="flex w-full items-center justify-between border-b border-white/15 py-3 text-left transition-colors hover:bg-white/5"
              >
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">{item.query}</p>
                </div>
                <span className="font-mono text-white/50">+</span>
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-px border border-white/15 bg-white/15 text-center">
            <div className="bg-[var(--navy)] px-3 py-3">
              <p className="text-lg font-bold text-white">비교</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Spec</p>
            </div>
            <div className="bg-[var(--navy)] px-3 py-3">
              <p className="text-lg font-bold text-white">추천</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Match</p>
            </div>
            <div className="bg-[var(--navy)] px-3 py-3">
              <p className="text-lg font-bold text-white">리뷰</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">Notes</p>
            </div>
          </div>
        </aside>
      </section>

      {/* 필터 패널 */}
      <div id="filter-panel" className="scroll-mt-24 md:scroll-mt-28">
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
      <div className="flex flex-col gap-3 border-2 border-primary bg-background p-4 sm:gap-4 sm:p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">Search Result</p>
          <p className="mt-2 text-xl font-black leading-tight tracking-tight text-primary sm:text-2xl">
          {activeFilterCount > 0 ? (
            <>
              <span className="text-accent">{filteredShoes.length}</span>개가 현재 조건에 맞습니다
            </>
          ) : (
            <>
              지금 비교 가능한 러닝화 <span className="text-accent">{filteredShoes.length}</span>개
            </>
          )}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-px border border-border bg-border text-sm text-secondary">
          <Link
            href="/recommend"
            className="flex min-h-[72px] flex-col justify-between bg-background p-3 transition-colors hover:bg-[var(--accent-soft)] sm:min-h-[88px] sm:p-4"
          >
            <Sparkles className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-[0.2em]">추천</span>
          </Link>
          <Link
            href="/compare"
            className="flex min-h-[72px] flex-col justify-between bg-background p-3 transition-colors hover:bg-[var(--accent-soft)] sm:min-h-[88px] sm:p-4"
          >
            <GitCompare className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-[0.2em]">비교</span>
          </Link>
          <button
            onClick={scrollToFilterPanel}
            className="flex min-h-[72px] flex-col justify-between bg-background p-3 text-left transition-colors hover:bg-[var(--accent-soft)] sm:min-h-[88px] sm:p-4"
          >
            <SlidersHorizontal className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-[0.2em]">필터</span>
          </button>
        </div>
      </div>

      <ViewToggle view={view} onChange={handleViewChange} categories={categories} brands={brands} />


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

      {/* 홈 하단 광고 — 결과 그리드와 Beyond Shoes 사이 (필터 리플로우 영향 적은 고정 위치) */}
      <AdSlot slot={ADSENSE_SLOTS.homeBottom} format="auto" label="홈 하단 광고" />

      <section className="space-y-4 pt-2">
        <div className="flex flex-col gap-2 border-b-2 border-primary pb-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-secondary">Beyond Shoes</p>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">· TECH / GEL / GUIDE</span>
            </div>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-primary">신발만 보고 끝내지 않게</h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-secondary">
            러닝 테크, 젤, 장거리 가이드까지 한 흐름으로 연결해서 보는 편이 더 실용적입니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <TechBanner />
          <GelBanner />
          <GuideBanner />
        </div>
      </section>
    </div>
  );
}
