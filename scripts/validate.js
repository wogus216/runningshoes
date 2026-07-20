#!/usr/bin/env node
/**
 * 데이터 무결성 종합 검증 스크립트
 * - slug/id 일치 + 중복 체크
 * - similarShoes/alternatives 참조 검증
 * - 이미지 파일 존재 여부
 * - 필수 필드 누락 검사
 * - 가격 데이터 검증
 *
 * Usage: node scripts/validate.js [--fix]
 */

const fs = require('fs');
const path = require('path');

const shoesDir = path.join(__dirname, '..', 'src/lib/data/shoes');
const imagesDir = path.join(__dirname, '..', 'public/images/shoes');
const brands = ['adidas', 'asics', 'brooks', 'hoka', 'lining', 'mizuno', 'newbalance', 'nike', 'on', 'puma', 'salomon', 'saucony'];

// 신발 1켤레 = 파일 1개 구조 (shoes/{brand}/{slug}.ts) — 브랜드 디렉토리의
// 신발 파일들을 이어붙여 기존 regex 검증 로직을 그대로 재사용한다.
function readBrandContent(brand) {
  const dir = path.join(shoesDir, brand);
  if (!fs.existsSync(dir)) return null;
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts')
    .map(f => fs.readFileSync(path.join(dir, f), 'utf-8'))
    .join('\n');
}

let errors = 0;
let warnings = 0;

function error(msg) { errors++; console.error(`  ❌ ${msg}`); }
function warn(msg) { warnings++; console.warn(`  ⚠️  ${msg}`); }
function ok(msg) { console.log(`  ✅ ${msg}`); }

// ===========================================
// 1. 모든 신발 데이터 수집
// ===========================================
console.log('\n🔍 데이터 수집 중...\n');

const allShoeIds = new Set();
const allSlugs = new Set();
const duplicateIds = [];
const shoeEntries = []; // { id, slug, brand, file }

brands.forEach(brand => {
  const content = readBrandContent(brand);
  if (content === null) return;

  // id와 slug 쌍 추출
  const entryRegex = /{\s*\n\s*id:\s*['"]([^'"]+)['"],\s*\n\s*slug:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = entryRegex.exec(content)) !== null) {
    const id = match[1];
    const slug = match[2];

    if (allShoeIds.has(id)) {
      duplicateIds.push({ id, brand });
    }
    allShoeIds.add(id);
    allSlugs.add(slug);
    shoeEntries.push({ id, slug, brand, file: brand + '.ts' });
  }

  // image 필드 추출 — 신발 블록 단위로 스코프 (최상위 4-space 들여쓰기 기준).
  // ⚠️ 과거 버그: `id:[\s\S]*?image:` 로 lazy 매칭하면 image 없는 신발이 *다음* 신발의
  //    image 를 흡수 → 누락 신발은 침묵하고 엉뚱한 다음 신발이 오탐됐음.
  //    각 신발 블록 안의 자기 image 필드만 검사하도록 교체.
  const idBlocks = [...content.matchAll(/^ {2}id:\s*['"]([^'"]+)['"]/gm)];
  for (let i = 0; i < idBlocks.length; i++) {
    const startIdx = idBlocks[i].index;
    const endIdx = i + 1 < idBlocks.length ? idBlocks[i + 1].index : content.length;
    const block = content.slice(startIdx, endIdx);
    const entry = shoeEntries.find(e => e.id === idBlocks[i][1]);
    if (!entry) continue;
    // `images:`(복수)는 콜론 뒤가 `[` 라 매칭되지 않음 — top-level `image:` 만 잡힘
    const im = block.match(/^ {2}image:\s*['"]([^'"]*)['"]/m);
    if (im) entry.image = im[1];
  }

  // price 필드 추출
  const priceRegex = /id:\s*['"]([^'"]+)['"][\s\S]*?price:\s*(\d+|null)/g;
  while ((match = priceRegex.exec(content)) !== null) {
    const entry = shoeEntries.find(e => e.id === match[1]);
    if (entry) entry.price = match[2] === 'null' ? null : parseInt(match[2]);
  }
});

