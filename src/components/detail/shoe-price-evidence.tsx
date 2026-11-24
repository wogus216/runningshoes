import type { ShoePriceCheck } from '@/types/shoe';

const amountLabels: Partial<Record<ShoePriceCheck['kind'], string>> = {
  'official-listing': '공식몰 표시가',
  retailer: '판매점 기준가',
  historical: '과거 확인 금액',
};

export function ShoePriceEvidence({ check }: { check: ShoePriceCheck }) {
  const amountLabel = amountLabels[check.kind];
  return (
    <div className="border border-border bg-white p-5 text-sm leading-relaxed text-secondary md:p-6">
      {amountLabel && check.amount !== undefined && (
        <p className="mb-2 font-semibold text-primary">
          {amountLabel} {check.amount.toLocaleString('ko-KR')}원
        </p>
      )}
      <p>{check.note}</p>
      <a href={check.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block underline underline-offset-4">
        가격 확인 근거 · {check.checkedAt}
      </a>
    </div>
  );
}
