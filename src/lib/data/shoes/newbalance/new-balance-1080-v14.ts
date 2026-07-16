import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'new-balance-1080-v14',
  slug: 'new-balance-1080-v14',
  brand: 'New Balance',
  name: '1080 V14',
  image: '/images/shoes/newbalance/1080v14/side.webp',
  images: [
    '/images/shoes/newbalance/1080v14/side.webp',
    '/images/shoes/newbalance/1080v14/front.webp',
    '/images/shoes/newbalance/1080v14/back.webp',
    '/images/shoes/newbalance/1080v14/top.webp',
    '/images/shoes/newbalance/1080v14/outsole.webp',
  ],
  category: '쿠션화',
  rating: 5,
  price: 199000,
  description: '뉴발란스 최고급 쿠션화로, Fresh Foam X 미드솔이 풍부한 쿠셔닝과 부드러운 착지감을 제공합니다. 장거리 러닝에 최적화되어 있습니다.',
  oneliner: '142 SA 충격흡수, 11.9 HA 클라우드 소프트',
  editorComment: '1080 v14는 RunRepeat 142 SA 충격흡수를 기록한 최상위 쿠션화입니다. 11.9 HA 초소프트 폼은 Hoka Bondi 9(14.9 HA)보다도 단단해 장거리에서 바닥감을 느끼지 않습니다. 285g은 v15(216g)보다 69g 무겁지만 안정성(7/10)이 더 높아 뒤꿈치 착지 러너에게 유리합니다. 19만 9천원으로 v15보다 1만원 저렴하며, 토박스가 narrow(68mm 미만)로 발볼 넓은 러너는 2E 필수입니다.\n\n사이즈·구매 가이드: 토박스가 좁은 편(narrow)이므로 발볼 넓은 러너는 반드시 2E 와이드를 선택하세요. 199,000원 ÷ 550km = km당 약 362원입니다. 최신 버전을 원하면 1080 V15(20만 9천원, 69g 경량), 가격 부담을 줄이려면 글리세린 22와 비교해보세요.',
  tags: ['쿠션화', '장거리', '프리미엄'],

  specs: {
    weight: 285,
    cushioning: 9,
    responsiveness: 7,
    stability: 7,
    drop: 4,
    durability: 550,
  },

  biomechanics: {
    stackHeight: {
      heel: 37,
      forefoot: 33,
    },
    drop: 4,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Fresh Foam X',
    optimalPace: '5:00-6:30 min/km',
  },

  detailedSpecs: {
    weight: '285g (남성 US 9 기준)',
    stackHeight: '힐 37.0mm / 포어풋 32.8mm (실측)',
    drop: '4.2mm (실측) / 6mm (브랜드 공식)',
    midsole: 'Fresh Foam X (프리미엄 EVA 기반 폼)',
    plate: '없음',
    outsole: '고무 아웃솔',
    upper: '하이포닛 메쉬',
    width: '표준 (D), 와이드 (2E) 옵션',
    durability: '550km+',
    price: '199,000원',
    costPerKm: '약 ₩362/km (550km 기준)',
    footType: '중립',
    landingPattern: '뒤꿈치/중족부 착지',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'excellent',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'good',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 199000,
    streetPrice: 199000,
    costPerKm: 362,
    valueRating: 8,
    priceTier: 'premium',
    alternatives: ['asics-gel-nimbus-28', 'brooks-glycerin-22'],
    valueAdvantages: ['클라우드 소프트 쿠셔닝', '뛰어난 내구성', '프리미엄 어퍼'],
  },

  targetUsers: {
    recommended: ['편안함을 최우선으로 하는 러너', '리커버리 러닝용', '장거리 러너', '무릎 보호가 필요한 러너'],
    notRecommended: ['가벼운 신발을 원하는 러너', '빠른 페이스 훈련용', '넓은 토박스가 필요한 러너'],
  },

  features: [
    '142 SA 충격 흡수력 (RunRepeat Lab Test) - 최상위 수준',
    '11.9 HA 초소프트 미드솔로 구름 같은 착화감',
    '4/5 통기성 - 트리플 레이어 메쉬로도 우수한 환기',
    '프리미엄 재킷 메쉬 어퍼로 최고급 착화감',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 86,
      text: '프리미엄 쿠션화를 찾는 중급 이상 러너에게 추천합니다. HA 11.9 초소프트 미드솔로 착화감이 매우 편안하고, SA 142 충격흡수로 37mm 힐 스택에서 장거리에서도 무릎 부담이 적습니다. 4mm 드롭의 자연스러운 전환이 뒤꿈치 착지부터 이탈까지 매끄럽습니다. 단, 토박스가 68mm 미만으로 좁아 발볼 넓은 한국 러너는 반드시 2E 와이드를 선택하세요. 285g으로 가벼운 편은 아니지만, 550km 내구성으로 km당 약 362원의 가성비를 제공하며 리커버리 러닝에 최적화되어 있습니다. 에너지 리턴 60.8%(힐)로 쿠션화치고 반발력도 괜찮고, 평발 러너에게도 안정성 7/10으로 충분합니다. 19만 9천원 투자 가치가 있는 고급 데일리 트레이너입니다.',
    },
    {
      userType: '입문 러너',
      rating: 82,
      text: '러닝 시작한 지 3개월 됐습니다. 매장에서 직접 신어보고 275mm 2E 와이드 샀는데, D 사이즈는 토박스가 68mm 미만으로 좁아 새끼발가락이 눌리더라고요. 한국인 발볼이면 무조건 2E 추천합니다. 트레드밀에서 주로 뛰는데 HA 11.9의 초소프트 Fresh Foam X와 37mm 힐 스택의 쿠셔닝이 정말 푹신해서 무릎과 발바닥 충격이 거의 없어요. 다만 285g이 처음엔 좀 무겁다고 느꼈는데 한 달 정도 뛰니까 적응됐고, 오히려 이 무게가 안정감을 줍니다. 150km 신었는데 아웃솔 마모가 적어 550km 내구성은 충분히 달성할 것 같고, 가성비 면에서 19만 9천원에 이 수준의 쿠셔닝이면 평발인 저도 만족합니다.',
    },
    {
      userType: '중급 러너',
      rating: 90,
      text: '하프마라톤 2시간 5분 러너인데, LSD와 리커버리 날에 신고 있습니다. 잠실 올림픽공원 외곽 코스(6km) 돌 때 특히 좋아요. SA 142의 Fresh Foam X가 아스팔트 충격을 확실히 먹어주는 느낌이고, 37mm 힐 스택이 무릎 부담을 줄여줍니다. 글리세린 22랑 번갈아 신는데, 1080이 HA 11.9로 더 부드럽고 글리세린이 약간 더 반발력이 있어요. 토박스가 68mm 미만으로 좁은 편이라 발볼 넓은 한국 러너는 반드시 2E 와이드를 추천합니다. 평발 기미가 있지만 안정성 7/10으로 충분히 대응되고, 에너지 리턴 60.8%로 리커버리 페이스에서도 발이 밀려주는 느낌이 좋습니다. 현재 450km 정도 신었는데 폼은 아직 살아있고, 550km 내구성 기준 km당 약 362원으로 프리미엄 쿠션화치고 가성비 괜찮습니다.',
    },
    {
      userType: '가성비 중시',
      rating: 88,
      text: 'v15 나오면서 v14가 할인 들어갔을 때 15만원대에 잡았습니다. 정가 19만 9천원 기준으로도 v15보다 1만원 싸고, 285g에 SA 142 충격흡수와 쿠셔닝은 거의 동급이에요. v15가 69g 더 가볍긴 한데 솔직히 리커버리 페이스에서 무게 차이 체감은 크지 않습니다. 발볼이 넓은 편이라 275mm 2E 와이드로 착용 중인데, v14의 토박스가 68mm 미만으로 좁다는 평이 있어서 한국 러너는 와이드 필수입니다. HA 11.9의 초소프트 폼 덕분에 무릎 충격이 적어 장거리 리커버리에 최적이고, 한국 러너 커뮤니티에서도 v14 할인가가 가성비 최강이라는 평이 많아요. 550km 내구성이면 km당 약 362원(할인가 기준)으로 프리미엄 쿠션화 중 가장 합리적인 선택입니다.',
    },
  ],

  similarShoes: ['new-balance-1080-v15', 'new-balance-880-v15', 'brooks-glycerin-22', 'asics-gel-nimbus-28'],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/GPlbVErM' }],
};
