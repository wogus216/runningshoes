# 쎄러데이 8인 마라톤 기록 페이지 — 1단계 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `allrunabout.com/saturday` 에 중학교 친구 8명의 손기정평화마라톤 도전 기록 페이지를 만든다 — 히어로·라인업·주간 타임라인까지, 데이터가 비어 있어도 완성돼 보이는 상태로.

**Architecture:** Next.js App Router의 새 라우트 그룹 `(challenge)` 에 자체 레이아웃을 두어 기존 `(main)` 헤더·검색과 완전히 분리한다. 페이지 전체를 **서버 컴포넌트**로 만들고 클라이언트 JS를 0KB로 유지한다 — 레이더 차트는 직접 SVG로 그리고, 카드 확장은 `<details>` 로 처리한다. 순수 로직(정규화·D-day·주차 배경색)만 `src/lib/challenge/stats.ts` 에 분리해 Vitest로 검증한다.

**Tech Stack:** Next.js 15.5 (App Router, SSG, typedRoutes) · React 19.2 · TypeScript 5.4 · Tailwind CSS + tailwindcss-animate · Vitest · sharp (OG 이미지)

**스펙:** `docs/superpowers/specs/2026-08-11-saturday-crew-design.md`

## 스펙에서 의도적으로 벗어난 점 (1건)

스펙 §6은 레이더 차트에 Recharts를 지정했으나 **직접 SVG로 그린다.**
Recharts는 `"use client"` 이므로 클라이언트 번들에 들어가며 gzip 100KB를 넘어
스펙 §9의 예산(≤120KB)을 차트 하나로 소진한다. 필요한 것은 4축 고정·툴팁 없음·
상호작용 없음이라 삼각함수 4회로 충분하다. 이 선택으로 페이지 클라이언트 JS가 0KB가 되어
스펙 §9의 목표를 더 강하게 달성한다.

---

## Global Constraints

모든 태스크에 암묵적으로 적용된다.

- **모바일 우선, 기준 폭 390px.** 데스크톱은 중앙 정렬 확대로 처리한다
- **클라이언트 JS 0KB 유지.** `"use client"` 지시자를 이 기능의 어떤 파일에도 넣지 않는다
- **canvas 사용 금지.** 실루엣·그라데이션은 인라인 SVG + CSS로만 구현한다
- **`prefers-reduced-motion` 시 완전 정적.** 모든 애니메이션에 `motion-reduce:animate-none` 을 붙인다
- **애드센스 슬롯 금지.** `AdSlot` 컴포넌트를 import 하지 않는다
- **마블 IP 자산 금지.** 어벤져스 로고·마블 서체·캐릭터 이름/얼굴/디자인을 쓰지 않는다
- **h1은 실텍스트로 렌더한다.** `sr-only` 로 대체하지 않는다
- **터치 타겟 최소 44px**, 뷰포트 높이는 `dvh` 사용 (`vh` 금지)
- **컨셉 색상 (스펙 §3 그대로):** 히어로 `#0a1020` / 라인업 `#0f1830` / 타임라인 `#0f1830`→`#3b6ea5` / 결과 `#f0f6ff`
- **대회 상수:** 2026-11-15, 2026 손기정평화마라톤(제22회), 임진각. 마라톤 DB id `sonkeechung-peace-marathon-2026`
- **인원:** 8명, 풀코스 6 / 10K 2
- **한글 폰트**는 루트 레이아웃의 Pretendard 를 상속받는다. 폰트를 새로 로드하지 않는다
- 원본 내보내기 파일(CSV/XML)은 **리포에 커밋하지 않는다**

---

## File Structure

| 파일 | 책임 |
|---|---|
| `src/types/challenge.ts` | 타입 정의만. 로직 없음 |
| `src/lib/challenge/stats.ts` | 순수 함수 — 레이더 정규화, D-day, 주차 배경색 |
| `src/lib/data/challenge/saturday.ts` | 데이터 — 크루 8명, 주차 로그, 대회 메타 |
| `src/lib/__tests__/challenge-stats.test.ts` | `stats.ts` 검증 |
| `src/app/(challenge)/layout.tsx` | 라우트 그룹 레이아웃 (헤더 없음, 하단 귀환 링크) |
| `src/app/(challenge)/saturday/page.tsx` | 섹션 조립 + 메타데이터 |
| `src/components/challenge/stat-radar.tsx` | 4축 SVG 레이더 (서버 컴포넌트) |
| `src/components/challenge/runner-glyph.tsx` | 러너 실루엣 SVG 심볼 1회 정의 |
| `src/components/challenge/hero.tsx` | 히어로 섹션 |
| `src/components/challenge/crew-card.tsx` | 카드 1장 + `<details>` 확장 |
| `src/components/challenge/lineup.tsx` | 카드 2열 그리드 |
| `src/components/challenge/timeline.tsx` | 주차 블록 스택 |
| `scripts/challenge-og.js` | OG 이미지 HTML 생성 + WebP 변환 |

컴포넌트 테스트는 작성하지 않는다 — 리포에 React Testing Library가 없고
(`package.json` devDependencies 확인됨), 시각 검증은 스펙 §13의 육안 절차로 대체한다.
순수 로직만 Vitest로 덮는다.

---

### Task 1: 타입과 순수 로직

**Files:**
- Create: `src/types/challenge.ts`
- Create: `src/lib/challenge/stats.ts`
- Test: `src/lib/__tests__/challenge-stats.test.ts`

**Interfaces:**
- Consumes: 없음 (첫 태스크)
- Produces:
  - `CrewStats`, `CrewMember`, `WeekEntry`, `WeekLog`, `RaceResult`, `RadarAxes` 타입
  - `toRadarAxes(s: CrewStats): RadarAxes`
  - `daysUntilRace(now: Date): number`
  - `weekBackdrop(index: number, total: number): string`
  - `RACE_DATE = '2026-11-15'`

- [ ] **Step 1: 타입 파일 작성**

`src/types/challenge.ts`:

