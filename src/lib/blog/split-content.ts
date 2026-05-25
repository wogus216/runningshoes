/**
 * 블로그 본문을 H2 경계 기준으로 분할해 광고 슬롯 삽입 지점을 만든다.
 *
 * 정책:
 * - H2가 3개 미만이면 본문 그대로 반환 (분할 X)
 * - H2가 3개 이상이면 중간 H2 직전에서 1회 분할 → 본문 중간 광고 1개 삽입
 *
 * H2가 너무 적은 글은 본문 끝 광고만으로 충분 (over-monetization 회피).
 */
export function splitContentAtMidH2(html: string): string[] {
  const h2Indices: number[] = [];
  const regex = /<h2\b[^>]*>/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    h2Indices.push(match.index);
  }

  if (h2Indices.length < 3) {
    return [html];
  }

  const midIdx = Math.floor(h2Indices.length / 2);
  const splitPoint = h2Indices[midIdx];

  return [html.slice(0, splitPoint), html.slice(splitPoint)];
}
