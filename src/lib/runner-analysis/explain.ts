import type { PublicRunnerScores, RunnerAnalysis, RunnerSnapshot28d, RunnerTraits } from '@/types/runner-analysis';
import { leadAxisOf, PUBLIC_AXES } from './presentation';

// 28일 집계로 확인되는 내용만 설명한다. 러닝별 날짜·강도·이전 기간 변화는 추측하지 않는다.
export type PublicAxis = keyof PublicRunnerScores;
type Trait = keyof RunnerTraits;
export type RunnerCopy = { text: string; hiddenText: string };
export type RunnerNote = RunnerCopy & { title: string; shortText: string };
export type RunnerEvidence = RunnerCopy & { family: string; interpretation: string };
export type RunnerScoreInsight = {
  axis: PublicAxis;
  label: string;
  value: number;
  lead: boolean;
  summary: string;
  detail: string;
};
export type RunnerExplanation = {
  lead: { axis: PublicAxis; value: number };
  introduction: RunnerCopy;
  shareIntroduction: RunnerCopy;
  evidence: [RunnerEvidence, RunnerEvidence];
  scoreInsights: RunnerScoreInsight[];
  strength: RunnerNote;
  watchout: RunnerNote;
  nextAction: RunnerNote;
};
export type RunnerShareAnalysis = {
  introduction: string;
  scores: Array<{ label: string; value: number; lead: boolean; summary: string }>;
  strength: string;
  watchout: string;
};

const GOALS = { habit: '습관', endurance: '지구력', record: '기록 향상', race: '대회', health_fun: '건강과 재미' } as const;
const GOAL_INTROS: Record<RunnerSnapshot28d['goal'], string> = {
  habit: '습관이 목표인 만큼, 달린 횟수와 생활 속에 남길 러닝의 자리를 함께 살펴봐요.',
  endurance: '지구력이 목표인 만큼, 쌓은 총거리와 길게 이어간 러닝을 함께 살펴봐요.',
  record: '기록 향상이 목표인 만큼, 강한 훈련과 거리에서 생기는 자극을 함께 살펴봐요.',
  race: '대회가 목표인 만큼, 거리 경험과 훈련 사이 여백을 함께 살펴봐요.',
  health_fun: '건강과 재미가 목표인 만큼, 점수를 높이는 것보다 즐겁게 이어갈 방식을 살펴봐요.',
};
const GOAL_SHORT = {
  habit: '생활 속 러닝 습관을 향해.', endurance: '긴 호흡으로 달리는 경험을 향해.', record: '나의 다음 기록을 향해.', race: '대회라는 목표를 향해.', health_fun: '건강과 달리는 즐거움을 향해.',
};
const n = (value: number) => value.toLocaleString('ko-KR', { maximumFractionDigits: 1 });
const hardText = (count: number) => count >= 6 ? '6회 이상' : `${count}회`;
const note = (title: string, text: string, hiddenText: string, shortText: string): RunnerNote => ({ title, text, hiddenText, shortText });

function scheduleOf(s: RunnerSnapshot28d) {
  const days = Array.from(new Set((s.usualWeekdays ?? []).filter(d => Number.isInteger(d) && d >= 0 && d <= 6))).sort((a, b) => (a + 6) % 7 - (b + 6) % 7);
  const gaps = days.map((day, i) => (days[(i + 1) % days.length] - day + 7) % 7 || 7);
  return { days, gaps, consecutive: gaps.includes(1) };
}

