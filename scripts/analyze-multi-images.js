const fs = require('fs');
const path = require('path');

const imageDir = 'public/images/shoes';
const dataDir = 'src/lib/data/shoes';
const brands = ['adidas', 'asics', 'brooks', 'hoka', 'mizuno', 'newbalance', 'nike', 'on', 'puma', 'saucony'];

// 1. 모든 이미지 폴더 조사
console.log('=== 멀티 이미지 폴더 현황 ===\n');

const folders = [];
brands.forEach(brand => {
  const brandPath = path.join(imageDir, brand);
  if (!fs.existsSync(brandPath)) return;

  fs.readdirSync(brandPath).forEach(item => {
    const itemPath = path.join(brandPath, item);
    if (fs.statSync(itemPath).isDirectory()) {
      const files = fs.readdirSync(itemPath).filter(f => f.endsWith('.webp'));
      if (files.length > 0) {
        folders.push({
          brand,
          folder: item,
          path: `${brand}/${item}`,
          files: files,
          count: files.length
        });
      }
    }
  });
});

// 2. 데이터 파일에서 images 배열 사용 여부 확인
const dataConnections = new Map();

brands.forEach(brand => {
  const filePath = path.join(dataDir, brand + '.ts');
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf-8');

  // images 배열 찾기
  const imagesRegex = /images:\s*\[([\s\S]*?)\]/g;
  let match;
  while ((match = imagesRegex.exec(content)) !== null) {
    const imagesContent = match[1];
    const paths = imagesContent.match(/['"]([^'"]+)['"]/g) || [];
    paths.forEach(p => {
      const imgPath = p.replace(/['"]/g, '');
      // 폴더 경로 추출 (예: /images/shoes/nike/pegasus41/side.webp -> nike/pegasus41)
      const folderMatch = imgPath.match(/\/images\/shoes\/([^/]+)\/([^/]+)\//);
      if (folderMatch) {
        const key = `${folderMatch[1]}/${folderMatch[2]}`;
        dataConnections.set(key, true);
      }
    });
  }
});

// 3. 연결 상태 분류
const connected = [];
const notConnected = [];

folders.forEach(f => {
  if (dataConnections.has(f.path)) {
    connected.push(f);
  } else {
    notConnected.push(f);
  }
});

console.log(`총 폴더: ${folders.length}개`);
console.log(`데이터 연결됨: ${connected.length}개`);
console.log(`연결 안됨: ${notConnected.length}개\n`);

if (notConnected.length > 0) {
  console.log('=== 데이터에 연결 안된 폴더 (연결 필요) ===\n');

  // 브랜드별로 그룹화
  const byBrand = {};
  notConnected.forEach(f => {
    if (!byBrand[f.brand]) byBrand[f.brand] = [];
    byBrand[f.brand].push(f);
  });

  Object.entries(byBrand).forEach(([brand, items]) => {
    console.log(`[${brand.toUpperCase()}]`);
    items.forEach(f => {
      console.log(`  ${f.folder}/ (${f.count}개 이미지)`);
      console.log(`    파일: ${f.files.join(', ')}`);
    });
    console.log('');
  });
}

// 4. 단일 이미지만 있는 신발 (폴더 없음)
console.log('=== 단일 이미지만 있는 신발 (이미지 수집 필요) ===\n');

brands.forEach(brand => {
  const filePath = path.join(dataDir, brand + '.ts');
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf-8');

  // image만 있고 images가 없는 신발 찾기
  const shoeBlocks = content.split(/(?=\s*{[\s\n]*id:)/g).filter(b => b.includes('id:'));

  const singleImageShoes = [];
  shoeBlocks.forEach(block => {
    const hasImages = block.includes('images:');
    const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
    const nameMatch = block.match(/name:\s*['"]([^'"]+)['"]/);
    const imageMatch = block.match(/image:\s*['"]([^'"]+)['"]/);

    if (!hasImages && idMatch && nameMatch) {
      const id = idMatch[1];
      // 해당 신발의 폴더가 있는지 확인
      const possibleFolders = [
        id.replace(brand + '-', '').replace(/-/g, ''),
        id.replace(brand + '-', ''),
        id.split('-').slice(1).join('')
      ];

      let hasFolder = false;
      let folderName = '';
      for (const pf of possibleFolders) {
        const checkPath = path.join(imageDir, brand, pf);
        if (fs.existsSync(checkPath) && fs.statSync(checkPath).isDirectory()) {
          hasFolder = true;
          folderName = pf;
          break;
        }
      }

      if (!hasFolder) {
        singleImageShoes.push({
          id,
          name: nameMatch[1],
          image: imageMatch ? imageMatch[1] : 'none'
        });
      }
    }
  });

  if (singleImageShoes.length > 0) {
    console.log(`[${brand.toUpperCase()}] (${singleImageShoes.length}개)`);
    singleImageShoes.forEach(s => {
      console.log(`  - ${s.name} (${s.id})`);
    });
    console.log('');
  }
});
