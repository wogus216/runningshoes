import Link from 'next/link';
import { Scale, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/10 backdrop-blur-2xl animate-fade-in-down">
      <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-xl font-black tracking-tight text-slate-900 hover:text-[#4facfe] transition-colors">
          러닝화 계급도 <span className="text-[#4facfe]">2025</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/recommend"
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe] px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            <Sparkles className="h-4 w-4" />
            <span className="hidden sm:inline">맞춤 추천</span>
            <span className="sm:hidden">추천</span>
          </Link>
          <Link
            href="/compare"
            className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/50 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:border-[#4facfe] hover:text-[#4facfe] transition-colors"
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
