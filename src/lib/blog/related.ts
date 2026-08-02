/**
 * 블로그 관련글 관련도.
 *
 * 이전 구현은 `같은 카테고리 OR 태그 공유`로 거른 뒤 **관련도를 버리고 날짜순으로만**
 * 상위 N개를 뽑았다. review·guide 가 각각 75편이라 "같은 카테고리" 하나로 74편이 통과했고,
 * 결과적으로 같은 카테고리의 모든 글이 같은 최신 3편을 가리켰다 —
 * 221편 중 27편만 노출되고 194편은 어디서도 추천되지 않았다.
 *
 * 점수 순위로 바꾼다:
 *   Σ IDF(공유 태그) + Σ IDF(공유 /shoes/ 링크) + 0.3 × (같은 카테고리)
 *
 * **IDF를 쓰는 이유**: 태그 1144개 중 900개(79%)가 딱 한 번만 쓰였고 20회 이상은 0개다.
 * 통제된 분류체계가 아니라 자유 텍스트다. 그런데 바로 그래서 공유될 때 정보량이 크다 —
 * 흔한 태그와 같은 무게로 세면 그 신호가 사라진다.
 *
 * **카테고리 가중치가 0.3인 이유**: 74편을 한꺼번에 통과시키는 뭉툭한 신호라 주력이 될 수 없다.
 * 태그도 신발도 안 겹치는 글에 추천이 0개가 되는 것을 막는 안전망으로만 쓴다.
 *
 * 전역 상태를 두지 않는다 — 호출자가 인덱스를 만들어 넘긴다(테스트 용이성).
 * 메모이즈는 소비처(`src/lib/data/blog/index.ts`)의 책임이다.
 */

/** 점수 계산에 필요한 필드만. BlogPost 를 그대로 넣어도 구조적으로 통과한다. */
export type RelatedInput = {
  slug: string;
  category: string;
  tags: string[];
  content: string;
  publishedAt: string;
};

export type RelatedIndex = {
  total: number;
  /** 태그 → 그 태그를 쓴 글 수 */
  tagDf: Map<string, number>;
  /** 신발 slug → 그 신발을 링크한 글 수 */
  shoeDf: Map<string, number>;
  /** 글 slug → 그 글이 링크한 신발 집합 (본문 재파싱 방지) */
  shoesBySlug: Map<string, Set<string>>;
};

/** 카테고리 일치 가중치. 주력이 아니라 추천 0 방지용 안전망이라 작다. */
const CATEGORY_WEIGHT = 0.3;

const SHOE_LINK = /\/shoes\/([a-z0-9-]+)/g;

/** 본문 HTML 에서 링크된 신발 slug 를 중복 없이 뽑는다. */
export function extractShoeSlugs(content: string): string[] {
  return Array.from(new Set(Array.from(content.matchAll(SHOE_LINK), (m) => m[1])));
}

export function buildIndex(posts: readonly RelatedInput[]): RelatedIndex {
  const tagDf = new Map<string, number>();
  const shoeDf = new Map<string, number>();
  const shoesBySlug = new Map<string, Set<string>>();

  for (const p of posts) {
    for (const t of Array.from(new Set(p.tags))) tagDf.set(t, (tagDf.get(t) ?? 0) + 1);
    const shoes = new Set(extractShoeSlugs(p.content));
    shoesBySlug.set(p.slug, shoes);
    for (const s of Array.from(shoes)) shoeDf.set(s, (shoeDf.get(s) ?? 0) + 1);
  }

  return { total: posts.length, tagDf, shoeDf, shoesBySlug };
}

/**
 * log(N / (1 + df)) — df 가 클수록 0에 가까워진다.
 *
 * **0으로 하한을 둔다.** df 가 N 에 가까우면 log 가 음수가 되는데(예: N=6, df=6 → -0.15),
 * 음수 점수는 `rankRelated` 의 `score > 0` 필터와 충돌해 멀쩡한 후보를 떨어뜨린다.
 * 실제 코퍼스(N=221, 최대 df=19)에서는 항상 양수라 이 하한은 무동작이지만,
 * 작은 테스트 픽스처와 글이 크게 줄어드는 미래 상황에서 방어가 된다.
 */
function idf(total: number, df: number): number {
  return Math.max(0, Math.log(total / (1 + df)));
}

export function scorePair(a: RelatedInput, b: RelatedInput, index: RelatedIndex): number {
  let score = 0;

  const bTags = new Set(b.tags);
  for (const t of Array.from(new Set(a.tags))) {
    if (bTags.has(t)) score += idf(index.total, index.tagDf.get(t) ?? 0);
  }

  const aShoes = index.shoesBySlug.get(a.slug) ?? new Set(extractShoeSlugs(a.content));
  const bShoes = index.shoesBySlug.get(b.slug) ?? new Set(extractShoeSlugs(b.content));
  for (const s of Array.from(aShoes)) {
    if (bShoes.has(s)) score += idf(index.total, index.shoeDf.get(s) ?? 0);
  }

  if (a.category === b.category) score += CATEGORY_WEIGHT;

  return score;
}

/**
 * 점수 내림차순 → 동점이면 최신순. 점수 0인 후보는 버린다.
 *
 * 제네릭인 이유: `BlogPost[]` 를 넣으면 `BlogPost[]` 가 그대로 나와야 호출처에서 캐스트가 필요 없다.
 * `RelatedInput` 은 필요한 필드만 요구하는 하한이다.
 */
export function rankRelated<T extends RelatedInput>(
  target: T,
  candidates: readonly T[],
  index: RelatedIndex,
  limit: number,
): T[] {
  return candidates
    .filter((c) => c.slug !== target.slug)
    .map((c) => ({ post: c, score: scorePair(target, c, index) }))
    .filter((x) => x.score > 0)
    .sort(
      (x, y) =>
        y.score - x.score ||
        new Date(y.post.publishedAt).getTime() - new Date(x.post.publishedAt).getTime(),
    )
    .slice(0, limit)
    .map((x) => x.post);
}
