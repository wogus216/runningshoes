'use client';

import Link from 'next/link';
import { SITE_NAME } from '@/lib/constants';

export function DetailHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 -ml-2 hover:bg-surface rounded-full transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7"/>
              </svg>
            </Link>
            <Link href="/" className="text-lg font-bold text-primary">{SITE_NAME}</Link>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-surface rounded-full transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
              </svg>
            </button>
            <Link href="/compare" className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 bg-surface rounded-full hover:bg-border transition">
              + 비교함
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
