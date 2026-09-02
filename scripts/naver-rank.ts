#!/usr/bin/env tsx
/**
 * 네이버 검색에서 우리 페이지가 몇 번째에 있는지 센다.
 *
 *   npm run naver:rank -- "2026 디즈니런 인천" "손기정마라톤"
 *   npm run naver:rank -- --where=web "2026 디즈니런 인천"
 *
 * ── 왜 필요한가 ──────────────────────────────────────────────
 * 네이버 서치어드바이저는 노출·클릭·CTR 만 주고 **순위를 주지 않는다.**
 * 그런데 네이버의 "노출"은 뒷페이지여도 잡히기 때문에, 순위를 모르면
 * 낮은 CTR 이 "제목이 안 끌려서"인지 "아예 안 보여서"인지 가를 수 없다.
 * 처방이 완전히 달라지는 갈림길이라 이 수치가 필요하다.
 *
 * 구글은 자동화를 캡차로 막지만(2026-08-31 실측: Chrome MCP·Playwright 모두 실패)
 * **네이버는 UA 만 지정하면 curl 로 그대로 받아진다** — 단 2026-09-02 부터 통합검색·블로그탭은 403, 웹문서 탭(where=web)만 200 이라 기본값이 web 이다.
 */
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const OURS = 'allrunabout.com';

/**
 * naver.com 하위는 **결과인 것만 통과**시킨다.
 * whale·dict·map·keep·shopping 같은 건 검색 결과가 아니라 화면 상단·사이드의 UI 링크인데,
 * HTML 앞쪽에 몰려 있어서 그냥 세면 순위가 통째로 밀려 보인다.
 */
const NAVER_RESULT = /^(m\.)?(blog|cafe|post|in|clip|tv|lounge|kin|news|terms|shoppinglive)\.naver\.com$/;
const isNoise = (host: string): boolean => {
  if (/(^|\.)(naver\.net|pstatic\.net|naverdisplay\.com)$/.test(host)) return true;
  if (/naver\.com$/.test(host)) return !NAVER_RESULT.test(host) && host !== 'blog.naver.com';
  return false;
};

interface Hit {
  rank: number;
  domain: string;
  url: string;
}

async function fetchSerp(query: string, where: string, start = 1): Promise<string> {
  const w = where ? `where=${where}&` : '';
  const s = start > 1 ? `&start=${start}` : '';
  const url = `https://search.naver.com/search.naver?${w}query=${encodeURIComponent(query)}${s}`;
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, 'Accept-Language': 'ko-KR,ko;q=0.9', Referer: 'https://www.naver.com/' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

/**
 * 결과 링크를 등장 순서대로 뽑는다. 같은 도메인이 연속으로 나오는 건
 * 한 결과의 서브링크(대회안내·코스안내 등)라 첫 등장만 센다.
 */
function rankList(html: string): Hit[] {
  const out: Hit[] = [];
  const seen = new Set<string>();
  const re = /href="(https?:\/\/[^"]+)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    let host = '';
    try {
      host = new URL(m[1]).hostname.replace(/^www\./, '');
    } catch {
      continue;
    }
    if (isNoise(host)) continue;
    if (seen.has(host)) continue;
    seen.add(host);
    out.push({ rank: out.length + 1, domain: host, url: m[1] });
  }
  return out;
}

async function main() {
  const argv = process.argv.slice(2);
  // 2026-09-02: 통합검색(where 없음)·블로그탭이 UA 만으로는 HTTP 403 을 돌려주기 시작했다.
  // 웹문서 탭(where=web)은 여전히 200 이라 기본값을 web 으로 옮긴다. 통합검색이 필요하면 --where= 로 비운다.
  const where = argv.find((a) => a.startsWith('--where='))?.slice(8) ?? 'web';
  const queries = argv.filter((a) => !a.startsWith('--'));
  if (!queries.length) {
    console.error('사용법: npm run naver:rank -- "<검색어>" [...]');
    console.error('        npm run naver:rank -- --where=web "<검색어>"');
    process.exit(1);
  }

  console.log(`\n네이버 ${where === 'web' ? '웹문서 탭' : '통합검색'} — 우리 도메인 등장 순서\n`);
  const PAGES = [1, 11, 21, 31, 41]; // 네이버는 start 로 페이지를 넘긴다
  for (const q of queries) {
    const all: Hit[] = [];
    const seen = new Set<string>();
    let failed = false;
    for (const start of PAGES) {
      try {
        for (const h of rankList(await fetchSerp(q, where, start))) {
          if (seen.has(h.domain)) continue;
          seen.add(h.domain);
          all.push({ ...h, rank: all.length + 1 });
        }
      } catch (e) {
        console.log(`  "${q}" start=${start} 수집 실패 (${(e as Error).message})`);
        failed = true;
        break;
      }
      if (all.some((h) => h.domain.includes(OURS))) break; // 찾았으면 더 안 넘긴다
      await new Promise((r) => setTimeout(r, 1200));
    }
    if (failed) continue;

    const mine = all.find((h) => h.domain.includes(OURS));
    console.log(`### "${q}"  (${PAGES.length}페이지까지 고유 도메인 ${all.length}개)`);
    console.log(`  상위 10: ${all.slice(0, 10).map((h) => h.domain).join(' · ')}`);
    if (mine) {
      console.log(`  ➜ 우리: ${mine.rank}번째  ${mine.url.slice(0, 90)}`);
    } else {
      console.log(`  ➜ 우리: ${all.length}개 안에 없음 — 최소 그보다 뒤이거나 미색인`);
    }
    console.log('');
    await new Promise((r) => setTimeout(r, 1500));
  }

  console.log('⚠️ 읽는 법');
  console.log('   · 이 순서는 "고유 **도메인**이 HTML 에 등장한 차례"다. blog.naver.com 결과가');
  console.log('     10건이어도 1개로 센다 — 실제 결과 수는 이보다 훨씬 많다.');
  console.log('     따라서 "N개 안에 없음"은 **최소 N번째보다 뒤**라는 뜻이지 N+1위가 아니다.');
  console.log('   · 네이버 통합검색은 클립·블로그·웹문서 영역이 섞여 화면상 시각적 순위와 다르다.');
  console.log('   · 절대 순위로 인용하지 말 것. 같은 검색어의 **시점별 변화**를 보는 용도다.');
  console.log('   · 색인 여부를 가르려면 브랜드 쿼리로 확인한다 — 예: "러닝의 모든것 <대회명>".');
  console.log('     거기서 1번째인데 일반 쿼리에서 안 나오면 색인이 아니라 **순위** 문제다.');
}

main().catch((e) => {
  console.error('실패:', e?.message ?? e);
  process.exit(1);
});
