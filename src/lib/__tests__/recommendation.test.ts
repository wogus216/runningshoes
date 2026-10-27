import { describe, expect, it } from "vitest";
import { recommendShoes, getTopShoesForInjury, isUserProfile, type UserProfile } from "@/lib/recommendation";
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

// 2026-10-12 결과 화면 점검에서 확인한 조건 누출의 회귀 검증.
describe("추천 조건과 결과의 일관성", () => {
  it("평발·빠른 페이스를 함께 골라도 트레일 목적에는 트레일화만 나온다", () => {
    const result = recommendShoes(shoes, {
      ...baseProfile, purpose: "trail", footArch: "flat", targetPace: "fast",
    });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every(s => s.category === "트레일")).toBe(true);
    expect(result.length).toBeLessThan(10); // 예산 내 후보가 적어도 로드화로 채우지 않는다.
  });

  it("상급자·빠른 페이스가 회복 용도를 뒤집지 않는다", () => {
    const result = recommendShoes(shoes, {
      ...baseProfile, purpose: "recovery", experience: "advanced", targetPace: "fast", budget: "high",
    });
    expect(result.length).toBeGreaterThan(0);
    expect(result.some(s => s.category === "레이싱")).toBe(false);
  });

  it("넓은 발에 좁고 와이드 옵션도 없는 신발을 추천하지 않는다", () => {
    const result = recommendShoes(shoes, {
      ...baseProfile, footWidth: "wide", purpose: "racing", targetPace: "fast", budget: "high",
    });
    expect(result.some(s => s.koreanFootFit?.toBoxWidth === "narrow" && !s.koreanFootFit.wideOptions)).toBe(false);
    const source = shoes.find(s => s.specs && s.price && s.price <= 200000 && s.koreanFootFit)!;
    const narrow = { ...source, koreanFootFit: { ...source.koreanFootFit!, toBoxWidth: "narrow" as const, wideOptions: false } };
    expect(recommendShoes([narrow], { ...baseProfile, footWidth: "wide" })).toHaveLength(0);
  });

  it("입문자 비추천이 명시된 제품을 입문자에게 추천하지 않는다", () => {
    const source = shoes.find(s => s.specs && s.price)!;
    const shoe = { ...source, targetUsers: { recommended: [], notRecommended: ["입문 러너"] } };
    expect(recommendShoes([shoe], { ...baseProfile, budget: "high" })).toHaveLength(0);
    expect(recommendShoes([shoe], { ...baseProfile, experience: "intermediate", budget: "high" })).toHaveLength(1);
    // ‘입문화 중 무거움’은 입문자 비추천과 다르다.
    expect(recommendShoes([{ ...shoe, targetUsers: { recommended: [], notRecommended: ["입문화 중 가벼운 축은 아님"] } }], { ...baseProfile, budget: "high" })).toHaveLength(1);
  });

  it("정가가 확인되지 않은 신발은 예산에 맞는 후보로 취급하지 않는다", () => {
    const shoe = { ...shoes.find(s => s.specs)!, price: undefined, priceAnalysis: undefined };
    expect(recommendShoes([shoe], baseProfile)).toHaveLength(0);
  });

  it("선택한 부상 중 warning인 신발은 제외하고 caution은 결과에 표시한다", () => {
    const source = shoes.find(s => s.specs && s.price && s.injuryPrevention)!;
    const caution = { ...source, injuryPrevention: { ...source.injuryPrevention!, kneeIssues: "caution" as const } };
    const warning = { ...source, injuryPrevention: { ...source.injuryPrevention!, kneeIssues: "warning" as const } };
    const profile: UserProfile = { ...baseProfile, injuries: ["kneeIssues"], budget: "high" };
    expect(recommendShoes([warning], profile)).toHaveLength(0);
    expect(recommendShoes([caution], profile)[0]?.matchWarnings).toContain("무릎 관련 평가: 주의 필요");
  });

  it("한 후보이거나 동점인 후보도 상대 점수와 표시 범위를 지킨다", () => {
    const source = shoes.find(s => s.specs && s.price && s.price <= 200000)!;
    const single = recommendShoes([source], baseProfile);
    expect(single[0].matchScore).toBe(100);
    const repeated = Array.from({ length: 12 }, (_, i) => ({ ...source, id: `same-brand-${i}`, slug: `same-brand-${i}` }));
    const result = recommendShoes(repeated, baseProfile);
    expect(result.every(s => s.matchScore >= 0 && s.matchScore <= 100)).toBe(true);
  });

  it("평균 대비 차이는 화면에 나온 추천 신발끼리 비교한다", () => {
    const result = recommendShoes(shoes, baseProfile);
    const avg = result.reduce((sum, s) => sum + s.specs!.weight, 0) / result.length;
    for (const s of result) expect(s.comparisonToAvg?.weight).toBe(Math.round(s.specs!.weight - avg));
  });
});


