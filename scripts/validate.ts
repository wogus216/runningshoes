#!/usr/bin/env tsx
/**
 * 데이터 무결성 종합 검증 — `npm run validate`
 *
 * 2026-09-03 까지는 `validate.js` 가 소스 텍스트를 정규식으로 읽었다. 그 방식은
 * ① 신발 블록 경계를 들여쓰기로 추정해 image 누락이 다음 신발로 새는 버그를 냈고,
 * ② `rating: 4.5` 처럼 형식이 조금만 달라도 검사를 조용히 우회했으며,
 * ③ 중첩 객체(raceMeta)는 검사 자체가 불가능해 tsx 자식 프로세스를 따로 띄웠다.
 * 여기서는 데이터를 **타입 그대로 import** 해 검사한다. 프로세스는 하나다.
 *
 * 텍스트를 읽는 곳은 둘만 남겼다 — 파일명↔slug 대응(신발 1켤레 = 파일 1개 규칙)과
 * 블로그 본문의 줄 번호 표기(위반 위치를 사람이 찾아가야 하므로).
 *
 * 섹션 번호·이모지·요약 형식은 validate.js 와 같게 유지한다. 메모리·문서·훅이 이 출력을 읽는다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { shoes } from '../src/lib/data/shoes';
import { gels } from '../src/lib/data/gels';
import { marathonEvents } from '../src/lib/data/marathon';
import { getAllPosts } from '../src/lib/data/blog';
import { PINNED_PAIRS } from '../src/lib/pseo/pairs';
import { checkRaceMeta, checkDeadlineStrips, STRIP_WITHOUT_ANCHOR_BASELINE } from '../src/lib/blog/race-meta-rules';
import type { Shoe } from '../src/types/shoe';

const ROOT = path.resolve(__dirname, '..');
const SHOES_DIR = path.join(ROOT, 'src/lib/data/shoes');
const PUBLIC_DIR = path.join(ROOT, 'public');

let errors = 0;
let warnings = 0;
const error = (msg: string) => { errors++; console.error(`  ❌ ${msg}`); };
const warn = (msg: string) => { warnings++; console.warn(`  ⚠️  ${msg}`); };
const ok = (msg: string) => console.log(`  ✅ ${msg}`);

// ===========================================
// 1. 데이터 수집 — 파일 ↔ slug 대응표
// ===========================================
console.log('\n🔍 데이터 수집 중...\n');

/** 브랜드 디렉토리(shoes/{brand}/)마다 신발 파일 하나 = slug 하나. index.ts 는 등록 배럴. */
const brandDirs = fs.readdirSync(SHOES_DIR).filter((d) => !d.startsWith('.') && fs.statSync(path.join(SHOES_DIR, d)).isDirectory());
const fileBySlug = new Map<string, string>(); // slug → 'brand/slug.ts'
for (const dir of brandDirs) {
  for (const f of fs.readdirSync(path.join(SHOES_DIR, dir))) {
    if (!f.endsWith('.ts') || f === 'index.ts') continue;
    fileBySlug.set(f.replace(/\.ts$/, ''), `${dir}/${f}`);
  }
}
const label = (s: Shoe) => `[${fileBySlug.get(s.slug) ?? s.brand}]`;

console.log(`📊 총 ${shoes.length}개 신발 (${brandDirs.length}개 브랜드)\n`);

