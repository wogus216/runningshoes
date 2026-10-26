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
  editorComment: '평발 한국 러너를 위한 최고 가성비 안정화입니다. 듀얼 레이어 Fresh Foam X(소프트 10.9 HA + 단단한 23.8 HA)가 과내전을 부드럽게 교정하며, EVA Film Plate가 발 중심을 유지합니다. Asics Kayano 32(19만 9천원)보다 2만원 저렴하면서 안정성(9/10)은 동급입니다. 해외에서는 Narrow/Standard/Wide/X-Wide 4가지 폭으로 나오지만, 2026-10-20 확인 기준 한국 공식몰에서는 v14가 검색되지 않아 국내에서 고를 수 있는 폭은 판매처별로 확인해야 합니다. 60.8% 힐 에너지 리턴은 안정화 중 상위권이며, 600km 내구성으로 입문 안정화로 최적입니다.\n\n사이즈·구매 가이드: 토박스는 RunRepeat 실측 73.0mm로 평균(73.2mm)과 같은 표준이고, 랩은 880 v14보다 조이는(snugger) 핏이라고 적었습니다. 해외 4가지 폭 중 한국에서 구할 수 있는 폭은 구매처에서 확인하고, 공식몰에서 와이드를 사려면 후속 860 V15(남성 2E·4E, 여성 D 판매)가 현실적인 선택입니다. 179,000원 ÷ 600km = km당 약 298원으로 안정화 카테고리 최고 가성비입니다. 최신 세대로 업그레이드하려면 860 V15, 동급 가격대 대안으로는 가이드 18을 비교해보세요.',
  tags: ['안정화', '과내전 교정', '서포트'],

  specs: {
    weight: 295,
    cushioning: 8,
    responsiveness: 8,
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
    weight: '295g (RunRepeat 실측, 남성 US 9 기준)',
    stackHeight: '힐 36.8mm / 포어풋 27.5mm (실측)',
    drop: '9.3mm (실측) / 8mm (브랜드 공식)',
    midsole: 'Fresh Foam X + 메디얼 포스트 (안정성 강화)',
    plate: 'EVA Film Plate (안정성용)',
    outsole: '고무 아웃솔',
    upper: '엔지니어드 메쉬',
    width: '토박스 73.0mm(RunRepeat 실측, 같은 랩 평균 73.2mm) → 표준. 최대폭 94.4mm(평균 95.2mm). 랩 본문 "neither too spacious nor too snug, just average", 880 v14 대비 "snugger fit". 폭 옵션: 해외 Narrow/Normal/Wide/X-Wide 4종(RunRepeat "available in all 4 widths, though not every market may carry the full range"). 한국 공식몰(nbkorea.com) 2026-10-20 검색 "860 V14"·"860v14" 0건, "860" 15건은 V15(남성 2E·4E, 여성 D)와 키즈뿐 → v14 국내 공식 판매 폭 확인 불가 (2026-10-23 한국 공식몰 재확인: 모델 미등재 — 해외 폭 옵션만 확인)',
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
    valueAdvantages: ['듀얼 레이어 미드솔 기술', '해외 4가지 폭 옵션', '과내전 러너를 위한 합리적 가격'],
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
    '해외 Narrow/Standard/Wide/X-Wide 4가지 폭 (한국 공식몰 판매 폭은 확인 불가)',
    '충격흡수 힐 126 SA (RunRepeat 실측)',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 85,
      text: '평발이나 과내전으로 고민하는 러너에게 최적의 안정화입니다. 한국인에게 흔한 평발 특성을 고려하면 매우 유용한 선택이며, 295g에 37mm 힐 스택으로 무릎 보호도 우수합니다. 듀얼 레이어 Fresh Foam X(HA 10.9/23.8)와 EVA 플레이트가 과내전을 부드럽게 교정하며, 힐 에너지 리턴 60.8%로 안정화치고 반발력도 괜찮습니다. 93.6mm 넓은 힐 베이스가 뒤꿈치 안정성을 강화하고, 17만 9천원으로 카야노 32(19만 9천원)보다 가성비가 훨씬 좋습니다. 해외에는 Narrow부터 X-Wide까지 4가지 폭이 있지만, 토박스는 실측 73.0mm로 평균 수준이라 여유롭다고 보기는 어렵습니다. 600km 내구성으로 km당 약 298원, 입문자의 첫 안정화로 강력 추천합니다.',
    },
    {
        userType: '예상 적합 — 평발·과내전에 비용까지 고려하는 경우',
        text: '평발과 과내전 대응이 필요하면서 최상위 안정화의 가격이 부담스러운 경우의 대안입니다. 179,000원으로 카야노 계열(19만 9천원)보다 2만원 낮으면서, HA 10.9/23.8의 듀얼 레이어 메디얼 포스트가 발 안쪽 무너짐을 단계적으로 잡습니다. 힐 베이스가 93.6mm로 넓어 착지 초기의 뒤꿈치 흔들림을 줄이는 구조입니다. 토박스는 실측 73.0mm로 평균(73.2mm) 수준이고, 해외에는 X-와이드까지 폭이 있지만 한국 공식몰에서 와이드를 구하려면 후속 V15 쪽을 확인해야 할 가능성이 있습니다. 295g으로 무겁고 힐 37mm 스택이라 속도보다 안정에 무게를 둔 성격이며, 예상 수명 500~700km(추정) 기준 km당 약 260~360원입니다.',
      },
    {
        userType: '예상 적합 — 과내전 입문, 쿠션화와 갈릴 때',
        text: '과내전이 확인됐을 때 "쿠션 좋은 중립화로도 되지 않나"라는 질문에 대한 답이 되는 구성입니다. EVA 필름 플레이트가 발이 안쪽으로 꺾이는 움직임 자체를 잡는 구조라, 충격만 흡수하는 쿠션화와는 역할이 다릅니다. 안정성 9/10 수준이면서 HA 10.9의 부드러운 폼에 힐 37mm 스택이라 지지와 쿠션을 함께 가져갑니다. 295g으로 무겁지만 6분30초 안팎의 페이스에서는 안정감으로 작용합니다. 토박스 73.0mm는 평균 수준이라 발볼이 넓다면 와이드 폭 구매처를 먼저 확인할 필요가 있고, 179,000원·예상 수명 500~700km(추정) 기준 km당 약 260~360원입니다.',
      },
    {
        userType: '모델 선택 — 아드레날린 GTS 25 대비 쿠션',
        text: '같은 안정화군에서 아드레날린 GTS 계열과 비교하면 교정 강도는 비슷하고 쿠션이 더 부드럽습니다. HA 10.9/23.8의 듀얼 레이어 구조라 위층은 충격을 흡수하고 아래층이 지지를 담당해, 안정화 특유의 단단함이 덜합니다. 힐 에너지 리턴 60.8%로 안정화치고 반발도 있는 편입니다. 토박스는 실측 73.0mm로 평균 수준이라, 10km 후반 발이 붓는 편이라면 와이드 폭 구매처를 먼저 확인할 필요가 있습니다. 179,000원으로 카야노 계열(19만 9천원)보다 2만원 낮으면서 지지 성능은 크게 밀리지 않습니다.',
      },
  ],

  similarShoes: ['asics-gel-kayano-33', 'brooks-adrenaline-gts-25', 'saucony-guide-18'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/GowyA70j' }, { store: '쿠팡', url: 'https://link.coupang.com/a/g5YPh2sfls' }],
};
