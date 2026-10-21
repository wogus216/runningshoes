# 작업 B4: 블로그 정합성 정정 — Brooks·Mizuno (2026-10-20)

- 작업 브랜치: `cloud/blog-sync-brooks-mizuno` (커밋 2개: 브룩스 `319a581`, 미즈노 1개 — 브랜드 단위)
- 기준: `git diff 8af0c32 origin/main(6609d63) -- src/lib/data/shoes/brooks src/lib/data/shoes/mizuno`
- 수정 65곳(브룩스 38 · 미즈노 26 + 문구 보정 1), 블로그 파일 4개(2026-05/06/07/09). slug·title·내부 링크는 손대지 않음.

## 1. 못 한 것
- 외부 출처 재확인 안 함 — 기준은 현재 main DB 값뿐.
- 날짜가 박힌 프리뷰·비교 글 2편(하이페리온 엘리트 6 프리뷰, 라이더 29 vs 30)은 규칙대로 고치지 않고 '보고만' 항목으로 남김. 랩 수치가 나와서 갱신 안내 박스를 따로 달지는 편집 판단이 필요함.
- RF 2 vs 3 글의 **title**에 들어 있는 '드롭 그대로'는 틀린 말이 됐지만 title 금지 규칙 때문에 그대로 둠(아래 '논지 영향' 참고).
- 이번 감사에서 바뀌지 않은 기존 불일치(고스트 17 발볼 분류, 아드레날린 가격 199,000원 표기 등)는 범위 밖이라 보고만 함.

## 2. 바뀐 사실 표 (DB diff)
| 신발 | 바뀐 값 (이전 → 현재 main) |
|---|---|
| 브룩스 아드레날린 GTS 25 | 무게 300→295g · 스택 37/27→36/26mm(랩 36.1/25.9) · 드롭 10→10.2mm(랩) · 경도 문구 'HA 25.1 다소 단단'→'랩 34.5 AC, 평균(35.4) 수준' · 토박스 72.8mm 문구 추가(표준 유지) |
| 브룩스 고스트 17 | 경도 문구 '17.0 HA 역대 가장 부드러움'→'랩 36.2 AC'(수치 필드 변경 없음) |
| 브룩스 고스트 18 | 토박스 standard→**narrow**(70.6mm) · 경도 단위 HA→AC(40.5) |
| 브룩스 글리세린 22 / GTS 22 | 폭 문구에 랩 토박스 73.7 / 73.2mm 추가(판정 표준 유지) |
| 브룩스 글리세린 맥스 2 | 무게 312→318g(랩) · **wideOptions true→false**(한국 공식몰 미디엄만) · 랩 스택 45.4/37.3·드롭 8.1mm 병기(수치 필드는 브랜드 47/41·6mm 유지) · 특징 '스너그 피팅'→'랩 토박스 73.4mm' |
| 브룩스 하이페리온 엘리트 6 | 무게 198→193g · 드롭 7→11(랩 10.6mm) · 스택 40/33→39.9/29.3mm · 토박스 standard→**narrow**(70.3mm) |
| 브룩스 하이페리온 맥스 3 | 폭 문구 '94.9mm'(Width/Fit)→랩 토박스 72.6mm(판정 표준 유지) |
| 미즈노 웨이브 호라이즌 8 | 폭 문구 '2E Wide 옵션'→'한국 공식몰은 SW(넓음 4E, 179,000원)만 판매, 일반 폭 미등재' |
| 미즈노 인스파이어 21 | 문구 '토박스 98.4mm'→'전체 폭 98.4mm·토박스 73.5mm' |
| 미즈노 인스파이어 22 | SW 의미 '미확인'→'넓음(4E)', 일반 폭 '보통(2E)' |
| 미즈노 리벨리온 플래시 2 | 폭 문구 '94.8mm'(Width/Fit)→랩 토박스 73.3mm |
| 미즈노 리벨리온 플래시 3 | 드롭 3→8(랩 7.5mm) · 스택 37.5/34.5→40/32.5mm(랩) |
| 미즈노 라이더 29 | 폭 문구 '98.4mm'→랩 토박스 76.7mm(넓음 유지) |
| 미즈노 라이더 30 | 무게 267→266g · 드롭 8→9(랩 9.1) · 스택 42.5/34.5→42.8/33.7mm · 폭 '표준 추정(랩 대기)'→'표준, 랩 토박스 73.3mm' |
| 미즈노 웨이브 스카이 9 | 무게 290→295g · 토박스 standard→**narrow**(70.4mm, 와이드 있음) |

