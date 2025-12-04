import type { ShoeSpecs, PriceAnalysis } from "@/types/shoe";

type FinalRatingProps = {
  specs: ShoeSpecs;
  priceAnalysis?: PriceAnalysis;
};

type RatingCardProps = {
  label: string;
  score: number;
  description: string;
  highlight?: boolean;
};

function RatingCard({ label, score, description, highlight = false }: RatingCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 border-2 border-gray-100 hover:border-[#4facfe] transition-colors">
      <div className="text-sm text-gray-400 mb-2">{label}</div>
      <div className={`text-4xl font-black mb-2 ${highlight ? "text-[#10b981]" : "text-[#4facfe]"}`}>
        {score}/10
      </div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

export function FinalRating({ specs, priceAnalysis }: FinalRatingProps) {
  const ratings = [
    { label: "쿠셔닝", score: specs.cushioning, description: "ReactX 폼의 우수한 충격 흡수" },
    { label: "반발력", score: specs.responsiveness, description: "플레이트 없지만 적당한 에너지 리턴" },
    { label: "안정성", score: specs.stability, description: "단단한 힐 카운터, 적절한 지지력" },
    { label: "경량성", score: 7, description: "280g - 초보에겐 적정, 상급자엔 무거움" },
    { label: "내구성", score: 9, description: "500-600km 주행 가능, 와플 아웃솔" },
    { label: "착화감", score: 10, description: "완벽한 편안함 (76% 최우선 요소)" },
    { label: "디자인", score: 8, description: "클래식하고 다용도 착용 가능" },
    { label: "부상 예방", score: 9, description: "초보자 부상 위험 크게 감소" },
    { label: "성능", score: 8, description: "데일리용으로 균형 잡힌 성능" },
    {
      label: "가성비",
      score: priceAnalysis?.valueRating || 9,
      description: `${(priceAnalysis?.msrp || 159000) / 1000}만원의 뛰어난 가치 (₩${priceAnalysis?.costPerKm || 280}/km)`,
      highlight: true,
    },
  ];

  const overallScore = (
    ratings.reduce((sum, r) => sum + r.score, 0) / ratings.length
  ).toFixed(1);

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <span className="text-4xl">📝</span>
        종합 평가
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {ratings.map((rating) => (
          <RatingCard key={rating.label} {...rating} />
        ))}
      </div>

      {/* Overall Verdict */}
      <div className="bg-[#4facfe] text-white rounded-3xl p-8 lg:p-12 text-center">
        <div className="text-xl opacity-95 mb-4">종합 평점</div>
        <div className="text-6xl lg:text-7xl font-black mb-4">{overallScore}/10</div>
        <div className="text-2xl font-bold mb-6">초보 러너 첫 신발로 강력 추천!</div>
        <p className="text-base lg:text-lg leading-relaxed opacity-95 max-w-3xl mx-auto">
          나이키 페가수스 41은 <strong>&ldquo;검증된 올라운더&rdquo;</strong>라는 명성에 걸맞은 성능을
          보여줍니다. 특히 <strong>착화감, 쿠셔닝, 가성비</strong>에서 초보 러너들이 가장
          중요하게 여기는 요소를 완벽하게 충족합니다.{" "}
          {priceAnalysis?.msrp && `${(priceAnalysis.msrp / 10000).toFixed(1)}만원`}이라는 가격은
          한국 소비자가 가장 선호하는 가격대이며, 500-600km의 내구성으로{" "}
          <strong>₩{priceAnalysis?.costPerKm || 280}/km의 우수한 코스트</strong>를 보입니다.
          <br />
          <br />
          <strong>단, 발볼이 넓은 한국인</strong>은 매장 착화를 권장하며, 마라톤 기록 단축을
          원하는 상급자에게는 훈련용으로만 추천합니다.
        </p>
      </div>
    </section>
  );
}
