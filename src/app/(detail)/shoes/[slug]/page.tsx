import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getShoeBySlug, getShoes, getSimilarShoesData } from "@/lib/data/shoes";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/constants";
import { isCompleteShoe } from "@/types/shoe";
import { HeroSection } from "@/components/detail/hero-section";
import { OnelinerSummary } from "@/components/detail/oneliner-summary";
import { CoreBoxes } from "@/components/detail/core-boxes";
import { ShoeDetailTabs } from "@/components/detail/shoe-detail-tabs";
import { MobileQuickActions } from "@/components/detail/mobile-quick-actions";
import { DetailFooterAd } from "@/components/ads/ad-unit";

type ShoeDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  const shoes = getShoes();
  return shoes
    .filter((shoe) => shoe.slug)
    .map((shoe) => ({
      slug: shoe.slug,
    }));
}

export async function generateMetadata({ params }: ShoeDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const shoe = getShoeBySlug(slug);

  if (!shoe) {
    return {
      title: "신발을 찾을 수 없습니다",
      description: "요청하신 러닝화를 찾을 수 없습니다.",
    };
  }

  // SEO 최적화된 제목 생성
  const title = `${shoe.brand} ${shoe.name} 리뷰 | 스펙, 장단점, 추천 대상 분석`;

  // 상세 설명 생성 (150-160자 권장)
  const specs = shoe.specs;
  const price = shoe.price?.toLocaleString();
  const weight = specs?.weight;
  const category = shoe.category;

  const descriptionParts = [
    shoe.description || `${shoe.brand} ${shoe.name} 상세 리뷰`,
    weight ? `무게 ${weight}g` : null,
    price ? `정가 ${price}원` : null,
    category ? `${category} 카테고리` : null,
    shoe.koreanFootFit?.toBoxWidth === 'wide' ? '발볼 넓음' : null,
    shoe.injuryPrevention?.kneeIssues === 'excellent' || shoe.injuryPrevention?.kneeIssues === 'good' ? '무릎 보호' : null,
  ].filter(Boolean);

  const description = descriptionParts.join(' | ').slice(0, 160);

  // 키워드 생성
  const keywords = [
    shoe.brand,
    shoe.name,
    `${shoe.brand} ${shoe.name}`,
    '러닝화',
    '러닝화 리뷰',
    shoe.category,
    ...(shoe.tags || []),
    shoe.koreanFootFit?.toBoxWidth === 'wide' ? '발볼 넓은 러닝화' : null,
    shoe.koreanFootFit?.flatFootCompatibility === 'excellent' || shoe.koreanFootFit?.flatFootCompatibility === 'good' ? '평발 러닝화' : null,
    shoe.biomechanics?.carbonPlate ? '카본 플레이트 러닝화' : null,
  ].filter(Boolean).join(', ');

  // 이미지 URL (첫 번째 이미지 또는 기본 이미지)
  const imageUrl = shoe.image || DEFAULT_OG_IMAGE;

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
      title: `${shoe.brand} ${shoe.name} - 러닝화 리뷰`,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${shoe.brand} ${shoe.name} 러닝화`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${shoe.brand} ${shoe.name} 리뷰`,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `/shoes/${slug}`,
    },
    other: {
      'article:author': SITE_NAME,
      'article:section': shoe.category,
      'product:price:amount': shoe.price?.toString() || '',
      'product:price:currency': 'KRW',
      'product:brand': shoe.brand,
    },
  };
}

export default async function ShoeDetailPage({ params }: ShoeDetailPageProps) {
  const { slug } = await params;
  const shoe = getShoeBySlug(slug);

  if (!shoe) {
    notFound();
  }

  // Check if shoe has complete data using type guard
  const hasCompleteData = isCompleteShoe(shoe);

  // 비슷한 신발 데이터 가져오기 (서버에서 미리 로드)
  const similarShoesData = shoe.similarShoes ? getSimilarShoesData(shoe.similarShoes) : [];

  // BreadcrumbList 구조화 데이터
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "홈",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "러닝화",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": shoe.brand,
        "item": `${SITE_URL}/brands/${shoe.brand.toLowerCase().replace(/\s+/g, '-')}`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": `${shoe.brand} ${shoe.name}`,
        "item": `${SITE_URL}/shoes/${slug}`,
      },
    ],
  };

  // Review 구조화 데이터 (신발 리뷰 데이터 활용)
  const reviewsJsonLd = shoe.reviews?.map((review, index) => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.userType || `러너${index + 1}`,
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating || shoe.rating,
      "bestRating": 5,
      "worstRating": 1,
    },
    "reviewBody": review.text,
  })) || [];

  // Product JSON-LD 구조화 데이터 (Review 포함)
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${shoe.brand} ${shoe.name}`,
    "description": shoe.description || `${shoe.brand} ${shoe.name} 러닝화`,
    "image": shoe.image || DEFAULT_OG_IMAGE,
    "brand": {
      "@type": "Brand",
      "name": shoe.brand,
    },
    "category": "러닝화",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": shoe.rating,
      "bestRating": 5,
      "worstRating": 1,
      "ratingCount": shoe.reviews?.length || 1,
      "reviewCount": shoe.reviews?.length || 1,
    },
    ...(reviewsJsonLd.length > 0 && { "review": reviewsJsonLd }),
    ...(shoe.priceAnalysis?.msrp && {
      "offers": {
        "@type": "Offer",
        "price": shoe.priceAnalysis.msrp,
        "priceCurrency": "KRW",
        "availability": "https://schema.org/InStock",
        "url": `${SITE_URL}/shoes/${slug}`,
      },
    }),
  };

  return (
    <>
      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Product + Review JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="space-y-4">
        {/* Hero Section */}
        <HeroSection shoe={shoe} />

        {hasCompleteData ? (
          <>
            {/* 한줄 요약 */}
            <OnelinerSummary shoe={shoe} />

            {/* 핵심 3박스: 추천/비추천/특징 */}
            <CoreBoxes shoe={shoe} />

            {/* 탭 기반 UI */}
            <ShoeDetailTabs shoe={shoe} similarShoesData={similarShoesData} />
          </>
        ) : (
          <div className="section-card p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">상세 정보 준비 중</h2>
            <p className="text-secondary">
              이 신발의 상세 정보는 곧 업데이트될 예정입니다.
            </p>
          </div>
        )}

        {/* 하단 광고 */}
        <DetailFooterAd />

        {/* 데이터 출처 */}
        <section className="section-card p-5 mb-20">
          <div className="flex items-start gap-3">
            <span className="text-lg">📊</span>
            <div>
              <p className="font-medium text-sm mb-1 text-primary">데이터 출처</p>
              <p className="text-xs text-secondary">
                RunRepeat Lab Test · Doctors of Running · 한국 러너 설문 (n=94)
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* 모바일 빠른 액션 버튼 */}
      <MobileQuickActions shoe={shoe} />
    </>
  );
}
