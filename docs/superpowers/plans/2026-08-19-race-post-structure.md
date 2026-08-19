# 대회 글 구성 표준 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 대회 글에 `raceMeta` 데이터를 두고, 상태 배지·행동 스트립·핵심 카드·차별점 블록을 고정 골격으로 렌더해 접수 정보 5중 반복을 없앤다.

**Architecture:** `BlogPost`에 옵셔널 `raceMeta`를 추가하고, 이 필드를 가진 글만 새 골격으로 렌더한다. 기존 70편은 필드가 없어 자동으로 영향 밖이다. 상태는 손으로 적지 않고 날짜에서 파생하며, D-day는 SSG 빌드 시점 고정을 피하려고 클라이언트에서 계산한다. 검증은 `raceMeta` 보유 글에만 적용되는 tsx 스크립트를 `npm run validate`가 호출하는 방식으로 강제한다.

**Tech Stack:** Next.js 15 App Router (SSG) · React 19 · TypeScript 5.4 · Vitest 4 (environment: node) · tsx

**Spec:** `docs/superpowers/specs/2026-08-19-race-post-structure-design.md`
**시안:** `docs/superpowers/design/2026-08-19-race-page-mockup.html`

## Global Constraints

- **새 표준은 `raceMeta` 를 가진 글에만 적용된다.** 기존 글 본문·slug·메타를 수정하지 않는다 (Task 6은 예외 — 브릿지 조건은 전체 적용).
- **검증 체인**: 코드 변경 후 `npm run build`. 데이터·검증 변경 후 `npm run validate && npm test && npm run build`. 빌드를 통과하지 못하면 완료로 보고하지 않는다.
- **날짜는 전부 KST 기준 문자열**이다. `'2026-12-06'` 또는 `'2026-08-24T10:00'`. UTC로 해석하면 D-day가 하루 어긋난다.
- **`'use client'` 컴포넌트는 모듈 스코프에서 데이터 getter를 호출하지 않는다.** prop만 받는다. (과거 `header.tsx` 가 `getSearchIndex()` 를 모듈 스코프에서 불러 layout 청크가 712.6KB가 된 이력이 있다.)
- **이미지를 생성하지 않는다.** 카드·프로파일은 전부 HTML/SVG 마크업이다.
- **고도 수치가 공개되지 않은 대회는 프로파일을 그리지 않는다.** 추정으로 그린 산 모양은 실측처럼 읽힌다.
- **테스트는 순수 함수만 가능하다.** `vitest.config.ts` 의 `environment: "node"` 이고 testing-library가 없다. 컴포넌트는 얇게 두고 로직을 `src/lib/blog/` 로 뽑는다.
- 커밋 메시지는 한국어, `type(scope): 제목` 형식. 본문에 왜를 적는다.

---

### Task 1: 타입 정의 + 상태 파생 순수 함수

**Files:**
- Modify: `src/types/blog.ts` (`BlogPost` 인터페이스, `BlogPostMeta` 타입)
- Create: `src/lib/blog/race-status.ts`
- Test: `src/lib/__tests__/race-status.test.ts`

**Interfaces:**
- Consumes: 없음 (첫 태스크)
- Produces:
  - `RaceFact`, `RaceHighlight`, `RaceElevationPoint`, `RaceMeta` (from `@/types/blog`)
  - `RaceStatusKind = 'tbd' | 'upcoming' | 'open' | 'closed' | 'past'`
  - `RaceStatus = { kind: RaceStatusKind; label: string; daysUntil: number | null }`
  - `deriveRaceStatus(meta: RaceMeta, now: Date): RaceStatus`
  - `parseKst(value: string): Date`

- [ ] **Step 1: 타입을 추가한다**

`src/types/blog.ts` 의 `BlogEvent` 인터페이스 **아래**에 붙인다:

```typescript
/** 대회 핵심 카드 한 장 */
export interface RaceFact {
  label: string;   // '대회일'
  value: string;   // '12월 6일'
  sub?: string;    // '일 · 07:30'
}

/** 이 대회만의 것 한 항목 */
export interface RaceHighlight {
  badge: string;   // '3×' · '12월' · '국내 유일' — 순번(01/02/03) 금지
  title: string;
  desc: string;
}

/** 고도 프로파일 한 점 */
export interface RaceElevationPoint {
  km: number;
  m: number;
}

/**
 * 대회 글 구조 데이터. 이 필드가 있는 글만 새 구성 표준으로 렌더되고
 * validate 검사 대상이 된다. 기존 글은 필드가 없어 영향받지 않는다.
 * 날짜는 전부 KST 기준 문자열 — 'YYYY-MM-DD' 또는 'YYYY-MM-DDTHH:mm'.
 */
export interface RaceMeta {
  /** 화면용 제목. 검색용 `title` 과 별개이며 40자 이하 */
  displayTitle: string;
  displaySubtitle?: string;
  raceDate: string;
  registrationStart?: string;
  registrationEnd?: string;
  registrationVia?: string;
  action?: { what: string; how: string };
  facts: RaceFact[];
  highlights: RaceHighlight[];
  elevation?: RaceElevationPoint[];
  /** 고도 수치의 출처. elevation 이 있으면 반드시 함께 적는다 */
  elevationSource?: string;
  marathonId?: string;
}
```

`BlogPost` 인터페이스의 `event?: BlogEvent;` **아래**에 한 줄 추가:

```typescript
  raceMeta?: RaceMeta;
```

- [ ] **Step 2: 목록 페이로드에서 `raceMeta` 를 제외한다**

`BlogPostMeta` 는 `Omit<BlogPost, 'content' | 'thumbnail'>` 이라 그대로 두면 `raceMeta` 가 `/blog-index.json` 과 목록 직렬화에 전부 실린다. 이 프로젝트는 번들 페이로드 이슈 이력이 있다.

`src/types/blog.ts` 에서 기존 정의를 이렇게 바꾼다:

```typescript
export type BlogPostMeta = Omit<BlogPost, 'content' | 'thumbnail' | 'raceMeta'> & {
  thumbnail: string | null;
};
```

`src/lib/data/blog/index.ts:17-20` 의 `toPostMeta` 도 함께 바꾼다:

```typescript
export function toPostMeta(post: BlogPost): BlogPostMeta {
  const { content, thumbnail, raceMeta, ...rest } = post;
  void raceMeta; // 목록 페이로드에서 의도적으로 제외 — 상세 페이지만 쓴다
  return { ...rest, thumbnail: thumbnail ?? extractThumbnail(content) };
}
```

- [ ] **Step 3: 실패하는 테스트를 쓴다**

`src/lib/__tests__/race-status.test.ts` 를 만든다:

```typescript
import { describe, it, expect } from 'vitest';
import { deriveRaceStatus, parseKst } from '@/lib/blog/race-status';
import type { RaceMeta } from '@/types/blog';

const base: RaceMeta = {
  displayTitle: '부산브릿지마라톤',
  raceDate: '2026-12-06',
  facts: [],
  highlights: [],
};

describe('parseKst', () => {
  it('날짜만 오면 KST 자정으로 읽는다', () => {
    // KST 2026-08-24 00:00 == UTC 2026-08-23 15:00
    expect(parseKst('2026-08-24').toISOString()).toBe('2026-08-23T15:00:00.000Z');
  });

  it('시각이 붙으면 KST 그 시각으로 읽는다', () => {
    expect(parseKst('2026-08-24T10:00').toISOString()).toBe('2026-08-24T01:00:00.000Z');
  });
});

describe('deriveRaceStatus', () => {
  it('접수 시작이 미정이면 tbd', () => {
    const s = deriveRaceStatus(base, parseKst('2026-08-19'));
    expect(s.kind).toBe('tbd');
    expect(s.daysUntil).toBeNull();
  });

  it('접수 시작 전이면 upcoming 이고 D-n 을 센다', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00' };
    const s = deriveRaceStatus(meta, parseKst('2026-08-19T09:00'));
    expect(s.kind).toBe('upcoming');
    expect(s.daysUntil).toBe(5);
    expect(s.label).toBe('접수 D-5');
  });

  it('D-day 는 시각이 아니라 KST 날짜로 센다', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00' };
    // 23시 59분이어도 같은 날이면 D-5
    const s = deriveRaceStatus(meta, parseKst('2026-08-19T23:59'));
    expect(s.daysUntil).toBe(5);
  });

  it('접수 기간 중이면 open', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00', registrationEnd: '2026-09-30' };
    const s = deriveRaceStatus(meta, parseKst('2026-09-01'));
    expect(s.kind).toBe('open');
    expect(s.label).toBe('접수중');
  });

  it('마감일이 없으면 시작 이후는 계속 open — 선착순 대회', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00' };
    const s = deriveRaceStatus(meta, parseKst('2026-11-01'));
    expect(s.kind).toBe('open');
  });

  it('마감일이 지나면 closed', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00', registrationEnd: '2026-09-30' };
    const s = deriveRaceStatus(meta, parseKst('2026-10-01'));
    expect(s.kind).toBe('closed');
  });

  it('대회일이 지나면 past 가 모든 것을 이긴다', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00' };
    const s = deriveRaceStatus(meta, parseKst('2026-12-07'));
    expect(s.kind).toBe('past');
  });

  it('접수 시작 당일이면 open', () => {
    const meta = { ...base, registrationStart: '2026-08-24T10:00' };
    const s = deriveRaceStatus(meta, parseKst('2026-08-24T10:00'));
    expect(s.kind).toBe('open');
  });
});
```

