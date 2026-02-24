import type { Gel } from '@/types/gel';

export const classicGels: Gel[] = [
  {
    id: 'gu-roctane-energy-gel',
    slug: 'gu-roctane-energy-gel',
    brand: 'GU',
    name: 'Roctane Energy Gel',
    category: '가성비',
    rating: 4,
    price: 3867,
    description: 'GU의 프리미엄 라인. 아미노산 1,425mg과 듀얼 소스 탄수화물로 장거리 레이스에 최적화된 울트라 엔듀런스 젤.',
    tags: ['아미노산', '듀얼소스', '글로벌', '울트라엔듀런스', '미국'],
    image: '/images/gels/gu/main.webp',

    nutritionFacts: {
      calories: 100,
      totalCarbs: 22,
      carbSource: 'Maltodextrin + Fructose',
      glucoseFructoseRatio: '약 2:1',
      caffeine: 35,
      sodium: 125,
      potassium: 55,
      servingSize: 32,
      servingUnit: 'g',
    },

    carbScience: {
      dualSource: true,
      transporterProfile: 'SGLT1 + GLUT5',
      estimatedOxidationRate: '~75g/hr (3개/hr)',
      osmolalityType: 'standard',
      osmolalityEstimate: 500,
      osmolalityBasis: 'estimated',
      waterRequired: true,
      scienceVerdict: 'Roctane은 기본 GU에 아미노산(류신, 발린, 이소류신 등)을 추가해 근피로 지연 효과. 듀얼 소스 2:1로 장거리 흡수 효율 극대화.',
    },

    giTolerance: {
      overall: 'moderate',
      waterPairing: '필수 (150-200ml)',
      riskFactors: ['고삼투압 (~500 mOsm)', '카페인 35mg (일부 맛)', '물 없이 먹으면 GI 이슈'],
      communityFeedback: '카페인 맛(블루베리석류, 체리라임, 바닐라오렌지)은 후반부용으로 전략적 사용. 스트로베리키위, 레모네이드는 무카페인.',
      gutTrainingNeeded: false,
    },

    flavorProfile: {
      flavors: ['블루베리 석류 (카페인)', '체리 라임 (카페인)', '바닐라 오렌지 (카페인)', '스트로베리 키위', '레모네이드'],
      texture: '끈적한 클래식 젤',
      viscosity: 7,
      aftertaste: '맛에 따라 다양. 레모네이드는 나트륨 180mg으로 짭짤한 맛 추가.',
      tasteFatigueRisk: '보통 (5가지 맛 로테이션 가능)',
    },

    usageGuide: {
      bestFor: ['풀마라톤 기록 도전', '울트라마라톤', '아미노산 보충 필요', '해외직구 경험 있는 러너'],
      avoidIf: ['끈적이는 식감 싫은 분', '물 없이 먹고 싶은 분', '국내 즉시 구매 필요'],
      idealDistance: ['풀마라톤', '울트라마라톤'],
      intakeStrategy: '매 25분마다 1개 + 반드시 물 150-200ml. 카페인 맛은 후반부(25km~)에 배치.',
      caffeineStrategy: '블루베리석류/체리라임/바닐라오렌지 맛에 35mg 카페인. 무카페인 맛과 교대 사용.',
    },

    ratings: {
      energyKick: 8,
      giComfort: 5,
      texture: 4,
      taste: 7,
      caffeine: 7,
      electrolytes: 7,
      portability: 7,
      value: 6,
      transparency: 8,
      overall: 7,
    },

    priceAnalysis: {
      msrp: 3867,
      bulkPrice: 3867,
      marathonCost: 19335,
      yangGangComparison: '양갱(800원) 대비 4.8배. 아미노산 1,425mg + 듀얼 소스는 양갱에 없는 프리미엄. 해외직구 전용.',
      valueRating: 6,
      priceTier: 'mid',
      priceCheckedAt: '2026-02-01',
      priceSource: '네이버 스마트스토어 (earthpass) 24개 92,800원',
      alternatives: ['enup-power-gel', 'kolon-perfect-power-gel'],
    },

    features: [
      'GU 프리미엄 Roctane 라인',
      '아미노산 1,425mg (BCAA 포함)',
      '듀얼 소스 (Maltodextrin + Fructose)',
      '5가지 맛 (3종 카페인 35mg)',
      '나트륨 125-180mg (레모네이드)',
    ],

    reviews: [
      {
        userType: '풀마라톤 서브3.5',
        rating: 4,
        text: 'GU Roctane은 기본 GU보다 확실히 후반부 근피로가 덜합니다. 아미노산 효과인지 플라시보인지 모르겠지만 35km 이후가 다름.',
      },
      {
        userType: '해외직구 러너',
        rating: 4,
        text: '24개 묶음으로 네이버에서 구매. 개당 3,867원이면 해외 젤 치고는 합리적. 카페인 맛 3종을 후반에 배치하는 전략이 좋음.',
      },
      {
        userType: '목넘김 민감 러너',
        rating: 2,
        text: '끈적한 제형은 여전히 호불호. SiS처럼 묽은 게 달리면서 먹기 편함. 맛은 좋은데 식감이 아쉽.',
      },
    ],

    similarGels: ['enup-power-gel', 'kolon-perfect-power-gel', 'maurten-gel-100'],

    purchaseLinks: [
      {
        store: '쿠팡',
        url: 'https://link.coupang.com/a/dR0dui',
      },
    ],
  },
  {
    id: 'kolon-perfect-power-gel',
    slug: 'kolon-perfect-power-gel',
    brand: '코오롱제약',
    name: '퍼펙트 파워젤',
    category: '가성비',
    rating: 4,
    price: 1533,
    description: '코오롱제약이 만든 국산 에너지 젤. 비타민B, C, 마그네슘, 칼슘까지 포함한 복합 에너지 보충제. 리뷰 3,500개 이상의 검증된 가성비.',
    tags: ['국산', '가성비', '코오롱제약', '비타민', '마그네슘'],
    image: '/images/gels/kolon/main.webp',

    nutritionFacts: {
      calories: 100,
      totalCarbs: 25,
      carbSource: '당류가공품 (Maltodextrin + Sugar)',
      caffeine: 0,
      sodium: 40,
      magnesium: 15,
      servingSize: 40,
      servingUnit: 'g',
    },

    carbScience: {
      dualSource: false,
      transporterProfile: 'SGLT1 주도',
      estimatedOxidationRate: '~60g/hr',
      osmolalityType: 'standard',
      osmolalityBasis: 'estimated',
      waterRequired: true,
      scienceVerdict: '단일 소스 SGLT1 한계(60g/hr)이지만 비타민B1, B12, 비타민C, 마그네슘, 칼슘 등 미량영양소 추가가 차별점. 훈련용으로 충분한 스펙.',
    },

    giTolerance: {
      overall: 'good',
      waterPairing: '권장 (물 150ml)',
      riskFactors: ['표준 삼투압'],
      communityFeedback: '3,543개 리뷰 평점 4.82. "편리해요" 90%, "포장 꼼꼼해요" 79%. 재구매 25명/3개월로 충성도 높음.',
      gutTrainingNeeded: false,
    },

    flavorProfile: {
      flavors: ['청포도', '꿀홍삼', '아이스블루'],
      texture: '보통 점도 젤',
      viscosity: 5,
      aftertaste: '청포도가 가장 인기. 꿀홍삼은 독특한 한국식 맛.',
      tasteFatigueRisk: '보통',
    },

    usageGuide: {
      bestFor: ['데일리 LSD 훈련', '가성비 우선', '입문 러너', '비타민 보충 원하는 러너'],
      avoidIf: ['서브3.5 이하 기록 도전 (듀얼 소스 필요)', '프리미엄 제형 선호'],
      idealDistance: ['훈련용 장거리', '하프마라톤'],
      intakeStrategy: '매 25-30분마다 1개 + 물 150ml.',
    },

    ratings: {
      energyKick: 6,
      giComfort: 7,
      texture: 6,
      taste: 7,
      caffeine: 5,
      electrolytes: 6,
      portability: 7,
      value: 9,
      transparency: 7,
      overall: 7,
    },

    priceAnalysis: {
      msrp: 1917,
      bulkPrice: 1533,
      marathonCost: 7665,
      yangGangComparison: '양갱(800원) 대비 1.9배. 에너지 젤 중 최저가급이면서 비타민/마그네슘까지 포함. 양갱→젤 업그레이드 최적.',
      valueRating: 9,
      priceTier: 'budget',
      priceCheckedAt: '2026-02-01',
      priceSource: '네이버 브랜드스토어 12포 18,400원 (정가 23,000원)',
      alternatives: ['enup-power-gel', 'sportsix-energy-gel', 'k-yanggang'],
    },

    features: [
      '코오롱제약 브랜드 신뢰성',
      '비타민B1, B12, C + 마그네슘, 칼슘',
      '3가지 맛 (청포도, 꿀홍삼, 아이스블루)',
      '리뷰 3,543개 (평점 4.82)',
      '12포 18,400원 (개당 1,533원)',
    ],

    reviews: [
      {
        userType: '가성비 러너',
        rating: 4,
        text: '다른 제품에 비해 가격이 착해요. 운동할 때 먹으려고 구매했는데 청포도맛 괜찮습니다.',
      },
      {
        userType: '등산/자전거 이용자',
        rating: 5,
        text: '산에서 먹으려고 구매. 꿀홍삼맛 궁금해서 시도해봤는데 기대됩니다.',
      },
      {
        userType: '조깅 러너',
        rating: 4,
        text: '조깅할 때 중간에 챙겨먹습니다. 청포도맛이 가장 무난하고 좋아요.',
      },
    ],

    similarGels: ['enup-power-gel', 'k-yanggang', 'sportsix-energy-gel'],

    purchaseLinks: [
      {
        store: '쿠팡',
        url: 'https://link.coupang.com/a/dR0eUY',
      },
    ],
  },
  {
    id: 'k-yanggang',
    slug: 'k-yanggang',
    brand: 'K-양갱',
    name: '양갱 (팥/밤)',
    category: '가성비',
    rating: 4,
    price: 800,
    description: '한국 러너의 독자적 에너지 보충 문화. 전 세계에서 유일한 K-에너지 식품. 위장 안전, 가성비 최강.',
    tags: ['양갱', 'K-러닝', '가성비', '위장안전', '입문자'],
    image: '/images/gels/yanggang/main.webp',

    nutritionFacts: {
      calories: 130,
      totalCarbs: 35,
      carbSource: 'Sugar + Starch (설탕 + 물엿)',
      caffeine: 0,
      sodium: 10,
      fiber: 1,
      servingSize: 50,
      servingUnit: 'g',
    },

    carbScience: {
      dualSource: false,
      transporterProfile: 'SGLT1 주도 (sucrose → glucose + fructose이지만 고체 소화 시간 필요)',
      estimatedOxidationRate: '~40-50g/hr (고체이므로 젤보다 느림)',
      osmolalityType: 'solid',
      osmolalityBasis: 'unknown',
      waterRequired: false,
      keyTechnology: '한천(agar) 기반 고체 형태 - 위장에 부담 최소',
      scienceVerdict: '"먹을 수 있는 탄수화물"이지 "최적화된 연료"는 아님. 서브5+ 러너에게 실질적 대안. 서브3.5 이하는 듀얼 소스 젤이 과학적으로 우위.',
    },

    giTolerance: {
      overall: 'excellent',
      waterPairing: '불필요 (선택)',
      riskFactors: [],
      communityFeedback: '"양갱이 진리" - DC 러닝갤. "외국인은 모르는 K-에너지젤" - 밈의 원조. 위장 탈 확률 거의 제로.',
      gutTrainingNeeded: false,
    },

    flavorProfile: {
      flavors: ['팥 (클래식)', '밤', '고구마', '녹차'],
      texture: '고체 (씹어야 함)',
      viscosity: 10,
      aftertaste: '익숙한 한국 간식맛. 달달함.',
      tasteFatigueRisk: '보통 (고체라 씹는 행위 자체가 피로 유발 가능)',
    },

    usageGuide: {
      bestFor: ['펀런/조깅', '입문 러너', '가성비 추구', 'GI 매우 예민', '양갱 러닝 문화 참여'],
      avoidIf: ['서브3.5 기록 도전 (듀얼 소스 필요)', '고강도 페이스에서 씹기 힘든 분'],
      idealDistance: ['10K', '하프마라톤', '풀마라톤 (서브5+)'],
      intakeStrategy: '에이드 300m 전부터 미리 씹기 시작 → 에이드에서 물과 삼킴. 소화 시간 고려해 섭취 20분 전 먹기.',
    },

    ratings: {
      energyKick: 5,
      giComfort: 10,
      texture: 3,
      taste: 7,
      caffeine: 1,
      electrolytes: 2,
      portability: 6,
      value: 10,
      transparency: 9,
      overall: 7,
    },

    priceAnalysis: {
      msrp: 800,
      bulkPrice: 500,
      marathonCost: 4000,
      yangGangComparison: '양갱이 기준점 자체. 풀마라톤 5개 = 4,000원. Maurten 5개(25,000원)의 1/6 가격.',
      valueRating: 10,
      priceTier: 'budget',
      priceCheckedAt: '2026-02-01',
      priceSource: '편의점 정가',
      alternatives: ['kolon-perfect-power-gel', 'enup-power-gel'],
    },

    features: [
      'K-러닝 문화의 아이콘',
      '위장 이슈 거의 제로',
      '편의점 어디서나 구매 가능',
      '풀마라톤 총 비용 4,000원',
      '별도 gut training 불필요',
    ],

    reviews: [
      {
        userType: '펀런 러너',
        rating: 5,
        text: '외국 친구가 대회에서 양갱 먹는 거 보고 뭐냐고 물어봄 ㅋㅋ K-에너지젤이라고 자랑했습니다.',
      },
      {
        userType: '서브4 도전자',
        rating: 3,
        text: '양갱으로 훈련하다가 레이스에서 GU로 바꿨더니 확실히 후반부 에너지가 다릅니다. 훈련용으로는 최고.',
      },
      {
        userType: '가성비 마라토너',
        rating: 5,
        text: '마라톤 5번 뛰면서 한번도 양갱으로 탈난 적 없음. 비싼 젤 안 사도 완주는 충분합니다.',
      },
    ],

    purchaseLinks: [
      {
        store: '쿠팡',
        url: 'https://link.coupang.com/a/dR0gpW',
      },
    ],

    similarGels: ['kolon-perfect-power-gel', 'enup-power-gel', 'up-energy-gel'],
  },
  {
    id: 'yohemite-energy-gel',
    slug: 'yohemite-energy-gel',
    brand: '요헤미티',
    name: '에너지 젤 파워젤',
    category: '가성비',
    rating: 4,
    price: 1950,
    description: '국가대표 신유빈이 선택한 에너지 젤. 메이플시럽 베이스의 부드러운 제형으로 목넘김 최고. 8,500개 이상 리뷰의 검증된 인기 제품.',
    tags: ['신유빈', '메이플시럽', '부드러운제형', '국산', '인기'],
    image: '/images/gels/yohemite/main.webp',

    nutritionFacts: {
      calories: 100,
      totalCarbs: 25,
      carbSource: 'Maple Syrup + Glucose (메이플시럽 기반)',
      caffeine: 0,
      sodium: 50,
      servingSize: 40,
      servingUnit: 'g',
    },

    carbScience: {
      dualSource: false,
      transporterProfile: 'SGLT1 주도 (메이플시럽 기반 자연당)',
      estimatedOxidationRate: '~55-60g/hr',
      osmolalityType: 'standard',
      osmolalityBasis: 'estimated',
      waterRequired: false,
      keyTechnology: '메이플시럽 기반 자연 탄수화물 - 부드러운 목넘김',
      scienceVerdict: '단일 소스지만 메이플시럽의 자연당 배합으로 위장 부담 적음. 묽은 제형이라 물 없이도 섭취 가능. 편의성 최고.',
    },

    giTolerance: {
      overall: 'good',
      waterPairing: '불필요 (묽은 제형)',
      riskFactors: [],
      communityFeedback: '8,508개 리뷰 평점 4.91. "편리해요" 93%, "포장 꼼꼼해요" 83%. 유튜버 추천으로 대세 젤.',
      gutTrainingNeeded: false,
    },

    flavorProfile: {
      flavors: ['파워젤 (메이플+청사과향)'],
      texture: '묽고 부드러운 리퀴드 젤',
      viscosity: 3,
      aftertaste: '메이플시럽 단맛에 청사과향 상큼함. 텁텁하지 않음.',
      tasteFatigueRisk: '낮음 (부드러운 맛)',
    },

    usageGuide: {
      bestFor: ['입문 러너', '목넘김 예민한 분', '운동 전 에너지 보충', '농구/축구/자전거 등 다양한 스포츠'],
      avoidIf: ['듀얼 소스 필요한 엘리트 러너', '풀마라톤 서브3 기록 도전'],
      idealDistance: ['10K', '하프마라톤', '다양한 스포츠'],
      intakeStrategy: '운동 15-20분 전 1포 섭취. 러닝 중에는 30분마다 1포. 물 없이도 OK.',
    },

    ratings: {
      energyKick: 7,
      giComfort: 8,
      texture: 9,
      taste: 8,
      caffeine: 5,
      electrolytes: 5,
      portability: 8,
      value: 7,
      transparency: 7,
      overall: 7,
    },

    priceAnalysis: {
      msrp: 2990,
      bulkPrice: 1950,
      marathonCost: 9750,
      yangGangComparison: '양갱(800원) 대비 2.4배. 묽은 제형으로 목넘김이 좋고 물 없이 먹을 수 있는 게 양갱 대비 장점.',
      valueRating: 7,
      priceTier: 'entry',
      priceCheckedAt: '2026-02-01',
      priceSource: '네이버 브랜드스토어 20개 39,000원 (정가 59,800원)',
      alternatives: ['kolon-perfect-power-gel', 'onyourmark-energy-gel', 'sportsix-energy-gel'],
    },

    features: [
      '국가대표 신유빈 모델',
      '메이플시럽 기반 자연 탄수화물',
      '묽고 부드러운 목넘김 (물 불필요)',
      '리뷰 8,508개 (평점 4.91)',
      '개봉 편리한 패키지 설계',
    ],

    reviews: [
      {
        userType: '러닝 입문자',
        rating: 5,
        text: '처음 사본 에너지젤인데 확실히 효과가 있어요. 7-8km에서 사점이 오던 게 젤 먹고 수월하게 넘겼습니다. 메이플시럽 맛 맛있고 목넘김 좋아요.',
      },
      {
        userType: '농구 동호인',
        rating: 5,
        text: '40대 농구하면서 후반 체력 떨어지는데, 이거 먹고 확실히 끝까지 덜 지칩니다.',
      },
      {
        userType: '비교 러너',
        rating: 5,
        text: '타사 제품보다 약간 묽은데 개봉이 편해서 달리면서 먹기 좋아요. 다만 꼭다리 처리가 좀 불편.',
      },
    ],

    similarGels: ['onyourmark-energy-gel', 'kolon-perfect-power-gel', 'sportsix-energy-gel'],

    purchaseLinks: [
      {
        store: '네이버',
        url: 'https://naver.me/FfsbmE4Y',
      },
    ],
  },
  {
    id: 'onyourmark-energy-gel',
    slug: 'onyourmark-energy-gel',
    brand: '온유어마크',
    name: '에너지젤',
    category: '가성비',
    rating: 4,
    price: 2200,
    description: '포도당 + 아가베시럽 기반의 부드러운 꿀 제형. 레드비트 농축액 2%와 블루베리 주스 함유. HACCP 인증 국산 에너지젤.',
    tags: ['국산', '포도당', '아가베시럽', '레드비트', 'HACCP', '무카페인'],
    image: '/images/gels/onyourmark/main.webp',

    nutritionFacts: {
      calories: 104,
      totalCarbs: 26,
      carbSource: '포도당 + 아가베시럽',
      caffeine: 0,
      sodium: 30,
      servingSize: 40,
      servingUnit: 'g',
    },

    carbScience: {
      dualSource: false,
      transporterProfile: 'SGLT1 주도 (포도당 기반)',
      estimatedOxidationRate: '~55-60g/hr',
      osmolalityType: 'standard',
      osmolalityBasis: 'estimated',
      waterRequired: false,
      keyTechnology: '포도당 + 아가베시럽 조합 - 빠른 흡수 + 부드러운 단맛',
      scienceVerdict: '포도당 기반으로 SGLT1 통한 빠른 흡수. 아가베시럽(저GI)이 혈당 급등 완화. 레드비트 농축액의 질산염 효과는 소량이지만 부가가치.',
    },

    giTolerance: {
      overall: 'good',
      waterPairing: '불필요 (부드러운 꿀 제형)',
      riskFactors: [],
      communityFeedback: '공식몰 81개 리뷰 5.0만점, 네이버 68개 리뷰 4.87점. "목넘김 좋다", "너무 달지 않다" 평가 다수.',
      gutTrainingNeeded: false,
    },

    flavorProfile: {
      flavors: ['블루베리'],
      texture: '부드러운 꿀 제형',
      viscosity: 4,
      aftertaste: '은은한 블루베리향. 과하지 않은 단맛.',
      tasteFatigueRisk: '낮음',
    },

    usageGuide: {
      bestFor: ['카페인 민감한 러너', '위장 예민한 러너', '자연 원료 선호', 'K-브랜드 지지'],
      avoidIf: ['맛 다양성 필요', '카페인 부스트 필요', '듀얼 소스 필요'],
      idealDistance: ['10K', '하프마라톤', '풀마라톤'],
      intakeStrategy: '러닝 15분 전 1포 섭취. 이후 30분마다 1포. 물 없이도 OK.',
    },

    ratings: {
      energyKick: 6,
      giComfort: 8,
      texture: 8,
      taste: 7,
      caffeine: 5,
      electrolytes: 4,
      portability: 7,
      value: 7,
      transparency: 8,
      overall: 7,
    },

    priceAnalysis: {
      msrp: 2200,
      bulkPrice: 2200,
      marathonCost: 11000,
      yangGangComparison: '양갱(800원) 대비 2.75배. 레드비트 농축액과 HACCP 인증이 차별점. 포도당 기반 빠른 흡수.',
      valueRating: 7,
      priceTier: 'entry',
      priceCheckedAt: '2026-02-01',
      priceSource: '공식몰 10포 22,000원 (개당 2,200원)',
      alternatives: ['yohemite-energy-gel', 'kolon-perfect-power-gel', 'sportsix-energy-gel'],
    },

    features: [
      '포도당 + 아가베시럽 자연 배합',
      '레드비트 농축액 2% + 블루베리 주스',
      'HACCP 인증 국산 제조',
      '무카페인 (수면 영향 無)',
      '부드러운 꿀 제형 (물 불필요)',
    ],

    reviews: [
      {
        userType: '러닝 입문자',
        rating: 5,
        text: '부드럽게 잘 넘어가요. 블루베리맛이 과하지 않고 은은해서 좋습니다. 한 포 먹고 확실히 후반부가 수월해졌어요.',
      },
      {
        userType: '카페인 민감 러너',
        rating: 5,
        text: '무카페인이라 저녁 러닝에도 걱정 없이 먹을 수 있어서 좋아요. HACCP 인증도 믿음이 갑니다.',
      },
      {
        userType: '대회 참가자',
        rating: 4,
        text: '맛 선택지가 블루베리 하나뿐인 게 아쉽지만, 목넘김과 효과는 만족스러워요.',
      },
    ],

    similarGels: ['yohemite-energy-gel', 'kolon-perfect-power-gel', 'up-energy-gel'],

    purchaseLinks: [
      {
        store: '온유어마크 공식몰',
        url: 'https://www.onyourmarknutri.com/shop/?idx=1',
        price: 22000,
        isOfficial: true,
      },
      {
        store: '네이버 스마트스토어',
        url: 'https://smartstore.naver.com/onyourmarknutri',
        isOfficial: true,
      },
    ],
  },
  {
    id: 'sportsix-energy-gel',
    slug: 'sportsix-energy-gel',
    brand: '스포식스',
    name: '에너지젤',
    category: '가성비',
    rating: 4,
    price: 1738,
    description: '소비자보호원 조사에서 알려진 성분 우수 에너지젤. 목넘김 부드럽고 가격 착한 신흥 브랜드. 복숭아·청포도·파인애플(프로) 3가지 맛.',
    tags: ['국산', '가성비', '소비자보호원', '부드러운제형', '신흥브랜드'],
    image: '/images/gels/sportsix/main.webp',

    nutritionFacts: {
      calories: 95,
      totalCarbs: 24,
      carbSource: '당류가공품',
      caffeine: 0,
      sodium: 35,
      protein: 0.1,
      servingSize: 35,
      servingUnit: 'g',
    },

    carbScience: {
      dualSource: false,
      transporterProfile: 'SGLT1 주도',
      estimatedOxidationRate: '~55-60g/hr',
      osmolalityType: 'standard',
      osmolalityBasis: 'estimated',
      waterRequired: false,
      scienceVerdict: '단일 소스이지만 목넘김이 좋아 달리면서 섭취 용이. 소비자보호원 성분 조사에서 양호 판정 받은 이력으로 신뢰도 확보.',
    },

    giTolerance: {
      overall: 'good',
      waterPairing: '불필요 (부드러운 제형)',
      riskFactors: [],
      communityFeedback: '115개 리뷰 평점 4.89. "성분 좋고 가격도 착하다", "목넘김 부드러워서 좋다" 후기 다수. 플라스크 증정 이벤트도 진행.',
      gutTrainingNeeded: false,
    },

    flavorProfile: {
      flavors: ['복숭아', '청포도', '파인애플 (프로)'],
      texture: '부드러운 젤',
      viscosity: 4,
      aftertaste: '과일맛 자연스러움. 먹기 편함.',
      tasteFatigueRisk: '낮음',
    },

    usageGuide: {
      bestFor: ['가성비 우선 러너', '입문자', '다양한 스포츠 (축구, 등산, 자전거)'],
      avoidIf: ['듀얼 소스 필요한 엘리트 러너', '해외 브랜드 선호'],
      idealDistance: ['10K', '하프마라톤', '훈련용'],
      intakeStrategy: '운동 전 1포, 이후 30분마다 1포. 물 없이도 OK.',
    },

    ratings: {
      energyKick: 6,
      giComfort: 8,
      texture: 8,
      taste: 7,
      caffeine: 5,
      electrolytes: 5,
      portability: 7,
      value: 9,
      transparency: 7,
      overall: 7,
    },

    priceAnalysis: {
      msrp: 3000,
      bulkPrice: 1738,
      marathonCost: 8690,
      yangGangComparison: '양갱(800원) 대비 2.2배. SET 구매 시 개당 1,738원으로 코오롱과 비슷한 가성비. 부드러운 목넘김은 양갱 대비 큰 장점.',
      valueRating: 8,
      priceTier: 'budget',
      priceCheckedAt: '2026-02-01',
      priceSource: '네이버 브랜드스토어 2box(16포) SET 25,900원 (정가 48,000원)',
      alternatives: ['kolon-perfect-power-gel', 'yohemite-energy-gel', 'k-yanggang'],
    },

    features: [
      '소비자보호원 성분 조사 양호 판정',
      '목넘김 부드러운 제형 (물 불필요)',
      '3가지 맛 (복숭아, 청포도, 파인애플 프로)',
      'SET 구매 시 개당 1,738원 (최저가급)',
      '플라스크 증정 이벤트 진행',
    ],

    reviews: [
      {
        userType: '소비자보호원 참고 구매자',
        rating: 5,
        text: '소비자 보호원에서 에너지젤 조사한 걸 보고 알게 됐어요. 성분도 좋고 목넘김이 부드러워서 만족합니다. 가격도 착해요.',
      },
      {
        userType: '가성비 러너',
        rating: 5,
        text: '저가 젤보다 월등히 좋고 고가 젤에 비해 성능이 우수합니다. 가성비 최고.',
      },
      {
        userType: '장거리 러너',
        rating: 5,
        text: '장거리 러닝 시 필요해서 찾다 성분도 괜찮고 가격도 좋네요. 맛도 좋고 먹기 편합니다.',
      },
    ],

    similarGels: ['kolon-perfect-power-gel', 'yohemite-energy-gel', 'onyourmark-energy-gel'],

    purchaseLinks: [
      {
        store: '네이버',
        url: 'https://naver.me/xnrJdjJo',
      },
    ],
  },
];