```ts
// 쎄러데이 — 손기정평화마라톤 2026 도전 기록 타입
// 스펙: docs/superpowers/specs/2026-08-11-saturday-crew-design.md

export type StatsSource = '가민' | '스트라바' | '애플' | '삼성' | '기타' | '자가신고';

export interface CrewStats {
  source: StatsSource;
  asOf: string;        // 'YYYY-MM-DD' 기준일
  weeklyKm: number;    // 최근 4주 평균 주간 거리
  longestKm: number;   // 최장 단일 거리
  avgPaceSec: number;  // 초/km
  runsPerWeek: number; // 최근 4주 평균 주 러닝 횟수
  totalKm?: number;    // 누적 (있으면)
}

export interface CrewMember {
  id: string;                       // 'm1' — 이미지·로그 참조용 안정 키. 변경 금지
  codeName: string;                 // 크게 표시
  realName: string;                 // 작게 표시. 빈 문자열이면 렌더 생략
  distance: '풀코스' | '10K';
  goal: string;                     // '4:30:00' | '완주'
  photo?: string;                   // 없으면 실루엣으로 대체
  baseline?: CrewStats;             // 없으면 CLASSIFIED 상태
  final?: CrewStats;                // 대회 후. baseline과 함께 있으면 겹쳐 그린다
}

export interface WeekEntry {
  memberId: string;
  km?: number;
  note?: string;
}

export interface WeekLog {
  week: number;        // 1부터
  dday: number;        // 그 주 시작 시점의 D-day
  dateLabel: string;   // '08.11 – 08.17'
  headline?: string;   // 그 주 한 줄 요약 (운영자 작성)
  entries: WeekEntry[];
}

export interface RaceResult {
  heroLine: string;    // 히어로 교체 문구
  finishers: {
    memberId: string;
    finishTime?: string; // '4:28:11' — 미완주 시 생략
    note?: string;
    photo?: string;
  }[];
}

// 레이더 4축. 모두 0–100 정규화값
export interface RadarAxes {
  power: number;       // 주력   — weeklyKm
  endurance: number;   // 지구력 — longestKm
  speed: number;       // 스피드 — avgPaceSec
  consistency: number; // 꾸준함 — runsPerWeek
}
```

- [ ] **Step 2: 실패하는 테스트 작성**

`src/lib/__tests__/challenge-stats.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import { toRadarAxes, daysUntilRace, weekBackdrop } from '@/lib/challenge/stats';
import type { CrewStats } from '@/types/challenge';

const base: CrewStats = {
  source: '가민',
  asOf: '2026-08-12',
  weeklyKm: 30,
  longestKm: 21.0975,
  avgPaceSec: 360,
  runsPerWeek: 3,
};

describe('toRadarAxes', () => {
  it('스펙에 고정된 상수로 0-100 정규화한다', () => {
    const r = toRadarAxes(base);
    expect(r.power).toBeCloseTo(50, 5);        // 30 / 60
    expect(r.endurance).toBeCloseTo(50, 5);    // 21.0975 / 42.195
    expect(r.speed).toBeCloseTo(50, 5);        // (420-360) / (420-300)
    expect(r.consistency).toBeCloseTo(60, 5);  // 3 / 5
  });

  it('상한을 넘는 값은 100으로 자른다', () => {
    const r = toRadarAxes({ ...base, weeklyKm: 120, runsPerWeek: 7, longestKm: 100 });
    expect(r.power).toBe(100);
    expect(r.consistency).toBe(100);
    expect(r.endurance).toBe(100);
  });

  it('7분/km보다 느리면 스피드는 0에서 멈춘다', () => {
    expect(toRadarAxes({ ...base, avgPaceSec: 480 }).speed).toBe(0);
  });

  it('5분/km보다 빠르면 스피드는 100에서 멈춘다', () => {
    expect(toRadarAxes({ ...base, avgPaceSec: 240 }).speed).toBe(100);
  });
});

describe('daysUntilRace', () => {
  it('한국 시간 기준 날짜 차이를 센다', () => {
    expect(daysUntilRace(new Date('2026-08-12T00:00:00+09:00'))).toBe(95);
    expect(daysUntilRace(new Date('2026-11-14T23:00:00+09:00'))).toBe(1);
    expect(daysUntilRace(new Date('2026-11-15T06:00:00+09:00'))).toBe(0);
  });

  it('UTC 늦은 밤이어도 한국 날짜로 계산한다', () => {
    // 2026-11-14T16:00Z = 2026-11-15 01:00 KST → 당일
    expect(daysUntilRace(new Date('2026-11-14T16:00:00Z'))).toBe(0);
  });

  it('대회가 지나면 음수를 돌려준다', () => {
    expect(daysUntilRace(new Date('2026-11-16T09:00:00+09:00'))).toBe(-1);
  });
});

describe('weekBackdrop', () => {
  it('첫 주차는 감청, 마지막 주차는 새벽빛', () => {
    expect(weekBackdrop(0, 5)).toBe('#0f1830');
    expect(weekBackdrop(4, 5)).toBe('#3b6ea5');
  });

  it('주차가 하나뿐이면 감청을 쓴다', () => {
    expect(weekBackdrop(0, 1)).toBe('#0f1830');
  });

  it('중간 주차는 두 색 사이에 놓인다', () => {
    const mid = weekBackdrop(2, 5);
    expect(mid).not.toBe('#0f1830');
    expect(mid).not.toBe('#3b6ea5');
    expect(mid).toMatch(/^#[0-9a-f]{6}$/);
  });
});
```

- [ ] **Step 3: 테스트가 실패하는지 확인**

Run: `npx vitest run src/lib/__tests__/challenge-stats.test.ts`
Expected: FAIL — `Failed to resolve import "@/lib/challenge/stats"`

- [ ] **Step 4: 최소 구현 작성**

`src/lib/challenge/stats.ts`:

