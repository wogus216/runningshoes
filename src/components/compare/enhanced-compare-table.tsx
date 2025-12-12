'use client';

import { X } from 'lucide-react';
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
  const numericValues = values.map(v => (typeof v === 'number' ? v : parseFloat(String(v)) || 0));
  const minVal = Math.min(...numericValues.filter(v => v > 0));
  const maxVal = Math.max(...numericValues);

  return (
    <tr className="border-b border-slate-100">
      <td className="py-3 px-4 text-sm font-medium text-slate-600 bg-slate-50 whitespace-nowrap">
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
              isHighlighted && "bg-[#4facfe]/10 text-[#4facfe] font-semibold"
            )}
          >
            {format ? format(value) : value}
          </td>
        );
      })}
    </tr>
  );
}

function LevelBadge({ level }: { level: string | undefined }) {
  if (!level) return <span className="text-slate-300">-</span>;

  const colors: Record<string, string> = {
    excellent: 'bg-emerald-100 text-emerald-700',
    good: 'bg-blue-100 text-blue-700',
    fair: 'bg-amber-100 text-amber-700',
    poor: 'bg-red-100 text-red-700',
    caution: 'bg-amber-100 text-amber-700',
    warning: 'bg-red-100 text-red-700',
  };

  const labels: Record<string, string> = {
    excellent: '매우 좋음',
    good: '좋음',
    fair: '보통',
    poor: '나쁨',
    caution: '주의',
    warning: '경고',
  };

  return (
    <span className={cn("px-2 py-1 rounded-full text-xs font-medium", colors[level] || 'bg-slate-100')}>
      {labels[level] || level}
    </span>
  );
}

