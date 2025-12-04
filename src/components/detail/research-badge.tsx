"use client";

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
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4facfe10] text-[#4facfe] font-semibold hover:bg-[#4facfe20] transition-colors"
        >
          <span>📚</span>
          <span>연구 기반 분석</span>
        </button>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium">
          <span>🔬</span>
          <span>{papersCount}개 논문 참고</span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b98110] text-[#10b981] font-semibold">
          <span>✅</span>
          <span>전문가 검토</span>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-3">
        본 리뷰는 스포츠의학 논문 및 생체역학 연구를 기반으로 작성되었습니다
      </p>
    </div>
  );
}
