const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_SIZE = 800;
const QUALITY = 85;

async function normalizeImage(filePath) {
  try {
    const meta = await sharp(filePath).metadata();

    // 이미 800x800이면 스킵
    if (meta.width === TARGET_SIZE && meta.height === TARGET_SIZE) {
      return { status: 'skip', path: filePath };
    }

    // 투명 배경의 정사각형 캔버스에 이미지 중앙 배치
    const resized = await sharp(filePath)
      .resize(TARGET_SIZE, TARGET_SIZE, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }  // 투명 배경
      })
      .webp({ quality: QUALITY })
      .toBuffer();

    fs.writeFileSync(filePath, resized);

    console.log(`✓ ${filePath}: ${meta.width}x${meta.height} → ${TARGET_SIZE}x${TARGET_SIZE}`);
    return { status: 'normalized', path: filePath, from: `${meta.width}x${meta.height}` };
  } catch (err) {
    console.error(`✗ ${filePath}: ${err.message}`);
    return { status: 'error', path: filePath, error: err.message };
  }
}

async function processDirectory(dir) {
  const results = { normalized: 0, skipped: 0, errors: 0 };
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      const subResults = await processDirectory(itemPath);
      results.normalized += subResults.normalized;
      results.skipped += subResults.skipped;
      results.errors += subResults.errors;
    } else if (item.endsWith('.webp')) {
      const result = await normalizeImage(itemPath);
      if (result.status === 'normalized') results.normalized++;
      else if (result.status === 'skip') results.skipped++;
      else results.errors++;
    }
  }

  return results;
}

async function main() {
  console.log(`이미지 크기 통일: ${TARGET_SIZE}x${TARGET_SIZE}\n`);

  const startTime = Date.now();
  const results = await processDirectory('public/images/shoes');
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n========================================');
  console.log(`완료: ${results.normalized}개 변환, ${results.skipped}개 스킵, ${results.errors}개 오류`);
  console.log(`소요 시간: ${elapsed}초`);
}

main();
