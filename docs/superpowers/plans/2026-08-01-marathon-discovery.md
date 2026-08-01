# 마라톤 대회 탐색 개선 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `/marathon` 목록을 시점 밴드 4구간 + 행 기반 목록으로 바꿔, 8월 방문자가 3월에 끝난 대회 대신 지금 신청 가능한 32개를 먼저 보게 한다.

**Architecture:** 밴드 판정과 거리 매핑은 `src/lib/marathon/` 아래 **순수 함수**로 분리해 Vitest로 검증한다. 화면은 밴드 컴포넌트 하나를 4번 재사용하고, 행 컴포넌트가 그 안에 들어간다. 필터 훅은 기존 `useMarathonFilters`를 축소 개편한다(월·상태·정렬 제거, 권역 추가). SSG라 빌드 시점 날짜가 정적 HTML에 굳으므로, 서버 렌더는 빌드 기준으로 하고 마운트 후 오늘 기준으로 다시 계산한다.

**Tech Stack:** Next.js 15.5 App Router (SSG, `output: export`) · React 19.2 · TypeScript 5.4 · CSS Modules · Vitest 4

## Global Constraints

이 섹션은 **모든 태스크에 암묵적으로 포함**된다.

- **작업 위치**: `main` 브랜치의 메인 워크트리 `/Users/kwonjaehyeon/Programming/sancho/runningshoes`. 홈 리디자인용 `redesign-b`는 이미 머지·배포됐다
- **스펙**: `docs/superpowers/specs/2026-08-01-marathon-discovery-design.md`
- **팔레트 토큰명** — 시안·스펙의 이름이 아니라 **실제 `globals.css` 이름**을 쓴다. 미정의 `var()`는 조용히 무효가 되어 빌드·tsc·lint 어디서도 안 잡힌다:
  ```
  --primary(잉크)  --secondary(본문 보조)  --border(선)
  --bg-warm(종이)  --bg-warm-alt(종이 진한톤)  --surface(흰 면)
  --accent(시그널 오렌지)  --accent-soft  --signal-dark  --positive  --warning-dark
  --tilt / --tilt-back / --mono (:root 공용)
  ```
- **대비 규칙**: 소형 텍스트(18px 미만) 4.5:1. `--accent`는 밝은 배경 위 소형 텍스트에 쓰지 말 것(3.03) — `--signal-dark`(4.79). `--signal-dark`를 `--bg-warm-alt` 위에 쓸 때는 `--surface` 박스로 감쌀 것(4.39 → 5.26)
- **한글에 mono 금지** — `--mono`는 날짜·수치·영문 라벨에만. 한글 라벨·대회명·설명은 본문 서체(스펙 §3)
- **카운트 하드코딩 금지** — 밴드 크기·지표는 전부 데이터에서 산출
- **`MarathonShoeBridge`는 건드리지 않는다** — 대회 상세의 신발/젤 추천 CTA는 수익 동선이다
- **정적 HTML에 대회 링크 100개를 보존한다** — 접힌 밴드도 마크업에는 남는다
- **검증은 `set -o pipefail`과 함께 실행한다.** 과거 `npm run build | tail`이 실패 exit code를 삼켜 깨진 채 배포된 이력이 있다
- **커밋 시 `git add`에 파일을 명시한다.** `-A`/`.`/`-a` 금지 — `tsconfig.tsbuildinfo`(빌드 산출물, git 추적 중)가 딸려 들어간다. 들어갔으면 `git checkout tsconfig.tsbuildinfo`
- **검증 체인**: `npx tsc --noEmit` → `npm test` → `npm run lint` → `npm run validate` → `set -o pipefail && npm run build`

## 파일 구조

**신규**

| 파일 | 책임 |
|---|---|
| `src/lib/marathon/bands.ts` | 밴드 판정 순수 함수. 날짜가 수동 status를 이기는 규칙이 여기 있다 |
| `src/lib/marathon/distance.ts` | 이상 거리값(11K·6K·12K) → 표준 거리 매핑 |
| `src/lib/__tests__/marathon-bands.test.ts` | 밴드 판정 테스트 |
| `src/lib/__tests__/marathon-distance.test.ts` | 거리 매핑 테스트 |
| `src/components/marathon/marathon-row.tsx` | 행 하나 |
| `src/components/marathon/marathon-band.tsx` | 밴드 하나(헤더 + 행 목록 + 점진 확장 또는 details) |
| `src/components/marathon/marathon-chips.tsx` | 가로 필터 칩(권역·거리·메이저) |
| `src/components/marathon/marathon-list.module.css` | 위 셋의 스타일 |

**수정**

| 파일 | 변경 |
|---|---|
| `src/types/marathon.ts` | `registrationStart` / `registrationEnd` / `lastVerified` 선택 필드 추가 |
| `src/hooks/useMarathonFilters.ts` | 정렬·월·상태 제거, 권역 그룹 필터 추가 |
| `src/components/marathon/marathon-content.tsx` | 전면 재작성(조립만) |
| `src/app/(main)/marathon/page.tsx` | 히어로 지표를 밴드 기준으로 |
| `src/app/(detail)/marathon/[id]/page.tsx` | `lastVerified` 표기 |
| `scripts/validate.js` | `registrationEnd > date` 이면 에러 |

**참조를 잃는 것** (삭제하지 않고 보고만 한다 — 되돌릴 여지를 남긴다)

- `src/components/marathon/marathon-event-card.tsx` — 행이 대체
- `src/components/marathon/marathon-filter-panel.tsx` — 칩이 대체. **권역 그룹 정의(`regionGroups`)는 여기서 가져다 쓴다**
- `src/components/marathon/marathon-stats-bar.tsx` — 히어로 지표가 대체

**검증 전략**: 이 프로젝트에는 RTL·jsdom이 없고 Vitest 유닛 테스트만 있다(`src/lib/__tests__/`). **순수 함수는 TDD로**, **컴포넌트는 `npm run build` + 브라우저 실측으로** 검증한다. 테스트 인프라 추가는 범위 밖이다(YAGNI).

---

### Task 1: 밴드 판정 순수 함수

**Files:**
- Create: `src/lib/marathon/bands.ts`
- Test: `src/lib/__tests__/marathon-bands.test.ts`
- Modify: `src/types/marathon.ts`

**Interfaces:**
- Produces:
  ```ts
  export type BandId = 'open' | 'upcoming' | 'closed' | 'past';
  export type Band = { id: BandId; label: string; events: MarathonEvent[] };
  export function bandOf(event: MarathonEvent, today: string): BandId;
  export function groupIntoBands(events: readonly MarathonEvent[], today: string): Band[];
  export function daysUntil(dateStr: string, today: string): number;
  ```
  `today`는 `'YYYY-MM-DD'` 문자열이다. `Date.now()`를 모듈 안에서 부르지 않는다 — 호출자가 넘긴다(테스트 가능·SSG 안전).

