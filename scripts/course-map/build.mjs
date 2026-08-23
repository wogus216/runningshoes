#!/usr/bin/env node
/**
 * 대회 코스 지도 생성기 — 저작 시점에 한 번만 돌린다(빌드 때는 안 돈다).
 *
 *   node scripts/course-map/build.mjs <eventId>
 *   node scripts/course-map/build.mjs --all
 *
 * 입력  scripts/course-map/courses/{eventId}.json  (경유지 + 출처)
 * 출력  public/data/gpx/{eventId}.gpx              (코스 경로)
 *       public/data/course-maps/{eventId}.json     (SVG 로 그릴 배경 + 경로)
 *
 * ── 왜 이렇게 만드나 ────────────────────────────────────────────────
 * 공식 코스맵 이미지를 따라 그리면 2차적저작물이라 못 쓴다. 그래서 공식이 **텍스트로
 * 적어둔 경유지**만 사실로 취하고, 선은 OSM 도로망 위에서 새로 잇는다.
 * 결과는 언제나 '추정'이며 화면에도 그렇게 표기된다.
 *
 * 지도 배경도 타일을 부르지 않는다. 저작 시점에 OSM 지형을 한 번 받아 SVG 패스로
 * 구워두고, 사이트는 그 JSON 만 읽는다 — 런타임 타일 호출 0, 타일 서버 부하 0.
 * (OSM 타일 서버는 상업적 사용 시 차단될 수 있다고 정책에 명시돼 있다)
 *
 * 데이터 © OpenStreetMap contributors (ODbL) · 경로 탐색 FOSSGIS Valhalla
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const COURSES_DIR = path.join(ROOT, 'scripts/course-map/courses');
const GPX_DIR = path.join(ROOT, 'public/data/gpx');
const MAP_DIR = path.join(ROOT, 'public/data/course-maps');

const UA = 'allrunabout-course-map/1.0 (+https://allrunabout.com)';
const VALHALLA = 'https://valhalla1.openstreetmap.de/route';
const OVERPASS = 'https://overpass-api.de/api/interpreter';

/**
 * 지도 캔버스 — viewBox 좌표계. 실제 표시 크기는 CSS 가 정한다.
 * 높이는 코스 모양을 따라간다(세로로 긴 코스를 가로 상자에 넣으면 코스가 쪼그라든다).
 * 다만 화면에서 스크롤을 잡아먹지 않도록 비율을 가둔다.
 */
const CANVAS = { w: 1000, pad: 30, minRatio: 0.55, maxRatio: 1.05 };

/**
 * 배경 지형 팔레트. 톤 후보를 눈으로 고르려고 셋을 굽는다.
 * 코스선·표식 색은 CSS(globals.css 의 .course-skin-*)가 맡는다 — 여기는 배경뿐이다.
 */
const SKINS = {
  // 잉크 + 시그널. 배경을 내려서 화면에서 가장 밝은 것이 코스 하나가 되게 한다
  night: {
    bg: '#0b0e11', green: '#111a16', water: '#0e1c26', road: '#1b2229', rail: '#181e24',
    grid: 'rgba(255,255,255,.035)',
  },
  // 흑백 인쇄물. 색을 거의 빼고 선의 굵기만으로 위계를 만든다
  print: {
    bg: '#ffffff', green: '#f1f1ee', water: '#e9eaec', road: '#e2e2e0', rail: '#ebebe9',
    grid: 'rgba(0,0,0,.045)',
  },
  // 현재 배포본(웜 페이퍼) — 비교 기준
  light: {
    bg: '#faf8f4', green: '#e8eee1', water: '#dce7ee', road: '#e9e4dc', rail: '#ece7df',
    grid: null,
  },
};

