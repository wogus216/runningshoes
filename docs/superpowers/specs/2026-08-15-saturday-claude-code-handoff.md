# Claude Code 잔여 작업 지시서 — 쎄러데이 MISSION 00

> 이 문서는 Claude Code에 그대로 전달하는 구현 지시서다.  
> 목표는 이미 구현된 `/saturday`와 두 Remotion composition을 처음부터 다시 만드는 것이 아니라, 최신 서사·카피·공유 데이터 정본으로 동기화하고 검증하는 것이다.

---

## Claude Code에 전달할 프롬프트

당신은 이 저장소의 시니어 프론트엔드 엔지니어이자 인터랙션 디자이너다. 아래 요구사항을 읽고 질문만 남기거나 계획에서 멈추지 말고, 현재 구현을 보존하면서 남은 정본 차이를 수정하고 Web/Reel 영상을 다시 렌더한 뒤 끝까지 검증하라.

### 0. 작업 방식

1. 작업을 시작하기 전에 `AGENTS.md`와 아래 “반드시 읽을 파일”을 모두 읽는다.
2. 현재 git 상태를 확인하고, 사용자의 기존 변경과 관계없는 파일을 되돌리거나 정리하지 않는다.
3. 구현 전 4–7단계의 짧은 실행 계획을 작성하고 바로 진행한다.
4. 요청 범위 안의 합리적인 세부 결정은 스스로 내린다. 되돌릴 수 없거나 범위를 크게 바꾸는 결정만 질문한다.
5. `/saturday`, `SaturdayMission00-Web`, `SaturdayMission00-Reel`은 이미 존재한다. 새 구조를 병렬로 만들거나 전체를 재작성하지 말고 아래 “현재 구현과 남은 차이”만 수술적으로 수정한다.
6. 작업이 끝나기 전 `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`를 실행한다. 실패한 상태를 완료로 보고하지 않는다.
7. 커밋·푸시·배포는 요청하지 않았으므로 하지 않는다.

### 1. 제품 목표

`/saturday`는 7명의 동등한 러닝 크루가 2026년 11월 15일 손기정평화마라톤에 도전하는 첫 번째 티저 페이지다.

이 페이지의 첫 고객은 크루 자신들이다. 몇 년 뒤 다시 열었을 때 공동 기억의 출발점이 되어야 한다. 외부 방문자는 마지막에 “나도 친구들과 이런 도전을 해보고 싶다”고 느껴야 한다.

디자인 한 문장:

> 영화처럼 입장하고, 스포츠 포스터처럼 멈추고, 나중에는 친구들의 앨범으로 남는다.

어벤져스에서 빌릴 것은 `미션 → 소집 → 팀 → 결전`이라는 서사 구조뿐이다. 마블 로고, 캐릭터, 공식 서체, 방패, 색상 조합, 타이틀 애니메이션을 모사하지 않는다. 결과물은 러닝 다큐멘터리 오프닝과 독립 스포츠 매거진 사이에 있어야 한다.

### 2. 반드시 읽을 파일

다음 파일을 구현의 근거로 사용한다.

| 파일 | 역할 |
|---|---|
| `AGENTS.md` | 저장소 작업 규칙과 검증 체인 |
| `docs/superpowers/specs/2026-08-11-saturday-crew-design.md` | 제품 목적, 시즌 구조, 장기 앨범 방향 |
| `docs/superpowers/design/saturday-design-system.md` | 색상, 타이포, 공간, 문구, 모션 정본 |
| `docs/superpowers/design/saturday-technical-design.md` | 컴포넌트 경계, 데이터 모델, 성능·접근성 계약 |
| `docs/superpowers/design/saturday-wireframes.html` | 최신 카피까지 동기화된 3문단의 공간·스크롤·반응형 실험판 |
| `src/app/(challenge)/saturday/page.tsx` | 이미 구현된 실제 라우트와 metadata |
| `src/app/(challenge)/layout.tsx` | challenge 레이아웃. 다른 페이지에 영향이 없게 변경 범위를 판단 |
| `src/lib/data/challenge/saturday.ts` | 현재 앱 데이터와 Mission Log export를 보존할 파일 |
| `src/types/challenge.ts` | 기존 타입. 필요한 만큼만 수술적으로 확장 |
| `video/saturday-teaser/README.md` | Remotion 프로젝트 개요 |
| `video/saturday-teaser/src/Composition.tsx` | 이미 등록된 9:16 Reel과 16:9 Web composition |
| `video/saturday-teaser/src/SaturdayMission00.tsx` | 기존 장면·오디오 조합 |
| `video/saturday-teaser/src/scenes/*.tsx` | 웹용 16:9 장면을 파생할 원본 |
| `video/saturday-teaser/src/theme.ts` | 영상의 색·타이밍만 남기고 멤버·카피 중복을 제거할 파일 |

