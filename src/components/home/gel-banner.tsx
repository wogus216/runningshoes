'use client';

import Link from 'next/link';
import { Beaker, ChevronRight, Sparkles } from 'lucide-react';

export function GelBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-emerald-700 p-6 md:p-8 h-full">
      <div className="flex flex-col justify-between h-full gap-4">
        {/* 텍스트 영역 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/15 text-white text-xs font-medium rounded-full">
              <Sparkles className="w-3 h-3" />
              NEW
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            에너지 젤 가이드
          </h2>
          <p className="text-emerald-100 text-sm leading-relaxed">
            Maurten, GU, 양갱까지<br />
            성분·위장·가성비 완전 분석
          </p>
        </div>

        {/* CTA 버튼 */}
        <Link
          href="/gels"
          className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-emerald-50 transition group w-fit"
        >
          <Beaker className="w-4 h-4" />
          젤 비교하기
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
