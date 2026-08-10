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
      text: '가성비 최강 데일리/템포 겸용 러닝화입니다. 18만 9천원에 220g 경량, HA 11.5 울트라소프트 FuelCell 폼, SA 145 충격흡수를 모두 갖췄습니다. "초보도 신을 수 있나요?" 물론입니다! 33mm 힐 스택과 6mm 드롭이 무릎 충격을 잡아주면서도 반발력이 좋아 실력이 늘어도 계속 활용할 수 있습니다. 75mm 넓은 토박스로 발볼 넓은 한국 러너도 편하고, v4의 힐 자극 문제도 완전히 해결되었습니다. 500km 내구성으로 km당 약 378원의 가성비를 제공하며, 노바블라스트 5(16만 9천원)보다 2만원 비쌉니다. 와이드 옵션은 없지만 75mm 토박스가 넉넉하고, 평발 러너에게도 쿠셔닝이 충분해 입문자부터 서브4 목표 러너까지 폭넓게 추천합니다.',
    },
    {
        userType: '세대 비교 — v4의 힐 까짐이 해소된 세대',
        text: '전작 v4에서 지적되던 힐 칼라 쓸림이 개선된 세대입니다. 칼라 마감이 부드러워져 초기 착용에서 뒤꿈치가 까지는 문제가 줄었습니다. 220g으로 가볍고 토박스가 75mm로 넓어 발볼 넓은 러너에게 유리합니다. HA 11.5의 울트라소프트 FuelCell 폼에 힐 33mm 스택이라, 6분30초/km 수준의 느린 페이스에서도 쿠션이 충분합니다. 스피드 트레이너 성격이지만 폼이 부드러워 입문 단계에서도 무리가 없고, 189,000원·내구성 500km 기준 km당 약 378원입니다.',
      },
    {
        userType: '모델 선택 — 레벨 v5 vs 킨바라 16',
        text: '경량 스피드 트레이너 두 모델은 폼 경도에서 갈립니다. 레벨 v5는 HA 11.5로 부드럽고, 킨바라 16은 HA 7.0으로 더 탄탄합니다. 반발이 즉각적인 쪽을 원하면 킨바라, 착지 충격을 덜 받고 싶으면 레벨입니다. 한국 러너 기준으로는 토박스 75mm의 레벨 쪽이 발볼 여유가 크다는 점이 실질적인 차이입니다. 220g에 힐 33mm 스택으로 인터벌과 가벼운 템포런을 겸하기에 맞고, SA 145로 반복 착지에서도 충격이 과하지 않습니다. 189,000원으로 같은 브랜드 노바블라스트 계열(16만~17만원대)보다 높은 가격대입니다.',
      },
    {
        userType: '비용 관점 — 경량 데일리 3종 가격 비교',
        text: '경량 데일리군에서 가격이 낮은 축입니다. 189,000원으로 노바블라스트 계열(16만~17만원대)·마하 계열(18만 5천원)과 비슷한 가격대이면서, 220g의 무게와 성능은 크게 밀리지 않습니다. 토박스가 75mm로 넓어 와이드 옵션이 없어도 발볼 대응이 되는 점이 실질적인 이점입니다. 힐 33mm 스택의 HA 11.5 FuelCell 폼이라 6분/km 데일리부터 4분40초 템포까지 한 켤레로 커버합니다. 내구성 500km 기준 km당 약 378원입니다.',
      },
  ],

  similarShoes: ['hoka-mach-6', 'saucony-kinvara-16', 'asics-novablast-5'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/5dA8aEyH' }],
};
