import type { Brand } from '@/types/brand';

export const brooksBrand: Brand = {
  id: 'brooks',
  name: 'Brooks',
  nameKo: '브룩스',
  tagline: 'Run Happy',
  description:
    '1914년 시애틀에서 시작된 러닝 전문 브랜드. "모든 러너는 고유한 주행 경로(Run Signature)를 가진다"는 철학 아래, 질소 주입 DNA 폼과 GuideRails® 안정화 기술로 러너 본연의 움직임을 가장 완벽하게 지지합니다.',
  founded: 1914,
  headquarters: '미국 시애틀',
  website: 'https://www.brooksrunning.co.kr',
  technologies: [
    // ─── 미드솔 (Midsole) ───
    {
      id: 'dna-gold',
      name: 'DNA GOLD',
      nameKo: 'DNA 골드',
      category: 'midsole',
      year: 2024,
      description:
        '브룩스 역사상 가장 강력한 에너지 리턴을 제공하는 100% PEBA 최상위 폼으로, 레이싱 라인의 핵심입니다.',
      benefits: [
        '100% PEBA 소재로 최고 수준의 에너지 리턴',
        '브룩스 역대 가장 가볍고 탄력적인 폼',
        '레이스 당일 최고의 퍼포먼스에 집중',
        '장거리 레이싱에서도 일관된 반발력 유지',
      ],
      scienceExplanation:
        'DNA GOLD는 브룩스의 최상위 미드솔 폼으로, 100% PEBA(폴리에테르 블록 아마이드) 소재를 사용합니다. PEBA는 현존하는 러닝화 폼 소재 중 에너지 리턴율이 가장 높은 소재로, DNA GOLD는 이를 통해 브룩스 역사상 가장 강력한 반발력을 구현합니다. Hyperion Elite 5에 적용되어 엘리트 레이싱의 핵심 기술로 자리 잡았습니다.',
      performanceRating: 10,
      usedInShoes: ['brooks-hyperion-elite-5'],
      characteristics: {
        cushioning: 7,
        responsiveness: 10,
        durability: 7,
        weight: 10,
      },
    },
    {
      id: 'dna-tuned',
      name: 'DNA Tuned',
      nameKo: 'DNA 튠드',
      category: 'midsole',
      year: 2024,
      description:
        '질소 주입 폼의 셀 크기를 부위별로 다르게 설계(Dual-Cell Technology)하여 착지는 부드럽게, 도약은 탄력 있게 만드는 기술입니다.',
      benefits: [
        '뒤꿈치: 큰 셀로 부드러운 착지 충격 흡수',
        '앞꿈치: 작은 셀로 탄력적인 도약 지원',
        '듀얼 셀 구조로 쿠셔닝과 반응성의 균형',
        '프리미엄 쿠셔닝 라인의 최신 기술',
      ],
      scienceExplanation:
        'DNA Tuned는 브룩스의 듀얼 셀 기술(Dual-Cell Technology)을 적용한 질소 주입 폼입니다. 뒤꿈치에는 큰 기포(셀)를 배치하여 착지 시 충격을 부드럽게 흡수하고, 앞꿈치에는 작은 기포를 촘촘하게 배치하여 이륙 시 탄력적인 반발력을 생성합니다. Glycerin Max 2에 적용되어 한 가지 폼에서 상반된 두 가지 성능을 동시에 구현합니다.',
      performanceRating: 9,
      usedInShoes: ['brooks-glycerin-max', 'brooks-glycerin-22', 'brooks-glycerin-gts-22'],
      characteristics: {
        cushioning: 10,
        responsiveness: 8,
        durability: 8,
        weight: 8,
      },
    },
    {
      id: 'dna-flash-v2',
      name: 'DNA FLASH v2',
      nameKo: 'DNA 플래시 v2',
      category: 'midsole',
      year: 2023,
      description:
        '공기보다 가벼운 질소를 주입하여 무게는 줄이고 반응성을 극대화한 브룩스의 스피드 폼입니다.',
      benefits: [
        '질소 주입으로 획기적인 경량화',
        '높은 반응성으로 스피드 러닝에 최적화',
        '트레이닝과 레이싱 모두 대응',
        '가벼우면서도 충분한 쿠셔닝 제공',
      ],
      scienceExplanation:
        'DNA FLASH v2는 질소(Nitrogen)를 주입하여 만든 브룩스의 스피드 폼입니다. 질소 기포가 폼 내부에 균일하게 분포하여 무게를 줄이면서도 반응성을 높입니다. 스피드 트레이닝과 트레일 레이싱에 모두 대응할 수 있는 범용성이 강점이며, Catamount 4 등 스피드 라인에 적용됩니다.',
      performanceRating: 8,
      usedInShoes: ['brooks-hyperion-max-3'],
      characteristics: {
        cushioning: 7,
        responsiveness: 9,
        durability: 7,
        weight: 9,
      },
    },
    {
      id: 'dna-loft-v3',
      name: 'DNA LOFT v3',
      nameKo: 'DNA 로프트 v3',
      category: 'midsole',
      year: 2022,
      description:
        '질소 주입 기술로 부드러움과 내구성을 동시에 확보한 브룩스의 데일리 러닝 표준 폼입니다.',
      benefits: [
        '질소 주입으로 가벼우면서도 부드러운 착지감',
        '뛰어난 내구성으로 장기간 성능 유지',
        '데일리 러닝에 최적화된 편안함',
        'Ghost, Glycerin 등 주력 모델에 폭넓게 적용',
      ],
      scienceExplanation:
        'DNA LOFT v3는 브룩스의 데일리 러닝 라인을 대표하는 질소 주입 폼입니다. 이전 세대의 EVA+고무 블렌드에서 질소 주입 방식으로 전환하여 무게는 줄이고 쿠셔닝 수명은 늘렸습니다. Ghost 17, Glycerin 22 등 브룩스의 핵심 데일리 모델에 폭넓게 적용되어 "편안한 러닝"이라는 브룩스의 정체성을 구현합니다.',
      performanceRating: 8,
      usedInShoes: ['brooks-ghost-17', 'brooks-ghost-max-3', 'brooks-glycerin-22', 'brooks-glycerin-gts-22', 'brooks-adrenaline-gts-25'],
      characteristics: {
        cushioning: 9,
        responsiveness: 7,
        durability: 9,
        weight: 7,
      },
    },

    // ─── 플레이트 (Plate) ───
    {
      id: 'speedvault-plus',
      name: 'SpeedVault+',
      nameKo: '스피드볼트+',
      category: 'plate',
      year: 2024,
      description:
        '사이즈별로 최적화 설계된 Arris® 카본 파이버 플레이트로, 브룩스 레이싱의 최고 추진력을 제공합니다.',
      benefits: [
        'Arris® 카본 파이버로 최고 수준의 강성',
        '사이즈별 최적화 설계로 모든 러너에게 동일한 효과',
        'DNA GOLD와 결합해 폭발적 추진력',
        '엘리트 레이싱에 최적화된 설계',
      ],
      scienceExplanation:
        'SpeedVault+는 브룩스의 최상위 카본 플레이트로, Arris® 카본 파이버를 사용합니다. 일반 카본 플레이트와 달리 사이즈별로 플레이트 강성을 최적화하여 발 크기가 다른 러너에게도 동일한 추진 효과를 제공합니다. DNA GOLD 폼 사이에 샌드위치되어 착지 에너지를 저장했다가 이륙 시 폭발적으로 방출하는 레이싱 전용 추진 시스템입니다.',
      performanceRating: 10,
      usedInShoes: ['brooks-hyperion-elite-5'],
      characteristics: {
        cushioning: 5,
        responsiveness: 10,
        durability: 7,
        weight: 9,
      },
    },
    {
      id: 'speedvault',
      name: 'SpeedVault',
      nameKo: '스피드볼트',
      category: 'plate',
      year: 2022,
      description:
        '유연한 나일론 소재의 플레이트로, 카본의 추진력과 트레이닝의 내구성을 동시에 잡은 슈퍼 트레이너용 플레이트입니다.',
      benefits: [
        '나일론 소재로 카본보다 유연한 추진감',
        '트레이닝에서도 부담 없이 사용 가능',
        '카본 플레이트 러닝의 적응 훈련에 적합',
        '내구성이 좋아 장기간 사용 가능',
      ],
      scienceExplanation:
        'SpeedVault는 나일론(Nylon) 소재를 사용한 유연한 플레이트입니다. 카본 플레이트보다 부드러운 굴곡성을 가져 다리 근육에 과도한 부담을 주지 않으면서도 전진 추진력을 더합니다. Hyperion Max 3 등 슈퍼 트레이너에 적용되어, 레이스 전 훈련에서 플레이트 러닝에 적응하는 용도로 활용됩니다.',
      performanceRating: 8,
      usedInShoes: ['brooks-hyperion-max-3'],
      characteristics: {
        cushioning: 5,
        responsiveness: 8,
        durability: 9,
        weight: 8,
      },
    },

    // ─── 안정화 (Stability) ───
    {
      id: 'guiderails',
      name: 'GuideRails®',
      nameKo: '가이드레일',
      category: 'stability',
      year: 2018,
      description:
        '과도한 움직임이 발생할 때만 개입하여 러너 고유의 습관적 움직임 경로(Habitual Motion Path)를 유지하도록 돕는 무릎 보호 안정화 기술입니다.',
      benefits: [
        '무릎 부상 예방에 특화된 설계',
        '과도한 움직임에만 선택적으로 개입',
        '러너 고유의 자연스러운 보폭 유지',
        '과교정 없이 부드러운 안정성 제공',
      ],
      scienceExplanation:
        'GuideRails®는 브룩스의 독자적 안정화 철학을 대표하는 기술입니다. 기존 안정화 기술이 모든 보폭에서 발의 회내를 교정하는 반면, GuideRails는 발이 과도하게 흔들릴 때만 선택적으로 개입합니다. "습관적 움직임 경로(Habitual Motion Path)"라는 개념을 기반으로, 러너 각자의 자연스러운 보폭 패턴을 존중하면서 무릎까지 전달되는 불필요한 충격만 차단합니다.',
      performanceRating: 9,
      usedInShoes: ['brooks-glycerin-gts-22', 'brooks-adrenaline-gts-25'],
      characteristics: {
        cushioning: 7,
        responsiveness: 6,
        durability: 9,
        weight: 7,
      },
    },

    // ─── 아웃솔 (Outsole) ───
    {
      id: 'roadtack',
      name: 'RoadTack',
      nameKo: '로드택',
      category: 'outsole',
      year: 2022,
      description:
        '재활용 실리카(Recycled Silica)를 혼합한 로드용 아웃솔로, 젖은 아스팔트에서도 뛰어난 접지력을 제공합니다.',
      benefits: [
        '재활용 실리카 혼합으로 친환경 설계',
        '젖은 도로에서도 안정적인 그립력',
        '로드 러닝에 최적화된 내구성',
        '다양한 날씨 조건에서 일관된 접지력',
      ],
      scienceExplanation:
        'RoadTack은 브룩스의 로드 러닝 전용 아웃솔 고무입니다. 재활용 실리카(Recycled Silica)를 혼합하여 환경 부담을 줄이면서도, 젖은 아스팔트에서의 접지력을 기존 고무 대비 향상시켰습니다. Ghost 17, Glycerin 22, Hyperion Elite 5 등 브룩스의 로드 러닝 라인업 전반에 적용됩니다.',
      performanceRating: 7,
      usedInShoes: ['brooks-ghost-17', 'brooks-ghost-max-3', 'brooks-glycerin-22', 'brooks-glycerin-gts-22', 'brooks-adrenaline-gts-25', 'brooks-hyperion-elite-5', 'brooks-hyperion-max-3'],
      characteristics: {
        cushioning: 4,
        responsiveness: 5,
        durability: 8,
        weight: 7,
      },
    },
    {
      id: 'trailtack-green',
      name: 'TrailTack Green',
      nameKo: '트레일택 그린',
      category: 'outsole',
      year: 2023,
      description:
        '험로에서 끈적한(Sticky) 접지력을 제공하는 트레일 전용 아웃솔로, 25%의 재활용 소재를 포함한 친환경 설계입니다.',
      benefits: [
        '험로에서 끈적한 접지력 제공',
        '25% 재활용 소재 포함 친환경 설계',
        '젖은 바위, 진흙에서도 미끄러짐 방지',
        '트레일 러닝에 최적화된 러그 패턴',
      ],
      scienceExplanation:
        'TrailTack Green은 브룩스의 트레일 전용 아웃솔로, 일반 고무보다 접착력(Sticky Grip)이 높은 특수 화합물을 사용합니다. 25%의 재활용 소재를 포함하여 지속가능성도 고려했으며, 젖은 바위, 진흙, 낙엽 등 다양한 트레일 조건에서 미끄러짐을 방지합니다.',
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
