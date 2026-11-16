import type { Fabric } from '@/types/fabric';

// 브랜드 원단 상표 — 이름이 실제로 무엇을 뜻하는가
// 근거: docs/references/apparel-fabric-provenance.md (A-1 · A-2 · A-3 · A-4 · D-7-10)
//
// 이 유형의 핵심 발견: 브랜드 상표명은 단일 소재명이 아니라 서로 다른 조성에 붙는 기술·마케팅 라벨이다.
// 따라서 "Dri-FIT = 폴리에스터 XX%" 같은 단일 답은 존재하지 않는다.

export const brandmarkFabrics: Fabric[] = [
  {
  "id": "dri-fit",
  "slug": "dri-fit",
  "type": "brandmark",
  "name": "Dri-FIT (나이키)",
  "nameEn": "Nike Dri-FIT",
  "summary": "땀 이동을 돕는 나이키 기술명입니다. Dri-FIT·ADV 이름과 섬유 혼용률은 별도로 확인하세요.",
  "intro": "공식 제품에서 확인한 두 상의만 보아도 혼용률은 다릅니다. 기술명을 폴리에스터100%라는 조성명으로 바꾸거나 같은 건조속도·증발저항을 뜻한다고 설명하지 않습니다.",
  "claims": [
    {
      "text": "스위프트 심리스 여성 상의IM7538-010은 Dri-FIT의 땀 이동·빠른 증발을 제조사 설계 목표로 설명하며 조성은 폴리에스터13%·나일론83%·스판덱스4%로 명시합니다.",
      "grade": "B",
      "source": "Nike 공식 Swift IM7538-010 제품 원문",
      "sourceUrl": "https://www.nike.com/t/swift-womens-dri-fit-seamless-short-sleeve-running-top-u8gpiFoq/IM7538-010",
      "caveat": "정확 모델의 원문에 한정합니다. 현재 한국 판매 여부·핏·재고를 확인한 것은 아닙니다."
    },
    {
      "text": "에어로스위프트 여성 ADV 싱글렛IF1252-010은100% 재생 폴리에스터 섬유와 천공 부위를 설명합니다. 나일론 혼방 스위프트와 같은 섬유 배합이 아닙니다.",
      "grade": "B",
      "source": "Nike 공식 AeroSwift IF1252-010 제품 원문",
      "sourceUrl": "https://www.nike.com/t/aeroswift-womens-dri-fit-adv-running-singlet-XAfqLjjx/IF1252-010"
    },
    {
      "text": "땀을 이동시켜 증발을 돕는다는 문구는 제품의 기능 설명입니다. 해당 두 제품 원문에서 동일한 시험 조건의 건조속도·Ret 실측값은 확인하지 못했습니다.",
      "grade": "C",
      "source": "Nike의 정확 두 제품 기능 설명 대조",
      "sourceUrl": "https://www.nike.com/t/swift-womens-dri-fit-seamless-short-sleeve-running-top-u8gpiFoq/IM7538-010"
    }
  ],
  "unknowns": [
    "Dri-FIT·ADV 전체의 단일 혼용률·건조속도 기준은 이번 정확 제품 원문으로 확정하지 않았습니다.",
    "예전67벌의 재생 폴리에스터 비중은 CSV만으로 해당 표시를 전부 재현할 수 없어 현재 통계처럼 남기지 않았습니다."
  ],
  "related": [
    "aeroready",
    "polyester"
  ],
  "updatedAt": "2026-11-10",
  "keywords": [
    "드라이핏",
    "Dri-FIT",
    "나이키 원단",
    "나이키 러닝복 소재"
  ],
  "measurements": [
    {
      "label": "Swift IM7538-010",
      "value": "13%폴리·83%나일론·4%스판덱스",
      "note": "정확 제품 조성"
    },
    {
      "label": "AeroSwift IF1252-010",
      "value": "100% 재생 폴리에스터",
      "note": "정확 제품 설명"
    }
  ],
  "misconceptions": [
    {
      "myth": "Dri-FIT는 폴리에스터100%라는 뜻이다.",
      "reality": "스위프트의 나일론 혼방과 에어로스위프트의 폴리에스터 제품이 모두 관련 기술명을 사용합니다. 실제 혼용률은 정확 모델 라벨로 확인하세요.",
      "source": "Nike 공식 정확 제품 원문 대조",
      "sourceUrl": "https://www.nike.com/t/swift-womens-dri-fit-seamless-short-sleeve-running-top-u8gpiFoq/IM7538-010"
    }
  ]
},

  {
  "id": "aeroready",
  "slug": "aeroready",
  "type": "brandmark",
  "name": "AEROREADY (아디다스)",
  "nameEn": "adidas AEROREADY",
  "summary": "아디다스가 수분 관리를 목표로 설명하는 기술명입니다. 공식 설명이 없다는 기존 단정은 수정했습니다.",
  "intro": "미국 공식 AEROREADY 안내에는 땀을 피부에서 이동시켜 건조함을 돕는다는 설명이 있습니다. 특정 한국 상품 목록에서 정의를 찾지 못한 경험을 브랜드 전체에 설명이 없다는 결론으로 확대하지 않습니다.",
  "claims": [
    {
      "text": "아디다스 미국 공식 안내는 AEROREADY를 운동 의류의 수분 관리 기술로 설명합니다. 따라서 정의가 없고 상품 필터일 뿐이라는 기존 설명은 범위가 지나쳤습니다.",
      "grade": "C",
      "source": "adidas US 공식 AEROREADY 안내",
      "sourceUrl": "https://www.adidas.com/us/aeroready"
    },
    {
      "text": "같은 공식 안내가 여러 의류 종류를 함께 다루지만 모든 AEROREADY 제품의 동일 섬유 배합이나 한 개의 건조속도 시험 결과를 제시하는 것은 아닙니다.",
      "grade": "C",
      "source": "adidas US 공식 안내의 확인 범위",
      "sourceUrl": "https://www.adidas.com/us/aeroready",
      "caveat": "읽은 페이지에 시험 수치가 없다는 사실은 모든 제품·모든 지역에 성적서가 없다는 증명이 아닙니다."
    }
  ],
  "unknowns": [
    "한국IN1172 제품은 공식 검색에 보존된 조성 설명과 이번 직접 열린 페이지의 본문 표시 범위가 달랐습니다. 현재 조성·재생 비율은 실물 라벨 또는 정확 상품 고시로 확인해야 합니다.",
    "전체 적용 제품의 독립 건조·흡상·투습 시험값은 확인하지 못했습니다."
  ],
  "related": [
    "dri-fit",
    "solarflect",
    "polyester"
  ],
  "updatedAt": "2026-11-10",
  "keywords": [
    "에어로레디",
    "AEROREADY",
    "아디다스 원단",
    "아디다스 러닝복"
  ],
  "misconceptions": [
    {
      "myth": "AEROREADY라는 상표만 알면 다른 원단보다 얼마나 빨리 마르는지 알 수 있다.",
      "reality": "제조사의 수분 관리 설명과 동일 조건의 정량 비교는 별개입니다. 시험법·시료·조건을 함께 확인해야 합니다.",
      "source": "adidas 공식 안내의 범위",
      "sourceUrl": "https://www.adidas.com/us/aeroready"
    }
  ]
},

  {
  "id": "solarflect",
  "slug": "solarflect",
  "type": "brandmark",
  "name": "솔라플렉트·플랫드라이·에어도트 (코오롱스포츠)",
  "nameEn": "KOLON SPORT SolarFlect",
  "summary": "솔라플렉트는 적외선 반사·산란, 플랫드라이는 땀 분산, 에어도트는 미세 통기 구조로 설명하는 서로 다른 브랜드 기술입니다.",
  "intro": "코오롱FnC의2025년 발표는 솔라플렉트·플랫드라이·에어도트를 각각 다른 기능과 공법으로 설명합니다. 제조사의 설계 설명과 모든 러너에게 나타나는 체감·체온 변화는 구분해서 읽어야 합니다.",
  "claims": [
    {
      "text": "코오롱FnC는2025년5월7일 솔라플렉트를 원단 표면에 천연 무기물의 얇은 막을 형성해 적외선을 반사·산란시키는 기술로 설명했습니다.",
      "grade": "C",
      "source": "코오롱FnC 공식 보도자료2025-05-07",
      "sourceUrl": "https://www.kolonfnc.com/press/1760",
      "caveat": "제조사의 공법·설계 설명입니다. 업계 최초·피부 보호·체온 감소량은 별도 검증 없이 확정하지 않았습니다."
    },
    {
      "text": "공식 콘텐츠에는 처리·미처리 소재의 열화상 비교가 있습니다. 이번에 완전한 시험법·표본·반복수·착용자 결과를 확인하지 못해 모든 러너가 몇 도 시원해진다는 수치로 사용하지 않습니다.",
      "grade": "C",
      "source": "코오롱스포츠 공식 솔라플렉트 설명",
      "sourceUrl": "https://www.kolonsport.com/Content/240928"
    },
    {
      "text": "플랫드라이는 땀을 원단 표면에 빠르게 분산시켜 건조를 돕는 기능으로 설명합니다. 솔라플렉트의 적외선 반사 공법과 같은 뜻이 아니며, 주로 반팔 티셔츠에 적용했다고 발표했습니다.",
      "grade": "C",
      "source": "코오롱FnC 공식 보도자료2025-05-07 — 플랫드라이 설명",
      "sourceUrl": "https://www.kolonfnc.com/press/1760",
      "caveat": "제조사의 기능 설명입니다. 비교 제품·시험 조건·건조 시간의 정량 결과는 이 발표에서 확인하지 못했습니다."
    },
    {
      "text": "에어도트는 격자로 배치한 용융사를 녹여 공간을 확보하고 원단의 미세 통기 구조를 만드는 공법이라고 설명합니다. 피부 접촉 면적·공기 흐름·착용감에 대한 설명은 제조사의 주장입니다.",
      "grade": "C",
      "source": "코오롱FnC 공식 보도자료2025-05-07 — 에어도트 설명",
      "sourceUrl": "https://www.kolonfnc.com/press/1760",
      "caveat": "원단 공기투과도나 실제 러너의 피부·심부 체온 시험 수치로 바꾸지 않습니다."
    }
  ],
  "unknowns": [
    "열화상 이미지의 표면 온도를 실제 러너의 피부·심부 체온이나 열질환 예방 효과로 바꾸지 않습니다.",
    "다른 국내 브랜드의 자체 원단 상표가 없다는 기존 광범위한 부재 주장은 이번에 입증하지 못해 제외했습니다."
  ],
  "related": [
    "aeroready",
    "polyester"
  ],
  "updatedAt": "2026-11-13",
  "keywords": [
    "솔라플렉트",
    "코오롱스포츠 원단",
    "쿨론",
    "국산 기능성 원단"
  ]
},

  {
  "id": "gore-tex-infinium",
  "slug": "gore-tex-infinium",
  "type": "brandmark",
  "name": "GORE-TEX INFINIUM / WINDSTOPPER",
  "nameEn": "GORE-TEX INFINIUM (WINDSTOPPER)",
  "summary": "WINDSTOPPER의 방풍·발수와 방수 보증을 구분하세요. 구INFINIUM 제품도 정확 이름·라벨을 봐야 합니다.",
  "intro": "Gore는 과거 INFINIUM WINDSTOPPER 의류·장갑의 명칭 변경과 검은색·흰색 다이아몬드의 차이를 설명합니다. 모든 INFINIUM 역사 제품이 하나의 방풍 원단이라는 뜻으로 넓히지 않았습니다.",
  "claims": [
    {
      "text": "공식 FAQ는 검은 다이아몬드와 GUARANTEED TO KEEP YOU DRY 표기가 있는 GORE-TEX 제품의 방수 보증을 설명하고 흰 다이아몬드 WINDSTOPPER는 방풍·투습 제품으로 구분합니다.",
      "grade": "B",
      "source": "Gore 공식 제품 FAQ",
      "sourceUrl": "https://www.gore-tex.com/support/frequently-asked-questions"
    },
    {
      "text": "공식 명칭 변경 안내는 WINDSTOPPER를 비방수 제품으로 설명하면서 발수 기능도 함께 명시합니다. 발수와 방수 보증을 같은 뜻으로 읽지 않아야 합니다.",
      "grade": "B",
      "source": "Gore 공식 WINDSTOPPER·구INFINIUM 안내",
      "sourceUrl": "https://www.gore-tex.com/blog/what-are-windstopper-products-by-gore-tex-labs-formerly-gore-tex-infinium"
    }
  ],
  "unknowns": [
    "검은색·흰색 라벨 구분만으로 개별 제품의 보온·통기 수치를 정할 수 없습니다.",
    "제품의 손상·사용·관리 상태와 개별 보증 적용 여부는 별도 확인이 필요합니다."
  ],
  "related": [
    "ret-iso-11092",
    "kca-running-jacket-2025"
  ],
  "relatedPosts": [
    "rainy-season-running-guide-korea",
    "wet-running-shoes-drying-care-guide-korea"
  ],
  "updatedAt": "2026-11-10",
  "keywords": [
    "고어텍스",
    "GORE-TEX INFINIUM",
    "윈드스토퍼",
    "러닝 재킷 방수",
    "방풍 재킷"
  ],
  "misconceptions": [
    {
      "myth": "GORE-TEX 글자만 보이면 모든 제품이 같은 방수 제품이다.",
      "reality": "공식 FAQ의 정확 제품군·보증 문구·라벨을 확인하세요. WINDSTOPPER의 방풍·발수 설명은 방수 보증과 다릅니다.",
      "source": "Gore 공식 FAQ",
      "sourceUrl": "https://www.gore-tex.com/support/frequently-asked-questions"
    }
  ]
},
  {
  "id": "coolmax",
  "slug": "coolmax",
  "type": "brandmark",
  "name": "COOLMAX (쿨맥스)",
  "nameEn": "COOLMAX",
  "summary": "섬유의 형상과 수분 이동을 설명하는 상표입니다. 완성복의 조성·시험 결과는 따로 봐야 합니다.",
  "intro": "공식 설명은 섬유 표면 홈을 따라 수분을 이동시키고 펼쳐 증발을 돕는 설계를 제시합니다. COOLMAX라는 이름이 붙었다고 옷 전체가 같은 원료·혼용률·건조속도를 가진 것은 아닙니다.",
  "claims": [
    {
      "text": "COOLMAX 공식 설명은 대개 폴리에스터 또는 다른 합성섬유로 만든 섬유의 표면 홈을 통해 땀의 이동·확산을 돕는다고 안내합니다. 원료와 구조의 제조사 설명입니다.",
      "grade": "C",
      "source": "COOLMAX 공식 섬유 설명",
      "sourceUrl": "https://www.coolmax.com/en/what-is-coolmax-fiber"
    },
    {
      "text": "공식 페이지는 해당 상표를 쓰는 원단이 성능 기준의 시험·인증을 거친다고 명시합니다. 읽은 안내에서 시험법·합격선·각 완성복 결과는 확인하지 못했습니다.",
      "grade": "B",
      "source": "COOLMAX 공식 시험·인증 안내",
      "sourceUrl": "https://www.coolmax.com/en/what-is-coolmax-fiber",
      "caveat": "인증 안내의 존재와 독립기관이 모든 의류의 우월성을 검증했다는 주장은 다릅니다."
    }
  ],
  "unknowns": [
    "예전 LYCRA FAQ는 이번 접속에서403으로 열리지 않았습니다. 그 페이지를 다시 읽었다고 표시하지 않았습니다.",
    "같은 상표의 모든 제품에 적용할 정확 섬유 배합·세탁 후 성능·건조 시간은 미확인입니다."
  ],
  "related": [
    "polyester",
    "wicking-ommc",
    "merino-wool",
    "dri-fit"
  ],
  "relatedPosts": [
    "running-foot-care-blisters-toenails-2026",
    "summer-breathable-running-shoes-2026",
    "running-socks-guide-fiber-composition-2026"
  ],
  "updatedAt": "2026-11-10",
  "keywords": [
    "쿨맥스",
    "COOLMAX",
    "쿨맥스 양말",
    "러닝 양말 소재",
    "흡한속건 소재"
  ],
  "misconceptions": [
    {
      "myth": "COOLMAX는 폴리에스터100%의 다른 이름이다.",
      "reality": "공식 안내도 다른 합성섬유 가능성을 열어두고 있습니다. 실제 옷의 혼용률과 원단 구조는 정확 상품 라벨로 확인하세요.",
      "source": "COOLMAX 공식 설명",
      "sourceUrl": "https://www.coolmax.com/en/what-is-coolmax-fiber"
    }
  ]
},
];
