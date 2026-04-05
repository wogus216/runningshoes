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
      <div className="mb-4 rounded-xl border border-sky-200 bg-sky-50 p-4">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="w-4 h-4 text-sky-700" />
          <h3 className="text-sm font-bold text-sky-700">추천 대상</h3>
        </div>
        <ul className="space-y-2">
          {guide.bestFor.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-secondary">
              <span className="mt-0.5 text-sky-700">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 비추천 대상 */}
      {guide.avoidIf.length > 0 && (
        <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 p-4">
        <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-4 h-4 text-rose-600" />
            <h3 className="text-sm font-bold text-rose-600">피해야 할 경우</h3>
          </div>
          <ul className="space-y-2">
            {guide.avoidIf.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-secondary">
                <span className="mt-0.5 text-rose-600">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 적합 거리 */}
      <div className="mb-4 rounded-xl border border-sky-100 bg-white/82 p-4">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-sky-700" />
          <h3 className="text-sm font-bold text-primary">적합 거리</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {guide.idealDistance.map((distance, index) => (
            <span
              key={index}
              className="rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-700"
            >
              {distance}
            </span>
          ))}
        </div>
      </div>

      {/* 섭취 전략 */}
      <div className="mb-4 rounded-xl border border-sky-200 bg-[linear-gradient(180deg,rgba(239,246,255,0.95),rgba(255,255,255,0.94))] p-4">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-sky-700" />
          <h3 className="text-sm font-bold text-sky-700">섭취 전략</h3>
        </div>
        <p className="text-sm text-secondary leading-relaxed">{guide.intakeStrategy}</p>
      </div>

      {/* 카페인 전략 (카페인 젤인 경우) */}
      {guide.caffeineStrategy && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Coffee className="w-4 h-4 text-amber-700" />
            <h3 className="text-sm font-bold text-amber-700">카페인 전략</h3>
          </div>
          <p className="text-sm text-secondary leading-relaxed">{guide.caffeineStrategy}</p>
        </div>
      )}
    </div>
  );
}
