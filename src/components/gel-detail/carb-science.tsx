import type { Gel } from "@/types/gel";
import { Beaker, Zap, Droplets, FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";

type CarbScienceProps = {
  gel: Gel;
};

export function CarbScience({ gel }: CarbScienceProps) {
  const carb = gel.carbScience;

  // Osmolality 타입에 따른 색상
  const getOsmolalityColor = () => {
    switch (carb.osmolalityType) {
      case 'hydrogel':
      case 'isotonic':
        return 'text-sky-700';
      case 'standard':
        return 'text-amber-700';
      case 'natural':
      case 'solid':
      default:
        return 'text-slate-700';
    }
  };

  const getOsmolalityLabel = () => {
    switch (carb.osmolalityType) {
      case 'hydrogel':
        return '하이드로젤 (위장 최적)';
      case 'isotonic':
        return '등장성 (흡수 빠름)';
      case 'standard':
        return '표준 (물 필요)';
      case 'natural':
        return '천연 원료';
      case 'solid':
        return '고체형 (씹어 먹기)';
      default:
        return carb.osmolalityType;
    }
  };

  const getOsmolalityBg = () => {
    switch (carb.osmolalityType) {
      case 'hydrogel':
      case 'isotonic':
        return 'bg-sky-50 border-sky-200';
      case 'standard':
        return 'bg-amber-50 border-amber-200';
      case 'natural':
      case 'solid':
      default:
        return 'bg-slate-100 border-slate-200';
    }
  };

  return (
    <div>
      <h2 className="font-bold mb-4 md:mb-5 text-primary">탄수화물 과학</h2>

      {/* 듀얼 소스 배지 */}
      <div className="flex flex-wrap gap-3 mb-5">
        <div
          className={cn(
            "px-4 py-2 rounded-lg border",
            carb.dualSource
              ? "border-sky-200 bg-sky-50 text-sky-700"
              : "border-stone-900/8 bg-[rgba(248,250,252,0.86)] text-secondary"
          )}
        >
          <div className="flex items-center gap-2">
            <Beaker className="w-4 h-4" />
            <span className="text-sm font-medium">
              {carb.dualSource ? '듀얼 소스 (2:1 최적)' : '단일 탄수화물'}
            </span>
          </div>
        </div>

        <div
          className={cn(
            "px-4 py-2 rounded-lg border",
            getOsmolalityBg()
          )}
        >
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4" />
            <span className={cn("text-sm font-medium", getOsmolalityColor())}>
              {getOsmolalityLabel()}
            </span>
          </div>
        </div>
      </div>

      {/* 과학 데이터 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <div className="rounded-xl border border-sky-100 bg-white/82 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-sky-700" />
            <h3 className="text-sm font-bold text-primary">흡수 경로</h3>
          </div>
          <p className="text-secondary text-sm">{carb.transporterProfile}</p>
        </div>

        <div className="rounded-xl border border-sky-100 bg-white/82 p-4">
          <div className="flex items-center gap-2 mb-2">
            <FlaskConical className="w-4 h-4 text-sky-700" />
            <h3 className="text-sm font-bold text-primary">산화율</h3>
          </div>
          <p className="text-secondary text-sm">{carb.estimatedOxidationRate}</p>
        </div>

        {carb.osmolalityEstimate && (
          <div className="rounded-xl border border-sky-100 bg-white/82 p-4">
            <h3 className="text-sm font-bold text-primary mb-2">삼투압 농도</h3>
            <p className="text-secondary text-sm">
              {carb.osmolalityEstimate} mOsm/kg
              <span className="text-tertiary text-xs ml-2">
                ({carb.osmolalityBasis === 'measured' ? '실측' :
                  carb.osmolalityBasis === 'estimated' ? '추정' :
                  carb.osmolalityBasis === 'brand_claim' ? '브랜드 주장' : '미확인'})
              </span>
            </p>
          </div>
        )}

        <div className="rounded-xl border border-sky-100 bg-white/82 p-4">
          <h3 className="text-sm font-bold text-primary mb-2">물 섭취 필요</h3>
          <p className="text-secondary text-sm">
            {carb.waterRequired ? (
              <span className="font-medium text-amber-700">필수 (함께 마셔야 함)</span>
            ) : (
              <span className="font-medium text-sky-700">불필요 (단독 섭취 가능)</span>
            )}
          </p>
        </div>
      </div>

      {/* 핵심 기술 */}
      {carb.keyTechnology && (
        <div className="mb-5 rounded-xl border border-sky-200 bg-sky-50 p-4">
          <h3 className="mb-2 text-sm font-bold text-sky-700">핵심 기술</h3>
          <p className="text-secondary text-sm">{carb.keyTechnology}</p>
        </div>
      )}

      {/* 과학 평가 */}
      <div className="rounded-xl border border-sky-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,248,255,0.92))] p-4">
        <h3 className="text-sm font-bold text-primary mb-2">과학적 평가</h3>
        <p className="text-secondary text-sm leading-relaxed">{carb.scienceVerdict}</p>
      </div>
    </div>
  );
}
