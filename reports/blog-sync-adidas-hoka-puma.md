# B6 블로그 정합성 정정 — adidas·HOKA·PUMA (2026-10-20)

- 작업 브랜치: `cloud/blog-sync-adidas-hoka-puma` (base `origin/main` 6609d63, 커밋 4개: 아디다스 `09358a3`·`75a5bcc9`, HOKA `d566efe`, PUMA `638e2af`)
- 기준: `git diff 8af0c32 origin/main -- src/lib/data/shoes/{adidas,hoka,puma}` (32개 파일)
- 수정 150줄(블로그 5개 월 파일). 아래 '보고만' 항목은 손대지 않았다.

## 1. 못 한 것 / 한계

- **전수 보장 못 함**: 블로그 4.5MB를 신발명·옛 값 정규식으로 줄·문장 단위 grep해서 찾았다. 신발명이 없는 문장의 대명사 지칭("이 신발은 …")이나 문단을 넘는 맥락은 놓쳤을 수 있다.
- **날짜 박힌 계급도 가격은 고치지 않음**(아래 4-A). 해당 날짜의 실제 공식가는 확인하지 못해 '불명'.
- **파생 통계 재계산 안 함**: `running-shoes-tier-chart-2026`의 "입문화 15종 가격 중앙값 17.9만원"(2026-10-02 기준)은 라이즈 2·보스턴 13 가격 변경으로 바뀌었을 수 있지만 계산하지 않았다(불명).
- **드롭 반올림 수준 변화는 대상에서 뺐다**: 클리프톤 10(12→12.4), 마하 6(10→9.6), 마하 X 3(10→9.5), 본디 9(9→9.1), 아디오스 프로 4(8→8.1).
- **아디오스 프로 5 RunRepeat 신규 측정값**(176g·69.1mm 등): 블로그에서 "랩 미확인" 같은 진술을 찾지 못해 고친 곳이 없다.
- **벨로시티 나이트로 4 통기성 3/5·'2025 최고의 가성비' 삭제**: 블로그에서 해당 진술을 찾지 못했다.

## 2. 바뀐 사실 표 (DB 8af0c32 → origin/main)

| 신발 | 바뀐 값 |
|---|---|
| 아디다스 보스턴 13 | 정가 179,000→**189,000원**, km당 325→**343원**, 토박스 standard→**narrow(70.6mm)**, 와이드 없음 |
| 아디다스 슈퍼노바 라이즈 2 | 정가 149,000→**159,000원**, km당 248→**265원** |
| 아디다스 테렉스 아그라빅 4 | 정가 209,000(추정)→**169,000원**(공식몰), 실판매가 169,000, km당 380→**307원**, 러그 **3.1mm**(RR), 드롭 9.1(RR)/표기 8 |
| 아디다스 아그라빅 스피드 울트라 2 | 정가 279,000(추정)→**289,000원**, 무게 265→**269g**, 스택 44/36→**30.7/30.6mm**(RR, 표기 43/35), 드롭 8→**0.1mm**(RR, 표기 8), 러그 **2.9mm**, 토박스 **narrow(69.6mm)**, km당 620→642원 |
| 아디다스 아디제로 Evo SL | 토박스 standard→**narrow(71.6mm)** |
| 아디다스 하이퍼부스트 엣지 | 토박스 standard→**narrow(71.4mm)** |
| 아디다스 아디오스 프로 4 | 드롭 8→8.1mm(RR)/표기 6, 토박스 69.5mm 좁음, oneliner에서 '알파플라이보다 안정적' 삭제 |
| 아디다스 아디오스 프로 5 | RR 측정 추가: 176g, 스택 35.6/30.0, 드롭 5.6, ER 75.1/80.4%, 토박스 69.1mm |
| 아디다스 아디제로 SL2 | 리뷰 문구의 스택 33→34.9mm·드롭 6→8.2mm(RR) (구조화 값 35/27·8mm는 그대로) |
| 아디다스 하이퍼부스트 런·라이즈 3 | 출처 문구만 바뀜(값 동일) |
| HOKA 가비오타 6 | 무게 299→**283g**, 스택 35/33→**36/29**(RR), 드롭 2→**7mm**, J-Frame→**H-Frame**, 토박스 76.7mm(wide) |
| HOKA 씨엘로 X1 | 스택 46/39→**39/28**(RR 2.0, 표기 46/39), 드롭 7→**11**(RR 10.7), 토박스 standard→**narrow(71.3mm)** |
| HOKA 스피드고트 6 | 스택 40/35→**32/27**(RR 32.1/27.2, 표기 40/35), 러그 5→**4.0mm**, 드롭 4.9(RR), 토박스 standard→**narrow(73.0mm, 트레일 평균 74.3)** |
| HOKA 본디 9 | 토박스 standard→**narrow(72.5mm)**, 드롭 9.1(RR)/표기 5 |
| HOKA 마하 X 3 | 토박스 standard→**narrow(70.8mm)**, 와이드 없음 |
| HOKA 테크톤 X 3 | 토박스 standard→**narrow(73.1mm, 트레일 평균 74.3)** |
| HOKA 로켓 X 3·아라히 8·클리프톤 10·마하 6·스피드고트 7 | 출처 표기·토박스 mm 보강(판정 동일), 드롭 반올림 수준 |
| PUMA 매그맥스 나이트로 2 | 무게 268→269g, 스택 37/27→**45.5/35**(RR, 공식 46/38), 드롭 10→10.5, 플레이트 PWRPLATE(TPU)→**없음**, 폼 Nitro Elite→**NITROFOAM**, 토박스 standard→**narrow(70.4mm)** |
| PUMA 디비에이트 퓨어 나이트로 | 와이드 옵션 true→**false** |
| PUMA 디비에이트 나이트로 4 | 토박스 standard→**narrow(70.6mm)**, 와이드 상품 별도(정가 219,000원) |
| PUMA 디비에이트 나이트로 3 | 토박스 문구 '좁은~표준'→'좁은 편(69.7mm)' (판정 narrow 유지) |
| PUMA 디비에이트 나이트로 엘리트 3·4 | 엘리트 3 69.5mm 좁음 / 엘리트 4 74.8mm지만 'snug-fitting' — '와이드 발볼에도 무난' 삭제 |
| PUMA 패스트-R 나이트로 엘리트 3 | '반사이즈 업 필수'·'영하권 경화' 삭제, 저온 경도 변화 2%, 스니그 핏(토박스 72.3mm) |
| PUMA 매그니파이 나이트로 3 | '반발 강하지 않음' 삭제 → RR ER 힐 65.2%·전족 73.6% 평균 이상, 힐 SA 136 |
| PUMA 벨로시티 나이트로 4 | 통기성 3/5(보통), '2025 최고의 가성비' 삭제 |
| PUMA 벨로시티 나이트로 5 | 토박스 standard→**narrow(72.1mm)**, SA 129 평균·경도 40.5 AC(평균보다 단단) |

## 3. 수정한 문장 표

줄 번호는 커밋 시점 기준(같은 줄 안의 치환이라 이후 커밋에서도 줄은 그대로다).

### 아디다스 (커밋 `09358a3`)

