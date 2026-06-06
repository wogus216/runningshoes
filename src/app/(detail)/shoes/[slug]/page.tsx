import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getShoeBySlug, getShoes, getSimilarShoesData } from '@/lib/data/shoes';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, ADSENSE_SLOTS, IS_PRODUCTION_DEPLOY } from '@/lib/constants';
import { AdSlot } from '@/components/ads/ad-slot';
import { isCompleteShoe } from '@/types/shoe';
import { Breadcrumb } from '@/components/detail/breadcrumb';
import { HeroSection } from '@/components/detail/hero-section';
import { OnelinerSummary } from '@/components/detail/oneliner-summary';
import { AtAGlance } from '@/components/detail/at-a-glance';
import { EditorComment } from '@/components/detail/editor-comment';
import { CoreBoxes } from '@/components/detail/core-boxes';
import { ShoeDetailTabs } from '@/components/detail/shoe-detail-tabs';
import { MobileQuickActions } from '@/components/detail/mobile-quick-actions';
import { PurchaseLinks } from '@/components/detail/purchase-links';
import { ShoeCrossLinks } from '@/components/pseo/shoe-cross-links';

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
      title: '신발을 찾을 수 없습니다',
      description: '요청하신 러닝화를 찾을 수 없습니다.',
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
  ]
    .filter(Boolean)
    .join(', ');

  // 이미지 URL (첫 번째 이미지 또는 기본 이미지)
  const imageUrl = shoe.image || DEFAULT_OG_IMAGE;

  // 불완전한 데이터 신발은 noindex 처리 (thin content 방지)
  // + 프로덕션 배포에서만 색인 (프리뷰/로컬은 noindex)
  const shouldIndex = IS_PRODUCTION_DEPLOY && isCompleteShoe(shoe);

  return {
    title,
    description,
    keywords,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: shouldIndex,
      follow: IS_PRODUCTION_DEPLOY,
      googleBot: {
        index: shouldIndex,
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

  // priceAnalysis.alternatives → 서버에서 slug/brand/name으로 미리 resolve
  // (클라이언트에서 getShoes() 호출 제거 → 번들 경량화)
  const resolvedAlternatives = shoe.priceAnalysis?.alternatives
    ? shoe.priceAnalysis.alternatives.map((key) => {
        const allShoes = getShoes();
        const bySlug = allShoes.find((s) => s.slug === key);
        if (bySlug) return { key, slug: bySlug.slug, brand: bySlug.brand, name: bySlug.name };
        const normalized = key.toLowerCase().replace(/\s+/g, '');
        const byName = allShoes.find((s) => {
          const full = `${s.brand} ${s.name}`.toLowerCase().replace(/\s+/g, '');
          const nameOnly = s.name.toLowerCase().replace(/\s+/g, '');
          return full.includes(normalized) || normalized.includes(nameOnly) || nameOnly.includes(normalized);
        });
        return byName
          ? { key, slug: byName.slug, brand: byName.brand, name: byName.name }
          : { key };
      })
    : [];

  // BreadcrumbList 구조화 데이터
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
        'name': shoe.brand,
        'item': `${SITE_URL}/brands/${shoe.brand.toLowerCase().replace(/\s+/g, '-')}`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': `${shoe.brand} ${shoe.name}`,
        'item': `${SITE_URL}/shoes/${slug}`,
      },
    ],
  };

  // Product JSON-LD 구조화 데이터
  // NOTE: aggregateRating과 review는 에디터 분석만으로 구성돼 있어 의도적으로 제외.
  // Google의 review snippet 정책은 실제 사용자 리뷰를 요구하며, 자체 편집 리뷰만으로는
  // 수동 조치 리스크가 있음. 실사용자 리뷰 확보 후 재도입 예정.
  const productImages = (shoe.images && shoe.images.length > 0
    ? shoe.images
    : [shoe.image || DEFAULT_OG_IMAGE]
  ).map((img) => (img.startsWith('http') ? img : `${SITE_URL}${img}`));

  const productPrice = shoe.priceAnalysis?.msrp ?? shoe.price;

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': `${shoe.brand} ${shoe.name}`,
    'description': shoe.description || `${shoe.brand} ${shoe.name} 러닝화`,
    'image': productImages,
    'brand': {
      '@type': 'Brand',
      'name': shoe.brand,
    },
    'category': '러닝화',
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'KRW',
      'availability': 'https://schema.org/InStock',
      'url': `${SITE_URL}/shoes/${slug}`,
      ...(productPrice && {
        'price': productPrice,
      }),
    },
  };

  // FAQ JSON-LD — 신발 데이터로 동적 생성 (한국 러너 관점 5문항)
  // 실제 데이터가 있을 때만 해당 Q&A 포함 → 부정확한 답변 방지
  const faqItems: Array<{ q: string; a: string }> = [];

  const widthMap: Record<string, string> = {
    narrow: '좁음',
    standard: '표준',
    wide: '넓음',
  };
  if (shoe.koreanFootFit?.toBoxWidth) {
    const widthLabel = widthMap[shoe.koreanFootFit.toBoxWidth] || shoe.koreanFootFit.toBoxWidth;
    const wideOpt = shoe.koreanFootFit.wideOptions ? ' 와이드(2E·4E) 옵션이 정식 출시되어 발볼 넓은 한국 러너도 안심하고 선택할 수 있습니다.' : ' 와이드 옵션이 없어 발볼 매우 넓은 러너는 사이즈 +0.5를 권장하거나 다른 와이드 옵션 모델을 고려하세요.';
    faqItems.push({
      q: `${shoe.brand} ${shoe.name}이 발볼 넓은 한국 러너에게 맞나요?`,
      a: `토박스 너비가 ${widthLabel} 등급으로 분류됩니다.${wideOpt}`,
    });
  }

  const flatMap: Record<string, string> = {
    excellent: '매우 적합 — 강한 안정성 시스템과 충분한 아치 서포트로 평발 러너의 안쪽 무너짐을 효과적으로 잡아줍니다.',
    good: '적합 — 적절한 안정성을 제공하며 평발 러너가 부담 없이 사용할 수 있습니다.',
    fair: '주의 필요 — 중립 또는 약한 안정성이라 심한 평발은 부담될 수 있습니다.',
    poor: '비추천 — 안정성이 부족해 평발 러너에게는 부상 위험이 있습니다.',
  };
  if (shoe.koreanFootFit?.flatFootCompatibility) {
    faqItems.push({
      q: `평발인데 ${shoe.name} 신을 수 있나요?`,
      a: flatMap[shoe.koreanFootFit.flatFootCompatibility] || '평발 적합성 정보를 확인 중입니다.',
    });
  }

  const kneeMap: Record<string, string> = {
    excellent: '무릎 보호에 매우 좋은 신발입니다. 충분한 쿠셔닝과 부드러운 착지로 무릎 충격을 효과적으로 줄입니다.',
    good: '무릎 보호 측면에서 양호합니다. 통상적인 무릎 통증 러너에게 무리 없는 선택입니다.',
    caution: '무릎 통증 이력이 있다면 주의가 필요합니다. 짧은 거리부터 시작해 본인에게 맞는지 확인하세요.',
    warning: '무릎 통증 러너에게는 권장하지 않습니다. 더 부드러운 쿠션의 신발을 고려하세요.',
  };
  if (shoe.injuryPrevention?.kneeIssues) {
    faqItems.push({
      q: `무릎 통증이 있는데 ${shoe.name} 신어도 괜찮나요?`,
      a: kneeMap[shoe.injuryPrevention.kneeIssues] || '무릎 보호 등급 정보를 확인 중입니다.',
    });
  }

  if (shoe.category && shoe.targetUsers?.recommended) {
    const beginnerFriendly = ['입문화', '데일리', '쿠션화'].includes(shoe.category);
    const recList = shoe.targetUsers.recommended.slice(0, 3).join(', ');
    faqItems.push({
      q: `${shoe.brand} ${shoe.name}은 누구에게 추천되나요?`,
      a: `${shoe.category} 카테고리 신발로, 주로 ${recList} 같은 러너에게 추천됩니다.${beginnerFriendly ? ' 입문~중급 러너도 부담 없이 신을 수 있는 카테고리입니다.' : ' 일정 수준의 러닝 경험이 있는 러너에게 더 적합합니다.'}`,
    });
  }

  if (shoe.biomechanics?.optimalPace) {
    faqItems.push({
      q: `${shoe.name}의 최적 페이스 구간은 어떻게 되나요?`,
      a: `${shoe.biomechanics.optimalPace} 페이스 구간에서 가장 좋은 성능을 발휘합니다. 더 빠른 페이스나 훨씬 느린 페이스에서는 다른 카테고리 신발을 고려하세요.`,
    });
  }

  const faqJsonLd = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map((item) => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a,
      },
    })),
  } : null;

  return (
    <>
      {/* BreadcrumbList JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Product JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      {/* FAQ JSON-LD (동적 생성, 데이터 있을 때만) */}
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <div className="space-y-4">
        {/* 브레드크럼 */}
        <Breadcrumb brand={shoe.brand} category={shoe.category} shoeName={shoe.name} />

        {/* Hero Section */}
        <HeroSection shoe={shoe} />

        {/* 구매처/최저가 + 제휴 고지 (purchaseLinks가 있을 때만) */}
        {shoe.purchaseLinks && shoe.purchaseLinks.length > 0 && (
          <PurchaseLinks
            purchaseLinks={shoe.purchaseLinks}
            shoeName={shoe.name}
            brand={shoe.brand}
            msrp={shoe.priceAnalysis?.msrp ?? shoe.price}
          />
        )}

        {hasCompleteData ? (
          <>
            {/* 한줄 요약 */}
            <OnelinerSummary shoe={shoe} />

            {/* 한눈에 보기 — 데이터 기반 사실 요약 (AI 인용 친화) */}
            <AtAGlance shoe={shoe} />

            {/* 에디터 코멘트 (선택적) */}
            {shoe.editorComment && shoe.targetUsers && (
              <EditorComment
                comment={shoe.editorComment}
                recommendFor={shoe.targetUsers.recommended || []}
                notRecommendFor={shoe.targetUsers.notRecommended || []}
              />
            )}

            {/* 핵심 3박스: 추천/비추천/특징 */}
            <CoreBoxes shoe={shoe} />

            {/* 본문 중간 광고 (핵심 정보 후, 상세 탭 전) */}
            <AdSlot
              slot={ADSENSE_SLOTS.shoeInArticle}
              format="fluid"
              layout="in-article"
              layoutKey="-fb+5w+4e-db+86"
              label="본문 중간 광고"
            />

            {/* 탭 기반 UI */}
            <ShoeDetailTabs shoe={shoe} similarShoesData={similarShoesData} resolvedAlternatives={resolvedAlternatives} />
          </>
        ) : (
          <div className="section-card p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-primary">상세 정보 준비 중</h2>
            <p className="text-secondary">이 신발의 상세 정보는 곧 업데이트될 예정입니다.</p>
          </div>
        )}

        {/* 본문 하단 광고 (상세 후, 교차 링크 위) */}
        <AdSlot
          slot={ADSENSE_SLOTS.shoeBottom}
          format="auto"
          label="본문 하단 광고"
        />

        {/* PSEO 교차 링크 */}
        <ShoeCrossLinks shoe={shoe} />

        {/* 데이터 출처 */}
        <section className="section-card p-5">
          <div className="flex items-start gap-3">
            <span className="text-lg">📊</span>
            <div>
              <p className="font-medium text-sm mb-1 text-primary">데이터 출처</p>
              <p className="text-xs text-secondary">RunRepeat Lab Test · Doctors of Running · 에디터 분석</p>
            </div>
          </div>
        </section>

        {/* 하단 여백 (고정 바 때문에) */}
        <div className="h-32 md:h-20" aria-hidden="true" />
      </div>

      {/* 모바일 빠른 액션 버튼 */}
      <MobileQuickActions shoe={shoe} />
    </>
  );
}
