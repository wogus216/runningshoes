import type { Brand } from '@/types/brand';

// 2026-10-20 등록 — 출처: diadora.com(설립 연도 "since 1948", 본사 Via Montello 80, Caerano di San Marco – Treviso),
// diadora.com/en/kr/history, 러닝 테크 페이지(diadora.com/en/kr/tecnology-running),
// 한국 공식몰(diadorakorea.com) 푸터 라이선스 문구. 신발별 수치는 RunRepeat 랩 리뷰.
export const diadoraBrand: Brand = {
  "id": "diadora",
  "name": "Diadora",
  "nameKo": "디아도라",
  "tagline": "Premium Italian Sport",
  "description": "러닝화에 ANIMA·ANIMA N2·ANIMA PBX 폼 계열, Blushield 지지 구조, Duratech 5000 고무, DDATTIVO 인솔을 사용하는 브랜드입니다. 정확 제품 원문에서 확인한 N2는 EVA 초임계 발포 폼이며 가스 종류는 공개하지 않습니다. 기본 ANIMA의 비교 소재와 실제 원료도 구분했습니다.",
  "founded": 1948,
  "headquarters": "이탈리아 카에라노 디 산 마르코(트레비소)",
  "website": "https://www.diadorakorea.com",
  "technologies": [
    {
      "id": "diadora-anima-n2",
      "name": "ANIMA N2",
      "nameKo": "아니마 N2",
      "category": "midsole",
      "description": "아토모 스타·프리퀀자 2에서 EVA 초임계 발포 폼으로 확인했습니다. N2라는 이름만으로 주입 가스가 질소라고 확정하지 않습니다.",
      "benefits": [
        "정확 두 모델에 EVA SCF 명시",
        "질소 주입 여부는 미확인",
        "제조사 반응성·무게 비교와 독립 실측 구분"
      ],
      "scienceExplanation": "아토모 스타와 프리퀀자 2 공식 제품은 ANIMA N2를 EVA SCF(Super Critical Foaming)로 설명합니다. 읽은 제조사 본문은 가스 종류를 명시하지 않아 기존 질소 주입 단정은 제거했습니다. 반응성 40% 증가·미드솔 무게 40% 감소는 비교 대상과 시험법이 충분히 공개되지 않은 제조사 주장입니다. 이를 독립 에너지 리턴 실측이나 완성화 전체의 경량화로 쓰지 않습니다. 프리퀀자 2의 카본화와 비슷한 추진력 문구도 실제 카본판 탑재를 증명하는 내용은 아닙니다.",
      "usedInShoes": [
        "diadora-atomo-star",
        "diadora-frequenza-2"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 명칭·재료·구성 확인. 미공개 원료, 비교 조건, 과거 원문과 현재 접속 상태를 구분했습니다.",
        "sources": [
          {
            "title": "Diadora 공식 — atomo",
            "url": "https://www.diadora.com/atomo_star/101.181473_C7406.html",
            "scope": "ExactAtomoStar101.181473_C7406: ANIMA N2 explicitly EVA SCF(SuperCriticalFoaming), NylonAirMesh/microfibre, removableDDATTIVO, Duratech5000 acrossfootarea. Gasnotnamed. Useownproductsection, excludeotherproductcomparisonrows."
          },
          {
            "title": "Diadora 공식 — frequenza2",
            "url": "https://www.diadora.com/frequenza_2/101.181495_C0133.html",
            "scope": "ExactFrequenza2 current101.181495_C0133: ANIMA N2 EVA SCF, NylonAirMesh/microfibre, anatomical removableEVAinsole, softforefootrubber+Duratech5000 statedacrossfootarea. 72%rebound/carbonsimilarity aremanufacturerclaims, notplateproof."
          },
          {
            "title": "Diadora 공식 — diadora-tech",
            "url": "https://www.diadora.com/en/kr/tecnology-running",
            "scope": "Officialrunningtech directGET200: ANIMA +30%responsivenessvsEVAlight/-20%weight/about60%reactivity; N2+40%/-40%withnogasdisclosure; PBXsupercriticalfoaming+55%/-40%, carbonplatecombination80%ER; genericBlushieldSBS,Duratech,DDATTIVO. Namesarenotchemicalrecipes."
          }
        ]
      }
    },
    {
      "id": "diadora-anima",
      "name": "ANIMA",
      "nameKo": "아니마",
      "category": "midsole",
      "description": "누클레오 2와 미토스 블루실드 볼로 5에서 확인한 폼 명칭입니다. EVA light와의 성능 비교만으로 ANIMA의 원료를 EVA로 확정하지 않았습니다.",
      "benefits": [
        "누클레오 2·일반 볼로 5의 ANIMA 확인",
        "인솔의 EVA와 미드솔 원료는 별개",
        "제조사 비교율과 측정법 다른 랩 수치를 직접 대조하지 않기"
      ],
      "scienceExplanation": "공식 기술 안내는 EVA light 컴파운드 대비 반응성 향상과 무게 감소를 설명하지만 비교 소재가 곧 ANIMA의 고분자 배합이라는 뜻은 아닙니다. 인솔 표에 적힌 EVA도 미드솔 원료 근거로 사용하지 않았습니다. 제조사 반응성 약 60% 문구는 시험법이 공개되지 않아 다른 기관의 에너지 리턴 값과 높고 낮음을 바로 비교하지 않습니다. 볼로 5의 별도 2030 변형 소재를 일반 남성 모델로 옮기지도 않았습니다. 볼로 5 근거는 과거 정확 제품 원문이며 현재 판매·재고 확인과 구분합니다.",
      "usedInShoes": [
        "diadora-nucleo-2",
        "diadora-mythos-blushield-volo-5"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 명칭·재료·구성 확인. 미공개 원료, 비교 조건, 과거 원문과 현재 접속 상태를 구분했습니다.",
        "sources": [
          {
            "title": "Diadora 공식 — nucleo2",
            "url": "https://www.diadora.com/nucleo_2/101.181846_C0508.html",
            "scope": "ExactNucleo2 101.181846_C0508: ANIMA, removablemulti-densityDDATTIVO, NylonAirMesh/microfibre, Duratech5000 acrossfootarea. Asymmetricmidsolegeometry/basewidening; noBlushieldnameinownproductsection. EVA-lightiscomparisoncompoundnotexplicitANIMAbase."
          },
          {
            "title": "Diadora 공식 — volo5",
            "url": "https://www.diadora.com/mythos_blushield_volo_5/101.181488_C0204.html",
            "scope": "ExactlegacyVolo5 101.181488_C0204 cachedoriginal: ANIMA/Blushield, morphobase+S.B.S.core, removableDDATTIVO, AirMeshNylon/Microfiber/3Mdetails/EVAelastomerinsoletable, forefootblownsoftrubber/heelDuratech5000. CurrentdirectGETredirectedtogiftcategory, soexactbodyiswebcacheonly."
          },
          {
            "title": "Diadora 공식 — diadora-tech",
            "url": "https://www.diadora.com/en/kr/tecnology-running",
            "scope": "Officialrunningtech directGET200: ANIMA +30%responsivenessvsEVAlight/-20%weight/about60%reactivity; N2+40%/-40%withnogasdisclosure; PBXsupercriticalfoaming+55%/-40%, carbonplatecombination80%ER; genericBlushieldSBS,Duratech,DDATTIVO. Namesarenotchemicalrecipes."
          }
        ]
      }
    },
    {
      "id": "diadora-anima-pbx",
      "name": "ANIMA PBX",
      "nameKo": "아니마 PBX",
      "category": "midsole",
      "description": "공식 기술 안내가 초임계 발포로 설명하는 폼입니다. PBX라는 이름만으로 정확 고분자나 현재 네 모델의 적용을 추정하지 않습니다.",
      "benefits": [
        "공식 초임계 발포 설명 확인",
        "등록 네 모델의 적용은 미확인",
        "카본판 조합의 제조사 수치를 폼 단독 값으로 쓰지 않기"
      ],
      "scienceExplanation": "제조사는 ANIMA PBX의 초임계 발포 공정과 반응성·무게 비교를 설명합니다. 읽은 원문에서 고분자 배합과 비교 시험 조건을 확정하지 못했습니다. 카본판과 조합한 에너지 리턴 80%라는 문구를 순수 폼의 독립 실측값이나 실제 달리기 효율로 바꾸지 않았습니다. 이번 아토모 스타·프리퀀자 2·누클레오 2·볼로 5에서는 PBX라는 정확 적용 명칭을 확인하지 못해 연결을 비워두었습니다.",
      "usedInShoes": [],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 명칭·재료·구성 확인. 미공개 원료, 비교 조건, 과거 원문과 현재 접속 상태를 구분했습니다.",
        "sources": [
          {
            "title": "Diadora 공식 — diadora-tech",
            "url": "https://www.diadora.com/en/kr/tecnology-running",
            "scope": "Officialrunningtech directGET200: ANIMA +30%responsivenessvsEVAlight/-20%weight/about60%reactivity; N2+40%/-40%withnogasdisclosure; PBXsupercriticalfoaming+55%/-40%, carbonplatecombination80%ER; genericBlushieldSBS,Duratech,DDATTIVO. Namesarenotchemicalrecipes."
          }
        ]
      }
    },
    {
      "id": "diadora-blushield",
      "name": "Blushield",
      "nameKo": "블루실드",
      "category": "stability",
      "description": "일반 볼로 5에서 발 형태의 베이스와 S.B.S. 코어로 설명한 지지 구조입니다. 구조의 설계 의도와 임상 효과는 구분합니다.",
      "benefits": [
        "볼로 5: morphobase와 S.B.S. 코어",
        "누클레오라는 모델명만 보고 적용하지 않기",
        "좌우 움직임·부상 결과 보장 제외"
      ],
      "scienceExplanation": "볼로 5 정확 과거 제품 원문은 발 형태의 morphobase와 S.B.S.로 표기한 코어를 설명합니다. 원문에 약어의 확장 설명이 없어 임의의 화학명으로 풀어 쓰지 않았습니다. 제조사는 비대칭 움직임을 줄이는 설계 목표를 제시하지만 모든 발의 정렬 교정이나 임상 부상 예방을 입증한 결과는 아닙니다. 누클레오 2의 비대칭 미드솔 형상을 Blushield 명칭의 확인으로 대체하지 않았습니다. 현재 볼로 5 주소의 카테고리 이동은 단종을 증명하지 않으며 적용 근거와 판매 상태를 구분했습니다.",
      "usedInShoes": [
        "diadora-mythos-blushield-volo-5"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 명칭·재료·구성 확인. 미공개 원료, 비교 조건, 과거 원문과 현재 접속 상태를 구분했습니다.",
        "sources": [
          {
            "title": "Diadora 공식 — volo5",
            "url": "https://www.diadora.com/mythos_blushield_volo_5/101.181488_C0204.html",
            "scope": "ExactlegacyVolo5 101.181488_C0204 cachedoriginal: ANIMA/Blushield, morphobase+S.B.S.core, removableDDATTIVO, AirMeshNylon/Microfiber/3Mdetails/EVAelastomerinsoletable, forefootblownsoftrubber/heelDuratech5000. CurrentdirectGETredirectedtogiftcategory, soexactbodyiswebcacheonly."
          },
          {
            "title": "Diadora 공식 — diadora-tech",
            "url": "https://www.diadora.com/en/kr/tecnology-running",
            "scope": "Officialrunningtech directGET200: ANIMA +30%responsivenessvsEVAlight/-20%weight/about60%reactivity; N2+40%/-40%withnogasdisclosure; PBXsupercriticalfoaming+55%/-40%, carbonplatecombination80%ER; genericBlushieldSBS,Duratech,DDATTIVO. Namesarenotchemicalrecipes."
          },
          {
            "title": "Diadora 공식 — nucleo2",
            "url": "https://www.diadora.com/nucleo_2/101.181846_C0508.html",
            "scope": "ExactNucleo2 101.181846_C0508: ANIMA, removablemulti-densityDDATTIVO, NylonAirMesh/microfibre, Duratech5000 acrossfootarea. Asymmetricmidsolegeometry/basewidening; noBlushieldnameinownproductsection. EVA-lightiscomparisoncompoundnotexplicitANIMAbase."
          }
        ]
      }
    },
    {
      "id": "diadora-duratech-5000",
      "name": "Duratech 5000",
      "nameKo": "듀라테크 5000",
      "category": "outsole",
      "description": "네 모델에서 확인한 마모 저항 지향 고무 컴파운드입니다. 고무가 덮는 위치는 제품에 따라 다릅니다.",
      "benefits": [
        "아토모·프리퀀자 2·누클레오 2·볼로 5 명칭 확인",
        "볼로 5: 뒤꿈치 Duratech·앞발 연질 고무",
        "상표만으로 고정 거리의 수명을 보장하지 않기"
      ],
      "scienceExplanation": "제조사 기술 안내는 Duratech 5000을 내마모성을 목표로 한 특수 고무로 설명합니다. 아토모 스타·프리퀀자 2·누클레오 2는 제품별 고무 배치 문구를 확인했지만 볼로 5는 뒤꿈치 Duratech와 앞발의 부드러운 발포 고무를 나누므로 모두 동일하게 덮였다고 설명하지 않습니다. 특정 마모 시험 결과를 다시 확인하지 않은 상태에서 브랜드 전체 수명으로 확대하지 않았습니다. 실제 마모·접지는 러너, 지면, 사용 상태에 따라 달라집니다.",
      "usedInShoes": [
        "diadora-atomo-star",
        "diadora-frequenza-2",
        "diadora-nucleo-2",
        "diadora-mythos-blushield-volo-5"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 명칭·재료·구성 확인. 미공개 원료, 비교 조건, 과거 원문과 현재 접속 상태를 구분했습니다.",
        "sources": [
          {
            "title": "Diadora 공식 — atomo",
            "url": "https://www.diadora.com/atomo_star/101.181473_C7406.html",
            "scope": "ExactAtomoStar101.181473_C7406: ANIMA N2 explicitly EVA SCF(SuperCriticalFoaming), NylonAirMesh/microfibre, removableDDATTIVO, Duratech5000 acrossfootarea. Gasnotnamed. Useownproductsection, excludeotherproductcomparisonrows."
          },
          {
            "title": "Diadora 공식 — frequenza2",
            "url": "https://www.diadora.com/frequenza_2/101.181495_C0133.html",
            "scope": "ExactFrequenza2 current101.181495_C0133: ANIMA N2 EVA SCF, NylonAirMesh/microfibre, anatomical removableEVAinsole, softforefootrubber+Duratech5000 statedacrossfootarea. 72%rebound/carbonsimilarity aremanufacturerclaims, notplateproof."
          },
          {
            "title": "Diadora 공식 — nucleo2",
            "url": "https://www.diadora.com/nucleo_2/101.181846_C0508.html",
            "scope": "ExactNucleo2 101.181846_C0508: ANIMA, removablemulti-densityDDATTIVO, NylonAirMesh/microfibre, Duratech5000 acrossfootarea. Asymmetricmidsolegeometry/basewidening; noBlushieldnameinownproductsection. EVA-lightiscomparisoncompoundnotexplicitANIMAbase."
          },
          {
            "title": "Diadora 공식 — volo5",
            "url": "https://www.diadora.com/mythos_blushield_volo_5/101.181488_C0204.html",
            "scope": "ExactlegacyVolo5 101.181488_C0204 cachedoriginal: ANIMA/Blushield, morphobase+S.B.S.core, removableDDATTIVO, AirMeshNylon/Microfiber/3Mdetails/EVAelastomerinsoletable, forefootblownsoftrubber/heelDuratech5000. CurrentdirectGETredirectedtogiftcategory, soexactbodyiswebcacheonly."
          },
          {
            "title": "Diadora 공식 — diadora-tech",
            "url": "https://www.diadora.com/en/kr/tecnology-running",
            "scope": "Officialrunningtech directGET200: ANIMA +30%responsivenessvsEVAlight/-20%weight/about60%reactivity; N2+40%/-40%withnogasdisclosure; PBXsupercriticalfoaming+55%/-40%, carbonplatecombination80%ER; genericBlushieldSBS,Duratech,DDATTIVO. Namesarenotchemicalrecipes."
          }
        ]
      }
    },
    {
      "id": "diadora-ddattivo",
      "name": "DDATTIVO",
      "nameKo": "디아띠보",
      "category": "cushioning",
      "description": "아토모 스타·누클레오 2·볼로 5에서 확인한 탈착형 인솔 명칭입니다. 프리퀀자 2의 EVA 인솔과 구분했습니다.",
      "benefits": [
        "누클레오 2의 다중밀도 DDATTIVO 추가 확인",
        "고밀도 폼과 통기·흡수 설계의 제조사 설명",
        "인솔 재료와 미드솔 폼을 구분"
      ],
      "scienceExplanation": "공식 제품은 아토모 스타·볼로 5의 탈착형 DDATTIVO와 누클레오 2의 다중밀도 DDATTIVO를 명시합니다. 기술 안내의 고밀도 폼·통기 구멍·흡수 및 방출 관련 설명은 제조사의 설계 설명이며 정확 고분자 배합이나 임상 항균 효과를 확인한 것은 아닙니다. 프리퀀자 2는 해부학적 EVA 인솔을 명시하지만 DDATTIVO 상표를 확인하지 못해 연결하지 않았습니다. 특정 인솔의 두께를 다른 모델·전체 제품 공통 두께로 확대하지 않습니다.",
      "usedInShoes": [
        "diadora-atomo-star",
        "diadora-nucleo-2",
        "diadora-mythos-blushield-volo-5"
      ],
      "verification": {
        "checkedAt": "2026-11-10",
        "scope": "정확 모델·세대의 제조사 명칭·재료·구성 확인. 미공개 원료, 비교 조건, 과거 원문과 현재 접속 상태를 구분했습니다.",
        "sources": [
          {
            "title": "Diadora 공식 — atomo",
            "url": "https://www.diadora.com/atomo_star/101.181473_C7406.html",
            "scope": "ExactAtomoStar101.181473_C7406: ANIMA N2 explicitly EVA SCF(SuperCriticalFoaming), NylonAirMesh/microfibre, removableDDATTIVO, Duratech5000 acrossfootarea. Gasnotnamed. Useownproductsection, excludeotherproductcomparisonrows."
          },
          {
            "title": "Diadora 공식 — nucleo2",
            "url": "https://www.diadora.com/nucleo_2/101.181846_C0508.html",
            "scope": "ExactNucleo2 101.181846_C0508: ANIMA, removablemulti-densityDDATTIVO, NylonAirMesh/microfibre, Duratech5000 acrossfootarea. Asymmetricmidsolegeometry/basewidening; noBlushieldnameinownproductsection. EVA-lightiscomparisoncompoundnotexplicitANIMAbase."
          },
          {
            "title": "Diadora 공식 — volo5",
            "url": "https://www.diadora.com/mythos_blushield_volo_5/101.181488_C0204.html",
            "scope": "ExactlegacyVolo5 101.181488_C0204 cachedoriginal: ANIMA/Blushield, morphobase+S.B.S.core, removableDDATTIVO, AirMeshNylon/Microfiber/3Mdetails/EVAelastomerinsoletable, forefootblownsoftrubber/heelDuratech5000. CurrentdirectGETredirectedtogiftcategory, soexactbodyiswebcacheonly."
          },
          {
            "title": "Diadora 공식 — frequenza2",
            "url": "https://www.diadora.com/frequenza_2/101.181495_C0133.html",
            "scope": "ExactFrequenza2 current101.181495_C0133: ANIMA N2 EVA SCF, NylonAirMesh/microfibre, anatomical removableEVAinsole, softforefootrubber+Duratech5000 statedacrossfootarea. 72%rebound/carbonsimilarity aremanufacturerclaims, notplateproof."
          },
          {
            "title": "Diadora 공식 — diadora-tech",
            "url": "https://www.diadora.com/en/kr/tecnology-running",
            "scope": "Officialrunningtech directGET200: ANIMA +30%responsivenessvsEVAlight/-20%weight/about60%reactivity; N2+40%/-40%withnogasdisclosure; PBXsupercriticalfoaming+55%/-40%, carbonplatecombination80%ER; genericBlushieldSBS,Duratech,DDATTIVO. Namesarenotchemicalrecipes."
          }
        ]
      }
    }
  ]
};