- [ ] **Step 1: 타입에 선택 필드 3개 추가**

`src/types/marathon.ts`의 `MarathonEvent` 인터페이스에 넣는다(`logistics?: Logistics;` 다음 줄).

```ts
  /** 접수 시작일 'YYYY-MM-DD'. 있으면 밴드 판정과 D-day 표기에 쓴다 */
  registrationStart?: string;
  /** 접수 마감일 'YYYY-MM-DD' */
  registrationEnd?: string;
  /** status를 마지막으로 확인한 날 'YYYY-MM-DD'. 대회 상세에만 노출한다 */
  lastVerified?: string;
```

- [ ] **Step 2: 실패하는 테스트 작성**

```ts
// src/lib/__tests__/marathon-bands.test.ts
import { describe, it, expect } from 'vitest';
import { bandOf, groupIntoBands, daysUntil } from '@/lib/marathon/bands';
import type { MarathonEvent } from '@/types/marathon';

const TODAY = '2026-08-01';

function ev(over: Partial<MarathonEvent>): MarathonEvent {
  return {
    id: 'x', name: '테스트 대회', date: '2026-09-01', month: '9월',
    location: '서울', region: '서울', distances: ['10K'],
    status: '접수중', isMajor: false,
    ...over,
  } as MarathonEvent;
}

describe('bandOf', () => {
  it('대회일이 지났으면 status와 무관하게 past', () => {
    expect(bandOf(ev({ date: '2026-07-31', status: '접수중' }), TODAY)).toBe('past');
  });

  it('오늘 열리는 대회는 past가 아니다', () => {
    expect(bandOf(ev({ date: TODAY, status: '접수중' }), TODAY)).toBe('open');
  });

  it('registrationEnd가 지났으면 status가 접수중이어도 closed', () => {
    expect(
      bandOf(ev({ date: '2026-09-01', registrationEnd: '2026-07-20', status: '접수중' }), TODAY),
    ).toBe('closed');
  });

  it('registrationStart가 아직 안 왔으면 upcoming', () => {
    expect(
      bandOf(ev({ date: '2026-09-01', registrationStart: '2026-08-15', status: '접수중' }), TODAY),
    ).toBe('upcoming');
  });

  it('접수기간이 없으면 status를 따른다', () => {
    expect(bandOf(ev({ status: '마감' }), TODAY)).toBe('closed');
    expect(bandOf(ev({ status: '접수예정' }), TODAY)).toBe('upcoming');
    expect(bandOf(ev({ status: '접수중' }), TODAY)).toBe('open');
  });

  it('status가 대회종료인데 날짜가 미래면 closed로 둔다(past는 날짜로만)', () => {
    expect(bandOf(ev({ date: '2026-09-01', status: '대회종료' }), TODAY)).toBe('closed');
  });
});

describe('groupIntoBands', () => {
  it('4개 밴드를 순서대로 반환하고 합계가 입력과 같다', () => {
    const events = [
      ev({ id: 'a', date: '2026-07-01', status: '대회종료' }),
      ev({ id: 'b', date: '2026-09-01', status: '접수중' }),
      ev({ id: 'c', date: '2026-09-02', status: '접수예정' }),
      ev({ id: 'd', date: '2026-09-03', status: '마감' }),
    ];
    const bands = groupIntoBands(events, TODAY);
    expect(bands.map((b) => b.id)).toEqual(['open', 'upcoming', 'closed', 'past']);
    expect(bands.reduce((n, b) => n + b.events.length, 0)).toBe(4);
  });

  it('밴드 안은 날짜 오름차순이다', () => {
    const events = [
      ev({ id: 'late', date: '2026-09-20' }),
      ev({ id: 'early', date: '2026-09-02' }),
    ];
    const open = groupIntoBands(events, TODAY).find((b) => b.id === 'open')!;
    expect(open.events.map((e) => e.id)).toEqual(['early', 'late']);
  });

  it('빈 밴드도 자리를 지킨다(길이 0)', () => {
    const bands = groupIntoBands([ev({})], TODAY);
    expect(bands).toHaveLength(4);
    expect(bands.find((b) => b.id === 'past')!.events).toHaveLength(0);
  });
});

describe('daysUntil', () => {
  it('남은 일수를 센다', () => {
    expect(daysUntil('2026-08-13', TODAY)).toBe(12);
    expect(daysUntil(TODAY, TODAY)).toBe(0);
    expect(daysUntil('2026-07-31', TODAY)).toBe(-1);
  });
});
```

- [ ] **Step 3: 테스트가 실패하는지 확인**

```bash
npx vitest run src/lib/__tests__/marathon-bands.test.ts
```
기대: FAIL — `Failed to resolve import "@/lib/marathon/bands"`

- [ ] **Step 4: 최소 구현**

```ts
// src/lib/marathon/bands.ts
import type { MarathonEvent } from '@/types/marathon';

/**
 * 대회 목록의 시점 밴드.
 *
 * 목록이 날짜 오름차순 하나로 정렬돼 있어 8월 방문자에게 3월에 끝난 대회가 먼저 보였다.
 * 밴드가 정렬을 대체한다 — 밴드 순서가 시의성이고, 밴드 안에서만 날짜순이다.
 *
 * **날짜가 수동 status를 이긴다.** status는 사람이 관리하는 값이라 시간이 지나면 틀려지지만
 * (접수 마감일이 지났는데 '접수중'인 채로 남는 식), 날짜 비교는 항상 오늘 기준으로 맞다.
 *
 * `today`를 인자로 받는 이유: 이 사이트는 `output: export` SSG라 모듈 안에서 `Date.now()`를
 * 부르면 **빌드 시점이 정적 HTML에 굳는다.** 호출자가 넘기게 해서 서버(빌드 시점)와
 * 클라이언트(진짜 오늘) 양쪽에서 같은 함수를 쓸 수 있게 한다.
 */

export type BandId = 'open' | 'upcoming' | 'closed' | 'past';

export type Band = {
  id: BandId;
  label: string;
  events: MarathonEvent[];
};

const BAND_ORDER: { id: BandId; label: string }[] = [
  { id: 'open', label: '지금 접수중' },
  { id: 'upcoming', label: '곧 열림' },
  { id: 'closed', label: '접수 마감 · 대회는 열림' },
  { id: 'past', label: '지난 대회' },
];

const DAY = 86_400_000;

/** 'YYYY-MM-DD' 두 개의 날짜 차이(일). 문자열을 UTC로 파싱해 타임존 영향을 없앤다. */
export function daysUntil(dateStr: string, today: string): number {
  const a = Date.parse(`${dateStr}T00:00:00Z`);
  const b = Date.parse(`${today}T00:00:00Z`);
  if (Number.isNaN(a) || Number.isNaN(b)) return 0;
  return Math.round((a - b) / DAY);
}

/** 판정 순서가 곧 우선순위다 — past를 먼저 걸러낸 뒤 접수 기간, 마지막이 수동 status. */
export function bandOf(event: MarathonEvent, today: string): BandId {
  // 1. 지난 대회 — 날짜만 본다. 유일하게 100% 자동 판정되는 밴드다.
  if (event.date < today) return 'past';

  // 2. 접수 기간이 있으면 그걸 믿는다(수동 status보다 최신).
  if (event.registrationEnd && event.registrationEnd < today) return 'closed';
  if (event.registrationStart && event.registrationStart > today) return 'upcoming';

  // 3. 접수 기간이 없으면 수동 status.
  //    '대회종료'인데 날짜가 미래인 경우는 데이터 모순이라 closed로 둔다
  //    (past는 날짜로만 판정한다는 규칙을 지킨다).
  switch (event.status) {
    case '마감':
    case '대회종료':
      return 'closed';
    case '접수예정':
      return 'upcoming';
    case '접수중':
    default:
      return 'open';
  }
}

/** 4개 밴드를 항상 같은 순서로 반환한다. 비어 있어도 자리를 지킨다(호출자가 숨김을 결정). */
export function groupIntoBands(events: readonly MarathonEvent[], today: string): Band[] {
  const buckets: Record<BandId, MarathonEvent[]> = {
    open: [], upcoming: [], closed: [], past: [],
  };
  for (const e of events) buckets[bandOf(e, today)].push(e);

  for (const id of Object.keys(buckets) as BandId[]) {
    buckets[id].sort((a, b) => a.date.localeCompare(b.date));
  }

  return BAND_ORDER.map(({ id, label }) => ({ id, label, events: buckets[id] }));
}
```

