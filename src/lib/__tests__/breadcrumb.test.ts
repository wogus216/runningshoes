import { describe, it, expect } from 'vitest';
import { breadcrumbJsonLd } from '@/lib/seo/breadcrumb';
import { SITE_URL } from '@/lib/constants';

describe('breadcrumbJsonLd', () => {
  it('홈을 1번으로 자동 삽입하고 position 을 1부터 매긴다', () => {
    const ld = breadcrumbJsonLd([
      { name: '블로그', path: '/blog' },
      { name: '어떤 글', path: '/blog/some-post' },
    ]);
    expect(ld).toEqual({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: '블로그', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: '어떤 글', item: `${SITE_URL}/blog/some-post` },
      ],
    });
  });

  it('항목 하나(2단계)도 만든다', () => {
    const ld = breadcrumbJsonLd([{ name: '베스트', path: '/best' }]);
    expect(ld.itemListElement).toHaveLength(2);
    expect(ld.itemListElement[1]).toMatchObject({ position: 2, item: `${SITE_URL}/best` });
  });

  it('홈 URL 에 끝 슬래시를 붙이지 않는다', () => {
    expect(breadcrumbJsonLd([]).itemListElement[0].item).toBe(SITE_URL);
    expect(SITE_URL.endsWith('/')).toBe(false);
  });
});
