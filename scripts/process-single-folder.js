const { removeBackground } = require('@imgly/background-removal-node');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_SIZE = 800;
const QUALITY = 85;

async function processImage(inputPath) {
  try {
    console.log(`처리 중: ${path.basename(inputPath)}`);

    // PNG로 변환
    const pngBuffer = await sharp(inputPath).png().toBuffer();
    const blob = new Blob([pngBuffer], { type: 'image/png' });

    // 배경 제거
    const resultBlob = await removeBackground(blob, {
      model: 'medium',
      output: { format: 'image/png' }
    });

    const arrayBuffer = await resultBlob.arrayBuffer();
    let buffer = Buffer.from(arrayBuffer);

    // 800x800으로 리사이즈
    buffer = await sharp(buffer)
      .resize(TARGET_SIZE, TARGET_SIZE, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .webp({ quality: QUALITY })
      .toBuffer();

    // WebP로 저장
    const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    fs.writeFileSync(outputPath, buffer);

    // 원본 삭제
    if (inputPath !== outputPath) {
      fs.unlinkSync(inputPath);
    }

    const stats = fs.statSync(outputPath);
    console.log(`  완료: ${(stats.size / 1024).toFixed(1)} KB`);
    return true;
  } catch (err) {
    console.error(`  오류: ${err.message}`);
    return false;
  }
}

async function main() {
  const folderPath = process.argv[2];
  if (!folderPath) {
    console.log('사용법: node process-single-folder.js <folder-path>');
    process.exit(1);
  }

  console.log(`폴더 처리: ${folderPath}\n`);

  const files = fs.readdirSync(folderPath).filter(f => /\.(png|jpg|jpeg)$/i.test(f));
  let success = 0;
  let failed = 0;

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const result = await processImage(filePath);
    if (result) success++;
    else failed++;
  }

  console.log(`\n완료: ${success}개 성공, ${failed}개 실패`);
}

main();
