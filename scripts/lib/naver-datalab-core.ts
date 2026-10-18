/**
 * `scripts/naver-datalab.ts` 의 순수 로직 — 네트워크 없이 테스트한다.
 * 한도는 네이버 문서(통합 검색어 트렌드, 2026-10-18 확인): 주제어 5개 · 주제어당 검색어 20개 · 하루 1,000회.
 */

export interface KeywordGroup {
  groupName: string;
  keywords: string[];
}

/** `"이름=검색어1,검색어2"` 또는 `"검색어"` 하나. */
export function parseGroup(arg: string): KeywordGroup {
  const [name, rest] = arg.includes('=') ? arg.split(/=(.*)/s) : [arg, arg];
  const keywords = rest.split(',').map((k) => k.trim()).filter(Boolean);
  if (!name.trim() || keywords.length === 0) throw new Error(`빈 주제어: "${arg}"`);
  if (keywords.length > 20) throw new Error(`주제어당 검색어는 20개까지: "${name}"`);
  return { groupName: name.trim(), keywords };
}

const ymd = (d: Date) => d.toISOString().slice(0, 10);

/** 기본 창: 어제까지 365일(KST 날짜). 오늘은 집계가 덜 끝나 뺀다. */
export function defaultRange(now: Date): { startDate: string; endDate: string } {
  const kst = new Date(now.getTime() + 9 * 36e5);
  const end = new Date(kst.getTime() - 864e5);
  const start = new Date(end.getTime() - 364 * 864e5);
  return { startDate: ymd(start), endDate: ymd(end) };
}

export interface TrendPoint {
  period: string;
  ratio: number;
}

export function peak(points: TrendPoint[]): TrendPoint | null {
  return points.reduce<TrendPoint | null>((best, p) => (!best || p.ratio > best.ratio ? p : best), null);
}
