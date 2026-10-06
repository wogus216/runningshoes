import type { RaceGoal, RunnerGoal, RunnerSnapshot28d } from '@/types/runner-analysis';

// 스펙 분포 검증의 '현실 범위 합성 프로필'(스펙 488-494행). 시드를 고정해 같은 1만 개가 늘 다시 나온다.
// 분포 가정은 출처 없는 추정이다 — 한국 러너 실측이 아니다. 바꾸면 docs/running-card-s4-report.md 의 분포 표도 다시 낸다.
//   - 주당 횟수: 1회 10% · 2회 22% · 3회 28% · 4회 20% · 5회 12% · 6회 6% · 7회 2%. 28일 횟수 = 주당 × 4 ± 1.5(1–28회)
//   - 1회 평균 거리: 로그정규, 중앙값 7km · σ 0.35(2.5–25km). 총거리 = 횟수 × 1회 평균(0.1km 단위)
//   - 최장거리: 1회 평균 × 1.05–2.4 균등(총거리 이하). 1회만 달렸으면 총거리
//   - 강한 훈련: 35%는 0회, 나머지는 횟수의 5–40% 균등(0–6회, 횟수 이하)
//   - 평균 페이스: 4:30–7:00/km 균등
//   - 목표: 습관 22% · 지구력 18% · 기록 20% · 대회 25% · 건강과 재미 15%
//   - 요일: 70%가 고른다. 개수 = 주당 횟수 ± 1(1–7개), 위치는 무작위
//   - 목표 기록: 대회·기록 목표의 절반. 거리 5km 20% · 10km 30% · 하프 30% · 풀 20%, 목표 페이스 = 평균 페이스 × 0.88–1.02
export const SYNTHETIC_SEED = 20261006;

// mulberry32
function prng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function syntheticRunners(count = 10000, seed = SYNTHETIC_SEED): RunnerSnapshot28d[] {
  const random = prng(seed);
  const uniform = (low: number, high: number) => low + (high - low) * random();
  const pick = <T,>(weighted: ReadonlyArray<readonly [T, number]>): T => {
    let r = random() * weighted.reduce((sum, [, w]) => sum + w, 0);
    for (const [value, w] of weighted) { r -= w; if (r < 0) return value; }
    return weighted[weighted.length - 1][0];
  };
  const normal = () => Math.sqrt(-2 * Math.log(1 - random())) * Math.cos(2 * Math.PI * random());
  const clamp = (n: number, low: number, high: number) => Math.min(high, Math.max(low, n));
  const tenth = (n: number) => Math.round(n * 10) / 10;

  const runners: RunnerSnapshot28d[] = [];
  for (let i = 0; i < count; i++) {
    const weekly = pick([[1, 10], [2, 22], [3, 28], [4, 20], [5, 12], [6, 6], [7, 2]] as const);
    const runCount = clamp(Math.round(weekly * 4 + uniform(-1.5, 1.5)), 1, 28);
    const average = clamp(Math.exp(Math.log(7) + 0.35 * normal()), 2.5, 25);
    const totalDistanceKm = Math.max(0.1, tenth(runCount * average));
    const longestRunKm = runCount === 1
      ? totalDistanceKm
      : clamp(tenth(average * uniform(1.05, 2.4)), Math.ceil(totalDistanceKm / runCount * 10) / 10, totalDistanceKm);
    const qualitySessionCount = random() < 0.35 ? 0 : clamp(Math.round(runCount * uniform(0.05, 0.4)), 0, Math.min(6, runCount));
    const averagePaceSecPerKm = Math.round(uniform(270, 420));
    const goal = pick<RunnerGoal>([['habit', 22], ['endurance', 18], ['record', 20], ['race', 25], ['health_fun', 15]]);
    let usualWeekdays: number[] | undefined;
    if (random() < 0.7) {
      const n = clamp(weekly + Math.round(uniform(-1, 1)), 1, 7);
      const days = [0, 1, 2, 3, 4, 5, 6];
      for (let k = days.length - 1; k > 0; k--) { const j = Math.floor(random() * (k + 1)); [days[k], days[j]] = [days[j], days[k]]; }
      usualWeekdays = days.slice(0, n).sort((a, b) => a - b);
    }
    let raceGoal: RaceGoal | undefined;
    if ((goal === 'race' || goal === 'record') && random() < 0.5) {
      const distanceKm = pick([[5, 20], [10, 30], [21.0975, 30], [42.195, 20]] as const);
      raceGoal = { distanceKm, targetTimeMinutes: Math.round(distanceKm * averagePaceSecPerKm * uniform(0.88, 1.02) / 60) };
    }
    runners.push({
      windowDays: 28,
      totalDistanceKm,
      runCount,
      averagePaceSecPerKm,
      longestRunKm,
      qualitySessionCount,
      goal,
      ...(usualWeekdays && { usualWeekdays }),
      ...(raceGoal && { raceGoal }),
    });
  }
  return runners;
}
