import { SITE_URL } from '@/lib/constants';

export type BreadcrumbItem = {
  name: string;
  /** 사이트 루트 기준 경로. '/blog/foo' 처럼 슬래시로 시작한다. */
  path: string;
};

/**
 * BreadcrumbList JSON-LD. '홈'은 항상 1번으로 자동 삽입되므로 그 뒤 항목만 넘긴다.
 *
 * 2026-09-03 이전에는 11개 페이지가 같은 객체를 각자 손으로 적었고, 홈 URL 표기가
 * `SITE_URL`과 `${SITE_URL}/` 로 갈려 있었다. 여기서는 `SITE_URL` 하나로 통일한다.
 */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const trail = [{ name: '홈', item: SITE_URL }, ...items.map((i) => ({ name: i.name, item: `${SITE_URL}${i.path}` }))];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: t.name,
      item: t.item,
    })),
  };
}
