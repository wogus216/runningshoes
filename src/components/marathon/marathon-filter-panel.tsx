import { Search, X } from 'lucide-react';
import type { EventMonth, EventRegion, EventDistance, EventStatus } from '@/types/marathon';
import { EVENT_MONTHS, EVENT_DISTANCES, EVENT_STATUSES } from '@/types/marathon';
/**
 * ⚠️ 2026-08-01 대회 탐색 개편으로 **임포트되지 않는 파일**이다(가로 칩이 대체).
 * 번들에는 안 들어가지만 "필터가 얕아졌다"는 피드백이 오면 되살릴 코드라 남겨 뒀다.
 * 훅에서 정렬·월·상태를 걷어내며 아래 세 심볼이 사라져, 파일이 홀로 서도록 여기로 옮겼다.
 * 피드백 없이 4주가 지나면 삭제를 판단한다.
 */
type MarathonSortOption = 'date-asc' | 'date-desc' | 'name-asc';

const marathonSortLabels: Record<MarathonSortOption, string> = {
  'date-asc': '날짜 빠른순',
  'date-desc': '날짜 늦은순',
  'name-asc': '이름순',
};

type MarathonFilterState = {
  months: EventMonth[];
  regions: EventRegion[];
  distances: EventDistance[];
  statuses: EventStatus[];
  searchQuery: string;
};

interface MarathonFilterPanelProps {
  filters: MarathonFilterState;
  filterOptions: {
    months: EventMonth[];
    regions: EventRegion[];
    distances: EventDistance[];
    statuses: EventStatus[];
  };
  activeFilterCount: number;
  sortBy: MarathonSortOption;
  setSortBy: (sort: MarathonSortOption) => void;
  setSearchQuery: (query: string) => void;
  toggleMonth: (month: EventMonth) => void;
  toggleRegion: (region: EventRegion) => void;
  toggleDistance: (distance: EventDistance) => void;
  toggleStatus: (status: EventStatus) => void;
  resetFilters: () => void;
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
        active
          ? 'bg-[var(--navy)] text-white'
          : 'bg-sky-50 text-secondary hover:bg-sky-100'
      }`}
    >
      {label}
    </button>
  );
}

// 지역을 권역별로 그룹화
const regionGroups: { label: string; regions: EventRegion[] }[] = [
  { label: '수도권', regions: ['서울', '경기', '인천'] },
  { label: '강원', regions: ['강원'] },
  { label: '충청', regions: ['충북', '충남', '대전', '세종'] },
  { label: '전라', regions: ['전북', '전남', '광주'] },
  { label: '경상', regions: ['경북', '경남', '대구', '울산', '부산'] },
  { label: '제주', regions: ['제주'] },
];

export function MarathonFilterPanel({
  filters,
  filterOptions,
  activeFilterCount,
  sortBy,
  setSortBy,
  setSearchQuery,
  toggleMonth,
  toggleRegion,
  toggleDistance,
  toggleStatus,
  resetFilters,
}: MarathonFilterPanelProps) {
  return (
    <div className="space-y-4 rounded-[4px] border border-[var(--accent-line)] bg-white/84 p-4 backdrop-blur">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Race Filter</p>
        <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950">대회 필터</h3>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary" />
        <input
          type="text"
          placeholder="대회명, 장소 검색..."
          value={filters.searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-[4px] border border-sky-100 bg-white py-2 pl-10 pr-4 text-sm text-primary placeholder:text-secondary/60 focus:border-sky-300 focus:outline-none focus:ring-1 focus:ring-sky-300"
        />
      </div>

      <div className="flex items-center justify-between">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as MarathonSortOption)}
          className="rounded-[4px] border border-sky-100 bg-white px-3 py-2 text-sm text-primary focus:border-sky-300 focus:outline-none"
        >
          {Object.entries(marathonSortLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        {activeFilterCount > 0 && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 hover:bg-sky-100 transition"
          >
            <X className="h-3 w-3" />
            필터 초기화 ({activeFilterCount})
          </button>
        )}
      </div>

      <div>
        <h4 className="text-xs font-semibold text-sky-700 mb-2">월별</h4>
        <div className="flex flex-wrap gap-1.5">
          {EVENT_MONTHS.filter((m) => filterOptions.months.includes(m)).map((month) => (
            <FilterChip
              key={month}
              label={month}
              active={filters.months.includes(month)}
              onClick={() => toggleMonth(month)}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-sky-700 mb-2">접수상태</h4>
        <div className="flex flex-wrap gap-1.5">
          {EVENT_STATUSES.filter((s) => filterOptions.statuses.includes(s)).map((status) => (
            <FilterChip
              key={status}
              label={status}
              active={filters.statuses.includes(status)}
              onClick={() => toggleStatus(status)}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-sky-700 mb-2">거리</h4>
        <div className="flex flex-wrap gap-1.5">
          {EVENT_DISTANCES.filter((d) => filterOptions.distances.includes(d)).map((distance) => (
            <FilterChip
              key={distance}
              label={distance}
              active={filters.distances.includes(distance)}
              onClick={() => toggleDistance(distance)}
            />
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-sky-700 mb-2">지역</h4>
        <div className="space-y-2">
          {regionGroups.map((group) => {
            const availableRegions = group.regions.filter((r) =>
              filterOptions.regions.includes(r)
            );
            if (availableRegions.length === 0) return null;

            return (
              <div key={group.label}>
                <span className="text-[10px] text-secondary/60 uppercase tracking-wider">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {availableRegions.map((region) => (
                    <FilterChip
                      key={region}
                      label={region}
                      active={filters.regions.includes(region)}
                      onClick={() => toggleRegion(region)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
