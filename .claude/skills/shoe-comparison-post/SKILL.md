---
name: shoe-comparison-post
description: >-
  러닝화(신발) 2~3개를 비교하는 블로그 글을 데이터 검증부터 발행(빌드·커밋·푸시)까지 처리하는 runningshoes 프로젝트 전용 파이프라인.
  "신발 비교글 써줘", "OO vs OO 비교", "3파전", "N개 신발 비교", "데일리 대결", "OO랑 OO 중 뭐가 나아 글로 정리해줘"처럼 특정 러닝화 여러 개를
  비교·대결시키는 요청이면 반드시 이 스킬을 사용하라. 신발 데이터 실측 검증 → 자기잠식 확인 → 정형 구조 작성 → 내부링크 검증 → 통일 카드 썸네일 →
  회유(relatedPosts) 연결 → 검증 체인 → 커밋까지 한 번에 수행한다. 단일 신발 리뷰/후기나 대회 글에는 쓰지 않는다.
---

# 신발 비교글 파이프라인 (shoe-comparison-post)

러닝화 2~3개를 비교하는 블로그 글을 **발행까지** 처리한다. 비교글은 GA 실측상 이 사이트에서 검색 클릭효율 1위 포맷이라, 정확성과 회유(내부 이동 유도)를 함께 챙기는 게 목적이다.

이 스킬은 프로젝트 루트의 `CLAUDE.md`와 그 안의 블로그/신발 데이터 규칙을 전제로 한다. 충돌 시 항상 `CLAUDE.md`가 우선이다.

## 시작 전 파악

- 비교할 신발 slug 2~3개를 확정한다(사용자가 이름으로만 말하면 slug로 매핑).
- 세그먼트가 실제로 겹치는지 본다 — "같은 급/같은 값대, 다른 해법"이면 좋은 비교다. 용도가 전혀 다르면(예: 데일리 vs 카본레이서) 억지 비교보다 각도를 재설정한다.
- 오늘 날짜는 `date +%Y-%m-%d`로 확인해 `publishedAt`에 쓴다.

## 1. 신발 데이터 실측 검증 (직접 Read, 서브에이전트 금지)

각 신발을 `src/lib/data/shoes/{brand}.ts`에서 **직접 Read**해 실측값을 확인한다. 왜 직접인가 — 과거 서브에이전트/추측이 가격·와이드옵션·플레이트 유무를 틀린 이력이 있다(메모리 `feedback_db_data_verify`). 비교표의 숫자가 틀리면 글 전체 신뢰가 무너진다.

- 확인 필드: `price`, `specs`(weight/cushioning/responsiveness/stability/drop/durability), `biomechanics`(stackHeight/drop/carbonPlate/plateType/midsoleType), `koreanFootFit`(toBoxWidth/wideOptions/flatFootCompatibility), `injuryPrevention`, `editorComment`, `detailedSpecs`.
- 각 신발의 `similarShoes:` 라인 위치도 함께 파악한다(6단계 회유 삽입에 필요).

## 2. 중복·자기잠식 확인

발행 전 `grep`으로 확인한다:
- 같은 조합의 비교글이 이미 있는가 (`grep -r "슬러그조각" src/lib/data/blog/posts/`).
- 최근 발행글과 겹치는가 — 예: 어제 "A vs B"를 냈으면 오늘 "A' vs B"는 자기잠식이니 상대를 바꾼다(메모리 `feedback_blog_topic_dedup`). 겹치면 각도/상대를 조정하고, 애매하면 사용자에게 확인한다.

## 3. 비교글 작성

`src/lib/data/blog/posts/{발행월 YYYY-MM}.ts`의 배열 **맨 앞**에 새 객체로 삽입한다(Edit로 `export const posts_YYYY_MM: BlogPost[] = [\n  {\n    id: '<그 월의 기존 첫 글>'` 앞에 삽입. 해당 월 파일이 없으면 생성 후 `posts/index.ts`에 import+스프레드 등록).

메타:
- `id`/`slug`: `{a}-vs-{b}[-vs-{c}]-<세그먼트>-2026` (소문자·하이픈). 3파전이면 `-super-trainer-2026` 등 세그먼트 접미사.
- `category: 'review' as const`, `author: '산초 에디터'`, `publishedAt`: 오늘, `readingTime`: 8~9, `tags`: 신발명 + 카테고리 + 비교 키워드.
- `thumbnail`: `/images/blog/{slug}.webp`.

