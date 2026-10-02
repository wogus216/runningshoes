import { describe, expect, it } from 'vitest';
import type { RunnerSnapshot28d, RunnerTraits } from '@/types/runner-analysis';
import { analyzeRunner } from '@/lib/runner-analysis/analyze';
import { RUNNER_CHARACTERS } from '@/lib/runner-analysis/characters';
import { classifyRunner } from '@/lib/runner-analysis/classify';
import { piecewise, scoreRunner, validateSnapshot } from '@/lib/runner-analysis/score';

const SAMPLE_SNAPSHOT: RunnerSnapshot28d = {
  windowDays: 28,
  totalDistanceKm: 150,
  runCount: 8,
  usualWeekdays: [2, 4, 0],
  averagePaceSecPerKm: 330,
  longestRunKm: 30,
  qualitySessionCount: 0,
  goal: 'race',
  raceGoal: {
    distanceKm: 42.195,
    targetTimeMinutes: 230,
  },
};

describe('runner analysis scoring', () => {
  it('linearly interpolates between anchors and clamps outside them', () => {
    const anchors = [[0, 0], [10, 50], [20, 100]] as const;
    expect(piecewise(-1, anchors)).toBe(0);
    expect(piecewise(5, anchors)).toBe(25);
    expect(piecewise(15, anchors)).toBe(75);
    expect(piecewise(30, anchors)).toBe(100);
  });

  it('calculates the agreed ranges for the sample marathon runner', () => {
    const { traits, publicScores } = scoreRunner(SAMPLE_SNAPSHOT);
    expect(traits.endurance).toBeGreaterThanOrEqual(82);
    expect(traits.endurance).toBeLessThanOrEqual(84);
    expect(traits.stimulus).toBeGreaterThanOrEqual(55);
    expect(traits.stimulus).toBeLessThanOrEqual(58);
    expect(traits.recoveryMargin).toBeGreaterThanOrEqual(74);
    expect(traits.recoveryMargin).toBeLessThanOrEqual(80);
    expect(traits.consistency).toBe(75);
    expect(traits.longRunAffinity).toBeGreaterThanOrEqual(92);
    expect(traits.longRunAffinity).toBeLessThanOrEqual(94);
    expect(traits.qualityAffinity).toBe(0);
    expect(Object.values(publicScores).every(Number.isInteger)).toBe(true);
  });

  it('returns Heracles for the agreed sample runner', () => {
    const analysis = analyzeRunner(SAMPLE_SNAPSHOT);
    expect(analysis.match.character.id).toBe('heracles');
  });

  it('estimates intervals from the run count when no dates or weekdays are provided', () => {
    const { traits, fallbacksUsed } = scoreRunner({ ...SAMPLE_SNAPSHOT, usualWeekdays: undefined });
    expect(traits.recoveryMargin).toBeLessThanOrEqual(70);
    expect(traits.consistency).toBe(50);
    expect(fallbacksUsed).toEqual(expect.arrayContaining(['runCountIntervals', 'neutralConsistency']));
  });

  it('spreads the runs evenly over 28 days when the schedule is unknown', () => {
    // 28회 → 간격 1일(35점). 140km ÷ 28 = 1회 5km, 강한 훈련 없음.
    const { traits } = scoreRunner({
      ...SAMPLE_SNAPSHOT,
      totalDistanceKm: 140,
      runCount: 28,
      longestRunKm: 8,
      usualWeekdays: undefined,
      raceGoal: undefined,
    });
    expect(traits.recoveryMargin).toBeCloseTo(51.36, 2);
  });

  it('rejects impossible direct-input snapshots', () => {
    expect(validateSnapshot({ ...SAMPLE_SNAPSHOT, longestRunKm: 151 })).toContain(
      'longestRunKm must be greater than 0 and no greater than totalDistanceKm',
    );
    expect(validateSnapshot({ ...SAMPLE_SNAPSHOT, qualitySessionCount: 9 })).toContain(
      'qualitySessionCount must be between 0 and runCount',
    );
  });

  it.each([
    ['totalDistanceKm', { totalDistanceKm: Number.NaN }],
    ['runCount', { runCount: Number.POSITIVE_INFINITY }],
    ['averagePaceSecPerKm', { averagePaceSecPerKm: Number.NaN }],
    ['longestRunKm', { longestRunKm: Number.NaN }],
    ['qualitySessionCount', { qualitySessionCount: Number.NaN }],
    ['raceGoal.distanceKm', { raceGoal: { distanceKm: Number.NaN, targetTimeMinutes: 230 } }],
    ['raceGoal.targetTimeMinutes', { raceGoal: { distanceKm: 42.195, targetTimeMinutes: Number.POSITIVE_INFINITY } }],
  ] as const)('rejects a non-finite %s instead of scoring it', (field, patch) => {
    const snapshot = { ...SAMPLE_SNAPSHOT, ...patch };
    expect(validateSnapshot(snapshot)).toContain(`${field} must be a finite number`);
    expect(() => scoreRunner(snapshot)).toThrow();
  });
});

