# specs 점수 반영 — Brooks·Mizuno (2026-10-20)

> 적용 브랜치: `cloud/specs-apply-brooks-mizuno` (기준 `origin/main` e737b32). 규칙: `docs/references/shoe-data-collection.md` L582~ 개정 매핑표 — cushioning=힐 SA(150+→10, 140~150→9, 120~140→8, 100~120→7), responsiveness=전족부 에너지 리턴(75%+→10, 70~75→9, 65~70→8, 55~65→7, 45~55→6), 경계값 상위 구간, 전족 값 없으면 힐 값 + detailedSpecs에 '힐 기준'.
> 수치는 모두 각 신발 파일 원문에서 다시 확인했다(줄 번호는 `origin/main` 기준).

## 적용 원칙 (애매한 부분 처리)

- **위치 미표기 ER%**(힐/전족 표시 없이 "53.3% 에너지 리턴"만 있는 경우): 그 값이 전족이든 힐(전족 없음 → 힐 대체)이든 같은 구간이 나오므로 점수를 반영했다. 단 힐 값이라고 단정할 근거가 없어 '힐 기준' 표기는 넣지 않았다.
- **위치 미표기 SA**: 쿠션은 힐 SA 전용이고 대체 규칙이 없어 판정 불가 → 바꾸지 않음(아래 표).
- detailedSpecs 타입(`src/types/shoe.ts` DetailedSpecs)에 에너지 리턴 필드가 없어, '힐 기준' 표기는 `midsole` 문자열 끝에 덧붙였다(해당 1종).

## 변경 표 (11종, 14필드)

| 신발 | 필드 | 이전→이후 | 근거 수치(위치) |
|---|---|---|---|
| brooks-ghost-18 | responsiveness | 6→7 | ER 전족 58.1% (힐 52.4%) — L24 |
| brooks-ghost-max-3 | responsiveness | 5→6 | ER 51.3%, 위치 미표기 — L22·L55·L67 |
| brooks-ghost-max-4 | responsiveness | 5→7 | ER 전족 55.5% (힐 51.9%) — L16 |
| brooks-glycerin-22 | responsiveness | 7→6 | ER 54.8%, 위치 미표기 — features L55 |
| brooks-glycerin-max-2 | cushioning | 10→8 | 힐 137 SA — L19 |
| brooks-glycerin-max-2 | responsiveness | 4→6 | ER 포어풋 49.6% — L19 |
| brooks-glycerin-max | responsiveness | 5→6 | ER 52.0%, 위치 미표기 — L22·features L55 |
| brooks-hyperion-elite-6 | cushioning | 7→10 | 힐 159 SA — L22·L98·L106 |
| brooks-hyperion-elite-6 | responsiveness | 9→10 | ER 포어풋 75.2% (경계값→상위, 힐 65.4%) — L20·L22·L98 |
| mizuno-wave-inspire-21 | responsiveness | 5→6 | ER 53.3%, 위치 미표기 — L21·L73 |
| mizuno-wave-rebellion-flash-2 | responsiveness | 7→6 | ER 54.9%, 위치 미표기 — features L58·L78 |
| mizuno-wave-rebellion-flash-3 | cushioning | 7→10 | 힐 170 SA — L22·L79 |
| mizuno-wave-rider-30 | cushioning | 8→10 | 힐 152 SA — L14·L65 |
| mizuno-wave-rider-30 | responsiveness | 7→6 | ER 포어풋 50.6% — L14·L61 |

추가 표기(점수 불변): `mizuno-wave-rebellion-flash-3` responsiveness 8은 힐 68.1%(L22)만 있어 힐 값으로 계산 → `detailedSpecs.midsole`에 "반응성 점수는 힐 기준(에너지 리턴 힐 68.1%, 포어풋 값 없음)" 추가.

이전 감사 보고서와 수치가 다른 곳: 없음(보고서의 신발별 추출 수치는 파일 원문과 모두 일치). 참고로 `brooks-hyperion-elite-5` 자체 파일은 ER 76.9%(L20·L21·L56)인데, `brooks-hyperion-elite-6` 파일(L23·L98)은 전작 5를 "포어풋 77.7%"로 적는다 — 두 값 모두 10점 구간이라 점수 영향은 없지만 데이터 불일치로 남겨 둔다.

## 바꾸지 않은 신발·필드와 이유

