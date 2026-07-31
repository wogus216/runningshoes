# allrunabout 홈 리디자인 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 홈페이지를 순회 허브로 재설계해 맞춤 추천·신발 상세·베스트·비교·블로그로의 이동을 강화하고, 사이트 전역을 Warm Performance 팔레트로 전환한다.

**Architecture:** `redesign-b` 브랜치 위에서 작업한다. 팔레트는 `globals.css` 토큰 값 조정만으로 기존 89개 파일이 함께 전환되고(`tailwind.config.ts`가 `sky`/`slate` 스케일을 오버라이드해둠), 레이아웃 재설계는 홈에만 적용한다. 홈은 11개 컴포넌트로 분해하고, 데이터·분석·저장 로직은 `src/lib/` 아래 순수 모듈로 분리해 Vitest로 검증한다.

**Tech Stack:** Next.js 15.5 App Router (SSG, `output: export`) · React 19.2 · TypeScript 5.4 · Tailwind CSS · Vitest 4 · sharp(빌드 타임 이미지 처리)

## Global Constraints

이 섹션의 요구사항은 **모든 태스크에 암묵적으로 포함**된다.

- **브랜치**: `redesign-b`. 착수 전 최신 `main`을 머지한다(현재 2커밋 뒤처짐, 신발 데이터 충돌 예상)
- **팔레트**: Warm Performance 고정. 새 메인 유채색 추가 금지
  ```
  --paper #F7F4ED · --paper-soft #EFEAE0 · --surface #FFFFFF
  --ink #17150F · --ink-soft #6E6A5E · --line #D9D4C8
  --signal #FF4D00 · --signal-soft #FFE7DB · --signal-dark #C73800
  --positive #2F7D5A · --warning #C98112
  --dark #17150F · --dark-soft #28241D · --light-on-dark #F7F4ED
  ```
- **오렌지 솔리드 면은 CTA 2곳(히어로·마지막 CTA)에만.** 나머지 오렌지는 선·텍스트·테두리 강조뿐
- **다크 영역은 마지막 CTA 밴드 한 곳.** 전체 세로 픽셀의 22% 이하
- **자동 다크모드 금지**: `prefers-color-scheme` 기반 다크 테마를 홈에 넣지 않는다. `prefers-reduced-motion`은 유지
- **광고**: 슬롯 1개 유지, `ADSENSE_SLOTS.homeBottom` ID 변경 금지, 추가·제거·상단 이동 금지, 인덱스와 에디토리얼 사이 위치 유지
- **데이터 표현 금지어**: "직접 측정", "자체 실측 122종", "자체 연구소", "Lab Verified", "의학적으로 검증된 부상 예방", "통증 치료", 근거 없는 적합도 %, 검증되지 않은 종합점수
- **카운트 하드코딩 금지**: 신발 수·갱신일·문항 수는 데이터 소스에서 동적 산출
- **구조화 데이터에 `aggregateRating` / `review`(Person 저자) 넣지 않는다**
- **금지 기술**: Three.js · WebGL · Canvas · 외부 애니메이션 라이브러리 · 자동재생 대형 동영상 · 스크롤 잠금 · 스크롤 속도 변경. 히어로 전용 JS 200KB 미만
- **검증 명령은 `set -o pipefail`과 함께 실행한다.** 과거 `npm run build | tail`이 실패 exit code를 삼켜 깨진 채 배포된 이력이 있다
- **마라톤 페이지와 지도 기능은 건드리지 않는다**
- **승인 게이트**: Task 5 완료 후 운영자 승인 전까지 Task 6 이후로 진행하지 않는다

## 파일 구조

**신규**

| 파일 | 책임 |
|---|---|
| `src/lib/analytics.ts` | GA4 이벤트 래퍼. 중복 발화 방지 |
| `src/lib/recent.ts` | localStorage 기록·읽기(최근 본 신발·비교 쌍·지난 추천) |
| `src/lib/home/stats.ts` | 홈 지표(신발 수·갱신일·문항 수) 동적 산출 |
| `src/lib/home/problems.ts` | 고민 6개 정의 + `/best` slug 매핑 |
| `src/lib/home/index-sort.ts` | 인덱스 카테고리 균형 정렬 |
| `src/components/home/hero-silhouette.tsx` | 중립 러닝화 SVG(정적 path) |
| `src/components/home/kinetic-hero.tsx` | 히어로 |
| `src/components/home/problem-explorer.tsx` | 고민별 탐색 |
| `src/components/home/resume-section.tsx` | 재방문 이어보기 |
| `src/components/home/recommendation-process.tsx` | 추천 작동 방식 |
| `src/components/home/trust-metrics.tsx` | 신뢰 지표 |
| `src/components/home/shoe-index-preview.tsx` | 필터 칩 + 인덱스 + 점진 확장 |
| `src/components/home/editorial-section.tsx` | 에디토리얼 |
| `src/components/home/final-cta.tsx` | 마지막 CTA 밴드 |
| `src/lib/__tests__/analytics.test.ts` 외 4개 | 위 lib 모듈 테스트 |

**수정**

| 파일 | 변경 |
|---|---|
| `src/app/globals.css` | 팔레트 토큰 값 |
| `tailwind.config.ts` | `sky`/`slate` 스케일 미세 조정 |
| `src/components/home/home-content.tsx` | 전면 재작성(조립만 담당) |
| `src/app/(main)/page.tsx` | 데이터 전달 확대 |
| `src/app/(detail)/shoes/[slug]/page.tsx` | 최근 본 신발 기록 훅 |
| `src/components/compare/compare-content.tsx` | 비교 쌍 기록 훅 |
| `src/components/recommend/recommend-content.tsx` | 추천 결과 기록 훅 |

**검증 전략**: 이 프로젝트에는 RTL·jsdom이 없고 Vitest 유닛 테스트만 있다(`src/lib/__tests__/`). 따라서 **lib 모듈은 TDD로**, **컴포넌트는 `npm run build` + 브라우저 실측으로** 검증한다. 테스트 인프라 추가는 이 작업 범위 밖이다(YAGNI).

**시안의 역할**: Task 3~4에서 만드는 고충실도 시안 HTML이 컴포넌트의 시각 명세다. 컴포넌트 태스크는 시안의 해당 섹션을 참조하되, props 인터페이스와 데이터 연결은 계획에 명시한다.

---

# Phase A — 설계 확정 (승인 게이트 전)

### Task 1: 설계 문서에 최종 수정 지시 반영

**Files:**
- Modify: `docs/superpowers/specs/2026-07-31-home-redesign-design.md`

**Interfaces:**
- Produces: 이후 모든 태스크가 참조하는 확정 스펙

- [ ] **Step 1: 실루엣 방식 절 교체 (§4.4)**

기존 "호카 클리프톤 10 단일 외곽 추출" 서술을 삭제하고 아래로 교체한다.

```markdown
### 4.4 중립 러닝화 실루엣

특정 모델을 trace하지 않는다. **데일리·쿠션화·레이싱 3켤레 이상의 외곽 특징을 조합해
중립적인 러닝화 SVG로 재정리**하고, 디자인 단계에서 정적 path로 확정한다.

조합 구조: A에서 힐 구조 / B에서 발등·갑피 라인 / C에서 앞코·미드솔 전개

**반드시 남길 특징** — 러닝화로 인지되는 측면 형태 · 약간 올라온 힐 ·
자연스럽게 낮아지는 발등 라인 · 러닝화 특유의 앞코 · 미드솔 볼륨 · 전진 방향

**제거할 요소** — 브랜드 로고 · 신발끈 디테일 · 메시 패턴 · 아웃솔 러그 ·
브랜드 고유 패널 · 특정 모델의 독특한 힐 구조 · 카본 플레이트 컷아웃 · 과도한 로커 곡선

**구현 제약** — 런타임 이미지 분석 금지 · inline SVG 또는 경량 SVG asset ·
채워진 제품 이미지가 아니라 외곽선과 최소한의 내부선만 · allrunabout 전용 시각 자산으로 관리

**승인 조건 6가지** — ① 첫눈에 러닝화로 보인다 ② 특정 브랜드·모델이 떠오르지 않는다
③ 배·카누·구두처럼 보이지 않는다 ④ 기술 도면 같되 지나치게 차갑지 않다
⑤ 발 윤곽을 겹쳐도 자연스럽다 ⑥ 모바일에서도 형태를 인지할 수 있다
```

- [ ] **Step 2: 첫 1초 인지 절 신설 (§4 하위)**

```markdown
### 4.6 첫 1초 인지

사용자는 모션이 끝날 때까지 기다리지 않아도 러닝화 서비스임을 알아야 한다.
실루엣을 모션 후반에 등장시키지 않는다.

- 첫 프레임부터 신발 외곽을 **불투명도 10~15%로 노출**
- 모션이 진행되며 외곽선과 미드솔 선이 점차 선명해짐
- 최종 장면에서 발 형태 중첩 + 적합 영역 + CTA

**검증**: 3초간 히어로를 본 사용자가 ① 어떤 종류의 사이트인가 ② 무엇을 도와주는가
③ 먼저 눌러야 할 버튼은 무엇인가에 답할 수 있어야 한다.
```

- [ ] **Step 3: 모션 타임라인 갱신 (§4.3)**

3.6–4.5s 행을 `적합 영역 강조 → 신발 4~8px 전진 → CTA 화살표 반응`으로 바꾸고,
0.0–0.8s 행에 `희미한 신발 윤곽 위로` 를 앞에 붙인다. 아래 항목을 표 밑에 추가한다.

```markdown
**오렌지 적합 영역 불투명도** — 최대 0.28~0.36, 최종 정지 0.16~0.22.
적합 영역이 CTA보다 강하게 보이면 안 된다.

**금지** — 러너 영상 · 선수 대형 사진 · 신발 회전 · 신발 점프 · 네온 잔상 ·
글리치 · 무한 반복 · CTA와 메인 카피 이동 · 특정 글로벌 스포츠 브랜드 캠페인 복제
```

- [ ] **Step 4: 팔레트에 토큰 5개 추가 (§3)**

