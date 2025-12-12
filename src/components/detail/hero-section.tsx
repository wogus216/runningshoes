import { ShoppingBag } from 'lucide-react';
import type { Shoe } from "@/types/shoe";
import { Badge } from "@/components/ui/badge";

type HeroSectionProps = {
  shoe: Shoe;
};

export function HeroSection({ shoe }: HeroSectionProps) {
  const getValueBadgeColor = (rating: number) => {
    if (rating >= 9) return "bg-[#10b98120] text-[#10b981]";
    if (rating >= 7) return "bg-[#3b82f620] text-[#3b82f6]";
    return "bg-[#f59e0b20] text-[#f59e0b]";
  };

  // 내구성 범위 계산
  const getDurabilityRange = () => {
    const durability = shoe.specs?.durability || 500;
    const min = Math.max(durability - 100, 300);
    const max = durability;
    return `${min}-${max}km`;
  };

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center animate-fade-in-up bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
      {/* Shoe Image */}
      <div className="text-center">
        <div className="w-48 h-48 lg:w-64 lg:h-64 mx-auto bg-gradient-to-br from-[#4facfe10] to-[#4facfe30] rounded-full flex items-center justify-center drop-shadow-2xl animate-float">
          <ShoppingBag className="w-24 h-24 lg:w-32 lg:h-32 text-[#4facfe]" />
        </div>
      </div>

      {/* Shoe Info */}
      <div className="space-y-6">
        <Badge className="bg-[#4facfe] text-white font-bold text-sm px-4 py-2 uppercase tracking-wider">
          {shoe.brand}
        </Badge>

        <h1 className="text-4xl lg:text-5xl font-black text-[#4facfe]">
          {shoe.name}
        </h1>

        <div className="flex flex-wrap gap-2">
          {shoe.tags?.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white border-2 border-[#4facfe] text-[#4facfe] font-bold px-4 py-2 hover:bg-[#4facfe] hover:text-white transition-all duration-300"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
          {shoe.description}
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="text-3xl lg:text-4xl font-black text-[#4facfe]">
            ₩{shoe.price?.toLocaleString()}
          </div>
          {shoe.priceAnalysis && (
            <Badge
              className={`font-bold px-4 py-2 text-sm ${getValueBadgeColor(shoe.priceAnalysis.valueRating)}`}
            >
              가성비 우수
            </Badge>
          )}
        </div>

        {shoe.priceAnalysis && (
          <div className="text-sm text-gray-500">
            예상 수명: {getDurabilityRange()} | 코스트: 약 ₩
            {shoe.priceAnalysis.costPerKm}/km
          </div>
        )}

{/* 구글 애드센스용 주석 처리
        <Button
          size="lg"
          className="bg-[#4facfe] hover:bg-[#3d9be8] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          구매하기
        </Button>
*/}
      </div>
    </div>
  );
}
