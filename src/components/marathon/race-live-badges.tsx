'use client';

import { useEffect, useState } from 'react';
import type { MarathonListEvent } from '@/types/marathon';
import { displayStatusOf, raceDayBadge } from '@/lib/marathon/bands';
import { localIsoDate } from '@/lib/format';

/**
 * 대회 상세의 접수 상태·D-day 배지.
 *
 * `output: export` SSG 라 서버 컴포넌트에서 계산하면 빌드 시각에 굳는다 — 10/20 빌드를 10/25 에 보면
 * 실제 D-0 인 대회에 "D-5"가 남고, 마감일이 지나도 "접수중"이 남았다. 목록(marathon-content)과
 * 블로그 대회 배지는 이미 클라이언트에서 다시 계산하고 있어 같은 대회가 목록과 상세에서 달랐다(2026-10-23 점검).
 * 서버·하이드레이션 첫 렌더는 buildDate 로 맞추고(불일치 방지), 마운트 후 진짜 오늘로 바꾼다.
 */
type LiveEvent = Pick<MarathonListEvent, 'date' | 'status' | 'postponed' | 'registrationStart' | 'registrationEnd'> &
  Partial<MarathonListEvent>;

const STATUS_STYLES: Record<string, string> = {
  '접수중': 'bg-[var(--navy)] text-white',
  '마감': 'bg-slate-400 text-white',
  '대회종료': 'bg-slate-200 text-slate-600',
  '일정 연기': 'bg-amber-100 text-amber-700',
};

const DAY_STYLES = {
  dday: 'rounded-full bg-surface px-3 py-1 text-sm text-secondary',
  today: 'rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700',
  past: 'rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500',
} as const;

function useLiveToday(buildDate: string): string {
  const [today, setToday] = useState(buildDate);
  useEffect(() => {
    const iso = localIsoDate();
    if (iso !== buildDate) setToday(iso);
  }, [buildDate]);
  return today;
}

export function RaceStatusBadge({ event, buildDate, size = 'md' }: { event: LiveEvent; buildDate: string; size?: 'md' | 'sm' }) {
  const today = useLiveToday(buildDate);
  const status = displayStatusOf(event as MarathonListEvent, today);
  const box = size === 'md' ? 'rounded-full px-3 py-1 text-sm font-medium' : 'inline-block rounded-full px-2 py-0.5 text-xs font-medium';
  return <span className={`${box} ${STATUS_STYLES[status] ?? ''}`}>{status}</span>;
}

export function RaceDayBadge({ event, buildDate }: { event: Pick<MarathonListEvent, 'date' | 'postponed'>; buildDate: string }) {
  const today = useLiveToday(buildDate);
  const badge = raceDayBadge(event, today);
  if (!badge) return null;
  return <span className={DAY_STYLES[badge.kind]}>{badge.text}</span>;
}
