import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { CompareProvider } from "@/contexts/compare-context";
import { CompareFloatingButton } from "@/components/compare/compare-floating-button";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - 러닝화 추천, 비교, 리뷰 2025`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_DESCRIPTION} Nike, Asics, Hoka, Brooks 등 10개 브랜드 완벽 비교.`,
  keywords: [
    "러닝화",
    "러닝화 추천",
    "러닝화 비교",
    "러닝화 리뷰",
    "평발 러닝화",
    "무릎 보호 러닝화",
    "발볼 넓은 러닝화",
    "초보 러닝화",
    "가성비 러닝화",
    "마라톤 러닝화",
    "Nike 러닝화",
    "Asics 러닝화",
    "Hoka 러닝화",
    "Brooks 러닝화",
    "2025 러닝화",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    title: `${SITE_NAME} - 러닝화 추천, 비교, 리뷰`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - 러닝화 추천 사이트`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - 러닝화 추천, 비교, 리뷰`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  verification: {
    google: "idX7BnOdE2DO1nqx_LUww1v5bmpxFW2ucMQPndpbqqI",
  },
  alternates: {
    canonical: "/",
  },
  category: "sports",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

// 구조화 데이터 (JSON-LD)
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: ["러닝화 추천", "러닝화 비교"],
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: {
      "@type": "ImageObject",
      url: DEFAULT_OG_IMAGE,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Korean",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5040630448523471"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={cn("min-h-screen font-sans antialiased", inter.variable)}>
        <CompareProvider>
          {children}
          <CompareFloatingButton />
          <ScrollToTop />
        </CompareProvider>
      </body>
    </html>
  );
}
