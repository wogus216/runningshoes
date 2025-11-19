import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getShoeBySlug, getShoes } from "@/lib/data/shoes";
import { HeroSection } from "@/components/detail/hero-section";
import { QuickSpecs } from "@/components/detail/quick-specs";
import { TargetRecommendation } from "@/components/detail/target-recommendation";
import { BiomechanicsAnalysis } from "@/components/detail/biomechanics-analysis";
import { InjuryPrevention } from "@/components/detail/injury-prevention";
import { KoreanFootFit } from "@/components/detail/korean-foot-fit";
import { SpecRadarChart } from "@/components/detail/spec-radar-chart";
import { KeyFeatures } from "@/components/detail/key-features";
import { ComparisonTable } from "@/components/detail/comparison-table";
import { ReviewsSection } from "@/components/detail/reviews-section";
import { DetailedSpecs } from "@/components/detail/detailed-specs";
import { ValueAnalysis } from "@/components/detail/value-analysis";
import { SimilarShoes } from "@/components/detail/similar-shoes";
import { FinalRating } from "@/components/detail/final-rating";
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

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:bg-white/30 hover:-translate-x-1"
        >
          ← 목록으로
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12 space-y-8">
        {/* Hero Section */}
        <HeroSection shoe={shoe} />

        {hasCompleteData ? (
          <>
            {/* QuickSpecs */}
            {shoe.specs && <QuickSpecs specs={shoe.specs} />}

            {/* Section Cards */}
            <div className="space-y-8">
              {/* Target Recommendation */}
              {shoe.targetUsers && (
                <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
                  <TargetRecommendation targetUsers={shoe.targetUsers} />
                </div>
              )}

              {/* Biomechanics Analysis */}
              {shoe.biomechanics && (
                <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
                  <BiomechanicsAnalysis biomechanics={shoe.biomechanics} />
                </div>
              )}

              {/* Injury Prevention */}
              {shoe.injuryPrevention && (
                <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
                  <InjuryPrevention injuryPrevention={shoe.injuryPrevention} />
                </div>
              )}

              {/* Korean Foot Fit */}
              {shoe.koreanFootFit && (
                <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
                  <KoreanFootFit koreanFootFit={shoe.koreanFootFit} />
                </div>
              )}

              {/* Spec Radar Chart */}
              {shoe.specs && (
                <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
                  <SpecRadarChart specs={shoe.specs} priceValueRating={shoe.priceAnalysis?.valueRating} />
                </div>
              )}

              {/* Key Features */}
              {shoe.features && shoe.features.length > 0 && (
                <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
                  <KeyFeatures features={shoe.features} />
                </div>
              )}

              {/* Comparison Table */}
              <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
                <ComparisonTable />
              </div>

              {/* Reviews Section */}
              {shoe.reviews && shoe.reviews.length > 0 && (
                <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
                  <ReviewsSection reviews={shoe.reviews} />
                </div>
              )}

              {/* Detailed Specs */}
              {shoe.detailedSpecs && (
                <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
                  <DetailedSpecs specs={shoe.detailedSpecs} />
                </div>
              )}

              {/* Value Analysis */}
              {shoe.priceAnalysis && (
                <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
                  <ValueAnalysis priceAnalysis={shoe.priceAnalysis} />
                </div>
              )}

              {/* Similar Shoes */}
              {shoe.similarShoes && shoe.similarShoes.length > 0 && (
                <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
                  <SimilarShoes similarShoes={shoe.similarShoes} />
                </div>
              )}

              {/* Final Rating */}
              {shoe.specs && (
                <div className="bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
                  <FinalRating specs={shoe.specs} priceAnalysis={shoe.priceAnalysis} />
                </div>
              )}

              {/* Final CTA */}
              <FinalCTA />
            </div>
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
