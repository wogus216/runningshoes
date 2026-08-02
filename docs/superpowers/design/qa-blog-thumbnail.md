# 블로그 썸네일 정합·스타일 개편 실측 체크리스트

**대상**: 블로그 썸네일 개편 (스펙 `docs/superpowers/specs/2026-08-02-blog-thumbnail-design.md`,
계획 `docs/superpowers/plans/2026-08-02-blog-thumbnail.md`)
**실측일**: 2026-08-02 · **기준 빌드**: `npm run build` → `npx serve out -l 4321`
**측정 환경**: Chrome DevTools MCP, 폭 1440 / 768 / 390 / 360
**기준 커밋**: `bd8859b` (Task 4까지 반영된 HEAD)

> `next start`는 쓰지 않는다 — 이 프로젝트는 `output: export`라 동작하지 않는다.

## 0. 측정 방법

좌표 실측은 Chrome DevTools MCP(`evaluate_script`)로 실행했다. 사용한 스니펫은 스펙 §6·브리프
그대로다:

```js
// 잘림률 — naturalRatio == boxRatio 이면 잘림 없음
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

```js
// 가로 스크롤
({ scrollW: document.documentElement.scrollWidth,
   clientW: document.documentElement.clientWidth,
   horizScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth })
```

**운영상 주의 — 브라우저를 다른 에이전트와 공유한다**: 이 세션은 다른 팀 에이전트들과 같은
Chrome MCP 인스턴스를 쓴다. 1440 → 390 전환 도중 "현재 선택된 페이지"가 다른 에이전트의
탐색으로 `asics.co.kr`로 바뀌어 있던 것을 `evaluate_script`의 `location.href` 확인으로
잡아냈다. 이후 모든 측정은 `isolatedContext: "t5-impl-qa"`로 만든 전용 탭에서, **매 스크립트
실행 전 `location.href`로 페이지 신원을 확인**하는 방식으로 재측정했다. 아래 수치는 전부
신원 확인이 통과한 실행 결과다.

## 1. 좌표 검증 — 네 표면 잘림

| 표면 | 선택자 | 변경 전 | 변경 후 실측 | 결과 |
|---|---|---|---|---|
| `/blog` 카드 (6개 표본) | `article img` | **+7.1%** | **-0.5%** (natural 1.905 / box 1.915, 서브픽셀 반올림 — 스펙 허용오차 ±0.5 이내) | ✅ |
| `/blog/asics-gel-kayano-33-review` 히어로 | `img[alt]` 첫 번째 | **-22.5%** | **0.0%** (natural 1.905 / box 1.905, 768×403) | ✅ |
| `/` 홈 에디토리얼 lead | `.editorial-section_leadImg__wvWcw` | **+27.0%** | **0.0%** (natural 1.905 / box 1.905, 612×321) | ✅ |

세 표면 모두 스펙 기준(0.0%, ±0.5 허용)을 만족한다.

## 2. 배지 오버레이 제거 + 카테고리 텍스트 표기

| 항목 | 기대 | 실측 | 결과 |
|---|---|---|---|
| `article .absolute.left-4` 개수 (오버레이) | 0 | **0** | ✅ |
| 초기 24장 카드 첫 줄이 카테고리(뉴스/가이드/팁/리뷰)로 시작 | 24/24 | **24/24** | ✅ |
| "더 보기" 3회 클릭 후(96장) 동일 검사 | 96/96 | **96/96**, 오버레이 0 | ✅ |

카드 그리드는 이미지 카드 형태를 유지한 채 계속 로드된다 — "48개 이후 텍스트 아카이브로
전환된다"는 과거 기록(Task 3B 보고서 각주)은 사실이 아님을 96장까지 직접 확인해 재확인했다.

## 3. 폭별 실측 — 가로 스크롤

| 폭 | `/blog` | `/`(홈) | 상세(`asics-gel-kayano-33-review`) |
|---|---|---|---|
| 1440 | `horizScroll: false` (1440=1440) | `false` (1440=1440) | `false` (1440=1440) |
| 768 | `false` (768=768) | `false` (768=768) | `false` (768=768) |
| 390 | `false` (390=390) | `false` (390=390) | `false` (390=390) |
| 360 | `false` (360=360) | `false` (360=360) | `false` (360=360) |

12칸 전부 가로 스크롤 없음. `resize_page`가 최소폭 500px로 바닥을 깔아 390/360 측정은
`emulate({ viewport: "390x844x3,mobile,touch" })` 방식으로 전환해 정확한 CSS 뷰포트 폭을
확보했다(`window.innerWidth`로 재확인).

## 4. 360px 판독성 (스크린샷 육안 확인)

`/blog` 카드 그리드를 360px 폭에서 스크린샷했다(미즈노 웨이브 라이더 29 vs 30 비교 카드).

- 킥커("미즈노 데일리 세대 비교") · 제목("웨이브 라이더 29 vs 30") · VS 비교 박스(토박스
  76.7mm·내구 800km+·스택 37.5/29.2mm vs 슈퍼크리티컬 듀얼 NXT·스택 42.5/34.5mm·가격 2종) ·
  출처 줄("BITR 전 항목 A Tier · 그래도 29를 사야 하는 사람 — allrunabout.com")까지 전부
  360px 폭에서 잘리지 않고 읽힌다.
- 밀도를 3단(킥커/제목/데이터 한 줄)으로 줄인 목적대로, 정보가 뭉개지지 않고 스캔 가능한
  크기로 렌더된다.

## 5. 카드가 하나의 이미지 블록으로 읽히는가 (8b) + 데이터 줄 출처 (8c)

```js
img.parentElement.className
// → "relative aspect-[1200/630] overflow-hidden border-b border-border bg-gray-100"
```

- `aspect-[1200/630]`(=1.905) + `border-b border-border`가 6개 표본 전부에 적용돼 있다.
  종이톤 배경(#F7F4ED 계열)이 카드 배경과 가까워 "빈 공간처럼 읽힌다"던 Task 3 결함(진행
  로그 참고)이 경계선으로 해소됐는지는 스크린샷(§4)에서 카드 상단 오렌지 띠 + 경계선으로
  이미지 영역이 뚜렷이 구획되는 것을 육안으로 확인했다.
- 8c(데이터 줄 수치 출처)는 이 태스크의 측정 범위가 아니다 — Task 3B 보고서가 11편 전수를
  신발 DB/글 본문과 대조해 지어낸 값 0건을 이미 확인했고, Task 4 보고서도 21편 전수 대조를
  마쳤다. 이 문서는 그 결과를 재검증하지 않고 인용만 한다.

## 6. 비율 이탈(세로형) 전수 검사

Task 4 controller가 카드 시스템이 실제로 쓰는 `thumbnail:` 대상 파일 **214개 전부**를
전수 검사해 1.905 이탈 0건을 확인했다(진행 로그). 이번 태스크에서는 브라우저에서 로드된
범위를 표본 재확인했다:

| 검사 범위 | 로드된 이미지 수 | 1.905에서 ±0.02 벗어난 것 |
|---|---|---|
| `/blog` 초기 24장 | 24 | **0** |
| "더 보기" 3회 후 96장 | 96 | **0** |

세로형으로 오분류됐던 `2026-2027-dongma-schedule-photo.webp`(0.750)·
`2026-icebucket-run-seoul-photo.webp`(1.433)·`running-shoe-terminology-guide-diagram.webp`(1.600)는
Task 4에서 **`thumbnail:` 필드가 아닌 본문 삽입 이미지**로 확인돼 카드 시스템과 무관함이
밝혀졌다(진행 로그, Task 4 보고서 §4).

## 7. 홈 레이아웃 회귀

`/` 에디토리얼 섹션을 1440·390에서 스크린샷했다.

| 폭 | 관찰 |
|---|---|
| 1440 | lead 이미지(612×321, 1.905) 아래로 뉴스/날짜/제목/요약/에디터명이 정상 배치. 빈 공간·겹침 없음 |
| 390 | 동일 구조가 세로 스택으로 재배치. lead 이미지 아래 접수기간/모집정원/대회일 3칸 메타가 줄바꿈 없이 표시, 본문 요약까지 정상 |

lead 비율이 3/2(+27.0% 잘림)에서 1.905(0.0%)로 바뀌면서 이미지가 상대적으로 낮아졌지만,
레이아웃 붕괴나 빈 공간은 관찰되지 않았다.

## 8. 재생성 편수 (트래픽 상위 커버리지)

| 태스크 | 재생성 편수 | 비고 |
|---|---|---|
| Task 3 | 10편 | 카야노33·페가수스41v42 비교·리닝 적토마 3편·노바블라스트5v6·클리프톤11v10·NB860 v14v15·페가수스42·경주 무한도전런·알파플라이4 프로토타입 |
| Task 4 | 22편 | 19편(브리프 지정) + 비율 이탈 조사 중 발견된 3편 |
| **합계** | **32편** | 스펙 §4.2가 정한 상한(GA 상위 30편 ∪ 세로형 2건)과 일치 |

스펙 §3 기준 "상위 30편이 조회의 64.5%"를 커버한다. 이 문서는 이 64.5%라는 트래픽 비중
자체를 재측정하지 않고 스펙 수치를 인용한다(GA 데이터 재실측은 이번 범위 밖).

## 9. 검증 체인

```
npx tsc --noEmit      → 0건
npm test               → Test Files 10 passed / Tests 95 passed
npm run lint           → 0 errors (경고 1건은 기존 blog/[slug]/page.tsx <img> 경고, 이번 변경과 무관)
npm run validate       → 신발 122개 · 마라톤 100개, 에러 0개, 경고 9개(전부 기존 이슈 — image 필드 없음 3건, 마라톤 참가비/website 누락 6건)
npm run build           → 성공 (set -o pipefail, "Failed to compile" 없음, postbuild sitemap 정상)
```

## 10. 이번 작업이 하지 않는 것

- **검색 유입을 늘리지 않는다.** 구글 웹 검색 결과에 썸네일은 노출되지 않는다. 이미 들어온
  방문자의 그리드 경험과 OG 공유(카카오톡·트위터 미리보기) 품질을 고치는 작업이다
- **레거시 191장은 다크 톤으로 남는다.** 그리드에 두 스타일이 공존한다 — 스펙 §4.3에서 수용한
  절충이며, 상위 32편이 조회의 다수를 커버해 사용자가 실제로 보는 비중은 새 스타일이 크다
- 상위 30편에 안 든 Unsplash 항목 **3건**은 외부 의존이 남는다(1건은 Task 4에서 로컬로
  교체됨 — 진행 로그 "보너스" 항목)
- 탐색 축 재설계(서브프로젝트 2)·상세 페이지 개편(3)은 별도 스펙

## 우려사항 (이번 태스크 범위 밖 — 발견만 기록)

- **카야노 33 리뷰 글의 가격 불일치**: `src/lib/data/blog/posts/2026-06.ts:591` 비교표가
  아식스 젤 카야노 33을 **209,000원**으로 표기하지만, 신발 DB(`asics-gel-kayano-33.ts`)의
  `price`는 **199,000원**(공식몰 정가, 전작 32와 동일가로 명시)이다. 둘 다 사이트 최다 유입
  페이지라는 점에서 영향이 작지 않다. Task 3B에서 이미 발견돼 "사용자 보고 필요"로 남아
  있던 항목이며(진행 로그), 이번 태스크는 레이아웃 QA 범위라 수정하지 않았다. 어느 쪽이
  맞는 가격인지 공식몰 확인 후 정정이 필요하다
