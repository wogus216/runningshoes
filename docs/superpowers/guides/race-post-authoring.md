# 대회 글 쓰는 법 (2026-08-19 표준)

`BlogPost.raceMeta`(`src/types/blog.ts`)를 넣으면 이 구성 표준이 적용되고
`npm run validate`(8번 섹션)가 자동으로 검사한다.

**넣지 않으면 기존 방식 그대로다.** 기존 대회 글 70편은 이 필드가 없어 검사 대상이
아니고 렌더도 바뀌지 않는다. 새 표준은 `raceMeta`를 넣는 순간부터 그 글에만 적용된다.

## `raceMeta` 필드 전체

| 필드 | 필수 | 설명 |
|---|---|---|
| `displayTitle` | 필수 | 화면용 제목. 검색용 `title`과 별개, 40자 이하 |
| `displaySubtitle` | 선택 | 부제 |
| `raceDate` | 필수 | 대회일. `'YYYY-MM-DD'` |
| `registrationStart` | 선택 | 접수 시작. `'YYYY-MM-DDTHH:mm'` |
| `registrationEnd` | 선택 | 접수 마감 |
| `registrationVia` | 선택 | 접수처 (예: `'YES24 티켓'`) |
| `action` | 선택 | `{ what, how }` — 지금 뭘 준비해야 하는지 |
| `facts` | 필수 | 핵심 카드 4~6개, `RaceFact[]` |
| `highlights` | 필수 | 이 대회만의 것 2~4개, `RaceHighlight[]` |
| `elevation` | 선택 | 고도 프로파일, `RaceElevationPoint[]` |
| `elevationSource` | 선택 | 고도 수치 출처. `elevation`이 있으면 사실상 필수(경고) |
| `marathonId` | 선택 | 마라톤 DB(`src/lib/data/marathon/`) 연결 id |

날짜는 전부 **KST 기준 문자열**이다. `RaceFact`는 `{ label, value, sub? }`,
`RaceHighlight`는 `{ badge, title, desc }` (`badge`는 `'3×'`·`'12월'`·`'국내 유일'`
같은 표식 — 순번 `01/02/03`은 쓰지 않는다).

## 최소 예시

```typescript
{
  id: 'busan-bridge-marathon',
  slug: 'busan-bridge-marathon',        // ⚠️ 연도 금지
  title: '국내 첫 트리플 브릿지 풀코스 — 부산브릿지마라톤 접수 8월 24일 10시 | 광안대교·부산항대교·남항대교',
  // ... 기존 필드(description/content/author/publishedAt/category/tags/readingTime 등) ...
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

## 지켜야 할 것 — 검사 규칙 10종

전부 `src/lib/blog/race-meta-rules.ts`의 `checkRaceMeta()`가 검사하고,
`npm run validate` 실행 시 자동으로 돈다(별도 명령 없음).

| 규칙 | 수준 | 왜 |
|---|---|---|
| `facts-count` — `facts` 4~6개 | 에러 | 적으면 그리드가 비고 많으면 스캔이 안 된다 |
| `highlights-count` — `highlights` 2~4개 | 에러 | 1개면 "이 대회만의 것"이 성립 안 한다 |
| `no-tldr` — 본문에 `class="tldr"` 금지 | 에러 | 3줄 요약은 접수 정보 반복이었다 |
| `slug-no-year` — slug에 `20\d\d` 금지 | 에러 | 매년 같은 URL이 권위를 쌓는다 |
| `display-title-length` — `displayTitle` 40자 이하 | 에러 | 넘으면 414px 화면에서 3줄이 된다 |
| `display-title-same` — `displayTitle`이 `title`과 동일 | 경고 | 검색 제목을 그대로 복사했다면 별도 필드를 둔 의미가 없다 |
| `race-date-parse` — `raceDate`가 날짜로 파싱 가능 | 에러 | 파싱 실패하면 상태 배지 계산이 통째로 죽는다 |
| `registration-order` — 접수 마감 ≥ 접수 시작 | 에러 | 역전되면 상태가 영구 closed로 고정된다 |
| `shoe-links` — 고유 신발 링크 3개 이상 | 경고 | 3개 이상이면 자동 신발 카드 브릿지가 렌더되지 않는다(수동 링크와 중복 방지) |
| `elevation-source` — `elevation`이 있는데 `elevationSource` 없음 | 경고 | 출처 없는 고도 그래프는 실측처럼 읽힌다 |

## 본문에 쓰는 것 / 안 쓰는 것

**쓴다** — 표가 답할 수 없는 것. "4:30과 5시간이 헷갈리는 이유", 코스 전략, 다른
대회와의 선택 기준, 이 대회만의 리스크(오르막·방풍·기록 조건 등).

**안 쓴다** — 접수일·정원·참가비 재서술. 그건 `facts`와 맨 아래 요강표가 이미 한다.
본문에서 같은 숫자를 다시 서술하면 갱신할 때 두 곳이 따로 놀다가 어긋난다.

전체 요강표는 **본문 맨 아래**에 둔다. 대회마다 항목(교통편·기념품·부문별 상금 등)이
달라 `raceMeta`로 강제하지 않고 자유 서식 표로 남긴다.

## 고도 프로파일

수치가 **공개된 대회만** 넣는다.

```typescript
    elevation: [{ km: 0, m: 5 }, { km: 12, m: 32 }, /* ... */],
    elevationSource: '대회 공식 코스 안내 (2026-08-19 확인)',
```

**공개되지 않았으면 넣지 않는다.** 대충 그린 산 모양은 실측처럼 읽힌다.
대회 공식 코스맵 **이미지**는 저작권상 쓰지 않는다 — 근거는 스펙
`docs/superpowers/specs/2026-08-19-race-post-structure-design.md` 9-1절.
수치만 확보되면 사이트가 자체 SVG로 그린다.

## 상태 배지는 손으로 적지 않는다

접수중/마감임박/마감/종료 배지는 `registrationStart`·`registrationEnd`·`raceDate`에서
**자동 계산**된다(브라우저 시각 기준 D-day). 본문에 `D-12` 같은 문구를 손으로 쓰지 않는다
— 실제로 라이브에 "D-12"가 일주일 틀린 채 서 있던 사고가 이 표준을 만든 계기다.
