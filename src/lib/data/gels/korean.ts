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

    purchaseLinks: [],

    features: [
      '리퀴드(물) 제형 - 목넘김 최상',
      '끈적임 제로',
      '첫구매 9,900원(6포) 프로모션',
      '3+1 벌크 구매 옵션',
      '한국인 입맛에 맞춘 과일맛',
    ],

    reviews: [
      {
        userType: '예상 적합 — 에너지 젤 입문자',
        text: '에너지 젤을 처음 쓰는 러너에게 진입 장벽이 낮은 제품입니다. 100kcal·탄수화물 25g으로 1회 보충량이 부담스럽지 않고, 리퀴드 제형이라 물 없이도 삼키기 쉬운 편입니다. 점도가 높은 젤(GU 계열)에서 목넘김이나 위 부담을 겪었다면 대안이 될 수 있습니다. 15km 안팎의 훈련이나 하프 대회처럼 보충 횟수가 많지 않은 구간에 맞는 용량입니다. 6포 12,800원 기준 개당 약 2,133원으로 입문 가격대입니다.',
      },
      {
        userType: '적합성 한계 — 풀코스 레이스용으로는 부족',
        text: '훈련용과 레이스용을 구분해서 볼 필요가 있는 제품입니다. 단일 소스(말토덱스트린+글루코스) 구성이라 흡수 한계가 시간당 약 60g에 걸립니다. 풀코스처럼 3시간 이상 지속적으로 탄수화물을 넣어야 하는 상황에서는 후반 공급이 부족해질 수 있고, 이 구간을 노린다면 듀얼 소스(포도당+과당) 젤이 이론상 유리합니다. 나트륨이 50mg으로 낮아 땀 손실이 큰 여름 대회에서는 전해질을 따로 보충해야 합니다. 반대로 30km 안팎의 롱런 훈련에서는 비용 대비 무난한 선택입니다.',
      },
      {
        userType: '예상 적합 — 위장이 약한 러너',
        text: '젤 섭취 시 위장 부담을 겪는 러너에게 문턱이 낮은 제품입니다. 리퀴드 제형이라 점도가 높은 젤에서 생기는 거부감이 적고, 30분 간격으로 반복 섭취해도 누적 부담이 덜한 편입니다. 카페인이 0mg이라 저녁 러닝에서도 제약이 없습니다. 40ml 소용량이라 러닝벨트에 3~4개를 넣어도 무게 부담이 작아, 보충 횟수가 많은 운용에 유리합니다. 단맛이 강하지 않아 레이스 후반 반복 섭취에서도 물리지 않는 편입니다.',
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
        userType: '예상 적합 — 회복 부담을 줄이려는 장거리 러너',
        text: 'BCAA 2,500mg이 들어간 구성이라, 에너지 보충과 함께 근손상 부담을 줄이려는 목적에 초점이 맞춰진 제품입니다. 다만 러닝 중 BCAA 섭취가 지연성 근육통을 실제로 줄이는지는 연구 결과가 엇갈리므로, 확정된 효과로 보기보다 부가 요소로 보는 편이 맞습니다. 109kcal·탄수화물 24g으로 에너지 보충 자체는 표준 수준이고, 그레이프프루트 향이라 단맛이 강하지 않아 레이스 후반 반복 섭취에 유리합니다. 6개입 21,000원 기준 개당 약 3,500원으로 일반 젤보다 비싼 편이라, 풀코스처럼 5개 이상 쓰는 상황에서는 비용을 함께 따져야 합니다.',
      },
      {
        userType: '비용 대비 성분 — 같은 가격대 대안과 비교',
        text: '성분과 가격을 함께 놓고 보면 선택 근거가 약해지는 구간이 있습니다. BCAA 2.5g의 운동 중 급성 효과는 스포츠 영양학 연구에서 근거가 충분하지 않아, 이를 이유로 가격 프리미엄을 지불하기는 어렵습니다. 개당 3,500원이면 탄수화물이 더 많은 대안(GU Roctane 개당 3,200원·탄수화물 40g)이 있어, 레이스 퍼포먼스만 놓고 보면 그쪽이 유리합니다. 나트륨도 45mg으로 낮아 더운 날씨 대회에서는 전해질을 따로 챙겨야 합니다. 브랜드 신뢰도나 섭취 감각을 중시한다면 선택 이유가 되지만, 성분 대비 가격만으로는 우선순위가 높지 않습니다.',
      },
      {
        userType: '예상 적합 — 단백질 보충이 필요한 초장거리',
        text: '울트라처럼 섭취 횟수가 10개를 넘는 초장거리에서, 탄수화물만이 아니라 단백질까지 함께 넣으려는 경우의 선택지입니다. 단백질 2.5g이 포함돼 있어 장시간 종목에서 차별점이 있습니다. 다만 43g 용량에 점도가 있는 편이라 물 150ml 정도를 함께 마시는 것을 전제로 계획해야 하고, 급수 간격이 넓은 코스에서는 부담이 될 수 있습니다. 풀코스 기준 5개면 17,500원이라 훈련에 상시 투입하기에는 비용이 높아, 레이스 한정 운용이 현실적입니다.',
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

    purchaseLinks: [],

    features: [
      '팔라티노스(Palatinose) 기반 - 저GI 지속 에너지',
      '45g 대용량 (일반 젤 대비 12% 많음)',
      '14포 22,500원 (개당 1,607원) 최저가',
      '묽은 제형으로 목넘김 우수',
      '청포도·자몽·사과 3가지 맛',
    ],

    reviews: [
      {
        userType: '비용 관점 — 개당 단가가 가장 낮은 축',
        text: '개당 단가만 놓고 보면 국내 유통 젤 중 가장 낮은 축입니다. 14포 22,500원 기준 개당 약 1,607원으로, 수입 프리미엄 제품(GU Roctane 개당 3,200원)의 절반 수준입니다. 풀코스에 5개를 써도 8,000원대라 훈련에 상시 투입해도 부담이 적습니다. 100kcal·탄수화물 25g으로 1회 보충량은 표준 수준이고, 팔라티노스 기반이라 혈당이 완만하게 올라가는 특성입니다. 국내 유통이라 대회 직전 조달이 쉽다는 점도 실용적인 장점입니다.',
      },
      {
        userType: '운용 팁 — 저GI 특성에 맞춘 섭취 타이밍',
        text: '팔라티노스 기반이라 GI가 32로 낮아, 흡수가 완만한 대신 반응이 늦게 오는 특성이 있습니다. 빠른 페이스에서 에너지가 즉시 필요한 상황에는 불리하므로, 레이스 30분 전에 선제로 한 개를 섭취해 혈당을 미리 올려두는 운용이 유효합니다. 반대로 혈당 급등·급락이 적어 장시간 안정적인 공급이 필요한 경우에는 장점이 됩니다. 45g으로 일반 젤(40g)보다 용량이 크고 점도가 낮아 목넘김이 편하며, 나트륨 55mg으로 전해질도 일부 보충됩니다.',
      },
      {
        userType: '모델 선택 — 양갱 대비 섭취 편의성',
        text: '비용만 보면 양갱(개당 800원 안팎)이 더 낮지만, 섭취 편의에서 갈립니다. 양갱은 고체라 씹는 과정이 필요해 5분/km 안팎의 페이스를 유지한 채 삼키기 어려운 반면, 이 제품은 액상에 가까워 페이스를 늦추지 않고 보충할 수 있습니다. 팔라티노스 기반이라 위장 부담도 적은 편입니다. 즉 완주가 목표이고 급수대에서 충분히 멈춘다면 양갱이 합리적이고, 페이스를 유지해야 하는 20km 이상 러닝에서는 이쪽이 맞습니다.',
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

    purchaseLinks: [],

    features: [
      '수용성 마그네슘 50mg (고흡수율) - 근경련 예방',
      '카페인 25mg 기본 탑재',
      '탄수화물 30g / 120kcal',
      '7가지 맛 (레몬·사과·매실·블루오렌지·쥬레 바나나/복숭아)',
      'Amazon JP 4.2★ (333리뷰) - 일본 러너 검증',
    ],

    reviews: [
      {
        userType: '성분 관점 — 마그네슘·카페인 소량 배합',
        text: '수용성 마그네슘 50mg과 카페인 25mg을 함께 넣은 구성입니다. 마그네슘이 근경련을 줄인다는 주장은 스포츠 의학 연구에서 근거가 확립되지 않았으므로, 이를 확정된 효과로 보기보다 부가 요소로 보는 편이 맞습니다. 카페인은 25mg의 소량이라 각성 효과를 노리기보다 카페인 민감도가 높은 러너가 부담 없이 쓸 수 있는 수준입니다. 120kcal·탄수화물 30g으로 1회 보충량은 상위권이고, 12개 세트 기준 개당 1,700원대까지 내려가 국산 젤 중 가격 경쟁력도 있습니다.',
      },
      {
        userType: '예상 적합 — 풀코스에서 맛 피로를 피하려는 러너',
        text: '탄수화물 30g·120kcal로 1회 보충량이 에너지 젤 중 상위권이라, 섭취 횟수를 줄이려는 경우에 유리합니다. 맛이 7가지로 많아 4~5개를 연속 섭취해야 하는 풀코스에서 맛 피로가 덜하다는 점도 실용적인 장점입니다. 다만 마케팅에서 강조되는 마그네슘 50mg의 급성 경련 예방 효과는 스포츠 의학 연구에서 근거가 충분하지 않으므로, 이를 구매 이유로 삼기는 어렵습니다. 나트륨이 0mg이라 여름 대회에서는 전해질 타블렛을 반드시 따로 지참해야 합니다. 직구 기준 개당 약 2,537원으로 국내 유통 제품(엔업 1,607원·UP 2,133원)보다 비싼 편입니다.',
      },
      {
        userType: '운용 팁 — 4시간 이상 종목의 후반 배치',
        text: '4~5시간을 넘기는 트레일·종주에서 후반에 집중 배치하는 운용으로 쓰입니다. 다만 마그네슘이 운동 중 근경련을 줄인다는 근거는 확립되지 않았으므로, 경련 예방을 확정 효과로 보기보다 수분·전해질·페이스 관리와 함께 볼 요소입니다. 실용적인 강점은 제형 선택지로, 젤에 물릴 때 쥬레 타입으로 식감을 바꿀 수 있어 장시간 반복 섭취의 거부감을 줄입니다. 12개 묶음 기준으로 사면 배송비를 포함해도 개당 단가가 낮아집니다.',
      },
    ],

    similarGels: ['aminovital-amino-shot', 'enup-power-gel', 'gu-roctane-energy-gel'],
  },
];
