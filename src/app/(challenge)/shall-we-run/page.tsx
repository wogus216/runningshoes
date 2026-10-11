import type { Metadata } from 'next';
import { ShallWeRunStory } from '@/components/challenge/shall-we-run/shall-we-run-story';

export const metadata: Metadata = {
  title: '영화가 시작되기 전에, 나는 달렸다. — 쉘위런',
  description: '쉘위런을 기다리며 달릴 이유가 하나 더 생겼다. 런데이 시네마런 챌린지 누적 11.2km 완주를 기념하는 개인 러닝 기록.',
  alternates: { canonical: '/shall-we-run' },
  openGraph: {
    title: '결국, 달렸다. — 쉘위런 시네마런 챌린지',
    description: '영화를 기다리는 마음이 나를 한 번 더 밖으로 데려갔다.',
    url: '/shall-we-run', type: 'website',
    images: [{ url: '/images/challenge/shall-we-run/badge-original.jpg', width: 1080, height: 1317, alt: '쉘위런 시네마런 챌린지 완주 배지' }],
  },
  twitter: { card: 'summary_large_image', title: '결국, 달렸다. — 쉘위런', images: ['/images/challenge/shall-we-run/badge-original.jpg'] },
};

export default function ShallWeRunPage() {
  return <main><ShallWeRunStory /></main>;
}
