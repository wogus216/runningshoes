import { shoes } from '@/lib/data/shoes';
import { formatManwon } from '@/lib/format';

export type SearchItem = {
  type: 'shoe' | 'best' | 'vs' | 'tool';
  title: string;
  subtitle?: string;
  href: string;
  keywords: string; // pre-joined lowercase searchable text
};

// 빌드 시 한 번만 생성 (SSG에서 각 페이지 빌드 중 호출되면 재사용)
let _index: SearchItem[] | null = null;

export function getSearchIndex(): SearchItem[] {
  if (_index) return _index;

  const items: SearchItem[] = [{
    type: 'tool',
    title: '러닝카드',
    subtitle: '지난 28일의 러닝 기록으로 나의 카드 만들기',
    href: '/running-card',
    keywords: '러닝카드 러닝 카드 러너 유형 테스트 메달 기록 공유 올런바웃 running card',
  }];

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
      subtitle: `${shoe.category}${shoe.price ? ` · ${formatManwon(shoe.price)}` : ''}`,
      href: `/shoes/${shoe.slug}`,
      keywords,
    });
  }

  _index = items;
  return _index;
}
