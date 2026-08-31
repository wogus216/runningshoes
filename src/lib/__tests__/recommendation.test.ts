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

/*
 * 아래 셋은 2026-08-31 점검에서 나온 결함의 회귀 방지다.
 * 셋 다 화면에서는 멀쩡해 보였고, 조합을 전수로 돌려 보고서야 드러났다.
 */
describe("추천 결함 회귀 방지", () => {
  const price = (s: { price?: number | null; priceAnalysis?: { msrp?: number } }) =>
    s.price ?? s.priceAnalysis?.msrp ?? 0;

  // ① 트레일화 15종이 어떤 조합에서도 추천되지 않던 문제
  //    (recommendation.ts 에 '트레일' 문자열이 아예 없었다)
  it("트레일 목적이면 트레일화가 결과를 채운다", () => {
    const result = recommendShoes(shoes, { ...baseProfile, purpose: "trail", budget: "high" });
    expect(result.length).toBeGreaterThan(0);
    const trail = result.filter((s) => s.category === "트레일");
    expect(trail.length).toBeGreaterThanOrEqual(7);
  });

  it("트레일이 아닌 목적에는 트레일화가 새어 나오지 않는다", () => {
    for (const purpose of ["training", "racing", "recovery", "all"] as const) {
      const result = recommendShoes(shoes, { ...baseProfile, purpose, budget: "high" });
      expect(result.filter((s) => s.category === "트레일")).toHaveLength(0);
    }
  });

  // ② weeklyDistance 가 high 일 때만 쓰여 low↔medium 이 결과를 전혀 안 바꾸던 문제
  it("주간 거리를 바꾸면 결과가 실제로 달라진다", () => {
    const ids = (weeklyDistance: UserProfile["weeklyDistance"]) =>
      recommendShoes(shoes, { ...baseProfile, weeklyDistance, budget: "mid" }).map((s) => s.id);
    const low = ids("low");
    const medium = ids("medium");
    expect(low.filter((id) => !medium.includes(id)).length).toBeGreaterThan(0);
  });

  // ②-b 안정화 18종이 목적·거리·경험 맵 어디에도 없어 평발 러너에게도 밀리던 문제.
  //      트레일과 같은 뿌리다 — 카테고리가 맵에 없으면 다른 카테고리에 22점을 지고 시작한다
  it("평발이면 안정화가 후보에 오른다", () => {
    const result = recommendShoes(shoes, {
      ...baseProfile,
      footArch: "flat",
      purpose: "all",
      budget: "mid",
    });
    expect(result.filter((s) => s.category === "안정화").length).toBeGreaterThan(0);
  });

  it("정상 아치에는 안정화가 밀려 올라오지 않는다", () => {
    const result = recommendShoes(shoes, {
      ...baseProfile,
      footArch: "normal",
      purpose: "all",
      budget: "mid",
    });
    expect(result.filter((s) => s.category === "안정화")).toHaveLength(0);
  });

  // ③ 예산 구간이 서로 겹치고 하한 때문에 값싼 좋은 신발이 빠지던 문제.
  //    이제 예산은 상한만 뜻한다
  it("예산은 상한으로만 동작한다", () => {
    const ceilings = { low: 200000, mid: 300000 } as const;
    for (const [budget, max] of Object.entries(ceilings)) {
      const result = recommendShoes(shoes, {
        ...baseProfile,
        budget: budget as UserProfile["budget"],
      });
      for (const r of result) {
        const p = price(r);
        if (p > 0) expect(p).toBeLessThanOrEqual(max);
      }
    }
    // 하한이 없으므로 상위 예산에서도 저가 신발이 후보에 남아야 한다
    const high = recommendShoes(shoes, { ...baseProfile, budget: "high" });
    const cheapest = Math.min(...high.map(price).filter((p) => p > 0));
    expect(cheapest).toBeLessThan(200000);
  });
});
