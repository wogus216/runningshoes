import { makeFuelPlan, RACE_DISTANCE_KM } from "../../../src/components/marathon/sonkeechung/race-preparation-model";

export const REEL_SECONDS = 52;
export const MAP_START = 7;
export const MAP_END = 38;
export const GEL_HOLD_SECONDS = 1.8;
const stops = makeFuelPlan(240, "shot45");
const movingSeconds = MAP_END - MAP_START - stops.length * GEL_HOLD_SECONDS;

export const REEL_FUEL_STOPS = stops.map((stop, index) => {
  const progress = stop.km / RACE_DISTANCE_KM;
  const start = MAP_START + movingSeconds * progress + index * GEL_HOLD_SECONDS;
  return { ...stop, progress, start, end: start + GEL_HOLD_SECONDS, index };
});

export function reelProgress(seconds: number) {
  if (seconds <= MAP_START) return 0;
  if (seconds >= MAP_END) return 1;
  let start = MAP_START;
  let progress = 0;
  for (const stop of REEL_FUEL_STOPS) {
    if (seconds < stop.start) return progress + (seconds - start) / movingSeconds;
    if (seconds < stop.end) return stop.progress;
    start = stop.end;
    progress = stop.progress;
  }
  return progress + (seconds - start) / movingSeconds;
}

export function fuelStopAt(seconds: number) {
  return REEL_FUEL_STOPS.find((stop) => seconds >= stop.start && seconds < stop.end);
}