- [ ] **Step 4: 테스트가 실패하는지 확인한다**

Run: `npx vitest run src/lib/__tests__/race-status.test.ts`
Expected: FAIL — `Failed to resolve import "@/lib/blog/race-status"`

- [ ] **Step 5: 최소 구현을 쓴다**

`src/lib/blog/race-status.ts` 를 만든다:

```typescript
import type { RaceMeta } from '@/types/blog';

export type RaceStatusKind = 'tbd' | 'upcoming' | 'open' | 'closed' | 'past';

export interface RaceStatus {
  kind: RaceStatusKind;
  /** 배지에 그대로 쓰는 문구 */
  label: string;
  /** 접수 시작까지 남은 일수. upcoming 이 아니면 null */
  daysUntil: number | null;
}

const KST_OFFSET_MS = 9 * 60 * 60 * 1000;
const DAY_MS = 86_400_000;

/**
 * KST 기준 날짜 문자열을 Date 로 읽는다.
 * 'YYYY-MM-DD' → 그 날 KST 자정, 'YYYY-MM-DDTHH:mm' → KST 그 시각.
 * 오프셋을 명시하지 않으면 실행 환경의 타임존을 타서 D-day 가 하루 어긋난다.
 */
export function parseKst(value: string): Date {
  const withTime = value.includes('T') ? value : `${value}T00:00`;
  return new Date(`${withTime}+09:00`);
}

/** KST 자정 기준 일련 번호 — 두 시각의 '며칠 차이'를 시각과 무관하게 센다 */
function kstDayIndex(d: Date): number {
  return Math.floor((d.getTime() + KST_OFFSET_MS) / DAY_MS);
}

/**
 * 상태를 날짜에서 파생한다. 수동 status 필드를 두지 않는 이유는
 * 손으로 적은 값이 반드시 낡기 때문이다 — 라이브에 D-12 가 일주일 틀린 채 서 있었다.
 */
export function deriveRaceStatus(meta: RaceMeta, now: Date): RaceStatus {
  const raceDay = parseKst(meta.raceDate);

  if (now.getTime() > raceDay.getTime() + DAY_MS) {
    return { kind: 'past', label: '종료', daysUntil: null };
  }

  if (!meta.registrationStart) {
    return { kind: 'tbd', label: '접수 미정', daysUntil: null };
  }

  const start = parseKst(meta.registrationStart);

  if (now.getTime() < start.getTime()) {
    const days = kstDayIndex(start) - kstDayIndex(now);
    return { kind: 'upcoming', label: `접수 D-${days}`, daysUntil: days };
  }

  if (meta.registrationEnd) {
    const end = parseKst(meta.registrationEnd);
    // 마감일은 그 날 끝까지 유효하다
    if (now.getTime() > end.getTime() + DAY_MS) {
      return { kind: 'closed', label: '접수 마감', daysUntil: null };
    }
  }

  return { kind: 'open', label: '접수중', daysUntil: null };
}
```

- [ ] **Step 6: 테스트 통과를 확인한다**

Run: `npx vitest run src/lib/__tests__/race-status.test.ts`
Expected: PASS — 9 tests

- [ ] **Step 7: 전체 검증**

Run: `npm test && npm run build`
Expected: 기존 115 + 신규 9 = 124 tests 통과 · 빌드 통과

- [ ] **Step 8: 커밋**

```bash
git add src/types/blog.ts src/lib/blog/race-status.ts src/lib/__tests__/race-status.test.ts src/lib/data/blog/index.ts
git commit -m "feat(blog): raceMeta 타입 + 날짜 기반 상태 파생

상태를 수동 필드로 두지 않는다. 라이브 마감 스트립이 D-12로 서 있는데
실제로는 D-5였다 — 손으로 적은 값은 낡는다.

목록 페이로드(BlogPostMeta)에서는 raceMeta를 제외했다.
Omit에 안 넣으면 /blog-index.json에 전부 실린다."
```

---

### Task 2: RaceStatusBadge — 유일한 클라이언트 컴포넌트

**Files:**
- Create: `src/components/blog/race/race-status-badge.tsx`

**Interfaces:**
- Consumes: `deriveRaceStatus`, `RaceStatus`, `RaceStatusKind` (Task 1), `RaceMeta` (Task 1)
- Produces: `<RaceStatusBadge meta={raceMeta} />` — default export 아님, named export `RaceStatusBadge`

- [ ] **Step 1: 컴포넌트를 만든다**

`src/components/blog/race/race-status-badge.tsx`:

```tsx
'use client';

import { useEffect, useState } from 'react';
import type { RaceMeta } from '@/types/blog';
import { deriveRaceStatus, type RaceStatusKind } from '@/lib/blog/race-status';

/**
 * 상태 배지 — 이 파일이 이 기능의 유일한 클라이언트 컴포넌트다.
 *
 * SSG라 빌드 시점에 D-day를 굳히면 다음 배포까지 낡는다(그 사고가 실제로 있었다).
 * 그래서 브라우저의 현재 시각으로 계산한다. 서버 렌더 시점에는 날짜 텍스트만
 * 보여주므로 JS가 없어도 정보는 남는다.
 *
 * ⚠️ 모듈 스코프에서 데이터 getter를 부르지 않는다 — prop만 받는다.
 */
export function RaceStatusBadge({ meta }: { meta: RaceMeta }) {
  const [kind, setKind] = useState<RaceStatusKind | null>(null);
  const [label, setLabel] = useState<string>('');

  useEffect(() => {
    const s = deriveRaceStatus(meta, new Date());
    setKind(s.kind);
    setLabel(s.label);
  }, [meta]);

  // hydration 전 — 날짜 텍스트로 대체한다
  if (kind === null) {
    const fallback = meta.registrationStart
      ? `접수 ${meta.registrationStart.slice(5, 10).replace('-', '월 ')}일`
      : '접수 미정';
    return <span className="race-badge race-badge--tbd">{fallback}</span>;
  }

  return (
    <span className={`race-badge race-badge--${kind}`}>
      {kind === 'open' && <span className="race-badge__pulse" aria-hidden="true" />}
      {label}
    </span>
  );
}
```

- [ ] **Step 2: 스타일을 추가한다**

`src/app/globals.css` 맨 아래에 붙인다. 색은 전부 기존 토큰을 쓴다 — 새 색을 만들지 않는다:

```css
/* ── 대회 글 상태 배지 ── */
.race-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 9px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.02em;
  white-space: nowrap;
}
.race-badge--open { background: var(--accent); color: #fff; }
.race-badge--upcoming { background: var(--warn-soft, #FBF3E4); color: var(--warning-dark); border: 1px solid currentColor; }
.race-badge--tbd { background: var(--surface-strong); color: var(--tertiary); border: 1px solid var(--border); }
.race-badge--closed,
.race-badge--past { background: var(--surface-strong); color: var(--tertiary); border: 1px solid var(--border); }

.race-badge__pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: race-badge-pulse 2s ease-in-out infinite;
}
@keyframes race-badge-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
@media (prefers-reduced-motion: reduce) {
  .race-badge__pulse { animation: none; }
}
```

- [ ] **Step 3: `--warn-soft` 토큰이 있는지 확인한다**

Run: `grep -n "warn-soft\|warning-dark" src/app/globals.css`
Expected: `--warning-dark` 는 존재한다. `--warn-soft` 가 없으면 `:root` 블록에 `--warn-soft: #FBF3E4;` 를 추가하고, 다크 모드 블록(`.dark` 또는 `prefers-color-scheme`)에도 `--warn-soft: #2A2113;` 을 추가한다.

- [ ] **Step 4: 빌드 확인**

Run: `npm run build`
Expected: 빌드 통과. 아직 어디서도 쓰지 않으므로 렌더 변화는 없다.

- [ ] **Step 5: 커밋**

```bash
git add src/components/blog/race/race-status-badge.tsx src/app/globals.css
git commit -m "feat(blog): 대회 상태 배지 — 브라우저 시각으로 D-day 계산

SSG라 빌드 시점에 굳히면 다음 배포까지 낡는다.
hydration 전에는 날짜 텍스트를 보여줘 JS 없이도 정보가 남는다."
```

---

### Task 3: 정적 블록 3종 — 행동 스트립·핵심 카드·차별점

**Files:**
- Create: `src/components/blog/race/race-action-strip.tsx`
- Create: `src/components/blog/race/race-fact-grid.tsx`
- Create: `src/components/blog/race/race-highlights.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `RaceMeta`, `RaceFact`, `RaceHighlight` (Task 1)
- Produces:
  - `<RaceActionStrip meta={raceMeta} />`
  - `<RaceFactGrid facts={raceMeta.facts} />`
  - `<RaceHighlights items={raceMeta.highlights} />`

셋 다 서버 컴포넌트다 (`'use client'` 없음). 로직이 없어 테스트하지 않고 빌드+육안으로 검증한다.

- [ ] **Step 1: 행동 스트립**

`src/components/blog/race/race-action-strip.tsx`:

```tsx
import type { RaceMeta } from '@/types/blog';
import { RaceStatusBadge } from './race-status-badge';

/**
 * "지금 할 행동 하나". 접수 정보를 나열하지 않는다 —
 * 그건 핵심 카드와 요강표가 한다. 여기는 지시 한 줄이다.
 */
export function RaceActionStrip({ meta }: { meta: RaceMeta }) {
  if (!meta.action) return null;

  return (
    <aside className="race-action">
      <div className="race-action__when">
        <RaceStatusBadge meta={meta} />
        {meta.registrationStart && (
          <span className="race-action__at">{formatKstLabel(meta.registrationStart)}</span>
        )}
      </div>
      <p className="race-action__what">{meta.action.what}</p>
      <p className="race-action__how">{meta.action.how}</p>
      {meta.registrationVia && (
        <p className="race-action__via">접수처 · {meta.registrationVia}</p>
      )}
    </aside>
  );
}

/** '2026-08-24T10:00' → '8월 24일 10:00' */
function formatKstLabel(value: string): string {
  const [date, time] = value.split('T');
  const [, mm, dd] = date.split('-');
  const month = Number(mm);
  const day = Number(dd);
  return time ? `${month}월 ${day}일 ${time}` : `${month}월 ${day}일`;
}
```

- [ ] **Step 2: 핵심 카드 그리드**

`src/components/blog/race/race-fact-grid.tsx`:

```tsx
import type { RaceFact } from '@/types/blog';

