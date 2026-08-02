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

export type PostMeta = { title: string; category: string };

/**
 * 포스트 파일 텍스트 하나에서 slug → {title, category} 를 긁는다. 순수 함수 —
 * 파일시스템을 안 타므로 fixture 문자열로 바로 단위 테스트할 수 있다.
 *
 * `title`과 `category` 사이에 수천 자짜리 `content` 템플릿 리터럴이 끼어 있어
 * 고정폭 근접 창으로는 못 찾는 글이 있다(예: content가 긴 글). 그래서 먼저
 * 각 포스트 객체의 경계(다음 `slug:` 등장 전까지)로 블록을 자르고, 그 블록
 * 안에서 title/category를 각각 독립적으로 찾는다 — 필드 간 거리에 상관없다.
 */
export function parsePosts(txt: string): Map<string, PostMeta> {
  const map = new Map<string, PostMeta>();
  const slugRe = /slug:\s*'([^']+)'/g;
  const hits: { slug: string; index: number }[] = [];
  let sm;
  while ((sm = slugRe.exec(txt))) {
    hits.push({ slug: sm[1], index: sm.index });
  }
  for (let i = 0; i < hits.length; i++) {
    const start = hits[i].index;
    const end = i + 1 < hits.length ? hits[i + 1].index : txt.length;
    const block = txt.slice(start, end);
    const titleMatch = block.match(/title:\s*'([^']*)'/);
    const categoryMatch = block.match(/category:\s*'([^']+)'/);
    if (!titleMatch || !categoryMatch) continue;
    if (!map.has(hits[i].slug)) {
      map.set(hits[i].slug, { title: titleMatch[1], category: categoryMatch[1] });
    }
  }
  return map;
}

/** 포스트 파일들에서 slug → {title, category} 를 긁는다. 파일 I/O + parsePosts 병합. */
function loadPosts(): Map<string, PostMeta> {
  const map = new Map<string, PostMeta>();
  for (const f of readdirSync(POSTS_DIR).filter((n) => /^\d{4}-\d{2}\.ts$/.test(n))) {
    const txt = readFileSync(join(POSTS_DIR, f), 'utf8');
    parsePosts(txt).forEach((meta, slug) => {
      if (!map.has(slug)) map.set(slug, meta);
    });
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

  const failed: string[] = [];
  let done = 0;

  for (const slug of slugs) {
    const post = posts.get(slug);
    if (!post) {
      console.error(`  ⚠️  ${slug}: 포스트를 못 찾음 — 건너뜀`);
      failed.push(slug);
      continue;
    }
    const copy: ThumbCopy = { ...deriveCopy(post), ...(OVERRIDES[slug] ?? {}) };
    const htmlPath = join(TMP, `${slug}.html`);
    writeFileSync(htmlPath, html(copy), 'utf8');

    console.log(`  ${slug}`);
    console.log(`    킥커: ${copy.kicker} / 제목: ${copy.title} / 부제: ${copy.subtitle || '(없음)'}`);
    if (dry) {
      done++;
      continue;
    }

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
    done++;
  }

  if (!dry) rmSync(TMP, { recursive: true, force: true });

  // 실패를 조용히 넘기지 않는다 — 출력이 길어지면 경고 한 줄이 묻힌다.
  if (failed.length) {
    console.error(`\n생성 ${done} / 실패 ${failed.length} — ${failed.join(', ')}`);
    process.exit(1);
  }
  console.log(`\n생성 ${done} / 실패 0`);
}

// 직접 실행됐을 때만 돈다 — 테스트가 parsePosts 를 import 하면서 이 파일이
// require 되는데, 그때 main()이 같이 돌면 인자 없음/process.exit 부작용이
// 테스트 프로세스로 새어나간다.
if (require.main === module) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
