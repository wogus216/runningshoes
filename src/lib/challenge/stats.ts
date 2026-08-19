// 쎄러데이 순수 로직 — 레이더 정규화, D-day, 주차 배경색
// 정규화 상수는 스펙 §6에 고정돼 있다. 값을 바꾸면 과거 주차와 비교가 깨진다.

import type { CrewStats, RadarAxes } from '@/types/challenge';
import { RACE_META } from '@/lib/data/challenge/saturday';

export const RACE_DATE = RACE_META.dateIso;

// 정규화 상수 (스펙 §6 — 변경 금지)
const MAX_WEEKLY_KM = 60;
const MAX_LONGEST_KM = 42.195;
const SLOW_PACE_SEC = 420; // 7:00/km → 0점
const FAST_PACE_SEC = 300; // 5:00/km → 100점
const MAX_RUNS_PER_WEEK = 5;

const clamp100 = (n: number): number => Math.max(0, Math.min(100, n));

export function toRadarAxes(s: CrewStats): RadarAxes {
  return {
    power: clamp100((s.weeklyKm / MAX_WEEKLY_KM) * 100),
    endurance: clamp100((s.longestKm / MAX_LONGEST_KM) * 100),
    speed: clamp100(((SLOW_PACE_SEC - s.avgPaceSec) / (SLOW_PACE_SEC - FAST_PACE_SEC)) * 100),
    consistency: clamp100((s.runsPerWeek / MAX_RUNS_PER_WEEK) * 100),
  };
}

// 빌드 서버가 UTC여도 한국 날짜 기준으로 세야 D-day가 하루 어긋나지 않는다
function kstDateParts(d: Date): [number, number, number] {
  const s = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d); // 'YYYY-MM-DD'
  return [Number(s.slice(0, 4)), Number(s.slice(5, 7)), Number(s.slice(8, 10))];
}

export function daysUntilRace(now: Date): number {
  const [y, m, d] = kstDateParts(now);
  const today = Date.UTC(y, m - 1, d);
  const [ry, rm, rd] = RACE_DATE.split('-').map(Number);
  const race = Date.UTC(ry, rm - 1, rd);
  return Math.round((race - today) / 86_400_000);
}

// 티저 보조 문구 — 서버 마크업은 날짜를 보여주고, hydration 뒤 이 라벨만 붙는다
export function missionDdayLabel(now: Date): string {
  const days = daysUntilRace(now);
  if (days > 0) return `D-${days}`;
  if (days === 0) return 'D-DAY';
  return 'MISSION DAY PASSED';
}

// 타임라인 배경 — 주차가 쌓일수록 밝아진다 (스펙 §3 서사)
const DARK: [number, number, number] = [0x0f, 0x18, 0x30]; // #0f1830 감청
const DAWN: [number, number, number] = [0x3b, 0x6e, 0xa5]; // #3b6ea5 새벽빛

export function weekBackdrop(index: number, total: number): string {
  const t = total <= 1 ? 0 : Math.max(0, Math.min(1, index / (total - 1)));
  const hex = DARK.map((from, i) => Math.round(from + (DAWN[i] - from) * t))
    .map((c) => c.toString(16).padStart(2, '0'))
    .join('');
  return `#${hex}`;
}