`--signal-dark: #C73800` `--positive: #2F7D5A` `--warning: #C98112`
`--dark-soft: #28241D` `--light-on-dark: #F7F4ED` 를 코드블록에 추가한다.

- [ ] **Step 5: 고민별 탐색 절 교체 (§5.1)**

우선순위를 아래 순서로 재정렬하고(발볼이 2위), 차등 레이아웃 요구를 추가한다.

```markdown
| # | 고민 | 판단 기준 | 목적지 |
|---|---|---|---|
| 01 | 처음 러닝화를 고르고 있어요 | 쿠션 여유, 무게, 가격대 | `/best/beginner` |
| 02 | 발볼이 넓어서 선택이 어려워요 | 와이드 출시, 토박스 너비, 갑피 여유 | `/best/wide-toebox` |
| 03 | 편안하게 오래 달리고 싶어요 | 스택 높이, 충격흡수 성향, 로커 구조 | `/best/max-cushion` |
| 04 | 기록을 줄이고 싶어요 | 플레이트 유무, 무게, 에너지 리턴 | `/best/racing` |
| 05 | 무릎 부담이 걱정돼요 | 충격흡수 성향과 안정성 구조 | `/best/knee-protection` |
| 06 | 한 켤레로 다양하게 뛰고 싶어요 | 다목적 성향, 내구성 범위, 가격 균형 | `/best/daily-trainer` |

**균등 6칸 그리드를 쓰지 않는다.** 우선순위가 보이는 비대칭 구조로 만든다:
주요 패널 1 + 중간 패널 2 + 행 기반 패널 3.

모바일은 1열 6행이되 첫 3개에 더 큰 제목 · 짧은 시그널 선 · 결과 수로 우선순위를 표시한다.

카드 스타일은 배번호 · 스타트 라인 · 러닝 기록표 · 에디토리얼 인덱스 · 측정선 ·
행 기반 목록 · 작은 실제 썸네일을 쓰고, 일반적인 SaaS 둥근 카드를 피한다.

05는 다음 표현으로 제한한다 — "충격흡수 성향과 안정성 구조를 기준으로 살펴봅니다.
러닝화 정보는 진단이나 치료를 대신하지 않습니다."
```

- [ ] **Step 6: 인덱스 점진 노출로 교체 (§5.2)**

```markdown
### 5.2 러닝화 인덱스

정적 HTML에 122개 링크를 전부 유지하되, `전체 보기` 시 106행이 한꺼번에 펼쳐지지 않게 한다.

기본 표시: 데스크톱 16 / 모바일 12
점진 확장: 기본 → +24 → +24 → 나머지 전체
버튼: `러닝화 24개 더 보기` / 마지막 단계는 `전체 러닝화 보기`

- HTML에는 전체 122개 링크 유지
- JavaScript 없이도 `<details>`로 전체 접근 가능
- JavaScript 활성 시 점진 노출
- **필터는 전체 122개를 대상으로 동작하고, 필터 결과는 노출 제한보다 우선한다**
  (결과 8개면 8개 전부 표시, 40개면 16개 표시 후 점진 확장)
- 결과 수는 `aria-live`로 안내

기본 정렬은 카테고리 균형(데일리 4 · 쿠션 3 · 입문 3 · 레이싱 2 · 안정 2 · 트레일 2).
행은 7칸 그리드: 썸네일 · 브랜드+모델 · 한 줄 결론 · 용도 · 무게 · 가격 · 데이터 상태.

> 클래스명 주의: 배지에 `.lab`을 쓰지 말 것. 히어로 데이터 라벨의 `.lab`과 충돌해 배지가 사라진다.
```

- [ ] **Step 7: 모바일 도달 기준 추가 (§6)**

```markdown
### 6.1 도달 기준

높이 8,000px 이하는 유지하되 높이만으로 판단하지 않는다.

| 요소 | 도달 기준 |
|---|---|
| 맞춤 추천 CTA | 초기 화면 안 |
| 고민별 탐색 시작 | 첫 스크롤 안 |
| 첫 신발 상세 링크 | 두 번째 주요 스크롤 안 |
| 기존 광고 | 전체 스크롤 깊이의 55~70% |
| 마지막 CTA | 전체 페이지 마지막 10~15% |
```

- [ ] **Step 8: GA4 이벤트 3개 추가 (§8)**

`home_shoe_index_expand` `home_trust_methodology_open` `home_resume_clear` 를 목록에 추가하고
"이벤트가 중복 발화하지 않아야 한다"를 명시한다.

- [ ] **Step 9: QA 2단계 분리 절 신설 (§12 하위)**

```markdown
### 12.1 QA 분리

배포는 한 번에 하되 **검증은 두 단계로 분리하고, 결과를 섞지 않는다.**

**QA A — 전역 팔레트**: 89개 파일의 대비 · raw `blue-*` 잔재 · raw `rgba()` 잔재 ·
버튼 대비 · 광고 주변 대비 · 상세/비교/베스트/마라톤 페이지 · hover·focus·disabled 상태

**QA B — 새 홈 구조**: 섹션 순서 · CTA 도달 위치 · 모바일 높이 · 광고 위치 ·
인덱스 점진 노출 · 재방문 이어보기 · 키네틱 모션 · GA4 이벤트 · SEO 링크 수

각각 별도 체크리스트로 제출한다.
```

- [ ] **Step 10: 완료 조건 18개로 교체 (§12 말미)**

최종 수정 지시 §14의 18개 항목을 그대로 옮긴다.

- [ ] **Step 11: 작업 순서 절 신설 (§1 하위)**

```markdown
### 1.1 진행 순서

바로 프로젝트 코드를 수정하지 않는다.

1. 설계 문서 수정 → 2. 데스크톱 전체 시안 → 3. 모바일 전체 시안 →
4. 검토 및 승인 → 5. 실제 코드 구현 → 6. 성능·접근성·GA4·광고 검증

**시안 승인 전에는 프로젝트 구조를 대규모로 변경하거나 배포하지 않는다.**
```

- [ ] **Step 12: 정합성 확인 후 커밋**

```bash
grep -nE "클리프톤|단일 외곽|blur\(2\.2\)|threshold" docs/superpowers/specs/2026-07-31-home-redesign-design.md
# 기대: 출력 없음 (구 실루엣 방식 잔재 제거 확인)
grep -c "TBD\|TODO" docs/superpowers/specs/2026-07-31-home-redesign-design.md
# 기대: 0

git add docs/superpowers/specs/2026-07-31-home-redesign-design.md
git commit -m "docs(home): 최종 수정 지시 반영 — 중립 SVG 실루엣·첫 1초 인지·점진 노출·QA 분리"
```

---

### Task 2: 중립 러닝화 SVG 실루엣 확정

**Files:**
- Create: `.omc/design/silhouette-derivation.mjs` (좌표 유도 스크립트, 1회용)
- Create: `.omc/design/silhouette-preview.html` (승인 조건 6가지 육안 검증용)
- Create: `src/components/home/hero-silhouette.tsx` (확정 path)

**Interfaces:**
- Produces: `HeroSilhouette` 컴포넌트
  ```tsx
  type HeroSilhouetteProps = {
    /** 0~1. 첫 프레임 0.12, 최종 1.0 */
    opacity?: number;
    className?: string;
  };
  export function HeroSilhouette(props: HeroSilhouetteProps): JSX.Element;
  ```
  뷰박스는 `0 0 560 400`, 신발은 x 160~520 / y 185~305 영역에 배치한다.

**배경**: 손으로 좌표를 찍는 방식은 3회 실패했다(칼라 홈이 없으면 배·카누처럼 보이고, 넣으면 뿔처럼 튀어나옴). 감으로 찍지 말고 **실제 형태에서 좌표를 유도**한다.

- [ ] **Step 1: 3켤레 외곽 좌표 추출 스크립트 작성**

데일리·쿠션화·레이싱에서 각 1켤레를 고른다. 알파 채널이 있는 것만 쓴다.

```js
// .omc/design/silhouette-derivation.mjs
import sharp from 'sharp';

const SOURCES = [
  { role: 'heel',  src: 'public/images/shoes/brooks/ghost17/side.webp' },      // 데일리 — 힐 구조
  { role: 'upper', src: 'public/images/shoes/nike/vomero18/side.webp' },       // 쿠션화 — 발등·갑피
  { role: 'toe',   src: 'public/images/shoes/adidas/evosl/side.webp' },        // 레이싱 — 앞코·미드솔
];

const W = 400; // 정규화 폭

/** 실루엣 상단·하단 외곽선을 x축 등간격으로 샘플링해 반환 */
async function outline(src) {
  const png = await sharp(src).trim({ threshold: 8 })
    .resize(W, null, { fit: 'inside' }).png().toBuffer();
  const meta = await sharp(png).metadata();
  const a = await sharp(png).extractChannel(3).blur(2.5).raw().toBuffer();
  const { width: w, height: h } = meta;

  const top = [], bottom = [];
  for (let x = 0; x < w; x++) {
    let t = -1, b = -1;
    for (let y = 0; y < h; y++) {
      if (a[y * w + x] > 132) { if (t < 0) t = y; b = y; }
    }
    // 높이를 0~1로 정규화 (신발마다 이미지 높이가 달라서)
    top.push(t < 0 ? null : t / h);
    bottom.push(b < 0 ? null : b / h);
  }
  return { w, h, top, bottom };
}

const out = {};
for (const s of SOURCES) out[s.role] = await outline(s.src);
console.log(JSON.stringify(out));
```

- [ ] **Step 2: 스크립트 실행해 좌표 확보**

```bash
cd /Users/kwonjaehyeon/Programming/sancho/runningshoes
node .omc/design/silhouette-derivation.mjs > .omc/design/outlines.json
node -e "const o=require('./.omc/design/outlines.json'); Object.entries(o).forEach(([k,v])=>console.log(k, v.w+'x'+v.h, '샘플', v.top.filter(Boolean).length))"
```
기대: 3개 role이 각각 약 400개 샘플을 갖는다.

