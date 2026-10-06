# 러닝 카드 S5-A — 측정 이벤트 보고

- worktree `.worktrees/running-card` · 브랜치 `wt/running-card`(로컬 전용, push·ship 안 함). 작성 2026-10-06.
- 시작점: S4 `011d491`. 근거: 스펙 `docs/superpowers/specs/2026-09-27-runner-mythology-scoring-v1.md` '핵심 측정 이벤트' 표(이벤트 7종).
- 문구(S4 보고 3절)는 운영자 결정 대기라 건드리지 않았다.

## 1. 못 한 것 · 붙일 곳이 부분뿐인 것 (먼저)

| 항목 | 상태 | 이유·대신 한 것 |
|---|---|---|
| GA4가 실제로 받는지 | **확인 불가** | 광고·분석 도메인을 막고 돌렸다(라이브 노출을 부풀리지 않으려고). 확인한 것은 `window.dataLayer`에 `gtag('event', …)`가 들어갔다는 것까지다. GA4 실시간·보고서에 뜨는지는 보지 않았다 |
| GA4 맞춤 측정기준 등록 | **운영자 할 일** | 매개변수 6개(`character_id`·`lead_axis`·`image_size`·`hide_numbers`·`share_method`·`step_number`)를 GA4 관리 → 맞춤 정의에 이벤트 범위로 등록해야 보고서에서 매개변수별로 볼 수 있다. 추정: GA4 일반 규칙. 이 속성의 현재 설정은 확인하지 않았다 |
| `runner_analysis_started`(스펙: 랜딩의 시작 CTA 클릭) | **붙일 곳 일부** | `/running-card`에는 랜딩이 없다. 직접 들어오면 01 입력부터 시작해 시작 버튼이 없다. 그래서 이 페이지의 유일한 시작 버튼인 공유받은 화면의 `내 메달 만들기`에만 붙였다(기한 지난 화면 포함). 직접 들어온 사람의 시작은 이 이벤트로 잡히지 않는다. 대신 GA 자동 `page_view`(/running-card)나 `runner_input_step_completed` step 1로 볼 수 있다. 화면에 없는 시작 버튼은 만들지 않았다 |
| `runner_input_step_completed`(스펙: 입력 1/2 완료) | **다르게 붙임** | 스펙은 입력 화면 2장 전제이고, 지금 입력은 7단계(01–07)다. 단계마다 `step_number` 1–7로 보낸다. '1/2'에 해당하는 묶음은 없다 |
| `runner_shared_link_opened`(스펙: 다른 세션에서) | **세션 구분 불가** | 링크에는 보낸 사람을 가를 정보가 없다(D11 — 인물·세 점수·기한뿐). 보낸 사람이 자기 링크를 열어도 잡힌다 |
| 휴대폰 공유 시트 경로(`share_method: 'share'`) | **확인 불가** | 헤드리스 Chrome엔 공유 시트가 없어 하네스에서 `navigator.share`를 지웠다. 복사 경로(`clipboard`)만 실브라우저로 봤다. `share` 경로는 같은 함수의 바로 위 분기다(코드로만 확인) |
| 저장 이벤트의 의미 | **'저장을 브라우저에 넘김'까지** | PNG를 만들어 다운로드(또는 새 탭)로 넘긴 순간 보낸다. 사진첩에 실제로 저장됐는지는 브라우저가 알려 주지 않는다(스펙도 게시 완료율을 약속하지 않는다) |
| gtag가 아직 없을 때 | **버려짐(기존과 같음)** | 기존 `track`처럼 `window.gtag`가 없으면 조용히 버린다. 페이지 로드 직후에 나가는 `runner_shared_link_opened`가 가장 위험하다. 실브라우저 2회에서는 잡혔다. 느린 망에서 놓칠 수 있다(추정, 재지 않음) |
| '1회'의 기준 | **페이지가 살아 있는 동안** | 단계 완료·결과 노출·링크 열림은 기존 `trackOnce`와 같은 기록(모듈 Set)으로 한 번만 보낸다. GA 세션과 다르다. 새로고침하면 다시 나간다 |

