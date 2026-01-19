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
    excellent: { label: "우수", bgClass: "bg-positive/5 border-positive/20", textClass: "text-positive" },
    good: { label: "양호", bgClass: "bg-positive/5 border-positive/20", textClass: "text-positive" },
    caution: { label: "양호", bgClass: "bg-warning/5 border-warning/20", textClass: "text-warning" },
    warning: { label: "주의", bgClass: "bg-negative/5 border-negative/20", textClass: "text-negative" },
  };

  const config = statusConfig[status];

  return (
    <div className={cn("border rounded-xl p-4 text-center", config.bgClass)}>
      <p className="text-2xl mb-1">{emoji}</p>
      <p className="font-medium text-sm text-primary">{title}</p>
      <p className={cn("text-xs mt-1", config.textClass)}>{config.label}</p>
    </div>
  );
}

export function InjuryPrevention({ injuryPrevention }: InjuryPreventionProps) {
  return (
    <div>
      <h2 className="font-bold mb-5 text-primary">부상 예방 분석</h2>

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
    </div>
  );
}
