/**
 * 화면 표시용 포맷터 — 만원·날짜.
 *
 * 2026-09-03 감사에서 만원 포맷이 9곳, 날짜 포맷이 4곳에 각자 구현돼 있었다.
 * 반올림 규칙은 두 가지뿐이었다(정수 반올림 / 소수 한 자리). 실데이터 131개 가격과
 * 7,961개 가격차 전부에서 `toFixed(0)`과 `Math.round`는 같은 값을 냈으므로, 여기로
 * 모아도 화면 숫자는 바뀌지 않는다. 규칙을 하나 더 만들지 말고 아래 둘 중 하나를 쓴다.
 */

/**
 * 정수 만원 — "22만원". 가격표·카드 부제·목록처럼 대략의 값을 보일 때.
 * 값이 없으면 `empty`(기본 '-')를 돌려준다.
 */
export function formatManwon(won: number | null | undefined, empty = '-'): string {
  if (!won) return empty;
  return `${Math.round(won / 10000)}만원`;
}

/**
 * 정확한 만원 — "2.5만원". 가격 *차이*나 참가비처럼 한 자리가 의미를 갖는 곳.
 * 만원 단위로 나눠떨어지면 소수를 붙이지 않는다("3만원").
 */
export function formatManwonExact(won: number): string {
  const man = won / 10000;
  return `${Number.isInteger(man) ? man : man.toFixed(1)}만원`;
}

const WEEKDAY_KO = ['일', '월', '화', '수', '목', '금', '토'] as const;

/** 'YYYY-MM-DD' 를 UTC 자정으로 읽는다. 로컬 시간대에 따라 하루가 어긋나지 않게. */
function parseIsoDate(iso: string): Date | null {
  const d = new Date(`${iso.slice(0, 10)}T00:00:00Z`);
  return Number.isNaN(d.getTime()) ? null : d;
}

/**
 * "2026년 9월 3일" · weekday 옵션이면 "2026년 9월 3일 (목)".
 * 파싱 실패 시 원문을 그대로 돌려준다.
 */
export function formatDateKo(iso: string, opts: { weekday?: boolean } = {}): string {
  const d = parseIsoDate(iso);
  if (!d) return iso;
  const base = `${d.getUTCFullYear()}년 ${d.getUTCMonth() + 1}월 ${d.getUTCDate()}일`;
  return opts.weekday ? `${base} (${WEEKDAY_KO[d.getUTCDay()]})` : base;
}

/** "9/3 목" — 표·행처럼 좁은 칸용. */
export function formatDateShortKo(iso: string): string {
  const d = parseIsoDate(iso);
  if (!d) return iso;
  return `${d.getUTCMonth() + 1}/${d.getUTCDate()} ${WEEKDAY_KO[d.getUTCDay()]}`;
}

/** 로컬 시간대 기준 오늘 'YYYY-MM-DD'. 빌드 시점·클라이언트 재계산 양쪽에서 같은 식을 쓴다. */
export function localIsoDate(now: Date = new Date()): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}
