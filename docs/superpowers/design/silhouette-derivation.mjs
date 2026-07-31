// 중립 러닝화 실루엣 좌표 유도 (1회용)
//
// 데일리·쿠션화·레이싱 3켤레의 side.webp 알파 채널에서 상/하 외곽선을 뽑아
// 구간별로 조합하고 제어점을 줄여 중립 실루엣 path를 만든다.
// 결과는 hero-silhouette.tsx 에 하드코딩으로 고정되므로 재실행할 필요는 없다.
//
//   node docs/superpowers/design/silhouette-derivation.mjs
//     -> paths.json               최종 OUTLINE / MIDSOLE / FOOT path 문자열 (커밋)
//     -> silhouette-preview.html  승인 조건 6가지 육안 검증용 (커밋)
//     -> outlines.json            소스별 원시 외곽선 (중간 산출물, 미커밋)
//     -> control-points.json      조합·단순화한 제어점 (중간 산출물, 미커밋)
//     -> debug-sources.svg        소스별 외곽선 대조용 (중간 산출물, 미커밋)
//
// 주의: sharp.trim() 은 이 webp 들에서 동작하지 않는다(투명부 RGB가 흰색이라 색 기준 트림이
//       안 먹음). 알파 채널로 직접 bbox 를 구한다.

import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const ROOT = new URL('../../../', import.meta.url).pathname; // 리포 루트 (이미지 읽기용)
const OUT = new URL('./', import.meta.url).pathname; // 이 스크립트가 있는 디렉토리 (산출물)

// 소스 3종은 controller가 사전 검증했다(2026-07-31): 전부 알파 있는 정면 측면도.
// ⚠️ 원안의 adidas/evosl 은 각도 샷이라 제외됐다. 소스 교체 시 알파 bbox 비율이
//    2.0~2.45 인지 먼저 확인할 것.
const SOURCES = [
  { role: 'heel', src: 'public/images/shoes/brooks/ghost17/side.webp' }, // 데일리 — 힐 구조
  { role: 'upper', src: 'public/images/shoes/nike/vomero18/side.webp' }, // 쿠션화 — 발등·갑피
  { role: 'toe', src: 'public/images/shoes/saucony/endorphinelite2/side.webp' }, // 레이싱 — 앞코·미드솔
];

const W = 400; // 정규화 폭(샘플 수)
const ALPHA = 132; // 실루엣 판정 임계값

// ── Step 1~2: 외곽선 추출 ───────────────────────────────────────────────────

/** 알파 bbox 로 크롭 -> 폭 W 리사이즈 -> 상/하 외곽선 샘플링. 힐이 왼쪽(x=0)이 되도록 정렬. */
async function outline(src) {
  const { data, info } = await sharp(ROOT + src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  let x0 = info.width, y0 = info.height, x1 = -1, y1 = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * 4 + 3] > 16) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  const bw = x1 - x0 + 1, bh = y1 - y0 + 1;

  // 크롭 후 폭 W 로 리사이즈. 살짝 흐려서 러그·끈 요철을 죽인다.
  const png = await sharp(ROOT + src)
    .extract({ left: x0, top: y0, width: bw, height: bh })
    .resize(W, null)
    .png()
    .toBuffer();
  const meta = await sharp(png).metadata();
  const a = await sharp(png).extractChannel(3).blur(2.5).raw().toBuffer();
  const { width: w, height: h } = meta;

  let top = [], bottom = [];
  for (let x = 0; x < w; x++) {
    let t = -1, b = -1;
    for (let y = 0; y < h; y++) {
      if (a[y * w + x] > ALPHA) { if (t < 0) t = y; b = y; }
    }
    top.push(t < 0 ? null : t / w); // 폭 기준 정규화 → 가로세로비 보존
    bottom.push(b < 0 ? null : b / w);
  }

  // 힐이 x=0 쪽에 오도록 방향 정렬.
  // 판정: 실루엣 단면적(bottom-top)을 좌우 절반으로 나눠 비교. 힐 쪽이 더 두껍다.
  // (양 끝점 비교는 둥근 마감 때문에 오판했다 — 면적 기준이 안정적이다.)
  const areaOf = (a0, a1) => {
    let s = 0;
    for (let i = Math.round(w * a0); i < Math.round(w * a1); i++) {
      if (top[i] != null) s += bottom[i] - top[i];
    }
    return s;
  };
  const areaL = areaOf(0, 0.5), areaR = areaOf(0.5, 1);
  const heelIsLeft = areaL > areaR;
  if (!heelIsLeft) { top = top.slice().reverse(); bottom = bottom.slice().reverse(); }
  const areas = [areaL.toFixed(1), areaR.toFixed(1)];

  // 접지선(가장 낮은 점)을 0 으로 두고 위로 재는 높이 좌표계로 변환 → 소스끼리 밑창이 정렬된다.
  const ground = Math.max(...bottom.filter((n) => n != null));
  const toH = (n) => (n == null ? null : ground - n);

  return {
    src, w, h, ratio: bw / bh, flipped: !heelIsLeft, areas,
    topH: top.map(toH),      // 갑피 상단 높이 (클수록 높음)
    botH: bottom.map(toH),   // 아웃솔 하단 높이 (접지 구간은 0)
  };
}