| 글 slug | 파일:줄 | 이전 → 이후 |
|---|---|---|
| 2026-best-trail-running-shoes | 2026-05.ts:9445 | …r><td>한국 가격</td><td>약 209,000원 (추정, 한국 정가 미확정 · 미국 $145)</td></tr… → …r><td>한국 가격</td><td>169,000원 (아디다스 공식몰 · 미국 $145)</td></tr… |
| 2026-best-trail-running-shoes | 2026-05.ts:9448 | …tinental Rubber (러그 4-5mm)</td></tr>… → …tinental Rubber (러그 3.1mm, RunRepeat 측정)</td></tr>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9532 | …가격</strong></td><td>약 279,000원 (추정, 2세대 정가 미확정)</td></tr>… → …가격</strong></td><td>289,000원 (아디다스 공식몰)</td></tr>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9533 | …d>무게 / 드롭</td><td>265g / 8mm (1세대 0.3mm에서 전환)</td></tr>… → …d>무게 / 드롭</td><td>269g / 0.1mm (RunRepeat 랩 · 아디다스 표기 265g / 8mm)</td></tr>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9534 | …>스택 (힐/포어풋)</td><td>44mm / 36mm (1세대 31/30에서 대폭 증가)</td></tr>… → …>스택 (힐/포어풋)</td><td>30.7mm / 30.6mm (RunRepeat 랩 · 아디다스 표기 43/35mm)</td></tr>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9535 | …tinental Rubber (러그 3~4mm, 1세대 2.5mm에서 강화)</td></tr>… → …tinental Rubber (러그 2.9mm, RunRepeat 측정)</td></tr>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9537 | …터</td><td>RunRepeat 미게시 (2025-12 출시, 공식 발표 기준)</td></tr>… → …터</td><td>RunRepeat 랩 (에너지 리턴 힐 64.5%·전족 70.2%)</td></tr>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9590 | …<td>미확인</td>… → …<td>169,000원</td>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9630 | …<td>279,000원</td>… → …<td>289,000원</td>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9631 | …<td>265g</td>… → …<td>269g</td>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9713 | …das Speed Ultra 2 (279,000원)</td>… → …das Speed Ultra 2 (289,000원)</td>… |
| adidas-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3234 | …<td>27.9만</td><td>265g</td><td>2세대 트레일 슈퍼… → …<td>27.9만</td><td>269g</td><td>2세대 트레일 슈퍼… |
| adidas-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3282 | …표준</strong></td><td>보스턴 13 · Evo SL · 아그라빅 4 · 하이퍼부스트 런(토박스 73.6mm, 와이드 없음) · 하이퍼부스트 엣지(와이드 없음)</td></tr>… → …표준</strong></td><td>아그라빅 4 · 하이퍼부스트 런(토박스 73.6mm, 와이드 없음)</td></tr>… |
| adidas-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3283 | …프로 4 · 아그라빅 스피드 울트라</td></tr>… → …프로 4 · 아그라빅 스피드 울트라 · 보스턴 13(70.6mm) · Evo SL(71.6mm) · 하이퍼부스트 엣지(71.4mm, 와이드 없음)</td></tr>… |
| adidas-supernova-rise-2-vs-3-comparison | 2026-06.ts:6110 | …ption: '슈퍼노바 라이즈 2(149,000원·입문화)와 라이즈 3(1… → …ption: '슈퍼노바 라이즈 2(159,000원·입문화)와 라이즈 3(1… |
| adidas-supernova-rise-2-vs-3-comparison | 2026-06.ts:6143 | …)</strong></td><td>149,000원</td><td><strong>159,000원</strong></td><td>+10,000원</td></tr>… → …)</strong></td><td>159,000원</td><td>159,000원</td><td>동일</td></tr>… |
| adidas-supernova-rise-2-vs-3-comparison | 2026-06.ts:6218 | …<td>km당 비용 비슷, MSRP 1만원 저렴</td></tr>… → …<td>km당 비용 비슷, MSRP 동일(세일가로 판단)</td></tr>… |
| adidas-supernova-rise-2-vs-3-comparison | 2026-06.ts:6232 | …<li><strong>MSRP 차이는 1만원(149,000 vs 159,000원).</strong> km당 비용도 2… → …<li><strong>MSRP는 159,000원으로 같습니다.</strong> km당 비용도 2… |
| adidas-supernova-rise-2-vs-3-comparison | 2026-06.ts:6235 | …i><strong>발볼이 넓다면 가격 차(1만원)보다 착화가 우선입니다.</stron… → …i><strong>발볼이 넓다면 가격보다 착화가 우선입니다.</stron… |
| adidas-hyperboost-edge-review-2026 | 2026-07.ts:1890 | …'권하기 어렵습니다. 토박스 폭 자체는 71.4mm로 표준이지만 높이가 24.8mm로 낮아 발등 볼륨에서… → …'권하기 어렵습니다. 토박스 폭이 71.4mm로 평균(73.2mm)보다 좁은 편이고 높이도 24.8mm로 낮아 발등 볼륨에서… |
| adidas-hyperboost-edge-review-2026 | 2026-07.ts:1937 | …/strong></td><td>폭은 표준, 높이가 낮음</td></tr>… → …/strong></td><td>폭은 좁은 편, 높이도 낮음</td></tr>… |
| adidas-hyperboost-edge-review-2026 | 2026-07.ts:1971 | …<p>토박스 폭은 71.4mm로 <strong>표준 범위</strong>입니다. 문제는 <strong>높이가 24.8mm로 낮다</strong>는 것이라, 발볼보다 <strong>발등이 높은 발</strong>에서 압박이 먼저 옵니다. 게다가 <strong>와이… → …<p>토박스 폭은 71.4mm로 평균(73.2mm)보다 <strong>좁은 편</strong>(앞쪽이 좁아지는 테이퍼형)입니다. 게다가 <strong>높이가 24.8mm로 낮아</strong> 발볼뿐 아니라 <strong>발등이 높은 발</strong>에서도 압박이 옵니다. 게다가 <strong>와이… |
| running-shoes-recommend-by-price-2026 | 2026-07.ts:4467 | …라이즈 2</a></td><td>149,000</td><td>257g</… → …라이즈 2</a></td><td>159,000</td><td>257g</… |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5530 | …→ 보스턴 13</strong>(179k·550km·컨티넨탈), <str… → …→ 보스턴 13</strong>(189k·550km·컨티넨탈), <str… |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5531 | …좁음) 주의</strong>, 보스턴·엔돌핀은 표준이라 무난합니다</li>… → …좁음) 주의</strong>, 보스턴 13도 토박스가 좁은 편(70.6mm)이라 시착 권장, 엔돌핀은 표준입니다</li>… |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5548 | …g></td><td><strong>179,000원(최저)</strong><… → …g></td><td><strong>189,000원(최저)</strong><… |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5556 | …발볼</strong></td><td>표준</td><td><strong>좁음(… → …발볼</strong></td><td>좁은 편</td><td><strong>좁음(… |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5558 | …td><strong>550km / 325원</strong></td><td>4… → …td><strong>550km / 343원</strong></td><td>4… |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5565 | …중 <strong>가장 저렴하고(179,000원) 가장 오래 갑니다(550km)</strong>. km당 약 325원으로 플레이트 트레이너 중 가성비… → …중 <strong>가장 저렴하고(189,000원) 가장 오래 갑니다(550km)</strong>. km당 약 343원으로 플레이트 트레이너 중 가성비… |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5566 | …에서도 무릎 부담이 적고요. 발볼은 표준이라 보통 발볼은 무난하지만, 와이드 옵션이 없어 매우 넓은 발은 시착이 필요합니다.</p>… → …에서도 무릎 부담이 적고요. 발볼은 좁은 편(RunRepeat 토박스 70.6mm, 평균 73.2mm)이고 와이드 옵션도 없어 발볼이 넓다면 시착이 필요합니다.</p>… |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5581 | …on-13">보스턴 13</a>. 179k·550km·컨티넨탈 그립으로 만… → …on-13">보스턴 13</a>. 189k·550km·컨티넨탈 그립으로 만… |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5584 | …"발볼이 넓다"</strong> → 보스턴 13이나 엔돌핀 스피드 5(둘 다 표준). 줌 플라이 6(좁음)은 비추천.</… → …"발볼이 넓다"</strong> → 엔돌핀 스피드 5(표준). 보스턴 13은 좁은 편이라 시착 필수, 줌 플라이 6(좁음)은 비추천.</… |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5814 | …al 러버·테크니컬 그립). 가격은 거의 같지만(20.5~21만원) 쿠션·무게·드롭·그립 성격이 완전히… → …al 러버·테크니컬 그립). 가격은 16.9~21만원대지만 쿠션·무게·드롭·그립 성격이 완전히… |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5825 | …<li><strong>가격은 거의 같지만(20.5~21만원) 성격은 정반대</strong> —… → …<li><strong>가격은 16.9~21만원대, 성격은 정반대</strong> —… |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5844 | …td>210,000원</td><td>약 209,000원</td></tr>… → …td>210,000원</td><td>169,000원</td></tr>… |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5857 | …종합입니다. 아그라빅 4 한국가는 미확정 추정입니다.</small></p>… → …종합입니다. 아그라빅 4 한국가는 아디다스 공식몰 정가(169,000원)입니다.</small></p>… |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5909 | …리뷰 종합 · 한국 공식 가격 기준(아그라빅 4는 미확정 추정) · 작성 2026년 7월 2일. 신… → …리뷰 종합 · 한국 공식 가격 기준 · 작성 2026년 7월 2일. 신… |
| adidas-hyperboost-edge-vs-run-comparison-2026 | 2026-08.ts:448 | …갇힙니다. 토박스 폭 71.4mm는 표준이지만 높이가 24.8mm로 낮아 발볼보다 발등에서 먼저 걸립니다. 안정성 평가도 낮은 편이라 발… → …갇힙니다. 토박스 폭 71.4mm는 평균(73.2mm)보다 좁은 편이고 높이도 24.8mm로 낮아 발볼과 발등 모두에서 걸릴 수 있습니다. 안정성 평가도 낮은 편이라 발… |
| trail-running-shoes-lineup-tier-guide-2026 | 2026-08.ts:1921 | …strong></a></td><td>20.9만</td><td>283g</td… → …strong></a></td><td>16.9만</td><td>283g</td… |
| trail-running-shoes-lineup-tier-guide-2026 | 2026-08.ts:1930 | …trong></a></td><td>27.9만</td><td>265g</td><td>완만~중간 트레일 레이스, 8mm 드롭·44mm 고스택으로 안정적</td></tr>… → …trong></a></td><td>28.9만</td><td>269g</td><td>완만~중간 트레일 레이스, 측정 드롭 0.1mm(아디다스 표기 8mm)의 전족·미드풋 착지형</td></tr>… |
| trail-running-shoes-lineup-tier-guide-2026 | 2026-08.ts:1941 | …<h3>올라운드 (20.5만~27.9만원)</h3>… → …<h3>올라운드 (16.9만~27.9만원)</h3>… |
| trail-running-shoes-lineup-tier-guide-2026 | 2026-08.ts:1947 | …<h3>카본 레이싱 (27.9만~34만원)</h3>… → …<h3>카본 레이싱 (28.9만~34만원)</h3>… |
| trail-running-shoes-lineup-tier-guide-2026 | 2026-08.ts:1948 | …아그라빅 스피드 울트라 2</a>는 8mm 드롭·44mm 고스택으로 완만~중간 트레일 레이스에서 안정적인 편입니다. 카본 트레일화 3종을 나란히… → …아그라빅 스피드 울트라 2</a>는 아디다스 표기 8mm 드롭과 달리 RunRepeat 측정 드롭이 0.1mm(힐 30.7mm)인 전족·미드풋 착지형으로, 완만~중간 트레일 레이스에서 빠릅니다. 카본 트레일화 3종을 나란히… |
| trail-running-shoes-lineup-tier-guide-2026 | 2026-08.ts:1952 | …rong>합니다. 카본 레이싱 단(27.9만~34만원)은 울트라 대회나 기… → …rong>합니다. 카본 레이싱 단(28.9만~34만원)은 울트라 대회나 기… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4060 | …보스턴 13은 정가가 179,000원으로 똑같고 무게도 249g 대 254g로 5g밖에 차이 나지 않습니다. 그런데 쿠션 9 대 7, 반발 7 대 9로 성격이 정확히 반대예요. 노바 6은 플레이트 없이 39.2mm 스택으로 푹신하게 밀고, 보스턴 13은 유리섬유 Energy Rods로 굴려줍니다. 내구는 700km 대 550km(km당 256원 대 325원), 와이드 옵션은 노바 6에만.… → …보스턴 13은 정가가 179,000원 대 189,000원으로 1만원 차이고 무게도 249g 대 254g로 5g밖에 차이 나지 않습니다. 그런데 쿠션 9 대 7, 반발 7 대 9로 성격이 정확히 반대예요. 노바 6은 플레이트 없이 39.2mm 스택으로 푹신하게 밀고, 보스턴 13은 유리섬유 Energy Rods로 굴려줍니다. 내구는 700km 대 550km(km당 256원 대 343원), 와이…… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4071 | …'용도입니다. 둘 다 179,000원이지만 노바블라스트 6은 쿠션 9/1… → …'용도입니다. 정가는 179,000원 대 189,000원으로 1만원 차이지만 노바블라스트 6은 쿠션 9/1… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4091 | …정가로 나누면 km당 256원 대 325원으로 약 27% 경제적입니다. 다만 이 수치는 아… → …정가로 나누면 km당 256원 대 343원으로 약 34% 경제적입니다. 다만 이 수치는 아… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4098 | …<li><strong>가격이 똑같고 무게도 5g 차입니다</strong> — 둘 다 179,000원, <a href="/sh… → …<li><strong>가격은 1만원 차, 무게는 5g 차입니다</strong> — 179,000원 대 189,000원, <a href="/sh… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4100 | …0), km당 비용(256원 vs 325원), <strong>와이드 옵션(노… → …0), km당 비용(256원 vs 343원), <strong>와이드 옵션(노… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4119 | …d>179,000원</td><td>179,000원 <em>(동일)</em></td></tr>… → …d>179,000원</td><td>189,000원 <em>(1만원 차)</em></td></tr>… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4127 | …있음</strong></td><td>표준 / <strong>없음</stron… → …있음</strong></td><td>좁은 편 / <strong>없음</stron… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4129 | …g></td><td>550km · 325원</td></tr>… → …g></td><td>550km · 343원</td></tr>… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4138 | …<p>가격이 같고 무게가 5g 차이면 보통 "비슷한… → …<p>가격이 1만원 차이고 무게가 5g 차이면 보통 "비슷한… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4160 | …원</strong>으로 이 비교에서 27% 경제적이고, <strong>와이드… → …원</strong>으로 이 비교에서 34% 경제적이고, <strong>와이드… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4172 | …것과, 내구 550km로 km당 325원이라는 점입니다. 그리고 적정 페이… → …것과, 내구 550km로 km당 343원이라는 점입니다. 그리고 적정 페이… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4197 | …g> → 노바 6(km당 256원, 27% 유리)</li>… → …g> → 노바 6(km당 256원, 34% 유리)</li>… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4215 | …은 보스턴 13으로 나누면 됩니다. 같은 값이라 예산 계산도 단순합니다.</p>… → …은 보스턴 13으로 나누면 됩니다. 정가 차이가 1만원이라 예산 계산도 단순합니다.</p>… |
| asics-novablast-6-vs-adidas-boston-13-daily-2026 | 2026-08.ts:4223 | …반). 가격은 한국 공식 정가 기준(둘 다 179,000원, 노바블라스트 5는 16… → …반). 가격은 한국 공식 정가 기준(노바블라스트 6 179,000원 · 보스턴 13 189,000원, 노바블라스트 5는 16… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4398 | …레이트가 없으며, 싼 보스턴 13(179,000원)이 유리섬유 Energy Rods 2.0을 달고 안정성 8/10에 km당 325원으로 더 경제적입니다. 무게 223… → …레이트가 없으며, 싼 보스턴 13(189,000원)이 유리섬유 Energy Rods 2.0을 달고 안정성 8/10에 km당 343원으로 더 경제적입니다. 무게 223… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4429 | …기준입니다. 정가로 나누면 km당 325원 대 418원으로 보스턴 13이 약 22% 경제적입니다. 다만 이 수치는 아… → …기준입니다. 정가로 나누면 km당 343원 대 418원으로 보스턴 13이 약 18% 경제적입니다. 다만 이 수치는 아… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4436 | …ton-13">보스턴 13</a>(179,000원)이 <strong>유리섬… → …ton-13">보스턴 13</a>(189,000원)이 <strong>유리섬… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4437 | …). km당 비용은 보스턴 13이 325원 대 418원으로 22% 유리합니다</li>… → …). km당 비용은 보스턴 13이 343원 대 418원으로 18% 유리합니다</li>… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4457 | …0원</td><td><strong>179,000원</strong></td>… → …0원</td><td><strong>189,000원</strong></td>… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4466 | …d>토박스 / 와이드</td><td>표준(71.6mm) / 없음</td><td>표준(70.6mm) / 없음 <em>(둘… → …d>토박스 / 와이드</td><td>좁은 편(71.6mm) / 없음</td><td>좁은 편(70.6mm) / 없음 <em>(둘… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4468 | …td><strong>550km · 325원</strong></td></tr>… → …td><strong>550km · 343원</strong></td></tr>… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4477 | …<p>보통 같은 브랜드 라인에서 3만원이 비싸면 "상위 모델"을 기대합… → …<p>보통 같은 브랜드 라인에서 2만원이 비싸면 "상위 모델"을 기대합… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4483 | …<p>즉 <strong>3만원을 더 내면 31g이 가벼워지고… → …<p>즉 <strong>2만원을 더 내면 31g이 가벼워지고… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4501 | …<p>그리고 <strong>km당 325원</strong>입니다. 3만원 싼 데다 내구가 50km 길어, 총비용에서 22% 유리합니다.</p>… → …<p>그리고 <strong>km당 343원</strong>입니다. 2만원 싼 데다 내구가 50km 길어, 총비용에서 18% 유리합니다.</p>… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4515 | …다</strong> → 보스턴 13(3만원 싸고 km당 325원)</li>… → …다</strong> → 보스턴 13(2만원 싸고 km당 343원)</li>… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4519 | …도 재보고 싶다</strong> → 같은 179,000원인 <a href="/blog/asi… → …도 재보고 싶다</strong> → 정가 1만원 차인 <a href="/blog/asi… |
| adidas-adizero-evo-sl-vs-boston-13-daily-2026 | 2026-08.ts:4543 | …209,000원 · 보스턴 13 179,000원)이며 실판매가는 다를 수… → …209,000원 · 보스턴 13 189,000원)이며 실판매가는 다를 수… |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3731 | …><td>약 325원</td><td>표준</td><td>없음</td></tr… → …><td>약 325원</td><td>좁은 편</td><td>없음</td></tr… |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3752 | …ltra">레드헤어 9 울트라</a></td></tr>… → …ltra">레드헤어 9 울트라</a>, <a href="/shoes/adidas-boston-13">보스턴 13</a></td></tr>… |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3753 | …a>, <a href="/shoes/adidas-boston-13">보스턴 13</a>, <a href="/shoes/li-ning-red-hare-9">… → …a>, <a href="/shoes/li-ning-red-hare-9">… |

