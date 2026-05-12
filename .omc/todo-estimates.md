# 추정값 기반 신발 데이터 — 후속 업데이트 트리거

신상 신발(출시 <3개월) 데이터 중 RunRepeat 랩 테스트 미게시로 추정값 입력한 엔트리.
실측값 게시되면 `specs` / `detailedSpecs` 업데이트 필요.

## 미처리

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
