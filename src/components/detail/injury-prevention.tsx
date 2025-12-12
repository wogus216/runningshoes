import { ShieldCheck, AlertTriangle, HeartPulse, BookOpen } from 'lucide-react';
import type { InjuryPreventionData, InjuryPreventionLevel } from "@/types/shoe";

type InjuryPreventionProps = {
  injuryPrevention: InjuryPreventionData;
};

type InjuryCardProps = {
  title: string;
  incidence: string;
  status: InjuryPreventionLevel;
};

// 부상별 설명 동적 생성
function getInjuryDescription(injury: string, status: InjuryPreventionLevel): string {
  const descriptions: Record<string, Record<InjuryPreventionLevel, string>> = {
    plantarFasciitis: {
      excellent: '아치 서포트와 적절한 쿠셔닝이 족저근막 부하를 효과적으로 줄여줍니다.',
      good: '적절한 아치 서포트로 족저근막염 예방에 도움이 됩니다.',
      caution: '아치 서포트가 부족할 수 있어 평발이나 높은 아치를 가진 러너는 주의가 필요합니다.',
      warning: '족저근막염 이력이 있는 러너에게는 권장되지 않습니다.',
    },
    achillesTendinopathy: {
      excellent: '적절한 힐-토 드롭과 쿠셔닝이 아킬레스건 부하를 효과적으로 감소시킵니다.',
      good: '힐 드롭이 아킬레스건 부담을 줄여주는 데 도움이 됩니다.',
      caution: '낮은 드롭으로 아킬레스건에 부담이 갈 수 있어 점진적인 적응이 필요합니다.',
      warning: '아킬레스건 문제가 있는 러너에게는 권장되지 않습니다.',
    },
    kneeIssues: {
      excellent: '충분한 쿠셔닝이 무릎에 가해지는 충격을 효과적으로 흡수합니다.',
      good: '쿠셔닝이 무릎 부담을 줄여주는 데 도움이 됩니다.',
      caution: '뒤꿈치 착지 시 무릎 부하가 증가할 수 있어 착지 자세에 주의가 필요합니다.',
      warning: '무릎 문제가 있는 러너는 다른 신발을 고려하세요.',
    },
    shinSplints: {
      excellent: '우수한 충격 흡수력이 경골 스트레스를 효과적으로 감소시킵니다.',
      good: '충격 흡수력이 정강이 통증 예방에 도움이 됩니다.',
      caution: '단단한 바닥에서 장거리 러닝 시 정강이에 부담이 갈 수 있습니다.',
      warning: '정강이 통증 이력이 있는 러너에게는 권장되지 않습니다.',
    },
  };

  return descriptions[injury]?.[status] || '해당 부상 유형에 대한 평가입니다.';
}

function InjuryCard({ title, incidence, status }: InjuryCardProps) {
  const statusConfig = {
    excellent: { label: "예방 우수", className: "bg-[#10b98120] text-[#10b981]" },
    good: { label: "예방 양호", className: "bg-[#10b98120] text-[#10b981]" },
    caution: { label: "주의 필요", className: "bg-[#f59e0b20] text-[#f59e0b]" },
    warning: { label: "비추천", className: "bg-[#ef444420] text-[#ef4444]" },
  };

  const config = statusConfig[status];
  const isWarning = status === "caution" || status === "warning";

  // 부상 유형 키 추출
  const injuryKey = title === "족저근막염" ? "plantarFasciitis"
    : title === "아킬레스건염" ? "achillesTendinopathy"
    : title === "슬개대퇴 통증" ? "kneeIssues"
    : "shinSplints";

  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 transition-all duration-300 hover:border-[#4facfe] hover:translate-x-1">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isWarning ? 'bg-amber-100' : 'bg-emerald-100'}`}>
            {isWarning ? (
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            ) : (
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            )}
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">{title}</div>
            <div className="text-sm text-gray-500">{incidence}</div>
          </div>
        </div>
        <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${config.className}`}>
          {config.label}
        </span>
      </div>
      <p className="text-gray-600 leading-relaxed">{getInjuryDescription(injuryKey, status)}</p>
    </div>
  );
}

export function InjuryPrevention({ injuryPrevention }: InjuryPreventionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <HeartPulse className="h-8 w-8 text-[#4facfe]" />
        부상 예방 프로필
      </h2>
      <p className="text-gray-600">
        이 신발이 예방/주의해야 할 부상 (러닝 부상 발생률 기준)
      </p>

      <div className="grid gap-5">
        <InjuryCard
          title="족저근막염"
          incidence="6.1% 발생률"
          status={injuryPrevention.plantarFasciitis}
        />

        <InjuryCard
          title="아킬레스건염"
          incidence="10.3% 발생률"
          status={injuryPrevention.achillesTendinopathy}
        />

        <InjuryCard
          title="슬개대퇴 통증"
          incidence="6.3% 발생률"
          status={injuryPrevention.kneeIssues}
        />

        <InjuryCard
          title="경골 스트레스"
          incidence="9.4% 발생률"
          status={injuryPrevention.shinSplints}
        />
      </div>

      <div className="bg-gradient-to-br from-[#4facfe10] to-[#4facfe20] border-l-4 border-[#4facfe] rounded-xl p-5">
        <div className="font-bold text-[#4facfe] mb-2 text-lg flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          연구 기반 인사이트
        </div>
        <p className="text-gray-700 leading-relaxed">
          러닝화의 쿠셔닝과 안정성은 부상 예방에 중요한 역할을 합니다.
          기존 부상 이력이 있는 경우 전문가 상담을 권장드립니다.
        </p>
      </div>
    </section>
  );
}