본문 구조(HTML 템플릿 리터럴, 기존 비교글과 동일한 클래스 사용):
1. `<div class="tldr">` — `<span class="tldr-label">3줄 요약</span>` + 핵심 3줄(세그먼트 차이 / 용도별 추천 / 한국 러너 주의점).
2. `<div class="callout info">` "한 줄 결론" — 용도별로 어느 걸 사라, + 관련 기존 글(시리즈/후기) 링크.
3. `<h2>세 켤레(두 켤레) 한눈에 보기</h2>` + 비교표 — 가격/무게/스택/드롭/미드솔/플레이트/쿠션·반발/발볼/내구·km당/대표용도. 차이나는 행은 `<strong>`로 강조. 표 아래 `<p><small>` 데이터 출처 주석.
4. 신발별 `<h2>{모델} — {한 줄 성격}</h2>` — 강점 문단 + 약점 문단 + `<p><strong>✅ 이런 분께</strong> — ...</p>`. (⚠️ 스타일 미정의 커스텀 클래스 금지 — 검증된 tldr/callout/faq/small만. `verdict` 같은 임의 클래스는 스타일이 안 먹는다.)
5. `<h2>내게 맞는 건? / 내 레이스엔 뭘</h2>` — `<ul>` 의사결정(상황 → 신발 링크). 발볼/무릎/거리/체중 등 한국 러너 관점 분기.
6. `<h2>자주 묻는 질문</h2>` + `<div class="faq">` 안에 `<div class="faq-item"><p class="faq-q">Q...</p><p class="faq-a">A...</p></div>` 3~4개.
7. `<p><small>출처: ... · 한국 공식가 기준 · 작성 YYYY년 M월 D일.</small></p>`

작성 원칙: 랩 수치 나열이 아니라 **한국 러너 관점**(발볼·무릎·평발·가격 대비 가치)으로 서술. 세 신발이면 각자 뚜렷한 강점 하나씩 부여(예: 가성비 / 스피드 / 그립).

## 4. 내부링크 실존 검증

본문의 모든 `/shoes/{slug}`·`/blog/{slug}` 링크를 `grep`으로 실존 확인한다. 오류가 있으면 고친 뒤 진행한다. (죽은 링크는 SEO·신뢰 모두 깎는다.)

## 5. 통일 카드 프레임 썸네일

**base64 인라인 방식**으로 만든다 — dev 서버 http 이미지 로드는 캡처 타이밍에 깨지므로, 각 신발 `side.webp`를 bash에서 `base64` 변수로 만들어 HTML에 직접 삽입한다(이러면 base64가 대화 컨텍스트에 안 올라와 토큰도 절약). 1200×630.

- 레이아웃: 흰 카드(`imgbox`, rounded, shadow) 안에 신발 + 아래 이름/브랜드/태그/가격. 1:1은 좌우 2카드 + 가운데 `VS`, 3파전은 3카드.
- 헤더: kicker 배지(세그먼트·가격대) + h1(제목의 vs 부분) + 부제.
- Pretendard CDN, allrunabout.com 워터마크.
- 캡처: Chrome MCP `new_page`(file://) → `resize_page` 1200×630 → `take_screenshot`(webp, quality 90) → **Read로 육안 검증**.
- ⚠️ 함정: 일부 신발은 `side.webp`가 흰배경이 아닌 **야외 착화샷**이다(예: `speedgoat6`, `pegasus42` 폴더 전체가 야외). 흰배경 제품샷이 폴더에 없으면 통일 카드 프레임으로 담아 처리하되, 대비가 크면 사용자에게 한 줄 언급하고 향후 브랜드 공식 흰배경으로 교체 여지를 남긴다.

자세한 base64 썸네일 HTML 골격은 `references/thumbnail.md` 참조.

## 6. 회유(relatedPosts) 연결 — 반드시 세트로

**이 글에 등장하는 각 신발**의 상세 데이터(`shoes/{brand}.ts`)의 `relatedPosts`에 방금 만든 비교글을 추가한다. 이걸 빼먹으면 신발 상세에 들어온 방문자가 정작 그 신발을 다루는 새 글로 갈 길이 없다(회유 누수 = RPM 손실). 비교글 발행과 항상 한 세트다.

- `Shoe.relatedPosts` 타입은 `{ slug: string; title: string }[]` (옵셔널). 있으면 배열 맨 앞에 추가, 없으면 `similarShoes:` 라인 바로 뒤에 신규로 만든다.
- `title`은 표시용 짧은 제목(링크 텍스트). 슬러그는 실존해야 한다.
- 삽입 시 `similarShoes` 라인이 유니크하지 않으면(같은 배열을 가진 다른 신발 존재) 다음 줄(purchaseLinks의 고유 URL)까지 포함해 old_string을 유니크하게 잡는다.

## 7. 검증 체인

- 신발 데이터(`shoes/*.ts`)를 건드렸으면 `npm run validate` (에러 0 확인).
- `npm run build` (Compiled successfully + static pages 생성 확인).
- 빌드 산출물(`.next/`)에서 새 글·회유 링크가 렌더됐는지 `grep`으로 샘플 확인.
- 빌드가 통과하지 못하면 완료로 보고하지 않는다.

## 8. 커밋·푸시

- 빌드가 재생성한 로컬 sitemap은 되돌린다: `git checkout public/sitemap-0.xml` (Vercel이 배포 시 정확히 재생성).
- `git add`: `src/lib/data/blog/posts/` + 회유 편집한 `shoes/*.ts` + 썸네일 webp.
- 커밋: `feat(blog): {요약}` 제목 + 본문(각도·자기잠식 회피·회유 세트 명시), 끝에 `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
- `git push` (main 직접 — 이 repo의 표준 워크플로우, Vercel 자동배포).

## 완료 보고

발행 slug, 커밋 해시, 각도(왜 이 비교가 빈 각도인지), 회유 연결한 신발, 검증 결과(build 페이지 수)를 요약한다. 며칠 뒤 `npm run ga`로 성과를 확인할 수 있음을 덧붙인다.
