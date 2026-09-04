const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const buildTime = new Date().toISOString();

/**
 * 얕은 복제로 받은 저장소면 전체 이력을 받아 온다.
 *
 * 왜 필요한가 — `git log -1 -- <파일>` 은 그 파일을 건드린 커밋을 찾는 명령이라 이력이 있어야
 * 동작한다. 얕은 복제(`--depth 1`)에는 커밋이 하나뿐이고 그 커밋이 전체 트리를 "추가"한 것으로
 * 보이므로, **존재하는 모든 경로가 똑같이 최신 커밋 날짜를 돌려받는다.**
 *
 * 2026-09-04 실측: 배포된 sitemap 931개 URL의 lastmod가 값 **2개**뿐이었다 —
 * 최신 커밋 날짜 665개 + 빌드 시각 266개. 파일별로 날짜를 매기려던 아래 로직이 통째로 무력화된
 * 상태였고, 그래서 7월에 고친 페이지도 "방금 바뀜"으로만 신고돼 재크롤 근거가 사라졌다.
 *
 * 실패해도 빌드는 계속한다(네트워크·자격증명이 없을 수 있다). 대신 마지막의 canary 가 경고한다.
 */
(function ensureGitHistory() {
  try {
    const shallow = execSync("git rev-parse --is-shallow-repository", {
      encoding: "utf8",
      cwd: __dirname,
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (shallow !== "true") return;
    execSync("git fetch --unshallow --quiet", {
      cwd: __dirname,
      stdio: "ignore",
      timeout: 120000,
    });
  } catch {
    // 이력을 못 받으면 lastmod 가 뭉친다. 아래 canary 가 빌드 로그에 남긴다.
  }
})();

const lastModCache = new Map();
function gitLastMod(filePath) {
  if (!filePath) return buildTime;
  if (lastModCache.has(filePath)) return lastModCache.get(filePath);
  try {
    const out = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      encoding: "utf8",
      cwd: __dirname,
    }).trim();
    const value = out || buildTime;
    lastModCache.set(filePath, value);
    return value;
  } catch {
    lastModCache.set(filePath, buildTime);
    return buildTime;
  }
}

// Shoe slug → 개별 신발 파일 (shoes/{brand}/{slug}.ts, 2026-07 분리 구조)
// 파일 단위 git log 덕에 신발별 lastmod가 정확해진다 (수정한 신발만 갱신).
const shoeSlugFileMap = (() => {
  const map = {};
  const base = path.join(__dirname, "src/lib/data/shoes");
  for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    for (const f of fs.readdirSync(path.join(base, entry.name))) {
      if (f.endsWith(".ts") && f !== "index.ts") {
        map[f.replace(/\.ts$/, "")] = `src/lib/data/shoes/${entry.name}/${f}`;
      }
    }
  }
  return map;
})();

function shoeFileFor(slug) {
  return shoeSlugFileMap[slug] || "src/lib/data/shoes";
}

// Blog slug → 그 글의 날짜와 파일.
//
// 글은 월별 파일(blog/posts/YYYY-MM.ts)에 여러 개씩 들어 있다. 파일 단위 git 날짜를 쓰면 같은 달
// 글이 전부 같은 날짜를 받으므로, **글 데이터의 updatedAt ?? publishedAt 을 우선 쓴다.** 이 값은
// git 이력이 없는 빌드 환경에서도 그대로 읽히는 것이 장점이다.
//
// 2026-07 분리 전에는 posts.ts 파일 하나였고 이 설정도 그 경로를 보고 있었다. 파일이 사라진 뒤
// 아무도 눈치채지 못해 **블로그 263개 URL 전부가 lastmod 를 빌드 시각으로 받고 있었다**
// (2026-09-04 확인). 경로를 손으로 적어 두면 같은 사고가 반복되므로 폴더를 훑어 만든다.
// Marathon id → 그 행사가 실린 월별 파일 (marathon/{month}.ts).
//
// 라우트가 `/marathon/[id]` 이고 항목의 식별자 필드 이름이 `slug` 가 아니라 `id` 다.
// 디렉터리 하나를 보면 행사 하나만 고쳐도 115개 URL이 전부 "우리 다 바뀌었다"고 신고한다.
// 마라톤은 이 사이트에서 접수 마감·일정이 가장 자주 바뀌는 층이라 매 배포마다 늑대를 부르는 셈이라,
// 파일 단위로 좁힌다. 행사의 `date` 는 대회 날짜(미래일 수 있다)이지 수정일이 아니므로 쓰지 않는다.
const marathonIdFileMap = (() => {
  const map = {};
  const dir = path.join(__dirname, "src/lib/data/marathon");
  try {
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith(".ts") || f === "index.ts") continue;
      const rel = `src/lib/data/marathon/${f}`;
      const src = fs.readFileSync(path.join(__dirname, rel), "utf8");
      for (const m of src.matchAll(/^\s{4}id:\s*['"]([^'"]+)['"]/gm)) map[m[1]] = rel;
    }
  } catch {
    // 구조가 바뀌면 아래 fallback 이 디렉터리 전체를 본다.
  }
  return map;
})();

