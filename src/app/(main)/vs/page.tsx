import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPairs } from '@/lib/pseo/pairs';
import { SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: '러닝화 1:1 비교 — 인기 페어 모음',
  description: '같은 카테고리의 인기 러닝화 두 모델을 데이터로 직접 비교합니다. 무게, 스택, 드롭, 가성비, 한국 러너 적합성까지.',
  alternates: { canonical: '/vs' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE_NAME,
    title: '러닝화 1:1 비교',
    description: '같은 카테고리의 인기 러닝화 두 모델을 데이터로 직접 비교합니다.',
  },
};

export default function VsHubPage() {
  const pairs = getAllPairs();
  const grouped = pairs.reduce<Record<string, typeof pairs>>((acc, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});
  const categoryOrder = ['입문화', '데일리', '쿠션화', '레이싱', '안정화'];

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">러닝화 1:1 비교</h1>
        <p className="text-secondary leading-relaxed max-w-3xl">
          같은 카테고리에서 자주 비교되는 인기 모델 페어를 모았습니다. 각 페어는 무게, 스택, 드롭, 가성비, 발볼 적합성, 부상 예방까지 데이터로 직접 비교합니다.
        </p>
      </header>

      {categoryOrder.map((cat) => {
        const list = grouped[cat] || [];
        if (list.length === 0) return null;
        return (
          <section key={cat} className="space-y-3">
            <h2 className="text-xl font-semibold text-primary border-l-4 border-accent pl-3">
              {cat} ({list.length})
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {list.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/vs/${p.slug}`}
                    className="block p-3 bg-white border border-border rounded-lg hover:border-accent hover:shadow-sm transition"
                  >
                    <div className="text-sm font-semibold text-primary">
                      {p.a.brand} {p.a.name}
                      <span className="text-tertiary font-normal mx-2">vs</span>
                      {p.b.brand} {p.b.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
