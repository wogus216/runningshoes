import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  chapterAt,
  pointAt,
  routeProgress,
  type CourseData,
} from "./course-model";

const course = JSON.parse(
  readFileSync(path.resolve("public/data/sonkeechung/course.json"), "utf8"),
) as CourseData;

describe("Son Kee Chung source data and playback", () => {
  it("retains the reference track length separately from the official race distance", () => {
    expect(course.officialDistanceKm).toBe(42.195);
    expect(course.routeDistanceKm).toBeCloseTo(42.261, 3);
    expect(course.points).toHaveLength(1099);
    expect(course.points.at(-1)?.[3]).toBe(course.routeDistanceKm);
    expect(
      course.points.every(
        (p, i) =>
          p.every(Number.isFinite) &&
          (i === 0 || p[3] >= course.points[i - 1][3]),
      ),
    ).toBe(true);
  });
  it("keeps both turnaround locations in course order, including the return leg", () => {
    const first = course.markers.find((m) => m.id === "turn1")!;
    const second = course.markers.find((m) => m.id === "turn2")!;
    expect(first.at).toBeGreaterThan(0);
    expect(first.index).toBeLessThan(second.index);
    expect(second.at).toBeLessThan(1);
    expect(course.markers.at(-1)?.id).toBe("finish");
    expect(
      course.markers.every(
        (m) => m.index >= 0 && m.index < course.points.length,
      ),
    ).toBe(true);
  });
  it("has a complete, finite terrain grid without the source tile spikes", () => {
    expect(course.terrain.heights).toHaveLength(course.terrain.size ** 2);
    expect(
      course.terrain.heights.every(
        (h) => Number.isFinite(h) && h >= 0 && h < 500,
      ),
    ).toBe(true);
  });
  it("seeks by distance rather than trackpoint density and reaches the actual endpoints", () => {
    expect(pointAt(course, 0)).toEqual(course.points[0]);
    expect(pointAt(course, 1)).toEqual(course.points.at(-1));
    expect(pointAt(course, 0.5)[3]).toBeCloseTo(course.routeDistanceKm / 2, 4);
    expect(routeProgress(0)).toBe(0);
    expect(routeProgress(1)).toBe(1);
    expect(chapterAt(42).label).toBe("SEE YOU AT THE START");
  });
});
