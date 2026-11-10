import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
    id: "saucony-hurricane-25",
    slug: "saucony-hurricane-25",
    brand: "Saucony",
    name: "허리케인 25",
    image: "/images/shoes/saucony/hurricane25.webp",
    images: [
      "/images/shoes/saucony/hurricane25/side.webp",
      "/images/shoes/saucony/hurricane25/top.webp",
      "/images/shoes/saucony/hurricane25/outsole.webp"
    ],
    category: "안정화",
    price: 199000,
    description: "PWRRUN PB 코어 · PWRRUN 프레임 · CenterPath 구조의 허리케인 25. 실험실 286g·힐/전족부 40.2/33.1mm. 한국 확인 정가199,000원.",
    oneliner: "286g 실험실 무게 · PWRRUN PB 코어 · PWRRUN 프레임 · CenterPath",
    editorComment: "2026-11-09 원문 재확인. 한국 남성일반S21026-202·W와이드S21027-286,여성일반S11026-226 정가199,000원 확인. 확인한 남성 색상은 품절,여성 230mm는 선택 가능 표시였으며 다른 색상·사이즈는 별도 확인합니다. W를2E직선 폭으로 환산하지않습니다. DOR 소개 남성283g(US9)·여성249g(US8),38/32mm·드롭6mm. RR286g·40.2/33.1mm·7.1mm와구분. 보조폼44.9AC는주폼33.6AC와구분합니다. RR 반사 요소 본문과 결과표가 충돌해반사 기능은 확정하지않습니다. DOR의 Matt(US10)과 Bach(US9.5)은 길이는맞지만낮은 중족부 볼륨·앞코 테이퍼를언급했습니다. Matt은 초기단단함이빨리풀려느린 러닝에서무르게느껴졌고젖은 보도에서미끄러짐을 경험했습니다. 내측 지지는 언급했지만심한 과내전 교정이나질환 효과로 결론내리지않습니다. 한국 남성일반·W와이드·여성일반 상품 확인. 여성와이드 현재 SKU와W의2E매핑은미확인입니다. RR내부95.1/72.9/28.1mm는해외 검체 치수입니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
    tags: [
      "안정화",
      "맥시멀",
      "과내전 지원",
      "프리미엄"
    ],
    specs: {
      "weight": 286,
      "drop": 7.1
    },
    biomechanics: {
      "stackHeight": {
        "heel": 40.2,
        "forefoot": 33.1
      },
      "drop": 7.1,
      "carbonPlate": false,
      "plateType": null,
      "midsoleType": "PWRRUN PB 코어 · PWRRUN 프레임 · CenterPath"
    },
    koreanFootFit: {
      "wideOptions": true
    },
    targetUsers: {
      "recommended": [
        "PWRRUN PB와프레임의 착화를 비교하려는 러너",
        "한국 남성W와이드판매규격을확인하려는 러너"
      ],
      "notRecommended": [
        "낮은 발등 공간·단단한 카운터가맞지 않는 경우",
        "실제 젖은 노면 접지에 대한 추가 확인이 필요한 경우"
      ]
    },
    features: [
      "PWRRUN PB 코어 · PWRRUN 프레임 · CenterPath",
      "286g · 힐/전족부 40.2/33.1mm (RunRepeat)",
      "힐/전족부 SA 151/140 · 에너지 리턴 68.4/74% (RunRepeat). 보조폼44.9AC는주폼33.6AC와구분합니다. RR 반사 요소 본문과 결과표가 충돌해반사 기능은 확정하지않습니다.",
      "한국 남성일반·W와이드·여성일반 상품 확인. 여성와이드 현재 SKU와W의2E매핑은미확인입니다. RR내부95.1/72.9/28.1mm는해외 검체 치수입니다."
    ],
    priceAnalysis: {
      "msrp": 199000,
      "priceTier": "premium",
      "alternatives": [
        "asics-gel-kayano-32",
        "brooks-glycerin-gts-22",
        "new-balance-860-v14"
      ]
    },
    detailedSpecs: {
      "weight": "286g (RunRepeat 공시 검체 정책: 남성US9). DOR 소개 남성283g(US9)·여성249g(US8),38/32mm·드롭6mm. RR286g·40.2/33.1mm·7.1mm와구분.",
      "stackHeight": "40.2/33.1mm (RunRepeat 힐/전족부 실측)",
      "drop": "7.1mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.",
      "midsole": "PWRRUN PB 코어 · PWRRUN 프레임 · CenterPath · 33.6 AC(Asker C) · 힐/전족부 SA 151/140 · 에너지 리턴 68.4/74%. 보조폼44.9AC는주폼33.6AC와구분합니다. RR 반사 요소 본문과 결과표가 충돌해반사 기능은 확정하지않습니다.",
      "plate": "확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음",
      "width": "RunRepeat 내부 최광폭 95.1mm / 엄지 부위 72.9mm / 엄지 높이 28.1mm. 한국 남성일반·W와이드·여성일반 상품 확인. 여성와이드 현재 SKU와W의2E매핑은미확인입니다. RR내부95.1/72.9/28.1mm는해외 검체 치수입니다.",
      "durability": "검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.",
      "price": "한국 남성일반S21026-202·W와이드S21027-286,여성일반S11026-226 정가199,000원 확인. 확인한 남성 색상은 품절,여성 230mm는 선택 가능 표시였으며 다른 색상·사이즈는 별도 확인합니다. W를2E직선 폭으로 환산하지않습니다."
    },
    reviews: [
      {
        "userType": "원문 기반 에디터 분석",
        "source": "editor",
        "sourceUrl": "https://runrepeat.com/saucony-hurricane-25",
        "text": "286g과 SA 151/140·에너지 리턴 68.4/74%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. 보조폼44.9AC는주폼33.6AC와구분합니다. RR 반사 요소 본문과 결과표가 충돌해반사 기능은 확정하지않습니다. 한국 남성일반·W와이드·여성일반 상품 확인. 여성와이드 현재 SKU와W의2E매핑은미확인입니다. RR내부95.1/72.9/28.1mm는해외 검체 치수입니다."
      },
      {
        "userType": "외부 착화 의견 요약 · Doctors of Running",
        "source": "editor",
        "sourceUrl": "https://www.doctorsofrunning.com/saucony-hurricane-25-review-2025/",
        "text": "DOR의 Matt(US10)과 Bach(US9.5)은 길이는맞지만낮은 중족부 볼륨·앞코 테이퍼를언급했습니다. Matt은 초기단단함이빨리풀려느린 러닝에서무르게느껴졌고젖은 보도에서미끄러짐을 경험했습니다. 내측 지지는 언급했지만심한 과내전 교정이나질환 효과로 결론내리지않습니다."
      }
    ],
    similarShoes: [
      "asics-gel-kayano-32",
      "brooks-adrenaline-gts-25",
      "hoka-gaviota-6",
      "new-balance-860-v14"
    ],
    purchaseLinks: [],
    verification: {
      "checkedAt": "2026-11-09",
      "scope": "한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
      "sources": [
        {
          "label": "한국 공식 men · S21027-286",
          "url": "https://www.saucony.co.kr/product/detail.html?cate_no=208&display_group=1&product_no=138",
          "note": "한국 남성일반S21026-202·W와이드S21027-286,여성일반S11026-226 정가199,000원 확인. 확인한 남성 색상은 품절,여성 230mm는 선택 가능 표시였으며 다른 색상·사이즈는 별도 확인합니다. W를2E직선 폭으로 환산하지않습니다."
        },
        {
          "label": "한국 공식 men · S21026-202",
          "url": "https://www.saucony.co.kr/product/남성-허리케인-25-white/129/category/152/display/1/",
          "note": "한국 남성일반S21026-202·W와이드S21027-286,여성일반S11026-226 정가199,000원 확인. 확인한 남성 색상은 품절,여성 230mm는 선택 가능 표시였으며 다른 색상·사이즈는 별도 확인합니다. W를2E직선 폭으로 환산하지않습니다."
        },
        {
          "label": "한국 공식 women · S11026-226",
          "url": "https://www.saucony.co.kr/product/detail.html?cate_no=190&display_group=1&product_no=127",
          "note": "한국 남성일반S21026-202·W와이드S21027-286,여성일반S11026-226 정가199,000원 확인. 확인한 남성 색상은 품절,여성 230mm는 선택 가능 표시였으며 다른 색상·사이즈는 별도 확인합니다. W를2E직선 폭으로 환산하지않습니다."
        },
        {
          "label": "RunRepeat 허리케인 25",
          "url": "https://runrepeat.com/saucony-hurricane-25",
          "note": "공시 검체 정책: 남성US9. 개별 검체SKU·폭은 미확인. 286g · 40.2/33.1mm · 드롭7.1mm. SA 151/140 · ER 68.4/74%. 보조폼44.9AC는주폼33.6AC와구분합니다. RR 반사 요소 본문과 결과표가 충돌해반사 기능은 확정하지않습니다."
        },
        {
          "label": "Doctors of Running 착화 리뷰",
          "url": "https://www.doctorsofrunning.com/saucony-hurricane-25-review-2025/",
          "note": "DOR 소개 남성283g(US9)·여성249g(US8),38/32mm·드롭6mm. RR286g·40.2/33.1mm·7.1mm와구분."
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
