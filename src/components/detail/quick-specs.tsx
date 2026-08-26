import type { ShoeSpecs, KoreanFootFit } from "@/types/shoe";
import type { DurabilityProfile } from "@/lib/durability";
import { cn } from "@/lib/utils";

type QuickSpecsProps = {
  specs: ShoeSpecs;
  koreanFootFit?: KoreanFootFit;
  durability?: DurabilityProfile | null;
};

type SpecBarProps = {
  label: string;
  value: number | string;
  percentage: number;
  color?: 'accent' | 'positive';
};

function SpecBar({ label, value, percentage, color = 'accent' }: SpecBarProps) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-primary" id={`spec-${label}`}>{label}</span>
        <span className="font-mono font-medium tabular-nums text-primary">{value}</span>
      </div>
      <div
        className="spec-bar"
        role="progressbar"
        aria-labelledby={`spec-${label}`}
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={cn(
            "spec-bar-fill",
            color === 'positive' ? "bg-primary" : "bg-accent"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export function QuickSpecs({ specs, koreanFootFit, durability }: QuickSpecsProps) {
  // 토박스 너비 표시
  const getToeboxLabel = () => {
    if (!koreanFootFit?.toBoxWidth) return { text: '표준', color: 'text-primary' };
    if (koreanFootFit.toBoxWidth === 'narrow') return { text: '좁음', color: 'text-amber-700' };
    if (koreanFootFit.toBoxWidth === 'wide') return { text: '넓음', color: 'text-sky-700' };
    return { text: '표준', color: 'text-primary' };
  };

  const toebox = getToeboxLabel();

  return (
    <div>
      <h2 className="font-bold mb-4 md:mb-5 text-primary">빠른 스펙</h2>

      {/* 스펙 바 */}
      <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
        <SpecBar label="쿠셔닝" value={`${specs.cushioning}/10`} percentage={specs.cushioning * 10} />
        <SpecBar label="반발력" value={`${specs.responsiveness}/10`} percentage={specs.responsiveness * 10} />
        <SpecBar label="안정성" value={`${specs.stability}/10`} percentage={specs.stability * 10} color="positive" />
        <SpecBar
          label="내구성"
          value={durability?.rangeLabel ?? `${specs.durability || 500}km`}
          percentage={Math.min((durability?.mid ?? specs.durability ?? 500) / 8, 100)}
        />
        {durability && (
          <p className="-mt-2 text-[11px] text-tertiary">
            내구성은 {durability.basisLabel} {durability.confidenceLabel} 범위입니다.
          </p>
        )}
      </div>

      {/*
        무게·힐 스택·드롭 칸을 뺐다 (2026-08-26). 셋 다 히어로 스펙 카드에 같은 값이
        같은 화면에 이미 있어, 여기서는 두 번째로 읽는 셈이었다('드롭 8mm' 는 한 화면에
        9번 등장했다). 토박스만 남긴다 — 히어로 FIT SIGNAL 은 '표준/넓음' 같은 등급으로만
        말하고, 이 칸은 그 등급을 색으로 구분해 보여주는 다른 표현이다.
      */}
      <div className="grid grid-cols-1 border-t-2 border-primary">
        <div className="p-3 text-center md:p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-tertiary">토박스</p>
          <p className={cn("mt-1.5 font-mono text-lg font-bold tabular-nums md:text-xl", toebox.color)}>{toebox.text}</p>
        </div>
      </div>
    </div>
  );
}
