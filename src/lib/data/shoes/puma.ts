import type { Shoe } from '@/types/shoe';

export const pumaShoes: Shoe[] = [
  {
    id: 'puma-velocity-nitro-4',
    slug: 'puma-velocity-nitro-4',
    brand: 'Puma',
    name: '벨로시티 나이트로 4',
    image: '/images/shoes/puma/velocity_Nitro4 .webp',
    images: [
      '/images/shoes/puma/velocitynitro4/side.webp',
      '/images/shoes/puma/velocitynitro4/front.webp',
      '/images/shoes/puma/velocitynitro4/back.webp',
      '/images/shoes/puma/velocitynitro4/top.webp',
      '/images/shoes/puma/velocitynitro4/outsole.webp',
    ],
    category: '입문화',
    rating: 5,
    price: 179000,
    description: '푸마의 대표 데일리 트레이너로, 풀 Nitro Foam 미드솔로 가볍고 반응성이 뛰어납니다. 2025년 최고의 가성비 데일리 트레이너로 평가받고 있습니다.',
    tags: ['데일리 트레이너', '경량', '가성비'],

    specs: {
      weight: 224,
      cushioning: 7,
      responsiveness: 8,
      stability: 7,
      drop: 10,
      durability: 500,
    },

    biomechanics: {
      stackHeight: {
        heel: 34,
        forefoot: 24,
      },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Nitro Foam',
      optimalPace: '4:30-6:30 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'good',
      kneeIssues: 'good',
      shinSplints: 'good',
    },

    koreanFootFit: {
      toBoxWidth: 'narrow',
      flatFootCompatibility: 'good',
      wideOptions: true,
      winterCompatibility: 'good',
      summerCompatibility: 'excellent',
    },

    targetUsers: {
      recommended: ['데일리 트레이닝', '템포 러닝', '가성비 중시', '경량화 선호', '중급 러너'],
      notRecommended: ['넓은 발볼', '맥시멀 쿠셔닝 필요', '안정화 필요'],
    },

    features: ['풀 Nitro Foam', 'PumaGrip 아웃솔', '경량 224g', '67.5% 에너지 리턴'],

    priceAnalysis: {
      msrp: 169000,
      streetPrice: 140000,
      costPerKm: 280,
      valueRating: 10,
      priceTier: 'mid',
      alternatives: ['nike-pegasus-41', 'asics-novablast-5', 'new-balance-rebel-v5'],
    },

    reviews: [
      {
        userType: '중급 러너',
        rating: 5,
        text: '224g으로 정말 가볍고 반응성이 좋아요. 전작보다 풀 Nitro Foam으로 바뀌면서 더 탄탄한 느낌이 납니다. 가격 대비 최고의 데일리 트레이너!',
      },
      {
        userType: '템포 러너',
        rating: 5,
        text: 'PumaGrip 접지력이 정말 좋아요. 젖은 노면에서도 미끄러지지 않고, 템포 러닝까지 커버 가능한 만능 신발입니다.',
      },
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 90,
        text: '2025년 최고의 가성비 데일리 트레이너로 강력 추천합니다. "15만원대 가볍고 반응 좋은 신발 없나요?" 질문에 정답입니다. 224g으로 페가수스(281g)보다 57g 가볍고, 67.5%의 뛰어난 에너지 리턴을 제공합니다. 발볼이 좁은 편이라 한국인 발에는 와이드 모델 권장합니다. 14만원대(세일가)로 페가수스(15만원), 노바블라스트(16만원)보다 저렴하면서 성능은 동급. 템포 러닝까지 커버하는 만능 트레이너로, 가성비 중시 중급 러너에게 최적입니다.',
      },
    ],

    detailedSpecs: {
      weight: '224g (남성 US 9 기준)',
      stackHeight: '힐 34mm / 포어풋 24mm',
      drop: '10mm (Lab 측정치)',
      midsole: 'Nitro Foam (풀 렝스, Supercritical 폼)',
      plate: '없음',
      outsole: 'PumaGrip 러버',
      upper: '엔지니어드 메쉬',
      width: '표준 (좁은 편, 와이드 옵션 있음)',
      durability: '500km',
      price: '₩179,000 (MSRP) / 세일 시 ₩140,000~',
      costPerKm: '약 ₩280/km (500km 기준)',
      footType: '발볼 좁은 러너 / 와이드 옵션 있음',
      landingPattern: '힐스트라이크~미드풋',
    },

    similarShoes: ['nike-pegasus-41', 'asics-novablast-5', 'hoka-mach-6', 'saucony-ride-18'],
  },
  {
    id: 'puma-magmax-nitro-2',
    slug: 'puma-magmax-nitro-2',
    brand: 'Puma',
    name: '매그맥스 나이트로 2',
    image: '/images/shoes/puma/magMax_NITRO2.webp',
    images: [
      '/images/shoes/puma/magmaxnitro2/side.webp',
      '/images/shoes/puma/magmaxnitro2/front.webp',
      '/images/shoes/puma/magmaxnitro2/back.webp',
      '/images/shoes/puma/magmaxnitro2/top.webp',
      '/images/shoes/puma/magmaxnitro2/outsole.webp',
    ],
    category: '쿠션화',
    rating: 4,
    price: 239000,
    description: '푸마의 슈퍼트레이너로, 디비에이트 나이트로 3의 슈퍼폼과 벨로시티의 내구성을 결합한 모델입니다. PWRPLATE로 추진력을 더하고 장거리 훈련에 적합합니다.',
    tags: ['슈퍼트레이너', 'PWRPLATE', '장거리 훈련'],

    specs: {
      weight: 268,
      cushioning: 8,
      responsiveness: 8,
      stability: 7,
      drop: 10,
      durability: 500,
    },

    biomechanics: {
      stackHeight: {
        heel: 37,
        forefoot: 27,
      },
      drop: 10,
      carbonPlate: false,
      plateType: 'PWRPLATE (TPU)',
      midsoleType: 'Nitro Elite Foam',
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
      summerCompatibility: 'excellent',
    },

    targetUsers: {
      recommended: ['슈퍼트레이너 필요', '장거리 훈련', '템포 러닝', '중상급 러너'],
      notRecommended: ['입문 러너', '맥시멀 쿠셔닝 선호', '레이싱 전용'],
    },

    features: ['Nitro Elite Foam', 'PWRPLATE (TPU 플레이트)', '뛰어난 내구성', '슈퍼폼+내구성 결합'],

    priceAnalysis: {
      msrp: 239000,
      streetPrice: 200000,
      costPerKm: 400,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['nike-vomero-18', 'asics-superblast-2', 'hoka-mach-x-3'],
    },

    reviews: [
      {
        userType: '중상급 러너',
        rating: 4,
        text: '디비에이트 엘리트의 슈퍼폼을 훈련용으로 사용할 수 있어서 좋아요. 내구성도 좋고 장거리 템포 러닝에 딱입니다.',
      },
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 86,
        text: '"슈퍼트레이너 필요한데 뭐가 좋을까요?" 질문에 가성비 좋은 선택입니다. 24만원으로 보메로 18(23만원), 슈퍼블라스트 2(26만원)와 비슷한 가격대입니다. Nitro Elite Foam + TPU 플레이트로 레이싱화 느낌의 반응성을 훈련에서 경험할 수 있습니다. 268g으로 적당한 무게감, 내구성 500km로 훈련용으로 경제적입니다. 다만 TPU 플레이트라 카본 슈퍼트레이너(마하X, 슈퍼블라스트)보다는 반발력이 약합니다. 장거리 템포 훈련 중심 러너에게 추천합니다.',
      },
    ],

    detailedSpecs: {
      weight: '268g (남성 US 9 기준)',
      stackHeight: '힐 37mm / 포어풋 27mm',
      drop: '10mm',
      midsole: 'Nitro Elite Foam',
      plate: 'PWRPLATE (TPU, 탄소 아님)',
      outsole: 'PumaGrip 러버',
      upper: '엔지니어드 메쉬',
      width: '표준',
      durability: '500km',
      price: '₩239,000 (MSRP) / 세일 시 ₩200,000~',
      costPerKm: '약 ₩400/km (500km 기준)',
      footType: '표준 발볼 / 평발 OK',
      landingPattern: '미드풋~전방 착지',
    },

    similarShoes: ['nike-vomero-18', 'asics-superblast-2', 'hoka-mach-x-3', 'saucony-endorphin-speed-5'],
  },
  {
    id: 'puma-magnify-nitro-3',
    slug: 'puma-magnify-nitro-3',
    brand: 'Puma',
    name: '매그니파이 나이트로 3',
    image: '/images/shoes/puma/magnifyNITRO3.webp',
    images: [
      '/images/shoes/puma/magnifynitro3/side.webp',
      '/images/shoes/puma/magnifynitro3/front.webp',
      '/images/shoes/puma/magnifynitro3/back.webp',
      '/images/shoes/puma/magnifynitro3/top.webp',
      '/images/shoes/puma/magnifynitro3/outsole.webp',
    ],
    category: '쿠션화',
    rating: 4,
    price: 199000,
    description: '푸마의 맥시멀 쿠셔닝 모델로, PEBA 기반 Nitro Foam과 높은 스택으로 장거리와 회복 러닝에 최적화되어 있습니다.',
    tags: ['맥시멀 쿠셔닝', '장거리용', 'PEBA 폼'],

    specs: {
      weight: 264,
      cushioning: 9,
      responsiveness: 6,
      stability: 7,
      drop: 10,
      durability: 500,
    },

    biomechanics: {
      stackHeight: {
        heel: 40,
        forefoot: 30,
      },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Nitro Foam (PEBA)',
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
      wideOptions: false,
      winterCompatibility: 'good',
      summerCompatibility: 'excellent',
    },

    targetUsers: {
      recommended: ['장거리 러너', '회복 러닝', '맥시멀 쿠셔닝 선호', '무릎/관절 보호 필요'],
      notRecommended: ['빠른 페이스 훈련', '경량화 선호', '미니멀리스트'],
    },

    features: ['PEBA 기반 Nitro Foam', '40mm 맥시멀 스택', '부드러운 착지감'],

    priceAnalysis: {
      msrp: 199000,
      streetPrice: 170000,
      costPerKm: 340,
      valueRating: 7,
      priceTier: 'mid',
      alternatives: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v14'],
    },

    reviews: [
      {
        userType: '장거리 러너',
        rating: 4,
        text: '쿠셔닝이 정말 푹신하고 장거리 뛸 때 다리 피로가 적어요. 다만 무게가 좀 있어서 빠른 페이스에는 부적합합니다.',
      },
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 84,
        text: '"무릎 아픈데 푹신한 신발 추천해주세요" 질문에 가성비 좋은 선택입니다. 20만원 이하로 40mm 맥시멀 스택과 PEBA 기반 쿠셔닝을 제공합니다. 본디 9(22만원), 님버스 27(20만원)과 비교해 비슷한 수준의 보호력을 더 저렴하게 제공합니다. 264g으로 약간 무거운 편이지만, 장거리나 회복 러닝에 초점을 맞춘 신발입니다. 빠른 페이스에는 부적합하고, 관절 보호가 필요한 장거리 러너나 회복 러닝용으로 추천합니다.',
      },
    ],

    detailedSpecs: {
      weight: '264g (남성 US 9 기준)',
      stackHeight: '힐 40mm / 포어풋 30mm',
      drop: '10mm',
      midsole: 'Nitro Foam (PEBA 기반)',
      plate: '없음',
      outsole: 'PumaGrip 러버',
      upper: '엔지니어드 메쉬',
      width: '표준',
      durability: '500km',
      price: '₩199,000 (MSRP) / 세일 시 ₩170,000~',
      costPerKm: '약 ₩340/km (500km 기준)',
      footType: '표준 발볼 / 평발 OK / 관절 보호 필요한 러너',
      landingPattern: '힐스트라이크 (맥시멀 쿠셔닝)',
    },

    similarShoes: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v14', 'saucony-triumph-23'],
  },
  {
    id: 'puma-deviate-nitro-3',
    slug: 'puma-deviate-nitro-3',
    brand: 'Puma',
    name: '디비에이트 나이트로 3',
    image: '/images/shoes/puma/deviate_NITRO3.webp',
    images: [
      '/images/shoes/puma/deviatenitro3/side.webp',
      '/images/shoes/puma/deviatenitro3/front.webp',
      '/images/shoes/puma/deviatenitro3/back.webp',
      '/images/shoes/puma/deviatenitro3/top.webp',
      '/images/shoes/puma/deviatenitro3/outsole.webp',
    ],
    category: '쿠션화',
    rating: 4,
    price: 219000,
    description: '푸마의 슈퍼트레이너로, Nitro Foam과 PWRPLATE로 레이싱화 수준의 반응성을 제공하면서도 내구성이 뛰어납니다.',
    tags: ['슈퍼트레이너', 'PWRPLATE', '템포 러닝'],

    specs: {
      weight: 268,
      cushioning: 8,
      responsiveness: 8,
      stability: 7,
      drop: 10,
      durability: 450,
    },

    biomechanics: {
      stackHeight: {
        heel: 37.4,
        forefoot: 27.3,
      },
      drop: 10.1,
      carbonPlate: true,
      plateType: 'curved',
      midsoleType: 'Nitro Foam + Nitro Elite',
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
      summerCompatibility: 'excellent',
    },

    targetUsers: {
      recommended: ['템포 훈련', '하프 마라톤', '슈퍼트레이너 필요', '중상급 러너'],
      notRecommended: ['입문 러너', '느린 회복 러닝', '최대 쿠셔닝 필요'],
    },

    features: ['Nitro Foam + Nitro Elite 듀얼폼', '카본 플레이트 (PWRPLATE)', '훈련용 내구성'],

    priceAnalysis: {
      msrp: 219000,
      streetPrice: 185000,
      costPerKm: 410,
      valueRating: 7,
      priceTier: 'high',
      alternatives: ['nike-vomero-18', 'asics-superblast-2', 'hoka-mach-x-3'],
    },

    reviews: [
      {
        userType: '중상급 러너',
        rating: 4,
        text: '템포 훈련용으로 좋아요. PWRPLATE가 추진력을 더해주고, 엘리트 버전보다 내구성이 좋아서 훈련용으로 적합합니다.',
      },
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 87,
        text: '"카본 슈퍼트레이너 뭐가 좋아요?" 질문에 가성비 좋은 선택입니다. 22만원으로 마하 X(27만원), 슈퍼블라스트 2(26만원)보다 저렴합니다. Nitro Foam + Nitro Elite 듀얼폼에 카본 플레이트(PWRPLATE)로 레이싱화 수준의 반응성을 제공합니다. 268g 무게로 템포 훈련과 하프 마라톤까지 활용 가능합니다. 발볼이 좁은 편이라 한국인 발에는 반사이즈 업 고려하세요. 가성비 좋은 카본 슈퍼트레이너를 찾는 중상급 러너에게 추천합니다.',
      },
    ],

    detailedSpecs: {
      weight: '268g (남성 US 9 기준)',
      stackHeight: '힐 37.4mm / 포어풋 27.3mm',
      drop: '10.1mm (Lab 측정치)',
      midsole: 'Nitro Foam + Nitro Elite 듀얼폼',
      plate: '카본 플레이트 (PWRPLATE)',
      outsole: 'PumaGrip 러버',
      upper: '니트 어퍼',
      width: '좁음~표준',
      durability: '450km',
      price: '₩219,000 (MSRP) / 세일 시 ₩185,000~',
      costPerKm: '약 ₩410/km (450km 기준)',
      footType: '발볼 좁은~표준 / 중상급 러너',
      landingPattern: '미드풋~전방 착지',
    },

    similarShoes: ['nike-vomero-18', 'asics-superblast-2', 'hoka-mach-x-3', 'saucony-endorphin-speed-5'],
  },
  {
    id: 'puma-deviate-nitro-elite-3',
    slug: 'puma-deviate-nitro-elite-3',
    brand: 'Puma',
    name: '디비에이트 나이트로 엘리트 3',
    image: '/images/shoes/puma/deviate_NITROElite3.webp',
    images: [
      '/images/shoes/puma/deviatenitroelite3/side.webp',
      '/images/shoes/puma/deviatenitroelite3/front.webp',
      '/images/shoes/puma/deviatenitroelite3/back.webp',
      '/images/shoes/puma/deviatenitroelite3/top.webp',
      '/images/shoes/puma/deviatenitroelite3/outsole.webp',
    ],
    category: '레이싱',
    rating: 5,
    price: 289000,
    description: '푸마의 프리미엄 레이싱화로, A-TPU 기반 Nitro Elite 폼과 카본 플레이트로 77%의 놀라운 에너지 리턴을 제공합니다.',
    tags: ['레이싱', '카본 플레이트', 'Nitro Elite'],

    specs: {
      weight: 204,
      cushioning: 8,
      responsiveness: 10,
      stability: 6,
      drop: 11,
      durability: 300,
    },

    biomechanics: {
      stackHeight: {
        heel: 39.2,
        forefoot: 28.6,
      },
      drop: 10.6,
      carbonPlate: true,
      plateType: 'curved',
      midsoleType: 'Nitro Elite (A-TPU)',
      optimalPace: '3:30-4:30 min/km',
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
      summerCompatibility: 'excellent',
    },

    targetUsers: {
      recommended: ['마라톤 기록 단축', '하프/풀 마라톤 레이스', '엘리트 러너', '전방 착지 러너'],
      notRecommended: ['입문 러너', '회복 러닝', '일상 훈련', '넓은 발볼'],
    },

    features: ['Nitro Elite 폼 (A-TPU)', '카본 플레이트', '204g 초경량', '77% 에너지 리턴'],

    priceAnalysis: {
      msrp: 289000,
      streetPrice: 250000,
      costPerKm: 830,
      valueRating: 8,
      priceTier: 'premium',
      alternatives: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3'],
    },

    reviews: [
      {
        userType: '엘리트 러너',
        rating: 5,
        text: '베이퍼플라이보다 에너지 리턴이 좋다는 게 체감됩니다. 204g으로 가볍고 반발력이 정말 좋아요. 가격도 경쟁사보다 저렴해서 가성비 좋은 슈퍼슈즈입니다.',
      },
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 92,
        text: '"가성비 좋은 슈퍼슈즈 뭐가 좋아요?" 질문에 최고의 답변입니다. 29만원으로 베이퍼플라이 3(30만원), 메타스피드 스카이+(33만원)보다 저렴하면서 77%의 최고 수준 에너지 리턴을 제공합니다. 204g으로 베이퍼플라이(194g)와 비슷한 경량성, A-TPU 기반 Nitro Elite 폼으로 탄탄한 반발력을 제공합니다. 발볼이 좁아 한국인 발에는 반사이즈 업 필수입니다. 서브-4:00 목표의 하프/풀 마라톤 레이스에 강력 추천하는 가성비 슈퍼슈즈입니다.',
      },
    ],

    detailedSpecs: {
      weight: '204g (남성 US 9 기준)',
      stackHeight: '힐 39.2mm / 포어풋 28.6mm',
      drop: '10.6mm (Lab 측정치)',
      midsole: 'Nitro Elite 폼 (A-TPU 기반)',
      plate: '카본 플레이트 (풀 렝스)',
      outsole: 'PumaGrip 미니멀',
      upper: 'Ultraweave 경량 메쉬',
      width: '표준 (좁음)',
      durability: '300km (레이싱 전용)',
      price: '₩289,000 (MSRP) / 세일 시 ₩250,000~',
      costPerKm: '약 ₩830/km (300km 기준)',
      footType: '발볼 좁은 러너 / 반사이즈 업 권장',
      landingPattern: '전방 착지 (레이싱)',
    },

    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3', 'saucony-endorphin-pro-4'],
  },
  {
    id: 'puma-fast-r-nitro-elite-3',
    slug: 'puma-fast-r-nitro-elite-3',
    brand: 'Puma',
    name: '패스트알 나이트로 엘리트 3',
    image: '/images/shoes/puma/fAST-R_NITROElite3.webp',
    images: [
      '/images/shoes/puma/fastrnitroelite3/side.webp',
      '/images/shoes/puma/fastrnitroelite3/front.webp',
      '/images/shoes/puma/fastrnitroelite3/back.webp',
      '/images/shoes/puma/fastrnitroelite3/top.webp',
      '/images/shoes/puma/fastrnitroelite3/outsole.webp',
    ],
    category: '레이싱',
    rating: 4,
    price: 379000,
    description: '푸마의 마라톤 특화 슈퍼슈즈로, 최대 스택(40mm)과 카본 플레이트로 장거리 레이스에 최적화되어 있습니다.',
    tags: ['마라톤', '카본 플레이트', '맥시멀 스택'],

    specs: {
      weight: 173,
      cushioning: 9,
      responsiveness: 9,
      stability: 6,
      drop: 8,
      durability: 250,
    },

    biomechanics: {
      stackHeight: {
        heel: 38.5,
        forefoot: 30.2,
      },
      drop: 8.3,
      carbonPlate: true,
      plateType: 'curved',
      midsoleType: 'Nitro Elite (A-TPU)',
      optimalPace: '3:00-4:30 min/km',
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
      summerCompatibility: 'excellent',
    },

    targetUsers: {
      recommended: ['풀 마라톤 레이스', '엘리트 러너', '장거리 레이싱', '서브-3 목표'],
      notRecommended: ['입문 러너', '짧은 거리', '일상 훈련', '넓은 발볼'],
    },

    features: ['Nitro Elite 폼', '카본 플레이트', '40mm 맥시멀 스택', '마라톤 특화'],

    priceAnalysis: {
      msrp: 299000,
      streetPrice: 260000,
      costPerKm: 1040,
      valueRating: 6,
      priceTier: 'premium',
      alternatives: ['nike-alphafly-3', 'asics-metaspeed-edge-plus', 'new-balance-sc-elite-v5'],
    },

    reviews: [
      {
        userType: '마라톤 러너',
        rating: 4,
        text: '버전 2 대비 무게가 대폭 줄어서 놀랍습니다. 에너지 리턴 80% 이상으로 반응성이 뛰어나고, 5K/10K부터 풀 마라톤까지 활용 가능해요.',
      },
      {
        userType: 'RunRepeat 전문 리뷰어',
        rating: 89,
        text: '푸마 최상위 풀 마라톤 레이싱화입니다. 173g으로 알파플라이 3(190g)보다 가볍고, 80% 이상의 에너지 리턴으로 최고 수준의 반발력을 제공합니다. 38만원으로 알파플라이 3(37만원)과 비슷한 가격대이지만, 무게와 에너지 리턴에서 우위입니다. 8.3mm의 낮은 드롭으로 전방 착지 러너에게 적합합니다. 발볼이 좁아 한국인 발에는 반사이즈 업 필수입니다. 서브-3:00을 목표로 하는 엘리트 러너의 풀 마라톤 레이스용으로 추천합니다.',
      },
    ],

    detailedSpecs: {
      weight: '173g (남성 US 9 기준, Lab 측정)',
      stackHeight: '힐 38.5mm / 포어풋 30.2mm (Lab 측정)',
      drop: '8.3mm (Lab 측정)',
      midsole: 'Nitro Elite (A-TPU, 에너지 리턴 80%+)',
      plate: 'PWRPLATE 카본 (익스텐디드 디자인)',
      outsole: 'PumaGrip 러버 (1.5mm)',
      upper: 'Ultraweave 메쉬 (4/5 통기성)',
      width: '표준 (좁음)',
      durability: '250km (레이싱 전용)',
      price: '₩379,000 (MSRP) / 세일 시 ₩260,000~',
      costPerKm: '약 ₩1,040/km (250km 기준)',
      footType: '발볼 좁은 러너 / 반사이즈 업 필수',
      landingPattern: '전방 착지 (풀 마라톤 레이싱)',
    },

    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-edge-plus', 'new-balance-sc-elite-v5', 'saucony-endorphin-elite-2'],
  }
];
