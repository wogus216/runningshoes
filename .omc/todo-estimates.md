# 추정값 기반 신발 데이터 — 후속 업데이트 트리거

신상 신발(출시 <3개월) 데이터 중 RunRepeat 랩 테스트 미게시로 추정값 입력한 엔트리.
실측값 게시되면 `specs` / `detailedSpecs` 업데이트 필요.

## 미처리 (추가)

- [ ] **asics-blazeblast** (추가 2026-07-14, 글로벌 출시 2026-08-01): 블로그 프리뷰만 발행(`asics-blazeblast-preview-2026`), 신발 DB는 미생성. 아식스 공식 발표(7/1) 확정 사실 — $150·FF 블라스트 맥스+전족 트램폴린 포드·ASICSGrip 2.5mm 러그. 무게(남 252g/여 221g 추정)·스택 40mm·드롭 8mm·컬러 3종·와이드 미제공은 해외 프리뷰 매체(RunToTheFinish) 추정치라 공식 아님. 재확인 트리거: ① 8/1 글로벌 출시 후 RunRepeat 랩 게시 ② 한국 asics.co.kr 등재·정가 확정 시 → 신발 DB 추가 + 프리뷰를 정식 리뷰로 전환. 재확인 시점 **2026-09**.

- [ ] **hoka-speedgoat-7 이미지 미확보** (추가 2026-07-14): 신발 DB 정식 추가 완료(RunRepeat 랩 실측 기반, `hoka-speedgoat-6-vs-7-comparison-2026` 발행). 공식 이미지 미확보라 `image`/`images` 필드 없음(validate 경고만, 에러 아님) → `/best/trail` 매트릭스 미편입 상태(hasMinimumData가 image 필수). 후속: HOKA 공식 트레일 제품 이미지(dms.deckers.com) 확보 → image/images 추가 → best/trail 편입. 한국 정가(219,000원)는 무신사 확인가이며 호카코리아 공식 사이트 등재는 미확인 — 확인되면 detailedSpecs.price 문구 갱신.

- [ ] **saucony-paramount-max** (추가 2026-07-14, 미국 출시 2026-07-01): 정보성 블로그 프리뷰만 발행(`saucony-paramount-max-preview-2026`), 신발 DB 미생성(한국 미출시 판단). 확정 사실 — $199.95·힐43/전족37mm·드롭6mm·풀렝스 IncrediRUN(엔돌핀 엘리트3 동일 폼, ~17% 더 단단히 튜닝)·카본 플레이트 없음. RunRepeat 랩 미게시(페이지 자체 없음). 재확인 트리거: saucony.co.kr 등재·한국 정가 확정 시 → 신발 DB 추가 + 정식 리뷰 전환. 재확인 시점 **2026-09**.

- [ ] **brooks-ghost-max-4 / brooks-hyperion-elite-6** (추가 2026-07-14, 미국 출시 2026-08-01): 정보성 블로그 프리뷰 묶음 발행(`brooks-ghost-max-4-hyperion-elite-6-preview-2026`), 신발 DB 미생성(한국 미출시). 하이페리온엘리트6이 BITR A Tier·"브룩스 첫 진짜 레이싱화" 평가로 화제성 큼(드롭 11.2→7mm, 플레이트 재설계). RunRepeat 랩 둘 다 미게시. 재확인 트리거: brooksrunning.co.kr 등재·한국 정가 확정 시 → 신발 DB 추가(하이페리온엘리트6 우선) + 정식 리뷰 전환. 재확인 시점 **2026-09**.

- [ ] **puma-velocity-nitro-5 보류** (조사만 2026-07-14, 미국 출시 2026-07-09): 출시 5일차 시점 조사 결과 RunRepeat·BITR·RTR 전부 리뷰 미게시(유튜브 리뷰만 존재, 승인 소스 아님), 공식 스펙마저 출처 간 무게(230g vs 247g)·스택 수치 불일치 확인 — 근거 부족 판단해 이번 라운드 발행 보류(글 없음, DB 추가도 없음). 확인된 것: 드롭 8mm(3소스 일치, 전작 9.7~10mm에서 낮아짐), "넓어진 NITROFOAM 플랫폼"이 핵심 변경점, 가격 $140 동일 유지. 재확인 시점 **2026-08**(BITR/RTR 정식 리뷰 게시 예상 시점) — 그때 4 vs 5 비교글 재검토.

