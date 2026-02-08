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
    oneliner: '275g에 44mm 스택, 메타로커 입문화',
    editorComment: '클리프턴 10은 275g 경량에 44mm 맥시멀 힐 스택을 결합한 호카의 대표작입니다. 147 SA 충격흡수는 Brooks Ghost 17(141 SA)보다 높아 무릎 보호에 뛰어나며, 메타로커 지오메트리가 자연스러운 착지-이탈 전환을 돕습니다. 97.2mm 넓은 토박스는 발볼 넓은 한국 러너에게 편안하고 와이드 옵션도 제공됩니다. 19만 9천원으로 본디(22만 9천원)보다 3만원 저렴하며, 52.3% 에너지 리턴으로 반발력은 약하지만 6분/km 이상 편안한 조깅에 최적입니다.',
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
        userType: '에디터 분석',
        rating: 88,
        text: '입문 러너의 첫 러닝화로 가장 추천하는 모델입니다. 147 SA 충격흡수와 44.4mm 힐 스택으로 "무릎 괜찮나요?" 질문에 자신있게 추천할 수 있습니다. 97.2mm 넓은 토박스로 발볼 넓은 한국 러너에게도 편안하고, 와이드 옵션까지 있습니다. 18만원대로 본디(22만원)보다 저렴하면서 입문자에게 충분한 쿠셔닝을 제공합니다. 다만 52.3% 에너지 리턴으로 반발력이 약하고 275g으로 무거워, 서브4 이하 빠른 페이스에는 부적합합니다. 6분/km 이상 편안한 조깅에 최적입니다.',
      },
      {
        userType: '입문 러너',
        rating: 5,
        text: '올해 3월에 러닝 시작하면서 동호회 선배 추천으로 270mm 샀어요. 서울숲 왕복 6km를 주 3회 뛰는데, 300km 넘게 신은 지금도 쿠션감이 살아있어서 놀랐습니다. 특히 아스팔트 내리막에서 무릎에 오던 통증이 완전히 사라졌어요. 전에 싸구려 운동화 신고 뛰다가 무릎이 아파서 포기할 뻔했는데, 클리프톤으로 바꾸고 나서 러닝이 즐거워졌습니다.',
      },
      {
        userType: '회복 러너',
        rating: 5,
        text: '인터벌 훈련 다음 날 뚝섬 한강공원에서 회복 조깅용으로 씁니다. 키로당 6분 30초 정도 느릿느릿 뛰는데 로커가 굴러가듯이 전환시켜줘서 지친 종아리에 부담이 없어요. 다만 킬로 5분 이하로 올리면 바닥이 물렁물렁해서 힘이 빠지는 느낌이라, 빠른 날은 마하 6로 갈아신습니다.',
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
    oneliner: '303g 최대 쿠션, 123.2mm 초광폭 플랫폼',
    editorComment: '본디 9는 146 SA 충격흡수와 41mm 힐 스택으로 관절 보호가 최우선인 러너를 위한 신발입니다. 123.2mm 초광폭 플랫폼은 안정성(8/10)을 제공하지만, 303g 무게는 Glycerin 22(283g)보다 20g 무겁습니다. Supercritical EVA 폼은 클리프턴 10의 CMEVA보다 탄성이 좋지만, 72.5mm narrow 토박스로 발볼 넓은 한국 러너는 와이드 필수입니다. 22만 9천원 프리미엄 가격이지만 550km 내구성과 7분/km 이상 느린 페이스 전용입니다.',
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
        userType: '에디터 분석',
        rating: 90,
        text: '무릎이나 발목 부상 이력이 있는 러너, 체중이 있는 러너에게 최적의 맥시멀 쿠션화입니다. 146 SA 충격흡수와 41.3mm 힐 스택으로 관절 보호 최상위급이며, 123.2mm 초광폭 플랫폼으로 안정성도 뛰어납니다. 22만원대로 프리미엄 가격이지만 관절 보호가 필요한 러너에게는 투자 가치가 있습니다. 다만 토박스가 좁아(72.5mm) 발볼 넓은 한국 러너는 와이드 옵션을 선택하세요. 303g으로 무거워 빠른 페이스에는 부적합하고, 7분/km 이상 편안한 조깅에 최적입니다.',
      },
      {
        userType: '무릎 통증 러너',
        rating: 5,
        text: '작년 가을 마라톤 훈련 중 우측 슬개건염이 왔는데, 정형외과 선생님이 쿠션 좋은 신발 권해서 본디 9 와이드로 바꿨습니다. 280mm 와이드인데 착화감이 넉넉하고, 한강 반포 구간 10km를 7분 페이스로 뛰는데 이전에 매번 6km 지점에서 오던 무릎 통증이 완전히 사라졌어요. 91kg 체중에도 바닥이 안 꺼지는 느낌이라 믿음직합니다. 가격이 22만원대로 좀 있지만 무릎 건강 생각하면 충분히 투자할 가치가 있어요.',
      },
      {
        userType: '장거리 러너',
        rating: 4,
        text: '매주 토요일 팔당댐까지 25km 롱런에 본디 9를 신는데, 20km 넘어서도 발바닥 피로가 거의 없습니다. 킬로 7분 전후 슬로우 런에는 세상에서 제일 편한 신발이에요. 한 가지 아쉬운 건 303g이다 보니 동호회 그룹런에서 페이스가 올라갈 때 발이 무겁게 느껴진다는 거예요. 빠른 날은 다른 신발을 쓰고, 본디는 철저히 회복/장거리 전용으로 씁니다.',
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
    oneliner: '232g+65.4% 에너지, 5/5 통기성 최상',
    editorComment: '마하 6는 232g 경량에 65.4% 에너지 리턴으로 호카 라인업 중 가장 빠른 페이스에 대응 가능한 데일리화입니다. Supercritical EVA는 클리프턴/본디보다 반응성(8/10)이 높고, 통기성 5/5 최상위급으로 여름 러닝에 쾌적합니다. 18만 5천원으로 Pegasus 41(19만 9천원)보다 저렴하며 템포런부터 장거리까지 다용도 활용이 가능합니다. 단, 70.1mm narrow 토박스로 발볼 넓은 러너는 와이드 선택이 필수이고, EVA 폼이 겨울에 42% 더 단단해지는 점은 주의해야 합니다.',
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
        userType: '에디터 분석',
        rating: 87,
        text: '호카의 가벼움과 반응성을 원하는 중급 러너에게 최적의 데일리 트레이너입니다. 232g 경량에 65.4% 에너지 리턴으로 클리프톤/본디보다 빠른 페이스에 적합합니다. 19만원대로 가성비도 좋고, 통기성 5/5 최상위급으로 여름 러닝에도 쾌적합니다. 템포런부터 장거리까지 다양한 훈련에 활용 가능합니다. 다만 토박스가 좁아(70.1mm) 발볼 넓은 러너는 와이드 옵션을 선택하고, 겨울에는 EVA 폼이 42% 더 단단해지니 주의하세요.',
      },
      {
        userType: '중급 러너',
        rating: 5,
        text: '퇴근 후 여의도 한강공원에서 주 4회 뛰는데, 마하 6가 제 원픽 데일리화가 됐습니다. 화요일 인터벌(400m x 8, 킬로 4분 20초), 목요일 템포런(10km, 킬로 4분 50초), 주말 15km 롱런까지 전부 이 신발 하나로 커버해요. 265mm 표준인데 발등이 높은 편이라 처음에 좀 꽉 끼었는데 3번 뛰고 나니까 완벽히 맞더라고요. 클리프톤이 구름 위를 걷는 느낌이면, 마하 6는 탄탄한 트랙 위를 달리는 느낌입니다.',
      },
      {
        userType: '올라운드 러너',
        rating: 4,
        text: '여름 러닝에 통기성이 최고예요. 새벽 5시 북한산 둘레길 입구까지 왕복 8km 뛰는데, 7월에도 발이 쾌적합니다. 반면 12월에 같은 코스 뛸 때는 발바닥이 돌처럼 딱딱해져서 충격이 그대로 올라오더라고요. 겨울에는 클리프톤으로 바꿔 신습니다. 결론적으로 3월~10월 데일리로는 만점이에요.',
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
    oneliner: '16.4 HA 소프트+H-Frame, 평발 최적화',
    editorComment: '아라히 8은 가비오타의 H-Frame을 채택해 39.4mm 높은 스택에도 안정성(9/10)을 유지합니다. 16.4 HA 소프트 CMEVA는 전작(v7) 대비 크게 개선되었고, 138 SA 충격흡수는 GT-2000 14(132 SA)보다 높습니다. 259g 경량은 Kayano 32(295g)보다 36g 가볍고, 11.3mm 하이드롭으로 힐스트라이커에게 편안합니다. 19만 9천원으로 안정화 중 가성비가 뛰어나지만, 통기성이 매우 나빠 여름엔 불편하고 젖은 노면 그립이 약한 점은 단점입니다.',
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
        userType: '에디터 분석',
        rating: 85,
        text: '아라히 8은 오랫동안 기다려온 업데이트로 현대적인 느낌을 되찾았습니다. 가비오타의 H-Frame 안정화 시스템을 채택해 높아진 스택(39.4mm)과 부드러운 폼(16.4 HA)에도 안정적인 라이드를 제공합니다. 138 SA 충격흡수로 힐스트라이커에게 최적이고, 11.3mm 하이드롭으로 이전 버전의 낮은 드롭을 피했던 러너들도 편하게 신을 수 있습니다. 다만 통기성이 매우 나빠 더운 날씨에는 불편하고, 젖은 노면 그립이 약합니다. 평발/과내전 러너를 위한 라이트 안정화로 강력 추천합니다.',
      },
      {
        userType: '평발 러너',
        rating: 5,
        text: '군대 때부터 평발로 고생했는데 드디어 맞는 안정화를 찾았습니다. GT-2000 14를 2년 신다가 아라히 8로 갈아탔는데, 쿠셔닝이 차원이 다릅니다. 잠실 올림픽공원 순환코스 8km를 주 5회 뛰는데, GT-2000에서는 5km 지점부터 아치가 뻐근했거든요. 아라히 8은 H-Frame이 아치를 받쳐주면서도 딱딱하지 않아서 8km 내내 편안해요. 270mm 와이드 신는데 핏도 만족스럽고, 19만 9천원이면 카야노(23만원)보다 가성비도 좋습니다.',
      },
      {
        userType: '과내전 러너',
        rating: 5,
        text: '아라히 7이 벽돌 같아서 호카는 포기했었는데, 동호회에서 8이 완전히 달라졌다고 해서 반신반의하며 샀어요. 진짜로 별개의 신발이에요! 전작은 500km 신으면서 고통이었는데, 아라히 8은 첫날부터 발에 감기는 느낌이 좋았습니다. 259g이면 카야노보다 36g 가벼워서 주간 50km 달리는 저한테 그 차이가 꽤 크게 느껴져요.',
      },
      {
        userType: '힐 스트라이커',
        rating: 5,
        text: '남산 북측 순환로 내리막에서 힐로 착지하는 습관 때문에 정강이가 늘 아팠어요. 아라히 8의 11.3mm 드롭과 Early-Stage Rocker 조합이 착지 충격을 확실히 분산시켜줍니다. 400km 넘게 신었는데 아직 아웃솔 마모도 크지 않고, 뒤꿈치 쪽 쿠션감도 처음과 비슷해요. 힐스트라이커이면서 안정화가 필요한 분이라면 아라히 8이 정답입니다.',
      },
      {
        userType: '무릎 보호 러너',
        rating: 4,
        text: '좌측 반월판 수술 후 복귀하면서 의사 선생님이 맥시멀 쿠션 안정화를 권해서 선택했어요. 39.4mm 스택 덕분에 콘크리트 위에서도 무릎에 전해지는 충격이 확실히 줄었습니다. 한 가지 솔직히 불만인 건 통기성인데, 8월에 야탑천 뛰면서 양말이 젖을 정도로 발이 더웠어요. 10월부터 4월까지만 신고 여름엔 마하 6로 교체합니다.',
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
    oneliner: 'J-Frame 최강 안정, 2mm 로우드롭',
    editorComment: '가비오타 6는 299g으로 무겁지만 안정성(10/10) 최상위급 J-Frame 기술로 심한 과내전 러너를 위한 신발입니다. 듀얼 폼 시스템이 발목을 확실히 잡아주며, 2mm 초로우드롭은 아킬레스건 부담을 줄입니다. 단, 23만 9천원 프리미엄 가격은 Adrenaline GTS 25(17만원)보다 7만원 비싸고, 정상 발 러너에게는 과도한 안정성으로 오히려 불편할 수 있습니다. wide 토박스(75mm+)와 와이드 옵션으로 발볼 넓은 평발 러너에게는 편안하지만, 600km 내구성 대비 가성비는 아쉽습니다.',
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
        userType: '에디터 분석',
        rating: 80,
        text: '안정성(10/10) 최상위급 J-Frame 기술로 심한 과내전 러너를 위한 프리미엄 안정화입니다. 듀얼 폼 시스템이 발목을 확실히 잡아주며, 2mm 초로우드롭은 아킬레스건 부담을 줄여줍니다. 23만 9천원은 Adrenaline GTS 25(17만원)보다 7만원 비싸지만, wide 토박스(75mm+)와 와이드 옵션으로 발볼 넓은 평발 러너에게는 맞춤형 선택지입니다. 다만 299g 무게와 낮은 반발력(5/10)으로 6:00/km 이상 빠른 페이스에서는 답답하고, 정상 발 러너에게는 과도한 안정성이 오히려 불편할 수 있습니다.',
      },
      {
        userType: '과내전 러너',
        rating: 5,
        text: '정형외과에서 심한 과내전 진단받고 커스텀 인솔까지 맞췄었는데, 가비오타 6의 J-Frame을 만나고 인솔이 필요 없어졌어요. 매주 일요일 양재천~탄천 코스 20km 롱런하는데, 15km 넘어서 발목이 안쪽으로 꺾이던 게 완전히 사라졌습니다. 275mm 와이드 착용 중이고 발볼이 넓은 편인데 토박스가 여유로워서 장거리에도 발가락이 안 부딪혀요. 23만 9천원이 좀 부담이지만, 과내전 심한 분들은 돈 아끼지 마세요. 부상 예방 비용이라 생각합니다.',
      },
      {
        userType: '평발 러너',
        rating: 4,
        text: '평발+과체중(88kg)이라 안정화가 필수인데, 카야노 32와 가비오타 6을 둘 다 신어본 결과 리포트입니다. 아치 서포트는 가비오타가 더 확실하고, 2mm 로우드롭이라 아킬레스건에도 편해요. 대신 299g 무게가 체감되고 반발력은 거의 없어서, 킬로 6분 30초 이하로 내려가면 답답합니다. 속도보다 안정성이 절실한 평발 러너에게 추천하고, 살짝이라도 속도를 원하면 아라히 8이 나을 수 있어요.',
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
    oneliner: 'PEBA+Pebax, 69.3% 전족부 에너지',
    editorComment: '마하 X 3는 264g에 PEBA+Supercritical EVA 하이브리드 폼과 Pebax 플레이트를 탑재한 슈퍼트레이너입니다. 전족부 69.3% 에너지 리턴은 SC Trainer v3(66.1%)보다 높고, 43mm 맥시멀 스택으로 템포런/하프마라톤에 적합합니다. 24만 9천원은 로켓 X 3(29만 9천원)보다 5만원 저렴하며 500km 내구성으로 훈련 겸용이 가능합니다. v2의 힐 문제가 해결되어 힐스트라이커도 편하지만, 70.8mm narrow 토박스와 와이드 옵션 부재는 발볼 넓은 러너에게 큰 단점입니다.',
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
        userType: '에디터 분석',
        rating: 74,
        text: '레이싱화 느낌을 훈련에서 경험하고 싶은 중상급 러너를 위한 슈퍼트레이너입니다. 27만원대로 로켓X(31만원)보다 저렴하면서 500km+ 내구성으로 훈련 겸용이 가능합니다. PEBA 폼과 Pebax 플레이트 조합으로 전족부 에너지 리턴 69.3%가 뛰어나 템포런/하프마라톤에 최적입니다. 다만 토박스가 매우 좁아(70.8mm) 발볼 넓은 한국 러너에게는 불편할 수 있고, 와이드 옵션도 없습니다. v2의 힐 문제가 해결되어 힐스트라이커도 편하게 착용할 수 있습니다.',
      },
      {
        userType: '중상급 러너',
        rating: 5,
        text: '주간 70km 훈련에서 화/목 템포런 전용으로 쓰고 있습니다. 수요일 인터벌은 로켓 X 3, 주말 롱런은 클리프톤인데, 마하 X 3가 그 중간을 완벽히 채워줘요. 킬로 4분 10초~4분 40초 구간에서 Pebax 플레이트의 추진력이 확실히 느껴지고, 450km 넘게 신었는데 아직 폼이 죽지 않았어요. 로켓 X 3는 200km 쯤에서 쿠션이 빠지기 시작했거든요. 265mm 표준인데 토박스가 좀 빡빡해서 양말을 얇은 걸로 바꿨더니 괜찮아졌습니다.',
      },
      {
        userType: '하프 마라톤 러너',
        rating: 5,
        text: '올해 JTBC 서울 하프에서 마하 X 3 신고 개인 기록 1시간 38분 찍었습니다! 15km 이후 오르막에서 PEBA 폼의 반발력이 진가를 발휘했어요. 로켓 X 3을 살까 고민했는데, 29만원짜리 레이싱화를 하프에 쓰기엔 아까워서 마하 X 3으로 했는데 탁월한 선택이었습니다. 풀 마라톤은 아직 안 뛰어봤지만, 하프까지는 이 신발이면 충분하다고 자신있게 말할 수 있어요.',
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
    oneliner: '220g 듀얼 PEBA, 78% 에너지 최상위',
    editorComment: '로켓 X 3는 220g 경량에 78% 에너지 리턴으로 호카의 플래그십 레이싱화입니다. 듀얼 레이어 PEBA는 Vaporfly 3의 ZoomX보다 내구성이 뛰어나 2-3번 레이스 활용이 가능하고, 추위에서 3%만 단단해져 겨울 마라톤에도 적합합니다. 29만 9천원으로 Alphafly 3(37만원)보다 7만원 저렴하지만, 70.0mm 매우 좁은 토박스는 발볼 넓은 한국 러너에게 최대 단점입니다. 공격적인 로커 지오메트리로 적응 기간이 필요하며, 서브3:30~서브3 목표 엘리트 러너 전용입니다.',
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
        userType: '에디터 분석',
        rating: 89,
        text: '서브3:30~서브3 목표 마라토너를 위한 호카 최고의 레이싱화입니다. 78% 에너지 리턴과 카본 플레이트로 기록 단축에 최적화되어 있고, 31만원으로 알파플라이(37만원)보다 저렴합니다. 듀얼 PEBA 폼이 부드러우면서도 반발력이 좋고, 내구성이 뛰어나 2~3번 레이스에 활용 가능합니다. 추위에서 3%만 단단해져 겨울 마라톤에도 적합합니다. 다만 토박스가 매우 좁아(70.0mm) 발볼 넓은 한국 러너에게는 불편하고, 공격적인 로커로 적응 기간이 필요합니다. 레이싱 전용이므로 훈련에는 마하X를 추천합니다.',
      },
      {
        userType: '엘리트 러너',
        rating: 5,
        text: '서울국제마라톤에서 2시간 52분으로 자기 기록을 4분 단축했습니다. 30km 이후 상암 구간 오르막에서도 카본 플레이트가 발목 피로를 줄여줘서 페이스 드롭이 거의 없었어요. 알파플라이 3와 번갈아 훈련했는데, 로켓 X 3이 힐 안정성이 확실히 낫고 바람이 센 날 좌우 흔들림도 적었습니다. 260mm 착용인데 토박스가 정말 좁아서 두꺼운 양말은 절대 안 되고, 레이싱 전용 얇은 양말 필수예요. 3번 레이스 후에도 폼이 살아있어서 가격 대비 나쁘지 않습니다.',
      },
      {
        userType: '서브-3 러너',
        rating: 5,
        text: '동아마라톤 서브3 도전용으로 구매했고 결과는 2시간 58분, 성공입니다. 솔직히 처음 신었을 때 로커가 너무 공격적이라 종아리가 당겨서 후회했는데, 3주 적응 후 킬로 4분 10초가 편해지더라고요. 220g이라 35km 넘어서도 발이 가볍고, 듀얼 PEBA의 반발력이 마지막 7km 스퍼트에 결정적이었어요. 발볼 넓은 분들은 솔직히 포기하세요. 저는 260mm 표준발이라 맞았지만, 옆에서 275mm 와이드 발인 동료는 첫 레이스에서 물집 잡혔습니다.',
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
