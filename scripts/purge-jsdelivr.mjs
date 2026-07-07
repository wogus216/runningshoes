// jsDelivr @main 캐시 강제 갱신
// ref=@main 은 캐시 TTL이 12시간이라, 같은 경로의 이미지를 "교체"하면 최대 12h 지연된다.
// 이미지를 덮어쓴 뒤 이 스크립트를 실행하면 즉시 갱신된다. (신규 이미지=새 경로는 불필요)
//
// 사용법:
//   node scripts/purge-jsdelivr.mjs
//     → 마지막 커밋(HEAD~1..HEAD)에서 바뀐 public/images/* 자동 purge
//   node scripts/purge-jsdelivr.mjs public/images/shoes/x/side.webp [...]
//     → 지정한 경로만 purge
import { execSync } from 'node:child_process';

const REPO = 'wogus216/runningshoes';
const REF = 'main';

function changedImages() {
  try {
    const out = execSync('git diff --name-only HEAD~1 HEAD -- public/images', { encoding: 'utf8' });
    return out.split('\n').map((s) => s.trim()).filter(Boolean);
  } catch {
    return [];
  }
}

const files = process.argv.slice(2).length ? process.argv.slice(2) : changedImages();
if (!files.length) {
  console.log('purge 대상 이미지 없음 (변경 없음).');
  process.exit(0);
}

let ok = 0;
for (const f of files) {
  // jsDelivr gh 경로는 repo 루트 기준 → f 는 이미 public/images/… 로 시작
  const url = `https://purge.jsdelivr.net/gh/${REPO}@${REF}/${f}`;
  try {
    const res = await fetch(url);
    if (res.ok) ok++;
    console.log(`${res.ok ? '✓' : '✗'} ${res.status}  ${f}`);
  } catch (e) {
    console.log(`✗ ERR  ${f}  ${e.message}`);
  }
}
console.log(`\npurge 완료: ${ok}/${files.length}`);
