# 작업 P7 보고서 — 부위 미표기 SA를 힐 SA로 간주해 cushioning 반영 (2026-10-20)

- 적용 브랜치: `cloud/specs-apply-unlabeled-sa` (기준 `origin/main` 0675851a, 커밋 6176a1b5)
- 규칙: RunRepeat 랩 SA = 힐 값(운영자 확정). cushioning = 힐 SA 150+→10, 140~150→9, 120~140→8, 100~120→7, 경계값은 상위 구간, SA<100은 변경 안 함.
- 검증: `npm run validate` 에러 0(경고 9, 기준선과 같음) · `npm run build` 통과 · `git diff --stat` 신발 파일 6개뿐.

## 1. 변경 표

| 신발 | cushioning 이전→이후 | SA 수치와 위치 | 파일 안의 출처 표기 문구 |
|---|---|---|---|
| brooks-ghost-max-3 | 9 → **8** | 134 SA — L22 editorComment, L67 reviews | SA 문장에는 출처 표기 없음. 같은 파일 실측은 "(US 9 Lab 측정)"·"(Lab)" L83~85, "RunRepeat 랩 토박스" L90 |
| brooks-glycerin-max | 10 → **9** | 148 SA — L21 oneliner, L22 editorComment, L67·L71·L75 reviews | SA 문장에는 출처 표기 없음. 같은 파일 "(US 9 Lab 측정)" L83~85, "RunRepeat 랩 토박스" L90 |
| hoka-arahi-8 | 9 → **8** | 138 SA — L15 editorComment, L78·L86·L90·L94 reviews | SA 문장에는 출처 표기 없음. 같은 파일 "(RunRepeat 랩, US 9 기준)" L60~62 |
| hoka-bondi-9 | 10 → **9** | 146 SA — L15 editorComment, L74·L82 reviews | SA 문장에는 출처 표기 없음. 같은 파일 "RunRepeat 측정 에너지 리턴" L74, "(RunRepeat 랩…)" L89 |
| saucony-endorphin-pro-4 | 7 → **8** | 139 SA — L90·L94·L98·L102 reviews | SA 문장에는 출처 표기 없음. 같은 파일 "(RunRepeat 실측)" L71·L74·L78·L90 |
| saucony-ride-18 | 7 → **9** | 141 SA — L15 editorComment, L89·L93·L101 reviews | SA 문장에는 출처 표기 없음. L89 같은 문장의 "8.4mm 드롭(RunRepeat 실측)"은 드롭에 붙은 표기. 같은 파일 "(RunRepeat 실측)" L71·L78 |

- 6개 파일 모두 `detailedSpecs.midsole` 기존 문자열 끝에 " · 충격흡수 N SA는 RunRepeat 랩 힐 기준"을 붙였다(타입 필드 추가 없음).
- 같은 파일 안에서 옛 cushioning 점수를 말하는 문장('쿠션 N', 'N/10')은 없었다. arahi-8 L15 '안정성(9/10)'은 stability 점수라 그대로 뒀다.
- **판단 근거(운영자 확인 권장)**: 6건 모두 SA 문장 자체에는 "RunRepeat/랩/실측" 표기가 붙어 있지 않다. 그래서 2026-10-20에 RunRepeat 리뷰 페이지를 조회해 표의 'Shock absorption heel' 값이 파일 수치와 정확히 같은지 확인했다(평균 131 SA). 일치해서 반영했고, 그 근거를 파일에 남기려고 midsole에 'RunRepeat 랩 힐 기준'을 적었다. 파일 원문 표기만 인정하는 엄격 기준으로 볼 거면 6건 모두 되돌릴 대상이다(커밋 하나로 revert 가능).

| 신발 | RunRepeat 페이지 'Shock absorption heel' |
|---|---|
| brooks-ghost-max-3 | 134 SA |
| brooks-glycerin-max | 148 SA |
| hoka-arahi-8 | 138 SA |
| hoka-bondi-9 | 146 SA |
| saucony-endorphin-pro-4 | 139 SA |
| saucony-ride-18 | 141 SA |
| (참고) nike-vomero-18 | 147 SA — 아래 2절, 미변경 |

## 2. 바꾸지 않은 신발과 이유

