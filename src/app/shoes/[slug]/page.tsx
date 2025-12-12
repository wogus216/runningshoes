import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getShoeBySlug, getShoes, getSimilarShoesData } from "@/lib/data/shoes";
import { HeroSection } from "@/components/detail/hero-section";
import { ResearchBadge } from "@/components/detail/research-badge";
import { ShoeDetailTabs } from "@/components/detail/shoe-detail-tabs";
import { FinalCTA } from "@/components/detail/final-cta";

type ShoeDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const shoes = getShoes();
  return shoes
    .filter((shoe) => shoe.slug)
    .map((shoe) => ({
      slug: shoe.slug,
    }));
}

export function generateMetadata({ params }: ShoeDetailPageProps): Metadata {
  const shoe = getShoeBySlug(params.slug);

  if (!shoe) {
    return {
      title: "신발을 찾을 수 없습니다",
      description: "요청하신 러닝화를 찾을 수 없습니다.",
    };
  }

  return {
    title: `${shoe.brand} ${shoe.name} - 전문 러닝화 리뷰`,
    description: shoe.description || `${shoe.brand} ${shoe.name} 상세 리뷰 및 스펙`,
    openGraph: {
      title: `${shoe.brand} ${shoe.name}`,
      description: shoe.description || "",
    },
  };
}

export default function ShoeDetailPage({ params }: ShoeDetailPageProps) {
  const shoe = getShoeBySlug(params.slug);

  if (!shoe) {
    notFound();
  }

  // Check if shoe has complete data
  const hasCompleteData = shoe.specs && shoe.biomechanics && shoe.injuryPrevention;

  // 비슷한 신발 데이터 가져오기 (서버에서 미리 로드)
  const similarShoesData = shoe.similarShoes ? getSimilarShoesData(shoe.similarShoes) : [];

  // JSON-LD 구조화 데이터
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${shoe.brand} ${shoe.name}`,
    "description": shoe.description || `${shoe.brand} ${shoe.name} 러닝화`,
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
    },
    ...(shoe.priceAnalysis?.msrp && {
      "offers": {
        "@type": "Offer",
        "price": shoe.priceAnalysis.msrp,
        "priceCurrency": "KRW",
        "availability": "https://schema.org/InStock",
      },
    }),
  };

  return (
    <div className="min-h-screen">
      {/* JSON-LD 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-slate-700 px-6 py-3 rounded-xl font-semibold transition-all hover:bg-white/30 hover:-translate-x-1 min-h-[44px]"
        >
          ← 목록으로
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12 space-y-8">
        {/* Hero Section */}
        <HeroSection shoe={shoe} />

        {/* Research Badge - 신뢰성 표시 */}
        {hasCompleteData && <ResearchBadge papersCount={5} />}

        {hasCompleteData ? (
          <>
            {/* 탭 기반 UI */}
            <ShoeDetailTabs shoe={shoe} similarShoesData={similarShoesData} />

            {/* Final CTA */}
            <FinalCTA
              shoeName={shoe.name}
              brand={shoe.brand}
              category={shoe.category}
            />
          </>
        ) : (
          <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">상세 정보 준비 중</h2>
            <p className="text-gray-600">
              이 신발의 상세 정보는 곧 업데이트될 예정입니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
