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

/** 접지 않고 바로 보여줄 링크 수. 나머지는 접되 **HTML 에는 그대로 남긴다** */
const VISIBLE_PAIRS = 4;
const VISIBLE_MATRICES = 4;

function PairLink({ shoe, pair }: { shoe: Shoe; pair: ReturnType<typeof getPairsForShoe>[number] }) {
  const other = pair.a.slug === shoe.slug ? pair.b : pair.a;
  const diff = diffSummary(shoe, other);
  return (
    <li>
      <Link
        href={`/vs/${pair.slug}`}
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
}

function MatrixLink({ m }: { m: ReturnType<typeof getMatricesForShoe>[number] }) {
  return (
    <li>
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
  );
}

/**
 * 2026-08-26 정리 — 링크를 **줄이지 않고 접는다.**
 *
 * 종전에는 베스트 가이드 8개 + 비교 6개를 한 번에 펼쳐 14개 링크가 벽처럼 섰다.
 * 그렇다고 개수를 잘라내면 읽기는 편해지지만 내부 링크가 실제로 사라져 pSEO 가 깎인다.
 * `<details>` 로 접으면 **HTML 에는 링크가 그대로 남아 크롤러는 전부 보고**,
 * 사람은 앞의 네 개만 본다 — 읽기와 유입을 맞바꾸지 않는 방법이다.
 *
 * 순서도 뒤집었다. GSC 실측에서 **`/vs` 는 CTR 5.46% 로 작동하고 `/best` 는 죽어 있다.**
 * 작동하는 쪽을 위에 둔다.
 */
export function ShoeCrossLinks({ shoe }: { shoe: Shoe }) {
  const matrices = getMatricesForShoe(shoe).slice(0, 8);
  const pairs = getPairsForShoe(shoe.slug).slice(0, 6);

  if (matrices.length === 0 && pairs.length === 0) return null;

  const headPairs = pairs.slice(0, VISIBLE_PAIRS);
  const restPairs = pairs.slice(VISIBLE_PAIRS);
  const headMatrices = matrices.slice(0, VISIBLE_MATRICES);
  const restMatrices = matrices.slice(VISIBLE_MATRICES);

  return (
    <section className="section-card p-5 lg:p-6 space-y-6">
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
            {headPairs.map((p) => (
              <PairLink key={p.slug} shoe={shoe} pair={p} />
            ))}
          </ul>
          {restPairs.length > 0 && (
            <details className="group mt-2">
              <summary className="cursor-pointer list-none py-1.5 text-xs font-semibold text-accent [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">비교 {restPairs.length}개 더 보기</span>
                <span className="hidden group-open:inline text-tertiary">접기</span>
              </summary>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {restPairs.map((p) => (
                  <PairLink key={p.slug} shoe={shoe} pair={p} />
                ))}
              </ul>
            </details>
          )}
        </div>
      )}

      {matrices.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-accent" />
            <h2 className="text-base font-semibold text-primary">
              이 신발이 포함된 베스트 가이드
            </h2>
          </div>
          <ul className="flex flex-wrap gap-2">
            {headMatrices.map((m) => (
              <MatrixLink key={m.slug} m={m} />
            ))}
          </ul>
          {restMatrices.length > 0 && (
            <details className="group mt-2">
              <summary className="cursor-pointer list-none py-1.5 text-xs font-semibold text-accent [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">가이드 {restMatrices.length}개 더 보기</span>
                <span className="hidden group-open:inline text-tertiary">접기</span>
              </summary>
              <ul className="mt-2 flex flex-wrap gap-2">
                {restMatrices.map((m) => (
                  <MatrixLink key={m.slug} m={m} />
                ))}
              </ul>
            </details>
          )}
        </div>
      )}
    </section>
  );
}
