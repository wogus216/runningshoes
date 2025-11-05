'use client';

import { useMemo, useState } from "react";
import { BrandView } from "@/components/brand-view";
import { HierarchyView } from "@/components/hierarchy-view";
import { ViewToggle, type ViewMode } from "@/components/view-toggle";
import { getShoes } from "@/lib/data/shoes";

export default function HomePage() {
  const [view, setView] = useState<ViewMode>("hierarchy");
  const shoes = useMemo(() => getShoes(), []);
  const totalBrands = useMemo(() => new Set(shoes.map((shoe) => shoe.brand)).size, [shoes]);
  const totalCategories = useMemo(() => new Set(shoes.map((shoe) => shoe.category)).size, [shoes]);

  return (
    <div className="space-y-12 pb-16">
      <section className="text-center animate-fade-in-down">
        <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-[5rem]" style={{ letterSpacing: '-0.05em' }}>
          러닝화 계급도
          <span className="block bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#4facfe] bg-clip-text text-transparent">
            2025
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-700 sm:text-xl">
          {shoes.length}개 모델 · {totalBrands}개 브랜드 · {totalCategories}개 카테고리
        </p>
      </section>

      <ViewToggle view={view} onChange={setView} />

      {view === "hierarchy" ? <HierarchyView shoes={shoes} /> : <BrandView shoes={shoes} />}
    </div>
  );
}
