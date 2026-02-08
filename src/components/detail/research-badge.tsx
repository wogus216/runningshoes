"use client";

import { BookOpen, Microscope, BadgeCheck } from 'lucide-react';

type ResearchBadgeProps = {
  papersCount?: number;
};

export function ResearchBadge({ papersCount = 5 }: ResearchBadgeProps) {
  const scrollToReferences = () => {
    const element = document.getElementById("references");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white/95 rounded-2xl p-4 shadow-md border border-gray-100">
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        <button
          type="button"
          onClick={scrollToReferences}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[stone-60010] text-[stone-600] font-semibold hover:bg-[stone-60020] transition-colors"
        >
          <BookOpen className="h-4 w-4" />
          <span>연구 기반 분석</span>
        </button>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium">
          <Microscope className="h-4 w-4" />
          <span>{papersCount}개 논문 참고</span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b98110] text-[#10b981] font-semibold">
          <BadgeCheck className="h-4 w-4" />
          <span>전문가 검토</span>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-3">
        본 리뷰는 스포츠의학 논문 및 생체역학 연구를 기반으로 작성되었습니다
      </p>
    </div>
  );
}
