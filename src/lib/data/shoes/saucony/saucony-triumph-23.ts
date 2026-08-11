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
      text: '장거리 러닝에서 무릎과 발목 보호가 필요한 러너에게 최적의 프리미엄 쿠션화입니다. 42.3mm 힐 스택과 SA 149 충격흡수로 "무릎 괜찮나요?" 질문에 자신있게 추천할 수 있습니다. 272g으로 맥시멀 쿠션화 중 가벼운 편이고, PEBA 폼의 67.6% 에너지 리턴으로 반발력도 좋습니다. HA 12.4 소프트 폼에 8mm 드롭 구성이라 후족부 착지 러너에게 편안하고, 19만 9천원으로 본디9(22만 9천원)보다 3만원 낮으면서 124mm 넓은 플랫폼으로 안정적입니다. 와이드 옵션이 있어 토박스가 넓어 발볼 넓은 한국 러너도 편하고, 평발 러너에게도 적합한 쿠셔닝을 제공합니다. 600km 내구성에 km당 약 332원으로 가성비 우수하며, 느린 조깅부터 5분대 페이스까지 활용 범위가 넓습니다.',
    },
    {
        userType: '모델 선택 — 본디 9 대비 반발',
        text: '맥시멀 쿠션화에서 본디 계열과 비교하면 성격이 갈립니다. 본디가 푹 가라앉는 감각이라면 이쪽은 에너지 리턴 67.6%로 푹신하면서 튕겨주는 반발이 있습니다. 272g으로 맥시멀치고 가볍고 가격도 2만원가량 낮습니다. 20km급 LSD에서 관절 부담을 줄이면서도 리듬이 죽지 않는 쪽을 원한다면 이 모델이 맞고, 순수한 충격 흡수를 우선하면 본디입니다. 토박스가 넓고 와이드 옵션도 있어 발볼 대응이 넓습니다.',
      },
    {
        userType: '모델 선택 — 님버스 28 대비 반응성과 내구성',
        text: '님버스 계열과 비교하면 반응성에서 앞서고 내구성에서 밀립니다. PEBA 폼이라 SA 149의 충격흡수에 에너지 리턴 67%를 더해, 회복 조깅에서도 다리가 죽지 않는 감각이 있습니다. 가격도 6만원가량 낮습니다. 반면 아웃솔 내구성이 600km로 님버스(1,000km)보다 짧아, 주행거리가 많으면 교체 주기가 빨라집니다. 총비용으로 보면 격차가 좁혀지므로 월 주행거리를 기준으로 판단하는 편이 맞습니다. 토박스가 넉넉해 발볼 대응은 좋습니다.',
      },
    {
        userType: '모델 선택 — 트라이엄프 23 vs 본디 9',
        text: '충격 완화를 우선하며 러닝을 시작하는 단계에서 자주 맞붙는 두 모델입니다. 트라이엄프 23은 272g으로 본디 9보다 가볍고 전환이 앞으로 굴러가는 성격이라, 같은 맥시멀 쿠션이라도 발을 끌고 가는 느낌이 덜합니다. SA 149의 충격흡수로 착지 부담을 줄이면서 무게 페널티는 상대적으로 작은 조합입니다. 와이드 옵션이 있고 토박스도 넉넉해 발볼 압박이 적습니다. 반대로 순수 쿠션량과 접지 안정감을 최우선으로 둔다면 본디 쪽이 두껍습니다.',
      },
  ],

  similarShoes: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v14', 'brooks-glycerin-22'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xqb7bLT9' }],
};
