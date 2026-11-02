export const RACE_DISTANCE_KM = 42.195;

export const AMINO_VITAL_GELS = {
  shot45: {
    name: "아미노샷 퍼펙트에너지 45g",
    carbohydrateG: 24.4,
    intervalMinutes: 30,
    source: "https://ajinomoto.co.kr/default/product/aminovital/shot.php?sub=03_3&tit=03",
  },
  pouch130: {
    name: "퍼펙트에너지 130g",
    carbohydrateG: 41,
    intervalMinutes: 50,
    source: "https://www.ajinomoto.co.kr/default/product/aminovital/gel.php?sub=03_3&tit=03",
  },
} as const;

export type GelType = keyof typeof AMINO_VITAL_GELS;

export type PaceStrategy = "steady" | "settle";
export type PaceStage = {
  fromKm: number;
  toKm: number;
  title: string;
  advice: string;
  paceSecondsPerKm: number;
  startSeconds: number;
  elapsedSeconds: number;
};

const PACE_STAGES = [
  { fromKm: 0, toKm: 5, title: "출발 리듬 잡기", advice: "혼잡해도 추월을 서두르지 말고, 계획보다 빠르게 출발하지 마세요." },
  { fromKm: 5, toKm: 21.0975, title: "하프까지 일정하게", advice: "호흡과 리듬을 유지하세요. 오르막에서는 속도보다 힘의 여유를 확인하세요." },
  { fromKm: 21.0975, toKm: 30, title: "30km까지 여유 남기기", advice: "반환 후에도 보급 간격을 유지하세요. 늦어진 시간을 한 번에 만회하지 마세요." },
  { fromKm: 30, toKm: 35, title: "후반 컨디션 확인", advice: "피로가 쌓일 수 있는 구간입니다. 호흡과 다리 상태에 맞춰 목표를 조절하세요." },
  { fromKm: 35, toKm: 40, title: "남은 보급 확인", advice: "앞선 보급을 놓치지 않았는지 확인하세요. 오르막이나 맞바람에서는 무리한 가속을 피하세요." },
  { fromKm: 40, toKm: RACE_DISTANCE_KM, title: "임진각 피니시까지", advice: "남은 거리를 확인하고, 자세와 호흡을 유지하며 마무리하세요." },
];

// Flat-course arithmetic examples, not a terrain-optimised or individualised prescription.
// "settle" adds 5 s/km over the opening 5 km and distributes those 25 s
// across the remaining distance. Neither strategy predicts a runner's fatigue.
export function makePacePlan(finishMinutes: number, strategy: PaceStrategy = "steady"): PaceStage[] {
  if (!Number.isFinite(finishMinutes) || finishMinutes < 180 || finishMinutes > 300) return [];
  const totalSeconds = finishMinutes * 60;
  const average = totalSeconds / RACE_DISTANCE_KM;
  const openingPace = average + (strategy === "settle" ? 5 : 0);
  const remainingPace = (totalSeconds - openingPace * 5) / (RACE_DISTANCE_KM - 5);
  return PACE_STAGES.map((stage, index) => ({
    ...stage,
    paceSecondsPerKm: index === 0 ? openingPace : remainingPace,
    startSeconds: index === 0 ? 0 : openingPace * 5 + (stage.fromKm - 5) * remainingPace,
    elapsedSeconds: index === PACE_STAGES.length - 1 ? totalSeconds
      : index === 0 ? openingPace * 5 : openingPace * 5 + (stage.toKm - 5) * remainingPace,
  }));
}

export function distanceAtElapsed(plan: PaceStage[], elapsedSeconds: number) {
  if (!plan.length || !Number.isFinite(elapsedSeconds)) return 0;
  if (elapsedSeconds <= 0) return 0;
  const stage = plan.find((entry) => elapsedSeconds <= entry.elapsedSeconds);
  if (!stage) return RACE_DISTANCE_KM;
  return stage.fromKm + (elapsedSeconds - stage.startSeconds) / stage.paceSecondsPerKm;
}

export function formatPace(secondsPerKm: number) {
  const seconds = Math.round(secondsPerKm);
  return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, "0")}`;
}

export function formatRaceTime(elapsedSeconds: number) {
  const seconds = Math.round(elapsedSeconds);
  return `${Math.floor(seconds / 3600)}:${Math.floor(seconds % 3600 / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
}

// An example based on the selected pace plan, not a manufacturer's dosing instruction.
// No gel is scheduled within the final ten minutes.
export function makeFuelPlan(finishMinutes: number, gelType: GelType, strategy: PaceStrategy = "steady") {
  const gel = AMINO_VITAL_GELS[gelType];
  if (!Number.isFinite(finishMinutes) || finishMinutes < 180 || finishMinutes > 300) {
    return [];
  }
  const pacePlan = makePacePlan(finishMinutes, strategy);
  const stops: { minutes: number; km: number; carbohydrateG: number }[] = [];
  for (let minutes = 20; minutes <= finishMinutes - 10; minutes += gel.intervalMinutes) {
    stops.push({
      minutes,
      km: distanceAtElapsed(pacePlan, minutes * 60),
      carbohydrateG: gel.carbohydrateG,
    });
  }
  return stops;
}

export function raceClock(elapsedMinutes: number) {
  const totalMinutes = 10 * 60 + elapsedMinutes;
  return `${Math.floor(totalMinutes / 60).toString().padStart(2, "0")}:${(totalMinutes % 60).toString().padStart(2, "0")}`;
}