const out = {};
for (const s of SOURCES) {
  out[s.role] = await outline(s.src);
  const o = out[s.role];
  console.log(
    `${s.role.padEnd(6)} ${o.src.split('/').slice(-2)[0].padEnd(16)} bbox비 ${o.ratio.toFixed(2)}` +
    `  샘플 ${o.topH.filter((n) => n != null).length}  좌우반전 ${o.flipped}  면적L/R ${o.areas.join('/')}` +
    `  최고높이 ${Math.max(...o.topH.filter((n) => n != null)).toFixed(3)}`
  );
}
writeFileSync(OUT + 'outlines.json', JSON.stringify(out));

// ── Step 3: 구간 조합 + 단순화 ──────────────────────────────────────────────

// 구간: 힐 0~28% / 갑피 28~66% / 앞코 66~100%  (x=0 이 힐, x=1 이 앞코)
const SEG = [
  { role: 'heel', from: 0.0, to: 0.28 },
  { role: 'upper', from: 0.28, to: 0.66 },
  { role: 'toe', from: 0.66, to: 1.0 },
];
const BLEND = 0.06; // 경계 전후 6% 선형 보간
const POINTS = 24; // 최종 제어점 수
const CLUSTER = 0.65; // 제어점을 양 끝(힐 뒷벽·앞코)에 몰아주는 정도 0=균등 1=코사인
const ASPECT = 2.25; // 최종 가로세로비 — 소스 3종(2.44/2.27/2.06)의 중간값

// 소스별 세로 스케일 통일: 각 소스를 "자기 최고 높이 = 1" 로 맞춘 뒤 조합한다.
// 이걸 빼면 스택 높은 레이싱화(toe 소스)의 전족부가 상대적으로 부풀어
// 앞코가 뭉툭해진다(1차 시안 실패 원인).
for (const k of Object.keys(out)) {
  const m = Math.max(...out[k].topH.filter((n) => n != null));
  out[k].topH = out[k].topH.map((n) => (n == null ? null : n / m));
  out[k].botH = out[k].botH.map((n) => (n == null ? null : n / m));
}

const sampleAt = (arr, u) => {
  const f = u * (arr.length - 1);
  const i = Math.max(0, Math.min(arr.length - 2, Math.floor(f)));
  const a = arr[i] ?? arr[i + 1] ?? 0, b = arr[i + 1] ?? arr[i] ?? 0;
  return a + (b - a) * (f - i);
};

/** u(0~1)에서 담당 소스를 고르고 경계 전후 BLEND 구간은 선형 보간 */
function blended(which, u) {
  let num = 0, den = 0;
  for (const s of SEG) {
    const lo = s.from - BLEND / 2, hi = s.to + BLEND / 2;
    if (u < lo || u > hi) continue;
    let wgt = 1;
    if (u < s.from + BLEND / 2) wgt = Math.min(wgt, (u - lo) / BLEND);
    if (u > s.to - BLEND / 2) wgt = Math.min(wgt, (hi - u) / BLEND);
    wgt = Math.max(0, Math.min(1, wgt));
    num += sampleAt(out[s.role][which], u) * wgt;
    den += wgt;
  }
  return num / (den || 1);
}

