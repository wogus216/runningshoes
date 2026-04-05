import type { Gel } from "@/types/gel";
import { Utensils, Droplet } from "lucide-react";
import { cn } from "@/lib/utils";

type FlavorTextureProps = {
  gel: Gel;
};

export function FlavorTexture({ gel }: FlavorTextureProps) {
  const flavor = gel.flavorProfile;

  // 점도에 따른 색상
  const getViscosityColor = (viscosity: number) => {
    if (viscosity <= 3) return 'bg-sky-500';
    if (viscosity <= 6) return 'bg-amber-500';
    return 'bg-slate-700';
  };

  // 맛 피로도 색상
  const getTasteFatigueColor = () => {
    switch (flavor.tasteFatigueRisk) {
      case '낮음':
        return 'text-sky-700';
      case '보통':
        return 'text-amber-700';
      case '높음':
        return 'text-rose-600';
      default:
        return 'text-primary';
    }
  };

  return (
    <div>
      <h2 className="font-bold mb-4 md:mb-5 text-primary">맛 & 식감</h2>

      {/* 맛 옵션 */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <Utensils className="w-4 h-4 text-sky-700" />
          <h3 className="text-sm font-bold text-primary">맛 옵션</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {flavor.flavors.map((flavorName, index) => (
            <span
              key={index}
              className="rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-700"
            >
              {flavorName}
            </span>
          ))}
        </div>
      </div>

      {/* 식감 */}
      <div className="mb-4 rounded-xl border border-sky-100 bg-white/82 p-4">
        <h3 className="text-sm font-bold text-primary mb-2">식감</h3>
        <p className="text-secondary text-sm">{flavor.texture}</p>
      </div>

      {/* 점도 바 */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <Droplet className="w-4 h-4 text-sky-700" />
          <h3 className="text-sm font-bold text-primary">점도</h3>
          <span className="text-sm text-secondary ml-auto">{flavor.viscosity}/10</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-sky-100">
          <div
            className={cn(
              "h-full transition-all rounded-full",
              getViscosityColor(flavor.viscosity)
            )}
            style={{ width: `${flavor.viscosity * 10}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-tertiary mt-1.5">
          <span>물처럼 묽음</span>
          <span>양갱처럼 진함</span>
        </div>
      </div>

      {/* 뒷맛 */}
      <div className="mb-4 rounded-xl border border-sky-100 bg-white/82 p-4">
        <h3 className="text-sm font-bold text-primary mb-2">뒷맛</h3>
        <p className="text-secondary text-sm">{flavor.aftertaste}</p>
      </div>

      {/* 맛 피로도 위험 */}
      <div
        className={cn(
          "rounded-xl p-4 border",
          flavor.tasteFatigueRisk === '낮음' ? 'border-sky-200 bg-sky-50' :
          flavor.tasteFatigueRisk === '보통' ? 'border-amber-200 bg-amber-50' :
          'border-rose-200 bg-rose-50'
        )}
      >
        <h3 className="text-sm font-bold text-primary mb-2">맛 피로도</h3>
        <p className={cn("text-sm font-medium", getTasteFatigueColor())}>
          {flavor.tasteFatigueRisk === '낮음' && '✅ 낮음 - 여러 개 섭취해도 거부감 적음'}
          {flavor.tasteFatigueRisk === '보통' && '⚠️ 보통 - 맛 로테이션 권장'}
          {flavor.tasteFatigueRisk === '높음' && '🚨 높음 - 다양한 맛 준비 필수'}
        </p>
      </div>
    </div>
  );
}