### 아디다스 추가 (커밋 `75a5bcc9`)

| 글 slug | 파일:줄 | 이전 → 이후 |
|---|---|---|
| 2026-best-trail-running-shoes | 2026-05.ts:9541 | …strong>: 힐 슬링샷 구조 신설로 1세대 최대 약점이던 힐 안정성 대폭 개선. 부드럽게 리튜닝된 Lightstrike Pro로 장거리 쿠션 피로 감소. Energy Rods 추진력은 유지돼 완만 트레일에서 슈퍼슈즈급 스피드. 러그 3~4mm로 트랙션 강화.</p>… → …strong>: 힐 슬링샷 구조 신설(아디다스 표기) — 다만 RunRepeat는 힐 불안정을 여전한 단점으로 꼽았습니다. 부드럽게 리튜닝된 Lightstrike Pro로 장거리 쿠션 피로 감소. Energy Rods 추진력은 유지돼 완만 트레일에서 슈퍼슈즈급 스피드. 러그는 2.9mm(RunRepeat 측정)로 1세대보다 0.4mm 깊어졌지만 여전히 얕은 편.</p>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9542 | …strong>약점</strong>: 제로드롭 → 8mm 드롭 전환으로 1세대 제로드롭 팬에겐 호불호. 극도로 테크니컬한 암릉에서는 공격적 반응성이 컨트롤 방해. 토박스는 여전히 좁은 편(2세대 실측 미공개)으로 발볼 넓은 러너 주의.</p>… → …strong>약점</strong>: 아디다스는 8mm 드롭을 표기하지만 RunRepeat 측정 드롭은 0.1mm로 1세대(제로드롭)와 비슷하고, 체감은 3~6mm대라는 평가. 극도로 테크니컬한 암릉에서는 공격적 반응성이 컨트롤 방해. 토박스는 여전히 좁은 편(RunRepeat 69.6mm, 트레일 평균 74.3mm)으로 발볼 넓은 러너 주의.</p>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9543 | …>한국 러너 노트</strong>: 1세대 대비 힐 안정성·드롭이 개선돼 다운힐 부담이 줄었지만, 북한산·관악산 같은 거친 암릉보다는 <strong>굿러너 스카이레이스 임도·그루밍된 평탄 트레일 50K 이하 레이스에서 진가</strong>를 발휘합니다. 전족·미드풋 스트라이커에게 추천. (2025-12 출시로 RunRepeat 랩 미게시 — 수치는 공식 발표·전문 리뷰 기준)</p>… → …>한국 러너 노트</strong>: RunRepeat 측정으로는 드롭이 1세대와 비슷하고 힐 불안정도 여전해, 북한산·관악산 같은 거친 암릉보다는 <strong>굿러너 스카이레이스 임도·그루밍된 평탄 트레일 50K 이하 레이스에서 진가</strong>를 발휘합니다. 전족·미드풋 스트라이커에게 추천. (수치는 RunRepeat 랩 측정과 아디다스 표기를 병기)</p>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9714 | …<td>0드롭 + 70.5% 에너지 리턴</td>… → …<td>측정 드롭 0.1mm + 전족 에너지 리턴 70.2%</td>… |

