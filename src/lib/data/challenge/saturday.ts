// 쎄러데이 — 손기정평화마라톤 2026 도전 기록 데이터
//
// 이 파일만 고치면 페이지 전체가 갱신된다.
// - 코드네임·실명 확정 시 codeName / realName 교체
// - 주간 기록은 SATURDAY_WEEKS 배열 맨 앞에 추가 (최신이 위)
// - 대회 후 SATURDAY_RACE_RESULT 채우면 결과 섹션이 렌더된다
//
// ⚠️ 원본 내보내기 파일(CSV/XML)은 커밋하지 않는다. 가공된 CrewStats만 넣는다.
//    GPS에 집 주소가, 심박에 건강정보가 들어 있다.

import type { CrewMember, WeekLog, RaceResult } from '@/types/challenge';

export const RACE_META = {
  name: '2026 손기정평화마라톤',
  dateLabel: '2026.11.15',
  place: '임진각 (경기 파주)',
  marathonId: 'sonkeechung-peace-marathon-2026',
} as const;

// 풀코스 6 / 10K 2
export const SATURDAY_CREW: CrewMember[] = [
  { id: 'm1', codeName: 'MEMBER 1', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm2', codeName: 'MEMBER 2', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm3', codeName: 'MEMBER 3', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm4', codeName: 'MEMBER 4', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm5', codeName: 'MEMBER 5', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm6', codeName: 'MEMBER 6', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm7', codeName: 'MEMBER 7', realName: '', distance: '10K', goal: '완주' },
  { id: 'm8', codeName: 'MEMBER 8', realName: '', distance: '10K', goal: '완주' },
];

// 최신 주차가 배열 맨 앞
export const SATURDAY_WEEKS: WeekLog[] = [];

// 대회 후에만 채운다. null이면 결과 섹션이 렌더되지 않는다.
export const SATURDAY_RACE_RESULT: RaceResult | null = null;