describe('weekday intervals', () => {
  // 엔진 요일: 0 = 일 … 6 = 토.
  const withDays = (usualWeekdays: number[]) => scoreRunner({ ...SAMPLE_SNAPSHOT, usualWeekdays }).traits;

  it('gives back-to-back days less recovery margin than spread days', () => {
    const mondayTuesday = withDays([1, 2]);
    const mondayThursday = withDays([1, 4]);
    expect(mondayTuesday.recoveryMargin).toBeLessThan(mondayThursday.recoveryMargin - 10);
  });

  it('reads the pattern, not the calendar position', () => {
    expect(withDays([1, 2])).toEqual(withDays([4, 5]));
    expect(withDays([0, 2, 4])).toEqual(withDays([1, 3, 5]));
  });

  it('keeps an evenly spread week on the average-gap anchors', () => {
    // 화·목·일: 간격 2·2·3일 → 75·75·90점. 평균 간격 2.33일을 앵커에 넣은 80점과 같다.
    const { recoveryMargin } = withDays([2, 4, 0]);
    const averageRunScore = 80 + 20 * (150 / 8 - 15) / 7;
    const loadMargin = 100 - averageRunScore * 0.5 - 81.25 * 0.25;
    expect(recoveryMargin).toBeCloseTo(80 * 0.45 + 80 * 0.25 + 100 * 0.2 + loadMargin * 0.1, 6);
  });

  it('treats a single weekday as a 7-day gap, not as no answer', () => {
    const { traits, fallbacksUsed } = scoreRunner({ ...SAMPLE_SNAPSHOT, usualWeekdays: [0] });
    expect(fallbacksUsed).toEqual(['usualWeekdaysForIntervals']);
    expect(traits.consistency).toBe(75);
    expect(traits.recoveryMargin).toBe(85);
  });

  it('lowers the margin as the week fills up', () => {
    const margins = [[1], [1, 4], [1, 3, 5], [0, 2, 4, 6], [0, 1, 3, 4, 6], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5, 6]]
      .map((days) => withDays(days).recoveryMargin);
    margins.slice(1).forEach((margin, index) => expect(margin).toBeLessThanOrEqual(margins[index]));
  });
});

describe('runner character classification', () => {
  it('contains the complete 12-house, 36-character matrix', () => {
    expect(RUNNER_CHARACTERS).toHaveLength(36);
    expect(new Set(RUNNER_CHARACTERS.map((character) => character.house)).size).toBe(12);
  });

  it.each(RUNNER_CHARACTERS.map((character) => [character.name, character] as const))(
    'selects %s for its own vector',
    (_name, character) => {
      const snapshot: RunnerSnapshot28d = {
        ...SAMPLE_SNAPSHOT,
        goal: character.primaryGoal,
        raceGoal: undefined,
      };
      expect(classifyRunner(character.traits, snapshot).character.id).toBe(character.id);
    },
  );

  const representativeProfiles: Array<readonly [string, RunnerTraits, RunnerSnapshot28d['goal']]> = [
    ['hestia', { endurance: 30, stimulus: 20, recoveryMargin: 90, consistency: 90, longRunAffinity: 20, qualityAffinity: 0 }, 'habit'],
    ['achilles', { endurance: 75, stimulus: 98, recoveryMargin: 35, consistency: 65, longRunAffinity: 55, qualityAffinity: 100 }, 'record'],
    ['athena', { endurance: 78, stimulus: 78, recoveryMargin: 80, consistency: 88, longRunAffinity: 65, qualityAffinity: 72 }, 'record'],
    ['odysseus', { endurance: 82, stimulus: 65, recoveryMargin: 68, consistency: 55, longRunAffinity: 82, qualityAffinity: 48 }, 'race'],
    ['sisyphus', { endurance: 85, stimulus: 40, recoveryMargin: 75, consistency: 95, longRunAffinity: 75, qualityAffinity: 10 }, 'endurance'],
  ];

  it.each(representativeProfiles)('selects %s for its representative profile', (expectedId, traits, goal) => {
    const snapshot = { ...SAMPLE_SNAPSHOT, goal, raceGoal: undefined };
    expect(classifyRunner(traits, snapshot).character.id).toBe(expectedId);
  });
});