- [ ] **Step 3: 구간별 조합 + 단순화**

x축을 세 구간으로 나눠 각 소스의 담당 구간을 취하고, 경계는 선형 보간으로 잇는다.
그다음 20~24개 제어점으로 리샘플링해 곡선을 부드럽게 만든다(러그·끈 요철 제거).

```js
// 구간: 힐 0~28% / 갑피 28~66% / 앞코 66~100%
const SEG = [
  { role: 'heel',  from: 0.00, to: 0.28 },
  { role: 'upper', from: 0.28, to: 0.66 },
  { role: 'toe',   from: 0.66, to: 1.00 },
];
const BLEND = 0.06;   // 경계 전후 6%를 선형 보간
const POINTS = 22;    // 최종 제어점 수
```

산출한 제어점을 뷰박스 `0 0 560 400`(신발 x 160~520, y 185~305)로 스케일해 `C` 커브 path 문자열을 만든다.

- [ ] **Step 4: 승인 조건 6가지 육안 검증**

`.omc/design/silhouette-preview.html`에 확정 후보를 3가지 크기(데스크톱 380px · 모바일 200px · 축소 120px)로 렌더하고, 발 윤곽을 겹친 상태도 함께 보여준다. 브라우저로 열어 확인한다.

```bash
open .omc/design/silhouette-preview.html
```

체크: ① 러닝화로 보이는가 ② 특정 브랜드가 떠오르지 않는가 ③ 배·카누·구두가 아닌가
④ 도면 같되 차갑지 않은가 ⑤ 발 윤곽을 겹쳐도 자연스러운가 ⑥ 모바일 크기에서 인지되는가

**6개 중 하나라도 실패하면 Step 3의 `SEG` 경계와 `POINTS` 값을 조정해 반복한다.**
3회 반복해도 ①③이 실패하면 소스 조합을 바꾼다(힐 소스를 안정화 계열로 교체).

- [ ] **Step 5: 확정 path를 컴포넌트로 고정**

```tsx
// src/components/home/hero-silhouette.tsx
// 데일리·쿠션·레이싱 3켤레의 외곽을 구간별로 조합해 유도한 중립 실루엣이다.
// 특정 모델을 trace하지 않았고, 러그·끈·로고·브랜드 패널은 제거했다.
// 유도 스크립트: .omc/design/silhouette-derivation.mjs (재실행 불필요, 결과 고정)

type HeroSilhouetteProps = { opacity?: number; className?: string };

const OUTLINE = '...';   // Step 3 산출물
const MIDSOLE = '...';   // 미드솔 분리선

export function HeroSilhouette({ opacity = 1, className }: HeroSilhouetteProps) {
  return (
    <svg viewBox="0 0 560 400" fill="none" className={className} aria-hidden="true" style={{ opacity }}>
      <path d={OUTLINE} stroke="var(--ink)" strokeWidth="1.7" strokeLinejoin="round" />
      <path d={MIDSOLE} stroke="var(--signal)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
```

- [ ] **Step 6: 커밋**

```bash
git add .omc/design/silhouette-derivation.mjs .omc/design/silhouette-preview.html src/components/home/hero-silhouette.tsx
git commit -m "feat(home): 중립 러닝화 실루엣 SVG 확정 — 3켤레 외곽 구간 조합"
```

---

### Task 3: 데스크톱 전체 홈 고충실도 시안

**Files:**
- Create: `.omc/design/home-desktop-2026-08.html`

기존 `.omc/design/home-mockup-2026-07-31.html`을 기반으로 하되, Task 1·2의 변경을 반영한다.

- [ ] **Step 1: 실루엣 교체와 첫 1초 인지 적용**

클리프톤 실루엣 이미지를 Task 2의 inline SVG로 교체한다.
첫 프레임 불투명도 0.12로 시작해 모션 진행에 따라 1.0으로 선명해지는 keyframes를 넣는다.

```css
@keyframes silReveal {
  0%   { opacity: .12; }
  38%  { opacity: .12; }
  64%  { opacity: 1; }
  100% { opacity: 1; }
}
/* 왼쪽에서 오른쪽으로 선명해지는 클립 와이프는 유지 */
```

- [ ] **Step 2: 마지막 장면에 전진 마무리 추가**

```css
@keyframes shoeAdvance {
  0%, 80% { transform: translateX(0); }
  92%     { transform: translateX(7px); }
  100%    { transform: translateX(6px); }
}
@keyframes ctaArrow {
  0%, 84% { transform: translateX(0); }
  90%     { transform: translateX(5px); }
  100%    { transform: translateX(0); }
}
```
적합 영역 불투명도를 최대 0.32, 최종 0.19로 조정한다.

- [ ] **Step 3: 고민별 탐색을 비대칭 차등 레이아웃으로 재작성**

우선순위 순서(처음 → 발볼 → 장거리 → 기록 → 무릎 → 다목적)로 바꾸고 균등 6칸을 폐기한다.

```
┌──────────────────┬──────────────┐
│ 01 처음 러닝화    │ 02 넓은 발볼 │
│ (주요 패널)       ├──────────────┤
│                  │ 03 편안한 장거리│
├──────────┬───────┴──────┬───────┤
│ 04 기록   │ 05 무릎 부담  │ 06 다목적│
└──────────┴──────────────┴───────┘
```
주요 패널에는 썸네일과 결과 수를 크게, 행 패널 3개는 간결하게 둔다.

- [ ] **Step 4: 인덱스 점진 확장 구현**

`<details>`는 JS 없는 환경용으로 유지하고, JS가 있으면 점진 확장 버튼으로 대체한다.

```js
// 기본 16 → +24 → +24 → 전체
let shown = 16;
function expand() {
  const remaining = TOTAL - shown;
  shown += Math.min(24, remaining);
  render();
  // 마지막 단계면 버튼 라벨을 '전체 러닝화 보기'로 바꾼다
}
```
필터가 적용되면 `shown`을 결과 수로 리셋해 제한을 풀지 판단한다(결과 ≤16이면 전부 표시).

- [ ] **Step 5: 팔레트 토큰 5개 추가 반영**

`--signal-dark` `--positive` `--warning` `--dark-soft` `--light-on-dark`를 `:root`에 추가하고,
마지막 CTA 밴드에 `--dark-soft`를 보조 톤으로 쓴다.

- [ ] **Step 6: 1440 / 1280 / 1024 렌더 확인**

```bash
open .omc/design/home-desktop-2026-08.html
```
Chrome DevTools MCP로 세 폭에서 스크린샷을 찍어 확인한다. 확인 항목:
섹션 순서 · CTA 도달 위치 · 광고 위치(스크롤 55~70%) · 다크 면적 22% 이하 · 전체 높이

- [ ] **Step 7: 커밋**

```bash
git add .omc/design/home-desktop-2026-08.html
git commit -m "design(home): 데스크톱 전체 홈 고충실도 시안"
```

---

### Task 4: 모바일 전체 홈 시안 + 모션 데모 2종

**Files:**
- Create: `.omc/design/home-mobile-2026-08.html`
- Create: `.omc/design/hero-motion-demo.html`

- [ ] **Step 1: 모바일 시안 작성 (430 / 390 / 360)**

데스크톱 축소가 아니라 별도 구성이다.

- 히어로 65~75svh, CTA가 초기 화면 안
- CTA 아래 비주얼: 컨테이너 106% × 실루엣 `left 22% / width 76%` = **실루엣 기준 +15%**
- `aspect-ratio: 560/280`, `margin-top: -10px`로 CTA에 붙임
- 스타트 라인·속도선·기준선 태그 숨김, 라벨은 잔류 4개만
- 고민별 탐색 1열 6행, 첫 3개에 큰 제목 + 시그널 선 + 결과 수
- 인덱스 12행 / 3칸 압축(썸네일·모델·가격 + 무게·상태)
- 필터 바텀시트(ESC 닫힘, 포커스 트랩)

- [ ] **Step 2: 도달 기준 실측**

```js
// 브라우저 콘솔에서
const y = (sel) => Math.round(document.querySelector(sel).getBoundingClientRect().top + scrollY);
const H = document.body.scrollHeight;
console.log({
  cta: y('.h-cta'),                    // 기대: 초기 화면(<844) 안
  problem: y('#problem'),              // 기대: 첫 스크롤 안
  firstShoe: y('.row'),                // 기대: 두 번째 주요 스크롤 안
  adPct: Math.round(y('.ad') / H * 100),      // 기대: 55~70
  finalPct: Math.round(y('.final') / H * 100), // 기대: 85~90
  total: H,                            // 기대: 8000 이하
});
```

- [ ] **Step 3: 모션 데모 2종 작성**

`hero-motion-demo.html`에 데스크톱 4.5초와 모바일 2.4초를 나란히 두고, 재생 버튼과
0.8초 단위 프레임 스냅샷을 함께 보여준다. **이 데모 파일의 재생 버튼과 프레임 라벨은 시안 전용이며 실제 홈에 넣지 않는다.**

- [ ] **Step 4: 커밋**

```bash
git add .omc/design/home-mobile-2026-08.html .omc/design/hero-motion-demo.html
git commit -m "design(home): 모바일 시안 + 히어로 모션 데모 2종"
```

---

### Task 5: 상태 모음 · 변경 전후 비교 · 레퍼런스 반영 위치

**Files:**
- Create: `.omc/design/home-states-2026-08.html`

- [ ] **Step 1: 12가지 상태 렌더**

신규 방문자 · 재방문자 · 히어로 모션 시작 · 히어로 최종 · 필터 미적용 · 필터 적용 ·
인덱스 점진 확장 · 광고 로딩 · 광고 미노출 · 모바일 필터 바텀시트 · 데이터 없음 · 이미지 오류

각 상태를 라벨과 함께 한 페이지에 나열한다.

- [ ] **Step 2: 변경 전후 비교**

현재 홈(`main` 기준)과 새 홈의 스크롤 길이·섹션 순서·CTA 위치·광고 위치를 표로 대조한다.
현재 홈 스크린샷은 `npx serve out` 후 촬영한다(이 프로젝트는 `output: export`라 `next start` 불가).

