/**
 * 구매 링크 유효성 + 품절 체크 스크립트
 * 실행: npm run links:check
 *       npm run links:check -- --offline   # HTTP GET 생략 — 발급 내역 판정만 (제휴 링크에 요청을 보내지 않는다)
 *
 * ⚠️ 옵션 없이 돌리면 신발의 쿠팡·공식몰 링크에 실제 GET을 보낸다(쿠팡 파트너스 클릭 집계에 섞일 수 있다).
 *    로컬 점검은 --offline 으로 하고, HTTP 확인이 꼭 필요할 때만 옵션 없이 돌린다.
 *
 * 체크 항목:
 * 1. HTTP 상태 (404/에러)                          — --offline 이면 생략
 * 2. 품절/판매종료 텍스트 감지 (GET으로 HTML 파싱)  — --offline 이면 생략
 * 3. 어필리에이트가 아닌 URL (네이버 쇼핑 "검색결과" 링크 = 수수료 0)
 * 4. naver.me 링크의 실제 판매 상태 — 커넥트 발급 내역과 대조
 * 5. 블로그 본문 제휴 링크 (2026-09-29) — naver.me 는 발급 내역으로, 쿠팡은 요청 없이 "확인불가"로.
 *    신발 DB만 보던 탓에 블로그 naver.me CTA 11건 중 비SALE 5건·발급 내역에 없음 3건이 경보 없이 남아 있었다.
 *    신발 결과·요약과 섞지 않고 별도 섹션으로 출력한다. 종료 코드는 기존처럼 문제 건수와 무관하다
 *    (CI는 요약 줄의 숫자로 판정한다 — .github/workflows/check-links.yml).
 *
 * ⚠️ 3·4번이 왜 있는지 (2026-09-16):
 * naver.me 는 429(rate limit)가 떠서 "봇 차단 = 확인불가"로 분류하고 검사를 건너뛰고 있었다.
 * 그 결과 134종 중 42종이 판매중지·품절 상태로 방치됐는데도 경보가 한 번도 울리지 않았다
 * (아라히 8·본디 9·스트럭처 26 등 트래픽 상위 포함 — 방문자가 "판매중지된 상품입니다" 화면으로 갔다).
 * HTTP 긁기로는 판정이 안 되므로, 커넥트가 주는 productStatus 를 권위 소스로 쓴다.
 * 발급 내역은 `npm run links:fetch` 로 먼저 받아 둘 것.
 */

import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { getAllPosts } from '../src/lib/data/blog';
import { getShoes } from '../src/lib/data/shoes';

const ISSUED_PATH = resolve(process.cwd(), '.omc/naver-issued-links.json');
const OFFLINE = process.argv.includes('--offline');

type IssuedRow = {
  shortenUrl?: string;
  productName?: string;
  productStatus?: string;
  enabled?: boolean;
  discountedSalePrice?: number;
};

/** naver.me 단축 ID → 커넥트 발급 레코드 */
function loadIssued(): { map: Map<string, IssuedRow>; fetchedAt?: string } {
  if (!existsSync(ISSUED_PATH)) return { map: new Map() };
  const parsed = JSON.parse(readFileSync(ISSUED_PATH, 'utf8'));
  const rows: IssuedRow[] = parsed.rows ?? parsed;
  return {
    map: new Map(rows.map((r) => [(r.shortenUrl ?? '').split('/').pop() ?? '', r])),
    fetchedAt: parsed.fetchedAt,
  };
}

/** 어필리에이트 추적이 붙지 않는 URL — 클릭돼도 수수료가 0이다 */
function isNonAffiliate(url: string): boolean {
  return url.includes('search.shopping.naver.com');
}

const COUPANG_HOSTS = ['link.coupang.com', 'coupa.ng'];

