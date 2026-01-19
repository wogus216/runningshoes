const { removeBackground } = require('@imgly/background-removal-node');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../public/images/shoes');
const REPLACE_ORIGINALS = true; // true면 원본 대체, false면 별도 폴더에 저장

async function processImage(inputPath) {
  try {
    console.log(`처리 중: ${inputPath}`);

    // 모든 이미지를 PNG로 변환하여 처리
    const pngBuffer = await sharp(inputPath).png().toBuffer();
    const blob = new Blob([pngBuffer], { type: 'image/png' });

    const resultBlob = await removeBackground(blob, {
      model: 'medium',
      output: { format: 'image/png' }
    });

    const arrayBuffer = await resultBlob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 출력 경로 (PNG로 변경)
    const outputPath = inputPath.replace(/\.(webp|jpg|jpeg|png)$/i, '.png');

    fs.writeFileSync(outputPath, buffer);

    // 원본이 PNG가 아니었으면 원본 삭제
    if (inputPath !== outputPath && fs.existsSync(inputPath)) {
      fs.unlinkSync(inputPath);
    }

    const stats = fs.statSync(outputPath);
    console.log(`  완료: ${(stats.size / 1024).toFixed(1)} KB`);
    return true;
  } catch (err) {
    console.error(`  오류: ${inputPath}`, err.message);
    return false;
  }
}

async function processDirectory(inputDir, outputDir) {
  const items = fs.readdirSync(inputDir);
  let processed = 0;
  let failed = 0;

  for (const item of items) {
    const inputPath = path.join(inputDir, item);
    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      // 하위 디렉토리 처리
      const subOutputDir = path.join(outputDir, item);
      const result = await processDirectory(inputPath, subOutputDir);
      processed += result.processed;
      failed += result.failed;
    } else {
      const ext = path.extname(item).toLowerCase();
      if (['.webp', '.png', '.jpg', '.jpeg'].includes(ext)) {
        // 출력 파일은 항상 PNG (투명 배경 지원)
        const outputName = item.replace(/\.(webp|jpg|jpeg)$/i, '.png');
        const outputPath = path.join(outputDir, outputName);

        const success = await processImage(inputPath, outputPath);
        if (success) processed++;
        else failed++;
      }
    }
  }

  return { processed, failed };
}

async function main() {
  console.log('배경 제거 시작...\n');
  console.log(`입력: ${INPUT_DIR}\n`);

  const startTime = Date.now();
  const result = await processDirectory(INPUT_DIR, INPUT_DIR);
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n========================================');
  console.log(`완료: ${result.processed}개 처리, ${result.failed}개 실패`);
  console.log(`소요 시간: ${elapsed}초`);
}

main();
