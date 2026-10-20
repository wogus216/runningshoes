# specs 점수 재산정 감사 — ASICS (2026-10-20)

> 보고 전용. 신발·블로그 파일은 수정하지 않았다. 기준 커밋: `origin/main` (6609d63), 감사 diff 비교 기준: `8af0c32`.

## 요약

- **대상**: `src/lib/data/shoes/asics` 신발 18종 (index.ts 제외)
- **점수 필드(cushioning·responsiveness) 신발 단위 판정**: 불일치 **3** · 경계 **7** · 일치 **3** · 판단불가 **5**
  - 불일치: 메타스피드 레이, 메타스피드 스카이+, 슈퍼블라스트 2 (모두 responsiveness가 기대 8보다 2점 높은 10)
  - 경계: 님버스 28, 벤처 10, 매직스피드 5, 메가블라스트, 소닉블라스트 2, 소닉블라스트, 슈퍼블라스트 3
  - 일치: 카야노 33, 노바블라스트 5, 노바블라스트 6
  - 판단불가: 카야노 32, 슬로우쿠시, 매직스피드 4, 메타푸지 트레일, 메타스피드 엣지+ (SA·에너지 리턴 실측 없음)
- **stability·durability**: 매핑표에 수치 구간이 없어 18종 전부 **판단불가** (`breathability` 필드는 `ShoeSpecs` 타입에 없음)
- **직접값 필드(매핑표상 랩 값 그대로)**: drop 불일치(≥2mm) **3**(님버스 28, 레이, 스카이+) · weight 불일치 **1**(소닉블라스트 2) · toBoxWidth 범주 불일치 **6**
- **매핑표 상태: 부분적·모호.** `docs/references/shoe-data-collection.md` §C "수집한 데이터 → Shoe 타입 매핑"(582~604행)에 있다. 수치 구간이 있는 건 cushioning(SA)·responsiveness(에너지 리턴 %)·toBoxWidth(mm) 3개뿐이다. 그나마도 9~10점과 6점 미만 구간이 없고, 힐/전족 중 어느 값을 쓰는지 정해져 있지 않으며 경계값(120·140·55·65)이 양쪽 구간에 걸친다. stability는 "카테고리 + 리뷰 기반 판단", durability는 "아웃솔 평가 기반 500-700km"로만 적혀 있어 수치 매핑이 없다. 미드솔 경도(AC/HA)와 아웃솔 마모(mm)는 매핑 규칙이 아예 없다.

### 계산 규칙 (이번 감사에서 적용한 해석)

| 필드 | 매핑표 원문 | 적용 해석 |
|---|---|---|
| cushioning | SA 140+ → 9, 120-140 → 8, 100-120 → 7 | **힐 SA** 우선. 경계값은 위 구간으로 (140 → 9, 120 → 8). 10점과 100 미만은 구간이 없어 산출하지 않음 |
| responsiveness | 에너지 리턴 65%+ → 8, 55-65% → 7, 45-55% → 6 | 힐·전족 값이 모두 있으면 **둘 다 계산해서 현재값에 가까운 쪽으로 판정**하고, 다른 쪽 결과를 병기. 9·10점과 45% 미만은 구간 없음 |
| toBoxWidth | narrow(<68mm) / standard(68-75mm) / wide(>75mm) | RunRepeat 토박스 실측 mm에만 적용 |
| weight / drop | `labData.weight` / `labData.drop` | RunRepeat 랩 실측값과 비교. 차이 ≥2(g·mm)=불일치, 1~2=경계 |
| stability / durability | 수치 구간 없음 | 판단불가 (추정하지 않음) |

판정 기준: |현재−기대| ≥ 2 = 불일치, 1 = 경계, 0 = 일치. 근거 수치나 구간이 없으면 판단불가.

### 2026-10-20 감사(8af0c32 → origin/main)가 영향을 준 신발 ⚑

