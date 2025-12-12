import { Gem, Check, BadgeDollarSign, ShoppingCart } from 'lucide-react';
import type { PriceAnalysis } from "@/types/shoe";
import type { ShoeSpecs } from "@/types/shoe";

type ValueAnalysisProps = {
  priceAnalysis: PriceAnalysis;
  shoeName: string;
  brand: string;
  category: string;
  specs?: ShoeSpecs;
};

// 브랜드별 기본 장점 생성
function getBrandAdvantages(brand: string): string[] {
  const brandMap: Record<string, string[]> = {
    'Nike': ['나이키 브랜드 신뢰도', '글로벌 검증된 기술력', '다양한 사이즈 옵션'],
    'Adidas': ['아디다스 브랜드 파워', 'Boost/Lightstrike 기술력', '세련된 디자인'],
    'ASICS': ['아식스 러닝 전문 기술', '일본 품질 신뢰도', '발 보호 최적화'],
    'Brooks': ['브룩스 러닝 전문성', 'DNA 쿠셔닝 기술', '편안한 핏'],
    'Saucony': ['써코니 가성비', 'PWRRUN 기술', '균형 잡힌 성능'],
    'HOKA': ['호카 맥시멀 쿠션', '독보적 충격흡수', '장거리 특화'],
    'New Balance': ['뉴발란스 안정성', 'Fresh Foam 기술', '폭넓은 사이즈'],
    'On': ['온러닝 CloudTec 기술', '스위스 디자인', '가벼운 착화감'],
    'Mizuno': ['미즈노 안정성', 'Wave 플레이트 기술', '내구성'],
    'Puma': ['푸마 가성비', 'NITRO 폼 기술', '트렌디한 디자인'],
  };
  return brandMap[brand] || [`${brand} 브랜드 신뢰도`, '검증된 성능', '합리적 가격'];
}

// 카테고리별 장점 생성
function getCategoryAdvantages(category: string): string[] {
  const categoryMap: Record<string, string[]> = {
    '레이싱': ['레이스 최적화 설계', '경량 구조', '높은 에너지 리턴'],
    '쿠션화': ['뛰어난 충격흡수', '장거리 편안함', '관절 보호'],
    '안정화': ['과내전 교정', '안정적인 지지력', '부상 예방'],
    '데일리': ['다목적 활용', '균형잡힌 성능', '일상 착용 가능'],
    '입문화': ['초보자 친화적', '편안한 착화감', '합리적 가격'],
  };
  return categoryMap[category] || ['다목적 활용 가능'];
}

export function ValueAnalysis({ priceAnalysis, shoeName, brand, category, specs }: ValueAnalysisProps) {
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

  // 가격 대비 장점 생성 (데이터가 있으면 사용, 없으면 자동 생성)
  const getValueAdvantages = (): string[] => {
    if (priceAnalysis.valueAdvantages && priceAnalysis.valueAdvantages.length > 0) {
      return priceAnalysis.valueAdvantages;
    }

    const advantages: string[] = [];
    const brandAdvs = getBrandAdvantages(brand);
    const catAdvs = getCategoryAdvantages(category);

    // 브랜드 장점 1개
    if (brandAdvs[0]) advantages.push(brandAdvs[0]);

    // 카테고리 장점 1개
    if (catAdvs[0]) advantages.push(catAdvs[0]);

    // 스펙 기반 장점
    if (specs) {
      if (specs.durability >= 600) {
        advantages.push(`${specs.durability}km 높은 내구성`);
      } else if (specs.durability >= 400) {
        advantages.push(`${specs.durability}km 적정 내구성`);
      }
    }

    // 가성비 기반 장점
    if (priceAnalysis.valueRating >= 8) {
      advantages.push('가격 대비 뛰어난 성능');
    }

    return advantages.length > 0 ? advantages : ['균형잡힌 성능', '다용도 활용'];
  };
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <Gem className="h-8 w-8 text-[#4facfe]" />
        가격 분석 & 가성비
      </h2>

      {/* Value Highlight */}
      <div className="bg-gradient-to-br from-[#10b98110] to-[#10b98120] border-l-4 border-[#10b981] rounded-2xl p-6 lg:p-8">
        <h3 className="text-xl font-black text-[#10b981] mb-4 flex items-center gap-2">
          <BadgeDollarSign className="h-5 w-5" />
          가성비 평가: {priceAnalysis.valueRating}/10 ({getValueDescription()})
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
              {getValueAdvantages().map((advantage, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                  <span>{advantage}</span>
                </li>
              ))}
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

      {/* 비슷한 가격대 비교 */}
      {priceAnalysis.alternatives.length > 0 && (
        <div className="bg-gradient-to-br from-[#4facfe10] to-[#4facfe20] rounded-xl p-5 border-2 border-[#4facfe]">
          <strong className="text-[#4facfe] text-lg flex items-center gap-2">
            <Check className="h-5 w-5" />
            현재 가격대 ({getPriceTierDescription()}): {brand} {shoeName}
          </strong>
          <p className="text-gray-700 mt-2">
            비슷한 가격대의 {priceAnalysis.alternatives.slice(0, 3).join(", ")} 등과 비교하여 선택하세요.
          </p>
        </div>
      )}

      {/* Purchase Tips */}
      <div className="bg-gradient-to-br from-[#4facfe10] to-[#4facfe20] border-l-4 border-[#4facfe] rounded-xl p-5">
        <div className="font-bold text-[#4facfe] mb-2 text-lg flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          구매 팁
        </div>
        <div className="text-gray-700 space-y-2">
          <p>
            <strong>세일 시기:</strong> 연말/설날 시즌, 아울렛에서 할인가 구매 가능
          </p>
          <p>
            <strong>온라인 구매:</strong> 네이버 쇼핑, 쿠팡에서 가격 비교 필수
          </p>
          <p>
            <strong>착화 권장:</strong> 가능하면 매장에서 먼저 신어보기 (사이즈 확인)
          </p>
        </div>
      </div>
    </section>
  );
}