가격·에너지 리턴·충격흡수·플레이트·폼 명칭은 두 브랜드 모두 바뀌지 않음.

## 3. 수정한 문장 표
줄 번호는 작업 브랜치 기준(줄 수 변화 없음). 파생 수치는 다시 계산함: 글리세린 맥스 2와 v1 무게 차 +7→+13g, 본디 9와 차이 9→15g, RF3 힐 스택 차 +2.3→+4.8mm, 전족 +2.2→+0.2mm, 드롭 차 '동일'→+4.6mm.

### brooks

| 글 slug | 파일:줄 | 이전 → 이후 |
|---|---|---|
| new-balance-860-v14-vs-v15-comparison | 2026-05.ts:3162 | `브룩스 아드레날린 GTS 25</a> (303g, 199,000원)` → `브룩스 아드레날린 GTS 25</a> (295g, 199,000원)` |
| asics-kayano-32-vs-33-comparison | 2026-05.ts:4780 | `카야노보다 가벼운 안정화 (294g)` → `카야노보다 가벼운 안정화 (295g)` |
| 2026-heavy-runner-running-shoes | 2026-05.ts:8033 | `<span class="stat-sub">249,000원 / 312g</span>` → `<span class="stat-sub">249,000원 / 318g</span>` |
| 2026-heavy-runner-running-shoes | 2026-05.ts:8060 | `<p><strong>가격 249,000원 · 무게 312g · 평점 4.0</strong></p>` → `<p><strong>가격 249,000원 · 무게 318g · 평점 4.0</strong></p>` |
| 2026-heavy-runner-running-shoes | 2026-05.ts:8062 | `312g으로 무겁지만 그만큼 안정적이며` → `318g으로 무겁지만 그만큼 안정적이며` |
| 2026-heavy-runner-running-shoes | 2026-05.ts:8106 | `4만원 저렴. 312g→293g으로 더 가볍고` → `4만원 저렴. 318g→293g으로 더 가볍고` |
| 2026-heavy-runner-running-shoes | 2026-05.ts:8165 | `<td><strong>Glycerin Max 2</strong></td><td>249,000원</td><td>312g</td><td>43mm</td><td>쿠션화</td><td>2E</td>` → `<td><strong>Glycerin Max 2</strong></td><td>249,000원</td><td>318g</td><td>43mm</td><td>쿠션화</td><td>없음</td>` |
| brooks-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3396 | `<td>DNA Loft v3 + GuideRails</td><td>18.9만</td><td>300g</td>` → `<td>DNA Loft v3 + GuideRails</td><td>18.9만</td><td>295g</td>` |
| brooks-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3402 | `<td>24.9만</td><td>312g</td><td>47mm 극강 맥시멀</td>` → `<td>24.9만</td><td>318g</td><td>47mm 극강 맥시멀</td>` |
| brooks-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3404 | `<td>31.9만</td><td>198g</td><td>드롭 7mm로 낮춘 6세대, 5보다 2만원 비쌈(랩 미게시)</td>` → `<td>31.9만</td><td>193g</td><td>공식 드롭 7mm(랩 실측 10.6mm), 5보다 2만원 비쌈</td>` |
| brooks-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3447 | `<td>고스트 18(국내 2E) · 고스트 17 · 고스트 맥스 3(전작, 73.4mm) · 고스트 맥스 4(71.3mm, 국내 와이드) · 글리세린 22 · 글리세린 맥스 2 · 아드레날린 GTS · 글리세린 GTS</td>` → `<td>고스트 17 · 고스트 맥스 3(전작, 73.4mm) · 고스트 맥스 4(71.3mm, 국내 와이드) · 글리세린 22 · 아드레날린 GTS · 글리세린 GTS</td>` |
| brooks-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3448 | `<tr><td><strong>표준</strong></td><td>하이페리온 맥스 3</td></tr>` → `<tr><td><strong>표준</strong></td><td>글리세린 맥스 2(73.4mm, 한국 와이드 미판매) · 하이페리온 맥스 3</td></tr>` |
| brooks-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3449 | `<tr><td><strong>좁음 (주의)</strong></td><td>하이페리온 엘리트 5(레이싱)</td></tr>` → `<tr><td><strong>좁음 (주의)</strong></td><td>고스트 18(70.6mm, 국내 와이드 2E 있음) · 하이페리온 엘리트 6(70.3mm, 레이싱) · 하이페리온 엘리트 5(레이싱)</td></tr>` |
| brooks-glycerin-max-1-vs-2-comparison | 2026-06.ts:6595 | `맥스 2(249,000원·312g·47mm)` → `맥스 2(249,000원·318g·47mm)` |
| brooks-glycerin-max-1-vs-2-comparison | 2026-06.ts:6629 | `<td>305g</td><td><strong>312g</strong></td><td>+7g (스택 증가분)</td>` → `<td>305g</td><td><strong>318g</strong></td><td>+13g (스택 증가분)</td>` |
| brooks-glycerin-max-1-vs-2-comparison | 2026-06.ts:6643 | `<tr><td><strong>와이드 옵션</strong></td><td>있음</td><td>있음</td><td>동일</td></tr>` → `<tr><td><strong>와이드 옵션</strong></td><td>있음</td><td>없음 (한국 공식몰 미디엄만)</td><td>맥스 2는 와이드 없음</td></tr>` |
| brooks-glycerin-max-1-vs-2-comparison | 2026-06.ts:6686 | `발볼 넓다면 맥스 2는 반드시 시착하거나 와이드 옵션 + 반 사이즈 업을 고려하세요.` → `발볼 넓다면 맥스 2는 한국 공식몰에 와이드가 없으니 반드시 시착하고 반 사이즈 업을 고려하세요.` |
| brooks-glycerin-max-1-vs-2-comparison | 2026-06.ts:6706 | `<td>312g·반응성 4~5, 리커버리 전용.` → `<td>305~318g·반응성 4~5, 리커버리 전용.` |
| brooks-glycerin-max-1-vs-2-comparison | 2026-06.ts:6772 | `② 맥스 2 와이드 옵션 + 반 사이즈 업을 시착 후 결정하세요.` → `② 맥스 2는 한국 공식몰에 와이드가 없으니 반 사이즈 업을 시착 후 결정하세요.` |
| brooks-glycerin-max-1-vs-2-comparison | 2026-06.ts:6775 | `v1 305g·반응성 5, 맥스 2 312g·반응성 4` → `v1 305g·반응성 5, 맥스 2 318g·반응성 4` |
| stability-running-shoes-overpronation-flat-feet-2026 | 2026-06.ts:7411 | `<td>GuideRails</td><td>300g</td><td>189,000</td>` → `<td>GuideRails</td><td>295g</td><td>189,000</td>` |
| bondi-9-vs-glycerin-max-2-cushion-2026 | 2026-07.ts:4702 | `글리세린 맥스 2(249,000원·312g·힐 47mm·강화 로커)` → `글리세린 맥스 2(249,000원·318g·힐 47mm·강화 로커)` |
| bondi-9-vs-glycerin-max-2-cushion-2026 | 2026-07.ts:4714 | `본디가 2만 원 싸고 9g 가볍고` → `본디가 2만 원 싸고 15g 가볍고` |
| bondi-9-vs-glycerin-max-2-cushion-2026 | 2026-07.ts:4733 | `<td><strong>303g</strong></td><td>312g (+9g)</td>` → `<td><strong>303g</strong></td><td>318g (+15g)</td>` |
| bondi-9-vs-glycerin-max-2-cushion-2026 | 2026-07.ts:4756 | `312g으로 가장 무겁고, 가격도 24만 9천 원으로 가장 비쌉니다. <strong>피팅이 스너그(꽉 끼는 편)</strong>라 발볼 넓은 러너는 와이드 + 반 사이즈 업을 함께 고려해야 합니다.` → `318g으로 가장 무겁고, 가격도 24만 9천 원으로 가장 비쌉니다. <strong>피팅이 스너그(꽉 끼는 편)</strong>라 발볼 넓은 러너는 반 사이즈 업을 고려해야 합니다(한국 공식몰은 와이드 미판매).` |
| bondi-9-vs-glycerin-max-2-cushion-2026 | 2026-07.ts:4764 | `→ 둘 다 와이드가 있지만, 본디는 와이드 필수, 글리맥스는 와이드 + 반 사이즈 업까지 고려` → `→ 본디는 와이드 필수, 글리맥스는 한국 공식몰에 와이드가 없어 반 사이즈 업까지 고려` |
| bondi-9-vs-glycerin-max-2-cushion-2026 | 2026-07.ts:4777 | `<strong>반 사이즈 업(+와이드)</strong>을 권장합니다.` → `<strong>반 사이즈 업</strong>을 권장합니다(한국 공식몰은 와이드 미판매).` |
| adrenaline-gts-25-vs-kayano-33-stability-2026 | 2026-07.ts:3975 | `<tr><td>무게(US 9)</td><td>300g</td><td>298g</td></tr> ⏎     <tr><td>힐 / 전족 스택</td><td>37 / 27mm</td>` → `<tr><td>무게(US 9)</td><td>295g</td><td>298g</td></tr> ⏎     <tr><td>힐 / 전족 스택</td><td>36 / 26mm</td>` |
| adrenaline-gts-25-vs-kayano-33-stability-2026 | 2026-07.ts:3978 | `<td>DNA Loft v3(단단, HA 25.1)</td>` → `<td>DNA Loft v3(중간 경도, 랩 34.5 AC)</td>` |
| adrenaline-gts-25-vs-kayano-33-stability-2026 | 2026-07.ts:3990 | `대신 DNA Loft v3가 <strong>다소 단단한 착화감</strong>(HA 25.1)이라 푹신함을 기대하면 아쉬울 수 있습니다.` → `대신 DNA Loft v3는 랩 경도 34.5 AC로 랩 평균(35.4 AC)과 비슷한 <strong>중간 경도</strong>라 푹신함을 기대하면 아쉬울 수 있습니다.` |
| adrenaline-gts-25-vs-kayano-33-stability-2026 | 2026-07.ts:3994 | `RunRepeat 실측은 힐 36.8mm로, 아드레날린(37mm)과 사실상 같습니다.` → `RunRepeat 실측은 힐 36.8mm로, 아드레날린(36.1mm)과 사실상 같습니다.` |
| adrenaline-gts-25-vs-kayano-33-stability-2026 | 2026-07.ts:3995 | `무게는 300g vs 298g으로 사실상 동일합니다.` → `무게는 295g vs 298g으로 사실상 동일합니다.` |
| adrenaline-gts-25-vs-kayano-33-stability-2026 | 2026-07.ts:4022 | `힐 스택은 카야노 36.8mm 대 아드레날린 37mm로 사실상 동일하고` → `힐 스택은 카야노 36.8mm 대 아드레날린 36.1mm로 사실상 동일하고` |
| running-shoes-recommend-by-price-2026 | 2026-07.ts:4494 | `<td>189,000</td><td>300g</td><td>안정화</td><td>평발·과회내 지지, 대표 안정화</td>` → `<td>189,000</td><td>295g</td><td>안정화</td><td>평발·과회내 지지, 대표 안정화</td>` |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3697 | `<a href="/shoes/brooks-ghost-18">브룩스 고스트 18</a></td><td>169,000원</td><td>289g</td><td>약 211원</td><td>표준</td>` → `<a href="/shoes/brooks-ghost-18">브룩스 고스트 18</a></td><td>169,000원</td><td>289g</td><td>약 211원</td><td>좁음(70.6mm)</td>` |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3751 | `(와이드로 해결 가능)</td><td><a href="/shoes/puma-velocity-nitro-4">벨로시티 나이트로 4</a></td>` → `(와이드로 해결 가능)</td><td><a href="/shoes/brooks-ghost-18">고스트 18</a>, <a href="/shoes/puma-velocity-nitro-4">벨로시티 나이트로 4</a></td>` |
| brooks-ghost-18-review | 2026-09.ts:6207 | `토박스 실측 70.6mm로 이 사이트 기준(68~75mm) 표준 구간이지만, RunRepeat 자체 평균(73.2mm) 대비로는 좁은 편입니다.` → `토박스 실측 70.6mm로 RunRepeat 평균(73.2mm)보다 2.6mm 좁은 편입니다.` |
| brooks-ghost-18-review | 2026-09.ts:6247 | `토박스가 실측 70.6mm로 표준~좁은 편이라` → `토박스가 실측 70.6mm로 좁은 편이라` |

