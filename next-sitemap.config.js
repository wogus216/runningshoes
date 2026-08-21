const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const buildTime = new Date().toISOString();

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
    return gitLastMod("src/lib/data/blog/posts.ts");
  }
  if (urlPath.startsWith("/gels/")) {
    return gitLastMod("src/lib/data/gels");
  }
  if (urlPath.startsWith("/marathon/")) {
    return gitLastMod("src/lib/data/marathon");
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
