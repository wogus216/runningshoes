'use client';

import { useEffect, useRef, useState } from 'react';
import { trackRunner } from '@/lib/runner-analysis/track';
import { analyzeRunner } from '@/lib/runner-analysis/analyze';
import { explainRunner, type RunnerExplanation } from '@/lib/runner-analysis/explain';
import { snapshotFromFlowInput, type FlowInput, type FlowSnapshotResult } from '@/lib/runner-analysis/from-flow-input';
import { getCharacterTitle } from '@/lib/runner-analysis/presentation';
import type { RunnerAnalysis, RunnerSnapshot28d } from '@/types/runner-analysis';
import { mountMedalFlow } from './medal/medal3d-flow';
import { RunningCardResult, type ShareImage } from './running-card-result';

export type JudgedRunner = {
  analysis: RunnerAnalysis;
  title: string;
  snapshot: RunnerSnapshot28d;
  explanation: RunnerExplanation;
};

export type MedalVerdict = Exclude<FlowSnapshotResult, { ok: true }> | ({ ok: true } & JudgedRunner);

// 07 다음에 흐름이 부른다. 무효·예시가 먼저 걸리고(S1 어댑터), 통과하면 판정한다.
// fallbacksUsed 는 analysis 안에만 남는다 — 화면·공유에 내보내지 않는다(스펙 95행).
// title 은 인물의 칭호다. 명판 각인 뒤 완료 제목이 `{인물명}` + `{칭호}`로 바뀐다(S3).
// explanation 은 결과 카드의 대표 수치·근거·강점·맹점·다음 행동이다(S4, explain.ts).
export function judgeFlowInput(input: FlowInput): MedalVerdict {
  const result = snapshotFromFlowInput(input);
  if (!result.ok) return result;
  const analysis = analyzeRunner(result.snapshot);
  return {
    ok: true,
    analysis,
    title: getCharacterTitle(analysis.match.character.id),
    snapshot: result.snapshot,
    explanation: explainRunner(result.snapshot, analysis),
  };
}

type MountedFlow = { destroy: () => void; shareImage: ShareImage };

// 3D 메달 입력 흐름(3D-3 시안, vanilla three)을 붙였다 뗀다. 화면과 동작은 전부 medal3d-flow.js 가 가진다.
// 마운트할 때마다 마크업을 새로 쓰고, 뗄 때 렌더러·워커·타이머·문서 리스너를 정리한다.
// S4: 명판 각인이 끝나면 흐름이 onReveal 로 판정을 넘기고, 결과 카드가 메달 아래(같은 문서, D5)에 열린다.
// 다시 다듬기로 완료 화면을 떠나면 onReveal(null)로 닫힌다. 공유 이미지는 메달을 그리는 흐름이 만든다(shareImage).
export default function RunningCardMedal({ onRestart }: { onRestart: () => void }) {
  const container = useRef<HTMLDivElement>(null);
  const flow = useRef<MountedFlow | null>(null);
  const [revealed, setRevealed] = useState<JudgedRunner | null>(null);
  const [wantOpen, setWantOpen] = useState(false);

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const mounted: MountedFlow = mountMedalFlow(el, {
      judge: judgeFlowInput,
      onReveal: (verdict: (MedalVerdict & { ok: true }) | null) => {
        setRevealed(verdict);
        // 결과 표지(인물로 바뀐 완료 화면)가 실제로 보이는 순간. 같은 인물은 페이지에서 한 번만.
        if (verdict) {
          const id = verdict.analysis.match.character.id;
          trackRunner('runner_result_viewed', { character_id: id, lead_axis: verdict.explanation.lead.axis }, `runner-result-${id}`);
        }
      },
      onOpenResult: () => setWantOpen(true),
      // 01–07 단계 완료(값을 받아 동전을 새긴 순간). 단계마다 페이지에서 한 번만 — 몇 단계까지 왔는지를 센다.
      onStep: (step: number) => trackRunner('runner_input_step_completed', { step_number: step }, `runner-step-${step}`),
    });
    flow.current = mounted;
    return () => {
      flow.current = null;
      mounted.destroy();
    };
  }, []);

  // '분석 펼쳐보기': 결과 카드가 그려진 뒤 그 첫머리로 내려가 초점을 옮긴다.
  useEffect(() => {
    if (!wantOpen || !revealed) return;
    setWantOpen(false);
    const heading = document.getElementById('rc-result-name');
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    heading?.closest('section')?.scrollIntoView({ behavior: still ? 'auto' : 'smooth', block: 'start' });
    heading?.focus({ preventScroll: true });
  }, [wantOpen, revealed]);

  return (
    <div className="rcm">
      <div ref={container} />
      {revealed && (
        <RunningCardResult
          judged={revealed}
          shareImage={(kind, page, options) => {
            if (!flow.current) return Promise.reject(new Error('medal is gone'));
            return flow.current.shareImage(kind, page, options);
          }}
          onRestart={onRestart}
        />
      )}
    </div>
  );
}
