# Work Plan: "marathon" Blog Category Addition

## Context

### Original Request
Add marathon-related content to allrunabout.com for Korean runners, covering race information, preparation guides, and marathon culture.

### Architect Decision: Pure Blog Category (No /marathon route)

After Critic review of the original plan, the Architect recommended against creating a separate `/marathon` landing page. The approach is to add `marathon` as a new blog category only. Rationale:

1. **Only 10 existing posts + 2-3 marathon posts = too few to justify a separate section**
2. **Back links and breadcrumbs in blog detail pages hardcode `/blog`** -- a separate `/marathon` route would create broken/confusing UX
3. **`BlogList` component auto-renders category tabs from `categoryOrder`** -- zero component work needed
4. **`getPostsByCategory('marathon')` already works generically** -- zero helper function work needed
5. **Mobile nav already has 5 buttons** -- a 6th will overflow on small screens (320px devices)
6. **SEO: 2-3 posts have no meaningful advantage from a separate URL**

### Research Findings (Verified from Source Files)

**Type system** (`src/types/blog.ts`):
- Line 1: `BlogCategory = 'guide' | 'review' | 'news' | 'tips'` -- add `'marathon'` here
- Lines 19-24: `categoryLabels` record -- add `marathon: '마라톤'`
- Line 26: `categoryOrder` array -- add `'marathon'` at end

**BlogList component** (`src/components/blog/blog-list.tsx`):
- Line 37: Iterates `categoryOrder.map((category) => ...)` to render tabs
- Adding to `categoryOrder` automatically creates a "마라톤" tab -- no component changes needed

**Data helpers** (`src/lib/data/blog/index.ts`):
- Line 33: `getPostsByCategory(category: BlogCategory)` -- already generic, works with any valid BlogCategory
- No new helper functions needed

**Existing posts** (`src/lib/data/blog/posts.ts`):
- 10 posts total: 6 guide, 2 review, 1 news, 1 tips
- Structure: `BlogPost` objects with `id, slug, title, description, content (HTML), author, publishedAt, category, tags, readingTime, featured, thumbnail`
- Author for all posts: `산초 에디터`

---

## Work Objectives

### Core Objective
Add `marathon` as a new blog category and create 2-3 high-quality marathon seed posts that appear under the new "마라톤" tab on the existing `/blog` page.

### Deliverables
1. `marathon` added to `BlogCategory` union type, `categoryLabels`, and `categoryOrder`
2. 2-3 marathon-category blog posts with substantive content
3. Build passes with zero errors

### Definition of Done
- `npm run build` succeeds with zero errors
- `/blog` page shows a "마라톤" tab that filters to marathon-category posts
- Individual marathon posts accessible at `/blog/{slug}` with proper SEO (JSON-LD, breadcrumbs, canonical all work automatically)
- Marathon posts appear in "전체" (all) view on `/blog`
- Sitemap automatically includes new `/blog/{slug}` pages (no config changes needed)

---

## Must Have / Must NOT Have (Guardrails)

### Must Have
- Works with SSG (no runtime changes)
- All content in Korean, written in the `산초 에디터` voice
- Each post minimum 2,000 words of substantive content (matching existing post quality)
- Proper `publishedAt` dates (use `2026-02-25` for today)
- Each post must have a valid `thumbnail` URL (Unsplash or local image)
- `tags` must include `'마라톤'` for cross-post discovery via `getRelatedPosts()`

### Must NOT Have
- **No new routes** (no `/marathon` page, no new `page.tsx` files)
- **No new components** (no new `.tsx` files)
- **No nav/header changes** (no modification to `header.tsx`)
- **No footer changes** (no modification to `footer.tsx`)
- **No new data helper functions** (existing `getPostsByCategory` suffices)
- **No new npm dependencies**
- **No sitemap config changes** (next-sitemap auto-discovers blog posts)

---

## Editorial Guidelines: Category Boundaries

