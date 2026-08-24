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
const CANVAS = {
  w: 1000,
  pad: 30,
  minRatio: 0.55,
  maxRatio: 1.05,
  /** 지면을 눕히는 비율(세로 압축). 1이면 정투영, 작을수록 눕는다 */
  tilt: 0.62,
  /**
   * 코스를 지면에서 띄우는 높이(px). 건물이 깊이를 만들기 전에는 이걸로 입체감을
   * 흉내 냈는데, 건물이 생긴 지금은 가림막일 뿐이라 0이다.
   */
  lift: 0,
  /** 건물 높이 과장 배율. 1이면 실제 미터를 지도 축척 그대로 세운다 */
  heightScale: 1.15,
  /** 높은 건물이 위로 잘리지 않게 캔버스 위쪽에 남기는 여백(px) */
  headroom: 120,
  /** 건물을 깊이 순으로 그리기 위한 밴드 수 — 밴드마다 벽·지붕 패스 하나씩만 낸다 */
  depthBands: 10,
};

/**
 * 배경 지형 팔레트. 2026-08-24 '나이트 트랙'으로 확정 — 지붕·벽 명도 차이가 유일하게
 * 제대로 읽히고, 1인칭 주행 화면과 톤이 이어진다. 후보 3안은 커밋 히스토리에 있다.
 */
