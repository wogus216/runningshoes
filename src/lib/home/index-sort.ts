export const DEFAULT_QUOTA: Record<string, number> = {
  데일리: 4, 쿠션화: 3, 입문화: 3, 레이싱: 2, 안정화: 2, 트레일: 2,
};

/**
 * rating 단순 정렬은 상위가 전부 30만원대 레이싱 슈퍼슈즈라 홈 기본값으로 대표성이 없다.
 * 카테고리별 쿼터를 채워 균형을 맞춘다. 쿼터를 못 채우면 가능한 만큼만 넣는다.
 */
export function balancedByCategory<T extends { category: string; rating: number; price: number }>(
  shoes: readonly T[],
  quota: Record<string, number> = DEFAULT_QUOTA,
): T[] {
  const out: T[] = [];
  for (const [category, n] of Object.entries(quota)) {
    const picked = shoes
      .filter((s) => s.category === category)
      .sort((a, b) => b.rating - a.rating || a.price - b.price)
      .slice(0, n);
    out.push(...picked);
  }
  return out;
}
