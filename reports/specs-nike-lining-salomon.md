# specs 점수 재산정 감사 — Nike · Li-Ning · Salomon

- 감사일: 2026-10-20 (KST) · 기준: `origin/main` @ 6609d63 · 보고 전용(신발 파일 수정 없음)
- 대상: `src/lib/data/shoes/nike`(17), `lining`(3), `salomon`(3) = **23종**

## ⚠️ 매핑표 상태 — 부분적·모호

`docs/references/shoe-data-collection.md` L582–603 「수집한 데이터 → Shoe 타입 매핑」(예시: L108–140)에 있는 규칙은 아래가 전부다.

| specs 필드 | 매핑표 규칙 | 상태 |
|---|---|---|
| cushioning | SA 140+ → 9, 120–140 → 8, 100–120 → 7 | 부분: 10점·6점 이하·SA<100 구간 없음, 힐/전족부 중 무엇을 쓸지 명시 없음(예시는 힐 SA 142 → 9) |
| responsiveness | 에너지 리턴 65%+ → 8, 55–65% → 7, 45–55% → 6 | 부분: 9·10점·45% 미만 구간 없음, 힐/전족부 명시 없음. **예시가 규칙과 어긋남**(전족부 66.3%면 규칙상 8인데 예시는 7) |
| stability | "카테고리 + 리뷰 기반 판단" | 수치 구간 없음 → 전부 판단불가 |
| durability | "아웃솔 평가 기반 500–700km" | 마모 mm → km 환산식 없음 → 전부 판단불가 |
| weight / drop | `labData.weight` / `labData.drop` 그대로 | 명확(g·mm 그대로 비교) |
| breathability | 규칙 없음 (23종 `specs`에 해당 필드도 없음) | 해당 없음 |
| (부가) koreanFootFit.toBoxWidth | narrow <68 / standard 68–75 / wide >75 mm | 명확(specs는 아니지만 참고로 따로 표로 정리) |

**이번 계산에 쓴 기준**: cushioning·responsiveness는 **힐 수치**로 판정했다(예시가 힐 SA를 썼고, 반응성 예시 7점이 힐 60.8%와만 맞기 때문). 전족부로 판정하면 결과가 달라지는 곳은 칸에 따로 적었다. 경계값은 하한 포함(140 → 9, 65% → 8)으로 계산했다. 랩 수치가 소수일 때 drop은 반올림한 뒤 1mm 차이는 경계, 2mm 이상은 불일치로 봤다. weight는 실측값과 다르면 불일치다.

## 요약

- **신발 23종** (알파플라이 4는 `specs` 자체가 없음 → 22종 × 4개 매핑 필드 = 88칸 판정)
- **불일치 8** — 슈퍼폼 반응성 4건(알파플라이 3·스트릭플라이 2·베이퍼플라이 4·줌 플라이 6: 랩 75%+ → 매핑표 최대 8점인데 현재 9–10점), drop 3건(페가수스 42·보메로 18: 실측 14mm vs 10, 베이퍼플라이 4: 실측 8.6 vs 6), weight 1건(페가수스 플러스 2: 랩 247g vs 258g)
- **경계 5** — 페가수스 플러스 2 쿠션(힐 SA 147 → 9 vs 현재 8), 보메로 18 쿠션(SA 147 → 9 vs 10, 근거는 relatedPosts 제목뿐), 알파플라이 3 drop(8.5 vs 8), S/LAB 펄사 4 반응성(힐 47.7% → 6 vs 7), 울트라 글라이드 4 반응성(힐 47.6% → 6 vs 5)
- **일치 27 · 판단불가 48** (+ stability·durability 44칸은 매핑 구간이 없어 전부 판단불가)
- **매핑표 상태: 부분적·모호** — 10점·9점 구간이 없어서, 지금 9–10점인 쿠션·레이싱화는 규칙상 근거가 없다. 힐/전족부 기준도 정해져 있지 않다.
- **2026-10-20 감사 diff 영향(★)**: 제가마 weight 336→306(이제 일치), 줌 플라이 6 전족부 67% 추가(전족부 기준이면 불일치 → 경계), 알파플라이 3 실측 drop 8.5 추가(경계 발생), 보메로 플러스 실측 스택 정정(drop 9.6 → 일치), 베이퍼플라이 4 경도 19.9 HA → 34.7 AC(경도는 매핑표에 없어 점수 영향 없음). 토박스 판정이 standard → narrow로 4건(페가수스 41·42·플러스, 보메로 플러스) 바뀌었는데, 매핑표 절대 구간(68–75 = standard)과는 반대 방향이다(아래 부가 표 참고).

## 신발별 표

표기: C=cushioning, R=responsiveness, W=weight, D=drop. 판단불가 칸은 근거가 있는 경우만 적었다. 모든 신발의 stability·durability는 판단불가(매핑 구간 없음)라 표에서 뺐다.

