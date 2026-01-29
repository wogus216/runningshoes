/**
 * 구매 링크 유효성 + 품절 체크 스크립트
 * 실행: npx tsx scripts/check-purchase-links.ts
 *
 * 체크 항목:
 * 1. HTTP 상태 (404/에러)
 * 2. 품절/판매종료 텍스트 감지 (GET으로 HTML 파싱)
 */

import { getShoes } from '../src/lib/data/shoes';

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
  soldOutKeyword?: string;
  redirectUrl?: string;
};

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

  type ResultEntry = { slug: string; store: string; url: string } & CheckResult;
  const results: ResultEntry[] = [];
  const noLinks: string[] = [];

  console.log(`\n🔍 ${shoes.length}개 신발의 구매 링크 체크 중...\n`);

  for (const shoe of shoes) {
    if (!shoe.purchaseLinks || shoe.purchaseLinks.length === 0) {
      noLinks.push(shoe.slug);
      continue;
    }

    for (const link of shoe.purchaseLinks) {
      const result = await checkLink(link.url);
      results.push({ slug: shoe.slug, store: link.store, url: link.url, ...result });

      let icon = '✅';
      let note = '';
      if (!result.ok) {
        icon = '❌';
        note = ` [${result.status}]`;
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
  const healthy = results.filter((r) => r.ok && !r.soldOut);

  console.log(`\n${'='.repeat(60)}`);
  console.log(`📊 결과 요약`);
  console.log(`  ✅ 정상: ${healthy.length}개`);
  console.log(`  🔴 품절: ${soldOut.length}개`);
  console.log(`  ❌ 에러: ${failed.length}개`);
  console.log(`  ⚪ 링크없음: ${noLinks.length}개`);

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

  console.log('');
}

main();
