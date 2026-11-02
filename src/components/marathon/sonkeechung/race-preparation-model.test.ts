import { describe, expect, it } from "vitest";
import weather from "./race-weather-reference.json";
import { distanceAtElapsed, formatPace, formatRaceTime, makeFuelPlan, makePacePlan, raceClock, RACE_DISTANCE_KM } from "./race-preparation-model";

describe("race preparation calculations", () => {
  it("covers the full marathon without gaps and reaches each selected finish target", () => {
    for (const minutes of [180, 210, 240, 270, 300]) {
      for (const strategy of ["steady", "settle"] as const) {
        const plan = makePacePlan(minutes, strategy);
        expect(plan[0].fromKm).toBe(0);
        expect(plan.at(-1)?.toKm).toBe(RACE_DISTANCE_KM);
        expect(plan.at(-1)?.elapsedSeconds).toBe(minutes * 60);
        let accumulated = 0;
        plan.forEach((stage, index) => {
          if (index) {
            expect(stage.fromKm).toBe(plan[index - 1].toKm);
            expect(stage.startSeconds).toBeCloseTo(plan[index - 1].elapsedSeconds, 8);
          }
          expect(stage.paceSecondsPerKm).toBeGreaterThan(0);
          accumulated += (stage.toKm - stage.fromKm) * stage.paceSecondsPerKm;
          expect(stage.elapsedSeconds).toBeCloseTo(accumulated, 8);
          expect(distanceAtElapsed(plan, stage.elapsedSeconds)).toBeCloseTo(stage.toKm, 8);
        });
        expect(accumulated).toBeCloseTo(minutes * 60, 8);
      }
    }
  });
  it("provides correct half and finish splits and normalises the opening allowance", () => {
    const steady = makePacePlan(240);
    const settle = makePacePlan(240, "settle");
    expect(steady[1].elapsedSeconds).toBeCloseTo(7200, 8);
    expect(settle[0].elapsedSeconds - steady[0].elapsedSeconds).toBeCloseTo(25, 8);
    expect(settle[1].paceSecondsPerKm).toBeLessThan(steady[1].paceSecondsPerKm);
    expect(formatRaceTime(steady[1].elapsedSeconds)).toBe("2:00:00");
    expect(formatRaceTime(steady.at(-1)!.elapsedSeconds)).toBe("4:00:00");
    expect(formatPace(359.7)).toBe("6:00");
    expect(formatRaceTime(3599.7)).toBe("1:00:00");
    expect(makePacePlan(Number.NaN)).toEqual([]);
    expect(makePacePlan(0)).toEqual([]);
    expect(distanceAtElapsed([], 1200)).toBe(0);
    expect(distanceAtElapsed(steady, -10)).toBe(0);
    expect(distanceAtElapsed(steady, Number.NaN)).toBe(0);
    expect(distanceAtElapsed(steady, 20000)).toBe(RACE_DISTANCE_KM);
  });
  it("moves gel positions with the pace strategy while preserving intake times and totals", () => {
    for (const minutes of [180, 210, 240, 270, 300]) {
      for (const gel of ["shot45", "pouch130"] as const) {
        const steady = makeFuelPlan(minutes, gel);
        const settle = makeFuelPlan(minutes, gel, "settle");
        expect(settle.map((stop) => stop.minutes)).toEqual(steady.map((stop) => stop.minutes));
        expect(settle.map((stop) => stop.carbohydrateG)).toEqual(steady.map((stop) => stop.carbohydrateG));
        expect(settle[0].km).toBeLessThan(steady[0].km);
        const pace = makePacePlan(minutes, "settle");
        for (const stop of settle) {
          const stage = pace.find((entry) => stop.km <= entry.toKm)!;
          const seconds = stage.startSeconds + (stop.km - stage.fromKm) * stage.paceSecondsPerKm;
          expect(seconds).toBeCloseTo(stop.minutes * 60, 8);
        }
      }
    }
  });
  it("converts time to the matching course fraction for either finish target", () => {
    const fourHours = makeFuelPlan(240, "shot45");
    const threeHours = makeFuelPlan(180, "shot45");
    expect(fourHours[0].km).toBeCloseTo(3.51625);
    expect(threeHours[0].km).toBeCloseTo(4.68833);
    expect(fourHours).toHaveLength(8);
    expect(fourHours.reduce((sum, stop) => sum + stop.carbohydrateG, 0)).toBeCloseTo(195.2);
    expect(fourHours.every((stop) => stop.km < RACE_DISTANCE_KM && stop.minutes <= 230)).toBe(true);
    expect(raceClock(fourHours[0].minutes)).toBe("10:20");
    expect(raceClock(fourHours[7].minutes)).toBe("13:50");
  });
  it("recalculates timing and totals for the larger 130g pouch", () => {
    const plan = makeFuelPlan(240, "pouch130");
    expect(plan.map((stop) => stop.minutes)).toEqual([20, 70, 120, 170, 220]);
    expect(plan.reduce((sum, stop) => sum + stop.carbohydrateG, 0)).toBe(205);
    expect(makeFuelPlan(Number.NaN, "shot45")).toEqual([]);
    expect(makeFuelPlan(0, "shot45")).toEqual([]);
  });
  it("uses all fifty historical observation days without treating missing values as zero", () => {
    expect(weather.samples).toHaveLength(50);
    expect(new Set(weather.samples.map(([year, day]) => `${year}-${day}`)).size).toBe(50);
    expect(weather.samples.every(([year, day, low, high]) => year >= 2021 && year <= 2025 && day >= 11 && day <= 20 && Number.isFinite(low) && Number.isFinite(high) && low <= high)).toBe(true);
    const mean = (column: number) => Number((weather.samples.reduce((sum, row) => sum + row[column], 0) / 50).toFixed(1));
    expect(mean(2)).toBe(weather.meanMinimumC);
    expect(mean(3)).toBe(weather.meanMaximumC);
  });
});
