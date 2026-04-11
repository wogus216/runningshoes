import { shoes } from '@/lib/data/shoes';

export type SearchItem = {
  type: 'shoe' | 'best' | 'vs';
  title: string;
  subtitle?: string;
  href: string;
  keywords: string; // pre-joined lowercase searchable text
};

// 빌드 시 한 번만 생성 (SSG에서 각 페이지 빌드 중 호출되면 재사용)
let _index: SearchItem[] | null = null;

export function getSearchIndex(): SearchItem[] {
  if (_index) return _index;

  const items: SearchItem[] = [];

  // 신발 (상위 항목)
  for (const shoe of shoes) {
    if (!shoe.slug) continue;
    const keywords = [
      shoe.brand,
      shoe.name,
      shoe.category,
      shoe.description,
      ...(shoe.tags ?? []),
      ...(shoe.features ?? []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    items.push({
      type: 'shoe',
      title: `${shoe.brand} ${shoe.name}`,
      subtitle: `${shoe.category}${shoe.price ? ` · ${(shoe.price / 10000).toFixed(0)}만원` : ''}`,
      href: `/shoes/${shoe.slug}`,
      keywords,
    });
  }

  _index = items;
  return _index;
}
