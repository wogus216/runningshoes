'use client';

import Link from 'next/link';
import { FlaskConical, ChevronRight, Sparkles } from 'lucide-react';

export function TechBanner() {
  return (
    <section className="relative flex h-full flex-col justify-between overflow-hidden border-2 border-primary bg-[var(--navy)] p-6 text-white md:p-8">
      <div
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ backgroundImage: "repeating-linear-gradient(90deg, var(--accent) 0 18px, transparent 18px 26px)" }}
        aria-hidden="true"
      />
      <div className="mt-2">
        <p className="flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-signal-dark">
          <Sparkles className="h-3 w-3" />
          TECH
        </p>
        <h2 className="mt-3 text-xl font-black tracking-tight text-white md:text-2xl">
          러닝 신발 테크
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          ZoomX, Lightstrike Pro, FF Turbo+.
          <br />
          말만 많은 기술을 구조적으로 정리했습니다.
        </p>
      </div>

      <Link
        href="/brands/nike/technology"
        className="group mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-[4px] bg-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#E64500]"
      >
        <FlaskConical className="h-4 w-4" />
        기술 살펴보기
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </section>
  );
}
