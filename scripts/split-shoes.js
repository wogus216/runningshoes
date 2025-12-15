// 브랜드별 신발 데이터 분리 스크립트
const fs = require('fs');
const path = require('path');

const shoesPath = path.join(__dirname, '../src/lib/data/shoes.ts');
const outputDir = path.join(__dirname, '../src/lib/data/shoes');

// shoes.ts 읽기
const content = fs.readFileSync(shoesPath, 'utf-8');

// shoes 배열 추출 (const shoes: Shoe[] = [ 부터 마지막 ]; 까지)
const shoesArrayMatch = content.match(/const shoes: Shoe\[\] = \[([\s\S]*)\];\s*export/);
if (!shoesArrayMatch) {
  console.error('shoes 배열을 찾을 수 없습니다.');
  process.exit(1);
}

const shoesArrayContent = shoesArrayMatch[1];

// 각 신발 객체 분리 (중괄호 매칭)
function extractShoeObjects(content) {
  const shoes = [];
  let depth = 0;
  let currentShoe = '';
  let inShoe = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];

    if (char === '{') {
      if (depth === 0) {
        inShoe = true;
      }
      depth++;
      currentShoe += char;
    } else if (char === '}') {
      depth--;
      currentShoe += char;
      if (depth === 0 && inShoe) {
        shoes.push(currentShoe.trim());
        currentShoe = '';
        inShoe = false;
      }
    } else if (inShoe) {
      currentShoe += char;
    }
  }

  return shoes;
}

const shoeObjects = extractShoeObjects(shoesArrayContent);
console.log(`총 ${shoeObjects.length}개의 신발 발견`);

// 브랜드별 분류
const brandShoes = {};
const brandNameMap = {
  'Nike': 'nike',
  'Adidas': 'adidas',
  'Asics': 'asics',
  'New Balance': 'newbalance',
  'Hoka': 'hoka',
  'On': 'on',
  'Saucony': 'saucony',
  'Brooks': 'brooks',
  'Mizuno': 'mizuno',
  'Puma': 'puma',
};

shoeObjects.forEach((shoeStr, index) => {
  // brand 필드 추출
  const brandMatch = shoeStr.match(/brand:\s*['"]([^'"]+)['"]/);
  if (brandMatch) {
    const brand = brandMatch[1];
    if (!brandShoes[brand]) {
      brandShoes[brand] = [];
    }
    brandShoes[brand].push(shoeStr);
  } else {
    console.log(`브랜드를 찾을 수 없는 신발 (index ${index}):`, shoeStr.substring(0, 100));
  }
});

// 브랜드별 파일 생성
Object.entries(brandShoes).forEach(([brand, shoes]) => {
  const fileName = brandNameMap[brand] || brand.toLowerCase().replace(/\s+/g, '');
  const filePath = path.join(outputDir, `${fileName}.ts`);

  const fileContent = `import type { Shoe } from '@/types/shoe';

export const ${fileName}Shoes: Shoe[] = [
${shoes.map(s => '  ' + s).join(',\n')}
];
`;

  fs.writeFileSync(filePath, fileContent);
  console.log(`${brand}: ${shoes.length}개 신발 -> ${fileName}.ts`);
});

// index.ts 생성
const brands = Object.keys(brandShoes).map(b => brandNameMap[b] || b.toLowerCase().replace(/\s+/g, ''));
const indexContent = `import type { Shoe } from '@/types/shoe';
${brands.map(b => `import { ${b}Shoes } from './${b}';`).join('\n')}

export const categoryOrder: string[] = ['입문화', '데일리', '쿠션화', '레이싱', '안정화'];

export const shoes: Shoe[] = [
  ...nikeShoes,
  ...adidasShoes,
  ...asicsShoes,
  ...newbalanceShoes,
  ...hokaShoes,
  ...onShoes,
  ...sauconyShoes,
  ...brooksShoes,
  ...mizunoShoes,
  ...pumaShoes,
];

export default shoes;
`;

fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent);
console.log('index.ts 생성 완료');

console.log('\n분리 완료! 이제 기존 shoes.ts import를 업데이트하세요.');
