# specs 점수 재산정 감사 — New Balance·On (S5)

- 감사일: 2026-10-20 (KST) · 기준: `origin/main` (6609d63)
- 대상: `src/lib/data/shoes/newbalance` 12종, `src/lib/data/shoes/on` 13종 (총 25종)
- 보고 전용 — 신발·블로그 파일은 수정하지 않았다.

## 0. 매핑표 상태 (먼저 읽을 것)

`docs/references/shoe-data-collection.md` §C "수집한 데이터 → Shoe 타입 매핑"에 있는 매핑표는 **부분적이고 모호하다.**

| specs 필드 | 매핑표 원문 | 상태 |
|---|---|---|
| cushioning | `SA 기반: 140+ → 9, 120-140 → 8, 100-120 → 7` | 구간 3개뿐. 힐/전족 중 어느 SA인지, 경계값(120·140)이 어느 쪽에 속하는지, 10점·6점 이하 조건이 없음 |
| responsiveness | `에너지 리턴%: 65%+ → 8, 55-65% → 7, 45-55% → 6` | 구간 3개뿐. 힐/전족 기준 미정, 9·10점 조건 없음, 45% 미만 없음 |
| stability | `카테고리 + 리뷰 기반 판단` | 수치 구간 없음 → **전부 판단불가** |
| durability | `아웃솔 평가 기반 500-700km` | km 값 필드. 마모 mm → km 환산 규칙 없음 → **전부 판단불가** |
| weight / drop | `labData.weight` / `labData.drop` 그대로 | 점수 아님. 랩 실측값과 직접 대조만 함 |
| breathability 등 | 없음 | 두 디렉터리 `specs`에 해당 필드 자체가 없음 |

**이 보고서의 계산 규칙(임시 해석):** 힐 SA·힐 에너지 리턴 기준. 경계값은 위 구간에 포함(140 → 9, 120 → 8, 65% → 8, 55% → 7, 45% → 6). 140+·65%+는 상한 없는 구간이므로 그 이상 수치도 각각 9·8로 본다(매핑표가 10·9점을 만들 수 없다는 뜻). 이 해석이 바뀌면 판정도 바뀐다 — §4 질문 참조.

## 1. 요약

| 항목 | 값 |
|---|---|
| 신발 | **25종** (NB 12 · On 13) |
| 판정 대상 칸 | 25종 × 4필드(cushioning·responsiveness·stability·durability) = 100칸 |
| **불일치** (차 ≥2) | **11칸 / 9종** — rebel-v5, sc-elite-v5, sc-elite-v6, cloudboom-strike-2-lightspray, cloudboom-strike, cloudflow-5, cloudmonster-2, cloudmonster-3-hyper, cloudmonster-hyper |
| **경계** (차 1) | **12칸** |
| 일치 | 11칸 |
| **판단불가** | **66칸** (stability 25 + durability 25 + 랩 SA/ER 없음 16) |
| 매핑표 상태 | 부분적·모호 (cushioning·responsiveness만 수치 구간, 그것도 3단계뿐) |
| 2026-10-20 감사 영향 | **cloudflow-5** (SA·ER 교체로 기대 responsiveness 7→6, 현재 8 → 불일치), **sc-rebel** (랩 수치 신규 반영, specs 점수는 미갱신 → 경계 2칸). 그 외 diff는 `specs.weight`를 랩 실측으로 바꾼 것(1080v15·860v15·balos·sc-rebel·cloudflow-5·cloudmonster-3-hyper·cloudrunner-3)으로 점수 필드엔 영향 없음 |

불일치 11칸 중 **7칸은 현재 점수가 10점**(또는 responsiveness 9~10)이라 매핑표 상한(9·8) 때문에 생긴 것이다. 매핑표에 상위 구간을 추가하면 상당수가 해소될 수 있다. 실질 불일치로 보이는 것은 **cloudflow-5(쿠션 6 vs 기대 8, 반발 8 vs 기대 6)**, **rebel-v5·sc-elite-v5(SA 145/144인데 쿠션 7)**, **cloudmonster-hyper(ER 54.4%인데 반발 8)** 이다.