- [ ] **Step 5: 테스트 통과 확인**

```bash
npx vitest run src/lib/__tests__/marathon-bands.test.ts
npx tsc --noEmit
```
기대: 12 passed · tsc 0건

- [ ] **Step 6: 커밋**

```bash
git add src/lib/marathon/bands.ts src/lib/__tests__/marathon-bands.test.ts src/types/marathon.ts
git commit -m "feat(marathon): 시점 밴드 판정 — 날짜가 수동 status를 이긴다"
```

---

### Task 2: 이상 거리값 매핑

**Files:**
- Create: `src/lib/marathon/distance.ts`
- Test: `src/lib/__tests__/marathon-distance.test.ts`

**Interfaces:**
- Produces:
  ```ts
  export function normalizeDistance(raw: string): EventDistance | null;
  export function matchesDistanceFilter(eventDistances: readonly string[], selected: readonly EventDistance[]): boolean;
  ```

**배경**: 데이터에 `11K`·`6K`·`12K`가 각 1건 있는데 `EVENT_DISTANCES`에 없는 값이라 **거리 필터에 영영 안 잡힌다.** 칩을 9개로 늘리지 않고(각 1건이라 변별력 없음) 필터만 근접 표준에 매핑한다. 행에는 원문 그대로 표기한다.

- [ ] **Step 1: 실패하는 테스트 작성**

```ts
// src/lib/__tests__/marathon-distance.test.ts
import { describe, it, expect } from 'vitest';
import { normalizeDistance, matchesDistanceFilter } from '@/lib/marathon/distance';

describe('normalizeDistance', () => {
  it('표준 거리는 그대로 돌려준다', () => {
    expect(normalizeDistance('10K')).toBe('10K');
    expect(normalizeDistance('풀코스')).toBe('풀코스');
    expect(normalizeDistance('트레일')).toBe('트레일');
  });

  it('11K·12K는 10K로 본다', () => {
    expect(normalizeDistance('11K')).toBe('10K');
    expect(normalizeDistance('12K')).toBe('10K');
  });

  it('6K는 5K로 본다', () => {
    expect(normalizeDistance('6K')).toBe('5K');
  });

  it('모르는 값은 null', () => {
    expect(normalizeDistance('마일')).toBeNull();
  });
});

describe('matchesDistanceFilter', () => {
  it('선택이 없으면 전부 통과', () => {
    expect(matchesDistanceFilter(['11K'], [])).toBe(true);
  });

  it('11K 대회가 10K 필터에 잡힌다', () => {
    expect(matchesDistanceFilter(['11K'], ['10K'])).toBe(true);
  });

  it('6K 대회가 5K 필터에 잡힌다', () => {
    expect(matchesDistanceFilter(['6K'], ['5K'])).toBe(true);
  });

  it('여러 거리 중 하나만 맞아도 통과', () => {
    expect(matchesDistanceFilter(['하프', '10K'], ['풀코스', '하프'])).toBe(true);
  });

  it('안 맞으면 false', () => {
    expect(matchesDistanceFilter(['하프'], ['풀코스'])).toBe(false);
  });
});
```

- [ ] **Step 2: 테스트가 실패하는지 확인**

```bash
npx vitest run src/lib/__tests__/marathon-distance.test.ts
```
기대: FAIL — `Failed to resolve import "@/lib/marathon/distance"`

- [ ] **Step 3: 최소 구현**

```ts
// src/lib/marathon/distance.ts
import { EVENT_DISTANCES, type EventDistance } from '@/types/marathon';

/**
 * 거리 필터용 정규화.
 *
 * 데이터에 `11K`·`6K`·`12K`가 섞여 있는데 EVENT_DISTANCES에 없는 값이라 필터에 안 잡혔다.
 * 칩을 늘리는 대신(각 1건이라 변별력이 없다) 근접 표준으로 매핑한다.
 * "10K 대회 보여줘" 했을 때 11K 대회가 빠지는 게 더 이상하다.
 *
 * ⚠️ 표기용이 아니다. 행에는 원문(`11K`)을 그대로 쓴다.
 */
const NEAR: Record<string, EventDistance> = {
  '11K': '10K',
  '12K': '10K',
  '6K': '5K',
};

export function normalizeDistance(raw: string): EventDistance | null {
  if ((EVENT_DISTANCES as readonly string[]).includes(raw)) return raw as EventDistance;
  return NEAR[raw] ?? null;
}

export function matchesDistanceFilter(
  eventDistances: readonly string[],
  selected: readonly EventDistance[],
): boolean {
  if (selected.length === 0) return true;
  return eventDistances.some((d) => {
    const n = normalizeDistance(d);
    return n !== null && selected.includes(n);
  });
}
```

- [ ] **Step 4: 테스트 통과 확인**

```bash
npx vitest run src/lib/__tests__/marathon-distance.test.ts
npx tsc --noEmit
```
기대: 9 passed · tsc 0건

- [ ] **Step 5: 커밋**

```bash
git add src/lib/marathon/distance.ts src/lib/__tests__/marathon-distance.test.ts
git commit -m "feat(marathon): 이상 거리값 11K·6K·12K를 근접 표준에 매핑"
```

---

### Task 3: 필터 훅 축소 개편

**Files:**
- Modify: `src/hooks/useMarathonFilters.ts`