- [ ] **Step 3: 레퍼런스 반영 위치 설명**

각 섹션에 어떤 레퍼런스의 어떤 원칙이 들어갔는지 주석으로 표기한다
(On=여백·경험 중심 탐색 / RunRepeat=필터·데이터 상태 / Nike=대형 카피·리듬 /
Tracksmith=에디토리얼 / Bandit=온도감 / Awwwards=정렬 모션).
§9의 "섹션당 최대 2개 레퍼런스" 규칙 준수를 확인한다.

- [ ] **Step 4: 커밋 후 승인 요청**

```bash
git add .omc/design/home-states-2026-08.html
git commit -m "design(home): 상태 12종·변경 전후 비교·레퍼런스 반영 위치"
```

> ## ★ 승인 게이트 ★
> Task 1~5 산출물을 운영자에게 제출하고 **승인을 받기 전까지 Task 6 이후로 진행하지 않는다.**
> 프로젝트 구조 변경·배포 금지.

---

# Phase B — 기반 (승인 후)

### Task 6: main 머지 + 팔레트 토큰 전환

**Files:**
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`

- [ ] **Step 1: main 머지**

```bash
git checkout redesign-b
git merge main
# 신발 데이터 충돌 예상 — 양쪽 다 살리는 방향으로 해결하되,
# src/lib/data/shoes/ 충돌은 main 쪽 최신 데이터를 우선한다
git status
```

- [ ] **Step 2: 머지 후 기준선 확인**

```bash
set -o pipefail
npm run validate && npm test && npm run build
```
기대: 전부 통과. 실패하면 팔레트 변경 전에 해결한다.

- [ ] **Step 3: 팔레트 토큰 교체**

`src/app/globals.css`의 `:root`에서 아래 값을 바꾸고 5개를 추가한다.

```css
:root {
  --background: #F7F4ED;      /* was #FCFBF9 */
  --bg-warm: #F7F4ED;         /* was #FCFBF9 */
  --bg-warm-alt: #EFEAE0;     /* was #F7F5EE */
  --border: #D9D4C8;          /* was #E3E0D6 */
  --secondary: #6E6A5E;       /* was #5F5B4E */
  --accent-soft: #FFE7DB;     /* was #FFF0E8 */

  --signal-dark: #C73800;
  --positive: #2F7D5A;        /* was #0f766e */
  --warning: #C98112;         /* was #B45309 */
  --dark-soft: #28241D;
  --light-on-dark: #F7F4ED;
}
```

`tailwind.config.ts`의 `slate` 스케일 중 `200`을 `#D9D4C8`, `600`을 `#6E6A5E`로 맞춘다.

- [ ] **Step 4: 자동 다크모드 제거 확인**

```bash
grep -n "prefers-color-scheme" src/app/globals.css src/components/home/*.tsx
```
홈 경로에 걸리는 자동 다크 블록이 있으면 제거한다. `prefers-reduced-motion`은 건드리지 않는다.

- [ ] **Step 5: 검증 후 커밋**

```bash
set -o pipefail
npm run validate && npm run build && npm run check:payload
git add src/app/globals.css tailwind.config.ts
git commit -m "feat(theme): Warm Performance 팔레트 전환 — 토큰 5개 조정 + 5개 추가"
```

---

### Task 7: GA4 이벤트 래퍼

**Files:**
- Create: `src/lib/analytics.ts`
- Test: `src/lib/__tests__/analytics.test.ts`

**Interfaces:**
- Produces:
  ```ts
  export type HomeEvent =
    | 'home_recommend_start' | 'home_problem_category_click' | 'home_shoe_detail_click'
    | 'home_best_click' | 'home_compare_click' | 'home_blog_click'
    | 'home_resume_click' | 'home_ad_view' | 'home_filter_apply'
    | 'home_search_start' | 'home_shoe_index_expand'
    | 'home_trust_methodology_open' | 'home_resume_clear';

  export type EventParams = {
    device_type?: 'mobile' | 'desktop';
    visitor_type?: 'new' | 'returning';
    section_name?: string;
    item_name?: string;
    destination_path?: string;
    filter_name?: string;
    filter_value?: string;
  };

  export function track(event: HomeEvent, params?: EventParams): void;
  export function trackOnce(key: string, event: HomeEvent, params?: EventParams): void;
  export function __resetOnceForTest(): void;
  ```

- [ ] **Step 1: 실패하는 테스트 작성**

```ts
// src/lib/__tests__/analytics.test.ts
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { track, trackOnce, __resetOnceForTest } from '../analytics';

describe('analytics', () => {
  beforeEach(() => {
    __resetOnceForTest();
    (globalThis as any).window = { gtag: vi.fn() };
  });

  it('gtag에 event와 파라미터를 전달한다', () => {
    track('home_recommend_start', { section_name: 'hero', device_type: 'desktop' });
    expect((globalThis as any).window.gtag)
      .toHaveBeenCalledWith('event', 'home_recommend_start', { section_name: 'hero', device_type: 'desktop' });
  });

  it('gtag가 없으면 조용히 무시한다', () => {
    (globalThis as any).window = {};
    expect(() => track('home_ad_view')).not.toThrow();
  });

  it('trackOnce는 같은 키로 두 번 발화하지 않는다', () => {
    trackOnce('ad-1', 'home_ad_view');
    trackOnce('ad-1', 'home_ad_view');
    expect((globalThis as any).window.gtag).toHaveBeenCalledTimes(1);
  });

  it('trackOnce는 키가 다르면 각각 발화한다', () => {
    trackOnce('ad-1', 'home_ad_view');
    trackOnce('ad-2', 'home_ad_view');
    expect((globalThis as any).window.gtag).toHaveBeenCalledTimes(2);
  });
});
```

- [ ] **Step 2: 실패 확인**

```bash
npx vitest run src/lib/__tests__/analytics.test.ts
```
기대: FAIL — `Cannot find module '../analytics'`

- [ ] **Step 3: 구현**

```ts
// src/lib/analytics.ts
export type HomeEvent =
  | 'home_recommend_start' | 'home_problem_category_click' | 'home_shoe_detail_click'
  | 'home_best_click' | 'home_compare_click' | 'home_blog_click'
  | 'home_resume_click' | 'home_ad_view' | 'home_filter_apply'
  | 'home_search_start' | 'home_shoe_index_expand'
  | 'home_trust_methodology_open' | 'home_resume_clear';

export type EventParams = {
  device_type?: 'mobile' | 'desktop';
  visitor_type?: 'new' | 'returning';
  section_name?: string;
  item_name?: string;
  destination_path?: string;
  filter_name?: string;
  filter_value?: string;
};

type Gtag = (command: 'event', event: string, params?: Record<string, unknown>) => void;

const fired = new Set<string>();

export function track(event: HomeEvent, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag !== 'function') return;
  gtag('event', event, params);
}

/** 같은 key로는 세션 내 1회만 발화한다(광고 조회·확장 등 중복 방지). */
export function trackOnce(key: string, event: HomeEvent, params?: EventParams): void {
  if (fired.has(key)) return;
  fired.add(key);
  track(event, params);
}

export function __resetOnceForTest(): void {
  fired.clear();
}
```

- [ ] **Step 4: 통과 확인**

```bash
npx vitest run src/lib/__tests__/analytics.test.ts
```
기대: 4 passed

- [ ] **Step 5: 커밋**

```bash
git add src/lib/analytics.ts src/lib/__tests__/analytics.test.ts
git commit -m "feat(analytics): GA4 홈 이벤트 래퍼 — 중복 발화 방지 포함"
```

---

### Task 8: localStorage 기록·읽기 유틸

**Files:**
- Create: `src/lib/recent.ts`
- Test: `src/lib/__tests__/recent.test.ts`

**Interfaces:**
- Produces:
  ```ts
  export type RecentShoe = { slug: string; name: string; category: string; at: number };
  export type RecentCompare = { slugs: [string, string]; at: number };
  export type RecentRecommend = { summary: string; at: number };
  export type ResumeData = {
    shoe: RecentShoe | null;
    compare: RecentCompare | null;
    recommend: RecentRecommend | null;
  };

  export function recordShoeView(s: Omit<RecentShoe, 'at'>): void;
  export function recordCompare(slugs: [string, string]): void;
  export function recordRecommend(summary: string): void;
  export function readResume(validSlugs: ReadonlySet<string>): ResumeData;
  export function clearResume(): void;
  ```
  `readResume`는 **`validSlugs`에 없는 slug를 가진 항목을 제외**한다(삭제된 신발 링크 방지).

- [ ] **Step 1: 실패하는 테스트 작성**

```ts
// src/lib/__tests__/recent.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { recordShoeView, recordCompare, recordRecommend, readResume, clearResume } from '../recent';

function memoryStorage() {
  const m = new Map<string, string>();
  return {
    getItem: (k: string) => m.get(k) ?? null,
    setItem: (k: string, v: string) => { m.set(k, v); },
    removeItem: (k: string) => { m.delete(k); },
  };
}

const VALID = new Set(['asics-novablast-6', 'nike-pegasus-42', 'nike-vomero-18']);

describe('recent', () => {
  beforeEach(() => {
    (globalThis as any).window = { localStorage: memoryStorage() };
  });

  it('기록이 없으면 전부 null을 반환한다', () => {
    expect(readResume(VALID)).toEqual({ shoe: null, compare: null, recommend: null });
  });

  it('본 신발을 기록하고 읽는다', () => {
    recordShoeView({ slug: 'asics-novablast-6', name: '노바블라스트 6', category: '데일리' });
    expect(readResume(VALID).shoe?.slug).toBe('asics-novablast-6');
  });

  it('유효하지 않은 slug는 제외한다', () => {
    recordShoeView({ slug: 'deleted-shoe', name: '삭제됨', category: '데일리' });
    expect(readResume(VALID).shoe).toBeNull();
  });

  it('비교 쌍 중 하나라도 유효하지 않으면 제외한다', () => {
    recordCompare(['nike-pegasus-42', 'deleted-shoe']);
    expect(readResume(VALID).compare).toBeNull();
  });

  it('비교 쌍이 모두 유효하면 반환한다', () => {
    recordCompare(['nike-pegasus-42', 'nike-vomero-18']);
    expect(readResume(VALID).compare?.slugs).toEqual(['nike-pegasus-42', 'nike-vomero-18']);
  });

  it('추천 요약을 기록하고 읽는다', () => {
    recordRecommend('넓은 발볼 · 데일리 · 20만원 이하');
    expect(readResume(VALID).recommend?.summary).toBe('넓은 발볼 · 데일리 · 20만원 이하');
  });

  it('clearResume는 모든 기록을 지운다', () => {
    recordShoeView({ slug: 'asics-novablast-6', name: '노바블라스트 6', category: '데일리' });
    recordRecommend('테스트');
    clearResume();
    expect(readResume(VALID)).toEqual({ shoe: null, compare: null, recommend: null });
  });

  it('저장값이 깨져 있어도 예외를 던지지 않는다', () => {
    (globalThis as any).window.localStorage.setItem('arb:recent:shoe', '{깨진 JSON');
    expect(() => readResume(VALID)).not.toThrow();
    expect(readResume(VALID).shoe).toBeNull();
  });
});
```

