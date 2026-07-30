import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'new-balance-sc-trainer-v3',
  slug: 'new-balance-sc-trainer-v3',
  brand: 'New Balance',
  name: 'SC Trainer V3',
  image: '/images/shoes/newbalance/sctrainerv3/side.webp',
  images: [
    '/images/shoes/newbalance/sctrainerv3/side.webp',
    '/images/shoes/newbalance/sctrainerv3/front.webp',
    '/images/shoes/newbalance/sctrainerv3/back.webp',
    '/images/shoes/newbalance/sctrainerv3/top.webp',
    '/images/shoes/newbalance/sctrainerv3/outsole.webp',
  ],
  category: '쿠션화',
  rating: 5,
  price: 249000,
  description: 'FuelCell 폼과 카본 플레이트가 결합된 슈퍼 트레이너로, 레이싱화의 성능을 훈련에서도 경험할 수 있습니다. 템포런과 장거리 훈련에 최적화되어 있습니다.',
  oneliner: '8.8 HA 소프트+카본, 마라톤 훈련 최적',
  editorComment: 'SC Trainer v3는 8.8 HA 울트라소프트 FuelCell에 풀렝스 카본 플레이트를 탑재한 슈퍼트레이너입니다. 144 SA 충격흡수와 66.1% 에너지 리턴은 Saucony Endorphin Speed 5(100% PEBA)보다 약하지만, 117.7mm 넓은 전족부로 안정성이 훨씬 높습니다. 24만 9천원으로 슈퍼트레이너 중 중간 가격대이며, 와이드 옵션으로 발볼 넓은 러너도 레이싱화 느낌을 훈련에서 경험할 수 있습니다. 278g은 약간 무겁지만 500km 내구성으로 장거리 훈련에 적합합니다. 이 신발의 폼이 PEBA 20% 블렌드인 건 단점이 아니라 설계입니다 — 같은 450km 마모 실험에서 순수 PEBA는 성능을 크게 잃었고 EVA는 버텼습니다. 트레이너라는 이름값을 하는 배합이죠.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이며 와이드 옵션이 있어 발볼 넓은 러너도 안심하고 선택하세요. 249,000원 ÷ 500km = km당 약 498원입니다. 반발력을 더 중시한다면 엔돌핀 스피드 5, 카본 없이 가볍게 쓰고 싶다면 매직스피드 4와 비교해보세요.',
  tags: ['슈퍼 트레이너', '카본 플레이트', '템포런'],

  specs: {
    weight: 278,
    cushioning: 8,
    responsiveness: 9,
    stability: 7,
    drop: 7,
    durability: 500,
  },

  biomechanics: {
    stackHeight: {
      heel: 37,
      forefoot: 30,
    },
    drop: 7,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'FuelCell (20% PEBA + 80% EVA)',
    optimalPace: '4:00-5:30 min/km',
  },

  detailedSpecs: {
    weight: '278g (남성 US 9 기준)',
    stackHeight: '힐 36.8mm / 포어풋 29.5mm (실측)',
    drop: '7.3mm (실측) / 6mm (브랜드 공식)',
    midsole: 'FuelCell (20% PEBA + 80% EVA) + 풀렝스 카본 플레이트',
    plate: '풀렝스 카본 플레이트 (Energy Arc)',
    outsole: '고무 아웃솔',
    upper: 'FANTOMFIT 메쉬',
    width: '표준 (D), 와이드 옵션',
    durability: '500km+',
    price: '249,000원',
    costPerKm: '약 ₩498/km (500km 기준)',
    footType: '중립',
    landingPattern: '중족부/전족부 착지',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'excellent',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 249000,
    streetPrice: 249000,
    costPerKm: 498,
    valueRating: 8,
    priceTier: 'premium',
    alternatives: ['saucony-endorphin-speed-5', 'asics-magic-speed-4', 'hoka-mach-x-3'],
    valueAdvantages: ['카본 플레이트 슈퍼트레이너 중 합리적 가격', '뛰어난 안정성', '마라톤 훈련 최적화'],
  },

  targetUsers: {
    recommended: ['마라톤 훈련 중인 러너', 'SC Elite v4 팬의 훈련용', '카본 플레이트 장거리 훈련화를 원하는 러너', '중족부 착지 러너'],
    notRecommended: ['가벼운 신발을 원하는 러너', '최대 반발력을 원하는 러너', '자갈길에서 뛰는 러너'],
  },

  features: [
    '힐 144 SA 충격흡수 + 66.1% 에너지 리턴 (RunRepeat Lab Test)',
    '8.8 HA 울트라소프트 FuelCell 폼 - 구름 같은 착화감',
    'Energy Arc 카본 플레이트 + 로커로 추진력 강화',
    '넓은 전족부 미드솔 117.7mm로 뛰어난 안정성',
    'FANTOMFIT 어퍼로 프리미엄 핏 제공',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 85,
      text: '마라톤 훈련용 카본 플레이트 신발을 찾는 시리어스 러너에게 추천합니다. 24만 9천원으로 슈퍼트레이너 중 가성비가 좋고, HA 8.8 울트라소프트 폼과 풀렝스 카본 플레이트로 레이싱화 느낌을 훈련에서 미리 경험할 수 있습니다. SA 144 충격흡수에 에너지 리턴 66.1%로 37mm 힐 스택에서 무릎 보호와 추진력을 동시에 제공합니다. 117.7mm 넓은 전족부와 와이드 옵션으로 발볼 넓은 한국 러너도 토박스 걱정 없이 착용 가능합니다. 단, 100% PEBA 경쟁작(엔돌핀 스피드)보다 반발력이 약간 부족하고 278g으로 약간 무겁습니다. 500km 내구성으로 km당 약 498원이며, 서브4~서브3:30 목표 러너의 템포런/장거리 훈련에 최적입니다.',
    },
    {
      userType: '상급 러너',
      rating: 88,
      text: '서브 3:30 달성하고 지금 서브 3:20 목표로 훈련 중입니다. SC Elite v4로 레이스 뛰고, 훈련은 SC Trainer v3(278g)로 통일했어요. 매주 화요일 인터벌(1km x 5, 3:50/km)과 일요일 25km 장거리에 신는데, 카본 플레이트 탑재라 훈련에서 레이스 감각을 미리 잡을 수 있습니다. HA 8.8 울트라소프트 폼이 37mm 힐 스택에서 무릎 부담을 줄여주고, 에너지 리턴 66.1%로 추진력이 좋습니다. 24만 9천원에 500km 내구성이면 가성비도 훈련화로 적절합니다. 엔돌핀 스피드 5랑 비교하면 반발력은 스피드가 한 끗 위인데, SC Trainer가 전족부 117.7mm로 발볼이 넓어서 30km 넘는 훈련에서 한국 러너 토박스에 불편함이 없어요.',
    },
    {
        userType: '예상 적합 — 첫 풀코스 준비 중급 러너',
        text: '주간 40~50km를 소화하며 첫 풀코스를 준비하는 러너에게 맞을 가능성이 있습니다. 힐 37mm 스택에 HA 8.8 울트라소프트 폼, SA 144 충격흡수를 갖춰 장거리 훈련에서 다리에 남는 부담을 줄이는 쪽으로 설계됐습니다. 에너지 리턴 66.1%와 풀렝스 카본 플레이트 조합이라 레이스 감각을 훈련에서 미리 익히려는 목적에도 맞습니다. 다만 278g으로 슈퍼트레이너 중에서는 무거운 편이라, 속도 훈련 전용을 찾는다면 다른 선택지가 낫습니다. 카본 플레이트가 처음이라면 종아리·아킬레스에 적응 기간이 필요할 수 있어 주행거리를 서서히 늘리는 편이 안전합니다. 전족부 117.7mm에 와이드 옵션이 있어 발볼 넓은 러너의 선택지가 넓고, 249,000원·내구성 500km 기준 km당 약 498원입니다.',
      },
    {
      userType: '가성비 중시',
      rating: 85,
      text: '카본 플레이트 훈련화 중에서 가격이 괜찮아서 골랐습니다. 마하 X 3가 27만원대, 매직 스피드 4가 22만원대인데 SC Trainer v3는 24만 9천원으로 가성비가 좋습니다. 278g이 조금 무겁지만 SA 144 충격흡수의 37mm 힐 스택 쿠셔닝이 무릎 부담을 줄여주고, 에너지 리턴 66.1%로 카본의 추진력을 확실히 느낄 수 있어요. 270mm 와이드로 착용 중인데 전족부 117.7mm가 진짜 넓어서 발볼 넓은 한국 러너 발가락이 자유롭습니다. 토박스 여유 덕분에 30km 장거리 훈련 후반에도 발 부종으로 눌리는 느낌이 없어요. 월 200km 훈련에 400km째 쓰고 있는데 아웃솔 아직 괜찮고, 500km 내구성이면 충분히 반발력이 남아있습니다.',
    },
  ],

  similarShoes: ['saucony-endorphin-speed-5', 'asics-magic-speed-4', 'hoka-mach-x-3'],
  relatedPosts: [
    { slug: 'running-shoe-plate-guide-2026', title: '플레이트 완전 해설 — 카본·유리섬유·나일론' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/GiahurkU' }],
};