describe("추천 결과의 부상 후보와 세션 복원", () => {
  it("부상별 후보는 본 추천의 예산·용도·복수 부상 조건을 유지한다", () => {
    const profile: UserProfile = { ...baseProfile, purpose: "trail", injuries: ["kneeIssues", "achillesTendinopathy"] };
    const results = recommendShoes(shoes, profile);
    const top = getTopShoesForInjury(results, "kneeIssues");
    for (const shoe of top) {
      expect(results.some(s => s.id === shoe.id)).toBe(true);
      expect(shoe.category).toBe("트레일");
      expect(shoe.price ?? shoe.priceAnalysis?.msrp ?? Infinity).toBeLessThanOrEqual(200000);
      expect(shoe.injuryPrevention?.achillesTendinopathy).not.toBe("warning");
    }
  });

  it("유효한 기존 설문은 복원하고 손상된 선택지는 거절한다", () => {
    expect(isUserProfile(baseProfile)).toBe(true);
    expect(isUserProfile({ ...baseProfile, targetPace: "fast", season: "winter" })).toBe(true);
    for (const value of [null, [], {}, { ...baseProfile, budget: "old-budget" }, { ...baseProfile, injuries: ["none"] }, { ...baseProfile, targetPace: "unknown" }, { ...baseProfile, preferredBrands: null }]) {
      expect(isUserProfile(value)).toBe(false);
    }
  });
});

describe("쿠션 가점은 느린·회복 용도에 비추천인 신발에 주지 않는다 (규칙 22·25)", () => {
  const recoverySlow: UserProfile = {
    ...baseProfile,
    experience: "intermediate",
    weeklyDistance: "medium",
    purpose: "recovery",
    budget: "high",
    targetPace: "slow",
  };
  const UNSUITED = /느린|천천|회복|조깅|이지|리커버리|LSD/;
  const rawScoreOf = (shoe: (typeof shoes)[number]) => {
    const found = recommendShoes([shoe], recoverySlow)[0];
    return found?.rawScore;
  };

  it("쿠션 10 신발에 '느린 회복 러닝 비추천'이 적히면 가점 18(+8, +10)이 빠진다", () => {
    const base = shoes.find(
      (s) => s.specs.cushioning === 10 && s.category === "쿠션화" && !s.targetUsers?.notRecommended.some((t) => UNSUITED.test(t)),
    );
    expect(base).toBeDefined();
    const flagged = { ...base!, targetUsers: { ...base!.targetUsers!, notRecommended: ["느린 회복 러닝"] } };
    const withBonus = rawScoreOf(base!);
    const withoutBonus = rawScoreOf(flagged);
    expect(withBonus).toBeDefined();
    expect(withoutBonus).toBeDefined();
    expect(withBonus! - withoutBonus!).toBe(18);
  });

  it("레이싱 카테고리 신발은 느린 페이스여도 쿠션 가점을 받지 않는다", () => {
    const racer = shoes.find((s) => s.category === "레이싱" && s.specs.cushioning >= 9);
    expect(racer).toBeDefined();
    const profile: UserProfile = { ...recoverySlow, purpose: "racing" };
    const slow = recommendShoes([racer!], profile)[0];
    const medium = recommendShoes([racer!], { ...profile, targetPace: "medium" })[0];
    // 느린 페이스에서만 붙던 +8(쿠션 9↑)·+10(쿠션 10)이 없으므로 느린 페이스 점수가 중간 페이스보다 8 이상 높지 않다
    expect(slow.rawScore - medium.rawScore).toBeLessThan(8);
  });
});
