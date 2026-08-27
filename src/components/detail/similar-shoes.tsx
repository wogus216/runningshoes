'use client';

import { useState, useMemo, memo } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { SimilarShoeInfo } from '@/lib/data/shoes';
import type { Shoe } from '@/types/shoe';
import type { Route } from 'next';
import { cn } from '@/lib/utils';
import { img } from '@/lib/image';

type SimilarShoesProps = {
  currentShoe: Shoe;
  similarShoesData: SimilarShoeInfo[];
  currentCategory?: string;
};

/**
 * 이 신발 대비 무엇이 다른지 한 줄로. 카드에 무게 배지만 있어서
 * "39g 가볍다" 같은 차이만 읽히던 것을 보완한다 (2026-08-25 페르소나 평가).
 *
 * 부상 이력 러너에게 필요한 축은 무게가 아니라 **지지력**이었다 —
 * "이 신발보다 미드풋 지지가 강한 대안"을 묻는데 답할 축이 카드에 없었다.
 * 그래서 안정성·쿠션을 무게·가격보다 앞에 놓고, 차이가 뚜렷한 것만 최대 2개 고른다.
 *
 * 데이터를 새로 만들지 않는다 — 전부 기존 specs 에서 계산한다.
 * 임계값(2점·20g·2만원)은 "말할 가치가 있는 차이"의 하한선이고,
 * 그 아래는 오차 범위로 보고 아무 말도 하지 않는다.
 */
function describeDifference(base: Shoe, other: SimilarShoeInfo): string[] {
  const notes: { text: string; weight: number }[] = [];

  const bs = base.specs;
  const os = other.specs;

  // 안정성만 임계값이 1이다. similarShoes 는 성격이 비슷한 신발을 고르므로 같은
  // 안정화끼리는 차이가 0~1에 몰린다(카야노 33의 유사 4종은 전부 0~1이었다).
  // 그런데 부상 이력 러너에게는 이 1점이 유일하게 의미 있는 축이라, 2점을 기다리면
  // 정작 필요한 사람에게 아무 말도 못 하게 된다.
  if (bs?.stability != null && os?.stability != null) {
    const d = os.stability - bs.stability;
    if (Math.abs(d) >= 1) {
      const much = Math.abs(d) >= 2;
      notes.push({
        text: d > 0
          ? `지지력 ${much ? '더' : '조금 더'} 강함 +${d}`
          : `지지력 ${much ? '더' : '조금 더'} 약함 ${d}`,
        weight: Math.abs(d) * 3,
      });
    }
  }
  if (bs?.cushioning != null && os?.cushioning != null) {
    const d = os.cushioning - bs.cushioning;
    if (Math.abs(d) >= 2) {
      notes.push({ text: d > 0 ? `쿠션 더 두꺼움 +${d}` : `쿠션 더 얇음 ${d}`, weight: Math.abs(d) * 2 });
    }
  }
  if (bs?.weight != null && os?.weight != null) {
    const d = os.weight - bs.weight;
    if (Math.abs(d) >= 20) {
      notes.push({ text: d > 0 ? `${d}g 무거움` : `${Math.abs(d)}g 가벼움`, weight: Math.abs(d) / 15 });
    }
  }
  const bp = base.price;
  const op = other.price;
  if (bp != null && op != null) {
    const d = op - bp;
    if (Math.abs(d) >= 20000) {
      notes.push({ text: d > 0 ? `${Math.round(d / 10000)}만원 비쌈` : `${Math.round(Math.abs(d) / 10000)}만원 저렴`, weight: Math.abs(d) / 30000 });
    }
  }

  return notes.sort((a, b) => b.weight - a.weight).slice(0, 2).map(n => n.text);
}