문서와 코드가 충돌하면 다음 우선순위를 적용한다.

1. 이 지시서의 “사실 정본”
2. `saturday-design-system.md`
3. `saturday-technical-design.md`
4. 기존 코드

### 2.1 현재 구현과 남은 차이

현재 완료된 것을 다시 만들지 않는다.

- `/saturday` 3개 full-bleed 문단, sticky scroll director, D-day, OG, 반응형 구현 완료
- `SaturdayMission00-Reel` 1080×1920과 `SaturdayMission00-Web` 1920×1080 구현·렌더 완료
- 7명·FULL 6·광묵 10K 1명 데이터와 웹 metadata 정정 완료

이번 작업에서 해결할 차이:

1. Remotion Web/Reel 화면에 남은 `ASSEMBLE`, `FINAL MISSION`, 화면용 `MISSION 00`, `NEXT RACE — CLASSIFIED`를 최신 한글 카피로 교체한다.
2. 웹 엔딩 `다음 이야기는 대회가 끝나고`를 `다음 이야기는 첫 러닝부터`로 교체한다.
3. 웹 `saturday.ts`와 영상 `theme.ts`에 중복된 멤버·대회·화면 카피를 Next.js 의존 없는 순수 공유 모듈로 통합한다.
4. 수정된 두 composition과 poster를 기존 공개 경로에 다시 렌더한다.
5. 구 카피가 웹·영상 렌더 소스에 다시 들어오지 않도록 테스트를 추가한다.

### 3. 사실 정본

8명과 10K 2명이던 오래된 placeholder는 현재 웹 정본에서 이미 제거됐다. 아래 사실을 유지하고, 공유 모듈 분리 과정에서 과거 값이 되살아나지 않게 한다.

- 공식 이름: `쎄러데이`
- 보조 영문: `SATURDAY RUNNING CREW`
- 미션: `MISSION 00` — **내부 작업 단위 이름. 화면에는 노출하지 않는다**(2026-08-15 결정, 화면 표기는 `첫 번째 이야기`)
- 대회: `손기정평화마라톤`
- 날짜: `2026-11-15`
- 한국식 포스터 표기: `11 / 15`
- 장소: `임진각 · 파주`
- 총원: 7명
- 풀코스 6명: 재춘, 감자, 형가, 기태, 지자, 남길
- 10K 1명: 광묵
- 모든 멤버는 동등한 크기·순서·시각적 비중으로 표현한다.
- 실명, 친구 관계, “친구의 형” 같은 관계 설명을 UI와 metadata에 노출하지 않는다.
- 정은은 멤버가 아니다.

유지할 metadata:

- title: `쎄러데이 — 농담은 접수됐다`
- description: `일곱 명이 함께 출발한다. 풀코스 6명, 10K 1명. 2026년 11월 15일 손기정평화마라톤.`
- canonical: `/saturday`
- OG alt: `11 / 15, 농담은 접수됐다 — 쎄러데이 러닝 크루`

소스, HTML, metadata, OG, 테스트 어디에도 `여덟`, `8명`, `10K 2명`, `MEMBER 8`이 남아 있지 않아야 한다.

### 4. 반드시 사용하는 문구

문구를 AI식으로 다시 쓰거나 임의로 더 웅장하게 만들지 않는다.

