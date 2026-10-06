import { describe, expect, it } from 'vitest';
import type { RunnerSnapshot28d } from '@/types/runner-analysis';
import { analyzeRunner } from '@/lib/runner-analysis/analyze';
import { RUNNER_CHARACTERS } from '@/lib/runner-analysis/characters';
import { classifyRunner } from '@/lib/runner-analysis/classify';
import { validateSnapshot } from '@/lib/runner-analysis/score';
import { SYNTHETIC_SEED, syntheticRunners } from './support/synthetic-runners';

// 스펙 분포 검증(488-494행)을 합성 1만 개(시드 고정, 분포 가정은 support/synthetic-runners.ts)로 돌린다.
// 2·3번은 지금 엔진이 지키지 못한다. 엔진(목표 벡터·친화도) 조정은 운영자 결정이라 여기서는 고치지 않고, 지금 상태를
// 그대로 고정해 둔다 — 엔진이나 가정이 바뀌면 이 테스트가 깨지고, 그때 docs/running-card-s4-report.md 분포 표를 다시 낸다.
const KNOWN_UNREACHED = ['hera', 'apollo', 'ares'];
const KNOWN_OVER_TEN_PERCENT = ['hestia', 'daedalus'];

const runners = syntheticRunners();
const verdicts = runners.map((snapshot) => ({ snapshot, analysis: analyzeRunner(snapshot) }));

describe(`합성 러너 1만 명(시드 ${SYNTHETIC_SEED})`, () => {
  it('같은 시드는 같은 표본을 낸다', () => {
    expect(syntheticRunners(50)).toEqual(runners.slice(0, 50));
  });

  it('전부 엔진 입력 검증을 통과한다', () => {
    expect(runners).toHaveLength(10000);
    expect(runners.filter((snapshot) => validateSnapshot(snapshot).length > 0)).toEqual([]);
  });

  it('스펙 2번(36명 모두 한 번 이상) — 지금 미달인 인물을 고정한다', () => {
    const seen = new Set(verdicts.map((v) => v.analysis.match.character.id));
    expect(RUNNER_CHARACTERS.map((c) => c.id).filter((id) => !seen.has(id))).toEqual(KNOWN_UNREACHED);
  });

  it('스펙 3번(한 인물이 10% 이하) — 지금 넘는 인물을 고정한다', () => {
    const counts = new Map<string, number>();
    verdicts.forEach((v) => counts.set(v.analysis.match.character.id, (counts.get(v.analysis.match.character.id) ?? 0) + 1));
    const over = RUNNER_CHARACTERS.map((c) => c.id).filter((id) => (counts.get(id) ?? 0) / runners.length > 0.1);
    expect(over).toEqual(KNOWN_OVER_TEN_PERCENT);
  });

  it('스펙 4번: 다섯 목표 각각에서 네 가문 이상이 나온다', () => {
    const houses = new Map<RunnerSnapshot28d['goal'], Set<string>>();
    verdicts.forEach(({ snapshot, analysis }) => {
      if (!houses.has(snapshot.goal)) houses.set(snapshot.goal, new Set());
      houses.get(snapshot.goal)!.add(analysis.match.character.house);
    });
    expect(houses.size).toBe(5);
    houses.forEach((set) => expect(set.size).toBeGreaterThanOrEqual(4));
  });

  it('스펙 5번: 1·2위 차이가 2점 이상이면 연속 입력을 1% 바꿔도 인물이 같다', () => {
    let checked = 0;
    const changed: RunnerSnapshot28d[] = [];
    verdicts.forEach(({ snapshot, analysis }) => {
      const winner = analysis.match;
      const second = classifyRunner(analysis.traits, snapshot, RUNNER_CHARACTERS.filter((c) => c.id !== winner.character.id));
      if (winner.finalScore - second.finalScore < 2) return;
      checked++;
      // 횟수·강한 훈련은 정수라 1%가 값이 되지 않는다. 거리·페이스·목표 기록만 함께 움직인다(최장 ≤ 총거리 유지).
      for (const f of [0.99, 1.01]) {
        const moved: RunnerSnapshot28d = {
          ...snapshot,
          totalDistanceKm: snapshot.totalDistanceKm * f,
          longestRunKm: snapshot.longestRunKm * f,
          averagePaceSecPerKm: snapshot.averagePaceSecPerKm * f,
          ...(snapshot.raceGoal && { raceGoal: { ...snapshot.raceGoal, targetTimeMinutes: snapshot.raceGoal.targetTimeMinutes * f } }),
        };
        if (analyzeRunner(moved).match.character.id !== winner.character.id) changed.push(moved);
      }
    });
    expect(checked).toBeGreaterThan(1000);
    expect(changed).toEqual([]);
  });
});
