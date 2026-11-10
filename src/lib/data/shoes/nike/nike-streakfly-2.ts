import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
    id: "nike-streakfly-2",
    slug: "nike-streakfly-2",
    brand: "Nike",
    name: "스트릭플라이 2",
  imageCaption: "streakfly 2 사진(HF6416-401 · Obsidian/Persian Violet/Green Abyss/White)은 Nike 공개 상품 데이터와 모델·색상·구도를 대조했습니다. 사진 품번을 한국 판매 규격·가격으로 읽지 마세요.",
  imageSource: {"title":"Nike 공식 공개 상품 데이터","url":"https://api.nike.com/product_feed/threads/v3/?filter=marketplace%28US%29&filter=language%28en%29&filter=channelId%28d9a5bc42-4b9c-4976-858a-f159cf99c647%29&filter=productInfo.merchProduct.styleCode%28HF6416%29&count=100"},
    image: "/images/shoes/nike/streakfly2/side.webp",
    images: [
      "/images/shoes/nike/streakfly2/side.webp",
      "/images/shoes/nike/streakfly2/outsole.webp",
      "/images/shoes/nike/streakfly2/top.webp",
      "/images/shoes/nike/streakfly2/pair.webp"
    ],
    category: "레이싱",
    price: 239000,
    description: "ZoomX · 컷아웃 전장 카본 Flyplate 구조의 스트릭플라이 2. 실험실 128g·힐/전족부 27/23.3mm. 한국 확인 정가 239,000원.",
    oneliner: "128g 실험실 무게 · ZoomX · 컷아웃 전장 카본 Flyplate",
    editorComment: "2026-11-09 원문 재확인. 한국 공식 남성 IO8268-100 정가 239,000원·확인 당시 판매가 179,200원(웹캐시 203,100원과구분),HF6416-601 정가 219,000원·판매 197,100원으로 SKU 별 차이가 있습니다. 대표가격은남성 IO8268-100정가입니다. 해당남성색 250~290mm 선택 가능,HF6416-601의명시성별·한국여성전용·와이드 SKU 는미확인입니다. 한국공시 145g(280mm)·드롭 4mm. DOR 소개 128g(남성 US9/여성 US10.5남녀공용)·26/22mm·4mm 와 RR128g·27.0/23.3mm·3.7mm 는구분합니다. RR 주폼 31.9AC·보조 31.0AC 의정확한 위치는 미확인입니다. 공시 4mm·실측 3.7mm 와리뷰어의 0/음의드롭느낌은다른정보입니다. 기존 128g 전작유지·10km상한·150~200km수명·공통 2분 45초~4분페이스·질환경고보장은철회합니다. DOR Matt(남성 US10)은길이가 맞아 반업하지 않았고 좁고 밀착되는 어퍼와 코너 고정을 평가했습니다. Andrea(평소여성 US9.5/남성 US8)는여성 US10/남성 US8.5로 반업한 상태에서 길이가 맞았지만 힐 슬립·급 U턴의 지지 부족을 느꼈습니다. 젖은 트랙에서도 Matt은 양호,Andrea는 웅덩이에서 미끄러짐을 경험했으며 Andrea의젖은 포장도로 평가는 미시험입니다. 한국 와이드현재 SKU·문자폭코드는미확인입니다. RR 내부 최광폭 89.7mm·엄지 66.7mm·높이 23.1mm 를 근거로 모든 넓은 발·입문자를 일괄 금지하거나 2km통증을 예고하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
    tags: [
      "레이싱",
      "단거리",
      "5K/10K",
      "카본플레이트"
    ],
    specs: {
      "weight": 128,
      "drop": 3.7
    },
    biomechanics: {
      "stackHeight": {
        "heel": 27,
        "forefoot": 23.3
      },
      "drop": 3.7,
      "carbonPlate": true,
      "plateType": "full-length carbon Flyplate with cutout",
      "midsoleType": "ZoomX · 컷아웃 전장 카본 Flyplate"
    },
    koreanFootFit: {},
    targetUsers: {
      "recommended": [
        "낮은스택·전장카본의전환을 시착 비교하려는 러너",
        "실제규격에서힐 슬립·앞코 윗면·코너 고정을확인하려는러너"
      ],
      "notRecommended": [
        "직접 착화에서발가락 윗면 압박·힐 슬립이해결되지 않는 경우",
        "실제 사용 환경에서 U턴고정·젖은 노면 접지를 확보하지 못한 경우"
      ]
    },
    features: [
      "ZoomX · 컷아웃 전장 카본 Flyplate",
      "128g · 힐/전족부 27/23.3mm (RunRepeat)",
      "힐/전족부 SA 106/82 · 에너지 리턴 76.3/77.9% (RunRepeat). RR 주폼 31.9AC·보조 31.0AC 의정확한 위치는 미확인입니다. 공시 4mm·실측 3.7mm 와리뷰어의 0/음의드롭느낌은다른정보입니다. 기존 128g 전작유지·10km상한·150~200km수명·공통 2분 45초~4분페이스·질환경고보장은철회합니다.",
      "한국 와이드현재 SKU·문자폭코드는미확인입니다. RR 내부 최광폭 89.7mm·엄지 66.7mm·높이 23.1mm 를 근거로 모든 넓은 발·입문자를 일괄 금지하거나 2km통증을 예고하지 않습니다."
    ],
    priceAnalysis: {
      "msrp": 239000,
      "priceTier": "premium",
      "alternatives": [
        "asics-metaspeed-edge-plus",
        "adidas-adizero-sl2"
      ]
    },
    detailedSpecs: {
      "weight": "128g (RunRepeat 공시 검체 정책:남성 US9). 한국공시 145g(280mm)·드롭 4mm. DOR 소개 128g(남성 US9/여성 US10.5남녀공용)·26/22mm·4mm 와 RR128g·27.0/23.3mm·3.7mm 는구분합니다.",
      "stackHeight": "27/23.3mm (RunRepeat 힐/전족부 실측)",
      "drop": "3.7mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.",
      "midsole": "ZoomX · 컷아웃 전장 카본 Flyplate · 31.9 AC(Asker C) · 힐/전족부 SA 106/82 · 에너지 리턴 76.3/77.9%. RR 주폼 31.9AC·보조 31.0AC 의정확한 위치는 미확인입니다. 공시 4mm·실측 3.7mm 와리뷰어의 0/음의드롭느낌은다른정보입니다. 기존 128g 전작유지·10km상한·150~200km수명·공통 2분 45초~4분페이스·질환경고보장은철회합니다.",
      "plate": "전장 카본 Flyplate에 큰 컷아웃. 전체신발굽힘 7N과전족카본의개인체감강성을동일시하지않습니다.",
      "width": "RunRepeat 내부 최광폭 89.7mm / 엄지 부위 66.7mm / 엄지 높이 23.1mm. 한국 와이드현재 SKU·문자폭코드는미확인입니다. RR 내부 최광폭 89.7mm·엄지 66.7mm·높이 23.1mm 를 근거로 모든 넓은 발·입문자를 일괄 금지하거나 2km통증을 예고하지 않습니다.",
      "durability": "검증된 공통 수명 km 미확인. 짧은 착화·마모 깊이를 수명 km로 환산하지 않습니다.",
      "price": "한국 공식 남성 IO8268-100 정가 239,000원·확인 당시 판매가 179,200원(웹캐시 203,100원과구분),HF6416-601 정가 219,000원·판매 197,100원으로 SKU 별 차이가 있습니다. 대표가격은남성 IO8268-100정가입니다. 해당남성색 250~290mm 선택 가능,HF6416-601의명시성별·한국여성전용·와이드 SKU 는미확인입니다."
    },
    reviews: [
      {
        "userType": "원문 기반 에디터 분석",
        "source": "editor",
        "sourceUrl": "https://runrepeat.com/nike-streakfly-2",
        "text": "128g 과 SA 106/82·에너지 리턴 76.3/77.9% 는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 주폼 31.9AC·보조 31.0AC 의정확한 위치는 미확인입니다. 공시 4mm·실측 3.7mm 와리뷰어의 0/음의드롭느낌은다른정보입니다. 기존 128g 전작유지·10km상한·150~200km수명·공통 2분 45초~4분페이스·질환경고보장은철회합니다. 한국 와이드현재 SKU·문자폭코드는미확인입니다. RR 내부 최광폭 89.7mm·엄지 66.7mm·높이 23.1mm 를 근거로 모든 넓은 발·입문자를 일괄 금지하거나 2km통증을 예고하지 않습니다."
      },
      {
        "userType": "외부 착화 의견 요약 · Doctors of Running",
        "source": "editor",
        "sourceUrl": "https://www.doctorsofrunning.com/nike-streakfly-2-review-2025/",
        "text": "DOR Matt(남성 US10)은길이가 맞아 반업하지 않았고 좁고 밀착되는 어퍼와 코너 고정을 평가했습니다. Andrea(평소여성 US9.5/남성 US8)는여성 US10/남성 US8.5로 반업한 상태에서 길이가 맞았지만 힐 슬립·급 U턴의 지지 부족을 느꼈습니다. 젖은 트랙에서도 Matt은 양호,Andrea는 웅덩이에서 미끄러짐을 경험했으며 Andrea의젖은 포장도로 평가는 미시험입니다."
      }
    ],
    similarShoes: [
      "asics-metaspeed-edge-plus"
    ],
    relatedPosts: [
      {
        "slug": "running-shoe-plate-guide-2026",
        "title": "플레이트 완전 해설 — 카본·유리섬유·나일론"
      }
    ],
    purchaseLinks: [
      {
        "store": "네이버",
        "url": "https://naver.me/FP8pG0tz"
      },
      {
        "store": "쿠팡",
        "url": "https://link.coupang.com/a/g5YX8hFOP6",
        "note": "2026-11-10 연결 상품의 모델명·선택 정보를 대조했습니다. 사이즈·폭·구성·최종 가격과 현재 재고는 판매처에서 확인하세요."
      }
    ],
    verification: {
      "checkedAt": "2026-11-09",
      "scope": "한국 확인 SKU 의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
      "sources": [
        {
          "label": "한국 공식 men · 폭미확인 · IO8268-100",
          "url": "https://www.nike.com/kr/t/스트릭플라이-2-남성-로드-레이싱화-czWGNIVx/IO8268-100",
          "note": "한국 공식 남성 IO8268-100 정가 239,000원·확인 당시 판매가 179,200원(웹캐시 203,100원과구분),HF6416-601 정가 219,000원·판매 197,100원으로 SKU 별 차이가 있습니다. 대표가격은남성 IO8268-100정가입니다. 해당남성색 250~290mm 선택 가능,HF6416-601의명시성별·한국여성전용·와이드 SKU 는미확인입니다."
        },
        {
          "label": "한국 공식 · 성별·폭 미확인 · HF6416-601",
          "url": "https://www.nike.com/kr/t/스트릭플라이-2-로드-레이싱화-w32dkLBj/HF6416-601",
          "note": "한국 공식 남성 IO8268-100 정가 239,000원·확인 당시 판매가 179,200원(웹캐시 203,100원과구분),HF6416-601 정가 219,000원·판매 197,100원으로 SKU 별 차이가 있습니다. 대표가격은남성 IO8268-100정가입니다. 해당남성색 250~290mm 선택 가능,HF6416-601의명시성별·한국여성전용·와이드 SKU 는미확인입니다."
        },
        {
          "label": "RunRepeat 스트릭플라이 2",
          "url": "https://runrepeat.com/nike-streakfly-2",
          "note": "공시 검체 정책:남성 US9. 개별 검체 SKU·폭은 미확인. 128g · 27/23.3mm · 드롭 3.7mm. SA 106/82 · ER 76.3/77.9%. RR 주폼 31.9AC·보조 31.0AC 의정확한 위치는 미확인입니다. 공시 4mm·실측 3.7mm 와리뷰어의 0/음의드롭느낌은다른정보입니다. 기존 128g 전작유지·10km상한·150~200km수명·공통 2분 45초~4분페이스·질환경고보장은철회합니다."
        },
        {
          "label": "Doctors of Running 착화 리뷰",
          "url": "https://www.doctorsofrunning.com/nike-streakfly-2-review-2025/",
          "note": "한국공시 145g(280mm)·드롭 4mm. DOR 소개 128g(남성 US9/여성 US10.5남녀공용)·26/22mm·4mm 와 RR128g·27.0/23.3mm·3.7mm 는구분합니다."
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
        "판매·재고는 확인한 SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다."
      ]
    },
  };
