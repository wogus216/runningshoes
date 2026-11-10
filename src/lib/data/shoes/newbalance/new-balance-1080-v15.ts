import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'new-balance-1080-v15',
  slug: 'new-balance-1080-v15',
  brand: 'New Balance',
  name: '1080 V15',
  image: '/images/shoes/newbalance/1080v15/side2.webp',
  images: [
    '/images/shoes/newbalance/1080v15/side2.webp',
    '/images/shoes/newbalance/1080v15/side.webp',
    '/images/shoes/newbalance/1080v15/back.webp',
    '/images/shoes/newbalance/1080v15/angle.webp',
    '/images/shoes/newbalance/1080v15/top.webp',
    '/images/shoes/newbalance/1080v15/outsole.webp',
  ],
  category: '쿠션화',
  price: 209000,
  description: 'Infinion 슈퍼크리티컬 폼 구조의 1080 V15. 한국 남성2E NBPFGF701Y·4E NBPFGF701J, 여성D NBPFGF702O 정가209,000원. 확인한 대표SKU 기준.',
  oneliner: '255g 실험실 무게 · Infinion 슈퍼크리티컬 폼',
  editorComment: '2026-11-09 원문 재확인. 한국 남성2E NBPFGF701Y·4E NBPFGF701J, 여성D NBPFGF702O 정가209,000원. 확인한 대표SKU 기준. 한국 공식 남성261g·여성208g(각 측정 사이즈 미공시), 드롭6mm. 실험실255g·6.4mm와 조건을 구분. RunRepeat 실측 255g,힐/전족부 37/30.6mm·드롭6.4mm입니다.  RunRepeat는 부드럽고 작은 플랫폼의 흔들림을 주의점으로 들었고, DOR의 Matt은 US10에서 매끄러운 힐 전환과 약한 지오메트리 지지를 느꼈습니다. 두 의견을 하나의 임상 안정성 등급으로 합치지 않습니다. 한국 남성2E·4E, 여성D 상품 확인. 해외 RR 검체의 최광폭94.8mm와 엄지 부위73.2mm는 한국 와이드 치수가 아닙니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '쿠션화',
    '장거리',
    '데일리',
    '경량',
  ],
  specs: {
    weight: 255,
    cushioning: 9,
    responsiveness: 8,
    stability: 6,
    drop: 6.4,
  },
  biomechanics: {
    stackHeight: {
      heel: 37,
      forefoot: 30.6,
    },
    drop: 6.4,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Infinion 슈퍼크리티컬 폼',
  },
  detailedSpecs: {
    weight: '255g (RunRepeat 남성US9 공시 기준). 한국 공식 남성261g·여성208g(각 측정 사이즈 미공시), 드롭6mm. 실험실255g·6.4mm와 조건을 구분.',
    stackHeight: '37/30.6mm (RunRepeat 힐/전족부). ',
    drop: '6.4mm (RunRepeat 실측). 공시 조건은 무게 항목에 구분.',
    midsole: 'Infinion 슈퍼크리티컬 폼 · 21.5 AC · 힐/전족부 SA 147/126 · 에너지 리턴 65.9/69.1% (RunRepeat)',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 94.8mm / 엄지 부위 73.2mm / 엄지 높이 27.1mm. 한국 남성2E·4E, 여성D 상품 확인. 해외 RR 검체의 최광폭94.8mm와 엄지 부위73.2mm는 한국 와이드 치수가 아닙니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 남성2E NBPFGF701Y·4E NBPFGF701J, 여성D NBPFGF702O 정가209,000원. 확인한 대표SKU 기준.',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    wideOptions: true,
  },
  priceAnalysis: {
    msrp: 209000,
    priceTier: 'premium',
    alternatives: [
      'asics-gel-nimbus-28',
      'brooks-glycerin-22',
      'new-balance-880-v15',
    ],
  },
  targetUsers: {
    recommended: [
      'Infinion의 부드러운 발밑을 시착해 보려는 러너',
      '한국 남성2E·4E·여성D 옵션을 비교하는 러너',
    ],
    notRecommended: [
      '부드러운 플랫폼에서 흔들림이 느껴지는 경우',
      '더 강한 앞쪽 로커 보조를 선호하는데 실제 전환감이 맞지 않는 경우',
    ],
  },
  features: [
    'Infinion 슈퍼크리티컬 폼',
    '255g (RunRepeat 남성US9 공시 기준)',
    '힐/전족부 SA 147/126 · 에너지 리턴 65.9/69.1% (RunRepeat)',
    '한국 남성2E·4E, 여성D 상품 확인. 해외 RR 검체의 최광폭94.8mm와 엄지 부위73.2mm는 한국 와이드 치수가 아닙니다.',
  ],
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/new-balance-1080-v-15',
      text: '255g과 SA 147/126·에너지 리턴 65.9/69.1%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다.  한국 남성2E·4E, 여성D 상품 확인. 해외 RR 검체의 최광폭94.8mm와 엄지 부위73.2mm는 한국 와이드 치수가 아닙니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/new-balance-1080-v15-review-2026/',
      text: 'RunRepeat는 부드럽고 작은 플랫폼의 흔들림을 주의점으로 들었고, DOR의 Matt은 US10에서 매끄러운 힐 전환과 약한 지오메트리 지지를 느꼈습니다. 두 의견을 하나의 임상 안정성 등급으로 합치지 않습니다.',
    },
  ],
  similarShoes: [
    'new-balance-1080-v14',
    'new-balance-880-v15',
    'brooks-glycerin-22',
    'asics-gel-nimbus-28',
  ],
  relatedPosts: [
    {
      slug: 'new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026',
      title: '1080 v15 vs 님버스 28 — 프리미엄 쿠션 대결',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/GB3rCpYe',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 남성 · 2E · NBPFGF701Y',
        url: 'https://www.nbkorea.com/product/productDetail.action?styleCode=NBPFGF701Y&colCode=30&cIdx=',
        note: '한국 남성2E NBPFGF701Y·4E NBPFGF701J, 여성D NBPFGF702O 정가209,000원. 확인한 대표SKU 기준.',
      },
      {
        label: '한국 공식 남성 · 4E · NBPFGF701J',
        url: 'https://www.nbkorea.com/product/productDetail.action?styleCode=NBPFGF701J&colCode=19&cIdx=',
        note: '한국 남성2E NBPFGF701Y·4E NBPFGF701J, 여성D NBPFGF702O 정가209,000원. 확인한 대표SKU 기준.',
      },
      {
        label: '한국 공식 여성 · D · NBPFGF702O',
        url: 'https://www.nbkorea.com/product/productDetail.action?styleCode=NBPFGF702O&colCode=80&cIdx=',
        note: '한국 남성2E NBPFGF701Y·4E NBPFGF701J, 여성D NBPFGF702O 정가209,000원. 확인한 대표SKU 기준.',
      },
      {
        label: 'RunRepeat 1080 V15',
        url: 'https://runrepeat.com/new-balance-1080-v-15',
        note: '남성US9 공시 기준. 255g · 37/30.6mm · 드롭6.4mm. 힐/전족부 SA 147/126 · ER 65.9/69.1%. ',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/new-balance-1080-v15-review-2026/',
        note: '한국 공식 남성261g·여성208g(각 측정 사이즈 미공시), 드롭6mm. 실험실255g·6.4mm와 조건을 구분.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: '검체·측정 위치·버전에 따라 조건이 다릅니다. 내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값이고, AC와HA는 직접 비교하지 않습니다.',
      },
    ],
    limitations: [
      '모델별 질환 예방·치료 효과, 공통 최적 페이스와 수명km를 확인하지 못했습니다. 해당 등급·수명값·km당 비용은 비웁니다.',
      '에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.',
      '확인한 상품·성별·폭·시점의 조건만 적용합니다. 재고·구매가는 판매처에서 다시 확인하세요.',
    ],
  },
};
