import { Search } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ShoeSpecs, PriceAnalysis } from "@/types/shoe";

type ComparisonTableProps = {
  specs: ShoeSpecs;
  priceAnalysis?: PriceAnalysis;
  shoeName: string;
  category: string;
};

type ComparisonRow = {
  category: string;
  beginnerRating: number;
  beginnerComment: string;
  advancedRating: number;
  advancedComment: string;
};

// 스펙 기반 평가 문구 생성
function getBeginnerEval(category: string, specs: ShoeSpecs, priceAnalysis?: PriceAnalysis): string {
  switch (category) {
    case "착화감":
      if (specs.cushioning >= 8 && specs.stability >= 6) return "완벽";
      if (specs.cushioning >= 7) return "우수";
      return "양호";
    case "쿠셔닝":
      if (specs.cushioning >= 9) return `${specs.cushioning}/10 최상`;
      if (specs.cushioning >= 7) return `${specs.cushioning}/10 우수`;
      return `${specs.cushioning}/10 적정`;
    case "경량성":
      if (specs.weight < 230) return `${specs.weight}g 경량`;
      if (specs.weight < 280) return `${specs.weight}g 적정`;
      return `${specs.weight}g 다소 무거움`;
    case "반발력":
      if (specs.responsiveness >= 8) return "우수함";
      if (specs.responsiveness >= 6) return "충분함";
      return "보통";
    case "가성비":
      if (priceAnalysis?.valueRating && priceAnalysis.valueRating >= 8) return `${Math.round(priceAnalysis.msrp / 10000)}만원 최적`;
      if (priceAnalysis?.msrp) return `${Math.round(priceAnalysis.msrp / 10000)}만원 적정`;
      return "가격 확인 필요";
    default:
      return "양호";
  }
}

function getAdvancedEval(category: string, specs: ShoeSpecs): string {
  switch (category) {
    case "착화감":
      if (specs.responsiveness >= 8) return "레이스 적합";
      return "훈련용 적합";
    case "쿠셔닝":
      if (specs.cushioning >= 8) return "과할 수 있음";
      if (specs.cushioning >= 6) return "적정";
      return "부족할 수 있음";
    case "경량성":
      if (specs.weight < 230) return "레이싱 가능";
      if (specs.weight < 280) return "훈련용만";
      return "무거움";
    case "반발력":
      if (specs.responsiveness >= 8) return "우수";
      if (specs.responsiveness >= 6) return `적정 (${specs.responsiveness}/10)`;
      return `부족 (${specs.responsiveness}/10)`;
    case "가성비":
      if (specs.responsiveness >= 7 && specs.weight < 260) return "훈련용 가성비";
      return "데일리 전용";
    default:
      return "양호";
  }
}

// 카테고리별 기본 데이터
const baseComparisonData: Omit<ComparisonRow, 'beginnerEval' | 'advancedEval'>[] = [
  {
    category: "착화감",
    beginnerRating: 5,
    beginnerComment: "최우선! 편안해야 잘 뛴다",
    advancedRating: 4,
    advancedComment: "중요하지만 기록 위해 타협 가능",
  },
  {
    category: "쿠셔닝",
    beginnerRating: 5,
    beginnerComment: "무릎 보호 필수!",
    advancedRating: 3,
    advancedComment: "적정 수준, 반발력과 조화",
  },
  {
    category: "경량성",
    beginnerRating: 3,
    beginnerComment: "약간 무거워도 OK",
    advancedRating: 5,
    advancedComment: "100g도 기록에 영향",
  },
  {
    category: "반발력",
    beginnerRating: 2,
    beginnerComment: "낮은 우선순위",
    advancedRating: 5,
    advancedComment: "추진력이 기록 좌우",
  },
  {
    category: "가성비",
    beginnerRating: 5,
    beginnerComment: "10만원대 중반 선호",
    advancedRating: 3,
    advancedComment: "성능 위해 고가 투자",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="text-yellow-500 text-xl">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  );
}

export function ComparisonTable({ specs, priceAnalysis, shoeName, category }: ComparisonTableProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <Search className="h-8 w-8 text-stone-700" />
        초보 vs 상급 러너 평가
      </h2>
      <p className="text-gray-600">러너 수준별 니즈 차이 (한국 소비자 연구 기반)</p>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
        <Table>
          <TableHeader>
            <TableRow className="bg-stone-700">
              <TableHead className="text-white font-bold text-center">평가 항목</TableHead>
              <TableHead className="text-white font-bold text-center">초보 러너</TableHead>
              <TableHead className="text-white font-bold text-center">
                상급 러너 (마라톤)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {baseComparisonData.map((row) => (
              <TableRow key={row.category}>
                <TableCell className="font-bold text-stone-700">{row.category}</TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <StarRating rating={row.beginnerRating} />
                    <div className="text-sm text-gray-600">
                      &ldquo;{row.beginnerComment}&rdquo;
                      <br />
                      {shoeName}: <strong>{getBeginnerEval(row.category, specs, priceAnalysis)}</strong>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <StarRating rating={row.advancedRating} />
                    <div className="text-sm text-gray-600">
                      &ldquo;{row.advancedComment}&rdquo;
                      <br />
                      {shoeName}: <strong>{getAdvancedEval(row.category, specs)}</strong>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 카테고리별 추가 인사이트 */}
      <div className="bg-stone-50 border-l-4 border-stone-300 rounded-xl p-5">
        <div className="font-bold text-stone-700 mb-2 text-lg">
          {category === '레이싱' ? '레이싱화' :
           category === '쿠션화' ? '쿠셔닝화' :
           category === '안정화' ? '안정화' :
           category === '입문화' ? '입문자용' : '데일리'}로서의 평가
        </div>
        <p className="text-gray-700">
          {category === '레이싱' && `${shoeName}은(는) 레이싱화로서 상급 러너의 기록 향상에 초점이 맞춰져 있습니다.`}
          {category === '쿠션화' && `${shoeName}은(는) 쿠셔닝화로서 초보 러너의 관절 보호에 최적화되어 있습니다.`}
          {category === '안정화' && `${shoeName}은(는) 안정화로서 과내전 교정이 필요한 러너에게 적합합니다.`}
          {category === '입문화' && `${shoeName}은(는) 입문용으로 첫 러닝화를 찾는 분께 추천드립니다.`}
          {(category === '데일리' || !['레이싱', '쿠션화', '안정화', '입문화'].includes(category)) &&
            `${shoeName}은(는) 다목적 데일리 러닝화로 다양한 훈련에 활용 가능합니다.`}
        </p>
      </div>
    </section>
  );
}
