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
  editorComment: '124.4mm 초광폭 플랫폼과 PWRRUN 크래들이 심한 과내전을 물리적으로 제어하는 구조는 가이드 18의 한 단계 위입니다. 151 SA 충격흡수에 16.6 HA 소프트 폼이라는 조합은 안정화임에도 착화감이 딱딱하지 않다는 뜻입니다. 19만 9천원으로 카야노 32(₩259,000) 대비 6만원 절약하면서, 와이드 옵션까지 있어 발볼 넓은 평발 러너에게 실용적입니다. 통기성 2/5가 유일한 약점이라 한국 여름에는 발이 더울 수 있고, 286g 무게는 느린 페이스 전용임을 감안하세요.\n\n사이즈·구매 가이드: 토박스가 표준 폭이라 발볼이 보통인 러너에게 맞으며, 넓은 발볼이라면 와이드(2E) 옵션을 선택하세요. 정가 199,000원에 내구성 600km 기준 km당 약 332원입니다. 같은 안정화로는 젤 카야노 32·가비오타 6이 대안입니다.',
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
      text: '심한 과내전이나 평발로 기존 안정화가 부족했던 러너를 위한 프리미엄 안정화입니다. 286g에 41mm 힐 스택, 8mm 드롭 구성이고, 124.4mm 초광폭 플랫폼과 PWRRUN Cradle이 강력한 안정성을 제공하면서도 HA 16.6 소프트 폼으로 착화감이 편안합니다. SA 151 충격흡수로 무릎 보호도 최상위급이고, 61% 에너지 리턴으로 반발력도 괜찮습니다. 18만원대로 카야노(26만원) 대비 가성비 좋고, 토박스가 넉넉하며 와이드 옵션도 있어 발볼 넓은 한국 러너에게 안성맞춤입니다. 다만 통기성 2/5로 여름에는 더울 수 있으니 겨울용으로 추천합니다. 600km 내구성에 km당 약 332원으로 가성비 합리적이고, 체중이 많이 나가는 러너에게도 안정적인 지지력을 제공합니다.',
    },
    { userType: '평발 러너', rating: 5, text: '심한 과내전 + 평발 조합인데, 가이드 18로는 안정성이 부족해서 허리케인 25로 올렸습니다. 크래들 구조가 발을 감싸듯 잡아주는 게 확실히 다릅니다. 280mm EE 와이드 착용 중이고 토박스 여유가 넉넉해서 발볼 넓은 제 발에 딱 맞아요. 세종시 중앙공원 러닝코스에서 주 4회 8km씩 뛰고 있는데, SA 151 충격흡수 덕에 무릎 통증이 없습니다. 카야노 32보다 6만원 저렴한데 안정성은 체감상 비슷하거나 더 나은 것 같아서 가성비 좋습니다.' },
    { userType: '중급 러너', rating: 4, text: '정형외과에서 중등도 과내전 판정받고 추천받아 구매했습니다. PEBA 폼이라 안정화임에도 HA 16.6으로 착화감이 부드럽고, SA 151 충격흡수는 장거리에서 진가를 발휘해요. 수원 광교호수에서 15km 뛰어도 무릎 안쪽 통증이 사라졌습니다. 토박스가 넓어서 발볼 걱정 없고 와이드 옵션도 있어 한국 러너에게 편합니다. 단점은 통기성이 2/5라 여름 장마철에 발이 젖은 채로 오래 유지된다는 것. 286g이 무겁지만 겨울용으로는 최고의 선택입니다.' },
    { userType: '입문 러너', rating: 4, text: '체중 85kg 과내전 러너입니다. 러닝 시작할 때 무릎이 걱정돼서 안정화 중 가장 쿠셔닝 좋은 걸 찾다가 허리케인 25에 도착했어요. 286g에 124mm 넓은 바닥이 제 체중을 잘 받쳐줍니다. SA 151 충격흡수와 HA 16.6 소프트 폼으로 무릎 보호가 확실하고, 토박스도 넉넉해서 발볼 넓은 저도 와이드로 편합니다. 가성비도 카야노(26만원) 대비 8만원 저렴해서 좋아요. 다만 286g이라 처음엔 좀 무겁다 느꼈는데, 6분30초 페이스에서는 전혀 문제 안 됩니다.' },
  ],

  similarShoes: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'hoka-gaviota-6', 'new-balance-860-v14'],
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKrEs' }],
};
