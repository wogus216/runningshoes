import type { Metadata, Viewport } from 'next';
import { RunningCardLoader } from '@/components/running-card/running-card-loader';

const title = '러닝카드 | 지난 28일의 러닝 유형 — 올런바웃';
const description = '지난 28일의 러닝 기록으로 나의 러닝 유형과 가상 인물 카드를 만들고, 피드·스토리 이미지로 저장해 공유하세요.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/running-card' },
  openGraph: { title, description, url: '/running-card', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

// 시안과 같다: 안전 영역까지 그리고(하단 버튼이 env(safe-area-inset-bottom) 위에 앉는다) 브라우저 테두리는 잉크색.
export const viewport: Viewport = {
  themeColor: '#17150f',
  viewportFit: 'cover',
};

export default function RunningCardPage() {
  return <RunningCardLoader />;
}
