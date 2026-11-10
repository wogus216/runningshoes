import { describe, expect, it } from 'vitest';
import { recommendShoes, isUserProfile, type UserProfile } from '@/lib/recommendation';
import { shoes } from '@/lib/data/shoes';

const profile: UserProfile = {
  purpose: 'training', footWidth: 'standard', budget: 'low', preferredBrands: [],
};
const priceOf = (s: (typeof shoes)[number]) => s.price ?? s.priceAnalysis?.msrp ?? 0;
const snapshot = (p: UserProfile) => recommendShoes(shoes, p).map(s => ({
  slug: s.slug, priority: s.rawScore, reasons: s.matchReasons, detail: s.detailedReason,
}));

describe('조건을 확인한 추천 후보', () => {
  it('일반적인 예산 조건에서 실제 후보가 나온다', () => {
    expect(recommendShoes(shoes, profile).length).toBeGreaterThan(0);
  });

  it.each([['low', 200000], ['mid', 300000], ['high', Infinity]] as const)('예산 %s는 상한으로 적용한다', (budget, ceiling) => {
    for (const s of recommendShoes(shoes, { ...profile, budget })) {
      expect(priceOf(s)).toBeGreaterThan(0);
      expect(priceOf(s)).toBeLessThanOrEqual(ceiling);
    }
  });

  it('가격 미확인·0·음수·비정상 값으로 예산 충족을 주장하지 않는다', () => {
    const seed = shoes.find(s => s.specs)!;
    for (const price of [undefined, null, 0, -1, NaN, Infinity]) {
      expect(recommendShoes([{ ...seed, price, priceAnalysis: undefined }], profile)).toEqual([]);
    }
  });

  it('싼 가격의 후보를 높은 예산의 하한으로 탈락시키지 않는다', () => {
    const seed = { ...shoes.find(s => s.specs && s.category !== '트레일')!, price: 99000 };
    expect(recommendShoes([seed], { ...profile, budget: 'high' })).toHaveLength(1);
  });

  it('트레일 목적에는 트레일 후보만 남고, 로드 목적에는 트레일이 섞이지 않는다', () => {
    const trail = recommendShoes(shoes, { ...profile, purpose: 'trail', budget: 'high' });
    expect(trail.length).toBeGreaterThan(0);
    expect(trail.every(s => s.category === '트레일')).toBe(true);
    for (const purpose of ['training', 'racing', 'recovery', 'all'] as const) {
      expect(recommendShoes(shoes, { ...profile, purpose, budget: 'high' }).some(s => s.category === '트레일')).toBe(false);
    }
  });

  it('가벼운 조깅 후보에 레이싱 분류를 섞지 않는다', () => {
    const result = recommendShoes(shoes, { ...profile, purpose: 'recovery', budget: 'high' });
    expect(result.length).toBeGreaterThan(0);
    expect(result.some(s => s.category === '레이싱')).toBe(false);
  });

  it('한국 와이드 옵션을 확인한 모델만 와이드 조건에 넣는다', () => {
    const result = recommendShoes(shoes, { ...profile, footWidth: 'wide', budget: 'high' });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(s => s.koreanFootFit?.wideOptions === true)).toBe(true);
    const seed = shoes.find(s => s.specs && priceOf(s) > 0 && s.category !== '트레일')!;
    for (const wideOptions of [false, undefined]) {
      expect(recommendShoes([{ ...seed, koreanFootFit: { ...seed.koreanFootFit, wideOptions } }], { ...profile, footWidth: 'wide', budget: 'high' })).toEqual([]);
    }
  });

  it('같은 용도·선호 조건에서는 확인 가격이 낮은 순서이고 입력 순서에 흔들리지 않는다', () => {
    const seed = shoes.find(s => s.specs && s.category === '데일리')!;
    const list = [199000, 99000, 159000].map((price, i) => ({ ...seed, id: `fixture-${i}`, slug: `fixture-${i}`, price }));
    const result = recommendShoes(list, profile);
    expect(result.map(priceOf)).toEqual([99000, 159000, 199000]);
    expect(recommendShoes([...list].reverse(), profile).map(s => s.slug)).toEqual(result.map(s => s.slug));
  });

  it('용도 분류를 가격·저장된 브랜드 선호보다 먼저 비교한다', () => {
    const seed = shoes.find(s => s.specs)!;
    const racer = { ...seed, id: 'racer', slug: 'racer', brand: 'Other', category: '레이싱', price: 300000 };
    const daily = { ...seed, id: 'daily', slug: 'daily', brand: 'Favorite', category: '데일리', price: 100000 };
    const result = recommendShoes([daily, racer], { ...profile, purpose: 'racing', budget: 'high', preferredBrands: ['Favorite'] });
    expect(result[0].slug).toBe('racer');
    expect(result[1].matchReasons).not.toContain('레이싱용으로 적합');
  });

  it('10개보다 후보가 적으면 다른 조건의 신발로 채우지 않는다', () => {
    const seed = shoes.find(s => s.specs && s.category === '트레일')!;
    const list = Array.from({ length: 4 }, (_, i) => ({ ...seed, id: `trail-${i}`, slug: `trail-${i}`, price: 100000 }));
    expect(recommendShoes(list, { ...profile, purpose: 'trail' })).toHaveLength(4);
  });

  it.each(['training', 'racing', 'recovery', 'trail', 'all'] as const)('%s: 기존 경험·거리·페이스·건강 선택을 적합성 판단에 재사용하지 않는다', purpose => {
    const p = { ...profile, purpose, budget: 'high' as const };
    const expected = snapshot(p);
    expect(expected.length).toBeGreaterThan(0);
    for (const experience of ['beginner', 'intermediate', 'advanced'] as const) {
      for (const weeklyDistance of ['low', 'medium', 'high'] as const) {
        for (const targetPace of ['slow', 'medium', 'fast'] as const) {
          expect(snapshot({ ...p, experience, weeklyDistance, targetPace, footArch: 'flat', injuries: ['kneeIssues'], season: 'winter' })).toEqual(expected);
        }
      }
    }
  });

  it('무게 경계·카본·주관 추천 문구를 적합성 점수로 바꾸지 않는다', () => {
    const seed = shoes.find(s => s.specs && priceOf(s) > 0 && s.category !== '트레일')!;
    const base = recommendShoes([seed], { ...profile, budget: 'high' })[0];
    for (const weight of [180, 200, 219, 220, 229, 230, 249, 250, 310, 311]) {
      const result = recommendShoes([{ ...seed, specs: { ...seed.specs!, weight }, biomechanics: { ...seed.biomechanics!, carbonPlate: true }, targetUsers: { recommended: ['입문자 최고', '엘리트 레이싱', '무릎 보호'], notRecommended: ['느린 회복 러닝', '입문 러너'] } }], { ...profile, budget: 'high' })[0];
      expect(result.rawScore).toBe(base.rawScore);
      expect(result.matchReasons).toEqual(base.matchReasons);
      expect(result.detailedReason).not.toMatch(/적정 무게|페이스에 적합|엘리트|평균보다|무릎 보호/);
    }
  });

  it('후보 하나를 100점 적합으로 정규화하지 않는다', () => {
    const seed = shoes.find(s => s.specs && priceOf(s) > 0 && s.category !== '트레일')!;
    const result = recommendShoes([seed], { ...profile, budget: 'high' });
    expect(result[0].matchScore).toBe(result[0].rawScore);
    expect(result[0].matchScore).not.toBe(100);
    expect(result[0]).not.toHaveProperty('comparisonToAvg');
  });
});

describe('새 조건 설문과 기존 세션 복원', () => {
  it('새 3개 선택과 기존 세션을 모두 읽는다', () => {
    expect(isUserProfile(profile)).toBe(true);
    expect(isUserProfile({ ...profile, experience: 'beginner', weeklyDistance: 'low', targetPace: 'fast', footArch: 'normal', injuries: [], season: 'winter' })).toBe(true);
  });

  it('손상된 선택지·배열·과거 값을 거절한다', () => {
    for (const value of [null, [], {}, { ...profile, budget: 'old' }, { ...profile, purpose: 'unknown' }, { ...profile, preferredBrands: null }, { ...profile, injuries: ['none'] }, { ...profile, experience: 'unknown' }, { ...profile, targetPace: 'unknown' }]) expect(isUserProfile(value)).toBe(false);
  });
});
