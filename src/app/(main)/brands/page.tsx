import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllBrands } from '@/lib/data/brands';
import { shoes as allShoes } from '@/lib/data/shoes';
import { isCompleteShoe } from '@/types/shoe';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '러닝화 브랜드 전체 비교 — Nike, Asics, Hoka 외 10개 브랜드',
  description:
    '나이키, 아식스, 호카, 뉴발란스 등 10개 주요 러닝화 브랜드의 라인업, 강점, 추천 모델을 한국 러너 관점에서 비교 분석합니다.',
  alternates: { canonical: '/brands' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE_NAME,
    title: '러닝화 브랜드 전체 비교',
    description:
      '나이키, 아식스, 호카, 뉴발란스 등 10개 주요 러닝화 브랜드의 라인업과 강점을 비교합니다.',
  },
};

export default function BrandsIndexPage() {
  const brands = getAllBrands();

  const brandStats = brands
    .map((b) => {
      const brandShoes = allShoes.filter(
        (s) => s.brand === b.name && isCompleteShoe(s),
      );
      const techCount = b.technologies.length;
      const avgValue =
        brandShoes.length > 0
          ? brandShoes.reduce(
              (acc, s) => acc + (s.priceAnalysis?.valueRating ?? 0),
              0,
            ) / brandShoes.length
          : 0;
      return {
        brand: b,
        count: brandShoes.length,
        techCount,
        avgValue,
      };
    })
    .sort((a, b) => b.count - a.count);

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '러닝화 브랜드 전체 비교',
    url: `${SITE_URL}/brands`,
    numberOfItems: brandStats.length,
    itemListElement: brandStats.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/brands/${b.brand.id}`,
      name: b.brand.name,
    })),
  };

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          러닝화 브랜드 전체 비교
        </h1>
        <p className="text-secondary leading-relaxed max-w-3xl">
          10개 주요 러닝화 브랜드의 라인업, 핵심 기술, 한국 러너 적합성을 한눈에 비교하세요. 각 브랜드 페이지에서 전체 모델 목록과 카테고리별 추천을 확인할 수 있습니다.
        </p>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {brandStats.map(({ brand, count, techCount, avgValue }) => (
          <li key={brand.id}>
            <Link
              href={`/brands/${brand.id}`}
              className="group block h-full p-5 bg-white border border-border rounded-lg hover:border-accent hover:shadow-sm transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs text-tertiary uppercase tracking-wide">
                    {brand.nameKo ?? ''}
                  </div>
                  <div className="text-xl font-bold text-primary group-hover:text-accent transition">
                    {brand.name}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-tertiary group-hover:text-accent group-hover:translate-x-0.5 transition" />
              </div>
              <p className="text-xs text-secondary mt-2 line-clamp-2">
                {brand.tagline}
              </p>
              <div className="flex flex-wrap gap-3 mt-4 text-xs text-tertiary">
                <span>모델 {count}개</span>
                <span>기술 {techCount}개</span>
                {avgValue > 0 && (
                  <span>평균 가성비 {avgValue.toFixed(1)}/10</span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <section className="bg-surface rounded-lg p-6">
        <h2 className="text-base font-semibold text-primary mb-2">
          브랜드보다 본인 발에 맞는 신발이 먼저
        </h2>
        <p className="text-sm text-secondary mb-3">
          브랜드 충성도보다 본인의 발 특성, 부상 이력, 러닝 목적에 맞는 신발을 고르는 게 중요합니다. 발볼·아치·예산을 입력하면 95개 신발 중 최적 매칭을 찾아드립니다.
        </p>
        <Link
          href="/recommend"
          className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold rounded hover:opacity-90 transition"
        >
          맞춤 추천 받기 →
        </Link>
      </section>
    </div>
  );
}
