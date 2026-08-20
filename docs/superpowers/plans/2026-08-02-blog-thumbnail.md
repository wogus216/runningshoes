# 블로그 썸네일 정합·스타일 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 네 표면에서 제각각 잘리던 블로그 썸네일의 비율을 원본(1200×630)으로 통일하고, 카드 배지가 이미지 킥커를 덮는 버그를 없앤 뒤, 트래픽 상위 30편을 잉크+시그널 종이톤으로 재생성한다.

**Architecture:** 1층(비율·배지)은 CSS/JSX 한 줄씩의 변경이라 재생성 없이 레거시 191장까지 즉시 정상화된다. 2층(스타일)은 HTML 템플릿 → 헤드리스 Chrome 스크린샷 → WebP 파이프라인을 스크립트로 만들어 32장을 일괄 생성한다. 텍스트는 기존 포스트의 `title`·`description`에서 파싱하고, 어색한 건 오버라이드 맵으로 손본다.

**Tech Stack:** Next.js 15.5 (SSG, `output: export`) · React 19.2 · TypeScript 5.4 · Tailwind + CSS Modules · sharp · 헤드리스 Google Chrome 150

## Global Constraints

이 섹션은 **모든 태스크에 암묵적으로 포함**된다.

- **작업 위치**: `main` 브랜치 메인 워크트리(리포 루트)
- **스펙**: `docs/superpowers/specs/2026-08-02-blog-thumbnail-design.md`
- **팔레트 토큰명** — 시안 이름이 아니라 **실제 `globals.css` 이름**을 쓴다. 미정의 `var()`는 조용히 무효가 되어 빌드·tsc·lint 어디서도 안 잡힌다:
  ```
  --primary #17150F (잉크)   --secondary #6E6A5E (본문 보조)   --border #D9D4C8 (선)
  --bg-warm #F7F4ED (종이)   --bg-warm-alt #EFEAE0            --surface #FFFFFF
  --accent #FF4D00 (시그널)  --accent-soft #FFE7DB            --signal-dark  --positive  --warning-dark
  ```