// 제어점 u 배치: 균등 + 코사인(양 끝 밀집) 혼합.
// 힐 뒷벽(u 0~0.05)과 앞코(u 0.95~1)는 5% 안에서 높이가 30%p 넘게 변해
// 균등 배치로는 뭉툭한 덩어리가 된다(1차 시안 실패 원인).
const us = Array.from({ length: POINTS }, (_, i) => {
  const t = i / (POINTS - 1);
  return t * (1 - CLUSTER) + ((1 - Math.cos(Math.PI * t)) / 2) * CLUSTER;
});
const smooth = (arr) => arr.map((v, i) => (i === 0 || i === arr.length - 1 ? v : (arr[i - 1] + 2 * v + arr[i + 1]) / 4));
// 상단(갑피)은 구간별로 담당 소스를 쓴다 — 힐카운터·인스텝·토박스 형태가 여기서 나온다.
const topPts = smooth(us.map((u) => blended('topH', u)));
// 하단(아웃솔)은 3켤레 평균을 쓴다. 밑창 라인은 브랜드 색이 옅은 반면 힐 플레어처럼
// 모델 고유 구조가 튀는 곳이라, 평균이 "특정 모델의 독특한 힐 구조"를 지우는 가장 곧은 방법이다.
const roles = Object.keys(out);
const botPts = smooth(
  us.map((u) => roles.reduce((s, r) => s + sampleAt(out[r].botH, u), 0) / roles.length)
);

const natTop = Math.max(...topPts);
console.log(`\n조합 결과: 최고높이 ${natTop.toFixed(3)} (정규화) · 적용 가로세로비 ${ASPECT}  (제어점 ${POINTS}개)`);

writeFileSync(
  OUT + 'control-points.json',
  JSON.stringify({ SEG, BLEND, POINTS, us, topH: topPts, botH: botPts, aspect: 1 / natTop }, null, 1)
);

// ── 디버그: 소스별 외곽선과 조합 결과를 같은 축으로 겹쳐 그린다 ─────────────

{
  const SW = 900, PAD = 24;
  const IW = SW - PAD * 2;
  const SH = Math.round((IW / ASPECT) * 1.1) + 34; // 최고높이 1.1 까지 잘리지 않게
  const sx = (u) => PAD + u * IW;
  const sy = (hh) => SH - PAD - hh * (IW / ASPECT); // 높이는 정규화(최고=1) 단위
  const poly = (arr, xs) =>
    arr.map((v, i) => `${sx(xs ? xs[i] : i / (arr.length - 1)).toFixed(1)},${sy(v ?? 0).toFixed(1)}`).join(' ');
  const colors = { heel: '#2563eb', upper: '#16a34a', toe: '#d97706' };
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${SW}" height="${SH * 4}" viewBox="0 0 ${SW} ${SH * 4}">`;
  svg += `<rect width="100%" height="100%" fill="#F7F4ED"/>`;
  let row = 0;
  for (const k of ['heel', 'upper', 'toe']) {
    svg += `<g transform="translate(0 ${row * SH})"><text x="8" y="16" font-size="12" fill="#17150F">${k} — ${out[k].src.split('/').slice(-2)[0]}</text>`;
    svg += `<polyline points="${poly(out[k].topH)}" fill="none" stroke="${colors[k]}" stroke-width="1.5"/>`;
    svg += `<polyline points="${poly(out[k].botH)}" fill="none" stroke="${colors[k]}" stroke-width="1.5" stroke-dasharray="3 3"/></g>`;
    row++;
  }
  svg += `<g transform="translate(0 ${row * SH})"><text x="8" y="16" font-size="12" fill="#17150F">combined (${POINTS}pt)</text>`;
  svg += `<polyline points="${poly(topPts, us)}" fill="none" stroke="#17150F" stroke-width="2"/>`;
  svg += `<polyline points="${poly(botPts, us)}" fill="none" stroke="#FF4D00" stroke-width="2"/>`;
  svg += `<g fill="#17150F">${us.map((u, i) => `<circle cx="${sx(u).toFixed(1)}" cy="${sy(topPts[i]).toFixed(1)}" r="2"/>`).join('')}</g></g></svg>`;
  writeFileSync(OUT + 'debug-sources.svg', svg);
}

// ── Step 3b: 뷰박스 좌표로 스케일 + path 문자열 생성 ────────────────────────