## 2. 판정 일람

| 신발 | cushioning (현재→기대) | responsiveness (현재→기대) | stability | durability | 감사 영향 |
|---|---|---|---|---|---|
| NB 1080 v14 | 9→9 일치 | 7→7 일치 | 판단불가 | 판단불가 | |
| NB 1080 v15 | 9→? 판단불가 | 7→? 판단불가 | 판단불가 | 판단불가 | weight만 |
| NB 860 v14 | 8→? 판단불가 | 6→7 경계 | 판단불가 | 판단불가 | |
| NB 860 v15 | 8→? 판단불가 | 6→? 판단불가 | 판단불가 | 판단불가 | weight만 |
| NB 880 v15 | 8→? 판단불가 | 6→? 판단불가 | 판단불가 | 판단불가 | |
| NB Balos v1 | 9→? 판단불가 | 7→? 판단불가 | 판단불가 | 판단불가 | weight만 |
| NB Hierro v9 | 8→8 일치 | 6→7 경계 | 판단불가 | 판단불가 | |
| NB Rebel v5 | 7→9 **불일치** | 8→? 판단불가 | 판단불가 | 판단불가 | |
| NB SC Elite v5 | 7→9 **불일치** | 10→8 **불일치** | 판단불가 | 판단불가 | |
| NB SC Elite v6 | 8→9 경계 | 10→8 **불일치** | 판단불가 | 판단불가 | |
| NB SC Rebel | 8→9 경계 | 9→8 경계 | 판단불가 | 판단불가 | ⚠ 랩 수치 신규 |
| NB SC Trainer v3 | 8→9 경계 | 9→8 경계 | 판단불가 | 판단불가 | |
| On Cloudboom Strike 2 LS | 9→9 일치 | 10→8 **불일치** | 판단불가 | 판단불가 | |
| On Cloudboom Strike | 8→8 일치 | 10→8 **불일치** | 판단불가 | 판단불가 | |
| On Cloudflow 5 | 6→8 **불일치** | 8→6 **불일치** | 판단불가 | 판단불가 | ⚠ SA·ER 교체 |
| On Cloudmonster 2 | 10→8 **불일치** | 7→7 일치 | 판단불가 | 판단불가 | |
| On Cloudmonster 3 Hyper LS | 10→? 판단불가 | 8→? 판단불가 | 판단불가 | 판단불가 | |
| On Cloudmonster 3 Hyper | 10→8 **불일치** | 8→8 일치 | 판단불가 | 판단불가 | weight만 |
| On Cloudmonster 3 | 9→8 경계 | 6→7 경계 | 판단불가 | 판단불가 | |
| On Cloudmonster Hyper | 9→8 경계 | 8→6 **불일치** | 판단불가 | 판단불가 | |
| On Cloudrunner 2 | 8→8 일치 | 7→7 일치 | 판단불가 | 판단불가 | |
| On Cloudrunner 3 Max | 8→? 판단불가 | 6→? 판단불가 | 판단불가 | 판단불가 | |
| On Cloudrunner 3 | 7→? 판단불가 | 5→? 판단불가 | 판단불가 | 판단불가 | weight만 |
| On Cloudsurfer 2 | 8→8 일치 | 7→6 경계 | 판단불가 | 판단불가 | |
| On Cloudsurfer Max | 9→9 일치 | 5→6 경계 | 판단불가 | 판단불가 | |

## 3. 신발별 상세

표기: 위치는 파일 내 줄 번호(`origin/main` 기준). stability·durability는 매핑 구간이 없어 모든 신발에서 판단불가이므로, 근거 수치가 있는 경우만 참고로 적는다. weight·drop은 점수가 아니라 랩 실측과의 원값 대조다.

### New Balance

#### new-balance-1080-v14
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 9 | 힐 SA 142 (L20·21·92) | 9 | 일치 |
| responsiveness | 7 | 힐 ER 60.8% (L102·110) | 7 | 일치 |
| stability | 7 | — | — | 판단불가 |
| durability | 550 | 마모 mm 없음 | — | 판단불가 |
| weight / drop | 285 / 4 | 실측 285g (L46) / 4.2mm (L48) | — | 원값 일치 |

