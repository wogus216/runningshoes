/**
 * 인스타 4:5 스펙 카드 생성 — 신발 DB → HTML → 헤드리스 Chrome → PNG.
 *
 *   npx tsx scripts/thumbnail/render-ig.ts <shoe-slug> [<shoe-slug> ...]
 *   npx tsx scripts/thumbnail/render-ig.ts --out=/tmp/cards <shoe-slug>
 *   npx tsx scripts/thumbnail/render-ig.ts --dry <shoe-slug>    # HTML 만 만들고 멈춘다
 *
 * 블로그 썸네일(render.ts)과 분리한 이유: 입력이 포스트가 아니라 신발이고,
 * 규격도 1200×630 이 아니라 1080×1350 이다. 한 파일에 분기를 넣으면 블로그
 * 썸네일 32장 경로에 위험이 생긴다.
 *
 * ⚠️ 수치는 전부 shoe 객체에서 직접 읽는다. 손으로 옮기지 않는다 —
 *    카드에 박힌 오타는 되돌릴 수 없다.
 * ⚠️ specs.durability 의 단일 숫자는 절대 찍지 않는다. getShoeDurability 의
 *    범위·근거·등급만 쓴다(CLAUDE.md 내구성 표기 규칙).
 */
import { execFileSync } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import sharp from 'sharp';
import { getShoeBySlug } from '../../src/lib/data/shoes/index';
import { getShoeDurability } from '../../src/lib/durability';
import type { Shoe } from '../../src/types/shoe';

const ROOT = resolve(__dirname, '../..');
const PUBLIC = join(ROOT, 'public');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** 토박스 등급 → 화면 문구. 기준 mm 은 CLAUDE.md 의 koreanFootFit 정의. */
const TO_BOX_LABEL: Record<string, string> = {
  narrow: '좁음 — 68mm 미만',
  standard: '표준 — 68~75mm',
  wide: '넓음 — 75mm 초과',
};

/**
 * 카드 문구에 1인칭·후기 표현이 섞이는 것을 렌더 단계에서 막는다.
 * lint.sh 는 블로그 본문만 보므로 인스타 카드는 사각지대다.
 */
const BANNED = /(신어봤|신어보니|착용해보|후기가 많|실사용 후기|제가 |직접 신고|테스트해보니)/;

function guard(text: string, where: string): string {
  if (BANNED.test(text)) {
    throw new Error(`카드 문구 위반(${where}): 1인칭·후기 표현 — "${text}"`);
  }
  return text;
}

/**
 * 배경이 박힌 이미지를 종이톤 위에 그대로 얹으면 흰 사각형이 드러난다.
 * 확장자로는 판별이 안 된다 — `.webp` 인데 알파가 없는 파일이 134종 중 25종이다
 * (2026-09-17 실측). 그래서 알파 채널을 직접 본다.
 */
async function hasAlpha(absPath: string): Promise<boolean> {
  try {
    return Boolean((await sharp(absPath).metadata()).hasAlpha);
  } catch {
    return false;
  }
}

/**
 * 원본 이미지에 들어 있는 상하 여백을 잘라낸다. 자르지 않으면 카드에서 신발이
 * 작게 앉고 위쪽에 빈 공간이 남는다 — 원본마다 여백량이 달라 CSS 로는 못 맞춘다.
 * 실패하면 원본을 그대로 쓴다(자르기는 품질 개선이고, 카드 생성의 전제가 아니다).
 */
async function trimmedImage(absPath: string, outDir: string, slug: string): Promise<string> {
  const out = join(outDir, `.trim-${slug}.png`);
  try {
    await sharp(absPath).trim({ threshold: 12 }).png().toFile(out);
    return out;
  } catch {
    return absPath;
  }
}

