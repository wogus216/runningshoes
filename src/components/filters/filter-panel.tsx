'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, X, ChevronDown, ChevronUp, Filter, RotateCcw, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { FilterState } from '@/hooks/useShoeFilters';

// 모바일 감지 훅
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// 모바일 하단 시트 컴포넌트
function MobileBottomSheet({
  isOpen,
  onClose,
  children,
  title,
  activeFilterCount,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  activeFilterCount: number;
}) {
  // 바디 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 하단 시트 */}
      <div className="absolute bottom-0 left-0 right-0 max-h-[85vh] rounded-t-[28px] bg-white shadow-2xl animate-slide-up overflow-hidden">
        {/* 핸들 */}
        <div className="flex justify-center py-3">
          <div className="h-1.5 w-12 rounded-full bg-slate-300" />
        </div>

        {/* 헤더 */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 pb-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-[stone-600]" />
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            {activeFilterCount > 0 && (
              <Badge className="bg-[stone-600] text-white text-xs px-2">
                {activeFilterCount}
              </Badge>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-slate-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>

        {/* 콘텐츠 */}
        <div className="overflow-y-auto max-h-[calc(85vh-120px)] overscroll-contain">
          {children}
        </div>

        {/* 하단 버튼 */}
        <div className="border-t border-slate-100 p-4 bg-white">
          <Button
            onClick={onClose}
            className="w-full rounded-full bg-[stone-600] py-4 text-base font-semibold text-white hover:bg-[stone-600]/90 min-h-[52px]"
          >
            {activeFilterCount > 0 ? `${activeFilterCount}개 필터 적용됨 - 결과 보기` : '필터 적용'}
          </Button>
        </div>
      </div>
    </div>
  );
}

type FilterPreset = {
  id: string;
  label: string;
  description: string;
  apply: (callbacks: FilterPresetCallbacks) => void;
};

type FilterPresetCallbacks = {
  onReset: () => void;
  onToggleCategory: (category: string) => void;
  onToggleFlatFoot: (level: string) => void;
  onSetPriceRange: (range: [number, number] | null) => void;
  onToggleCarbonPlate: (value: boolean | null) => void;
  onToggleInjuryType: (type: string) => void;
};

const filterPresets: FilterPreset[] = [
  {
    id: 'beginner',
    label: '입문자용',
    description: '처음 시작하는 러너를 위한 추천',
    apply: (callbacks) => {
      callbacks.onReset();
      callbacks.onToggleCategory('입문화');
      callbacks.onSetPriceRange([0, 200000]);
    },
  },
  {
    id: 'flat-foot',
    label: '평발 전용',
    description: '평발 러너를 위한 안정성 좋은 신발',
    apply: (callbacks) => {
      callbacks.onReset();
      callbacks.onToggleFlatFoot('excellent');
      callbacks.onToggleFlatFoot('good');
    },
  },
  {
    id: 'best-value',
    label: '가성비 최고',
    description: '합리적인 가격에 좋은 성능',
    apply: (callbacks) => {
      callbacks.onReset();
      callbacks.onSetPriceRange([0, 200000]);
    },
  },
  {
    id: 'racing',
    label: '레이싱',
    description: '기록 단축을 위한 경량 레이싱화',
    apply: (callbacks) => {
      callbacks.onReset();
      callbacks.onToggleCategory('레이싱');
      callbacks.onToggleCarbonPlate(true);
    },
  },
  {
    id: 'knee-friendly',
    label: '무릎 보호',
    description: '무릎 부상 예방에 좋은 신발',
    apply: (callbacks) => {
      callbacks.onReset();
      callbacks.onToggleInjuryType('kneeIssues');
    },
  },
  {
    id: 'daily-cushion',
    label: '데일리 쿠션',
    description: '매일 편하게 뛸 수 있는 쿠션화',
    apply: (callbacks) => {
      callbacks.onReset();
      callbacks.onToggleCategory('쿠션화');
    },
  },
];

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
  onSetPriceRange: (range: [number, number] | null) => void;
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

const priceRangeOptions: { label: string; range: [number, number] | null }[] = [
  { label: '전체', range: null },
  { label: '15만원 미만', range: [0, 150000] },
  { label: '15-20만원', range: [150000, 200000] },
  { label: '20-25만원', range: [200000, 250000] },
  { label: '25-30만원', range: [250000, 300000] },
  { label: '30만원 이상', range: [300000, 999999] },
];

export function FilterPanel({
  filters,
  filterOptions,
  activeFilterCount,
  onSearchChange,
  onToggleCategory,
  onToggleBrand,
  onSetPriceRange,
  onToggleToBoxWidth,
  onToggleFlatFoot,
  onToggleCarbonPlate,
  onToggleInjuryType,
  onReset,
}: FilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleFilterToggle = useCallback(() => {
    if (isMobile) {
      setIsMobileSheetOpen(true);
    } else {
      setIsExpanded(!isExpanded);
    }
  }, [isMobile, isExpanded]);

  const getPriceRangeLabel = () => {
    if (!filters.priceRange) return null;
    const [min, max] = filters.priceRange;
    if (min === 0 && max === 150000) return '15만원 미만';
    if (min === 150000 && max === 200000) return '15-20만원';
    if (min === 200000 && max === 250000) return '20-25만원';
    if (min === 250000 && max === 300000) return '25-30만원';
    if (min === 300000) return '30만원 이상';
    return `${(min / 10000).toFixed(0)}-${(max / 10000).toFixed(0)}만원`;
  };

  // 프리셋 적용 함수
  const applyPreset = (preset: FilterPreset) => {
    preset.apply({
      onReset,
      onToggleCategory,
      onToggleFlatFoot,
      onSetPriceRange,
      onToggleCarbonPlate,
      onToggleInjuryType,
    });
  };

  return (
    <div className="rounded-[28px] border border-white/20 bg-white/20 backdrop-blur-2xl shadow-[0_20px_45px_-40px_rgba(15,23,42,0.6)]">
      {/* 빠른 필터 프리셋 */}
      <div className="px-4 pt-4 sm:px-5 sm:pt-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="h-4 w-4 text-[stone-600]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">빠른 필터</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-hide">
          {filterPresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => applyPreset(preset)}
              className="group relative rounded-full border border-white/30 bg-white/40 px-4 py-2 text-sm font-medium text-slate-700 transition-all hover:border-[stone-600]/50 hover:bg-[stone-600]/10 hover:text-[stone-600] whitespace-nowrap flex-shrink-0"
              title={preset.description}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

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
              className="w-full rounded-full border border-white/30 bg-white/50 py-3 pl-11 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-[stone-600]/50 focus:outline-none focus:ring-2 focus:ring-[stone-600]/20"
            />
            {filters.searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="검색어 지우기"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* 필터 버튼 */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleFilterToggle}
              className={cn(
                "rounded-full border-white/30 bg-white/30 px-4 py-3 text-sm font-semibold transition-all min-h-[44px]",
                (isExpanded || isMobileSheetOpen) && "border-[stone-600]/50 bg-[stone-600]/10 text-[stone-600]"
              )}
            >
              <Filter className="mr-2 h-4 w-4" />
              필터
              {activeFilterCount > 0 && (
                <Badge className="ml-2 bg-[stone-600] text-white text-xs px-2">
                  {activeFilterCount}
                </Badge>
              )}
              {!isMobile && (
                isExpanded ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4" />
                )
              )}
            </Button>

            {activeFilterCount > 0 && (
              <Button
                variant="ghost"
                onClick={onReset}
                className="rounded-full px-4 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900 min-h-[44px]"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                초기화
              </Button>
            )}
          </div>
        </div>

        {/* 활성 필터 칩 */}
        {activeFilterCount > 0 && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-hide">
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
            {filters.priceRange && (
              <FilterChip
                label={`가격: ${getPriceRangeLabel()}`}
                onRemove={() => onSetPriceRange(null)}
              />
            )}
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

      {/* 데스크톱: 확장된 필터 패널 */}
      {isExpanded && !isMobile && (
        <div className="border-t border-white/10 p-4 sm:p-5 space-y-6">
          <FilterContent
            filters={filters}
            filterOptions={filterOptions}
            onToggleCategory={onToggleCategory}
            onToggleBrand={onToggleBrand}
            onSetPriceRange={onSetPriceRange}
            onToggleToBoxWidth={onToggleToBoxWidth}
            onToggleFlatFoot={onToggleFlatFoot}
            onToggleCarbonPlate={onToggleCarbonPlate}
            onToggleInjuryType={onToggleInjuryType}
            onReset={onReset}
          />
        </div>
      )}

      {/* 모바일: 하단 시트 */}
      <MobileBottomSheet
        isOpen={isMobileSheetOpen}
        onClose={() => setIsMobileSheetOpen(false)}
        title="필터"
        activeFilterCount={activeFilterCount}
      >
        <div className="p-5 space-y-6">
          {/* 빠른 필터 프리셋 (모바일 시트 내) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-[stone-600]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">빠른 필터</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filterPresets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-[stone-600]/50 hover:bg-[stone-600]/10 hover:text-[stone-600] min-h-[44px]"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {activeFilterCount > 0 && (
            <button
              onClick={onReset}
              className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-700 min-h-[44px]"
            >
              <RotateCcw className="h-4 w-4" />
              모든 필터 초기화
            </button>
          )}

          <FilterContent
            filters={filters}
            filterOptions={filterOptions}
            onToggleCategory={onToggleCategory}
            onToggleBrand={onToggleBrand}
            onSetPriceRange={onSetPriceRange}
            onToggleToBoxWidth={onToggleToBoxWidth}
            onToggleFlatFoot={onToggleFlatFoot}
            onToggleCarbonPlate={onToggleCarbonPlate}
            onToggleInjuryType={onToggleInjuryType}
            onReset={onReset}
          />
        </div>
      </MobileBottomSheet>
    </div>
  );
}

// 필터 콘텐츠 (데스크톱/모바일 공유)
function FilterContent({
  filters,
  filterOptions,
  onToggleCategory,
  onToggleBrand,
  onSetPriceRange,
  onToggleToBoxWidth,
  onToggleFlatFoot,
  onToggleCarbonPlate,
  onToggleInjuryType,
}: {
  filters: FilterState;
  filterOptions: FilterPanelProps['filterOptions'];
  onToggleCategory: (category: string) => void;
  onToggleBrand: (brand: string) => void;
  onSetPriceRange: (range: [number, number] | null) => void;
  onToggleToBoxWidth: (width: string) => void;
  onToggleFlatFoot: (level: string) => void;
  onToggleCarbonPlate: (value: boolean | null) => void;
  onToggleInjuryType: (type: string) => void;
  onReset: () => void;
}) {
  return (
    <>
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

      {/* 가격 범위 */}
      <FilterSection title="가격">
        <div className="flex flex-wrap gap-2">
          {priceRangeOptions.map(({ label, range }) => {
            const isActive = range === null
              ? filters.priceRange === null
              : filters.priceRange !== null &&
                filters.priceRange[0] === range[0] &&
                filters.priceRange[1] === range[1];
            return (
              <FilterButton
                key={label}
                label={label}
                isActive={isActive}
                onClick={() => onSetPriceRange(range)}
              />
            );
          })}
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
    </>
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
          ? "border-[stone-600] bg-[stone-600]/20 text-[stone-600]"
          : "border-white/30 bg-white/30 text-slate-600 hover:border-[stone-600]/50 hover:bg-[stone-600]/10"
      )}
    >
      {label}
    </button>
  );
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[stone-600]/20 px-3 py-2 text-xs font-semibold text-[stone-600] min-h-[36px] whitespace-nowrap flex-shrink-0">
      {label}
      <button
        onClick={onRemove}
        className="ml-1 hover:text-[stone-600]/70 p-1 min-w-[24px] min-h-[24px] flex items-center justify-center"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </span>
  );
}