- **대비 규칙**: 소형 텍스트(18px 미만) 4.5:1. `--accent`(#FF4D00)는 밝은 배경 위 **소형 텍스트에 쓰지 말 것**(3.03). 소형 강조는 `--signal-dark`(4.79). 썸네일은 이미지라 자동 검사에 안 걸리므로 육안으로 확인한다
- **한글에 mono 금지** — `--mono`/`font-mono`는 날짜·수치·영문 라벨에만. 한글 라벨은 본문 서체
- **`aspect-[1200/630]`를 문자열로 통일한다** — `aspect-[1.905]`나 `aspect-[40/21]` 같은 변형을 쓰지 말 것. grep 한 번으로 전 표면을 확인할 수 있어야 한다
- **`git add`에 파일을 명시한다.** `-A`/`.`/`-a` 금지 — `tsconfig.tsbuildinfo`(빌드 산출물, git 추적 중)가 딸려 들어간다. 들어갔으면 `git checkout tsconfig.tsbuildinfo`
- **검증은 `set -o pipefail`과 함께 실행한다.** 과거 `npm run build | tail`이 실패 exit code를 삼켜 깨진 채 배포된 이력이 있다
- **in-article 광고 슬롯을 건드리지 않는다** — 상세 페이지 본문 분할 로직은 수익 동선이다
- **검증 체인**: `npx tsc --noEmit` → `npm test` → `npm run lint` → `npm run validate` → `set -o pipefail && npm run build`

## 파일 구조

**신규**

| 파일 | 책임 |
|---|---|
| `scripts/thumbnail/copy.ts` | 포스트 → 썸네일 문구(킥커·제목·부제) 파생 + 수동 오버라이드 맵 |
| `scripts/thumbnail/render.ts` | 문구 → HTML 생성 → 헤드리스 Chrome 스크린샷 → WebP 저장 |
| `scripts/thumbnail/card.css` | 템플릿 스타일 (종이톤 1200×630) |
| `docs/superpowers/design/qa-blog-thumbnail.md` | 실측 체크리스트 (Task 5) |

**수정**

| 파일 | 변경 |
|---|---|
| `src/components/blog/blog-card.tsx` | 비율 `16/9`→`1200/630`, 배지 오버레이 제거 → 텍스트 블록으로 이동 |
| `src/app/(detail)/blog/[slug]/page.tsx` | 히어로 비율 `21/9`→`1200/630`, 검은 그라디언트 제거 |
| `src/components/home/editorial-section.module.css` | `.leadImg`·`.leadBlank` 비율 `3/2`→`1200/630` |
| `public/images/blog/*.webp` | 32장 덮어쓰기 (Task 3·4) |

**검증 전략**: 이 프로젝트엔 RTL·jsdom이 없고 Vitest 유닛 테스트만 있다(`src/lib/__tests__/`). **문구 파싱은 순수 함수라 TDD로**, **비율·렌더는 빌드 + 브라우저 좌표 실측으로** 검증한다. 테스트 인프라 추가는 범위 밖이다(YAGNI).

---

### Task 1: 비율 통일 + 배지 이동

이 태스크만으로 배포 가능하다 — 자산을 안 건드리고 레거시 191장까지 즉시 정상화된다.

**Files:**
- Modify: `src/components/blog/blog-card.tsx`
- Modify: `src/app/(detail)/blog/[slug]/page.tsx`
- Modify: `src/components/home/editorial-section.module.css`

**Interfaces:**
- Consumes: `categoryLabels`(`@/types/blog`, 이미 존재 — `{guide:'가이드', review:'리뷰', news:'뉴스', tips:'팁'}`)
- Produces: 없음 (표면 변경만)

- [ ] **Step 1: 블로그 카드 — 비율 변경 + 배지 오버레이 제거**

`src/components/blog/blog-card.tsx`에서 이미지 블록을 찾는다. 현재:

```tsx
        {thumbnail ? (
          <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
            <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-[var(--accent)]" />
            <Image
              src={img(thumbnail)}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              unoptimized
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700 backdrop-blur">
              {categoryLabels[post.category]}
            </div>
          </div>
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200">
            <span className="text-4xl text-stone-400">
              {categoryLabels[post.category]}
            </span>
          </div>
        )}
```

아래로 교체한다. **배지 `<div>`를 통째로 지운다** — 썸네일 템플릿이 좌상단에 킥커 문구를 갖고 있어 정확히 그 자리를 덮고 있었다(`공급망 추적 · 국내 미보도` → `[뉴스]적 · 국내 미보도`).

```tsx
        {thumbnail ? (
          <div className="relative aspect-[1200/630] overflow-hidden bg-gray-100">
            <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-[var(--accent)]" />
            <Image
              src={img(thumbnail)}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              unoptimized
            />
          </div>
        ) : (
          <div className="flex aspect-[1200/630] items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200">
            <span className="text-4xl text-stone-400">
              {categoryLabels[post.category]}
            </span>
          </div>
        )}
```

상단 오렌지 바(`h-1.5 bg-[var(--accent)]`)는 **남긴다** — 이미지 위 요소지만 킥커가 있는 좌상단 텍스트 영역이 아니라 맨 위 1.5px 띠라 아무것도 가리지 않는다.

- [ ] **Step 2: 블로그 카드 — 카테고리를 텍스트 블록으로 이동**

같은 파일에서 날짜·읽기시간 줄을 찾는다. 현재:

```tsx
          <div className="mb-3 flex items-center justify-between gap-3 font-mono text-xs tabular-nums text-slate-500">
            <span>{publishDate}</span>
            <span>{post.readingTime}분 읽기</span>
          </div>
```

아래로 교체한다. 부모가 `font-mono`라 한글인 카테고리에는 `font-sans`를 명시해 되돌린다(한글에 mono 금지).

```tsx
          <div className="mb-3 flex items-center justify-between gap-3 font-mono text-xs tabular-nums text-slate-500">
            <span className="flex items-center gap-2">
              <span className="font-sans font-semibold text-[var(--signal-dark)]">
                {categoryLabels[post.category]}
              </span>
              <span aria-hidden="true">·</span>
              <span>{publishDate}</span>
            </span>
            <span>{post.readingTime}분 읽기</span>
          </div>
```

이러면 킥커가 없는 이미지 8장(Unsplash 4 + 신발 제품샷 4)에서도 카테고리가 정상 표기된다.

- [ ] **Step 3: 상세 히어로 — 비율 변경 + 검은 그라디언트 제거**

`src/app/(detail)/blog/[slug]/page.tsx`의 히어로 이미지 블록(약 227~238행)을 찾는다. 현재:

```tsx
        {post.thumbnail && (
          <div className="relative -mx-4 mb-10 aspect-[21/9] overflow-hidden rounded-[4px] sm:-mx-0">
            <img
              src={img(post.thumbnail)}
              alt={post.title}
              className="h-full w-full object-cover"
              style={{ margin: 0, borderRadius: '28px', boxShadow: 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-[4px]" />
          </div>
        )}
```

아래로 교체한다.

```tsx
        {post.thumbnail && (
          <div className="relative -mx-4 mb-10 aspect-[1200/630] overflow-hidden rounded-[4px] sm:-mx-0">
            <img
              src={img(post.thumbnail)}
              alt={post.title}
              className="h-full w-full object-cover"
              style={{ margin: 0, borderRadius: '28px', boxShadow: 'none' }}
            />
          </div>
        )}
```

**검은 그라디언트 `<div>`를 지우는 이유**: `21/9`(2.333)일 때는 세로 22.5%가 잘려 하단이 어차피 안 보였고, 그 위에 어둡게 덮어 대비를 만들던 장치였다. 비율이 맞아 전체가 보이는 지금은 종이톤 썸네일을 탁하게 만들 뿐이다. 레거시 다크 썸네일에도 하는 일이 없다.

`borderRadius: '28px'` 인라인 스타일과 컨테이너의 `rounded-[4px]`가 어긋나 있으나 **이번 변경 범위 밖이라 건드리지 않는다**(기존 불일치).

- [ ] **Step 4: 홈 에디토리얼 lead 비율 변경**

`src/components/home/editorial-section.module.css`에서 두 규칙을 찾아 `aspect-ratio`만 바꾼다. 현재:

```css
.leadImg {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  border: 1px solid var(--border);
}
/* 썸네일이 없는 글 — 비율만 지켜 자리를 잡는다(레이아웃이 흔들리지 않게) */
.leadBlank {
  width: 100%;
  aspect-ratio: 3/2;
  border: 1px solid var(--border);
  background: var(--bg-warm-alt);
}
```

두 곳의 `3/2`를 `1200/630`으로 바꾼다. **`.leadBlank`도 반드시 같이 바꾼다** — 썸네일 없는 글의 자리표시자라 비율이 어긋나면 그 카드만 높이가 튄다.

```css
.leadImg {
  width: 100%;
  aspect-ratio: 1200/630;
  object-fit: cover;
  border: 1px solid var(--border);
}
/* 썸네일이 없는 글 — 비율만 지켜 자리를 잡는다(레이아웃이 흔들리지 않게) */
.leadBlank {
  width: 100%;
  aspect-ratio: 1200/630;
  border: 1px solid var(--border);
  background: var(--bg-warm-alt);
}
```

홈은 엊그제 배포한 화면이라 Step 6에서 스크린샷으로 회귀를 확인한다.

- [ ] **Step 5: 전 표면에 다른 비율이 남아 있지 않은지 확인**

```bash
grep -rn 'aspect-\[16/9\]\|aspect-\[21/9\]\|aspect-ratio: 3/2' src/components/blog src/components/home "src/app/(detail)/blog"
```
기대: 출력 없음

```bash
grep -rn 'aspect-\[1200/630\]\|aspect-ratio: 1200/630' src/components/blog src/components/home "src/app/(detail)/blog"
```
기대: 5건 (카드 2 + 상세 1 + 홈 2)

- [ ] **Step 6: 빌드 후 좌표 실측 — 잘림이 0인가**

```bash
set -o pipefail && npx tsc --noEmit && npm run lint && npm run build
npx serve out -l 4321 &
sleep 3
```

Chrome DevTools MCP로 `http://localhost:4321/blog` 접속(폭 1440), 콘솔에서:

```js
[...document.querySelectorAll('article img')].slice(0, 6).map(i => {
  const b = i.getBoundingClientRect();
  return {
    natural: +(i.naturalWidth / i.naturalHeight).toFixed(3),
    box: +(b.width / b.height).toFixed(3),
    cropPct: +(((i.naturalWidth / i.naturalHeight) / (b.width / b.height) - 1) * 100).toFixed(1),
  };
});
```
기대: `cropPct`가 전부 `0` (±0.5 이내). 변경 전에는 `7.1`이었다.

같은 방식으로 `/blog/asics-gel-kayano-33-review`(상세, 변경 전 -22.5%)와 `/`(홈 lead, 변경 전 27.0%)도 확인한다. 홈은 `[...document.querySelectorAll('img')]` 중 lead 이미지를 잡는다.

이미지 위에 오버레이가 없는지도 확인한다:

```js
document.querySelectorAll('article .absolute.left-4').length  // 기대: 0
```

- [ ] **Step 7: 홈 회귀 스크린샷**

1440과 390 폭에서 홈 첫 화면을 스크린샷해 에디토리얼 섹션이 깨지지 않았는지 육안 확인한다. lead 이미지가 낮아져 텍스트가 위로 올라오는 건 의도된 변화다. 가로 스크롤이 생기면 실패다:

```js
document.documentElement.scrollWidth > document.documentElement.clientWidth  // 기대: false
```

- [ ] **Step 8: 커밋**

```bash
git add src/components/blog/blog-card.tsx "src/app/(detail)/blog/[slug]/page.tsx" src/components/home/editorial-section.module.css
git commit -m "fix(blog): 썸네일 비율을 원본 1200/630으로 통일 + 카드 배지가 킥커 덮는 문제 해소"
```

---

### Task 2: 썸네일 문구 파생 + 템플릿 렌더

**Files:**
- Create: `scripts/thumbnail/copy.ts`
- Create: `scripts/thumbnail/card.css`
- Create: `scripts/thumbnail/render.ts`
- Test: `src/lib/__tests__/thumbnail-copy.test.ts`

**Interfaces:**
- Produces:
  ```ts
  // scripts/thumbnail/copy.ts
  export type ThumbCopy = { kicker: string; title: string; subtitle: string };
  export function splitTitle(raw: string): { head: string; rest: string };
  export function deriveCopy(post: { title: string; category: string }): ThumbCopy;
  export const OVERRIDES: Record<string, Partial<ThumbCopy>>;
  ```
  `render.ts`는 `deriveCopy` 결과에 `OVERRIDES[slug]`를 얕게 덮어써 최종 문구를 만든다.

**배경**: 이 사이트의 블로그 제목은 `주제 | 후크 — 부연` 구조가 일관된다.
`아식스 젤 카야노 33 솔직 리뷰 | 13년 만의 구조 대변혁 — 부드러워졌지만...`
첫 구분자 앞을 제목으로, 그 다음 조각을 부제로 쓰면 대부분 그럴듯하다. 어색한 건 오버라이드로 손본다.

- [ ] **Step 1: 실패하는 테스트 작성**

```ts
// src/lib/__tests__/thumbnail-copy.test.ts
import { describe, it, expect } from 'vitest';
import { splitTitle, deriveCopy } from '../../../scripts/thumbnail/copy';

describe('splitTitle', () => {
  it('파이프를 첫 구분자로 쪼갠다', () => {
    expect(splitTitle('아식스 젤 카야노 33 솔직 리뷰 | 13년 만의 구조 대변혁 — 부드러워졌지만')).toEqual({
      head: '아식스 젤 카야노 33 솔직 리뷰',
      rest: '13년 만의 구조 대변혁',
    });
  });

  it('em dash가 먼저 오면 그걸 첫 구분자로 본다', () => {
    expect(splitTitle('리닝 적토끼 9 울트라 — "10만원대 카본급" 진짜일까? | 커뮤니티 난리 난')).toEqual({
      head: '리닝 적토끼 9 울트라',
      rest: '"10만원대 카본급" 진짜일까?',
    });
  });

  it('구분자가 없으면 전체가 head 이고 rest 는 빈 문자열', () => {
    expect(splitTitle('평발 러닝화 고르는 법')).toEqual({
      head: '평발 러닝화 고르는 법',
      rest: '',
    });
  });

  it('구분자가 하나뿐이면 뒤가 전부 rest', () => {
    expect(splitTitle('호카 클리프톤 프로 미리보기 | 7/9 글로벌 출시')).toEqual({
      head: '호카 클리프톤 프로 미리보기',
      rest: '7/9 글로벌 출시',
    });
  });
});

describe('deriveCopy', () => {
  it('킥커는 카테고리 한글 라벨이다', () => {
    const c = deriveCopy({ title: 'A | B — C', category: 'review' });
    expect(c.kicker).toBe('리뷰');
    expect(c.title).toBe('A');
    expect(c.subtitle).toBe('B');
  });

  it('모르는 카테고리는 빈 킥커로 두고 죽지 않는다', () => {
    expect(deriveCopy({ title: 'A | B', category: 'nope' }).kicker).toBe('');
  });

  it('부제가 없으면 빈 문자열이다 (템플릿이 줄을 비운다)', () => {
    expect(deriveCopy({ title: '평발 러닝화 고르는 법', category: 'guide' }).subtitle).toBe('');
  });
});
```

- [ ] **Step 2: 테스트가 실패하는지 확인**

```bash
npx vitest run src/lib/__tests__/thumbnail-copy.test.ts
```
기대: FAIL — `Failed to resolve import ".../scripts/thumbnail/copy"`

- [ ] **Step 3: 최소 구현**

```ts
// scripts/thumbnail/copy.ts

/**
 * 썸네일 문구 파생.
 *
 * 이 사이트의 블로그 제목은 `주제 | 후크 — 부연` 구조가 일관된다.
 * 첫 구분자 앞을 제목으로, 그 다음 조각을 부제로 쓴다.
 * 파싱이 어색한 글은 OVERRIDES 로 손으로 고친다 — 자동 파생은 초안일 뿐이다.
 */

export type ThumbCopy = { kicker: string; title: string; subtitle: string };

const CATEGORY_LABELS: Record<string, string> = {
  guide: '가이드',
  review: '리뷰',
  news: '뉴스',
  tips: '팁',
};

/** `|` 와 `—` 중 먼저 나오는 것을 첫 구분자로 삼는다. */
export function splitTitle(raw: string): { head: string; rest: string } {
  const parts = raw.split(/\s+[|—]\s+/);
  return {
    head: (parts[0] ?? '').trim(),
    rest: (parts[1] ?? '').trim(),
  };
}

export function deriveCopy(post: { title: string; category: string }): ThumbCopy {
  const { head, rest } = splitTitle(post.title);
  return {
    kicker: CATEGORY_LABELS[post.category] ?? '',
    title: head,
    subtitle: rest,
  };
}

/**
 * 자동 파생이 어색한 글의 수동 교정.
 * Task 3·4에서 육안 검수하며 채운다. 비어 있어도 파이프라인은 돈다.
 */
export const OVERRIDES: Record<string, Partial<ThumbCopy>> = {};
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
npx vitest run src/lib/__tests__/thumbnail-copy.test.ts
npx tsc --noEmit
```
기대: 7 passed · tsc 0건

- [ ] **Step 5: 템플릿 CSS 작성**

```css
/* scripts/thumbnail/card.css
 *
 * 1200×630 종이톤 썸네일. 값은 globals.css 팔레트와 같은 실제 hex 를 쓴다
 * (이 파일은 헤드리스 Chrome 에서 단독 렌더되므로 CSS 변수를 못 물려받는다).
 *
 * 밀도를 3단으로 줄였다 — 킥커 · 제목 · 부제.
 * 기존 템플릿의 데이터 3행과 각주는 카드 350px 에서 판독 불가한 질감이라 뺐다.
 */
@font-face {
  font-family: 'Pretendard';
  src: url('../../src/app/fonts/PretendardVariable.woff2') format('woff2-variations');
  font-weight: 45 920;
  font-display: block;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  width: 1200px;
  height: 630px;
  background: #F7F4ED;              /* --bg-warm 종이 */
  font-family: 'Pretendard', -apple-system, sans-serif;
  color: #17150F;                   /* --primary 잉크 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 86px;
  overflow: hidden;
}

/* 상단 시그널 띠 — 카드에서도 살아남는 유일한 색 요소 */
.bar {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 9px;
  background: #FF4D00;              /* --accent */
}

.kicker {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 30px;
}
/* 오렌지는 대시(그래픽)에만. 소형 텍스트에 #FF4D00 을 쓰면 대비 3.03 으로 미달한다 */
.kicker::before {
  content: '';
  width: 56px;
  height: 4px;
  background: #FF4D00;
  flex: none;
}

.title {
  font-size: 68px;
  font-weight: 800;
  line-height: 1.16;
  letter-spacing: -0.032em;
  word-break: keep-all;
  /* 2줄을 넘기면 잘라낸다 — 넘치면 부제가 화면 밖으로 밀린다 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.subtitle {
  margin-top: 26px;
  font-size: 31px;
  font-weight: 500;
  line-height: 1.45;
  letter-spacing: -0.018em;
  color: #6E6A5E;                   /* --secondary */
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
/* 부제가 빈 글에서는 자리를 차지하지 않는다 */
.subtitle:empty { display: none; }

.footer {
  position: absolute;
  left: 86px; right: 86px; bottom: 44px;
  display: flex;
  justify-content: flex-end;
  font-size: 23px;
  font-weight: 500;
  color: #6E6A5E;
  letter-spacing: 0.01em;
}
```

- [ ] **Step 6: 렌더 스크립트 작성**

```ts
// scripts/thumbnail/render.ts
/**
 * 썸네일 생성 — HTML → 헤드리스 Chrome 스크린샷 → WebP.
 *
 *   npx tsx scripts/thumbnail/render.ts <slug> [<slug> ...]
 *   npx tsx scripts/thumbnail/render.ts --dry <slug>     # HTML 만 만들고 멈춘다
 *
 * 헤드리스 Chrome 을 쓰는 이유: 한글 타이포를 정확히 그리는 가장 확실한 경로다.
 * sharp 의 SVG 렌더는 woff2 가변 폰트를 못 읽어 한글이 깨진다.
 * MCP 왕복 없이 셸에서 도는 스크립트라 32장을 한 번에 처리한다.
 */
import { execFileSync } from 'child_process';
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import sharp from 'sharp';
import { deriveCopy, OVERRIDES, type ThumbCopy } from './copy';

const ROOT = resolve(__dirname, '../..');
const POSTS_DIR = join(ROOT, 'src/lib/data/blog/posts');
const OUT_DIR = join(ROOT, 'public/images/blog');
const TMP = join(ROOT, '.thumb-tmp');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** 포스트 파일들에서 slug → {title, category} 를 긁는다. */
function loadPosts(): Map<string, { title: string; category: string }> {
  const map = new Map<string, { title: string; category: string }>();
  for (const f of readdirSync(POSTS_DIR).filter((n) => /^\d{4}-\d{2}\.ts$/.test(n))) {
    const txt = readFileSync(join(POSTS_DIR, f), 'utf8');
    const re = /slug:\s*'([^']+)'[\s\S]{0,600}?title:\s*'([^']*)'[\s\S]{0,600}?category:\s*'([^']+)'/g;
    let m;
    while ((m = re.exec(txt))) {
      if (!map.has(m[1])) map.set(m[1], { title: m[2], category: m[3] });
    }
  }
  return map;
}

function html(copy: ThumbCopy): string {
  return `<!doctype html><html lang="ko"><head><meta charset="utf-8">
<link rel="stylesheet" href="file://${join(__dirname, 'card.css')}"></head>
<body>
<div class="bar"></div>
<p class="kicker">${esc(copy.kicker)}</p>
<h1 class="title">${esc(copy.title)}</h1>
<p class="subtitle">${esc(copy.subtitle)}</p>
<div class="footer">allrunabout.com</div>
</body></html>`;
}

async function main() {
  const args = process.argv.slice(2);
  const dry = args.includes('--dry');
  const slugs = args.filter((a) => !a.startsWith('--'));
  if (!slugs.length) {
    console.error('사용법: npx tsx scripts/thumbnail/render.ts <slug> [<slug> ...]');
    process.exit(1);
  }
  if (!existsSync(CHROME)) {
    console.error(`❌ Chrome 없음: ${CHROME}`);
    process.exit(1);
  }

  const posts = loadPosts();
  mkdirSync(TMP, { recursive: true });

  for (const slug of slugs) {
    const post = posts.get(slug);
    if (!post) {
      console.error(`  ⚠️  ${slug}: 포스트를 못 찾음 — 건너뜀`);
      continue;
    }
    const copy: ThumbCopy = { ...deriveCopy(post), ...(OVERRIDES[slug] ?? {}) };
    const htmlPath = join(TMP, `${slug}.html`);
    writeFileSync(htmlPath, html(copy), 'utf8');

    console.log(`  ${slug}`);
    console.log(`    킥커: ${copy.kicker} / 제목: ${copy.title} / 부제: ${copy.subtitle || '(없음)'}`);
    if (dry) continue;

    const pngPath = join(TMP, `${slug}.png`);
    execFileSync(CHROME, [
      '--headless', '--disable-gpu', '--hide-scrollbars',
      `--screenshot=${pngPath}`,
      '--window-size=1200,630',
      `file://${htmlPath}`,
    ], { stdio: 'ignore' });

    const webpPath = join(OUT_DIR, `${slug}.webp`);
    await sharp(pngPath).webp({ quality: 90 }).toFile(webpPath);
    const kb = (readFileSync(webpPath).length / 1024).toFixed(0);
    console.log(`    → ${webpPath.replace(ROOT + '/', '')} (${kb} KB)`);
  }

  if (!dry) rmSync(TMP, { recursive: true, force: true });
}

