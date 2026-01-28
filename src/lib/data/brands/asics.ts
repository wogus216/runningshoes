import type { Brand } from '@/types/brand';

export const asicsBrand: Brand = {
  id: 'asics',
  name: 'Asics',
  nameKo: '아식스',
  tagline: 'Sound Mind, Sound Body',
  description:
    '1949년 오니츠카 타이거로 시작한 일본의 러닝 전문 브랜드. 2025~2026년 FF LEAP™ 폼으로 기술 세대교체를 완성하며, GEL 쿠셔닝부터 카본 플레이트까지 과학적 접근의 기술력으로 유명합니다. 안정화(GT-2000, Kayano)부터 최상급 레이싱(Metaspeed)까지 폭넓은 라인업을 운영합니다.',
  founded: 1949,
  headquarters: '일본 고베',
  website: 'https://www.asics.co.kr',
  technologies: [
    // ─── 미드솔 (Midsole) ───
    {
      id: 'ff-leap',
      name: 'FF LEAP™',
      nameKo: 'FF 리프',
      category: 'midsole',
      year: 2025,
      description:
        '아식스 최상위 레이싱용 초경량 고반발 폼으로, FF TURBO™를 넘어서는 차세대 스피드 미드솔입니다.',
      benefits: [
        'FF TURBO™ 대비 더 가볍고 탄성이 뛰어남',
        '최상급 레이싱화 전용 엘리트 폼',
        '착지 에너지를 극대화하여 추진력 생성',
        '장거리 레이스에서도 성능 유지',
      ],
      scienceExplanation:
        'FF LEAP™은 2025~2026년 아식스가 전면에 내세운 차세대 최상위 폼입니다. 기존 FF TURBO™보다 더 가볍고 탄성이 뛰어난 초경량 고반발 소재로, Metaspeed Tokyo 시리즈의 베이스를 담당합니다. 착지 시 에너지를 효율적으로 저장하고 이륙 시 폭발적으로 되돌려주는 설계로, 아식스 스피드 라인의 기술적 세대교체를 완성한 게임 체인저입니다.',
      performanceRating: 10,
      usedInShoes: [],
      characteristics: {
        cushioning: 8,
        responsiveness: 10,
        durability: 6,
        weight: 10,
      },
    },
    {
      id: 'ff-turbo-plus',
      name: 'FF TURBO™ PLUS',
      nameKo: 'FF 터보 플러스',
      category: 'midsole',
      year: 2023,
      description:
        'FF LEAP™과 결합하여 에너지 리턴을 극대화하는 고반발 폼으로, 아식스가 "에너지 리턴의 정점"으로 묘사하는 기술입니다.',
      benefits: [
        'FF LEAP™과의 듀얼 구조로 반발력 극대화',
        '뛰어난 에너지 리턴으로 장거리 피로 저감',
        '고스택 구조에서도 안정적인 라이드',
        '상급 트레이닝부터 레이싱까지 활용',
      ],
      scienceExplanation:
        'FF TURBO™ PLUS는 아식스의 고성능 폼으로, FF LEAP™과 결합하여 "반등력"을 극대화하는 역할을 합니다. Superblast 2에 주입된 핵심 기술로, 아식스는 이를 "에너지 리턴의 정점"으로 묘사합니다. 높은 스택 높이에서도 안정적인 라이드를 유지하며, 상급 트레이닝부터 전천후 활용이 가능한 고성능 폼입니다.',
      performanceRating: 9,
      usedInShoes: ['asics-superblast-2', 'asics-metaspeed-sky-plus', 'asics-metaspeed-edge-plus'],
      characteristics: {
        cushioning: 9,
        responsiveness: 9,
        durability: 7,
        weight: 9,
      },
    },
    {
      id: 'ff-blast-max',
      name: 'FF BLAST™ MAX',
      nameKo: 'FF 블라스트 맥스',
      category: 'midsole',
      year: 2024,
      description:
        'Novablast 5의 핵심 폼으로, 트램펄린 같은 깊은 쿠셔닝과 바운시한 반발력을 제공하는 데일리 러닝 미드솔입니다.',
      benefits: [
        '트램펄린 같은 깊은 쿠셔닝감',
        '이전 PLUS 시리즈보다 향상된 반발력',
        '매일 신어도 부담 없는 편안함',
        '다양한 페이스에서 일관된 성능',
      ],
      scienceExplanation:
        'FF BLAST™ MAX는 Novablast 5의 핵심 미드솔입니다. "MAX"라는 이름답게 이전의 FF BLAST™ PLUS 시리즈보다 더 깊은 쿠션감과 트램펄린 같은 반발력을 제공하도록 설계되었습니다. 기하학적 미드솔 구조와 결합하여 착지 시 에너지를 흡수하고 자연스럽게 앞으로 추진하는 바운시한 라이드를 만들어냅니다.',
      performanceRating: 8,
      usedInShoes: ['asics-novablast-5'],
      characteristics: {
        cushioning: 9,
        responsiveness: 8,
        durability: 8,
        weight: 8,
      },
    },
    {
      id: 'puregel',
      name: 'PureGEL™',
      nameKo: '퓨어젤',
      category: 'cushioning',
      year: 2023,
      description:
        '기존 GEL보다 65% 더 부드러운 차세대 GEL 기술로, 미드솔 내부에 삽입되어 눈에 보이지 않게 충격을 흡수합니다.',
      benefits: [
        '기존 GEL 대비 65% 더 부드러운 쿠셔닝',
        '미드솔 내부 삽입으로 자연스러운 착지감',
        '무릎과 관절 부담을 효과적으로 줄임',
        '안정화 모델에서 충격 흡수의 핵심 역할',
      ],
      scienceExplanation:
        'PureGEL™은 아식스의 상징적인 GEL 기술의 최신 진화형으로, 기존 GEL보다 65% 더 부드럽다는 수치는 아식스의 공식 비교 데이터입니다. 눈에 보이지 않게 미드솔 내부에 삽입되어 착지 충격을 흡수하는 것이 특징이며, GT-2000 14와 Kayano 32 등 안정화 라인에서 FF BLAST™ MAX와 함께 사용됩니다. 무릎이 약한 러너나 관절 보호가 중요한 러너에게 특히 유용합니다.',
      performanceRating: 8,
      usedInShoes: ['asics-gel-kayano-32', 'asics-gel-nimbus-28'],
      characteristics: {
        cushioning: 10,
        responsiveness: 6,
        durability: 8,
        weight: 7,
      },
    },

    // ─── 구조/가이드 시스템 (Plate & Stability) ───
    {
      id: '3d-guidance-system',
      name: '3D GUIDANCE SYSTEM™',
      nameKo: '3D 가이던스 시스템',
      category: 'stability',
      year: 2022,
      description:
        'GT-2000, Kayano 등 안정화 라인의 핵심 기술로, 기하학적 설계를 통해 발의 아치가 무너지지 않도록 능동적으로 유도합니다.',
      benefits: [
        '과회내(오버프로네이션) 자연스럽게 교정',
        '발 아치를 능동적으로 지지하고 유도',
        '평발 비율이 높은 한국 러너에게 적합',
        '부드러운 가이드로 관절 스트레스 최소화',
      ],
      scienceExplanation:
        '3D GUIDANCE SYSTEM™은 GT-2000 14 및 Kayano 32 등 안정화 라인의 핵심 기술입니다. 단순히 발을 받쳐주는 것이 아니라, 기하학적 설계를 통해 발의 아치가 무너지지 않도록 능동적으로 유도합니다. 착지부터 이륙까지 발의 움직임 경로를 안정적으로 가이드하여, 과회내(오버프로네이션) 경향이 있는 러너도 자연스러운 보행 패턴을 유지할 수 있습니다.',
      performanceRating: 8,
      usedInShoes: ['asics-gel-kayano-32'],
      characteristics: {
        cushioning: 6,
        responsiveness: 5,
        durability: 9,
        weight: 7,
      },
    },
    {
      id: 'carbon-plate',
      name: 'Full Carbon Plate',
      nameKo: '풀 카본 플레이트',
      category: 'plate',
      year: 2020,
      description:
        'Metaspeed 시리즈 전용 풀랭스 카본 플레이트로, 착지 에너지를 폭발적인 추진력으로 전환합니다.',
      benefits: [
        '풀랭스 설계로 발 전체에 균일한 추진력',
        '착지-이륙 전환 시 에너지 손실 최소화',
        '고속 주행에 최적화된 폭발적 반발',
        'FF LEAP™ 폼과 시너지로 최고 성능 발휘',
      ],
      scienceExplanation:
        'Metaspeed 시리즈에 적용되는 풀랭스 카본 플레이트는 발 전체 길이를 감싸는 설계로, 착지 시 에너지를 저장하고 이륙 시 폭발적인 추진력으로 전환합니다. FF LEAP™ 폼 사이에 샌드위치 구조로 배치되어 시스템으로 작동하며, 엘리트 마라토너의 기록 경신에 기여하고 있습니다. Magic Speed 시리즈에서는 하이브리드(카본+TPU) 구성으로 등급을 차별화합니다.',
      performanceRating: 10,
      usedInShoes: ['asics-metaspeed-sky-plus', 'asics-metaspeed-edge-plus', 'asics-magic-speed-4', 'asics-sonicblast'],
      characteristics: {
        cushioning: 5,
        responsiveness: 10,
        durability: 8,
        weight: 9,
      },
    },
    {
      id: 'hybrid-plate',
      name: 'Hybrid Plate (Carbon+TPU)',
      nameKo: '하이브리드 플레이트',
      category: 'plate',
      year: 2022,
      description:
        'Magic Speed 시리즈에 적용되는 카본+TPU 복합 플레이트로, 풀 카본보다 유연하면서도 효과적인 추진력을 제공합니다.',
      benefits: [
        '풀 카본 대비 유연한 추진력으로 다양한 페이스 대응',
        '카본과 TPU의 장점을 결합한 균형 잡힌 성능',
        '템포런부터 레이스까지 활용 가능',
        '풀 카본 플레이트보다 접근성 높은 가격대',
      ],
      scienceExplanation:
        'Hybrid Plate는 Magic Speed 시리즈에서 풀랭스 카본 플레이트 대신 사용되는 복합 추진 구조입니다. 카본 소재와 TPU를 결합하여 풀 카본의 폭발적 추진력보다는 넓은 페이스 범위에서 효율적인 에너지 전달에 초점을 맞췄습니다. 빠른 훈련용이나 하프 마라톤 레이스에서 카본화를 처음 경험하는 러너에게 적합한 "입문 레이싱" 플레이트입니다.',
      performanceRating: 8,
      usedInShoes: ['asics-magic-speed-4'],
      characteristics: {
        cushioning: 5,
        responsiveness: 8,
        durability: 9,
        weight: 8,
      },
    },

    // ─── 어퍼 (Upper) ───
    {
      id: 'motion-wrap-3',
      name: 'MOTION WRAP™ 3.0',
      nameKo: '모션 랩 3.0',
      category: 'upper',
      year: 2024,
      description:
        '레이싱 모델 전용 어퍼로, 고속 주행 시 발을 강하게 잡아주면서도 신축성을 유지하여 발의 변형에 유연하게 대응합니다.',
      benefits: [
        '고속 주행 시 발을 강하게 잡아주는 핏',
        '신축성이 있어 발의 변형에 유연하게 대응',
        '초경량 설계로 무게 부담 최소화',
        '레이스 내내 안정적인 착화감 유지',
      ],
      scienceExplanation:
        'MOTION WRAP™ 3.0은 Metaspeed 등 레이싱 모델 전용 어퍼 기술입니다. 발을 강하게 잡아주면서도 신축성을 유지해 고속 주행 시 발의 변형에 유연하게 대응합니다. 전략적으로 배치된 지지 구조가 레이스 내내 발이 신발 안에서 밀리지 않도록 잠금하며, 초경량 소재를 사용하여 무게 부담을 최소화했습니다.',
      performanceRating: 9,
      usedInShoes: ['asics-metaspeed-sky-plus', 'asics-metaspeed-edge-plus'],
      characteristics: {
        cushioning: 4,
        responsiveness: 6,
        durability: 7,
        weight: 10,
      },
    },

    // ─── 아웃솔 (Outsole) ───
    {
      id: 'hybrid-asicsgrip',
      name: 'HYBRID ASICSGRIP™',
      nameKo: '하이브리드 아식스그립',
      category: 'outsole',
      year: 2024,
      description:
        '접지력(AsicsGrip)과 내구성(AHAR)의 황금비율을 결합한 하이엔드 아웃솔로, 젖은 노면에서도 미끄러지지 않습니다.',
      benefits: [
        '젖은 노면에서도 미끄러지지 않는 강력한 그립',
        'AsicsGrip의 접지력 + AHAR의 내구성 결합',
        '레이싱화와 훈련화의 장점을 동시에',
        '다양한 노면 조건에서 안정적 성능',
      ],
      scienceExplanation:
        'HYBRID ASICSGRIP™은 접지력(AsicsGrip)과 내구성(AHAR)의 황금비율을 구현한 하이엔드 아웃솔입니다. 젖은 노면에서도 미끄러지지 않는 레이싱화의 특성과 매일 달려도 닳지 않는 훈련화의 특성을 결합한 솔루션으로, Superblast 2 등 상급 모델에 적용됩니다. 고속 주행과 일상 훈련 모두에서 신뢰할 수 있는 접지력과 내구성을 제공합니다.',
      performanceRating: 9,
      usedInShoes: ['asics-superblast-2'],
      characteristics: {
        cushioning: 5,
        responsiveness: 7,
        durability: 9,
        weight: 7,
      },
    },
    {
      id: 'aharplus',
      name: 'AHARPLUS',
      nameKo: '아하플러스',
      category: 'outsole',
      year: 2015,
      description:
        '기존 아웃솔 고무 대비 3배 이상의 내마모성을 가진 화합물로, 데일리 러닝화의 수명을 크게 늘립니다.',
      benefits: [
        '기존 고무 대비 3배 이상의 내마모성',
        '높은 주간 주행거리에도 오래 유지',
        'km당 비용을 낮춰주는 경제적 기술',
        '데일리 및 입문자용 모델에 폭넓게 적용',
      ],
      scienceExplanation:
        'AHARPLUS는 기존 아웃솔 고무 대비 3배 이상의 내마모성을 가진 고내구성 화합물입니다. 마모가 가장 빨리 일어나는 뒤꿈치와 전족부에 집중 배치되어 미드솔 폼이 직접 닳는 것을 방지합니다. 특히 주간 주행거리가 높은 러너나 예산을 고려하는 입문자에게 km당 비용을 낮춰주는 경제적인 기술입니다.',
      performanceRating: 7,
      usedInShoes: ['asics-gel-nimbus-28', 'asics-gel-kayano-32', 'asics-novablast-5'],
      characteristics: {
        cushioning: 4,
        responsiveness: 5,
        durability: 10,
        weight: 6,
      },
    },
  ],
};
