// 배포된 사이트에서 이미지 CDN(jsDelivr) 이전이 올바로 적용됐는지 검증한다.
// 실사용 이미지 = CDN + 200 로드, OG 이미지 = origin 유지 를 확인.
// 사용법:
//   node scripts/verify-cdn.mjs                 → https://allrunabout.com 검증
//   node scripts/verify-cdn.mjs https://…       → 특정 URL 검증
const BASE = process.argv[2] || 'https://allrunabout.com';
const PAGES = ['/shoes/hoka-bondi-9', '/blog/2026-descente-awaken-ekiden-race'];

let fail = 0;

for (const path of PAGES) {
  const url = BASE + path;
  console.log(`\n▶ ${path}`);
  let html;
  try {
    html = await fetch(url).then((r) => r.text());
  } catch (e) {
    console.log(`  ✗ 페이지 로드 실패: ${e.message}`);
    fail++;
    continue;
  }

  const imgs = [...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]);
  const cdn = imgs.filter((s) => s.includes('cdn.jsdelivr.net'));
  const originImgs = imgs.filter((s) => /allrunabout\.com\/images|^\/images\//.test(s));
  const og = html.match(/property="og:image"\s+content="([^"]+)"/)?.[1];

  console.log(`  <img> ${imgs.length}개 · CDN ${cdn.length} · origin/상대 ${originImgs.length}`);

  if (cdn.length === 0) {
    console.log('  ✗ CDN 이미지가 하나도 없음 (배포 전이거나 env 미적용?)');
    fail++;
  } else {
    let bad = 0;
    for (const s of cdn.slice(0, 8)) {
      try {
        const res = await fetch(s, { method: 'HEAD' });
        if (!res.ok) { bad++; console.log(`  ✗ ${res.status} ${s}`); }
      } catch (e) { bad++; console.log(`  ✗ ERR ${s} ${e.message}`); }
    }
    if (bad === 0) console.log(`  ✓ CDN 이미지 200 로드 확인 (${Math.min(cdn.length, 8)}개 샘플)`);
    else fail++;
  }

  if (originImgs.length > 0) console.log(`  ⚠ 아직 origin/상대 이미지 ${originImgs.length}개 (일부 미이전)`);

  if (og && og.includes('jsdelivr')) {
    console.log('  ✗ OG 이미지가 CDN을 가리킴 (origin이어야 함)');
    fail++;
  } else if (og) {
    console.log('  ✓ OG 이미지 origin 유지');
  }
}

console.log(fail === 0 ? '\n✅ 전부 통과' : `\n❌ ${fail}건 실패`);
process.exit(fail === 0 ? 0 : 1);
