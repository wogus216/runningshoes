# 러닝 카드 S2 — 3D 입력 흐름 사이트 이식 보고

- worktree `.worktrees/running-card` · 브랜치 `wt/running-card`(로컬 전용, push·ship 안 함). 작성 2026-10-06.
- 이식 원본: `study/running-input-v2` 3D-3 커밋 `ad6d632`(읽기만 했고 수정하지 않았다).
- 설계·인계: `docs/running-card-result-design-2026-10-02.md` §4·§6·§7, `docs/running-card-s1-report-2026-10-03.md` 6절.

## 1. 못 한 것 · 확인 불가 (먼저)

| 항목 | 상태 | 이유·대신 한 것 |
|---|---|---|
| 실기기(iOS Safari·안드로이드 Chrome) | **확인 불가** | 기기 접근이 없다. 헤드리스 Chrome(Metal·SwiftShader·WebGL 끔)에서만 확인했다. 모듈 워커·워커 안 FontFace·DPR 3·가상 키보드는 S6 몫이다 |
| 06 목표 기록 시트 위로 가상 키보드가 올라올 때 | **확인 불가** | 헤드리스에는 가상 키보드가 없다. 시트는 입력 패널 자리(하단)에 열리므로 폰에서 가려지는지 봐야 한다 |
| 운영 환경의 '다른 페이지로 갔다 돌아오기'(같은 문서 안 소프트 이동) | **일어나지 않는 경로라 대신 측정** | 사이트 어디에도 `/running-card` 링크가 없고 마스트헤드 링크는 일반 `<a href="/">`다. 그래서 이 페이지를 떠나고 돌아오는 길은 문서 이동뿐이다. 문서 이동 왕복(3회)과, 개발 모드 StrictMode·Fast Refresh 재마운트(4회)로 정리 경로를 쟀다(4절) |
| 개발 모드 재마운트 때 JS 힙 증가 | **남음(작음)** | 재마운트 1회당 JS 힙 +0.2–0.9MB, 배열 버퍼 +16–38KB. three 모듈 전역 LUT 텍스처의 dispose 리스너가 dispose된 렌더러 객체를 계속 잡는다(three 내부라 끊지 못했다). 픽셀 데이터는 풀었다(5절 커밋 `79fb73a`). 개발 서버의 HMR 모듈 보관분과 나눠 재지는 못했다 |
| SwiftShader 콘솔 경고 2건 | **남음(시안부터 있던 것)** | `GPU stall due to ReadPixels`(드라이버 성능 메시지). 시작 때 프레임 시간을 재는 `readPixels`에서 나온다. 같은 조건에서 원본 시안은 4건, 이식본은 2건이다(WebGL 확인용 임시 컨텍스트를 바로 돌려줘서 하나 줄었다). 콘솔 오류·예외는 0건 |
| 커밋 순서 | **지시와 다름** | 지시는 ①모듈 ②S1 ③라우트 ④글꼴이었다. 모듈이 글꼴 파일을 참조해서, 글꼴을 맨 앞에 두어야 커밋마다 빌드가 된다. 그래서 글꼴 → 모듈 → S1 → 라우트 → 정리 수정 순서로 커밋했다 |
| 새 디자인 두 곳 | **운영자 승인 전** | 동전 05 쉐브론 6자리와 06 목표 기록 시트는 시안에 없던 모습이다(5절) |
| `subset-font` 설치 | **lock만 갱신** | devDependency로 `package.json`·`package-lock.json`에만 넣었다(`--package-lock-only`). 공유 `node_modules`(main 체크아웃 링크)는 건드리지 않았다. 다른 에이전트의 트리를 바꾸지 않으려는 것이다. 스크립트를 다시 돌리려면 `npm ci` 뒤에 돌리거나, 이번처럼 따로 설치한 경로를 `NODE_PATH`로 준다 |
| Barlow 원본 | **이 기기에서만 재현** | 스크립트는 `ad6d632`(push 안 한 브랜치)에서 TTF를 읽는다. 다른 기기에서는 `BARLOW_SRC`로 Google Fonts의 BarlowCondensed-Bold.ttf를 넘겨야 한다 |
| 빌드 멈춤 | **환경 문제, 우회함** | Finder가 `.next`·`out`에 `.DS_Store`를 계속 만들어서 `next build`가 지우기 재시도에 걸려 7분 넘게 멈췄다. 한 번은 `ENOTEMPTY`로 실패했다. 빌드 직전에 `.DS_Store`를 지우고 돌렸다. pre-push 빌드에서도 같은 일이 날 수 있다 |

