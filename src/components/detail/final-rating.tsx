import type { ShoeSpecs, PriceAnalysis } from "@/types/shoe";

type FinalRatingProps = {
  specs: ShoeSpecs;
  priceAnalysis?: PriceAnalysis;
  shoeName: string;
  brand: string;
  category: string;
  durabilityKm?: { min: number; max: number };
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

export function FinalRating({ specs, priceAnalysis, shoeName, brand, category, durabilityKm }: FinalRatingProps) {
  // 카테고리에 따른 동적 설명 생성
  const getWeightDescription = () => {
    const weight = specs.weight;
    if (weight < 200) return `${weight}g - 초경량 레이싱화`;
    if (weight < 230) return `${weight}g - 경량 스피드화`;
    if (weight < 260) return `${weight}g - 가벼운 데일리화`;
    if (weight < 290) return `${weight}g - 표준 무게`;
    return `${weight}g - 안정성/쿠션 중시`;
  };

  const getDurabilityDescription = () => {
    if (durabilityKm) {
      return `${durabilityKm.min}-${durabilityKm.max}km 주행 가능`;
    }
    return "500-600km 주행 가능";
  };

  const getCategoryRecommendation = () => {
    switch (category) {
      case "레이싱":
        return "레이스 및 스피드 훈련에 최적!";
      case "쿠션화":
        return "장거리 러닝에 강력 추천!";
      case "안정화":
        return "과내전 러너의 필수템!";
      case "데일리":
        return "다목적 훈련용으로 추천!";
      default:
        return "초보 러너 첫 신발로 강력 추천!";
    }
  };

  const ratings = [
    { label: "쿠셔닝", score: specs.cushioning, description: specs.cushioning >= 9 ? "최상급 충격 흡수" : specs.cushioning >= 7 ? "우수한 충격 흡수" : "적절한 쿠셔닝" },
    { label: "반발력", score: specs.responsiveness, description: specs.responsiveness >= 9 ? "탁월한 에너지 리턴" : specs.responsiveness >= 7 ? "좋은 반발력" : "적당한 반발력" },
    { label: "안정성", score: specs.stability, description: specs.stability >= 9 ? "최고의 안정성" : specs.stability >= 7 ? "안정적인 지지력" : "기본 안정성" },
    { label: "경량성", score: specs.weight < 200 ? 10 : specs.weight < 230 ? 9 : specs.weight < 260 ? 8 : specs.weight < 290 ? 7 : 6, description: getWeightDescription() },
    { label: "내구성", score: durabilityKm && durabilityKm.max >= 600 ? 9 : 8, description: getDurabilityDescription() },
    { label: "착화감", score: 9, description: "편안한 착화감" },
    { label: "디자인", score: 8, description: "세련된 디자인" },
    { label: "부상 예방", score: specs.stability >= 8 ? 9 : 8, description: specs.stability >= 8 ? "부상 위험 크게 감소" : "기본적인 보호" },
    { label: "성능", score: Math.round((specs.cushioning + specs.responsiveness + specs.stability) / 3), description: `${category}용으로 최적화된 성능` },
    {
      label: "가성비",
      score: priceAnalysis?.valueRating || 8,
      description: `${((priceAnalysis?.msrp || 159000) / 10000).toFixed(1)}만원의 가치 (₩${priceAnalysis?.costPerKm || 280}/km)`,
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
        <div className="text-2xl font-bold mb-6">{getCategoryRecommendation()}</div>
        <p className="text-base lg:text-lg leading-relaxed opacity-95 max-w-3xl mx-auto">
          {brand} {shoeName}은(는) {category === "레이싱"
            ? <><strong>레이스 퍼포먼스</strong>를 위해 설계된 신발로, <strong>경량성과 반발력</strong>에서 뛰어난 성능을 보여줍니다.</>
            : category === "쿠션화"
            ? <><strong>장거리 러닝</strong>을 위한 신발로, <strong>쿠셔닝과 편안함</strong>에서 탁월한 성능을 제공합니다.</>
            : category === "안정화"
            ? <><strong>과내전 교정</strong>이 필요한 러너를 위한 신발로, <strong>안정성과 지지력</strong>에서 뛰어납니다.</>
            : <><strong>다목적 러닝</strong>에 적합한 신발로, <strong>균형 잡힌 성능</strong>을 제공합니다.</>
          }{" "}
          {priceAnalysis?.msrp && `${(priceAnalysis.msrp / 10000).toFixed(1)}만원`}이라는 가격에{" "}
          {durabilityKm ? `${durabilityKm.min}-${durabilityKm.max}km` : "500-600km"}의 내구성으로{" "}
          <strong>₩{priceAnalysis?.costPerKm || 280}/km의 코스트</strong>를 보입니다.
        </p>
      </div>
    </section>
  );
}