### When to use `marathon` vs `news` vs `guide`

| Category | Content Type | Examples | Time Sensitivity |
|----------|-------------|---------|-----------------|
| `marathon` | Race-specific content: course analysis, race prep, race calendars, race-day tips, specific marathon event coverage | "2026 서울마라톤 코스 분석", "첫 마라톤 완주 가이드", "상반기 마라톤 캘린더" | Can be evergreen (prep guides) or seasonal (calendars, race coverage) |
| `news` | Industry/technology trends, product launches, brand announcements | "2026 러닝화 트렌드" (existing), "Nike 신제품 발표" | Time-sensitive, may become outdated |
| `guide` | How-to educational content not tied to a specific race or event | "발볼 넓은 러닝화 추천", "내전 유형별 가이드", "무릎 통증 러닝화 선택법" | Evergreen, updated periodically |

### Key distinction: `marathon` vs `guide`
- If the content is **about running a specific race or races in general** (training plans, race-day nutrition, what to wear, course tips) --> `marathon`
- If the content is **about running shoes, technique, or general knowledge** regardless of racing --> `guide`

### SSG and Stale Content Strategy
Since the site is SSG, time-sensitive content (race calendars, specific event dates) becomes stale after the event passes. Mitigation:
- **Prefer evergreen framing**: "첫 마라톤 완주 가이드" (timeless) over "2026 서울마라톤 참가 안내" (expires March 2026)
- **Calendar posts**: Frame as annual guides that get updated ("2026 상반기" can be updated to "2026 하반기"), use `updatedAt` field
- **Race analysis**: Focus on course characteristics (elevation, terrain) that don't change year-to-year; mention year-specific details (date, registration) as secondary info

---

## Task Flow and Dependencies

```
Task 1 (Type Update)
    |
    v
Task 2 (Seed Content - 2-3 posts)
    |
    v
Task 3 (Build Verification)
```

Three tasks, strictly sequential. No parallelism needed.

---

## Detailed TODOs

### Task 1: Update Blog Type System
**File:** `src/types/blog.ts`

**Changes (3 lines modified, 0 files created):**

1. Line 1 -- Add `'marathon'` to `BlogCategory` union:
   ```typescript
   export type BlogCategory = 'guide' | 'review' | 'news' | 'tips' | 'marathon';
   ```

2. Lines 19-24 -- Add label to `categoryLabels`:
   ```typescript
   export const categoryLabels: Record<BlogCategory, string> = {
     guide: '가이드',
     review: '리뷰',
     news: '뉴스',
     tips: '팁',
     marathon: '마라톤',
   } as const;
   ```

3. Line 26 -- Add to `categoryOrder` array:
   ```typescript
   export const categoryOrder: BlogCategory[] = ['guide', 'review', 'tips', 'news', 'marathon'];
   ```

**Acceptance Criteria:**
- TypeScript compiles without errors
- No other files need changes (BlogList reads from `categoryOrder` dynamically)
- The `/blog` page will now show 6 tabs: 전체, 가이드, 리뷰, 팁, 뉴스, 마라톤

---

### Task 2: Create 2-3 Marathon Seed Posts
**File:** `src/lib/data/blog/posts.ts`

**Append 2-3 new `BlogPost` objects to the `blogPosts` array.**

#### Post 1: "첫 마라톤 완주 가이드: 등록부터 결승선까지" (Evergreen)

| Field | Value |
|-------|-------|
| id | `first-marathon-guide` |
| slug | `first-marathon-complete-guide` |
| title | `첫 마라톤 완주 가이드: 등록부터 결승선까지` |
| description | `처음 마라톤에 도전하는 한국 러너를 위한 완전 가이드. 대회 선택, 훈련 계획, 레이스 당일 전략, 신발/보급 추천까지 실전 노하우를 총정리합니다.` |
| category | `marathon` |
| tags | `['마라톤', '첫마라톤', '완주', '훈련계획', '레이스전략', '보급', '초보러너']` |
| readingTime | `12` |
| featured | `true` |
| author | `산초 에디터` |
| publishedAt | `2026-02-25` |
| thumbnail | Unsplash marathon image URL |

