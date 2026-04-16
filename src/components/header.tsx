'use client';

import Link from 'next/link';
import { ArrowUpRight, Scale, Sparkles, FlaskConical, Beaker, BookOpen, Trophy, Award, ChevronDown } from 'lucide-react';
import { getAllBrands } from '@/lib/data/brands';
import { SearchPalette } from '@/components/search/search-palette';
import { getSearchIndex } from '@/lib/search-index';

const brandLinks = getAllBrands().map((b) => ({
  id: b.id,
  name: b.name,
  nameKo: b.nameKo ?? '',
}));

const searchItems = getSearchIndex();

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--accent-line)] bg-[rgba(244,249,253,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 transition-transform duration-200 hover:-translate-y-0.5"
        >
          {/* Logo mark — 3 speed-streak bars */}
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="44" x2="44" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#081226" />
              </linearGradient>
              <linearGradient id="streak-grad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>
            {/* Background square — sharp corners, editorial */}
            <rect width="44" height="44" rx="10" fill="url(#logo-grad)" />
            {/* Ambient glow overlay */}
            <rect width="44" height="44" rx="10" fill="url(#logo-grad)" opacity="0.18" />
            {/* Speed streaks — 3 parallel diagonal bars, bold & precise */}
            {/* Bar 1 — bottom, longest */}
            <rect x="8" y="27" width="28" height="5" rx="2.5" fill="url(#streak-grad)" transform="rotate(-22 8 27)" />
            {/* Bar 2 — middle */}
            <rect x="11" y="19" width="21" height="4" rx="2" fill="url(#streak-grad)" opacity="0.78" transform="rotate(-22 11 19)" />
            {/* Bar 3 — top, shortest */}
            <rect x="14" y="12" width="14" height="3" rx="1.5" fill="url(#streak-grad)" opacity="0.48" transform="rotate(-22 14 12)" />
          </svg>
          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.38em] text-sky-600/80">All Run About</p>
            <p className="truncate text-[15px] font-bold leading-tight tracking-tight text-slate-900 md:text-base">러닝의 모든것</p>
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
            <span>블로그</span>
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
          <div className="hidden sm:block">
            <SearchPalette items={searchItems} />
          </div>
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