## 미처리

- [~] **asics-novablast-6 DB 추가 완료 (2026-07-08, 커밋 예정) — 랩·이미지·와이드만 후속**
  - **2026-07-08 진행**: 한국 출시(7/9) 하루 전, 한국 정가 **179,000원** 확정(러닝위키+무신사+검색 3소스 교차확인, asics.co.kr은 출시 전이라 직접 확인 불가). → ① 신발 DB `asics-novablast-6` 추가(공식 스펙 확정 + 랩은 노바5 실측 추정 + 신상 면책, **image 없이 등록**) ② 프리뷰 글 확정가·출시일 갱신(`asics-novablast-6-preview-2026` updatedAt 7/8) ③ 노바5 vs 6 비교글 발행(`asics-novablast-5-vs-6-comparison-2026`) ④ 클프로 비교글 노바6 가격 정정. 노바5는 공존 유지(카야노32/33 선례), 5 참조 다수는 미변경.
  - **남은 후속 트리거**: ⓐ **RunRepeat 랩 게시**(현재 404) 시 `specs`(responsiveness/cushioning)·detailedSpecs 실측 반영, 프리뷰/비교글 caption 갱신 — 재확인 **2026-08~09** ⓑ **asics.co.kr 라이브(7/9)** 후 **와이드(2E) 여부** 확인 → `koreanFootFit.wideOptions`(현재 false 보수) 및 detailedSpecs·비교글 "와이드 출시 후 확인" 문구 갱신 ⓒ **공식 제품 이미지** 확보(ASICS Scene7 fmt=png-alpha) → `image`/`images` 추가 → `/best/daily` 매트릭스 편입(현재 이미지 없어 제외). [[shoe-official-image-sources]]
  - (구) **2026-06-23: 블로그 출시 전 미리보기 발행** (`asics-novablast-6-preview-2026`) — 7/1 글로벌 출시 선점 글. 2026-07-08 확정가로 갱신 완료.
  - **현 상태(2026-06-03)**: 글로벌 출시 **2026-07-01**(발매 전). 한국 asics.co.kr 미노출 → **한국 출시일·공식가 미발표**. RunRepeat 랩 **미게시(404 직접 확인)**. DOR·BITR·RTR 주관 리뷰는 2026-05 게시됨(사전 샘플).
  - **보류 이유**: 한국 공식가 + RunRepeat 정량 랩(SA/HA/에너지리턴/토박스mm)이 둘 다 없어 추정 범벅 → 추가 시 곧 전면 재작성 필요. 노바블라스트는 사이트 참조 多 인기 모델이라 정확도 우선.
  - **추가 트리거(둘 다 충족 시)**: ① asics.co.kr 노바블라스트 6 정식 출시·한국 정가 ② RunRepeat 랩 게시. 재확인 시점 **2026-08(출시 +1~2개월)**.
  - **확정된 공식 스펙(변경점)**: 힐 41.5/전족 33.5mm·드롭 8mm(5와 동일 스택), 무게 253g(5 254g), 미드솔 = FF Blast Max(힐/미드풋) + **FF Turbo Squared(전족부 트램폴린 포드, Megablast 계열 ATPU)** 듀얼 폼, 어퍼 엔지니어드 위브(Superblast 3 원단), 아웃솔 전족부 **AsicsGrip**(습식 접지↑) + 힐 AHAR LO, 힐 폭 90→85mm(약간 좁아짐). 글로벌 $155.
  - **전작 5 RunRepeat 실측 기준선**: weight 254g · 힐 40.9/전족 33.5mm · 드롭 7.4mm · SA 힐 141/전족 134 · HA 13.0 · 에너지리턴 힐 63.6%/전족 66.5% · 토박스(엄지) 74.4mm · 아웃솔 내구 우수(~800km)나 토박스 내구 취약(1/5). 한국 정가 169,000원.
  - **추정 방향(랩 게시 전 임시 작업 시)**: 전족부 FF Turbo Squared 추가로 전족 SA·에너지리턴 상향(에너지리턴 전족 68~72% 추정), 힐은 FF Blast Max 유지로 5 근사. DOR 지적 — 힐 스트라이커 비추/힐-전족 전환 끊김. 한국가 179,000~189,000 추정.
  - 정식 추가 시 노바블라스트 5 → 6 **버전 비교 글**(페가수스 41vs42 패턴) 동반 가능. 기존 본문/추천의 "노바블라스트 5" 참조 7곳 업데이트 검토.

