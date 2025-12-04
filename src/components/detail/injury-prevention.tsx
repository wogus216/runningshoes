import type { InjuryPreventionData, InjuryPreventionLevel } from "@/types/shoe";

type InjuryPreventionProps = {
  injuryPrevention: InjuryPreventionData;
};

type InjuryCardProps = {
  icon: string;
  title: string;
  incidence: string;
  status: InjuryPreventionLevel;
  description: string;
};

function InjuryCard({ icon, title, incidence, status, description }: InjuryCardProps) {
  const statusConfig = {
    excellent: { label: "예방 우수", className: "bg-[#10b98120] text-[#10b981]" },
    good: { label: "예방 양호", className: "bg-[#10b98120] text-[#10b981]" },
    caution: { label: "주의 필요", className: "bg-[#f59e0b20] text-[#f59e0b]" },
    warning: { label: "비추천", className: "bg-[#ef444420] text-[#ef4444]" },
  };

  const config = statusConfig[status];
  const iconEmoji = status === "caution" || status === "warning" ? "⚠️" : "✅";

  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 transition-all duration-300 hover:border-[#4facfe] hover:translate-x-1">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{iconEmoji}</div>
          <div>
            <div className="text-lg font-bold text-gray-900">{title}</div>
            <div className="text-sm text-gray-500">{incidence}</div>
          </div>
        </div>
        <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${config.className}`}>
          {config.label}
        </span>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export function InjuryPrevention({ injuryPrevention }: InjuryPreventionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <span className="text-4xl">🏥</span>
        부상 예방 프로필
      </h2>
      <p className="text-gray-600">
        이 신발이 예방/주의해야 할 부상 (러닝 부상 발생률 기준)
      </p>

      <div className="grid gap-5">
        <InjuryCard
          icon="✅"
          title="족저근막염"
          incidence="6.1% 발생률"
          status={injuryPrevention.plantarFasciitis}
          description="적절한 아치 서포트와 10mm 드롭이 족저근막 부하를 줄여줍니다. 과도하게 딱딱하지 않은 미드솔로 초보자의 족저근막염 예방에 효과적입니다."
        />

        <InjuryCard
          icon="✅"
          title="아킬레스건염"
          incidence="10.3% 발생률"
          status={injuryPrevention.achillesTendinopathy}
          description="높은 힐-토 드롭(10mm)이 아킬레스건 부하를 감소시킵니다. 단단한 힐 카운터가 뒤꿈치를 안정적으로 잡아주어 아킬레스건 과부하를 방지합니다."
        />

        <InjuryCard
          icon="⚠️"
          title="슬개대퇴 통증"
          incidence="6.3% 발생률"
          status={injuryPrevention.kneeIssues}
          description="충분한 쿠셔닝이 충격을 줄여주지만, 뒤꿈치 착지 유도로 무릎 부하가 약간 증가할 수 있습니다. 무릎이 약한 러너는 착지 자세를 주의하세요."
        />

        <InjuryCard
          icon="✅"
          title="경골 스트레스"
          incidence="9.4% 발생률"
          status={injuryPrevention.shinSplints}
          description="우수한 충격 흡수력이 경골에 가해지는 반복적 스트레스를 감소시킵니다. 초보자의 정강이 통증(shin splints) 예방에 효과적입니다."
        />
      </div>

      <div className="bg-gradient-to-br from-[#4facfe10] to-[#4facfe20] border-l-4 border-[#4facfe] rounded-xl p-5">
        <div className="font-bold text-[#4facfe] mb-2 text-lg">📚 연구 기반 인사이트</div>
        <p className="text-gray-700 leading-relaxed">
          기술적으로 진보된 러닝화(TARS)는 기존 쿠셔닝화 대비{" "}
          <strong>발목 관절 반력을 1.84 체중만큼 감소</strong>시키는 것으로 연구되었습니다.
          페가수스 41은 TARS 수준은 아니지만, 우수한 쿠셔닝으로 초보자의 부상 위험을
          낮춥니다.
        </p>
      </div>
    </section>
  );
}
