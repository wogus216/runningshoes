# 쎄러데이 MISSION 00 — 컴포넌트·기술 설계

> 상태: 1차 구현 완료 후 동기화 기준 · 2026-08-15  
> 이 문서는 현재 구현을 다시 만들지 않고, 웹·Remotion·향후 Mission Log의 경계와 남은 수정 범위를 고정한다.

## 1. 이번 구현의 범위

### 만든다

- `/saturday` 독립 티저 페이지
- MISSION HERO, CREW REVEAL, RACE TARGET 세 문단
- 7명 코드네임과 거리 공개
- KST 기준 D-day
- 반응형·모션 감소·키보드 접근성
- 사진이 없어도 완성되는 그래픽 프레임
- 웹과 Remotion이 실제로 공유하는 문구·로스터 데이터
- 정적 OG 이미지
- 기존 Web/Reel Remotion 영상의 최신 카피 재렌더

### 아직 만들지 않는다

- Mission Log 앨범
- 로그인, 관리자 CMS, 사진 업로드 UI
- 개인 기록 차트와 Garmin/Strava 연동
- 자동 재생 음향
- GSAP 또는 무거운 영상 플레이어
- 새로운 Remotion 프로젝트 또는 composition 재구축

## 2. 현재 구현과 남은 정본 차이

현재 `/saturday`는 7명·3문단·반응형·Web/Reel Hero 영상까지 구현되어 있다. 새 페이지를 다시 만드는 것이 아니라 아래 남은 차이만 해소한다.

| 항목 | 현재 구현 | 맞춰야 할 정본 |
|---|---|---|
| 웹 인원·거리 | 7명 / FULL 6 / 광묵 10K 1 | 완료, 유지 |
| 웹 카피 | `첫 번째 이야기`, `모였다.`, `그날, 파주에서` | 완료, 유지 |
| Remotion 카피 | `ASSEMBLE`, `FINAL MISSION`, `MISSION 00`, `CLASSIFIED` 잔존 | 웹과 같은 한글 정본으로 교체 |
| 다음 기록 | `다음 이야기는 대회가 끝나고` | `다음 이야기는 첫 러닝부터` |
| 데이터 | 웹 `saturday.ts`, 영상 `theme.ts`에 멤버·문구 중복 | 순수 공유 모듈 하나로 통합 |
| 와이어프레임 | 공간은 유효하지만 구 카피·가짜 링크·10K 차등색 잔존 | 최신 카피와 동등한 로스터로 동기화 |

작업의 첫 단계는 기존 구조를 보존한 채 위 차이를 테스트로 고정하는 것이다. 이미 완료된 Web composition이나 페이지 구조를 재생성하지 않는다.

## 3. 목표 렌더 트리

```text
SaturdayPage                          Server Component
└─ SaturdayTeaser                     Server Component
   ├─ SaturdayHeader                  Server Component
   ├─ MissionHero                     Server Component
   │  └─ HeroVideo                    Client Component
   ├─ CrewReveal                      Server Component
   │  └─ CrewEntry markup × 7         Server-rendered markup
   ├─ RaceTarget                      Server Component
   │  ├─ DdayCounter                  Client Component
   │  └─ Blackout ending              Server Component
   ├─ SaturdayFooter                  Server Component
   └─ CinematicDirector               Client Component
```

원칙은 **콘텐츠는 서버, 시간과 관찰만 클라이언트**다. 세 문단을 전부 `use client`로 만들지 않는다.

`CinematicDirector`는 콘텐츠를 다시 렌더하지 않는다. native scroll 위치를 `0–1 progress`, `0–3 beat`, CSS 변수로 번역한다. 문구와 멤버 HTML은 계속 서버에서 렌더한다.

## 4. 권장 파일 구조