main().catch((e) => { console.error(e); process.exit(1); });
```

- [ ] **Step 7: 문구 파생만 먼저 확인 (--dry)**

```bash
npx tsx scripts/thumbnail/render.ts --dry asics-gel-kayano-33-review nike-pegasus-41-vs-42-comparison hoka-clifton-pro-preview-2026
```
기대 출력 예:
```
  asics-gel-kayano-33-review
    킥커: 리뷰 / 제목: 아식스 젤 카야노 33 솔직 리뷰 / 부제: 13년 만의 구조 대변혁
```
킥커·제목·부제가 비거나 이상하면 여기서 `copy.ts`를 고친다. 이미지를 만들기 전에 문구부터 맞춘다.

- [ ] **Step 8: 1장만 실제 생성해 육안 확인**

```bash
cp public/images/blog/hoka-clifton-pro-preview-2026.webp /tmp/thumb-backup.webp
npx tsx scripts/thumbnail/render.ts hoka-clifton-pro-preview-2026
```

생성된 `public/images/blog/hoka-clifton-pro-preview-2026.webp`를 Read 도구로 열어 확인한다:

| 항목 | 기준 |
|---|---|
| 크기 | 1200×630 |
| 배경 | 종이톤 `#F7F4ED` (흰색이 아님) |
| 한글 | 깨지지 않고 Pretendard 로 렌더 |
| 제목 | 2줄 이내, 잘리지 않음 |
| 오렌지 | 상단 띠와 킥커 대시에만 (텍스트에 없음) |

