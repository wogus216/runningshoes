import type { Metadata, Viewport } from 'next';
import { RunningCardLoader } from '@/components/running-card/running-card-loader';

const title = '러닝카드 | 나는 어떤 러너일까? — 올런바웃';
const description = '나는 어떤 러너일까? 지난 28일의 거리·횟수·페이스로 나의 러닝 유형과 강점, 다음 러닝을 위한 조언을 확인하세요. 기록으로 완성한 나만의 러닝 메달과 분석 카드를 친구에게 공유해 보세요.';
const ogImage = '/images/running-card-og-v2.png';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/running-card' },
  openGraph: {
    title,
    description,
    url: '/running-card',
    type: 'website',
    locale: 'ko_KR',
    siteName: '올런바웃',
    images: [{
      url: ogImage,
      width: 1200,
      height: 630,
      alt: '나는 어떤 러너일까? 지난 28일의 기록으로 만드는 나만의 러닝 메달',
      type: 'image/png',
    }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
};

// 시안과 같다: 안전 영역까지 그리고(하단 버튼이 env(safe-area-inset-bottom) 위에 앉는다) 브라우저 테두리는 잉크색.
export const viewport: Viewport = {
  themeColor: '#17150f',
  viewportFit: 'cover',
};

export default function RunningCardPage() {
  return <RunningCardLoader />;
}
