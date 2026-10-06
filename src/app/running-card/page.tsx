import type { Metadata, Viewport } from 'next';
import { RunningCardLoader } from '@/components/running-card/running-card-loader';

// 출시 전 — 색인하지 않고, 사이트맵(next-sitemap.config.js exclude)과 사이트 내비·내부 링크에도 넣지 않는다.
// 실수로 main 에 들어가도 검색에 노출되지 않게 하려는 것이다. 공개 전환 때 다시 정한다.
export const metadata: Metadata = {
  title: { absolute: '지난 28일의 메달 — 러닝 카드' },
  robots: { index: false, follow: false },
  alternates: { canonical: '/running-card' },
};

// 시안과 같다: 안전 영역까지 그리고(하단 버튼이 env(safe-area-inset-bottom) 위에 앉는다) 브라우저 테두리는 잉크색.
export const viewport: Viewport = {
  themeColor: '#17150f',
  viewportFit: 'cover',
};

export default function RunningCardPage() {
  return <RunningCardLoader />;
}
