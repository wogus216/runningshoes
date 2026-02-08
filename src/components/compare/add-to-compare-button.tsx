'use client';

import { memo } from 'react';
import { Scale, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCompare } from '@/contexts/compare-context';
import type { Shoe } from '@/types/shoe';

type AddToCompareButtonProps = {
  shoe: Shoe;
  variant?: 'icon' | 'button';
  className?: string;
};

export const AddToCompareButton = memo(function AddToCompareButton({ shoe, variant = 'button', className }: AddToCompareButtonProps) {
  const { addToCompare, removeFromCompare, isInCompare, canAddMore } = useCompare();
  const shoeId = shoe.id || shoe.slug || '';
  const isAdded = isInCompare(shoeId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isAdded) {
      removeFromCompare(shoeId);
    } else if (canAddMore) {
      addToCompare(shoe);
    }
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleClick}
        disabled={!isAdded && !canAddMore}
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full transition-all",
          isAdded
            ? "bg-[emerald-600] text-white"
            : canAddMore
            ? "bg-white/50 text-slate-600 hover:bg-[emerald-600]/20 hover:text-[emerald-600]"
            : "bg-slate-100 text-slate-300 cursor-not-allowed",
          className
        )}
        title={isAdded ? "비교함에서 제거" : canAddMore ? "비교함에 추가" : "비교함이 가득 찼습니다"}
      >
        {isAdded ? <Check className="h-4 w-4" /> : <Scale className="h-4 w-4" />}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={!isAdded && !canAddMore}
      className={cn(
        "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all",
        isAdded
          ? "bg-[emerald-600] text-white"
          : canAddMore
          ? "border border-[emerald-600]/30 bg-[emerald-600]/10 text-[emerald-600] hover:bg-[emerald-600]/20"
          : "border border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed",
        className
      )}
    >
      {isAdded ? <Check className="h-4 w-4" /> : <Scale className="h-4 w-4" />}
      {isAdded ? "비교함에 추가됨" : canAddMore ? "비교하기" : "비교함 가득 참"}
    </button>
  );
});
