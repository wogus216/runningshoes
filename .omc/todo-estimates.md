# 추정값 기반 신발 데이터 — 후속 업데이트 트리거

신상 신발(출시 <3개월) 데이터 중 RunRepeat 랩 테스트 미게시로 추정값 입력한 엔트리.
실측값 게시되면 `specs` / `detailedSpecs` 업데이트 필요.

## 미처리

- [ ] **트레일화 6종 이미지 + best 카테고리 페이지** (데이터 입력 2026-05-28)
  - 추가된 트레일화: adidas-terrex-agravic-4, adidas-terrex-agravic-speed-ultra, asics-metafuji-trail, asics-gel-venture-10, hoka-tecton-x-3, nike-ultrafly
  - 현재 상태: 데이터·vs 페어(15개)·신발 상세·best-trail 글 링크 완성. **이미지 미입력**(데이터 먼저 전략)
  - 후속 1 — **이미지**: 리뷰 사이트(BITR/RTR)에서 수집 → 배경제거 → WebP → 각 신발 `image`/`images` 필드. `npm run images` 활용
  - 후속 2 — **best 트레일 카테고리 페이지**: `src/lib/pseo/matrices.ts`의 `categorySlugMap`/`categoryEnglish`에 `트레일: 'trail'`/`'Trail'` 추가 + `categoryEntries()` angles에 트레일 intro+faq 작성. ⚠️ `hasMinimumData()`가 `s.image` 필수라 **이미지 입력 후에야 best 매트릭스에 포함됨** → 이미지와 함께 진행
  - 후속 3 — **Merrell Agility Peak 6**: best-trail 글 5번 추천이나 Merrell 브랜드 인프라(`src/lib/data/brands/`) 없어 미추가. 브랜드 추가 시 함께
  - 가격 확인 필요: **adidas-terrex-agravic-4** 한국 정가 미확정 → 209,000원 (추정) 입력함. adidas.co.kr 확정가 확인 시 업데이트

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
