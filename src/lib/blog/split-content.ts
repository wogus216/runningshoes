/**
 * 블로그 본문을 H2 경계 기준으로 분할해 광고 슬롯 삽입 지점을 만든다.
 *
 * 정책 (over-monetization 회피 + 긴 글 노출 보강):
 * - H2 3개 미만: 분할 X (본문 끝 광고만)
 * - H2 3~5개: 중간 1회 분할 → 본문 중간 광고 1개
 * - H2 6개 이상: 1/3·2/3 지점 2회 분할 → 본문 중간 광고 2개
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

  // H2가 충분히 많은(6+) 긴 글만 광고 2개, 나머지는 1개
  const numSplits = h2Indices.length >= 6 ? 2 : 1;

  // numSplits개의 균등 분할점 (예: 2분할 → 1/3, 2/3 지점의 H2 직전)
  const points: number[] = [];
  for (let s = 1; s <= numSplits; s++) {
    const idx = Math.round((h2Indices.length * s) / (numSplits + 1));
    points.push(h2Indices[idx]);
  }

  const segments: string[] = [];
  let prev = 0;
  for (const p of points) {
    // 중복 분할점(빈 세그먼트) 방지
    if (p > prev) {
      segments.push(html.slice(prev, p));
      prev = p;
    }
  }
  segments.push(html.slice(prev));
  return segments;
}
