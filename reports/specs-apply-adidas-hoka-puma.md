# specs 점수 반영 — adidas · HOKA · PUMA (2026-10-20)

> 적용 규칙: `docs/references/shoe-data-collection.md` '수집한 데이터 → Shoe 타입 매핑'(2026-10-20 개정).
> cushioning = **힐 SA**(150+→10, 140~150→9, 120~140→8, 100~120→7) / responsiveness = **전족부 에너지 리턴**(75%+→10, 70~75→9, 65~70→8, 55~65→7, 45~55→6, 전족 없으면 힐 값). 경계값은 상위 구간 포함.
> 작업 브랜치: `cloud/specs-apply-adidas-hoka-puma` (기준 `origin/main` e737b32). 수치는 모두 신발 파일 본문에서 원문으로 다시 확인했다.
> 검증: `npm run validate` 에러 0(경고 9, 기준선과 동일) · `npm run build` 통과.

## 1. 변경 표 (7종 · 9건)

| 신발 | 필드 | 이전 → 이후 | 근거 수치 (파일 원문 위치) |
|---|---|---|---|
| adidas-adizero-evo-sl | cushioning | 8 → **9** | 힐 SA 147 (L20 description, L22 editorComment) |
| adidas-adizero-sl2 | cushioning | 7 → **8** | RunRepeat 힐 SA 136 (L98) |
| adidas-terrex-agravic-4 | responsiveness | 6 → **7** | 에너지 리턴 전족 55.2% (L14) — 경계값 55 → 7 |
| hoka-speedgoat-7 | responsiveness | 6 → **7** | RunRepeat 실측 에너지 리턴 전족 60.4% (L21) |
| puma-deviate-pure-nitro | responsiveness | 8 → **9** | 에너지 리턴 전족 72.9% (L21 editorComment, L65 features, L89) |
| puma-magmax-nitro-2 | cushioning | 8 → **9** | SA 힐 141 (L21, L65, L84) |
| puma-magmax-nitro-2 | responsiveness | 8 → **6** | 에너지 리턴 전족 54.6% (L21, L84) |
| puma-magnify-nitro-3 | cushioning | 9 → **8** | 힐 SA 136 (L79, RunRepeat) |
| puma-magnify-nitro-3 | responsiveness | 6 → **9** | RunRepeat 에너지 리턴 전족 73.6% (L88) |

커밋: adidas 1 · HOKA 1 · PUMA 1 (브랜드별).

### 이전 감사 보고서와 다른 점 (파일 원문 우선)

이전 보고서는 반응성을 **힐** 수치로 계산했지만, 개정 규칙은 **전족부** 기준이다. 파일 원문에 전족 값이 함께 적혀 있어 결과가 달라진 신발:

| 신발 | 보고서 근거 | 파일 원문 전족 값 | 새 기대 |
|---|---|---|---|
| adidas-adizero-evo-sl | 힐 74.3% | 전족 73.5% (L22, L85) | 9 (현재 9, 유지) |
| adidas-hyperboost-run | 힐 71.6% | 전족 72.8% (L25, L61, L93) | 9 (현재 9, 유지) |
| adidas-supernova-rise-3 | 힐 58.8% | 앞발 62.8% (L15) | 7 (현재 7, 유지) |
| adidas-terrex-agravic-4 | 힐 50.3% | 전족 55.2% (L14) | 7 (현재 6 → **변경**) |
| adidas-terrex-agravic-speed-ultra | 힐 64.5% (불일치로 보고) | 전족 70.2% (L14, L77) | 9 (현재 9, **유지** — 보고서의 '불일치'는 해소) |
| hoka-speedgoat-7 | 힐 54.4% | 전족 60.4% (L21) | 7 (현재 6 → **변경**) |
| puma-deviate-pure-nitro | 힐 68.9% | 전족 72.9% (L21, L65, L89) | 9 (현재 8 → **변경**) |
| puma-magmax-nitro-2 | 힐 50.1% | 전족 54.6% (L21, L84) | 6 (현재 8 → **변경**) |
| puma-magnify-nitro-3 | 힐 65.2% | 전족 73.6% (L88) | 9 (현재 6 → **변경**) |
| puma-velocity-nitro-5 | 힐 64.0% | 전족부 69.3% (L23, L79, L99) | 8 (현재 8, 유지) |

