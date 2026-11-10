import type { Brand } from '@/types/brand';

export const newBalanceBrand: Brand = {
  "id": "new-balance",
  "name": "New Balance",
  "nameKo": "뉴발란스",
  "tagline": "Fearlessly Independent Since 1906",
  "description": "1906년 보스턴에서 시작한 미국의 러닝 전통 브랜드. 기술의 화학적 조성보다 \"러너가 느끼는 경험(Feel)\"을 강조하며, Infinion·FuelCell·Fresh Foam X 등 용도별 폼 라인업과 2E/4E 와이드 옵션이 풍부한 것이 특징입니다.",
  "founded": 1906,
  "headquarters": "미국 보스턴",
  "website": "https://www.nbkorea.com",
  "technologies": [
    {
      "id": "infinion",
      "name": "Infinion",
      "nameKo": "인피니온",
      "category": "midsole",
      "description": "1080v15에서 확인한 폼 명칭입니다. 전작 1080v14의 Fresh Foam X와 구분하며, 원료·수명 수치를 이름만으로 추정하지 않습니다.",
      "benefits": [
        "1080v15: Infinion, 1080v14: Fresh Foam X",
        "확인한 원문에는 기본 고분자·혼합비 미기재",
        "수백 km 동안 동일하다는 수명 보장 제외"
      ],
      "scienceExplanation": "1080v15의 정확 제품 안내는 Infinion 미드솔과 perforated mesh 어퍼를 명시합니다. 뉴발란스는 지속적인 쿠셔닝 경험을 목표로 설명하지만, 이를 사이트의 독립 수명 시험이나 반발률 개선 수치로 제시하지 않습니다. 이전 Fresh Foam X와 같은 소재라고 적거나 확인하지 않은 PEBA·TPEE·EVA 원료를 채워 넣지 않았습니다. 정확한 출시 시점 확인 없이 2025년 데뷔라고 적던 표기도 제외했습니다.",
      "usedInShoes": [
        "new-balance-1080-v15"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대·일반형/방수형의 기술명과 확인된 적용 예시. 제조사 설계 의도와 소재 표기는 임상 효과·기록·주행 수명·접지 안전 보장이 아닙니다.",
        "sources": [
          {
            "title": "New Balance 공식 — 1080v15",
            "url": "https://www.newbalance.com/pd/1080v15/W1080815-2A-09.html",
            "scope": "Infinion·perforated mesh · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          },
          {
            "title": "New Balance 공식 — 1080v14",
            "url": "https://www.newbalance.com/pd/fresh-foam-x-1080v14/M1080V14-47512-PMG-NA-PR.html",
            "scope": "전작의 Fresh Foam X와 구분 · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          }
        ]
      }
    },
    {
      "id": "fuelcell",
      "name": "FuelCell",
      "nameKo": "퓨얼셀",
      "category": "midsole",
      "description": "여러 모델에 쓰이는 폼 계열명입니다. 레벨 v5의 PEBA/EVA 혼합, SC 엘리트 v5의 폼 100% PEBA, SC 트레이너 v3의 미공개 원료를 구분합니다.",
      "benefits": [
        "레벨 v5: PEBA/EVA 혼합, 비율 미공개",
        "SC 엘리트 v5: 제조사 폼 100% PEBA 표기",
        "SC 트레이너 v3: FuelCell 확인, 기본 원료 미확인"
      ],
      "scienceExplanation": "레벨 v5 공식 제품 본문은 PEBA와 EVA의 혼합을 명시하지만 배합비는 밝히지 않습니다. SC 엘리트 v5는 FuelCell 폼을 100% PEBA로 명시하는데, 신발 전체가 PEBA이거나 에너지 리턴이 100%라는 뜻은 아닙니다. SC 트레이너 v3의 확인 원문은 FuelCell과 약 3% 바이오 기반 함량을 명시할 뿐 PEBA/EVA 배합비를 확정할 근거는 아닙니다. 원료 비율만으로 성능 등급·가성비·수명을 서열화하지 않습니다. 레벨과 SC 엘리트의 FantomFit 어퍼도 폼의 구성과 별개입니다.",
      "usedInShoes": [
        "new-balance-rebel-v5",
        "new-balance-sc-elite-v5",
        "new-balance-sc-trainer-v3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대·일반형/방수형의 기술명과 확인된 적용 예시. 제조사 설계 의도와 소재 표기는 임상 효과·기록·주행 수명·접지 안전 보장이 아닙니다.",
        "sources": [
          {
            "title": "New Balance 공식 — Rebel v5",
            "url": "https://www.newbalance.com/pd/fuelcell-rebel-v5/MFCX3B5-D-14.html",
            "scope": "PEBA/EVA blend·FantomFit · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          },
          {
            "title": "New Balance 공식 — SC Elite v5",
            "url": "https://www.newbalance.com/pd/fuelcell-supercomp-elite-v5/MRCELV5-50683-PR.html?dwvar_MRCELV5-50683-PR_style=MRCELLR5",
            "scope": "100% PEBA는 FuelCell 미드솔 폼 한정·FantomFit · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          },
          {
            "title": "New Balance 공식 — SC Trainer v3",
            "url": "https://www.newbalance.co.uk/pd/fuelcell-supercomp-trainer-v3/MRCXV4-50691.html?dwvar_MRCXV4-50691_style=MRCX17A",
            "scope": "FuelCell·바이오 기반 함량 약 3%, 기본 고분자 미기재 · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          }
        ]
      }
    },
    {
      "id": "fresh-foam-x",
      "name": "Fresh Foam X",
      "nameKo": "프레시 폼 X",
      "category": "midsole",
      "description": "1080v14·880v15·860v14·860v15에서 확인한 폼 명칭입니다. 1080v15의 Infinion으로 이어 붙이지 않습니다.",
      "benefits": [
        "일반형 880v15와 860 두 세대의 적용 확인",
        "동일 상표라도 배합·층·밀도는 별도 확인",
        "바이오 기반 함량을 PEBA 함량으로 바꾸지 않기"
      ],
      "scienceExplanation": "1080v14와 일반형 880v15, 860v14·v15의 정확 제품 설명에서 Fresh Foam X를 확인했습니다. 이 기술명은 그 자체로 EVA나 PEBA의 원료 공시가 아닙니다. 880v15와 860v14의 약 3% 바이오 기반 함량은 제조사 폼 설명이며, 해당 수치를 v15 등 다른 SKU로 자동 이전하지 않았습니다. 860v14의 두 층과 EVA 보드는 지지 구조 설명으로 따로 다룹니다. 같은 폼 이름만으로 초보 적합성·관절 보호·일정 거리 내구성을 보장하지 않습니다.",
      "usedInShoes": [
        "new-balance-1080-v14",
        "new-balance-880-v15",
        "new-balance-860-v14",
        "new-balance-860-v15"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대·일반형/방수형의 기술명과 확인된 적용 예시. 제조사 설계 의도와 소재 표기는 임상 효과·기록·주행 수명·접지 안전 보장이 아닙니다.",
        "sources": [
          {
            "title": "New Balance 공식 — 1080v14",
            "url": "https://www.newbalance.com/pd/fresh-foam-x-1080v14/M1080V14-47512-PMG-NA-PR.html",
            "scope": "Fresh Foam X · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          },
          {
            "title": "New Balance 공식 — 880v15",
            "url": "https://www.newbalance.com/pd/fresh-foam-x-880v15/M880I15-D-115.html",
            "scope": "Fresh Foam X·약 3% 바이오 기반 함량 · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          },
          {
            "title": "New Balance 공식 — 860v14",
            "url": "https://www.newbalance.com.au/pd/fresh-foam-x-860v14/W860V14-45484-PMG-APAC.html",
            "scope": "Fresh Foam X·Stability Plane · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          },
          {
            "title": "New Balance 공식 — 860v15",
            "url": "https://www.newbalance.com/pd/fresh-foam-x-860v15/M860V15_RU-FTW-802888.html",
            "scope": "Fresh Foam X·Stability Plane · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          }
        ]
      }
    },
    {
      "id": "energy-arc",
      "name": "Energy Arc",
      "nameKo": "에너지 아크",
      "category": "plate",
      "description": "카본판 형상과 미드솔 빈 공간을 함께 설계한 구성입니다. SC 엘리트 v5·SC 트레이너 v3에서 명시되며 모든 FuelCell 모델에 적용되는 것은 아닙니다.",
      "benefits": [
        "SC 엘리트 v5·SC 트레이너 v3: 카본판과 빈 공간 확인",
        "레벨 v5의 FuelCell과 자동 연결하지 않기",
        "설계 의도와 독립 효율 개선 수치를 구분"
      ],
      "scienceExplanation": "두 모델의 공식 본문은 운동 목적에 맞춘 카본판의 기하와 전략적인 미드솔 빈 공간을 조합한다고 설명합니다. SC 엘리트 v5는 앞발의 판 강성 조정도 명시합니다. 이는 에너지 저장·방출을 목표로 한 제조사 구조 설명이며 모든 착지에서 판이 똑같이 휘는 모습이나 개인 기록 개선률을 직접 측정했다는 뜻이 아닙니다. 빈 공간이 있다고 폼이 두 밀도라는 결론을 내리거나 다른 FuelCell 모델에 카본판이 있다고 추정하지 않습니다.",
      "usedInShoes": [
        "new-balance-sc-elite-v5",
        "new-balance-sc-trainer-v3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대·일반형/방수형의 기술명과 확인된 적용 예시. 제조사 설계 의도와 소재 표기는 임상 효과·기록·주행 수명·접지 안전 보장이 아닙니다.",
        "sources": [
          {
            "title": "New Balance 공식 — SC Elite v5",
            "url": "https://www.newbalance.com/pd/fuelcell-supercomp-elite-v5/MRCELV5-50683-PR.html?dwvar_MRCELV5-50683-PR_style=MRCELLR5",
            "scope": "Energy Arc·carbon fiber plate geometry·strategic midsole voids · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          },
          {
            "title": "New Balance 공식 — SC Trainer v3",
            "url": "https://www.newbalance.co.uk/pd/fuelcell-supercomp-trainer-v3/MRCXV4-50691.html?dwvar_MRCXV4-50691_style=MRCX17A",
            "scope": "Energy Arc·carbon fiber plate geometry·strategic midsole voids · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          }
        ]
      }
    },
    {
      "id": "stability-plane",
      "name": "Stability Plane",
      "nameKo": "스태빌리티 플레인",
      "category": "stability",
      "description": "860v14·v15에서 확인한 지지 기술입니다. v14의 EVA 보드·두 층 구조를 v15에 그대로 복사하지 않습니다.",
      "benefits": [
        "860v14: 두 층 Fresh Foam 미드솔·EVA 보드 확인",
        "860v15: Stability Plane 명칭 확인, 보드 재질 미확인",
        "보드의 EVA를 미드솔 폼 원료로 확대하지 않기"
      ],
      "scienceExplanation": "860v14 일본 제조사 발표는 두 층의 Fresh Foam 미드솔과 뒤꿈치를 넓게 받친 뒤 전족부 안쪽으로 이어지는 EVA 보드를 설명합니다. AU 제품 원문에서도 Stability Plane 명칭을 확인했습니다. 따라서 단순히 넓은 바닥이라는 설명만으로 구조를 대체하지 않았습니다. 두 층이라는 사실은 이중밀도와 같지 않으며 EVA 보드가 Fresh Foam X 전체의 EVA 원료를 증명하지도 않습니다. v15는 명칭까지 확인했지만 보드 재료·형상·층수는 이번 원문으로 확정하지 못했습니다.",
      "usedInShoes": [
        "new-balance-860-v14",
        "new-balance-860-v15"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대·일반형/방수형의 기술명과 확인된 적용 예시. 제조사 설계 의도와 소재 표기는 임상 효과·기록·주행 수명·접지 안전 보장이 아닙니다.",
        "sources": [
          {
            "title": "New Balance 공식 — 860v14",
            "url": "https://www.newbalance.com.au/pd/fresh-foam-x-860v14/W860V14-45484-PMG-APAC.html",
            "scope": "Stability Plane 명칭 · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          },
          {
            "title": "New Balance Japan 860v14 제조사 발표 (2024-07-12)",
            "url": "https://company.newbalance.jp/press/2024/p-66931",
            "scope": "두 층 Fresh Foam 미드솔, EVA 보드와 형상. v15로 전용하지 않음"
          },
          {
            "title": "New Balance 공식 — 860v15",
            "url": "https://www.newbalance.com/pd/fresh-foam-x-860v15/M860V15_RU-FTW-802888.html",
            "scope": "Stability Plane 명칭, 보드 재질은 미공개 · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          }
        ]
      }
    },
    {
      "id": "ultra-heel",
      "name": "Ultra Heel",
      "nameKo": "울트라 힐",
      "category": "upper",
      "description": "뒤꿈치의 밀착감·지지를 설명하는 명칭입니다. 일반 1080 시리즈 소개만으로 1080v15·880v15의 정확 적용을 확정하지 않습니다.",
      "benefits": [
        "공식 일반 소개와 정확 세대 제품 설명을 구분",
        "1080v15·880v15의 기존 미확인 연결 제거",
        "아킬레스 압박·물집·힐 슬립은 직접 확인"
      ],
      "scienceExplanation": "뉴발란스의 여성 신발 일반 소개는 1080 시리즈의 ultra-heel을 밀착감과 지지를 위한 특징으로 언급하지만 구체 세대를 명시하지 않습니다. 이번 1080v14·v15와 880v15의 고유 제품 본문에서 Ultra Heel이라는 명칭을 확정하지 못해 적용 목록을 비웠습니다. 일반 소개의 존재를 최신 모든 1080의 부품 증거로 사용하지 않습니다. 발목 마찰이나 물집이 없고 아킬레스 부담을 줄인다는 효과 단정도 제외했습니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대·일반형/방수형의 기술명과 확인된 적용 예시. 제조사 설계 의도와 소재 표기는 임상 효과·기록·주행 수명·접지 안전 보장이 아닙니다.",
        "sources": [
          {
            "title": "New Balance 공식 여성 신발 일반 소개",
            "url": "https://www.newbalance.com/women/shoes/all-shoes/",
            "scope": "1080 시리즈 일반 ultra-heel 설명만 확인, 정확 세대 미표기"
          },
          {
            "title": "New Balance 공식 — 1080v15",
            "url": "https://www.newbalance.com/pd/1080v15/W1080815-2A-09.html",
            "scope": "현재 세대 원문과 구분 · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          },
          {
            "title": "New Balance 공식 — 880v15",
            "url": "https://www.newbalance.com/pd/fresh-foam-x-880v15/M880I15-D-115.html",
            "scope": "일반형 정확 세대 원문과 구분 · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          }
        ]
      }
    },
    {
      "id": "hydrohesion",
      "name": "HydroHesion",
      "nameKo": "하이드로히전",
      "category": "outsole",
      "description": "880v15 GORE-TEX 제품 안내에서 확인한 고무 아웃솔 명칭입니다. 같은 숫자의 일반 880v15에 그대로 적용하지 않습니다.",
      "benefits": [
        "880v15 GORE-TEX M880GB15에서 명칭 확인",
        "GORE-TEX 어퍼의 방수와 아웃솔 고무의 접지는 별개",
        "수막현상 방지·완벽한 방수·미끄러짐 방지 보장 제외"
      ],
      "scienceExplanation": "미국 공식 880v15 GORE-TEX M880GB15 제품 안내는 Hydrohesion rubber outsole이 젖은 환경의 접지를 돕는다고 설명합니다. 일반형 880v15의 확인 원문에서는 같은 명칭을 확인하지 못해 일반형 상품 연결을 제거했습니다. GORE-TEX는 어퍼/방수 구조, Hydrohesion은 고무 아웃솔의 명칭이므로 둘을 같은 기능으로 설명하지 않습니다. 특수 화합물의 성분이나 수막현상 방지 시험·일반 고무 대비 마찰계수는 확인하지 못했습니다. 이 방수형은 별도 등록 상품이 아니므로 임의로 일반형 페이지에 연결하지 않습니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대·일반형/방수형의 기술명과 확인된 적용 예시. 제조사 설계 의도와 소재 표기는 임상 효과·기록·주행 수명·접지 안전 보장이 아닙니다.",
        "sources": [
          {
            "title": "New Balance 공식 880v15 GORE-TEX M880GB15",
            "url": "https://www.newbalance.com/pd/880v15-gore-tex/M880GB15-D-14.html",
            "scope": "GORE-TEX 버전의 Hydrohesion 명칭과 제조사 접지 설계 의도. 일반형으로 전용하지 않음"
          },
          {
            "title": "New Balance 공식 — 880v15",
            "url": "https://www.newbalance.com/pd/fresh-foam-x-880v15/M880I15-D-115.html",
            "scope": "일반형과 방수형의 구분 · 공개 정확 모델 원문 캐시 확인, 실시간 국내 판매 확인 아님"
          }
        ]
      }
    },
    {
      "id": "at-tread",
      "name": "AT Tread",
      "nameKo": "AT 트레드",
      "category": "outsole",
      "description": "도로와 비포장 구간을 함께 고려한 아웃솔 명칭입니다. 확인 예시는 Tektrel이며 모든 트레일 모델에 자동 적용하지 않습니다.",
      "benefits": [
        "공식 Tektrel 제품 설명에서 AT Tread 확인",
        "정해진 와플·러그 중간 형상으로 단순화하지 않기",
        "젖은 바위·진흙·급경사의 안전을 보장하지 않기"
      ],
      "scienceExplanation": "뉴발란스 미국 공식 사이트의 스페인어 Tektrel MTTTRSLG 제품 원문은 AT Tread가 도로와 비포장 구간의 다목적 접지를 목표로 한다고 설명합니다. 이것만으로 고무의 정확 화학 배합이나 러그 높이, 모든 지형에서의 미끄럼 방지 성능을 확정할 수 없습니다. 확인하지 못한 All Terrain 약어 풀이·출시 연도·로드 와플과 트레일 러그의 정해진 중간 형태라는 설명을 제외했습니다. Tektrel은 현재 사이트 등록 모델이 아니어서 적용 제품 목록은 비워두었습니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대·일반형/방수형의 기술명과 확인된 적용 예시. 제조사 설계 의도와 소재 표기는 임상 효과·기록·주행 수명·접지 안전 보장이 아닙니다.",
        "sources": [
          {
            "title": "New Balance 공식 Tektrel MTTTRSLG",
            "url": "https://www.newbalance.com/es/pd/tektrel/MTTTRSV1-49394.html",
            "scope": "AT Tread의 다목적 접지 설계 설명. 제품별 일반 핏 아이콘·재고는 근거에서 제외"
          }
        ]
      }
    }
  ]
};
