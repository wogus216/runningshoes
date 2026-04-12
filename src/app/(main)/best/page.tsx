import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Footprints, MapPin, Heart, Wallet, Layers } from 'lucide-react';
import { getAllMatrices, getMatrixShoes } from '@/lib/pseo/matrices';
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
  attribute: '발 특성 · 부상 예방',
  price: '예산별',
  'brand-category': '브랜드 × 카테고리',
};

const groupDescriptions: Record<string, string> = {
  category: '입문부터 레이싱까지, 목적에 맞는 러닝화를 찾으세요.',
  distance: '10K부터 풀마라톤까지, 거리에 맞는 추천.',
  attribute: '평발, 발볼, 무릎 통증 등 본인 발 특성에 맞는 추천.',
  price: '한국 공식 사이트 정가 기준, 예산 내 가성비 TOP.',
  'brand-category': '브랜드와 카테고리를 교차해 더 세밀하게.',
};

const featuredGroups = ['category', 'distance'] as const;
const compactGroups = ['attribute', 'price', 'brand-category'] as const;

export default function BestHubPage() {
  const all = getAllMatrices();

  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sky-700">
          <Footprints className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm font-semibold">95개 신발 데이터 기반</span>
        </div>
        <h1 className="text-balance text-3xl font-black leading-tight text-primary md:text-4xl">
          러닝화 베스트 가이드
        </h1>
        <p className="max-w-2xl text-secondary leading-relaxed">
          RunRepeat 랩 테스트 데이터, 한국 러너 발 특성, 부상 예방 등급, 가성비를 종합한 추천 가이드입니다. 아래에서 본인 상황에 맞는 가이드를 선택하세요.
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
                      className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-5 transition-colors hover:border-accent hover:shadow-sm"
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
                          {count}개 모델
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
                    className="group flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3 transition-colors hover:border-accent"
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

      <section className="bg-surface rounded-xl p-6">
        <h2 className="text-base font-semibold text-primary mb-2">
          더 정확한 추천을 받고 싶다면
        </h2>
        <p className="text-sm text-secondary mb-3">
          본인의 발 특성, 부상 이력, 예산을 입력하면 95개 신발 중 맞춤 매칭 결과를 제공합니다.
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
