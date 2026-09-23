#!/usr/bin/env node
/**
 * 광고·GA 로딩 회귀 가드 — postbuild 에서 배포 산출물(out/)을 검사한다.
 * postbuild 라 로컬·pre-push·Cloudflare Workers Builds 어디서 빌드해도 돈다 —
 * 실패하면 빌드가 실패하고 wrangler deploy 까지 가지 않는다.
 *
 * 2026-09-21 perf 커밋(ee32cc2)이 전역 AdSense 스크립트를 지우고 광고 슬롯을 lazy load 로,
 * GA 를 lazyOnload 로 바꿔 Auto ads 가 0 이 되고 노출이 급감했다(9/22~23. 같은 날 GA 조회수는 13일 평균 대비 −5% 수준).
 * 소스 문구가 아니라 **실제 배포될 HTML** 에 스크립트가 afterInteractive 로 박혔는지 본다 —
 * 어떤 경로로 지워지거나 늦춰져도 여기서 걸린다.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const APP_DIR = path.join(ROOT, 'out'); // output: 'export' — wrangler 가 서빙하는 그 폴더

if (!fs.existsSync(APP_DIR)) {
  console.error('❌ out/ 없음 — npm run build 후 실행하세요.');
  process.exit(1);
}

// 광고가 붙는 페이지 유형마다 1개씩
const firstHtml = (dir) => {
  const d = path.join(APP_DIR, dir);
  const f = fs.existsSync(d) && fs.readdirSync(d).find((n) => n.endsWith('.html'));
  return f ? path.join(dir, f) : null;
};
const pages = ['index.html', firstHtml('shoes'), firstHtml('blog'), firstHtml('marathon')];

const REQUIRED = [
  { name: 'AdSense 전역 스크립트', marker: 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' },
  { name: 'GA gtag 로더', marker: 'googletagmanager.com/gtag/js' },
  { name: 'GA 초기화(ga4-init)', marker: '"id":"ga4-init"' },
];

const errors = [];
for (const page of pages) {
  if (!page) {
    errors.push('검사할 페이지 유형(shoes/blog/marathon) 중 빌드 산출물이 없는 것이 있다');
    continue;
  }
  const html = fs.readFileSync(path.join(APP_DIR, page), 'utf8').replace(/\\"/g, '"');
  for (const { name, marker } of REQUIRED) {
    // RSC 페이로드의 <Script> props 객체: {..."src":"<marker>...","strategy":"afterInteractive"}
    // 닫는 중괄호는 요구하지 않는다 — ga4-init 은 props 안에 {__html} 이 중첩돼 있다
    const hits = [...html.matchAll(new RegExp(`\\{[^{}]*${marker.replace(/[.?/]/g, '\\$&')}[^{}]*`, 'g'))];
    if (hits.length === 0) {
      errors.push(`${page}: ${name} 없음`);
    } else if (!hits.some((m) => m[0].includes('"strategy":"afterInteractive"'))) {
      errors.push(`${page}: ${name}가 afterInteractive 가 아님 (lazyOnload 등으로 늦추면 노출·계측이 샌다)`);
    }
  }
}

// 광고 슬롯 lazy load 금지 — 첫 화면 이탈자의 수동 유닛 노출이 사라진다
const adSlot = fs.readFileSync(path.join(ROOT, 'src/components/ads/ad-slot.tsx'), 'utf8');
if (/IntersectionObserver|createElement\(\s*['"]script/.test(adSlot)) {
  errors.push('src/components/ads/ad-slot.tsx: 광고 lazy load(IntersectionObserver/스크립트 동적 주입) 금지');
}

if (errors.length) {
  console.error('❌ 광고·GA 로딩 회귀 — CLAUDE.md "광고·GA 로딩" 절대 규칙 위반');
  for (const e of errors) console.error(`   - ${e}`);
  process.exit(1);
}
console.log(`✅ 광고·GA 로딩 정상 (${pages.length}개 페이지 유형)`);
