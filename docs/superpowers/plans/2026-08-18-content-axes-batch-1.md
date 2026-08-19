# 콘텐츠 축 1차 묶음 구현 계획 (L2 + T0 + R2)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 세 축의 첫 타자를 한 묶음으로 배포해 4주 뒤 축 간 성과를 비교할 기준선을 만든다 — 기존 코스 9편 수리(L2), 트레일 러닝화 계급도 신규(T0), 회복런 근거 글 신규(R2).

**Architecture:** 코드 변경 0. 블로그 데이터(`src/lib/data/blog/posts/*.ts`)만 편집한다. L2는 기존 글의 메타·도입부를 고치고, T0·R2는 각 월 파일 배열 맨 앞에 새 객체를 추가한다. 검증은 `npm run validate`(참조 무결성) → `npm run build`(SSG 903페이지) 순서다.

**Tech Stack:** TypeScript 템플릿 리터럴 블로그 데이터 · Next.js 15 SSG · `npm run gsc:pages`(성과 측정)

## Global Constraints

- 스펙: `docs/superpowers/specs/2026-08-18-recovery-and-trail-entry-design.md` (2026-08-18 확정)
- **블로그 데이터는 Edit만 사용한다.** 파일이 크므로 Read 반복 금지 → CLAUDE.md "컨텍스트 절약 원칙"
- **내부링크는 실존 slug만.** 발행 전 grep 1회로 일괄 검증 → `feedback_blog_internal_links`
- **1인칭 경험·허구 기록·실재 대회 사칭 금지.** 신발 서술은 실측 데이터 해석으로만 → CLAUDE.md `reviews` 규칙
- **내구성(수명) 단일 숫자 노출 금지.** 범위·근거·등급으로 → CLAUDE.md 내구성 표기 규칙
- **em대시(—)는 기존 글 스타일상 허용**한다(이 리포의 기존 제목이 전부 —를 쓴다). 새 글도 기존 패턴을 따른다
- 저자는 `산초 에디터`, `publishedAt`은 작성일(YYYY-MM-DD), 신규 글은 해당 월 파일 배열 **맨 앞**에 추가
- 배포는 **묶음 단위 단일 push** — 3건이 모두 끝난 뒤 한 번에 → `feedback_batch_blog_deploy`

---

## File Structure

| 파일 | 책임 | 변경 |
|---|---|---|
| `src/lib/data/blog/posts/2026-05.ts` | 코스 8편(수원·울산·광주·제주·대구·대전·부산·인천) | 메타·도입부 수리 |
| `src/lib/data/blog/posts/2026-06.ts` | 코스 1편(춘천) | 메타·도입부 수리 |
| `src/lib/data/blog/posts/2026-08.ts` | 신규 2편(T0·R2) 추가 | 배열 맨 앞 prepend |
| `public/images/blog/` | 신규 2편 썸네일 | WebP 2개 추가 |

**왜 이 분할인가:** 코스 9편은 발행 월이 갈려 두 파일에 나뉘어 있다. 신규 글은 발행월(2026-08) 파일에 넣는다 — 월별 분할 규칙(CLAUDE.md).

---

## ⚠️ 착수 전 반드시 읽을 것 — 제목 변경의 SEO 리스크

L2는 **이미 순위가 있는 글의 제목을 바꾼다.** 구글이 재평가하는 동안 **2~4주간 순위가 흔들릴 수 있다.** 이는 예상된 비용이며, 감수하는 이유는 3-7절 실측이다 — `수원달리기`(120노출) + `수원 달리기`(54)에서 클릭이 0인데 제목에 그 단어가 없다.

**롤백 기준:** 4주 뒤 `npm run gsc:pages`에서 **수리한 9편의 합계 노출이 기준선(2,054)의 70% 미만**으로 떨어지면 제목을 되돌린다. 기준선은 Task 0에서 파일로 남긴다.

**리스크를 줄이는 원칙:** URL(slug)은 **절대 바꾸지 않는다.** 제목·description·본문만 고친다. slug를 바꾸면 리다이렉트 없이 순위가 초기화된다.

---

### Task 0: 기준선 기록

성과 판정의 비교 대상을 먼저 파일로 고정한다. 이걸 안 하면 4주 뒤 "올랐는지" 판단할 수 없다.

**Files:**
- Create: `docs/superpowers/plans/2026-08-18-batch-1-baseline.md`

**Interfaces:**
- Produces: 기준선 문서. Task 7(측정 예약)이 이 수치와 대조한다.

- [ ] **Step 1: 기준선 측정**

Run:
```bash
npm run gsc:pages -- --since=2026-05-25 unique-running-courses-7
```

- [ ] **Step 2: 출력을 기준선 문서로 저장**

`docs/superpowers/plans/2026-08-18-batch-1-baseline.md`를 만들고 아래 형식으로 기록한다. 수치는 Step 1의 실제 출력에서 옮긴다.

