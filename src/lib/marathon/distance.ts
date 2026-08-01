import { EVENT_DISTANCES, type EventDistance } from '@/types/marathon';

/**
 * 거리 필터용 정규화.
 *
 * 데이터에 `11K`·`6K`·`12K`가 섞여 있는데 EVENT_DISTANCES에 없는 값이라 필터에 안 잡혔다.
 * 칩을 늘리는 대신(각 1건이라 변별력이 없다) 근접 표준으로 매핑한다.
 * "10K 대회 보여줘" 했을 때 11K 대회가 빠지는 게 더 이상하다.
 *
 * ⚠️ 표기용이 아니다. 행에는 원문(`11K`)을 그대로 쓴다.
 */
const NEAR: Record<string, EventDistance> = {
  '11K': '10K',
  '12K': '10K',
  '6K': '5K',
};

export function normalizeDistance(raw: string): EventDistance | null {
  if ((EVENT_DISTANCES as readonly string[]).includes(raw)) return raw as EventDistance;
  return NEAR[raw] ?? null;
}

export function matchesDistanceFilter(
  eventDistances: readonly string[],
  selected: readonly EventDistance[],
): boolean {
  if (selected.length === 0) return true;
  return eventDistances.some((d) => {
    const n = normalizeDistance(d);
    return n !== null && selected.includes(n);
  });
}