### HOKA (커밋 `d566efe`)

| 글 slug | 파일:줄 | 이전 → 이후 |
|---|---|---|
| 2026-best-trail-running-shoes | 2026-05.ts:9569 | …>스택 (힐/포어풋)</td><td>40mm / 35mm</td></tr>… → …>스택 (힐/포어풋)</td><td>32.1mm / 27.2mm (RunRepeat 랩 · 브랜드 표기 40/35mm)</td></tr>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9570 | …+ Traction Lug (러그 5mm)</td></tr>… → …+ Traction Lug (러그 4.0mm, RunRepeat 측정)</td></tr>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9572 | …/ 와이드</td><td>73mm 표준(체감 좁음) · 와이드 공식 출시 ✅</td>… → …/ 와이드</td><td>73mm 좁은 편(트레일 평균 74.3mm) · 와이드 공식 출시 ✅</td>… |
| 2026-best-trail-running-shoes | 2026-05.ts:9576 | …d Trail Run 10/10). 힐 40mm 맥스쿠션에도 내부 섀시로 안정성 A등급(… → …d Trail Run 10/10). 브랜드 표기 힐 40mm(RunRepeat 측정 32.1mm) 쿠션에도 내부 섀시로 안정성 A등급(… |
| 2026-best-trail-running-shoes | 2026-05.ts:9577 | …%로 빠른 페이스엔 둔함. 토박스가 표준 수치(73mm)임에도 "좁다"는 체감 평가가 많고, 텅 날개·힐 슬립 같은 핏 이슈… → …%로 빠른 페이스엔 둔함. 토박스가 73mm로 트레일 평균(74.3mm)보다 좁은 편이고, 텅 날개·힐 슬립 같은 핏 이슈… |
| hoka-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3483 | …용, 가비오타는 맥스 쿠션 안정화(299g)로 든든한 지지와 두툼한 쿠션을… → …용, 가비오타는 맥스 쿠션 안정화(283g)로 든든한 지지와 두툼한 쿠션을… |
| hoka-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3484 | …편이라 발볼 넓은 러너에게 좋고, 본디·클리프톤·아라히는 표준 폭입니다. 반대로 마하 6(실측 70.… → …편이라 발볼 넓은 러너에게 좋고, 클리프톤·아라히는 표준 폭, 본디 9는 좁은 편(실측 72.5mm)입니다. 반대로 마하 6(실측 70.… |
| hoka-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3553 | …td><td>278g</td><td>40mm</td></tr>… → …td><td>278g</td><td>32mm</td></tr>… |
| hoka-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3556 | …><td>23.9만</td><td>299g</td><td>35mm</td></tr>… → …><td>23.9만</td><td>283g</td><td>36mm</td></tr>… |
| hoka-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3559 | …td><td>208g</td><td>46mm</td></tr>… → …td><td>208g</td><td>39mm</td></tr>… |
| hoka-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3574 | …ielo-x1">씨엘로 X1</a>(46mm 맥스 스택 카본).</li>… → …ielo-x1">씨엘로 X1</a>(브랜드 표기 46mm 스택 카본).</li>… |
| hoka-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3588 | …>맥스 쿠션 안정화</td><td>299g</td><td>지지 + 푹신함 둘… → …>맥스 쿠션 안정화</td><td>283g</td><td>지지 + 푹신함 둘… |
| hoka-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3600 | …ong>씨엘로 X1</strong>: 46mm 카본 레이싱인데 <stro… → …ong>씨엘로 X1</strong>: 브랜드 표기 46mm 카본 레이싱인데 <stro… |
| stability-running-shoes-overpronation-flat-feet-2026 | 2026-06.ts:7412 | …가비오타 6</a></td><td>J-Frame</td><td>299g</td><td>239,000</t… → …가비오타 6</a></td><td>H-Frame</td><td>283g</td><td>239,000</t… |
| hoka-speedgoat-6-vs-7-comparison-2026 | 2026-07.ts:3031 | …만, RunRepeat 실측은 6이 확인 안 됐고 7은 7.4mm</strong>로… → …만, RunRepeat 실측은 6이 4.9mm, 7은 7.4mm</strong>로… |
| hoka-speedgoat-6-vs-7-comparison-2026 | 2026-07.ts:3055 | …nRepeat 실측)</td><td>-</td><td>7.4mm</td><… → …nRepeat 실측)</td><td>4.9mm</td><td>7.4mm</td><… |
| hoka-speedgoat-6-vs-7-comparison-2026 | 2026-07.ts:3070 | …드고트 6의 토박스는 73.0mm로 "표준이지만 좁게 느껴진다"는 평이 있었는데, <strong>7은 71.4… → …드고트 6의 토박스는 73.0mm로 트레일 평균(74.3mm)보다 좁은 편이었는데, <strong>7은 71.4… |
| speedgoat-6-vs-pulsar-vs-metafuji-trail-2026 | 2026-07.ts:3390 | …스택</td><td><strong>40 / 35mm</strong></td><td>29 / 23mm</… → …스택</td><td><strong>32 / 27mm</strong> (표기 40/35)</td><td>29 / 23mm</… |
| speedgoat-6-vs-pulsar-vs-metafuji-trail-2026 | 2026-07.ts:3396 | …ong>Vibram Megagrip(5mm 러그)</strong></td>… → …ong>Vibram Megagrip(4.0mm 러그)</strong></td>… |
| speedgoat-6-vs-pulsar-vs-metafuji-trail-2026 | 2026-07.ts:3397 | …td>발볼 / 와이드</td><td>표준(체감 좁음) · <strong>와이드 O(동일… → …td>발볼 / 와이드</td><td>좁은 편(73.0mm) · <strong>와이드 O(동일… |
| speedgoat-6-vs-pulsar-vs-metafuji-trail-2026 | 2026-07.ts:3404 | …Trail Run 10/10)이고, 힐 40mm 맥스쿠션인데도 내부 섀시(chassis) 구조 덕에 스택 대비 안정성이 뛰어납니다. 278g으로 맥스쿠션치고 가벼워 장거리·울트라에서 다리 피로도 덜합니다. 무엇보다 <strong>와이드 옵션이 공식 동일가로 나온다</strong>는 게 한국 러너에게 큰 장점 — 토박스가 표준 폭(73mm)이지만 실제로는 꽉 끼는 쪽이라, 발볼 넓다면 와이드를…… → …Trail Run 10/10)이고, 브랜드 표기 힐 40mm(RunRepeat 측정 32.1mm) 쿠션인데도 내부 섀시(chassis) 구조 덕에 스택 대비 안정성이 뛰어납니다. 278g으로 맥스쿠션치고 가벼워 장거리·울트라에서 다리 피로도 덜합니다. 무엇보다 <strong>와이드 옵션이 공식 동일가로 나온다</strong>는 게 한국 러너에게 큰 장점 — 토박스가 73mm로 트레일 평균(7…… |
| hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4038 | …는 "만능 그립"의 베스트셀러(러그 5mm·맥스쿠션·와이드+GTX), 히에로 v9는 자… → …는 "만능 그립"의 베스트셀러(러그 4.0mm·와이드+GTX), 히에로 v9는 자… |
| hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4050 | …기술 코스</strong>라면 러그 5mm에 그립 최상위인 <strong>… → …기술 코스</strong>라면 러그 4.0mm에 그립 최상위인 <strong>… |
| hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4070 | ….3 / 33.1mm</td><td>40 / 35mm</td></tr>… → ….3 / 33.1mm</td><td>32 / 27mm (표기 40/35)</td></tr>… |
| hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4073 | …on Lug · <strong>러그 5mm</strong></td></tr… → …on Lug · <strong>러그 4.0mm</strong></td></tr… |
| hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4076 | …확인</strong></td><td>표준(73mm, 좁게 느껴짐) / <strong>와이드 공식 동… → …확인</strong></td><td>좁은 편(73.0mm) / <strong>와이드 공식 동… |
| hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4085 | …trong>은 러그가 <strong>5mm로 깊고</strong> 측면 마이크로 돌기(Traction Lug)까지 더해, 젖은 바위·급경사 오르막·진흙까지 물어냅니다. 트레일 전문 매체 Road Trail Run이 그립을 <strong>10/10</strong>으로 매길 만큼 "험지에서 안 미끄러지는" 게 핵심 강점이죠. 힐 40mm 맥스쿠션에도 내부 섀시(chassis)가… → …trong>은 러그가 <strong>4.0mm로 깊고</strong> 측면 마이크로 돌기(Traction Lug)까지 더해, 젖은 바위·급경사 오르막·진흙까지 물어냅니다. 트레일 전문 매체 Road Trail Run이 그립을 <strong>10/10</strong>으로 매길 만큼 "험지에서 안 미끄러지는" 게 핵심 강점이죠. 브랜드 표기 힐 40mm(RunRepeat 측정 32.1mm) 쿠션…… |
| hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4096 | …<p>스택은 스피드고트(40mm)가 히에로(37mm)보다 약간 높아 <strong>더 푹신한 맥스쿠션</strong> 성향입니다. 무게도 스피드고트가 <strong… → …<p>스택은 브랜드 표기로는 스피드고트(40mm)가 히에로(37mm)보다 높지만, RunRepeat 측정 힐 스택은 스피드고트 32.1mm로 히에로(37.3mm)보다 <strong>오히려 낮습니다</strong>. 무게도 스피드고트가 <strong… |
| hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4122 | …느립니다. 스피드고트 6는 러그가 5mm로 깊어 그립은 좋지만 도로에서는… → …느립니다. 스피드고트 6는 러그가 4.0mm로 깊어 그립은 좋지만 도로에서는… |
| hierro-v9-vs-speedgoat-6-trail-2026 | 2026-07.ts:4126 | …가 있습니다. 스피드고트 6는 러그 5mm에 측면 트랙션 러그까지 더해 젖… → …가 있습니다. 스피드고트 6는 러그 4.0mm에 측면 트랙션 러그까지 더해 젖… |
| bondi-9-vs-glycerin-max-2-cushion-2026 | 2026-07.ts:4740 | …>발볼 / 평발 호환</td><td>표준(좁은 편)·<strong>평발 excellen… → …>발볼 / 평발 호환</td><td>좁은 편·<strong>평발 excellen… |
| tecton-x-3-vs-ultrafly-vs-s-lab-pulsar-carbon-trail-2026 | 2026-07.ts:5655 | …td>토박스</td><td>73mm 표준</td><td><strong>76.… → …td>토박스</td><td>73mm 좁은 편</td><td><strong>76.… |
| tecton-x-3-vs-ultrafly-vs-s-lab-pulsar-carbon-trail-2026 | 2026-07.ts:5664 | …가격도 부담이죠. 토박스는 73mm 표준이라 보통 발볼은 무난합니다.</p>… → …가격도 부담이죠. 토박스는 73mm로 트레일 평균(74.3mm)보다 좁은 편이라 발볼이 넓다면 시착이 필요합니다.</p>… |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5826 | …→ 스피드고트 6</strong>(힐 40mm 쿠션 + 유일한 와이드… → …→ 스피드고트 6</strong>(브랜드 표기 힐 40mm 쿠션 + 유일한 와이드… |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5846 | …ng></td><td><strong>40mm(맥스)</strong></td><td><… → …ng></td><td><strong>32mm(표기 40)</strong></td><td><… |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5849 | …<td>Vibram Megagrip 5mm</td><td>Contagrip 4mm</td><td>Continental 3mm대</td></tr>… → …<td>Vibram Megagrip 4.0mm</td><td>Contagrip 4mm</td><td>Continental 3.1mm</td></tr>… |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5860 | …는 이름이죠. 핵심은 <strong>힐 40mm 맥스쿠션 + Vibram Megagrip… → …는 이름이죠. 핵심은 <strong>브랜드 표기 힐 40mm(RunRepeat 측정 32.1mm) 쿠션 + Vibram Megagrip… |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5861 | …. 세 켤레 중 유일하죠. 토박스가 표준(73mm)인데도 "좁게 느껴진다"는 평이 많아, 발볼 넓은 분은 망설임 없이 와이… → …. 세 켤레 중 유일하죠. 토박스가 73mm로 트레일 평균(74.3mm)보다 좁은 편이라, 발볼 넓은 분은 망설임 없이 와이… |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5901 | …<p class="faq-a">A. 다운힐 충격을 가장 잘 흡수하는 건 힐 40mm 맥스쿠션의 <strong>스피드고트 6</strong>입니다. 반대로 펄사·아그라빅은 스택이 낮고 단단해 지면 감각은 좋지만 장거리 하산 충격은 더 옵니다. 무릎 이력이 있다면 스피드고트 6이 무난합니다.</p>… → …<p class="faq-a">A. 스택 표기로는 힐 40mm인 <strong>스피드고트 6</strong>이 가장 두툼하지만, RunRepeat 측정 힐 스택은 스피드고트 6 32.1mm·아그라빅 4 32.6mm로 비슷하고 펄사(29mm)가 가장 낮습니다. 무릎 이력이 있다면 스택 수치만으로 고르지 말고 매장에서 직접 비교해 보세요.</p>… |
| hoka-cielo-x1-review | 2026-09.ts:5025 | …8g으로 전작보다 41g 감량했고, 46mm 힐 스택의 듀얼 덴시티 PEBA 폼과 카본… → …8g으로 전작보다 41g 감량했고, 브랜드 표기 46mm 힐 스택(RunRepeat 측정 38.8mm)의 듀얼 덴시티 PEBA 폼과 카본… |
| hoka-cielo-x1-review | 2026-09.ts:5036 | …비 41g 감량</strong> — 46mm 힐·39mm 전족부 슈퍼맥스 스택은 그대로 유지했습니다</li>… → …비 41g 감량</strong> — 브랜드 표기 스택은 46mm 힐·39mm 전족부이고, RunRepeat 측정(2.0 기준)은 38.8mm·28.1mm(드롭 10.7mm)입니다</li>… |
| hoka-cielo-x1-review | 2026-09.ts:5051 | …)으로 전작 대비 41g 감량했고, 46mm 힐 스택에 듀얼 덴시티 PEBA 폼과 카본… → …)으로 전작 대비 41g 감량했고, 브랜드 표기 46mm 힐 스택(RunRepeat 측정 38.8mm)에 듀얼 덴시티 PEBA 폼과 카본… |
| hoka-cielo-x1-review | 2026-09.ts:5055 | …요?"</strong> — 토박스가 표준이고 와이드 옵션이 없습니다. 발볼이… → …요?"</strong> — 토박스가 좁은 편(RunRepeat 2.0 기준 71.3mm, 평균 73.2mm)이고 와이드 옵션이 없습니다. 발볼이… |
| hoka-cielo-x1-review | 2026-09.ts:5064 | …>(299,000원)보다 3만원 비싸지만, 46mm 맥시멀 쿠셔닝은 장거리에서 확실한 차별점입니다. 300km 기준 km당 약… → …>(299,000원)보다 3만원 비싸고, 브랜드 표기 46mm 맥시멀 쿠셔닝을 내세우지만 RunRepeat 측정 힐 스택은 38.8mm(2.0 기준)입니다. 300km 기준 km당 약… |
| hoka-cielo-x1-review | 2026-09.ts:5074 | …서도 깬 신발입니다. 41g 감량과 46mm 스택 유지라는 조합은 호카가 아니면 내놓기 어… → …서도 깬 신발입니다. 41g 감량과 브랜드 표기 46mm 스택이라는 조합은 호카가 아니면 내놓기 어… |
| hoka-cielo-x1-review | 2026-09.ts:5080 | …우선한다면 씨엘로 X1이 낫습니다. 46mm 스택으로 로켓 X 3(40mm)보다 두껍습니다. 예산이 우선이거나 더 가벼운… → …우선한다면 씨엘로 X1이 낫습니다. 스택은 브랜드 표기 46mm지만 RunRepeat 측정(2.0 기준 38.8mm)으로는 로켓 X 3(40mm)과 비슷합니다. 예산이 우선이거나 더 가벼운… |

### PUMA (커밋 `638e2af`)

| 글 slug | 파일:줄 | 이전 → 이후 |
|---|---|---|
| puma-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:2845 | …가 필요하고, 디비에이트 나이트로 4·매그니파이·매그맥스는 표준입니다. 디비에이트는 3세대까… → …가 필요하고, 디비에이트 나이트로 4(와이드 상품 별도)·매그맥스 나이트로 2도 좁은 편입니다. 매그니파이는 표준입니다. 디비에이트는 3세대까… |
| puma-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:2918 | …<td>맥시멀 쿠션</td><td>Nitro Elite Foam</td><td>23.9만</td><td>268g</td><td>엘리트 폼 + 훈련용 내구성</td></tr>… → …<td>맥시멀 쿠션</td><td>NITROFOAM</td><td>23.9만</td><td>269g</td><td>플레이트 없는 고스택 쿠션 + 훈련용 내구성</td></tr>… |
| puma-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:2966 | …난)</strong></td><td>디비에이트 나이트로 3·4 · 엘리트 4 · 매그니파이 · 매그맥스 · 디비에이트 퓨어</td></tr… → …난)</strong></td><td>엘리트 4 · 매그니파이 · 디비에이트 퓨어</td></tr… |
| puma-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:2967 | …(와이드 옵션 있음) · 디비에이트 엘리트 3 · 패스트알 엘리트 3</… → …(와이드 옵션 있음) · 디비에이트 나이트로 3 · 디비에이트 나이트로 4(와이드 상품 별도) · 매그맥스 나이트로 2 · 디비에이트 엘리트 3 · 패스트알 엘리트 3</… |
| puma-deviate-nitro-3-vs-4-comparison | 2026-06.ts:6346 | …로 3 vs 4 세대 비교. v4는 좁은 핏을 넓히고 와이드 옵션 추가, 무게 268→250g·드롭 10→… → …로 3 vs 4 세대 비교. v4는 와이드 상품을 따로 냈고, 무게 268→250g·드롭 10→… |
| puma-deviate-nitro-3-vs-4-comparison | 2026-06.ts:6357 | …, 그리고 v3의 고질병이던 좁은 핏을 넓히고 <strong>와이드 옵션</strong>까지 추가</li>… → …, 그리고 v3의 고질병이던 좁은 핏에 <strong>와이드 상품</strong>을 따로 추가</li>… |
| puma-deviate-nitro-3-vs-4-comparison | 2026-06.ts:6394 | …m)</strong></td><td>표준 (v3 대비 넓어짐)</td><td>핏 개선</td></tr>… → …m)</strong></td><td>좁은 편 (랩 70.6mm, v3보다 0.9mm 넓음)</td><td>일반 폭은 여전히 좁음</td></tr>… |
| puma-deviate-nitro-3-vs-4-comparison | 2026-06.ts:6399 | …화 — "좁고 빡빡하던 v3"에서 "넓고 부드러운 v4"로</h2>… → …화 — "좁고 빡빡하던 v3"에서 "와이드가 생긴 v4"로</h2>… |
| puma-deviate-nitro-3-vs-4-comparison | 2026-06.ts:6413 | …발이 빡빡하게 잡힘</td><td>넓어진 토박스 + 엔지니어드 메쉬 — 여유 있고 와이드 옵션까지</td></tr>… → …발이 빡빡하게 잡힘</td><td>일반 폭 토박스는 여전히 좁은 편(70.6mm) + 엔지니어드 메쉬 — 대신 와이드 상품 별도</td></tr>… |
| puma-deviate-nitro-3-vs-4-comparison | 2026-06.ts:6426 | …<h3>1. 좁은 핏 → 넓어진 토박스 + 와이드 옵션 ✅ 가장 큰 변화</h3>… → …<h3>1. 좁은 핏 → 와이드 상품 추가 ✅ 가장 큰 변화</h3>… |
| puma-deviate-nitro-3-vs-4-comparison | 2026-06.ts:6427 | …사이즈 업 권장이 반복됐어요. v4는 토박스를 넓혔고 <strong>와이드 옵션까지 추가</strong>했습니다. 발볼 넓은 한국 러너에게는 이 한… → …사이즈 업 권장이 반복됐어요. v4도 일반 폭 토박스는 RunRepeat 랩 70.6mm로 좁은 편이지만, <strong>와이드 상품이 따로 나왔습니다</strong>(kr.puma.com, 정가 219,000원). 발볼 넓은 한국 러너에게는 이 한… |
| puma-deviate-nitro-3-vs-4-comparison | 2026-06.ts:6451 | …v4</strong></td><td>토박스 넓어짐 + 와이드 옵션, v3는 빡빡함</td></tr>… → …v4</strong></td><td>와이드 상품 별도, v3는 와이드 없음</td></tr>… |
| puma-deviate-nitro-3-vs-4-comparison | 2026-06.ts:6492 | …v4</strong></td><td>넓어진 토박스 + 와이드 옵션, 평발 적합성 good</td></… → …v4</strong></td><td>와이드 상품 별도, 평발 적합성 good</td></… |
| puma-deviate-nitro-3-vs-4-comparison | 2026-06.ts:6528 | …다. <strong>발볼 넓으면 v4(표준 토박스 넓어짐 + 와이드 옵션)</strong>가 맞습니다. 굳이 v3를 세일로 잡는다면 반드… → …다. <strong>발볼 넓으면 v4 와이드</strong>가 맞습니다(v4 일반 폭도 토박스 70.6mm로 좁은 편). 굳이 v3를 세일로 잡는다면 반드… |
| carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3315 | …4원</strong></td><td>표준</td><td>있음</td></tr… → …4원</strong></td><td>좁은 편</td><td>있음</td></tr… |
| puma-magnify-nitro-3-review | 2026-09.ts:4204 | …점수가 6/10으로 낮은 편입니다. PEBA 폼이지만 반발이 강한 성격은 아니라, 페이스를 올리면 둔하게 느껴질 수 있습니다</li>… → …점수가 6/10으로 낮은 편입니다. RunRepeat 측정 에너지 리턴은 힐 65.2%·전족 73.6%로 평균 이상이지만 로커가 강하지 않은 클래식한 형태라, 회복·이지 페이스 중심으로 쓰는 편이 맞습니다</li>… |
| puma-magnify-nitro-3-review | 2026-09.ts:4226 | …다. 반응성 점수가 6/10으로 낮고 PEBA 폼이지만 반발이 강한 성격은 아니라, 페이스를 올리면 둔하게 느껴질 수 있습니다. 회복주·장거리 전용으로 쓰는… → …다. 반응성 점수가 6/10으로 낮고, RunRepeat 측정 에너지 리턴(힐 65.2%·전족 73.6%)은 평균 이상이지만 로커가 강하지 않은 클래식한 형태입니다. 회복주·장거리 전용으로 쓰는… |
| puma-magmax-nitro-2-review | 2026-09.ts:4245 | …'매그맥스 나이트로 2는 디비에이트 나이트로 엘리트의 Nitro Elite Foam을 500km 내구성 위에 올린 슈퍼트레이너입니다. RunRepeat 실측 종합 83점(Great), 239,000원으로 슈퍼블라스트 2보다 1만원 저렴합니다. 카본이 아닌 TPU 플레이트라 반발력은 한 수 아래지만, 대회 신발과 감각… → …'매그맥스 나이트로 2는 NITROFOAM을 힐 45.5mm 고스택(RunRepeat 측정)에 담고 500km 내구성을 갖춘 모델입니다. RunRepeat 실측 종합 83점(Great), 239,000원으로 슈퍼블라스트 2보다 1만원 저렴합니다. 플레이트가 없어 반발력은 카본 슈퍼트레이너보다 한 수 아래지만, 대회 신발과 감각… |
| puma-magmax-nitro-2-review | 2026-09.ts:4256 | …<li><strong>레이서와 같은 Nitro Elite Foam을 훈련용 내구성(500km)으로 올린 슈퍼트레이너</strong>입니다. RunRep… → …<li><strong>NITROFOAM(푸마 코리아 공식)을 힐 45.5mm 고스택(RunRepeat 측정)에 담고 훈련용 내구성(500km)을 갖춘 모델</strong>입니다. RunRep… |
| puma-magmax-nitro-2-review | 2026-09.ts:4257 | …<li><strong>플레이트가 카본이 아니라 TPU(PWRPLATE)</strong>입니다 — 반발력은 완만하지만 템포런에는 충분한 수준입니다</li>… → …<li><strong>플레이트가 없습니다</strong>(공식 페이지에 플레이트 언급 없음, RunRepeat "even without a carbon plate") — 반발력은 카본 슈퍼트레이너보다 완만합니다</li>… |
| puma-magmax-nitro-2-review | 2026-09.ts:4271 | …련용 파트너</strong>입니다. 디비에이트 나이트로 엘리트 계열에 들어가는 Nitro Elite Foam을 그대로 쓰면서, 내구성을 500km까지 끌어올렸습니다. 대회 신발과 훈련 신발의 착지… → …련용 파트너</strong>입니다. 미드솔은 NITROFOAM(푸마 코리아 공식)이고 플레이트는 없으며, 내구성은 500km 기준입니다. 대회 신발과 훈련 신발의 착지… |
| puma-magmax-nitro-2-review | 2026-09.ts:4278 | …요?"</strong> — 토박스가 표준(standard)이라 발볼 넓은 한국 러너 대부분이 와이드 없이도 편하게 착용 가능합니다</li>… → …요?"</strong> — 토박스가 좁은 편(RunRepeat 70.4mm, 평균 73.2mm)이고 와이드 옵션이 없어, 발볼이 넓다면 매장 착화를 먼저 하세요</li>… |
| puma-magmax-nitro-2-review | 2026-09.ts:4284 | …용 가성비가 뛰어난 축입니다. 다만 TPU 플레이트라 카본이 들어간 <a href="/s… → …용 가성비가 뛰어난 축입니다. 다만 플레이트가 없어 카본이 들어간 <a href="/s… |
| puma-magmax-nitro-2-review | 2026-09.ts:4295 | …정직하게 구현한 슈퍼트레이너입니다. TPU 플레이트라는 한계가 명확하지만, 그만큼 내구성… → …정직하게 구현한 슈퍼트레이너입니다. 플레이트가 없다는 한계가 명확하지만, 그만큼 내구성… |
| puma-magmax-nitro-2-review | 2026-09.ts:4301 | …구성"을 결합한 신발군을 말합니다. 매그맥스는 TPU 플레이트(PWRPLATE)를 쓰지만 레이서와 같은 Nitro Elite Foam을 채택해 이 카테고리에 속합니다. 다만 순수 반발력은 카본이 들… → …구성"을 결합한 신발군을 말합니다. 다만 매그맥스는 플레이트가 없고 미드솔도 레이서용이 아닌 NITROFOAM(푸마 코리아 공식)이라, 이 정의로 보면 슈퍼트레이너보다 고스택 쿠션화에 가깝습니다. 다만 순수 반발력은 카본이 들… |
| puma-fast-r-nitro-elite-3-review | 2026-09.ts:4345 | …찮나요?"</strong> — 토박스가 좁은 편(narrow)이고 와이드 옵션이 없습니다. 반드시 반사이즈 업을 하거나 매장 착화를 먼저 하세요</li>… → …찮나요?"</strong> — 토박스는 72.3mm로 평균(73.2mm)에 가깝지만 전체 핏이 스니그한 레이싱 핏(RunRepeat)이고 와이드 옵션이 없습니다. 발볼이 넓다면 매장 착화를 먼저 하세요</li>… |

