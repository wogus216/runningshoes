import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'new-balance-1080-v14',
  slug: 'new-balance-1080-v14',
  brand: 'New Balance',
  name: '1080 V14',
  image: '/images/shoes/newbalance/1080v14/side.webp',
  images: [
    '/images/shoes/newbalance/1080v14/side.webp',
    '/images/shoes/newbalance/1080v14/front.webp',
    '/images/shoes/newbalance/1080v14/back.webp',
    '/images/shoes/newbalance/1080v14/top.webp',
    '/images/shoes/newbalance/1080v14/outsole.webp',
  ],
  category: '쿠션화',
  description: 'Fresh Foam X · 비플레이트 로커 구조의 1080 V14. 실험실 285g·힐/전족부 37/32.8mm. 한국 현재 정가 미확인.',
  oneliner: '285g 실험실 무게 · Fresh Foam X · 비플레이트 로커',
  editorComment: '2026-11-09 원문 재확인. 한국 공식1080 V14 검색에서 상품을 확인하지 못해 현재 정가·성별·폭·SKU·재고는 미확인입니다. 과거 QA 호스트의199,000원·남성2E 자료를 현재 운영 상품 증거로 사용하지 않습니다. DOR 소개 남성300g(US9.5)·여성235g(US8),38/32mm·드롭6mm. RR285g·37.0/32.8mm·4.2mm와 성별·사이즈 조건을 구분합니다.  DOR의 David(남성US9.5)은 길이가 맞고 여유 있는 고정과 패딩된 카운터를 느꼈으며, Andrea(여성US9.5)는 길이가 맞지만 낮고 조이는 중족부 볼륨을 느꼈습니다. 두 리뷰어의 따뜻한 어퍼 의견과 RR의 통기 시험은 다른 조건입니다. 기본 Fresh Foam X 모델이며 V15 Infinion으로 혼동하지 않습니다. 한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭95.4mm·엄지69.8mm·높이27.0mm가 같은 폭이라는 뜻은 아닙니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '쿠션화',
    '장거리',
    '프리미엄',
  ],
  specs: {
    weight: 285,
    drop: 4.2,
  },
  biomechanics: {
    stackHeight: {
      heel: 37,
      forefoot: 32.8,
    },
    drop: 4.2,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Fresh Foam X · 비플레이트 로커',
  },
  detailedSpecs: {
    weight: '285g (RunRepeat 공시 검체 정책:남성US9). DOR 소개 남성300g(US9.5)·여성235g(US8),38/32mm·드롭6mm. RR285g·37.0/32.8mm·4.2mm와 성별·사이즈 조건을 구분합니다.',
    stackHeight: '37/32.8mm (RunRepeat 힐/전족부 실측)',
    drop: '4.2mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'Fresh Foam X · 비플레이트 로커 · 28.5 AC(Asker C) · 힐/전족부 SA 142/128 · 에너지 리턴 58/59.4%. ',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 95.4mm / 엄지 부위 69.8mm / 엄지 높이 27mm. 한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭95.4mm·엄지69.8mm·높이27.0mm가 같은 폭이라는 뜻은 아닙니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식1080 V14 검색에서 상품을 확인하지 못해 현재 정가·성별·폭·SKU·재고는 미확인입니다. 과거 QA 호스트의199,000원·남성2E 자료를 현재 운영 상품 증거로 사용하지 않습니다.',
  },
  koreanFootFit: {
  },
  priceAnalysis: {
    priceTier: 'premium',
    alternatives: [
      'asics-gel-nimbus-28',
      'brooks-glycerin-22',
    ],
  },
  targetUsers: {
    recommended: [
      'Fresh Foam X의 부드러운 착화를 비교하려는 러너',
      '앞코 테이퍼와 중족부 볼륨을 직접 확인하려는 러너',
    ],
    notRecommended: [
      '앞쪽·중족부 압박이나 어퍼 열감이 불편한 경우',
      '가벼운 무게·지속적인 빠른 반응이 우선인 경우',
    ],
  },
  features: [
    'Fresh Foam X · 비플레이트 로커',
    '285g · 힐/전족부 37/32.8mm (RunRepeat)',
    '힐/전족부 SA 142/128 · 에너지 리턴 58/59.4% (RunRepeat). ',
    '한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭95.4mm·엄지69.8mm·높이27.0mm가 같은 폭이라는 뜻은 아닙니다.',
  ],
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/new-balance-fresh-foam-x-1080-v14',
      text: '285g과 SA 142/128·에너지 리턴 58/59.4%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다.  한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭95.4mm·엄지69.8mm·높이27.0mm가 같은 폭이라는 뜻은 아닙니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/new-balance-fresh-foam-x-1080-v14/',
      text: 'DOR의 David(남성US9.5)은 길이가 맞고 여유 있는 고정과 패딩된 카운터를 느꼈으며, Andrea(여성US9.5)는 길이가 맞지만 낮고 조이는 중족부 볼륨을 느꼈습니다. 두 리뷰어의 따뜻한 어퍼 의견과 RR의 통기 시험은 다른 조건입니다. 기본 Fresh Foam X 모델이며 V15 Infinion으로 혼동하지 않습니다.',
    },
  ],
  similarShoes: [
    'new-balance-1080-v15',
    'new-balance-880-v15',
    'brooks-glycerin-22',
    'asics-gel-nimbus-28',
  ],
  purchaseLinks: [
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YNVlXtts',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '뉴발란스 한국 공식 검색 범위',
        url: 'https://www.nbkorea.com/product/searchResult.action?schWord=1080%2520V14',
        note: '현재 검색0건. 품절상품 제외 설정은 별도 확인하지 못해 전체 미판매로 해석하지 않습니다.',
      },
      {
        label: 'RunRepeat 1080 V14',
        url: 'https://runrepeat.com/new-balance-fresh-foam-x-1080-v14',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 285g · 37/32.8mm · 드롭4.2mm. SA 142/128 · ER 58/59.4%. ',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/new-balance-fresh-foam-x-1080-v14/',
        note: 'DOR 소개 남성300g(US9.5)·여성235g(US8),38/32mm·드롭6mm. RR285g·37.0/32.8mm·4.2mm와 성별·사이즈 조건을 구분합니다.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: '내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값입니다. AC와HA는 직접 비교하지 않습니다. 시점·측정법 버전의 차이를 구분하세요.',
      },
    ],
    limitations: [
      '질환 예방·치료 효과, 공통 최적 페이스와 수명km는 확인하지 못해 관련 등급·수명·km당 비용을 비웁니다.',
      '에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.',
      '판매·재고는 확인한SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다.',
    ],
  },
};
