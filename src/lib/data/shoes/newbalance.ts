import type { Shoe } from '@/types/shoe';

export const newbalanceShoes: Shoe[] = [
  {
    id: 'new-balance-880-v15',
    slug: 'new-balance-880-v15',
    brand: 'New Balance',
    name: '880 V15',
    image: '/images/shoes/newbalance/880v15/side.webp',
    images: [
      '/images/shoes/newbalance/880v15/side.webp',
      '/images/shoes/newbalance/880v15/front.webp',
      '/images/shoes/newbalance/880v15/back.webp',
      '/images/shoes/newbalance/880v15/top.webp',
      '/images/shoes/newbalance/880v15/outsole.webp',
    ],
    category: '입문화',
    rating: 4,
    price: 189000,
    description: '뉴발란스의 대표적인 입문용 러닝화로, Fresh Foam X 미드솔이 편안한 쿠셔닝을 제공합니다. 안정성과 쿠셔닝의 균형이 좋아 첫 러닝화로 적합합니다.',
    oneliner: '40mm 맥시멀 스택, 입문자 무릎 보호 특화',
    editorComment: '880 v15는 286g으로 경량 입문화는 아니지만, 40mm 힐 스택과 8/10 쿠셔닝으로 무릎 부담이 적습니다. Brooks Ghost 17(277g, 18만 9천원)과 거의 동일한 가격이지만 Fresh Foam X가 더 부드러운 착화감을 제공합니다. 4mm 로우드롭은 자연스러운 전환을 돕고, 2E 와이드 옵션으로 발볼 넓은 러너도 편안합니다. 600km 내구성으로 km당 315원, 장기적으로 가성비가 뛰어납니다.',
    tags: ['입문화', '데일리 러닝', '안정적'],

    specs: {
      weight: 286,
      cushioning: 8,
      responsiveness: 6,
      stability: 8,
      drop: 4,
      durability: 600,
    },

    biomechanics: {
      stackHeight: {
        heel: 40,
        forefoot: 35,
      },
      drop: 4,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Fresh Foam X',
      optimalPace: '5:30-7:00 min/km',
    },

    detailedSpecs: {
      weight: '286g (남성 US 9 기준)',
      stackHeight: '힐 39.7mm / 포어풋 35.4mm (실측)',
      drop: '4.3mm (실측) / 6mm (브랜드 공식)',
      midsole: 'Fresh Foam X (EVA 기반 고밀도 폼)',
      plate: '없음',
      outsole: '고무 아웃솔',
      upper: '엔지니어드 메쉬',
      width: '표준 (D), 와이드 (2E) 옵션',
      durability: '600km+',
      price: '189,000원',
      costPerKm: '약 315원/km',
      footType: '중립, 약간의 과내전',
      landingPattern: '뒤꿈치/중족부 착지',
    },

    injuryPrevention: {
      plantarFasciitis: 'excellent',
      achillesTendinopathy: 'good',
      kneeIssues: 'excellent',
      shinSplints: 'good',
    },

    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'good',
      wideOptions: true,
      winterCompatibility: 'good',
      summerCompatibility: 'fair',
    },

    priceAnalysis: {
      msrp: 189000,
      streetPrice: 189000,
      costPerKm: 315,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['brooks-ghost-17', 'asics-gel-nimbus-28'],
      valueAdvantages: ['맥스 쿠션 중 합리적 가격', '다양한 발볼 옵션', '무릎 보호에 탁월'],
    },

    targetUsers: {
      recommended: ['입문 러너', '무릎 부담을 줄이고 싶은 러너', '장거리 편안함을 원하는 러너', '넓은 발볼 옵션이 필요한 러너'],
      notRecommended: ['가벼운 신발을 원하는 러너', '빠른 페이스 훈련용', '워킹/캐주얼 용도'],
    },

    features: [
      '힐 39.7mm, 전족부 35.4mm의 맥시멀 쿠셔닝 (RunRepeat Lab Test)',
      '로커 지오메트리로 부드러운 착지-이탈 전환',
      'Torsional rigidity 5/5로 높은 스택에도 안정성 유지',
      '두꺼운 텅 패딩과 힐 슬립 방지 설계',
    ],

    reviews: [
      {
        userType: '에디터 분석',
        rating: 85,
        text: '입문~중급 러너에게 최적의 가성비 맥시멀 쿠션화입니다. 15만원대에 1080급 39.7mm 힐 스택을 제공하며, 무릎 부담이 걱정되는 초보 러너에게 추천합니다. 다만 303g으로 무거운 편이라 5분/km 이하 빠른 페이스에는 부적합합니다. 2E/4E 와이드 옵션이 있어 발볼 넓은 한국 러너도 편하게 착용할 수 있습니다. "무릎 괜찮나요?" 질문에 자신있게 추천할 수 있는 신발입니다.',
      },
      {
        userType: '입문 러너',
        rating: 88,
        text: '올해 1월부터 러닝 시작했는데, 동네 러닝 크루 선배가 880 추천해줘서 270mm 2E로 샀습니다. 잠실 석촌호수 한 바퀴(2.5km)부터 시작해서 지금은 5km 35분대까지 왔어요. 무릎이 원래 약한 편인데 6개월째 무릎 통증 한 번도 없었습니다. 좀 무겁긴 한데, 입문자한테는 쿠셔닝이 확실히 무릎을 지켜주는 느낌이라 오히려 안심이 됩니다.',
      },
      {
        userType: '중급 러너',
        rating: 78,
        text: '월 120km 정도 뛰는데 리커버리 데이용으로 씁니다. 1080 v14가 메인이고 880은 천천히 뛸 때 신는 용도예요. 286g이 인터벌이나 빠른 페이스에는 확실히 부담되지만 6:00/km 이상 편하게 뛸 때는 쿠셔닝이 묵직하고 좋습니다. 400km 넘게 신었는데 아웃솔 마모도 거의 없어서 내구성은 인정합니다. 가격 대비 못할 게 없는 신발이에요.',
      },
      {
        userType: '평발 러너',
        rating: 85,
        text: '평발이라 신발 고르기가 항상 어려웠는데, 2E 와이드로 신으니 발볼이 편하고 아치 부분도 너무 세게 잡지 않아서 좋습니다. 분당 탄천에서 주 3회 5~7km 뛰고 있어요. 이전에 신던 나이키 페가수스가 발볼이 좀 꽉 끼었는데 880은 처음부터 길들일 필요가 없었습니다.',
      },
    ],

    similarShoes: ['new-balance-1080-v15', 'new-balance-1080-v14', 'brooks-glycerin-22', 'asics-gel-nimbus-28'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/GRurbDtu' }],
  },
  {
    id: 'new-balance-1080-v15',
    slug: 'new-balance-1080-v15',
    brand: 'New Balance',
    name: '1080 V15',
    image: '/images/shoes/newbalance/1080v15/side2.webp',
    images: [
      '/images/shoes/newbalance/1080v15/side2.webp',
      '/images/shoes/newbalance/1080v15/side.webp',
      '/images/shoes/newbalance/1080v15/back.webp',
      '/images/shoes/newbalance/1080v15/angle.webp',
      '/images/shoes/newbalance/1080v15/top.webp',
      '/images/shoes/newbalance/1080v15/outsole.webp',
    ],
    category: '쿠션화',
    rating: 4.9,
    price: 209000,
    description:
      '질소 주입 인피니온(슈퍼크리티컬) 폼으로 향상된 쿠셔닝과 에너지 반환을 제공하는 뉴발란스 플래그십 쿠션화. v14 대비 69g 경량화되었으며, 2E/4E 와이드 옵션으로 발볼 넓은 러너도 편안하게 착용 가능합니다.',
    oneliner: '216g 경량 쿠션화, 인피니온 폼 혁신',
    editorComment: '전작 대비 69g 감량(285g→216g)이라는 극적인 변화를 이뤄낸 1080 v15. 인피니온 폼은 Fresh Foam X보다 에너지 리턴과 통기성이 향상되었으며, 쿠셔닝(9/10)은 Asics Nimbus 28과 동급입니다. 20만 9천원으로 2만원 가격이 올랐지만 경량화로 5:00-6:30/km 빠른 페이스에도 대응 가능해졌습니다. 2E/4E 발볼 옵션은 한국 러너에게 큰 장점이며, v14의 narrow 토박스를 피했던 러너도 편하게 신을 수 있습니다.',
    tags: ['쿠션화', '장거리', '데일리', '경량'],

    specs: {
      weight: 216,
      cushioning: 9,
      responsiveness: 7,
      stability: 6,
      drop: 6,
      durability: 600,
    },

    biomechanics: {
      stackHeight: {
        heel: 40,
        forefoot: 34,
      },
      drop: 6,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Infinion (질소 주입 슈퍼크리티컬 폼)',
      optimalPace: '5:00-6:30 min/km',
    },

    detailedSpecs: {
      weight: '216g (남성 기준) / 208g (여성 기준)',
      stackHeight: '힐 40mm / 포어풋 34mm',
      drop: '6mm',
      midsole: '인피니온 (질소 주입 슈퍼크리티컬 폼) - 향상된 쿠셔닝, 에너지 반환, 반응성, 경량화',
      plate: '없음',
      outsole: '고무 아웃솔 (전족부 접지 면적 효율 개선, 힐 안정성 보강)',
      upper: 'Breathable Mesh + 리플렉티브 디테일',
      width: '2E(약간 넓음), 4E(넓음) 옵션',
      durability: '600km+',
      price: '209,000원',
      costPerKm: '약 348원/km',
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
      toBoxWidth: 'standard',
      flatFootCompatibility: 'good',
      wideOptions: true,
      winterCompatibility: 'good',
      summerCompatibility: 'excellent',
    },

    priceAnalysis: {
      msrp: 209000,
      streetPrice: 209000,
      costPerKm: 348,
      valueRating: 8,
      priceTier: 'premium',
      alternatives: ['asics-gel-nimbus-28', 'brooks-glycerin-22', 'new-balance-880-v15'],
      valueAdvantages: ['v14 대비 69g 경량화 (285g → 216g)', '향상된 쿠셔닝과 에너지 반환', '2E/4E 발볼 옵션'],
    },

    targetUsers: {
      recommended: ['편안함을 최우선으로 하는 러너', '장거리 러너', '무릎 보호가 필요한 러너', '1080 시리즈 팬', '가벼운 쿠션화를 원하는 러너'],
      notRecommended: ['안정성이 필요한 러너', '최대 반발력을 원하는 러너'],
    },

    features: [
      '질소 주입 인피니온 슈퍼크리티컬 폼 - 향상된 쿠셔닝, 에너지 반환, 통기성',
      'v14 대비 69g 경량화 (285g → 216g)',
      '2E(약간 넓음), 4E(넓음) 발볼 옵션으로 한국인 발에 적합',
      'Breathable Mesh 갑피 + 리플렉티브 디테일',
      '힐 안정성 보강된 아웃솔 설계',
    ],

    reviews: [
      {
        userType: '에디터 분석',
        rating: 92,
        text: 'v14 대비 69g 감량(285g→216g)은 이 가격대 쿠션화 중 가장 극적인 세대 변화입니다. 인피니온 폼은 Fresh Foam X 대비 에너지 리턴과 통기성이 확실히 개선되어 쿠셔닝(9/10)은 Nimbus 28과 동급이면서 무게는 30g 가볍습니다. 20만 9천원으로 v14보다 2만원 올랐지만, 경량화 덕에 5:00-6:30/km 템포런까지 소화 가능한 범용성이 생겼습니다. 2E/4E 발볼 옵션은 한국 러너에게 큰 장점이며, v14의 좁은 토박스를 피했던 분도 편하게 신을 수 있습니다. 다만 안정성(6/10)은 평범한 편이라 과내전 러너는 860 v14가 더 적합합니다.',
      },
      {
        userType: '중급 러너',
        rating: 95,
        text: 'v14에서 갈아탔는데 솔직히 별개의 신발입니다. 인피니온 폼이 Fresh Foam X랑 완전히 다른 느낌이에요. 가볍고 통통 튀는데 바닥이 얇다는 느낌은 전혀 없습니다. 여의도 한강공원에서 주 4회 10km씩 뛰는데, v14 때는 후반 7km부터 발바닥 피로가 왔었는데 v15는 10km 끝나도 여유가 있어요. 216g이라 템포런에도 충분히 쓸 수 있고, 동호회 정기런에서도 5:00/km 페이스에 무리 없습니다.',
      },
      {
        userType: '가성비 중시',
        rating: 90,
        text: '님버스 28이랑 고민하다가 v15 골랐습니다. 둘 다 쿠셔닝 좋은데 v15가 69g 더 가볍고, 2E/4E 옵션이 있어서요. 20만 9천원이 싸다고는 못 하겠지만 님버스가 23만원인 걸 생각하면 나쁘지 않습니다. 280mm 2E로 신고 있는데 발볼 여유롭고 힐 슬립 없습니다. 200km 정도 신었는데 폼 꺼짐도 아직 모르겠고, 이 페이스면 600km은 충분히 갈 것 같아요.',
      },
      {
        userType: '상급 러너',
        rating: 92,
        text: '풀마라톤 3시간 40분대 러너입니다. 레이스는 SC Elite, 일상 훈련은 v15로 고정했습니다. 주간 60~70km 소화하는데 장거리 LSD 날(25~30km)에도 발이 안 죽어요. 특히 양재천 같은 아스팔트 노면에서 충격 흡수가 확실합니다. v14 때는 무게 때문에 빠른 구간에서 답답했는데 v15는 4:40/km까지도 반응이 괜찮습니다.',
      },
    ],

    similarShoes: ['new-balance-1080-v14', 'new-balance-880-v15', 'brooks-glycerin-22', 'asics-gel-nimbus-28'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xAA0rggd' }],
  },
  {
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
    editorComment: '1080 v14는 RunRepeat 142 SA 충격흡수를 기록한 최상위 쿠션화입니다. 11.9 HA 초소프트 폼은 Hoka Bondi 9(14.9 HA)보다도 단단해 장거리에서 바닥감을 느끼지 않습니다. 285g은 v15(216g)보다 69g 무겁지만 안정성(7/10)이 더 높아 뒤꿈치 착지 러너에게 유리합니다. 19만 9천원으로 v15보다 1만원 저렴하며, 토박스가 narrow(68mm 미만)로 발볼 넓은 러너는 2E 필수입니다.',
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
      price: '219,000원',
      costPerKm: '약 400원/km',
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
      costPerKm: 400,
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
        text: '프리미엄 쿠션화를 찾는 중급 이상 러너에게 추천합니다. 11.9 HA 초소프트 미드솔로 착화감이 매우 편안하고, 142 SA 충격흡수로 장거리에서도 무릎 부담이 적습니다. 단, 토박스가 좁아 발볼 넓은 한국 러너는 반드시 2E 와이드를 선택하세요. 285g으로 가벼운 편은 아니지만, 550km+ 내구성과 리커버리 러닝에 최적화되어 있습니다. 20만원대 투자 가치가 있는 고급 데일리 트레이너입니다.',
      },
      {
        userType: '입문 러너',
        rating: 82,
        text: '러닝 시작한 지 3개월 됐습니다. 매장에서 직접 신어보고 275mm 2E 샀는데, D 사이즈는 새끼발가락이 눌리더라고요. 한국인 발볼이면 무조건 2E 추천합니다. 트레드밀에서 주로 뛰는데 쿠셔닝이 정말 푹신해서 발바닥 충격이 거의 없어요. 다만 285g이 처음엔 좀 무겁다고 느꼈는데, 한 달 정도 뛰니까 적응됐습니다.',
      },
      {
        userType: '중급 러너',
        rating: 90,
        text: '하프마라톤 2시간 5분 러너인데, LSD와 리커버리 날에 신고 있습니다. 잠실 올림픽공원 외곽 코스(6km) 돌 때 특히 좋아요. Fresh Foam X가 아스팔트 충격을 확실히 먹어주는 느낌입니다. 글리세린 22랑 번갈아 신는데, 1080이 더 부드럽고 글리세린이 약간 더 반발력이 있어요. 현재 450km 정도 신었는데 폼은 아직 살아있고, 아웃솔 힐 바깥쪽만 살짝 닳았습니다.',
      },
      {
        userType: '가성비 중시',
        rating: 88,
        text: 'v15 나오면서 v14가 할인 들어갔을 때 15만원대에 잡았습니다. 정가 기준으로도 v15보다 1만원 싸고, 쿠셔닝은 거의 동급이에요. v15가 69g 더 가볍긴 한데 솔직히 리커버리 페이스에서 무게 차이 체감은 크지 않습니다. 예산이 빠듯하면 v14 할인가로 사는 게 훨씬 현명한 선택이라고 봅니다.',
      },
    ],

    similarShoes: ['new-balance-1080-v15', 'new-balance-880-v15', 'brooks-glycerin-22', 'asics-gel-nimbus-28'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/GPlbVErM' }],
  },
  {
    id: 'new-balance-rebel-v5',
    slug: 'new-balance-rebel-v5',
    brand: 'New Balance',
    name: '레벨 V5',
    image: '/images/shoes/newbalance/rebelv5/side.webp',
    images: [
      '/images/shoes/newbalance/rebelv5/side.webp',
      '/images/shoes/newbalance/rebelv5/front.webp',
      '/images/shoes/newbalance/rebelv5/back.webp',
      '/images/shoes/newbalance/rebelv5/top.webp',
      '/images/shoes/newbalance/rebelv5/outsole.webp',
    ],
    category: '데일리',
    rating: 4,
    price: 189000,
    description: 'FuelCell 폼을 사용한 경량 데일리 트레이너로, PEBA+EVA 블렌드가 반발력과 쿠셔닝의 균형을 제공합니다. 빠른 페이스의 훈련에 적합합니다.',
    oneliner: '220g에 11.5 HA 소프트, v4 단점 완전 개선',
    editorComment: 'v4에서 지적됐던 짧은 혀, 힐 칼라 자극 문제를 완벽히 해결한 레벨 v5. 220g 경량에 11.5 HA 울트라소프트 FuelCell이 Saucony Kinvara 16(7.0 HA)보다 훨씬 부드러운 착화감을 제공합니다. 145 SA 힐 충격흡수는 전작 대비 크게 향상되었고, 75mm 넓은 토박스로 발볼 걱정이 없습니다. 18만 9천원으로 Novablast 5(21만원)보다 저렴하면서 입문자부터 서브4 러너까지 활용 가능한 만능 데일리화입니다.',
    tags: ['데일리', '경량', '반발력'],

    specs: {
      weight: 220,
      cushioning: 7,
      responsiveness: 8,
      stability: 6,
      drop: 6,
      durability: 500,
    },

    biomechanics: {
      stackHeight: {
        heel: 33,
        forefoot: 27,
      },
      drop: 6,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'FuelCell (PEBA + EVA)',
      optimalPace: '4:30-6:00 min/km',
    },

    detailedSpecs: {
      weight: '220g (남성 US 9 기준)',
      stackHeight: '힐 33.0mm / 포어풋 26.7mm (실측)',
      drop: '6.3mm (실측) / 6mm (브랜드 공식)',
      midsole: 'FuelCell (PEBA + EVA 블렌드)',
      plate: '없음',
      outsole: '고무 아웃솔',
      upper: '엔지니어드 메쉬',
      width: '표준 (D)',
      durability: '500km+',
      price: '199,000원',
      costPerKm: '약 398원/km',
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
      flatFootCompatibility: 'good',
      wideOptions: false,
      winterCompatibility: 'good',
      summerCompatibility: 'fair',
    },

    priceAnalysis: {
      msrp: 189000,
      streetPrice: 179000,
      costPerKm: 398,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['saucony-kinvara-16', 'hoka-mach-6', 'asics-novablast-5'],
      valueAdvantages: ['v4 대비 모든 단점 개선', '경량 + 소프트 폼의 조화'],
    },

    targetUsers: {
      recommended: ['중족부/전족부 착지 러너', '빠르고 가벼운 러닝을 원하는 러너', '데일리+템포 겸용 신발을 찾는 러너', 'v4의 힐 칼라 문제로 고생한 러너'],
      notRecommended: ['최대 반발력을 원하는 러너', '젖은 노면/비포장에서 달리는 러너', '맥시멀 쿠셔닝을 원하는 러너'],
    },

    features: [
      '힐 145 SA 충격흡수 - 전작 대비 크게 개선 (RunRepeat Lab Test)',
      '11.5 HA 울트라소프트 FuelCell 폼 - 구름 같은 착화감',
      '220g 경량 설계로 데일리+템포 겸용 가능',
      'v4의 짧은 혀/힐 칼라 자극 문제 완전 해결',
      '75mm 넓은 토박스로 발가락 여유 공간 확보',
    ],

    reviews: [
      {
        userType: '에디터 분석',
        rating: 91,
        text: '가성비 최강 데일리/템포 겸용 러닝화입니다. 17만원대에 220g 경량, 11.5 HA 울트라소프트 폼, 145 SA 충격흡수를 모두 갖췄습니다. "초보도 신을 수 있나요?" 물론입니다! 편안하면서도 반발력이 좋아 실력이 늘어도 계속 활용할 수 있습니다. 75mm 넓은 토박스로 발볼 넓은 러너도 편하고, v4의 힐 자극 문제도 해결되었습니다. 입문자부터 서브4 목표 러너까지 폭넓게 추천합니다.',
      },
      {
        userType: '입문 러너',
        rating: 85,
        text: '동호회에서 처음 러닝 시작하면서 가볍고 편한 거 추천받아서 레벨 v5 샀습니다. 이전에 v4 쓰던 분이 "v4는 힐 까짐 있었는데 v5는 완전 해결됐다"고 하더라고요. 확실히 힐 칼라 부분이 부드럽고 전혀 안 까집니다. 220g이라 가볍고, 양재천에서 5km 뛰는데 발이 가뿐한 느낌이에요. 아직 초보라 빠른 페이스는 안 내는데, 6:30/km에서도 쿠셔닝이 충분합니다.',
      },
      {
        userType: '상급 러너',
        rating: 88,
        text: '서브 3:45 러너입니다. 인터벌 훈련 날과 가벼운 템포런에 레벨 v5를 돌려 쓰고 있어요. 한강 여의도 구간에서 1km 반복 4:10~4:20 페이스로 돌리는데 반발력이 꽤 좋습니다. 킨바라 16이랑 비교하면 레벨이 좀 더 부드럽고 킨바라가 더 탄탄한 느낌인데, 개인적으로 FuelCell의 소프트한 터치가 취향에 맞습니다. 300km 넘게 신었는데 전족부 아웃솔 마모가 시작되어서 500km까진 갈 수 있을 것 같습니다.',
      },
      {
        userType: '가성비 중시',
        rating: 92,
        text: '18만 9천원에 이 스펙이면 진짜 미쳤습니다. 노바블라스트 5가 21만원, 마하 6이 21만 9천원인데 레벨 v5가 체감상 뒤지지 않아요. 무게도 220g으로 비슷하고 토박스 75mm로 발볼도 넉넉합니다. 주 3회 동호회 러닝에 쓰고 있는데 데일리 6:00/km부터 템포 4:40/km까지 다 커버합니다. 한 켤레로 여러 용도 쓰고 싶은 분한테 강추합니다.',
      },
    ],

    similarShoes: ['hoka-mach-6', 'saucony-kinvara-16', 'asics-novablast-5'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/5dA8aEyH' }],
  },
  {
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
    editorComment: '평발 한국 러너를 위한 최고 가성비 안정화입니다. 듀얼 레이어 Fresh Foam X(소프트 10.9 HA + 단단한 23.8 HA)가 과내전을 부드럽게 교정하며, EVA Film Plate가 발 중심을 유지합니다. Asics Kayano 32(26만원)보다 9만원 저렴하면서 안정성(9/10)은 동급이고, Narrow/Standard/Wide/X-Wide 4가지 발볼 옵션으로 정확한 핏을 찾을 수 있습니다. 60.8% 힐 에너지 리턴은 안정화 중 상위권이며, 600km 내구성으로 입문 안정화로 최적입니다.',
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
      costPerKm: '약 300원/km',
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
      costPerKm: 300,
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
        text: '평발이나 과내전으로 고민하는 러너에게 최적의 안정화입니다. 한국인에게 흔한 평발 특성을 고려하면 매우 유용한 선택입니다. 듀얼 레이어 Fresh Foam X(10.9/23.8 HA)와 EVA 플레이트가 과내전을 부드럽게 교정해줍니다. 17만원대로 카야노(26만원)보다 가성비 좋고, Narrow부터 X-Wide까지 4가지 발볼 옵션으로 한국 러너 맞춤 피팅이 가능합니다. 600km+ 내구성으로 입문자의 첫 안정화로 추천합니다.',
      },
      {
        userType: '평발 러너',
        rating: 92,
        text: '심한 평발에 과내전이라 정형외과에서 안정화 추천받았습니다. 카야노 32는 26만원이라 부담됐는데 860 v14가 17만 9천원이라 바로 결정했어요. 280mm X-Wide로 신고 있는데 메디얼 포스트가 발 안쪽을 잡아주면서도 불편하지 않습니다. 일산 호수공원에서 주 4회 6km씩 뛰는데, 이전에 중립화 신고 뛸 때 있던 발목 안쪽 통증이 완전히 사라졌어요. 평발 러너라면 무조건 안정화부터 시작하세요.',
      },
      {
        userType: '입문 러너',
        rating: 80,
        text: '러닝 시작 2개월 차입니다. 매장에서 걸음걸이 보더니 과내전이라면서 860을 추천해줬어요. 솔직히 처음엔 "그냥 쿠션 좋은 거 사면 안 되나" 싶었는데, 신고 뛰어보니 발이 안쪽으로 꺾이는 게 확실히 잡히는 느낌입니다. 295g이 좀 무겁긴 한데 6:30/km 페이스에서는 무게감이 오히려 안정적이에요. 정릉천 산책로에서 주 3회 뛰고 있습니다.',
      },
      {
        userType: '중급 러너',
        rating: 85,
        text: '월 150km 달리는 과내전 러너입니다. 아드레날린 GTS 25에서 갈아탔는데 860이 쿠셔닝이 더 부드럽고, 교정 강도는 비슷합니다. 듀얼 레이어 미드솔이 소프트+단단한 조합이라 충격 흡수와 지지력을 동시에 챙긴 느낌이에요. 넉넉한 2E 착용 중인데 10km 후반에도 발이 부종으로 끼는 느낌 없이 편합니다. 500km 되면 가이드 18이랑 번갈아 쓸 예정이에요.',
      },
    ],

    similarShoes: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'saucony-guide-18'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/FjC6qn39' }],
  },
  {
    id: 'new-balance-sc-trainer-v3',
    slug: 'new-balance-sc-trainer-v3',
    brand: 'New Balance',
    name: 'SC Trainer V3',
    image: '/images/shoes/newbalance/sctrainerv3/side.webp',
    images: [
      '/images/shoes/newbalance/sctrainerv3/side.webp',
      '/images/shoes/newbalance/sctrainerv3/front.webp',
      '/images/shoes/newbalance/sctrainerv3/back.webp',
      '/images/shoes/newbalance/sctrainerv3/top.webp',
      '/images/shoes/newbalance/sctrainerv3/outsole.webp',
    ],
    category: '쿠션화',
    rating: 5,
    price: 249000,
    description: 'FuelCell 폼과 카본 플레이트가 결합된 슈퍼 트레이너로, 레이싱화의 성능을 훈련에서도 경험할 수 있습니다. 템포런과 장거리 훈련에 최적화되어 있습니다.',
    oneliner: '8.8 HA 소프트+카본, 마라톤 훈련 최적',
    editorComment: 'SC Trainer v3는 8.8 HA 울트라소프트 FuelCell에 풀렝스 카본 플레이트를 탑재한 슈퍼트레이너입니다. 144 SA 충격흡수와 66.1% 에너지 리턴은 Saucony Endorphin Speed 5(100% PEBA)보다 약하지만, 117.7mm 넓은 전족부로 안정성이 훨씬 높습니다. 24만 9천원으로 슈퍼트레이너 중 중간 가격대이며, 와이드 옵션으로 발볼 넓은 러너도 레이싱화 느낌을 훈련에서 경험할 수 있습니다. 278g은 약간 무겁지만 500km 내구성으로 장거리 훈련에 적합합니다.',
    tags: ['슈퍼 트레이너', '카본 플레이트', '템포런'],

    specs: {
      weight: 278,
      cushioning: 8,
      responsiveness: 9,
      stability: 7,
      drop: 7,
      durability: 500,
    },

    biomechanics: {
      stackHeight: {
        heel: 37,
        forefoot: 30,
      },
      drop: 7,
      carbonPlate: true,
      plateType: 'curved',
      midsoleType: 'FuelCell (20% PEBA + 80% EVA)',
      optimalPace: '4:00-5:30 min/km',
    },

    detailedSpecs: {
      weight: '278g (남성 US 9 기준)',
      stackHeight: '힐 36.8mm / 포어풋 29.5mm (실측)',
      drop: '7.3mm (실측) / 6mm (브랜드 공식)',
      midsole: 'FuelCell (20% PEBA + 80% EVA) + 풀렝스 카본 플레이트',
      plate: '풀렝스 카본 플레이트 (Energy Arc)',
      outsole: '고무 아웃솔',
      upper: 'FANTOMFIT 메쉬',
      width: '표준 (D), 와이드 옵션',
      durability: '500km+',
      price: '249,000원',
      costPerKm: '약 500원/km',
      footType: '중립',
      landingPattern: '중족부/전족부 착지',
    },

    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'good',
      kneeIssues: 'excellent',
      shinSplints: 'good',
    },

    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'good',
      wideOptions: true,
      winterCompatibility: 'good',
      summerCompatibility: 'fair',
    },

    priceAnalysis: {
      msrp: 249000,
      streetPrice: 249000,
      costPerKm: 500,
      valueRating: 8,
      priceTier: 'premium',
      alternatives: ['saucony-endorphin-speed-5', 'asics-magic-speed-4', 'hoka-mach-x-3'],
      valueAdvantages: ['카본 플레이트 슈퍼트레이너 중 합리적 가격', '뛰어난 안정성', '마라톤 훈련 최적화'],
    },

    targetUsers: {
      recommended: ['마라톤 훈련 중인 러너', 'SC Elite v4 팬의 훈련용', '카본 플레이트 장거리 훈련화를 원하는 러너', '중족부 착지 러너'],
      notRecommended: ['가벼운 신발을 원하는 러너', '최대 반발력을 원하는 러너', '자갈길에서 뛰는 러너'],
    },

    features: [
      '힐 144 SA 충격흡수 + 66.1% 에너지 리턴 (RunRepeat Lab Test)',
      '8.8 HA 울트라소프트 FuelCell 폼 - 구름 같은 착화감',
      'Energy Arc 카본 플레이트 + 로커로 추진력 강화',
      '넓은 전족부 미드솔 117.7mm로 뛰어난 안정성',
      'FANTOMFIT 어퍼로 프리미엄 핏 제공',
    ],

    reviews: [
      {
        userType: '에디터 분석',
        rating: 85,
        text: '마라톤 훈련용 카본 플레이트 신발을 찾는 시리어스 러너에게 추천합니다. 24만원대로 슈퍼트레이너 중 가성비가 좋고, 8.8 HA 울트라소프트 폼과 카본 플레이트로 레이싱화 느낌을 훈련에서 미리 경험할 수 있습니다. 117.7mm 넓은 전족부로 안정적이고, 와이드 옵션도 있어 발볼 걱정 없습니다. 단, 100% PEBA 경쟁작(엔돌핀 스피드)보다 반발력이 약간 부족하고 278g으로 약간 무겁습니다. 서브4~서브3:30 목표 러너의 템포런/장거리 훈련에 최적입니다.',
      },
      {
        userType: '상급 러너',
        rating: 88,
        text: '서브 3:30 달성하고 지금 서브 3:20 목표로 훈련 중입니다. SC Elite v4로 레이스 뛰고, 훈련은 SC Trainer v3로 통일했어요. 매주 화요일 인터벌(1km x 5, 3:50/km)과 일요일 25km 장거리에 신는데, 카본 플레이트 탑재라 훈련에서 레이스 감각을 미리 잡을 수 있습니다. 엔돌핀 스피드 5랑 비교하면 반발력은 스피드가 한 끗 위인데, SC Trainer가 전족부가 넓어서 30km 넘는 훈련에서 발가락 불편함이 없어요.',
      },
      {
        userType: '중급 러너',
        rating: 82,
        text: '첫 풀마라톤(JTBC 마라톤) 준비용으로 구매했습니다. 주간 40~50km 훈련량인데 카본 플레이트가 처음이라 적응 기간이 좀 필요했어요. 처음 2주는 종아리에 피로가 왔는데, 3주차부터 괜찮아졌습니다. 상암 월드컵공원 외곽 코스에서 20km 롱런할 때 후반부 추진력이 확실히 느껴집니다. 278g이 슈퍼트레이너치고 무겁다는 리뷰가 있는데, 훈련화로는 적당하다고 생각합니다.',
      },
      {
        userType: '가성비 중시',
        rating: 85,
        text: '카본 플레이트 훈련화 중에서 가격이 괜찮아서 골랐습니다. 마하 X 3가 27만원대, 매직 스피드 4가 22만원대인데 SC Trainer v3는 24만 9천원이에요. 270mm 와이드로 착용 중인데 전족부 117.7mm가 진짜 넓어서 발가락이 자유롭습니다. 월 200km 훈련에 400km째 쓰고 있는데 아웃솔 아직 괜찮고, 폼도 처음보다 살짝 꺼졌지만 충분히 반발력이 남아있어요.',
      },
    ],

    similarShoes: ['saucony-endorphin-speed-5', 'asics-magic-speed-4', 'hoka-mach-x-3'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/GiahurkU' }],
  },
  {
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
    editorComment: 'v4 대비 30g 이상 경량화(198g)로 드디어 경쟁 슈퍼슈즈 수준에 도달했습니다. 100% PEBA FuelCell은 15.2 HA로 매우 부드러우며 74.8% 에너지 리턴은 상위권입니다. 특히 74.5mm 토박스는 Vaporfly 3(67.8mm), Alphafly 3(68.4mm)보다 훨씬 넓어 발볼 넓은 한국 러너가 레이스 중 발가락 눌림 없이 뛸 수 있는 유일한 슈퍼슈즈입니다. 29만원(할인가)으로 Vaporfly(31만원)보다 저렴하고, 0.61 뛰어난 그립력으로 젖은 노면에서도 안정적입니다.',
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
      price: '299,000원',
      costPerKm: '약 1,000원/km',
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
      costPerKm: 997,
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
        text: '서브3 목표 마라토너를 위한 뉴발란스 최고의 레이싱화입니다. v4 대비 30g 이상 경량화(198g)되었고, 74.8% 에너지 리턴으로 기록 단축에 도움됩니다. 특히 74.5mm 넓은 토박스는 슈퍼슈즈 중 가장 넓어, 발볼 넓은 한국 러너도 레이스 중 발가락 눌림 없이 뛸 수 있습니다. 29만원으로 베이퍼플라이(31만원)보다 저렴하고 내구성도 좋습니다. 단, 최상위 슈퍼슈즈(베이퍼플라이, 알파플라이)와 비교하면 반발력이 약간 부족하므로 서브3 이하 엘리트에게는 다른 선택이 나을 수 있습니다.',
      },
      {
        userType: '상급 러너',
        rating: 95,
        text: '서브 3:10 러너인데 v4에서 v5로 바꾸고 춘천 마라톤에서 3:05 찍었습니다. 198g이 체감될 정도로 v4(230g)보다 가볍고, 후반 35km부터의 페이스 유지가 확실히 나아졌어요. 74.5mm 토박스 덕분에 35km 넘어서도 발가락이 붓고 눌리는 문제가 없습니다. 베이퍼플라이 3은 67.8mm이라 레이스 후반에 새끼발가락이 아팠는데 SC Elite는 그런 게 없어요. 발볼 넓은 한국 러너에게 유일한 슈퍼슈즈라고 생각합니다.',
      },
      {
        userType: '중급 러너',
        rating: 85,
        text: '서브 4 달성하고 서브 3:40 도전 중입니다. 첫 슈퍼슈즈로 SC Elite v5 골랐는데, 솔직히 처음 신는 순간 "이게 카본 플레이트구나" 싶었어요. 전족부로 체중 이동할 때 톡톡 밀어주는 느낌이 일반 러닝화랑 차원이 다릅니다. 서울 마라톤 하프에 신고 나갈 예정인데 20km 훈련에서 1:38 페이스 나왔습니다. 다만 300km 내구성이라 훈련에 마구 신기엔 아까워서 레이스와 포인트 훈련에만 쓰고 있어요.',
      },
      {
        userType: '가성비 중시',
        rating: 80,
        text: '슈퍼슈즈가 30만원이 넘으니 가격이 부담되긴 합니다. 그래도 쿠팡에서 할인 잡으면 29만원 초반대로 살 수 있고, 베이퍼플라이 3(31만원)이나 알파플라이 3(35만원)보다는 싸요. km당 1,000원이라 가성비가 좋다고 할 수는 없지만, 대회용으로만 신으면 풀마라톤 3~4회 뛸 수 있으니 레이스당 비용으로 생각하면 납득이 됩니다. 기록 단축의 가치를 돈으로 환산하면 충분히 합리적인 투자입니다.',
      },
    ],

    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'adidas-adios-pro-4'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBLwgI' }],
  },
  {
    id: 'new-balance-balos-v1',
    slug: 'new-balance-balos-v1',
    brand: 'New Balance',
    name: '발로스 V1',
    image: '',
    images: [],
    category: '쿠션화',
    rating: 4,
    status: 'new',
    price: 259000,
    description: '뉴발란스의 프리미엄 PEBA 데일리 쿠션화. 20% PEBA + 80% EVA 블렌드 폼으로 경량이면서 바운시한 라이드를 제공하며, 로커 지오메트리로 빠른 전환을 돕습니다.',
    oneliner: '261g에 PEBA 블렌드 폼, 바운시한 프리미엄 데일리',
    editorComment: '발로스 V1은 뉴발란스에서 레이싱화 외 유일하게 PEBA 폼(20%)을 사용한 데일리 트레이너입니다. 261g으로 1080 v15(280g)보다 가볍고, 38.5mm 힐 스택에서 나오는 쿠셔닝이 충분합니다. 힐 베벨+전족부 로커+토 스프링이 만드는 롤링감이 핵심이며, 이지런부터 템포런까지 자연스럽게 커버합니다. 25만 9천원으로 프리미엄 가격대이지만, PEBA 폼의 바운시한 느낌은 Fresh Foam X와 확실히 차별됩니다. 다만 빠른 페이스에서는 폼이 너무 부드러워 안정감이 부족합니다.',
    tags: ['쿠션화', 'PEBA', '프리미엄', '바운시'],

    specs: {
      weight: 261,
      cushioning: 9,
      responsiveness: 7,
      stability: 5,
      drop: 6,
      durability: 500,
    },

    biomechanics: {
      stackHeight: { heel: 38.5, forefoot: 32.5 },
      drop: 6,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'PEBA + EVA Blend (20/80)',
      optimalPace: '4:30-6:30 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'good',
      kneeIssues: 'good',
      shinSplints: 'good',
    },

    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'good',
      wideOptions: true,
      winterCompatibility: 'good',
      summerCompatibility: 'good',
    },

    targetUsers: {
      recommended: ['데일리 퍼포먼스 러너', '바운시한 쿠셔닝 선호', 'PEBA 폼 경험', '이지런~템포런 겸용'],
      notRecommended: ['빠른 레이싱', '안정화 필요 러너', '미니멀 선호'],
    },

    features: ['PEBA 20% + EVA 80% 블렌드 폼', '힐 베벨 + 전족부 로커 + 토 스프링', '261g 경량', '6mm 드롭', '와이드 옵션 제공'],

    priceAnalysis: {
      msrp: 259000,
      costPerKm: 518,
      valueRating: 6,
      priceTier: 'premium',
      alternatives: ['new-balance-1080-v15', 'asics-novablast-5', 'hoka-mach-6'],
    },

    detailedSpecs: {
      weight: '261g (US M9)',
      stackHeight: '힐 38.5mm / 포어풋 32.5mm',
      drop: '6mm',
      midsole: 'PEBA 20% + EVA 80% 블렌드 (레이싱 외 유일한 PEBA 적용)',
      plate: '없음',
      outsole: '러버 아웃솔',
      upper: '엔지니어드 메쉬',
      width: '표준 (D), 와이드 (2E) 옵션',
      durability: '500km',
      price: '₩259,000',
      costPerKm: '₩518/km',
      footType: '중립',
      landingPattern: '중족부/전족부 착지',
    },

    reviews: [
      {
        userType: '에디터 분석',
        rating: 82,
        text: 'PEBA 폼을 데일리 트레이너에 담은 뉴발란스의 프리미엄 신발입니다. 261g으로 가볍고 바운시한 느낌이 Fresh Foam X와 확실히 다릅니다. 힐 베벨과 로커가 만드는 롤링 전환이 매끄럽고, 이지런부터 템포런까지 폭넓게 쓸 수 있습니다. 다만 25만 9천원이라는 가격이 부담이고, 빠른 페이스(4:00/km 이하)에서는 폼이 너무 말랑해 안정감이 떨어집니다. 1080 v15(20만 9천원)보다 5만원 비싸므로, PEBA의 바운시함에 가치를 두는 러너에게 추천합니다.',
      },
      { userType: '중급 러너', rating: 4, text: '1080 v14에서 갈아탔는데 바운스가 확실히 다릅니다. 올림픽공원 외곽 12km 코스에서 주 4회 뛰는데, PEBA 폼이 착지마다 톡톡 튀어오르는 느낌이 좋아요. 261g이라 1080보다 20g 가볍고, 로커 전환이 자연스럽습니다. 다만 4:30/km 템포에서 폼이 물렁해지는 느낌이 있어 빠른 훈련에는 아쉽습니다.' },
      { userType: '입문 러너', rating: 4, text: '275mm 와이드로 신고 있어요. 발볼이 넓은 편인데 2E 와이드가 있어서 편합니다. 부드럽고 탄력 있는 느낌이 매일 신고 싶게 만들어요. 한 가지 아쉬운 건 25만원이 넘는 가격. 입문자에게는 부담되는 가격대입니다.' },
    ],

    similarShoes: ['new-balance-1080-v15', 'asics-novablast-5', 'hoka-mach-6', 'saucony-endorphin-azura'],
    purchaseLinks: [],
  },
];
