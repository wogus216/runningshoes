'use client';

import Link from 'next/link';
import { Beaker, ChevronRight, Sparkles } from 'lucide-react';

export function GelBanner() {
  return (
    <section className="relative flex h-full flex-col justify-between overflow-hidden border-2 border-primary bg-[var(--navy)] p-6 text-white md:p-8">
      <div
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, var(--accent) 0 18px, transparent 18px 26px)" }}
        aria-hidden="true"
      />
      <div className="mt-2">
        <p className="flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
          <Sparkles className="h-3 w-3" />
          FUEL
        </p>
        <h2 className="mt-3 text-xl font-black tracking-tight text-white md:text-2xl">
          에너지 젤 가이드
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          Maurten부터 양갱까지.
          <br />
          위장 부담과 가격까지 같이 봅니다.
        </p>
      </div>

      <Link
        href="/gels"
        className="group mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-[4px] bg-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E64500]"
      >
        <Beaker className="h-4 w-4" />
        젤 비교하기
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </section>
  );
}
