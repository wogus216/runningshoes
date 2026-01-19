const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_WIDTH = 800;
const QUALITY = 85;

async function optimizeImages(inputDir) {
  const brands = fs.readdirSync(inputDir);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const brand of brands) {
    const brandPath = path.join(inputDir, brand);
    if (!fs.statSync(brandPath).isDirectory()) continue;

    const items = fs.readdirSync(brandPath);

    for (const item of items) {
      const itemPath = path.join(brandPath, item);

      // 서브폴더인 경우 (예: on/cloudsurfer2/)
      if (fs.statSync(itemPath).isDirectory()) {
        const files = fs.readdirSync(itemPath);

        for (const file of files) {
          const filePath = path.join(itemPath, file);
          const ext = path.extname(file).toLowerCase();

          if (['.png', '.jpg', '.jpeg'].includes(ext)) {
            const result = await optimizeFile(filePath);
            if (result) {
              totalOriginal += result.original;
              totalOptimized += result.optimized;
            }
          }
        }
      }
      // 단일 파일인 경우
      else {
        const ext = path.extname(item).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          const result = await optimizeFile(itemPath);
          if (result) {
            totalOriginal += result.original;
            totalOptimized += result.optimized;
          }
        }
      }
    }
  }

  console.log('\n========================================');
  console.log(`총 원본 크기: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`총 최적화 크기: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`절감: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
}

async function optimizeFile(filePath) {
  try {
    const originalSize = fs.statSync(filePath).size;
    const dir = path.dirname(filePath);
    const name = path.basename(filePath, path.extname(filePath));
    const outputPath = path.join(dir, `${name}.webp`);

    // 이미 webp가 있으면 스킵
    if (fs.existsSync(outputPath)) {
      console.log(`SKIP (webp exists): ${filePath}`);
      return null;
    }

    await sharp(filePath)
      .resize(TARGET_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(`${filePath}`);
    console.log(`  ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(optimizedSize / 1024).toFixed(0)} KB (${reduction}% 감소)`);

    // 원본 삭제
    fs.unlinkSync(filePath);
    console.log(`  원본 삭제됨`);

    return { original: originalSize, optimized: optimizedSize };
  } catch (err) {
    console.error(`ERROR: ${filePath}`, err.message);
    return null;
  }
}

const inputDir = path.join(__dirname, '../public/images/shoes');
optimizeImages(inputDir);