### mizuno

| 글 slug | 파일:줄 | 이전 → 이후 |
|---|---|---|
| 2026-heavy-runner-running-shoes | 2026-05.ts:8172 | `<td><strong>Wave Sky 9</strong></td><td>189,000원</td><td>290g</td>` → `<td><strong>Wave Sky 9</strong></td><td>189,000원</td><td>295g</td>` |
| 2026-heavy-runner-running-shoes | 2026-05.ts:8143 | `<li><strong>주의:</strong> 토박스 표준 — 발볼 매우 넓으면 다른 브랜드</li>` → `<li><strong>주의:</strong> 토박스 좁은 편(RunRepeat 랩 70.4mm) — 발볼 넓으면 와이드 버전 선택</li>` |
| mizuno-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:2687 | `후속 라이더 30은 아직 랩 실측이 없어 폭 평가가 갈립니다(Believe in the Run은 좁은 편, Road Trail Run은 볼륨이 큰 편으로 평가).` → `후속 라이더 30은 랩 토박스가 73.3mm로 평균 수준이라 29보다 좁습니다(리뷰어 평가는 Believe in the Run 좁은 편, Road Trail Run 볼륨이 큰 편으로 갈림).` |
| mizuno-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:2757 | `<td>17.9만</td><td>267g</td><td>30세대 대개편, 힐 42.5mm(공식)로 스택 상승</td>` → `<td>17.9만</td><td>266g</td><td>30세대 대개편, 힐 42.5mm(공식)로 스택 상승</td>` |
| mizuno-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:2759 | `<td>18.9만</td><td>290g</td><td>44mm 질소 폼, 구름 위 러닝</td>` → `<td>18.9만</td><td>295g</td><td>44mm 질소 폼, 구름 위 러닝</td>` |
| mizuno-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:2773 | `30세대에서 스택·폼·플레이트가 모두 바뀌었고, 아직 랩 실측이 없어 일부 수치는 공식 스펙 기준입니다.` → `30세대에서 스택·폼·플레이트가 모두 바뀌었고, 랩 토박스는 73.3mm로 평균 수준입니다.` |
| mizuno-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:2809 | `<td>웨이브 라이더 30(랩 실측 전, 와이드 옵션 있음) · 웨이브 스카이 · 리벨리온 플래시 ·` → `<td>웨이브 라이더 30(73.3mm, 와이드 옵션 있음) · 리벨리온 플래시 ·` |
| mizuno-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:2810 | `<td><strong>좁음 (주의)</strong></td><td>하이퍼워프 퓨어 · 엘리트(레이싱)</td>` → `<td><strong>좁음 (주의)</strong></td><td>웨이브 스카이 9(70.4mm, 와이드 옵션 있음) · 하이퍼워프 퓨어 · 엘리트(레이싱)</td>` |
| mizuno-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:2814 | `레이싱(하이퍼워프 퓨어·엘리트)만 좁으니 발볼 넓으면 반 치수 크게 신으세요.` → `레이싱(하이퍼워프 퓨어·엘리트)은 좁으니 발볼 넓으면 반 치수 크게 신으세요. 맥스 쿠션 웨이브 스카이 9도 토박스가 좁은 편(70.4mm)이라 발볼이 넓다면 와이드 버전을 고르세요.` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6839 | `미즈노 웨이브 리벨리온 플래시 2(189,000원)와 플래시 3(199,000원) 세대 비교. 상단 폼 PEBA→ENERZY XP(TPEE) 교체, 스택 35.2→37.5mm, 반응성 7→8 개선이 핵심. 3mm 저드롭 미드풋 템포 트레이너, 부상별·세일별 구매 매트릭스.` → `미즈노 웨이브 리벨리온 플래시 2(189,000원)와 플래시 3(199,000원) 세대 비교. 상단 폼 PEBA→ENERZY XP(TPEE) 교체, 힐 스택 35.2→40.0mm, 반응성 7→8 개선이 핵심. 랩 드롭은 2.9→7.5mm로 높아진 미드풋 템포 트레이너, 부상별·세일별 구매 매트릭스.` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6851 | `<li>스택 35.2→37.5mm, 반응성 점수 7→8로 상승. 단 <strong>3mm 저드롭·미드풋 착지 전용</strong>이라는 정체성은 그대로 — 둘 다 힐스트라이커·과내전 입문자에겐 비추입니다.</li>` → `<li>힐 스택 35.2→40.0mm, 반응성 점수 7→8로 상승. 랩 드롭은 <strong>2.9→7.5mm로 높아져 3은 저드롭에서 벗어났지만</strong>, 둘 다 힐스트라이커·과내전 입문자에겐 비추입니다.</li>` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6875 | `<td><strong>힐 스택</strong></td><td>35.2mm</td><td><strong>37.5mm</strong></td><td>+2.3mm (쿠션 ↑)</td>` → `<td><strong>힐 스택</strong></td><td>35.2mm</td><td><strong>40.0mm</strong></td><td>+4.8mm (쿠션 ↑)</td>` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6876 | `<td><strong>전족부 스택</strong></td><td>32.3mm</td><td><strong>34.5mm</strong></td><td>+2.2mm</td>` → `<td><strong>전족부 스택</strong></td><td>32.3mm</td><td><strong>32.5mm</strong></td><td>+0.2mm</td>` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6877 | `<td><strong>드롭</strong></td><td>2.9mm (Lab)</td><td>3mm</td><td>사실상 동일 (저드롭 유지)</td>` → `<td><strong>드롭</strong></td><td>2.9mm (Lab)</td><td>7.5mm (Lab)</td><td>+4.6mm (저드롭 → 중간 드롭)</td>` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6887 | `<td>표준 (94.8mm) / 와이드 없음</td>` → `<td>표준 (토박스 73.3mm) / 와이드 없음</td>` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6893 | `무게·드롭·로커 지오메트리 같은 골격은 거의 그대로 두고` → `무게·로커 지오메트리 같은 골격은 거의 그대로 두고` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6921 | `<h3>2. 스택 35.2→37.5mm ✅ 쿠션 여유 ↑, 장거리 부담 ↓</h3> ⏎ <p>힐·전족부 모두 약 2mm씩 두꺼워졌습니다.` → `<h3>2. 힐 스택 35.2→40.0mm ✅ 쿠션 여유 ↑, 장거리 부담 ↓</h3> ⏎ <p>힐은 4.8mm 두꺼워졌고 전족부는 거의 같습니다(32.3→32.5mm).` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6924 | `<h3>3. 드롭 3mm 유지 ⚠️ 여전히 미드풋 전용</h3> ⏎ <p>2가 2.9mm, 3이 3mm로 <strong>저드롭 정체성은 그대로</strong>입니다. 이건 미즈노가 "힐로 착지하지 마세요"라는 메시지를 계속 유지한다는 뜻이죠. 힐스트라이커가 두 신발 중 무엇을 신어도 초반 2주는 아킬레스·종아리에 부담이 옵니다.` → `<h3>3. 드롭 2.9→7.5mm ⚠️ 3은 저드롭에서 벗어남</h3> ⏎ <p>RunRepeat 랩 실측 드롭은 2가 2.9mm, 3이 7.5mm로 <strong>3은 저드롭이 아닙니다</strong>. 극단적 저드롭은 2에만 해당해, 힐스트라이커가 2를 신으면 초반 2주는 아킬레스·종아리에 부담이 옵니다.` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6944 | `<td>힐 37.5mm 스택으로 후반 쿠션 여유</td>` → `<td>힐 40.0mm 스택으로 후반 쿠션 여유</td>` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6946 | `<td>3mm 저드롭·낮은 안정성, 안정화로 분리</td>` → `<td>2는 2.9mm 저드롭, 둘 다 낮은 안정성 — 안정화로 분리</td>` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6982 | `<td>둘 다 good — 단 저드롭이라 적응기 필요</td>` → `<td>둘 다 good — 단 2는 저드롭이라 적응기 필요</td>` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:6986 | `<td>3mm 저드롭, 최소 2주 적응기 필수</td>` → `<td>2는 2.9mm 저드롭, 최소 2주 적응기 필수</td>` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:7014 | `토박스는 표준(2 기준 94.8mm)이라` → `토박스는 표준(2 기준 랩 73.3mm)이라` |
| mizuno-wave-rebellion-flash-2-vs-3-comparison | 2026-06.ts:7017 | `<p>권하지 않습니다. 2(2.9mm)·3(3mm) 모두 <strong>극단적 저드롭 + 힐 베벨 로커</strong> 설계라 힐스트라이크 습관이 있으면 초반에 아킬레스건이 당깁니다.` → `<p>권하지 않습니다. 2(랩 드롭 2.9mm)는 <strong>극단적 저드롭 + 힐 베벨 로커</strong> 설계라 힐스트라이크 습관이 있으면 초반에 아킬레스건이 당깁니다. 3은 랩 드롭이 7.5mm로 높아졌지만 무릎 부담 등급이 caution이라 힐스트라이커에게는 여전히 권하지 않습니다.` |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3725 | `<td>179,000원</td><td>267g</td><td>약 256원</td>` → `<td>179,000원</td><td>266g</td><td>약 256원</td>` |
| mizuno-wave-horizon-8-review | 2026-09.ts:5969 | `토박스가 넓은(wide) 편이고 <strong>2E 와이드 옵션까지 있어</strong> 발볼 넓은 한국 러너에게 최적입니다` → `토박스가 넓은(wide) 편이고 <strong>한국 공식몰은 발볼 표기 '넓음(4E)'인 SW 모델만 판매해</strong> 발볼 넓은 한국 러너에게 최적입니다` |

