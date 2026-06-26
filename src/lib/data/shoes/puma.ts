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
    editorComment: '페가수스 41(281g)보다 57g 가볍고, 67.5% 에너지 리턴은 입문화 카테고리에서 독보적인 수치입니다. 세일가 14만원대면 페가수스(₩159,000), 노바블라스트(₩169,000)보다 저렴하면서 성능은 동급 이상입니다. 풀 Nitro Foam으로 전작의 듀얼 폼 구조에서 단일 폼으로 바뀌면서 반응성이 한층 직관적이 됐습니다. 치명적 약점은 좁은 토박스로, 발볼 넓은 한국 러너는 와이드 모델을 반드시 선택해야 합니다. 통기성이 최상위급이라 한국 여름 러닝에 특히 적합합니다.\n\n사이즈·구매 가이드: 토박스가 좁은 편(narrow)이므로 발볼 넓은 러너는 와이드 모델을 반드시 선택하세요. 와이드 옵션이 있으니 매장 착화 후 결정을 권합니다. 179,000원 ÷ 500km = km당 약 358원입니다. 비슷한 경량 데일리 대안으로는 노바블라스트 5와 마하 6을 비교해보세요.',
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
      msrp: 179000,
      streetPrice: 140000,
      costPerKm: 358,
      valueRating: 10,
      priceTier: 'mid',
      alternatives: ['nike-pegasus-41', 'asics-novablast-5', 'new-balance-rebel-v5'],
    },

    reviews: [
      {
        userType: '중급 러너',
        rating: 5,
        text: '페가수스 41에서 갈아탔는데 57g 차이가 발에서 바로 느껴집니다. 224g은 신발을 안 신은 것 같아요. 주 4회 한강 여의도~마포대교 8km를 5분 페이스로 뛰는데, 풀 Nitro Foam이 전작 듀얼 폼보다 반응성이 직관적이에요. 34mm 힐 스택에서 나오는 쿠셔닝이 무릎 충격을 적절히 흡수해주면서도 반응성 67.5% 에너지 리턴으로 빠져나가는 느낌이 좋습니다. 세일가 140,000원에 이 성능이면 페가수스(159,000원)보다 확실히 가성비 좋습니다. 265mm D 사이즈인데 토박스가 좁아서 와이드를 살 걸 후회해요. 한국 러너라면 발볼 확인 후 와이드 모델을 강력 추천합니다. 500km 넘게 신어도 아웃솔 마모가 적어서 내구성도 만족스럽습니다.',
      },
      {
        userType: '템포 러너',
        rating: 5,
        text: '서울숲 야간 런 주 2회, 성수대교~뚝섬 코스에서 PumaGrip의 진가가 나옵니다. 비 온 뒤 젖은 보도블록에서도 미끄러짐 제로예요. 10km 44분 템포런까지 커버 가능한 만능 트레이너입니다. 224g 경량에 10mm 드롭 구성이라 힐스트라이크부터 미드풋까지 다양한 착지에 대응합니다. 8월 습도 80% 서울 야간에도 통기성이 최상이라 발이 쾌적해요. 한국 여름 러닝에 이만한 데일리 트레이너는 못 찾았습니다. 500km 좀 넘게 신었는데 아웃솔 마모도 적은 편이에요. 토박스가 좁은 편이라 발볼 넓은 분은 와이드 필수이고, 무릎이 약한 러너라면 34mm 스택의 충격흡수력이 도움됩니다. 가성비로는 179,000원 정가도 훌륭한데 세일가 14만원대면 진짜 가격 파괴예요.',
      },
      {
        userType: '에디터 분석',
        rating: 90,
        text: '2025년 최고의 가성비 데일리 트레이너로 강력 추천합니다. "15만원대 가볍고 반응 좋은 신발 없나요?" 질문에 정답입니다. 224g으로 페가수스(281g)보다 57g 가볍고, 67.5%의 뛰어난 에너지 리턴을 제공합니다. 발볼이 좁은 편이라 한국인 발에는 와이드 모델 권장합니다. 토박스 폭이 좁아 한국 러너 평균 발볼에 맞지 않을 수 있으니 매장 착화 필수입니다. 140,000원대(세일가)로 페가수스(159,000원), 노바블라스트(169,000원)보다 저렴하면서 성능은 동급이상. 500km 내구성으로 km당 약 358원의 가성비는 입문화~중급 카테고리 최상위입니다. 평발 러너에게도 무난하고, 무릎 부담이 적은 34mm 힐 스택이 장거리 훈련까지 소화합니다. 템포 러닝까지 커버하는 만능 트레이너로, 가성비 중시 중급 러너에게 최적입니다.',
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
      costPerKm: '약 ₩358/km (500km 기준)',
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
    editorComment: '디비에이트 엘리트의 Nitro Elite Foam을 훈련용 내구성(500km) 위에 올려놓은 하이브리드 구조가 매그맥스의 정체성입니다. 23만 9천원은 슈퍼블라스트 2(₩259,000)보다 2만원 저렴하지만, TPU 플레이트(PWRPLATE)라 카본 슈퍼트레이너 대비 반발력에서 한 수 뒤집니다. 268g은 장거리 템포 훈련에 적당한 무게이고, PumaGrip 아웃솔의 접지력은 젖은 노면에서도 신뢰할 수 있습니다. 발볼은 표준 수준이라 한국 러너 대부분이 편하게 착용 가능하며, 레이싱이 아닌 훈련 중심 러너에게 실용적입니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이며 와이드 옵션은 없으나 표준 발볼 러너는 정사이즈로 편하게 착용 가능합니다. 239,000원 ÷ 500km = km당 약 478원입니다. 카본 플레이트 슈퍼트레이너를 원하면 디비에이트 나이트로 4, 더 부드러운 쿠션을 원하면 슈퍼블라스트 2를 비교해보세요.',
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
      costPerKm: 478,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['nike-vomero-18', 'asics-superblast-2', 'hoka-mach-x-3'],
    },

    reviews: [
      {
        userType: '중상급 러너',
        rating: 4,
        text: '디비에이트 엘리트 3를 레이스 전용으로 쓰면서, 매그맥스를 훈련용으로 병행합니다. 엘리트 버전의 Nitro Elite Foam이 그대로 들어가 있어서 착지감이 거의 같은데, 500km 내구성이라 훈련에서 마음 편히 밟을 수 있어요. 대전 갑천 러닝코스 주 3회 15km 장거리 템포를 4분50초 페이스로 돌리는데, TPU 플레이트가 카본만큼은 아니지만 충분한 추진력을 줍니다. 268g이 장거리에서 오히려 안정감 있게 느껴져요. 37mm 힐 스택에서 나오는 쿠셔닝이 무릎 충격을 잘 흡수해줘서 20km 넘는 LSD에서도 관절 부담이 적습니다. 발볼은 표준 수준이라 한국 러너 평균 발에 잘 맞고, 토박스 여유도 있어서 와이드 모델 없이도 충분합니다. 가성비 따지면 슈퍼블라스트 2(26만원)보다 2만원 저렴하면서 훈련용 내구성은 더 뛰어나요.',
      },
      {
        userType: '에디터 분석',
        rating: 86,
        text: '"슈퍼트레이너 필요한데 뭐가 좋을까요?" 질문에 가성비 좋은 선택입니다. 239,000원으로 보메로 18(23만원), 슈퍼블라스트 2(26만원)와 비슷한 가격대입니다. Nitro Elite Foam + TPU 플레이트로 레이싱화 느낌의 반응성을 훈련에서 경험할 수 있습니다. 268g으로 적당한 무게감, 내구성 500km로 km당 약 478원의 훈련용 가성비가 뛰어납니다. 37mm 힐 스택이 무릎 보호에 효과적이고, 발볼은 표준 수준이라 한국 러너 대부분이 편하게 착용 가능합니다. 다만 TPU 플레이트라 카본 슈퍼트레이너(마하X, 슈퍼블라스트)보다는 반발력이 약하고, 평발 러너에게는 추가 인솔을 권합니다. 토박스 폭이 넉넉한 편이라 발볼 넓은 러너도 무난하게 신을 수 있어요. 장거리 템포 훈련 중심 러너에게 추천합니다.',
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
      costPerKm: '약 ₩478/km (500km 기준)',
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
    editorComment: '40mm 맥시멀 스택에 PEBA 기반 Nitro Foam을 19만 9천원에 제공하는 건 Bondi 9(₩220,000)이나 님버스 28(₩259,000)과 비교할 때 확실한 가격 우위입니다. 부상 예방 전 항목 excellent 등급은 관절 보호가 절실한 러너에게 안심을 줍니다. 264g은 맥시멀 쿠션화 중 가벼운 축에 속하고, 통기성이 최상위급이라 한국 여름에도 쾌적합니다. 와이드 옵션이 없는 점이 아쉽지만 표준 발볼 기준으로는 편안하며, 빠른 페이스에는 부적합한 순수 쿠셔닝 신발이라는 포지션이 명확합니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이며 와이드 옵션은 없습니다. 발볼이 넓은 편이라면 매장 착화 후 결정하세요. 199,000원 ÷ 500km = km당 약 398원으로 맥시멀 쿠션화 중 가성비가 뛰어납니다. 같은 가격대에서 더 강한 반발감을 원하면 1080 V14, 예산을 높여 최고 쿠션을 원하면 본디 9을 비교해보세요.',
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
      costPerKm: 398,
      valueRating: 7,
      priceTier: 'mid',
      alternatives: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v14'],
    },

    reviews: [
      {
        userType: '장거리 러너',
        rating: 4,
        text: '무릎 퇴행성 관절염 초기 진단 후 의사가 맥시멀 쿠션화를 권유해서 골랐습니다. 본디 9이 220,000원, 님버스 28이 259,000원인데 매그니파이는 199,000원으로 확실히 저렴해요. 주말 안양천 러닝코스 20km LSD를 6분 페이스로 뛰는데, 40mm PEBA 폼이 15km 이후에도 무릎 충격을 잡아줍니다. 세일가 170,000원대로 구매하면 맥시멀 쿠션화 중 가성비 최고예요. 264g은 맥시멀치고 가벼운 편이고, 여름 통기성도 우수해서 사계절 장거리 파트너로 쓰고 있어요. 발볼은 표준 수준이라 한국 러너 평균 발에 잘 맞고, 토박스도 압박감 없이 편안합니다. 평발인 제 발에도 10mm 드롭이 안정적인 착지를 잡아주며, 500km 넘게 신어도 쿠셔닝 저하가 거의 없어요.',
      },
      {
        userType: '에디터 분석',
        rating: 84,
        text: '"무릎 아픈데 푹신한 신발 추천해주세요" 질문에 가성비 좋은 선택입니다. 199,000원으로 40mm 맥시멀 스택과 PEBA 기반 쿠셔닝을 제공합니다. 본디 9(220,000원), 님버스 28(259,000원)과 비교해 비슷한 수준의 보호력을 3~6만원 저렴하게 제공하는 가성비가 돋보입니다. 264g으로 약간 무거운 편이지만, 장거리나 회복 러닝에 초점을 맞춘 신발입니다. 500km 내구성으로 km당 약 398원이면 맥시멀 쿠션화 카테고리에서 합리적인 가격입니다. 발볼은 표준 수준이라 한국 러너 대부분 무난하게 착용 가능하고, 토박스 여유도 적절합니다. 평발 러너에게도 호환성이 좋고 무릎 보호가 절실한 러너에게 특히 추천합니다. 빠른 페이스에는 부적합하므로, 관절 보호가 필요한 장거리 러너나 회복 러닝용으로 추천합니다.',
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
      costPerKm: '약 ₩398/km (500km 기준)',
      footType: '표준 발볼 / 평발 OK / 관절 보호 필요한 러너',
      landingPattern: '힐스트라이크 (맥시멀 쿠셔닝)',
    },

    similarShoes: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v14', 'saucony-triumph-23'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBK16h' }],
  },
  {
    id: 'puma-deviate-pure-nitro',
    slug: 'puma-deviate-pure-nitro',
    brand: 'Puma',
    name: '디비에이트 나이트로 퓨어',
    image: '/images/shoes/puma/deviate-pure-nitro/side.webp',
    images: [
      '/images/shoes/puma/deviate-pure-nitro/side.webp',
      '/images/shoes/puma/deviate-pure-nitro/front.webp',
      '/images/shoes/puma/deviate-pure-nitro/back.webp',
      '/images/shoes/puma/deviate-pure-nitro/angle.webp',
      '/images/shoes/puma/deviate-pure-nitro/outsole.webp',
    ],
    category: '데일리',
    rating: 4.5,
    price: 189000,
    description: '디비에이트 나이트로 4에서 카본 PWRPLATE를 덜어낸 "플레이트 없는" 버전입니다. 100% PEBA NITROFOAM 단일 폼으로 220g 경량을 달성해, 데일리 러닝부터 스피드 훈련까지 한 켤레로 소화하는 부드러운 슈퍼폼 트레이너입니다.',
    oneliner: '플레이트 없는 100% PEBA 슈퍼폼, 220g 경량 데일리+스피드',
    editorComment: '2026-06-04 출시 직후로 RunRepeat 랩 데이터 미게시 상태이며, SA/HA/에너지 리턴/토박스 너비 수치는 형제 모델(디비에이트 나이트로 4) 기준 추정치입니다. 퓨어의 핵심은 "카본 플레이트를 뺀 대신 100% PEBA 단일 폼"이라는 선택입니다. 디비4(250g)보다 30g 가벼운 220g에, 플레이트 경직감 없이 유연하고 부드러운 라이드를 줍니다. 18만 9천원으로 디비4(₩219,000)보다 3만원 저렴하면서 PEBA 폼·PUMAGRIP·800km 설계를 그대로 가져와 가성비가 뛰어납니다. Road Trail Run이 9.5~9.6/10을 줄 만큼 "슈퍼슈즈만큼 가볍고 재미있는데 비싸지 않다"는 평. 단, 플레이트가 없어 탄탄하고 직접적인 피드백을 원하면 디비4가, 바닥감 명확한 레이싱은 엘리트 4가 낫습니다. 와이드 옵션은 출시 시점 미확인이라 발볼 넓은 러너는 매장 착화를 권합니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이나 와이드 옵션은 출시 시점 미확인이므로 발볼 넓은 러너는 매장에서 착화 후 결정하세요. 189,000원 ÷ 800km = km당 약 236원으로 데일리화 중 최고 수준의 가성비입니다. 플레이트 반발감을 원하면 디비에이트 나이트로 4, 더 부드러운 라이드를 유지하며 스택을 높이고 싶다면 마하 6을 비교해보세요.',
    tags: ['슈퍼폼 트레이너', 'PEBA', '무플레이트', '데일리+스피드'],

    specs: {
      weight: 220,
      cushioning: 8,
      responsiveness: 7,
      stability: 6,
      drop: 8,
      durability: 800,
    },

    biomechanics: {
      stackHeight: {
        heel: 38,
        forefoot: 30,
      },
      drop: 8,
      carbonPlate: false,
      midsoleType: '100% PEBA NITROFOAM (단일 폼, 무플레이트)',
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
      wideOptions: false,
      winterCompatibility: 'good',
      summerCompatibility: 'excellent',
    },

    targetUsers: {
      recommended: ['데일리 트레이닝', '템포·인터벌 변속 훈련', '가벼운 슈퍼폼 선호', '플레이트 경직감이 불편한 러너', '가성비 슈퍼폼 찾는 러너'],
      notRecommended: ['탄탄한 직접적 피드백 선호', '최대 안정성 필요', '바닥감 명확한 레이싱화 원하는 러너'],
    },

    features: ['100% PEBA NITROFOAM 단일 폼', '플레이트 없는 유연한 라이드', 'PUMAGRIP 아웃솔', '220g 경량 (디비4 대비 -30g)', '통기성 엔지니어드 메쉬 (재활용 소재)'],

    priceAnalysis: {
      msrp: 189000,
      streetPrice: 170000,
      costPerKm: 236,
      valueRating: 9,
      priceTier: 'mid',
      alternatives: ['puma-velocity-nitro-4', 'hoka-mach-6', 'saucony-ride-19'],
    },

    reviews: [
      {
        userType: 'Road Trail Run',
        rating: 95,
        text: '슈퍼슈즈만큼 가볍고 유연하며 재미있는데, 그렇게 비싸지도 않습니다. 100% PEBA 폼 기반이라 경량(US9 213g)이면서 쿠션과 에너지 리턴이 뛰어나고, 플레이트가 없어 자연스럽고 유연한 라이드를 줍니다. 데일리 트레이닝부터 어떤 거리의 레이스까지 망설임 없이 신을 수 있는 최상급 데일리 트레이너입니다. PUMAGRIP 아웃솔 커버리지가 넓어 젖은 노면에서도 그립이 좋습니다. 다만 "너무 부드럽다"고 느낄 수 있어, 탄탄한 라이드를 선호하는 러너에게는 맞지 않을 수 있습니다.',
      },
      {
        userType: '중급 러너',
        rating: 4.5,
        text: '카본 플레이트가 부담스러워서 무플레이트 슈퍼폼을 찾다가 골랐습니다. 220g이라 발이 가볍고, 100% PEBA 폼이 디비4보다 더 말랑하게 받아줘요. 한강 데일리 8~12km에 쓰는데 이지런도 편하고 중간에 페이스 올려도 폼이 따라옵니다. 플레이트 특유의 튕기는 느낌은 없지만 그게 오히려 매일 신기 편한 이유예요. 18만 9천원에 800km 설계라 km당 약 236원, 가성비가 좋습니다. 여름 통기성도 괜찮아서 더운 날 데일리로 제격입니다. 발볼은 표준이고 와이드가 아직 없어서 볼 넓은 분은 신어보고 사세요.',
      },
    ],

    detailedSpecs: {
      weight: '220g (UK8 공식) / 213g (US9 RTR 실측)',
      stackHeight: '힐 38mm / 포어풋 30mm (공식)',
      drop: '8mm (공식)',
      midsole: '100% PEBA NITROFOAM 단일 폼 (디비4의 듀얼폼과 달리 단일 구조)',
      plate: '없음 (디비4의 카본 PWRPLATE 제거)',
      outsole: 'PUMAGRIP 러버',
      upper: '경량 엔지니어드 메쉬 (재활용 소재, 통기성 우수)',
      width: '표준 (와이드 옵션 출시 시점 미확인)',
      durability: '약 800km (공식 설계)',
      price: '₩189,000 (MSRP)',
      costPerKm: '약 ₩236/km (800km 기준)',
      footType: '표준 발볼 (추정 토박스 ~70-72mm, 형제 모델 기준)',
      landingPattern: '미드풋~힐스트라이크',
    },

    similarShoes: ['puma-deviate-nitro-4', 'hoka-mach-6', 'saucony-endorphin-speed-5', 'saucony-ride-19'],
    purchaseLinks: [{ store: '푸마 공식', url: 'https://kr.puma.com/kr/ko/pd/deviate-pure-nitro/313904.html' }],
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
    editorComment: '전작의 좁은 핏이라는 고질적 약점을 해결하면서 800km 내구성을 달성한 것이 v4의 가장 큰 진보입니다. 상단 PEBAX 100% 폼이 착지를 부드럽게 받아주고 하단 PEBA 블렌드가 추진력을 더하는 구조가 합리적입니다. 21만 9천원은 엔돌핀 스피드 5(₩219,000)와 동일 가격이지만, 카본 합성 PWRPLATE와 800km 내구성(스피드5는 500km)에서 차별화됩니다. 드롭이 v3의 10mm에서 8mm로 줄어 더 자연스러운 전환감을 주고, 와이드 옵션까지 있어 한국 러너 발볼 걱정을 덜었습니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이며 v3 대비 개선된 핏과 와이드 옵션을 제공하므로 발볼 넓은 러너도 착용 가능합니다. 219,000원 ÷ 800km = km당 약 274원으로 카본 슈퍼트레이너 중 최고 가성비입니다. 카본 없이 더 가볍게 쓰고 싶다면 디비에이트 나이트로 퓨어, 같은 가격대에서 반발력을 극대화하려면 엔돌핀 스피드 5를 비교해보세요.',
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
        text: '디비에이트 v3를 1년 넘게 신다가 v4로 갈아탔습니다. v3의 가장 큰 불만이었던 좁은 핏이 확 개선됐어요. 275mm 표준으로 충분하고 발볼 105mm인 제 발에도 토박스 여유가 있습니다. 주 3회 과천 서울대공원 둘레길 12km 업템포 훈련에 쓰는데, 상단 PEBAX 폼이 착지를 부드럽게 받아주면서 하단 PEBA가 확 밀어주는 이중 구조가 체감돼요. 250g 무게에 38mm 힐 스택이라 무릎 충격 흡수도 좋고, 8mm 드롭이 v3의 10mm보다 자연스러운 전환감을 줍니다. 800km 내구성은 엔돌핀 스피드 5(500km)보다 300km 더 오래 신을 수 있어서 가성비 면에서 확실히 경제적입니다. 219,000원 정가에 km당 약 274원이면 카본 슈퍼트레이너 중 최고 수준의 가성비예요. 와이드 옵션도 있어서 발볼 넓은 한국 러너에게도 추천할 수 있는 슈퍼트레이너입니다.',
      },
      {
        userType: 'Believe in the Run',
        rating: 80,
        text: '역대 최고의 Deviate Nitro입니다. 전작의 좁은 핏 문제를 해결했고, 상단에 PEBAX 기반 폼을 배치해 착지감이 부드러워졌습니다. 8mm 드롭으로 v3의 10mm에서 줄어 더 자연스러운 전환감을 제공합니다. 219,000원 가격대에서 엔돌핀 스피드 5, 소닉블라스트와 경쟁해야 하지만, PumaGrip 아웃솔의 뛰어난 접지력과 800km 내구성은 km당 약 274원의 가성비를 만들어냅니다. 한국 러너 관점에서 와이드 옵션이 있다는 점이 큰 장점이고, 발볼 넓어도 토박스 불편함 없이 착용 가능합니다. 38mm 힐 스택의 쿠셔닝이 무릎 관절 보호에 효과적이고, 250g 무게로 데일리 트레이너와 업템포 러닝을 겸하는 만능 슈퍼트레이너입니다. 평발 러너에게도 안정성이 무난하며, 반응성을 동시에 원하는 중상급 러너에게 추천합니다.',
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
    editorComment: '마하 X(₩269,000)나 슈퍼블라스트 2(₩259,000)보다 3~5만원 저렴한 21만 9천원에 카본 PWRPLATE 슈퍼트레이너를 경험할 수 있습니다. Nitro Foam + Nitro Elite 듀얼폼이 레이싱화 수준의 반응성을 훈련에서 구현하고, 268g은 템포런에 투입 가능한 무게입니다. 세일가 18만 5천원까지 내려가면 가성비는 더욱 극대화됩니다. 발볼이 좁은~표준 수준이라 발이 넓은 한국 러너는 반사이즈 업을 고려하세요. v4가 출시되며 핏이 개선됐으니 비교 검토를 추천합니다.\n\n사이즈·구매 가이드: 토박스가 좁은~표준(standard) 수준이며 와이드 옵션이 없어 발볼 넓은 러너는 반사이즈 업을 고려하거나 v4(와이드 옵션 있음)를 검토하세요. 219,000원 ÷ 450km = km당 약 487원입니다. 핏이 개선된 최신 버전을 원하면 디비에이트 나이트로 4, 카본 없이 비용을 줄이려면 슈퍼블라스트 2를 비교해보세요.',
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
      costPerKm: 487,
      valueRating: 7,
      priceTier: 'high',
      alternatives: ['nike-vomero-18', 'asics-superblast-2', 'hoka-mach-x-3'],
    },

    reviews: [
      {
        userType: '중상급 러너',
        rating: 4,
        text: '엔돌핀 스피드 4가 500km 되어 교체하면서 v3를 세일가 185,000원에 잡았습니다. 카본 PWRPLATE가 주는 추진력은 엔돌핀 스피드와 비슷하면서, Nitro Foam 듀얼폼의 착지감이 좀 더 단단하고 직접적이에요. 37.4mm 힐 스택에서 나오는 쿠셔닝이 무릎 충격을 잘 잡아주고, 인천 송도 센트럴파크 주 2회 10km 하프마라톤 페이스 훈련에 쓰는데 4분30초대 유지가 편합니다. 268g 무게가 템포런에 적당하고, 가성비 따지면 마하 X(269,000원)보다 8만원 이상 절약할 수 있어요. 발볼이 좁은~표준이라 토박스가 한국 러너 평균 발에는 빡빡한 편이고, 270mm인데 반사이즈 업을 권합니다. 450km 내구성은 아쉽지만 세일가 기준 km당 약 487원이면 합리적입니다.',
      },
      {
        userType: '에디터 분석',
        rating: 87,
        text: '"카본 슈퍼트레이너 뭐가 좋아요?" 질문에 가성비 좋은 선택입니다. 219,000원으로 마하 X(269,000원), 슈퍼블라스트 2(259,000원)보다 4~5만원 저렴합니다. Nitro Foam + Nitro Elite 듀얼폼에 카본 플레이트(PWRPLATE)로 레이싱화 수준의 반응성을 제공합니다. 268g 무게에 37.4mm 힐 스택으로 무릎 보호와 추진력을 동시에 잡았고, 10.1mm 드롭이 힐스트라이크 러너에게도 자연스러운 전환을 유도합니다. 발볼이 좁은 편이라 한국인 발에는 반사이즈 업 고려하세요. 토박스 폭이 좁아 발볼 넓은 러너는 v4(와이드 옵션 있음)를 검토하는 것도 방법입니다. 450km 내구성으로 km당 약 487원의 가성비는 카본 슈퍼트레이너 중 합리적이며, 평발 러너에게도 무난합니다. 가성비 좋은 카본 슈퍼트레이너를 찾는 중상급 러너에게 추천합니다.',
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
      costPerKm: '약 ₩487/km (450km 기준)',
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
    editorComment: '베이퍼플라이 3(₩310,000)보다 2만원 저렴한 28만 9천원에 77% 에너지 리턴은 가성비 슈퍼슈즈의 정석입니다. A-TPU 기반 Nitro Elite 폼이 204g 경량에서 탄탄하고 직접적인 반발력을 제공하며, 이 느낌은 ZoomX의 부드러운 반발과는 성격이 다릅니다. 세일가 25만원대까지 내려가면 슈퍼슈즈 시장에서 가성비 1위라 해도 과언이 아닙니다. 토박스가 좁아 한국 러너 발볼에는 반사이즈 업이 필수이고, 겨울 경화에 약한 점은 한국 11월~3월 레이스에서 감안해야 합니다.\n\n사이즈·구매 가이드: 토박스가 좁은 편(narrow)이며 와이드 옵션이 없으므로 반드시 반사이즈 업을 선택하세요. 발볼이 넓으면 착화 테스트를 먼저 권합니다. 289,000원 ÷ 300km = km당 약 963원이므로 레이스 전용으로만 활용하세요. 발볼 넓은 레이싱화를 원하면 SC Elite V5, 더 높은 스택을 원하면 메타스피드 스카이+를 비교해보세요.',
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
      costPerKm: 963,
      valueRating: 8,
      priceTier: 'premium',
      alternatives: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3'],
    },

    reviews: [
      {
        userType: '엘리트 러너',
        rating: 5,
        text: '2024 춘천 마라톤 서브3:05로 개인 기록 갱신한 신발입니다. 베이퍼플라이 3에서 넘어왔는데 77% 에너지 리턴은 허언이 아니에요. 35km 이후 리턴이 살아있는 느낌은 A-TPU 폼 특유의 탄탄한 반발 덕분입니다. 204g은 베이퍼플라이(194g)와 거의 같고, 289,000원 vs 310,000원 가격 차이도 작지 않아요. 세일가 250,000원대에 잡으면 가성비 슈퍼슈즈 1위입니다. 39.2mm 힐 스택에서 나오는 쿠셔닝이 마라톤 후반 무릎 피로를 확실히 줄여줍니다. 260mm 신는데 토박스가 좁아서 265mm로 올렸습니다. 한국인 발볼이면 무조건 반사이즈 업하세요. 300km 내구성이라 레이스 전용으로만 쓰고 있고, 평발이면 인솔 교체를 권합니다.',
      },
      {
        userType: '에디터 분석',
        rating: 92,
        text: '"가성비 좋은 슈퍼슈즈 뭐가 좋아요?" 질문에 최고의 답변입니다. 289,000원으로 베이퍼플라이 3(310,000원), 메타스피드 스카이+(330,000원)보다 저렴하면서 77% 에너지 리턴은 슈퍼슈즈 시장 최고 수준입니다. 204g으로 베이퍼플라이(194g)와 비슷한 경량성, A-TPU 기반 Nitro Elite 폼으로 탄탄한 반발력을 제공합니다. 39.2mm 힐 스택이 마라톤 후반 무릎과 관절을 보호해주고, 10.6mm 드롭이 힐스트라이크 러너에게도 자연스러운 전환을 유도합니다. 발볼이 좁아 한국인 발에는 반사이즈 업 필수이며, 토박스 폭이 좁은 편이라 와이드 발볼 러너는 주의하세요. 300km 내구성으로 km당 약 963원의 가성비는 레이싱화 카테고리에서 합리적입니다. 서브4:00 목표의 하프/풀 마라톤 레이스에 강력 추천하는 가성비 슈퍼슈즈입니다.',
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
      costPerKm: '약 ₩963/km (300km 기준)',
      footType: '발볼 좁은 러너 / 반사이즈 업 권장',
      landingPattern: '전방 착지 (레이싱)',
    },

    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3', 'saucony-endorphin-pro-4'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBK5Yh' }],
  },
  {
    id: 'puma-deviate-nitro-elite-4',
    slug: 'puma-deviate-nitro-elite-4',
    brand: 'Puma',
    name: '디비에이트 나이트로 엘리트 4',
    image: '/images/shoes/puma/deviatenitroelite4/side.webp',
    images: [
      '/images/shoes/puma/deviatenitroelite4/side.webp',
      '/images/shoes/puma/deviatenitroelite4/front.webp',
      '/images/shoes/puma/deviatenitroelite4/back.webp',
      '/images/shoes/puma/deviatenitroelite4/angle.webp',
      '/images/shoes/puma/deviatenitroelite4/detail.webp',
    ],
    status: 'new',
    category: '레이싱',
    rating: 5,
    price: 289000,
    description: '푸마의 최신 카본 레이싱화로, ATPU 기반 NITROFOAM ELITE와 PWRPLATE를 결합해 5K부터 마라톤까지 빠른 전개를 노리는 PR 체이서용 모델입니다.',
    oneliner: '170g 초경량과 더 부드러워진 ATPU 폼, 푸마의 가장 현실적인 마라톤 슈퍼슈즈',
    editorComment: '푸마 코리아 공식 스펙 기준 Deviate NITRO Elite 4는 170g(UK 8), 40/32mm 스택, 8mm 드롭, 권장 수명 400km의 최신 레이스데이 모델입니다. Believe in the Run 리뷰에서도 전작보다 확실히 더 가볍고 부드러워졌으며, Fast-R 3보다 덜 공격적이지만 훨씬 접근하기 쉬운 마라톤 슈퍼슈즈로 평가했습니다. 한국 러너 기준으로는 카본화 입문까지 노려볼 수 있는 타입이지만, 안정화 대체재로 보기엔 여전히 레이스 중심 플랫폼입니다.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)으로 전작보다 발볼 호환성이 개선되었으며, 와이드 옵션은 없으나 표준 발볼이면 정사이즈 착용이 가능합니다. 289,000원 ÷ 400km = km당 약 722원이므로 레이스 전용으로 운용하세요. 접근성이 더 좋은 대안으로는 SC Elite V5, 더 공격적인 레이싱을 원하면 패스트알 나이트로 엘리트 3를 비교해보세요.',
    tags: ['레이싱', '카본 플레이트', 'NITROFOAM ELITE', '신규'],

    specs: {
      weight: 170,
      cushioning: 8,
      responsiveness: 10,
      stability: 6,
      drop: 8,
      durability: 400,
    },

    biomechanics: {
      stackHeight: {
        heel: 40,
        forefoot: 32,
      },
      drop: 8,
      carbonPlate: true,
      plateType: 'curved',
      midsoleType: 'NITROFOAM ELITE (듀얼 레이어)',
      optimalPace: '3:00-4:30 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'caution',
      achillesTendinopathy: 'caution',
      kneeIssues: 'caution',
      shinSplints: 'good',
    },

    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'fair',
      wideOptions: false,
      winterCompatibility: 'fair',
      summerCompatibility: 'excellent',
    },

    targetUsers: {
      recommended: ['5K~마라톤 레이스', 'PB 경신 목표 러너', '첫 카본 레이싱화 후보', '중족부 스트라이드 러너'],
      notRecommended: ['일상 조깅', '회복 러닝', '강한 안정성 필요', '극단적으로 공격적인 토스프링 선호'],
    },

    features: [
      'NITROFOAM ELITE 듀얼 레이어 미드솔',
      'PWRPLATE 카본 플레이트',
      'PUMAGRIP 아웃솔',
      '170g 초경량 (UK 8 기준)',
      '공식 권장 수명 400km',
    ],

    priceAnalysis: {
      msrp: 289000,
      streetPrice: 289000,
      costPerKm: 722,
      valueRating: 8,
      priceTier: 'premium',
      alternatives: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'new-balance-sc-elite-v5', 'puma-fast-r-nitro-elite-3'],
      valueAdvantages: ['최신 푸마 레이싱 플랫폼', '공식 170g 초경량', '풀마라톤 대응 스택', '공식몰 판매 확인'],
    },

    reviews: [
      {
        userType: '에디터 분석',
        rating: 93,
        text: '푸마 코리아 공식 정보 기준으로 Elite 4는 170g 초경량에 40mm/32mm 스택, 8mm 드롭, 400km 수명을 제시하는 최신 레이스데이 모델입니다. 289,000원 가격은 알파플라이 3(370,000원)보다 확실히 저렴하고, 메타스피드 스카이+(330,000원) 대비로도 가성비가 뛰어납니다. 한국 러너 관점에서 토박스가 표준~약간 여유로 전작 Elite 3보다 발볼 호환성이 개선되었고, 와이드 옵션은 없지만 표준 발볼이면 정사이즈 착용이 가능합니다. 5K부터 풀 마라톤까지 명확히 레이스 전용으로 포지셔닝되어 있으며, 평발이나 무릎 보호가 필요한 입문 러너보다는 기록 지향 중상급 이상 러너에게 적합합니다.',
        source: 'editor',
        sourceUrl: 'https://kr.puma.com/kr/ko/pd/deviate-nitro-elite-4/312127.html?dwvar_312127_color=06',
      },
      {
        userType: 'Believe in the Run',
        rating: 92,
        text: 'Believe in the Run은 Elite 4를 전작보다 더 부드럽고 가벼운 업그레이드로 평가했습니다. 170g이라는 무게는 슈퍼슈즈 시장에서도 최상위 경량이고, 와이드한 발볼에도 true-to-size로 무난하다는 점이 한국 러너에게 희소식입니다. ATPU 폼의 에너지 리턴이 체감될 정도로 향상되었고, 카본 PWRPLATE의 추진감도 더 또렷해졌습니다. 40mm 힐 스택에서 나오는 쿠셔닝이 마라톤 후반 35km 이후 무릎 피로를 줄여주며, Fast-R 3보다 훨씬 접근하기 쉬운 레이싱화라는 총평입니다. 289,000원에 이 퍼포먼스라면 가성비 측면에서도 충분히 경쟁력 있습니다.',
        source: 'editor',
        sourceUrl: 'https://believeintherun.com/shoe-reviews/puma-deviate-nitro-elite-4-review/',
      },
      {
        userType: 'Believe in the Run',
        rating: 88,
        text: '단점으로는 평소의 푸마그립만큼 끈끈한 접지감이 아니라는 점과, Fast-R 3 같은 더 공격적인 토스프링을 기대한 러너에겐 살짝 무난하게 느껴질 수 있다는 점이 언급됐습니다. 400km 내구성은 레이싱화 중 양호한 편이고, km당 약 722원의 가성비는 알파플라이 3 대비 합리적입니다. 토박스 너비가 표준 수준으로 개선되어 발볼 넓은 한국 러너도 반사이즈 업 없이 시도해볼 만합니다. 무릎이 약한 러너라면 8mm 드롭과 40mm 스택의 충격 흡수가 레이스 후반 보호에 도움이 됩니다. 최종 평가는 지금까지 나온 Deviate Elite 중 최고이자, 푸마의 가장 완성도 높은 마라톤 레이스화에 가깝다는 쪽입니다.',
        source: 'editor',
        sourceUrl: 'https://believeintherun.com/shoe-reviews/puma-deviate-nitro-elite-4-review/',
      },
    ],

    detailedSpecs: {
      weight: '170g (UK 8 기준, 공식)',
      stackHeight: '힐 40mm / 포어풋 32mm (공식)',
      drop: '8mm (공식)',
      midsole: 'ATPU 기반 NITROFOAM ELITE 쿠셔닝 (질소 주입 듀얼 레이어)',
      plate: 'PWRPLATE 카본 플레이트',
      outsole: 'PUMAGRIP 퍼포먼스 러버',
      upper: 'ULTRAWEAVE + PWRTAPE',
      width: '표준~약간 여유 (와이드 옵션 없음)',
      durability: '400km (공식 권장 수명)',
      price: '₩289,000 (공식몰)',
      costPerKm: '약 ₩722/km (400km 기준)',
      footType: '기록 지향 러너 / 중립 발 / 중족부 스트라이드 선호',
      landingPattern: '중족부~전족부 착지',
    },

    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'new-balance-sc-elite-v5', 'puma-fast-r-nitro-elite-3'],
    purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=푸마+데비에이트+니트로+엘리트+4' }],
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
    editorComment: '173g이라는 무게는 알파플라이 3(190g)보다 17g 가볍고, 80% 이상 에너지 리턴은 슈퍼슈즈 시장 최상위권입니다. 37만 9천원은 알파플라이 3(₩370,000)과 거의 같은 가격대이지만, 순수 무게와 에너지 리턴 수치에서 앞섭니다. 익스텐디드 디자인의 PWRPLATE 카본이 마라톤 후반부까지 추진력을 유지시키고, 1.5mm PumaGrip 아웃솔이 최소한의 무게로 접지력을 확보합니다. 250km 내구성과 좁은 토박스는 이 신발이 오직 서브3 레이스데이 전용 무기임을 선언하며, 한국 러너 발볼에는 반사이즈 업이 필수입니다.\n\n사이즈·구매 가이드: 토박스가 좁은 편(narrow)이며 와이드 옵션이 없으므로 반드시 반사이즈 업을 선택하고, 발볼이 넓으면 착화 테스트를 먼저 하세요. 379,000원 ÷ 250km = km당 약 1,516원이므로 서브3 목표 레이스 전용으로만 사용하세요. 접근성이 더 좋은 대안으로는 메타스피드 엣지+, 발볼 여유를 원하면 SC Elite V5를 비교해보세요.',
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
        text: '알파플라이 3(190g)에서 갈아탄 서브2:50 러너입니다. 173g은 손에 들면 "이게 러닝화 맞나" 싶을 정도로 가벼워요. 2025 동아 서울마라톤에서 쓸 예정인데, 2월 영하 날씨에서 테스트 했더니 폼이 확 딱딱해지더라고요. 겨울 경화에 약한 게 아쉬운 점이에요. 10월 대구나 4월 서울 레이스처럼 10~15도 기온에서는 80%+ 에너지 리턴이 폭발적입니다. 37만 9천원에 250km 내구성이라 km당 약 1,516원인데, 기록 경신 한 번이면 본전 뽑는다고 생각합니다. 토박스가 좁아서 한국인 발볼 기준으로는 반사이즈 업이 필수이고, 와이드 옵션이 없어서 발볼 110mm 이상이면 다른 모델을 찾아보세요. 무릎이 약한 편인데 38.5mm 스택의 충격흡수가 35km 이후에도 관절을 보호해주는 느낌이 확실합니다.',
      },
      {
        userType: '에디터 분석',
        rating: 89,
        text: '푸마 최상위 풀 마라톤 레이싱화입니다. 173g으로 알파플라이 3(190g)보다 17g 가볍고, 80% 이상의 에너지 리턴으로 최고 수준의 반발력을 제공합니다. 379,000원으로 알파플라이 3(370,000원)과 비슷한 가격대이지만 순수 무게에서 확실히 우위입니다. 8.3mm 드롭에 38.5mm 힐 스택으로 전방 착지 러너에게 최적화된 설계입니다. 발볼이 좁아 한국인 발에는 반사이즈 업 필수이고, 토박스 폭이 좁은 편이라 발볼 넓은 러너는 착화 테스트를 꼭 해보세요. 250km 내구성으로 km당 약 1,516원의 가성비는 순수 레이스 전용이라는 점을 감안하면 납득 가능합니다. 평발이나 무릎 부상 이력이 있는 러너보다는 서브3:00을 목표로 하는 엘리트 러너의 풀 마라톤 레이스용으로 추천합니다.',
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
      costPerKm: '약 ₩1,516/km (250km 기준)',
      footType: '발볼 좁은 러너 / 반사이즈 업 필수',
      landingPattern: '전방 착지 (풀 마라톤 레이싱)',
    },

    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-edge-plus', 'new-balance-sc-elite-v5', 'saucony-endorphin-elite-2'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBK6Nc' }],
  }
];
