const fs = require('fs');
const path = require('path');
const shoesDir = './src/lib/data/shoes';

// 각 파일에서 ID 추출
const files = fs.readdirSync(shoesDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
const allIds = [];
const duplicates = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(shoesDir, file), 'utf-8');
  const ids = content.match(/id:\s*'([^']+)'/g) || [];
  const fileIds = ids.map(id => id.match(/id:\s*'([^']+)'/)[1]);
  console.log(file + ': ' + fileIds.length + '개');

  fileIds.forEach(id => {
    if (allIds.includes(id)) {
      duplicates.push(id);
    }
    allIds.push(id);
  });
});

console.log('\n총 신발 수: ' + allIds.length);

if (duplicates.length > 0) {
  console.log('\n⚠️ 중복 ID 발견:');
  duplicates.forEach(id => console.log('  - ' + id));
} else {
  console.log('\n✅ 중복 ID 없음');
}