**Interfaces:**
- Consumes: `matchesDistanceFilter`(Task 2)
- Produces:
  ```ts
  export type RegionGroupId = '수도권' | '강원' | '충청' | '전라' | '경상' | '제주';
  export const REGION_GROUPS: { id: RegionGroupId; regions: EventRegion[] }[];
  export type MarathonFilterState = {
    regionGroups: RegionGroupId[];
    distances: EventDistance[];
    majorOnly: boolean;
    searchQuery: string;
  };
  export function useMarathonFilters(events: MarathonEvent[]): {
    filters: MarathonFilterState;
    filteredEvents: MarathonEvent[];
    counts: { regionGroups: Record<RegionGroupId, number>; distances: Record<string, number>; majorOnly: number; all: number };
    activeFilterCount: number;
    setSearchQuery: (q: string) => void;
    toggleRegionGroup: (id: RegionGroupId) => void;
    toggleDistance: (d: EventDistance) => void;
    toggleMajorOnly: () => void;
    resetFilters: () => void;
  };
  ```

**제거하는 것**: `sortBy` / `setSortBy` / `MarathonSortOption` / `marathonSortLabels`(밴드가 정렬을 대체), `months` / `toggleMonth`, `statuses` / `toggleStatus`(밴드와 중복), `filterOptions`(칩이 상수 목록을 쓴다).

- [ ] **Step 1: 파일 전체를 아래로 교체**

```ts
'use client';

import { useState, useMemo, useCallback } from 'react';
import type { MarathonEvent, EventRegion, EventDistance } from '@/types/marathon';
import { EVENT_DISTANCES } from '@/types/marathon';
import { matchesDistanceFilter } from '@/lib/marathon/distance';
import { useDebounce } from './useDebounce';

/**
 * 대회 목록 필터.
 *
 * 축을 셋으로 줄였다 — 권역·거리·메이저.
 * 접수상태 필터는 시점 밴드와 중복이라 뺐고, 월별 필터도 뺐다(밴드 안이 날짜순이라 스크롤로 읽힌다).
 * 정렬 옵션도 없앴다 — 밴드 순서가 곧 시의성 정렬이다.
 *
 * 시·도 17개를 그대로 칩으로 깔면 필터가 목록보다 커진다. 기존 필터 패널이 쓰던
 * 권역 그룹 6개를 그대로 가져왔다.
 */
export type RegionGroupId = '수도권' | '강원' | '충청' | '전라' | '경상' | '제주';

export const REGION_GROUPS: { id: RegionGroupId; regions: EventRegion[] }[] = [
  { id: '수도권', regions: ['서울', '경기', '인천'] },
  { id: '강원', regions: ['강원'] },
  { id: '충청', regions: ['충북', '충남', '대전', '세종'] },
  { id: '전라', regions: ['전북', '전남', '광주'] },
  { id: '경상', regions: ['경북', '경남', '대구', '울산', '부산'] },
  { id: '제주', regions: ['제주'] },
];

const REGION_TO_GROUP = new Map<EventRegion, RegionGroupId>(
  REGION_GROUPS.flatMap((g) => g.regions.map((r) => [r, g.id] as const)),
);

export type MarathonFilterState = {
  regionGroups: RegionGroupId[];
  distances: EventDistance[];
  majorOnly: boolean;
  searchQuery: string;
};

const initialFilters: MarathonFilterState = {
  regionGroups: [],
  distances: [],
  majorOnly: false,
  searchQuery: '',
};

function matchesSearch(event: MarathonEvent, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    event.name.toLowerCase().includes(q) ||
    event.location.toLowerCase().includes(q) ||
    (event.description?.toLowerCase().includes(q) ?? false)
  );
}

export function useMarathonFilters(events: MarathonEvent[]) {
  const [filters, setFilters] = useState<MarathonFilterState>(initialFilters);
  const debouncedSearchQuery = useDebounce(filters.searchQuery, 300);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      if (!matchesSearch(event, debouncedSearchQuery)) return false;

      if (filters.regionGroups.length > 0) {
        const group = REGION_TO_GROUP.get(event.region);
        if (!group || !filters.regionGroups.includes(group)) return false;
      }

      if (!matchesDistanceFilter(event.distances, filters.distances)) return false;

      if (filters.majorOnly && !event.isMajor) return false;

      return true;
    });
  }, [events, filters.regionGroups, filters.distances, filters.majorOnly, debouncedSearchQuery]);

  /** 칩에 붙는 수. 필터를 걸지 않은 전체 기준이라 선택해도 숫자가 흔들리지 않는다. */
  const counts = useMemo(() => {
    const regionGroups = Object.fromEntries(
      REGION_GROUPS.map((g) => [
        g.id,
        events.filter((e) => REGION_TO_GROUP.get(e.region) === g.id).length,
      ]),
    ) as Record<RegionGroupId, number>;

    const distances = Object.fromEntries(
      EVENT_DISTANCES.map((d) => [d, events.filter((e) => matchesDistanceFilter(e.distances, [d])).length]),
    ) as Record<string, number>;

    return {
      regionGroups,
      distances,
      majorOnly: events.filter((e) => e.isMajor).length,
      all: events.length,
    };
  }, [events]);

  const setSearchQuery = useCallback((query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  const toggleRegionGroup = useCallback((id: RegionGroupId) => {
    setFilters((prev) => ({
      ...prev,
      regionGroups: prev.regionGroups.includes(id)
        ? prev.regionGroups.filter((g) => g !== id)
        : [...prev.regionGroups, id],
    }));
  }, []);

  const toggleDistance = useCallback((distance: EventDistance) => {
    setFilters((prev) => ({
      ...prev,
      distances: prev.distances.includes(distance)
        ? prev.distances.filter((d) => d !== distance)
        : [...prev.distances, distance],
    }));
  }, []);

  const toggleMajorOnly = useCallback(() => {
    setFilters((prev) => ({ ...prev, majorOnly: !prev.majorOnly }));
  }, []);

  const resetFilters = useCallback(() => setFilters(initialFilters), []);

  const activeFilterCount = useMemo(
    () =>
      (filters.searchQuery ? 1 : 0) +
      filters.regionGroups.length +
      filters.distances.length +
      (filters.majorOnly ? 1 : 0),
    [filters],
  );

  return {
    filters,
    filteredEvents,
    counts,
    activeFilterCount,
    setSearchQuery,
    toggleRegionGroup,
    toggleDistance,
    toggleMajorOnly,
    resetFilters,
  };
}
```

- [ ] **Step 2: 타입 오류로 깨진 곳 확인**

```bash
npx tsc --noEmit
```
기대: `marathon-content.tsx`가 없어진 `sortBy`·`toggleMonth`·`toggleStatus`·`filterOptions`를 참조해 에러. **Task 4에서 그 파일을 재작성하며 해소한다.** 여기서 고치지 않는다.

- [ ] **Step 3: 커밋(빌드는 아직 깨진 상태)**

