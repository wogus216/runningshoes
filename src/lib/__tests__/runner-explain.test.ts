import { describe, expect, it } from 'vitest';
import type { RunnerAnalysis, RunnerSnapshot28d, RunnerTraits } from '@/types/runner-analysis';
import { analyzeRunner } from '@/lib/runner-analysis/analyze';
import { RUNNER_CHARACTERS } from '@/lib/runner-analysis/characters';
import { explainRunner, STEADY_NEXT_RUN, WATCHOUT_RULE_TEXT } from '@/lib/runner-analysis/explain';
import { getCharacterPresentation, leadAxisOf, PRESENTATION_IDS } from '@/lib/runner-analysis/presentation';
import { syntheticRunners } from './support/synthetic-runners';

// 스펙 기준 사례 A(442-468행).
const CASE_A: RunnerSnapshot28d = {
  windowDays: 28,
  totalDistanceKm: 150,
  runCount: 8,
  usualWeekdays: [2, 4, 0],
  averagePaceSecPerKm: 330,
  longestRunKm: 30,
  qualitySessionCount: 0,
  goal: 'race',
  raceGoal: { distanceKm: 42.195, targetTimeMinutes: 230 },
};

const BASE: RunnerSnapshot28d = {
  windowDays: 28,
  totalDistanceKm: 64.5,
  runCount: 9,
  usualWeekdays: [1, 3, 5],
  averagePaceSecPerKm: 360,
  longestRunKm: 12.3,
  qualitySessionCount: 3,
  goal: 'habit',
};

// 판정 결과를 직접 만든다 — 규칙 하나씩을 엔진 입력 탐색 없이 고정하려는 것.
function verdict(id: string, traits: Partial<RunnerTraits>): RunnerAnalysis {
  const character = RUNNER_CHARACTERS.find((c) => c.id === id)!;
  const full = { ...character.traits, ...traits };
  return {
    traits: full,
    publicScores: { endurance: Math.round(full.endurance), stimulus: Math.round(full.stimulus), recoveryMargin: Math.round(full.recoveryMargin) },
    match: { character, finalScore: 0, dataScore: 0, goalAffinity: 0 },
    fallbacksUsed: [],
  };
}

// 거리·속도를 늘리는 말. nextRunRaises 표시와 이 패턴이 서로 맞는지도 아래에서 본다.
const RAISES = /더[\s,]|경쾌|빠르게|늘리|늘려|올리|올려/;

describe('explainRunner — 스펙 기준 사례 A', () => {
  const analysis = analyzeRunner(CASE_A);
  const explanation = explainRunner(CASE_A, analysis);

  it('헤라클레스이고, 예상 공유 근거 두 개가 실제 숫자로 나온다', () => {
    expect(analysis.match.character.id).toBe('heracles');
    expect(explanation.evidence.map((e) => e.text)).toEqual(['1회 평균 18.8km · 최장 30km', '28일 동안 150km']);
  });

  it('예상 맹점(규칙 1)을 쓴다', () => {
    expect(explanation.watchout).toEqual({ rule: 'enduranceWithoutVariety', text: '긴 거리를 감당하는 힘에 비해 훈련 변화는 적은 편입니다.' });
  });

  it('대표 수치는 인물 목표값이 가장 높은 공개 축(헤라클레스 E95 → 지구력)이고, 화면 정수와 같다', () => {
    expect(explanation.lead).toEqual({ axis: 'endurance', value: analysis.publicScores.endurance });
  });
});