`specs`의 점수 필드(cushioning·responsiveness·stability·durability)는 감사에서 **한 건도 바뀌지 않았다.** 다만 아래는 감사로 근거 수치가 새로 들어오거나 바뀌어서 판정에 영향을 준다.

| 신발 | 감사로 바뀐 내용 | 점수 판정 영향 |
|---|---|---|
| 슈퍼블라스트 2 | 에너지 리턴 근거 71% → **전족 65.5%**(RunRepeat 실측)로 교체 | 기대값은 8 그대로(두 값 모두 65%+). 현재 10은 감사 전후 모두 불일치. 근거가 낮아졌는데 점수는 손대지 않음 |
| 메타스피드 스카이+ | 힐 SA 130·전족 에너지 리턴 74.4%·실측 드롭 2.7mm **신규** | cushioning 경계, responsiveness 불일치, drop 불일치가 이번에 처음 판정 가능해짐 |
| 님버스 28 | 전족 에너지 리턴 45.9%·실측 드롭 5.2mm **신규**, specs.weight 281 → 278 | responsiveness 경계, drop 불일치가 새로 드러남 |
| 노바블라스트 5 | 전족 에너지 리턴 66.5% **신규** | responsiveness 일치 확인 |
| 메타스피드 레이 | 실측 드롭 9.8mm·토박스 69.6mm 서술 **신규** (81% 문장은 수정만) | drop 불일치, toBoxWidth 범주 불일치 |
| 노바블라스트 6 | **toBoxWidth standard → narrow 변경** (토박스 71.0mm, RunRepeat 본문 "tapered" 근거) | mm 매핑표상 standard라서 감사 변경이 매핑표와 충돌 |
| 슈퍼블라스트 3 | **toBoxWidth standard → narrow 변경** (71.6mm, "snug" 근거), specs.weight 239 → 235 | 위와 같은 충돌 |
| 카야노 32 | specs.weight 300 → 295, 실측 드롭 9.3mm 신규 | drop 경계 |
| 매직스피드 5 | specs.weight 193 → 201, 실측 드롭 8.7mm 신규, wideOptions false → true | drop 경계 (점수 판정 변화 없음) |
| 매직스피드 4 | 실측 드롭 9.6mm 신규 | drop 경계 |
| 벤처 10 | 에너지 리턴 52.8% → 52.7% | 기대값 변화 없음 (6) |

---

## 신발별 표

열: 필드 · 현재 · 근거 수치(위치) · 기대 · 판정. "위치"는 해당 파일 안의 필드명 또는 행 번호다.

### 1. 젤 카야노 32 (`asics-gel-kayano-32.ts`) — 판단불가
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 9 | SA 실측 없음 | — | 판단불가 |
| responsiveness | 6 | 에너지 리턴 실측 없음 | — | 판단불가 |
| stability / durability | 10 / 700 | 매핑 구간 없음 (detailedSpecs.durability '650-750km') | — | 판단불가 |
| weight | 295 | 295g RunRepeat (detailedSpecs.weight) | 295 | 일치 ⚑ |
| drop | 8 | 실측 9.3mm (detailedSpecs.drop) | 9.3 | 경계 (1.3mm) ⚑ |
| toBoxWidth | standard | 73.9mm (detailedSpecs.width) | standard | 일치 |

### 2. 젤 카야노 33 (`asics-gel-kayano-33.ts`) — 일치
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 8 | 힐 SA 132 (L84 리뷰 본문) | 8 | 일치 |
| responsiveness | 6 | 힐 50.0% / 전족 56.6% (L21 editorComment, L84) | 힐 6 / 전족 7 | 일치 (전족 기준이면 경계) |
| stability / durability | 9 / 650 | 경도 32.8 AC (L21), 아웃솔 마모 1.1mm (detailedSpecs.durability), 매핑 구간 없음 | — | 판단불가 |
| weight | 298 | 298g RunRepeat | 298 | 일치 |
| drop | 8 | 실측 8.5mm | 8.5 | 일치 |
| toBoxWidth | standard | 72.4mm | standard | 일치 |