function recordEvidence(s: RunnerSnapshot28d, a: RunnerAnalysis): RunnerEvidence {
  // 규칙성은 요일 유무에 따른 상수라 판정 설명의 근거로 쓰지 않는다.
  const traits: Trait[] = ['endurance', 'stimulus', 'recoveryMargin', 'longRunAffinity', 'qualityAffinity'];
  const closest = traits.reduce((best, t) => Math.abs(a.traits[t] - a.match.character.traits[t]) < Math.abs(a.traits[best] - a.match.character.traits[best]) ? t : best);
  const name = a.match.character.name;
  const average = s.totalDistanceKm / s.runCount;
  if (closest === 'qualityAffinity' || closest === 'stimulus') {
    return {
      family: 'quality', text: `${s.runCount}회 중 강한 훈련 ${hardText(s.qualitySessionCount)}`,
      hiddenText: s.qualitySessionCount === 0 ? '강한 훈련을 표시하지 않은 기록' : '강한 훈련을 포함한 기록',
      interpretation: `${name}의 유형 설정과 비교한 기록 특성 중 ${closest === 'stimulus' ? '훈련 자극' : '강한 훈련의 비중'}이 가장 가까워요. 자극 점수에는 긴 러닝도 반영돼요.`,
    };
  }
  if (closest === 'recoveryMargin') {
    const { days, gaps } = scheduleOf(s);
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    return {
      family: 'interval',
      text: days.length ? `선택한 요일 ${days.map(d => dayNames[d]).join('·')} · 간격 ${gaps.join('·')}일` : `28일에 ${s.runCount}회 · 고르게 나누면 약 ${n(28 / s.runCount)}일 간격`,
      hiddenText: days.length ? '선택한 요일로 살펴본 훈련 여백' : '달린 횟수로 어림한 훈련 여백',
      interpretation: `${name}의 유형 설정과 비교한 기록 특성 중 회복 여유가 가장 가까워요. ${days.length ? '선택한 요일이 반복된다고 가정한 값이에요.' : '실제 날짜가 없어 횟수로 간격을 어림했어요.'}`,
    };
  }
  return {
    family: closest === 'longRunAffinity' ? 'longRun' : 'distance',
    text: closest === 'longRunAffinity' ? `1회 평균 ${n(average)}km · 최장 ${n(s.longestRunKm)}km` : `28일 총 ${n(s.totalDistanceKm)}km · ${s.runCount}회`,
    hiddenText: closest === 'longRunAffinity' ? '평균 거리와 최장거리의 조합' : '총거리와 달린 횟수의 조합',
    interpretation: `${name}의 유형 설정과 비교한 기록 특성 중 ${closest === 'longRunAffinity' ? '장거리 성향' : '지구력'}이 가장 가까워요. ${s.runCount === 1 ? '이번에는 한 번의 러닝으로 만든 유형이에요.' : '절대적인 실력 등급이 아니라 거리 기록의 조합을 비교해요.'}`,
  };
}

function goalEvidence(s: RunnerSnapshot28d, a: RunnerAnalysis): RunnerEvidence {
  const c = a.match.character;
  const goalMix: RunnerSnapshot28d['goal'][] = s.goal === 'race' && s.raceGoal ? [s.goal, 'record'] : [s.goal];
  const matchedGoal = goalMix.find(goal => goal === c.primaryGoal || goal === c.secondaryGoal);
  const race = s.raceGoal;
  const target = race ? ` · ${n(race.distanceKm)}km ${n(race.targetTimeMinutes)}분 목표` : '';
  return {
    family: 'goal', text: `내가 고른 목표: ${GOALS[s.goal]}${target}`, hiddenText: `내가 고른 목표: ${GOALS[s.goal]}`,
    interpretation: matchedGoal
      ? `${c.name}에 설정된 목표 중에도 ‘${GOALS[matchedGoal]}’이 있어요. ${s.goal === 'race' && race ? '대회 목표 기록을 입력해 기록 향상 목적도 함께 반영했어요.' : '기록의 특성과 목표를 함께 비교해 이 인물을 골랐어요.'}`
      : `${c.name}의 대표 목표와는 차이가 있지만, 기록의 특성까지 합친 전체 비교에서 가장 가까웠어요. 목표만으로 인물이 정해지지는 않아요.`,
  };
}

