import type { Shoe } from '@/types/shoe';

// 원문 재확인: 2026-11-09. 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'new-balance-860-v14',
  slug: 'new-balance-860-v14',
  brand: 'New Balance',
  name: '860 V14',
  image: '/images/shoes/newbalance/860v14/side.webp',
  images: [
    '/images/shoes/newbalance/860v14/side.webp',
    '/images/shoes/newbalance/860v14/front.webp',
    '/images/shoes/newbalance/860v14/back.webp',
    '/images/shoes/newbalance/860v14/top.webp',
    '/images/shoes/newbalance/860v14/outsole.webp',
  ],
  category: '안정화',
  rating: 4,
  description: '이중경도 Fresh Foam X와 내측 웨지·EVA 필름을 사용하는 안정화. 전통적인 메디얼 포스트 방식과 구분합니다.',
  oneliner: '860 v14: 이중폼·내측 웨지·EVA 필름 구조',
  editorComment: '2026-11-09 원문 재확인. 기존 메디얼 포스트 설명을 내측 웨지와 EVA 필름 구조로 수정했습니다. RunRepeat 무게295g, 힐/전족부36.8/27.5mm, 드롭9.3mm입니다. 경도는 현재26.5 AC이며 과거10.9/23.8 HA 수치의 원문을 재확인하지 못해 사용하지 않습니다. 한국몰에서는 여성D 연관상품의 정가179,000원만 확인했고, 해당 상품 링크는 판매 준비/오픈예정 응답이었습니다. 남성 한국 공식가와 현재 판매 폭, 모델 전체의 판매 종료 여부는 확인하지 못해 가격·폭을 확정하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '안정화',
    '내측 웨지',
    'EVA 필름',
  ],
  specs: {
    weight: 295,
    cushioning: 8,
    responsiveness: 8,
    stability: 9,
    drop: 9.3,
  },
  biomechanics: {
    stackHeight: {
      heel: 36.8,
      forefoot: 27.5,
    },
    drop: 9.3,
    carbonPlate: false,
    plateType: 'EVA 필름 지지 구조',
    midsoleType: '이중경도 Fresh Foam X + 내측 웨지',
  },
  detailedSpecs: {
    weight: '295g (RunRepeat 남성 US9 공시 기준)',
    stackHeight: '36.8/27.5mm (RunRepeat 힐/전족부)',
    drop: '9.3mm (RunRepeat) / 해외 리뷰에 인용된 브랜드8mm',
    midsole: '이중경도 Fresh Foam X + 내측 웨지',
    plate: 'EVA 필름 지지 구조',
    outsole: '고무 아웃솔',
    upper: '엔지니어드 메쉬',
    width: 'RunRepeat 내부 최광폭94.4mm / 엄지 부위73.0mm. 한국 남성 판매 폭 미확인. 여성D는 연관상품명만 확인.',
    durability: '수명 km 미확인. RunRepeat 아웃솔 마모 깊이1.2mm는 수명 km로 환산하지 않음.',
    price: '남성 한국 공식가 미확인. 여성D 연관상품 정가179,000원만 확인; 해당 상품 링크 구매 불가 응답 (2026-11-09)',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    winterCompatibility: 'fair',
    summerCompatibility: 'fair',
  },
  priceAnalysis: {
    valueRating: 8,
    priceTier: 'mid',
    alternatives: [
      'asics-gel-kayano-32',
      'brooks-adrenaline-gts-25',
      'saucony-guide-18',
    ],
    valueAdvantages: [
      '이중경도 Fresh Foam X',
      '내측 웨지와 EVA 필름 구조',
    ],
  },
  targetUsers: {
    recommended: [
      '내측 지지 구조가 있는 데일리 안정화를 비교하는 러너',
      '걷기·쉬운 러닝용 착화 후보를 찾는 러너',
    ],
    notRecommended: [
      '가벼운 템포화를 우선하는 경우',
      '뒤꿈치 패딩·어퍼 내마모성을 중요하게 보는 경우',
    ],
  },
  features: [
    '이중경도 Fresh Foam X',
    '내측 웨지 + EVA 필름 (전통 메디얼 포스트와 구분)',
    '295g (RunRepeat 남성 US9 공시 기준)',
    '힐/전족부 SA126/113 · ER60.8/66.3% (RunRepeat)',
    '한국 남성 정가·판매 폭은 미확인',
  ],
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/new-balance-fresh-foam-x-860-v14',
      text: 'v15와 비교하면 실험실 무게는37g 가볍고 힐 스택은2.9mm 낮습니다. 측정 표본의 차이이며 국내 판매 폭에서 같은 착화 차이를 보장하지 않습니다. 남성 한국 공식가와 실제 판매 폭이 확인되기 전에는 가성비 순위를 확정하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/new-balance-fresh-foam-x-860-v14-review/',
      text: 'v14의 지지를 이중폼·내측 웨지·EVA 필름으로 설명합니다. 쉬운 일상 러닝과 걷기 활용, 내측 지지에 대한 평가이며 개인별 치료·부상 예방 효과를 입증한 연구는 아닙니다.',
    },
  ],
  similarShoes: [
    'asics-gel-kayano-33',
    'brooks-adrenaline-gts-25',
    'saucony-guide-18',
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/GowyA70j',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YPh2sfls',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '해외 실험실 측정·구조를 재확인했습니다. 한국 남성 가격·폭은 미확인 상태로 비웠습니다.',
    sources: [
      {
        label: 'RunRepeat 860v14',
        url: 'https://runrepeat.com/new-balance-fresh-foam-x-860-v14',
        note: '295g · 36.8/27.5mm · 드롭9.3mm · 경도26.5 AC.',
      },
      {
        label: 'Doctors of Running 860v14',
        url: 'https://www.doctorsofrunning.com/new-balance-fresh-foam-x-860-v14-review/',
        note: '전통 포스트에서 내측 웨지·이중폼·EVA 필름으로 바뀐 구조.',
      },
      {
        label: '뉴발란스 한국 여성V15 연관상품',
        url: 'https://www.nbkorea.com/product/productDetail.action?styleCode=NBPFGF704W&colCode=10&cIdx=',
        note: '여성V14 D 연관상품 정가179,000원만 확인. 남성 가격·모델 전체 판매 상태의 근거로 사용하지 않음.',
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
