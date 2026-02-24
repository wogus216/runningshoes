import type { Shoe } from '@/types/shoe';

export const sauconyShoes: Shoe[] = [
  {
    id: 'saucony-ride-18',
    slug: 'saucony-ride-18',
    brand: 'Saucony',
    name: '라이드 18',
    image: '/images/shoes/saucony/ride18.webp',
    images: ['/images/shoes/saucony/ride18/side.webp', '/images/shoes/saucony/ride18/top.webp', '/images/shoes/saucony/ride18/outsole.webp'],
    category: '입문화',
    rating: 4,
    price: 159000,
    description: 'Saucony의 대표 입문화로, PWRRUN+ 미드솔로 편안한 쿠셔닝과 부드러운 착지감을 제공합니다. 데일리 트레이닝에 적합한 올라운더 러닝화입니다.',
    oneliner: '255g에 통기성 5/5, 여름 데일리 러닝의 가성비 정답',
    editorComment: '15만 9천원에 255g 경량과 141 SA 충격흡수를 동시에 달성한 점이 라이드 18의 진가입니다. 전작 대비 33g 감량은 체감되는 차이이고, 통기성 5/5 최상위급이라 한국의 덥고 습한 여름 러닝에 최적화되어 있습니다. 26.1 HA 경도는 푹신함보다 단단한 안정감을 선호하는 러너에게 맞고, 페가수스 41(₩159,000/281g)보다 26g 가볍습니다. 와이드 옵션이 있어 발볼 걱정을 덜어주지만, 600km 내구성은 브룩스 고스트(800km)에 비해 짧은 편입니다.',
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
        userType: '에디터 분석',
        rating: 89,
        text: '15만원대 최고의 가성비 입문 러닝화입니다. "초보도 신을 수 있나요?" 라이드 시리즈는 입문자를 위해 만들어진 신발입니다. v17 대비 33g 감량(255g)되었고 141 SA 충격흡수로 무릎 보호가 좋습니다. 통기성 5/5 최상위급으로 여름에도 쾌적하고, 와이드 옵션이 있어 발볼 넓은 분도 편합니다. 26.1 HA로 푹신한 느낌보다는 단단하고 안정적인 라이드를 제공해, 첫 러닝화로 안전한 선택입니다. 600km+ 내구성으로 오래 신을 수 있습니다.',
      },
      { userType: '입문 러너', rating: 4, text: '러닝 시작 3개월 차, 265mm 와이드 착용 중입니다. 페가수스 41이랑 매장에서 비교 착용해봤는데, 라이드 18이 26g 가벼워서 이걸로 결정했어요. 한강 뚝섬~잠실 구간 주 3회 5km씩 뛰는데, 땅이 단단하게 느껴지면서도 충격은 잘 잡아줍니다. 여름에 통기성이 진짜 좋아서 발이 안 더워요.' },
      { userType: '중급 러너', rating: 4, text: '주간 40km 훈련용으로 사용 중입니다. 라이드 17에서 업그레이드했는데, 33g 감량이 체감됩니다. 대구 수성못 둘레길에서 주로 달리는데, 26 HA 정도의 단단한 느낌이 오히려 안정적이라 좋아요. 님버스처럼 푹신한 건 아니지만 6분/km 데일리 페이스에서 발이 피로하지 않습니다. 600km 내구성이 고스트 17(800km)보다 짧은 건 아쉽습니다.' },
      { userType: '평발 러너', rating: 5, text: '270mm 2E 와이드로 신고 있어요. 평발인데 라이드 18이 아치 부분을 과하지 않게 잡아줘서 편합니다. 이전에 호카 클리프턴 10 신었는데 라이드 18이 더 단단하고 지면 감각이 살아있어요. 인천 센트럴파크에서 주말마다 10km 뛰는데, 통기성 좋아서 땀 찬 발이 금방 마릅니다.' },
    ],

    similarShoes: ['nike-pegasus-41', 'asics-gel-nimbus-28', 'hoka-clifton-10', 'new-balance-880-v15'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKnfe' }],
  },
  {
    id: 'saucony-guide-18',
    slug: 'saucony-guide-18',
    brand: 'Saucony',
    name: '가이드 18',
    image: '/images/shoes/saucony/guide18.webp',
    images: ['/images/shoes/saucony/guide18/side.webp', '/images/shoes/saucony/guide18/top.webp', '/images/shoes/saucony/guide18/outsole.webp'],
    category: '안정화',
    rating: 4,
    price: 159000,
    description: 'Saucony의 대표 안정화로, PWRRUN 미드솔과 Guidance Frame으로 과내전 러너에게 적합한 안정성을 제공합니다.',
    oneliner: '카야노의 절반 가격, 121.9mm 광폭 플랫폼 안정화',
    editorComment: '15만 9천원이라는 가격은 카야노 32(₩259,000)의 61%에 불과하지만, 121.9mm 넓은 플랫폼이 착지 시 좌우 흔들림을 효과적으로 억제합니다. 61.3% 에너지 리턴은 안정화 카테고리 평균 이상이고, 통기성 5/5로 여름에도 쾌적하게 달릴 수 있습니다. 과내전이 심하지 않은 경도~중등도 수준이라면 이 가격대에서 가이드 18만큼 합리적인 선택은 드뭅니다. 다만 노출 폼 비율이 높아 아웃솔 내구성이 약한 편이라 아스팔트 위주 러너는 주의하세요.',
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
        userType: '에디터 분석',
        rating: 80,
        text: '평발이나 과내전으로 고민하는 입문 러너를 위한 가성비 안정화입니다. 15만원대로 카야노(26만원)의 절반 가격이면서, 121.9mm 넓은 플랫폼으로 착지 안정성이 뛰어납니다. 통기성 5/5 최상위급으로 여름철 러닝에도 쾌적하고, 한국인에게 흔한 평발 특성에 적합합니다. 다만 노출된 폼이 많아 내구성이 약하고, 61.3% 에너지 리턴으로 반발력은 평균 수준입니다. "무릎 괜찮나요?" 질문하는 과내전 입문 러너에게 부담 없이 추천할 수 있습니다.',
      },
      { userType: '평발 러너', rating: 5, text: '카야노 32 사려다가 가격 보고 포기하고 가이드 18로 왔습니다. 반값인데 Guidance Frame이 과내전을 꽤 잘 잡아줘요. 275mm 와이드 착용 중이고, 일산 호수공원 한 바퀴 7km를 주 4회 뛰고 있습니다. 4개월 차인데 무릎 안쪽 통증이 확실히 줄었어요. 15만원대에 이 정도면 가성비 끝판왕입니다.' },
      { userType: '입문 러너', rating: 4, text: '정형외과에서 경도 평발 + 과내전 진단받고 안정화 추천받았어요. 예산 20만원 이하로 고르다가 가이드 18에 안착했습니다. 트레드밀에서 매일 3km씩 걷기+조깅 병행하는데, 발목이 안쪽으로 무너지던 게 줄어들었어요. 다만 아스팔트에서 400km쯤 뛰니 앞쪽 아웃솔 노출 폼이 닳기 시작해서, 내구성은 기대보다 짧을 수 있습니다.' },
      { userType: '중급 러너', rating: 4, text: '아드레날린 GTS 24에서 갈아탔는데, 전체적으로 가벼워져서(278g) 데일리가 더 편해졌어요. 121.9mm 넓은 플랫폼이 착지 시 안정감을 주고, 통기성이 뛰어나서 7월 폭염에도 발이 쾌적했습니다. 단점은 쿠셔닝이 아드레날린보다 얇게 느껴진다는 점. 장거리 20km 이상 갈 때는 허리케인 25가 나을 것 같습니다.' },
    ],

    similarShoes: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'new-balance-860-v14', 'hoka-gaviota-6'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKpwt' }],
  },
  {
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
    editorComment: '42.3mm 힐 스택에 풀 PEBA(PWRRUN PB) 미드솔을 19만 9천원에 제공하는 건 트라이엄프 23만의 강점입니다. Bondi 9(₩220,000)보다 2만원 싸면서 149 SA 충격흡수와 67.6% 에너지 리턴은 오히려 앞섭니다. 272g은 맥시멀 쿠션화 중 가벼운 축에 속하고, 124mm 넓은 플랫폼이 장거리에서 안정성을 보장합니다. 와이드 옵션이 있어 발볼 넓은 한국 러너도 편하게 신을 수 있으며, 조깅부터 5분대 페이스까지 활용 범위가 넓은 점이 순수 리커버리화와 차별됩니다.',
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
        userType: '에디터 분석',
        rating: 90,
        text: '장거리 러닝에서 무릎과 발목 보호가 필요한 러너에게 최적의 프리미엄 쿠션화입니다. 42.3mm 힐 스택과 149 SA 충격흡수로 "무릎 괜찮나요?" 질문에 자신있게 추천할 수 있습니다. 18만원대로 본디9(26만원)보다 가성비 좋으면서 PEBA 폼의 67.6% 에너지 리턴으로 반발력도 좋습니다. 124mm 넓은 플랫폼으로 안정적이고, 와이드 옵션이 있어 발볼 넓은 한국 러너도 편합니다. 272g으로 맥시멀 쿠션화 중 가벼운 편이라 느린 조깅부터 5분대 페이스까지 활용도가 높습니다.',
      },
      { userType: '중급 러너', rating: 5, text: '본디 9이랑 2주간 번갈아 신으면서 비교했습니다. 트라이엄프 23이 2만원 싸면서 에너지 리턴이 더 좋아요. 본디는 푹 가라앉는 느낌이라면, 트라이엄프는 푹신하면서도 튕겨주는 반발이 있습니다. 272g이라 맥시멀 쿠션화 치고 가벼운 것도 장점이에요. 춘천 의암호 둘레길에서 주말 20km LSD에 애용하고 있습니다.' },
      { userType: '상급 러너', rating: 4, text: '월 200km 서브345 러너입니다. 리커버리 데이에 트라이엄프 23 신고 천천히 10km 뛰는데, PEBA 폼 특유의 반발 덕에 리커버리런에서도 다리가 산다는 느낌을 받아요. 님버스 28이랑 비교하면 반응성에서 트라이엄프가 앞서고, 가격도 6만원 저렴합니다. 유일한 불만은 아웃솔 내구성이 600km으로 짧다는 점. 님버스(1,000km)에 비하면 확실히 빨리 닳아요.' },
      { userType: '입문 러너', rating: 5, text: '40대 후반이고 무릎 보호 목적으로 러닝 시작했습니다. 매장에서 트라이엄프 23이랑 본디 9 둘 다 신어봤는데, 트라이엄프가 더 가볍고 발이 앞으로 굴러가는 느낌이 좋았어요. 270mm 와이드로 구매했고, 양재천 코스에서 주 3회 4km 조깅 중입니다. 3개월째 무릎이나 발바닥 통증 없이 잘 뛰고 있어요.' },
    ],

    similarShoes: ['hoka-bondi-9', 'asics-gel-nimbus-28', 'new-balance-1080-v14', 'brooks-glycerin-22'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKqYG' }],
  },
  {
    id: 'saucony-hurricane-25',
    slug: 'saucony-hurricane-25',
    brand: 'Saucony',
    name: '허리케인 25',
    image: '/images/shoes/saucony/hurricane25.webp',
    images: ['/images/shoes/saucony/hurricane25/side.webp', '/images/shoes/saucony/hurricane25/top.webp', '/images/shoes/saucony/hurricane25/outsole.webp'],
    category: '안정화',
    rating: 4,
    price: 199000,
    description: 'Saucony의 프리미엄 안정화로, PWRRUN PB + PWRRUN 크래들 조합으로 맥시멀 쿠셔닝과 강력한 안정성을 동시에 제공합니다.',
    oneliner: 'PEBA + 크래들 듀얼 구조, 심한 과내전도 잡는 151 SA',
    editorComment: '124.4mm 초광폭 플랫폼과 PWRRUN 크래들이 심한 과내전을 물리적으로 제어하는 구조는 가이드 18의 한 단계 위입니다. 151 SA 충격흡수에 16.6 HA 소프트 폼이라는 조합은 안정화임에도 착화감이 딱딱하지 않다는 뜻입니다. 19만 9천원으로 카야노 32(₩259,000) 대비 6만원 절약하면서, 와이드 옵션까지 있어 발볼 넓은 평발 러너에게 실용적입니다. 통기성 2/5가 유일한 약점이라 한국 여름에는 발이 더울 수 있고, 286g 무게는 느린 페이스 전용임을 감안하세요.',
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
      msrp: 199000,
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
        userType: '에디터 분석',
        rating: 77,
        text: '심한 과내전이나 평발로 기존 안정화가 부족했던 러너를 위한 프리미엄 안정화입니다. 124.4mm 초광폭 플랫폼과 PWRRUN Cradle이 강력한 안정성을 제공하면서도, 16.6 HA 소프트 폼으로 착화감이 편안합니다. 151 SA 충격흡수로 관절 보호도 최상위급입니다. 18만원대로 카야노 대비 가성비 좋고, 와이드 옵션도 있어 발볼 넓은 러너에게 좋습니다. 다만 통기성 2/5로 여름에는 더울 수 있고, 286g으로 무거운 편이라 5분/km 이상 느린 페이스에 적합합니다.',
      },
      { userType: '평발 러너', rating: 5, text: '심한 과내전 + 평발 조합인데, 가이드 18로는 안정성이 부족해서 허리케인 25로 올렸습니다. 크래들 구조가 발을 감싸듯 잡아주는 게 확실히 다릅니다. 280mm EE 와이드 착용 중이고, 세종시 중앙공원 러닝코스에서 주 4회 8km씩 뛰고 있어요. 카야노 32보다 6만원 저렴한데 안정성은 체감상 비슷하거나 더 나은 것 같습니다.' },
      { userType: '중급 러너', rating: 4, text: '정형외과에서 중등도 과내전 판정받고 추천받아 구매했습니다. PEBA 폼이라 안정화임에도 착화감이 부드럽고, 151 SA 충격흡수는 장거리에서 진가를 발휘해요. 수원 광교호수에서 15km 뛰어도 무릎 안쪽 통증이 사라졌습니다. 단점은 통기성이 2/5라 여름 장마철에 발이 젖은 채로 오래 유지된다는 것. 겨울용으로는 최고의 선택입니다.' },
      { userType: '입문 러너', rating: 4, text: '체중 85kg 과내전 러너입니다. 러닝 시작할 때 무릎이 걱정돼서 안정화 중 가장 쿠셔닝 좋은 걸 찾다가 허리케인 25에 도착했어요. 124mm 넓은 바닥이 뚱뚱한 제 체중을 잘 받쳐줍니다. 다만 286g이라 처음엔 좀 무겁다 느꼈는데, 6분30초 페이스에서는 전혀 문제 안 돼요.' },
    ],

    similarShoes: ['asics-gel-kayano-32', 'brooks-adrenaline-gts-25', 'hoka-gaviota-6', 'new-balance-860-v14'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKrEs' }],
  },
  {
    id: 'saucony-kinvara-16',
    slug: 'saucony-kinvara-16',
    brand: 'Saucony',
    name: '킨바라 16',
    image: '/images/shoes/saucony/kinvara16.webp',
    images: ['/images/shoes/saucony/kinvara16/side.webp', '/images/shoes/saucony/kinvara16/top.webp', '/images/shoes/saucony/kinvara16/outsole.webp'],
    category: '데일리',
    rating: 4,
    price: 159000,
    description: 'Saucony의 경량 데일리화로, 최소한의 미드솔과 낮은 드롭으로 자연스러운 주법을 선호하는 러너에게 적합합니다. 빠른 템포 트레이닝에 적합합니다.',
    oneliner: '198g 초경량 + 4mm 드롭, 지면을 느끼며 달리는 미니멀리스트',
    editorComment: '198g과 4.4mm 드롭이라는 숫자가 킨바라 16의 정체성을 말해줍니다. 이건 쿠셔닝이 아니라 지면 감각과 발의 자유를 추구하는 신발입니다. 117 SA 충격흡수는 님버스 28(152 SA)의 77% 수준이라 종아리와 아킬레스건에 부하가 걸리므로, 기초 근력이 있는 중급 이상 러너 전용입니다. 15만 9천원에 이 경량과 통기성 5/5를 제공하는 신발은 드물고, 여름 인터벌이나 빠른 페이스 훈련에 날카로운 감각을 줍니다. 토박스 내구성 1/5가 약점이라 500km 이후 교체를 각오하세요.',
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
        userType: '에디터 분석',
        rating: 84,
        text: '지면 감각과 경량을 중시하는 중급 이상 러너에게 적합한 미니멀 러닝화입니다. 194g 초경량과 4.4mm 로우드롭으로 자연스러운 주법을 추구하는 러너에게 좋습니다. 15만원대 가성비와 통기성 5/5로 여름 러닝에 최적이지만, 쿠셔닝(117 SA)이 맥시멀 쿠션화의 절반 수준이라 무릎이 약하거나 입문자에게는 비추천입니다. 토박스 내구성이 약해(1/5) 발가락 벽면이 빨리 닳을 수 있으니 500km 내구성을 감안하세요. "초보도 신을 수 있나요?" 기초 근력이 있는 러너에게만 추천합니다.',
      },
      { userType: '상급 러너', rating: 5, text: '인터벌 훈련 전용으로 쓰고 있습니다. 400m 반복 8세트를 킨바라 16으로 돌리는데, 198g 경량 + 4mm 로우드롭이 지면 반응을 그대로 전달해줘요. 잠실종합운동장 트랙에서 3:40/km 페이스까지 밀어도 신발이 발에 딱 붙어서 흔들림이 없습니다. 미드풋~포어풋 러너에게는 최고의 훈련 무기예요.' },
      { userType: '중급 러너', rating: 4, text: '반년째 데일리 + 템포런 겸용으로 사용 중입니다. 뛰기 시작한 지 2년 되어서 종아리 근력이 어느 정도 받쳐주니까 4mm 드롭도 무리 없어요. 다만 솔직히 20km 이상 장거리에서는 쿠셔닝이 부족합니다. 15km까지는 완벽한 신발인데, 그 이상 가면 발바닥이 아파오기 시작해요. 장거리는 트라이엄프 23으로 돌리고, 10km 이하 훈련에만 킨바라를 씁니다.' },
      { userType: '입문 러너', rating: 3, text: '가벼운 게 좋을 줄 알고 샀다가 실패했습니다. 쿠셔닝이 거의 없어서 5km만 뛰어도 종아리가 터질 것 같았어요. 알고 보니 기초 근력이 없는 초보는 쿠셔닝 좋은 신발부터 시작해야 한다더라고요. 결국 라이드 18로 갈아타고 킨바라는 근력이 생기면 다시 도전할 예정입니다.' },
    ],

    similarShoes: ['hoka-mach-6', 'nike-pegasus-41', 'asics-novablast-5', 'new-balance-rebel-v5'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKtnn' }],
  },
  {
    id: 'saucony-endorphin-pro-4',
    slug: 'saucony-endorphin-pro-4',
    brand: 'Saucony',
    name: '엔돌핀 프로 4',
    image: '/images/shoes/saucony/endorphin_Pro4.webp',
    images: ['/images/shoes/saucony/endorphinpro4/side.webp', '/images/shoes/saucony/endorphinpro4/top.webp', '/images/shoes/saucony/endorphinpro4/outsole.webp'],
    category: '레이싱',
    rating: 5,
    price: 269000,
    description: 'Saucony의 카본 레이싱화로, PWRRUN PB+HG 미드솔과 풀렝스 카본 플레이트로 강력한 추진력을 제공합니다. 하프~풀 마라톤에 적합합니다.',
    oneliner: '118.9mm 광폭 전족부, 슈퍼슈즈 초심자도 안정적으로',
    editorComment: '슈퍼슈즈를 처음 신는 러너가 가장 걱정하는 건 불안정한 착지인데, 엔돌핀 프로 4의 118.9mm 넓은 전족부 플랫폼이 그 불안을 줄여줍니다. 71.7% 에너지 리턴은 베이퍼플라이 3(75.4%)에 못 미치지만, 26만 9천원으로 5만원 이상 저렴하고 안정성에서 앞섭니다. 220g은 v3보다 무거워졌지만 내구성 개선으로 훈련 겸용이 가능해진 트레이드오프입니다. 서브4 목표 러너가 첫 슈퍼슈즈로 고르기에 가장 안전한 선택이며, 발볼이 좁은 편이라 시착은 필수입니다.',
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
        userType: '에디터 분석',
        rating: 87,
        text: '서브4~서브3:30 목표 러너를 위한 가성비 슈퍼슈즈입니다. 26만원대로 베이퍼플라이(31만원)보다 저렴하면서, 71.7% 에너지 리턴과 139 SA 충격흡수로 하프~풀마라톤에 최적화되어 있습니다. 특히 118.9mm 넓은 전족부 플랫폼으로 슈퍼슈즈 중 안정성이 높아, 슈퍼슈즈 처음 신는 러너에게 추천합니다. 220g으로 v3보다 무거워졌지만 내구성이 좋아져 훈련 겸용도 가능합니다. 토박스가 좁아 발볼 넓은 러너는 착화감 확인이 필요합니다.',
      },
      { userType: '상급 러너', rating: 5, text: '2025 제주 제라 마라톤에서 처음 신었습니다. 서브3:40 목표였는데 3:33으로 PB 달성했어요. 베이퍼플라이 3이랑 비교하면 에너지 리턴은 약간 떨어지지만, 118.9mm 넓은 전족부 덕에 30km 이후에도 착지가 안정적이었습니다. 첫 슈퍼슈즈로 엔돌핀 프로 4를 선택한 건 정말 잘한 결정이에요. 5만원 아끼고 안정성은 더 좋으니까요.' },
      { userType: '중급 러너', rating: 4, text: '서브4 벽을 깨려고 두 달 전에 구매했습니다. 카본 플레이트 신발이 처음인데, 처음 200m 뛰는 순간 "아, 이거구나" 싶었어요. 발이 앞으로 굴러가는 추진력이 확실합니다. 다만 토박스가 좁아서 265mm에 발볼이 넓은 편인 저는 10km 이상 뛰면 새끼발가락이 압박돼요. 부산 해운대 바닷가 코스에서 하프마라톤 페이스런 할 때 신고 있습니다.' },
      { userType: '가성비 중시', rating: 4, text: '슈퍼슈즈 처음이라 가격이 부담이었는데, 네이버 최저가 23만원대에 잡아서 구매했습니다. 알파플라이 3이 37만원인 거 생각하면 10만원 이상 절약한 셈이죠. 대회 3번 정도 신을 수 있으니 대회당 약 8만원 정도. 저 같은 서브4 러너에게는 합리적인 투자라고 봅니다.' },
    ],

    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus', 'hoka-rocket-x-3', 'puma-deviate-nitro-elite-3'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/57QzqCm0' }],
  },
  {
    id: 'saucony-endorphin-elite-2',
    slug: 'saucony-endorphin-elite-2',
    brand: 'Saucony',
    name: '엔돌핀 엘리트 2',
    image: '/images/shoes/saucony/endorphin_elite2.webp',
    images: ['/images/shoes/saucony/endorphinelite2/side.webp', '/images/shoes/saucony/endorphinelite2/top.webp', '/images/shoes/saucony/endorphinelite2/outsole.webp'],
    category: '레이싱',
    rating: 5,
    price: 339000,
    description: 'Saucony의 최상위 레이싱화로, IncrediRUN 미드솔로 역대 최고 80.6% 에너지 리턴을 기록했습니다. 풀렝스 카본 플레이트와 함께 엘리트 퍼포먼스를 제공합니다.',
    oneliner: '80.6% 에너지 리턴, RunRepeat 역대 최고 기록의 괴물',
    editorComment: 'RunRepeat Lab 역대 최고 에너지 리턴 80.6%라는 수치는 알파플라이 3(78.2%)도 넘어서는 기록입니다. IncrediRUN 폼의 6.5 HA 극소프트 경도가 만들어내는 반발력은 경이적이지만, 동시에 안정성 4/10이라는 대가를 치릅니다. 33만 9천원이라는 가격과 200km 내구성은 km당 1,695원을 의미하며, 이건 오직 레이스데이에만 꺼내 신는 무기입니다. 월 200km 이상 훈련하는 서브3 러너가 아니면 이 신발의 잠재력을 끌어내기 어렵고, 토박스가 좁아 한국 러너 발볼과의 궁합은 도전적입니다.',
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
        userType: '에디터 분석',
        rating: 86,
        text: '서브3 이하 엘리트 러너를 위한 최상위 레이싱화입니다. 역대 최고 에너지 리턴(80.6%)과 197g 초경량으로 기록 단축에 최적화되어 있습니다. 33만원 프리미엄 가격이지만, IncrediRUN 폼의 극강 반발력은 알파플라이와 비교해도 손색없습니다. 다만 6.5 HA 극소프트 미드솔로 안정성이 낮아 완벽한 러닝 폼이 필요하고, 토박스가 좁아 발볼 넓은 한국 러너에게는 맞지 않을 수 있습니다. "초보도 신을 수 있나요?" 아닙니다. 월 200km 이상 훈련하는 시리어스 러너 전용입니다.',
      },
      { userType: '상급 러너', rating: 5, text: '월 350km 훈련하는 서브250 러너입니다. 2025 경주 마라톤에서 알파플라이 3 대신 이걸 신고 2:48 기록했습니다. 80.6% 에너지 리턴이라는 숫자가 과장이 아니에요. 35km 이후 다리가 죽어갈 때 이 신발의 반발이 살려줍니다. 197g 경량이라 후반부 피로 축적이 적고, IncrediRUN 폼의 탄성이 끝까지 유지됩니다. 인생 신발이라고 부를 만합니다.' },
      { userType: '중급 러너', rating: 3, text: '서브330 러너인데 호기심에 질렀다가 좀 후회하고 있습니다. 33만 9천원에 200km 내구성이면 km당 거의 1,700원이에요. 제 실력에서는 엔돌핀 프로 4로도 충분한데, 엘리트 2의 차이를 체감하려면 3:30/km 이상 빠른 페이스가 필요합니다. 안정성도 4/10이라 제 폼에서는 착지가 불안해요. 서브3 미만 러너에게는 프로 4를 추천합니다.' },
      { userType: '상급 러너', rating: 5, text: '알파플라이 3, 메타스피드 스카이+, 엔돌핀 엘리트 2 세 켤레 다 보유 중입니다. 솔직히 셋 다 좋지만, 순수 반발력만 놓고 보면 엘리트 2가 최강입니다. 6.5 HA 극소프트 폼인데도 발이 빠지는 느낌이 아니라 튕겨주는 느낌이에요. 대신 토박스가 진짜 좁아서 255mm 이하 좁은 발이 아니면 고통스럽습니다. 한국 러너 평균 발볼 기준으로는 도박에 가깝습니다.' },
    ],

    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-edge-plus', 'new-balance-sc-elite-v5', 'puma-fast-r-nitro-elite-3'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKvcw' }],
  },
  {
    id: 'saucony-endorphin-speed-5',
    slug: 'saucony-endorphin-speed-5',
    brand: 'Saucony',
    name: '엔돌핀 스피드 5',
    image: '/images/shoes/saucony/endorphin_speed5.webp',
    images: ['/images/shoes/saucony/endorphinspeed5/side.webp', '/images/shoes/saucony/endorphinspeed5/top.webp'],
    category: '데일리',
    rating: 5,
    price: 219000,
    description: 'Saucony의 인기 템포 러닝화로, PWRRUN PB 미드솔과 나일론 플레이트로 레이싱과 트레이닝 모두에 적합한 버사타일한 신발입니다.',
    oneliner: '73.2% 에너지 리턴을 20만원대에, 커뮤니티 인정 갓신발',
    editorComment: '러닝 커뮤니티에서 "가성비 갓신발"이라 불리는 데는 이유가 있습니다. 21만 9천원에 73.2% 에너지 리턴은 슈퍼슈즈급 수치이고, 나일론 플레이트라 카본보다 유연해 매일 훈련에 투입해도 부담이 없습니다. v4 대비 18.5 HA로 소프트해져 착화감이 개선됐고, 통기성 5/5로 여름 템포런에서도 쾌적합니다. 서브4 목표 러너가 슈퍼슈즈 구매 전 실력을 키우는 훈련화로 최적이며, 하프마라톤 레이스에도 직접 투입할 수 있는 만능 활용성이 핵심 가치입니다.',
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
      msrp: 219000,
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
        userType: '에디터 분석',
        rating: 82,
        text: '가성비 최강의 템포/레이싱 겸용 러닝화입니다. 20만원대에 슈퍼슈즈급 에너지 리턴(73.2%)을 제공하며, 러닝 커뮤니티에서 "가성비 갓신발"로 불립니다. 나일론 플레이트로 카본보다 유연해 데일리 훈련에도 부담없고, 템포런/하프마라톤에서도 충분한 성능입니다. v4보다 소프트해져(18.5 HA) 착화감이 좋아졌고, 통기성 5/5로 여름에도 쾌적합니다. 서브4~서브3:30 목표 러너가 슈퍼슈즈 전에 먼저 경험해볼 추천 모델입니다. 토박스가 넓어져 발볼 걱정도 줄었습니다.',
      },
      { userType: '중급 러너', rating: 5, text: '러닝 커뮤니티에서 "갓신발"이라길래 반신반의했는데, 진짜였습니다. 21만 9천원에 이 에너지 리턴은 사기급이에요. 나일론 플레이트라 카본처럼 딱딱하지 않아서 매일 신어도 종아리에 무리가 없고, 주 1회 템포런(4:30/km)에서도 충분히 빠릅니다. 서울대공원~과천 구간 왕복 14km를 주 3회 이 신발로 소화하고 있는데, 400km째 성능 저하 없습니다.' },
      { userType: '상급 러너', rating: 5, text: '풀마라톤 4시간 벽을 깨고 싶은데 슈퍼슈즈 살 돈이 없어서 스피드 5로 2025 대구 마라톤 뛰었습니다. 결과는 3:52로 서브4 달성! 솔직히 카본 슈퍼슈즈만큼은 아니지만, 나일론 플레이트 특유의 부드러운 추진력이 30km 이후에도 다리를 밀어줬어요. 73.2% 에너지 리턴이 진짜인 게 체감됩니다. 하프마라톤까지는 이 신발로 충분히 레이싱 가능합니다.' },
      { userType: '입문 러너', rating: 4, text: '러닝 8개월 차인데 속도에 욕심이 생겨서 구매했습니다. 킨바라 16이랑 비교하면 쿠셔닝이 훨씬 좋으면서도 가볍고 빠른 느낌이에요. v4 대비 18.5 HA로 소프트해졌다고 하는데, 제 기준에서는 딱 적당한 단단함입니다. 한 가지 아쉬운 점은 와이드 옵션이 없다는 것. 265mm 표준 발볼이라 다행히 맞았지만, 발볼 넓으신 분은 시착 필수입니다.' },
    ],

    similarShoes: ['asics-superblast-2', 'hoka-mach-x-3', 'puma-deviate-nitro-3', 'nike-vomero-18'],
    purchaseLinks: [{ store: '네이버', url: 'https://naver.me/GuDSfLaW' }],
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
    oneliner: 'IncrediRUN 폼을 매일 훈련에, 엘리트 감각의 슈퍼트레이너',
    editorComment: '엔돌핀 엘리트의 IncrediRUN 폼을 121.7mm 초광폭 플랫폼 위에 올려놓은 구조가 이 신발의 핵심입니다. 전족부 76.3% 에너지 리턴은 훈련용치고 파격적인 수치이고, 3/4 길이 카본 플레이트가 추진력을 더합니다. 21만 9천원으로 슈퍼블라스트 2(₩259,000)보다 저렴하면서 600km 내구성으로 오래 신을 수 있습니다. 다만 285g 무게는 템포런에 투입하기엔 무겁고, 70.1mm 좁은 토박스는 발볼 넓은 한국 러너에게 구매 장벽이 됩니다. 장거리 훈련 위주의 시리어스 러너에게 적합합니다.',
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
        userType: '에디터 분석',
        rating: 77,
        text: '엔돌핀 엘리트의 IncrediRUN 폼을 훈련에서 경험하고 싶은 시리어스 러너를 위한 슈퍼트레이너입니다. 21만원대로 엘리트급 에너지 리턴(76.3% forefoot)을 데일리 훈련에서 누릴 수 있습니다. 121.7mm 초광폭 플랫폼으로 안정성이 뛰어나고, 600km+ 내구성으로 가격 대비 오래 신을 수 있습니다. 다만 285g으로 무겁고, 토박스가 좁아(70.1mm) 발볼 넓은 한국 러너는 착화감이 불편할 수 있습니다. 템포런보다는 장거리 훈련에 더 적합합니다.',
      },
      { userType: '상급 러너', rating: 5, text: '월 280km 서브3 러너입니다. 엘리트 2의 IncrediRUN 폼을 매일 훈련에서 쓸 수 있다는 발상이 좋아서 바로 구매했어요. 남산 둘레길 왕복 16km를 주 5회 소화하는데, 76.3% 전족부 에너지 리턴이 경사면에서 추진력을 확실히 더해줍니다. 슈퍼블라스트 2(26만원)보다 4만원 싸면서 600km 내구성이니 훈련화로는 가성비가 뛰어납니다.' },
      { userType: '중급 러너', rating: 4, text: '엔돌핀 스피드 5와 비교 구매를 고민하다가, 장거리 훈련 비중이 높아서 트레이너를 선택했습니다. 3/4 카본 플레이트가 들어있어서 스피드보다 추진력이 더 좋고, 121.7mm 광폭 플랫폼이 30km 장거리에서 안정감을 줍니다. 아쉬운 건 토박스가 70.1mm로 좁다는 것. 270mm 발볼에 약간 빡빡하게 맞아서, 발볼 넓으신 분은 반 사이즈 업이 필요할 것 같아요.' },
      { userType: '중급 러너', rating: 3, text: '냉정하게 평가하면, 285g은 슈퍼트레이너라기엔 무거운 편입니다. 줌플라이 6(269g)이나 하이페리온 맥스 3(283g)이 비슷한 가격에 더 가볍거든요. IncrediRUN 폼의 반발력은 인정하지만, 템포런(4:30/km)에서 신으면 무게가 걸림돌이에요. 5:00/km 이상 장거리 훈련 전용으로 생각해야 합니다.' },
    ],

    similarShoes: ['asics-superblast-2', 'new-balance-sc-trainer-v3', 'hoka-mach-x-3', 'nike-vomero-18'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dBKxM0' }],
  },
  {
    id: 'saucony-endorphin-pro-5',
    slug: 'saucony-endorphin-pro-5',
    brand: 'Saucony',
    name: '엔돌핀 프로 5',
    image: '/images/shoes/saucony/endorphinpro5/side.webp',
    images: [
      '/images/shoes/saucony/endorphinpro5/side.webp',
      '/images/shoes/saucony/endorphinpro5/top.webp',
      '/images/shoes/saucony/endorphinpro5/outsole.webp',
      '/images/shoes/saucony/endorphinpro5/front.webp',
      '/images/shoes/saucony/endorphinpro5/back.webp',
    ],
    category: '레이싱',
    rating: 5,
    status: 'new',
    price: 299000,
    description: '써코니의 최상위 카본 레이싱화. PWRRUN HG + PWRRUN PB 듀얼 폼과 슬롯형 카본 플레이트로 풀마라톤/하프 대회에서 최고의 추진력을 제공합니다.',
    oneliner: '206g에 슬롯 카본 플레이트, 검증된 장거리 레이서',
    editorComment: '엔돌핀 프로 5는 전작과 동일한 206g/39.5mm 스택/8mm 드롭을 유지하면서 카본 플레이트를 슬롯 디자인으로 변경해 전환 효율을 높였습니다. PWRTRAC 아웃솔이 새로 적용되어 그립력이 향상되었고, PWRRUN HG 상층+PWRRUN PB 하층의 듀얼 폼 구성은 그대로입니다. 29만 9천원으로 베이퍼플라이 4(30만 9천원)보다 1만원 저렴하면서 더 넓은 핏을 제공합니다. 단, 레이싱 전용이라 내구성(300km)이 짧고 데일리 훈련에는 비적합합니다.',
    tags: ['레이싱', '카본', '풀마라톤', '하프마라톤'],

    specs: {
      weight: 206,
      cushioning: 7,
      responsiveness: 9,
      stability: 5,
      drop: 8,
      durability: 300,
    },

    biomechanics: {
      stackHeight: { heel: 39.5, forefoot: 31.5 },
      drop: 8,
      carbonPlate: true,
      plateType: 'full-length carbon (slotted)',
      midsoleType: 'PWRRUN HG + PWRRUN PB',
      optimalPace: '3:30-4:30 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'caution',
      achillesTendinopathy: 'caution',
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
      recommended: ['서브3:30 마라토너', '하프/10K 대회용', '경험 있는 러너', '전족부 착지 러너'],
      notRecommended: ['입문 러너', '데일리 훈련용', '과내전 러너', '발볼 넓은 러너'],
    },

    features: ['슬롯형 카본 파이버 플레이트', 'PWRRUN HG + PB 듀얼 폼', 'SPEEDROLL 지오메트리', 'PWRTRAC 아웃솔 (신규)', '206g 경량'],

    priceAnalysis: {
      msrp: 299000,
      costPerKm: 997,
      valueRating: 6,
      priceTier: 'super-premium',
      alternatives: ['nike-vaporfly-4', 'asics-metaspeed-sky-plus', 'adidas-adios-pro-4'],
    },

    detailedSpecs: {
      weight: '206g (US M9)',
      stackHeight: '힐 39.5mm / 포어풋 31.5mm',
      drop: '8mm',
      midsole: 'PWRRUN HG (상층) + PWRRUN PB (하층)',
      plate: '풀렝스 슬롯형 카본 파이버 플레이트',
      outsole: 'PWRTRAC 러버',
      upper: '경량 엔지니어드 메쉬',
      width: '표준 (D)',
      durability: '300km',
      price: '₩299,000',
      costPerKm: '₩997/km',
      footType: '중립 (전족부/중족부 착지 최적)',
      landingPattern: '전족부/중족부 착지',
    },

    reviews: [
      {
        userType: '에디터 분석',
        rating: 88,
        text: '프로 4의 안정적인 베이스를 유지하면서 슬롯 카본 플레이트로 전환 효율을 높인 정석적 업데이트입니다. 206g으로 베이퍼플라이(185g)보다 무겁지만, 넓은 핏과 안정적인 플랫폼이 장거리 레이스에서 강점입니다. PWRTRAC 아웃솔이 젖은 노면에서도 그립을 유지해줍니다. 29만 9천원 가격이 부담되지만 레이스당 비용으로 생각하면 합리적입니다.',
      },
      { userType: '상급 러너', rating: 5, text: '서울마라톤 서브3:15 목표로 구매했습니다. 275mm 착용 중인데 토박스가 넉넉한 편이라 발볼 걱정이 없어요. 35km 이후에도 카본의 추진력이 살아있어서 후반부 페이스 유지에 큰 도움이 됩니다. 베이퍼플라이보다 안정감이 좋아서 풀마라톤에서는 프로 5가 더 낫다고 봅니다.' },
      { userType: '중급 러너', rating: 4, text: '하프마라톤 1시간 35분 목표 러너입니다. 프로 4에서 업그레이드했는데 슬롯 플레이트 덕분에 전환이 더 자연스러워졌어요. 다만 300km 내구성은 대회 전용으로만 써야 하는 제약이 있습니다. 훈련은 스피드 5로, 대회는 프로 5로 나눠 신고 있어요.' },
    ],

    similarShoes: ['nike-vaporfly-4', 'asics-metaspeed-sky-plus', 'adidas-adios-pro-4', 'saucony-endorphin-elite-2'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dRV51m' }],
  },
  {
    id: 'saucony-endorphin-azura',
    slug: 'saucony-endorphin-azura',
    brand: 'Saucony',
    name: '엔돌핀 아주라',
    image: '/images/shoes/saucony/endorphinazura/side.webp',
    images: [
      '/images/shoes/saucony/endorphinazura/side.webp',
      '/images/shoes/saucony/endorphinazura/top.webp',
      '/images/shoes/saucony/endorphinazura/outsole.webp',
      '/images/shoes/saucony/endorphinazura/front.webp',
      '/images/shoes/saucony/endorphinazura/back.webp',
    ],
    category: '데일리',
    rating: 4,
    status: 'new',
    price: 189000,
    description: '써코니의 논-플레이트 데일리 퍼포먼스 트레이너. PWRRUN PB 슈퍼폼과 SPEEDROLL 지오메트리로 카본 없이도 빠르고 부드러운 주행감을 제공합니다.',
    oneliner: '240g에 PWRRUN PB 슈퍼폼, 플레이트 없는 데일리 스피드',
    editorComment: '엔돌핀 아주라는 엔돌핀 스피드에서 나일론 플레이트를 빼고 스택을 40mm로 높인 "플레이트리스 퍼포먼스 트레이너"입니다. PWRRUN PB 슈퍼폼과 SPEEDROLL 로커가 만드는 스냅피한 전환감이 핵심이며, 이지런부터 템포런까지 다양한 페이스에서 자연스러운 라이드를 제공합니다. 18만 9천원으로 스피드 5(21만 9천원)보다 3만원 저렴하면서 일상 훈련에 더 적합합니다. 경쟁 모델은 아디다스 에보 SL, 뉴발란스 레벨 v5, 푸마 벨로시티 나이트로 4입니다.',
    tags: ['데일리', '퍼포먼스 트레이너', '논플레이트', '스피드'],

    specs: {
      weight: 240,
      cushioning: 7,
      responsiveness: 8,
      stability: 6,
      drop: 8,
      durability: 600,
    },

    biomechanics: {
      stackHeight: { heel: 40, forefoot: 32 },
      drop: 8,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'PWRRUN PB',
      optimalPace: '4:00-6:00 min/km',
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
      recommended: ['데일리 퍼포먼스 훈련', '템포런~이지런 겸용', '가벼운 트레이너 선호', '엔돌핀 라인 입문'],
      notRecommended: ['대회 레이싱', '안정화 필요 러너', '맥시멀 쿠셔닝 선호'],
    },

    features: ['PWRRUN PB 슈퍼폼', 'SPEEDROLL 로커 지오메트리', 'XT-900 아웃솔', '논-플레이트 디자인', '240g 경량'],

    priceAnalysis: {
      msrp: 189000,
      costPerKm: 315,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['adidas-adizero-evo-sl', 'new-balance-rebel-v5', 'puma-velocity-nitro-4'],
    },

    detailedSpecs: {
      weight: '240g (US M9)',
      stackHeight: '힐 40mm / 포어풋 32mm',
      drop: '8mm',
      midsole: 'PWRRUN PB (PEBA 기반 슈퍼폼)',
      plate: '없음',
      outsole: 'XT-900 러버',
      upper: '엔지니어드 메쉬',
      width: '표준 (D)',
      durability: '600km',
      price: '₩189,000',
      costPerKm: '₩315/km',
      footType: '중립',
      landingPattern: '중족부/전족부 착지',
    },

    reviews: [
      {
        userType: '에디터 분석',
        rating: 84,
        text: '18만 9천원에 PWRRUN PB 슈퍼폼을 데일리 트레이너에 담은 것이 아주라의 가치입니다. 플레이트 없이도 SPEEDROLL 로커가 빠른 전환을 만들어주고, 40mm 스택이 장거리에서도 쿠셔닝을 유지합니다. 스피드 5처럼 5K 인터벌에 쓰기엔 반발력이 부족하지만, 6분/km 이지런부터 4:30/km 템포런까지 편안하게 커버합니다. 발볼이 표준 사이즈라 넓은 발 러너는 시착 필수입니다.',
      },
      { userType: '중급 러너', rating: 4, text: '스피드 5와 고민하다가 데일리용으로 아주라를 선택했어요. 한강 뚝섬에서 주 4회 10km씩 뛰는데, 5분/km 페이스에서 SPEEDROLL의 굴러가는 느낌이 정말 좋습니다. 플레이트가 없어서 발목에 부담이 덜하고 매일 신기 편해요. 다만 에보 SL(20만 9천원)과 비교하면 바운스가 좀 약한 느낌입니다.' },
      { userType: '입문 러너', rating: 4, text: '러닝 6개월차, 처음으로 퍼포먼스 트레이너를 사봤습니다. 이전에 라이드 18 신었는데 아주라가 확실히 가볍고 반응이 좋아요. 265mm로 딱 맞게 신고 있는데 통기성도 괜찮습니다. 18만원대에 이 정도 성능이면 만족입니다.' },
    ],

    similarShoes: ['adidas-adizero-evo-sl', 'new-balance-rebel-v5', 'puma-velocity-nitro-4', 'saucony-endorphin-speed-5'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dRV6Eh' }],
  },
  {
    id: 'saucony-ride-19',
    slug: 'saucony-ride-19',
    brand: 'Saucony',
    name: '라이드 19',
    image: '/images/shoes/saucony/ride19/side.webp',
    images: [
      '/images/shoes/saucony/ride19/side.webp',
      '/images/shoes/saucony/ride19/top.webp',
      '/images/shoes/saucony/ride19/outsole.webp',
      '/images/shoes/saucony/ride19/front.webp',
      '/images/shoes/saucony/ride19/back.webp',
    ],
    category: '입문화',
    rating: 4,
    status: 'new',
    price: 179000,
    description: '써코니의 대표 데일리 트레이너. 개선된 SCF PWRRUN+ 폼으로 전작보다 부드럽고 반응성 좋은 주행감을 제공하며, 10mm 넓어진 전족부로 편안한 핏을 갖췄습니다.',
    oneliner: '255g에 개선된 PWRRUN+, 더 부드럽고 넓어진 데일리 트레이너',
    editorComment: '라이드 19는 전작(라이드 18) 대비 SCF PWRRUN+ 폼을 개선해 "더 가볍고, 부드럽고, 반응성 좋은" 착지감을 실현했습니다. 전족부가 10mm 넓어져 한국 러너의 넓은 발볼에 더 친화적이며, 255g 무게는 전작과 동일합니다. 17만 9천원으로 라이드 18(15만 9천원)보다 2만원 올랐지만, 미국 기준 $145로 같은 카테고리 중 합리적인 가격입니다. 와이드 옵션 제공으로 발볼 걱정을 덜어주며, 주 3-5회 데일리 훈련에 가장 신뢰할 수 있는 중립화입니다.',
    tags: ['입문화', '데일리', '쿠셔닝', '중립'],

    specs: {
      weight: 255,
      cushioning: 7,
      responsiveness: 6,
      stability: 6,
      drop: 8,
      durability: 700,
    },

    biomechanics: {
      stackHeight: { heel: 36, forefoot: 28 },
      drop: 8,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'SCF PWRRUN+',
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

    features: ['개선된 SCF PWRRUN+ 미드솔', 'FORMFIT 기술', '10mm 넓어진 전족부', '와이드 옵션 제공', '8mm 드롭'],

    priceAnalysis: {
      msrp: 179000,
      costPerKm: 256,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['nike-pegasus-41', 'asics-gel-nimbus-28', 'brooks-ghost-17'],
    },

    detailedSpecs: {
      weight: '255g (US M9)',
      stackHeight: '힐 36mm / 포어풋 28mm',
      drop: '8mm (8.5mm 실측)',
      midsole: 'SCF PWRRUN+ (개선된 질소 주입 TPU)',
      plate: '없음',
      outsole: 'PWRTRAC 러버',
      upper: '엔지니어드 메쉬',
      width: '표준 (D), 와이드 (2E) 옵션',
      durability: '700km',
      price: '₩179,000',
      costPerKm: '₩256/km',
      footType: '중립',
      landingPattern: '후족부/중족부 착지',
    },

    reviews: [
      {
        userType: '에디터 분석',
        rating: 85,
        text: '라이드 19는 전작의 장점을 유지하면서 쿠셔닝을 부드럽게 개선한 안정적 업데이트입니다. 개선된 SCF PWRRUN+ 폼이 전작의 단단한 느낌(26.1 HA)을 줄이고 더 쿠션감 있는 착지를 제공합니다. 전족부 10mm 확장은 발볼 넓은 한국 러너에게 큰 장점이며, 와이드 옵션까지 있습니다. 17만 9천원에 700km 내구성이면 km당 256원으로 가성비 우수합니다. 페가수스 41(15만 9천원/550km)보다 내구성이 좋고, 고스트 17(16만 9천원/800km)보다 가볍습니다.',
      },
      { userType: '입문 러너', rating: 5, text: '라이드 18에서 업그레이드했어요. 265mm 와이드 착용 중인데, 전족부가 넓어져서 이전보다 편합니다. 한강 잠원~반포 구간 주 3회 5km 뛰는데, 확실히 착지가 부드러워졌어요. 처음 러닝화를 고르는 친구한테도 추천하고 싶은 신발입니다.' },
      { userType: '중급 러너', rating: 4, text: '주간 35km 데일리 훈련용으로 쓰고 있습니다. 5분30초/km 페이스에서 발이 편안하고, 18보다 쿠셔닝이 부드러워져서 장거리에서 피로감이 덜해요. 다만 빠른 페이스(4:30/km 이하)에서는 여전히 물렁한 느낌이라 템포런은 다른 신발로 돌리고 있습니다.' },
    ],

    similarShoes: ['saucony-ride-18', 'nike-pegasus-41', 'brooks-ghost-17', 'asics-gel-nimbus-28'],
    purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/dRV7Ln' }],
  },
];