// 뷰박스 0 0 560 400, 신발 배치 영역 x 160~520 / y 185~305.
// 실제 러닝화 비율(2.0~2.4)이 박스 비율(3.0)보다 세로로 두꺼우므로,
// 박스를 넘지 않도록 높이를 기준으로 맞추고 영역 안에서 가운데 정렬한다.
const BOX = { x0: 160, x1: 520, y0: 185, y1: 305 };
const boxW = BOX.x1 - BOX.x0, boxH = BOX.y1 - BOX.y0;
// 도형은 "폭 ASPECT · 높이 natTop(≈1)" 비율. 박스(3.0)가 실제 러닝화(2.25)보다
// 납작하므로 높이를 기준으로 맞추고 박스 안에서 가운데 정렬한다(박스를 넘지 않는다).
const drawH = Math.min(boxH, (boxW / ASPECT) * natTop);
const scale = drawH / natTop; // 정규화 높이 1 당 px
const drawW = scale * natTop * ASPECT;
const offX = BOX.x0 + (boxW - drawW) / 2;
const baseY = BOX.y0 + (boxH - drawH) / 2 + drawH; // 접지선
const PX = (u) => offX + u * drawW;
const PY = (hh) => baseY - hh * scale;

/** Catmull-Rom -> 3차 베지어. 열린 곡선. */
function curve(pts) {
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || pts[i + 1];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C ${c1[0].toFixed(1)} ${c1[1].toFixed(1)}, ${c2[0].toFixed(1)} ${c2[1].toFixed(1)}, ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d;
}

const topXY = us.map((u, i) => [PX(u), PY(topPts[i])]);
const botXY = us.map((u, i) => [PX(u), PY(botPts[i])]);

// 외곽선: 힐 상단 → 앞코(위) → 앞코 → 하단 역방향 → 힐로 닫기
const OUTLINE = curve(topXY) + ' ' + curve(botXY.slice().reverse()).replace(/^M[^C]*C/, 'C') + ' Z';

// 미드솔 분리선: 하단 외곽에서 일정 높이 위로 띄운 곡선(폼 두께). 앞코 쪽에서 살짝 얇아진다.
// 신발 높이 1 기준 미드솔 두께 — 힐 26% → 앞코 17%
const midHs = us.map((u, i) => {
  const t = Math.min(1, Math.max(0, (u - 0.35) / 0.55));
  const thick = 0.26 - 0.09 * t ** 1.2;
  return Math.min(botPts[i] + thick, topPts[i] - 0.06);
});
// 미드솔 선은 힐 뒤쪽부터 토박스 앞까지만 긋는다. 앞코 끝까지 끌면 외곽선과 붙어
// 앞코가 뭉개진다(3차 시안에서 확인).
const MID_FROM = 0.02, MID_TO = 0.9;
const midPts = us
  .map((u, i) => [u, PX(u), PY(midHs[i])])
  .filter(([u]) => u >= MID_FROM && u <= MID_TO)
  .map(([, x, y]) => [x, y]);
const MIDSOLE = curve(midPts);

// 발 윤곽(FOOT): 승인 조건 ⑤ 검증용 — 미리보기 전용이며 컴포넌트에는 넣지 않는다.
// 같은 제어점 좌표계에서 만들어 실루엣과 위치가 어긋나지 않게 한다.
const footTop = (u) => {
  // 발등 라인: 발목(칼라 홈 근처)에서 시작해 앞으로 갈수록 낮아진다.
  const t = (u - 0.22) / 0.66;
  return sampleAtArr(topPts, u) * (0.80 - 0.28 * Math.min(1, Math.max(0, t)) ** 1.2);
};
const footSole = (u) => {
  // 발바닥: 미드솔 윗면 + 아치(중족부에서 살짝 뜬다)
  const arch = 0.12 * Math.exp(-(((u - 0.45) / 0.16) ** 2));
  return sampleAtArr(midHs, u) + 0.03 + arch;
};
// us 는 비균등(코사인 밀집)이라 sampleAt 을 쓸 수 없다 — u 값으로 직접 보간한다.
function sampleAtArr(arr, u) {
  let i = 0;
  while (i < us.length - 2 && us[i + 1] < u) i++;
  const span = us[i + 1] - us[i] || 1;
  return arr[i] + (arr[i + 1] - arr[i]) * ((u - us[i]) / span);
}

