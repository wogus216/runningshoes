import type { Brand } from '@/types/brand';

export const adidasBrand: Brand = {
  id: 'adidas',
  name: 'Adidas',
  nameKo: '아디다스',
  tagline: 'Impossible Is Nothing',
  description:
    '1949년 아디 다슬러가 설립한 독일의 글로벌 스포츠 브랜드. Lightstrike Pro, Energyrods 2.0, Continental 러버 등 소재와 구조를 정밀하게 조합하는 기술 전략이 특징이며, 같은 기술명이라도 소재(카본 vs 유리섬유)로 등급을 나누는 디테일한 라인업 운영이 강점입니다.',
  founded: 1949,
  headquarters: '독일 헤르초게나우라흐',
  website: 'https://www.adidas.co.kr',
  technologies: [
    {
      id: 'lightstrike-pro',
      name: 'Lightstrike Pro',
      nameKo: '라이트스트라이크 프로',
      category: 'midsole',
      year: 2021,
      description:
        '아디다스 최고급 레이싱용 폼으로, 최고 수준의 에너지 리턴과 초경량을 동시에 제공하는 엘리트 미드솔입니다.',
      benefits: [
        '아디다스 폼 중 최고 수준의 에너지 리턴',
        '극한의 경량화로 레이싱 최적화',
        '부드러우면서도 폭발적인 반발력',
        '장거리 레이스에서 피로 저감',
      ],
      scienceExplanation:
        'Lightstrike Pro는 아디다스의 최상위 레이싱용 폼입니다. 기존 Boost의 뛰어난 에너지 리턴은 유지하면서 무게를 획기적으로 줄인 것이 핵심입니다. PEBA 계열의 슈퍼크리티컬 폼 기술을 적용하여 착지 시 에너지를 효율적으로 저장하고 이륙 시 되돌려줍니다. Adios Pro 4에 풀렝스로 적용되어 카본 로드 및 기하학적 구조와 함께 시스템으로 작동하며, 엘리트 마라토너의 기록 경신에 기여하고 있습니다.',
      performanceRating: 10,
      usedInShoes: ['adidas-adios-pro-4', 'adidas-adizero-evo-sl', 'adidas-boston-13', 'adidas-adizero-sl2'],
      characteristics: {
        cushioning: 9,
        responsiveness: 10,
        durability: 6,
        weight: 10,
      },
    },
    {
      id: 'lightstrike-2',
      name: 'Lightstrike 2.0',
      nameKo: '라이트스트라이크 2.0',
      category: 'midsole',
      year: 2023,
      description:
        '기존 EVA보다 가볍고 반응성이 개선된 트레이닝용 미드솔로, 아디제로 트레이닝 라인의 핵심 폼입니다.',
      benefits: [
        '기존 EVA 대비 가벼운 무게',
        '트레이닝에 적합한 안정적 반발력',
        '뛰어난 내구성으로 장기간 사용 가능',
        '빠른 페이스 훈련에 최적화',
      ],
      scienceExplanation:
        'Lightstrike 2.0은 기존 Lightstrike 폼을 업그레이드한 트레이닝용 미드솔입니다. 기존 EVA보다 가볍고 반응성이 개선되어 Boston 12/13의 핵심 폼으로 자리 잡았습니다. Lightstrike Pro보다 내구성이 뛰어나 매일 반복되는 훈련에도 성능이 오래 유지되며, 템포런이나 인터벌 같은 빠른 페이스 훈련에 적합한 균형 잡힌 성능을 제공합니다.',
      performanceRating: 8,
      usedInShoes: ['adidas-boston-13', 'adidas-adizero-sl2'],
      characteristics: {
        cushioning: 7,
        responsiveness: 8,
        durability: 9,
        weight: 8,
      },
    },
    {
      id: 'dreamstrike-plus',
      name: 'Dreamstrike+',
      nameKo: '드림스트라이크+',
      category: 'midsole',
      year: 2024,
      description:
        '슈퍼노바 라인의 핵심 폼으로, 매일 신어도 편안한 부드러운 쿠셔닝과 안정성을 동시에 제공합니다.',
      benefits: [
        '매일 신어도 부담 없는 부드러운 쿠셔닝',
        '조깅부터 리커버리 런까지 다목적 활용',
        '안정적인 라이드로 초보 러너에게 적합',
        '우수한 내구성으로 장기간 성능 유지',
      ],
      scienceExplanation:
        'Dreamstrike+는 기존 솔라글라이드(SolarGlide) 등을 대체하며 등장한 슈퍼노바(Supernova) 라인의 핵심 폼입니다. "매일 편안하게 신을 수 있는 쿠셔닝"을 목표로 개발되었으며, 부드러움과 안정성의 균형이 뛰어납니다. 레이싱 폼의 반발력보다는 착지 충격을 흡수하고 관절 부담을 줄이는 데 초점을 맞춰, 입문자부터 리커버리 목적의 상급자까지 폭넓게 사용됩니다.',
      performanceRating: 7,
      usedInShoes: ['adidas-supernova-rise-3', 'adidas-supernova-rise-2'],
      characteristics: {
        cushioning: 9,
        responsiveness: 6,
        durability: 9,
        weight: 7,
      },
    },
    {
      id: 'light-boost',
      name: 'Light Boost',
      nameKo: '라이트 부스트',
      category: 'midsole',
      year: 2023,
      description:
        '아디다스의 상징적인 Boost 기술을 30% 경량화한 차세대 폼으로, 부드러운 쿠셔닝과 에너지 리턴의 전통을 잇습니다.',
      benefits: [
        '일반 Boost 대비 약 30% 경량화',
        'Boost 특유의 부드러운 쿠셔닝 유지',
        '뛰어난 에너지 리턴으로 장거리에 적합',
        '추운 날씨에도 쿠셔닝 성능 유지',
      ],
      scienceExplanation:
        'Light Boost는 아디다스의 대표 기술인 Boost(TPU 폼)를 경량화한 진화형입니다. 울트라부스트 라이트(Ultraboost Light)부터 적용되었으며, 일반 Boost 대비 약 30% 가벼워진 것을 공식적으로 강조하고 있습니다. Boost의 핵심 장점인 온도에 관계없는 일관된 쿠셔닝 성능, 뛰어난 에너지 리턴, 부드러운 착지감은 그대로 유지하면서 무게 부담을 줄였습니다.',
      performanceRating: 8,
      usedInShoes: [],
      characteristics: {
        cushioning: 9,
        responsiveness: 7,
        durability: 8,
        weight: 8,
      },
    },
    {
      id: 'energyrods-carbon',
      name: 'Energyrods 2.0 (Carbon)',
      nameKo: '에너지로드 2.0 (카본)',
      category: 'plate',
      year: 2022,
      description:
        '발가락 뼈를 형상화한 5개의 카본 주입(Carbon-infused) 로드로, 극강의 탄성과 추진력을 제공하는 엘리트 레이싱용 추진 시스템입니다.',
      benefits: [
        '발가락 뼈 구조를 모방한 자연스러운 에너지 전달',
        '카본 주입 소재로 극강의 탄성 제공',
        '착지-이륙 전환 시 폭발적인 추진력',
        '고속 주행 시 에너지 손실 최소화',
      ],
      scienceExplanation:
        'Energyrods 2.0(카본 버전)은 아디다스의 독자적인 추진 기술입니다. 일반적인 풀렝스 카본 플레이트와 달리, 인간의 발가락 뼈(중족골) 구조를 형상화한 5개의 개별 로드로 구성됩니다. Adios Pro 4에서는 카본 주입(Carbon-infused) 소재를 사용하여 극강의 탄성을 제공하며, Lightstrike Pro 폼 사이에 배치되어 착지 시 에너지를 효율적으로 저장하고 이륙 시 폭발적인 추진력을 만들어냅니다.',
      performanceRating: 10,
      usedInShoes: ['adidas-adios-pro-4'],
      characteristics: {
        cushioning: 5,
        responsiveness: 10,
        durability: 8,
        weight: 9,
      },
    },
    {
      id: 'energyrods-glass',
      name: 'Energyrods 2.0 (Glass Fiber)',
      nameKo: '에너지로드 2.0 (유리섬유)',
      category: 'plate',
      year: 2023,
      description:
        '동일한 발가락 뼈 형상 설계에 유리섬유(Glass fiber) 소재를 적용하여, 카본 버전보다 유연한 추진력을 제공하는 트레이닝용 로드입니다.',
      benefits: [
        '카본 버전보다 유연한 추진력으로 다목적 활용',
        '빠른 훈련과 일상 러닝 모두 적합',
        '부드러운 전환으로 관절 부담 감소',
        '레이싱화 대비 넓은 페이스 범위에서 효과적',
      ],
      scienceExplanation:
        'Energyrods 2.0(유리섬유 버전)은 카본 버전과 동일한 발가락 뼈 형상 설계를 사용하지만, 소재를 유리섬유(Glass fiber)로 바꿔 상대적으로 유연한 추진력을 제공합니다. Boston 12/13에 적용되어 있으며, 카본 로드의 폭발적 추진력이 아닌 자연스러운 가이드와 효율적인 에너지 전달에 초점을 맞춥니다. 템포런, 인터벌, 장거리 훈련 등 다양한 페이스에서 효과적이어서 "만능 훈련화"의 핵심 요소입니다.',
      performanceRating: 8,
      usedInShoes: ['adidas-boston-13'],
      characteristics: {
        cushioning: 5,
        responsiveness: 8,
        durability: 9,
        weight: 8,
      },
    },
    {
      id: 'support-rods',
      name: 'Support Rods',
      nameKo: '서포트 로드',
      category: 'stability',
      year: 2024,
      description:
        '슈퍼노바 라인에서 과회내(오버프로네이션) 방지 및 주행 가이드를 위해 도입된 폼 기반 안정성 로드입니다.',
      benefits: [
        '과회내(오버프로네이션) 자연스럽게 교정',
        '카본화가 부담스러운 러너에게 안정적 가이드',
        '부드러운 교정으로 관절 스트레스 최소화',
        '평발이나 발목 안정성이 필요한 러너에 적합',
      ],
      scienceExplanation:
        'Support Rods는 슈퍼노바 라인에서 안정성을 위해 도입된 폼 기반 로드 기술입니다. 카본이나 유리섬유가 아닌 고밀도 폼 소재를 사용하여, 착지 시 발의 과도한 내전(프로네이션)을 부드럽게 가이드합니다. 카본 플레이트의 폭발적 추진이 아니라 안정적인 보행 경로를 유지하는 것이 목적이며, 평발 비율이 높은 한국 러너에게 특히 유용한 기술입니다.',
      performanceRating: 7,
      usedInShoes: ['adidas-supernova-rise-3', 'adidas-supernova-rise-2'],
      characteristics: {
        cushioning: 6,
        responsiveness: 5,
        durability: 9,
        weight: 7,
      },
    },
    {
      id: 'lightlock-upper',
      name: 'Lightlock Upper',
      nameKo: '라이트록 어퍼',
      category: 'upper',
      year: 2023,
      description:
        '초박형 메쉬로 고속 주행 시 발이 밀리지 않게 잠금(Lock)하는 경량 레이싱 어퍼 기술입니다.',
      benefits: [
        '고속 주행 시 발이 미끄러지지 않는 잠금 효과',
        '초박형 설계로 극한의 경량화',
        '전략적 통기 구멍으로 쾌적함 유지',
        '레이스 집중도를 높이는 안정적 핏',
      ],
      scienceExplanation:
        'Lightlock Upper는 Adios Pro 3에서 4로 넘어오며 강조된 레이싱 전용 어퍼 기술입니다. 초박형 메쉬 소재를 사용하여 고속 주행 시 발이 신발 안에서 밀리지 않도록 "잠금(Lock)"하는 기능에 초점을 맞췄습니다. 무게를 극한까지 줄이면서도 전략적으로 배치된 지지 구조와 통기 구멍으로 레이스 내내 쾌적함과 안정감을 유지합니다.',
      performanceRating: 9,
      usedInShoes: ['adidas-adios-pro-4'],
      characteristics: {
        cushioning: 4,
        responsiveness: 6,
        durability: 7,
        weight: 10,
      },
    },
    {
      id: 'primeknit-plus',
      name: 'Primeknit+',
      nameKo: '프라임니트+',
      category: 'upper',
      year: 2020,
      description:
        '아디다스의 상징적인 니트 어퍼 기술로, 양말 같은 착화감과 부위별 맞춤 지지력을 제공합니다.',
      benefits: [
        '양말처럼 발을 감싸는 편안한 착화감',
        '부위별 직조 밀도 조절로 맞춤 지지',
        '뛰어난 통기성으로 장거리에서도 쾌적',
        '이음새 최소화로 마찰 및 물집 방지',
      ],
      scienceExplanation:
        'Primeknit+는 아디다스의 상징적인 니트 어퍼 기술의 최신 버전입니다. 디지털 니팅으로 한 번에 짜여진 원피스 구조로 이음새가 거의 없어 마찰을 최소화합니다. 부위별로 직조 밀도를 다르게 설정하여 지지가 필요한 곳은 촘촘하게, 통기가 필요한 곳은 느슨하게 짜여집니다. 특히 데일리 러닝이나 장거리에서 양말 같은 편안함을 제공합니다.',
      performanceRating: 8,
      usedInShoes: [],
      characteristics: {
        cushioning: 6,
        responsiveness: 5,
        durability: 8,
        weight: 8,
      },
    },
    {
      id: 'continental-rubber',
      name: 'Continental™ Rubber',
      nameKo: '콘티넨탈 러버',
      category: 'outsole',
      year: 2013,
      description:
        '자동차 타이어 브랜드 콘티넨탈과 협업한 아웃솔로, 젖은 노면에서도 완벽한 접지력을 제공합니다.',
      benefits: [
        '젖은 노면에서도 미끄러지지 않는 강력한 그립',
        '자동차 타이어 기술 기반의 검증된 신뢰성',
        '뛰어난 내구성으로 장기간 성능 유지',
        '모델별 전면/부분 배치로 최적화',
      ],
      scienceExplanation:
        'Continental Rubber는 독일 프리미엄 타이어 브랜드 콘티넨탈(Continental AG)과의 파트너십으로 개발된 아웃솔 고무입니다. 자동차 타이어에 사용되는 고무 배합 기술을 러닝화에 적용하여, 특히 젖은 노면에서 일반 러닝화 고무 대비 월등한 접지력을 제공합니다. 모델에 따라 Toe-off(이착지 전환) 구역에만 부분 적용하거나 전면에 배치하는 등 차별화되어 있으며, 아디다스 러닝화의 신뢰도를 지탱하는 핵심 파트너십입니다.',
      performanceRating: 9,
      usedInShoes: [
        'adidas-supernova-rise-3',
        'adidas-supernova-rise-2',
        'adidas-boston-13',
        'adidas-adizero-evo-sl',
      ],
      characteristics: {
        cushioning: 5,
        responsiveness: 6,
        durability: 10,
        weight: 6,
      },
    },
    {
      id: 'lighttraxion',
      name: 'Lighttraxion',
      nameKo: '라이트트랙션',
      category: 'outsole',
      year: 2024,
      description:
        '무게를 줄이기 위해 접지 패턴을 최적화한 경량 아웃솔로, 빠른 페이스의 트레이닝에 최적화되었습니다.',
      benefits: [
        '최적화된 패턴으로 경량화 달성',
        '빠른 페이스에서도 충분한 접지력',
        '유연한 구조로 자연스러운 발 움직임 지원',
        '훈련용 러닝화의 무게 절감에 기여',
      ],
      scienceExplanation:
        'Lighttraxion은 Boston 13 등 아디제로 트레이닝 라인에서 무게를 줄이기 위해 접지 패턴을 최적화한 새로운 아웃솔입니다. 전통적인 풀커버 고무 대신 착지와 이착지 시 실제로 지면에 닿는 영역을 분석하여 필요한 곳에만 고무를 배치했습니다. 이를 통해 접지력은 유지하면서 불필요한 무게를 줄여, 빠른 페이스의 훈련에서 가벼운 발놀림을 가능하게 합니다.',
      performanceRating: 7,
      usedInShoes: ['adidas-adios-pro-4', 'adidas-boston-13', 'adidas-adizero-sl2'],
      characteristics: {
        cushioning: 4,
        responsiveness: 7,
        durability: 7,
        weight: 9,
      },
    },
    {
      id: 'adiwear',
      name: 'Adiwear',
      nameKo: '아디웨어',
      category: 'outsole',
      year: 2010,
      description:
        '높은 내마모성을 가진 아디다스의 표준 아웃솔 고무로, 입문자용 및 데일리 러닝화에 적용되어 뛰어난 내구성을 제공합니다.',
      benefits: [
        '쉽게 닳지 않는 강력한 내마모성',
        '입문자부터 데일리 러너까지 경제적',
        '안정적인 접지력',
        '장기간 사용에도 성능 유지',
      ],
      scienceExplanation:
        'Adiwear는 아디다스가 엔트리급 및 데일리 러닝화에 적용하는 고내마모성 고무 소재입니다. 콘티넨탈 러버보다 접지력은 다소 낮지만, 내구성을 최우선으로 설계되어 마모가 가장 빨리 일어나는 뒤꿈치와 전족부에 집중 배치됩니다. 주간 주행거리가 높은 러너나 예산을 고려하는 입문자에게 km당 비용을 낮춰주는 경제적인 기술입니다.',
      performanceRating: 6,
      usedInShoes: ['adidas-supernova-rise-3', 'adidas-supernova-rise-2', 'adidas-adizero-sl2'],
      characteristics: {
        cushioning: 4,
        responsiveness: 5,
        durability: 10,
        weight: 6,
      },
    },
  ],
};