폰트가 안 먹으면 `card.css`의 `@font-face` 경로를 절대 경로로 바꾼다. 실패 시 원복:
```bash
cp /tmp/thumb-backup.webp public/images/blog/hoka-clifton-pro-preview-2026.webp
```

- [ ] **Step 9: 커밋**

```bash
git add scripts/thumbnail/copy.ts scripts/thumbnail/card.css scripts/thumbnail/render.ts src/lib/__tests__/thumbnail-copy.test.ts public/images/blog/hoka-clifton-pro-preview-2026.webp
git commit -m "feat(blog): 잉크+시그널 썸네일 템플릿 + 생성 스크립트"
```

---

### Task 3: 상위 10편 생성 + 검수

트래픽 상위 10편이 블로그 조회의 **38.3%**를 덮는다. 먼저 10장을 만들어 검수하고, 문제가 없으면 Task 4에서 나머지를 돌린다.

**Files:**
- Modify: `scripts/thumbnail/copy.ts` (OVERRIDES 채움)
- Modify: `public/images/blog/*.webp` (10장)

**Interfaces:**
- Consumes: `render.ts`·`OVERRIDES`(Task 2)

- [ ] **Step 1: 백업**

```bash
mkdir -p /tmp/thumb-backup-t3
for s in asics-gel-kayano-33-review nike-pegasus-41-vs-42-comparison \
  li-ning-red-hare-9-ultra-budget-supertrainer asics-novablast-5-vs-6-comparison-2026 \
  li-ning-red-hare-9-lineup-2026 hoka-clifton-11-vs-10-comparison \
  new-balance-860-v14-vs-v15-comparison nike-pegasus-42-review \
  2026-mudo-run-gyeongju 2026-nike-alphafly-4-prototype; do
  cp "public/images/blog/$s.webp" /tmp/thumb-backup-t3/ 2>/dev/null || echo "  없음: $s"
done
ls /tmp/thumb-backup-t3 | wc -l
```