```markdown
# 1차 묶음 기준선 (2026-08-18 측정)

측정: `npm run gsc:pages -- --since=2026-05-25 unique-running-courses-7`
기간: 2026-05-25 ~ 2026-08-15 / 속성: https://allrunabout.com/

## L2 대상 9편 (수리 전)

| slug | 노출 | 클릭 | CTR | 순위 |
|---|---|---|---|---|
| suwon-unique-running-courses-7 | 770 | 31 | 4.0% | 8.2 |
| ulsan-unique-running-courses-7 | 359 | 16 | 4.5% | 7.5 |
| gwangju-unique-running-courses-7 | 349 | 15 | 4.3% | 8.1 |
| jeju-unique-running-courses-7 | 242 | 13 | 5.4% | 8.3 |
| daegu-unique-running-courses-7 | 154 | 9 | 5.8% | 9.4 |
| daejeon-unique-running-courses-7 | 138 | 9 | 6.5% | 7.9 |
| chuncheon-unique-running-courses-7 | 17 | 0 | 0.0% | 8.2 |
| busan-unique-running-courses-7 | 13 | 1 | 7.7% | 8.0 |
| incheon-unique-running-courses-7 | 12 | 0 | 0.0% | 7.8 |
| **합계** | **2,054** | **94** | — | — |

## 핵심 검색어 기준선

| 검색어 | 노출 | 클릭 | 순위 |
|---|---|---|---|
| 수원달리기 | 120 | 0 | 8.6 |
| 수원 달리기 | 54 | 0 | 8.5 |
| 수원 러닝코스 | 45 | 4 | 8.8 |
| 울산 러닝코스 | 23 | 0 | 7.7 |

## 판정 기준 (4주 후 = 2026-09-15경)

- **성공**: 합계 클릭 94 → 증가, 또는 평균 순위 8.2 → 7 이하
- **중립**: 노출·클릭 유지, 순위 변동 ±0.5 이내 → 4주 더 관찰
- **롤백**: 합계 노출 2,054의 70%(1,438) 미만 → 제목 원복

## 신규 2편 (T0·R2) — 기준선 없음

노출 0에서 시작. 4주 뒤 **노출 발생 여부**가 1차 기준.
```

- [ ] **Step 3: 커밋**

```bash
git add docs/superpowers/plans/2026-08-18-batch-1-baseline.md
git commit -m "docs(plan): 1차 묶음 기준선 기록 — 수리 전 GSC 실측"
```

---

### Task 1: L2 — 코스 13편 제목·요약 수리

가장 중요한 변경이다. `달리기`를 제목 앞쪽에 넣고 `러닝 코스`를 병기한다.

**대상은 13편 전부다.** 성과 측정 대상은 노출이 있는 9편이지만, **제목 변경은 노출 0인 4편(서울·전주·경주·강릉)에도 적용한다** — 그 4편은 잃을 순위가 없어 리스크가 0이고, 앵커 텍스트를 13개 도시 전부 갱신하므로(Task 2) 제목만 옛 문구로 남으면 표기가 갈린다.

**Files:**
- Modify: `src/lib/data/blog/posts/2026-05.ts` (12편)
- Modify: `src/lib/data/blog/posts/2026-06.ts` (1편 — 춘천)

**Interfaces:**
- Consumes: Task 0의 기준선 문서(롤백 판단용)
- Produces: 수리된 제목 9개. Task 2가 같은 글의 본문을 이어서 고친다.

**제목 규칙:** `{도시} 달리기 좋은 곳 7선 | {도시} 러닝 코스 — {랜드마크A}부터 {랜드마크B}까지`

앞 30자에 최대 검색어(`{도시} 달리기`)를 배치하고, 정확 매칭용 `{도시} 러닝 코스`를 병기한다. **"이색"은 제거한다** — 이 단어가 정면 검색어와의 매칭을 막고 있었다.

- [ ] **Step 1: 수원 제목·description 교체**

`src/lib/data/blog/posts/2026-05.ts`에서 아래 문자열을 찾아 교체한다.

찾기:
```
    title: '수원 이색 러닝 코스 7선 | 수원화성 성곽길부터 광교호수까지 — 세계유산·호수·산 결합한 수원만의 러닝',
```
교체:
```
    title: '수원 달리기 좋은 곳 7선 | 수원 러닝 코스 — 수원화성 성곽길부터 광교호수까지',
```

같은 글의 `description` 첫 문장이 "수원 이색 러닝 코스"로 시작하면 `수원에서 달리기 좋은 코스`로 바꾼다. description에도 **"달리기"와 "러닝 코스"가 모두 들어가야 한다.**

- [ ] **Step 2: 나머지 8편 제목 교체**

동일 규칙으로 교체한다. 각 항목의 찾기 문자열은 현재 파일의 `title:` 줄 전체다.

| slug | 새 제목 |
|---|---|
| `ulsan` | `울산 달리기 좋은 곳 7선 \| 울산 러닝 코스 — 태화강 십리대숲부터 영남알프스 억새까지` |
| `gwangju` | `광주 달리기 좋은 곳 7선 \| 광주 러닝 코스 — 무등산 주상절리부터 푸른길 폐철도까지` |
| `jeju` | `제주 달리기 좋은 곳 7선 \| 제주도 러닝 코스 — 올레길 해안 절경부터 새별오름 억새까지` |
| `daegu` | `대구 달리기 좋은 곳 7선 \| 대구 러닝 코스 — 수성못 야경부터 팔공산 트레일까지` |
| `daejeon` | `대전 달리기 좋은 곳 7선 \| 대전 러닝 코스 — 계족산 황톳길 맨발런부터 대청호 둘레까지` |
| `busan` | `부산 달리기 좋은 곳 7선 \| 부산 러닝 코스 — 광안리 야경부터 이기대 절벽까지` |
| `incheon` | `인천 달리기 좋은 곳 7선 \| 인천 러닝 코스 — 송도 센트럴파크부터 영종도 일몰까지` |
| `chuncheon` (2026-06.ts) | `춘천 달리기 좋은 곳 7선 \| 춘천 러닝 코스 — 의암호 호반길부터 김유정 실레길까지` |

