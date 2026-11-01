export type RoutePoint = [number, number, number, number, number];
export type CourseMarker = {
  id: string;
  label: string;
  index: number;
  at: number;
  km: number;
  detail: string;
};
export type CourseData = {
  id: string;
  title: string;
  date: string;
  officialDistanceKm: number;
  routeDistanceKm: number;
  origin: [number, number];
  bbox: [number, number, number, number];
  structureCoverage?: { minlat: number; minlon: number; maxlat: number; maxlon: number };
  verticalScale: number;
  unitsMetres: number;
  terrain: {
    size: number;
    x0: number;
    z0: number;
    x1: number;
    z1: number;
    heights: number[];
  };
  points: RoutePoint[];
  markers: CourseMarker[];
  water: number[][][];
  forest: number[][][];
  fields: number[][][];
  roads: { kind: string; bridge?: boolean; points: number[][] }[];
  imagery?: {
    url: string;
    date: string;
    resolutionM: number;
    bbox: number[];
    attribution: string;
  };
  buildings?: { id: number; points: number[][]; heightM: number; heightEstimated: boolean; kind: string }[];
  railways?: { points: number[][] }[];
  bridgeModel?: {
    meshes: { positions: number[]; indices: number[]; color: number[] }[];
  };
  sources: {
    official: string;
    route: string;
    analysis: string;
    terrain: string;
    map: string;
  };
  caveats: string[];
  attribution: string;
};

export const COURSE_SECONDS = 42;
export const clamp = (n: number, min = 0, max = 1) =>
  Math.max(min, Math.min(max, n));
export const smooth = (n: number) => {
  const t = clamp(n);
  return t * t * (3 - 2 * t);
};

export function terrainHeight(data: CourseData, x: number, z: number) {
  const t = data.terrain;
  const fx = clamp((x - t.x0) / (t.x1 - t.x0)) * (t.size - 1);
  const fz = clamp((z - t.z0) / (t.z1 - t.z0)) * (t.size - 1);
  const ix = Math.min(t.size - 2, Math.floor(fx)),
    iz = Math.min(t.size - 2, Math.floor(fz));
  const a = fx - ix,
    b = fz - iz;
  return (
    t.heights[iz * t.size + ix] * (1 - a) * (1 - b) +
    t.heights[iz * t.size + ix + 1] * a * (1 - b) +
    t.heights[(iz + 1) * t.size + ix] * (1 - a) * b +
    t.heights[(iz + 1) * t.size + ix + 1] * a * b
  );
}

export function pointHeight(data: CourseData, point: RoutePoint) {
  return (
    (Math.max(point[2], terrainHeight(data, point[0], point[1]) + 2.5) /
      data.unitsMetres) *
      data.verticalScale +
    0.045
  );
}

export function pointAt(data: CourseData, progress: number): RoutePoint {
  const km = clamp(progress) * data.routeDistanceKm;
  let low = 0,
    high = data.points.length - 1;
  while (low + 1 < high) {
    const mid = (low + high) >>> 1;
    if (data.points[mid][3] < km) low = mid;
    else high = mid;
  }
  const a = data.points[low],
    b = data.points[high];
  const t = clamp((km - a[3]) / Math.max(0.00001, b[3] - a[3]));
  return a.map((value, i) => value + (b[i] - value) * t) as RoutePoint;
}

export function routeProgress(time: number) {
  return clamp((time - 0.085) / 0.82);
}
export function currentMarker(data: CourseData, progress: number) {
  return (
    [...data.markers].reverse().find((m) => progress >= m.at - 0.012) ??
    data.markers[0]
  );
}

export const CHAPTERS = [
  {
    start: 0,
    end: 4,
    eyebrow: "2026 손기정평화마라톤",
    title: "반환점은 두 번.\n42.195km를 미리 보다.",
    body: "임진각에서 출발해 다시 임진각으로",
    label: "COURSE PREVIEW",
  },
  {
    start: 4,
    end: 11,
    eyebrow: "01 / 임진강을 건너",
    title: "통일대교를 지나\n도라산역 방면으로.",
    body: "임진각 → 마정교차로 → 통일대교",
    label: "THE CROSSING",
  },
  {
    start: 11,
    end: 17,
    eyebrow: "02 / 첫 번째 반환",
    title: "한 번 돌아서,\n마정교차로로.",
    body: "도라산역 방면 1차 반환 → 마정교차로",
    label: "TURN ONE",
  },
  {
    start: 17,
    end: 25,
    eyebrow: "03 / 37번국도 방면",
    title: "여우고개를 지나\n두 번째 반환점으로.",
    body: "여우고개사거리 → 37번국도",
    label: "THE LONG ROAD",
  },
  {
    start: 25,
    end: 32,
    eyebrow: "04 / 두 번째 반환",
    title: "리비삼거리에서\n돌아오는 길.",
    body: "2차 반환 → 맞은편 도로로 복귀",
    label: "TURN TWO",
  },
  {
    start: 32,
    end: 38,
    eyebrow: "05 / 다시 임진각",
    title: "여우고개, 마정교차로.\n이제 피니시를 향해.",
    body: "왔던 흐름을 기억하며 임진각으로",
    label: "THE WAY HOME",
  },
  {
    start: 38,
    end: 42,
    eyebrow: "2026.11.15 / 파주 임진각",
    title: "그날, 이 길에서\n만나요.",
    body: "출발 전에 저장하고 코스를 다시 확인하세요.",
    label: "SEE YOU AT THE START",
  },
] as const;

export function chapterAt(seconds: number) {
  return CHAPTERS.find((c) => seconds < c.end) ?? CHAPTERS[CHAPTERS.length - 1];
}
