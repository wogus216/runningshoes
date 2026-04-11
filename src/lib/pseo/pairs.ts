import type { Shoe } from '@/types/shoe';
import { shoes as allShoes } from '@/lib/data/shoes';
import { isCompleteShoe } from '@/types/shoe';

export type ShoePair = {
  slug: string; // 'nike-pegasus-41-vs-asics-gt-2000-14'
  a: Shoe;
  b: Shoe;
  category: string;
};

const TOP_PER_CATEGORY = 6; // 5C2=10, 6C2=15 → 5 categories × 15 = 75 pairs max

function topShoesByCategory(): Map<string, Shoe[]> {
  const m = new Map<string, Shoe[]>();
  for (const s of allShoes) {
    if (!isCompleteShoe(s)) continue;
    if (!m.has(s.category)) m.set(s.category, []);
    m.get(s.category)!.push(s);
  }
  m.forEach((list, k) => {
    list.sort((a, b) => {
      const av = a.priceAnalysis?.valueRating ?? 0;
      const bv = b.priceAnalysis?.valueRating ?? 0;
      const ar = a.rating ?? 0;
      const br = b.rating ?? 0;
      return br + bv - (ar + av);
    });
    m.set(k, list.slice(0, TOP_PER_CATEGORY));
  });
  return m;
}

let cachedPairs: ShoePair[] | null = null;

export function getAllPairs(): ShoePair[] {
  if (cachedPairs) return cachedPairs;
  const byCat = topShoesByCategory();
  const out: ShoePair[] = [];
  byCat.forEach((list, category) => {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const a = list[i];
        const b = list[j];
        // 정렬: 알파벳 순으로 a<b 보장 (URL 안정)
        const [first, second] = [a, b].sort((x, y) => x.slug.localeCompare(y.slug));
        out.push({
          slug: `${first.slug}-vs-${second.slug}`,
          a: first,
          b: second,
          category,
        });
      }
    }
  });
  cachedPairs = out;
  return cachedPairs;
}

export function getPairBySlug(slug: string): ShoePair | undefined {
  return getAllPairs().find((p) => p.slug === slug);
}

export function getPairsForShoe(shoeSlug: string): ShoePair[] {
  return getAllPairs().filter((p) => p.a.slug === shoeSlug || p.b.slug === shoeSlug);
}

export function getPairsForCategory(category: string, limit = 5): ShoePair[] {
  return getAllPairs()
    .filter((p) => p.category === category)
    .slice(0, limit);
}
