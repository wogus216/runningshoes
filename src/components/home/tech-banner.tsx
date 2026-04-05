'use client';

import Link from 'next/link';
import { FlaskConical, ChevronRight, Sparkles } from 'lucide-react';

export function TechBanner() {
  return (
    <section className="relative h-full overflow-hidden rounded-[28px] border border-sky-950/20 bg-[linear-gradient(160deg,#071225_0%,#0f1e38_56%,#0c4a6e_145%)] p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-sky-300/15 blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#38bdf8_0%,#0ea5e9_50%,#f97316_100%)]" />
      </div>
      <div className="flex flex-col justify-between h-full gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/12 px-2.5 py-1 text-xs font-medium text-white">
              <Sparkles className="w-3 h-3" />
              TECH
            </span>
          </div>
          <h2 className="mb-2 text-xl font-black tracking-tight text-white md:text-2xl">
            러닝 신발 테크
          </h2>
          <p className="text-sm leading-relaxed text-slate-200">
            ZoomX, Lightstrike Pro, FF Turbo+.
            <br />
            말만 많은 기술을 구조적으로 정리했습니다.
          </p>
        </div>

        <Link
          href="/brands/nike/technology"
          className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-50"
        >
          <FlaskConical className="w-4 h-4" />
          기술 살펴보기
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