**Content outline (target: 2,500+ words):**

1. **도입**: "첫 마라톤, 생각만 해도 설레고 두렵다면" -- 산초 에디터의 첫 하프마라톤 경험담으로 시작
2. **대회 선택 가이드**:
   - 풀 vs 하프 vs 10K: 첫 대회로 어떤 거리가 적합한지
   - 한국 주요 대회 특징 비교 (서울마라톤: 평지+도심, 동아마라톤: 전통, 경주벚꽃마라톤: 경치, 춘천마라톤: 호수변)
   - 등록 시 확인할 것: 페이스 컷오프, 기록 인증 여부, 짐 보관
3. **훈련 계획 (12주 프레임)**:
   - 주 3-4회 러닝 기본 구조
   - Long run 점진적 증가 (10km -> 15km -> 20km -> 30km)
   - 테이퍼링 (대회 2주 전 훈련량 감소)
   - 데이터 출처: 일반적인 마라톤 훈련 원칙 (Hal Higdon 방식 한국화)
4. **신발 선택**:
   - 훈련용 vs 레이스용 분리 전략
   - 쿠셔닝 신발 추천 (사이트 내 신발 slug 링크): asics-gel-nimbus-28, new-balance-1080-v14, hoka-clifton-10
   - 레이싱 신발: 서브4 목표 시 카본 플레이트 고려 (nike-vaporfly-4, asics-metaspeed-sky-plus)
   - "새 신발로 마라톤 뛰지 마세요" -- 최소 100km 길들이기 필요
5. **보급/영양 전략**:
   - 레이스 3일 전 카보 로딩
   - 레이스 중 에너지 젤 섭취 타이밍 (45분마다)
   - 수분 보충: 갈증 느끼기 전에 마시기
   - 사이트 에너지 젤 페이지 링크
6. **레이스 당일 체크리스트**:
   - 전날 밤: 준비물 목록 (번호표, 안전핀, 에너지 젤, 바셀린)
   - 당일 아침: 식사 타이밍 (출발 3시간 전), 도착 시간
   - 페이스 전략: "전반 참고, 후반 달리기" -- 네거티브 스플릿
   - 완주 후: 스트레칭, 수분/영양 보충, 회복 러닝 일정
7. **마무리**: "완주 그 자체가 목표입니다" -- 첫 마라톤은 기록이 아닌 경험

#### Post 2: "2026 상반기 한국 마라톤 대회 캘린더 + 신발 추천" (Seasonal, updatable)

| Field | Value |
|-------|-------|
| id | `marathon-calendar-2026-spring` |
| slug | `korea-marathon-calendar-2026-spring` |
| title | `2026 상반기 한국 마라톤 대회 캘린더 + 코스별 신발 추천` |
| description | `2026년 3월~6월 국내 주요 마라톤 대회 일정과 코스 특징을 정리했습니다. 각 대회 난이도와 코스 특성에 맞는 러닝화도 함께 추천합니다.` |
| category | `marathon` |
| tags | `['마라톤', '대회일정', '2026', '서울마라톤', '동아마라톤', '경주마라톤', '대회캘린더']` |
| readingTime | `10` |
| featured | `false` |
| author | `산초 에디터` |
| publishedAt | `2026-02-25` |
| thumbnail | Unsplash marathon/city race image URL |

**Content outline (target: 2,000+ words):**