// ===========================================
// 2. ID/Slug 일관성
// ===========================================
console.log('━━━ 1. ID/Slug 일관성 ━━━');
let idSlugOk = true;
{
  const seen = new Map<string, Shoe>();
  for (const s of shoes) {
    if (s.id !== s.slug) { error(`${label(s)} id="${s.id}" ≠ slug="${s.slug}"`); idSlugOk = false; }
    if (seen.has(s.id)) { error(`중복 ID: "${s.id}" (${label(seen.get(s.id)!)}, ${label(s)})`); idSlugOk = false; }
    seen.set(s.id, s);
    if (s.slug !== s.slug.toLowerCase()) { error(`${label(s)} slug 대문자 포함: "${s.slug}"`); idSlugOk = false; }
    if (/[^a-z0-9-]/.test(s.slug)) { error(`${label(s)} slug 잘못된 문자: "${s.slug}"`); idSlugOk = false; }
    // {brand}-{model} 규칙. New Balance 는 'new-balance-', Li-Ning 은 'li-ning-'
    const brandPrefix = `${s.brand.toLowerCase().replace(/\s+/g, '-')}-`;
    if (!s.slug.startsWith(brandPrefix)) { error(`${label(s)} slug 은 "${brandPrefix}"로 시작해야 함: "${s.slug}"`); idSlugOk = false; }
  }
  // 파일 ↔ 등록 대응 — 파일만 있고 index.ts 에 등록을 잊으면 빌드는 통과하고 신발만 조용히 사라진다
  for (const s of shoes) {
    if (!fileBySlug.has(s.slug)) { error(`${s.slug}: shoes/{brand}/${s.slug}.ts 파일이 없습니다 (신발 1켤레 = 파일 1개, 파일명 = slug)`); idSlugOk = false; }
  }
  const registered = new Set(shoes.map((s) => s.slug));
  fileBySlug.forEach((file, slug) => {
    if (!registered.has(slug)) { error(`[${file}] 파일은 있는데 등록된 신발이 없습니다 — {brand}/index.ts 배열에 넣었는지 확인`); idSlugOk = false; }
  });
}
if (idSlugOk) ok('모든 ID/Slug 일관성 통과');
console.log('');

// ===========================================
// 3. 참조 검증 (similarShoes + alternatives)
// ===========================================
console.log('━━━ 2. 참조 검증 ━━━');
let refOk = true;
{
  const ids = new Set(shoes.map((s) => s.id));
  for (const s of shoes) {
    for (const ref of s.similarShoes ?? []) {
      if (!ids.has(ref)) { error(`${label(s)} ${s.id} → similarShoes: "${ref}" 존재하지 않음`); refOk = false; }
    }
    for (const ref of s.priceAnalysis?.alternatives ?? []) {
      if (!ids.has(ref)) { error(`${label(s)} ${s.id} → alternatives: "${ref}" 존재하지 않음`); refOk = false; }
    }
  }
}
if (refOk) ok('모든 참조 유효');
console.log('');

// ===========================================
// 4. 이미지 파일 검증
// ===========================================
console.log('━━━ 3. 이미지 파일 검증 ━━━');
let imgOk = true;
for (const s of shoes) {
  if (!s.image) { warn(`${label(s)} ${s.id}: image 필드 없음`); imgOk = false; continue; }
  if (!fs.existsSync(path.join(PUBLIC_DIR, s.image))) { error(`${label(s)} ${s.id}: 이미지 파일 없음 → ${s.image}`); imgOk = false; }
}
if (imgOk) ok('모든 이미지 파일 존재');
console.log('');

// ===========================================
// 5. 가격 데이터 검증
// ===========================================
console.log('━━━ 4. 가격 데이터 검증 ━━━');
let priceOk = true;
for (const s of shoes) {
  if (s.price == null) { warn(`${label(s)} ${s.id}: 가격 없음 (null)`); priceOk = false; continue; }
  if (s.price < 50000 || s.price > 500000) { warn(`${label(s)} ${s.id}: 가격 범위 의심 → ₩${s.price.toLocaleString()}`); priceOk = false; }
}
if (priceOk) ok('모든 가격 데이터 정상');
console.log('');

