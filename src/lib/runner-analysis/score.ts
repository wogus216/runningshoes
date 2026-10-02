import type {
  PublicRunnerScores,
  RunnerSnapshot28d,
  RunnerTraits,
} from '@/types/runner-analysis';

type Anchor = readonly [input: number, score: number];

const DISTANCE_ANCHORS = [[0, 0], [40, 25], [80, 50], [120, 70], [160, 85], [220, 100]] as const;
const LONGEST_RUN_ANCHORS = [[0, 0], [5, 15], [10, 35], [21.1, 75], [30, 95], [35, 100]] as const;
const AVERAGE_RUN_ANCHORS = [[0, 0], [3, 10], [8, 45], [15, 80], [22, 100]] as const;
const RUN_COUNT_ANCHORS = [[0, 0], [4, 20], [8, 45], [12, 70], [16, 90], [20, 100]] as const;
const QUALITY_COUNT_ANCHORS = [[0, 0], [1, 25], [2, 45], [4, 75], [6, 100]] as const;
const QUALITY_RATIO_ANCHORS = [[0, 0], [0.1, 30], [0.2, 60], [0.3, 85], [0.4, 100]] as const;
const GAP_ANCHORS = [[0, 0], [1, 35], [2, 75], [3, 90], [4, 100]] as const;
const TARGET_PRESSURE_ANCHORS = [[1, 100], [1.05, 85], [1.15, 55], [1.3, 25], [1.5, 0]] as const;

