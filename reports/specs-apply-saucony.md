# specs 점수 반영 — Saucony (2026-10-20)

- 데이터 브랜치: `cloud/specs-apply-saucony` (커밋 77b85994, 기준 origin/main)
- 규칙: `docs/references/shoe-data-collection.md` '수집한 데이터 → Shoe 타입 매핑' 개정본. cushioning=힐 SA(150+→10, 140~150→9, 120~140→8, 100~120→7), responsiveness=전족부 에너지 리턴(75%+→10, 70~75→9, 65~70→8, 55~65→7, 45~55→6), 경계값은 상위 구간, 전족 값이 없으면 힐 값으로 계산.
- 검증: `npm run validate` 에러 0(경고 9, 기준선과 같음) · `npm run build` 통과.
- 수치는 이전 감사 보고서(`cloud-report/specs-saucony`)를 참고하되 전부 신발 파일 원문에서 다시 확인했다. **보고서와 다른 수치는 없었다.**

## 1. 변경 표 (15종 · 25건)

| 신발 | 필드 | 이전→이후 | 근거 수치 (파일 내 위치) |
|---|---|---|---|
| 엔돌핀 아주라 | cushioning | 7→8 | 힐 137 SA (reviews 93행) |
| 엔돌핀 아주라 | responsiveness | 8→9 | 전족부 ER 74.7% (detailedSpecs.midsole 77행) |
| 엔돌핀 엘리트 2 | cushioning | 7→10 | 힐 157 SA (reviews 90행) |
| 엔돌핀 엘리트 3 | cushioning | 7→10 | 힐 160 SA (editorComment 21행·reviews 84행) |
| 엔돌핀 엘리트 3 | responsiveness | 9→10 | 전족부 ER 81.0% (detailedSpecs.midsole 69행) |
| 엔돌핀 프로 5 | cushioning | 7→8 | 힐 137 SA (reviews 93·97행) |
| 엔돌핀 프로 5 | responsiveness | 9→10 | 전족부 ER 75.8% (detailedSpecs.midsole 77행) — 경계값 75 이상 |
| 엔돌핀 스피드 5 | cushioning | 7→8 | 힐 132 SA (reviews 90·94·98행) |
| 엔돌핀 스피드 5 | responsiveness | 9→10 | 전족부 ER 78.2% (detailedSpecs.midsole 74행) |
| 엔돌핀 트레이너 | responsiveness | 8→10 | 전족부 ER 76.3% (editorComment 21행) |
| 가이드 18 | cushioning | 7→8 | 힐 124 SA (reviews 89·97행) |
| 가이드 19 | cushioning | 8→9 | 힐 144 SA (editorComment 24행·101행) |
| 가이드 19 | responsiveness | 5→6 | **힐 기준** ER 54.8% (24·101행, 전족부 값 없음). detailedSpecs.midsole에 '반응성 점수는 힐 기준' 추가 |
| 허리케인 25 | cushioning | 9→10 | 힐 151 SA (editorComment 15행·reviews 89·93·101행) |
| 허리케인 25 | responsiveness | 6→9 | 전족부 ER 74.0% (reviews 89행) |
| 허리케인 26 | responsiveness | 8→10 | 전족 ER 76.2% (editorComment 24행·101행) |
| 킨바라 16 | cushioning | 5→7 | 힐 109 SA (editorComment 15행·reviews 90·94·98·102행) |
| 파라마운트 맥스 | responsiveness | 7→10 | 전족부 ER 80.3% (detailedSpecs.midsole 111행) |
| 라이드 19 | cushioning | 7→8 | 힐 132 SA (reviews 93행) |
| 라이드 19 | responsiveness | 6→9 | 전족부 ER 70.7% (reviews 93행) |
| 트라이엄프 24 | cushioning | 9→10 | 힐 152 SA (editorComment 18행·reviews 96행) |
| 트라이엄프 24 | responsiveness | 8→10 | 전족 ER 78.5% (18·96행) |
| 엑소더스 울트라 4 | cushioning | 9→8 | 힐 127 SA (reviews 96행) — **유일한 하향** |
| 엑소더스 울트라 4 | responsiveness | 6→9 | 전족부 ER 72.4% (editorComment 18행) |

참고: 허리케인 25의 '힐 151 SA' 문장들은 같은 문장 안에 RunRepeat 출처를 쓰지 않았다(파일의 다른 실측 항목은 RunRepeat 표기). 매핑표가 '출처 미표기 수치의 근거 인정 여부'를 미정으로 두고 있어, 운영자가 인정하지 않기로 하면 이 1건(9→10)은 되돌려야 한다.

