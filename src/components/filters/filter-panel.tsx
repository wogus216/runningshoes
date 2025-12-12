'use client';

import { useState } from 'react';
import { Search, X, ChevronDown, ChevronUp, Filter, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { FilterState } from '@/hooks/useShoeFilters';

type FilterPanelProps = {
  filters: FilterState;
  filterOptions: {
    categories: string[];
    brands: string[];
    priceRange: { min: number; max: number };
    toBoxWidth: string[];
    flatFootCompatibility: string[];
    injuryTypes: string[];
  };
  activeFilterCount: number;
  onSearchChange: (query: string) => void;
  onToggleCategory: (category: string) => void;
  onToggleBrand: (brand: string) => void;
  onToggleToBoxWidth: (width: string) => void;
  onToggleFlatFoot: (level: string) => void;
  onToggleCarbonPlate: (value: boolean | null) => void;
  onToggleInjuryType: (type: string) => void;
  onReset: () => void;
};

const injuryLabels: Record<string, string> = {
  plantarFasciitis: '족저근막염',
  achillesTendinopathy: '아킬레스',
  kneeIssues: '무릎',
  shinSplints: '정강이',
};

const toBoxWidthLabels: Record<string, string> = {
  narrow: '좁음',
  standard: '표준',
  wide: '넓음',
};

const flatFootLabels: Record<string, string> = {
  excellent: '매우 좋음',
  good: '좋음',
  fair: '보통',
  poor: '나쁨',
};

export function FilterPanel({
  filters,
  filterOptions,
  activeFilterCount,
  onSearchChange,
  onToggleCategory,
  onToggleBrand,
  onToggleToBoxWidth,
  onToggleFlatFoot,
  onToggleCarbonPlate,
  onToggleInjuryType,
  onReset,
}: FilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-[28px] border border-white/20 bg-white/20 backdrop-blur-2xl shadow-[0_20px_45px_-40px_rgba(15,23,42,0.6)]">
      {/* 검색바 + 필터 토글 */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* 검색바 */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="신발 이름, 브랜드, 특징 검색..."
              value={filters.searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full rounded-full border border-white/30 bg-white/50 py-3 pl-11 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[#4facfe]/50 focus:outline-none focus:ring-2 focus:ring-[#4facfe]/20"
            />
            {filters.searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* 필터 버튼 */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className={cn(
                "rounded-full border-white/30 bg-white/30 px-4 py-3 text-sm font-semibold transition-all",
                isExpanded && "border-[#4facfe]/50 bg-[#4facfe]/10 text-[#4facfe]"
              )}
            >
              <Filter className="mr-2 h-4 w-4" />
              필터
              {activeFilterCount > 0 && (
                <Badge className="ml-2 bg-[#4facfe] text-white text-xs px-2">
                  {activeFilterCount}
                </Badge>
              )}
              {isExpanded ? (
                <ChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <ChevronDown className="ml-2 h-4 w-4" />
              )}
            </Button>

            {activeFilterCount > 0 && (
              <Button
                variant="ghost"
                onClick={onReset}
                className="rounded-full px-4 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                초기화
              </Button>
            )}
          </div>
        </div>

        {/* 활성 필터 칩 */}
        {activeFilterCount > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {filters.categories.map(cat => (
              <FilterChip key={cat} label={cat} onRemove={() => onToggleCategory(cat)} />
            ))}
            {filters.brands.map(brand => (
              <FilterChip key={brand} label={brand} onRemove={() => onToggleBrand(brand)} />
            ))}
            {filters.toBoxWidth.map(w => (
              <FilterChip key={w} label={`발볼: ${toBoxWidthLabels[w]}`} onRemove={() => onToggleToBoxWidth(w)} />
            ))}
            {filters.flatFootCompatibility.map(l => (
              <FilterChip key={l} label={`평발: ${flatFootLabels[l]}`} onRemove={() => onToggleFlatFoot(l)} />
            ))}
            {filters.carbonPlate !== null && (
              <FilterChip
                label={filters.carbonPlate ? '카본 플레이트 있음' : '카본 플레이트 없음'}
                onRemove={() => onToggleCarbonPlate(null)}
              />
            )}
            {filters.injuryType.map(t => (
              <FilterChip key={t} label={`${injuryLabels[t]} 예방`} onRemove={() => onToggleInjuryType(t)} />
            ))}
          </div>
        )}
      </div>

      {/* 확장된 필터 패널 */}
      {isExpanded && (
        <div className="border-t border-white/10 p-4 sm:p-5 space-y-6">
          {/* 카테고리 */}
          <FilterSection title="카테고리">
            <div className="flex flex-wrap gap-2">
              {filterOptions.categories.map(cat => (
                <FilterButton
                  key={cat}
                  label={cat}
                  isActive={filters.categories.includes(cat)}
                  onClick={() => onToggleCategory(cat)}
                />
              ))}
            </div>
          </FilterSection>

          {/* 브랜드 */}
          <FilterSection title="브랜드">
            <div className="flex flex-wrap gap-2">
              {filterOptions.brands.map(brand => (
                <FilterButton
                  key={brand}
                  label={brand}
                  isActive={filters.brands.includes(brand)}
                  onClick={() => onToggleBrand(brand)}
                />
              ))}
            </div>
          </FilterSection>

          {/* 발볼 너비 */}
          <FilterSection title="발볼 너비">
            <div className="flex flex-wrap gap-2">
              {filterOptions.toBoxWidth.map(w => (
                <FilterButton
                  key={w}
                  label={toBoxWidthLabels[w]}
                  isActive={filters.toBoxWidth.includes(w)}
                  onClick={() => onToggleToBoxWidth(w)}
                />
              ))}
            </div>
          </FilterSection>

          {/* 평발 호환성 */}
          <FilterSection title="평발 호환성">
            <div className="flex flex-wrap gap-2">
              {filterOptions.flatFootCompatibility.map(l => (
                <FilterButton
                  key={l}
                  label={flatFootLabels[l]}
                  isActive={filters.flatFootCompatibility.includes(l)}
                  onClick={() => onToggleFlatFoot(l)}
                />
              ))}
            </div>
          </FilterSection>

          {/* 카본 플레이트 */}
          <FilterSection title="카본 플레이트">
            <div className="flex flex-wrap gap-2">
              <FilterButton
                label="있음"
                isActive={filters.carbonPlate === true}
                onClick={() => onToggleCarbonPlate(filters.carbonPlate === true ? null : true)}
              />
              <FilterButton
                label="없음"
                isActive={filters.carbonPlate === false}
                onClick={() => onToggleCarbonPlate(filters.carbonPlate === false ? null : false)}
              />
            </div>
          </FilterSection>

          {/* 부상 예방 */}
          <FilterSection title="부상 예방 (good 이상)">
            <div className="flex flex-wrap gap-2">
              {filterOptions.injuryTypes.map(t => (
                <FilterButton
                  key={t}
                  label={injuryLabels[t]}
                  isActive={filters.injuryType.includes(t)}
                  onClick={() => onToggleInjuryType(t)}
                />
              ))}
            </div>
          </FilterSection>
        </div>
      )}
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{title}</h4>
      {children}
    </div>
  );
}

function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2.5 text-sm font-medium transition-all min-h-[44px]",
        isActive
          ? "border-[#4facfe] bg-[#4facfe]/20 text-[#4facfe]"
          : "border-white/30 bg-white/30 text-slate-600 hover:border-[#4facfe]/50 hover:bg-[#4facfe]/10"
      )}
    >
      {label}
    </button>
  );
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#4facfe]/20 px-3 py-2 text-xs font-semibold text-[#4facfe] min-h-[36px]">
      {label}
      <button
        onClick={onRemove}
        className="ml-1 hover:text-[#4facfe]/70 p-1 min-w-[24px] min-h-[24px] flex items-center justify-center"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </span>
  );
}