const SKIN = {
  bg: '#0b0e11', green: '#111a16', water: '#0e1c26', road: '#1b2229', rail: '#181e24',
  grid: 'rgba(255,255,255,.035)',
  wall: '#161d24', roof: '#38464f', edge: 'rgba(255,255,255,.11)',
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

/** Overpass 는 공개 무료 인스턴스라 504/429 를 자주 낸다. 저작 시점 도구이니 기다렸다 다시 묻는다 */
async function overpass(query, tries = 4) {
  for (let i = 1; i <= tries; i++) {
    const res = await fetch(OVERPASS, {
      method: 'POST',
      headers: { 'User-Agent': UA, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ data: query }),
    });
    if (res.ok) return res.json();
    if (i === tries) throw new Error(`overpass → ${res.status} (${tries}회 시도)`);
    const wait = 4000 * i;
    process.stdout.write(`  overpass ${res.status} — ${wait / 1000}초 후 재시도 (${i}/${tries - 1})\n`);
    await sleep(wait);
  }
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
  // 지면을 눕히면 세로가 줄어든다. 줄어든 만큼 캔버스도 낮추되, 솟아오른 건물이
  // 위로 잘리지 않도록 headroom 을 남긴다
  const h = Math.round(CANVAS.w * ratio * CANVAS.tilt) + CANVAS.headroom;
  const iw = CANVAS.w - CANVAS.pad * 2;
  const ih = h - CANVAS.pad * 2 - CANVAS.headroom;
  const scale = Math.min(iw / (x1 - x0), ih / ((y1 - y0) * CANVAS.tilt));
  const offX = CANVAS.pad + (iw - (x1 - x0) * scale) / 2;
  const offY = CANVAS.pad + CANVAS.headroom + (ih - (y1 - y0) * scale * CANVAS.tilt) / 2;
  const project = ([lon, lat]) => [
    Math.round(offX + (rad(lon) - x0) * scale),
    Math.round(offY + (y1 - mercY(lat)) * scale * CANVAS.tilt),
  ];
  project.height = h;
  // 미터를 화면 px 로 바꾸는 비율 — 건물 높이를 세울 때 쓴다.
  // 경도 1라디안은 위도 φ 에서 R·cos φ 미터다
  const midLat = (minLat + maxLat) / 2;
  project.pxPerMeter = scale / (R * Math.cos(rad(midLat)));
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

/**
 * ⚠️ costing 은 'pedestrian' 이다. 로드레이스는 통제된 차도를 달리는데 보행 라우터는
 * 인도·횡단보도를 따른다 — 다리 구간에서 특히 갈린다. 그런데도 보행을 쓰는 이유:
 * 'auto' 는 공원 안 출발지점(문화의 마당)에 못 들어가 출발선을 도로로 밀어내고,
 * 'bicycle' 은 실측 결과 서강대교를 아예 안 쓴다(최근접 856m).
 * 셋 다 정답이 아니므로 화면에 이 한계를 그대로 적는다(course-map.tsx 의 캡션).
 */
async function routeCourse(cfg) {
  const wp = cfg.waypoints;
  const trip = await postJson(VALHALLA, {
    locations: wp.map((w) => ({ lat: w.lat, lon: w.lon })),
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
  // 반환점이 이름 없는 지점일 때(도로 위 아무 데나 콘 하나) 쓴다.
  // 마지막 웨이포인트는 '그 방향으로 충분히 멀리'만 잡아 두고, 여기서 공식이 밝힌
  // 편도 거리로 잘라 낸다. 분기 없는 외길에서만 성립한다 — 갈림길이 있으면
  // '몇 km 지점'이 한 점으로 정해지지 않는다. cfg.outboundNote 에 근거를 적을 것
  if (cfg.outboundKm) {
    const target = cfg.outboundKm * 1000;
    let acc = 0;
    const cut = [pts[0]];
    for (let i = 1; i < pts.length; i++) {
      const seg = haversine(pts[i - 1], pts[i]);
      if (acc + seg >= target) {
        const t = (target - acc) / seg; // 마지막 한 조각은 보간해서 정확히 끊는다
        cut.push([
          pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * t,
          pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * t,
        ]);
        acc = target;
        break;
      }
      acc += seg;
      cut.push(pts[i]);
    }
    if (acc < target)
      throw new Error(
        `outboundKm ${cfg.outboundKm}km 에 못 미친다 (라우팅 편도 ${(acc / 1000).toFixed(2)}km). ` +
          `마지막 웨이포인트를 더 멀리 잡을 것`
      );
    pts = cut;
  }
  // 왕복은 되돌아오는 경로를 다시 라우팅하지 않고 편도를 뒤집어 붙인다.
  // 재라우팅하면 일방통행·횡단 가능 지점 차이로 복귀선이 최대 72m 어긋났다(실측).
  // 공식이 '같은 길로 복귀'라고 밝힌 코스에서 그 어긋남은 순전한 노이즈다
  if (cfg.outAndBack) pts = pts.concat(pts.slice(0, -1).reverse());
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

/**
 * 건물 — 도시를 세우는 재료.
 *
 * ⚠️ **높이 태그가 있는 건물만 가져온다.** 이 bbox 의 건물 2,133동 중 높이가 적힌 건
 * 385동(18%)뿐이다. 나머지를 기본 높이로 세우면 없는 도시를 지어내는 것이고,
 * 이 사이트가 후기 438건을 걷어내며 세운 원칙에 정면으로 걸린다.
 * 화면에도 "OSM 에 등록된 실제 높이만 세웠다"고 적는다.
 */
async function fetchBuildings(bbox) {
  const [minLon, minLat, maxLon, maxLat] = bbox;
  const bb = `${minLat},${minLon},${maxLat},${maxLon}`;
  const q = `[out:json][timeout:120];
(
  way["building"]["height"](${bb});
  way["building"]["building:levels"](${bb});
  relation["building"]["height"](${bb});
  relation["building"]["building:levels"](${bb});
);
out geom;`;
  return overpass(q);
}

/** OSM 높이 태그를 미터로. 없으면 null (= 세우지 않는다) */
function tagHeight(tags = {}) {
  const num = (v) => {
    const m = /^\s*([\d.]+)/.exec(String(v ?? ''));
    return m ? parseFloat(m[1]) : null;
  };
  const h = num(tags.height);
  if (h) return h;
  const lv = num(tags['building:levels']);
  // 층고는 국내 업무·주거 혼재를 감안한 근사다. 층수 자체는 OSM 실데이터
  return lv ? lv * 3.2 : null;
}

/**
 * 눈높이에서 보이는 것들 — 노면과 가로수.
 *
 * 배경 지도용 쿼리는 간선도로만 가져온다(작은 길은 지도에서 노이즈다). 그런데
 * 러너는 그 작은 길 **위에** 서 있다. 눈높이 시점에서는 보행로·자전거도로가
 * 화면의 절반이라 따로 받아야 한다. 폭도 필요하다 — 선 하나로는 노면이 안 된다.
 */
async function fetchSurface(bbox) {
  const [minLon, minLat, maxLon, maxLat] = bbox;
  const bb = `${minLat},${minLon},${maxLat},${maxLon}`;
  const q = `[out:json][timeout:120];
(
  way["highway"~"^(motorway|trunk|primary|secondary|tertiary|residential|unclassified|service|living_street|pedestrian|footway|path|cycleway)$"](${bb});
  node["natural"="tree"](${bb});
  way["natural"="tree_row"](${bb});
);
out geom;`;
  return overpass(q);
}

/** 도로 폭(m). lanes 태그가 있으면 그걸 쓰고, 없으면 등급별 통상값 */
const LANE_M = 3.25;
const DEFAULT_W = {
  motorway: 14, trunk: 12, primary: 11, secondary: 9, tertiary: 7.5,
  residential: 6, unclassified: 6, living_street: 5, service: 4,
  pedestrian: 6, footway: 3, path: 2.5, cycleway: 3,
};
function roadWidth(tags = {}) {
  const w = parseFloat(String(tags.width ?? ''));
  if (w > 0) return Math.min(30, w);
  const lanes = parseFloat(String(tags.lanes ?? ''));
  if (lanes > 0) return Math.min(30, lanes * LANE_M);
  return DEFAULT_W[tags.highway] ?? 5;
}

/**
 * 1인칭 주행용 데이터 — 화면 좌표가 아니라 **미터 좌표**로 낸다.
 *
 * 지도는 저작 시점에 한 각도로 구워두면 되지만, 코스를 타고 지나가는 시점은
 * 매 프레임 카메라가 바뀌므로 브라우저가 직접 투영해야 한다. 그래서 여기서는
 * 원점(코스 중심) 기준 로컬 ENU 미터로만 내보내고, 투영은 클라이언트가 한다.
 *
 * 별도 파일로 뺀다 — 타보기를 누른 사람만 받으면 되는 데이터를 모든 방문자의
 * 문서에 실을 이유가 없다.
 */
function buildRide(osmBuildings, osmContext, osmSurface, pts, bbox) {
  const [minLon, minLat, maxLon, maxLat] = bbox;
  const lat0 = (minLat + maxLat) / 2;
  const lon0 = (minLon + maxLon) / 2;
  const mPerDegLat = (Math.PI / 180) * R;
  const mPerDegLon = mPerDegLat * Math.cos(rad(lat0));
  const toM = ([lon, lat]) => [
    Math.round((lon - lon0) * mPerDegLon),
    Math.round((lat - lat0) * mPerDegLat),
  ];

  const buildings = [];
  for (const el of osmBuildings.elements ?? []) {
    const h = tagHeight(el.tags);
    if (!h) continue;
    let rings = [];
    if (el.type === 'way' && el.geometry) rings = [el.geometry.map((g) => [g.lon, g.lat])];
    else if (el.type === 'relation')
      rings = (el.members ?? [])
        .filter((m) => m.geometry && (m.role === 'outer' || m.role === ''))
        .map((m) => m.geometry.map((g) => [g.lon, g.lat]));
    for (const ring of rings) {
      const flat = [];
      for (const c of ring) {
        const [x, y] = toM(c);
        const n = flat.length;
        if (n && flat[n - 2] === x && flat[n - 1] === y) continue;
        flat.push(x, y);
      }
      if (flat.length < 8) continue; // 삼각형 미만은 버린다
      // OSM 링은 감김 방향이 제각각이다. 반시계로 통일해 두지 않으면 1인칭에서
      // 뒷면 컬링이 건물마다 반대로 걸려 앞벽이 뚫려 보인다
      let area = 0;
      for (let i = 0; i < flat.length; i += 2) {
        const j = (i + 2) % flat.length;
        area += flat[i] * flat[j + 1] - flat[j] * flat[i + 1];
      }
      if (area < 0) {
        const rev = [];
        for (let i = flat.length - 2; i >= 0; i -= 2) rev.push(flat[i], flat[i + 1]);
        flat.length = 0;
        flat.push(...rev);
      }
      buildings.push([Math.round(h), ...flat.slice(0, 40)]);
    }
  }

  // 물 — 이 코스의 하이라이트가 한강 횡단이라 없으면 다리가 허공에 뜬다
  const waterRings = [];
  for (const el of osmContext.elements ?? []) {
    const t = el.tags ?? {};
    if (el.type === 'relation' && t.natural === 'water') {
      const ways = (el.members ?? [])
        .filter((m) => m.geometry && (m.role === 'outer' || m.role === ''))
        .map((m) => m.geometry.map((g) => [g.lon, g.lat]));
      for (const ring of stitchRings(ways)) waterRings.push(ring);
    } else if (el.geometry && (t.natural === 'water' || t.waterway === 'riverbank')) {
      waterRings.push(el.geometry.map((g) => [g.lon, g.lat]));
    }
  }
  const water = [];
  for (const ring of waterRings) {
    const flat = [];
    for (const c of ring) {
      const [x, y] = toM(c);
      const n = flat.length;
      if (n && Math.abs(flat[n - 2] - x) + Math.abs(flat[n - 1] - y) < 6) continue;
      flat.push(x, y);
    }
    if (flat.length >= 8) water.push(flat);
  }

  // 녹지 — 배경 쿼리에서
  const green = [];
  for (const el of osmContext.elements ?? []) {
    if (!el.geometry) continue;
    const t = el.tags ?? {};
    if (!(t.leisure === 'park' || (t.landuse && !t.highway))) continue;
    const flat = [];
    for (const g of el.geometry) {
      const [x, y] = toM([g.lon, g.lat]);
      const n = flat.length;
      if (n && Math.abs(flat[n - 2] - x) + Math.abs(flat[n - 1] - y) < 8) continue;
      flat.push(x, y);
    }
    if (flat.length >= 4) green.push(flat);
  }

  // 노면과 가로수 — 눈높이 화면의 절반이다. [폭m, x0,y0, x1,y1, ...]
  const roads = [];
  const trees = [];
  for (const el of osmSurface.elements ?? []) {
    const t = el.tags ?? {};
    if (el.type === 'node' && t.natural === 'tree') {
      const [x, y] = toM([el.lon, el.lat]);
      trees.push(x, y);
      continue;
    }
    if (!el.geometry) continue;
    if (t.natural === 'tree_row') {
      // 가로수길은 선이다 — 12m 간격으로 나무를 심는다(실제 간격은 미상이라 균등 배치)
      for (let i = 1; i < el.geometry.length; i++) {
        const [x0, y0] = toM([el.geometry[i - 1].lon, el.geometry[i - 1].lat]);
        const [x1, y1] = toM([el.geometry[i].lon, el.geometry[i].lat]);
        const len = Math.hypot(x1 - x0, y1 - y0);
        const n = Math.floor(len / 12);
        for (let k = 0; k <= n; k++) {
          trees.push(Math.round(x0 + ((x1 - x0) * k) / (n || 1)), Math.round(y0 + ((y1 - y0) * k) / (n || 1)));
        }
      }
      continue;
    }
    if (!t.highway) continue;
    const flat = [];
    for (const g of el.geometry) {
      const [x, y] = toM([g.lon, g.lat]);
      const n = flat.length;
      if (n && Math.abs(flat[n - 2] - x) + Math.abs(flat[n - 1] - y) < 6) continue;
      flat.push(x, y);
    }
    if (flat.length < 4) continue;
    roads.push([Math.round(roadWidth(t) * 10) / 10, ...flat]);
  }

  const course = [];
  for (const c of pts) {
    const [x, y] = toM(c);
    const n = course.length;
    if (n && course[n - 2] === x && course[n - 1] === y) continue;
    course.push(x, y);
  }
  return { unit: 'm', lat0, lon0, buildings, water, roads, green, trees, course };
}

/**
 * 건물을 압출해 깊이 순으로 그린다.
 *
 * 패스를 건물마다 내면 385동 × (지붕+벽) = 수천 개가 되어 문서가 무거워진다.
 * 화면 깊이(y)로 밴드를 나누고 **밴드마다 벽 하나 · 지붕 하나**로 합쳐서
 * 20개 안팎의 패스로 끝낸다. 밴드 순서가 곧 앞뒤 가림 순서다.
 */
function buildCity(osm, project) {
  const px = project.pxPerMeter * CANVAS.heightScale;
  const items = [];

  for (const el of osm.elements ?? []) {
    const h = tagHeight(el.tags);
    if (!h) continue;
    let rings = [];
    if (el.type === 'way' && el.geometry) {
      rings = [el.geometry.map((g) => [g.lon, g.lat])];
    } else if (el.type === 'relation') {
      rings = (el.members ?? [])
        .filter((m) => m.geometry && (m.role === 'outer' || m.role === ''))
        .map((m) => m.geometry.map((g) => [g.lon, g.lat]));
    }
    for (const ring of rings) {
      const g = [];
      for (const c of ring) {
        const p = project(c);
        const last = g[g.length - 1];
        if (!last || Math.abs(p[0] - last[0]) + Math.abs(p[1] - last[1]) >= 2) g.push(p);
      }
      if (g.length < 3) continue;
      const w = Math.max(...g.map((p) => p[0])) - Math.min(...g.map((p) => p[0]));
      const d = Math.max(...g.map((p) => p[1])) - Math.min(...g.map((p) => p[1]));
      if (Math.max(w, d) < 7) continue; // 화면에서 점만 한 건물은 노이즈
      const lift = Math.round(h * px);
      if (lift < 3) continue;
      items.push({ g, lift, depth: Math.max(...g.map((p) => p[1])) });
    }
  }

  if (!items.length) return { bands: [], count: 0, tallest: 0 };

  items.sort((a, b) => a.depth - b.depth); // 먼 것부터
  const per = Math.ceil(items.length / CANVAS.depthBands);
  const bands = [];
  for (let i = 0; i < items.length; i += per) {
    let walls = '';
    let roofs = '';
    for (const it of items.slice(i, i + per)) {
      const roof = it.g.map((p) => [p[0], p[1] - it.lift]);
      roofs += roof.map((p, k) => `${k ? 'L' : 'M'}${p[0]} ${p[1]}`).join('') + 'Z';
      // 벽은 '앞쪽으로 내려오는' 변만 그린다. 뒤로 넘어가는 변은 지붕에 가려 안 보인다
      for (let k = 0; k < it.g.length; k++) {
        const a = it.g[k];
        const b = it.g[(k + 1) % it.g.length];
        if (b[0] === a[0] && b[1] === a[1]) continue;
        if (b[0] - a[0] === 0 && b[1] <= a[1]) continue;
        if (b[0] < a[0]) continue; // 시계방향 기준 뒷면
        walls += `M${a[0]} ${a[1]}L${b[0]} ${b[1]}L${b[0]} ${b[1] - it.lift}L${a[0]} ${a[1] - it.lift}Z`;
      }
    }
    bands.push({ walls, roofs });
  }
  return { bands, count: items.length, tallest: Math.max(...items.map((i) => i.lift)) };
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
  await sleep(1000);
  const osmBuildings = await fetchBuildings(bbox);
  const city = buildCity(osmBuildings, project);
  await sleep(1000);
  const osmSurface = await fetchSurface(bbox);
  const ride = buildRide(osmBuildings, osm, osmSurface, pts, bbox);
  const rideFile = path.join(MAP_DIR, `${eventId}.ride.json`);
  fs.writeFileSync(rideFile, JSON.stringify(ride));
  process.stdout.write(
    `  주행 데이터 건물 ${ride.buildings.length} · 물 ${ride.water.length} · 노면 ${ride.roads.length} · 녹지 ${ride.green.length} · 가로수 ${ride.trees.length / 2} → ` +
      `${path.relative(ROOT, rideFile)} (${(fs.statSync(rideFile).size / 1024).toFixed(0)}KB)\n`,
  );
  process.stdout.write(
    `  도시 ${city.count}동 (높이 태그 있는 것만) · 최고 ${city.tallest}px · 밴드 ${city.bands.length}\n`,
  );
  const featureCount = Object.values(layers).reduce((n, a) => n + a.length, 0);
  process.stdout.write(
    `  배경 ${featureCount}개 (물 ${layers.water.length} · 녹지 ${layers.green.length} · 도로 ${layers.roads.length} · 철도 ${layers.rail.length})\n`,
  );

  // ── 입체 ──────────────────────────────────────────────────────────
  // 지면은 눕혀 두고 코스만 위로 띄운다. 띄운 선 · 지면 그림자 · 둘을 잇는 받침선,
  // 이 셋이 있으면 새로운 사실 주장 없이 깊이가 생긴다(고도 데이터를 쓰지 않는다 —
  // SRTM 표본은 도심에서 노이즈가 커서, 추정 경로 위에 그리면 거짓말이 하나 더 는다)
  const LIFT = CANVAS.lift;
  const groundPts = pts.map((p) => project(p));
  const liftedPath = toPath(pts, (p) => {
    const [x, y] = project(p);
    return [x, y - LIFT];
  }, false, 1);
  const groundPath = toPath(pts, project, false, 1);

  // 받침선 — 화면에서 일정 간격마다 하나씩. 너무 촘촘하면 빗금처럼 보인다
  const stilts = [];
  let acc = Infinity;
  for (let i = 0; i < groundPts.length; i++) {
    if (i > 0) {
      acc += Math.hypot(groundPts[i][0] - groundPts[i - 1][0], groundPts[i][1] - groundPts[i - 1][1]);
    }
    if (acc >= 44) {
      acc = 0;
      const [x, y] = groundPts[i];
      stilts.push(`M${x} ${y}L${x} ${y - LIFT}`);
    }
  }

  const markers = cfg.waypoints
    .filter((w) => w.marker)
    .map((w) => {
      const [x, y] = project([w.lon, w.lat]);
      return { kind: w.marker, x, y: y - LIFT, groundY: y, label: w.name };
    });

  // outboundKm 로 잘라 낸 코스는 반환점이 웨이포인트가 아니라 폴리라인 위 한 점이다.
  // 마지막 웨이포인트(‘그 방향으로 멀리’)에 marker 를 달면 코스 밖에 찍히므로 여기서 놓는다
  if (cfg.outboundKm) {
    const [x, y] = project(pts[(pts.length - 1) / 2]);
    markers.push({ kind: 'turn', x, y: y - LIFT, groundY: y, label: cfg.turnLabel ?? '반환점' });
  }

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
    return { title: b.title, note: b.note, at: +(cum[best] / total).toFixed(4), x, y: y - LIFT };
  });

  // 배경은 별도 SVG 파일로 굽는다 — HTML 에 인라인하면 문서가 60KB 무거워지고
  // RSC 페이로드에 한 번 더 실린다. <img> 로 빼면 캐시되는 정적 자산 하나가 된다
  // 배경은 <img> 로 부르는 정적 파일이라 CSS 로 색을 못 바꾼다 → 스킨별로 구워 둔다.
  // 톤이 정해지면 SKINS 를 하나만 남기고 나머지 파일을 지운다
  fs.mkdirSync(MAP_DIR, { recursive: true });
  {
    const c = SKIN;
    const bg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CANVAS.w} ${project.height}">
<rect width="${CANVAS.w}" height="${project.height}" fill="${c.bg}"/>
<g fill="${c.green}">${layers.green.map((d) => `<path d="${d}"/>`).join('')}</g>
<g fill="${c.water}">${layers.water.map((d) => `<path d="${d}"/>`).join('')}</g>
<g fill="none" stroke="${c.road}" stroke-width="3" stroke-linecap="round">${layers.roads.map((d) => `<path d="${d}"/>`).join('')}</g>
<g fill="none" stroke="${c.rail}" stroke-width="2" stroke-dasharray="6 5">${layers.rail.map((d) => `<path d="${d}"/>`).join('')}</g>
${c.grid ? `<g fill="none" stroke="${c.grid}" stroke-width="1">${gridLines(project.height)}</g>` : ''}
${city.bands
  .map(
    (b) =>
      `<g><path d="${b.walls}" fill="${c.wall}" stroke="${c.edge}" stroke-width="0.6"/>` +
      `<path d="${b.roofs}" fill="${c.roof}" stroke="${c.edge}" stroke-width="0.6"/></g>`,
  )
  .join('')}
</svg>`;
    const bgFile = path.join(MAP_DIR, `${eventId}.bg.svg`);
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
    // 톤 후보 시절엔 `{skin}` 을 끼워 썼다. 나이트로 확정하며 파일명에서 스킨을
    // 뺐는데 이 문자열만 남아 배경이 통째로 404 였다 — 화면은 흰 판이 됐고
    // 빌드·타입·lint 는 전부 통과했다. 골조를 걷을 땐 URL 을 만드는 자리까지 볼 것
    background: `/data/course-maps/${eventId}.bg.svg`,
    /** 1인칭 주행 데이터 — 타보기를 누를 때만 받는다 */
    ride: `/data/course-maps/${eventId}.ride.json`,
    /** 띄운 코스 — 애니메이션·주자 위치의 기준선 */
    course: liftedPath,
    /** 지면에 붙는 그림자 (같은 형상, lift 만큼 아래) */
    courseGround: groundPath,
    /** 띄운 선과 그림자를 잇는 받침선 */
    stilts,
    lift: LIFT,
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
