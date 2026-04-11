import { ClipboardList } from 'lucide-react';
import type { DetailedSpecs as DetailedSpecsType } from "@/types/shoe";

type DetailedSpecsProps = {
  specs: DetailedSpecsType;
};

export function DetailedSpecs({ specs }: DetailedSpecsProps) {
  const specRows = [
    { label: "무게", value: specs.weight },
    { label: "스택 높이", value: specs.stackHeight },
    { label: "힐-토 드롭", value: specs.drop },
    { label: "미드솔", value: specs.midsole },
    { label: "플레이트", value: specs.plate },
    { label: "아웃솔", value: specs.outsole },
    { label: "어퍼", value: specs.upper },
    { label: "발볼 너비", value: specs.width },
    { label: "추천 주행거리", value: specs.durability },
    { label: "가격", value: specs.price },
    { label: "km당 비용", value: specs.costPerKm },
    { label: "발 형태 적합성", value: specs.footType },
    { label: "착지 패턴", value: specs.landingPattern },
  ].filter((r) => r.value && String(r.value).trim().length > 0);

  if (specRows.length < 3) return null;

  return (
    <section className="space-y-4">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-700">Detailed Spec Sheet</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 flex items-center gap-2">
          <ClipboardList className="h-6 w-6 text-sky-700" />
          상세 스펙 시트
        </h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-white">
        <dl className="divide-y divide-border">
          {specRows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-start gap-4 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-surface/50' : ''}`}
            >
              <dt className="w-28 shrink-0 font-semibold text-tertiary">{row.label}</dt>
              <dd className="flex-1 text-primary">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
