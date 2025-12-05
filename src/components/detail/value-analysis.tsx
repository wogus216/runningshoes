import type { PriceAnalysis } from "@/types/shoe";

type ValueAnalysisProps = {
  priceAnalysis: PriceAnalysis;
  shoeName: string;
  brand: string;
  category: string;
};

export function ValueAnalysis({ priceAnalysis, shoeName, brand, category }: ValueAnalysisProps) {
  // 가격대별 설명 생성
  const getPriceTierDescription = () => {
    const price = priceAnalysis.msrp;
    if (price < 130000) return "10만원대 초반";
    if (price < 160000) return "15만원대 중반";
    if (price < 200000) return "20만원 미만";
    if (price < 250000) return "20만원대";
    if (price < 300000) return "30만원 미만 프리미엄";
    return "30만원대 이상 최상급";
  };

  const getValueDescription = () => {
    const rating = priceAnalysis.valueRating;
    if (rating >= 9) return "최고의 가성비";
    if (rating >= 8) return "뛰어남";
    if (rating >= 7) return "양호";
    if (rating >= 6) return "적정";
    return "프리미엄";
  };
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <span className="text-4xl">💎</span>
        가격 분석 & 가성비
      </h2>

      {/* Value Highlight */}
      <div className="bg-gradient-to-br from-[#10b98110] to-[#10b98120] border-l-4 border-[#10b981] rounded-2xl p-6 lg:p-8">
        <h3 className="text-xl font-black text-[#10b981] mb-4">
          ✅ 가성비 평가: {priceAnalysis.valueRating}/10 ({getValueDescription()})
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong>{priceAnalysis.msrp.toLocaleString()}원</strong>은{" "}
          <strong>&ldquo;{getPriceTierDescription()}&rdquo;</strong> 가격대입니다.{" "}
          {category === "레이싱"
            ? "레이싱화 중에서는 합리적인 가격으로 평가됩니다."
            : category === "쿠션화"
            ? "쿠셔닝화 중에서 가격 대비 성능이 뛰어납니다."
            : category === "안정화"
            ? "안정화 카테고리에서 가격 대비 좋은 선택입니다."
            : "데일리 러닝화로서 적절한 가격대입니다."
          }
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <strong className="text-gray-900 block mb-3">가격 대비 장점:</strong>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#10b981] mt-1">✓</span>
                <span>나이키 브랜드 신뢰도</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10b981] mt-1">✓</span>
                <span>검증된 올라운더 성능</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10b981] mt-1">✓</span>
                <span>500-600km 내구성</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10b981] mt-1">✓</span>
                <span>다용도 사용 가능</span>
              </li>
            </ul>
          </div>

          <div>
            <strong className="text-gray-900 block mb-3">비슷한 가격대:</strong>
            <ul className="space-y-2 text-gray-600">
              {priceAnalysis.alternatives.map((alt) => (
                <li key={alt} className="flex items-start gap-2">
                  <span className="text-[#4facfe] mt-1">•</span>
                  <span>{alt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Price Tiers */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-[#4facfe]">가격대별 비교</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 border-2 border-gray-100">
            <strong className="text-gray-900">더 저렴한 대안 (10-13만원):</strong>
            <p className="text-gray-600 mt-2">
              써코니 라이드 (12만원), 미즈노 웨이브 라이더 이전 모델 (10만원대) - 성능은
              떨어지지만 가성비 중시하면 고려 가능
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#4facfe10] to-[#4facfe20] rounded-xl p-5 border-2 border-[#4facfe]">
            <strong className="text-[#4facfe] text-lg">
              현재 가격대 ({getPriceTierDescription()}): ✅ {brand} {shoeName} 여기!
            </strong>
            <p className="text-gray-700 mt-2">
              {priceAnalysis.alternatives.slice(0, 2).join(", ")} 등과 비교하여 좋은 선택입니다.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border-2 border-gray-100">
            <strong className="text-gray-900">더 비싼 옵션 (20-25만원+):</strong>
            <p className="text-gray-600 mt-2">
              호카 본디 (22만원), 나이키 인빈서블 (24만원) - 쿠셔닝은 더 좋지만 가격 대비
              효율은 페가수스가 우위
            </p>
          </div>
        </div>
      </div>

      {/* Purchase Tips */}
      <div className="bg-gradient-to-br from-[#4facfe10] to-[#4facfe20] border-l-4 border-[#4facfe] rounded-xl p-5">
        <div className="font-bold text-[#4facfe] mb-2 text-lg">💰 구매 팁 (한국 시장)</div>
        <div className="text-gray-700 space-y-2">
          <p>
            <strong>세일 시기:</strong> ABC마트 연말/설날 세일, 아울렛에서 12-13만원대 구매
            가능
          </p>
          <p>
            <strong>온라인 구매:</strong> 63%가 온라인 구매 - 네이버 쇼핑, 쿠팡에서 가격 비교
            필수
          </p>
          <p>
            <strong>착화 권장:</strong> 발볼 넓으면 매장에서 먼저 신어보기 (교환 번거로움
            방지)
          </p>
        </div>
      </div>
    </section>
  );
}