```ts
// 쎄러데이 순수 로직 — 레이더 정규화, D-day, 주차 배경색
// 정규화 상수는 스펙 §6에 고정돼 있다. 값을 바꾸면 과거 주차와 비교가 깨진다.

import type { CrewStats, RadarAxes } from '@/types/challenge';

export const RACE_DATE = '2026-11-15';

// 정규화 상수 (스펙 §6 — 변경 금지)
const MAX_WEEKLY_KM = 60;
const MAX_LONGEST_KM = 42.195;
const SLOW_PACE_SEC = 420; // 7:00/km → 0점
const FAST_PACE_SEC = 300; // 5:00/km → 100점
const MAX_RUNS_PER_WEEK = 5;

const clamp100 = (n: number): number => Math.max(0, Math.min(100, n));

export function toRadarAxes(s: CrewStats): RadarAxes {
  return {
    power: clamp100((s.weeklyKm / MAX_WEEKLY_KM) * 100),
    endurance: clamp100((s.longestKm / MAX_LONGEST_KM) * 100),
    speed: clamp100(((SLOW_PACE_SEC - s.avgPaceSec) / (SLOW_PACE_SEC - FAST_PACE_SEC)) * 100),
    consistency: clamp100((s.runsPerWeek / MAX_RUNS_PER_WEEK) * 100),
  };
}

// 빌드 서버가 UTC여도 한국 날짜 기준으로 세야 D-day가 하루 어긋나지 않는다
function kstDateParts(d: Date): [number, number, number] {
  const s = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d); // 'YYYY-MM-DD'
  return [Number(s.slice(0, 4)), Number(s.slice(5, 7)), Number(s.slice(8, 10))];
}

export function daysUntilRace(now: Date): number {
  const [y, m, d] = kstDateParts(now);
  const today = Date.UTC(y, m - 1, d);
  const [ry, rm, rd] = RACE_DATE.split('-').map(Number);
  const race = Date.UTC(ry, rm - 1, rd);
  return Math.round((race - today) / 86_400_000);
}

// 타임라인 배경 — 주차가 쌓일수록 밝아진다 (스펙 §3 서사)
const DARK: [number, number, number] = [0x0f, 0x18, 0x30]; // #0f1830 감청
const DAWN: [number, number, number] = [0x3b, 0x6e, 0xa5]; // #3b6ea5 새벽빛

export function weekBackdrop(index: number, total: number): string {
  const t = total <= 1 ? 0 : Math.max(0, Math.min(1, index / (total - 1)));
  const hex = DARK.map((from, i) => Math.round(from + (DAWN[i] - from) * t))
    .map((c) => c.toString(16).padStart(2, '0'))
    .join('');
  return `#${hex}`;
}
```

- [ ] **Step 5: 테스트 통과 확인**

Run: `npx vitest run src/lib/__tests__/challenge-stats.test.ts`
Expected: PASS — 10 tests

- [ ] **Step 6: 타입체크**

Run: `npm run typecheck`
Expected: 에러 없음

- [ ] **Step 7: 커밋**

```bash
git add src/types/challenge.ts src/lib/challenge/stats.ts src/lib/__tests__/challenge-stats.test.ts
git commit -m "feat(saturday): 쎄러데이 타입과 순수 로직 — 레이더 정규화·D-day·주차 배경"
```

---

### Task 2: 데이터 파일

**Files:**
- Create: `src/lib/data/challenge/saturday.ts`
- Modify: `.gitignore`

**Interfaces:**
- Consumes: Task 1의 `CrewMember`, `WeekLog`, `RaceResult`
- Produces:
  - `SATURDAY_CREW: CrewMember[]` (8명)
  - `SATURDAY_WEEKS: WeekLog[]` (초기 빈 배열)
  - `SATURDAY_RACE_RESULT: RaceResult | null` (초기 null)
  - `RACE_META` — `{ name, dateLabel, place, marathonId }`

- [ ] **Step 1: 데이터 파일 작성**

코드네임은 아직 수집 전이므로 스펙 §14의 기본 동작대로 `MEMBER 1`–`MEMBER 8` 을 쓴다.
실명은 빈 문자열이라 렌더되지 않는다. 확정되면 이 파일만 고치면 된다.

`src/lib/data/challenge/saturday.ts`:

```ts
// 쎄러데이 — 손기정평화마라톤 2026 도전 기록 데이터
//
// 이 파일만 고치면 페이지 전체가 갱신된다.
// - 코드네임·실명 확정 시 codeName / realName 교체
// - 주간 기록은 SATURDAY_WEEKS 배열 맨 앞에 추가 (최신이 위)
// - 대회 후 SATURDAY_RACE_RESULT 채우면 결과 섹션이 렌더된다
//
// ⚠️ 원본 내보내기 파일(CSV/XML)은 커밋하지 않는다. 가공된 CrewStats만 넣는다.
//    GPS에 집 주소가, 심박에 건강정보가 들어 있다.

import type { CrewMember, WeekLog, RaceResult } from '@/types/challenge';

export const RACE_META = {
  name: '2026 손기정평화마라톤',
  dateLabel: '2026.11.15',
  place: '임진각 (경기 파주)',
  marathonId: 'sonkeechung-peace-marathon-2026',
} as const;

// 풀코스 6 / 10K 2
export const SATURDAY_CREW: CrewMember[] = [
  { id: 'm1', codeName: 'MEMBER 1', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm2', codeName: 'MEMBER 2', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm3', codeName: 'MEMBER 3', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm4', codeName: 'MEMBER 4', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm5', codeName: 'MEMBER 5', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm6', codeName: 'MEMBER 6', realName: '', distance: '풀코스', goal: '완주' },
  { id: 'm7', codeName: 'MEMBER 7', realName: '', distance: '10K', goal: '완주' },
  { id: 'm8', codeName: 'MEMBER 8', realName: '', distance: '10K', goal: '완주' },
];

// 최신 주차가 배열 맨 앞
export const SATURDAY_WEEKS: WeekLog[] = [];

// 대회 후에만 채운다. null이면 결과 섹션이 렌더되지 않는다.
export const SATURDAY_RACE_RESULT: RaceResult | null = null;
```

- [ ] **Step 2: 원본 내보내기 파일 커밋 차단**

`.gitignore` 맨 아래에 추가:

```
# 쎄러데이 — 크루 원본 활동 내보내기 (GPS·심박 포함, 커밋 금지)
/private/challenge/
```

- [ ] **Step 3: 타입체크**

Run: `npm run typecheck`
Expected: 에러 없음

- [ ] **Step 4: 커밋**

```bash
git add src/lib/data/challenge/saturday.ts .gitignore
git commit -m "feat(saturday): 크루 8명 데이터 파일 + 원본 활동파일 커밋 차단"
```

---

### Task 3: 라우트 그룹과 페이지 골격

이 태스크가 끝나면 `/saturday` 가 실제로 열린다.

**Files:**
- Create: `src/app/(challenge)/layout.tsx`
- Create: `src/app/(challenge)/saturday/page.tsx`

**Interfaces:**
- Consumes: Task 2의 `RACE_META`, `SATURDAY_CREW`
- Produces: `/saturday` 라우트

- [ ] **Step 1: 레이아웃 작성**

기존 `(main)` 헤더·검색을 붙이지 않는다. 하단에만 조용한 귀환 링크를 둔다.

`src/app/(challenge)/layout.tsx`:

```tsx
import Link from 'next/link';

export default function ChallengeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] bg-[#0a1020] text-white antialiased">
      {children}
      <footer className="border-t border-white/10 px-5 py-8 text-center">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center text-sm text-white/50 transition-colors hover:text-white/80"
        >
          러닝의 모든것에서 만듭니다
        </Link>
      </footer>
    </div>
  );
}
```

- [ ] **Step 2: 페이지 골격 작성**

섹션 컴포넌트는 Task 5–7에서 채운다. 지금은 h1과 메타데이터만 둔다.

`src/app/(challenge)/saturday/page.tsx`:

```tsx
import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';
import { RACE_META, SATURDAY_CREW } from '@/lib/data/challenge/saturday';

