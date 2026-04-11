import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import {
  getAllMatrices,
  getMatrixBySlug,
  getMatrixShoes,
} from '@/lib/pseo/matrices';
import { getAllPairs } from '@/lib/pseo/pairs';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllMatrices().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getMatrixBySlug(slug);
  if (!entry) {
    return { title: '페이지를 찾을 수 없습니다' };
  }
  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    alternates: { canonical: `/best/${entry.slug}` },
    openGraph: {
      type: 'article',
      locale: 'ko_KR',
      siteName: SITE_NAME,
      title: entry.metaTitle,
      description: entry.metaDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.metaTitle,
      description: entry.metaDescription,
    },
  };
}

function formatPrice(p?: number): string {
  if (!p) return '-';
  return `${(p / 10000).toFixed(0)}만원`;
}

export default async function BestPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getMatrixBySlug(slug);
  if (!entry) notFound();

  const shoes = getMatrixShoes(entry).slice(0, 12);
  const shoeSlugSet = new Set(shoes.map((s) => s.slug));
  const relatedPairs = getAllPairs()
    .filter((p) => shoeSlugSet.has(p.a.slug) && shoeSlugSet.has(p.b.slug))
    .slice(0, 6);

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: entry.metaTitle,
    description: entry.metaDescription,
    url: `${SITE_URL}/best/${entry.slug}`,
    numberOfItems: shoes.length,
    itemListElement: shoes.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/shoes/${s.slug}`,
      name: `${s.brand} ${s.name}`,
    })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entry.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <article className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav className="flex items-center gap-1 text-sm text-secondary">
        <Link href="/" className="hover:text-primary">홈</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/best" className="hover:text-primary">베스트 가이드</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-primary">{entry.h1}</span>
      </nav>

      <header className="space-y-4 border-b border-border pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
          {entry.h1}
        </h1>
        <p className="text-secondary leading-relaxed">{entry.intro}</p>
        <div className="text-xs text-tertiary">
          분석 모델 {shoes.length}개 · 데이터 기준일 {new Date().toISOString().slice(0, 10)}
        </div>
      </header>

      <section>
        <h2 className="text-xl font-semibold text-primary mb-4">추천 TOP {shoes.length}</h2>
        <ol className="space-y-4">
          {shoes.map((shoe, idx) => (
            <li
              key={shoe.slug}
              className="flex gap-4 p-4 bg-white rounded-lg border border-border hover:border-accent transition"
            >
              <div className="flex-shrink-0 w-12 text-center">
                <div className="text-2xl font-bold text-accent">#{idx + 1}</div>
              </div>
              {shoe.image && (
                <Link
                  href={`/shoes/${shoe.slug}`}
                  className="flex-shrink-0 w-24 h-24 relative bg-surface rounded"
                >
                  <Image
                    src={shoe.image}
                    alt={`${shoe.brand} ${shoe.name}`}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </Link>
              )}
              <div className="flex-1 min-w-0">
                <Link
                  href={`/shoes/${shoe.slug}`}
                  className="block hover:text-accent transition"
                >
                  <div className="text-xs text-tertiary uppercase tracking-wide">
                    {shoe.brand}
                  </div>
                  <div className="text-lg font-semibold text-primary">{shoe.name}</div>
                </Link>
                <p className="text-sm text-secondary mt-1 line-clamp-2">
                  {shoe.oneliner || shoe.description}
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
                    <span>토박스 {shoe.koreanFootFit.toBoxWidth}</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-primary">스펙 한눈에 비교</h2>
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-surface text-tertiary">
              <tr>
                <th className="text-left p-3 font-medium">#</th>
                <th className="text-left p-3 font-medium">모델</th>
                <th className="text-right p-3 font-medium whitespace-nowrap">가격</th>
                <th className="text-right p-3 font-medium whitespace-nowrap">무게</th>
                <th className="text-right p-3 font-medium whitespace-nowrap">힐/포어</th>
                <th className="text-right p-3 font-medium whitespace-nowrap">드롭</th>
                <th className="text-right p-3 font-medium whitespace-nowrap">가성비</th>
                <th className="text-center p-3 font-medium whitespace-nowrap">토박스</th>
                <th className="text-center p-3 font-medium whitespace-nowrap">카본</th>
              </tr>
            </thead>
            <tbody>
              {shoes.map((s, i) => (
                <tr key={s.slug} className="border-t border-border hover:bg-surface/60">
                  <td className="p-3 text-tertiary">{i + 1}</td>
                  <td className="p-3">
                    <Link href={`/shoes/${s.slug}`} className="font-semibold text-primary hover:text-accent">
                      {s.brand} {s.name}
                    </Link>
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">{formatPrice(s.price)}</td>
                  <td className="p-3 text-right whitespace-nowrap">
                    {s.specs?.weight ? `${s.specs.weight}g` : '-'}
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">
                    {s.biomechanics?.stackHeight
                      ? `${s.biomechanics.stackHeight.heel}/${s.biomechanics.stackHeight.forefoot}`
                      : '-'}
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">
                    {s.biomechanics?.drop !== undefined ? `${s.biomechanics.drop}mm` : '-'}
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">
                    {s.priceAnalysis?.valueRating !== undefined
                      ? `${s.priceAnalysis.valueRating}/10`
                      : '-'}
                  </td>
                  <td className="p-3 text-center whitespace-nowrap text-xs">
                    {s.koreanFootFit?.toBoxWidth === 'wide'
                      ? '넓음'
                      : s.koreanFootFit?.toBoxWidth === 'standard'
                        ? '표준'
                        : s.koreanFootFit?.toBoxWidth === 'narrow'
                          ? '좁음'
                          : '-'}
                  </td>
                  <td className="p-3 text-center whitespace-nowrap">
                    {s.biomechanics?.carbonPlate ? '✓' : '–'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-tertiary">
          힐/포어 = 힐 스택 / 전족부 스택 (mm). 데이터 출처: RunRepeat 랩 테스트, 브랜드 공식 사이트.
        </p>
      </section>

      {entry.faq.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">자주 묻는 질문</h2>
          <div className="space-y-3">
            {entry.faq.map((f, i) => (
              <details
                key={i}
                className="bg-white border border-border rounded-lg p-4"
              >
                <summary className="font-semibold text-primary cursor-pointer">
                  Q. {f.q}
                </summary>
                <p className="mt-3 text-secondary leading-relaxed">A. {f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {relatedPairs.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-primary">이 카테고리 인기 1:1 비교</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {relatedPairs.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/vs/${p.slug}`}
                  className="block px-4 py-3 bg-white border border-border hover:border-accent rounded-lg transition"
                >
                  <div className="text-sm font-semibold text-primary">
                    {p.a.brand} {p.a.name}
                    <span className="text-tertiary font-normal mx-2">vs</span>
                    {p.b.brand} {p.b.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="bg-surface rounded-lg p-6">
        <h2 className="text-base font-semibold text-primary mb-2">더 정확한 추천을 받고 싶다면</h2>
        <p className="text-sm text-secondary mb-3">
          본인의 발 특성, 부상 이력, 예산을 입력하면 95개 신발 중 맞춤 매칭 결과를 제공합니다.
        </p>
        <Link
          href="/recommend"
          className="inline-block px-4 py-2 bg-accent text-white text-sm font-semibold rounded hover:opacity-90 transition"
        >
          맞춤 추천 받기 →
        </Link>
      </section>
    </article>
  );
}