**노출 0인 4편도 같은 규칙으로 바꾼다** (기존 제목의 랜드마크 문구는 각 글에서 그대로 가져온다):

| slug | 새 제목 |
|---|---|
| `seoul` | `서울 달리기 좋은 곳 7선 \| 서울 러닝 코스 — 남산 차 없는 길부터 응봉산 야경까지` |
| `jeonju` | `전주 달리기 좋은 곳 7선 \| 전주 러닝 코스 — 한옥마을 새벽런부터 완산칠봉 꽃동산까지` |
| `gyeongju` | `경주 달리기 좋은 곳 7선 \| 경주 러닝 코스 — 첨성대 야경부터 남산 노천 박물관까지` |
| `gangneung` | `강릉 달리기 좋은 곳 7선 \| 강릉 러닝 코스 — 경포호수 벚꽃부터 정동진 일출까지` |

**서울만 추가 주의:** 기존 제목의 "한강 말고"를 **뺀다.** 그 문구가 최대 수요(한강)를 명시적으로 배제하고 있었다(3-6절). 다만 본문의 "한강 아닌 곳" 컨셉 자체는 유지한다 — L0(한강 거리별)이 나중에 그 자리를 맡는다.

**제주만 예외:** 자동완성이 `제주도 러닝 코스 추천`이므로 **"제주도"**를 병기한다(다른 도시는 도시명 그대로).

- [ ] **Step 3: tags에 "달리기" 계열 추가**

13편 각각의 `tags` 배열에 `'{도시} 달리기'`와 `'{도시} 러닝코스'`(띄어쓰기 없는 형태)를 추가한다. 기존 태그는 지우지 않는다.

예(수원):
```typescript
    tags: ['수원 달리기', '수원 러닝코스', '수원 러닝 코스', /* 기존 태그 유지 */],
```

띄어쓰기 없는 `러닝코스`를 넣는 이유는 실측에서 `수원 러닝코스`(45노출)가 `수원 러닝 코스`(14)보다 3배 크기 때문이다.

- [ ] **Step 4: 제목에 "달리기"가 9편 모두 들어갔는지 검증**

Run:
```bash
grep -c "    title: '.*달리기 좋은 곳 7선" src/lib/data/blog/posts/2026-05.ts src/lib/data/blog/posts/2026-06.ts
```
Expected: `2026-05.ts:12` / `2026-06.ts:1` (합계 **13**)

Run:
```bash
grep -c "    title: '.*이색 러닝 코스 7선" src/lib/data/blog/posts/2026-05.ts src/lib/data/blog/posts/2026-06.ts
```
Expected: 둘 다 `0` — **`title:` 줄에 한정한 검사다.**

⚠️ `grep -c "이색 러닝 코스 7선"`(위치 무관)으로 세면 **0이 될 수 없다.** 다른 글들이 이 시리즈를 앵커 텍스트로 82곳 링크하고 있고, 그건 Task 2에서 따로 처리한다. 이 단계에서 0을 기대하면 잘못된 실패 판정이 난다.

- [ ] **Step 5: slug가 안 바뀌었는지 검증 (필수)**

Run:
```bash
grep -c "unique-running-courses-7'" src/lib/data/blog/posts/2026-05.ts src/lib/data/blog/posts/2026-06.ts
```
Expected: 2026-05.ts는 12 이상, 2026-06.ts는 1 이상. **slug는 절대 바뀌면 안 된다.**

- [ ] **Step 6: 빌드 검증**

Run: `npm run build`
Expected: `✓ Compiled successfully` + 정적 페이지 생성 완료

- [ ] **Step 7: 커밋**

```bash
git add src/lib/data/blog/posts/2026-05.ts src/lib/data/blog/posts/2026-06.ts
git commit -m "fix(blog): 코스 9편 제목에 '달리기' 병기 — 실측 최대 검색어 반영

GSC 실측에서 '수원달리기'(120)+'수원 달리기'(54)가
'수원 러닝코스' 계열(64)의 2.7배인데 제목에 그 단어가 없었다.
'이색'을 빼고 '{도시} 달리기 좋은 곳'을 앞에 배치했다.
slug는 그대로 두어 기존 순위를 유지한다."
```

---

### Task 2: L2 — 코스 9편 도입부·내부링크 보강

제목만 바꾸면 본문·앵커와 어긋난다. 도입부에 검색어를 넣고, **이미 존재하는 앵커 텍스트 82곳**을 새 제목에 맞춘다.

