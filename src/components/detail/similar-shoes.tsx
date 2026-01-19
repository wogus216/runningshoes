'use client';

import { useState, useMemo, memo } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { SimilarShoeInfo } from '@/lib/data/shoes';
import type { Shoe } from '@/types/shoe';
import type { Route } from 'next';
import { cn } from '@/lib/utils';

type SimilarShoesProps = {
  currentShoe: Shoe;
  similarShoesData: SimilarShoeInfo[];
  currentCategory?: string;
};

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
    <section className="section-card p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-primary">비슷한 신발</h2>
        {selectedSlugs.length > 0 && (
          <Link
            href={getCompareUrl()}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            {selectedSlugs.length}개 비교하기
            <ChevronRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* 현재 신발 (항상 선택됨) */}
      <div className="mb-4">
        <p className="text-xs text-tertiary mb-2">현재 보고 있는 신발</p>
        <div className="bg-accent/5 border-2 border-accent rounded-xl p-4 flex items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
            {currentShoe.image ? (
              <Image
                src={currentShoe.image}
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
          <span className="px-2.5 py-1 bg-accent text-white text-xs font-medium rounded-full flex-shrink-0">기준</span>
        </div>
      </div>

      {/* 비교할 신발 선택 */}
      <p className="text-xs text-tertiary mb-2">비교할 신발 선택 (최대 2개)</p>
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
                "bg-surface rounded-xl p-4 flex items-center gap-4 border-2 transition text-left w-full",
                isSelected
                  ? "border-accent bg-accent/5"
                  : canSelect
                  ? "border-transparent hover:border-accent/30"
                  : "border-transparent opacity-50 cursor-not-allowed"
              )}
            >
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                {shoe.image ? (
                  <Image
                    src={shoe.image}
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
                  <span className="text-xs px-1.5 py-0.5 bg-positive/10 text-positive rounded">
                    {shoe.category || currentCategory}
                  </span>
                  {shoe.specs?.weight && (
                    <span className="text-xs px-1.5 py-0.5 bg-surface text-tertiary rounded border border-border">
                      {shoe.specs.weight}g
                    </span>
                  )}
                </div>
              </div>
              <div
                className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition",
                  isSelected
                    ? "bg-accent border-accent"
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
        <div className="mt-6 pt-6 border-t border-border">
          <h3 className="font-semibold text-sm mb-4 text-primary">빠른 비교</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-medium text-tertiary"></th>
                  <th className="text-center py-2 px-3 font-medium text-accent">
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
                <tr className="border-b border-border/50">
                  <td className="py-2.5 pr-4 text-tertiary">가격</td>
                  <td className="text-center py-2.5 px-3 font-medium text-primary">
                    ₩{currentShoe.price?.toLocaleString()}
                  </td>
                  {selectedShoes.map((shoe) => (
                    <td key={shoe.slug} className={cn(
                      "text-center py-2.5 px-3",
                      (shoe.price || 0) < (currentShoe.price || 0) && "text-positive font-medium"
                    )}>
                      ₩{shoe.price?.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2.5 pr-4 text-tertiary">무게</td>
                  <td className="text-center py-2.5 px-3 text-primary">
                    {currentShoe.specs?.weight}g
                  </td>
                  {selectedShoes.map((shoe) => (
                    <td key={shoe.slug} className={cn(
                      "text-center py-2.5 px-3",
                      (shoe.specs?.weight || 999) < (currentShoe.specs?.weight || 0) && "text-positive font-medium"
                    )}>
                      {shoe.specs?.weight}g
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border/50">
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
                <tr className="border-b border-border/50">
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
            className="w-full mt-4 py-3 bg-primary text-white rounded-xl text-sm font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
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
    <span className="inline-block w-16 h-1.5 bg-border rounded-full overflow-hidden">
      <span
        className={cn(
          "block h-full rounded-full",
          color === 'green' ? "bg-positive" : "bg-accent"
        )}
        style={{ width: `${value}%` }}
      />
    </span>
  );
}

function ToeboxBadge({ width }: { width?: string }) {
  const labels: Record<string, { text: string; color: string }> = {
    narrow: { text: '좁음', color: 'text-warning' },
    standard: { text: '표준', color: 'text-primary' },
    wide: { text: '넓음', color: 'text-positive' },
  };
  const info = labels[width || 'standard'] || labels.standard;
  return <span className={info.color}>{info.text}</span>;
}
