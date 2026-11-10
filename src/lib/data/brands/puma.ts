import type { Brand } from '@/types/brand';

export const pumaBrand: Brand = {
  "id": "puma",
  "name": "Puma",
  "nameKo": "푸마",
  "tagline": "Forever Faster",
  "description": "1948년 설립되어 독일 헤르초게나우라흐에 본사를 둔 스포츠 브랜드입니다. 러닝화의 NITROFOAM·NITROFOAM ELITE, PWRPLATE, ULTRAWEAVE, PUMAGRIP은 각각 폼·판·어퍼·아웃솔 요소입니다. 같은 NITRO 이름에서도 세대별 구성이 다르므로 정확 모델의 적용 명칭을 구분했습니다.",
  "founded": 1948,
  "headquarters": "독일 헤르초게나우라흐",
  "website": "https://kr.puma.com",
  "technologies": [
    {
      "id": "nitrofoam-elite",
      "name": "NITROFOAM Elite",
      "nameKo": "나이트로폼 엘리트",
      "category": "midsole",
      "description": "질소를 이용한 발포 공정을 적용한 레이싱 폼 계열입니다. 공식 기술 안내는 열가소성 폼으로 설명하며, 이번 세 모델의 정확 고분자 배합은 공시하지 않습니다.",
      "benefits": [
        "디비에이트 엘리트 3·4와 Fast-R 엘리트 3에서 확인",
        "일반 NITROFOAM과 구분",
        "제조사 에너지 리턴과 달리기 효율 수치는 별개"
      ],
      "scienceExplanation": "공식 기술 안내는 NITROFOAM ELITE를 nitrogen-infused thermoplastic foam으로 설명합니다. 이 표현만으로 PEBA·TPU·TPEE 중 하나를 모든 세대의 고정 원료로 지정하지 않았습니다. 디비에이트 엘리트 3·4와 Fast-R 엘리트 3의 제품 고유 설명에서 명칭을 확인했습니다. 엘리트 4의 93% 에너지 리턴 문구는 시험법·비교 대상이 공개되지 않은 제조사 표시이므로 독립 실측치나 달리기 효율 향상률로 바꾸어 쓰지 않습니다. 같은 상표가 같은 밀도·배합·체감을 뜻하는 것은 아닙니다.",
      "usedInShoes": [
        "puma-deviate-nitro-elite-3",
        "puma-deviate-nitro-elite-4",
        "puma-fast-r-nitro-elite-3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 원문에서 확인한 명칭과 적용 예시. 고분자 미공개·공통 FAQ·연구 조건의 한계를 구분했습니다.",
        "sources": [
          {
            "title": "PUMA official — technology",
            "url": "https://about.puma.com/en/innovation-0/footwear-technologies",
            "scope": "official footwear technology definitions; no exact-generation assignments inferred"
          },
          {
            "title": "PUMA official — elite3",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-elite-3-mens-road-running-shoes/309809?swatch=09",
            "scope": "309809_09 exact standard Elite3 own description/features/technology"
          },
          {
            "title": "PUMA official — elite4",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-elite-4-mens-road-running-shoes/312127",
            "scope": "312127_03 exact standard road Elite4 own description/features/tiles; HYROX excluded"
          },
          {
            "title": "PUMA official — fast3",
            "url": "https://us.puma.com/us/en/pd/fast-r-nitro-elite-3-mens-road-running-shoes/312060?swatch=01",
            "scope": "312060_01 exact standard FastR Elite3 own description/features/tiles"
          },
          {
            "title": "PUMA official — fastNews",
            "url": "https://about.puma.com/en/newsroom/product-and-brand-news/2025/17-04-2025-puma-reveals-fast-r-nitrotm-elite-3-super-shoe",
            "scope": "2025-04-17 exact FastR Elite3 launch"
          }
        ]
      }
    },
    {
      "id": "nitrofoam",
      "name": "NITROFOAM",
      "nameKo": "나이트로폼",
      "category": "midsole",
      "description": "벨로시티 4·디비에이트 3·4·매그맥스 2·매그니파이 3에서 확인한 질소 주입 폼 명칭입니다. 발포 공정은 원료 고분자 이름과 구분합니다.",
      "benefits": [
        "정확 세대 다섯 모델의 NITROFOAM 확인",
        "2021년 초임계 공정 설명을 현재 배합으로 복사하지 않기",
        "NITROFOAM ELITE와 따로 비교"
      ],
      "scienceExplanation": "2021년 공식 출시문은 당시 NITRO를 초임계 발포 폼으로 소개했습니다. 이번 다섯 모델은 각 제품 원문에서 질소 주입 NITROFOAM을 확인했지만 모든 세대의 동일 원료·기포 크기·공정 조건까지 공개한 것은 아닙니다. NITRO가 들어간 신발 이름만으로 일반 폼과 ELITE 폼을 같은 소재로 묶지 않았습니다. 벨로시티 4의 전장 폼과 매그맥스 2의 높은 스택 등 구성 차이도 남아 있습니다. 제조사의 경량·반발 설계 목표를 모든 러너의 반응이나 기록으로 보장하지 않습니다.",
      "usedInShoes": [
        "puma-velocity-nitro-4",
        "puma-deviate-nitro-3",
        "puma-magmax-nitro-2",
        "puma-magnify-nitro-3",
        "puma-deviate-nitro-4"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 원문에서 확인한 명칭과 적용 예시. 고분자 미공개·공통 FAQ·연구 조건의 한계를 구분했습니다.",
        "sources": [
          {
            "title": "PUMA official — launch2021",
            "url": "https://about.puma.com/en/newsroom/news/run-puma-press-conference",
            "scope": "2021 launch text; historical family process description only"
          },
          {
            "title": "PUMA official — velocity",
            "url": "https://us.puma.com/us/en/pd/velocity-nitro-4-mens-road-running-shoes/311140",
            "scope": "311140_01 exact standard road Velocity4 own description/features"
          },
          {
            "title": "PUMA official — deviate3",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-3-mens-running-shoes/309707",
            "scope": "309707_06 exact standard Deviate3 own description/technology"
          },
          {
            "title": "PUMA official — magmax",
            "url": "https://us.puma.com/us/en/pd/magmax-nitro-2-mens-road-running-shoes/312125",
            "scope": "312125_01 exact standard MagMax2 own description/technology; generic FAQ excluded"
          },
          {
            "title": "PUMA official — magnify",
            "url": "https://us.puma.com/us/en/pd/magnify-nitro-3-mens-road-running-shoes/311046",
            "scope": "311046_01 exact standard road Magnify3 own description/features"
          },
          {
            "title": "PUMA official — deviate4",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-4-mens-road-running-shoes/312123?size=0230&swatch=01",
            "scope": "312123_01 exact standard road Deviate4 own description/features"
          }
        ]
      }
    },
    {
      "id": "profoam",
      "name": "PROFOAM",
      "nameKo": "프로폼",
      "category": "midsole",
      "description": "공식 기술 안내에서 EVA 미드솔로 설명하는 폼입니다. 이번에 확인한 NITRO 여덟 모델에 PROFOAM 적용을 추가하지 않았습니다.",
      "benefits": [
        "EVA라는 공식 소재 설명 확인",
        "PROFOAMLITE의 미확인 33% 수치 제외",
        "정확 적용 근거가 없는 모델 연결은 비워두기"
      ],
      "scienceExplanation": "제조사 기술 안내는 PROFOAM을 EVA midsole solution으로 설명합니다. 정확 비교 대상과 조건을 다시 확인하지 못한 PROFOAMLITE의 33% 경량 수치, 모든 입문자에게 더 적합하다는 기존 일반화는 제거했습니다. 이번 여덟 모델의 고유 구성에서 PROFOAM 적용을 확인하지 못해 제품 연결을 비웠습니다. 목록이 비어 있다는 사실이 전 제품의 미탑재를 증명하는 것은 아닙니다. 폼 명칭 하나만으로 내구성·적정 페이스·가격 가치를 정하지 않습니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 원문에서 확인한 명칭과 적용 예시. 고분자 미공개·공통 FAQ·연구 조건의 한계를 구분했습니다.",
        "sources": [
          {
            "title": "PUMA official — technology",
            "url": "https://about.puma.com/en/innovation-0/footwear-technologies",
            "scope": "official footwear technology definitions; no exact-generation assignments inferred"
          }
        ]
      }
    },
    {
      "id": "pwrplate",
      "name": "PWRPLATE",
      "nameKo": "PWRPLATE",
      "category": "plate",
      "description": "모델별로 형상과 카본 적층을 조정하는 판 기술입니다. 디비에이트 3·4, 엘리트 3·4, Fast-R 엘리트 3의 공식 적용을 확인했습니다.",
      "benefits": [
        "디비에이트와 엘리트 각 세대의 카본 설명 구분",
        "Fast-R 3: 발가락 앞까지 연장된 판",
        "매그맥스 2의 공통 FAQ를 적용 근거에서 제외"
      ],
      "scienceExplanation": "디비에이트 3와 엘리트 3·4는 전장 카본 PWRPLATE, 디비에이트 4는 carbon-fibre·carbon-composite라는 제품 표현을 확인했습니다. Fast-R 엘리트 3는 앞발을 넘어 연장된 판을 별도로 설명합니다. 매그맥스 2 하단의 FAQ는 다른 모델의 PWRPLATE를 설명하므로 이 제품의 적용 목록에서 제거했습니다. INNOPLATE의 진화형이라는 미확인 계보도 제외했습니다. Fast-R 3 시제품의 최종 논문은 훈련된 러너 15명의 단기 트레드밀 비교에서 Fast-R 2 대비 평균 대사비용 약 3.15% 감소를 보고했습니다. 신발 전체의 비교이며 판 단독 효과나 실제 마라톤 기록 보장은 아닙니다. 푸마 지원·직원 공저자가 있는 연구라는 점도 구분해야 합니다.",
      "usedInShoes": [
        "puma-deviate-nitro-3",
        "puma-deviate-nitro-4",
        "puma-deviate-nitro-elite-3",
        "puma-deviate-nitro-elite-4",
        "puma-fast-r-nitro-elite-3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 원문에서 확인한 명칭과 적용 예시. 고분자 미공개·공통 FAQ·연구 조건의 한계를 구분했습니다.",
        "sources": [
          {
            "title": "PUMA official — technology",
            "url": "https://about.puma.com/en/innovation-0/footwear-technologies",
            "scope": "official footwear technology definitions; no exact-generation assignments inferred"
          },
          {
            "title": "PUMA official — deviate3",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-3-mens-running-shoes/309707",
            "scope": "309707_06 exact standard Deviate3 own description/technology"
          },
          {
            "title": "PUMA official — elite3",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-elite-3-mens-road-running-shoes/309809?swatch=09",
            "scope": "309809_09 exact standard Elite3 own description/features/technology"
          },
          {
            "title": "PUMA official — deviate4",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-4-mens-road-running-shoes/312123?size=0230&swatch=01",
            "scope": "312123_01 exact standard road Deviate4 own description/features"
          },
          {
            "title": "PUMA official — elite4",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-elite-4-mens-road-running-shoes/312127",
            "scope": "312127_03 exact standard road Elite4 own description/features/tiles; HYROX excluded"
          },
          {
            "title": "PUMA official — fast3",
            "url": "https://us.puma.com/us/en/pd/fast-r-nitro-elite-3-mens-road-running-shoes/312060?swatch=01",
            "scope": "312060_01 exact standard FastR Elite3 own description/features/tiles"
          },
          {
            "title": "PUMA official — fastNews",
            "url": "https://about.puma.com/en/newsroom/product-and-brand-news/2025/17-04-2025-puma-reveals-fast-r-nitrotm-elite-3-super-shoe",
            "scope": "2025-04-17 exact FastR Elite3 launch"
          },
          {
            "title": "research authors — paperFinal",
            "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13262284/fullTextXML",
            "scope": "2026-03-12 final published article full XML, DOI10.1016/j.jshs.2026.101133"
          },
          {
            "title": "University of Massachusetts Amherst — university",
            "url": "https://www.umass.edu/news/article/science-behind-speed-umass-amherst-research-validates-innovative-marathon-footwear",
            "scope": "2025-04-15 university report; funding/prototype/scope"
          }
        ]
      }
    },
    {
      "id": "runguide",
      "name": "RUNGUIDE",
      "nameKo": "런가이드",
      "category": "stability",
      "description": "공식 Run XX 제품에서 단단한 밀도의 림으로 설명한 지지 설계입니다. 이번 여덟 모델의 적용은 확인하지 못했습니다.",
      "benefits": [
        "Run XX의 firm-density rim 설명에 한정",
        "제품 분류만으로 적용을 추정하지 않기",
        "회내 교정·부상 예방 보장 제외"
      ],
      "scienceExplanation": "Run XX NITRO 공식 원문은 RUNGUIDE를 firm-density rim으로 설명합니다. 이 모델은 현재 등록된 여덟 제품 밖의 정의 참고 사례이므로 아래 제품 연결을 비워두었습니다. 매그맥스 2의 판매 분류나 다른 안정화 제품의 설명을 가져와 적용 사실을 만들지 않았습니다. 지지를 목표로 하는 구조라는 설명과 실제 과회내 교정·부상 예방 효과의 임상 검증은 별개입니다. 발을 반드시 중앙에 정렬한다거나 쿠셔닝 손실이 없다는 결과 보장도 제거했습니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 원문에서 확인한 명칭과 적용 예시. 고분자 미공개·공통 FAQ·연구 조건의 한계를 구분했습니다.",
        "sources": [
          {
            "title": "PUMA official — runguideDefinition",
            "url": "https://sg.puma.com/sg/en/pd/run-xx-nitro%E2%84%A2-wns-running-shoes-women/376171.html",
            "scope": "definition only from RunXX; this model outside8-model mapping"
          }
        ]
      }
    },
    {
      "id": "ultraweave",
      "name": "ULTRAWEAVE",
      "nameKo": "울트라위브",
      "category": "upper",
      "description": "디비에이트 엘리트 3·4와 Fast-R 엘리트 3에서 확인한 경량 어퍼 소재 명칭입니다. 직조·신축의 세부 설명은 모델별 원문을 따릅니다.",
      "benefits": [
        "엘리트 3: 4방향 신축·모노 메쉬 표기",
        "엘리트 4·Fast-R 3: ULTRAWEAVE 확인",
        "일반 디비에이트의 메쉬와 구분"
      ],
      "scienceExplanation": "공식 기술 안내는 ULTRAWEAVE를 경량 고성능 어퍼 소재로 설명합니다. 엘리트 3 제품은 4-way stretch와 mono-mesh 표현을 함께 쓰지만 이를 모든 ULTRAWEAVE 세대의 동일 구조로 확대하지 않았습니다. 엘리트 4와 Fast-R 엘리트 3에서는 정확 명칭을 확인했습니다. 일반 디비에이트 3·4의 메쉬·PWRTAPE 보강은 이 명칭과 구분합니다. 경량화를 목표로 한 설계가 모든 발의 고정력·마찰 감소·물집 방지를 보장하는 것은 아닙니다.",
      "usedInShoes": [
        "puma-deviate-nitro-elite-3",
        "puma-deviate-nitro-elite-4",
        "puma-fast-r-nitro-elite-3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 원문에서 확인한 명칭과 적용 예시. 고분자 미공개·공통 FAQ·연구 조건의 한계를 구분했습니다.",
        "sources": [
          {
            "title": "PUMA official — technology",
            "url": "https://about.puma.com/en/innovation-0/footwear-technologies",
            "scope": "official footwear technology definitions; no exact-generation assignments inferred"
          },
          {
            "title": "PUMA official — elite3",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-elite-3-mens-road-running-shoes/309809?swatch=09",
            "scope": "309809_09 exact standard Elite3 own description/features/technology"
          },
          {
            "title": "PUMA official — elite4",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-elite-4-mens-road-running-shoes/312127",
            "scope": "312127_03 exact standard road Elite4 own description/features/tiles; HYROX excluded"
          },
          {
            "title": "PUMA official — fast3",
            "url": "https://us.puma.com/us/en/pd/fast-r-nitro-elite-3-mens-road-running-shoes/312060?swatch=01",
            "scope": "312060_01 exact standard FastR Elite3 own description/features/tiles"
          }
        ]
      }
    },
    {
      "id": "pumagrip",
      "name": "PUMAGRIP",
      "nameKo": "푸마그립",
      "category": "outsole",
      "description": "이번 여덟 도로화의 정확 제품·출시 원문에서 확인한 고무 아웃솔 명칭입니다. 접지 설계와 모든 젖은 표면에서의 안전 보장은 구분합니다.",
      "benefits": [
        "일반 PUMAGRIP 명칭의 정확 적용 여덟 모델",
        "LT·ATR 변형을 확인 없이 붙이지 않기",
        "노면·오염·마모 상태에 따라 접지 달라짐"
      ],
      "scienceExplanation": "벨로시티 4, 디비에이트 3·4, 엘리트 3·4, 매그맥스 2, 매그니파이 3는 제품 고유 설명에서 PUMAGRIP을 확인했습니다. Fast-R 엘리트 3는 정확 출시문을 근거로 연결했습니다. 이 자료가 LT 또는 ATR을 명시하지 않은 모델에 변형 상표를 자동으로 붙이지 않았습니다. 제조사의 다양한 노면 접지·내구성 설계 목표를 동일한 마찰계수·고정 수명·빗길 미끄럼 방지 보장으로 바꾸지 않습니다. 노면과 오염, 고무 마모 상태를 함께 확인해야 합니다.",
      "usedInShoes": [
        "puma-velocity-nitro-4",
        "puma-deviate-nitro-3",
        "puma-magmax-nitro-2",
        "puma-magnify-nitro-3",
        "puma-deviate-nitro-4",
        "puma-deviate-nitro-elite-3",
        "puma-deviate-nitro-elite-4",
        "puma-fast-r-nitro-elite-3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 원문에서 확인한 명칭과 적용 예시. 고분자 미공개·공통 FAQ·연구 조건의 한계를 구분했습니다.",
        "sources": [
          {
            "title": "PUMA official — velocity",
            "url": "https://us.puma.com/us/en/pd/velocity-nitro-4-mens-road-running-shoes/311140",
            "scope": "311140_01 exact standard road Velocity4 own description/features"
          },
          {
            "title": "PUMA official — deviate3",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-3-mens-running-shoes/309707",
            "scope": "309707_06 exact standard Deviate3 own description/technology"
          },
          {
            "title": "PUMA official — elite3",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-elite-3-mens-road-running-shoes/309809?swatch=09",
            "scope": "309809_09 exact standard Elite3 own description/features/technology"
          },
          {
            "title": "PUMA official — magmax",
            "url": "https://us.puma.com/us/en/pd/magmax-nitro-2-mens-road-running-shoes/312125",
            "scope": "312125_01 exact standard MagMax2 own description/technology; generic FAQ excluded"
          },
          {
            "title": "PUMA official — magnify",
            "url": "https://us.puma.com/us/en/pd/magnify-nitro-3-mens-road-running-shoes/311046",
            "scope": "311046_01 exact standard road Magnify3 own description/features"
          },
          {
            "title": "PUMA official — deviate4",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-4-mens-road-running-shoes/312123?size=0230&swatch=01",
            "scope": "312123_01 exact standard road Deviate4 own description/features"
          },
          {
            "title": "PUMA official — elite4",
            "url": "https://us.puma.com/us/en/pd/deviate-nitro-elite-4-mens-road-running-shoes/312127",
            "scope": "312127_03 exact standard road Elite4 own description/features/tiles; HYROX excluded"
          },
          {
            "title": "PUMA official — fastNews",
            "url": "https://about.puma.com/en/newsroom/product-and-brand-news/2025/17-04-2025-puma-reveals-fast-r-nitrotm-elite-3-super-shoe",
            "scope": "2025-04-17 exact FastR Elite3 launch"
          }
        ]
      }
    }
  ],
  "verification": {
    "checkedAt": "2026-11-10",
    "scope": "설립 연도·본사 소재지와 아래 7개 기술의 한정된 본문 확인. 가격·모든 제품 사양의 전면 검증은 아닙니다.",
    "sources": [
      {
        "title": "PUMA 공식 기업 소개",
        "url": "https://about.puma.com/en",
        "scope": "1948년 설립 및 Herzogenaurach/Germany 본사 안내"
      }
    ]
  }
};
