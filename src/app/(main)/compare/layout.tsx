import { DEFAULT_OG_IMAGE } from '@/lib/constants';
import { breadcrumbJsonLd } from '@/lib/seo/breadcrumb';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "러닝화 비교 | 스펙, 가격, 착화감 한눈에 비교",
  description:
    "후보 러닝화를 최대 4개까지 골라 무게·쿠셔닝·반발력·안정성·가격을 한 화면에서 비교하세요. 레이더 차트와 상세 스펙 표로 차이를 확인하고, 발볼 적합성과 추천 대상을 함께 살펴 나에게 맞는 한 켤레를 고를 수 있습니다.",
  keywords: [
    "러닝화 비교",
    "러닝화 스펙 비교",
    "Nike vs Asics",
    "러닝화 가격 비교",
    "러닝화 무게 비교",
  ],
  openGraph: {
      // 페이지가 openGraph 를 지정하면 layout 의 기본 이미지가 병합되지 않고 덮인다
      images: [DEFAULT_OG_IMAGE],
    title: "러닝화 비교 - 러닝의 모든것",
    description:
      "최대 4개 러닝화를 동시에 비교. 스펙, 가격, 착화감을 한눈에.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "러닝화 비교",
    description: "최대 4개 러닝화 동시 비교",
  },
  alternates: {
    canonical: "/compare",
  },
};

const breadcrumbLd = breadcrumbJsonLd([{ name: '러닝화 비교', path: '/compare' }]);

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {children}
    </>
  );
}