function scoreInsights(s: RunnerSnapshot28d, a: RunnerAnalysis): RunnerScoreInsight[] {
  const average = s.totalDistanceKm / s.runCount;
  const { days, gaps, consecutive } = scheduleOf(s);
  const targetPace = s.raceGoal ? s.raceGoal.targetTimeMinutes * 60 / s.raceGoal.distanceKm : 0;
  const hasTarget = targetPace >= 150 && targetPace <= 720;
  const summaries: Record<PublicAxis, string> = {
    endurance: s.runCount === 1 ? '한 번의 거리 경험을 담은 점수예요.' : s.longestRunKm >= average * 1.5 ? '평균 거리보다 길게 달린 경험도 담겼어요.' : '총거리와 한 번에 달린 거리를 함께 봐요.',
    stimulus: s.qualitySessionCount === 0 ? '강한 훈련이 없어도 거리 자극은 담겨요.' : s.qualitySessionCount >= 6 ? '강한 훈련은 입력 구간의 상한으로 반영돼요.' : '강한 훈련과 거리 자극이 함께 담겼어요.',
    recoveryMargin: !days.length ? '요일 없이 횟수로 간격을 어림했어요.' : consecutive ? '선택한 요일에 연속으로 달리는 날이 있어요.' : '선택한 요일 사이에 쉬는 날이 있어요.',
  };
  const details: Record<PublicAxis, string> = {
    endurance: `총 ${n(s.totalDistanceKm)}km, 최장 ${n(s.longestRunKm)}km, 평균 ${n(average)}km, ${s.runCount}회를 함께 반영해요. 총거리 45%·최장거리 30%·평균 거리 15%·횟수 10%의 비중이에요. 횟수가 같아도 실제 달린 날의 분포는 알 수 없어요.`,
    stimulus: `강한 훈련 ${hardText(s.qualitySessionCount)}, 최장 ${n(s.longestRunKm)}km, 평균 ${n(average)}km를 반영해요. 강한 훈련 40%·최장거리 30%·평균 거리 20%·목표 페이스 관련 값 10%의 비중이에요. ${hasTarget ? '마지막 항목은 평균 페이스와 목표 페이스의 차이로 계산하며, 목표 달성 가능성을 뜻하지 않아요.' : '사용할 목표 페이스가 없어 마지막 항목은 중립값으로 계산했어요.'}${s.qualitySessionCount >= 6 ? ' ‘6회 이상’은 계산상 6회로 반영해 실제 횟수·비율을 확정할 수 없어요.' : ''}`,
    recoveryMargin: days.length
      ? `선택한 요일이 매주 반복된다고 가정하면 간격은 ${gaps.join('·')}일이에요. 이 간격과 거리 부담을 함께 보며 점수 상한은 85예요. 실제 강한 훈련·장거리 러닝을 한 날짜는 알 수 없어요.`
      : `28일을 ${s.runCount}회로 고르게 나눠 약 ${n(28 / s.runCount)}일 간격으로 가정했어요. 실제 일정 정보가 없어 점수 상한은 70이에요. 회복 상태나 매주 얼마나 규칙적이었는지를 측정한 값은 아니에요.`,
  };
  const lead = leadAxisOf(a.match.character.traits);
  return PUBLIC_AXES.map(([axis, label]) => ({ axis, label, value: a.publicScores[axis], lead: axis === lead, summary: summaries[axis], detail: details[axis] }));
}

