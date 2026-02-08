'use client';

import Link from 'next/link';
import { Scale, Sparkles, FlaskConical, Beaker, BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-primary hover:text-accent transition-colors">
          러닝의 모든것
        </Link>

        {/* 액션 버튼 */}
        <nav className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/brands/nike/technology"
            className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 rounded-2xl sm:rounded-full bg-stone-700 px-3 sm:px-4 min-h-[44px] text-[10px] sm:text-sm font-medium text-white hover:bg-stone-800 transition"
          >
            <FlaskConical className="h-4 w-4" />
            <span className="hidden sm:inline">러닝 신발 테크</span>
            <span className="sm:hidden">테크</span>
          </Link>
          <Link
            href="/gels"
            className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 rounded-2xl sm:rounded-full bg-emerald-600 px-3 sm:px-4 min-h-[44px] text-[10px] sm:text-sm font-medium text-white hover:bg-emerald-700 transition"
          >
            <Beaker className="h-4 w-4" />
            <span className="hidden sm:inline">에너지 젤</span>
            <span className="sm:hidden">젤</span>
          </Link>
          <Link
            href="/blog"
            className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 rounded-2xl sm:rounded-full bg-amber-600 px-3 sm:px-4 min-h-[44px] text-[10px] sm:text-sm font-medium text-white hover:bg-amber-700 transition"
          >
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">가이드</span>
            <span className="sm:hidden">가이드</span>
          </Link>
          <Link
            href="/recommend"
            className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 rounded-2xl sm:rounded-full bg-accent px-3 sm:px-4 min-h-[44px] text-[10px] sm:text-sm font-medium text-white hover:opacity-90 transition"
          >
            <Sparkles className="h-4 w-4" />
            <span className="hidden sm:inline">맞춤 추천</span>
            <span className="sm:hidden">추천</span>
          </Link>
          <Link
            href="/compare"
            className="flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 rounded-2xl sm:rounded-full border border-border bg-white px-3 sm:px-4 min-h-[44px] text-[10px] sm:text-sm font-medium text-primary hover:bg-surface transition"
          >
            <Scale className="h-4 w-4" />
            <span className="hidden sm:inline">비교하기</span>
            <span className="sm:hidden">비교</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
