import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
    id: "nike-structure-26",
    slug: "nike-structure-26",
    brand: "Nike",
    name: "스트럭처 26",
  imageCaption: "structure 26 사진(HJ1102-119 · White/Blue Hero/Pure Platinum/Black)은 Nike 공개 상품 데이터와 모델·색상·구도를 대조했습니다. 사진 품번을 한국 판매 규격·가격으로 읽지 마세요.",
  imageSource: {"title":"Nike 공식 공개 상품 데이터","url":"https://api.nike.com/product_feed/threads/v3/?filter=marketplace%28US%29&filter=language%28en%29&filter=channelId%28d9a5bc42-4b9c-4976-858a-f159cf99c647%29&filter=productInfo.merchProduct.styleCode%28HJ1102%29&count=100"},
    image: "/images/shoes/nike/structure26/side.webp",
    images: [
      "/images/shoes/nike/structure26/side.webp",
      "/images/shoes/nike/structure26/outsole.webp",
      "/images/shoes/nike/structure26/top.webp",
      "/images/shoes/nike/structure26/pair.webp"
    ],
    category: "안정화",
    price: 169000,
    description: "풀 렝스 ReactX · 중족부 지지 랩 구조의 스트럭처 26. 실험실 296g·힐/전족부 36.1/26mm. 한국 확인 정가169,000원.",
    oneliner: "296g 실험실 무게 · 풀 렝스 ReactX · 중족부 지지 랩",
    editorComment: "2026-11-11 공개 원문 대조. 한국 남성 일반IM8339-100·남성와이드HQ2588-106·여성와이드HQ2589-102·여성일반IO9917-101 원문 정가169,000원 확인. 2026-11-09 확인 당시 남성 와이드 해당 색상에 품절 표시가 있었으며, 다른 확인 상품의 구매 조건은 사이즈별로 달랐습니다. 현재 선택 재고는 재확인하지 못했습니다. 와이드를 임의로2E·4E로 환산하지 않습니다. 한국 남성일반321g(280mm)·여성와이드262g(250mm),드롭10mm. 2026-11-09 관찰 기록에서 남성 와이드 같은 상품의 320/321g 표기가 충돌했습니다. 이번 공개 추출에서는 해당 무게 표기를 재확인하지 못했습니다. DOR 소개 남성320g(US10)·여성261g(US8),38/28mm·10mm와 RR296g·10.1mm를 구분.  DOR의 Matt은 US10에서 보통~약간 좁은 폭·앞코 테이퍼, 내측 오버레이의 마찰과 두꺼운 힐카라 패딩이 아킬레스 부착부를 누르는 느낌을 경험했습니다. 앞쪽 유연성과 이른 롤링을 느꼈지만 힐 착지와 긴 회차의 반응은 덜 좋게 봤습니다. DOR의 혀 거싯 설명과 RR 절개 관찰이 충돌해 구조를 단정하지 않습니다.26은 ReactX이며 전족 Air Zoom 유닛이 없습니다. 한국 남녀와이드 상품을 확인했습니다. 공식 반 사이즈 크게 안내와 DOR Matt의 US10 정사이즈 의견은 관찰 주체가 달라 일괄 사이즈 처방으로 합치지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
    tags: [
      "안정화",
      "과내전"
    ],
    specs: {
      "weight": 296,
      "drop": 10.1
    },
    biomechanics: {
      "stackHeight": {
        "heel": 36.1,
        "forefoot": 26
      },
      "drop": 10.1,
      "carbonPlate": false,
      "plateType": null,
      "midsoleType": "풀 렝스 ReactX · 중족부 지지 랩"
    },
    koreanFootFit: {
      "wideOptions": true
    },
    targetUsers: {
      "recommended": [
        "ReactX와 중족부 지지 구조를 시착 비교하려는 러너",
        "한국 남녀와이드 상품을 확인하려는 러너"
      ],
      "notRecommended": [
        "앞쪽·내측 오버레이·힐카라 패딩의 압박이 생기는 경우",
        "매우 가벼운 무게와 빠른 반응이 우선인 경우"
      ]
    },
    features: [
      "풀 렝스 ReactX · 중족부 지지 랩",
      "296g · 힐/전족부 36.1/26mm (RunRepeat)",
      "힐/전족부 SA 132/99 · 에너지 리턴 57.2/59.4% (RunRepeat). ",
      "한국 남녀와이드 상품을 확인했습니다. 공식 반 사이즈 크게 안내와 DOR Matt의 US10 정사이즈 의견은 관찰 주체가 달라 일괄 사이즈 처방으로 합치지 않습니다."
    ],
    priceAnalysis: {
      "msrp": 169000,
      "priceTier": "mid",
      "alternatives": [
        "asics-gel-kayano-32",
        "new-balance-860-v14",
        "brooks-ghost-17"
      ]
    },
    detailedSpecs: {
      "weight": "296g (RunRepeat 공시 검체 정책:남성US9). 한국 남성일반321g(280mm)·여성와이드262g(250mm),드롭10mm. 2026-11-09 관찰 기록에서 남성 와이드 같은 상품의 320/321g 표기가 충돌했습니다. 이번 공개 추출에서는 해당 무게 표기를 재확인하지 못했습니다. DOR 소개 남성320g(US10)·여성261g(US8),38/28mm·10mm와 RR296g·10.1mm를 구분.",
      "stackHeight": "36.1/26mm (RunRepeat 힐/전족부 실측)",
      "drop": "10.1mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.",
      "midsole": "풀 렝스 ReactX · 중족부 지지 랩 · 34.9 AC(Asker C) · 힐/전족부 SA 132/99 · 에너지 리턴 57.2/59.4%. ",
      "plate": "비플레이트 구조. 직접 시험한 RTINGS 스트럭처 26 리뷰의 Plate None 표기로 확인했습니다.",
      "width": "RunRepeat 내부 최광폭 93.7mm / 엄지 부위 71.9mm / 엄지 높이 25.7mm. 한국 남녀와이드 상품을 확인했습니다. 공식 반 사이즈 크게 안내와 DOR Matt의 US10 정사이즈 의견은 관찰 주체가 달라 일괄 사이즈 처방으로 합치지 않습니다.",
      "durability": "검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.",
      "price": "한국 남성 일반IM8339-100·남성와이드HQ2588-106·여성와이드HQ2589-102·여성일반IO9917-101 원문 정가169,000원 확인. 2026-11-09 확인 당시 남성 와이드 해당 색상에 품절 표시가 있었으며, 다른 확인 상품의 구매 조건은 사이즈별로 달랐습니다. 현재 선택 재고는 재확인하지 못했습니다. 와이드를 임의로2E·4E로 환산하지 않습니다."
    },
    reviews: [
      {
        "userType": "원문 기반 에디터 분석",
        "source": "editor",
        "sourceUrl": "https://runrepeat.com/nike-structure-26",
        "text": "296g과 SA 132/99·에너지 리턴 57.2/59.4%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다.  한국 남녀와이드 상품을 확인했습니다. 공식 반 사이즈 크게 안내와 DOR Matt의 US10 정사이즈 의견은 관찰 주체가 달라 일괄 사이즈 처방으로 합치지 않습니다."
      },
      {
        "userType": "외부 착화 의견 요약 · Doctors of Running",
        "source": "editor",
        "sourceUrl": "https://www.doctorsofrunning.com/nike-structure-26-review-2025/?m=0",
        "text": "DOR의 Matt은 US10에서 보통~약간 좁은 폭·앞코 테이퍼, 내측 오버레이의 마찰과 두꺼운 힐카라 패딩이 아킬레스 부착부를 누르는 느낌을 경험했습니다. 앞쪽 유연성과 이른 롤링을 느꼈지만 힐 착지와 긴 회차의 반응은 덜 좋게 봤습니다. DOR의 혀 거싯 설명과 RR 절개 관찰이 충돌해 구조를 단정하지 않습니다.26은 ReactX이며 전족 Air Zoom 유닛이 없습니다."
      }
    ],
    similarShoes: [
      "asics-gel-kayano-32",
      "new-balance-860-v14",
      "brooks-ghost-17"
    ],
    purchaseLinks: [
      {
        "store": "네이버",
        "url": "https://naver.me/5Z1qpE6Z"
      },
      {
        "store": "쿠팡",
        "url": "https://link.coupang.com/a/g5YYOREHfg",
        "note": "2026-11-11 판매처의 남성 IM6777-121 상품입니다. 최종 옵션·현재 판매 상태·가격은 판매처에서 확인하세요."
      }
    ],
    verification: {
      "checkedAt": "2026-11-11",
      "scope": "한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
      "sources": [
        {
          "label": "RTINGS 스트럭처 26 구조 시험",
          "url": "https://www.rtings.com/running-shoes/reviews/nike/structure-26-running-shoe",
          "note": "직접 시험한 모델의 Plate None 표기입니다. RTINGS의 다른 시험 수치를 RunRepeat 값과 섞지 않습니다."
        },
        {
          "label": "한국 공식 men · 일반 표기(폭 코드 없음) · IM8339-100",
          "url": "https://www.nike.com/kr/t/스트럭처-26-남성-로드-러닝화-7dh5Vy5s/IM8339-100",
          "note": "확인한SKU 정가169,000원. 할인·재고·사이즈 조건은 상품별로 다릅니다."
        },
        {
          "label": "한국 공식 men · 와이드 · HQ2588-106",
          "url": "https://www.nike.com/kr/t/나이키-스트럭처-26-남성-로드-러닝화와이드-R840oocT",
          "note": "확인한SKU 정가169,000원. 할인·재고·사이즈 조건은 상품별로 다릅니다."
        },
        {
          "label": "한국 공식 women · 와이드 · HQ2589-102",
          "url": "https://www.nike.com/kr/t/스트럭처-26-여성-로드-러닝화와이드-nShOGeEC/HQ2589-102",
          "note": "확인한SKU 정가169,000원. 할인·재고·사이즈 조건은 상품별로 다릅니다."
        },
        {
          "label": "한국 공식 women · 일반 표기(폭 코드 없음) · IO9917-101",
          "url": "https://www.nike.com/kr/t/나이키-스트럭처-26-여성-로드-러닝화-nShOGeEC/IO9917-101",
          "note": "확인한SKU 정가169,000원. 할인·재고·사이즈 조건은 상품별로 다릅니다."
        },
        {
          "label": "RunRepeat 스트럭처 26",
          "url": "https://runrepeat.com/nike-structure-26",
          "note": "공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 296g · 36.1/26mm · 드롭10.1mm. SA 132/99 · ER 57.2/59.4%. "
        },
        {
          "label": "Doctors of Running 착화 리뷰",
          "url": "https://www.doctorsofrunning.com/nike-structure-26-review-2025/?m=0",
          "note": "한국 남성일반321g(280mm)·여성와이드262g(250mm),드롭10mm. 2026-11-09 관찰 기록에서 남성 와이드 같은 상품의 320/321g 표기가 충돌했습니다. 이번 공개 추출에서는 해당 무게 표기를 재확인하지 못했습니다. DOR 소개 남성320g(US10)·여성261g(US8),38/28mm·10mm와 RR296g·10.1mm를 구분."
        },
        {
          "label": "RunRepeat 측정법",
          "url": "https://runrepeat.com/testing-methodology",
          "note": "내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값입니다. AC와HA는 직접 비교하지 않습니다. 시점·측정법 버전의 차이를 구분하세요."
        }
      ],
      "limitations": [
        "질환 예방·치료 효과, 공통 최적 페이스와 수명km는 확인하지 못해 관련 등급·수명·km당 비용을 비웁니다.",
        "에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.",
        "판매·재고는 확인한SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다.",
        "2026-11-11 쿠팡 연결 점검: 모델명·선택 정보를 대조했습니다. 일부 다른 옵션의 표시로 현재 선택의 품절을 판정하지 않습니다. 모델 전체의 단종·전국 재고 상태를 뜻하지 않습니다."
      ]
    },
  };