const FOOT_FROM = 0.1, FOOT_TO = 0.94;
const HEEL_ROUND = 0.11; // 뒤꿈치를 둥글게 닫는 구간
const TOE_ROUND = 0.14; // 발가락을 낮게 모아 닫는 구간
const footN = 26;

// 양 끝을 타원처럼 닫는다. 그냥 자르면 뒤꿈치가 수직 벽, 발가락이 네모난 상자로 보인다.
// 뒤꿈치는 위아래 중간으로 모으고(둥근 힐), 발가락은 발바닥 가까이로 모은다(낮은 앞코).
const closed = (u) => {
  const top = footTop(u), sole = footSole(u);
  let t = 0, target = null;
  if (u < FOOT_FROM + HEEL_ROUND) {
    t = 1 - (u - FOOT_FROM) / HEEL_ROUND;
    target = (top + sole) / 2;
  } else if (u > FOOT_TO - TOE_ROUND) {
    t = (u - (FOOT_TO - TOE_ROUND)) / TOE_ROUND;
    target = sole + 0.04;
  }
  if (target == null) return [top, sole];
  const e = Math.sqrt(Math.max(0, 1 - t * t)); // 타원 감쇠
  return [target + (top - target) * e, target + (sole - target) * e];
};

const footTopXY = [], footSoleXY = [];
for (let i = 0; i < footN; i++) {
  const u = FOOT_FROM + ((FOOT_TO - FOOT_FROM) * i) / (footN - 1);
  const [t, s] = closed(u);
  footTopXY.push([PX(u), PY(t)]);
  footSoleXY.push([PX(u), PY(s)]);
}
const FOOT = curve(footTopXY) + ' ' + curve(footSoleXY.slice().reverse()).replace(/^M[^C]*C/, 'C') + ' Z';

writeFileSync(OUT + 'paths.json', JSON.stringify({ OUTLINE, MIDSOLE, FOOT, BOX, scale, baseY }, null, 1));
console.log(`OUTLINE ${OUTLINE.length}자 / MIDSOLE ${MIDSOLE.length}자 / FOOT ${FOOT.length}자`);
console.log(`배치: x ${PX(0).toFixed(0)}~${PX(1).toFixed(0)}  y ${PY(natTop).toFixed(0)}~${baseY.toFixed(0)}`);

// ── Step 4: 육안 검증용 미리보기 HTML ───────────────────────────────────────