## 2. 바꾼 것

| 해시 | 내용 |
|---|---|
| `5bda0ff` | 헬퍼 — `analytics.ts`에 타입(`RunnerEvent`·`RunnerEventParams`)과 `track`·`trackOnce` 오버로드. 보내는 쪽 `src/lib/runner-analysis/track.ts`(`trackRunner`), 테스트 `runner-track.test.ts` |
| `a3941df` | 연결 — 흐름의 `onStep`, 결과 노출·저장·링크 공유·링크 열림·시작 |
| (이 문서) | S5-A 보고 |

- **기존 헬퍼를 쓴다.** `trackRunner`는 허용 매개변수만 골라 기존 `track`/`trackOnce`(gtag 래퍼)로 넘긴다. 새 GA 스크립트는 없고, `layout.tsx`의 GA·AdSense `<Script>`는 손대지 않았다(절대 규칙 5).
- **입력 원값은 보내지 않는다.**
  - 매개변수 타입에 거리·횟수·페이스·최장거리·목표 기록 칸이 없다.
  - `trackRunner`가 허용 목록(`character_id`·`lead_axis`·`image_size`·`hide_numbers`·`share_method`·`step_number`) 밖의 키를 런타임에서도 버린다.
  - 테스트로 고정했다: `totalDistanceKm`·`averagePaceSecPerKm`·`raceGoal`을 억지로 넣어도 나가지 않는다.
- **처음 구조를 바꾼 이유(측정):**
  - 처음엔 `trackRunner`를 `analytics.ts` 안에 두었다. 그 모듈은 구매 클릭 추적 때문에 루트 레이아웃 청크에 실린다. 그래서 다섯 페이지와 러닝 카드 초기 JS가 모두 gzip +141–143바이트(홈 +278) 늘었다.
  - 그래서 `analytics.ts`에는 타입과 오버로드만 남기고 코드를 러닝 카드 쪽 모듈로 옮겼다.
  - 그 커밋은 로컬 전용·검수 전이라 되돌려 다시 나눴다.
  - 같이 넣었던 `send` 함수도 레이아웃 청크를 +89바이트 늘려서 걷었다. `trackOnce`가 타입 단언으로 오버로드를 고른다(런타임 코드는 S4와 같음).
- `hide_numbers`는 문자열 `'true'`/`'false'`로 보낸다. 불리언이 GA4에서 어떻게 집계되는지 확인하지 않아 맞춤 측정기준(문자열)과 맞췄다.
- 흐름 모듈(`medal3d-flow.js`)은 분석을 모른다. `onStep(n)` 콜백만 부르고, 이벤트는 React(`running-card-medal.tsx`)가 보낸다.

## 3. 이벤트 표

