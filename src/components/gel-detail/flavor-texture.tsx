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
    if (viscosity <= 3) return 'bg-accent';
    if (viscosity <= 6) return 'bg-warning';
    return 'bg-positive';
  };

  // 맛 피로도 색상
  const getTasteFatigueColor = () => {
    switch (flavor.tasteFatigueRisk) {
      case '낮음':
        return 'text-positive';
      case '보통':
        return 'text-warning';
      case '높음':
        return 'text-negative';
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
          <Utensils className="w-4 h-4 text-accent" />
          <h3 className="text-sm font-bold text-primary">맛 옵션</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {flavor.flavors.map((flavorName, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-lg text-sm font-medium"
            >
              {flavorName}
            </span>
          ))}
        </div>
      </div>

      {/* 식감 */}
      <div className="bg-surface rounded-xl p-4 mb-4">
        <h3 className="text-sm font-bold text-primary mb-2">식감</h3>
        <p className="text-secondary text-sm">{flavor.texture}</p>
      </div>

      {/* 점도 바 */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <Droplet className="w-4 h-4 text-accent" />
          <h3 className="text-sm font-bold text-primary">점도</h3>
          <span className="text-sm text-secondary ml-auto">{flavor.viscosity}/10</span>
        </div>
        <div className="h-3 bg-surface rounded-full overflow-hidden">
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
      <div className="bg-surface rounded-xl p-4 mb-4">
        <h3 className="text-sm font-bold text-primary mb-2">뒷맛</h3>
        <p className="text-secondary text-sm">{flavor.aftertaste}</p>
      </div>

      {/* 맛 피로도 위험 */}
      <div
        className={cn(
          "rounded-xl p-4 border",
          flavor.tasteFatigueRisk === '낮음' ? 'bg-positive/5 border-positive/20' :
          flavor.tasteFatigueRisk === '보통' ? 'bg-warning/5 border-warning/20' :
          'bg-negative/5 border-negative/20'
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