### 3. 젤 님버스 28 (`asics-gel-nimbus-28.ts`) — 경계 ⚑
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 10 | SA 실측 없음 | — | 판단불가 (10점 구간도 없음) |
| responsiveness | 5 | 전족 45.9% (L84 리뷰 본문, 감사 신규) | 6 | 경계 ⚑ |
| stability / durability | 8 / 650 | 매핑 구간 없음 | — | 판단불가 |
| weight | 278 | 278g RunRepeat | 278 | 일치 ⚑ |
| drop | 8 | 실측 5.2mm (detailedSpecs.drop, 감사 신규) | 5.2 | **불일치 (2.8mm)** ⚑ |
| toBoxWidth | standard | 72.5mm | standard | 일치 |

### 4. 젤 슬로우쿠시 (`asics-gel-slowcush.ts`) — 판단불가
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 10 | RunRepeat 미게시. RTINGS 쿠셔닝 8.9/10 (detailedSpecs.midsole) | — | 판단불가 (SA 아님) |
| responsiveness | 4 | RTINGS 에너지 리턴 점수 3.1/10 (detailedSpecs.midsole, L25) | — | 판단불가 (% 아님) |
| stability / durability | 7 / 500 | durability '450~550km (추정)' | — | 판단불가 |
| weight | 298 | 공식 298g / RTINGS 실측 279.7g | ? | 판단불가 (RTINGS를 랩 값으로 칠지 미정, Q4) |
| drop | 8 | 공식 8mm / RTINGS 실측 10.4mm | ? | 판단불가 (Q4) |
| toBoxWidth | standard | 실측 없음 ("잠정") | — | 판단불가 |

### 5. 젤 벤처 10 (`asics-gel-venture-10.ts`) — 경계
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 6 | SA 실측 없음 | — | 판단불가 |
| responsiveness | 5 | 전족 52.7% (L20 editorComment) | 6 | 경계 ⚑(52.8→52.7, 기대값 변화 없음) |
| stability / durability | 6 / 500 | 매핑 구간 없음 | — | 판단불가 |
| weight | 322 | 322g RunRepeat | 322 | 일치 |
| drop | 12 | 실측 12.0mm | 12 | 일치 |
| toBoxWidth | narrow | 67.5mm | narrow | 일치 |

### 6. 매직스피드 4 (`asics-magic-speed-4.ts`) — 판단불가
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning / responsiveness | 8 / 9 | SA·에너지 리턴 실측 없음 | — | 판단불가 |
| stability / durability | 6 / 350 | 매핑 구간 없음 | — | 판단불가 |
| weight | 237 | 237g RunRepeat | 237 | 일치 |
| drop | 8 | 실측 9.6mm (감사 신규) | 9.6 | 경계 (1.6mm) ⚑ |
| toBoxWidth | standard | 74.3mm | standard | 일치 |

### 7. 매직스피드 5 (`asics-magic-speed-5.ts`) — 경계
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 6 | SA 실측 없음 | — | 판단불가 |
| responsiveness | 8 | 힐 64.6% / 전족 62.6% (L22, L63 features, L97) | 7 | 경계 |
| stability / durability | 5 / 400 | 매핑 구간 없음 | — | 판단불가 |
| weight | 201 | 201g RunRepeat | 201 | 일치 ⚑ |
| drop | 7 | 실측 8.7mm (감사 신규) | 8.7 | 경계 (1.7mm) ⚑ |
| toBoxWidth | standard | 71.9mm | standard | 일치 |

