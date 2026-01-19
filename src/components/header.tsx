'use client';

import Link from 'next/link';
import { Scale, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-primary hover:text-accent transition-colors">
          러닝의 모든것
        </Link>

        {/* 액션 버튼 */}
        <nav className="flex items-center gap-2">
          <Link
            href="/recommend"
            className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
          >
            <Sparkles className="h-4 w-4" />
            <span className="hidden sm:inline">맞춤 추천</span>
            <span className="sm:hidden">추천</span>
          </Link>
          <Link
            href="/compare"
            className="flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-surface transition"
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
