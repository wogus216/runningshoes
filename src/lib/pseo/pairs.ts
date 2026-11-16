import type { Shoe } from '@/types/shoe';
import { shoes as allShoes } from '@/lib/data/shoes';

export type ShoePair = {
  slug: string; // 'nike-pegasus-41-vs-asics-gt-2000-14'
  a: Shoe;
  b: Shoe;
  category: string; // 비교 목록의 그룹. 각 신발의 현재 분류는 a.category·b.category를 사용한다.
};

// 기존 비교 URL의 대상 풀을 고정한다. 선정은 성능 순위·추천 점수를 뜻하지 않는다.
const COMPARISON_POOL: Record<string, readonly string[]> = {
  "입문화": [
    "puma-velocity-nitro-4",
    "brooks-ghost-17",
    "hoka-clifton-10",
    "nike-pegasus-41",
    "brooks-ghost-18",
    "nike-pegasus-premium",
    "adidas-supernova-rise-2",
    "new-balance-880-v15",
    "nike-pegasus-42",
    "puma-velocity-nitro-5",
    "saucony-ride-19"
  ],
  "데일리": [
    "adidas-adizero-evo-sl",
    "adidas-boston-13",
    "asics-novablast-5",
    "puma-deviate-pure-nitro",
    "saucony-endorphin-speed-5",
    "adidas-hyperboost-run",
    "asics-novablast-6",
    "nike-pegasus-plus",
    "adidas-adizero-sl2",
    "hoka-mach-6"
  ],
  "쿠션화": [
    "adidas-supernova-rise-3",
    "asics-megablast",
    "brooks-ghost-max-3",
    "hoka-mach-x-3",
    "new-balance-1080-v14",
    "new-balance-sc-trainer-v3",
    "nike-vomero-18",
    "new-balance-1080-v15",
    "brooks-ghost-max-4",
    "puma-deviate-nitro-4",
    "brooks-glycerin-22",
    "hoka-bondi-9",
    "nike-vomero-plus"
  ],
  "안정화": [
    "hoka-arahi-8",
    "brooks-glycerin-gts-22",
    "mizuno-wave-inspire-21",
    "nike-structure-26",
    "new-balance-860-v15",
    "brooks-adrenaline-gts-25",
    "mizuno-wave-horizon-8",
    "mizuno-wave-inspire-22",
    "new-balance-860-v14",
    "saucony-guide-18",
    "asics-gel-kayano-33"
  ],
  "레이싱": [
    "asics-superblast-2",
    "asics-superblast-3",
    "new-balance-sc-rebel",
    "nike-zoom-fly-6",
    "puma-deviate-nitro-elite-3",
    "puma-deviate-nitro-elite-4",
    "asics-magic-speed-5",
    "adidas-adios-pro-4",
    "asics-magic-speed-4",
    "asics-metaspeed-edge-plus"
  ],
  "트레일": [
    "asics-gel-venture-10",
    "kiprun-kipsummit-max",
    "hoka-speedgoat-6",
    "nike-acg-zegama-trail",
    "saucony-peregrine-16",
    "new-balance-hierro-v9",
    "mizuno-neo-daichi-10",
    "adidas-terrex-agravic-4",
    "hoka-speedgoat-7",
    "saucony-xodus-ultra-4"
  ]
};

// 분류를 정정해도 기존 비교 URL의 조합·목록 위치는 유지한다.
const LEGACY_COMPARISON_CATEGORIES: Record<string, string> = {
  'nike-pegasus-premium': '입문화',
  'asics-superblast-3': '레이싱',
};

function comparisonCategory(shoe: Shoe): string {
  return LEGACY_COMPARISON_CATEGORIES[shoe.slug] ?? shoe.category;
}

/** 미확인 스택을 비워도 기존 비교 URL은 유지한다. 표는 생체역학 미확인 값을 처리한다. */
export function hasComparisonData(shoe: Shoe): boolean {
  return !!(shoe.specs && shoe.koreanFootFit && shoe.targetUsers &&
    shoe.priceAnalysis && shoe.features && shoe.reviews);
}

