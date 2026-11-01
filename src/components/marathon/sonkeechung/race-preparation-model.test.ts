import { describe, expect, it } from "vitest";
import weather from "./race-weather-reference.json";
import { makeFuelPlan, raceClock, RACE_DISTANCE_KM } from "./race-preparation-model";

describe("race preparation calculations", () => {
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