const TITLE = '쎄러데이 — 여덟 명의 손기정평화마라톤';
const DESCRIPTION =
  '토요일마다 모여 뛰던 중학교 친구 여덟이 2026 손기정평화마라톤에 나섭니다. 풀코스 6명, 10K 2명. 14주간의 준비 기록.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'article',
    locale: 'ko_KR',
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/saturday`,
    images: [`${SITE_URL}/images/challenge/saturday-og.webp`],
  },
  alternates: { canonical: '/saturday' },
};

export default function SaturdayPage() {
  const fullCount = SATURDAY_CREW.filter((m) => m.distance === '풀코스').length;
  const tenKCount = SATURDAY_CREW.length - fullCount;

  return (
    <main>
      <h1 className="px-5 pt-20 text-center text-4xl font-black tracking-tight">
        쎄러데이
      </h1>
      <p className="px-5 pt-4 text-center text-white/70">
        {RACE_META.dateLabel} · {RACE_META.name} · 풀코스 {fullCount} / 10K {tenKCount}
      </p>
    </main>
  );
}
```

- [ ] **Step 3: 빌드로 라우트 생성 확인**

Run: `npm run build`
Expected: 빌드 성공. 출력 라우트 목록에 `/saturday` 가 나타난다

- [ ] **Step 4: 커밋**

```bash
git add "src/app/(challenge)"
git commit -m "feat(saturday): (challenge) 라우트 그룹과 /saturday 페이지 골격"
```

---

### Task 4: SVG 레이더 차트

**Files:**
- Create: `src/components/challenge/stat-radar.tsx`

**Interfaces:**
- Consumes: Task 1의 `toRadarAxes`, `CrewStats`
- Produces: `<StatRadar baseline={CrewStats} final={CrewStats | undefined} size={number} />`

- [ ] **Step 1: 컴포넌트 작성**

4축을 위(주력)·오른쪽(지구력)·아래(스피드)·왼쪽(꾸준함) 순으로 배치한다.
`final` 이 있으면 두 폴리곤을 겹쳐 14주 성장을 보여준다.

> ⚠️ **아래 코드의 반지름 계산은 틀렸다 (2026-08-12 리뷰에서 적발, 커밋 `4f11cb2`에서 수정됨).**
> `r = size/2 - 18`, `lr = r + 12` 로 두면 `size=120`에서 라벨 중심이 x=114/x=6에 놓여
> viewBox 경계까지 여백이 6밖에 안 남는다. 그런데 `지구력`·`꾸준함` 은 한글 3자라
> `fontSize=9` 기준 반폭이 13.5라서 **양쪽 다 잘린다.**
>
> 실제 구현은 매직 넘버 대신 **라벨 폭 예산에서 반지름을 역산**한다:
> ```
> LABEL_HALF_WIDTH = (3 * 9) / 2 = 13.5   // 최대 3글자, CJK 1em 보수 가정
> LABEL_MARGIN     = 4                     // viewBox 경계까지 남기는 여백
> PLOT_GAP         = 8                     // 폴리곤 외곽과 라벨 사이 (겹침 방지)
> lr = c - LABEL_HALF_WIDTH - LABEL_MARGIN // size=120 → 42.5
> r  = lr - PLOT_GAP                       // size=120 → 34.5
> ```
> 각도 공식도 세 군데(폴리곤·축선·라벨)에 중복돼 있어 `axisAngle(i)` 하나로 뽑았다.
> **현행 코드는 `src/components/challenge/stat-radar.tsx` 를 볼 것.** 아래 블록은 기록용이다.

`src/components/challenge/stat-radar.tsx`:

```tsx
import { toRadarAxes } from '@/lib/challenge/stats';
import type { CrewStats, RadarAxes } from '@/types/challenge';

// 시계 방향 12시부터. 라벨 순서와 axisValues 순서는 반드시 일치해야 한다.
const AXIS_LABELS = ['주력', '지구력', '스피드', '꾸준함'] as const;

function axisValues(a: RadarAxes): number[] {
  return [a.power, a.endurance, a.speed, a.consistency];
}

function polygon(values: number[], cx: number, cy: number, r: number): string {
  return values
    .map((v, i) => {
      const angle = ((-90 + i * 90) * Math.PI) / 180;
      const d = (v / 100) * r;
      return `${(cx + d * Math.cos(angle)).toFixed(1)},${(cy + d * Math.sin(angle)).toFixed(1)}`;
    })
    .join(' ');
}

export function StatRadar({
  baseline,
  final,
  size = 120,
}: {
  baseline: CrewStats;
  final?: CrewStats;
  size?: number;
}) {
  const c = size / 2;
  const r = size / 2 - 18; // 라벨 자리
  const basePoints = polygon(axisValues(toRadarAxes(baseline)), c, c, r);
  const finalPoints = final ? polygon(axisValues(toRadarAxes(final)), c, c, r) : null;

  const label = final
    ? `준비 시작과 대회 직전의 러닝 지표 비교: ${AXIS_LABELS.join(', ')}`
    : `러닝 지표: ${AXIS_LABELS.join(', ')}`;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      role="img"
      aria-label={label}
      className="mx-auto block"
    >
      {/* 격자 — 25% 간격 4겹 */}
      {[0.25, 0.5, 0.75, 1].map((ratio) => (
        <polygon
          key={ratio}
          points={polygon([100, 100, 100, 100], c, c, r * ratio)}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />
      ))}
      {/* 축선 */}
      {[0, 1, 2, 3].map((i) => {
        const angle = ((-90 + i * 90) * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={c}
            y1={c}
            x2={c + r * Math.cos(angle)}
            y2={c + r * Math.sin(angle)}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
        );
      })}
      {/* 베이스라인 */}
      <polygon
        points={basePoints}
        fill={finalPoints ? 'rgba(255,255,255,0.10)' : 'rgba(96,165,250,0.28)'}
        stroke={finalPoints ? 'rgba(255,255,255,0.45)' : '#60a5fa'}
        strokeWidth="1.5"
      />
      {/* 대회 직전 (있을 때만) */}
      {finalPoints && (
        <polygon
          points={finalPoints}
          fill="rgba(251,146,60,0.28)"
          stroke="#fb923c"
          strokeWidth="2"
        />
      )}
      {/* 라벨 */}
      {AXIS_LABELS.map((text, i) => {
        const angle = ((-90 + i * 90) * Math.PI) / 180;
        const lr = r + 12;
        return (
          <text
            key={text}
            x={c + lr * Math.cos(angle)}
            y={c + lr * Math.sin(angle)}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fontWeight="700"
            fill="rgba(255,255,255,0.55)"
          >
            {text}
          </text>
        );
      })}
    </svg>
  );
}
```

