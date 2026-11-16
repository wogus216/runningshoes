import type { Fabric } from '@/types/fabric';

// 소재 — 러닝복을 실제로 이루는 섬유
// 근거: docs/references/apparel-fabric-provenance.md (A-0 · A-0-1 · D-3 · D-4 · E-2)

export const materialFabrics: Fabric[] = [
  {
  "id": "polyester",
  "slug": "polyester",
  "type": "material",
  "name": "폴리에스터",
  "nameEn": "Polyester",
  "summary": "과거 조성 표본 273개 중 폴리에스터가50%를 넘는 메인 원단은223개. 건조와 냄새는 구조·세탁 조건까지 나누어 봅니다.",
  "intro": "폴리에스터라는 조성명만으로 건조속도·냄새·통기성을 한 번에 정할 수는 없습니다. 보존된 상품 조성을 다시 계산한 결과와 실제 연구의 시험 조건을 구분했습니다. 수분율 하나가 모든 착용 성능의 원인이라는 기존 설명은 수정했습니다.",
  "claims": [
    {
      "text": "2026년9월 보존한273개 상품 조성에서 메인 원단의 폴리에스터가50%를 넘는 항목은223개(전체 기록의81.7%)였습니다. 안감만 기록된3개를 메인 원단으로 세지 않았습니다.",
      "grade": "S",
      "source": " 산초 자체 조사 — 2026-09-04 보존 상품 조성 273행, 2026-11-10 재계산, 메인 원단 50% 초과 기준",
      "caveat": "데카트론 코리아206·Nike 미국67개의 과거 표본입니다.3개는 안감 정보만 남아 메인 원단을 확정하지 못했고3개는50%초과 소재가 없습니다. 현재 카탈로그·국내 시장 점유율을 뜻하지 않습니다."
    },
    {
      "text": "2020년 논문은 면·폴리에스터 니트에 옥탄산·2-노네날·도데칸을 묻히고1·5·10회 오염/세탁을 반복했습니다. 이 조건에서는 면에서 냄새물질 제거가 더 잘됐고, 폴리에스터의 불완전 제거가 축적에 기여했습니다.",
      "grade": "A",
      "source": "Abdul-Bari et al., Textile Research Journal 2020 — 공개 초록",
      "sourceUrl": "https://doi.org/10.1177/0040517520914411",
      "caveat": "실제 땀·모든 세제·모든 러닝복의 결과는 아닙니다. 유료 본문의 세부 제거율은 이번 확인 범위에서 제외했습니다."
    },
    {
      "text": "2014년 연구는26명의 스피닝 후 티셔츠를28시간 배양해 평가했습니다. 폴리에스터가 면보다 강하고 덜 쾌적한 냄새로 평가됐고 미생물 군집도 달랐습니다.",
      "grade": "A",
      "source": "Callewaert et al., Applied and Environmental Microbiology 2014",
      "sourceUrl": "https://doi.org/10.1128/AEM.01422-14",
      "caveat": "한 운동·배양 조건의 비교입니다. 냄새 원인을 균의 종류 하나나 수분율 하나로만 환원하지 않습니다."
    }
  ],
  "unknowns": [
    "현재 판매 중인 모든 러닝복의 혼용률·건조속도는 확인하지 않았습니다.",
    "0.3% 수분율·세탁 제거율의 세부 원표를 이번에 재확인하지 못해 고정 물성·제품 성능으로 남기지 않았습니다."
  ],
  "related": [
    "nylon",
    "merino-wool",
    "elastane"
  ],
  "relatedPosts": [
    "summer-breathable-running-shoes-2026"
  ],
  "updatedAt": "2026-11-10",
  "keywords": [
    "폴리에스터",
    "러닝복 소재",
    "기능성 티셔츠 원단",
    "러닝복 냄새",
    "흡한속건"
  ],
  "measurements": [
    {
      "label": "과거 표본",
      "value": "273개",
      "note": "2026-09-04 수집·11/10 재계산"
    },
    {
      "label": "폴리에스터50%초과",
      "value": "223개",
      "note": "전체 보존 기록 대비81.7%·시장 점유율 아님"
    }
  ],
  "misconceptions": [
    {
      "myth": "폴리에스터 함량이 같으면 건조와 냄새도 같다.",
      "reality": "섬유 조성 외에 원단 구조·가공·오염물질·세탁 조건을 함께 확인해야 합니다. 특정 시료의 결과를 모든 제품의 수치로 옮기지 않습니다.",
      "source": "Abdul-Bari et al.2020 및 시험 범위 해석",
      "sourceUrl": "https://doi.org/10.1177/0040517520914411"
    }
  ]
},

  {
  "id": "nylon",
  "slug": "nylon",
  "type": "material",
  "name": "나일론",
  "nameEn": "Nylon / Polyamide",
  "summary": "폴리아미드계 섬유의 조성명입니다. 과거 표본 재계산과 Iso-Chill의 별도 가공 설명을 구분했습니다.",
  "intro": "나일론이 들어갔다는 사실과 시원함·건조속도는 서로 다른 정보입니다. 같은 표본도 메인 원단과 안감을 섞으면 집계가 달라집니다. 기존43개 주소재 표기는 보존 조성의 층을 다시 구분한 값으로 바로잡았습니다.",
  "claims": [
    {
      "text": "CIRFS는 폴리아미드 섬유를 반복되는 아미드 결합을 가진 계열로 설명하고 주요 종류로 polyamide6와6.6을 구분합니다. 나일론이라는 판매 조성명만으로 정확 종류와 원단 구조를 알 수는 없습니다.",
      "grade": "B",
      "source": "CIRFS 공식 Polyamide 설명",
      "sourceUrl": "https://www.cirfs.org/man-made-fibers/Fibre-range/polyamide"
    },
    {
      "text": "보존273행에서 메인 원단의 나일론·폴리아미드가50%를 넘는 항목은41개였습니다. 브라의 폼 부분을 메인 원단으로 세거나 안감만 있는 기록을 본체로 간주하지 않았습니다.",
      "grade": "S",
      "source": " 산초 자체 조사 — 2026-09-04 보존 상품 조성 273행, 2026-11-10 재계산, 메인 원단 50% 초과 기준",
      "caveat": "데카트론 코리아206·Nike 미국67개의 과거 표본입니다.3개는 안감 정보만 남아 메인 원단을 확정하지 못했고3개는50%초과 소재가 없습니다. 현재 카탈로그·국내 시장 점유율을 뜻하지 않습니다."
    },
    {
      "text": "2020년 언더아머 발표는 Iso-Chill을 리본 모양 나일론 섬유와 원단의 이산화티타늄 처리로 설명합니다. TiO₂가 나일론 원료에 반드시 혼합됐다는 뜻으로 바꾸지 않습니다.",
      "grade": "B",
      "source": "Under Armour Iso-Chill 공식 발표2020-01-14",
      "sourceUrl": "https://about.underarmour.com/en/stories/2020/01/you-have-to-feel-it-to-believe-it.html",
      "caveat": "제조사의7~12% 문구는 VO₂max 수치 상승이 아니라 도달 시간 관련 자체 주장입니다. 이번에는 표본·시험법을 확인하지 못해 성능 비교값으로 쓰지 않습니다."
    }
  ],
  "unknowns": [
    "과거 표본은 현재 국내 러닝복 시장을 대표하지 않습니다.",
    "이름만으로 실제 상품의 나일론 종류·내마모·냄새·건조속도를 정하지 않습니다."
  ],
  "related": [
    "polyester",
    "elastane"
  ],
  "relatedPosts": [
    "running-socks-guide-fiber-composition-2026"
  ],
  "updatedAt": "2026-11-10",
  "keywords": [
    "나일론",
    "폴리아미드",
    "러닝 타이츠 소재",
    "러닝 레깅스 원단"
  ],
  "measurements": [
    {
      "label": "과거 메인 원단50%초과",
      "value": "41 / 273개",
      "note": "2026-09-04 보존·11/10 재계산, 안감만 기록된3개 미확인"
    }
  ]
},

  {
  "id": "elastane",
  "slug": "elastane",
  "type": "material",
  "name": "엘라스테인 (스판덱스·폴리우레탄)",
  "nameEn": "Elastane / Spandex",
  "summary": "신축 회복을 위한 폴리우레탄계 섬유입니다. 함량만으로 핏·압박·세탁 수명을 정하지 않습니다.",
  "intro": "엘라스테인·스판덱스의 핵심은 신축 후 회복하는 섬유 특성입니다. 모든 신축성 원단이 스판덱스를 쓰는 것은 아니며, 의류 수명을 열분해 온도로 설명할 수도 없습니다.",
  "claims": [
    {
      "text": "CIRFS가 소개한 BISFA 정의에서 엘라스테인은 질량 기준85%이상의 분절 폴리우레탄으로 이뤄지고 늘어난 뒤 빠르게 원래 길이에 가깝게 회복하는 섬유입니다. 이85%는 섬유 자체의 정의이며 옷 전체의 혼용률이 아닙니다.",
      "grade": "B",
      "source": "CIRFS 공식 Elastane 설명",
      "sourceUrl": "https://www.cirfs.org/man-made-fibers/Fibre-range/elastane"
    },
    {
      "text": "언더아머는2026년4월 HeatGear Elite에 NEOLAST를 적용해2026년부터 출시할 계획이며 엘라스테인의 대안이라고 발표했습니다. 신축성 의류가 모두 스판덱스를 쓴다는 설명과는 구분해야 합니다.",
      "grade": "B",
      "source": "Under Armour 공식 HeatGear Elite·NEOLAST 발표2026-04-20",
      "sourceUrl": "https://about.underarmour.com/en/stories/2026/04/the-future-of-stretch.html",
      "caveat": "내구성·환경상 이점은 제조사의 설명입니다. 발표문만으로 국내 실제 출시·판매나 모든 제품의 수명·재활용 완료를 확인한 것은 아닙니다."
    }
  ],
  "unknowns": [
    "제품별 세탁 횟수·온도에 따른 신축 회복 손실을 이번에 확인하지 못했습니다.",
    "벌크 수지의 열분해 온도를 실제 의류의 안전 세탁 온도나 늘어나는 시점으로 바꾸지 않습니다.",
    "보존 표본의 일부 조성은 안감·폼을 구분해야 하므로 기존 카테고리별 신축사 비율은 재확인 없이 재사용하지 않았습니다."
  ],
  "related": [
    "polyester",
    "nylon"
  ],
  "relatedPosts": [
    "running-socks-guide-fiber-composition-2026"
  ],
  "updatedAt": "2026-11-13",
  "keywords": [
    "엘라스테인",
    "스판덱스",
    "폴리우레탄",
    "러닝 타이츠 수명",
    "레깅스 늘어남"
  ],
  "misconceptions": [
    {
      "myth": "스판덱스는 특정 온도에서 한 번에 분해되므로 그보다 낮으면 옷이 손상되지 않는다.",
      "reality": "열분해·가수분해·피로·가공 변화는 같은 현상이 아닙니다. 섬유 정의 자료는 의류의 안전 세탁 온도를 정하지 않으므로 실제 제품 관리 라벨을 따르세요.",
      "source": "CIRFS 섬유 정의의 적용 범위",
      "sourceUrl": "https://www.cirfs.org/man-made-fibers/Fibre-range/elastane"
    }
  ]
},

  {
  "id": "merino-wool",
  "slug": "merino-wool",
  "type": "material",
  "name": "메리노 울",
  "nameEn": "Merino Wool",
  "summary": "흡습발열 연구는 있지만 시험 조건·울 종류·지원 관계를 함께 읽어야 합니다.",
  "intro": "울의 수분 흡수에 따른 발열과 실제 러닝 중 보온은 구분해서 봅니다.2023년 연구는 울 업계의 연구비·게재료 지원을,2026년 연구는 외부 연구비 없음을 공시했습니다. 두 연구 모두 Australian Wool Innovation이 실험 원단을 제공했다고 명시하므로 연구비와 시료 제공을 따로 봐야 합니다.",
  "claims": [
    {
      "text": "2023년 연구는 습도 변화에 따른 원단의 열 변화를 비교했습니다. 울·비스코스의 열 방출이 더 컸지만 폴리에스터에서도 작은 변화가 관찰돼 폴리에스터에는 발열이 전혀 없다는 기존 단정은 수정했습니다.",
      "grade": "A",
      "source": "Abedin & DenHartog, Fibers2023,11(5):47 — 본문·지원 명세",
      "sourceUrl": "https://www.mdpi.com/2079-6439/11/5/47",
      "caveat": "Australian Wool Innovation의 연구비·게재료 지원과 실험 원단 제공을 명시합니다. 저자들은 지원기관이 연구 설계·분석·원고 작성·발행 결정에 관여하지 않았다고 공시했습니다. 열판 결과를 사람 피부온도 변화와 동일시하지 않습니다."
    },
    {
      "text": "2026년 연구는23℃ 등온 미세열량계에서 메리노 울·면·비스코스·폴리에스터 원단을 비교했습니다. 울의 습윤열이 가장 컸고 폴리에스터의 반응은 미미했습니다.",
      "grade": "A",
      "source": "Abedin & DenHartog, Fibers2026,14(1):15 — 본문·지원 명세",
      "sourceUrl": "https://www.mdpi.com/2079-6439/14/1/15",
      "caveat": "외부 연구비 없음·이해충돌 없음으로 공시했지만 실험 원단은 Australian Wool Innovation이 제공했다고 명시합니다. 원단 실험이며 모든 겨울 러닝복의 체감·기록 시험은 아닙니다."
    },
    {
      "text": "ZQ 공식 문서는 동물복지·환경·사회적 책임 등 생산 관리 기준을 설명합니다. 인증 이름만으로 특정 셔츠의 보온·건조속도나 냄새 성능을 정할 수 없습니다.",
      "grade": "B",
      "source": "Zentera Wool Company 공식 ZQ 기준 안내",
      "sourceUrl": "https://www.zenterawool.com/about/zq-standard-documents-updates"
    }
  ],
  "unknowns": [
    "2024년 인체 착용 연구는 이번에 공개 초록까지 확인했습니다. 유료·차단된 전문의 세부 통계와 지원 관계는 재검증하지 못해 본문 수치로 재사용하지 않았습니다.",
    "울 함량·두께·바람·젖음 상태가 다른 제품을 같은 보온 효과로 비교할 근거는 없습니다."
  ],
  "related": [
    "polyester"
  ],
  "relatedPosts": [
    "rainy-season-running-guide-korea",
    "running-foot-care-blisters-toenails-2026",
    "running-socks-guide-fiber-composition-2026"
  ],
  "updatedAt": "2026-11-13",
  "keywords": [
    "메리노 울",
    "겨울 러닝복",
    "울 베이스레이어",
    "흡습발열"
  ],
  "misconceptions": [
    {
      "myth": "ZQ 인증이면 원단 보온 성능까지 인증됐다.",
      "reality": "ZQ가 설명하는 생산 관리와 완성복의 열·수분 성능 시험은 다른 범위입니다. 제품별 시험 조건을 따로 확인해야 합니다.",
      "source": "ZQ 공식 기준 안내",
      "sourceUrl": "https://www.zenterawool.com/about/zq-standard-documents-updates"
    }
  ]
},
];