/**
 * 한 번 색인된 페어 URL은 계속 살려 둔다.
 *
 * 페어 목록은 카테고리별 `rating + valueRating` 상위 N종에서 조합으로 만든다. 그래서 **신발을
 * 추가하기만 해도 상위 N 구성이 바뀌어 기존 페어 URL이 조용히 사라진다.** 2026-08-10 GSC 점검에서
 * 실제로 **39개 URL이 404**였고, 90일 동안 808노출·36클릭을 받던 페이지들이었다
 * (`nike-pegasus-41-vs-nike-pegasus-42` 115노출처럼 우리 최상위 쿼리와 직결된 것도 포함).
 *
 * 아래 목록은 그때 살아 있던 URL을 고정한 것이다. 두 신발이 모두 남아 있고 같은 비교 그룹이면
 * 상위 N에서 밀려나도 계속 생성한다. **새 페어가 색인된 뒤 목록에서 빠지면 같은 사고가 반복되므로,
 * 페어 구성 로직을 손볼 때는 GSC `page` 차원으로 죽은 URL을 먼저 확인할 것.**
 */
export const PINNED_PAIRS: readonly string[] = [
  // 2026-11-10 리닝 정확 모델 사양을 비우면서 자동 후보에서 빠진 기존 URL을 유지.
  'li-ning-red-hare-9-vs-puma-velocity-nitro-4',
  'brooks-ghost-17-vs-li-ning-red-hare-9',
  'hoka-clifton-10-vs-li-ning-red-hare-9',
  'li-ning-red-hare-9-vs-nike-pegasus-41',
  'brooks-ghost-18-vs-li-ning-red-hare-9',
  'li-ning-red-hare-9-vs-nike-pegasus-premium',
  'adidas-supernova-rise-2-vs-li-ning-red-hare-9',
  'li-ning-red-hare-9-vs-new-balance-880-v15',
  'li-ning-red-hare-9-vs-nike-pegasus-42',
  'li-ning-red-hare-9-vs-saucony-ride-19',
  'adidas-adizero-evo-sl-vs-li-ning-red-hare-9-pro',
  'adidas-boston-13-vs-li-ning-red-hare-9-pro',
  'asics-novablast-5-vs-li-ning-red-hare-9-pro',
  'li-ning-red-hare-9-pro-vs-puma-deviate-pure-nitro',
  'li-ning-red-hare-9-pro-vs-saucony-endorphin-speed-5',
  'adidas-hyperboost-run-vs-li-ning-red-hare-9-pro',
  'asics-novablast-6-vs-li-ning-red-hare-9-pro',
  'li-ning-red-hare-9-pro-vs-nike-pegasus-plus',
  'adidas-adizero-sl2-vs-li-ning-red-hare-9-pro',
  'adidas-supernova-rise-3-vs-li-ning-red-hare-9-ultra',
  'asics-megablast-vs-li-ning-red-hare-9-ultra',
  'brooks-ghost-max-3-vs-li-ning-red-hare-9-ultra',
  'hoka-mach-x-3-vs-li-ning-red-hare-9-ultra',
  'li-ning-red-hare-9-ultra-vs-new-balance-1080-v14',
  'li-ning-red-hare-9-ultra-vs-new-balance-sc-trainer-v3',
  'li-ning-red-hare-9-ultra-vs-nike-vomero-18',
  'li-ning-red-hare-9-ultra-vs-new-balance-1080-v15',
  'brooks-ghost-max-4-vs-li-ning-red-hare-9-ultra',
  'brooks-glycerin-22-vs-li-ning-red-hare-9-ultra',
  'hoka-bondi-9-vs-li-ning-red-hare-9-ultra',
  'li-ning-red-hare-9-ultra-vs-nike-vomero-plus',

  // 2026-09-18 네이버 "접근 불가한 페이지" 4건 — 소닉블라스트 2 등록(8/27)으로 1세대가 쿠션화
  // 상위 N에서 밀려나며 404가 된 페어. 네이버가 이미 수집한 URL이라 되살린다.
  'adidas-supernova-rise-3-vs-asics-sonicblast',
  'asics-megablast-vs-asics-sonicblast',
  'asics-sonicblast-vs-new-balance-1080-v14',
  'asics-sonicblast-vs-nike-vomero-18',
  'adidas-adizero-evo-sl-vs-hoka-mach-6',
  'adidas-adizero-evo-sl-vs-nike-pegasus-plus',
  'adidas-adizero-evo-sl-vs-nike-rival-fly-4',
  'adidas-boston-13-vs-hoka-mach-6',
  'adidas-boston-13-vs-nike-pegasus-plus',
  'adidas-boston-13-vs-nike-rival-fly-4',
  'adidas-supernova-rise-2-vs-brooks-ghost-17',
  'adidas-supernova-rise-2-vs-nike-pegasus-41',
  'adidas-supernova-rise-2-vs-nike-pegasus-premium',
  'adidas-supernova-rise-2-vs-puma-velocity-nitro-4',
  'adidas-supernova-rise-3-vs-new-balance-sc-trainer-v3',
  'adidas-terrex-agravic-4-vs-asics-metafuji-trail',
  'adidas-terrex-agravic-4-vs-hoka-tecton-x-3',
  // nike-ultrafly 페어 4종 — 2026-08-21 네이버 서치어드바이저 진단 CSV 에서 발견.
  // 트레일 13종 중 ultrafly 가 rating 4 + valueRating 5 = 9점으로 꼴찌라 TOP_PER_CATEGORY(10)
  // 밖으로 밀려 404 가 돼 있었다(살로몬 3종·히에로 v9 추가로 순위가 뒤로 밀린 결과).
  // 네이버는 이 URL들을 색인해 두고 있었고, 404 폴백 제목이 전부 같아
  // "<title> 요소에 동일한 제목인 웹문서 다수 발견"으로 잡혔다.
  'adidas-terrex-agravic-4-vs-nike-ultrafly',
  'adidas-terrex-agravic-4-vs-salomon-pulsar',
  'adidas-terrex-agravic-4-vs-salomon-ultra-glide-4',
  'adidas-terrex-agravic-speed-ultra-vs-asics-gel-venture-10',
  'adidas-terrex-agravic-speed-ultra-vs-hoka-speedgoat-6',
  'adidas-terrex-agravic-speed-ultra-vs-hoka-tecton-x-3',
  'adidas-terrex-agravic-speed-ultra-vs-nike-ultrafly',
  'asics-gel-venture-10-vs-hoka-tecton-x-3',
  'asics-gel-venture-10-vs-nike-ultrafly',
  'asics-gel-venture-10-vs-salomon-pulsar',
  'asics-gel-venture-10-vs-salomon-ultra-glide-4',
  'asics-metafuji-trail-vs-hoka-speedgoat-6',
  'asics-metafuji-trail-vs-hoka-tecton-x-3',
  'asics-novablast-5-vs-hoka-mach-6',
  'asics-novablast-5-vs-nike-pegasus-plus',
  'asics-novablast-5-vs-nike-rival-fly-4',
  'asics-sonicblast-vs-new-balance-sc-trainer-v3',
  'brooks-ghost-17-vs-nike-pegasus-42',
  'hoka-clifton-10-vs-nike-pegasus-42',
  'hoka-mach-6-vs-li-ning-red-hare-9-pro',
  'hoka-mach-6-vs-saucony-endorphin-speed-5',
  'hoka-speedgoat-6-vs-hoka-tecton-x-3',
  'hoka-speedgoat-6-vs-salomon-ultra-glide-4',
  'hoka-tecton-x-3-vs-nike-ultrafly',
  'hoka-tecton-x-3-vs-salomon-pulsar',
  'hoka-tecton-x-3-vs-salomon-ultra-glide-4',
  'new-balance-1080-v14-vs-new-balance-sc-trainer-v3',
  'new-balance-sc-trainer-v3-vs-nike-vomero-18',
  'nike-pegasus-41-vs-nike-pegasus-42',
  'nike-pegasus-42-vs-nike-pegasus-premium',
  'nike-pegasus-42-vs-puma-velocity-nitro-4',
  'nike-pegasus-plus-vs-nike-rival-fly-4',
  'nike-pegasus-plus-vs-saucony-endorphin-speed-5',
  'nike-rival-fly-4-vs-saucony-endorphin-speed-5',
  'salomon-pulsar-vs-salomon-ultra-glide-4',
];

