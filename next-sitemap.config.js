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

// Shoe slug → brand data file (longest prefix wins)
const shoeBrandFiles = [
  ["new-balance-", "src/lib/data/shoes/newbalance.ts"],
  ["nike-", "src/lib/data/shoes/nike.ts"],
  ["adidas-", "src/lib/data/shoes/adidas.ts"],
  ["asics-", "src/lib/data/shoes/asics.ts"],
  ["hoka-", "src/lib/data/shoes/hoka.ts"],
  ["brooks-", "src/lib/data/shoes/brooks.ts"],
  ["saucony-", "src/lib/data/shoes/saucony.ts"],
  ["on-", "src/lib/data/shoes/on.ts"],
  ["puma-", "src/lib/data/shoes/puma.ts"],
  ["mizuno-", "src/lib/data/shoes/mizuno.ts"],
];

function shoeFileFor(slug) {
  for (const [prefix, file] of shoeBrandFiles) {
    if (slug.startsWith(prefix)) return file;
  }
  return "src/lib/data/shoes";
}

// noindex: true 플래그가 켜진 신발은 sitemap에서도 제외 (페이지 robots noindex와 일관성).
// 신발 데이터에 noindex: true만 추가하면 자동 제외 — 별도 등록 불필요.
const shoeFileCache = {};
function isNoindexShoe(slug) {
  const file = shoeFileFor(slug);
  if (!file.endsWith(".ts")) return false;
  if (!(file in shoeFileCache)) {
    try {
      shoeFileCache[file] = fs.readFileSync(path.join(__dirname, file), "utf8");
    } catch {
      shoeFileCache[file] = "";
    }
  }
  const content = shoeFileCache[file];
  const idx = content.indexOf(`slug: '${slug}'`);
  if (idx === -1) return false;
  const nextIdx = content.indexOf("slug: '", idx + 10);
  const block = content.slice(idx, nextIdx === -1 ? content.length : nextIdx);
  return /noindex:\s*true/.test(block);
}

// Static page → source file
const staticPageMap = {
  "/": "src/app/(main)/page.tsx",
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

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://allrunabout.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*", "/_next/*", "/icon.svg", "/saved"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*"],
      },
      { userAgent: "GPTBot", allow: "/", disallow: ["/api/*"] },
      { userAgent: "ChatGPT-User", allow: "/", disallow: ["/api/*"] },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: ["/api/*"] },
      { userAgent: "ClaudeBot", allow: "/", disallow: ["/api/*"] },
      { userAgent: "Claude-Web", allow: "/", disallow: ["/api/*"] },
      { userAgent: "anthropic-ai", allow: "/", disallow: ["/api/*"] },
      { userAgent: "PerplexityBot", allow: "/", disallow: ["/api/*"] },
      { userAgent: "Perplexity-User", allow: "/", disallow: ["/api/*"] },
      { userAgent: "Google-Extended", allow: "/", disallow: ["/api/*"] },
      { userAgent: "Applebot-Extended", allow: "/", disallow: ["/api/*"] },
      { userAgent: "CCBot", allow: "/", disallow: ["/api/*"] },
      { userAgent: "Bytespider", allow: "/", disallow: ["/api/*"] },
      { userAgent: "Meta-ExternalAgent", allow: "/", disallow: ["/api/*"] },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, urlPath) => {
    const lastmod = lastModFor(urlPath);

    if (urlPath.startsWith("/shoes/")) {
      const slug = urlPath.replace("/shoes/", "").replace(/\/$/, "");
      if (isNoindexShoe(slug)) return null; // noindex 신발은 sitemap 제외
      return { loc: urlPath, changefreq: "weekly", priority: 0.9, lastmod };
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
