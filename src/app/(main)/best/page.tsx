import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllMatrices } from '@/lib/pseo/matrices';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: '러닝화 베스트 가이드 — 카테고리/발특성/예산별 추천',
  description:
    '95개 러닝화를 카테고리, 발 특성, 부상 예방, 가격대, 브랜드별로 분석한 추천 가이드 모음.',
  alternates: { canonical: '/best' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE_NAME,
    title: '러닝화 베스트 가이드',
    description:
      '95개 러닝화를 카테고리, 발 특성, 부상 예방, 가격대, 브랜드별로 분석한 추천 가이드 모음.',
  },
};

const groupLabels: Record<string, string> = {
  category: '카테고리별',
  distance: '거리별',
  attribute: '발 특성·부상 예방별',
  price: '예산별',
  'brand-category': '브랜드 × 카테고리별',
};

const groupOrder = ['category', 'distance', 'attribute', 'price', 'brand-category'] as const;

export default function BestHubPage() {
  const all = getAllMatrices();
  const grouped = groupOrder.map((g) => ({
    group: g,
    label: groupLabels[g],
    items: all.filter((m) => m.group === g),
  }));

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          러닝화 베스트 가이드
        </h1>
        <p className="text-secondary leading-relaxed max-w-3xl">
          95개 러닝화를 다양한 기준으로 분석한 추천 가이드입니다. RunRepeat 랩 테스트 데이터, 한국 러너 발 특성, 부상 예방 등급, 가성비를 종합해 정리했습니다.
        </p>
      </header>

      {grouped.map(
        ({ group, label, items }) =>
          items.length > 0 && (
            <section key={group} className="space-y-4">
              <h2 className="text-xl font-semibold text-primary border-l-4 border-accent pl-3">
                {label} ({items.length})
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/best/${m.slug}`}
                      className="block p-4 bg-white border border-border rounded-lg hover:border-accent hover:shadow-sm transition"
                    >
                      <div className="font-semibold text-primary leading-snug">
                        {m.h1.replace(/ — .*/, '')}
                      </div>
                      <div className="text-xs text-tertiary mt-1 line-clamp-2">
                        {m.metaDescription}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ),
      )}
    </div>
  );
}
