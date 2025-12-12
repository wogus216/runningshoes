import { Repeat2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import type { SimilarShoeInfo } from '@/lib/data/shoes';

type SimilarShoesProps = {
  similarShoesData: SimilarShoeInfo[];
  currentCategory?: string;
};

export function SimilarShoes({ similarShoesData, currentCategory }: SimilarShoesProps) {
  if (similarShoesData.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <Repeat2 className="h-8 w-8 text-[#4facfe]" />
        비슷한 신발 추천
      </h2>
      <p className="text-gray-600">
        {currentCategory ? `같은 카테고리(${currentCategory}) 대안` : '비슷한 성능의 대안 신발'}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {similarShoesData.map((shoe) => {
          // 동적으로 추천 이유 생성
          const getRecommendReason = () => {
            if (!shoe.specs) return '비슷한 성능';
            const reasons = [];
            if (shoe.specs.cushioning >= 8) reasons.push('높은 쿠셔닝');
            if (shoe.specs.weight < 250) reasons.push('경량');
            if (shoe.specs.stability >= 8) reasons.push('안정성 우수');
            if (shoe.priceAnalysis?.valueRating && shoe.priceAnalysis.valueRating >= 8) reasons.push('가성비 좋음');
            return reasons.length > 0 ? reasons.slice(0, 2).join(', ') : '균형 잡힌 성능';
          };

          return (
            <Link
              href={`/shoes/${shoe.slug}`}
              key={shoe.slug}
              className="bg-white rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-3 block"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#4facfe10] rounded-2xl flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-[#4facfe]" />
              </div>
              <div className="text-sm font-semibold text-[#4facfe] mb-2">{shoe.brand}</div>
              <div className="font-bold text-gray-900 mb-2">{shoe.name}</div>
              <div className="text-yellow-500 text-sm mb-2">
                {"★".repeat(Math.round(shoe.rating))}
                {"☆".repeat(5 - Math.round(shoe.rating))}
              </div>
              <p className="text-xs text-gray-600">{getRecommendReason()}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