수치 자체가 보고서와 다른 경우는 없었다.

## 2. 새 규칙과 일치해 바꾸지 않은 신발

| 신발 | C (근거) | R (근거) |
|---|---|---|
| adidas-adizero-evo-sl | (변경) | 9 = 전족 73.5% |
| adidas-hyperboost-run | 9 = 힐 SA 147 | 9 = 전족 72.8% |
| adidas-supernova-rise-3 | 9 = 힐 SA 140 (경계값 → 9) | 7 = 앞발 62.8% |
| adidas-terrex-agravic-speed-ultra | — (아래 3절) | 9 = 전족 70.2% (경계값 → 9) |
| adidas-hyperboost-edge | 10 = 힐 SA 154 | 9 = 힐 73.6% (전족 ER 없음, 힐 기준) — 아래 3절 참고 |
| puma-deviate-pure-nitro | 9 = 힐 SA 141 | (변경) |
| puma-velocity-nitro-5 | 8 = 힐 SA 129 | 8 = 전족부 69.3% |

## 3. 바꾸지 않은 신발과 이유

### 매핑이 애매해 보류 (운영자 판단 필요)

| 신발 | 필드 | 현재 | 원문 수치·위치 | 규칙대로면 | 보류 이유 |
|---|---|---|---|---|---|
| hoka-arahi-8 | C | 9 | "138 SA" (L15, L78 등) | 8 | SA 부위(힐/전족) 미표기 — 규칙은 '힐 SA' |
| hoka-bondi-9 | C | 10 | "146 SA" (L15, L74, L82) | 9 | SA 부위 미표기 |
| hoka-bondi-9 | R | 5 | "RunRepeat 측정 에너지 리턴 60%대" (L74) | 7 또는 8 | 부위 미표기 + 범위 표기(60~69%가 7·8 두 구간에 걸침) |
| hoka-clifton-10 | C / R | 9 / 6 | "147 SA" (L15) / 에너지 리턴 52.3% (L82) | 9 / 6 | 부위 미표기 — 계산해도 현재와 같아 영향 없음 |
| hoka-mach-x-3 | R | 9 | 전족부 에너지 리턴 69.3% (L15, L74) | **8** | 수치 출처 미표기(파일 어디에도 RunRepeat 등 측정 주체 없음) — 매핑표 '미정: 출처 미표기 수치의 근거 인정 여부' |
| hoka-rocket-x-3 | R | 10 | 에너지 리턴 78% (L78, L82) | 10 | 출처·부위 미표기 — 계산해도 현재와 같음 |
| hoka-tecton-x-3 | R | 8 | 에너지 리턴 70% (L21, L56) | 9 | 출처·부위 미표기 |
| hoka-speedgoat-6 | R | 5 | 에너지 리턴 48% (L19, L81) | 6 | 출처·부위 미표기 |
| hoka-mach-6 | R | 8 | 에너지 리턴 65.4% (L78, L82) | 8 | 부위 미표기 — 계산해도 현재와 같음 |
| puma-deviate-nitro-elite-3 | R | 10 | RunRepeat 에너지 리턴 77%대 (L79, L84) | 10 | 부위 미표기 — 계산해도 현재와 같음 |
| puma-fast-r-nitro-elite-3 | R | 9 | "에너지 리턴 80%+" (L96 detailedSpecs) | 10 | 출처·부위 미표기, 하한 표기 |
| puma-velocity-nitro-4 | R | 8 | 에너지 리턴 67.5% (L79) | 8 | 부위 미표기 — 계산해도 현재와 같음 |
| adidas-terrex-agravic-speed-ultra | C | 8 | 전족 SA 131만 (L85), 힐 SA 없음 | — | 쿠션은 힐 SA 기준이고 전족 대체 규칙이 없음 |
| adidas-hyperboost-edge | R | 9 | 힐 에너지 리턴 73.6%만 (L18, L21, L83) | 9 | 점수는 일치. 규칙상 '힐 기준' 명시 대상이지만 점수 변경이 없어 detailedSpecs는 건드리지 않음 — 표기 추가 여부 확인 필요 |