| 이벤트(스펙 이름 그대로) | 발생 시점 | 매개변수 | 1회 기준 | 코드 |
|---|---|---|---|---|
| `runner_analysis_started` | 공유받은 화면(기한 안·기한 지남)의 `내 메달 만들기` 클릭. 형식 틀린 링크가 입력 흐름으로 자동 전환될 때는 안 나간다 | 없음 | 누를 때마다 | `running-card-shared.tsx` |
| `runner_input_step_completed` | 01–07 각 단계의 값을 받아 동전을 새긴 순간(`다음` 또는 단계 막대로 앞으로 넘어갈 때). 검증 실패·이상치 확인에서 멈추면 안 나간다 | `step_number`(1–7) | 단계마다 페이지에서 1회 | `medal3d-flow.js` `navigate()` → `onStep` → `running-card-medal.tsx` |
| `runner_result_viewed` | 명판 각인이 끝나 완료 제목이 인물로 바뀌는 순간 = 결과 카드가 열리는 순간(`onReveal`) | `character_id`, `lead_axis` | 같은 인물은 페이지에서 1회(다시 다듬어 다른 인물이 되면 또 나간다) | `running-card-medal.tsx` |
| `runner_cover_saved` | `표지만 저장`으로 PNG를 만들어 다운로드(또는 새 탭)로 넘긴 순간 | `character_id`, `image_size`(story/feed), `hide_numbers`('true'/'false') | 저장할 때마다 | `running-card-result.tsx` |
| `runner_carousel_saved` | `이미지 2장 저장`으로 두 장을 넘긴 순간(스펙 '인스타용 두 장 저장') | `character_id`, `image_size`, `hide_numbers` | 저장할 때마다 | `running-card-result.tsx` |
| `runner_share_started` | `링크 공유`를 눌러 공유 시트를 열거나 복사하기 직전(취소해도 '시작') | `character_id`, `share_method`(share/clipboard) | 누를 때마다 | `running-card-result.tsx` |
| `runner_shared_link_opened` | 열람 기한 안의 공유 링크로 들어와 공유받은 화면을 그린 순간. 기한 지남·형식 틀림은 안 나간다 | `character_id`(링크에 담긴 인물) | 페이지에서 1회 | `running-card-shared.tsx` |

- 스펙의 주 지표 `공유 시작 세션 수 / 결과 표지를 본 고유 세션 수` = `runner_share_started` 세션 ÷ `runner_result_viewed` 세션.
- 보조 지표: `runner_carousel_saved`, `runner_share_started`를 따로 본다.

## 4. 번들

측정 사양:

- 단위: 파일 1개, 원본 바이트 / gzip -9
- 대상: `out/`의 HTML `<script src>` 초기 청크. 기준은 S4 최종 빌드(`bf10600`, 같은 worktree 경로, S4 보고 7절 수치)
- 스크립트: `scratchpad/s4/initial.mjs`

| 페이지 | S4 원본 / gzip | S5-A 원본 / gzip | 러닝 카드 문자열 |
|---|---|---|---:|
| 홈 | 594,995 / 189,097 | 594,995 / 189,092 | 0 |
| 신발 상세 | 624,884 / 195,045 | 624,884 / 195,040 | 0 |
| 블로그 | 537,186 / 171,219 | 537,186 / 171,214 | 0 |
| 마라톤 | 548,191 / 174,692 | 548,191 / 174,687 | 0 |
| 토요일 | 562,153 / 178,500 | 562,153 / 178,495 | 0 |
| 러닝 카드(초기) | 538,623 / 169,534 | 538,623 / 169,527 | 0 |

- 원본 바이트는 여섯 페이지 모두 S4와 같다. gzip −5–7바이트는 청크 해시·식별자가 바뀐 몫으로 본다(추정: 해시 차이를 따로 분해하지는 않았다).
- 러닝 카드 비동기(S4 → S5-A):

  | 청크 | S4 | S5-A |
  |---|---|---|
  | 메달·결과 카드 | 125,708 / 45,031 | 126,272 / 45,258 |
  | 공통 | 18,976 / 6,371 | 20,262 / 6,991 |
  | 공유받은 화면 | 2,382 / 1,056 | 2,550 / 1,133 |

  - 합계 gzip +924바이트.
  - 공통 청크의 +620은 `analytics.ts` 모듈이 한 벌 더 실린 몫이다. 루트 레이아웃 청크에도 같은 모듈이 있다. 같은 모듈 id라 런타임 인스턴스는 하나다(1회 기록 공유). 러닝 카드에서만 받는 비용이라 두었다.

## 5. 검증

### 5-1. 명령 (최종 커밋 `a3941df` 트리)