function notesFor(s: RunnerSnapshot28d, a: RunnerAnalysis) {
  const average = s.totalDistanceKm / s.runCount;
  const { days, consecutive } = scheduleOf(s);
  let strength: RunnerNote;
  if (s.runCount === 1) {
    strength = note('비교할 출발점이 생겼어요', `${n(s.totalDistanceKm)}km의 러닝을 남겼어요. 다음 기록과 비교할 나만의 출발점이 생겼다는 의미가 있어요.`, '러닝 기록을 남겼어요. 다음 기록과 비교할 나만의 출발점이 생겼다는 의미가 있어요.', '다음 기록과 비교할 출발점을 남겼어요.');
  } else if (s.goal === 'habit' || s.goal === 'health_fun') {
    strength = note('러닝에 시간을 내왔어요', `지난 28일 동안 ${s.runCount}번 러닝에 시간을 냈어요. ${s.goal === 'habit' ? '습관을 만드는 목표에서 눈여겨볼 부분이에요.' : '건강과 재미라는 목표에 맞춰 돌아볼 활동의 기록이에요.'}`, `러닝에 시간을 낸 기록이 쌓였어요. ${s.goal === 'habit' ? '습관을 만드는 목표에서 눈여겨볼 부분이에요.' : '건강과 재미라는 목표에 맞춰 돌아볼 활동의 기록이에요.'}`, '내 목표를 위해 러닝에 시간을 내왔어요.');
  } else if ((s.goal === 'record' || s.goal === 'race') && s.qualitySessionCount > 0) {
    strength = note('목표를 위한 자극을 담았어요', `${s.runCount}회 중 ${hardText(s.qualitySessionCount)}를 강한 훈련으로 표시했어요. 거리 외에 훈련의 성격도 구분해 돌아볼 수 있어요.`, '강한 훈련을 포함했어요. 거리 외에 훈련의 성격도 구분해 돌아볼 수 있어요.', '거리 외에 강한 훈련의 경험도 담겼어요.');
  } else {
    strength = note('거리 경험을 쌓았어요', `평균 ${n(average)}km, 가장 길게는 ${n(s.longestRunKm)}km를 달렸어요. ${s.goal === 'endurance' ? '지구력이라는 목표를 거리 경험으로 돌아볼 수 있어요.' : s.goal === 'race' ? '대회를 생각할 때 참고할 나만의 거리 기록이에요.' : '기록 향상이라는 목표를 돌아볼 나만의 거리 기록이에요.'}`, '평균 거리와 최장거리에 달린 경험이 담겨 있어요. 내 목표를 거리 기록으로 돌아볼 수 있어요.', '내 목표를 돌아볼 거리 경험을 쌓았어요.');
  }

  // 살펴볼 점과 행동을 함께 고른다. 건강·재미 목적에 강한 훈련 부족을 단점으로 붙이지 않는다.
  let watchout: RunnerNote;
  let nextAction: RunnerNote;
  if (s.runCount === 1) {
    watchout = note('이번 결과는 한 번의 모습이에요', '러닝 한 번으로는 반복되는 스타일을 알기 어려워요. 이 유형은 이번 기록의 모습으로 읽어주세요.', '기록이 적어 반복되는 스타일을 알기 어려워요. 이 유형은 이번 기록의 모습으로 읽어주세요.', '적은 기록으로 만든 이번 러닝의 모습이에요.');
    nextAction = note('다음 기록에 느낌도 남기기', '다음에 달린 뒤 편했던 점을 한 줄 남겨보세요. 거리와 함께 비교할 나만의 기준이 생겨요.', '다음에 달린 뒤 편했던 점을 한 줄 남겨보세요. 거리와 함께 비교할 나만의 기준이 생겨요.', '다음 러닝 뒤 편했던 점을 남겨보세요.');
  } else if (a.traits.recoveryMargin < 50 || consecutive) {
    watchout = note('일정 사이 여백을 살펴봐요', consecutive ? '선택한 요일에 연속으로 달리는 날이 있어요. 그날들이 모두 강한 훈련이었다는 뜻은 아니니 실제 일정과 함께 봐주세요.' : '간격과 거리로 계산한 훈련 여백이 작은 쪽이에요. 몸이 회복되지 않았다는 뜻은 아니에요.', consecutive ? '선택한 요일에 연속 러닝이 있어요. 실제 강한 훈련 날짜는 따로 살펴봐야 해요.' : '간격과 거리로 본 훈련 여백이 작은 쪽이에요. 몸의 회복 상태를 뜻하지는 않아요.', consecutive ? '연속 러닝 날짜에 어떤 훈련을 했는지 살펴봐요.' : '거리와 일정 사이 여백을 함께 살펴봐요.');
    nextAction = note('다음 러닝은 여유 있게', '다음 러닝은 기록을 재촉하지 말고 편안한 호흡으로 마쳐보세요. 달린 뒤 느낌을 남겨 일정과 함께 돌아봐요.', '다음 러닝은 기록을 재촉하지 말고 편안한 호흡으로 마쳐보세요. 달린 뒤 느낌을 남겨 일정과 함께 돌아봐요.', '편안하게 달린 뒤 느낌을 남겨보세요.');
  } else if ((s.goal === 'record' || s.goal === 'race') && s.qualitySessionCount === 0) {
    watchout = note('목표와 훈련의 연결을 살펴봐요', `‘${GOALS[s.goal]}’이 목표이고 강한 훈련은 표시하지 않았어요. 이번 달이 어떤 목적의 기간이었는지 함께 보면 기록을 더 잘 읽을 수 있어요.`, `‘${GOALS[s.goal]}’이 목표이고 강한 훈련은 표시하지 않았어요. 이번 기간의 목적도 함께 돌아봐요.`, '목표와 이번 기간의 훈련 목적을 함께 돌아봐요.');
    nextAction = note('이번 기간의 목적을 적어보기', '기록 도전 준비였는지, 편하게 이어가는 기간이었는지 적어보세요. 다음 기록을 같은 맥락에서 비교할 수 있어요.', '기록 도전 준비였는지, 편하게 이어가는 기간이었는지 적어보세요. 다음 기록을 같은 맥락에서 비교할 수 있어요.', '이번 기간에 중요했던 러닝 목적을 적어보세요.');
  } else if (!days.length) {
    watchout = note('일정은 아직 빈칸이에요', '러닝 요일을 입력하지 않아 훈련 사이 간격은 횟수로 어림했어요. 실제로 몰아서 달렸는지는 이 결과에서 알 수 없어요.', '러닝 요일이 없어 훈련 사이 간격은 어림값이에요. 실제로 몰아서 달렸는지는 알 수 없어요.', '요일이 없어 훈련 간격은 어림값이에요.');
    nextAction = note('달린 날짜도 함께 남기기', '다음 러닝부터 날짜와 달린 뒤 느낌을 함께 남겨보세요. 나중에 거리뿐 아니라 일정의 배치도 돌아볼 수 있어요.', '다음 러닝부터 날짜와 달린 뒤 느낌을 함께 남겨보세요. 나중에 거리뿐 아니라 일정의 배치도 돌아볼 수 있어요.', '러닝 날짜와 달린 뒤 느낌을 함께 남겨보세요.');
  } else if (s.goal === 'health_fun' || s.goal === 'habit') {
    watchout = note('높은 점수가 목표는 아니에요', `‘${GOALS[s.goal]}’이 목표라면 강한 훈련이나 거리를 점수에 맞출 필요는 없어요. 다시 달리고 싶었던 순간도 내 기록의 일부예요.`, `‘${GOALS[s.goal]}’이 목표라면 훈련을 점수에 맞출 필요는 없어요. 다시 달리고 싶었던 순간도 돌아봐요.`, '내 목표에 맞는 즐거움도 함께 돌아봐요.');
    nextAction = note('다시 달리고 싶은 이유 남기기', '다음 러닝 뒤 좋았던 코스나 순간을 적어보세요. 내 생활에 남기고 싶은 러닝의 조건을 찾는 데 도움이 돼요.', '다음 러닝 뒤 좋았던 코스나 순간을 적어보세요. 내 생활에 남기고 싶은 러닝의 조건을 찾는 데 도움이 돼요.', '다음 러닝에서 좋았던 순간을 남겨보세요.');
  } else {
    watchout = note('합계에 담기지 않은 것도 있어요', `최장 ${n(s.longestRunKm)}km를 달린 날짜와 그 뒤의 일정은 알 수 없어요. 거리 경험과 실제 훈련 배치를 함께 돌아봐요.`, '가장 길게 달린 날과 그 뒤의 일정은 알 수 없어요. 거리 경험과 실제 훈련 배치를 함께 돌아봐요.', '긴 러닝 뒤 실제 일정도 함께 돌아봐요.');
    nextAction = note('기억에 남은 러닝 돌아보기', '가장 길게 달린 날 뒤에 어떻게 지냈는지 적어보세요. 다음 계획을 세울 때 거리와 일정의 관계를 함께 볼 수 있어요.', '가장 길게 달린 날 뒤에 어떻게 지냈는지 적어보세요. 다음 계획을 세울 때 거리와 일정의 관계를 함께 볼 수 있어요.', '가장 길게 달린 날 뒤의 일정을 돌아보세요.');
  }
  return { strength, watchout, nextAction };
}

