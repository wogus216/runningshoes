# specs 점수 재산정 감사 — Brooks·Mizuno (2026-10-20)

> 보고 전용. 신발·블로그 파일은 수정하지 않았다. 기준 커밋: `origin/main` (감사 변경분 비교: `8af0c32..origin/main`).

## ⚠️ 매핑표 상태 — 부분적·모호

`docs/references/shoe-data-collection.md` 「수집한 데이터 → Shoe 타입 매핑」(L582~)에 있는 수치 구간은 **2개뿐**이다.

| 필드 | 매핑표 원문 | 감사에서 쓴 해석 |
|---|---|---|
| cushioning | SA 기반: 140+ → 9, 120-140 → 8, 100-120 → 7 | **힐 SA** 기준(문서 예시 L116·L127이 saHeel 142 → 9). 140 정확히는 9. 100 미만·10점 구간 없음 |
| responsiveness | 에너지 리턴%: 65%+ → 8, 55-65% → 7, 45-55% → 6 | 힐·전족 둘 다 있으면 **힐 기준**으로 판정하고 전족 결과를 병기. 45% 미만·9/10점 구간 없음 |
| stability | "카테고리 + 리뷰 기반 판단" | 수치 구간 없음 → 전원 판단불가 |
| durability | "아웃솔 평가 기반 500-700km" | 점수가 아닌 km 값이고 구간 규칙 없음 → 전원 판단불가 |
| weight, drop | labData 원값 그대로 | 점수 매핑 대상 아님 |
| 경도(AC/HA), 토박스 | specs 매핑 없음(토박스는 koreanFootFit 전용) | 이번 감사 범위 밖 |

breathability 등 다른 specs 필드는 26종 모두 존재하지 않는다.

## 요약

- **신발 26종** (Brooks 13, Mizuno 13), 계산 가능한 판정 = cushioning·responsiveness 52건
- **불일치 5** · **경계 14** · 일치 11 · **판단불가 22** (+ stability·durability 52건은 매핑표 구간 없음으로 전원 판단불가)
- cushioning: 불일치 3 / 경계 4 / 일치 4 / 판단불가 15
- responsiveness: 불일치 2 / 경계 10 / 일치 7 / 판단불가 7
- **2026-10-20 감사 변경분이 점수에 영향**(★): 6종 — 새로 랩 SA/ER가 들어오며 불일치 발생: `brooks-glycerin-max-2`(쿠션·반응 둘 다), `brooks-hyperion-elite-6`(쿠션), `mizuno-wave-rebellion-flash-3`(쿠션). 경계: `mizuno-wave-rider-30`. 일치로 확인: `brooks-adrenaline-gts-25`, `mizuno-wave-sky-9`(구 ER 56.5%→신 45.2/47.1%로 바뀌며 6점과 일치하게 됨). 무게 변경(adrenaline 300→295, glycerin-max-2 312→318, elite-6 198→193, rider-30 267→266, sky-9 290→295)은 원값 필드라 점수 영향 없음.
- 경향: 반응성 경계 10건 중 7건이 "현재 점수가 매핑값보다 1 낮음"(5 vs 6) — 낮은 ER 신발을 매핑표보다 짜게 주는 편집 관행이 보인다. 반대로 SA 150+ 레이서(elite-6 159·RF3 170)는 쿠션 7점으로 매핑표(9)보다 2점 낮다.

### 불일치 목록 (차이 2점 이상)

| 신발 | 필드 | 현재 | 기대 | 근거 |
|---|---|---|---|---|
| ★brooks-glycerin-max-2 | cushioning | 10 | 8 | 힐 137 SA (editorComment L19) |
| ★brooks-glycerin-max-2 | responsiveness | 4 | 6 | 포어풋 ER 49.6% (L19) |
| brooks-hyperion-elite-5 | responsiveness | 10 | 8 | ER 76.9% (description L20, features L56) — 매핑표 상한 8 |
| ★brooks-hyperion-elite-6 | cushioning | 7 | 9 | 힐 159 SA (L22, L98) |
| ★mizuno-wave-rebellion-flash-3 | cushioning | 7 | 9 | 힐 170 SA (L22, L79) |

## 신발별 표

판정: 일치 / 경계(1점) / 불일치(2점+) / 판단불가. 위치는 `origin/main` 파일 줄 번호. stability·durability는 위 사유로 표에서 생략(전원 판단불가).

### Brooks

**brooks-adrenaline-gts-25** ★
| 필드 | 현재 | 근거 수치(위치) | 기대 | 판정 |
|---|---|---|---|---|
| cushioning | 8 | 힐 138 SA (리뷰 L79, 감사로 추가) | 8 | 일치 |
| responsiveness | 6 | ER 수치 없음 | — | 판단불가 |

**brooks-ghost-17**
| cushioning | 8 | SA 수치 없음("SA 충격흡수도 안정적" L67, 숫자 없음) | — | 판단불가 |
|---|---|---|---|---|
| responsiveness | 6 | ER 53.8% (features L55) | 6 | 일치 |

