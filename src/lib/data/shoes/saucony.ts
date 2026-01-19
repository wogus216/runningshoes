import type { Shoe } from '@/types/shoe';

export const sauconyShoes: Shoe[] = [
  {
    id: 'saucony-ride-18',
    slug: 'saucony-ride-18',
    brand: 'Saucony',
    name: '라이드 18',
    image: '/images/shoes/saucony/ride18.webp',
    images: [
      '/images/shoes/saucony/ride18/side.webp',
      '/images/shoes/saucony/ride18/top.webp',
      '/images/shoes/saucony/ride18/outsole.webp',
    ],
    category: '입문화',
    rating: 4,
    price: 159000,
    description: 'Saucony의 대표 입문화로, PWRRUN+ 미드솔로 편안한 쿠셔닝과 부드러운 착지감을 제공합니다. 데일리 트레이닝에 적합한 올라운더 러닝화입니다.',
    tags: ['입문화', '데일리', '쿠셔닝'],

    specs: {
      weight: 255,
      cushioning: 7,
      responsiveness: 6,
      stability: 6,
      drop: 8,
      durability: 600,
    },

    biomechanics: {
      stackHeight: {
        heel: 35,
        forefoot: 26.6,
      },
      drop: 8.4,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'PWRRUN+',
      optimalPace: '5:00-7:00 min/km',
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
      recommended: ['입문 러너', '데일리 트레이닝', '중립 발', '편안한 쿠셔닝 선호'],
      notRecommended: ['레이싱', '빠른 템포 러닝', '과내전 러너'],
    },

    features: ['PWRRUN+ 미드솔', 'FORMFIT 기술', '8.4mm 드롭', '편안한 착화감'],

    priceAnalysis: {
      msrp: 159000,
      streetPrice: 139000,
      costPerKm: 265,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['asics-gel-nimbus-28', 'hoka-clifton-10', 'new-balance-1080-v14'],
    },

    detailedSpecs: {
      weight: '255g (남성 US 9 기준, RunRepeat 실측)',
      stackHeight: '힐 35.0mm / 포어풋 26.6mm (실측)',
      drop: '8.4mm (실측) / 8mm (브랜드 공식)',
      midsole: 'PWRRUN+ (질소 주입 TPU)',
      plate: '없음',
      outsole: 'XT-900 러버',
      upper: '메쉬',
      width: '표준 (D), 와이드 (2E) 옵션',
      durability: '600km+',
      price: '159,000원',
      costPerKm: '약 265원/km',
      footType: '중립',
      landingPattern: '후족부/중족부 착지',
    },
    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 89,
        text: '15만원대 최고의 가성비 입문 러닝화입니다. "초보도 신을 수 있나요?" 라이드 시리즈는 입문자를 위해 만들어진 신발입니다. v17 대비 33g 감량(255g)되었고 141 SA 충격흡수로 무릎 보호가 좋습니다. 통기성 5/5 최상위급으로 여름에도 쾌적하고, 와이드 옵션이 있어 발볼 넓은 분도 편합니다. 26.1 HA로 푹신한 느낌보다는 단단하고 안정적인 라이드를 제공해, 첫 러닝화로 안전한 선택입니다. 600km+ 내구성으로 오래 신을 수 있습니다.',
      },
    ],

    similarShoes: ['nike-pegasus-41', 'asics-gel-nimbus-28', 'hoka-clifton-10', 'new-balance-880-v15'],
  },
  {
    id: 'saucony-guide-18',
    slug: 'saucony-guide-18',
    brand: 'Saucony',
    name: '가이드 18',
    image: '/images/shoes/saucony/guide18.webp',
    images: [
      '/images/shoes/saucony/guide18/side.webp',
      '/images/shoes/saucony/guide18/top.webp',
      '/images/shoes/saucony/guide18/outsole.webp',
    ],
    category: '안정화',
    rating: 4,
    price: 159000,
    description: 'Saucony의 대표 안정화로, PWRRUN 미드솔과 Guidance Frame으로 과내전 러너에게 적합한 안정성을 제공합니다.',
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
      costPerKm: '약 265원/km',
      footType: '안정화 (과내전 지원)',
      landingPattern: '후족부/중족부 착지',
    },
    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 80,
        text: '평발이나 과내전으로 고민하는 입문 러너를 위한 가성비 안정화입니다. 15만원대로 카야노(26만원)의 절반 가격이면서, 121.9mm 넓은 플랫폼으로 착지 안정성이 뛰어납니다. 통기성 5/5 최상위급으로 여름철 러닝에도 쾌적하고, 한국인에게 흔한 평발 특성에 적합합니다. 다만 노출된 폼이 많아 내구성이 약하고, 61.3% 에너지 리턴으로 반발력은 평균 수준입니다. "무릎 괜찮나요?" 질문하는 과내전 입문 러너에게 부담 없이 추천할 수 있습니다.',
      },
    ],

    similarShoes: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'new-balance-860-v14', 'hoka-gaviota-6'],
  },
  {
    id: 'saucony-triumph-23',
    slug: 'saucony-triumph-23',
    brand: 'Saucony',
    name: '트라이엄프 23',
    image: '/images/shoes/saucony/triumph23.webp',
    images: [
      '/images/shoes/saucony/triumph23/side.webp',
      '/images/shoes/saucony/triumph23/top.webp',
      '/images/shoes/saucony/triumph23/outsole.webp',
    ],
    category: '쿠션화',
    rating: 4,
    price: 189000,
    description: 'Saucony의 프리미엄 쿠션화로, PWRRUN PB (Pebax) 미드솔로 맥시멀 쿠셔닝과 부드러운 반응성을 제공합니다. 장거리 편안함을 추구하는 러너에게 적합합니다.',
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
      msrp: 189000,
      streetPrice: 169000,
      costPerKm: 315,
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
      price: '189,000원',
      costPerKm: '약 315원/km',
      footType: '중립',
      landingPattern: '후족부/중족부 착지',
    },
    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 90,
        text: '장거리 러닝에서 무릎과 발목 보호가 필요한 러너에게 최적의 프리미엄 쿠션화입니다. 42.3mm 힐 스택과 149 SA 충격흡수로 "무릎 괜찮나요?" 질문에 자신있게 추천할 수 있습니다. 18만원대로 본디9(26만원)보다 가성비 좋으면서 PEBA 폼의 67.6% 에너지 리턴으로 반발력도 좋습니다. 124mm 넓은 플랫폼으로 안정적이고, 와이드 옵션이 있어 발볼 넓은 한국 러너도 편합니다. 272g으로 맥시멀 쿠션화 중 가벼운 편이라 느린 조깅부터 5분대 페이스까지 활용도가 높습니다.',
      },
    ],

    similarShoes: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v14', 'brooks-glycerin-22'],
  },
  {
    id: 'saucony-hurricane-25',
    slug: 'saucony-hurricane-25',
    brand: 'Saucony',
    name: '허리케인 25',
    image: '/images/shoes/saucony/hurricane25.webp',
    images: [
      '/images/shoes/saucony/hurricane25/side.webp',
      '/images/shoes/saucony/hurricane25/top.webp',
      '/images/shoes/saucony/hurricane25/outsole.webp',
    ],
    category: '안정화',
    rating: 4,
    price: 189000,
    description: 'Saucony의 프리미엄 안정화로, PWRRUN PB + PWRRUN 크래들 조합으로 맥시멀 쿠셔닝과 강력한 안정성을 동시에 제공합니다.',
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
      msrp: 189000,
      streetPrice: 169000,
      costPerKm: 315,
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
      price: '189,000원',
      costPerKm: '약 315원/km',
      footType: '안정화 (과내전 지원)',
      landingPattern: '후족부/중족부 착지',
    },
    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 77,
        text: '심한 과내전이나 평발로 기존 안정화가 부족했던 러너를 위한 프리미엄 안정화입니다. 124.4mm 초광폭 플랫폼과 PWRRUN Cradle이 강력한 안정성을 제공하면서도, 16.6 HA 소프트 폼으로 착화감이 편안합니다. 151 SA 충격흡수로 관절 보호도 최상위급입니다. 18만원대로 카야노 대비 가성비 좋고, 와이드 옵션도 있어 발볼 넓은 러너에게 좋습니다. 다만 통기성 2/5로 여름에는 더울 수 있고, 286g으로 무거운 편이라 5분/km 이상 느린 페이스에 적합합니다.',
      },
    ],

    similarShoes: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'hoka-gaviota-6', 'new-balance-860-v14'],
  },
  {
    id: 'saucony-kinvara-16',
    slug: 'saucony-kinvara-16',
    brand: 'Saucony',
    name: '킨바라 16',
    image: '/images/shoes/saucony/kinvara16.webp',
    images: [
      '/images/shoes/saucony/kinvara16/side.webp',
      '/images/shoes/saucony/kinvara16/top.webp',
      '/images/shoes/saucony/kinvara16/outsole.webp',
    ],
    category: '데일리',
    rating: 4,
    price: 159000,
    description: 'Saucony의 경량 데일리화로, 최소한의 미드솔과 낮은 드롭으로 자연스러운 주법을 선호하는 러너에게 적합합니다. 빠른 템포 트레이닝에 적합합니다.',
    tags: ['데일리', '경량', '로우드롭', '내추럴'],

    specs: {
      weight: 198,
      cushioning: 5,
      responsiveness: 8,
      stability: 5,
      drop: 4,
      durability: 500,
    },

    biomechanics: {
      stackHeight: {
        heel: 28,
        forefoot: 24,
      },
      drop: 4,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'PWRRUN',
      optimalPace: '4:00-6:00 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'caution',
      achillesTendinopathy: 'good',
      kneeIssues: 'good',
      shinSplints: 'caution',
    },

    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'fair',
      wideOptions: false,
      winterCompatibility: 'fair',
      summerCompatibility: 'good',
    },

    targetUsers: {
      recommended: ['경량화 선호', '로우드롭 선호', '빠른 템포 트레이닝', '내추럴 러닝'],
      notRecommended: ['입문 러너', '과내전 러너', '맥시멀 쿠셔닝 필요'],
    },

    features: ['PWRRUN 미드솔', '경량 198g', '4mm 로우드롭', '내추럴 러닝'],

    priceAnalysis: {
      msrp: 159000,
      streetPrice: 139000,
      costPerKm: 318,
      valueRating: 7,
      priceTier: 'mid',
      alternatives: ['nike-pegasus-41', 'new-balance-rebel-v5', 'hoka-mach-6'],
    },

    detailedSpecs: {
      weight: '198g (남성 US 9 기준, Kinvara 15 기준 추정)',
      stackHeight: '힐 28mm / 포어풋 24mm (추정)',
      drop: '4mm (브랜드 공식)',
      midsole: 'PWRRUN',
      plate: '없음',
      outsole: 'XT-900 러버',
      upper: '경량 메쉬',
      width: '표준 (D)',
      durability: '500km+',
      price: '159,000원',
      costPerKm: '약 318원/km',
      footType: '중립',
      landingPattern: '중족부/전족부 착지',
    },

    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 84,
        text: '지면 감각과 경량을 중시하는 중급 이상 러너에게 적합한 미니멀 러닝화입니다. 194g 초경량과 4.4mm 로우드롭으로 자연스러운 주법을 추구하는 러너에게 좋습니다. 15만원대 가성비와 통기성 5/5로 여름 러닝에 최적이지만, 쿠셔닝(117 SA)이 맥시멀 쿠션화의 절반 수준이라 무릎이 약하거나 입문자에게는 비추천입니다. 토박스 내구성이 약해(1/5) 발가락 벽면이 빨리 닳을 수 있으니 500km 내구성을 감안하세요. "초보도 신을 수 있나요?" 기초 근력이 있는 러너에게만 추천합니다.',
      },
    ],

    similarShoes: ['hoka-mach-6', 'nike-pegasus-41', 'asics-novablast-5', 'new-balance-rebel-v5'],
  },
  {
    id: 'saucony-endorphin-pro-4',
    slug: 'saucony-endorphin-pro-4',
    brand: 'Saucony',
    name: '엔돌핀 프로 4',
    image: '/images/shoes/saucony/endorphin_Pro4.webp',
    images: [
      '/images/shoes/saucony/endorphinpro4/side.webp',
      '/images/shoes/saucony/endorphinpro4/top.webp',
      '/images/shoes/saucony/endorphinpro4/outsole.webp',
    ],
    category: '레이싱',
    rating: 5,
    price: 269000,
    description: 'Saucony의 카본 레이싱화로, PWRRUN PB+HG 미드솔과 풀렝스 카본 플레이트로 강력한 추진력을 제공합니다. 하프~풀 마라톤에 적합합니다.',
    tags: ['레이싱', '카본', '마라톤', '슈퍼화'],

    specs: {
      weight: 220,
      cushioning: 7,
      responsiveness: 9,
      stability: 5,
      drop: 10,
      durability: 300,
    },

    biomechanics: {
      stackHeight: {
        heel: 38.1,
        forefoot: 28.6,
      },
      drop: 9.5,
      carbonPlate: true,
      plateType: 'curved',
      midsoleType: 'PWRRUN PB+HG',
      optimalPace: '3:30-5:00 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'good',
      kneeIssues: 'caution',
      shinSplints: 'good',
    },

    koreanFootFit: {
      toBoxWidth: 'narrow',
      flatFootCompatibility: 'fair',
      wideOptions: false,
      winterCompatibility: 'fair',
      summerCompatibility: 'good',
    },

    targetUsers: {
      recommended: ['하프마라톤', '풀마라톤', '서브-4 목표', '상급 러너'],
      notRecommended: ['입문 러너', '데일리 트레이닝', '과내전 러너'],
    },

    features: ['PWRRUN PB+HG 미드솔', '풀렝스 카본 플레이트', '9.5mm 드롭', '레이싱 전용'],

    priceAnalysis: {
      msrp: 269000,
      streetPrice: 239000,
      costPerKm: 897,
      valueRating: 6,
      priceTier: 'premium',
      alternatives: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'adidas-adios-pro-4'],
    },

    detailedSpecs: {
      weight: '220g (남성 US 9 기준, RunRepeat 실측)',
      stackHeight: '힐 38.1mm / 포어풋 28.6mm (실측)',
      drop: '9.5mm (실측) / 8mm (브랜드 공식)',
      midsole: 'PWRRUN PB+HG (PEBA + 경량 폼)',
      plate: '풀렝스 카본 플레이트',
      outsole: '경량 러버',
      upper: '경량 메쉬',
      width: '표준 (D)',
      durability: '300km+',
      price: '269,000원',
      costPerKm: '약 897원/km',
      footType: '중립',
      landingPattern: '중족부/전족부 착지',
    },

    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 87,
        text: '서브4~서브3:30 목표 러너를 위한 가성비 슈퍼슈즈입니다. 26만원대로 베이퍼플라이(31만원)보다 저렴하면서, 71.7% 에너지 리턴과 139 SA 충격흡수로 하프~풀마라톤에 최적화되어 있습니다. 특히 118.9mm 넓은 전족부 플랫폼으로 슈퍼슈즈 중 안정성이 높아, 슈퍼슈즈 처음 신는 러너에게 추천합니다. 220g으로 v3보다 무거워졌지만 내구성이 좋아져 훈련 겸용도 가능합니다. 토박스가 좁아 발볼 넓은 러너는 착화감 확인이 필요합니다.',
      },
    ],

    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3', 'puma-deviate-nitro-elite-3'],
  },
  {
    id: 'saucony-endorphin-elite-2',
    slug: 'saucony-endorphin-elite-2',
    brand: 'Saucony',
    name: '엔돌핀 엘리트 2',
    image: '/images/shoes/saucony/endorphin_elite2.webp',
    images: [
      '/images/shoes/saucony/endorphinelite2/side.webp',
      '/images/shoes/saucony/endorphinelite2/top.webp',
      '/images/shoes/saucony/endorphinelite2/outsole.webp',
    ],
    category: '레이싱',
    rating: 5,
    price: 339000,
    description: 'Saucony의 최상위 레이싱화로, IncrediRUN 미드솔로 역대 최고 80.6% 에너지 리턴을 기록했습니다. 풀렝스 카본 플레이트와 함께 엘리트 퍼포먼스를 제공합니다.',
    tags: ['레이싱', '카본', '엘리트', '슈퍼화', '에너지 리턴'],

    specs: {
      weight: 197,
      cushioning: 7,
      responsiveness: 10,
      stability: 4,
      drop: 8,
      durability: 200,
    },

    biomechanics: {
      stackHeight: {
        heel: 39.9,
        forefoot: 32.4,
      },
      drop: 7.5,
      carbonPlate: true,
      plateType: 'curved',
      midsoleType: 'IncrediRUN',
      optimalPace: '3:00-4:30 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'good',
      kneeIssues: 'caution',
      shinSplints: 'good',
    },

    koreanFootFit: {
      toBoxWidth: 'narrow',
      flatFootCompatibility: 'fair',
      wideOptions: false,
      winterCompatibility: 'fair',
      summerCompatibility: 'good',
    },

    targetUsers: {
      recommended: ['엘리트 러너', '풀마라톤', '서브-3 목표', 'PR 도전'],
      notRecommended: ['입문 러너', '데일리 트레이닝', '과내전 러너'],
    },

    features: ['IncrediRUN 미드솔', '80.6% 에너지 리턴 (역대 최고)', '풀렝스 카본 플레이트', '197g 경량'],

    priceAnalysis: {
      msrp: 339000,
      streetPrice: 299000,
      costPerKm: 1695,
      valueRating: 5,
      priceTier: 'super-premium',
      alternatives: ['nike-alphafly-3', 'asics-metaspeed-edge-plus', 'adidas-adios-pro-4'],
    },

    detailedSpecs: {
      weight: '197g (남성 US 9 기준, RunRepeat 실측)',
      stackHeight: '힐 39.9mm / 포어풋 32.4mm (실측)',
      drop: '7.5mm (실측) / 8mm (브랜드 공식)',
      midsole: 'IncrediRUN (80.6% 에너지 리턴)',
      plate: '풀렝스 카본 플레이트',
      outsole: '경량 러버',
      upper: '초경량 메쉬',
      width: '표준 (D)',
      durability: '200km+',
      price: '339,000원',
      costPerKm: '약 1,695원/km',
      footType: '중립',
      landingPattern: '중족부/전족부 착지',
    },

    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 86,
        text: '서브3 이하 엘리트 러너를 위한 최상위 레이싱화입니다. 역대 최고 에너지 리턴(80.6%)과 197g 초경량으로 기록 단축에 최적화되어 있습니다. 33만원 프리미엄 가격이지만, IncrediRUN 폼의 극강 반발력은 알파플라이와 비교해도 손색없습니다. 다만 6.5 HA 극소프트 미드솔로 안정성이 낮아 완벽한 러닝 폼이 필요하고, 토박스가 좁아 발볼 넓은 한국 러너에게는 맞지 않을 수 있습니다. "초보도 신을 수 있나요?" 아닙니다. 월 200km 이상 훈련하는 시리어스 러너 전용입니다.',
      },
    ],

    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-edge-plus', 'new-balance-sc-elite-v5', 'puma-fast-r-nitro-elite-3'],
  },
  {
    id: 'saucony-endorphin-speed-5',
    slug: 'saucony-endorphin-speed-5',
    brand: 'Saucony',
    name: '엔돌핀 스피드 5',
    image: '/images/shoes/saucony/endorphin_speed5.webp',
    images: [
      '/images/shoes/saucony/endorphinspeed5/side.webp',
      '/images/shoes/saucony/endorphinspeed5/top.webp',
    ],
    category: '데일리',
    rating: 5,
    price: 209000,
    description: 'Saucony의 인기 템포 러닝화로, PWRRUN PB 미드솔과 나일론 플레이트로 레이싱과 트레이닝 모두에 적합한 버사타일한 신발입니다.',
    tags: ['템포', '데일리', '나일론 플레이트', '버사타일'],

    specs: {
      weight: 241,
      cushioning: 7,
      responsiveness: 9,
      stability: 5,
      drop: 11,
      durability: 500,
    },

    biomechanics: {
      stackHeight: {
        heel: 37.4,
        forefoot: 26.8,
      },
      drop: 10.6,
      carbonPlate: false,
      plateType: 'curved',
      midsoleType: 'PWRRUN PB + Nylon Plate',
      optimalPace: '4:00-5:30 min/km',
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
      wideOptions: false,
      winterCompatibility: 'good',
      summerCompatibility: 'good',
    },

    targetUsers: {
      recommended: ['템포 러닝', '인터벌', '하프마라톤', '데일리+레이싱 겸용'],
      notRecommended: ['입문 러너', '맥시멀 쿠셔닝 선호', '과내전 러너'],
    },

    features: ['PWRRUN PB 미드솔', '나일론 플레이트', '10.6mm 드롭', '버사타일'],

    priceAnalysis: {
      msrp: 209000,
      streetPrice: 179000,
      costPerKm: 418,
      valueRating: 8,
      priceTier: 'premium',
      alternatives: ['nike-pegasus-plus', 'asics-novablast-5', 'new-balance-sc-trainer-v3'],
    },

    detailedSpecs: {
      weight: '241g (남성 US 9 기준, RunRepeat 실측)',
      stackHeight: '힐 37.4mm / 포어풋 26.8mm (실측)',
      drop: '10.6mm (실측) / 8mm (브랜드 공식)',
      midsole: 'PWRRUN PB (PEBA)',
      plate: '나일론 플레이트',
      outsole: 'XT-900 러버',
      upper: '메쉬',
      width: '표준 (D)',
      durability: '500km+',
      price: '209,000원',
      costPerKm: '약 418원/km',
      footType: '중립',
      landingPattern: '중족부/전족부 착지',
    },

    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 82,
        text: '가성비 최강의 템포/레이싱 겸용 러닝화입니다. 20만원대에 슈퍼슈즈급 에너지 리턴(73.2%)을 제공하며, 러닝 커뮤니티에서 "가성비 갓신발"로 불립니다. 나일론 플레이트로 카본보다 유연해 데일리 훈련에도 부담없고, 템포런/하프마라톤에서도 충분한 성능입니다. v4보다 소프트해져(18.5 HA) 착화감이 좋아졌고, 통기성 5/5로 여름에도 쾌적합니다. 서브4~서브3:30 목표 러너가 슈퍼슈즈 전에 먼저 경험해볼 추천 모델입니다. 토박스가 넓어져 발볼 걱정도 줄었습니다.',
      },
    ],

    similarShoes: ['asics-superblast-2', 'hoka-mach-x-3', 'puma-deviate-nitro-3', 'nike-vomero-18'],
  },
  {
    id: 'saucony-endorphin-trainer',
    slug: 'saucony-endorphin-trainer',
    brand: 'Saucony',
    name: '엔돌핀 트레이너',
    image: '/images/shoes/saucony/endorphin_Trainer.webp',
    images: [
      '/images/shoes/saucony/endorphintrainer/main.webp',
      '/images/shoes/saucony/endorphintrainer/side.webp',
      '/images/shoes/saucony/endorphintrainer/heel.webp',
      '/images/shoes/saucony/endorphintrainer/top.webp',
      '/images/shoes/saucony/endorphintrainer/outsole.webp',
    ],
    category: '쿠션화',
    rating: 4,
    price: 219000,
    description: 'Saucony의 프리미엄 트레이너로, IncrediRUN 미드솔을 사용해 엘리트급 에너지 리턴을 데일리 트레이닝에서 경험할 수 있습니다.',
    tags: ['쿠션화', '트레이너', 'IncrediRUN', '프리미엄'],

    specs: {
      weight: 285,
      cushioning: 8,
      responsiveness: 8,
      stability: 6,
      drop: 7,
      durability: 600,
    },

    biomechanics: {
      stackHeight: {
        heel: 38.9,
        forefoot: 32,
      },
      drop: 6.9,
      carbonPlate: true,
      plateType: 'flat',
      midsoleType: 'IncrediRUN + PWRRUN',
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
      wideOptions: false,
      winterCompatibility: 'good',
      summerCompatibility: 'good',
    },

    targetUsers: {
      recommended: ['데일리 트레이닝', '장거리', '중상급 러너', '템포 러닝'],
      notRecommended: ['입문 러너', '레이싱 전용', '과내전 러너'],
    },

    features: ['IncrediRUN 미드솔', '3/4 카본 플레이트', '6.9mm 드롭', '엘리트급 에너지 리턴'],

    priceAnalysis: {
      msrp: 219000,
      streetPrice: 189000,
      costPerKm: 365,
      valueRating: 7,
      priceTier: 'premium',
      alternatives: ['nike-zoom-fly-6', 'asics-superblast-2', 'new-balance-sc-trainer-v3'],
    },

    detailedSpecs: {
      weight: '285g (Lab)',
      stackHeight: '힐 38.9mm / 포어풋 32mm (Lab)',
      drop: '6.9mm (Lab 측정)',
      midsole: 'IncrediRUN + PWRRUN (듀얼 폼)',
      plate: '3/4 길이 카본 플레이트',
      outsole: '러버 + 강화 EVA',
      upper: '메쉬 (고통기성)',
      width: '표준 (D) - 토박스 좁음',
      durability: '600km+',
      price: '219,000원',
      costPerKm: '약 365원/km',
      footType: '중립',
      landingPattern: '중족부/전족부 착지',
    },

    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 77,
        text: '엔돌핀 엘리트의 IncrediRUN 폼을 훈련에서 경험하고 싶은 시리어스 러너를 위한 슈퍼트레이너입니다. 21만원대로 엘리트급 에너지 리턴(76.3% forefoot)을 데일리 훈련에서 누릴 수 있습니다. 121.7mm 초광폭 플랫폼으로 안정성이 뛰어나고, 600km+ 내구성으로 가격 대비 오래 신을 수 있습니다. 다만 285g으로 무겁고, 토박스가 좁아(70.1mm) 발볼 넓은 한국 러너는 착화감이 불편할 수 있습니다. 템포런보다는 장거리 훈련에 더 적합합니다.',
      },
    ],

    similarShoes: ['asics-superblast-2', 'new-balance-sc-trainer-v3', 'hoka-mach-x-3', 'nike-vomero-18'],
  },
];