```text
src/
├─ app/(challenge)/saturday/
│  ├─ page.tsx
│  ├─ opengraph-image.tsx           # 또는 정적 saturday-og.webp
│  └─ saturday.module.css           # 페이지 전용 토큰·레이아웃·모션
├─ components/challenge/saturday/
│  ├─ saturday-teaser.tsx
│  ├─ mission-hero.tsx
│  ├─ crew-reveal.tsx
│  ├─ race-target.tsx
│  ├─ hero-video.tsx                # use client, 영상·사운드 제어
│  ├─ d-day-counter.tsx             # use client
│  └─ cinematic-director.tsx        # use client, progress/beat만 제어
├─ lib/data/challenge/
│  ├─ saturday-content.ts           # Next 의존 없는 웹·영상 공통 정본
│  └─ saturday.ts                   # 앱 타입에 맞춘 재수출·Mission Log 데이터
└─ types/
   └─ challenge.ts
```

세 문단뿐이므로 파일을 더 잘게 쪼개지 않는다. 현재처럼 Crew entry는 map 내부 마크업으로 유지하고, `Typography`, `Line`, `Panel` 같은 단 한 번 쓰는 추상 컴포넌트는 만들지 않는다.

## 5. 데이터 모델

현재 `CrewMember`는 시즌 아카이브를 염두에 둔 타입이므로 유지한다. 다만 웹과 Remotion이 서로 다른 배열과 문구를 갖지 않도록 Next.js import가 없는 `saturday-content.ts`를 단일 정본으로 둔다. 앱의 `saturday.ts`와 영상의 `theme.ts`는 이를 소비하되 멤버·화면 카피를 다시 선언하지 않는다.

```ts
type SaturdayDistance = '풀코스' | '10K';

interface SaturdayRaceMeta {
  name: string;
  dateIso: '2026-11-15';
  dateLabel: '2026.11.15';
  datePoster: '11 / 15';
  place: string;
  timezone: 'Asia/Seoul';
  marathonId: string;
}

interface SaturdayTeaserCopy {
  hero: {
    question: string;
    turn: string;
    hook: string;
    support: string;
  };
  crew: {
    title: string;
    support: string;
    statusLine: string;
  };
  race: {
    eyebrow: string;
    hook: string;
    ending: string;
    nextStory: string;
  };
}

interface SaturdayMedia {
  src: string;
  alt: string;
  width: number;
  height: number;
  focalPoint?: `${number}% ${number}%`;
}
```

### 정본 데이터

```ts
export const SATURDAY_CREW = [
  { id: 'm1', codeName: '재춘', distance: '풀코스', goal: '완주' },
  { id: 'm2', codeName: '감자', distance: '풀코스', goal: '완주' },
  { id: 'm3', codeName: '형가', distance: '풀코스', goal: '완주' },
  { id: 'm4', codeName: '기태', distance: '풀코스', goal: '완주' },
  { id: 'm5', codeName: '지자', distance: '풀코스', goal: '완주' },
  { id: 'm6', codeName: '남길', distance: '풀코스', goal: '완주' },
  { id: 'm7', codeName: '광묵', distance: '10K', goal: '완주' },
] as const;
```

`realName`은 비워 두고 UI에서 렌더하지 않는다. 가족·친구 관계도 멤버 데이터에 역할로 넣지 않는다.

공유 정본에는 `SATURDAY_CREW`, `RACE_META`, `SATURDAY_COPY`만 둔다. 영상 전용 `COLORS`, `SCENES`, `WEB`, `REEL`은 `video/saturday-teaser/src/theme.ts`에 남겨도 되지만 화면 문구와 로스터는 복제하지 않는다.

## 6. 서버·클라이언트 경계

### 서버에 남길 것

- 모든 문구와 멤버 HTML
- 대회명·날짜·장소
- 섹션 구조와 링크
- 메타데이터·Open Graph
- 사진이 생겼을 때의 `next/image`

### 클라이언트가 필요한 것

- 현재 시각에 따른 D-day
- requestAnimationFrame 기반 scene progress와 `data-beat`
- 실제 음원이 생긴 뒤의 sound toggle

### D-day

정적 빌드 시점의 D-day를 HTML에 박지 않는다. 브라우저에서 KST 경계로 계산한다.

```ts
const TARGET_AT_KST = '2026-11-15T00:00:00+09:00';
const DAY_MS = 86_400_000;
const days = Math.max(0, Math.ceil((Date.parse(TARGET_AT_KST) - Date.now()) / DAY_MS));
```