// ===========================================
// 6. 데이터 일관성 (price/costPerKm/drop/경화율)
// ===========================================
console.log('━━━ 5. 데이터 일관성 검증 ━━━');
let consistOk = true;
for (const s of shoes) {
  if (s.price == null) continue;
  const tag = `${label(s)} ${s.slug}`;

  // detailedSpecs.price 문자열(₩NNN,NNN) vs price. 한글 범위표기(병행수입 등)는 숫자<10000이라 스킵
  const dpm = s.detailedSpecs?.price?.match(/^₩?([\d,]+)/);
  if (dpm) {
    const dp = parseInt(dpm[1].replace(/,/g, ''), 10);
    if (dp >= 10000 && Math.abs(dp - s.price) > 1000) {
      warn(`${tag}: detailedSpecs.price(₩${dp.toLocaleString()}) ≠ price(₩${s.price.toLocaleString()})`); consistOk = false;
    }
  }

  // costPerKm vs price÷durability(정가 기준)
  if (s.specs?.durability && s.priceAnalysis?.costPerKm != null) {
    const calc = Math.round(s.price / s.specs.durability);
    if (Math.abs(s.priceAnalysis.costPerKm - calc) > 1) {
      warn(`${tag}: costPerKm(${s.priceAnalysis.costPerKm}) ≠ price÷durability(${calc})`); consistOk = false;
    }
  }

  // specs.drop vs biomechanics.drop
  if (s.specs?.drop != null && s.biomechanics?.drop != null && Math.abs(s.specs.drop - s.biomechanics.drop) > 1.5) {
    warn(`${tag}: specs.drop(${s.specs.drop}) ≠ biomechanics.drop(${s.biomechanics.drop})`); consistOk = false;
  }

  // 저온 경화율(본문 실측 언급) vs winterCompatibility 필드
  // 기준: ≤10% excellent / 11~25% good / 26~40% fair / >40% poor (2026-07-29 정합 감사에서 정립)
  const prose = JSON.stringify(s);
  const hardM = prose.match(/경화율?[이가은는의]?\s?(\d+)%/) || prose.match(/(\d+)%(?:만|나)?\s?(?:더 )?(?:단단|딱딱)해/);
  const winter = s.koreanFootFit?.winterCompatibility;
  if (hardM && winter) {
    const h = parseInt(hardM[1], 10);
    const expected = h <= 10 ? 'excellent' : h <= 25 ? 'good' : h <= 40 ? 'fair' : 'poor';
    if (winter !== expected) { warn(`${tag}: 경화율 ${h}% → winterCompatibility '${expected}' 기대, 실제 '${winter}'`); consistOk = false; }
  }
}
if (consistOk) ok('price/costPerKm/drop 일관성 통과');
console.log('');

