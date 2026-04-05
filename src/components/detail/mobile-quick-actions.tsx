'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { Shoe } from '@/types/shoe';

type MobileQuickActionsProps = {
  shoe: Shoe;
};

export function MobileQuickActions({ shoe }: MobileQuickActionsProps) {
  const [isVisible, setIsVisible] = useState(true);

  // 스크롤 위치에 따라 표시 여부 결정
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  // 첫 번째 구매 링크 (공식몰 우선)
  const primaryLink = [...(shoe.purchaseLinks || [])].sort((a, b) => {
    if (a.isOfficial && !b.isOfficial) return -1;
    if (!a.isOfficial && b.isOfficial) return 1;
    return 0;
  })[0];

  return (
    <div className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+4rem)] z-40 md:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-[28px] border border-stone-900/10 bg-white/94 px-4 py-3 shadow-[0_26px_50px_-28px_rgba(15,23,42,0.55)] backdrop-blur-xl">
        <div className="min-w-0 pr-3">
          <p className="font-bold text-primary">₩{shoe.price?.toLocaleString()}</p>
          <p className="truncate text-xs text-tertiary">{shoe.name}</p>
        </div>
        <div className="flex flex-shrink-0 items-center gap-2">
          <Link
            href={`/compare?shoes=${shoe.slug}`}
            className="rounded-full border border-stone-900/10 px-4 py-2.5 text-sm font-medium text-primary transition hover:bg-surface"
          >
            + 비교함
          </Link>
          {primaryLink ? (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-1.5 rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-900"
            >
              구매처 보기
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <button
              disabled
              className="px-5 py-2.5 bg-gray-300 text-gray-500 rounded-full text-sm font-medium cursor-not-allowed"
            >
              준비중
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
