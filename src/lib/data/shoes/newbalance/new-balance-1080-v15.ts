import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'new-balance-1080-v15',
  slug: 'new-balance-1080-v15',
  brand: 'New Balance',
  name: '1080 V15',
  image: '/images/shoes/newbalance/1080v15/side2.webp',
  images: [
    '/images/shoes/newbalance/1080v15/side2.webp',
    '/images/shoes/newbalance/1080v15/side.webp',
    '/images/shoes/newbalance/1080v15/back.webp',
    '/images/shoes/newbalance/1080v15/angle.webp',
    '/images/shoes/newbalance/1080v15/top.webp',
    '/images/shoes/newbalance/1080v15/outsole.webp',
  ],
  category: '쿠션화',
  rating: 4.9,
  price: 209000,
  description:
    '질소 주입 인피니온(슈퍼크리티컬) 폼으로 향상된 쿠셔닝과 에너지 반환을 제공하는 뉴발란스 플래그십 쿠션화. v14 대비 69g 경량화되었으며, 2E/4E 와이드 옵션으로 발볼 넓은 러너도 편안하게 착용 가능합니다.',
  oneliner: '216g 경량 쿠션화, 인피니온 폼 혁신',
  editorComment: '전작 대비 69g 감량(285g→216g)이라는 극적인 변화를 이뤄낸 1080 v15. 인피니온 폼은 Fresh Foam X보다 에너지 리턴과 통기성이 향상되었으며, 쿠셔닝(9/10)은 Asics Nimbus 28과 동급입니다. 20만 9천원으로 2만원 가격이 올랐지만 경량화로 5:00-6:30/km 빠른 페이스에도 대응 가능해졌습니다. 2E/4E 발볼 옵션은 한국 러너에게 큰 장점이며, v14의 narrow 토박스를 피했던 러너도 편하게 신을 수 있습니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이며 2E·4E 와이드 옵션이 있어 발볼 넓은 한국 러너도 안심하고 착용할 수 있습니다. 209,000원 ÷ 600km = km당 약 348원입니다. 한 단계 저렴한 대안으로 880 V15(18만 9천원, 더 두꺼운 스택), 비슷한 가격대에서는 글리세린 22와 비교해보세요.',
  tags: ['쿠션화', '장거리', '데일리', '경량'],

  specs: {
    weight: 216,
    cushioning: 9,
    responsiveness: 7,
    stability: 6,
    drop: 6,
    durability: 600,
  },

  biomechanics: {
    stackHeight: {
      heel: 40,
      forefoot: 34,
    },
    drop: 6,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Infinion (질소 주입 슈퍼크리티컬 폼)',
    optimalPace: '5:00-6:30 min/km',
  },

  detailedSpecs: {
    weight: '216g (남성 기준) / 208g (여성 기준)',
    stackHeight: '힐 40mm / 포어풋 34mm',
    drop: '6mm',
    midsole: '인피니온 (질소 주입 슈퍼크리티컬 폼) - 향상된 쿠셔닝, 에너지 반환, 반응성, 경량화',
    plate: '없음',
    outsole: '고무 아웃솔 (전족부 접지 면적 효율 개선, 힐 안정성 보강)',
    upper: 'Breathable Mesh + 리플렉티브 디테일',
    width: '2E(약간 넓음), 4E(넓음) 옵션',
    durability: '600km+',
    price: '209,000원',
    costPerKm: '약 ₩348/km (600km 기준)',
    footType: '중립',
    landingPattern: '뒤꿈치/중족부 착지',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'excellent',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'excellent',
  },

  priceAnalysis: {
    msrp: 209000,
    streetPrice: 209000,
    costPerKm: 348,
    valueRating: 8,
    priceTier: 'premium',
    alternatives: ['asics-gel-nimbus-28', 'brooks-glycerin-22', 'new-balance-880-v15'],
    valueAdvantages: ['v14 대비 69g 경량화 (285g → 216g)', '향상된 쿠셔닝과 에너지 반환', '2E/4E 발볼 옵션'],
  },

  targetUsers: {
    recommended: ['편안함을 최우선으로 하는 러너', '장거리 러너', '무릎 보호가 필요한 러너', '1080 시리즈 팬', '가벼운 쿠션화를 원하는 러너'],
    notRecommended: ['안정성이 필요한 러너', '최대 반발력을 원하는 러너'],
  },

  features: [
    '질소 주입 인피니온 슈퍼크리티컬 폼 - 향상된 쿠셔닝, 에너지 반환, 통기성',
    'v14 대비 69g 경량화 (285g → 216g)',
    '2E(약간 넓음), 4E(넓음) 발볼 옵션으로 한국인 발에 적합',
    'Breathable Mesh 갑피 + 리플렉티브 디테일',
    '힐 안정성 보강된 아웃솔 설계',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 92,
      text: 'v14 대비 69g 감량(285g→216g)은 이 가격대 쿠션화 중 가장 극적인 세대 변화입니다. 인피니온 폼은 Fresh Foam X 대비 에너지 리턴과 통기성이 확실히 개선되어 쿠셔닝(9/10)은 Nimbus 28과 동급이면서 무게는 30g 가볍습니다. 40mm 힐 스택에서 무릎 보호도 우수하며, 6mm 드롭의 부드러운 전환이 장거리에서 빛납니다. 20만 9천원으로 v14보다 2만원 올랐지만 600km 내구성으로 km당 약 348원의 가성비를 제공하고, 경량화 덕에 5:00-6:30/km 템포런까지 소화 가능한 범용성이 생겼습니다. 2E/4E 발볼 옵션은 발볼 넓은 한국 러너에게 큰 장점이며, v14의 좁은 토박스를 피했던 분도 편하게 신을 수 있습니다. 다만 안정성(6/10)은 평범한 편이라 평발이나 과내전 러너는 860 v15가 더 적합합니다.',
    },
    {
        userType: '예상 적합 — 쿠션은 유지하되 무게를 줄이려는 러너',
        text: '쿠션량을 포기하지 않으면서 무게를 줄이고 싶은 러너에게 세대 교체 효과가 큰 모델입니다. 전작 v14의 285g에서 216g으로 약 70g 가벼워졌고, 폼이 Fresh Foam X에서 인피니온으로 바뀌며 성격 자체가 달라졌습니다. 40mm 힐 스택을 유지해 무게를 줄였는데도 바닥이 얇게 느껴지지 않는 구성입니다. 216g이면 프리미엄 쿠션화로는 가벼운 축이라 템포런까지 겸할 수 있어, 쿠션화를 느린 페이스 전용으로만 쓰던 경우 활용 범위가 넓어집니다. 2E 와이드가 있어 발볼 넓은 러너도 대응되고, 209,000원·내구성 600km 기준 km당 약 348원입니다.',
      },
    {
        userType: '모델 선택 — 님버스 28 대비 무게와 폭 옵션',
        text: '프리미엄 쿠션화 두 모델을 비교하면 무게와 폭 옵션에서 갈립니다. 216g으로 님버스 계열보다 약 70g 가볍고, 2E·4E까지 폭 옵션이 넓어 발볼이 넓은 경우 선택지가 많습니다. 가격도 209,000원으로 님버스(23만원대)보다 낮습니다. 힐 40mm 스택의 인피니온 폼에 6mm 드롭이라 뒤꿈치 착지에서 전족부로의 전환이 매끄럽고, 폼 꺼짐이 완만해 내구성 600km 기준 km당 약 348원입니다. 반대로 더 부드러운 착지감을 원하면 님버스 쪽이 맞습니다.',
      },
    {
        userType: '로테이션 — 레이서와 짝을 이루는 훈련 축',
        text: '레이스용을 따로 두고 일상 훈련 전반을 담당하기에 맞습니다. 216g으로 가벼우면서 힐 40mm 스택이라, 25~30km급 LSD에서 충격 흡수를 유지하면서도 4:40/km 수준의 빠른 구간까지 대응합니다. 전작 v14(285g)에서 약 70g 가벼워지며 쿠션화의 활용 범위가 넓어진 것이 세대 변화의 핵심입니다. 주간 60~70km를 소화하는 운용에서 한 켤레로 이지런과 장거리를 모두 커버할 수 있습니다. 2E 와이드가 있고, 내구성 600km 기준 km당 약 348원입니다.',
      },
  ],

  similarShoes: ['new-balance-1080-v14', 'new-balance-880-v15', 'brooks-glycerin-22', 'asics-gel-nimbus-28'],
  relatedPosts: [
    { slug: 'new-balance-1080-v15-vs-asics-nimbus-28-premium-cushion-2026', title: '1080 v15 vs 님버스 28 — 프리미엄 쿠션 대결' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xAA0rggd' }],
};
