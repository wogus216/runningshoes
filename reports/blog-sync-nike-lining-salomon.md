# 작업 B1: 블로그 정합성 정정 — Nike·Li-Ning·Salomon (2026-10-20)

- 작업 브랜치: `cloud/blog-sync-nike-lining-salomon` (커밋 2개: 나이키 `3cbf869`, 살로몬 `9ebf15b`)
- 기준: `git diff 8af0c32 origin/main`(origin/main = `6609d63`) 의 nike·lining·salomon 신발 DB
- 수정: 블로그 116건(나이키) + 13건(살로몬) = 129건 치환. 리닝은 수정 0건.

## 1. 못 한 것

- **리닝**: DB diff가 커뮤니티 후기(WeeViews·Shihuo·RTR 인용) 삭제뿐이고 수치·판정 변경이 없어 정정 대상 없음. 삭제된 후기 문구를 그대로 옮긴 블로그 문장도 grep으로 찾지 못함.
- **title·slug는 규칙대로 건드리지 않음** — 그런데 아래 title 4개는 현재 DB와 모순됨(사람 판단 필요):
  - `nike-acg-zegama-trail-review-2026` title "…토박스 더 넓어진 맥시멀 쿠션 울트라화" — DB: 토박스 실측 72.8mm로 전작(76.4mm)보다 **좁아짐**.
  - `asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026` title "같은 22.9만원" — 현재 둘 다 209,000원(같다는 점은 맞고 금액이 틀림).
  - `nike-rival-fly-4-review` title "13만원대" — 현재 129,000원(12만원대). title에 '후기'도 들어 있음.
  - `nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026` title "발볼이 가른다" — 알파플라이 3이 실측상 셋 중 토박스가 가장 넓어(75.3mm) 전제가 약해짐.
- **범위 밖 브랜드 값**은 확인만 하고 고치지 않음(아래 '보고만' 참고). 단, 나이키 신발과 한 문장·한 표에 묶여 있어 같이 바꾼 경우 2건은 '보고만' 표 위에 따로 적음.
- Ultrafly(드롭 12→11.8mm 실측)·페가수스 프리미엄(에너지 리턴 56~57%→67.3/68.3%, 토박스 68→70.3mm)은 블로그에 옛 값 진술이 없어 수정 없음.

## 2. 바뀐 사실 표 (DB 8af0c32 → origin/main)

| 신발 | 바뀐 값 |
|---|---|
| 나이키 라이벌 플라이 4 | 정가 139,000 → **129,000원**, km당 309 → **287원**(450km) |
| 나이키 줌 플라이 6 | 정가 229,000 → **209,000원**, km당 572 → **523원**(400km), 에너지 리턴 61% → **힐 61%·앞발 67%**, 베이퍼 4 대비 가격 74% → 68% |
| 나이키 ACG 제가마 트레일 | 무게 336g → **실측 306g**(나이키 표기 336g 병기), 토박스 wide → **standard**(실측 72.8mm, 전작 76.4mm보다 좁음, 최대폭 96.9mm), 스택 실측 31.2/27.5mm·드롭 3.7mm 병기 |
| 나이키 알파플라이 3 | 토박스 standard → **wide**(실측 75.3mm, 평균 +2.1mm), 스택 실측 38.1/29.6mm·드롭 8.5mm 병기, 와이드 없음 |
| 나이키 베이퍼플라이 4 | 에너지 리턴 78% → **힐 78%·앞발 75%**, 미드솔 "19.9 HA" 삭제 → **경도 34.7 AC**, 토박스 문구 "좁음" 삭제 → **표준(73.2mm=평균)**, 스택 36mm 문구 → 34.1mm(실측) |
| 나이키 페가수스 41 | 토박스 standard → **narrow**(72.9mm, 테이퍼형), 와이드·X-와이드 유지, 에너지 리턴 53% 문구 → 55.5/61.4% |
| 나이키 페가수스 42 | 토박스 standard → **narrow**(표준 사이즈 72.3mm), 한국 와이드 유지 |
| 나이키 페가수스 플러스(1세대) | 토박스 standard → **narrow**(71.6mm), 와이드 없음 |
| 나이키 보메로 플러스 | 토박스 standard → **narrow**(표준 사이즈 71.1mm), 남성 와이드 1종 / 스택 "실측 45/35mm·브랜드 42/33" → **실측 42.3/32.7mm·드롭 9.6mm, 브랜드 45/35mm** |
| 나이키 페가수스 프리미엄 | 에너지 리턴 56~57% → 힐 67.3%·앞발 68.3%, 토박스 68mm → 70.3mm(블로그 해당 진술 없음) |
| 나이키 스트릭플라이 2 | 에너지 리턴 77% → **76~78%**(힐 76.3%·앞발 77.9%) |
| 나이키 울트라플라이 | 드롭 12mm → 11.8mm(실측), 트레일 평균 74.4 → 74.3mm(블로그 해당 진술 없음) |
| 살로몬 펄사 | 미드솔 optiFOAM2(100% eTPU) → **Opti FOAM Evo** |
| 살로몬 S/LAB 펄사 4 | 미드솔 optiFOAM+(PEBA/EVA) → **Energy Foam+·Energy Foam 듀얼**, 에너지 리턴 47~57% → **48~58%**, 공식몰 표기 250g 병기 |
| 살로몬 울트라 글라이드 4 | 토박스 문구 "표준+와이드" → **좁음(표준 버전 71.4mm)/와이드**(toBoxWidth는 원래 narrow), 에너지 리턴 47~51% → **48~52%**, 공식몰 표기 285g 병기 |
| 리닝 레드헤어 9·9 프로·9 울트라 | 커뮤니티 후기 항목 삭제만(수치 변경 없음) |

## 3. 수정한 문장 표

### 나이키 (116건)