```bash
git add src/hooks/useMarathonFilters.ts
git commit -m "refactor(marathon): 필터 축을 권역·거리·메이저 셋으로 축소, 정렬 제거"
```

---

### Task 4: 행 · 밴드 · 칩 컴포넌트

**Files:**
- Create: `src/components/marathon/marathon-row.tsx`
- Create: `src/components/marathon/marathon-band.tsx`
- Create: `src/components/marathon/marathon-chips.tsx`
- Create: `src/components/marathon/marathon-list.module.css`

**Interfaces:**
- Consumes: `Band`·`daysUntil`(Task 1), `REGION_GROUPS`·`RegionGroupId`·`MarathonFilterState`(Task 3)
- Produces:
  ```tsx
  export function MarathonRow(props: { event: MarathonEvent; today: string }): JSX.Element;
  export function MarathonBand(props: { band: Band; today: string; defaultOpen: boolean; note?: string }): JSX.Element | null;
  export function MarathonChips(props: {
    filters: MarathonFilterState;
    counts: { regionGroups: Record<RegionGroupId, number>; distances: Record<string, number>; majorOnly: number; all: number };
    activeFilterCount: number;
    setSearchQuery: (q: string) => void;
    toggleRegionGroup: (id: RegionGroupId) => void;
    toggleDistance: (d: EventDistance) => void;
    toggleMajorOnly: () => void;
    resetFilters: () => void;
  }): JSX.Element;
  ```

- [ ] **Step 1: CSS 모듈 작성**

```css
/* src/components/marathon/marathon-list.module.css
 *
 * 색 토큰은 실제 globals.css 이름(--primary/--accent/--border)을 쓴다.
 * 시안·스펙의 --ink/--signal/--line 은 이 코드베이스에 없다 — 미정의 var()는 조용히 무효가 된다.
 */

/* ---------- 필터 칩 ---------- */
.chips { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }
.chipRow { display: flex; flex-wrap: wrap; align-items: center; gap: 7px; }
.chipLabel {
  font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em;
  color: var(--secondary); width: 46px; flex: none;
}
.chip {
  font-size: 13px; font-weight: 500; padding: 8px 13px; min-height: 44px;
  border: 1px solid var(--border); background: var(--surface); border-radius: 2px;
  display: inline-flex; align-items: center; gap: 6px;
}
.chip:hover { border-color: var(--primary); }
.chip[aria-pressed='true'] { background: var(--primary); color: var(--bg-warm); border-color: var(--primary); }
.chipN { font-family: var(--mono); font-size: 10.5px; opacity: 0.62; font-variant-numeric: tabular-nums; }
.reset { font-size: 12.5px; color: var(--signal-dark); border-bottom: 1px solid var(--accent); padding-bottom: 2px; }
/* 검색 — 100개 중 특정 대회를 이름으로 찾는 경로. 칩만으로는 대체되지 않는다 */
.search {
  flex: 1; min-width: 180px; max-width: 320px; min-height: 44px;
  border: 1px solid var(--border); background: var(--surface); border-radius: 2px;
  padding: 8px 13px; font-size: 13px; color: var(--primary);
}
.search::placeholder { color: var(--secondary); }
.search:focus { border-color: var(--primary); outline: none; }

/* ---------- 밴드 ---------- */
.band { margin-bottom: 34px; }
.bandHead {
  display: flex; align-items: baseline; gap: 10px;
  padding-bottom: 10px; border-bottom: 2px solid var(--primary);
}
.bandTitle { font-size: 17px; font-weight: 700; letter-spacing: -0.02em; }
.bandCount { font-family: var(--mono); font-size: 15px; color: var(--signal-dark); font-variant-numeric: tabular-nums; }
.bandNote {
  margin-top: 12px; font-size: 12.5px; color: var(--secondary);
  padding-left: 13px; border-left: 2px solid var(--border); word-break: keep-all;
}
/* 접힌 밴드 — 안에 전체 행이 들어간다(점진 확장 없음) */
.folded > summary {
  list-style: none; cursor: pointer; min-height: 44px;
  display: flex; align-items: baseline; gap: 10px;
  padding-bottom: 10px; border-bottom: 2px solid var(--border);
}
.folded > summary::-webkit-details-marker { display: none; }
.folded > summary::after { content: '▾'; font-family: var(--mono); color: var(--secondary); margin-left: auto; }
.folded[open] > summary::after { content: '▴'; }

.expand { padding: 18px 0 2px; text-align: center; }
.expandB {
  display: inline-flex; align-items: center; gap: 9px;
  border: 1px solid var(--primary); background: var(--surface);
  padding: 12px 24px; min-height: 46px; border-radius: 2px;
  font-size: 14px; font-weight: 650;
}
.expandB:hover { background: var(--primary); color: var(--bg-warm); }
.empty { padding: 22px 0; color: var(--secondary); font-size: 14px; }

/* ---------- 행 ---------- */
.row {
  display: grid; grid-template-columns: 86px 1.5fr 72px 1fr 96px;
  gap: 14px; align-items: center; padding: 11px 0;
  border-bottom: 1px solid var(--border); position: relative;
}
.row:hover { background: var(--surface); }
.date { font-family: var(--mono); font-size: 12.5px; font-variant-numeric: tabular-nums; color: var(--primary); }
.name { font-size: 15px; font-weight: 650; letter-spacing: -0.018em; line-height: 1.32; word-break: keep-all; }
/* 메이저 표식 — 색만으로 구분하지 않도록 텍스트를 함께 둔다 */
.major {
  margin-left: 6px; font-family: var(--mono); font-size: 9px; letter-spacing: 0.1em;
  border: 1px solid var(--accent); color: var(--signal-dark); padding: 1px 4px; white-space: nowrap;
}
.region { font-size: 12.5px; color: var(--secondary); }
.dist { font-size: 12.5px; color: var(--secondary); word-break: keep-all; }
.state { font-size: 11px; justify-self: end; white-space: nowrap; color: var(--secondary); }
.state.dday { font-family: var(--mono); color: var(--signal-dark); font-variant-numeric: tabular-nums; }

@media (max-width: 760px) {
  .chipLabel { width: 100%; }
  .row {
    grid-template-columns: 1fr auto;
    grid-template-areas: 'date state' 'name name' 'meta meta';
    gap: 4px 12px; padding: 13px 0;
  }
  .date { grid-area: date; }
  .state { grid-area: state; }
  .name { grid-area: name; font-size: 15.5px; }
  .region, .dist { grid-area: meta; display: inline; font-size: 12px; }
  .region::after { content: ' · '; }
}
```

- [ ] **Step 2: 행 컴포넌트**

