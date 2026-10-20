# specs 점수 반영 — New Balance·On (P5)

- 작업일: 2026-10-20 (KST) · 기준: `origin/main` e737b32 (매핑표 개정 커밋)
- 반영 브랜치: `cloud/specs-apply-newbalance-on` (867364a 뉴발란스 · c8f022d On) — main push·머지·PR 없음
- 검증: `npm run validate` 에러 0(경고 9, 기준선과 동일) · `npm run build` 통과
- 규칙: 쿠션=힐 SA(150+→10, 140~150→9, 120~140→8, 100~120→7) / 반응성=전족 에너지 리턴(75%+→10, 70~75→9, 65~70→8, 55~65→7, 45~55→6) / 경계값 상위 구간 포함 / 전족 값 없으면 힐 값 + detailedSpecs에 '힐 기준' 명시
- 수치 재확인: 이전 감사 보고서(`cloud-report/specs-newbalance-on`)의 추출 수치를 각 파일 본문 원문과 다시 대조했고 **보고서와 다른 수치는 없었다.** 줄 번호는 현재 `origin/main` 기준.

## 1. 변경 표 (14종 · 18칸)

| 신발 | 필드 | 이전→이후 | 근거 수치 (위치) |
|---|---|---|---|
| NB 860 v14 | responsiveness | 6→**8** | 전족 ER 66.3% (L95 "힐 60.8%, 전족부 66.3%") |
| NB Rebel v5 | cushioning | 7→**9** | 힐 SA 145 (L92 "힐 145 SA") |
| NB SC Elite v5 | cushioning | 7→**9** | 힐 SA 144 (L92 "힐 144 SA") |
| NB SC Elite v6 | cushioning | 8→**9** | 힐 SA 148 (L69 "힐 148 SA") |
| NB SC Rebel | cushioning | 8→**10** | 힐 SA 168 (L24 editorComment "충격흡수 힐 168 SA") |
| NB SC Rebel | responsiveness | 9→**10** | 전족 ER 78.4% (L24 "에너지 리턴 힐 72.7%·전족 78.4%") |
| NB SC Trainer v3 | cushioning | 8→**9** | 힐 SA 144 (L92 "힐 144 SA") |
| On Cloudboom Strike 2 LS | cushioning | 9→**10** | 힐 SA 157 (L23 "힐 157 SA·전족 136 SA") |
| On Cloudboom Strike | responsiveness | 10→**9** | 전족 ER 73.4% (L67 "전족부 127 SA + 73.4%") |
| On Cloudflow 5 | cushioning | 6→**8** | 힐 SA 123 (L57 "힐 123 SA·전족 122 SA", CF5 실측) |
| On Cloudflow 5 | responsiveness | 8→**6** | 전족 ER 46.8% (L21 "힐 46.9%·전족 46.8%(실측)") |
| On Cloudmonster 2 | cushioning | 10→**8** | 힐 SA 137 (L66 "힐 SA 137 / 전족 115") |
| On Cloudmonster 3 Hyper | cushioning | 10→**8** | 힐 SA 139 (L70 "힐 SA 139 / 전족 122") |
| On Cloudmonster 3 | cushioning | 9→**8** | 힐 SA 123 (L69 "힐 SA 123 / 전족 119") |
| On Cloudmonster 3 | responsiveness | 6→**7** | **힐 기준** ER 58.7% (L69, 전족 값 없음) |
| On Cloudmonster Hyper | cushioning | 9→**8** | 힐 SA 138 (L66 "힐 SA 138 / 전족 118") |
| On Cloudmonster Hyper | responsiveness | 8→**7** | 전족 ER 60.2% (L66 "힐 54.4% / 전족 60.2%") |
| On Cloudsurfer Max | responsiveness | 5→**6** | **힐 기준** ER 48.3% (L70 "48.3% 힐 에너지 리턴", 전족 값 없음) |

## 2. 바꾸지 않은 신발·칸과 이유

### 기대값과 이미 일치 (변경 불필요)
- NB 1080 v14: 쿠션 9(힐 SA 142) · 반응성 7(힐 ER 60.8%, 전족 값 없음 — 점수 일치라 '힐 기준' 문구는 추가하지 않음)
- NB Hierro v9: 쿠션 8(힐 SA 131)
- NB SC Elite v6: 반응성 10(전족 ER 79.4%)
- On Cloudboom Strike 2 LS: 반응성 10(전족 76.2%) · On Cloudboom Strike: 쿠션 8(힐 SA 139)
- On Cloudmonster 2: 반응성 7(전족 60.3%) · On Cloudmonster 3 Hyper: 반응성 8(전족 69.4%)
- On Cloudrunner 2: 쿠션 8(힐 SA 126) · 반응성 7(ER 57.1%, 위치 미표기지만 어느 쪽이든 7)
- On Cloudsurfer 2: 쿠션 8(힐 SA 137) · On Cloudsurfer Max: 쿠션 9(SA 141, 위치 미표기지만 9)

