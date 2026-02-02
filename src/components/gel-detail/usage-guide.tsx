import type { Gel } from "@/types/gel";
import { CheckCircle2, XCircle, MapPin, Clock, Coffee } from "lucide-react";

type UsageGuideProps = {
  gel: Gel;
};

export function UsageGuide({ gel }: UsageGuideProps) {
  const guide = gel.usageGuide;

  return (
    <div>
      <h2 className="font-bold mb-4 md:mb-5 text-primary">섭취 가이드</h2>

      {/* 추천 대상 */}
      <div className="bg-positive/5 border border-positive/20 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="w-4 h-4 text-positive" />
          <h3 className="text-sm font-bold text-positive">추천 대상</h3>
        </div>
        <ul className="space-y-2">
          {guide.bestFor.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-secondary">
              <span className="text-positive mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 비추천 대상 */}
      {guide.avoidIf.length > 0 && (
        <div className="bg-negative/5 border border-negative/20 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-4 h-4 text-negative" />
            <h3 className="text-sm font-bold text-negative">피해야 할 경우</h3>
          </div>
          <ul className="space-y-2">
            {guide.avoidIf.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-secondary">
                <span className="text-negative mt-0.5">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 적합 거리 */}
      <div className="bg-surface rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-accent" />
          <h3 className="text-sm font-bold text-primary">적합 거리</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {guide.idealDistance.map((distance, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-lg text-sm font-medium"
            >
              {distance}
            </span>
          ))}
        </div>
      </div>

      {/* 섭취 전략 */}
      <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-accent" />
          <h3 className="text-sm font-bold text-accent">섭취 전략</h3>
        </div>
        <p className="text-sm text-secondary leading-relaxed">{guide.intakeStrategy}</p>
      </div>

      {/* 카페인 전략 (카페인 젤인 경우) */}
      {guide.caffeineStrategy && (
        <div className="bg-warning/10 border border-warning/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Coffee className="w-4 h-4 text-warning" />
            <h3 className="text-sm font-bold text-warning">카페인 전략</h3>
          </div>
          <p className="text-sm text-secondary leading-relaxed">{guide.caffeineStrategy}</p>
        </div>
      )}
    </div>
  );
}
