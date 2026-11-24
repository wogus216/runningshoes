'use client';

import { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Shoe } from '@/types/shoe';

type EnhancedCompareTableProps = {
  shoes: Shoe[];
  onRemove?: (shoeId: string) => void;
};

type CompareRowProps = {
  label: string;
  values: (string | number | React.ReactNode)[];
  highlight?: 'min' | 'max' | 'none';
  format?: (value: string | number | React.ReactNode) => string | number | React.ReactNode;
};

function CompareRow({ label, values, highlight = 'none', format }: CompareRowProps) {
  if (values.every(value => value === undefined || value === null || value === '-')) return null;
  const numericValues = values.map(v => (typeof v === 'number' ? v : parseFloat(String(v)) || 0));
  const minVal = Math.min(...numericValues.filter(v => v > 0));
  const maxVal = Math.max(...numericValues);

  return (
    <tr className="border-b border-sky-100">
      <td className="whitespace-nowrap bg-sky-50 py-3 px-4 text-sm font-medium text-sky-800">
        {label}
      </td>
      {values.map((value, idx) => {
        const numVal = typeof value === 'number' ? value : parseFloat(String(value)) || 0;
        const isHighlighted =
          highlight !== 'none' &&
          numVal > 0 &&
          ((highlight === 'min' && numVal === minVal) || (highlight === 'max' && numVal === maxVal));

        return (
          <td
            key={idx}
            className={cn(
              "py-3 px-4 text-sm text-center",
              isHighlighted && "bg-sky-50 text-sky-700 font-semibold"
            )}
          >
            {format ? format(value) : value}
          </td>
        );
      })}
    </tr>
  );
}

