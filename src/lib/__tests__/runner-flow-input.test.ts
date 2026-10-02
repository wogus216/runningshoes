import { describe, expect, it } from 'vitest';
import { analyzeRunner } from '@/lib/runner-analysis/analyze';
import {
  snapshotFromFlowInput,
  type FlowInput,
  type FlowOrigins,
  type FlowValues,
} from '@/lib/runner-analysis/from-flow-input';
import { validateSnapshot } from '@/lib/runner-analysis/score';

// 검토 시트 기록 ②를 직접 입력한 상태.
const VALUES: FlowValues = {
  distance: '150',
  count: '8',
  minutes: '5',
  seconds: '30',
  longest: '30',
  hard: 2,
  goal: 'record',
  days: [0, 2, 4, 6],
};
const EDITED: FlowOrigins = {
  distance: 'confirmed',
  count: 'confirmed',
  pace: 'confirmed',
  longest: 'edited',
  hard: 'edited',
  goal: 'edited',
  days: 'edited',
};
const input = (values: Partial<FlowValues> = {}, origins: Partial<FlowOrigins> = {}, extra: Partial<FlowInput> = {}): FlowInput => ({
  values: { ...VALUES, ...values },
  origins: { ...EDITED, ...origins },
  ...extra,
});

describe('snapshotFromFlowInput', () => {
  it('turns entered values into the engine snapshot', () => {
    expect(snapshotFromFlowInput(input())).toEqual({
      ok: true,
      snapshot: {
        windowDays: 28,
        totalDistanceKm: 150,
        runCount: 8,
        averagePaceSecPerKm: 330,
        longestRunKm: 30,
        qualitySessionCount: 2,
        goal: 'record',
        usualWeekdays: [0, 1, 3, 5],
      },
    });
  });

  it('converts weekdays from 0 = 월 to the engine 0 = 일', () => {
    const result = snapshotFromFlowInput(input({ days: [6, 0, 1] }));
    expect(result.ok && result.snapshot.usualWeekdays).toEqual([0, 1, 2]);
  });

  it('leaves usualWeekdays out when no day is chosen', () => {
    const result = snapshotFromFlowInput(input({ days: [] }));
    expect(result.ok).toBe(true);
    expect(result.ok && 'usualWeekdays' in result.snapshot).toBe(false);
  });

  describe('sample values (D1)', () => {
    it('blocks the result while any record still shows its example', () => {
      expect(snapshotFromFlowInput(input({}, { distance: 'sample', pace: 'sample' }))).toEqual({
        ok: false,
        reason: 'sample',
        fields: ['distance', 'pace'],
      });
    });

    it('lets an example through once the runner confirms it as their own', () => {
      expect(snapshotFromFlowInput(input({}, { distance: 'confirmed', pace: 'confirmed' })).ok).toBe(true);
    });

    it('reports invalid fields before samples', () => {
      expect(snapshotFromFlowInput(input({ hard: null }, { distance: 'sample' }))).toEqual({
        ok: false,
        reason: 'invalid',
        fields: ['hard'],
      });
    });
  });

  describe('empty answers are never filled in', () => {
    it('rejects an unpicked hard-training count instead of reading it as 0', () => {
      expect(snapshotFromFlowInput(input({ hard: null }))).toMatchObject({ ok: false, fields: ['hard'] });
    });

    it('rejects an unpicked goal instead of reading it as habit', () => {
      expect(snapshotFromFlowInput(input({ goal: null }))).toMatchObject({ ok: false, fields: ['goal'] });
    });

    it.each(['', '  ', 'abc', 'NaN', 'Infinity', '1e3'])('rejects %j as a distance', (distance) => {
      expect(snapshotFromFlowInput(input({ distance }))).toMatchObject({ ok: false, reason: 'invalid' });
    });
  });

  describe('field rules', () => {
    it.each([
      ['count 0', { count: '0' }, 'count'],
      ['fractional count', { count: '2.5' }, 'count'],
      ['minutes below 2', { minutes: '1' }, 'pace'],
      ['minutes above 12', { minutes: '13' }, 'pace'],
      ['seconds 60', { seconds: '60' }, 'pace'],
      ['empty seconds', { seconds: '' }, 'pace'],
      ['longest above total', { longest: '151' }, 'longest'],
      ['longest below the mean run', { longest: '18' }, 'longest'],
      ['hard above the run count', { count: '5', longest: '30', hard: 6 }, 'hard'],
      ['hard above the 6+ chip', { hard: 7 }, 'hard'],
      ['unknown goal', { goal: 'speed' }, 'goal'],
      ['weekday out of range', { days: [7] }, 'days'],
    ] as const)('rejects %s', (_name, values, field) => {
      const result = snapshotFromFlowInput(input(values as Partial<FlowValues>));
      expect(result).toMatchObject({ ok: false, reason: 'invalid' });
      expect(!result.ok && result.fields).toContain(field);
    });

    it.each([
      ['the fastest pace', { minutes: '2', seconds: '00' }, 120],
      ['the slowest pace', { minutes: '12', seconds: '59' }, 779],
    ] as const)('accepts %s', (_name, values, pace) => {
      const result = snapshotFromFlowInput(input(values));
      expect(result.ok && result.snapshot.averagePaceSecPerKm).toBe(pace);
    });

    it('accepts "8.0" runs and a mean-length longest run within 0.05km', () => {
      const result = snapshotFromFlowInput(input({ count: '8.0', longest: '18.71' }));
      expect(result.ok && result.snapshot.runCount).toBe(8);
    });

    it('accepts one run whose longest equals the total', () => {
      expect(snapshotFromFlowInput(input({ count: '1', distance: '21.1', longest: '21.1', hard: 1 })).ok).toBe(true);
    });
  });

  describe('hard-training chips 0–6', () => {
    it.each([0, 1, 2, 3, 4, 5, 6])('passes chip %i through unchanged', (hard) => {
      const result = snapshotFromFlowInput(input({ count: '14', distance: '150', longest: '30', hard }));
      expect(result.ok && result.snapshot.qualitySessionCount).toBe(hard);
    });
  });

  describe('race goal (D2)', () => {
    const raceGoal = { distanceKm: 42.195, targetTimeMinutes: 230 };

    it.each(['race', 'record'])('keeps the race goal for %s', (goal) => {
      const result = snapshotFromFlowInput(input({ goal }, {}, { raceGoal }));
      expect(result.ok && result.snapshot.raceGoal).toEqual(raceGoal);
    });

    it.each(['habit', 'endurance', 'health_fun'])('drops a race goal left over after switching to %s', (goal) => {
      const result = snapshotFromFlowInput(input({ goal }, {}, { raceGoal }));
      expect(result.ok).toBe(true);
      expect(result.ok && 'raceGoal' in result.snapshot).toBe(false);
    });

    it('rejects a race goal that is not a finite positive number', () => {
      const broken = { distanceKm: 42.195, targetTimeMinutes: Number.NaN };
      expect(snapshotFromFlowInput(input({ goal: 'race' }, {}, { raceGoal: broken }))).toEqual({
        ok: false,
        reason: 'invalid',
        fields: ['raceGoal'],
      });
    });

    it('leaves raceGoal out when none is given', () => {
      const result = snapshotFromFlowInput(input({ goal: 'race' }, {}, { raceGoal: null }));
      expect(result.ok && 'raceGoal' in result.snapshot).toBe(false);
    });
  });

  it('only hands the engine snapshots it accepts', () => {
    const cases: FlowInput[] = [
      input(),
      input({ days: [] }),
      input({ count: '1', distance: '5', longest: '5', hard: 0, goal: 'habit', days: [3] }),
      input({ count: '26', distance: '420', longest: '32', hard: 6, goal: 'race', days: [0, 1, 2, 3, 4, 5, 6] }, {}, {
        raceGoal: { distanceKm: 42.195, targetTimeMinutes: 190 },
      }),
    ];
    for (const flow of cases) {
      const result = snapshotFromFlowInput(flow);
      if (!result.ok) throw new Error(`expected ok: ${JSON.stringify(result)}`);
      expect(validateSnapshot(result.snapshot)).toEqual([]);
      expect(() => analyzeRunner(result.snapshot)).not.toThrow();
    }
  });
});
