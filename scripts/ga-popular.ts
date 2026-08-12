#!/usr/bin/env tsx
/**
 * GA4 실측 → 인기 데이터 생성 (`src/lib/data/popular.ts`)
 *
 * 사용법:
 *   npm run popular          # 최근 28일 vs 그 이전 28일
 *   npm run popular -- 14    # 창을 14일로
 *
 * 왜 DB가 아니라 이 방식인가:
 * - 사이트가 SSG라 런타임에 조회수를 셀 곳이 없다. 자체 카운터를 만들면
 *   봇 필터·세션 처리·중복 제거를 직접 다시 만들어야 하는데 GA가 이미 한다.
 * - 결과를 TS 파일로 커밋하므로 git 히스토리에 "그 주의 인기"가 남고,
 *   GA 자격증명이 빌드 환경에 들어가지 않는다(로컬에서만 실행).
 *
 * 설계 원칙 두 가지:
 * 1. **조회수 숫자는 산출물에 넣지 않는다.** 월 PV가 수천 규모라 개별 페이지는
 *    수십~수백 회다. "조회 43회"는 죽은 사이트로 읽힌다. 순위(배열 순서)만 남긴다.
 * 2. **절대 TOP만 뽑지 않는다.** 1위가 고착되면 나머지 신발이 영영 안 보인다.
 *    카테고리별 1위 + 급상승으로 노출을 분산한다.
 */