// 모바일용 아코디언 카드 컴포넌트
function MobileCompareCard({ shoe, onRemove }: { shoe: Shoe; onRemove?: (id: string) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <div className="overflow-hidden rounded-[4px] border border-[var(--accent-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,244,237,0.95))]">
      <div className="p-4">
        <div className="mb-4 h-1 rounded-full bg-[linear-gradient(90deg,var(--accent)_0%,var(--signal-dark)_100%)]" />
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">{shoe.brand}</p>
            <Link href={`/shoes/${shoe.slug}`} className="text-lg font-black tracking-tight text-slate-950 hover:text-sky-700">
              {shoe.name}
            </Link>
            <p className="text-sm text-slate-400">{shoe.category}</p>
          </div>
          {onRemove && (
            <button
              onClick={() => onRemove(shoe.id || shoe.slug || '')}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-sky-50 p-2 text-sky-800 hover:bg-red-100 hover:text-red-500"
              aria-label={`${shoe.name} 비교에서 제거`}
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="rounded-[4px] bg-sky-50 p-2 text-center">
            <p className="text-[10px] text-slate-500">가격</p>
            <p className="font-bold text-xs">{(shoe.priceAnalysis?.msrp ?? shoe.price) === undefined ? '-' : `${(shoe.priceAnalysis?.msrp ?? shoe.price)!.toLocaleString('ko-KR')}원`}</p>
          </div>
          <div className="rounded-[4px] bg-sky-50 p-2 text-center">
            <p className="text-[10px] text-slate-500">무게</p>
            <p className="font-bold text-xs">{shoe.specs?.weight ? `${shoe.specs.weight}g` : '-'}</p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="mt-4 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[4px] bg-sky-50 py-3 text-sm font-medium text-sky-800 transition-colors hover:bg-sky-100"
        >
          {isExpanded ? (
            <>
              접기 <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              상세 스펙 보기 <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {/* 확장된 상세 정보 */}
      {isExpanded && (
        <div className="animate-fade-in-up space-y-4 border-t border-sky-100 bg-sky-50/40 p-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">전체 스펙</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-[4px] border border-sky-100 bg-white p-2 text-center">
                <p className="text-xs text-slate-500">드롭</p>
                <p className="font-semibold text-sm">{(shoe.biomechanics?.drop ?? shoe.specs?.drop) === undefined ? '-' : `${shoe.biomechanics?.drop ?? shoe.specs?.drop}mm`}</p>
              </div>
              <div className="rounded-[4px] border border-sky-100 bg-white p-2 text-center">
                <p className="text-xs text-slate-500">카본</p>
                <p className="font-semibold text-sm">{shoe.biomechanics?.carbonPlate === undefined ? '미확인' : shoe.biomechanics.carbonPlate ? '있음' : '없음'}</p>
              </div>
              {shoe.biomechanics?.stackHeight && (
                <>
                  <div className="rounded-[4px] border border-sky-100 bg-white p-2 text-center">
                    <p className="text-xs text-slate-500">힐 스택</p>
                    <p className="font-semibold text-sm">{shoe.biomechanics.stackHeight.heel}mm</p>
                  </div>
                  <div className="rounded-[4px] border border-sky-100 bg-white p-2 text-center">
                    <p className="text-xs text-slate-500">포어풋 스택</p>
                    <p className="font-semibold text-sm">{shoe.biomechanics.stackHeight.forefoot}mm</p>
                  </div>
                </>
              )}
            </div>
            {shoe.biomechanics?.midsoleType && (
              <p className="mt-3 text-sm text-secondary">{shoe.biomechanics.midsoleType}</p>
            )}
          </div>

          {shoe.koreanFootFit?.wideOptions === true && (
            <p className="text-sm text-secondary">와이드 옵션 있음 · 판매 성별·사이즈·폭 확인</p>
          )}

          <Link
            href={`/shoes/${shoe.slug}`}
            className="block min-h-[44px] w-full rounded-[4px] bg-[var(--navy)] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--navy-soft)]"
          >
            상세 페이지 보기
          </Link>
        </div>
      )}
    </div>
  );
}

export function EnhancedCompareTable({ shoes, onRemove }: EnhancedCompareTableProps) {
  if (shoes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">비교할 신발을 선택해주세요</p>
      </div>
    );
  }

  return (
    <>
      {/* 모바일 카드 뷰 */}
      <div className="space-y-4 md:hidden">
        {shoes.map(shoe => (
          <MobileCompareCard key={shoe.id || shoe.slug} shoe={shoe} onRemove={onRemove} />
        ))}
      </div>

      {/* 데스크톱 테이블 뷰 */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-sky-100">
              <th className="w-40 bg-sky-50 py-4 px-4 text-left text-sm font-semibold text-sky-950">
                항목
              </th>
              {shoes.map(shoe => (
                <th
                  key={shoe.id || shoe.slug}
                  className="py-4 px-4 text-center min-w-[180px]"
                >
                  <div className="relative">
                    {onRemove && (
                      <button
                        onClick={() => onRemove(shoe.id || shoe.slug || '')}
                        aria-label={`${shoe.name} 비교에서 제거`}
                        className="absolute -top-1 -right-1 p-2 min-w-[32px] min-h-[32px] flex items-center justify-center rounded-full bg-sky-50 text-sky-800 hover:bg-red-100 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {shoe.brand}
                    </p>
                    <Link
                      href={`/shoes/${shoe.slug}`}
                      className="text-base font-bold text-slate-900 hover:text-accent"
                    >
                      {shoe.name}
                    </Link>
                    <p className="text-xs text-slate-400 mt-1">{shoe.category}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* 기본 정보 */}
            <tr className="bg-slate-800">
              <td colSpan={shoes.length + 1} className="py-2 px-4 text-xs font-bold text-white uppercase tracking-wider">
                기본 정보
              </td>
            </tr>
            <CompareRow
              label="가격"
              values={shoes.map(s => s.priceAnalysis?.msrp || s.price || '-')}
              highlight="min"
              format={v => (typeof v === 'number' ? `₩${v.toLocaleString()}` : v)}
            />

            {/* 스펙 */}
            <tr className="bg-slate-800">
              <td colSpan={shoes.length + 1} className="py-2 px-4 text-xs font-bold text-white uppercase tracking-wider">
                스펙
              </td>
            </tr>
            <CompareRow
              label="무게"
              values={shoes.map(s => s.specs?.weight || '-')}
              highlight="min"
              format={v => (typeof v === 'number' ? `${v}g` : v)}
            />

            {/* 생체역학 */}
            <tr className="bg-slate-800">
              <td colSpan={shoes.length + 1} className="py-2 px-4 text-xs font-bold text-white uppercase tracking-wider">
                생체역학
              </td>
            </tr>
            <CompareRow
              label="힐 스택"
              values={shoes.map(s => s.biomechanics?.stackHeight?.heel || '-')}
              format={v => (typeof v === 'number' ? `${v}mm` : v)}
            />
            <CompareRow
              label="포어풋 스택"
              values={shoes.map(s => s.biomechanics?.stackHeight?.forefoot || '-')}
              format={v => (typeof v === 'number' ? `${v}mm` : v)}
            />
            <CompareRow
              label="드롭"
              values={shoes.map(s => s.biomechanics?.drop ?? s.specs?.drop ?? '-')}
              format={v => (typeof v === 'number' ? `${v}mm` : v)}
            />
            <CompareRow
              label="카본 보강 구조"
              values={shoes.map(s =>
                s.biomechanics?.carbonPlate === undefined
                  ? '-'
                  : s.biomechanics.carbonPlate
                  ? '있음'
                  : '없음'
              )}
            />
            <CompareRow
              label="미드솔"
              values={shoes.map(s => s.biomechanics?.midsoleType || '-')}
            />

            {shoes.some(shoe => shoe.koreanFootFit?.wideOptions === true) && <CompareRow
              label="와이드 옵션"
              values={shoes.map(s =>
                s.koreanFootFit?.wideOptions === undefined
                  ? '-'
                  : s.koreanFootFit.wideOptions
                  ? '있음'
                  : '미확인'
              )}
            />}

          </tbody>
        </table>
      </div>
    </>
  );
}