/** 대회 핵심 정보 4~6장. 썸네일이 제목을 반복하던 자리를 대신한다. */
export function RaceFactGrid({ facts }: { facts: RaceFact[] }) {
  if (facts.length === 0) return null;

  return (
    <dl className="race-facts">
      {facts.map((f) => (
        <div className="race-facts__item" key={f.label}>
          <dt className="race-facts__k">{f.label}</dt>
          <dd className="race-facts__v">
            {f.value}
            {f.sub && <small>{f.sub}</small>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
```

- [ ] **Step 3: 차별점 블록**

`src/components/blog/race/race-highlights.tsx`:

```tsx
import type { RaceHighlight } from '@/types/blog';

/**
 * "이 대회만의 것". 위치를 고정하는 이유는 글마다 다르게 두면
 * 표준화 목적이 무너지기 때문이다 — 지금 세 글이 서로 다르게 쓰여 있다.
 */
export function RaceHighlights({ items }: { items: RaceHighlight[] }) {
  if (items.length === 0) return null;

  return (
    <section className="race-why">
      <h2 className="race-why__head">이 대회만의 것</h2>
      <ul className="race-why__list">
        {items.map((h) => (
          <li className="race-why__item" key={h.title}>
            <span className="race-why__badge">{h.badge}</span>
            <div>
              <p className="race-why__title">{h.title}</p>
              <p className="race-why__desc">{h.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 4: 스타일**

`src/app/globals.css` 의 배지 스타일 아래에 붙인다:

```css
/* ── 대회 글 블록 ── */
.race-action {
  background: var(--navy);
  color: var(--bg-warm);
  border-radius: 8px;
  padding: 14px 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.race-action__when { display: flex; align-items: center; gap: 9px; flex-wrap: wrap; }
.race-action__at { font-size: 12px; opacity: 0.78; font-variant-numeric: tabular-nums; }
.race-action__what { margin: 0; font-size: 16px; font-weight: 800; letter-spacing: -0.01em; }
.race-action__how { margin: 0; font-size: 13px; opacity: 0.75; line-height: 1.55; }
.race-action__via { margin: 0; font-size: 11.5px; opacity: 0.6; }

.race-facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  margin: 0;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}
@media (min-width: 640px) { .race-facts { grid-template-columns: repeat(3, 1fr); } }
.race-facts__item {
  background: var(--surface);
  padding: 11px 12px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.race-facts__k {
  font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--tertiary); font-weight: 700;
}
.race-facts__v {
  margin: 0; font-size: 16px; font-weight: 800; letter-spacing: -0.02em;
  line-height: 1.2; font-variant-numeric: tabular-nums;
}
.race-facts__v small {
  font-size: 11px; font-weight: 600; color: var(--secondary);
  letter-spacing: 0; margin-left: 3px;
}

.race-why__head {
  font-size: 17px; font-weight: 800; letter-spacing: -0.015em;
  padding-bottom: 5px; border-bottom: 2px solid var(--primary); margin-bottom: 12px;
}
.race-why__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 9px; }
.race-why__item {
  display: flex; gap: 11px; align-items: flex-start;
  background: var(--surface); border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: 6px; padding: 11px 13px;
}
.race-why__badge {
  font-size: 19px; font-weight: 800; color: var(--accent);
  line-height: 1.15; letter-spacing: -0.03em; flex: none; min-width: 34px;
}
.race-why__title { margin: 0; font-size: 14px; font-weight: 800; letter-spacing: -0.01em; }
.race-why__desc { margin: 3px 0 0; font-size: 13px; color: var(--secondary); line-height: 1.55; }
```

- [ ] **Step 5: 빌드 확인**

Run: `npm run build`
Expected: 통과

- [ ] **Step 6: 커밋**

```bash
git add src/components/blog/race/ src/app/globals.css
git commit -m "feat(blog): 대회 글 블록 3종 — 행동 스트립·핵심 카드·차별점

차별점 블록의 위치를 고정한다. 글마다 다르게 두면 표준화 목적이 무너진다 —
실제로 지금 세 글이 서로 다르게 쓰여 있다."
```

---

### Task 4: 고도 프로파일 SVG (옵셔널)

**Files:**
- Create: `src/lib/blog/elevation-path.ts`
- Create: `src/components/blog/race/race-elevation.tsx`
- Test: `src/lib/__tests__/elevation-path.test.ts`
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `RaceElevationPoint` (Task 1)
- Produces:
  - `buildElevationPath(points: RaceElevationPoint[], width: number, height: number): { line: string; area: string; minM: number; maxM: number }`
  - `<RaceElevation points={...} source={...} />`

- [ ] **Step 1: 실패하는 테스트를 쓴다**

`src/lib/__tests__/elevation-path.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { buildElevationPath } from '@/lib/blog/elevation-path';

describe('buildElevationPath', () => {
  it('점이 2개 미만이면 빈 경로를 준다', () => {
    const r = buildElevationPath([{ km: 0, m: 10 }], 100, 40);
    expect(r.line).toBe('');
    expect(r.area).toBe('');
  });

  it('첫 점은 왼쪽 끝, 마지막 점은 오른쪽 끝에 놓는다', () => {
    const r = buildElevationPath(
      [{ km: 0, m: 0 }, { km: 10, m: 0 }],
      100,
      40,
    );
    expect(r.line.startsWith('M 0')).toBe(true);
    expect(r.line).toContain('100');
  });

  it('최고점은 위(y=0), 최저점은 아래(y=height)에 놓는다', () => {
    const r = buildElevationPath(
      [{ km: 0, m: 0 }, { km: 5, m: 50 }, { km: 10, m: 0 }],
      100,
      40,
    );
    expect(r.minM).toBe(0);
    expect(r.maxM).toBe(50);
    // 중간 점(최고 고도)의 y가 0이어야 한다
    expect(r.line).toContain('50 0');
  });

  it('고도가 전부 같으면 0으로 나누지 않고 가운데 선을 그린다', () => {
    const r = buildElevationPath(
      [{ km: 0, m: 20 }, { km: 10, m: 20 }],
      100,
      40,
    );
    expect(r.line).toContain('20');
    expect(Number.isNaN(Number(r.line.match(/M 0 ([\d.]+)/)?.[1]))).toBe(false);
  });

  it('area 경로는 바닥까지 닫는다', () => {
    const r = buildElevationPath(
      [{ km: 0, m: 0 }, { km: 10, m: 10 }],
      100,
      40,
    );
    expect(r.area.endsWith('Z')).toBe(true);
    expect(r.area).toContain('40'); // 바닥 y
  });
});
```

- [ ] **Step 2: 실패 확인**

Run: `npx vitest run src/lib/__tests__/elevation-path.test.ts`
Expected: FAIL — 모듈 없음

- [ ] **Step 3: 구현**

`src/lib/blog/elevation-path.ts`:

```typescript
import type { RaceElevationPoint } from '@/types/blog';

export interface ElevationPath {
  /** 선 경로 */
  line: string;
  /** 바닥까지 닫은 면 경로 */
  area: string;
  minM: number;
  maxM: number;
}

/**
 * 고도 점들을 SVG 경로로 바꾼다. 순수 함수라 테스트 가능하고,
 * 이미지가 아니라 마크업이라 다크모드·반응형·갱신이 전부 따라온다.
 */
export function buildElevationPath(
  points: RaceElevationPoint[],
  width: number,
  height: number,
): ElevationPath {
  if (points.length < 2) {
    return { line: '', area: '', minM: 0, maxM: 0 };
  }

  const kms = points.map((p) => p.km);
  const ms = points.map((p) => p.m);
  const minKm = Math.min(...kms);
  const maxKm = Math.max(...kms);
  const minM = Math.min(...ms);
  const maxM = Math.max(...ms);

  const kmSpan = maxKm - minKm || 1;
  const mSpan = maxM - minM;

  const coords = points.map((p) => {
    const x = ((p.km - minKm) / kmSpan) * width;
    // 고도가 전부 같으면 0으로 나누게 되므로 가운데에 둔다
    const y = mSpan === 0 ? height / 2 : height - ((p.m - minM) / mSpan) * height;
    return `${round(x)} ${round(y)}`;
  });

  const line = `M ${coords.join(' L ')}`;
  const area = `${line} L ${round(width)} ${round(height)} L 0 ${round(height)} Z`;

  return { line, area, minM, maxM };
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}
```

- [ ] **Step 4: 통과 확인**

Run: `npx vitest run src/lib/__tests__/elevation-path.test.ts`
Expected: PASS — 5 tests

- [ ] **Step 5: 컴포넌트**

`src/components/blog/race/race-elevation.tsx`:

```tsx
import type { RaceElevationPoint } from '@/types/blog';
import { buildElevationPath } from '@/lib/blog/elevation-path';

const W = 600;
const H = 120;

/**
 * 고도 프로파일. 거리·고도는 사실 데이터라 저작권 대상이 아니다 —
 * 대회 공식 코스맵을 쓰지 않는 이유는 스펙 9-1절에 있다.
 *
 * ⚠️ 수치가 없으면 렌더하지 않는다. 추정으로 그린 산 모양은 실측처럼 읽힌다.
 */
export function RaceElevation({
  points,
  source,
}: {
  points: RaceElevationPoint[];
  source?: string;
}) {
  const { line, area, minM, maxM } = buildElevationPath(points, W, H);
  if (!line) return null;

  const lastKm = points[points.length - 1].km;

  return (
    <figure className="race-elev">
      <svg
        className="race-elev__svg"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={`고도 프로파일 — 최저 ${minM}m, 최고 ${maxM}m, 총 ${lastKm}km`}
      >
        <path className="race-elev__area" d={area} />
        <path className="race-elev__line" d={line} />
      </svg>
      <figcaption className="race-elev__cap">
        <span>최저 {minM}m · 최고 {maxM}m · {lastKm}km</span>
        {source && <span>출처 {source}</span>}
      </figcaption>
    </figure>
  );
}
```

- [ ] **Step 6: 스타일**

`src/app/globals.css` 에 붙인다:

```css
/* ── 고도 프로파일 ── */
.race-elev { margin: 0; display: flex; flex-direction: column; gap: 6px; }
.race-elev__svg {
  width: 100%; height: 120px; display: block;
  background: var(--surface); border: 1px solid var(--border); border-radius: 6px;
}
.race-elev__area { fill: var(--accent-soft); }
.race-elev__line { fill: none; stroke: var(--accent); stroke-width: 2; vector-effect: non-scaling-stroke; }
.race-elev__cap {
  display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap;
  font-size: 11px; color: var(--tertiary); font-variant-numeric: tabular-nums;
}
```

- [ ] **Step 7: 검증 + 커밋**

Run: `npm test && npm run build`
Expected: 124 + 5 = 129 tests 통과 · 빌드 통과

```bash
git add src/lib/blog/elevation-path.ts src/lib/__tests__/elevation-path.test.ts src/components/blog/race/race-elevation.tsx src/app/globals.css
git commit -m "feat(blog): 고도 프로파일 SVG — 공식 코스맵을 대신한다

거리·고도는 사실 데이터라 저작권 대상이 아니다(스펙 9-1절).
필요한 것은 지리적 정확도가 아니라 '오르막 3회'다.
수치가 없으면 렌더하지 않는다 — 추정으로 그린 산은 실측처럼 읽힌다."
```

---

### Task 5: 상세 페이지 통합

**Files:**
- Modify: `src/app/(detail)/blog/[slug]/page.tsx`

**Interfaces:**
- Consumes: Task 2·3·4의 컴포넌트 전부
- Produces: `raceMeta` 보유 글의 렌더 골격

- [ ] **Step 1: import 를 추가한다**

`page.tsx` 상단 import 블록(15행 `MarathonShoeBridge` 아래)에 붙인다:

```tsx
import { RaceActionStrip } from '@/components/blog/race/race-action-strip';
import { RaceFactGrid } from '@/components/blog/race/race-fact-grid';
import { RaceHighlights } from '@/components/blog/race/race-highlights';
import { RaceElevation } from '@/components/blog/race/race-elevation';
```

- [ ] **Step 2: 제목 영역을 분기한다**

`page.tsx:196-198` 이 현재 이렇다:

```tsx
          <h1 className="text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
```

`mb-6` 을 떼고(부제가 붙을 수 있으므로 래퍼가 간격을 맡는다) 이렇게 바꾼다:

```tsx
          <div className="mb-6">
            <h1 className="text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-tight">
              {post.raceMeta?.displayTitle ?? post.title}
            </h1>
            {post.raceMeta?.displaySubtitle && (
              <p className="race-subtitle">{post.raceMeta.displaySubtitle}</p>
            )}
          </div>
```

`generateMetadata` 와 JSON-LD(173~179행)는 **건드리지 않는다.** 검색 제목·구조화 데이터는 `post.title` 그대로여야 한다.

- [ ] **Step 3: 본문 앞에 골격을 넣는다**

`page.tsx:246-249` 가 본문을 렌더한다:

```tsx
            const segments = splitContentAtMidH2(withCdnImages(sanitized));
            // ...
                <div data-blog-content dangerouslySetInnerHTML={{ __html: seg }} />
```

이 본문 블록을 감싼 요소 **바로 위**(246행의 `const segments` 가 속한 IIFE 바깥)에 넣는다:

```tsx
{post.raceMeta && (
  <div className="race-frame">
    <RaceActionStrip meta={post.raceMeta} />
    <RaceFactGrid facts={post.raceMeta.facts} />
    {post.raceMeta.elevation && post.raceMeta.elevation.length >= 2 && (
      <RaceElevation
        points={post.raceMeta.elevation}
        source={post.raceMeta.elevationSource}
      />
    )}
    <RaceHighlights items={post.raceMeta.highlights} />
  </div>
)}
```

- [ ] **Step 4: 스타일**

`src/app/globals.css` 에 붙인다:

```css
.race-frame { display: flex; flex-direction: column; gap: 18px; margin: 20px 0 28px; }
.race-subtitle { margin: 8px 0 0; font-size: 15px; color: var(--secondary); line-height: 1.5; }
```

- [ ] **Step 5: 빌드 확인**

Run: `npm run build`
Expected: 통과. `raceMeta` 를 가진 글이 아직 없으므로 **모든 페이지의 렌더 결과가 이전과 동일**해야 한다.

- [ ] **Step 6: 회귀 확인 — 기존 글이 안 바뀌었는지**

Run:
```bash
npm run build && grep -c "race-frame" .next/server/app/blog/busan-bridge-marathon-2026.html
```
Expected: `0` — 기존 글에는 골격이 붙지 않는다

- [ ] **Step 7: 커밋**

```bash
git add "src/app/(detail)/blog/[slug]/page.tsx" src/app/globals.css
git commit -m "feat(blog): 대회 글 렌더 골격 통합 — raceMeta 있는 글만

화면 제목은 displayTitle, 검색 제목(title·generateMetadata)은 그대로 둔다.
raceMeta 없는 기존 70편은 렌더 결과가 바뀌지 않는다."
```

---

### Task 6: 신발 브릿지 조건 완화

**Files:**
- Modify: `src/app/(detail)/blog/[slug]/page.tsx:264-274`
- Modify: `src/components/marathon/shoe-bridge.tsx`
- Test: `src/lib/__tests__/shoe-link-count.test.ts`
- Create: `src/lib/blog/shoe-links.ts`

**Interfaces:**
- Consumes: 없음
- Produces: `countUniqueShoeLinks(html: string): number`, `MarathonShoeBridge` 의 새 prop `excludeSlugs?: string[]`

**이 태스크만 기존 72편 전체에 영향을 준다.**

- [ ] **Step 1: 실패하는 테스트를 쓴다**

`src/lib/__tests__/shoe-link-count.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { countUniqueShoeLinks, extractShoeSlugs } from '@/lib/blog/shoe-links';

describe('extractShoeSlugs', () => {
  it('본문에서 신발 slug 를 뽑는다', () => {
    const html = '<a href="/shoes/nike-pegasus-42">페가수스</a>';
    expect(extractShoeSlugs(html)).toEqual(['nike-pegasus-42']);
  });

  it('같은 신발을 두 번 링크해도 하나로 센다', () => {
    const html = '<a href="/shoes/nike-pegasus-42">a</a><a href="/shoes/nike-pegasus-42">b</a>';
    expect(countUniqueShoeLinks(html)).toBe(1);
  });

  it('서로 다른 신발은 각각 센다', () => {
    const html = '<a href="/shoes/nike-pegasus-42">a</a><a href="/shoes/brooks-ghost-17">b</a>';
    expect(countUniqueShoeLinks(html)).toBe(2);
  });

  it('신발 링크가 없으면 0', () => {
    expect(countUniqueShoeLinks('<a href="/blog/foo">x</a>')).toBe(0);
  });

  it('/gels/ 는 신발이 아니다', () => {
    expect(countUniqueShoeLinks('<a href="/gels/maurten-100">x</a>')).toBe(0);
  });
});
```

- [ ] **Step 2: 실패 확인**

Run: `npx vitest run src/lib/__tests__/shoe-link-count.test.ts`
Expected: FAIL — 모듈 없음

- [ ] **Step 3: 구현**

`src/lib/blog/shoe-links.ts`:

```typescript
/**
 * 본문 HTML에서 신발 상세 링크 slug 를 뽑는다.
 *
 * 브릿지 조건이 "링크가 하나라도 있으면 끔"이던 탓에 72편 중 38편에서
 * 신발·젤 카드가 통째로 사라져 있었다. 그중 14편은 링크가 1~2개뿐이고
 * 그 내용도 `페가수스42+고스트17` 같은 기본 세트의 수동 복제였다.
 */
export function extractShoeSlugs(html: string): string[] {
  const matches = html.match(/\/shoes\/[a-z0-9-]+/g) ?? [];
  return [...new Set(matches.map((m) => m.replace('/shoes/', '')))];
}

export function countUniqueShoeLinks(html: string): number {
  return extractShoeSlugs(html).length;
}

/**
 * 이 수 미만이면 브릿지를 함께 렌더한다.
 * 3인 근거: 1~2개는 기본 세트의 수동 복제이고, 3개 이상은
 * 아식스 대회에 아식스 4종처럼 브릿지가 낼 수 없는 맥락 큐레이션이다.
 */
export const SHOE_LINK_BRIDGE_THRESHOLD = 3;
```

- [ ] **Step 4: 통과 확인**

Run: `npx vitest run src/lib/__tests__/shoe-link-count.test.ts`
Expected: PASS — 5 tests

- [ ] **Step 5: 브릿지에 제외 목록 prop 을 추가한다**

`src/components/marathon/shoe-bridge.tsx:9-12` 의 `ShoeBridgeProps` 에 한 줄 추가:

```tsx
type ShoeBridgeProps = {
  distances: string[];
  eventName: string;
  excludeSlugs?: string[];
};
```

`pickShoes`(60행)의 시그니처를 바꾼다. **제외는 `.slice(0, 4)` 뒤가 아니라 후보를 거르는 `.filter()` 단계에서 해야** 4장이 채워진다 — 뒤에서 빼면 3장짜리 그리드가 나온다.

```tsx
// 카테고리별 rating 상위 신발을 모아 최대 4종 (결정적 정렬, 중복 제거)
// excludeSlugs: 본문에 이미 링크된 신발 — 카드에서 중복 노출하지 않는다
function pickShoes(categories: string[], excludeSlugs: string[] = []): PricedShoe[] {
  const picked: PricedShoe[] = [];
  const seen = new Set<string>(excludeSlugs);
  for (const cat of categories) {
    const inCat = ALL_SHOES
      .filter((s) => s.category === cat && !seen.has(s.slug))
      .sort((x, y) => y.rating - x.rating || y.price - x.price)
      .slice(0, 2);
    for (const s of inCat) {
      picked.push(s);
      seen.add(s.slug);
    }
  }
  return picked.slice(0, 4);
}
```

`seen` 을 `excludeSlugs` 로 초기화하는 것이 핵심이다 — 기존 중복 제거 로직을 그대로 재사용한다.

95~97행의 컴포넌트 시그니처와 호출부를 바꾼다:

```tsx
export function MarathonShoeBridge({ distances, eventName, excludeSlugs = [] }: ShoeBridgeProps) {
  const profile = analyzeDistances(distances);
  const shoes = pickShoes(shoeCategoriesFor(profile), excludeSlugs);
```

- [ ] **Step 6: 페이지의 조건식을 바꾼다**

`src/app/(detail)/blog/[slug]/page.tsx:264-274` 의 블록을 통째로 교체한다. **기존:**

```tsx
        {(() => {
          const hasShoeLink = post.content.includes('/shoes/');
          const titleHasRace = /마라톤|대회|레이스|에키덴|스카이|울트라|하프|10\s?[kK]|풀코스|러닝.{0,4}이벤트|접수/.test(post.title);
          if (!titleHasRace || hasShoeLink || post.category === 'review') return null;
```

**바꿀 내용:**

```tsx
        {/* 대회 글 → 신발/젤 CTA (수동 링크가 적은 글에 자동 삽입) */}
        {(() => {
          const shoeSlugs = extractShoeSlugs(post.content);
          const titleHasRace = /마라톤|대회|레이스|에키덴|스카이|울트라|하프|10\s?[kK]|풀코스|러닝.{0,4}이벤트|접수/.test(post.title);
          // 3개 이상이면 맥락 큐레이션이라 브릿지가 끼어들지 않는다
          if (!titleHasRace || shoeSlugs.length >= SHOE_LINK_BRIDGE_THRESHOLD || post.category === 'review') return null;
          return (
            <div className="mt-10">
              <MarathonShoeBridge
                distances={inferRaceDistances(post.title)}
                eventName="이 대회"
                excludeSlugs={shoeSlugs}
              />
            </div>
          );
        })()}
```

import 추가:

```tsx
import { extractShoeSlugs, SHOE_LINK_BRIDGE_THRESHOLD } from '@/lib/blog/shoe-links';
```

- [ ] **Step 7: 영향 편수를 실측한다**

브릿지 마크업의 고유 문자열은 `준비용 러닝화 추천` 이다(`shoe-bridge.tsx:111`).

**변경 전 기준선은 34편으로 이미 실측돼 있다** (2026-08-19, main `d666534` 빌드 산출물).

Run:
```bash
npm run build
grep -l "준비용 러닝화 추천" .next/server/app/blog/*.html | wc -l
```
Expected: **48** (34 → +14)

48이 아니면 멈추고 원인을 본다. 특히 `SHOE_LINK_BRIDGE_THRESHOLD` 비교가 `>=` 인지(`> 3` 이면 3개짜리 글까지 켜져 54가 나온다) 확인한다.

개별 확인 — 링크 2개짜리 글에 브릿지가 붙었는지:
```bash
grep -c "준비용 러닝화 추천" .next/server/app/blog/busan-bridge-marathon-2026.html
```
Expected: `1`

링크 5개짜리 글은 그대로 꺼져 있어야 한다:
```bash
grep -c "준비용 러닝화 추천" .next/server/app/blog/2026-trans-jeju-utmb-registration.html
```
Expected: `0`

- [ ] **Step 8: 검증 + 커밋**

Run: `npm test && npm run build`
Expected: 129 + 5 = 134 tests 통과 · 빌드 통과

```bash
git add src/lib/blog/shoe-links.ts src/lib/__tests__/shoe-link-count.test.ts src/components/marathon/shoe-bridge.tsx "src/app/(detail)/blog/[slug]/page.tsx"
git commit -m "fix(blog): 신발 브릿지 조건 완화 — 링크 1개에 카드 전체가 꺼지던 것

72편 중 38편(53%)에서 신발 카드 4장 + 젤 카드 2장이 통째로 사라져 있었다.
그중 14편은 링크가 1~2개뿐이고 내용도 페가수스42+고스트17 같은
기본 세트의 수동 복제였다 — 브릿지가 자동으로 할 일을 손으로 한 것.

3개 이상은 아식스 대회에 아식스 4종처럼 브릿지가 낼 수 없는
맥락 큐레이션이라 그대로 둔다. 본문에 이미 링크된 신발은 카드에서 뺀다."
```

---

### Task 7: validate 강제 규칙

**Files:**
- Create: `scripts/validate-race-meta.ts`
- Modify: `scripts/validate.js` (8번 섹션 추가)
- Test: `src/lib/__tests__/race-meta-rules.test.ts`
- Create: `src/lib/blog/race-meta-rules.ts`

**Interfaces:**
- Consumes: `RaceMeta` (Task 1), `countUniqueShoeLinks` (Task 6)
- Produces: `checkRaceMeta(post): RaceMetaIssue[]`

`validate.js` 는 순수 Node이고 정규식으로 소스 텍스트를 읽는다. `raceMeta` 는 중첩 객체라 정규식 파싱이 취약하므로, **검사 로직을 TS로 쓰고 `validate.js` 가 tsx 로 호출한다.**

- [ ] **Step 1: 실패하는 테스트를 쓴다**

`src/lib/__tests__/race-meta-rules.test.ts`:

```typescript
import { describe, it, expect } from 'vitest';
import { checkRaceMeta } from '@/lib/blog/race-meta-rules';
import type { BlogPost } from '@/types/blog';

function post(overrides: Partial<BlogPost>): BlogPost {
  return {
    id: 'x', slug: 'busan-bridge-marathon', title: '부산브릿지마라톤 | 접수 안내',
    description: 'd', content: '<p>본문</p>', author: '산초 에디터',
    publishedAt: '2026-08-19', category: 'news', tags: [], readingTime: 8,
    raceMeta: {
      displayTitle: '국내 첫 트리플 브릿지 풀코스 — 부산브릿지마라톤',
      raceDate: '2026-12-06',
      registrationStart: '2026-08-24T10:00',
      facts: [
        { label: '대회일', value: '12월 6일' }, { label: '집결', value: '벡스코' },
        { label: '종목', value: '풀 · 10K' }, { label: '정원', value: '12,000' },
      ],
      highlights: [
        { badge: '3×', title: '오르막 세 번', desc: 'd' },
        { badge: '12월', title: '바다 바람', desc: 'd' },
      ],
    },
    ...overrides,
  } as BlogPost;
}

describe('checkRaceMeta', () => {
  it('정상 글은 문제가 없다', () => {
    expect(checkRaceMeta(post({}))).toEqual([]);
  });

  it('raceMeta 가 없으면 검사하지 않는다 — 기존 글 보호', () => {
    expect(checkRaceMeta(post({ raceMeta: undefined }))).toEqual([]);
  });

  it('facts 가 4개 미만이면 에러', () => {
    const p = post({});
    p.raceMeta!.facts = [{ label: 'a', value: '1' }];
    const issues = checkRaceMeta(p);
    expect(issues.some((i) => i.level === 'error' && i.rule === 'facts-count')).toBe(true);
  });

  it('facts 가 7개 이상이면 에러', () => {
    const p = post({});
    p.raceMeta!.facts = Array.from({ length: 7 }, (_, i) => ({ label: `l${i}`, value: 'v' }));
    expect(checkRaceMeta(p).some((i) => i.rule === 'facts-count')).toBe(true);
  });

  it('highlights 가 1개면 에러', () => {
    const p = post({});
    p.raceMeta!.highlights = [{ badge: 'a', title: 't', desc: 'd' }];
    expect(checkRaceMeta(p).some((i) => i.rule === 'highlights-count')).toBe(true);
  });

  it('본문에 3줄 요약이 남아 있으면 에러', () => {
    const p = post({ content: '<div class="tldr">3줄 요약</div>' });
    expect(checkRaceMeta(p).some((i) => i.level === 'error' && i.rule === 'no-tldr')).toBe(true);
  });

  it('slug 에 연도가 있으면 에러', () => {
    const p = post({ slug: 'busan-bridge-marathon-2026' });
    expect(checkRaceMeta(p).some((i) => i.level === 'error' && i.rule === 'slug-no-year')).toBe(true);
  });

  it('displayTitle 이 40자를 넘으면 에러', () => {
    const p = post({});
    p.raceMeta!.displayTitle = '가'.repeat(41);
    expect(checkRaceMeta(p).some((i) => i.rule === 'display-title-length')).toBe(true);
  });

  it('displayTitle 이 title 과 같으면 경고', () => {
    const p = post({ title: '짧은 제목' });
    p.raceMeta!.displayTitle = '짧은 제목';
    expect(checkRaceMeta(p).some((i) => i.level === 'warn' && i.rule === 'display-title-same')).toBe(true);
  });

  it('raceDate 가 파싱 불가면 에러', () => {
    const p = post({});
    p.raceMeta!.raceDate = '언젠가';
    expect(checkRaceMeta(p).some((i) => i.rule === 'race-date-parse')).toBe(true);
  });

  it('마감이 시작보다 빠르면 에러', () => {
    const p = post({});
    p.raceMeta!.registrationEnd = '2026-08-01';
    expect(checkRaceMeta(p).some((i) => i.rule === 'registration-order')).toBe(true);
  });

  it('신발 링크가 3개 이상이면 경고', () => {
    const p = post({
      content: '<a href="/shoes/a-1">1</a><a href="/shoes/b-2">2</a><a href="/shoes/c-3">3</a>',
    });
    expect(checkRaceMeta(p).some((i) => i.level === 'warn' && i.rule === 'shoe-links')).toBe(true);
  });

  it('고도 수치가 있는데 출처가 없으면 경고', () => {
    const p = post({});
    p.raceMeta!.elevation = [{ km: 0, m: 0 }, { km: 10, m: 20 }];
    expect(checkRaceMeta(p).some((i) => i.level === 'warn' && i.rule === 'elevation-source')).toBe(true);
  });
});
```

- [ ] **Step 2: 실패 확인**

Run: `npx vitest run src/lib/__tests__/race-meta-rules.test.ts`
Expected: FAIL — 모듈 없음

- [ ] **Step 3: 구현**

`src/lib/blog/race-meta-rules.ts`:

```typescript
import type { BlogPost } from '@/types/blog';
import { countUniqueShoeLinks } from './shoe-links';
import { parseKst } from './race-status';

export interface RaceMetaIssue {
  level: 'error' | 'warn';
  rule: string;
  slug: string;
  message: string;
}

const MAX_DISPLAY_TITLE = 40;

/**
 * raceMeta 를 가진 글에만 적용되는 구성 표준 검사.
 * 기존 70편은 raceMeta 가 없어 자동으로 대상 밖이다 —
 * "앞으로 쓰는 글부터"가 규칙이 아니라 구조로 보장된다.
 */
export function checkRaceMeta(post: BlogPost): RaceMetaIssue[] {
  const meta = post.raceMeta;
  if (!meta) return [];

  const issues: RaceMetaIssue[] = [];
  const push = (level: RaceMetaIssue['level'], rule: string, message: string) =>
    issues.push({ level, rule, slug: post.slug, message });

  if (meta.facts.length < 4 || meta.facts.length > 6) {
    push('error', 'facts-count', `facts 는 4~6개여야 합니다 (현재 ${meta.facts.length}개)`);
  }

  if (meta.highlights.length < 2 || meta.highlights.length > 4) {
    push('error', 'highlights-count', `highlights 는 2~4개여야 합니다 (현재 ${meta.highlights.length}개)`);
  }

  if (post.content.includes('class="tldr"')) {
    push('error', 'no-tldr', '대회 글에서 3줄 요약은 접수 정보 반복이라 폐지했습니다');
  }

  if (/20\d\d/.test(post.slug)) {
    push('error', 'slug-no-year', 'slug 에 연도를 넣지 않습니다 — 매년 같은 URL이 권위를 쌓습니다');
  }

  if (meta.displayTitle.length > MAX_DISPLAY_TITLE) {
    push('error', 'display-title-length', `displayTitle 은 ${MAX_DISPLAY_TITLE}자 이하여야 합니다 (현재 ${meta.displayTitle.length}자)`);
  }

  if (meta.displayTitle === post.title) {
    push('warn', 'display-title-same', 'displayTitle 이 title 과 같습니다 — 검색 제목을 복사한 것이라면 별도 필드를 둔 의미가 없습니다');
  }

  if (Number.isNaN(parseKst(meta.raceDate).getTime())) {
    push('error', 'race-date-parse', `raceDate 를 날짜로 읽을 수 없습니다: ${meta.raceDate}`);
  }

  if (meta.registrationStart && meta.registrationEnd) {
    const s = parseKst(meta.registrationStart).getTime();
    const e = parseKst(meta.registrationEnd).getTime();
    if (!Number.isNaN(s) && !Number.isNaN(e) && e < s) {
      push('error', 'registration-order', '접수 마감이 시작보다 빠릅니다 — 상태가 영구 closed 가 됩니다');
    }
  }

  const shoeLinks = countUniqueShoeLinks(post.content);
  if (shoeLinks >= 3) {
    push('warn', 'shoe-links', `수동 신발 링크가 ${shoeLinks}개라 자동 카드 브릿지가 렌더되지 않습니다`);
  }

  if (meta.elevation && meta.elevation.length > 0 && !meta.elevationSource) {
    push('warn', 'elevation-source', '고도 수치에 출처(elevationSource)가 없습니다 — 실측처럼 읽힙니다');
  }

  return issues;
}
```

- [ ] **Step 4: 통과 확인**

Run: `npx vitest run src/lib/__tests__/race-meta-rules.test.ts`
Expected: PASS — 14 tests

- [ ] **Step 5: validate 진입 스크립트**

`scripts/validate-race-meta.ts`:

```typescript
#!/usr/bin/env tsx
/**
 * 대회 글 구성 표준 검사 — `npm run validate` 의 8번 섹션이 호출한다.
 *
 * validate.js 는 순수 Node이고 정규식으로 소스를 읽는데, raceMeta 는
 * 중첩 객체라 정규식 파싱이 취약하다. 그래서 검사만 TS로 떼어내 데이터를
 * 타입 그대로 읽는다. 종료 코드로 결과를 전달한다 (1 = 에러 있음).
 */
import { getAllPosts } from '../src/lib/data/blog';
import { checkRaceMeta } from '../src/lib/blog/race-meta-rules';

const posts = getAllPosts();
const withMeta = posts.filter((p) => p.raceMeta);
const issues = withMeta.flatMap(checkRaceMeta);

const errors = issues.filter((i) => i.level === 'error');
const warns = issues.filter((i) => i.level === 'warn');

for (const i of errors) console.error(`  ❌ [${i.slug}] ${i.message}`);
for (const i of warns) console.warn(`  ⚠️  [${i.slug}] ${i.message}`);

if (errors.length === 0 && warns.length === 0) {
  console.log(`  ✅ 대회 글 ${withMeta.length}편 — 구성 표준 통과`);
}

// validate.js 가 카운트를 읽을 수 있게 마지막 줄에 기계 판독용 요약을 남긴다
console.log(`RACE_META_RESULT ${withMeta.length} ${errors.length} ${warns.length}`);
process.exit(errors.length > 0 ? 1 : 0);
```

- [ ] **Step 6: validate.js 에 연결한다**

`scripts/validate.js` 의 `console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');` (결과 요약 직전, 478행 근처) **바로 위**에 붙인다:

```javascript
// ===========================================
// 8. 대회 글 구성 표준 (raceMeta 보유 글만)
// ===========================================
console.log('\n━━━ 8. 대회 글 구성 표준 ━━━');

const { execFileSync } = require('child_process');
try {
  const out = execFileSync('npx', ['tsx', 'scripts/validate-race-meta.ts'], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  process.stdout.write(out.replace(/^RACE_META_RESULT.*$/m, '').trimEnd() + '\n');
  const m = out.match(/RACE_META_RESULT (\d+) (\d+) (\d+)/);
  if (m) warnings += Number(m[3]);
} catch (e) {
  // 종료 코드 1 = 검사 에러. stdout/stderr 를 그대로 보여주고 에러로 집계한다
  const out = `${e.stdout ?? ''}${e.stderr ?? ''}`;
  process.stdout.write(out.replace(/^RACE_META_RESULT.*$/m, '').trimEnd() + '\n');
  const m = out.match(/RACE_META_RESULT (\d+) (\d+) (\d+)/);
  errors += m ? Number(m[2]) : 1;
  if (m) warnings += Number(m[3]);
}
```

`scripts/validate.js:13-14` 가 `const fs = require('fs');` 스타일이므로, `const { execFileSync } = require('child_process');` 를 **14행 아래로 올려** 기존 스타일에 맞춘다. 8번 섹션 안의 require 선언은 지운다.

- [ ] **Step 7: 검사가 실제로 도는지 확인한다**

Run: `npm run validate 2>&1 | tail -20`
Expected: `━━━ 8. 대회 글 구성 표준 ━━━` 섹션이 보이고 `✅ 대회 글 0편 — 구성 표준 통과`. 에러 0.

- [ ] **Step 8: 규칙이 실제로 막는지 확인한다 (일회성)**

임시로 아무 글에 `raceMeta` 를 잘못 넣어 에러가 나는지 본다:

```bash
# 2026-08.ts 의 첫 글에 임시로 raceMeta 를 넣고
npm run validate; echo "exit=$?"
# exit=1 과 ❌ 메시지를 확인한 뒤 되돌린다
git checkout src/lib/data/blog/posts/2026-08.ts
```

Expected: `exit=1` 과 구체적 에러 메시지. 확인 후 반드시 되돌린다.

- [ ] **Step 9: 검증 + 커밋**

Run: `npm run validate && npm test && npm run build`
Expected: validate 에러 0 · 134 + 14 = 148 tests 통과 · 빌드 통과

```bash
git add scripts/validate-race-meta.ts scripts/validate.js src/lib/blog/race-meta-rules.ts src/lib/__tests__/race-meta-rules.test.ts
git commit -m "feat(validate): 대회 글 구성 표준 기계 강제

문서로만 적으면 지켜지지 않는다. 표준이 없어서 편차가 난 것이
애초 문제였다 — 세 글이 서로 다르게 쓰여 있었다.

raceMeta 보유 글에만 적용되므로 기존 70편은 걸리지 않는다.
그래서 3줄요약 폐지·slug 연도 금지를 에러로 둬도 커밋이 막히지 않는다.

validate.js 는 정규식으로 소스를 읽는데 raceMeta 는 중첩 객체라
파싱이 취약해서, 검사만 tsx 로 떼어내 타입 그대로 읽는다."
```

---

### Task 8: 작성 가이드 문서

**Files:**
- Create: `docs/superpowers/guides/race-post-authoring.md`

**Interfaces:**
- Consumes: Task 1~7 전부
- Produces: 다음 대회 글을 쓸 때 참조할 문서

- [ ] **Step 1: 가이드를 쓴다**

`docs/superpowers/guides/race-post-authoring.md`:

````markdown
# 대회 글 쓰는 법 (2026-08-19 표준)

`raceMeta` 를 넣으면 이 표준이 적용되고 `npm run validate` 가 검사한다.
넣지 않으면 기존 방식 그대로다.

## 최소 예시

```typescript
{
  id: 'busan-bridge-marathon',
  slug: 'busan-bridge-marathon',        // ⚠️ 연도 금지
  title: '국내 첫 트리플 브릿지 풀코스 — 부산브릿지마라톤 접수 8월 24일 10시 | 광안대교·부산항대교·남항대교',
  // ... 기존 필드 ...
  raceMeta: {
    displayTitle: '국내 첫 트리플 브릿지 풀코스 — 부산브릿지마라톤',  // 40자 이하
    displaySubtitle: '광안대교·부산항대교·남항대교를 하루에 다 건넌다',
    raceDate: '2026-12-06',
    registrationStart: '2026-08-24T10:00',
    registrationVia: 'YES24 티켓',
    action: {
      what: '기록증 파일부터 준비하세요',
      how: '풀코스는 타 대회 공식기록증 4:30 이내가 있어야 신청됩니다. 선착순이라 접수 창에서 서류를 찾으면 늦습니다.',
    },
    facts: [
      { label: '대회일', value: '12월 6일', sub: '일 · 07:30' },
      { label: '집결', value: '벡스코', sub: '제1전시장' },
      { label: '종목', value: '풀 · 10K', sub: '하프 없음' },
      { label: '정원', value: '12,000', sub: '명 선착순' },
      { label: '참가비', value: '8만 / 6만', sub: '원' },
      { label: '제한시간', value: '5시간', sub: '10K 1:30' },
    ],
    highlights: [
      { badge: '3×', title: '오르막이 세 번 온다', desc: '교량은 선박이 지나갈 높이만큼 솟습니다...' },
      { badge: '12월', title: '바다 위엔 방풍이 없다', desc: '체감온도가 도심 구간보다 훨씬 낮아집니다...' },
      { badge: '국내 유일', title: '해안선을 다리 위에서 본다', desc: '기록보다 경험에 무게를 두면...' },
    ],
  },
}
```

## 지켜야 할 것

| 규칙 | 수준 | 왜 |
|---|---|---|
| `facts` 4~6개 | 에러 | 적으면 그리드가 비고 많으면 스캔이 안 된다 |
| `highlights` 2~4개 | 에러 | 1개면 "이 대회만의 것"이 성립 안 한다 |
| 본문에 `class="tldr"` 금지 | 에러 | 3줄 요약은 접수 정보 반복이었다 |
| slug에 연도 금지 | 에러 | 매년 같은 URL이 권위를 쌓는다 |
| `displayTitle` 40자 이하 | 에러 | 넘으면 414px에서 3줄이 된다 |
| 수동 신발 링크 3개 미만 | 경고 | 3개 이상이면 자동 카드가 안 붙는다 |

## 본문에 쓰는 것 / 안 쓰는 것

**쓴다** — 표가 답할 수 없는 것. "4:30과 5시간이 헷갈리는 이유", 코스 전략, 다른 대회와의 선택 기준.
**안 쓴다** — 접수일·정원·참가비 재서술. 그건 `facts` 와 맨 아래 요강표가 한다.

전체 요강표는 **본문 맨 아래**에 둔다. 대회마다 항목이 달라 데이터로 강제하지 않는다.

## 고도 프로파일

수치가 공개된 대회만 넣는다.

```typescript
    elevation: [{ km: 0, m: 5 }, { km: 12, m: 32 }, /* ... */],
    elevationSource: '대회 공식 코스 안내 (2026-08-19 확인)',
```

**공개되지 않았으면 넣지 않는다.** 대충 그린 산 모양은 실측처럼 읽힌다.
공식 코스맵 이미지는 저작권상 쓰지 않는다 — 근거는 스펙 9-1절.

## 배지는 손으로 적지 않는다

`registrationStart`·`registrationEnd`·`raceDate` 에서 자동 계산된다.
D-day를 본문에 손으로 쓰면 낡는다 — 라이브에 D-12가 일주일 틀린 채 서 있던 사고가 있었다.
````

- [ ] **Step 2: 커밋**

```bash
git add docs/superpowers/guides/race-post-authoring.md
git commit -m "docs(guide): 대회 글 작성 가이드 — raceMeta 표준"
```

---

## 완료 기준

전부 끝나면 아래가 성립해야 한다.

```bash
npm run validate && npm test && npm run build
```

- validate 에러 0, 8번 섹션이 `대회 글 0편 — 구성 표준 통과` 를 출력
- 테스트 148개 통과 (기존 115 + 신규 33)
- 빌드 918p 통과
- 기존 글 렌더 무변경: `grep -c "race-frame" .next/server/app/blog/busan-bridge-marathon-2026.html` → `0`
- 브릿지 렌더 편수 34 → 48

**배포는 별도 승인 후.** 이 계획은 워크트리에서 커밋까지만 한다.

## 이 계획이 하지 않는 것

- 기존 70편 본문 재구성 (스펙 11절)
- 기존 65편 slug 변경
- 첫 대회 글 실제 작성 — 새 대회 소식이 생겼을 때 Task 8의 가이드를 보고 쓴다
- 효과 측정 — GSC·GA 키가 없어 판정 수단이 없다 (스펙 12절)
