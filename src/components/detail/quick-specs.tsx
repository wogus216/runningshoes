import type { ShoeSpecs, KoreanFootFit } from "@/types/shoe";
import { cn } from "@/lib/utils";

type QuickSpecsProps = {
  specs: ShoeSpecs;
  koreanFootFit?: KoreanFootFit;
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
        <span className="font-medium text-primary">{value}</span>
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
            color === 'positive' ? "bg-positive" : "bg-accent"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export function QuickSpecs({ specs, koreanFootFit }: QuickSpecsProps) {
  // 토박스 너비 표시
  const getToeboxLabel = () => {
    if (!koreanFootFit?.toBoxWidth) return { text: '표준', color: 'text-primary' };
    if (koreanFootFit.toBoxWidth === 'narrow') return { text: '좁음', color: 'text-warning' };
    if (koreanFootFit.toBoxWidth === 'wide') return { text: '넓음', color: 'text-positive' };
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
        <SpecBar label="내구성" value={`${specs.durability || 500}km`} percentage={Math.min((specs.durability || 500) / 8, 100)} />
      </div>

      {/* 상세 스펙 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        <div className="bg-surface rounded-xl p-3 md:p-4 text-center">
          <p className="text-lg md:text-xl font-bold text-primary">{specs.weight}g</p>
          <p className="text-xs text-tertiary mt-1">무게 (US 9)</p>
        </div>
        <div className="bg-surface rounded-xl p-3 md:p-4 text-center">
          <p className="text-lg md:text-xl font-bold text-primary">40mm</p>
          <p className="text-xs text-tertiary mt-1">힐 스택</p>
        </div>
        <div className="bg-surface rounded-xl p-3 md:p-4 text-center">
          <p className="text-lg md:text-xl font-bold text-primary">{specs.drop || 10}mm</p>
          <p className="text-xs text-tertiary mt-1">드롭</p>
        </div>
        <div className="bg-surface rounded-xl p-3 md:p-4 text-center">
          <p className={cn("text-lg md:text-xl font-bold", toebox.color)}>{toebox.text}</p>
          <p className="text-xs text-tertiary mt-1">토박스</p>
        </div>
      </div>
    </div>
  );
}
