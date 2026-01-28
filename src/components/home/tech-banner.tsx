'use client';

import Link from 'next/link';
import { FlaskConical, ChevronRight, Sparkles } from 'lucide-react';

export function TechBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 p-6 md:p-8">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* 텍스트 영역 */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
              <Sparkles className="w-3 h-3" />
              NEW
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-md">
            러닝 신발 테크
          </h2>
          <p className="text-white text-sm md:text-base leading-relaxed drop-shadow-sm">
            ZoomX, React, Boost... 브랜드별 핵심 기술을<br className="hidden sm:block" />
            한눈에 비교하고 이해하세요
          </p>
        </div>

        {/* CTA 버튼 */}
        <Link
          href="/brands/nike/technology"
          className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/90 transition shadow-lg shadow-purple-900/20 group"
        >
          <FlaskConical className="w-4 h-4" />
          기술 살펴보기
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* 브랜드 아이콘 힌트 */}
      <div className="relative z-10 mt-4 pt-4 border-t border-white/40">
        <p className="text-white/90 text-xs mb-2 drop-shadow-sm">지원 브랜드</p>
        <div className="flex items-center gap-3 text-white text-sm drop-shadow-sm">
          <Link href="/brands/nike/technology" className="font-semibold hover:underline">Nike</Link>
          <span className="text-white/60">·</span>
          <Link href="/brands/adidas/technology" className="font-semibold hover:underline">Adidas</Link>
          <span className="text-white/60">·</span>
          <Link href="/brands/asics/technology" className="font-semibold hover:underline">Asics</Link>
          <span className="text-white/60">·</span>
          <Link href="/brands/new-balance/technology" className="font-semibold hover:underline">New Balance</Link>
          <span className="text-white/60">·</span>
          <Link href="/brands/hoka/technology" className="font-semibold hover:underline">Hoka</Link>
          <span className="text-white/60">·</span>
          <Link href="/brands/brooks/technology" className="font-semibold hover:underline">Brooks</Link>
          <span className="text-white/60">·</span>
          <Link href="/brands/mizuno/technology" className="font-semibold hover:underline">Mizuno</Link>
          <span className="text-white/60">·</span>
          <Link href="/brands/saucony/technology" className="font-semibold hover:underline">Saucony</Link>
          <span className="text-white/60">·</span>
          <Link href="/brands/on/technology" className="font-semibold hover:underline">On</Link>
          <span className="text-white/60">·</span>
          <Link href="/brands/puma/technology" className="font-semibold hover:underline">Puma</Link>
        </div>
      </div>
    </section>
  );
}