#### new-balance-1080-v15
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 9 | SA 수치 없음 ("향상" 정성 서술만, L23·105) | — | 판단불가 |
| responsiveness | 7 | ER 수치 없음 | — | 판단불가 |
| stability · durability | 6 · 600 | — | — | 판단불가 |
| weight / drop | 255 / 6 | 실측 255g (L48) / 6.4mm (L50) | — | 원값 일치 · **감사 diff: weight 261→255** (점수 무관) |

#### new-balance-860-v14
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 8 | SA 수치 없음 (경도 10.9/23.8 HA만, L20·92) | — | 판단불가 |
| responsiveness | 6 | 힐 ER 60.8% / 전족 66.3% (L21·95·103) | 7 (전족 기준이면 8) | 경계 (전족 기준이면 불일치) |
| stability · durability | 9 · 600 | — | — | 판단불가 |
| weight / drop | 295 / 9 | 실측 295g (L46) / 9.3mm (L48) | — | 원값 일치 |

#### new-balance-860-v15
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning · responsiveness | 8 · 6 | SA·ER 없음 | — | 판단불가 |
| stability · durability | 9 · 600 | — | — | 판단불가 |
| weight / drop | 332 / 8 | 실측 332g (L45) / 7.6mm (L47) | — | 원값 일치 · **감사 diff: weight 330→332** |

#### new-balance-880-v15
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning · responsiveness | 8 · 6 | SA·ER 없음 | — | 판단불가 |
| stability · durability | 8 · 600 | — | — | 판단불가 |
| weight / drop | 286 / 4 | 실측 286g (L46) / 4.3mm (L48) | — | 원값 일치 |

#### new-balance-balos-v1
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning · responsiveness | 9 · 7 | SA·ER 없음 | — | 판단불가 |
| stability · durability | 5 · 500 | — | — | 판단불가 |
| weight / drop | 247 / 6 | 실측 247g (L73) / 5.9mm (L75) | — | 원값 일치 · **감사 diff: weight 261→247** |

#### new-balance-hierro-v9
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 8 | 힐 SA 131 / 전족 124 (L82) | 8 | 일치 |
| responsiveness | 6 | ER 61.9% (L82, 힐/전족 미표기) | 7 | 경계 |
| stability | 8 | — | — | 판단불가 |
| durability | 600 | 아웃솔 마모 0.9mm (L20·72) | — (mm→km 규칙 없음) | 판단불가 |
| weight / drop | 309 / 4 | 실측 309g (L64) / 4.2mm (L66) | — | 원값 일치 |

#### new-balance-rebel-v5
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 7 | 힐 SA 145 (L21·92·103·111) | 9 | **불일치 (−2)** |
| responsiveness | 8 | ER 수치 없음 (경도 11.5 HA만) | — | 판단불가 |
| stability · durability | 6 · 500 | — | — | 판단불가 |
| weight / drop | 220 / 6 | 실측 220g (L46) / 6.3mm (L48) | — | 원값 일치 |

#### new-balance-sc-elite-v5
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 7 | 힐 SA 144 (L92·104) | 9 | **불일치 (−2)** |
| responsiveness | 10 | ER 74.8% (L21·92·104) | 8 (상한) | **불일치 (+2)** — 매핑표 상한 문제 |
| stability · durability | 6 · 300 | — | — | 판단불가 |
| weight / drop | 198 / 11 | 실측 198g (L46) / 10.7mm (L48) | — | 원값 일치 |

#### new-balance-sc-elite-v6
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 8 | 힐 SA 148 (L69) | 9 | 경계 |
| responsiveness | 10 | 힐 ER 75.3% / 전족 79.4% (L22·69) | 8 (상한) | **불일치 (+2)** — 매핑표 상한 문제 |
| stability · durability | 5 · 300 | 내구성은 "예상" 표기 (L91) | — | 판단불가 |
| weight / drop | 190 / 14 | 실측 190g (L83) / 13.9mm (L85) | — | 원값 일치 |