`hoka-clifton-pro-preview-2026`은 Task 2에서 이미 생성했으므로 이 목록에서 뺐다.

- [ ] **Step 2: 문구 먼저 확인 (--dry)**

```bash
npx tsx scripts/thumbnail/render.ts --dry \
  asics-gel-kayano-33-review nike-pegasus-41-vs-42-comparison \
  li-ning-red-hare-9-ultra-budget-supertrainer asics-novablast-5-vs-6-comparison-2026 \
  li-ning-red-hare-9-lineup-2026 hoka-clifton-11-vs-10-comparison \
  new-balance-860-v14-vs-v15-comparison nike-pegasus-42-review \
  2026-mudo-run-gyeongju 2026-nike-alphafly-4-prototype
```

출력된 10줄을 읽고 **어색한 것만** `copy.ts`의 `OVERRIDES`에 적는다. 판단 기준:
- 제목이 30자를 넘어 2줄에 안 들어갈 것 같으면 줄인다
- 부제가 `세대 비교`처럼 내용이 없으면 제목의 다음 조각으로 바꾼다
- 부제가 비었으면 그대로 둔다(템플릿이 줄을 없앤다)

예시 형식:
```ts
export const OVERRIDES: Record<string, Partial<ThumbCopy>> = {
  'asics-novablast-5-vs-6-comparison-2026': {
    subtitle: '전족 FF Turbo Squared로 뭐가 달라졌나',
  },
};
```

- [ ] **Step 3: 10장 생성**

```bash
npx tsx scripts/thumbnail/render.ts \
  asics-gel-kayano-33-review nike-pegasus-41-vs-42-comparison \
  li-ning-red-hare-9-ultra-budget-supertrainer asics-novablast-5-vs-6-comparison-2026 \
  li-ning-red-hare-9-lineup-2026 hoka-clifton-11-vs-10-comparison \
  new-balance-860-v14-vs-v15-comparison nike-pegasus-42-review \
  2026-mudo-run-gyeongju 2026-nike-alphafly-4-prototype
```

- [ ] **Step 4: 전량 육안 검수**

10장을 Read 도구로 하나씩 열어 확인한다. **한 장이라도 아래에 걸리면 그 slug 의 OVERRIDES 를 고치고 다시 생성한다.**

| 항목 | 기준 |
|---|---|
| 제목 잘림 | `…` 로 끝나지 않는다 (2줄 초과 시 `-webkit-line-clamp` 가 자른다) |
| 부제 잘림 | 위와 같음 |
| 한글 | 깨진 글자·네모 없음 |
| 크기 | 1200×630 |
| 파일 크기 | 30~90KB (종이톤 단색이라 작다. 200KB 넘으면 뭔가 잘못됐다) |

크기 일괄 확인:
```bash
for f in /tmp/thumb-backup-t3/*.webp; do
  s=$(basename $f); n="public/images/blog/$s"
  echo "$s  $(sips -g pixelWidth -g pixelHeight "$n" 2>/dev/null | awk '/pixelWidth/{w=$2}/pixelHeight/{h=$2}END{print w"x"h}')  $(du -k "$n" | cut -f1)KB"
done
```
기대: 전부 `1200x630`

- [ ] **Step 5: 빌드 + 카드 그리드 확인**

```bash
set -o pipefail && npm run build
npx serve out -l 4321 &
sleep 3
```

`http://localhost:4321/blog` 를 1440 폭으로 열어 스크린샷한다. 새 종이톤 카드와 레거시 다크 카드가 **섞여 있는 상태가 의도대로 보이는지** 확인한다(스펙 §4.3에서 수용한 절충). 새 카드에서 제목이 읽히면 통과다.

- [ ] **Step 6: 커밋**

```bash
git add scripts/thumbnail/copy.ts public/images/blog/asics-gel-kayano-33-review.webp \
  public/images/blog/nike-pegasus-41-vs-42-comparison.webp \
  public/images/blog/li-ning-red-hare-9-ultra-budget-supertrainer.webp \
  public/images/blog/asics-novablast-5-vs-6-comparison-2026.webp \
  public/images/blog/li-ning-red-hare-9-lineup-2026.webp \
  public/images/blog/hoka-clifton-11-vs-10-comparison.webp \
  public/images/blog/new-balance-860-v14-vs-v15-comparison.webp \
  public/images/blog/nike-pegasus-42-review.webp \
  public/images/blog/2026-mudo-run-gyeongju.webp \
  public/images/blog/2026-nike-alphafly-4-prototype.webp
git commit -m "feat(blog): 트래픽 상위 10편 썸네일 종이톤 재생성"
```

---

### Task 3B: 템플릿 개정 — 데이터 한 줄 복원 + 카드 테두리

Task 3 의 10장을 그리드에 놓고 보니 두 가지가 드러났다. **20장을 더 만들기 전에 템플릿을 고친다.**

1. **썸네일이 빈 공간으로 읽힌다** — 배경 `#F7F4ED` 가 카드·페이지 배경과 거의 같아 이미지 영역의 경계가 안 보인다
2. **제목이 카드 제목과 중복된다** — 썸네일이 "아식스 젤 카야노 33 솔직 리뷰", 바로 아래 `<h3>` 가 같은 문장. 카드에서 썸네일이 정보를 더하지 않는다

원인은 밀도 축소가 과했던 것이다. 기존 다크 템플릿의 데이터 3행은 **제목이 말하지 않는 것**을 담고 있었는데, 3단으로 줄이며 그 역할이 통째로 사라졌다. 3행을 되살리진 않되 **한 줄은 복원한다.**

**Files:**
- Modify: `scripts/thumbnail/card.css` (규칙선 + 데이터 줄)
- Modify: `scripts/thumbnail/copy.ts` (`ThumbCopy.data`)
- Modify: `scripts/thumbnail/render.ts` (템플릿에 data 주입)
- Modify: `src/components/blog/blog-card.tsx` (썸네일 하단 경계)
- Modify: `src/lib/__tests__/thumbnail-copy.test.ts` (data 기본값)
- Modify: `public/images/blog/*.webp` (Task 3 의 10장 + Task 2 의 1장 = 11장 재생성)

**Interfaces:**
- Produces:
  ```ts
  export type ThumbCopy = { kicker: string; title: string; subtitle: string; data: string };
  ```
  `deriveCopy` 는 `data: ''` 를 기본값으로 돌려준다 — **자동 파생하지 않는다.** 값은 `OVERRIDES` 로만 들어온다.

#### ⛔ 숫자 출처 규칙 (이 태스크의 최우선 제약)

**데이터 줄의 수치를 지어내면 안 된다.** 이 사이트의 유일한 차별점이 데이터 검증이고, 썸네일은 검색·공유에서 가장 먼저 보이는 표면이다. 틀린 숫자가 여기 박히면 신뢰도가 통째로 무너진다.

허용되는 출처는 **둘뿐**이다:

1. **그 글의 본문(`content`)에 실제로 적힌 수치** — 글을 열어 확인한 것
2. **신발 DB(`src/lib/data/shoes/`)의 검증된 값** — `specs.weight`, `biomechanics.stackHeight`, `detailedSpecs` 등

**둘 중 어디에도 없으면 `data` 를 비운다.** 템플릿이 빈 줄을 자동으로 없앤다(`:empty { display: none }`). 비어 있는 게 틀린 것보다 낫다.

