import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'asics-megablast',
  slug: 'asics-megablast',
  brand: 'Asics',
  name: '메가블라스트',
  imageCaption: "메가블라스트 사진(1013A170-500 · EDO PURPLE/BLACK)은 ASICS 공식 상품 사진과 모델·색상·구도를 대조했습니다. 사진 품번을 한국 판매 규격·가격으로 읽지 마세요.",
  imageSource: {"title":"ASICS 공식 상품 갤러리","url":"https://www.asics.com/ph/en-ph/megablast/p/1013A170-500.html"},
  image: '/images/shoes/asics/megablast/1.webp',
  images: [
    '/images/shoes/asics/megablast/1.webp',
    '/images/shoes/asics/megablast/3.webp',
    '/images/shoes/asics/megablast/4.webp',
    '/images/shoes/asics/megablast/5.webp',
  ],
  category: '쿠션화',
  price: 299000,
  description: 'FF Turbo² · 비플레이트 로커 구조의 메가블라스트. 실험실 218g·힐/전족부 45.1/35.2mm. 한국 확인 정가299,000원.',
  oneliner: '218g 실험실 무게 · FF Turbo² · 비플레이트 로커',
  editorComment: '2026-11-09 원문 재확인. 한국 남녀공용1013A170.001 정가299,000원·230g(측정 사이즈 미공시) 확인. 확인한 BLACK/WHITE 색상의230~295mm는 품절이었으며 다른 색상·와이드SKU는 미확인입니다. DOR 소개 남성224g(US9),45/37mm·드롭8mm. 한국230g(사이즈 미공시),RR218g·9.9mm와 조건을 구분.  DOR의 Nathan은 US9에서 조금 짧고 타이트하다고 느꼈지만 본인은 사이즈를 올리지 않겠다고 했고, Matt은 US10에서 길이가 맞고 앞쪽 볼륨이 조금 있다고 봤습니다. Nathan은 폼의 흔들림을, Matt은 지오메트리의 지지를 느꼈습니다. A-TPU 재료 설명은 RR·DOR의 설명이며 한국 제조사 화학성분 확인으로 바꾸지 않습니다. 한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭93.7mm·엄지 부위74.3mm·높이24.2mm는 각각 다른 위치의 치수이며 개인 핏을 보장하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '맥시멀',
    '고반발',
    '쿠션화',
    '장거리',
  ],
  specs: {
    weight: 218,
    drop: 9.9,
  },
  biomechanics: {
    stackHeight: {
      heel: 45.1,
      forefoot: 35.2,
    },
    drop: 9.9,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'FF Turbo² · 비플레이트 로커',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      '높은 스택의 비플레이트 폼을 시착 비교하려는 러너',
      '실험실218g의 무게 조건을 다른 모델과 구분해 보는 러너',
    ],
    notRecommended: [
      '얇은 혀·앞쪽 낮은 높이에서 압박이 생기는 경우',
      '직접 착화에서 폼 흔들림이나 고정이 맞지 않는 경우',
    ],
  },
  features: [
    'FF Turbo² · 비플레이트 로커',
    '218g · 힐/전족부 45.1/35.2mm (RunRepeat)',
    '힐/전족부 SA 160/144 · 에너지 리턴 73/73.8% (RunRepeat). ',
    '한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭93.7mm·엄지 부위74.3mm·높이24.2mm는 각각 다른 위치의 치수이며 개인 핏을 보장하지 않습니다.',
  ],
  priceAnalysis: {
    msrp: 299000,
    priceTier: 'premium',
    alternatives: [
      'hoka-bondi-9',
      'new-balance-1080-v14',
      'brooks-glycerin-max',
    ],
  },
  detailedSpecs: {
    weight: '218g (RunRepeat 공시 검체 정책:남성US9). DOR 소개 남성224g(US9),45/37mm·드롭8mm. 한국230g(사이즈 미공시),RR218g·9.9mm와 조건을 구분.',
    stackHeight: '45.1/35.2mm (RunRepeat 힐/전족부 실측)',
    drop: '9.9mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'FF Turbo² · 비플레이트 로커 · 30.8 AC(Asker C) · 힐/전족부 SA 160/144 · 에너지 리턴 73/73.8%. ',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 93.7mm / 엄지 부위 74.3mm / 엄지 높이 24.2mm. 한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭93.7mm·엄지 부위74.3mm·높이24.2mm는 각각 다른 위치의 치수이며 개인 핏을 보장하지 않습니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 남녀공용1013A170.001 정가299,000원·230g(측정 사이즈 미공시) 확인. 확인한 BLACK/WHITE 색상의230~295mm는 품절이었으며 다른 색상·와이드SKU는 미확인입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/asics-megablast',
      text: '218g과 SA 160/144·에너지 리턴 73/73.8%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다.  한국 와이드 현재SKU는 미확인입니다. RR 내부 최광폭93.7mm·엄지 부위74.3mm·높이24.2mm는 각각 다른 위치의 치수이며 개인 핏을 보장하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-megablast-review-2025/',
      text: 'DOR의 Nathan은 US9에서 조금 짧고 타이트하다고 느꼈지만 본인은 사이즈를 올리지 않겠다고 했고, Matt은 US10에서 길이가 맞고 앞쪽 볼륨이 조금 있다고 봤습니다. Nathan은 폼의 흔들림을, Matt은 지오메트리의 지지를 느꼈습니다. A-TPU 재료 설명은 RR·DOR의 설명이며 한국 제조사 화학성분 확인으로 바꾸지 않습니다.',
    },
  ],
  similarShoes: [
    'hoka-bondi-9',
    'new-balance-1080-v14',
    'brooks-glycerin-max',
    'asics-sonicblast',
  ],
  purchaseLinks: [
  ],
  relatedPosts: [
    {
      slug: 'asics-megablast-vs-nike-vomero-18-max-cushion-2026',
      title: '메가블라스트 vs 보메로 18 — 실측80g 차이·가격·한국 와이드',
    },
    {
      slug: 'asics-megablast-review-2026',
      title: '아식스 메가블라스트 분석 — 218g 실측·한국 정가·낮은 앞쪽 높이',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 unisex · 1013A170.001',
        url: 'https://www.asics.co.kr/p/AKR_112630201-001',
        note: '한국 남녀공용1013A170.001 정가299,000원·230g(측정 사이즈 미공시) 확인. 확인한 BLACK/WHITE 색상의230~295mm는 품절이었으며 다른 색상·와이드SKU는 미확인입니다.',
      },
      {
        label: 'RunRepeat 메가블라스트',
        url: 'https://runrepeat.com/asics-megablast',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 218g · 45.1/35.2mm · 드롭9.9mm. SA 160/144 · ER 73/73.8%. ',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/asics-megablast-review-2025/',
        note: 'DOR 소개 남성224g(US9),45/37mm·드롭8mm. 한국230g(사이즈 미공시),RR218g·9.9mm와 조건을 구분.',
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