#### new-balance-sc-rebel ⚠ 2026-10-20 감사 영향
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 8 | 힐 SA 168 (L24·122) — **감사로 신규 반영** | 9 | 경계 |
| responsiveness | 9 | 힐 ER 72.7% / 전족 78.4% (L24·122) — **신규** | 8 (상한) | 경계 |
| stability | 5 | — | — | 판단불가 |
| durability | 450 | "400~500km (추정 — 랩 마모 측정 미게시)" (L57) | — | 판단불가 |
| weight / drop | 207 / 9 | 실측 207g (L49) / 8.8mm (L51) | — | 원값 일치 · **감사 diff: weight 218→207** |

> 감사 전에는 랩 데이터 미게시(추정)였고, 이번에 SA·ER이 들어왔지만 `specs.cushioning`·`responsiveness`는 갱신되지 않았다. 매핑표대로면 cushioning 9가 기대값.

#### new-balance-sc-trainer-v3
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 8 | 힐 SA 144 (L21·92·103·115) | 9 | 경계 |
| responsiveness | 9 | ER 66.1% (L21·92·103) | 8 | 경계 |
| stability · durability | 7 · 500 | — | — | 판단불가 |
| weight / drop | 278 / 7 | 실측 278g (L46) / 7.3mm (L48) | — | 원값 일치 |

### On

#### on-cloudboom-strike-2-lightspray
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 9 | 힐 SA 157 / 전족 136 (L22·23·60·71) | 9 | 일치 |
| responsiveness | 10 | 힐 ER 76.0% / 전족 76.2% (L23·71) | 8 (상한) | **불일치 (+2)** — 매핑표 상한 문제 |
| stability | 6 | — | — | 판단불가 |
| durability | 300 | 마모 0.5mm (L71), "약 300km (레이싱 운용 예상)" (L92) | — | 판단불가 |
| weight / drop | 167 / 3 | 실측 167g (L84) / 2.7mm (L86) | — | 원값 일치 |

#### on-cloudboom-strike
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 8 | 힐 SA 139 / 전족 127 (L66·67) | 8 | 일치 |
| responsiveness | 10 | 힐 ER 72.1% / 전족 73.4% (L21·66·67) | 8 (상한) | **불일치 (+2)** — 매핑표 상한 문제 |
| stability · durability | 5 · 300 | — | — | 판단불가 |
| weight / drop | 201 / 3.2 | 실측 201g (L91) / 3.2mm (L93) | — | 원값 일치 |

#### on-cloudflow-5 ⚠ 2026-10-20 감사 영향
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 6 | 힐 SA 123 / 전족 122 (L21·57) — 감사 전 "125 SA (CF4 기준)" | 8 (감사 전 수치로도 8) | **불일치 (−2)** |
| responsiveness | 8 | 힐 ER 46.9% / 전족 46.8% (L21·57·77) — 감사 전 "56.3% (CF4 기준)" | 6 (감사 전 수치면 7) | **불일치 (+2)** — 감사로 차이 1→2 |
| stability · durability | 6 · 450 | 경도 48.3 AC (L21) | — | 판단불가 |
| weight / drop | 271 / 4 | 실측 271g (L90) / 4.1mm (L92) | — | 원값 일치 · **감사 diff: weight 278→271** |

> 감사로 CF4 수치가 CF5 실측으로 교체되면서 responsiveness 근거가 크게 낮아졌다(56.3%→46.9%). cushioning 6은 SA 123 기준으로도, 감사 전 125 기준으로도 매핑표보다 2점 낮다 — "단단한 미드솔(48.3 AC)"을 반영한 편집 판단으로 보이지만 매핑표에는 경도 보정 규칙이 없다.

