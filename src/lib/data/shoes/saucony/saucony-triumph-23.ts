import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-triumph-23',
  slug: 'saucony-triumph-23',
  brand: 'Saucony',
  name: '트라이엄프 23',
  image: '/images/shoes/saucony/triumph23.webp',
  images: ['/images/shoes/saucony/triumph23/side.webp', '/images/shoes/saucony/triumph23/top.webp', '/images/shoes/saucony/triumph23/outsole.webp'],
  category: '쿠션화',
  rating: 4,
  price: 199000,
  description: 'Saucony의 프리미엄 쿠션화로, PWRRUN PB (Pebax) 미드솔로 맥시멀 쿠셔닝과 부드러운 반응성을 제공합니다. 장거리 편안함을 추구하는 러너에게 적합합니다.',
  oneliner: '풀 PEBA 폼을 19만원대에, 본디9 킬러 맥시멀 쿠션화',
  editorComment: '42.3mm 힐 스택에 풀 PEBA(PWRRUN PB) 미드솔을 19만 9천원에 제공하는 건 트라이엄프 23만의 강점입니다. Bondi 9(₩220,000)보다 2만원 싸면서 149 SA 충격흡수와 67.6% 에너지 리턴은 오히려 앞섭니다. 272g은 맥시멀 쿠션화 중 가벼운 축에 속하고, 124mm 넓은 플랫폼이 장거리에서 안정성을 보장합니다. 와이드 옵션이 있어 발볼 넓은 한국 러너도 편하게 신을 수 있으며, 조깅부터 5분대 페이스까지 활용 범위가 넓은 점이 순수 리커버리화와 차별됩니다.\n\n사이즈·구매 가이드: 토박스가 표준 폭이라 발볼이 보통인 러너에게 맞으며, 넓은 발볼이라면 와이드(2E) 옵션을 선택하세요. 정가 199,000원에 내구성 600km 기준 km당 약 332원입니다. 같은 쿠션화로는 본디 9·젤 님버스 28이 대안입니다.',
  tags: ['쿠션화', '맥시멀', '장거리', 'PEBA'],

  specs: {
    weight: 272,
    cushioning: 9,
    responsiveness: 7,
    stability: 6,
    drop: 10,
    durability: 600,
  },

  biomechanics: {
    stackHeight: {
      heel: 42.3,
      forefoot: 32.3,
    },
    drop: 10,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN PB (Pebax)',
    optimalPace: '5:00-7:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'good',
    shinSplints: 'excellent',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: ['장거리 러너', '맥시멀 쿠셔닝 선호', '리커버리 런', '중급 러너'],
    notRecommended: ['빠른 템포 러닝', '레이싱', '경량화 선호'],
  },

  features: ['PWRRUN PB (Pebax)', '맥시멀 스택', '10mm 드롭', '풀 PEBA 미드솔'],

  priceAnalysis: {
    msrp: 199000,
    streetPrice: 169000,
    costPerKm: 332,
    valueRating: 7,
    priceTier: 'premium',
    alternatives: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v14'],
  },

  detailedSpecs: {
    weight: '272g (남성 US 9 기준, RunRepeat 실측)',
    stackHeight: '힐 42.3mm / 포어풋 32.3mm (실측)',
    drop: '10.0mm (실측) / 10mm (브랜드 공식)',
    midsole: 'PWRRUN PB (Pebax 기반 PEBA)',
    plate: '없음',
    outsole: '러버 아웃솔',
    upper: '메쉬',
    width: '표준 (D), 와이드 (2E) 옵션',
    durability: '600km+',
    price: '199,000원',
    costPerKm: '약 ₩332/km (600km 기준)',
    footType: '중립',
    landingPattern: '후족부/중족부 착지',
  },
  reviews: [
    {
      userType: '에디터 분석',
      rating: 90,
      text: '장거리 러닝에서 무릎과 발목 보호가 필요한 러너에게 최적의 프리미엄 쿠션화입니다. 42.3mm 힐 스택과 SA 149 충격흡수로 "무릎 괜찮나요?" 질문에 자신있게 추천할 수 있습니다. 272g으로 맥시멀 쿠션화 중 가벼운 편이고, PEBA 폼의 67.6% 에너지 리턴으로 반발력도 좋습니다. HA 12.4 소프트 폼에 8mm 드롭 구성이라 후족부 착지 러너에게 편안하고, 18만원대로 본디9(26만원)보다 가성비 좋으면서 124mm 넓은 플랫폼으로 안정적입니다. 와이드 옵션이 있어 토박스가 넓어 발볼 넓은 한국 러너도 편하고, 평발 러너에게도 적합한 쿠셔닝을 제공합니다. 600km 내구성에 km당 약 332원으로 가성비 우수하며, 느린 조깅부터 5분대 페이스까지 활용 범위가 넓습니다.',
    },
    { userType: '중급 러너', rating: 5, text: '본디 9이랑 2주간 번갈아 신으면서 비교했습니다. 트라이엄프 23이 2만원 싸면서 67.6% 에너지 리턴이 더 좋아요. 본디는 푹 가라앉는 느낌이라면, 트라이엄프는 푹신하면서도 튕겨주는 반발이 있습니다. 272g이라 맥시멀 쿠션화 치고 가벼운 것도 장점이에요. 토박스가 넓어서 발볼 걱정 없고, 와이드 옵션도 있어 한국 러너에게 편합니다. 춘천 의암호 둘레길에서 주말 20km LSD에 애용하고 있는데, 무릎 부담이 확실히 적습니다.' },
    { userType: '상급 러너', rating: 4, text: '월 200km 서브345 러너입니다. 리커버리 데이에 트라이엄프 23 신고 천천히 10km 뛰는데, PEBA 폼의 SA 149 충격흡수와 67% 에너지 리턴 덕에 리커버리런에서도 다리가 산다는 느낌을 받아요. 님버스 28이랑 비교하면 반응성에서 트라이엄프가 앞서고, 가격도 6만원 저렴해서 가성비 좋습니다. 토박스도 넉넉해서 발볼 넓은 편인데 편합니다. 유일한 불만은 아웃솔 내구성이 600km으로 짧다는 점. 님버스(1,000km)에 비하면 확실히 빨리 닳아요.' },
    { userType: '입문 러너', rating: 5, text: '40대 후반이고 무릎 보호 목적으로 러닝 시작했습니다. 매장에서 트라이엄프 23이랑 본디 9 둘 다 신어봤는데, 272g으로 트라이엄프가 더 가볍고 발이 앞으로 굴러가는 느낌이 좋았어요. 270mm 와이드로 구매했고 토박스가 넉넉해서 발볼 넓은 제 발에도 압박 없이 편합니다. 양재천 코스에서 주 3회 4km 조깅하며 SA 149 쿠셔닝 덕에 3개월째 무릎이나 발바닥 통증 없이 잘 뛰고 있어요. 한국 중년 러너에게 강추합니다.' },
  ],

  similarShoes: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v14', 'brooks-glycerin-22'],
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKqYG' }],
};