#### Hero

1. `풀마라톤, 다 같이 한번 해볼까?`
2. `웃자고 한 말이었다.`
3. `농담은 접수됐다.`
4. `아무도 진심은 아니었다. 접수 전까지는.`

#### Crew reveal

- 제목: `이 말에 책임질 일곱 명.`
- 보조문: `잘 뛰는 사람을 모은 게 아니다. 같이 출발할 사람을 모았다.`
- 상태문: `준비 상태는 제각각. 접수 상태는 전원 완료.`
- 합계: `6 × 42.195 KM / 1 × 10 KM / 7 × START LINE`

#### Race target

- eyebrow: `그날, 파주에서`  ← 2026-08-15 운영자 결정으로 교체 (이전 `FINAL MISSION / 2026 · PAJU`)
- 날짜: `11 / 15`
- 대회명: `손기정평화마라톤`
- 훅: `11월 15일, 농담의 결말을 보러 간다.`
- 종결: `결말은 아직 없다. TO BE CONTINUED.`
- 다음 기록 예고: `다음 이야기는 첫 러닝부터`

### 5. 레퍼런스와 각각의 사용 이유

레퍼런스는 화면을 베끼는 목록이 아니라, 각 컴포넌트가 해결해야 할 문제를 보여주는 근거다.

#### A. 전체 서사와 장기 아카이브

1. Nike Breaking2  
   https://www.nike.com/nl/en/running/breaking2

   - 참고 이유: 하나의 무모한 목표를 `도전 → 사람 → 준비 → 결과`로 전개하는 스포츠 다큐멘터리 서사.
   - 적용: Hero에서 미션을 선언하고 Crew에서 사람을 공개한 뒤 Race Target에서 목표를 고정한다.
   - 모방 금지: Nike 내비게이션, 브랜드 로고, 제품 판매 문법, 페이지의 정확한 레이아웃.

2. Tracksmith Journal  
   https://www.tracksmith.com/journal

   - 참고 이유: Stories, Lookbooks, Films가 한 브랜드 저널 안에서 축적되는 편집 구조.
   - 적용: MISSION 00 이후 사진이 생기면 같은 `/saturday` 안에 Mission Log를 시간순 앨범으로 확장할 수 있는 데이터·컴포넌트 경계를 남긴다.
   - 이번 범위: Mission Log UI를 만들지는 않지만, 현재 3문단을 버리지 않고 확장할 수 있어야 한다.

3. LongBlack 사용자 제공 글  
   https://longblack.co/note/2080?ticket=NT26330d9b104ab1416c330f4fca3d41b6d89f

   - 참고 이유: 크루를 유명인 중심이 아니라 관계·공동 기억·지속되는 이야기로 바라보게 한 기획 출발점.
   - 적용: 리더·MVP·게스트를 만들지 않고 7명을 동등한 크루원으로 다룬다.

#### B. Hero의 몰입과 생동감

1. 마라톤 서사·사운드 레퍼런스  
   https://kr.pinterest.com/pin/1093671090772687014/

   - 사용자 피드백: “마라톤이고 서사가 마음에 들며 소리와 함께 보다 보면 몰입된다.”
   - 적용: 영상이 장식 배경이 아니라 신발 끈 → 시계 시작 → 발 착지 → 팀 집결의 인과를 가진다. 사운드는 자동 재생하지 않고 사용자가 켠 뒤에만 들린다.

2. 생동감 레퍼런스  
   https://kr.pinterest.com/pin/1149332767422932703/

   - 사용자 피드백: “생동감이 마음에 든다.”
   - 적용: 정적인 포스터 한 장이 아니라 짧은 컷, 미세한 카메라 이동, 리듬이 다른 문장 전환을 사용한다.

3. 개인에서 팀으로 전환  
   https://kr.pinterest.com/pin/6403624465487869/

   - 사용자 피드백: “개인에서 팀으로 가는 것.”
   - 적용: Hero의 개인 준비 장면이 Crew Reveal의 7인 집결로 이어져야 한다. Hero와 Crew가 독립된 랜딩페이지 블록처럼 보이면 실패다.

