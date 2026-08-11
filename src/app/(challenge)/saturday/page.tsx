import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { RACE_META, SATURDAY_CREW } from '@/lib/data/challenge/saturday';

const TITLE = '쎄러데이 — 여덟 명의 손기정평화마라톤';
const DESCRIPTION =
  '토요일마다 모여 뛰던 중학교 친구 여덟이 2026 손기정평화마라톤에 나섭니다. 풀코스 6명, 10K 2명. 14주간의 준비 기록.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'article',
    locale: 'ko_KR',
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/saturday`,
    images: [`${SITE_URL}/images/challenge/saturday-og.webp`],
  },
  alternates: { canonical: '/saturday' },
};

export default function SaturdayPage() {
  const fullCount = SATURDAY_CREW.filter((m) => m.distance === '풀코스').length;
  const tenKCount = SATURDAY_CREW.length - fullCount;

  return (
    <main>
      <h1 className="px-5 pt-20 text-center text-4xl font-black tracking-tight">
        쎄러데이
      </h1>
      <p className="px-5 pt-4 text-center text-white/70">
        {RACE_META.dateLabel} · {RACE_META.name} · 풀코스 {fullCount} / 10K {tenKCount}
      </p>
    </main>
  );
}
