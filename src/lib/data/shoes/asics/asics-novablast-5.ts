import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
    id: "asics-novablast-5",
    slug: "asics-novablast-5",
    brand: "Asics",
    name: "노바블라스트 5",
    image: "/images/shoes/asics/novablast5/1.webp",
    images: [
      "/images/shoes/asics/novablast5/1.webp",
      "/images/shoes/asics/novablast5/2.webp",
      "/images/shoes/asics/novablast5/3.webp",
      "/images/shoes/asics/novablast5/4.webp",
      "/images/shoes/asics/novablast5/5.webp"
    ],
    category: "데일리",
    description: "FF BLAST MAX · 비플레이트 구조의 노바블라스트 5. 실험실 254g·힐/전족부 40.9/33.5mm. 한국 현재 정가 미확인.",
    oneliner: "254g 실험실 무게 · FF BLAST MAX · 비플레이트",
    editorComment: "2026-11-09 원문 재확인. 한국 브랜드 검색에서 노바블라스트5 상품을 확인하지 못했습니다. SSF 아식스코리아 기존 상품도 현재 판매중 아님으로 표시돼 현재 정가·성별·폭·SKU·재고는 미확인입니다. 검색캐시169,000원을 현행 정가로 채택하지 않습니다. DOR 소개 남성255g(US9)·41.5/33.5mm, 여성225g(US8)·40.5/32.5mm, 드롭8mm. RR254g·40.9/33.5mm·7.4mm와 구분합니다.  DOR의 Matt(남성US10)은 길이가 맞고 약간 넓지만 낮은 볼륨, 바깥쪽 앞코 테이퍼와 양말이 필요한 거친 메쉬를 언급했습니다. Andrea(여성US9.5)도 길이가 맞았으나 전작보다 단단하고 바운시하다고 느꼈고, Matt은 전작보다 부드럽다고 느껴 의견이 갈립니다. 개인의 주행감·접지 체감을 임상 등급으로 바꾸지 않습니다. 한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭97.5mm·엄지74.4mm·높이27.2mm를 개인의 발볼과 대입하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
    tags: [
      "데일리",
      "바운시",
      "반발력",
      "올라운더"
    ],
    specs: {
      "weight": 254,
      "drop": 7.4
    },
    biomechanics: {
      "stackHeight": {
        "heel": 40.9,
        "forefoot": 33.5
      },
      "drop": 7.4,
      "carbonPlate": false,
      "plateType": null,
      "midsoleType": "FF BLAST MAX · 비플레이트"
    },
    koreanFootFit: {},
    targetUsers: {
      "recommended": [
        "FF BLAST MAX의 데일리 착화를 비교하려는 러너",
        "어퍼 볼륨과 앞코 형태를 직접 확인하려는 러너"
      ],
      "notRecommended": [
        "낮은 볼륨·메쉬 마찰이 맞지 않는 경우",
        "직접 착화에서 높은 스택과 반응이 불편한 경우"
      ]
    },
    features: [
      "FF BLAST MAX · 비플레이트",
      "254g · 힐/전족부 40.9/33.5mm (RunRepeat)",
      "힐/전족부 SA 141/134 · 에너지 리턴 63.6/66.5% (RunRepeat). ",
      "한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭97.5mm·엄지74.4mm·높이27.2mm를 개인의 발볼과 대입하지 않습니다."
    ],
    priceAnalysis: {
      "priceTier": "mid",
      "alternatives": [
        "nike-pegasus-41",
        "new-balance-rebel-v5",
        "hoka-mach-6"
      ]
    },
    detailedSpecs: {
      "weight": "254g (RunRepeat 공시 검체 정책:남성US9). DOR 소개 남성255g(US9)·41.5/33.5mm, 여성225g(US8)·40.5/32.5mm, 드롭8mm. RR254g·40.9/33.5mm·7.4mm와 구분합니다.",
      "stackHeight": "40.9/33.5mm (RunRepeat 힐/전족부 실측)",
      "drop": "7.4mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.",
      "midsole": "FF BLAST MAX · 비플레이트 · 30.3 AC(Asker C) · 힐/전족부 SA 141/134 · 에너지 리턴 63.6/66.5%. ",
      "plate": "확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음",
      "width": "RunRepeat 내부 최광폭 97.5mm / 엄지 부위 74.4mm / 엄지 높이 27.2mm. 한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭97.5mm·엄지74.4mm·높이27.2mm를 개인의 발볼과 대입하지 않습니다.",
      "durability": "검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.",
      "price": "한국 브랜드 검색에서 노바블라스트5 상품을 확인하지 못했습니다. SSF 아식스코리아 기존 상품도 현재 판매중 아님으로 표시돼 현재 정가·성별·폭·SKU·재고는 미확인입니다. 검색캐시169,000원을 현행 정가로 채택하지 않습니다."
    },
    reviews: [
      {
        "userType": "원문 기반 에디터 분석",
        "source": "editor",
        "sourceUrl": "https://runrepeat.com/asics-novablast-5",
        "text": "254g과 SA 141/134·에너지 리턴 63.6/66.5%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다.  한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭97.5mm·엄지74.4mm·높이27.2mm를 개인의 발볼과 대입하지 않습니다."
      },
      {
        "userType": "외부 착화 의견 요약 · Doctors of Running",
        "source": "editor",
        "sourceUrl": "https://www.doctorsofrunning.com/asics-novablast-5-review-2024/",
        "text": "DOR의 Matt(남성US10)은 길이가 맞고 약간 넓지만 낮은 볼륨, 바깥쪽 앞코 테이퍼와 양말이 필요한 거친 메쉬를 언급했습니다. Andrea(여성US9.5)도 길이가 맞았으나 전작보다 단단하고 바운시하다고 느꼈고, Matt은 전작보다 부드럽다고 느껴 의견이 갈립니다. 개인의 주행감·접지 체감을 임상 등급으로 바꾸지 않습니다."
      }
    ],
    similarShoes: [
      "nike-pegasus-41",
      "new-balance-rebel-v5",
      "hoka-mach-x-3"
    ],
    relatedPosts: [
      {
        "slug": "novablast-5-vs-pegasus-41-daily-cushion-2026",
        "title": "노바블라스트 5 vs 페가수스 41 — 데일리 쿠션 대결"
      },
      {
        "slug": "asics-novablast-6-preview-2026",
        "title": "노바블라스트 6 미리보기 — 5와 뭐가 다른가"
      },
      {
        "slug": "asics-novablast-6-vs-hoka-clifton-pro-2026",
        "title": "노바블라스트 6 vs 클리프톤 프로"
      },
      {
        "slug": "asics-running-shoes-lineup-tier-guide-2026",
        "title": "아식스 러닝화 계급도"
      }
    ],
    purchaseLinks: [
      {
        "store": "네이버",
        "url": "https://naver.me/FQuFuFYl"
      }
    ],
    verification: {
      "checkedAt": "2026-11-09",
      "scope": "한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
      "sources": [
        {
          "label": "아식스 한국 공식 검색 범위",
          "url": "https://asics.co.kr/goods/search?keyword_log_flag=Y&search_text=%EB%85%B8%EB%B0%94%EB%B8%94%EB%9D%BC%EC%8A%A4%ED%8A%B8+5",
          "note": "5 results, all visibly Novablast 6 LIGHTSHOW/GTX variants; none was Novablast 5. Version 6 prices/sizes excluded."
        },
        {
          "label": "SSF 아식스코리아 기존 상품 확인",
          "url": "https://m.ssfshop.com/ASICS-KOREA/GR3825081856274/good",
          "note": "현재 판매중 아님. 과거 검색캐시 가격을 현재 정가로 채택하지 않음."
        },
        {
          "label": "RunRepeat 노바블라스트 5",
          "url": "https://runrepeat.com/asics-novablast-5",
          "note": "공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 254g · 40.9/33.5mm · 드롭7.4mm. SA 141/134 · ER 63.6/66.5%. "
        },
        {
          "label": "Doctors of Running 착화 리뷰",
          "url": "https://www.doctorsofrunning.com/asics-novablast-5-review-2024/",
          "note": "DOR 소개 남성255g(US9)·41.5/33.5mm, 여성225g(US8)·40.5/32.5mm, 드롭8mm. RR254g·40.9/33.5mm·7.4mm와 구분합니다."
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
        "2026-11-10 쿠팡 연결 점검: 연결된 판매처가 해당 상품을 찾을 수 없다고 안내해 연결을 제외했습니다. 모델 전체의 단종·전국 재고 상태를 뜻하지 않습니다."
      ]
    },
  };