**brooks-ghost-18**
| cushioning | 8 | SA 수치 없음 | — | 판단불가 |
|---|---|---|---|---|
| responsiveness | 6 | ER 힐 52.4% / 전족 58.1% (L24) | 힐 6 / 전족 7 | 경계(전족 기준) — 힐 기준이면 일치 ※규칙 의존 |

> 표 정렬 편의상 이하 신발은 한 표에 필드 2행으로 적는다.

| 신발 | 필드 | 현재 | 근거 수치(위치) | 기대 | 판정 |
|---|---|---|---|---|---|
| brooks-ghost-max-3 | cushioning | 9 | 134 SA, 힐/전족 미표기 (editorComment L22, L67) | 8 | 경계 |
| | responsiveness | 5 | ER 51.3% (L22, L55) | 6 | 경계 |
| brooks-ghost-max-4 | cushioning | 9 | 힐 145 SA / 전족 116 SA (L15·L16·L49) | 힐 9 / 전족 7 | 일치(힐) |
| | responsiveness | 5 | ER 힐 51.9% / 전족 55.5% (L16) | 힐 6 / 전족 7 | 경계(힐) — 전족 기준이면 불일치 ※규칙 의존 |
| brooks-glycerin-22 | cushioning | 9 | SA 수치 없음 | — | 판단불가 |
| | responsiveness | 7 | ER 54.8% (features L55) | 6 | 경계 |
| brooks-glycerin-gts-22 | cushioning | 9 | SA 수치 없음 | — | 판단불가 |
| | responsiveness | 6 | ER 53.1% (features L55) | 6 | 일치 |
| brooks-glycerin-gts-23 | cushioning | 9 | 랩 미게시 명시 (L18, L94) | — | 판단불가 |
| | responsiveness | 6 | 랩 미게시 | — | 판단불가 |
| ★brooks-glycerin-max-2 | cushioning | 10 | 힐 137 SA (L19, 감사로 추가) | 8 | **불일치** |
| | responsiveness | 4 | 포어풋 ER 49.6% (L19, 감사로 추가) | 6 | **불일치** |
| brooks-glycerin-max | cushioning | 10 | 148 SA (oneliner L21, L22, L67) | 9 | 경계 (매핑표에 10점 구간 없음) |
| | responsiveness | 5 | ER 52.0% (L22, features L55) | 6 | 경계 |
| brooks-hyperion-elite-5 | cushioning | 7 | 자체 파일에 SA 수치 없음 (elite-6 파일 L98에 "5는 151 SA" 언급 — 적용 시 9로 불일치) | — | 판단불가 |
| | responsiveness | 10 | ER 76.9% (L20·L21·L56) | 8 | **불일치** ※상한 규칙 |
| ★brooks-hyperion-elite-6 | cushioning | 7 | 힐 159 SA (L22, L98, 감사로 추가) | 9 | **불일치** |
| | responsiveness | 9 | ER 힐 65.4% / 전족 75.2% (L20·L22, 감사로 추가) | 8 | 경계 ※상한 규칙 |
| brooks-hyperion-max-3 | cushioning | 9 | SA 수치 없음 | — | 판단불가 |
| | responsiveness | 8 | ER 힐 63.9% / 전족 66.2% (features L58) | 힐 7 / 전족 8 | 경계(힐) — 전족 기준이면 일치 ※규칙 의존 |

### Mizuno

