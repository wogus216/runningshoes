import { describe, it, expect, beforeEach, vi } from 'vitest';
import { track, trackOnce, __resetOnceForTest } from '../analytics';

type TestGlobal = Omit<typeof globalThis, 'window'> & { window: { gtag?: ReturnType<typeof vi.fn> } };

describe('analytics', () => {
  beforeEach(() => {
    __resetOnceForTest();
    (globalThis as TestGlobal).window = { gtag: vi.fn() };
  });

  it('gtag에 event와 파라미터를 전달한다', () => {
    track('home_recommend_start', { section_name: 'hero', device_type: 'desktop' });
    expect((globalThis as TestGlobal).window.gtag)
      .toHaveBeenCalledWith('event', 'home_recommend_start', { section_name: 'hero', device_type: 'desktop' });
  });

  it('gtag가 없으면 조용히 무시한다', () => {
    (globalThis as TestGlobal).window = {};
    expect(() => track('home_ad_view')).not.toThrow();
  });

  it('trackOnce는 같은 키로 두 번 발화하지 않는다', () => {
    trackOnce('ad-1', 'home_ad_view');
    trackOnce('ad-1', 'home_ad_view');
    expect((globalThis as TestGlobal).window.gtag).toHaveBeenCalledTimes(1);
  });

  it('trackOnce는 키가 다르면 각각 발화한다', () => {
    trackOnce('ad-1', 'home_ad_view');
    trackOnce('ad-2', 'home_ad_view');
    expect((globalThis as TestGlobal).window.gtag).toHaveBeenCalledTimes(2);
  });
});
