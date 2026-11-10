import { DEFAULT_OG_IMAGE } from '@/lib/constants';
import { breadcrumbJsonLd } from '@/lib/seo/breadcrumb';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "맞춤 러닝화 추천 | 용도·예산별 후보 비교",
  description:
    "용도·한국 와이드 옵션·예산으로 확인 가격이 있는 러닝화 후보를 비교하세요. 같은 용도 분류에서는 확인 가격이 낮은 순으로 보여드립니다.",
  keywords: [
    "러닝화 추천",
    "맞춤 러닝화",
    "발볼 넓은 러닝화 추천",
    "초보 러닝화 추천",
    "마라톤 러닝화 추천",
  ],
  openGraph: {
      // 페이지가 openGraph 를 지정하면 layout 의 기본 이미지가 병합되지 않고 덮인다
      images: [DEFAULT_OG_IMAGE],
    title: "맞춤 러닝화 추천 - 러닝의 모든것",
    description:
      "러닝 용도, 한국 와이드 옵션과 예산으로 후보를 비교하세요.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "맞춤 러닝화 추천",
    description: "조건에 맞는 러닝화 후보 비교",
  },
  alternates: {
    canonical: "/recommend",
  },
};

const breadcrumbLd = breadcrumbJsonLd([{ name: '맞춤 러닝화 추천', path: '/recommend' }]);

export default function RecommendLayout({
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