// ===========================================
// 6. 마라톤 대회 데이터 검증
// ===========================================
// 대회 status 는 시간이 지나면 자동으로 틀려지는 데이터다. 개최일이 지났는데 '접수중'이면
// 독자가 끝난 대회에 신청하려 든다(2026-07 실제 10건). 사람의 기억에 의존하지 않도록 기계적으로 막는다.
console.log('━━━ 6. 마라톤 대회 데이터 검증 ━━━');
const VALID_STATUS = ['접수예정', '접수중', '마감', '대회종료'];
const today = new Date().toISOString().slice(0, 10);
let marathonOk = true;
const noRegEndOpen: string[] = []; // [C] 마감일 없는 접수중·접수예정 — 마감을 감지할 방법이 없는 구멍
{
  const seen = new Set<string>();
  for (const e of marathonEvents) {
    const name = e.name || e.id;
    if (seen.has(e.id)) { error(`[marathon] 중복 id '${e.id}'`); marathonOk = false; }
    seen.add(e.id);

    if (!e.date || !e.status || !e.month) { error(`[marathon] ${name}: date/month/status 필수 필드 누락`); marathonOk = false; continue; }
    if (!VALID_STATUS.includes(e.status)) { error(`[marathon] ${name}: 알 수 없는 status '${e.status}'`); marathonOk = false; }

    // ★ 핵심: 개최일이 지났는데 대회종료가 아님
    if (e.date < today && e.status !== '대회종료') {
      error(`[marathon] ${name}: 개최일(${e.date})이 지났는데 status가 '${e.status}' → '대회종료'로 변경 필요`); marathonOk = false;
    }
    // month 가 date 와 어긋남 (필터링이 깨짐)
    const monthFromDate = `${parseInt(e.date.slice(5, 7), 10)}월`;
    if (e.month !== monthFromDate) { error(`[marathon] ${name}: month('${e.month}')가 date(${e.date} → ${monthFromDate})와 불일치`); marathonOk = false; }
    // 접수 마감일이 대회일보다 뒤일 수는 없다
    if (e.registrationEnd && e.registrationEnd > e.date) { error(`[marathon] ${name}: registrationEnd(${e.registrationEnd})가 개최일(${e.date})보다 늦습니다`); marathonOk = false; }

    // description 에 박힌 마감일이 지났는데 아직 접수중 (내부 모순 탐지)
    // 실제 사례: '5/31 접수 마감'인데 status 는 접수중이었고, 그 날짜 자체가 공식에 없는 값이었다. 자동 판정하지 말고 사람이 확인할 것.
    if (e.status === '접수중' && e.description) {
      const m = e.description.match(/(\d{1,2})\s*[/월]\s*(\d{1,2})\s*일?\s*(?:접수\s*)?마감/);
      if (m) {
        const dl = `${e.date.slice(0, 4)}-${m[1].padStart(2, '0')}-${m[2].padStart(2, '0')}`;
        if (dl < today) { warn(`[marathon] ${name}: status는 '접수중'인데 설명의 마감일(${dl})이 지남 — 공식 페이지로 확인 필요`); marathonOk = false; }
      }
    }

    // ★ 낡은 접수 상태 스캔 — 날짜에서 기계적으로 파생되는 것만 잡는다(2026-09-03 [A][B][C]).
    // "마감일 지났으니 마감" 일괄 처리는 금지 — 선착순 대회는 연장·재접수가 흔하다. 메시지는 '공식 확인 후'를 전제로.
    const open = e.status === '접수예정' || e.status === '접수중';
    if (e.status === '접수예정' && e.registrationStart && e.registrationStart < today) {
      error(`[marathon] ${name}: registrationStart(${e.registrationStart})가 지났는데 status가 '접수예정' → 공식 확인 후 '접수중'(또는 조기 마감이면 '마감')으로`); marathonOk = false;
    }
    if (open && e.registrationEnd && e.registrationEnd < today) {
      error(`[marathon] ${name}: registrationEnd(${e.registrationEnd})가 지났는데 status가 '${e.status}' → 공식 확인 후 '마감'(연장됐으면 registrationEnd 갱신)`); marathonOk = false;
    }
    if (open && !e.registrationEnd && e.date >= today) noRegEndOpen.push(`${e.id}(${e.date})`);

    // 코스 GPX — 추정 경로를 실측처럼 보이게 하지 않는 게 핵심이다
    const gpx = e.courseInfo?.gpx;
    if (gpx) {
      if (!['measured', 'official', 'reconstructed'].includes(gpx.source)) { error(`[marathon] ${name}: gpx.source '${gpx.source}' 는 허용되지 않는 값입니다`); marathonOk = false; }
      if (!/^\d{4}-\d{2}-\d{2}$/.test(gpx.verifiedAt ?? '')) { error(`[marathon] ${name}: gpx.verifiedAt (YYYY-MM-DD) 누락`); marathonOk = false; }
      // 생성물이 '실제로 적어 둔' 경로를 검사한다. 전에는 사라진 배열을 읽어 배경 SVG 를 한 번도 검사하지 않았고,
      // `{skin}` 이 박힌 죽은 URL 이 배포됐는데 빌드·타입·lint 는 전부 통과했다.
      const mapJson = path.join(PUBLIC_DIR, 'data/course-maps', `${e.id}.json`);
      const built: { background?: string; ride?: string } = fs.existsSync(mapJson) ? JSON.parse(fs.readFileSync(mapJson, 'utf8')) : {};
      for (const rel of [built.background, built.ride].filter((v): v is string => Boolean(v))) {
        if (/[{}]/.test(rel)) { error(`[marathon] ${name}: 코스 지도 경로에 치환되지 않은 자리표시자가 남아 있습니다 — ${rel}`); marathonOk = false; }
      }
      for (const rel of [gpx.file, `/data/course-maps/${e.id}.json`, built.background, built.ride].filter((v): v is string => Boolean(v))) {
        if (!fs.existsSync(path.join(PUBLIC_DIR, rel))) { error(`[marathon] ${name}: 코스 지도 파일 없음 — public${rel} (node scripts/course-map/build.mjs ${e.id})`); marathonOk = false; }
      }
      // 재구성 경로의 거리·고도는 실측이 아니다. 숫자로 적는 순간 실측처럼 읽힌다
      if (gpx.source === 'reconstructed') {
        if (gpx.distanceKm != null || gpx.elevationGainM != null) {
          error(`[marathon] ${name}: source가 'reconstructed'인데 distanceKm/elevationGainM 이 있습니다 — 추정 경로의 수치는 적지 않습니다`); marathonOk = false;
        }
        if (!gpx.sourceNote) warn(`[marathon] ${name}: 재구성 경로인데 sourceNote(무엇을 읽고 그렸는지)가 없습니다`);
      }
    }

    // 완성도 (경고): 종료된 대회는 제외
    if (e.status !== '대회종료') {
      if (!e.raceInfo?.entryFees) warn(`[marathon] ${name}: 참가비(entryFees) 없음`);
      if (!e.website) warn(`[marathon] ${name}: 공식 website 없음`);
    }
  }
}
if (marathonOk) ok(`마라톤 대회 ${marathonEvents.length}개 status/날짜 일관성 통과`);
if (noRegEndOpen.length) {
  // 에러가 아니라 목록이다 — 선착순 "마감시까지" 대회는 마감일이 없는 게 정상일 수 있다.
  // 대신 "자동으로 마감을 감지할 수 없는 대회"이므로 사람이 공식 페이지를 봐야 한다.
  console.log(`  ℹ️  마감일(registrationEnd) 없는 접수중·접수예정 ${noRegEndOpen.length}건 — 자동 마감 감지 불가, 공식 확인 필요:\n     ${noRegEndOpen.join(' · ')}`);
}
console.log('');