- [ ] **Step 2: 타입체크와 린트**

Run: `npm run typecheck && npm run lint`
Expected: 에러 없음

- [ ] **Step 3: 커밋**

```bash
git add src/components/challenge/stat-radar.tsx
git commit -m "feat(saturday): 4축 SVG 레이더 차트 — 클라이언트 JS 0KB"
```

---

### Task 5: 히어로 섹션

**Files:**
- Create: `src/components/challenge/runner-glyph.tsx`
- Create: `src/components/challenge/hero.tsx`
- Modify: `src/app/(challenge)/saturday/page.tsx`

**Interfaces:**
- Consumes: Task 1의 `daysUntilRace`, Task 2의 `RACE_META`·`SATURDAY_CREW`
- Produces: `<Hero />` — 인자 없음. 데이터를 직접 읽는다

- [ ] **Step 1: 러너 실루엣 심볼 작성**

심볼을 한 번만 정의하고 `<use>` 로 8번 재사용한다.
(각진 형태를 반복 복제하면 파일이 커지고 형태가 어긋난다)

`src/components/challenge/runner-glyph.tsx`:

```tsx
// 러너 실루엣 심볼 — 문서에 1회만 렌더하고 <use href="#runner-glyph" /> 로 재사용
export function RunnerGlyphDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <symbol id="runner-glyph" viewBox="0 0 40 100">
          <path
            d="M22 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0zM17 17c4 0 7 2 8 6l3 10 6 4-2 5-8-5-2-6-3 9 7 8 2 20-6 1-2-17-9-9c-2-2-2-4-1-7l4-13-5 4-3 8-5-2 4-11c1-3 3-5 6-6l6-3z"
            fill="currentColor"
          />
        </symbol>
      </defs>
    </svg>
  );
}
```

- [ ] **Step 2: 히어로 작성**

`src/components/challenge/hero.tsx`:

```tsx
import { daysUntilRace } from '@/lib/challenge/stats';
import { RACE_META, SATURDAY_CREW } from '@/lib/data/challenge/saturday';

// 실루엣 심볼(#runner-glyph)은 page.tsx가 한 번 렌더한다 — 라인업 카드도 같은 심볼을 쓴다
export function Hero() {
  const dday = daysUntilRace(new Date());
  const fullCount = SATURDAY_CREW.filter((m) => m.distance === '풀코스').length;
  const tenKCount = SATURDAY_CREW.length - fullCount;

  const ddayLabel = dday > 0 ? `D-${dday}` : dday === 0 ? 'D-DAY' : `완주 +${-dday}일`;

  return (
    <section className="relative overflow-hidden bg-[#0a1020] px-5 pb-16 pt-24">
      {/* 지평선 잔광 — 카피 뒤 스크림 겸용 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64"
        style={{
          background:
            'radial-gradient(120% 100% at 50% 100%, rgba(59,110,165,0.45) 0%, rgba(10,16,32,0) 70%)',
        }}
      />

      <div className="relative mx-auto max-w-md text-center">
        <h1 className="text-5xl font-black tracking-tight">쎄러데이</h1>

        <p className="mt-6 text-lg font-semibold leading-relaxed text-white/90">
          토요일마다 모여 뛰던
          <br />
          중학교 친구 여덟이,
          <br />
          42.195km 앞에 섰다.
        </p>

        <p className="mt-6 text-sm text-white/55">
          {RACE_META.dateLabel} · {RACE_META.name}
          <br />
          {RACE_META.place} · 풀코스 {fullCount} / 10K {tenKCount}
        </p>

        <p className="mt-8 text-4xl font-black tabular-nums text-[#fb923c]">{ddayLabel}</p>

        {/* 여덟 실루엣 — 하나씩 켜진다 */}
        <div className="mt-10 flex items-end justify-center gap-1.5 text-white/70">
          {SATURDAY_CREW.map((m, i) => (
            <svg
              key={m.id}
              viewBox="0 0 40 100"
              className="h-16 w-6 animate-in fade-in duration-1000 fill-mode-both motion-reduce:animate-none"
              style={{ animationDelay: `${i * 140}ms` }}
              aria-hidden="true"
            >
              <use href="#runner-glyph" />
            </svg>
          ))}
        </div>

        {/* 액션 앵커 — 첫 화면에 상시 노출 */}
        <a
          href="#lineup"
          className="mt-10 inline-flex min-h-[44px] items-center rounded-full border border-white/25 px-6 text-sm font-bold text-white/90 transition-colors hover:bg-white/10"
        >
          여덟 명 보기 ↓
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: 페이지에 연결**

`src/app/(challenge)/saturday/page.tsx` 의 `export default function SaturdayPage()` 본문 전체를
아래로 교체한다 (골격의 임시 h1·p 제거, import 도 함께 정리):

```tsx
export default function SaturdayPage() {
  return (
    <main>
      {/* 실루엣 심볼 1회 정의 — 히어로와 라인업 카드가 함께 쓴다 */}
      <RunnerGlyphDefs />
      <Hero />
    </main>
  );
}
```

파일 상단 import 에 다음을 추가하고, 더 이상 쓰지 않는 `RACE_META`·`SATURDAY_CREW` import 는 지운다:

```tsx
import { Hero } from '@/components/challenge/hero';
import { RunnerGlyphDefs } from '@/components/challenge/runner-glyph';
```

- [ ] **Step 4: 빌드와 육안 확인**

Run: `npm run build && npm run lint`
Expected: 성공

`npm run dev` 후 브라우저에서 확인한다. **모바일 검증은 DevTools 에뮬레이션이
플래키하므로 `window.open('http://localhost:3000/saturday', '_blank', 'width=390,height=844')`
로 실제 창을 띄운다.** 확인 항목:
- h1 "쎄러데이" 가 실제 텍스트로 렌더되는가
- 실루엣 8개가 시차를 두고 나타나는가
- 앵커 버튼이 스크롤 없이 첫 화면에 보이는가
- D-day 숫자가 오늘 기준으로 맞는가

- [ ] **Step 5: 커밋**

```bash
git add src/components/challenge "src/app/(challenge)/saturday/page.tsx"
git commit -m "feat(saturday): 히어로 — 워드마크·여덟 실루엣·D-day·상시 앵커"
```

---

### Task 6: 라인업 섹션

**Files:**
- Create: `src/components/challenge/crew-card.tsx`
- Create: `src/components/challenge/lineup.tsx`
- Modify: `src/app/(challenge)/saturday/page.tsx`

**Interfaces:**
- Consumes: Task 4의 `StatRadar`, Task 1의 `CrewMember`
- Produces: `<Lineup />`, `<CrewCard member={CrewMember} />`

- [ ] **Step 1: 카드 작성**

`baseline` 이 없으면 CLASSIFIED로 렌더한다. **미완성이 아니라 "정보 없음"이라는 설정으로
보여야 한다.** 확장은 `<details>` 로 처리해 JS를 쓰지 않는다.

`src/components/challenge/crew-card.tsx`:

```tsx
import { StatRadar } from './stat-radar';
import type { CrewMember } from '@/types/challenge';

