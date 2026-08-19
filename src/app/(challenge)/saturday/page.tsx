import type { Metadata } from 'next';
import { SaturdayTeaser } from '@/components/challenge/saturday/saturday-teaser';
import { SITE_URL } from '@/lib/constants';

// 히어로 hook 은 이제 단톡 원문('신청 완료했습니다!!')이라 제목으로는 문맥이 없다.
// 제목에는 그 앞 문장을 쓴다 — 검색 결과에서 한 줄로 읽힌다.
const TITLE = '쎄러데이 — 웃자고 한 말이었다';
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
