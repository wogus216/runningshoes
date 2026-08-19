/**
 * 본문 HTML에서 신발 상세 링크 slug 를 뽑는다.
 *
 * 브릿지 조건이 "링크가 하나라도 있으면 끔"이던 탓에 72편 중 38편에서
 * 신발·젤 카드가 통째로 사라져 있었다. 그중 14편은 링크가 1~2개뿐이고
 * 그 내용도 `페가수스42+고스트17` 같은 기본 세트의 수동 복제였다.
 */
export function extractShoeSlugs(html: string): string[] {
  const matches = html.match(/\/shoes\/[a-z0-9-]+/g) ?? [];
  return Array.from(new Set(matches.map((m) => m.replace('/shoes/', ''))));
}

export function countUniqueShoeLinks(html: string): number {
  return extractShoeSlugs(html).length;
}

/**
 * 이 수 미만이면 브릿지를 함께 렌더한다.
 * 3인 근거: 1~2개는 기본 세트의 수동 복제이고, 3개 이상은
 * 아식스 대회에 아식스 4종처럼 브릿지가 낼 수 없는 맥락 큐레이션이다.
 */
export const SHOE_LINK_BRIDGE_THRESHOLD = 3;