console.log(`📊 총 ${allShoeIds.size}개 신발 (${brands.length}개 브랜드)\n`);

// ===========================================
// 2. ID/Slug 일관성 체크
// ===========================================
console.log('━━━ 1. ID/Slug 일관성 ━━━');

let idSlugOk = true;
shoeEntries.forEach(entry => {
  if (entry.id !== entry.slug) {
    error(`[${entry.file}] id="${entry.id}" ≠ slug="${entry.slug}"`);
    idSlugOk = false;
  }
});

if (duplicateIds.length > 0) {
  duplicateIds.forEach(d => error(`중복 ID: "${d.id}" (${d.brand})`));
  idSlugOk = false;
}

// Slug 형식 체크
shoeEntries.forEach(entry => {
  if (entry.id !== entry.id.toLowerCase()) {
    error(`[${entry.file}] slug 대문자 포함: "${entry.id}"`);
    idSlugOk = false;
  }
  if (/[^a-z0-9-]/.test(entry.id)) {
    error(`[${entry.file}] slug 잘못된 문자: "${entry.id}"`);
    idSlugOk = false;
  }
  // New Balance 규칙
  if (entry.brand === 'newbalance' && !entry.id.startsWith('new-balance-')) {
    error(`[${entry.file}] New Balance slug은 "new-balance-"로 시작해야 함: "${entry.id}"`);
    idSlugOk = false;
  }
});

if (idSlugOk) ok('모든 ID/Slug 일관성 통과');
console.log('');

// ===========================================
// 3. 참조 검증 (similarShoes + alternatives)
// ===========================================
console.log('━━━ 2. 참조 검증 ━━━');

let refOk = true;
const invalidRefs = [];

