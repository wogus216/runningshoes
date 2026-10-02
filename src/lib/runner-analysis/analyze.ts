import type { RunnerAnalysis, RunnerCharacter, RunnerSnapshot28d } from '@/types/runner-analysis';
import { classifyRunner } from './classify';
import { scoreRunner } from './score';

export function analyzeRunner(
  snapshot: RunnerSnapshot28d,
  characters?: readonly RunnerCharacter[],
): RunnerAnalysis {
  const scored = scoreRunner(snapshot);
  return {
    ...scored,
    match: classifyRunner(scored.traits, snapshot, characters),
  };
}
