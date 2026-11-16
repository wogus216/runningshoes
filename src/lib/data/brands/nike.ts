import type { Brand } from '@/types/brand';

export const nikeBrand: Brand = {
  "id": "nike",
  "name": "Nike",
  "nameKo": "나이키",
  "tagline": "Just Do It",
  "description": "1964년 Phil Knight와 Bill Bowerman의 Blue Ribbon Sports에서 출발한 스포츠 브랜드입니다. 러닝화의 폼·Air 유닛·플레이트·어퍼는 제품별 조합이 다르므로 기술명과 해당 모델의 구성·근거를 함께 확인해야 합니다.",
  "founded": 1964,
  "headquarters": "미국 오리건주 비버튼",
  "website": "https://www.nike.com/kr",
  "technologies": [
    {
      "id": "zoomx",
      "name": "ZoomX",
      "nameKo": "줌엑스",
      "category": "midsole",
      "description": "ZoomX는 나이키의 미드솔 폼 제품군입니다. 같은 이름에서도 모델과 세대에 따라 설계·실측 결과를 나눠 봐야 합니다.",
      "benefits": [
        "폼·완성화·측정 조건을 구분",
        "ZoomX와 ZoomX LT 등 변형을 구분"
      ],
      "scienceExplanation": "Nike의 일반 ZoomX 페이지는 중창 에너지 리턴85%를 안내합니다.2026년11월13일 읽은 공식 폼 설명은11월11일자로 표시되며 최초 Alphafly의 폼·플레이트·Air 조합에서85%를 설명합니다. 현재 설명의 질소 초임계 발포·ZoomX 변형도 제조사 자료입니다. 이를 모든 세대의 고정 배합이나 모든 ZoomX 신발의 동일한 독립 실측값으로 사용하지 않습니다. 제품의 실제 구성과 랩 측정 조건을 함께 확인하세요.",
      "usedInShoes": [
        "nike-vaporfly-4",
        "nike-alphafly-3",
        "nike-pegasus-plus"
      ],
      "verification": {
        "checkedAt": "2026-11-13",
        "scope": "표기와 적용 예시를 확인한 범위입니다. 소재 전체의 독립 성능 순위·수명·부상 예방 검증이 아닙니다.",
        "sources": [
          {
            "title": "Nike ZoomX 공식 안내",
            "url": "https://www.nike.com/zoomx",
            "scope": "브랜드 중창85% 표기; 모든 제품 동일 실측 아님"
          },
          {
            "title": "Nike2026 폼 설명",
            "url": "https://about.nike.com/en/newsroom/collections/explainer-how-nike-s-innovative-foams-deliver-performance-and-comfort",
            "scope": "초기 Alphafly 조합·ZoomX 변형·2017년 도입"
          },
          {
            "title": "Pegasus Plus 한국 공식",
            "url": "https://www.nike.com/kr/t/페가수스-플러스-남성-로드-러닝화-R2UnfgKC/FQ7262-702",
            "scope": "전장ZoomX"
          },
          {
            "title": "Vaporfly4 공식",
            "url": "https://www.nike.com/t/vaporfly-4-mens-road-racing-shoes-HK05JWOf",
            "scope": "전장ZoomX"
          }
        ]
      },
      "year": 2017
    },
    {
      "id": "reactx",
      "name": "ReactX",
      "nameKo": "리액트엑스",
      "category": "midsole",
      "description": "ReactX는 React와 비교한 제조사 성능·제조 영향 안내가 있는 미드솔 폼입니다. 비율의 비교 대상과 평가 범위를 함께 읽어야 합니다.",
      "benefits": [
        "React 대비 제조사 주장임을 구분",
        "폼 평가 범위와 완성 신발 전체를 구분"
      ],
      "scienceExplanation": "2023년 공식 발표는 기존 React 대비 에너지 리턴13% 증가와 한 쌍의 중창에 관한 탄소 발자국 최소43% 감소를 설명합니다. Pegasus41 한국 공식 각주는 에어백·플레이트·다른 폼 등 중창의 다른 구성요소를 제외한다고 밝힙니다. 이를 완성 신발 전체나 Nike 전체의 탄소 배출43% 감소로 확대하지 않습니다.",
      "usedInShoes": [
        "nike-pegasus-41",
        "nike-vomero-18"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "표기와 적용 예시를 확인한 범위입니다. 소재 전체의 독립 성능 순위·수명·부상 예방 검증이 아닙니다.",
        "sources": [
          {
            "title": "Nike ReactX2023 발표",
            "url": "https://about.nike.com/en/newsroom/releases/nike-reactx-foam-infinity-rn-4-official-images",
            "scope": "React 비교·13%·한쌍 중창 최소43%"
          },
          {
            "title": "Pegasus41 한국 공식 각주",
            "url": "https://www.nike.com/kr/t/나이키-페가수스-41-남성-로드-러닝화-KJOKMFFd/FD2722-120",
            "scope": "다른 중창 구성요소 제외·제품 적용"
          },
          {
            "title": "Nike2026 폼 설명",
            "url": "https://about.nike.com/en/newsroom/collections/explainer-how-nike-s-innovative-foams-deliver-performance-and-comfort",
            "scope": "Vomero18 ReactX 적용"
          }
        ]
      },
      "year": 2023
    },
    {
      "id": "air-zoom",
      "name": "Air Zoom Units",
      "nameKo": "에어 줌 유닛",
      "category": "cushioning",
      "description": "Air Zoom은 공기 유닛을 활용하는 구성요소입니다. 위치·개수·다른 폼과의 조합은 제품별로 확인해야 합니다.",
      "benefits": [
        "유닛의 개수와 위치 확인",
        "폼·플레이트와 함께 제품 구성을 비교"
      ],
      "scienceExplanation": "Alphafly3 공식 발표는 앞꿈치의 두 Air Zoom 유닛을, Pegasus41 한국 공식은 앞꿈치와 뒤꿈치에 하나씩 배치한 두 유닛을 설명합니다. 같은 두 개라도 배치가 다릅니다. 유닛이 있다는 사실로 개인의 충격·기록·장기 내구성이 같은 수준이라고 판단할 수는 없습니다.",
      "usedInShoes": [
        "nike-alphafly-3",
        "nike-pegasus-41"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "표기와 적용 예시를 확인한 범위입니다. 소재 전체의 독립 성능 순위·수명·부상 예방 검증이 아닙니다.",
        "sources": [
          {
            "title": "Alphafly3 공식 발표",
            "url": "https://about.nike.com/en/newsroom/releases/nike-alphafly-3-official-images-release-date",
            "scope": "전족부두유닛"
          },
          {
            "title": "Pegasus41 한국 공식",
            "url": "https://www.nike.com/kr/t/나이키-페가수스-41-남성-로드-러닝화-KJOKMFFd/FD2722-120",
            "scope": "앞뒤각1개유닛"
          }
        ]
      }
    },
    {
      "id": "carbon-plate",
      "name": "Carbon-fiber Flyplate",
      "nameKo": "카본 파이버 플라이플레이트",
      "category": "plate",
      "description": "카본 Flyplate는 신발 내부의 구조 요소입니다. 플레이트 하나의 효과와 완성 신발 전체의 실험 결과를 구분하세요.",
      "benefits": [
        "완성화 실험과 부품 효과를 구분",
        "제품별 플레이트와 폼 조합을 확인"
      ],
      "scienceExplanation": "2017년 온라인 발표·2018년 학술지 연구는 남성 선수18명에게 신발 무게를 맞춘 세 조건을14·16·18km/h에서 비교했습니다. 프로토타입 완성화의 평균 에너지 비용 감소가 약4%였으며 플레이트만 분리해4%를 확인한 시험이 아닙니다. Nike 계약 연구비와 Nike 직원 공저자, 연구자의 유료 자문 관계가 공시돼 있습니다. Vaporfly4 공식은 전장 카본 Flyplate를 명시합니다. 이 자료로 모든 카본화의 개인 기록 개선율이나 분/km 효과 경계를 정하지 않습니다.",
      "usedInShoes": [
        "nike-vaporfly-4",
        "nike-alphafly-3"
      ],
      "verification": {
        "checkedAt": "2026-11-13",
        "scope": "표기와 적용 예시를 확인한 범위입니다. 소재 전체의 독립 성능 순위·수명·부상 예방 검증이 아닙니다.",
        "sources": [
          {
            "title": "Hoogkamer 등 원 연구",
            "url": "https://link.springer.com/article/10.1007/s40279-017-0811-2",
            "scope": "18선수·신발 무게 통일·3속도·전체신발 비교"
          },
          {
            "title": "Vaporfly4 공식",
            "url": "https://www.nike.com/t/vaporfly-4-mens-road-racing-shoes-HK05JWOf",
            "scope": "전장 카본 Flyplate"
          },
          {
            "title": "Alphafly3 공식 발표",
            "url": "https://about.nike.com/en/newsroom/releases/nike-alphafly-3-official-images-release-date",
            "scope": "전장 카본 Flyplate"
          }
        ]
      }
    },
    {
      "id": "atomknit",
      "name": "Atomknit 3.0",
      "nameKo": "아톰니트 3.0",
      "category": "upper",
      "description": "Atomknit3.0은 Alphafly3 공식 발표에 명시된 어퍼입니다. Flyknit 전체나 다른 세대의 원단 특성을 그대로 대신하지 않습니다.",
      "benefits": [
        "Alphafly3와 Atomknit세대 확인",
        "제조사 설계 설명과 개인 핏을 구분"
      ],
      "scienceExplanation": "2023년11월29일 발표는 Alphafly3의 Atomknit3.0과 중족부 고정·통기성 설계를 설명하고, Prototype의 판매 시작을2024년1월4일로 안내합니다. 흡수 수분량·발 부기 대응·마찰 예방의 독립 정량 시험은 이 자료에서 확인하지 않았습니다. 같은 브랜드의 니트라도 실제 모델의 압박과 핏은 따로 확인해야 합니다.",
      "usedInShoes": [
        "nike-alphafly-3"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "표기와 적용 예시를 확인한 범위입니다. 소재 전체의 독립 성능 순위·수명·부상 예방 검증이 아닙니다.",
        "sources": [
          {
            "title": "Alphafly3 공식 발표",
            "url": "https://about.nike.com/en/newsroom/releases/nike-alphafly-3-official-images-release-date",
            "scope": "Atomknit3.0·2024-01-04공식판매시작"
          }
        ]
      },
      "year": 2024
    },
    {
      "id": "flyknit",
      "name": "Flyknit",
      "nameKo": "플라이니트",
      "category": "upper",
      "description": "Flyknit은 디지털 편직으로 어퍼를 만드는 기술입니다. 적용 여부는 신발의 정확한 세대에서 확인해야 합니다.",
      "benefits": [
        "Pegasus Plus 초대의 Flyknit 확인",
        "Vaporfly4와4%Flyknit의 모델명 구분"
      ],
      "scienceExplanation": "Nike의2018년 설명은 Flyknit을2012년 선보인 편직 기술로 안내합니다. 한국 Pegasus Plus 공식은 Flyknit 갑피를 명시하지만 Vaporfly4 공식은 Engineered Mesh를 명시합니다. Vaporfly4를 예전 Vaporfly4% Flyknit과 같은 제품으로 읽지 마세요. 모든 Flyknit 어퍼가 같은 무게·내구성·핏을 갖는 것은 아닙니다.",
      "usedInShoes": [
        "nike-pegasus-plus"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "표기와 적용 예시를 확인한 범위입니다. 소재 전체의 독립 성능 순위·수명·부상 예방 검증이 아닙니다.",
        "sources": [
          {
            "title": "Nike2018 Flyknit 설명",
            "url": "https://about.nike.com/en/newsroom/releases/next-generation-flyknit-footwear-official-images",
            "scope": "디지털 편직·2012도입"
          },
          {
            "title": "Pegasus Plus 한국 공식",
            "url": "https://www.nike.com/kr/t/페가수스-플러스-남성-로드-러닝화-R2UnfgKC/FQ7262-702",
            "scope": "Flyknit갑피"
          },
          {
            "title": "Vaporfly4 공식",
            "url": "https://www.nike.com/t/vaporfly-4-mens-road-racing-shoes-HK05JWOf",
            "scope": "Engineered Mesh로 구분"
          }
        ]
      },
      "year": 2012
    },
    {
      "id": "engineered-mesh",
      "name": "Engineered Mesh",
      "nameKo": "엔지니어드 메쉬",
      "category": "upper",
      "description": "Engineered Mesh는 제품별로 설계된 메쉬 어퍼를 설명하는 명칭입니다. 특정 소재 점수나 단일한 출시연도로 읽지 않습니다.",
      "benefits": [
        "정확한 모델의 메쉬 표기 확인",
        "니트와 메쉬의 이름만으로 우열 판정하지 않기"
      ],
      "scienceExplanation": "Pegasus41 한국 공식과 Vaporfly4 공식에서 Engineered Mesh 표기를 확인했습니다. 같은 표현만으로 두 제품의 통기성·내구성·발볼·원사 구성이 동일하다고 결론 내릴 수는 없습니다. 원단 이름과 실제 신발의 핏,독립 통기성 측정값을 나눠 보세요.",
      "usedInShoes": [
        "nike-pegasus-41",
        "nike-vaporfly-4"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "표기와 적용 예시를 확인한 범위입니다. 소재 전체의 독립 성능 순위·수명·부상 예방 검증이 아닙니다.",
        "sources": [
          {
            "title": "Pegasus41 한국 공식",
            "url": "https://www.nike.com/kr/t/나이키-페가수스-41-남성-로드-러닝화-KJOKMFFd/FD2722-120",
            "scope": "Engineered Mesh"
          },
          {
            "title": "Vaporfly4 공식",
            "url": "https://www.nike.com/t/vaporfly-4-mens-road-racing-shoes-HK05JWOf",
            "scope": "Engineered Mesh"
          }
        ]
      }
    },
    {
      "id": "waffle-outsole",
      "name": "Waffle Outsole",
      "nameKo": "와플 아웃솔",
      "category": "outsole",
      "description": "와플 밑창은 패턴을 설명하는 명칭입니다. 어떤 지면에서도 같은 접지력을 보장하는 등급은 아닙니다.",
      "benefits": [
        "패턴과 실제 고무·접지 시험을 구분",
        "젖음·노면 조건별 접지 정보를 별도 확인"
      ],
      "scienceExplanation": "Pegasus41 한국 공식은 와플 스타일의 고무 밑창을 명시합니다. 해당 제품 표기는 패턴의 적용을 확인하는 근거입니다. 젖은 노면·흙길·트랙의 접지 시험을 모두 수행한 자료나 특정 내구 주행거리를 보장하는 자료로 쓰지 않습니다.",
      "usedInShoes": [
        "nike-pegasus-41"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "표기와 적용 예시를 확인한 범위입니다. 소재 전체의 독립 성능 순위·수명·부상 예방 검증이 아닙니다.",
        "sources": [
          {
            "title": "Pegasus41 한국 공식",
            "url": "https://www.nike.com/kr/t/나이키-페가수스-41-남성-로드-러닝화-KJOKMFFd/FD2722-120",
            "scope": "와플 스타일 고무 밑창"
          }
        ]
      }
    },
    {
      "id": "high-abrasion-rubber",
      "name": "High-Abrasion Rubber",
      "nameKo": "고내마모성 고무",
      "category": "outsole",
      "description": "내마모성 고무는 밑창 재료의 특성을 설명하는 표현입니다. 하나의 독립 성능 점수로 모든 제품을 묶을 수는 없습니다.",
      "benefits": [
        "제조사 재료 설명과 독립 마모시험을 구분",
        "사용 거리·비용의 보증으로 확대하지 않기"
      ],
      "scienceExplanation": "한국 Pegasus Plus 공식은 내마모성이 우수한 고무 밑창으로 설명합니다. 이는 제조사 제품 안내이며, 모든 Nike 고무의 수명·마찰계수·km당 비용을 측정한 결과는 아닙니다. 같은 표현을 쓰는 제품도 적용 면적·두께·배합을 별도로 확인해야 합니다.",
      "usedInShoes": [
        "nike-pegasus-plus"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "표기와 적용 예시를 확인한 범위입니다. 소재 전체의 독립 성능 순위·수명·부상 예방 검증이 아닙니다.",
        "sources": [
          {
            "title": "Pegasus Plus 한국 공식",
            "url": "https://www.nike.com/kr/t/페가수스-플러스-남성-로드-러닝화-R2UnfgKC/FQ7262-702",
            "scope": "내마모성 고무 밑창이라는 제품 설명"
          }
        ]
      }
    },
    {
      "id": "thin-web-rubber",
      "name": "Thin Web Rubber",
      "nameKo": "씬 웹 러버",
      "category": "outsole",
      "description": "Thin Web Rubber라는 명칭의 정확한 공식 기술·적용 모델은 이번 대조 범위에서 확인하지 못했습니다.",
      "benefits": [
        "정확한 공식 밑창 명칭을 먼저 확인",
        "경량화 설명만으로 같은 기술로 묶지 않기"
      ],
      "scienceExplanation": "Vaporfly4 공식은 전작 대비 밑창 경량화를 설명하지만 Thin Web Rubber라는 명칭을 확인할 수 없었습니다. Alphafly3 발표는 Fast Shot outsole이라는 다른 명칭을 사용합니다. 밑창이 가볍다는 설명만으로 같은 기술로 묶지 않고, 적용 신발 목록과 임의의 출시연도·내구성 점수를 비워 두었습니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "표기와 적용 예시를 확인한 범위입니다. 소재 전체의 독립 성능 순위·수명·부상 예방 검증이 아닙니다.",
        "sources": [
          {
            "title": "Vaporfly4 공식",
            "url": "https://www.nike.com/t/vaporfly-4-mens-road-racing-shoes-HK05JWOf",
            "scope": "밑창 경량화; Thin Web 명칭 미확인"
          },
          {
            "title": "Alphafly3 공식 발표",
            "url": "https://about.nike.com/en/newsroom/releases/nike-alphafly-3-official-images-release-date",
            "scope": "Fast Shot outsole로 표기"
          }
        ]
      }
    }
  ],
  "verification": {
    "checkedAt": "2026-11-10",
    "scope": "Blue Ribbon Sports의 시작과 글로벌 캠퍼스 위치를 공식 자료로 확인했습니다. 모든 기술 본문·사진·제품 효과의 일괄 인증은 아닙니다.",
    "sources": [
      {
        "title": "Nike Archives: Blue Ribbon Sports의 시작",
        "url": "https://about.nike.com/en-GB/magazine/the-handshake-that-started-it-all",
        "scope": "1964년 Phil Knight·Bill Bowerman의 파트너십"
      },
      {
        "title": "Nike World Campus 공식 역사",
        "url": "https://about.nike.com/en/magazine/how-nike-built-its-world-headquarters",
        "scope": "미국 오리건주 Beaverton 캠퍼스"
      }
    ]
  }
};
