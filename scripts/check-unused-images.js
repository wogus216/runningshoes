const fs = require('fs');
const path = require('path');

// 데이터에서 사용하는 모든 이미지 경로 수집
const shoesDir = 'src/lib/data/shoes';
const brands = ['adidas', 'asics', 'brooks', 'hoka', 'mizuno', 'newbalance', 'nike', 'on', 'puma', 'saucony'];
let usedImages = new Set();

brands.forEach(brand => {
  const filePath = path.join(shoesDir, brand + '.ts');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/['"]\/images\/shoes\/[^'"]+['"]/g);
    if (matches) {
      matches.forEach(m => {
        const imgPath = m.replace(/['"]\/images\/shoes\//g, '').replace(/['"]/g, '');
        usedImages.add(imgPath);
      });
    }
  }
});

// 실제 파일 목록
const allFiles = [];
function getFiles(dir, basePath = '') {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const relPath = basePath ? basePath + '/' + item : item;
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, relPath);
    } else if (/\.(png|jpg|jpeg|webp|avif)$/i.test(item)) {
      allFiles.push(relPath);
    }
  });
}
getFiles('public/images/shoes');

// 사용되지 않는 파일 찾기
const unused = allFiles.filter(f => !usedImages.has(f));
console.log('사용되지 않는 이미지 (' + unused.length + '개):');
unused.forEach(f => console.log('  ' + f));

// 총 용량 계산
let totalSize = 0;
unused.forEach(f => {
  const stat = fs.statSync('public/images/shoes/' + f);
  totalSize += stat.size;
});
console.log('\n총 용량: ' + (totalSize / 1024 / 1024).toFixed(2) + ' MB');

// 삭제 모드
if (process.argv[2] === '--delete') {
  let deleted = 0;
  unused.forEach(f => {
    try {
      fs.unlinkSync('public/images/shoes/' + f);
      deleted++;
    } catch (e) {
      console.error('삭제 실패:', f, e.message);
    }
  });
  console.log('\n' + deleted + '개 파일 삭제 완료');
}
