'use client';

import { useMemo, useState } from "react";
import { ArrowRight, Sparkles, Shuffle } from "lucide-react";
import { BrandView } from "@/components/brand-view";
import { HierarchyView } from "@/components/hierarchy-view";
import { ViewToggle, type ViewMode } from "@/components/view-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getShoes } from "@/lib/data/shoes";

export default function HomePage() {
  const [view, setView] = useState<ViewMode>("hierarchy");
  const shoes = useMemo(() => getShoes(), []);
  const totalBrands = useMemo(() => new Set(shoes.map((shoe) => shoe.brand)).size, [shoes]);
  const totalCategories = useMemo(() => new Set(shoes.map((shoe) => shoe.category)).size, [shoes]);
  const eliteCount = useMemo(() => shoes.filter((shoe) => shoe.rating >= 5).length, [shoes]);

  return (
    <div className="space-y-12 pb-16 lg:space-y-16">
      <section className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/10 px-6 py-12 text-slate-900 shadow-[0_45px_90px_-65px_rgba(15,23,42,0.75)] backdrop-blur-2xl sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-14 lg:py-16">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#f093fb]/40 via-[#4facfe]/35 to-transparent blur-3xl lg:-left-10 lg:translate-x-0" />
        <div className="flex-1 space-y-6">
          <Badge className="bg-white/30 text-slate-700" variant="outline">
            <Sparkles className="mr-2 h-4 w-4 text-[#667eea]" />
            2025 러닝화 리포트
          </Badge>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl xl:text-[4.25rem] xl:leading-[1.05]">
            계급도 한 장으로 끝나는
            <span className="block bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#4facfe] bg-clip-text text-transparent">
              러닝화 판의 모든 것
            </span>
          </h1>
          <p className="max-w-xl text-base text-slate-700 sm:text-lg">
            생동감 있는 그라데이션과 글래스모피즘 UI로 정리한 2025 러닝화 계급도. 카테고리 티어와 브랜드 라인업을 토글 한 번으로 비교해 보세요.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group rounded-full bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#4facfe] px-6 py-6 text-sm font-semibold uppercase tracking-[0.25em] shadow-[0_24px_48px_-32px_rgba(102,126,234,0.75)] transition hover:shadow-[0_28px_60px_-30px_rgba(118,75,162,0.7)]"
              onClick={() => setView("hierarchy")}
            >
              계급도 보기
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-white/30 px-6 py-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-700 hover:bg-white/40"
              onClick={() => setView("brand")}
            >
              브랜드별 탐색
            </Button>
          </div>

          <dl className="grid gap-4 sm:grid-cols-3">
            <HeroStat label="브랜드" value={totalBrands} />
            <HeroStat label="카테고리" value={totalCategories} />
            <HeroStat label="랭크 인 모델" value={shoes.length} detail={`엘리트 ${eliteCount}개`} />
          </dl>
        </div>

        <div className="relative mt-10 w-full max-w-sm shrink-0 self-stretch rounded-[32px] border border-white/20 bg-white/20 p-6 backdrop-blur-2xl lg:mt-0 lg:w-auto">
          <div className="absolute -top-12 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-[#667eea]/40 via-[#4facfe]/30 to-transparent blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">Quick Picks</p>
          <ul className="mt-4 space-y-3">
            {shoes
              .filter((shoe) => shoe.rating >= 5)
              .slice(0, 4)
              .map((shoe) => (
                <li
                  key={`${shoe.brand}-${shoe.name}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/20 bg-white/30 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-white/40 hover:bg-white/40"
                >
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.3em] text-slate-500">{shoe.brand}</span>
                    {shoe.name}
                  </div>
                  <span className="flex items-center gap-1 text-xs font-bold text-[#ffd700]">
                    <Sparkles className="h-3.5 w-3.5" />
                    {shoe.rating.toFixed(1)}
                  </span>
                </li>
              ))}
          </ul>

          <div className="mt-6 flex items-center justify-between rounded-2xl border border-dashed border-white/30 bg-white/10 px-4 py-3 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-2">
              <Shuffle className="h-4 w-4 text-[#4facfe]" />
              Toggle View
            </span>
            <span>{view === "hierarchy" ? "계급도" : "브랜드별"}</span>
          </div>
        </div>
      </section>

      <ViewToggle view={view} onChange={setView} />

      {view === "hierarchy" ? <HierarchyView shoes={shoes} /> : <BrandView shoes={shoes} />}
    </div>
  );
}

type HeroStatProps = {
  label: string;
  value: number;
  detail?: string;
};

function HeroStat({ label, value, detail }: HeroStatProps) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/25 px-4 py-5 text-slate-900 shadow-[0_30px_60px_-55px_rgba(15,23,42,0.5)] backdrop-blur-2xl">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">{label}</dt>
      <dd className="mt-2 text-3xl font-black tracking-tight">{value.toLocaleString("ko-KR")}</dd>
      {detail ? <p className="mt-1 text-xs font-semibold text-slate-600">{detail}</p> : null}
    </div>
  );
}
