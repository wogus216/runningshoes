import type { Shoe } from '@/types/shoe';
import { Check, X, Star } from 'lucide-react';

type CoreBoxesProps = {
  shoe: Shoe;
};

export function CoreBoxes({ shoe }: CoreBoxesProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* 추천 대상 */}
      <div className="section-card border border-sky-200 bg-sky-50/70 p-4 md:p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-700">
            <Check className="w-4 h-4 text-white" />
          </span>
          <h3 className="font-semibold text-sm text-primary">추천 대상</h3>
        </div>
        <ul className="space-y-2 text-sm text-secondary">
          {shoe.targetUsers?.recommended?.slice(0, 4).map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* 비추천 대상 */}
      <div className="section-card border border-rose-200 bg-rose-50/80 p-4 md:p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-rose-600">
            <X className="w-4 h-4 text-white" />
          </span>
          <h3 className="font-semibold text-sm text-primary">비추천 대상</h3>
        </div>
        <ul className="space-y-2 text-sm text-secondary">
          {shoe.targetUsers?.notRecommended?.slice(0, 4).map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* 핵심 특징 */}
      <div className="section-card border border-[var(--accent-line)] bg-white/84 p-4 md:p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-500">
            <Star className="w-4 h-4 text-white" />
          </span>
          <h3 className="font-semibold text-sm text-primary">핵심 특징</h3>
        </div>
        <ul className="space-y-2 text-sm text-secondary">
          {shoe.features?.slice(0, 4).map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