- [ ] **Step 2: 실패 확인**

```bash
npx vitest run src/lib/__tests__/recent.test.ts
```
기대: FAIL — 모듈 없음

- [ ] **Step 3: 구현**

```ts
// src/lib/recent.ts
export type RecentShoe = { slug: string; name: string; category: string; at: number };
export type RecentCompare = { slugs: [string, string]; at: number };
export type RecentRecommend = { summary: string; at: number };
export type ResumeData = {
  shoe: RecentShoe | null;
  compare: RecentCompare | null;
  recommend: RecentRecommend | null;
};

const KEY = {
  shoe: 'arb:recent:shoe',
  compare: 'arb:recent:compare',
  recommend: 'arb:recent:recommend',
} as const;

function store(): Storage | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage;
  } catch {
    return null; // 사파리 프라이빗 모드 등
  }
}

function write(key: string, value: unknown): void {
  const s = store();
  if (!s) return;
  try {
    s.setItem(key, JSON.stringify(value));
  } catch {
    // 용량 초과 등 — 기록은 부가 기능이므로 조용히 무시한다
  }
}

function read<T>(key: string): T | null {
  const s = store();
  if (!s) return null;
  try {
    const raw = s.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null; // 깨진 값
  }
}

export function recordShoeView(s: Omit<RecentShoe, 'at'>): void {
  write(KEY.shoe, { ...s, at: Date.now() });
}

export function recordCompare(slugs: [string, string]): void {
  write(KEY.compare, { slugs, at: Date.now() });
}

export function recordRecommend(summary: string): void {
  write(KEY.recommend, { summary, at: Date.now() });
}

export function readResume(validSlugs: ReadonlySet<string>): ResumeData {
  const shoe = read<RecentShoe>(KEY.shoe);
  const compare = read<RecentCompare>(KEY.compare);
  const recommend = read<RecentRecommend>(KEY.recommend);

  return {
    shoe: shoe && validSlugs.has(shoe.slug) ? shoe : null,
    compare:
      compare && Array.isArray(compare.slugs) && compare.slugs.length === 2 &&
      compare.slugs.every((s) => validSlugs.has(s))
        ? compare
        : null,
    recommend: recommend && typeof recommend.summary === 'string' ? recommend : null,
  };
}

export function clearResume(): void {
  const s = store();
  if (!s) return;
  Object.values(KEY).forEach((k) => {
    try { s.removeItem(k); } catch { /* noop */ }
  });
}
```

- [ ] **Step 4: 통과 확인**

```bash
npx vitest run src/lib/__tests__/recent.test.ts
```
기대: 8 passed

- [ ] **Step 5: 커밋**

```bash
git add src/lib/recent.ts src/lib/__tests__/recent.test.ts
git commit -m "feat(home): 재방문 이어보기용 localStorage 유틸 — 유효 slug 검증 포함"
```

---

### Task 9: 기록 훅 3곳 삽입

**Files:**
- Modify: `src/app/(detail)/shoes/[slug]/page.tsx` (또는 그 하위 클라이언트 컴포넌트)
- Modify: `src/components/compare/compare-content.tsx`
- Modify: `src/components/recommend/recommend-content.tsx`

**Interfaces:**
- Consumes: Task 8의 `recordShoeView` `recordCompare` `recordRecommend`

**주의**: 이 세 파일의 레이아웃·UI는 건드리지 않는다. 기록 코드만 추가한다.
상세 페이지는 서버 컴포넌트일 수 있으므로, 클라이언트 경계를 가진 하위 컴포넌트에 넣거나
작은 `'use client'` 기록 전용 컴포넌트를 만들어 삽입한다.

- [ ] **Step 1: 상세 페이지 기록**

서버 컴포넌트라면 아래 전용 컴포넌트를 만들어 렌더한다.

```tsx
// src/components/detail/record-view.tsx
'use client';
import { useEffect } from 'react';
import { recordShoeView } from '@/lib/recent';

export function RecordView({ slug, name, category }: { slug: string; name: string; category: string }) {
  useEffect(() => {
    recordShoeView({ slug, name, category });
  }, [slug, name, category]);
  return null;
}
```

상세 페이지에서 `<RecordView slug={shoe.slug} name={shoe.name} category={shoe.category} />`를 렌더한다.

- [ ] **Step 2: 비교 페이지 기록**

`compare-content.tsx`에서 선택된 신발이 2개일 때 기록한다.

```tsx
useEffect(() => {
  if (selected.length === 2) {
    recordCompare([selected[0].slug, selected[1].slug]);
  }
}, [selected]);
```

- [ ] **Step 3: 추천 결과 기록**

`recommend-content.tsx`에서 결과가 산출된 시점에 조건 요약을 기록한다.

```tsx
useEffect(() => {
  if (!results) return;
  const summary = [footWidthLabel, purposeLabel, budgetLabel].filter(Boolean).join(' · ');
  recordRecommend(summary);
}, [results, footWidthLabel, purposeLabel, budgetLabel]);
```
라벨 변수명은 해당 파일의 기존 상태 이름에 맞춘다.

- [ ] **Step 4: 검증**

```bash
set -o pipefail
npm run build
```
기대: 성공. 브라우저에서 상세 → 비교 → 추천을 한 번씩 방문한 뒤 콘솔에서 확인한다.

```js
['arb:recent:shoe','arb:recent:compare','arb:recent:recommend'].forEach(k => console.log(k, localStorage.getItem(k)));
```
기대: 세 키에 모두 값이 있다.

- [ ] **Step 5: 커밋**

```bash
git add src/components/detail/record-view.tsx src/app/\(detail\)/shoes/\[slug\]/page.tsx src/components/compare/compare-content.tsx src/components/recommend/recommend-content.tsx
git commit -m "feat(home): 상세·비교·추천에 이어보기 기록 훅 추가"
```

---

### Task 10: 홈 데이터 레이어

**Files:**
- Create: `src/lib/home/stats.ts`
- Create: `src/lib/home/problems.ts`
- Create: `src/lib/home/index-sort.ts`
- Test: `src/lib/__tests__/home-data.test.ts`

**Interfaces:**
- Consumes: `getGridShoes()` (`@/lib/data/shoes`), `getAllPosts()` (`@/lib/data/blog`)
- Produces:
  ```ts
  // stats.ts
  export function getHomeStats(): { shoeCount: number; lastUpdated: string | null; questionCount: number; estimatedMinutes: number };

  // problems.ts
  export type Problem = {
    rank: 1|2|3|4|5|6;
    id: string;
    question: string;      // "처음 러닝화를 고르고 있어요"
    criteria: string;      // 판단 기준 문장
    slug: string;          // best slug (앞에 /best/ 없음)
    note?: string;         // 05 무릎 부담의 면책 문구
  };
  export const PROBLEMS: readonly Problem[];

  // index-sort.ts
  export function balancedByCategory<T extends { category: string; rating: number; price: number }>(
    shoes: readonly T[],
    quota?: Record<string, number>
  ): T[];
  export const DEFAULT_QUOTA: Record<string, number>;
  ```

- [ ] **Step 1: 실패하는 테스트 작성**