### 8. 메가블라스트 (`asics-megablast.ts`) — 경계
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 10 | SA 실측 없음 | — | 판단불가 |
| responsiveness | 9 | 힐 73.0% / 전족 73.8% (L19, L21, L56) | 8 | 경계 (9점 구간이 없어서 생기는 차이, Q1) |
| stability / durability | 6 / 500 | 매핑 구간 없음 | — | 판단불가 |
| weight | 218 | 218g RunRepeat | 218 | 일치 |
| drop | 10 | 실측 9.9mm | 9.9 | 일치 |
| toBoxWidth | standard | 74.3mm | standard | 일치 |

### 9. 메타푸지 트레일 (`asics-metafuji-trail.ts`) — 판단불가
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning / responsiveness | 9 / 8 | SA·에너지 리턴 실측 없음 | — | 판단불가 |
| stability / durability | 4 / 600 | 매핑 구간 없음 | — | 판단불가 |
| weight | 258 | 258g RunRepeat | 258 | 일치 |
| drop | 10 | 실측 10.3mm (공식 5mm) | 10.3 | 일치 |
| toBoxWidth | narrow | 69.6mm (트레일 평균 74.4mm) | standard | **범주 불일치** (트레일 평균 기준이면 좁음, Q3) |

### 10. 메타스피드 엣지+ (`asics-metaspeed-edge-plus.ts`) — 판단불가
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning / responsiveness | 6 / 10 | 랩 수치 없음 | — | 판단불가 |
| stability / durability | 7 / 250 | 매핑 구간 없음 | — | 판단불가 |
| weight / drop | 208 / 8 | '208g (US 9 기준)', '8mm' — 실측 표기 없음 | — | 판단불가 |
| toBoxWidth | standard | 실측 없음 | — | 판단불가 |

### 11. 메타스피드 레이 (`asics-metaspeed-ray.ts`) — 불일치
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 6 | SA 실측 없음 | — | 판단불가 |
| responsiveness | 10 | 전족 81% (L20 description, L63 features, L93) — **출처·실측 여부 미표기** | 8 | **불일치** (Q1, Q5) |
| stability / durability | 3 / 200 | 매핑 구간 없음 | — | 판단불가 |
| weight | 129 | 129g RunRepeat | 129 | 일치 |
| drop | 5 | 실측 9.8mm (공식 5mm, 감사 신규) | 9.8 | **불일치 (4.8mm)** ⚑ |
| toBoxWidth | narrow | 69.6mm | standard | **범주 불일치** ⚑ |

### 12. 메타스피드 스카이+ (`asics-metaspeed-sky-plus.ts`) — 불일치 ⚑
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 7 | 힐 SA 130 (L84 리뷰 본문, 감사 신규) | 8 | 경계 ⚑ |
| responsiveness | 10 | 전족 74.4% (L84, L92, 감사 신규) | 8 | **불일치** ⚑ |
| stability / durability | 6 / 250 | 매핑 구간 없음 | — | 판단불가 |
| weight | 205 | 205g RunRepeat | 205 | 일치 |
| drop | 5 | 실측 2.7mm (공식 5mm, 감사 신규) | 2.7 | **불일치 (2.3mm)** ⚑ |
| toBoxWidth | standard | 토박스 실측 없음(구 측정법) | — | 판단불가 |

### 13. 노바블라스트 5 (`asics-novablast-5.ts`) — 일치
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 8 | SA 실측 없음 | — | 판단불가 |
| responsiveness | 8 | 전족 66.5% (L96 리뷰 본문, 감사 신규) | 8 | 일치 ⚑ |
| stability / durability | 6 / 600 | 매핑 구간 없음 | — | 판단불가 |
| weight | 255 | 공식 255g / RunRepeat 254g | 254 | 일치 (1g, 공식값 사용) |
| drop | 8 | 실측 7.4mm | 7.4 | 일치 (0.6mm) |
| toBoxWidth | standard | 74.4mm | standard | 일치 |

