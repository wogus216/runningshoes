import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { shoes } from '@/lib/data/shoes';
import { getAllPairs } from '@/lib/pseo/pairs';
import { recommendShoes, type UserProfile } from '@/lib/recommendation';
import { ValueAnalysis } from '@/components/detail/value-analysis';
import { KoreanFootFit } from '@/components/detail/korean-foot-fit';
import { EnhancedCompareTable } from '@/components/compare/enhanced-compare-table';
import { toCardShoe } from '@/lib/data/shoes';

const profile: UserProfile = {
  experience: 'beginner', weeklyDistance: 'low', purpose: 'training',
  footArch: 'normal', footWidth: 'standard', injuries: [], budget: 'high', preferredBrands: [],
};

describe('unverified editorial assessments', () => {
  it('does not publish unsupported scores as known catalog facts', () => {
    for (const shoe of shoes) {
      const record = shoe as unknown as Record<string, unknown>;
      for (const [object, keys] of [
        [record, ['rating']],
        [shoe.specs, ['cushioning', 'responsiveness', 'stability', 'durability']],
        [shoe.koreanFootFit, ['toBoxWidth', 'winterCompatibility', 'summerCompatibility']],
        [shoe.priceAnalysis, ['valueRating', 'costPerKm']],
      ] as const) {
        for (const key of keys) expect((object as Record<string, unknown> | undefined)?.[key], shoe.slug).toBeUndefined();
      }
    }
  });

  it('ignores unsupported performance, fit, rating and seasonal assessments from stale callers', () => {
    const stale = shoes.map((shoe, i) => ({
      ...shoe, rating: i % 2 ? 1 : 5,
      specs: shoe.specs ? { ...shoe.specs, cushioning: i % 2 ? 1 : 10, responsiveness: i % 2 ? 10 : 1, stability: i % 2 ? 1 : 10 } : undefined,
      priceAnalysis: shoe.priceAnalysis ? { ...shoe.priceAnalysis, valueRating: i % 2 ? 10 : 1 } : undefined,
      koreanFootFit: shoe.koreanFootFit ? { ...shoe.koreanFootFit, toBoxWidth: i % 2 ? 'narrow' as const : 'wide' as const, winterCompatibility: 'excellent' as const, summerCompatibility: 'poor' as const } : undefined,
    }));
    const snapshot = (list: typeof shoes, p: UserProfile) => recommendShoes(list, p).map(r => ({ slug: r.slug, score: r.rawScore, reasons: r.matchReasons }));
    for (const purpose of ['training', 'recovery', 'racing', 'trail', 'all'] as const) {
      const p = { ...profile, purpose };
      const expected = snapshot(shoes, p);
      expect(expected.length).toBeGreaterThan(0);
      expect(snapshot(stale, { ...p, season: 'winter' })).toEqual(expected);
      expect(snapshot(stale, { ...p, season: 'summer' })).toEqual(expected);
    }
  });

  it('preserves the comparison routes while removing score based selection', () => {
    const pairs = getAllPairs();
    expect(pairs).toHaveLength(386);
    for (const slug of ['nike-pegasus-41-vs-nike-pegasus-42', 'hoka-mach-6-vs-li-ning-red-hare-9-pro', 'adidas-terrex-agravic-4-vs-nike-ultrafly']) {
      expect(pairs.some(p => p.slug === slug)).toBe(true);
    }
    expect(new Set(pairs.map(p => p.slug)).size).toBe(pairs.length);
  });

  it('shows the known price without inventing a value rating', () => {
    const shoe = shoes.find(s => s.slug === 'nike-pegasus-41')!;
    const output = renderToStaticMarkup(React.createElement(ValueAnalysis, {
      priceAnalysis: shoe.priceAnalysis!, shoeName: shoe.name, brand: shoe.brand, price: shoe.price,
    }));
    expect(output).toContain('159,000');
    expect(output).not.toContain('에디터 가성비 평가');
    expect(output).not.toContain('undefined');
    expect(output).not.toContain('/10');
  });

  it('does not turn an unknown internal width into standard fit', () => {
    const output = renderToStaticMarkup(React.createElement(KoreanFootFit, { koreanFootFit: {}, shoeName: 'fixture', brand: 'fixture' }));
    expect(output).toBe('');
    expect(output).not.toContain('표준');
    expect(output).not.toContain('undefined');
  });

  it('renders comparison facts without retired assessment rows', () => {
    const fixtures = shoes.filter(shoe => ['nike-pegasus-41', 'nike-pegasus-42'].includes(shoe.slug));
    const output = renderToStaticMarkup(React.createElement(EnhancedCompareTable, { shoes: fixtures }));
    for (const label of ['평점', '쿠셔닝', '반응성', '안정성', '내구성', '가성비', '발볼', 'km당 비용']) {
      expect(output).not.toContain(label);
    }
    expect(output).toContain('281g');
    expect(output).toContain('14mm');
  });

  it('keeps prose conditions and does not extract manufacturer distances as a lifetime', () => {
    const shoe = shoes.find(shoe => shoe.slug === 'puma-fast-r-nitro-elite-3')!;
    expect(shoe.detailedSpecs?.durability).toContain('150km');
    expect(shoe.detailedSpecs?.durability).toContain('300km');
    expect(toCardShoe(shoe)).not.toHaveProperty('durabilityRange');
  });
});
