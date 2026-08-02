# 관련글 관련도 개편 실측 체크리스트

**대상**: 블로그 "관심 있을 만한 포스트" — 카테고리/태그 매칭 → IDF 관련도 순위 (계획 `docs/superpowers/plans/2026-08-02-blog-related-posts.md`, 구현 커밋 `1b5287a`·`342c7ee`)
**실측일**: 2026-08-02 · **기준 빌드**: `npm run build` → `npx serve out -l 4321`
**측정 환경**: Playwright MCP, 폭 1440 / 768 / 390 (Chrome DevTools MCP는 다른 세션이 프로필을 점유해 잠겨 있어 대체 — 기능적으로 동등한 별도 브라우저 프로세스)

> `next start`는 쓰지 않는다 — 이 프로젝트는 `output: export`라 동작하지 않는다.

## 1. 커버리지 (자동 회귀 가드 실측)

`src/lib/__tests__/blog-related.test.ts`의 "전체 코퍼스 커버리지" 스위트를 일시적으로 계측해 정확한 수치를 뽑았다(계측 코드는 실행 후 `git checkout`으로 원복, 커밋에 포함 안 됨).

| 지표 | 개편 전 | 개편 후 (계획 추정) | 개편 후 (실측) | 결과 |
|---|---|---|---|---|
| 추천에 노출되는 글 | 27편 / 12% | 216편 / 98% | **216편 / 221편 = 97.7%** | ✅ 80% 기준 통과 |
| 상위 10편의 추천 슬롯 점유 | 96% | 15% | **15.01%** (1326 슬롯 중) | ✅ 30% 이하 통과 |
| 추천이 0개인 글 | — | 0편 | **0편** | ✅ |

계획의 추정치(98%/15%)와 실측치(97.7%/15.01%)는 반올림 오차 수준으로 사실상 일치한다. `shownCount`(216)는 계획과 정확히 같은 숫자다. 전체 글 수는 221편(2026-08-02 기준 — MEMORY.md의 "~63편"은 발행 초기 스냅샷이라 stale, 이번 실측이 최신값).

테스트 스위트 자체(`npm test`)는 이 3개 임계값(80%/30%/0편)을 하한선으로 고정해 회귀를 잡는다 — 정확한 수치가 아니라 다시 편중되는 것을 방지하는 목적이므로 글이 늘면 이 표의 실측치는 자연히 흔들린다.

## 2. 성격이 다른 글 3편 — 추천 목록이 서로 다른가

| 글 | 성격 | 확인할 것 | 관련글 수 |
|---|---|---|---|
| `/blog/asics-gel-kayano-33-review` | 신발 리뷰 | 카야노·안정화 관련 글 | 6 |
| `/blog/2026-mudo-run-gyeongju` | 대회 뉴스 | 대회/이벤트 글 | 6 |
| `/blog/wide-feet-running-shoes-korea` | 발볼 가이드 | 발볼·토박스 관련 글 | 6 |

**카야노 리뷰** (전부 카야노/안정화 계열):
`asics-kayano-32-vs-33-comparison`, `adrenaline-gts-25-vs-kayano-33-stability-2026`, `stability-shoes-self-diagnosis-fit-guide-2026`, `stability-running-shoes-overpronation-flat-feet-2026`, `kayano-33-vs-glycerin-gts-22-vs-860-v15-2026`, `2026-asics-kayano-33-launch`

**경주 대회 뉴스** (5/6이 대회·이벤트 글):
`2026-mudo-run-coupang-play`, `2026-icebucket-run-seoul`, `2026-bogwangjung-suyuk-run`, `2026-hyundai-forest-run-september`, `2026-disney-run-incheon-virtual-run`, `mizuno-wave-rider-29-vs-30-comparison-2026`

**발볼 가이드** (전부 토박스/와이드 관련):
`new-balance-860-v14-vs-v15-comparison`, `running-shoe-data-not-marketing-guide-2026`, `mizuno-wave-rider-29-vs-30-comparison-2026`, `salomon-genesis-2-preview-2026`, `mizuno-neo-vista-3-review-2026`, `nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026`