```ts
// src/lib/__tests__/home-data.test.ts
import { describe, it, expect } from 'vitest';
import { getHomeStats } from '../home/stats';
import { PROBLEMS } from '../home/problems';
import { balancedByCategory, DEFAULT_QUOTA } from '../home/index-sort';
import { getShoes } from '../data/shoes';

describe('getHomeStats', () => {
  it('신발 수를 실제 데이터에서 산출한다', () => {
    expect(getHomeStats().shoeCount).toBe(getShoes().length);
  });
  it('문항 수는 9다', () => {
    expect(getHomeStats().questionCount).toBe(9);
  });
  it('갱신일은 ISO 날짜 문자열이거나 null이다', () => {
    const { lastUpdated } = getHomeStats();
    expect(lastUpdated === null || /^\d{4}-\d{2}-\d{2}/.test(lastUpdated)).toBe(true);
  });
});

describe('PROBLEMS', () => {
  it('6개이고 rank가 1~6으로 유일하다', () => {
    expect(PROBLEMS).toHaveLength(6);
    expect([...new Set(PROBLEMS.map(p => p.rank))].sort()).toEqual([1,2,3,4,5,6]);
  });
  it('우선순위 순서가 지시서와 일치한다', () => {
    expect(PROBLEMS.map(p => p.slug)).toEqual([
      'beginner', 'wide-toebox', 'max-cushion', 'racing', 'knee-protection', 'daily-trainer',
    ]);
  });
  it('무릎 항목은 치료·예방을 단정하지 않는다', () => {
    const knee = PROBLEMS.find(p => p.slug === 'knee-protection')!;
    const text = knee.question + knee.criteria + (knee.note ?? '');
    expect(text).not.toMatch(/치료|완화|예방|낫게|해결해/);
    expect(knee.note).toMatch(/진단이나 치료를 대신하지 않습니다/);
  });
});

describe('balancedByCategory', () => {
  const make = (category: string, i: number) => ({ category, rating: 5 - i * 0.1, price: 100000 + i * 1000 });
  const pool = [
    ...Array.from({ length: 20 }, (_, i) => make('데일리', i)),
    ...Array.from({ length: 20 }, (_, i) => make('쿠션화', i)),
    ...Array.from({ length: 20 }, (_, i) => make('입문화', i)),
    ...Array.from({ length: 20 }, (_, i) => make('레이싱', i)),
    ...Array.from({ length: 20 }, (_, i) => make('안정화', i)),
    ...Array.from({ length: 20 }, (_, i) => make('트레일', i)),
  ];

  it('기본 쿼터대로 16개를 뽑는다', () => {
    const r = balancedByCategory(pool);
    expect(r).toHaveLength(16);
    const count = (c: string) => r.filter(s => s.category === c).length;
    expect(count('데일리')).toBe(4);
    expect(count('쿠션화')).toBe(3);
    expect(count('입문화')).toBe(3);
    expect(count('레이싱')).toBe(2);
    expect(count('안정화')).toBe(2);
    expect(count('트레일')).toBe(2);
  });

  it('한 카테고리가 부족해도 예외 없이 가능한 만큼만 채운다', () => {
    const thin = pool.filter(s => s.category !== '트레일');
    const r = balancedByCategory(thin);
    expect(r.filter(s => s.category === '트레일')).toHaveLength(0);
    expect(r.length).toBe(14);
  });

  it('카테고리 안에서는 rating 내림차순, 동률이면 가격 오름차순이다', () => {
    const daily = balancedByCategory(pool).filter(s => s.category === '데일리');
    for (let i = 1; i < daily.length; i++) {
      expect(daily[i - 1].rating).toBeGreaterThanOrEqual(daily[i].rating);
    }
  });

  it('쿼터 합계가 16이다', () => {
    expect(Object.values(DEFAULT_QUOTA).reduce((a, b) => a + b, 0)).toBe(16);
  });
});
```

- [ ] **Step 2: 실패 확인**

```bash
npx vitest run src/lib/__tests__/home-data.test.ts
```
기대: FAIL — 모듈 없음

- [ ] **Step 3: `index-sort.ts` 구현**

```ts
// src/lib/home/index-sort.ts
export const DEFAULT_QUOTA: Record<string, number> = {
  데일리: 4, 쿠션화: 3, 입문화: 3, 레이싱: 2, 안정화: 2, 트레일: 2,
};

/**
 * rating 단순 정렬은 상위가 전부 30만원대 레이싱 슈퍼슈즈라 홈 기본값으로 대표성이 없다.
 * 카테고리별 쿼터를 채워 균형을 맞춘다. 쿼터를 못 채우면 가능한 만큼만 넣는다.
 */
export function balancedByCategory<T extends { category: string; rating: number; price: number }>(
  shoes: readonly T[],
  quota: Record<string, number> = DEFAULT_QUOTA,
): T[] {
  const out: T[] = [];
  for (const [category, n] of Object.entries(quota)) {
    const picked = shoes
      .filter((s) => s.category === category)
      .sort((a, b) => b.rating - a.rating || a.price - b.price)
      .slice(0, n);
    out.push(...picked);
  }
  return out;
}
```

- [ ] **Step 4: `problems.ts` 구현**

```ts
// src/lib/home/problems.ts
export type Problem = {
  rank: 1 | 2 | 3 | 4 | 5 | 6;
  id: string;
  question: string;
  criteria: string;
  slug: string;
  note?: string;
};

/** 우선순위 순. 목적지 slug는 전부 실존하는 /best 매트릭스다. */
export const PROBLEMS: readonly Problem[] = [
  { rank: 1, id: 'first', question: '처음 러닝화를 고르고 있어요',
    criteria: '쿠션 여유, 무게, 가격대를 기준으로 부담 없는 첫 켤레를 찾습니다.', slug: 'beginner' },
  { rank: 2, id: 'wide', question: '발볼이 넓어서 선택이 어려워요',
    criteria: '와이드 출시 여부, 토박스 너비, 갑피 여유를 기준으로 찾습니다.', slug: 'wide-toebox' },
  { rank: 3, id: 'long', question: '편안하게 오래 달리고 싶어요',
    criteria: '스택 높이, 충격흡수 성향, 로커 구조를 기준으로 찾습니다.', slug: 'max-cushion' },
  { rank: 4, id: 'race', question: '기록을 줄이고 싶어요',
    criteria: '플레이트 유무, 무게, 에너지 리턴을 기준으로 찾습니다.', slug: 'racing' },
  { rank: 5, id: 'knee', question: '무릎 부담이 걱정돼요',
    criteria: '충격흡수 성향과 안정성 구조를 기준으로 살펴봅니다.', slug: 'knee-protection',
    note: '러닝화 정보는 진단이나 치료를 대신하지 않습니다.' },
  { rank: 6, id: 'all', question: '한 켤레로 다양하게 뛰고 싶어요',
    criteria: '다목적 성향, 내구성 범위, 가격 균형을 기준으로 찾습니다.', slug: 'daily-trainer' },
] as const;
```

- [ ] **Step 5: `stats.ts` 구현**

```ts
// src/lib/home/stats.ts
import { getShoes } from '@/lib/data/shoes';
import { getAllPosts } from '@/lib/data/blog';

/** 카운트를 하드코딩하면 반드시 stale해진다. 전부 데이터 소스에서 산출한다. */
export function getHomeStats() {
  const posts = getAllPosts();
  const latest = posts[0];
  return {
    shoeCount: getShoes().length,
    lastUpdated: latest?.updatedAt ?? latest?.publishedAt ?? null,
    questionCount: 9,     // src/components/recommend/questionnaire.tsx 의 questions 길이와 일치
    estimatedMinutes: 1,
  };
}
```

- [ ] **Step 6: 통과 확인**

```bash
npx vitest run src/lib/__tests__/home-data.test.ts
```
기대: 10 passed

- [ ] **Step 7: 커밋**

```bash
git add src/lib/home src/lib/__tests__/home-data.test.ts
git commit -m "feat(home): 홈 데이터 레이어 — 지표·고민 정의·카테고리 균형 정렬"
```

---

# Phase C — 컴포넌트

각 컴포넌트는 Task 3~4 시안의 해당 섹션을 시각 명세로 삼는다.
공통 규칙: `'use client'`는 상호작용이 필요한 컴포넌트에만 붙이고,
**모듈 스코프에서 데이터 getter를 호출하지 않는다**(과거 `header.tsx`가 이를 어겨 클라이언트 번들이 712KB로 불어난 이력).

### Task 11: KineticHero

**Files:**
- Create: `src/components/home/kinetic-hero.tsx`
- Modify: `src/components/home/hero-silhouette.tsx` (Task 2 산출물에 opacity 애니메이션 훅 추가)

**Interfaces:**
- Consumes: `HeroSilhouette`(Task 2), `track`(Task 7)
- Produces: `export function KineticHero(): JSX.Element`

- [ ] **Step 1: 정적 마크업부터 작성**

모션 없이 최종 상태만 렌더한다. 카피는 지시서 원문 그대로:
키커 `KOREAN RUNNER FIT INDEX` / `감으로 고르지` + `않는다.`(둘째 줄만 signal) /
보조 문구 2줄 / CTA `약 1분 · 9문항 맞춤 추천` / CTA 보조 정보 / 보조 CTA `고민별로 찾아보기`.

`<h1>`은 페이지 전체에서 이것 하나다. CTA는 실제 `<a href="/recommend">`.

- [ ] **Step 2: 사선 트랙과 데이터 레이어 추가**

`--tilt: -9deg` 기준으로 트랙 레인 5줄, 기준선 4줄, 라벨 12개(잔류 4 + 소멸 8)를 배치한다.
라벨은 기울어진 좌표계 안에 두되 라벨 자체를 역회전시켜 텍스트를 수평으로 유지한다.

- [ ] **Step 3: 모션 적용 + 세션당 1회 게이트**

```tsx
'use client';
import { useEffect, useRef, useState } from 'react';

const MOTION_KEY = 'arb:hero-played';

function useHeroMotion() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let played = false;
    try { played = sessionStorage.getItem(MOTION_KEY) === '1'; } catch { /* noop */ }
    if (reduce || played) return;          // 최종 상태 정적 렌더

    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setPlay(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        setPlay(true);
        try { sessionStorage.setItem(MOTION_KEY, '1'); } catch { /* noop */ }
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, play };
}
```

CSS는 `.play` 클래스가 붙었을 때만 `animation-play-state: running`이 되게 하고,
기본값은 최종 상태다. **애니메이션 중에도 CTA는 클릭 가능해야 하므로 오버레이를 두지 않는다.**

- [ ] **Step 4: 첫 1초 인지 확인**

실루엣이 첫 프레임부터 불투명도 0.12로 보이는지 확인한다.

```bash
set -o pipefail && npm run build && npx serve out
```
브라우저에서 홈을 열고 0.3초 시점 스크린샷을 찍어 신발 윤곽이 보이는지 육안 확인한다.

- [ ] **Step 5: 커밋**

```bash
git add src/components/home/kinetic-hero.tsx src/components/home/hero-silhouette.tsx
git commit -m "feat(home): 키네틱 히어로 — 사선 트랙·첫 1초 실루엣 노출·세션당 1회"
```

---

### Task 12: ProblemExplorer

**Files:**
- Create: `src/components/home/problem-explorer.tsx`

**Interfaces:**
- Consumes: `PROBLEMS`(Task 10), `track`(Task 7)
- Produces:
  ```tsx
  type ProblemExplorerProps = { counts: Record<string, number> };  // slug → 결과 수
  export function ProblemExplorer(props: ProblemExplorerProps): JSX.Element;
  ```

- [ ] **Step 1: 비대칭 레이아웃 구현**