/** 다크 카드 마크업. */
async function darkHtml(shoe: Shoe, outDir: string, slug: string): Promise<string> {
  const f = fields(shoe);
  const dur = getShoeDurability(shoe);
  const imgAbs = join(PUBLIC, shoe.image!.replace(/^\//, ''));
  if (!existsSync(imgAbs)) throw new Error(`이미지 없음: ${shoe.image}`);

  // 다크에서는 배경이 박힌 이미지를 구제할 방법이 없다 — 흰 사각형이 다크
  // 그라운드와 정면충돌한다(라이트 카드의 흰 패널 완화책이 통하지 않는다).
  // 추정으로 덮지 않고 거부한다. 해결은 `npm run images` 로 배경을 제거하는 것.
  if (!(await hasAlpha(imgAbs))) {
    throw new Error(`배경 불투명 — 다크 카드 불가. 배경 제거 필요: ${shoe.image}`);
  }

  const product = `<div class="product"><img src="file://${await trimmedImage(imgAbs, outDir, slug)}" alt=""></div>`;

  const durLine = dur
    ? `교체 ${dur.rangeLabel} <em>· ${dur.basisLabel} · ${dur.confidenceLabel}</em>`
    : `교체 주기 <em>· 근거 미확보</em>`;

  const title = guard(`${shoe.brand} ${shoe.name}`, 'title');
  // 96px 은 14자까지만 한 줄에 들어간다. 길면 급을 내려 마지막 토막이
  // 혼자 떨어지는 것을 막는다.
  const titleClass = title.length > 20 ? ' t-xlong' : title.length > 14 ? ' t-long' : '';

  return `<!doctype html><html lang="ko"><head><meta charset="utf-8">
<link rel="stylesheet" href="file://${join(__dirname, 'ig-card-dark.css')}"></head>
<body class="v-dark">
<div class="scrim"></div>
${product}
<div class="bar"></div>
<div class="frame">
  <div class="head">
    <span class="kicker">SPEC</span>
    <span class="cat">${esc(shoe.category)}</span>
  </div>
  <div class="spacer"></div>
  <h1 class="title${titleClass}">${esc(title)}</h1>
  <div class="stats">
    <div class="stat"><b>${f.heel}<i>mm</i></b><span>힐 스택</span></div>
    <div class="divider"></div>
    <div class="stat"><b>${f.weight}<i>g</i></b><span>무게</span></div>
    <div class="divider"></div>
    <div class="stat"><b>${f.drop}<i>mm</i></b><span>드롭</span></div>
  </div>
  <div class="band">
    <p>토박스 ${esc(f.toBox)}</p>
    <p>${durLine}</p>
  </div>
  <div class="footer">
    <span>공식 제품 이미지 · 수치는 외부 랩 실측 인용</span>
    <strong>allrunabout.com</strong>
  </div>
</div>
</body></html>`;
}

/** 라이트/다크가 같은 검증을 쓰도록 필수 필드 추출을 한 곳에 둔다. */
function fields(shoe: Shoe) {
  const heel = shoe.biomechanics?.stackHeight?.heel;
  const drop = shoe.biomechanics?.drop ?? shoe.specs?.drop;
  const weight = shoe.specs?.weight;
  const toBoxWidth = shoe.koreanFootFit?.toBoxWidth;
  const missing = [
    heel === undefined && 'biomechanics.stackHeight.heel',
    drop === undefined && 'biomechanics.drop',
    weight === undefined && 'specs.weight',
    !toBoxWidth && 'koreanFootFit.toBoxWidth',
    shoe.price === undefined && 'price',
    !shoe.image && 'image',
  ].filter(Boolean);
  if (missing.length) throw new Error(`필수 필드 누락 — ${missing.join(', ')}`);
  return {
    heel: String(heel),
    drop: String(drop),
    weight: String(weight),
    toBox: TO_BOX_LABEL[toBoxWidth!] ?? toBoxWidth!,
    price: shoe.price!.toLocaleString('ko-KR'),
  };
}

async function html(shoe: Shoe, outDir: string, slug: string): Promise<string> {
  // 필드가 전부 optional 이다. 빠진 값을 추정으로 메우지 않고 카드를 포기한다 —
  // 카드는 되돌릴 수 없고, 틀린 수치 한 개가 사이트 전체의 근거를 깎는다.
  const heel = shoe.biomechanics?.stackHeight?.heel;
  const drop = shoe.biomechanics?.drop ?? shoe.specs?.drop;
  const weight = shoe.specs?.weight;
  const toBoxWidth = shoe.koreanFootFit?.toBoxWidth;
  const missing = [
    heel === undefined && 'biomechanics.stackHeight.heel',
    drop === undefined && 'biomechanics.drop',
    weight === undefined && 'specs.weight',
    !toBoxWidth && 'koreanFootFit.toBoxWidth',
    shoe.price === undefined && 'price',
    !shoe.image && 'image',
  ].filter(Boolean);
  if (missing.length) {
    throw new Error(`필수 필드 누락 — ${missing.join(', ')}`);
  }

  const dur = getShoeDurability(shoe);
  const imgAbs = join(PUBLIC, shoe.image!.replace(/^\//, ''));
  if (!existsSync(imgAbs)) {
    throw new Error(`이미지 없음: ${shoe.image} (${shoe.brand} ${shoe.name})`);
  }

  const title = guard(`${shoe.brand} ${shoe.name}`, 'title');
  const lede = `정가 ${shoe.price!.toLocaleString('ko-KR')}원`;
  const toBox = TO_BOX_LABEL[toBoxWidth!] ?? toBoxWidth!;

  const chips = [
    { v: String(heel), u: 'mm', label: '힐 스택' },
    { v: String(weight), u: 'g', label: '무게' },
    { v: String(drop), u: 'mm', label: '드롭' },
  ];

  const durLine = dur
    ? `교체 ${dur.rangeLabel} <em>· ${dur.basisLabel} · ${dur.confidenceLabel}</em>`
    : `교체 주기 <em>· 근거 미확보</em>`;

  return `<!doctype html><html lang="ko"><head><meta charset="utf-8">
<link rel="stylesheet" href="file://${join(__dirname, 'ig-card.css')}"></head>
<body>
<div class="bar"></div>
<div class="head">
  <span class="kicker">SPEC</span>
  <span class="cat">${esc(shoe.category)}</span>
</div>
<h1 class="title">${esc(title)}</h1>
<p class="lede">${esc(lede)}</p>
<div class="chips">
${chips.map((c) => `  <div class="chip"><b>${esc(c.v)}<i>${c.u}</i></b><span>${esc(c.label)}</span></div>`).join('\n')}
</div>
<div class="band">
  <p>토박스 ${esc(toBox)}</p>
  <p>${durLine}</p>
</div>
<div class="shot${(await hasAlpha(imgAbs)) ? '' : ' shot--framed'}"><img src="file://${await trimmedImage(imgAbs, outDir, slug)}" alt=""></div>
<div class="footer">
  <span>공식 제품 이미지 · 수치는 외부 랩 실측 인용</span>
  <strong>allrunabout.com</strong>
</div>
</body></html>`;
}

async function main() {
  const args = process.argv.slice(2);
  const dry = args.includes('--dry');
  const outArg = args.find((a) => a.startsWith('--out='));
  const outDir = outArg ? outArg.slice('--out='.length) : join(ROOT, '.ig-tmp');
  const styleArg = args.find((a) => a.startsWith('--style='));
  const variant = (styleArg ? styleArg.slice('--style='.length) : 'dark') as 'light' | 'dark';
  if (!['light', 'dark'].includes(variant)) {
    console.error(`❌ --style 은 light|dark 중 하나여야 한다 (받은 값: ${variant})`);
    process.exit(1);
  }
  const slugs = args.filter((a) => !a.startsWith('--'));

  if (!slugs.length) {
    console.error('사용법: npx tsx scripts/thumbnail/render-ig.ts <shoe-slug> [...]');
    process.exit(1);
  }
  if (!dry && !existsSync(CHROME)) {
    console.error(`❌ Chrome 없음: ${CHROME}`);
    process.exit(1);
  }

  mkdirSync(outDir, { recursive: true });
  const failed: string[] = [];
  let done = 0;

  for (const slug of slugs) {
    const shoe = getShoeBySlug(slug);
    if (!shoe) {
      console.error(`  ⚠️  ${slug}: 신발을 못 찾음 — 건너뜀`);
      failed.push(slug);
      continue;
    }

    let markup: string;
    try {
      markup =
        variant === 'light'
          ? await html(shoe, outDir, slug)
          : await darkHtml(shoe, outDir, slug);
    } catch (e) {
      console.error(`  ⚠️  ${slug}: ${(e as Error).message}`);
      failed.push(slug);
      continue;
    }

    const htmlPath = join(outDir, `${slug}-${variant}.html`);
    writeFileSync(htmlPath, markup, 'utf8');

    const dur = getShoeDurability(shoe);
    console.log(`  ${slug}`);
    console.log(
      `    ${shoe.brand} ${shoe.name} / 힐 ${shoe.biomechanics?.stackHeight?.heel}mm · ${shoe.specs?.weight}g` +
        ` · 드롭 ${shoe.biomechanics?.drop ?? shoe.specs?.drop}mm / 토박스 ${shoe.koreanFootFit?.toBoxWidth}` +
        ` / 교체 ${dur ? `${dur.rangeLabel} (${dur.confidenceLabel})` : '근거 미확보'}`,
    );
    // 조용히 넘기지 않는다 — 배경이 박힌 것을 못 보고 발행하면 되돌릴 수 없다.
    if (!(await hasAlpha(join(PUBLIC, shoe.image!.replace(/^\//, ''))))) {
      console.warn(`    ⚠️  배경 불투명 — 흰 패널로 감쌌다. 투명 PNG 재확보 권장: ${shoe.image}`);
    }
    if (dry) {
      done++;
      continue;
    }

    const pngPath = join(outDir, `${slug}-ig-${variant}.png`);
    execFileSync(
      CHROME,
      [
        '--headless', '--disable-gpu', '--hide-scrollbars',
        `--screenshot=${pngPath}`,
        '--window-size=1080,1350',
        `file://${htmlPath}`,
      ],
      { stdio: 'ignore' },
    );
    const kb = (readFileSync(pngPath).length / 1024).toFixed(0);
    console.log(`    → ${pngPath} (${kb} KB)`);
    done++;
  }

  if (failed.length) {
    console.error(`\n생성 ${done} / 실패 ${failed.length} — ${failed.join(', ')}`);
    process.exit(1);
  }
  console.log(`\n생성 ${done} / 실패 0`);
}

if (require.main === module) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