**⚠️ 사전 조사로 정정된 전제**: 착수 전에는 이 시리즈가 "고립 상태"라고 봤으나 실제로는 **82개 앵커로 이미 촘촘히 연결돼 있다.** 따라서 이 태스크는 링크를 *추가*하는 것이 아니라 **기존 앵커 텍스트를 갱신**하는 것이다. 앵커 텍스트는 구글이 읽는 실제 신호이므로, 82곳이 "달리기"를 가리키면 내부 신호가 강화된다.

**Files:**
- Modify: `src/lib/data/blog/posts/2026-05.ts` (8편 본문)
- Modify: `src/lib/data/blog/posts/2026-06.ts` (1편 본문)

**Interfaces:**
- Consumes: Task 1이 확정한 제목 문구
- Produces: 도시 간 상호 링크. Task 6의 링크 검증 대상.

- [ ] **Step 1: 각 글 도입부 첫 문단에 검색어 반영**

각 글 `content`의 첫 `<p>` 또는 TL;DR 첫 항목에 **"{도시}에서 달리기 좋은 곳"** 표현이 없으면 자연스럽게 넣는다. 억지로 반복하지 말고 **한 번만** 쓴다.

**9편 모두에 적용한다** — 수원·울산·광주·제주·대구·대전·춘천·부산·인천. 도시명과 랜드마크만 각 글의 기존 본문에서 가져와 바꾸고, 문장 구조는 아래와 동일하게 간다. 제주는 `제주도`도 한 번 등장시킨다(자동완성이 `제주도 러닝 코스 추천`).

예(수원):
```html
<p><strong>수원에서 달리기 좋은 곳</strong>을 찾는다면 선택지는 생각보다 넓습니다. 세계유산 성곽길부터 호수 둘레길까지, 수원 러닝 코스 7곳을 거리·노면·야간 러닝 가능 여부로 정리했습니다.</p>
```

- [ ] **Step 2: 앵커 텍스트 82곳 갱신**

현재 앵커는 두 형태다:
```html
<a href="/blog/busan-unique-running-courses-7">부산 이색 러닝 코스 7선</a>
<a href="/blog/daegu-unique-running-courses-7">대구</a>
```

**긴 형태(`{도시} 이색 러닝 코스 7선`)만 `{도시} 달리기 좋은 곳 7선`으로 바꾼다.** 도시명만 쓴 짧은 앵커는 문장 안에 박혀 있어 건드리면 문장이 깨지므로 **그대로 둔다**.

sed 일괄 치환:
```bash
for city in 서울 부산 인천 대구 대전 광주 울산 수원 전주 경주 강릉 제주 춘천; do
  sed -i '' "s/>${city} 이색 러닝 코스 7선</>${city} 달리기 좋은 곳 7선</g" \
    src/lib/data/blog/posts/*.ts
done
```

**13개 도시 전부를 치환 대상에 넣는다.** 수리 대상 9편이 아닌 4편(서울·전주·경주·강릉)도 **앵커 텍스트는 함께 바꾼다** — 그 4편의 제목은 Task 1에서 안 바꿨지만, 앵커만 옛 문구로 남으면 표기가 갈려 오히려 혼란스럽다.

✅ **해결됨**: Task 1이 13편 전부의 제목을 바꾸므로 앵커와 제목이 일치한다. 별도 판단 불필요.

- [ ] **Step 3: `updatedAt` 갱신**

13편 각각에 `updatedAt: '2026-08-19'`을 추가한다(이미 있으면 갱신). `publishedAt`은 **건드리지 않는다**.

- [ ] **Step 4: 내부링크 slug 일괄 검증**

Run:
```bash
grep -o 'href="/blog/[a-z0-9-]*"' src/lib/data/blog/posts/2026-05.ts src/lib/data/blog/posts/2026-06.ts \
  | sed 's/.*href="\/blog\///;s/"//' | sort -u > /tmp/linked.txt
grep -h "    slug: '" src/lib/data/blog/posts/*.ts | sed "s/.*slug: '//;s/',$//" | sort -u > /tmp/exists.txt
comm -23 /tmp/linked.txt /tmp/exists.txt
```
Expected: **출력 없음**. 출력이 있으면 그 slug는 존재하지 않는 글이다.

- [ ] **Step 5: 검증 체인**

Run: `npm run validate && npm run build`
Expected: validate 에러 0 · 빌드 통과

- [ ] **Step 6: 커밋**

```bash
git add src/lib/data/blog/posts/2026-05.ts src/lib/data/blog/posts/2026-06.ts
git commit -m "fix(blog): 코스 9편 도입부 검색어 반영 + 도시 간 상호 링크

시리즈 9편이 서로 연결돼 있지 않아 고립 상태였다.
노출 0인 4편(서울·전주·경주·강릉)은 링크 대상에서 제외했다."
```

---

### Task 3: T0 — 트레일 러닝화 계급도 작성

브랜드 계급도 10편의 검증된 포맷을 트레일에 적용한다. **신발 추가 없이 현 15종으로 쓴다**(스펙 5절에서 사다리 4단이 다 차는 것을 확인함).

**Files:**
- Modify: `src/lib/data/blog/posts/2026-08.ts` (배열 맨 앞에 추가)