서버 초기 마크업은 `2026.11.15`를 보여주고 hydration 뒤 `D-92`처럼 보조 텍스트만 갱신한다. 이렇게 하면 시간대 차이로 핵심 레이아웃이 흔들리지 않는다. 대회 당일은 `D-DAY`, 이후는 `MISSION DAY PASSED` 또는 결과 섹션으로 전환한다.

## 7. 모션 구조

### v1

- 각 문단은 긴 scroll track과 `position: sticky` stage로 분리
- scroll listener는 페이지당 하나, requestAnimationFrame 안에서만 측정·반영
- 각 섹션은 `--scene-progress: 0..1`과 `data-beat="0|1|2|3"`을 가짐
- 멤버는 CSS 변수 `--entry-index`로 stagger
- `prefers-reduced-motion`이면 sticky track을 제거하고 모든 핵심 문구를 정적 순서로 표시

```css
.crewEntry {
  transition:
    transform var(--sat-motion-short) var(--sat-ease-enter),
    opacity var(--sat-motion-short) linear;
  transition-delay: calc(var(--entry-index) * 55ms);
}
```

### GSAP 도입 조건

다음 세 조건이 모두 필요할 때만 추가한다.

1. 영상 프레임과 스크롤 위치가 정확히 동기화되어야 한다.
2. CSS sticky + scroll director로는 레퍼런스의 핵심 장면을 재현할 수 없다.
3. 모바일 390px에서 INP·스크롤 부드러움이 실측 기준을 통과한다.

단순 fade, translate, text wipe를 위해 GSAP을 설치하지 않는다.

## 8. Remotion과 공유하는 경계

웹과 릴스가 공유할 것은 **문장·멤버·색·타이밍 이름**이지 React DOM 컴포넌트가 아니다.

```text
shared data
  ├─ 웹: 문단과 접근 가능한 HTML
  └─ Remotion: 9:16 시퀀스와 프레임 애니메이션
```

현재 `SaturdayMission00-Reel`, `SaturdayMission00-Web`과 렌더 파일은 이미 존재한다. composition을 새로 만들지 않고 다음 방식으로 동기화한다.

- `src/lib/data/challenge/saturday.ts`의 순수 데이터는 Remotion에서도 import한다.
  **(2026-08-15 연결 완료)** `video/saturday-teaser/src/shared.ts`가 유일한 통로이고 `theme.ts`는 이를 재수출만 한다.
  tsconfig `paths`(`@/*` → `../../src/*`)로 타입을 해석하며, 타입은 `import type`이라 번들에서 지워진다.
  로스터·합계는 `SATURDAY_CREW`에서 파생하므로 멤버가 바뀌면 영상도 자동으로 따라온다.
- CSS module, `next/image`, App Router 컴포넌트는 Remotion에 공유하지 않는다.
- Remotion은 별도 composition에서 `1080×1920`, 30fps, 12–15초로 설계한다.
- 웹의 모션 duration을 프레임으로 기계 변환하지 않는다. 매체별 리듬은 다르되 장면 순서와 문장은 같다.
- Web/Reel 공통 시퀀스: 질문 → `농담은 접수됐다.` → `모였다.` → 7명 → `11 / 15` → `TO BE CONTINUED` → `다음 이야기는 첫 러닝부터`.
- `ASSEMBLE`, `FINAL MISSION`, 화면용 `MISSION 00`, `CLASSIFIED`는 두 composition의 렌더 문자열에서 제거한다.

Remotion dependency는 `video/saturday-teaser`에 이미 격리되어 있다. 루트 앱에 추가 설치하지 않고 기존 하위 프로젝트만 사용한다.

## 9. 자산 계약

### v1 필수

```text
public/images/challenge/saturday/
├─ saturday-og.webp          1200×630
└─ texture-noise.webp        작은 반복 텍스처, 선택
```

### 사진 도입 후

```text
public/images/challenge/saturday/
├─ crew/
│  ├─ m1-portrait.webp
│  └─ ...
├─ missions/
│  └─ 001/
└─ race/
```

