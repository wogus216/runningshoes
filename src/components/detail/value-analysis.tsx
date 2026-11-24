import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { PriceAnalysis } from '@/types/shoe';

export type ResolvedAlternative = {
  key: string;
  slug?: string;
  brand?: string;
  name?: string;
};

type ValueAnalysisProps = {
  priceAnalysis: PriceAnalysis;
  price?: number;
  shoeName: string;
  brand: string;
  resolvedAlternatives?: ResolvedAlternative[];
};

export function ValueAnalysis({ priceAnalysis, price, resolvedAlternatives = [] }: ValueAnalysisProps) {
  const msrp = priceAnalysis.msrp ?? price;
  const alternatives = resolvedAlternatives.filter(alternative => alternative.slug);
  if (!msrp && !priceAnalysis.streetPrice && !priceAnalysis.valueAdvantages?.length && alternatives.length === 0) return null;

  return (
    <section className="space-y-5">
      <h2 className="text-xl font-bold text-primary">가격과 비교 후보</h2>
      {msrp ? (
        <p className="text-secondary">한국 정가 <strong className="font-mono text-primary">{msrp.toLocaleString('ko-KR')}원</strong></p>
      ) : priceAnalysis.streetPrice ? (
        <p className="text-secondary">병행·직구 입력 가격 약 <strong>{priceAnalysis.streetPrice.toLocaleString('ko-KR')}원</strong></p>
      ) : null}
      {priceAnalysis.valueAdvantages && priceAnalysis.valueAdvantages.length > 0 && (
        <ul className="list-disc space-y-2 pl-5 text-sm text-secondary">
          {priceAnalysis.valueAdvantages.map(advantage => <li key={advantage}>{advantage}</li>)}
        </ul>
      )}
      {alternatives.length > 0 && (
        <ul className="space-y-2">
          {alternatives.map(alternative => (
            <li key={alternative.key}>
              <Link href={`/shoes/${alternative.slug}` as `/shoes/${string}`} className="inline-flex min-h-[44px] items-center gap-2 text-sm text-primary hover:text-accent">
                {alternative.brand} {alternative.name}<ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
