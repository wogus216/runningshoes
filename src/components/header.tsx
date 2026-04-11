'use client';

import Link from 'next/link';
import { ArrowUpRight, Scale, Sparkles, FlaskConical, Beaker, BookOpen, Trophy, Award, ChevronDown } from 'lucide-react';
import { getAllBrands } from '@/lib/data/brands';

const brandLinks = getAllBrands().map((b) => ({
  id: b.id,
  name: b.name,
  nameKo: b.nameKo ?? '',
}));

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--accent-line)] bg-[rgba(244,249,253,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 transition-transform duration-200 hover:-translate-y-0.5"
        >
          <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-2xl bg-[var(--navy)] text-sm font-black tracking-[0.24em] text-white shadow-[0_16px_28px_-18px_rgba(2,132,199,0.9)]">
            RA
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-sky-700">Performance Index</p>
            <p className="truncate text-base font-semibold text-slate-950 md:text-lg">러닝화를 판단하는 기준</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <div className="group relative">
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white/85 hover:text-slate-950 group-hover:bg-white/85 group-hover:text-slate-950"
              aria-haspopup="true"
            >
              <FlaskConical className="h-4 w-4" />
              <span>브랜드</span>
              <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full z-40 w-56 translate-y-1 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-xl border border-[var(--accent-line)] bg-white/95 p-2 shadow-lg backdrop-blur-xl">
                <ul className="grid grid-cols-1 gap-0.5">
                  {brandLinks.map((b) => (
                    <li key={b.id}>
                      <Link
                        href={`/brands/${b.id}`}
                        className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-sky-50 hover:text-slate-950"
                      >
                        <span>{b.name}</span>
                        {b.nameKo && (
                          <span className="text-xs text-slate-400">{b.nameKo}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-1 border-t border-slate-100 pt-1">
                  <Link
                    href="/brands"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50"
                  >
                    <span>전체 브랜드 비교</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/gels"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white/70 hover:text-slate-950"
          >
            <Beaker className="h-4 w-4" />
            <span>젤</span>
          </Link>
          <Link
            href="/marathon"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white/70 hover:text-slate-950"
          >
            <Trophy className="h-4 w-4" />
            <span>대회</span>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white/70 hover:text-slate-950"
          >
            <BookOpen className="h-4 w-4" />
            <span>가이드</span>
          </Link>
          <Link
            href="/best"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white/70 hover:text-slate-950"
          >
            <Award className="h-4 w-4" />
            <span>베스트</span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/compare"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--accent-line)] bg-white/84 px-3.5 py-2 text-sm font-semibold text-slate-900 transition-all duration-200 hover:border-sky-300 hover:bg-white"
          >
            <Scale className="h-4 w-4" />
            <span>비교</span>
          </Link>
          <Link
            href="/recommend"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[var(--navy)] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_35px_-24px_rgba(2,132,199,0.58)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--navy-soft)]"
          >
            <Sparkles className="h-4 w-4" />
            <span>맞춤 추천</span>
            <ArrowUpRight className="hidden h-4 w-4 sm:block" />
          </Link>
        </div>
      </div>
    </header>
  );
}
