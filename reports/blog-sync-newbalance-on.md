# 작업 B5 보고서 — 블로그 정합성 정정 (New Balance·On)

- 작업 브랜치: `cloud/blog-sync-newbalance-on` (커밋 2개: 뉴발란스 `e31df09`, On `5007b36`)
- 기준: 현재 main(`6609d63`)의 신발 DB. 변경 추출: `git diff 8af0c32 origin/main -- src/lib/data/shoes/newbalance src/lib/data/shoes/on` (22개 파일)
- 수정 205곳(뉴발란스 147·On 58), 보고만 73건, 논지 영향 19건

## 못 한 것

- **title 필드는 규칙대로 건드리지 않았습니다.** 그래서 본문과 title이 어긋난 글이 남아 있습니다: `on-cloudmonster-2-vs-3-comparison`·`on-cloudmonster-3-review-2026`("넓어진 핏"), `new-balance-860-v14-vs-v15-comparison`("4E 사라진"), `new-balance-1080-v14-vs-v15-comparison`("24g"), `new-balance-balos-v1-review`("261g"). title을 어떻게 바꿀지는 따로 정해야 합니다.
- **검색 범위의 한계**: 신발 이름(한글·영문·slug)이 들어간 줄과 옛 값을 함께 찾았습니다. 신발 전용 글 29편은 해당 범위를 전부 읽었고, 그 밖의 글은 이름이 들어간 줄과, 신발이 열 머리글인 비교표만 확인했습니다. 대명사로 신발을 가리키며 값을 적은 문장은 빠졌을 수 있습니다.
- **DB 쪽 잔여 문구**: `src/lib/data/shoes/on/on-cloudmonster-3.ts`의 description·oneliner에 아직 "더 넓어진 핏"이 남아 있습니다(실측은 74.5→71.0mm로 좁아짐). DB 파일은 이번 작업 범위가 아니라 고치지 않았습니다.
- **범위 밖 신발**: 아래 불일치는 이번 감사에서 바뀐 값이 아니거나 담당 브랜드가 아니라 고치지 않았습니다(아래 보고만 표 참고). 카야노 33 스택 40/32(DB 37/28), 님버스 28 281g(DB 278g 실측), 슈퍼블라스트 3(DB가 이제 실측 235g·토박스 71.6mm narrow라 SC 레벨 비교글의 "표준폭"과 어긋남), 레벨 v5 228g(DB 220g), SC 엘리트 v6 "공식 190g"(DB에서 190g은 실측, 브랜드 표기는 198g).
- 님버스 28과의 무게 차는 글에 적힌 님버스 값(281g)을 기준으로 다시 계산했습니다(1080 v15 255g → 26g). DB 실측(278g) 기준이면 23g입니다.

## 바뀐 사실 표

NB
- 1080 v14: 토박스 "68mm 미만" → 69.8mm(RunRepeat 실측, 랩 평균 73.2mm), narrow 유지. 와이드 2E 유지(DB wideOptions true)
- 1080 v15: 무게 261g → 255g(RunRepeat 실측 US9; 브랜드 표기 남 261g·여 208g). 스택 40/34 → 37/31(실측 37.0/30.6; 브랜드 40/34). 드롭 6(실측 6.4). v14 대비 24g → 30g 경량(실측 285→255). v14(199,000)보다 1만원 비쌈(209,000; 예전 '2만원'은 틀림). 토박스 73.2mm 표준(=랩 평균). 와이드: 남성 2E·4E, 여성 D. 님버스 28(281g)보다 약 26g 가벼움, 님버스 28 정가 199,000원
- 860 v15: 무게 330 → 332g(실측; 브랜드 329g). 스택 32/26 → 실측 39.7/32.1(DB 40/32; 브랜드 40/34). 드롭 6 → 실측 7.6mm(브랜드 6mm; specs.drop 8). 토박스 75.1mm 표준. 남성 2E·4E/여성 D
- 880 v15: 토박스 74.6mm 표준(설명만 추가, 값 변화 없음)
- 발로스 V1: 무게 261 → 247g(실측; 브랜드 남 261·여 207). 스택 38.5/32.5 → 37.8/31.9(실측; 브랜드 38.5/32.5). 드롭 실측 5.9(브랜드 6). 토박스 72.8mm 표준. 와이드: '기존 DB 표준(D)·와이드(2E)'—한국 공식몰 확인 여부는 DB 파일 detailedSpecs.width 확인
- 히에로 v9: 토박스 73.4mm 표준. 한국 공식몰 남성 D/여성 B — 국내 와이드 없음(해외 2E·4E). (예전: '미국 2E, 한국 미확인')
- 레벨 v5: 가격 189,000(실판매 179,000) → 219,000원(공식몰 정가). km당 378 → 438원(500km). 토박스 standard → wide(75.0mm, 랩 평균 73.2). 와이드 없음 → 있음(한국 공식몰 남성 2E, 여성 D)
- SC 엘리트 v5: 토박스 74.5mm — '슈퍼슈즈 중 가장 넓은/유일한' → '넓은 축/드문'(RunRepeat "more room in the toebox than most rivals")
- SC 엘리트 v6: 토박스 standard → narrow(71.4mm, "tapered", 최대폭 90.7mm). 와이드 없음/미확인 → 한국 공식몰 남성 D·2E(여성 D)
- SC 레벨(SC Rebel V1): 무게 218 → 207g(실측 US9; 브랜드 218g 남 US9.5·174g 여). 힐 스택 40/36 → 실측 38.3/29.5(브랜드 40/36). 드롭 4 → 실측 8.8mm(브랜드 4mm). RunRepeat 랩 이제 있음: 충격흡수 힐 168 SA, 에너지 리턴 힐 72.7%·전족 78.4%, 토박스 71.2mm narrow("tapered… very snug"). SC 트레이너 v3 대비 60g → 71g 경량(실측 278→207). 슈퍼블라스트 3보다 21g 가벼움은 '공식 무게 218 vs 239' 기준으로만 유효. 남성 2E 와이드 유지
- SC 트레이너 v3: 토박스 73.5mm 평균("low-volume toebox", "those with wider feet might feel restricted"). '넓은 토박스/발볼 강점' 주장 삭제됨 — 넓은 건 전족부 미드솔 117.7mm(플랫폼)뿐. 와이드는 해외(RunRepeat 남성 Wide) — 한국 공식몰 여부는 DB detailedSpecs.width 확인
On
- 클라우드붐 스트라이크: 드롭 3.2mm 실측/4mm 공식, 토박스 73.4mm, 한국 와이드 없음(값 변화 거의 없음)
- 클라우드플로우 5: 무게 278 → 271g(실측; 브랜드 남 269·여 221; 한국 공식몰은 여성 모델만, 여 231g·드롭 8mm). 드롭 8 → 실측 4.1mm(한국 공식몰 표기 8mm). 스택 36/28 → 32.8/28.7(실측; 브랜드 34/28). 충격흡수 125 SA(CF4 기준) → 힐 123·전족 122 SA(CF5). 에너지 리턴 56.3% → 46.9%(힐; 전족 46.8%). 경도 28.3 HA/17.5 HA → 48.3 AC(구방식 26.8 HA). 통기성 4/5 → 2/5(RunRepeat). '245g 최경량급' 삭제. 토박스 77.2mm 넓음(유지). 정가 219,000
- 클라우드몬스터 2: 토박스 74.5mm, 최대폭 98.5mm, 한국 공식몰 일반판 미등재(값 변화 거의 없음)
- 클라우드몬스터 3: 토박스 71.0mm로 전작 CM2(74.5mm)보다 좁아짐 — '앞발 공간이 넓어졌다'는 틀림. 한국 와이드 없음
- 클라우드몬스터 하이퍼: 토박스 73.3mm(값 변화 없음)
- 클라우드몬스터 3 하이퍼: 무게 271 → 264g(실측 US9; On 한국 공식몰 표기 남성 253g). 예전 '공식 271g(US 9.5)' 표현 삭제
- 클라우드러너 2: 토박스 72.4mm, 한국 공식몰 미등재(값 변화 없음)
- 클라우드러너 3: 무게 317 → 298g(실측 US9; On 한국 공식몰 311g). 토박스 71.0mm로 평균보다 좁음 — '발등·앞발 공간 넉넉/여유, 어퍼가 넉넉해 발볼 약간 넓어도 무리 없음' 주장 삭제. 와이드 국내 없음
- 클라우드서퍼 2: 드롭 10.4 실측/9mm 공식(값 변화 없음). 토박스 73.5mm. 정가 199,000
- 클라우드서퍼 맥스: 토박스 standard → narrow(71.4mm, "tapered"). 클라우드서퍼 2(199,000)보다 2만원 비쌈(219,000; 예전 '3만원'은 틀림)

## 수정한 문장 표

