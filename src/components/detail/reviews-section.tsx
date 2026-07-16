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

  // 출처 있는 리뷰(에디터 분석·외부 리뷰 인용)가 아니면 데이터 기반 가상 시나리오 —
  // 실제 구매 후기로 오인되지 않도록 카드마다 공시한다
  const isSourced = /에디터|분석|리뷰어|Believe|Shihuo|RunRepeat|Doctors|Road Trail/i.test(review.userType);

  return (
    <div className="rounded-[28px] border border-stone-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,248,246,0.92))] p-5 shadow-[0_16px_34px_-32px_rgba(15,23,42,0.45)]">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
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
          className={`${userTypeColors[review.userType] || "bg-gray-500"} rounded-full px-3 py-1.5 text-sm font-semibold text-white`}
        >
          {review.userType}
        </span>
      </div>
      <p className="text-sm leading-7 text-slate-700 md:text-base">{review.text}</p>
      {!isSourced && (
        <p className="mt-3 text-xs text-slate-400">
          실측 데이터를 바탕으로 구성한 러너 유형별 가상 시나리오입니다.
        </p>
      )}
    </div>
  );
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Review Notes</p>
        <h2 className="flex items-center gap-3 text-3xl font-black tracking-tight text-slate-950">
          <MessageSquareText className="h-7 w-7 text-stone-700" />
          러너 유형별 분석
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          에디터 분석과 함께, 실측 데이터를 바탕으로 러너 유형별 반응을 구성한 가상 시나리오를 제공합니다. 시나리오는 실제 구매 후기가 아닙니다.
        </p>
      </div>

      <div className="grid gap-5">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
}
