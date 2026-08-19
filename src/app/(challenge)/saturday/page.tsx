import type { Metadata } from 'next';
import { SaturdayTeaser } from '@/components/challenge/saturday/saturday-teaser';
import { SITE_URL } from '@/lib/constants';

const TITLE = '쎄러데이 — 농담은 접수됐다';
const DESCRIPTION =
  '일곱 명이 함께 출발한다. 풀코스 6명, 10K 1명. 2026년 11월 15일 손기정평화마라톤.';

export const metadata: Metadata = {
  // 루트 layout의 title.template(`%s | 러닝의 모든것`)을 받지 않는다 — 티저는 독립 서브브랜드
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/saturday' },
  openGraph: {
    type: 'article',
    locale: 'ko_KR',
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/saturday`,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function SaturdayPage() {
  return <SaturdayTeaser />;
}
