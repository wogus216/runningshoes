'use client';

import { useMemo, useState } from "react";
import { BrandView } from "@/components/brand-view";
import { HierarchyView } from "@/components/hierarchy-view";
import { ViewToggle, type ViewMode } from "@/components/view-toggle";
import { FilterPanel } from "@/components/filters/filter-panel";
import { useShoeFilters } from "@/hooks/useShoeFilters";
import { getShoes, categoryOrder, getBrandsFromShoes } from "@/lib/data/shoes";

export default function HomePage() {
  const [view, setView] = useState<ViewMode>("hierarchy");
  const allShoes = useMemo(() => getShoes(), []);

  const {
    filters,
    filterOptions,
    filteredShoes,
    activeFilterCount,
    setSearchQuery,
    toggleCategory,
    toggleBrand,
    toggleToBoxWidth,
    toggleFlatFootCompatibility,
    setCarbonPlate,
    toggleInjuryType,
    resetFilters,
  } = useShoeFilters(allShoes);

  const totalBrands = useMemo(() => new Set(allShoes.map((shoe) => shoe.brand)).size, [allShoes]);
  const totalCategories = useMemo(() => new Set(allShoes.map((shoe) => shoe.category)).size, [allShoes]);

  const categories = useMemo(() => {
    const existingCategories = new Set(filteredShoes.map((shoe) => shoe.category));
    return categoryOrder.filter((cat) => existingCategories.has(cat));
  }, [filteredShoes]);

  const brands = useMemo(() => getBrandsFromShoes(filteredShoes), [filteredShoes]);

  return (
    <div className="space-y-8 pb-16">
      <section className="text-center animate-fade-in-down">
        <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-[5rem]" style={{ letterSpacing: '-0.05em' }}>
          러닝화 계급도
          <span className="block text-[#4facfe]">
            2025
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-700 sm:text-xl">
          {allShoes.length}개 모델 · {totalBrands}개 브랜드 · {totalCategories}개 카테고리
        </p>
      </section>

      {/* 필터 패널 */}
      <FilterPanel
        filters={filters}
        filterOptions={filterOptions}
        activeFilterCount={activeFilterCount}
        onSearchChange={setSearchQuery}
        onToggleCategory={toggleCategory}
        onToggleBrand={toggleBrand}
        onToggleToBoxWidth={toggleToBoxWidth}
        onToggleFlatFoot={toggleFlatFootCompatibility}
        onToggleCarbonPlate={setCarbonPlate}
        onToggleInjuryType={toggleInjuryType}
        onReset={resetFilters}
      />

      {/* 필터 결과 표시 */}
      {activeFilterCount > 0 && (
        <p className="text-center text-sm text-slate-600">
          <span className="font-semibold text-[#4facfe]">{filteredShoes.length}</span>개 신발이 검색되었습니다
        </p>
      )}

      <ViewToggle view={view} onChange={setView} categories={categories} brands={brands} />

      {filteredShoes.length > 0 ? (
        view === "hierarchy" ? <HierarchyView shoes={filteredShoes} /> : <BrandView shoes={filteredShoes} />
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-slate-500">검색 결과가 없습니다</p>
          <p className="text-sm text-slate-400 mt-2">필터 조건을 변경해보세요</p>
        </div>
      )}
    </div>
  );
}
