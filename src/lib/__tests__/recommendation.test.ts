import { describe, expect, it } from "vitest";
import { recommendShoes, type UserProfile } from "@/lib/recommendation";
import { shoes } from "@/lib/data/shoes";

const baseProfile: UserProfile = {
  experience: "beginner",
  weeklyDistance: "low",
  purpose: "training",
  footArch: "normal",
  footWidth: "standard",
  injuries: [],
  budget: "low",
  preferredBrands: [],
};

describe("recommendShoes", () => {
  it("returns at least one recommendation for a typical beginner", () => {
    const result = recommendShoes(shoes, baseProfile);
    expect(result.length).toBeGreaterThan(0);
  });

  it("respects budget upper bound (low <= 200000)", () => {
    const result = recommendShoes(shoes, baseProfile);
    for (const r of result) {
      const price = r.price ?? r.priceAnalysis?.msrp ?? 0;
      if (price > 0) expect(price).toBeLessThanOrEqual(200000);
    }
  });

  it("results are sorted by matchScore descending", () => {
    const result = recommendShoes(shoes, baseProfile);
    for (let i = 1; i < result.length; i++) {
      expect(result[i - 1].matchScore).toBeGreaterThanOrEqual(result[i].matchScore);
    }
  });

  it("wide-foot profile prefers wide-fit shoes among top results", () => {
    const wideProfile: UserProfile = { ...baseProfile, footWidth: "wide", budget: "mid" };
    const result = recommendShoes(shoes, wideProfile);
    expect(result.length).toBeGreaterThan(0);
    const top = result.slice(0, 5);
    const hasWideFit = top.some(
      (s) =>
        s.koreanFootFit?.toBoxWidth === "wide" ||
        s.koreanFootFit?.wideOptions === true,
    );
    expect(hasWideFit).toBe(true);
  });

  it("matchScore is a number between 0 and 100", () => {
    const result = recommendShoes(shoes, baseProfile);
    for (const r of result) {
      expect(r.matchScore).toBeGreaterThanOrEqual(0);
      expect(r.matchScore).toBeLessThanOrEqual(100);
    }
  });
});
