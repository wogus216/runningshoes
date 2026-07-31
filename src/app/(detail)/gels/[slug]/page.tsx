import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getGelBySlug, getGels, getSimilarGelsData } from '@/lib/data/gels';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, IS_PRODUCTION_DEPLOY } from '@/lib/constants';
import { HeroSection } from '@/components/gel-detail/hero-section';
import { GelDetailTabs } from '@/components/gel-detail/gel-detail-tabs';

type GelDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const allGels = getGels();
  return allGels
    .filter((gel) => gel.slug)
    .map((gel) => ({
      slug: gel.slug,
    }));
}

export async function generateMetadata({ params }: GelDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const gel = getGelBySlug(slug);

  if (!gel) {
    return {
      title: '제품을 찾을 수 없습니다',
      description: '요청하신 에너지 젤을 찾을 수 없습니다.',
    };
  }

  const title = `${gel.brand} ${gel.name} 리뷰 | 성분, 맛, 위장 안정성, 가성비 분석`;

  const descriptionParts = [
    gel.description,
    `탄수화물 ${gel.nutritionFacts.totalCarbs}g`,
    `${gel.nutritionFacts.calories}kcal`,
    gel.nutritionFacts.caffeine > 0 ? `카페인 ${gel.nutritionFacts.caffeine}mg` : null,
    `${gel.category} 카테고리`,
  ].filter(Boolean);

  const description = descriptionParts.join(' | ').slice(0, 160);

  const keywords = [
    gel.brand,
    gel.name,
    `${gel.brand} ${gel.name}`,
    '에너지 젤',
    '에너지 젤 리뷰',
    '마라톤 에너지 젤',
    gel.category,
    ...(gel.tags || []),
  ]
    .filter(Boolean)
    .join(', ');

  const imageUrl = gel.image || DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: IS_PRODUCTION_DEPLOY,
      follow: IS_PRODUCTION_DEPLOY,
      googleBot: {
        index: IS_PRODUCTION_DEPLOY,
        follow: IS_PRODUCTION_DEPLOY,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'article',
      locale: 'ko_KR',
      siteName: SITE_NAME,
      title: `${gel.brand} ${gel.name} - 에너지 젤 리뷰`,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${gel.brand} ${gel.name} 에너지 젤`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${gel.brand} ${gel.name} 리뷰`,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `/gels/${slug}`,
    },
    other: {
      'article:author': SITE_NAME,
      'article:section': gel.category,
      'product:price:amount': gel.price?.toString() || '',
      'product:price:currency': 'KRW',
      'product:brand': gel.brand,
    },
  };
}

