'use client';

import { EVENT_DISTANCES, type EventDistance } from '@/types/marathon';
import { REGION_GROUPS, type RegionGroupId, type MarathonFilterState } from '@/hooks/useMarathonFilters';
import styles from './marathon-list.module.css';

export function MarathonChips({
  filters,
  counts,
  activeFilterCount,
  setSearchQuery,
  toggleRegionGroup,
  toggleDistance,
  toggleMajorOnly,
  resetFilters,
}: {
  filters: MarathonFilterState;
  counts: {
    regionGroups: Record<RegionGroupId, number>;
    distances: Record<string, number>;
    majorOnly: number;
    all: number;
  };
  activeFilterCount: number;
  setSearchQuery: (q: string) => void;
  toggleRegionGroup: (id: RegionGroupId) => void;
  toggleDistance: (d: EventDistance) => void;
  toggleMajorOnly: () => void;
  resetFilters: () => void;
}) {
  return (
    <div className={styles.chips}>
      <div className={styles.chipRow}>
        <span className={styles.chipLabel}>REGION</span>
        {REGION_GROUPS.map((g) => (
          <button
            key={g.id}
            type="button"
            className={styles.chip}
            aria-pressed={filters.regionGroups.includes(g.id)}
            onClick={() => toggleRegionGroup(g.id)}
          >
            {g.id} <span className={styles.chipN}>{counts.regionGroups[g.id] ?? 0}</span>
          </button>
        ))}
      </div>

      <div className={styles.chipRow}>
        <span className={styles.chipLabel}>DISTANCE</span>
        {EVENT_DISTANCES.map((d) => (
          <button
            key={d}
            type="button"
            className={styles.chip}
            aria-pressed={filters.distances.includes(d)}
            onClick={() => toggleDistance(d)}
          >
            {d} <span className={styles.chipN}>{counts.distances[d] ?? 0}</span>
          </button>
        ))}
      </div>

      <div className={styles.chipRow}>
        <span className={styles.chipLabel} />
        <button
          type="button"
          className={styles.chip}
          aria-pressed={filters.majorOnly}
          onClick={toggleMajorOnly}
        >
          메이저만 <span className={styles.chipN}>{counts.majorOnly}</span>
        </button>
        {/* 칩은 범주를 좁히고, 검색은 이름으로 하나를 찍는다 — 서로 대체되지 않는다.
            "춘천마라톤" 처럼 대회를 이미 알고 온 사용자의 경로다. */}
        <input
          type="search"
          className={styles.search}
          value={filters.searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="대회명, 장소 검색"
          aria-label="대회 검색"
        />
        {activeFilterCount > 0 && (
          <button type="button" className={styles.reset} onClick={resetFilters}>
            필터 초기화
          </button>
        )}
      </div>
    </div>
  );
}
