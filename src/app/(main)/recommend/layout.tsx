import { DEFAULT_OG_IMAGE } from '@/lib/constants';
import { breadcrumbJsonLd } from '@/lib/seo/breadcrumb';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "맞춤 러닝화 추천 | 용도·예산별 후보 비교",
  description:
    "러닝 경험·주간 거리·용도·발볼과 예산으로 러닝화 후보를 비교하세요. 매칭 점수는 편집 기준의 상대 평가이며 부상 예방·치료 효과를 평가하지 않습니다.",
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
      "경험, 러닝 용도, 발볼과 예산을 비교하는 러닝화 후보 추천.",
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

// 화면의 추천 범위와 같은 설명만 구조화한다.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{ '@type': 'Question', name: '추천 점수는 무엇을 뜻하나요?', acceptedAnswer: { '@type': 'Answer', text: '선택한 러닝 용도·예산 등 조건 안에서 후보를 비교한 상대 점수입니다. 개별 신발의 치료나 부상 예방 효과를 뜻하지 않습니다.' } }],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {children}
    </>
  );
}
