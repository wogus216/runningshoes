'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { isShoeSaved, toggleSavedShoe } from '@/lib/saved-shoes';

type SaveButtonProps = {
  slug: string;
  variant?: 'icon' | 'full';
  className?: string;
};

export function SaveButton({ slug, variant = 'icon', className = '' }: SaveButtonProps) {
  const [saved, setSaved] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setSaved(isShoeSaved(slug));
  }, [slug]);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const next = toggleSavedShoe(slug);
    setSaved(next);
  }

  if (!mounted) {
    // SSR mismatch 방지 — 마운트 전에는 빈 공간
    return variant === 'icon' ? (
      <span className={`inline-block h-9 w-9 ${className}`} />
    ) : null;
  }

  if (variant === 'full') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
          saved
            ? 'border-rose-200 bg-rose-50 text-rose-700'
            : 'border-border bg-white text-slate-700 hover:bg-surface'
        } ${className}`}
        aria-label={saved ? '찜 해제' : '찜하기'}
      >
        <Heart className={`h-4 w-4 ${saved ? 'fill-rose-500 text-rose-500' : ''}`} />
        {saved ? '찜함' : '찜하기'}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/90 text-slate-500 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 ${className}`}
      aria-label={saved ? '찜 해제' : '찜하기'}
    >
      <Heart className={`h-4 w-4 ${saved ? 'fill-rose-500 text-rose-500' : ''}`} />
    </button>
  );
}