뺀 것(시안의 검수 전용):

- 검수 도구 패널 — 전체 보기·변위·모션 줄이기 토글, 처음부터, 성능 줄, 시안 링크
- 검수 주소 — `?nogl` `?worker=0` `?coarse` `?focus` `?budget` `?peek` `?light` `?disp` `?slow`
- `window.__medal3dFlow` 훅과 perf 계측·longtask 관찰

WebGL 없음 대체는 주소 대신 Chrome `--disable-webgl --disable-webgl2 --disable-3d-apis`로 확인했다.

## 2. 커밋

| 해시 | 내용 |
|---|---|
| `25197ca` | 메달 캔버스 글꼴 서브셋 + 생성 스크립트 + devDependency |
| `0578de2` | 모듈 이식(모습·동작은 시안 그대로) |
| `4c78d1d` | S1 인계 6항목 |
| `b565435` | `/running-card` 라우트 · noindex · 사이트맵 제외 · 고정 버튼 숨김 |
| `79fb73a` | 정리 수정 2건: three는 쓰는 이름만 불러온다, 재마운트 때 부조 데이터가 남지 않게 한다 |
| (이 문서) | S2 보고 |

## 3. 바꾼 것

### 3-1. 모듈 이식 (`src/components/running-card/medal/`)

- `medal3d-flow.js` — 시안 스크립트 전체를 `mountMedalFlow(container, { judge })` 하나로 감쌌다(`:29`). 들여쓰기는 시안 그대로 둬서 `ad6d632`과 줄 단위로 비교된다.
  - 마운트할 때마다 마크업(`medal3d-flow-markup.js` = 시안 `<body>`에서 검수 패널만 뺀 것)을 새로 쓴다.
  - `destroy()`(`:1468`)가 다음을 정리한다. 프레임 루프·타이머·워커 2개·문서 리스너 3개·matchMedia·ResizeObserver·눈금자를 멈춘다. 텍스처(픽셀까지)·지오메트리·재질·PMREM·그림자 맵·렌더러를 dispose 하고, `forceContextLoss()`로 컨텍스트를 돌려준다. 마지막으로 컨테이너를 비운다.
  - 비동기 시작 도중 정리되면, `await`마다 멈춘다.
- `running-card-medal.tsx`(`'use client'`)는 `useEffect`에서 붙이고 뗀다. `running-card-loader.tsx`가 `next/dynamic({ ssr: false })`로 불러온다. 토요일 페이지와 같은 방식이다. CSS는 로더가 실어서 메달 청크보다 먼저 온다.
- three는 레포 의존성(^0.186, 시안 vendor와 같은 r186)을 쓴다. vendor 복사본은 쓰지 않는다. `medal3d-three.js`가 메달이 쓰는 40개 이름만 다시 내보내고, 흐름은 그 모듈을 `import()` 한다(`:1192`).
- 워커는 `new Worker(new URL('./medal3d-flow-worker.js', import.meta.url), { type: 'module' })` 그대로 두었다. 빌드에서 별도 청크 `8784.*.js`로 나왔고, 모든 실행에서 워커 2개가 글꼴 확인까지 통과했다(`ready ok 2`).
- CSS는 선택자를 전부 `.rcm` 아래로 옮겼다. 사이트 전역 스타일이 바꾸는 값은 래퍼에서 시안 값으로 되돌렸다.
  - 줄 간격 1.5 → normal
  - `font-feature-settings` → normal
  - h1 색 → 상속
  - 포커스 링 → 없앰
  - 잉크 배경은 `html:has(.rcm)`로 이 페이지에만 칠한다