보고서에 **각 수치가 어디서 왔는지 파일·근거를 적어라.** 출처를 못 적는 수치는 넣지 마라.

- [ ] **Step 1: 타입에 `data` 추가**

`scripts/thumbnail/copy.ts` 의 `ThumbCopy` 와 `deriveCopy` 를 고친다.

```ts
export type ThumbCopy = { kicker: string; title: string; subtitle: string; data: string };
```

`deriveCopy` 의 반환에 `data: ''` 를 더한다. **제목·설명에서 숫자를 긁어오려 하지 마라** — 문맥 없는 숫자는 틀리기 쉽다. 오직 `OVERRIDES` 로만 채운다.

- [ ] **Step 2: 기존 테스트를 새 타입에 맞춘다**

`src/lib/__tests__/thumbnail-copy.test.ts` 의 `deriveCopy` 케이스에 `data` 기본값 단언을 더한다.

```ts
  it('data 는 자동 파생하지 않는다 — 항상 빈 문자열로 시작한다', () => {
    expect(deriveCopy({ title: '아식스 젤 카야노 33 리뷰 | 258g', category: 'review' }).data).toBe('');
  });
```

제목에 숫자가 있어도 안 긁어온다는 걸 못 박는 테스트다.

```bash
npx vitest run src/lib/__tests__/
```
기대: 새 케이스 포함 전부 통과

- [ ] **Step 3: 템플릿에 규칙선 + 데이터 줄**

`scripts/thumbnail/card.css` 의 `.subtitle:empty { display: none; }` 다음에 더한다.

```css
/* 데이터 한 줄 — 제목이 말하지 않는 것을 담는 자리.
   3단으로 줄였더니 카드에서 썸네일이 제목만 반복하게 돼 한 줄만 되살렸다.
   값이 없으면 규칙선까지 통째로 사라진다(빈 줄이 남으면 레이아웃이 어색하다). */
.data {
  margin-top: 34px;
  padding-top: 26px;
  border-top: 1px solid #D9D4C8;    /* --border */
  font-size: 27px;
  font-weight: 600;
  letter-spacing: -0.012em;
  color: #17150F;                   /* --primary — 수치는 잉크로, 부제보다 진하게 */
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.data:empty { display: none; }
```

- [ ] **Step 4: 렌더가 data 를 넣도록**

`scripts/thumbnail/render.ts` 의 `html()` 에서 `.subtitle` 다음 줄에 더한다.

```
<p class="data">${esc(copy.data)}</p>
```

- [ ] **Step 5: 카드 썸네일에 경계 추가**

`src/components/blog/blog-card.tsx` 의 썸네일 wrapper 에 하단 경계를 준다. 현재:

```tsx
          <div className="relative aspect-[1200/630] overflow-hidden bg-gray-100">
```

로 바꾼다:

```tsx
          <div className="relative aspect-[1200/630] overflow-hidden border-b border-border bg-gray-100">
```

썸네일 없는 폴백 `<div>` 에도 같은 `border-b border-border` 를 더한다. 종이톤 썸네일이 카드 본문으로 흘러 들어가 보이던 문제를 이 한 줄이 끊는다.

- [ ] **Step 6: 데이터 줄 작성 — 11편**

대상은 Task 2·3 이 만든 11장이다.

```
hoka-clifton-pro-preview-2026
asics-gel-kayano-33-review
nike-pegasus-41-vs-42-comparison
li-ning-red-hare-9-ultra-budget-supertrainer
asics-novablast-5-vs-6-comparison-2026
li-ning-red-hare-9-lineup-2026
hoka-clifton-11-vs-10-comparison
new-balance-860-v14-vs-v15-comparison
nike-pegasus-42-review
2026-mudo-run-gyeongju
2026-nike-alphafly-4-prototype
```

각 글에 대해:

1. 글 본문을 연다 — `grep -rn "slug: '<slug>'" src/lib/data/blog/posts/` 로 위치를 찾고 그 포스트의 `content` 를 읽는다
2. 신발 글이면 신발 DB 도 본다 — `grep -rn "slug: '<신발slug>'" src/lib/data/shoes/`
3. **제목이 말하지 않는 수치 2~4개**를 골라 가운뎃점으로 잇는다

좋은 예 / 나쁜 예:

| | 예 |
|---|---|
| ✅ 좋음 | `SA 152 · 힐 39mm · 258g` — 제목엔 없는 실측 |
| ✅ 좋음 | `179,000원 · 9월 19일 · 선착순 3,000명` — 대회 글 |
| ❌ 나쁨 | `아식스 · 안정화` — 제목·킥커와 중복 |
| ❌ 나쁨 | `역대급 쿠셔닝` — 수치가 아니라 수사 |
| ❌ 나쁨 | (출처를 못 찾아 그럴듯하게 지어낸 것) — **금지** |

**한 줄에 안 들어가면 줄여라.** `white-space: nowrap` + `text-overflow: ellipsis` 라 넘치면 `…` 로 잘린다. 잘린 채로 두지 마라.

출처를 못 찾은 글은 `data` 를 비우고 **보고서에 왜 비웠는지 적어라.** 11편 중 몇 편이 비어도 된다.

- [ ] **Step 7: 11장 재생성 + 육안 검수**

```bash
mkdir -p /tmp/thumb-backup-t3b
SLUGS=(hoka-clifton-pro-preview-2026 asics-gel-kayano-33-review nike-pegasus-41-vs-42-comparison
li-ning-red-hare-9-ultra-budget-supertrainer asics-novablast-5-vs-6-comparison-2026
li-ning-red-hare-9-lineup-2026 hoka-clifton-11-vs-10-comparison new-balance-860-v14-vs-v15-comparison
nike-pegasus-42-review 2026-mudo-run-gyeongju 2026-nike-alphafly-4-prototype)
for s in "${SLUGS[@]}"; do cp "public/images/blog/$s.webp" /tmp/thumb-backup-t3b/; done

npx tsx scripts/thumbnail/render.ts "${SLUGS[@]}"
```

> ⚠️ 이 셸은 zsh 다. 따옴표 없는 `$VAR` 는 단어 분리되지 않으니 반드시 `"${SLUGS[@]}"` 로 전개한다.

**11장을 Read 도구로 하나씩 열어** 확인한다:

| 항목 | 기준 |
|---|---|
| 데이터 줄 | `…` 로 잘리지 않음 |
| 규칙선 | data 가 있는 글에만 보임 |
| data 없는 글 | 규칙선까지 통째로 사라짐 (빈 줄 없음) |
| 크기 | 1200×630 |

- [ ] **Step 8: 그리드 실측 — 경계가 생겼는가**

```bash
set -o pipefail && npm run build && npx serve out -l 4321 &
```

`http://localhost:4321/blog` 에서 새 스타일 카드를 찾아 스크린샷한다. **다크 카드 옆에서 종이톤 카드가 하나의 이미지 블록으로 읽히는지**가 이 태스크의 합격 기준이다. Task 3 이전 스크린샷과 나란히 비교해 판단한다.

- [ ] **Step 9: 커밋**

