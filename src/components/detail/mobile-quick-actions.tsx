'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
          <button className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:opacity-90 transition">
            구매처 보기
          </button>
        </div>
      </div>
    </div>
  );
}
