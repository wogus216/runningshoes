import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "러닝화 비교 | 스펙, 가격, 착화감 한눈에 비교",
  description:
    "최대 4개 러닝화를 동시에 비교. 무게, 쿠셔닝, 안정성, 가격을 레이더 차트와 상세 테이블로 비교 분석하세요.",
  keywords: [
    "러닝화 비교",
    "러닝화 스펙 비교",
    "Nike vs Asics",
    "러닝화 가격 비교",
    "러닝화 무게 비교",
  ],
  openGraph: {
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

// BreadcrumbList 스키마
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
      "name": "러닝화 비교",
      "item": `${SITE_URL}/compare`,
    },
  ],
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