export function clampScore(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function piecewise(value: number, anchors: readonly Anchor[]) {
  if (anchors.length === 0) return 0;
  if (value <= anchors[0][0]) return anchors[0][1];

  for (let index = 1; index < anchors.length; index += 1) {
    const [rightInput, rightScore] = anchors[index];
    const [leftInput, leftScore] = anchors[index - 1];
    if (value <= rightInput) {
      const progress = (value - leftInput) / (rightInput - leftInput);
      return clampScore(leftScore + (rightScore - leftScore) * progress);
    }
  }

  return anchors[anchors.length - 1][1];
}

function uniqueValidWeekdays(weekdays: number[] | undefined) {
  return Array.from(new Set((weekdays ?? []).filter((day) => Number.isInteger(day) && day >= 0 && day <= 6)))
    .sort((a, b) => a - b);
}

// 요일 하나는 간격 7일이다. 간격의 합은 늘 7이라 평균만 보면 요일 위치가 사라진다.
function cyclicGaps(weekdays: number[]) {
  if (weekdays.length === 0) return null;
  return weekdays.map((day, index) => {
    const next = weekdays[(index + 1) % weekdays.length];
    return index === weekdays.length - 1 ? next + 7 - day : next - day;
  });
}

// 간격마다 점수를 매긴 뒤 평균한다. 이틀 연속은 평균에 묻히지 않고 짧은 간격으로 남는다.
function gapScore(gaps: number[]) {
  return gaps.reduce((sum, gap) => sum + piecewise(gap, GAP_ANCHORS), 0) / gaps.length;
}

function targetPressure(snapshot: RunnerSnapshot28d) {
  const raceGoal = snapshot.raceGoal;
  if (!raceGoal || raceGoal.distanceKm <= 0 || raceGoal.targetTimeMinutes <= 0) return 50;

  const targetPace = raceGoal.targetTimeMinutes * 60 / raceGoal.distanceKm;
  if (targetPace < 150 || targetPace > 720) return 50;
  const ratio = snapshot.averagePaceSecPerKm / targetPace;
  if (ratio <= 1) return 100;
  return piecewise(ratio, TARGET_PRESSURE_ANCHORS);
}

export function validateSnapshot(snapshot: RunnerSnapshot28d) {
  const errors: string[] = [];
  if (snapshot.windowDays !== 28) errors.push('windowDays must be 28');
  // NaN은 아래 비교를 전부 통과하고 piecewise()에서 마지막 앵커 점수가 된다. 여기서 막는다.
  const numbers = {
    totalDistanceKm: snapshot.totalDistanceKm,
    runCount: snapshot.runCount,
    averagePaceSecPerKm: snapshot.averagePaceSecPerKm,
    longestRunKm: snapshot.longestRunKm,
    qualitySessionCount: snapshot.qualitySessionCount,
    ...(snapshot.raceGoal && {
      'raceGoal.distanceKm': snapshot.raceGoal.distanceKm,
      'raceGoal.targetTimeMinutes': snapshot.raceGoal.targetTimeMinutes,
    }),
  };
  for (const [field, value] of Object.entries(numbers)) {
    if (!Number.isFinite(value)) errors.push(`${field} must be a finite number`);
  }
  if (snapshot.totalDistanceKm <= 0) errors.push('totalDistanceKm must be greater than 0');
  if (snapshot.runCount <= 0) errors.push('runCount must be greater than 0');
  if (snapshot.averagePaceSecPerKm <= 0) errors.push('averagePaceSecPerKm must be greater than 0');
  if (snapshot.longestRunKm <= 0 || snapshot.longestRunKm > snapshot.totalDistanceKm) {
    errors.push('longestRunKm must be greater than 0 and no greater than totalDistanceKm');
  }
  if (snapshot.qualitySessionCount < 0 || snapshot.qualitySessionCount > snapshot.runCount) {
    errors.push('qualitySessionCount must be between 0 and runCount');
  }
  return errors;
}

export function scoreRunner(snapshot: RunnerSnapshot28d) {
  const errors = validateSnapshot(snapshot);
  if (errors.length > 0) throw new Error(errors.join('; '));

  const averageRunKm = snapshot.totalDistanceKm / snapshot.runCount;
  const distanceScore = piecewise(snapshot.totalDistanceKm, DISTANCE_ANCHORS);
  const longestRunScore = piecewise(snapshot.longestRunKm, LONGEST_RUN_ANCHORS);
  const averageRunScore = piecewise(averageRunKm, AVERAGE_RUN_ANCHORS);
  const runCountScore = piecewise(snapshot.runCount, RUN_COUNT_ANCHORS);
  const qualityCountScore = piecewise(snapshot.qualitySessionCount, QUALITY_COUNT_ANCHORS);
  const qualityRatioScore = piecewise(snapshot.qualitySessionCount / snapshot.runCount, QUALITY_RATIO_ANCHORS);

  const endurance = distanceScore * 0.45 + longestRunScore * 0.3 + averageRunScore * 0.15 + runCountScore * 0.1;
  const stimulus = qualityCountScore * 0.4 + longestRunScore * 0.3 + averageRunScore * 0.2 + targetPressure(snapshot) * 0.1;

  const fallbacksUsed: string[] = [];
  const weekdays = uniqueValidWeekdays(snapshot.usualWeekdays);
  const gaps = cyclicGaps(weekdays);
  let generalGapScore: number;
  let recoveryCap = 70;
  let consistency = 50;

  if (gaps !== null) {
    generalGapScore = gapScore(gaps);
    recoveryCap = 85;
    consistency = 75;
    fallbacksUsed.push('usualWeekdaysForIntervals');
  } else {
    // 일정 정보가 없으면 28일에 고르게 뛴 것으로 본다(스펙 '선택값을 건너뛴 경우'). R 상한 70은 그대로.
    generalGapScore = piecewise(snapshot.windowDays / snapshot.runCount, GAP_ANCHORS);
    fallbacksUsed.push('runCountIntervals', 'neutralConsistency');
  }
  // 장거리가 어느 요일인지 모르므로 평균 간격 점수를 쓴다.
  const longRunGapScore = generalGapScore;

  const qualityGapScore = snapshot.qualitySessionCount === 0 ? 100 : generalGapScore;
  const loadMargin = clampScore(100 - averageRunScore * 0.5 - distanceScore * 0.25);
  const recoveryMargin = Math.min(
    recoveryCap,
    generalGapScore * 0.45 + longRunGapScore * 0.25 + qualityGapScore * 0.2 + loadMargin * 0.1,
  );
  const longRunAffinity = longestRunScore * 0.6 + averageRunScore * 0.4;

  const traits: RunnerTraits = {
    endurance: clampScore(endurance),
    stimulus: clampScore(stimulus),
    recoveryMargin: clampScore(recoveryMargin),
    consistency: clampScore(consistency),
    longRunAffinity: clampScore(longRunAffinity),
    qualityAffinity: clampScore(qualityRatioScore),
  };

  const publicScores: PublicRunnerScores = {
    endurance: Math.round(traits.endurance),
    stimulus: Math.round(traits.stimulus),
    recoveryMargin: Math.round(traits.recoveryMargin),
  };

  return { traits, publicScores, fallbacksUsed };
}
