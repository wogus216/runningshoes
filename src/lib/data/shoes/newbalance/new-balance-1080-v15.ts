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
      userType: '중급 러너',
      rating: 95,
      text: 'v14(285g)에서 갈아탔는데 216g은 솔직히 별개의 신발입니다. 인피니온 폼이 Fresh Foam X랑 완전히 다른 느낌이에요. 가볍고 통통 튀는데 40mm 힐 스택에서 바닥이 얇다는 느낌은 전혀 없습니다. 여의도 한강공원에서 주 4회 10km씩 뛰는데, v14 때는 후반 7km부터 발바닥 피로가 왔었는데 v15는 10km 끝나도 여유가 있어요. 쿠셔닝 9/10 답게 무릎 부담도 확실히 줄었습니다. 216g이라 템포런에도 충분히 쓸 수 있고, 동호회 정기런에서도 5:00/km 페이스에 무리 없습니다. 발볼이 넓은 한국 러너인데 280mm 2E 와이드로 토박스 여유롭고, 가성비 면에서 20만 9천원에 600km 내구성이면 km당 약 348원으로 프리미엄 쿠션화 중 합리적입니다.',
    },
    {
      userType: '가성비 중시',
      rating: 90,
      text: '님버스 28이랑 고민하다가 v15 골랐습니다. 둘 다 쿠셔닝 좋은데 v15가 216g으로 69g 더 가볍고, 2E/4E 와이드 옵션이 있어서요. 20만 9천원이 싸다고는 못 하겠지만 님버스가 23만원인 걸 생각하면 가성비가 낫습니다. 280mm 2E로 신고 있는데 토박스 여유롭고 발볼 넓은 한국인 발에 잘 맞으며, 힐 슬립도 없습니다. 40mm 힐 스택의 인피니온 폼이 무릎 충격을 확실히 잡아주고, 6mm 드롭이 뒤꿈치 착지부터 전족부까지 자연스러운 전환을 도와줍니다. 200km 정도 신었는데 폼 꺼짐도 아직 모르겠고, 600km 내구성 기준 km당 약 348원이면 프리미엄 쿠션화 중 합리적입니다. 평발 기미가 있지만 쿠셔닝 덕분에 발바닥 피로도 적습니다.',
    },
    {
      userType: '상급 러너',
      rating: 92,
      text: '풀마라톤 3시간 40분대 러너입니다. 레이스는 SC Elite, 일상 훈련은 v15로 고정했습니다. 주간 60~70km 소화하는데 장거리 LSD 날(25~30km)에도 발이 안 죽어요. 특히 양재천 같은 아스팔트 노면에서 216g 경량임에도 40mm 힐 스택의 충격 흡수가 확실합니다. v14(285g) 때는 무게 때문에 빠른 구간에서 답답했는데 v15는 69g 가벼워져 4:40/km까지도 반응이 괜찮습니다. 발볼이 넓은 한국 러너인데 2E 와이드 옵션으로 토박스 편하고, 600km 내구성에 km당 약 348원이면 가성비도 훌륭합니다. 무릎 부상 이력이 있는데 인피니온 폼 덕분에 재발 없이 잘 달리고 있습니다.',
    },
  ],

  similarShoes: ['new-balance-1080-v14', 'new-balance-880-v15', 'brooks-glycerin-22', 'asics-gel-nimbus-28'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xAA0rggd' }],
};