- [x] **트레일화 6종 이미지 + best 카테고리 페이지** (데이터 2026-05-28, 이미지 2026-05-29 완료)
  - 6종 공식 이미지 입력 완료 → `image`/`images` 필드 연결. matrices.ts 트레일 매핑 추가 → `/best/trail` 생성됨
  - ASICS·HOKA·Nike 공식 원본은 투명 PNG(배경제거 불필요, --skip-bg). **adidas 2종은 연회색 스튜디오 배경**(투명 변환 실패 — 흰/연두 신발 vs 연회색 대비 부족) → 깔끔하지만 투명 아님. 더 나은 투명샷 확보 시 교체 가능
  - asics 2종만 4컷(side/front/back/outsole), 나머지 side 1컷 → 추가 각도는 여유 시 보강

- [ ] **트레일 데이터-이미지 세대/컬러 불일치** (2026-05-29 발생, 사용자 확인 대기)
  - [x] **adidas-terrex-agravic-speed-ultra**: 2026-05-29 데이터를 2세대(Speed Ultra 2)로 갱신 완료 — 8mm 드롭·44/36mm·265g·힐 슬링샷·Lightstrike Pro 리튜닝. slug 유지(URL 안정). best-trail 글 6번·비교표 동기화. ⚠️ 2025-12 출시 랩 미게시라 공식 발표 기준 + **2세대 한국 정가 미확정(279,000 추정)** → adidas.co.kr HQ5066 확정가 확인 시 업데이트
  - **asics-gel-venture-10**: 이미지가 "우먼" 컬러웨이(외형 동일, 컬러만 여성용) — 큰 문제 아니나 인지
  - **adidas-terrex-agravic-4** 한국 정가 미확정 → 209,000원(추정). adidas.co.kr 확정가 확인 시 업데이트

- [ ] **Merrell Agility Peak 6**: best-trail 글 5번 추천이나 Merrell 브랜드 인프라(`src/lib/data/brands/`) 없어 미추가. 브랜드 추가 시 함께

- [ ] **asics-gel-kayano-33** (추정 입력 2026-05-12, 출시 D-20)
  - 출시일: 2026-06-01 글로벌
  - 공식 발표 기준: 무게 298g · 힐 40mm/포어풋 32mm · 드롭 8mm · FLUIDSUPPORT · FF BLAST MAX+PLUS 듀얼 폼
  - 추정값 영역:
    - `specs.cushioning: 9` (FF BLAST MAX 도입, 32 동일 유지 — 향상 가능)
    - `specs.responsiveness: 7` (32의 6 대비 +1)
    - `specs.stability: 9` (32의 10 대비 -1, FLUIDSUPPORT 검증 부족)
    - `specs.durability: 650km` (32의 700km보다 보수적)
    - `priceAnalysis.msrp: 209000` (글로벌 $170 + 32 한국가 199,000 참고)
    - `koreanFootFit.wideOptions: true` (32 패턴 유지 예상)
  - 후속 확인 시점: 2026-09 (출시 +3개월)
  - 우선 확인 항목:
    - RunRepeat SA 힐/전족부, HA, 에너지 리턴%, 토박스 너비
    - 한국 정가 (asics.co.kr 확정)
    - 와이드 옵션(2E·X-와이드) 한국 발매 여부
  - **2026-06-12 재확인(GA 트래픽 1위라 조기 확인)**: RunRepeat 여전히 **미게시**(출시 11일). 공식 스펙(드롭 8mm·무게 298g·힐 39~40/전족 31~32mm·FF BLAST MAX+PLUS 듀얼레이어·FLUIDSUPPORT) 교차검증 확인. **DOR 리뷰 게시** — Matt Klein "32는 올해의 안정화였지만 33은 탑3에도 못 든다", non-responsive("껌처럼 달라붙음"), FLUIDSUPPORT가 4D보다 미드풋 지지 약화, 발볼 덜 좁아져 standard 적합. Meta 내구성 400-600km 추정. 한국 정가 asics.co.kr 봇차단 미확인(검색서 209,000 언급), KREAM 2E 등록=한국 와이드 발매 가능성↑. BITR/RTR 미게시. → 정량 확정 불가, 9월 재확인 유지. DOR 혹평은 향후 specs.responsiveness 하향/editorComment 반영 검토.

