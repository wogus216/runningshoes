import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import {
  getAllBrandSlugs,
  getBrandBySlug,
} from '@/lib/data/brands';
import { shoes as allShoes } from '@/lib/data/shoes';
import { isCompleteShoe } from '@/types/shoe';
import { categoryOrder } from '@/lib/data/shoes';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import type { Shoe } from '@/types/shoe';

type PageProps = {
  params: Promise<{ brand: string }>;
};

export function generateStaticParams() {
  return getAllBrandSlugs().map((brand) => ({ brand }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { brand: brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return { title: '브랜드를 찾을 수 없습니다' };

  const count = allShoes.filter(
    (s) => s.brand === brand.name && isCompleteShoe(s),
  ).length;

  const title = `${brand.name} 러닝화 전체 비교 — ${count}개 모델 분석 | ${brand.nameKo ?? ''}`;
  const description = `${brand.name}(${brand.nameKo ?? ''})의 러닝화 ${count}개 모델을 카테고리별로 정리. 핵심 기술, 가성비, 한국 러너 적합성까지 한눈에 비교합니다.`;

  return {
    title,
    description,
    alternates: { canonical: `/brands/${brandSlug}` },
    openGraph: {
      type: 'article',
      locale: 'ko_KR',
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function formatPrice(p?: number): string {
  if (!p) return '-';
  return `${(p / 10000).toFixed(0)}만원`;
}

function sortByValue(a: Shoe, b: Shoe): number {
  const av = a.priceAnalysis?.valueRating ?? 0;
  const bv = b.priceAnalysis?.valueRating ?? 0;
  if (bv !== av) return bv - av;
  return (b.rating ?? 0) - (a.rating ?? 0);
}

export default async function BrandDetailPage({ params }: PageProps) {
  const { brand: brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) notFound();

  const brandShoes = allShoes
    .filter((s) => s.brand === brand.name && isCompleteShoe(s))
    .sort(sortByValue);

  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      shoes: brandShoes.filter((s) => s.category === cat),
    }))
    .filter((g) => g.shoes.length > 0);

  const topTechnologies = brand.technologies.slice(0, 4);
  const hasTechnologyPage = brand.technologies.length > 0;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: '브랜드', item: `${SITE_URL}/brands` },
      {
        '@type': 'ListItem',
        position: 3,
        name: brand.name,
        item: `${SITE_URL}/brands/${brand.id}`,
      },
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${brand.name} 러닝화 전체`,
    url: `${SITE_URL}/brands/${brand.id}`,
    numberOfItems: brandShoes.length,
    itemListElement: brandShoes.slice(0, 20).map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/shoes/${s.slug}`,
      name: `${s.brand} ${s.name}`,
    })),
  };

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <nav className="flex items-center gap-1 text-sm text-secondary">
        <Link href="/" className="hover:text-primary">홈</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/brands" className="hover:text-primary">브랜드</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-primary">{brand.name}</span>
      </nav>

      <header className="space-y-4 border-b border-border pb-6">
        <div className="text-xs text-tertiary uppercase tracking-wide">
          {brand.nameKo ?? ''}
          {brand.founded && ` · 설립 ${brand.founded}`}
          {brand.headquarters && ` · ${brand.headquarters}`}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
          {brand.name} 러닝화 — {brandShoes.length}개 모델 비교
        </h1>
        <p className="text-secondary leading-relaxed">{brand.description}</p>
        <div className="flex flex-wrap gap-2">
          {hasTechnologyPage && (
            <Link
              href={`/brands/${brand.id}/technology`}
              className="inline-block px-4 py-2 bg-white border border-border text-sm text-primary rounded hover:border-accent transition"
            >
              {brand.name} 기술 가이드 →
            </Link>
          )}
          {brand.website && (
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-white border border-border text-sm text-primary rounded hover:border-accent transition"
            >
              공식 사이트 ↗
            </a>
          )}
        </div>
      </header>

      {topTechnologies.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-primary">핵심 기술</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topTechnologies.map((t) => (
              <li
                key={t.id}
                className="p-4 bg-white border border-border rounded-lg"
              >
                <div className="font-semibold text-primary">
                  {t.name}
                  {t.nameKo && (
                    <span className="text-tertiary text-sm ml-1">{t.nameKo}</span>
                  )}
                </div>
                <p className="text-sm text-secondary mt-1 line-clamp-2">
                  {t.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {grouped.map(({ category, shoes }) => (
        <section key={category} className="space-y-4">
          <h2 className="text-xl font-semibold text-primary border-l-4 border-accent pl-3">
            {category} ({shoes.length})
          </h2>
          <ol className="space-y-3">
            {shoes.map((shoe, idx) => (
              <li
                key={shoe.slug}
                className="flex gap-4 p-4 bg-white rounded-lg border border-border hover:border-accent transition"
              >
                <div className="flex-shrink-0 w-10 text-center">
                  <div className="text-xl font-bold text-accent">#{idx + 1}</div>
                </div>
                {shoe.image && (
                  <Link
                    href={`/shoes/${shoe.slug}`}
                    className="flex-shrink-0 w-20 h-20 relative bg-surface rounded"
                  >
                    <Image
                      src={shoe.image}
                      alt={`${shoe.brand} ${shoe.name}`}
                      fill
                      sizes="80px"
                      className="object-contain"
                    />
                  </Link>
                )}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/shoes/${shoe.slug}`}
                    className="block hover:text-accent transition"
                  >
                    <div className="text-base font-semibold text-primary">
                      {shoe.name}
                    </div>
                  </Link>
                  <p className="text-sm text-secondary mt-1 line-clamp-2">
                    {shoe.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2 text-xs text-tertiary">
                    <span>가격 {formatPrice(shoe.price)}</span>
                    {shoe.specs?.weight && <span>무게 {shoe.specs.weight}g</span>}
                    {shoe.biomechanics?.drop !== undefined && (
                      <span>드롭 {shoe.biomechanics.drop}mm</span>
                    )}
                    {shoe.priceAnalysis?.valueRating !== undefined && (
                      <span>가성비 {shoe.priceAnalysis.valueRating}/10</span>
                    )}
                    {shoe.koreanFootFit?.toBoxWidth && (
                      <span>
                        토박스{' '}
                        {shoe.koreanFootFit.toBoxWidth === 'wide'
                          ? '넓음'
                          : shoe.koreanFootFit.toBoxWidth === 'standard'
                            ? '표준'
                            : '좁음'}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <section className="bg-surface rounded-lg p-6">
        <h2 className="text-base font-semibold text-primary mb-2">
          {brand.name} 외 다른 브랜드도 비교해 보세요
        </h2>
        <p className="text-sm text-secondary mb-3">
          본인 발 특성과 러닝 목적에 따라 더 적합한 브랜드가 있을 수 있습니다.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/brands"
            className="inline-block px-4 py-2 bg-white border border-border text-sm text-primary rounded hover:border-accent transition"
          >
            전체 브랜드 보기
          </Link>
          <Link
            href="/recommend"
            className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold rounded hover:opacity-90 transition"
          >
            맞춤 추천 받기 →
          </Link>
        </div>
      </section>
    </article>
  );
}
