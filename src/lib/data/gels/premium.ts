import type { Gel } from '@/types/gel';

export const premiumGels: Gel[] = [
  {
    id: 'maurten-gel-100',
    slug: 'maurten-gel-100',
    brand: 'Maurten',
    name: 'Gel 100',
    category: '프리미엄',
    rating: 5,
    price: 6408,
    description: '엘리우드 킵초게가 세계 신기록(2:01:09)을 세울 때 선택한 에너지 젤. 특허받은 Hydrogel 기술로 탄수화물을 캡슐화해 위장 장애를 최소화. 단 6가지 성분, 비건 가능.',
    tags: ['하이드로젤', '프리미엄', '서브3', '위장 안전', '엘리트', '킵초게', '비건'],
    image: '/images/gels/maurten/main.webp',

    nutritionFacts: {
      calories: 100,
      totalCarbs: 25,
      carbSource: 'Maltodextrin + Fructose',
      glucoseFructoseRatio: '0.8:1 (과당:포도당)',
      caffeine: 0,
      sodium: 28,
      servingSize: 40,
      servingUnit: 'g',
    },

    carbScience: {
      dualSource: true,
      transporterProfile: 'SGLT1 + GLUT5',
      estimatedOxidationRate: '~90g/hr (3개/hr 섭취 시)',
      osmolalityType: 'hydrogel',
      osmolalityBasis: 'brand_claim',
      waterRequired: false,
      keyTechnology: 'Hydrogel (alginate + pectin) - 위산에서 젤 매트릭스 형성, 위 빠르게 통과',
      scienceVerdict: '듀얼 소스 + 하이드로젤로 고용량 탄수화물을 GI 이슈 없이 전달하는 최첨단 기술. 기전의 과학적 논란이 있으나 실전 GI tolerance는 최상위.',
    },

    giTolerance: {
      overall: 'excellent',
      waterPairing: '불필요',
      riskFactors: [],
      communityFeedback: '킵초게가 쓰는 젤로 유명. 위장이 예민한 러너들도 "모텐만은 괜찮다"는 후기 다수. DC 러닝갤에서 "비싸지만 속이 편하다"가 정설. 베를린·시카고·보스턴 마라톤 공식 연료.',
      gutTrainingNeeded: false,
    },

    flavorProfile: {
      flavors: ['무미 (Unflavored)'],
      texture: '묽은 젤 (물에 가까움)',
      viscosity: 3,
      aftertaste: '거의 없음. 약간의 달콤함만 남음.',
      tasteFatigueRisk: '낮음',
    },

    usageGuide: {
      bestFor: ['풀마라톤 서브3 도전자', '위장 예민한 고수', 'GI 이슈 경험자', '킵초게처럼 엘리트급 연료 전략을 원하는 러너'],
      avoidIf: ['맛있는 젤을 원하는 분', '가성비 중시', '10K 이하 레이스'],
      idealDistance: ['풀마라톤', '울트라'],
      intakeStrategy: '매 20-25분마다 1개. 물 없이 섭취 가능. Maurten Drink Mix와 병행 시 90g/hr+ 달성.',
    },

    ratings: {
      energyKick: 8,
      giComfort: 10,
      texture: 8,
      taste: 5,
      caffeine: 5,
      electrolytes: 4,
      portability: 8,
      value: 5,
      transparency: 7,
      overall: 9,
    },

    priceAnalysis: {
      msrp: 8325,
      bulkPrice: 6408,
      marathonCost: 32040,
      yangGangComparison: '양갱(800원) 대비 8배 비싸지만, 킵초게가 세계 신기록을 세울 때 선택한 이유가 있다. 흡수 속도와 위장 안정성에서 압도적 우위.',
      valueRating: 4,
      priceTier: 'super-premium',
      priceCheckedAt: '2026-02-01',
      priceSource: 'LIXLI 12개입 76,900원 기준 (개당 6,408원)',
      alternatives: ['sis-beta-fuel', '226ers-high-energy'],
    },

    purchaseLinks: [],

    features: [
      '킵초게 세계 신기록(2:01:09) 레이스 연료',
      'Hydrogel 기술 (alginate + pectin) - 위산에서 젤 매트릭스 형성',
      '단 6가지 성분, 보존제·색소·향료 無',
      '과당:포도당 0.8:1 최적 비율',
      '비건(Vegan) 섭취 가능',
    ],

    reviews: [
      {
        userType: '예상 적합 — 20분 간격 반복 섭취',
        text: '20분 간격으로 5개 이상을 연속 섭취해야 하는 운용에서 강점이 뚜렷합니다. 하이드로젤 구조라 위에서 젤 상태로 감싸여 이동하는 방식이어서, 물 없이 삼켜도 위장 자극이 적고 반복 섭취에도 부담이 누적되기 어렵습니다. 25g 탄수화물·100kcal로 1회량은 가벼운 편이라 그만큼 섭취 횟수가 늘어나는 구조입니다. 맛이 거의 없는 편인데, 반복 섭취에서는 오히려 맛 피로가 없다는 이점으로 작용합니다. 개당 6,400원으로 가격은 최상단입니다.',
      },
      {
        userType: '예상 적합 — 레이스 중 위장 장애 이력이 있는 경우',
        text: '레이스 중 위장 장애로 페이스가 무너진 경험이 있다면 우선 검토할 제품입니다. 성분이 단순해 카페인 0mg·나트륨 28mg 수준으로 위장 자극 요인이 적고, 4개 이상 연속 섭취해도 부담이 누적되기 어려운 구성입니다. 다만 개당 6,400원으로 국내 유통 젤 중 최상단 가격대라, 풀코스 5개 기준 3만원을 넘습니다. 훈련에 상시 투입하기보다 완주 실패 위험을 줄이는 레이스 한정 투자로 보는 편이 현실적입니다. 나트륨이 낮으므로 더운 날씨에는 전해질을 별도로 계획해야 합니다.',
      },
      {
        userType: '비용 대비 성분 — 위장 문제가 없다면 과한 선택',
        text: '영양 성분만 놓고 보면 가격 프리미엄이 설명되지 않는 제품입니다. 100kcal·탄수화물 25g으로 개당 800원대 양갱이나 3,500원대 젤과 큰 차이가 없는데 개당 6,400원입니다. 이 가격의 근거는 성분량이 아니라 위장 부담이 극도로 낮다는 점 하나이므로, 레이스 중 위장 장애 이력이 없다면 우선순위가 높지 않습니다. 저가 제품부터 훈련에서 시험해보고, 실제로 문제가 반복될 때 넘어오는 순서가 합리적입니다.',
      },
    ],

    similarGels: ['sis-beta-fuel', '226ers-high-energy', 'gu-roctane-energy-gel'],
  },
  {
    id: 'sis-beta-fuel',
    slug: 'sis-beta-fuel',
    brand: 'SiS',
    name: 'Beta Fuel',
    category: '프리미엄',
    rating: 4,
    price: 4433,
    description: '1:0.8 듀얼 소스 비율로 최대 흡수율을 추구하는 고농축 에너지 젤. 40g 탄수화물 + 전해질(나트륨, 칼륨, 마그네슘) + 비타민 B6/B12까지 올인원.',
    tags: ['듀얼소스', '고농축', '1:0.8', '프리미엄', '등장', '전해질', '비타민B'],
    image: '/images/gels/sis/main.webp',

    nutritionFacts: {
      calories: 158,
      totalCarbs: 40,
      carbSource: 'Maltodextrin + Fructose (1:0.8)',
      glucoseFructoseRatio: '1:0.8',
      caffeine: 0,
      sodium: 40,
      potassium: 20,
      servingSize: 60,
      servingUnit: 'ml',
    },

    carbScience: {
      dualSource: true,
      transporterProfile: 'SGLT1 + GLUT5 (최적 비율)',
      estimatedOxidationRate: '~105-120g/hr (gut-trained)',
      osmolalityType: 'isotonic',
      osmolalityBasis: 'brand_claim',
      waterRequired: false,
      keyTechnology: '1:0.8 Glucose:Fructose 비율 - 최신 연구 기반 최적 흡수 비율. 전해질(Na, K, Mg) + 비타민 B군까지 포함한 올인원 설계.',
      scienceVerdict: '최신 연구(2020+)에서 지지하는 1:0.8 비율 적용. 서빙당 40g으로 보충 횟수 절반. 전해질과 비타민 B6/B12가 피로 회복과 근육 경련 예방까지 커버. 장 훈련이 전제.',
    },

    giTolerance: {
      overall: 'good',
      waterPairing: '불필요 (등장 젤)',
      riskFactors: ['대용량(60ml)이라 한번에 섭취 시 포만감', '고농축 탄수화물로 소화 예민한 경우 주의'],
      communityFeedback: '등장 젤이라 물 없이 OK. 다만 60ml 패킷이 커서 한번에 삼키기 부담스럽다는 후기. 운동 전 30분에 1개로 에너지 프리로딩 가능.',
      gutTrainingNeeded: true,
    },

    flavorProfile: {
      flavors: ['오렌지', '레몬라임', '라즈베리', '사과'],
      texture: '묽은 시럽 (등장 젤 특유의 가벼운 질감)',
      viscosity: 3,
      aftertaste: '과일 향 상큼함. 인공적이지 않음.',
      tasteFatigueRisk: '낮음 (다양한 맛으로 로테이션 가능)',
    },

    usageGuide: {
      bestFor: ['장거리 고강도 주행', '보충 횟수를 줄이고 싶은 러너', '서브3.5 이하 도전자', '전해질 보충까지 한번에 해결하고 싶은 러너'],
      avoidIf: ['장 훈련 미경험자', '소량 자주 섭취 선호', '소화가 매우 예민한 분'],
      idealDistance: ['풀마라톤', '울트라', '철인3종'],
      intakeStrategy: '운동 전 30분에 1개 → 운동 중 30-45분마다 1개 (40g × 2 = 80g/hr). 물 없이 섭취 가능하나 수분 보충은 별도로.',
    },

    ratings: {
      energyKick: 9,
      giComfort: 8,
      texture: 8,
      taste: 7,
      caffeine: 5,
      electrolytes: 7,
      portability: 6,
      value: 6,
      transparency: 8,
      overall: 8,
    },

    priceAnalysis: {
      msrp: 4433,
      bulkPrice: 3113,
      marathonCost: 13299,
      yangGangComparison: '양갱(800원) 대비 5.5배. 하지만 40g/패킷이라 섭취 횟수 절반 → 실질 비용 차이 줄어듦. 전해질+비타민B까지 포함이라 별도 보충제 불필요.',
      valueRating: 6,
      priceTier: 'premium',
      priceCheckedAt: '2026-02-01',
      priceSource: '터커넉 30개입 기준 (오렌지 133,000원/개당 4,433원, 사과 93,400원/개당 3,113원)',
      alternatives: ['maurten-gel-100', '226ers-high-energy'],
    },

    features: [
      '1:0.8 Glucose:Fructose 최적 비율',
      '서빙당 40g 고농축 탄수화물',
      '전해질(나트륨·칼륨·마그네슘) + 비타민 B6/B12 포함',
      '등장(Isotonic) 제형 - 물 불필요',
      '근육 경련 예방 + 피로 회복 지원',
    ],

    reviews: [
      {
        userType: '예상 적합 — 보충 횟수를 줄이려는 경우',
        text: '1회 섭취량이 큰 대신 횟수를 줄이는 설계입니다. 서빙당 탄수화물 40g·158kcal이라 3개면 120g을 확보해, 일반 젤(25g 내외)로 5개를 먹는 것과 같은 양을 더 적은 횟수로 채웁니다. 등장(Isotonic) 제형이라 물 없이 삼킬 수 있어 급수대 타이밍이 어긋날 때 유리하고, 나트륨 40mg·칼륨 20mg으로 전해질도 일부 보충됩니다. 다만 60ml 패킷이 커서 러닝벨트에 3개 이상 넣으면 휴대가 불편해, 벨트 용량을 먼저 확인해야 합니다.',
      },
      {
        userType: '운용 팁 — 고농축은 장 훈련이 전제',
        text: '1회 40g의 고농축 제품이라 장 훈련(gut training)이 전제됩니다. 처음 섭취하면 더부룩함이 생기기 쉬운데, 훈련에서 2주가량 반복하면 대체로 적응됩니다. 즉 레이스 직전에 처음 쓰는 것은 위험하고, LSD 훈련에서 미리 시험해야 합니다. 목넘김은 같은 농도의 경쟁 제품보다 부드러운 편이고, 개당 4,400원(벌크 3,100원)으로 최상단 프리미엄(6,400원대)보다는 낮습니다. 비타민 B6·B12가 포함돼 있으나 러닝 중 체감 효과의 근거는 제한적입니다.',
      },
      {
        userType: '예상 적합 — 멀티 스포츠·초장시간 종목',
        text: '트라이애슬론처럼 종목이 이어지는 초장시간 레이스에 맞는 올인원 구성입니다. 나트륨·칼륨·마그네슘이 함께 들어 별도 전해질 캡슐을 챙기지 않아도 되는 점이 보급 계획을 단순하게 만듭니다. 60ml 대용량이라 사이클 구간처럼 한 번에 섭취할 수 있는 상황에서 유리하고, 등장 제형이라 러닝 구간에서도 물 없이 넘길 수 있습니다. 맛이 4종이라 로테이션으로 맛 피로도 관리됩니다. 반대로 러닝 단일 종목이면 패킷 크기가 휴대에 부담이 될 수 있습니다.',
      },
    ],

    purchaseLinks: [],

    similarGels: ['maurten-gel-100', '226ers-high-energy', 'gu-roctane-energy-gel'],
  },
  {
    id: '226ers-high-energy',
    slug: '226ers-high-energy',
    brand: '226ERS',
    name: 'High Energy Gel',
    category: '프리미엄',
    rating: 4,
    price: 7000,
    description: 'Cyclodextrin(Cluster Dextrin®) 기반 50g 탄수화물 대용량 에너지 젤. 쾰른 리스트 도핑 방지 인증. 9가지 맛 + BCAA/카페인/솔티 라인업.',
    tags: ['대용량', '50g', '사이클', '울트라', '고농축', '사이클로덱스트린', '쾰른리스트', '도핑방지'],
    image: '/images/gels/226ers/main.webp',

    nutritionFacts: {
      calories: 200,
      totalCarbs: 50,
      carbSource: 'Cyclodextrin (Cluster Dextrin®) + Maltodextrin + Sucrose',
      glucoseFructoseRatio: '1:1 (복합:단순 탄수화물)',
      caffeine: 0,
      sodium: 40,
      servingSize: 76,
      servingUnit: 'g',
    },

    carbScience: {
      dualSource: true,
      transporterProfile: 'SGLT1 (cyclodextrin/maltodextrin) + GLUT5 (sucrose → fructose)',
      estimatedOxidationRate: '~100g/hr (2개/hr)',
      osmolalityType: 'standard',
      osmolalityBasis: 'brand_claim',
      waterRequired: true,
      keyTechnology: 'Highly Branched Cyclic Dextrin (Cluster Dextrin®) - 높은 분자량 + 낮은 삼투압으로 빠른 위 통과. 인슐린 피크를 낮추고 혈당을 오래 유지. 지방 연소를 억제하지 않음.',
      scienceVerdict: '사이클로덱스트린은 말토덱스트린보다 삼투압이 낮아 고용량(50g)에서도 위장 부담 적음. 1:1 복합:단순 탄수화물 비율로 즉각 + 지속 에너지 공급. 쾰른 리스트 인증으로 도핑 안전.',
    },

    giTolerance: {
      overall: 'moderate',
      waterPairing: '필수 (300ml 권장)',
      riskFactors: ['대용량(76g)이라 위장 부담', '물 300ml 필요'],
      communityFeedback: '사이클리스트 사이에서 인기. Cluster Dextrin 특유의 빠른 위 통과 덕에 생각보다 속 편하다는 후기. 물과 함께 먹으면 OK.',
      gutTrainingNeeded: true,
    },

    flavorProfile: {
      flavors: ['레몬', '바나나', '뉴트럴(무미)', '블랙커런트(BCAA)', '오렌지(BCAA)', '에스프레소(카페인 80mg)', '체리(카페인 160mg)', '솔티 딸기(나트륨 250mg)', '피넛&허니(나트륨 250mg)'],
      texture: '걸쭉한 젤',
      viscosity: 6,
      aftertaste: '천연 향료 사용. 인공적이지 않음.',
      tasteFatigueRisk: '낮음 (9가지 맛으로 로테이션 가능)',
    },

    usageGuide: {
      bestFor: ['울트라 러너', '사이클리스트', '보충 횟수 최소화 선호', '도핑 테스트 대상 선수'],
      avoidIf: ['위장 예민 (76g 대용량)', '물 없이 먹고 싶은 분', '풀마라톤 이하 거리'],
      idealDistance: ['울트라', '풀마라톤', '철인3종'],
      intakeStrategy: '매 30-60분마다 1-2개 + 물 300ml. 2개/hr로 100g 탄수화물 가능. 카페인 버전은 체리(160mg)를 후반부에 전략적 투입.',
    },

    ratings: {
      energyKick: 9,
      giComfort: 6,
      texture: 5,
      taste: 7,
      caffeine: 7,
      electrolytes: 7,
      portability: 5,
      value: 7,
      transparency: 9,
      overall: 8,
    },

    priceAnalysis: {
      msrp: 7000,
      bulkPrice: 5500,
      marathonCost: 21000,
      yangGangComparison: '양갱(800원) 대비 8.75배이지만, 50g/패킷이라 g당 가성비는 프리미엄 중 상위. 쾰른 리스트 인증 + 9가지 라인업 프리미엄.',
      valueRating: 6,
      priceTier: 'premium',
      priceCheckedAt: '2026-02-01',
      priceSource: 'Key Power Sports (싱가포르) 개당 ₩7,000',
      alternatives: ['sis-beta-fuel', 'maurten-gel-100'],
    },

    purchaseLinks: [],

    features: [
      'Cyclodextrin (Cluster Dextrin®) 기반 - 빠른 위 통과 + 낮은 삼투압',
      '서빙당 50g 탄수화물 / 200kcal (시장 최대)',
      '쾰른 리스트(Cologne List) 도핑 방지 인증',
      '9가지 맛: Base + BCAA(1g) + 카페인(80/160mg) + 솔티(Na 250mg)',
      '천연 향료만 사용, 인공 색소 없음',
    ],

    reviews: [
      {
        userType: '울트라 러너',
        rating: 4,
        text: '제주 한라산 100km 울트라에서 6개로 300g 탄수화물(50g x 6)을 확보했습니다. 200kcal씩이라 보충 횟수가 적어서 장거리에서 정말 편해요. Cluster Dextrin 덕분에 대용량인데도 위장 부담이 생각보다 적었고, 물 300ml와 함께 먹으면 소화가 잘 됩니다. 다만 76g 패킷이 크고 무거워서 러닝 조끼에 6개 넣으면 꽤 묵직합니다. 개당 7,000원(벌크 5,500원)으로 풀코스 3개면 2만 1천 원 정도.',
      },
      {
        userType: '서브4 마라토너',
        rating: 3,
        text: '춘천마라톤에서 써봤는데 76g짜리 대용량이라 달리면서 한 번에 짜먹기가 좀 불편합니다. 서빙당 50g 탄수화물이 장점이긴 한데, 풀마라톤 4시간 페이스에서는 30분마다 GU(32g, 100kcal) 먹는 게 위장 부담도 적고 패킷도 가벼워서 더 편해요. 물 300ml를 같이 마셔야 하는 것도 급수대 타이밍이 안 맞으면 곤란합니다. 울트라나 사이클에는 좋겠지만 풀마라톤 이하에는 과한 스펙.',
      },
      {
        userType: '예상 적합 — 4시간 이상 초장시간 지구력 종목',
        text: '울트라나 장거리 라이딩처럼 4시간 이상 이어지는 종목에 맞춰 설계된 제품군입니다. 사이클로덱스트린 기반이라 위 배출이 빠른 편이어서 장시간 반복 섭취에서 위장 부담이 누적되기 어렵고, 맛이 9종이라 로테이션으로 맛 피로를 관리할 수 있습니다. 카페인 라인업이 에스프레소 80mg·체리 160mg으로 나뉘어 있어 후반 구간에 집중 투입하는 전략이 가능합니다. 쾰른 리스트 도핑 방지 인증을 받아 도핑 검사 대상 대회에 나가는 경우에도 부담이 적습니다. 다만 패킷이 76g으로 큰 편이라 러닝 벨트보다 저지 주머니 쪽이 휴대에 유리합니다.',
      },
    ],

    similarGels: ['sis-beta-fuel', 'maurten-gel-100', 'gu-roctane-energy-gel'],
  },
];
