import type { Metadata } from 'next';
import { FirstThirtyStory } from '@/components/challenge/saturday/first30/first-thirty-story';
import { SITE_URL } from '@/lib/constants';

const title = '계획에 없던 5km — 나의 첫 30km | 쎄러데이';
const description = '25km만 달릴 생각이었다. 신대방역에서 마곡나루를 찍고 돌아온 30.02km. 2026년 9월 5일, 인생 첫 30km의 기록.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: '/saturday/first-30k' },
  openGraph: {
    title, description, type: 'article', locale: 'ko_KR',
    url: `${SITE_URL}/saturday/first-30k`,
    images: [{ url: `${SITE_URL}/images/challenge/saturday/first30/running-front.webp`, width: 1200, height: 1600, alt: '한강을 배경으로 달리는 러너' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`${SITE_URL}/images/challenge/saturday/first30/running-front.webp`] },
};

export default function FirstThirtyPage() {
  return <FirstThirtyStory />;
}