| 글 slug | 파일:줄 | 이전 | 이후 |
|---|---|---|---|
| running-shoes-recommend-by-price-2026 | 2026-07.ts:4469 | <td>139,000</td> | <td>129,000</td> |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3601 | 라이벌 플라이 4는 139,000원으로 이 표에서 가장 싼 축인데 km당 약 309원이고 | 라이벌 플라이 4는 129,000원으로 이 표에서 가장 싼 축인데 km당 약 287원이고 |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3601 | 3만원 더 싸게 샀는데 1km당 100원 가까이 더 내는 셈입니다. 주 3회 10km씩 달리면 그 차이가 한 달에 1만원 넘게 벌어집니다. | 4만원 더 싸게 샀는데 1km당 약 76원 더 내는 셈입니다. 주 3회 10km씩 달리면 그 차이가 한 달에 9천원가량 벌어집니다. |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3654 | <td>139,000원</td><td>약 <strong>309원</strong></td> | <td>129,000원</td><td>약 <strong>287원</strong></td> |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3659 | 라이벌 플라이 4가 3만원 쌉니다. 그런데 km당으로는 고스트 17이 약 100원 저렴합니다. 주 3회 10km씩 달리면 한 달 120km, 차이는 <strong>월 1만 2천원</strong>입니다. 두 달이면 처음 아낀 3만원이 사라지고 | 라이벌 플라이 4가 4만원 쌉니다. 그런데 km당으로는 고스트 17이 약 76원 저렴합니다. 주 3회 10km씩 달리면 한 달 120km, 차이는 <strong>월 약 9천원</strong>입니다. 다섯 달이 안 돼 처음 아낀 4만원이 사라지고 |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3682 | <td>139,000원</td><td>236g</td><td>약 309원</td> | <td>129,000원</td><td>236g</td><td>약 287원</td> |
| adidas-adizero-sl2-review | 2026-09.ts:4856 | 라이벌 플라이 4</a> 139,000원) | 라이벌 플라이 4</a> 129,000원) |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3808 | 라이벌 플라이 4(13.9만) | 라이벌 플라이 4(12.9만) |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3875 | <td>Cushlon</td><td>13.9만</td> | <td>Cushlon</td><td>12.9만</td> |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3917 | 라이벌 플라이 4</a>(13.9만) | 라이벌 플라이 4</a>(12.9만) |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3885 | <td>ZoomX + 카본</td><td>22.9만</td> | <td>ZoomX + 카본</td><td>20.9만</td> |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3959 | 줌 플라이(22.9만) | 줌 플라이(20.9만) |
| running-shoes-tier-chart-2026 | 2026-09.ts:694 | 줌 플라이 6</a> 22.9만 | 줌 플라이 6</a> 20.9만 |
| carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3321 | <td>229,000원</td><td>248g</td><td>약 572원</td> | <td>209,000원</td><td>248g</td><td>약 523원</td> |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5548 | <td>229,000원</td><td>219,000원</td> | <td>209,000원</td><td>219,000원</td> |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5554 | <td>61%</td> | <td>힐 61% / 앞발 67%</td> |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5558 | <td>400km / 572원</td> | <td>400km / 523원</td> |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5570 | 베이퍼플라이(30만원)의 65% 값이라 | 베이퍼플라이(30만 9천원)의 약 68% 값이라 |
| boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026 | 2026-07.ts:5571 | km당 572원으로 비용이 높습니다 | km당 523원으로 비용이 높습니다 |
| asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4231 | 정가 229,000원, km당 572원, | 정가 209,000원, km당 약 522~523원, |
| asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4242 | 둘 다 229,000원입니다. 내구성도 400km로 같아 km당 비용도 약 572원으로 동일합니다. | 둘 다 209,000원입니다. 내구성도 400km로 같아 km당 비용도 약 522~523원으로 사실상 같습니다. |
| asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4269 | 둘 다 229,000원, 400km, km당 572원, | 둘 다 209,000원, 400km, km당 약 522~523원, |
| asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4290 | <td>229,000원</td><td>229,000원 <em>(동일)</em></td> | <td>209,000원</td><td>209,000원 <em>(동일)</em></td> |
| asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4296 | <td>61%</td> | <td>61% / 67%</td> |
| asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4301 | <td>400km · 572원</td><td>400km · 572원 <em>(동일)</em></td> | <td>400km · 522원</td><td>400km · 523원 <em>(사실상 동일)</em></td> |
| asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4340 | 에너지 리턴은 힐 64.6% / 전족 62.6%로 줌 플라이(61%)보다 높게 측정됐습니다. | 에너지 리턴은 힐 64.6% / 전족 62.6%로, 힐은 줌 플라이(61%)보다 높고 전족은 줌 플라이(67%)가 더 높게 측정됐습니다. |
| asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026 | 2026-08.ts:4390 | (둘 다 229,000원) | (둘 다 209,000원) |
| nike-rival-fly-4-review | 2026-09.ts:4599 | 139,000원으로 아식스 매직스피드 4보다 6만원 저렴합니다 | 129,000원으로 아식스 매직스피드 4보다 7만원 저렴합니다 |
| nike-rival-fly-4-review | 2026-09.ts:4610 | <li><strong>139,000원으로 | <li><strong>129,000원으로 |
| nike-rival-fly-4-review | 2026-09.ts:4610 | (199,000원)보다 6만원 저렴</strong> | (199,000원)보다 7만원 저렴</strong> |
| nike-rival-fly-4-review | 2026-09.ts:4624 | <h2>13만원대 가성비 템포 트레이너</h2> | <h2>12만원대 가성비 템포 트레이너</h2> |
| nike-rival-fly-4-review | 2026-09.ts:4625 | 템포 트레이너입니다. 139,000원으로 | 템포 트레이너입니다. 129,000원으로 |
| nike-rival-fly-4-review | 2026-09.ts:4625 | (199,000원)보다 6만원 저렴하면서 | (199,000원)보다 7만원 저렴하면서 |
| nike-rival-fly-4-review | 2026-09.ts:4638 | <p>139,000원, 세일가는 | <p>129,000원, 세일가는 |
| nike-rival-fly-4-review | 2026-09.ts:4638 | km당 약 309원으로 | km당 약 287원으로 |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3265 | 새 라스트로 토박스를 넓혔으며 | 새 라스트를 적용했으며 |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3265 | 발볼 넓은 한국 러너에게 드물게 우호적인 나이키 트레일화인 이유와, 336g의 무게를 감안해도 선택할 만한 이유를 정리했습니다. | 토박스 실측이 전작보다 좁아진 점과, 실측 306g의 무게를 감안해도 선택할 만한 이유를 정리했습니다. |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3277 | <li>핵심 변화는 <strong>ZoomX 비중 확대 + 새 라스트로 넓힌 토박스</strong>입니다. 전작(제가마 2)도 이미 넓은 편(97.5mm)이었는데 이번엔 그보다 더 여유로워져, 발볼 넓은 한국 러너에게 드물게 우호적인 나이키 트레일화입니다</li> | <li>핵심 변화는 <strong>ZoomX 비중 확대 + 새 라스트</strong>입니다. 다만 RunRepeat 실측 토박스는 72.8mm로 전작 제가마 2(76.4mm)보다 오히려 좁아졌고, 가장 넓은 부분(96.9mm)이 트레일 평균보다 넓어 중족부 여유가 남은 정도입니다</li> |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3278 | 다만 <strong>336g으로 동급 대비 무거운 편</strong>이고 | 다만 <strong>실측 306g(나이키 표기 336g)으로 가벼운 편은 아니</strong>고 |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3296 | 토박스 확장, 힐 락다운 개선 | 새 라스트 적용, 힐 락다운 개선 |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3304 | <td>336g(남성 M10) / 273g(여성 W8)</td> | <td>306g(RunRepeat 실측, 남성 US 9) · 나이키 표기 336g(남성 M10) / 273g(여성 W8)</td> |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3305 | <td>38 / 34mm</td> | <td>38 / 34mm(브랜드 표기) · 31.2 / 27.5mm(RunRepeat 실측)</td> |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3306 | <td>4mm</td><td>4.0mm</td> | <td>4mm(브랜드 표기) · 3.7mm(실측)</td><td>4.0mm</td> |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3313 | ※ ACG 제가마 무게·스택·드롭은 Believe in the Run 실측 기준(2026-04-30 출시). | ※ ACG 제가마 무게·스택·드롭은 나이키 표기와 RunRepeat 랩 실측(남성 US 9)을 함께 적었습니다(2026-04-30 출시). |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3315 | <h2>가장 큰 변화 — 넓어진 토박스</h2> | <h2>가장 큰 변화 — 새 라스트와 달라진 토박스</h2> |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3316 | <p>전작 제가마 2도 토박스 최대 97.5mm(발가락 부위 76.4mm)로 이미 트레일화치고 넓은 편이었습니다. 이번 ACG 버전은 <strong>새 라스트로 전족·미드풋 공간을 한층 더 넓혔습니다.</strong> 카본 레이서나 좁은 트레일 레이싱화에 발가락이 눌리던 러너라면 반가운 변화입니다. 여기에 | <p>전작 제가마 2는 토박스 최대 97.5mm(발가락 부위 76.4mm)로 트레일화치고 넓은 편이었습니다. 이번 ACG 버전은 새 라스트를 적용했는데, <strong>RunRepeat 실측 토박스는 72.8mm로 전작보다 오히려 좁아졌습니다</strong>(트레일 평균 74.3mm). 랩도 "more in line with other Nike shoes"라고 평가했습니다. 가장 넓은 부분은 96.9mm로 트레일 평균(95.7mm)보다 넓어 중족부 여유는 남아 있습니다. 여기에 |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3317 | 힐 38mm의 넉넉한 스택 | 힐 38mm(브랜드 표기, 실측 31.2mm)의 넉넉한 스택 |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3320 | <p>336g(남성 M10)은 동급 경쟁작 대비 <strong>확실히 무거운 편</strong>입니다. 살로몬 S/Lab 울트라 글라이드 2(약 320g), 노스페이스 벡티브 엔듀리스 4(약 309g) 등과 비교되며 지적된 부분입니다. 빠른 페이스의 | <p>나이키 표기는 336g(남성 M10)이지만 RunRepeat 실측은 <strong>306g(남성 US 9)</strong>으로, 가벼운 편은 아닙니다. 빠른 페이스의 |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3324 | ACG 제가마는 전작보다 더 넓어진 토박스와 맥시멀 쿠션을 갖춰, <strong>발볼이 넓으면서 장거리 컴포트를 원하는 러너</strong>에게 나이키 안에서는 사실상 유일한 선택지입니다. 별도 와이드 SKU는 없지만 기본 라스트 자체가 넉넉합니다. | ACG 제가마는 가장 넓은 부분(실측 96.9mm)이 트레일 평균보다 넓어 중족부 여유가 있지만, 토박스는 실측 72.8mm로 전작(76.4mm)보다 좁아져 <strong>발가락 쪽 공간이 중요한 발볼 넓은 러너</strong>에게는 확실한 대안이 되기 어렵습니다. 별도 와이드 SKU도 없으므로 시착이 필요합니다. |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3330 | <li><strong>발볼이 넓어</strong> 트레일 레이싱화의 좁은 토박스가 부담스러웠던 러너</li> | <li><strong>중족부 여유</strong>를 원하는 트레일 러너(단, 토박스는 실측 72.8mm로 전작보다 좁아 발가락 공간이 중요하면 시착 필수)</li> |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3331 | 목적이라면 336g이 부담될 수 있어 | 목적이라면 실측 306g도 부담될 수 있어 |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3339 | A. 토박스가 더 넓어지고 힐 락다운이 개선됐다는 게 확인된 변화입니다. 다만 무게가 늘었으니(302g→336g), 편안함·핏 개선을 중시한다면 갈아탈 만하고 경량성이 우선이라면 신중히 판단하세요. | A. 힐 락다운이 개선됐다는 평가가 있지만, 토박스는 RunRepeat 실측 72.8mm로 제가마 2(76.4mm)보다 오히려 좁아졌습니다. 무게도 실측 306g(남성 US 9)으로 가벼운 편은 아니니, 쿠션·락다운 개선을 중시한다면 갈아탈 만하고 발가락 공간이나 경량성이 우선이라면 시착 후 판단하세요. |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3347 | A. 별도 와이드 SKU는 없습니다. 다만 전작 대비 라스트 자체를 넓힌 설계라, 발볼이 넓은 러너도 표준 사이즈로 대응되는 경우가 많습니다. | A. 별도 와이드 SKU는 없습니다. RunRepeat 실측 토박스가 72.8mm로 전작(76.4mm)보다 좁아졌으므로, 발볼이 넓은 러너는 시착 후 결정하세요. |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3807 | 트레일화인 ACG 제가마 트레일은 기본 폭이 넉넉합니다. | 트레일화인 ACG 제가마 트레일은 중족부는 넓지만 토박스가 실측 72.8mm로 표준 수준이고 와이드가 없습니다. |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3884 | <td>21.9만</td><td>336g</td><td>ACG 이관 3세대, Vibram 메가그립·넓은 토박스</td> | <td>21.9만</td><td>306g</td><td>ACG 이관 3세대, Vibram 메가그립·넓은 중족부</td> |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3924 | ACG 제가마 트레일</a>(맥스 쿠션·넓은 토박스) | ACG 제가마 트레일</a>(맥스 쿠션·넓은 중족부) |
| brooks-cascadia-20-preview-2026 | 2026-07.ts:2495 | 발볼이 넓다면 착화가 필요하며, 넓은 발볼을 우선한다면 한국 러너 사이에서 토룸이 여유롭다고 평가받는 나이키 <a href="/shoes/nike-acg-zegama-trail">ACG 제가마 트레일</a>이나 살로몬 <a href="/shoes/salomon-ultra-glide-4">울트라 글라이드 4</a>도 함께 비교해 보세요. | 발볼이 넓다면 착화가 필요합니다. 비교 후보인 나이키 <a href="/shoes/nike-acg-zegama-trail">ACG 제가마 트레일</a>은 RunRepeat 실측 토박스 72.8mm로 트레일 평균(74.3mm)보다 좁고, 살로몬 <a href="/shoes/salomon-ultra-glide-4">울트라 글라이드 4</a>는 표준 버전이 71.4mm로 좁아 발볼이 넓다면 와이드 버전을 보는 편이 맞습니다. |
| brooks-cascadia-20-preview-2026 | 2026-07.ts:2563 | 발볼이 넉넉한 편을 원하면 나이키 <a href="/shoes/nike-acg-zegama-trail">ACG 제가마 트레일</a>도 비교 대상입니다. | 발볼이 넉넉한 편을 원하면 착화가 필요합니다. 나이키 <a href="/shoes/nike-acg-zegama-trail">ACG 제가마 트레일</a>도 토박스가 실측 72.8mm로 트레일 평균보다 좁아 발볼 대안으로는 약합니다. |
| trail-running-shoes-lineup-tier-guide-2026 | 2026-08.ts:1925 | <td>21.9만</td><td>336g</td><td>맥시멀 쿠션 울트라 트레일, 넓은 토박스</td> | <td>21.9만</td><td>306g</td><td>맥시멀 쿠션 울트라 트레일, 넓은 중족부</td> |
| trail-running-shoes-lineup-tier-guide-2026 | 2026-08.ts:1945 | ACG 제가마 트레일</a>은 넓은 토박스의 맥시멀 쿠션 울트라 트레일화입니다. | ACG 제가마 트레일</a>은 중족부가 넓은(실측 96.9mm) 맥시멀 쿠션 울트라 트레일화입니다. |
| nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026 | 2026-07.ts:1261 | <li><strong>가르는 건 발볼</strong> — 알파플라이는 좁고 와이드도 없어 발볼 넓으면 어렵습니다. 메타스피드와 SC 엘리트는 <strong>와이드(2E)</strong>가 있고, 특히 SC 엘리트 v5는 토박스 74.5mm로 <strong>"발볼 넓어도 신는 유일한 슈퍼슈즈"</strong></li> | <li><strong>가르는 건 발볼</strong> — 알파플라이 3은 토박스가 실측 75.3mm로 레이싱화 중 넓은 편이지만 와이드가 없습니다. 메타스피드와 SC 엘리트는 <strong>와이드(2E)</strong>가 있고, SC 엘리트 v5는 토박스 74.5mm에 와이드까지 갖췄습니다</li> |
| nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026 | 2026-07.ts:1281 | <td>발볼 / 와이드</td><td>표준 / <strong>없음</strong></td> | <td>발볼 / 와이드</td><td>넓은 편(75.3mm) / <strong>없음</strong></td> |
| nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026 | 2026-07.ts:1290 | <p>약점은 <strong>발볼과 가격</strong>입니다. 토박스가 좁은 데다 와이드 옵션이 없어, 발볼 넓은 러너는 레이스 후반 발가락 눌림을 겪을 수 있습니다. | <p>약점은 <strong>사이즈와 가격</strong>입니다. 토박스는 실측 75.3mm로 레이싱화 중 넓은 편이지만 와이드 옵션이 없고 사이즈 판정이 "Slightly small"이라, 발볼이 아주 넓다면 시착이 필요합니다. |
| nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026 | 2026-07.ts:1305 | (74.5mm+와이드). 알파플라이는 피하세요</li> | (74.5mm+와이드). 알파플라이 3도 토박스는 넓은 편(75.3mm)이지만 와이드가 없어 시착이 필요합니다</li> |
| nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026 | 2026-07.ts:1316 | A. 불가능하진 않지만 권하지 않습니다. 알파플라이 3은 토박스가 좁고 와이드 옵션이 없어, 레이스 후반 발이 부으면 발가락이 눌려 물집·통증이 생기기 쉽습니다. 발볼이 넓다면 SC 엘리트 v5(74.5mm)나 와이드가 있는 메타스피드 스카이+가 안전합니다. | A. 안 되는 건 아닙니다. 알파플라이 3은 RunRepeat 실측 토박스 75.3mm로 레이싱화 중 넓은 편(랩 평가 "exceptionally broad for a racing shoe")이지만, 와이드 옵션이 없고 사이즈 판정이 "Slightly small"이라 시착이 필요합니다. 와이드 사이즈가 필요할 만큼 발볼이 넓다면 와이드가 있는 SC 엘리트 v5나 메타스피드 스카이+가 안전합니다. |
| new-balance-sc-elite-v5-review | 2026-06.ts:876 | 토박스 74.5mm로 <a href="/shoes/nike-vaporfly-4">베이퍼플라이</a>(67.8mm)·<a href="/shoes/nike-alphafly-3">알파플라이</a>(68.4mm)보다 압도적으로 넓어, 레이스 후반 발가락 눌림이 고질병이던 한국 러너에게 사실상 유일한 선택지입니다 | 토박스 74.5mm로 <a href="/shoes/nike-vaporfly-4">베이퍼플라이</a>(73.2mm)보다 넓고 <a href="/shoes/nike-alphafly-3">알파플라이</a>(75.3mm)와는 비슷한 수준이라, 레이스 후반 발가락 눌림이 고민인 한국 러너에게 유력한 선택지입니다 |
| new-balance-sc-elite-v5-review | 2026-06.ts:909 | 베이퍼플라이(67.8mm), 알파플라이(68.4mm)보다 6~7mm 넓습니다. 숫자로는 작아 보여도, 레이스 후반 발이 부으면 이 차이가 "완주 가능"과 "고통"을 가릅니다. 발볼 넓은 한국 러너가 <strong>카본의 추진력을 누리면서 발가락 눌림에서 자유로운</strong> 거의 유일한 슈퍼슈즈입니다. | 베이퍼플라이 4(73.2mm)보다 1.3mm 넓고, 알파플라이 3(75.3mm)보다는 0.8mm 좁은 수준입니다(RunRepeat 실측). 슈퍼슈즈 중 넓은 축이라 발볼 넓은 한국 러너가 <strong>카본의 추진력을 누리면서 발가락 눌림 부담을 줄일 수 있는</strong> 선택지입니다. |
| new-balance-sc-elite-v6-preview-2026 | 2026-07.ts:2267 | 토박스 74.5mm는 <a href="/shoes/nike-vaporfly-4">베이퍼플라이</a>(67.8mm)·<a href="/shoes/nike-alphafly-3">알파플라이</a>(68.4mm)보다 6~7mm 넓어, 레이스 후반 발가락 눌림 때문에 카본화를 포기했던 한국 러너의 사실상 유일한 선택지였죠. | 토박스 74.5mm는 <a href="/shoes/nike-vaporfly-4">베이퍼플라이</a>(73.2mm)보다 넓고 <a href="/shoes/nike-alphafly-3">알파플라이</a>(75.3mm)와는 비슷한 수준이라, 레이스 후반 발가락 눌림이 고민인 한국 러너에게 유력한 선택지였죠. |
| new-balance-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:4083 | 토박스 74.5mm로 베이퍼플라이·알파플라이보다 넓은 전작 | 토박스 74.5mm로 베이퍼플라이 4(73.2mm)보다 넓은 전작 |
| saucony-endorphin-pro-4-vs-5-comparison | 2026-05.ts:4003 | <td><strong>78%</strong></td><td>좁음(73.2mm)</td> | <td><strong>힐 78%·앞발 75%</strong></td><td>표준(73.2mm)</td> |
| saucony-endorphin-pro-4-vs-5-comparison | 2026-05.ts:4004 | <td>74.9%</td><td>좁음</td> | <td>74.9%</td><td>넓음(75.3mm)</td> |
| saucony-endorphin-pro-4-vs-5-comparison | 2026-05.ts:4094 | 166g 압도적 가벼움 + 78% 에너지 리턴 | 166g 압도적 가벼움 + 힐 78%·앞발 75% 에너지 리턴 |
| nike-vaporfly-4-vs-alphafly-3-comparison | 2026-05.ts:4177 | + 베이퍼 78% vs 알파 74.9% 에너지 리턴 | + 베이퍼 힐 78%·앞발 75% vs 알파 74.9% 에너지 리턴 |
| nike-vaporfly-4-vs-alphafly-3-comparison | 2026-05.ts:4186 | (SA 137, HA 19.9, 에너지 리턴 78%) | (SA 137, 경도 34.7 AC, 에너지 리턴 힐 78%·앞발 75%) |
| nike-vaporfly-4-vs-alphafly-3-comparison | 2026-05.ts:4206 | <td><strong>78%</strong></td><td>74.9%</td><td>+3.1%p (베이퍼 우위)</td> | <td><strong>힐 78% / 앞발 75%</strong></td><td>74.9%</td><td>힐 +3.1%p (베이퍼 우위)</td> |
| nike-vaporfly-4-vs-alphafly-3-comparison | 2026-05.ts:4209 | <td>73.2mm (좁음)</td><td>표준 (좁음)</td><td>둘 다 좁음 — 한국 발볼 주의</td> | <td>73.2mm (표준)</td><td>75.3mm (넓음)</td><td>알파가 2.1mm 넓음 — 둘 다 와이드 없음</td> |
| nike-vaporfly-4-vs-alphafly-3-comparison | 2026-05.ts:4225 | <h3>3. 에너지 리턴 78% vs 74.9% | <h3>3. 에너지 리턴 힐 78% vs 74.9% |
| nike-vaporfly-4-vs-alphafly-3-comparison | 2026-05.ts:4244 | 166g 가벼움 + 78% 에너지 리턴 | 166g 가벼움 + 힐 78% 에너지 리턴 |
| nike-vaporfly-4-vs-alphafly-3-comparison | 2026-05.ts:4266 | 가벼움 + 78% 에너지 리턴 | 가벼움 + 힐 78% 에너지 리턴 |
| nike-vaporfly-4-vs-alphafly-3-comparison | 2026-05.ts:4318 | <td>78% 에너지 리턴 가속·유지</td> | <td>힐 78% 에너지 리턴 가속·유지</td> |
| nike-vaporfly-4-vs-alphafly-3-comparison | 2026-05.ts:4365 | 166g 가벼움 + 78% 에너지 리턴 | 166g 가벼움 + 힐 78% 에너지 리턴 |
| nike-vaporfly-4-vs-alphafly-3-comparison | 2026-05.ts:4397 | (SA 137, HA 19.9, 에너지 리턴 78%) | (SA 137, 경도 34.7 AC, 에너지 리턴 힐 78%·앞발 75%) |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3889 | <td>166g, 78% 에너지 리턴</td> | <td>166g, 힐 78% 에너지 리턴</td> |
| carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3372 | <td>약 1,695원</td><td>표준</td><td>없음</td> | <td>약 1,695원</td><td>넓음</td><td>없음</td> |
| carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3223 | (30종 중 넓은 것 0종) | (30종 중 넓은 것 1종) |
| carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3254 | 토박스가 넓게 분류된 모델은 0종이고, 좁은 편이 13종(43%), 나머지 17종이 표준입니다. | 토박스가 넓게 분류된 모델은 알파플라이 3 1종(와이드 없음)이고, 좁은 편이 13종(43%), 나머지 16종이 표준입니다. |
| carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3268 | 30종 중 토박스가 넓은 모델은 <strong>0종</strong>이고 | 30종 중 토박스가 넓은 모델은 <strong>1종</strong>(알파플라이 3)이고 |
| carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3389 | <td><strong>0종</strong></td><td>없습니다. 입문화에는 5종 있었습니다</td> | <td><strong>1종</strong></td><td>알파플라이 3뿐입니다(와이드 없음). 입문화에는 5종 있었습니다</td> |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3938 | <td>페가수스 42(72.3mm) · 페가수스 플러스 2 · 베이퍼플라이 4(73.2mm) · 알파플라이 3</td> | <td>페가수스 플러스 2 · 베이퍼플라이 4(73.2mm) · ACG 제가마 트레일(72.8mm)</td> |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3939 | <tr><td><strong>넓은 편 (트레일)</strong></td><td>ACG 제가마 트레일 · 울트라플라이 — 별도 와이드 없이 기본 폭이 넉넉</td> | <tr><td><strong>넓은 편</strong></td><td>알파플라이 3(75.3mm) · 울트라플라이(트레일) — 별도 와이드 없이 기본 폭이 넉넉</td> |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3940 | <td>페가수스 프리미엄 · 페가수스 플러스(1세대) · | <td>페가수스 42 표준 사이즈(72.3mm, 와이드 있음) · 보메로 플러스 표준 사이즈(71.1mm, 남성 와이드 있음) · 페가수스 프리미엄 · 페가수스 플러스(1세대) · |
| wide-feet-running-shoes-korea | 2025-01.ts:125 | <td>94.6mm</td><td>표준 (좁은 편)</td> | <td>94.6mm</td><td>좁음 (테이퍼형)</td> |
| nike-pegasus-42-review | 2026-05.ts:10904 | <td>실측 72.3mm로 평균 한국 발볼 무난</td> | <td>실측 72.3mm, 앞코가 좁아지는 형태라 시착 권장</td> |
| nike-pegasus-42-review | 2026-05.ts:11059 | 토박스 72.3mm(RunRepeat)로 41(72.9mm)과 거의 같은 표준 폭입니다. | 토박스 72.3mm(RunRepeat)로 41(72.9mm)과 거의 같고, 랩 평균(73.2mm)보다 약간 좁으며 앞코가 좁아지는 형태("it tapers notably")입니다. |
| mizuno-wave-rider-29-vs-nike-pegasus-42-daily-2026 | 2026-07.ts:1372 | <td>표준 (랩 72.3mm) / <strong>2E 있음</strong></td> | <td>좁음 (랩 72.3mm) / <strong>2E 있음</strong></td> |
| nike-pegasus-42-vs-asics-novablast-6-daily-2026 | 2026-07.ts:1544 | <td>발볼 / 와이드</td><td>표준 / <strong>2E 있음</strong></td> | <td>발볼 / 와이드</td><td>좁음(72.3mm) / <strong>2E 있음</strong></td> |
| nike-pegasus-plus-2-release-2026 | 2026-08.ts:758 | 1세대 페가수스 플러스는 저희 DB 분류상 토박스가 표준 폭이었는데 | 1세대 페가수스 플러스는 저희 DB 분류상 토박스가 좁은 폭(실측 71.6mm)이었는데 |
| pegasus-42-vs-premium-daily-2026 | 2026-09.ts:2247 | <tr><td>토박스</td><td>표준</td><td><strong>좁음</strong></td></tr> | <tr><td>토박스</td><td>좁음(표준 사이즈 72.3mm)</td><td><strong>좁음</strong>(70.3mm)</td></tr> |
| pegasus-42-vs-premium-daily-2026 | 2026-09.ts:2269 | 42는 표준 토박스에 와이드가 나옵니다. | 42도 표준 사이즈 토박스는 좁은 편(72.3mm)이지만 와이드가 나옵니다. |
| pegasus-42-vs-premium-daily-2026 | 2026-09.ts:2312 | 반면 페가수스 42는 표준 토박스에 와이드 옵션이 나옵니다. | 반면 페가수스 42는 표준 사이즈 토박스가 좁은 편(72.3mm)이지만 와이드 옵션이 나옵니다. |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3705 | <td>약 282원</td><td>표준</td><td>있음</td> | <td>약 282원</td><td>좁음</td><td>있음</td> |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3707 | <td>약 289원</td><td>표준</td><td>있음</td> | <td>약 289원</td><td>좁음</td><td>있음</td> |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3611 | 반대로 라이벌 플라이 4, 벨로시티 나이트로 4, 레드헤어 9 프로·울트라는 좁은 편으로 분류돼 있습니다. | 반대로 라이벌 플라이 4, 벨로시티 나이트로 4, 레드헤어 9 프로·울트라, 페가수스 41·42(표준 사이즈 기준)는 좁은 편으로 분류돼 있습니다. |
| beginner-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3611 | 벨로시티 나이트로 4는 좁지만 와이드가 나옵니다. | 벨로시티 나이트로 4와 페가수스 41·42는 좁지만 와이드가 나옵니다. |
| nike-streakfly-2-review | 2026-09.ts:4668 | 77% 에너지 리턴, 219,000원으로 | 에너지 리턴 76~78%(RunRepeat 실측 힐 76.3%·앞발 77.9%), 219,000원으로 |
| nike-streakfly-2-review | 2026-09.ts:4679 | 카본 Flyplate로 77% 에너지 리턴을 냅니다 | 카본 Flyplate로 에너지 리턴 76~78%를 냅니다 |
| nike-streakfly-2-review | 2026-09.ts:4694 | 초경량과 77% 에너지 리턴을 달성한 | 초경량과 에너지 리턴 76~78%(RunRepeat 실측)를 달성한 |
| nike-vomero-18-vs-vomero-plus-max-cushion-2026 | 2026-09.ts:7698 | 드롭이 실측 13.9mm에서 10mm로 내려옵니다 | 드롭이 실측 13.9mm에서 9.6mm로 내려옵니다 |
| nike-vomero-18-vs-vomero-plus-max-cushion-2026 | 2026-09.ts:7746 | <td>42.5 / 28.6mm</td><td><strong>45 / 35mm</strong></td> | <td>42.5 / 28.6mm</td><td>42.3 / <strong>32.7mm</strong></td> |
| nike-vomero-18-vs-vomero-plus-max-cushion-2026 | 2026-09.ts:7747 | <td><strong>13.9mm</strong></td><td><strong>10mm</strong></td> | <td><strong>13.9mm</strong></td><td><strong>9.6mm</strong></td> |
| nike-vomero-18-vs-vomero-plus-max-cushion-2026 | 2026-09.ts:7766 | 스택 실측도 전족부에서 28.6mm 대 35mm로 6mm 넘게 차이가 납니다(힐은 42.5 대 45mm로 2.5mm). | 스택 실측도 전족부에서 28.6mm 대 32.7mm로 4mm 넘게 차이가 납니다(힐은 42.5 대 42.3mm로 사실상 같음). |
| nike-vomero-18-vs-vomero-plus-max-cushion-2026 | 2026-09.ts:7766 | 그래서 드롭이 13.9mm에서 10mm로 내려옵니다. | 그래서 드롭이 13.9mm에서 9.6mm로 내려옵니다. |
| nike-vomero-18-vs-vomero-plus-max-cushion-2026 | 2026-09.ts:7782 | 플러스는 드롭 10mm에 전족부 35mm라 | 플러스는 드롭 9.6mm에 전족부 32.7mm(실측)라 |
| nike-vomero-18-vs-vomero-plus-max-cushion-2026 | 2026-09.ts:7788 | 우리 DB에 적힌 두 신발의 표기 스택(18 46mm·플러스 42mm)만 놓고 보면 "18이 더 두껍다"로 읽히지만, 같은 랩 실측으로는 플러스가 힐 2.5mm·전족부 6.4mm 더 두껍습니다. | 우리 DB에 적힌 두 신발의 표기 스택(18 힐 46/전족 36mm·플러스 45/35mm)만 놓고 보면 앞발까지 "18이 더 두껍다"로 읽히지만, 같은 랩 실측으로는 힐은 사실상 같고(42.5 대 42.3mm) 전족부는 플러스가 4.1mm 더 두껍습니다. |
| nike-vomero-18-vs-vomero-plus-max-cushion-2026 | 2026-09.ts:7802 | 전족부 6.4mm 두꺼운 폼(충격흡수 116→131), 에너지 리턴 10%p(57→67%), 그리고 드롭 4mm(14→10mm). | 전족부 4.1mm 두꺼운 폼(충격흡수 116→131), 에너지 리턴 10%p(57→67%), 그리고 드롭 약 4mm(13.9→9.6mm, 실측). |
| nike-vomero-18-vs-vomero-plus-max-cushion-2026 | 2026-09.ts:7812 | 보메로 플러스</a>(전족부 35mm·드롭 10mm) | 보메로 플러스</a>(전족부 실측 32.7mm·드롭 실측 9.6mm) |

