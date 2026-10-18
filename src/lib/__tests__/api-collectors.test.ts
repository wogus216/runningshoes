import { describe, it, expect } from 'vitest';
import { cell, hoursSince, in72hWindow, metricsFor, pickValues } from '../../../scripts/lib/ig-insights-core';
import { defaultRange, parseGroup, peak } from '../../../scripts/lib/naver-datalab-core';

describe('ig-insights-core', () => {
  it('릴스는 시청 시간, 피드는 팔로우·프로필 방문을 묻는다', () => {
    expect(metricsFor('REELS')).toContain('ig_reels_avg_watch_time');
    expect(metricsFor('REELS')).not.toContain('follows');
    expect(metricsFor('FEED')).toEqual(expect.arrayContaining(['follows', 'profile_visits', 'reach']));
  });

  it('+0000 타임스탬프로 경과 시간을 잰다', () => {
    expect(hoursSince('2026-10-16T11:00:00+0000', new Date('2026-10-19T11:00:00Z'))).toBe(72);
  });

  it('72시간±6시간만 창으로 본다', () => {
    expect(in72hWindow(65.9)).toBe(false);
    expect(in72hWindow(66)).toBe(true);
    expect(in72hWindow(78)).toBe(true);
    expect(in72hWindow(78.1)).toBe(false);
  });

  it('값이 없는 지표는 0 이 아니라 N/A', () => {
    const v = pickValues([{ name: 'reach', values: [{ value: 0 }] }, { name: 'shares' }]);
    expect(v).toEqual({ reach: 0, shares: null });
    expect(cell(v.reach)).toBe('0');
    expect(cell(v.shares)).toBe('N/A');
    expect(cell(undefined)).toBe('N/A');
  });

  it('total_value 형식도 읽는다', () => {
    expect(pickValues([{ name: 'views', total_value: { value: 12 } }])).toEqual({ views: 12 });
  });
});

describe('naver-datalab-core', () => {
  it('"이름=검색어,검색어" 와 단일 검색어를 읽는다', () => {
    expect(parseGroup('JTBC=JTBC마라톤, JTBC 서울마라톤')).toEqual({ groupName: 'JTBC', keywords: ['JTBC마라톤', 'JTBC 서울마라톤'] });
    expect(parseGroup('춘천마라톤')).toEqual({ groupName: '춘천마라톤', keywords: ['춘천마라톤'] });
  });

  it('검색어 21개는 거절한다', () => {
    const many = Array.from({ length: 21 }, (_, i) => `k${i}`).join(',');
    expect(() => parseGroup(`x=${many}`)).toThrow();
    expect(() => parseGroup('x=')).toThrow();
  });

  it('기본 창은 KST 어제까지 365일', () => {
    expect(defaultRange(new Date('2026-10-18T13:00:00Z'))).toEqual({ startDate: '2025-10-18', endDate: '2026-10-17' });
  });

  it('최고 구간을 찾는다', () => {
    expect(peak([{ period: 'a', ratio: 3 }, { period: 'b', ratio: 9 }])?.period).toBe('b');
    expect(peak([])).toBeNull();
  });
});
