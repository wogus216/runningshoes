const fs = require('fs');
const path = require('path');

const shoesDir = 'src/lib/data/shoes';
const brands = ['adidas', 'asics', 'brooks', 'hoka', 'mizuno', 'newbalance', 'nike', 'on', 'puma', 'saucony'];

const singleImageShoes = [];

brands.forEach(brand => {
  const filePath = path.join(shoesDir, brand + '.ts');
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf-8');

  // 각 신발 블록 찾기
  const shoeMatches = content.matchAll(/{\s*id:\s*['"]([^'"]+)['"][\s\S]*?name:\s*['"]([^'"]+)['"][\s\S]*?(?:images:\s*\[([\s\S]*?)\]|image:\s*['"]([^'"]+)['"])/g);

  for (const match of shoeMatches) {
    const id = match[1];
    const name = match[2];
    const imagesArray = match[3];
    const singleImage = match[4];

    // images 배열이 없거나 1개만 있는 경우
    if (!imagesArray && singleImage) {
      singleImageShoes.push({ brand, id, name, image: singleImage });
    } else if (imagesArray) {
      const imageCount = (imagesArray.match(/['"][^'"]+['"]/g) || []).length;
      if (imageCount <= 1) {
        singleImageShoes.push({ brand, id, name, hasFolder: false });
      }
    }
  }
});

console.log('=== 단일 이미지 신발 목록 ===\n');
console.log('총 ' + singleImageShoes.length + '개\n');

// 브랜드별로 그룹화
const byBrand = {};
singleImageShoes.forEach(s => {
  if (!byBrand[s.brand]) byBrand[s.brand] = [];
  byBrand[s.brand].push(s);
});

Object.entries(byBrand).forEach(([brand, shoes]) => {
  console.log(`[${brand.toUpperCase()}] (${shoes.length}개)`);
  shoes.forEach(s => {
    // 해당 신발의 이미지 폴더 존재 여부 확인
    const folderPath = `public/images/shoes/${brand}/${s.id.replace(brand + '-', '').replace(/-/g, '')}`;
    const hasFolder = fs.existsSync(folderPath);
    console.log(`  - ${s.name} (${s.id})${hasFolder ? ' [폴더 있음]' : ''}`);
  });
  console.log('');
});
