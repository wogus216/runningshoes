'use client';

import { useState, useMemo, useCallback } from 'react';
import type { MarathonEvent, EventRegion, EventDistance } from '@/types/marathon';
import { EVENT_DISTANCES } from '@/types/marathon';
import { matchesDistanceFilter } from '@/lib/marathon/distance';
import { useDebounce } from './useDebounce';

/**
 * 대회 목록 필터.
 *
 * 축을 셋으로 줄였다 — 권역·거리·메이저.
 * 접수상태 필터는 시점 밴드와 중복이라 뺐고, 월별 필터도 뺐다(밴드 안이 날짜순이라 스크롤로 읽힌다).
 * 정렬 옵션도 없앴다 — 밴드 순서가 곧 시의성 정렬이다.
 *
 * 시·도 17개를 그대로 칩으로 깔면 필터가 목록보다 커진다. 기존 필터 패널이 쓰던
 * 권역 그룹 6개를 그대로 가져왔다.
 */
export type RegionGroupId = '수도권' | '강원' | '충청' | '전라' | '경상' | '제주' | '해외';

export const REGION_GROUPS: { id: RegionGroupId; regions: EventRegion[] }[] = [
  { id: '수도권', regions: ['서울', '경기', '인천'] },
  { id: '강원', regions: ['강원'] },
  { id: '충청', regions: ['충북', '충남', '대전', '세종'] },
  { id: '전라', regions: ['전북', '전남', '광주'] },
  { id: '경상', regions: ['경북', '경남', '대구', '울산', '부산'] },
  { id: '제주', regions: ['제주'] },
  { id: '해외', regions: ['오사카', '교토', '도쿄'] },
];

const REGION_TO_GROUP = new Map<EventRegion, RegionGroupId>(
  REGION_GROUPS.flatMap((g) => g.regions.map((r) => [r, g.id] as const)),
);

export type MarathonFilterState = {
  regionGroups: RegionGroupId[];
  distances: EventDistance[];
  majorOnly: boolean;
  searchQuery: string;
};

const initialFilters: MarathonFilterState = {
  regionGroups: [],
  distances: [],
  majorOnly: false,
  searchQuery: '',
};

function matchesSearch(event: MarathonEvent, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    event.name.toLowerCase().includes(q) ||
    event.location.toLowerCase().includes(q) ||
    (event.description?.toLowerCase().includes(q) ?? false)
  );
}

export function useMarathonFilters(events: MarathonEvent[]) {
  const [filters, setFilters] = useState<MarathonFilterState>(initialFilters);
  const debouncedSearchQuery = useDebounce(filters.searchQuery, 300);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      if (!matchesSearch(event, debouncedSearchQuery)) return false;

      if (filters.regionGroups.length > 0) {
        const group = REGION_TO_GROUP.get(event.region);
        if (!group || !filters.regionGroups.includes(group)) return false;
      }

      if (!matchesDistanceFilter(event.distances, filters.distances)) return false;

      if (filters.majorOnly && !event.isMajor) return false;

      return true;
    });
  }, [events, filters.regionGroups, filters.distances, filters.majorOnly, debouncedSearchQuery]);

  /** 칩에 붙는 수. 필터를 걸지 않은 전체 기준이라 선택해도 숫자가 흔들리지 않는다. */
  const counts = useMemo(() => {
    const regionGroups = Object.fromEntries(
      REGION_GROUPS.map((g) => [
        g.id,
        events.filter((e) => REGION_TO_GROUP.get(e.region) === g.id).length,
      ]),
    ) as Record<RegionGroupId, number>;

    const distances = Object.fromEntries(
      EVENT_DISTANCES.map((d) => [d, events.filter((e) => matchesDistanceFilter(e.distances, [d])).length]),
    ) as Record<string, number>;

    return {
      regionGroups,
      distances,
      majorOnly: events.filter((e) => e.isMajor).length,
      all: events.length,
    };
  }, [events]);

  const setSearchQuery = useCallback((query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  const toggleRegionGroup = useCallback((id: RegionGroupId) => {
    setFilters((prev) => ({
      ...prev,
      regionGroups: prev.regionGroups.includes(id)
        ? prev.regionGroups.filter((g) => g !== id)
        : [...prev.regionGroups, id],
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

  const toggleMajorOnly = useCallback(() => {
    setFilters((prev) => ({ ...prev, majorOnly: !prev.majorOnly }));
  }, []);

  const resetFilters = useCallback(() => setFilters(initialFilters), []);

  const activeFilterCount = useMemo(
    () =>
      (filters.searchQuery ? 1 : 0) +
      filters.regionGroups.length +
      filters.distances.length +
      (filters.majorOnly ? 1 : 0),
    [filters],
  );

  return {
    filters,
    filteredEvents,
    counts,
    activeFilterCount,
    setSearchQuery,
    toggleRegionGroup,
    toggleDistance,
    toggleMajorOnly,
    resetFilters,
  };
}