### Nike

| 신발 | 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|---|
| acg-zegama-trail ★ | W | 306 | 306g RunRepeat 실측 (detailedSpecs.weight) | 306 | 일치 (diff로 336→306 정정) |
| | D | 4 | 3.7mm 실측 (detailedSpecs.drop) | 4 | 일치 |
| | C / R | 9 / 7 | SA·에너지 리턴 없음 | — | 판단불가 |
| alphafly-3 ★ | R | 10 | 에너지 리턴 74.9%, 힐/전족부 구분 없음 (description·editorComment) | 8 (최대 구간) | **불일치** |
| | W | 201 | 201g RunRepeat 실측 (detailedSpecs.weight) | 201 | 일치 |
| | D | 8 | 8.5mm 실측 (detailedSpecs.drop, diff에서 추가) | 8~9 (반올림) | 경계 |
| | C | 8 | SA 없음 | — | 판단불가 |
| alphafly-4 | — | specs 없음 | 공식 수치만, 랩 미게시 | — | 판단불가 |
| pegasus-41 | R | 7 | 힐 55.5%·앞발 61.4% (reviews[0].text) | 7 | 일치 |
| | C | 9 | 이 파일엔 SA 없음. 참고: pegasus-42 editorComment "힐 SA 125→131" → 41 힐 125 | (8) | 판단불가 (다른 파일 근거로 보면 경계) |
| | W / D | 281 / 11 | "US 9 기준"으로만 표기, 실측 여부 불명. biomechanics 34/22 → 12 | — | 판단불가 |
| pegasus-42 | C | 8 | 힐 SA 131 (editorComment ①) | 8 | 일치 |
| | R | 7 | 힐 57.1%·전족부 61.2% (editorComment ②) | 7 | 일치 |
| | W | 286 | 286g RunRepeat 실측 (detailedSpecs.weight) | 286 | 일치 |
| | D | 10 | 공식 10mm / RunRepeat 실측 14mm (detailedSpecs.drop) | 14 | **불일치** (공식 우선이냐 실측 우선이냐 → 질문 Q4) |
| pegasus-plus-2 | C | 8 | 힐 147 SA·전족부 122 SA (detailedSpecs.midsole) | 힐 9 / 전족부 8 | 경계 (전족부 기준이면 일치) |
| | R | 8 | 전족부 69.0%·힐 65.5% (detailedSpecs.midsole) | 8 | 일치 |
| | W | 258 | 258g 공식 / 247g RunRepeat / 270g DOR (detailedSpecs.weight) | 247 | **불일치** (11g, 공식값 사용 → 질문 Q4) |
| | D | 10 | RunRepeat 10.4mm (detailedSpecs.drop) | 10 | 일치 |
| pegasus-plus | C / R | 7 / 9 | 이 파일엔 없음. 참고: pegasus-plus-2 본문 "1세대 125·79 SA", 에너지 리턴 "1세대와 비슷"(65–69%대) | (C 8 / R 8) | 판단불가 (다른 파일 근거로 보면 둘 다 경계) |
| pegasus-premium | R | 8 | 힐 67.3%·앞발 68.3% (editorComment) | 8 | 일치 |
| | C / W / D | 10 / 308 / 12 | 랩 SA 없음, 무게·드롭은 "US 9 기준" | — | 판단불가 |
| rival-fly-4 | 전체 | 6/8/236/10 | 랩 수치 없음 | — | 판단불가 |
| streakfly-2 ★ | R | 10 | 힐 76.3%·앞발 77.9% (description) | 8 (최대 구간) | **불일치** (diff 77% → 76.3/77.9, 점수 영향 없음) |
| | C / W / D | 4 / 128 / 4 | 랩 SA 없음, 무게는 "US 9 기준" | — | 판단불가 |
| structure-26 | W | 296 | 296g RunRepeat 실측 (detailedSpecs.weight) | 296 | 일치 |
| | D | 10 | 실측 스택 36.1/26.0mm (detailedSpecs.stackHeight) → 10.1 | 10 | 일치 |
| | C / R | 8 / 7 | 없음 | — | 판단불가 |
| ultrafly ★ | C | 8 | 힐 SA 134, 전족부 SA 91 (editorComment) | 힐 8 / 전족부 구간 없음 | 일치 (힐 기준) |
| | D | 12 | 11.8mm RunRepeat 실측 (detailedSpecs.drop, diff 12→11.8) | 12 | 일치 |
| | R / W | 8 / 299 | 에너지 리턴 없음, 무게는 "US 9 기준" | — | 판단불가 |
| vaporfly-4 ★ | C | 8 | 힐 SA 137 (reviews 본문) | 8 | 일치 |
| | R | 10 | 힐 78%·앞발 75% (description·editorComment, diff에서 표기 정정) | 8 (최대 구간) | **불일치** |
| | W | 166 | 166g RunRepeat 실측 (detailedSpecs.weight) | 166 | 일치 |
| | D | 6 | 8.6mm 실측 (detailedSpecs.drop) | 9 | **불일치** |
| | (경도) | — | 19.9 HA → 34.7 AC (diff, detailedSpecs.midsole) | 매핑 없음 | 점수 영향 없음 |
| vomero-18 | C | 10 | SA 147 — relatedPosts 제목 "쿠션 실측은 147 대 140 SA"에만 있음 | 9 | 경계 (근거 위치가 약함) |
| | D | 10 | 공식 10mm / Lab 14mm (detailedSpecs.drop) | 14 | **불일치** (질문 Q4) |
| | R / W | 6 / 298 | 없음 / "US 9 기준" | — | 판단불가 |
| vomero-plus ★ | W | 289 | 289g RunRepeat 실측 (detailedSpecs.weight, diff에서 실측 표기) | 289 | 일치 |
| | D | 10 | 실측 드롭 9.6mm (detailedSpecs.stackHeight, diff에서 정정) | 10 | 일치 |
| | C / R | 10 / 7 | 없음 | — | 판단불가 |
| vomero-premium | 전체 | 10/6/326/9 | 랩 SA·에너지 리턴 없음 (토박스만 있음) | — | 판단불가 |
| zoom-fly-6 ★ | R | 9 | 힐 61%·앞발 67% (description·features, diff 61% → 61/67%) | 힐 7 / 전족부 8 | **불일치** (힐 기준). 전족부 기준이면 경계. diff 전에는 61%만 있어서 불일치였음 |
| | C / W / D | 7 / 248 / 10 | 없음 / "US 9 기준" | — | 판단불가 |

