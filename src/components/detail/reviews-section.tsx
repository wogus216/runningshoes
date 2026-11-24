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
  const isSourced = /에디터|분석|리뷰어|Believe|Shihuo|WeeViews|RunRepeat|Doctors|Road Trail/i.test(review.userType);
  const sentences = splitSentences(review.text);
  const shouldFold = review.text.length > FOLD_OVER_CHARS && sentences.length > PREVIEW_SENTENCES + 1;
  const preview = shouldFold ? sentences.slice(0, PREVIEW_SENTENCES).join(' ') : review.text;
  const rest = shouldFold ? sentences.slice(PREVIEW_SENTENCES).join(' ') : '';
  // 외부 인용·공식 출처 링크. http(s)만 허용하고 도메인을 라벨로 보여 준다.
  const sourceHost = /^https?:\/\//.test(review.sourceUrl ?? '')
    ? new URL(review.sourceUrl as string).hostname.replace(/^www\./, '')
    : null;

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
      </div>
      <p className="text-[15.5px] leading-relaxed text-slate-700">{preview}</p>
      {rest && (
        <details className="group mt-1">
          <summary className="cursor-pointer list-none py-1.5 text-sm font-semibold text-signal-dark [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">근거 수치까지 보기</span>
            <span className="hidden group-open:inline text-tertiary">접기</span>
          </summary>
          <p className="mt-2 text-[15.5px] leading-relaxed text-slate-700">{rest}</p>
        </details>
      )}
      {sourceHost && (
        <p className="mt-3 text-xs text-slate-500">
          출처:{' '}
          <a
            href={review.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-signal-dark underline underline-offset-2"
          >
            {sourceHost}
          </a>
        </p>
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
          원문 기반 분석
        </h2>
        <p className="text-[15.5px] leading-relaxed text-slate-600">
          공식 사양·실험실 측정·외부 착화 의견을 출처와 함께 살펴보세요.
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