균등 6칸 그리드를 쓰지 않는다. 주요 패널 1(rank 1) + 중간 패널 2(rank 2·3) + 행 패널 3(rank 4·5·6).
모바일은 1열 6행이되 첫 3개에 더 큰 제목과 시그널 선을 준다.

- [ ] **Step 2: 링크와 이벤트 연결**

각 항목은 `<a href={`/best/${p.slug}`}>`이고 클릭 시 이벤트를 보낸다.

```tsx
onClick={() => track('home_problem_category_click', {
  section_name: 'problem_explorer',
  item_name: p.id,
  destination_path: `/best/${p.slug}`,
})}
```

- [ ] **Step 3: 무릎 항목 문구 검사**

```bash
grep -nE "치료|완화|예방|낫게" src/components/home/problem-explorer.tsx
```
기대: 출력 없음. 섹션 하단에 면책 문구를 렌더한다.

- [ ] **Step 4: 빌드 확인 후 커밋**

```bash
set -o pipefail && npm run build
git add src/components/home/problem-explorer.tsx
git commit -m "feat(home): 고민별 탐색 — 우선순위 비대칭 레이아웃, /best 라우팅"
```

---

### Task 13: ResumeSection

**Files:**
- Create: `src/components/home/resume-section.tsx`

**Interfaces:**
- Consumes: `readResume` `clearResume`(Task 8), `track`(Task 7)
- Produces:
  ```tsx
  type ResumeSectionProps = { validSlugs: string[]; shoeMeta: Record<string, { name: string; image?: string }> };
  export function ResumeSection(props: ResumeSectionProps): JSX.Element | null;
  ```
  **기록이 하나도 없으면 `null`을 반환해 섹션 자체를 렌더하지 않는다.**

- [ ] **Step 1: 클라이언트 전용 구현**

SSG라 서버에서는 기록을 알 수 없다. 마운트 후 읽고, 그 전에는 아무것도 렌더하지 않는다.
레이아웃 점프를 막기 위해 **섹션이 나타날 때 위 콘텐츠를 밀지 않는 위치**(히어로 바로 아래)에 둔다.

```tsx
'use client';
const [data, setData] = useState<ResumeData | null>(null);
useEffect(() => { setData(readResume(new Set(validSlugs))); }, [validSlugs]);
if (!data || (!data.shoe && !data.compare && !data.recommend)) return null;
```

- [ ] **Step 2: 기록 지우기 + 이벤트**

`기록 지우기` 버튼은 `clearResume()` 후 `setData(null)`, 그리고 `track('home_resume_clear')`.
각 항목 클릭 시 `track('home_resume_click', { item_name })`.

- [ ] **Step 3: 빌드 + 동작 확인**

```bash
set -o pipefail && npm run build && npx serve out
```
브라우저에서 ① 기록 없는 상태(섹션 미표시) ② 상세 한 번 방문 후 홈(섹션 표시)
③ 기록 지우기(섹션 사라짐)를 확인한다.

- [ ] **Step 4: 커밋**

```bash
git add src/components/home/resume-section.tsx
git commit -m "feat(home): 재방문 이어보기 — 기록 없으면 미렌더, 유효 slug만 노출"
```

---

### Task 14: RecommendationProcess + TrustMetrics

**Files:**
- Create: `src/components/home/recommendation-process.tsx`
- Create: `src/components/home/trust-metrics.tsx`

**Interfaces:**
- Consumes: `getHomeStats()`(Task 10), `track`(Task 7)
- Produces:
  ```tsx
  export function RecommendationProcess(props: { questionCount: number; minutes: number }): JSX.Element;
  export function TrustMetrics(props: { shoeCount: number; lastUpdated: string | null }): JSX.Element;
  ```

- [ ] **Step 1: RecommendationProcess 구현**

제목은 `약 1분, 9문항이면 충분합니다.`에서 숫자를 props로 받아 조립한다(하드코딩 금지).
3단계 + 결과 3역할(가장 잘 맞는 / 더 편안한 / 더 경제적인) + 항목별 적합도 예시.
적합도는 **색상만으로 구분하지 않고** 막대 + 텍스트 등급을 함께 쓴다.

- [ ] **Step 2: TrustMetrics 구현**

지표 3개(신발 수 · 갱신일 · 공개) + 신뢰 문구 + 데이터 상태 배지 6종.
`평가 기준과 출처` 펼치기에 `track('home_trust_methodology_open')`을 건다.

금지어가 들어가지 않았는지 확인한다.

```bash
grep -nE "직접 측정|자체 실측|자체 연구소|Lab Verified|의학적으로 검증" src/components/home/trust-metrics.tsx
```
기대: 출력 없음

- [ ] **Step 3: 빌드 확인 후 커밋**

```bash
set -o pipefail && npm run build
git add src/components/home/recommendation-process.tsx src/components/home/trust-metrics.tsx
git commit -m "feat(home): 추천 작동 방식 + 신뢰 지표 — 카운트 동적 산출"
```

---

### Task 15: ShoeIndexPreview (필터 + 점진 확장)

**Files:**
- Create: `src/components/home/shoe-index-preview.tsx`

**Interfaces:**
- Consumes: `balancedByCategory`(Task 10), `track`(Task 7), `GridShoe`(`@/lib/data/shoes`)
- Produces:
  ```tsx
  type ShoeIndexPreviewProps = { shoes: GridShoe[]; initialCount?: number };  // 기본 16
  export function ShoeIndexPreview(props: ShoeIndexPreviewProps): JSX.Element;
  ```

이 태스크가 홈에서 가장 복잡하다. **122개 링크 보존**과 **한 번에 안 펼침**을 동시에 만족해야 한다.

- [ ] **Step 1: 정적 렌더 구조 확정**

먼저 표시 순서를 정한다. **기본 노출 16개는 카테고리 균형으로 뽑고, 나머지는 그 뒤에 붙인다.**

```tsx
import { balancedByCategory } from '@/lib/home/index-sort';

/** 상위 16개는 균형 정렬, 나머지는 rating→가격 순으로 뒤에 잇는다 */
function orderForIndex(shoes: readonly GridShoe[]): GridShoe[] {
  const head = balancedByCategory(shoes);
  const headSet = new Set(head.map((s) => s.slug));
  const tail = shoes
    .filter((s) => !headSet.has(s.slug))
    .sort((a, b) => b.rating - a.rating || a.price - b.price);
  return [...head, ...tail];
}
```

서버에서 122행을 전부 마크업에 넣는다. 기본 노출분(16) 외에는 `<details>` 안에 둔다.
JS가 없으면 `<details>`로 전체 접근 가능하고, JS가 있으면 점진 확장 버튼이 이를 대체한다.

```tsx
<div className="idx">{visible.map(row)}</div>
{hidden.length > 0 && (
  <details className="more" ref={detailsRef}>
    <summary>{summaryLabel}</summary>
    <div className="idx">{hidden.map(row)}</div>
  </details>
)}
```

- [ ] **Step 2: 점진 확장 로직**

```tsx
'use client';
const STEP = 24;
const [shown, setShown] = useState(initialCount);

function expand() {
  const next = Math.min(shown + STEP, filtered.length);
  setShown(next);
  track('home_shoe_index_expand', {
    section_name: 'shoe_index',
    item_name: String(next),
  });
}

const remaining = filtered.length - shown;
const label = remaining > STEP
  ? `러닝화 ${STEP}개 더 보기`
  : `전체 러닝화 보기`;
```

- [ ] **Step 3: 필터 우선 규칙**

필터가 적용되면 기본 제한에 묶지 않는다.

```tsx
useEffect(() => {
  // 필터 결과가 기본 노출 수 이하면 전부 보여준다
  setShown(filtered.length <= initialCount ? filtered.length : initialCount);
}, [filtered.length, initialCount]);
```

필터는 **전체 122개를 대상으로** 동작한다(노출된 16개가 아니라).

- [ ] **Step 4: 결과 수 안내와 행 구조**

결과 수는 `aria-live="polite"`로 알린다. 행은 7칸 그리드:
썸네일 · 브랜드+모델 · 한 줄 결론 · 용도 · 무게 · 가격 · 데이터 상태.
**데이터 상태 배지에 `.lab` 클래스를 쓰지 않는다.**

행 클릭 시 `track('home_shoe_detail_click', { item_name: slug, destination_path: `/shoes/${slug}` })`.

- [ ] **Step 5: 링크 수 검증**

```bash
set -o pipefail && npm run build
grep -o 'href="/shoes/[^"]*"' out/index.html | sort -u | wc -l
```
기대: 122 (정적 HTML에 전체 링크가 남아 있어야 한다)

- [ ] **Step 6: 커밋**

```bash
git add src/components/home/shoe-index-preview.tsx
git commit -m "feat(home): 러닝화 인덱스 — 122링크 보존 + 16→24 점진 확장, 필터 우선"
```

---

### Task 16: EditorialSection + FinalCTA

**Files:**
- Create: `src/components/home/editorial-section.tsx`
- Create: `src/components/home/final-cta.tsx`

**Interfaces:**
- Consumes: `getPostsCardMeta(): BlogCardMeta[]`(`@/lib/data/blog`), `BlogCardMeta`(`@/types/blog`), `track`(Task 7)
- Produces:
  ```tsx
  import type { BlogCardMeta } from '@/types/blog';
  // BlogCardMeta = Pick<BlogPostMeta, 'id'|'slug'|'title'|'description'|'author'
  //                     |'category'|'publishedAt'|'readingTime'|'thumbnail'|'featured'>
  // 새 타입을 만들지 말고 기존 타입을 그대로 쓴다.
  export function EditorialSection(props: { lead: BlogCardMeta; items: BlogCardMeta[] }): JSX.Element;
  export function FinalCTA(): JSX.Element;
  ```

- [ ] **Step 1: EditorialSection 구현**

제목 `숫자가 말해주지 않는 것`. 대표 1개(큰 비주얼 + 헤드라인) + 목록 4개(비교 2 + 지식 2).
3열 동일 카드 반복을 피한다. 에디터 이름 `산초 에디터`는 **이 영역에서만** 노출한다.
클릭 시 `track('home_blog_click', { destination_path: `/blog/${slug}` })`.