| 신발 | 필드 | 현재 | 근거 수치(위치) | 기대 | 판정 |
|---|---|---|---|---|---|
| mizuno-hyperwarp-elite | cushioning | 7 | 랩 수치 없음 | — | 판단불가 |
| | responsiveness | 9 | 랩 수치 없음 | — | 판단불가 |
| mizuno-hyperwarp-pro | cushioning | 8 | 랩 수치 없음 | — | 판단불가 |
| | responsiveness | 8 | 랩 수치 없음 | — | 판단불가 |
| mizuno-hyperwarp-pure | cushioning | 5 | 랩 수치 없음 | — | 판단불가 |
| | responsiveness | 10 | "굽힘 에너지 리턴 −24.6%"(L22)는 마모 후 감소율이지 ER%가 아님 | — | 판단불가 |
| mizuno-neo-daichi-10 | cushioning | 7 | 랩 실측 없음 명시 (L104) | — | 판단불가 |
| | responsiveness | 5 | 랩 실측 없음 | — | 판단불가 |
| mizuno-neo-vista-3 | cushioning | 10 | 힐 167 SA (L13·L14·L48·L60) | 9 | 경계 (10점 구간 없음) |
| | responsiveness | 7 | ER 힐 57.7% / 전족 57.1% (L14, L60) | 7 | 일치 |
| mizuno-wave-horizon-8 | cushioning | 8 | 랩 수치 없음 | — | 판단불가 |
| | responsiveness | 6 | 랩 수치 없음 | — | 판단불가 |
| mizuno-wave-inspire-21 | cushioning | 7 | SA 수치 없음 | — | 판단불가 |
| | responsiveness | 5 | ER 53.3% (L21, L73) | 6 | 경계 |
| mizuno-wave-inspire-22 | cushioning | 8 | 힐 125 SA / 전족 115 SA (L19, L94) | 힐 8 / 전족 7 | 일치(힐) |
| | responsiveness | 6 | ER 힐 52.7% / 전족 52.8% (L19, L94) | 6 | 일치 |
| mizuno-wave-rebellion-flash-2 | cushioning | 7 | SA 수치 없음 | — | 판단불가 |
| | responsiveness | 7 | ER 54.9% (features L58, L78) | 6 | 경계 |
| ★mizuno-wave-rebellion-flash-3 | cushioning | 7 | 힐 170 SA (L22, L79, 감사로 추가) | 9 | **불일치** |
| | responsiveness | 8 | ER 힐 68.1% (L22, 감사로 추가) | 8 | 일치 |
| mizuno-wave-rider-29 | cushioning | 7 | 자체 파일에 SA 수치 없음 (rider-30 파일 L14·L65에 "29는 142 SA" — 적용 시 9로 불일치) | — | 판단불가 |
| | responsiveness | 6 | ER 53.3% (L21, L55, L75) | 6 | 일치 |
| ★mizuno-wave-rider-30 | cushioning | 8 | 힐 152 SA (L14, L65, 감사로 추가) | 9 | 경계 |
| | responsiveness | 7 | 포어풋 ER 50.6% (L14, L61, 감사로 추가) | 6 | 경계 |
| ★mizuno-wave-sky-9 | cushioning | 9 | 힐 142 SA / 포어풋 145 SA (L22, L68, L76; 구 141 SA) | 9 | 일치 |
| | responsiveness | 6 | ER 힐 45.2% / 포어풋 47.1% (L22, L68; 구 56.5%) | 6 | 일치 (구 수치였다면 7로 경계) |

## 매핑표가 애매한 규칙 — 운영자 질문

1. **SA·ER을 힐/전족 중 무엇으로 보나?** (영향: ghost-18, ghost-max-4, hyperion-max-3, inspire-22 등 판정이 바뀜)
   - A) 힐 기준 고정 (문서 예시 L116·L127과 일치, 이번 감사의 가정)
   - B) 전족 기준 고정 (RunRepeat 비교표 기본값에 가까움)
   - C) 힐·전족 평균
2. **상·하한 밖 구간** — SA 140+ 위에 10점, SA 100 미만, ER 65%+ 위의 9·10점, ER 45% 미만이 정의돼 있지 않다. 현재 데이터엔 쿠션 10(glycerin-max·max-2·neo-vista-3), 반응 9·10(elite-5·elite-6·hyperwarp 계열)이 이미 있다.
   - A) 표를 확장 (예: SA 160+ → 10, ER 72%+ → 9, 78%+ → 10, ER <45% → 5)
   - B) 현행 상한(9/8)을 엄격 적용해 기존 10·9점을 내림
   - C) 상한 밖은 편집 재량으로 두고 감사 대상에서 제외
3. **구간 경계값** — "120-140 → 8"과 "140+ → 9", "55-65%"와 "65%+"가 경계에서 겹친다. 경계값을 위 구간에 넣을지(이번 감사 가정) 아래 구간에 넣을지.
   - A) 경계값은 상위 구간 (140 → 9, 65% → 8)
   - B) 경계값은 하위 구간
4. **레이서의 cushioning** — elite-6(159 SA)·rebellion-flash-3(170 SA)은 SA만 보면 9인데 현재 7. 쿠션 점수에 스택·경도·카테고리 보정을 허용하나?
   - A) SA만으로 산정 (불일치로 보고 수정)
   - B) 카테고리(레이싱) 보정 규칙을 표에 추가 (예: 레이싱 −2)
   - C) SA와 경도(AC/HA)를 함께 쓰는 2축 매핑 신설
5. **durability** — 매핑표는 "500-700km"인데 specs.durability는 km 원값(800·900 다수)이고 점수 아님. 구간 밖(800·900·200·300)을 허용하나?
   - A) km 원값 필드로 정의하고 매핑표 문구를 "아웃솔 평가 기반 km"로 수정
   - B) 500-700km 범위로 클램프
6. **stability** — 수치 구간이 없어 감사 불가. 안정화 카테고리·GuideRails/Wave 유무·미드솔 폭(mm) 등으로 구간을 만들지 여부.
   - A) 현행 편집 재량 유지 (감사 제외)
   - B) 카테고리 기본값 + 미드솔 폭(mm) 구간으로 규칙화
7. **다른 파일에 적힌 전작 수치**(elite-6 파일의 "5는 151 SA", rider-30 파일의 "29는 142 SA")를 해당 전작의 근거로 인정할지. 이번 감사는 인정하지 않음(판단불가 처리).
   - A) 인정하고 전작 파일에도 수치를 이식
   - B) 해당 신발 파일 자체 수치만 인정
