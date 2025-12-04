import type { Shoe } from '@/types/shoe';

export const categoryOrder: string[] = ['입문화', '데일리', '쿠션화', '레이싱', '안정화'];

const shoes: Shoe[] = [
  // Nike - 페가수스 41 (완전한 데이터)
  {
    id: 'nike-pegasus-41',
    slug: 'nike-pegasus-41',
    brand: 'Nike',
    name: '페가수스 41',
    category: '입문화',
    rating: 4,
    price: 159000,
    description: '초보부터 중급까지, 모든 러너를 위한 올라운더 러닝화입니다. 편안한 착화감(76% 구매 결정 1순위)과 충분한 쿠셔닝으로 첫 러닝화로 완벽한 선택입니다.',
    tags: ['입문화', '데일리 러닝', '쿠셔닝 우수'],

    specs: {
      weight: 280,
      cushioning: 9,
      responsiveness: 7,
      stability: 8,
      drop: 10,
      durability: 550,
    },

    biomechanics: {
      stackHeight: {
        heel: 32,
        forefoot: 22,
      },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'ReactX Foam',
      optimalPace: '5:00-7:00 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'excellent',
      achillesTendinopathy: 'excellent',
      kneeIssues: 'caution',
      shinSplints: 'excellent',
    },

    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'good',
      wideOptions: false,
      winterCompatibility: 'good',
    },

    targetUsers: {
      recommended: ['러닝 입문자 (쿠셔닝 중시)', '무릎 보호가 필요한 러너', '장거리 편안함 원하는 분', '가성비 좋은 올라운더 찾는 분', '뒤꿈치 착지(RFS) 러너 (~85%)', '데일리 5-10km 주행'],
      notRecommended: ['마라톤 기록 단축 목표', '초경량 레이싱화 찾는 분', '강한 반발력 원하는 상급자', '대회용 전문 러닝화 필요'],
    },

    features: ['최상급 착화감 (76% 1순위)', '충분한 쿠셔닝 (초보자 최우선)', '적정 무게 (280g)', '뛰어난 가성비 (15만원대)'],

    priceAnalysis: {
      msrp: 159000,
      streetPrice: 135000,
      costPerKm: 280,
      valueRating: 9,
      priceTier: 'mid',
      alternatives: ['아식스 쿠무루스 27', '뉴발란스 880 V14', '호카 클리프턴 10'],
    },

    reviews: [
      {
        userType: '입문 러너',
        rating: 5,
        text: '처음 러닝 시작하면서 구매했는데 발이 너무 편해요. 쿠션이 푹신해서 무릎에 무리가 안 가는 느낌이고, 5km 뛰고 나서도 발이 안 아파서 놀랐습니다. 디자인도 예뻐서 일상에서도 신고 다녀요! 가성비 최고!',
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: '데일리 러닝용으로는 정말 좋습니다. 편안하고 안정적이에요. 다만 마라톤 기록 단축을 원한다면 조금 무거울 수 있어요. 훈련용으로는 최고지만 레이스용은 베이퍼플라이 따로 준비했습니다. 발볼이 표준이라 와이드 옵션 있으면 더 좋겠어요.',
      },
      {
        userType: '가성비 중시',
        rating: 5,
        text: '나이키 페가수스는 "검증된 올라운더"라는 말이 괜히 있는 게 아니에요. 15만원대 가격에 이 정도 성능이면 정말 만족스럽습니다. 500km 넘게 신었는데 아직도 쿠션이 살아있어요. 주변에도 많이 추천했어요! 초보 러너 첫 신발로 강력 추천합니다.',
      },
      {
        userType: '평발 러너',
        rating: 3,
        text: '평발인데 아치 서포트가 적당해서 괜찮았어요. 다만 심한 과내전이 있다면 GT-2000 같은 안정화가 더 나을 것 같아요. 발볼이 넓은 편인데 표준 폭이라 약간 답답했습니다. 와이드 사이즈가 있으면 완벽할 것 같아요.',
      },
    ],

    detailedSpecs: {
      weight: '280g (남성 US 9 기준) / 240g (여성 US 7)',
      stackHeight: '힐 32mm / 포어풋 22mm (최적 범위 초과)',
      drop: '10mm (표준 드롭, 뒤꿈치 착지 유도)',
      midsole: 'ReactX 폼 (EVA보다 우수한 에너지 리턴)',
      plate: '없음 (자연스러운 발 움직임, 초보자 안전)',
      outsole: '고무 + 와플 패턴 (내구성 우수)',
      upper: '엔지니어드 메쉬 (통기성 우수)',
      width: '표준 (와이드 옵션 없음 - 한국인 발에 주의)',
      durability: '500-600km (내구성 우수)',
      price: '₩159,000 (MSRP) / 세일 시 ₩120,000~',
      costPerKm: '약 ₩280/km (550km 기준 - 가성비 우수)',
      footType: '평발 OK / 높은 아치 OK / 발볼 넓음 주의',
      landingPattern: '뒤꿈치 착지(RFS) 최적 (~85% 러너)',
    },

    similarShoes: ['adidas-supernova-rise-2', 'asics-cumulus-27', 'newbalance-880-v14', 'hoka-clifton-10'],
  },
  // Nike - 입문화
  { brand: 'Nike', name: '페가수스 41', category: '입문화', rating: 4 },
  {
    id: 'nike-pegasus-premium',
    slug: 'nike-pegasus-premium',
    brand: 'Nike',
    name: '페가수스 프리미엄',
    category: '입문화',
    rating: 4.5,
    price: 189000,
    description: '페가수스 라인의 업그레이드 버전으로, 더 부드러운 ReactX와 두툼한 Zoom Air 포드로 장거리 초보에게 안정적인 쿠셔닝을 제공합니다.',
    tags: ['입문화', '쿠셔닝', '데일리'],
    specs: {
      weight: 285,
      cushioning: 9,
      responsiveness: 7,
      stability: 8,
      drop: 10,
      durability: 600,
    },
    biomechanics: {
      stackHeight: { heel: 34, forefoot: 24 },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'ReactX + Zoom Air 포드',
      optimalPace: '5:15-6:45 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'excellent',
      achillesTendinopathy: 'good',
      kneeIssues: 'caution',
      shinSplints: 'good',
    },
    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'good',
      wideOptions: true,
      winterCompatibility: 'good',
    },
    targetUsers: {
      recommended: ['첫 마라톤 준비 입문자', '쿠션 우선 러너', '무릎 보호를 원하는 데일리 러너'],
      notRecommended: ['기록 단축 레이싱 목적', '초경량화만 찾는 러너'],
    },
    features: ['업데이트된 ReactX 쿠션', '전족/후족 Zoom Air 더블 포드', '와이드 옵션 제공', '안정적인 힐 카운터'],
    priceAnalysis: {
      msrp: 189000,
      streetPrice: 165000,
      costPerKm: 300,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['뉴발란스 1080', '아식스 님버스 27'],
    },
    detailedSpecs: {
      weight: '285g (US 9 기준)',
      stackHeight: '힐 34mm / 포어풋 24mm',
      drop: '10mm',
      midsole: 'ReactX + 더블 Zoom Air',
      plate: '없음',
      outsole: '와플 패턴 고무',
      upper: '엔지니어드 메쉬',
      width: '표준 / 와이드',
      durability: '600km 예상',
      price: '₩189,000 (MSRP)',
      costPerKm: '약 ₩300/km (600km 기준)',
      footType: '평발~중립',
      landingPattern: 'RFS 위주',
    },
    reviews: [
      {
        userType: '입문 러너',
        rating: 5,
        text: '페가수스 41에서 업그레이드했는데 Zoom Air 포드가 추가되니까 쿠션감이 확실히 다르네요. 10km 넘게 뛰어도 발이 편하고, 특히 뒤꿈치 착지할 때 충격 흡수가 좋아요. 첫 하프마라톤 준비하는데 이 신발로 훈련 중입니다!',
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: '장거리 데일리 트레이너로 훌륭합니다. 페가수스 41보다 쿠션이 두껍고 반발력도 좋아졌어요. 다만 285g으로 약간 무거워서 인터벌 훈련에는 좀 답답할 수 있어요. LSD(장거리 저속 러닝)용으로는 최고!',
      },
      {
        userType: '평발 러너',
        rating: 4,
        text: '평발인데 와이드 옵션이 있어서 선택했어요. 아치 서포트는 보통 수준이지만 쿠션이 푹신해서 장시간 뛰어도 발바닥이 안 아파요. 심한 과내전이 있으면 안정화가 낫겠지만, 경미한 평발이면 충분합니다.',
      },
      {
        userType: '가성비 중시',
        rating: 4,
        text: '18만원대가 부담스러웠는데 세일 때 16만원대에 샀어요. 페가수스 41보다 3만원 비싸지만 Zoom Air 더블 포드와 업그레이드된 쿠션 생각하면 가치가 있어요. 600km 내구성이면 km당 300원도 안 되니 괜찮은 투자입니다.',
      },
    ],
    similarShoes: ['nike-pegasus-41', 'adidas-supernova-rise-2'],
  },
  {
    id: 'nike-pegasus-plus',
    slug: 'nike-pegasus-plus',
    brand: 'Nike',
    name: '페가수스 플러스',
    category: '입문화',
    rating: 4.2,
    price: 179000,
    description: '페가수스의 밸런스에 쿠션과 내구성을 더한 모델로, 일상 러닝과 헬스장 겸용에 적합한 올라운더.',
    tags: ['입문화', '데일리', '멀티유즈'],
    specs: {
      weight: 278,
      cushioning: 8,
      responsiveness: 7,
      stability: 8,
      drop: 10,
      durability: 650,
    },
    biomechanics: {
      stackHeight: { heel: 33, forefoot: 23 },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'ReactX',
      optimalPace: '5:00-6:30 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'good',
      kneeIssues: 'caution',
      shinSplints: 'good',
    },
    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'good',
      wideOptions: true,
      winterCompatibility: 'good',
    },
    targetUsers: {
      recommended: ['첫 러닝화 찾는 입문자', '헬스+러닝 겸용', '무릎 부담 줄이고 싶은 러너'],
      notRecommended: ['5k/10k 기록 단축 목적', '초경량 미니멀 성향'],
    },
    features: ['ReactX 미드솔', '와플 러버 내구 아웃솔', '헬스장/데일리 겸용 디자인', '와이드 사이즈 제공'],
    priceAnalysis: {
      msrp: 179000,
      streetPrice: 155000,
      costPerKm: 238,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['호카 클리프턴 10', '아식스 쿠무루스 27'],
    },
    detailedSpecs: {
      weight: '278g (US 9 기준)',
      stackHeight: '힐 33mm / 포어풋 23mm',
      drop: '10mm',
      midsole: 'ReactX 폼',
      plate: '없음',
      outsole: '와플 패턴 고무',
      upper: '엔지니어드 메쉬',
      width: '표준 / 와이드',
      durability: '600-650km 예상',
      price: '₩179,000 (MSRP)',
      costPerKm: '약 ₩238/km (650km 기준)',
      footType: '평발~중립, 와이드 호환',
      landingPattern: 'RFS 위주',
    },
    reviews: [
      {
        userType: '입문 러너',
        rating: 5,
        text: '헬스장에서 러닝머신 타다가 야외 러닝 시작하면서 샀어요. 헬스장에서도 신고, 주말에 한강에서도 뛰는데 둘 다 잘 맞아요. 쿠션이 푹신해서 초보자한테 딱이고, 디자인도 예뻐서 일상복에도 어울려요!',
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: '세컨드 슈즈로 구매했습니다. 메인은 보메로인데, 가벼운 러닝이나 헬스장 갈 때 이걸 신어요. 278g으로 가볍고 내구성이 650km라 오래 신을 수 있어요. 템포런에는 좀 물렁하지만 리커버리 데이용으로 좋습니다.',
      },
      {
        userType: 'Fun Runner',
        rating: 5,
        text: '러닝 재미로 시작했는데 이 신발 너무 좋아요! 무릎이 안 좋은데 쿠션이 좋아서 충격이 덜 와요. 5km 정도 뛰고 카페 가는 게 취미인데, 이 신발이면 러닝도 일상도 커버됩니다. 와이드 사이즈 있는 것도 큰 장점!',
      },
      {
        userType: '가성비 중시',
        rating: 4,
        text: '17만원대 가격에 650km 내구성이면 km당 약 240원! 가성비 최고예요. 페가수스 41보다 2만원 비싸지만 내구성이 100km 더 길어서 결국 이득이에요. 세일 때 사면 더 좋고요. 러닝+헬스 겸용으로 강추합니다.',
      },
    ],
    similarShoes: ['nike-pegasus-41', 'nike-pegasus-premium'],
  },

  // Nike - 쿠션화
  {
    id: 'nike-vomero-18',
    slug: 'nike-vomero-18',
    brand: 'Nike',
    name: '보메로 18',
    category: '쿠션화',
    rating: 5,
    price: 199000,
    description: 'Nike의 대표 맥스 쿠션 러닝화. ZoomX 폼과 Zoom Air 유닛의 조합으로 푹신하면서도 반발력 있는 승차감을 제공합니다. 장거리 러너들의 필수템.',
    tags: ['쿠션화', '장거리', 'ZoomX'],
    specs: {
      weight: 289,
      cushioning: 10,
      responsiveness: 7,
      stability: 7,
      drop: 10,
      durability: 650,
    },
    biomechanics: {
      stackHeight: { heel: 36, forefoot: 26 },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'ZoomX + Zoom Air',
      optimalPace: '5:30-7:00 min/km',
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
    },
    targetUsers: {
      recommended: ['장거리 러너 (하프/풀 마라톤)', '쿠션 최우선 러너', '무릎/발바닥 보호 필요', '회복 러닝용'],
      notRecommended: ['빠른 페이스 레이싱', '가벼운 신발 선호', '낮은 드롭 선호'],
    },
    features: ['풀렝스 ZoomX 폼', '전족/후족 Zoom Air 유닛', '와이드 옵션', '메쉬 어퍼 통기성'],
    priceAnalysis: {
      msrp: 199000,
      streetPrice: 175000,
      costPerKm: 306,
      valueRating: 8,
      priceTier: 'premium',
      alternatives: ['아식스 젤 님버스 27', '뉴발란스 프레시폼 모어 V5', '호카 본디 9'],
    },
    detailedSpecs: {
      weight: '289g (US 9 기준)',
      stackHeight: '힐 36mm / 포어풋 26mm',
      drop: '10mm',
      midsole: 'ZoomX + Zoom Air',
      plate: '없음',
      outsole: '러버 + 와플 패턴',
      upper: '엔지니어드 메쉬',
      width: '표준 / 와이드',
      durability: '600-650km',
      price: '₩199,000 (MSRP)',
      costPerKm: '약 ₩306/km (650km 기준)',
      footType: '중립~평발',
      landingPattern: 'RFS 위주',
    },
    reviews: [
      {
        userType: '입문 러너',
        rating: 5,
        text: '첫 러닝화로 보메로 샀는데 구름 위를 걷는 느낌이에요! 쿠션이 정말 푹신하고 10km 뛰어도 발이 안 아파요. 약간 무겁긴 한데 초보자한테는 쿠션이 더 중요한 것 같아요. 무릎이 안 좋았는데 이 신발 신고부터 통증이 많이 줄었습니다.',
      },
      {
        userType: '중급 러너',
        rating: 5,
        text: '장거리 LSD용으로 최고입니다. ZoomX가 이렇게 좋은 줄 몰랐어요. 20km 넘게 뛰어도 쿠션이 꺼지지 않고 발을 잘 받쳐줘요. 인터벌이나 템포런에는 좀 물렁하지만, 편안한 러닝에는 이만한 게 없어요.',
      },
      {
        userType: '평발 러너',
        rating: 4,
        text: '평발에 과내전이 좀 있는데, 와이드 사이즈로 구매했더니 발볼이 편해요. 쿠션이 좋아서 아치가 무너지는 느낌이 덜하고, 장시간 러닝에도 발바닥이 안 아파요. 심한 과내전이면 안정화가 낫겠지만 경미하면 충분합니다.',
      },
      {
        userType: '가성비 중시',
        rating: 4,
        text: '20만원 가까이 해서 고민했는데 세일 때 17만원대에 샀어요. ZoomX 폼에 650km 내구성이면 가격 대비 괜찮다고 봅니다. 페가수스보다 비싸지만 쿠션 차이가 확실히 느껴져서 장거리 러너라면 투자 가치 있어요.',
      },
    ],
    similarShoes: ['asics-gel-nimbus-27', 'newbalance-fresh-foam-more-v5', 'hoka-bondi-9'],
  },
  {
    id: 'nike-vomero-plus',
    slug: 'nike-vomero-plus',
    brand: 'Nike',
    name: '보메로 플러스',
    category: '쿠션화',
    rating: 5,
    price: 209000,
    description: '보메로 18의 업그레이드 버전. 더 두꺼운 ZoomX와 향상된 Zoom Air로 극한의 쿠셔닝을 제공합니다.',
    tags: ['쿠션화', '맥스쿠션', '장거리'],
    specs: {
      weight: 295,
      cushioning: 10,
      responsiveness: 7,
      stability: 7,
      drop: 10,
      durability: 650,
    },
    biomechanics: {
      stackHeight: { heel: 38, forefoot: 28 },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'ZoomX + Zoom Air 강화',
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
    },
    targetUsers: {
      recommended: ['풀마라톤 준비 러너', '최대 쿠션 추구', '무릎/관절 보호 최우선', '회복 러닝'],
      notRecommended: ['스피드 러닝', '가벼운 신발 선호', '민첩성 중시'],
    },
    features: ['강화된 ZoomX 볼륨', '더블 Zoom Air 유닛', '38mm 맥스 스택하이트', '와이드 옵션'],
    priceAnalysis: {
      msrp: 209000,
      streetPrice: 185000,
      costPerKm: 321,
      valueRating: 7,
      priceTier: 'premium',
      alternatives: ['호카 본디 9', '뉴발란스 프레시폼 모어 V5'],
    },
    detailedSpecs: {
      weight: '295g (US 9 기준)',
      stackHeight: '힐 38mm / 포어풋 28mm',
      drop: '10mm',
      midsole: 'ZoomX + Zoom Air 강화',
      plate: '없음',
      outsole: '러버 아웃솔',
      upper: '엔지니어드 메쉬',
      width: '표준 / 와이드',
      durability: '600-650km',
      price: '₩209,000 (MSRP)',
      costPerKm: '약 ₩321/km (650km 기준)',
      footType: '중립~평발',
      landingPattern: 'RFS 위주',
    },
    reviews: [
      {
        userType: '중급 러너',
        rating: 5,
        text: '보메로 18에서 업그레이드했는데 쿠션이 한층 더 푹신해졌어요! 38mm 스택하이트가 무릎 충격을 완전히 흡수해주는 느낌. 풀마라톤 훈련 중인데 장거리 30km 뛰어도 발이 살아있어요. 무게가 좀 있지만 편안함이 더 중요합니다.',
      },
      {
        userType: '상급 러너',
        rating: 4,
        text: '리커버리 데이용으로 구매했습니다. 평소에는 베이퍼플라이나 알파플라이 신는데, 회복 러닝 때 이 신발 신으면 다리가 확실히 덜 피로해요. 빠른 러닝에는 물렁하지만 그게 이 신발의 목적이니까요.',
      },
      {
        userType: '평발 러너',
        rating: 5,
        text: '평발에 무릎이 안 좋아서 맥스 쿠션 찾다가 이걸로 결정했어요. 와이드 사이즈에 38mm 쿠션이면 제 조건에 딱이에요. 장거리 뛰어도 무릎 통증 없고, 발바닥도 편해요. 가격이 좀 있지만 관절 보호 생각하면 투자 가치 있어요.',
      },
      {
        userType: '가성비 중시',
        rating: 3,
        text: '21만원은 좀 비싸긴 해요. 하지만 세일 때 18만원대면 고려해볼 만합니다. 보메로 18보다 1만원 더 비싼데 스택하이트가 2mm 더 높고 쿠션이 확실히 좋아요. 장거리 러너라면 추가 투자 가치는 있습니다.',
      },
    ],
    similarShoes: ['nike-vomero-18', 'hoka-bondi-9', 'newbalance-fresh-foam-more-v5'],
  },
  {
    id: 'nike-vomero-premium',
    slug: 'nike-vomero-premium',
    brand: 'Nike',
    name: '보메로 프리미엄',
    category: '쿠션화',
    rating: 4.8,
    price: 209000,
    description: 'ZoomX와 Cushlon을 이중으로 사용해 쿠션과 반발력을 모두 챙긴 고급 데일리 트레이너. 장거리 안정성과 내구성이 강점입니다.',
    tags: ['쿠션화', '롱런', '프리미엄'],
    specs: {
      weight: 292,
      cushioning: 9,
      responsiveness: 8,
      stability: 8,
      drop: 10,
      durability: 700,
    },
    biomechanics: {
      stackHeight: { heel: 36, forefoot: 26 },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'ZoomX + Cushlon 캐리어',
      optimalPace: '5:30-6:45 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'excellent',
      kneeIssues: 'caution',
      shinSplints: 'good',
    },
    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'good',
      wideOptions: true,
      winterCompatibility: 'good',
    },
    targetUsers: {
      recommended: ['주 3-5회 장거리 데일리', '쿠션/반발 균형 중시 러너', '무릎/아킬레스 보호'],
      notRecommended: ['레이싱용 초경량 선호', '낮은 드롭 선호 러너'],
    },
    features: ['ZoomX + Cushlon 이중 쿠션', '히든 Zoom Air 포드', '와이드 옵션', '700km급 내구성'],
    priceAnalysis: {
      msrp: 209000,
      streetPrice: 185000,
      costPerKm: 264,
      valueRating: 8,
      priceTier: 'premium',
      alternatives: ['아식스 님버스 27', '뉴발란스 1080 V14'],
    },
    detailedSpecs: {
      weight: '292g (US 9 기준)',
      stackHeight: '힐 36mm / 포어풋 26mm',
      drop: '10mm',
      midsole: 'ZoomX + Cushlon',
      plate: '없음',
      outsole: '블로운 러버 + DRS',
      upper: '엔지니어드 메쉬',
      width: '표준 / 와이드',
      durability: '650-700km 예상',
      price: '₩209,000 (MSRP)',
      costPerKm: '약 ₩264/km (700km 기준)',
      footType: '중립~경도 평발, 와이드 호환',
      landingPattern: 'RFS 위주',
    },
    reviews: [
      {
        userType: '중급 러너',
        rating: 5,
        text: 'ZoomX와 Cushlon 조합이 정말 좋습니다. 쿠션은 푹신한데 무르지 않고 반발력도 있어요. 주 5회 10-15km 러닝하는데 발 피로도가 확 줄었어요. 아킬레스건 부상 이력 있는데 이 신발 신고부터 재발 없이 잘 뛰고 있습니다.',
      },
      {
        userType: '상급 러너',
        rating: 4,
        text: 'LSD와 리커버리 러닝용으로 최고입니다. 292g이라 빠른 러닝에는 안 맞지만, 주 3회 장거리 훈련 때 신으면 다리가 덜 지쳐요. 알파플라이로 레이스하고, 보메로로 회복 러닝하는 조합 추천드려요.',
      },
      {
        userType: '평발 러너',
        rating: 4,
        text: '와이드 옵션에 쿠션 좋은 거 찾다가 이걸로 결정했어요. 36mm 스택하이트가 충격 흡수 엄청 좋고, 평발이지만 아치가 무너지는 느낌 없이 안정적이에요. 20km 이상 장거리에서 진가를 발휘합니다.',
      },
      {
        userType: '가성비 중시',
        rating: 3,
        text: '20만원 넘는 가격이 부담되긴 했어요. 하지만 700km 내구성에 ZoomX 폼이면 투자 가치는 있습니다. km당 264원이면 괜찮은 편이에요. 다만 입문자한테는 좀 과한 스펙이고, 주 3회 이상 뛰는 중급자 이상한테 추천합니다.',
      },
    ],
    similarShoes: ['nike-pegasus-premium', 'nike-pegasus-plus'],
  },

  // Nike - 안정화
  {
    id: 'nike-structure-26',
    slug: 'nike-structure-26',
    brand: 'Nike',
    name: '스트럭처 26',
    category: '안정화',
    rating: 4,
    price: 149000,
    description: 'Nike의 대표 안정화. 내측에 고밀도 폼을 배치해 과내전을 효과적으로 제어하면서도 편안한 쿠셔닝을 제공합니다. 평발 러너들의 든든한 동반자.',
    tags: ['안정화', '과내전', '평발'],
    specs: {
      weight: 275,
      cushioning: 8,
      responsiveness: 7,
      stability: 9,
      drop: 10,
      durability: 600,
    },
    biomechanics: {
      stackHeight: { heel: 33, forefoot: 23 },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'React + 듀얼 밀도 폼',
      optimalPace: '5:30-7:00 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'good',
      kneeIssues: 'excellent',
      shinSplints: 'good',
    },
    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'excellent',
      wideOptions: true,
      winterCompatibility: 'good',
    },
    targetUsers: {
      recommended: ['과내전 러너', '평발 러너', '무릎 내측 통증 경험자', '안정성 필요한 입문자'],
      notRecommended: ['정상/높은 아치', '중립 착지 러너', '레이싱용'],
    },
    features: ['내측 고밀도 폼', 'React 쿠션', '와이드 옵션', '과내전 제어'],
    priceAnalysis: {
      msrp: 149000,
      streetPrice: 125000,
      costPerKm: 248,
      valueRating: 9,
      priceTier: 'mid',
      alternatives: ['아식스 GT-2000 13', '뉴발란스 860 V14', '브룩스 고스트 GTS 17'],
    },
    detailedSpecs: {
      weight: '275g (US 9 기준)',
      stackHeight: '힐 33mm / 포어풋 23mm',
      drop: '10mm',
      midsole: 'React + 듀얼 밀도 폼',
      plate: '없음',
      outsole: '러버 + 와플 패턴',
      upper: '엔지니어드 메쉬',
      width: '표준 / 와이드',
      durability: '550-600km',
      price: '₩149,000 (MSRP)',
      costPerKm: '약 ₩248/km (600km 기준)',
      footType: '평발/과내전 전용',
      landingPattern: 'RFS 위주',
    },
    reviews: [
      {
        userType: '평발 러너',
        rating: 5,
        text: '평발에 심한 과내전인데 이 신발이 제 발을 구했어요! 내측 서포트가 확실해서 달릴 때 발목이 안으로 꺾이는 느낌이 없어요. 예전에 중립화 신다가 무릎 통증 있었는데, 스트럭처로 바꾸고 통증이 사라졌습니다. 평발 러너 필수템!',
      },
      {
        userType: '입문 러너',
        rating: 4,
        text: '러닝 시작하면서 발 분석 받았는데 과내전이래서 이 신발 추천받았어요. 처음에는 내측이 딱딱한 느낌이었는데 적응하니까 오히려 안정감 있어서 좋아요. 5km 뛰는데 발이 흔들리지 않고 안정적으로 착지돼요.',
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: '과내전 교정용으로 구매했습니다. GT-2000이랑 비교했는데 스트럭처가 쿠션이 좀 더 부드러워요. 안정성은 비슷한데 React 폼 덕분에 장거리에서 발 피로도가 덜해요. 다만 와이드 사이즈가 좀 여유로워서 반 사이즈 다운 추천.',
      },
      {
        userType: '가성비 중시',
        rating: 5,
        text: '15만원 미만에 제대로 된 안정화 찾기 힘든데 스트럭처 26은 가성비 최고예요. 세일 때 12만원대면 더 좋고요. 600km 내구성에 과내전 교정까지 되니 평발 러너한테는 이보다 좋은 선택이 없어요.',
      },
    ],
    similarShoes: ['asics-gt-2000-13', 'newbalance-860-v14', 'brooks-ghost-gts-17'],
  },

  // Nike - 쿠션화
  {
    id: 'nike-ultrafly-4',
    slug: 'nike-ultrafly-4',
    brand: 'Nike',
    name: '올트라플라이 4',
    category: '쿠션화',
    rating: 4,
    price: 179000,
    description: '트레일과 로드를 넘나드는 하이브리드 쿠션화. ZoomX 폼과 강화된 아웃솔로 다양한 지형에서 편안한 러닝을 제공합니다.',
    tags: ['쿠션화', '하이브리드', '다목적'],
    specs: {
      weight: 292,
      cushioning: 8,
      responsiveness: 7,
      stability: 8,
      drop: 8,
      durability: 550,
    },
    biomechanics: {
      stackHeight: { heel: 32, forefoot: 24 },
      drop: 8,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'ZoomX',
      optimalPace: '5:30-7:00 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'good',
      kneeIssues: 'good',
      shinSplints: 'good',
    },
    koreanFootFit: {
      toBoxWidth: 'wide',
      flatFootCompatibility: 'good',
      wideOptions: false,
      winterCompatibility: 'excellent',
    },
    targetUsers: {
      recommended: ['도심+공원 혼합 러닝', '가벼운 트레일', '다목적 러닝화 원하는 분'],
      notRecommended: ['순수 로드 러닝', '레이싱용', '가벼운 신발 선호'],
    },
    features: ['ZoomX 쿠션', '트레일 대응 아웃솔', '넓은 토박스', '발목 보호 패딩'],
    priceAnalysis: {
      msrp: 179000,
      streetPrice: 155000,
      costPerKm: 325,
      valueRating: 7,
      priceTier: 'mid',
      alternatives: ['호카 스피드고트', '뉴발란스 프레시폼 히에로'],
    },
    detailedSpecs: {
      weight: '292g (US 9 기준)',
      stackHeight: '힐 32mm / 포어풋 24mm',
      drop: '8mm',
      midsole: 'ZoomX',
      plate: '없음',
      outsole: '러그 패턴 러버',
      upper: '강화 메쉬',
      width: '와이드 핏',
      durability: '500-550km',
      price: '₩179,000 (MSRP)',
      costPerKm: '약 ₩325/km (550km 기준)',
      footType: '중립~평발',
      landingPattern: 'MFS/RFS',
    },
    reviews: [
      {
        userType: '입문 러너',
        rating: 4,
        text: '한강 공원이랑 산책로 번갈아 뛰는데 이 신발 하나로 다 커버돼요! 토박스가 넓어서 발볼 넓은 제 발에 딱 맞고, 흙길에서도 미끄럽지 않아요. 순수 로드용보다는 조금 무겁지만 다용도로 쓰기 좋아요.',
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: '도심 러닝에 가끔 공원 트레일도 뛰는데 올트라플라이가 두 가지 다 잘 해줘요. ZoomX 쿠션이 로드에서도 좋고, 아웃솔 그립이 젖은 흙길에서도 버텨줘요. 다만 순수 로드 러닝이라면 페가수스가 더 가볍고 좋아요.',
      },
      {
        userType: 'Fun Runner',
        rating: 5,
        text: '주말에 북한산 둘레길 가볍게 뛰고, 평일엔 동네 러닝하는데 이 신발 딱이에요! 하나로 다 되니까 신발 여러 켤레 안 사도 돼요. 발목 패딩도 두꺼워서 트레일에서 안정감 있고, 디자인도 예뻐서 만족해요.',
      },
      {
        userType: '가성비 중시',
        rating: 3,
        text: '18만원에 로드+트레일 겸용이면 괜찮은데, 솔직히 둘 다 전문 신발보다는 못해요. 로드는 페가수스가, 트레일은 전용화가 더 좋아요. 하지만 두 켤레 살 예산 없으면 올트라플라이 하나로 타협 가능합니다.',
      },
    ],
    similarShoes: ['hoka-speedgoat', 'newbalance-fresh-foam-hierro'],
  },

  // Nike - 데일리
  {
    id: 'nike-rival-fly-4',
    slug: 'nike-rival-fly-4',
    brand: 'Nike',
    name: '라이벌 플라이 4',
    category: '데일리',
    rating: 4,
    price: 129000,
    description: '가볍고 빠른 데일리 트레이너. 템포런과 인터벌 훈련에 적합한 반응성 좋은 쿠션과 경량 설계가 특징입니다. 레이싱화로 넘어가기 전 훈련용으로 완벽.',
    tags: ['데일리', '템포런', '경량'],
    specs: {
      weight: 236,
      cushioning: 6,
      responsiveness: 8,
      stability: 7,
      drop: 10,
      durability: 450,
    },
    biomechanics: {
      stackHeight: { heel: 26, forefoot: 16 },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Cushlon 3.0',
      optimalPace: '4:00-5:30 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'caution',
      achillesTendinopathy: 'good',
      kneeIssues: 'caution',
      shinSplints: 'caution',
    },
    koreanFootFit: {
      toBoxWidth: 'narrow',
      flatFootCompatibility: 'poor',
      wideOptions: false,
      winterCompatibility: 'fair',
    },
    targetUsers: {
      recommended: ['템포런/인터벌 훈련', '중급+ 러너', '가벼운 레이스 준비', '스피드 훈련'],
      notRecommended: ['입문 러너', '장거리 편안함 추구', '평발/과내전', '쿠션 중시'],
    },
    features: ['경량 236g', 'Cushlon 3.0 반응성', '얇은 스택하이트', '레이싱 핏'],
    priceAnalysis: {
      msrp: 129000,
      streetPrice: 105000,
      costPerKm: 286,
      valueRating: 8,
      priceTier: 'budget',
      alternatives: ['아식스 매직스피드 4', '뉴발란스 퓨얼셀 레벨 V5', '사코니 킨바라 15'],
    },
    detailedSpecs: {
      weight: '236g (US 9 기준)',
      stackHeight: '힐 26mm / 포어풋 16mm',
      drop: '10mm',
      midsole: 'Cushlon 3.0',
      plate: '없음',
      outsole: '러버 아웃솔',
      upper: '경량 메쉬',
      width: '표준 (좁은 편)',
      durability: '400-450km',
      price: '₩129,000 (MSRP)',
      costPerKm: '약 ₩286/km (450km 기준)',
      footType: '중립 발',
      landingPattern: 'MFS/FFS',
    },
    reviews: [
      {
        userType: '중급 러너',
        rating: 5,
        text: '템포런 전용으로 구매했는데 정말 좋아요! 236g 경량이라 발이 가볍고, 반발력이 좋아서 4분대 페이스에서 날아가는 느낌이에요. 인터벌 훈련 때 신기 딱 좋아요. 다만 장거리 LSD에는 쿠션이 부족해서 페가수스 따로 씁니다.',
      },
      {
        userType: '상급 러너',
        rating: 4,
        text: '레이싱화 워밍업용으로 쓰고 있어요. 베이퍼플라이나 알파플라이 신기 전 훈련용으로 딱이에요. 가격도 12만원대라 부담 없이 사서 열심히 굴릴 수 있어요. 반응성 좋고 접지력도 괜찮아요.',
      },
      {
        userType: '가성비 중시',
        rating: 5,
        text: '13만원 미만에 이런 템포 러너 찾기 어려워요! 세일 때 10만원대면 가성비 끝판왕이에요. 레이싱화까지는 필요 없고 훈련용 스피드화 원한다면 이게 답이에요. 주 2-3회 템포런용으로 강추합니다.',
      },
      {
        userType: '입문 러너',
        rating: 3,
        text: '첫 러닝화로 샀다가 쿠션이 너무 얇아서 발바닥이 아팠어요. 빠르게 뛰려는 욕심에 샀는데 초보한테는 안 맞아요. 지금은 페가수스로 바꾸고, 이건 가끔 스피드 훈련할 때만 신어요. 초보자는 쿠션화부터 시작하세요.',
      },
    ],
    similarShoes: ['asics-magic-speed-4', 'newbalance-fuelcell-rebel-v5', 'saucony-kinvara-15'],
  },

  // Nike - 레이싱
  {
    id: 'nike-alphafly-3',
    slug: 'nike-alphafly-3',
    brand: 'Nike',
    name: '알파플라이 3',
    category: '레이싱',
    rating: 5,
    price: 349000,
    description: 'Nike의 최상위 마라톤 레이싱화. 풀렝스 ZoomX, 카본 플레이트, 전족부 에어 포드의 삼중 기술로 최고의 추진력을 제공합니다. 킵초게가 세계 신기록을 세운 바로 그 신발.',
    tags: ['레이싱', '마라톤', '카본플레이트', '프리미엄'],
    specs: {
      weight: 212,
      cushioning: 8,
      responsiveness: 10,
      stability: 6,
      drop: 8,
      durability: 200,
    },
    biomechanics: {
      stackHeight: { heel: 40, forefoot: 32 },
      drop: 8,
      carbonPlate: true,
      plateType: 'curved',
      midsoleType: 'ZoomX + Air Zoom 포드',
      optimalPace: '3:00-4:30 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'caution',
      achillesTendinopathy: 'caution',
      kneeIssues: 'caution',
      shinSplints: 'caution',
    },
    koreanFootFit: {
      toBoxWidth: 'narrow',
      flatFootCompatibility: 'poor',
      wideOptions: false,
      winterCompatibility: 'poor',
    },
    targetUsers: {
      recommended: ['서브-3 마라토너', '엘리트 러너', '대회 기록 단축 목표', '하프/풀 마라톤 레이스'],
      notRecommended: ['입문 러너', '평발/과내전', '훈련용', '장거리 편안함 추구'],
    },
    features: ['풀렝스 ZoomX', '카본 파이버 플레이트', '전족부 Air Zoom 포드', '40mm 맥스 스택하이트'],
    priceAnalysis: {
      msrp: 349000,
      streetPrice: 310000,
      costPerKm: 1745,
      valueRating: 6,
      priceTier: 'super-premium',
      alternatives: ['아디다스 아디오스 프로 4', '아식스 메타스피드 스카이+', '사코니 엔도르핀 엘리트'],
    },
    detailedSpecs: {
      weight: '212g (US 9 기준)',
      stackHeight: '힐 40mm / 포어풋 32mm',
      drop: '8mm',
      midsole: 'ZoomX + Air Zoom',
      plate: '풀렝스 카본 파이버 (curved)',
      outsole: '러버 아웃솔',
      upper: 'AtomKnit 3.0',
      width: '표준 (좁은 편)',
      durability: '150-200km (레이스 전용)',
      price: '₩349,000 (MSRP)',
      costPerKm: '약 ₩1,745/km (200km 기준)',
      footType: '중립 발 전용',
      landingPattern: 'MFS/FFS',
    },
    reviews: [
      {
        userType: '상급 러너',
        rating: 5,
        text: '마라톤 PB 깨려고 질렀는데 진짜 다릅니다. 서브-3 목표였는데 2시간 52분으로 8분 단축했어요! Air Zoom 포드가 전족부에서 터져나오는 느낌이고, 카본 플레이트가 피로를 줄여줘요. 35만원이 아깝지 않았어요.',
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: '하프마라톤 대회용으로 구매했어요. 확실히 빠른 페이스에서 진가를 발휘해요. 4분 페이스 이하에서 정말 잘 굴러가요. 다만 저 같은 4분대 중급자한테는 베이퍼플라이가 더 편하고 가성비도 좋아요. 서브-3 목표가 아니면 베이퍼가 나을 수도.',
      },
      {
        userType: '가성비 중시',
        rating: 3,
        text: '솔직히 35만원은 너무 비싸요. km당 1,700원이 넘으니까요. 대회 전용으로 200km 쓴다고 해도 부담됩니다. 서브-3급 실력 아니면 줌 플라이나 매직스피드가 훨씬 가성비 좋아요. 엘리트 러너 전용이라고 봐야 해요.',
      },
      {
        userType: '입문 러너',
        rating: 2,
        text: '비싼 만큼 좋겠지 하고 샀는데 저한테는 안 맞았어요. 쿠션이 너무 반발력 위주라 편안함이 부족하고, 불안정해서 발목이 흔들려요. 5분대 페이스에서는 오히려 페가수스가 더 편해요. 초보자는 절대 비추!',
      },
    ],
    similarShoes: ['adidas-adios-pro-4', 'asics-metaspeed-sky-plus', 'saucony-endorphin-elite'],
  },
  {
    id: 'nike-zoom-fly-6',
    slug: 'nike-zoom-fly-6',
    brand: 'Nike',
    name: '줌 플라이 6',
    category: '레이싱',
    rating: 4,
    price: 199000,
    description: '베이퍼플라이의 기술을 훈련용으로 옮긴 템포 레이서. ZoomX와 카본 플레이트로 빠른 페이스를 훈련할 수 있으면서도 내구성이 좋아 가성비 우수.',
    tags: ['레이싱', '템포', '카본플레이트', '훈련용'],
    specs: {
      weight: 246,
      cushioning: 7,
      responsiveness: 9,
      stability: 7,
      drop: 8,
      durability: 400,
    },
    biomechanics: {
      stackHeight: { heel: 35, forefoot: 27 },
      drop: 8,
      carbonPlate: true,
      plateType: 'curved',
      midsoleType: 'ZoomX',
      optimalPace: '3:30-5:00 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'good',
      kneeIssues: 'caution',
      shinSplints: 'good',
    },
    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'fair',
      wideOptions: false,
      winterCompatibility: 'fair',
    },
    targetUsers: {
      recommended: ['템포런/인터벌 훈련', '가성비 레이싱화', '중급 러너', '하프마라톤'],
      notRecommended: ['입문 러너', '평발/심한 과내전', '편안한 장거리'],
    },
    features: ['ZoomX 폼', '풀렝스 카본 플레이트', '400km 내구성', '베이퍼플라이 대비 가성비'],
    priceAnalysis: {
      msrp: 199000,
      streetPrice: 170000,
      costPerKm: 497,
      valueRating: 9,
      priceTier: 'premium',
      alternatives: ['아식스 매직스피드 4', '사코니 엔도르핀 스피드 4', '뉴발란스 퓨얼셀 레벨 V5'],
    },
    detailedSpecs: {
      weight: '246g (US 9 기준)',
      stackHeight: '힐 35mm / 포어풋 27mm',
      drop: '8mm',
      midsole: 'ZoomX',
      plate: '풀렝스 카본 파이버 (curved)',
      outsole: '러버 아웃솔',
      upper: '엔지니어드 메쉬',
      width: '표준',
      durability: '350-400km',
      price: '₩199,000 (MSRP)',
      costPerKm: '약 ₩497/km (400km 기준)',
      footType: '중립 발',
      landingPattern: 'MFS/FFS',
    },
    reviews: [
      {
        userType: '중급 러너',
        rating: 5,
        text: '카본 플레이트 입문용으로 완벽해요! 베이퍼플라이 반값에 비슷한 경험할 수 있어요. 템포런이나 인터벌 훈련 때 신는데, 4분대 페이스에서 정말 잘 굴러가요. 400km 내구성이라 훈련용으로 부담 없이 쓸 수 있어서 좋아요.',
      },
      {
        userType: '상급 러너',
        rating: 4,
        text: '베이퍼플라이 아끼려고 훈련용으로 씁니다. 레이스급 반발력은 아니지만 템포런에는 충분해요. 베이퍼/알파는 대회용, 줌플라이는 훈련용으로 로테이션 돌리면 좋아요. 가성비 최고의 카본 플레이트화예요.',
      },
      {
        userType: '가성비 중시',
        rating: 5,
        text: '20만원에 카본 플레이트 + ZoomX면 가성비 끝판왕이에요! 세일 때 17만원대면 더 좋고요. km당 500원도 안 되니까 훈련용으로 막 굴려도 부담 없어요. 레이싱화 입문자한테 강력 추천합니다.',
      },
      {
        userType: '입문 러너',
        rating: 3,
        text: '카본 플레이트 궁금해서 샀는데 저한테는 좀 빨라요. 5분 후반대 페이스에서는 그냥 페가수스가 더 편해요. 4분대 이하 페이스에서 진가를 발휘하는 것 같아요. 입문자는 쿠션화부터 시작하고 나중에 도전하세요.',
      },
    ],
    similarShoes: ['asics-magic-speed-4', 'saucony-endorphin-speed-4', 'newbalance-fuelcell-rebel-v5'],
  },
  {
    id: 'nike-vaporfly-3',
    slug: 'nike-vaporfly-3',
    brand: 'Nike',
    name: '베이퍼플라이 3',
    category: '레이싱',
    rating: 5,
    price: 299000,
    description: 'Nike 레이싱화의 스탠다드. ZoomX와 카본 플레이트의 완벽한 조합으로 마라톤 기록 단축의 정석이 된 신발. 알파플라이보다 안정적이고 다양한 러너에게 적합.',
    tags: ['레이싱', '마라톤', '카본플레이트'],
    specs: {
      weight: 187,
      cushioning: 7,
      responsiveness: 10,
      stability: 7,
      drop: 8,
      durability: 250,
    },
    biomechanics: {
      stackHeight: { heel: 38, forefoot: 30 },
      drop: 8,
      carbonPlate: true,
      plateType: 'curved',
      midsoleType: 'ZoomX',
      optimalPace: '3:00-4:45 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'caution',
      achillesTendinopathy: 'good',
      kneeIssues: 'caution',
      shinSplints: 'good',
    },
    koreanFootFit: {
      toBoxWidth: 'narrow',
      flatFootCompatibility: 'poor',
      wideOptions: false,
      winterCompatibility: 'fair',
    },
    targetUsers: {
      recommended: ['서브-3:30 마라토너', '중급+ 러너', '하프/풀 마라톤 레이스', '기록 단축 목표'],
      notRecommended: ['입문 러너', '평발/과내전', '훈련용', '5분대 이상 페이스'],
    },
    features: ['187g 초경량', 'ZoomX 폼', '풀렝스 카본 플레이트', '알파플라이보다 안정적'],
    priceAnalysis: {
      msrp: 299000,
      streetPrice: 260000,
      costPerKm: 1196,
      valueRating: 7,
      priceTier: 'super-premium',
      alternatives: ['아식스 메타스피드 스카이+', '아디다스 아디오스 프로 4', '사코니 엔도르핀 프로 4'],
    },
    detailedSpecs: {
      weight: '187g (US 9 기준)',
      stackHeight: '힐 38mm / 포어풋 30mm',
      drop: '8mm',
      midsole: 'ZoomX',
      plate: '풀렝스 카본 파이버 (curved)',
      outsole: '러버 아웃솔',
      upper: 'VaporWeave',
      width: '표준 (좁은 편)',
      durability: '200-250km (레이스 전용)',
      price: '₩299,000 (MSRP)',
      costPerKm: '약 ₩1,196/km (250km 기준)',
      footType: '중립 발',
      landingPattern: 'MFS/FFS',
    },
    reviews: [
      {
        userType: '상급 러너',
        rating: 5,
        text: '마라톤 레이싱화의 교과서예요. 알파플라이보다 안정적이면서도 충분히 빨라요. 서브-3:15 목표였는데 3시간 8분 달성했습니다! 187g 초경량에 반발력 최고예요. 알파보다 50만원 싸면서 대부분의 러너한테 이게 더 좋아요.',
      },
      {
        userType: '중급 러너',
        rating: 5,
        text: '첫 카본 레이싱화로 구매했는데 대만족이에요. 하프마라톤 1시간 32분에서 1시간 26분으로 6분 단축! 알파플라이는 불안정하다는 리뷰가 많아서 베이퍼로 선택했는데 정확한 판단이었어요. 안정적이면서도 충분히 빨라요.',
      },
      {
        userType: '가성비 중시',
        rating: 4,
        text: '30만원이 부담되긴 했지만 알파플라이보다 5만원 싸고 내구성도 조금 더 좋아요. km당 1,200원이면 알파보다 가성비 좋아요. 대회 전용으로 아껴서 신으면 2-3년은 쓸 수 있을 것 같아요.',
      },
      {
        userType: '평발 러너',
        rating: 3,
        text: '평발이라 걱정했는데 역시나 좀 불안정해요. 토박스가 좁아서 발볼 넓은 제 발에는 답답하고, 장거리에서 발바닥이 아파요. 평발이면 아식스 메타스피드 엣지가 더 안정적이라고 들었는데 다음엔 그걸로 해볼게요.',
      },
    ],
    similarShoes: ['asics-metaspeed-sky-plus', 'adidas-adios-pro-4', 'saucony-endorphin-pro-4'],
  },
  {
    id: 'nike-streakfly-2',
    slug: 'nike-streakfly-2',
    brand: 'Nike',
    name: '스트릭플라이 2',
    category: '레이싱',
    rating: 4,
    price: 179000,
    description: '5K/10K 단거리 레이스 전용. 초경량 설계와 낮은 스택하이트로 지면 감각을 살리면서도 ZoomX 쿠션으로 추진력을 제공합니다.',
    tags: ['레이싱', '단거리', '초경량', '5K/10K'],
    specs: {
      weight: 172,
      cushioning: 5,
      responsiveness: 9,
      stability: 6,
      drop: 6,
      durability: 300,
    },
    biomechanics: {
      stackHeight: { heel: 28, forefoot: 22 },
      drop: 6,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'ZoomX',
      optimalPace: '2:45-4:00 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'warning',
      achillesTendinopathy: 'caution',
      kneeIssues: 'warning',
      shinSplints: 'caution',
    },
    koreanFootFit: {
      toBoxWidth: 'narrow',
      flatFootCompatibility: 'poor',
      wideOptions: false,
      winterCompatibility: 'poor',
    },
    targetUsers: {
      recommended: ['5K/10K 레이스', '트랙 훈련', '전족부 착지 러너', '상급 러너'],
      notRecommended: ['마라톤', '입문 러너', '평발', '뒤꿈치 착지 러너'],
    },
    features: ['172g 초경량', 'ZoomX 폼', '낮은 스택하이트', '지면 감각 우수'],
    priceAnalysis: {
      msrp: 179000,
      streetPrice: 155000,
      costPerKm: 596,
      valueRating: 7,
      priceTier: 'mid',
      alternatives: ['아식스 메타 스피드 레이', '아디다스 타쿠미 센 11'],
    },
    detailedSpecs: {
      weight: '172g (US 9 기준)',
      stackHeight: '힐 28mm / 포어풋 22mm',
      drop: '6mm',
      midsole: 'ZoomX',
      plate: '없음',
      outsole: '러버 아웃솔',
      upper: '초경량 메쉬',
      width: '표준 (좁은 편)',
      durability: '250-300km',
      price: '₩179,000 (MSRP)',
      costPerKm: '약 ₩596/km (300km 기준)',
      footType: '중립 발, 전족부 착지',
      landingPattern: 'FFS 전용',
    },
    reviews: [
      {
        userType: '상급 러너',
        rating: 5,
        text: '5K 레이스용으로 완벽해요! 172g은 진짜 깃털 같아요. 베이퍼플라이는 5K에는 과한데, 스트릭플라이가 딱 맞아요. 지면 감각이 살아있어서 트랙에서 스피드 내기 좋아요. 5K 17분대 목표 러너한테 강추!',
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: '10K 대회용으로 샀어요. 가볍고 반응 빠른데, 쿠션이 얇아서 10K 넘으면 발바닥이 좀 아파요. 5K/10K 전용으로는 좋은데, 하프 이상은 베이퍼플라이가 나아요. 단거리 스피드 러너한테 추천합니다.',
      },
      {
        userType: '가성비 중시',
        rating: 4,
        text: '18만원에 ZoomX 레이싱화면 나쁘지 않아요. 베이퍼플라이 반값이에요. 5K/10K 위주로 뛰는 분들한테는 오히려 이게 더 적합하고 가성비도 좋아요. 마라톤 안 뛰면 이걸로 충분합니다.',
      },
      {
        userType: '입문 러너',
        rating: 2,
        text: '가볍다고 해서 샀는데 쿠션이 너무 없어요! 5km도 못 뛰고 발바닥이 너무 아팠어요. 초보자한테는 절대 안 맞아요. 상급자용 레이싱화라는 걸 몰랐어요. 페가수스나 보메로 같은 쿠션화부터 시작하세요.',
      },
    ],
    similarShoes: ['asics-metaspeed-ray', 'adidas-takumi-sen-11'],
  },

  // Adidas - 입문화
  {
    id: 'adidas-adizero-sl3',
    slug: 'adidas-adizero-sl3',
    brand: 'Adidas',
    name: '아디스타 3',
    category: '입문화',
    rating: 4,
    price: 139000,
    description: 'Adidas의 가성비 입문화. Lightstrike Pro 쿠션과 안정적인 핏으로 첫 러닝화로 손색없는 선택. 페가수스의 대항마.',
    tags: ['입문화', '데일리', '가성비'],
    specs: {
      weight: 275,
      cushioning: 8,
      responsiveness: 7,
      stability: 8,
      drop: 10,
      durability: 550,
    },
    biomechanics: {
      stackHeight: { heel: 32, forefoot: 22 },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Lightstrike Pro',
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
    },
    targetUsers: {
      recommended: ['러닝 입문자', '가성비 중시', '데일리 러닝', '5-10km 주행'],
      notRecommended: ['레이싱용', '초경량 선호', '마라톤 기록 단축'],
    },
    features: ['Lightstrike Pro 쿠션', '와이드 옵션', '안정적인 힐 카운터', '가성비 우수'],
    priceAnalysis: {
      msrp: 139000,
      streetPrice: 115000,
      costPerKm: 252,
      valueRating: 9,
      priceTier: 'budget',
      alternatives: ['나이키 페가수스 41', '아식스 쿠무루스 27'],
    },
    detailedSpecs: {
      weight: '275g (US 9 기준)',
      stackHeight: '힐 32mm / 포어풋 22mm',
      drop: '10mm',
      midsole: 'Lightstrike Pro',
      plate: '없음',
      outsole: '컨티넨탈 러버',
      upper: '메쉬',
      width: '표준 / 와이드',
      durability: '500-550km',
      price: '₩139,000 (MSRP)',
      costPerKm: '약 ₩252/km (550km 기준)',
      footType: '중립~평발',
      landingPattern: 'RFS 위주',
    },
    reviews: [
      {
        userType: '입문 러너',
        rating: 5,
        text: '첫 러닝화로 구매했는데 정말 만족해요! 페가수스보다 2만원 싸면서 쿠션도 좋고 발볼도 편해요. 5km 뛰는데 발이 전혀 안 아프고, 디자인도 예뻐서 일상에서도 신어요. 초보자 첫 신발로 강추!',
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: '세컨드 슈즈로 구매했어요. 메인은 보스턴인데, 가벼운 조깅 때 이걸 신어요. Lightstrike Pro 쿠션이 생각보다 좋고, 컨티넨탈 러버라 그립도 좋아요. 입문자한테 추천하고 싶은 신발이에요.',
      },
      {
        userType: '가성비 중시',
        rating: 5,
        text: '14만원 미만에 이 정도면 가성비 최고예요! 세일 때 11만원대에 샀는데 대만족입니다. 550km 내구성이면 km당 250원도 안 되니까요. 나이키보다 저렴하면서 품질은 비슷해요.',
      },
      {
        userType: '평발 러너',
        rating: 4,
        text: '와이드 옵션이 있어서 선택했어요. 발볼 넓은 제 발에 딱 맞고, 아치 서포트도 적당해요. 심한 과내전은 아니라서 이 정도면 충분해요. 평발인데 쿠션화 찾는 분께 추천합니다.',
      },
    ],
    similarShoes: ['nike-pegasus-41', 'asics-cumulus-27'],
  },
  {
    id: 'adidas-supernova-rise-2',
    slug: 'adidas-supernova-rise-2',
    brand: 'Adidas',
    name: '슈퍼노바 라이즈 2',
    category: '입문화',
    rating: 4,
    price: 159000,
    description: 'Dreamstrike+ 폼을 탑재한 Adidas의 주력 입문화. 부드러운 쿠셔닝과 안정적인 승차감으로 장거리 입문자에게 최적.',
    tags: ['입문화', '쿠셔닝', '장거리'],
    specs: {
      weight: 285,
      cushioning: 9,
      responsiveness: 7,
      stability: 8,
      drop: 10,
      durability: 600,
    },
    biomechanics: {
      stackHeight: { heel: 34, forefoot: 24 },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Dreamstrike+',
      optimalPace: '5:00-7:00 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'excellent',
      achillesTendinopathy: 'good',
      kneeIssues: 'good',
      shinSplints: 'excellent',
    },
    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'good',
      wideOptions: true,
      winterCompatibility: 'good',
    },
    targetUsers: {
      recommended: ['첫 하프마라톤 준비', '쿠션 중시 입문자', '장거리 편안함', '무릎 보호'],
      notRecommended: ['스피드 러닝', '가벼운 신발 선호', '레이싱용'],
    },
    features: ['Dreamstrike+ 폼', '두꺼운 쿠셔닝', '와이드 옵션', '안정적인 라이드'],
    priceAnalysis: {
      msrp: 159000,
      streetPrice: 135000,
      costPerKm: 265,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['나이키 페가수스 프리미엄', '호카 클리프턴 10'],
    },
    detailedSpecs: {
      weight: '285g (US 9 기준)',
      stackHeight: '힐 34mm / 포어풋 24mm',
      drop: '10mm',
      midsole: 'Dreamstrike+',
      plate: '없음',
      outsole: '컨티넨탈 러버',
      upper: '메쉬',
      width: '표준 / 와이드',
      durability: '550-600km',
      price: '₩159,000 (MSRP)',
      costPerKm: '약 ₩265/km (600km 기준)',
      footType: '중립~평발',
      landingPattern: 'RFS 위주',
    },
    reviews: [
      {
        userType: '입문 러너',
        rating: 5,
        text: 'Dreamstrike+ 쿠션이 진짜 푹신해요! 처음 신었을 때 구름 위를 걷는 느낌이었어요. 10km 러닝해도 발이 안 아프고, 무릎 충격도 잘 흡수해줘요. 첫 하프마라톤 도전하는데 이 신발로 훈련 중입니다!',
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: 'LSD용으로 구매했어요. 페가수스보다 쿠션이 더 부드럽고 푹신해요. 템포런에는 좀 물렁한데, 장거리 편안함 러닝에는 최고예요. 보메로 대안으로 충분합니다.',
      },
      {
        userType: '평발 러너',
        rating: 4,
        text: '평발에 와이드 필요해서 선택했어요. 발볼이 넉넉하고 쿠션도 좋아서 장시간 뛰어도 발바닥이 안 아파요. 아치 서포트는 보통인데, 쿠션이 좋아서 평발도 편하게 신을 수 있어요.',
      },
      {
        userType: '가성비 중시',
        rating: 4,
        text: '16만원에 이 정도 쿠션이면 가성비 좋아요. 세일 때 13만원대면 더 좋고요. 600km 내구성에 Dreamstrike+ 폼이면 보메로랑 비교해도 손색없어요. 아디다스 팬이라면 강추!',
      },
    ],
    similarShoes: ['nike-pegasus-premium', 'hoka-clifton-10'],
  },

  // Adidas - 쿠션화
  {
    id: 'adidas-supernova-prime',
    slug: 'adidas-supernova-prime',
    brand: 'Adidas',
    name: '슈퍼노바 프라임',
    category: '쿠션화',
    rating: 4,
    price: 179000,
    description: '슈퍼노바 라이즈의 업그레이드 버전. 더 두꺼운 Dreamstrike+ 쿠션과 향상된 에너지 리턴으로 장거리 맥스 쿠션을 제공합니다.',
    tags: ['쿠션화', '맥스쿠션', '장거리'],
    specs: {
      weight: 295,
      cushioning: 10,
      responsiveness: 7,
      stability: 7,
      drop: 10,
      durability: 650,
    },
    biomechanics: {
      stackHeight: { heel: 38, forefoot: 28 },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Dreamstrike+ 강화',
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
    },
    targetUsers: {
      recommended: ['장거리 러너', '맥스 쿠션 추구', '무릎/관절 보호', '회복 러닝'],
      notRecommended: ['스피드 러닝', '가벼운 신발 선호', '레이싱용'],
    },
    features: ['강화된 Dreamstrike+', '38mm 맥스 스택하이트', '와이드 옵션', '에너지 리턴 향상'],
    priceAnalysis: {
      msrp: 179000,
      streetPrice: 155000,
      costPerKm: 275,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['나이키 보메로 18', '호카 본디 9'],
    },
    detailedSpecs: {
      weight: '295g (US 9 기준)',
      stackHeight: '힐 38mm / 포어풋 28mm',
      drop: '10mm',
      midsole: 'Dreamstrike+ 강화',
      plate: '없음',
      outsole: '컨티넨탈 러버',
      upper: '메쉬',
      width: '표준 / 와이드',
      durability: '600-650km',
      price: '₩179,000 (MSRP)',
      costPerKm: '약 ₩275/km (650km 기준)',
      footType: '중립~평발',
      landingPattern: 'RFS 위주',
    },
    reviews: [
      {
        userType: '중급 러너',
        rating: 5,
        text: '보메로 대안으로 찾다가 발견한 신발! 38mm 스택하이트가 무릎 충격을 완전히 흡수해줘요. 장거리 20km 뛰어도 발이 살아있어요. 보메로보다 2만원 싸면서 쿠션은 비슷해요.',
      },
      {
        userType: '상급 러너',
        rating: 4,
        text: '리커버리 데이용으로 씁니다. 평소에는 보스턴이나 아디오스 프로 신는데, 회복 러닝 때 이 신발 신으면 다리가 덜 피로해요. 빠른 러닝에는 물렁하지만 그게 목적이니까요.',
      },
      {
        userType: '평발 러너',
        rating: 5,
        text: '평발에 무릎이 안 좋아서 맥스 쿠션 찾다가 이걸로 결정했어요. 와이드 사이즈에 38mm 쿠션이면 제 조건에 딱이에요. 보메로보다 저렴하고 쿠션은 비슷해서 만족해요.',
      },
      {
        userType: '가성비 중시',
        rating: 4,
        text: '18만원에 맥스 쿠션화면 가성비 좋아요. 보메로가 20만원인데 슈퍼노바 프라임이 2만원 싸면서 쿠션은 비슷해요. 650km 내구성에 Dreamstrike+ 폼이면 충분히 투자 가치 있어요.',
      },
    ],
    similarShoes: ['nike-vomero-18', 'hoka-bondi-9'],
  },
  {
    id: 'adidas-supernova-prime-x',
    slug: 'adidas-supernova-prime-x',
    brand: 'Adidas',
    name: '슈퍼노바 프라임 X',
    category: '쿠션화',
    rating: 4,
    price: 219000,
    description: '슈퍼노바 라인의 최상위 모델. 극한의 스택하이트와 Dreamstrike+ 폼으로 최대의 충격 흡수를 제공합니다.',
    tags: ['쿠션화', '울트라쿠션', '프리미엄'],
    specs: {
      weight: 310,
      cushioning: 10,
      responsiveness: 6,
      stability: 6,
      drop: 10,
      durability: 600,
    },
    biomechanics: {
      stackHeight: { heel: 45, forefoot: 35 },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Dreamstrike+ 울트라',
      optimalPace: '6:00-7:30 min/km',
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
    },
    targetUsers: {
      recommended: ['극한의 쿠션 추구', '관절 보호 최우선', '회복 러닝 전용', '느린 페이스 장거리'],
      notRecommended: ['스피드 러닝', '가벼운 신발 선호', '레이싱', '빠른 페이스'],
    },
    features: ['45mm 울트라 스택하이트', 'Dreamstrike+ 울트라', '최대 충격 흡수', '와이드 옵션'],
    priceAnalysis: {
      msrp: 219000,
      streetPrice: 190000,
      costPerKm: 365,
      valueRating: 7,
      priceTier: 'premium',
      alternatives: ['호카 본디 9', '뉴발란스 프레시폼 모어 V5'],
    },
    detailedSpecs: {
      weight: '310g (US 9 기준)',
      stackHeight: '힐 45mm / 포어풋 35mm',
      drop: '10mm',
      midsole: 'Dreamstrike+ 울트라',
      plate: '없음',
      outsole: '컨티넨탈 러버',
      upper: '메쉬',
      width: '표준 / 와이드',
      durability: '550-600km',
      price: '₩219,000 (MSRP)',
      costPerKm: '약 ₩365/km (600km 기준)',
      footType: '중립~평발',
      landingPattern: 'RFS 위주',
    },
    reviews: [
      {
        userType: '중급 러너',
        rating: 4,
        text: '45mm 스택하이트는 진짜 구름 위를 걷는 느낌이에요! 무릎이 안 좋아서 맥스 쿠션 찾다가 이걸로 결정했는데 충격 흡수가 장난 아니에요. 다만 310g이라 무겁고, 빠른 러닝에는 안 맞아요.',
      },
      {
        userType: '상급 러너',
        rating: 3,
        text: '회복 러닝용으로 샀는데... 너무 물렁해요. 리커버리용이라도 약간의 반발력은 있어야 하는데, 이건 그냥 쿠션 덩어리예요. 느린 조깅에만 쓰고 있어요. 프라임이 더 밸런스 좋아요.',
      },
      {
        userType: '평발 러너',
        rating: 5,
        text: '평발에 무릎이 너무 안 좋아서 이것저것 다 써봤는데 프라임 X가 최고예요! 45mm 쿠션이 충격을 완전히 흡수해줘서 무릎 통증이 많이 줄었어요. 느린 페이스로만 뛰는 분께 강추!',
      },
      {
        userType: '가성비 중시',
        rating: 3,
        text: '22만원은 좀 비싸요. 프라임이 18만원인데 7mm 스택하이트 차이가 4만원 가치가 있나 싶어요. 극한의 쿠션이 필요한 게 아니면 프라임으로 충분해요. 세일 때 사면 괜찮을 듯.',
      },
    ],
    similarShoes: ['hoka-bondi-9', 'newbalance-fresh-foam-more-v5'],
  },

  // Adidas - 데일리
  {
    id: 'adidas-adizero-sl2',
    slug: 'adidas-adizero-sl2',
    brand: 'Adidas',
    name: '아디제로 SL2',
    category: '데일리',
    rating: 4,
    price: 149000,
    description: '아디제로 라인의 입문 모델. Lightstrike Pro 쿠션으로 가볍고 반응성 좋은 데일리 트레이너. 템포런부터 LSD까지 다목적.',
    tags: ['데일리', '템포', '경량'],
    specs: {
      weight: 245,
      cushioning: 7,
      responsiveness: 8,
      stability: 7,
      drop: 8,
      durability: 500,
    },
    biomechanics: {
      stackHeight: { heel: 30, forefoot: 22 },
      drop: 8,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Lightstrike Pro',
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
      winterCompatibility: 'fair',
    },
    targetUsers: {
      recommended: ['데일리 러닝', '템포런', '중급 러너', '다목적 훈련'],
      notRecommended: ['맥스 쿠션 필요', '평발/과내전', '레이싱 전용'],
    },
    features: ['Lightstrike Pro', '경량 245g', '다목적 설계', '컨티넨탈 러버'],
    priceAnalysis: {
      msrp: 149000,
      streetPrice: 125000,
      costPerKm: 298,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['나이키 라이벌 플라이 4', '사코니 킨바라 15'],
    },
    detailedSpecs: {
      weight: '245g (US 9 기준)',
      stackHeight: '힐 30mm / 포어풋 22mm',
      drop: '8mm',
      midsole: 'Lightstrike Pro',
      plate: '없음',
      outsole: '컨티넨탈 러버',
      upper: '경량 메쉬',
      width: '표준',
      durability: '450-500km',
      price: '₩149,000 (MSRP)',
      costPerKm: '약 ₩298/km (500km 기준)',
      footType: '중립 발',
      landingPattern: 'MFS/RFS',
    },
    reviews: [
      {
        userType: '중급 러너',
        rating: 5,
        text: '데일리 트레이너로 완벽해요! 245g 경량에 반응성 좋아서 템포런도 되고, 쿠션도 적당해서 LSD도 돼요. 보스턴 가기 전 워밍업 신발로 딱이에요. 가성비도 좋고요!',
      },
      {
        userType: '상급 러너',
        rating: 4,
        text: '보스턴 아끼려고 훈련용으로 씁니다. 레이스급 반발력은 아니지만 일반 훈련에는 충분해요. 컨티넨탈 러버라 그립도 좋고 내구성도 괜찮아요. 훈련용 데일리로 추천!',
      },
      {
        userType: '가성비 중시',
        rating: 5,
        text: '15만원에 Lightstrike Pro면 가성비 끝판왕이에요! 세일 때 12만원대면 더 좋고요. 보스턴이 너무 비싸면 SL2로 시작해보세요. 충분히 좋아요.',
      },
      {
        userType: '입문 러너',
        rating: 4,
        text: '데일리용으로 샀는데 생각보다 쿠션이 얇아요. 초보자한테는 슈퍼노바 라이즈가 더 편할 것 같아요. 어느 정도 러닝 경험 있는 분께 추천합니다.',
      },
    ],
    similarShoes: ['nike-rival-fly-4', 'saucony-kinvara-15'],
  },

  // Adidas - 안정화
  {
    id: 'adidas-supernova-solution',
    slug: 'adidas-supernova-solution',
    brand: 'Adidas',
    name: '슈퍼노바 솔루션',
    category: '안정화',
    rating: 4,
    price: 169000,
    description: 'Adidas의 대표 안정화. 내측 가이드 레일과 Dreamstrike+ 쿠션으로 과내전을 제어하면서 편안한 러닝을 제공합니다.',
    tags: ['안정화', '과내전', '평발'],
    specs: {
      weight: 285,
      cushioning: 8,
      responsiveness: 7,
      stability: 9,
      drop: 10,
      durability: 600,
    },
    biomechanics: {
      stackHeight: { heel: 34, forefoot: 24 },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Dreamstrike+ + 가이드 레일',
      optimalPace: '5:30-7:00 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'good',
      kneeIssues: 'excellent',
      shinSplints: 'good',
    },
    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'excellent',
      wideOptions: true,
      winterCompatibility: 'good',
    },
    targetUsers: {
      recommended: ['과내전 러너', '평발 러너', '무릎 내측 통증', '안정성 필요'],
      notRecommended: ['정상/높은 아치', '중립 착지', '레이싱용'],
    },
    features: ['내측 가이드 레일', 'Dreamstrike+ 쿠션', '와이드 옵션', '과내전 제어'],
    priceAnalysis: {
      msrp: 169000,
      streetPrice: 145000,
      costPerKm: 281,
      valueRating: 8,
      priceTier: 'mid',
      alternatives: ['나이키 스트럭처 26', '아식스 GT-2000 13'],
    },
    detailedSpecs: {
      weight: '285g (US 9 기준)',
      stackHeight: '힐 34mm / 포어풋 24mm',
      drop: '10mm',
      midsole: 'Dreamstrike+ + 가이드 레일',
      plate: '없음',
      outsole: '컨티넨탈 러버',
      upper: '메쉬',
      width: '표준 / 와이드',
      durability: '550-600km',
      price: '₩169,000 (MSRP)',
      costPerKm: '약 ₩281/km (600km 기준)',
      footType: '평발/과내전 전용',
      landingPattern: 'RFS 위주',
    },
    reviews: [
      {
        userType: '평발 러너',
        rating: 5,
        text: '평발에 과내전인데 이 신발이 딱이에요! 가이드 레일이 발목 안정성을 확실히 잡아줘요. 예전에 중립화 신다가 무릎 통증 있었는데, 솔루션으로 바꾸고 통증이 사라졌어요. 평발 러너 필수템!',
      },
      {
        userType: '입문 러너',
        rating: 4,
        text: '발 분석 받았는데 과내전이래서 안정화 추천받았어요. 처음에는 내측이 딱딱한 느낌이었는데 적응하니까 안정감 있어서 좋아요. Dreamstrike+ 쿠션도 푹신해서 편해요.',
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: 'GT-2000이랑 비교했는데 솔루션이 쿠션이 더 부드러워요. 안정성은 비슷한데 Dreamstrike+ 폼이 더 편해요. 아디다스 팬이고 평발이면 이게 답이에요.',
      },
      {
        userType: '가성비 중시',
        rating: 4,
        text: '17만원에 제대로 된 안정화면 가성비 좋아요. 스트럭처보다 2만원 비싸지만 Dreamstrike+ 쿠션이 더 좋아요. 600km 내구성에 과내전 교정까지 되니 평발 러너한테 추천!',
      },
    ],
    similarShoes: ['nike-structure-26', 'asics-gt-2000-13'],
  },
  {
    id: 'adidas-prime-x-strung',
    slug: 'adidas-prime-x-strung',
    brand: 'Adidas',
    name: '프라임 X 스트라운드',
    category: '안정화',
    rating: 4,
    price: 289000,
    description: '혁신적인 Strung 어퍼와 50mm 스택하이트의 실험적 러닝화. 극한의 쿠션과 안정성을 동시에 제공하는 프리미엄 모델.',
    tags: ['안정화', '프리미엄', '혁신'],
    specs: {
      weight: 320,
      cushioning: 10,
      responsiveness: 7,
      stability: 8,
      drop: 10,
      durability: 500,
    },
    biomechanics: {
      stackHeight: { heel: 50, forefoot: 40 },
      drop: 10,
      carbonPlate: true,
      plateType: 'curved',
      midsoleType: 'Lightstrike Pro + Energy Rods',
      optimalPace: '5:00-6:30 min/km',
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
      winterCompatibility: 'fair',
    },
    targetUsers: {
      recommended: ['테크 러너', '극한의 쿠션 + 안정성', '프리미엄 추구', '관절 보호'],
      notRecommended: ['가성비 중시', '가벼운 신발 선호', '레이싱 전용'],
    },
    features: ['Strung 로보틱 어퍼', '50mm 스택하이트', '카본 Energy Rods', '극한의 쿠션'],
    priceAnalysis: {
      msrp: 289000,
      streetPrice: 250000,
      costPerKm: 578,
      valueRating: 6,
      priceTier: 'super-premium',
      alternatives: ['호카 본디 9', '뉴발란스 프레시폼 모어 V5'],
    },
    detailedSpecs: {
      weight: '320g (US 9 기준)',
      stackHeight: '힐 50mm / 포어풋 40mm',
      drop: '10mm',
      midsole: 'Lightstrike Pro + Energy Rods',
      plate: '카본 Energy Rods',
      outsole: '컨티넨탈 러버',
      upper: 'Strung (로보틱 제작)',
      width: '표준',
      durability: '450-500km',
      price: '₩289,000 (MSRP)',
      costPerKm: '약 ₩578/km (500km 기준)',
      footType: '중립~평발',
      landingPattern: 'RFS 위주',
    },
    reviews: [
      {
        userType: '상급 러너',
        rating: 4,
        text: '50mm 스택하이트는 정말 독특한 경험이에요! 마치 스프링 위에서 뛰는 느낌. Strung 어퍼도 신기하고 핏이 좋아요. 다만 320g이 무겁고, 일반 훈련에는 과한 스펙이에요. 테크 러너한테 추천!',
      },
      {
        userType: '중급 러너',
        rating: 3,
        text: '디자인에 혹해서 샀는데... 너무 특이해요. 50mm 스택하이트가 처음에는 불안정했고, 적응하는 데 시간이 걸렸어요. 독특한 경험은 할 수 있지만 일반적인 러닝화는 아니에요.',
      },
      {
        userType: '평발 러너',
        rating: 4,
        text: '평발에 무릎이 안 좋은데, 50mm 쿠션이 충격을 완전히 흡수해줘요! Energy Rods가 안정성도 잡아줘서 좋아요. 비싸지만 관절 보호 생각하면 투자 가치 있어요.',
      },
      {
        userType: '가성비 중시',
        rating: 2,
        text: '29만원은 너무 비싸요. 아무리 혁신적이어도 이 가격은 부담돼요. 솔루션이 17만원인데 안정화로서 기능은 충분해요. 테크 덕후 아니면 비추합니다.',
      },
    ],
    similarShoes: ['hoka-bondi-9', 'newbalance-fresh-foam-more-v5'],
  },

  // Adidas - 데일리
  {
    id: 'adidas-boston-13',
    slug: 'adidas-boston-13',
    brand: 'Adidas',
    name: '보스턴 13',
    category: '데일리',
    rating: 5,
    price: 189000,
    description: 'Adidas의 대표 템포 트레이너. Lightstrike Pro와 유리섬유 Energy Rods로 훈련과 레이스 모두에 적합한 만능 러닝화.',
    tags: ['데일리', '템포', '다목적'],
    specs: {
      weight: 248,
      cushioning: 7,
      responsiveness: 9,
      stability: 8,
      drop: 6,
      durability: 550,
    },
    biomechanics: {
      stackHeight: { heel: 37, forefoot: 31 },
      drop: 6,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Lightstrike Pro + Energy Rods (유리섬유)',
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
      winterCompatibility: 'fair',
    },
    targetUsers: {
      recommended: ['템포런/인터벌', '중급+ 러너', '훈련+레이스 겸용', '하프마라톤'],
      notRecommended: ['입문 러너', '맥스 쿠션 필요', '느린 페이스'],
    },
    features: ['Lightstrike Pro', '유리섬유 Energy Rods', '경량 248g', '훈련/레이스 겸용'],
    priceAnalysis: {
      msrp: 189000,
      streetPrice: 165000,
      costPerKm: 343,
      valueRating: 9,
      priceTier: 'mid',
      alternatives: ['나이키 줌 플라이 6', '사코니 엔도르핀 스피드 4'],
    },
    detailedSpecs: {
      weight: '248g (US 9 기준)',
      stackHeight: '힐 37mm / 포어풋 31mm',
      drop: '6mm',
      midsole: 'Lightstrike Pro + Energy Rods',
      plate: '유리섬유 Energy Rods',
      outsole: '컨티넨탈 러버',
      upper: '경량 메쉬',
      width: '표준',
      durability: '500-550km',
      price: '₩189,000 (MSRP)',
      costPerKm: '약 ₩343/km (550km 기준)',
      footType: '중립 발',
      landingPattern: 'MFS/FFS',
    },
    reviews: [
      {
        userType: '중급 러너',
        rating: 5,
        text: '만능 러닝화예요! 템포런, 인터벌, 장거리 다 잘해요. Energy Rods가 카본은 아니지만 충분히 반발력 있고, 550km 내구성이라 훈련용으로 막 굴려도 돼요. 줌 플라이 대안으로 완벽!',
      },
      {
        userType: '상급 러너',
        rating: 5,
        text: '아디오스 프로 아끼려고 훈련용으로 씁니다. 레이스급은 아니지만 템포런에는 충분해요. 컨티넨탈 러버 그립이 정말 좋고, 비 오는 날에도 미끄럽지 않아요. 훈련용 최고!',
      },
      {
        userType: '가성비 중시',
        rating: 5,
        text: '19만원에 Energy Rods + Lightstrike Pro면 가성비 최고예요! 줌 플라이가 20만원인데 보스턴이 더 내구성 좋고 다목적으로 쓸 수 있어요. 세일 때 16만원대면 무조건 사세요!',
      },
      {
        userType: '입문 러너',
        rating: 3,
        text: '빠른 신발 찾다가 샀는데 저한테는 좀 빨라요. 5분 후반대 페이스에서는 그냥 슈퍼노바가 더 편해요. 4분대 이하에서 진가를 발휘하는 것 같아요. 중급자 이상 추천.',
      },
    ],
    similarShoes: ['nike-zoom-fly-6', 'saucony-endorphin-speed-4'],
  },
  {
    id: 'adidas-adizero-evo-sl',
    slug: 'adidas-adizero-evo-sl',
    brand: 'Adidas',
    name: '아디제로 evo SL',
    category: '데일리',
    rating: 4,
    price: 159000,
    description: '아디제로 SL의 업그레이드 버전. 더 가벼워진 무게와 향상된 Lightstrike Pro로 빠른 데일리 러닝에 최적화.',
    tags: ['데일리', '경량', '스피드'],
    specs: {
      weight: 235,
      cushioning: 6,
      responsiveness: 8,
      stability: 7,
      drop: 6,
      durability: 450,
    },
    biomechanics: {
      stackHeight: { heel: 28, forefoot: 22 },
      drop: 6,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Lightstrike Pro 2.0',
      optimalPace: '4:00-5:30 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'caution',
      achillesTendinopathy: 'good',
      kneeIssues: 'caution',
      shinSplints: 'caution',
    },
    koreanFootFit: {
      toBoxWidth: 'narrow',
      flatFootCompatibility: 'fair',
      wideOptions: false,
      winterCompatibility: 'fair',
    },
    targetUsers: {
      recommended: ['스피드 훈련', '템포런', '경량 선호', '중급+ 러너'],
      notRecommended: ['입문 러너', '쿠션 중시', '평발/과내전'],
    },
    features: ['Lightstrike Pro 2.0', '초경량 235g', '낮은 드롭 6mm', '스피드 핏'],
    priceAnalysis: {
      msrp: 159000,
      streetPrice: 135000,
      costPerKm: 353,
      valueRating: 7,
      priceTier: 'mid',
      alternatives: ['나이키 라이벌 플라이 4', '사코니 킨바라 15'],
    },
    detailedSpecs: {
      weight: '235g (US 9 기준)',
      stackHeight: '힐 28mm / 포어풋 22mm',
      drop: '6mm',
      midsole: 'Lightstrike Pro 2.0',
      plate: '없음',
      outsole: '컨티넨탈 러버',
      upper: '초경량 메쉬',
      width: '표준 (좁은 편)',
      durability: '400-450km',
      price: '₩159,000 (MSRP)',
      costPerKm: '약 ₩353/km (450km 기준)',
      footType: '중립 발',
      landingPattern: 'MFS/FFS',
    },
    reviews: [
      {
        userType: '중급 러너',
        rating: 5,
        text: '235g 경량이 정말 가벼워요! 템포런 때 발이 날아가는 느낌이에요. SL2보다 10g 가볍고 반응성도 좋아졌어요. 스피드 훈련용으로 딱이에요!',
      },
      {
        userType: '상급 러너',
        rating: 4,
        text: '인터벌 훈련용으로 씁니다. 가볍고 반응 빠르고 컨티넨탈 그립도 좋아요. 다만 쿠션이 얇아서 장거리에는 좀 부족해요. 스피드 훈련 전용으로 추천.',
      },
      {
        userType: '가성비 중시',
        rating: 4,
        text: '16만원에 초경량 스피드화면 괜찮아요. 라이벌 플라이보다 조금 비싸지만 컨티넨탈 러버라 내구성이 더 좋아요. 템포런 전용으로 쓰기 좋아요.',
      },
      {
        userType: '입문 러너',
        rating: 2,
        text: '가볍다고 해서 샀는데 쿠션이 너무 없어요. 초보자한테는 안 맞아요. 슈퍼노바 라이즈로 시작하세요. 이건 중급자 이상용이에요.',
      },
    ],
    similarShoes: ['nike-rival-fly-4', 'saucony-kinvara-15'],
  },

  // Adidas - 레이싱
  {
    id: 'adidas-adios-pro-4',
    slug: 'adidas-adios-pro-4',
    brand: 'Adidas',
    name: '아디제로 아디오스 프로 4',
    category: '레이싱',
    rating: 5,
    price: 299000,
    description: 'Adidas의 최상위 마라톤 레이싱화. Lightstrike Pro와 5개의 카본 Energy Rods로 최고의 추진력을 제공합니다. 알파플라이의 경쟁자.',
    tags: ['레이싱', '마라톤', '카본', '프리미엄'],
    specs: {
      weight: 207,
      cushioning: 7,
      responsiveness: 10,
      stability: 7,
      drop: 6,
      durability: 200,
    },
    biomechanics: {
      stackHeight: { heel: 39.5, forefoot: 33.5 },
      drop: 6,
      carbonPlate: true,
      plateType: 'flat',
      midsoleType: 'Lightstrike Pro + 5 Energy Rods',
      optimalPace: '3:00-4:30 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'caution',
      achillesTendinopathy: 'good',
      kneeIssues: 'caution',
      shinSplints: 'good',
    },
    koreanFootFit: {
      toBoxWidth: 'narrow',
      flatFootCompatibility: 'poor',
      wideOptions: false,
      winterCompatibility: 'fair',
    },
    targetUsers: {
      recommended: ['서브-3 마라토너', '엘리트 러너', '기록 단축 목표', '하프/풀 마라톤'],
      notRecommended: ['입문 러너', '평발/과내전', '훈련용', '느린 페이스'],
    },
    features: ['5개 카본 Energy Rods', 'Lightstrike Pro 2.0', '207g 초경량', '컨티넨탈 러버'],
    priceAnalysis: {
      msrp: 299000,
      streetPrice: 260000,
      costPerKm: 1495,
      valueRating: 7,
      priceTier: 'super-premium',
      alternatives: ['나이키 알파플라이 3', '아식스 메타스피드 스카이+'],
    },
    detailedSpecs: {
      weight: '207g (US 9 기준)',
      stackHeight: '힐 39.5mm / 포어풋 33.5mm',
      drop: '6mm',
      midsole: 'Lightstrike Pro + Energy Rods',
      plate: '5개 카본 Energy Rods',
      outsole: '컨티넨탈 러버',
      upper: '경량 메쉬',
      width: '표준 (좁은 편)',
      durability: '150-200km (레이스 전용)',
      price: '₩299,000 (MSRP)',
      costPerKm: '약 ₩1,495/km (200km 기준)',
      footType: '중립 발',
      landingPattern: 'MFS/FFS',
    },
    reviews: [
      {
        userType: '상급 러너',
        rating: 5,
        text: '알파플라이랑 비교했는데 아디오스 프로가 더 안정적이에요! 5개 Energy Rods가 추진력도 좋고 안정성도 잡아줘요. 서브-3 달성하는 데 큰 도움 됐어요. 마라톤 레이싱화로 강추!',
      },
      {
        userType: '중급 러너',
        rating: 5,
        text: '하프마라톤 1시간 25분 목표로 구매했는데 1시간 22분 달성! 베이퍼플라이보다 낮은 드롭(6mm)이 제 주법에 더 맞아요. 알파플라이보다 5만원 싸고 성능은 비슷해요.',
      },
      {
        userType: '가성비 중시',
        rating: 4,
        text: '30만원이 부담되긴 한데 알파플라이보다 5만원 싸요. km당 1,500원이면 레이싱화 중에서는 괜찮은 편. 대회 전용으로 아껴서 쓰면 가치 있어요.',
      },
      {
        userType: '평발 러너',
        rating: 3,
        text: '평발이라 좀 불안정해요. 토박스가 좁아서 발볼 넓은 제 발에는 답답하고요. 평발이면 메타스피드 엣지가 더 안정적일 것 같아요.',
      },
    ],
    similarShoes: ['nike-alphafly-3', 'asics-metaspeed-sky-plus'],
  },
  {
    id: 'adidas-takumi-sen-11',
    slug: 'adidas-takumi-sen-11',
    brand: 'Adidas',
    name: '타쿠미 센 11',
    category: '레이싱',
    rating: 4,
    price: 189000,
    description: '5K/10K 단거리 레이스 전용. 초경량 설계와 낮은 스택하이트로 지면 감각을 살리면서 Lightstrike Pro로 추진력을 제공합니다.',
    tags: ['레이싱', '단거리', '5K/10K', '경량'],
    specs: {
      weight: 175,
      cushioning: 5,
      responsiveness: 9,
      stability: 6,
      drop: 6,
      durability: 300,
    },
    biomechanics: {
      stackHeight: { heel: 27, forefoot: 21 },
      drop: 6,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Lightstrike Pro',
      optimalPace: '2:45-4:00 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'warning',
      achillesTendinopathy: 'caution',
      kneeIssues: 'warning',
      shinSplints: 'caution',
    },
    koreanFootFit: {
      toBoxWidth: 'narrow',
      flatFootCompatibility: 'poor',
      wideOptions: false,
      winterCompatibility: 'poor',
    },
    targetUsers: {
      recommended: ['5K/10K 레이스', '트랙 훈련', '전족부 착지', '상급 러너'],
      notRecommended: ['마라톤', '입문 러너', '평발', '뒤꿈치 착지'],
    },
    features: ['175g 초경량', 'Lightstrike Pro', '낮은 스택하이트', '지면 감각 우수'],
    priceAnalysis: {
      msrp: 189000,
      streetPrice: 165000,
      costPerKm: 630,
      valueRating: 7,
      priceTier: 'mid',
      alternatives: ['나이키 스트릭플라이 2', '아식스 메타 스피드 레이'],
    },
    detailedSpecs: {
      weight: '175g (US 9 기준)',
      stackHeight: '힐 27mm / 포어풋 21mm',
      drop: '6mm',
      midsole: 'Lightstrike Pro',
      plate: '없음',
      outsole: '컨티넨탈 러버',
      upper: '초경량 메쉬',
      width: '표준 (좁은 편)',
      durability: '250-300km',
      price: '₩189,000 (MSRP)',
      costPerKm: '약 ₩630/km (300km 기준)',
      footType: '중립 발, 전족부 착지',
      landingPattern: 'FFS 전용',
    },
    reviews: [
      {
        userType: '상급 러너',
        rating: 5,
        text: '5K 레이스용으로 완벽해요! 175g은 진짜 깃털 같고, 지면 감각이 살아있어서 트랙에서 스피드 내기 좋아요. 컨티넨탈 러버 그립도 최고! 5K 17분대 목표 러너한테 강추!',
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: '10K 대회용으로 샀어요. 가볍고 반응 빠른데, 쿠션이 얇아서 10K 넘으면 발바닥이 좀 아파요. 5K/10K 전용으로는 좋아요. 단거리 스피드 러너한테 추천!',
      },
      {
        userType: '가성비 중시',
        rating: 4,
        text: '19만원에 초경량 레이싱화면 괜찮아요. 스트릭플라이랑 비슷한 가격인데 컨티넨탈 러버라 그립이 더 좋아요. 5K/10K 위주로 뛰는 분께 추천.',
      },
      {
        userType: '입문 러너',
        rating: 2,
        text: '가볍다고 해서 샀는데 쿠션이 거의 없어요! 초보자한테는 절대 안 맞아요. 상급자용 레이싱화예요. 슈퍼노바부터 시작하세요.',
      },
    ],
    similarShoes: ['nike-streakfly-2', 'asics-metaspeed-ray'],
  },
  {
    id: 'adidas-adios-8',
    slug: 'adidas-adios-8',
    brand: 'Adidas',
    name: '아디제로 아디오스 8',
    category: '레이싱',
    rating: 5,
    price: 169000,
    description: '아디오스 프로의 가성비 버전. Lightstrike Pro와 유리섬유 Energy Rods로 레이싱 경험을 합리적인 가격에 제공합니다.',
    tags: ['레이싱', '가성비', '하프마라톤'],
    specs: {
      weight: 218,
      cushioning: 6,
      responsiveness: 8,
      stability: 7,
      drop: 6,
      durability: 350,
    },
    biomechanics: {
      stackHeight: { heel: 33, forefoot: 27 },
      drop: 6,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'Lightstrike Pro + 유리섬유 Energy Rods',
      optimalPace: '3:30-5:00 min/km',
    },
    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'good',
      kneeIssues: 'caution',
      shinSplints: 'good',
    },
    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'fair',
      wideOptions: false,
      winterCompatibility: 'fair',
    },
    targetUsers: {
      recommended: ['가성비 레이싱화', '하프마라톤', '중급 러너', '템포런'],
      notRecommended: ['입문 러너', '맥스 쿠션 필요', '느린 페이스'],
    },
    features: ['유리섬유 Energy Rods', 'Lightstrike Pro', '218g 경량', '가성비 레이싱'],
    priceAnalysis: {
      msrp: 169000,
      streetPrice: 145000,
      costPerKm: 482,
      valueRating: 9,
      priceTier: 'mid',
      alternatives: ['나이키 줌 플라이 6', '사코니 엔도르핀 스피드 4'],
    },
    detailedSpecs: {
      weight: '218g (US 9 기준)',
      stackHeight: '힐 33mm / 포어풋 27mm',
      drop: '6mm',
      midsole: 'Lightstrike Pro + 유리섬유 Energy Rods',
      plate: '유리섬유 Energy Rods',
      outsole: '컨티넨탈 러버',
      upper: '경량 메쉬',
      width: '표준',
      durability: '300-350km',
      price: '₩169,000 (MSRP)',
      costPerKm: '약 ₩482/km (350km 기준)',
      footType: '중립 발',
      landingPattern: 'MFS/FFS',
    },
    reviews: [
      {
        userType: '중급 러너',
        rating: 5,
        text: '가성비 레이싱화 찾다가 발견한 보물! 아디오스 프로의 반값에 비슷한 느낌이에요. 카본은 아니지만 유리섬유 Energy Rods가 충분히 반발력 있어요. 하프마라톤 1시간 35분 달성했어요!',
      },
      {
        userType: '상급 러너',
        rating: 4,
        text: '아디오스 프로 아끼려고 훈련겸 레이스용으로 씁니다. 프로급 반발력은 아니지만 350km 내구성이라 부담 없이 쓸 수 있어요. 하프마라톤까지는 이걸로 충분해요.',
      },
      {
        userType: '가성비 중시',
        rating: 5,
        text: '17만원에 레이싱화면 가성비 최고예요! 줌 플라이보다 3만원 싸면서 성능은 비슷해요. km당 500원도 안 되니까 훈련+레이스 겸용으로 딱이에요. 강력 추천!',
      },
      {
        userType: '입문 러너',
        rating: 3,
        text: '레이싱화 입문으로 샀는데 쿠션이 좀 얇아요. 5분대 후반 페이스에서는 보스턴이나 슈퍼노바가 더 편해요. 4분대 이하에서 진가를 발휘하는 것 같아요.',
      },
    ],
    similarShoes: ['nike-zoom-fly-6', 'saucony-endorphin-speed-4'],
  },

  // Asics - 입문화

  // Asics - 쿠션화
  { brand: 'Asics', name: '젤 님버스 27', category: '쿠션화', rating: 4 },

  // Asics - 데일리
  { brand: 'Asics', name: '노바블라스트 5', category: '데일리', rating: 5 },

  // Asics - 안정화
  { brand: 'Asics', name: '젤카야노 32', category: '안정화', rating: 4 },
  { brand: 'Asics', name: 'GT-4000 3', category: '안정화', rating: 4 },
  { brand: 'Asics', name: 'GT-2000 13 (안정화)', category: '안정화', rating: 4 },

  // Asics - 레이싱
  { brand: 'Asics', name: '슈퍼블라스트 2', category: '레이싱', rating: 5 },
  { brand: 'Asics', name: '매직스피드 4', category: '레이싱', rating: 4 },
  { brand: 'Asics', name: '메타스피드 스카이+', category: '레이싱', rating: 5 },
  { brand: 'Asics', name: '메타스피드 엣지+', category: '레이싱', rating: 5 },
  { brand: 'Asics', name: '메타 스피드 레이', category: '레이싱', rating: 4 },

  // New Balance - 입문화
  { brand: 'New Balance', name: '프레시폼 880 V14', category: '입문화', rating: 4 },
  { brand: 'New Balance', name: '퓨얼셀 프로펠 V5', category: '입문화', rating: 4 },
  { brand: 'New Balance', name: '프레시폼 1080 V14', category: '입문화', rating: 5 },

  // New Balance - 쿠션화
  { brand: 'New Balance', name: '프레시폼 모어 V5', category: '쿠션화', rating: 4 },

  // New Balance - 데일리
  { brand: 'New Balance', name: '퓨얼셀 레벨 V5', category: '데일리', rating: 4 },
  { brand: 'New Balance', name: '프레시폼 템포 V2', category: '데일리', rating: 4 },

  // New Balance - 안정화
  { brand: 'New Balance', name: '프레시폼 860 V14', category: '안정화', rating: 4 },
  { brand: 'New Balance', name: '프레시폼 알고 V6', category: '안정화', rating: 4 },

  // New Balance - 쿠션화
  { brand: 'New Balance', name: 'SC 트레이너 V3', category: '쿠션화', rating: 4 },

  // New Balance - 레이싱
  { brand: 'New Balance', name: '퓨얼셀 슈퍼콤프 트레이너 V3', category: '레이싱', rating: 5 },

  // New Balance - 데일리
  { brand: 'New Balance', name: '퓨얼셀 리벨 V4', category: '데일리', rating: 4 },

  // New Balance - 레이싱
  { brand: 'New Balance', name: 'SC 엘리트 V4', category: '레이싱', rating: 5 },
  { brand: 'New Balance', name: 'SC 페이서 V3', category: '레이싱', rating: 4 },

  // New Balance - 레이싱
  { brand: 'New Balance', name: '퓨얼셀 슈퍼콤프 엘리트 V4', category: '레이싱', rating: 5 },
  { brand: 'New Balance', name: 'SC 엘리트 V3', category: '레이싱', rating: 4 },

  /*
  // Saucony - 입문화
  { brand: 'Saucony', name: '라이드 18', category: '입문화', rating: 4 },
  { brand: 'Saucony', name: '가이드 18', category: '입문화', rating: 4 },

  // Saucony - 쿠션화
  { brand: 'Saucony', name: '트라이엄프 22', category: '쿠션화', rating: 4 },
  { brand: 'Saucony', name: '템포 넥스트%', category: '쿠션화', rating: 4 },

  // Saucony - 데일리
  { brand: 'Saucony', name: '킨바라 15', category: '데일리', rating: 4 },
  { brand: 'Saucony', name: '스피드 4', category: '데일리', rating: 4 },

  // Saucony - 안정화
  { brand: 'Saucony', name: '가이드 18 (안정화)', category: '안정화', rating: 4 },
  { brand: 'Saucony', name: '템포 2', category: '안정화', rating: 4 },

  // Saucony - 레이싱
  { brand: 'Saucony', name: '엔도르핀 프로 4', category: '레이싱', rating: 5 },

  // Saucony - 레이싱
  { brand: 'Saucony', name: '엔도르핀 엘리트', category: '레이싱', rating: 5 },

  // Saucony - 레이싱
  { brand: 'Saucony', name: '엔도르핀 스피드 4', category: '레이싱', rating: 4 },

  // Puma - 입문화
  { brand: 'Puma', name: '벨로시티 니트로 3', category: '입문화', rating: 4 },

  // Puma - 데일리
  { brand: 'Puma', name: '리벨 니트로 3', category: '데일리', rating: 4 },

  // Puma - 쿠션화
  { brand: 'Puma', name: '메그니파이 니트로 3', category: '쿠션화', rating: 4 },

  // Puma - 쿠션화
  { brand: 'Puma', name: '포에버런 니트로', category: '쿠션화', rating: 4 },

  // Puma - 데일리
  { brand: 'Puma', name: '라피도 니트로 3', category: '데일리', rating: 4 },

  // Puma - 데일리
  { brand: 'Puma', name: '데비에이트 니트로 3', category: '데일리', rating: 4 },

  // Puma - 레이싱
  { brand: 'Puma', name: '데비에이트 니트로 엘리트 3', category: '레이싱', rating: 4 },

  // Puma - 레이싱
  { brand: 'Puma', name: '패스트-R 니트로 엘리트 2', category: '레이싱', rating: 4 },

  // Hoka - 입문화
  { brand: 'Hoka', name: '클리프턴 10', category: '입문화', rating: 5 },
  { brand: 'Hoka', name: '클리프턴 LS', category: '입문화', rating: 4 },

  // Hoka - 쿠션화
  { brand: 'Hoka', name: '본디 9', category: '쿠션화', rating: 4 },
  { brand: 'Hoka', name: '메그니파이 니트로 3', category: '쿠션화', rating: 4 },
  { brand: 'Hoka', name: '트랜스포터 3', category: '쿠션화', rating: 4 },

  // Hoka - 데일리
  { brand: 'Hoka', name: '마하 6', category: '데일리', rating: 4 },
  { brand: 'Hoka', name: '린콘 5', category: '데일리', rating: 4 },

  // Hoka - 안정화
  { brand: 'Hoka', name: '아라히 7', category: '안정화', rating: 4 },
  { brand: 'Hoka', name: '게이터 8', category: '안정화', rating: 4 },

  // Hoka - 레이싱
  { brand: 'Hoka', name: '스카이워드 X', category: '레이싱', rating: 5 },
  { brand: 'Hoka', name: '카본 X4', category: '레이싱', rating: 5 },
  { brand: 'Hoka', name: '마하 6', category: '레이싱', rating: 4 },

  // Hoka - 레이싱
  { brand: 'Hoka', name: '로켓 X2', category: '레이싱', rating: 5 },
  { brand: 'Hoka', name: '시에나 X2', category: '레이싱', rating: 4 },

  // Hoka - 레이싱
  { brand: 'Hoka', name: '카본 엑스 4', category: '레이싱', rating: 5 },

  // Brooks - 입문화
  { brand: 'Brooks', name: '고스트 맥스 2', category: '입문화', rating: 5 },
  { brand: 'Brooks', name: '고스트 17', category: '입문화', rating: 5 },

  // Brooks - 쿠션화
  { brand: 'Brooks', name: '글리세린 22', category: '쿠션화', rating: 5 },

  // Brooks - 데일리
  { brand: 'Brooks', name: '고스트 맥스 3', category: '데일리', rating: 4 },
  { brand: 'Brooks', name: '런치 10', category: '데일리', rating: 4 },

  // Brooks - 안정화
  { brand: 'Brooks', name: '고스트 GTS 17', category: '안정화', rating: 4 },
  { brand: 'Brooks', name: '글리세린 GTS 22', category: '안정화', rating: 4 },

  // Brooks - 데일리
  { brand: 'Brooks', name: '하이퍼리온 2', category: '데일리', rating: 4 },

  // Brooks - 레이싱
  { brand: 'Brooks', name: '하이퍼리온 템포 2', category: '레이싱', rating: 4 },

  // Brooks - 데일리
  { brand: 'Brooks', name: '하이퍼리온 맥스', category: '데일리', rating: 4 },

  // Brooks - 레이싱
  { brand: 'Brooks', name: '하이퍼리온 엘리트 4', category: '레이싱', rating: 4 },

  // Brooks - 레이싱
  { brand: 'Brooks', name: '하이퍼리온 엘리트 4', category: '레이싱', rating: 4 },

  // Mizuno - 입문화
  { brand: 'Mizuno', name: '웨이브 라이더 28', category: '입문화', rating: 4 },
  { brand: 'Mizuno', name: '웨이브 호라이즌 7', category: '입문화', rating: 4 },

  // Mizuno - 쿠션화
  { brand: 'Mizuno', name: '웨이브 스카이 8', category: '쿠션화', rating: 4 },
  { brand: 'Mizuno', name: '네오 코스모', category: '쿠션화', rating: 4 },

  // Mizuno - 데일리
  { brand: 'Mizuno', name: '웨이브 네오 울트라', category: '데일리', rating: 4 },
  { brand: 'Mizuno', name: '웨이브 스카이 플라이 2', category: '데일리', rating: 4 },

  // Mizuno - 안정화
  { brand: 'Mizuno', name: '웨이브 인스파이어 20', category: '안정화', rating: 4 },

  // Mizuno - 쿠션화
  { brand: 'Mizuno', name: '웨이브 스카이 라이즈', category: '쿠션화', rating: 4 },

  // Mizuno - 데일리
  { brand: 'Mizuno', name: '웨이브 듀얼 소닉', category: '데일리', rating: 4 },

  // Mizuno - 데일리
  { brand: 'Mizuno', name: '웨이브 리벨리온 소닉', category: '데일리', rating: 4 },

  // Mizuno - 레이싱
  { brand: 'Mizuno', name: '웨이브 리벨리온 프로 2', category: '레이싱', rating: 5 },
  { brand: 'Mizuno', name: '웨이브 리벨리온 프로 플래시', category: '레이싱', rating: 5 },

  // Mizuno - 레이싱
  { brand: 'Mizuno', name: '웨이브 리벨리온 프로', category: '레이싱', rating: 5 },
  { brand: 'Mizuno', name: '웨이브 듀얼 프로', category: '레이싱', rating: 4 },

  // On - 입문화
  { brand: 'On', name: '클라우드 서퍼 7', category: '입문화', rating: 4 },
  { brand: 'On', name: '클라우드러너 2', category: '입문화', rating: 4 },

  // On - 쿠션화
  { brand: 'On', name: '클라우드몬스터 2', category: '쿠션화', rating: 4 },
  { brand: 'On', name: '클라우드몬스터 하이퍼', category: '쿠션화', rating: 4 },

  // On - 데일리
  { brand: 'On', name: '클라우드스위프트 4', category: '데일리', rating: 4 },
  { brand: 'On', name: '클라우드플로우 4', category: '데일리', rating: 4 },

  // On - 안정화
  { brand: 'On', name: '클라우드스트라토스', category: '안정화', rating: 4 },

  // On - 쿠션화
  { brand: 'On', name: '클라우드울트라', category: '쿠션화', rating: 4 },

  // On - 데일리
  { brand: 'On', name: '클라우드에코', category: '데일리', rating: 4 },

  // On - 레이싱
  { brand: 'On', name: '클라우드스트라토스', category: '레이싱', rating: 5 },

  // On - 데일리
  { brand: 'On', name: '클라우드붐 4', category: '데일리', rating: 4 },

  // On - 레이싱
  { brand: 'On', name: '클라우드붐 스트라이크 LS', category: '레이싱', rating: 4 },

  // On - 레이싱
  { brand: 'On', name: '클라우드붐 에코', category: '레이싱', rating: 4 },
  { brand: 'On', name: '클라우드스파이더', category: '레이싱', rating: 4 },
  { brand: 'On', name: '클라우드플래시', category: '레이싱', rating: 4 },
  */
];

export function getShoes(): Shoe[] {
  return shoes;
}

export function groupShoesByCategory(shoesList: Shoe[] = shoes): Record<string, Shoe[]> {
  return shoesList.reduce<Record<string, Shoe[]>>((acc, shoe) => {
    if (!acc[shoe.category]) {
      acc[shoe.category] = [];
    }
    acc[shoe.category].push(shoe);
    return acc;
  }, {});
}

export function groupShoesByBrand(shoesList: Shoe[] = shoes): Record<string, Shoe[]> {
  return shoesList.reduce<Record<string, Shoe[]>>((acc, shoe) => {
    if (!acc[shoe.brand]) {
      acc[shoe.brand] = [];
    }
    acc[shoe.brand].push(shoe);
    return acc;
  }, {});
}

export function getBrandsFromShoes(shoesList: Shoe[] = shoes): string[] {
  return Array.from(new Set(shoesList.map((shoe) => shoe.brand))).sort();
}

export function getShoeBySlug(slug: string): Shoe | undefined {
  return shoes.find((shoe) => shoe.slug === slug);
}
