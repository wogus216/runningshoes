import type { Brand } from '@/types/brand';

export const hokaBrand: Brand = {
  id: 'hoka',
  name: 'Hoka',
  nameKo: '호카',
  tagline: 'Time To Fly',
  description:
    '2009년 프랑스 앙시에서 시작된 맥시멀 쿠셔닝의 선구자. MetaRocker™ 지오메트리와 Active Foot Frame™으로 두꺼운 미드솔에서도 자연스러운 롤링과 안정성을 동시에 제공하며, PROFLY™ 듀얼 밀도 구조와 Supercritical EVA 등 혁신적 폼 기술로 러닝화 시장을 재정의하고 있습니다.',
  founded: 2009,
  headquarters: '프랑스 앙시',
  website: 'https://www.hoka.com/ko',
  technologies: [
    // ─── 코어 DNA (Core) ───
    {
      id: 'metarocker',
      name: 'MetaRocker™',
      nameKo: '메타로커',
      category: 'midsole',
      year: 2009,
      description:
        '지면과의 전환을 매끄럽게 유도하는 흔들의자 형태의 지오메트리로, 호카의 모든 러닝화에 적용되는 시그니처 기술입니다.',
      benefits: [
        '착지부터 이륙까지 자연스러운 롤링 전환',
        '에너지 손실을 줄이는 효율적인 보폭',
        '관절 부담을 줄이는 부드러운 전환',
        '호카 전 모델 공통 적용',
      ],
      scienceExplanation:
        'MetaRocker™는 호카의 창립 철학이 담긴 핵심 지오메트리입니다. 미드솔의 앞뒤를 흔들의자(Rocker)처럼 둥글게 깎아 착지 시 자연스럽게 앞으로 굴러가는 전환을 유도합니다. 두꺼운 미드솔에도 불구하고 무겁지 않은 느낌을 주는 비결이며, 착지-중족부-이륙의 전환 과정에서 에너지 손실을 최소화하여 효율적인 보폭을 만들어냅니다.',
      performanceRating: 9,
      usedInShoes: ['hoka-clifton-10', 'hoka-bondi-9', 'hoka-mach-6', 'hoka-arahi-8', 'hoka-gaviota-6', 'hoka-mach-x-3', 'hoka-rocket-x-3'],
      characteristics: {
        cushioning: 8,
        responsiveness: 7,
        durability: 9,
        weight: 8,
      },
    },
    {
      id: 'active-foot-frame',
      name: 'Active Foot Frame™',
      nameKo: '액티브 풋 프레임',
      category: 'stability',
      year: 2015,
      description:
        '발이 미드솔 안으로 깊게 안착되어 지지력을 높이는 컵 형태 구조로, 높은 스택에서도 안정성을 보장합니다.',
      benefits: [
        '발이 미드솔 안에 깊이 안착되는 안정감',
        '높은 스택 높이에서도 흔들림 방지',
        '별도의 안정화 장치 없이도 자연스러운 지지',
        '호카 전 모델 공통 적용',
      ],
      scienceExplanation:
        'Active Foot Frame™은 호카의 두꺼운 미드솔에서 안정성을 확보하는 핵심 구조입니다. 미드솔의 양쪽 벽을 높여 발이 플랫폼 "안으로" 깊게 안착되는 컵(Cup) 형태를 만듭니다. 이 구조 덕분에 40mm 이상의 높은 스택에서도 좌우 흔들림이 적고, 별도의 딱딱한 안정화 장치 없이도 자연스러운 지지력을 제공합니다.',
      performanceRating: 8,
      usedInShoes: ['hoka-clifton-10', 'hoka-bondi-9', 'hoka-arahi-8', 'hoka-gaviota-6'],
      characteristics: {
        cushioning: 7,
        responsiveness: 5,
        durability: 9,
        weight: 7,
      },
    },

    // ─── 미드솔/추진 (Midsole & Propulsion) ───
    {
      id: 'supercritical-eva',
      name: 'Supercritical EVA',
      nameKo: '초임계 EVA',
      category: 'midsole',
      year: 2024,
      description:
        '초임계 발포 공법으로 무게는 줄이고 반발력은 높인 차세대 폼으로, Bondi 9와 Skyflow의 핵심 미드솔입니다.',
      benefits: [
        '초임계 발포로 기존 EVA 대비 경량화',
        '향상된 반발력과 에너지 리턴',
        '장거리에서도 꺼지지 않는 일관된 쿠셔닝',
        '프리미엄 데일리 러닝에 최적화',
      ],
      scienceExplanation:
        'Supercritical EVA는 초임계(Supercritical) 발포 공법을 적용한 호카의 차세대 폼입니다. 기존 EVA보다 기포를 더 균일하고 미세하게 만들어 무게는 줄이면서 반발력은 높였습니다. Bondi 9에서 처음 적용되어 호카의 대표 쿠셔닝 라인을 한 단계 업그레이드했으며, 수백 km를 달려도 꺼지지 않는 내구성이 특징입니다.',
      performanceRating: 8,
      usedInShoes: ['hoka-bondi-9', 'hoka-mach-6', 'hoka-mach-x-3'],
      characteristics: {
        cushioning: 10,
        responsiveness: 7,
        durability: 9,
        weight: 8,
      },
    },
    {
      id: 'profly',
      name: 'PROFLY™',
      nameKo: '프로플라이',
      category: 'midsole',
      year: 2020,
      description:
        '부드러운 상층과 반응성 좋은 하층의 듀얼 밀도 구조로, 착지의 편안함과 이륙의 추진력을 동시에 제공합니다.',
      benefits: [
        '상층: 부드러운 착지로 충격 흡수',
        '하층: 단단한 반발로 추진력 생성',
        '듀얼 밀도로 쿠셔닝과 반응성의 균형',
        '빠른 페이스에서도 안정적인 라이드',
      ],
      scienceExplanation:
        'PROFLY™는 호카의 듀얼 밀도 미드솔 기술입니다. 상층에는 부드러운 폼을 배치하여 착지 충격을 흡수하고, 하층에는 반응성이 높은 폼을 배치하여 이륙 시 추진력을 생성합니다. 이 이중 구조 덕분에 하나의 미드솔에서 쿠셔닝과 반응성이라는 상반된 성능을 동시에 얻을 수 있으며, Mach 시리즈와 Carbon X 라인에 적용됩니다.',
      performanceRating: 8,
      usedInShoes: ['hoka-mach-6', 'hoka-mach-x-3'],
      characteristics: {
        cushioning: 8,
        responsiveness: 8,
        durability: 7,
        weight: 8,
      },
    },
    {
      id: 'proflyx',
      name: 'PROFLY X',
      nameKo: '프로플라이 X',
      category: 'plate',
      year: 2022,
      description:
        '호카의 레이싱 철학이 담긴 통합 추진 시스템으로, 모델에 따라 PEBA 폼과 플레이트를 유기적으로 조합하여 공격적인 추진감을 만들어냅니다.',
      benefits: [
        '플레이트 + 폼의 유기적 추진 시스템',
        '공격적인 추진감으로 레이싱 최적화',
        '모델별로 최적화된 플레이트/폼 구성',
        '고속 주행에서 에너지 손실 최소화',
      ],
      scienceExplanation:
        'PROFLY X는 호카의 레이싱 철학이 담긴 통합 추진 시스템입니다. 단일 소재가 아니라 "추진력을 위한 패키지(Plate + Foam)"로, 모델에 따라 가장 탄력적인 PEBA 폼이 되기도 하고 이를 보조하는 플레이트 기술을 통칭하기도 합니다. 공통적으로는 "공격적인 추진감"을 목표로 하며, Rocket X 3와 Carbon X 시리즈에 적용됩니다.',
      performanceRating: 10,
      usedInShoes: ['hoka-rocket-x-3'],
      characteristics: {
        cushioning: 6,
        responsiveness: 10,
        durability: 7,
        weight: 9,
      },
    },

    // ─── 안정화 (Stability) ───
    {
      id: 'j-frame',
      name: 'J-Frame™',
      nameKo: 'J-프레임',
      category: 'stability',
      year: 2018,
      description:
        '과회내를 방지하기 위해 내측에 적용된 J자형 고밀도 폼으로, 쿠셔닝을 유지하면서 안정성을 제공합니다.',
      benefits: [
        '내측에만 적용되어 자연스러운 교정',
        '고밀도 폼으로 과회내 방지',
        '쿠셔닝을 희생하지 않는 안정화',
        '평발 러너에게 특히 효과적',
      ],
      scienceExplanation:
        'J-Frame™은 호카의 안정화 기술로, 미드솔 내측에 J자 형태의 고밀도 폼을 배치합니다. 과회내(오버프로네이션) 경향이 있는 러너의 발이 안쪽으로 무너지는 것을 방지하면서도, 딱딱한 플라스틱 포스트 대신 폼 소재를 사용하여 쿠셔닝을 유지합니다. Arahi 시리즈에 적용되어 "편안한 안정화"를 대표하는 기술입니다.',
      performanceRating: 8,
      usedInShoes: ['hoka-arahi-8', 'hoka-gaviota-6'],
      characteristics: {
        cushioning: 7,
        responsiveness: 5,
        durability: 9,
        weight: 7,
      },
    },
    {
      id: 'hubble-heel',
      name: 'Hubble® Heel',
      nameKo: '허블 힐',
      category: 'stability',
      year: 2020,
      description:
        '착지 시 충격을 줄이고 전환을 부드럽게 만드는 확장형 힐 디자인으로, Bondi 시리즈의 안정감 있는 착지를 담당합니다.',
      benefits: [
        '확장된 힐 면적으로 안정적인 착지',
        '착지 충격을 넓은 면적에 분산',
        'MetaRocker와 조합으로 부드러운 전환',
        '뒤꿈치 착지 러너에게 특히 효과적',
      ],
      scienceExplanation:
        'Hubble® Heel은 뒤꿈치 부분을 뒤쪽으로 확장한 힐 디자인입니다. 착지 시 접촉 면적을 넓혀 충격을 분산시키고, MetaRocker™ 지오메트리와 결합하여 뒤꿈치부터 앞발까지 자연스러운 롤링 전환을 유도합니다. Bondi 시리즈에서 특히 두드러지며, 뒤꿈치 착지(힐 스트라이크) 러너에게 안정감과 쿠셔닝을 동시에 제공합니다.',
      performanceRating: 7,
      usedInShoes: ['hoka-bondi-9'],
      characteristics: {
        cushioning: 9,
        responsiveness: 5,
        durability: 8,
        weight: 6,
      },
    },

    // ─── 아웃솔 (Outsole) ───
    {
      id: 'durabrasion-rubber',
      name: 'Durabrasion Rubber',
      nameKo: '듀라브레이전 러버',
      category: 'outsole',
      year: 2019,
      description:
        '마찰이 잦은 구간의 내구성을 강화한 호카의 표준 아웃솔 고무로, 가벼우면서도 오래가는 것이 특징입니다.',
      benefits: [
        '경량 설계로 전체 무게에 미치는 영향 최소화',
        '마찰 집중 부위에 전략적 배치',
        '데일리 러닝에 충분한 내구성',
        '다양한 도로 조건에서 안정적 접지',
      ],
      scienceExplanation:
        'Durabrasion Rubber는 호카의 표준 아웃솔 고무입니다. 마찰이 가장 빨리 일어나는 뒤꿈치와 전족부에 전략적으로 배치되어 미드솔 폼이 직접 닳는 것을 방지합니다. 호카는 전체 무게를 줄이기 위해 아웃솔 면적을 최소화하는 경향이 있는데, Durabrasion은 그 적은 면적에서도 충분한 내구성을 제공하도록 설계되었습니다.',
      performanceRating: 7,
      usedInShoes: ['hoka-clifton-10', 'hoka-bondi-9', 'hoka-mach-6'],
      characteristics: {
        cushioning: 4,
        responsiveness: 5,
        durability: 8,
        weight: 8,
      },
    },
    {
      id: 'sticky-rubber',
      name: 'Sticky Rubber',
      nameKo: '스티키 러버',
      category: 'outsole',
      year: 2022,
      description:
        '레이싱 시 노면과의 접착력을 극대화한 고강도 그립 고무로, 고속 주행에서 미끄러짐 없는 접지력을 제공합니다.',
      benefits: [
        '고속 주행에서 미끄러짐 방지',
        '노면과의 강력한 접착력',
        '레이싱에 최적화된 그립 성능',
        '젖은 노면에서도 안정적',
      ],
      scienceExplanation:
        'Sticky Rubber는 호카의 레이싱 모델에 적용되는 고접착 아웃솔 고무입니다. 일반 Durabrasion보다 접지력을 우선시하여, 고속 주행 시 코너링이나 이륙 순간 미끄러짐을 최소화합니다. 내구성보다 레이스 당일 퍼포먼스에 집중한 설계로, Rocket X 3 등 레이싱 모델에 적용됩니다.',
      performanceRating: 9,
      usedInShoes: ['hoka-rocket-x-3'],
      characteristics: {
        cushioning: 3,
        responsiveness: 7,
        durability: 6,
        weight: 8,
      },
    },
  ],
};
