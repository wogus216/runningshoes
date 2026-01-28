import type { Brand } from '@/types/brand';

export const mizunoBrand: Brand = {
  id: 'mizuno',
  name: 'Mizuno',
  nameKo: '미즈노',
  tagline: 'Reach Beyond',
  description:
    '1906년 오사카에서 시작된 일본의 스포츠 전문 브랜드. 자연에서 영감받은 MIZUNO WAVE 구조로 쿠셔닝과 안정성을 동시에 제공하며, ENERZY 폼 라인업과 Smooth Speed Assist 지오메트리로 러닝화 기술을 진화시키고 있습니다.',
  founded: 1906,
  headquarters: '일본 오사카',
  website: 'https://www.mizuno.co.kr',
  technologies: [
    // ─── 미드솔 (Midsole) ───
    {
      id: 'enerzy-core',
      name: 'MIZUNO ENERZY CORE',
      nameKo: '에너지 코어',
      category: 'midsole',
      year: 2022,
      description:
        '미즈노 발표 기준 기존 소재 대비 293% 더 소프트하고 56% 더 높은 에너지 리턴을 제공하는 프리미엄 쿠셔닝 폼입니다.',
      benefits: [
        '미즈노 발표 기준 293% 더 부드러운 착지감',
        '56% 향상된 에너지 리턴(미즈노 자사 비교 기준)',
        '프리미엄 쿠셔닝 라인의 핵심 폼',
        '장거리에서도 꺼지지 않는 일관된 쿠셔닝',
      ],
      scienceExplanation:
        'MIZUNO ENERZY CORE는 미즈노의 프리미엄 미드솔 폼으로, 기존 소재 대비 293% 더 소프트하고 56% 더 높은 에너지 리턴을 제공한다고 미즈노가 공식 발표했습니다. Wave Rider, Wave Sky 등 미즈노의 핵심 쿠셔닝 라인에 적용되어 부드러운 착지감과 반발력의 균형을 구현합니다.',
      performanceRating: 9,
      usedInShoes: ['mizuno-wave-rider-29', 'mizuno-wave-sky-9'],
      characteristics: {
        cushioning: 10,
        responsiveness: 8,
        durability: 8,
        weight: 7,
      },
    },
    {
      id: 'enerzy-nxt',
      name: 'MIZUNO ENERZY NXT',
      nameKo: '에너지 NXT',
      category: 'midsole',
      year: 2023,
      description:
        '모델에 따라 질소 주입(Nitrogen Infused) 상부 레이어와 EVA 기반 하부 레이어를 조합하여 쿠셔닝과 안정성을 동시에 구현하는 차세대 폼입니다.',
      benefits: [
        '질소 주입 레이어로 부드러운 쿠셔닝과 에너지 출력',
        'EVA 기반 레이어로 안정성 보강',
        '2레이어 구조로 상반된 성능의 균형',
        'Neo Zen, Neo Vista 등 최신 라인의 핵심 기술',
      ],
      scienceExplanation:
        'MIZUNO ENERZY NXT는 미즈노의 차세대 폼으로, 모델에 따라 구성이 달라집니다. 미즈노 유럽 공식 페이지에 따르면, 상부 미드솔에는 질소 주입(Nitrogen Infused) ENERZY NXT를 배치하여 부드러운 쿠셔닝과 에너지 출력을 담당하고, 하부 미드솔에는 EVA 기반 ENERZY NXT를 배치하여 안정성을 보강하는 2레이어 구조를 사용합니다.',
      performanceRating: 9,
      usedInShoes: ['mizuno-wave-rider-29', 'mizuno-wave-inspire-21', 'mizuno-wave-sky-9', 'mizuno-wave-rebellion-flash-3', 'mizuno-wave-horizon-8'],
      characteristics: {
        cushioning: 9,
        responsiveness: 8,
        durability: 8,
        weight: 8,
      },
    },
    {
      id: 'enerzy-xp',
      name: 'MIZUNO ENERZY XP',
      nameKo: '에너지 XP',
      category: 'midsole',
      year: 2024,
      description:
        'PEBA 버전을 포함한 레이싱/스피드 지향 고반발 폼으로, 카본 플레이트와 조합하여 폭발적인 추진력을 제공합니다.',
      benefits: [
        'PEBA 버전으로 최고 수준의 에너지 리턴',
        '카본 플레이트와의 조합으로 폭발적 추진력',
        '레이싱에 최적화된 초경량 설계',
        '미즈노 스피드 라인의 최상위 폼',
      ],
      scienceExplanation:
        'MIZUNO ENERZY XP는 미즈노의 레이싱 지향 고반발 폼입니다. Hyperwarp Pure에서는 "MIZUNO ENERZY XP PEBA VERSION"이라고 공식 명시되어 있으며, PEBA(폴리에테르 블록 아마이드) 소재로 최고 수준의 에너지 리턴을 구현합니다. Smooth Speed Plate(카본)와 조합하여 엘리트 레이싱에 필요한 폭발적 추진력을 제공합니다.',
      performanceRating: 10,
      usedInShoes: ['mizuno-wave-rebellion-flash-3'],
      characteristics: {
        cushioning: 7,
        responsiveness: 10,
        durability: 6,
        weight: 10,
      },
    },
    {
      id: 'enerzy-lite',
      name: 'MIZUNO ENERZY LITE',
      nameKo: '에너지 라이트',
      category: 'midsole',
      year: 2022,
      description:
        '경량화에 초점을 맞춘 스피드 지향 폼으로, 가벼우면서도 충분한 반응성을 제공합니다.',
      benefits: [
        '극한의 경량화로 스피드 러닝 최적화',
        '가벼우면서도 충분한 반발력 제공',
        '레이싱과 스피드 트레이닝에 적합',
        'ENERZY 계열 중 가장 가벼운 무게',
      ],
      scienceExplanation:
        'MIZUNO ENERZY LITE는 경량화에 초점을 맞춘 미즈노의 스피드 폼입니다. Wave Rebellion Pro 계열 등 레이싱 라인에 적용되며, ENERZY 계열 중 가장 가벼운 무게로 스피드 러닝에 최적화되어 있습니다. 무게를 최소화하면서도 착지 시 충분한 반응성을 유지하는 것이 특징입니다.',
      performanceRating: 8,
      usedInShoes: ['mizuno-wave-rebellion-flash-2'],
      characteristics: {
        cushioning: 6,
        responsiveness: 9,
        durability: 7,
        weight: 10,
      },
    },
    {
      id: 'enerzy',
      name: 'MIZUNO ENERZY',
      nameKo: '에너지',
      category: 'midsole',
      year: 2020,
      description:
        '부드러움, 반발(리바운드), 내구성을 함께 추구하는 미즈노의 기본 미드솔 폼으로, 폭넓은 라인업에 적용됩니다.',
      benefits: [
        '부드러움과 반발력의 균형',
        '뛰어난 내구성으로 장기간 사용 가능',
        '데일리 러닝에 최적화된 편안함',
        '미즈노 전 라인업의 기반 기술',
      ],
      scienceExplanation:
        'MIZUNO ENERZY는 미즈노의 기본 미드솔 폼으로, 부드러움·반발(리바운드)·내구성을 함께 추구합니다. Neo Vista 2, Neo Zen 등 최신 모델부터 Wave Inspire, Wave Horizon 등 안정화 라인까지 폭넓게 적용되어 미즈노 러닝화의 기반 기술로 자리 잡았습니다.',
      performanceRating: 7,
      usedInShoes: ['mizuno-wave-rider-29', 'mizuno-wave-inspire-21', 'mizuno-wave-rebellion-flash-2', 'mizuno-wave-horizon-8'],
      characteristics: {
        cushioning: 8,
        responsiveness: 7,
        durability: 9,
        weight: 7,
      },
    },

    // ─── 플레이트/구조 (Plate) ───
    {
      id: 'mizuno-wave',
      name: 'MIZUNO WAVE',
      nameKo: '미즈노 웨이브',
      category: 'plate',
      year: 1997,
      description:
        '자연의 파도에서 영감받은 미드솔 내 웨이브 형태 플레이트로, 한 구조에서 쿠셔닝과 안정성을 동시에 제공하는 미즈노의 시그니처 기술입니다.',
      benefits: [
        '하나의 구조로 쿠셔닝과 안정성 동시 제공',
        '전방 추진과 부드러운 체중 이동 지원',
        '1997년부터 이어온 27년 역사의 검증된 기술',
        '모델별로 Parallel/Fan-shaped 등 형태 변형 적용',
      ],
      scienceExplanation:
        'MIZUNO WAVE는 1997년에 소개된 미즈노의 시그니처 기술로, 미드솔 내부에 파도(Wave) 형태의 플레이트를 배치합니다. 이 구조가 착지 충격을 분산시켜 쿠셔닝을 제공하면서, 동시에 좌우 흔들림을 억제하여 안정성도 확보합니다. 모델에 따라 Parallel(평행), Fan-shaped(부채꼴) 등 다양한 형태로 변형 적용되며, Wave Rider, Wave Inspire 등 미즈노 대부분의 러닝화에 적용됩니다.',
      performanceRating: 9,
      usedInShoes: ['mizuno-wave-rider-29', 'mizuno-wave-inspire-21', 'mizuno-wave-sky-9', 'mizuno-wave-rebellion-flash-2', 'mizuno-wave-horizon-8'],
      characteristics: {
        cushioning: 8,
        responsiveness: 7,
        durability: 10,
        weight: 7,
      },
    },
    {
      id: 'smooth-speed-plate',
      name: 'Smooth Speed Plate',
      nameKo: '스무스 스피드 플레이트',
      category: 'plate',
      year: 2023,
      description:
        '모델에 따라 유리섬유 인퓨즈드 웨이브 플레이트(Neo Vista)부터 3D 풀 카본 플레이트(Hyperwarp)까지, 용도별로 최적화된 미즈노의 스피드 플레이트 플랫폼입니다.',
      benefits: [
        '모델별 최적화된 플레이트 소재 적용',
        'Neo Vista: 유리섬유 웨이브 플레이트로 안정적 추진',
        'Hyperwarp: 3D 풀 카본 플레이트로 폭발적 추진',
        '효율적인 에너지 전환으로 스피드 극대화',
      ],
      scienceExplanation:
        'Smooth Speed Plate(SSP)는 미즈노의 스피드 플레이트 플랫폼 명칭으로, 같은 이름이지만 모델에 따라 소재와 형상이 다릅니다. Neo Vista 2에서는 "유리섬유 인퓨즈드 웨이브 플레이트(glass-fibre infused wave plate)"로, Hyperwarp Pure에서는 "3D 풀 카본 플레이트"로 공식 표기됩니다. 공통적으로 착지 에너지를 효율적으로 전환하여 전방 추진력을 극대화하는 역할을 합니다.',
      performanceRating: 9,
      usedInShoes: ['mizuno-wave-rebellion-flash-2', 'mizuno-wave-rebellion-flash-3'],
      characteristics: {
        cushioning: 5,
        responsiveness: 10,
        durability: 7,
        weight: 9,
      },
    },

    // ─── 안정화 (Stability) ───
    {
      id: 'smooth-speed-assist',
      name: 'Smooth Speed Assist',
      nameKo: '스무스 스피드 어시스트',
      category: 'stability',
      year: 2023,
      description:
        '레이싱에서 가져온 효율적인 러닝 폼(자세/전이)을 돕는 지오메트리로, 훈련 시 부담을 줄이고 부드러운 전환을 유도합니다.',
      benefits: [
        '레이싱 기술에서 파생된 효율적인 보폭 유도',
        '착지에서 이륙까지 부드러운 전환',
        '훈련 시 다리 부담 감소',
        'Neo Zen, Neo Vista 등 최신 라인에 적용',
      ],
      scienceExplanation:
        'Smooth Speed Assist는 미즈노의 레이싱 기술에서 파생된 지오메트리 컨셉입니다. 미드솔의 형상과 구조를 최적화하여 착지에서 이륙까지의 전환(Transition)을 부드럽게 만들고, 러너가 효율적인 러닝 폼을 유지하도록 돕습니다. Neo Zen, Neo Vista 2 등 미즈노의 최신 라인에서 핵심 기술로 적용됩니다.',
      performanceRating: 8,
      usedInShoes: ['mizuno-wave-rebellion-flash-2', 'mizuno-wave-rebellion-flash-3'],
      characteristics: {
        cushioning: 6,
        responsiveness: 8,
        durability: 8,
        weight: 8,
      },
    },

    // ─── 아웃솔 (Outsole) ───
    {
      id: 'x10',
      name: 'X10',
      nameKo: 'X10',
      category: 'outsole',
      year: 2015,
      description:
        '고충격 구간에서 뛰어난 내구성을 발휘하는 카본 러버 아웃솔로, 힐 스트라이크에서 안정적인 접지력을 제공합니다.',
      benefits: [
        '카본 러버로 뛰어난 내구성',
        '힐 스트라이크 구간에서 안정적 접지력',
        '고충격 부위에 전략적 배치',
        '데일리 러닝에 충분한 수명',
      ],
      scienceExplanation:
        'X10은 미즈노의 표준 카본 러버 아웃솔입니다. 고충격 구간, 특히 힐 스트라이크 부위에서 뛰어난 내구성과 접지력을 제공합니다. Wave Rider, Neo Vista 2 등 미즈노의 로드 러닝 라인업에 폭넓게 적용되어 데일리 러닝에 충분한 수명을 보장합니다.',
      performanceRating: 7,
      usedInShoes: ['mizuno-wave-rider-29', 'mizuno-wave-inspire-21', 'mizuno-wave-sky-9', 'mizuno-wave-horizon-8'],
      characteristics: {
        cushioning: 4,
        responsiveness: 5,
        durability: 9,
        weight: 7,
      },
    },
    {
      id: 'g3-outsole',
      name: 'G3 Outsole',
      nameKo: 'G3 아웃솔',
      category: 'outsole',
      year: 2022,
      description:
        'PU 레진 기반의 경량 아웃솔로, 레이싱 시 뛰어난 그립력을 제공하면서도 무게를 최소화합니다.',
      benefits: [
        'PU 레진 소재로 극한의 경량화',
        '레이싱에 최적화된 그립 성능',
        '고속 주행에서 미끄러짐 방지',
        '스피드 라인 전용 설계',
      ],
      scienceExplanation:
        'G3 Outsole은 PU(폴리우레탄) 레진 기반의 미즈노 레이싱 전용 아웃솔입니다. 일반 러버보다 가벼우면서도 고속 주행에서 필요한 접지력을 확보합니다. Wave Rebellion Pro 2, Hyperwarp Pure 등 미즈노의 스피드/레이싱 라인에 적용되어 레이스 당일 최고의 퍼포먼스를 지원합니다.',
      performanceRating: 8,
      usedInShoes: ['mizuno-wave-rebellion-flash-2', 'mizuno-wave-rebellion-flash-3'],
      characteristics: {
        cushioning: 3,
        responsiveness: 7,
        durability: 6,
        weight: 9,
      },
    },
  ],
};
