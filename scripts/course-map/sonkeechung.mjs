/** Build the Son Kee Chung preview from public GPX, terrain tiles and OSM. */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const cache = path.join(root, ".omc/research/sonkeechung-course");
const output = path.join(root, "public/data/sonkeechung");
const video = path.join(root, "video/saturday-teaser/public/sonkeechung");
await Promise.all([
  fs.mkdir(cache, { recursive: true }),
  fs.mkdir(output, { recursive: true }),
  fs.mkdir(video, { recursive: true }),
]);
const gpxUrl =
  "https://raw.githubusercontent.com/zohoda-ui/gpx-road/refs/heads/main/SohnKeeChung_Peace_Marathon_full.gpx";
async function cached(name, url, options) {
  const file = path.join(cache, name);
  try {
    return await fs.readFile(file);
  } catch {}
  const response = await fetch(url, {
    signal: AbortSignal.timeout(90000),
    ...options,
  });
  if (!response.ok) throw new Error(`${response.status}: ${url}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(file, buffer);
  return buffer;
}
const xml = (await cached("source.gpx", gpxUrl)).toString();
const track = [
  ...xml.matchAll(
    /<trkpt\s+lat="([^"]+)"\s+lon="([^"]+)"[^>]*>([\s\S]*?)<\/trkpt>/g,
  ),
].map((m) => [
  Number(m[2]),
  Number(m[1]),
  Number(m[3].match(/<ele>([^<]+)<\/ele>/)?.[1]),
]);
if (track.length < 100 || track.some((p) => !p.every(Number.isFinite)))
  throw new Error("Invalid GPX");
const origin = [126.773, 37.906];
const radians = Math.PI / 180;
const project = ([lon, lat]) => [
  ((lon - origin[0]) * 111195 * Math.cos(origin[1] * radians)) / 100,
  ((origin[1] - lat) * 111195) / 100,
];
const haversine = (a, b) => {
  const h =
    Math.sin(((b[1] - a[1]) * radians) / 2) ** 2 +
    Math.cos(a[1] * radians) *
      Math.cos(b[1] * radians) *
      Math.sin(((b[0] - a[0]) * radians) / 2) ** 2;
  return 6371008.8 * 2 * Math.asin(Math.sqrt(h));
};
const distances = [0];
for (let i = 1; i < track.length; i++)
  distances.push(distances[i - 1] + haversine(track[i - 1], track[i]));
const bbox = [126.676, 37.847, 126.871, 37.975];
const zoom = 12,
  tileN = 2 ** zoom;
const tileXY = (lon, lat) => [
  ((lon + 180) / 360) * tileN,
  ((1 - Math.asinh(Math.tan(lat * radians)) / Math.PI) / 2) * tileN,
];
const lo = tileXY(bbox[0], bbox[3]),
  hi = tileXY(bbox[2], bbox[1]);
const tiles = new Map();
for (let x = Math.floor(lo[0]); x <= Math.floor(hi[0]); x++) {
  await Promise.all(
    Array.from(
      { length: Math.floor(hi[1]) - Math.floor(lo[1]) + 1 },
      async (_, i) => {
        const y = Math.floor(lo[1]) + i;
        const png = await cached(
          `terrain-${zoom}-${x}-${y}.png`,
          `https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${zoom}/${x}/${y}.png`,
        );
        const { data, info } = await sharp(png)
          .removeAlpha()
          .raw()
          .toBuffer({ resolveWithObject: true });
        tiles.set(`${x}/${y}`, { data, channels: info.channels });
        console.log(`Terrain ${x}/${y}`);
      },
    ),
  );
}
function elevation(lon, lat) {
  const [x, y] = tileXY(lon, lat),
    tx = Math.floor(x),
    ty = Math.floor(y);
  const t = tiles.get(`${tx}/${ty}`);
  const at =
    (Math.min(255, Math.floor((y - ty) * 256)) * 256 +
      Math.min(255, Math.floor((x - tx) * 256))) *
    t.channels;
  return t.data[at] * 256 + t.data[at + 1] + t.data[at + 2] / 256 - 32768;
}
const gridSize = 181,
  heights = [];
for (let y = 0; y < gridSize; y++)
  for (let x = 0; x < gridSize; x++) {
    heights.push(
      Math.round(
        elevation(
          bbox[0] + ((bbox[2] - bbox[0]) * x) / (gridSize - 1),
          bbox[3] - ((bbox[3] - bbox[1]) * y) / (gridSize - 1),
        ) * 10,
      ) / 10,
    );
  }
// Isolated DEM spikes are unsuitable for a scenic preview. Preserve the GPX,
// but median-filter the surrounding terrain and floor negative river cells.
const rawHeights = [...heights];
for (let y = 0; y < gridSize; y++)
  for (let x = 0; x < gridSize; x++) {
    const neighbors = [];
    for (let dy = -1; dy <= 1; dy++)
      for (let dx = -1; dx <= 1; dx++)
        neighbors.push(
          rawHeights[
            Math.max(0, Math.min(gridSize - 1, y + dy)) * gridSize +
              Math.max(0, Math.min(gridSize - 1, x + dx))
          ],
        );
    neighbors.sort((a, b) => a - b);
    heights[y * gridSize + x] = Math.max(0, neighbors[4]);
  }
const osmQuery = `[out:json][timeout:60];(way["natural"="water"](${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]});relation["natural"="water"](${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]});way["waterway"="river"](${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]});way["landuse"~"forest|farmland|residential"](${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]});way["natural"="wood"](${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]});way["highway"~"^(trunk|primary|secondary|tertiary)$"](${bbox[1]},${bbox[0]},${bbox[3]},${bbox[2]}););out geom;`;
const osm = JSON.parse(
  (
    await cached(
      "context.json",
      `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(osmQuery)}`,
      {
        headers: {
          "User-Agent":
            "allrunabout-course-preview/1.0 (+https://allrunabout.com)",
        },
      },
    )
  ).toString(),
);
const water = [],
  forest = [],
  fields = [],
  roads = [];
const round = (n) => Math.round(n * 1000) / 1000;
const polygon = (g) =>
  g
    .filter((_, i) => i % 2 === 0 || i === g.length - 1)
    .map((p) => project([p.lon, p.lat]).map(round));
for (const el of osm.elements) {
  const t = el.tags ?? {};
  if (el.type === "relation" && t.natural === "water") {
    for (const m of el.members ?? [])
      if (m.role === "outer" && m.geometry?.length > 3)
        water.push(polygon(m.geometry));
  }
  if (!el.geometry) continue;
  if (t.natural === "water" && el.geometry.length > 3)
    water.push(polygon(el.geometry));
  else if (t.waterway === "river")
    roads.push({ kind: "river", points: polygon(el.geometry) });
  else if (t.landuse === "forest" || t.natural === "wood")
    forest.push(polygon(el.geometry));
  else if (t.landuse === "farmland") fields.push(polygon(el.geometry));
  else if (t.highway)
    roads.push({
      kind: t.highway,
      bridge: Boolean(t.bridge && t.bridge !== "no"),
      points: polygon(el.geometry),
    });
}
const points = track.map(([lon, lat, ele], i) => {
  const [x, z] = project([lon, lat]);
  const nearby = track.slice(Math.max(0, i - 3), Math.min(track.length, i + 4));
  const smooth = nearby.reduce((a, p) => a + p[2], 0) / nearby.length;
  return [
    round(x),
    round(z),
    round(smooth),
    round(distances[i] / 1000),
    round(elevation(lon, lat)),
  ];
});
const firstTurn = track.reduce(
  (best, p, i) => (distances[i] < 12000 && p[0] < track[best][0] ? i : best),
  0,
);
const secondTurn = track.reduce(
  (best, p, i) => (p[1] > track[best][1] ? i : best),
  0,
);
function nearest(lon, lat, min = 0, max = track.length) {
  let index = min,
    best = Infinity;
  for (let i = min; i < max; i++) {
    const d = haversine(track[i], [lon, lat]);
    if (d < best) {
      best = d;
      index = i;
    }
  }
  return index;
}
const marker = (id, label, index, detail) => ({
  id,
  label,
  index,
  at: distances[index] / distances.at(-1),
  km: round(distances[index] / 1000),
  detail,
});
const markers = [
  marker("start", "임진각 출발", 0, "임진각에서 출발해 마정교차로를 향합니다."),
  marker(
    "bridge",
    "통일대교",
    nearest(126.738, 37.903, 0, firstTurn),
    "임진강을 건너 도라산역 방면으로 향합니다.",
  ),
  marker(
    "turn1",
    "1차 반환 · 도라산역 방면",
    firstTurn,
    "공개 GPX의 반환 위치입니다. 주최 측의 정확한 반환 좌표는 미확인입니다.",
  ),
  marker(
    "hill",
    "여우고개사거리",
    nearest(126.785, 37.874, firstTurn, secondTurn),
    "마정교차로를 다시 지나 37번국도 방면으로 이어집니다.",
  ),
  marker(
    "turn2",
    "2차 반환 · 리비삼거리 방면",
    secondTurn,
    "두 번째 반환 후 37번국도 맞은편 도로를 따라 돌아옵니다.",
  ),
  marker(
    "finish",
    "임진각 피니시",
    track.length - 1,
    "여우고개사거리와 마정교차로를 지나 임진각으로 돌아옵니다.",
  ),
];
const [x0, z0] = project([bbox[0], bbox[3]]),
  [x1, z1] = project([bbox[2], bbox[1]]);
const result = {
  id: "sonkeechung-peace-marathon-2026",
  title: "손기정평화마라톤",
  date: "2026.11.15",
  officialDistanceKm: 42.195,
  routeDistanceKm: round(distances.at(-1) / 1000),
  source: "reconstructed",
  origin,
  bbox,
  unitsMetres: 100,
  verticalScale: 1.8,
  terrain: {
    size: gridSize,
    x0: round(x0),
    z0: round(z0),
    x1: round(x1),
    z1: round(z1),
    heights,
    processing:
      "3×3 median filter; negative terrain values floored to zero; visual use only",
  },
  points,
  markers,
  water,
  forest,
  fields,
  roads,
  sources: {
    official: "https://son.wizrun.com/full",
    route: gpxUrl,
    analysis: "https://www.runruun.com/posts/108/",
    terrain: "https://registry.opendata.aws/terrain-tiles/",
    map: "https://www.openstreetmap.org/copyright",
  },
  caveats: [
    "공개 GPX로 복원한 참고 경로이며 공식 측량·인증 데이터가 아닙니다.",
    "반환점과 통제 차로는 대회 당일 안내가 우선입니다.",
    "표고는 GPX와 지형 자료의 추정값입니다. 교량 노면 높이는 시각화용이며 누적 상승고도를 단정하지 않습니다.",
    "지형 높이는 시각화를 위해 1.8배로 표현합니다.",
  ],
  attribution:
    "경로: RUNRUUN · 지도: © OpenStreetMap contributors · 지형: Mapzen / USGS SRTM",
};
try {
  result.bridgeModel = JSON.parse(
    await fs.readFile(path.join(output, "bridge.json"), "utf8"),
  );
} catch {}
await Promise.all([
  fs.writeFile(path.join(output, "course.json"), JSON.stringify(result)),
  fs.writeFile(path.join(video, "course.json"), JSON.stringify(result)),
]);
await fs.writeFile(
  path.join(cache, "audit.json"),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      points: track.length,
      distanceKm: result.routeDistanceKm,
      firstTurnIndex: firstTurn,
      secondTurnIndex: secondTurn,
      markers,
      osmFeatures: osm.elements.length,
      waterPolygons: water.length,
      forestPolygons: forest.length,
      terrainRange: [Math.min(...heights), Math.max(...heights)],
    },
    null,
    2,
  ),
);
console.log(
  JSON.stringify(
    {
      points: points.length,
      distance: result.routeDistanceKm,
      markers,
      water: water.length,
      forest: forest.length,
      terrainRange: [Math.min(...heights), Math.max(...heights)],
    },
    null,
    2,
  ),
);