- 화면 글자는 사이트의 Pretendard Variable(같은 글꼴 파일의 dynamic subset)로 그린다. 캔버스 글자는 서브셋 `StudySans`·`StudyCondensed`로 그린다.
- 유지한 것: WebGL 없음 평면 대체, 모션 줄이기, 느린 렌더러 계층, 끌기 기울이기, 은·황동, 3D-3(동전 표시줄·전체 보기·04 재각인·작은 화면)
- 동작과 무관하게 바꾼 것:
  - WebGL 확인용 임시 컨텍스트를 바로 돌려준다(`:648`)
  - `no-gl` 클래스를 body 대신 `.journey`에 단다
  - 마스트헤드 링크 `index.html` → `/`
  - relief의 삼항 표현식 문 2곳을 if/else로 바꿨다(eslint)

### 3-2. S1 인계 6항목

| # | 내용 | 위치 |
|---|---|---|
| 1 | 강한 훈련 칩 `0·1·2·3·4·5·6회 이상`(value 6). 횟수보다 큰 칩은 비활성이다. 동전 05는 쉐브론 6자리, 동전 글자는 `강한 6회+`, 요약·공유는 `6회 이상` | relief `hardCoin`(`:285`)·`label`(`:49`), share `:85`, CSS 칩 줄 |
| 2 | 07 문구 `선택 항목이에요. 주로 달리는 요일을 고르면 회복 여유를 더 정확히 계산해요.` 고른 요일 수가 `round(횟수 ÷ 4)`보다 많으면 강조색 안내 한 줄을 띄운다: `28일 동안 8회면 주 2회꼴이에요. 가끔 달린 요일은 빼고 주로 달리는 요일만 골라 주세요.` 다음은 막지 않는다 | flow `:213` |
| 3 | 확인 블록 문구: `…는 예시값 그대로예요. 내 기록이 맞으면 이 숫자로 새기고 판정해요.` 버튼: `이 숫자가 내 기록이 맞아요` / `직접 입력할게요`. 확정하면 남은 예시 칸이 `confirmed`가 되고, 민짜로 앉아 있던 동전은 메달 전체가 보일 때 04 재각인 문법으로 새긴다 | flow `confirmSamples` `:426` |
| 4 | 06에서 대회·기록을 고르면 03의 총 시간 토글 자리에 `목표 기록 넣기`가 나온다. 누르면 입력 패널 위로 시트가 열린다: 목표 거리(5km·10km·하프·풀)와 시간:분. 엔진이 읽는 목표 페이스 2:30–12:00/km 밖이면 저장하지 않는다. 값은 `raceGoal { distanceKm, targetTimeMinutes }` | flow `:452–:505` |
| 5 | 07 다음 → `judge()` = `snapshotFromFlowInput()` → `analyzeRunner()`. `invalid`면 해당 단계로 보낸다(raceGoal이면 06 시트). `sample`이면 확인 블록을 띄운다. 판정은 흐름 상태 `analysis`에 보관하고, 완료 화면에는 임시 한 줄 `판정: {인물}`만 둔다(주석 `S3에서 여덟 번째 각인으로 교체`) | flow `toResult` `:329`, `:359`, `running-card-medal.tsx` `judgeFlowInput` |
| 6 | `fallbacksUsed`는 `analysis` 안에만 있다. 화면·공유로 나가는 경로가 없다 | — |

`입력 시연이라 분석은 아직 연결하지 않았어요` 문구는 없앴다. 완료 줄이 판정으로 바뀌었다.

### 3-3. 라우트·보호

- `src/app/running-card/page.tsx`
  - `metadata.robots = { index: false, follow: false }` → 빌드 HTML에 `<meta name="robots" content="noindex, nofollow"/>`가 들어간다.
  - canonical은 `/running-card`, viewport는 시안과 같은 `viewport-fit=cover`·theme-color 잉크다.
- `next-sitemap.config.js` exclude에 `/running-card`를 넣었다. `out/sitemap*.xml`에서 0건이다.
- 내부 링크는 추가하지 않았다.
  - `out/`의 다른 HTML에서 `running-card`를 검색하면 0건이다.
  - 대조군: 같은 검색으로 `/saturday` 링크 8건은 잡혔다.
- 비교함 플로팅 버튼·맨 위로 버튼을 `/running-card`에서 숨겼다. 토요일 페이지와 같은 분기다. 한 화면 흐름의 `다음` 버튼 위에 겹치기 때문이다.
- 레이아웃의 광고·GA 스크립트는 건드리지 않았다. 광고 슬롯도 넣지 않았다.

### 3-4. 글꼴 서브셋