/** 계기 격자 — 그림이 아니라 '측정된 것'처럼 보이게 하는 최소 장치 */
function gridLines(h) {
  const step = 100;
  let d = '';
  for (let x = step; x < CANVAS.w; x += step) d += `<path d="M${x} 0L${x} ${h}"/>`;
  for (let y = step; y < h; y += step) d += `<path d="M0 ${y}L${CANVAS.w} ${y}"/>`;
  return d;
}

// ── 유틸 ────────────────────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function postJson(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'User-Agent': UA, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${url} → ${res.status} ${await res.text()}`);
  return res.json();
}

async function overpass(query) {
  const res = await fetch(OVERPASS, {
    method: 'POST',
    headers: { 'User-Agent': UA, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ data: query }),
  });
  if (!res.ok) throw new Error(`overpass → ${res.status}`);
  return res.json();
}

/** Valhalla 는 polyline6 로 형상을 준다 */
function decodePolyline6(str) {
  const out = [];
  let lat = 0;
  let lon = 0;
  let i = 0;
  while (i < str.length) {
    for (let k = 0; k < 2; k++) {
      let shift = 0;
      let result = 0;
      let b;
      do {
        b = str.charCodeAt(i++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const d = result & 1 ? ~(result >> 1) : result >> 1;
      if (k === 0) lat += d;
      else lon += d;
    }
    out.push([lon / 1e6, lat / 1e6]); // [lon, lat]
  }
  return out;
}

const R = 6371008.8;
const rad = (d) => (d * Math.PI) / 180;
function haversine([lon1, lat1], [lon2, lat2]) {
  const dLat = rad(lat2 - lat1);
  const dLon = rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function lineLengthKm(pts) {
  let m = 0;
  for (let i = 1; i < pts.length; i++) m += haversine(pts[i - 1], pts[i]);
  return m / 1000;
}

// ── 투영 ────────────────────────────────────────────────────────────
// 웹 메르카토르로 옮긴 뒤 bbox 를 캔버스에 맞춘다(종횡비 유지)

const mercY = (lat) => Math.log(Math.tan(Math.PI / 4 + rad(lat) / 2));

function makeProjector(bbox) {
  const [minLon, minLat, maxLon, maxLat] = bbox;
  const x0 = rad(minLon);
  const x1 = rad(maxLon);
  const y0 = mercY(minLat);
  const y1 = mercY(maxLat);

  const ratio = Math.min(
    CANVAS.maxRatio,
    Math.max(CANVAS.minRatio, (y1 - y0) / (x1 - x0)),
  );
  const h = Math.round(CANVAS.w * ratio);
  const iw = CANVAS.w - CANVAS.pad * 2;
  const ih = h - CANVAS.pad * 2;
  const scale = Math.min(iw / (x1 - x0), ih / (y1 - y0));
  const offX = CANVAS.pad + (iw - (x1 - x0) * scale) / 2;
  const offY = CANVAS.pad + (ih - (y1 - y0) * scale) / 2;
  const project = ([lon, lat]) => [
    Math.round(offX + (rad(lon) - x0) * scale),
    Math.round(offY + (y1 - mercY(lat)) * scale),
  ];
  project.height = h;
  return project;
}

/**
 * 화면 좌표로 옮기고 거의 겹치는 점을 버린다.
 * 이 JSON 은 서버에서 SVG 로 펴져 HTML 에 들어가므로 크기가 곧 페이지 무게다 —
 * 1000×700 캔버스에서 1px 는 약 2m 라 정수 좌표로 충분하다.
 */
function toPath(coords, project, closed = false, minStep = 2) {
  const pts = [];
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const c of coords) {
    const p = project(c);
    const last = pts[pts.length - 1];
    if (!last || Math.abs(p[0] - last[0]) + Math.abs(p[1] - last[1]) >= minStep) pts.push(p);
    minX = Math.min(minX, p[0]);
    maxX = Math.max(maxX, p[0]);
    minY = Math.min(minY, p[1]);
    maxY = Math.max(maxY, p[1]);
  }
  if (pts.length < 2) return null;
  // 화면에서 점만 한 지형은 배경 노이즈다 — 무게만 늘리고 읽히지 않는다
  if (Math.max(maxX - minX, maxY - minY) < 10) return null;
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]} ${p[1]}`).join('');
  return closed ? `${d}Z` : d;
}

/** 관계(멀티폴리곤)의 outer 멤버들을 끝점끼리 이어 링으로 만든다 */
function stitchRings(ways) {
  const key = (p) => `${p[0].toFixed(6)},${p[1].toFixed(6)}`;
  const pool = ways.filter((w) => w.length > 1).map((w) => w.slice());
  const rings = [];
  while (pool.length) {
    let ring = pool.shift();
    let grew = true;
    while (grew) {
      grew = false;
      for (let i = 0; i < pool.length; i++) {
        const w = pool[i];
        if (key(ring[ring.length - 1]) === key(w[0])) ring = ring.concat(w.slice(1));
        else if (key(ring[ring.length - 1]) === key(w[w.length - 1]))
          ring = ring.concat(w.slice().reverse().slice(1));
        else if (key(ring[0]) === key(w[w.length - 1])) ring = w.slice(0, -1).concat(ring);
        else if (key(ring[0]) === key(w[0])) ring = w.slice().reverse().slice(0, -1).concat(ring);
        else continue;
        pool.splice(i, 1);
        grew = true;
        break;
      }
    }
    rings.push(ring);
  }
  return rings;
}

// ── 1. 경로 ─────────────────────────────────────────────────────────

async function routeCourse(cfg) {
  const wp = cfg.waypoints;
  const seq = cfg.outAndBack ? [...wp, ...wp.slice(0, -1).reverse()] : wp;
  const trip = await postJson(VALHALLA, {
    locations: seq.map((w) => ({ lat: w.lat, lon: w.lon })),
    costing: 'pedestrian',
    directions_options: { units: 'kilometers' },
  });
  let pts = [];
  for (const leg of trip.trip.legs) {
    const c = decodePolyline6(leg.shape);
    if (pts.length && pts[pts.length - 1][0] === c[0][0] && pts[pts.length - 1][1] === c[0][1])
      c.shift();
    pts = pts.concat(c);
  }
  return pts;
}

function writeGpx(cfg, pts) {
  const now = new Date().toISOString().slice(0, 10);
  const body = pts.map(([lon, lat]) => `      <trkpt lat="${lat}" lon="${lon}"/>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="allrunabout course-map builder" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>${cfg.eventId}</name>
    <desc>${cfg.source} · ${cfg.sourceNote ?? ''}</desc>
    <time>${now}T00:00:00Z</time>
    <copyright author="OpenStreetMap contributors">
      <license>https://opendatacommons.org/licenses/odbl/</license>
    </copyright>
  </metadata>
  <trk>
    <name>${cfg.eventId}</name>
    <trkseg>
${body}
    </trkseg>
  </trk>
</gpx>
`;
  fs.mkdirSync(GPX_DIR, { recursive: true });
  fs.writeFileSync(path.join(GPX_DIR, `${cfg.eventId}.gpx`), xml);
}

// ── 2. 배경 지형 ────────────────────────────────────────────────────

async function fetchContext(bbox) {
  const [minLon, minLat, maxLon, maxLat] = bbox;
  const bb = `${minLat},${minLon},${maxLat},${maxLon}`;
  const q = `[out:json][timeout:90];
(
  way["natural"="water"](${bb});
  relation["natural"="water"](${bb});
  way["waterway"="riverbank"](${bb});
  way["leisure"="park"](${bb});
  way["landuse"~"^(grass|forest|recreation_ground|cemetery)$"](${bb});
  way["highway"~"^(motorway|trunk|primary)$"](${bb});
  way["railway"="rail"](${bb});
);
out geom;`;
  return overpass(q);
}

function buildLayers(osm, project) {
  const water = [];
  const green = [];
  const roads = [];
  const rail = [];
  const waterRelWays = [];

  for (const el of osm.elements) {
    const t = el.tags ?? {};
    if (el.type === 'relation') {
      if (t.natural === 'water') {
        for (const m of el.members ?? []) {
          if (m.geometry && (m.role === 'outer' || m.role === '')) {
            waterRelWays.push(m.geometry.map((g) => [g.lon, g.lat]));
          }
        }
      }
      continue;
    }
    if (!el.geometry) continue;
    const coords = el.geometry.map((g) => [g.lon, g.lat]);
    if (t.natural === 'water' || t.waterway === 'riverbank') {
      const d = toPath(coords, project, true);
      if (d) water.push(d);
    } else if (t.leisure === 'park' || t.landuse) {
      const d = toPath(coords, project, true);
      if (d) green.push(d);
    } else if (t.railway === 'rail') {
      const d = toPath(coords, project, false, 3);
      if (d) rail.push(d);
    } else if (t.highway) {
      const d = toPath(coords, project, false, 3);
      if (d) roads.push(d);
    }
  }

  for (const ring of stitchRings(waterRelWays)) {
    const d = toPath(ring, project, true);
    if (d) water.push(d);
  }
  return { water, green, roads, rail };
}

// ── 3. 조립 ─────────────────────────────────────────────────────────

async function build(eventId) {
  const cfg = JSON.parse(fs.readFileSync(path.join(COURSES_DIR, `${eventId}.json`), 'utf8'));
  process.stdout.write(`\n▶ ${eventId}\n`);

  const pts = await routeCourse(cfg);
  const km = lineLengthKm(pts);
  process.stdout.write(`  경로 ${pts.length}점 · 재구성 거리 ${km.toFixed(2)}km\n`);
  writeGpx(cfg, pts);

  const lons = pts.map((p) => p[0]);
  const lats = pts.map((p) => p[1]);
  const mx = (Math.max(...lons) - Math.min(...lons)) * 0.08;
  const my = (Math.max(...lats) - Math.min(...lats)) * 0.08;
  const bbox = [
    Math.min(...lons) - mx,
    Math.min(...lats) - my,
    Math.max(...lons) + mx,
    Math.max(...lats) + my,
  ];
  const project = makeProjector(bbox);

  await sleep(800);
  const osm = await fetchContext(bbox);
  const layers = buildLayers(osm, project);
  const featureCount = Object.values(layers).reduce((n, a) => n + a.length, 0);
  process.stdout.write(
    `  배경 ${featureCount}개 (물 ${layers.water.length} · 녹지 ${layers.green.length} · 도로 ${layers.roads.length} · 철도 ${layers.rail.length})\n`,
  );

  const markers = cfg.waypoints
    .filter((w) => w.marker)
    .map((w) => {
      const [x, y] = project([w.lon, w.lat]);
      return { kind: w.marker, x, y, label: w.name };
    });

  // 지명 — 지도에 이름이 없으면 어디를 달리는지 읽히지 않는다.
  // 이름 자체는 사실이라 저작권 문제가 없다(공식 코스맵 표기를 베끼지 않는다)
  const landmarks = (cfg.landmarks ?? []).map((l) => {
    const [x, y] = project([l.lon, l.lat]);
    return { name: l.name, kind: l.kind ?? 'place', x, y };
  });

  // 구간 노트 — 코스 위 어디쯤인지(0~1)를 미리 계산해 둔다.
  // ⚠️ 추정 경로라 km 로는 못 적는다. '순서'만 쓴다
  const cum = [0];
  for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + haversine(pts[i - 1], pts[i]));
  const total = cum[cum.length - 1];
  const beats = (cfg.beats ?? []).map((b) => {
    let best = 0;
    let bestD = Infinity;
    // 왕복 코스는 같은 지점이 두 번 나온다 — 갈 때/올 때 중 어느 쪽인지 좁혀서 찾는다
    const half = total / 2;
    const inLeg = (i) => (b.leg === 'back' ? cum[i] > half : cum[i] <= half);
    for (let i = 0; i < pts.length; i++) {
      if (cfg.outAndBack && !inLeg(i)) continue;
      const d = haversine(pts[i], [b.lon, b.lat]);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    }
    const [x, y] = project(pts[best]);
    return { title: b.title, note: b.note, at: +(cum[best] / total).toFixed(4), x, y };
  });

  // 배경은 별도 SVG 파일로 굽는다 — HTML 에 인라인하면 문서가 60KB 무거워지고
  // RSC 페이로드에 한 번 더 실린다. <img> 로 빼면 캐시되는 정적 자산 하나가 된다
  // 배경은 <img> 로 부르는 정적 파일이라 CSS 로 색을 못 바꾼다 → 스킨별로 구워 둔다.
  // 톤이 정해지면 SKINS 를 하나만 남기고 나머지 파일을 지운다
  fs.mkdirSync(MAP_DIR, { recursive: true });
  for (const [skin, c] of Object.entries(SKINS)) {
    const bg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CANVAS.w} ${project.height}">
<rect width="${CANVAS.w}" height="${project.height}" fill="${c.bg}"/>
<g fill="${c.green}">${layers.green.map((d) => `<path d="${d}"/>`).join('')}</g>
<g fill="${c.water}">${layers.water.map((d) => `<path d="${d}"/>`).join('')}</g>
<g fill="none" stroke="${c.road}" stroke-width="3" stroke-linecap="round">${layers.roads.map((d) => `<path d="${d}"/>`).join('')}</g>
<g fill="none" stroke="${c.rail}" stroke-width="2" stroke-dasharray="6 5">${layers.rail.map((d) => `<path d="${d}"/>`).join('')}</g>
${c.grid ? `<g fill="none" stroke="${c.grid}" stroke-width="1">${gridLines(project.height)}</g>` : ''}
</svg>`;
    const bgFile = path.join(MAP_DIR, `${eventId}.bg.${skin}.svg`);
    fs.writeFileSync(bgFile, bg);
    process.stdout.write(
      `  → ${path.relative(ROOT, bgFile)} (${(fs.statSync(bgFile).size / 1024).toFixed(0)}KB)\n`,
    );
  }

  const out = {
    eventId: cfg.eventId,
    source: cfg.source,
    verifiedAt: cfg.verifiedAt,
    sourceNote: cfg.sourceNote,
    sourceUrl: cfg.sourceUrl,
    viewBox: [0, 0, CANVAS.w, project.height],
    /** 스킨 이름을 끼워 쓴다 — `/data/course-maps/{id}.bg.{skin}.svg` */
    background: `/data/course-maps/${eventId}.bg.{skin}.svg`,
    skins: Object.keys(SKINS),
    course: toPath(pts, project, false, 1),
    markers,
    landmarks,
    beats,
    // 추정 경로의 거리는 화면에 쓰지 않는다. 저작자가 얼마나 어긋났는지 보라고 남긴다
    _debugDistanceKm: +km.toFixed(2),
    attribution: '© OpenStreetMap contributors',
  };
  const file = path.join(MAP_DIR, `${eventId}.json`);
  fs.writeFileSync(file, JSON.stringify(out));
  process.stdout.write(`  → ${path.relative(ROOT, file)} (${(fs.statSync(file).size / 1024).toFixed(0)}KB)\n`);
}

const args = process.argv.slice(2);
const ids = args.includes('--all')
  ? fs.readdirSync(COURSES_DIR).filter((f) => f.endsWith('.json')).map((f) => f.replace('.json', ''))
  : args;

if (!ids.length) {
  process.stderr.write('사용법: node scripts/course-map/build.mjs <eventId> | --all\n');
  process.exit(1);
}
for (const id of ids) {
  await build(id);
  await sleep(1200);
}
process.stdout.write('\n완료.\n');
