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
  const primaryLink = shoe.purchaseLinks?.sort((a, b) => {
    if (a.isOfficial && !b.isOfficial) return -1;
    if (!a.isOfficial && b.isOfficial) return 1;
    return 0;
  })[0];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border py-3 px-4 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div>
          <p className="font-bold text-primary">₩{shoe.price?.toLocaleString()}</p>
          <p className="text-xs text-tertiary">{shoe.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`/compare?shoes=${shoe.slug}`}
            className="px-4 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-surface transition text-primary"
          >
            + 비교함
          </Link>
          {primaryLink ? (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:opacity-90 transition flex items-center gap-1.5"
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
