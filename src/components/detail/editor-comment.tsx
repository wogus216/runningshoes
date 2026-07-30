interface EditorCommentProps {
  comment: string;
  recommendFor: string[];
  notRecommendFor: string[];
}

// 추천/비추천 대상 목록은 바로 아래 CoreBoxes가 담당한다(중복 렌더 제거, 2026-07 리디자인).
// 이 컴포넌트는 에디터 산문만 맡는다 — props 시그니처는 호출부 호환을 위해 유지.
export function EditorComment({ comment }: EditorCommentProps) {
  return (
    <div className="border border-border border-l-8 border-l-accent bg-white p-6 md:p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        Editor Read
      </p>
      <h3 className="mt-2 text-lg font-bold tracking-tight text-primary">에디터의 한마디</h3>
      <div className="mt-4 space-y-3 border-t border-border pt-4">
        {comment.split('\n\n').map((para, i) => (
          <p key={i} className="text-[15.5px] leading-relaxed text-secondary">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