// ===========================================
// 7. 허구 후기 검증
// ===========================================
// 이 사이트는 실사용자 후기를 수집하지 않는다. reviews 는 실측 데이터를 러너 유형별로 해석한
// "적합성 분석"이다. 과거 데이터엔 1인칭 구매 경험과 실재 대회·코스명이 섞여 있었고(2026-07 감사 319건),
// 검색 결과에 "가상 시나리오" 고지 없이 후기 문장만 노출돼 신뢰를 깎았다. 같은 형태의 유입을 여기서 막는다.
console.log('━━━ 7. 허구 후기 검증 ━━━');

const FIRST_PERSON = [
  '구매했습니다', '샀습니다', '샀어요', '신고 있어요', '신고 있습니다',
  '달려봤', '뛰어봤', '완주했습니다', '갱신했어요', '찍었습니다',
  '느꼈어요', '좋았어요', '괜찮았어요', '없었어요', '있었어요',
];
const REAL_PROPER = [
  'JTBC', '서울마라톤', '춘천마라톤', '동아마라톤', '경주벚꽃',
  '한강공원', '올림픽공원', '월드컵공원', '양재천', '중랑천',
];
// 우리가 수집하지 않는 "사용자 후기"를 근거로 든 서술(2026-08-27 감사 블로그 12건). 존재하지 않는 출처 인용도 같은 거짓이다.
// ⚠️ '커뮤니티에서'·'평이 많'은 일부러 넣지 않았다 — 통칭 언급·외부 전문 리뷰 종합에 걸려 오탐이 대부분이 된다.
const FAKE_SOURCE = [
  '실사용 후기', '사용자 후기', '실제 후기', '유저 후기', '실착 후기',
  '후기가 많', '후기도 많', '후기를 보면', '후기의 공통', '후기에서도', '후기에서는',
  '실사용자들이', '착용자들이', '구매자들이',
];
// "아직 후기가 부족하다"처럼 부재를 밝히는 서술은 정직한 표현이라 통과시킨다.
const FAKE_SOURCE_NEGATION = /부족|없|아직|미흡|수집하지/;
// 블로그 본문의 자전적 경험 주장(2026-08-27 감사). 넓게 잡으면 오탐이 쏟아져 **대체 가능한 정당한 용법이 없는 형태만** 넣는다.
const BLOG_AUTOBIO = [
  /제\s*경험상/, /제\s*최애/, /(저도|제가)\s*(첫|처음)\s/, /제\s*(첫|처음)\s*(풀|하프|마라톤|대회)/,
  /지난\s*\d+\s*년간[^.]{0,30}(테스트|신어|먹어)/, /진단을?\s*받았/, /(신어|먹어|뛰어|달려|착용해)\s*봤습니다/,
];
// 출처가 명시된 항목만 rating 을 허용한다. 새 외부 매체를 인용하면 여기 추가할 것(컴포넌트 isSourced 정규식과 동일 유지).
const SOURCED = /에디터|분석|리뷰어|Believe|Shihuo|WeeViews|RunRepeat|Doctors|Road Trail/i;
// 전환이 끝난 상태. 0 이상이면 새 허구 후기 = 커밋 차단.
const FICTION_MIGRATION_REMAINING = 0;

