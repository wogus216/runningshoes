import Link from "next/link";
import type { BiomechanicsData, InjuryPreventionData, InjuryPreventionLevel, ShoeSpecs } from "@/types/shoe";
import { cn } from "@/lib/utils";

type InjuryPreventionProps = {
  injuryPrevention: InjuryPreventionData;
  specs?: ShoeSpecs;
  biomechanics?: BiomechanicsData;
};

type InjuryCardProps = {
  emoji: string;
  title: string;
  status: InjuryPreventionLevel;
  /** 이 부위를 볼 때 같이 보게 되는 실측치. 등급의 산출 근거가 아니라 참고 수치다 */
  metric?: string;
};

function InjuryCard({ emoji, title, status, metric }: InjuryCardProps) {
  const statusConfig = {
    excellent: { label: "우수", bgClass: "bg-sky-50 border-sky-200", textClass: "text-sky-700" },
    good: { label: "양호", bgClass: "bg-sky-50 border-sky-200", textClass: "text-sky-700" },
    caution: { label: "주의", bgClass: "bg-amber-50 border-amber-200", textClass: "text-amber-700" },
    warning: { label: "비권장", bgClass: "bg-rose-50 border-rose-200", textClass: "text-rose-600" },
  };

  const config = statusConfig[status];

  return (
    <div className={cn("rounded border p-4 text-left", config.bgClass)}>
      <p className="mb-3 text-2xl">{emoji}</p>
      <p className="text-sm font-semibold text-primary">{title}</p>
      <p className={cn("mt-2 text-xs font-semibold uppercase tracking-[0.18em]", config.textClass)}>{config.label}</p>
      {metric ? (
        <p className="mt-2 border-t border-current/15 pt-2 font-mono text-[11px] leading-snug text-slate-600">{metric}</p>
      ) : null}
    </div>
  );
}

export function InjuryPrevention({ injuryPrevention, specs, biomechanics }: InjuryPreventionProps) {
  // 등급만 덩그러니 있으면 "이 판정이 내 경우에 맞나"를 확인할 방법이 없다.
  // 각 부위에서 실제로 같이 보게 되는 실측치를 옆에 붙인다.
  // ⚠️ 이건 등급을 만들어낸 계산식이 아니다 — 그 산출 근거는 데이터에 없으므로
  //    "근거"라고 적지 않고 참고 수치로만 병기한다.
  const heel = biomechanics?.stackHeight?.heel;
  const drop = biomechanics?.drop ?? specs?.drop;

  const kneeMetric = [
    specs?.cushioning != null ? `쿠셔닝 ${specs.cushioning}/10` : null,
    heel != null ? `힐 스택 ${heel}mm` : null,
  ].filter(Boolean).join(' · ');

  const achillesMetric = [
    drop != null ? `드롭 ${drop}mm` : null,
    heel != null ? `힐 스택 ${heel}mm` : null,
  ].filter(Boolean).join(' · ');

  const plantarMetric = [
    specs?.stability != null ? `안정성 ${specs.stability}/10` : null,
    heel != null ? `힐 스택 ${heel}mm` : null,
  ].filter(Boolean).join(' · ');

  const shinMetric = [
    specs?.cushioning != null ? `쿠셔닝 ${specs.cushioning}/10` : null,
    drop != null ? `드롭 ${drop}mm` : null,
  ].filter(Boolean).join(' · ');

  return (
    <section className="space-y-6">
      <div className="space-y-2 border-b-2 border-primary pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Injury Prevention</p>
        <h2 className="text-3xl font-black tracking-tight text-slate-950">관절 부담 관점</h2>
        <p className="text-sm leading-relaxed text-slate-600">무릎, 아킬레스, 족저근막, 정강이 기준으로 이 신발이 어느 쪽에 더 유리한지 압축해 보여줍니다.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <InjuryCard
          emoji="🦵"
          title="무릎"
          status={injuryPrevention.kneeIssues}
          metric={kneeMetric || undefined}
        />
        {/*
          제목이 '발목'이었는데 값은 achillesTendinopathy(아킬레스건증)였다 — 2026-08-25 정정.
          발목 염좌와 아킬레스건증은 원인도 대응도 다른 부상이라(사이트에도 각각 별도 글이 있다)
          '발목'으로 읽히면 다른 부상 정보를 본 것으로 오해하게 된다.
        */}
        <InjuryCard
          emoji="🦶"
          title="아킬레스"
          status={injuryPrevention.achillesTendinopathy}
          metric={achillesMetric || undefined}
        />
        <InjuryCard
          emoji="🦶"
          title="족저근막"
          status={injuryPrevention.plantarFasciitis}
          metric={plantarMetric || undefined}
        />
        <InjuryCard
          emoji="🦵"
          title="정강이"
          status={injuryPrevention.shinSplints}
          metric={shinMetric || undefined}
        />
      </div>

      {/*
        무릎 등급이 부위를 구분하지 않는다는 사실을 밝힌다. 2026-08-25 부상 이력 페르소나
        평가에서 "무릎: 우수를 봐도 내 장경인대 통증에 해당하는 판정인지 알 수 없다"가
        가장 큰 불신 지점으로 나왔다. 등급을 임의로 쪼개면 없는 근거를 만들어내는 것이라,
        쪼개는 대신 한계를 그대로 적는다.
      */}
      <div className="rounded border border-amber-200 bg-amber-50 p-4">
        <p className="text-xs font-semibold text-amber-900">같은 &lsquo;무릎&rsquo;이라도 통증 부위에 따라 갈립니다</p>
        <p className="mt-1.5 text-xs leading-relaxed text-amber-800">
          여기의 무릎 등급은 <strong>부위를 구분하지 않은 종합 판정</strong>입니다.
          무릎 바깥쪽(장경인대 증후군)과 앞쪽(슬개대퇴 통증)은 원인도 신발 대응도 달라
          이 등급 하나로 답할 수 없습니다. 통증 위치가 분명하다면{' '}
          <Link href="/blog/it-band-syndrome-running-shoes-2026" className="underline underline-offset-2">장경인대(바깥쪽)</Link>
          {' · '}
          <Link href="/blog/runners-knee-patellofemoral-pain-2026" className="underline underline-offset-2">슬개대퇴(앞쪽)</Link>
          {' '}쪽 정리를 함께 보세요.
        </p>
      </div>

      <p className="text-xs leading-relaxed text-slate-500">
        이 평가는 러닝화의 충격흡수·안정성·드롭·강성 데이터를 근거로 한 참고 정보이며, 통증의 진단이나 치료를 대신하지 않습니다.
        카드 하단 수치는 해당 부위를 볼 때 함께 참고하는 실측치이지 등급의 계산식은 아닙니다.
        기존 통증이나 부상 이력이 있다면 전문의 상담을 우선하세요.
      </p>
    </section>
  );
}