function paceLabel(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}/km`;
}

export function CrewCard({ member }: { member: CrewMember }) {
  const { codeName, realName, distance, goal, photo, baseline, final } = member;

  return (
    <details className="group rounded-xl border border-white/12 bg-white/[0.04] open:bg-white/[0.07]">
      <summary className="flex min-h-[44px] cursor-pointer list-none flex-col items-center px-3 py-4 [&::-webkit-details-marker]:hidden">
        {/* 사진 없으면 실루엣 — 미공개도 컨셉 안에 있는 상태로 보여야 한다.
            #runner-glyph 심볼은 page.tsx가 1회 렌더한다 */}
        <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.06]">
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo} alt="" width={56} height={56} className="h-full w-full object-cover" />
          ) : (
            <svg viewBox="0 0 40 100" className="h-9 w-4 text-white/45" aria-hidden="true">
              <use href="#runner-glyph" />
            </svg>
          )}
        </span>

        <span className="mt-2 text-base font-black tracking-tight">{codeName}</span>
        <span className="mt-0.5 text-[11px] text-white/45">
          {realName ? `${realName} · ` : ''}
          {distance}
        </span>

        <span className="mt-3 block">
          {baseline ? (
            <StatRadar baseline={baseline} final={final} size={120} />
          ) : (
            <span
              className="flex h-[120px] w-[120px] items-center justify-center rounded-lg border border-dashed border-white/20 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_6px,transparent_6px,transparent_12px)]"
              aria-label="기록 미공개"
            >
              <span className="text-[10px] font-bold tracking-widest text-white/40">
                CLASSIFIED
              </span>
            </span>
          )}
        </span>

        <span className="mt-3 text-xs text-white/70">목표 {goal}</span>
        <span className="mt-2 text-[10px] text-white/35 group-open:hidden">자세히 ▾</span>
      </summary>

      <div className="border-t border-white/10 px-3 py-3 text-[11px] leading-relaxed text-white/65">
        {baseline ? (
          <dl className="space-y-1">
            <div className="flex justify-between">
              <dt>주간 거리</dt>
              <dd className="tabular-nums text-white/85">{baseline.weeklyKm}km</dd>
            </div>
            <div className="flex justify-between">
              <dt>최장 거리</dt>
              <dd className="tabular-nums text-white/85">{baseline.longestKm}km</dd>
            </div>
            <div className="flex justify-between">
              <dt>평균 페이스</dt>
              <dd className="tabular-nums text-white/85">{paceLabel(baseline.avgPaceSec)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>주 러닝</dt>
              <dd className="tabular-nums text-white/85">{baseline.runsPerWeek}회</dd>
            </div>
            <p className="pt-2 text-[10px] text-white/35">
              {baseline.source} 기록 · {baseline.asOf} 기준
            </p>
          </dl>
        ) : (
          <p className="text-white/50">
            아직 기록을 공유하지 않았습니다. 준비되면 능력치가 공개됩니다.
          </p>
        )}
      </div>
    </details>
  );
}
```

- [ ] **Step 2: 그리드 작성**

`src/components/challenge/lineup.tsx`:

```tsx
import { CrewCard } from './crew-card';
import { SATURDAY_CREW } from '@/lib/data/challenge/saturday';

export function Lineup() {
  return (
    <section id="lineup" className="scroll-mt-4 bg-[#0f1830] px-4 py-14">
      <div className="mx-auto max-w-md">
        <h2 className="text-center text-xl font-black tracking-tight">여덟 명</h2>
        <p className="mt-2 text-center text-xs text-white/45">
          카드를 누르면 기록이 펼쳐집니다
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {SATURDAY_CREW.map((m) => (
            <CrewCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: 페이지에 연결**

`src/app/(challenge)/saturday/page.tsx` 에 import 추가:

```tsx
import { Lineup } from '@/components/challenge/lineup';
```

`<main>` 안 `<Hero />` 아래에 `<Lineup />` 을 넣는다.

- [ ] **Step 4: 결측 시나리오 육안 확인**

Run: `npm run build && npm run dev`

`src/lib/data/challenge/saturday.ts` 의 `m1` 에 임시로 baseline을 넣어 **혼재 상태**를 본다:

```ts
{ id: 'm1', codeName: 'MEMBER 1', realName: '', distance: '풀코스', goal: '완주',
  baseline: { source: '가민', asOf: '2026-08-12', weeklyKm: 28, longestKm: 15, avgPaceSec: 372, runsPerWeek: 3 } },
```

390px 실창에서 확인한다:
- 2열 × 4행으로 떨어지는가
- CLASSIFIED 카드가 **미완성이 아니라 의도된 상태로** 보이는가
- 레이더 카드와 CLASSIFIED 카드의 높이가 어긋나지 않는가
- 사진 없는 멤버의 원형 실루엣이 제대로 나오는가 (`#runner-glyph` 참조가 끊기면 빈 원이 된다)
- 카드를 탭하면 펼쳐지는가 (JS 없이)

확인 후 **임시 baseline을 되돌린다.**

- [ ] **Step 5: 커밋**

```bash
git add src/components/challenge "src/app/(challenge)/saturday/page.tsx"
git commit -m "feat(saturday): 라인업 — 8인 카드·CLASSIFIED 상태·details 확장"
```

