export const REEL_SECONDS = 52;
export const REEL_INTRO_SECONDS = 2;
export const MAP_START = 2;
export const MAP_END = 38;
export const PACE_START = 38;
export const CTA_START = 44;
export const REFERENCE_ROUTE_KM = 42.261;

// Reference GPX distances, separately from the official 42.195 km.
// Holds introduce upcoming terrain or a turnaround, never individual gel doses.
export const ROUTE_ANCHORS = [
  [MAP_START, 0],
  [6, 4.063 / REFERENCE_ROUTE_KM],
  [10, 8.318 / REFERENCE_ROUTE_KM],
  [13, 15 / REFERENCE_ROUTE_KM],
  [16, 17.2 / REFERENCE_ROUTE_KM],
  [18, 17.2 / REFERENCE_ROUTE_KM],
  [21, 21.8 / REFERENCE_ROUTE_KM],
  [24, 0.6637854018881091],
  [26, 0.6637854018881091],
  [29, 34 / REFERENCE_ROUTE_KM],
  [32, 34 / REFERENCE_ROUTE_KM],
  [35, 37.4 / REFERENCE_ROUTE_KM],
  [MAP_END, 1],
] as const;

export function reelProgress(seconds: number) {
  if (seconds <= MAP_START) return 0;
  if (seconds >= MAP_END) return 1;
  for (let index = 1; index < ROUTE_ANCHORS.length; index++) {
    const [end, to] = ROUTE_ANCHORS[index];
    const [start, from] = ROUTE_ANCHORS[index - 1];
    if (seconds <= end) return from + (to - from) * (seconds - start) / (end - start);
  }
  return 1;
}
