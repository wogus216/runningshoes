import type { Review } from "@/types/shoe";

type ReviewsSectionProps = {
  reviews: Review[];
};

function ReviewCard({ review }: { review: Review }) {
  const userTypeColors: Record<string, string> = {
    "입문 러너": "bg-[#4facfe]",
    "중급 러너": "bg-[#2d9cdb]",
    "상급 러너": "bg-[#1a73e8]",
    "평발 러너": "bg-[#f59e0b]",
    "가성비 중시": "bg-[#10b981]",
    "Fun Runner": "bg-[#4facfe]",
  };

  return (
    <div className="bg-gradient-to-br from-[#4facfe05] to-[#4facfe10] rounded-2xl p-6 border-l-4 border-[#4facfe]">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
        <div className="text-yellow-500 text-xl">
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
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
        <span className="text-4xl">💬</span>
        실사용자 리뷰
      </h2>
      <p className="text-gray-600">
        커뮤니티에서 가장 많이 언급된 실제 사용자 의견 (63% 온라인 구매)
      </p>

      <div className="grid gap-5">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
}
