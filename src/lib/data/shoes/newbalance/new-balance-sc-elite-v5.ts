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
  editorComment: 'v4 대비 30g 이상 경량화(198g)로 드디어 경쟁 슈퍼슈즈 수준에 도달했습니다. 100% PEBA FuelCell은 15.2 HA로 매우 부드러우며 74.8% 에너지 리턴은 상위권입니다. 특히 74.5mm 토박스는 Vaporfly 3(67.8mm), Alphafly 3(68.4mm)보다 훨씬 넓어 발볼 넓은 한국 러너가 레이스 중 발가락 눌림 없이 뛸 수 있는 유일한 슈퍼슈즈입니다. 29만원(할인가)으로 Vaporfly(31만원)보다 저렴하고, 0.61 뛰어난 그립력으로 젖은 노면에서도 안정적입니다. 100% PEBA 폼은 450km 실도로 마모 실험에서 에너지 리턴을 24.6% 잃었습니다(같은 실험에서 EVA는 −10.5%) — 수명 표기가 짧아 보여도 소재의 물리학입니다. 훈련은 데일리에 맡기고 이 신발은 대회와 마지막 자극 훈련에만 쓰세요.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이며 와이드 옵션도 있어 발볼 넓은 한국 러너도 레이스 중 눌림 없이 착용할 수 있습니다. 319,000원 ÷ 300km = km당 약 1,063원이므로 레이스 전용으로 운용하세요. 비슷한 가격대 카본 슈퍼슈즈로는 메타스피드 스카이+와 아디오스 프로 4를 비교해보세요.',
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
        userType: '세대 비교 — v4에서 넘어오는 경우',
        text: '전작 v4에서 가장 크게 바뀐 지점은 무게입니다. 230g에서 198g으로 약 30g 줄어 후반 구간 부담이 눈에 띄게 달라지는 폭이고, 에너지 리턴 74.8%로 30km 이후 페이스 유지에 유리합니다. 힐 39mm 스택의 100% PEBA라 반발과 충격 흡수를 함께 가져갑니다. 다만 이 모델의 진짜 차별점은 토박스 74.5mm입니다 — 베이퍼플라이 3(67.8mm)과 비교하면 7mm 가까이 넓어, 레이스 후반 발이 부었을 때 새끼발가락 압박이 생기는 문제에서 자유롭습니다. 발볼이 넓어 슈퍼슈즈 선택지가 좁았다면 우선 후보입니다. 내구성 300km 기준 풀코스 3회 정도가 현실적 사용 범위입니다.',
      },
    {
        userType: '예상 적합 — 발볼이 넓은 첫 슈퍼슈즈 선택',
        text: '첫 카본 레이서를 고르면서 발볼이 걸림돌이던 러너에게 특히 맞는 모델입니다. 토박스 74.5mm로 최상위 레이서 중에서는 넓은 축이라, 좁은 라스트 때문에 슈퍼슈즈를 포기했던 경우의 실질적 대안이 됩니다. 198g의 무게에 100% PEBA 폼(HA 15.2), 에너지 리턴 74.8%로 전족부 전환에서 반발이 뚜렷하고, 힐 39mm 스택이라 충격 흡수도 확보한 구성입니다. 다만 내구성 300km 수준이라 일상 훈련까지 겸하기는 어렵고, 레이스와 포인트 훈련으로 용도를 한정하는 운용이 전제입니다.',
      },
    {
        userType: '비용 관점 — 최상위 레이서 중 진입 가격 비교',
        text: '최상위 레이서군에서 가격만 놓고 보면 상대적으로 낮은 축입니다. 할인가 29만원 초반대 기준으로 베이퍼플라이 3(31만원)·알파플라이 3(35만원)보다 낮고, 내구성 300km 기준 km당 약 1,063원입니다. 절대 금액은 크지만 대회 전용으로 한정하면 풀코스 3~4회가 사용 범위라 레이스당 비용으로 환산해 판단하는 편이 현실적입니다. 성능은 198g의 무게에 힐 39mm 스택의 100% PEBA, 에너지 리턴 74.8%로 이 등급에 부족함이 없습니다. 여기에 토박스 74.5mm로 슈퍼슈즈 중 가장 넓은 축이고 와이드 옵션까지 있어, 발볼 때문에 선택지가 없던 경우에는 가격 이전에 이 점이 결정적입니다.',
      },
  ],

  similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'adidas-adios-pro-4'],
  relatedPosts: [
    { slug: 'nike-alphafly-3-vs-asics-metaspeed-sky-vs-nb-sc-elite-v5-carbon-racer-2026', title: '카본 3파전 — 알파플라이 3 vs 메타스카이+ vs SC 엘리트 v5' },
    { slug: 'new-balance-sc-elite-v5-review', title: 'SC Elite V5 심층 후기' },
    { slug: 'nike-vaporfly-4-vs-alphafly-3-comparison', title: '베이퍼플라이4 vs 알파플라이3 — 카본 레이서' },
    { slug: 'new-balance-running-shoes-lineup-tier-guide-2026', title: '뉴발란스 러닝화 계급도' },
    { slug: 'running-shoe-plate-guide-2026', title: '플레이트 완전 해설 — 카본·유리섬유·나일론' },
  ],
  purchaseLinks: [],
};
