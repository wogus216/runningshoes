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
    '가이드 19는 "단단한 안정화"라는 가이드 라인의 인상을 바꾼 세대입니다. 새 PWRRUN 배합으로 힐 충격흡수가 전작 124 SA에서 144 SA로 크게 좋아졌고, 전족부 플랫폼 실측 120mm는 랩 기준으로도 가장 넓은 축이라 지지대 없이도 발이 흔들리지 않습니다. 대신 실측 298g(전작 278g)으로 무게가 늘었고 에너지 리턴은 힐 54.8%로 평범해, 경쾌한 반발보다는 편안한 데일리 지향입니다. 국내 공식가는 179,000원입니다(2026-08-15 써코니코리아 공식몰 확인, 해외 정가 $140). 다만 23개 컬러웨이 중 5개만 161,100원 할인가라 컬러별로 값이 다릅니다. 전작 가이드 18은 신형 출시로 할인 구간에 들어가, 더 단단한 승차감을 선호하면 18 재고도 여전히 합리적입니다.\n\n사이즈·구매 가이드: 핏은 정사이즈 기준이며 가이드 라인은 와이드(2E) 옵션이 꾸준히 유통되는 몇 안 되는 안정화입니다. 드롭은 공식 6mm(실측 6.0mm)로, 8mm 이상 드롭에서 갈아탄다면 종아리 적응 기간을 두세요. 강한 교정이 필요하면 젤카야노 32, 더 푹신한 프리미엄이 필요하면 허리케인 26을 비교 대상으로 보세요.',
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
    alternatives: ['saucony-guide-18', 'asics-gel-kayano-32', 'brooks-adrenaline-gts-25'],
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
      text: '가이드 19의 핵심 변화는 "부드러워진 지지"입니다. 랩 실측에서 힐 충격흡수가 144 SA로 전작(124 SA)보다 확연히 좋아졌고, 전족부 120mm 플랫폼은 메디얼 포스트 없이 폭 자체로 안정감을 만듭니다. 대신 298g으로 가벼운 신발은 아니고 에너지 리턴(힐 54.8%)도 평범해서, 템포런보다는 6~7분대 데일리 조깅과 장거리 이지런에 최적화된 세팅입니다. 아웃솔 러버가 보강돼 마모 걱정이 줄어든 것도 데일리 소모품 관점에서 실질적인 개선입니다. 국내 공식가는 179,000원이며, 23개 컬러웨이 중 5개는 161,100원 할인가로 풀려 있습니다(2026-08-15 확인).',
    },
    {
      userType: '세대 비교 — 부드러워졌지만 무거워졌다',
      text: '이전 세대와 비교하면 착지가 눈에 띄게 부드러워지면서도 안쪽으로 쏠리는 움직임은 그대로 잡아줍니다. 플랫폼이 넓어 정지 상태에서도 안정감이 다르고, 와이드 옵션이 있어 발볼 대응도 됩니다. 반대로 무게가 늘어 빠른 세션에는 다른 신발이 필요합니다. 6mm 드롭은 며칠 수준의 짧은 적응으로 넘어가는 편입니다.',
    },
    {
      userType: '예상 적합 — 첫 안정화, 적응 부담이 적다',
      text: '안정화를 처음 신는 단계에 적응 부담이 적은 구성입니다. 지지가 개입하는 느낌이 뚜렷하지 않고 일반 데일리처럼 굴러가는 성격이라, 교정되는 감각이 불편했던 경우에도 무리가 없습니다. 쿠션도 부드러운 편이라 5km급 조깅에서 관절 부담이 줄어듭니다. 다만 무게가 있어 인터벌 같은 빠른 훈련에서는 둔하게 느껴지므로, 데일리 한 켤레 용도로 보는 편이 맞습니다.',
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
    price: '179,000원 (국내 공식가, 2026-08-15 써코니코리아 공식몰 확인) · 23종 중 5종은 161,100원 할인가 · 해외 정가 $140',
    costPerKm: '약 ₩298/km (600km 기준, 잠정가 기준)',
    footType: '가벼운~중간 과내전 / 평발 데일리 러너',
    landingPattern: '힐~미드풋 스트라이크',
  },

  similarShoes: ['saucony-guide-18', 'asics-gel-kayano-32', 'brooks-adrenaline-gts-25'],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=써코니+가이드+19' }],
};
