import { forwardRef } from "react";
import { ExternalLink, BookMarked, Database, AlertCircle } from "lucide-react";

type Reference = {
  id: number;
  authors: string;
  year: number;
  title: string;
  journal: string;
  category: "biomechanics" | "injury" | "consumer" | "footwear" | "data";
  url?: string;
};

const references: Reference[] = [
  {
    id: 1,
    authors: "RunRepeat Lab",
    year: 2024,
    title: "Running Shoe Lab Measurements - Stack Height, Weight, Drop",
    journal: "RunRepeat.com",
    category: "data",
    url: "https://runrepeat.com/ranking/rankings-of-running-shoes",
  },
  {
    id: 2,
    authors: "Doctors of Running",
    year: 2024,
    title: "Shoe Reviews and Biomechanical Analysis",
    journal: "Doctors of Running",
    category: "biomechanics",
    url: "https://www.doctorsofrunning.com/",
  },
  {
    id: 3,
    authors: "Nielsen, R.O. et al.",
    year: 2014,
    title: "A prospective study on time to recovery in 254 injured novice runners",
    journal: "PLOS ONE",
    category: "injury",
    url: "https://doi.org/10.1371/journal.pone.0099877",
  },
  {
    id: 4,
    authors: "Nigg, B.M. et al.",
    year: 2015,
    title: "Running shoes and running injuries: mythbusting and a proposal for two new paradigms",
    journal: "British Journal of Sports Medicine",
    category: "footwear",
    url: "https://doi.org/10.1136/bjsports-2015-095054",
  },
  {
    id: 5,
    authors: "Hoogkamer, W. et al.",
    year: 2018,
    title: "A Comparison of the Energetic Cost of Running in Marathon Racing Shoes",
    journal: "Sports Medicine",
    category: "biomechanics",
    url: "https://doi.org/10.1007/s40279-017-0811-2",
  },
];

const categoryLabels: Record<Reference["category"], { label: string; color: string }> = {
  biomechanics: { label: "생체역학", color: "bg-[#4facfe20] text-[#4facfe]" },
  injury: { label: "부상 예방", color: "bg-[#ef444420] text-[#ef4444]" },
  consumer: { label: "소비자 연구", color: "bg-[#10b98120] text-[#10b981]" },
  footwear: { label: "신발 과학", color: "bg-[#f59e0b20] text-[#f59e0b]" },
  data: { label: "데이터 출처", color: "bg-[#8b5cf620] text-[#8b5cf6]" },
};

export const ReferencesSection = forwardRef<HTMLElement>(function ReferencesSection(_, ref) {
  return (
    <section ref={ref} id="references" className="space-y-6 scroll-mt-32">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <BookMarked className="h-8 w-8 text-[#4facfe]" />
        참고 문헌 및 데이터 출처
      </h2>
      <p className="text-gray-600">
        본 리뷰에 사용된 측정 데이터 및 참고 자료
      </p>

      {/* 데이터 출처 안내 */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-200 flex items-center justify-center flex-shrink-0">
            <Database className="h-5 w-5 text-purple-700" />
          </div>
          <div>
            <p className="font-bold text-purple-800 mb-2">데이터 측정 기준</p>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• <strong>스택 높이, 드롭, 무게</strong>: RunRepeat Lab 실측 데이터 (2024년 기준)</li>
              <li>• <strong>쿠셔닝/반응성/안정성</strong>: 전문 리뷰어 평가 종합 (1-10점)</li>
              <li>• <strong>부상 예방 등급</strong>: 학술 연구 기반 평가 + 전문가 의견</li>
              <li>• <strong>마지막 업데이트</strong>: 2024년 12월</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
        {references.map((reference) => {
          const category = categoryLabels[reference.category];
          return (
            <div
              key={reference.id}
              className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#4facfe] hover:bg-gray-50 transition-all"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4facfe] text-white font-bold flex items-center justify-center text-sm">
                {reference.id}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${category.color}`}>
                    {category.label}
                  </span>
                  <span className="text-xs text-gray-500">{reference.year}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm leading-snug">
                  {reference.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {reference.authors} · <span className="italic">{reference.journal}</span>
                </p>
                {reference.url && (
                  <a
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#4facfe] hover:underline mt-2 min-h-[32px]"
                  >
                    <ExternalLink className="h-3 w-3" />
                    출처 확인
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-[#4facfe10] to-[#4facfe20] border-l-4 border-[#4facfe] rounded-xl p-5">
        <div className="font-bold text-[#4facfe] mb-2 text-lg flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          면책 조항
        </div>
        <p className="text-gray-700 leading-relaxed text-sm">
          본 리뷰의 생체역학 분석, 부상 예방 정보, 스펙 데이터는 위 출처를 참고하여 작성되었습니다.
          측정 조건에 따라 실제 값과 차이가 있을 수 있으며, 개인의 신체 조건, 러닝 스타일에 따라
          체감이 다를 수 있습니다. 부상 이력이 있는 경우 전문가 상담을 권장합니다.
        </p>
      </div>
    </section>
  );
});
