'use client';

import { useState, useMemo, useCallback } from 'react';
import type { Shoe } from '@/types/shoe';

export type SortOption =
  | 'rating-desc'
  | 'price-asc'
  | 'price-desc'
  | 'weight-asc'
  | 'value-desc'
  | 'name-asc';

export const sortLabels: Record<SortOption, string> = {
  'rating-desc': '평점 높은순',
  'price-asc': '가격 낮은순',
  'price-desc': '가격 높은순',
  'weight-asc': '무게 가벼운순',
  'value-desc': '가성비순',
  'name-asc': '이름순',
};

export type FilterState = {
  categories: string[];
  brands: string[];
  priceRange: [number, number] | null;
  toBoxWidth: string[];
  flatFootCompatibility: string[];
  carbonPlate: boolean | null;
  injuryType: string[];
  searchQuery: string;
};

const initialFilters: FilterState = {
  categories: [],
  brands: [],
  priceRange: null,
  toBoxWidth: [],
  flatFootCompatibility: [],
  carbonPlate: null,
  injuryType: [],
  searchQuery: '',
};

export function useShoeFilters(shoes: Shoe[]) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [sortBy, setSortBy] = useState<SortOption>('rating-desc');

  // 필터 옵션 추출
  const filterOptions = useMemo(() => {
    const categories = Array.from(new Set(shoes.map(s => s.category)));
    const brands = Array.from(new Set(shoes.map(s => s.brand))).sort();
    const prices = shoes.map(s => s.priceAnalysis?.msrp || s.price || 0).filter(p => p > 0);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return {
      categories,
      brands,
      priceRange: { min: minPrice, max: maxPrice },
      toBoxWidth: ['narrow', 'standard', 'wide'],
      flatFootCompatibility: ['excellent', 'good', 'fair', 'poor'],
      injuryTypes: ['plantarFasciitis', 'achillesTendinopathy', 'kneeIssues', 'shinSplints'],
    };
  }, [shoes]);

  // 필터링된 신발 목록 (필터만 적용)
  const filteredShoesUnsorted = useMemo(() => {
    return shoes.filter(shoe => {
      // 검색어 필터
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = shoe.name.toLowerCase().includes(query);
        const matchesBrand = shoe.brand.toLowerCase().includes(query);
        const matchesTags = shoe.tags?.some(tag => tag.toLowerCase().includes(query));
        const matchesFeatures = shoe.features?.some(f => f.toLowerCase().includes(query));
        if (!matchesName && !matchesBrand && !matchesTags && !matchesFeatures) {
          return false;
        }
      }

      // 카테고리 필터
      if (filters.categories.length > 0 && !filters.categories.includes(shoe.category)) {
        return false;
      }

      // 브랜드 필터
      if (filters.brands.length > 0 && !filters.brands.includes(shoe.brand)) {
        return false;
      }

      // 가격 필터
      if (filters.priceRange) {
        const price = shoe.priceAnalysis?.msrp || shoe.price || 0;
        if (price < filters.priceRange[0] || price > filters.priceRange[1]) {
          return false;
        }
      }

      // 발볼 필터
      if (filters.toBoxWidth.length > 0) {
        if (!shoe.koreanFootFit?.toBoxWidth || !filters.toBoxWidth.includes(shoe.koreanFootFit.toBoxWidth)) {
          return false;
        }
      }

      // 평발 호환성 필터
      if (filters.flatFootCompatibility.length > 0) {
        if (!shoe.koreanFootFit?.flatFootCompatibility ||
            !filters.flatFootCompatibility.includes(shoe.koreanFootFit.flatFootCompatibility)) {
          return false;
        }
      }

      // 카본 플레이트 필터
      if (filters.carbonPlate !== null) {
        if (shoe.biomechanics?.carbonPlate !== filters.carbonPlate) {
          return false;
        }
      }

      // 부상 타입 필터 (해당 부상에 good 이상인 신발)
      if (filters.injuryType.length > 0) {
        const goodLevels = ['excellent', 'good'];
        const hasGoodPrevention = filters.injuryType.every(injury => {
          const level = shoe.injuryPrevention?.[injury as keyof typeof shoe.injuryPrevention];
          return level && goodLevels.includes(level);
        });
        if (!hasGoodPrevention) {
          return false;
        }
      }

      return true;
    });
  }, [shoes, filters]);

  // 정렬 적용
  const filteredShoes = useMemo(() => {
    return [...filteredShoesUnsorted].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return (a.priceAnalysis?.msrp || a.price || 0) - (b.priceAnalysis?.msrp || b.price || 0);
        case 'price-desc':
          return (b.priceAnalysis?.msrp || b.price || 0) - (a.priceAnalysis?.msrp || a.price || 0);
        case 'weight-asc':
          return (a.specs?.weight || 999) - (b.specs?.weight || 999);
        case 'value-desc':
          return (b.priceAnalysis?.valueRating || 0) - (a.priceAnalysis?.valueRating || 0);
        case 'name-asc':
          return a.name.localeCompare(b.name, 'ko');
        case 'rating-desc':
        default:
          return b.rating - a.rating;
      }
    });
  }, [filteredShoesUnsorted, sortBy]);

  // 필터 업데이트 함수들
  const setSearchQuery = useCallback((query: string) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
  }, []);

  const toggleCategory = useCallback((category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category],
    }));
  }, []);

  const toggleBrand = useCallback((brand: string) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand],
    }));
  }, []);

  const setPriceRange = useCallback((range: [number, number] | null) => {
    setFilters(prev => ({ ...prev, priceRange: range }));
  }, []);

  const toggleToBoxWidth = useCallback((width: string) => {
    setFilters(prev => ({
      ...prev,
      toBoxWidth: prev.toBoxWidth.includes(width)
        ? prev.toBoxWidth.filter(w => w !== width)
        : [...prev.toBoxWidth, width],
    }));
  }, []);

  const toggleFlatFootCompatibility = useCallback((level: string) => {
    setFilters(prev => ({
      ...prev,
      flatFootCompatibility: prev.flatFootCompatibility.includes(level)
        ? prev.flatFootCompatibility.filter(l => l !== level)
        : [...prev.flatFootCompatibility, level],
    }));
  }, []);

  const setCarbonPlate = useCallback((value: boolean | null) => {
    setFilters(prev => ({ ...prev, carbonPlate: value }));
  }, []);

  const toggleInjuryType = useCallback((type: string) => {
    setFilters(prev => ({
      ...prev,
      injuryType: prev.injuryType.includes(type)
        ? prev.injuryType.filter(t => t !== type)
        : [...prev.injuryType, type],
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.searchQuery) count++;
    count += filters.categories.length;
    count += filters.brands.length;
    if (filters.priceRange) count++;
    count += filters.toBoxWidth.length;
    count += filters.flatFootCompatibility.length;
    if (filters.carbonPlate !== null) count++;
    count += filters.injuryType.length;
    return count;
  }, [filters]);

  return {
    filters,
    filterOptions,
    filteredShoes,
    activeFilterCount,
    sortBy,
    setSortBy,
    setSearchQuery,
    toggleCategory,
    toggleBrand,
    setPriceRange,
    toggleToBoxWidth,
    toggleFlatFootCompatibility,
    setCarbonPlate,
    toggleInjuryType,
    resetFilters,
  };
}
