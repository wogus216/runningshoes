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
        userType: 'RunRepeat 전문 리뷰어',
        rating: 85,
        text: '입문~중급 러너에게 최적의 가성비 맥시멀 쿠션화입니다. 15만원대에 1080급 39.7mm 힐 스택을 제공하며, 무릎 부담이 걱정되는 초보 러너에게 추천합니다. 다만 303g으로 무거운 편이라 5분/km 이하 빠른 페이스에는 부적합합니다. 2E/4E 와이드 옵션이 있어 발볼 넓은 한국 러너도 편하게 착용할 수 있습니다. "무릎 괜찮나요?" 질문에 자신있게 추천할 수 있는 신발입니다.',
      },
    ],

    similarShoes: ['new-balance-1080-v15', 'new-balance-1080-v14', 'brooks-glycerin-22', 'asics-gel-nimbus-28'],
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
        userType: 'NB Korea 고객 리뷰',
        rating: 98,
        text: '전 모델에 비해서 날렵해지고 쿠션이 상당히 좋아졌습니다. 처음 신었을때는 너무 이질적이다고 생각했는데 가볍게 10km 정도 뛰니까 어느정도 적응되고 만족스러운 정도로 꺼졌습니다. 발볼 넓으신분들은 4E 그렇지 않으신분들은 2E 가주세요. 95%가 "아주 좋아요"라고 평가 (58개 리뷰 기준, 4.9점).',
      },
    ],

    similarShoes: ['new-balance-1080-v14', 'new-balance-880-v15', 'brooks-glycerin-22', 'asics-gel-nimbus-28'],
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
        userType: 'RunRepeat 전문 리뷰어',
        rating: 86,
        text: '프리미엄 쿠션화를 찾는 중급 이상 러너에게 추천합니다. 11.9 HA 초소프트 미드솔로 착화감이 매우 편안하고, 142 SA 충격흡수로 장거리에서도 무릎 부담이 적습니다. 단, 토박스가 좁아 발볼 넓은 한국 러너는 반드시 2E 와이드를 선택하세요. 285g으로 가벼운 편은 아니지만, 550km+ 내구성과 리커버리 러닝에 최적화되어 있습니다. 20만원대 투자 가치가 있는 고급 데일리 트레이너입니다.',
      },
    ],

    similarShoes: ['new-balance-1080-v15', 'new-balance-880-v15', 'brooks-glycerin-22', 'asics-gel-nimbus-28'],
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
        userType: 'RunRepeat 전문 리뷰어',
        rating: 91,
        text: '가성비 최강 데일리/템포 겸용 러닝화입니다. 17만원대에 220g 경량, 11.5 HA 울트라소프트 폼, 145 SA 충격흡수를 모두 갖췄습니다. "초보도 신을 수 있나요?" 물론입니다! 편안하면서도 반발력이 좋아 실력이 늘어도 계속 활용할 수 있습니다. 75mm 넓은 토박스로 발볼 넓은 러너도 편하고, v4의 힐 자극 문제도 해결되었습니다. 입문자부터 서브4 목표 러너까지 폭넓게 추천합니다.',
      },
    ],

    similarShoes: ['hoka-mach-6', 'saucony-kinvara-16', 'asics-novablast-5'],
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
        userType: 'RunRepeat 전문 리뷰어',
        rating: 85,
        text: '평발이나 과내전으로 고민하는 러너에게 최적의 안정화입니다. 한국인에게 흔한 평발 특성을 고려하면 매우 유용한 선택입니다. 듀얼 레이어 Fresh Foam X(10.9/23.8 HA)와 EVA 플레이트가 과내전을 부드럽게 교정해줍니다. 17만원대로 카야노(26만원)보다 가성비 좋고, Narrow부터 X-Wide까지 4가지 발볼 옵션으로 한국 러너 맞춤 피팅이 가능합니다. 600km+ 내구성으로 입문자의 첫 안정화로 추천합니다.',
      },
    ],

    similarShoes: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'saucony-guide-18'],
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
        userType: 'RunRepeat 전문 리뷰어',
        rating: 85,
        text: '마라톤 훈련용 카본 플레이트 신발을 찾는 시리어스 러너에게 추천합니다. 24만원대로 슈퍼트레이너 중 가성비가 좋고, 8.8 HA 울트라소프트 폼과 카본 플레이트로 레이싱화 느낌을 훈련에서 미리 경험할 수 있습니다. 117.7mm 넓은 전족부로 안정적이고, 와이드 옵션도 있어 발볼 걱정 없습니다. 단, 100% PEBA 경쟁작(엔돌핀 스피드)보다 반발력이 약간 부족하고 278g으로 약간 무겁습니다. 서브4~서브3:30 목표 러너의 템포런/장거리 훈련에 최적입니다.',
      },
    ],

    similarShoes: ['saucony-endorphin-speed-5', 'asics-magic-speed-4', 'hoka-mach-x-3'],
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
        userType: 'RunRepeat 전문 리뷰어',
        rating: 92,
        text: '서브3 목표 마라토너를 위한 뉴발란스 최고의 레이싱화입니다. v4 대비 30g 이상 경량화(198g)되었고, 74.8% 에너지 리턴으로 기록 단축에 도움됩니다. 특히 74.5mm 넓은 토박스는 슈퍼슈즈 중 가장 넓어, 발볼 넓은 한국 러너도 레이스 중 발가락 눌림 없이 뛸 수 있습니다. 29만원으로 베이퍼플라이(31만원)보다 저렴하고 내구성도 좋습니다. 단, 최상위 슈퍼슈즈(베이퍼플라이, 알파플라이)와 비교하면 반발력이 약간 부족하므로 서브3 이하 엘리트에게는 다른 선택이 나을 수 있습니다.',
      },
    ],

    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'adidas-adios-pro-4'],
  },
];