## 4. 보고만 하는 문장 (고치지 않음)

### 4-A. 날짜가 박힌 시점 진술
- `adidas-running-shoes-lineup-tier-guide-2026` 2026-06.ts:3226/3229/3230/3234 — 라이즈 2 14.9만·보스턴 13 17.9만·아그라빅 4 20.9만·스피드 울트라 2 27.9만 ("2026-09-28 확인 기준" 각주). 현재 DB는 15.9/18.9/16.9/28.9만이다. 3234의 무게(265→269g)는 날짜가 없는 DB 수치라 고쳤다.
- `running-shoes-tier-chart-2026` 2026-09.ts:699 — 보스턴 13 17.9만 ("2026-09-28 기준"). 같은 글의 중앙값 통계(2026-10-02 기준)는 불명.
- `beginner-running-shoes-lineup-tier-guide-2026` 2026-09.ts:3700(라이즈 2 149,000원·약 248원), 3731(보스턴 13 179,000원·약 325원), 가격대 구간 배치 — "2026년 9월 11일 기준". 토박스 분류는 날짜와 상관없는 DB 판정이라 고쳤다.
- `puma-deviate-pure-nitro-review` 2026-06.ts:9713 — "토박스는 표준으로 추정, 와이드 옵션은 출시 시점 미확인". 현재 DB는 와이드 없음.
- `2026-best-trail-running-shoes` 2026-05.ts:9456 — 아그라빅 4 "한국 공식 입점 시점은 2026년 봄~여름 예상".

