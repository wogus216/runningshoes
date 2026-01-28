'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

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
        'fixed bottom-20 left-4 z-40 md:bottom-6 md:left-6',
        'flex h-10 w-10 items-center justify-center',
        'rounded-full bg-white border border-border shadow-lg',
        'transition-all duration-300 ease-in-out',
        'hover:bg-surface hover:scale-110 hover:shadow-xl',
        'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
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
