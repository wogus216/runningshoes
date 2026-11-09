import type { Shoe } from '@/types/shoe';

// 원문 재확인: 2026-11-09. 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'adidas-adizero-evo-sl',
  slug: 'adidas-adizero-evo-sl',
  brand: 'Adidas',
  name: '아디제로 Evo SL',
  image: '/images/shoes/adidas/evosl/side.webp',
  images: [
    '/images/shoes/adidas/evosl/side.webp',
    '/images/shoes/adidas/evosl/angle.webp',
    '/images/shoes/adidas/evosl/back.webp',
    '/images/shoes/adidas/evosl/outsole.webp',
    '/images/shoes/adidas/evosl/top.webp',
    '/images/shoes/adidas/evosl/detail.webp',
  ],
  category: '데일리',
  rating: 5,
  price: 209000,
  description: '전장 Lightstrike Pro와 중족부 플라스틱 생크를 쓰는 뉴트럴 데일리 트레이너. 기본 메쉬 JP7149 기준 한국 공식 정가 209,000원.',
  oneliner: '기본 메쉬 Evo SL: 223g 실험실 무게와 전장 Lightstrike Pro',
  editorComment: '2026-11-09 원문 재확인. 기본 메쉬 JP7149는 한국 공식 209,000원이며, 같은 이름으로 노출되는 219,000원 SFTM 우븐 상품과 구분했습니다. RunRepeat 무게는 223g, 한국 공식은 270mm에서 224g입니다. 힐/전족부 에너지 리턴 74.3/73.5%는 실험실 값이며 기록 향상률이 아닙니다. 느린 러닝부터 템포까지 활용했다는 외부 리뷰가 있지만, 어퍼 고정과 중족부 지지는 착화 의견이 갈립니다. 토박스 엄지 부위 71.6mm와 최광폭 97.5mm를 구분해 보세요. 확인한 한국 SKU는 레귤러 핏이며 모델 전체의 와이드 판매 부재를 뜻하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '데일리',
    '경량',
    '가성비',
    '다목적',
  ],
  specs: {
    weight: 223,
    cushioning: 9,
    responsiveness: 9,
    stability: 6,
    drop: 8,
  },
  biomechanics: {
    stackHeight: {
      heel: 36.1,
      forefoot: 28.1,
    },
    drop: 8,
    carbonPlate: false,
    plateType: null,
    midsoleType: '100% Lightstrike Pro',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },
  targetUsers: {
    recommended: [
      '데일리와 템포를 겸할 뉴트럴 트레이너를 찾는 러너',
      '기본 메쉬 버전의 가벼운 무게를 선호하는 러너',
    ],
    notRecommended: [
      '강한 중족부 지지가 필요한 경우',
      '토박스 앞쪽 압박이 느껴지는 경우',
    ],
  },
  features: [
    '전장 Lightstrike Pro · 중족부 플라스틱 생크',
    '223g (RunRepeat 남성 US9 공시 기준)',
    '힐/전족부 에너지 리턴 74.3/73.5% (RunRepeat)',
    '전족부 Continental · 후족부 클리어 러버',
    '한국 기본 메쉬 JP7149 정가 209,000원 (2026-11-09)',
  ],
  priceAnalysis: {
    msrp: 209000,
    valueRating: 10,
    priceTier: 'mid',
    alternatives: [
      'new-balance-rebel-v5',
      'nike-pegasus-plus',
    ],
  },
  detailedSpecs: {
    weight: '223g (RunRepeat 남성 US9 공시 기준) / 한국 공식 224g (270mm)',
    stackHeight: '36.1/28.1mm (RunRepeat 힐/전족부) / 한국 공식 38/32mm',
    drop: '8mm (RunRepeat) / 6mm (한국 공식)',
    midsole: '전장 Lightstrike Pro',
    plate: '전장 카본 플레이트 없음 · 중족부 플라스틱 생크',
    outsole: '전족부 Continental / 후족부 클리어 러버',
    upper: '기본 메쉬 (JP7149)',
    width: 'RunRepeat 내부 최광폭 97.5mm / 엄지 부위 71.6mm. 확인한 한국 JP7149는 레귤러 핏; 다른 SKU의 폭은 미확인.',
    durability: '수명 km 미확인. RunRepeat 아웃솔 마모 깊이 0.6mm는 수명 km로 환산하지 않음.',
    price: '209,000원 (한국 JP7149 정가, 2026-11-09)',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/adidas-adizero-evo-sl',
      text: '실험실 에너지 리턴과 무게가 비교 강점입니다. 이를 특정 페이스의 효율이나 통증 완화 효과로 해석하지 않습니다. 구매 시에는 기본 메쉬와 우븐 변형의 SKU를 먼저 구분하세요.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/adidas-adizero-evo-sl-review-2024/',
      text: '쉬운 러닝과 템포 등 폭넓은 용도로 평가했으나 중족부가 좁고 지지가 제한적이라고 지적했습니다. 한 리뷰어의 착화 의견이며 모든 러너에게 같은 결과를 보장하지 않습니다.',
    },
  ],
  similarShoes: [
    'new-balance-rebel-v5',
    'nike-pegasus-plus',
  ],
  relatedPosts: [
    {
      slug: 'adidas-adizero-evo-sl-vs-asics-novablast-6-daily-2026',
      title: '에보 SL vs 노바블라스트 6 — 반발이냐 수명이냐',
    },
    {
      slug: 'adidas-adizero-evo-sl-vs-boston-13-daily-2026',
      title: '에보 SL vs 보스턴 13 — 2만원 더 주고 31g을 산다',
    },
    {
      slug: 'superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026',
      title: '슈퍼블라스트3 vs 에보SL vs 마하6 — 슈퍼트레이너 3파전',
    },
    {
      slug: 'adidas-running-shoes-lineup-tier-guide-2026',
      title: '아디다스 러닝화 계급도',
    },
    {
      slug: 'running-shoe-midsole-foam-guide-2026',
      title: '미드솔 폼 완전 해설 — EVA·TPU·PEBA',
    },
  ],
  purchaseLinks: [
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5X8zewlum',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '기본 메쉬 JP7149의 한국 정가·구조, RunRepeat 실측, 외부 착화 의견을 재확인했습니다.',
    sources: [
      {
        label: '아디다스 한국 JP7149',
        url: 'https://www.adidas.co.kr/아디제로-evo-sl/JP7149.html',
        note: '209,000원 · 224g(270mm) · 공식 38/32mm, 드롭6mm.',
      },
      {
        label: 'RunRepeat Evo SL',
        url: 'https://runrepeat.com/adidas-adizero-evo-sl',
        note: '223g · 36.1/28.1mm · SA147/126 · ER74.3/73.5% · 경도43.5 AC.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: '남성 US9 공시 기준. 내부 최광폭과 엄지 부위 너비는 다른 위치이며 한국 판매 폭의 치수를 뜻하지 않음. AC와 HA 경도는 직접 비교하지 않음.',
      },
    ],
    limitations: [
      '모델별 부상 예방·치료 효과, 공통 최적 페이스, 검증된 수명 km는 확인하지 못했습니다. 해당 등급·수명값·km당 비용은 비웁니다.',
      '1~10점과 종합 평점은 에디터의 비교 평가입니다. 실험실 값이나 외부 리뷰어 점수로 환산한 값이 아닙니다.',
      '재고와 가격은 확인한 상품·시점에 한정됩니다. 현재 구매가는 판매처에서 다시 확인하세요.',
    ],
  },
};
