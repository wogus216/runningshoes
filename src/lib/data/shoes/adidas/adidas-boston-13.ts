import type { Shoe } from '@/types/shoe';

// 원문 재확인: 2026-11-09. 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'adidas-boston-13',
  slug: 'adidas-boston-13',
  brand: 'Adidas',
  name: '보스턴 13',
  image: '/images/shoes/adidas/boston13/boston1.webp',
  images: [
    '/images/shoes/adidas/boston13/boston1.webp',
    '/images/shoes/adidas/boston13/boston2.webp',
    '/images/shoes/adidas/boston13/boston3.webp',
  ],
  category: '데일리',
  rating: 5,
  price: 189000,
  description: 'Lightstrike Pro와 Lightstrike 이중폼에 유리섬유 ENERGYRODS 2.0을 결합한 템포 트레이너. 한국 KH9563 공식 정가 189,000원.',
  oneliner: '이중폼과 유리섬유 ENERGYRODS 2.0을 쓰는 보스턴 13',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 KH9563는 189,000원이며, Lightstrike Pro만으로 된 미드솔이 아니라 Lightstrike와 결합한 구조입니다. 유리섬유 로드 재질은 한국 공식과 아디다스 일본 보도자료로 확인했습니다. RunRepeat는 254g, 한국 공식은 사이즈 조건 없이 260g을 표기합니다. 실험실 힐/전족부 SA127/108과 에너지 리턴63.4/69.7%는 임상 효과나 기록 향상률이 아닙니다. 템포·빠른 훈련에 대한 착화 평가는 있지만 5분/km를 넘어야 효과가 난다는 보편적 기준은 확인되지 않았습니다. 젖은 콘크리트 마찰계수0.47로 모든 빗길에서 안전하다고 말할 수 없습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '데일리',
    '템포',
    '다목적',
  ],
  specs: {
    weight: 254,
    cushioning: 8,
    responsiveness: 8,
    stability: 8,
    drop: 6,
  },
  biomechanics: {
    stackHeight: {
      heel: 34.3,
      forefoot: 28.3,
    },
    drop: 6,
    carbonPlate: false,
    plateType: '유리섬유 ENERGYRODS 2.0',
    midsoleType: 'Lightstrike Pro + Lightstrike 2.0',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },
  targetUsers: {
    recommended: [
      '탄탄한 템포 트레이너를 찾는 러너',
      '유리섬유 로드 구조를 착화로 비교하려는 러너',
    ],
    notRecommended: [
      '푹신한 회복화만을 원하는 경우',
      '어퍼나 뒤꿈치 고정이 맞지 않는 경우',
    ],
  },
  features: [
    'Lightstrike Pro + Lightstrike 2.0 이중폼',
    '유리섬유 ENERGYRODS 2.0 (제조사 확인)',
    '254g (RunRepeat 남성 US9 공시 기준)',
    'Continental + LIGHTTRAXION 아웃솔',
    '한국 KH9563 정가 189,000원 (2026-11-09)',
  ],
  priceAnalysis: {
    msrp: 189000,
    valueRating: 9,
    priceTier: 'mid',
    alternatives: [
      'nike-zoom-fly-6',
      'saucony-endorphin-speed-5',
    ],
  },
  detailedSpecs: {
    weight: '254g (RunRepeat 남성 US9 공시 기준) / 한국 공식260g (사이즈 조건 미표기)',
    stackHeight: '34.3/28.3mm (RunRepeat 힐/전족부) / 한국 공식36/30mm',
    drop: '6mm (RunRepeat·한국 공식)',
    midsole: 'Lightstrike Pro + Lightstrike 2.0',
    plate: '유리섬유 ENERGYRODS 2.0 (한국 공식·일본 제조사 보도자료)',
    outsole: 'Continental + LIGHTTRAXION',
    upper: '메쉬',
    width: 'RunRepeat 내부 최광폭97.3mm / 엄지 부위70.6mm. 확인한 한국 KH9563는 레귤러 핏; 다른 SKU 폭은 미확인.',
    durability: '수명 km 미확인. RunRepeat 아웃솔 마모 깊이0.5mm는 수명 km로 환산하지 않음.',
    price: '189,000원 (한국 KH9563 정가, 2026-11-09)',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/adidas-adizero-boston-13',
      text: '템포용 구조와 가격을 비교할 후보입니다. 외부 리뷰 일부의 로드 재질 표기와 제조사가 충돌해, 한국 공식과 일본 제조사 자료의 유리섬유 표기를 채택했습니다. 내구 수명이나 km당 비용은 확인되지 않아 비교하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/adidas-adizero-boston-13-quick/',
      text: '템포·빠른 훈련에 어울리는 탄탄한 감각으로 평가했습니다. 리뷰어는 중족부 지지와 단단함 때문에 긴 거리 활용에 한계가 있었다고 밝혔습니다. 개인 착화 경험을 모든 러너의 최적 페이스나 질환 적합성으로 일반화하지 않습니다.',
    },
  ],
  similarShoes: [
    'nike-zoom-fly-6',
    'saucony-endorphin-speed-5',
  ],
  relatedPosts: [
    {
      slug: 'asics-novablast-6-vs-adidas-boston-13-daily-2026',
      title: '노바블라스트6 vs 보스턴13 — 구조와 핏',
    },
    {
      slug: 'adidas-adizero-evo-sl-vs-boston-13-daily-2026',
      title: 'Evo SL vs 보스턴13 — 가격·구조·실측 조건',
    },
    {
      slug: 'boston-13-vs-zoom-fly-6-vs-endorphin-speed-5-tempo-trainer-2026',
      title: '템포 트레이너 3파전 — 보스턴 13 vs 줌 플라이 6 vs 엔돌핀 스피드 5',
    },
    {
      slug: 'superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026',
      title: '슈퍼블라스트3 vs 에보SL vs 마하6 — 슈퍼트레이너',
    },
    {
      slug: 'adidas-running-shoes-lineup-tier-guide-2026',
      title: '아디다스 러닝화 라인업 — 용도와 구조 비교',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/x6JSFDuz',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 KH9563 정가·구조와 제조사 로드 재질, RunRepeat 실측을 재확인했습니다.',
    sources: [
      {
        label: '아디다스 한국 KH9563',
        url: 'https://www.adidas.co.kr/아디제로-보스턴-13/KH9563.html',
        note: '189,000원 · 유리섬유 로드 · 이중폼 · 공식36/30mm, 드롭6mm.',
      },
      {
        label: 'RunRepeat Boston13',
        url: 'https://runrepeat.com/adidas-adizero-boston-13',
        note: '254g · 34.3/28.3mm · SA127/108 · ER63.4/69.7% · 경도40.5 AC. 본문 SA126과 결과표127의 충돌은 결과표를 채택.',
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