#### on-cloudmonster-2
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 10 | 힐 SA 137 / 전족 115 (L21·66·82) | 8 | **불일치 (+2)** |
| responsiveness | 7 | 힐 ER 56.5% / 전족 60.3% (L21·66) | 7 | 일치 |
| stability | 6 | — | — | 판단불가 |
| durability | 500 | 마모 0.8mm (L96·99) | — | 판단불가 |
| weight / drop | 292 / 6.6 | 실측 292g (L91) / 6.6mm (L93) | — | 원값 일치 |

#### on-cloudmonster-3-hyper-lightspray
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning · responsiveness | 10 · 8 | SA·ER 없음 (L96: RunRepeat 페이지 없음) | — | 판단불가 |
| stability · durability | 8 · 400 | 마모는 정성 평가만 (L96) | — | 판단불가 |
| weight / drop | 205 / 6 | 공식 205g, "실측 약 210g" (L91) / 공식 6mm (L93) | — | 랩 실측 아님 → 판단불가 |

#### on-cloudmonster-3-hyper
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 10 | 힐 SA 139 / 전족 122 (L23·70) | 8 | **불일치 (+2)** |
| responsiveness | 8 | 힐 ER 66.1% / 전족 69.4% (L23·69) | 8 | 일치 |
| stability | 7 | — | — | 판단불가 |
| durability | 450 | 마모 0.5mm (L23·98) | — | 판단불가 |
| weight / drop | 264 / **6** | 실측 264g (L93) / **실측 9.2mm**, 공식 6mm (L95) | — | weight 일치 · **drop은 공식값 사용(실측과 3.2mm 차)** · **감사 diff: weight 271→264** |

#### on-cloudmonster-3
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 9 | 힐 SA 123 / 전족 119 (L23·69) | 8 | 경계 |
| responsiveness | 6 | 힐 ER 58.7% (L23·69) | 7 | 경계 |
| stability | 6 | 경도 49.9 AC (L95) | — | 판단불가 |
| durability | 500 | 마모 0.7mm (L23·97) | — | 판단불가 |
| weight / drop | **295** / 6 | 공식 295g, **RunRepeat 실측 301g** (L92) / 실측 6.4mm (L94) | — | **weight는 공식값 사용(실측과 6g 차)** — 다른 신발은 실측값 사용 |

#### on-cloudmonster-hyper
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 9 | 힐 SA 138 / 전족 118 (L21·66) | 8 | 경계 |
| responsiveness | 8 | 힐 ER 54.4% / 전족 60.2% (L21·66·83·87) | 6 (전족 기준이면 7) | **불일치 (+2)** |
| stability | 6 | — | — | 판단불가 |
| durability | 450 | 마모 0.6mm, 힐 패딩 1/5 (L97·100) | — | 판단불가 |
| weight / drop | 258 / 6.7 | 실측 258g (L92) / 6.7mm (L94) | — | 원값 일치 |

#### on-cloudrunner-2
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 8 | 힐 SA 126 (L69·80·88) | 8 | 일치 |
| responsiveness | 7 | ER 57.1% (L69·80) | 7 | 일치 |
| stability · durability | 8 · 500 | — | — | 판단불가 |
| weight / drop | 275 / 8.5 | 275g "남성 US 9 기준"(출처 미표기, L93) / 8.5mm Lab (L95) | — | 일치 (무게 출처 미표기) |

#### on-cloudrunner-3-max
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning · responsiveness | 8 · 6 | SA·ER 없음 | — | 판단불가 |
| stability · durability | 8 · 600 | — | — | 판단불가 |
| weight / drop | 330 / 8 | 공식몰 330g (L108) / 공식 8mm (L110) | — | 랩 실측 아님 → 판단불가 |

#### on-cloudrunner-3
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning · responsiveness | 7 · 5 | SA·ER 없음 | — | 판단불가 |
| stability · durability | 7 · 600 | — | — | 판단불가 |
| weight / drop | 298 / 8 | 실측 298g (L90) / 8mm (출처 미표기, L92) | — | weight 일치 · **감사 diff: weight 317→298** |

