import { describe, expect, it } from "vitest";
import { REEL_FUEL_STOPS, MAP_START, MAP_END, reelProgress, fuelStopAt } from "../../../../video/saturday-teaser/src/sonkeechung-reel-plan";

describe("course reel map and fueling sync", () => {
  it("holds the map exactly at every gel example while the corresponding cue is visible", () => {
    expect(REEL_FUEL_STOPS).toHaveLength(8);
    for (const stop of REEL_FUEL_STOPS) {
      for (const offset of [0.01, 0.9, 1.79]) {
        expect(reelProgress(stop.start + offset)).toBeCloseTo(stop.minutes / 240, 8);
        expect(fuelStopAt(stop.start + offset)?.minutes).toBe(stop.minutes);
      }
    }
  });
  it("moves monotonically between the actual endpoints and never overlaps gel cues", () => {
    expect(reelProgress(0)).toBe(0);
    expect(reelProgress(MAP_START)).toBe(0);
    expect(reelProgress(MAP_END)).toBe(1);
    expect(reelProgress(52)).toBe(1);
    let last = 0;
    for (let frame = 0; frame < 1560; frame++) {
      const current = reelProgress(frame / 30);
      expect(current).toBeGreaterThanOrEqual(last - 1e-9);
      expect(current).toBeLessThanOrEqual(1);
      last = current;
    }
    expect(REEL_FUEL_STOPS.every((stop, i) => stop.end < (REEL_FUEL_STOPS[i + 1]?.start ?? MAP_END))).toBe(true);
  });
});
