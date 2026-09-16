/**
 * 구매 링크 유효성 + 품절 체크 스크립트
 * 실행: npm run links:check
 *
 * 체크 항목:
 * 1. HTTP 상태 (404/에러)
 * 2. 품절/판매종료 텍스트 감지 (GET으로 HTML 파싱)
 * 3. 어필리에이트가 아닌 URL (네이버 쇼핑 "검색결과" 링크 = 수수료 0)
 * 4. naver.me 링크의 실제 판매 상태 — 커넥트 발급 내역과 대조
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

import { getShoes } from '../src/lib/data/shoes';

const ISSUED_PATH = resolve(process.cwd(), '.omc/naver-issued-links.json');

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

  if (issued.map.size === 0) {
    console.log('\n⚠️  .omc/naver-issued-links.json 이 없다 — naver.me 판매 상태를 판정할 수 없다.');
    console.log('   먼저 `npm run links:fetch` 를 실행할 것.\n');
  } else {
    console.log(`\n📄 커넥트 발급 내역 ${issued.map.size}건 (수거 ${issued.fetchedAt ?? '시점 불명'})`);
  }

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
  const dead = shoes.filter((s) => !alive.has(s.slug));

  console.log(`\n${'='.repeat(60)}`);
  console.log(`🧭 신발 단위 판정 (전체 ${shoes.length}종)`);
  console.log(`  ✅ 구매 경로 있음: ${alive.size}종`);
  console.log(`  ⛔ 구매 경로 없음: ${dead.length}종`);
  if (dead.length > 0) console.log(`     ${dead.map((s) => s.slug).join(', ')}`);
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
  console.log('');
}

main();
