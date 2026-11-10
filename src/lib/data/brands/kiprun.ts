import type { Brand } from '@/types/brand';

export const kiprunBrand: Brand = {
  "id": "kiprun",
  "name": "Kiprun",
  "nameKo": "킵런",
  "tagline": "Keep Running",
  "description": "로드와 트레일 제품에 Fastech 계열 폼을 사용하는 러닝 브랜드입니다. 킵스톰 엘리트는 Fastech+ 이중 소재와 카본판, 킵서밋 맥스는 100% ATPU 초임계 발포 Fastech+와 Vibram Megagrip을 구분해 안내합니다. 같은 폼 상표가 동일 배합을 뜻하지 않습니다.",
  "website": "https://www.kiprun.com",
  "technologies": [
    {
      "id": "kiprun-fastech",
      "name": "Fastech+",
      "nameKo": "패스테크+",
      "category": "midsole",
      "description": "같은 Fastech+ 명칭에서도 킵서밋 맥스의 100% ATPU와 킵스톰 엘리트의 A-TPU·PEBA 조합을 구분합니다.",
      "benefits": [
        "킵서밋 맥스: 100% ATPU·SCF 공식 설명",
        "킵스톰 엘리트: A-TPU 캐리어와 PEBA 인서트",
        "전체 밑창 성분 비율을 폼 혼합비로 바꾸지 않기"
      ],
      "scienceExplanation": "킵서밋 맥스 공식 소개는 초임계 유체 공정으로 만든 100% ATPU Fastech+를 명시합니다. 킵스톰 엘리트 제품은 이중밀도 Fastech+를 확인해 주며 제조사 명의 배포 보도자료는 A-TPU 캐리어 안의 PEBA 인서트를 구체적으로 설명합니다. 이 자료는 독립 리뷰가 아닌 제조사 발표입니다. 전체 밑창 성분표의 TPU·PEBA 비율을 각 폼의 정확 배합으로 사용하지 않았습니다. 킵서밋의 전작 대비 에너지 리턴 21% 향상 문구는 시험법이 공개되지 않은 제조사 비교이며 킵스톰·모든 Fastech+의 공통 실측값이 아닙니다.",
      "usedInShoes": [
        "kiprun-kipstorm-elite",
        "kiprun-kipsummit-max"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 제조사 모델·세대의 명칭과 구성에 한정합니다. 원료·구조 미공개, 자료 유형, 변형 모델의 차이를 구분했습니다.",
        "sources": [
          {
            "title": "Kiprun — summitLanding",
            "url": "https://www.kiprun.com/en-GB/c/lp/kipsummit-max-maximum-comfort",
            "scope": "exact KipsummitMax official product landing"
          },
          {
            "title": "Kiprun — storm",
            "url": "https://www.kiprun.com/en-US/product/kipstorm-elite-men-s-carbon-plate-road-racing-shoes_362113--c269c382m8961381",
            "scope": "exact362113/id8961381 own technical section"
          },
          {
            "title": "Kiprun — kiprunRelease",
            "url": "https://www.endurancesportswire.com/kiprun-officially-launches-in-the-u-s-market/",
            "scope": "2026-04-06 release issued byKIPRUN with CompanyInfoKIPRUN and Decathlon PR contact; hosted off-brand domain"
          },
          {
            "title": "Kiprun — stormDecathlon",
            "url": "https://www.decathlon.co.uk/p/kiprun-kipstorm-elite-men-s-running-shoes-with-carbon-plate-green-yellow/362113/c266c132m9001586",
            "scope": "exact362113/id9001586 own features/design/composition"
          },
          {
            "title": "Kiprun — kiprunTechnology",
            "url": "https://www.kiprun.com/en-US/c/lp/innovations",
            "scope": "family definitions only; model assignments from exact PDPs"
          }
        ]
      }
    },
    {
      "id": "kiprun-carbon-plate",
      "name": "Carbon Plate",
      "nameKo": "카본 플레이트",
      "category": "plate",
      "description": "킵스톰 엘리트 정확 제품에서 확인한 카본판입니다. 킵서밋 맥스는 공식 카본화 항목에서 카본 없음으로 구분합니다.",
      "benefits": [
        "킵스톰 엘리트: 재설계된 특허 판 형상",
        "킵서밋 맥스의 지지 구조를 카본판으로 해석하지 않기",
        "다른 모델의 J형·HookPlate를 복사하지 않기"
      ],
      "scienceExplanation": "킵스톰 엘리트 제품은 재설계된 카본판과 뒤꿈치 경사·로커 형상을 설명합니다. 이번 정확 원문에서 판의 J형·갈고리 형상, 탄소섬유·수지 비율을 확정하지 못해 다른 킵런 모델의 설명을 가져오지 않았습니다. 킵서밋 맥스는 정확 데카트론 제품의 carbon shoes 항목이 without carbon이며 지지 플랫폼·비틀림 억제 요소의 언급만으로 카본판을 추가할 수 없습니다. 카본판 유무만으로 기록 향상·적정 페이스·가격 우위를 보장하지 않습니다.",
      "usedInShoes": [
        "kiprun-kipstorm-elite"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 제조사 모델·세대의 명칭과 구성에 한정합니다. 원료·구조 미공개, 자료 유형, 변형 모델의 차이를 구분했습니다.",
        "sources": [
          {
            "title": "Kiprun — stormDecathlon",
            "url": "https://www.decathlon.co.uk/p/kiprun-kipstorm-elite-men-s-running-shoes-with-carbon-plate-green-yellow/362113/c266c132m9001586",
            "scope": "exact362113/id9001586 own features/design/composition"
          },
          {
            "title": "Kiprun — storm",
            "url": "https://www.kiprun.com/en-US/product/kipstorm-elite-men-s-carbon-plate-road-racing-shoes_362113--c269c382m8961381",
            "scope": "exact362113/id8961381 own technical section"
          },
          {
            "title": "Kiprun — summitDecathlon",
            "url": "https://www.decathlon.co.uk/p/kiprun-kipsummit-max-men-s-trail-running-shoes-grey-black/362206/c208c382m8933583",
            "scope": "exact362206/id8933583 own design/composition/carbon field"
          },
          {
            "title": "Kiprun — summit",
            "url": "https://www.kiprun.com/en-GB/product/kipsummit-max-men-s-trail-running-shoes_362206--c208c382m8933583",
            "scope": "exact362206/id8933583 own technical section"
          },
          {
            "title": "Kiprun — kiprunTechnology",
            "url": "https://www.kiprun.com/en-US/c/lp/innovations",
            "scope": "family definitions only; model assignments from exact PDPs"
          }
        ]
      }
    }
  ]
};
