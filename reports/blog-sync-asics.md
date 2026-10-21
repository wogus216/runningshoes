# 블로그 정합성 정정 — ASICS (작업 B2)

- 작성: 2026-10-20 (KST) · 작업 브랜치: `cloud/blog-sync-asics` (기준 `origin/main` 6609d63)
- 기준: 현재 main 신발 DB `src/lib/data/shoes/asics/*.ts` (`git diff 8af0c32 origin/main` 16개 파일)
- 수정 범위: `src/lib/data/blog/posts/2026-05·06·07·08·09.ts` 5개 파일, 183곳 (치환마다 예상 횟수 1회를 검증하며 적용, 줄 수 변화 없음)

## 1. 못 한 것

- **제목(title)은 손대지 않았다** — 규칙대로. 아래 '보고만' 표의 제목 4건은 본문과 값이 어긋난 채로 남아 있다.
- **타 브랜드 값은 고치지 않았다** (나이키·아디다스·뉴발란스 감사분). 예외로, 한 문장/한 표가 아식스 값과 묶여 있어 같이 맞춘 것: 줌 플라이 6 정가·km당(DB 209,000원·523원, MS5 vs ZF6 글), 하이퍼부스트 엣지·보스턴 13 토박스 '좁은 편'(DB `narrow`). 둘 다 현재 DB 값과 일치시켰다.
- **불명(확인 못 함)**: 님버스 28 공식 힐 스택 43.5mm·카야노 32 공식 스택(40/32mm)은 DB가 실측만 적고 공식값을 기록하지 않아 진위를 판단하지 못했다. '공식'이라고 명시한 문장은 그대로 뒀다.
- 날짜가 박힌 가격 문장(본문에 '2026-05-25 기준' 등)은 규칙대로 보고만 했다.

## 2. 바뀐 사실 표 (8af0c32 → 현재 main)

| 신발 | 바뀐 값 (이전 → 현재 DB) |
|---|---|
| 매직스피드 5 | 정가 229,000 → **209,000원**, km당 572 → **522원**, 무게 193 → **201g(실측, 공식 196g)**, 스택 37/30 → **35.3/26.6mm(실측)**, 드롭 7(실측 8.7), 와이드 없음 → **2E 있음** |
| 메타스피드 레이 | 정가 399,000 → **439,000원**, km당 1,995 → **2,195원**, 스택 39.5/34.5 → **39.8/30.0mm(실측)**, 드롭 공식 5 / 실측 9.8 |
| 메타스피드 스카이+ | 스택 39/34 → **33.5/30.8mm(실측)**, 드롭 공식 5 / 실측 2.7, 무게 205g 동일 |
| 메타스피드 엣지+ | 값 변화 없음(33/25mm 기존 표기). 스카이+ 스택 변경으로 '스카이+보다 낮은 스택' 설명이 DB에서 '스카이+보다 높은 드롭(8mm)'으로 바뀜 |
| 젤 님버스 28 | 무게 281 → **278g(실측, 공식 283g)**, 스택 43.5/35.5 → **39.5/34.3mm(실측)**, 드롭 공식 8 / 실측 5.2 |
| 젤 카야노 32 | 무게 300 → **295g(실측, 공식 304g)**, 스택 40/32 → **39.9/30.6mm(실측)**, 드롭 공식 8 / 실측 9.3, 토박스 73.9mm 표준 |
| 매직스피드 4 | 스택 43/35 → **42.5/32.9mm(실측)**, 무게 237g(공식 242g), 정가 199,000원 동일 |
| 슈퍼블라스트 3 | 무게 239 → **235g(실측, 239g는 '기존 표기·미확인')**, 스택 46.5/38.5 → **45.8/37.7mm(실측, 공식 46.5/38.5 병기)**, 토박스 standard → **narrow(71.6mm)**, 와이드 없음 |
| 슈퍼블라스트 2 | 에너지 리턴 71% → **전족 65.5%(실측)**, 스택 42.8/34.6 실측(수치 필드 43/35 유지), 토박스 72.3mm 표준 |
| 노바블라스트 6 | 토박스 standard → **narrow(71.0mm)**, 와이드 있음(유지) |
| 젤 벤처 10 | 드롭 텍스트 '공식 10mm / 실측 12.0mm'(수치 필드 12 유지), 토박스 좁음(67.5mm) |
| 메타후지 트레일 | 드롭 텍스트 '실측 10.3 / 공식 5mm'(수치 필드 10 유지) |
| 메가블라스트·노바블라스트 5·소닉블라스트·카야노 33 | 수치 변화 없음(본문 km당 문장 삭제·출처 표기만). 블로그 정정 대상 없음 |

## 3. 수정한 문장 표

줄 번호는 커밋 후 파일 기준. '이전/이후'는 바뀐 부분 앞뒤만 발췌(HTML 태그 제거, ⏎=줄바꿈).