### 14. 노바블라스트 6 (`asics-novablast-6.ts`) — 일치 (점수) / toBoxWidth 충돌 ⚑
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 9 | 힐 SA 143 / 전족 130 (L22, L85) | 힐 9 / 전족 8 | 일치 |
| responsiveness | 7 | 55.4% (L22, L85, 힐/전족 미표기) | 7 | 일치 |
| stability / durability | 6 / 700 | 경도 35.1/28.8 AC, 아웃솔 마모 0.5mm (detailedSpecs) — 매핑 구간 없음 | — | 판단불가 |
| weight | 249 | 249g RunRepeat | 249 | 일치 |
| drop | 7 | 실측 7.1mm | 7.1 | 일치 |
| toBoxWidth | narrow | 71.0mm, RunRepeat "classic tapered" | standard | **범주 불일치** ⚑ (감사에서 standard→narrow) |

### 15. 소닉블라스트 2 (`asics-sonicblast-2.ts`) — 경계 (힐 기준이면 불일치)
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 9 | 힐 SA 157 / 전족 141 (detailedSpecs.midsole, L25) | 9 | 일치 |
| responsiveness | 9 | 전족 68.7% / 힐 60.3% (detailedSpecs.midsole) | 전족 8 / 힐 7 | 경계 (힐 기준이면 **불일치**) |
| stability / durability | 6 / 500 | 경도 31.1/38.2 AC, 마모 0.9mm, 'km 범위는 이 사이트 추정' | — | 판단불가 |
| weight | 242 | DOR 242g / **RunRepeat 230g** (2026-10-17 게시) | 230 | **불일치 (12g)** — specs가 DOR 값 사용 |
| drop | 8 | DOR 8mm / RunRepeat 7.5mm | 7.5 | 일치 |
| toBoxWidth | narrow | 71.3mm, "noticeably tapered" | standard | **범주 불일치** |

### 16. 소닉블라스트 (`asics-sonicblast.ts`) — 경계
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 9 | 힐 SA 149 / 전족 133 (L23, L103) | 힐 9 / 전족 8 | 일치 |
| responsiveness | 9 | 68.9% (L23, L72, L103, 힐/전족 미표기) | 8 | 경계 |
| stability / durability | 5 / 500 | 경도 37.5/39.9 AC, 마모 1.0mm — 매핑 구간 없음 | — | 판단불가 |
| weight | 255 | 255g RunRepeat | 255 | 일치 |
| drop | 8 | 실측 9.0mm | 9.0 | 경계 (1.0mm) |
| toBoxWidth | narrow | 70.1mm, "too tapered" | standard | **범주 불일치** |

### 17. 슈퍼블라스트 2 (`asics-superblast-2.ts`) — 불일치 ⚑
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 9 | SA 실측 없음 | — | 판단불가 |
| responsiveness | 10 | 전족 65.5% (description, editorComment, L56 features, 감사로 71%에서 교체) | 8 | **불일치** ⚑ |
| stability / durability | 7 / 500 | 매핑 구간 없음 | — | 판단불가 |
| weight | 252 | 252g RunRepeat | 252 | 일치 |
| drop | 8 | 실측 8.2mm | 8.2 | 일치 |
| toBoxWidth | standard | 72.3mm | standard | 일치 |

### 18. 슈퍼블라스트 3 (`asics-superblast-3.ts`) — 경계 ⚑
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 10 | SA 실측 없음 | — | 판단불가 |
| responsiveness | 9 | 전족 67.5% (L93 리뷰 본문) | 8 | 경계 |
| stability / durability | 6 / 550 | 매핑 구간 없음 | — | 판단불가 |
| weight | 235 | 235g RunRepeat | 235 | 일치 ⚑ |
| drop | 8 | 실측 8.1mm | 8.1 | 일치 |
| toBoxWidth | narrow | 71.6mm, "snug" | standard | **범주 불일치** ⚑ (감사에서 standard→narrow) |

---

## 매핑표가 애매한 규칙 — 운영자 질문

