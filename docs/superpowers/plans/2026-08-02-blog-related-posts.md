# 블로그 관련글 관련도 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 관련글이 모든 글에 같은 최신 3편을 추천하던 것을 관련도 순위로 바꿔, 추천에 노출되는 글을 27편(12%)에서 216편(98%)으로 늘린다.

**Architecture:** 점수 계산을 `src/lib/blog/related.ts`의 **순수 함수**로 분리해 Vitest로 검증한다. IDF 테이블과 신발 링크 집합은 모듈 스코프에 1회 구축·메모이즈한다(SSG 빌드에서 221×221 계산이 페이지마다 돌면 안 된다). `getRelatedPosts`는 시그니처를 유지한 채 내부만 교체하므로 호출처는 손대지 않는다.

**Tech Stack:** Next.js 15.5 (SSG, `output: export`) · React 19.2 · TypeScript 5.4 · Vitest 4

## Global Constraints

이 섹션은 **모든 태스크에 암묵적으로 포함**된다.

- **작업 위치**: `main` 브랜치 메인 워크트리(리포 루트)
- **스펙**: `docs/superpowers/specs/2026-08-02-blog-related-posts-design.md`
- **`getRelatedPosts` / `getRelatedPostsMeta`의 시그니처를 바꾸지 않는다** — 호출처(`src/app/(detail)/blog/[slug]/page.tsx:81`)가 그대로 돌아야 한다
- **`getRelatedPosts`는 서버에서만 호출한다.** `'use client'` 컴포넌트가 모듈 스코프에서 데이터 getter를 부르면 풀 블로그 데이터가 클라이언트 번들에 실린다 — 이 리포에 실측 712KB 사례가 있다
- **상세 페이지의 in-article 광고 슬롯 로직을 건드리지 않는다** (수익 동선)
- **`git add`에 파일을 명시한다.** `-A`/`.`/`-a` 금지 — `tsconfig.tsbuildinfo`(빌드 산출물, git 추적 중)가 딸려 들어간다. 섞였으면 `git checkout tsconfig.tsbuildinfo`
- **검증은 `set -o pipefail`과 함께 실행한다.** `npm run build | tail`이 실패 exit code를 삼킨 이력이 있다
- **이 셸은 zsh다.** 따옴표 없는 `$VAR`는 단어 분리되지 않는다 — 배열은 `"${ARR[@]}"`로 전개한다
- **검증 체인**: `npx tsc --noEmit` → `npm test` → `npm run lint` → `npm run validate` → `set -o pipefail && npm run build`

## 파일 구조

**신규**

| 파일 | 책임 |
|---|---|
| `src/lib/blog/related.ts` | 점수 계산 순수 함수 + IDF/신발 인덱스(1회 구축·메모이즈) |
| `src/lib/__tests__/blog-related.test.ts` | 점수 규칙 TDD + 커버리지 회귀 가드 |

`src/lib/blog/`는 이미 있다(`split-content.ts`). `src/lib/marathon/`(`bands.ts`·`distance.ts`)이 같은 패턴의 선례다.

**수정**

| 파일 | 변경 |
|---|---|
| `src/lib/data/blog/index.ts` | `getRelatedPosts` 내부를 새 점수로 교체, 기본 `limit` 3 → 6 |

**건드리지 않는 것**

- `src/app/(detail)/blog/[slug]/page.tsx` — 호출이 `getRelatedPostsMeta(slug)`로 limit을 안 넘기고, 그리드가 이미 `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`이라 **6개가 자동으로 두 줄이 된다**
- 신발 상세의 `getPostsLinkingToShoe` — 측정 결과 건강하다(노출 120편, 상위10 점유 32%)

**검증 전략**: 이 프로젝트에는 RTL·jsdom이 없고 Vitest 유닛 테스트만 있다(`src/lib/__tests__/`). **점수 함수는 TDD로**, **커버리지는 전체 데이터에 대한 회귀 가드로** 검증한다. 테스트 인프라 추가는 범위 밖이다(YAGNI).

---

### Task 1: 점수 함수 + IDF 인덱스

**Files:**
- Create: `src/lib/blog/related.ts`
- Test: `src/lib/__tests__/blog-related.test.ts`