---

### Task 7: 타임라인 섹션

**Files:**
- Create: `src/components/challenge/timeline.tsx`
- Modify: `src/app/(challenge)/saturday/page.tsx`

**Interfaces:**
- Consumes: Task 1의 `weekBackdrop`, Task 2의 `SATURDAY_WEEKS`·`SATURDAY_CREW`
- Produces: `<Timeline />`

- [ ] **Step 1: 타임라인 작성**

주차가 없으면 섹션 자체를 렌더하지 않는다 (빈 섹션 노출 금지).
배열은 최신이 앞이므로, 배경 밝기 계산 시 인덱스를 뒤집어 **오래된 주차가 어둡게** 한다.

`src/components/challenge/timeline.tsx`:

```tsx
import { weekBackdrop } from '@/lib/challenge/stats';
import { SATURDAY_WEEKS, SATURDAY_CREW } from '@/lib/data/challenge/saturday';

export function Timeline() {
  if (SATURDAY_WEEKS.length === 0) return null;

  const total = SATURDAY_WEEKS.length;
  const nameOf = new Map(SATURDAY_CREW.map((m) => [m.id, m.codeName]));

  return (
    <section id="timeline" className="scroll-mt-4">
      <h2 className="bg-[#0f1830] px-5 pb-6 pt-14 text-center text-xl font-black tracking-tight">
        14주의 기록
      </h2>

      {SATURDAY_WEEKS.map((w, i) => (
        // 배열 맨 앞이 최신 → 밝기 인덱스를 뒤집는다
        <article
          key={w.week}
          className="px-5 py-8"
          style={{ backgroundColor: weekBackdrop(total - 1 - i, total) }}
        >
          <div className="mx-auto max-w-md">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-black tracking-tight">
                D-{w.dday} · {w.week}주차
              </h3>
              <span className="text-[11px] text-white/50">{w.dateLabel}</span>
            </div>

            {w.headline && (
              <p className="mt-2 text-sm font-semibold text-white/85">{w.headline}</p>
            )}

            <ul className="mt-4 space-y-2">
              {w.entries.map((e) => (
                <li key={e.memberId} className="text-[13px] leading-relaxed">
                  <span className="inline-block w-24 shrink-0 font-bold text-white/90">
                    {nameOf.get(e.memberId) ?? e.memberId}
                  </span>
                  <span className="tabular-nums text-white/70">
                    {typeof e.km === 'number' ? `${e.km}km` : '—'}
                  </span>
                  {e.note && <span className="text-white/55"> · {e.note}</span>}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
```

- [ ] **Step 2: 페이지에 연결**

`src/app/(challenge)/saturday/page.tsx` 에 import 추가:

```tsx
import { Timeline } from '@/components/challenge/timeline';
```

`<Lineup />` 아래에 `<Timeline />` 을 넣는다.

- [ ] **Step 3: 밝기 전환 육안 확인**

`SATURDAY_WEEKS` 에 임시로 3개 주차를 넣어 그라데이션이 실제로 밝아지는지 본다:

```ts
export const SATURDAY_WEEKS: WeekLog[] = [
  { week: 3, dday: 81, dateLabel: '08.25 – 08.31', headline: '셋이 20km를 넘겼다.',
    entries: [{ memberId: 'm1', km: 32, note: '무릎이 슬슬 신호를 보냄' }, { memberId: 'm2', km: 18 }] },
  { week: 2, dday: 88, dateLabel: '08.18 – 08.24',
    entries: [{ memberId: 'm1', km: 24 }, { memberId: 'm2' }] },
  { week: 1, dday: 95, dateLabel: '08.11 – 08.17', headline: '시작.',
    entries: [{ memberId: 'm1', km: 18 }] },
];
```

Run: `npm run dev` 후 390px 실창에서 확인
- 위(최신 주차)가 밝고 아래(1주차)가 어두운가
- 기록 없는 사람이 `—` 로 조용히 처리되는가
- 라인업 섹션 `#0f1830` 과 1주차 배경이 매끄럽게 이어지는가

확인 후 **임시 주차 데이터를 빈 배열로 되돌린다.**

- [ ] **Step 4: 빌드와 커밋**

```bash
npm run build && npm run lint
git add src/components/challenge/timeline.tsx "src/app/(challenge)/saturday/page.tsx"
git commit -m "feat(saturday): 타임라인 — 주차가 쌓일수록 밝아지는 배경"
```

---

### Task 8: OG 이미지와 최종 검증

**Files:**
- Create: `scripts/challenge-og.js`
- Create: `public/images/challenge/saturday-og.webp` (스크립트 산출물)
- Modify: `package.json` (scripts에 `og:saturday` 추가)

**Interfaces:**
- Consumes: Task 2의 `SATURDAY_CREW` (인원 수 표기)
- Produces: `/images/challenge/saturday-og.webp` — Task 3의 메타데이터가 참조하는 파일

- [ ] **Step 1: OG HTML 생성 스크립트 작성**

리포의 블로그 썸네일과 같은 방식을 따른다 — sharp의 SVG 렌더는 woff2 가변 폰트를
못 읽어 한글이 깨지므로, **HTML을 만들어 Chrome으로 찍고 sharp로 변환**한다.

`scripts/challenge-og.js`:

```js
#!/usr/bin/env node
/**
 * 쎄러데이 OG 이미지 생성 (1200×630)
 *
 * 1) 이 스크립트로 HTML을 만든다
 * 2) Chrome DevTools MCP로 file:// 을 열고 1200×630 스크린샷 → PNG
 * 3) 이 스크립트의 --convert 로 WebP 변환
 *
 * sharp의 SVG 렌더는 woff2 가변 폰트를 못 읽어 한글이 깨진다.
 * 그래서 블로그 썸네일과 동일하게 Chrome 렌더를 거친다.
 *
 * Usage:
 *   node scripts/challenge-og.js            # HTML 생성 → 경로 출력
 *   node scripts/challenge-og.js --convert  # PNG → WebP
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images', 'challenge');
const HTML_PATH = path.join(__dirname, '..', '.next', 'saturday-og.html');
const PNG_PATH = path.join(OUT_DIR, 'saturday-og.png');
const WEBP_PATH = path.join(OUT_DIR, 'saturday-og.webp');

const RUNNER =
  'M22 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0zM17 17c4 0 7 2 8 6l3 10 6 4-2 5-8-5-2-6-3 9 7 8 2 20-6 1-2-17-9-9c-2-2-2-4-1-7l4-13-5 4-3 8-5-2 4-11c1-3 3-5 6-6l6-3z';

function html() {
  const glyphs = Array.from({ length: 8 })
    .map(
      () =>
        `<svg viewBox="0 0 40 100" width="52" height="130"><path d="${RUNNER}" fill="rgba(255,255,255,0.75)"/></svg>`
    )
    .join('');

  return `<!doctype html>
