import { memo } from "react";
import { cn } from "@/lib/utils";
import type { Shoe } from "@/types/shoe";
import { ShoeCard } from "@/components/shoe-card";

type CategorySectionProps = {
  category: string;
  shoes: Shoe[];
  indexOffset?: number;
  className?: string;
  onTagClick?: (tag: string) => void;
};

export const CategorySection = memo(function CategorySection({
  category,
  shoes,
  indexOffset = 0,
  className,
  onTagClick,
}: CategorySectionProps) {
  const sectionId = `category-${category.replace(/\s+/g, '-')}`;

  return (
    <section
      id={sectionId}
      className={cn(
        "grid gap-4 rounded-[30px] border border-white/20 bg-white/10 p-4 backdrop-blur-2xl transition hover:border-white/40 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-6 lg:p-6",
        "shadow-[0_30px_60px_-50px_rgba(15,23,42,0.45)]",
        "animate-fade-in-up",
        "scroll-mt-32",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/20 p-4 md:p-6 text-slate-900 shadow-inner backdrop-blur-2xl lg:sticky lg:top-24">
        <div className="absolute -top-14 -right-10 h-24 w-24 rounded-full bg-gradient-to-br from-[#f093fb]/40 to-transparent blur-3xl" />
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">Category</p>
          <h3 className="text-lg md:text-2xl font-black leading-tight tracking-tight text-slate-900">{category}</h3>
          <p className="text-sm font-medium text-slate-600">
            {shoes.length}개 모델
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
        {shoes.map((shoe, shoeIndex) => (
          <ShoeCard key={`${category}-${shoe.name}`} shoe={shoe} index={indexOffset + shoeIndex} onTagClick={onTagClick} />
        ))}
      </div>
    </section>
  );
});