### 살로몬 (13건)

| 글 slug | 파일:줄 | 이전 | 이후 |
|---|---|---|---|
| salomon-pulsar-vs-ultra-glide-vs-s-lab-trail-2026 | 2026-06.ts:42 | <td>optiFOAM2 (eTPU)</td><td>OptiFoam + RelieveSphere</td><td>optiFOAM+ PEBA 듀얼</td> | <td>Opti FOAM Evo</td><td>OptiFoam + RelieveSphere</td><td>Energy Foam+ 듀얼</td> |
| salomon-pulsar-vs-ultra-glide-vs-s-lab-trail-2026 | 2026-06.ts:57 | 대신 에너지 리턴이 낮아(47~51%) | 대신 에너지 리턴이 낮아(48~52%) |
| salomon-pulsar-vs-ultra-glide-vs-s-lab-trail-2026 | 2026-06.ts:57 | <strong>247g 초경량 + optiFOAM+ PEBA</strong> | <strong>247g 초경량 + Energy Foam+ 듀얼 폼</strong> |
| speedgoat-6-vs-pulsar-vs-metafuji-trail-2026 | 2026-07.ts:3392 | <td>optiFOAM2(eTPU)</td> | <td>Opti FOAM Evo</td> |
| speedgoat-6-vs-pulsar-vs-metafuji-trail-2026 | 2026-07.ts:3409 | 신형 <strong>optiFOAM2(eTPU)</strong> 미드솔이 | <strong>Opti FOAM Evo</strong> 미드솔이 |
| tecton-x-3-vs-ultrafly-vs-s-lab-pulsar-carbon-trail-2026 | 2026-07.ts:5650 | <td>optiFOAM+ 듀얼</td> | <td>Energy Foam+ 듀얼</td> |
| tecton-x-3-vs-ultrafly-vs-s-lab-pulsar-carbon-trail-2026 | 2026-07.ts:5652 | <td>47~57%(낮음)</td> | <td>48~58%(낮음)</td> |
| tecton-x-3-vs-ultrafly-vs-s-lab-pulsar-carbon-trail-2026 | 2026-07.ts:5673 | <strong>optiFOAM+ 듀얼 폼 + Matryx | <strong>Energy Foam+ 듀얼 폼 + Matryx |
| tecton-x-3-vs-ultrafly-vs-s-lab-pulsar-carbon-trail-2026 | 2026-07.ts:5674 | 에너지 리턴이 47~57%로 낮고 | 에너지 리턴이 48~58%로 낮고 |
| tecton-x-3-vs-ultrafly-vs-s-lab-pulsar-carbon-trail-2026 | 2026-07.ts:5699 | 247g 경량화·optiFOAM+ 폼</strong> | 247g 경량화·Energy Foam+ 폼</strong> |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5848 | <td>optiFOAM2 (eTPU)</td> | <td>Opti FOAM Evo</td> |
| speedgoat-6-vs-pulsar-vs-terrex-agravic-trail-2026 | 2026-07.ts:5866 | 신형 optiFOAM2(100% eTPU) 미드솔이 | Opti FOAM Evo 미드솔이 |
| trail-running-shoes-lineup-tier-guide-2026 | 2026-08.ts:1939 | 신형 optiFOAM2 미드솔로 | Opti FOAM Evo 미드솔로 |