/**
 * 검색 수요가 큰데 상위 N 밖으로 밀린 신발. 순위와 무관하게 페어 풀에 넣는다.
 *
 * 선발 기준이 `rating + valueRating`뿐이라 **검색 수요를 전혀 반영하지 않는다.** 2026-08-10
 * 점검에서 사이트 최대 트래픽 신발인 젤 카야노 33(90일 2,901노출)이 페어가 **0개**였다 —
 * 안정화 11점 동점 구간에서 배열 순서 우연으로 10위 컷에 걸린 것이다(카야노 32는 통과).
 * 값이 비싸면 valueRating이 낮아져, 인기 프리미엄 모델일수록 빠지는 역설도 있다.
 *
 * 아래는 90일 노출 700+ 인데 페어가 없던 5종이다(합계 7,589노출). GSC를 다시 볼 때
 * 같은 조건으로 갱신할 것.
 */
export const PINNED_SHOES: readonly string[] = [
  'asics-gel-kayano-33', // 2,901노출 · 안정화
  'hoka-bondi-9', //        1,877노출 · 쿠션화
  'brooks-glycerin-22', //    972노출 · 쿠션화
  'saucony-ride-19', //       968노출 · 입문화
  'nike-vomero-plus', //      871노출 · 쿠션화
];

