import { describe, it, expect } from 'vitest';
import { getAllPairs, getPairBySlug, getPairsForShoe, getPairsForCategory, PINNED_PAIRS, PINNED_SHOES } from '@/lib/pseo/pairs';
import { shoes } from '@/lib/data/shoes';
import { isCompleteShoe } from '@/types/shoe';

/**
 * /vs 페어는 두 번(2026-08-10 39개, 08-21 9개) 조용히 404 가 됐다 — 신발을 추가하기만 해도
 * 상위 N 구성이 바뀌기 때문이다. 아래는 그 재발을 빌드 전에 잡는 회귀 테스트다.
 */
describe('pseo pairs', () => {
  const pairs = getAllPairs();
  const slugs = new Set(pairs.map((p) => p.slug));

  it('고정 페어(PINNED_PAIRS)는 전부 실제로 생성된다', () => {
    const missing = PINNED_PAIRS.filter((s) => !slugs.has(s));
    expect(missing).toEqual([]);
  });

  it('고정 신발(PINNED_SHOES)은 각각 페어가 1개 이상 있다', () => {
    for (const slug of PINNED_SHOES) {
      expect(getPairsForShoe(slug).length, slug).toBeGreaterThan(0);
    }
  });

  it('slug 는 a<b 알파벳 순이고 중복이 없다', () => {
    expect(slugs.size).toBe(pairs.length);
    for (const p of pairs) {
      expect(p.a.slug.localeCompare(p.b.slug)).toBeLessThan(0);
      expect(p.slug).toBe(`${p.a.slug}-vs-${p.b.slug}`);
    }
  });

  it('페어는 같은 카테고리의 완성 신발끼리만 묶인다', () => {
    for (const p of pairs) {
      expect(p.a.category).toBe(p.category);
      expect(p.b.category).toBe(p.category);
      expect(isCompleteShoe(p.a)).toBe(true);
      expect(isCompleteShoe(p.b)).toBe(true);
    }
  });

  it('getPairBySlug 는 목록과 같은 객체를 돌려준다', () => {
    const first = pairs[0];
    expect(getPairBySlug(first.slug)).toBe(first);
    expect(getPairBySlug('no-such-vs-pair')).toBeUndefined();
  });

  it('카테고리별 조회는 limit 을 지킨다', () => {
    const cat = shoes.find((s) => isCompleteShoe(s))!.category;
    expect(getPairsForCategory(cat, 3).length).toBeLessThanOrEqual(3);
    expect(getPairsForCategory(cat, 3).every((p) => p.category === cat)).toBe(true);
  });

  it('페어 수는 상한(카테고리 수 × 45 + 고정분) 안이다 — 빌드 시간 폭주 감지', () => {
    const categories = new Set(shoes.map((s) => s.category)).size;
    // 상위 10종 조합 45 + 고정 신발 5종이 추가돼도 카테고리당 최대 15C2=105
    expect(pairs.length).toBeLessThanOrEqual(categories * 105);
  });
});
