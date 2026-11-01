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

// An evenly paced example, not a manufacturer's dosing instruction.
// No gel is scheduled within the final ten minutes.
export function makeFuelPlan(finishMinutes: number, gelType: GelType) {
  const gel = AMINO_VITAL_GELS[gelType];
  if (!Number.isFinite(finishMinutes) || finishMinutes < 180 || finishMinutes > 300) {
    return [];
  }
  const stops: { minutes: number; km: number; carbohydrateG: number }[] = [];
  for (let minutes = 20; minutes <= finishMinutes - 10; minutes += gel.intervalMinutes) {
    stops.push({
      minutes,
      km: minutes / finishMinutes * RACE_DISTANCE_KM,
      carbohydrateG: gel.carbohydrateG,
    });
  }
  return stops;
}

export function raceClock(elapsedMinutes: number) {
  const totalMinutes = 10 * 60 + elapsedMinutes;
  return `${Math.floor(totalMinutes / 60).toString().padStart(2, "0")}:${(totalMinutes % 60).toString().padStart(2, "0")}`;
}