### 4-B. slug/title/tags (건드리지 않음)
- 2026-08.ts:4058 `asics-novablast-6-vs-adidas-boston-13-daily-2026` title "같은 17.9만원", tags '17만원대 러닝화' → 이제 1만원 차이.
- 2026-08.ts:4396 `adidas-adizero-evo-sl-vs-boston-13-daily-2026` title "3만원 더 주고" → 이제 2만원.
- 2026-07.ts:5813 `speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026` title "20만원대 트레일화 3파전" → 아그라빅 4는 16.9만원.
- 2026-09.ts:5023 `hoka-cielo-x1-review` title "208g에 46mm PEBA 스택" → 46mm는 브랜드 표기, RR 측정 38.8mm.
- 2026-09.ts:4243 `puma-magmax-nitro-2-review` title "레이서와 같은 폼을 … 슈퍼트레이너의 정공법", tags 'PWRPLATE'·'슈퍼트레이너' → DB는 NITROFOAM·플레이트 없음·카테고리 쿠션화.
- 2026-06.ts:6345 `puma-deviate-nitro-3-vs-4-comparison` title "좁은 핏·450km의 끝" → v4 일반 폭도 좁은 편(와이드 상품 별도).
- 보스턴 13 신발 DB relatedPosts의 제목 "같은 17.9만원"·"3만원 더 주고"도 같은 문제가 있다(DB 파일이라 범위 밖).