describe('대표 수치 축 — 인물 목표값이 가장 높은 공개 축(운영자 결정 2026-10-07)', () => {
  it('같으면 지구력 → 훈련 자극 → 회복 여유 순', () => {
    expect(leadAxisOf({ endurance: 50, stimulus: 50, recoveryMargin: 50 })).toBe('endurance');
    expect(leadAxisOf({ endurance: 40, stimulus: 60, recoveryMargin: 60 })).toBe('stimulus');
    expect(leadAxisOf({ endurance: 40, stimulus: 50, recoveryMargin: 60 })).toBe('recoveryMargin');
    // 아르테미스 E80·S70·R80 — 지구력과 회복 여유가 같다.
    expect(leadAxisOf(RUNNER_CHARACTERS.find((c) => c.id === 'artemis')!.traits)).toBe('endurance');
  });

  it.each(RUNNER_CHARACTERS.map((c) => [c.name, c.id] as const))('%s: 사용자 점수와 상관없이 같은 축', (_name, id) => {
    const target = RUNNER_CHARACTERS.find((c) => c.id === id)!.traits;
    const top = Math.max(target.endurance, target.stimulus, target.recoveryMargin);
    const axes = [explainRunner(BASE, verdict(id, {})), explainRunner(BASE, verdict(id, { endurance: 0, stimulus: 100, recoveryMargin: 0 })), explainRunner(BASE, verdict(id, { endurance: 100, stimulus: 0, recoveryMargin: 100 }))].map((e) => e.lead.axis);
    expect(new Set(axes).size).toBe(1);
    expect(target[axes[0]]).toBe(top);
  });
});

describe('explainRunner — 근거', () => {
  it('요일이 있으면 간격을 월요일부터 읽어 실제 숫자로 쓴다', () => {
    // 헤스티아 목표 회복 여유 95에 딱 맞춘다 → 첫 근거 = 간격, 둘째 = 장거리.
    const e = explainRunner(BASE, verdict('hestia', { recoveryMargin: 95 }));
    expect(e.evidence.map((x) => x.text)).toEqual(['월·수·금 · 간격 2·2·3일', '1회 평균 7.2km · 최장 12.3km']);
  });

  it('요일 하나는 간격 7일, 요일이 없으면 28일 ÷ 횟수', () => {
    expect(explainRunner({ ...BASE, usualWeekdays: [2] }, verdict('hestia', { recoveryMargin: 95 })).evidence[0].text).toBe('화요일 · 간격 7일');
    expect(explainRunner({ ...BASE, usualWeekdays: undefined }, verdict('hestia', { recoveryMargin: 95 })).evidence[0].text).toBe('28일에 9회 · 평균 3.1일에 한 번');
  });

  it("강한 훈련 6은 '6회 이상'으로 쓴다", () => {
    const e = explainRunner({ ...BASE, qualitySessionCount: 6 }, verdict('achilles', { endurance: 20, stimulus: 70 }));
    expect(e.evidence[0].text).toBe('9회 중 강한 훈련 6회 이상');
  });

  it('60 이상인 특성이 없으면 문턱 없이 가장 가까운 특성으로 고른다', () => {
    const low = { endurance: 20, stimulus: 20, recoveryMargin: 40, consistency: 50, longRunAffinity: 20, qualityAffinity: 0 };
    const e = explainRunner(BASE, verdict('hestia', low));
    // 헤스티아 목표 E45/S25/R95/L25/Q5 → 차이 L5 · S5 · Q5 · E25 · R55. 같은 차이는 계열 순서(장거리 먼저).
    expect(e.evidence.map((x) => x.family)).toEqual(['longRun', 'distance']);
  });

  it('규칙성(C)은 근거·강점 후보가 아니다 — 날짜 없이는 기록에서 나온 값이 아니다', () => {
    // 탈로스 목표 C100과 차이 0이지만, 첫 근거·강점은 60·70을 넘는 다른 특성(Q100, 차이 80)에서 나온다.
    const e = explainRunner(BASE, verdict('talos', { consistency: 100, endurance: 0, stimulus: 0, recoveryMargin: 0, longRunAffinity: 0, qualityAffinity: 100 }));
    expect(e.evidence[0].family).toBe('quality');
    expect(e.strength.trait).toBe('qualityAffinity');
  });

  it('목표 기록이 없으면 목표는 근거 후보가 아니다', () => {
    const e = explainRunner({ ...BASE, raceGoal: undefined }, verdict('hestia', {}));
    expect(e.evidence.map((x) => x.family)).not.toContain('goal');
  });
});