**Interfaces:**
- Consumes: `src/lib/data/shoes/*/` 트레일 15종 데이터
- Produces: slug `trail-running-shoes-lineup-tier-guide-2026`. Task 4·5가 참조한다.

**확정 메타:**
```typescript
    id: 'trail-running-shoes-lineup-tier-guide-2026',
    slug: 'trail-running-shoes-lineup-tier-guide-2026',
    title: '트레일 러닝화 계급도 2026 — 근교 산책로부터 카본 레이싱까지 한 장 정리 | 브랜드 7곳 15종 가격·무게 비교',
    author: '산초 에디터',
    publishedAt: '2026-08-19',
    category: 'guide' as const,
    readingTime: 11,
    tags: ['트레일러닝화 계급도', '트레일화', '트레일러닝화 추천', '트레일러닝 입문', '트레일화 등산화 차이', '스피드고트', '살로몬 펄사', '히에로'],
```

**본문에 반드시 들어갈 사다리 (실제 DB 값):**

| 단 | 모델 | 가격 | 무게 |
|---|---|---|---|
| 근교·입문 | 젤 벤처 10 | 89,000원 | 322g |
| 근교·입문 | 살로몬 펄사 | 210,000원 | 290g |
| 올라운드 | 스피드고트 6 | 205,000원 | 278g |
| 올라운드 | 스피드고트 7 | 219,000원 | 281g |
| 올라운드 | 테렉스 아그라빅 4 | 209,000원 | 283g |
| 올라운드 | 메타후지 트레일 | 279,000원 | 258g |
| 쿠션·울트라 | 히에로 v9 | 189,000원 | 309g |
| 쿠션·울트라 | 울트라 글라이드 4 | 230,000원 | 295g |
| 쿠션·울트라 | ACG 제가마 트레일 | 219,000원 | 336g |
| 카본 레이싱 | 테크톤 X 3 | 339,000원 | 275g |
| 카본 레이싱 | 울트라플라이 | 299,000원 | 299g |
| 카본 레이싱 | S/LAB 펄사 4 | 340,000원 | 247g |
| 카본 레이싱 | 아그라빅 스피드 울트라 2 | 279,000원 | 265g |

- [ ] **Step 1: 신발 15종 상세 데이터 확인**

Run:
```bash
for f in $(grep -rl "category: '트레일'" src/lib/data/shoes/*/*.ts | sort); do
  grep -m1 "^  slug:" "$f"; grep -m1 "^  description:" "$f"; echo "---";
done
```

각 신발의 `description`을 읽고 계급도 표의 "한 줄 성격" 칸에 쓴다. **DB에 없는 수치를 지어내지 않는다.**

- [ ] **Step 2: 글 작성**

`src/lib/data/blog/posts/2026-08.ts` 배열 **맨 앞**에 객체를 추가한다. 본문 구조:

1. **3줄 요약** (`div.tldr`) — 사다리 4단 요약 + 가격 범위(8.9만~34만) + "입문은 무조건 저단부터"
2. **트레일화가 뭐가 다른가** — 로드화와의 차이(아웃솔 러그·락플레이트·토캡). `트레일화 뜻` 수요를 받는다
3. **등산화와는 뭐가 다른가** — `트레일화 등산화 차이`가 자동완성에 있다. 발목 지지·무게·굽힘 차이를 표로
4. **사다리 4단 표** — 위 15종 전체. 컬럼: 단 / 모델 / 가격 / 무게 / 이럴 때
5. **단별 해설 4개** (`h3`) — 각 단이 어떤 러너·어떤 산에 맞는지
6. **처음 사는 사람에게** — 근교 위주면 저단으로 충분하다는 결론
7. **출처 각주** — 가격은 한국 공식가 기준, 확인일 명시

**내부링크:** 15종 전부 `/shoes/{slug}`로 링크한다. 그리고 기존 트레일 비교글 3편(`speedgoat-6-vs-pulsar-vs-metafuji-trail-2026`, `tecton-x-3-vs-ultrafly-vs-s-lab-pulsar-carbon-trail-2026`, `salomon-pulsar-vs-ultra-glide-vs-s-lab-trail-2026`)과 입문 글(`trail-running-appeal-beginner-guide-2026`)로 연결한다.

- [ ] **Step 3: FAQ 3개 추가**

```typescript
    faqs: [
      {
        question: '트레일화와 등산화는 뭐가 다른가요?',
        answer: '가장 큰 차이는 무게와 굽힘입니다. 등산화는 발목을 잡아주고 밑창이 단단해 무거운 배낭을 메고 천천히 걷는 데 맞춰져 있습니다. 트레일 러닝화는 250~330g대로 훨씬 가볍고 앞발이 굽어 달릴 수 있게 설계됐습니다. 대신 발목 지지가 없어 무거운 짐을 메고 장시간 걷기에는 불리합니다. 북한산·관악산 같은 근교 산을 달릴 목적이면 트레일화, 종주 산행이면 등산화 쪽입니다.',
      },
      {
        question: '흙길만 달리는데 트레일화가 꼭 필요한가요?',
        answer: '평탄한 흙길이나 잘 정비된 둘레길이라면 로드화로도 충분합니다. 트레일화가 값을 하는 구간은 젖은 바위·낙엽·자갈처럼 미끄럽거나 발바닥을 찌르는 노면입니다. 러그(밑창 돌기)가 깊어 접지력이 좋고, 모델에 따라 락플레이트가 들어가 돌 충격을 막아줍니다. 근교 흙길 위주라면 굳이 서두를 필요가 없고, 산에 자주 갈 계획이 생겼을 때 사는 편이 낫습니다.',
      },
      {
        question: '처음이면 어느 단부터 사야 하나요?',
        answer: '근교·입문 단으로 충분합니다. 카본 레이싱 단(29만~34만원)은 울트라 대회나 기술적인 산악 코스를 상정한 신발이라, 주말에 북한산을 달리는 단계에서는 성능을 쓸 일이 없고 내구성도 레이싱에 맞춰져 있습니다. 올라운드 단은 산에 정기적으로 다니기 시작한 뒤에 넘어가도 늦지 않습니다.',
      },
    ],
```

