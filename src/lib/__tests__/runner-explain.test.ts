import { describe, expect, it } from 'vitest';
import type { RunnerSnapshot28d } from '@/types/runner-analysis';
import { analyzeRunner } from '@/lib/runner-analysis/analyze';
import { RUNNER_CHARACTERS } from '@/lib/runner-analysis/characters';
import { explainRunner, runnerShareAnalysis } from '@/lib/runner-analysis/explain';
import { leadAxisOf } from '@/lib/runner-analysis/presentation';
import { syntheticRunners } from './support/synthetic-runners';

const BASE: RunnerSnapshot28d = {
  windowDays: 28, totalDistanceKm: 96, runCount: 12, averagePaceSecPerKm: 360,
  longestRunKm: 16, qualitySessionCount: 1, goal: 'habit', usualWeekdays: [1, 3, 5],
};
const explain = (changes: Partial<RunnerSnapshot28d> = {}) => {
  const snapshot = { ...BASE, ...changes };
  return explainRunner(snapshot, analyzeRunner(snapshot));
};
const copy = (changes: Partial<RunnerSnapshot28d>) => JSON.stringify(explain(changes));

describe('개인화 설명 — 확인 가능한 기록과 목표', () => {
  it('소개는 실제 횟수·총거리·평균·최장거리와 목표를 연결한다', () => {
    const e = explain();
    expect(e.introduction.text).toContain('12회, 총 96km');
    expect(e.introduction.text).toContain('평균 8km');
    expect(e.introduction.text).toContain('16km');
    expect(e.introduction.text).toContain('습관이 목표');
    expect(e.evidence[1].family).toBe('goal');
    expect(e.evidence[1].text).toContain('습관');
  });

  it('같은 인물이어도 기록이 달라지면 소개와 강점이 달라진다', () => {
    const snapshots = [BASE, { ...BASE, totalDistanceKm: 100 }];
    // 인물을 고정해 문구가 인물 템플릿에만 의존하지 않는지 확인한다.
    const character = RUNNER_CHARACTERS.find(c => c.id === 'athena')!;
    const results = snapshots.map(s => explainRunner(s, analyzeRunner(s, [character])));
    expect(results[0].introduction.text).not.toEqual(results[1].introduction.text);
    const distances = snapshots.map(s => ({ ...s, goal: 'endurance' as const }));
    const strengths = distances.map(s => explainRunner(s, analyzeRunner(s, [character])).strength.text);
    expect(strengths[0]).not.toEqual(strengths[1]);
  });

  it('건강·습관 목표에 강한 훈련 부족을 단점으로 붙이지 않는다', () => {
    for (const goal of ['health_fun', 'habit'] as const) {
      const e = explain({ goal, qualitySessionCount: 0 });
      expect(e.watchout.title).toBe('높은 점수가 목표는 아니에요');
      expect(e.watchout.text).not.toMatch(/부족|단조|필요합니다/);
    }
    const record = explain({ goal: 'record', qualitySessionCount: 0 });
    expect(record.watchout.title).toBe('목표와 훈련의 연결을 살펴봐요');
    expect(record.nextAction.text).not.toMatch(/인터벌|늘려|빠르게/);
    expect(record.strength.text).not.toContain('대회');
  });


  it('대회 목표 기록이 있으면 기록 향상 목적이 섞이는 판정을 설명한다', () => {
    const s: RunnerSnapshot28d = { ...BASE, goal: 'race', raceGoal: { distanceKm: 10, targetTimeMinutes: 50 } };
    const character = RUNNER_CHARACTERS.find(c => c.id === 'daedalus')!;
    const e = explainRunner(s, analyzeRunner(s, [character]));
    expect(e.evidence[1].interpretation).toContain('기록 향상');
    expect(e.evidence[1].interpretation).toContain('목표 기록을 입력');
    expect(e.evidence[1].interpretation).not.toContain('차이가 있지만');
  });

  it('실제 날짜가 없으면 꾸준함·향상·대회 성공을 단정하지 않는다', () => {
    expect(copy({ usualWeekdays: undefined })).not.toMatch(/매주 꾸준|규칙적으로 달|전보다|향상됐|완주할 수|달성할 수/);
    expect(explain({ usualWeekdays: undefined }).scoreInsights[2].summary).toContain('어림');
    expect(explain().scoreInsights[2].detail).toContain('가정');
  });

  it('같은 집계에서 날짜 분포를 임의로 추론하지 않는다', () => {
    const clustered = explain({ runDates: Array(12).fill('2026-10-01') });
    expect(clustered).toEqual(explain());
  });

  it('한 번의 러닝에는 반복되는 습관을 붙이지 않는다', () => {
    const e = explain({ totalDistanceKm: 5, runCount: 1, longestRunKm: 5, qualitySessionCount: 0 });
    expect(e.introduction.text).toContain('한 번');
    expect(e.watchout.text).toContain('반복되는 스타일을 알기 어려워요');
    expect(e.strength.text).toContain('출발점');
  });

  it('6회 이상은 정확한 횟수나 비율로 바꾸지 않는다', () => {
    const e = explain({ qualitySessionCount: 6, goal: 'record' });
    expect(e.strength.text).toContain('6회 이상');
    expect(e.scoreInsights[1].detail).toContain('실제 횟수·비율을 확정할 수 없어요');
    expect(e.introduction.text + e.strength.text).not.toContain('50%');
  });

  it('연속 요일과 낮은 회복 여유에 행동 제안이 모순되지 않는다', () => {
    const e = explain({ usualWeekdays: [1, 2, 3, 4, 5, 6, 0], qualitySessionCount: 6 });
    expect(e.watchout.title).toBe('일정 사이 여백을 살펴봐요');
    expect(e.nextAction.text).toContain('편안한 호흡');
    expect(e.nextAction.text).not.toMatch(/더 빠르|늘리|늘려|인터벌/);
  });

  it('대회 목표가 있거나 계산 범위를 벗어날 때 근거를 정확하게 설명한다', () => {
    expect(explain({ raceGoal: { distanceKm: 10, targetTimeMinutes: 50 }, goal: 'race' }).scoreInsights[1].detail).toContain('평균 페이스와 목표 페이스');
    expect(explain().scoreInsights[1].detail).toContain('중립값');
    expect(explain({ raceGoal: { distanceKm: 10, targetTimeMinutes: 5 }, goal: 'race' }).scoreInsights[1].detail).toContain('중립값');
  });
});