/** 블로그 본문 <a href>에서 제휴·쇼핑 링크만 (글 slug, URL) 단위로 모은다. 네트워크 없음. */
function blogPurchaseLinks() {
  const links = new Map<string, { slug: string; url: string; count: number; cta: boolean }>();
  for (const post of getAllPosts()) {
    for (const match of Array.from(post.content.matchAll(/<a\b([^>]*)>/gi))) {
      const attrs = match[1];
      const url = attrs.match(/\bhref=["']([^"']+)["']/)?.[1];
      if (!url) continue;
      let host = '';
      try {
        host = new URL(url).hostname;
      } catch {
        continue; // 상대 경로(내부 링크)
      }
      if (host !== 'naver.me' && !COUPANG_HOSTS.includes(host) && !isNonAffiliate(url)) continue;
      const key = `${post.slug}|${url}`;
      const cta = /\baffiliate-btn\b|\bdata-purchase-link\b/.test(attrs);
      const prev = links.get(key);
      links.set(key, { slug: post.slug, url, count: (prev?.count ?? 0) + 1, cta: (prev?.cta ?? false) || cta });
    }
  }
  return Array.from(links.values());
}

// 품절 감지 키워드 (쿠팡/네이버 공통)
const SOLD_OUT_KEYWORDS = [
  '품절',
  '일시품절',
  '판매종료',
  '판매 종료',
  'sold out',
  'soldout',
  '구매불가',
  '재입고 알림',
  '현재 판매중인 상품이 아닙니다',
  '삭제되었거나 존재하지 않는',
  '페이지를 찾을 수 없습니다',
];

type CheckResult = {
  status: number | string;
  ok: boolean;
  soldOut: boolean;
  unchecked?: boolean; // 봇 차단 등으로 확인 불가 (실제 오류 아님)
  soldOutKeyword?: string;
  redirectUrl?: string;
};

// 봇 차단 도메인 목록 (4xx여도 실제 오류가 아닌 도메인)
const BOT_BLOCKED_DOMAINS = [
  'link.coupang.com',       // 쿠팡 파트너스 (403)
  'search.shopping.naver.com', // 네이버 쇼핑 검색 (418)
  'naver.me',               // 네이버 단축 URL (429 rate limit)
  'brand.naver.com',        // 네이버 브랜드 스토어 (429 rate limit)
];

function isBotBlockedDomain(url: string): boolean {
  return BOT_BLOCKED_DOMAINS.some((domain) => url.includes(domain));
}

async function checkLink(url: string): Promise<CheckResult> {
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(15000),
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'ko-KR,ko;q=0.9',
      },
    });

    if (!response.ok) {
      // 쿠팡 파트너스/네이버 쇼핑 등 봇 차단 도메인은 4xx여도 링크 자체는 유효
      if ([403, 418, 429].includes(response.status) && isBotBlockedDomain(url)) {
        return { status: response.status, ok: true, soldOut: false, unchecked: true };
      }
      return { status: response.status, ok: false, soldOut: false };
    }

    // HTML에서 품절 키워드 검색
    const html = await response.text();
    const lowerHtml = html.toLowerCase();

    let soldOut = false;
    let soldOutKeyword: string | undefined;

    for (const keyword of SOLD_OUT_KEYWORDS) {
      if (lowerHtml.includes(keyword.toLowerCase())) {
        soldOut = true;
        soldOutKeyword = keyword;
        break;
      }
    }

    return {
      status: response.status,
      ok: true,
      soldOut,
      soldOutKeyword,
      redirectUrl: response.url !== url ? response.url : undefined,
    };
  } catch (error) {
    return {
      status: error instanceof Error ? error.message : 'UNKNOWN_ERROR',
      ok: false,
      soldOut: false,
    };
  }
}

