import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getGelBySlug, getGels, getSimilarGelsData } from '@/lib/data/gels';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/constants';
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
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
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

  const normalizeRating = (rating: number): number => {
    if (rating > 5) {
      return Math.round((rating / 100) * 5 * 10) / 10;
    }
    return rating;
  };

  const reviewsJsonLd =
    gel.reviews?.map((review, index) => {
      const ratingValue = normalizeRating(review.rating || gel.rating);
      return {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': review.userType || `러너${index + 1}`,
        },
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': Math.min(5, Math.max(1, ratingValue)),
          'bestRating': 5,
          'worstRating': 1,
        },
        'reviewBody': review.text,
      };
    }) || [];

  const normalizedRating = normalizeRating(gel.rating);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': `${gel.brand} ${gel.name}`,
    'description': gel.description,
    'image': gel.image || DEFAULT_OG_IMAGE,
    'brand': {
      '@type': 'Brand',
      'name': gel.brand,
    },
    'category': '에너지 젤',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': Math.min(5, Math.max(1, normalizedRating)),
      'bestRating': 5,
      'worstRating': 1,
      'ratingCount': gel.reviews?.length || 1,
      'reviewCount': gel.reviews?.length || 1,
    },
    ...(reviewsJsonLd.length > 0 && { 'review': reviewsJsonLd }),
    ...(gel.priceAnalysis?.msrp && {
      'offers': {
        '@type': 'Offer',
        'price': gel.priceAnalysis.msrp,
        'priceCurrency': 'KRW',
        'availability': 'https://schema.org/InStock',
        'url': `${SITE_URL}/gels/${slug}`,
      },
    }),
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