**Interfaces:**
- Produces:
  ```ts
  export type RelatedInput = {
    slug: string;
    category: string;
    tags: string[];
    content: string;
    publishedAt: string;
  };
  export function extractShoeSlugs(content: string): string[];
  export function buildIndex(posts: readonly RelatedInput[]): RelatedIndex;
  export function scorePair(a: RelatedInput, b: RelatedInput, index: RelatedIndex): number;
  export function rankRelated<T extends RelatedInput>(
    target: T,
    candidates: readonly T[],
    index: RelatedIndex,
    limit: number,
  ): T[];
  ```
  `RelatedIndex`는 IDF 테이블과 신발 링크 집합을 담는 불투명 타입이다. **호출자가 인덱스를 만들어 넘긴다** — 모듈이 전역 상태를 들고 있지 않아야 테스트가 쉽다(메모이즈는 Task 2의 소비처가 한다).

  `RelatedInput`은 `BlogPost`가 아니라 **필요한 필드만 받는 구조적 타입**이다. `BlogPost`를 그대로 넣어도 통과하고(구조적 타이핑), 테스트에서는 최소 fixture만 만들면 된다.

- [ ] **Step 1: 실패하는 테스트 작성**

```ts
// src/lib/__tests__/blog-related.test.ts
import { describe, it, expect } from 'vitest';
import {
  extractShoeSlugs,
  buildIndex,
  scorePair,
  rankRelated,
  type RelatedInput,
} from '@/lib/blog/related';

function post(over: Partial<RelatedInput> & { slug: string }): RelatedInput {
  return {
    category: 'review',
    tags: [],
    content: '',
    publishedAt: '2026-01-01',
    ...over,
  };
}

describe('extractShoeSlugs', () => {
  it('본문의 /shoes/ 링크를 뽑는다', () => {
    const html = '<a href="/shoes/asics-gel-kayano-33">카야노</a> 와 <a href="/shoes/nike-pegasus-42">페가수스</a>';
    expect(extractShoeSlugs(html).sort()).toEqual(['asics-gel-kayano-33', 'nike-pegasus-42']);
  });

  it('같은 신발이 여러 번 나와도 한 번만 센다', () => {
    const html = '/shoes/nike-pegasus-42 ... /shoes/nike-pegasus-42';
    expect(extractShoeSlugs(html)).toEqual(['nike-pegasus-42']);
  });

  it('신발 링크가 없으면 빈 배열', () => {
    expect(extractShoeSlugs('<p>러닝 이야기</p>')).toEqual([]);
  });
});

describe('scorePair', () => {
  it('희귀 태그 공유가 흔한 태그 공유보다 높은 점수', () => {
    // '흔한'은 6편이 쓰고, '희귀'는 2편만 쓴다
    const corpus = [
      post({ slug: 'a', tags: ['흔한', '희귀'] }),
      post({ slug: 'b', tags: ['흔한', '희귀'] }),
      post({ slug: 'c', tags: ['흔한'] }),
      post({ slug: 'd', tags: ['흔한'] }),
      post({ slug: 'e', tags: ['흔한'] }),
      post({ slug: 'f', tags: ['흔한'] }),
    ];
    const index = buildIndex(corpus);
    const common = scorePair(post({ slug: 'x', tags: ['흔한'] }), corpus[2], index);
    const rare = scorePair(post({ slug: 'x', tags: ['희귀'] }), corpus[1], index);
    expect(rare).toBeGreaterThan(common);
  });

  it('같은 신발을 링크하면 점수에 반영된다', () => {
    // 카테고리가 서로 달라 신발 신호만 남는다.
    // 코퍼스가 5편이라 df=2 인 신발의 IDF 가 양수다 — 3편이면 log(3/3)=0 이 되어 이 단언이 무의미해진다
    const corpus = [
      post({ slug: 'a', content: '/shoes/nike-pegasus-42', category: 'guide' }),
      post({ slug: 'b', content: '/shoes/nike-pegasus-42', category: 'review' }),
      post({ slug: 'c', content: '', category: 'news' }),
      post({ slug: 'd', content: '', category: 'news' }),
      post({ slug: 'e', content: '', category: 'tips' }),
    ];
    const index = buildIndex(corpus);
    expect(scorePair(corpus[0], corpus[1], index)).toBeGreaterThan(0);
  });

  it('태그도 신발도 안 겹쳐도 같은 카테고리면 점수 > 0', () => {
    const corpus = [
      post({ slug: 'a', category: 'guide' }),
      post({ slug: 'b', category: 'guide' }),
    ];
    const index = buildIndex(corpus);
    expect(scorePair(corpus[0], corpus[1], index)).toBeGreaterThan(0);
  });

  it('아무것도 안 겹치면 0', () => {
    const corpus = [
      post({ slug: 'a', category: 'guide', tags: ['x'] }),
      post({ slug: 'b', category: 'news', tags: ['y'] }),
    ];
    const index = buildIndex(corpus);
    expect(scorePair(corpus[0], corpus[1], index)).toBe(0);
  });
});

describe('rankRelated', () => {
  it('자기 자신은 결과에 없다', () => {
    const corpus = [
      post({ slug: 'me', category: 'guide' }),
      post({ slug: 'other', category: 'guide' }),
    ];
    const index = buildIndex(corpus);
    const out = rankRelated(corpus[0], corpus, index, 6);
    expect(out.map((p) => p.slug)).not.toContain('me');
  });

  it('점수 높은 순으로 정렬한다', () => {
    const corpus = [
      post({ slug: 'target', category: 'guide', tags: ['희귀'] }),
      post({ slug: 'weak', category: 'guide', tags: [] }),
      post({ slug: 'strong', category: 'guide', tags: ['희귀'] }),
      post({ slug: 'pad1', category: 'news', tags: [] }),
      post({ slug: 'pad2', category: 'news', tags: [] }),
    ];
    const index = buildIndex(corpus);
    const out = rankRelated(corpus[0], corpus, index, 6);
    expect(out[0].slug).toBe('strong');
  });

  it('점수가 같으면 최신 글이 앞에 온다', () => {
    const corpus = [
      post({ slug: 'target', category: 'guide' }),
      post({ slug: 'old', category: 'guide', publishedAt: '2026-01-01' }),
      post({ slug: 'new', category: 'guide', publishedAt: '2026-06-01' }),
    ];
    const index = buildIndex(corpus);
    const out = rankRelated(corpus[0], corpus, index, 6);
    expect(out.map((p) => p.slug)).toEqual(['new', 'old']);
  });

  it('limit 을 지킨다', () => {
    const corpus = Array.from({ length: 10 }, (_, i) => post({ slug: `p${i}`, category: 'guide' }));
    const index = buildIndex(corpus);
    expect(rankRelated(corpus[0], corpus, index, 6)).toHaveLength(6);
  });

  it('점수 0인 후보는 제외한다', () => {
    const corpus = [
      post({ slug: 'target', category: 'guide', tags: ['x'] }),
      post({ slug: 'unrelated', category: 'news', tags: ['y'] }),
    ];
    const index = buildIndex(corpus);
    expect(rankRelated(corpus[0], corpus, index, 6)).toHaveLength(0);
  });
});
```

