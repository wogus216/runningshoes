'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Share2 } from 'lucide-react';
import { SITE_NAME } from '@/lib/constants';

export function DetailHeader() {
  const [shareLabel, setShareLabel] = useState('공유');

  const handleShare = async () => {
    const shareData = {
      title: document.title,
      text: `${SITE_NAME}에서 러닝화 정보를 확인해보세요.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(window.location.href);
      setShareLabel('복사됨');
      window.setTimeout(() => setShareLabel('공유'), 1800);
    } catch {
      setShareLabel('실패');
      window.setTimeout(() => setShareLabel('공유'), 1800);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-900/10 bg-[rgba(247,244,236,0.9)] backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/"
              className="rounded-full p-2 transition-colors hover:bg-white/70"
              aria-label="홈으로 이동"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7"/>
              </svg>
            </Link>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500">Running Index</p>
              <Link href="/" className="truncate text-base font-bold text-primary md:text-lg">{SITE_NAME}</Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-stone-900/10 bg-white/75 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white"
              aria-label="현재 페이지 공유"
            >
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">{shareLabel}</span>
            </button>
            <Link
              href="/compare"
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-stone-950 px-3 py-2 text-sm font-semibold text-white transition hover:bg-stone-900"
            >
              + 비교함
              <ArrowUpRight className="hidden h-4 w-4 sm:block" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