function topShoesByCategory(): Map<string, Shoe[]> {
  const m = new Map<string, Shoe[]>();
  for (const s of allShoes) {
    if (!hasComparisonData(s)) continue;
    const category = comparisonCategory(s);
    if (!m.has(category)) m.set(category, []);
    m.get(category)!.push(s);
  }
  m.forEach((list, category) => {
    const pool = new Set(COMPARISON_POOL[category] ?? []);
    m.set(category, list.filter(shoe => pool.has(shoe.slug)));
  });
  return m;
}

/** 알파벳 순으로 a<b 를 보장해 URL을 안정시킨다. */
function makePair(x: Shoe, y: Shoe, category: string): ShoePair {
  const [first, second] = [x, y].sort((p, q) => p.slug.localeCompare(q.slug));
  return { slug: `${first.slug}-vs-${second.slug}`, a: first, b: second, category };
}

/** 고정 URL은 일부 사양을 비워도 유지한다. 미확인 셀은 비교 표에서 비운다. */
function restorePinnedPairs(): ShoePair[] {
  const bySlug = new Map<string, Shoe>();
  for (const s of allShoes) {
    bySlug.set(s.slug, s);
  }

  const out: ShoePair[] = [];
  for (const slug of PINNED_PAIRS) {
    const parts = slug.split('-vs-');
    if (parts.length !== 2) continue;
    const a = bySlug.get(parts[0]);
    const b = bySlug.get(parts[1]);
    if (!a || !b || comparisonCategory(a) !== comparisonCategory(b)) continue;
    out.push(makePair(a, b, comparisonCategory(a)));
  }
  return out;
}

let cachedPairs: ShoePair[] | null = null;

export function getAllPairs(): ShoePair[] {
  if (cachedPairs) return cachedPairs;
  const byCat = topShoesByCategory();
  const bySlugPair = new Map<string, ShoePair>();

  byCat.forEach((list, category) => {
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const pair = makePair(list[i], list[j], category);
        bySlugPair.set(pair.slug, pair);
      }
    }
  });

  // 고정 페어는 상위 N에서 밀려났어도 살린다(이미 색인된 URL이라 빠지면 404가 된다)
  for (const pair of restorePinnedPairs()) {
    if (!bySlugPair.has(pair.slug)) bySlugPair.set(pair.slug, pair);
  }

  // Array.from 을 쓴다 — tsconfig target 이 낮아 Map.values() 스프레드는 컴파일되지 않는다
  cachedPairs = Array.from(bySlugPair.values());
  return cachedPairs;
}

export function getPairBySlug(slug: string): ShoePair | undefined {
  return getAllPairs().find((p) => p.slug === slug);
}

export function getPairsForShoe(shoeSlug: string): ShoePair[] {
  return getAllPairs().filter((p) => p.a.slug === shoeSlug || p.b.slug === shoeSlug);
}

export function getPairsForCategory(category: string, limit = 5): ShoePair[] {
  return getAllPairs()
    .filter((p) => p.category === category)
    .slice(0, limit);
}