| # | 글 slug | 월 파일:줄 | 신발 | 이전 → 이후 | 근거 |
|---|---|---|---|---|---|
| 1 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3040 | 860 v15 | v15(330g/189,000원)을 풀데이터로 직접 비교. v15가 무거워지고(+35g) 와이드 옵션 축소(4종 → 1종) 등 후퇴한 부분 + 이중 밀도 폼·넓어진 힐 플랫폼 등 보강. → **v15(332g/189,000원)을 풀데이터로 직접 비교. v15가 무거워진(+37g, 실측) 부분 + 이중 밀도 폼·넓어진 힐 플랫폼 등 보강, 와이드는 v15도 한국 공식몰 남성 2E·4E.** | 무게 330→332g(실측), +35→+37g; DB width 한국 공식몰 남성 2E·4E/여성 D — 와이드 축소 아님 |
| 2 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3051 | 860 v15 | v15가 +35g 무거워지고 와이드 옵션 4종(Narrow/Standard/Wide/X-Wide) → 2E 1종으로 축소</li> → **v15가 +37g(실측) 무거워짐 — 와이드는 v15도 한국 공식몰 기준 남성 2E·4E(여성 D)</li>** | 332-295=37g; v15 한국 공식몰 남성 2E·4E |
| 3 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3053 | 860 v15 | <li>발볼 4E급 평발 러너는 <strong>v14 X-Wide 이월 가격이 사실상 유일한 답</strong>. → **<li>발볼 4E급 평발 러너는 <strong>v14 X-Wide 이월 또는 v15 4E(한국 공식몰 남성)</strong> 중 선택.** | v15 4E 있음(DB) |
| 4 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3061 | 860 v15 | <p>v14의 가장 큰 강점이었던 <strong>4가지 발볼 옵션(N/D/2E/4E)</strong>이 v15에서는 표준(D) + 와이드(2E)만 남았습니다. 발볼 4E급 평발 러너는 v14 이월 X-Wide 사이즈가 빠지기 전에 잡는 것이 사실상 유일한 선택지입니다. → **<p>v14는 해외 기준 <strong>4가지 발볼 옵션(N/D/2E/4E)</strong>이 있고, v15도 한국 공식몰에서 남성 2E·4E / 여성 D로 판매됩니다(2026-10-20 확인). 발볼 4E급 평발 러너는 v14 이월 X-Wide 외에 v15 4E도 선택지입니다.** | v15 한국 공식몰 남성 2E·4E(DB); v14 4폭은 DB상 해외 기준 |
| 5 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3083 | 860 v15 | <td>330g</td><td><strong>+35g (무거워짐!)</strong></td> → **<td>332g (실측)</td><td><strong>+37g (무거워짐!)</strong></td>** | 330→332g 실측, 차이 재계산 |
| 6 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3084 | 860 v15 | <tr><td><strong>힐 스택</strong></td><td>37mm</td><td>32mm</td><td>-5mm</td></tr> → **<tr><td><strong>힐 스택</strong></td><td>37mm</td><td>40mm (실측 39.7)</td><td>+3mm</td></tr>** | 힐 32→실측 39.7(DB 40) |
| 7 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3085 | 860 v15 | <td><strong>전족부 스택</strong></td><td>28mm</td><td>26mm</td><td>-2mm</td> → **<td><strong>전족부 스택</strong></td><td>28mm</td><td>32mm (실측 32.1)</td><td>+4mm</td>** | 전족 26→실측 32.1(DB 32) |
| 8 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3086 | 860 v15 | <td>9mm (실측 9.3)</td><td>6mm</td><td><strong>-3mm 큰 변화</strong></td> → **<td>9mm (실측 9.3)</td><td>8mm (실측 7.6 / 브랜드 6)</td><td><strong>약 -1.7mm (실측 기준)</strong></td>** | 드롭 6→실측 7.6(specs.drop 8, 브랜드 6) |
| 9 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3089 | 860 v15 | <td>D / 2E (2종)</td><td><strong>4E 단종</strong></td> → **<td>남성 2E / 4E · 여성 D</td><td><strong>4E 유지</strong></td>** | DB 한국 공식몰 남성 2E·4E/여성 D |
| 10 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3110 | 860 v15 | <h3>2. 와이드 옵션 축소 — 4종 → 2종 (4E 단종)</h3> → **<h3>2. 와이드 옵션 — v15도 한국 공식몰 남성 2E·4E</h3>** | 4E 단종 아님(DB) |
| 11 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3112 | 860 v15 | <p>v14의 가장 큰 강점이었던 <strong>4가지 발볼 옵션(Narrow / Standard / Wide / X-Wide)</strong>이 v15에서는 표준(D) + 와이드(2E)만 남았습니다.</p> → **<p>v14는 해외 기준 <strong>4가지 발볼 옵션(Narrow / Standard / Wide / X-Wide)</strong>이 있고, v15는 한국 공식몰 기준 남성 2E·4E / 여성 D로 판매됩니다(2026-10-20 확인).</p>** | v15 2E·4E(DB) |
| 12 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3114 | 860 v15 | <p><strong>발볼 4E급 평발 한국 러너에게는 심각한 문제</strong>. 한국 러너 중 평발 + 4E급 발볼 조합이 흔한데, 카야노 33도 X-Wide 미확정, 1080 v15는 4E 있지만 중립화 — 안정화 카테고리에서 4E 옵션이 사라지는 것은 큰 손실입니다.</p> → **<p><strong>발볼 4E급 평발 한국 러너도 v15 4E로 대응 가능</strong>합니다. 1080 v15도 남성 4E가 있지만 중립화라, 안정화에서 4E가 필요하면 860 v15가 선택지입니다.</p>** | 4E 사라지지 않음(DB) |
| 13 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3116 | 860 v15 | <p>대신 v15는 <strong>힐 플랫폼을 더 넓혀서</strong> 표준(D) 사이즈도 발볼 standard~약간 넓음까지는 커버 가능하게 설계했지만, 진짜 4E 필요한 러너에게는 부족.</p> → **<p>또 v15는 <strong>힐 플랫폼을 더 넓혔고</strong>, 토박스도 실측 75.1mm로 v14(73.0mm)보다 넓어(랩 평균 73.2mm) 표준 폭에서도 발가락 공간이 여유 있는 편입니다.</p>** | 4E 부족 주장 근거 상실; 토박스 v15 75.1 vs v14 73.0(DB) |
| 14 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3118 | 860 v15 | <h3>3. 드롭 9mm → 6mm — 뒤꿈치 착지 러너에게 영향</h3> → **<h3>3. 드롭 9.3mm → 7.6mm(실측) — 뒤꿈치 착지 러너에게 영향</h3>** | v15 드롭 6→실측 7.6 |
| 15 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3120 | 860 v15 | <strong>v15는 6mm로 -3mm</strong> — 미드풋 착지에 더 가까운 사상. → **<strong>v15는 실측 7.6mm로 약 -1.7mm</strong>(브랜드 표기 8→6mm) — 미드풋 착지에 조금 더 가까운 사상.** | 실측 9.3→7.6; 브랜드 v14 8/v15 6 |
| 16 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3135 | 860 v15 | v15 14~15만원 안정 → v15만 남음 (4E 옵션 없음) → **v15 14~15만원 안정 → v15만 남음 (v15도 남성 4E 있음)** | v15 4E 있음(DB) — 가격 전망 부분은 손대지 않음 |
| 17 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3147 | 860 v15 | <td><strong>발볼 4E급 평발 러너</strong></td><td><strong>v14 X-Wide 즉시 구매</strong></td><td>안정화에서 4E는 사실상 유일. 가을 전 사이즈 잡기</td> → **<td><strong>발볼 4E급 평발 러너</strong></td><td><strong>v14 X-Wide 이월 또는 v15 4E</strong></td><td>v15도 한국 공식몰 남성 4E. 가격은 v14, 신소재는 v15</td>** | v15 4E 있음 |
| 18 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3151 | 860 v15 | <td>v15</td><td>6mm 드롭이 자연스러움</td> → **<td>v15</td><td>v14보다 낮은 드롭(실측 7.6mm)</td>** | 드롭 6→실측 7.6 |
| 19 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3170 | 860 v15 | 듀얼 밀도 폼 + 6mm 드롭으로 자연스러운 전환. → **듀얼 밀도 폼 + 더 낮은 드롭(실측 7.6mm)으로 자연스러운 전환.** | 드롭 실측 7.6 |
| 20 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3173 | 860 v15 | <p><strong>비추</strong>. v15는 4E 옵션이 없어 발가락 압박 가능성이 있습니다. 표준(D)도 힐 플랫폼이 넓어졌지만 토박스 자체 너비는 큰 변화 없음. 4E 평발 러너라면 <strong>v14 X-Wide 즉시 구매</strong>가 사실상 유일한 답. 또는 → **<p><strong>가능</strong>. v15는 한국 공식몰 기준 남성 2E·4E / 여성 D로 판매되고, 토박스도 실측 75.1mm로 v14(73.0mm)보다 넓습니다. 4E 평발 러너라면 <strong>v15 4E</strong>를 신어 보고, 가격이 우선이면 v14 X-Wide…** | v15 4E 있음, 토박스 75.1 vs 73.0(DB) |
| 21 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3179 | 860 v15 | 290~330g 무게는 → **295~332g 무게는** | 두 신발 무게 범위 295/332g |
| 22 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3189 | 860 v15 | <p class="callout-title">발볼 옵션이 결정 — 4E 평발은 v14, 표준~2E는 v15</p> → **<p class="callout-title">발볼 옵션 — 4E 평발은 v14 이월 또는 v15 4E, 표준~2E는 v15</p>** | v15 4E 있음(callout 제목, post title 아님) |
| 23 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3190 | 860 v15 | 이월 14~15만원 즉시 구매. 안정화 카테고리에서 4E 옵션은 사실상 유일하고, 가을부터 사이즈 빠짐 시작. 카야노 33도 X-Wide 미확정 상태라 대안 거의 없음.</p> → **이월 14~15만원이 가격 면에서 유리하고, 가을부터 사이즈 빠짐 시작. v15도 한국 공식몰 남성 4E가 있어 신소재를 원하면 v15 4E가 대안.</p>** | v15 4E 있음 |
| 24 | new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3192 | 860 v15 | 9mm 드롭 vs 6mm 드롭, 메디얼 포스트 → **9mm 드롭 vs 7.6mm(실측) 드롭, 메디얼 포스트** | 드롭 실측 7.6 |
| 25 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3241 | 클라우드몬스터 3 | 록커 강화 + 토박스 확장 + 힐 스택 → **록커 강화 + 토박스 축소(RunRepeat 실측 74.5→71.0mm) + 힐 스택** | description: CM3 토박스 확장 아님, 실측 74.5→71.0mm 좁아짐 |
| 26 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3252 | 클라우드몬스터 2/3 | <strong>"좁은 토박스 + 푹신함"의 2</strong>에서 <strong>"넓어진 핏 + 강한 록커"의 3</strong>로 → **<strong>"표준 토박스(실측 74.5mm) + 푹신함"의 2</strong>에서 <strong>"더 좁아진 토박스(실측 71.0mm) + 강한 록커"의 3</strong>로** | CM2 토박스 74.5mm(랩 평균 73.2보다 넓음, 표준), CM3 71.0mm로 좁아짐 |
| 27 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3253 | 클라우드몬스터 3 | <strong>앞발 핏 확장 (2의 약점 보강)</strong> → **<strong>앞발 공간 축소 (토박스 실측 74.5→71.0mm)</strong>** | CM3 앞발 넓어짐 → 실측상 좁아짐 |
| 28 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3254 | 클라우드몬스터 3 | 토박스 좁아서 불편했다면 3가 답 → **토박스 여유가 우선이면 실측상 더 넓은 2가 유리(3는 71.0mm로 평균 이하)** | CM3 토박스 71.0mm < CM2 74.5mm |
| 29 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3282 | 클라우드몬스터 2/3 | <tr><td><strong>앞발 핏</strong></td><td>표준 (좁다는 평 많음)</td><td><strong>넓어진 핏</strong></td><td>전작 약점 보강</td></tr> → **<tr><td><strong>앞발 핏</strong></td><td>토박스 74.5mm (실측)</td><td><strong>토박스 71.0mm (실측)</strong></td><td>-3.5mm 좁아짐</td></tr>** | 표 셀: DB width 실측 74.5 / 71.0mm |
| 30 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3283 | 클라우드몬스터 3 | <td>비슷 (Lab 미공개)</td><td>맥스 쿠션 영역 유지</td> → **<td>123 (RunRepeat)</td><td>-14 SA</td>** | DB CM3 features: 힐 SA 123(RunRepeat 랩 실측) — Lab 미공개 아님, 137 대비 -14 |
| 31 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3284 | 클라우드몬스터 3 | <td>약간 감소 추정</td><td>반발보다 안정 지향</td> → **<td>58.7%</td><td>+2.2%p</td>** | DB CM3 에너지 리턴 힐 58.7%(실측) — 56.5%보다 높음, 감소 추정 틀림 |
| 32 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3294 | 클라우드몬스터 3 | <h3>1. 앞발 핏 확장 — 2의 가장 큰 약점 보강</h3> → **<h3>1. 앞발 핏 — 넓어지지 않고 오히려 좁아졌다</h3>** | CM3 토박스 74.5→71.0mm |
| 33 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3298 | 클라우드몬스터 3 | <p>3는 <strong>앞발 공간을 의도적으로 넓혔습니다</strong>. On이 공식적으로 "easier-fitting toe box" 표현을 사용했습니다. 다만 <strong>와이드 옵션은 여전히 없음</strong> — 발볼 4E급은 메가 와이드 필요라면 여전히 부적합.</p> → **<p>그런데 RunRepeat 실측 토박스는 2의 74.5mm에서 3는 <strong>71.0mm로 오히려 좁아졌습니다</strong>(랩 평균 73.2mm보다 2.2mm 좁음, 랩 평가 "below the average"). 한국 공식몰은 레귤러만 판매해 <strong>와이드 옵션도 …** | DB CM3 width: 71.0mm 실측·below average·국내 레귤러만; easier-fitting 공식 표현은 DB 근거 없음 |
| 34 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3338 | 클라우드몬스터 3 | <tr><td>2 쓰다가 토박스 압박 불만</td><td><strong>3 정가 22만원</strong></td><td>앞발 핏 확장이 결정적</td></tr> → **<tr><td>2 쓰다가 토박스 압박 불만</td><td><strong>3 비추</strong></td><td>3 토박스는 실측 71.0mm로 2(74.5mm)보다 좁음 — 와이드 옵션 있는 대안 검토</td></tr>** | CM3 앞발 확장 근거 소멸(71.0 < 74.5) |
| 35 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3351 | 1080 v15 | (227g, 219,000원)</strong> — 인피니온 폼 + 4E 와이드 옵션. 발볼 넓은 한국 러너 최우선 대안. 무게도 -68g 가벼움 → **(255g, 209,000원)</strong> — 인피니온 폼 + 4E 와이드 옵션. 발볼 넓은 한국 러너 최우선 대안. 무게도 -40g 가벼움** | 1080 v15 DB 255g(실측)·209,000원, CM3 295g 대비 -40g |
| 36 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3360 | 클라우드몬스터 3 | 반대로 <strong>"2 토박스가 좁아서 발가락 압박 있었다"</strong>면 3가 답. <strong>"좀 더 굴러가는 느낌이 필요하다"</strong> 싶어도 3. → **반대로 <strong>"좀 더 굴러가는 느낌이 필요하다"</strong> 싶다면 3. 단 <strong>"2 토박스가 좁아서 발가락 압박 있었다"</strong>면 3는 답이 아닙니다 — 3의 토박스는 실측 71.0mm로 2(74.5mm)보다 좁습니다.** | FAQ: CM3 토박스 더 좁음 |
| 37 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3363 | 클라우드몬스터 2/3 | 발볼이 표준보다 약간 넓다면 <strong>3 정가</strong>. → **발볼이 표준보다 약간 넓다면 토박스 실측이 더 넓은 <strong>2(74.5mm)</strong>가 3(71.0mm)보다 유리.** | FAQ: CM3 71.0 < CM2 74.5 |
| 38 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3372 | 클라우드몬스터 2/3 | <p>3가 2보다 핏이 넓어졌지만 <strong>와이드 옵션은 양쪽 모두 없음</strong>. 발볼 standard~약간 넓음까지는 3로 커버 가능, 4E급이면 비추. → **<p>실측 토박스는 오히려 3(71.0mm)가 2(74.5mm)보다 좁고 <strong>와이드 옵션은 양쪽 모두 없음</strong>. 발볼 standard~약간 넓음까지는 2가 그나마 낫고, 4E급이면 비추.** | FAQ: CM3 핏 넓어짐 틀림 |
| 39 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3379 | 클라우드몬스터 3 | 푹신함·가성비 vs 록커·넓은 핏 —  → **푹신함·가성비 vs 록커 전환감 — ** | CM3 넓은 핏 근거 없음(71.0mm) |
| 40 | on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3381 | 클라우드몬스터 3 | <p><strong>토박스 넓은 핏 + 굴러가는 페이스 유지</strong>가 우선이면 <a href="/shoes/on-cloudmonster-3">클라우드몬스터 3</a> 정가 22만원. 앞발 공간이 명확히 넓어졌고 강한 록커가 → **<p><strong>굴러가는 페이스 유지</strong>가 우선이면 <a href="/shoes/on-cloudmonster-3">클라우드몬스터 3</a> 정가 22만원. 토박스는 실측 71.0mm로 2(74.5mm)보다 좁아졌으니 발볼 여유는 기대하지 말고, 강한 록커가** | 결론: CM3 앞발 넓어짐 틀림 |
| 41 | asics-magic-speed-4-vs-5-comparison | 2026-05.ts:3485 | 1080 v15 | NB 1080 v14 → v15가 약 -24g이었는데 → **NB 1080 v14 → v15가 약 -30g(실측)이었는데** | v14→v15 경량 폭 24→30g(실측 285→255) |
| 42 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4404 | 1080 v15 | v15(261g/209,000원)을 RunRepeat 실측 + 외부 리뷰로 비교. 약 24g 감량(측정 기준이 다름: v14는 RunRepeat 실측, v15는 한국 공식 표기) → **v15(255g/209,000원)을 RunRepeat 실측 + 외부 리뷰로 비교. 약 30g 감량(RunRepeat 실측 285→255g)** | v15 실측 255g 생김 — 동일 기준 비교 30g(브랜드 라벨은 기준 불일치 해명용이었음) |
| 43 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4415 | 1080 v15 | v15는 v14 대비 약 24g 감량(285→261g, 단 v14는 RunRepeat 실측·v15는 한국 공식 표기라 기준이 다릅니다) → **v15는 v14 대비 약 30g 감량(RunRepeat 실측 285→255g)** | 실측 285→255, 30g |
| 44 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4416 | 1080 v15 | <li>한국 러너 핵심 개선 3가지: <strong>토박스 narrow → standard</strong> + <strong>4E 와이드 옵션 추가</strong> + <strong>힐 스택 +3mm(37→40mm)</strong></li> → **<li>한국 러너 핵심 변화 3가지: <strong>토박스 narrow → standard(실측 69.8→73.2mm)</strong> + <strong>4E 와이드 옵션 추가</strong> + <strong>힐 스택 실측 37mm 유지(브랜드 표기 40mm)</strong></li>** | v15 힐 40→실측 37.0(v14 37.0과 동일); 토박스 실측값 |
| 45 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4439 | 1080 v15 | <td><strong>261g</strong> (뉴발란스 공식)</td><td><strong>약 -24g</strong></td> → **<td><strong>255g</strong> (RunRepeat 실측)</td><td><strong>약 -30g</strong></td>** | 브랜드 라벨이지만 v14 열이 실측이라 동일 기준(실측 255g)으로 교체·차이 재계산. 규칙 엄수 시 이 edit 제외 가능 |
| 46 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4441 | 1080 v15 | <tr><td><strong>힐 스택 (실측)</strong></td><td>37mm</td><td>40mm</td><td>+3mm</td></tr> → **<tr><td><strong>힐 스택 (실측)</strong></td><td>37mm</td><td>37mm (브랜드 표기 40mm)</td><td>동일</td></tr>** | v15 실측 힐 37.0 |
| 47 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4442 | 1080 v15 | <td><strong>전족부 스택</strong></td><td>33mm</td><td>34mm</td><td>+1mm</td> → **<td><strong>전족부 스택</strong></td><td>33mm</td><td>31mm</td><td>-2mm</td>** | v15 전족 34→실측 30.6(DB 31) |
| 48 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4443 | 1080 v15 | <td>4.2mm / 6mm</td><td>6mm</td><td>+2mm (실측 기준)</td> → **<td>4.2mm / 6mm</td><td>6.4mm / 6mm</td><td>+2.2mm (실측 기준)</td>** | v15 드롭 실측 6.4 |
| 49 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4447 | 1080 v14/v15 | <td><strong>narrow (68mm 미만)</strong></td><td><strong>standard</strong></td> → **<td><strong>narrow (실측 69.8mm)</strong></td><td><strong>standard (실측 73.2mm)</strong></td>** | v14 68mm 미만→69.8, v15 73.2 |
| 50 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4451 | 1080 v14 | <td>약 400원/km</td><td>약 348원/km</td><td>-52원/km</td> → **<td>약 362원/km</td><td>약 348원/km</td><td>-14원/km</td>** | v14 DB costPerKm 362(199,000/550km) |
| 51 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4458 | 1080 v15 | <h3>1. 무게 약 24g 감량 ✅ → **<h3>1. 무게 약 30g 감량 ✅** | 실측 285→255 |
| 52 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4459 | 1080 v15 | <p>285g → 261g(뉴발란스 공식 남성 표기). 페가수스(+5g)·카야노(-2g)보다는 큰 폭입니다. 다만 v14 무게는 뉴발란스 공식 페이지마다 273g·298g으로 표기가 달라, 감량 폭은 대략 10~40g 범위로 보는 게 정확합니다.</p> → **<p>285g → 255g(RunRepeat 실측, 브랜드 표기는 남성 261g). 페가수스(+5g)·카야노(-2g)보다는 큰 폭입니다. 브랜드 표기끼리 비교하면 v14 298g(10.5oz) → v15 261g으로 감량 폭은 약 37g입니다.</p>** | v15 실측 255; v14 브랜드 298g(DB), 273g은 DB 근거 없음 |
| 53 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4473 | 1080 v14 | v14의 토박스는 narrow(68mm 미만)라 → **v14의 토박스는 narrow(실측 69.8mm, 랩 평균 73.2mm)라** | 68mm 미만→69.8mm |
| 54 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4475 | 1080 v15 | <h3>4. 힐 스택 +3mm + 드롭 +2mm ✅ 무릎 보호 강화</h3> → **<h3>4. 힐 스택 유지(실측 37mm) + 드롭 +2mm</h3>** | 힐 스택 실측 동일 37.0 |
| 55 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4476 | 1080 v15 | <p>힐 스택 37 → 40mm로 +3mm. 드롭은 4mm(실측)에서 6mm로 +2mm. <strong>뒤꿈치 착지 시 충격 흡수가 더 좋아지고</strong>, 종아리·아킬레스 부담은 약간 줄어듦. 무릎 약한 러너에게는 명확한 업그레이드.</p> → **<p>힐 스택은 실측 37.0mm로 v14와 같습니다(브랜드 표기 40mm). 드롭은 4.2mm(실측)에서 6.4mm(실측)로 약 +2mm. <strong>드롭이 높아져</strong> 종아리·아킬레스 부담은 약간 줄어듦. 스택 두께 자체는 그대로라 무릎 보호 측면의 차이는 크지 않음.…** | 스택 +3mm 근거 상실(실측 37.0 vs 37.0) |
| 56 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4491 | 1080 v15 | <td>가벼운 쿠션화 우선 (261g)</td><td><strong>v15</strong></td><td>약 24g 가벼움</td> → **<td>가벼운 쿠션화 우선 (255g)</td><td><strong>v15</strong></td><td>약 30g 가벼움(실측)</td>** | 255g, 30g |
| 57 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4492 | 1080 v15 | <td>261g + 인피니온 폼 반발</td> → **<td>255g(실측) + 인피니온 폼 반발</td>** | 255g |
| 58 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4495 | 1080 v15 | <td>40mm 스택 + 6mm 드롭 개선</td> → **<td>6mm 드롭 개선(힐 스택은 실측 37mm로 v14와 동일)</td>** | 힐 40→실측 37 |
| 59 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4497 | 1080 v15 | <td>약 -24g + standard 토박스</td> → **<td>약 -30g(실측) + standard 토박스</td>** | 30g |
| 60 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4523 | 1080 v15 | 약 24g 감량 폭은 크지 않아 → **약 30g(실측) 감량 폭은 크지 않아** | 30g |
| 61 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4534 | 1080 v15 | <td>힐 스택 40mm + 인피니온 충격 흡수</td> → **<td>인피니온 폼 + 6mm 드롭(힐 스택은 실측 37mm로 v14와 동일)</td>** | 힐 40→실측 37 |
| 62 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4552 | 880 v15 | NB 880 v15</a> — 16만원대, → **NB 880 v15</a> — 18만 9천원,** | DB 880 v15 정가·streetPrice 189,000 |
| 63 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4558 | 1080 v15 | <strong>약 24g 감량(측정 기준이 다름: v14는 RunRepeat 실측, v15는 한국 공식 표기) + 폼 자체 교체 + 토박스 standard → **<strong>약 30g 감량(RunRepeat 실측 285→255g) + 폼 자체 교체 + 토박스 standard** | 30g 실측 |
| 64 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4570 | 1080 v15 | <p>가능. 261g + 6mm 드롭 → **<p>가능. 255g(실측) + 6mm 드롭** | 255g |
| 65 | new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4573 | 1080 v14 | RunRepeat 실측 토박스 68mm 미만 narrow는 한국 러너 평균(70~75mm)보다 좁음. → **RunRepeat 실측 토박스 69.8mm narrow는 같은 랩 평균(73.2mm)보다 3.4mm 좁음.** | 69.8mm; 한국 평균 70~75mm는 DB 근거 없음→랩 평균으로 |
| 66 | nb-runhub-yeouido-2026-popup | 2026-05.ts:6275 | 1080 v15 | 토박스 75mm로 한국 발에 친화적. → **토박스 73.2mm(실측, 랩 평균 수준)에 남성 2E·4E 와이드도 있어 한국 발에 친화적.** | 토박스 75→73.2mm 실측 |
| 67 | lsd-training-beginner-guide-korea | 2026-05.ts:6425 | 1080 v15 | NB 1080 v15</a>:</strong> 토박스 75mm로 한국 발 친화적 → **NB 1080 v15</a>:</strong> 토박스 73.2mm(RunRepeat 실측, 랩 평균 수준)에 남성 2E·4E 와이드가 있어 한국 발 친화적** | 토박스 75mm → 73.2mm(실측, 평균) |
| 68 | 2026-pohang-iron-run | 2026-05.ts:7403 | 1080 v15 | NB 1080 v15</a>(261g)· → **NB 1080 v15</a>(255g)·** | 무게 261→255g(실측) |
| 69 | 2026-nb-1080v15-tryout-popup-d3 | 2026-05.ts:7635 | 1080 v15 | NB의 플래그십 쿠션화(261g, 인피니온 폼, 2E·4E 와이드) → **NB의 플래그십 쿠션화(255g 실측, 인피니온 폼, 남성 2E·4E 와이드)** | 255g 실측 |
| 70 | 2026-nb-1080v15-tryout-popup-d3 | 2026-05.ts:7648 | 1080 v15 | 1080 v15(261g·인피니온 폼·2E·4E 와이드) → **1080 v15(255g 실측·인피니온 폼·2E·4E 와이드)** | 255g |
| 71 | 2026-nb-1080v15-tryout-popup-d3 | 2026-05.ts:7662 | 1080 v15 | <strong>약 24g 경량화(285→261g, v14 랩 실측 대 v15 공식 표기)</strong> → **<strong>약 30g 경량화(RunRepeat 실측 285→255g)</strong>** | 30g 실측 동일 기준 |
| 72 | 2026-nb-1080v15-tryout-popup-d3 | 2026-05.ts:7665 | 1080 v15 | <li><strong>261g 경량 쿠션화</strong> — 힐 40mm 스택 맥스 쿠션 중 가벼운 편</li> → **<li><strong>255g(실측) 경량 쿠션화</strong> — 힐 37mm(실측) 스택 맥스 쿠션 중 가벼운 편</li>** | 255g, 힐 실측 37 |
| 73 | 2026-nb-1080v15-tryout-popup-d3 | 2026-05.ts:7692 | 1080 v15 | <p><strong>209,000원 · 261g · 힐 스택 40mm · 평점 4.9</strong></p> → **<p><strong>209,000원 · 255g(실측) · 힐 스택 37mm(실측) · 평점 4.9</strong></p>** | 255g, 37mm |
| 74 | 2026-nb-1080v15-tryout-popup-d3 | 2026-05.ts:7694 | 1080 v15 | (281g)보다 70~85g 가볍습니다. → **(281g)보다 26~48g 가볍습니다.** | 303-255=48, 281-255=26 (본문 표기 무게 기준) |
| 75 | 2026-nb-1080v15-tryout-popup-d3 | 2026-05.ts:7705 | 레벨 v5 | <p><strong>189,000원 · 220g · 데일리/템포 · 평점 4.5</strong></p> → **<p><strong>219,000원 · 220g · 데일리/템포 · 평점 4.5</strong></p>** | 레벨 v5 정가 189,000→219,000 |
| 76 | 2026-heavy-runner-running-shoes | 2026-05.ts:8168 | 1080 v15 | <td><strong>NB 1080 v15</strong></td><td>209,000원</td><td>261g</td><td>40mm</td> → **<td><strong>NB 1080 v15</strong></td><td>209,000원</td><td>255g</td><td>37mm</td>** | 무게 261→255g, 힐 스택 40→37mm(실측) |
| 77 | 2026-heavy-runner-running-shoes | 2026-05.ts:8173 | 860 v15 | <td><strong>NB 860 v15</strong></td><td>189,000원</td><td>330g</td><td>34mm</td> → **<td><strong>NB 860 v15</strong></td><td>189,000원</td><td>332g</td><td>40mm</td>** | 무게 330→332g(실측), 힐 스택 DB 40mm(실측 39.7) |
| 78 | new-balance-sc-elite-v5-review | 2026-06.ts:865 | SC 엘리트 v5 | 74.5mm 토박스는 슈퍼슈즈 중 가장 넓고, v4 대비 → **74.5mm 토박스는 슈퍼슈즈 중 넓은 축이고, v4 대비** | DB: '가장 넓은/유일' → '넓은 축/드문'(RunRepeat "more room in the toebox than most rivals") |
| 79 | new-balance-sc-elite-v5-review | 2026-06.ts:876 | SC 엘리트 v5 | 보다 압도적으로 넓어, 레이스 후반 발가락 눌림이 고질병이던 한국 러너에게 사실상 유일한 선택지입니다 → **보다 넓어, 레이스 후반 발가락 눌림이 고질병이던 한국 러너에게 드문 선택지입니다** | DB: '유일' 주장 삭제 → '드문' |
| 80 | new-balance-sc-elite-v5-review | 2026-06.ts:886 | SC 엘리트 v5 | <strong>토박스를 가장 넓게</strong> 풀어 → **<strong>토박스를 넓게</strong> 풀어** | DB: 슈퍼슈즈 중 '가장 넓음' → '넓은 축' |
| 81 | new-balance-sc-elite-v5-review | 2026-06.ts:900 | SC 엘리트 v5 | <td>슈퍼슈즈 중 가장 넓음 + 와이드 옵션</td> → **<td>슈퍼슈즈 중 넓은 축 + 와이드 옵션</td>** | DB: '가장 넓음' → '넓은 축'(74.5mm, 랩 평균 73.2mm) |
| 82 | new-balance-sc-elite-v5-review | 2026-06.ts:909 | SC 엘리트 v5 | <strong>카본의 추진력을 누리면서 발가락 눌림에서 자유로운</strong> 거의 유일한 슈퍼슈즈입니다 → **<strong>카본의 추진력을 누리면서 발가락 눌림 걱정을 덜 수 있는</strong> 드문 슈퍼슈즈입니다** | DB editorComment: '눌림 없이…유일한' → '눌림 걱정을 덜 수 있는 드문' |
| 83 | new-balance-sc-elite-v5-review | 2026-06.ts:948 | SC 엘리트 v5 | 토박스 74.5mm는 슈퍼슈즈 중 가장 넓고 와이드 옵션도 있어 → **토박스 74.5mm는 슈퍼슈즈 중 넓은 축이고 와이드 옵션도 있어** | DB: '가장 넓은' → '넓은 축' |
| 84 | on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3002 | 클라우드몬스터 3 | 3세대(클라우드몬스터 3 등)에서 핏이 다소 넓어졌지만, 발볼이 많이 넓다면 → **3세대 클라우드몬스터 3는 RunRepeat 실측 토박스가 71.0mm로 전작(74.5mm)보다 오히려 좁아졌으니, 발볼이 많이 넓다면** | FAQ: CM3 핏 넓어짐 틀림 |
| 85 | on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3073 | 클라우드러너 3 | <td>19.9만</td><td>317g</td> → **<td>19.9만</td><td>298g</td>** | CR3 무게 317→298g(RunRepeat 실측 US9) |
| 86 | on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3076 | 클라우드플로우 5 | <td>21.9만</td><td>278g</td> → **<td>21.9만</td><td>271g</td>** | CF5 무게 278→271g(실측) |
| 87 | on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3078 | 클라우드몬스터 3 | <td>295g</td><td>넓어진 핏·강한 록커, easy run</td> → **<td>295g</td><td>강한 록커, easy run (토박스 71.0mm로 좁아짐)</td>** | CM3 토박스 74.5→71.0mm |
| 88 | on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3093 | 클라우드몬스터 3 | 베스트셀러, 넓어진 핏. → **베스트셀러, 강한 록커(토박스는 실측 71.0mm로 좁은 편).** | CM3 넓어진 핏 틀림 |
| 89 | on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3109 | 클라우드몬스터 2 | 전작 맥시멀(토박스 좁음) → **전작 맥시멀(토박스 74.5mm 표준)** | CM2 토박스 74.5mm(랩 평균 73.2보다 넓음, DB 표준) |
| 90 | on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3110 | 클라우드몬스터 3 | 신형, 넓어진 핏·강한 록커 → **신형, 강한 록커(토박스 71.0mm로 좁아짐)** | CM3 토박스 71.0mm |
| 91 | on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3121 | 클라우드몬스터 3 | 3세대에서 핏이 다소 넓어졌지만 여전히 넉넉하다고 보긴 어렵습니다. → **3세대 클라우드몬스터 3는 토박스가 오히려 좁아졌고(실측 74.5→71.0mm), 모델별 편차도 큽니다.** | CM3 토박스 좁아짐 |
| 92 | on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3124 | 클라우드몬스터 3/클라우드서퍼/클라우드플로우 5 | <li><strong>그나마 넓어진 쪽</strong>: 클라우드몬스터 3(넓어진 핏), 클라우드서퍼 계열.</li> → **<li><strong>그나마 넓은 쪽</strong>: 클라우드플로우 5(토박스 77.2mm 실측, 국내는 여성 모델만), 클라우드몬스터 2(74.5mm). 클라우드서퍼 2는 73.5mm로 평균 수준.</li>** | CM3 71.0·CS맥스 71.4(narrow)로 넓은 쪽 아님; CF5 77.2·CM2 74.5가 넓음 |
| 93 | on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3125 | 클라우드몬스터 2/3·하이퍼/클라우드붐 스트라이크/클라우드러너 3/클라우드서퍼 맥스 | <li><strong>좁은 편(주의)</strong>: 클라우드몬스터 2, 레이싱·하이퍼 라인. 특히 → **<li><strong>좁은 편(주의)</strong>: 클라우드몬스터 3·클라우드러너 3(각 71.0mm), 클라우드서퍼 맥스(71.4mm). 특히** | CM2 74.5·스트라이크 73.4·하이퍼 73.3·3하이퍼 72.8은 평균 수준; 좁은 건 CM3/CR3 71.0·CS맥스 71.4 |
| 94 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3992 | 레벨 v5 | 레벨 V5는 와이드가 없지만 토박스 자체가 넓습니다. → **레벨 V5도 한국 공식몰 남성 2E가 있고 토박스 자체도 넓습니다(실측 75.0mm).** | 레벨 v5 와이드 없음→남성 2E(DB) |
| 95 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4048 | 1080 v15 | 1080 V15가 먼저 갈아타 전작보다 가벼워졌고(공개 수치 285g→261g) → **1080 V15가 먼저 갈아타 전작보다 가벼워졌고(RunRepeat 실측 285g→255g)** | 255g 실측 |
| 96 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4061 | 860 v15 | <td>18.9만</td><td>330g</td> → **<td>18.9만</td><td>332g</td>** | 330→332g |
| 97 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4062 | 레벨 v5 | <td>FuelCell</td><td>18.9만</td><td>220g</td> → **<td>FuelCell</td><td>21.9만</td><td>220g</td>** | 189,000→219,000 |
| 98 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4064 | 1080 v15 | <td>20.9만</td><td>261g</td> → **<td>20.9만</td><td>255g</td>** | 261→255g |
| 99 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4066 | SC 레벨 | <td>25.9만</td><td>218g</td><td>스택 40mm에 2E 와이드까지 → **<td>25.9만</td><td>207g</td><td>힐 스택 38mm(실측)에 2E 와이드까지** | 218→207g 실측, 힐 40→38.3 실측 |
| 100 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4067 | 발로스 V1 | <td>25.9만</td><td>261g</td> → **<td>25.9만</td><td>247g</td>** | 261→247g 실측 |
| 101 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4080 | 1080 v15 | 인피니온 폼으로 전작보다 가벼워져(공개 수치 285g→261g) → **인피니온 폼으로 전작보다 가벼워져(RunRepeat 실측 285g→255g)** | 255g |
| 102 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4081 | 레벨 v5 | 토박스가 넓어 와이드 없이도 발볼이 편합니다. → **토박스가 넓고(실측 75.0mm) 한국 공식몰 남성 2E 와이드도 있어 발볼이 편합니다.** | 와이드 있음(DB) |
| 103 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4082 | SC 레벨 | 218g·스택 40mm에 남성 2E 와이드까지 → **207g(실측)·힐 스택 38.3mm(실측)에 남성 2E 와이드까지** | 207g, 38.3mm |
| 104 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4104 | 레벨 v5 | <tr><td>레벨 V5</td><td>표준(D)만</td><td>토박스 75mm로 넓어 D로도 여유</td></tr> → **<tr><td>레벨 V5</td><td>표준(D) / 2E(남성)</td><td>토박스 75.0mm(실측)로 넓어 D로도 여유</td></tr>** | 남성 D·2E/여성 D(DB) |
| 105 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4105 | SC 엘리트 v6 | <tr><td>SC Elite V6</td><td>표준(D)만</td> → **<tr><td>SC Elite V6</td><td>표준(D) / 2E(남성)</td>** | V6 한국 공식몰 남성 D·2E(DB) |
| 106 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4113 | 1080 v14 | 1080 V14는 표준(D)의 토박스가 68mm 미만으로 좁습니다. → **1080 V14는 표준(D)의 토박스가 69.8mm(실측)로 좁습니다.** | 68mm 미만→69.8mm |
| 107 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4122 | 1080 v15 | V15(261g, 인피니온)으로 <strong>가벼워졌습니다</strong>(측정 출처가 달라 차이는 대략값) → **V15(255g, 인피니온)으로 <strong>가벼워졌습니다</strong>(둘 다 RunRepeat 실측, 약 30g)** | 255g 실측, 30g |
| 108 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4123 | 860 v15 | V15(330g, 이중 밀도 → **V15(332g, 이중 밀도** | 332g |
| 109 | new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4124 | SC 레벨 | <strong>SC 레벨</strong>(인피니온·Energy Arc, 스택 40mm) → **<strong>SC 레벨</strong>(인피니온·Energy Arc, 힐 스택 38.3mm 실측)** | 힐 40→실측 38.3 |
| 110 | stability-shoes-self-diagnosis-fit-guide-2026 | 2026-06.ts:4250 | 860 v15 | (한국 공식몰)</td><td>330g</td> → **(한국 공식몰)</td><td>332g</td>** | 무게 330→332g(실측) |
| 111 | max-cushion-running-shoes-knee-protection-2026 | 2026-06.ts:7236 | 1080 v15 | 맥스쿠션인데 261g으로 가볍고 → **맥스쿠션인데 255g으로 가볍고** | 무게 261→255g(실측) |
| 112 | max-cushion-running-shoes-knee-protection-2026 | 2026-06.ts:7255 | 1080 v15 | 👑</td><td>9</td><td><strong>261g</strong></td> → **👑</td><td>9</td><td><strong>255g</strong></td>** | 무게 261→255g |
| 113 | max-cushion-running-shoes-knee-protection-2026 | 2026-06.ts:7265 | 1080 v15 | 는 40mm 힐 스택의 푹신함을 갖추고도 <strong>261g으로 이 표에서 가장 가볍습니다</strong> → **는 37mm 힐 스택(실측)의 푹신함을 갖추고도 <strong>255g으로 이 표에서 가장 가볍습니다</strong>** | 힐 스택 40→37mm, 무게 261→255g |
| 114 | max-cushion-running-shoes-knee-protection-2026 | 2026-06.ts:7277 | 1080 v15 | 1080 v15</a>(261g)</li> → **1080 v15</a>(255g)</li>** | 무게 261→255g |
| 115 | kayano-33-vs-glycerin-gts-22-vs-860-v15-2026 | 2026-06.ts:7310 | 860 v15 | 가장 저렴(18만원대)하고 낮은 드롭(6mm)의 정공법 안정화 → **가장 저렴(18만원대)하고 드롭 7.6mm(실측, 브랜드 표기 6mm)의 정공법 안정화** | 드롭 6→7.6mm(실측) — '낮은 드롭' 근거 약화 |
| 116 | kayano-33-vs-glycerin-gts-22-vs-860-v15-2026 | 2026-06.ts:7329 | 860 v15 | <td>38 / 28mm</td><td>32 / 26mm</td> → **<td>38 / 28mm</td><td>40 / 32mm</td>** | 스택 32/26 → DB 40/32(실측 39.7/32.1) |
| 117 | kayano-33-vs-glycerin-gts-22-vs-860-v15-2026 | 2026-06.ts:7330 | 860 v15 | <td><strong>10mm</strong></td><td>6mm</td> → **<td><strong>10mm</strong></td><td>7.6mm</td>** | 드롭 6→7.6mm(실측) |
| 118 | kayano-33-vs-glycerin-gts-22-vs-860-v15-2026 | 2026-06.ts:7331 | 860 v15 | <td>305g</td><td>330g</td> → **<td>305g</td><td>332g</td>** | 무게 330→332g |
| 119 | kayano-33-vs-glycerin-gts-22-vs-860-v15-2026 | 2026-06.ts:7342 | 860 v15 | 드롭 6mm로 낮고 330g으로 묵직하지만 → **드롭 7.6mm(실측, 브랜드 표기 6mm)에 332g으로 묵직하지만** | 드롭 6→7.6mm, 무게 330→332g |
| 120 | on-cloudrunner-2-review-2026 | 2026-06.ts:8344 | 클라우드러너 3 | <td>275g (가벼움)</td><td>약 300g대</td> → **<td>275g (가벼움)</td><td>298g (실측)</td>** | CR3 무게 317→298g(실측) — 300g대 아님 |
| 121 | on-cloudrunner-3-review-2026 | 2026-06.ts:8411 | 클라우드러너 3 | 무겁지만(약 300g대) → **무겁지만(실측 298g)** | CR3 298g(실측) |
| 122 | on-cloudrunner-3-review-2026 | 2026-06.ts:8425 | 클라우드러너 3 | 8mm 드롭, 약 300g대 무게로 → **8mm 드롭, 약 300g(실측 298g) 무게로** | CR3 298g(실측) |
| 123 | on-cloudrunner-3-review-2026 | 2026-06.ts:8448 | 클라우드러너 3 | <strong>무겁습니다</strong> — 약 300g대로, → **<strong>무겁습니다</strong> — 약 300g(실측 298g)으로,** | CR3 298g(실측) |
| 124 | on-cloudrunner-3-review-2026 | 2026-06.ts:8460 | 클라우드러너 3 | <td>약 300g대 (무거워짐)</td> → **<td>298g (실측, 무거워짐)</td>** | CR3 298g(실측), CR2 275g 대비 +23g |
| 125 | on-cloudrunner-3-review-2026 | 2026-06.ts:8473 | 클라우드러너 3 | 토박스는 71mm 표준이고 어퍼 볼륨은 넉넉한 편이라 보통 발은 무난하나, <strong>발볼 넓은 러너</strong>는 → **토박스는 71.0mm(RunRepeat 실측)로 랩 평균 73.2mm보다 좁아지는 형태라, <strong>발볼 넓은 러너</strong>는** | DB에서 '어퍼 넉넉·발볼 약간 넓어도 무리없음' 삭제; 71.0mm "more restrictive shape" |
| 126 | on-cloudrunner-3-review-2026 | 2026-06.ts:8501 | 클라우드러너 3 | <p>토박스는 71mm 표준이지만 어퍼 볼륨이 넉넉해 보통~약간 넓은 발은 무난합니다. 단 <strong>한국 공식 와이드가 없어</strong> 발볼이 많이 넓다면 → **<p>전체 폭은 평균 수준이지만 토박스가 71.0mm(RunRepeat 실측, 랩 평균 73.2mm)로 앞쪽이 좁아지는 형태입니다. <strong>한국 공식 와이드도 없어</strong> 발볼이 넓다면** | FAQ: 넉넉 주장 삭제됨, 토박스 평균보다 좁음 |
| 127 | on-cloudsurfer-max-review-2026 | 2026-06.ts:8624 | 클라우드서퍼 맥스 | 거의 같은데 3만 원 더 비싸죠 → **거의 같은데 2만 원 더 비싸죠** | 219,000-199,000=2만원 |
| 128 | on-cloudsurfer-max-review-2026 | 2026-06.ts:8636 | 클라우드서퍼 맥스 | 거의 같은데 3만 원 비싸고 토박스는 → **거의 같은데 2만 원 비싸고 토박스는** | 2만원 차이 |
| 129 | on-cloudsurfer-max-review-2026 | 2026-06.ts:8676 | 클라우드서퍼 맥스 | 38g 무거운데 3만 원 비쌉니다 → **38g 무거운데 2만 원 비쌉니다** | 2만원 차이 |
| 130 | on-cloudsurfer-max-review-2026 | 2026-06.ts:8685 | 클라우드서퍼 맥스 | 71.4mm로 표준 하단. → **71.4mm(RunRepeat 실측)로 랩 평균 73.2mm보다 좁은 편.** | toBoxWidth standard→narrow(71.4mm, tapered) |
| 131 | on-cloudsurfer-max-review-2026 | 2026-06.ts:8707 | 클라우드서퍼 맥스 | (3만 원 싸고 토박스 넓음) → **(2만 원 싸고 토박스 넓음)** | 2만원 차이 |
| 132 | on-cloudsurfer-max-review-2026 | 2026-06.ts:8717 | 클라우드서퍼 맥스 | 가볍고, 3만 원 싸거든요 → **가볍고, 2만 원 싸거든요** | 2만원 차이 |
| 133 | on-cloudsurfer-max-review-2026 | 2026-06.ts:8720 | 클라우드서퍼 맥스 | 토박스가 71.4mm로 <strong>표준 하단</strong>이라 좁은 편이고 → **토박스가 71.4mm로 <strong>랩 평균(73.2mm)보다 좁은 편</strong>이고** | toBoxWidth narrow |
| 134 | on-cloudsurfer-max-review-2026 | 2026-06.ts:8726 | 클라우드서퍼 맥스 | <strong>3만 원 싼 <a href="/shoes/on-cloudsurfer-2"> → **<strong>2만 원 싼 <a href="/shoes/on-cloudsurfer-2">** | 2만원 차이 |
| 135 | on-cloudmonster-3-review-2026 | 2026-06.ts:8735 | 클라우드몬스터 3 | 3세대는 핏이 넓어져 한국 러너에게 한결 편해졌죠. → **다만 3세대 토박스는 71.0mm(RunRepeat 실측)로 전작(74.5mm)보다 좁아졌습니다.** | '핏 넓어짐' 틀림: 토박스 CM2 74.5→CM3 71.0mm(랩 평균 73.2) |
| 136 | on-cloudmonster-3-review-2026 | 2026-06.ts:8747 | 클라우드몬스터 3 | <li>3세대의 핵심 변화는 <strong>넓어진 핏</strong> — 토박스가 여유로워져 발볼 있는 한국 러너에게 한결 편해졌습니다</li> → **<li>3세대 토박스는 <strong>71.0mm(RunRepeat 실측)</strong>로 전작 클라우드몬스터 2(74.5mm)보다 좁아져, 발볼 있는 한국 러너는 착화 확인이 필요합니다</li>** | 토박스 CM2 74.5→CM3 71.0mm, 평균 이하 |
| 137 | on-cloudmonster-3-review-2026 | 2026-06.ts:8756 | 클라우드몬스터 3 | 3세대(<a href="/shoes/on-cloudmonster-3">클라우드몬스터 3</a>)는 그 성격을 유지하면서 <strong>핏을 넓혀</strong> 더 많은 발에 맞게 다듬었습니다. → **3세대(<a href="/shoes/on-cloudmonster-3">클라우드몬스터 3</a>)는 그 성격을 유지했지만, 토박스는 <strong>71.0mm(RunRepeat 실측)</strong>로 전작보다 좁아졌습니다.** | '핏을 넓혀' 틀림: 토박스 74.5→71.0mm |
| 138 | on-cloudmonster-3-review-2026 | 2026-06.ts:8796 | 클라우드몬스터 3 | 3세대로 핏이 넓어졌지만 표준 폭 한 가지뿐이라 → **토박스가 71.0mm(RunRepeat 실측, 랩 평균 73.2mm)로 평균보다 좁고 한국 공식몰엔 표준 폭 한 가지뿐이라** | 핏 넓어짐 틀림; DB 토박스 71.0mm, 한국 레귤러만 |
| 139 | on-cloudmonster-3-review-2026 | 2026-06.ts:8840 | 클라우드몬스터 3 | 3세대로 핏까지 넓어져 한국 러너에게 더 편해졌고요. → **다만 토박스는 71.0mm(RunRepeat 실측)로 전작보다 좁아져, 발볼 넓은 러너는 착화 확인이 필요합니다.** | 핏 넓어짐 틀림: 토박스 74.5→71.0mm |
| 140 | summer-breathable-running-shoes-2026 | 2026-06.ts:10370 | 클라우드플로우 5 | 온 클라우드플로우 5</a></td><td>4/5</td><td>278g</td><td>21.9만</td><td>탄탄한 반발 + 통기성. 도심 데일리·템포 겸용</td> → **온 클라우드플로우 5</a></td><td>2/5</td><td>271g</td><td>21.9만</td><td>탄탄한 반발. 통기성은 RunRepeat 2/5로 낮은 편 — 도심 데일리·템포 겸용</td>** | 통기성 4/5→2/5(RunRepeat), 무게 278→271g(실측) |
| 141 | fall-marathon-race-day-checklist-2026 | 2026-07.ts:1076 | SC 엘리트 v5 | (토박스 74.5mm)가 거의 유일하게 편하고 → **(토박스 74.5mm)가 드물게 여유 있는 편이고** | '유일/가장 넓은' → DB '드문/넓은 축' |
| 142 | nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026 | 2026-07.ts:1261 | SC 엘리트 v5 | <strong>"발볼 넓어도 신는 유일한 슈퍼슈즈"</strong> → **<strong>"발볼 넓어도 신기 좋은 드문 슈퍼슈즈"</strong>** | DB: '유일' → '드문' |
| 143 | nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026 | 2026-07.ts:1298 | SC 엘리트 v5 | <h2>뉴발란스 SC 엘리트 v5 — 발볼 넓어도 신는 유일한 슈퍼슈즈</h2> → **<h2>뉴발란스 SC 엘리트 v5 — 발볼 넓어도 신기 좋은 드문 슈퍼슈즈</h2>** | DB: '유일' → '드문'(본문 h2, title 필드 아님) |
| 144 | nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026 | 2026-07.ts:1299 | SC 엘리트 v5 | 레이스 중 발가락 눌림 없이 완주할 수 있는 거의 유일한 카본화</strong> → **레이스 중 발가락 눌림 걱정을 덜 수 있는 드문 카본화</strong>** | DB: '거의 유일' → '드문' |
| 145 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1598 | 1080 v15 | 1080 v15는 261g의 반응형 → **1080 v15는 255g(실측)의 반응형** | 255g |
| 146 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1609 | 1080 v15 | </a>는 261g의 반응형 → **</a>는 255g(실측)의 반응형** | 255g |
| 147 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1609 | 1080 v15 | 무게 차이는 <strong>20g</strong>으로 → **무게 차이는 <strong>약 26g</strong>으로** | 281-255=26 |
| 148 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1624 | 1080 v15 | <td><strong>261g</strong> (남성, 뉴발란스 공식)</td> → **<td><strong>255g</strong> (RunRepeat 실측)</td>** | 브랜드 라벨이지만 표 주석이 "RunRepeat 랩 실측 기준"이고 본문 차이 재계산과 일치시키려 실측으로. 규칙 엄수 시 제외 가능 |
| 149 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1625 | 1080 v15 | <td>40 / 34mm</td> → **<td>37 / 31mm</td>** | 스택 40/34→실측 37.0/30.6 |
| 150 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1640 | 1080 v15 | 무게는 261g으로 님버스보다 20g 가벼운 정도라 → **무게는 255g(실측)으로 님버스보다 약 26g 가벼운 정도라** | 255g, 26g |
| 151 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1662 | 1080 v15 | 261g의 1080 v15가 조금 더 가볍습니다 → **255g(실측)의 1080 v15가 조금 더 가볍습니다** | 255g |
| 152 | new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1666 | 1080 v15 | 261g과 281g으로 한 발 20g 차이라 → **255g(실측)과 281g으로 한 발 약 26g 차이라** | 255g, 26g |
| 153 | new-balance-sc-rebel-preview-2026 | 2026-07.ts:1782 | SC 레벨(SC Rebel V1) | 발매가 259,000원(218g·40/36mm·드롭 4mm) → **발매가 259,000원(공식 218g·40/36mm·드롭 4mm, RunRepeat 실측 207g·38.3/29.5mm·드롭 8.8mm)** | 출처 표기 없는 공식 수치 → 공식 라벨 + DB 대표값(실측) 병기 |
| 154 | new-balance-sc-rebel-preview-2026 | 2026-07.ts:1796 | SC 레벨(SC Rebel V1) | 확정</strong>됐습니다(218g·스택 40/36mm·드롭 4mm) → **확정</strong>됐습니다(공식 218g·스택 40/36mm·드롭 4mm, RunRepeat 실측 207g·38.3/29.5mm·드롭 8.8mm)** | 출처 표기 없는 공식 수치 → 공식 라벨 + 실측 병기 |
| 155 | new-balance-sc-rebel-preview-2026 | 2026-07.ts:1797 | SC 레벨(SC Rebel V1) | (278g → 218g, 60g 경량화) → **(RunRepeat 실측 278g → 207g, 71g 경량화)** | 실측 278 vs 공식 218 혼용 → 실측 기준 278→207, 71g(DB valueAdvantages) |
| 156 | new-balance-sc-rebel-preview-2026 | 2026-07.ts:1831 | SC 레벨(SC Rebel V1) | <tr><td><strong>SC 레벨</strong> (신규)</td><td><strong>218g</strong></td><td>40 / 36mm</td><td>4mm</td> → **<tr><td><strong>SC 레벨</strong> (신규)</td><td><strong>207g</strong></td><td>38 / 30mm</td><td>9mm</td>** | 비교표 다른 행은 DB 실측값 → SC 레벨도 DB 대표값(207g, 38/30, 8.8≈9mm) |
| 157 | new-balance-sc-rebel-preview-2026 | 2026-07.ts:1837 | SC 레벨(SC Rebel V1) | <strong>레벨 v5와 거의 같은 무게(218g vs 220g)인데 스택은 7mm 더 높습니다.</strong> 즉 "가벼운데 더 두껍다"가 이 신발의 핵심입니다. 레이싱화인 엘리트 v5와도 무게 차이가 20g에 불과하고요. → **<strong>레벨 v5보다 오히려 가벼운데(207g vs 220g) 힐 스택은 5mm 더 높습니다.</strong> 즉 "가벼운데 더 두껍다"가 이 신발의 핵심입니다. 레이싱화인 엘리트 v5와도 무게 차이가 9g에 불과하고요.** | 파생 재계산: 207 vs 220(-13g), 힐 38.3 vs 33.0(+5.3mm), 엘리트 v5 198g과 9g |
| 158 | new-balance-sc-rebel-preview-2026 | 2026-07.ts:1862 | SC 레벨(SC Rebel V1) | 스택이 7mm 높아진 SC 레벨이 답이 될 수 있습니다 → **힐 스택이 5mm가량 높은 SC 레벨이 답이 될 수 있습니다** | 파생 재계산: 공식 40 vs 33 → 실측 38.3 vs 33.0 |
| 159 | new-balance-sc-rebel-preview-2026 | 2026-07.ts:1864 | SC 레벨(SC Rebel V1) | 권하지 않습니다. 드롭 4mm에 플레이트가 들어간 40mm 스택이라, 러닝 경험이 쌓이지 않은 상태에서는 종아리·아킬레스 부담이 큽니다. → **권하지 않습니다. 플레이트가 들어간 38mm대 스택(RunRepeat 실측 힐 38.3mm, 드롭은 브랜드 표기 4mm·실측 8.8mm)이라, 러닝 경험이 쌓이지 않은 상태에서는 종아리·아킬레스 부담이 큽니다.** | 드롭 4mm·40mm 근거 → 실측 8.8mm·38.3mm; 부담 근거를 고스택+플레이트로(DB notRecommended 유지) |
| 160 | new-balance-sc-elite-v6-preview-2026 | 2026-07.ts:2232 | SC 엘리트 v5 | "발볼 넓어도 신는 유일한 슈퍼슈즈"라는 정체성이었는데 → **"발볼 넓어도 신는 드문 슈퍼슈즈"라는 정체성이었는데** | v5 DB: '유일' → '드문' |
| 161 | new-balance-sc-elite-v6-preview-2026 | 2026-07.ts:2267 | SC 엘리트 v5 | 카본화를 포기했던 한국 러너의 사실상 유일한 선택지였죠 → **카본화를 포기했던 한국 러너에게 드문 선택지였죠** | v5 DB: '유일' → '드문' |
| 162 | new-balance-sc-elite-v6-preview-2026 | 2026-07.ts:2303 | SC 레벨(SC Rebel V1) | (8/20 발매·$190·218g·스택 40/36·드롭 4mm) → **(8/20 발매·$190·공식 218g·스택 40/36·드롭 4mm)** | 공식 발표 수치에 출처 라벨 → DB 브랜드 표기와 정합 |
| 163 | hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4051 | 히에로 v9 | (히에로는 미국만 와이드 확인, 한국 판매 미확인) → **(히에로는 해외만 2E·4E 와이드, 한국 공식몰은 남성 D·여성 B로 와이드 없음)** | DB: '미국 2E·한국 미확인' → 한국 공식몰 남 D/여 B, 국내 와이드 없음(해외 2E·4E) |
| 164 | hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4076 | 히에로 v9 | <td>표준(73.4mm) / 미국 2E, <strong>한국 미확인</strong></td> → **<td>표준(73.4mm) / 해외 2E·4E, <strong>한국 없음</strong></td>** | DB: 국내 와이드 없음 |
| 165 | hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4100 | 히에로 v9 | 히에로는 미국엔 2E 와이드가 있으나 <strong>한국 공식몰 판매는 확인되지 않아</strong>, → **히에로는 해외엔 2E·4E 와이드가 있으나 <strong>한국 공식몰은 남성 D·여성 B뿐이라</strong>,** | DB: 국내 와이드 없음 |
| 166 | hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4118 | 히에로 v9 | 히에로 v9는 미국엔 2E 와이드가 있으나 한국 공식몰 판매 여부가 확인되지 않아, → **히에로 v9는 해외엔 2E·4E 와이드가 있으나 한국 공식몰은 남성 D·여성 B뿐이라,** | DB: 국내 와이드 없음 |
| 167 | new-balance-hierro-v9-trail-review-2026 | 2026-07.ts:4368 | 히에로 v9 | 미국 시장엔 <strong>2E 와이드</strong>가 있지만, <strong>한국 공식몰 와이드 판매 여부는 확인되지 않았습니다</strong>(구매 전 확인 필요). → **해외 시장엔 <strong>2E·4E 와이드</strong>가 있지만, <strong>한국 공식몰은 남성 D·여성 B로 국내 와이드가 없습니다</strong>.** | DB: 한국 공식몰 남 D/여 B, 국내 와이드 없음 |
| 168 | new-balance-hierro-v9-trail-review-2026 | 2026-07.ts:4401 | 히에로 v9 | 미국 시장엔 2E 와이드가 있으나 한국 공식몰 판매 여부는 확인되지 않았으니, 와이드가 꼭 필요하다면 구매 전 확인하거나 와이드 옵션이 확실한 → **해외 시장엔 2E·4E 와이드가 있으나 한국 공식몰은 남성 D·여성 B뿐이니, 와이드가 꼭 필요하다면 와이드 옵션이 확실한** | DB: 국내 와이드 없음 → '구매 전 확인' 불필요 |
| 169 | running-shoes-recommend-by-price-2026 | 2026-07.ts:4512 | 1080 v15 | <td>209,000</td><td>261g</td><td>프리미엄 쿠션</td><td>261g으로 가벼운 편인데 → **<td>209,000</td><td>255g</td><td>프리미엄 쿠션</td><td>255g으로 가벼운 편인데** | 무게 261→255g |
| 170 | running-shoes-recommend-by-price-2026 | 2026-07.ts:4524 | 1080 v15 | 1080 V15</a>(261g·프리미엄 쿠션의 정석) → **1080 V15</a>(255g·프리미엄 쿠션의 정석)** | 무게 261→255g |
| 171 | on-cloudboom-strike-2-preview-2026 | 2026-07.ts:5953 | 클라우드붐 스트라이크 | <td>3.2mm(랩 실측) / 6mm(공식)</td> → **<td>3.2mm(랩 실측) / 4mm(공식)</td>** | 스트라이크 1 공식 드롭 6→4mm(DB) |
| 172 | on-cloudboom-strike-2-preview-2026 | 2026-07.ts:5961 | 클라우드붐 스트라이크 | 1도 공식 6mm였지만 랩 실측은 3.2mm였습니다 → **1도 공식 4mm였지만 랩 실측은 3.2mm였습니다** | 스트라이크 1 공식 드롭 6→4mm(DB) |
| 173 | on-cloudboom-strike-2-preview-2026 | 2026-07.ts:5978 | 클라우드붐 스트라이크 | 1은 표준~좁은 편에 <strong>와이드 옵션이 없어</strong> 발볼 넓은 러너에게 빡빡했는데, → **1은 토박스 73.4mm(RunRepeat 실측, 랩 평균 73.2mm)로 표준이지만 <strong>와이드 옵션이 없어</strong> 발볼 넓은 러너에게는 부담이었는데,** | 스트라이크 1 토박스 73.4mm 표준(평균보다 0.2mm 넓음) — '표준~좁은 편' 틀림 |
| 174 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1365 | SC 레벨(SC Rebel V1) | SC 레벨은 218g·스택 40mm·드롭 4mm에 Energy Arc 플레이트를 넣은 "플레이트 해법", 슈퍼블라스트 3는 239g·스택 46.5mm·드롭 8mm에 플레이트가 아예 없는 "폼 해법"입니다. 무게 21g, 스택 6.5mm, 드롭 4mm가 한꺼번에 갈립니다. → **SC 레벨은 공식 218g·스택 40mm·드롭 4mm에 Energy Arc 플레이트를 넣은 "플레이트 해법", 슈퍼블라스트 3는 공식 239g·스택 46.5mm·드롭 8mm에 플레이트가 아예 없는 "폼 해법"입니다. 공식 수치로는 무게 21g, 스택 6.5mm, 드롭 4mm가 한꺼번에 …** | 라벨 없는 공식 수치 → '공식' 명시; 드롭 차이 논지에 실측 8.8mm 반영 |
| 175 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1376 | SC 레벨(SC Rebel V1) | <strong>가볍고 낮게</strong>(218g·40mm) → **<strong>가볍고 낮게</strong>(공식 218g·40mm)** | 공식 수치 라벨(슈퍼블라스트 공식 239g과 같은 기준) |
| 176 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1377 | SC 레벨(SC Rebel V1) | <li><strong>드롭이 두 배 차이</strong>입니다(4mm vs 8mm). 저드롭은 착지 때 아킬레스·종아리가 받는 부하를 키우는 방향이라, 이 4mm가 두 신발의 체감을 가르는 가장 큰 변수입니다</li> → **<li><strong>드롭은 표기상 두 배 차이</strong>입니다(공식 4mm vs 8mm). 그런데 RunRepeat 실측으로는 SC 레벨 드롭이 8.8mm라, 표기만 보고 저드롭 신발로 판단하면 어긋납니다</li>** | DB: 드롭 실측 8.8mm(브랜드 4mm) — '4mm가 가장 큰 변수' 근거 소멸 |
| 177 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1386 | SC 레벨(SC Rebel V1) | 218g은 레이싱화 영역(<a href= → **207g(실측)은 레이싱화 영역(<a href=** | DB 대표값 207g(실측); 비교 대상 SC 엘리트 v5 198g도 실측 |
| 178 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1419 | SC 레벨(SC Rebel V1) | 그 결과가 <strong>218g</strong>입니다. 스택 40mm를 얹고도 이 무게라, 훈련화보다는 레이싱화 쪽에 발을 걸칩니다. 같은 뉴발란스 카본 레이서 SC 엘리트 v5가 198g이니 차이가 20g에 불과합니다. 대체 대상인 <a href="/shoes/new-balance-… → **그 결과가 <strong>207g</strong>(RunRepeat 실측)입니다. 힐 스택 38.3mm(실측)를 얹고도 이 무게라, 훈련화보다는 레이싱화 쪽에 발을 걸칩니다. 같은 뉴발란스 카본 레이서 SC 엘리트 v5가 198g이니 차이가 9g에 불과합니다. 대체 대상인 <a href…** | 218→207g, 40→38.3mm, 차이 20→9g, 60→71g(DB 실측) |
| 179 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1421 | SC 레벨(SC Rebel V1) | 첫째, <strong>드롭 4mm에 40mm 스택</strong>이라 종아리·아킬레스 부하가 실재합니다. 8mm대 데일리에서 곧바로 넘어오면 초반 몇 주가 뻐근할 수 있고, → **첫째, <strong>38mm대 스택에 플레이트</strong>가 더해진 구성이라 종아리·아킬레스 부하가 실재합니다(브랜드 표기 드롭은 4mm지만 RunRepeat 실측은 8.8mm라 저드롭 부담은 표기보다 작습니다). 플레이트 신발 경험 없이 곧바로 넘어오면 초반 몇 주가 뻐근할 수 …** | 드롭 4mm 근거 → 실측 8.8mm; 부하 근거를 고스택+플레이트로(DB reviews 문체) |
| 180 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1427 | SC 레벨(SC Rebel V1) | 스택이 6.5mm 더 높으니 → **스택이 공식 기준 6.5mm 더 높으니** | SC 레벨 대비 파생 차이는 공식 40 vs 46.5 기준에서만 성립 → 라벨 |
| 181 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1427 | SC 레벨(SC Rebel V1) | 대신 무게가 239g으로 21g 무겁습니다. → **대신 무게가 공식 239g으로 21g 무겁습니다.** | DB: '21g 가벼움은 공식 무게 218 vs 239 기준으로만 유효' → 라벨 |
| 182 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1441 | SC 레벨(SC Rebel V1) | SC 레벨. 218g은 레이싱화 영역이고 → **SC 레벨. 207g(실측)은 레이싱화 영역이고** | DB 대표값 207g(실측) |
| 183 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1443 | SC 레벨(SC Rebel V1) | <li><strong>아킬레스·종아리가 약하거나 저드롭이 처음</strong> → 슈퍼블라스트 3. 4mm와 8mm의 차이는 생각보다 큽니다</li> → **<li><strong>아킬레스·종아리가 약하거나 플레이트 신발이 처음</strong> → 슈퍼블라스트 3. SC 레벨은 드롭이 표기 4mm·실측 8.8mm라, 변수는 드롭보다 높은 스택과 플레이트 조합입니다</li>** | 드롭 4 vs 8 근거 소멸(실측 8.8) → 권고는 DB notRecommended(아킬레스·종아리 이력)대로 유지, 근거만 교체 |
| 184 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1452 | SC 레벨(SC Rebel V1) | SC 레벨은 218g·40/36mm·플레이트가 들어간 슈퍼 트레이너입니다. 무게는 거의 같지만 스택이 7mm 차이 나고 → **SC 레벨은 207g·38.3/29.5mm(RunRepeat 실측)·플레이트가 들어간 슈퍼 트레이너입니다. 무게는 SC 레벨이 13g 가볍고 힐 스택이 5mm가량 높으며** | 레벨 v5 행은 실측(220g·33/27) → SC 레벨도 실측; 파생 13g·5.3mm |
| 185 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1469 | SC 레벨(SC Rebel V1) | 21g과 6.5mm를 맞바꾼 셈이라 → **공식 수치 기준으로 21g과 6.5mm를 맞바꾼 셈이라** | 21g·6.5mm는 공식 218/40 vs 239/46.5 기준에서만 성립 → 라벨 |
| 186 | new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1473 | SC 레벨(SC Rebel V1) | SC 레벨의 4mm 드롭 + 플레이트 조합은 어느 정도 주력이 쌓인 뒤가 안전합니다. → **SC 레벨의 높은 스택 + 플레이트 조합(드롭은 표기 4mm·실측 8.8mm)은 어느 정도 주력이 쌓인 뒤가 안전합니다.** | 드롭 4mm 근거 → 실측 8.8mm 반영 |
| 187 | new-balance-sc-rebel-korea-launch-2026 | 2026-08.ts:2524 | SC 레벨(SC Rebel V1) | 218g에 스택 40/36mm, 새 Infinion 폼과 → **207g(RunRepeat 실측)에 힐 스택 38.3mm(실측, 브랜드 표기 40/36mm), 새 Infinion 폼과** | 출처 표기 없는 공식 수치 → DB 대표값(실측) |
| 188 | new-balance-sc-rebel-korea-launch-2026 | 2026-08.ts:2529 | SC 레벨(SC Rebel V1) | 그래도 저드롭·플레이트 조합이라 착화감 편차가 크니 → **그래도 고스택·플레이트 조합이라 착화감 편차가 크니** | 드롭 실측 8.8mm — '저드롭' 근거 소멸 |
| 189 | new-balance-sc-rebel-korea-launch-2026 | 2026-08.ts:2558 | SC 레벨(SC Rebel V1) | <td>218g · 스택 40/36mm · 드롭 4mm · Infinion 폼 + Energy Arc 플레이트</td> → **<td>207g(실측) · 스택 38.3/29.5mm(실측) · 드롭 8.8mm(실측, 브랜드 4mm) · Infinion 폼 + Energy Arc 플레이트</td>** | 표 셀 값 → DB 대표값(실측) |
| 190 | new-balance-sc-rebel-korea-launch-2026 | 2026-08.ts:2598 | SC 레벨(SC Rebel V1) | 러닝 입문자(드롭 4mm + 플레이트 40mm 스택은 종아리 부담이 큽니다) → **러닝 입문자(플레이트가 들어간 38mm대 고스택은 종아리·발목 부담이 큽니다)** | 드롭 4mm·40mm → 실측 8.8mm·38.3mm; DB '발목 안정성은 데일리화보다 낮다' |
| 191 | on-cloudmonster-hyper-vs-3-hyper-comparison-2026 | 2026-08.ts:4915 | 클라우드몬스터 하이퍼 / 3 하이퍼 | 토박스 수치는 RunRepeat이 세대별로 측정 방식을 바꿔서(구형은 최대폭·엄지폭 2개 지점, 신형은 단일 폭) 두 세대를 숫자로 직접 비교할 수 없습니다. 서로 다른 기준의 값을 나란히 놓고 "몇 mm 넓어졌다"고 말하는 건 정확하지 않습니다. → **RunRepeat 실측 토박스(엄지 부위·US 9)는 구형 73.3mm, 3 하이퍼 72.8mm로 둘 다 랩 평균(73.2mm) 수준의 표준 폭이고, 3 하이퍼가 0.5mm 좁습니다. 최대폭은 구형 97.9mm, 3 하이퍼 95.0mm입니다.** | DB가 두 모델 모두 같은 기준(엄지 부위·US 9)의 토박스를 기재: 73.3 vs 72.8mm, 최대폭 97.9 vs 95.0 — '비교 불가' 근거 소멸 |
| 192 | on-cloudmonster-hyper-vs-3-hyper-comparison-2026 | 2026-08.ts:4958 | 클라우드몬스터 하이퍼 / 3 하이퍼 | 토박스 너비는 RunRepeat이 세대별로 측정 방식을 바꿔(구형 2지점, 신형 단일 폭) 직접 비교가 불가능하므로 표에서 제외했습니다. → **토박스 너비(RunRepeat 실측, 엄지 부위·US 9)는 구형 73.3mm, 3 하이퍼 72.8mm입니다.** | DB 동일 기준 토박스 73.3 vs 72.8mm |
| 193 | on-cloudmonster-hyper-vs-3-hyper-comparison-2026 | 2026-08.ts:4995 | 클라우드몬스터 하이퍼 / 3 하이퍼 | 토박스 수치는 세대별 측정 방식이 달라 숫자로 비교할 수 없습니다. → **토박스는 RunRepeat 실측 구형 73.3mm, 3 하이퍼 72.8mm로 둘 다 표준 폭입니다.** | DB 동일 기준 토박스 73.3 vs 72.8mm |
| 194 | carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3322 | SC 레벨 | 뉴발란스 SC 리벨 V1</a></td><td>259,000원</td><td>218g</td> → **뉴발란스 SC 리벨 V1</a></td><td>259,000원</td><td>207g</td>** | 무게 218→207g(실측) |
| 195 | on-cloudflow-5-review | 2026-09.ts:4457 | 클라우드플로우 5 | 다만 28.3 HA의 단단한 미드솔은 → **다만 48.3 AC(RunRepeat 실측)의 단단한 미드솔은** | 경도 28.3 HA→48.3 AC(CF5 실측) |
| 196 | on-cloudflow-5-review | 2026-09.ts:4468 | 클라우드플로우 5 | <li><strong>28.3 HA의 단단한 미드솔</strong> → **<li><strong>48.3 AC(실측)의 단단한 미드솔</strong>** | 경도 28.3 HA→48.3 AC |
| 197 | on-cloudflow-5-review | 2026-09.ts:4483 | 클라우드플로우 5 | <p>HA 28.3으로 미드솔이 단단한 편이라 → **<p>48.3 AC(실측)로 미드솔이 단단한 편이라** | 경도 28.3 HA→48.3 AC |
| 198 | on-cloudflow-5-review | 2026-09.ts:4487 | 클라우드플로우 5 | 토박스가 표준이지만 On은 와이드 옵션이 없습니다. → **토박스는 RunRepeat 실측 77.2mm(랩 평균 73.2mm)로 넓은 편이지만 On은 와이드 옵션이 없습니다.** | DB toBoxWidth wide, 77.2mm — '표준' 틀림 |
| 199 | on-cloudflow-5-review | 2026-09.ts:4509 | 클라우드플로우 5 | 미드솔이 단단해(28.3 HA) → **미드솔이 단단해(48.3 AC 실측)** | 경도 28.3 HA→48.3 AC |
| 200 | on-cloudrunner-3-max-review | 2026-09.ts:4549 | 클라우드러너 3 | 대가는 무게로, 311g에서 330g이 됩니다. → **대가는 무게로, On 한국 공식몰 표기 기준 311g에서 330g이 됩니다.** | CR3 DB 대표값 317→298g(실측)으로 바뀌어 311g은 한국 공식몰 표기임을 명시(기준 맞춘 비교 유지) |
| 201 | new-balance-balos-v1-review | 2026-09.ts:4886 | 발로스 V1 | 261g으로 1080 v15보다 가볍고 → **247g(실측)으로 1080 v15(255g)보다 가볍고** | 261→247g 실측 |
| 202 | new-balance-balos-v1-review | 2026-09.ts:4898 | 발로스 V1 | <li><strong>261g — <a href="/shoes/new-balance-1080-v15">1080 v15</a>(280g)보다 가볍습니다.</strong> 38.5mm 힐 스택의 → **<li><strong>247g(실측) — <a href="/shoes/new-balance-1080-v15">1080 v15</a>(255g, 실측)보다 가볍습니다.</strong> 37.8mm(실측) 힐 스택의** | 발로스 247g, 1080 v15 280→255g, 힐 38.5→37.8 |
| 203 | new-balance-balos-v1-review | 2026-09.ts:4912 | 발로스 V1 | 261g으로 가볍고 바운시한 → **247g(실측)으로 가볍고 바운시한** | 247g |
| 204 | new-balance-balos-v1-review | 2026-09.ts:4922 | 발로스 V1 | 261g으로 <a href="/shoes/new-balance-1080-v15">1080 v15</a>보다 가볍습니다. → **247g(실측)으로 <a href="/shoes/new-balance-1080-v15">1080 v15</a>(255g)보다 가볍습니다.** | 247g |
| 205 | new-balance-balos-v1-review | 2026-09.ts:4941 | 발로스 V1 | 261g으로 1080 v15보다 가볍기도 합니다. → **247g(실측)으로 1080 v15(255g)보다 가볍기도 합니다.** | 247g |

## 보고만 하는 문장

| 글 slug | 월 파일:줄 | 신발 | 분류 | 원문 일부 | 메모 |
|---|---|---|---|---|---|
| running-shoe-trends-2026-eva-replacement | 2026-02.ts: | 1080 v15 | DB 근거 없음 | 뉴발란스 1080 v15: 스택 높이 41mm로 공식 대회에서는 사용 불가하지만 | DB 힐 스택 37mm(실측)·브랜드 40mm — 41mm는 근거 없음. 고치면 '대회 사용 불가' 논지(40mm 규정)가 뒤집혀 문장 재작성이 필요해 보고만 |
| nike-pegasus-41-vs-42-comparison | 2026-05.ts: | 1080 v15 | 의견 | NB 1080 v15 — 폼 부드러움 1위. 발볼 넓은 라스트, 발볼 4E급에 추천 | DB 토박스 73.2mm=랩 평균(표준). '넓은 라스트'는 근거 약함, 4E 옵션은 사실 |
| new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3039 | 860 v15 | title/slug/링크 | 4E 와이드 사라진 신상 v15 살까 | title 필드 — v15는 한국 공식몰 남성 2E·4E이므로 "4E 와이드 사라진"은 틀림. title 편집 금지라 보고만 |
| new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3060 | 860 v14 | 시점 진술 | v14 X-Wide(4E) 단종 임박 — 평발 4E급 러너 주의 | callout 제목·재고 소진 전망(가을 4E 소진 등). 본문 사실 오류 부분만 edit |
| new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3089 | 860 v14 | DB 근거 없음 | <td><strong>D / 2E / 4E (3종)</strong></td> | DB: v14 해외 4폭, 한국 공식몰 미등재로 국내 판매 폭 확인 불가 — "한국 발볼 옵션 3종" 근거 없음 |
| new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3090 | 860 v15 | DB 근거 없음 | <td><strong>더 넓어짐 (Lab 미공개)</strong></td> | DB에는 v15 힐 베이스 폭 없음(최대폭 93.6mm만), 에너지 리턴 행의 "Lab 미공개"도 DB에 수치 없음 — 보존 |
| new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3122 | 860 v15 | 의견 | v14에서 v15로 가면 종아리·아킬레스 부담이 일시적으로 증가할 수 있습니다. 1~2주 적응 기간 필요. | 드롭 차이가 실측 -1.7mm로 줄어 과장 가능성 있으나 의견이라 보존 |
| new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3129 | 860 v14/v15 | 시점 진술 | 2026 5~12월 860 가격 전망 + X-Wide 단종 타임라인 | 가격·재고 전망 리스트 — 12월 항목의 "4E 옵션 없음"만 edit |
| new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3176 | 860 v14 | 혼재 | 발볼 4E급이면 무조건 860 v14 | 카야노 vs v14 FAQ — v15도 4E가 있어 "무조건"은 약해지나 v14 vs 카야노 문맥이라 보존 |
| new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3182 | 860 v14 | 시점 진술 | 현재(5월 말) 인기 사이즈(260~280mm 4E)는 풀 라인업 유지 중 | 5월 시점 재고 진술 |
| on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3240 | 클라우드몬스터 2/3 | title/slug/링크 | 토박스 좁은 2 살까, 핏 넓어진 3 살까 | title 자체가 CM3 핏 넓어짐 전제 — 실측은 74.5→71.0mm로 좁아짐. title 편집 금지라 보고만 |
| on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3277 | 클라우드몬스터 3 | DB 근거 없음 | <tr><td><strong>힐 스택</strong></td><td>37.9mm</td><td>35mm</td><td>-2.9mm</td></tr> | CM2는 실측(37.9), CM3는 공식(35) 비교 — CM3 실측 38.6/32.2mm 기준이면 오히려 +0.7mm. DB 대표값(35/29)은 그대로라 미수정, 본문 '힐 스택 -2.9mm' 논거 전체가 기준 혼용 |
| on-cloudmonster-2-vs-3-comparison | 2026-05.ts:3296 | 클라우드몬스터 2 | 혼재 | 클라우드몬스터 2에서 가장 자주 지적된 약점이 "<strong>토박스가 좁다</strong>"였습니다 | 리뷰 평판 진술(DB 리뷰에도 "표준 폭도 조이는 편")이나 실측 74.5mm는 랩 평균 73.2mm보다 넓음. 평판 서술이라 미수정, 바로 다음 문단(3298) 정정으로 대비됨 |
| new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4403 | 1080 v15 | title/slug/링크 | 약 24g 감량 + 토박스 narrow→standard — 사실상 다른 신발 | title 필드 — 실측 기준 약 30g. 편집 금지 |
| new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4478 | 1080 v15 | 의견 | 경량화의 대가 | 안정성 7→6은 DB와 일치. 원인 추정은 의견 |
| new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4489 | 1080 v14 | 혼재 | v14 4E 옵션 없음, v15 신규 추가 | DB v14: 해외 X-Wide 있음, 한국 공식몰 미등재로 국내 폭 확인 불가. "4E 와이드 추가/v14 4E 없음"(description·tldr·표·매트릭스·4521·4540)은 국내 기준이면 근거 불명, 해외 기준이면 틀림 — 보고만 |
| new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4508 | 1080 v14/v15 | 시점 진술 | 2026 5~12월 1080 가격 전망 | 가격·재고 전망 |
| new-balance-1080-v14-vs-v15-comparison | 2026-05.ts:4561 | 1080 v15 | 시점 진술 | v15 랩 수치는 작성 시점 미게시 | 작성 시점 진술(출처 줄 "작성 시점 일부 미게시"도 동일). 표 SA/HA "미게시"도 DB에 v15 랩 수치 없음 |
| nb-runhub-yeouido-2026-popup | 2026-05.ts:6276 | 레벨 v5 | DB 근거 없음 | FuelCell + 카본 플레이트가 아닌 TPU 인서트로 | DB 레벨 v5 plate "없음" — TPU 인서트 근거 없음 |
| 2026-nb-1080v15-tryout-popup-d3 | 2026-05.ts:7699 | 1080 v15 | DB 근거 없음 | 경량화 과정에서 힐 카운터가 부드러워짐 | DB에 힐 카운터 언급 없음 |
| 2026-nb-1080v15-tryout-popup-d3 | 2026-05.ts:7705 | 레벨 v5 | DB 근거 없음 | 219,000원 · 220g · 데일리/템포 · 평점 4.5 | 평점 4.5 vs DB rating 4 — 이번 감사 변경 항목 아님, 가격만 edit |
| kayano-33-vs-glycerin-gts-22-vs-860-v15-2026 | 2026-06.ts: | 카야노 33(타 브랜드) | DB 근거 없음 | 스택(힐/전족) 카야노 33 <strong>40 / 32mm</strong> | 범위 밖(아식스). DB는 37/28 — 별도 작업 필요 |
| adidas-adizero-evo-sl-value-supershoe-2026 | 2026-06.ts: | 레벨 v5 | DB 근거 없음 | 뉴발란스 리벨 v5 — 228g | DB 220g(이번 감사에서 바뀐 값 아님 — 기존 불일치). 범위 밖이라 보고만 |
| new-balance-sc-elite-v5-review | 2026-06.ts:900 | SC 엘리트 v5 | DB 근거 없음 | <td>슈퍼슈즈 중 가장 넓음 + 와이드 옵션</td> | (edits로 '가장 넓음'만 수정) '와이드 옵션'은 DB wideOptions true와 정합이나 detailedSpecs.width는 와이드가 'only in select markets like the US', 한국 공식몰 미등재(V6만 판매) — 국내 와이드 구매 가능으로 읽히지 않게 할지는 판단 필요. 같은 글 909·948행 '와이드 옵션' 동일 |
| new-balance-sc-elite-v5-review | 2026-06.ts:954 | SC 엘리트 v5 | 의견 | 대안이 거의 없어 그 가치가 분명합니다 | '넓은 발볼+카본 교집합에 대안이 거의 없다'는 평가 — 수치 진술 아님. 같은 글의 '유일' 표현은 edits로 '드문/넓은 축'으로 완화 |
| on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:2989 | On 전반 | 혼재 | On은 발볼 좁다는 점까지 정리했습니다 | description 메타. 브랜드 전반 진술 — 실측은 CF5 77.2·CM2 74.5(넓음)부터 CM3/CR3 71.0(좁음)까지 모델별 편차. 의견성이라 보고만 |
| on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3002 | On 전반 | 혼재 | 온은 토박스가 좁은 편이고 와이드 옵션을 거의 제공하지 않습니다 | FAQ 브랜드 전반 진술 — 국내 와이드 없음은 DB와 일치, 토박스는 모델별 편차 |
| on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3010 | On 전반 | 혼재 | 단 발볼은 좁은 편이라 한국 러너는 사이즈 주의 | TLDR 브랜드 전반 진술, 모델별 편차 있음 |
| on-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3076 | 클라우드플로우 5 | DB 근거 없음 | <td>Helion + Speedboard</td> | 폼 칸: DB midsoleType은 Helion HF + Helion EVA + Speedboard. 변경 항목 아님, 참고 |
| new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3991 | 1080 v15 | 브랜드 표기 명시—정합 | 전작보다 가벼워진(공식 남성 261g) | FAQ(JSON-LD) — 공식 표기 명시, DB에 브랜드 남성 261g 유지. 실측 255g로 바꿀지는 선택 |
| new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4083 | SC 엘리트 v5 | 혼재 | 토박스 74.5mm로 베이퍼플라이·알파플라이보다 넓은 전작 | "드문 선택지"로 이미 완화된 표현 — DB(넓은 축)와 정합, 타 브랜드 비교값은 담당 외 |
| on-cloudrunner-2-review-2026 | 2026-06.ts:8304 | 클라우드러너 2 | 시점 진술 | 방수 버전만 잔존 | DB는 한국 공식몰 2026-10-20 미등재로만 기록 — 방수 버전 잔존 여부 DB 근거 없음 |
| on-cloudrunner-3-review-2026 | 2026-06.ts:8447 | 클라우드러너 3 | DB 근거 없음 | 에너지 리턴이 53%로 낮아 | CR3 DB에 에너지 리턴·아웃솔 마모 0.6mm·RunRepeat 90점 수치 없음(모순은 아님) |
| on-cloudrunner-3-review-2026 | 2026-06.ts:8473 | 클라우드러너 3 | DB 근거 없음 | 미국 On에는 Cloudrunner 3 Wide(2E)가 있지만 한국 미출시 | DB는 "Cloudrunner 3 Wide는 국내 미판매"만 — 2E 폭 표기는 DB에 없음 |
| on-cloudsurfer-max-review-2026 | 2026-06.ts:8623 | 클라우드서퍼 맥스 | title/slug/링크 | 클라우드서퍼 2와 2만원 차이 | title은 이미 2만원(정합) — 본문 3만원은 edit로 정정 |
| on-cloudmonster-3-review-2026 | 2026-06.ts:8734 | 클라우드몬스터 3 | title/slug/링크 | 넓어진 핏·강해진 록커의 데일리 쿠션화 | title에 '넓어진 핏' — 토박스 74.5→71.0mm로 틀림. title 편집 금지라 보고만. (DB description/oneliner에도 '더 넓어진 핏'이 남아 있음 — DB 쪽 정리도 필요) |
| on-cloudmonster-3-review-2026 | 2026-06.ts:8762 | 클라우드몬스터 3 | DB 근거 없음 | Helion 단일 폼 — 부드럽고 푹신한 EVA·올레핀 블렌드 | DB midsole은 'Helion HF + CloudTec', 경도 49.9 AC '단단한 편'·Speedboard 탑재. 이번 감사 변경 항목은 아니라 보고만 |
| on-cloudmonster-3-review-2026 | 2026-06.ts:8795 | 클라우드몬스터 3 | DB 근거 없음 | 랩 테스트에서 토박스 내구성이 낮게 평가됐습니다 | DB에 토박스/어퍼 내구성 수치 없음 |
| on-cloudmonster-3-hyper-review-2026 | 2026-06.ts:8880 | 클라우드몬스터 3 하이퍼 | 혼재 | 힐 45mm / 전족 39mm 스택, 264g, 6mm 드롭 | 스택·드롭은 On 공식(실측 43.4/34.2·9.2mm), 무게는 실측 264g. DB 대표값과 일치하므로 수정 안 함. RunRepeat 89점은 DB 90점과 다름(이번 변경 항목 아님) |
| on-lightspray-cloudmonster-3-hyper-review-2026 | 2026-06.ts:9001 | 클라우드몬스터 3 | 혼재 | <td>301g</td> | CM3 301g은 RunRepeat 실측(DB 대표값 295g은 공식). 표의 다른 값(264g 실측)과 기준이 맞고 96g/32% 파생도 301 기준으로 정합 — 수정 안 함 |
| nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026 | 2026-07.ts:1281 | SC 엘리트 v5 | DB 근거 없음 | 넓은 편(74.5mm) / <strong>2E 有</strong> | DB는 wideOptions true지만 폭 규격(2E)과 한국 판매는 미확인(해외 일부 시장만, 한국 공식몰 미등재). '2E 有'를 고칠 근거 값이 DB에 없어 보고만 |
| new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026 | 2026-07.ts:1596 | 1080 v15 | title/slug/링크 | 뉴발란스 1080 v15 vs 아식스 님버스 28 — 프리미엄 데일리 쿠션 | title 이상 없음. 참고: 님버스 28 DB 무게는 현재 278g(실측)/283g(공식) — 본문 281g은 담당 외라 미수정, 26g 차이는 facts.md 기준(281g) |
| new-balance-sc-rebel-preview-2026 | 2026-07.ts:1810 | SC 레벨(SC Rebel V1) | 브랜드 표기 명시—정합 | <tr><td>무게</td><td><strong>218g</strong> (남 US 9.5) / 174g (여 US 7)</td></tr> | h2 '공식 스펙' 표(1810~1812: 218g/174g·40/36mm·드롭 4mm). DB detailedSpecs에 브랜드 표기 218g(US9.5)·174g·40/36mm·4mm가 그대로 남아 정합 |
| new-balance-sc-rebel-preview-2026 | 2026-07.ts:1852 | SC 레벨(SC Rebel V1) | 시점 진술 | 레벨 v5(189,000원) 사이 어딘가 | '이 글 초판에서 … 추정' 과거 시점 진술. 레벨 v5 정가는 현재 219,000원(공식몰 정가) |
| new-balance-sc-rebel-preview-2026 | 2026-07.ts:1856 | SC 레벨(SC Rebel V1) | 혼재 | <strong>RunRepeat 랩 데이터 미게시</strong>라 충격흡수·에너지 리턴·토박스 실측 mm는 아직 없습니다 | 날짜 없는 현재형 '랩 없음' 진술(callout '확정되지 않은 것들'). 이제 DB에 168 SA·72.7/78.4%·토박스 71.2mm(narrow, "tapered… very snug")가 있음 — 두 매체의 '좁다' 주관 평가와 실측이 같은 방향. 같은 callout의 '랩 수치가 나오면 정식 리뷰로 갱신' 약속도 미이행 상태. 시점·약속이 섞여 있어 고치면 글 성격이 바뀌므로 보고… |
| new-balance-sc-rebel-preview-2026 | 2026-07.ts:1868 | SC 레벨(SC Rebel V1) | DB 근거 없음 | SC 엘리트 v5·SC 트레이너 v3에 이어 이번에도 와이드가 빠지지 않았습니다 | 국내 출시 맥락인데 DB상 SC 엘리트 v5 와이드는 해외 일부 시장만(한국 공식몰 미등재), SC 트레이너 v3도 한국 공식몰 상품 0건으로 국내 폭 미확인. '이어 이번에도'의 국내 와이드 전례가 DB로 뒷받침되지 않음 |
| new-balance-sc-rebel-preview-2026 | 2026-07.ts:1871 | SC 레벨(SC Rebel V1) | 시점 진술 | RunRepeat 랩 데이터는 같은 날 기준 여전히 미게시로 | '같은 날(2026-08-22) 기준' 날짜 박힌 진술. 현재는 랩 게시됨(207g·38.3/29.5·8.8mm·168 SA·72.7/78.4%·71.2mm). 같은 문단 '무게 218g은 공식 수치이고 RTR 실측은 212g'은 브랜드 표기 명시—정합 |
| nb-run-your-way-seoul-10k-2026 | 2026-07.ts:2160 | SC 레벨(SC Rebel V1) | 브랜드 표기 명시—정합 | 공식 발표 기준 SC 레벨은 <strong>218g, 스택 40/36mm, 드롭 4mm</strong> | '공식 발표 기준' 명시, DB에 브랜드 218g·40/36mm·4mm 남음 |
| nb-run-your-way-seoul-10k-2026 | 2026-07.ts:2195 | 레벨 v5 | 시점 진술 | 오프라인 패키지가 7만원 오른 건 포함 신발이 레벨 v5에서 신제품 SC 레벨로 바뀐 영향이 큽니다 | 2025년 패키지 189,000원(당시 레벨 v5 포함) vs 2026 259,000원 비교 — 2025 시점 사실. 레벨 v5 현재 정가 219,000원과는 별개라 고치지 않음(표 2190행 '189,000원 (1종)'도 2025 열) |
| new-balance-sc-elite-v6-preview-2026 | 2026-07.ts:2232 | SC 엘리트 v6 | 혼재 | 공식 무게 190g으로 v5보다 가벼워졌습니다 | DB detailedSpecs: 190g은 RunRepeat 실측, 브랜드 표기는 198g(감사 전후 동일, 이번 변경분 아님). 글은 7/21 프레스릴리스를 '공식 190g'으로 인용 — 2245행 '공식 무게 190g', 2274행 표 '190g (공식)'·'-8~18g 경량', 2312행 '공식 스펙(190g·40/32·드롭 8)'도 같은 문제. 40/32·드롭 8은 DB 브랜드값과 정… |
| new-balance-sc-elite-v6-preview-2026 | 2026-07.ts:2246 | SC 엘리트 v6 | 시점 진술 | 랩 실측이 나올 때까지 <strong>와이드 옵션이 있는 v5</strong>가 안전한 선택입니다 | '랩 실측이 나올 때까지' 조건부 시점 권고. 랩 결과(71.4mm narrow)는 권고 방향을 지지하지만 v6도 이제 한국 공식몰 남성 2E 있음. 2320행 FAQ '출시 전이라… 아직 물음표…랩 실측을 기다렸다 판단'도 시점 진술 |
| new-balance-sc-elite-v6-preview-2026 | 2026-07.ts:2253 | SC 엘리트 v6 | 시점 진술 | [업데이트 9/27] 국내 출시 — 정가 389,000원, 폭은 D 하나 | 9/27 확인 날짜가 박힌 callout(제목·본문 '국내 공식몰의 폭 옵션은 D 하나뿐'). DB(2026-10-20 공식몰): 남성 D·2E / 여성 D, toBoxWidth narrow. 새 업데이트로 '2E 있음'을 알리는 것이 바람직 — 규칙 2상 보고만 |
| new-balance-sc-elite-v6-preview-2026 | 2026-07.ts:2262 | SC 엘리트 v6 | 시점 진술 | 아직 출시 전이라 RunRepeat 정량 랩은 미게시 상태이고, 한국 공식몰에도 리스팅이 없습니다 | '어제 공식 발표 — D-15' callout, 7/22 시점. 현재 랩 게시(71.4mm 등)·공식몰 389,000원 등재 |
| new-balance-sc-elite-v6-preview-2026 | 2026-07.ts:2280 | SC 엘리트 v6 | 시점 진술 | <td>$275 / 한국가 미정</td> | 출시 전(7/22) 작성 표. 현재 한국 정가 389,000원(DB). 2306행 '한국 가격은 미정', 2312행 '미확정: v6 토박스 내부 폭…한국 출시일·가격, 정량 랩 수치'도 동일 — 9/27 callout이 이미 '아래 본문은 출시 전(7월 22일) 작성'이라고 밝힘 |
| new-balance-sc-elite-v6-preview-2026 | 2026-07.ts:2283 | SC 엘리트 v6 | 혼재 | 토박스 폭·에너지 리턴 등 정량 랩 수치는 게시 전이며 | 날짜 없는 현재형 '랩 게시 전'. 현재 DB: 토박스 71.4mm(narrow), 에너지 리턴 힐 75.3%·전족 79.4%. 2299행 'v6의 내부 폭은 아직 어느 소스에도 없습니다'도 동일 |
| new-balance-sc-elite-v6-preview-2026 | 2026-07.ts:2324 | SC 엘리트 v6 | 혼재 | 지금은 <strong>v5가 안전한 선택</strong>입니다. 와이드 옵션이 실재하고 | v5 와이드는 DB상 해외 일부 시장만(한국 미등재·V6만 판매), 반면 v6는 한국 공식몰 남성 2E 있음 — '와이드=v5' 대비가 국내 기준으론 역전. 토박스(74.5 vs 71.4mm) 논거는 유효해 문장 전체 수정 시 뜻이 바뀜 |
| on-cloudboom-strike-2-preview-2026 | 2026-07.ts:5915 | 클라우드붐 스트라이크 2 | 시점 진술 | 7/30 발매 · 329,000원 … 191g | 스트라이크 2(일반판)는 DB에 없음 → 신형 값은 불명. 라이트스프레이 스트라이크 2(DB: 419,000원, 167g 실측, 토박스 69.0mm narrow)는 별도 신발이라 대상 아님 |
| on-cloudboom-strike-2-preview-2026 | 2026-07.ts:5944 | 클라우드붐 스트라이크 | 브랜드 표기 명시—정합 | 72.1% 에너지 리턴 + 201g 경량 … 겨울 경화율 6% | 스트라이크 1 값 DB와 일치(201g 실측, 72.1%, 6%). 알파플라이 3 대비 1만원 저렴(339,000 vs 329,000)도 정합 |
| on-cloudboom-strike-2-preview-2026 | 2026-07.ts:5978 | 클라우드붐 스트라이크 2 | DB 근거 없음 | 2의 토박스를 "roomy(넉넉하다)"고 평가 | 스트라이크 2 일반판 DB 없음 — RTR 인용이라 유지. 참고: 라이트스프레이 스트라이크 2는 DB상 토박스 69.0mm 'super snug' |
| new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1400 | SC 레벨(SC Rebel V1) | 브랜드 표기 명시—정합 | <tr><td>무게</td><td><strong>218g</strong> <small>(RTR 실측 212g)</small></td><td>239g</td></tr> | 표 캡션(1413행)이 'SC 레벨의 무게·스택·드롭·폼은 뉴발란스 공식 발표' 기준이라고 명시, DB에 브랜드 218g·40/36mm·4mm 남음(1400~1402행). 슈퍼블라스트 3도 공식 239g·46.5/38.5mm(DB 기존 표기)로 같은 기준 비교. 단 실측 비교는 207g vs 235g(28g)·드롭 8.8 vs 8.1mm라 캡션에 실측 병기 고려 |
| new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1413 | SC 레벨(SC Rebel V1) | 혼재 | <strong>두 모델 모두 RunRepeat 랩 측정치(충격흡수·에너지 리턴·토박스 실측 mm)가 없습니다</strong> | 날짜 없는 현재형. 현재 SC 레벨(168 SA·72.7/78.4%·71.2mm)과 슈퍼블라스트 3(DB 235g·45.8/37.7·토박스 71.6mm narrow) 모두 랩 있음. 같은 캡션의 '쿠션·반발 점수는 상대 평가'·'내구는 랩 마모 측정 전이라 추정'(DB도 마모 미게시)은 여전히 정합 |
| new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1431 | SC 레벨(SC Rebel V1) | 혼재 | 8mm 드롭 덕에 아킬레스 부담이 낮은 쪽 | 슈퍼블라스트 3 단락(담당 외 신발)이지만 '저드롭이 부담스러운 러너에게 안전한 선택'은 SC 레벨=저드롭 대비를 전제. SC 레벨 실측 드롭 8.8mm로 대비 근거 약화. 슈퍼블라스트 3 자체 값(아킬레스 excellent)은 DB와 정합이라 건드리지 않음. 참고: 슈퍼블라스트 3 '표준폭'(1407·1433행 등)은 DB상 이제 narrow(71.6mm) — 담당 외라 미처리 |
| new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1460 | SC 레벨(SC Rebel V1) | 혼재 | Q. 둘 다 랩 데이터가 없다는 게 무슨 뜻인가요? | FAQ 질문·답 전체가 '랩 미공개' 전제(답: '두 모델 모두 아직 공개되지 않았다…SC 레벨은 출시 직후라 랩 게시까지 보통 수개월'). 날짜 없는 현재형이라 보고만 — FAQ 교체/삭제 판단 필요 |
| new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1465 | SC 레벨(SC Rebel V1) | 혼재 | 토박스 실측 mm는 아직 없습니다. 2E는 | FAQ '2E면 괜찮나요?' 답 — 현재 토박스 71.2mm(narrow, "tapered… very snug") 실측 있음, 주관 평가와 같은 방향. 같은 답의 '실측이 없는 상태라 단정하기 어렵고, 저드롭·플레이트 조합은 착화감 편차도 크니'도 시점·사실(드롭 실측 8.8mm)이 섞임 |
| new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026 | 2026-08.ts:1477 | SC 레벨(SC Rebel V1) | 시점 진술 | 두 모델 모두 RunRepeat 랩 측정치는 미게시이며, 게시되면 이 글과 신발 상세를 갱신합니다. 작성 2026년 8월 22일. | 작성일 박힌 출처 각주. 이제 랩 게시됨 — 갱신 약속 미이행 |
| new-balance-sc-rebel-korea-launch-2026 | 2026-08.ts:2589 | SC 레벨(SC Rebel V1) | DB 근거 없음 | SC 트레이너 v3·엘리트 v5에 이어 이번에도 와이드가 빠지지 않았습니다 | DB: 엘리트 v5 와이드는 해외 일부 시장만(한국 미등재), 트레이너 v3는 한국 공식몰 상품 0건으로 국내 폭 미확인 — 국내 와이드 전례로 단정 불가 |
| new-balance-sc-rebel-korea-launch-2026 | 2026-08.ts:2603 | SC 레벨(SC Rebel V1) | 시점 진술 | 와이드 옵션 여부, RunRepeat 랩 실측(충격흡수·에너지 리턴·토박스 mm), 온라인/오프라인 발매 채널 세부는 2026년 8월 12일 기준 미공개입니다 | 8/12 날짜 박힌 진술. 같은 글 8/22 갱신(2E 확인)과도 충돌하고, 현재 랩도 게시됨. 2606행 각주 '랩 실측·와이드 옵션 확정 시 갱신합니다'도 같은 시점 문제 |
| on-cloudmonster-hyper-vs-3-hyper-comparison-2026 | 2026-08.ts:4915 | 클라우드몬스터 하이퍼 / 3 하이퍼 | 혼재 | On은 라인업 전반에서 와이드를 거의 내지 않기 때문에 | DB상 CM3·CR3·CS2·CS맥스 등은 해외 Wide 모델이 있고 국내 미판매 — '거의 내지 않는다'는 국내 기준으론 맞고 글로벌 기준으론 틀림. 같은 문구가 4995행에도 있음 |
| on-cloudrunner-3-max-review | 2026-09.ts:4555 | 클라우드러너 3 맥스 | 브랜드 표기 명시—정합 | On 한국 공식몰은 330g인데 해외 리테일러는 306g | 담당 외 신발(3 맥스) 값. 참고로 비교 대상 CR3는 DB 실측 298g(US 9)·공식몰 311g |
| on-cloudrunner-3-max-review | 2026-09.ts:4560 | 클라우드러너 3 | 시점 진술 | 2026년 8월 기준 … 미국 사이트에는 클라우드러너 3 Wide가 있습니다 | DB(2026-10-20)도 'Cloudrunner 3 Wide는 국내 미판매'로 정합 |
| on-cloudrunner-3-max-review | 2026-09.ts:4585 | 클라우드러너 3 | 의견 | 가볍고 단단한 감각을 원하면 기본형(199,000원) | 가격 199,000 정합. 무게 비교 기준은 4549행 수정으로 명시 |
| new-balance-balos-v1-review | 2026-09.ts:4884 | 발로스 V1 | title/slug/링크 | PEBA — 261g 바운시 쿠션 | title 필드 — 실측 247g(브랜드 남 261g). 편집 금지 |
| new-balance-balos-v1-review | 2026-09.ts:4886 | 발로스 V1 | DB 근거 없음 | 2E 와이드 옵션이 있어 | DB: 기존 DB 표준(D)·와이드(2E), 한국 공식몰 미등재로 국내 폭 확인 불가(wideOptions true) — 모순은 아니라 보존 |

## 논지 영향

- `kayano-33-vs-glycerin-gts-22-vs-860-v15-2026` (2026-06.ts:) — 860 v15의 차별점 '낮은 드롭(6mm)'이 실측 7.6mm로 카야노 33(8mm)과 거의 같아져 근거를 잃음 → '낮은' 수식어 제거
- `summer-breathable-running-shoes-2026` (2026-06.ts:) — 통기성 추천 표에 클라우드플로우 5가 4/5로 실렸으나 RunRepeat 2/5 — 여름 통기성 추천 근거 상실. 셀·한줄평만 사실대로 고치고 목록 제외 여부는 편집 판단으로 남김
- `2026-heavy-runner-running-shoes` (2026-05.ts:) — 860 v15 스택 34→40mm로 글 선정 기준('스택 36mm 이상')에 오히려 부합하게 됨(논지 강화)
- `new-balance-860-v14-vs-v15-comparison` (2026-05.ts:3039) — 글 전체 논지("v15에서 4E 단종 → 4E 평발은 v14 X-Wide가 유일한 답")가 DB(v15 한국 공식몰 남성 2E·4E)로 무너짐. tldr·callout·h3·매트릭스·FAQ·결론을 사실대로 고쳤으나 title과 "신상=좋다 공식 깨지는 케이스" 프레임은 남음. 드롭 변화도 -3mm→실측 -1.7mm로 축소
- `new-balance-1080-v14-vs-v15-comparison` (2026-05.ts:4475) — "힐 스택 +3mm(37→40) → 무릎 보호 강화, 무릎 약한 러너는 v15" 근거가 실측(둘 다 37.0mm)으로 사라짐. tldr "핵심 개선 3가지"·h3 4·매트릭스·부상표 무릎 행을 고쳤지만 무릎 행의 추천(v15)은 그대로
- `new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026` (2026-07.ts:1609) — 무게 차이 20→26g으로 커져 "크지 않다" 논지는 약간 약해짐(정도 문제로 유지)
- `nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026` (2026-07.ts:1298) — 글 전체 논지 '발볼이 가른다 → SC 엘리트 v5가 유일한 답'이 DB의 '넓은 축/드문'으로 약화. edits로 '유일' 표현만 완화. 또 '2E 有'(1281행)·'와이드(2E)까지'(1299행)의 국내 근거가 DB에 없음(v5 한국 미등재)
- `new-balance-sc-elite-v5-review` (2026-06.ts:876) — 후기 전체가 '발볼 넓은 러너의 사실상 유일한 카본'을 정체성으로 내세움(title 포함). DB는 '넓은 축/드문'(74.5mm, 랩 평균 73.2mm보다 1.3mm 넓음) — edits로 '유일/가장 넓음'만 완화했고 title·'1순위로 권합니다'·'대안이 거의 없어' 같은 강한 결론은 그대로라 톤 재검토 필요. 국내 와이드도 미확인
- `new-balance-sc-rebel-preview-2026` (2026-07.ts:1864) — 초보 비추천 근거가 '드롭 4mm→아킬레스 부담'이었으나 실측 드롭 8.8mm. edits로 근거를 고스택+플레이트로 바꿔 결론(비추천·아킬레스 caution, DB notRecommended)은 유지. 또 '레벨 v5와 거의 같은 무게'(1837행)는 실측상 SC 레벨이 13g 더 가벼워 '가벼운데 더 두껍다' 논지는 오히려 강화
- `new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026` (2026-08.ts:1377) — 핵심 논지 '무게 21g·스택 6.5mm·드롭 4mm가 한꺼번에 갈린다', 'SC 레벨=저드롭이라 아킬레스 부하'가 실측(SC 레벨 드롭 8.8mm vs 슈퍼블라스트 3 8.1mm)으로 드롭 축이 사실상 사라짐. edits로 TL;DR·약점·선택 가이드·FAQ의 드롭 근거를 고스택+플레이트로 교체했지만, '아킬레스 약하면 슈퍼블라스트 3'·'첫 슈퍼 트레이너는 슈퍼블라스트 3(8mm 드롭이라 적응 부담 적음)' 같은 결론의 무게가 줄어듦. 랩 미공개 전제 FAQ(1460행)도 남아 있음
- `new-balance-sc-rebel-korea-launch-2026` (2026-08.ts:2598) — 입문자 비추천 근거가 '드롭 4mm'였으나 실측 8.8mm — edits로 고스택·플레이트(발목 안정성 낮음, DB) 근거로 교체, 결론 유지
- `new-balance-sc-elite-v6-preview-2026` (2026-07.ts:2253) — 9/27 업데이트의 '국내 폭은 D 하나 → 발볼 러너는 v5' 흐름이 DB(한국 공식몰 남성 2E 있음)와 충돌. 토박스 71.4mm narrow라 '발볼 슈퍼슈즈 자리를 못 이었다'는 결론 자체는 유효하나 '와이드가 있는 쪽=v5' 대비는 국내 기준 역전(v5는 한국 미등재)
- `on-cloudmonster-2-vs-3-comparison` (2026-05.ts:3240) — 글 전체 논지(title·TLDR·매트릭스·FAQ·결론)가 "토박스 좁은 2 vs 핏 넓어진 3"인데 실측은 CM2 74.5mm → CM3 71.0mm로 반대. "2 토박스 불만이면 3" 추천이 뒤집혀 해당 문장들을 2 우위/3 비추로 정정. title은 편집 불가라 본문과 불일치 남음 — 글 재구성 또는 title 수정 검토 필요
- `on-cloudmonster-2-vs-3-comparison` (2026-05.ts:3284) — CM3 에너지 리턴(58.7%)이 CM2(56.5%)보다 높고 SA는 123으로 낮음 — "3는 반발보다 안정 지향" 대비 서술 근거 약화
- `on-running-shoes-lineup-tier-guide-2026` (2026-06.ts:3119) — 섹션 6의 '3세대에서 넓어짐/몬스터 3가 넓은 쪽' 구도가 무너짐 — 실측은 CM3·CR3·CS맥스가 좁은 쪽, CF5·CM2가 넓은 쪽. 목적별 추천의 CM3 '넓어진 핏' 근거도 소멸
- `on-cloudrunner-3-review-2026` (2026-06.ts:8473) — CR3 "어퍼 넉넉해 발볼 약간 넓어도 무난" 근거 삭제(토박스 71.0mm, restrictive shape) — 발볼 관련 장점 서술이 주의 사항으로 바뀜
- `on-cloudmonster-3-review-2026` (2026-06.ts:8747) — 글의 핵심 셀링포인트('3세대 핵심 변화 = 넓어진 핏, 발볼 있는 한국 러너에게 편해짐')가 사실과 반대(토박스 74.5→71.0mm, 평균 이하). title·description·TL;DR·도입·단점·마무리 전반에 깔린 논지가 무너짐 — title은 수동 검토 필요
- `on-cloudboom-strike-2-preview-2026` (2026-07.ts:5978) — '발볼 — 이번 세대에서 가장 반가운 변화'는 1이 '표준~좁은 편'이라는 전제에 기댐. 1은 실측 73.4mm 표준이라 대비 효과가 약해짐(2의 roomy 평가는 RTR 인용으로 유지)
- `on-cloudmonster-hyper-vs-3-hyper-comparison-2026` (2026-08.ts:4915) — '토박스는 측정 방식이 달라 비교 불가'라는 반복 논점이 DB의 동일 기준 수치(73.3 vs 72.8mm)로 사라짐 — 3곳 수정. 결론(3 하이퍼 우위)엔 영향 없음

## 검증 명령·결과

- 시작: `curl … https://allrunabout.com` → 200 / `npm ci` 성공 / `npm run validate` 기준선 에러 0·경고 9 (신발 160·대회 125)
- 편집: 제안 205건 모두 python3 -I 로 "파일 안에서 정확히 1회 등장"을 확인한 뒤 치환했습니다(1건이라도 어긋나면 중단하는 방식). 0회로 나온 1건은 원문을 다시 확인해 고친 뒤 적용했습니다.
- 새로 들어간 문장에 금지 표현(후기·실사용·시승·테스트·1인칭)이 늘지 않았습니다(추가 줄과 삭제 줄의 출현 수가 같음).
- 뉴발란스 커밋 후 `npm run validate`: 에러 0·경고 9 / On 커밋 후 `npm run validate`: 에러 0·경고 9
- `npm run build`: exit 0 (sitemap 생성, "✅ 광고·GA 로딩 정상 (4개 페이지 유형)")
- `git push -u origin cloud/blog-sync-newbalance-on`: 성공