파일명에는 실명을 넣지 않고 안정적인 member id를 사용한다. 위치·GPS·건강정보가 포함된 원본 파일과 EXIF는 커밋하지 않는다.

## 10. SEO·공유 이미지

### Metadata 정본

- title: `쎄러데이 — 농담은 접수됐다`
- description: `일곱 명이 함께 출발한다. 풀코스 6명, 10K 1명. 2026년 11월 15일 손기정평화마라톤.`
- canonical: `/saturday`
- OG alt: `11 / 15, 농담은 접수됐다 — 쎄러데이 러닝 크루`

관계 설명보다 도전 자체를 전면에 둔다. `여덟`, `10K 2명`이 메타나 구조화 데이터에 남지 않도록 정적 HTML까지 검사한다.

### OG 디자인

- Asphalt 배경
- 왼쪽 상단 `첫 번째 이야기` (2026-08-15 변경, 이전 `MISSION 00`)
- 중앙 `11 / 15`
- 하단 `농담은 접수됐다.`와 `SATURDAY RUNNING CREW`
- 인물 사진 없음

## 11. 접근성 계약

- `main` 안에 문단 순서대로 의미 있는 `section`과 제목을 둔다.
- 시각적으로 한 글자씩 나눠도 스크린리더에는 완전한 문장을 한 번만 제공한다.
- 반복 장식 텍스트는 `aria-hidden`.
- 사운드 토글은 음원이 없으면 DOM에도 만들지 않는다.
- D-day 갱신은 첫 렌더에서만 일어나므로 `aria-live`를 사용하지 않는다.
- Instagram 링크는 목적을 드러내는 accessible name을 제공한다.
- 모션이 꺼져도 숨은 콘텐츠가 없어야 한다.

## 12. 성능 예산

| 항목 | 목표 |
|---|---:|
| 초기 route 전용 client JS | gzip 25KB 이하 |
| 첫 화면 이미지 | OG 제외 0개 또는 150KB 이하 |
| 폰트 추가 | WOFF2 2종, 필요한 subset만 |
| CLS | 0.05 이하 |
| LCP | 정적 텍스트 기반, 모바일 2.5초 이하 |
| 애니메이션 | transform/opacity, 60fps 목표 |

`Archivo Black`이 숫자·영문에만 필요하므로 한글 glyph를 요청하지 않는다. IBM Plex Mono도 Latin subset만 사용한다.

## 13. 구현 순서와 확인

1. **공유 데이터 정본 분리**  
   확인: 웹과 Remotion이 같은 7명·대회·화면 카피를 import하고 중복 선언하지 않음
2. **웹 엔딩과 두 Remotion composition의 구 카피 교체**  
   확인: 렌더 화면에 `ASSEMBLE`, `FINAL MISSION`, 화면용 `MISSION 00`, `CLASSIFIED`, `대회가 끝나고`가 없음
3. **Web/Reel 재렌더와 공개 자산 교체**  
   확인: 기존 경로 유지, 페이지가 최신 mp4와 poster를 사용하고 파일 크기 예산 충족
4. **정적·모션·반응형 QA**  
   확인: reduced motion, KST 경계, 1440 / 1024 / 768 / 430 / 390 / 360px, 가로 스크롤 없음
5. **검증 체인**  
   확인: 루트 test/build와 Remotion lint/build/render 통과, `/saturday` 정적 산출물과 메타 직접 검사

## 14. 완료 조건

- 첫 공개판이 사진 없이도 임시 화면처럼 보이지 않는다.
- 첫 10초 안에 `농담 → 접수 → 7명 → 11/15`가 이해된다.
- 일곱 멤버가 크기·순서·칭호에서 동등하다.
- 한국식 날짜 `11 / 15`가 모든 표면에서 일치한다.
- 웹 페이지와 향후 릴스가 같은 copy/data 정본을 사용한다.
- Mission Log가 추가될 때 세 문단을 다시 만들 필요가 없다.
- 마지막 문장은 대회 후가 아니라 첫 공식 러닝부터 기록이 이어진다는 사실을 말한다.
- 웹과 두 영상 어디에도 제거하기로 한 군사·마블 껍데기 카피가 노출되지 않는다.
