'use client';

import Link from 'next/link';
import { Beaker, ChevronRight, Sparkles } from 'lucide-react';

export function GelBanner() {
  return (
    <section className="relative h-full overflow-hidden rounded-[28px] border border-sky-950/20 bg-[linear-gradient(160deg,#0a1830_0%,#123253_52%,#0f766e_155%)] p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-3 bottom-0 h-28 w-28 rounded-full bg-teal-300/12 blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#22d3ee_0%,#14b8a6_52%,#38bdf8_100%)]" />
      </div>
      <div className="flex flex-col justify-between h-full gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/12 px-2.5 py-1 text-xs font-medium text-white">
              <Sparkles className="w-3 h-3" />
              FUEL
            </span>
          </div>
          <h2 className="mb-2 text-xl font-black tracking-tight text-white md:text-2xl">
            에너지 젤 가이드
          </h2>
          <p className="text-sm leading-relaxed text-cyan-100/90">
            Maurten부터 양갱까지.
            <br />
            위장 부담과 가격까지 같이 봅니다.
          </p>
        </div>

        <Link
          href="/gels"
          className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal-800 transition hover:bg-cyan-50"
        >
          <Beaker className="w-4 h-4" />
          젤 비교하기
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
