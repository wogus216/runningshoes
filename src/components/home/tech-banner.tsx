'use client';

import Link from 'next/link';
import { FlaskConical, ChevronRight, Sparkles } from 'lucide-react';

export function TechBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-stone-800 p-6 md:p-8 h-full">
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
            러닝 신발 테크
          </h2>
          <p className="text-stone-300 text-sm leading-relaxed">
            ZoomX, React, Boost...<br />
            브랜드별 핵심 기술 비교
          </p>
        </div>

        {/* CTA 버튼 */}
        <Link
          href="/brands/nike/technology"
          className="inline-flex items-center justify-center gap-2 bg-white text-stone-800 px-6 py-3 rounded-full text-sm font-semibold hover:bg-stone-100 transition group w-fit"
        >
          <FlaskConical className="w-4 h-4" />
          기술 살펴보기
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
