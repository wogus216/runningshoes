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
        "grid gap-3 rounded-[32px] border border-[var(--accent-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,248,255,0.94))] p-3 backdrop-blur-2xl transition hover:border-sky-200 lg:grid-cols-[236px_minmax(0,1fr)] lg:gap-6 lg:p-6",
        "shadow-[0_30px_60px_-50px_rgba(8,18,38,0.22)]",
        "animate-fade-in-up",
        "scroll-mt-32",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-[28px] border border-sky-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(233,245,255,0.88))] p-4 text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] md:p-6 lg:sticky lg:top-24">
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#38bdf8_0%,#0ea5e9_60%,#f97316_100%)]" />
        <div className="absolute -top-14 -right-10 h-24 w-24 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-700">Category</p>
          <h3 className="text-lg md:text-2xl font-black leading-tight tracking-tight text-slate-900">{category}</h3>
          <p className="text-sm font-medium text-slate-600">
            {shoes.length}개 모델
          </p>
          <p className="hidden pt-2 text-sm leading-relaxed text-slate-500 sm:block">
            빠르게 훑고 바로 비교할 수 있게 상위 모델부터 정렬했습니다.
          </p>
        </div>
      </div>

      <div className="grid auto-rows-fr grid-cols-2 gap-2.5 md:gap-4 xl:grid-cols-3">
        {shoes.map((shoe, shoeIndex) => (
          <ShoeCard key={`${category}-${shoe.name}`} shoe={shoe} index={indexOffset + shoeIndex} onTagClick={onTagClick} />
        ))}
      </div>
    </section>
  );
});
