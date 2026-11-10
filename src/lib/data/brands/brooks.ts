import type { Brand } from '@/types/brand';

export const brooksBrand: Brand = {
  "id": "brooks",
  "name": "Brooks",
  "nameKo": "브룩스",
  "tagline": "Run Happy",
  "description": "1914년 미국 필라델피아의 신발 공장에서 시작한 브랜드입니다. 현재 러닝화에서는 DNA 계열 폼, 지지 구조 GuideRails, 모델별 판과 로커를 조합합니다. 같은 Glycerin·Ghost·Hyperion 시리즈도 세대에 따라 폼과 구조가 달라지므로 정확한 모델명으로 확인해야 합니다.",
  "founded": 1914,
  "website": "https://www.brooksrunning.co.kr",
  "technologies": [
    {
      "id": "dna-gold",
      "name": "DNA GOLD",
      "nameKo": "DNA 골드",
      "category": "midsole",
      "description": "하이페리온 맥스 3·엘리트 5에서 제조사가 폼 100% PEBA로 명시한 소재입니다. 모든 폼 중 객관적으로 최고라는 순위로 해석하지 않습니다.",
      "benefits": [
        "맥스 3: DNA GOLD와 DNA FLASH v2 조합",
        "엘리트 5: DNA GOLD·SpeedVault+ 조합",
        "100%는 폼 원료 표기이며 에너지 리턴이나 신발 전체 비율 아님"
      ],
      "scienceExplanation": "하이페리온 맥스 3의 정확 덴마크 제품 원문과 엘리트 5 제품은 DNA GOLD를 100% PEBA라고 명시합니다. 맥스 3은 GOLD와 FLASH v2의 조합이라 GOLD 단일 폼으로 설명하면 불완전합니다. 제조사의 가장 가볍고 반발력이 높다는 표현을 독립 전 제품 비교 순위나 개인 기록 향상 보장으로 바꾸지 않습니다. PEBA라는 원료 분류만으로 어떤 배합이든 다른 폼보다 반발률이 높다고 단정하지 않으며, 질소 주입 여부도 별도 명시 없이 추가하지 않습니다.",
      "usedInShoes": [
        "brooks-hyperion-max-3",
        "brooks-hyperion-elite-5"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대별 기술명·부품과 확인한 적용 예시. 질소 발포 공정과 기본 원료를 구분하며 기록·임상 효과·주행 수명·접지 안전을 보장하지 않습니다.",
        "sources": [
          {
            "title": "Brooks 공식 — hyperionmax3-dk",
            "url": "https://www.brooksrunning.com/en_dk/mens/road-running-shoes/hyperion-max-3/110467.html",
            "scope": "Exact110467: FLASHv2+100%PEBA GOLD, nylon SpeedVault, RapidRoll Rocker, lightweight breathable mesh. No SpeedVault+carbon orTPU designation."
          },
          {
            "title": "Brooks 공식 — hyperion-au-blog",
            "url": "https://blog.brooksrunning.com.au/diving-into-the-new-hyperion-range/",
            "scope": "Sean Fitzpatrick dated2025-08-14: exactMax3 GOLD upper/FLASHv2 firmerbase, SpeedVault80%PEBAX20%fibreglass, stretch-knit upper, RoadTack. Clinical/promotional effects excluded."
          },
          {
            "title": "Brooks 공식 하이페리온 엘리트 5",
            "url": "https://www.brooksrunning.com/en_us/featured/unisex-running-shoes/hyperion-elite-5/1000491D411.050.html",
            "scope": "DNA GOLD 폼 100% PEBA와 사이즈별 Arris carbon fiber SpeedVault+ 설명. 마케팅 최고 성능 표현은 제조사 주장으로 한정"
          }
        ]
      }
    },
    {
      "id": "dna-tuned",
      "name": "DNA Tuned",
      "nameKo": "DNA 튠드",
      "category": "midsole",
      "description": "질소 주입 폼의 셀 크기를 뒤꿈치와 앞발에서 다르게 설계한 기술입니다. 글리세린 22·GTS 22·초대 맥스의 적용을 확인했습니다.",
      "benefits": [
        "뒤꿈치는 큰 셀, 앞발은 작은 셀이라는 제조사 설계",
        "듀얼 셀을 두 폼 층이나 두 장의 판으로 바꾸지 않기",
        "글리세린 22를 DNA LOFT v3에 연결하던 오류 수정"
      ],
      "scienceExplanation": "세 모델의 고유 설명은 뒤꿈치의 더 큰 셀과 앞발의 더 작은 셀을 통해 착지와 전환을 조정한다고 명시합니다. 셀 크기 설계는 서로 다른 두 폼을 접착한 층수나 이중 플레이트를 뜻하지 않습니다. 실제 셀 지름·모든 SKU의 배합비·독립적인 러닝 경제성은 이번 원문에서 확인하지 못했습니다. 글리세린 22·GTS 22·초대 맥스의 이름을 확인했으며, 단지 같은 시리즈라는 이유로 LOFT v3나 다른 세대의 조성을 대입하지 않습니다.",
      "usedInShoes": [
        "brooks-glycerin-22",
        "brooks-glycerin-gts-22",
        "brooks-glycerin-max"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대별 기술명·부품과 확인한 적용 예시. 질소 발포 공정과 기본 원료를 구분하며 기록·임상 효과·주행 수명·접지 안전을 보장하지 않습니다.",
        "sources": [
          {
            "title": "Brooks 공식 — glycerin22",
            "url": "https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/glycerin-22/110445.html",
            "scope": "Exact22: nitrogen-infused DNA TUNED, large heel/small forefoot cells, engineered double jacquard knit. No LOFTv3 assignment."
          },
          {
            "title": "Brooks 공식 — glyceringts22",
            "url": "https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/glycerin-gts-22/110446.html",
            "scope": "ExactGTS22: nitrogen-infused DNA TUNED, GuideRails, engineered double jacquard knit. ReStart different mesh label preserved."
          },
          {
            "title": "Brooks 공식 — glycerinmax",
            "url": "https://www.brooksrunning.com/en_us/glycerin-max/1104471D099.120.html",
            "scope": "Exact first110447: nitrogen-infused dual-sized-cell DNA TUNED, GlideRoll Rocker sculpted bevel/toe spring. Max2 comparison tile excluded."
          },
          {
            "title": "Brooks 공식 — glycerin-evolution",
            "url": "https://www.brooksrunning.com/en_us/blog/gear-stories/glycerin-evolution.html",
            "scope": "Explicit22 switches from21LOFTv3 to nitrogen-infused dual-cell TUNED; double jacquard knit. Othergenerations excluded."
          }
        ]
      }
    },
    {
      "id": "dna-flash-v2",
      "name": "DNA FLASH v2",
      "nameKo": "DNA 플래시 v2",
      "category": "midsole",
      "description": "질소 주입을 사용하는 폼 계열입니다. 하이페리온 맥스 3에서는 DNA GOLD와 함께 쓰이므로 단일 폼으로 설명하지 않습니다.",
      "benefits": [
        "맥스 3: GOLD 위층·FLASH v2 아래층이라는 AU 설명",
        "질소는 공정 정보이며 원료·배합비와 별개",
        "질소가 공기보다 가벼워 신발이 가볍다는 단순 설명 제외"
      ],
      "scienceExplanation": "제조사의 하이페리온 안내는 FLASH v2를 질소 주입 폼으로 설명하고 맥스 3의 정확 제품은 GOLD와 FLASH v2 조합을 명시합니다. AU 브랜드 기고는 GOLD 상층과 더 단단한 FLASH v2 하부를 설명합니다. 발포 구조·밀도 설계와 가스 자체의 무게 차이는 다른 문제이므로, 질소가 공기보다 가벼워 무게가 획기적으로 줄었다는 기존 표현을 제거했습니다. 기본 고분자와 배합비는 확인한 원문으로 확정하지 못했고, 모든 트레일·스피드 모델 적용으로 확대하지 않습니다.",
      "usedInShoes": [
        "brooks-hyperion-max-3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대별 기술명·부품과 확인한 적용 예시. 질소 발포 공정과 기본 원료를 구분하며 기록·임상 효과·주행 수명·접지 안전을 보장하지 않습니다.",
        "sources": [
          {
            "title": "Brooks 공식 — hyperion-family",
            "url": "https://www.brooksrunning.com/en_ca/featured/hyperion/",
            "scope": "Explicit Hyperion3 paragraph establishes named FLASHv2 nitrogen-infused technology; separateMax3paragraph confirms GOLD/SpeedVault/RapidRoll. Nitrogen property tagged tech-level, not aborrowed exactmodel labvalue."
          },
          {
            "title": "Brooks 공식 — hyperionmax3-dk",
            "url": "https://www.brooksrunning.com/en_dk/mens/road-running-shoes/hyperion-max-3/110467.html",
            "scope": "Exact110467: FLASHv2+100%PEBA GOLD, nylon SpeedVault, RapidRoll Rocker, lightweight breathable mesh. No SpeedVault+carbon orTPU designation."
          },
          {
            "title": "Brooks 공식 — hyperion-au-blog",
            "url": "https://blog.brooksrunning.com.au/diving-into-the-new-hyperion-range/",
            "scope": "Sean Fitzpatrick dated2025-08-14: exactMax3 GOLD upper/FLASHv2 firmerbase, SpeedVault80%PEBAX20%fibreglass, stretch-knit upper, RoadTack. Clinical/promotional effects excluded."
          }
        ]
      }
    },
    {
      "id": "dna-loft-v3",
      "name": "DNA LOFT v3",
      "nameKo": "DNA 로프트 v3",
      "category": "midsole",
      "description": "고스트 17·18, 고스트 맥스 3, 아드레날린 GTS 25에서 확인한 질소 주입 폼입니다. 글리세린 22의 DNA TUNED와 구분합니다.",
      "benefits": [
        "질소 주입 공정과 EVA·고무 기반 설명은 별개",
        "고스트 일반형·맥스와 글리세린 계열을 이름만으로 통합하지 않기",
        "수명 연장·관절 보호 효과는 별도 근거 없이 단정하지 않기"
      ],
      "scienceExplanation": "제조사의 기술 설명은 LOFT의 EVA·고무 기반에 질소를 초임계 공정으로 주입하는 v3를 설명합니다. 따라서 EVA·고무에서 질소라는 소재로 바뀌었다는 식으로 쓰지 않습니다. 정확 모델 원문에서 고스트 17·18·고스트 맥스 3·아드레날린 GTS 25 적용을 확인했습니다. 글리세린 22·GTS 22는 TUNED로 바뀌어 기존 연결을 제거했습니다. 공정명이 같다고 정확 SKU의 원료 비율·폼 밀도·주행 수명이 모두 같은 것은 아닙니다.",
      "usedInShoes": [
        "brooks-ghost-17",
        "brooks-ghost-18",
        "brooks-ghost-max-3",
        "brooks-adrenaline-gts-25"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대별 기술명·부품과 확인한 적용 예시. 질소 발포 공정과 기본 원료를 구분하며 기록·임상 효과·주행 수명·접지 안전을 보장하지 않습니다.",
        "sources": [
          {
            "title": "Brooks 공식 — dna-loft-science",
            "url": "https://www.brooksrunning.com/en_us/blog/research-innovation/science-behind-brooks-dna-loft.html",
            "scope": "Officialstaff sciencearticle: LOFT EVA/rubber/air base; v3 infusesnitrogen via supercritical/large-cellfoaming. Formula proportions undisclosed; basechemistry notchangedtoPEBA by inference."
          },
          {
            "title": "Brooks 공식 — ghost17-au",
            "url": "https://blog.brooksrunning.com.au/the-ghost-17/",
            "scope": "Charlie Johnson dated2025-05-29: exact17 nitrogen LOFTv3, RoadTack+HighPerformanceRubber/recycledsilica, doublejacquardairmesh/kickbackcollar, decoupledcrashpad andflexgrooves."
          },
          {
            "title": "Brooks 공식 — ghost18-sku",
            "url": "https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/ghost-18/1104931D292.110.html",
            "scope": "ExactGhost18 section confirms nitrogen-infused LOFTv3, new flatknit pillowy tongue, two-colored air mesh. Current otherSKU genericcopy omits brandedfoam; cross-sell excluded."
          },
          {
            "title": "Brooks 공식 — ghostmax3-au",
            "url": "https://blog.brooksrunning.com.au/the-brooks-ghost-max-3/",
            "scope": "Charlie Johnson dated2025-06-17: exactMax3 nitrogen LOFTv3/large-cellfoaming, GlideRoll Rocker curvedmidsole/longitudinalstiffening, RoadTack, doublejacquardairmesh. Geometry doesnotestablishplate."
          },
          {
            "title": "Brooks 공식 — adrenaline25-au",
            "url": "https://blog.brooksrunning.com.au/happy-25th-birthday-adrenaline-gts/",
            "scope": "Sarah Wilson dated2025-10-07: exact25 nitrogen LOFTv3, GuideRails, DoubleJacquardEngineeredAirMesh, FlatKnitCollar+HeelTab. Clinicalsupportclaims excluded."
          },
          {
            "title": "Brooks 공식 — glycerin-evolution",
            "url": "https://www.brooksrunning.com/en_us/blog/gear-stories/glycerin-evolution.html",
            "scope": "Explicit22 switches from21LOFTv3 to nitrogen-infused dual-cell TUNED; double jacquard knit. Othergenerations excluded."
          }
        ]
      }
    },
    {
      "id": "speedvault-plus",
      "name": "SpeedVault+",
      "nameKo": "스피드볼트+",
      "category": "plate",
      "description": "엘리트 5의 공식 표현은 사이즈별로 조정한 Arris 카본섬유 판입니다. 맥스 3의 SpeedVault와 구분합니다.",
      "benefits": [
        "엘리트 5: Arris carbon fiber SpeedVault+",
        "사이즈별 강성 조정은 설계 설명",
        "모든 러너에게 같은 추진 효과라는 보장 제외"
      ],
      "scienceExplanation": "하이페리온 엘리트 5 제품 안내는 무게를 줄이고 굽힘 강성을 조정하기 위해 사이즈별로 만든 Arris carbon fiber SpeedVault+를 명시합니다. 사이즈별 설계가 개인의 러닝 경제성 향상률이나 동일한 추진감을 보장한다는 뜻은 아닙니다. 맥스 3의 보드는 +가 없는 SpeedVault로 재질 표현도 달라 이 항목에 연결하지 않습니다. 판·폼의 조합을 분리하지 않은 제품 설명만으로 카본판 단독의 효과를 수치화하지 않습니다.",
      "usedInShoes": [
        "brooks-hyperion-elite-5"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대별 기술명·부품과 확인한 적용 예시. 질소 발포 공정과 기본 원료를 구분하며 기록·임상 효과·주행 수명·접지 안전을 보장하지 않습니다.",
        "sources": [
          {
            "title": "Brooks 공식 하이페리온 엘리트 5",
            "url": "https://www.brooksrunning.com/en_us/featured/unisex-running-shoes/hyperion-elite-5/1000491D411.050.html",
            "scope": "DNA GOLD 폼 100% PEBA와 사이즈별 Arris carbon fiber SpeedVault+ 설명. 마케팅 최고 성능 표현은 제조사 주장으로 한정"
          },
          {
            "title": "Brooks 공식 — hyperionmax3-dk",
            "url": "https://www.brooksrunning.com/en_dk/mens/road-running-shoes/hyperion-max-3/110467.html",
            "scope": "Exact110467: FLASHv2+100%PEBA GOLD, nylon SpeedVault, RapidRoll Rocker, lightweight breathable mesh. No SpeedVault+carbon orTPU designation."
          }
        ]
      }
    },
    {
      "id": "speedvault",
      "name": "SpeedVault",
      "nameKo": "스피드볼트",
      "category": "plate",
      "description": "하이페리온 맥스 3에서 확인한 판 명칭입니다. 공식 자료의 나일론 표현과 Pebax·유리섬유 조성 표현을 함께 남깁니다.",
      "benefits": [
        "정확 DK 제품: nylon SpeedVault",
        "AU 공식 기고: 80% PEBAX·20% fibreglass",
        "카본·TPU·SpeedVault+로 임의 변경하지 않기"
      ],
      "scienceExplanation": "정확 맥스 3 덴마크 제품과 공식 매장 안내는 보드를 nylon이라고 부르고, AU 공식 기고는 80% PEBAX·20% fibreglass라고 더 구체적으로 설명합니다. 두 표현을 같은 SKU의 완전한 화학 분석으로 확정하거나 무충전 순수 나일론·카본·TPU 중 하나로 임의 통일하지 않았습니다. 판과 RapidRoll Rocker는 별개 요소이며 맥스 3을 GlideRoll이라는 다른 명칭으로 바꾸지 않습니다. 카본 적응 훈련에 안전하다거나 근육 부담이 없다는 효과 단정도 제거했습니다.",
      "usedInShoes": [
        "brooks-hyperion-max-3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대별 기술명·부품과 확인한 적용 예시. 질소 발포 공정과 기본 원료를 구분하며 기록·임상 효과·주행 수명·접지 안전을 보장하지 않습니다.",
        "sources": [
          {
            "title": "Brooks 공식 — hyperionmax3-dk",
            "url": "https://www.brooksrunning.com/en_dk/mens/road-running-shoes/hyperion-max-3/110467.html",
            "scope": "Exact110467: FLASHv2+100%PEBA GOLD, nylon SpeedVault, RapidRoll Rocker, lightweight breathable mesh. No SpeedVault+carbon orTPU designation."
          },
          {
            "title": "Brooks 공식 — hyperionmax3-store",
            "url": "https://stores.brooksrunning.com/product/2315856/brooks-running-mens-hyperion-max-3/new-york-ny",
            "scope": "Official manufacturer-branded localstore ProductInformation calls exactHyperionMax3 nylonSpeedVault. Locallydealerstock andprices are outside scope."
          },
          {
            "title": "Brooks 공식 — hyperion-au-blog",
            "url": "https://blog.brooksrunning.com.au/diving-into-the-new-hyperion-range/",
            "scope": "Sean Fitzpatrick dated2025-08-14: exactMax3 GOLD upper/FLASHv2 firmerbase, SpeedVault80%PEBAX20%fibreglass, stretch-knit upper, RoadTack. Clinical/promotional effects excluded."
          }
        ]
      }
    },
    {
      "id": "guiderails",
      "name": "GuideRails®",
      "nameKo": "가이드레일",
      "category": "stability",
      "description": "발의 움직임을 안내하려는 지지 구조입니다. GTS 모델의 적용과 일반형을 구분하며, 무릎 부상 예방이 입증된 등급으로 표현하지 않습니다.",
      "benefits": [
        "글리세린 GTS 22·아드레날린 GTS 25 적용 확인",
        "일반 글리세린 22·고스트 맥스의 넓은 바닥과 구분",
        "러너 고유 움직임을 돕는다는 제조사 의도와 임상 효과는 별개"
      ],
      "scienceExplanation": "제조사 기술 설명은 뒤꿈치 양쪽의 단단한 폼 구조와 더 높고 단단한 바깥쪽 요소를 설명합니다. 글리세린 GTS 22·아드레날린 GTS 25의 정확 제품에서도 명칭을 확인했습니다. 과도한 움직임을 줄이고 개인의 움직임 경로를 지원한다는 설명은 설계 의도이지 불필요한 충격만 선택적으로 완전히 차단한다는 실측 결과가 아닙니다. 무릎 보호·부상 예방 효과를 보장하거나 모든 다른 안정화는 항상 회내를 교정한다는 비교도 하지 않습니다.",
      "usedInShoes": [
        "brooks-glycerin-gts-22",
        "brooks-adrenaline-gts-25"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대별 기술명·부품과 확인한 적용 예시. 질소 발포 공정과 기본 원료를 구분하며 기록·임상 효과·주행 수명·접지 안전을 보장하지 않습니다.",
        "sources": [
          {
            "title": "Brooks 공식 — guiderails-science",
            "url": "https://www.brooksrunning.com/en_ca/blog/research-innovation/the-science-behind-guiderails-technology.html",
            "scope": "Generic GuideRails explanation: two firmfoam pieces eitherheel side; lateralpiece higher/firmer. Exactpolymer notdisclosed. Oldmodel list notused to assign25/22."
          },
          {
            "title": "Brooks 공식 — glyceringts22",
            "url": "https://www.brooksrunning.com/en_us/mens/shoes/road-running-shoes/glycerin-gts-22/110446.html",
            "scope": "ExactGTS22: nitrogen-infused DNA TUNED, GuideRails, engineered double jacquard knit. ReStart different mesh label preserved."
          },
          {
            "title": "Brooks 공식 — adrenaline25-au",
            "url": "https://blog.brooksrunning.com.au/happy-25th-birthday-adrenaline-gts/",
            "scope": "Sarah Wilson dated2025-10-07: exact25 nitrogen LOFTv3, GuideRails, DoubleJacquardEngineeredAirMesh, FlatKnitCollar+HeelTab. Clinicalsupportclaims excluded."
          }
        ]
      }
    },
    {
      "id": "roadtack",
      "name": "RoadTack",
      "nameKo": "로드택",
      "category": "outsole",
      "description": "재생 실리카를 사용하는 아웃솔 고무 명칭입니다. 모델별 명시 근거를 확인하며 일반형·맥스·세대를 자동으로 묶지 않습니다.",
      "benefits": [
        "고스트 17·맥스 3·GTS 25 등 확인 원문으로 연결",
        "고스트 18·초대 글리세린 맥스는 이번 범위에서 명칭 미확인",
        "재생 함량·빗길 성능을 모든 SKU로 일반화하지 않기"
      ],
      "scienceExplanation": "고스트 17·고스트 맥스 3의 AU 공식 설명과 일부 정확 ReStart 기술 목록에서 RoadTack을 확인했습니다. 글리세린 22는 2024년 제조사 보고서의 정확 제품 도식에 명칭이 나옵니다. GTS 22·아드레날린 GTS 25·하이페리온 맥스 3도 각각 확인한 원문을 연결했습니다. 고스트 18은 검색 표기와 직접 열린 고유 본문의 정보량이 달라 적용을 보류했고, 초대 글리세린 맥스도 명칭이 확정되지 않았습니다. 고무 이름만으로 일반 고무 대비 빗길 접지 우위·수명·모든 SKU의 재생 함량을 결정하지 않습니다.",
      "usedInShoes": [
        "brooks-ghost-17",
        "brooks-ghost-max-3",
        "brooks-glycerin-22",
        "brooks-glycerin-gts-22",
        "brooks-adrenaline-gts-25",
        "brooks-hyperion-max-3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대별 기술명·부품과 확인한 적용 예시. 질소 발포 공정과 기본 원료를 구분하며 기록·임상 효과·주행 수명·접지 안전을 보장하지 않습니다.",
        "sources": [
          {
            "title": "Brooks 공식 — ghost17-au",
            "url": "https://blog.brooksrunning.com.au/the-ghost-17/",
            "scope": "Charlie Johnson dated2025-05-29: exact17 nitrogen LOFTv3, RoadTack+HighPerformanceRubber/recycledsilica, doublejacquardairmesh/kickbackcollar, decoupledcrashpad andflexgrooves."
          },
          {
            "title": "Brooks 공식 — ghostmax3-au",
            "url": "https://blog.brooksrunning.com.au/the-brooks-ghost-max-3/",
            "scope": "Charlie Johnson dated2025-06-17: exactMax3 nitrogen LOFTv3/large-cellfoaming, GlideRoll Rocker curvedmidsole/longitudinalstiffening, RoadTack, doublejacquardairmesh. Geometry doesnotestablishplate."
          },
          {
            "title": "Brooks 공식 — responsibility24",
            "url": "https://www.brooksrunning.com/on/demandware.static/-/Sites/default/dw1e999a73/cms-content/Project/ADT/Brooks%20Running/Landing/2023/Spring-2023/running-transparency/2024_Corporate_Responsibility_Report.pdf",
            "scope": "2024 officialPDF p34/printed68–69: GlycerinMax and22 TUNED dualcell18%bio-basedcontent fromsugarcane/EVA process; p35/printed70–71 exactGlycerin22 diagram18%bio-based EVA, RoadTack14%recycledsilica. p33 RoadTack14% recycledsilica."
          },
          {
            "title": "Brooks 공식 — glyceringts22-restart",
            "url": "https://restart.brooksrunning.com/products/glycerin-gts-22_110446_821_1d",
            "scope": "Exact model technical list GuideRails/RoadTack/HPRHeelRubber/EngineeredAirMesh. MainPDPdoublejacquardknit label differs."
          },
          {
            "title": "Brooks 공식 — adrenaline25-restart",
            "url": "https://restart.brooksrunning.com/products/adrenaline-gts-25_110454_240_1d",
            "scope": "Exact25 technical list GuideRails/LOFTv3/RoadTack."
          },
          {
            "title": "Brooks 공식 — hyperion-au-blog",
            "url": "https://blog.brooksrunning.com.au/diving-into-the-new-hyperion-range/",
            "scope": "Sean Fitzpatrick dated2025-08-14: exactMax3 GOLD upper/FLASHv2 firmerbase, SpeedVault80%PEBAX20%fibreglass, stretch-knit upper, RoadTack. Clinical/promotional effects excluded."
          }
        ]
      }
    },
    {
      "id": "trailtack-green",
      "name": "TrailTack Green",
      "nameKo": "트레일택 그린",
      "category": "outsole",
      "description": "제조사가 재생 소재 함량을 제시하는 트레일 고무 명칭입니다. TrailTack이라는 일부 명칭만으로 Green을 자동 적용하지 않습니다.",
      "benefits": [
        "공식 카스카디아 17 설명의 재생 소재 25% 표기",
        "초대 글리세린 맥스의 TrailTack Rubber를 Green으로 변환하지 않기",
        "젖은 바위·진흙에서 미끄럼 방지를 보장하지 않기"
      ],
      "scienceExplanation": "공식 카스카디아 연혁은 17세대의 TrailTack Green Rubber와 재생 소재 25%를 명시합니다. 이 과거 모델 예시를 모든 TrailTack이나 현재 다른 모델의 재생 함량으로 확대하지 않았습니다. 카스카디아 17은 사이트 등록 모델이 아니어서 제품 연결은 비워두었습니다. 초대 글리세린 맥스의 ReStart 목록에는 TrailTack Rubber만 나오며 주 제품 원문에서 아웃솔명을 별도로 확정하지 못해 Green 적용으로 연결하지 않았습니다. 재생 함량 표기는 수명이나 모든 표면의 접지 안전을 증명하지 않습니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "제조사의 정확 모델·세대별 기술명·부품과 확인한 적용 예시. 질소 발포 공정과 기본 원료를 구분하며 기록·임상 효과·주행 수명·접지 안전을 보장하지 않습니다.",
        "sources": [
          {
            "title": "Brooks 공식 카스카디아 연혁",
            "url": "https://www.brooksrunning.com/en_es/blog/gear-stories/cascadia-evolution.html",
            "scope": "카스카디아 17의 TrailTack Green과 재생 소재 25% 제조사 설명, 다른 모델로 일반화하지 않음"
          },
          {
            "title": "Brooks 공식 — glycerinmax-restart",
            "url": "https://restart.brooksrunning.com/products/glycerin-max_110447_099_1d",
            "scope": "ExactfirstMax ReStart techlist says TrailTackRubber/EngineeredAirMesh. NotTrailTackGreen, norverifiedRoadTack. No second exact primarysource corroborates outsolebrand."
          }
        ]
      }
    }
  ],
  "verification": {
    "checkedAt": "2026-11-10",
    "scope": "1914년 필라델피아 기원과 아래 9개 기술 설명의 한정된 확인 범위. 현재 본사 위치는 이번 범위에서 별도 갱신하지 않아 표기를 보류했습니다.",
    "sources": [
      {
        "title": "Brooks 공식 연혁",
        "url": "https://www.brooksrunning.com/en_us/meet-brooks/our-history/",
        "scope": "1914년 필라델피아 창업. 창업지와 현재 본사를 혼동하던 설명 수정"
      }
    ]
  }
};