```tsx
// src/components/marathon/marathon-row.tsx
import Link from 'next/link';
import type { MarathonEvent } from '@/types/marathon';
import { daysUntil } from '@/lib/marathon/bands';
import styles from './marathon-list.module.css';

const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

/** '2026-08-16' → '8/16 토' */
function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return `${d.getUTCMonth() + 1}/${d.getUTCDate()} ${WEEKDAY[d.getUTCDay()]}`;
}

/**
 * 상태 칸.
 * `registrationEnd`가 있으면 D-day를 계산하고, 없으면 수동 status를 그대로 보여준다.
 * 채워진 대회만 정확해지는 구조라 백필 없이도 점진적으로 좋아진다.
 */
function stateLabel(event: MarathonEvent, today: string): { text: string; dday: boolean } {
  if (event.registrationEnd) {
    const left = daysUntil(event.registrationEnd, today);
    if (left >= 0) return { text: `D-${left} 마감`, dday: true };
  }
  return { text: event.status, dday: false };
}

export function MarathonRow({ event, today }: { event: MarathonEvent; today: string }) {
  const state = stateLabel(event, today);
  return (
    <Link className={styles.row} href={`/marathon/${event.id}`}>
      <span className={styles.date}>{formatDate(event.date)}</span>
      <span className={styles.name}>
        {event.name}
        {event.isMajor && <span className={styles.major}>MAJOR</span>}
      </span>
      <span className={styles.region}>{event.region}</span>
      {/* 거리는 원문 그대로 — 11K를 10K로 바꿔 적지 않는다(필터만 매핑한다) */}
      <span className={styles.dist}>{event.distances.join(' · ')}</span>
      <span className={`${styles.state} ${state.dday ? styles.dday : ''}`}>{state.text}</span>
    </Link>
  );
}
```

- [ ] **Step 3: 밴드 컴포넌트**

```tsx
// src/components/marathon/marathon-band.tsx
'use client';

import { useState } from 'react';
import type { Band } from '@/lib/marathon/bands';
import { MarathonRow } from './marathon-row';
import styles from './marathon-list.module.css';

const STEP = 12;

/**
 * 시점 밴드 하나.
 *
 * 펼친 밴드(접수중·곧 열림)는 12행씩 점진 확장하고, 접힌 밴드(접수 마감·지난 대회)는
 * `<details>` 안에 **전체 행을 담는다** — 접힌 채로 확장 버튼까지 두면 조작이 두 단계가 된다.
 * 어느 쪽이든 행은 전부 마크업에 남아 대회 링크 100개가 정적 HTML에 보존된다.
 */
export function MarathonBand({
  band,
  today,
  defaultOpen,
  note,
}: {
  band: Band;
  today: string;
  defaultOpen: boolean;
  note?: string;
}) {
  const [shown, setShown] = useState(STEP);

  if (band.events.length === 0) return null;

  if (!defaultOpen) {
    return (
      <details className={`${styles.band} ${styles.folded}`}>
        <summary>
          <span className={styles.bandTitle}>{band.label}</span>
          <span className={styles.bandCount}>{band.events.length}</span>
        </summary>
        <div>
          {band.events.map((e) => (
            <MarathonRow key={e.id} event={e} today={today} />
          ))}
        </div>
      </details>
    );
  }

  const visible = band.events.slice(0, shown);
  const remaining = band.events.length - visible.length;

  return (
    <section className={styles.band}>
      <div className={styles.bandHead}>
        <span className={styles.bandTitle}>{band.label}</span>
        <span className={styles.bandCount}>{band.events.length}</span>
      </div>

      <div>
        {visible.map((e) => (
          <MarathonRow key={e.id} event={e} today={today} />
        ))}
      </div>

      {remaining > 0 && (
        <div className={styles.expand}>
          <button
            type="button"
            className={styles.expandB}
            onClick={() => setShown((n) => n + STEP)}
          >
            {remaining > STEP ? `대회 ${STEP}개 더 보기` : `전체 ${band.events.length}개 보기`}
            <span aria-hidden="true">↓</span>
          </button>
        </div>
      )}

      {note && <p className={styles.bandNote}>{note}</p>}
    </section>
  );
}
```

- [ ] **Step 4: 칩 컴포넌트**

```tsx
// src/components/marathon/marathon-chips.tsx
'use client';

import { EVENT_DISTANCES, type EventDistance } from '@/types/marathon';
import { REGION_GROUPS, type RegionGroupId, type MarathonFilterState } from '@/hooks/useMarathonFilters';
import styles from './marathon-list.module.css';

export function MarathonChips({
  filters,
  counts,
  activeFilterCount,
  setSearchQuery,
  toggleRegionGroup,
  toggleDistance,
  toggleMajorOnly,
  resetFilters,
}: {
  filters: MarathonFilterState;
  counts: {
    regionGroups: Record<RegionGroupId, number>;
    distances: Record<string, number>;
    majorOnly: number;
    all: number;
  };
  activeFilterCount: number;
  setSearchQuery: (q: string) => void;
  toggleRegionGroup: (id: RegionGroupId) => void;
  toggleDistance: (d: EventDistance) => void;
  toggleMajorOnly: () => void;
  resetFilters: () => void;
}) {
  return (
    <div className={styles.chips}>
      <div className={styles.chipRow}>
        <span className={styles.chipLabel}>REGION</span>
        {REGION_GROUPS.map((g) => (
          <button
            key={g.id}
            type="button"
            className={styles.chip}
            aria-pressed={filters.regionGroups.includes(g.id)}
            onClick={() => toggleRegionGroup(g.id)}
          >
            {g.id} <span className={styles.chipN}>{counts.regionGroups[g.id] ?? 0}</span>
          </button>
        ))}
      </div>

      <div className={styles.chipRow}>
        <span className={styles.chipLabel}>DISTANCE</span>
        {EVENT_DISTANCES.map((d) => (
          <button
            key={d}
            type="button"
            className={styles.chip}
            aria-pressed={filters.distances.includes(d)}
            onClick={() => toggleDistance(d)}
          >
            {d} <span className={styles.chipN}>{counts.distances[d] ?? 0}</span>
          </button>
        ))}
      </div>

      <div className={styles.chipRow}>
        <span className={styles.chipLabel} />
        <button
          type="button"
          className={styles.chip}
          aria-pressed={filters.majorOnly}
          onClick={toggleMajorOnly}
        >
          메이저만 <span className={styles.chipN}>{counts.majorOnly}</span>
        </button>
        {/* 칩은 범주를 좁히고, 검색은 이름으로 하나를 찍는다 — 서로 대체되지 않는다.
            "춘천마라톤" 처럼 대회를 이미 알고 온 사용자의 경로다. */}
        <input
          type="search"
          className={styles.search}
          value={filters.searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="대회명, 장소 검색"
          aria-label="대회 검색"
        />
        {activeFilterCount > 0 && (
          <button type="button" className={styles.reset} onClick={resetFilters}>
            필터 초기화
          </button>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 5: 타입 확인**

```bash
npx tsc --noEmit
```
기대: `marathon-content.tsx`의 기존 참조 오류만 남는다(Task 5에서 해소). 새 파일 3개에는 오류가 없어야 한다.

- [ ] **Step 6: 커밋**

```bash
git add src/components/marathon/marathon-row.tsx src/components/marathon/marathon-band.tsx src/components/marathon/marathon-chips.tsx src/components/marathon/marathon-list.module.css
git commit -m "feat(marathon): 행·밴드·칩 컴포넌트"
```

---

### Task 5: 목록 조립 + 오늘 날짜 처리

**Files:**
- Modify: `src/components/marathon/marathon-content.tsx`
- Modify: `src/app/(main)/marathon/page.tsx`

**Interfaces:**
- Consumes: Task 1~4 전부

**핵심 함정**: 이 사이트는 `output: export` SSG라 **빌드 시점 날짜가 정적 HTML에 굳는다.** 배포가 없으면 밴드가 낡는다. 서버는 빌드 시점 날짜로 렌더하고(SEO·no-JS), 마운트 후 진짜 오늘로 다시 계산한다.

- [ ] **Step 1: `marathon-content.tsx` 전체를 아래로 교체**

```tsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import type { MarathonEvent } from '@/types/marathon';
import { useMarathonFilters } from '@/hooks/useMarathonFilters';
import { groupIntoBands } from '@/lib/marathon/bands';
import { MarathonChips } from './marathon-chips';
import { MarathonBand } from './marathon-band';
import styles from './marathon-list.module.css';