- [ ] **Step 2: 테스트가 실패하는지 확인**

```bash
npx vitest run src/lib/__tests__/blog-related.test.ts
```
기대: FAIL — `Failed to resolve import "@/lib/blog/related"`

- [ ] **Step 3: 최소 구현**

```ts
// src/lib/blog/related.ts

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
    for (const t of new Set(p.tags)) tagDf.set(t, (tagDf.get(t) ?? 0) + 1);
    const shoes = new Set(extractShoeSlugs(p.content));
    shoesBySlug.set(p.slug, shoes);
    for (const s of shoes) shoeDf.set(s, (shoeDf.get(s) ?? 0) + 1);
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
  for (const t of new Set(a.tags)) {
    if (bTags.has(t)) score += idf(index.total, index.tagDf.get(t) ?? 0);
  }

  const aShoes = index.shoesBySlug.get(a.slug) ?? new Set(extractShoeSlugs(a.content));
  const bShoes = index.shoesBySlug.get(b.slug) ?? new Set(extractShoeSlugs(b.content));
  for (const s of aShoes) {
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
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
npx vitest run src/lib/__tests__/blog-related.test.ts
npx tsc --noEmit
```
기대: 12 passed · tsc 0건

- [ ] **Step 5: 커밋**

```bash
git add src/lib/blog/related.ts src/lib/__tests__/blog-related.test.ts
git commit -m "feat(blog): 관련글 관련도 점수 — IDF 태그·신발링크 + 카테고리 안전망"
```

