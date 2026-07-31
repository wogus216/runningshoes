export const DEFAULT_QUOTA: Record<string, number> = {
  데일리: 4, 쿠션화: 3, 입문화: 3, 레이싱: 2, 안정화: 2, 트레일: 2,
};

/**
 * rating 단순 정렬은 상위가 전부 30만원대 레이싱 슈퍼슈즈라 홈 기본값으로 대표성이 없다.
 * 카테고리별 쿼터를 채워 균형을 맞춘다. 쿼터를 못 채우면 가능한 만큼만 넣는다.
 *
 * price는 옵셔널이다(GridShoe.price?: number — 가격 미확정 신발도 존재).
 * 가격이 없는 항목은 같은 rating 안에서 뒤로 보낸다. 둘 다 없으면 원래 순서를 유지한다
 * (Array#sort는 안정 정렬이라 0을 반환하면 입력 순서가 보존됨) — 어떤 경우에도 NaN 비교가
 * 발생하지 않아 결과가 결정적이다.
 */
export function balancedByCategory<T extends { category: string; rating: number; price?: number }>(
  shoes: readonly T[],
  quota: Record<string, number> = DEFAULT_QUOTA,
): T[] {
  const out: T[] = [];
  for (const [category, n] of Object.entries(quota)) {
    const picked = shoes
      .filter((s) => s.category === category)
      .sort((a, b) => {
        const byRating = b.rating - a.rating;
        if (byRating !== 0) return byRating;
        if (a.price === undefined && b.price === undefined) return 0;
        if (a.price === undefined) return 1;
        if (b.price === undefined) return -1;
        return a.price - b.price;
      })
      .slice(0, n);
    out.push(...picked);
  }
  return out;
}