const blogMeta = (() => {
  const map = {};
  const dir = path.join(__dirname, "src/lib/data/blog/posts");
  try {
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith(".ts") || f === "index.ts") continue;
      const rel = `src/lib/data/blog/posts/${f}`;
      const src = fs.readFileSync(path.join(__dirname, rel), "utf8");
      // 글 객체는 순서대로 나열돼 있다. slug 부터 다음 slug 직전까지가 그 글의 범위다.
      const marks = [...src.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
      marks.forEach((m, i) => {
        const chunk = src.slice(m.index, i + 1 < marks.length ? marks[i + 1].index : undefined);
        const updated = /updatedAt:\s*['"](\d{4}-\d{2}-\d{2})/.exec(chunk);
        const published = /publishedAt:\s*['"](\d{4}-\d{2}-\d{2})/.exec(chunk);
        map[m[1]] = { file: rel, date: (updated || published || [])[1] };
      });
    }
  } catch {
    // 폴더 구조가 또 바뀌면 아래 fallback 이 폴더 전체의 git 날짜를 본다.
  }
  return map;
})();

// noindex: true 플래그가 켜진 신발은 sitemap에서도 제외 (페이지 robots noindex와 일관성).
// 신발 데이터에 noindex: true만 추가하면 자동 제외 — 별도 등록 불필요.
function isNoindexShoe(slug) {
  const file = shoeSlugFileMap[slug];
  if (!file) return false;
  try {
    return /^ {2}noindex:\s*true/m.test(fs.readFileSync(path.join(__dirname, file), "utf8"));
  } catch {
    return false;
  }
}

// /best 페이지의 noindex 여부는 **빌드된 HTML**에서 읽는다.
// 어느 그룹을 noindex 할지는 src/app/(detail)/best/[slug]/page.tsx 한 곳에서만 정하고,
// 여기서는 그 결과를 확인만 한다 — 목록을 두 곳에 복제하면 반드시 어긋난다.
// (postbuild 시점이라 out/ 은 이미 만들어져 있다.)
function isNoindexBestPage(slug) {
  try {
    const html = fs.readFileSync(path.join(__dirname, "out", "best", `${slug}.html`), "utf8");
    return /<meta name="robots" content="[^"]*noindex/.test(html);
  } catch {
    return false;
  }
}

// Static page → source file
const staticPageMap = {
  "/": "src/app/(home)/page.tsx",
  "/about": "src/app/(main)/about/page.tsx",
  "/faq": "src/app/(main)/faq/page.tsx",
  "/contact": "src/app/(main)/contact/page.tsx",
  "/privacy": "src/app/(main)/privacy/page.tsx",
  "/legal": "src/app/(main)/legal/page.tsx",
  "/compare": "src/app/(main)/compare/page.tsx",
  "/recommend": "src/app/(main)/recommend/page.tsx",
  "/marathon": "src/app/(main)/marathon/page.tsx",
  "/gels": "src/app/(main)/gels/page.tsx",
  "/blog": "src/app/(main)/blog/page.tsx",
  "/best": "src/app/(main)/best/page.tsx",
  "/vs": "src/app/(main)/vs/page.tsx",
  "/brands": "src/app/(main)/brands/page.tsx",
};

function lastModFor(urlPath) {
  if (urlPath.startsWith("/shoes/")) {
    const slug = urlPath.replace("/shoes/", "").replace(/\/$/, "");
    return gitLastMod(shoeFileFor(slug));
  }
  if (urlPath.startsWith("/blog/")) {
    const slug = urlPath.replace("/blog/", "").replace(/\/$/, "");
    const meta = blogMeta[slug];
    if (meta && meta.date) return meta.date;
    return gitLastMod((meta && meta.file) || "src/lib/data/blog/posts");
  }
  if (urlPath.startsWith("/gels/")) {
    return gitLastMod("src/lib/data/gels");
  }
  if (urlPath.startsWith("/marathon/")) {
    const id = urlPath.replace("/marathon/", "").replace(/\/$/, "");
    return gitLastMod(marathonIdFileMap[id] || "src/lib/data/marathon");
  }
  if (urlPath.startsWith("/brands/") && urlPath.endsWith("/technology")) {
    return gitLastMod("src/lib/data/brands");
  }
  if (urlPath.startsWith("/brands/")) {
    return gitLastMod("src/lib/data/brands");
  }
  if (urlPath.startsWith("/best/")) {
    return gitLastMod("src/lib/pseo/matrices.ts");
  }
  if (urlPath.startsWith("/vs/")) {
    // 비교 페이지의 내용은 신발 두 켤레다. pairs.ts 하나를 보면 354개 URL이 같은 날짜를 받으므로,
    // 두 신발 파일 중 더 최근 것을 쓴다. 둘 중 하나라도 못 찾으면 pairs.ts 로 물러선다.
    const slug = urlPath.replace("/vs/", "").replace(/\/$/, "");
    const parts = slug.split("-vs-");
    if (parts.length === 2) {
      const dates = parts
        .map((s) => shoeSlugFileMap[s])
        .filter(Boolean)
        .map(gitLastMod);
      if (dates.length === 2) return dates.sort().at(-1);
    }
    return gitLastMod("src/lib/pseo/pairs.ts");
  }
  if (staticPageMap[urlPath]) {
    return gitLastMod(staticPageMap[urlPath]);
  }
  return buildTime;
}