### 수치 없음 (판단불가)

- adidas: adios-pro-4, boston-13, supernova-rise-2(전작 SA 127은 라이즈 3 파일 인용 → 사용 안 함), adizero-sl2 R, terrex-agravic-4 C
- HOKA: cielo-x1(L22 −24.6%는 마모 연구 인용), gaviota-6, mach-6 C, mach-x-3 C, rocket-x-3 C, speedgoat-6 C, speedgoat-7 C, tecton-x-3 C
- PUMA: deviate-nitro-3, deviate-nitro-4, deviate-nitro-elite-4, deviate-nitro-elite-3 C, fast-r-nitro-elite-3 C, velocity-nitro-4 C

### 대상 외

- adidas-adios-pro-5: `specs` 블록 없음(신상). 에너지 리턴 힐 75.1%·전족 80.4%(L17)만 있음.
- `(추정)` 표기 신상 신발: 대상 32종 중 `specs` 점수 근거가 `(추정)`인 경우 없음(speedgoat-7·deviate-pure-nitro의 `(추정)`은 durability 필드뿐 — 손대지 않음).
- stability·durability·weight·drop·toBoxWidth·rating·가격: 규칙상 변경하지 않음.

## 4. 점수 변경으로 고친 문장

| 파일:줄 | 이전 | 이후 |
|---|---|---|
| `src/lib/data/shoes/adidas/adidas-adizero-sl2.ts:19` (editorComment) | "쿠셔닝 7/10으로 장거리는 슈퍼노바 라이즈(9/10)에 밀립니다" | "쿠셔닝 8/10으로 장거리는 슈퍼노바 라이즈(9/10)에 밀립니다" |

- 다른 변경 신발 6종의 파일에는 'N/10'·'쿠션 N'·'반발 N' 형태로 옛 점수를 말하는 문장이 없었다(본문은 랩 수치로 서술).
- '가장 푹신/가장 반발' 류 비교 논지 문장: 대상 파일에 없음. 비교 논지 수정 없음.
- 참고: magnify-nitro-3는 반응성 6 → 9로 크게 올랐지만 본문(L88)은 "에너지 리턴 … 평균 이상이지만"으로 수치와 모순되지 않는다. magmax-nitro-2는 반응성 8 → 6이 되었고 본문의 "반발로 밀어주기보다 충격을 받아내는 쪽"과 오히려 맞게 됐다.

## 5. 블로그에서 옛 점수를 말하는 문장

`src/lib/data/blog/posts/*.ts`, `src/lib/data/brands/*.ts`, `src/lib/data/popular.ts` 에서 변경 7종의 이름(한·영·slug)과 바뀐 필드의 옛 점수('쿠션/쿠셔닝 N', '반발/반응성 N', 'N/10', 'N점')를 함께 검색했다.

- **옛 점수를 직접 말하는 문장: 없음.**
- 참고(수정 불필요하나 확인 권장): `2026-08.ts:3367` (에보 SL vs 노바블라스트 6 비교 글) "에보 SL은 튕기고 노바 6은 푹신합니다" — 에보 SL 쿠션이 8 → 9가 되어 노바블라스트 6 쿠션(본문 기준 9/10)과 점수가 같아졌다. 문장은 점수를 직접 말하지 않아 그대로 두었다.
- 블로그의 에보 SL '반발 9/10'·'반발 9'(`2026-08.ts:3351, 3367, 3384, 3459`)는 반응성이 9로 유지돼 사실과 맞다.