- [ ] **adidas-terrex-agravic-4** (2026-06-12 재확인): RunRepeat 랩 **게시 확인** — DB가 이미 실측과 일치(weight 283g·힐32.6/전족23.5mm·드롭9.1·토박스73.0mm standard·와이드 false). 추가 실측: SA 힐122/전족102, 에너지리턴 힐50.3/전족55.2%. 출시 2026-02-01. BITR A등급·RTR 9.4/10. **데이터 정확성 검증 완료 — 갱신 불요**. 유일한 미확정 = 한국 정가(adidas.co.kr 403 차단, US $145). Chrome MCP 로그인 세션으로만 확인 가능. 데이터 신뢰도는 충분하나 정가 null 대신 209,000 추정 유지 중.

- [ ] **hoka-clifton-11** (추가 2026-06-25, 출시 2026-07-01): 비교글 `hoka-clifton-11-vs-10-comparison` 발행(출시 전 추정값). 출시 후 재확인 — ① RunRepeat 랩 게시 시 무게(공식 ~280g vs 핸즈온 실측 258g 중 어느 쪽인지)·실측 스택 확정 ② hoka.com/ko-kr 한국 정가 확정(현재 199,000원 추정, US $154.95 동결) ③ 신발 DB(`hoka-clifton-11`)는 제품 이미지 확보 후 추가 검토 — 현재는 novablast-6 선례대로 비교글만, DB 미생성. 폼=CMEVA로 클리프톤 10과 동일 확정(어퍼/삭라이너만 변경).

- [ ] **saucony-endorphin-elite-3 랩 데이터 갱신** (2026-06-30 신발 DB 생성 + 단독 프리뷰 발행 완료): 신발 DB(`saucony-endorphin-elite-3`)·프리뷰글(`saucony-endorphin-elite-3-preview-2026`) 작성 완료. **확정값 반영**: 207g(전작 +10g)·힐39.5/전족31.5mm·드롭8mm·포크형 카본·직각형 넓은 토박스(엘2 narrow→standard)·측면컷아웃 제거로 안정성 5(추정)·369,000원·7/1 한국출시. **미확정(추정 표기됨)**: 충격흡수 SA·에너지리턴% 등 RunRepeat 랩 미게시 → 엘리트2(80.6%) 기준 추정으로 detailedSpecs에 '추정' 명시. 후속 — RunRepeat 엘리트3 랩 게시 시 ① specs(responsiveness 9/cushioning 7) 실측 보정 ② detailedSpecs 에너지리턴 확정 ③ 라인업 가이드(`saucony-endorphin-lineup-2026-guide`) 표의 엘리트3 잠정 수치(~197g 엘2참고치)도 207g 확정값으로 갱신. 재확인 2026-09. 출처: BITR(Tier B)·DOR·RTR(5인 9.4/10)·saucony.co.kr 교차확인.

