import type { Brand } from '@/types/brand';

export const nikeBrand: Brand = {
  id: 'nike',
  name: 'Nike',
  nameKo: '나이키',
  tagline: 'Just Do It',
  description:
    '1964년 필 나이트와 빌 바우어만이 설립한 세계 최대의 스포츠 브랜드. 혁신적인 러닝화 기술로 마라톤 세계 신기록 수립에 기여했으며, ZoomX, ReactX, Air Zoom, 카본 플레이트 등 다양한 기술을 시스템으로 결합해 러닝 이코노미를 극대화하는 것이 특징입니다.',
  founded: 1964,
  headquarters: '미국 오리건주 비버튼',
  website: 'https://www.nike.com/kr',
  technologies: [
    {
      id: 'zoomx',
      name: 'ZoomX',
      nameKo: '줌엑스',
      category: 'midsole',
      year: 2017,
      description:
        '나이키에서 가장 가볍고 에너지를 가장 많이 돌려주는 최상급 폼. 압도적인 반응성의 상징입니다.',
      benefits: [
        '업계 최고 수준의 에너지 리턴 (약 85%)',
        '나이키 폼 중 가장 가벼운 무게',
        '부드러우면서도 폭발적인 반발력',
        '장거리 레이스에 최적화된 피로 저감',
      ],
      scienceExplanation:
        'ZoomX는 고성능 폴리머인 PEBA(Pebax) 계열의 슈퍼크리티컬 폼입니다. 기존 EVA나 TPU 폼보다 훨씬 가볍고 탄성이 뛰어나며, 약 85%의 에너지 리턴율을 제공합니다. 2017년 Breaking2 프로젝트에서 처음 선보였으며, Hoogkamer 등의 연구에 따르면 나이키 레이싱화의 "러닝 이코노미 4% 향상" 효과는 ZoomX 단독이 아닌 [ZoomX + 카본 플레이트 + 기하학적 구조]가 하나의 시스템으로 작동한 결과입니다. Vaporfly 4, Alphafly 3 등 나이키 최상위 레이싱화에 사용됩니다.',
      performanceRating: 10,
      usedInShoes: ['nike-vaporfly-4', 'nike-alphafly-3', 'nike-pegasus-premium', 'nike-pegasus-plus', 'nike-vomero-18', 'nike-vomero-plus', 'nike-vomero-premium', 'nike-zoom-fly-6', 'nike-streakfly-2'],
      characteristics: {
        cushioning: 9,
        responsiveness: 10,
        durability: 6,
        weight: 10,
      },
    },
    {
      id: 'reactx',
      name: 'ReactX',
      nameKo: '리액트엑스',
      category: 'midsole',
      year: 2023,
      description:
        '기존 React 폼의 부드러움을 유지하면서 성능과 지속가능성을 모두 잡은 차세대 데일리 러닝용 미드솔입니다.',
      benefits: [
        '기존 React 대비 에너지 리턴 13% 향상',
        '제조 공정상 탄소 발자국 43% 절감',
        '부드러우면서 안정적인 라이드',
        '뛰어난 내구성으로 데일리 트레이닝에 최적',
      ],
      scienceExplanation:
        'ReactX는 기존 React 폼을 업그레이드한 차세대 미드솔입니다. 나이키 공식 발표 기준 기존 React 대비 에너지 리턴 +13% 향상, 제조 공정상 탄소 발자국 -43% 절감을 달성했습니다. EVA와 합성 고무의 조합으로 만들어져 PEBA 기반 ZoomX보다 내구성이 뛰어나 매일 훈련하는 러너에게 적합합니다. Pegasus 41, Vomero 18 등 데일리 트레이닝 라인에 적용됩니다.',
      performanceRating: 8,
      usedInShoes: ['nike-pegasus-41', 'nike-pegasus-premium', 'nike-vomero-18', 'nike-structure-26'],
      characteristics: {
        cushioning: 8,
        responsiveness: 7,
        durability: 9,
        weight: 7,
      },
    },
    {
      id: 'air-zoom',
      name: 'Air Zoom Units',
      nameKo: '에어 줌 유닛',
      category: 'cushioning',
      year: 1995,
      description:
        '미드솔 내부에 압축 공기와 고탄성 파이버를 넣어 지면을 찰 때 강력한 반발력을 제공하는 물리적 스프링 기술입니다.',
      benefits: [
        '착지 시 에너지를 저장, 도약 시 그대로 반환하는 물리적 스프링 효과',
        '폼 소재와 달리 수천 km에도 성능 저하 없음',
        '가볍고 즉각적인 반발력',
        '빠른 페이스에서 효과 극대화',
      ],
      scienceExplanation:
        'Air Zoom은 고압 공기가 주입된 TPU 캡슐 내부에 고탄성 파이버가 배열된 구조입니다. 착지 시 압축되었다가 빠르게 원상복귀하면서 에너지를 반환합니다. Alphafly 3의 경우 전족부에 2개의 줌 에어 팟(Pods)이 노출 배치되어, 착지 시 에너지를 저장했다가 도약 시 그대로 돌려주는 물리적 스프링 역할을 수행합니다. 폼 소재와 달리 공기 기반이라 장기간 사용해도 성능이 유지되는 것이 큰 장점입니다.',
      performanceRating: 8,
      usedInShoes: ['nike-alphafly-3', 'nike-pegasus-premium', 'nike-vomero-premium'],
      characteristics: {
        cushioning: 7,
        responsiveness: 9,
        durability: 10,
        weight: 8,
      },
    },
    {
      id: 'carbon-plate',
      name: 'Carbon-fiber Flyplate',
      nameKo: '카본 파이버 플라이플레이트',
      category: 'plate',
      year: 2017,
      description:
        '미드솔 사이에 삽입된 풀렝스 카본 플레이트로, 단순한 딱딱한 판이 아닌 ZoomX 폼의 압축과 복원을 최적화하는 레버(Lever) 역할을 합니다.',
      benefits: [
        'ZoomX 폼의 압축-복원을 최적화하는 레버 메커니즘',
        '착지에서 이륙까지 에너지 전달 극대화',
        '발목 관절 굴곡 제한으로 에너지 손실 최소화',
        '6분/km 이하 빠른 페이스에서 효과 극대화',
      ],
      scienceExplanation:
        'Nike의 카본 파이버 플라이플레이트는 탄소섬유 강화 폴리머로 제작된 스푼 형태의 풀렝스 플레이트입니다. 2017년 Vaporfly 4%에서 처음 도입되었으며, 콜로라도 대학 Hoogkamer 연구팀의 실험에서 러닝 이코노미를 약 4% 개선하는 것으로 확인되었습니다. 핵심은 단순히 딱딱한 판이 아니라 ZoomX 폼의 압축과 복원을 최적화하는 레버(Lever) 역할을 한다는 점입니다. 발이 지면을 밀어낼 때 저장된 에너지를 효율적으로 전달하여 강력한 추진감을 만들어냅니다.',
      performanceRating: 10,
      usedInShoes: ['nike-vaporfly-4', 'nike-alphafly-3', 'nike-zoom-fly-6', 'nike-streakfly-2'],
      characteristics: {
        cushioning: 5,
        responsiveness: 10,
        durability: 8,
        weight: 9,
      },
    },
    {
      id: 'atomknit',
      name: 'Atomknit 3.0',
      nameKo: '아톰니트 3.0',
      category: 'upper',
      year: 2023,
      description:
        'Flyknit을 열처리하여 레이싱에 최적화한 소재로, 통기성과 경량성을 극대화한 "제2의 피부" 어퍼 기술입니다.',
      benefits: [
        '수분을 거의 흡수하지 않아 땀/비에도 무게 증가 방지',
        '고속 주행 시에도 발을 견고하게 잡아주는 안정감(Containment)',
        '극한의 경량화로 레이싱 성능 극대화',
        '장시간 레이스에서 발 부기에 대응하는 여유 설계',
      ],
      scienceExplanation:
        'Atomknit 3.0은 Flyknit 기술을 열처리(Heat Treatment)하여 늘린 소재로, 레이싱화에 최적화된 어퍼입니다. 더 촘촘한 직조로 고속 주행 시에도 발이 미끄러지지 않도록 설계되었으며, 메쉬 영역을 전략적으로 배치해 통기성을 확보합니다. 가장 큰 장점은 수분을 거의 흡수하지 않아 땀이나 비에 신발이 무거워지는 것을 방지한다는 점입니다. Alphafly 3에서는 발등 부분에 여유를 주어 장시간 레이스에서 발이 부어오를 때도 압박감을 줄여줍니다.',
      performanceRating: 9,
      usedInShoes: ['nike-alphafly-3'],
      characteristics: {
        cushioning: 5,
        responsiveness: 6,
        durability: 8,
        weight: 9,
      },
    },
    {
      id: 'flyknit',
      name: 'Flyknit',
      nameKo: '플라이니트',
      category: 'upper',
      year: 2012,
      description:
        '한 올의 실로 짜여진 니트 어퍼 기술로, 이음새 없는 가벼운 착화감과 부위별 맞춤 지지력을 제공합니다.',
      benefits: [
        '발을 감싸는 듯한 양말 같은 착화감',
        '뛰어난 통기성',
        '부위별 직조 밀도 조절로 맞춤 지지력',
        '기존 어퍼 대비 약 20g 무게 절감',
      ],
      scienceExplanation:
        'Flyknit은 고강도 폴리에스터 실을 디지털 니팅 기술로 짜서 만든 어퍼입니다. 기존의 여러 조각을 이어붙이는 방식과 달리 하나의 연속된 직물로 어퍼를 구성하여 이음새가 거의 없습니다. 부위별로 직조 밀도를 조절해 필요한 곳에 지지력을, 다른 곳에 통기성을 제공합니다. 2012년 런던 올림픽에서 처음 선보였으며, 재단 낭비를 최소화해 친환경적인 장점도 있습니다. Vaporfly 4에 적용되어 있습니다.',
      performanceRating: 9,
      usedInShoes: ['nike-vaporfly-4', 'nike-pegasus-plus'],
      characteristics: {
        cushioning: 5,
        responsiveness: 6,
        durability: 7,
        weight: 10,
      },
    },
    {
      id: 'engineered-mesh',
      name: 'Engineered Mesh',
      nameKo: '엔지니어드 메쉬',
      category: 'upper',
      year: 2020,
      description:
        '부위별로 직조 방식을 다르게 설계하여 통기성과 지지력을 동시에 잡은 정밀 메쉬 소재입니다.',
      benefits: [
        '발등은 큰 구멍으로 통기성 극대화',
        '측면과 앞코는 촘촘하게 짜서 발 흔들림 방지',
        'Atomknit보다 부드럽고 내구성이 뛰어남',
        '매일 신는 훈련화에 최적화된 편안함',
      ],
      scienceExplanation:
        'Engineered Mesh는 부위별로 직조 방식을 다르게 설계한 정밀 메쉬 소재입니다. 열이 많이 발생하는 발등 부분은 구멍을 크게 내어 공기 흐름을 극대화하고, 측면과 앞코 등 힘이 실리는 곳은 촘촘하게 짜서 발의 흔들림을 방지합니다. 레이싱 전용 Atomknit보다 훨씬 부드럽고 내구성이 뛰어나 매일 신는 데일리 훈련화에 최적화된 소재입니다.',
      performanceRating: 7,
      usedInShoes: ['nike-pegasus-41', 'nike-vomero-18', 'nike-vomero-plus', 'nike-vomero-premium', 'nike-structure-26', 'nike-zoom-fly-6', 'nike-streakfly-2'],
      characteristics: {
        cushioning: 6,
        responsiveness: 5,
        durability: 9,
        weight: 7,
      },
    },
    {
      id: 'waffle-outsole',
      name: 'Waffle Outsole',
      nameKo: '와플 아웃솔',
      category: 'outsole',
      year: 1974,
      description:
        '나이키 창립 초기 와플 기계에서 영감받아 개발된 50년 역사의 상징적인 전천후 아웃솔 패턴입니다.',
      benefits: [
        '아스팔트, 트랙, 흙길 등 다목적 접지력',
        '패턴 사이 홈으로 발의 자연스러운 움직임 보장',
        '검증된 안정성과 신뢰성',
        '다양한 지면 조건에서 균일한 그립력',
      ],
      scienceExplanation:
        'Waffle Outsole은 나이키 공동 창립자 빌 바우어만이 와플 기계에서 영감받아 개발한 패턴으로, 50년 이상의 역사를 가진 상징적인 아웃솔 기술입니다. 돌출된 고무 돌기들이 아스팔트, 우레탄 트랙, 가벼운 흙길 등 어떤 지면에서도 안정적인 그립력을 제공합니다. 패턴 사이사이에 홈이 있어 발의 자연스러운 굴곡 움직임을 방해하지 않는 것이 특징입니다.',
      performanceRating: 7,
      usedInShoes: ['nike-pegasus-41', 'nike-vomero-premium'],
      characteristics: {
        cushioning: 5,
        responsiveness: 6,
        durability: 8,
        weight: 7,
      },
    },
    {
      id: 'high-abrasion-rubber',
      name: 'High-Abrasion Rubber',
      nameKo: '고내마모성 고무',
      category: 'outsole',
      year: 2018,
      description:
        '마찰에 매우 강한 특수 고무 화합물을 마모가 집중되는 부위에 전략 배치하여 신발 수명을 늘리는 기술입니다.',
      benefits: [
        '뒤꿈치와 앞꿈치에 전략적 배치로 수명 연장',
        '고가의 미드솔 폼이 깎여 나가는 것을 방지',
        '높은 마일리지 러너에게 경제적',
        '접지력과 내구성의 균형',
      ],
      scienceExplanation:
        'High-Abrasion Rubber는 마찰에 매우 강한 특수 고무 화합물입니다. 신발 바닥 전체가 아닌, 마모가 가장 빨리 일어나는 뒤꿈치(Heel)와 앞꿈치(Toe) 부분에 집중 배치됩니다. 고가의 미드솔 폼(ReactX, ZoomX 등)이 직접 지면에 닿아 깎여 나가는 것을 방지하여 신발을 더 오래 신을 수 있게 합니다. 특히 주간 주행거리가 높은 러너에게 km당 비용을 낮춰주는 경제적인 기술입니다.',
      performanceRating: 7,
      usedInShoes: ['nike-pegasus-41', 'nike-vomero-18', 'nike-structure-26'],
      characteristics: {
        cushioning: 4,
        responsiveness: 5,
        durability: 10,
        weight: 6,
      },
    },
    {
      id: 'thin-web-rubber',
      name: 'Thin Web Rubber',
      nameKo: '씬 웹 러버',
      category: 'outsole',
      year: 2017,
      description:
        '엘리트 러너의 주행 데이터를 기반으로 설계된, 1g의 무게까지 줄인 레이싱 전용 초경량 밑창입니다.',
      benefits: [
        '러너 데이터 기반으로 필요한 곳에만 최소한의 고무 배치',
        '카본화 전체 무게 절감에 결정적 역할',
        '고속 주행에 최적화된 접지력',
        '경량화와 그립력의 극한 밸런스',
      ],
      scienceExplanation:
        'Thin Web Rubber는 엘리트 레이서의 주행 데이터를 기반으로 설계된 레이싱 전용 초경량 밑창입니다. 러너가 지면을 밀어낼 때 힘이 실리는 지점을 분석하여, 필요한 곳에만 최소한의 두께로 고무를 배치했습니다. 고무의 무게를 획기적으로 줄여 카본화의 전체 무게를 줄이는 데 결정적인 역할을 하며, 내구성보다 레이스 당일 최고의 퍼포먼스에 집중한 설계입니다.',
      performanceRating: 9,
      usedInShoes: ['nike-vaporfly-4', 'nike-alphafly-3'],
      characteristics: {
        cushioning: 3,
        responsiveness: 8,
        durability: 4,
        weight: 10,
      },
    },
  ],
};