4. 러닝 자세 분석 시각  
   https://kr.pinterest.com/pin/563018698770748/

   - 사용자 피드백: 러닝 자세 분석처럼 보여 눈에 띈다.
   - 적용: 선수 번호, 거리, 선, 크롭 마크, 계측 라벨 같은 스포츠 분석 그래픽을 보조 레이어로 사용한다.
   - 모방 금지: 실제 생체 데이터가 없는 상태에서 가짜 수치나 분석 결과를 만들지 않는다.

#### C. Crew Reveal과 스포츠 포스터

1. https://kr.pinterest.com/pin/367113807145937216/  
2. https://kr.pinterest.com/pin/337418197103788412/  
3. https://kr.pinterest.com/pin/2181499816740625/

- 참고 이유: 큰 이름, 번호, 거리, 단단한 그리드로 인물을 스포츠 포스터처럼 공개하는 문법.
- 적용: 둥근 프로필 카드 7장을 만들지 않는다. 7개의 세로 슬롯 또는 선수 엔트리 그리드가 한 팀으로 조립되어야 한다.
- 광묵의 10K는 텍스트 데이터의 차이일 뿐, 카드 크기·배경색·노출 시간으로 별도 계급을 만들지 않는다.

추가 시각 레퍼런스:

1. https://kr.pinterest.com/pin/32228953578959063/  
2. https://kr.pinterest.com/pin/645211084153260553/

- 참고 이유: 아이덴티티를 사진 한 장이 아니라 타이포, 번호, 색면, 반복되는 그래픽 규칙으로 구축한다.
- 적용: Asphalt / Paper / Signal 토큰과 `01–07`, 거리 표기를 모든 장면에서 일관되게 사용한다. (`MISSION 00`은 내부 작업 단위 이름으로만 쓰고 화면에는 노출하지 않는다 — 2026-08-15)

#### D. 스크롤과 모바일 Hero

스크롤로 영상·장면을 진행하는 방식:

1. https://kr.pinterest.com/pin/211174979361158/  
2. https://kr.pinterest.com/pin/5066618324226114/

- 참고 이유: 사용자의 스크롤이 장면 전환의 속도를 결정해 몰입을 만든다.
- 적용: native scroll + sticky stage를 유지한다. 페이지 스크롤을 가로채거나 강제 스냅하지 않는다. `CinematicScene` 하나가 섹션 진행률을 CSS 변수와 4개의 beat로 변환한다.
- 성능이 불안정하면 영상의 `currentTime`을 매 프레임 스크럽하지 말고, 영상은 muted loop로 재생하면서 텍스트·마스크·컷 전환만 scroll progress에 동기화한다.

모바일 영상 Hero:

1. https://kr.pinterest.com/pin/563018699583916/

- 참고 이유: 9:16 화면에서 영상, 큰 문장, 안전 여백이 동시에 유지되는 Hero 구성.
- 적용: 390×844에서 핵심 문구와 음소거 버튼이 Instagram UI 안전 영역을 침범하지 않아야 한다.

### 6. 디자인 시스템

`/saturday` 최상위 래퍼에만 다음 토큰을 선언한다. 전역 디자인 토큰은 변경하지 않는다.

```css
[data-saturday] {
  --sat-asphalt: #0b0b0a;
  --sat-asphalt-soft: #171714;
  --sat-paper: #f2efe7;
  --sat-paper-deep: #dfdbd0;
  --sat-ink: #151513;
  --sat-signal: #ff5a36;
  --sat-signal-dark: #d63b1e;
  --sat-concrete: #8a8881;
}
```

규칙:

- 전체 톤: Cinematic Running Zine.
- 기본 반경 `0`; 버튼과 배지만 최대 `2px`.
- 그림자, 유리 효과, 보라색 그라디언트, 둥근 SaaS 카드 금지.
- Signal 색은 한 화면 면적의 약 8% 이하.
- 제목과 날짜는 크고 비대칭이어야 하며, 모든 문장을 중앙 정렬하지 않는다.
- 한글은 기존 셀프호스트 Pretendard Variable을 재사용한다.
- 숫자와 영문에 새 폰트가 필요해도 외부 런타임 네트워크 요청을 만들지 않는다. 로컬 자산 또는 기존 폰트로 해결한다.
- 모든 숫자에는 `font-variant-numeric: tabular-nums`를 적용한다.
- 모바일에서 `11 / 15`는 절대 두 줄로 나뉘지 않는다.

### 7. 실제 페이지 구조

디자인 워크벤치의 색상 토큰, Desktop/Mobile 전환 버튼, 바깥 프레임, 구현 메모는 최종 페이지에 넣지 않는다. `/saturday` 자체가 화면 전체를 사용해야 한다.

```text
SaturdayPage                          Server Component
└─ SaturdayTeaser                     Server Component
   ├─ SaturdayHeader                  Server Component
   ├─ MissionHero                     Server Component
   │  └─ CinematicScene               Client Component
   ├─ CrewReveal                      Server Component
   │  ├─ CrewEntry × 7                Server Component
   │  └─ CinematicScene               Client Component
   ├─ RaceTarget                      Server Component
   │  ├─ DdayCounter                  Client Component
   │  └─ CinematicScene               Client Component
   └─ SaturdayFooter                  Server Component
```

권장 파일 구조를 따르되, 한 번만 쓰는 `Typography`, `Line`, `Panel` 같은 추상 컴포넌트는 만들지 않는다.

```text
src/app/(challenge)/saturday/
  page.tsx
  opengraph-image.tsx 또는 검증된 정적 OG 이미지
  saturday.module.css
src/components/challenge/saturday/
  saturday-teaser.tsx
  mission-hero.tsx
  crew-reveal.tsx
  race-target.tsx
  hero-video.tsx
  d-day-counter.tsx
  cinematic-director.tsx
src/lib/data/challenge/
  saturday-content.ts
  saturday.ts
```

별도 `SaturdayHeader`나 `CrewEntry` 파일을 새로 만들 필요는 없다. 콘텐츠와 의미 있는 HTML은 서버 컴포넌트에 두고, 현재 시간·영상 제어·스크롤 관찰만 클라이언트로 보낸다. 3개 문단 전체를 `use client`로 만들지 않는다.

### 8. Hero 영상 통합과 Remotion 동기화

현재 다음 영상이 이미 완성되어 있다.

- composition: `SaturdayMission00-Reel`
- 규격: 1080×1920, 30fps, 450 frames, 15초
- 출력: `video/saturday-teaser/output/saturday-mission-00-reel.mp4`
- composition: `SaturdayMission00-Web`
- 규격: 1920×1080, 30fps, 450 frames, 15초
- 출력: `video/saturday-teaser/output/saturday-mission-00-web.mp4`
- 이미지: `video/saturday-teaser/public/images/*.webp`
- 오디오: `video/saturday-teaser/public/audio/*.wav`

해야 할 일:

1. 기존 composition 구조·길이·자산·ID를 유지한다.
2. Web/Reel의 렌더 문자열을 질문 → 시계/발 → `모였다.` → 7인 집결 → `농담은 접수됐다.` → `11 / 15` → blackout → `다음 이야기는 첫 러닝부터` 순서로 맞춘다.
3. `ASSEMBLE`은 `모였다.`, `FINAL MISSION / 2026 · PAJU`는 `그날, 파주에서`, blackout의 `MISSION 00`은 `첫 번째 이야기`, `NEXT RACE — CLASSIFIED`는 `다음 이야기는 첫 러닝부터`로 교체한다.
4. Web과 Reel 중 한쪽만 바꾸지 않는다. 두 장면 소스와 README 설명을 함께 동기화한다.
5. 아래 기존 공개 경로에 다시 렌더한다.

```text
public/videos/challenge/saturday/mission-00-web.mp4
public/videos/challenge/saturday/mission-00-reel.mp4
public/images/challenge/saturday/mission-00-poster.webp
```

