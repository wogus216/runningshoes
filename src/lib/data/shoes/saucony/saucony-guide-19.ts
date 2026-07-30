import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-guide-19',
  slug: 'saucony-guide-19',
  brand: 'Saucony',
  name: '가이드 19',
  image: '/images/shoes/saucony/guide19/side.webp',
  images: [
    '/images/shoes/saucony/guide19/side.webp',
    '/images/shoes/saucony/guide19/front.webp',
    '/images/shoes/saucony/guide19/medial.webp',
    '/images/shoes/saucony/guide19/back.webp',
    '/images/shoes/saucony/guide19/top.webp',
  ],
  category: '안정화',
  rating: 4,
  status: 'new',
  price: 179000,
  description:
    'Saucony 코어 안정화의 2026년 최신판. 더 부드러워진 PWRRUN 폼과 실측 120mm의 초광폭 플랫폼으로 과내전 러너에게 편안한 지지를 제공하며, 아웃솔 러버가 보강돼 내구성이 개선됐습니다.',
  oneliner: '더 부드러워진 폼 + 초광폭 플랫폼, 2026년 코어 안정화의 기준점',
  editorComment:
    '가이드 19는 "단단한 안정화"라는 가이드 라인의 인상을 바꾼 세대입니다. 새 PWRRUN 배합으로 힐 충격흡수가 전작 124 SA에서 144 SA로 크게 좋아졌고, 전족부 플랫폼 실측 120mm는 랩 기준으로도 가장 넓은 축이라 지지대 없이도 발이 흔들리지 않습니다. 대신 실측 298g(전작 278g)으로 무게가 늘었고 에너지 리턴은 힐 54.8%로 평범해, 경쾌한 반발보다는 편안한 데일리 지향입니다. 해외 정가 $140(공식몰 컬러별 $150)이며 국내 정식 가격은 미정이라 표기가는 환산 잠정치입니다 — 구매 시점에 국내 유통가를 확인하세요. 전작 가이드 18은 신형 출시로 할인 구간에 들어가, 더 단단한 승차감을 선호하면 18 재고도 여전히 합리적입니다.\n\n사이즈·구매 가이드: 핏은 정사이즈 기준이며 가이드 라인은 와이드(2E) 옵션이 꾸준히 유통되는 몇 안 되는 안정화입니다. 드롭은 공식 6mm(실측 6.0mm)로, 8mm 이상 드롭에서 갈아탄다면 종아리 적응 기간을 두세요. 강한 교정이 필요하면 젤카야노 32, 더 푹신한 프리미엄이 필요하면 허리케인 26을 비교 대상으로 보세요.',
  tags: ['안정화', '데일리', '과내전', '광폭플랫폼'],

  specs: {
    weight: 298,
    cushioning: 8,
    responsiveness: 5,
    stability: 8,
    drop: 6,
    durability: 600,
  },

  biomechanics: {
    stackHeight: { heel: 37.4, forefoot: 31.4 },
    drop: 6,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN (2026 개선 배합)',
    optimalPace: '5:30-7:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'caution',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'excellent',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  priceAnalysis: {
    msrp: 179000,
    streetPrice: 179000,
    costPerKm: 298,
    valueRating: 7,
    priceTier: 'mid',
    alternatives: ['saucony-guide-18', 'asics-gel-kayano-32', 'adidas-supernova-solution-2'],
    valueAdvantages: [
      '실측 120mm 초광폭 플랫폼의 자연스러운 안정감',
      '전작 대비 크게 개선된 힐 충격흡수(124→144 SA)',
      '아웃솔 러버 보강으로 내구성 개선',
      '와이드(2E) 옵션 제공',
    ],
  },

  targetUsers: {
    recommended: [
      '가벼운~중간 과내전의 데일리 러너',
      '단단한 안정화가 부담스러웠던 러너',
      '발볼이 넓어 와이드 옵션이 필요한 러너',
      '평발로 넓은 접지면이 필요한 러너',
    ],
    notRecommended: [
      '경쾌한 반발력을 원하는 러너 (에너지 리턴 평범)',
      '가벼운 신발이 우선인 러너 (298g)',
      '8mm 이상 드롭이 꼭 필요한 러너',
    ],
  },

  features: [
    '2026년 3월 출시된 가이드 라인 최신판 (해외 정가 $140)',
    '새 PWRRUN 배합 — 힐 충격흡수 144 SA로 전작 대비 대폭 개선',
    '전족부 실측 120mm의 초광폭 플랫폼 (랩 최상위권)',
    '아웃솔 러버 커버리지 보강으로 내구성 향상',
    '공식 6mm 드롭 · 와이드(2E) 옵션 유통',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 84,
      text: '가이드 19의 핵심 변화는 "부드러워진 지지"입니다. 랩 실측에서 힐 충격흡수가 144 SA로 전작(124 SA)보다 확연히 좋아졌고, 전족부 120mm 플랫폼은 메디얼 포스트 없이 폭 자체로 안정감을 만듭니다. 대신 298g으로 가벼운 신발은 아니고 에너지 리턴(힐 54.8%)도 평범해서, 템포런보다는 6~7분대 데일리 조깅과 장거리 이지런에 최적화된 세팅입니다. 아웃솔 러버가 보강돼 마모 걱정이 줄어든 것도 데일리 소모품 관점에서 실질적인 개선입니다. 국내 정식가 미정 상태라 표기가는 해외 $140 기준 잠정치입니다.',
    },
    {
      userType: '평발 러너',
      rating: 4.5,
      text: '평발에 가벼운 과내전이 있어 가이드 17부터 계속 신고 있습니다. 19는 착지가 눈에 띄게 부드러워졌는데 발이 안쪽으로 쏠리는 느낌은 그대로 잡아줍니다. 플랫폼이 워낙 넓어서 서 있기만 해도 안정감이 다르고, 와이드 옵션이 있어서 발볼 걱정도 없었어요. 다만 이전 세대들보다 무게감이 있어서 빠른 날엔 다른 신발을 신게 됩니다. 6mm 드롭은 며칠 만에 적응했습니다.',
    },
    {
      userType: '입문 러너',
      rating: 4,
      text: '러닝 시작하면서 발목이 자꾸 안으로 꺾여서 안정화를 추천받았습니다. 가이드 19는 처음 신는 안정화인데도 교정당하는 느낌 없이 그냥 편한 신발처럼 굴러가서 적응이 쉬웠어요. 쿠션도 푹신한 편이라 5km 조깅 후 무릎 부담이 줄었습니다. 대신 신발이 살짝 묵직해서 인터벌 같은 빠른 훈련엔 둔한 느낌입니다. 데일리 한 켤레로는 만족합니다.',
    },
  ],

  detailedSpecs: {
    weight: '298g (남성 US 9 기준, RunRepeat 실측 — 매체별 275~298g 편차)',
    stackHeight: '힐 37.4mm / 포어풋 31.4mm (RunRepeat 실측)',
    drop: '6mm (공식·실측 동일)',
    midsole: 'PWRRUN (2026 개선 배합)',
    plate: '없음',
    outsole: '러버 보강 아웃솔 (전작 대비 커버리지 확대)',
    upper: '엔지니어드 메쉬',
    width: '전족부 플랫폼 실측 120mm — 랩 기준 최상위 광폭 · 와이드(2E) 옵션',
    durability: '600km',
    price: '해외 정가 $140 (공식몰 컬러별 $150) · 국내 정식가 미정 — 표기 179,000원은 환산 잠정치',
    costPerKm: '약 ₩298/km (600km 기준, 잠정가 기준)',
    footType: '가벼운~중간 과내전 / 평발 데일리 러너',
    landingPattern: '힐~미드풋 스트라이크',
  },

  similarShoes: ['saucony-guide-18', 'asics-gel-kayano-32', 'adidas-supernova-solution-2'],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=써코니+가이드+19' }],
};
