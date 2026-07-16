import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'new-balance-rebel-v5',
  slug: 'new-balance-rebel-v5',
  brand: 'New Balance',
  name: '레벨 V5',
  image: '/images/shoes/newbalance/rebelv5/side.webp',
  images: [
    '/images/shoes/newbalance/rebelv5/side.webp',
    '/images/shoes/newbalance/rebelv5/front.webp',
    '/images/shoes/newbalance/rebelv5/back.webp',
    '/images/shoes/newbalance/rebelv5/top.webp',
    '/images/shoes/newbalance/rebelv5/outsole.webp',
  ],
  category: '데일리',
  rating: 4,
  price: 189000,
  description: 'FuelCell 폼을 사용한 경량 데일리 트레이너로, PEBA+EVA 블렌드가 반발력과 쿠셔닝의 균형을 제공합니다. 빠른 페이스의 훈련에 적합합니다.',
  oneliner: '220g에 11.5 HA 소프트, v4 단점 완전 개선',
  editorComment: 'v4에서 지적됐던 짧은 혀, 힐 칼라 자극 문제를 완벽히 해결한 레벨 v5. 220g 경량에 11.5 HA 울트라소프트 FuelCell이 Saucony Kinvara 16(7.0 HA)보다 훨씬 부드러운 착화감을 제공합니다. 145 SA 힐 충격흡수는 전작 대비 크게 향상되었고, 75mm 넓은 토박스로 발볼 걱정이 없습니다. 18만 9천원으로 Novablast 5(21만원)보다 저렴하면서 입문자부터 서브4 러너까지 활용 가능한 만능 데일리화입니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이며 와이드 옵션은 없지만, 75mm 넓은 토박스 덕분에 발볼 넓은 러너도 대부분 정사이즈로 착용 가능합니다. 189,000원 ÷ 500km = km당 약 378원입니다. 비슷한 성격의 대안으로는 마하 6(더 높은 스택)과 킨바라 16(더 탄탄한 반발)을 비교해보세요.',
  tags: ['데일리', '경량', '반발력'],

  specs: {
    weight: 220,
    cushioning: 7,
    responsiveness: 8,
    stability: 6,
    drop: 6,
    durability: 500,
  },

  biomechanics: {
    stackHeight: {
      heel: 33,
      forefoot: 27,
    },
    drop: 6,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'FuelCell (PEBA + EVA)',
    optimalPace: '4:30-6:00 min/km',
  },

  detailedSpecs: {
    weight: '220g (남성 US 9 기준)',
    stackHeight: '힐 33.0mm / 포어풋 26.7mm (실측)',
    drop: '6.3mm (실측) / 6mm (브랜드 공식)',
    midsole: 'FuelCell (PEBA + EVA 블렌드)',
    plate: '없음',
    outsole: '고무 아웃솔',
    upper: '엔지니어드 메쉬',
    width: '표준 (D)',
    durability: '500km+',
    price: '189,000원',
    costPerKm: '약 ₩378/km (500km 기준)',
    footType: '중립',
    landingPattern: '중족부/전족부 착지',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 189000,
    streetPrice: 179000,
    costPerKm: 378,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['saucony-kinvara-16', 'hoka-mach-6', 'asics-novablast-5'],
    valueAdvantages: ['v4 대비 모든 단점 개선', '경량 + 소프트 폼의 조화'],
  },

  targetUsers: {
    recommended: ['중족부/전족부 착지 러너', '빠르고 가벼운 러닝을 원하는 러너', '데일리+템포 겸용 신발을 찾는 러너', 'v4의 힐 칼라 문제로 고생한 러너'],
    notRecommended: ['최대 반발력을 원하는 러너', '젖은 노면/비포장에서 달리는 러너', '맥시멀 쿠셔닝을 원하는 러너'],
  },

  features: [
    '힐 145 SA 충격흡수 - 전작 대비 크게 개선 (RunRepeat Lab Test)',
    '11.5 HA 울트라소프트 FuelCell 폼 - 구름 같은 착화감',
    '220g 경량 설계로 데일리+템포 겸용 가능',
    'v4의 짧은 혀/힐 칼라 자극 문제 완전 해결',
    '75mm 넓은 토박스로 발가락 여유 공간 확보',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 91,
      text: '가성비 최강 데일리/템포 겸용 러닝화입니다. 18만 9천원에 220g 경량, HA 11.5 울트라소프트 FuelCell 폼, SA 145 충격흡수를 모두 갖췄습니다. "초보도 신을 수 있나요?" 물론입니다! 33mm 힐 스택과 6mm 드롭이 무릎 충격을 잡아주면서도 반발력이 좋아 실력이 늘어도 계속 활용할 수 있습니다. 75mm 넓은 토박스로 발볼 넓은 한국 러너도 편하고, v4의 힐 자극 문제도 완전히 해결되었습니다. 500km 내구성으로 km당 약 378원의 가성비를 제공하며, 노바블라스트 5(21만원)보다 2만원 저렴합니다. 와이드 옵션은 없지만 75mm 토박스가 넉넉하고, 평발 러너에게도 쿠셔닝이 충분해 입문자부터 서브4 목표 러너까지 폭넓게 추천합니다.',
    },
    {
      userType: '입문 러너',
      rating: 85,
      text: '동호회에서 처음 러닝 시작하면서 가볍고 편한 거 추천받아서 레벨 v5 샀습니다. 이전에 v4 쓰던 분이 "v4는 힐 까짐 있었는데 v5는 완전 해결됐다"고 하더라고요. 확실히 힐 칼라 부분이 부드럽고 전혀 안 까집니다. 220g이라 가볍고, 양재천에서 5km 뛰는데 발이 가뿐한 느낌이에요. 토박스가 75mm로 넓어서 발볼 넓은 한국 러너에게 잘 맞습니다. HA 11.5의 울트라소프트 FuelCell 폼이 33mm 힐 스택에서 무릎 충격을 잘 흡수해주고, 6:30/km 초보 페이스에서도 쿠셔닝이 충분합니다. 평발 기미가 있는데 폼이 부드러워 발바닥 피로도 적어요. 18만 9천원에 500km 내구성이면 km당 약 378원으로 가성비도 괜찮아서 입문자 첫 러닝화로 추천합니다.',
    },
    {
      userType: '상급 러너',
      rating: 88,
      text: '서브 3:45 러너입니다. 인터벌 훈련 날과 가벼운 템포런에 레벨 v5를 돌려 쓰고 있어요. 한강 여의도 구간에서 1km 반복 4:10~4:20 페이스로 돌리는데 SA 145의 충격흡수와 반발력이 꽤 좋습니다. 킨바라 16(HA 7.0)이랑 비교하면 레벨(HA 11.5)이 좀 더 부드럽고 킨바라가 더 탄탄한 느낌인데, 발볼 넓은 한국 러너에게는 75mm 토박스의 레벨이 더 편합니다. 220g 경량에 33mm 힐 스택이 무릎 보호에도 충분하고, 개인적으로 FuelCell의 소프트한 터치가 취향에 맞습니다. 가성비 면에서 18만 9천원에 이 퍼포먼스면 노바블라스트(21만원)보다 낫고, 300km 넘게 신었는데 전족부 아웃솔 마모가 시작되어서 500km까진 갈 수 있을 것 같습니다.',
    },
    {
      userType: '가성비 중시',
      rating: 92,
      text: '18만 9천원에 이 스펙이면 진짜 미쳤습니다. 노바블라스트 5가 21만원, 마하 6이 21만 9천원인데 220g의 레벨 v5가 체감상 뒤지지 않아요. 무게도 비슷하고 토박스 75mm로 발볼도 넉넉합니다. 한국 러너 커뮤니티에서 가성비 데일리화로 입소문이 났는데 당연한 결과예요. 주 3회 동호회 러닝에 쓰고 있는데 데일리 6:00/km부터 템포 4:40/km까지 다 커버합니다. 33mm 힐 스택의 HA 11.5 FuelCell 폼이 무릎 부담을 줄여주고, 500km 내구성이면 km당 약 378원으로 가성비 최고입니다. 와이드 옵션이 없는 게 아쉽지만 토박스 자체가 75mm로 넓어 발볼 걱정은 불필요합니다. 한 켤레로 여러 용도 쓰고 싶은 분한테 강추합니다.',
    },
  ],

  similarShoes: ['hoka-mach-6', 'saucony-kinvara-16', 'asics-novablast-5'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/5dA8aEyH' }],
};