### Li-Ning (diff는 리뷰 삭제뿐이라 점수 영향 없음)

| 신발 | 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|---|
| red-hare-9-pro | W | 222 | 222g "CN42/US9 근사 실측" (detailedSpecs.weight) | 222 | 일치 (RunRepeat 아닌 실측) |
| | R | 7 | 82%는 **제조사 주장** | — | 판단불가 |
| | C / D | 7 / 8 | 랩 없음, 드롭은 공식값 | — | 판단불가 |
| red-hare-9-ultra | W | 246 | 246g RTR 실측 (detailedSpecs.weight) | 246 | 일치 |
| | D | 5 | 5mm RTR 실측 / 8mm 공칭 (detailedSpecs.drop) | 5 | 일치 |
| | C / R | 9 / 7 | 95%는 제조사 주장, SA 없음 (본문 "SA/HA/에너지 리턴 수치가 아직 없습니다") | — | 판단불가 |
| red-hare-9 | D | 9 | 9mm 커뮤니티 실측 (detailedSpecs.drop) | 9 | 일치 |
| | W | 320 | 320g은 CN40/US7 실측, US M9 환산은 약 335g(추정) | — | 판단불가 (사이즈 기준이 다름 → 질문 Q5) |
| | C / R | 6 / 5 | 없음 | — | 판단불가 |

### Salomon

| 신발 | 필드 | 현재 | 근거 수치 (위치) | 기대 | 판정 |
|---|---|---|---|---|---|
| pulsar | W | 290 | 290g "전문 리뷰 실측" (detailedSpecs.weight) | 290 | 일치 (RunRepeat 아님) |
| | C / R / D | 6 / 7 / 6 | RunRepeat 미게시라고 명시 (editorComment) | — | 판단불가 |
| s-lab-pulsar-4 ★ | R | 7 | 힐 47.7%·앞발 57.6% (editorComment) | 힐 6 / 전족부 7 | 경계 (전족부 기준이면 일치) |
| | W | 247 | 247g RunRepeat 실측 (detailedSpecs.weight, diff에서 실측 표기) | 247 | 일치 |
| | D | 7 | 7.1mm 실측 (detailedSpecs.drop) | 7 | 일치 |
| | C | 7 | SA 없음 | — | 판단불가 |
| ultra-glide-4 ★ | R | 5 | 힐 47.6%·앞발 51.6% (editorComment) | 6 | 경계 |
| | W | 295 | 295g RunRepeat 실측 (detailedSpecs.weight, diff에서 실측 표기) | 295 | 일치 |
| | D | 8 | 7.5mm 실측 (detailedSpecs.drop) | 8 (반올림) | 일치 |
| | C | 9 | SA 없음 | — | 판단불가 |

### 부가: koreanFootFit.toBoxWidth (매핑표 절대 구간 기준, specs 아님)

