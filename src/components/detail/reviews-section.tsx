import { MessageSquareText } from 'lucide-react';
import type { Review } from "@/types/shoe";

type ReviewsSectionProps = {
  reviews: Review[];
};

function ReviewCard({ review }: { review: Review }) {
  const userTypeColors: Record<string, string> = {
    "입문 러너": "bg-stone-500",
    "중급 러너": "bg-stone-600",
    "상급 러너": "bg-stone-700",
    "평발 러너": "bg-amber-500",
    "가성비 중시": "bg-emerald-600",
    "Fun Runner": "bg-stone-500",
    "에디터 분석": "bg-stone-800",
  };

  // 전문 리뷰어는 100점 만점, 일반 리뷰어는 5점 만점
  const isExpertReview = review.userType === '에디터 분석';
  const displayRating = isExpertReview
    ? Math.round(review.rating / 20) // 100점 -> 5점 변환
    : Math.min(5, Math.max(0, Math.round(review.rating))); // 안전하게 0-5 범위로

  return (
    <div className="bg-stone-50 rounded-2xl p-6 border-l-4 border-stone-300">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="text-yellow-500 text-xl">
            {"★".repeat(displayRating)}
            {"☆".repeat(5 - displayRating)}
          </div>
          {isExpertReview && (
            <span className="text-sm font-bold text-[#e11d48]">{review.rating}/100</span>
          )}
        </div>
        <span
          className={`${userTypeColors[review.userType] || "bg-gray-500"} text-white px-3 py-1.5 rounded-lg text-sm font-semibold`}
        >
          {review.userType}
        </span>
      </div>
      <p className="text-gray-700 leading-relaxed text-base">{review.text}</p>
    </div>
  );
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <MessageSquareText className="h-8 w-8 text-stone-700" />
        러너 유형별 분석
      </h2>
      <p className="text-gray-600">
        에디터 분석과 러너 유형별 사용 시나리오를 정리했습니다
      </p>

      <div className="grid gap-5">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
}