- [ ] **Step 4: 신발 slug 검증**

Run:
```bash
grep -o 'href="/shoes/[a-z0-9-]*"' src/lib/data/blog/posts/2026-08.ts | sed 's/.*shoes\///;s/"//' | sort -u > /tmp/s1.txt
grep -rh "^  slug: '" src/lib/data/shoes/*/*.ts | sed "s/.*slug: '//;s/',//" | sort -u > /tmp/s2.txt
comm -23 /tmp/s1.txt /tmp/s2.txt
```
Expected: **출력 없음**

- [ ] **Step 5: 검증 체인**

Run: `npm run validate && npm run build`
Expected: validate 에러 0 · 빌드 통과 · 정적 페이지 수가 이전보다 1 증가

- [ ] **Step 6: 커밋**

```bash
git add src/lib/data/blog/posts/2026-08.ts
git commit -m "feat(blog): 트레일 러닝화 계급도 2026 — 브랜드 계급도 10편에 없던 칸

네이버 자동완성에서 '트레일러닝화 계급도'가 시드 2순위인데
우리는 브랜드 계급도를 10편 만들면서 트레일만 비워뒀다.
현 15종으로 사다리 4단(근교·올라운드·쿠션울트라·카본레이싱)이
전부 차는 것을 확인하고 신발 추가 없이 작성했다."
```

---

### Task 4: R2 — 회복런 근거 글 작성

**Files:**
- Modify: `src/lib/data/blog/posts/2026-08.ts` (배열 맨 앞에 추가)

**Interfaces:**
- Consumes: 기존 글 `running-warmup-cooldown-guide-2026`(현재 고립), `/gels/*`
- Produces: slug `recovery-run-vs-lsd-guide-2026`

**확정 메타:**
```typescript
    id: 'recovery-run-vs-lsd-guide-2026',
    slug: 'recovery-run-vs-lsd-guide-2026',
    title: '회복런 제대로 하는 법 — LSD와 뭐가 다른가 | 페이스·시간·효과, 근거 있는 것과 없는 것',
    author: '산초 에디터',
    publishedAt: '2026-08-19',
    category: 'tips' as const,
    readingTime: 9,
    tags: ['회복런', '회복 러닝', '회복런 LSD 차이', '회복 러닝 페이스', '회복 러닝 시간', '회복 러닝화', '러닝 후 회복'],
```

**각도 (중요):** "회복런은 좋다"가 아니라 **"LSD와 뭐가 다르고, 어디까지가 근거 있는 얘기인가"**다. 커뮤니티에서 `리커버리 러닝 이거 효과있는거 맞음?`(조회 521), `회복런 하는게 도움됨???`(344)이 반복되는 이유는 **답이 정리된 곳이 없어서**다.

- [ ] **Step 1: 글 작성**

본문 구조:

1. **3줄 요약** — 회복런과 LSD의 한 줄 차이 / 페이스·시간 기준 / "효과는 조건부"
2. **회복런 vs LSD 비교표** — 목적·페이스·시간·거리·심박·다음날 컨디션 6행. `회복런 LSD 차이`를 정면으로 받는다
3. **페이스는 어떻게 잡나** — "대화 가능한 속도"가 실제로 무슨 뜻인지. `회복 러닝 페이스` 수요
4. **얼마나 뛰나** — 20~40분·3~6km 구간과 그 근거. `회복 러닝 시간` 수요
5. **근거가 어디까지 있나** — 혈류 증가·주관적 피로 완화는 보고가 있지만, **회복을 가속한다는 강한 근거는 아니다**. 걷기·완전 휴식과의 비교에서 결론이 갈린다는 점을 그대로 쓴다
6. **회복런에 뭘 신나** — `회복 러닝화` 수요. 쿠션화로 `/shoes/*` 착지
7. **회복런보다 먼저 챙길 것** — 쿨다운·수분·수면. `running-warmup-cooldown-guide-2026`으로 링크(고립 자산 회수)

**금지:** "회복런을 하면 회복이 빨라진다"는 단정. 근거가 갈리므로 조건부로 쓴다 → `feedback-verify-before-publish`

- [ ] **Step 2: FAQ 3개 추가**