| 신발 | 필드 | 현재 | 이유 |
|---|---|---|---|
| brooks-adrenaline-gts-25 | cushioning | 8 | 힐 138 SA(L79) → 8, 일치 |
| | responsiveness | 6 | ER 수치 없음 — 판단불가 |
| brooks-ghost-17 | cushioning | 8 | SA 숫자 없음 — 판단불가 |
| | responsiveness | 6 | ER 53.8%(미표기, L55) → 6, 일치 |
| brooks-ghost-18 | cushioning | 8 | SA 숫자 없음 — 판단불가 |
| brooks-ghost-max-3 | cushioning | 9 | **애매**: 134 SA(L22·L67)가 힐/전족 미표기. 힐이면 8 — 보류 |
| brooks-ghost-max-4 | cushioning | 9 | 힐 145 SA(L15·L16·L49) → 9, 일치 |
| brooks-glycerin-22 | cushioning | 9 | SA 숫자 없음 — 판단불가 |
| brooks-glycerin-gts-22 | 둘 다 | 9 / 6 | SA 없음 / ER 53.1%(미표기, L55) → 6, 일치 |
| brooks-glycerin-gts-23 | 둘 다 | 9 / 6 | 랩 미게시(신상, 추정 표기) — 판단불가 |
| brooks-glycerin-max | cushioning | 10 | **애매**: 148 SA(L21·L22·L67)가 힐/전족 미표기("42.3mm 힐 스택"과 병기됐을 뿐). 힐이면 9 — 보류 |
| brooks-hyperion-elite-5 | cushioning | 7 | 자체 파일 SA 없음. elite-6 파일의 "151 SA"는 다른 파일 전작 인용이라 미적용(적용 시 10) |
| | responsiveness | 10 | ER 76.9%(미표기) → 10, 일치 |
| brooks-hyperion-max-3 | cushioning | 9 | SA 숫자 없음 — 판단불가 |
| | responsiveness | 8 | 전족 66.2%(L58) → 8, 일치 |
| mizuno-hyperwarp-elite / -pro | 둘 다 | 7·9 / 8·8 | 랩 수치 없음 — 판단불가 |
| mizuno-hyperwarp-pure | 둘 다 | 5 / 10 | 랩 수치 없음("굽힘 에너지 리턴 −24.6%" L22는 마모 감소율) — 판단불가 |
| mizuno-neo-daichi-10 | 둘 다 | 7 / 5 | 랩 실측 없음, 보수적 추정 점수 — 판단불가 |
| mizuno-neo-vista-3 | 둘 다 | 10 / 7 | 힐 167 SA → 10 / 전족 57.1% → 7, 일치 |
| mizuno-wave-horizon-8 | 둘 다 | 8 / 6 | 랩 수치 없음 — 판단불가 |
| mizuno-wave-inspire-21 | cushioning | 7 | SA 숫자 없음 — 판단불가 |
| mizuno-wave-inspire-22 | 둘 다 | 8 / 6 | 힐 125 SA → 8 / 전족 52.8% → 6, 일치 |
| mizuno-wave-rebellion-flash-2 | cushioning | 7 | SA 숫자 없음 — 판단불가 |
| mizuno-wave-rebellion-flash-3 | responsiveness | 8 | 힐 68.1%(전족 없음) → 8, 일치(힐 기준 표기만 추가) |
| mizuno-wave-rider-29 | cushioning | 7 | 자체 파일 SA 없음. rider-30 파일의 "29는 142 SA"는 전작 인용이라 미적용(적용 시 9) |
| | responsiveness | 6 | ER 53.3%(미표기) → 6, 일치 |
| mizuno-wave-sky-9 | 둘 다 | 9 / 6 | 힐 142 SA → 9 / 포어풋 47.1% → 6, 일치 |

stability·durability·weight·drop·toBoxWidth·rating·가격은 지시대로 손대지 않았다.

## 점수 변경으로 고친 문장 (신발 파일)

- 없음. 변경된 11개 파일에서 '쿠션 N', 'N/10', '반발 N', 'N점' 형태로 옛 점수를 말하는 문장을 찾지 못했다(검출된 'N점'은 RunRepeat 종합점·RTR 평가점뿐). '가장 푹신' 류 비교 문장도 모두 SA·스택 등 실측 근거라 점수 변경과 충돌하지 않는다.
- 추가한 문장은 위 rebellion-flash-3 `detailedSpecs.midsole`의 '힐 기준' 표기 1건뿐.

## 블로그에서 옛 점수를 말하는 문장 (수정 안 함, 보고만)

| 파일:줄 | slug | 현재 문장 | 새 점수 |
|---|---|---|---|
| `src/lib/data/blog/posts/2026-06.ts:6635` | brooks-glycerin-max-1-vs-2-comparison | 쿠션 점수 10/10 · 10/10 "동일 (둘 다 최상)" | v1 10 / **v2 8** — "동일" 논지 무너짐 |
| `src/lib/data/blog/posts/2026-06.ts:6636` | brooks-glycerin-max-1-vs-2-comparison | 반응성 점수 5/10 · 4/10 "-1 (폼 경화)" | **v1 6 / v2 6** — "−1" 논지 무너짐 |
| `src/lib/data/blog/posts/2026-06.ts:6880` | mizuno-wave-rebellion-flash-2-vs-3-comparison | 반응성 점수 7/10 · 8/10 "+1" | **RF2 6** / RF3 8 → +2 |
| `src/lib/data/blog/posts/2026-06.ts:6881` | mizuno-wave-rebellion-flash-2-vs-3-comparison | 쿠션 점수 7/10 · 7/10 "동일 (스택은 ↑)" | RF2 7 / **RF3 10** |
| `src/lib/data/blog/posts/2026-06.ts:6922` | mizuno-wave-rebellion-flash-2-vs-3-comparison | "쿠션 점수 자체는 7/10로 동일하게 잡혀 있지만" | RF3 10 — 문장 전제가 틀려짐 |
| `src/lib/data/blog/posts/2026-07.ts:4739` | bondi-9-vs-glycerin-max-2-cushion-2026 | 쿠션 / 반발 표 "10 / 4" (글리세린 맥스 2 열) | **8 / 6** — 본디 9와 같은 쿠션 10이라는 비교 전제가 바뀜 |

변경 대상(elite-6·rider-30·ghost-max-4·ghost-18 등)의 다른 블로그 언급은 스택·드롭·SA 등 실측값만 말하고 점수는 말하지 않는다.

## 검증

- `npm run validate`: 에러 0 (기준선과 동일)
- `npm run build`: 통과
