import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "러닝화 계급도 2025",
    template: "%s | 러닝화 계급도 2025",
  },
  description:
    "2025년 러닝화 계급도: 브랜드별·카테고리별 러닝화 라인업을 생동감 있는 인터랙션으로 한눈에 정리했습니다.",
  keywords: ["러닝화", "러닝화 계급도", "러닝화 추천", "러닝화 브랜드", "러닝화 비교", "2025 러닝화"],
  openGraph: {
    title: "러닝화 계급도 2025",
    description:
      "스포티한 그라데이션과 글래스모피즘 디자인으로 구성한 러닝화 분석 허브. 브랜드별 라인업과 카테고리 티어를 즉시 확인하세요.",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "러닝화 계급도 2025",
    description:
      "브랜드 라인업과 카테고리 티어를 동시에 보여주는 러닝화 계급도. 2025년 최신 트렌드를 한 페이지에서 만나보세요.",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", inter.variable)}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="container relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 py-12 lg:gap-16 lg:py-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
