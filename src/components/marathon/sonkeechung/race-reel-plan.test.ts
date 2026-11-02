import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { REEL_SECONDS, REEL_INTRO_SECONDS, ROUTE_ANCHORS, REFERENCE_ROUTE_KM, MAP_START, MAP_END, PACE_START, CTA_START, reelProgress } from "../../../../video/saturday-teaser/src/sonkeechung-reel-plan";
import { pointAt, type CourseData } from "./course-model";

const course = JSON.parse(readFileSync("public/data/sonkeechung/course.json", "utf8")) as CourseData;

describe("course reel terrain and strategy timeline", () => {
  it("moves into the course after two seconds and reserves time for pacing and the website", () => {
    expect(REEL_INTRO_SECONDS).toBe(2);
    expect(MAP_START).toBe(REEL_INTRO_SECONDS);
    expect(PACE_START).toBe(MAP_END);
    expect(CTA_START - PACE_START).toBeGreaterThanOrEqual(6);
    expect(REEL_SECONDS - CTA_START).toBeGreaterThanOrEqual(8);
  });
  it("holds at upcoming terrain or the turnaround rather than eight gel stops", () => {
    expect(REFERENCE_ROUTE_KM).toBe(course.routeDistanceKm);
    const holds = ROUTE_ANCHORS.filter((anchor, index) => index && anchor[1] === ROUTE_ANCHORS[index - 1][1]);
    expect(holds).toHaveLength(3);
    expect(reelProgress(17) * course.routeDistanceKm).toBeCloseTo(17.2, 8);
    expect(reelProgress(25)).toBeCloseTo(course.markers.find((marker) => marker.id === "turn2")!.at, 5);
    expect(reelProgress(31) * course.routeDistanceKm).toBeCloseTo(34, 8);
    for (const [from, to] of [[17, 20], [34, 37]]) {
      expect(pointAt(course, to / course.routeDistanceKm)[2]).toBeGreaterThan(pointAt(course, from / course.routeDistanceKm)[2] + 20);
    }
  });
  it("moves monotonically through the actual endpoints and keeps every frame in bounds", () => {
    expect(reelProgress(0)).toBe(0);
    expect(reelProgress(MAP_START)).toBe(0);
    expect(reelProgress(MAP_END)).toBe(1);
    expect(reelProgress(REEL_SECONDS)).toBe(1);
    let last = 0;
    for (let frame = 0; frame < REEL_SECONDS * 30; frame++) {
      const current = reelProgress(frame / 30);
      expect(current).toBeGreaterThanOrEqual(last - 1e-9);
      expect(current).toBeLessThanOrEqual(1);
      last = current;
    }
  });
});