### 애매해서 변경 보류 — 운영자 확인 필요 (에너지 리턴 측정 위치 미표기)
개정 규칙은 전족/힐을 구분하는데, 아래 신발은 파일 원문에 ER이 힐인지 전족인지 적혀 있지 않다.
| 신발 | 현재 | 원문 수치 (위치) | 값만으로 계산하면 |
|---|---|---|---|
| NB SC Elite v5 | responsiveness 10 | "74.8% 에너지 리턴" (L21·L92) | 9 |
| NB SC Trainer v3 | responsiveness 9 | "66.1% 에너지 리턴" (L21·L92) | 8 |
| NB Hierro v9 | responsiveness 6 | "에너지 리턴 61.9%" (L82) | 7 |
| On Cloudsurfer 2 | responsiveness 7 | "52.6% 에너지 리턴" (L69) | 6 |
→ RunRepeat 원문에서 위치를 확인해 파일에 '힐/전족'을 적은 뒤 반영하면 된다. 힐 값이면 detailedSpecs에 '힐 기준'도 적어야 한다.

### 수치 없음 (판단불가)
- NB Rebel v5 반응성(ER 없음, 경도만), NB 860 v14 쿠션(SA 없음)
- NB 1080 v15 · 860 v15 · 880 v15 · Balos v1 — SA·ER 없음
- On Cloudmonster 3 Hyper LightSpray(RunRepeat 페이지 없음) · Cloudrunner 3 Max · Cloudrunner 3 — SA·ER 없음
- 전작 수치 인용·`(추정)` 신상 신발: 대상 디렉터리 내 해당 칸 없음(Cloudflow 5는 감사로 CF5 실측으로 교체돼 있어 반영)

## 3. 점수 변경으로 고친 문장

| 파일 | 위치 | 이전 → 이후 | 이유 |
|---|---|---|---|
| new-balance-sc-rebel.ts | L24 editorComment | "성향 점수는 … 랩 수치로 재조정하지 않았습니다." → "쿠션·반응성 점수는 2026-10-20 개정 매핑표에 따라 랩 수치(힐 168 SA, 전족 에너지 리턴 78.4%)로 재산정했고, 나머지 성향 점수는 …" | 점수 산정 방식 설명이 사실과 달라짐 |
| on-cloudmonster-2.ts | L19 description | "On의 최대 쿠셔닝 러닝화로 … 최고의 충격 흡수와 반발력" → "On의 맥시멀 쿠셔닝 러닝화로 … 넉넉한 충격 흡수(힐 137 SA)와 반발력" | 쿠션 10→8로 On 내 최고 아님(Strike 2 LS 10·SA 157) — **비교 논지 수정** |
| on-cloudmonster-2.ts | L62 recommended | '최대 쿠션을 원하는 장거리 러너' → '맥시멀 쿠션을 원하는 장거리 러너' | 같은 이유 |
| on-cloudmonster-3.ts | L95 detailedSpecs.midsole | 끝에 "에너지 리턴 힐 58.7% — 전족 값 미게시로 반응성 점수는 힐 기준" 추가 | 힐 기준 명시 규칙 |
| on-cloudsurfer-max.ts | L93 detailedSpecs.midsole | "(에너지 리턴 힐 48.3% — 전족 값 미게시로 반응성 점수는 힐 기준)" 추가 | 힐 기준 명시 규칙 |

변경한 14개 파일에서 자체 쿠션·반응성 점수를 숫자로 말하는 문장('쿠션 N', 'N/10', '반발 N')은 없었다(남은 'N/10'은 860 v14 안정성 9/10, SC Rebel의 Road Trail Run 9.99/10 등 다른 필드·외부 평점).

### 다른 브랜드 파일 — 수정하지 않고 보고
- `asics/asics-superblast-2.ts:21` "SC 트레이너 v3(231g)보다 약간 무겁지만 43mm 스택의 쿠셔닝(9/10)이 더 풍부해" — SC Trainer v3 쿠션이 8→9가 되어 점수상 동급. 비교 논지가 약해짐(대상 디렉터리 밖이라 미수정).
- `prospecs/prospecs-duplex-gf.ts:7`(860 v14 포함), `prospecs/prospecs-hyper-rush-2-tempo.ts:7`(SC 트레이너 v3 포함), `mizuno/mizuno-neo-daichi-10.ts:6`(히에로 v9 포함) — "중앙값에서 쿠션·반발 1점 하향"으로 도출한 `(추정)` 점수. 비교군 점수가 바뀌어 중앙값이 달라졌을 수 있음(추정 신발이라 미수정).

## 4. 블로그에서 옛 점수를 말하는 문장

**해당 없음.** `src/lib/data/blog/posts/*.ts` 전체에서 '쿠션/쿠셔닝/반발/반응성 + N/10·N점' 패턴(47건)을 확인했고, 변경된 14종의 점수를 말하는 문장은 없었다. 참고로 걸린 근접 사례:
- `2026-06.ts:7362` (slug `kayano-33-vs-glycerin-gts-22-vs-860-v15-2026`) "셋 다 반발은 6/10" — 860 **v15**(변경 없음)
- `2026-07.ts:1640` 반발(7/10) — 1080 v15(변경 없음) · `2026-05.ts:4488` "SA 142 … 쿠셔닝 9/10" — 1080 v14(변경 없음)
- `2026-07.ts:1780`, `2026-08.ts:2545` SC Rebel "RTR 9.99/10" — 외부 평점
