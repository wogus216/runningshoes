import Link from "next/link";
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
    caution: { label: "주의", bgClass: "bg-amber-50 border-amber-200", textClass: "text-amber-700" },
    warning: { label: "비권장", bgClass: "bg-rose-50 border-rose-200", textClass: "text-rose-600" },
  };

  const config = statusConfig[status];

  return (
    <div className={cn("rounded border p-4 text-left", config.bgClass)}>
      <p className="mb-3 text-2xl">{emoji}</p>
      <p className="text-sm font-semibold text-primary">{title}</p>
      <p className={cn("mt-2 text-xs font-semibold uppercase tracking-[0.18em]", config.textClass)}>{config.label}</p>
    </div>
  );
}

export function InjuryPrevention({ injuryPrevention }: InjuryPreventionProps) {
  /*
    카드에 붙였던 참고 수치(쿠셔닝 8/10 · 힐 스택 37mm 등)를 뺐다 (2026-08-26).

    등급이 왜 그런지 근거를 보이려고 넣었던 값인데, 넷 다 히어로 스펙 카드와 빠른 스펙에
    이미 있는 수치였다. 결과적으로 같은 화면에서 '드롭 8mm'를 두 번 더 읽게 만들었고,
    "글이 너무 많다"는 문제를 키운 쪽이었다.

    대신 아래 무릎 한계 안내는 남긴다 — 이건 다른 데 없는 정보이고,
    등급 하나로 답할 수 없는 사안이라는 사실을 밝히지 않으면 판정이 과신된다.
  */
  return (
    <section className="space-y-6">
      <div className="space-y-2 border-b-2 border-primary pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Injury Prevention</p>
        <h2 className="text-3xl font-black tracking-tight text-slate-950">관절 부담 관점</h2>
        <p className="text-[15.5px] leading-relaxed text-slate-600">무릎, 아킬레스, 족저근막, 정강이 기준으로 이 신발이 어느 쪽에 더 유리한지 압축해 보여줍니다.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <InjuryCard emoji="🦵" title="무릎" status={injuryPrevention.kneeIssues} />
        {/*
          제목이 '발목'이었는데 값은 achillesTendinopathy(아킬레스건증)였다 — 2026-08-25 정정.
          발목 염좌와 아킬레스건증은 원인도 대응도 다른 부상이라(사이트에도 각각 별도 글이 있다)
          '발목'으로 읽히면 다른 부상 정보를 본 것으로 오해하게 된다.
        */}
        <InjuryCard emoji="🦶" title="아킬레스" status={injuryPrevention.achillesTendinopathy} />
        <InjuryCard emoji="🦶" title="족저근막" status={injuryPrevention.plantarFasciitis} />
        <InjuryCard emoji="🦵" title="정강이" status={injuryPrevention.shinSplints} />
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
        기존 통증이나 부상 이력이 있다면 전문의 상담을 우선하세요.
      </p>
    </section>
  );
}
