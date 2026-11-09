type InjuryAnalysisProps = {
  injuries: string[];
};

/** 과거 설문 세션을 복원했을 때 건강 정보가 추천에 쓰이는 것으로 오해하지 않게 한다. */
export function InjuryAnalysis({ injuries }: InjuryAnalysisProps) {
  if (injuries.length === 0) return null;

  return (
    <section className="rounded-[4px] border border-[var(--accent-line)] bg-white p-6 space-y-2">
      <h3 className="text-lg font-bold text-primary">통증 이력이 있다면</h3>
      <p className="text-sm text-secondary">
        저장된 부상 이력은 추천 순위에 사용하지 않습니다. 이 추천은 개별 신발의 치료·부상 예방 효과를 평가하지 않습니다.
        통증이 있는 경우 진료 시 현재 신는 신발과 훈련량도 함께 상담하세요.
      </p>
      <p className="text-xs text-tertiary">
        참고: <a className="underline" href="https://www.cochrane.org/evidence/CD013368_running-shoes-preventing-lower-limb-running-injuries-adults" target="_blank" rel="noopener noreferrer">Cochrane 2022 체계적 문헌고찰</a>
        {' '}(연구 검색 기준 2021년 6월). 신발 유형과 발 자세에 따른 선택 연구이며, 현재 판매 모델별 임상 평가가 아닙니다.
      </p>
    </section>
  );
}