// 모바일용 카드 컴포넌트
function MobileCompareCard({ shoe, onRemove }: { shoe: Shoe; onRemove?: (id: string) => void }) {
  const widthLabels: Record<string, string> = { narrow: '좁음', standard: '표준', wide: '넓음' };
  const tierLabels: Record<string, string> = {
    budget: '저가',
    mid: '중가',
    premium: '프리미엄',
    'super-premium': '슈퍼 프리미엄',
    high: '고가',
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-4">
      {/* 헤더 */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 uppercase">{shoe.brand}</p>
          <Link href={`/shoes/${shoe.slug}`} className="text-lg font-bold text-slate-900 hover:text-[#4facfe]">
            {shoe.name}
          </Link>
          <p className="text-sm text-slate-400">{shoe.category}</p>
        </div>
        {onRemove && (
          <button
            onClick={() => onRemove(shoe.id || shoe.slug || '')}
            className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-red-100 hover:text-red-500"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* 기본 정보 */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-xs text-slate-500">가격</p>
          <p className="font-bold text-slate-900">
            {shoe.priceAnalysis?.msrp ? `₩${shoe.priceAnalysis.msrp.toLocaleString()}` : '-'}
          </p>
        </div>
        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-xs text-slate-500">평점</p>
          <p className="font-bold text-slate-900">{shoe.rating} / 5</p>
        </div>
      </div>

      {/* 스펙 */}
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase mb-2">스펙</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center bg-slate-50 rounded-lg p-2">
            <p className="text-xs text-slate-500">무게</p>
            <p className="font-semibold text-sm">{shoe.specs?.weight ? `${shoe.specs.weight}g` : '-'}</p>
          </div>
          <div className="text-center bg-slate-50 rounded-lg p-2">
            <p className="text-xs text-slate-500">쿠셔닝</p>
            <p className="font-semibold text-sm">{shoe.specs?.cushioning ? `${shoe.specs.cushioning}/10` : '-'}</p>
          </div>
          <div className="text-center bg-slate-50 rounded-lg p-2">
            <p className="text-xs text-slate-500">반응성</p>
            <p className="font-semibold text-sm">{shoe.specs?.responsiveness ? `${shoe.specs.responsiveness}/10` : '-'}</p>
          </div>
          <div className="text-center bg-slate-50 rounded-lg p-2">
            <p className="text-xs text-slate-500">안정성</p>
            <p className="font-semibold text-sm">{shoe.specs?.stability ? `${shoe.specs.stability}/10` : '-'}</p>
          </div>
          <div className="text-center bg-slate-50 rounded-lg p-2">
            <p className="text-xs text-slate-500">내구성</p>
            <p className="font-semibold text-sm">{shoe.specs?.durability ? `${shoe.specs.durability}km` : '-'}</p>
          </div>
          <div className="text-center bg-slate-50 rounded-lg p-2">
            <p className="text-xs text-slate-500">드롭</p>
            <p className="font-semibold text-sm">{shoe.biomechanics?.drop ? `${shoe.biomechanics.drop}mm` : '-'}</p>
          </div>
        </div>
      </div>

      {/* 부상 예방 */}
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase mb-2">부상 예방</p>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-500">족저근막염:</span>
            <LevelBadge level={shoe.injuryPrevention?.plantarFasciitis} />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-500">아킬레스:</span>
            <LevelBadge level={shoe.injuryPrevention?.achillesTendinopathy} />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-500">무릎:</span>
            <LevelBadge level={shoe.injuryPrevention?.kneeIssues} />
          </div>
        </div>
      </div>

      {/* 적합도 */}
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase mb-2">적합도</p>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="bg-slate-100 px-2 py-1 rounded">
            발볼: {shoe.koreanFootFit?.toBoxWidth ? widthLabels[shoe.koreanFootFit.toBoxWidth] : '-'}
          </span>
          <span className="bg-slate-100 px-2 py-1 rounded">
            카본: {shoe.biomechanics?.carbonPlate ? '있음' : '없음'}
          </span>
          <span className="bg-slate-100 px-2 py-1 rounded">
            가성비: {shoe.priceAnalysis?.valueRating ? `${shoe.priceAnalysis.valueRating}/10` : '-'}
          </span>
        </div>
      </div>
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
      <div className="md:hidden space-y-4">
        {shoes.map(shoe => (
          <MobileCompareCard key={shoe.id || shoe.slug} shoe={shoe} onRemove={onRemove} />
        ))}
      </div>

      {/* 데스크톱 테이블 뷰 */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="py-4 px-4 text-left text-sm font-semibold text-slate-900 bg-slate-50 w-40">
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
                        className="absolute -top-1 -right-1 p-2 min-w-[32px] min-h-[32px] flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-red-100 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {shoe.brand}
                    </p>
                    <Link
                      href={`/shoes/${shoe.slug}`}
                      className="text-base font-bold text-slate-900 hover:text-[#4facfe]"
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
            <CompareRow
              label="평점"
              values={shoes.map(s => s.rating)}
              highlight="max"
              format={v => `${v} / 5`}
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
            <CompareRow
              label="쿠셔닝"
              values={shoes.map(s => s.specs?.cushioning || '-')}
              highlight="max"
              format={v => (typeof v === 'number' ? `${v}/10` : v)}
            />
            <CompareRow
              label="반응성"
              values={shoes.map(s => s.specs?.responsiveness || '-')}
              highlight="max"
              format={v => (typeof v === 'number' ? `${v}/10` : v)}
            />
            <CompareRow
              label="안정성"
              values={shoes.map(s => s.specs?.stability || '-')}
              highlight="max"
              format={v => (typeof v === 'number' ? `${v}/10` : v)}
            />
            <CompareRow
              label="내구성"
              values={shoes.map(s => s.specs?.durability || '-')}
              highlight="max"
              format={v => (typeof v === 'number' ? `${v}km` : v)}
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
              values={shoes.map(s => s.biomechanics?.drop || s.specs?.drop || '-')}
              format={v => (typeof v === 'number' ? `${v}mm` : v)}
            />
            <CompareRow
              label="카본 플레이트"
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

            {/* 부상 예방 */}
            <tr className="bg-slate-800">
              <td colSpan={shoes.length + 1} className="py-2 px-4 text-xs font-bold text-white uppercase tracking-wider">
                부상 예방
              </td>
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4 text-sm font-medium text-slate-600 bg-slate-50">족저근막염</td>
              {shoes.map((s, idx) => (
                <td key={idx} className="py-3 px-4 text-center">
                  <LevelBadge level={s.injuryPrevention?.plantarFasciitis} />
                </td>
              ))}
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4 text-sm font-medium text-slate-600 bg-slate-50">아킬레스</td>
              {shoes.map((s, idx) => (
                <td key={idx} className="py-3 px-4 text-center">
                  <LevelBadge level={s.injuryPrevention?.achillesTendinopathy} />
                </td>
              ))}
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4 text-sm font-medium text-slate-600 bg-slate-50">무릎</td>
              {shoes.map((s, idx) => (
                <td key={idx} className="py-3 px-4 text-center">
                  <LevelBadge level={s.injuryPrevention?.kneeIssues} />
                </td>
              ))}
            </tr>
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4 text-sm font-medium text-slate-600 bg-slate-50">정강이</td>
              {shoes.map((s, idx) => (
                <td key={idx} className="py-3 px-4 text-center">
                  <LevelBadge level={s.injuryPrevention?.shinSplints} />
                </td>
              ))}
            </tr>

            {/* 한국인 발 적합도 */}
            <tr className="bg-slate-800">
              <td colSpan={shoes.length + 1} className="py-2 px-4 text-xs font-bold text-white uppercase tracking-wider">
                한국인 발 적합도
              </td>
            </tr>
            <CompareRow
              label="발볼"
              values={shoes.map(s => {
                const width = s.koreanFootFit?.toBoxWidth;
                const labels: Record<string, string> = { narrow: '좁음', standard: '표준', wide: '넓음' };
                return width ? labels[width] || width : '-';
              })}
            />
            <tr className="border-b border-slate-100">
              <td className="py-3 px-4 text-sm font-medium text-slate-600 bg-slate-50">평발 호환</td>
              {shoes.map((s, idx) => (
                <td key={idx} className="py-3 px-4 text-center">
                  <LevelBadge level={s.koreanFootFit?.flatFootCompatibility} />
                </td>
              ))}
            </tr>
            <CompareRow
              label="와이드 옵션"
              values={shoes.map(s =>
                s.koreanFootFit?.wideOptions === undefined
                  ? '-'
                  : s.koreanFootFit.wideOptions
                  ? '있음'
                  : '없음'
              )}
            />

            {/* 가격 분석 */}
            <tr className="bg-slate-800">
              <td colSpan={shoes.length + 1} className="py-2 px-4 text-xs font-bold text-white uppercase tracking-wider">
                가격 분석
              </td>
            </tr>
            <CompareRow
              label="km당 비용"
              values={shoes.map(s => s.priceAnalysis?.costPerKm || '-')}
              highlight="min"
              format={v => (typeof v === 'number' ? `₩${v}` : v)}
            />
            <CompareRow
              label="가성비"
              values={shoes.map(s => s.priceAnalysis?.valueRating || '-')}
              highlight="max"
              format={v => (typeof v === 'number' ? `${v}/10` : v)}
            />
            <CompareRow
              label="가격대"
              values={shoes.map(s => {
                const tier = s.priceAnalysis?.priceTier;
                const labels: Record<string, string> = {
                  budget: '저가',
                  mid: '중가',
                  premium: '프리미엄',
                  'super-premium': '슈퍼 프리미엄',
                };
                return tier ? labels[tier] || tier : '-';
              })}
            />
          </tbody>
        </table>
      </div>
    </>
  );
}
