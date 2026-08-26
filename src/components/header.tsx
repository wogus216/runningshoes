'use client';

import Link from 'next/link';
import { ArrowUpRight, Scale, Sparkles, FlaskConical, Beaker, BookOpen, Trophy, Award, ChevronDown } from 'lucide-react';
import { getAllBrands } from '@/lib/data/brands';
import { SearchPalette } from '@/components/search/search-palette';

const brandLinks = getAllBrands().map((b) => ({
  id: b.id,
  name: b.name,
  nameKo: b.nameKo ?? '',
}));

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-primary bg-[rgba(252,251,249,0.92)] backdrop-blur-xl">
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
                <stop offset="0%" stopColor="#17150F" />
                <stop offset="100%" stopColor="#262319" />
              </linearGradient>
              <linearGradient id="streak-grad" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                <stop offset="0%" stopColor="#FF4D00" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#FF4D00" stopOpacity="1" />
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
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.38em] text-accent">All Run About</p>
            <p className="truncate text-[15px] font-bold leading-tight tracking-tight text-slate-900 md:text-base">러닝의 모든것</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <div className="group relative">
            <Link
              href="/brands"
              className="inline-flex items-center gap-2 rounded-[3px] px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-[var(--accent-soft)] hover:text-primary group-hover:bg-[var(--accent-soft)] group-hover:text-primary"
              aria-haspopup="true"
            >
              <FlaskConical className="h-4 w-4" />
              <span>브랜드</span>
              <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full z-40 w-56 translate-y-1 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-[4px] border border-[var(--accent-line)] bg-white/95 p-2 backdrop-blur-xl">
                <ul className="grid grid-cols-1 gap-0.5">
                  {brandLinks.map((b) => (
                    <li key={b.id}>
                      <Link
                        href={`/brands/${b.id}`}
                        className="flex items-center justify-between rounded-[4px] px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-[var(--accent-soft)] hover:text-primary"
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
                    className="flex items-center justify-between rounded-[4px] px-3 py-2 text-sm font-semibold text-accent hover:bg-[var(--accent-soft)]"
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
            className="inline-flex items-center gap-2 rounded-[3px] px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-[var(--accent-soft)] hover:text-primary"
          >
            <Beaker className="h-4 w-4" />
            <span>젤</span>
          </Link>
          <Link
            href="/marathon"
            className="inline-flex items-center gap-2 rounded-[3px] px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-[var(--accent-soft)] hover:text-primary"
          >
            <Trophy className="h-4 w-4" />
            <span>대회</span>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-[3px] px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-[var(--accent-soft)] hover:text-primary"
          >
            <BookOpen className="h-4 w-4" />
            <span>블로그</span>
          </Link>
          <Link
            href="/best"
            className="inline-flex items-center gap-2 rounded-[3px] px-3 py-2 text-sm font-medium text-secondary transition-colors hover:bg-[var(--accent-soft)] hover:text-primary"
          >
            <Award className="h-4 w-4" />
            <span>베스트</span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <SearchPalette />
          </div>
          <Link
            href="/compare"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-[4px] border border-border bg-[var(--veil-90)] px-3.5 py-2 text-sm font-semibold text-primary transition-colors duration-200 hover:border-primary hover:bg-[var(--accent-soft)]"
          >
            <Scale className="h-4 w-4" />
            <span>비교</span>
          </Link>
          <Link
            href="/recommend"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-[4px] bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary"
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
