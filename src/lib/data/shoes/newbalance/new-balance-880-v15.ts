import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'new-balance-880-v15',
  slug: 'new-balance-880-v15',
  brand: 'New Balance',
  name: '880 V15',
  image: '/images/shoes/newbalance/880v15/side.webp',
  images: [
    '/images/shoes/newbalance/880v15/side.webp',
    '/images/shoes/newbalance/880v15/front.webp',
    '/images/shoes/newbalance/880v15/back.webp',
    '/images/shoes/newbalance/880v15/top.webp',
    '/images/shoes/newbalance/880v15/outsole.webp',
  ],
  category: '입문화',
  rating: 4,
  description: 'Fresh Foam X · 비플레이트 로커 구조의 880 V15. 실험실 286g·힐/전족부 39.7/35.4mm. 한국 현재 정가 미확인.',
  oneliner: '286g 실험실 무게 · Fresh Foam X · 비플레이트 로커',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 검색에서880V15를 찾지 못했고 기존 후보 상품경로는 판매준비/오픈예정 안내로 돌아옵니다. 현재 한국 정가·성별·폭·재고는 미확인입니다. 검색캐시189,000원을 현재 정가로 채택하지 않습니다. DOR 소개 남성300g(US9)·40.5/34.5mm·드롭6mm. RR286g·39.7/35.4mm·4.3mm와 구분. RR 브랜드칸281g도 별도 조건입니다.  DOR의 Matt은 US10에서 대체로 길이가 맞고 약간 넓은보통볼륨이지만 앞코가 좁아지며, 초기 힐 들림·회전 시 옆 움직임을 느꼈습니다. 약간 단단하고 느린 반응의 쿠션·뻣뻣한 로커·안정적인 중립형으로 평가했으나 전통 안정화나 평발 치료 등급으로 바꾸지 않습니다. 한국 2E·여성D 후보는 원문 상품 확인에 실패해 현재 판매 폭으로 채택하지 않습니다. RR내부95.0/74.6/28.5mm를 개인핏과 구분하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '입문화',
    '데일리 러닝',
    '안정적',
  ],
  specs: {
    weight: 286,
    cushioning: 8,
    responsiveness: 7,
    stability: 8,
    drop: 4.3,
  },
  biomechanics: {
    stackHeight: {
      heel: 39.7,
      forefoot: 35.4,
    },
    drop: 4.3,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Fresh Foam X · 비플레이트 로커',
  },
  detailedSpecs: {
    weight: '286g (RunRepeat 공시 검체 정책: 남성US9). DOR 소개 남성300g(US9)·40.5/34.5mm·드롭6mm. RR286g·39.7/35.4mm·4.3mm와 구분. RR 브랜드칸281g도 별도 조건입니다.',
    stackHeight: '39.7/35.4mm (RunRepeat 힐/전족부 실측)',
    drop: '4.3mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'Fresh Foam X · 비플레이트 로커 · 35.5 AC(Asker C) · 힐/전족부 SA 128/114 · 에너지 리턴 56.4/60.1%. ',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 95mm / 엄지 부위 74.6mm / 엄지 높이 28.5mm. 한국 2E·여성D 후보는 원문 상품 확인에 실패해 현재 판매 폭으로 채택하지 않습니다. RR내부95.0/74.6/28.5mm를 개인핏과 구분하세요.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 검색에서880V15를 찾지 못했고 기존 후보 상품경로는 판매준비/오픈예정 안내로 돌아옵니다. 현재 한국 정가·성별·폭·재고는 미확인입니다. 검색캐시189,000원을 현재 정가로 채택하지 않습니다.',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },
  priceAnalysis: {
    valueRating: 8,
    priceTier: 'mid',
    alternatives: [
      'brooks-ghost-17',
      'asics-gel-nimbus-28',
    ],
  },
  targetUsers: {
    recommended: [
      'Fresh Foam X 로커의 착화를 비교하려는 러너',
      '높은 앞쪽 스택과 낮은 실측드롭의 차이를 확인하려는 러너',
    ],
    notRecommended: [
      '앞코 테이퍼·힐 들림이 생기는 경우',
      '매우 가벼운 무게·빠른반응이 우선인 경우',
    ],
  },
  features: [
    'Fresh Foam X · 비플레이트 로커',
    '286g · 힐/전족부 39.7/35.4mm (RunRepeat)',
    '힐/전족부 SA 128/114 · 에너지 리턴 56.4/60.1% (RunRepeat). ',
    '한국 2E·여성D 후보는 원문 상품 확인에 실패해 현재 판매 폭으로 채택하지 않습니다. RR내부95.0/74.6/28.5mm를 개인핏과 구분하세요.',
  ],
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/new-balance-fresh-foam-x-880-v-15',
      text: '286g과 SA 128/114·에너지 리턴 56.4/60.1%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다.  한국 2E·여성D 후보는 원문 상품 확인에 실패해 현재 판매 폭으로 채택하지 않습니다. RR내부95.0/74.6/28.5mm를 개인핏과 구분하세요.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/new-balance-fresh-foam-x-880-v15-review/',
      text: 'DOR의 Matt은 US10에서 대체로 길이가 맞고 약간 넓은보통볼륨이지만 앞코가 좁아지며, 초기 힐 들림·회전 시 옆 움직임을 느꼈습니다. 약간 단단하고 느린 반응의 쿠션·뻣뻣한 로커·안정적인 중립형으로 평가했으나 전통 안정화나 평발 치료 등급으로 바꾸지 않습니다.',
    },
  ],
  similarShoes: [
    'new-balance-1080-v15',
    'new-balance-1080-v14',
    'brooks-glycerin-22',
    'asics-gel-nimbus-28',
  ],
  purchaseLinks: [
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YQEe4HD2',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '뉴발란스 한국 공식 접근 확인 범위',
        url: 'https://www.nbkorea.com/product/searchResult.action?schWord=880',
        note: '10 results contained lifestyle/walking880 variants; no880V15 entry. This search result alone does not prove discontinuation/non-release.',
      },
      {
        label: '뉴발란스 한국 공식 접근 확인 범위',
        url: 'https://www.nbkorea.com/product/productDetail.action?colCode=19&styleCode=NBPFGS107T',
        note: 'Alert: 해당 상품은 현재 판매 준비중이거나 오픈예정인 상품입니다; history.back(). Intended product details and prices not available.',
      },
      {
        label: '뉴발란스 한국 공식 접근 확인 범위',
        url: 'https://www.nbkorea.com/product/productDetail.action?colCode=19&styleCode=NBPFGS108T',
        note: 'Same 판매 준비중/오픈예정 alert and history.back(); no current product price/stock verified.',
      },
      {
        label: 'RunRepeat 880 V15',
        url: 'https://runrepeat.com/new-balance-fresh-foam-x-880-v-15',
        note: '공시 검체 정책: 남성US9. 개별 검체SKU·폭은 미확인. 286g · 39.7/35.4mm · 드롭4.3mm. SA 128/114 · ER 56.4/60.1%. ',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/new-balance-fresh-foam-x-880-v15-review/',
        note: 'DOR 소개 남성300g(US9)·40.5/34.5mm·드롭6mm. RR286g·39.7/35.4mm·4.3mm와 구분. RR 브랜드칸281g도 별도 조건입니다.',
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