```typescript
    faqs: [
      {
        question: '회복런과 LSD는 뭐가 다른가요?',
        answer: '목적이 다릅니다. LSD(Long Slow Distance)는 유산소 능력을 키우려고 오래 달리는 훈련이라 60분 이상, 길게는 두 시간을 넘기기도 합니다. 회복런은 훈련이 아니라 회복을 목적으로 아주 가볍게 20~40분 정도만 달립니다. 둘 다 느리지만 LSD는 끝나고 나면 피로가 쌓이고, 회복런은 끝나고 나서 더 가벼워야 정상입니다. 회복런을 하고 다리가 무거워졌다면 페이스가 빨랐거나 애초에 쉬어야 할 몸 상태였다는 뜻입니다.',
      },
      {
        question: '회복런 페이스는 어떻게 잡나요?',
        answer: '옆 사람과 문장을 끊지 않고 대화할 수 있는 속도가 기준입니다. 숫자로 고정하기 어려운 이유는 그날 컨디션에 따라 같은 페이스도 부담이 달라지기 때문입니다. 시계 기록을 보며 페이스를 맞추려 하면 대개 빨라지므로, 회복런만큼은 화면을 덜 보는 편이 낫습니다. 평소 조깅 페이스보다 확실히 느리다고 느껴야 맞습니다.',
      },
      {
        question: '회복런이 정말 회복에 도움이 되나요?',
        answer: '완전히 정리된 문제는 아닙니다. 가벼운 활동이 혈류를 늘리고 주관적인 피로감·뻣뻣함을 줄인다는 보고는 있지만, 완전 휴식이나 걷기와 비교해 회복을 더 빠르게 한다는 강한 근거는 아직 부족합니다. 확실한 것은 몸 상태가 나쁠 때 억지로 달리면 회복이 아니라 피로가 쌓인다는 점입니다. 다리가 무겁거나 통증이 있다면 걷기나 휴식으로 대체하는 편이 안전합니다.',
      },
    ],
```

- [ ] **Step 3: 내부링크 검증**

Run:
```bash
grep -o 'href="/blog/[a-z0-9-]*"\|href="/shoes/[a-z0-9-]*"\|href="/gels/[a-z0-9-]*"' src/lib/data/blog/posts/2026-08.ts | sed 's/.*href="//;s/"//' | sort -u
```
각 경로가 실존하는지 확인한다. blog는 `src/lib/data/blog/posts/*.ts`의 slug, shoes는 `src/lib/data/shoes/*/*.ts`의 slug, gels는 `src/lib/data/gels/*.ts`의 slug와 대조한다.

- [ ] **Step 4: 검증 체인**

Run: `npm run validate && npm run build`
Expected: validate 에러 0 · 빌드 통과

- [ ] **Step 5: 커밋**

```bash
git add src/lib/data/blog/posts/2026-08.ts
git commit -m "feat(blog): 회복런 vs LSD 차이 — 근거 있는 것과 없는 것

DC 러닝갤에서 '리커버리 러닝 이거 효과있는거 맞음?'(521),
'회복런 하는게 도움됨???'(344)이 반복되는데 답이 정리된 곳이 없다.
'좋다'로 쓰지 않고 근거가 갈리는 지점을 그대로 적었다.
고립돼 있던 워밍업·쿨다운 글로 연결한다."
```

---

### Task 5: 썸네일 2개 제작

**Files:**
- Create: `public/images/blog/trail-running-shoes-lineup-tier-guide-2026.webp`
- Create: `public/images/blog/recovery-run-vs-lsd-guide-2026.webp`
- Modify: `src/lib/data/blog/posts/2026-08.ts` (`thumbnail` 필드 2개)

**Interfaces:**
- Consumes: Task 3·4의 slug
- Produces: 썸네일 경로 2개

- [ ] **Step 1: 썸네일 파이프라인 확인**

Run: `cat scripts/thumbnail/copy.ts | head -40`

이 파일이 킥커·제목·데이터 줄의 규칙을 담고 있다. **1200×630 고정, 데이터 줄에는 출처 의무, 킥커에 카테고리명 금지** → `blog-thumbnail-system` 메모리.

- [ ] **Step 2: 두 글의 썸네일 카피 정의**

`scripts/thumbnail/copy.ts`에 항목을 추가한다.

- T0: 킥커 `트레일 러닝화` / 제목 `계급도 2026` / 데이터 줄 `7개 브랜드 15종 · 8.9만~34만원 (한국 공식가, 2026-08 기준)`
- R2: 킥커 `회복런` / 제목 `LSD와 뭐가 다른가` / 데이터 줄 `20~40분 · 대화 가능한 페이스`

- [ ] **Step 3: 렌더**

Run: `npx tsx scripts/thumbnail/render.ts`
Expected: `public/images/blog/`에 WebP 2개 생성

- [ ] **Step 4: 글 메타에 thumbnail 연결**

두 글 객체에 각각 추가:
```typescript
    thumbnail: '/images/blog/trail-running-shoes-lineup-tier-guide-2026.webp',
```
```typescript
    thumbnail: '/images/blog/recovery-run-vs-lsd-guide-2026.webp',
```

- [ ] **Step 5: 파일 존재 검증**

Run:
```bash
ls -la public/images/blog/trail-running-shoes-lineup-tier-guide-2026.webp public/images/blog/recovery-run-vs-lsd-guide-2026.webp
```
Expected: 두 파일 모두 존재, 각 30~120KB

