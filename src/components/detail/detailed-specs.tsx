import { ClipboardList } from 'lucide-react';
import type { DetailedSpecs as DetailedSpecsType } from "@/types/shoe";

type DetailedSpecsProps = {
  specs: DetailedSpecsType;
};

export function DetailedSpecs({ specs }: DetailedSpecsProps) {
  /*
    이 표는 **다른 데서 볼 수 없는 것만** 담는다 (2026-08-26).

    종전에는 13행을 모두 폈는데 그중 7행(무게·스택·드롭·발볼·주행거리·가격·km당비용)이
    히어로 스펙 카드·빠른 스펙·FIT SIGNAL 에서 이미 본 값이었다. 같은 화면에서
    '드롭 8mm' 를 9번 읽게 만든 주범 중 하나다.

    다만 스택·드롭은 **실측이 공식 발표와 어긋난다는 사실 자체가 정보**라서
    지우지 않고 접어 둔다(카야노 33은 공식 40/32mm, 실측 36.8/28.3mm 로 3mm 이상 차이).
  */
  const specRows = [
    { label: "미드솔", value: specs.midsole },
    { label: "플레이트", value: specs.plate },
    { label: "아웃솔", value: specs.outsole },
    { label: "어퍼", value: specs.upper },
    { label: "발 형태 적합성", value: specs.footType },
    { label: "착지 패턴", value: specs.landingPattern },
  ].filter((r) => r.value && String(r.value).trim().length > 0);

  // 위쪽 카드와 겹치지만, 실측치라 공식 발표와의 차이를 담고 있는 값들
  const measuredRows = [
    { label: "스택 높이", value: specs.stackHeight },
    { label: "힐-토 드롭", value: specs.drop },
    { label: "무게", value: specs.weight },
  ].filter((r) => r.value && String(r.value).trim().length > 0);

  if (specRows.length < 3) return null;

  return (
    <section className="space-y-4">
      <div className="border-b-2 border-primary pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-sky-700">Detailed Spec Sheet</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 flex items-center gap-2">
          <ClipboardList className="h-6 w-6 text-sky-700" />
          여기서만 볼 수 있는 것
        </h2>
      </div>

      <div className="overflow-hidden rounded border border-border bg-white">
        <dl className="divide-y divide-border">
          {specRows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-start gap-4 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-[var(--surface-veil-50)]' : ''}`}
            >
              <dt className="w-28 shrink-0 font-semibold text-tertiary">{row.label}</dt>
              <dd className="flex-1 text-primary">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {measuredRows.length > 0 && (
        <details className="group rounded border border-border bg-white">
          <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-signal-dark [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">랩 실측치 — 공식 발표와 다른 값 보기</span>
            <span className="hidden group-open:inline text-tertiary">접기</span>
          </summary>
          <dl className="divide-y divide-border border-t border-border">
            {measuredRows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-start gap-4 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-[var(--surface-veil-50)]' : ''}`}
              >
                <dt className="w-28 shrink-0 font-semibold text-tertiary">{row.label}</dt>
                <dd className="flex-1 text-primary">{row.value}</dd>
              </div>
            ))}
          </dl>
        </details>
      )}

      <p className="text-xs text-tertiary">
        가격·수명·발볼은 위쪽 스펙 카드에 있습니다.
      </p>
    </section>
  );
}
