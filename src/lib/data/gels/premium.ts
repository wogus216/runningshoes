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

    purchaseLinks: [
      {
        store: '쿠팡',
        url: 'https://link.coupang.com/a/dRZ2Xe',
      },
    ],

    features: [
      '킵초게 세계 신기록(2:01:09) 레이스 연료',
      'Hydrogel 기술 (alginate + pectin) - 위산에서 젤 매트릭스 형성',
      '단 6가지 성분, 보존제·색소·향료 無',
      '과당:포도당 0.8:1 최적 비율',
      '비건(Vegan) 섭취 가능',
    ],

    reviews: [
      {
        userType: '서브3 마라토너',
        rating: 5,
        text: '모텐으로 바꾸고 나서 풀코스 후반부 복통이 사라졌습니다. 맛은 밋밋하지만 레이스에서는 맛보다 속이 편한 게 진리입니다. 5개 먹어도 속이 편합니다.',
      },
      {
        userType: '위장 예민 러너',
        rating: 5,
        text: '다른 젤은 2개만 먹어도 속이 뒤집어지는데, 모텐은 4개까지 OK. 가격이 아깝지만 DNF 방지비용이라 생각합니다.',
      },
      {
        userType: '가성비 러너',
        rating: 3,
        text: '솔직히 5천원짜리 젤이 양갱보다 몇 배 좋은지 모르겠습니다. 위장이 튼튼한 사람은 GU면 충분.',
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
        userType: '시리어스 마라토너',
        rating: 4,
        text: '40g이라 3개만 먹으면 120g 탄수화물 확보. 등장이라 물 없이 먹을 수 있는 것도 큰 장점. 다만 패킷이 커서 호주머니에 넣기 좀 불편.',
      },
      {
        userType: 'LSD 훈련 러너',
        rating: 4,
        text: '오렌지 맛이 상큼해서 후반부에도 거부감 없음. 장 훈련 2주 후부터 확실히 편해짐. GU보다 목넘김이 훨씬 좋음.',
      },
      {
        userType: '철인3종 선수',
        rating: 4,
        text: '전해질까지 들어있어서 별도 전해질 캡슐 안 챙겨도 됨. 마라톤·사이클·수영 다 커버하는 올인원 젤.',
      },
    ],

    purchaseLinks: [
      {
        store: '쿠팡',
        url: 'https://link.coupang.com/a/dRZ5q5',
      },
    ],

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

    purchaseLinks: [
      {
        store: '쿠팡',
        url: 'https://link.coupang.com/a/dRZ7ck',
      },
    ],

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
        text: '100km 울트라에서 6개로 300g 탄수화물. 보충 횟수가 적어서 편합니다. 다만 패킷이 크고 무거운 게 단점.',
      },
      {
        userType: '서브4 마라토너',
        rating: 3,
        text: '76g짜리 대용량이라 달리면서 먹기 좀 불편. 풀마라톤에서는 GU/SiS가 더 편합니다.',
      },
      {
        userType: '사이클리스트',
        rating: 5,
        text: '사이클로덱스트린이라 속이 편하고 9가지 맛을 로테이션하니 맛 피로감 제로. 카페인 체리 160mg은 후반부 필살기.',
      },
    ],

    similarGels: ['sis-beta-fuel', 'maurten-gel-100', 'gu-roctane-energy-gel'],
  },
];
