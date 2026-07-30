import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'new-balance-860-v14',
  slug: 'new-balance-860-v14',
  brand: 'New Balance',
  name: '860 V14',
  image: '/images/shoes/newbalance/860v14/side.webp',
  images: [
    '/images/shoes/newbalance/860v14/side.webp',
    '/images/shoes/newbalance/860v14/front.webp',
    '/images/shoes/newbalance/860v14/back.webp',
    '/images/shoes/newbalance/860v14/top.webp',
    '/images/shoes/newbalance/860v14/outsole.webp',
  ],
  category: '안정화',
  rating: 4,
  price: 179000,
  description: '과내전 교정 기능이 있는 안정화로, Fresh Foam X와 메디얼 포스트가 결합되어 안정적인 주행을 지원합니다. 평발이나 과내전 러너에게 추천합니다.',
  oneliner: '듀얼 폼 10.9/23.8 HA, 평발 특화 17만원',
  editorComment: '평발 한국 러너를 위한 최고 가성비 안정화입니다. 듀얼 레이어 Fresh Foam X(소프트 10.9 HA + 단단한 23.8 HA)가 과내전을 부드럽게 교정하며, EVA Film Plate가 발 중심을 유지합니다. Asics Kayano 32(26만원)보다 9만원 저렴하면서 안정성(9/10)은 동급이고, Narrow/Standard/Wide/X-Wide 4가지 발볼 옵션으로 정확한 핏을 찾을 수 있습니다. 60.8% 힐 에너지 리턴은 안정화 중 상위권이며, 600km 내구성으로 입문 안정화로 최적입니다.\n\n사이즈·구매 가이드: 표준(standard) 토박스에 Narrow·2E·X-Wide까지 4가지 발볼 옵션을 제공하므로 발볼 넓은 러너도 정확한 핏을 찾을 수 있습니다. 179,000원 ÷ 600km = km당 약 298원으로 안정화 카테고리 최고 가성비입니다. 최신 세대로 업그레이드하려면 860 V15, 동급 가격대 대안으로는 가이드 18을 비교해보세요.',
  tags: ['안정화', '과내전 교정', '서포트'],

  specs: {
    weight: 295,
    cushioning: 8,
    responsiveness: 6,
    stability: 9,
    drop: 9,
    durability: 600,
  },

  biomechanics: {
    stackHeight: {
      heel: 37,
      forefoot: 28,
    },
    drop: 9,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Fresh Foam X + Medial Post',
    optimalPace: '5:30-7:00 min/km',
  },

  detailedSpecs: {
    weight: '295g (남성 US 9 기준)',
    stackHeight: '힐 36.8mm / 포어풋 27.5mm (실측)',
    drop: '9.3mm (실측) / 8mm (브랜드 공식)',
    midsole: 'Fresh Foam X + 메디얼 포스트 (안정성 강화)',
    plate: 'EVA Film Plate (안정성용)',
    outsole: '고무 아웃솔',
    upper: '엔지니어드 메쉬',
    width: '표준 (D), 와이드 (2E) 옵션',
    durability: '600km+',
    price: '179,000원',
    costPerKm: '약 ₩298/km (600km 기준)',
    footType: '과내전, 평발',
    landingPattern: '뒤꿈치 착지',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'excellent',
    shinSplints: 'excellent',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'excellent',
    wideOptions: true,
    winterCompatibility: 'fair',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 179000,
    streetPrice: 179000,
    costPerKm: 298,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'saucony-guide-18'],
    valueAdvantages: ['듀얼 레이어 미드솔 기술', '4가지 발볼 옵션', '과내전 러너를 위한 합리적 가격'],
  },

  targetUsers: {
    recommended: ['과내전/평발 러너', '뒤꿈치 착지 러너', '안정성이 필요한 입문 러너', '880/1080의 안정화 버전을 원하는 러너'],
    notRecommended: ['가벼운 신발을 원하는 러너', '빠른 페이스 훈련용', '뛰어난 통기성을 원하는 러너'],
  },

  features: [
    '듀얼 레이어 Fresh Foam X - 소프트 10.9 HA + 단단한 23.8 HA 조합',
    'EVA Film Plate로 과내전 제어 및 발 중심 유지',
    '넓은 힐 베이스 93.6mm로 뒤꿈치 안정성 강화',
    '힐 60.8%, 전족부 66.3% 에너지 리턴 (RunRepeat Lab Test)',
    'Narrow/Standard/Wide/X-Wide 4가지 발볼 옵션',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 85,
      text: '평발이나 과내전으로 고민하는 러너에게 최적의 안정화입니다. 한국인에게 흔한 평발 특성을 고려하면 매우 유용한 선택이며, 295g에 37mm 힐 스택으로 무릎 보호도 우수합니다. 듀얼 레이어 Fresh Foam X(HA 10.9/23.8)와 EVA 플레이트가 과내전을 부드럽게 교정하며, 힐 에너지 리턴 60.8%로 안정화치고 반발력도 괜찮습니다. 93.6mm 넓은 힐 베이스가 뒤꿈치 안정성을 강화하고, 17만 9천원으로 카야노 32(26만원)보다 가성비가 훨씬 좋습니다. Narrow부터 X-Wide까지 4가지 발볼 옵션으로 한국 러너 맞춤 피팅이 가능하고 토박스도 여유롭습니다. 600km 내구성으로 km당 약 298원, 입문자의 첫 안정화로 강력 추천합니다.',
    },
    {
        userType: '예상 적합 — 평발·과내전에 비용까지 고려하는 경우',
        text: '평발과 과내전 대응이 필요하면서 최상위 안정화의 가격이 부담스러운 경우의 대안입니다. 179,000원으로 카야노 계열(26만원대)보다 8만원가량 낮으면서, HA 10.9/23.8의 듀얼 레이어 메디얼 포스트가 발 안쪽 무너짐을 단계적으로 잡습니다. 힐 베이스가 93.6mm로 넓어 착지 초기의 뒤꿈치 흔들림을 줄이는 구조입니다. X-와이드까지 폭 옵션이 있어 넓은 발에서도 토박스 압박이 적습니다. 295g으로 무겁고 힐 37mm 스택이라 속도보다 안정에 무게를 둔 성격이며, 내구성 600km 기준 km당 약 298원입니다.',
      },
    {
        userType: '예상 적합 — 과내전 입문, 쿠션화와 갈릴 때',
        text: '과내전이 확인됐을 때 "쿠션 좋은 중립화로도 되지 않나"라는 질문에 대한 답이 되는 구성입니다. EVA 필름 플레이트가 발이 안쪽으로 꺾이는 움직임 자체를 잡는 구조라, 충격만 흡수하는 쿠션화와는 역할이 다릅니다. 안정성 9/10 수준이면서 HA 10.9의 부드러운 폼에 힐 37mm 스택이라 지지와 쿠션을 함께 가져갑니다. 295g으로 무겁지만 6분30초 안팎의 페이스에서는 안정감으로 작용합니다. 2E 와이드가 있어 발볼 대응도 되고, 179,000원·내구성 600km 기준 km당 약 298원입니다.',
      },
    {
      userType: '중급 러너',
      rating: 85,
      text: '월 150km 달리는 과내전 러너입니다. 아드레날린 GTS 25에서 갈아탔는데 860이 HA 10.9/23.8의 듀얼 레이어로 쿠셔닝이 더 부드럽고, 교정 강도는 비슷합니다. 소프트+단단한 조합이라 충격 흡수와 지지력을 동시에 챙긴 느낌이에요. 발볼이 넓어 275mm 2E 와이드 착용 중인데 토박스 여유가 충분해서 10km 후반에도 발이 부종으로 끼는 느낌 없이 편합니다. 힐 에너지 리턴 60.8%로 안정화치고 반발력이 괜찮고, 무릎 안쪽 통증이 확실히 줄었습니다. 500km 되면 가이드 18이랑 번갈아 쓸 예정인데, 가성비 면에서 17만 9천원에 이 수준이면 카야노(26만원)보다 9만원 절약하면서 동급 안정성을 얻을 수 있습니다.',
    },
  ],

  similarShoes: ['asics-gel-kayano-33', 'brooks-adrenaline-gts-25', 'saucony-guide-18'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/FjC6qn39' }],
};