| 파일 | 원본 | 서브셋 | 글자 |
|---|---:|---:|---|
| `fonts/medal-sans.woff2`(Pretendard Variable, wght 축·fvar·gvar 유지) | 2,057,688 | 60,968 | 226개(한글 120). ASCII와 relief·share·characters.ts(36명·12가문)의 비ASCII 전부 |
| `fonts/medal-condensed.woff2`(Barlow Condensed Bold) | 87,120 | 19,948 | 216개. ASCII·Latin-1·일반 구두점 |

- 생성은 `node scripts/build-medal-fonts.js`로 한다(harfbuzz hb-subset wasm = `subset-font` 2.9.0).
- 같은 입력이면 같은 바이트가 나온다. 세 번 돌려 sha1이 같았다. S1 수정 뒤에 다시 돌려도 바뀌지 않았다.
- 2MB 글꼴은 public에도, 새 커밋에도 넣지 않았다. 원본 Pretendard는 이미 레포에 있는 `src/app/fonts/PretendardVariable.woff2`다.

## 4. 번들 측정

측정 사양:

- 측정 단위: 파일 1개. 크기는 원본 바이트와 **gzip -9 바이트**(Node `zlib.gzipSync` level 9)다. woff2는 이미 압축돼 있어 원본만 적었다.
- 대상: `next build`(output: export)의 `out/`. HEAD `79fb73a`, 2026-10-06 10:0x 빌드.
- 기준선: S2 직전 커밋 `29f744c`. 같은 경로 깊이(`.worktrees/s2-baseline-tmp`, 측정 후 삭제)에서 빌드했다.
  - 경로 깊이가 다르면 웹팩 모듈 id가 바뀌어 gzip이 ±600바이트 흔들렸다. 그래서 scratchpad 빌드는 버렸다.
- '초기 로드 청크': 내보낸 HTML의 `<script src>` 목록이다.
- three·메달 판별 문자열: `WebGLRenderer`, `지난 28일 동안`, `OffscreenCanvas 없음`, `강한 6회+`, `mountMedalFlow`

### 4-1. 격리 판정 — 통과

| 페이지 | 초기 스크립트 | 초기 JS gzip(기준 → 최종) | three·메달 문자열 포함 청크 |
|---|---:|---|---:|
| 홈 `index.html` | 14 | 188,783 → 188,996 (+213) | 0 |
| 신발 상세 `shoes/adidas-adios-pro-4` | 14 | 194,682 → 194,902 (+220) | 0 |
| 블로그 `blog/2026-adidas-adios-pro-evo-3-korea-release` | 13 | 170,861 → 171,076 (+215) | 0 |
| 마라톤 `marathon/andong-marathon-2026` | 13 | 174,339 → 174,551 (+212) | 0 |
| 토요일 `saturday/first-30k` | 13 | 178,226 → 178,434 (+208) | 0 |
| 러닝 카드 `running-card` | 13 | — → 169,220 | 0 |

다른 페이지가 늘어난 +208–220바이트는 두 곳에서 왔다.

- 웹팩 런타임(전 페이지 공통): 3,884/2,060 → 4,284/2,257. 새 비동기 청크의 id→파일 매핑이 늘었다.
- 루트 레이아웃: 8,903/3,517 → 8,967/3,535. 고정 버튼 두 개의 `/running-card` 분기다.

공유 청크(`18-*`·`87c73c54-*`)는 기준선과 해시까지 같다.

### 4-2. `/running-card` 전용 청크 (비동기, `/running-card` 페이지 청크만 부른다)

| 파일 | 내용 | 원본 | gzip -9 |
|---|---|---:|---:|
| `chunks/app/running-card/page-c8c32ad0ef19810a.js` | 로더(초기 로드) | 3,586 | 1,336 |
| `chunks/81.143bd5fcc91b87a6.js` | 흐름·마크업·relief·body·share·눈금자·어댑터·엔진 | 109,781 | 39,387 |
| `chunks/299.82d91f6e696b2a10.js` | three 재수출(81만 부름) | 1,063 | 584 |
| `chunks/8784.d7c9d81cdad807d6.js` | 부조 워커(81의 `new URL`) | 19,247 | 7,421 |
| `css/de9d1caee86bcc4d.css` | 메달 CSS(다른 페이지 참조 0) | 22,408 | 5,089 |
| `media/medal-sans.a5355eec.woff2` · `medal-condensed.bc02ef82.woff2` | 캔버스 글꼴 | 60,968 · 19,948 | — |