/**
 * 크롤러가 수집할 이유가 없는 경로.
 *
 * `*.json` 은 페이지가 아니라 클라이언트가 fetch 하는 데이터다(지연로드용 `route.ts`).
 * 색인 대상이 아닌데 크롤러가 수집을 시도하면 실패로 기록된다 — 네이버 서치어드바이저가
 * 이를 "접근 불가한 페이지(수집제한)" 4건으로 잡고 있었다(2026-08-21 확인).
 * robots.txt 로 막으면 시도 자체를 안 한다. 브라우저 fetch 는 영향받지 않는다.
 *
 * llms.txt 는 **막지 않는다** — AI 크롤러가 읽어야 하는 파일이다. 다만 루트 관례로
 * 찾으므로 sitemap 등록은 불필요해서 exclude 에만 넣는다.
 */
const DISALLOW = ["/api/*", "/blog-index.json", "/search-index.json", "/shoes-card.json"];

/** robots.txt 에 개별 정책을 남기는 크롤러 — 전부 같은 규칙을 쓴다 */
const ROBOT_AGENTS = [
  "*",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "Meta-ExternalAgent",
];

/**
 * lastmod 가 다시 뭉치면 빌드 로그에 남긴다.
 *
 * 이 설정은 파일별 날짜를 매기려고 공들여 짜여 있는데, git 이력이 없거나 경로가 끊기면 **조용히**
 * 한두 값으로 무너진다. 2026-09-04 에 실제로 931개 URL이 값 2개가 된 채 몇 달을 보냈고, 사람 눈으로
 * sitemap.xml 을 봐도 날짜가 그럴듯해 보여서 아무도 못 잡았다. 그래서 기계가 세게 한다.
 *
 * 빌드를 실패시키지는 않는다 — 배포를 막을 만한 문제는 아니고, 막으면 급할 때 우회 압력이 생긴다.
 */
const seenLastmods = new Set();
const MIN_DISTINCT_LASTMOD = 5;
process.on("exit", () => {
  if (seenLastmods.size === 0 || seenLastmods.size >= MIN_DISTINCT_LASTMOD) return;
  console.warn(
    `\n[sitemap] ⚠ lastmod 고유값이 ${seenLastmods.size}개뿐입니다 (기대: ${MIN_DISTINCT_LASTMOD}개 이상).\n` +
      `  git 이력이 없거나(얕은 복제) lastModFor 의 경로가 끊긴 상태일 수 있습니다.\n` +
      `  값: ${[...seenLastmods].join(", ")}\n` +
      `  참고: docs/ 의 sitemap lastmod 진단 기록\n`,
  );
});

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://allrunabout.com",
  // output: 'export' 전환으로 빌드 산출물이 out/ 이므로 sitemap/robots도 out/에 생성
  outDir: "out",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    "/api/*",
    "/_next/*",
    "/icon.svg",
    "/saved",
    "/blog-index.json",
    "/search-index.json",
    "/shoes-card.json",
    "/llms.txt",
  ],
  robotsTxtOptions: {
    policies: ROBOT_AGENTS.map((userAgent) => ({ userAgent, allow: "/", disallow: DISALLOW })),
    additionalSitemaps: [],
  },
  transform: async (config, urlPath) => {
    const lastmod = lastModFor(urlPath);
    seenLastmods.add(lastmod);

    if (urlPath.startsWith("/shoes/")) {
      const slug = urlPath.replace("/shoes/", "").replace(/\/$/, "");
      if (isNoindexShoe(slug)) return null; // noindex 신발은 sitemap 제외
      return { loc: urlPath, changefreq: "weekly", priority: 0.9, lastmod };
    }
    if (urlPath.startsWith("/best/")) {
      const slug = urlPath.replace("/best/", "").replace(/\/$/, "");
      if (isNoindexBestPage(slug)) return null; // noindex 페이지는 sitemap 제외
    }
    if (urlPath === "/marathon") {
      return { loc: urlPath, changefreq: "daily", priority: 0.8, lastmod };
    }
    if (urlPath === "/" || urlPath === "/recommend" || urlPath === "/compare") {
      return { loc: urlPath, changefreq: "daily", priority: 1.0, lastmod };
    }
    return {
      loc: urlPath,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod,
    };
  },
};