1. **도입**: 2026 상반기는 러너에게 최고의 시즌 -- 봄 마라톤 시즌 개막
2. **대회별 상세 정보** (각 대회마다):
   - **서울국제마라톤** (3월): 코스 특징 (광화문~잠실, 평지 위주), 난이도 (초보 적합), 페이스 컷오프, 참가비, 코스별 신발 추천
   - **동아마라톤** (3월): 역사와 전통, 코스 특징
   - **경주벚꽃마라톤** (4월): 경치 최고, 약간의 업힐, 관광+러닝 조합
   - **대구마라톤** (4월): IAAF 공인 코스, 기록용
   - **춘천마라톤** (5월 또는 10월 -- 확인 필요): 호수변 평지
   - **기타 주요 대회**: JTBC 마라톤 등
   - 데이터 출처: 각 대회 공식 홈페이지, 대한육상연맹 공지
3. **코스 유형별 신발 추천**:
   - 평지 위주 (서울, 대구): 가볍고 반발력 좋은 신발
   - 업다운 있는 코스 (경주): 쿠셔닝 + 안정성
   - 장거리 초보 (첫 하프): 쿠셔닝 최우선
   - 각각 사이트 내 신발 상세 페이지 링크 포함
4. **대회 선택 가이드**: 표로 정리 (대회명, 날짜, 거리, 난이도, 추천 대상)
5. **등록 꿀팁**: 조기 마감 대회, 할인 기간, 단체 등록
6. **마무리**: "봄은 러너의 계절" -- 하나라도 도전해보세요

**Stale content note**: This post will need `updatedAt` to be set when 하반기 version is created or when dates are confirmed. Frame course analysis as reusable; dates as the updatable portion.

#### Post 3 (Optional): "마라톤 페이스 전략: 서브4, 서브5 달성을 위한 구간별 가이드" (Evergreen)

| Field | Value |
|-------|-------|
| id | `marathon-pacing-strategy` |
| slug | `marathon-pacing-strategy-sub4-sub5` |
| title | `마라톤 페이스 전략: 서브4/서브5 달성을 위한 구간별 완벽 가이드` |
| description | `마라톤에서 목표 기록을 달성하려면 "처음에 참는 것"이 핵심입니다. 서브4, 서브5 목표별 km당 페이스, 구간별 전략, 에너지 관리법을 정리합니다.` |
| category | `marathon` |
| tags | `['마라톤', '페이스', '서브4', '서브5', '기록', '전략', '네거티브스플릿']` |
| readingTime | `9` |
| featured | `false` |
| author | `산초 에디터` |
| publishedAt | `2026-02-25` |
| thumbnail | Unsplash marathon pacing/watch image URL |

**Content outline (target: 2,000+ words):**

1. **도입**: "35km의 벽" -- 왜 마라톤 후반에 무너지는가
2. **페이스 기본 개념**: 이븐 스플릿 vs 네거티브 스플릿 vs 포지티브 스플릿
3. **서브5 전략 (5시간 이내, 초보 목표)**:
   - km당 페이스: 7:00-7:05/km
   - 구간별 전략: 0-10km, 10-21km, 21-30km, 30-42.195km
   - 에너지 보급 타이밍
   - 추천 신발: 쿠셔닝 최우선 (asics-gel-nimbus-28, hoka-clifton-10)
4. **서브4 전략 (4시간 이내, 중급 목표)**:
   - km당 페이스: 5:37-5:40/km
   - 구간별 전략 (더 공격적인 후반)
   - 보급 전략 (젤 + 물)
   - 추천 신발: 반발력 있는 템포/레이싱 (nike-pegasus-41, asics-metaspeed-sky-plus)
5. **공통 실수 5가지**: 출발 때 흥분해서 오버페이스, 젤 안 먹기, 새 신발, 날씨 무시, 훈련 부족인데 기록 욕심
6. **페이스 관리 도구**: GPS 시계, 페이스 밴드, 대회 페이서 활용법
7. **마무리**: "42.195km는 전반 35km + 후반 7km" -- 후반 7km가 진짜 마라톤