**Q1. responsiveness 9·10점 구간이 없다.** 매핑표 최고는 "65%+ → 8"이다. 그래서 73~81% 슈퍼폼(메가블라스트, 레이, 스카이+)도 기대값이 8에 머물고, 불일치 3건과 경계 4건이 여기서 나온다.
- (a) 매핑표를 그대로 둔다. 9·10은 리뷰 기반 가산으로 허용하고, 규칙을 문서에 명시한다.
- (b) 구간을 늘린다. 예: 70%+ → 9, 75%+ → 10.
- (c) 매핑표를 엄격히 적용해서 9·10 점수를 8로 내린다.

**Q2. cushioning·responsiveness에 힐 값과 전족 값 중 무엇을 쓰는가.** 카야노 33(힐 6/전족 7), 소닉블라스트 2(전족 8/힐 7), 노바블라스트 6·소닉블라스트(SA 힐 9/전족 8)는 기준에 따라 판정이 바뀐다. 경계값(SA 120·140, ER 55·65%)도 두 구간에 걸쳐 있다.
- (a) 힐 기준 (RunRepeat 대표값)
- (b) 전족 기준 (반발은 킥오프 구간이 중요)
- (c) 힐·전족 평균 / 경계값은 위 구간 포함

**Q3. toBoxWidth를 mm 구간으로 정할지, RunRepeat 본문 표현으로 정할지.** 2026-10-20 감사는 노바블라스트 6(71.0mm)과 슈퍼블라스트 3(71.6mm)를 "tapered/snug" 문구를 근거로 narrow로 바꿨다. 매핑표 기준(68-75mm = standard)과 충돌하고, 같은 방식으로 6종이 narrow다.
- (a) mm 표가 우선 → 6종을 standard로 되돌린다.
- (b) 표를 개정한다. 예: 평균(73.2mm)보다 1.5mm 이상 좁으면 narrow, 또는 standard 구간을 70-75mm로 좁힌다.
- (c) 트레일화는 트레일 평균(74.4mm) 기준으로 별도 구간을 둔다 (메타푸지).

**Q4. weight·drop의 `labData` 값이 RunRepeat만 뜻하는가.** specs.drop은 상당수가 공식값(님버스 28 8 vs 실측 5.2, 레이 5 vs 9.8, 스카이+ 5 vs 2.7)이고, 벤처 10·메타푸지는 실측값이라 기준이 섞여 있다. 소닉블라스트 2 weight는 DOR 242g이고 RunRepeat는 230g이다. 슬로우쿠시는 RTINGS 값만 있다.
- (a) specs는 RunRepeat 실측 우선, 없으면 다른 랩(DOR·RTINGS), 그다음 공식값.
- (b) specs는 공식값으로 통일하고 실측은 detailedSpecs에만 둔다.
- (c) drop만 공식값, weight는 실측.

**Q5. 출처 미표기 수치를 근거로 써도 되는가.** 레이의 "전족 에너지 리턴 81%"는 파일 어디에도 RunRepeat 실측이라는 표기가 없다. 다른 신발은 대부분 "(실측)"을 붙인다.
- (a) 출처 표기가 없으면 판단불가로 처리한다.
- (b) 그대로 쓰고 출처 확인을 TODO로 남긴다.

**Q6. stability·durability 수치 매핑을 만들 것인가.** 지금은 "카테고리 + 리뷰", "아웃솔 평가 기반 500-700km"뿐이라 감사할 수 없다. 랩 수치(경도 AC, 아웃솔 마모 mm, 토박스·힐 패딩 내구 /5, 비틀림 강성 등)는 여러 파일에 이미 있다.
- (a) 지금처럼 정성 판단을 유지한다.
- (b) 마모 mm → km 구간표를 추가한다 (예: ≤0.6mm → 700, 0.6-1.0 → 600, >1.0 → 500).
- (c) stability에 RunRepeat 비틀림·힐 카운터 강성 점수 매핑을 추가한다.