> 범위 밖 브랜드 값을 함께 바꾼 곳(나이키 신발과 같은 문장·표라서 분리 불가):
> - `asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026`: 매직스피드 5 정가도 229,000→209,000원, km당 522원으로 맞춤(아식스 DB 현재값 209,000원·522원과 일치).
> - `brooks-cascadia-20-preview-2026` FAQ: 같은 문장 안의 울트라 글라이드 4 서술을 "표준 버전 71.4mm로 좁아 와이드 버전 권장"으로 맞춤(살로몬 DB 현재값).
> - `nike-alphafly-3-vs-…` tldr: SC 엘리트 v5 "발볼 넓어도 신는 유일한 슈퍼슈즈" 구절을 같은 li 안에서 "74.5mm에 와이드까지"로 바꿈(알파플라이 3 실측 75.3mm와 모순).

## 4. 보고만 하는 문장 (고치지 않음)

| 글 slug | 파일:줄 | 문장 요지 | 이유 |
|---|---|---|---|
| asics-magic-speed-5-vs-nike-zoom-fly-6-… | 2026-08.ts:4229 | title "같은 22.9만원, 55g이 갈린다" | title 금지. 현재 둘 다 20.9만원. 55g도 매직스피드 실측 201g 기준이면 47g |
| asics-magic-speed-5-vs-nike-zoom-fly-6-… | 2026-08.ts:4231 외 | 매직스피드 5 무게 193g·"55g 차" | 아식스 범위(DB 실측 201g·공식 196g) |
| asics-magic-speed-5-vs-nike-zoom-fly-6-… | 2026-08.ts:4377 | FAQ 질문 "에너지 리턴 64.6% vs 61%" | 힐끼리 비교라 수치는 맞음. 앞발은 줌 플라이 6(67%)이 더 높음 — 본문 4340은 고쳤음 |
| nike-rival-fly-4-review | 2026-09.ts:4597 | title "13만원대" | title 금지(현재 12만원대). 제목의 '후기'도 정책 확인 필요 |
| nike-rival-fly-4-review | 2026-09.ts:4638 | "세일가는 10만원대 초반까지 내려갑니다" | DB에 근거 없음 |
| nike-running-shoes-lineup-tier-guide-2026 | 2026-06.ts:3885 | 줌 플라이 6 "베이퍼 반값" | 표현(실제 68%). 의견성 라벨이라 둠 |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3263 | title "토박스 더 넓어진" | title 금지. DB와 정반대 |
| nike-acg-zegama-trail-review-2026 | 2026-07.ts:3316 | 제가마 2 "토박스 최대 97.5mm" | DB에는 전작 76.4mm만 있음(97.5mm 근거 없음) |
| nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-… | 2026-07.ts:1247·1249 | title "발볼이 가른다", description "발볼 넓은 한국 러너라면 선택이 분명해집니다" | title 금지 / 논지 문장(의견) |
| 〃 | 2026-07.ts:1291 | 알파플라이 "✅ 이런 분께 — 발볼이 좁거나 표준인 러너" | 추천 의견 |
| 〃 | 2026-07.ts:1281 | SC 엘리트 v5 "넓은 편(74.5mm)" | 뉴발란스 DB 판정은 standard(범위 밖) |
| 〃 | 2026-07.ts:1300·1301 | SC 엘리트 v5 "발볼 넓어도 신는 유일한 슈퍼슈즈", "거의 유일한 카본화" | 뉴발란스 범위. 알파플라이 3(75.3mm)이 더 넓어 '유일' 근거 약화 |
| new-balance-sc-elite-v5-review | 2026-06.ts:876·909 주변 | "정체성은 발볼 넓어도 신을 수 있는 카본 슈퍼슈즈" | 의견. 나이키 수치(67.8/68.4mm) 부분만 고침 |
| nike-vaporfly-4-vs-alphafly-3-comparison | 2026-05.ts:4331·4353 | 메타스피드 스카이+ "토박스 76mm로 발볼 넓은 한국 러너 유일 선택/유일 대안" | 아식스 범위. 와이드 SKU 기준이면 맞지만 토박스 폭 기준 '유일'은 알파플라이 3(75.3mm)과 충돌 |
| 2026-nike-alphafly-4-prototype | 2026-05.ts:7107 | "알파플라이 시리즈의 토박스는 통상 narrow~standard" | 시리즈 일반화. 알파플라이 3은 현재 wide |
| saucony-endorphin-elite-3-preview-2026 | 2026-06.ts:380 | "알파플라이 3(78.2%)" | 이번 변경분 아님. DB는 74.9%(기존 불일치) |
| marathon-club-runners-pick-running-shoes-2026 | 2026-06.ts:542 | "나이키(페가수스·베이퍼플라이)는 좁은 편" | 브랜드 일반화. 페가수스는 맞고 베이퍼플라이 4는 현재 표준 |
| mortons-neuroma-forefoot-pain-2026 | 2026-07.ts:4988 | "라스트가 좁은 레이싱화(알파플라이·베이퍼플라이·아디제로 류)" | 일반화. 알파플라이 3은 현재 wide |
| wide-feet-running-shoes-korea | 2025-01.ts:268~275 | 페가수스 41 "나이키 중에서는 넉넉한 편" | 브랜드 내 상대 비교(의견). 표 125행은 '좁음'으로 고침 |
| brooks-ghost-17-vs-nike-pegasus-42-daily-2026 | 2026-08.ts:3507·3529·3592 | "표준 폭은 페가수스 42가 더 넉넉"(72.3 대 69.6mm) | 실측끼리 상대 비교라 맞음. 다만 페가수스 42도 판정은 narrow |
| carbon-plate-running-shoes-lineup-tier-guide-2026 | 2026-09.ts:3254·3390 | "좁은 편 13종" | 지금 표의 '좁음' 행은 12개 — 다른 브랜드 행과 집계가 안 맞음(범위 밖). 넓음 0→1, 표준 17→16만 고침 |
| nike-vomero-18-vs-vomero-plus-max-cushion-2026 | 2026-09.ts:7680·7682·7721 | title·description·tldr "드롭 14 vs 10mm" | 실측 13.9/9.6mm를 반올림한 값이라 둠(title은 금지) |
| li-ning-red-hare-9-lineup-2026 / li-ning-red-hare-9-ultra-truth-2026 | 2026-06.ts:7999·9469 | 출처 표기 "WeeViews 등 해외 실측 리뷰, 국내 커뮤니티 후기(@runninglife_korea…)" | 이번 DB 변경과 무관. '후기' 표현은 정책상 검토 필요 |

