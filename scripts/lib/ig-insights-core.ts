/**
 * `scripts/ig-insights.ts` 의 순수 로직 — 네트워크 없이 테스트한다.
 *
 * 지표 이름은 Meta 문서(Instagram Platform › IG Media › Insights, v26.0, 2026-10-18 확인) 기준.
 * 게시물 유형마다 받을 수 있는 지표가 달라서, 한 번에 요청했다가 거절되면 지표별로 다시 묻고
 * 끝내 못 받은 칸은 null(N/A)로 둔다. **N/A 를 0 으로 바꾸지 않는다** — 2주 판정 사양의 약속이다.
 */

const COMMON = ['reach', 'views', 'saved', 'shares', 'likes', 'comments', 'total_interactions'];

export function metricsFor(mediaProductType: string): string[] {
  if (mediaProductType === 'REELS') return [...COMMON, 'ig_reels_avg_watch_time'];
  return [...COMMON, 'follows', 'profile_visits'];
}

/** IG 타임스탬프는 `+0000` 꼴이라 콜론을 넣어 ISO 로 맞춘다. */
export function parseIgTime(timestamp: string): Date {
  return new Date(timestamp.replace(/([+-]\d{2})(\d{2})$/, '$1:$2'));
}

export function hoursSince(timestamp: string, now: Date): number {
  return Math.round(((now.getTime() - parseIgTime(timestamp).getTime()) / 36e5) * 10) / 10;
}

/** 72시간±6시간 창 — 2주 판정 사양(2week-final.md)의 1회 기록 시점. */
export function in72hWindow(hours: number): boolean {
  return hours >= 66 && hours <= 78;
}

interface InsightItem {
  name: string;
  values?: { value: number }[];
  total_value?: { value: number };
}

export function pickValues(data: InsightItem[]): Record<string, number | null> {
  const out: Record<string, number | null> = {};
  for (const item of data) {
    const v = item.values?.[0]?.value ?? item.total_value?.value;
    out[item.name] = typeof v === 'number' ? v : null;
  }
  return out;
}

export function cell(v: number | null | undefined): string {
  return v === null || v === undefined ? 'N/A' : String(v);
}
