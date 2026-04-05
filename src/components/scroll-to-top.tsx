'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isDetailPage = pathname.startsWith('/shoes/');

  useEffect(() => {
    const toggleVisibility = () => {
      // 400px 이상 스크롤하면 버튼 표시
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed left-4 z-30 md:bottom-6 md:left-6',
        'bottom-[calc(env(safe-area-inset-bottom)+6rem)]',
        isDetailPage ? 'hidden md:flex' : 'flex',
        'h-10 w-10 items-center justify-center',
        'rounded-full border border-stone-900/10 bg-white/92 shadow-[0_22px_45px_-30px_rgba(15,23,42,0.5)] backdrop-blur-xl',
        'transition-all duration-300 ease-in-out',
        'hover:-translate-y-0.5 hover:bg-white hover:shadow-xl',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        'md:h-12 md:w-12',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      aria-label="맨 위로 스크롤"
    >
      <ArrowUp className="h-5 w-5 text-primary md:h-6 md:w-6" />
    </button>
  );
}
