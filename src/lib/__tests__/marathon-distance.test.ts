import { describe, it, expect } from 'vitest';
import { normalizeDistance, matchesDistanceFilter } from '@/lib/marathon/distance';

describe('normalizeDistance', () => {
  it('표준 거리는 그대로 돌려준다', () => {
    expect(normalizeDistance('10K')).toBe('10K');
    expect(normalizeDistance('풀코스')).toBe('풀코스');
    expect(normalizeDistance('트레일')).toBe('트레일');
  });

  it('11K·12K는 10K로 본다', () => {
    expect(normalizeDistance('11K')).toBe('10K');
    expect(normalizeDistance('12K')).toBe('10K');
  });

  it('6K는 5K로 본다', () => {
    expect(normalizeDistance('6K')).toBe('5K');
  });

  it('모르는 값은 null', () => {
    expect(normalizeDistance('마일')).toBeNull();
  });
});

describe('matchesDistanceFilter', () => {
  it('선택이 없으면 전부 통과', () => {
    expect(matchesDistanceFilter(['11K'], [])).toBe(true);
  });

  it('11K 대회가 10K 필터에 잡힌다', () => {
    expect(matchesDistanceFilter(['11K'], ['10K'])).toBe(true);
  });

  it('6K 대회가 5K 필터에 잡힌다', () => {
    expect(matchesDistanceFilter(['6K'], ['5K'])).toBe(true);
  });

  it('여러 거리 중 하나만 맞아도 통과', () => {
    expect(matchesDistanceFilter(['하프', '10K'], ['풀코스', '하프'])).toBe(true);
  });

  it('안 맞으면 false', () => {
    expect(matchesDistanceFilter(['하프'], ['풀코스'])).toBe(false);
  });
});
