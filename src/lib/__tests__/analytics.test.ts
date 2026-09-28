import { describe, it, expect, beforeEach, vi } from 'vitest';
import { track, trackOnce, buildPurchaseClick, trackPurchaseClick, __resetOnceForTest } from '../analytics';

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

  it('신발 제휴 링크의 판매처와 버튼 위치를 GA4에 전달한다', () => {
    const click = buildPurchaseClick({
      href: 'https://naver.me/example',
      siteOrigin: 'https://allrunabout.com',
      product_type: 'shoe',
      product_id: 'nike-pegasus-42',
      product_name: 'Pegasus 42',
      brand: 'Nike',
      store: '네이버',
      page_slug: 'nike-pegasus-42',
      button_position: 'shoe_hero',
    });
    expect(click).toMatchObject({ product_type: 'shoe', affiliate_type: 'naver', store: '네이버', button_position: 'shoe_hero' });
    trackPurchaseClick(click!);
    expect((globalThis as TestGlobal).window.gtag).toHaveBeenCalledWith(
      'event', 'purchase_link_click', { ...click, transport_type: 'beacon' },
    );
  });

  it('의류 메타데이터를 유지하고 일반 네이버 검색은 제휴로 오분류하지 않는다', () => {
    const click = buildPurchaseClick({
      href: 'https://search.shopping.naver.com/search/all?query=running+shorts',
      siteOrigin: 'https://allrunabout.com',
      product_type: 'apparel',
      product_name: '러닝 쇼츠',
      brand: 'Example',
      apparel_category: 'shorts',
      store: '네이버 쇼핑',
      page_slug: 'running-shorts-review',
      button_position: 'blog_cta',
    });
    expect(click).toMatchObject({ product_type: 'apparel', apparel_category: 'shorts', affiliate_type: 'none' });
  });

  it('내부 링크와 웹 링크가 아닌 URL은 구매처 클릭에서 제외한다', () => {
    const base = {
      siteOrigin: 'https://allrunabout.com',
      product_type: 'shoe' as const,
      product_name: 'Pegasus 42',
      store: '상세',
      page_slug: 'shoe-review',
      button_position: 'blog_cta',
    };
    expect(buildPurchaseClick({ ...base, href: 'https://allrunabout.com/shoes/nike-pegasus-42' })).toBeNull();
    expect(buildPurchaseClick({ ...base, href: 'javascript:alert(1)' })).toBeNull();
    expect(buildPurchaseClick({ ...base, href: '/shoes/nike-pegasus-42' })).toBeNull();
  });
});
