# specs 점수 반영 — Nike · Li-Ning · Salomon (개정 매핑표 적용)

- 작업일: 2026-10-20 (KST) · 기준: `origin/main` @ e737b32 (매핑표 개정 커밋)
- 적용 브랜치: `cloud/specs-apply-nike-lining-salomon` (커밋 d7fc2d8 나이키, 7deeda1 살로몬. 리닝은 바꾼 것 없음)
- 규칙: cushioning = 힐 SA(150+→10, 140~150→9, 120~140→8, 100~120→7), responsiveness = 전족부 에너지 리턴(75+→10, 70~75→9, 65~70→8, 55~65→7, 45~55→6). 경계값은 상위 구간에 넣었다.
- 검증: `npm run validate` 에러 0(경고 9, 기준선과 같음) · `npm run build` 통과
- 수치 출처: 이전 감사 보고서(`cloud-report/specs-nike-lining-salomon`)의 수치를 신발 파일 원문과 하나씩 다시 대조했다. **보고서와 원문이 다른 수치는 없었다.**

## 1. 변경 표

| 신발 | 필드 | 이전 → 이후 | 근거 수치 (위치) |
|---|---|---|---|
| nike-pegasus-plus-2 | cushioning | 8 → **9** | 힐 147 SA (editorComment 첫 문단, detailedSpecs.midsole, reviews[0].text) → 140~150 구간 |
| nike-zoom-fly-6 | responsiveness | 9 → **8** | 전족부(앞발) 67% (description, editorComment, features, reviews) → 65~70 구간 |
| salomon-ultra-glide-4 | responsiveness | 5 → **6** | 전족부(앞발) 51.6% (editorComment "RunRepeat 실측 힐 47.6%·앞발 51.6%") → 45~55 구간 |

## 2. 바꾸지 않은 신발과 이유

### 현재 점수가 새 규칙과 같음
| 신발 | 필드 | 점수 | 근거 |
|---|---|---|---|
| pegasus-41 | R | 7 | 앞발 61.4% (reviews 본문) |
| pegasus-42 | C / R | 8 / 7 | 힐 SA 131, 전족부 61.2% (editorComment ①②) |
| pegasus-plus-2 | R | 8 | 전족부 69.0% |
| pegasus-premium | R | 8 | 앞발 68.3% (editorComment) |
| streakfly-2 | R | 10 | 앞발 77.9% (description) |
| ultrafly | C | 8 | 힐 SA 134 (editorComment) |
| vaporfly-4 | C / R | 8 / 10 | 힐 SA 137 (reviews), 앞발 75%(경계값, 상위 구간 포함 → 10) |
| s-lab-pulsar-4 | R | 7 | 앞발 57.6% (editorComment) |

### 매핑이 애매해서 그대로 둠 (운영자 판단 필요)
- **nike-alphafly-3 responsiveness 10**: 파일에는 "74.9% 에너지 리턴"(description·oneliner·editorComment·features)만 있다. 힐인지 전족부인지, 출처가 RunRepeat인지 적혀 있지 않다. 이 값을 전족부로 보면 70~75 구간이라 **9**가 된다. 위치가 불명확해서 '전족 값이 없으면 힐로 계산' 규칙도 적용할 수 없었다.
- **nike-vomero-18 cushioning 10**: SA 147은 relatedPosts 제목("쿠션 실측은 147 대 140 SA")에만 있다. 본문(detailedSpecs·biomechanics·editorComment)에는 없고 힐/전족부 표기도 없다. 힐 147로 보면 **9**가 된다.

### 수치가 없어 판단할 수 없음
- Nike: acg-zegama-trail(C/R), alphafly-3(C), alphafly-4(specs 없음), pegasus-premium(C), rival-fly-4, streakfly-2(C), structure-26, ultrafly(R), vomero-18(R), vomero-plus, vomero-premium, zoom-fly-6(C)
- Li-Ning: red-hare-9-pro(82%는 제조사 주장), red-hare-9-ultra(95%는 제조사 주장, 본문에 "독립 랩 수치 없음"), red-hare-9 → 3종 모두 그대로
- Salomon: pulsar(RunRepeat 미게시), s-lab-pulsar-4(C), ultra-glide-4(C)

### 다른 신발 파일의 전작 수치 인용 → 그대로 둠
- pegasus-41 cushioning 9: 41의 힐 SA 125는 pegasus-42 파일에만 있다. 이 값이면 8이다.
- pegasus-plus cushioning 7 / responsiveness 9: 1세대 SA 125는 pegasus-plus-2 파일에만 있고, 에너지 리턴은 "1세대와 비슷"이라고만 적혀 있다.

## 3. 점수 변경에 맞춰 고친 문장
- `src/lib/data/shoes/nike/nike-zoom-fly-6.ts:22` editorComment "반발력(9/10 점수)" → "반발력(8/10 점수)"
- pegasus-plus-2와 ultra-glide-4는 같은 파일에 옛 점수를 말하는 문장이 없다(grep: N/10·쿠션 N·반발 N·N점).
- 같은 파일 안에서 '가장 ~' 같은 비교 논지가 흔들리는 문장은 없었다.

## 4. 블로그에서 옛 점수를 말하는 문장 (고치지 않음)
| slug | 파일:줄 | 문장 | 새 점수 |
|---|---|---|---|
| asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | `src/lib/data/blog/posts/2026-08.ts:4297` | 비교표 "쿠션 / 반발 … 7 / 9" (줌 플라이 6) | 7 / 8 |
| 같은 글 | `src/lib/data/blog/posts/2026-08.ts:4348` | "반발 점수는 9/10, 두 켤레 중 높습니다" | 8/10 — 매직스피드 5(8)와 같아져 **'두 켤레 중 높다'는 논지가 성립하지 않음** |
| salomon-pulsar-vs-ultra-glide-vs-s-lab-trail-2026 | `src/lib/data/blog/posts/2026-06.ts:43` | 비교표 "쿠션 / 반응 … 9 / 5" (울트라 글라이드 4) | 9 / 6 |

페가수스 플러스 2의 쿠션 8을 말하는 블로그 문장은 찾지 못했다(쿠션·반발 키워드와 N/10 패턴, 표의 쿠션/반발 행으로 검색).