```bash
git add scripts/thumbnail/card.css scripts/thumbnail/copy.ts scripts/thumbnail/render.ts \
  src/components/blog/blog-card.tsx src/lib/__tests__/thumbnail-copy.test.ts
git add public/images/blog/hoka-clifton-pro-preview-2026.webp public/images/blog/asics-gel-kayano-33-review.webp \
  public/images/blog/nike-pegasus-41-vs-42-comparison.webp public/images/blog/li-ning-red-hare-9-ultra-budget-supertrainer.webp \
  public/images/blog/asics-novablast-5-vs-6-comparison-2026.webp public/images/blog/li-ning-red-hare-9-lineup-2026.webp \
  public/images/blog/hoka-clifton-11-vs-10-comparison.webp public/images/blog/new-balance-860-v14-vs-v15-comparison.webp \
  public/images/blog/nike-pegasus-42-review.webp public/images/blog/2026-mudo-run-gyeongju.webp \
  public/images/blog/2026-nike-alphafly-4-prototype.webp
git status --short   # tsconfig.tsbuildinfo 가 스테이징됐으면 git restore --staged 로 뺀다
git commit -m "feat(blog): 썸네일에 데이터 한 줄 복원 + 카드 썸네일 경계"
```

---

### Task 4: 나머지 19편 + 비율 이탈 5건

**Files:**
- Modify: `scripts/thumbnail/copy.ts` (OVERRIDES 추가)
- Modify: `public/images/blog/*.webp` (최대 24장)
- Modify: `src/lib/data/blog/posts/*.ts` (Unsplash 항목이 대상에 들면 경로 교체)

**Interfaces:**
- Consumes: `render.ts`·`OVERRIDES`(Task 2)

- [ ] **Step 1: 대상 확정**

GA 상위 12~30위 **19편**. (1~11위는 Task 2·3에서 끝났다 — Task 2가 6위 `hoka-clifton-pro-preview-2026`, Task 3이 나머지 10편.)

```
puma-running-shoes-lineup-tier-guide-2026
puma-deviate-nitro-3-vs-4-comparison
new-balance-sc-rebel-preview-2026
stability-shoes-self-diagnosis-fit-guide-2026
brooks-ghost-max-4-hyperion-elite-6-preview-2026
wide-feet-running-shoes-korea
asics-running-shoes-lineup-tier-guide-2026
new-balance-running-shoes-lineup-tier-guide-2026
2026-hyundai-forest-run-september
hot-weather-summer-running-safety-guide-korea
nsm-norwegian-singles-method-training
nike-vaporfly-4-vs-alphafly-3-comparison
running-shoe-trends-2026-eva-replacement
running-shoes-recommend-by-price-2026
tokyo-marathon-2027-registration-guide
adidas-running-shoes-lineup-tier-guide-2026
nike-pegasus-42-vs-asics-novablast-6-daily-2026
plantar-fasciitis-insoles-guide-2026
mizuno-neo-vista-3-review-2026
```

비율 이탈 6건 중 아직 안 고쳐진 것 — 파일명에서 slug 를 얻는다:

| 파일 | 실제 크기 | 비율 |
|---|---|---|
| `2026-2027-dongma-schedule-photo.webp` | 800×1067 | **0.750 (세로형)** |
| `2026-mudo-run-coupang-play.webp` | 548×783 | **0.700 (세로형)** |
| `2026-gyeongpo-gangneung-marathon.webp` | 1200×800 | 1.500 |
| `2026-icebucket-run-seoul-photo.webp` | 900×628 | 1.433 |
| `running-shoe-terminology-guide.webp` | 800×500 | 1.600 |

`li-ning-red-hare-9-lineup-2026.webp`(1200×600, 2.000)는 Task 3에서 이미 재생성돼 해소됐다.

이 5개의 slug 가 실제로 존재하는지 먼저 확인한다(파일명 ≠ slug 인 경우가 있다):

```bash
for f in 2026-2027-dongma-schedule-photo 2026-mudo-run-coupang-play \
  2026-gyeongpo-gangneung-marathon 2026-icebucket-run-seoul-photo running-shoe-terminology-guide; do
  hit=$(grep -rl "thumbnail: '/images/blog/$f.webp'" src/lib/data/blog/posts/ | head -1)
  slug=$(grep -B 30 "thumbnail: '/images/blog/$f.webp'" $hit 2>/dev/null | grep "slug:" | tail -1 | sed "s/.*slug: '//;s/'.*//")
  echo "$f → slug: ${slug:-못찾음}"
done
```

출력된 slug 를 대상 목록에 더한다. **`--dry` 로 확인한 뒤 생성한다.**

- [ ] **Step 2: 백업 후 --dry 로 문구 확인**

Step 1 에서 찾은 이탈 5건의 slug 를 아래 `EXTRA` 에 채운 뒤 실행한다.

> ⚠️ **이 셸은 zsh 다.** 따옴표 없는 `$VAR` 는 **단어 분리되지 않는다** — `$SLUGS` 로 넘기면
> 30개 slug 가 통째로 인자 하나가 되어 "포스트를 못 찾음" 한 줄만 뜬다(실제로 겪었다).
> **반드시 배열로 선언하고 `"${SLUGS[@]}"` 로 전개한다.**

```bash
SLUGS=(puma-running-shoes-lineup-tier-guide-2026 puma-deviate-nitro-3-vs-4-comparison
new-balance-sc-rebel-preview-2026 stability-shoes-self-diagnosis-fit-guide-2026
brooks-ghost-max-4-hyperion-elite-6-preview-2026 wide-feet-running-shoes-korea
asics-running-shoes-lineup-tier-guide-2026 new-balance-running-shoes-lineup-tier-guide-2026
2026-hyundai-forest-run-september hot-weather-summer-running-safety-guide-korea
nsm-norwegian-singles-method-training nike-vaporfly-4-vs-alphafly-3-comparison
running-shoe-trends-2026-eva-replacement running-shoes-recommend-by-price-2026
tokyo-marathon-2027-registration-guide adidas-running-shoes-lineup-tier-guide-2026
nike-pegasus-42-vs-asics-novablast-6-daily-2026 plantar-fasciitis-insoles-guide-2026
mizuno-neo-vista-3-review-2026)

EXTRA=()   # ← Step 1 이 출력한 이탈 5건의 slug 를 배열 원소로 넣는다

ALL=("${SLUGS[@]}" "${EXTRA[@]}")
echo "대상 ${#ALL[@]}편"

mkdir -p /tmp/thumb-backup-t4
for s in "${ALL[@]}"; do cp "public/images/blog/$s.webp" /tmp/thumb-backup-t4/ 2>/dev/null; done
ls /tmp/thumb-backup-t4 | wc -l
```

```bash
npx tsx scripts/thumbnail/render.ts --dry "${ALL[@]}"
```

Task 3 Step 2 와 같은 기준으로 어색한 문구를 `OVERRIDES` 에 적는다.

**그리고 Task 3B 가 되살린 `data` 한 줄도 여기서 함께 채운다.** 규칙은 Task 3B 와 동일하다:

- 허용 출처는 **글 본문(`content`)에 실제로 적힌 수치** 또는 **신발 DB(`src/lib/data/shoes/`)의 검증값** 둘뿐이다
- **둘 다 없으면 비운다.** 템플릿이 빈 줄과 규칙선을 통째로 없앤다. 비어 있는 게 틀린 것보다 낫다
- **수치를 지어내면 안 된다.** 보고서에 각 수치의 출처를 적어라 — 못 적는 수치는 넣지 마라
- 제목·킥커와 중복되는 값(브랜드명·카테고리)은 데이터가 아니다. 제목이 **말하지 않는** 것을 담아라

- [ ] **Step 3: 생성 + 검수**

```bash
npx tsx scripts/thumbnail/render.ts "${ALL[@]}"
```

