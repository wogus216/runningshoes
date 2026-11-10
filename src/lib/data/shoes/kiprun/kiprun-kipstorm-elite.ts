import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'kiprun-kipstorm-elite',
  slug: 'kiprun-kipstorm-elite',
  brand: 'Kiprun',
  name: '킵스톰 엘리트',
  image: '/images/shoes/kiprun/kipstorm-elite/side.webp',
  images: [
    '/images/shoes/kiprun/kipstorm-elite/side.webp',
    '/images/shoes/kiprun/kipstorm-elite/detail.webp',
    '/images/shoes/kiprun/kipstorm-elite/top.webp',
    '/images/shoes/kiprun/kipstorm-elite/outsole.webp',
  ],
  category: '레이싱',
  rating: 4,
  description: 'Fastech+ 위층 PEBA · 아래층 ATPU · 카본 판 구조의 킵스톰 엘리트. RunRepeat 실험실 검체 218g·38.1/31.4mm. 한국 현재 정가 미확인.',
  oneliner: 'Fastech+ 위층 PEBA · 아래층 ATPU · 카본 판 · 218g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 한국 정확 모델의 상품·정가·폭·현재 재고는 미확인입니다. 미확인을 한국 미출시·단종으로 단정하지 않습니다. RR 218g·38.1/31.4mm·6.7mm와 영국 공시 215g(사이즈 미확인)·39/34mm·5mm는 조건이 다릅니다. 34.5AC는 위층 PEBA의 경도입니다. 냉간 절대 경도·7% 변화율·350km 수명·기록 향상은 확인하지 못했습니다. 외부 힐 바닥 폭 81.6mm를 내부 공간으로 쓰지 않습니다. 정확 모델의 DOR 개별 착화 리뷰는 이번 범위에서 확인하지 못했습니다. RR 수치와 제조사 설명을 자체 착화 경험처럼 쓰지 않습니다. RR 내부 최광폭 95.6mm·엄지 69.7mm·높이 26.8mm입니다. 실제 길이·발톱 위 높이·중족 압박·힐 고정을 확인하세요. 한국 다른 성별·폭의 치수로 직접 대입하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '카본 플레이트',
    '슈퍼슈즈',
    'PEBA',
    '가성비 카본',
  ],
  specs: {
    weight: 218,
    cushioning: 9,
    responsiveness: 9,
    stability: 6,
    drop: 6.7,
  },
  biomechanics: {
    stackHeight: {
      heel: 38.1,
      forefoot: 31.4,
    },
    drop: 6.7,
    carbonPlate: true,
    plateType: 'Carbon plate; exact geometry unverified',
    midsoleType: 'Fastech+ 위층 PEBA · 아래층 ATPU · 카본 판',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'excellent',
    summerCompatibility: 'fair',
  },
  targetUsers: {
    recommended: [
      '실제 규격의 고정과 전환을 비교하려는 러너',
      '개별 공시·검체 조건을 구분해 선택하려는 러너',
    ],
    notRecommended: [
      '시착·주행에서 발등 압박·마찰·불편한 전환이 남는 경우',
    ],
  },
  features: [
    'Fastech+ 위층 PEBA · 아래층 ATPU · 카본 판',
    '218g · 38.1/31.4mm · 드롭 6.7mm (RunRepeat 실험실 검체)',
    '카본 플레이트가 있는 구조입니다. 영국 문서의 아웃솔 전체 성분 비율을 미드솔 배합이나 카본 순도로 바꾸지 않습니다.',
    'RR 내부 최광폭 95.6mm·엄지 69.7mm·높이 26.8mm입니다. 실제 길이·발톱 위 높이·중족 압박·힐 고정을 확인하세요. 한국 다른 성별·폭의 치수로 직접 대입하지 않습니다.',
  ],
  priceAnalysis: {
    valueRating: 8,
    priceTier: 'premium',
    alternatives: [
      'saucony-endorphin-pro-4',
      'mizuno-hyperwarp-pro',
      'puma-deviate-nitro-elite-3',
    ],
  },
  detailedSpecs: {
    weight: '218g (RunRepeat 실험실 검체). RR 218g·38.1/31.4mm·6.7mm와 영국 공시 215g(사이즈 미확인)·39/34mm·5mm는 조건이 다릅니다.',
    stackHeight: '38.1/31.4mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '6.7mm (RunRepeat 실험실 검체). RR 218g·38.1/31.4mm·6.7mm와 영국 공시 215g(사이즈 미확인)·39/34mm·5mm는 조건이 다릅니다.',
    midsole: 'Fastech+ 위층 PEBA · 아래층 ATPU · 카본 판. 주폼 34.5AC, 힐/전족부 SA 148/126·에너지 리턴 68.9/74.8%. 34.5AC는 위층 PEBA의 경도입니다. 냉간 절대 경도·7% 변화율·350km 수명·기록 향상은 확인하지 못했습니다. 외부 힐 바닥 폭 81.6mm를 내부 공간으로 쓰지 않습니다.',
    plate: '카본 플레이트가 있는 구조입니다. 영국 문서의 아웃솔 전체 성분 비율을 미드솔 배합이나 카본 순도로 바꾸지 않습니다.',
    width: 'RR 내부 최광폭 95.6mm·엄지 부위 69.7mm·높이 26.8mm. RR 내부 최광폭 95.6mm·엄지 69.7mm·높이 26.8mm입니다. 실제 길이·발톱 위 높이·중족 압박·힐 고정을 확인하세요. 한국 다른 성별·폭의 치수로 직접 대입하지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 정확 모델의 상품·정가·폭·현재 재고는 미확인입니다. 미확인을 한국 미출시·단종으로 단정하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/kiprun-kipstorm-elite',
      text: 'RR 218g·38.1/31.4mm·6.7mm와 영국 공시 215g(사이즈 미확인)·39/34mm·5mm는 조건이 다릅니다. 34.5AC는 위층 PEBA의 경도입니다. 냉간 절대 경도·7% 변화율·350km 수명·기록 향상은 확인하지 못했습니다. 외부 힐 바닥 폭 81.6mm를 내부 공간으로 쓰지 않습니다.',
    },
    {
      userType: '원문 기반 확인 범위 · 착화 후기 미확인',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/kiprun-kipstorm-elite',
      text: '정확 모델의 DOR 개별 착화 리뷰는 이번 범위에서 확인하지 못했습니다. RR 수치와 제조사 설명을 자체 착화 경험처럼 쓰지 않습니다.',
    },
  ],
  similarShoes: [
    'saucony-endorphin-pro-4',
    'mizuno-hyperwarp-pro',
    'puma-deviate-nitro-elite-3',
  ],
  purchaseLinks: [
    {
      store: '데카트론 공식몰',
      url: 'https://www.decathlon.co.kr/p/%EB%82%A8%EC%84%B1-%EC%B9%B4%EB%B3%B8-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-%ED%82%B5%EC%8A%A4%ED%86%B0-%EC%97%98%EB%A6%AC%ED%8A%B8-kiprun-8961380.html',
      price: 269000,
      isOfficial: true,
    },
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '해외 제조사 정확 모델 공시',
        url: 'https://www.decathlon.co.uk/p/kiprun-kipstorm-elite-men-s-running-shoes-with-carbon-plate-green-yellow/362113/c266c132m9001586',
        note: '해당 시장의 상품·체계. 한국 가격·재고로 환산하지 않습니다.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/kiprun-kipstorm-elite',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 218g·38.1/31.4mm·6.7mm. 34.5AC는 위층 PEBA의 경도입니다. 냉간 절대 경도·7% 변화율·350km 수명·기록 향상은 확인하지 못했습니다. 외부 힐 바닥 폭 81.6mm를 내부 공간으로 쓰지 않습니다.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: 'AC·HA·HC, SA·에너지 리턴, BR·구방식1~5와 내부/외부 폭을 구분합니다. 일반 정책은 개별 라벨 확인과 다릅니다.',
      },
    ],
    limitations: [
      '모델별 임상 예방·치료 등급, 공통 최적 페이스·주행 수명·km당 비용은 미확인으로 제거했습니다.',
      '에디터 평점·1~10점·발볼 및 계절 분류·구매 링크는 모든 항목을 새로 검증한 수치나 임상 효과가 아닙니다.',
      '판매 조건은 확인한 상품·시점에 한정합니다. 미확인을 미출시·단종·전국 재고 없음으로 해석하지 않습니다.',
      '정확한 동세대 DOR 개별 착화 리뷰 미확인. 다른 세대로 대체하지 않음.',
    ],
  },
};