const fictionHits: string[] = [];
const fakeSourceHit = (text: string) =>
  FAKE_SOURCE.filter((k) => {
    const idx = text.indexOf(k);
    return idx !== -1 && !FAKE_SOURCE_NEGATION.test(text.slice(Math.max(0, idx - 25), idx + k.length + 25));
  });

let scanned = 0;
const reviewSources: { label: string; reviews: { userType: string; rating?: number; text: string }[] }[] = [
  ...shoes.map((s) => ({ label: fileBySlug.get(s.slug)?.split('/')[0] ?? s.brand, reviews: s.reviews ?? [] })),
  ...gels.map((g) => ({ label: `gels/${g.slug}`, reviews: g.reviews ?? [] })),
];
for (const { label: src, reviews } of reviewSources) {
  for (const r of reviews) {
    scanned++;
    if (SOURCED.test(r.userType)) continue;
    const pr = REAL_PROPER.filter((k) => r.text.includes(k));
    const fs2 = fakeSourceHit(r.text);
    const fp = FIRST_PERSON.filter((k) => r.text.includes(k));
    if (pr.length) fictionHits.push(`[${src}] "${r.userType}" 실재 고유명사: ${pr.join(', ')}`);
    else if (fs2.length) fictionHits.push(`[${src}] "${r.userType}" 가짜 출처 인용: ${fs2.join(', ')}`);
    else if (fp.length >= 1) fictionHits.push(`[${src}] "${r.userType}" 1인칭 경험 서술: ${fp.slice(0, 2).join(', ')}`);
    else if (r.rating !== undefined) fictionHits.push(`[${src}] "${r.userType}" 무출처 별점(rating: ${r.rating})`);
  }
}