describe('explainRunner — 맹점 규칙 1–5(먼저 맞는 하나)', () => {
  const cases: Array<[string, Partial<RunnerTraits>, number, string]> = [
    ['1: E≥75·Q<25', { endurance: 80, qualityAffinity: 10, stimulus: 90, recoveryMargin: 40 }, 9, 'enduranceWithoutVariety'],
    ['2: S≥80·R<50', { endurance: 60, qualityAffinity: 60, stimulus: 85, recoveryMargin: 45 }, 9, 'stimulusWithoutMargin'],
    ['3: C<45', { endurance: 60, qualityAffinity: 60, stimulus: 60, recoveryMargin: 60, consistency: 40 }, 9, 'brokenRhythm'],
    ['4: L≥80·횟수<10', { endurance: 60, qualityAffinity: 60, stimulus: 60, recoveryMargin: 60, consistency: 75, longRunAffinity: 85 }, 9, 'loadInFewRuns'],
    ['4 아님: 횟수 10', { endurance: 60, qualityAffinity: 60, stimulus: 60, recoveryMargin: 60, consistency: 75, longRunAffinity: 85 }, 10, 'character'],
  ];
  it.each(cases)('%s', (_name, traits, runCount, rule) => {
    const e = explainRunner({ ...BASE, runCount }, verdict('theseus', traits));
    expect(e.watchout.rule).toBe(rule);
    expect(e.watchout.text).toBe(rule === 'character' ? getCharacterPresentation('theseus').watchout : WATCHOUT_RULE_TEXT[rule as keyof typeof WATCHOUT_RULE_TEXT]);
  });
});

describe('explainRunner — 다음 14일 행동', () => {
  it('nextRunRaises 표시와 늘리는 말이 정확히 같은 인물을 가리킨다(대조군)', () => {
    const flagged = PRESENTATION_IDS.filter((id) => getCharacterPresentation(id).nextRunRaises);
    const worded = PRESENTATION_IDS.filter((id) => RAISES.test(getCharacterPresentation(id).nextRun));
    expect(flagged.length).toBeGreaterThan(0);
    expect(worded).toEqual(flagged);
  });

  it.each(RUNNER_CHARACTERS.map((c) => [c.name, c.id] as const))('R<50이면 %s 도 거리·속도를 늘리라고 하지 않는다', (_name, id) => {
    const e = explainRunner(BASE, verdict(id, { recoveryMargin: 49.9 }));
    expect(e.nextAction.text).not.toMatch(RAISES);
    expect(e.nextAction.substituted).toBe(getCharacterPresentation(id).nextRunRaises === true);
  });

  it('R이 정확히 50이면 인물 문장 그대로다(스펙은 50 미만)', () => {
    const e = explainRunner(BASE, verdict('aphrodite', { recoveryMargin: 50 }));
    expect(e.nextAction).toEqual({ text: getCharacterPresentation('aphrodite').nextRun, substituted: false });
  });

  it('어떤 다음 행동도 거리 숫자를 주거나 횟수를 늘리지 않는다(최장거리·주당 +1회 상한)', () => {
    const all = [...PRESENTATION_IDS.map((id) => getCharacterPresentation(id).nextRun), STEADY_NEXT_RUN];
    all.forEach((text) => expect(text).not.toMatch(/\d+(\.\d+)?\s*km|회 더|한 번 더|하루 더/));
  });
});

describe('explainRunner — 합성 러너 1만 명 전부', () => {
  const runners = syntheticRunners();
  const results = runners.map((snapshot) => {
    const analysis = analyzeRunner(snapshot);
    return { snapshot, analysis, explanation: explainRunner(snapshot, analysis) };
  });

  it('근거는 서로 다른 계열 두 개이고 둘 다 실제 숫자를 담는다', () => {
    const bad = results.filter(({ explanation: { evidence } }) =>
      evidence[0].family === evidence[1].family || !evidence.every((e) => /\d/.test(e.text) && !/\d/.test(e.hiddenText.replace('28일', ''))));
    expect(bad).toEqual([]);
  });

  it('강점·맹점·다음 행동이 하나씩 있다', () => {
    expect(results.filter(({ explanation: e }) => !e.strength.text || !e.watchout.text || !e.nextAction.text)).toEqual([]);
  });

  it('회복 여유 50 미만에서는 늘리는 다음 행동이 하나도 없다', () => {
    const low = results.filter(({ analysis }) => analysis.traits.recoveryMargin < 50);
    expect(low.length).toBeGreaterThan(100);
    expect(low.filter(({ explanation }) => RAISES.test(explanation.nextAction.text))).toEqual([]);
  });
});
