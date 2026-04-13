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
import type { CardShoe } from "@/lib/data/shoes";
import { TechBanner } from "@/components/home/tech-banner";
import { GelBanner } from "@/components/home/gel-banner";
import { GuideBanner } from "@/components/home/guide-banner";

interface HomeContentProps {
  initialShoes: CardShoe[];
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
      <section className="relative overflow-hidden rounded-[36px] border border-[var(--accent-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(243,249,255,0.96)_52%,rgba(231,244,255,0.94)_100%)] px-5 py-6 shadow-[0_28px_70px_-52px_rgba(8,18,38,0.4)] md:px-8 md:py-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-[rgba(14,165,233,0.18)] blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(56,189,248,0.14)] blur-3xl" />
          <div className="absolute bottom-0 right-10 h-28 w-28 rounded-full bg-[rgba(2,132,199,0.12)] blur-3xl" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.25fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {heroStats.map((stat) => (
                <span
                  key={stat.label}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 backdrop-blur"
                >
                  <span className="text-slate-950">{stat.value}</span>
                  {stat.label}
                </span>
              ))}
            </div>

            <div className="max-w-3xl space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-sky-700">Performance Editorial</p>
              <h1 className="text-balance text-4xl font-black leading-[0.92] tracking-tight text-slate-950 md:text-6xl">
                러닝화를 감으로 고르지 않게.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                단순히 브랜드를 훑는 곳이 아니라, 쿠션감, 안정성, 발볼, 용도까지 빠르게 걸러서 판단할 수 있는 러닝화 에디토리얼 인덱스로 다시 정리했습니다.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/recommend"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_42px_-28px_rgba(2,132,199,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--navy-soft)]"
              >
                맞춤 추천 시작
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                onClick={scrollToFilterPanel}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[var(--accent-line)] bg-white/82 px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white"
              >
                필터부터 바로 보기
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {quickSearches.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setSearchQuery(item.query);
                    scrollToFilterPanel();
                  }}
                  className="group rounded-[24px] border border-[var(--accent-line)] bg-white/76 p-4 text-left shadow-[0_20px_45px_-42px_rgba(8,18,38,0.38)] backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-sky-300 hover:bg-white"
                >
                  <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.hint}</p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 group-hover:text-sky-800">
                    {item.query}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <aside className="relative overflow-hidden rounded-[30px] border border-sky-950/20 bg-[linear-gradient(165deg,rgba(8,18,38,0.98)_0%,rgba(15,23,42,0.95)_58%,rgba(12,74,110,0.96)_100%)] p-5 text-white shadow-[0_28px_60px_-38px_rgba(8,18,38,0.82)] md:p-6">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-sky-200/85">Start From</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white">많이 찾는 시작 기준</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              검색창에 아무 말이나 넣기 전에, 러너들이 실제로 많이 걸러보는 조건부터 시작하세요.
            </p>

            <div className="mt-6 space-y-3">
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
                  className="flex w-full items-center justify-between rounded-[22px] border border-white/10 bg-white/6 px-4 py-3 text-left transition-all duration-200 hover:border-sky-300/25 hover:bg-white/10"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-sky-200/70">{item.query}</p>
                  </div>
                  <span className="text-lg text-sky-200/80">+</span>
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
              <div className="rounded-2xl bg-white/5 px-3 py-3">
                <p className="text-lg font-bold text-white">비교</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-sky-200/60">Spec</p>
              </div>
              <div className="rounded-2xl bg-white/5 px-3 py-3">
                <p className="text-lg font-bold text-white">추천</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-sky-200/60">Match</p>
              </div>
              <div className="rounded-2xl bg-white/5 px-3 py-3">
                <p className="text-lg font-bold text-white">리뷰</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-sky-200/60">Notes</p>
              </div>
            </div>
          </aside>
        </div>
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
      <div className="flex flex-col gap-3 rounded-[26px] border border-[var(--accent-line)] bg-white/74 p-4 shadow-[0_20px_45px_-42px_rgba(8,18,38,0.34)] backdrop-blur sm:gap-4 sm:rounded-[30px] sm:p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Search Result</p>
          <p className="mt-2 text-xl font-black leading-tight tracking-tight text-slate-950 sm:text-2xl">
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

        <div className="grid grid-cols-3 gap-2 text-sm text-slate-600 sm:gap-3">
          <Link
            href="/recommend"
            className="flex min-h-[72px] flex-col justify-between rounded-[18px] border border-sky-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(236,248,255,0.96))] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-sky-300 sm:min-h-[88px] sm:rounded-[22px] sm:p-4"
          >
            <Sparkles className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 sm:text-xs sm:tracking-[0.2em]">추천</span>
          </Link>
          <Link
            href="/compare"
            className="flex min-h-[72px] flex-col justify-between rounded-[18px] border border-sky-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(241,248,255,0.95))] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-sky-300 sm:min-h-[88px] sm:rounded-[22px] sm:p-4"
          >
            <GitCompare className="h-4 w-4 text-sky-700 sm:h-5 sm:w-5" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 sm:text-xs sm:tracking-[0.2em]">비교</span>
          </Link>
          <button
            onClick={scrollToFilterPanel}
            className="flex min-h-[72px] flex-col justify-between rounded-[18px] border border-sky-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(242,249,255,0.95))] p-3 text-left transition-all duration-200 hover:-translate-y-1 hover:border-sky-300 sm:min-h-[88px] sm:rounded-[22px] sm:p-4"
          >
            <SlidersHorizontal className="h-4 w-4 text-sky-700 sm:h-5 sm:w-5" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700 sm:text-xs sm:tracking-[0.2em]">필터</span>
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

      <section className="space-y-4 pt-2">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Beyond Shoes</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">신발만 보고 끝내지 않게</h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
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