### 4-3. three 청크 — 토요일 페이지와 같이 쓰는 비동기 청크

- three 청크 두 개(`63d2ba32.*`·`9d78c252.*`)는 **S2 전부터 `/saturday/first-30k`의 3D 무대가 비동기로 받던 청크**다. 메달도 같은 청크를 부른다. 두 페이지 모두 초기 로드 목록에는 없다.
- 첫 이식(`0578de2`)은 `import('three')`로 네임스페이스 전체를 받았다. 그래서 트리셰이킹이 안 됐고, 토요일 페이지가 three를 **+45,952바이트(gzip)** 더 받게 됐다(143,908 → 189,860).
- `79fb73a`에서 메달이 쓰는 이름만 재수출하게 고쳤다. 지금은 146,137바이트로, S2 전 대비 **+2,229바이트**다(메달이 더 쓰는 Extrude·Lathe·PMREM 등).
- three를 메달 전용으로 따로 떼면 두 페이지를 오가는 사람이 three를 두 번 받는다. 그래서 공유를 유지했다.

## 5. 검증 명령과 결과

| 명령 | 결과 |
|---|---|
| `npm test` | 27파일 · 343건 통과 |
| `npm run lint` | 오류 0 · 경고 4(기존 토요일 파일 `no-img-element`) |
| `npm run build` | 통과(58초) · postbuild `✅ 광고·GA 로딩 정상 (4개 페이지 유형)` |
| `npm run check:payload` | 통과(최대 .rsc `vs.rsc` 252KB, public 상한 내) |

### 5-1. 실브라우저 실제 입력

하네스는 scratchpad `s2/`(`cdp.mjs`·`s1.mjs`·`scenario.mjs`·`leak.mjs`)에 있다.

- 헤드리스 Chrome CDP로, 상태 변경은 `Input.dispatchMouseEvent`·`dispatchTouchEvent`·`dispatchKeyEvent`로만 했다. 마우스 클릭, 터치 탭, 키 입력, 눈금자 터치 끌기를 썼다.
- JS는 DOM·계측 읽기에만 썼다. 계측은 문서 시작 때 심어 Worker·getContext를 감싸고, 워커·컨텍스트 수만 센다.
- `out/`는 `127.0.0.1:3041`에서 정적 서빙했다(광고·분석 도메인은 차단).
- 원본은 `ad6d632` 스냅샷을 `127.0.0.1:3042`에서 띄웠다.

**S1 항목 28개 검사**(`s1.mjs`). 01→07 전체 흐름, 칩 0–6(값·한 줄·좌우 여백·횟수 5회면 6 비활성), 06 대회 → 목표 기록 시트(빈 거리 오류·분 70 오류·하프 1:50 → 목표 페이스 5:13/km·Enter 저장·습관 전환 시 숨김·복귀 시 유지), 07 문구·과다 안내(2일 없음/3일 표시)·막지 않음, D1 확인 블록 문구·버튼, 확정 → 판정 한 줄·민짜 0·완료 화면에 `fallback`·`예비`·`예시` 문구 없음, 콘솔.

| 렌더러 | 화면 | 결과 |
|---|---|---|
| Metal | 390×844 · 375×667 · 375×812 · 360×780 | 28/28 |
| WebGL 없음 | 390×844 · 375×667 | 28/28 (평면 대체) |
| SwiftShader(느린 계층) | 390×844 · 375×667 | 27/28 — 실패 1건은 '콘솔 경고 0'이고, 내용은 1절의 드라이버 성능 경고 2건뿐이다(그 밖의 로그 0) |

- 판정 대조: 화면의 `판정: 제우스`를 확인했다.
  - 입력은 200km·8회·5:30·최장 48·강한 2·대회·화목일·하프 1:50이다.
  - 같은 값을 어댑터→엔진에 직접 넣은 결과와 같다.
  - 목표 기록이 없으면 헥토르가 나온다. raceGoal이 판정에 들어갔다는 뜻이다.
- 칩 폭(실측): 390·375×812는 40/31/39/39/41/39/67px이다. 375×667·360×780은 숫자 44px 계층이라 37–64px이다. 모두 한 줄이고 24px 여백 안이다.