// 블로그 본문 — 위반 위치를 줄 번호로 알려야 하므로 파일을 직접 읽는다
let blogScanned = 0;
const blogDir = path.join(ROOT, 'src/lib/data/blog/posts');
for (const file of fs.readdirSync(blogDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')) {
  blogScanned++;
  fs.readFileSync(path.join(blogDir, file), 'utf8').split('\n').forEach((line, i) => {
    const fake = fakeSourceHit(line);
    if (fake.length) {
      const idx = line.indexOf(fake[0]);
      fictionHits.push(`[blog/${file}:${i + 1}] 가짜 출처 인용: "${fake[0]}" — …${line.slice(Math.max(0, idx - 25), idx + fake[0].length + 25).trim()}…`);
      return;
    }
    for (const re of BLOG_AUTOBIO) {
      const m = line.match(re);
      if (!m) continue;
      const idx = m.index ?? 0;
      fictionHits.push(`[blog/${file}:${i + 1}] 자전적 경험 주장: "${m[0]}" — …${line.slice(Math.max(0, idx - 30), idx + 60).trim()}…`);
      break;
    }
  });
}

if (fictionHits.length === 0) {
  ok(`리뷰 ${scanned}건 · 블로그 ${blogScanned}개 파일 — 1인칭 허구 경험·가짜 출처·무출처 별점 없음`);
} else if (fictionHits.length > FICTION_MIGRATION_REMAINING) {
  error(
    `허구 후기 ${fictionHits.length}건 — 기준선 ${FICTION_MIGRATION_REMAINING}건보다 ${fictionHits.length - FICTION_MIGRATION_REMAINING}건 증가. ` +
      `새 리뷰는 "러너 유형별 적합성 분석" 형식으로 작성하세요(1인칭·실재 대회명·별점 금지).`,
  );
  fictionHits.slice(0, 5).forEach((h) => console.error(`     ${h}`));
} else {
  warn(`허구 후기 전환 대기 ${fictionHits.length}건 (기준선 ${FICTION_MIGRATION_REMAINING}건 이하라 통과).`);
  fictionHits.slice(0, 3).forEach((h) => console.warn(`     ${h}`));
}
console.log('');

// ===========================================
// 8. 대회 글 구성 표준 (raceMeta 보유 글 + deadline-strip 감시)
// ===========================================
// 사각지대를 만드는 건 정확히 "raceMeta 를 안 쓴 글"이라 raceMeta 보유분만 보는 검사로는
// 영원히 안 보인다(2026-09-01 도쿄 사례). 그래서 strip 감시를 함께 돌린다.
console.log('\n━━━ 8. 대회 글 구성 표준 ━━━');
{
  const posts = getAllPosts();
  const withMeta = posts.filter((p) => p.raceMeta);
  const strips = checkDeadlineStrips(posts);
  const issues = [...withMeta.flatMap(checkRaceMeta), ...strips.issues];
  console.log(
    `  ℹ️  deadline-strip 보유 ${posts.filter((p) => p.content.includes('class="deadline-strip"')).length}편 · ` +
      `날짜 앵커 없음 ${strips.withoutAnchor.length}편(기준선 ${STRIP_WITHOUT_ANCHOR_BASELINE})`,
  );
  const errs = issues.filter((i) => i.level === 'error');
  const warns = issues.filter((i) => i.level === 'warn');
  for (const i of errs) error(`[${i.slug}] ${i.message}`);
  for (const i of warns) warn(`[${i.slug}] ${i.message}`);
  if (!errs.length && !warns.length) ok(`대회 글 ${withMeta.length}편 — 구성 표준 통과`);
}

// ===========================================
// 9. pSEO 고정 페어 생존 검증
// ===========================================
// `/vs` 페어는 카테고리별 상위 N 조합이라 **신발을 추가하기만 해도 기존 URL 이 조용히 404 가 된다**
// (2026-08-10 39개, 08-21 9개). PINNED_PAIRS 가 그 재발을 막는 장치인데, 핀에 적힌 신발이 사라지거나
// 카테고리가 바뀌면 pairs.ts 는 `continue` 로 건너뛰어 핀조차 조용히 무효가 된다. 그 침묵을 여기서 깬다.
console.log('\n━━━ 9. pSEO 고정 페어 검증 ━━━');
{
  const categoryBySlug = new Map(shoes.map((s) => [s.slug, s.category] as const));
  let dead = 0;
  for (const slug of PINNED_PAIRS) {
    const parts = slug.split('-vs-');
    if (parts.length !== 2) { error(`[pseo] 고정 페어 slug 형식 오류: ${slug}`); dead++; continue; }
    const [a, b] = parts;
    const ca = categoryBySlug.get(a);
    const cb = categoryBySlug.get(b);
    if (!ca || !cb) { error(`[pseo] 고정 페어 /vs/${slug} 가 생성되지 않습니다 — ${!ca ? a : b} 신발이 없습니다 (색인된 URL 이 404 가 됩니다)`); dead++; }
    else if (ca !== cb) { error(`[pseo] 고정 페어 /vs/${slug} 가 생성되지 않습니다 — 카테고리 불일치(${a}=${ca} / ${b}=${cb})`); dead++; }
  }
  if (dead === 0) ok(`고정 페어 ${PINNED_PAIRS.length}개 전부 생성 가능`);
}
console.log('');

// ===========================================
// 결과 요약
// ===========================================
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`\n📋 검증 결과: 신발 ${shoes.length}개 · 마라톤 대회 ${marathonEvents.length}개`);
console.log(`   ❌ 에러: ${errors}개`);
console.log(`   ⚠️  경고: ${warnings}개\n`);
if (errors > 0) { console.log('❌ 검증 실패 — 에러를 수정해주세요.'); process.exit(1); }
if (warnings > 0) { console.log('⚠️  경고가 있지만 통과 (경고는 커밋 가능)'); process.exit(0); }
console.log('✅ 모든 검증 통과!');
process.exit(0);