**교차 비교**: 카야노 리뷰 목록은 나머지 두 목록과 완전히 겹치지 않는다(0/6). 경주 뉴스와 발볼 가이드 사이에는 `mizuno-wave-rider-29-vs-30-comparison-2026` 1건이 겹친다(웨이브 라이더 비교글이 토박스 폭 변화도 다루고 있어 두 주제에 모두 관련도가 붙은 것으로 보임 — 12슬롯 중 1건 중복으로 "서로 다르다"는 조건은 충족한다).
→ **개편 전 상태(27편만 노출, 12%)에서는 이 3편이 대부분 동일한 27편 풀에서 뽑혔을 것**이라 이 정도의 목록 다양성 자체가 회귀 방지 대상이다.

## 3. 폭별 레이아웃

`asics-gel-kayano-33-review` 페이지의 관련글 그리드(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)를 실측.

| 폭 | 기대 | `gridTemplateColumns` | 행/열 실측 | 가로 스크롤 | 결과 |
|---|---|---|---|---|---|
| 1440 | 3열 × 2줄 | `240px 240px 240px` | 행 2개, 열 3개 | `scrollW 1440 = clientW 1440` → false | ✅ |
| 768 | 2열 × 3줄 | `356px 356px` | 행 3개, 열 2개 | `scrollW 768 = clientW 768` → false | ✅ |
| 390 | 1열 × 6줄 | `358px` | 행 6개, 열 1개 | `scrollW 390 = clientW 390` → false | ✅ |

전 폭에서 `horizScroll: false`. 스크린샷은 `/private/tmp/claude-501/.../scratchpad/qa-screenshots/related-{1440,768,390}.png`에 저장(레포 밖, gitignore된 `.playwright-mcp/`를 거쳐 이동).

## 4. 정적 HTML 링크

```bash
grep -o 'href="/blog/[^"]*"' out/blog/asics-gel-kayano-33-review.html | sort -u | wc -l
# 8
```

고유 `/blog/` 링크 8개 = 관련글 6개(위 목록과 100% 일치 확인) + 본문 내부 링크 2개(`knee-pain-running-shoes`, `pronation-type-running-shoe-guide-2026`). 기대치(6개 이상) 충족.

## 5. 빌드 시간 (메모이즈 확인)

```
npm run build 2>&1 → wall time 47.45s (136.89s user, 20.88s system, 332% cpu)
```

Task 2가 측정한 48.13s(`.superpowers/sdd/2026-08-02-blog-related-posts/task-2-report.md`)와 0.7초 차이로 사실상 동일 — `getRelatedIndex()`가 `buildIndex(blogPosts)`를 프로세스당 1회만 실행하는 lazy-singleton 메모이즈가 빌드에서도 그대로 작동하고 있다는 정황이 이어서 확인된다. 221페이지(신발 122 + 블로그 221 + 기타)를 빌드하며 새로운 병목이 생기지 않았다.

## 완료 조건 대조 (계획 문서 9개 항목)

| # | 조건 | 실측 결과 |
|---|---|---|
| 1 | 노출 글 80% 이상 (개편 전 12%) | 97.7% ✅ |
| 2 | 상위 10편 30% 이하 (개편 전 96%) | 15.01% ✅ |
| 3 | 추천 0개인 글 0편 | 0편 ✅ |
| 4 | 관련글 6개/글 | 3편 전부 6개 ✅ |
| 5 | 성격 다른 3편 목록이 서로 다름 | 카야노↔나머지 0겹침, 경주↔발볼 1/6겹침 — 다름 ✅ |
| 6 | 1440/768/390 가로 스크롤 없음 + 자연 줄바꿈 | 3폭 전부 `horizScroll:false`, 3×2/2×3/1×6 확인 ✅ |
| 7 | `getRelatedPosts`/`getRelatedPostsMeta` 시그니처 불변 | Task 1/2 리뷰 범위(코드 미변경 확인) — 본 태스크는 코드를 만지지 않음, 별도 확인 안 함(범위 밖) |
| 8 | 빌드 시간 유의미하게 안 늘어남 | 47.45s vs Task 2 48.13s — 동일 수준 ✅ |
| 9 | tsc/test/lint/validate/build 통과 | Task 1/2 보고서에서 확인됨(본 태스크는 브라우저 실측만 수행, 재실행 안 함) |

## 이 작업이 하지 않는 것

검색 유입을 늘리지 않는다. 효과는 GA의 세션당 페이지 수(현재 1.95)와 28일 조회 0인 글 편수(현재 63편)로 배포 2~4주 후에 확인한다.
