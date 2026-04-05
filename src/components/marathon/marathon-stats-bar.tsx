import type { MarathonEvent } from '@/types/marathon';

interface MarathonStatsBarProps {
  totalEvents: number;
  filteredCount: number;
  events: MarathonEvent[];
}

export function MarathonStatsBar({ totalEvents, filteredCount, events }: MarathonStatsBarProps) {
  const openCount = events.filter((e) => e.status === '접수중').length;
  const majorCount = events.filter((e) => e.isMajor).length;

  return (
    <div className="flex flex-wrap gap-3 rounded-[28px] border border-[var(--accent-line)] bg-white/82 p-4 text-sm shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur">
      <div className="flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1.5">
        <span className="text-secondary">전체</span>
        <span className="font-semibold text-primary">{totalEvents}개</span>
      </div>
      <div className="flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-sky-500" />
        <span className="text-sky-700">접수중</span>
        <span className="font-semibold text-sky-800">{openCount}개</span>
      </div>
      <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5">
        <span className="text-slate-700">메이저</span>
        <span className="font-semibold text-slate-800">{majorCount}개</span>
      </div>
      {filteredCount !== totalEvents && (
        <div className="flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5">
          <span className="text-orange-700">검색결과</span>
          <span className="font-semibold text-orange-800">{filteredCount}개</span>
        </div>
      )}
    </div>
  );
}
