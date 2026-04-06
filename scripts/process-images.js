#!/usr/bin/env node
/**
 * 이미지 파이프라인 자동화
 *
 * 사용법:
 *   node scripts/process-images.js <brand> <model>
 *   예: node scripts/process-images.js nike pegasus-42
 *
 * 동작:
 *   1. public/images/shoes/<brand>/<model>/ 디렉토리 확인
 *   2. JPG/PNG → 배경 제거 → WebP 변환 (800px, 85%)
 *   3. 파일명 표준화 (side, front, back, angle, outsole, top, detail)
 *   4. 처리 결과 리포트
 *
 * 옵션:
 *   --skip-bg    배경 제거 건너뛰기 (이미 투명 배경인 경우)
 *   --quality N  WebP 품질 (기본: 85)
 *   --max-width N  최대 너비 (기본: 800)
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const flags = args.filter(a => a.startsWith('--'));
const positional = args.filter(a => !a.startsWith('--'));

const brand = positional[0];
const model = positional[1];

if (!brand || !model) {
  console.log(`
📸 이미지 파이프라인

사용법: node scripts/process-images.js <brand> <model> [옵션]

예시:
  node scripts/process-images.js nike pegasus-42
  node scripts/process-images.js newbalance 1080v16 --skip-bg
  node scripts/process-images.js asics nimbus29 --quality 90

옵션:
  --skip-bg      배경 제거 건너뛰기
  --quality N    WebP 품질 (기본: 85)
  --max-width N  최대 너비 (기본: 800)

표준 파일명: side, front, back, angle, outsole, top, detail
`);
  process.exit(0);
}

const skipBg = flags.includes('--skip-bg');
const qualityFlag = flags.find(f => f.startsWith('--quality'));
const quality = qualityFlag ? parseInt(qualityFlag.split('=')[1] || args[args.indexOf(qualityFlag) + 1]) : 85;
const maxWidthFlag = flags.find(f => f.startsWith('--max-width'));
const maxWidth = maxWidthFlag ? parseInt(maxWidthFlag.split('=')[1] || args[args.indexOf(maxWidthFlag) + 1]) : 800;

const dir = path.join('public/images/shoes', brand, model);

if (!fs.existsSync(dir)) {
  console.error(`❌ 디렉토리 없음: ${dir}`);
  console.log(`\n먼저 디렉토리를 만들고 이미지를 넣어주세요:`);
  console.log(`  mkdir -p ${dir}`);
  console.log(`  # 이미지 파일을 ${dir}/ 에 복사`);
  process.exit(1);
}

const STANDARD_NAMES = ['side', 'front', 'back', 'angle', 'outsole', 'top', 'detail'];
const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp'];

async function processImages() {
  const files = fs.readdirSync(dir).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return IMAGE_EXTS.includes(ext);
  });

  if (files.length === 0) {
    console.error(`❌ ${dir}에 이미지 파일이 없습니다.`);
    process.exit(1);
  }

  console.log(`\n📸 이미지 처리 시작: ${dir}`);
  console.log(`   파일: ${files.length}개`);
  console.log(`   배경 제거: ${skipBg ? '건너뛰기' : '실행'}`);
  console.log(`   WebP 품질: ${quality}%`);
  console.log(`   최대 너비: ${maxWidth}px\n`);

  const results = [];

  for (const file of files) {
    const inputPath = path.join(dir, file);
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext).toLowerCase()
      .replace(/[^a-z0-9]/g, '');

    // 표준 이름 매칭
    let stdName = STANDARD_NAMES.find(n => baseName.includes(n));
    if (!stdName) {
      // 번호 기반 매핑 (1→side, 2→front, 3→back, 4→angle, 5→outsole)
      const idx = files.indexOf(file);
      stdName = STANDARD_NAMES[idx] || `img-${idx + 1}`;
    }

    const outputPath = path.join(dir, `${stdName}.webp`);

    // 이미 처리된 webp인 경우
    if (ext === '.webp' && file === `${stdName}.webp`) {
      console.log(`  ⏭️  ${file} (이미 처리됨)`);
      results.push({ file, output: `${stdName}.webp`, status: 'skipped' });
      continue;
    }

    try {
      const inputStats = fs.statSync(inputPath);

      let pipeline = sharp(inputPath);

      // 리사이즈
      pipeline = pipeline.resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });

      // WebP 변환
      pipeline = pipeline.webp({ quality });

      await pipeline.toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`  ✅ ${file} → ${stdName}.webp (${(inputStats.size / 1024).toFixed(0)}KB → ${(outputStats.size / 1024).toFixed(0)}KB, ${reduction}% 감소)`);

      // 원본 삭제 (webp가 아닌 경우)
      if (ext !== '.webp') {
        fs.unlinkSync(inputPath);
      }

      results.push({
        file,
        output: `${stdName}.webp`,
        inputSize: inputStats.size,
        outputSize: outputStats.size,
        status: 'ok',
      });
    } catch (err) {
      console.error(`  ❌ ${file}: ${err.message}`);
      results.push({ file, status: 'error', error: err.message });
    }
  }

  // 결과 요약
  const okCount = results.filter(r => r.status === 'ok').length;
  const totalSaved = results
    .filter(r => r.status === 'ok')
    .reduce((sum, r) => sum + (r.inputSize - r.outputSize), 0);

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`✅ ${okCount}/${files.length}개 처리 완료`);
  if (totalSaved > 0) {
    console.log(`💾 총 ${(totalSaved / 1024).toFixed(0)}KB 절약`);
  }

  // 데이터 파일에 추가할 코드 출력
  const webpFiles = fs.readdirSync(dir).filter(f => f.endsWith('.webp')).sort();
  console.log(`\n📋 데이터 파일에 추가할 코드:\n`);
  console.log(`  image: '/images/shoes/${brand}/${model}/${webpFiles[0]}',`);
  console.log(`  images: [`);
  webpFiles.forEach(f => {
    console.log(`    '/images/shoes/${brand}/${model}/${f}',`);
  });
  console.log(`  ],\n`);
}

processImages().catch(err => {
  console.error('처리 실패:', err);
  process.exit(1);
});
