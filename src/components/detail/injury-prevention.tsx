import type { InjuryPreventionData, InjuryPreventionLevel } from "@/types/shoe";
import { cn } from "@/lib/utils";

type InjuryPreventionProps = {
  injuryPrevention: InjuryPreventionData;
};

type InjuryCardProps = {
  emoji: string;
  title: string;
  status: InjuryPreventionLevel;
};

function InjuryCard({ emoji, title, status }: InjuryCardProps) {
  const statusConfig = {
    excellent: { label: "우수", bgClass: "bg-sky-50 border-sky-200", textClass: "text-sky-700" },
    good: { label: "양호", bgClass: "bg-sky-50 border-sky-200", textClass: "text-sky-700" },
    caution: { label: "양호", bgClass: "bg-amber-50 border-amber-200", textClass: "text-amber-700" },
    warning: { label: "주의", bgClass: "bg-rose-50 border-rose-200", textClass: "text-rose-600" },
  };

  const config = statusConfig[status];

  return (
    <div className={cn("rounded-[24px] border p-4 text-left shadow-[0_16px_30px_-28px_rgba(15,23,42,0.4)]", config.bgClass)}>
      <p className="mb-3 text-2xl">{emoji}</p>
      <p className="text-sm font-semibold text-primary">{title}</p>
      <p className={cn("mt-2 text-xs font-semibold uppercase tracking-[0.18em]", config.textClass)}>{config.label}</p>
    </div>
  );
}

export function InjuryPrevention({ injuryPrevention }: InjuryPreventionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Injury Prevention</p>
        <h2 className="text-3xl font-black tracking-tight text-slate-950">관절 부담 관점</h2>
        <p className="text-sm leading-relaxed text-slate-600">무릎, 아킬레스, 족저근막, 정강이 기준으로 이 신발이 어느 쪽에 더 유리한지 압축해 보여줍니다.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <InjuryCard
          emoji="🦵"
          title="무릎"
          status={injuryPrevention.kneeIssues}
        />
        <InjuryCard
          emoji="🦶"
          title="발목"
          status={injuryPrevention.achillesTendinopathy}
        />
        <InjuryCard
          emoji="🦶"
          title="족저근막"
          status={injuryPrevention.plantarFasciitis}
        />
        <InjuryCard
          emoji="🦵"
          title="정강이"
          status={injuryPrevention.shinSplints}
        />
      </div>
    </section>
  );
}
