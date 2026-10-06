'use client';

import { useEffect, useRef } from 'react';
import { analyzeRunner } from '@/lib/runner-analysis/analyze';
import { snapshotFromFlowInput, type FlowInput, type FlowSnapshotResult } from '@/lib/runner-analysis/from-flow-input';
import { getCharacterTitle } from '@/lib/runner-analysis/presentation';
import type { RunnerAnalysis } from '@/types/runner-analysis';
import { mountMedalFlow } from './medal/medal3d-flow';

export type MedalVerdict = Exclude<FlowSnapshotResult, { ok: true }> | { ok: true; analysis: RunnerAnalysis; title: string };

// 07 다음에 흐름이 부른다. 무효·예시가 먼저 걸리고(S1 어댑터), 통과하면 판정한다.
// fallbacksUsed 는 analysis 안에만 남는다 — 화면·공유에 내보내지 않는다(스펙 95행).
// title 은 인물의 칭호다. 명판 각인 뒤 완료 제목이 `{인물명}` + `{칭호}`로 바뀐다(S3).
export function judgeFlowInput(input: FlowInput): MedalVerdict {
  const result = snapshotFromFlowInput(input);
  if (!result.ok) return result;
  const analysis = analyzeRunner(result.snapshot);
  return { ok: true, analysis, title: getCharacterTitle(analysis.match.character.id) };
}

// 3D 메달 입력 흐름(3D-3 시안, vanilla three)을 붙였다 뗀다. 화면과 동작은 전부 medal3d-flow.js 가 가진다.
// 마운트할 때마다 마크업을 새로 쓰고, 뗄 때 렌더러·워커·타이머·문서 리스너를 정리한다.
export default function RunningCardMedal() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    return mountMedalFlow(el, { judge: judgeFlowInput });
  }, []);

  return <div ref={container} className="rcm" />;
}