/** 접수중 밴드 아래 고정. 상태는 사람이 확인한 값이라 재확인을 유도한다. */
const VERIFY_NOTE =
  '접수 상태는 공식 발표를 수동 확인한 값입니다. 신청 전 공식 페이지에서 다시 확인하세요.';

interface MarathonContentProps {
  events: MarathonEvent[];
  /** 빌드 시점 날짜 'YYYY-MM-DD'. 서버 렌더와 하이드레이션 첫 렌더가 이 값을 쓴다 */
  buildDate: string;
}

export function MarathonContent({ events, buildDate }: MarathonContentProps) {
  /**
   * `output: export` SSG라 빌드 시점 날짜가 정적 HTML에 굳는다. 배포가 없으면 밴드가 낡는다.
   * 서버·하이드레이션 첫 렌더는 buildDate 로 맞추고(불일치 방지), 마운트 후 진짜 오늘로 바꾼다.
   */
  const [today, setToday] = useState(buildDate);
  useEffect(() => {
    const now = new Date();
    const iso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    if (iso !== buildDate) setToday(iso);
  }, [buildDate]);

  const {
    filters,
    filteredEvents,
    counts,
    activeFilterCount,
    setSearchQuery,
    toggleRegionGroup,
    toggleDistance,
    toggleMajorOnly,
    resetFilters,
  } = useMarathonFilters(events);

  const bands = useMemo(() => groupIntoBands(filteredEvents, today), [filteredEvents, today]);
  const hasAny = filteredEvents.length > 0;

  return (
    <div>
      <MarathonChips
        filters={filters}
        counts={counts}
        activeFilterCount={activeFilterCount}
        setSearchQuery={setSearchQuery}
        toggleRegionGroup={toggleRegionGroup}
        toggleDistance={toggleDistance}
        toggleMajorOnly={toggleMajorOnly}
        resetFilters={resetFilters}
      />

      {!hasAny ? (
        <p className={styles.empty}>
          조건에 맞는 대회가 없습니다.{' '}
          <button type="button" className={styles.reset} onClick={resetFilters}>
            필터 초기화
          </button>
        </p>
      ) : (
        bands.map((band) => (
          <MarathonBand
            key={band.id}
            band={band}
            today={today}
            defaultOpen={band.id === 'open' || band.id === 'upcoming'}
            note={band.id === 'open' ? VERIFY_NOTE : undefined}
          />
        ))
      )}
    </div>
  );
}
```

- [ ] **Step 2: 페이지에서 빌드 날짜와 지표 전달**

`src/app/(main)/marathon/page.tsx`의 `export default function MarathonPage()` 안에서
`marathonStats` 정의를 아래로 교체하고, `<MarathonContent events={events} />` 를 `buildDate`도 넘기게 바꾼다.

```tsx
  const events = getMarathonEvents();
  const majorEvents = getMajorEvents();

  // 빌드 시점 날짜. 클라이언트가 마운트 후 진짜 오늘로 다시 계산한다.
  const now = new Date();
  const buildDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  // 히어로 지표 — 전부 데이터에서 산출한다(하드코딩 금지)
  const bands = groupIntoBands(events, buildDate);
  const openCount = bands.find((b) => b.id === 'open')?.events.length ?? 0;
  const thisMonth = events.filter((e) => e.date >= buildDate && e.date.slice(0, 7) === buildDate.slice(0, 7)).length;
  const nextMonthKey = (() => {
    const d = new Date(`${buildDate}T00:00:00Z`);
    d.setUTCMonth(d.getUTCMonth() + 1);
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
  })();
  const nextMonth = events.filter((e) => e.date.slice(0, 7) === nextMonthKey).length;

  const marathonStats = [
    { label: '접수중', value: `${openCount}` },
    { label: '이번 달', value: `${thisMonth}` },
    { label: '다음 달', value: `${nextMonth}` },
  ];
```

파일 상단 import에 아래를 더한다.

```tsx
import { groupIntoBands } from '@/lib/marathon/bands';
```

그리고 렌더부의 `<MarathonContent events={events} />` 를 바꾼다.

```tsx
<MarathonContent events={events} buildDate={buildDate} />
```

- [ ] **Step 3: 빌드와 정적 HTML 검증**

```bash
set -o pipefail && npx tsc --noEmit && npm run build
```

```bash
# 대회 링크 100개가 정적 HTML에 남아 있는가
grep -o 'href="/marathon/[^"]*"' out/marathon.html | sort -u | wc -l
# 기대: 100

# 첫 행이 오늘 이후인가 (지난 대회가 먼저 나오지 않는가)
grep -o '지금 접수중' out/marathon.html | head -1
# 기대: 출력 있음

# 정렬 옵션이 사라졌는가
grep -c '날짜 빠른순\|이름순' out/marathon.html
# 기대: 0
```

- [ ] **Step 4: 커밋**

```bash
git add src/components/marathon/marathon-content.tsx "src/app/(main)/marathon/page.tsx"
git commit -m "feat(marathon): 시점 밴드 목록 조립 — 빌드 날짜 렌더 후 클라이언트 재계산"
```

---

### Task 6: 상세 페이지 확인일 + validate 규칙

**Files:**
- Modify: `src/app/(detail)/marathon/[id]/page.tsx`
- Modify: `scripts/validate.js`

**Interfaces:**
- Consumes: `lastVerified`·`registrationEnd`(Task 1의 타입 추가)

- [ ] **Step 1: 상세 페이지에 확인일 표기**

`src/app/(detail)/marathon/[id]/page.tsx` 의 **접수 상태 배지 블록**(약 384~391행)을 찾는다.
현재 코드는 이렇다.

```tsx
            <div className="rounded-[4px] bg-surface p-3">
              <dt className="text-xs text-secondary mb-1">접수 상태</dt>
              <dd>
                <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[event.status]}`}>
                  {event.status}
                </span>
              </dd>
            </div>
```

