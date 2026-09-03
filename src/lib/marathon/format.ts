/**
 * 마라톤 상세 페이지의 순수 포맷터 — 2026-09-03 868줄짜리 page.tsx 에서 분리.
 * 화면과 무관한 문자열 계산만 있어 테스트는 `src/lib/__tests__/marathon-format.test.ts` 에서 한다.
 */
import { formatManwonExact } from '@/lib/format';

/** 검색 스니펫이 잘리는 지점. 한글은 대략 이 길이에서 끊긴다 */
export const META_DESC_MAX = 155;

/** 문장·어절 경계에서 자른다 — 낱말 중간에서 끊긴 스니펫은 그 자체로 신뢰를 깎는다 */
export function truncateAtWord(text: string, max: number): string {
  const clean = text.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
  if (!clean) return '';
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const sentenceEnd = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('다. '));
  if (sentenceEnd > max * 0.5) return cut.slice(0, sentenceEnd + 1);
  const space = cut.lastIndexOf(' ');
  return (space > max * 0.5 ? cut.slice(0, space) : cut) + '…';
}

export function formatFee(fee: number): string {
  return fee.toLocaleString('ko-KR') + '원';
}

export function formatTimeLimit(hours: number, minutes: number): string {
  if (minutes === 0) return `${hours}시간`;
  return `${hours}시간 ${minutes}분`;
}

/** 참가비 요약 — 전 종목 같으면 "각 N만원", 다르면 종목별로 */
export function feeSummary(fees?: { distance: string; fee: number }[]): string | null {
  if (!fees?.length) return null;
  const uniq = new Set(fees.map((f) => f.fee));
  return uniq.size === 1
    ? `참가비 각 ${formatManwonExact(fees[0].fee)}`
    : fees.map((f) => `${f.distance} ${formatManwonExact(f.fee)}`).join(' · ');
}

/**
 * 설명을 문장 단위로 쪼갠다.
 *
 * description 은 마크업 없는 한 덩어리라 화면에서 8줄짜리 회색 벽으로 렌더됐다
 * (2026-08-23 육안 확인). 글자 수는 336자로 길지 않은데 **한 문단에 대회 소개·작년
 * 이력·종목·참가비·접수일·래플 일정·소스 신뢰도·주의까지 10가지가 뭉쳐 있어**
 * 무엇 하나 눈에 걸리지 않았다. 종결어미 "~다." 기준으로 끊어 문단을 나눈다.
 */
export function splitSentences(text?: string): string[] {
  if (!text) return [];
  // "~다." 만으로는 "(가격·수량 미공개). 반면 ~" 처럼 괄호로 끝나는 문장이 안 잘려
  // 접은 안쪽이 다시 벽이 됐다. 마침표+공백을 경계로 삼되, 소수점·약어는 뒤에 공백이
  // 없으므로 영향받지 않는다.
  return text
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function getDaysUntil(dateStr: string): number {
  const eventDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  return Math.ceil((eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}
