import type { RaceGoal, RunnerGoal, RunnerSnapshot28d } from '@/types/runner-analysis';

// 3D 입력 흐름(medal3d-flow.js)의 values. 숫자 칸은 입력창 문자열 그대로 온다.
// 메달 그리기용 liveRec()는 빈칸을 0·'habit'·마지막 유효값으로 메우므로 넘기지 않는다.
export type FlowValues = {
  distance: string;
  count: string;
  minutes: string;
  seconds: string;
  longest: string;
  hard: number | null;
  goal: string | null;
  days: number[]; // 0 = 월 … 6 = 일
};

// sample = 예시값 그대로 · empty = 아직 안 고름 · edited = 직접 입력 · confirmed = 다음으로 넘기며 확정
// ('이 숫자가 내 기록이 맞아요'로 확정한 예시값도 confirmed다)
export type FlowOrigin = 'sample' | 'empty' | 'edited' | 'confirmed';

export type FlowOrigins = Record<'distance' | 'count' | 'pace' | 'longest' | 'hard' | 'goal' | 'days', FlowOrigin>;

export type FlowInput = {
  values: FlowValues;
  origins: FlowOrigins;
  raceGoal?: RaceGoal | null;
};

export type FlowField = keyof FlowOrigins | 'raceGoal';

export type FlowSnapshotResult =
  | { ok: true; snapshot: RunnerSnapshot28d }
  | { ok: false; reason: 'sample' | 'invalid'; fields: FlowField[] };

const RECORD_FIELDS = ['distance', 'count', 'pace', 'longest'] as const;
const GOALS: readonly RunnerGoal[] = ['habit', 'endurance', 'record', 'race', 'health_fun'];
// 목표 거리·기록은 '대회'·'기록'에서만 받는다. 목표를 바꾼 뒤 남은 값은 버린다.
const RACE_GOAL_GOALS: readonly RunnerGoal[] = ['race', 'record'];
// 칩 '6회 이상'이 6이다.
const HARD_MAX = 6;
const DECIMAL = /^(?:\d+(?:\.\d*)?|\.\d+)$/;
const DIGITS = /^\d+$/;

function parse(raw: string, pattern: RegExp) {
  const text = raw.trim();
  return pattern.test(text) ? Number(text) : Number.NaN;
}

const isGoal = (goal: string | null): goal is RunnerGoal => GOALS.includes(goal as RunnerGoal);

export function snapshotFromFlowInput({ values, origins, raceGoal }: FlowInput): FlowSnapshotResult {
  const invalid: FlowField[] = [];

  const distance = parse(values.distance, DECIMAL);
  const distanceOk = Number.isFinite(distance) && distance > 0;
  if (!distanceOk) invalid.push('distance');

  const count = parse(values.count, DECIMAL);
  const countOk = Number.isInteger(count) && count >= 1;
  if (!countOk) invalid.push('count');

  // 총 시간으로 입력해도 흐름이 분·초로 다시 써 넣는다. 분 2–12, 초 0–59 = 120–779초.
  const minutes = parse(values.minutes, DIGITS);
  const seconds = parse(values.seconds, DIGITS);
  if (!(minutes >= 2 && minutes <= 12 && seconds >= 0 && seconds <= 59)) invalid.push('pace');

  // 가장 긴 한 번은 평균 한 번보다 짧을 수 없다. 0.05km는 소수 입력 오차.
  const longest = parse(values.longest, DECIMAL);
  const longestOk = Number.isFinite(longest) && longest > 0
    && (!distanceOk || longest <= distance)
    && (!distanceOk || !countOk || longest >= distance / count - 0.05);
  if (!longestOk) invalid.push('longest');

  const { hard } = values;
  const hardOk = hard !== null && Number.isInteger(hard) && hard >= 0 && hard <= HARD_MAX && (!countOk || hard <= count);
  if (!hardOk) invalid.push('hard');

  const { goal } = values;
  if (!isGoal(goal)) invalid.push('goal');

  if (!values.days.every((day) => Number.isInteger(day) && day >= 0 && day <= 6)) invalid.push('days');

  const usedRaceGoal = raceGoal && isGoal(goal) && RACE_GOAL_GOALS.includes(goal) ? raceGoal : undefined;
  if (usedRaceGoal && !(
    Number.isFinite(usedRaceGoal.distanceKm) && usedRaceGoal.distanceKm > 0
    && Number.isFinite(usedRaceGoal.targetTimeMinutes) && usedRaceGoal.targetTimeMinutes > 0
  )) invalid.push('raceGoal');

  if (invalid.length > 0 || hard === null || !isGoal(goal)) return { ok: false, reason: 'invalid', fields: invalid };

  // D1: 예시값이 남은 기록은 확정하기 전까지 판정하지 않는다.
  const samples = RECORD_FIELDS.filter((field) => origins[field] === 'sample');
  if (samples.length > 0) return { ok: false, reason: 'sample', fields: samples };

  // 엔진 요일은 0 = 일이다.
  const usualWeekdays = Array.from(new Set(values.days.map((day) => (day + 1) % 7))).sort((a, b) => a - b);

  return {
    ok: true,
    snapshot: {
      windowDays: 28,
      totalDistanceKm: distance,
      runCount: count,
      averagePaceSecPerKm: minutes * 60 + seconds,
      longestRunKm: longest,
      qualitySessionCount: hard,
      goal,
      ...(usualWeekdays.length > 0 && { usualWeekdays }),
      ...(usedRaceGoal && { raceGoal: { ...usedRaceGoal } }),
    },
  };
}