**Data sources for all posts:**
- 대한육상연맹 공식 사이트 (대회 일정)
- 각 대회 공식 홈페이지 (코스, 참가비, 컷오프)
- 일반적인 마라톤 훈련 원칙 (Hal Higdon, Jack Daniels 방식 한국화)
- 사이트 내 신발 데이터 (specs, biomechanics) -- 추천 시 실제 데이터 인용

**Content Quality Requirements:**
- Minimum 2,000 words per post (HTML content, excluding tags)
- At least 2 `<h2>` sections and 4+ `<h3>` subsections
- At least 1 table (`<table>`) or structured comparison per post
- Internal links to shoe detail pages using `/shoes/{slug}` format
- Internal links to energy gel page (`/gels`) where relevant
- At least 1 image per post (Unsplash, with proper `<figure>/<figcaption>`)
- Conversational Korean tone matching existing posts (산초 에디터 voice)
- No placeholder or filler content -- every paragraph must be substantive

**Acceptance Criteria:**
- At least 2 posts (ideally 3) with `category: 'marathon'`
- Posts appear on `/blog` under "전체" and "마라톤" tabs
- Each post accessible at `/blog/{slug}` with existing JSON-LD, breadcrumbs, canonical
- Content meets minimum word count and structural requirements
- All internal shoe links reference valid slugs from `src/lib/data/shoes/`
- No TypeScript compilation errors

---

### Task 3: Build Verification
**Command:** `npm run build`

**Verification checklist:**
- [ ] Build completes with zero errors
- [ ] All new blog post pages (`/blog/{slug}`) are statically generated
- [ ] Existing pages are unaffected
- [ ] Sitemap includes new blog post URLs (auto-discovered)
- [ ] No TypeScript errors

**Acceptance Criteria:**
- `npm run build` exits with code 0
- Output shows new blog slugs in the generated pages list
- No regressions in existing pages

---

## Commit Strategy

### Single commit (recommended for this scope)

All changes are small, cohesive, and tightly coupled:

**Message:** `블로그 마라톤 카테고리 추가 + 시드 콘텐츠 2-3개`

**Files modified:**
- `src/types/blog.ts` (3 lines changed)
- `src/lib/data/blog/posts.ts` (2-3 posts appended)

**Total: 0 new files, 2 modified files**

---

## Success Criteria

1. **Functional:** `/blog` page shows "마라톤" tab; clicking it filters to marathon posts; "전체" shows all posts including marathon
2. **Content Quality:** Each post is 2,000+ words, has tables/structure, internal links, and follows site voice
3. **SEO:** Individual posts get BlogPosting JSON-LD, breadcrumbs, and canonical URLs automatically (no work needed -- existing infrastructure handles it)
4. **SSG Compatible:** All pages statically generated at build time
5. **Non-breaking:** Existing blog, shoe, gel, and other pages continue to work unchanged
6. **Minimal diff:** Only 2 files modified, 0 files created, 0 files deleted

---

## Files to Create/Modify Summary

| File | Action | Description |
|------|--------|-------------|
| `src/types/blog.ts` | MODIFY | Add `'marathon'` to BlogCategory union, categoryLabels, categoryOrder (3 line changes) |
| `src/lib/data/blog/posts.ts` | MODIFY | Append 2-3 marathon-category blog posts |

**Total: 0 new files, 2 modified files**

---

## What This Plan Explicitly Does NOT Do

These items were in the original plan and have been intentionally removed per Architect recommendation:

| Removed Item | Reason |
|-------------|--------|
| `/marathon` landing page | Too few posts; back-link/breadcrumb UX bug; not worth the complexity |
| `getMarathonPosts()` helper | `getPostsByCategory('marathon')` already exists and works |
| Header nav changes | Mobile nav overflow risk with 6 buttons; not needed when blog tab suffices |
| Footer changes | No separate section to link to |
| Sitemap config changes | next-sitemap auto-discovers `/blog/{slug}` pages |
| New components | BlogList + BlogCard handle everything automatically |