`</dd>` 다음, `</div>` 앞에 확인일 한 줄을 넣는다.

```tsx
              </dd>
              {event.lastVerified && (
                <p className="mt-1.5 text-[11px] leading-snug text-secondary">
                  {event.lastVerified.replace(/-/g, '.')} 확인 · 신청 전 공식 페이지에서 다시 확인하세요.
                </p>
              )}
            </div>
```

`lastVerified` 가 없는 대회에는 **아무것도 그리지 않는다** — 확인하지 않은 것을 확인한 것처럼
보이게 하지 않는다.

- [ ] **Step 2: validate 규칙 추가**

`scripts/validate.js` 의 마라톤 검증 블록에서 **month 불일치 검사 바로 다음**에 넣는다.
그 검사는 이렇게 끝난다(약 358~363행).

```js
        // month가 date와 어긋남 (필터링이 깨짐)
        const monthFromDate = `${parseInt(date.slice(5, 7), 10)}월`;
        if (month !== monthFromDate) {
          error(`[marathon] ${name}: month('${month}')가 date(${date} → ${monthFromDate})와 불일치`);
          marathonOk = false;
        }
```

그 아래에 아래를 더한다. 이 블록은 이미 `pick()` 헬퍼와 `name` · `date` · `error()` · `marathonOk`
를 갖고 있으므로 그대로 쓴다.

```js
        // 접수 마감일이 대회일보다 뒤일 수는 없다 (논리적으로 불가능한 값)
        const regEnd = pick(/registrationEnd:\s*'([^']+)'/);
        if (regEnd && regEnd > date) {
          error(`[marathon] ${name}: registrationEnd(${regEnd})가 개최일(${date})보다 늦습니다`);
          marathonOk = false;
        }
```

경고(`warn`)가 아니라 **에러(`error`)** 다 — 논리적으로 불가능한 값이라 커밋을 막아야 한다.

- [ ] **Step 3: 검증**

```bash
set -o pipefail && npx tsc --noEmit && npm run validate && npm run build
```
기대: validate 에러 0 (경고 9건은 기존 항목)

- [ ] **Step 4: 커밋**

```bash
git add "src/app/(detail)/marathon/[id]/page.tsx" scripts/validate.js
git commit -m "feat(marathon): 상세에 접수 확인일 표기 + registrationEnd 검증 규칙"
```

---

### Task 7: 브라우저 실측 검증

**Files:**
- Create: `docs/superpowers/design/qa-marathon-discovery.md`

스펙 §7의 검증 기준을 실제 빌드 결과에 대해 확인한다.

- [ ] **Step 1: 빌드 후 서버 띄우기**

```bash
set -o pipefail && npm run build && npx serve out -l 4321
```
`next start`는 쓰지 않는다 — 이 프로젝트는 `output: export`라 동작하지 않는다.

- [ ] **Step 2: 폭별 실측**

`http://localhost:4321/marathon` 에서 1440 / 768 / 390 / 360 폭으로 확인한다.

| 항목 | 기준 |
|---|---|
| 첫 화면 첫 행 | 오늘 이후 날짜 |
| 기본 펼침 밴드 | 접수중 · 곧 열림 2개 |
| 접힌 밴드 | 접수 마감 · 지난 대회 |
| 밴드 합계 | 입력 대회 수와 일치(누락·중복 0) |
| 가로 스크롤 | 전 폭에서 없음 |
| 칩 최소 높이 | 44px |
| 확장 버튼 | 12행씩 증가, 마지막 단계 문구가 `전체 N개 보기` |

브라우저 콘솔에서:

```js
// 밴드 합계 = 전체
[...document.querySelectorAll('[class*="_bandCount__"], [class*="_folded__"] summary span:last-child')]
  .map(el => +el.textContent).reduce((a,b) => a+b, 0)

// 첫 행 날짜
document.querySelector('[class*="_row__"] [class*="_date__"]').textContent
```

- [ ] **Step 3: 필터 동작 확인**

- 검색창에 대회명 일부 입력 → 해당 대회만 남는가(디바운스 300ms)
- 권역 `수도권` 선택 → 결과가 줄고 밴드 합계도 함께 줄어드는가
- 거리 `10K` 선택 → **11K·12K 대회가 포함되는가**(Task 2 매핑이 화면까지 닿는가)
- `메이저만` 선택 → `isMajor` 대회만 남는가
- `필터 초기화` → 전체 복귀

- [ ] **Step 4: 대회 상세 회귀 확인**

대회 상세 한 곳을 열어 **`MarathonShoeBridge`(신발·젤 추천 카드)가 그대로 렌더되는지** 확인한다.
수익 동선이라 이번 변경으로 깨지면 안 된다.

- [ ] **Step 5: 체크리스트 작성 후 커밋**

```bash
git add docs/superpowers/design/qa-marathon-discovery.md
git commit -m "qa(marathon): 대회 탐색 개편 실측 체크리스트"
```

---

## 완료 조건

Task 7까지 마친 뒤 아래를 전부 확인한다.

1. 8월 방문자가 첫 화면에서 **오늘 이후 대회**를 본다
2. 접수중·곧 열림 두 밴드가 펼쳐져 있다
3. 접수 마감·지난 대회는 접혀 있으나 마크업에 남아 있다
4. 정적 HTML에 대회 링크 100개가 보존된다
5. 밴드 합계가 전체 대회 수와 일치한다(누락·중복 0)
6. `10K` 필터에 11K·12K 대회가 포함된다
7. 정렬 옵션이 사라졌다 (검색은 남아 있다)
8. 접수중 밴드 아래 재확인 문구가 있다
9. `registrationEnd`가 있는 대회는 `D-N 마감`으로 표기된다
10. `lastVerified`가 있는 대회만 상세에 확인일이 표기된다
11. `registrationEnd > date` 이면 `npm run validate`가 에러로 막는다
12. 1440/768/390/360 에서 가로 스크롤이 없다
13. 대회 상세의 `MarathonShoeBridge`가 그대로 동작한다
14. tsc 0 · test 통과 · lint 0 error · validate 에러 0 · build 성공

## 참조를 잃는 파일 (삭제하지 않는다)

- `src/components/marathon/marathon-event-card.tsx`
- `src/components/marathon/marathon-filter-panel.tsx`
- `src/components/marathon/marathon-stats-bar.tsx`

임포트되지 않아 번들에서는 빠지지만 파일은 남긴다. 홈 개편에서도 같은 판단을 했고,
"필터가 얕아졌다"는 피드백이 오면 되살릴 코드가 있어야 한다.
**피드백 없이 4주가 지나면 삭제**를 판단한다.
