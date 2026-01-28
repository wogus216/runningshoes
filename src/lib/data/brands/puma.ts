import type { Brand } from '@/types/brand';

export const pumaBrand: Brand = {
  id: 'puma',
  name: 'Puma',
  nameKo: '푸마',
  tagline: 'Forever Faster',
  description:
    '1948년 독일 헤르초게나우라흐에서 시작된 스포츠 브랜드. 질소 주입·초임계 발포 공정의 NITROFOAM 폼 라인업과 PWRPLATE 카본 플레이트, 그리고 PUMAGRIP 아웃솔로 가볍고 반발력 좋은 러닝화를 제공합니다.',
  founded: 1948,
  headquarters: '독일 헤르초게나우라흐',
  website: 'https://kr.puma.com',
  technologies: [
    // ─── 미드솔 (Midsole) ───
    {
      id: 'nitrofoam-elite',
      name: 'NITROFOAM Elite',
      nameKo: '나이트로폼 엘리트',
      category: 'midsole',
      year: 2023,
      description:
        '프리미엄 원료에 질소 주입 공정을 적용한 푸마의 최상위 폼으로, 레이스데이 최대 에너지 리턴을 목표로 설계되었습니다.',
      benefits: [
        '프리미엄 원료 + 질소 주입으로 최대 에너지 리턴',
        '레이스데이에 최적화된 최상위 폼',
        '극한의 경량화와 높은 반발력',
        'PWRPLATE와 조합하여 폭발적 추진력',
      ],
      scienceExplanation:
        'NITROFOAM Elite는 푸마의 레이싱 라인을 위한 최상위 폼입니다. 프리미엄 원료에 질소 주입(nitrogen-injected) 공정을 적용하여 최대 에너지 리턴을 구현합니다. Fast-R NITRO Elite 3, Deviate NITRO Elite Trail 등 엘리트 레이싱 모델에 적용되어 PWRPLATE 카본 플레이트와 조합하여 폭발적 추진력을 제공합니다.',
      performanceRating: 10,
      usedInShoes: ['puma-fast-r-nitro-elite-3', 'puma-deviate-nitro-elite-3'],
      characteristics: {
        cushioning: 8,
        responsiveness: 10,
        durability: 7,
        weight: 10,
      },
    },
    {
      id: 'nitrofoam',
      name: 'NITROFOAM',
      nameKo: '나이트로폼',
      category: 'midsole',
      year: 2021,
      description:
        '질소 주입(nitrogen-injected) + 초임계(supercritical) 발포 공정으로 폼 내부에 기포를 만들어 반발력과 응답성을 끌어올린 푸마의 핵심 미드솔 폼입니다.',
      benefits: [
        '질소 주입 + 초임계 공정으로 향상된 반발력',
        '미세 기포 구조로 경량화와 쿠셔닝 동시 확보',
        '모델별 듀얼 레이어/듀얼 밀도 구성 가능',
        'NITRO 러닝 라인업 전체의 기반 기술',
      ],
      scienceExplanation:
        'NITROFOAM은 푸마의 핵심 미드솔 폼으로, 질소 주입(nitrogen-injected)과 초임계(supercritical) 발포 공정을 사용합니다. 이 공정은 폼 내부에 균일한 미세 기포를 생성하여 무게는 줄이고 반발력과 응답성을 높입니다. Velocity NITRO 4, Deviate NITRO 4 등 푸마 NITRO 러닝 라인업 전체에 적용되는 기반 기술입니다.',
      performanceRating: 8,
      usedInShoes: ['puma-velocity-nitro-4', 'puma-magmax-nitro-2', 'puma-magnify-nitro-3', 'puma-deviate-nitro-4', 'puma-deviate-nitro-3'],
      characteristics: {
        cushioning: 8,
        responsiveness: 8,
        durability: 8,
        weight: 8,
      },
    },
    {
      id: 'profoam',
      name: 'PROFOAM',
      nameKo: '프로폼',
      category: 'midsole',
      year: 2019,
      description:
        '고성능 EVA 기반 폼으로 착지 쿠셔닝과 다음 스텝 추진을 제공하며, LITE 버전은 33% 더 가벼운 경량화를 실현합니다.',
      benefits: [
        '고성능 EVA 기반으로 안정적인 쿠셔닝',
        '착지 흡수와 다음 스텝 추진의 균형',
        'LITE 버전은 33% 경량화(푸마 공식 수치)',
        '입문~트레이닝 라인에 폭넓게 적용',
      ],
      scienceExplanation:
        'PROFOAM은 푸마의 고성능 EVA 기반 미드솔 폼으로, 착지 쿠셔닝과 다음 스텝 추진을 동시에 제공합니다. PROFOAMLITE 버전은 33% 더 가볍다고 푸마가 공식 발표했습니다. NITRO 라인보다 상대적으로 입문자와 다목적 트레이닝에 적합한 포지셔닝입니다.',
      performanceRating: 7,
      usedInShoes: [],
      characteristics: {
        cushioning: 7,
        responsiveness: 6,
        durability: 8,
        weight: 7,
      },
    },

    // ─── 플레이트 (Plate) ───
    {
      id: 'pwrplate',
      name: 'PWRPLATE',
      nameKo: 'PWRPLATE',
      category: 'plate',
      year: 2022,
      description:
        '미드솔 안정화와 에너지 전달 극대화를 목표로 설계된 푸마의 카본 플레이트 기술로, 모델에 따라 연장형·카본 합성 등 사양이 달라집니다.',
      benefits: [
        '카본 플레이트로 에너지 전달 극대화',
        '미드솔 안정화로 효율적인 보폭 유도',
        '모델별 연장형/카본 합성 등 사양 최적화',
        'NITROFOAM과 조합하여 추진력 극대화',
      ],
      scienceExplanation:
        'PWRPLATE는 푸마의 카본 플레이트 기술로, 기존 INNOPLATE의 진화 버전입니다. 미드솔 안정화와 에너지 전달(transfer) 극대화를 목표로 설계되었으며, 모델에 따라 연장형(extended), 카본 합성(composite) 등 사양이 달라집니다. Fast-R NITRO Elite 3, Deviate NITRO 4 등 스피드/레이싱 라인에 적용됩니다.',
      performanceRating: 9,
      usedInShoes: ['puma-magmax-nitro-2', 'puma-deviate-nitro-4', 'puma-deviate-nitro-3', 'puma-deviate-nitro-elite-3', 'puma-fast-r-nitro-elite-3'],
      characteristics: {
        cushioning: 5,
        responsiveness: 10,
        durability: 8,
        weight: 9,
      },
    },

    // ─── 안정화 (Stability) ───
    {
      id: 'runguide',
      name: 'RUNGUIDE',
      nameKo: '런가이드',
      category: 'stability',
      year: 2022,
      description:
        '단단한 밀도의 림(Firm Density Rim)으로 발을 중앙에 정렬하여 안정적인 보폭을 유도하는 푸마의 안정화 기술입니다.',
      benefits: [
        '단단한 밀도 림으로 발 중앙 정렬',
        '과회내 경향 러너에게 안정적인 보폭 유도',
        '쿠셔닝을 희생하지 않는 안정화',
        'ForeverRun 등 안정화 라인의 핵심 기술',
      ],
      scienceExplanation:
        'RUNGUIDE는 푸마의 안정화 기술로, 미드솔 주변에 단단한 밀도의 림(Firm Density Rim)을 배치하여 발을 중앙에 정렬(alignment)합니다. 과도한 회내(프로네이션)를 억제하면서도 쿠셔닝을 유지하는 것이 특징이며, ForeverRun NITRO 2 등 안정화 라인에서 핵심 역할을 합니다.',
      performanceRating: 8,
      usedInShoes: [],
      characteristics: {
        cushioning: 7,
        responsiveness: 6,
        durability: 9,
        weight: 7,
      },
    },

    // ─── 어퍼 (Upper) ───
    {
      id: 'ultraweave',
      name: 'ULTRAWEAVE',
      nameKo: '울트라위브',
      category: 'upper',
      year: 2023,
      description:
        '엘리트 퍼포먼스를 위한 초경량 엔지니어드 패브릭으로, 고정밀 직조와 4-way 스트레치로 무게와 마찰을 최소화합니다.',
      benefits: [
        '초경량 엔지니어드 패브릭으로 무게 최소화',
        '고정밀 직조 + 4-way 스트레치',
        '마찰 감소로 쾌적한 착용감',
        '엘리트 레이싱에 최적화된 어퍼',
      ],
      scienceExplanation:
        'ULTRAWEAVE는 푸마의 엘리트 퍼포먼스용 초경량 어퍼 패브릭입니다. 고정밀 직조와 4-way 스트레치를 결합하여 무게와 마찰을 최소화하면서도 발을 안정적으로 감쌉니다. Fast-R NITRO Elite 3, Deviate NITRO Elite Trail 등 레이싱 라인에 적용됩니다.',
      performanceRating: 9,
      usedInShoes: ['puma-fast-r-nitro-elite-3', 'puma-deviate-nitro-elite-3'],
      characteristics: {
        cushioning: 5,
        responsiveness: 6,
        durability: 7,
        weight: 10,
      },
    },

    // ─── 아웃솔 (Outsole) ───
    {
      id: 'pumagrip',
      name: 'PUMAGRIP',
      nameKo: '푸마그립',
      category: 'outsole',
      year: 2021,
      description:
        '내구성(경도)과 그립(연성)의 균형을 잡은 퍼포먼스 러버 컴파운드로, 젖은 지면에 최적화된 올-서피스 접지력을 제공합니다.',
      benefits: [
        '내구성과 그립의 균형 잡힌 러버 컴파운드',
        '젖은 지면에 최적화된 접지력(푸마 공식 강조)',
        '다양한 노면에서 안정적인 올-서피스 트랙션',
        'NITRO 러닝 라인업 전반에 적용',
      ],
      scienceExplanation:
        'PUMAGRIP은 푸마의 퍼포먼스 러버 컴파운드 아웃솔입니다. 내구성(경도)과 그립(연성)의 균형을 강조하며, 특히 젖은 지면(wet grounds)에 최적화되었다고 푸마 공식 글로서리에 명시되어 있습니다. LT(경량) 버전은 레이싱용, ATR 버전은 트레일용으로 세분화됩니다.',
      performanceRating: 7,
      usedInShoes: ['puma-velocity-nitro-4', 'puma-magmax-nitro-2', 'puma-magnify-nitro-3', 'puma-deviate-nitro-4', 'puma-deviate-nitro-3', 'puma-deviate-nitro-elite-3', 'puma-fast-r-nitro-elite-3'],
      characteristics: {
        cushioning: 4,
        responsiveness: 5,
        durability: 8,
        weight: 7,
      },
    },
  ],
};
