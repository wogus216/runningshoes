const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function checkSizes() {
  const shoesDir = 'public/images/shoes';
  const brands = fs.readdirSync(shoesDir);
  const sizes = [];

  for (const brand of brands) {
    const brandPath = path.join(shoesDir, brand);
    if (!fs.statSync(brandPath).isDirectory()) continue;

    const items = fs.readdirSync(brandPath);
    for (const item of items) {
      const itemPath = path.join(brandPath, item);

      if (fs.statSync(itemPath).isDirectory()) {
        const files = fs.readdirSync(itemPath);
        for (const file of files) {
          if (file.endsWith('.webp')) {
            const filePath = path.join(itemPath, file);
            const meta = await sharp(filePath).metadata();
            sizes.push({ path: filePath, w: meta.width, h: meta.height });
          }
        }
      } else if (item.endsWith('.webp')) {
        const meta = await sharp(itemPath).metadata();
        sizes.push({ path: itemPath, w: meta.width, h: meta.height });
      }
    }
  }

  const widths = sizes.map(s => s.w);
  const heights = sizes.map(s => s.h);

  console.log('총 이미지:', sizes.length);
  console.log('\n너비 분포:');
  console.log('  최소:', Math.min(...widths));
  console.log('  최대:', Math.max(...widths));
  console.log('  평균:', Math.round(widths.reduce((a,b) => a+b, 0) / widths.length));

  console.log('\n높이 분포:');
  console.log('  최소:', Math.min(...heights));
  console.log('  최대:', Math.max(...heights));
  console.log('  평균:', Math.round(heights.reduce((a,b) => a+b, 0) / heights.length));

  const groups = {};
  sizes.forEach(s => {
    const key = s.w + 'x' + s.h;
    groups[key] = (groups[key] || 0) + 1;
  });

  console.log('\n크기별 분포 (상위 10개):');
  Object.entries(groups)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .forEach(([size, count]) => console.log('  ' + size + ': ' + count + '개'));

  // 비정상적인 크기 출력
  const nonSquare = sizes.filter(s => Math.abs(s.w - s.h) > 100);
  if (nonSquare.length > 0) {
    console.log('\n정사각형이 아닌 이미지 (' + nonSquare.length + '개):');
    nonSquare.slice(0, 10).forEach(s => console.log('  ' + s.path + ': ' + s.w + 'x' + s.h));
  }
}

checkSizes();
