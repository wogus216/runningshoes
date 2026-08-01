'use client';

import { useEffect, useMemo, useState } from 'react';
import type { MarathonEvent } from '@/types/marathon';
import { useMarathonFilters } from '@/hooks/useMarathonFilters';
import { groupIntoBands } from '@/lib/marathon/bands';
import { MarathonChips } from './marathon-chips';
import { MarathonBand } from './marathon-band';
import styles from './marathon-list.module.css';

/** 접수중 밴드 아래 고정. 상태는 사람이 확인한 값이라 재확인을 유도한다. */
const VERIFY_NOTE =
  '접수 상태는 공식 발표를 수동 확인한 값입니다. 신청 전 공식 페이지에서 다시 확인하세요.';

interface MarathonContentProps {
  events: MarathonEvent[];
  /** 빌드 시점 날짜 'YYYY-MM-DD'. 서버 렌더와 하이드레이션 첫 렌더가 이 값을 쓴다 */
  buildDate: string;
}

export function MarathonContent({ events, buildDate }: MarathonContentProps) {
  /**
   * `output: export` SSG라 빌드 시점 날짜가 정적 HTML에 굳는다. 배포가 없으면 밴드가 낡는다.
   * 서버·하이드레이션 첫 렌더는 buildDate 로 맞추고(불일치 방지), 마운트 후 진짜 오늘로 바꾼다.
   */
  const [today, setToday] = useState(buildDate);
  useEffect(() => {
    const now = new Date();
    const iso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    if (iso !== buildDate) setToday(iso);
  }, [buildDate]);

  const {
    filters,
    filteredEvents,
    counts,
    activeFilterCount,
    setSearchQuery,
    toggleRegionGroup,
    toggleDistance,
    toggleMajorOnly,
    resetFilters,
  } = useMarathonFilters(events);

  const bands = useMemo(() => groupIntoBands(filteredEvents, today), [filteredEvents, today]);
  const hasAny = filteredEvents.length > 0;

  return (
    <div>
      <MarathonChips
        filters={filters}
        counts={counts}
        activeFilterCount={activeFilterCount}
        setSearchQuery={setSearchQuery}
        toggleRegionGroup={toggleRegionGroup}
        toggleDistance={toggleDistance}
        toggleMajorOnly={toggleMajorOnly}
        resetFilters={resetFilters}
      />

      {!hasAny ? (
        <p className={styles.empty}>
          조건에 맞는 대회가 없습니다.{' '}
          <button type="button" className={styles.reset} onClick={resetFilters}>
            필터 초기화
          </button>
        </p>
      ) : (
        bands.map((band) => (
          <MarathonBand
            key={band.id}
            band={band}
            today={today}
            defaultOpen={band.id === 'open' || band.id === 'upcoming'}
            note={band.id === 'open' ? VERIFY_NOTE : undefined}
          />
        ))
      )}
    </div>
  );
}
