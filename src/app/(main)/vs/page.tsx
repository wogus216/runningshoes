import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPairs } from '@/lib/pseo/pairs';
import { categoryOrder } from '@/types/shoe';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/constants';
import { breadcrumbJsonLd } from '@/lib/seo/breadcrumb';

export const metadata: Metadata = {
  title: '러닝화 1:1 비교 — 카테고리별 모델 조합',
  description: '두 모델에서 확인한 무게·스택·드롭·가격과 폭 옵션을 비교합니다. 분류와 출처·측정 조건은 모델별로 확인하세요.',
  alternates: { canonical: '/vs' },
  openGraph: {
      // 페이지가 openGraph 를 지정하면 layout 의 기본 이미지가 병합되지 않고 덮인다
      images: [DEFAULT_OG_IMAGE],
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE_NAME,
    title: '러닝화 1:1 비교',
    description: '두 모델에서 확인한 제품 정보·현재 분류와 측정 조건을 비교합니다.',
  },
};

export default function VsHubPage() {
  const pairs = getAllPairs();
  const grouped = pairs.reduce<Record<string, typeof pairs>>((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/vs#collection`,
    url: `${SITE_URL}/vs`,
    name: '러닝화 1:1 비교',
    description: '두 모델에서 확인한 제품 정보·현재 분류와 측정 조건을 비교합니다.',
    inLanguage: 'ko-KR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: pairs.length,
      itemListElement: pairs.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/vs/${p.slug}`,
        name: `${p.a.brand} ${p.a.name} vs ${p.b.brand} ${p.b.name}`,
      })),
    },
  };

  const breadcrumbLd = breadcrumbJsonLd([{ name: '1:1 비교', path: '/vs' }]);

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">러닝화 1:1 비교</h1>
        <p className="text-secondary leading-relaxed max-w-3xl">
          사이트에 등록된 모델의 비교 조합입니다. 분류가 달라진 기존 조합은 각 모델의 현재 분류를 함께 표시합니다. 확인된 무게·스택·드롭·가격과 폭 옵션을 비교하고, 측정 사이즈와 출처를 모델별로 확인하세요. 이 목록은 검색 인기나 부상 예방 효과의 순위가 아닙니다.
        </p>
      </header>

      {categoryOrder.map((cat) => {
        const list = grouped[cat] || [];
        if (list.length === 0) return null;
        return (
          <section key={cat} className="space-y-3">
            <h2 className="text-xl font-semibold text-primary border-l-4 border-accent pl-3">
              {cat} ({list.length})
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {list.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/vs/${p.slug}`}
                    className="block p-3 bg-white border border-border rounded-[4px] hover:border-accent transition"
                  >
                    <div className="text-sm font-semibold text-primary">
                      {p.a.brand} {p.a.name}
                      <span className="text-tertiary font-normal mx-2">vs</span>
                      {p.b.brand} {p.b.name}
                    </div>
                    {p.a.category !== p.b.category ? <div className="text-xs text-tertiary mt-1">{p.a.category} · {p.b.category}</div> : null}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
