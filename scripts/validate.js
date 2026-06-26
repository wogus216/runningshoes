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
  const filePath = path.join(shoesDir, brand + '.ts');
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf-8');

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

  // image 필드 추출
  const imageRegex = /id:\s*['"]([^'"]+)['"][\s\S]*?image:\s*['"]([^'"]*)['"]/g;
  while ((match = imageRegex.exec(content)) !== null) {
    const entry = shoeEntries.find(e => e.id === match[1]);
    if (entry) entry.image = match[2];
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
  const filePath = path.join(shoesDir, brand + '.ts');
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf-8');

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
  const filePath = path.join(shoesDir, brand + '.ts');
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf-8');

  const slugMatches = [...content.matchAll(/slug:\s*'([^']+)'/g)];
  for (let i = 0; i < slugMatches.length; i++) {
    const start = slugMatches[i].index;
    const end = i + 1 < slugMatches.length ? slugMatches[i + 1].index : content.length;
    const block = content.slice(start, end);
    const slug = slugMatches[i][1];

    const pm = block.match(/\n\s{4}price:\s*(\d+),/);
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
// 결과 요약
// ===========================================
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`\n📋 검증 결과: ${allShoeIds.size}개 신발`);
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
