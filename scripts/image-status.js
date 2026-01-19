const fs = require('fs');
const path = require('path');

// 데이터 파일에서 신발 정보 읽기
const shoesDir = 'src/lib/data/shoes';
const brands = ['adidas', 'asics', 'brooks', 'hoka', 'mizuno', 'newbalance', 'nike', 'on', 'puma', 'saucony'];

let totalShoes = 0;
let withMultiImages = 0;
let withSingleImage = 0;
let noImage = 0;
let missingImages = [];

brands.forEach(brand => {
  const filePath = path.join(shoesDir, brand + '.ts');
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf-8');

  // images 배열 찾기
  const imagesMatches = content.match(/images:\s*\[([^\]]*)\]/g) || [];
  const imageMatches = content.match(/image:\s*['"]([^'"]+)['"]/g) || [];

  // 각 신발의 이미지 상태 확인
  const shoeBlocks = content.split(/(?=\s*{[\s\n]*id:)/g).filter(b => b.includes('id:'));

  shoeBlocks.forEach(block => {
    totalShoes++;

    const hasImagesArray = block.includes('images:') && block.match(/images:\s*\[[\s\S]*?\]/);
    const hasImage = block.match(/image:\s*['"]([^'"]+)['"]/);

    if (hasImagesArray) {
      const imagesMatch = block.match(/images:\s*\[([\s\S]*?)\]/);
      if (imagesMatch) {
        const imageCount = (imagesMatch[1].match(/['"][^'"]+['"]/g) || []).length;
        if (imageCount > 1) {
          withMultiImages++;
        } else if (imageCount === 1) {
          withSingleImage++;
        }
      }
    } else if (hasImage) {
      withSingleImage++;

      // 이미지 파일 존재 확인
      const imgPath = hasImage[1].replace(/['"]/g, '').replace('/images/', 'public/images/');
      if (!fs.existsSync(imgPath)) {
        const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
        missingImages.push({ id: idMatch ? idMatch[1] : 'unknown', path: imgPath });
      }
    } else {
      noImage++;
    }
  });
});

console.log('=== 신발 데이터 현황 ===');
console.log('총 신발:', totalShoes + '개');
console.log('멀티 이미지:', withMultiImages + '개');
console.log('단일 이미지:', withSingleImage + '개');
console.log('이미지 없음:', noImage + '개');

// 이미지 폴더 현황
const imageDir = 'public/images/shoes';
let folderCount = 0;
let singleFileCount = 0;

brands.forEach(brand => {
  const brandPath = path.join(imageDir, brand);
  if (!fs.existsSync(brandPath)) return;

  const items = fs.readdirSync(brandPath);
  items.forEach(item => {
    const itemPath = path.join(brandPath, item);
    if (fs.statSync(itemPath).isDirectory()) {
      const files = fs.readdirSync(itemPath).filter(f => f.endsWith('.webp'));
      if (files.length > 0) folderCount++;
    } else if (item.endsWith('.webp')) {
      singleFileCount++;
    }
  });
});

console.log('\n=== 이미지 폴더 현황 ===');
console.log('멀티 이미지 폴더:', folderCount + '개');
console.log('단일 이미지 파일:', singleFileCount + '개');

// 폴더는 있지만 데이터에 연결 안된 것
const dataImages = new Set();
brands.forEach(brand => {
  const filePath = path.join(shoesDir, brand + '.ts');
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf-8');
  const matches = content.match(/['"]\/images\/shoes\/[^'"]+['"]/g) || [];
  matches.forEach(m => {
    const imgPath = m.replace(/['"]/g, '');
    dataImages.add(imgPath);
  });
});

// 폴더 기반 이미지 중 데이터에 없는 것
let unusedFolders = [];
brands.forEach(brand => {
  const brandPath = path.join(imageDir, brand);
  if (!fs.existsSync(brandPath)) return;

  const items = fs.readdirSync(brandPath);
  items.forEach(item => {
    const itemPath = path.join(brandPath, item);
    if (fs.statSync(itemPath).isDirectory()) {
      const files = fs.readdirSync(itemPath).filter(f => f.endsWith('.webp'));
      const folderUsed = files.some(f => {
        const imgPath = `/images/shoes/${brand}/${item}/${f}`;
        return dataImages.has(imgPath);
      });
      if (!folderUsed && files.length > 0) {
        unusedFolders.push(`${brand}/${item} (${files.length}개 이미지)`);
      }
    }
  });
});

if (unusedFolders.length > 0) {
  console.log('\n=== 데이터에 연결 안된 폴더 ===');
  unusedFolders.forEach(f => console.log('  ' + f));
}

// 추천 사항
console.log('\n=== 추천 작업 ===');
if (unusedFolders.length > 0) {
  console.log('1. 미연결 폴더 ' + unusedFolders.length + '개를 데이터에 연결');
}
if (withSingleImage > withMultiImages) {
  console.log('2. 단일 이미지 신발 ' + withSingleImage + '개에 멀티 이미지 추가 가능');
}
