import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-hurricane-25',
  slug: 'saucony-hurricane-25',
  brand: 'Saucony',
  name: '허리케인 25',
  image: '/images/shoes/saucony/hurricane25.webp',
  images: ['/images/shoes/saucony/hurricane25/side.webp', '/images/shoes/saucony/hurricane25/top.webp', '/images/shoes/saucony/hurricane25/outsole.webp'],
  category: '안정화',
  rating: 4,
  price: 199000,
  description: 'Saucony의 프리미엄 안정화로, PWRRUN PB + PWRRUN 크래들 조합으로 맥시멀 쿠셔닝과 강력한 안정성을 동시에 제공합니다.',
  oneliner: 'PEBA + 크래들 듀얼 구조, 심한 과내전도 잡는 151 SA',
  editorComment: '124.4mm 초광폭 플랫폼과 PWRRUN 크래들이 심한 과내전을 물리적으로 제어하는 구조는 가이드 18의 한 단계 위입니다. 151 SA 충격흡수에 16.6 HA 소프트 폼이라는 조합은 안정화임에도 착화감이 딱딱하지 않다는 뜻입니다. 19만 9천원으로 카야노 32(₩199,000)와 같은 가격이면서, 와이드 옵션까지 있어 발볼 넓은 평발 러너에게 실용적입니다. 통기성 2/5가 유일한 약점이라 한국 여름에는 발이 더울 수 있고, 286g 무게는 느린 페이스 전용임을 감안하세요.\n\n사이즈·구매 가이드: 토박스가 표준 폭이라 발볼이 보통인 러너에게 맞으며, 넓은 발볼이라면 와이드(2E) 옵션을 선택하세요. 정가 199,000원에 내구성 600km 기준 km당 약 332원입니다. 같은 안정화로는 젤 카야노 32·가비오타 6이 대안입니다.',
  tags: ['안정화', '맥시멀', '과내전 지원', '프리미엄'],

  specs: {
    weight: 286,
    cushioning: 9,
    responsiveness: 6,
    stability: 9,
    drop: 7,
    durability: 600,
  },

  biomechanics: {
    stackHeight: {
      heel: 40.2,
      forefoot: 33.1,
    },
    drop: 7.1,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN PB + PWRRUN Cradle',
    optimalPace: '5:00-7:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'excellent',
    shinSplints: 'excellent',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'excellent',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['과내전 러너', '평발', '장거리', '안정성 + 쿠셔닝 모두 필요'],
    notRecommended: ['중립 발', '레이싱', '경량화 선호'],
  },

  features: ['PWRRUN PB + PWRRUN Cradle', '프리미엄 안정화', '7.1mm 드롭', '맥시멀 쿠셔닝'],

  priceAnalysis: {
    msrp: 199000,
    streetPrice: 169000,
    costPerKm: 332,
    valueRating: 7,
    priceTier: 'premium',
    alternatives: ['asics-gel-kayano-32', 'brooks-glycerin-gts-22', 'new-balance-860-v14'],
  },

  detailedSpecs: {
    weight: '286g (남성 US 9 기준, RunRepeat 실측)',
    stackHeight: '힐 40.2mm / 포어풋 33.1mm (실측)',
    drop: '7.1mm (실측) / 8mm (브랜드 공식)',
    midsole: 'PWRRUN PB + PWRRUN Cradle (듀얼 밀도)',
    plate: '없음',
    outsole: '러버 아웃솔',
    upper: '메쉬',
    width: '표준 (D), 와이드 (2E) 옵션',
    durability: '600km+',
    price: '199,000원',
    costPerKm: '약 ₩332/km (600km 기준)',
    footType: '안정화 (과내전 지원)',
    landingPattern: '후족부/중족부 착지',
  },
  reviews: [
    {
      userType: '에디터 분석',
      rating: 77,
      text: '심한 과내전이나 평발로 기존 안정화가 부족했던 러너를 위한 프리미엄 안정화입니다. 286g에 41mm 힐 스택, 8mm 드롭 구성이고, 124.4mm 초광폭 플랫폼과 PWRRUN Cradle이 강력한 안정성을 제공하면서도 HA 16.6 소프트 폼으로 착화감이 편안합니다. SA 151 충격흡수로 무릎 보호도 최상위급이고, 61% 에너지 리턴으로 반발력도 괜찮습니다. 19만 9천원으로 카야노(19만 9천원)와 같은 가격이면서, 토박스가 넉넉하며 와이드 옵션도 있어 발볼 넓은 한국 러너에게 안성맞춤입니다. 다만 통기성 2/5로 여름에는 더울 수 있으니 겨울용으로 추천합니다. 600km 내구성에 km당 약 332원으로 가성비 합리적이고, 체중이 많이 나가는 러너에게도 안정적인 지지력을 제공합니다.',
    },
    {
        userType: '모델 선택 — 가이드로 부족할 때의 상위 안정화',
        text: '같은 브랜드 안정화 라인에서 가이드 계열의 지지가 부족한 경우 올라가는 상위 모델입니다. 크래들 구조가 뒤꿈치를 감싸는 방식이라, 미드솔에 포스트를 넣어 안쪽을 받치는 방식과는 지지 감각이 다릅니다. 과내전이 강하게 나오는 경우 이 구조가 더 확실하게 잡아줍니다. SA 151로 충격흡수도 최상위권이고, EE 와이드까지 폭 옵션이 있어 넓은 발에서도 토박스 여유가 있습니다. 카야노 32와 같은 가격대에서 유사한 수준의 지지를 제공하는 구성입니다.',
      },
    {
        userType: '계절 적합성 — 겨울 강점, 장마철 약점',
        text: '안정화 중 드물게 PEBA 폼을 쓴 모델이라 HA 16.6으로 착화감이 부드럽고, SA 151의 충격흡수는 이 카테고리 최상단입니다. 15km급 장거리에서 지지와 쿠션을 함께 가져갑니다. 다만 통기성이 2/5로 낮아 장마철에는 젖은 상태가 오래 유지되므로 여름 주력으로는 맞지 않습니다. 286g으로 무겁지만 지지 성격의 신발에서는 단점이 덜하고, 토박스가 넓은 데다 와이드 옵션까지 있어 발볼 대응도 넓습니다.',
      },
    {
        userType: '예상 적합 — 체중이 실린 과내전, 쿠션 우선',
        text: '과내전이 있으면서 체중까지 실린 조건에서 쿠션량을 우선할 때 맞습니다. 바닥 폭이 124mm로 넓어 하중이 실려도 착지가 흔들리지 않고, SA 151의 충격흡수와 HA 16.6의 부드러운 폼이라 안정화 중에서는 착화감이 편한 축입니다. 286g으로 무겁지만 6분30초 안팎의 페이스에서는 체감이 작습니다. 카야노 계열(19만 9천원)과 같은 가격대이고, 와이드 옵션이 있어 발볼 대응도 됩니다.',
      },
  ],

  similarShoes: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'hoka-gaviota-6', 'new-balance-860-v14'],
  purchaseLinks: [],
};