import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { readdirSync, statSync, existsSync, writeFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import { getShoes } from '../src/lib/data/shoes';
import { categoryOrder } from '../src/types/shoe';
import { blogPosts } from '../src/lib/data/blog/posts';

// ── 설정 ────────────────────────────────────────────────

/** 급상승 후보의 최소 조회수. 3→8회 같은 잡음이 상위에 오르는 걸 막는다. */
const TRENDING_MIN_VIEWS = 15;
/** 카테고리당 노출할 신발 수 */
const PER_CATEGORY = 1;
/** 급상승 신발 수 */
const TRENDING_COUNT = 3;
/** 많이 읽은 글 수 */
const POST_COUNT = 5;

/**
 * 출력 경로. 기본은 리포 안이지만, 2주 주기 자동 갱신(`scripts/popular-cron.sh`)은
 * POPULAR_OUT 으로 임시 파일을 지정한다 — 백그라운드 작업이 작업 중인 워킹트리를
 * 더럽히면 안 되기 때문이다.
 */
const OUT_PATH = process.env.POPULAR_OUT || join(process.cwd(), 'src/lib/data/popular.ts');

// ── GA 클라이언트 (ga-report.ts와 동일한 키 해석) ──────────

function resolveKeyFile(): string {
  if (process.env.GA_KEY_FILE) return process.env.GA_KEY_FILE;
  const downloads = join(homedir(), 'Downloads');
  try {
    const matches = readdirSync(downloads)
      .filter((f) => /^blog-auto-494801-.*\.json$/.test(f))
      .map((f) => join(downloads, f))
      .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
    if (matches.length) return matches[0];
  } catch {
    /* Downloads 나열 불가 시 아래로 폴백 */
  }
  const local = join(process.cwd(), '.ga-key.json');
  if (existsSync(local)) return local;
  return join(downloads, 'blog-auto-494801-4f5d2392338c.json');
}

const KEY_FILE = resolveKeyFile();
const PROPERTY_ID = process.env.GA_PROPERTY_ID || '523714985';
const client = new BetaAnalyticsDataClient({ keyFilename: KEY_FILE });
const property = `properties/${PROPERTY_ID}`;

// ── 조회 ────────────────────────────────────────────────

/** pagePath → 조회수. 쿼리스트링·트레일링 슬래시는 정규화해 합산한다. */
async function fetchViews(startDate: string, endDate: string): Promise<Map<string, number>> {
  const [res] = await client.runReport({
    property,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'screenPageViews' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 1000,
  });

  const map = new Map<string, number>();
  for (const row of res.rows ?? []) {
    const raw = row.dimensionValues?.[0].value ?? '';
    const path = raw.split('?')[0].replace(/\/$/, '');
    const views = Number(row.metricValues?.[0].value ?? 0);
    map.set(path, (map.get(path) ?? 0) + views);
  }
  return map;
}

/** '/shoes/asics-gel-kayano-33' → 'asics-gel-kayano-33' (해당 접두사가 아니면 null) */
function slugFrom(path: string, prefix: string): string | null {
  if (!path.startsWith(prefix)) return null;
  const rest = path.slice(prefix.length);
  return rest && !rest.includes('/') ? rest : null;
}

// ── 산출 ────────────────────────────────────────────────

async function main() {
  const days = Number(process.argv[2]) || 28;
  console.log(`\n📈 인기 데이터 생성 — 최근 ${days}일 vs 이전 ${days}일`);
  console.log(`🔑 키: ${KEY_FILE.replace(homedir(), '~')}\n`);

  const [cur, prev] = await Promise.all([
    fetchViews(`${days}daysAgo`, 'today'),
    fetchViews(`${days * 2}daysAgo`, `${days + 1}daysAgo`),
  ]);

  // 실존 slug만 남긴다 — 삭제된 신발·글이 인기 목록에 남는 걸 막는다
  const shoes = getShoes();
  const shoeBySlug = new Map(shoes.map((s) => [s.slug, s]));
  const postSlugs = new Set(blogPosts.map((p) => p.slug));

  const shoeViews: { slug: string; views: number; prev: number }[] = [];
  const postViews: { slug: string; views: number }[] = [];

  // Array.from — tsconfig target이 낮아 Map 직접 순회가 막힌다
  for (const [path, views] of Array.from(cur.entries())) {
    const shoeSlug = slugFrom(path, '/shoes/');
    if (shoeSlug && shoeBySlug.has(shoeSlug)) {
      shoeViews.push({ slug: shoeSlug, views, prev: prev.get(path) ?? 0 });
      continue;
    }
    const postSlug = slugFrom(path, '/blog/');
    if (postSlug && postSlugs.has(postSlug)) {
      postViews.push({ slug: postSlug, views });
    }
  }

  shoeViews.sort((a, b) => b.views - a.views);
  postViews.sort((a, b) => b.views - a.views);

  // 1) 카테고리별 상위 — 노출을 6개 카테고리로 분산
  const byCategory: Record<string, string[]> = {};
  for (const category of categoryOrder) {
    const picks = shoeViews
      .filter((s) => shoeBySlug.get(s.slug)!.category === category)
      .slice(0, PER_CATEGORY)
      .map((s) => s.slug);
    if (picks.length) byCategory[category] = picks;
  }

  // 2) 급상승 — 절대 증가폭 기준. 비율은 1→5 같은 잡음을 상위로 올린다.
  const trending = shoeViews
    .filter((s) => s.views >= TRENDING_MIN_VIEWS)
    .map((s) => ({ ...s, delta: s.views - s.prev }))
    .filter((s) => s.delta > 0)
    .sort((a, b) => b.delta - a.delta)
    .slice(0, TRENDING_COUNT)
    .map((s) => s.slug);

  // 3) 많이 읽은 글
  const posts = postViews.slice(0, POST_COUNT).map((p) => p.slug);

  // ── 안전장치 ──
  // GA 인증이 조용히 실패하거나 속성 ID가 틀리면 빈 결과가 나온다. 그걸 그대로
  // 기록하면 자동 갱신(popular-cron.sh)이 텅 빈 인기 목록을 상용에 밀어넣는다.
  const MIN_CATEGORIES = 3;
  const MIN_POSTS = 3;
  const catCount = Object.keys(byCategory).length;
  if (catCount < MIN_CATEGORIES || posts.length < MIN_POSTS) {
    console.error(
      `❌ 결과가 비정상적으로 빈약합니다 (카테고리 ${catCount}/${MIN_CATEGORIES}, 글 ${posts.length}/${MIN_POSTS}).\n` +
        '   GA 인증·속성 ID·기간을 확인하세요. 파일을 쓰지 않고 중단합니다.'
    );
    process.exit(1);
  }

  // ── 기록 ──
  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());

  const file = `// ⚠️ 자동 생성 파일 — 손으로 고치지 마세요. \`npm run popular\` 로 갱신합니다.
//
// GA4 실측(pagePath × screenPageViews)에서 뽑은 인기 순위입니다.
// 조회수 숫자는 일부러 담지 않습니다 — 개별 페이지 조회수가 수십~수백 규모라
// 화면에 노출하면 죽은 사이트로 읽힙니다. 순위(배열 순서)만 씁니다.
//
// 표기 규칙: "실시간 인기" 같은 문구 금지(SSG라 사실이 아님).
// \`windowDays\`·\`generatedAt\` 을 근거로 "최근 N일 기준"으로 표기하세요.

export interface PopularData {
  /** 생성일 (KST) */
  generatedAt: string;
  /** 집계 창 (일) */
  windowDays: number;
  /** 카테고리 → 인기순 slug 배열 */
  shoesByCategory: Record<string, string[]>;
  /** 직전 같은 기간 대비 조회수 증가폭 상위 */
  trendingShoes: string[];
  /** 많이 읽은 글 slug 배열 */
  posts: string[];
}

export const popular: PopularData = {
  generatedAt: '${today}',
  windowDays: ${days},
  shoesByCategory: ${JSON.stringify(byCategory, null, 4).replace(/\n/g, '\n  ')},
  trendingShoes: ${JSON.stringify(trending, null, 4).replace(/\n/g, '\n  ')},
  posts: ${JSON.stringify(posts, null, 4).replace(/\n/g, '\n  ')},
};
`;

  writeFileSync(OUT_PATH, file);

  // ── 보고 ──
  console.log(`카테고리별 1위 (${Object.keys(byCategory).length}/${categoryOrder.length}개 카테고리)`);
  for (const [cat, slugs] of Object.entries(byCategory)) console.log(`  ${cat}  ${slugs.join(', ')}`);
  console.log(`\n급상승 ${trending.length}종 (최소 ${TRENDING_MIN_VIEWS}회 이상)`);
  trending.forEach((s) => console.log(`  ${s}`));
  console.log(`\n많이 읽은 글 ${posts.length}편`);
  posts.forEach((s) => console.log(`  ${s}`));

  const missing = categoryOrder.filter((c) => !byCategory[c]);
  if (missing.length) {
    console.log(`\n⚠️  조회 데이터가 없어 비는 카테고리: ${missing.join(', ')}`);
    console.log('   화면에서는 이 카테고리를 렌더하지 않거나 rating 상위로 대체하세요.');
  }
  console.log(`\n✅ ${OUT_PATH.replace(process.cwd() + '/', '')} 기록 완료\n`);
}

main().catch((err) => {
  console.error('❌ 실패:', err.message);
  process.exit(1);
});
