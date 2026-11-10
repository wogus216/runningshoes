import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Footprints, MapPin, Heart, Wallet, Layers } from 'lucide-react';
import { getAllMatrices, getMatrixShoes } from '@/lib/pseo/matrices';
import { getShoes } from '@/lib/data/shoes';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/constants';
import { breadcrumbJsonLd } from '@/lib/seo/breadcrumb';

const SHOE_COUNT = getShoes().length;

export const metadata: Metadata = {
  title: '러닝화 베스트 가이드 — 카테고리/발특성/예산별 추천',
  description:
    `${SHOE_COUNT}개 러닝화를 카테고리, 발 특성, 가격대, 브랜드별로 분석한 추천 가이드 모음.`,
  alternates: { canonical: '/best' },
  openGraph: {
      // 페이지가 openGraph 를 지정하면 layout 의 기본 이미지가 병합되지 않고 덮인다
      images: [DEFAULT_OG_IMAGE],
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE_NAME,
    title: '러닝화 베스트 가이드',
    description:
      `${SHOE_COUNT}개 러닝화를 카테고리, 발 특성, 가격대, 브랜드별로 분석한 추천 가이드 모음.`,
  },
};

const groupIcons: Record<string, typeof Footprints> = {
  category: Footprints,
  distance: MapPin,
  attribute: Heart,
  price: Wallet,
  'brand-category': Layers,
};

const groupLabels: Record<string, string> = {
  category: '러닝 목적별',
  distance: '대회 거리별',
  attribute: '발볼 비교 · 건강 근거',
  price: '예산별',
  'brand-category': '브랜드 × 카테고리',
};

const groupDescriptions: Record<string, string> = {
  category: '입문부터 레이싱까지, 목적에 맞는 러닝화를 찾으세요.',
  distance: '거리별 편집 목록의 선정 조건과 착화 확인 사항.',
  attribute: '발볼 비교와 통증이 있을 때 확인할 근거 안내.',
  price: '확인한 한국 가격으로 예산 안의 비교 후보 찾기.',
  'brand-category': '브랜드와 카테고리를 교차해 더 세밀하게.',
};

const featuredGroups = ['category', 'distance'] as const;
const compactGroups = ['attribute', 'price', 'brand-category'] as const;

export default function BestHubPage() {
  const all = getAllMatrices();

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/best#collection`,
    url: `${SITE_URL}/best`,
    name: '러닝화 베스트 가이드',
    description: `${SHOE_COUNT}개 러닝화를 카테고리, 발 특성, 가격대, 브랜드별로 분석한 추천 가이드 모음.`,
    inLanguage: 'ko-KR',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: all.length,
      itemListElement: all.map((m, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/best/${m.slug}`,
        name: m.h1,
      })),
    },
  };

  const breadcrumbLd = breadcrumbJsonLd([{ name: '베스트', path: '/best' }]);

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sky-700">
          <Footprints className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm font-semibold">{SHOE_COUNT}개 신발 데이터 기반</span>
        </div>
        <h1 className="text-balance text-3xl font-black leading-tight text-primary md:text-4xl">
          러닝화 베스트 가이드
        </h1>
        <p className="max-w-2xl text-secondary leading-relaxed">
          제품 구조·확인 가격·한국 와이드 옵션으로 비교 후보를 찾는 안내입니다. 각 목록의 선정 조건을 읽고 모델별 출처와 실제 착화감을 확인하세요.
        </p>
      </header>

      {featuredGroups.map((groupKey) => {
        const items = all.filter((m) => m.group === groupKey);
        if (items.length === 0) return null;
        const Icon = groupIcons[groupKey];
        return (
          <section key={groupKey} className="space-y-4">
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="text-xl font-bold text-primary">
                {groupLabels[groupKey]}
              </h2>
            </div>
            <p className="text-sm text-secondary">{groupDescriptions[groupKey]}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((m) => {
                const count = getMatrixShoes(m).length;
                return (
                  <li key={m.slug}>
                    <Link
                      href={`/best/${m.slug}`}
                      className="group flex h-full flex-col justify-between rounded-[4px] border border-border bg-white p-5 transition-colors hover:border-accent"
                    >
                      <div>
                        <div className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                          {m.h1.replace(/ — .*/, '')}
                        </div>
                        <p className="mt-2 text-xs text-secondary line-clamp-2 leading-relaxed">
                          {m.metaDescription}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs font-semibold text-tertiary">
                          {m.evidenceGuide ? '근거 안내' : `${count}개 모델`}
                        </span>
                        <ArrowRight className="h-4 w-4 text-tertiary group-hover:text-accent group-hover:translate-x-0.5 transition" aria-hidden="true" />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      {compactGroups.map((groupKey) => {
        const items = all.filter((m) => m.group === groupKey);
        if (items.length === 0) return null;
        const Icon = groupIcons[groupKey];
        return (
          <section key={groupKey} className="space-y-3">
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="text-xl font-bold text-primary">
                {groupLabels[groupKey]}
              </h2>
            </div>
            <p className="text-sm text-secondary">{groupDescriptions[groupKey]}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {items.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/best/${m.slug}`}
                    className="group flex items-center justify-between rounded-[4px] border border-border bg-white px-4 py-3 transition-colors hover:border-accent"
                  >
                    <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                      {m.h1.replace(/ — .*/, '')}
                    </span>
                    <ArrowRight className="h-3 w-3 flex-shrink-0 text-tertiary group-hover:text-accent transition" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <section className="bg-surface rounded-[4px] p-6">
        <h2 className="text-base font-semibold text-primary mb-2">
          용도·폭 옵션·예산으로 후보를 좁히려면
        </h2>
        <p className="text-sm text-secondary mb-3">
          러닝 목적, 와이드 옵션 필요 여부, 예산을 입력하면 {SHOE_COUNT}개 등록 모델에서 조건에 맞는 후보를 찾습니다.
        </p>
        <Link
          href="/recommend"
          className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
        >
          맞춤 추천 받기 →
        </Link>
      </section>
    </div>
  );
}
