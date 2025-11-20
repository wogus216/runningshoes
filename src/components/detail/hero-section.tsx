import type { Shoe } from "@/types/shoe";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  shoe: Shoe;
};

export function HeroSection({ shoe }: HeroSectionProps) {
  const getValueBadgeColor = (rating: number) => {
    if (rating >= 9) return "bg-[#10b98120] text-[#10b981]";
    if (rating >= 7) return "bg-[#3b82f620] text-[#3b82f6]";
    return "bg-[#f59e0b20] text-[#f59e0b]";
  };

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center animate-fade-in-up bg-white/95 rounded-3xl p-8 lg:p-12 shadow-lg">
      {/* Shoe Image */}
      <div className="text-center">
        <div className="text-[8rem] lg:text-[12rem] drop-shadow-2xl animate-float">
          🏃
        </div>
      </div>

      {/* Shoe Info */}
      <div className="space-y-6">
        <Badge className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-sm px-4 py-2 uppercase tracking-wider">
          {shoe.brand}
        </Badge>

        <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
          {shoe.name}
        </h1>

        <div className="flex flex-wrap gap-2">
          {shoe.tags?.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white border-2 border-[#667eea] text-[#667eea] font-bold px-4 py-2 hover:bg-gradient-to-r hover:from-[#667eea] hover:to-[#764ba2] hover:text-white transition-all duration-300"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
          {shoe.description}
        </p>

        <div className="flex items-center gap-3 flex-wrap">
          <div className="text-3xl lg:text-4xl font-black text-[#667eea]">
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
            예상 수명: {shoe.specs?.durability || 500}-600km | 코스트: 약 ₩
            {shoe.priceAnalysis.costPerKm}/km
          </div>
        )}

        <Button
          size="lg"
          className="bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          구매하기
        </Button>
      </div>
    </div>
  );
}