Task 3 Step 4 와 같은 기준으로 전량 육안 검수한다. 비율 이탈 5건은 **1200×630이 됐는지 반드시 확인한다** — 이게 이 태스크의 핵심이다.

```bash
for f in public/images/blog/*.webp; do
  sips -g pixelWidth -g pixelHeight "$f" 2>/dev/null | awk -v n="$(basename $f)" '/pixelWidth/{w=$2}/pixelHeight/{h=$2}END{r=w/h; if(r<1.9||r>1.91) printf "  %.3f  %s (%dx%d)\n", r, n, w, h}'
done
```
기대: 출력 없음 (전 썸네일이 1.905)

- [ ] **Step 4: Unsplash 경로 교체 (해당하는 경우에만)**

대상 slug 중 `thumbnail` 이 `https://images.unsplash.com/...` 인 것이 있으면, 로컬 경로로 바꾼다:

```bash
grep -rn "thumbnail: 'https://images.unsplash.com" src/lib/data/blog/posts/
```

해당 항목을 `thumbnail: '/images/blog/<slug>.webp'` 로 Edit 한다. 없으면 이 스텝을 건너뛴다.

- [ ] **Step 5: 검증 체인**

```bash
set -o pipefail
npx tsc --noEmit && npm test && npm run lint && npm run validate && npm run build
```
기대: tsc 0 · 테스트 통과 · lint 0 error · validate 에러 0 · 빌드 성공

- [ ] **Step 6: 커밋**

```bash
git add scripts/thumbnail/copy.ts src/lib/data/blog/posts/ public/images/blog/
git status --short   # tsconfig.tsbuildinfo 가 스테이징됐으면 git restore --staged 로 뺀다
git commit -m "feat(blog): 상위 트래픽 썸네일 재생성 완료 + 비율 이탈 6건 교정"
```

> ⚠️ 이 커밋만 `public/images/blog/` 디렉토리 단위 add 를 허용한다(파일이 20개 이상이라). `git status --short` 로 `tsconfig.tsbuildinfo` 가 안 섞였는지 **반드시 눈으로 확인**한 뒤 커밋한다.

---

### Task 5: 브라우저 실측 검증

**Files:**
- Create: `docs/superpowers/design/qa-blog-thumbnail.md`

스펙 §6 의 검증 기준을 실제 빌드 결과에 대해 확인한다.

- [ ] **Step 1: 빌드 후 서버 띄우기**

```bash
set -o pipefail && npm run build && npx serve out -l 4321
```
`next start` 는 쓰지 않는다 — 이 프로젝트는 `output: export` 라 동작하지 않는다.

- [ ] **Step 2: 네 표면에서 잘림 0 확인**

Chrome DevTools MCP 로 각 URL 을 열고 아래를 실행한다.

```js
// 공통 — 잘림률 계산
const crop = (sel) => [...document.querySelectorAll(sel)].slice(0, 6).map(i => {
  const b = i.getBoundingClientRect();
  return {
    src: i.currentSrc?.split('/').pop()?.slice(0, 36),
    natural: +(i.naturalWidth / i.naturalHeight).toFixed(3),
    box: +(b.width / b.height).toFixed(3),
    cropPct: +(((i.naturalWidth / i.naturalHeight) / (b.width / b.height) - 1) * 100).toFixed(1),
  };
});
```

| URL | 선택자 | 변경 전 | 기대 |
|---|---|---|---|
| `/blog` | `article img` | +7.1% | **0.0** |
| `/blog/asics-gel-kayano-33-review` | `img[alt]` (히어로) | -22.5% | **0.0** |
| `/` (홈) | `img` 중 lead | +27.0% | **0.0** |

- [ ] **Step 3: 배지 오버레이가 사라졌는지**

`/blog` 에서:
```js
document.querySelectorAll('article .absolute.left-4').length   // 기대: 0
```

그리고 카드 텍스트 블록에 카테고리가 있는지 육안 확인한다 — `가이드 · 2026년 7월 28일` 형태.

킥커가 없는 이미지에서도 카테고리가 보이는지 확인한다:
```js
[...document.querySelectorAll('article')].slice(0, 12)
  .map(a => a.innerText.split('\n')[0])   // 기대: 전부 카테고리로 시작
```

- [ ] **Step 4: 폭별 실측**

1440 / 768 / 390 / 360 에서 `/blog` · `/` · 상세 한 곳을 확인한다.

```js
({ scrollW: document.documentElement.scrollWidth,
   clientW: document.documentElement.clientWidth,
   horizScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth })
```
기대: 전 폭에서 `horizScroll: false`

360 폭에서 새 썸네일의 **제목이 읽히는지** 스크린샷으로 육안 확인한다. 이게 밀도를 3단으로 줄인 이유다.

- [ ] **Step 5: 홈 회귀**

홈 에디토리얼 섹션을 1440·390 에서 스크린샷한다. lead 이미지가 낮아져 텍스트가 위로 올라오는 건 의도된 변화다. 레이아웃이 깨지거나 빈 공간이 생기면 실패다.

- [ ] **Step 6: 체크리스트 작성 후 커밋**

`docs/superpowers/design/qa-blog-thumbnail.md` 에 위 결과를 표로 기록한다. 변경 전/후 수치를 나란히 남긴다 — 다음 사람이 회귀를 판단할 기준선이 된다.

```bash
git add docs/superpowers/design/qa-blog-thumbnail.md
git commit -m "qa(blog): 썸네일 정합·스타일 실측 체크리스트"
```

---

## 완료 조건

1. `/blog` 카드에서 썸네일 잘림 **0%** (변경 전 +7.1%)
2. 상세 히어로에서 잘림 **0%** (변경 전 -22.5%)
3. 홈 에디토리얼 lead 에서 잘림 **0%** (변경 전 +27.0%)
4. 이미지 위 카테고리 오버레이가 **없다** — 텍스트 블록으로 이동
5. 킥커가 없는 이미지 8장(Unsplash 4 + 제품샷 4)에서도 카테고리가 표기된다
6. 전 썸네일의 비율이 **1.905** — 세로형 0건
7. 트래픽 상위 30편이 종이톤 새 템플릿 (조회의 64.5% 커버)
8. 새 썸네일이 360px 폭 카드에서 제목이 읽힌다
8b. **썸네일이 카드 그리드에서 하나의 이미지 블록으로 읽힌다** — 경계가 보이고, 제목만 반복하지 않는다
8c. **데이터 줄의 모든 수치에 출처가 있다** — 글 본문 또는 신발 DB. 지어낸 수치 0건
9. 홈 레이아웃이 lead 비율 변경 후에도 깨지지 않는다
10. 1440/768/390/360 에서 가로 스크롤이 없다
11. tsc 0 · test 통과 · lint 0 error · validate 에러 0 · build 성공

## 남는 것 (의도적으로 범위 밖)

- **레거시 191장은 다크 톤으로 남는다.** 그리드에 두 스타일이 공존한다 — 스펙 §4.3 에서 수용한 절충이며, 상위 30편이 조회의 64.5% 라 사용자가 보는 비중은 새 스타일이 크다
- 상위 30편에 안 든 Unsplash 항목은 외부 의존이 남는다
- 탐색 축 재설계(서브프로젝트 2) · 상세 페이지 개편(3) 은 별도 스펙이다
- **이 작업은 검색 유입을 늘리지 않는다.** 구글 웹 검색 결과에 썸네일은 안 나온다. 이미 들어온 사용자의 경험과 OG 공유 품질을 고치는 작업이다
