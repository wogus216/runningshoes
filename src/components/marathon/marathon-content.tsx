'use client';

import { useState, useEffect, useRef } from 'react';
import type { MarathonEvent, EventStatus } from '@/types/marathon';
import { EVENT_STATUSES } from '@/types/marathon';
import { useMarathonFilters } from '@/hooks/useMarathonFilters';
import { MarathonFilterPanel } from './marathon-filter-panel';
import { MarathonEventCard } from './marathon-event-card';
import { MarathonStatsBar } from './marathon-stats-bar';
import { SlidersHorizontal, X } from 'lucide-react';

interface MarathonContentProps {
  events: MarathonEvent[];
}

export function MarathonContent({ events }: MarathonContentProps) {
  const [showFilters, setShowFilters] = useState(false);
  const {
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
  } = useMarathonFilters(events);

  // ?status=... 딥링크 반영. useSearchParams()를 쓰면 정적 export에서 페이지 전체가
  // 클라이언트 렌더로 이탈해 대회 목록이 검색엔진에 안 보이므로, 마운트 후 URL을 직접 읽는다.
  const statusApplied = useRef(false);
  useEffect(() => {
    if (statusApplied.current) return;
    const statusParam = new URLSearchParams(window.location.search).get('status');
    if (statusParam && EVENT_STATUSES.includes(statusParam as EventStatus)) {
      statusApplied.current = true;
      toggleStatus(statusParam as EventStatus);
    }
  }, [toggleStatus]);

  return (
    <div className="space-y-6">
      <MarathonStatsBar
        totalEvents={events.length}
        filteredCount={filteredEvents.length}
        events={events}
      />

      <div className="lg:hidden">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex w-full items-center justify-center gap-2 rounded-[22px] border border-[var(--accent-line)] bg-white/84 px-4 py-3 text-sm font-medium text-primary transition hover:bg-white"
        >
          {showFilters ? (
            <>
              <X className="h-4 w-4" />
              필터 닫기
            </>
          ) : (
            <>
              <SlidersHorizontal className="h-4 w-4" />
              필터 열기
              {activeFilterCount > 0 && (
                <span className="rounded-full bg-[var(--navy)] px-1.5 py-0.5 text-xs text-white">
                  {activeFilterCount}
                </span>
              )}
            </>
          )}
        </button>
      </div>

      <div className="flex gap-6">
        <aside className={`w-full shrink-0 lg:w-72 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="sticky top-20">
            <MarathonFilterPanel
              filters={filters}
              filterOptions={filterOptions}
              activeFilterCount={activeFilterCount}
              sortBy={sortBy}
              setSortBy={setSortBy}
              setSearchQuery={setSearchQuery}
              toggleMonth={toggleMonth}
              toggleRegion={toggleRegion}
              toggleDistance={toggleDistance}
              toggleStatus={toggleStatus}
              resetFilters={resetFilters}
            />
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          {filteredEvents.length === 0 ? (
            <div className="rounded-[4px] border border-[var(--accent-line)] bg-white/84 p-8 text-center backdrop-blur">
              <p className="text-secondary mb-2">조건에 맞는 대회가 없습니다</p>
              <button
                onClick={resetFilters}
                className="text-sm text-accent hover:underline"
              >
                필터 초기화
              </button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredEvents.map((event) => (
                <MarathonEventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
