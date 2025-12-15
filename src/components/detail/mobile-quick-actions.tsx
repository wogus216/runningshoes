'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Share2, GitCompare, ArrowUp, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Shoe } from '@/types/shoe';

type MobileQuickActionsProps = {
  shoe: Shoe;
};

export function MobileQuickActions({ shoe }: MobileQuickActionsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);

  // 스크롤 위치에 따라 표시 여부 결정
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
      setShowScrollTop(scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 공유 기능
  const handleShare = async () => {
    const url = window.location.href;
    const title = `${shoe.brand} ${shoe.name} - 러닝화 리뷰`;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // 사용자가 공유 취소
      }
    } else {
      // 클립보드에 복사
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 px-4 md:hidden">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-2 flex items-center justify-around gap-2">
        {/* 공유 버튼 */}
        <button
          onClick={handleShare}
          className={cn(
            "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all min-w-[60px] min-h-[56px]",
            copied
              ? "bg-green-50 text-green-600"
              : "hover:bg-slate-100 text-slate-600"
          )}
        >
          {copied ? (
            <Check className="h-5 w-5" />
          ) : (
            <Share2 className="h-5 w-5" />
          )}
          <span className="text-[10px] font-medium">
            {copied ? '복사됨' : '공유'}
          </span>
        </button>

        {/* 비교하기 버튼 */}
        <Link
          href={`/compare?shoes=${shoe.slug}`}
          className="flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl hover:bg-slate-100 text-slate-600 transition-all min-w-[60px] min-h-[56px]"
        >
          <GitCompare className="h-5 w-5" />
          <span className="text-[10px] font-medium">비교</span>
        </Link>

        {/* 가격 표시 */}
        <div className="flex-1 text-center px-2">
          <p className="text-[10px] text-slate-500">정가</p>
          <p className="text-sm font-bold text-[#4facfe]">
            {shoe.priceAnalysis?.msrp
              ? `₩${shoe.priceAnalysis.msrp.toLocaleString()}`
              : shoe.price
                ? `₩${shoe.price.toLocaleString()}`
                : '-'
            }
          </p>
        </div>

        {/* 맨 위로 버튼 */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl hover:bg-[#4facfe]/10 text-[#4facfe] transition-all min-w-[60px] min-h-[56px]"
          >
            <ArrowUp className="h-5 w-5" />
            <span className="text-[10px] font-medium">위로</span>
          </button>
        )}
      </div>
    </div>
  );
}