<html lang="ko"><head><meta charset="utf-8">
<style>
  @font-face {
    font-family: 'Pretendard';
    src: url('file://${path.join(__dirname, '..', 'src', 'app', 'fonts', 'PretendardVariable.woff2')}') format('woff2-variations');
    font-weight: 45 920;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px;
    background: #0a1020;
    font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
    color: #fff;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    position: relative; overflow: hidden;
  }
  .glow {
    position: absolute; inset: auto 0 0 0; height: 340px;
    background: radial-gradient(120% 100% at 50% 100%, rgba(59,110,165,0.5) 0%, rgba(10,16,32,0) 70%);
  }
  h1 { font-size: 96px; font-weight: 900; letter-spacing: -0.03em; position: relative; }
  p.lead { margin-top: 24px; font-size: 30px; font-weight: 700; color: rgba(255,255,255,0.9); position: relative; }
  p.meta { margin-top: 16px; font-size: 22px; color: rgba(255,255,255,0.55); position: relative; }
  .row { margin-top: 40px; display: flex; gap: 10px; align-items: flex-end; position: relative; }
</style></head>
<body>
  <div class="glow"></div>
  <h1>쎄러데이</h1>
  <p class="lead">토요일마다 모여 뛰던 중학교 친구 여덟이, 42.195km 앞에 섰다.</p>
  <p class="meta">2026.11.15 · 손기정평화마라톤 · 임진각</p>
  <div class="row">${glyphs}</div>
</body></html>`;
}

if (process.argv.includes('--convert')) {
  const sharp = require('sharp');
  if (!fs.existsSync(PNG_PATH)) {
    console.error(`❌ PNG 없음: ${PNG_PATH}\n   먼저 Chrome으로 1200×630 스크린샷을 찍어 저장하세요.`);
    process.exit(1);
  }
  sharp(PNG_PATH)
    .webp({ quality: 90 })
    .toFile(WEBP_PATH)
    .then(() => {
      fs.unlinkSync(PNG_PATH);
      console.log(`✅ ${WEBP_PATH} (${(fs.statSync(WEBP_PATH).size / 1024).toFixed(0)}KB)`);
    });
} else {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(HTML_PATH), { recursive: true });
  fs.writeFileSync(HTML_PATH, html());
  console.log(`✅ HTML 생성: ${HTML_PATH}`);
  console.log(`   Chrome으로 file://${HTML_PATH} 를 1200×630으로 열어 스크린샷 →`);
  console.log(`   ${PNG_PATH} 로 저장한 뒤 'node scripts/challenge-og.js --convert' 실행`);
}
```

- [ ] **Step 2: package.json에 스크립트 추가**

`scripts` 객체에 추가한다 (기존 항목은 건드리지 않는다):

```json
"og:saturday": "node scripts/challenge-og.js"
```

- [ ] **Step 3: OG 이미지 생성**

```bash
npm run og:saturday
```

출력된 HTML 경로를 Chrome DevTools MCP로 연다:
- `navigate_page` 로 `file://.../.next/saturday-og.html`
- `resize_page` 로 1200×630
- `take_screenshot` 으로 `public/images/challenge/saturday-og.png` 저장

그다음:

```bash
node scripts/challenge-og.js --convert
```

Expected: `public/images/challenge/saturday-og.webp` 생성, PNG 삭제됨

- [ ] **Step 4: 전체 검증 체인**

```bash
npm run typecheck && npm run lint && npm test && npm run build && npm run check:payload
```

Expected: 전부 통과. `check:payload` 에서 `saturday.rsc` 가 800KB 상한 아래인지 확인

- [ ] **Step 5: 클라이언트 JS 0KB 확인**

Run: `grep -rn "use client" src/components/challenge src/app/\(challenge\)`
Expected: **출력 없음** — 하나라도 나오면 예산이 깨진 것이므로 원인을 제거한다

빌드 출력의 `/saturday` 행에서 First Load JS 를 확인한다. 공유 청크를 넘는
페이지 전용 JS가 붙어 있으면 안 된다.

- [ ] **Step 6: 사이트맵 포함 확인**

Run: `grep -c "saturday" public/sitemap-0.xml`
Expected: `1` — `next-sitemap.config.js` 의 exclude에 걸리지 않아 자동 포함된다

- [ ] **Step 7: 모바일 육안 최종 검증**

`npm run dev` 후 **`window.open('http://localhost:3000/saturday', '_blank', 'width=390,height=844')`**
로 실제 창을 띄운다 (DevTools 에뮬레이션은 플래키하므로 쓰지 않는다).

스펙 §13의 5프레임을 눈으로 확인한다:
1. 진입 시점 — 워드마크·카피 가독성
2. 실루엣 전체 노출 — 8개가 시차를 두고 켜지는가
3. 앵커 — 스크롤 없이 보이는가
4. 라인업 — 2열 정렬, CLASSIFIED 카드 높이 일치
5. reduced motion — OS 설정을 켜고 **모든 애니메이션이 멈추는가**

가로 스크롤이 생기지 않는지도 확인한다.

- [ ] **Step 8: 커밋**

```bash
git add scripts/challenge-og.js package.json public/images/challenge/saturday-og.webp
git commit -m "feat(saturday): OG 이미지 생성 스크립트 + 1200x630 산출물"
```

---

## 완료 기준

- `/saturday` 가 빌드되고 사이트맵에 포함된다
- 클라이언트 JS 0KB (`use client` 0건)
- `npm run typecheck && npm run lint && npm test && npm run build && npm run check:payload` 전부 통과
- 데이터가 비어 있어도(코드네임 미확정·baseline 0명·주차 0개) 페이지가 완성돼 보인다
- 390px 실창에서 가로 스크롤이 없고 reduced motion에서 완전 정적이다

## 이 계획 밖 (스펙 §12의 2·3단계)

- 인스타 주간 카드 생성 (`scripts/thumbnail/` 확장) — 1단계 배포 후
- 결과 섹션·레이더 겹치기 — 11/15 이후
- 마케팅 운영 전략 — 별도 아이데이션
