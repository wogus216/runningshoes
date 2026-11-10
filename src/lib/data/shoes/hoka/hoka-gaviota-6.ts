import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'hoka-gaviota-6',
  slug: 'hoka-gaviota-6',
  brand: 'Hoka',
  name: '가비오타 6',
  image: '/images/shoes/hoka/gaviota6/side.webp',
  images: [
    '/images/shoes/hoka/gaviota6/side.webp',
    '/images/shoes/hoka/gaviota6/front.webp',
    '/images/shoes/hoka/gaviota6/top.webp',
    '/images/shoes/hoka/gaviota6/outsole.webp',
  ],
  category: '안정화',
  description: 'CMEVA · H-Frame 구조의 가비오타 6. 실험실 283g·힐/전족부 36/28.7mm. 한국 현재 정가 미확인.',
  oneliner: '283g 실험실 무게 · CMEVA · H-Frame',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 연결 스토어의 정확 모델명 검색에서 상품을 찾지 못해 현재 정가·성별·폭·SKU는 미확인입니다. 검색 결과를 국내 전체 미판매·단종으로 해석하지 않습니다. DOR 소개 남성283g(US9)·여성252g(US8),39/33mm·드롭6mm. RR 실측7.3mm와 분리.  DOR의 Matt은 쉬운 러닝·롱런의 지지를 높게 평가했으나 Bach은 반응성과 가치에 덜 만족했습니다. 지지감도 Matt은 두드러지게, Bach은 덜 간섭적으로 느껴 의견이 갈립니다. 겨울 착화의 단단함은 통제된 계절 비교시험이 아닙니다. H-Frame은 전통 미디얼 포스트와 동일한 구조명으로 쓰지 않습니다. RR 내부 치수와 외부 바닥 폭은 다른 값입니다. 한국 와이드 상품의 현재SKU·재고는 이번에 확인하지 못했습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '안정화',
    'H-Frame',
  ],
  specs: {
    weight: 283,
    drop: 7.3,
  },
  biomechanics: {
    stackHeight: {
      heel: 36,
      forefoot: 28.7,
    },
    drop: 7.3,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'CMEVA · H-Frame',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      '여유 있는 내부 형태와 H-Frame을 시착 비교하려는 러너',
      'CMEVA의 구조적인 발밑 감각을 확인하려는 러너',
    ],
    notRecommended: [
      '직접 시착에서 지지 구조가 불편한 경우',
      '가벼운 무게·높은 반응성이 우선인 경우',
    ],
  },
  features: [
    'CMEVA · H-Frame',
    '283g · 힐/전족부 36/28.7mm (RunRepeat)',
    '힐/전족부 SA 122/111 · 에너지 리턴 45.4/52.4% (RunRepeat). ',
    'RR 내부 치수와 외부 바닥 폭은 다른 값입니다. 한국 와이드 상품의 현재SKU·재고는 이번에 확인하지 못했습니다.',
  ],
  priceAnalysis: {
    priceTier: 'high',
    alternatives: [
      'asics-gel-kayano-32',
      'brooks-adrenaline-gts-25',
      'new-balance-860-v14',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/hoka-gaviota-6',
      text: '283g과 SA 122/111·에너지 리턴 45.4/52.4%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다.  RR 내부 치수와 외부 바닥 폭은 다른 값입니다. 한국 와이드 상품의 현재SKU·재고는 이번에 확인하지 못했습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/hoka-gaviota-6-review-2026/',
      text: 'DOR의 Matt은 쉬운 러닝·롱런의 지지를 높게 평가했으나 Bach은 반응성과 가치에 덜 만족했습니다. 지지감도 Matt은 두드러지게, Bach은 덜 간섭적으로 느껴 의견이 갈립니다. 겨울 착화의 단단함은 통제된 계절 비교시험이 아닙니다. H-Frame은 전통 미디얼 포스트와 동일한 구조명으로 쓰지 않습니다.',
    },
  ],
  detailedSpecs: {
    weight: '283g (RunRepeat 공시 검체 정책:남성US9). DOR 소개 남성283g(US9)·여성252g(US8),39/33mm·드롭6mm. RR 실측7.3mm와 분리.',
    stackHeight: '36/28.7mm (RunRepeat 힐/전족부 실측)',
    drop: '7.3mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'CMEVA · H-Frame · 32.6 AC(Asker C) · 힐/전족부 SA 122/111 · 에너지 리턴 45.4/52.4%. ',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 97.2mm / 엄지 부위 76.7mm / 엄지 높이 28.2mm. RR 내부 치수와 외부 바닥 폭은 다른 값입니다. 한국 와이드 상품의 현재SKU·재고는 이번에 확인하지 못했습니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 연결 스토어의 정확 모델명 검색에서 상품을 찾지 못해 현재 정가·성별·폭·SKU는 미확인입니다. 검색 결과를 국내 전체 미판매·단종으로 해석하지 않습니다.',
  },
  similarShoes: [
    'asics-gel-kayano-33',
    'brooks-adrenaline-gts-25',
    'saucony-hurricane-25',
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://brand.naver.com/hoka/products/12839097291',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '호카 코리아 공식 스토어 연결',
        url: 'https://linktr.ee/hoka_korea',
        note: '공식 스토어 연결 확인',
      },
      {
        label: '한국 공식 스토어 검색 확인 범위',
        url: 'https://brand.naver.com/hoka/search?q=%EA%B0%80%EB%B9%84%EC%98%A4%ED%83%80%206',
        note: '한국 공식 연결 스토어의 정확 모델명 검색에서 상품을 찾지 못해 현재 정가·성별·폭·SKU는 미확인입니다. 검색 결과를 국내 전체 미판매·단종으로 해석하지 않습니다.',
      },
      {
        label: 'RunRepeat 가비오타 6',
        url: 'https://runrepeat.com/hoka-gaviota-6',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 283g · 36/28.7mm · 드롭7.3mm. SA 122/111 · ER 45.4/52.4%. ',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/hoka-gaviota-6-review-2026/',
        note: 'DOR 소개 남성283g(US9)·여성252g(US8),39/33mm·드롭6mm. RR 실측7.3mm와 분리.',
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
