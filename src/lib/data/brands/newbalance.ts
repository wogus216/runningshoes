import type { Brand } from '@/types/brand';

export const newBalanceBrand: Brand = {
  id: 'new-balance',
  name: 'New Balance',
  nameKo: '뉴발란스',
  tagline: 'Fearlessly Independent Since 1906',
  description:
    '1906년 보스턴에서 시작한 미국의 러닝 전통 브랜드. 기술의 화학적 조성보다 "러너가 느끼는 경험(Feel)"을 강조하며, Infinion·FuelCell·Fresh Foam X 등 용도별 폼 라인업과 2E/4E 와이드 옵션이 풍부한 것이 특징입니다.',
  founded: 1906,
  headquarters: '미국 보스턴',
  website: 'https://www.newbalance.co.kr',
  technologies: [
    // ─── 미드솔 (Midsole) ───
    {
      id: 'infinion',
      name: 'Infinion',
      nameKo: '인피니온',
      category: 'midsole',
      year: 2025,
      description:
        '1080v15의 핵심 폼으로, "첫 러닝의 설렘을 유지한다"는 철학 아래 내구성과 일관된 반발력을 제공하는 프리미엄 쿠셔닝 미드솔입니다.',
      benefits: [
        '장기간 사용해도 쿠셔닝 성능이 유지됨',
        'Fresh Foam X 대비 향상된 에너지 리턴',
        '부드러우면서도 무너지지 않는 안정적인 라이드',
        '프리미엄 데일리 러닝에 최적화',
      ],
      scienceExplanation:
        'Infinion은 2025년 1080v15에서 데뷔한 뉴발란스의 최신 프리미엄 쿠셔닝 폼입니다. 뉴발란스가 "첫 러닝의 설렘을 유지한다"고 표현하는 이 기술의 핵심은 내구성(Durability)과 일관된 반발력입니다. 수백 km를 달려도 처음과 같은 쿠셔닝 경험을 제공하도록 설계되었으며, Fresh Foam X보다 향상된 에너지 리턴으로 프리미엄 데일리 러닝화의 새로운 기준을 제시합니다.',
      performanceRating: 9,
      usedInShoes: ['new-balance-1080-v15'],
      characteristics: {
        cushioning: 10,
        responsiveness: 8,
        durability: 9,
        weight: 8,
      },
    },
    {
      id: 'fuelcell',
      name: 'FuelCell',
      nameKo: '퓨얼셀',
      category: 'midsole',
      year: 2019,
      description:
        '뉴발란스의 고성능 폼 플랫폼으로, 모델에 따라 PEBA 블렌드(Rebel)부터 100% PEBA(SC Elite)까지 등급을 나눠 폭발적인 추진력을 제공합니다.',
      benefits: [
        '모델별 PEBA 비율로 용도에 맞는 반발력',
        'SC Elite v5: 100% PEBA로 최고 에너지 리턴',
        'Rebel v5: PEBA+EVA 블렌드로 가성비와 내구성 확보',
        '가볍고 반응성 좋은 스피드 러닝 최적화',
      ],
      scienceExplanation:
        'FuelCell은 뉴발란스의 스피드 라인을 관통하는 고성능 폼 플랫폼입니다. SC Elite v5처럼 100% PEBA를 사용하는 모델은 오직 기록에만 집중하며, Rebel v5처럼 PEBA와 EVA를 섞은 블렌드 모델은 가성비와 트레이닝 내구성을 모두 잡는 전략입니다. 같은 FuelCell이라도 소재 구성에 따라 성능 등급이 명확히 나뉘는 것이 특징입니다.',
      performanceRating: 9,
      usedInShoes: ['new-balance-rebel-v5', 'new-balance-sc-elite-v5', 'new-balance-sc-trainer-v3'],
      characteristics: {
        cushioning: 7,
        responsiveness: 9,
        durability: 7,
        weight: 9,
      },
    },
    {
      id: 'fresh-foam-x',
      name: 'Fresh Foam X',
      nameKo: '프레시 폼 X',
      category: 'midsole',
      year: 2020,
      description:
        '뉴발란스에서 "가장 부드러운 착화감"을 목표로 한 데일리/입문용 폼으로, 880v15 등 편안함 중심 라인업의 핵심입니다.',
      benefits: [
        '부드럽고 편안한 착지감',
        '입문자도 부담 없는 자연스러운 라이드',
        '뛰어난 내구성으로 장기간 사용 가능',
        '리커버리 런부터 데일리까지 폭넓게 활용',
      ],
      scienceExplanation:
        'Fresh Foam X는 뉴발란스의 데일리 및 입문자용 핵심 폼입니다. "가장 부드러운 착화감"을 목표로 설계되어, 880v15와 More v5 등 편안함을 최우선으로 하는 라인업에 적용됩니다. 착지 충격을 부드럽게 흡수하여 관절 부담을 줄이며, 러닝을 처음 시작하는 입문자부터 리커버리 목적의 상급자까지 폭넓게 사용됩니다.',
      performanceRating: 7,
      usedInShoes: ['new-balance-880-v15', 'new-balance-1080-v14', 'new-balance-860-v14'],
      characteristics: {
        cushioning: 9,
        responsiveness: 6,
        durability: 8,
        weight: 7,
      },
    },

    // ─── 플레이트/구조 (Plate) ───
    {
      id: 'energy-arc',
      name: 'Energy Arc',
      nameKo: '에너지 아크',
      category: 'plate',
      year: 2022,
      description:
        '미드솔 중앙의 Void(빈 공간) 구조와 카본 플레이트를 결합하여 에너지 저장 및 방출을 극대화하는 뉴발란스의 독자적 추진 시스템입니다.',
      benefits: [
        'Void 구조로 착지 에너지를 저장하고 이륙 시 방출',
        '단순 카본판이 아닌 구조적 혁신',
        '최대 에너지 리턴으로 기록 경신 지원',
        'SC 라인의 핵심 퍼포먼스 기술',
      ],
      scienceExplanation:
        'Energy Arc는 단순히 카본 플레이트를 넣은 것이 아니라, 미드솔 중앙을 비워둔 "Void(빈 공간)" 구조가 핵심입니다. 착지 시 카본 플레이트가 휘어지며 빈 공간으로 들어갔다가, 이륙 시 튕겨 나오는 "에너지 저장 및 방출" 원리로 작동합니다. SC Elite v5와 SC Trainer v3에 적용되어 뉴발란스 레이싱 라인의 핵심 추진 시스템으로 자리 잡았습니다.',
      performanceRating: 10,
      usedInShoes: ['new-balance-sc-elite-v5', 'new-balance-sc-trainer-v3'],
      characteristics: {
        cushioning: 5,
        responsiveness: 10,
        durability: 8,
        weight: 9,
      },
    },

    // ─── 안정화 (Stability) ───
    {
      id: 'stability-plane',
      name: 'Stability Plane',
      nameKo: '스태빌리티 플레인',
      category: 'stability',
      year: 2020,
      description:
        '과거의 딱딱한 미디얼 포스트 대신, 하단 플랫폼을 넓게 설계하여 자연스럽게 발의 회내를 억제하는 안정성 기술입니다.',
      benefits: [
        '넓은 플랫폼으로 자연스러운 안정성 제공',
        '딱딱한 포스트 없이 부드러운 교정',
        '평발 러너도 편안하게 착용 가능',
        '쿠셔닝을 희생하지 않는 안정화',
      ],
      scienceExplanation:
        'Stability Plane은 과거의 딱딱한 미디얼 포스트(Medial Post) 방식에서 벗어난 현대적 안정화 기술입니다. 하단 플랫폼을 넓게 설계하여 자연스럽게 발의 회내(프로네이션)를 억제합니다. 기계적 제어보다는 "안정적인 플랫폼 지오메트리"로 동작하여, 쿠셔닝을 희생하지 않으면서 안정성을 제공하는 것이 특징입니다. 860v14에 적용되어 있습니다.',
      performanceRating: 7,
      usedInShoes: ['new-balance-860-v14'],
      characteristics: {
        cushioning: 6,
        responsiveness: 5,
        durability: 9,
        weight: 7,
      },
    },

    // ─── 어퍼 (Upper) ───
    {
      id: 'ultra-heel',
      name: 'Ultra Heel',
      nameKo: '울트라 힐',
      category: 'upper',
      year: 2021,
      description:
        '아킬레스건에 가해지는 압박을 줄이는 인체공학적 힐 구조로, 발목을 부드럽게 감싸 장거리에서도 쾌적함을 유지합니다.',
      benefits: [
        '아킬레스건 압박 최소화',
        '발목을 부드럽게 감싸는 인체공학적 설계',
        '장거리에서도 물집이나 마찰 방지',
        '편안한 착화감으로 데일리 러닝에 적합',
      ],
      scienceExplanation:
        'Ultra Heel은 발목을 부드럽게 감싸는 인체공학적 힐 구조입니다. 아킬레스건에 가해지는 압박을 줄이도록 설계되어, 장거리 러닝에서도 힐 슬립(발꿈치 빠짐)이나 마찰 없이 쾌적한 착화감을 유지합니다. 1080v15, 880v15 등 뉴발란스의 데일리 러닝 라인업에 폭넓게 적용됩니다.',
      performanceRating: 7,
      usedInShoes: ['new-balance-1080-v15', 'new-balance-880-v15'],
      characteristics: {
        cushioning: 6,
        responsiveness: 5,
        durability: 8,
        weight: 7,
      },
    },

    // ─── 아웃솔 (Outsole) ───
    {
      id: 'hydrohesion',
      name: 'HydroHesion',
      nameKo: '하이드로히전',
      category: 'outsole',
      year: 2023,
      description:
        '수막현상을 방지하는 특수 화합물을 사용한 아웃솔로, 젖은 노면에서도 안정적인 접지력을 제공합니다.',
      benefits: [
        '젖은 노면에서 수막현상 방지',
        '우천 시에도 안정적인 그립력',
        '고어텍스 모델과의 조합으로 완벽한 방수 러닝',
        '다양한 날씨 조건에서 신뢰할 수 있는 접지',
      ],
      scienceExplanation:
        'HydroHesion은 수막현상을 방지하는 특수 화합물을 사용한 아웃솔 기술입니다. 880v15 등 고어텍스 모델에 주로 적용되며, 비가 오거나 젖은 노면에서도 일반 고무 대비 월등한 접지력을 유지합니다. 한국처럼 장마철이 있는 환경에서 사계절 러닝을 하는 러너에게 특히 유용한 기술입니다.',
      performanceRating: 8,
      usedInShoes: ['new-balance-880-v15'],
      characteristics: {
        cushioning: 4,
        responsiveness: 5,
        durability: 9,
        weight: 7,
      },
    },
    {
      id: 'at-tread',
      name: 'AT Tread',
      nameKo: 'AT 트레드',
      category: 'outsole',
      year: 2022,
      description:
        '"All Terrain"의 약자로, 로드용 와플 패턴과 트레일용 러그의 중간 형태를 띠어 도심과 가벼운 오프로드를 병행하는 러너에 최적화된 아웃솔입니다.',
      benefits: [
        '아스팔트와 가벼운 흙길 모두 대응',
        '로드와 트레일의 중간 형태 패턴',
        '도심 러닝과 공원 트레일을 병행하는 러너에 적합',
        '다목적 접지력과 내구성의 균형',
      ],
      scienceExplanation:
        'AT Tread는 "All Terrain"의 약자로, 로드용 와플 패턴과 트레일용 러그의 중간 형태를 띠는 다목적 아웃솔입니다. 도심 아스팔트에서 충분한 접지력을 제공하면서도 공원이나 가벼운 흙길에서도 미끄러지지 않도록 설계되었습니다. 하나의 신발로 다양한 노면을 달리는 한국 도심 러너에게 실용적인 기술입니다.',
      performanceRating: 7,
      usedInShoes: [],
      characteristics: {
        cushioning: 4,
        responsiveness: 5,
        durability: 8,
        weight: 7,
      },
    },
  ],
};
