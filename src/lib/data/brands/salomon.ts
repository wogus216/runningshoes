import type { Brand } from '@/types/brand';

export const salomonBrand: Brand = {
  "id": "salomon",
  "name": "Salomon",
  "nameKo": "살로몬",
  "tagline": "Time to Play",
  "description": "펄사·S/LAB 펄사·울트라 글라이드 등 트레일러닝 라인에 contaGRIP, quickLACE, optiFOAM 계열을 사용하는 브랜드입니다. 일반 펄사의 optiFOAM²와 S/LAB 펄사 4의 이중 폼, 울트라 글라이드 4의 EVA를 구분해 안내합니다. 확인되지 않은 시장 순위는 제외했습니다.",
  "founded": 1947,
  "headquarters": "프랑스 안시(Annecy)",
  "website": "https://salomon.co.kr",
  "technologies": [
    {
      "id": "salomon-contagrip",
      "name": "Contagrip",
      "nameKo": "콘타그립",
      "category": "outsole",
      "description": "이번 세 정확 모델에서 All-Terrain contaGRIP 명칭을 확인했습니다. 고무와 러그의 모델별 설계는 하나의 고정 배합으로 설명하지 않습니다.",
      "benefits": [
        "펄사·S/LAB 펄사 4·울트라 글라이드 4 명칭 확인",
        "미확인 MA·TA 약어 풀이 제외",
        "젖은 노면에서의 미끄럼 방지 보장과 구분"
      ],
      "scienceExplanation": "일반 펄사 L47887800, S/LAB 펄사 4, 울트라 글라이드 4 제품은 All-Terrain contaGRIP을 명시합니다. 읽은 정확 원문에서 고무의 상세 배합이나 모든 모델의 동일 러그 형상을 확인한 것은 아닙니다. 기존 MA를 Mud-Aggressive, TA를 All-Terrain으로 풀이한 미확인 분류는 제거했습니다. 제조사의 혼합 지형 접지 설계를 눈·진흙·젖은 암반에서 항상 안전하다는 보장으로 쓰지 않습니다. 고무 마모와 노면 상태를 함께 확인해야 합니다.",
      "usedInShoes": [
        "salomon-pulsar",
        "salomon-s-lab-pulsar-4",
        "salomon-ultra-glide-4"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 제조사 모델·세대의 명칭과 구성에 한정합니다. 원료·구조 미공개, 자료 유형, 변형 모델의 차이를 구분했습니다.",
        "sources": [
          {
            "title": "Salomon — pulsar",
            "url": "https://www.salomon.com/en-us/product/pulsar-li8495/L47887800",
            "scope": "exact PULSAR L47887800,not S/LAB/PulsarTrail/Pro"
          },
          {
            "title": "Salomon — slab",
            "url": "https://www.salomon.com/en-gb/product/s-lab-pulsar-4-li8091",
            "scope": "exact S/LAB Pulsar4 L47770300 Features/Fabrics"
          },
          {
            "title": "Salomon — ultraGlide",
            "url": "https://www.salomon.com/en-us/product/ultra-glide-4-li8842/L49141200?sizeId=L49141200027",
            "scope": "exact UltraGlide4 L49141200 Features/Fabrics"
          }
        ]
      }
    },
    {
      "id": "salomon-optifoam",
      "name": "optiFOAM",
      "nameKo": "옵티폼",
      "category": "midsole",
      "description": "optiFOAM·optiFOAM+·optiFOAM²는 정확 제품별로 구분해야 하는 폼 계열입니다. 명칭만으로 모두 eTPU나 PEBA라고 확정하지 않습니다.",
      "benefits": [
        "일반 펄사: optiFOAM², 원료 미확인",
        "S/LAB 펄사 4: EVA와 PEBA/EVA 혼합의 이중 폼",
        "울트라 글라이드 4: optiFOAM EVA"
      ],
      "scienceExplanation": "S/LAB 펄사 4 공식 제품은 optiFOAM을 EVA, optiFOAM+를 PEBA/EVA mix로 설명하지만 혼합 비율은 공개하지 않습니다. 울트라 글라이드 4는 EVA optiFOAM을 명시합니다. 반면 일반 펄사 L47887800의 optiFOAM²는 이번 원문에서 고분자를 확인하지 못해 100% eTPU라는 기존 단정을 제거했습니다. Energy Foam·Energy Surge와 세대 차이를 무시하고 모두 같은 배합이라고 합치지 않았습니다. 같은 상표 계열이 동일 내구성·반응성·최적 거리를 뜻하는 것은 아닙니다.",
      "usedInShoes": [
        "salomon-pulsar",
        "salomon-s-lab-pulsar-4",
        "salomon-ultra-glide-4"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 제조사 모델·세대의 명칭과 구성에 한정합니다. 원료·구조 미공개, 자료 유형, 변형 모델의 차이를 구분했습니다.",
        "sources": [
          {
            "title": "Salomon — pulsar",
            "url": "https://www.salomon.com/en-us/product/pulsar-li8495/L47887800",
            "scope": "exact PULSAR L47887800,not S/LAB/PulsarTrail/Pro"
          },
          {
            "title": "Salomon — slab",
            "url": "https://www.salomon.com/en-gb/product/s-lab-pulsar-4-li8091",
            "scope": "exact S/LAB Pulsar4 L47770300 Features/Fabrics"
          },
          {
            "title": "Salomon — ultraGlide",
            "url": "https://www.salomon.com/en-us/product/ultra-glide-4-li8842/L49141200?sizeId=L49141200027",
            "scope": "exact UltraGlide4 L49141200 Features/Fabrics"
          }
        ]
      }
    },
    {
      "id": "salomon-quicklace",
      "name": "quickLACE",
      "nameKo": "퀵레이스",
      "category": "upper",
      "description": "끈을 한 번 당겨 조절하는 레이싱 시스템입니다. 이번 세 모델에서 확인했으며, 코드 소재와 발 고정 효과를 과장하지 않습니다.",
      "benefits": [
        "세 모델의 quickLACE 명칭 확인",
        "S/LAB 펄사 4의 LacePocket 별도 확인",
        "SensiFit·endoFit과 끈 시스템을 구분"
      ],
      "scienceExplanation": "정확 제품들은 quickLACE를 한 번 당겨 조절하는 최소한의 끈 시스템으로 설명합니다. S/LAB 펄사 4는 남는 끈을 넣는 LacePocket도 명시합니다. 읽은 원문은 코드가 케블라라는 점이나 케블라와 같은 강도라는 수치를 확인해 주지 않아 기존 표현을 제거했습니다. SensiFit의 외부 지지와 endoFit의 내부 슬리브는 끈 자체와 별도 요소입니다. 발 압력이 언제나 균일해지거나 끈 풀림·걸림 위험이 없어지고 내리막에서 발이 전혀 움직이지 않는다는 보장은 하지 않습니다.",
      "usedInShoes": [
        "salomon-pulsar",
        "salomon-s-lab-pulsar-4",
        "salomon-ultra-glide-4"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 제조사 모델·세대의 명칭과 구성에 한정합니다. 원료·구조 미공개, 자료 유형, 변형 모델의 차이를 구분했습니다.",
        "sources": [
          {
            "title": "Salomon — pulsar",
            "url": "https://www.salomon.com/en-us/product/pulsar-li8495/L47887800",
            "scope": "exact PULSAR L47887800,not S/LAB/PulsarTrail/Pro"
          },
          {
            "title": "Salomon — slab",
            "url": "https://www.salomon.com/en-gb/product/s-lab-pulsar-4-li8091",
            "scope": "exact S/LAB Pulsar4 L47770300 Features/Fabrics"
          },
          {
            "title": "Salomon — ultraGlide",
            "url": "https://www.salomon.com/en-us/product/ultra-glide-4-li8842/L49141200?sizeId=L49141200027",
            "scope": "exact UltraGlide4 L49141200 Features/Fabrics"
          }
        ]
      }
    },
    {
      "id": "salomon-relievesphere",
      "name": "RelieveSphere",
      "nameKo": "릴리브스피어",
      "category": "outsole",
      "description": "울트라 글라이드 4에서 확인한 물결 모양 아웃솔 형상입니다. 미드솔 내부에 넣은 별도 충격 흡수 부품으로 설명하지 않습니다.",
      "benefits": [
        "울트라 글라이드 4: wavy outsole geometry",
        "압력을 분산하려는 제조사 설계 의도",
        "특정 울트라 거리·회복·임상 효과 보장 제외"
      ],
      "scienceExplanation": "울트라 글라이드 4 공식 원문은 relieveSPHERE를 아웃솔의 물결 형태를 이용해 압력을 분산하려는 설계로 설명합니다. 미드솔 안의 캡슐이나 고유 고분자 소재로 바꾸어 설명하지 않았습니다. 바위 위가 평지보다 편하다는 출처 불명 평가와 50~100km에 적합하다는 미확인 거리 처방도 제거했습니다. 제조사 설계 목표와 실제 발바닥 피로·통증·부상 결과는 별개이며 노면과 러너에 따라 체감은 달라질 수 있습니다.",
      "usedInShoes": [
        "salomon-ultra-glide-4"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 제조사 모델·세대의 명칭과 구성에 한정합니다. 원료·구조 미공개, 자료 유형, 변형 모델의 차이를 구분했습니다.",
        "sources": [
          {
            "title": "Salomon — ultraGlide",
            "url": "https://www.salomon.com/en-us/product/ultra-glide-4-li8842/L49141200?sizeId=L49141200027",
            "scope": "exact UltraGlide4 L49141200 Features/Fabrics"
          }
        ]
      }
    }
  ]
};
