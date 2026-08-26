import { MessageSquareText } from 'lucide-react';
import type { Review } from "@/types/shoe";

type ReviewsSectionProps = {
  reviews: Review[];
};

/**
 * 이 길이를 넘는 분석만 접는다.
 *
 * 2026-08-26 실측(130종 464건): 본문 길이 중앙값 288자, 신발당 리뷰 3개가 중앙값이라
 * 이 섹션 하나가 전형적으로 864자다. 단일 섹션 최대치는 1,456자로 페이지에서 가장 무거웠다.
 * 250자를 넘기면 75%가 접힌다.
 */
const FOLD_OVER_CHARS = 250;
/** 접었을 때 남길 문장 수. 첫 문장 중앙값이 38자라 두 문장이면 약 76자 — 한 눈에 들어온다 */
const PREVIEW_SENTENCES = 2;

function splitSentences(text: string): string[] {
  return text.split(/(?<=[.!?])\s+/).filter(s => s.trim());
}

function ReviewCard({ review }: { review: Review }) {
  // 출처가 있는 항목(에디터 분석·외부 리뷰 인용)만 배지를 진하게 준다.
  // 데이터 기반 적합성 분석에는 별점을 붙이지 않는다 — 실사용 경험이 없는 항목에
  // 별점이 붙으면 실제 구매 후기로 읽힌다.
  const isSourced = /에디터|분석|리뷰어|Believe|Shihuo|WeeViews|RunRepeat|Doctors|Road Trail/i.test(review.userType);
  // 숫자 점수는 자체 채점 체계가 0~100으로 정의된 '에디터 분석'에만 표시한다.
  // 외부 인용은 매체마다 척도가 달라(WeeViews 1~5 등) 숫자를 그대로 보여주면 오독된다.
  const isEditorScore = /에디터/.test(review.userType) && typeof review.rating === 'number';
  const score = isEditorScore ? Math.min(100, Math.max(0, Math.round(review.rating as number))) : null;

  const sentences = splitSentences(review.text);
  const shouldFold = review.text.length > FOLD_OVER_CHARS && sentences.length > PREVIEW_SENTENCES + 1;
  const preview = shouldFold ? sentences.slice(0, PREVIEW_SENTENCES).join(' ') : review.text;
  const rest = shouldFold ? sentences.slice(PREVIEW_SENTENCES).join(' ') : '';

  return (
    <div className="rounded border border-border bg-white p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <span
          className={`rounded-[4px] px-3 py-1.5 text-sm font-semibold text-white ${
            isSourced ? "bg-stone-800" : "bg-stone-600"
          }`}
        >
          {review.userType}
        </span>
        {score !== null && (
          <span className="text-sm font-bold text-[#e11d48]">에디터 평가 {score}/100</span>
        )}
      </div>
      <p className="text-sm leading-7 text-slate-700 md:text-base">{preview}</p>
      {rest && (
        <details className="group mt-1">
          <summary className="cursor-pointer list-none py-1.5 text-sm font-semibold text-accent [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">근거 수치까지 보기</span>
            <span className="hidden group-open:inline text-tertiary">접기</span>
          </summary>
          <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">{rest}</p>
        </details>
      )}
    </div>
  );
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  /*
    면책 문구를 섹션 하단에 한 번만 둔다 (2026-08-26).
    종전에는 출처 없는 카드마다 "실측 데이터로 도출한 적합성 분석입니다. 실제 착화
    후기가 아닙니다." 를 붙여, 카드가 여럿이면 같은 문장을 두세 번 읽게 됐다.
    ⚠️ 문구 자체는 없애지 않는다 — 이 사이트가 실사용 후기를 수집하지 않는다는 사실은
    반드시 밝혀야 하는 전제다. 반복만 걷어낸다.
  */
  const hasUnsourced = reviews.some(
    r => !/에디터|분석|리뷰어|Believe|Shihuo|WeeViews|RunRepeat|Doctors|Road Trail/i.test(r.userType)
  );

  return (
    <section className="space-y-6">
      <div className="space-y-2 border-b-2 border-primary pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Review Notes</p>
        <h2 className="flex items-center gap-3 text-3xl font-black tracking-tight text-slate-950">
          <MessageSquareText className="h-7 w-7 text-stone-700" />
          러너 유형별 적합성 분석
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          실사용자 후기가 아니라 <strong className="font-semibold text-slate-800">랩 실측치를 러너 유형별로 해석</strong>한 것입니다.
        </p>
      </div>

      <div className="grid gap-5">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      {hasUnsourced && (
        <p className="text-xs leading-relaxed text-slate-500">
          위 분석은 랩 실측 데이터에서 도출한 것이며 실제 착화 후기가 아닙니다.
          이 사이트는 실사용자 후기를 수집하지 않습니다.
        </p>
      )}
    </section>
  );
}
