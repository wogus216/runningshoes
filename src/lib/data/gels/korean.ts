import type { Gel } from '@/types/gel';

export const koreanGels: Gel[] = [
  {
    id: 'up-energy-gel',
    slug: 'up-energy-gel',
    brand: 'UP',
    name: '얼티밋 포텐셜',
    category: '스테디셀러',
    rating: 4,
    price: 2133,
    description: '리퀴드(물) 제형으로 깔끔한 목넘김이 특징인 한국 러너 스테디셀러. "극한84" 브랜딩으로 첫구매 9,900원(6포) 프로모션 상시 운영.',
    tags: ['리퀴드', '목넘김', '한국', '스테디셀러', '극한84'],
    image: '/images/gels/up/main.webp',

    nutritionFacts: {
      calories: 100,
      totalCarbs: 25,
      carbSource: 'Maltodextrin + Glucose',
      caffeine: 0,
      sodium: 50,
      servingSize: 40,
      servingUnit: 'ml',
    },

    carbScience: {
      dualSource: false,
      transporterProfile: 'SGLT1 only',
      estimatedOxidationRate: '~60g/hr (단일 소스 한계)',
      osmolalityType: 'standard',
      osmolalityBasis: 'estimated',
      waterRequired: false,
      keyTechnology: '리퀴드 제형 - 젤이 아닌 액체 형태로 목넘김 극대화',
      scienceVerdict: '단일 소스(SGLT1)로 60g/hr 한계. 서브4 이상 기록 도전 시 듀얼 소스 제품으로 업그레이드 권장. 훈련용으로 적합.',
    },

    giTolerance: {
      overall: 'good',
      waterPairing: '불필요 (리퀴드 제형)',
      riskFactors: ['단일 소스이므로 고용량 시 SGLT1 포화 가능'],
      communityFeedback: '네이버 카페에서 "목넘김 좋고 속 편하다" 후기 다수. 러닝 입문자에게 인기.',
      gutTrainingNeeded: false,
    },

    flavorProfile: {
      flavors: ['사과', '복숭아', '포도'],
      texture: '묽은 리퀴드 (물 수준)',
      viscosity: 2,
      aftertaste: '깔끔. 입안에 남는 느낌 최소.',
      tasteFatigueRisk: '낮음',
    },

    usageGuide: {
      bestFor: ['끈적이는 식감 혐오 러너', '입문~중급 러너', '훈련용'],
      avoidIf: ['서브3 기록 도전자 (듀얼소스 필요)', '카페인 부스트 필요'],
      idealDistance: ['하프마라톤', '풀마라톤 (서브5+)'],
      intakeStrategy: '매 25-30분마다 1개. 리퀴드라 물 없이 바로 섭취 가능.',
    },

    ratings: {
      energyKick: 6,
      giComfort: 8,
      texture: 9,
      taste: 7,
      caffeine: 5,
      electrolytes: 6,
      portability: 7,
      value: 8,
      transparency: 7,
      overall: 7,
    },

    priceAnalysis: {
      msrp: 2667,
      bulkPrice: 2133,
      marathonCost: 10665,
      yangGangComparison: '양갱(800원) 대비 2.7배. 리퀴드 제형의 편의성을 감안하면 합리적.',
      valueRating: 8,
      priceTier: 'entry',
      priceCheckedAt: '2026-02-01',
      priceSource: '공식몰 6포 12,800원 (정가 16,000원, 20% 할인)',
      alternatives: ['enup-power-gel', 'gu-roctane-energy-gel'],
    },

    purchaseLinks: [
      {
        store: '쿠팡',
        url: 'https://link.coupang.com/a/dRZ8a2',
      },
    ],

    features: [
      '리퀴드(물) 제형 - 목넘김 최상',
      '끈적임 제로',
      '첫구매 9,900원(6포) 프로모션',
      '3+1 벌크 구매 옵션',
      '한국인 입맛에 맞춘 과일맛',
    ],

    reviews: [
      {
        userType: '입문 러너',
        rating: 4,
        text: '첫 에너지 젤로 UP 사과맛 먹었는데 물처럼 넘어가서 놀랐습니다. 한강 반포 코스에서 15km 달리면서 먹었는데 100kcal에 탄수화물 25g이 적당하고, 리퀴드 제형이라 물 없이도 목넘김이 깔끔합니다. GU는 끈적여서 싫었는데 이건 위 부담도 전혀 없었어요. 쿠팡에서 6포 12,800원에 샀는데 개당 2,133원이면 입문자한테 가격도 착합니다. 올해 JTBC 하프마라톤 나가는데 이걸로 가져갈 예정이에요.',
      },
      {
        userType: '서브4 러너',
        rating: 3,
        text: '양재천 주말 30km 롱런 훈련에는 좋은데 실제 레이스에서는 에너지가 약한 느낌입니다. 단일 소스(말토덱스트린+글루코스)라 시간당 60g 이상 흡수가 안 돼서 서울마라톤 후반 35km부터 힘이 빠졌어요. 나트륨도 50mg뿐이라 땀 많이 흘리는 여름 대회에는 전해질 보충이 따로 필요합니다. 훈련용으로 가성비 좋게 쓰고, 레이스 때는 듀얼 소스 젤로 갈아타는 게 맞는 것 같아요.',
      },
      {
        userType: '위장 민감 러너',
        rating: 5,
        text: '평소 위가 약해서 에너지 젤이 두려웠는데 UP은 리퀴드 제형이라 속이 전혀 불편하지 않습니다. 올림픽공원 둘레길 러닝 때 매 30분마다 하나씩 먹어도 거부감이 없어요. 카페인 0mg이라 저녁 러닝에도 부담 없고, 40ml 소용량이라 러닝벨트에 3~4개 넣어도 가벼워서 좋습니다. 복숭아맛이 달지 않고 깔끔해서 레이스 후반에도 안 물리고, 다음 달 경주 벚꽃마라톤 하프에도 이걸로 가져갈 예정이에요.',
      },
    ],

    similarGels: ['enup-power-gel', 'gu-roctane-energy-gel', 'kolon-perfect-power-gel'],
  },
  {
    id: 'aminovital-amino-shot',
    slug: 'aminovital-amino-shot',
    brand: '아미노바이탈',
    name: '아미노샷',
    category: '스테디셀러',
    rating: 3,
    price: 3500,
    description: 'BCAA 2,500mg 함유 에너지 젤. 장시간 운동의 후반부까지 혈당 유지를 목표로 하는 일본 아지노모토 그룹 브랜드.',
    tags: ['BCAA', '아미노산', '일본', '근회복', '혈당유지'],
    image: '/images/gels/aminovital/main.webp',

    nutritionFacts: {
      calories: 109,
      totalCarbs: 24,
      carbSource: 'Maltodextrin + Sugar',
      caffeine: 0,
      sodium: 45,
      protein: 2.5,
      servingSize: 43,
      servingUnit: 'g',
    },

    carbScience: {
      dualSource: false,
      transporterProfile: 'SGLT1 주도',
      estimatedOxidationRate: '~60g/hr',
      osmolalityType: 'standard',
      osmolalityBasis: 'estimated',
      waterRequired: true,
      scienceVerdict: 'BCAA 2,500mg는 운동 중 급성 효과 근거 부족 (마케팅 > 과학). 탄수화물 전달이 핵심인 레이스에서는 탄수화물 양과 비율이 더 중요.',
    },

    giTolerance: {
      overall: 'good',
      waterPairing: '권장 (물 150ml)',
      riskFactors: ['표준 삼투압'],
      communityFeedback: '일본 마라톤 대회에서 많이 보임. 한국에서도 아미노산 효과를 믿는 러너들이 선호.',
      gutTrainingNeeded: false,
    },

    flavorProfile: {
      flavors: ['그레이프프루트', '에너지 드링크맛'],
      texture: '보통 점도의 젤',
      viscosity: 5,
      aftertaste: '약간의 아미노산 특유의 씁쓸함',
      tasteFatigueRisk: '보통',
    },

    usageGuide: {
      bestFor: ['근손실 방지 우선 러너', '일본 제품 선호', '하프마라톤'],
      avoidIf: ['최대 탄수화물 흡수 추구', '서브3 도전자'],
      idealDistance: ['하프마라톤', '풀마라톤'],
      intakeStrategy: '매 30분마다 1개 + 물 150ml.',
    },

    ratings: {
      energyKick: 6,
      giComfort: 7,
      texture: 6,
      taste: 5,
      caffeine: 5,
      electrolytes: 5,
      portability: 7,
      value: 5,
      transparency: 7,
      overall: 6,
    },

    priceAnalysis: {
      msrp: 4500,
      bulkPrice: 3500,
      marathonCost: 17500,
      yangGangComparison: '양갱(800원) 대비 4.4배. BCAA는 운동 중 급성 효과 미미하므로 탄수화물 함량 대비 비싼 편.',
      valueRating: 5,
      priceTier: 'mid',
      priceCheckedAt: '2026-02-01',
      priceSource: 'highvibe 6개입 21,000원 (정가 27,000원)',
      alternatives: ['up-energy-gel', 'enup-power-gel'],
    },

    purchaseLinks: [
      {
        store: '네이버',
        url: 'https://naver.me/5kP8K4RR',
      },
    ],

    features: [
      'BCAA 2,500mg 함유',
      '장시간 운동 후반부 혈당 유지',
      '일본 아지노모토 그룹 브랜드',
      '나트륨 45mg',
      '그레이프프루트 맛',
    ],

    reviews: [
      {
        userType: '근회복 중시 러너',
        rating: 4,
        text: '작년 춘천마라톤 풀코스 때 매 7km마다 하나씩 총 5개 먹었는데, 이전 대회 대비 다음 날 근육통이 확실히 덜했습니다. BCAA 2,500mg이 실제로 효과 있는 건지 위약 효과인지는 모르겠지만 꾸준히 먹고 있어요. 109kcal에 탄수화물 24g으로 에너지 보충도 되고, 그레이프프루트 맛이 달지 않아서 레이스 후반에도 물리지 않습니다. 네이버 쇼핑에서 6개입 21,000원에 구매 중인데 개당 3,500원이 좀 부담이긴 합니다.',
      },
      {
        userType: '과학적 러너',
        rating: 2,
        text: 'BCAA 2.5g의 운동 중 급성 효과는 스포츠 영양학 연구에서 근거가 부족합니다. 같은 가격(개당 3,500원)이면 탄수화물이 더 많은 GU Roctane(개당 3,200원, 탄수화물 40g)이 레이스 퍼포먼스에는 훨씬 낫습니다. 나트륨도 45mg으로 적은 편이라 경주마라톤처럼 더운 날씨 대회에서는 전해질 부족이 걱정되고요. 다만 아지노모토 브랜드 신뢰도와 아미노산 특유의 씁쓸한 맛이 "약 먹는 느낌"을 주는 건 플라시보 효과로라도 의미가 있을 수 있겠죠.',
      },
      {
        userType: '울트라 러너',
        rating: 3,
        text: '100km 울트라 대회에서 에너지 젤을 10개 이상 먹어야 하는데, 아미노바이탈은 43g 용량에 점도가 좀 있어서 물 150ml 페어링이 필수입니다. 동아마라톤 엑스포에서 샘플 받아서 써봤는데, 단백질 2.5g이 추가로 들어있는 건 장거리에서 확실히 차별점이에요. 다만 풀마라톤 기준 5개 먹으면 17,500원이라 훈련에 매번 쓰기엔 비싸서 레이스 때만 꺼내 씁니다.',
      },
    ],

    similarGels: ['up-energy-gel', 'magon-energy-gel', 'gu-roctane-energy-gel'],
  },
  {
    id: 'enup-power-gel',
    slug: 'enup-power-gel',
    brand: '엔업',
    name: 'En-up 파워젤',
    category: '스테디셀러',
    rating: 4,
    price: 1607,
    description: '팔라티노스(Palatinose) 기반 국산 에너지 젤. 45g 대용량에 개당 1,607원(14포 기준). 청포도·자몽·사과 3가지 맛으로 가성비 최강.',
    tags: ['국산', '가성비', '팔라티노스', '대용량', '묽은젤'],
    image: '/images/gels/enup/main.webp',

    nutritionFacts: {
      calories: 100,
      totalCarbs: 25,
      carbSource: 'Palatinose (Isomaltulose)',
      caffeine: 0,
      sodium: 55,
      servingSize: 45,
      servingUnit: 'g',
    },

    carbScience: {
      dualSource: false,
      transporterProfile: 'SGLT1 (저속 흡수)',
      estimatedOxidationRate: '~40-50g/hr (팔라티노스 특성상 저속)',
      osmolalityType: 'standard',
      osmolalityBasis: 'estimated',
      waterRequired: true,
      keyTechnology: '팔라티노스(Palatinose/이소말툴로스) - GI 32로 혈당 급등 방지, 지속적 에너지 공급',
      scienceVerdict: '팔라티노스는 저GI(32) 탄수화물로 혈당 스파이크 없이 지속적 에너지 공급. 단, 흡수 속도가 느려 고강도 레이스보다는 훈련·장거리 저강도에 적합. 가격(개당 1,607원)은 국산 젤 중 최저 수준.',
    },

    giTolerance: {
      overall: 'good',
      waterPairing: '권장 (물 150ml)',
      riskFactors: ['팔라티노스는 과량 시 복부 팽만감 가능'],
      communityFeedback: '네이버 페이 리뷰 별점 5점 다수. "가성비 좋고 목넘김 좋다" 평가. 아이언맨 오영환 프로 후원.',
      gutTrainingNeeded: false,
    },

    flavorProfile: {
      flavors: ['청포도', '자몽', '사과'],
      texture: '묽은 젤 (목넘김 좋음)',
      viscosity: 3,
      aftertaste: '과일맛 깔끔.',
      tasteFatigueRisk: '낮음',
    },

    usageGuide: {
      bestFor: ['가성비 최우선 러너', '훈련용 대량 구매', '혈당 안정적 에너지 선호'],
      avoidIf: ['고강도 레이스 (빠른 흡수 필요)', '듀얼소스 필요한 서브3 도전자'],
      idealDistance: ['하프마라톤', '풀마라톤 (서브5+)', '울트라'],
      intakeStrategy: '매 25-30분마다 1개 + 물 150ml. 팔라티노스 특성상 레이스 30분 전 선제 섭취 권장.',
    },

    ratings: {
      energyKick: 6,
      giComfort: 8,
      texture: 7,
      taste: 7,
      caffeine: 5,
      electrolytes: 6,
      portability: 7,
      value: 10,
      transparency: 7,
      overall: 7,
    },

    priceAnalysis: {
      msrp: 1786,
      bulkPrice: 1607,
      marathonCost: 8035,
      yangGangComparison: '양갱(800원) 대비 2배. 팔라티노스 기반 45g 대용량으로 가성비 최강.',
      valueRating: 10,
      priceTier: 'entry',
      priceCheckedAt: '2026-02-01',
      priceSource: '공식몰 14포 22,500원 (정가 25,000원)',
      alternatives: ['kolon-perfect-power-gel', 'up-energy-gel', 'gu-roctane-energy-gel'],
    },

    purchaseLinks: [
      {
        store: '쿠팡',
        url: 'https://link.coupang.com/a/dR0blo',
      },
    ],

    features: [
      '팔라티노스(Palatinose) 기반 - 저GI 지속 에너지',
      '45g 대용량 (일반 젤 대비 12% 많음)',
      '14포 22,500원 (개당 1,607원) 최저가',
      '묽은 제형으로 목넘김 우수',
      '청포도·자몽·사과 3가지 맛',
    ],

    reviews: [
      {
        userType: '가성비 러너',
        rating: 5,
        text: '역시 가성비 최강 에너지 젤입니다. 14포에 22,500원이면 개당 1,607원, 풀마라톤 5개 써도 8,035원밖에 안 합니다. GU Roctane이 개당 3,200원인 거 생각하면 반값도 안 되는데, 100kcal 탄수화물 25g으로 에너지 보충은 충분해요. 쿠팡 로켓배송으로 대회 전날까지 주문 가능하고, 청포도맛이 한국 러너 입맛에 딱이에요. 팔라티노스 기반이라 혈당 급등 없이 지속적으로 에너지 나오는 느낌도 좋습니다.',
      },
      {
        userType: '마라톤 러너',
        rating: 4,
        text: '서울마라톤 준비하면서 한강 35km 롱런 때 써봤는데, 다른 제품들 대비 확실히 묽어서 목넘김이 좋습니다. 45g 대용량이라 일반 젤(40g)보다 넉넉하고, 나트륨 55mg으로 땀 보충도 어느 정도 됩니다. 다만 팔라티노스가 저GI(32)라 흡수 속도가 느린 편이어서, 서브3:30 페이스로 달릴 때는 에너지가 좀 느리게 오는 느낌이 있었어요. 레이스 30분 전에 미리 하나 선제 섭취하는 게 포인트입니다.',
      },
      {
        userType: '주말 러너',
        rating: 4,
        text: '올림픽공원이나 양재천에서 주말 20km 러닝할 때 하나씩 챙겨 먹고 있습니다. 위가 약한 편인데 엔업은 팔라티노스 기반이라 위장 부담이 적고 속이 편해서 좋아요. 자몽맛이 상큼해서 여름 러닝에 잘 맞고, JTBC 마라톤 엑스포에서 시식해보고 바로 14포 세트를 질렀습니다. 양갱(개당 800원)이 더 싸긴 한데, 양갱은 씹어야 하고 목에 걸리는 느낌이 있어서 km 5분 페이스로 달리면서 먹기엔 엔업이 훨씬 편합니다.',
      },
    ],

    similarGels: ['gu-roctane-energy-gel', 'kolon-perfect-power-gel', 'up-energy-gel'],
  },
  {
    id: 'magon-energy-gel',
    slug: 'magon-energy-gel',
    brand: '마그온',
    name: 'Mag-on 에너지젤',
    category: '스테디셀러',
    rating: 4,
    price: 2537,
    description: '수용성 마그네슘 50mg + 카페인 25mg을 기본 탑재한 일본 세로토레(Serotore) 제조 에너지 젤. 레이스 후반 근육 경련(쥐) 방지의 대명사. Amazon JP 4.2★(333리뷰).',
    tags: ['마그네슘', '경련방지', '일본', '카페인', '수용성마그네슘'],
    image: '/images/gels/magon/main.webp',

    nutritionFacts: {
      calories: 120,
      totalCarbs: 30,
      carbSource: 'Maltodextrin + Fruit Juice',
      caffeine: 25,
      sodium: 0,
      magnesium: 50,
      servingSize: 41,
      servingUnit: 'g',
    },

    carbScience: {
      dualSource: false,
      transporterProfile: 'SGLT1 주도 (말토덱스트린 + 과즙)',
      estimatedOxidationRate: '~60g/hr',
      osmolalityType: 'standard',
      osmolalityBasis: 'estimated',
      waterRequired: true,
      keyTechnology: '수용성 마그네슘 50mg(고흡수율) + 카페인 25mg 기본 탑재. 근경련 예방 + 각성 효과 동시 제공.',
      scienceVerdict: '탄수화물 30g(말토덱스트린+과즙)은 우수하나 단일 소스라 흡수율 한계. 수용성 마그네슘 50mg은 일반 마그네슘보다 흡수율이 높아 급성 효과 가능성 있음. 카페인 25mg은 미량이지만 레이스당 4-5개 섭취 시 100-125mg으로 누적 효과.',
    },

    giTolerance: {
      overall: 'good',
      waterPairing: '권장 (물 150ml)',
      riskFactors: ['마그네슘이 대량 시 설사 가능'],
      communityFeedback: 'Amazon JP 4.2★(333리뷰). 일본 마라톤 러너들에게 "경련 방지 젤"로 유명. 한국에서도 쿠팡 직구로 인기. "맛이 좋고 경련이 줄었다" 후기 다수.',
      gutTrainingNeeded: false,
    },

    flavorProfile: {
      flavors: ['레몬', '사과', '핑크 그레이프프루트', '매실', '블루 오렌지', '바나나(쥬레)', '복숭아(쥬레)'],
      texture: '부드러운 젤',
      viscosity: 5,
      aftertaste: '상큼한 과일맛. 일본 특유의 섬세한 맛.',
      tasteFatigueRisk: '낮음',
    },

    usageGuide: {
      bestFor: ['레이스 후반 경련(쥐)이 잦은 러너', '마그네슘 보충 원하는 분', '맛있는 젤 선호', '카페인 약한 버전 원하는 분'],
      avoidIf: ['마그네슘에 민감 (설사 가능)', '카페인 완전 제로 원하는 분'],
      idealDistance: ['풀마라톤', '울트라', '트레일러닝'],
      intakeStrategy: '매 25-30분마다 1개 + 물 150ml. 경련 예방 목적이면 후반부(25km+)에 집중 배치. 카페인 25mg이 기본 포함이라 5개 섭취 시 125mg 누적.',
    },

    ratings: {
      energyKick: 7,
      giComfort: 7,
      texture: 7,
      taste: 8,
      caffeine: 6,
      electrolytes: 9,
      portability: 7,
      value: 7,
      transparency: 8,
      overall: 7,
    },

    priceAnalysis: {
      msrp: 2537,
      bulkPrice: 1705,
      marathonCost: 12685,
      yangGangComparison: '양갱(800원) 대비 3.2배. 수용성 마그네슘 50mg + 카페인 25mg + 탄수화물 30g을 감안하면 합리적.',
      valueRating: 7,
      priceTier: 'mid',
      priceCheckedAt: '2026-02-01',
      priceSource: 'Amazon JP 12개입 KRW 30,441 (개당 2,537원), 쿠팡 직구 12개입 15,300~20,460원',
      alternatives: ['enup-power-gel', 'gu-roctane-energy-gel'],
    },

    purchaseLinks: [
      {
        store: '쿠팡',
        url: 'https://link.coupang.com/a/dR0cub',
      },
    ],

    features: [
      '수용성 마그네슘 50mg (고흡수율) - 근경련 예방',
      '카페인 25mg 기본 탑재',
      '탄수화물 30g / 120kcal',
      '7가지 맛 (레몬·사과·매실·블루오렌지·쥬레 바나나/복숭아)',
      'Amazon JP 4.2★ (333리뷰) - 일본 러너 검증',
    ],

    reviews: [
      {
        userType: '경련 고민 러너',
        rating: 4,
        text: '동아마라톤 때 매번 35km 지점에서 종아리에 쥐가 나서 고생했는데, 마그온으로 바꾸고 확실히 줄었습니다. 수용성 마그네슘 50mg이 일반 마그네슘보다 흡수가 빠르다고 하고, 카페인 25mg도 소량 들어있어서 후반부 집중력에 도움이 되는 느낌이에요. 레몬맛이 상큼하고 120kcal에 탄수화물 30g으로 에너지도 충분합니다. 쿠팡 직구로 12개 세트 사면 개당 1,700원대까지 내려가서 가격도 괜찮아요.',
      },
      {
        userType: '과학적 러너',
        rating: 3,
        text: '마그네슘 50mg의 급성 경련 예방 효과는 스포츠 의학 연구에서 아직 근거가 부족합니다. 다만 탄수화물 30g에 120kcal는 에너지 젤 중 상위권이고, 맛도 7가지나 되어서 경주마라톤이나 춘천마라톤처럼 4~5개 먹어야 하는 풀코스에서 맛 피로도가 낮아요. 나트륨이 0mg인 게 아쉬운 점인데, 한여름 대회에서는 전해질 타블렛 별도 지참이 필수입니다. Amazon JP에서 직구하면 개당 2,537원인데 국내 엔업(1,607원)이나 UP(2,133원) 대비 비싼 건 사실이에요.',
      },
      {
        userType: '트레일 러너',
        rating: 5,
        text: '북한산 트레일이나 지리산 종주 같은 장시간 산행 러닝에서 마그온이 필수템이 됐습니다. 4~5시간 넘게 움직이면 종아리와 허벅지에 경련이 오는데, 25km 이후부터 마그온을 집중 배치하니 확실히 낫더라고요. 매실맛이 한국인 입맛에 잘 맞고, 쥬레 타입(바나나/복숭아)은 젤이 질릴 때 식감 변화를 줄 수 있어서 좋습니다. 네이버 쇼핑에서 12개 묶음으로 사면 배송비 포함해도 합리적이에요.',
      },
    ],

    similarGels: ['aminovital-amino-shot', 'enup-power-gel', 'gu-roctane-energy-gel'],
  },
];