### 4-C. 한 문장에 맞는 맥락과 틀린 맥락이 섞임 / 다른 브랜드와 공유하는 문장
- 2026-08.ts:4081 FAQ "두 켤레 모두 토박스는 표준 폭"과 4127 표의 노바블라스트 6 칸 "표준" → 보스턴 13·노바블라스트 6 모두 DB에서 narrow(노바는 아식스 범위). 보스턴 칸(4127)만 고쳤다.
- 2026-07.ts:5601 FAQ "보스턴 13·엔돌핀 스피드 5는 표준… 셋 다 와이드 옵션은 없어" → 보스턴 13은 narrow, 엔돌핀 스피드 5는 DB상 와이드가 있다(써코니).
- 2026-07.ts:1438, 1495 `adidas-hyperboost-edge-vs-asics-superblast-3` "둘 다 … 발볼은 표준" → 엣지·슈퍼블라스트 3 모두 DB에서 narrow.
- 2026-07.ts:4100, 4118 `hierro-v9-vs-speedgoat-6` "토박스 둘 다 표준(73mm대)" → 스피드고트 6은 narrow(히에로는 뉴발란스).
- 2026-07.ts:5703 "테크톤(73mm)·S/LAB(74mm)은 표준" → 테크톤 X 3는 narrow(살로몬과 같은 문장).
- 2026-10.ts:2193 `nike-apex-announcement-super-shoe-baseline-2026` 아디오스 프로 4 "37mm/29mm · 8mm · 브랜드 공식(신발 DB)" → DB는 브랜드 표기 6mm·RR 8.1mm라 출처 표기와 값이 섞였다.
- 2026-09.ts:4346 패스트-R "겨울 호환성이 poor입니다. A-TPU 계열 폼이 저온에서 경화되는 경향" → DB 필드는 poor인데 DB 리뷰 문구는 "저온 경도 변화 2%로 작다"라 **DB 자체가 서로 어긋난다**. DB 정리가 먼저 필요하다.
- 2026-09.ts:4284 매그맥스 "카본이 들어간 마하 X 3나 슈퍼블라스트 2" → 슈퍼블라스트 2에는 카본이 없다(아식스, 범위 밖). 같은 문장의 'TPU 플레이트' 부분만 고쳤다.

