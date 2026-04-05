'use client';

import { useState, useMemo, useCallback } from 'react';
import type { MarathonEvent, EventMonth, EventRegion, EventDistance, EventStatus } from '@/types/marathon';
import { useDebounce } from './useDebounce';

export type MarathonSortOption = 'date-asc' | 'date-desc' | 'name-asc';

export const marathonSortLabels: Record<MarathonSortOption, string> = {
  'date-asc': '날짜 빠른순',
  'date-desc': '날짜 늦은순',
  'name-asc': '이름순',
};

export type MarathonFilterState = {
  months: EventMonth[];
  regions: EventRegion[];
  distances: EventDistance[];
  statuses: EventStatus[];
  searchQuery: string;
};

const initialFilters: MarathonFilterState = {
  months: [],
  regions: [],
  distances: [],
  statuses: [],
  searchQuery: '',
};

export function useMarathonFilters(events: MarathonEvent[], initialStatus?: EventStatus) {
  const [filters, setFilters] = useState<MarathonFilterState>(() => ({
    ...initialFilters,
    statuses: initialStatus ? [initialStatus] : [],
  }));
  const [sortBy, setSortBy] = useState<MarathonSortOption>('date-asc');

  const debouncedSearchQuery = useDebounce(filters.searchQuery, 300);

  const filterOptions = useMemo(() => {
    const months = Array.from(new Set(events.map((e) => e.month)));
    const regions = Array.from(new Set(events.map((e) => e.region))).sort();
    const distances = Array.from(new Set(events.flatMap((e) => e.distances)));
    const statuses = Array.from(new Set(events.map((e) => e.status)));

    return { months, regions, distances, statuses };
  }, [events]);

  const filteredEventsUnsorted = useMemo(() => {
    return events.filter((event) => {
      // 검색어 필터
      if (debouncedSearchQuery) {
        const query = debouncedSearchQuery.toLowerCase();
        const matchesName = event.name.toLowerCase().includes(query);
        const matchesLocation = event.location.toLowerCase().includes(query);
        const matchesDesc = event.description?.toLowerCase().includes(query);
        if (!matchesName && !matchesLocation && !matchesDesc) {
          return false;
        }
      }

      // 월 필터
      if (filters.months.length > 0 && !filters.months.includes(event.month)) {
        return false;
      }

      // 지역 필터
      if (filters.regions.length > 0 && !filters.regions.includes(event.region)) {
        return false;
      }

      // 거리 필터
      if (filters.distances.length > 0) {
        const hasMatchingDistance = event.distances.some((d) => filters.distances.includes(d));
        if (!hasMatchingDistance) {
          return false;
        }
      }

      // 접수상태 필터
      if (filters.statuses.length > 0 && !filters.statuses.includes(event.status)) {
        return false;
      }

      return true;
    });
  }, [events, filters.months, filters.regions, filters.distances, filters.statuses, debouncedSearchQuery]);

  const filteredEvents = useMemo(() => {
    return [...filteredEventsUnsorted].sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return b.date.localeCompare(a.date);
        case 'name-asc':
          return a.name.localeCompare(b.name, 'ko');
        case 'date-asc':
        default:
          return a.date.localeCompare(b.date);
      }
    });
  }, [filteredEventsUnsorted, sortBy]);

  const setSearchQuery = useCallback((query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  const toggleMonth = useCallback((month: EventMonth) => {
    setFilters((prev) => ({
      ...prev,
      months: prev.months.includes(month)
        ? prev.months.filter((m) => m !== month)
        : [...prev.months, month],
    }));
  }, []);

  const toggleRegion = useCallback((region: EventRegion) => {
    setFilters((prev) => ({
      ...prev,
      regions: prev.regions.includes(region)
        ? prev.regions.filter((r) => r !== region)
        : [...prev.regions, region],
    }));
  }, []);

  const toggleDistance = useCallback((distance: EventDistance) => {
    setFilters((prev) => ({
      ...prev,
      distances: prev.distances.includes(distance)
        ? prev.distances.filter((d) => d !== distance)
        : [...prev.distances, distance],
    }));
  }, []);

  const toggleStatus = useCallback((status: EventStatus) => {
    setFilters((prev) => ({
      ...prev,
      statuses: prev.statuses.includes(status)
        ? prev.statuses.filter((s) => s !== status)
        : [...prev.statuses, status],
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.searchQuery) count++;
    count += filters.months.length;
    count += filters.regions.length;
    count += filters.distances.length;
    count += filters.statuses.length;
    return count;
  }, [filters]);

  return {
    filters,
    filterOptions,
    filteredEvents,
    activeFilterCount,
    sortBy,
    setSortBy,
    setSearchQuery,
    toggleMonth,
    toggleRegion,
    toggleDistance,
    toggleStatus,
    resetFilters,
  };
}
