import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'new-balance-sc-elite-v5',
  slug: 'new-balance-sc-elite-v5',
  brand: 'New Balance',
  name: 'SC Elite V5',
  image: '/images/shoes/newbalance/scelitev5/side.webp',
  images: [
    '/images/shoes/newbalance/scelitev5/side.webp',
    '/images/shoes/newbalance/scelitev5/front.webp',
    '/images/shoes/newbalance/scelitev5/back.webp',
    '/images/shoes/newbalance/scelitev5/top.webp',
    '/images/shoes/newbalance/scelitev5/outsole.webp',
  ],
  category: '레이싱',
  description: 'PEBA 기반 FuelCell 이중층 · Energy Arc 카본 구조의 SC Elite V5. 실험실 198g·힐/전족부 39.3/28.6mm. 한국 현재 정가 미확인.',
  oneliner: '198g 실험실 무게 · PEBA 기반 FuelCell 이중층 · Energy Arc 카본',
  editorComment: "2026-11-09 원문 재확인. 뉴발란스 실운영 한국 공식 검색에서 현재 V6만 9개 확인돼 V5의 현행정가·판매 SKU·성별·폭·재고는 미확인입니다. V6가격과 QA·개발호스트 캐시를 V5현재 상품 증거로 사용하지 않습니다. 미노출을 단종 확정으로 해석하지 않습니다. DOR 소개 남성 213g(US9.5)·여성 165g(US7),40/32mm·8mm. RR198g·39.3/28.6mm·10.7mm 와 성별·사이즈·공시조건을 구분합니다. RR 주폼 33.8AC·보조 31.7AC 와 DOR 의 단단한 전체 주행감은 다른 지표입니다. RR16.2N굽힘과 리뷰어의 무유연성 체감도 다릅니다. 제조사의 100%PEBA주장은 DOR 에 인용된 설명이며 다른 폼 450km연구를 이 모델 300km수명으로 옮기지 않습니다. DOR Matt(남성 US10)은 길이가 맞고 낮은 볼륨이지만 앞쪽은 넓으며 힐·중족 고정이 좋았다고 느꼈습니다. 긴 템포·크루즈에 선호했지만 좁은 뒤쪽과 뻣뻣한 앞쪽을 한계로 봤습니다. Andrea(여성 US9.5)는 앞쪽과 고정이 편했지만 완만한 로커·안쪽 전족 플레어 때문에 추진감이 적다고 느꼈습니다. 개인별 기록 비교를 통제된 성능 개선율로 인용하지 않습니다. 한국 현재 와이드 SKU 는 미확인입니다. RR 내부 최광폭 93.8mm·엄지 74.5mm·높이 26.4mm 를 근거로 레이스 후반 모든 넓은 발에 압박이 없다고 보장하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
  tags: [
    '레이싱',
    '카본 플레이트',
    '엘리트',
  ],
  specs: {
    weight: 198,
    drop: 10.7,
  },
  biomechanics: {
    stackHeight: {
      heel: 39.3,
      forefoot: 28.6,
    },
    drop: 10.7,
    carbonPlate: true,
    plateType: 'Energy Arc full-length carbon plate',
    midsoleType: 'PEBA 기반 FuelCell 이중층 · Energy Arc 카본',
  },
  detailedSpecs: {
    weight: "198g (RunRepeat 공시 검체 정책:남성 US9). DOR 소개 남성 213g(US9.5)·여성 165g(US7),40/32mm·8mm. RR198g·39.3/28.6mm·10.7mm 와 성별·사이즈·공시조건을 구분합니다.",
    stackHeight: '39.3/28.6mm (RunRepeat 힐/전족부 실측)',
    drop: '10.7mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: "PEBA 기반 FuelCell 이중층 · Energy Arc 카본 · 33.8 AC(Asker C) · 힐/전족부 SA 144/112 · 에너지 리턴 74.8/74.9%. RR 주폼 33.8AC·보조 31.7AC 와 DOR 의 단단한 전체 주행감은 다른 지표입니다. RR16.2N굽힘과 리뷰어의 무유연성 체감도 다릅니다. 제조사의 100%PEBA주장은 DOR 에 인용된 설명이며 다른 폼 450km연구를 이 모델 300km수명으로 옮기지 않습니다.",
    plate: '두 폼층 사이의 Energy Arc 카본 플레이트. FuelCell이라는 이름만으로 Rebel·Trainer와 같은 배합이라고 보지 않습니다.',
    width: "RunRepeat 내부 최광폭 93.8mm / 엄지 부위 74.5mm / 엄지 높이 26.4mm. 한국 현재 와이드 SKU 는 미확인입니다. RR 내부 최광폭 93.8mm·엄지 74.5mm·높이 26.4mm 를 근거로 레이스 후반 모든 넓은 발에 압박이 없다고 보장하지 않습니다.",
    durability: "검증된 공통 수명 km 미확인. 짧은 착화·마모 깊이를 수명 km로 환산하지 않습니다.",
    price: "뉴발란스 실운영 한국 공식 검색에서 현재 V6만 9개 확인돼 V5의 현행정가·판매 SKU·성별·폭·재고는 미확인입니다. V6가격과 QA·개발호스트 캐시를 V5현재 상품 증거로 사용하지 않습니다. 미노출을 단종 확정으로 해석하지 않습니다.",
  },
  koreanFootFit: {
  },
  priceAnalysis: {
    priceTier: 'super-premium',
    alternatives: [
      'nike-alphafly-3',
      'asics-metaspeed-sky-plus',
      'adidas-adios-pro-4',
    ],
  },
  targetUsers: {
    recommended: [
      'Energy Arc카본과 낮은로커 전환을 비교하려는 러너',
      "실제 매물의 세대·앞쪽 볼륨·힐 고정을 확인하려는 러너",
    ],
    notRecommended: [
      '직접 착화에서 뒤쪽고정·앞쪽굽힘이 맞지 않는 경우',
      "V5와 V6상품 정보가 혼용된 매물",
    ],
  },
  features: [
    'PEBA 기반 FuelCell 이중층 · Energy Arc 카본',
    '198g · 힐/전족부 39.3/28.6mm (RunRepeat)',
    "힐/전족부 SA 144/112 · 에너지 리턴 74.8/74.9% (RunRepeat). RR 주폼 33.8AC·보조 31.7AC 와 DOR 의 단단한 전체 주행감은 다른 지표입니다. RR16.2N굽힘과 리뷰어의 무유연성 체감도 다릅니다. 제조사의 100%PEBA주장은 DOR 에 인용된 설명이며 다른 폼 450km연구를 이 모델 300km수명으로 옮기지 않습니다.",
    "한국 현재 와이드 SKU 는 미확인입니다. RR 내부 최광폭 93.8mm·엄지 74.5mm·높이 26.4mm 를 근거로 레이스 후반 모든 넓은 발에 압박이 없다고 보장하지 않습니다.",
  ],
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/new-balance-fuel-cell-super-comp-elite-v-5',
      text: "198g 과 SA 144/112·에너지 리턴 74.8/74.9% 는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 주폼 33.8AC·보조 31.7AC 와 DOR 의 단단한 전체 주행감은 다른 지표입니다. RR16.2N굽힘과 리뷰어의 무유연성 체감도 다릅니다. 제조사의 100%PEBA주장은 DOR 에 인용된 설명이며 다른 폼 450km연구를 이 모델 300km수명으로 옮기지 않습니다. 한국 현재 와이드 SKU 는 미확인입니다. RR 내부 최광폭 93.8mm·엄지 74.5mm·높이 26.4mm 를 근거로 레이스 후반 모든 넓은 발에 압박이 없다고 보장하지 않습니다.",
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/new-balance-fuelcell-supercomp-elite-v5/',
      text: "DOR Matt(남성 US10)은 길이가 맞고 낮은 볼륨이지만 앞쪽은 넓으며 힐·중족 고정이 좋았다고 느꼈습니다. 긴 템포·크루즈에 선호했지만 좁은 뒤쪽과 뻣뻣한 앞쪽을 한계로 봤습니다. Andrea(여성 US9.5)는 앞쪽과 고정이 편했지만 완만한 로커·안쪽 전족 플레어 때문에 추진감이 적다고 느꼈습니다. 개인별 기록 비교를 통제된 성능 개선율로 인용하지 않습니다.",
    },
  ],
  similarShoes: [
    'nike-alphafly-3',
    'asics-metaspeed-sky-plus',
    'adidas-adios-pro-4',
  ],
  relatedPosts: [
    {
      slug: 'nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026',
      title: '카본 3파전 — 알파플라이 3 vs 메타스카이+ vs SC 엘리트 v5',
    },
    {
      slug: 'new-balance-sc-elite-v5-review',
      title: 'SC Elite V5 심층 후기',
    },
    {
      slug: 'nike-vaporfly-4-vs-alphafly-3-comparison',
      title: "베이퍼플라이 4 vs 알파플라이 3 — 카본 레이서",
    },
    {
      slug: 'new-balance-running-shoes-lineup-tier-guide-2026',
      title: '뉴발란스 러닝화 라인업 — 모델·세대·폭',
    },
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/5EC4W6S9',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YSGPBv9U',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: "한국 확인 SKU 의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
    sources: [
      {
        label: '뉴발란스 한국 실운영 검색 범위',
        url: 'https://www.nbkorea.com/product/searchResult.action?schWord=SC%20Elite%20V5',
        note: "V5검색에 V6만 9개. V5의 현재한국상품조건 미확인.",
      },
      {
        label: 'RunRepeat SC Elite V5',
        url: 'https://runrepeat.com/new-balance-fuel-cell-super-comp-elite-v-5',
        note: "공시 검체 정책:남성 US9. 개별 검체 SKU·폭은 미확인. 198g · 39.3/28.6mm · 드롭 10.7mm. SA 144/112 · ER 74.8/74.9%. RR 주폼 33.8AC·보조 31.7AC 와 DOR 의 단단한 전체 주행감은 다른 지표입니다. RR16.2N굽힘과 리뷰어의 무유연성 체감도 다릅니다. 제조사의 100%PEBA주장은 DOR 에 인용된 설명이며 다른 폼 450km연구를 이 모델 300km수명으로 옮기지 않습니다.",
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/new-balance-fuelcell-supercomp-elite-v5/',
        note: "DOR 소개 남성 213g(US9.5)·여성 165g(US7),40/32mm·8mm. RR198g·39.3/28.6mm·10.7mm 와 성별·사이즈·공시조건을 구분합니다.",
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: "내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값입니다. AC 와 HA 는 직접 비교하지 않습니다. 시점·측정법 버전의 차이를 구분하세요.",
      },
    ],
    limitations: [
      "질환 예방·치료 효과, 공통 최적 페이스와 수명 km는 확인하지 못해 관련 등급·수명·km당 비용을 비웁니다.",
      '에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.',
      "판매·재고는 확인한 SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다.",
    ],
  },
};