describe('공유 요약 — 숨김과 설명 일치', () => {
  it('숨긴 소개·해석에 거리·횟수·목표 기록을 넣지 않고 점수는 유지한다', () => {
    const e = explain({ totalDistanceKm: 123.4, runCount: 17, longestRunKm: 23.4, qualitySessionCount: 6, goal: 'race', raceGoal: { distanceKm: 42.195, targetTimeMinutes: 237 } });
    const shown = runnerShareAnalysis(e, false), hidden = runnerShareAnalysis(e, true);
    expect(shown.introduction).toContain('123.4');
    const prose = [hidden.introduction, hidden.strength, hidden.watchout, ...hidden.scores.map(s => s.summary)].join(' ');
    expect(prose).not.toMatch(/\d|월·|화·|수·|목·|금·|토·/);
    expect(hidden.scores).toEqual(shown.scores);
    expect(hidden.introduction.length).toBeGreaterThan(20);
  });

  it('공유용 짧은 문구도 본문과 같은 선택 결과에서 만든다', () => {
    const e = explain();
    const share = runnerShareAnalysis(e, false);
    expect(share.strength).toBe(e.strength.shortText);
    expect(share.watchout).toBe(e.watchout.shortText);
    expect(share.scores.map(s => s.summary)).toEqual(e.scoreInsights.map(s => s.summary));
  });
});

describe('합성 러너 1만 명 — 누락·모순·숨김 누출', () => {
  const results = syntheticRunners().map(s => ({ s, a: analyzeRunner(s) })).map(({ s, a }) => ({ s, a, e: explainRunner(s, a) }));

  it('모든 유형에 소개·근거·세 해석·강점·균형·행동이 있다', () => {
    for (const { a, e } of results) {
      expect(e.introduction.text).toBeTruthy();
      expect(e.evidence).toHaveLength(2);
      expect(e.evidence[0].family).not.toBe('goal');
      expect(e.evidence[1].family).toBe('goal');
      expect(e.scoreInsights).toHaveLength(3);
      expect(e.strength.text && e.watchout.text && e.nextAction.text).toBeTruthy();
      expect(e.lead.axis).toBe(leadAxisOf(a.match.character.traits));
      expect(e.scoreInsights.map(s => s.value)).toEqual([a.publicScores.endurance, a.publicScores.stimulus, a.publicScores.recoveryMargin]);
    }
  });

  it('숨긴 요약에는 기록 숫자가 없고 이미지용 문구는 짧다', () => {
    for (const { e } of results) {
      const h = runnerShareAnalysis(e, true);
      expect([h.introduction, h.strength, h.watchout, ...h.scores.map(s => s.summary)].join(' ')).not.toMatch(/\d/);
      expect(h.introduction.length).toBeLessThan(85);
      expect(h.strength.length).toBeLessThan(50);
      expect(h.watchout.length).toBeLessThan(50);
    }
  });

  it('회복 여유가 낮으면 강도나 거리를 높이라고 하지 않는다', () => {
    for (const { a, e } of results.filter(({ a }) => a.traits.recoveryMargin < 50)) {
      expect(a.traits.recoveryMargin).toBeLessThan(50);
      expect(e.nextAction.text).not.toMatch(/더 빠르|늘리|늘려|속도를 높|인터벌/);
    }
  });
});
