const fs = require('fs');
const path = require('path');

const shoesDir = 'src/lib/data/shoes';
const brands = ['adidas', 'asics', 'brooks', 'hoka', 'mizuno', 'newbalance', 'nike', 'on', 'puma', 'saucony'];

// 1. 모든 신발 ID 수집
const allShoeIds = new Set();
const shoeData = {};

brands.forEach(brand => {
  const filePath = path.join(shoesDir, brand + '.ts');
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf-8');
  const idMatches = content.matchAll(/id:\s*['"]([^'"]+)['"]/g);

  for (const match of idMatches) {
    allShoeIds.add(match[1]);
    shoeData[match[1]] = brand;
  }
});

console.log(`=== 전체 신발 수: ${allShoeIds.size}개 ===\n`);

// 2. similarShoes 참조 검증
console.log('=== similarShoes 참조 검증 ===\n');
let invalidCount = 0;
const invalidRefs = [];

brands.forEach(brand => {
  const filePath = path.join(shoesDir, brand + '.ts');
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf-8');

  // similarShoes 배열 찾기
  const similarRegex = /id:\s*['"]([^'"]+)['"][\s\S]*?similarShoes:\s*\[([^\]]*)\]/g;
  let match;

  while ((match = similarRegex.exec(content)) !== null) {
    const shoeId = match[1];
    const similarContent = match[2];
    const refs = similarContent.match(/['"]([^'"]+)['"]/g) || [];

    refs.forEach(ref => {
      const refId = ref.replace(/['"]/g, '');
      if (!allShoeIds.has(refId)) {
        invalidCount++;
        invalidRefs.push({ shoe: shoeId, invalidRef: refId, brand });
      }
    });
  }
});

// 3. priceAnalysis.alternatives 참조 검증
console.log('=== priceAnalysis.alternatives 참조 검증 ===\n');

brands.forEach(brand => {
  const filePath = path.join(shoesDir, brand + '.ts');
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf-8');

  // alternatives 배열 찾기
  const altRegex = /id:\s*['"]([^'"]+)['"][\s\S]*?alternatives:\s*\[([^\]]*)\]/g;
  let match;

  while ((match = altRegex.exec(content)) !== null) {
    const shoeId = match[1];
    const altContent = match[2];
    const refs = altContent.match(/['"]([^'"]+)['"]/g) || [];

    refs.forEach(ref => {
      const refId = ref.replace(/['"]/g, '');
      if (!allShoeIds.has(refId)) {
        invalidCount++;
        invalidRefs.push({ shoe: shoeId, invalidRef: refId, brand, type: 'alternatives' });
      }
    });
  }
});

// 4. 결과 출력
if (invalidRefs.length === 0) {
  console.log('✅ 모든 참조가 유효합니다!\n');
} else {
  console.log(`❌ 유효하지 않은 참조: ${invalidCount}개\n`);

  // 브랜드별 그룹화
  const byBrand = {};
  invalidRefs.forEach(r => {
    if (!byBrand[r.brand]) byBrand[r.brand] = [];
    byBrand[r.brand].push(r);
  });

  Object.entries(byBrand).forEach(([brand, refs]) => {
    console.log(`[${brand.toUpperCase()}]`);
    refs.forEach(r => {
      const type = r.type ? ` (${r.type})` : ' (similarShoes)';
      console.log(`  ${r.shoe} → "${r.invalidRef}"${type}`);
    });
    console.log('');
  });

  // 수정 제안
  console.log('=== 수정 제안 ===\n');
  invalidRefs.forEach(r => {
    // 비슷한 ID 찾기
    const similar = [...allShoeIds].filter(id => {
      const parts = r.invalidRef.split('-');
      return parts.some(p => id.includes(p) && p.length > 3);
    });
    if (similar.length > 0) {
      console.log(`"${r.invalidRef}" → 가능한 대체: ${similar.slice(0, 3).join(', ')}`);
    }
  });
}