- [ ] **hoka-clifton-pro** (추가 2026-07-09, 글로벌 출시 당일 프리뷰 발행): 블로그 프리뷰(`hoka-clifton-pro-preview-2026`) 발행 완료 — BITR(Tier B, Design A/Value A/Performance B)·RTR(8.7~9.2/10, 클리프톤11과 5개 항목 비교) 실측 종합. 확정: $165·296g(M)/242g(W)·42/34mm·8mm 드롭·ProGlide+(초임계 EVA)·공격적 MetaRocker·거셋 텅. **한국 출시 자체가 미확인**(hoka.com/ko-kr 미인덱싱, 러너스클럽/굿러너/다나와/무신사/네이버쇼핑 리스팅 전무, 클리프톤10 출시 때와 달리 한국 언론 보도 없음) → **신발 DB 추가 보류**. RunRepeat 랩(SA/HA/에너지리턴/토박스mm)도 미게시(404). 재확인 트리거: ① 한국 정식 출시·정가 확정 시 신발 DB `hoka-clifton-pro` 추가 + 프리뷰를 정식 리뷰로 전환 ② RunRepeat 랩 게시 시 정량 수치 반영. 재확인 시점 **2026-09**.

- [ ] **nike-acg-zegama-trail** (추가 2026-07-10, 신발 DB 생성 + 리뷰 발행 완료): BITR 실측 확정 — 336g(M10)/273g(W8)·힐38/전족34mm·드롭4mm·ZoomX+Cushlon3.0·Vibram Megagrip·퍼포먼스 S티어. **미확정**: ① 한국 정가 219,000원은 nike.com/kr 봇차단으로 **검색 교차검증만**(직접 페이지 확인 아님) — Chrome MCP 로그인 세션으로 재확인 필요 ② 내구성 500km는 실측 아닌 유사 트레일화 기준 추정 ③ specs.stability(6)·responsiveness(7)는 전작 제가마2 RunRepeat 랩(에너지리턴 60.2/68.9%) 기반 추정, 3세대 자체 랩 데이터 미확인. 재확인 시점 **2026-09**(출시 +5개월). 참고로 전작 "제가마 2"(nike.com/kr 별도 판매 중, 219,000원 리스팅 확인됨)는 여전히 신발 DB 미등록 — 우리 사이트는 3세대(ACG)만 등록함, 필요시 2세대도 추가 검토.

## 완료

- [x] **nike-pegasus-42** (추정 입력 2026-04-22 → 실측 갱신 2026-05-07)
  - RunRepeat 랩 데이터 2026-04-25 게시 확인 → 추정에서 실측으로 업데이트
  - 주요 발견:
    - 공식 vs 실측 5mm 불일치 (전족부 27→22mm, 드롭 10→14mm)
    - "에너지 리턴 +15%" 공식 주장 → 실측 힐 +1.6%p / 전족부 0%p
    - 토박스 "확대" 주장 → 실측 41(72.9mm) → 42(72.3mm)로 미세 감소
    - 한국 와이드 옵션 정식 출시 (남성·여성 169,000원 동일) → `wideOptions: true`로 수정
  - `specs.cushioning: 9 → 8` (실측 SA 131 기준 하향)
  - `specs.responsiveness: 8 → 7` (실측 에너지 리턴 기준 하향)
  - 블로그 단독 리뷰 발행: `/blog/nike-pegasus-42-review`
- [ ] puma-deviate-pure-nitro: RunRepeat 랩 데이터 게시 확인 후 specs/detailedSpecs 업데이트 (추가 2026-06-05, 출시 2026-06-04 — 3~6개월 뒤 재확인)
- [ ] on-cloudboom-strike-2: RunRepeat 랩(스택/드롭/에너지리턴) 게시 + 한국 공식가 확정 확인 후 블로그 프리뷰(on-cloudboom-strike-2-preview-2026) 수치 갱신, 신발 DB 추가 검토 (추가 2026-07-02, 재확인 2026-09)
- [ ] 2026-mudo-run-gyeongju: 무도런 경주 접수 일정·참가비·종목 공식 발표 시 블로그 글 + marathon/september.ts(status 접수예정→접수중, raceInfo) 업데이트. @most267_official 모니터링, 상반기 패턴상 8월 중 발표 유력 (추가 2026-07-15)
