#!/usr/bin/env node
/**
 * 러닝 카드 메달 글꼴 서브셋 — 캔버스에 그리는 글자만 담는다.
 *
 * 메달 부조는 워커(OffscreenCanvas)와 메인 스레드 캔버스(공유 이미지·WebGL 없는 평면 대체)가 그린다.
 * 워커는 글꼴 파일의 바이트를 넘겨받아 FontFace 로 올리는데, 시안(3D-3 `ad6d632`)은 Pretendard 전체
 * (2,057,688바이트)를 넘겼다. 캔버스에 그리는 글자는 숫자·단위·요일·목표 이름·고정 문구·인물 이름뿐이라
 * 그 글자만 남긴다. 화면 글자(질문·버튼)는 사이트의 Pretendard dynamic subset 이 그리므로 여기 없어도 된다.
 *
 * 글자 출처(이 파일들에 나오는 U+0080 이상 글자 전부 + ASCII):
 *   - medal3d-relief.js  동전 글자(KM·회·강한·목표 이름·요일·건너뜀·매일), 명판 '지난 28일', 끈 'allrunabout'
 *   - medal3d-share.js   공유 이미지 머리글('러닝 카드 / 산초'·'지난 28일')·주소. 카드 문장(인물·칭호·신탁·근거·강점 등)은
 *                        사이트 Pretendard 동적 서브셋으로 그린다(S4) — 여기 넣으면 61→115KB(2026-10-06 측정)가 되고 워커가
 *                        시작 때 통째로 받는다. 동적 서브셋은 그 글자 조각만, 결과 카드 화면이 이미 받은 것을 쓴다
 *   - characters.ts      36명 인물 이름·12가문 이름(S3 명판 각인용)
 * 주석에 섞인 기호(—·…·× 등)도 함께 들어가지만 몇 글자라 그대로 둔다.
 * 캔버스에 새 문구를 그리면 그 파일을 SOURCES 에 넣고 다시 돌린다. 빠진 글자는 sans-serif 로 그려진다.
 *
 * 원본:
 *   - Pretendard Variable: src/app/fonts/PretendardVariable.woff2 (레포에 있음, 시안 assets/pretendard.woff2 와 같은 파일)
 *   - Barlow Condensed Bold(700): BARLOW_SRC 경로, 없으면 시안 커밋 ad6d632 의
 *     public/design-studies/running-input/assets/barlow-condensed.ttf 를 git 에서 읽는다(로컬 전용 브랜치라
 *     이 기기 밖에서는 BARLOW_SRC 로 Google Fonts 의 BarlowCondensed-Bold.ttf 를 준다).
 *   둘 다 SIL Open Font License 1.1.
 *
 * 실행: node scripts/build-medal-fonts.js   (devDependency subset-font = harfbuzz hb-subset wasm)
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const subsetFont = require('subset-font');

const ROOT = path.join(__dirname, '..');
const MEDAL = path.join(ROOT, 'src/components/running-card/medal');
const OUT = path.join(MEDAL, 'fonts');

const SOURCES = [
  path.join(MEDAL, 'medal3d-relief.js'),
  path.join(MEDAL, 'medal3d-share.js'),
  path.join(ROOT, 'src/lib/runner-analysis/characters.ts'),
];

const ascii = () => Array.from({ length: 0x7f - 0x20 }, (_, i) => String.fromCharCode(0x20 + i)).join('');
const range = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => String.fromCodePoint(from + i)).join('');

function sansText() {
  const set = new Set(ascii());
  for (const file of SOURCES) for (const ch of fs.readFileSync(file, 'utf8')) if (ch.codePointAt(0) >= 0x80) set.add(ch);
  return [...set].sort().join('');
}

// 숫자·단위·KM 같은 라틴 글자. 숫자 칸의 '—'(입력 전), 저장 크기의 '×' 같은 기호까지 Latin-1 과 일반 구두점을 넣는다.
const condensedText = () => ascii() + range(0xa0, 0xff) + range(0x2010, 0x2027) + '−';

function barlowSource() {
  if (process.env.BARLOW_SRC) return fs.readFileSync(process.env.BARLOW_SRC);
  return execSync('git show ad6d632:public/design-studies/running-input/assets/barlow-condensed.ttf', { cwd: ROOT, maxBuffer: 8 * 1024 * 1024 });
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const jobs = [
    // 가변 글꼴 축(wght 45–920)은 그대로 둔다 — 캔버스가 450·550·650·700·760 을 쓴다.
    { name: 'medal-sans.woff2', source: fs.readFileSync(path.join(ROOT, 'src/app/fonts/PretendardVariable.woff2')), text: sansText() },
    { name: 'medal-condensed.woff2', source: barlowSource(), text: condensedText() },
  ];
  for (const job of jobs) {
    const out = await subsetFont(job.source, job.text, { targetFormat: 'woff2' });
    fs.writeFileSync(path.join(OUT, job.name), out);
    const hangul = [...job.text].filter((ch) => /[가-힣]/.test(ch)).length;
    console.log(`${job.name}: ${job.source.length.toLocaleString()} → ${out.length.toLocaleString()} 바이트 · 글자 ${[...job.text].length}개(한글 ${hangul})`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