6. output 원본과 public 복사본을 모두 최신 렌더로 교체한다.
7. poster는 Hero의 첫 질문과 러닝 준비 장면이 모두 읽히는 프레임으로 다시 생성한다.
8. 가능한 범위에서 H.264 파일 크기를 최적화한다. 목표는 web 영상 12MB 이하, reel 영상 10MB 이하이며, 화질을 크게 훼손해서 맞추지는 않는다. 목표를 넘으면 실제 크기와 원인을 보고한다.
9. Remotion 프로젝트에서 `npm run lint`, `npm run build`, 두 composition 실제 렌더를 검증한다.

웹 Hero 동작:

- 데스크톱은 16:9 web 영상을 사용한다.
- 모바일은 9:16 reel 영상을 사용한다. `<source media>` 또는 hydration 안전한 분기로 선택한다.
- 영상은 `muted`, `playsInline`, `loop`, `autoPlay`가 기본이다.
- 오디오는 자동 재생하지 않는다.
- 사운드 버튼은 실제 오디오 트랙이 있는 경우에만 렌더하고, accessible name과 44×44px 이상의 터치 영역을 가진다.
- 사용자가 사운드를 켜면 명확히 음소거 상태가 바뀌어야 한다.
- `poster`를 제공하고 영상 로드 실패 시에도 모든 핵심 문구와 CTA가 읽혀야 한다.
- `prefers-reduced-motion`에서는 자동 재생을 멈추고 poster + 정적 문장 순서를 보여준다.
- Hero 영상이 LCP를 막지 않도록 poster와 preload 전략을 검증한다.

### 9. 문단별 구현 요구

#### 9.1 Mission Hero

- 최소 2.8 viewport의 native scroll track과 sticky stage.
- 4 beats: 질문 → 웃자고 한 말 → 농담은 접수됐다 → 대회 meta.
- 한 순간에 핵심 문장 하나만 주연으로 둔다.
- 개인 준비 장면이 Crew Reveal 방향으로 진행되어야 한다.
- 얇은 Signal 출발선, 미세한 film grain, timecode는 장식이며 `aria-hidden` 처리한다.
- 모바일에서 화면 상·하단 안전 여백을 확보한다.

#### 9.2 Crew Reveal

- Paper 배경으로 전환해 Hero의 어둠과 분명한 장면 차이를 만든다.
- 4 beats: 7개 개인 슬롯 → `모였다.` → 7명 이름 공개 → 거리 합계. (전환어는 2026-08-15에 `ASSEMBLE`에서 한글로 교체)
- 멤버 순서는 정본 순서를 유지한다.
- 7명은 동등하다. 광묵만 다른 배경색, 더 작은 크기, 짧은 노출 시간을 쓰지 않는다.
- 데스크톱에서는 7분할 또는 강한 선수 엔트리 그리드, 모바일에서는 세로 엔트리 목록으로 전환한다.
- 각 멤버 행을 클릭 가능하게 만들지 않는다. 실제 상세 페이지가 없으므로 가짜 hover/cursor/button을 넣지 않는다.
- 얼굴이 없는 기존 `seven-runners.webp`와 코드네임을 사용한다. 가짜 얼굴을 생성하지 않는다.

#### 9.3 Race Target

- 다시 Asphalt 배경으로 돌아간다.
- 4 beats: 날짜 접근 → 화면 점유 → 정지 포스터 → blackout.
- `11 / 15`가 대회명보다 크고 화면의 주인공이어야 한다.
- 마지막 20%는 검게 닫히며 `TO BE CONTINUED`를 주인공으로 남긴다.
- blackout의 마지막 보조문은 `다음 이야기는 첫 러닝부터`다. 대회가 끝난 뒤가 아니라 대회 전 준비 기록부터 Mission Log가 시작된다.
- Instagram 실제 URL이 확정되지 않았다면 `href="#instagram"` 같은 깨진 링크를 만들지 않는다. 비활성 문구로 두거나 데이터의 선택적 URL이 있을 때만 링크를 렌더한다.

### 10. 데이터와 D-day

