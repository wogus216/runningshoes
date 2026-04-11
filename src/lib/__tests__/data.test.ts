import { describe, expect, it } from "vitest";
import { shoes, getShoeBySlug, getBrandsFromShoes } from "@/lib/data/shoes";
import { isCompleteShoe } from "@/types/shoe";
import { getAllPosts, getPostBySlug } from "@/lib/data/blog";
import { getAllBrands, getBrandBySlug } from "@/lib/data/brands";

describe("shoe data", () => {
  it("loads at least 90 shoes", () => {
    expect(shoes.length).toBeGreaterThanOrEqual(90);
  });

  it("getShoeBySlug returns the matching shoe", () => {
    const sample = shoes.find((s) => isCompleteShoe(s));
    expect(sample).toBeDefined();
    const found = getShoeBySlug(sample!.slug);
    expect(found?.slug).toBe(sample!.slug);
  });

  it("getShoeBySlug returns undefined for unknown slug", () => {
    expect(getShoeBySlug("does-not-exist-99999")).toBeUndefined();
  });

  it("every shoe id matches its slug", () => {
    const mismatches = shoes.filter((s) => s.id !== s.slug);
    expect(mismatches).toHaveLength(0);
  });

  it("every shoe slug is unique", () => {
    const seen = new Set<string>();
    const duplicates: string[] = [];
    for (const s of shoes) {
      if (seen.has(s.slug)) duplicates.push(s.slug);
      seen.add(s.slug);
    }
    expect(duplicates).toEqual([]);
  });

  it("has 10 distinct brands", () => {
    expect(getBrandsFromShoes().length).toBe(10);
  });
});

describe("isCompleteShoe", () => {
  it("returns true when all required fields exist", () => {
    const complete = shoes.find((s) => isCompleteShoe(s));
    expect(complete).toBeDefined();
    expect(isCompleteShoe(complete!)).toBe(true);
  });

  it("returns false when required fields are missing", () => {
    expect(
      isCompleteShoe({
        id: "x",
        slug: "x",
        brand: "Nike",
        name: "x",
        category: "데일리",
        rating: 5,
        price: 100000,
        description: "x",
        tags: [],
        features: [],
        similarShoes: [],
      } as never),
    ).toBe(false);
  });
});

describe("blog posts", () => {
  it("loads all posts with required fields", () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThan(0);
    for (const p of posts) {
      expect(p.slug).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.content).toBeTruthy();
    }
  });

  it("getPostBySlug returns matching post", () => {
    const first = getAllPosts()[0];
    expect(getPostBySlug(first.slug)?.slug).toBe(first.slug);
  });

  it("getPostBySlug returns undefined for unknown slug", () => {
    expect(getPostBySlug("nope-nope-nope")).toBeUndefined();
  });
});

describe("brands", () => {
  it("loads 10 brands", () => {
    expect(getAllBrands().length).toBe(10);
  });

  it("getBrandBySlug returns matching brand", () => {
    expect(getBrandBySlug("nike")?.name).toBe("Nike");
    expect(getBrandBySlug("new-balance")?.name).toBe("New Balance");
  });

  it("returns undefined for unknown brand slug", () => {
    expect(getBrandBySlug("not-a-brand")).toBeUndefined();
  });
});

describe("data integrity: similarShoes references", () => {
  it("every similarShoes entry references a real shoe slug", () => {
    const validSlugs = new Set(shoes.map((s) => s.slug));
    const broken: { from: string; to: string }[] = [];
    for (const s of shoes) {
      for (const ref of s.similarShoes ?? []) {
        if (!validSlugs.has(ref)) broken.push({ from: s.slug, to: ref });
      }
    }
    expect(broken).toEqual([]);
  });
});