brands.forEach(brand => {
  const content = readBrandContent(brand);
  if (content === null) return;

  // similarShoes
  const similarRegex = /id:\s*['"]([^'"]+)['"][\s\S]*?similarShoes:\s*\[([^\]]*)\]/g;
  let match;
  while ((match = similarRegex.exec(content)) !== null) {
    const shoeId = match[1];
    const refs = (match[2].match(/['"]([^'"]+)['"]/g) || []).map(r => r.replace(/['"]/g, ''));
    refs.forEach(ref => {
      if (!allShoeIds.has(ref)) {
        error(`[${brand}] ${shoeId} → similarShoes: "${ref}" 존재하지 않음`);
        invalidRefs.push({ shoe: shoeId, ref, type: 'similarShoes' });
        refOk = false;
      }
    });
  }

  // alternatives
  const altRegex = /id:\s*['"]([^'"]+)['"][\s\S]*?alternatives:\s*\[([^\]]*)\]/g;
  while ((match = altRegex.exec(content)) !== null) {
    const shoeId = match[1];
    const refs = (match[2].match(/['"]([^'"]+)['"]/g) || []).map(r => r.replace(/['"]/g, ''));
    refs.forEach(ref => {
      if (!allShoeIds.has(ref)) {
        error(`[${brand}] ${shoeId} → alternatives: "${ref}" 존재하지 않음`);
        invalidRefs.push({ shoe: shoeId, ref, type: 'alternatives' });
        refOk = false;
      }
    });
  }
});

if (refOk) ok('모든 참조 유효');
console.log('');

// ===========================================
// 4. 이미지 파일 검증
// ===========================================
console.log('━━━ 3. 이미지 파일 검증 ━━━');

let imgOk = true;

shoeEntries.forEach(entry => {
  if (!entry.image) {
    warn(`[${entry.file}] ${entry.id}: image 필드 없음`);
    imgOk = false;
    return;
  }

  // /images/shoes/... → public/images/shoes/... 로 변환
  const imgPath = path.join(__dirname, '..', 'public', entry.image);
  if (!fs.existsSync(imgPath)) {
    error(`[${entry.file}] ${entry.id}: 이미지 파일 없음 → ${entry.image}`);
    imgOk = false;
  }
});

if (imgOk) ok('모든 이미지 파일 존재');
console.log('');

// ===========================================
// 5. 가격 데이터 검증
// ===========================================
console.log('━━━ 4. 가격 데이터 검증 ━━━');

let priceOk = true;

shoeEntries.forEach(entry => {
  if (entry.price === null || entry.price === undefined) {
    warn(`[${entry.file}] ${entry.id}: 가격 없음 (null)`);
    priceOk = false;
    return;
  }
  if (entry.price < 50000 || entry.price > 500000) {
    warn(`[${entry.file}] ${entry.id}: 가격 범위 의심 → ₩${entry.price.toLocaleString()}`);
    priceOk = false;
  }
});

if (priceOk) ok('모든 가격 데이터 정상');
console.log('');

// ===========================================
// 6. 데이터 일관성 검증 (price/costPerKm/drop)
//   - price(=msrp 진실원) vs detailedSpecs.price 문자열
//   - priceAnalysis.costPerKm vs price÷durability(정가 기준)
//   - specs.drop vs biomechanics.drop
// ===========================================
console.log('━━━ 5. 데이터 일관성 검증 ━━━');

let consistOk = true;

brands.forEach(brand => {
  const content = readBrandContent(brand);
  if (content === null) return;

  const slugMatches = [...content.matchAll(/slug:\s*'([^']+)'/g)];
  for (let i = 0; i < slugMatches.length; i++) {
    const start = slugMatches[i].index;
    const end = i + 1 < slugMatches.length ? slugMatches[i + 1].index : content.length;
    const block = content.slice(start, end);
    const slug = slugMatches[i][1];

    const pm = block.match(/\n\s{2}price:\s*(\d+),/);
    if (!pm) continue;
    const price = parseInt(pm[1]);

    // detailedSpecs.price 문자열 (₩NNN,NNN). 한글 범위표기(병행수입 등)는 숫자<10000이라 스킵
    const dpm = block.match(/\n\s{6}price:\s*'₩?([\d,]+)/);
    if (dpm) {
      const dp = parseInt(dpm[1].replace(/,/g, ''));
      if (dp >= 10000 && Math.abs(dp - price) > 1000) {
        warn(`[${brand}] ${slug}: detailedSpecs.price(₩${dp.toLocaleString()}) ≠ price(₩${price.toLocaleString()})`);
        consistOk = false;
      }
    }

    // costPerKm vs price÷durability
    const durM = block.match(/\n\s{6}durability:\s*(\d+),/);
    const cpkM = block.match(/\n\s{6}costPerKm:\s*(\d+),/);
    if (durM && cpkM) {
      const calc = Math.round(price / parseInt(durM[1]));
      if (Math.abs(parseInt(cpkM[1]) - calc) > 1) {
        warn(`[${brand}] ${slug}: costPerKm(${cpkM[1]}) ≠ price÷durability(${calc})`);
        consistOk = false;
      }
    }

    // specs.drop vs biomechanics.drop (둘 다 숫자 필드)
    const drops = [...block.matchAll(/\n\s{6}drop:\s*([\d.]+),/g)];
    if (drops.length >= 2 && Math.abs(parseFloat(drops[0][1]) - parseFloat(drops[1][1])) > 1.5) {
      warn(`[${brand}] ${slug}: specs.drop(${drops[0][1]}) ≠ biomechanics.drop(${drops[1][1]})`);
      consistOk = false;
    }
  }
});

if (consistOk) ok('price/costPerKm/drop 일관성 통과');
console.log('');

// ===========================================
// 6. 마라톤 대회 데이터 검증
// ===========================================
// 대회 status는 시간이 지나면 자동으로 틀려지는 데이터다. 개최일이 지났는데
// '접수중'으로 남아 있으면 독자가 끝난 대회에 신청하려 든다(2026-07 실제 10건 발생).
// 사람의 기억에 의존하지 않도록 여기서 기계적으로 막는다.
console.log('━━━ 6. 마라톤 대회 데이터 검증 ━━━');

const marathonDir = path.join(__dirname, '..', 'src/lib/data/marathon');
const VALID_STATUS = ['접수예정', '접수중', '마감', '대회종료'];
const today = new Date().toISOString().slice(0, 10);

let marathonOk = true;
let eventCount = 0;
const seenEventIds = new Map();

if (!fs.existsSync(marathonDir)) {
  warn('마라톤 데이터 디렉토리를 찾을 수 없습니다');
} else {
  fs.readdirSync(marathonDir)
    .filter(f => f.endsWith('.ts') && f !== 'index.ts')
    .forEach(file => {
      const content = fs.readFileSync(path.join(marathonDir, file), 'utf-8');

      content.split(/\n {2}\{\n/).slice(1).forEach(block => {
        const pick = (re) => (block.match(re) || [])[1];
        const id = pick(/id:\s*'([^']+)'/);
        if (!id) return;
        eventCount++;

        const name = pick(/name:\s*'([^']+)'/) || id;
        const date = pick(/date:\s*'([^']+)'/);
        const month = pick(/month:\s*'([^']+)'/);
        const status = pick(/status:\s*'([^']+)'/);

        // id 중복
        if (seenEventIds.has(id)) {
          error(`[marathon] 중복 id '${id}' (${seenEventIds.get(id)}, ${file})`);
          marathonOk = false;
        } else {
          seenEventIds.set(id, file);
        }

        // 필수 필드
        if (!date || !status || !month) {
          error(`[marathon] ${name}: date/month/status 필수 필드 누락 (${file})`);
          marathonOk = false;
          return;
        }

        // status 값 유효성
        if (!VALID_STATUS.includes(status)) {
          error(`[marathon] ${name}: 알 수 없는 status '${status}'`);
          marathonOk = false;
        }

        // ★ 핵심: 개최일이 지났는데 대회종료가 아님
        if (date < today && status !== '대회종료') {
          error(
            `[marathon] ${name}: 개최일(${date})이 지났는데 status가 '${status}' → '대회종료'로 변경 필요`,
          );
          marathonOk = false;
        }

        // month가 date와 어긋남 (필터링이 깨짐)
        const monthFromDate = `${parseInt(date.slice(5, 7), 10)}월`;
        if (month !== monthFromDate) {
          error(`[marathon] ${name}: month('${month}')가 date(${date} → ${monthFromDate})와 불일치`);
          marathonOk = false;
        }

        // description에 박힌 마감일이 지났는데 아직 접수중 (내부 모순 탐지)
        // 실제 사례: '5/31 접수 마감'인데 status는 접수중이었고, 확인해 보니
        // 그 날짜 자체가 공식에 없는 값이었다. 자동 판정하지 말고 사람이 확인할 것.
        const desc = pick(/description:\s*\n?\s*'([\s\S]*?)',\n/) || '';
        if (status === '접수중') {
          const m = desc.match(/(\d{1,2})\s*[/월]\s*(\d{1,2})\s*일?\s*(?:접수\s*)?마감/);
          if (m) {
            const yr = date.slice(0, 4);
            const dl = `${yr}-${String(m[1]).padStart(2, '0')}-${String(m[2]).padStart(2, '0')}`;
            if (dl < today) {
              warn(
                `[marathon] ${name}: status는 '접수중'인데 설명의 마감일(${dl})이 지남 — 공식 페이지로 확인 필요`,
              );
              marathonOk = false;
            }
          }
        }

        // 완성도 (경고): 종료된 대회는 제외
        if (status !== '대회종료') {
          if (!/entryFees:/.test(block)) warn(`[marathon] ${name}: 참가비(entryFees) 없음`);
          if (!/website:/.test(block)) warn(`[marathon] ${name}: 공식 website 없음`);
        }
      });
    });

  if (marathonOk) ok(`마라톤 대회 ${eventCount}개 status/날짜 일관성 통과`);
}
console.log('');

// ===========================================
// 결과 요약
// ===========================================
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`\n📋 검증 결과: 신발 ${allShoeIds.size}개 · 마라톤 대회 ${eventCount}개`);
console.log(`   ❌ 에러: ${errors}개`);
console.log(`   ⚠️  경고: ${warnings}개\n`);

if (errors > 0) {
  console.log('❌ 검증 실패 — 에러를 수정해주세요.');
  process.exit(1);
} else if (warnings > 0) {
  console.log('⚠️  경고가 있지만 통과 (경고는 커밋 가능)');
  process.exit(0);
} else {
  console.log('✅ 모든 검증 통과!');
  process.exit(0);
}
