import type { Gel } from "@/types/gel";
import { Heart, AlertTriangle, Droplets, Trophy } from "lucide-react";

type GIToleranceProps = {
  gel: Gel;
};

export function GITolerance({ gel }: GIToleranceProps) {
  const gi = gel.giTolerance;

  return (
    <div>
      <h2 className="font-bold mb-4 md:mb-5 text-primary">섭취 시 확인</h2>

      {/* 물 섭취 요구사항 */}
      <div className="mb-4 rounded-[4px] border border-sky-100 bg-white/82 p-4">
        <div className="flex items-center gap-2 mb-2">
          <Droplets className="w-4 h-4 text-sky-700" />
          <h3 className="text-sm font-bold text-primary">물 섭취 요구사항</h3>
        </div>
        <p className="text-sm text-secondary">{gi.waterPairing}</p>
      </div>

      {/* 위험 요소 */}
      {gi.riskFactors.length > 0 && (
        <div className="mb-4 rounded-[4px] border border-amber-200 bg-amber-50 p-4">
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
        <div className="mb-4 rounded-[4px] border border-sky-200 bg-sky-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-sky-700" />
            <h3 className="text-sm font-bold text-sky-700">훈련 중 반응 확인</h3>
          </div>
          <p className="text-sm text-secondary">
            대회에서 사용할 제품·섭취량·음료 조합을 훈련 중 먼저 확인하고, 개인의 위장 반응에 맞춰 계획을 조정하세요.
          </p>
          <a
            href="https://www.ausport.gov.au/ais/nutrition/supplements/group_a/sports-foods2/sports-gels"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs text-sky-700 underline underline-offset-2"
          >
            AIS 젤 섭취 안내
          </a>
        </div>
      )}

      {/* 섭취 메모 — 제품 표기 사실과 실명 판매처 수치만 담는다. 2026-10-23 전까지 제목이 "커뮤니티 후기"에
          따옴표·기울임이라 사용자 후기 인용처럼 읽혔다(우리는 후기를 수집하지 않는다 — CLAUDE.md 절대 규칙 1·2). */}
      {gi.communityFeedback && (
        <div className="rounded-[4px] border border-sky-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,244,237,0.92))] p-4">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4 text-sky-700" />
            <h3 className="text-sm font-bold text-primary">섭취 메모</h3>
          </div>
          <p className="text-sm text-secondary leading-relaxed">{gi.communityFeedback}</p>
        </div>
      )}
    </div>
  );
}