| # | 글 slug | 파일:줄 | 이전 | 이후 |
|---|---|---|---|---|
| 1 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4231 | …줌 플라이 6은 정가 229,000원, km당 572원, 적정 페이스 3:30~5:00까지 전부 같습니다. 다른 건 무게 193g 대 248g(55g 차)… | …줌 플라이 6은 정가 209,000원, km당 약 522~523원, 적정 페이스 3:30~5:00까지 사실상 같습니다. 다른 건 무게 201g(실측) 대 248g(47g 차)… |
| 2 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4242 | …'네. 한국 공식 정가가 둘 다 229,000원입니다. 내구성도 400km로 같아 km당 비용도 약 572원으로 동일합니다.… | …'네. 한국 공식 정가가 둘 다 209,000원입니다. 내구성도 400km로 같아 km당 비용도 약 522~523원으로 사실상 같습니다.… |
| 3 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4245 | …question: '55g 차이가 그렇게 큰가요?'… | …question: '47g 차이가 그렇게 큰가요?'… |
| 4 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4247 | …'193g과 248g은 카본화 기준으로 큰 격차입니다. 한 켤레로 110g이라… | …'201g(실측)과 248g은 카본화 기준으로 큰 격차입니다. 한 켤레로 94g이라… |
| 5 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4247 | …힐 스택이 40mm로 3mm 더 두껍고 안정성 점수… | …힐 스택이 40mm로 4.7mm 더 두껍고 안정성 점수… |
| 6 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4257 | …'둘 다 와이드 옵션이 없고, 특히 줌 플라이 6은 토박스가 좁은 편(narrow)으로 분류됩니다. 매직스피드 5는 표준 폭입니다. 발볼이 넓다면 매직스피드 5가 그나마 낫지만,… | …'줌 플라이 6은 와이드 옵션이 없고 토박스가 좁은 편(narrow)으로 분류됩니다. 매직스피드 5는 표준 폭이고 2E(와이드) 상품이 있습니다. 발볼이 넓다면 매직스피드 5가 낫지만,… |
| 7 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4269 | …— 둘 다 229,000원, 400km, km당 572원, 3:30~5:00/km… | …— 둘 다 209,000원, 400km, km당 약 522~523원, 3:30~5:00/km… |
| 8 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4270 | …매직스피드 5 193g·드롭 7mm·포크형 카본 / 줌 플라이 6 248g·드롭 10mm·풀렝스 곡선형 카본. 55g 차이… | …매직스피드 5 201g(실측)·드롭 7mm·포크형 카본 / 줌 플라이 6 248g·드롭 10mm·풀렝스 곡선형 카본. 47g 차이… |
| 9 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4290 | …한국 정가229,000원229,000원 (동일)… | …한국 정가209,000원209,000원 (동일)… |
| 10 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4291 | …r>무게193g… | …r>무게201g… |
| 11 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4292 | …r>스택 (힐/전족)37 / 30mm<str… | …r>스택 (힐/전족)35.3 / 26.6mm<str… |
| 12 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4300 | …와이드 옵션없음없음⏎    내구 · km당400km · 572원400km · 572원 (동일)</… | …와이드 옵션2E 있음없음⏎    내구 · km당400km · 522원400km · 523원 (사실상 동일)</… |
| 13 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4338 | …193g은 카본화 중에서도 가벼운 축이고, 전작(242g)에서 50g을 덜어낸… | …실측 201g은 카본화 중에서도 가벼운 축이고, 전작(실측 237g)에서 36g을 덜어낸… |
| 14 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4361 | …→ 매직스피드 5(표준 폭). 줌 플라이는 좁은 편입니다. 둘 다 와이드가 없으니 착화 필수… | …→ 매직스피드 5(표준 폭, 2E 와이드 있음). 줌 플라이는 좁은 편이고 와이드가 없습니다. 어느 쪽이든 착화 필수… |
| 15 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4362 | …→ 매직스피드 5(193g)… | …→ 매직스피드 5(201g)… |
| 16 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4390 | …가격은 한국 공식 정가 기준(둘 다 229,000원)이며… | …가격은 한국 공식 정가 기준(둘 다 209,000원)이며… |
| 17 | asics-go-free-run-2026 | 2026-08.ts:5468 | …매직스피드 5 (229,000원). 풀 카본 플… | …매직스피드 5 (209,000원). 풀 카본 플… |
| 18 | asics-go-free-run-2026 | 2026-08.ts:5469 | …메타스피드 레이 (399,000원). 아식스 슈퍼… | …메타스피드 레이 (439,000원). 아식스 슈퍼… |
| 19 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3431 | …직스피드 4(237g/199,000원)와 5(193g/229,000원)을 풀데이터로 직접 비교. 50g 경량화 +… | …직스피드 4(237g/199,000원)와 5(201g/229,000원)을 풀데이터로 직접 비교. 36g 경량화(실측) +… |
| 20 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3442 | …50g 차이의 무게 (4 237g / 5 193g)… | …36g 차이의 무게 (4 237g / 5 201g, RunRepeat 실측)… |
| 21 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3444 | …대신 5는 힐 스택 -6mm (43 → 37mm)… | …대신 5는 힐 스택 -7.2mm (42.5 → 35.3mm, 실측)… |
| 22 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3466 | …237g193g-44g (-19%)</td… | …237g201g-36g (-15%)</td… |
| 23 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3467 | …g>힐 스택43mm37mm-6mm… | …g>힐 스택42.5mm35.3mm-7.2mm… |
| 24 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3468 | …전족부 스택35mm30mm-5mm… | …전족부 스택32.9mm26.6mm-6.3mm… |
| 25 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3473 | …rong>없음없음양쪽 모두 ❌⏎    … | …rong>없음2E 있음5만 ✅⏎    … |
| 26 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3483 | …1. 무게 -44g — 같은… | …1. 무게 -36g — 같은… |
| 27 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3485 | …237g → 193g, -19% 경량화는… | …237g → 201g(실측), -15% 경량화는… |
| 28 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3487 | …한 발 44g(-19%) 차이는… | …한 발 36g(-15%) 차이는… |
| 29 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3526 | …-44g 경량이 후반부 결정적</… | …-36g 경량이 후반부 결정적</… |
| 30 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3527 | …43mm 힐 스택이 후반 쿠션 우위… | …42.5mm 힐 스택(실측)이 후반 쿠션 우위… |
| 31 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3529 | …양쪽 모두 와이드 ❌ → <a href="/sh… | …4는 와이드 ❌, 5는 2E까지 → <a href="/sh… |
| 32 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3549 | …가성비 우선이면 4의 43mm 스택이 약간 유리합니다.… | …가성비 우선이면 4의 42.5mm(실측) 힐 스택이 약간 유리합니다.… |
| 33 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3552 | …4·5 모두 와이드 옵션 없음. 토박스는 표준이라 발볼 standard~약간 좁음 러너에게 맞습니다. 발볼 2E 이상이면 메타스피드 스카이+ 와이드(아식스에서 유일하게 와이드 있는 카본) 권장.… | …4는 와이드 옵션 없음, 5는 2E(와이드) 상품 있음. 토박스는 둘 다 표준이라 발볼 standard~약간 좁음 러너에게 맞습니다. 발볼 2E라면 매직스피드 5 2E, 그 이상이면 메타스피드 스카이+ 와이드 권장.… |
| 34 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3555 | …37mm도 여전히 데일리 트레이너 … | …힐 35.3mm(실측)도 여전히 데일리 트레이너 … |
| 35 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3566 | …포크형 카본 + 193g 경량 + FF Leap 듀… | …포크형 카본 + 201g(실측) 경량 + FF Leap 듀… |
| 36 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3567 | …5보다 3~4만원 절약 + 43mm 힐 스택의 풀코스… | …5보다 3~4만원 절약 + 42.5mm(실측) 힐 스택의 풀코스… |
| 37 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3568 | …는 둘 다 적합하지 않습니다. 와이드 옵션이 양쪽 모두 없어 토박스 압박 가능. 메타스피드 스카이+ 와이드가 아식스 카본 중 유일한 와이드 선택지입니다.… | …는 둘 다 적합하지 않습니다. 4는 와이드 옵션이 없고 5도 2E까지라 토박스 압박 가능. 메타스피드 스카이+ 와이드도 선택지입니다.… |
| 38 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3712 | (표 행 이동 — 가격순/km당순 정렬 유지) | 아래 행으로 이동 |
| 39 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3710 | … 졸업, 부드러워진 카야노⏎… | … 졸업, 부드러워진 카야노⏎    매직스피드 5가성비 레이싱FF Leap · FF Blast+ · 카본20.9만201g201g(실측) 포크형 카본, 36g 감량⏎… |
| 40 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3623 | …젤 벤처 8.9만부터 메타스피드 레이 39.9만까지… | …젤 벤처 8.9만부터 메타스피드 레이 43.9만까지… |
| 41 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3693 | …rong>카본 플레이트 없이 71% 에너지 리턴을 내는… | …rong>카본 플레이트 없이 전족 에너지 리턴 65.5%(슈퍼블라스트 2, RunRepeat 실측)를 내는… |
| 42 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3707 | …19.9만300g4D Gu… | …19.9만295g4D Gu… |
| 43 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3708 | …19.9만281g43.5mm 푹신,… | …19.9만278g힐 39.5mm(실측) 푹신,… |
| 44 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3714 | …d>252g카본 없이 71% 에너지 리턴… | …d>252g카본 없이 전족 에너지 리턴 65.5%… |
| 45 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3716 | …25.9만239g239g, 더 부드러운 롱런</td… | …25.9만235g235g(실측), 더 부드러운 롱런</td… |
| 46 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3721 | …d>FF Leap (ATPU)39.9만129… | …d>FF Leap (ATPU)43.9만129… |
| 47 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3732 | …젤 님버스 28(43.5mm). 더 가볍고 높은 스택을… | …젤 님버스 28(힐 39.5mm, 실측). 더 가볍고 높은 스택을… |
| 48 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3766 | …스트 5·6(와이드) · 슈퍼블라스트 2 · 메타스피드 스카이+·엣지+ … | …스트 5·6(와이드) · 슈퍼블라스트 2 · 매직스피드 5(2E) · 메타스피드 스카이+·엣지+ … |
| 49 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3767 | …슈퍼블라스트 3 · 매직스피드 4·5 · 메가블라스트(… | …매직스피드 4 · 메가블라스트(… |
| 50 | asics-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3768 | …이드 없음, 1세대 토박스 70.1mm) · 메타스피드 레이 · 메타후지… | …이드 없음, 1세대 토박스 70.1mm) · 슈퍼블라스트 3(와이드 없음, 토박스 71.6mm) · 메타스피드 레이 · 메타후지… |
| 51 | nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026 | 2026-07.ts:1276 | …d>38 / 30mm39 / 34mm</td… | …d>38 / 30mm33.5 / 30.8mm</td… |
| 52 | nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026 | 2026-07.ts:1294 | …전족 스택이 34mm로 셋 중 가장 두꺼워… | …전족 스택이 30.8mm(실측)로 셋 중 가장 두꺼워… |
| 53 | siheung-half-marathon-2026 | 2026-07.ts:2446 | …아식스 매직스피드 5(22.9만)가 카본 플레이트를… | …아식스 매직스피드 5(20.9만)가 카본 플레이트를… |
| 54 | running-shoes-recommend-by-price-2026 | 2026-07.ts:4534 | …아식스 매직스피드 5229,000193g… | …아식스 매직스피드 5209,000201g… |
| 55 | running-shoes-recommend-by-price-2026 | 2026-07.ts:4547 | …매직스피드 5(22만원대·193g)로 시작하세요.… | …매직스피드 5(20만원대·201g)로 시작하세요.… |
| 56 | running-shoes-recommend-by-price-2026 | 2026-07.ts:4561 | …>대회 기록 도전(첫 카본)23만원… | …>대회 기록 도전(첫 카본)21만원… |
| 57 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3319 | (표 행 이동 — 가격순/km당순 정렬 유지) | 아래 행으로 이동 |
| 58 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3318 | …>표준있음⏎… | …>표준있음⏎    아식스 매직스피드 5209,000원201g약 522원표준있음⏎… |
| 59 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3223 | …비용이 274원(디비에이트 나이트로 4)부터 1,995원(메타스피드 레이)까지 7.3배 벌어집니다… | …비용이 274원(디비에이트 나이트로 4)부터 2,195원(메타스피드 레이)까지 8.0배 벌어집니다… |
| 60 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3244 | …최상위(1,516~1,995원)와 확연히… | …최상위(1,516~2,195원)와 확연히… |
| 61 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3254 | …와이드 옵션이 나오는 건 6종(20%)뿐으로, 메타스피드 스카이+·엣지+, SC 엘리트 V5,… | …와이드 옵션이 나오는 건 7종(23%)뿐으로, 메타스피드 스카이+·엣지+, 매직스피드 5, SC 엘리트 V5,… |
| 62 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3254 | …발볼이 넓다면 이 6종부터 보는 게 순서입니다.… | …발볼이 넓다면 이 7종부터 보는 게 순서입니다.… |
| 63 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3266 | …이 274원부터 1,995원까지 7.3배 벌어집니… | …이 274원부터 2,195원까지 8.0배 벌어집니… |
| 64 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3267 | …ng>서브2 최상위(33.9~39.9만).… | …ng>서브2 최상위(33.9~43.9만).… |
| 65 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3268 | …와이드 옵션이 나오는 건 6종뿐입니다.… | …와이드 옵션이 나오는 건 7종뿐입니다.… |
| 66 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3280 | …1. 7.3배 — 한 단어가… | …1. 8.0배 — 한 단어가… |
| 67 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3290 | …아식스 메타스피드 레이399,000원약 1,995원</t… | …아식스 메타스피드 레이439,000원약 2,195원</t… |
| 68 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3294 | …정가는 1.8배 차이인데 km당 비용은 7.3배입니다.… | …정가는 2.0배 차이인데 km당 비용은 8.0배입니다.… |
| 69 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3363 | …h2>4. 3단 · 서브2 최상위 (33.9~39.9만원)… | …h2>4. 3단 · 서브2 최상위 (33.9~43.9만원)… |
| 70 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3374 | …아식스 메타스피드 레이399,000원129g약 1,995원</t… | …아식스 메타스피드 레이439,000원129g약 2,195원</t… |
| 71 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3391 | …드 옵션 제공6종 (20%)… | …드 옵션 제공7종 (23%)… |
| 72 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3395 | …와이드가 나오는 6종 — 메타스피드 스카이+, 메타스피드 엣지+, … | …와이드가 나오는 7종 — 메타스피드 스카이+, 메타스피드 엣지+, 매직스피드 5(2E), … |
| 73 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3395 | …뉴발란스가 셋, 아식스가 둘이라 사실상 두 브랜드가… | …뉴발란스와 아식스가 셋씩이라 사실상 두 브랜드가… |
| 74 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7851 | …'아식스 매직스피드 5(229,000원, 포크형 카본)… | …'아식스 매직스피드 5(209,000원, 포크형 카본)… |
| 75 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7867 | …매직스피드는 폼이 덜 돌려주는 대신 193g의 가벼움과 카본의 지렛대… | …매직스피드는 폼이 덜 돌려주는 대신 201g의 가벼움과 카본의 지렛대… |
| 76 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7870 | …question: '3만원 더 주고 슈퍼블라스트 … | …question: '5만원 더 주고 슈퍼블라스트 … |
| 77 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7872 | …'용도가 다릅니다. 매직스피드 5(229,000원)는 내구 400km에 km당 572원이라… | …'용도가 다릅니다. 매직스피드 5(209,000원)는 내구 400km에 km당 522원이라… |
| 78 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7877 | …'둘 다 와이드 옵션이 없고 랩 토박스 실측은 매직스피드 5가 71.9mm, 슈퍼블라스트 3이 71.6mm로 사실상 같습니다. 슈퍼블라스트는 전작보다 넓어졌다는 게 세대 변화이고, 매직스피드는 표준폭입니다.… | …'와이드 옵션은 매직스피드 5에만 2E 상품이 있고 슈퍼블라스트 3은 없습니다. 랩 토박스 실측은 매직스피드 5가 71.9mm, 슈퍼블라스트 3이 71.6mm로 사실상 같지만, 판정은 매직스피드가 표준폭, 슈퍼블라스트는 랩 평균보다 좁은 편(전작과 같은 스너그 핏)입니다.… |
| 79 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7891 | …3만원은 성격의 값입니다 — 229,000원·193g·400km의 대회용 카본 vs 259,000원·239g·550km의… | …5만원은 성격의 값입니다 — 209,000원·201g·400km의 대회용 카본 vs 259,000원·235g·550km의… |
| 80 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7905 | …peat)의 실측값이고, 무게는 아식스 공식 표기입니다.… | …peat)의 실측값이고, 무게도 RunRepeat 실측입니다.… |
| 81 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7912 | …d>한국 정가229,000원259,000원⏎    무게 (공식)193g239g… | …d>한국 정가209,000원259,000원⏎    무게 (실측)201g235g… |
| 82 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7923 | …와이드 옵션없음없음</t… | …와이드 옵션2E 있음없음</t… |
| 83 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7925 | …구 · km당400km · 572원<str… | …구 · km당400km · 522원<str… |
| 84 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7944 | …피드는 폼이 덜 돌려주는 대신 46g 가볍고… | …피드는 폼이 덜 돌려주는 대신 34g 가볍고… |
| 85 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7950 | …매직스피드는 그 얇은 앞발 덕에 193g이 가능했습니다.… | …매직스피드는 그 얇은 앞발 덕에 201g이 가능했습니다.… |
| 86 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7974 | …193g은 전작(242g)에서 50g을 덜어낸 결과이고, 229,000원은 같은 브랜드 메타스피드(399,000원)의 57%입니다.… | …실측 201g은 전작(실측 237g)에서 36g을 덜어낸 결과이고, 209,000원은 같은 브랜드 메타스피드(439,000원)의 48%입니다.… |
| 87 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7976 | …내구 400km·km당 572원이라 주간 훈련을 전부 … | …내구 400km·km당 522원이라 주간 훈련을 전부 … |
| 88 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7982 | …km당 471원으로 매직스피드보다 100원 싸고,… | …km당 471원으로 매직스피드보다 51원 싸고,… |
| 89 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7982 | …239g은 46mm 스택치고 가벼… | …235g은 46mm 스택치고 가벼… |
| 90 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7984 | …레이스 당일에는 매직스피드가 46g 가볍습니다</strong… | …레이스 당일에는 매직스피드가 34g 가볍습니다</strong… |
| 91 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7995 | …합쳐 488,000원이고 각각의 수명… | …합쳐 468,000원이고 각각의 수명… |
| 92 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:7996 | …strong>발볼이 넓다 → 둘 다 와이드 없음·토박스 71.… | …strong>발볼이 넓다 → 매직스피드 5는 2E 있음, 슈퍼블라스트 3은 와이드 없음·토박스 71.… |
| 93 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:8010 | …권하지 않습니다. 내구 400km에 km당 572원이라 주간 40km면… | …권하지 않습니다. 내구 400km에 km당 522원이라 주간 40km면… |
| 94 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:8018 | …46g 차이와 카본 지렛대를 빼… | …34g 차이와 카본 지렛대를 빼… |
| 95 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 2026-09.ts:8022 | …우리 신발 DB(무게는 아식스 공식 표기). 가격은 한국 공식 정가(매직스피드 5 229,000원·슈퍼블라스트 3… | …우리 신발 DB(무게는 RunRepeat 실측). 가격은 한국 공식 정가(매직스피드 5 209,000원·슈퍼블라스트 3… |
| 96 | asics-metaspeed-edge-plus-review | 2026-09.ts:4737 | …33mm 힐 스택은 스트라이드형인 스카이+(39mm)보다 낮아 지면 감각이 살아 있고, 8mm 드롭이 빠른 턴오버… | …스트라이드형인 스카이+(공식 드롭 5mm)보다 높은 8mm 드롭이 빠른 턴오버… |
| 97 | asics-metaspeed-edge-plus-review | 2026-09.ts:4748 | …33mm 힐 스택으로 스카이+(39mm)보다 낮아 지면 감각이 살아 있습니다… | …힐 스택은 33mm(공식)로 스카이+(실측 33.5mm)와 비슷하고, 갈리는 건 드롭(8mm 대 5mm)입니다… |
| 98 | asics-metaspeed-edge-plus-review | 2026-09.ts:4763 | …같은 라인의 스카이+가 39mm 스택으로 보폭을 살리는 쪽이라면, 엣지+는 33mm 힐로 지면 접지감을 남겨 빠른 턴오버를 지원합니다.… | …같은 라인의 스카이+가 낮은 드롭(공식 5mm)으로 보폭을 살리는 쪽이라면, 엣지+는 8mm 드롭으로 빠른 턴오버를 지원합니다.… |
| 99 | asics-metaspeed-edge-plus-review | 2026-09.ts:4769 | …힐 스택33mm39mm… | …힐 스택33mm (공식)33.5mm (실측)… |
| 100 | asics-metaspeed-edge-plus-review | 2026-09.ts:4803 | …엣지+는 33mm 힐 스택으로 지면 감각이 살아 있고, 스카이+는 39mm로 스택이 높아 보폭을 살립니다.'… | …엣지+는 8mm 드롭으로 빠른 턴오버를 겨냥했고, 스카이+는 낮은 드롭(공식 5mm)으로 보폭을 살리는 설계입니다.'… |
| 101 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3618 | …스트 2(252g/249,000원)와 3(239g/259,000원)을 RunRepeat 실측 + 외부 리뷰로 비교. -13g 경량화 +… | …스트 2(252g/249,000원)와 3(235g/259,000원)을 RunRepeat 실측 + 외부 리뷰로 비교. -17g 경량화 +… |
| 102 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3639 | …RunRepeat 슈퍼블라스트 2 실측(에너지 리턴 71%) +… | …RunRepeat 슈퍼블라스트 2 실측(전족 에너지 리턴 65.5%) +… |
| 103 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3653 | …d>252g239g-13g… | …d>252g235g-17g… |
| 104 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3659 | …/strong>71% (실측)… | …/strong>전족 65.5% (실측)… |
| 105 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3663 | …/strong>standardstandard (확장)v3 약간 더 넓음… | …/strong>standard (72.3mm)narrow (71.6mm)v3가 0.7mm 더 좁음 (RunRepeat 실측)… |
| 106 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3679 | …→ 카본 없이 70%+ 에너지 리턴… | …→ 카본 없이 65%+ 에너지 리턴(전족 실측)… |
| 107 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3704 | …>에너지 리턴71% (검증)미게시</… | …>에너지 리턴전족 65.5% (실측)미게시</… |
| 108 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3713 | …3. 무게 -13g (252→239g) ✅ 경량화… | …3. 무게 -17g (252→235g, 실측) ✅ 경량화… |
| 109 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3714 | …v3가 v2보다 13g 가벼우면서 스택은 +3.… | …v3가 v2보다 17g 가벼우면서 스택은 +3.… |
| 110 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3717 | …v3의 토박스가 v2보다 넓어졌다고는 하나 발볼 4E급에게는 부족할 수 있음.… | …RunRepeat 실측 토박스도 v3(71.6mm)가 v2(72.3mm)보다 오히려 좁아 발볼 넓은 러너에게는 부족할 수 있음.… |
| 111 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3730 | …26만239g46.5m… | …26만235g46.5m… |
| 112 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3731 | …20만222g40mm풀렝스 카본카본 … | …20만201g35.3mm포크형 카본카본 … |
| 113 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3765 | …발볼 표준~약간 넓음v3 standard 또는 v2 standardv3가 약간 더 넓다고 보고… | …발볼 표준~약간 넓음v2 standard 또는 v3 standard실측상 v3 토박스가 0.7mm 더 좁음… |
| 114 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3766 | …71% 에너지 리턴 검증 + 3~5만원 절약</td… | …전족 에너지 리턴 65.5%(실측) + 3~5만원 절약</td… |
| 115 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3769 | …롱런·페이스 훈련 다재다능 + 토박스 확장… | …롱런·페이스 훈련 다재다능… |
| 116 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3847 | …발볼 2E 정도(EE)면 v3 standard에서 토박스 약간 넓어진 덕에 가능.… | …v3는 토박스 실측 71.6mm로 랩 평균(73.2mm)보다 좁아 발볼 2E 정도(EE)도 시착이 먼저.… |
| 117 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3879 | …이라면 v3 권장. 토박스 확장 + 다재다능한 활용 + 부상 위… | …이라면 v3 권장. 다재다능한 활용 + 부상 위… |
| 118 | asics-superblast-2-vs-3-comparison | 2026-05.ts:3909 | …RunRepeat 슈퍼블라스트 2 랩 데이터(에너지 리턴 71%) +… | …RunRepeat 슈퍼블라스트 2 랩 데이터(전족 에너지 리턴 65.5%) +… |
| 119 | superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026 | 2026-06.ts:592 | …r>무게(US 9)239g<stro… | …r>무게(US 9)235g<stro… |
| 120 | superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026 | 2026-06.ts:598 | …발볼 / 와이드표준 · 와이드 … | …발볼 / 와이드좁은 편(71.6mm) · 와이드 … |
| 121 | superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026 | 2026-06.ts:613 | …슈퍼블라스트 3는 전작보다 토박스가 넓어졌지만 와이드 옵션… | …슈퍼블라스트 3는 토박스 실측 71.6mm로 랩 평균(73.2mm)보다 좁은데 와이드 옵션… |
| 122 | superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026 | 2026-06.ts:643 | …A. 권하기 어렵습니다. 전작보다 토박스가 넓어졌다지만 표준은 표준이고,… | …A. 권하기 어렵습니다. 토박스가 실측 71.6mm로 랩 평균보다 좁은 편이고,… |
| 123 | adidas-hyperboost-edge-vs-asics-superblast-3-super-trainer-2026 | 2026-07.ts:1425 | …슈퍼블라스트 3은 239g 경량의 레이스데이 지향입… | …슈퍼블라스트 3은 235g 경량의 레이스데이 지향입… |
| 124 | adidas-hyperboost-edge-vs-asics-superblast-3-super-trainer-2026 | 2026-07.ts:1436 | …슈퍼블라스트 3(46.5mm·239g) 모두… | …슈퍼블라스트 3(46.5mm·235g) 모두… |
| 125 | adidas-hyperboost-edge-vs-asics-superblast-3-super-trainer-2026 | 2026-07.ts:1437 | …슈퍼블라스트 3은 239g 경량·낮은 내구(550k… | …슈퍼블라스트 3은 235g 경량·낮은 내구(550k… |
| 126 | adidas-hyperboost-edge-vs-asics-superblast-3-super-trainer-2026 | 2026-07.ts:1438 | …ng>와이드 없음이고 발볼은 표준.… | …ng>와이드 없음이고 발볼은 좁은 편.… |
| 127 | adidas-hyperboost-edge-vs-asics-superblast-3-super-trainer-2026 | 2026-07.ts:1451 | …d>247g239g… | …d>247g235g… |
| 128 | adidas-hyperboost-edge-vs-asics-superblast-3-super-trainer-2026 | 2026-07.ts:1458 | …표준 / 없음표준 / 없음… | …표준 / 없음좁은 편 / 없음… |
| 129 | adidas-hyperboost-edge-vs-asics-superblast-3-super-trainer-2026 | 2026-07.ts:1471 | …46.5mm 최고 스택을 239g이라는… | …46.5mm 최고 스택을 235g이라는… |
| 130 | adidas-hyperboost-edge-vs-asics-superblast-3-super-trainer-2026 | 2026-07.ts:1478 | …슈퍼블라스트 3(239g)… | …슈퍼블라스트 3(235g)… |
| 131 | adidas-hyperboost-edge-vs-asics-superblast-3-super-trainer-2026 | 2026-07.ts:1495 | …A. 둘 다 와이드 옵션이 없고 발볼은 표준입니다.… | …A. 둘 다 와이드 옵션이 없고 발볼은 좁은 편입니다.… |
| 132 | adidas-hyperboost-edge-vs-asics-superblast-3-super-trainer-2026 | 2026-07.ts:1458 | …발볼 / 와이드표준 / 없음좁… | …발볼 / 와이드좁은 편 / 없음좁… |
| 133 | adidas-hyperboost-edge-review-2026 | 2026-07.ts:1979 | …트 3(25.9만·239g)… | …트 3(25.9만·235g)… |
| 134 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1365 | …평을 받은 SC 레벨엔 와이드 2E가 있고, 표준폭인 슈퍼블라스트 3엔 와이드가… | …평을 받은 SC 레벨엔 와이드 2E가 있고, 토박스가 랩 평균보다 좁게 측정된 슈퍼블라스트 3엔 와이드가… |
| 135 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1378 | …슈퍼블라스트 3는 표준폭이지만 와이드가 없습니다 — 발볼… | …슈퍼블라스트 3도 RunRepeat 실측 토박스 71.6mm로 좁은 편인데 와이드가 없습니다 — 발볼… |
| 136 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1407 | …g>2E 있음표준 / 없음</… | …g>2E 있음좁은 편(71.6mm) / 없음</… |
| 137 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1433 | …전작보다 토박스가 넓어져 표준폭 기준으로는 편해졌지만, 발볼이 확실히 넓으면 대… | …토박스도 RunRepeat 실측 71.6mm로 랩 평균(73.2mm)보다 좁아, 발볼이 확실히 넓으면 대… |
| 138 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1440 | …역설적이지만 "좁다"고 평가받은 쪽에만 와이드가 있습니다.… | …둘 다 좁은 편이지만 와이드는 SC 레벨에만 있습니다.… |
| 139 | nike-pegasus-42-vs-asics-novablast-6-daily-2026 | 2026-07.ts:1544 | …g>2E 있음표준(71.0mm) / <str… | …g>2E 있음좁은 편(71.0mm) / <str… |
| 140 | adidas-adizero-evo-sl-vs-asics-novablast-6-daily-2026 | 2026-08.ts:3413 | …표준(71.0mm) / <str… | …좁은 편(71.0mm) / <str… |
| 141 | asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4081 | …바블라스트 6입니다. 두 켤레 모두 토박스는 표준 폭이지만 와이드 옵션은 노바 … | …바블라스트 6입니다. 두 켤레 모두 토박스는 좁은 편이지만 와이드 옵션은 노바 … |
| 142 | asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4127 | …tr>토박스 / 와이드표준 / 있음표준 / 없음</… | …tr>토박스 / 와이드좁은 편 / 있음좁은 편 / 없음</… |
| 143 | beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3726 | …g약 256원표준있음</td… | …g약 256원좁음있음</td… |
| 144 | beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3751 | …-nitro-4">벨로시티 나이트로 4… | …-nitro-4">벨로시티 나이트로 4, 노바블라스트 6… |
| 145 | beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3611 | … 라이벌 플라이 4, 벨로시티 나이트로 4, 레드헤어 9 프로·울트라는 … | … 라이벌 플라이 4, 벨로시티 나이트로 4, 노바블라스트 6, 레드헤어 9 프로·울트라는 … |
| 146 | 2026-nb-1080v15-tryout-popup-d3 | 2026-05.ts:7694 | …Nimbus 28(281g)보다 70~85g 가볍습니다.… | …Nimbus 28(278g)보다 17~42g 가볍습니다.… |
| 147 | 2026-heavy-runner-running-shoes | 2026-05.ts:8166 | …td>199,000원281g43mm… | …td>199,000원278g39.5mm… |
| 148 | 2026-heavy-runner-running-shoes | 2026-05.ts:8167 | …/td>199,000원300g40mm<… | …/td>199,000원295g40mm<… |
| 149 | 2026-heavy-runner-running-shoes | 2026-05.ts:8043 | …ss="stat-sub">199,000원 / 300g… | …ss="stat-sub">199,000원 / 295g… |
| 150 | 2026-heavy-runner-running-shoes | 2026-05.ts:8082 | …가격 199,000원 · 무게 300g · 안정화 · 평점 4.… | …가격 199,000원 · 무게 295g · 안정화 · 평점 4.… |
| 151 | 2026-heavy-runner-running-shoes | 2026-05.ts:8088 | …주의: 300g으로 묵직 — 가벼운… | …주의: 295g으로 묵직 — 가벼운… |
| 152 | nike-pegasus-42-review | 2026-05.ts:10990 | …무릎 보호·장거리 리커버리에 43.5mm 맥시멀 쿠션이 정말 필요한… | …무릎 보호·장거리 리커버리에 힐 39.5mm(실측) 맥시멀 쿠션이 정말 필요한… |
| 153 | asics-kayano-32-vs-33-comparison | 2026-05.ts:4654 | …(US M9)300g298g-2g (사실상 동일)… | …(US M9)295g298g+3g (사실상 동일)… |
| 154 | asics-kayano-32-vs-33-comparison | 2026-05.ts:4705 | …4. 무게 -2g (300 → 298g) ↔ 사실상 … | …4. 무게 +3g (295 → 298g) ↔ 사실상 … |
| 155 | 2026-asics-kayano-33-launch | 2026-05.ts:7534 | …rong>무게300g298g<… | …rong>무게295g298g<… |
| 156 | 2026-asics-kayano-33-launch | 2026-05.ts:7585 | …>199,000원⏎      300g… | …>199,000원⏎      295g… |
| 157 | hoka-bondi-9-vs-asics-nimbus-28 | 2026-06.ts:665 | …님버스는 22g 가벼운 무게·발볼 여유·… | …님버스는 25g 가벼운 무게·발볼 여유·… |
| 158 | hoka-bondi-9-vs-asics-nimbus-28 | 2026-06.ts:677 | …22g 가벼운 281g + 발볼 여유… | …25g 가벼운 278g + 발볼 여유… |
| 159 | hoka-bondi-9-vs-asics-nimbus-28 | 2026-06.ts:695 | …td>303g281g⏎    힐 / 전족 스택41 / 32mm43.5 / 35.5mm</td… | …td>303g278g⏎    힐 / 전족 스택41 / 32mm39.5 / 34.3mm</td… |
| 160 | hoka-bondi-9-vs-asics-nimbus-28 | 2026-06.ts:709 | …8은 전작 대비 20g 빠진 281g으로, 본디(303g)보다 22g 가볍습니다. 맥스쿠션화에서 22g은… | …8은 전작 대비 20g 빠진 278g으로, 본디(303g)보다 25g 가볍습니다. 맥스쿠션화에서 25g은… |
| 161 | hoka-bondi-9-vs-asics-nimbus-28 | 2026-06.ts:740 | …님버스는 43.5mm 더 높은 스택의 충격 흡수가 강점입니다.… | …님버스는 더 두꺼운 전족 스택(34.3mm 대 32mm)의 충격 흡수가 강점입니다.… |
| 162 | saucony-triumph-24-review | 2026-06.ts:1818 | …vs 님버스 28 — 스택은 비슷(43.5/35.5mm).… | …vs 님버스 28 — 스택은 님버스가 실측 39.5/34.3mm로 힐은 트라이엄프 쪽이 더 높습니다.… |
| 163 | max-cushion-running-shoes-knee-protection-2026 | 2026-06.ts:7256 | …ong>10281g… | …ong>10278g… |
| 164 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1598 | …v15는 261g의 반응형, 님버스 28은 281g의 최대 쿠션입니다.… | …v15는 261g의 반응형, 님버스 28은 278g의 최대 쿠션입니다.… |
| 165 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1609 | …님버스 28은 281g의 최대 쿠션. 무게 차이는 20g으로… | …님버스 28은 278g의 최대 쿠션. 무게 차이는 17g으로… |
| 166 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1610 | …님버스 28(쿠션 10·스택 43.5mm)… | …님버스 28(쿠션 10·힐 스택 39.5mm)… |
| 167 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1624 | …> (남성, 뉴발란스 공식)281g⏎    스택(힐/전족)40 / 34mm43.5 / 35.5mm</td… | …> (남성, 뉴발란스 공식)278g⏎    스택(힐/전족)40 / 34mm39.5 / 34.3mm</td… |
| 168 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1640 | …무게는 261g으로 님버스보다 20g 가벼운 정도라… | …무게는 261g으로 님버스보다 17g 가벼운 정도라… |
| 169 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1645 | …스택 43.5mm, 쿠션 10/10</str… | …힐 스택 39.5mm(실측), 쿠션 10/10</str… |
| 170 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1645 | …281g의 묵직함이 오히려 안정감… | …278g의 묵직함이 오히려 안정감… |
| 171 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1666 | …A. 크지 않습니다. 261g과 281g으로 한 발 20g 차이라,… | …A. 크지 않습니다. 261g과 278g으로 한 발 17g 차이라,… |
| 172 | running-shoes-recommend-by-price-2026 | 2026-07.ts:4493 | …/td>199,000281g… | …/td>199,000278g… |
| 173 | pegasus-42-vs-nimbus-28-daily-cushion-2026 | 2026-07.ts:5335 | …아식스 젤 님버스 28(19.9만·43.5mm 맥시멀 쿠션·무릎 … | …아식스 젤 님버스 28(19.9만·힐 39.5mm 맥시멀 쿠션·무릎 … |
| 174 | pegasus-42-vs-nimbus-28-daily-cushion-2026 | 2026-07.ts:5346 | …젤 님버스 28은 20만원대 맥시멀 쿠션(43.5mm 고스택)입니다</l… | …젤 님버스 28은 20만원대 맥시멀 쿠션(힐 39.5mm 고스택)입니다</l… |
| 175 | pegasus-42-vs-nimbus-28-daily-cushion-2026 | 2026-07.ts:5348 | …무릎이 약하거나 체중이 있으면 님버스의 43.5mm 쿠션이 유리합니다<… | …무릎이 약하거나 체중이 있으면 님버스의 힐 39.5mm 쿠션이 유리합니다<… |
| 176 | pegasus-42-vs-nimbus-28-daily-cushion-2026 | 2026-07.ts:5356 | …>젤 님버스 28(19.9만·43.5mm 맥스쿠션)입니다.… | …>젤 님버스 28(19.9만·힐 39.5mm 맥스쿠션)입니다.… |
| 177 | pegasus-42-vs-nimbus-28-daily-cushion-2026 | 2026-07.ts:5366 | …9)286g281g⏎    힐 스택37mm43.5mm(맥시멀)</stro… | …9)286g278g⏎    힐 스택37mm39.5mm(맥시멀)</stro… |
| 178 | pegasus-42-vs-nimbus-28-daily-cushion-2026 | 2026-07.ts:5384 | …젤 님버스 28 — 43.5mm 맥스쿠션, 무릎 보… | …젤 님버스 28 — 힐 39.5mm 맥스쿠션, 무릎 보… |
| 179 | pegasus-42-vs-nimbus-28-daily-cushion-2026 | 2026-07.ts:5385 | …43.5mm 고스택 + FF BLAST… | …힐 39.5mm(실측) 고스택 + FF BLAST… |
| 180 | pegasus-42-vs-nimbus-28-daily-cushion-2026 | 2026-07.ts:5385 | …전작보다 20g 가벼워진 281g에 X-와이드… | …전작보다 가벼워진 278g(실측)에 X-와이드… |
| 181 | pegasus-42-vs-nimbus-28-daily-cushion-2026 | 2026-07.ts:5392 | …님버스 28. 43.5mm 맥스쿠션 + 무릎 … | …님버스 28. 힐 39.5mm 맥스쿠션 + 무릎 … |
| 182 | pegasus-42-vs-nimbus-28-daily-cushion-2026 | 2026-07.ts:5403 | …rong>님버스 28입니다. 43.5mm 맥시멀 쿠션에 부상… | …rong>님버스 28입니다. 힐 39.5mm 맥시멀 쿠션에 부상… |
| 183 | asics-go-free-run-2026 | 2026-08.ts:5468 | …매직스피드 5 (209,000원). 풀 카본 플레이트를 넣고도… | …매직스피드 5 (209,000원). 포크형 카본 플레이트를 넣고도… |

## 4. 고치지 않고 보고만 하는 문장

| 파일:줄 | 글 slug | 내용 | 사유 |
|---|---|---|---|
| 2026-08.ts:4229 | asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 제목 "같은 22.9만원, 55g이 갈린다" (현재 둘 다 20.9만원, 47g 차) | 제목 — 손대지 않음 |
| 2026-09.ts:7849 | asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 제목 "193g vs 239g, 22.9만 vs 25.9만" (현재 201g vs 235g, 20.9만 vs 25.9만) | 제목 |
| 2026-09.ts:3221 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 제목 "km당 274원부터 1,995원까지" (현재 2,195원) | 제목 |
| 2026-05.ts:3430 | asics-magic-speed-4-vs-5-comparison | 제목 "50g 차이의 의미 … 193g 신상 5" (현재 실측 36g 차, 201g) | 제목 |
| 2026-05.ts:3431·3443·3444·3464~3465·3476·3508~3512·3566·3567 | asics-magic-speed-4-vs-5-comparison | MS5 정가 229,000원·22만원대·km당 ₩573, 이월/시즌 가격 전망 | 본문에 '아식스 한국 공식몰 가격(2026-05-25 기준)' 명시 — 날짜 박힌 가격 진술. 무게·스택·와이드는 고침 |
| 2026-05.ts:3651~3652·3669~3670·3731·3786~3791·3853 | asics-superblast-2-vs-3-comparison | 가격·이월가·km당(슈블 2 약 520원, DB 498원)·MS5 '20만' | '2026-05-17 기준' 가격 명시 글. 슈블 2 km당 520원은 이번 감사 이전부터 DB(498원)와 불일치 |
| 2026-05.ts:3659·3704 | asics-superblast-2-vs-3-comparison | 슈블 3 에너지 리턴 '미게시' (DB에는 67%대 실측 존재) | 출처 줄에 '작성 시점 미게시' 명시 — 시점 진술 |
| 2026-05.ts:3654~3655·3711 | asics-superblast-2-vs-3-comparison | 슈블 3 스택 46.5/38.5mm, '+3.5mm' | DB가 공식 46.5/38.5mm를 병기 — 공식 대 공식 비교라 모순 아님 |
| 2026-08.ts:1365·1376·1386·1469 등 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 슈블 3 239g·46.5mm, '무게 21g·스택 6.5mm' | 출처 줄이 '슈퍼블라스트 3 수치는 아식스 공식' 명시 → DB 병기 공식값(239g '기존 표기·미확인', 46.5mm)과 일치. 다만 같은 출처 줄의 "두 모델 모두 RunRepeat 랩 측정치가 없습니다"는 현재 슈블 3에 랩 데이터가 있어 낡은 진술(작성 시점 진술로 보고 유지). 토박스 진술만 고침 |
| 2026-10.ts:1567·1654·1659 | asics-gel-slowcush-korea-launch-2026 | 님버스 28 '공식 힐 스택 43.5mm'·'공식값 281g' | 공식 출처 링크 명시. DB 공식 무게는 283g로 2g 차 → **확인 필요(불명)** |
| 2026-06.ts:1650·1661·1669, 1847~1916 | asics-novablast-6-vs-hoka-clifton-pro-2026 · asics-novablast-6-preview-2026 | 노바 6 '표준 핏'·'와이드 옵션 없음' | 출시 전 작성임을 본문에 명시한 미리보기 — 시점 진술. 단 '와이드 없음'은 현재 DB(와이드 있음)와 모순 |
| 2026-05.ts:4657·4702·4722·4763, 7536·7551 | asics-kayano-32-vs-33-comparison · 2026-asics-kayano-33-launch | 카야노 32 드롭 '10mm(공식)' → 33에서 '-2mm' | 카야노 32 DB는 '공식 8mm / 실측 9.3mm'(수치 변화 없음, 이전부터 8). 카야노 33 DB 텍스트는 '32 대비 -2mm'라 **DB 내부도 엇갈림** — 판단 불가, 섹션 논지(드롭 10→8 아킬레스 부담↓) 전체가 걸려 있어 소유자 판단 필요 |
| 2026-05.ts:4655~4656·7535 | asics-kayano-32-vs-33-comparison 등 | 카야노 32·33 스택 '40/32mm 동일' | 33은 DB 공식 40/32 병기, 32는 DB에 공식 스택 없음(실측 39.9/30.6) — 불명 |
| 2026-09.ts:4808 | asics-metaspeed-edge-plus-review | "풀 마라톤이 목표라면 스카이+를 권합니다"(33mm 스택이 부족하다는 근거) | 의견. 스카이+ 실측 힐 33.5mm로 근거가 약해짐(DB 쿠셔닝 7 vs 6은 유지) |
| 2026-06.ts:525 | marathon-club-runners-pick-running-shoes-2026 | 아식스 "토박스가 넉넉해 발볼 넓은 한국 러너와 궁합" | 브랜드 일반 의견 — 슈블 3·노바 6·레이가 좁음으로 판정돼 근거 약화 |
| 2026-05.ts:4706 | asics-kayano-32-vs-33-comparison | "안정화에서 300g대는 표준 — 둘 다 묵직" | 의견(카야노 32는 이제 295g) |
| 2026-10.ts:1704·1734 | kca-carbon-running-shoes-test-2026 | 매직스피드 5 198g | 소비자원 시험 측정치 인용 — 출처가 다른 측정값 |
| 2026-09.ts:3321 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 줌 플라이 6 229,000원·572원 (DB 209,000원·523원), 1단 표 km당 정렬도 어긋남 | 나이키 값 단독 행 — 범위 밖 |
| 2026-07.ts:1544, 2026-08.ts:3413 | 페가수스 42·에보 SL 비교글 | 페가수스 42 '표준', 에보 SL '표준(71.6mm)' (DB 둘 다 narrow) | 타 브랜드 단독 칸 — 범위 밖 |
| 2026-06.ts:598 | superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026 | 에보 SL '표준' (DB narrow) | 타 브랜드 |
| 2026-07.ts:1624, 2026-05.ts:7694 등 | 1080 v15 관련 | 1080 v15 261g (DB 255g) | 뉴발란스 단독 값. 님버스와의 무게 차는 글 안의 261g 기준으로 재계산(17g) — 뉴발란스 정정 시 함께 재계산 필요 |

## 5. 논지 영향

| 글 | 영향 |
|---|---|
| asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | '같은 가격' 논지는 유지(둘 다 209,000원으로 내려감). '55g이 갈린다'는 47g로 약화, '둘 다 와이드 없음'은 MS5 2E로 뒤집혀 발볼 넓은 러너 결론이 MS5 쪽으로 더 기움. 제목은 옛 값 그대로 |
| asics-magic-speed-4-vs-5-comparison | '와이드 SKU 양쪽 모두 ❌' → 5만 2E. 발볼 넓은 러너 결론 일부 변경(2E는 5, 4E는 여전히 둘 다 비추). 무게 차 50g→36g |
| asics-magic-speed-5-vs-superblast-3-carbon-vs-plateless-2026 | 가격 차 3만원 → **5만원**('3만원은 성격의 값'·FAQ 질문 '5만원'으로 정정), 무게 차 46g → 34g(무게 기준을 공식→실측으로 통일). 발볼: MS5 2E 있음, 슈블 3 좁음 판정 |
| carbon-plate-running-shoes-lineup-tier-guide-2026 | 핵심 수치 '7.3배' → **8.0배**, 3단 가격대 33.9~43.9만, 와이드 제공 6종(20%) → **7종(23%)**. 논지는 오히려 강화 |
| asics-metaspeed-edge-plus-review | '스카이+보다 낮은 스택이라 지면 감각' 근거가 사라져(스카이+ 실측 힐 33.5mm) **드롭(8mm 대 5mm) 근거로 교체**. 이 글의 '스카이+와 다른 이유' 핵심 근거가 바뀜 |
| asics-superblast-2-vs-3-comparison | **'v3 토박스 확장' 논지가 반대로 뒤집힘**(실측 v3 71.6mm < v2 72.3mm). 해당 표·매트릭스·FAQ·결론 5곳 정정, '발볼 표준~약간 넓음' 추천을 v2 우선으로 바꿈. 슈블 2 에너지 리턴 71% → 65.5% |
| new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | '역설적이지만 좁다는 쪽에만 와이드' 구도가 약화 — 슈블 3도 좁은 편으로 판정. '둘 다 좁지만 와이드는 SC 레벨에만'으로 정정 |
| superblast-3-vs-evo-sl-vs-mach-6 · adidas-hyperboost-edge-vs-asics-superblast-3 | '전작보다 넓어진 토박스'·'발볼 표준' 근거 삭제 → '좁은 편' |
| hoka-bondi-9-vs-asics-nimbus-28 · 1080 v15 vs 님버스 28 | '님버스가 스택이 더 높다' 근거 약화 — 실측 힐 39.5mm로 본디 9(41)·1080 v15(40)보다 낮음. 전족(34.3mm)은 더 두꺼움. FAQ를 전족 기준으로 정정. '최대 쿠션'(쿠셔닝 10)은 DB 점수로 유지 |
| beginner-running-shoes-lineup-tier-guide-2026 | 노바 6이 '좁은 편 + 와이드 있음' 그룹으로 이동 |
| asics-running-shoes-lineup-tier-guide-2026 | 발볼 표: MS5 → 와이드 있음, 슈블 3 → 좁음. MS5 행을 가격순 위치(20.9만)로 이동 |

## 6. 검증

| 명령 | 결과 |
|---|---|
| `curl -s -o /dev/null -w "%{http_code}" https://allrunabout.com` | 200 |
| `npm ci` | 성공 |
| `npm run validate` (작업 전 기준선) | 에러 0 · 경고 9 |
| 치환 스크립트(`python3 -I`, 항목마다 예상 횟수 1회 검증) | 183건 모두 예상 횟수 일치(불일치 1건은 중단 후 앞뒤 행을 넣어 유일하게 다시 지정) |
| `npm run validate` (작업 후) | 에러 0 · 경고 9 (기준선과 같음) |
| `npm run build` | exit 0 (Compiled successfully, 정적 페이지 1124개, 광고·GA 로딩 점검 정상) |
| 잔여 옛 값 재검색(신발명 ±200자 안 옛 값 패턴) | 남은 것은 모두 4절의 '보고만' 항목 |

작업 커밋: `5978a815` (브랜치 `cloud/blog-sync-asics`, push 완료). main push·머지·PR 없음.
