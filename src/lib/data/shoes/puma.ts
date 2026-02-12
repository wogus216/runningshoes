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
    oneliner: '224g에 67.5% 리턴, 14만원대 가성비 최강 데일리 트레이너',
    editorComment: '페가수스 41(281g)보다 57g 가볍고, 67.5% 에너지 리턴은 입문화 카테고리에서 독보적인 수치입니다. 세일가 14만원대면 페가수스(₩159,000), 노바블라스트(₩169,000)보다 저렴하면서 성능은 동급 이상입니다. 풀 Nitro Foam으로 전작의 듀얼 폼 구조에서 단일 폼으로 바뀌면서 반응성이 한층 직관적이 됐습니다. 치명적 약점은 좁은 토박스로, 발볼 넓은 한국 러너는 와이드 모델을 반드시 선택해야 합니다. 통기성이 최상위급이라 한국 여름 러닝에 특히 적합합니다.',
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
        text: '페가수스 41에서 갈아탔는데 57g 차이가 발에서 바로 느껴집니다. 224g은 신발을 안 신은 것 같아요. 주 4회 한강 여의도~마포대교 8km를 5분 페이스로 뛰는데, 풀 Nitro Foam이 전작 듀얼 폼보다 반응성이 직관적이에요. 세일가 14만원에 이 성능이면 페가수스(15만 9천원)보다 확실히 가성비 좋습니다. 265mm D 사이즈인데 토박스가 좁아서 와이드를 살 걸 후회해요.',
      },
      {
        userType: '템포 러너',
        rating: 5,
        text: '서울숲 야간 런 주 2회, 성수대교~뚝섬 코스에서 PumaGrip의 진가가 나옵니다. 비 온 뒤 젖은 보도블록에서도 미끄러짐 제로예요. 10km 44분 템포런까지 커버 가능한 만능 트레이너입니다. 8월 습도 80% 서울 야간에도 통기성이 최상이라 발이 쾌적해요. 한국 여름 러닝에 이만한 데일리 트레이너는 못 찾았습니다. 500km 좀 넘게 신었는데 아웃솔 마모도 적은 편이에요.',
      },
      {
        userType: '에디터 분석',
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
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/x2cZ9hMP' }],
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
    oneliner: '엘리트 슈퍼폼 + 훈련용 내구성, 두 마리 토끼 잡기',
    editorComment: '디비에이트 엘리트의 Nitro Elite Foam을 훈련용 내구성(500km) 위에 올려놓은 하이브리드 구조가 매그맥스의 정체성입니다. 23만 9천원은 슈퍼블라스트 2(₩259,000)보다 2만원 저렴하지만, TPU 플레이트(PWRPLATE)라 카본 슈퍼트레이너 대비 반발력에서 한 수 뒤집니다. 268g은 장거리 템포 훈련에 적당한 무게이고, PumaGrip 아웃솔의 접지력은 젖은 노면에서도 신뢰할 수 있습니다. 발볼은 표준 수준이라 한국 러너 대부분이 편하게 착용 가능하며, 레이싱이 아닌 훈련 중심 러너에게 실용적입니다.',
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
        text: '디비에이트 엘리트 3를 레이스 전용으로 쓰면서, 매그맥스를 훈련용으로 병행합니다. 엘리트 버전의 Nitro Elite Foam이 그대로 들어가 있어서 착지감이 거의 같은데, 500km 내구성이라 훈련에서 마음 편히 밟을 수 있어요. 대전 갑천 러닝코스 주 3회 15km 장거리 템포를 4분50초 페이스로 돌리는데, TPU 플레이트가 카본만큼은 아니지만 충분한 추진력을 줍니다. 268g이 장거리에서 오히려 안정감 있게 느껴져요.',
      },
      {
        userType: '에디터 분석',
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
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKZ52' }],
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
    oneliner: 'PEBA 맥시멀 쿠션을 20만원 이하에, 관절 보호의 가성비파',
    editorComment: '40mm 맥시멀 스택에 PEBA 기반 Nitro Foam을 19만 9천원에 제공하는 건 Bondi 9(₩220,000)이나 님버스 28(₩259,000)과 비교할 때 확실한 가격 우위입니다. 부상 예방 전 항목 excellent 등급은 관절 보호가 절실한 러너에게 안심을 줍니다. 264g은 맥시멀 쿠션화 중 가벼운 축에 속하고, 통기성이 최상위급이라 한국 여름에도 쾌적합니다. 와이드 옵션이 없는 점이 아쉽지만 표준 발볼 기준으로는 편안하며, 빠른 페이스에는 부적합한 순수 쿠셔닝 신발이라는 포지션이 명확합니다.',
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
        text: '무릎 퇴행성 관절염 초기 진단 후 의사가 맥시멀 쿠션화를 권유해서 골랐습니다. 본디 9이 22만원, 님버스 28이 25만 9천원인데 매그니파이는 19만 9천원으로 확실히 저렴해요. 주말 안양천 러닝코스 20km LSD를 6분 페이스로 뛰는데, 40mm PEBA 폼이 15km 이후에도 무릎 충격을 잡아줍니다. 세일가 17만원대로 구매하면 맥시멀 쿠션화 중 가성비 최고예요. 264g은 맥시멀치고 가벼운 편이고, 여름 통기성도 우수해서 사계절 장거리 파트너로 쓰고 있어요.',
      },
      {
        userType: '에디터 분석',
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
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBK16h' }],
  },
  {
    id: 'puma-deviate-nitro-4',
    slug: 'puma-deviate-nitro-4',
    brand: 'Puma',
    name: '디비에이트 나이트로 4',
    image: '/images/shoes/puma/deviatenitro4/side.webp',
    images: [
      '/images/shoes/puma/deviatenitro4/side.webp',
      '/images/shoes/puma/deviatenitro4/front.webp',
      '/images/shoes/puma/deviatenitro4/back.webp',
      '/images/shoes/puma/deviatenitro4/angle.webp',
      '/images/shoes/puma/deviatenitro4/top.webp',
    ],
    category: '쿠션화',
    rating: 4.5,
    price: 219000,
    description: '푸마의 슈퍼트레이너로, 듀얼 레이어 NITROFOAM과 카본 합성 PWRPLATE로 업템포 트레이닝에 최적화된 반응성과 쿠셔닝을 제공합니다. 전작 대비 더 넓어진 핏과 부드러워진 착화감이 특징입니다.',
    oneliner: 'PEBAX 듀얼폼 + 카본 PWRPLATE, 800km 내구성 슈퍼트레이너',
    editorComment: '전작의 좁은 핏이라는 고질적 약점을 해결하면서 800km 내구성을 달성한 것이 v4의 가장 큰 진보입니다. 상단 PEBAX 100% 폼이 착지를 부드럽게 받아주고 하단 PEBA 블렌드가 추진력을 더하는 구조가 합리적입니다. 21만 9천원은 엔돌핀 스피드 5(₩219,000)와 동일 가격이지만, 카본 합성 PWRPLATE와 800km 내구성(스피드5는 500km)에서 차별화됩니다. 드롭이 v3의 10mm에서 8mm로 줄어 더 자연스러운 전환감을 주고, 와이드 옵션까지 있어 한국 러너 발볼 걱정을 덜었습니다.',
    tags: ['슈퍼트레이너', 'PWRPLATE', '업템포 러닝', '듀얼폼'],

    specs: {
      weight: 250,
      cushioning: 8,
      responsiveness: 9,
      stability: 7,
      drop: 8,
      durability: 800,
    },

    biomechanics: {
      stackHeight: {
        heel: 38,
        forefoot: 30,
      },
      drop: 8,
      carbonPlate: true,
      plateType: 'curved',
      midsoleType: 'Dual-Layer NITROFOAM (PEBAX + PEBA)',
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
      wideOptions: true,
      winterCompatibility: 'good',
      summerCompatibility: 'excellent',
    },

    targetUsers: {
      recommended: ['업템포 트레이닝', '템포 러닝', '하프 마라톤', '중상급 러너', 'PR 추구 러너'],
      notRecommended: ['입문 러너', '느린 회복 러닝', '최대 쿠셔닝 필요'],
    },

    features: ['듀얼 레이어 NITROFOAM (PEBAX/PEBA)', '카본 합성 PWRPLATE', 'PUMAGRIP 아웃솔', '전작 대비 넓어진 핏', '8mm 드롭 (v3 대비 2mm 감소)'],

    priceAnalysis: {
      msrp: 219000,
      streetPrice: 190000,
      costPerKm: 274,
      valueRating: 8,
      priceTier: 'high',
      alternatives: ['saucony-endorphin-speed-5', 'asics-sonicblast', 'nike-zoom-fly-6'],
    },

    reviews: [
      {
        userType: '중상급 러너',
        rating: 4.5,
        text: '디비에이트 v3를 1년 넘게 신다가 v4로 갈아탔습니다. v3의 가장 큰 불만이었던 좁은 핏이 확 개선됐어요. 275mm 표준으로 충분하고 발볼 105mm인 제 발에도 여유 있습니다. 주 3회 과천 서울대공원 둘레길 12km 업템포 훈련에 쓰는데, 상단 PEBAX 폼이 착지를 부드럽게 받아주면서 하단 PEBA가 확 밀어주는 이중 구조가 체감돼요. 800km 내구성은 엔돌핀 스피드 5(500km)보다 300km 더 오래 신을 수 있다는 뜻이라 훈련용으로는 더 경제적입니다.',
      },
      {
        userType: 'Believe in the Run',
        rating: 80,
        text: '역대 최고의 Deviate Nitro입니다. 전작의 좁은 핏 문제를 해결했고, 상단에 PEBAX 기반 폼을 배치해 착지감이 부드러워졌습니다. 드롭이 10mm에서 8mm로 줄어 더 자연스러운 주행감을 제공합니다. $180 가격대에서 Endorphin Speed 5, Asics Sonicblast와 경쟁해야 하지만, PumaGrip 아웃솔의 뛰어난 접지력과 800km 내구성은 강점입니다. 데일리 트레이너와 업템포 러닝을 겸하는 만능 슈퍼트레이너로 추천합니다.',
      },
    ],

    detailedSpecs: {
      weight: '250g (UK 8 기준, 한국 공식)',
      stackHeight: '힐 38mm / 포어풋 30mm',
      drop: '8mm (v3 대비 2mm 감소)',
      midsole: '듀얼 레이어 NITROFOAM (상단 PEBAX 100%, 하단 PEBA 블렌드)',
      plate: '카본 합성 PWRPLATE',
      outsole: 'PUMAGRIP 러버',
      upper: '엔지니어드 메쉬 + PWRTAPE (20% 재활용 소재)',
      width: '표준 (v3 대비 넓어짐, 와이드 옵션 있음)',
      durability: '800km',
      price: '₩219,000 (MSRP) / 세일 시 ₩190,000~',
      costPerKm: '약 ₩274/km (800km 기준)',
      footType: '표준~넓은 발볼 / 와이드 옵션 있음',
      landingPattern: '힐스트라이크~미드풋',
    },

    similarShoes: ['saucony-endorphin-speed-5', 'asics-sonicblast', 'nike-zoom-fly-6', 'hoka-mach-x-3'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBK3Ul' }],
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
    oneliner: '22만원대 카본 슈퍼트레이너, 마하X보다 5만원 절약',
    editorComment: '마하 X(₩269,000)나 슈퍼블라스트 2(₩259,000)보다 3~5만원 저렴한 21만 9천원에 카본 PWRPLATE 슈퍼트레이너를 경험할 수 있습니다. Nitro Foam + Nitro Elite 듀얼폼이 레이싱화 수준의 반응성을 훈련에서 구현하고, 268g은 템포런에 투입 가능한 무게입니다. 세일가 18만 5천원까지 내려가면 가성비는 더욱 극대화됩니다. 발볼이 좁은~표준 수준이라 발이 넓은 한국 러너는 반사이즈 업을 고려하세요. v4가 출시되며 핏이 개선됐으니 비교 검토를 추천합니다.',
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
        text: '엔돌핀 스피드 4가 500km 되어 교체하면서 v3를 세일가 18만 5천원에 잡았습니다. 카본 PWRPLATE가 주는 추진력은 엔돌핀 스피드와 비슷하면서, Nitro Foam 듀얼폼의 착지감이 좀 더 단단하고 직접적이에요. 인천 송도 센트럴파크 주 2회 10km 하프마라톤 페이스 훈련에 쓰는데, 4분30초대 유지가 편합니다. 발볼이 좁은~표준이라 270mm인데 좀 빡빡해서 반사이즈 업을 권합니다. v4가 나와서 핏이 개선됐다는데 가격 차이 고려하면 세일 v3도 충분히 좋은 선택이에요.',
      },
      {
        userType: '에디터 분석',
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
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/5dA8sEdt' }],
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
    oneliner: '77% 에너지 리턴을 29만원에, 베이퍼플라이 킬러',
    editorComment: '베이퍼플라이 3(₩310,000)보다 2만원 저렴한 28만 9천원에 77% 에너지 리턴은 가성비 슈퍼슈즈의 정석입니다. A-TPU 기반 Nitro Elite 폼이 204g 경량에서 탄탄하고 직접적인 반발력을 제공하며, 이 느낌은 ZoomX의 부드러운 반발과는 성격이 다릅니다. 세일가 25만원대까지 내려가면 슈퍼슈즈 시장에서 가성비 1위라 해도 과언이 아닙니다. 토박스가 좁아 한국 러너 발볼에는 반사이즈 업이 필수이고, 겨울 경화에 약한 점은 한국 11월~3월 레이스에서 감안해야 합니다.',
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
        text: '2024 춘천 마라톤 서브3:05로 개인 기록 갱신한 신발입니다. 베이퍼플라이 3에서 넘어왔는데 77% 에너지 리턴은 허언이 아니에요. 35km 이후 리턴이 살아있는 느낌은 A-TPU 폼 특유의 탄탄한 반발 덕분입니다. 204g은 베이퍼플라이(194g)와 거의 같고, 29만원 vs 31만원 가격 차이도 작지 않아요. 세일가 25만원대에 잡으면 가성비 슈퍼슈즈 1위. 260mm 신는데 토박스가 좁아서 265mm로 올렸습니다. 한국인 발볼이면 무조건 반사이즈 업하세요.',
      },
      {
        userType: '에디터 분석',
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
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBK5Yh' }],
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
    oneliner: '173g 초경량 + 80%+ 리턴, 알파플라이에 도전하는 푸마의 최종 무기',
    editorComment: '173g이라는 무게는 알파플라이 3(190g)보다 17g 가볍고, 80% 이상 에너지 리턴은 슈퍼슈즈 시장 최상위권입니다. 37만 9천원은 알파플라이 3(₩370,000)과 거의 같은 가격대이지만, 순수 무게와 에너지 리턴 수치에서 앞섭니다. 익스텐디드 디자인의 PWRPLATE 카본이 마라톤 후반부까지 추진력을 유지시키고, 1.5mm PumaGrip 아웃솔이 최소한의 무게로 접지력을 확보합니다. 250km 내구성과 좁은 토박스는 이 신발이 오직 서브3 레이스데이 전용 무기임을 선언하며, 한국 러너 발볼에는 반사이즈 업이 필수입니다.',
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
      msrp: 379000,
      streetPrice: 260000,
      costPerKm: 1516,
      valueRating: 5,
      priceTier: 'super-premium',
      alternatives: ['nike-alphafly-3', 'asics-metaspeed-edge-plus', 'new-balance-sc-elite-v5'],
    },

    reviews: [
      {
        userType: '마라톤 러너',
        rating: 4,
        text: '알파플라이 3(190g)에서 갈아탄 서브2:50 러너입니다. 173g은 손에 들면 "이게 러닝화 맞나" 싶을 정도로 가벼워요. 2025 동아 서울마라톤에서 쓸 예정인데, 2월 영하 날씨에서 테스트 했더니 폼이 확 딱딱해지더라고요. 겨울 경화에 약한 게 아쉬운 점이에요. 10월 대구나 4월 서울 레이스처럼 10~15도 기온에서는 80%+ 에너지 리턴이 폭발적입니다. 37만 9천원에 250km 내구성이라 km당 1,516원인데, 기록 경신 한 번이면 본전 뽑는다고 생각합니다.',
      },
      {
        userType: '에디터 분석',
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
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBK6Nc' }],
  }
];