- [ ] **Step 2: FinalCTA 구현**

페이지에서 **유일한 다크 밴드**다. 배경 `--dark`, 보조 톤 `--dark-soft`, 텍스트 `--light-on-dark`.
카피 `수많은 러닝화 중 / 내게 맞는 선택만 남겨보세요.` + 버튼 `9문항 맞춤 추천 시작` + 보조 링크 `전체 러닝화 보기`.
배경에 트랙 사선을 아주 옅게 깐다.

- [ ] **Step 3: 다크 면적 확인**

```js
// 브라우저 콘솔
const dark = document.querySelector('.final').getBoundingClientRect().height;
console.log('다크 비중', Math.round(dark / document.body.scrollHeight * 100) + '%');
```
기대: 22% 이하

- [ ] **Step 4: 커밋**

```bash
set -o pipefail && npm run build
git add src/components/home/editorial-section.tsx src/components/home/final-cta.tsx
git commit -m "feat(home): 에디토리얼 섹션 + 마지막 CTA 다크 밴드"
```

---

### Task 17: 홈 조립

**Files:**
- Modify: `src/components/home/home-content.tsx` (전면 재작성 — 조립만 담당)
- Modify: `src/app/(main)/page.tsx`

**Interfaces:**
- Consumes: Task 11~16의 모든 컴포넌트, Task 10의 데이터 레이어

- [ ] **Step 1: 서버 페이지에서 데이터 준비**

```tsx
// src/app/(main)/page.tsx
import { getGridShoes } from '@/lib/data/shoes';
import { getPostsCardMeta } from '@/lib/data/blog';
import { getMatrixBySlug, getMatrixShoes } from '@/lib/pseo/matrices';
import { getHomeStats } from '@/lib/home/stats';
import { PROBLEMS } from '@/lib/home/problems';
import { HomeContent } from '@/components/home/home-content';

export default function HomePage() {
  const shoes = getGridShoes();
  const stats = getHomeStats();
  const posts = getPostsCardMeta();

  // 고민별 결과 수는 매트릭스에서 산출한다(하드코딩 금지).
  // slug가 매트릭스에 없으면 0이 아니라 항목을 숨기는 편이 낫지만,
  // PROBLEMS의 6개는 전부 실존이 확인됐으므로 0이 나오면 데이터 회귀 신호다.
  const problemCounts = Object.fromEntries(
    PROBLEMS.map((p) => {
      const entry = getMatrixBySlug(p.slug);
      return [p.slug, entry ? getMatrixShoes(entry).length : 0];
    }),
  );

  return (
    <HomeContent
      shoes={shoes}
      stats={stats}
      posts={posts}
      problemCounts={problemCounts}
      validSlugs={shoes.map((s) => s.slug)}
    />
  );
}
```

`HomeContent`의 props 타입은 다음과 같다.

```tsx
type HomeContentProps = {
  shoes: GridShoe[];
  stats: ReturnType<typeof getHomeStats>;
  posts: BlogCardMeta[];
  problemCounts: Record<string, number>;   // ProblemExplorer로 전달
  validSlugs: string[];                    // ResumeSection으로 전달
};
```

- [ ] **Step 2: 섹션 순서대로 조립**

```
HomeHeader(기존) → KineticHero → ResumeSection → ProblemExplorer →
RecommendationProcess → TrustMetrics → ShoeIndexPreview →
AdSlot(기존 homeBottom) → EditorialSection → FinalCTA → Footer(기존)
```

`ResumeSection`은 기록이 없으면 `null`을 반환하므로 신규 방문자에겐 자동으로 빠진다.
`RecommendationProcess`는 재방문자(이어보기 기록 있음)에게 렌더하지 않는다.

- [ ] **Step 3: 광고 위치와 ID 확인**

```bash
grep -n "ADSENSE_SLOTS" src/components/home/home-content.tsx
```
기대: `ADSENSE_SLOTS.homeBottom` 1회, 인덱스와 에디토리얼 사이

- [ ] **Step 4: 전체 검증**

```bash
set -o pipefail
npm run validate && npm test && npm run build && npm run check:payload
```
기대: 전부 통과

- [ ] **Step 5: 커밋**

```bash
git add src/components/home/home-content.tsx src/app/\(main\)/page.tsx
git commit -m "feat(home): 새 홈 조립 — 11개 섹션, 재방문 분기"
```

---

# Phase D — 검증

### Task 18: QA A — 전역 팔레트

**Files:**
- Create: `.omc/design/qa-a-palette.md`

**QA A와 QA B의 결과를 섞지 않는다.** 이 태스크는 팔레트만 본다.

- [ ] **Step 1: raw 값 잔재 전수 확인**

```bash
grep -rn "blue-[0-9]" src/ --include=*.tsx --include=*.ts | grep -v node_modules
grep -rn "rgba(14, *165, *233" src/ | grep -v node_modules
grep -rn "#0ea5e9\|#0284c7\|#38bdf8" src/ | grep -v node_modules
```
기대: 출력 없음. 있으면 토큰으로 교체한다.

- [ ] **Step 2: 주요 페이지 육안 검수**

```bash
set -o pipefail && npm run build && npx serve out
```
상세 · 비교 · 베스트 · 마라톤 · 블로그 · 브랜드 · 젤 페이지를 열어 확인한다.
확인 항목: 본문 대비 · 버튼 대비 · 광고 주변 대비 · hover · focus · disabled 상태.

- [ ] **Step 3: 대비 측정**

본문 텍스트(`--ink-soft` on `--paper`)와 CTA(`#FFF` on `--signal`)의 명도 대비를 계산한다.
기대: 본문 4.5:1 이상, CTA 3:1 이상(큰 텍스트 기준). 미달이면 `--ink-soft`를 어둡게 조정한다.

- [ ] **Step 4: 체크리스트 작성 후 커밋**

```bash
git add .omc/design/qa-a-palette.md
git commit -m "qa(theme): QA A 전역 팔레트 체크리스트"
```

---

### Task 19: QA B — 새 홈 구조

**Files:**
- Create: `.omc/design/qa-b-home.md`

- [ ] **Step 1: 도달 기준 실측 (390px)**

Task 4 Step 2의 스크립트를 실제 빌드 결과에 대해 실행한다.
기대: CTA 초기 화면 안 · 광고 55~70% · 마지막 CTA 85~90% · 전체 8,000px 이하

- [ ] **Step 2: SEO 링크 수와 정적 렌더 확인**

```bash
grep -o 'href="/shoes/[^"]*"' out/index.html | sort -u | wc -l   # 기대 122
grep -c "<h1" out/index.html                                      # 기대 1
grep -o 'href="/best/[^"]*"' out/index.html | sort -u | wc -l     # 기대 6 이상
```

- [ ] **Step 3: JS 비활성 동작 확인**

브라우저에서 JavaScript를 끄고 홈을 연다.
기대: 카피·CTA 링크·인덱스 122행(`<details>` 펼침)·모든 내부 링크가 살아 있다.

- [ ] **Step 4: 모션·접근성 확인**

- OS 모션 감소 설정 ON → 자동 모션 없이 최종 화면
- 세션당 1회: 홈 → 다른 페이지 → 홈 복귀 시 재생되지 않음
- 키보드만으로 CTA·필터·확장 버튼·바텀시트 도달 및 ESC 닫힘
- 애니메이션 재생 중 CTA 클릭 가능

- [ ] **Step 5: GA4 중복 발화 확인**

브라우저 콘솔에서 `dataLayer`를 관찰하며 광고 스크롤 진입·인덱스 확장·이어보기 클릭을 수행한다.
기대: `home_ad_view`는 1회만, `home_shoe_index_expand`는 확장 횟수만큼.

- [ ] **Step 6: CLS 확인**

Chrome DevTools Performance 또는 Lighthouse로 홈 CLS를 측정한다.
기대: 0.1 미만. 광고 높이 예약(280px)과 이어보기 섹션의 늦은 등장이 주 위험 지점이다.

- [ ] **Step 7: 체크리스트 작성 후 커밋**

```bash
git add .omc/design/qa-b-home.md
git commit -m "qa(home): QA B 새 홈 구조 체크리스트"
```

---

## 완료 조건 (지시서 §14)

Task 19까지 마친 뒤 아래 18개를 전부 확인한다.

1. 첫 1초 안에 러닝화 사이트임을 알 수 있다
2. 맞춤 추천 CTA가 초기 화면에 보인다
3. 전문성 60%와 러닝 에너지 40%가 동시에 느껴진다
4. 특정 브랜드나 제품 광고처럼 보이지 않는다
5. 중립 SVG 실루엣을 사용한다
6. 고민별 탐색의 우선순위가 명확하다
7. 첫 신발 상세 링크가 빠르게 보인다
8. 122개 내부 링크를 보존한다
9. 100개 이상 행이 한 번에 펼쳐지지 않는다
10. 광고 1개의 위치와 ID가 유지된다
11. 홈 직접 수익보다 순회 성과를 추적한다
12. 모바일에서 CTA와 신발 실루엣이 동시에 인지된다
13. 자동 다크모드를 사용하지 않는다
14. `prefers-reduced-motion`을 지원한다
15. JavaScript 실패 시 핵심 카피와 링크가 남는다
16. GA4 이벤트가 중복 발화하지 않는다
17. 광고 로딩으로 CLS가 발생하지 않는다
18. 마라톤 페이지와 지도 기능은 변경하지 않는다

## 배포 후 가드레일

- 홈 이탈률 +2~3%p 이내
- 수익 페이지 이동률 -5% 이내
- 세션당 페이지뷰 유지
- 맞춤 추천 시작률 유지 또는 증가
- 모바일 고민별 탐색 도달률 유지 또는 증가
- 광고 조회 가능률 급감 없음
- **최종 지표: 홈 경유 세션당 전체 수익 유지 또는 증가**

홈 자체 AdSense 수익 감소만으로 실패로 판단하지 않는다.