async function main() {
  const shoes = getShoes();
  const issued = loadIssued();

  type ResultEntry = { slug: string; store: string; url: string } & CheckResult;
  const results: ResultEntry[] = [];
  const noLinks: string[] = [];
  const nonAffiliate: { slug: string; url: string }[] = [];
  const healthyConnect: string[] = [];
  const coupangOnly: string[] = [];
  const deadProduct: { slug: string; status: string; productName: string }[] = [];
  const notIssued: string[] = [];
  const skippedOffline: { slug: string; store: string }[] = [];

  if (issued.map.size === 0) {
    console.log('\n⚠️  .omc/naver-issued-links.json 이 없다 — naver.me 판매 상태를 판정할 수 없다.');
    console.log('   먼저 `npm run links:fetch` 를 실행할 것.\n');
  } else {
    console.log(`\n📄 커넥트 발급 내역 ${issued.map.size}건 (수거 ${issued.fetchedAt ?? '시점 불명'})`);
  }

  if (OFFLINE) console.log('\n⏭️  --offline: HTTP GET 단계를 생략한다 — 쿠팡·공식몰 링크는 요청을 보내지 않고 "오프라인 생략"으로 센다.');
  console.log(`\n🔍 ${shoes.length}개 신발의 구매 링크 체크 중...\n`);

  for (const shoe of shoes) {
    if (!shoe.purchaseLinks || shoe.purchaseLinks.length === 0) {
      noLinks.push(shoe.slug);
      continue;
    }

    // 쿠팡은 봇 차단으로 상태 판정이 불가능하다. "링크가 있다"까지만 아는 것이고,
    // 살아 있다는 뜻은 아니므로 신발 단위 판정에서 별도로 센다.
    if (shoe.purchaseLinks.some((l) => l.url.includes('coupang.com'))) {
      coupangOnly.push(shoe.slug);
    }

    for (const link of shoe.purchaseLinks) {
      // 1) 네트워크 없이 판정되는 것부터 — 어필리에이트가 아닌 URL
      if (isNonAffiliate(link.url)) {
        nonAffiliate.push({ slug: shoe.slug, url: link.url });
        console.log(`💸 ${shoe.slug} (${link.store}) [어필리에이트 아님: 검색결과 URL]`);
        continue;
      }

      // 2) naver.me 는 HTTP 로 판정이 안 된다 — 커넥트 발급 내역을 권위 소스로 쓴다
      const shortId = link.url.includes('naver.me') ? link.url.split('/').pop() : undefined;
      if (shortId && issued.map.size > 0) {
        const rec = issued.map.get(shortId);
        if (!rec) {
          notIssued.push(shoe.slug);
          console.log(`❓ ${shoe.slug} (${link.store}) [발급 내역에 없음 — 삭제됐거나 다른 계정]`);
          continue;
        }
        if (rec.productStatus !== 'SALE' || rec.enabled === false) {
          const status = rec.enabled === false ? `${rec.productStatus}/disabled` : String(rec.productStatus);
          deadProduct.push({ slug: shoe.slug, status, productName: rec.productName ?? '' });
          console.log(`🔴 ${shoe.slug} (${link.store}) [${status}] ${(rec.productName ?? '').slice(0, 40)}`);
          continue;
        }
        healthyConnect.push(shoe.slug);
        console.log(`✅ ${shoe.slug} (${link.store})`);
        continue;
      }

      // 3) --offline: 여기부터는 HTTP 요청이 필요한 링크다 — 보내지 않고 건너뛴다
      if (OFFLINE) {
        skippedOffline.push({ slug: shoe.slug, store: link.store });
        console.log(`⏭️  ${shoe.slug} (${link.store}) [오프라인 생략]`);
        continue;
      }

      const result = await checkLink(link.url);
      results.push({ slug: shoe.slug, store: link.store, url: link.url, ...result });

      let icon = '✅';
      let note = '';
      if (!result.ok) {
        icon = '❌';
        note = ` [${result.status}]`;
      } else if (result.unchecked) {
        icon = '⚠️';
        note = ' [확인불가: 파트너스 링크]';
      } else if (result.soldOut) {
        icon = '🔴';
        note = ` [품절: "${result.soldOutKeyword}"]`;
      }

      console.log(`${icon} ${shoe.slug} (${link.store})${note}`);
    }
  }

  // 요약
  const failed = results.filter((r) => !r.ok);
  const soldOut = results.filter((r) => r.ok && r.soldOut);
  const unchecked = results.filter((r) => r.ok && r.unchecked);
  const healthy = results.filter((r) => r.ok && !r.soldOut && !r.unchecked);

  const broken = soldOut.length + failed.length + nonAffiliate.length + deadProduct.length + notIssued.length;

  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 결과 요약`);
  console.log(`  ✅ 정상: ${healthy.length + healthyConnect.length}개`);
  console.log(`  🔴 판매중지·품절(커넥트 판정): ${deadProduct.length}개`);
  console.log(`  💸 어필리에이트 아님(수수료 0): ${nonAffiliate.length}개`);
  console.log(`  ❓ 발급 내역에 없음: ${notIssued.length}개`);
  console.log(`  🔴 품절(HTML 감지): ${soldOut.length}개`);
  console.log(`  ❌ 에러: ${failed.length}개`);
  console.log(`  ⚠️  확인불가: ${unchecked.length}개`);
  if (OFFLINE) console.log(`  ⏭️  오프라인 생략(HTTP 미확인): ${skippedOffline.length}개`);
  console.log(`  ⚪ 링크없음: ${noLinks.length}개`);

  if (deadProduct.length > 0) {
    console.log(`\n🔴 판매중지·품절 — 방문자가 살 수 없는 페이지로 간다:`);
    for (const d of deadProduct) {
      console.log(`  - ${d.slug} [${d.status}] ${d.productName.slice(0, 45)}`);
    }
  }

  if (nonAffiliate.length > 0) {
    console.log(`\n💸 어필리에이트 아님 — 클릭돼도 수수료가 0이다:`);
    for (const n of nonAffiliate) {
      console.log(`  - ${n.slug}`);
    }
  }

  if (notIssued.length > 0) {
    console.log(`\n❓ 커넥트 발급 내역에 없는 naver.me: ${notIssued.join(', ')}`);
  }

  if (soldOut.length > 0) {
    console.log(`\n🔴 품절 의심:`);
    for (const s of soldOut) {
      console.log(`  - ${s.slug} (${s.store}) → "${s.soldOutKeyword}"`);
    }
  }

  if (failed.length > 0) {
    console.log(`\n❌ 링크 에러:`);
    for (const f of failed) {
      console.log(`  - ${f.slug} (${f.store}): ${f.status}`);
    }
  }

  if (noLinks.length > 0) {
    console.log(`\n⚪ 구매 링크 없음: ${noLinks.join(', ')}`);
  }

  // ── 신발 단위 판정 ──
  // 링크 단위 집계만 보면 "네이버는 죽었지만 쿠팡이 살아 있는" 신발을 고장으로 오판한다.
  // 실제로 중요한 건 "이 신발에 살아 있는 구매 경로가 하나라도 있는가"다.
  const alive = new Set([...healthy.map((h) => h.slug), ...healthyConnect, ...coupangOnly]);
  // --offline 에서 HTTP로만 판정되는 링크(공식몰 등)만 남은 신발은 "없음"이 아니라 "보류"다.
  const skippedSlugs = new Set(skippedOffline.map((s) => s.slug));
  const pending = shoes.filter((s) => !alive.has(s.slug) && skippedSlugs.has(s.slug));
  const dead = shoes.filter((s) => !alive.has(s.slug) && !skippedSlugs.has(s.slug));

  console.log(`\n${'='.repeat(60)}`);
  console.log(`🧭 신발 단위 판정 (전체 ${shoes.length}종)`);
  console.log(`  ✅ 구매 경로 있음: ${alive.size}종`);
  console.log(`  ⛔ 구매 경로 없음: ${dead.length}종`);
  if (dead.length > 0) console.log(`     ${dead.map((s) => s.slug).join(', ')}`);
  if (pending.length > 0) {
    console.log(`  ⏭️  오프라인이라 판정 보류: ${pending.length}종 — ${pending.map((s) => s.slug).join(', ')}`);
  }
  console.log(
    `  ℹ️  쿠팡 링크 보유 ${coupangOnly.length}종 — 쿠팡은 봇 차단으로 판매 상태를 자동 판정할 수 없다.`,
  );
  console.log('     "확인불가"를 정상으로 읽지 말 것. 주기적으로 육안 확인이 필요하다.');

  console.log(`\n${'='.repeat(60)}`);
  if (broken + noLinks.length === 0) {
    console.log('✅ 모든 구매 경로가 살아 있다.');
  } else {
    console.log(
      `⚠️  손봐야 할 링크 ${broken + noLinks.length}개 — 고장 ${broken} · 링크없음 ${noLinks.length}`,
    );
    console.log('   네이버 커넥트에서 재발급 후 purchaseLinks 를 교체할 것.');
  }

  reportBlogLinks(issued);
  console.log('');
}

/**
 * 블로그 본문 제휴 링크 — 신발 결과와 섞지 않는 별도 섹션. 네트워크 요청을 보내지 않는다.
 * (요약 문구는 CI가 grep 하는 "🔴 품절: N개"·"❌ 에러: N개"와 겹치지 않게 쓴다)
 */
function reportBlogLinks(issued: ReturnType<typeof loadIssued>) {
  const links = blogPurchaseLinks();
  const tally = { ok: 0, dead: 0, notIssued: 0, unjudged: 0, coupang: 0, nonAffiliate: 0 };

  console.log(`\n${'='.repeat(60)}`);
  console.log(`📝 블로그 본문 제휴 링크 (${new Set(links.map((l) => l.slug)).size}편 · ${links.length}개 링크)`);
  if (issued.map.size === 0) console.log('  ⚠️  발급 내역이 없어 naver.me 판매 상태를 판정하지 못한다 — `npm run links:fetch` 먼저.');

  for (const link of links) {
    const where = `${link.slug} · ${link.url.replace(/^https?:\/\//, '')}${link.count > 1 ? ` ×${link.count}` : ''}${link.cta ? '' : ' · CTA 아님(본문 링크)'}`;
    if (isNonAffiliate(link.url)) {
      tally.nonAffiliate++;
      console.log(`  💸 ${where} [어필리에이트 아님: 검색결과 URL]`);
      continue;
    }
    if (COUPANG_HOSTS.includes(new URL(link.url).hostname)) {
      tally.coupang++;
      console.log(`  ⚠️  ${where} [확인불가: 쿠팡 — 클릭 기록 방지로 요청 안 보냄]`);
      continue;
    }
    // naver.me
    if (issued.map.size === 0) {
      tally.unjudged++;
      console.log(`  ⚠️  ${where} [판정 불가: 발급 내역 없음]`);
      continue;
    }
    const rec = issued.map.get(link.url.split('/').pop() ?? '');
    if (!rec) {
      tally.notIssued++;
      console.log(`  ❓ ${where} [발급 내역에 없음 — 삭제됐거나 다른 계정]`);
      continue;
    }
    const name = (rec.productName ?? '').slice(0, 40);
    if (rec.productStatus !== 'SALE' || rec.enabled === false) {
      tally.dead++;
      const status = rec.enabled === false ? `${rec.productStatus}/disabled` : String(rec.productStatus);
      console.log(`  🔴 ${where} [${status}] ${name}`);
      continue;
    }
    tally.ok++;
    console.log(`  ✅ ${where} [SALE] ${name}`);
  }
  if (!links.length) console.log('  제휴 링크 없음');

  const fix = tally.dead + tally.notIssued + tally.nonAffiliate;
  console.log(
    `  요약: 정상 ${tally.ok} · 판매중지·품절 ${tally.dead} · 발급 내역에 없음 ${tally.notIssued} · 어필리에이트 아님 ${tally.nonAffiliate}` +
      ` · 쿠팡 확인불가 ${tally.coupang}${tally.unjudged ? ` · 판정 불가 ${tally.unjudged}` : ''}`,
  );
  if (fix > 0) {
    console.log(`  ⚠️  블로그 본문에서 손봐야 할 링크 ${fix}개 — 신발 DB의 현행 링크로 바꾸거나 재발급할 것 (발급 내역 수거 ${issued.fetchedAt ?? '시점 불명'} 기준).`);
  } else if (tally.unjudged === 0) {
    console.log('  ✅ 블로그 본문 제휴 링크에서 판정 가능한 문제 없음 (쿠팡은 별도 육안 확인).');
  }
}

main();
