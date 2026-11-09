import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getShoeBySlug, getShoes, getSimilarShoesData } from '@/lib/data/shoes';
import { getBrandTechnologyUrl } from '@/lib/data/brands';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, ADSENSE_SLOTS, IS_PRODUCTION_DEPLOY } from '@/lib/constants';
import { breadcrumbJsonLd } from '@/lib/seo/breadcrumb';
import { shoeDescription } from '@/lib/seo/shoe-description';
import { AdSlot } from '@/components/ads/ad-slot';
import { isCompleteShoe } from '@/types/shoe';
import { Breadcrumb } from '@/components/detail/breadcrumb';
import { RecordView } from '@/components/detail/record-view';
import { HeroSection } from '@/components/detail/hero-section';
import { OnelinerSummary } from '@/components/detail/oneliner-summary';
import { AtAGlance } from '@/components/detail/at-a-glance';
import { EditorComment } from '@/components/detail/editor-comment';
import { CoreBoxes } from '@/components/detail/core-boxes';
import { ShoeDetailTabs } from '@/components/detail/shoe-detail-tabs';
import { MobileQuickActions } from '@/components/detail/mobile-quick-actions';
import { PurchaseLinks } from '@/components/detail/purchase-links';
import { ShoeCrossLinks } from '@/components/pseo/shoe-cross-links';
import { RelatedPosts } from '@/components/detail/related-posts';
import { getPostsLinkingToShoe } from '@/lib/data/blog';
import { RunningCardPromo } from '@/components/running-card-promo';

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
  // 한국 러너는 "[모델명] 후기"로 검색하고, 사이즈·발볼 정보를 가장 많이 찾는다 (GSC 검증).
  // 브랜드도 한글로 검색하므로(예: "온러닝 클라우드몬스터") 제목을 한글 브랜드명으로 시작한다.
  // 영문 브랜드명("On")은 한글 검색어("온러닝")와 SERP 볼드 매칭이 안 돼 CTR 손실 — 특히 순위 낮은 On·호카에서 컸음.
  // 새 브랜드 추가 시 이 맵에도 등록 (미등록 시 영문 brand로 폴백).
  const brandLabelMap: Record<string, string> = {
    'Nike': '나이키', 'Adidas': '아디다스', 'Asics': '아식스', 'Hoka': '호카',
    'Brooks': '브룩스', 'Saucony': '써코니', 'Mizuno': '미즈노', 'New Balance': '뉴발란스',
    'On': '온러닝', 'Puma': '푸마', 'Li-Ning': '라이닝', 'Salomon': '살로몬',
    'Diadora': '디아도라',
    'Merrell': '머렐',
    'Kiprun': '킵런',
    'Under Armour': '언더아머',
    'Prospecs': '프로스펙스',
  };
  const brandLabel = brandLabelMap[shoe.brand] || shoe.brand;
  // 카테고리를 제목 앞쪽 끌개로 — "안정화/쿠션화 러닝화" 류 카테고리 검색 매칭 + SERP 볼드/차별화 (GSC 2026-06-22: 신발상세 CTR이 블로그 리뷰의 1/3이라 끌개 보강)
  //
  // 카테고리 뒤에 실측 무게를 붙여 접미사를 고유화한다 — 종전에는 접미사가 카테고리 6종뿐이라
  // 123개 상세가 6그룹으로 겹쳤고, 네이버 서치어드바이저가 "<title> 요소에 동일한 제목인
  // 웹문서 다수 발견"으로 잡고 있었다(2026-08-21 확인). 무게는 사이즈·발볼과 같은 구매 판단
  // 축이라 끌개로도 기능한다. 가격은 길이 때문에 뺐다(description 에 이미 있음).
  const titleWeight = shoe.specs?.weight ? ` ${shoe.specs.weight}g` : '';
  const title = `${brandLabel} ${shoe.name} 후기 — ${shoe.category}${titleWeight} 사이즈·발볼·장단점`;

  // 모델명·가격·무게·발볼을 보존하고 긴 소개만 문장/단어 경계에서 줄인다.
  const description = shoeDescription(shoe, brandLabel);

  // 키워드 생성
  const keywords = [
    shoe.brand,
    brandLabel,
    shoe.name,
    `${shoe.brand} ${shoe.name}`,
    `${brandLabel} ${shoe.name}`,
    // 구매 인텐트 키워드 (CPC 높은 검색어 — 한글 브랜드 기준)
    `${brandLabel} ${shoe.name} 후기`,
    `${brandLabel} ${shoe.name} 추천`,
    `${brandLabel} ${shoe.name} 가격`,
    `${brandLabel} ${shoe.name} 사이즈`,
    '러닝화',
    '러닝화 리뷰',
    '러닝화 추천',
    shoe.category,
    `${shoe.category} 추천`,
    ...(shoe.tags || []),
    shoe.koreanFootFit?.toBoxWidth === 'wide' ? '발볼 넓은 러닝화' : null,
    shoe.biomechanics?.carbonPlate ? '카본 플레이트 러닝화' : null,
  ]
    .filter(Boolean)
    .join(', ');

  // 이미지 URL (첫 번째 이미지 또는 기본 이미지)
  const imageUrl = shoe.image || DEFAULT_OG_IMAGE;

  // 불완전한 데이터 신발은 noindex 처리 (thin content 방지)
  // + 프로덕션 배포에서만 색인 (프리뷰/로컬은 noindex)
  // + shoe.noindex 명시 플래그(검색 수요 0 초니치 변종 카니발 방지)도 제외
  const shouldIndex = IS_PRODUCTION_DEPLOY && isCompleteShoe(shoe) && !shoe.noindex;

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
      title: `${brandLabel} ${shoe.name} 후기 - 러닝화 리뷰`,
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
      title: `${brandLabel} ${shoe.name} 후기`,
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

  // 관련 블로그: curated relatedPosts 우선 배치 + 본문에서 이 신발을 링크한 글로 자동 보충 (slug 중복 제거)
  // curated가 1~2개뿐일 때 자동 링크가 통째로 사라지지 않도록 병합한다 — 최소 4개 확보, curated가 더 많으면 그대로
  const curated = shoe.relatedPosts ?? [];
  const curatedSlugs = new Set(curated.map((p) => p.slug));
  const autoLinked = getPostsLinkingToShoe(shoe.slug).filter((p) => !curatedSlugs.has(p.slug));
  const relatedPosts = [...curated, ...autoLinked].slice(0, Math.max(curated.length, 4));

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

  const breadcrumbLd = breadcrumbJsonLd([
    { name: shoe.brand, path: `/brands/${shoe.brand.toLowerCase().replace(/\s+/g, '-')}` },
    { name: `${shoe.brand} ${shoe.name}`, path: `/shoes/${slug}` },
  ]);

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
    const wideOpt = shoe.koreanFootFit.wideOptions ? ' 와이드 옵션이 있어 발볼 넓은 한국 러너도 선택지가 있습니다(와이드 폭·판매 성별은 모델마다 달라 상세 스펙에서 확인하세요).' : ' 확인된 와이드 옵션 정보가 없습니다. 반 사이즈 업으로 해결된다고 가정하지 말고 해당 판매처의 폭 옵션과 착화를 확인하세요.';
    faqItems.push({
      q: `${shoe.brand} ${shoe.name}이 발볼 넓은 한국 러너에게 맞나요?`,
      a: `토박스 너비가 ${widthLabel} 등급으로 분류됩니다.${wideOpt}`,
    });
  }

  // 모델별 임상 근거 또는 페이스-성능 실험이 없는 등급을 FAQ로 확정하지 않는다.
  faqItems.push({
    q: `${shoe.name}의 부상 예방 효과나 최적 페이스가 입증됐나요?`,
    a: '이 페이지는 개별 모델의 임상적 부상 예방 효과나 누구에게나 적용되는 최적 페이스를 입증하지 않습니다. 제품 구조·실험실 측정·리뷰어의 착화 의견은 서로 다른 정보입니다.',
  });

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {/* Product JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      {/* FAQ JSON-LD (동적 생성, 데이터 있을 때만) */}
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      {/* 재방문 "이어보기" 기록 (화면 렌더 없음) */}
      <RecordView slug={shoe.slug} name={shoe.name} category={shoe.category} image={shoe.image} />

      <div
        className="space-y-4"
        data-purchase-product-type="shoe"
        data-purchase-product-id={shoe.slug}
        data-purchase-product-name={shoe.name}
        data-purchase-brand={shoe.brand}
      >
        {/* 브레드크럼 */}
        <Breadcrumb brand={shoe.brand} category={shoe.category} shoeName={shoe.name} />

        {/* Hero Section */}
        <HeroSection
          shoe={shoe}
          brandTechnologyUrl={getBrandTechnologyUrl(shoe.brand) as `/brands/${string}/technology` | undefined}
        />

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

            {/* 러닝카드 안내 — 핵심 리뷰·추천 대상(CoreBoxes)을 본 지점. 뒤의 상세 탭을 읽었다고 보지 않는다.
                상세 정보 준비 중 페이지(이 분기 밖)에는 달지 않는다. */}
            <RunningCardPromo sourceType="shoe" sourceSlug={shoe.slug} />

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

        {/*
          구매처/최저가 + 제휴 고지.

          2026-08-25 모바일 실측으로 히어로 직후에서 여기로 내렸다. 이 섹션이 1,072px 를
          쓰는데, 그만큼 상세 탭이 뒤로 밀려 탭바가 6.0번째 화면에 있었다. 탭 6개 중 5개는
          누르기 전까지 내용이 안 보이므로, 탭이 밀리면 발볼·부상·가격 정보가 통째로 늦어진다
          (페르소나 과업 15건 중 부분 판정 8건의 주된 원인이 이 깊이였다).

          내려도 구매 경로는 끊기지 않는다 — MobileQuickActions 가 스크롤 100px 이후
          '구매처 보기'를 화면 하단에 상시 띄우고 있어 기능이 이미 중복돼 있었다.

          ⚠️ hasCompleteData 블록 **밖**에 두는 것이 중요하다. 상세 데이터가 아직
          부족한 신발(‘상세 정보 준비 중’ 표시)에서도 구매처는 그대로 나와야 한다.
        */}
        {shoe.purchaseLinks && shoe.purchaseLinks.length > 0 && (
          <PurchaseLinks
            id="purchase-links"
            purchaseLinks={shoe.purchaseLinks}
            shoeName={shoe.name}
            brand={shoe.brand}
            msrp={shoe.priceAnalysis?.msrp ?? shoe.price}
          />
        )}

        {/* 본문 하단 광고 (상세 후, 교차 링크 위) */}
        <AdSlot
          slot={ADSENSE_SLOTS.shoeBottom}
          format="auto"
          label="본문 하단 광고"
        />

        {/* 관련 블로그(비교·후기) 회유 — curated 우선, 없으면 본문 링크 기반 자동 폴백 */}
        <RelatedPosts posts={relatedPosts} />

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