export const SimilarShoes = memo(function SimilarShoes({ currentShoe, similarShoesData, currentCategory }: SimilarShoesProps) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);

  const selectedShoes = useMemo(() => {
    return similarShoesData.filter(shoe => selectedSlugs.includes(shoe.slug || ''));
  }, [similarShoesData, selectedSlugs]);

  const handleToggleShoe = (slug: string) => {
    setSelectedSlugs(prev => {
      if (prev.includes(slug)) {
        return prev.filter(s => s !== slug);
      }
      if (prev.length >= 2) {
        return prev;
      }
      return [...prev, slug];
    });
  };

  const getCompareUrl = (): Route => {
    const slugs = [currentShoe.slug, ...selectedSlugs].filter(Boolean).join(',');
    return `/compare?shoes=${slugs}` as Route;
  };

  if (similarShoesData.length === 0) return null;

  return (
    <section className="border border-border bg-white p-5 md:p-6">
      <div className="mb-5 flex items-center justify-between border-b-2 border-primary pb-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Similar Picks</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">비슷한 신발</h2>
        </div>
        {selectedSlugs.length > 0 && (
          <Link
            href={getCompareUrl()}
            rel="nofollow" // 비교함 이동은 UI 동작이지 색인 대상이 아니다 (canonical 은 /compare 고정)
            className="flex items-center gap-2 rounded bg-[var(--navy)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--navy-soft)]"
          >
            {selectedSlugs.length}개 비교하기
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* 현재 신발 (항상 선택됨) */}
      <div className="mb-4">
        <p className="mb-2 text-xs text-tertiary">현재 보고 있는 신발</p>
        <div className="flex items-center gap-4 rounded border border-sky-200 bg-sky-50/70 p-4">
          <div className="w-14 h-14 bg-white rounded-[4px] flex items-center justify-center flex-shrink-0 overflow-hidden">
            {currentShoe.image ? (
              <Image
                src={img(currentShoe.image)}
                alt={currentShoe.name}
                width={56}
                height={56}
                className="object-contain"
              />
            ) : (
              <span className="text-xl">👟</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-primary">{currentShoe.name}</p>
            <p className="text-xs text-tertiary">{currentShoe.brand} · ₩{currentShoe.price?.toLocaleString()}</p>
          </div>
          <span className="flex-shrink-0 rounded-[3px] bg-[var(--navy)] px-2.5 py-1 text-xs font-medium text-white">기준</span>
        </div>
      </div>

      {/* 비교할 신발 선택 */}
      <p className="mb-2 text-xs text-tertiary">비교할 신발 선택 (최대 2개)</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {similarShoesData.map((shoe) => {
          const isSelected = selectedSlugs.includes(shoe.slug || '');
          const canSelect = selectedSlugs.length < 2 || isSelected;

          return (
            <button
              key={shoe.slug}
              onClick={() => canSelect && handleToggleShoe(shoe.slug || '')}
              disabled={!canSelect}
              className={cn(
                "flex w-full items-center gap-4 rounded p-4 text-left transition border",
                isSelected
                  ? "border-sky-300 bg-sky-50/70"
                  : canSelect
                  ? "border-sky-100 bg-white/78 hover:border-sky-300"
                  : "border-stone-900/10 bg-white/60 opacity-50 cursor-not-allowed"
              )}
            >
              <div className="w-14 h-14 bg-white rounded-[4px] flex items-center justify-center flex-shrink-0 overflow-hidden">
                {shoe.image ? (
                  <Image
                    src={img(shoe.image)}
                    alt={shoe.name}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-xl">👟</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary">{shoe.name}</p>
                <p className="text-xs text-tertiary">{shoe.brand} · ₩{shoe.price?.toLocaleString()}</p>
                <div className="flex gap-1 mt-1 flex-wrap">
                  <span className="rounded-[3px] bg-sky-50 px-2 py-0.5 text-xs text-sky-700">
                    {shoe.category || currentCategory}
                  </span>
                  {shoe.specs?.weight && (
                    <span className="rounded-[3px] border border-border bg-surface px-2 py-0.5 font-mono text-xs tabular-nums text-tertiary">
                      {shoe.specs.weight}g
                    </span>
                  )}
                </div>
                {(() => {
                  const diffs = describeDifference(currentShoe, shoe);
                  if (diffs.length === 0) return null;
                  return (
                    <p className="mt-1.5 font-mono text-[11px] leading-snug text-tertiary">
                      {currentShoe.name} 대비 {diffs.join(' · ')}
                    </p>
                  );
                })()}
              </div>
              <div
                className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition",
                  isSelected
                    ? "bg-[var(--navy)] border-[var(--navy)]"
                    : "border-border"
                )}
              >
                {isSelected && <Check className="w-4 h-4 text-white" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* 빠른 비교 미리보기 */}
      {selectedShoes.length > 0 && (
        <div className="mt-6 border-t border-border pt-6">
          <h3 className="mb-4 text-sm font-semibold text-primary">빠른 비교</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-tertiary"></th>
                  <th className="text-center py-2 px-3 font-medium text-sky-700">
                    {currentShoe.name}
                  </th>
                  {selectedShoes.map((shoe) => (
                    <th key={shoe.slug} className="text-center py-2 px-3 font-medium text-primary">
                      {shoe.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[color:var(--border-soft)]">
                  <td className="py-2.5 pr-4 text-tertiary">가격</td>
                  <td className="text-center py-2.5 px-3 font-mono font-medium tabular-nums text-primary">
                    ₩{currentShoe.price?.toLocaleString()}
                  </td>
                  {selectedShoes.map((shoe) => (
                    <td key={shoe.slug} className={cn(
                      "text-center py-2.5 px-3 font-mono tabular-nums",
                      (shoe.price || 0) < (currentShoe.price || 0) && "font-medium text-sky-700"
                    )}>
                      ₩{shoe.price?.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[color:var(--border-soft)]">
                  <td className="py-2.5 pr-4 text-tertiary">무게</td>
                  <td className="text-center py-2.5 px-3 font-mono tabular-nums text-primary">
                    {currentShoe.specs?.weight}g
                  </td>
                  {selectedShoes.map((shoe) => (
                    <td key={shoe.slug} className={cn(
                      "text-center py-2.5 px-3 font-mono tabular-nums",
                      (shoe.specs?.weight || 999) < (currentShoe.specs?.weight || 0) && "font-medium text-sky-700"
                    )}>
                      {shoe.specs?.weight}g
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[color:var(--border-soft)]">
                  <td className="py-2.5 pr-4 text-tertiary">쿠셔닝</td>
                  <td className="text-center py-2.5 px-3">
                    <SpecBar value={(currentShoe.specs?.cushioning || 5) * 10} />
                  </td>
                  {selectedShoes.map((shoe) => (
                    <td key={shoe.slug} className="text-center py-2.5 px-3">
                      <SpecBar value={(shoe.specs?.cushioning || 5) * 10} />
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[color:var(--border-soft)]">
                  <td className="py-2.5 pr-4 text-tertiary">안정성</td>
                  <td className="text-center py-2.5 px-3">
                    <SpecBar value={(currentShoe.specs?.stability || 5) * 10} color="green" />
                  </td>
                  {selectedShoes.map((shoe) => (
                    <td key={shoe.slug} className="text-center py-2.5 px-3">
                      <SpecBar value={(shoe.specs?.stability || 5) * 10} color="green" />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 text-tertiary">토박스</td>
                  <td className="text-center py-2.5 px-3">
                    <ToeboxBadge width={currentShoe.koreanFootFit?.toBoxWidth} />
                  </td>
                  {selectedShoes.map((shoe) => (
                    <td key={shoe.slug} className="text-center py-2.5 px-3">
                      <ToeboxBadge width={shoe.koreanFootFit?.toBoxWidth} />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <Link
            href={getCompareUrl()}
            rel="nofollow" // 비교함 이동은 UI 동작이지 색인 대상이 아니다 (canonical 은 /compare 고정)
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-[4px] bg-primary py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            상세 비교 페이지로 이동
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </section>
  );
});

function SpecBar({ value, color = 'blue' }: { value: number; color?: 'blue' | 'green' }) {
  return (
    <span className="inline-block h-1.5 w-16 overflow-hidden rounded-[3px] bg-sky-100">
      <span
        className={cn(
          "block h-full rounded-[3px]",
          color === 'green' ? "bg-slate-700" : "bg-sky-600"
        )}
        style={{ width: `${value}%` }}
      />
    </span>
  );
}

function ToeboxBadge({ width }: { width?: string }) {
  const labels: Record<string, { text: string; color: string }> = {
    narrow: { text: '좁음', color: 'text-amber-700' },
    standard: { text: '표준', color: 'text-primary' },
    wide: { text: '넓음', color: 'text-sky-700' },
  };
  const info = labels[width || 'standard'] || labels.standard;
  return <span className={info.color}>{info.text}</span>;
}