| 명령 | 결과 |
|---|---|
| `npm test` | 32파일 · 429건 통과(S4 31 · 424). 새 파일 `runner-track.test.ts` 5건 |
| `npm run lint` | 오류 0 · 경고 4(기존 토요일 파일) |
| `npx tsc --noEmit -p tsconfig.json` | 오류 0 |
| `find .next out -name .DS_Store -delete; NEXT_TELEMETRY_DISABLED=1 npm run build` | 통과, postbuild `✅ 광고·GA 로딩 정상 (4개 페이지 유형)` |
| `npm run check:payload` | `✅ 페이로드 가드 통과` |
| `npm run check:ads` | `✅ 광고·GA 로딩 정상 (4개 페이지 유형)` |

### 5-2. 실브라우저 — 실제 입력 + `window.dataLayer` 읽기만

- 하네스: scratchpad `s5/events.mjs`(S4 `cdp.mjs`·`expect.mts` 재사용).
- 서빙: 내가 띄운 `127.0.0.1:3062`. 3016·3018은 쓰지 않았다.
- 광고·분석 도메인은 막았다. gtag.js는 못 받지만 `layout.tsx`의 `ga4-init` 인라인이 `gtag → dataLayer.push`를 정의하므로, 나간 이벤트는 dataLayer에 남는다.
- 상태 변경은 클릭·휠·키 입력으로만 했다. JS는 `dataLayer`·DOM 읽기와 클립보드 읽기에만 썼다.
- 환경 대체: 다운로드 폴더 지정, `navigator.share` 제거.
- 입력: 120km · 12회 · 5:30 · 최장 18km · 강한 2회 · 기록 · 화목토 → 다이달로스, 대표 축 지구력.

| 실행 | 결과 |
|---|---|
| Metal 390×844 | 19/19 |
| WebGL 없음 375×667 + 모션 줄이기 | 19/19 |

판정 항목:

- 첫 화면: 러닝 카드 이벤트 0. gtag 정의됨.
- 단계 완료가 1–7 순서대로 한 번씩. 06까지는 결과 노출 0.
- 결과 노출 1회 = `{character_id: 'daedalus', lead_axis: 'endurance'}`(엔진 기대값과 같음).
- `다시 다듬기` → 07 다음(같은 인물): 추가 이벤트 0.
- 공유 순서 2장(story·숨김) → 표지(feed·숨김 끔) → 링크:
  - `runner_carousel_saved {character_id, image_size: 'story', hide_numbers: 'true'}`
  - `runner_cover_saved {…, image_size: 'feed', hide_numbers: 'false'}`
  - `runner_share_started {…, share_method: 'clipboard'}`
- **모든 이벤트 매개변수가 허용 목록 안이고, 입력 원값(120·12·330·5:30·18)이 값으로 나오지 않는다.**
- 복사된 링크로 다시 열면 `runner_shared_link_opened {character_id: 'daedalus'}` 1회. `내 메달 만들기`를 누르면 `runner_analysis_started {}` 1회.
- 기한 지난 링크: 열림 0, `내 메달 만들기` → 시작 1.
- 형식 틀린 링크(자동 전환): 이벤트 0.
- 콘솔 오류·경고 0.

S4 회귀(S4 `scenario.mjs`, 같은 서버):

| 실행 | 결과 |
|---|---|
| Metal 390×844 · 입력 A · 다시 다듬기 | 27/27(첫 구조 빌드) |
| Metal 375×667 · 입력 B(R 49.4) · 피드 · 숫자 숨김 | 26/26(최종 빌드) |

## 6. 다음

1. 운영자: GA4 맞춤 측정기준 6개 등록(1절).
2. 실기기(S6): `share_method: 'share'` 경로, 느린 망에서 `runner_shared_link_opened`가 gtag 정의 전에 버려지는지.
3. `runner_analysis_started`를 직접 유입에도 붙이려면 시작 버튼이 있는 랜딩이 필요하다. 지금 화면에는 만들지 않았다.
4. 문구 결정이 오면 S5 안에서 이어서 반영한다(S4 보고 3절).
