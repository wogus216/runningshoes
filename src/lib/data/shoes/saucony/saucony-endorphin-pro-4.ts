import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
    id: "saucony-endorphin-pro-4",
    slug: "saucony-endorphin-pro-4",
    brand: "Saucony",
    name: "엔돌핀 프로 4",
    image: "/images/shoes/saucony/endorphin_Pro4.webp",
    images: [
      "/images/shoes/saucony/endorphinpro4/side.webp",
      "/images/shoes/saucony/endorphinpro4/top.webp",
      "/images/shoes/saucony/endorphinpro4/outsole.webp"
    ],
    category: "레이싱",
    price: 269000,
    description: "PWRRUN HG 상층 · PWRRUN PB 하층 · S자 카본 플레이트 구조의 엔돌핀 프로 4. 실험실 220g·힐/전족부 38.1/28.6mm. 한국 확인 정가269,000원.",
    oneliner: "220g 실험실 무게 · PWRRUN HG 상층 · PWRRUN PB 하층 · S자 카본 플레이트",
    editorComment: "2026-11-09 원문 재확인. 한국 공식에서 확인한 여성 WHITE/CROCUS 일반M 상품 정가269,000원·확인 시 할인가188,300원. 표시상250mm만 선택 가능이었으며 판매SKU 텍스트·남성 현재 정가·한국 와이드 SKU는 미확인입니다. 대표 가격은 확인한 여성 상품의 현재 정가 범위입니다. DOR 소개 남성218g(US9)·여성184g(US8),40/32mm·드롭8mm. RR220g·38.1/28.6mm·9.5mm와 구분합니다. 개별 RR 검체 라벨은 독립 확인하지 못했습니다. RR 주폼PWRRUN PB35.1AC·상층PWRRUN HG33.5AC를 구분합니다. 짧은 마모 시험과 다른 신발의450/640km 연구를 이 모델의300km수명·후반 무릎 보호로 옮기지 않습니다. DOR의 Matt(남성US10)은 길이가 맞고 레이서치고 넓고 높은 부피, 설포 주름과 거친 안감을 언급하며 자신의 긴 주행에 잘 맞았다고 평가했습니다. Andrea(여성US10,평소9.5)는 개인적으로0.5업을 유지했으며 단단한 체감 때문에 짧고 빠른 대회를 선호했습니다. 두 사람의 용도 의견이 갈려 공통 최적 거리·페이스나 사이즈 업 처방을 정하지 않습니다. 한국 와이드 SKU는 미확인입니다. RR 내부 최광폭96.5mm·엄지72.5mm·높이27.7mm를 외부 플랫폼118.9mm와 혼용하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
    tags: [
      "레이싱",
      "카본",
      "마라톤",
      "슈퍼화"
    ],
    specs: {
      "weight": 220,
      "drop": 9.5
    },
    biomechanics: {
      "stackHeight": {
        "heel": 38.1,
        "forefoot": 28.6
      },
      "drop": 9.5,
      "carbonPlate": true,
      "plateType": "S-shaped carbon plate",
      "midsoleType": "PWRRUN HG 상층 · PWRRUN PB 하층 · S자 카본 플레이트"
    },
    koreanFootFit: {},
    targetUsers: {
      "recommended": [
        "이중폼과 S자 카본의 전환을 시착 비교하려는 러너",
        "설포 주름·앞쪽 볼륨·고정을 확인하려는 러너"
      ],
      "notRecommended": [
        "직접 착화에서 설포 압박·안감 마찰이 생기는 경우",
        "앞쪽 공간과 카본 굽힘이 맞지 않는 경우"
      ]
    },
    features: [
      "PWRRUN HG 상층 · PWRRUN PB 하층 · S자 카본 플레이트",
      "220g · 힐/전족부 38.1/28.6mm (RunRepeat)",
      "힐/전족부 SA 139/103 · 에너지 리턴 71.7/71.5% (RunRepeat). RR 주폼PWRRUN PB35.1AC·상층PWRRUN HG33.5AC를 구분합니다. 짧은 마모 시험과 다른 신발의450/640km 연구를 이 모델의300km수명·후반 무릎 보호로 옮기지 않습니다.",
      "한국 와이드 SKU는 미확인입니다. RR 내부 최광폭96.5mm·엄지72.5mm·높이27.7mm를 외부 플랫폼118.9mm와 혼용하지 않습니다."
    ],
    priceAnalysis: {
      "msrp": 269000,
      "priceTier": "premium",
      "alternatives": [
        "nike-alphafly-3",
        "asics-metaspeed-sky-plus",
        "adidas-adios-pro-4"
      ]
    },
    detailedSpecs: {
      "weight": "220g (RunRepeat 공시 검체 정책:남성US9). DOR 소개 남성218g(US9)·여성184g(US8),40/32mm·드롭8mm. RR220g·38.1/28.6mm·9.5mm와 구분합니다. 개별 RR 검체 라벨은 독립 확인하지 못했습니다.",
      "stackHeight": "38.1/28.6mm (RunRepeat 힐/전족부 실측)",
      "drop": "9.5mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.",
      "midsole": "PWRRUN HG 상층 · PWRRUN PB 하층 · S자 카본 플레이트 · 35.1 AC(Asker C) · 힐/전족부 SA 139/103 · 에너지 리턴 71.7/71.5%. RR 주폼PWRRUN PB35.1AC·상층PWRRUN HG33.5AC를 구분합니다. 짧은 마모 시험과 다른 신발의450/640km 연구를 이 모델의300km수명·후반 무릎 보호로 옮기지 않습니다.",
      "plate": "두 폼 사이의 S자 카본 플레이트. 곡률과 개인 착화감으로 임상 보호를 판정하지 않습니다.",
      "width": "RunRepeat 내부 최광폭 96.5mm / 엄지 부위 72.5mm / 엄지 높이 27.7mm. 한국 와이드 SKU는 미확인입니다. RR 내부 최광폭96.5mm·엄지72.5mm·높이27.7mm를 외부 플랫폼118.9mm와 혼용하지 않습니다.",
      "durability": "검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.",
      "price": "한국 공식에서 확인한 여성 WHITE/CROCUS 일반M 상품 정가269,000원·확인 시 할인가188,300원. 표시상250mm만 선택 가능이었으며 판매SKU 텍스트·남성 현재 정가·한국 와이드 SKU는 미확인입니다. 대표 가격은 확인한 여성 상품의 현재 정가 범위입니다."
    },
    reviews: [
      {
        "userType": "원문 기반 에디터 분석",
        "source": "editor",
        "sourceUrl": "https://runrepeat.com/saucony-endorphin-pro-4",
        "text": "220g과 SA 139/103·에너지 리턴 71.7/71.5%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 주폼PWRRUN PB35.1AC·상층PWRRUN HG33.5AC를 구분합니다. 짧은 마모 시험과 다른 신발의450/640km 연구를 이 모델의300km수명·후반 무릎 보호로 옮기지 않습니다. 한국 와이드 SKU는 미확인입니다. RR 내부 최광폭96.5mm·엄지72.5mm·높이27.7mm를 외부 플랫폼118.9mm와 혼용하지 않습니다."
      },
      {
        "userType": "외부 착화 의견 요약 · Doctors of Running",
        "source": "editor",
        "sourceUrl": "https://www.doctorsofrunning.com/saucony-endorphin-pro-4-review-2024/",
        "text": "DOR의 Matt(남성US10)은 길이가 맞고 레이서치고 넓고 높은 부피, 설포 주름과 거친 안감을 언급하며 자신의 긴 주행에 잘 맞았다고 평가했습니다. Andrea(여성US10,평소9.5)는 개인적으로0.5업을 유지했으며 단단한 체감 때문에 짧고 빠른 대회를 선호했습니다. 두 사람의 용도 의견이 갈려 공통 최적 거리·페이스나 사이즈 업 처방을 정하지 않습니다."
      }
    ],
    similarShoes: [
      "nike-alphafly-3",
      "asics-metaspeed-sky-plus",
      "hoka-rocket-x-3",
      "puma-deviate-nitro-elite-3"
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
        "url": "https://naver.me/x0OoxmwE"
      },
      {
        "store": "쿠팡",
        "url": "https://link.coupang.com/a/g5ZfeMbi68",
        "note": "2026-11-10 연결 상품의 모델명·선택 정보를 대조했습니다. 사이즈·폭·구성·최종 가격과 현재 재고는 판매처에서 확인하세요."
      }
    ],
    verification: {
      "checkedAt": "2026-11-09",
      "scope": "한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
      "sources": [
        {
          "label": "한국 공식 women · M(일반) · null",
          "url": "https://www.saucony.co.kr/product/detail.html?product_no=95",
          "note": "한국 공식에서 확인한 여성 WHITE/CROCUS 일반M 상품 정가269,000원·확인 시 할인가188,300원. 표시상250mm만 선택 가능이었으며 판매SKU 텍스트·남성 현재 정가·한국 와이드 SKU는 미확인입니다. 대표 가격은 확인한 여성 상품의 현재 정가 범위입니다."
        },
        {
          "label": "RunRepeat 엔돌핀 프로 4",
          "url": "https://runrepeat.com/saucony-endorphin-pro-4",
          "note": "공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 220g · 38.1/28.6mm · 드롭9.5mm. SA 139/103 · ER 71.7/71.5%. RR 주폼PWRRUN PB35.1AC·상층PWRRUN HG33.5AC를 구분합니다. 짧은 마모 시험과 다른 신발의450/640km 연구를 이 모델의300km수명·후반 무릎 보호로 옮기지 않습니다."
        },
        {
          "label": "Doctors of Running 착화 리뷰",
          "url": "https://www.doctorsofrunning.com/saucony-endorphin-pro-4-review-2024/",
          "note": "DOR 소개 남성218g(US9)·여성184g(US8),40/32mm·드롭8mm. RR220g·38.1/28.6mm·9.5mm와 구분합니다. 개별 RR 검체 라벨은 독립 확인하지 못했습니다."
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
        "판매·재고는 확인한SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다."
      ]
    },
  };
