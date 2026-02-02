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
          color: 'text-positive',
          bg: 'bg-positive/10',
          border: 'border-positive/20',
          label: '매우 안정적',
          emoji: '💚'
        };
      case 'good':
        return {
          color: 'text-accent',
          bg: 'bg-accent/10',
          border: 'border-accent/20',
          label: '안정적',
          emoji: '💙'
        };
      case 'moderate':
        return {
          color: 'text-warning',
          bg: 'bg-warning/10',
          border: 'border-warning/20',
          label: '보통',
          emoji: '💛'
        };
      case 'poor':
        return {
          color: 'text-negative',
          bg: 'bg-negative/10',
          border: 'border-negative/20',
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
      <div className="bg-surface rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Droplets className="w-4 h-4 text-accent" />
          <h3 className="text-sm font-bold text-primary">물 섭취 요구사항</h3>
        </div>
        <p className={cn(
          "text-sm font-medium",
          gi.waterPairing === '필수' ? 'text-warning' :
          gi.waterPairing === '권장' ? 'text-accent' :
          'text-positive'
        )}>
          {gi.waterPairing === '필수' ? '⚠️ 반드시 물과 함께 섭취' :
           gi.waterPairing === '권장' ? '💧 물과 함께 섭취 권장' :
           '✅ 물 없이도 섭취 가능'}
        </p>
      </div>

      {/* 위험 요소 */}
      {gi.riskFactors.length > 0 && (
        <div className="bg-warning/5 border border-warning/20 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-warning" />
            <h3 className="text-sm font-bold text-warning">주의 사항</h3>
          </div>
          <ul className="space-y-2">
            {gi.riskFactors.map((risk, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-secondary">
                <span className="text-warning mt-0.5">•</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 장 훈련 필요 여부 */}
      {gi.gutTrainingNeeded && (
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-bold text-accent">장 훈련 필요</h3>
          </div>
          <p className="text-sm text-secondary">
            레이스 전 훈련 중 반복 섭취로 적응이 필요합니다. 처음 사용 시 소량부터 시작하세요.
          </p>
        </div>
      )}

      {/* 커뮤니티 피드백 */}
      <div className="bg-surface rounded-xl p-4 border-l-4 border-accent">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="w-4 h-4 text-accent" />
          <h3 className="text-sm font-bold text-primary">커뮤니티 후기</h3>
        </div>
        <p className="text-sm text-secondary leading-relaxed italic">
          &ldquo;{gi.communityFeedback}&rdquo;
        </p>
      </div>
    </div>
  );
}