| 신발 | 토박스 실측 | 매핑표 기대 | 현재 | 판정 |
|---|---|---|---|---|
| zegama ★ | 72.8 | standard | standard | 일치 (diff로 wide→standard) |
| alphafly-3 ★ | 75.3 | wide | wide | 일치 (diff로 standard→wide) |
| pegasus-41 ★ | 72.9 | standard | narrow | 불일치 (diff로 standard→narrow) |
| pegasus-42 ★ | 72.3 | standard | narrow | 불일치 (diff) |
| pegasus-plus ★ | 71.6 | standard | narrow | 불일치 (diff) |
| pegasus-plus-2 | 71.3 | standard | standard | 일치 |
| pegasus-premium | 70.3 | standard | narrow | 불일치 |
| structure-26 | 71.9 | standard | standard | 일치 |
| ultrafly | 76.7 | wide | wide | 일치 |
| vaporfly-4 | 73.2 | standard | narrow | 불일치 (diff에선 width 문구만 바뀜) |
| vomero-18 | 69.6 | standard | narrow | 불일치 |
| vomero-plus ★ | 71.1 | standard | narrow | 불일치 (diff) |
| vomero-premium | 68.6 | standard | narrow | 불일치 |
| zoom-fly-6 | 72.6 | standard | narrow | 불일치 |
| s-lab-pulsar-4 | 74.0 | standard | standard | 일치 |
| ultra-glide-4 | 71.4 | standard | narrow | 불일치 (diff에선 width 문구만 바뀜) |

10월 20일 감사는 "평균(73.2mm)보다 좁음 + 랩 본문 표현"을 기준으로 판정한 것으로 보인다. 그래서 매핑표의 68–75mm = standard 구간과 반대로 움직였다. 어느 쪽이 맞는지는 운영자 결정이 필요하다(Q6).

## 매핑표가 애매한 규칙 — 운영자 질문

**Q1. cushioning·responsiveness에 힐과 전족부 중 어느 수치를 쓰나?** (영향: 페가수스 플러스 2·줌 플라이 6·S/LAB 펄사 4의 판정이 바뀜)
- A) 힐 (지금 예시와 같음, 이번 감사 기준)
- B) 전족부 (레이싱화·전족부 착지 성향 반영)
- C) 힐·전족부 평균

**Q2. 9·10점 구간은? (cushioning SA 140+ 위, responsiveness 65%+ 위)** (영향: 슈퍼폼 반응성 불일치 4건, 쿠션 10점 신발 전부)
- A) 구간 추가: SA 150+ → 10, 에너지 리턴 70%+ → 9, 75%+ → 10
- B) 지금 상한(9 / 8) 유지 → 레이싱화 반응성을 8로 내림
- C) 랩 수치는 8점까지만 쓰고 9–10은 리뷰·카테고리 보정으로 허용(근거를 적도록 의무화)

**Q3. 하한 아래(SA <100, 에너지 리턴 <45%)와 예시–규칙 모순(전족부 66.3% → 예시 7점)은?**
- A) 구간 확장: SA 80–100 → 6, <80 → 5 / 에너지 리턴 35–45% → 5
- B) 예시를 규칙에 맞게 고침(66.3% → 8) 또는 규칙을 예시에 맞게 고침(힐 기준 명시)

**Q4. weight·drop에 공식 수치와 RunRepeat 실측이 다르면 어느 쪽을 쓰나?** (영향: 페가수스 42·보메로 18 drop 14 vs 10, 페가수스 플러스 2 weight 247 vs 258)
- A) 매핑표 그대로 실측 우선
- B) 공식 우선, 실측은 detailedSpecs에만 표기
- C) 차이가 기준(예: drop 2mm·weight 10g)을 넘을 때만 실측

**Q5. 랩 실측이 US 9가 아닐 때(리닝 레드헤어 9 CN40 320g)와 RunRepeat이 아닌 실측(RTR·커뮤니티)도 labData로 인정하나?**
- A) US 9 환산값을 쓰고 (추정) 표기
- B) 측정 사이즈 그대로 쓰고 detailedSpecs에 사이즈 명시
- C) RunRepeat이 아닌 실측은 판단불가로 처리

**Q6. 토박스는 절대 구간(68/75mm)인가, 평균 대비 상대 판정인가?** (영향: 위 부가 표 불일치 10건)
- A) 매핑표 절대 구간 유지 → 10월 20일 감사의 narrow 판정 4건 포함 10건을 standard로 되돌림
- B) 평균 대비(예: 평균−1.5mm 미만 = narrow)로 매핑표를 개정
- C) 수치 + 랩 본문 표현을 함께 보는 지금 방식을 문서화

**Q7. stability·durability 수치 규칙을 둘 것인가?**
- A) durability: 아웃솔 마모 mm(예: ≤0.8 → 650, 0.8–1.2 → 550, >1.2 → 450km) 같은 환산식 추가
- B) 지금처럼 카테고리·리뷰 판단 유지(감사 대상에서 제외)
