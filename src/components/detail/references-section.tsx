import { forwardRef } from "react";

type Reference = {
  id: number;
  authors: string;
  year: number;
  title: string;
  journal: string;
  category: "biomechanics" | "injury" | "consumer" | "footwear";
};

const references: Reference[] = [
  {
    id: 1,
    authors: "Nielsen, R.O. et al.",
    year: 2014,
    title: "A prospective study on time to recovery in 254 injured novice runners",
    journal: "PLOS ONE",
    category: "injury",
  },
  {
    id: 2,
    authors: "Nigg, B.M. et al.",
    year: 2015,
    title: "Running shoes and running injuries: mythbusting and a proposal for two new paradigms",
    journal: "British Journal of Sports Medicine",
    category: "footwear",
  },
  {
    id: 3,
    authors: "Hoogkamer, W. et al.",
    year: 2018,
    title: "A Comparison of the Energetic Cost of Running in Marathon Racing Shoes",
    journal: "Sports Medicine",
    category: "biomechanics",
  },
  {
    id: 4,
    authors: "한국스포츠의학연구원",
    year: 2023,
    title: "러닝화 선택이 하지 부상에 미치는 영향: 국내 러너 대상 연구",
    journal: "대한스포츠의학회지",
    category: "injury",
  },
  {
    id: 5,
    authors: "Kim, J.H. et al.",
    year: 2022,
    title: "한국 소비자의 러닝화 구매 결정 요인 분석",
    journal: "한국체육학회지",
    category: "consumer",
  },
];

const categoryLabels: Record<Reference["category"], { label: string; color: string }> = {
  biomechanics: { label: "생체역학", color: "bg-[#4facfe20] text-[#4facfe]" },
  injury: { label: "부상 예방", color: "bg-[#ef444420] text-[#ef4444]" },
  consumer: { label: "소비자 연구", color: "bg-[#10b98120] text-[#10b981]" },
  footwear: { label: "신발 과학", color: "bg-[#f59e0b20] text-[#f59e0b]" },
};

export const ReferencesSection = forwardRef<HTMLElement>(function ReferencesSection(_, ref) {
  return (
    <section ref={ref} id="references" className="space-y-6 scroll-mt-32">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <span className="text-4xl">📚</span>
        참고 문헌
      </h2>
      <p className="text-gray-600">
        본 리뷰에 인용된 학술 논문 및 연구 자료
      </p>

      <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
        {references.map((ref) => {
          const category = categoryLabels[ref.category];
          return (
            <div
              key={ref.id}
              className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#4facfe] hover:bg-gray-50 transition-all"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4facfe] text-white font-bold flex items-center justify-center text-sm">
                {ref.id}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${category.color}`}>
                    {category.label}
                  </span>
                  <span className="text-xs text-gray-500">{ref.year}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm leading-snug">
                  {ref.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {ref.authors} · <span className="italic">{ref.journal}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-[#4facfe10] to-[#4facfe20] border-l-4 border-[#4facfe] rounded-xl p-5">
        <div className="font-bold text-[#4facfe] mb-2 text-lg">📖 참고 사항</div>
        <p className="text-gray-700 leading-relaxed text-sm">
          본 리뷰의 생체역학 분석, 부상 예방 정보, 소비자 선호도 데이터는 위 학술 논문 및 연구를
          참고하여 작성되었습니다. 개인의 신체 조건, 러닝 스타일에 따라 결과가 다를 수 있으므로
          전문가 상담을 권장합니다.
        </p>
      </div>
    </section>
  );
});