---

### Task 2: `getRelatedPosts` 교체 + 커버리지 회귀 가드

**Files:**
- Modify: `src/lib/data/blog/index.ts`
- Modify: `src/lib/__tests__/blog-related.test.ts` (커버리지 가드 추가)

**Interfaces:**
- Consumes: `buildIndex`·`rankRelated`·`RelatedInput`(Task 1)
- Produces: 없음 — `getRelatedPosts`/`getRelatedPostsMeta`의 시그니처는 그대로다

- [ ] **Step 1: `getRelatedPosts` 내부 교체 + 인덱스 메모이즈**

`src/lib/data/blog/index.ts` 상단 import 를 바꾼다. 현재:

```ts
import { BlogPost, BlogPostMeta, BlogCardMeta, BlogCategory } from '@/types/blog';
import { blogPosts } from './posts';
```

아래로:

```ts
import { BlogPost, BlogPostMeta, BlogCardMeta, BlogCategory } from '@/types/blog';
import { blogPosts } from './posts';
import { buildIndex, rankRelated, type RelatedIndex } from '@/lib/blog/related';
```

그리고 `getRelatedPosts` 를 찾는다. 현재 코드는 이렇다(약 96~111행):

```ts
/**
 * 관련 포스트 가져오기 (같은 카테고리 또는 태그 공유)
 */
export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  return blogPosts
    .filter((post) => post.slug !== slug)
    .filter(
      (post) =>
        post.category === currentPost.category ||
        post.tags.some((tag) => currentPost.tags.includes(tag))
    )
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
```

아래로 교체한다.

```ts
/**
 * 관련도 인덱스 — 첫 호출 시 1회 구축해 메모이즈한다.
 *
 * 글 221편 × 후보 221편을 페이지마다 계산하면 SSG 빌드에서 약 1,000만 번의 비교가 된다.
 * IDF 테이블과 신발 링크 집합은 코퍼스가 안 변하는 한 동일하므로 한 번만 만든다.
 * `buildShoeLinkIndex()` 가 쓰는 것과 같은 패턴이다.
 *
 * ⚠️ SSG 서버에서만 호출된다. 'use client' 컴포넌트가 모듈 스코프에서 이걸 부르면
 *    풀 블로그 데이터가 클라이언트 번들에 실린다(이 리포에 실측 712KB 사례가 있다).
 */
let relatedIndex: RelatedIndex | null = null;

function getRelatedIndex(): RelatedIndex {
  if (!relatedIndex) relatedIndex = buildIndex(blogPosts);
  return relatedIndex;
}

/**
 * 관련 포스트 가져오기.
 *
 * 이전 구현은 `같은 카테고리 OR 태그 공유` 로 거른 뒤 날짜순으로만 뽑아서,
 * 같은 카테고리의 모든 글이 같은 최신 3편을 가리켰다(221편 중 27편만 노출).
 * 지금은 관련도 점수 순위다 — `src/lib/blog/related.ts` 참고.
 */
export function getRelatedPosts(slug: string, limit: number = 6): BlogPost[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  return rankRelated(currentPost, blogPosts, getRelatedIndex(), limit);
}
```

이어서 `getRelatedPostsMeta` 의 기본값도 6으로 바꾼다. 현재:

```ts
export function getRelatedPostsMeta(slug: string, limit: number = 3): BlogPostMeta[] {
```

→

```ts
export function getRelatedPostsMeta(slug: string, limit: number = 6): BlogPostMeta[] {
```

> `rankRelated` 가 제네릭(`<T extends RelatedInput>`)이라 `BlogPost[]` 를 넣으면 `BlogPost[]` 가
> 그대로 나온다 — **캐스트가 필요 없다.** `as BlogPost[]` 를 쓰고 싶어지면 제네릭이 안 먹은 것이니
> 시그니처를 다시 확인해라.

