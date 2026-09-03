import { describe, it, expect } from 'vitest';
import { shoes, toCardShoe, toGridShoe } from '@/lib/data/shoes';
import { getShoeDurability } from '@/lib/durability';

/**
 * 카드·그리드 타입은 클라이언트 번들 절감용으로 필드를 골라 담는다.
 * 필드를 빠뜨리면 타입은 통과하고 **화면이 조용히 빈다**(2026-07 실측 후 도입된 경로).
 * 그래서 "무엇을 빼는가"와 "무엇을 반드시 남기는가"를 둘 다 고정한다.
 */
describe('toCardShoe', () => {
  const cards = shoes.map(toCardShoe);

  it('무거운 필드를 뺀다', () => {
    for (const c of cards) {
      const bag = c as unknown as Record<string, unknown>;
      for (const k of ['reviews', 'detailedSpecs', 'editorComment', 'purchaseLinks', 'similarShoes', 'images', 'description']) {
        expect(bag[k], `${c.slug}.${k}`).toBeUndefined();
      }
    }
  });

  it('카드가 쓰는 필드는 원본과 같다', () => {
    shoes.forEach((s, i) => {
      const c = cards[i];
      expect(c.slug).toBe(s.slug);
      expect(c.price).toBe(s.price);
      expect(c.specs).toBe(s.specs);
      expect(c.koreanFootFit).toBe(s.koreanFootFit);
      expect(c.priceAnalysis).toBe(s.priceAnalysis);
      expect(c.features).toBe(s.features);
    });
  });

  it('durabilityRange 는 상세 페이지의 getShoeDurability 와 같은 범위다 (규칙 3)', () => {
    shoes.forEach((s, i) => {
      const profile = getShoeDurability(s);
      const range = cards[i].durabilityRange;
      if (!profile) {
        expect(range, s.slug).toBeUndefined();
      } else {
        expect(range, s.slug).toEqual([profile.min, profile.max]);
      }
    });
  });
});

describe('toGridShoe', () => {
  const grid = shoes.map(toGridShoe);

  it('중첩 객체는 실사용 서브필드만 남긴다', () => {
    shoes.forEach((s, i) => {
      const g = grid[i];
      if (s.specs) expect(Object.keys(g.specs ?? {})).toEqual(['weight']);
      if (s.biomechanics) expect(Object.keys(g.biomechanics ?? {}).sort()).toEqual(['carbonPlate', 'drop']);
      if (s.priceAnalysis) expect(Object.keys(g.priceAnalysis ?? {}).sort()).toEqual(['msrp', 'valueRating']);
      if (s.koreanFootFit) {
        expect(Object.keys(g.koreanFootFit ?? {}).sort()).toEqual(
          ['flatFootCompatibility', 'toBoxWidth', 'wideOptions', 'winterCompatibility'],
        );
      }
    });
  });

  it('beginnerFriendly 는 targetUsers.recommended 의 초보/입문 여부와 일치한다', () => {
    shoes.forEach((s, i) => {
      const expected = s.targetUsers?.recommended?.some((t) => t.includes('초보') || t.includes('입문')) ?? false;
      expect(grid[i].beginnerFriendly, s.slug).toBe(expected);
    });
    expect(grid.some((g) => g.beginnerFriendly)).toBe(true);
  });

  it('식별·표시 필드는 원본과 같다', () => {
    shoes.forEach((s, i) => {
      expect(grid[i]).toMatchObject({ id: s.id, slug: s.slug, brand: s.brand, name: s.name, category: s.category, image: s.image, price: s.price });
    });
  });
});
