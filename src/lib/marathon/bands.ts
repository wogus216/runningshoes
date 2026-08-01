import type { MarathonEvent } from '@/types/marathon';

/**
 * 대회 목록의 시점 밴드.
 *
 * 목록이 날짜 오름차순 하나로 정렬돼 있어 8월 방문자에게 3월에 끝난 대회가 먼저 보였다.
 * 밴드가 정렬을 대체한다 — 밴드 순서가 시의성이고, 밴드 안에서만 날짜순이다.
 *
 * **날짜가 수동 status를 이긴다.** status는 사람이 관리하는 값이라 시간이 지나면 틀려지지만
 * (접수 마감일이 지났는데 '접수중'인 채로 남는 식), 날짜 비교는 항상 오늘 기준으로 맞다.
 *
 * `today`를 인자로 받는 이유: 이 사이트는 `output: export` SSG라 모듈 안에서 `Date.now()`를
 * 부르면 **빌드 시점이 정적 HTML에 굳는다.** 호출자가 넘기게 해서 서버(빌드 시점)와
 * 클라이언트(진짜 오늘) 양쪽에서 같은 함수를 쓸 수 있게 한다.
 */

export type BandId = 'open' | 'upcoming' | 'closed' | 'past';

export type Band = {
  id: BandId;
  label: string;
  events: MarathonEvent[];
};

const BAND_ORDER: { id: BandId; label: string }[] = [
  { id: 'open', label: '지금 접수중' },
  { id: 'upcoming', label: '곧 열림' },
  { id: 'closed', label: '접수 마감 · 대회는 열림' },
  { id: 'past', label: '지난 대회' },
];

const DAY = 86_400_000;

/** 'YYYY-MM-DD' 두 개의 날짜 차이(일). 문자열을 UTC로 파싱해 타임존 영향을 없앤다. */
export function daysUntil(dateStr: string, today: string): number {
  const a = Date.parse(`${dateStr}T00:00:00Z`);
  const b = Date.parse(`${today}T00:00:00Z`);
  if (Number.isNaN(a) || Number.isNaN(b)) return 0;
  return Math.round((a - b) / DAY);
}

/** 판정 순서가 곧 우선순위다 — past를 먼저 걸러낸 뒤 접수 기간, 마지막이 수동 status. */
export function bandOf(event: MarathonEvent, today: string): BandId {
  // 1. 지난 대회 — 날짜만 본다. 유일하게 100% 자동 판정되는 밴드다.
  if (event.date < today) return 'past';

  // 2. 접수 기간이 있으면 그걸 믿는다(수동 status보다 최신).
  if (event.registrationEnd && event.registrationEnd < today) return 'closed';
  if (event.registrationStart && event.registrationStart > today) return 'upcoming';

  // 3. 접수 기간이 없으면 수동 status.
  //    '대회종료'인데 날짜가 미래인 경우는 데이터 모순이라 closed로 둔다
  //    (past는 날짜로만 판정한다는 규칙을 지킨다).
  switch (event.status) {
    case '마감':
    case '대회종료':
      return 'closed';
    case '접수예정':
      return 'upcoming';
    case '접수중':
    default:
      return 'open';
  }
}

/** 4개 밴드를 항상 같은 순서로 반환한다. 비어 있어도 자리를 지킨다(호출자가 숨김을 결정). */
export function groupIntoBands(events: readonly MarathonEvent[], today: string): Band[] {
  const buckets: Record<BandId, MarathonEvent[]> = {
    open: [], upcoming: [], closed: [], past: [],
  };
  for (const e of events) buckets[bandOf(e, today)].push(e);

  for (const id of Object.keys(buckets) as BandId[]) {
    buckets[id].sort((a, b) => a.date.localeCompare(b.date));
  }

  return BAND_ORDER.map(({ id, label }) => ({ id, label, events: buckets[id] }));
}
