export const DEFAULT_QUOTA: Record<string, number> = {
  데일리: 4, 쿠션화: 3, 입문화: 3, 레이싱: 2, 안정화: 2, 트레일: 2,
};

export function balancedByCategory<T extends { category: string; price?: number }>(
  shoes: readonly T[],
  quota: Record<string, number> = DEFAULT_QUOTA,
): T[] {
  const out: T[] = [];
  for (const [category, n] of Object.entries(quota)) {
    const picked = shoes
      .filter((s) => s.category === category)
      .sort((a, b) => {
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