export default async function GelDetailPage({ params }: GelDetailPageProps) {
  const { slug } = await params;
  const gel = getGelBySlug(slug);

  if (!gel) {
    notFound();
  }

  const similarGelsData = gel.similarGels ? getSimilarGelsData(gel.similarGels) : [];

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': '홈',
        'item': SITE_URL,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': '에너지 젤',
        'item': `${SITE_URL}/gels`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': `${gel.brand} ${gel.name}`,
        'item': `${SITE_URL}/gels/${slug}`,
      },
    ],
  };

  // NOTE: review·aggregateRating 구조화 데이터는 의도적으로 제외한다.
  // gel.reviews는 실사용자 후기가 아니라 데이터 기반으로 구성한 러너 유형별 분석이라,
  // Person 저자의 Review나 집계 별점으로 내보내면 Google의 리뷰 스니펫 정책(실제
  // 사용자 리뷰 요구) 위반이 되어 수동 조치 리스크가 있다. 신발 상세 페이지는 같은
  // 이유로 처음부터 제외돼 있었는데 젤만 누락돼 있었다(2026-07-30 정정).
  // 실사용자 후기 수집 체계를 갖춘 뒤 재도입할 것.

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': `${gel.brand} ${gel.name}`,
    'description': gel.description,
    'image': `${SITE_URL}${gel.image || DEFAULT_OG_IMAGE}`,
    'brand': {
      '@type': 'Brand',
      'name': gel.brand,
    },
    'category': '에너지 젤',
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'KRW',
      'availability': 'https://schema.org/InStock',
      'url': `${SITE_URL}/gels/${slug}`,
      ...(gel.priceAnalysis?.msrp && {
        'price': gel.priceAnalysis.msrp,
      }),
    },
    'additionalProperty': [
      { '@type': 'PropertyValue', name: '탄수화물', value: `${gel.nutritionFacts.totalCarbs}g` },
      { '@type': 'PropertyValue', name: '칼로리', value: `${gel.nutritionFacts.calories}kcal` },
      ...(gel.nutritionFacts.caffeine > 0 ? [{ '@type': 'PropertyValue', name: '카페인', value: `${gel.nutritionFacts.caffeine}mg` }] : []),
      { '@type': 'PropertyValue', name: '위장 안정성', value: gel.giTolerance.overall },
      { '@type': 'PropertyValue', name: '카테고리', value: gel.category },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />

      <div className="space-y-4">
        {/* 브레드크럼 */}
        <nav className="section-card border border-[var(--accent-line)] bg-white/80 px-4 py-3" aria-label="breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm">
            <li><Link href="/" className="text-secondary transition hover:text-sky-700">홈</Link></li>
            <li className="text-tertiary">/</li>
            <li><Link href="/gels" className="text-secondary transition hover:text-sky-700">에너지 젤</Link></li>
            <li className="text-tertiary">/</li>
            <li className="text-primary font-medium truncate">{gel.brand} {gel.name}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <HeroSection gel={gel} />

        {/* 핵심 특징 박스 */}
        <div className="grid md:grid-cols-3 gap-3">
          {/* 추천 대상 */}
          <div className="section-card border border-sky-200 bg-sky-50/70 p-4">
            <h3 className="mb-2 text-sm font-bold text-sky-700">추천 대상</h3>
            <ul className="space-y-1.5">
              {gel.usageGuide.bestFor.slice(0, 4).map((item, i) => (
                <li key={i} className="text-sm text-secondary flex items-start gap-1.5">
                  <span className="mt-0.5 text-sky-700">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 비추천 대상 */}
          <div className="section-card border border-rose-200 bg-rose-50/80 p-4">
            <h3 className="mb-2 text-sm font-bold text-rose-600">이런 분은 비추</h3>
            <ul className="space-y-1.5">
              {gel.usageGuide.avoidIf.slice(0, 4).map((item, i) => (
                <li key={i} className="text-sm text-secondary flex items-start gap-1.5">
                  <span className="mt-0.5 text-rose-600">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 핵심 특징 */}
          <div className="section-card border border-[var(--accent-line)] bg-white/84 p-4">
            <h3 className="mb-2 text-sm font-bold text-sky-700">핵심 특징</h3>
            <ul className="space-y-1.5">
              {gel.features.slice(0, 4).map((feature, i) => (
                <li key={i} className="text-sm text-secondary flex items-start gap-1.5">
                  <span className="mt-0.5 text-sky-700">→</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 탭 기반 상세 정보 */}
        <GelDetailTabs gel={gel} similarGelsData={similarGelsData} />

        {/* 데이터 출처 */}
        <section className="section-card border border-[var(--accent-line)] bg-white/84 p-5">
          <div className="flex items-start gap-3">
            <span className="text-lg">🧪</span>
            <div>
              <p className="font-medium text-sm mb-1 text-primary">데이터 출처</p>
              <p className="text-xs text-secondary">Energy Gel Review Skill Framework · 제품 성분표 · 한국 러닝 커뮤니티 후기</p>
            </div>
          </div>
        </section>

        <div className="h-28 md:h-20" aria-hidden="true" />
      </div>
    </>
  );
}
