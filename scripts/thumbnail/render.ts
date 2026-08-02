/**
 * 썸네일 생성 — HTML → 헤드리스 Chrome 스크린샷 → WebP.
 *
 *   npx tsx scripts/thumbnail/render.ts <slug> [<slug> ...]
 *   npx tsx scripts/thumbnail/render.ts --dry <slug>     # HTML 만 만들고 멈춘다
 *
 * 헤드리스 Chrome 을 쓰는 이유: 한글 타이포를 정확히 그리는 가장 확실한 경로다.
 * sharp 의 SVG 렌더는 woff2 가변 폰트를 못 읽어 한글이 깨진다.
 * MCP 왕복 없이 셸에서 도는 스크립트라 32장을 한 번에 처리한다.
 */
import { execFileSync } from 'child_process';
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import sharp from 'sharp';
import { deriveCopy, OVERRIDES, type ThumbCopy } from './copy';

const ROOT = resolve(__dirname, '../..');
const POSTS_DIR = join(ROOT, 'src/lib/data/blog/posts');
const OUT_DIR = join(ROOT, 'public/images/blog');
const TMP = join(ROOT, '.thumb-tmp');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** 포스트 파일들에서 slug → {title, category} 를 긁는다. */
function loadPosts(): Map<string, { title: string; category: string }> {
  const map = new Map<string, { title: string; category: string }>();
  for (const f of readdirSync(POSTS_DIR).filter((n) => /^\d{4}-\d{2}\.ts$/.test(n))) {
    const txt = readFileSync(join(POSTS_DIR, f), 'utf8');
    const re = /slug:\s*'([^']+)'[\s\S]{0,600}?title:\s*'([^']*)'[\s\S]{0,600}?category:\s*'([^']+)'/g;
    let m;
    while ((m = re.exec(txt))) {
      if (!map.has(m[1])) map.set(m[1], { title: m[2], category: m[3] });
    }
  }
  return map;
}

function html(copy: ThumbCopy): string {
  return `<!doctype html><html lang="ko"><head><meta charset="utf-8">
<link rel="stylesheet" href="file://${join(__dirname, 'card.css')}"></head>
<body>
<div class="bar"></div>
<p class="kicker">${esc(copy.kicker)}</p>
<h1 class="title">${esc(copy.title)}</h1>
<p class="subtitle">${esc(copy.subtitle)}</p>
<div class="footer">allrunabout.com</div>
</body></html>`;
}

async function main() {
  const args = process.argv.slice(2);
  const dry = args.includes('--dry');
  const slugs = args.filter((a) => !a.startsWith('--'));
  if (!slugs.length) {
    console.error('사용법: npx tsx scripts/thumbnail/render.ts <slug> [<slug> ...]');
    process.exit(1);
  }
  if (!existsSync(CHROME)) {
    console.error(`❌ Chrome 없음: ${CHROME}`);
    process.exit(1);
  }

  const posts = loadPosts();
  mkdirSync(TMP, { recursive: true });

  for (const slug of slugs) {
    const post = posts.get(slug);
    if (!post) {
      console.error(`  ⚠️  ${slug}: 포스트를 못 찾음 — 건너뜀`);
      continue;
    }
    const copy: ThumbCopy = { ...deriveCopy(post), ...(OVERRIDES[slug] ?? {}) };
    const htmlPath = join(TMP, `${slug}.html`);
    writeFileSync(htmlPath, html(copy), 'utf8');

    console.log(`  ${slug}`);
    console.log(`    킥커: ${copy.kicker} / 제목: ${copy.title} / 부제: ${copy.subtitle || '(없음)'}`);
    if (dry) continue;

    const pngPath = join(TMP, `${slug}.png`);
    execFileSync(CHROME, [
      '--headless', '--disable-gpu', '--hide-scrollbars',
      `--screenshot=${pngPath}`,
      '--window-size=1200,630',
      `file://${htmlPath}`,
    ], { stdio: 'ignore' });

    const webpPath = join(OUT_DIR, `${slug}.webp`);
    await sharp(pngPath).webp({ quality: 90 }).toFile(webpPath);
    const kb = (readFileSync(webpPath).length / 1024).toFixed(0);
    console.log(`    → ${webpPath.replace(ROOT + '/', '')} (${kb} KB)`);
  }

  if (!dry) rmSync(TMP, { recursive: true, force: true });
}

main().catch((e) => { console.error(e); process.exit(1); });
