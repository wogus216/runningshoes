'use client';

import Link from 'next/link';
import { BookOpen, ChevronRight, Sparkles } from 'lucide-react';

export function GuideBanner() {
  return (
    <section className="relative h-full overflow-hidden rounded-[28px] border border-sky-950/20 bg-[linear-gradient(155deg,#0f172a_0%,#1e3a5f_48%,#1d4ed8_150%)] p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-5 top-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#93c5fd_0%,#38bdf8_52%,#f59e0b_100%)]" />
      </div>
      <div className="flex flex-col justify-between h-full gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/12 px-2.5 py-1 text-xs font-medium text-white">
              <Sparkles className="w-3 h-3" />
              GUIDE
            </span>
          </div>
          <h2 className="mb-2 text-xl font-black tracking-tight text-white md:text-2xl">
            러닝 가이드
          </h2>
          <p className="text-sm leading-relaxed text-sky-100/90">
            초보부터 서브3까지.
            <br />
            훈련, 신발 선택, 유지 관리까지 잇습니다.
          </p>
        </div>

        <Link
          href="/blog"
          className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-800 transition hover:bg-sky-50"
        >
          <BookOpen className="w-4 h-4" />
          가이드 보기
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
