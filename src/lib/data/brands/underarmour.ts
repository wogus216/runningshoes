import type { Brand } from '@/types/brand';

export const underArmourBrand: Brand = {
  "id": "under-armour",
  "name": "Under Armour",
  "nameKo": "언더아머",
  "tagline": "The Only Way Is Through",
  "description": "인피니트 엘리트 2의 HOVR+와 벨로시티 엘리트 2의 Flow·biopebax·카본판을 구분해 안내합니다. Flow는 별도 고무 아웃솔을 없앤 쿠셔닝·접지 구조이며 폼의 고분자나 정확 층 배치는 상표만으로 추정하지 않았습니다.",
  "founded": 1996,
  "headquarters": "미국 메릴랜드주 볼티모어",
  "website": "https://www.underarmour.co.kr",
  "technologies": [
    {
      "id": "under-armour-hovr-plus",
      "name": "UA HOVR+",
      "nameKo": "HOVR+",
      "category": "midsole",
      "description": "인피니트 엘리트 2의 전장 쿠셔닝에서 확인한 폼 명칭입니다. 기본 HOVR나 Flow와 같은 원료라고 추정하지 않습니다.",
      "benefits": [
        "정확 인피니트 엘리트 2의 HOVR+ 확인",
        "원료 고분자·발포 공정은 미공개",
        "일반 HOVR 설명·다른 세대 실측을 합치지 않기"
      ],
      "scienceExplanation": "인피니트 엘리트 2 3028169 공식 제품은 전장 UA HOVR+ 쿠셔닝과 별도 경량 고무 아웃솔을 설명합니다. 읽은 정확 원문에서 원료 고분자와 공정을 확정하지 못해 PEBA·EVA·질소 주입을 임의로 지정하지 않았습니다. 일반 HOVR의 과거 소개와 HOVR+를 하나의 재료 검증으로 합치지 않습니다. 부드러움·반응성은 제조사 설계 목표이며 모든 러너의 장거리 쿠션 유지나 실제 에너지 리턴을 보장하지 않습니다. 기존 랩 숫자는 이번 원문 확인 범위와 분리해 제외했습니다.",
      "usedInShoes": [
        "under-armour-infinite-elite-2"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 제조사 모델·세대의 명칭과 구성에 한정합니다. 원료·구조 미공개, 자료 유형, 변형 모델의 차이를 구분했습니다.",
        "sources": [
          {
            "title": "Under Armour — uaInfinite",
            "url": "https://www.underarmour.com/en-us/p/ua_infinite_elite_2_mens_running_shoes/3028169.html?dwvar_3028169_color=101&dwvar_3028169_size=11",
            "scope": "exact3028169 standardInfiniteElite2 own ProductDetails"
          }
        ]
      }
    },
    {
      "id": "under-armour-flow",
      "name": "UA Flow",
      "nameKo": "UA 플로우",
      "category": "outsole",
      "description": "벨로시티 엘리트 2에서 별도 고무 아웃솔 없이 쿠셔닝과 지면 접촉을 맡는 구조로 확인했습니다. Flow의 정확 고분자는 미확인입니다.",
      "benefits": [
        "3027205: Flow·고무 없는 밑창 확인",
        "영국 정확 제품: 별도 biopebax 폼 명시",
        "두 폼의 상하 배치·고정 수명은 미확인"
      ],
      "scienceExplanation": "벨로시티 엘리트 2의 한국·영국 공식 원문은 Flow의 고무 없는 쿠셔닝·밑창을 명시합니다. 영국 기술 항목은 biopebax 폼과의 조합도 설명하지만 biopebax의 정확 생물유래 비율과 Flow 자체의 고분자, 두 폼의 정밀한 층 관계는 공시하지 않습니다. TPE는 인솔 설명으로 Flow 배합 근거가 아닙니다. 제조사 경량·접지 설명과 모든 노면의 안전 또는 일정 거리의 내구성은 별개입니다. 기존 랩 마모 수치만으로 레이스 전용 수명을 단정하는 문장도 이번 제조사 확인 범위에서 제외했습니다.",
      "usedInShoes": [
        "under-armour-velociti-elite-2"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 제조사 모델·세대의 명칭과 구성에 한정합니다. 원료·구조 미공개, 자료 유형, 변형 모델의 차이를 구분했습니다.",
        "sources": [
          {
            "title": "Under Armour — uaVelocitiKr",
            "url": "https://www.underarmour.co.kr/ko-kr/p/%EC%8B%A0%EB%B0%9C/ua_%EB%B2%A8%EB%A1%9C%EC%8B%9C%ED%8B%B0_%EC%97%98%EB%A6%AC%ED%8A%B8_2/3027205.html",
            "scope": "exact3027205 KR DNA only;prices/inventory excluded"
          },
          {
            "title": "Under Armour — uaVelocitiUk",
            "url": "https://www.underarmour.co.uk/en-gb/p/ua-velociti-elite-2-unisex-running-shoes/3027205.html",
            "scope": "exact3027205 UK own ProductDetails+technicaltiles;historic athletecopy excluded"
          }
        ]
      }
    },
    {
      "id": "under-armour-carbon-plate",
      "name": "Carbon Fiber Plate",
      "nameKo": "카본 플레이트",
      "category": "plate",
      "description": "벨로시티 엘리트 2 3027205에서 확인한 전장 탄소섬유 판입니다. 두 폼 사이의 정밀 배치는 이번 원문으로 확정하지 않았습니다.",
      "benefits": [
        "한국·영국 정확 제품의 full-length carbon-fibre 확인",
        "Flow·biopebax와 각각 다른 부품",
        "정확 곡률·홈·수지 비율은 미공개"
      ],
      "scienceExplanation": "한국과 영국의 벨로시티 엘리트 2 공식 제품은 full-length carbon-fibre plate를 명시합니다. Flow와 추가 biopebax 폼이 확인된 사실만으로 판이 모든 위치에서 두 층 사이에 놓인다는 상세 도면을 만들지 않았습니다. 이번 원문이 공개하지 않은 곡률·갈래·섬유와 수지의 비율도 확정하지 않습니다. 다른 벨로시티 세대나 인피니트 엘리트 2에 카본판 적용을 옮기지 않았습니다. 전장 카본이라는 재료 설명만으로 보폭·기록·부상 결과를 보장하지 않습니다.",
      "usedInShoes": [
        "under-armour-velociti-elite-2"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 제조사 모델·세대의 명칭과 구성에 한정합니다. 원료·구조 미공개, 자료 유형, 변형 모델의 차이를 구분했습니다.",
        "sources": [
          {
            "title": "Under Armour — uaVelocitiKr",
            "url": "https://www.underarmour.co.kr/ko-kr/p/%EC%8B%A0%EB%B0%9C/ua_%EB%B2%A8%EB%A1%9C%EC%8B%9C%ED%8B%B0_%EC%97%98%EB%A6%AC%ED%8A%B8_2/3027205.html",
            "scope": "exact3027205 KR DNA only;prices/inventory excluded"
          },
          {
            "title": "Under Armour — uaVelocitiUk",
            "url": "https://www.underarmour.co.uk/en-gb/p/ua-velociti-elite-2-unisex-running-shoes/3027205.html",
            "scope": "exact3027205 UK own ProductDetails+technicaltiles;historic athletecopy excluded"
          }
        ]
      }
    }
  ]
};
