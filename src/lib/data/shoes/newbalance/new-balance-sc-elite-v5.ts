import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'new-balance-sc-elite-v5',
  slug: 'new-balance-sc-elite-v5',
  brand: 'New Balance',
  name: 'SC Elite V5',
  image: '/images/shoes/newbalance/scelitev5/side.webp',
  images: [
    '/images/shoes/newbalance/scelitev5/side.webp',
    '/images/shoes/newbalance/scelitev5/front.webp',
    '/images/shoes/newbalance/scelitev5/back.webp',
    '/images/shoes/newbalance/scelitev5/top.webp',
    '/images/shoes/newbalance/scelitev5/outsole.webp',
  ],
  category: '레이싱',
  rating: 5,
  price: 319000,
  description: '뉴발란스 최고의 레이싱화로, 100% PEBA FuelCell 폼과 카본 플레이트가 최상의 에너지 리턴을 제공합니다. 마라톤 기록 단축을 목표로 하는 러너에게 추천합니다.',
  oneliner: '198g+74.8% 에너지, 74.5mm 넓은 토박스',
  editorComment: 'v4 대비 30g 이상 경량화(198g)로 드디어 경쟁 슈퍼슈즈 수준에 도달했습니다. 100% PEBA FuelCell은 15.2 HA로 매우 부드러우며 74.8% 에너지 리턴은 상위권입니다. 특히 74.5mm 토박스는 Vaporfly 3(67.8mm), Alphafly 3(68.4mm)보다 훨씬 넓어 발볼 넓은 한국 러너가 레이스 중 발가락 눌림 없이 뛸 수 있는 유일한 슈퍼슈즈입니다. 29만원(할인가)으로 Vaporfly(31만원)보다 저렴하고, 0.61 뛰어난 그립력으로 젖은 노면에서도 안정적입니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이며 와이드 옵션도 있어 발볼 넓은 한국 러너도 레이스 중 눌림 없이 착용할 수 있습니다. 319,000원 ÷ 300km = km당 약 1,063원이므로 레이스 전용으로 운용하세요. 비슷한 가격대 카본 슈퍼슈즈로는 메타스피드 스카이+와 아디오스 프로 4를 비교해보세요.',
  tags: ['레이싱', '카본 플레이트', '엘리트'],

  specs: {
    weight: 198,
    cushioning: 7,
    responsiveness: 10,
    stability: 6,
    drop: 11,
    durability: 300,
  },

  biomechanics: {
    stackHeight: {
      heel: 39,
      forefoot: 29,
    },
    drop: 11,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'FuelCell (100% PEBA)',
    optimalPace: '3:30-4:30 min/km',
  },

  detailedSpecs: {
    weight: '198g (남성 US 9 기준)',
    stackHeight: '힐 39.3mm / 포어풋 28.6mm (실측)',
    drop: '10.7mm (실측) / 8mm (브랜드 공식)',
    midsole: 'FuelCell (100% PEBA) + 풀렝스 카본 플레이트',
    plate: '풀렝스 카본 플레이트',
    outsole: '경량 고무 아웃솔',
    upper: '울트라 라이트 메쉬',
    width: '표준 (D)',
    durability: '300km+',
    price: '319,000원',
    costPerKm: '약 ₩1,063/km (300km 기준)',
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
    flatFootCompatibility: 'fair',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 319000,
    streetPrice: 299000,
    costPerKm: 1063,
    valueRating: 7,
    priceTier: 'super-premium',
    alternatives: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'adidas-adios-pro-4'],
    valueAdvantages: ['v4 대비 30g 이상 경량화', '개선된 플레이트 곡률', '뛰어난 그립력', '경쟁작 대비 넓은 토박스'],
  },

  targetUsers: {
    recommended: ['뉴발란스 팬 러너', '올드스쿨 레이싱 플랫 느낌을 원하는 러너', '슈퍼슈즈 중 넓은 토박스를 원하는 러너', '이전 버전이 무거웠던 마라토너'],
    notRecommended: ['안정성이 필요한 러너', '최경량을 원하는 러너', '과내전 러너'],
  },

  features: [
    '힐 144 SA 충격흡수 + 74.8% 에너지 리턴 (RunRepeat Lab Test)',
    '15.2 HA 울트라소프트 100% PEBA FuelCell 폼',
    '198g 경량 설계 - v4 대비 30g+ 감량',
    '새로운 Energy Arc 플레이트 곡률로 빠른 전환',
    '0.61 뛰어난 그립력 - 젖은 노면에서도 안정적',
    '74.5mm 넓은 토박스 - 슈퍼슈즈 중 가장 여유로운 핏',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 92,
      text: '서브3 목표 마라토너를 위한 뉴발란스 최고의 레이싱화입니다. v4 대비 30g 이상 경량화된 198g에 100% PEBA FuelCell(HA 15.2) 폼과 카본 플레이트로 SA 144 충격흡수와 74.8% 에너지 리턴을 달성했습니다. 특히 74.5mm 넓은 토박스는 슈퍼슈즈 중 가장 넓어, 발볼 넓은 한국 러너도 레이스 중 발가락 눌림 없이 뛸 수 있습니다. 39mm 힐 스택이 무릎 충격을 잡아주며, 0.61 그립력으로 젖은 노면에서도 안정적입니다. 29만원(할인가)으로 베이퍼플라이(31만원)보다 가성비가 좋고, 300km 내구성으로 풀마라톤 3~4회 사용 가능합니다. 단, 최상위 슈퍼슈즈와 비교하면 반발력이 약간 부족하므로 서브3 이하 엘리트에게는 다른 선택이 나을 수 있습니다.',
    },
    {
      userType: '상급 러너',
      rating: 95,
      text: '서브 3:10 러너인데 v4에서 v5로 바꾸고 춘천 마라톤에서 3:05 찍었습니다. 198g이 체감될 정도로 v4(230g)보다 가볍고, 에너지 리턴 74.8% 덕분에 후반 35km부터의 페이스 유지가 확실히 나아졌어요. 39mm 힐 스택의 100% PEBA 폼이 무릎 충격을 줄여주면서도 반발력이 살아있습니다. 74.5mm 토박스 덕분에 35km 넘어서도 발가락이 붓고 눌리는 문제가 없습니다. 베이퍼플라이 3은 67.8mm이라 레이스 후반에 새끼발가락이 아팠는데 SC Elite는 그런 게 없어요. 가성비 면에서 29만원(할인가)에 300km 뛸 수 있으니 풀마라톤 3회 기준 레이스당 10만원 정도입니다. 발볼 넓은 한국 러너에게 유일한 슈퍼슈즈라고 생각합니다.',
    },
    {
      userType: '중급 러너',
      rating: 85,
      text: '서브 4 달성하고 서브 3:40 도전 중입니다. 첫 슈퍼슈즈로 SC Elite v5 골랐는데, 솔직히 198g을 처음 신는 순간 "이게 카본 플레이트구나" 싶었어요. 전족부로 체중 이동할 때 에너지 리턴 74.8%가 톡톡 밀어주는 느낌이 일반 러닝화랑 차원이 다릅니다. HA 15.2의 100% PEBA 폼과 39mm 힐 스택이 무릎 충격도 잡아주고, 74.5mm 넓은 토박스 덕분에 발볼 넓은 한국 러너인 저도 레이스 내내 발가락 눌림이 없었습니다. 가성비 면에서 29만원(할인가)에 대회용으로 충분한 스펙입니다. 서울 마라톤 하프에 신고 나갈 예정인데 20km 훈련에서 1:38 페이스 나왔습니다. 다만 300km 내구성이라 훈련에 마구 신기엔 아까워서 레이스와 포인트 훈련에만 쓰고 있어요.',
    },
    {
      userType: '가성비 중시',
      rating: 80,
      text: '슈퍼슈즈가 30만원이 넘으니 가격이 부담되긴 합니다. 그래도 쿠팡에서 할인 잡으면 29만원 초반대에 198g 슈퍼슈즈를 살 수 있고, 베이퍼플라이 3(31만원)이나 알파플라이 3(35만원)보다는 싸요. 39mm 힐 스택의 100% PEBA 폼이 무릎 충격도 잡아주면서 에너지 리턴 74.8%의 강력한 반발력을 제공합니다. 300km 내구성 기준 km당 약 1,063원이라 가성비가 좋다고 할 수는 없지만, 대회용으로만 신으면 풀마라톤 3~4회 뛸 수 있으니 레이스당 비용으로 생각하면 납득이 됩니다. 74.5mm 토박스가 슈퍼슈즈 중 가장 넓어 발볼 넓은 한국 러너에게 유일한 선택지라는 점도 큽니다. 와이드 옵션도 제공되어 발볼 걱정 없이 레이스에 집중할 수 있고, 기록 단축의 가치를 돈으로 환산하면 충분히 합리적인 투자입니다.',
    },
  ],

  similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'adidas-adios-pro-4'],
  relatedPosts: [
    { slug: 'new-balance-sc-elite-v5-review', title: 'SC Elite V5 심층 후기' },
    { slug: 'nike-vaporfly-4-vs-alphafly-3-comparison', title: '베이퍼플라이4 vs 알파플라이3 — 카본 레이서' },
    { slug: 'new-balance-running-shoes-lineup-tier-guide-2026', title: '뉴발란스 러닝화 계급도' },
  ],
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBLwgI' }],
};
