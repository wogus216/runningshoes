# 추정값 기반 신발 데이터 — 후속 업데이트 트리거

신상 신발(출시 <3개월) 데이터 중 RunRepeat 랩 테스트 미게시로 추정값 입력한 엔트리.
실측값 게시되면 `specs` / `detailedSpecs` 업데이트 필요.

## 미처리

- [ ] **asics-novablast-6 추가 보류 — 정식 출시·랩 게시 후 진행** (2026-06-03 조사, 사용자 판단으로 대기)
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
