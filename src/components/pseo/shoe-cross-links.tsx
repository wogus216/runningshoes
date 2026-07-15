import Link from 'next/link';
import { Award, Scale } from 'lucide-react';
import type { Shoe } from '@/types/shoe';
import { getMatricesForShoe } from '@/lib/pseo/matrices';
import { getPairsForShoe } from '@/lib/pseo/pairs';

const groupLabel: Record<string, string> = {
  category: '카테고리',
  distance: '거리',
  attribute: '발 특성',
  price: '예산',
  'brand-category': '브랜드',
};

export function ShoeCrossLinks({ shoe }: { shoe: Shoe }) {
  const matrices = getMatricesForShoe(shoe).slice(0, 8);
  const pairs = getPairsForShoe(shoe.slug).slice(0, 6);

  if (matrices.length === 0 && pairs.length === 0) return null;

  return (
    <section className="section-card p-5 lg:p-6 space-y-6">
      {matrices.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-accent" />
            <h2 className="text-base font-semibold text-primary">
              이 신발이 포함된 베스트 가이드
            </h2>
          </div>
          <ul className="flex flex-wrap gap-2">
            {matrices.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/best/${m.slug}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-surface hover:bg-white border border-border hover:border-accent rounded-full transition"
                >
                  <span className="text-tertiary">{groupLabel[m.group] ?? ''}</span>
                  <span className="text-primary font-medium">
                    {m.h1.replace(/ — .*/, '').replace(' 러닝화 추천', '').replace(' 추천', '')}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {pairs.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Scale className="w-4 h-4 text-accent" />
            <h2 className="text-base font-semibold text-primary">
              {shoe.brand} {shoe.name} 1:1 비교
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {pairs.map((p) => {
              const other = p.a.slug === shoe.slug ? p.b : p.a;
              return (
                <li key={p.slug}>
                  <Link
                    href={`/vs/${p.slug}`}
                    className="block px-3 py-2 text-sm bg-surface hover:bg-white border border-border hover:border-accent rounded transition"
                  >
                    <span className="text-tertiary">vs </span>
                    <span className="text-primary font-medium">
                      {other.brand} {other.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