- [ ] **Step 6: 커밋**

```bash
git add public/images/blog/ scripts/thumbnail/copy.ts src/lib/data/blog/posts/2026-08.ts
git commit -m "feat(blog): 1차 묶음 썸네일 2개 — 트레일 계급도·회복런"
```

---

### Task 6: 묶음 전체 검증

배포 전 마지막 관문이다. 개별 태스크에서 통과했더라도 **합쳐진 상태**를 다시 본다.

**Files:** 없음 (검증만)

- [ ] **Step 1: 주제 중복 확인**

Run:
```bash
grep -h "    title: '" src/lib/data/blog/posts/*.ts | grep -i "계급도" | sed "s/    title: '//;s/',$//" | wc -l
grep -h "    title: '" src/lib/data/blog/posts/*.ts | grep -i "회복런\|회복 러닝" | sed "s/    title: '//;s/',$//"
```
Expected:
- 계급도 총 **11편**(기존 브랜드 10 + 트레일 1). 10이면 T0이 안 들어간 것, 12 이상이면 중복 발행이다
- 회복런 계열은 **1건**(`recovery-run-vs-lsd-guide-2026`)뿐. 2건 이상이면 기존 글과 주제가 겹친다 → `feedback_blog_topic_dedup`

- [ ] **Step 2: 전체 내부링크 검증**

Run:
```bash
grep -oh 'href="/blog/[a-z0-9-]*"' src/lib/data/blog/posts/*.ts | sed 's/.*blog\///;s/"//' | sort -u > /tmp/l.txt
grep -h "    slug: '" src/lib/data/blog/posts/*.ts | sed "s/.*slug: '//;s/',$//" | sort -u > /tmp/e.txt
comm -23 /tmp/l.txt /tmp/e.txt
```
Expected: **출력 없음**

- [ ] **Step 3: 검증 체인 + 테스트**

Run: `npm run validate && npm test && npm run build`
Expected: validate 에러 0 · 테스트 통과 · 빌드 통과

- [ ] **Step 4: 브랜치 확인 (배포 전 필수)**

Run: `git branch --show-current`

**main이 아니면 배포되지 않는다.** main이 아닐 경우 `blog-publish-branch-trap` 메모리의 절차를 따른다 — `git fetch origin main` 먼저, worktree로 옮기고, **커밋 제목이 아니라 `git show origin/main:<파일>`로 내용을 대조**한다.

- [ ] **Step 5: 배포**

main에서:
```bash
git push origin main
```

- [ ] **Step 6: 라이브 확인**

Run (배포 완료까지 대기):
```bash
until curl -s "https://allrunabout.com/blog/trail-running-shoes-lineup-tier-guide-2026" | grep -q "계급도"; do sleep 20; done; echo DEPLOYED
```

그다음 3개 URL의 HTTP 상태를 확인한다:
```bash
for u in /blog/trail-running-shoes-lineup-tier-guide-2026 /blog/recovery-run-vs-lsd-guide-2026 /blog/suwon-unique-running-courses-7; do
  printf "%s → %s\n" "$u" "$(curl -s -o /dev/null -w '%{http_code}' https://allrunabout.com$u)"
done
```
Expected: 셋 다 `200`

---

### Task 7: 측정 예약

4주 뒤 판정을 잊지 않게 기록한다.

**Files:**
- Modify: `docs/superpowers/plans/2026-08-18-batch-1-baseline.md`

- [ ] **Step 1: 측정 명령을 기준선 문서에 추가**

기준선 문서 하단에 덧붙인다:

```markdown
## 4주 후 측정 (2026-09-15 이후 실행)

```bash
# L2 — 수리 효과
npm run gsc:pages -- --since=2026-08-18 unique-running-courses-7

# T0 — 신규 노출 발생 여부
npm run gsc:pages -- --since=2026-08-18 trail-running-shoes-lineup-tier-guide-2026

# R2 — 신규 노출 발생 여부
npm run gsc:pages -- --since=2026-08-18 recovery-run-vs-lsd-guide-2026
```

**판정 후 행동**
- L2 성공 → 노출 0인 4편에도 같은 수리 적용 검토
- L2 롤백 조건 충족 → 제목 원복 (slug는 안 바꿨으므로 원복만 하면 됨)
- T0·R2 노출 0 → 각도 가설 재검토. 스펙 12절 "가장 유리한 조건에서 실패" 조항 발동
```

- [ ] **Step 2: 커밋**

```bash
git add docs/superpowers/plans/2026-08-18-batch-1-baseline.md
git commit -m "docs(plan): 4주 후 측정 명령·판정 후 행동 기록"
```

---

## 다음 묶음 예고 (이 계획의 범위 아님)

| 묶음 | 내용 |
|---|---|
| 2 | T1 첫 산행 장비 + T2 트레일화 필요한가 + R4 러닝 후 두통·어지러움·허리 |
| 3 | T3 체중·무릎 + R5 회복 테라피 + L1 러닝 스테이션 |
| 4 | L0 한강 거리별 (+ B 사이클 착수 판단) |
| D (병행) | 트레일 신발 DB — 머렐·미즈노·노다 |
