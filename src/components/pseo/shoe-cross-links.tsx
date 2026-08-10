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

/** 만원 단위로 읽기 좋게. 3만원·2.5만원처럼 소수 한 자리까지만 쓴다. */
function formatManwon(won: number): string {
  const man = won / 10000;
  return `${Number.isInteger(man) ? man : man.toFixed(1)}만원`;
}

/**
 * 상대 신발이 이 신발과 무엇이 다른지 한 줄로 만든다.
 *
 * 링크에 이유가 없으면 누를 까닭도 없다 — 종전에는 "vs 보스턴 13"만 있었다.
 * 문구는 전부 실제 필드에서 계산하며(지어내지 않는다), 차이가 미미하면 아무 말도 하지 않는다.
 */
function diffSummary(shoe: Shoe, other: Shoe): string | null {
  const parts: string[] = [];

  const priceGap = (other.price ?? 0) - (shoe.price ?? 0);
  if (shoe.price && other.price && Math.abs(priceGap) >= 10000) {
    parts.push(`${formatManwon(Math.abs(priceGap))} ${priceGap < 0 ? '싸고' : '비싸고'}`);
  }

  const weightGap = (other.specs?.weight ?? 0) - (shoe.specs?.weight ?? 0);
  if (shoe.specs?.weight && other.specs?.weight && Math.abs(weightGap) >= 10) {
    parts.push(`${Math.abs(weightGap)}g ${weightGap < 0 ? '가볍다' : '무겁다'}`);
  }

  if (parts.length > 0) return parts.join(' ');

  // 값·무게가 비슷하면 드롭 차이가 그다음으로 체감이 크다
  const dropGap = (other.specs?.drop ?? 0) - (shoe.specs?.drop ?? 0);
  if (shoe.specs?.drop != null && other.specs?.drop != null && Math.abs(dropGap) >= 3) {
    return `드롭이 ${Math.abs(dropGap)}mm ${dropGap < 0 ? '낮다' : '높다'}`;
  }

  return null;
}

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
          <div className="flex items-center gap-2 mb-1">
            <Scale className="w-4 h-4 text-accent" />
            {/* 모델명이 숫자로 끝나면 와/과가 갈린다(33→과, 32→와). 조사를 아예 쓰지 않는다 */}
            <h2 className="text-base font-semibold text-primary">
              {shoe.brand} {shoe.name} — 자주 함께 비교되는 신발
            </h2>
          </div>
          <p className="mb-3 text-xs text-secondary">
            스택·무게·토박스까지 항목별로 나란히 놓고 봅니다.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {pairs.map((p) => {
              const other = p.a.slug === shoe.slug ? p.b : p.a;
              const diff = diffSummary(shoe, other);
              return (
                <li key={p.slug}>
                  <Link
                    href={`/vs/${p.slug}`}
                    className="group/pair flex items-center justify-between gap-2 px-3 py-2.5 bg-surface hover:bg-white border border-border hover:border-accent rounded transition"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm truncate">
                        <span className="text-tertiary">vs </span>
                        <span className="text-primary font-medium">
                          {other.brand} {other.name}
                        </span>
                      </span>
                      {diff && (
                        <span className="block mt-0.5 text-xs text-secondary truncate">{diff}</span>
                      )}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xs text-tertiary transition group-hover/pair:text-accent motion-safe:group-hover/pair:translate-x-0.5"
                    >
                      비교 →
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