export function explainRunner(s: RunnerSnapshot28d, a: RunnerAnalysis): RunnerExplanation {
  const average = s.totalDistanceKm / s.runCount;
  const record = s.runCount === 1
    ? `지난 28일에 ${n(s.totalDistanceKm)}km를 한 번 달렸어요. 이번 결과에는 그 러닝의 모습이 담겨 있어요.`
    : `지난 28일에 ${s.runCount}회, 총 ${n(s.totalDistanceKm)}km를 달렸어요. 한 번에 평균 ${n(average)}km, 가장 길게는 ${n(s.longestRunKm)}km를 이어갔어요.`;
  const hiddenRecord = s.runCount === 1 ? '이번에 남긴 러닝에서 나의 유형을 살펴봤어요.' : '달린 횟수와 거리, 가장 길게 이어간 경험에서 나의 유형을 살펴봤어요.';
  const lead = leadAxisOf(a.match.character.traits);
  return {
    lead: { axis: lead, value: a.publicScores[lead] },
    introduction: { text: `${record} ${GOAL_INTROS[s.goal]}`, hiddenText: `${hiddenRecord} ${GOAL_INTROS[s.goal]}` },
    shareIntroduction: {
      text: s.runCount === 1 ? `${n(s.totalDistanceKm)}km의 러닝에서 만난 나. ${GOAL_SHORT[s.goal]}` : `${s.runCount}회·${n(s.totalDistanceKm)}km, 평균 ${n(average)}km의 발걸음. ${GOAL_SHORT[s.goal]}`,
      hiddenText: `${s.qualitySessionCount > 0 ? '강한 훈련도 담긴 나의 러닝.' : '거리와 발걸음에 담긴 나의 러닝.'} ${GOAL_SHORT[s.goal]}`,
    },
    evidence: [recordEvidence(s, a), goalEvidence(s, a)],
    scoreInsights: scoreInsights(s, a),
    ...notesFor(s, a),
  };
}

// 공유 이미지는 검수 가능한 짧은 문구를 사용한다. 숨김 버전에는 원시 기록을 전달하지 않는다.
export function runnerShareAnalysis(e: RunnerExplanation, hideNumbers: boolean): RunnerShareAnalysis {
  return {
    introduction: hideNumbers ? e.shareIntroduction.hiddenText : e.shareIntroduction.text,
    scores: e.scoreInsights.map(({ label, value, lead, summary }) => ({ label, value, lead, summary })),
    strength: e.strength.shortText,
    watchout: e.watchout.shortText,
  };
}