## 4. 보고만 하는 문장 (고치지 않음)
| 위치 (main 줄) | 내용 | 사유 |
|---|---|---|
| 2026-07.ts:2914·2928·2966·2972·2973·3006 (brooks-ghost-max-4-hyperion-elite-6-preview-2026) | HE6 '드롭 11.2→7mm로 낮춤', 표의 198g·7mm | 작성일 2026-07-14 프리뷰, 표 캡션이 'BITR·RTR 리뷰 기준'이라 출처 표기는 지금도 맞음. 랩은 10.6mm·193g이라 실제로는 드롭이 거의 안 낮아짐 — 맞는 맥락과 틀린 맥락이 섞임. 고스트 맥스 4처럼 갱신 안내 박스를 다는 것을 권장 |
| 2026-07.ts:184·202·203·223·232·238·242 (mizuno-wave-rider-29-vs-30-comparison-2026) | '라이더 30 랩 미게시', '토박스 미게시 — 평가 상충' | 작성일 2026-07-29 시점 진술. 표 196~198(267g·42.5/34.5·8mm)은 '공식 발표 수치'라고 밝혀 지금도 맞음. 랩 토박스 73.3mm(29는 76.7mm)는 글의 결론('발볼 넓으면 29')을 오히려 강화함. 글 안에 '랩이 나오면 갱신'이라고 약속돼 있음 |
| 2026-06.ts:6838 (RF 2 vs 3 title) | '드롭 그대로' | title 금지. 본문은 정정했으므로 title과 본문이 어긋남 |
| 2026-06.ts:6887 · 2026-06.ts:2809 | RF3를 '표준'으로 분류 | DB는 이번 감사 전부터 narrow였음(감사로 바뀐 값 아님) |
| 2026-06.ts:6607·6637·6641·6682·6683·6702·6744·6790, 2026-07.ts:4715·4740·4756·4777 | 글리세린 맥스 2 '스너그 피팅' | 리뷰어 표현·의견. DB 특징에서 '스너그 피팅'이 빠지고 '랩 토박스 73.4mm(평균)'로 바뀜 |
| 2026-06.ts:6686 | '와이드 버전에서도 핏이 꽉 맞아 반 사이즈 업 권장 리뷰' | 해외 리뷰 인용(한국 공식몰은 와이드를 팔지 않음). 같은 문단의 '와이드 옵션 고려'는 정정함 |
| 2026-06.ts:6632, 2026-07.ts:4735·4755·4757·4763 | 글리세린 맥스 2 드롭 6mm, 스택 47/41mm | DB 수치 필드는 브랜드 값(47/41·6mm) 그대로라 모순 아님. 랩은 45.4/37.3·8.1mm |
| 2026-05.ts:8165 | 글리세린 맥스 2 스택 '43mm' | DB(47mm)와 다르지만 이번 감사로 바뀐 값이 아님 |
| 2026-07.ts:3965·3979·3994('일관된 단단함')·4009·4011 | 아드레날린 '단단·탄탄한 착화감' | 의견·성향 문장. DB 경도는 이제 평균 수준(34.5 AC)이라 근거가 약해짐 |
| 2026-05.ts:3162 | 아드레날린 '199,000원' | DB 189,000원. 가격은 이번 감사에서 바뀌지 않음(무게만 정정) |
| 2026-06.ts:2686 · 2026-09.ts:3611·3750 | 호라이즌 8 '와이드 옵션 있음' / '기본 토박스가 넓음(와이드 없이도 여유)' | 한국에서는 SW(4E) 한 가지만 팔아서 '옵션'·'일반 폭'이라는 표현이 애매함 — 섞인 맥락 |
| 2026-06.ts:2757 | 라이더 30 '힐 42.5mm(공식)' | 출처 표기가 있어 지금도 맞음(랩 42.8mm) |
| 2026-06.ts:3447 · 2026-09.ts:3696 | 고스트 17 '표준' | DB는 감사 전부터 narrow였음 |
| 2026-06.ts:3449 | 하이페리온 엘리트 5 '좁음' | DB는 standard(기존 불일치) |
| 2026-06.ts:3438 | '브룩스는 토박스가 넉넉한 편, 특히 맥스 라인' | 의견. 고스트 18·HE6가 좁음으로 바뀜 |
| 2026-06.ts:4252 | 글리세린 GTS 22 '표준 토박스가 넓음' | 랩 73.2mm(평균). DB 판정(표준)은 바뀌지 않음 |
| 2026-09.ts:3733·3751 | 마하 6(좁음·와이드 있음)이 '좁은 편 + 와이드 있음' 행에 없음 | 브룩스·미즈노 범위 밖 |