#### on-cloudsurfer-2
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 8 | 힐 SA 137 (L69·80) | 8 | 일치 |
| responsiveness | 7 | ER 52.6% (L21·69·80·88) | 6 | 경계 |
| stability · durability | 6 · 500 | — | — | 판단불가 |
| weight / drop | 254 / 10.4 | 실측 254g (L93) / 10.4mm (L95) | — | 원값 일치 |

#### on-cloudsurfer-max
| 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 9 | SA 141 (L23·68·78·82) | 9 | 일치 |
| responsiveness | 5 | 힐 ER 48.3% (L23·70·78) | 6 | 경계 |
| stability | 7 | 경도 43.8 AC (L23) | — | 판단불가 |
| durability | 500 | — | — | 판단불가 |
| weight / drop | 292 / 7.9 | 실측 292g (L90) / 7.9mm (L92) | — | 원값 일치 |

## 4. 매핑표가 애매한 규칙 — 운영자 질문

1. **SA·ER은 힐 기준인가, 전족 기준인가?** (860 v14 responsiveness는 힐 60.8%→7 경계, 전족 66.3%→8 불일치로 판정이 갈림. cloudmonster-hyper도 6 vs 7)
   - A) 힐 기준 (이 보고서의 가정)
   - B) 힐·전족 평균
   - C) 카테고리별로 다르게 (레이싱·템포화는 전족, 쿠션화는 힐)
2. **상위 구간(cushioning 10, responsiveness 9·10)은 어떻게 주는가?** 현재 10점 6칸·9점 2칸이 매핑표로는 나올 수 없어 불일치/경계로 잡혔다.
   - A) 구간 추가: SA 160+→10, ER 70%+→9, 75%+→10 같은 식으로 확장
   - B) 상한은 9·8로 두고 그 이상은 리뷰 기반 가점(+1까지) 허용 — 근거를 `detailedSpecs`에 적도록 의무화
   - C) 현재 점수를 매핑표 상한으로 낮춤
3. **경계값(120, 140 / 55%, 65%)은 어느 구간에 속하는가?** 표기가 `120-140 → 8`, `140+ → 9`로 겹친다.
   - A) 하한 포함 (140→9, 120→8) — 이 보고서의 가정
   - B) 상한 포함 (140→8, 120→7)
4. **하위 구간(SA <100, ER <45%)과 6점 이하 cushioning은?** 현재 해당 신발은 없지만 cloudflow-5(쿠션 6)처럼 매핑표 최저(7)보다 낮은 점수가 이미 쓰이고 있다.
   - A) SA 80-100→6, <80→5, ER 35-45%→5 식으로 확장
   - B) 경도(HA/AC)로 보정하는 규칙 추가 (예: 45 AC 이상이면 −1~2)
5. **durability는 마모 mm로 산정하는가?** 현재 매핑은 "아웃솔 평가 기반 500-700km"뿐인데, 실제 값은 300~600km이고 마모 0.5~0.9mm 실측이 있는 신발도 있다.
   - A) 마모 mm → km 환산표 신설 (예: ≤0.6mm→600, 0.7–0.9→500, ≥1.0→400)
   - B) 카테고리 기본값(레이싱 300·템포 450·데일리 500-600) + 마모로 ±100 보정
   - C) 지금처럼 편집 판단 유지(감사 대상 제외)
6. **stability 수치 기준을 둘 것인가?** 현재 "카테고리 + 리뷰"뿐이라 25종 전부 판단불가.
   - A) 랩의 토션 강성·힐카운터·미드솔 폭(전족/힐 mm) 점수화 규칙 신설
   - B) 카테고리 기본값(안정화 8–9, 중립 6–7, 레이싱 5) + 리뷰로 ±1
   - C) 감사 대상에서 제외
7. **`specs.weight`·`drop`은 랩 실측인가 공식값인가?** cloudmonster-3는 weight 공식 295g(실측 301g), cloudmonster-3-hyper는 drop 공식 6mm(실측 9.2mm)로, 다른 신발(실측 사용)과 기준이 다르다.
   - A) 랩 실측 우선, 없으면 공식값
   - B) 공식값 우선, 실측은 `detailedSpecs`에만
