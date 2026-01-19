'use client';

import type { Shoe } from '@/types/shoe';
import { Check, X, Star } from 'lucide-react';

type CoreBoxesProps = {
  shoe: Shoe;
};

export function CoreBoxes({ shoe }: CoreBoxesProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* 추천 대상 */}
      <div className="section-card p-4 md:p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 bg-positive rounded-md flex items-center justify-center">
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
      <div className="section-card p-4 md:p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 bg-negative rounded-md flex items-center justify-center">
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
      <div className="section-card p-4 md:p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 bg-accent rounded-md flex items-center justify-center">
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