## 2. 바꾸지 않은 신발·필드와 이유

| 신발 | 필드 | 현재 | 이유 |
|---|---|---|---|
| 엔돌핀 엘리트 2 | responsiveness | 10 | 전족부 82.1% → 10, 일치 |
| 엔돌핀 프로 4 | cushioning | 7 | **애매**: SA 139에 힐/전족부 표기가 없다(reviews 90·94·98·102행). 힐이면 8 |
| 엔돌핀 프로 4 | responsiveness | 9 | 전족부 71.5% → 9, 일치 |
| 엔돌핀 스피드 6 | 둘 다 | 8 / 9 | 6세대 실측 없음, 5세대 수치 인용·잠정치(15·88행) |
| 엔돌핀 트레이너 | cushioning | 8 | 힐 138 SA → 8, 일치 |
| 가이드 18 | responsiveness | 6 | **애매**: ER 61.3%에 부위 표기가 없다(15·89행). 어느 쪽으로 읽어도 7이지만, 힐 값이라면 '힐 기준' 표기가 필요해 판단을 보류 |
| 허리케인 26 | cushioning | 9 | 힐 145 SA → 9, 일치 |
| 킨바라 16 | responsiveness | 8 | 에너지 리턴 수치 없음 |
| 옴니 ST 23 | 둘 다 | 8 / 6 | 랩 수치 없음 |
| 파라마운트 맥스 | cushioning | 10 | 힐 165 SA → 10, 일치 |
| 페레그린 16 | cushioning | 8 | 힐 124 SA → 8, 일치 |
| 페레그린 16 | responsiveness | 7 | ER '58.1%/64.5%'에 부위 표기가 없다(18·96행). 어느 값이든 7이라 현재와 같아서 변경 없음 |
| 라이드 18 | 둘 다 | 7 / 6 | **애매**: '141 SA'·'54%' 모두 부위 표기가 없다(15·89·93·101행). 힐 SA라면 cushioning 9 |
| 트라이엄프 23 | 둘 다 | 9 / 7 | **애매**: 'SA 149'·'67.6%' 부위 표기가 없다(15·89·93·97·101행). cushioning은 어느 쪽이든 9로 일치, responsiveness는 전족부라면 8 |

stability·durability·weight·drop·toBoxWidth·rating·가격은 지시대로 손대지 않았다.

**운영자 확인 요청**: 부위 표기 없는 SA·ER(프로 4·가이드 18·라이드 18·트라이엄프 23·페레그린 16)을 어떻게 읽을지 정해 주면 다음 회차에 반영한다.

## 3. 점수 변경으로 고친 문장

- 없음. 15개 변경 파일에서 '쿠션 N'·'N/10'·'반발 N'·'N점' 패턴을 찾았으나 cushioning·responsiveness 점수를 말하는 문장이 없었다(나온 것은 엘리트 2의 '안정성 4/10' 2곳뿐이고, stability는 바꾸지 않았다).
- '가장 푹신' 같은 Saucony 내부 비교 문장도 점수를 근거로 쓴 곳이 없었다. 다만 cushioning 10점이 1종(파라마운트 맥스)에서 5종(파라마운트 맥스·엘리트 2·엘리트 3·허리케인 25·트라이엄프 24)으로 늘었다. 파라마운트 맥스 98행 '최고 쿠션의 정의가 다르다'는 SA 수치로 비교하는 문장이라 그대로 두었다.
- 가이드 19 detailedSpecs.midsole에 '에너지 리턴 힐 54.8% (전족부 값 없음 — 반응성 점수는 힐 기준)'을 추가했다(규칙의 '힐 기준' 명시 의무).

## 4. 블로그에서 옛 점수를 말하는 문장 (수정 안 함)

- 이번에 바뀐 Saucony 점수(이전 값)를 말하는 블로그 문장은 찾지 못했다. Saucony 신발 이름·링크가 있는 줄에서 '쿠션/반발/반응성 N/10·N점'을 찾았다.
- 참고(이번 변경과 무관한 기존 불일치): `adidas-adizero-sl2-review` · `src/lib/data/blog/posts/2026-09.ts:4843` — '킨바라 16(7/10)'이 반발 7점이라고 말하지만, 현재 데이터의 킨바라 16 responsiveness는 8이다(이번에 바꾸지 않음).
- 2026-08.ts:3826('쿠션 10/10은 우리 DB에서 최고 등급')과 2026-09.ts:2263('쿠션 점수 10/10은 이 사이트 DB에서 최상위 구간')은 Nike 신발 글이고, 10점 신발이 늘어도 사실관계는 그대로다.
