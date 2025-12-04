import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ComparisonRow = {
  category: string;
  beginnerRating: number;
  beginnerComment: string;
  beginnerShoeEval: string;
  advancedRating: number;
  advancedComment: string;
  advancedShoeEval: string;
};

const comparisonData: ComparisonRow[] = [
  {
    category: "착화감",
    beginnerRating: 5,
    beginnerComment: "최우선! 편안해야 잘 뛴다",
    beginnerShoeEval: "완벽",
    advancedRating: 4,
    advancedComment: "중요하지만 기록 위해 타협 가능",
    advancedShoeEval: "훈련용 적합",
  },
  {
    category: "쿠셔닝",
    beginnerRating: 5,
    beginnerComment: "무릎 보호 필수!",
    beginnerShoeEval: "9/10 우수",
    advancedRating: 3,
    advancedComment: "적정 수준, 반발력과 조화",
    advancedShoeEval: "과할 수 있음",
  },
  {
    category: "경량성",
    beginnerRating: 3,
    beginnerComment: "약간 무거워도 OK",
    beginnerShoeEval: "280g 적정",
    advancedRating: 5,
    advancedComment: "100g도 기록에 영향",
    advancedShoeEval: "훈련용만",
  },
  {
    category: "반발력",
    beginnerRating: 2,
    beginnerComment: "낮은 우선순위",
    beginnerShoeEval: "충분함",
    advancedRating: 5,
    advancedComment: "추진력이 기록 좌우",
    advancedShoeEval: "부족 (7/10)",
  },
  {
    category: "가성비",
    beginnerRating: 5,
    beginnerComment: "10만원대 중반 선호",
    beginnerShoeEval: "15.9만원 최적",
    advancedRating: 3,
    advancedComment: "성능 위해 고가 투자",
    advancedShoeEval: "훈련용 가성비",
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

export function ComparisonTable() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <span className="text-4xl">🔍</span>
        초보 vs 상급 러너 평가
      </h2>
      <p className="text-gray-600">러너 수준별 니즈 차이 (한국 소비자 연구 기반)</p>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#4facfe]">
              <TableHead className="text-white font-bold text-center">평가 항목</TableHead>
              <TableHead className="text-white font-bold text-center">초보 러너</TableHead>
              <TableHead className="text-white font-bold text-center">
                상급 러너 (마라톤)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row) => (
              <TableRow key={row.category}>
                <TableCell className="font-bold text-[#4facfe]">{row.category}</TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <StarRating rating={row.beginnerRating} />
                    <div className="text-sm text-gray-600">
                      &ldquo;{row.beginnerComment}&rdquo;
                      <br />
                      페가수스 41: <strong>{row.beginnerShoeEval}</strong>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <StarRating rating={row.advancedRating} />
                    <div className="text-sm text-gray-600">
                      &ldquo;{row.advancedComment}&rdquo;
                      <br />
                      페가수스 41: <strong>{row.advancedShoeEval}</strong>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
