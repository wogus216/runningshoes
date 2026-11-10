import type { Brand } from '@/types/brand';

export const merrellBrand: Brand = {
  "id": "merrell",
  "name": "Merrell",
  "nameKo": "머렐",
  "tagline": "The simple power of being outside",
  "description": "어질리티 피크, 트레일 글러브, MTL 스피드아크 피크 등 트레일러닝 제품을 만드는 아웃도어 브랜드입니다. FloatPro 폼, FlexPlate 판, FLEXconnect 홈 설계, Vibram 고무 변형은 서로 구분해야 합니다. 정확 세대에서 확인한 부품과 소재를 아래에 정리했습니다.",
  "founded": 1981,
  "website": "https://merrellkorea.co.kr",
  "technologies": [
    {
      "id": "merrell-floatpro",
      "name": "FloatPro",
      "nameKo": "플로트프로",
      "category": "midsole",
      "description": "어질리티 피크 6·트레일 글러브 8·MTL 스피드아크 피크에서 확인한 경량 폼 명칭입니다. 제조사 원문에서 정확 고분자 배합은 확인하지 못했습니다.",
      "benefits": [
        "세 모델의 FloatPro 적용 확인",
        "스피드아크 피크: 별도 PEBA 폼과 조합",
        "PEBA·FloatPro 상하 배치는 미확인"
      ],
      "scienceExplanation": "머렐의 공식 기술 안내는 자체 경량 폼으로 설명하지만 이번 정확 제품의 원료를 EVA로 확정하지는 않습니다. 스피드아크 피크는 FloatPro와 PEBA 조합을 확인했으나 읽은 원문이 두 폼의 상하 위치를 명시하지 않아 기존 배치 단정은 제거했습니다. 이 제품의 TPEE는 풋베드 설명으로 미드솔 원료와 별개입니다. 트레일 글러브 8의 EVA 인솔이나 어질리티 6의 PU 풋베드도 FloatPro 원료 근거로 옮기지 않습니다. 동일 상표가 동일 두께·밀도·독립 에너지 리턴을 뜻하지 않습니다.",
      "usedInShoes": [
        "merrell-agility-peak-6",
        "merrell-trail-glove-8",
        "merrell-mtl-speedarc-peak"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 명칭·재료·구성 확인. 미공개 원료, 비교 조건, 과거 원문과 현재 접속 상태를 구분했습니다.",
        "sources": [
          {
            "title": "Merrell 공식 — agility6",
            "url": "https://www.merrell.com/US/en/agility-peak-6/60949M.html",
            "scope": "ExactregularAgilityPeak6 men60949M: FloatPro, full-lengthFLEXconnectdual-directional grooves, forefootrockplate/underfootshieldwithmaterialundisclosed, Megagrip+TractionLug, mesh/synthetic/TPUupper,5%recycledPUremovablefootbed. UpperTPUisnotplateTPU."
          },
          {
            "title": "Merrell 공식 — glove8",
            "url": "https://www.merrell.com/US/en/trail-glove-8/61055M.html",
            "scope": "ExactTrailGlove8 men61055M: thinFloatPro, FlexConnect, MerrellBarefoot2, VibramTC5+, mesh/TPUupper,burritotongue, integratedEVAinsole30%recycled,0mmdrop. InsoleEVAdoesnotdiscloseFloatProchemistry."
          },
          {
            "title": "Merrell 공식 — speedarc-no",
            "url": "https://www.merrell.com/NO/en_NO/mtl-speedarc-peak/61332U.html",
            "scope": "ExactMTLSpeedarcPeak61332U currentJ00005583: CarbonFlexPlate, dualdensityFloatProandPEBAfoam, MatryxKevlar/high-tenacitypolyamide singlelayer, TPEEfootbed, MegagripElite. Noofficiallayerposition,platefraction/length disclosed."
          },
          {
            "title": "Merrell 공식 — speedarc-se",
            "url": "https://www.merrell.com/SE/se_SE/mtl-speedarc-peak/61332U.html",
            "scope": "Exact61332U SE webbody explicitlySpeedARCmidsoleSystemwithFloatPro+PEBA,CarbonFlexPlate,MatryxKevlar/polyamide,TPEE,Eliteoutsole. DirectHTMLlistsseparateFloatPro/PEBAbulletswithoutlayerpositions; preservelabelvariance."
          },
          {
            "title": "Merrell 공식 — merrell-tech",
            "url": "https://www.merrell.com/US/en/technologies/",
            "scope": "Officialgenerictech: FloatProownlightweightfoam(noEVAformula), FlexPlateembeddedlightweightplate(nofixedmaterial), FlexConnectgroove-basedmidsole, rockplateprotectivelayer, MatryxKevlarreinforcement; VibramMegagrip/TC5+/TractionLug distinct. Morphexnotfound."
          }
        ]
      }
    },
    {
      "id": "merrell-flexplate",
      "name": "FlexPlate",
      "nameKo": "플렉스플레이트",
      "category": "plate",
      "description": "MTL 스피드아크 피크에서 Carbon FlexPlate라는 정확 명칭을 확인했습니다. FLEXconnect 홈 설계와 일반 보호판은 별개입니다.",
      "benefits": [
        "스피드아크 피크: Carbon FlexPlate",
        "어질리티 6의 앞발 보호판은 정확 상표·재질 미확인",
        "판 길이·갈래를 제조사 미공개 상태에서 단정하지 않기"
      ],
      "scienceExplanation": "일반 기술 안내는 FlexPlate를 지지·보호를 목표로 미드솔에 넣는 경량 판으로 설명합니다. 스피드아크 피크 정확 제품은 Carbon FlexPlate를 명시하지만 길이·갈래·수지 배합은 이번 제조사 원문에서 확인하지 못했습니다. 어질리티 피크 6의 앞발 rock plate는 확인했으나 FlexPlate 상표나 카본·TPU 재질의 확인으로 바꾸지 않았습니다. 어질리티 6와 트레일 글러브 8의 FLEXconnect는 홈을 이용한 미드솔 설계이므로 판과 구분합니다. 이전 랩 수치·절개 관찰을 이번 제조사 확인 결과로 섞지 않았습니다.",
      "usedInShoes": [
        "merrell-mtl-speedarc-peak"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 명칭·재료·구성 확인. 미공개 원료, 비교 조건, 과거 원문과 현재 접속 상태를 구분했습니다.",
        "sources": [
          {
            "title": "Merrell 공식 — speedarc-no",
            "url": "https://www.merrell.com/NO/en_NO/mtl-speedarc-peak/61332U.html",
            "scope": "ExactMTLSpeedarcPeak61332U currentJ00005583: CarbonFlexPlate, dualdensityFloatProandPEBAfoam, MatryxKevlar/high-tenacitypolyamide singlelayer, TPEEfootbed, MegagripElite. Noofficiallayerposition,platefraction/length disclosed."
          },
          {
            "title": "Merrell 공식 — speedarc-se",
            "url": "https://www.merrell.com/SE/se_SE/mtl-speedarc-peak/61332U.html",
            "scope": "Exact61332U SE webbody explicitlySpeedARCmidsoleSystemwithFloatPro+PEBA,CarbonFlexPlate,MatryxKevlar/polyamide,TPEE,Eliteoutsole. DirectHTMLlistsseparateFloatPro/PEBAbulletswithoutlayerpositions; preservelabelvariance."
          },
          {
            "title": "Merrell 공식 — agility6",
            "url": "https://www.merrell.com/US/en/agility-peak-6/60949M.html",
            "scope": "ExactregularAgilityPeak6 men60949M: FloatPro, full-lengthFLEXconnectdual-directional grooves, forefootrockplate/underfootshieldwithmaterialundisclosed, Megagrip+TractionLug, mesh/synthetic/TPUupper,5%recycledPUremovablefootbed. UpperTPUisnotplateTPU."
          },
          {
            "title": "Merrell 공식 — glove8",
            "url": "https://www.merrell.com/US/en/trail-glove-8/61055M.html",
            "scope": "ExactTrailGlove8 men61055M: thinFloatPro, FlexConnect, MerrellBarefoot2, VibramTC5+, mesh/TPUupper,burritotongue, integratedEVAinsole30%recycled,0mmdrop. InsoleEVAdoesnotdiscloseFloatProchemistry."
          },
          {
            "title": "Merrell 공식 — merrell-tech",
            "url": "https://www.merrell.com/US/en/technologies/",
            "scope": "Officialgenerictech: FloatProownlightweightfoam(noEVAformula), FlexPlateembeddedlightweightplate(nofixedmaterial), FlexConnectgroove-basedmidsole, rockplateprotectivelayer, MatryxKevlarreinforcement; VibramMegagrip/TC5+/TractionLug distinct. Morphexnotfound."
          }
        ]
      }
    },
    {
      "id": "merrell-vibram",
      "name": "Vibram Outsole (Megagrip · TC5+ · Traction Lug)",
      "nameKo": "비브람 아웃솔",
      "category": "outsole",
      "description": "모델에 따라 Megagrip·TC5+·Megagrip Elite를 구분해 쓰는 Vibram 고무 아웃솔입니다. 러그 설계도 정확 모델별로 확인합니다.",
      "benefits": [
        "어질리티 6: Megagrip·Traction Lug",
        "트레일 글러브 8: TC5+",
        "MTL 스피드아크 피크: Megagrip Elite"
      ],
      "scienceExplanation": "공식 어질리티 피크 6는 Megagrip과 Traction Lug, 트레일 글러브 8은 TC5+, MTL 스피드아크 피크는 Megagrip Elite를 명시합니다. 모든 Vibram 적용 제품에 Elite 컴파운드나 Traction Lug가 들어간다고 일반화하지 않습니다. 제조사 기술 안내가 설명하는 마찰·배출·접지 설계와 실제 젖은 바위·진흙에서의 안전은 구분해야 합니다. 다시 원문을 대조하지 않은 랩 마찰계수·마모 수치를 브랜드 공통 값으로 사용하지 않았습니다. 정확 고무 배합이나 동일 거리의 수명을 확인한 범위는 아닙니다.",
      "usedInShoes": [
        "merrell-agility-peak-6",
        "merrell-trail-glove-8",
        "merrell-mtl-speedarc-peak"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 명칭·재료·구성 확인. 미공개 원료, 비교 조건, 과거 원문과 현재 접속 상태를 구분했습니다.",
        "sources": [
          {
            "title": "Merrell 공식 — agility6",
            "url": "https://www.merrell.com/US/en/agility-peak-6/60949M.html",
            "scope": "ExactregularAgilityPeak6 men60949M: FloatPro, full-lengthFLEXconnectdual-directional grooves, forefootrockplate/underfootshieldwithmaterialundisclosed, Megagrip+TractionLug, mesh/synthetic/TPUupper,5%recycledPUremovablefootbed. UpperTPUisnotplateTPU."
          },
          {
            "title": "Merrell 공식 — glove8",
            "url": "https://www.merrell.com/US/en/trail-glove-8/61055M.html",
            "scope": "ExactTrailGlove8 men61055M: thinFloatPro, FlexConnect, MerrellBarefoot2, VibramTC5+, mesh/TPUupper,burritotongue, integratedEVAinsole30%recycled,0mmdrop. InsoleEVAdoesnotdiscloseFloatProchemistry."
          },
          {
            "title": "Merrell 공식 — speedarc-no",
            "url": "https://www.merrell.com/NO/en_NO/mtl-speedarc-peak/61332U.html",
            "scope": "ExactMTLSpeedarcPeak61332U currentJ00005583: CarbonFlexPlate, dualdensityFloatProandPEBAfoam, MatryxKevlar/high-tenacitypolyamide singlelayer, TPEEfootbed, MegagripElite. Noofficiallayerposition,platefraction/length disclosed."
          },
          {
            "title": "Merrell 공식 — merrell-tech",
            "url": "https://www.merrell.com/US/en/technologies/",
            "scope": "Officialgenerictech: FloatProownlightweightfoam(noEVAformula), FlexPlateembeddedlightweightplate(nofixedmaterial), FlexConnectgroove-basedmidsole, rockplateprotectivelayer, MatryxKevlarreinforcement; VibramMegagrip/TC5+/TractionLug distinct. Morphexnotfound."
          },
          {
            "title": "Merrell 공식 — agility6-press",
            "url": "https://www.merrell.com/US/en/merrell-expands-skyrunner-world-series-partnership-with-us-national-series-launch-agility-peak-6/",
            "scope": "Dated2026-02-06officialAgilityPeak6launch: updatedFloatPro/full-lengthFLEXconnect, Megagrip5mmlugs, engineeredmesh/reinforcedtoe/gussetedtongue. Standardversion, notGTX/BOAcollaboration."
          }
        ]
      }
    },
    {
      "id": "merrell-matryx",
      "name": "Matryx",
      "nameKo": "매트릭스",
      "category": "upper",
      "description": "MTL 스피드아크 피크에서 케블라와 고강도 폴리아미드로 짠 단일층 어퍼로 확인했습니다. 정확 섬유 비율은 공개하지 않습니다.",
      "benefits": [
        "정확 제품의 Kevlar·고강도 polyamide 명시",
        "케블라 보강과 카본판은 별도 부품",
        "통기·건조 성능을 다른 Matryx 모델에 복사하지 않기"
      ],
      "scienceExplanation": "스피드아크 피크의 노르웨이·스웨덴 공식 제품은 Kevlar와 고강도 polyamide 멀티필라멘트를 사용한 단일층 Matryx 어퍼를 설명합니다. 고강도 섬유로 보강한다는 제조사 설명과 모든 사용 조건에서의 찢김 방지·쾌적함 보장은 다릅니다. 같은 페이지의 일반 가죽 관리 문구를 실제 가죽 어퍼 구성으로 바꾸지 않았습니다. 원문이 공개하지 않은 섬유 비율이나 다른 세대의 통기·건조 실측치를 이 소재 전체의 속성으로 붙이지 않았습니다.",
      "usedInShoes": [
        "merrell-mtl-speedarc-peak"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 명칭·재료·구성 확인. 미공개 원료, 비교 조건, 과거 원문과 현재 접속 상태를 구분했습니다.",
        "sources": [
          {
            "title": "Merrell 공식 — speedarc-no",
            "url": "https://www.merrell.com/NO/en_NO/mtl-speedarc-peak/61332U.html",
            "scope": "ExactMTLSpeedarcPeak61332U currentJ00005583: CarbonFlexPlate, dualdensityFloatProandPEBAfoam, MatryxKevlar/high-tenacitypolyamide singlelayer, TPEEfootbed, MegagripElite. Noofficiallayerposition,platefraction/length disclosed."
          },
          {
            "title": "Merrell 공식 — speedarc-se",
            "url": "https://www.merrell.com/SE/se_SE/mtl-speedarc-peak/61332U.html",
            "scope": "Exact61332U SE webbody explicitlySpeedARCmidsoleSystemwithFloatPro+PEBA,CarbonFlexPlate,MatryxKevlar/polyamide,TPEE,Eliteoutsole. DirectHTMLlistsseparateFloatPro/PEBAbulletswithoutlayerpositions; preservelabelvariance."
          },
          {
            "title": "Merrell 공식 — merrell-tech",
            "url": "https://www.merrell.com/US/en/technologies/",
            "scope": "Officialgenerictech: FloatProownlightweightfoam(noEVAformula), FlexPlateembeddedlightweightplate(nofixedmaterial), FlexConnectgroove-basedmidsole, rockplateprotectivelayer, MatryxKevlarreinforcement; VibramMegagrip/TC5+/TractionLug distinct. Morphexnotfound."
          }
        ]
      }
    }
  ]
};
