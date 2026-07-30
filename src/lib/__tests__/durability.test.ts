import { describe, it, expect } from 'vitest';
import { getShoeDurability, resolveDurabilityConfidence, resolveDurabilityRange } from '@/lib/durability';
import { shoes } from '@/lib/data/shoes';

describe('resolveDurabilityRange', () => {
  it('문자열에 적힌 범위를 그대로 쓴다', () => {
    expect(resolveDurabilityRange(600, '600-650km')).toEqual({ min: 600, max: 650 });
    expect(resolveDurabilityRange(500, '400-500km (노출 미드솔 마모 주의)')).toEqual({ min: 400, max: 500 });
  });

  it('단일 숫자는 밴드를 씌워 범위로 바꾼다', () => {
    expect(resolveDurabilityRange(600, '600km')).toEqual({ min: 500, max: 700 });
    // 400km 미만(레이스화)은 밴드가 좁다
    expect(resolveDurabilityRange(200, '200km (레이스 전용)')).toEqual({ min: 150, max: 250 });
  });

  it('문자열이 없으면 숫자만으로 계산한다', () => {
    expect(resolveDurabilityRange(500, undefined)).toEqual({ min: 400, max: 600 });
    expect(resolveDurabilityRange(undefined, undefined)).toBeNull();
  });
});

describe('resolveDurabilityConfidence', () => {
  it('외부 랩 측정치가 적힌 경우만 실측으로 본다', () => {
    expect(resolveDurabilityConfidence('약 650km (아웃솔 마모 실측 1.1mm, 토박스 내구 3/5)')).toBe('measured');
    expect(resolveDurabilityConfidence('600km (아웃솔 마모 0.9mm 우수, 힐 패딩 5/5)')).toBe('measured');
  });

  it('스스로 추정이라고 밝힌 표기는 실측이 아니다', () => {
    expect(resolveDurabilityConfidence('500km (추정, 출시 초기라 실측 미게시)')).toBe('estimated');
    expect(resolveDurabilityConfidence('600km 이상 예상 (41 아웃솔 0.9mm 마모 깊이 기준, 구성 동일)')).toBe('estimated');
    expect(resolveDurabilityConfidence('약 600km (GCR 아웃솔 내마모 강화, 독립 측정치 없음)')).toBe('estimated');
    expect(resolveDurabilityConfidence('600km')).toBe('estimated');
    expect(resolveDurabilityConfidence(undefined)).toBe('estimated');
  });
});

describe('신발 데이터 전수', () => {
  it('내구성 값이 있는 신발은 모두 범위를 만들 수 있다', () => {
    const missing = shoes
      .filter((s) => s.specs?.durability)
      .filter((s) => getShoeDurability(s) === null)
      .map((s) => s.slug);
    expect(missing).toEqual([]);
  });

  it('범위는 항상 min <= max 이고 양수다', () => {
    for (const shoe of shoes) {
      const profile = getShoeDurability(shoe);
      if (!profile) continue;
      expect(profile.min).toBeGreaterThan(0);
      expect(profile.max).toBeGreaterThanOrEqual(profile.min);
    }
  });

  it('카본 플레이트 신발에는 미드솔 우선 사망 경고가 붙는다', () => {
    const carbon = shoes.find((s) => s.biomechanics?.carbonPlate);
    expect(carbon).toBeDefined();
    expect(getShoeDurability(carbon!)?.caveat).toContain('미드솔');
  });
});