- [ ] **Step 2: 타입·테스트 확인**

```bash
npx tsc --noEmit && npx vitest run src/lib/__tests__/
```
기대: tsc 0건 · 기존 테스트 전부 통과

- [ ] **Step 3: 커버리지 회귀 가드 추가**

`src/lib/__tests__/blog-related.test.ts` 맨 아래에 붙인다. 이건 fixture 가 아니라 **실제 코퍼스 전체**에 대한 가드다.

```ts
import { getAllPosts, getRelatedPosts } from '@/lib/data/blog';

describe('전체 코퍼스 커버리지 (회귀 가드)', () => {
  const posts = getAllPosts();
  const shown = new Map<string, number>();
  let zeroRecommendation = 0;

  for (const p of posts) {
    const related = getRelatedPosts(p.slug, 6);
    if (related.length === 0) zeroRecommendation++;
    for (const r of related) shown.set(r.slug, (shown.get(r.slug) ?? 0) + 1);
  }

  const slots = [...shown.values()].sort((a, b) => b - a);
  const totalSlots = slots.reduce((a, b) => a + b, 0);
  const top10Share = slots.slice(0, 10).reduce((a, b) => a + b, 0) / totalSlots;
  const coverage = shown.size / posts.length;

  // 임계값은 목표치(98%/15%)가 아니라 여유값이다. 글이 늘면 수치가 자연히 흔들리므로
  // 정확한 값을 지키는 게 아니라 알고리즘이 다시 편중되는 것을 잡는 게 목적이다.
  it('추천에 노출되는 글이 전체의 80% 이상이다', () => {
    expect(coverage).toBeGreaterThanOrEqual(0.8);
  });

  it('상위 10편이 추천 슬롯의 30% 이하를 차지한다', () => {
    expect(top10Share).toBeLessThanOrEqual(0.3);
  });

  it('추천이 0개인 글이 없다', () => {
    expect(zeroRecommendation).toBe(0);
  });
});
```

- [ ] **Step 4: 가드가 실제로 통과하는지 + 개선 수치 확인**

```bash
npx vitest run src/lib/__tests__/blog-related.test.ts
```
기대: 15 passed. 커버리지 3건이 전부 통과해야 한다.

수치를 눈으로 확인하려면 임시로 `console.log` 를 넣어 돌려 보고 **확인 후 지운다**:
```
coverage ≈ 0.98 · top10Share ≈ 0.15 · zeroRecommendation = 0
```
개편 전 값은 `coverage 0.12` · `top10Share 0.96` 이었다.

- [ ] **Step 5: 빌드 시간 확인 (메모이즈가 도는지)**

```bash
set -o pipefail && time npm run build
```

빌드가 눈에 띄게 느려졌으면 메모이즈가 안 도는 것이다 — `getRelatedIndex()` 가 매번 재구축하고 있는지 확인한다. 빌드 시간을 보고서에 기록한다.

- [ ] **Step 6: 검증 체인**

```bash
set -o pipefail
npx tsc --noEmit && npm test && npm run lint && npm run validate && npm run build
```
기대: tsc 0 · 테스트 통과 · lint 0 error · validate 에러 0 · 빌드 성공

- [ ] **Step 7: 커밋**

```bash
git add src/lib/data/blog/index.ts src/lib/__tests__/blog-related.test.ts
git commit -m "feat(blog): 관련글을 관련도 순위로 교체 + 6개로 — 노출 27편→216편"
```

---

### Task 3: 브라우저 실측 + QA 문서

**Files:**
- Create: `docs/superpowers/design/qa-blog-related-posts.md`

코드가 아니라 **결과를 눈으로 확인하고 기준선을 남기는** 태스크다.

- [ ] **Step 1: 빌드 후 서버 띄우기**

```bash
set -o pipefail && npm run build && npx serve out -l 4321
```
`next start` 는 쓰지 않는다 — 이 프로젝트는 `output: export` 라 동작하지 않는다.

- [ ] **Step 2: 서로 다른 성격의 글 3편에서 관련글 확인**

