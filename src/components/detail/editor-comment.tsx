interface EditorCommentProps {
  comment: string;
  recommendFor: string[];
  notRecommendFor: string[];
}

/**
 * 긴 코멘트만 접는다. 짧은 것까지 접으면 이득 없이 클릭만 늘어난다.
 *
 * 2026-08-26 실측(130종): 길이 중앙값 533자, 첫 문단 중앙값 307자, 문단 수는
 * 2개가 116종으로 대부분이다. 500자를 넘기면 57%가 접히고 평균 252자가 감춰진다
 * — 임계를 400자로 내리면 전부 접히지만 짧은 글까지 클릭을 요구하게 되고,
 * 600자로 올리면 26%만 접혀 효과가 얕다.
 */
const FOLD_OVER_CHARS = 500;

// 추천/비추천 대상 목록은 바로 아래 CoreBoxes가 담당한다(중복 렌더 제거, 2026-07 리디자인).
// 이 컴포넌트는 에디터 산문만 맡는다 — props 시그니처는 호출부 호환을 위해 유지.
export function EditorComment({ comment }: EditorCommentProps) {
  const paragraphs = comment.split('\n\n').filter(p => p.trim());
  /*
    이 블록은 탭과 무관하게 **여섯 탭 전부에서 항상 보인다**(2026-08-26 확인).
    그래서 여기 한 문단을 줄이면 페이지 전체에서 한 문단이 줄어든다.
    다만 첫 문단은 남긴다 — 접힌 채로도 무슨 신발인지는 읽혀야 한다.
  */
  const shouldFold = comment.length > FOLD_OVER_CHARS && paragraphs.length >= 2;
  const head = shouldFold ? paragraphs.slice(0, 1) : paragraphs;
  const rest = shouldFold ? paragraphs.slice(1) : [];

  return (
    <div className="border border-border border-l-8 border-l-accent bg-white p-6 md:p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        Editor Read
      </p>
      <h3 className="mt-2 text-lg font-bold tracking-tight text-primary">에디터의 한마디</h3>
      <div className="mt-4 space-y-3 border-t border-border pt-4">
        {head.map((para, i) => (
          <p key={i} className="text-[15.5px] leading-relaxed text-secondary">
            {para}
          </p>
        ))}

        {rest.length > 0 && (
          <details className="group">
            <summary className="cursor-pointer list-none py-1 text-sm font-semibold text-accent [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">이어서 읽기 ({rest.length}문단 더)</span>
              <span className="hidden group-open:inline text-tertiary">접기</span>
            </summary>
            <div className="mt-3 space-y-3">
              {rest.map((para, i) => (
                <p key={i} className="text-[15.5px] leading-relaxed text-secondary">
                  {para}
                </p>
              ))}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