Next.js 의존이 없는 `src/lib/data/challenge/saturday-content.ts`를 페이지와 영상의 순수 데이터 정본으로 만든다. `src/lib/data/challenge/saturday.ts`는 이 값을 import/re-export하고 기존 `SATURDAY_WEEKS`, `SATURDAY_RACE_RESULT`를 유지한다. `video/saturday-teaser/src/theme.ts`는 색·프레임 타이밍만 소유하고 멤버·대회·화면 카피는 공유 정본에서 import한다.

필수 필드:

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
```

공유 계약:

- `SATURDAY_CREW`, `RACE_META`, `SATURDAY_COPY`는 한 파일에서만 값으로 선언한다.
- `SATURDAY_COPY.race.nextStory`의 정본 값은 `다음 이야기는 첫 러닝부터`이며 웹과 두 영상이 이를 사용한다.
- Remotion이 가져오는 파일에는 `@/` alias, `next/*`, React component import를 넣지 않는다.
- 기존 공개 API를 깨지 않도록 앱의 `saturday.ts`에서 필요한 export 이름을 유지한다.
- 빌드 후 Web/Reel과 웹 DOM이 같은 코드네임 순서와 엔딩 문구를 사용해야 한다.

D-day는 KST 기준으로 계산한다.

- 서버 초기 마크업은 `2026.11.15`를 보여준다.
- hydration 뒤 보조 문구만 `D-N`, `D-DAY`, `MISSION DAY PASSED`로 갱신한다.
- 시간대 차이로 핵심 레이아웃이 흔들리지 않아야 한다.
- 계산 함수는 순수 함수로 분리해 대회 전, 당일, 이후를 단위 테스트한다.

### 11. 접근성·성능·반응형 계약

접근성:

- 첫 focusable 요소 앞에 본문 바로가기 링크를 둔다.
- `main` 안에서 `h1 → h2` 계층을 지킨다.
- 글자를 시각적으로 분해해도 스크린리더에는 완전한 문장을 한 번만 제공한다.
- 장식 타임코드, 반복 문구, 선, grain은 `aria-hidden`.
- 모든 버튼과 링크는 keyboard focus가 명확하다.
- 모션이 꺼져도 문구, 멤버 7명, 날짜, 대회명이 모두 보인다.
- full-bleed 레이아웃은 safe-area inset을 고려한다.
- 줌을 막지 않는다.

성능 목표:

- route 전용 client JS gzip 25KB 이하를 목표로 한다.
- CLS 0.05 이하.
- 텍스트·poster 중심 LCP 2.5초 이하를 목표로 한다.
- scroll listener는 페이지 전체에서 하나, passive + requestAnimationFrame으로 제한한다.
- scroll 이벤트마다 React state를 갱신하지 않는다.
- transform과 opacity 위주로 애니메이션한다.
- GSAP은 설치하지 않는다. 네이티브 구현으로 목표를 달성할 수 없는 구체적 근거가 있을 때만 사용자에게 보고한다.

반응형 검증 폭:

- 1440
- 1024
- 768
- 430
- 390
- 360

모든 폭에서 가로 스크롤이 없어야 하며, 7명 전체와 `11 / 15`가 잘리지 않아야 한다.

### 12. 하지 말아야 할 것

- 기존 `saturday-wireframes.html`을 최종 페이지 iframe으로 넣지 않는다.
- 외곽 디자인 워크벤치를 앱에 옮기지 않는다.
- 사진이 없다는 사실을 대표 훅으로 쓰지 않는다.
- 스톡 러너나 가짜 크루 얼굴을 추가하지 않는다.
- 모든 섹션을 둥근 카드로 만들지 않는다.
- 전역 `globals.css`나 일반 러닝화 페이지의 디자인 시스템을 쎄러데이 때문에 바꾸지 않는다.
- 3개 문단 전체를 client component로 만들지 않는다.
- 스크롤을 가로채거나 강제 위치 보정, scroll snap을 사용하지 않는다.
- 자동 재생 사운드를 만들지 않는다.
- 실제 목적지가 없는 Instagram 가짜 링크를 만들지 않는다.
- 장기 Mission Log, CMS, 로그인, 사진 업로드, Garmin/Strava 연동을 이번 작업에 포함하지 않는다.
- unrelated cleanup, dependency upgrade, 신발 데이터 변경을 하지 않는다.

### 13. 테스트와 검증

최소 테스트:

1. roster가 정확히 7명인지 확인.
2. 풀코스가 6명인지 확인.
3. 10K가 광묵 1명인지 확인.
4. 중복 member id와 codeName이 없는지 확인.
5. D-day 순수 함수가 대회 전, 당일, 이후에 올바른 문자열을 반환하는지 확인.
6. metadata와 정적 HTML에 오래된 8명 문구가 없는지 확인.
7. 웹 엔딩이 `다음 이야기는 첫 러닝부터`인지 확인.
8. Web/Reel 렌더 소스에 `ASSEMBLE`, `FINAL MISSION`, 화면용 `MISSION 00`, `CLASSIFIED`가 없는지 확인.
9. 웹과 Remotion이 멤버·대회·화면 카피를 서로 다른 값으로 중복 선언하지 않는지 확인.

필수 명령:

```bash
npm run typecheck
npm run lint
npm test
npm run build

cd video/saturday-teaser
npm run lint
npm run build
npm run render:reel
# 새 web composition도 실제 렌더
```

브라우저 QA:

- 실제 `/saturday`를 데스크톱과 모바일에서 열어 시각 검수한다.
- Hero 영상 로드 성공, poster fallback, muted autoplay, 사운드 토글을 확인한다.
- 키보드만으로 skip link, sound toggle, CTA를 이동한다.
- reduced motion을 켜고 모든 핵심 콘텐츠가 정적 순서로 보이는지 확인한다.
- console error와 hydration warning이 0개인지 확인한다.
- 각 반응형 폭에서 스크린샷을 남긴다.

### 14. 완료 기준

다음 조건이 전부 충족되어야 완료다.

1. `/saturday`가 제목 한 줄짜리 placeholder가 아니라 3개의 full-bleed cinematic section으로 렌더된다.
2. 데이터, UI, metadata, OG가 7명·풀코스 6·광묵 10K 1명으로 일치한다.
3. 모바일에서는 기존 9:16 릴스, 데스크톱에서는 기존 16:9 web 영상의 최신 재렌더가 Hero에 표시된다.
4. 영상이 실패하거나 reduced motion이어도 전체 이야기와 CTA가 이해된다.
5. Hero의 개인 준비가 Crew의 7인 집결로 이어지고, Race의 `11 / 15`와 blackout으로 끝난다.
6. 멤버 7명이 시각적으로 동등하다.
7. 360–1440px에서 가로 스크롤과 텍스트 잘림이 없다.
8. 접근성 요구와 성능 예산을 확인했다.
9. 루트와 Remotion의 lint/build/test/render가 모두 통과한다.
10. 최종 보고에 변경 파일, 디자인 결정, 생성 영상 크기, 테스트 결과, 남은 실제 콘텐츠 항목만 간결하게 적는다.
11. `TO BE CONTINUED` 뒤의 다음 기록이 대회 후가 아니라 `첫 러닝부터` 이어진다.
12. Web/Reel 어느 화면에도 제거하기로 한 군사·마블 껍데기 카피가 남지 않는다.

### 15. 최종 보고 형식

```markdown
## 완료 결과
- 사용자가 실제로 보게 되는 변화

## 구현 파일
- 경로: 역할

## 레퍼런스 반영
- 레퍼런스: 어떤 문제 해결에 사용했는지

## 검증
- 명령: PASS/FAIL
- 화면 폭: PASS/FAIL
- 접근성/reduced motion: PASS/FAIL

## 남은 실제 콘텐츠
- 예: Instagram URL, 실제 단체사진
```

최종 보고에서 “프로토타입”, “추후 구현 가능”으로 끝내지 않는다. 기존 구현을 재작성하지 말고 이번 범위의 데이터·카피·영상 동기화를 완료한 뒤 보고한다.
