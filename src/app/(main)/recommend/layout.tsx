import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "맞춤 러닝화 추천 | AI 기반 개인화 추천",
  description:
    "경험, 주간 거리, 발 타입, 부상 이력을 분석하여 나에게 딱 맞는 러닝화를 추천받으세요. 평발, 발볼 넓은 러너, 무릎 통증 러너를 위한 맞춤 추천.",
  keywords: [
    "러닝화 추천",
    "맞춤 러닝화",
    "평발 러닝화 추천",
    "무릎 통증 러닝화",
    "발볼 넓은 러닝화 추천",
    "초보 러닝화 추천",
    "마라톤 러닝화 추천",
  ],
  openGraph: {
    title: "맞춤 러닝화 추천 - 러닝의 모든것",
    description:
      "AI가 분석하는 나만의 러닝화. 경험, 발 타입, 부상 이력을 고려한 개인화 추천.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "맞춤 러닝화 추천",
    description: "AI가 분석하는 나만의 러닝화 추천",
  },
  alternates: {
    canonical: "/recommend",
  },
};

// FAQ 스키마 (러닝화 추천 관련 자주 묻는 질문)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "초보 러너에게 적합한 러닝화는 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "초보 러너에게는 쿠셔닝이 좋고 안정성이 뛰어난 입문용 러닝화를 추천합니다. 대표적으로 Asics Gel-Nimbus, Nike Pegasus, Brooks Ghost 등이 있습니다. 과도한 프로네이션이 있다면 안정화(GT-2000, Kayano 등)를 고려해보세요.",
      },
    },
    {
      "@type": "Question",
      "name": "평발인데 어떤 러닝화가 좋을까요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "평발 러너에게는 안정화(Stability shoes)를 추천합니다. Asics GT-2000, Asics Kayano, Brooks Adrenaline GTS, New Balance 860 등이 평발에 적합합니다. 이 신발들은 아치 서포트와 미드풋 안정성을 제공하여 과도한 프로네이션을 방지합니다.",
      },
    },
    {
      "@type": "Question",
      "name": "무릎이 아픈데 어떤 러닝화를 신어야 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "무릎 통증이 있는 러너는 충격흡수가 뛰어난 맥시멀 쿠셔닝 신발을 추천합니다. Hoka Bondi, Asics Gel-Nimbus, Brooks Glycerin, New Balance 1080 등이 좋습니다. 부드러운 착지감으로 무릎에 가해지는 충격을 줄여줍니다.",
      },
    },
    {
      "@type": "Question",
      "name": "발볼이 넓은데 맞는 러닝화가 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "발볼이 넓은 러너에게는 와이드 버전을 제공하는 신발을 추천합니다. New Balance, Brooks, Asics 브랜드가 다양한 와이드 옵션을 제공합니다. 특히 Altra 브랜드는 넓은 토박스로 유명합니다. 표준 사이즈 중에서는 Hoka Clifton, Brooks Ghost가 비교적 넓은 편입니다.",
      },
    },
    {
      "@type": "Question",
      "name": "마라톤용 카본 플레이트 러닝화는 누구에게 적합한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "카본 플레이트 러닝화(Nike Vaporfly, Asics Metaspeed, Saucony Endorphin Pro 등)는 레이스에서 기록 단축을 목표로 하는 중급 이상 러너에게 적합합니다. 가격이 높고 내구성이 낮으므로 레이스용으로만 사용하고, 일상 훈련에는 일반 러닝화를 권장합니다.",
      },
    },
  ],
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
      "name": "맞춤 러닝화 추천",
      "item": `${SITE_URL}/recommend`,
    },
  ],
};

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
