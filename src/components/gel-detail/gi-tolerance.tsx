import type { Gel } from "@/types/gel";
import { Heart, AlertTriangle, Droplets, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

type GIToleranceProps = {
  gel: Gel;
};

export function GITolerance({ gel }: GIToleranceProps) {
  const gi = gel.giTolerance;

  // GI 등급에 따른 색상 및 아이콘
  const getGILevel = () => {
    switch (gi.overall) {
      case 'excellent':
        return {
          color: 'text-sky-700',
          bg: 'bg-sky-50',
          border: 'border-sky-200',
          label: '매우 안정적',
          emoji: '🩵'
        };
      case 'good':
        return {
          color: 'text-sky-700',
          bg: 'bg-sky-50',
          border: 'border-sky-200',
          label: '안정적',
          emoji: '💙'
        };
      case 'moderate':
        return {
          color: 'text-amber-700',
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          label: '보통',
          emoji: '💛'
        };
      case 'poor':
        return {
          color: 'text-rose-600',
          bg: 'bg-rose-50',
          border: 'border-rose-200',
          label: '주의 필요',
          emoji: '❤️'
        };
      default:
        return {
          color: 'text-primary',
          bg: 'bg-surface',
          border: 'border-border',
          label: '보통',
          emoji: '🤍'
        };
    }
  };

  const level = getGILevel();

  return (
    <div>
      <h2 className="font-bold mb-4 md:mb-5 text-primary">위장 안정성</h2>

      {/* GI 등급 표시 */}
      <div className={cn("rounded-xl p-5 mb-5 border", level.bg, level.border)}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{level.emoji}</span>
          <div>
            <h3 className="text-sm font-bold text-primary">전체 평가</h3>
            <p className={cn("text-lg font-bold", level.color)}>{level.label}</p>
          </div>
        </div>
      </div>

      {/* 물 섭취 요구사항 */}
      <div className="mb-4 rounded-xl border border-sky-100 bg-white/82 p-4">
        <div className="flex items-center gap-2 mb-2">
          <Droplets className="w-4 h-4 text-sky-700" />
          <h3 className="text-sm font-bold text-primary">물 섭취 요구사항</h3>
        </div>
        <p className={cn(
          "text-sm font-medium",
          gi.waterPairing === '필수' ? 'text-amber-700' :
          gi.waterPairing === '권장' ? 'text-sky-700' :
          'text-slate-700'
        )}>
          {gi.waterPairing === '필수' ? '⚠️ 반드시 물과 함께 섭취' :
           gi.waterPairing === '권장' ? '💧 물과 함께 섭취 권장' :
           '✅ 물 없이도 섭취 가능'}
        </p>
      </div>

      {/* 위험 요소 */}
      {gi.riskFactors.length > 0 && (
        <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <h3 className="text-sm font-bold text-amber-700">주의 사항</h3>
          </div>
          <ul className="space-y-2">
            {gi.riskFactors.map((risk, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-secondary">
                <span className="mt-0.5 text-amber-700">•</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 장 훈련 필요 여부 */}
      {gi.gutTrainingNeeded && (
        <div className="mb-4 rounded-xl border border-sky-200 bg-sky-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-sky-700" />
            <h3 className="text-sm font-bold text-sky-700">장 훈련 필요</h3>
          </div>
          <p className="text-sm text-secondary">
            레이스 전 훈련 중 반복 섭취로 적응이 필요합니다. 처음 사용 시 소량부터 시작하세요.
          </p>
        </div>
      )}

      {/* 커뮤니티 피드백 */}
      <div className="rounded-xl border border-sky-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,248,255,0.92))] p-4">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="w-4 h-4 text-sky-700" />
          <h3 className="text-sm font-bold text-primary">커뮤니티 후기</h3>
        </div>
        <p className="text-sm text-secondary leading-relaxed italic">
          &ldquo;{gi.communityFeedback}&rdquo;
        </p>
      </div>
    </div>
  );
}
