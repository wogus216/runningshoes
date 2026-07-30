import { MessageSquareText } from 'lucide-react';
import type { Review } from "@/types/shoe";

type ReviewsSectionProps = {
  reviews: Review[];
};

function ReviewCard({ review }: { review: Review }) {
  // 출처가 있는 항목(에디터 분석·외부 리뷰 인용)만 배지를 진하게 준다.
  // 데이터 기반 적합성 분석에는 별점을 붙이지 않는다 — 실사용 경험이 없는 항목에
  // 별점이 붙으면 실제 구매 후기로 읽힌다.
  const isSourced = /에디터|분석|리뷰어|Believe|Shihuo|WeeViews|RunRepeat|Doctors|Road Trail/i.test(review.userType);
  // 숫자 점수는 자체 채점 체계가 0~100으로 정의된 '에디터 분석'에만 표시한다.
  // 외부 인용은 매체마다 척도가 달라(WeeViews 1~5 등) 숫자를 그대로 보여주면 오독된다.
  const isEditorScore = /에디터/.test(review.userType) && typeof review.rating === 'number';
  const score = isEditorScore ? Math.min(100, Math.max(0, Math.round(review.rating as number))) : null;

  return (
    <div className="rounded-[28px] border border-stone-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,248,246,0.92))] p-5 shadow-[0_16px_34px_-32px_rgba(15,23,42,0.45)]">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <span
          className={`rounded-full px-3 py-1.5 text-sm font-semibold text-white ${
            isSourced ? "bg-stone-800" : "bg-stone-600"
          }`}
        >
          {review.userType}
        </span>
        {score !== null && (
          <span className="text-sm font-bold text-[#e11d48]">에디터 평가 {score}/100</span>
        )}
      </div>
      <p className="text-sm leading-7 text-slate-700 md:text-base">{review.text}</p>
      {!isSourced && (
        <p className="mt-3 text-xs text-slate-400">
          실측 데이터로 도출한 적합성 분석입니다. 실제 착화 후기가 아닙니다.
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
          러너 유형별 적합성 분석
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          랩 실측치(충격흡수·에너지 리턴·스택·토박스)와 가격 데이터를 러너 유형별로 해석한 결과입니다.
          이 사이트는 실사용자 후기를 수집하지 않으며, 아래 내용은 착화 경험이 아닌 데이터 기반 추론입니다.
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
