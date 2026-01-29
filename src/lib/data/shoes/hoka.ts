import type { Shoe } from '@/types/shoe';

export const hokaShoes: Shoe[] = [
  {
    id: 'hoka-clifton-10',
    slug: 'hoka-clifton-10',
    brand: 'Hoka',
    name: '클리프톤 10',
    image: '/images/shoes/hoka/clifton10/side.webp',
    images: ['/images/shoes/hoka/clifton10/side.webp', '/images/shoes/hoka/clifton10/front.webp', '/images/shoes/hoka/clifton10/back.webp', '/images/shoes/hoka/clifton10/outsole.webp'],
    category: '입문화',
    rating: 5,
    price: 199000,
    description: '호카의 대표 입문화로, 가볍고 푹신한 쿠셔닝과 로커 기술로 편안한 러닝을 제공합니다. 초보 러너부터 회복 러닝까지 폭넓게 활용 가능합니다.',
    tags: ['입문화', '맥시멀 쿠셔닝', '로커 기술'],

    specs: {
      weight: 275,
      cushioning: 9,
      responsiveness: 6,
      stability: 7,
      drop: 12,
      durability: 500,
    },

    biomechanics: {
      stackHeight: {
        heel: 44,
        forefoot: 32,
      },
      drop: 12,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'CMEVA Foam',
      optimalPace: '5:30-7:00 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'excellent',
      achillesTendinopathy: 'excellent',
      kneeIssues: 'excellent',
      shinSplints: 'excellent',
    },

    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'good',
      wideOptions: true,
      winterCompatibility: 'good',
      summerCompatibility: 'fair',
    },

    targetUsers: {
      recommended: ['러닝 입문자', '맥시멀 쿠셔닝 선호', '회복 러닝용', '무릎/관절 보호 필요', '장거리 편안함 추구'],
      notRecommended: ['빠른 레이스 페이스', '강한 반발력 선호', '미니멀리스트 러너'],
    },

    features: ['맥시멀 쿠셔닝', '메타 로커 기술', '경량 CMEVA 폼', '부드러운 착지감'],

    priceAnalysis: {
      msrp: 199000,
      streetPrice: 189000,
      costPerKm: 320,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['nike-pegasus-41', 'asics-novablast-5', 'new-balance-880-v15'],
    },

    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 88,
        text: '입문 러너의 첫 러닝화로 가장 추천하는 모델입니다. 147 SA 충격흡수와 44.4mm 힐 스택으로 "무릎 괜찮나요?" 질문에 자신있게 추천할 수 있습니다. 97.2mm 넓은 토박스로 발볼 넓은 한국 러너에게도 편안하고, 와이드 옵션까지 있습니다. 18만원대로 본디(22만원)보다 저렴하면서 입문자에게 충분한 쿠셔닝을 제공합니다. 다만 52.3% 에너지 리턴으로 반발력이 약하고 275g으로 무거워, 서브4 이하 빠른 페이스에는 부적합합니다. 6분/km 이상 편안한 조깅에 최적입니다.',
      },
      {
        userType: '입문 러너',
        rating: 5,
        text: '처음 러닝화로 클리프톤 10을 선택했는데, 정말 구름 위를 걷는 느낌이에요. 호카 특유의 로커 기술 덕분에 자연스럽게 앞으로 나가는 느낌이고, 무릎에 부담이 전혀 없어요.',
      },
      {
        userType: '회복 러너',
        rating: 5,
        text: '빠른 훈련 다음 날 회복 러닝용으로 사용하는데 최고입니다. 푹신한 쿠셔닝이 피로한 다리를 보호해주는 느낌이에요. 다만 빠른 페이스에는 맞지 않아요.',
      },
    ],

    detailedSpecs: {
      weight: '275g (남성 US 9 기준)',
      stackHeight: '힐 44mm / 포어풋 32mm',
      drop: '12mm (Lab 측정치)',
      midsole: 'CMEVA 폼 (경량 압축 EVA)',
      plate: '없음',
      outsole: '듀라브레이드 러버',
      upper: '엔지니어드 메쉬',
      width: '표준 (와이드 옵션 있음)',
      durability: '500km',
      price: '₩189,000 (MSRP) / 세일 시 ₩160,000~',
      costPerKm: '약 ₩320/km (500km 기준)',
      footType: '표준~넓은 발볼 / 평발 OK / 와이드 옵션 있음',
      landingPattern: '힐스트라이크 (로커 기술로 자연스러운 전환)',
    },

    similarShoes: ['nike-pegasus-41', 'asics-gel-nimbus-28', 'new-balance-880-v15', 'brooks-ghost-max-3'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/5no2qeeM' }],
  },
  {
    id: 'hoka-bondi-9',
    slug: 'hoka-bondi-9',
    brand: 'Hoka',
    name: '본디 9',
    image: '/images/shoes/hoka/bondi9/side.webp',
    images: ['/images/shoes/hoka/bondi9/side.webp', '/images/shoes/hoka/bondi9/front.webp', '/images/shoes/hoka/bondi9/back.webp', '/images/shoes/hoka/bondi9/outsole.webp'],
    category: '쿠션화',
    rating: 5,
    price: 229000,
    description: '호카의 최대 쿠셔닝 모델로, 극강의 푹신함과 안정감을 제공합니다. 관절 보호가 필요하거나 장시간 서있는 분들에게 최적입니다.',
    tags: ['맥시멀 쿠셔닝', '관절 보호', '장거리용'],

    specs: {
      weight: 303,
      cushioning: 10,
      responsiveness: 5,
      stability: 8,
      drop: 9,
      durability: 550,
    },

    biomechanics: {
      stackHeight: {
        heel: 41,
        forefoot: 32,
      },
      drop: 9,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Supercritical EVA',
      optimalPace: '6:00-8:00 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'excellent',
      achillesTendinopathy: 'excellent',
      kneeIssues: 'excellent',
      shinSplints: 'excellent',
    },

    koreanFootFit: {
      toBoxWidth: 'wide',
      flatFootCompatibility: 'excellent',
      wideOptions: true,
      winterCompatibility: 'excellent',
      summerCompatibility: 'fair',
    },

    targetUsers: {
      recommended: ['관절 보호 최우선', '장시간 서있는 직업', '체중이 있는 러너', '회복 러닝 전용', '느린 페이스 러너'],
      notRecommended: ['빠른 페이스 훈련', '경량화 선호', '민첩한 움직임 필요'],
    },

    features: ['최대 쿠셔닝', '넓은 베이스', '로커 기술', 'Supercritical EVA'],

    priceAnalysis: {
      msrp: 229000,
      streetPrice: 195000,
      costPerKm: 350,
      valueRating: 7,
      priceTier: 'high',
      alternatives: ['asics-gel-nimbus-28', 'new-balance-1080-v14', 'brooks-glycerin-22'],
    },

    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 90,
        text: '무릎이나 발목 부상 이력이 있는 러너, 체중이 있는 러너에게 최적의 맥시멀 쿠션화입니다. 146 SA 충격흡수와 41.3mm 힐 스택으로 관절 보호 최상위급이며, 123.2mm 초광폭 플랫폼으로 안정성도 뛰어납니다. 22만원대로 프리미엄 가격이지만 관절 보호가 필요한 러너에게는 투자 가치가 있습니다. 다만 토박스가 좁아(72.5mm) 발볼 넓은 한국 러너는 와이드 옵션을 선택하세요. 303g으로 무거워 빠른 페이스에는 부적합하고, 7분/km 이상 편안한 조깅에 최적입니다.',
      },
      {
        userType: '무릎 통증 러너',
        rating: 5,
        text: '무릎이 좋지 않아서 쿠셔닝이 좋은 신발을 찾다가 본디를 선택했어요. 정말 구름 위를 걷는 느낌! 10km 뛰어도 무릎에 무리가 전혀 없어요.',
      },
      {
        userType: '장거리 러너',
        rating: 4,
        text: '장거리 슬로우 런에는 최고입니다. 다만 무게가 있어서 빠른 페이스에는 부적합해요. 용도에 맞게 사용하면 정말 좋은 신발입니다.',
      },
    ],

    detailedSpecs: {
      weight: '303g (남성 US 9 기준)',
      stackHeight: '힐 41mm / 포어풋 32mm',
      drop: '9mm (Lab 측정치)',
      midsole: 'Supercritical EVA (초경량 고탄성 폼)',
      plate: '없음',
      outsole: '듀라브레이드 러버',
      upper: '엔지니어드 메쉬',
      width: '표준 / 와이드',
      durability: '550km',
      price: '₩229,000 (MSRP) / 세일 시 ₩195,000~',
      costPerKm: '약 ₩400/km (550km 기준)',
      footType: '표준~넓은 발볼 / 평발 OK / 관절 보호 필요한 러너',
      landingPattern: '힐스트라이크 (맥시멀 쿠셔닝)',
    },

    similarShoes: ['asics-gel-nimbus-28', 'new-balance-1080-v14', 'brooks-glycerin-22', 'puma-magnify-nitro-3'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/5TQWU20i' }],
  },
  {
    id: 'hoka-mach-6',
    slug: 'hoka-mach-6',
    brand: 'Hoka',
    name: '마하 6',
    image: '/images/shoes/hoka/mach6/side.webp',
    images: ['/images/shoes/hoka/mach6/side.webp', '/images/shoes/hoka/mach6/front.webp', '/images/shoes/hoka/mach6/top.webp', '/images/shoes/hoka/mach6/outsole.webp'],
    category: '데일리',
    rating: 4,
    price: 185000,
    description: '가볍고 반응성 좋은 데일리 트레이너입니다. 템포 러닝부터 일상 훈련까지 다양하게 활용 가능한 올라운더입니다.',
    tags: ['데일리 트레이너', '경량', '반응성'],

    specs: {
      weight: 232,
      cushioning: 7,
      responsiveness: 8,
      stability: 7,
      drop: 10,
      durability: 450,
    },

    biomechanics: {
      stackHeight: {
        heel: 36,
        forefoot: 26,
      },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Supercritical EVA',
      optimalPace: '4:30-6:00 min/km',
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
      summerCompatibility: 'fair',
    },

    targetUsers: {
      recommended: ['데일리 트레이닝', '템포 러닝', '올라운드 러너', '경량화 선호', '다양한 페이스 훈련'],
      notRecommended: ['최대 쿠셔닝 필요', '마라톤 레이싱 전용', '안정화 필요'],
    },

    features: ['경량 디자인', 'Supercritical EVA', '메타 로커', '다용도 활용'],

    priceAnalysis: {
      msrp: 185000,
      streetPrice: 156500,
      costPerKm: 380,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['nike-pegasus-41', 'asics-novablast-5', 'new-balance-1080-v14'],
    },

    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 87,
        text: '호카의 가벼움과 반응성을 원하는 중급 러너에게 최적의 데일리 트레이너입니다. 232g 경량에 65.4% 에너지 리턴으로 클리프톤/본디보다 빠른 페이스에 적합합니다. 19만원대로 가성비도 좋고, 통기성 5/5 최상위급으로 여름 러닝에도 쾌적합니다. 템포런부터 장거리까지 다양한 훈련에 활용 가능합니다. 다만 토박스가 좁아(70.1mm) 발볼 넓은 러너는 와이드 옵션을 선택하고, 겨울에는 EVA 폼이 42% 더 단단해지니 주의하세요.',
      },
      {
        userType: '중급 러너',
        rating: 5,
        text: '232g으로 가볍고 반응성도 좋아서 템포 러닝에 딱이에요. 클리프톤보다 더 빠른 느낌이고, 다양한 페이스에 대응 가능해서 데일리로 최고입니다.',
      },
      {
        userType: '올라운드 러너',
        rating: 4,
        text: '훈련용으로는 정말 좋아요. 다만 본디나 클리프톤처럼 푹신하진 않아서 장거리 슬로우 런에는 좀 딱딱하게 느껴질 수 있어요.',
      },
    ],

    detailedSpecs: {
      weight: '232g (남성 US 9 기준)',
      stackHeight: '힐 36mm / 포어풋 26mm',
      drop: '10mm (Lab 측정치)',
      midsole: 'Supercritical EVA',
      plate: '없음',
      outsole: '러버 커버리지',
      upper: '엔지니어드 메쉬',
      width: '표준 (와이드 옵션 있음)',
      durability: '500km',
      price: '₩189,000 (MSRP) / 세일 시 ₩160,000~',
      costPerKm: '약 ₩320/km (500km 기준)',
      footType: '표준 발볼 / 와이드 옵션 있음',
      landingPattern: '힐스트라이크~미드풋',
    },

    similarShoes: ['nike-pegasus-41', 'asics-novablast-5', 'puma-velocity-nitro-4', 'saucony-kinvara-16'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xMnfwsEh' }],
  },
  {
    id: 'hoka-arahi-8',
    slug: 'hoka-arahi-8',
    brand: 'Hoka',
    name: '아라히 8',
    image: '/images/shoes/hoka/arahi8/side.webp',
    images: ['/images/shoes/hoka/arahi8/side.webp', '/images/shoes/hoka/arahi8/front.webp', '/images/shoes/hoka/arahi8/back.webp', '/images/shoes/hoka/arahi8/outsole.webp'],
    category: '안정화',
    rating: 5,
    price: 199000,
    description: 'H-Frame 안정화 시스템을 탑재한 호카의 라이트 안정화. 전작 대비 더 부드러운 폼과 높아진 스택으로 평발/과내전 러너에게 쿠셔닝과 안정성을 동시에 제공합니다.',
    tags: ['안정화', '라이트 스태빌리티', 'H-Frame', '평발'],
    specs: {
      weight: 259,
      cushioning: 9,
      responsiveness: 6,
      stability: 9,
      drop: 11,
      durability: 550,
    },
    biomechanics: {
      stackHeight: { heel: 39.4, forefoot: 28.1 },
      drop: 11.3,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'CMEVA (16.4 HA, Soft)',
      optimalPace: '5:00-7:00 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'excellent',
      achillesTendinopathy: 'good',
      kneeIssues: 'excellent',
      shinSplints: 'excellent',
    },
    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'excellent',
      wideOptions: true,
      winterCompatibility: 'good',
      summerCompatibility: 'fair',
    },
    targetUsers: {
      recommended: ['평발 러너', '과내전 러너', '라이트 안정화 필요', '힐 스트라이커', '장거리 러너', '무릎 보호'],
      notRecommended: ['스피드 러닝', '통기성 중시', '젖은 노면 위주'],
    },
    features: ['H-Frame 안정화', '39.4mm 힐 스택', 'Early-Stage Meta Rocker', '11.3mm 하이드롭', '와이드 옵션'],
    priceAnalysis: {
      msrp: 199000,
      streetPrice: 160000,
      costPerKm: 290,
      valueRating: 9,
      priceTier: 'mid',
      alternatives: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'saucony-guide-18'],
    },
    detailedSpecs: {
      weight: '259g (US 9 기준, Lab 측정)',
      stackHeight: '힐 39.4mm / 포어풋 28.1mm (Lab 측정)',
      drop: '11.3mm (Lab 측정, 브랜드 8mm)',
      midsole: 'CMEVA 폼 (16.4 HA, Soft)',
      plate: '없음 (H-Frame 안정화)',
      outsole: '듀라브레이드 러버',
      upper: '자카드 메쉬',
      width: '표준 / 와이드 / X-Wide',
      durability: '550-600km',
      price: '₩189,000 (MSRP)',
      costPerKm: '약 ₩290/km (650km 기준)',
      footType: '평발 / 과내전 러너 / 와이드 옵션 있음',
      landingPattern: '힐스트라이크 (로커 기술로 전환)',
    },
    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 85,
        text: '아라히 8은 오랫동안 기다려온 업데이트로 현대적인 느낌을 되찾았습니다. 가비오타의 H-Frame 안정화 시스템을 채택해 높아진 스택(39.4mm)과 부드러운 폼(16.4 HA)에도 안정적인 라이드를 제공합니다. 138 SA 충격흡수로 힐스트라이커에게 최적이고, 11.3mm 하이드롭으로 이전 버전의 낮은 드롭을 피했던 러너들도 편하게 신을 수 있습니다. 다만 통기성이 매우 나빠 더운 날씨에는 불편하고, 젖은 노면 그립이 약합니다. 평발/과내전 러너를 위한 라이트 안정화로 강력 추천합니다.',
      },
      {
        userType: '평발 러너',
        rating: 5,
        text: 'GT-2000 대신 아라히 8을 선택했는데 정말 잘한 것 같아요. H-Frame이 발목을 잡아주면서도 호카 특유의 쿠셔닝이 그대로라서 장거리에도 편해요. 평발 안정화 중 최고!',
      },
      {
        userType: '과내전 러너',
        rating: 5,
        text: '아라히 7보다 훨씬 부드러워졌어요! 전작이 너무 딱딱했는데 8은 쿠션도 좋고 안정성도 유지돼서 완벽해요. 259g으로 가벼운 편이라 일상 러닝에도 좋아요.',
      },
      {
        userType: '힐 스트라이커',
        rating: 5,
        text: '11.3mm 드롭이 힐스트라이커인 저한테 딱 맞아요. 전작은 드롭이 낮아서 불편했는데 아라히 8은 자연스럽게 착지가 돼요. Early-Stage Rocker가 전환도 부드럽게 해줘요.',
      },
      {
        userType: '무릎 보호 러너',
        rating: 4,
        text: '39.4mm 스택이 무릎 충격을 잘 흡수해줘요. 다만 여름에 통기성이 안 좋아서 발이 좀 덥더라고요. 봄가을 러닝에 추천해요.',
      },
    ],
    similarShoes: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'saucony-guide-18', 'new-balance-860-v14'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/FjC6kvVq' }],
  },
  {
    id: 'hoka-gaviota-6',
    slug: 'hoka-gaviota-6',
    brand: 'Hoka',
    name: '가비오타 6',
    image: '/images/shoes/hoka/gaviota6/side.webp',
    images: ['/images/shoes/hoka/gaviota6/side.webp', '/images/shoes/hoka/gaviota6/front.webp', '/images/shoes/hoka/gaviota6/top.webp', '/images/shoes/hoka/gaviota6/outsole.webp'],
    category: '안정화',
    rating: 4,
    price: 239000,
    description: '호카의 프리미엄 안정화로, 과내전 러너를 위한 J-Frame 기술을 탑재했습니다. 안정성과 쿠셔닝을 동시에 제공합니다.',
    tags: ['안정화', '과내전 교정', 'J-Frame'],

    specs: {
      weight: 299,
      cushioning: 8,
      responsiveness: 5,
      stability: 10,
      drop: 2,
      durability: 500,
    },

    biomechanics: {
      stackHeight: {
        heel: 35,
        forefoot: 33,
      },
      drop: 2,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'EVA (Dual Foam System)',
      optimalPace: '5:30-7:00 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'excellent',
      achillesTendinopathy: 'good',
      kneeIssues: 'excellent',
      shinSplints: 'excellent',
    },

    koreanFootFit: {
      toBoxWidth: 'wide',
      flatFootCompatibility: 'excellent',
      wideOptions: true,
      winterCompatibility: 'good',
      summerCompatibility: 'fair',
    },

    targetUsers: {
      recommended: ['과내전 러너', '평발 러너', '안정성 최우선', '무릎/발목 보호 필요', '장거리 안정화 필요'],
      notRecommended: ['빠른 페이스 훈련', '가벼운 신발 선호', '정상 발 러너'],
    },

    features: ['J-Frame 안정화 기술', '낮은 드롭 (2mm)', '듀얼 폼 시스템', '넓은 베이스'],

    priceAnalysis: {
      msrp: 239000,
      streetPrice: 229000,
      costPerKm: 370,
      valueRating: 7,
      priceTier: 'high',
      alternatives: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'new-balance-860-v14'],
    },

    reviews: [
      {
        userType: '과내전 러너',
        rating: 5,
        text: '심한 과내전으로 고생했는데 가비오타 5가 정말 도움이 됐어요. J-Frame이 발목을 잡아주면서도 호카 특유의 쿠셔닝은 그대로라 정말 편해요.',
      },
      {
        userType: '평발 러너',
        rating: 4,
        text: '평발인데 아치 서포트가 확실해요. 다만 정상 발인 분들에게는 과할 수 있어요. 안정화가 필요한 분들에게는 강추합니다.',
      },
    ],

    detailedSpecs: {
      weight: '299g (남성 US 9 기준)',
      stackHeight: '힐 35mm / 포어풋 33mm',
      drop: '2mm (Lab 측정치, 매우 낮음)',
      midsole: 'EVA 듀얼 폼 시스템',
      plate: '없음 (J-Frame 안정화)',
      outsole: '듀라브레이드 러버',
      upper: '엔지니어드 메쉬',
      width: '표준 / 와이드',
      durability: '600km',
      price: '₩199,000 (MSRP) / 세일 시 ₩170,000~',
      costPerKm: '약 ₩285/km (600km 기준)',
      footType: '평발 / 과내전 러너 / 와이드 옵션 있음',
      landingPattern: '힐스트라이크~미드풋 (J-Frame 안정화)',
    },

    similarShoes: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'new-balance-860-v14', 'saucony-hurricane-25'],
    purchaseLinks: [{ store: '네이버', url: 'https://brand.naver.com/hoka/products/12839097291' }],
  },
  {
    id: 'hoka-mach-x-3',
    slug: 'hoka-mach-x-3',
    brand: 'Hoka',
    name: '마하 X 3',
    image: '/images/shoes/hoka/machX3/side.webp',
    images: ['/images/shoes/hoka/machX3/side.webp', '/images/shoes/hoka/machX3/front.webp', '/images/shoes/hoka/machX3/top.webp', '/images/shoes/hoka/machX3/outsole.webp'],
    category: '쿠션화',
    rating: 5,
    price: 249000,
    description: '레이싱과 훈련의 경계를 넘나드는 슈퍼트레이너입니다. PEBA 폼과 Pebax 플레이트로 레이싱화 수준의 반응성을 제공하면서도 내구성이 뛰어납니다.',
    tags: ['슈퍼트레이너', 'PEBA 폼', 'Pebax 플레이트'],

    specs: {
      weight: 264,
      cushioning: 8,
      responsiveness: 9,
      stability: 7,
      drop: 10,
      durability: 500,
    },

    biomechanics: {
      stackHeight: {
        heel: 43,
        forefoot: 33,
      },
      drop: 10,
      carbonPlate: false,
      plateType: 'Pebax',
      midsoleType: 'PEBA + Supercritical EVA',
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
      summerCompatibility: 'fair',
    },

    targetUsers: {
      recommended: ['템포 훈련', '하프 마라톤', '빠른 롱런', '레이싱화 내구성 필요', '중상급 러너'],
      notRecommended: ['입문 러너', '느린 회복 러닝', '최대 안정성 필요'],
    },

    features: ['PEBA 폼', 'Pebax 플레이트', '레이싱급 반응성', '훈련용 내구성'],

    priceAnalysis: {
      msrp: 249000,
      streetPrice: 189200,
      costPerKm: 480,
      valueRating: 8,
      priceTier: 'high',
      alternatives: ['nike-vomero-18', 'asics-superblast-2', 'new-balance-sc-trainer-v3'],
    },

    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 74,
        text: '레이싱화 느낌을 훈련에서 경험하고 싶은 중상급 러너를 위한 슈퍼트레이너입니다. 27만원대로 로켓X(31만원)보다 저렴하면서 500km+ 내구성으로 훈련 겸용이 가능합니다. PEBA 폼과 Pebax 플레이트 조합으로 전족부 에너지 리턴 69.3%가 뛰어나 템포런/하프마라톤에 최적입니다. 다만 토박스가 매우 좁아(70.8mm) 발볼 넓은 한국 러너에게는 불편할 수 있고, 와이드 옵션도 없습니다. v2의 힐 문제가 해결되어 힐스트라이커도 편하게 착용할 수 있습니다.',
      },
      {
        userType: '중상급 러너',
        rating: 5,
        text: '훈련과 레이스 겸용으로 최고예요. PEBA 폼이라 반발력이 정말 좋고, Pebax 플레이트가 추진력을 더해줘요. 로켓 X보다 내구성이 좋아서 훈련용으로 딱입니다.',
      },
      {
        userType: '하프 마라톤 러너',
        rating: 5,
        text: '하프 마라톤까지는 마하 X 3으로 충분해요. 반응성이 좋으면서도 쿠셔닝이 충분해서 마지막까지 다리가 버텨줍니다. 가성비 슈퍼트레이너!',
      },
    ],

    detailedSpecs: {
      weight: '264g (남성 US 9 기준)',
      stackHeight: '힐 43mm / 포어풋 33mm',
      drop: '10mm (Lab 측정치)',
      midsole: 'PEBA + Supercritical EVA (하이브리드)',
      plate: 'Pebax 플레이트 (탄소 아님)',
      outsole: '러버 커버리지',
      upper: '엔지니어드 메쉬',
      width: '표준',
      durability: '400km',
      price: '₩269,000 (MSRP) / 세일 시 ₩230,000~',
      costPerKm: '약 ₩575/km (400km 기준)',
      footType: '표준 발볼 / 중상급 러너',
      landingPattern: '미드풋~전방 착지',
    },

    similarShoes: ['asics-superblast-2', 'nike-vomero-18', 'new-balance-sc-trainer-v3', 'puma-deviate-nitro-3'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xNnMDilg' }],
  },
  {
    id: 'hoka-rocket-x-3',
    slug: 'hoka-rocket-x-3',
    brand: 'Hoka',
    name: '로켓 X 3',
    image: '/images/shoes/hoka/rocketX3/side.webp',
    images: ['/images/shoes/hoka/rocketX3/side.webp', '/images/shoes/hoka/rocketX3/front.webp', '/images/shoes/hoka/rocketX3/top.webp', '/images/shoes/hoka/rocketX3/outsole.webp'],
    category: '레이싱',
    rating: 5,
    price: 299000,
    description: '호카의 플래그십 레이싱화로, 듀얼 레이어 PEBA 폼과 카본 플레이트로 극강의 반응성과 추진력을 제공합니다. 마라톤 기록 단축을 위한 최고의 선택입니다.',
    tags: ['레이싱', '카본 플레이트', 'PEBA 폼'],

    specs: {
      weight: 220,
      cushioning: 7,
      responsiveness: 10,
      stability: 6,
      drop: 10,
      durability: 300,
    },

    biomechanics: {
      stackHeight: {
        heel: 40,
        forefoot: 30,
      },
      drop: 10,
      carbonPlate: true,
      plateType: 'Carbon',
      midsoleType: 'PEBA (Dual Layer)',
      optimalPace: '3:30-5:00 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'caution',
      achillesTendinopathy: 'caution',
      kneeIssues: 'caution',
      shinSplints: 'good',
    },

    koreanFootFit: {
      toBoxWidth: 'narrow',
      flatFootCompatibility: 'poor',
      wideOptions: false,
      winterCompatibility: 'poor',
      summerCompatibility: 'fair',
    },

    targetUsers: {
      recommended: ['마라톤 기록 단축', '엘리트 러너', '하프/풀 마라톤 레이스', '빠른 페이스 전용', '전방 착지 러너'],
      notRecommended: ['입문 러너', '회복 러닝', '일상 훈련', '넓은 발볼', '과내전 러너'],
    },

    features: ['듀얼 레이어 PEBA', '카본 플레이트', '초경량 220g', '극강 반응성'],

    priceAnalysis: {
      msrp: 299000,
      streetPrice: 289000,
      costPerKm: 930,
      valueRating: 7,
      priceTier: 'premium',
      alternatives: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'new-balance-sc-elite-v5'],
    },

    reviews: [
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 89,
        text: '서브3:30~서브3 목표 마라토너를 위한 호카 최고의 레이싱화입니다. 78% 에너지 리턴과 카본 플레이트로 기록 단축에 최적화되어 있고, 31만원으로 알파플라이(37만원)보다 저렴합니다. 듀얼 PEBA 폼이 부드러우면서도 반발력이 좋고, 내구성이 뛰어나 2~3번 레이스에 활용 가능합니다. 추위에서 3%만 단단해져 겨울 마라톤에도 적합합니다. 다만 토박스가 매우 좁아(70.0mm) 발볼 넓은 한국 러너에게는 불편하고, 공격적인 로커로 적응 기간이 필요합니다. 레이싱 전용이므로 훈련에는 마하X를 추천합니다.',
      },
      {
        userType: '엘리트 러너',
        rating: 5,
        text: '풀 마라톤 기록 단축에 성공했어요. 듀얼 PEBA가 반발력이 엄청나고, 카본 플레이트가 추진력을 확실히 더해줍니다. 호카 레이싱화의 정점입니다.',
      },
      {
        userType: '서브-3 러너',
        rating: 5,
        text: '나이키 알파플라이와 비교해도 손색없어요. 오히려 안정성이 더 좋은 느낌입니다. 220g으로 가볍고, 마지막까지 다리가 신선해요.',
      },
    ],

    detailedSpecs: {
      weight: '220g (남성 US 9 기준)',
      stackHeight: '힐 40mm / 포어풋 30mm',
      drop: '10mm (Lab 측정치)',
      midsole: 'PEBA 듀얼 레이어 (최고급 폼)',
      plate: '카본 플레이트 (풀 렝스)',
      outsole: '미니멀 러버 (경량화)',
      upper: '초경량 메쉬',
      width: '표준 (좁음)',
      durability: '300km (레이싱 전용)',
      price: '₩319,000 (MSRP) / 세일 시 ₩270,000~',
      costPerKm: '약 ₩900/km (300km 기준)',
      footType: '발볼 좁은~표준 / 엘리트 러너',
      landingPattern: '전방 착지 (레이싱)',
    },

    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'new-balance-sc-elite-v5', 'saucony-endorphin-pro-4'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xslD1XqM' }],
  },
];