{
  // 발볼 계측 틱: 힐 접지점 / 발볼(중족지절, 발 길이의 약 66%) / 앞코를 아래쪽 치수선에 표시.
  // 발 윤곽이 신발 안에서 해부학적으로 맞는 자리에 앉았는지 눈으로 대조하기 위한 것.
  const TICKS = [
    { u: 0.06, label: '힐' },
    { u: 0.66, label: '발볼' },
    { u: 0.96, label: '앞코' },
  ];
  const ticks = () => {
    const y = baseY + 16;
    const marks = TICKS.map(({ u, label }) => {
      const x = PX(u).toFixed(1);
      return `<line x1="${x}" y1="${y - 5}" x2="${x}" y2="${y + 5}" stroke="var(--signal)" stroke-width="1.2"/>` +
        `<line x1="${x}" y1="${PY(0).toFixed(1)}" x2="${x}" y2="${y - 5}" stroke="var(--signal)" stroke-width=".7" stroke-dasharray="2 3" opacity=".5"/>` +
        `<text x="${x}" y="${y + 18}" font-size="9" fill="var(--signal)" text-anchor="middle" opacity=".8">${label}</text>`;
    }).join('');
    return `<line x1="${PX(TICKS[0].u).toFixed(1)}" y1="${y}" x2="${PX(TICKS[2].u).toFixed(1)}" y2="${y}" stroke="var(--signal)" stroke-width=".7" opacity=".5"/>${marks}`;
  };

  const shoe = (w, { foot, box, op, tick } = {}) => `<svg width="${w}" height="${Math.round((w * 400) / 560)}" viewBox="0 0 560 400" fill="none" style="opacity:${op ?? 1}">
      ${box ? `<rect x="${BOX.x0}" y="${BOX.y0}" width="${boxW}" height="${boxH}" class="box"/>` : ''}
      <path d="${OUTLINE}" stroke="var(--ink)" stroke-width="1.7" stroke-linejoin="round"/>
      <path d="${MIDSOLE}" stroke="var(--signal)" stroke-width="2" stroke-linecap="round"/>
      ${foot ? `<path d="${FOOT}" stroke="var(--ink)" stroke-width="1.1" stroke-dasharray="4 3" opacity=".45"/>` : ''}
      ${tick ? ticks() : ''}
    </svg>`;
  const cell = (cap, svg) => `<div class="cell"><div class="cap">${cap}</div>${svg}</div>`;

  // 진단용: 소스 원본 외곽선(400샘플, 단순화 없음)을 같은 박스에 그려 대조한다.
  const rawPath = (role) => {
    const o = out[role];
    const m = Math.max(...o.topH.filter((n) => n != null));
    const n = o.topH.length;
    const pts = (arr) => arr.map((v, i) => `${PX(i / (n - 1)).toFixed(1)},${PY((v ?? 0) / m * natTop).toFixed(1)}`);
    return pts(o.topH).concat(pts(o.botH).reverse()).join(' ');
  };
  const compare = (role, w) => `<svg width="${w}" height="${Math.round((w * 400) / 560)}" viewBox="0 0 560 400" fill="none">
      <polygon points="${rawPath(role)}" stroke="rgba(23,21,15,.32)" stroke-width="1.2" fill="none"/>
      <path d="${OUTLINE}" stroke="var(--signal)" stroke-width="1.7" stroke-linejoin="round"/>
    </svg>`;

  const html = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><title>중립 러닝화 실루엣 검증</title>
<style>
  :root { --paper:#F7F4ED; --ink:#17150F; --signal:#FF4D00; }
  body { margin:0; background:var(--paper); color:var(--ink); padding:28px 32px;
         font-family:-apple-system,'Pretendard',system-ui,sans-serif; }
  h1 { font-size:15px; letter-spacing:.04em; font-weight:600; margin:0 0 4px; }
  p.sub { font-size:12px; opacity:.6; margin:0 0 26px; }
  .row { display:flex; align-items:flex-end; gap:40px; flex-wrap:wrap; margin-bottom:26px;
         padding-bottom:20px; border-bottom:1px solid rgba(23,21,15,.12); }
  .row:last-child { border:0; }
  .cap { font-size:10px; letter-spacing:.08em; text-transform:uppercase; opacity:.5; margin-bottom:8px; }
  svg { display:block; }
  .box { outline:1px dashed rgba(23,21,15,.2); }
</style></head><body>
<h1>중립 러닝화 실루엣 — 승인 조건 검증</h1>
<p class="sub">viewBox 0 0 560 400 · 제어점 ${POINTS} · 가로세로비 ${ASPECT} · 소스 3켤레 구간 조합</p>
<div class="row">
  ${cell('확대 700px — 형태 판정용', shoe(700))}
</div>
<div class="row">
  ${cell('데스크톱 380px', shoe(380))}
  ${cell('모바일 200px', shoe(200))}
  ${cell('축소 120px', shoe(120))}
</div>
<div class="row">
  ${cell('⑤ 발 윤곽 겹침 — 확대 700px', shoe(700, { foot: true, tick: true }))}
</div>
<div class="row">
  ${cell('⑤ 발 윤곽 + 계측 틱 380px', shoe(380, { foot: true, tick: true }))}
  ${cell('⑤ 발 윤곽 + 계측 틱 200px', shoe(200, { foot: true, tick: true }))}
</div>
<div class="row">
  ${cell('발 윤곽만 380px', shoe(380, { foot: true }))}
  ${cell('발 윤곽만 200px', shoe(200, { foot: true }))}
  ${cell('배치 영역 대조', shoe(380, { box: true }))}
</div>
<div class="row">
  ${cell('첫 프레임 opacity 0.12', shoe(380, { op: 0.12 }))}
  ${cell('중간 0.45', shoe(380, { op: 0.45 }))}
</div>
<div class="row">
  ${cell('진단 — vs ghost17 원본', compare('heel', 380))}
  ${cell('진단 — vs vomero18 원본', compare('upper', 380))}
  ${cell('진단 — vs endorphin elite2 원본', compare('toe', 380))}
</div>
</body></html>`;
  writeFileSync(OUT + 'silhouette-preview.html', html);
  console.log('silhouette-preview.html 기록 완료');
}
