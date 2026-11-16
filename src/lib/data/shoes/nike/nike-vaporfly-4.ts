import type { Shoe } from '@/types/shoe';

// 원문 추가 대조:2026-11-11. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
    id: "nike-vaporfly-4",
    slug: "nike-vaporfly-4",
    brand: "Nike",
    name: "베이퍼플라이 4",
  imageCaption: "vaporfly 4 사진(HF6414-100 · White/Obsidian Mist/Pure Platinum/Gridiron)은 Nike 공개 상품 데이터와 모델·색상·구도를 대조했습니다. 사진 품번을 한국 판매 규격·가격으로 읽지 마세요.",
  imageSource: {"title":"Nike 공식 공개 상품 데이터","url":"https://api.nike.com/product_feed/threads/v3/?filter=marketplace%28US%29&filter=language%28en%29&filter=channelId%28d9a5bc42-4b9c-4976-858a-f159cf99c647%29&filter=productInfo.merchProduct.styleColor%28HF6414-100%29&count=100"},
    image: "/images/shoes/nike/vaporfly4/side.webp",
    images: [
      "/images/shoes/nike/vaporfly4/side.webp",
      "/images/shoes/nike/vaporfly4/outsole.webp",
      "/images/shoes/nike/vaporfly4/top.webp",
      "/images/shoes/nike/vaporfly4/pair.webp"
    ],
    category: "레이싱",
    price: 319000,
    description: "ZoomX · 전장 카본 Flyplate 구조의 베이퍼플라이 4. 실험실 166g·힐/전족부 34.1/25.5mm. 한국 확인 정가 319,000원.",
    oneliner: "166g 실험실 무게 · ZoomX · 전장 카본 Flyplate",
    editorComment: "2026-11-11 원문 추가 대조. 한국 상품 옵션 관찰은 아래 명시한 날짜 기준입니다. 2026-11-09 Aside 확인 당시 한국 공식 남성 IM8203-001 정가 319,000원·표시 판매가 255,200원, 여성 HF6412-102 정가 309,000원으로 SKU별 차이가 있었습니다. 대표 가격은 남성 IM8203-001 정가입니다. 당시 남성 250~300mm·여성 225~255mm 옵션이 선택 가능했으며 한국 폭 규격과 현재 옵션별 재고는 미확인입니다. 한국공시 남성 190g(280mm)·여성 152g(250mm),드롭 6mm. DOR 소개 167g(남성 US9)·139g(여성 US8),36/30mm·6mm 와 RR166g·34.1/25.5mm·8.6mm 는 조건이 다릅니다. RunRepeat 주폼 34.7AC·보조 37.8AC 중 보조 폼의 정확한 층 위치는 미확인입니다. 보조 값은 2026-11-09 원문 탭 관찰 기록이며 이번 정적 추출에서 재확인하지 못했습니다. Dremel 시험의 마모 깊이는 힐 8.6mm·전족부 4.6mm이며, RunRepeat는 이 특수 소재에 시험이 과격할 수 있다고 설명합니다. 이 값을 주행 수명 km로 환산할 수 없습니다. DOR Matt(남성 US10)은 길이는 맞지만 낮은 앞쪽과 혀·힐 이동·맨발의 힐 탭 마찰을 느꼈습니다. Andrea(평소여성 US9.5)는 9.5에서 발톱 통증,US10에서도낮고 좁은 앞코의 넷째 발가락 자극을 느꼈습니다. Matt은단단한 주행감,Andrea는초기 압축감을 느껴 개인차가 있습니다. 두 사람 모두 노출부 마모·중앙 홈의 돌 끼임을 언급했습니다. 한국 와이드 현재 SKU 는 미확인입니다. RR 내부 최광폭 91.7mm·엄지 73.2mm·높이 27.3mm 를 한국모든폭에 대입하지 않습니다. 한국여성구매가이드의 반업 권고도 모든발에 적용하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
    tags: [
      "레이싱",
      "마라톤",
      "카본플레이트",
      "슈퍼슈즈"
    ],
    specs: {
      "weight": 166,
      "drop": 8.6
    },
    biomechanics: {
      "stackHeight": {
        "heel": 34.1,
        "forefoot": 25.5
      },
      "drop": 8.6,
      "carbonPlate": true,
      "plateType": "full-length angled carbon Flyplate",
      "midsoleType": "ZoomX · 전장 카본 Flyplate"
    },
    koreanFootFit: {},
    targetUsers: {
      "recommended": [
        "전장 Flyplate와 ZoomX전환을 시착 비교하려는 러너",
        "혀·힐 이동과앞쪽 높이를 직접 확인하려는 러너"
      ],
      "notRecommended": [
        "실제 착화에서발톱·넷째발가락압박이나 힐 마찰이 생기는 경우",
        "직접 착화에서전환·고정이 불편한 경우"
      ]
    },
    features: [
      "ZoomX · 전장 카본 Flyplate",
      "166g · 힐/전족부 34.1/25.5mm (RunRepeat)",
      "힐/전족부 SA 137/94 · 에너지 리턴 78.1/74.5% (RunRepeat). RunRepeat 주폼 34.7AC·보조 37.8AC 중 보조 폼의 정확한 층 위치는 미확인입니다. 보조 값은 2026-11-09 원문 탭 관찰 기록이며 이번 정적 추출에서 재확인하지 못했습니다. Dremel 시험의 마모 깊이는 힐 8.6mm·전족부 4.6mm이며, RunRepeat는 이 특수 소재에 시험이 과격할 수 있다고 설명합니다. 이 값을 주행 수명 km로 환산할 수 없습니다.",
      "한국 와이드 현재 SKU 는 미확인입니다. RR 내부 최광폭 91.7mm·엄지 73.2mm·높이 27.3mm 를 한국모든폭에 대입하지 않습니다. 한국여성구매가이드의 반업 권고도 모든발에 적용하지 않습니다."
    ],
    priceAnalysis: {
      "msrp": 319000,
      "priceTier": "super-premium",
      "alternatives": [
        "nike-alphafly-3",
        "asics-metaspeed-sky-plus",
        "adidas-adios-pro-4",
        "saucony-endorphin-pro-4"
      ]
    },
    detailedSpecs: {
      "weight": "166g (RunRepeat 공시 검체 정책:남성 US9). 한국공시 남성 190g(280mm)·여성 152g(250mm),드롭 6mm. DOR 소개 167g(남성 US9)·139g(여성 US8),36/30mm·6mm 와 RR166g·34.1/25.5mm·8.6mm 는 조건이 다릅니다.",
      "stackHeight": "34.1/25.5mm (RunRepeat 힐/전족부 실측)",
      "drop": "8.6mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.",
      "midsole": "ZoomX · 전장 카본 Flyplate · 34.7 AC(Asker C) · 힐/전족부 SA 137/94 · 에너지 리턴 78.1/74.5%. RunRepeat 주폼 34.7AC·보조 37.8AC 중 보조 폼의 정확한 층 위치는 미확인입니다. 보조 값은 2026-11-09 원문 탭 관찰 기록이며 이번 정적 추출에서 재확인하지 못했습니다. Dremel 시험의 마모 깊이는 힐 8.6mm·전족부 4.6mm이며, RunRepeat는 이 특수 소재에 시험이 과격할 수 있다고 설명합니다. 이 값을 주행 수명 km로 환산할 수 없습니다.",
      "plate": "Nike 한국 상품 안내는 각도를 높인 전장 카본 Flyplate를 설명합니다.",
      "width": "RunRepeat 내부 최광폭 91.7mm / 엄지 부위 73.2mm / 엄지 높이 27.3mm. 한국 와이드 현재 SKU 는 미확인입니다. RR 내부 최광폭 91.7mm·엄지 73.2mm·높이 27.3mm 를 한국모든폭에 대입하지 않습니다. 한국여성구매가이드의 반업 권고도 모든발에 적용하지 않습니다.",
      "durability": "검증된 공통 수명 km 미확인. 짧은 착화·마모 깊이를 수명 km로 환산하지 않습니다.",
      "price": "2026-11-09 Aside 확인 당시 한국 공식 남성 IM8203-001 정가 319,000원·표시 판매가 255,200원, 여성 HF6412-102 정가 309,000원으로 SKU별 차이가 있었습니다. 대표 가격은 남성 IM8203-001 정가입니다. 당시 남성 250~300mm·여성 225~255mm 옵션이 선택 가능했으며 한국 폭 규격과 현재 옵션별 재고는 미확인입니다."
    },
    reviews: [
      {
        "userType": "원문 기반 에디터 분석",
        "source": "editor",
        "sourceUrl": "https://runrepeat.com/nike-vaporfly-4",
        "text": "166g 과 SA 137/94·에너지 리턴 78.1/74.5% 는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RunRepeat 주폼 34.7AC·보조 37.8AC 중 보조 폼의 정확한 층 위치는 미확인입니다. 보조 값은 2026-11-09 원문 탭 관찰 기록이며 이번 정적 추출에서 재확인하지 못했습니다. Dremel 시험의 마모 깊이는 힐 8.6mm·전족부 4.6mm이며, RunRepeat는 이 특수 소재에 시험이 과격할 수 있다고 설명합니다. 이 값을 주행 수명 km로 환산할 수 없습니다. 한국 와이드 현재 SKU 는 미확인입니다. RR 내부 최광폭 91.7mm·엄지 73.2mm·높이 27.3mm 를 한국모든폭에 대입하지 않습니다. 한국여성구매가이드의 반업 권고도 모든발에 적용하지 않습니다."
      },
      {
        "userType": "외부 착화 의견 요약 · Doctors of Running",
        "source": "editor",
        "sourceUrl": "https://www.doctorsofrunning.com/nike-vaporfly-4-review-2025-midfoot-and/",
        "text": "DOR Matt(남성 US10)은 길이는 맞지만 낮은 앞쪽과 혀·힐 이동·맨발의 힐 탭 마찰을 느꼈습니다. Andrea(평소여성 US9.5)는 9.5에서 발톱 통증,US10에서도낮고 좁은 앞코의 넷째 발가락 자극을 느꼈습니다. Matt은단단한 주행감,Andrea는초기 압축감을 느껴 개인차가 있습니다. 두 사람 모두 노출부 마모·중앙 홈의 돌 끼임을 언급했습니다."
      }
    ],
    similarShoes: [
      "nike-alphafly-3",
      "asics-metaspeed-sky-plus",
      "adidas-adios-pro-4",
      "saucony-endorphin-pro-4"
    ],
    relatedPosts: [
      {
        "slug": "running-shoe-plate-guide-2026",
        "title": "러닝화 플레이트 읽는 법 — 판·로드·소재·최신 대회 규정"
      }
    ],
    purchaseLinks: [
      {
        "store": "네이버",
        "url": "https://naver.me/5KqWcsAl",
        "note": "2026-11-13 판매 페이지 확인: 베이퍼플라이4 IH3586-999 판매 상품입니다. 선택 색상·사이즈와 제조사 품번의 일치를 확인하세요. 선택 사이즈·최종 가격·현재 재고와 결제 가능 여부는 판매처에서 확인하세요."
      },
      {
        "store": "쿠팡",
        "url": "https://link.coupang.com/a/g5Y0aGIrKu",
        "note": "2026-11-11 판매처 제목은 남성 Glam IO9571-400인데 세부 속성에는 여성용이 함께 적혀 있습니다. 성별·사이즈 기준을 판매처에 확인하세요. 최종 옵션·현재 판매 상태·가격은 판매처에서 확인하세요."
      }
    ],
    verification: {
      "checkedAt": "2026-11-11",
      "scope": "한국 확인 SKU의 정가·공시 사양과 해외 실험실 수치·구조·외부 착화 의견을 대조했습니다. 한국 옵션·보조 폼 경도는 2026-11-09 관찰 범위이며 한국 폭 규격과 현재 옵션별 재고는 미확인입니다. 제품 전체 검증 완료 표지가 아닙니다.",
      "sources": [
        {
          "label": "Nike 한국 남성 IM8203-001 상품 안내 추가 대조",
          "url": "https://www.nike.com/kr/t/나이키-베이퍼플라이-4-남성-로드-레이싱화-LgISdyo8/IM8203-001",
          "note": "2026-11-11 원문 추출에서 정가 319,000원·표시 판매가 255,200원·190g(280mm)·드롭 6mm를 대조했습니다. 텍스트 추출로 사이즈 버튼의 활성·재고 상태는 확인하지 못했습니다."
        },
        {
          "label": "한국 공식 men · 폭미확인 · IM8203-001",
          "url": "https://www.nike.com/kr/t/나이키-베이퍼플라이-4-남성-로드-레이싱화-q7ZtUIuq/IM8203-001",
          "note": "2026-11-09 Aside 확인 당시 한국 공식 남성 IM8203-001 정가 319,000원·표시 판매가 255,200원, 여성 HF6412-102 정가 309,000원으로 SKU별 차이가 있었습니다. 대표 가격은 남성 IM8203-001 정가입니다. 당시 남성 250~300mm·여성 225~255mm 옵션이 선택 가능했으며 한국 폭 규격과 현재 옵션별 재고는 미확인입니다."
        },
        {
          "label": "한국 공식 women · 폭미확인 · HF6412-102",
          "url": "https://www.nike.com/kr/t/나이키-베이퍼플라이-4-여성-로드-레이싱화-0oXAqkyJ/HF6412-102",
          "note": "2026-11-09 Aside 확인 당시 한국 공식 남성 IM8203-001 정가 319,000원·표시 판매가 255,200원, 여성 HF6412-102 정가 309,000원으로 SKU별 차이가 있었습니다. 대표 가격은 남성 IM8203-001 정가입니다. 당시 남성 250~300mm·여성 225~255mm 옵션이 선택 가능했으며 한국 폭 규격과 현재 옵션별 재고는 미확인입니다."
        },
        {
          "label": "RunRepeat 베이퍼플라이 4",
          "url": "https://runrepeat.com/nike-vaporfly-4",
          "note": "공시 검체 정책:남성 US9. 개별 검체 SKU·폭은 미확인. 166g · 34.1/25.5mm · 드롭 8.6mm. SA 137/94 · ER 78.1/74.5%. RunRepeat 주폼 34.7AC·보조 37.8AC 중 보조 폼의 정확한 층 위치는 미확인입니다. 보조 값은 2026-11-09 원문 탭 관찰 기록이며 이번 정적 추출에서 재확인하지 못했습니다. Dremel 시험의 마모 깊이는 힐 8.6mm·전족부 4.6mm이며, RunRepeat는 이 특수 소재에 시험이 과격할 수 있다고 설명합니다. 이 값을 주행 수명 km로 환산할 수 없습니다."
        },
        {
          "label": "Doctors of Running 착화 리뷰",
          "url": "https://www.doctorsofrunning.com/nike-vaporfly-4-review-2025-midfoot-and/",
          "note": "한국공시 남성 190g(280mm)·여성 152g(250mm),드롭 6mm. DOR 소개 167g(남성 US9)·139g(여성 US8),36/30mm·6mm 와 RR166g·34.1/25.5mm·8.6mm 는 조건이 다릅니다."
        },
        {
          "label": "RunRepeat 측정법",
          "url": "https://runrepeat.com/testing-methodology",
          "note": "내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값입니다. AC 와 HA 는 직접 비교하지 않습니다. 시점·측정법 버전의 차이를 구분하세요."
        }
      ],
      "limitations": [
        "질환 예방·치료 효과, 공통 최적 페이스와 수명 km는 확인하지 못해 관련 등급·수명·km당 비용을 비웁니다.",
        "에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.",
        "판매·재고는 확인한 SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다.",
        "2026-11-11 쿠팡 연결 점검: 모델명·선택 정보를 대조했습니다. 일부 다른 옵션의 표시로 현재 선택의 품절을 판정하지 않습니다. 모델 전체의 단종·전국 재고 상태를 뜻하지 않습니다."
      ]
    },
  };
