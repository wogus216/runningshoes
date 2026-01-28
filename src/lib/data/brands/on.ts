import type { Brand } from '@/types/brand';

export const onBrand: Brand = {
  id: 'on',
  name: 'On',
  nameKo: '온',
  tagline: 'Run On Clouds',
  description:
    '2010년 스위스 취리히에서 시작된 혁신적인 러닝 브랜드. CloudTec® 구조와 Speedboard® 추진 플랫폼, 그리고 Helion™ 슈퍼폼으로 "구름 위를 달리는" 독자적 러닝 경험을 제공하며, LightSpray™ 등 제조 혁신으로 러닝화의 미래를 개척하고 있습니다.',
  founded: 2010,
  headquarters: '스위스 취리히',
  website: 'https://www.on-running.com/ko-kr',
  technologies: [
    // ─── 미드솔/구조 (Midsole) ───
    {
      id: 'cloudtec',
      name: 'CloudTec®',
      nameKo: '클라우드텍',
      category: 'midsole',
      year: 2010,
      description:
        'On의 시그니처 쿠셔닝 시스템으로, Cloud 요소가 충격을 흡수하고 러닝 스타일에 적응하여 구름 위를 달리는 듯한 착지감을 제공합니다.',
      benefits: [
        'Cloud 요소가 개별적으로 충격을 흡수',
        '러닝 스타일에 적응하는 반응형 쿠셔닝',
        '착지는 부드럽게, 이륙은 단단하게',
        'On 전 러닝 라인업의 기반 기술',
      ],
      scienceExplanation:
        'CloudTec®는 On의 시그니처 쿠셔닝 시스템으로, 미드솔에 배치된 Cloud 요소(빈 공간이 있는 관 형태의 구조)가 착지 시 개별적으로 압축되며 충격을 흡수합니다. 같은 CloudTec이라도 내부에 채워지는 폼(Helion, Zero-Gravity 등)에 따라 착지감이 달라지며, On 전 러닝 라인업에 적용되는 핵심 구조입니다.',
      performanceRating: 9,
      usedInShoes: ['on-cloudsurfer-2', 'on-cloudrunner-2', 'on-cloudmonster-2', 'on-cloudmonster-hyper', 'on-cloudflow-5'],
      characteristics: {
        cushioning: 9,
        responsiveness: 7,
        durability: 8,
        weight: 8,
      },
    },
    {
      id: 'cloudtec-phase',
      name: 'CloudTec Phase™',
      nameKo: '클라우드텍 페이즈',
      category: 'midsole',
      year: 2023,
      description:
        'FEA(유한요소해석)로 설계된 순차 압축(Sequentially Collapsing) 미드솔로, 힐에서 토까지의 전환을 더 부드럽게 만드는 차세대 CloudTec입니다.',
      benefits: [
        'FEA(유한요소해석) 기반 컴퓨터 최적화 설계',
        '순차 압축 구조로 부드러운 힐-토 롤스루',
        '이중 구조로 착지 안정성과 전환 효율성 동시 확보',
        '프리미엄 쿠셔닝 라인의 핵심 혁신',
      ],
      scienceExplanation:
        'CloudTec Phase™는 FEA(유한요소해석)로 설계된 차세대 CloudTec 시스템입니다. On 공식 설명에 따르면, 미드솔이 "순차적으로 압축(Sequentially Collapsing)"되어 힐에서 토까지의 전환을 더 부드럽게 만듭니다. Cloudeclipse에서 이중 구조 CloudTec Phase가 적용되어 착지 시 순차적으로 압축되며 자연스러운 롤스루를 유도합니다.',
      performanceRating: 9,
      usedInShoes: ['on-cloudsurfer-2'],
      characteristics: {
        cushioning: 10,
        responsiveness: 8,
        durability: 8,
        weight: 7,
      },
    },
    {
      id: 'helion',
      name: 'Helion™',
      nameKo: '헬리온',
      category: 'midsole',
      year: 2019,
      description:
        'On이 자체 개발한 스위스 엔지니어링 슈퍼폼으로, CloudTec 구조 내부에 채워져 부드러운 러닝 감각과 성능을 제공합니다.',
      benefits: [
        '스위스 엔지니어링 자체 개발 슈퍼폼',
        '부드러운 착지감과 반발력의 균형',
        'CloudTec 구조와 결합하여 성능 극대화',
        'On 러닝 라인업의 핵심 폼 소재',
      ],
      scienceExplanation:
        'Helion™은 On이 "스위스 엔지니어링 슈퍼폼(Swiss-engineered superfoam)"으로 부르는 자체 개발 미드솔 소재입니다. CloudTec 구조 내부에 채워져 착지 시 부드러운 쿠셔닝을 제공하면서도 이륙 시 에너지를 효율적으로 반환합니다. Cloudsurfer, Cloudrunner, Cloudmonster 등 On의 주요 러닝 모델에 폭넓게 적용됩니다.',
      performanceRating: 8,
      usedInShoes: ['on-cloudsurfer-2', 'on-cloudrunner-2', 'on-cloudmonster-2', 'on-cloudmonster-hyper', 'on-cloudflow-5'],
      characteristics: {
        cushioning: 8,
        responsiveness: 8,
        durability: 8,
        weight: 8,
      },
    },
    {
      id: 'helion-hf',
      name: 'Helion™ HF',
      nameKo: '헬리온 HF',
      category: 'midsole',
      year: 2023,
      description:
        'Cloudboom 레이싱 라인을 위한 하이퍼 폼(Hyper Foam)으로, 기존 Helion 대비 에너지 리턴과 착지 부드러움이 대폭 강화되었습니다.',
      benefits: [
        '레이싱에 최적화된 하이퍼 폼',
        '기존 Helion 대비 대폭 향상된 에너지 리턴',
        '2레이어 구조로 쿠셔닝과 반응성의 극대화',
        '카본 Speedboard와 조합하여 폭발적 추진력',
      ],
      scienceExplanation:
        'Helion™ HF(Hyper Foam)는 On의 Cloudboom 레이싱 라인을 위해 개발된 고성능 폼입니다. 기존 Helion 대비 에너지 리턴과 착지 부드러움이 대폭 강화되었으며, Cloudboom Strike LS에서는 Helion HF 2레이어 + 카본 Speedboard 조합으로 적용되어 엘리트 레이싱에 필요한 폭발적 추진력을 제공합니다.',
      performanceRating: 10,
      usedInShoes: ['on-cloudsurfer-2', 'on-cloudmonster-2', 'on-cloudmonster-hyper', 'on-cloudflow-5', 'on-cloudboom-strike'],
      characteristics: {
        cushioning: 8,
        responsiveness: 10,
        durability: 6,
        weight: 10,
      },
    },

    // ─── 플레이트/추진 (Plate) ───
    {
      id: 'speedboard',
      name: 'Speedboard®',
      nameKo: '스피드보드',
      category: 'plate',
      year: 2010,
      description:
        '운동 에너지를 속도로 변환하는 On의 추진 보드 플랫폼으로, 모델에 따라 소재·형상·두께·곡률이 모두 달라집니다.',
      benefits: [
        '착지 에너지를 전방 추진력으로 변환',
        '모델별 소재/형상/곡률 최적화',
        '레이싱: 카본 Speedboard로 폭발적 추진',
        '데일리: TPU/나일론 Speedboard로 유연한 추진',
      ],
      scienceExplanation:
        'Speedboard®는 On의 추진 보드 플랫폼으로, 착지 시 저장된 운동 에너지를 이륙 시 속도로 변환합니다. On이 공식적으로 "소재, 형상, 두께, 곡률이 모델별로 달라진다"고 명시하며, Cloudboom Strike에서는 "스푼 형태의 100% 카본 Speedboard"가 적용되어 레이싱에 최적화된 추진력을 제공합니다.',
      performanceRating: 9,
      usedInShoes: ['on-cloudsurfer-2', 'on-cloudrunner-2', 'on-cloudmonster-2', 'on-cloudmonster-hyper', 'on-cloudflow-5', 'on-cloudboom-strike'],
      characteristics: {
        cushioning: 5,
        responsiveness: 9,
        durability: 9,
        weight: 8,
      },
    },

    // ─── 어퍼 (Upper) ───
    {
      id: 'lightspray',
      name: 'LightSpray™',
      nameKo: '라이트스프레이',
      category: 'upper',
      year: 2024,
      description:
        '약 30g의 초경량 어퍼를 구현하는 혁신적 제조 방식으로, 끈 없는 구조와 두 번째 피부 같은 핏을 제공합니다.',
      benefits: [
        '약 30g의 역대 가장 가벼운 어퍼',
        '끈 없는 구조로 균일한 압력 분배',
        '두 번째 피부 같은 밀착 핏',
        '레이싱 무게 절감에 결정적 역할',
      ],
      scienceExplanation:
        'LightSpray™는 On의 혁신적 어퍼 제조 방식으로, "가장 가벼운 어퍼(약 30g)"를 구현합니다. 전통적인 재봉이나 접착 대신 특수 소재를 스프레이하여 형성하는 방식으로, 끈 없는 구조와 두 번째 피부 같은 핏을 제공합니다. Cloudboom Strike LS에 적용되어 Helion HF + 카본 Speedboard와 조합됩니다.',
      performanceRating: 9,
      usedInShoes: [],
      characteristics: {
        cushioning: 5,
        responsiveness: 6,
        durability: 7,
        weight: 10,
      },
    },

    // ─── 아웃솔 (Outsole) ───
    {
      id: 'missiongrip',
      name: 'Missiongrip™',
      nameKo: '미션그립',
      category: 'outsole',
      year: 2020,
      description:
        '스위스 알프스에서 개발된 트레일 전용 아웃솔로, 특수 그립 러버 컴파운드와 향상된 트랙션 패턴으로 오프로드에서 뛰어난 컨트롤을 제공합니다.',
      benefits: [
        '스위스 알프스에서 개발·테스트된 트레일 전용 설계',
        '특수 그립 러버 컴파운드로 강력한 접지력',
        '향상된 트랙션 패턴으로 다양한 지형 대응',
        '험로에서도 안정적인 컨트롤',
      ],
      scienceExplanation:
        'Missiongrip™은 스위스 알프스에서 개발·테스트된 On의 트레일 전용 아웃솔입니다. 특수 그립 러버 컴파운드와 향상된 트랙션 패턴으로 젖은 바위, 진흙, 뿌리 등 다양한 오프로드 조건에서 뛰어난 접지력과 컨트롤을 제공합니다. Zero-Gravity 폼과 조합하여 On의 트레일 라인업을 구성합니다.',
      performanceRating: 8,
      usedInShoes: [],
      characteristics: {
        cushioning: 3,
        responsiveness: 6,
        durability: 8,
        weight: 7,
      },
    },
  ],
};