브라우저로 아래 3개를 열어 하단 "관심 있을 만한 포스트"를 본다.

| 글 | 확인할 것 |
|---|---|
| `/blog/asics-gel-kayano-33-review` | 신발 리뷰 — 카야노·안정화 관련 글이 오는가 |
| `/blog/2026-mudo-run-gyeongju` | 대회 뉴스 — 대회 글이 오는가 (신발 리뷰가 아니라) |
| `/blog/wide-feet-running-shoes-korea` | 발볼 가이드 — 발볼·토박스 관련 글이 오는가 |

**세 페이지의 추천 목록이 서로 달라야 한다.** 겹치면 편중이 남은 것이다.

각 페이지에서:
```js
[...document.querySelectorAll('section h2')]
  .find(h => h.textContent.includes('관심 있을 만한'))
  ?.parentElement.querySelectorAll('article').length
// 기대: 6
```

- [ ] **Step 3: 6개가 두 줄로 떨어지는지 (레이아웃 회귀)**

1440 / 768 / 390 폭에서 관련글 섹션을 스크린샷한다.

| 폭 | 기대 |
|---|---|
| 1440 | 3열 × 2줄 |
| 768 | 2열 × 3줄 |
| 390 | 1열 × 6줄 |

```js
({ scrollW: document.documentElement.scrollWidth,
   clientW: document.documentElement.clientWidth,
   horizScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth })
```
기대: 전 폭에서 `horizScroll: false`

- [ ] **Step 4: 정적 HTML에 관련글 링크가 들어갔는지**

```bash
grep -o 'href="/blog/[^"]*"' out/blog/asics-gel-kayano-33-review.html | sort -u | wc -l
```
기대: 6개 이상 (본문 내부 링크 + 관련글 6개)

- [ ] **Step 5: 체크리스트 작성 후 커밋**

`docs/superpowers/design/qa-blog-related-posts.md` 에 기록한다. **개편 전/후 수치를 나란히** 남긴다 — 다음 사람의 회귀 판단 기준선이 된다.

문서에 반드시 넣을 것:
- 커버리지 수치 (전 27편/12%·상위10 96% → 후 216편/98%·상위10 15%)
- 3개 글의 실제 추천 목록 (서로 다른지)
- 폭별 레이아웃 결과
- 빌드 시간 (메모이즈 확인)
- **이 작업이 하지 않는 것**: 검색 유입을 늘리지 않는다. 효과는 GA의 세션당 페이지 수(현재 1.95)와 28일 조회 0인 글 편수(현재 63편)로 배포 2~4주 후에 확인한다

```bash
git add docs/superpowers/design/qa-blog-related-posts.md
git commit -m "qa(blog): 관련글 관련도 개편 실측 체크리스트"
```

---

## 완료 조건

1. 추천에 노출되는 글이 전체의 **80% 이상** (개편 전 12%)
2. 상위 10편이 추천 슬롯의 **30% 이하** (개편 전 96%)
3. 추천이 0개인 글이 **0편**
4. 관련글이 글마다 **6개** 나온다
5. 성격이 다른 글 3편의 추천 목록이 **서로 다르다**
6. 1440/768/390 에서 가로 스크롤이 없고 6개가 자연스럽게 줄바꿈된다
7. `getRelatedPosts`/`getRelatedPostsMeta` 시그니처가 안 바뀌어 호출처가 그대로 돈다
8. 빌드 시간이 유의미하게 늘지 않았다 (메모이즈 동작)
9. tsc 0 · test 통과 · lint 0 error · validate 에러 0 · build 성공

## 남는 것 (의도적으로 범위 밖)

- **신발 상세의 관련글** — 측정 결과 건강하다(노출 120편, 상위10 점유 32%, 관련글 0인 신발 2종). 없는 문제를 만들지 않는다
- `/blog` 인덱스 개편 — 28일 조회 125로 노출면이 작다. 별도 판단
- 태그 1144개를 통제 어휘 15~20개로 정제 — 별도 스펙
- `tips` 카테고리 7편 문제
- **이 작업은 검색 유입을 늘리지 않는다.** 이미 들어온 사람의 회유가 전부다