### 출처 조건 미충족 (보류)
- **nike-vomero-18** (cushioning 10): SA 147은 relatedPosts 제목(L99 "쿠션 실측은 147 대 140 SA")에만 있다. 지시대로 보류. RunRepeat 페이지 힐 SA는 147이라, 본문에 출처와 함께 수치를 적으면 **9**가 된다.

### 미표기 SA지만 새 규칙으로 계산해도 현재 점수와 같음
- saucony-triumph-23: 149 SA(L15·L101) → 9 = 현재 9
- hoka-clifton-10: "RunRepeat 측정 147 SA"(L15) → 9 = 현재 9
- on-cloudsurfer-max: "RunRepeat 기준 141 SA"(L23·L68) → 9 = 현재 9
- new-balance-1080-v14 142 → 9, new-balance-rebel-v5 145 → 9, new-balance-sc-elite-v5 144 → 9, new-balance-sc-trainer-v3 144 → 9, on-cloudmonster-2 137 → 8, on-cloudmonster-hyper 138 → 8, on-cloudrunner-2 126 → 8, saucony-hurricane-25 151 → 10, under-armour-infinite-elite-2 144 → 9, brooks-ghost-max-4 145 → 9, mizuno-neo-vista-3 167 → 10, on-cloudboom-strike-2-lightspray 157 → 10, asics-metaspeed-sky-plus 130 → 8: 전부 일치(같은 파일에 힐 표기 문장이 따로 있는 경우도 포함)

### 미표기 SA가 다른 신발 값이거나 비교 수치
- nike-pegasus-plus-2 L93 "131 SA"는 RunRepeat 평균값이다. hoka-arahi-8 L15 "132 SA"는 GT-2000 14 값, hoka-clifton-10 L15 "140 SA"는 고스트 17 값, on-cloudsurfer-max L78 "145 SA"는 본디 9 값, adidas-supernova-rise-3 L99 "147"은 relatedPosts 제목의 보메로 18 값이다. 모두 해당 신발의 점수 근거가 아니다.

### SA<100 (규칙상 변경 안 함)
- nike-ultrafly "SA 91"(L14, 전족 표기. 힐 134는 현재 8과 일치), merrell-trail-glove-8 "61 SA"(L69)

### 범위 밖 발견: 힐 표기된 SA인데 cushioning이 매핑표와 다름 (이번 작업 범위가 아니라 미변경)
- diadora-frequenza-2: 힐 161 SA → 10 기대 / 현재 8
- merrell-mtl-speedarc-peak: 힐 135 SA → 8 기대 / 현재 7
- merrell-agility-peak-6: 힐 116 SA(L23·L122) → 7 기대 / 현재 6
→ 앞선 6개 브랜드 묶음 작업에 포함되지 않은 브랜드(diadora·merrell)다. 다음 회차 후보.

### 머지 참고
- 앞선 `cloud/specs-apply-*` 브랜치 6개는 아직 main에 머지되지 않았다. `cloud/specs-apply-brooks-mizuno`가 brooks-ghost-max-3·brooks-glycerin-max의 responsiveness(L26)를 바꾸는데, 이번 cushioning 변경(L25) 바로 다음 줄이라 둘 다 머지하면 충돌이 날 수 있다. 내용은 서로 독립적이라 두 변경을 모두 살리면 된다.

## 3. 블로그에서 옛 점수를 말하는 문장 (수정 안 함)

| 신발 | slug | 위치 | 문장 |
|---|---|---|---|
| hoka-bondi-9 (10→9) | max-cushion-running-shoes-knee-protection-2026 | `src/lib/data/blog/posts/2026-06.ts:7257` | 맥스쿠션 비교표 '쿠션' 열 **10** |
| brooks-ghost-max-3 (9→8) | max-cushion-running-shoes-knee-protection-2026 | `src/lib/data/blog/posts/2026-06.ts:7258` | 같은 표 '쿠션' 열 **9** |
| hoka-bondi-9 (10→9) | max-cushion-running-shoes-knee-protection-2026 | `src/lib/data/blog/posts/2026-06.ts:7278` | "최고 푹신함 → 본디 9·님버스 28(쿠션 10)" |

- glycerin-max·arahi-8·endorphin-pro-4·ride-18은 블로그에서 cushioning 점수를 말하는 문장을 찾지 못했다(검색: 슬러그 링크·한글명 뒤 '쿠션/쿠셔닝 N', 'N/10', '쿠션' 열이 있는 표). 다른 표의 '5/5'는 통기성 열이다.