**원본과 같은 단계 스크린샷 비교**(`scenario.mjs`, DPR 2, 같은 입력)

| 렌더러·화면 | 01–04(바뀌면 안 되는 구간) | 05 이후 |
|---|---|---|
| Metal 390×844 | 차이 픽셀 0–0.007%(입력 커서 줄) | 설계대로 다름: 05 칩 7개·쉐브론 6, 07 문구, 완료 민짜 → 새김·판정 줄 |
| Metal 375×667 | 0–0.007% | 같음 |
| SwiftShader 390×844 | 0–0.006% | 같음 |
| WebGL 없음 390×844 | 0–0.007% | 같음 |

- 이식 커밋(`0578de2`, S1 전)에서는 전 단계를 비교했다. 공유 스토리 PNG까지 눈금자 끌기 착지값(48/49) 차이를 빼면 같았다. WebGL 없음 첫 화면은 픽셀이 완전히 같았다.

**떠났다 돌아오기·정리**(`leak.mjs`)

- 운영 빌드: `/running-card` → `/` → 뒤로 가기, 3회 왕복했다.
  - 떠나 있는 동안 워커 타깃은 0이다.
  - 돌아오면 워커 2, 살아 있는 컨텍스트 1이고, 실제 입력(`다음`)이 동작했다.
- 개발 모드(StrictMode가 마운트→정리→마운트) + Fast Refresh 재마운트 4회
  - 워커 생성 20·종료 18 → 살아 있는 워커 타깃은 계속 2다.
  - 컨텍스트 15개 중 14개가 상실 이벤트를 냈다 → 살아 있는 컨텍스트는 계속 1이다.
  - 배열 버퍼(backing store): 고치기 전에는 재마운트마다 +17.1MB였다. 장면 그래프 참조를 끊은 뒤 +2.07MB, 텍스처 픽셀까지 놓은 뒤에는 +16–38KB다.
  - 원인 경로는 힙 스냅샷으로 확인했다: three 전역 LUT 텍스처의 dispose 리스너 → dispose된 렌더러 → 그림자 패스의 깊이 재질 → 우리 맵.

## 6. S3로 넘길 것

1. **여덟 번째 각인**
   - 완료 줄 `판정: {인물}`(flow `:359`, 주석 표시)을 명판 각인으로 바꾼다.
   - 판정은 `toResult()`가 흐름 안 `analysis`에 넣어 둔다. 명판 맵은 `Relief.plate()`를 확장해 워커에서 만든다(설계 §3-1·§5).
2. **글꼴**
   - 명판에 칭호·신탁 등 새 문구를 그리면 그 출처 파일을 `scripts/build-medal-fonts.js`의 `SOURCES`에 넣고 다시 돌린다.
   - 36명 이름·12가문 이름은 이미 들어 있다.
   - 서브셋에 없는 글자는 캔버스에서 시스템 sans-serif로 그려진다(오류는 안 난다).
3. **새 three 이름**: 명판·결과에서 three 클래스를 새로 쓰면 `medal3d-three.js`에 추가한다. 빠뜨리면 시작 때 TypeError가 나고, 단계 노트에 `3D 메달을 불러오지 못했어요`가 뜬다.
4. **예시값 경로**
   - 완료 화면과 공유에는 이제 예시가 남을 수 없다. 그래서 공유 시트의 `#share-sample` 문구와 요약의 `예시` 꼬리표는 도달하지 않는 코드다. 지우지 않았다.
   - S4 공유 2장을 만들 때 정리한다.
5. **목표 기록 표시**: raceGoal은 06의 토글·파생 줄에만 보인다. 완료 요약·공유 이미지에 넣을지는 S4에서 정한다(지금 넣으면 작은 화면 완료 배치가 흔들린다).
6. **디자인 승인**: 동전 05 쉐브론 6자리와 06 목표 기록 시트는 운영자 확인 전이다. 반려되면 relief `hardCoin`과 flow의 race 블록만 고치면 된다.
7. **빌드 환경**: Finder `.DS_Store`가 `.next`·`out`에 생기면 `next build`가 멈추거나 `ENOTEMPTY`로 실패한다. 빌드 전에 지운다.