### 4-D. 의견·DB에 근거 없는 주장
- 아디오스 프로 4 "알파플라이보다 안정적인 서브3" — 2026-06.ts:3235, 3249. DB oneliner에서 이 표현이 빠졌고 RunRepeat는 힐 착지가 불안정하다고 평가한다.
- 씨엘로 X1 2026-09.ts:5051 "46mm 맥시멀 스택이 무릎 충격을 효과적으로 분산시켜 후반부 페이스 드롭을 줄여줍니다" — 효과 주장의 근거가 없고, 46mm는 브랜드 표기다(앞 문장은 고쳤다).
- 매그맥스 2026-09.ts:4266, 4271, 4288-4289 "대회 신발과 같은 착지감"·"최상위 레이서와 짝을 이루는 훈련용 파트너" — '레이서와 같은 폼'이라는 근거가 사라졌다.
- 스피드고트 6 '맥스쿠션' 표현(2026-07.ts:3404 "278g으로 맥스쿠션치고", 4105 "맥스쿠션·경량을 원하는 울트라 러너" 등) — 측정 힐 스택이 32.1mm라 근거가 약하다.
- 벨로시티 나이트로 5 2026-06.ts:2912 "4와 같은 값, 더 부드러운 폼" — v4와의 경도 비교는 DB에 없다(불명).
- 2026-06.ts:2845 FAQ "레이싱(엘리트 3·패스트알)은 좁은 편" — 패스트-R의 DB 판정은 standard(72.3mm, 스니그 핏)다. 판정 자체는 이번 감사에서 바뀌지 않아 그대로 뒀다.
- `2026-best-trail-running-shoes` 2026-05.ts:9591 아그라빅 4 요약표 무게 260g — DB는 283g이지만 이번 감사에서 바뀐 값이 아니다.

## 5. 논지 영향

- **노바블라스트 6 vs 보스턴 13**: "같은 가격, 성격은 반대"라는 논지가 1만원 차로 약해졌다. 본문 가격·km당(256 vs 343원, 34%)은 고쳤다. 제목 수정 여부는 사람이 판단해야 한다.
- **에보 SL vs 보스턴 13**: 가격 차 3만→2만원, km당 이점 22%→18%. 결론 방향은 같다. 제목만 남아 있다.
- **템포 트레이너 3파전**: "발볼 넓다 → 보스턴 13" 추천이 근거를 잃어 엔돌핀 스피드 5만 추천하는 문장으로 고쳤다.
- **슈퍼노바 라이즈 2 vs 3**: "MSRP 1만원 저렴"이 무너졌다(둘 다 159,000원). 라이즈 2의 가성비 근거는 이제 세일가뿐이다. `running-shoes-recommend-by-price-2026`에서 라이즈 2(159,000원)가 '~15만원' 구간에 그대로 있어 **구간 배치가 어긋난다**(값만 고침).
- **20만원대 트레일화 3파전**: "가격은 거의 같다(20.5~21만)"가 무너졌다 → "16.9~21만원대"로 고쳤다. 제목은 그대로다.
- **스피드고트 6 관련 3개 비교글**: '힐 40mm 맥스쿠션' 논지가 측정 32.1mm로 약해졌다. 특히 히에로 v9 비교의 "스피드고트가 스택이 더 높아 푹신"은 측정상 **반대**(32.1 vs 37.3mm)라 그 문장을 고쳤다. 아그라빅 비교 FAQ "다운힐 충격은 스피드고트 6이 최고"는 결론을 빼고 측정 수치로 바꿨다.
- **씨엘로 X1 후기**: '46mm 슈퍼맥스 스택' 논지가 브랜드 표기로 격하됐다. FAQ "로켓 X 3(40mm)보다 두껍다"는 측정상 비슷해 고쳤다.
- **매그맥스 나이트로 2 후기**: 글 전체의 전제("레이서 폼 Nitro Elite + TPU 플레이트 = 슈퍼트레이너")가 DB(NITROFOAM·플레이트 없음·쿠션화)와 맞지 않는다. 사실 문장은 고쳤지만 **제목·구성은 재작성이 필요하다**.
- **디비에이트 나이트로 3 vs 4**: "v4가 토박스를 넓혔다"가 약해졌다(69.7→70.6mm, 여전히 좁음). '와이드 상품 별도' 중심으로 고쳤고 결론(발볼 넓으면 v4 와이드)은 유지된다.
- **아그라빅 스피드 울트라 2**: '8mm 드롭·44mm 고스택으로 안정적'이 측정 드롭 0.1mm·힐 30.7mm로 뒤집혔다. 트레일 계급도·트레일 베스트 카드를 측정 기준으로 고쳤다.

## 6. 검증

| 명령 | 결과 |
|---|---|
| `curl -s -o /dev/null -w "%{http_code}" https://allrunabout.com` | 200 |
| `npm ci` | 성공 |
| `npm run validate` (작업 전 기준선) | 에러 0 · 경고 9 |
| `npm run validate` (각 브랜드 커밋 후) | 에러 0 · 경고 9 |
| `npm run build` (최종 커밋 75a5bcc9) | exit 0, 사이트맵 생성, "광고·GA 로딩 정상" |
| 치환 방식 | python3 -I 스크립트로 치환마다 등장 횟수를 검증(예상 1회와 다르면 전체 중단). 아디다스 73+7, HOKA 47, PUMA 26건 |
