#!/usr/bin/env node
/**
 * 페이로드 회귀 가드 — 빌드 산출물 크기 상한 체크
 *
 * Phase 1-1(blog 목록이 192편 전체 content를 직렬화 → RSC 2.5MB / HTML 3.86MB)
 * 같은 회귀의 재발 방지용. `npm run build` 후 실행하며 상한 초과 시 exit 1.
 *
 * 기준선(2026-07-11): blog.rsc 352KB / blog.html 868KB / 최대 .rsc 352KB.
 *
 * Usage: node scripts/check-payload.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', '.next', 'server', 'app');

// 명시적 상한 — 현재값 대비 넉넉한 헤드룸, 큰 회귀는 확실히 잡는다
const LIMITS = [
  { file: 'blog.rsc', max: 600 * 1024 }, // 현재 ~352KB (회귀 전 2.5MB)
  { file: 'blog.html', max: 1.5 * 1024 * 1024 }, // 현재 ~868KB (회귀 전 3.86MB)
];

// 일반 스윕: 어떤 .rsc도 이 상한을 넘으면 실패 (신규 누수 조기 감지)
const RSC_GLOBAL_MAX = 800 * 1024; // 현재 최대 352KB → 2배+ 헤드룸

const kb = (n) => `${(n / 1024).toFixed(0)}KB`;

if (!fs.existsSync(APP_DIR)) {
  console.error(`❌ 빌드 산출물 없음: ${APP_DIR}\n   먼저 'npm run build'를 실행하세요.`);
  process.exit(1);
}

console.log('\n📦 페이로드 회귀 가드\n');

let failed = false;

// 1) 명시적 상한 체크
for (const { file, max } of LIMITS) {
  const p = path.join(APP_DIR, file);
  if (!fs.existsSync(p)) {
    console.warn(`  ⚠️  ${file} 없음 (스킵)`);
    continue;
  }
  const size = fs.statSync(p).size;
  const ok = size <= max;
  console.log(`  ${ok ? '✅' : '❌'} ${file}: ${kb(size)} / 상한 ${kb(max)}`);
  if (!ok) failed = true;
}

// 2) 전체 .rsc 스윕
const rscFiles = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fp);
    else if (entry.name.endsWith('.rsc')) {
      rscFiles.push({ file: path.relative(APP_DIR, fp), size: fs.statSync(fp).size });
    }
  }
})(APP_DIR);

const over = rscFiles.filter((r) => r.size > RSC_GLOBAL_MAX);
if (over.length > 0) {
  console.log(`\n  ❌ ${kb(RSC_GLOBAL_MAX)} 초과 .rsc ${over.length}개:`);
  over.forEach((r) => console.log(`     ${r.file}: ${kb(r.size)}`));
  failed = true;
}

// 3) 최대 .rsc 상위 5개 (가시성)
const top = [...rscFiles].sort((a, b) => b.size - a.size).slice(0, 5);
console.log('\n  최대 .rsc 상위 5:');
top.forEach((r) => console.log(`     ${r.file}: ${kb(r.size)}`));

console.log('');
if (failed) {
  console.error('❌ 페이로드 가드 실패 — 회귀 상한 초과. 대형 데이터가 클라/RSC로 새는지 확인하세요.');
  process.exit(1);
}
console.log('✅ 페이로드 가드 통과\n');