## 5. 논지 영향

- **nike-acg-zegama-trail-review-2026**: 글 전체의 축이던 "발볼 넓은 한국 러너에게 드물게 우호적인 나이키 트레일화"가 DB(토박스 72.8mm, 전작보다 좁아짐)와 정반대. tldr·본문·추천·FAQ·description을 사실대로 고쳤고("중족부는 넓지만 토박스는 좁아져 시착 필요"), title만 옛 주장으로 남음. 무게 약점도 실측 306g로 완화됨(경쟁작 무게 비교 문장 삭제).
- **nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-…**: "알파플라이는 좁아서 발볼 넓으면 피하라"는 결론이 근거를 잃음 → "토박스는 넓은 편(75.3mm)이지만 와이드가 없고 사이즈가 작게 나와 시착 필요"로 고침. title·SC 엘리트 '유일' 서술은 남음.
- **new-balance-sc-elite-v5-review / new-balance-sc-elite-v6-preview-2026 / new-balance 계급도**: "베이퍼(67.8)·알파(68.4)보다 6~7mm 넓은 사실상 유일한 선택지" → 베이퍼 4 73.2mm·알파 3 75.3mm 기준으로 고치고 '유일'을 뺌. SC 엘리트 v5의 차별점이 '와이드 제공' 쪽으로 좁혀짐.
- **brooks-cascadia-20-preview-2026**: 제가마를 넓은 발볼 대안으로 권하던 FAQ·본문이 근거를 잃음 → 시착 권고와 울트라 글라이드 4 와이드 안내로 고침.
- **asics-magic-speed-5-vs-nike-zoom-fly-6-…**: "매직스피드 에너지 리턴이 더 높다" → 힐만 높고 앞발은 줌 플라이 6이 높음.
- **beginner-running-shoes-lineup-tier-guide-2026**: "3만원 아끼고 두 달이면 손해" → 4만원 차·월 약 9천원·다섯 달 안으로 약해짐(결론 "싼 신발 ≠ 싸게 달리는 신발"은 유지).
- **nike-vomero-18-vs-vomero-plus-max-cushion-2026**: "플러스가 힐 2.5mm·전족부 6.4mm 두껍다" → 힐은 같고 전족부 4.1mm. callout "공식 표기로 비교하면 반대로 읽힌다"는 전족부 기준으로 유지.
- **carbon-plate-running-shoes-lineup-tier-guide-2026**: "넓은 카본화 0종" → 1종(알파플라이 3, 와이드 없음).
- **nike-running-shoes-lineup-tier-guide-2026**: 발볼 표의 제가마를 '넓은 편'→'표준'으로, 알파플라이 3을 '넓은 편'으로 옮기고, 페가수스 42·보메로 플러스 표준 사이즈를 '좁음'에 추가.

## 6. 검증 명령·결과

- `curl -s -o /dev/null -w "%{http_code}\n" https://allrunabout.com` → 200
- `npm ci` → 성공
- `npm run validate` → 시작 기준선 에러 0·경고 9 / 수정 후 **에러 0·경고 9**(동일)
- `npm run build` → exit 0 (사이트맵 생성, "광고·GA 로딩 정상")
- 치환은 `python3 -I` 스크립트로 파일:줄마다 예상 횟수(전부 1)를 먼저 검사하고 전부 맞을 때만 적용(나이키 116/116, 살로몬 13/13). 검사에서 줄 번호 1건이 어긋나 중단했고, 고친 뒤 다시 적용함.
- push: `git push -u origin cloud/blog-sync-nike-lining-salomon` 성공
