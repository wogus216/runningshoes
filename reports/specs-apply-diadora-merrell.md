# P8 보고서 — 매핑표와 어긋난 신발 점수 (디아도라·머렐·보메로 18)

- 작업 브랜치: `cloud/specs-apply-diadora-merrell` (커밋 `9f8ffe87`)
- 작업일: 2026-10-21 (KST)
- 시작 점검: `curl https://runrepeat.com` → 200. `npm ci` → `npm run validate` 기준선 에러 0·경고 9 확인.

## 1. 못 한 것

- 블로그 문장 3곳(아래 3절 ①·②)은 숫자만 바꾸면 글의 전제가 깨져서 고치지 않았다. 운영자 판단이 필요하다.
- 그 밖에는 없음.

## 2. 변경 표

| 대상 | 필드 | 이전 → 이후 | 근거 | 위치 |
|---|---|---|---|---|
| diadora-frequenza-2 | specs.cushioning | 8 → 10 | 파일 안 "충격흡수 힐 161 SA / 전족부 113 SA" (RunRepeat). 150+ → 10 | `src/lib/data/shoes/diadora/diadora-frequenza-2.ts:30` (근거 문구 99행 midsole·90행·22행) |
| merrell-mtl-speedarc-peak | specs.cushioning | 7 → 8 | 파일 안 "충격흡수 힐 135/전족 88 SA". 120~140 → 8 | `src/lib/data/shoes/merrell/merrell-mtl-speedarc-peak.ts:28` (근거 문구 99행 midsole·23행·122행) |
| merrell-agility-peak-6 | specs.cushioning | 6 → 7 | 파일 안 "충격흡수는 힐 116·전족 85 SA". 100~120 → 7 | `src/lib/data/shoes/merrell/merrell-agility-peak-6.ts:28` (근거 문구 23행·122행) |
| nike-vomero-18 | specs.cushioning | 10 → 9 | RunRepeat 리뷰 원문(runrepeat.com/nike-vomero-18, 2026-10-21 열람) 랩 표 "Shock absorption heel 147 SA"(평균 131 SA), 본문 "147 SA in the heel and 116 SA in the forefoot". 140~150 → 9 | `src/lib/data/shoes/nike/nike-vomero-18.ts:19` |
| nike-vomero-18 | detailedSpecs.midsole | `'ZoomX + ReactX'` → `'ZoomX + ReactX — 충격흡수 힐 147 SA / 전족부 116 SA (RunRepeat 랩, 힐 평균 131 SA)'` | 위 RunRepeat 원문 | 같은 파일 midsole 행 |
| nike-vomero-18 | editorComment | "(10/10 쿠셔닝 점수)" → "(9/10 쿠셔닝 점수)" | 바뀐 점수 반영. 문장 결론("보호 성능이 탁월한 맥시멀 쿠션화") 유지 | 같은 파일 15행 |
| 블로그 `max-cushion-running-shoes-knee-protection-2026` | 비교표 보메로 18 "쿠션" 셀 | 10 → 9 | 바뀐 점수 반영. 글의 추천(푹신함 최우선 = 본디 9·님버스 28)은 보메로와 무관해 결론 변화 없음 | `src/lib/data/blog/posts/2026-06.ts:7259` |

- 4개 신발 파일의 reviews 문장은 점수를 언급하지 않아(SA 실측 수치만 사용) 고칠 것이 없었다.
- 디아도라 프리퀀자 2·MTL 스피드아크 피크는 블로그 글에 나오지 않는다(slug·한글명·영문명 grep, 범위 `src/lib/data/blog/posts/`). 어질리티 피크 6은 `2026-05.ts`의 트레일화 추천 글에만 나오며, 사이트 쿠션 점수를 인용한 문장·셀은 없다(같은 범위 확인).

## 3. 판단이 필요한 것

보메로 18이 9로 내려가면서 아래 문장은 전제가 깨진다. 숫자만 바꾸면 결론이 뒤집히므로 손대지 않았다.

① 블로그 `asics-megablast-vs-nike-vomero-18-max-cushion-2026` (`src/lib/data/blog/posts/2026-08.ts`, 3613행 부근부터) — 글 전체가 "둘 다 쿠션 10점" 전제
- title: "메가블라스트 vs 보메로 18 차이 — 둘 다 쿠션 10점인데 80g이 갈린다"
- description: "우리 DB에서 나란히 쿠션 10/10을 받은 맥스쿠션입니다"
- FAQ 질문: "둘 다 쿠션 10점이면 뭐가 다른가요?"
- TL;DR: "둘 다 쿠션 10/10 맥스쿠션인데 80g이 갈립니다"
- 본문 h2: '같은 "쿠션 10"인데 왜 다른가' + "두 켤레 다 우리 DB 최고 쿠션 등급입니다"
- 함께 걸린 곳: `nike-vomero-18.ts` relatedPosts 제목 "보메로 18 vs 메가블라스트 — 둘 다 쿠션 10점, 80g 차" , `asics-megablast.ts:102` relatedPosts 제목 "메가블라스트 vs 보메로 18 — 둘 다 쿠션 10점, 80g 차"
- 선택지: (a) 제목·전제를 "10점 대 9점"으로 다시 쓰기(메가블라스트 10 유지) — slug에 점수가 없어 URL은 그대로 둘 수 있음 (b) 점수 대신 실측 수치(SA) 비교로 프레임 전환 (c) 그대로 두고 점수 불일치 감수.

② 블로그 `adidas-supernova-rise-3-vs-nike-vomero-18-cushion-2026` (`src/lib/data/blog/posts/2026-09.ts:225`)
- "사이트 DB의 쿠셔닝 점수는 보메로 18이 10점, 라이즈 3가 9점이라 한 칸 차이로 보이지만, 실측에서 뒤꿈치 충격흡수는 147 대 140 SA로 약 5%…"
- 이제 둘 다 9점이라 "한 칸 차이로 보이지만"이 성립하지 않는다. 문단의 결론(실측 차이가 작고, 차이는 스택·드롭에서 난다)은 오히려 강화되므로, "둘 다 9점으로 같고, 실측에서도 …"로 다시 쓰는 안을 제안한다. 문장 구조가 바뀌어 이번 작업에서는 고치지 않았다.

## 4. 실행한 검증 명령과 결과

| 명령 | 결과 |
|---|---|
| `curl -s -o /dev/null -w "%{http_code}" https://runrepeat.com` | 200 |
| `curl -sL https://runrepeat.com/nike-vomero-18` | 200, 랩 표에서 "Shock absorption heel 147 SA / 131 SA" 확인 |
| `npm ci` → `npm run validate` (변경 전) | 에러 0 · 경고 9 |
| `npm run validate` (변경 후) | 에러 0 · 경고 9 |
| `npm run build` (변경 후) | 성공 (exit 0, "광고·GA 로딩 정상") |
| pre-commit 훅 validate | 에러 0 · 경고 9 |
| 블로그 검색 | 보메로 18 언급 위치(`2026-06/08/09.ts`) 앞뒤 400자에서 쿠션 점수 패턴(`쿠션 N`, `N점`, `10/10`, `<td>10</td>`)을 스크립트로 훑음. 디아도라·머렐은 slug·한글명·영문명 grep |