맞는 값으로 이미 적혀 있거나 해당 문장이 없어 손댈 것이 없던 신발: 고스트 17(17.0 HA 문장 없음), 인스파이어 21(이미 '전체 폭 98.4·토박스 73.5mm'), 인스파이어 22, 하이페리온 맥스 3(94.9mm 문장 없음), 라이더 29, 글리세린 22·GTS 22.

## 5. 논지 영향
- **mizuno-wave-rebellion-flash-2-vs-3-comparison**: '드롭 그대로·저드롭 정체성 유지'라는 축이 무너짐(랩 2.9→7.5mm). 요약·비교표·3번 섹션·부상/주법 매트릭스·FAQ를 사실에 맞게 고침. '힐스트라이커 비추' 결론은 유지하되, 근거를 3의 무릎 caution 등급과 DB 비추천 분류로 바꿈. title은 그대로라 본문과 어긋남.
- **글리세린 맥스 2 (heavy-runner·max 1 vs 2·bondi vs glycerin max 2)**: '와이드 + 반 사이즈 업' 권고가 와이드라는 근거를 잃음 → '반 사이즈 업(한국 와이드 미판매)'으로 바꿈. 표의 와이드 칸도 2E·있음 → 없음.
- **mizuno-running-shoes-lineup-tier-guide-2026**: 스카이 9를 좁음 행으로 옮기고, '레이싱만 좁다'는 문장을 고침.
- **brooks-running-shoes-lineup-tier-guide-2026**: 고스트 18·HE6를 좁음 행으로, 글리세린 맥스 2를 와이드 없는 표준 행으로 옮김. '데일리는 고스트 18 와이드' 권고는 와이드가 있으므로 유지.
- **beginner-running-shoes-lineup-tier-guide-2026 / brooks-ghost-18-review**: 고스트 18 발볼 '표준' → '좁음', 와이드 권고는 유지.
- **adrenaline-gts-25-vs-kayano-33-stability-2026**: '단단한 DNA Loft(HA 25.1)'라는 수치 근거가 사라짐 → 경도 문장만 고치고, '단단 vs 부드러움' 프레임의 의견 문장은 보고만 함.
- **mizuno-wave-horizon-8-review**: '2E 와이드 옵션' → 한국은 SW(넓음 4E)만 판매. '발볼 넓은 러너에게 최적'이라는 결론은 유지.
- **2026-heavy-runner-running-shoes**: 스카이 9 '발볼 넓으면 다른 브랜드' → '와이드 버전 선택'(DB에 와이드 있음).

## 6. 검증 명령·결과
- `curl -s -o /dev/null -w "%{http_code}" https://allrunabout.com` → 200
- `npm ci` → 0, 기준선 `npm run validate` → 에러 0 · 경고 9
- 치환: `python3 -I` 스크립트로 문자열마다 정확히 1회 일치하는지 확인한 뒤 적용(어긋나면 중단) — 브룩스 39건(1건은 변경 없는 no-op), 미즈노 26건 + 문구 보정 1건, 중단 없음
- 수정 후 `npm run validate` → 에러 0 · 경고 9(기준선과 같음)
- `npm run build` → 종료 코드 0, '광고·GA 로딩 정상'
- `git push -u origin cloud/blog-sync-brooks-mizuno` 성공
