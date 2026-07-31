import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-guide-18',
  slug: 'saucony-guide-18',
  brand: 'Saucony',
  name: '가이드 18',
  image: '/images/shoes/saucony/guide18.webp',
  images: ['/images/shoes/saucony/guide18/side.webp', '/images/shoes/saucony/guide18/top.webp', '/images/shoes/saucony/guide18/outsole.webp'],
  category: '안정화',
  rating: 4,
  price: 159000,
  description: 'Saucony의 대표 안정화로, PWRRUN 미드솔과 Guidance Frame으로 과내전 러너에게 적합한 안정성을 제공합니다.',
  oneliner: '카야노의 절반 가격, 121.9mm 광폭 플랫폼 안정화',
  editorComment: '15만 9천원이라는 가격은 카야노 32(₩259,000)의 61%에 불과하지만, 121.9mm 넓은 플랫폼이 착지 시 좌우 흔들림을 효과적으로 억제합니다. 61.3% 에너지 리턴은 안정화 카테고리 평균 이상이고, 통기성 5/5로 여름에도 쾌적하게 달릴 수 있습니다. 과내전이 심하지 않은 경도~중등도 수준이라면 이 가격대에서 가이드 18만큼 합리적인 선택은 드뭅니다. 다만 노출 폼 비율이 높아 아웃솔 내구성이 약한 편이라 아스팔트 위주 러너는 주의하세요.\n\n사이즈·구매 가이드: 토박스가 표준 폭이라 발볼이 보통인 러너에게 맞으며, 넓은 발볼이라면 와이드(2E) 옵션을 선택하세요. 정가 159,000원에 내구성 600km 기준 km당 약 265원으로 안정화 중 가성비가 뛰어납니다. 같은 안정화로는 젤 카야노 32·아드레날린 GTS 25가 대안입니다.',
  tags: ['안정화', '입문', '과내전 지원'],

  specs: {
    weight: 278,
    cushioning: 7,
    responsiveness: 6,
    stability: 8,
    drop: 8,
    durability: 600,
  },

  biomechanics: {
    stackHeight: {
      heel: 36,
      forefoot: 27.7,
    },
    drop: 8.3,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN',
    optimalPace: '5:00-7:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'good',
    kneeIssues: 'excellent',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'excellent',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['과내전 러너', '평발', '입문 러너', '안정성 필요'],
    notRecommended: ['중립 발', '레이싱', '경량화 선호'],
  },

  features: ['PWRRUN 미드솔', 'Guidance Frame', '8.3mm 드롭', '과내전 지원'],

  priceAnalysis: {
    msrp: 159000,
    streetPrice: 139000,
    costPerKm: 265,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'new-balance-860-v14'],
  },

  detailedSpecs: {
    weight: '278g (남성 US 9 기준, RunRepeat 실측)',
    stackHeight: '힐 36.0mm / 포어풋 27.7mm (실측)',
    drop: '8.3mm (실측) / 8mm (브랜드 공식)',
    midsole: 'PWRRUN',
    plate: '없음',
    outsole: 'XT-900 러버',
    upper: '메쉬',
    width: '표준 (D), 와이드 (2E) 옵션',
    durability: '600km+',
    price: '159,000원',
    costPerKm: '약 ₩265/km (600km 기준)',
    footType: '안정화 (과내전 지원)',
    landingPattern: '후족부/중족부 착지',
  },
  reviews: [
    {
      userType: '에디터 분석',
      rating: 80,
      text: '평발이나 과내전으로 고민하는 입문 러너를 위한 가성비 안정화입니다. 15만원대로 카야노(26만원)의 절반 가격이면서, 278g에 36mm 힐 스택, 8mm 드롭 구성이고, 121.9mm 넓은 플랫폼으로 착지 안정성이 뛰어납니다. SA 132 충격흡수와 HA 22.8로 쿠셔닝이 적절하고, 61.3% 에너지 리턴으로 반발력은 평균 수준입니다. 통기성 5/5 최상위급으로 여름철 러닝에도 쾌적하고, 토박스 폭이 표준이라 발볼 넓은 한국 러너는 와이드 옵션을 선택하세요. 평발 특성에 적합하며, "무릎 괜찮나요?" 질문하는 과내전 입문 러너에게 부담 없이 추천합니다. 500km 내구성에 km당 약 265원으로 가성비 좋고, Guidance Frame이 과내전을 효과적으로 제어합니다.',
    },
    {
        userType: '비용 관점 — 최상위 안정화의 절반 가격',
        text: '안정화가 필요하지만 최상위 모델의 가격이 부담스러운 경우의 대안입니다. 15만원대로 카야노 계열(26만원대)의 약 절반이면서, Guidance Frame이 과내전 움직임을 잡습니다. 지지 강도 자체는 최상위 안정화보다 약하므로 과내전이 심하면 부족할 수 있지만, 경증~중등도라면 충분한 수준입니다. 278g으로 데일리에 적당한 무게이고, 와이드 옵션이 있어 발볼 넓은 경우에도 토박스 여유가 있습니다.',
      },
    {
        userType: '내구성 주의 — 아스팔트에서는 공칭보다 짧다',
        text: '예산 20만원 이하에서 경증 평발·과내전에 대응하는 안정화입니다. 278g에 SA 132의 충격흡수로 걷기와 조깅을 병행하는 단계에 무리가 없고, 발목이 안쪽으로 무너지는 움직임을 잡습니다. 다만 앞쪽에 아웃솔 러버가 덮이지 않은 노출 폼 구간이 있어 아스팔트에서 400km 부근부터 마모가 시작됩니다. 공칭 내구성 500km는 노면이 부드러운 조건 기준이므로, 아스팔트 위주라면 더 짧게 잡는 편이 안전합니다. 토박스는 표준 폭이라 발볼이 넓으면 와이드를 권합니다.',
      },
    {
        userType: '모델 선택 — 아드레날린 대비 가볍고 통기성 우위',
        text: '같은 안정화군에서 아드레날린 GTS 계열과 비교하면 무게와 통기성에서 앞섭니다. 278g으로 가볍고 통기성 5/5라 한여름 착용에서 차이가 큽니다. 플랫폼이 121.9mm로 넓어 착지 안정감도 확보돼 있고, HA 22.8이라 지나치게 단단하지 않습니다. 반면 쿠션량은 아드레날린보다 얇게 느껴지므로, 20km 이상 장거리에서 충격 흡수를 우선한다면 상위 모델인 허리케인 계열이 맞습니다. 와이드 옵션이 있습니다.',
      },
  ],

  similarShoes: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'new-balance-860-v14', 'hoka-gaviota-6'],
  purchaseLinks: [],
};
