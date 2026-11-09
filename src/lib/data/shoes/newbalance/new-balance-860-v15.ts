import type { Shoe } from '@/types/shoe';

// 원문 재확인: 2026-11-09. 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'new-balance-860-v15',
  slug: 'new-balance-860-v15',
  brand: 'New Balance',
  name: '860 V15',
  image: '/images/shoes/newbalance/860v15/side.webp',
  images: [
    '/images/shoes/newbalance/860v15/side.webp',
    '/images/shoes/newbalance/860v15/front.webp',
    '/images/shoes/newbalance/860v15/back.webp',
    '/images/shoes/newbalance/860v15/top.webp',
    '/images/shoes/newbalance/860v15/angle.webp',
  ],
  category: '안정화',
  rating: 4.5,
  price: 189000,
  description: '이중경도 Fresh Foam X와 3/4 New EVA 필름 지지 구조를 쓰는 안정화. 한국 남성2E·4E와 여성D 정가189,000원을 확인했습니다.',
  oneliner: '860 v15: 한국 남성2E·4E, 여성D를 확인한 데일리 안정화',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 정가189,000원과 남성2E·4E, 여성D 상품을 확인했습니다. RunRepeat 무게332g, 힐/전족부39.7/32.1mm, 드롭7.6mm이며 한국 공식 드롭은6mm입니다. 공식 남성330g은 측정 사이즈가 적혀 있지 않아 US9 실측332g과 같은 조건으로 보지 않습니다. 엄지 부위75.1mm만 보고 전체 핏이 넓다고 결론 낼 수는 없습니다. 내부 최광폭93.6mm는 다른 위치의 치수입니다. 리뷰어들은 쉬운 러닝·걷기에 활용했지만, 단단한 힐카운터와 전족부 용적에 대한 주의도 있습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '안정화',
    '이중폼',
    '와이드',
  ],
  specs: {
    weight: 332,
    cushioning: 8,
    responsiveness: 8,
    stability: 9,
    drop: 7.6,
  },
  biomechanics: {
    stackHeight: {
      heel: 39.7,
      forefoot: 32.1,
    },
    drop: 7.6,
    carbonPlate: false,
    plateType: '3/4 New EVA 필름 지지 구조 (한국 공식)',
    midsoleType: '이중경도 Fresh Foam X',
  },
  detailedSpecs: {
    weight: '332g (RunRepeat 남성 US9 공시 기준) / 한국 공식 남성330g·여성263g (사이즈 조건 미표기)',
    stackHeight: '39.7/32.1mm (RunRepeat 힐/전족부) / 해외 브랜드 표기40/34mm',
    drop: '7.6mm (RunRepeat) / 6mm (한국 공식)',
    midsole: '이중경도 Fresh Foam X',
    plate: '3/4 New EVA 필름 (한국 공식) / 해외 리뷰 Stability Plane 표기',
    outsole: '고무 아웃솔',
    upper: '엔지니어드 메쉬',
    width: 'RunRepeat 내부 최광폭93.6mm / 엄지 부위75.1mm. 한국 남성2E·4E / 여성D (2026-11-09). 실험실 표본 폭은 미확인으로 국내2E·4E 치수에 대입하지 않음.',
    durability: '수명 km 미확인. RunRepeat 아웃솔 마모 깊이1.4mm는 수명 km로 환산하지 않음.',
    price: '189,000원 (한국 남성2E·4E, 여성D 정가, 2026-11-09)',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },
  priceAnalysis: {
    msrp: 189000,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: [
      'asics-gel-kayano-32',
      'brooks-adrenaline-gts-25',
      'saucony-guide-18',
    ],
    valueAdvantages: [
      '공식 2E·4E 옵션',
      '이중 밀도 Fresh Foam X',
      '3/4 EVA 필름 플레이트',
      '넓어진 힐 플랫폼',
    ],
  },
  targetUsers: {
    recommended: [
      '이중폼 안정화의 착화 후보를 찾는 러너',
      '남성2E·4E 또는 여성D 폭을 비교하려는 러너',
    ],
    notRecommended: [
      '가벼운 템포화를 원하는 경우',
      '단단한 힐카운터나 낮은 전족부 용적이 맞지 않는 경우',
    ],
  },
  features: [
    '이중경도 Fresh Foam X',
    '3/4 New EVA 필름 지지 구조 (한국 공식)',
    '332g (RunRepeat 남성 US9 공시 기준)',
    '힐/전족부 SA134/127 · ER57.5/65.2% (RunRepeat)',
    '한국 남성2E·4E / 여성D 정가189,000원 (2026-11-09)',
  ],
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/new-balance-fresh-foam-x-860-v-15',
      text: 'v14 대비 실험실 무게37g, 힐 스택2.9mm가 늘었습니다. 엄지 부위는2.1mm 넓지만 내부 최광폭은0.8mm 좁습니다. 한 너비 숫자만으로 전체 착화가 넓어졌다고 결론 내리지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/new-balance-fresh-foam-x-860-v15-review/',
      text: '쉬운 러닝·걷기 중심의 무거운 안정화로 평가했습니다. 전족부 용적과 단단한 힐카운터를 지적했고, 보조기 호환 의견은 RunRepeat와 갈립니다. 인솔이 빠진다는 사실만으로 보조기 적합성을 보장하지 않습니다.',
    },
  ],
  similarShoes: [
    'asics-gel-kayano-33',
    'brooks-adrenaline-gts-25',
    'saucony-guide-18',
  ],
  relatedPosts: [
    {
      slug: 'new-balance-860-v14-vs-v15-comparison',
      title: '860 v14 vs v15 — 세대 비교',
    },
    {
      slug: 'kayano-33-vs-glycerin-gts-22-vs-860-v15-2026',
      title: '카야노33 vs 글리세린GTS22 vs 860 v15 — 안정화 3강',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/GowyA70j',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YPX3MVyu',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 남성2E·4E, 여성D의 정가·상품 옵션, 구조와 RunRepeat 실측을 재확인했습니다.',
    sources: [
      {
        label: '뉴발란스 한국 남성2E NBPFGF703L',
        url: 'https://www.nbkorea.com/product/productDetail.action?styleCode=NBPFGF703L&colCode=16&cIdx=',
        note: '189,000원 · 드롭6mm · 남330g/여263g (사이즈 조건 미표기). 남성4E NBPFGF703Q, 여성D NBPFGF704W도 확인.',
      },
      {
        label: 'RunRepeat 860v15',
        url: 'https://runrepeat.com/new-balance-fresh-foam-x-860-v-15',
        note: '332g · 39.7/32.1mm · 드롭7.6mm · 경도25.8 AC.',
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
