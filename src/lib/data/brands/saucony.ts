import type { Brand } from '@/types/brand';

export const sauconyBrand: Brand = {
  id: 'saucony',
  name: 'Saucony',
  nameKo: '써코니',
  tagline: 'A Good Day To Run',
  description:
    '1898년 미국 매사추세츠에서 시작된 러닝 전문 브랜드. PWRRUN 폼 시리즈와 SPEEDROLL 로커 지오메트리, 그리고 CenterPath 안정화 기술로 효율적인 러닝을 지원하며, Endorphin 라인으로 엘리트 레이싱부터 데일리 트레이닝까지 아우릅니다.',
  founded: 1898,
  headquarters: '미국 매사추세츠',
  website: 'https://www.saucony.co.kr',
  technologies: [
    // ─── 미드솔 (Midsole) ───
    {
      id: 'pwrrun-hg',
      name: 'PWRRUN HG',
      nameKo: 'PWRRUN HG',
      category: 'midsole',
      year: 2024,
      description:
        '최대 에너지 리턴과 경량화를 동시에 달성한 써코니의 최상급 쿠셔닝 폼으로, 레이싱 라인의 핵심입니다.',
      benefits: [
        '써코니 역대 최고의 에너지 리턴',
        '극한의 경량화로 레이싱 최적화',
        '장거리에서도 일관된 반발력 유지',
        '엘리트 레이서를 위한 프리미엄 폼',
      ],
      scienceExplanation:
        'PWRRUN HG는 써코니의 최상급 미드솔 폼으로, 최대 에너지 리턴과 경량화를 동시에 달성합니다. 레이싱 라인에서 핵심 기술로 사용되며, SPEEDROLL 지오메트리 및 카본 플레이트와 조합하여 엘리트 레이서에게 폭발적인 추진력을 제공합니다.',
      performanceRating: 10,
      usedInShoes: ['saucony-endorphin-elite-2'],
      characteristics: {
        cushioning: 8,
        responsiveness: 10,
        durability: 7,
        weight: 10,
      },
    },
    {
      id: 'pwrrun-pb',
      name: 'PWRRUN PB',
      nameKo: 'PWRRUN PB',
      category: 'midsole',
      year: 2021,
      description:
        'PEBA 폴리머 블렌드 기반의 비디드(구슬형) 폼으로, EVA 대비 절반 무게에 88% 에너지 리턴을 공식 수치로 제공합니다.',
      benefits: [
        'PEBA 블렌드로 88% 에너지 리턴(공식 수치)',
        'EVA 대비 절반 무게의 경량 설계',
        '비디드(구슬형) 발포로 균일한 쿠셔닝',
        '스피드 트레이닝과 레이싱 모두 대응',
      ],
      scienceExplanation:
        'PWRRUN PB는 PEBA(폴리에테르 블록 아마이드) 폴리머 블렌드를 비디드(구슬형)으로 발포한 써코니의 고성능 폼입니다. 써코니 공식 기술 용어집에 따르면 EVA 대비 절반 무게에 88% 에너지 리턴을 달성합니다. Endorphin Pro, Endorphin Speed 등 Endorphin 라인의 핵심 폼으로 사용됩니다.',
      performanceRating: 9,
      usedInShoes: ['saucony-triumph-23', 'saucony-endorphin-pro-4', 'saucony-endorphin-speed-5'],
      characteristics: {
        cushioning: 8,
        responsiveness: 9,
        durability: 7,
        weight: 9,
      },
    },
    {
      id: 'pwrrun-plus',
      name: 'PWRRUN+',
      nameKo: 'PWRRUN+',
      category: 'midsole',
      year: 2020,
      description:
        'PU 기반 저밀도 쿠셔닝 폼으로, 충격흡수·반응성·내구성·경량의 균형을 잡은 프리미엄 데일리 러닝 폼입니다.',
      benefits: [
        'PU 기반으로 EVA보다 오래 유지되는 쿠셔닝',
        '저밀도 설계로 부드러우면서 가벼움',
        '충격흡수, 반응성, 내구성의 균형',
        '프리미엄 데일리 러닝에 최적화',
      ],
      scienceExplanation:
        'PWRRUN+는 PU(폴리우레탄) 기반의 저밀도 쿠셔닝 폼입니다. 써코니 공식 용어집에서 "더 부드럽고 가볍게" 설계되었다고 설명하며, 충격흡수·반응성·내구성·무게 등 6가지 요소의 밸런스를 강조합니다. Triumph 23 등 프리미엄 쿠셔닝 라인에 적용됩니다.',
      performanceRating: 8,
      usedInShoes: ['saucony-ride-18', 'saucony-triumph-23'],
      characteristics: {
        cushioning: 9,
        responsiveness: 7,
        durability: 9,
        weight: 7,
      },
    },
    {
      id: 'pwrrun',
      name: 'PWRRUN',
      nameKo: 'PWRRUN',
      category: 'midsole',
      year: 2019,
      description:
        '최신 EVA 기반 업그레이드 쿠셔닝으로, 이전 세대 대비 반발력과 내구성이 향상된 써코니의 데일리 표준 폼입니다.',
      benefits: [
        '이전 세대 대비 향상된 반발력',
        '내구성 강화로 장기간 성능 유지',
        '데일리 러닝에 최적화된 편안함',
        'Ride, Guide 등 주력 모델에 폭넓게 적용',
      ],
      scienceExplanation:
        'PWRRUN은 써코니의 데일리 러닝 표준 미드솔 폼으로, 최신 EVA 기반으로 이전 세대 대비 반발력과 내구성이 향상되었습니다. Ride 18, Guide 18, Kinvara 16 등 써코니의 핵심 데일리·안정화 모델에 폭넓게 적용되어 편안하고 안정적인 라이드를 제공합니다.',
      performanceRating: 7,
      usedInShoes: ['saucony-ride-18', 'saucony-guide-18', 'saucony-kinvara-16', 'saucony-hurricane-25'],
      characteristics: {
        cushioning: 8,
        responsiveness: 7,
        durability: 8,
        weight: 7,
      },
    },

    // ─── 플레이트/추진 (Plate) ───
    {
      id: 'speedroll',
      name: 'SPEEDROLL',
      nameKo: '스피드롤',
      category: 'plate',
      year: 2021,
      description:
        '높아진 쿠셔닝과 단단한 전족부의 조합으로 연속적인 전진 모멘텀을 만들어내는 써코니의 로커 지오메트리 기술입니다.',
      benefits: [
        '착지에서 이륙까지 연속적인 전진 모멘텀',
        '높아진 쿠셔닝 + 단단한 전족부의 조합',
        '효율적인 에너지 전환으로 보폭 개선',
        'Endorphin 라인의 핵심 추진 기술',
      ],
      scienceExplanation:
        'SPEEDROLL은 써코니가 "연속 모멘텀 느낌으로 앞으로 굴려주는 기술"로 정의한 로커 지오메트리입니다. 핵심 변수로 (1) 높아진 쿠셔닝과 (2) 단단한(스티프) 전족부를 명시하며, 이 두 요소가 착지 에너지를 전방으로 자연스럽게 전환합니다. 카본/나일론 플레이트와 조합하여 Endorphin 라인 전체의 추진 시스템을 구성합니다.',
      performanceRating: 9,
      usedInShoes: ['saucony-endorphin-pro-4', 'saucony-endorphin-elite-2', 'saucony-endorphin-speed-5'],
      characteristics: {
        cushioning: 6,
        responsiveness: 9,
        durability: 8,
        weight: 8,
      },
    },
    {
      id: 'carbon-plate',
      name: 'Carbon Plate',
      nameKo: '카본 플레이트',
      category: 'plate',
      year: 2020,
      description:
        '모델에 따라 풀랭스 카본, 슬로티드(슬롯) 카본, 3/4 카본 등 용도별로 최적화된 써코니의 카본 플레이트 시스템입니다.',
      benefits: [
        'Elite: 슬로티드 카본으로 적응적 라이드와 에너지 리턴',
        'Pro: 풀랭스 카본 + SPEEDROLL로 폭발적 추진',
        'Trainer: 3/4 카본으로 훈련용 튜닝',
        '모델별 최적화 설계로 레이싱~트레이닝까지 대응',
      ],
      scienceExplanation:
        '써코니의 카본 플레이트 시스템은 모델에 따라 사양이 다릅니다. Endorphin Elite에는 슬로티드(슬롯) 카본 플레이트가 적용되어 에너지 리턴과 적응적 라이드를 제공하고, Endorphin Pro에는 풀랭스 카본 플레이트가 SPEEDROLL과 조합됩니다. Endorphin Trainer에는 3/4 길이의 카본 플레이트가 훈련용으로 튜닝되어 적용됩니다.',
      performanceRating: 10,
      usedInShoes: ['saucony-endorphin-pro-4', 'saucony-endorphin-elite-2'],
      characteristics: {
        cushioning: 5,
        responsiveness: 10,
        durability: 7,
        weight: 9,
      },
    },
    {
      id: 'winged-nylon-plate',
      name: 'Winged Nylon Plate',
      nameKo: '윙드 나일론 플레이트',
      category: 'plate',
      year: 2021,
      description:
        '나일론 소재에 윙(날개) 형태를 더한 유연한 플레이트로, 카본보다 부드러운 추진감을 제공하는 스피드 트레이닝용 플레이트입니다.',
      benefits: [
        '나일론 소재로 카본보다 유연한 굴곡성',
        '윙 형태로 안정적인 추진 지원',
        '스피드 트레이닝에 부담 없이 사용 가능',
        '카본화 적응 훈련에 적합',
      ],
      scienceExplanation:
        'Winged Nylon Plate는 Endorphin Speed 계열에 적용되는 유연한 플레이트입니다. 나일론 소재로 카본보다 부드러운 굴곡성을 제공하면서도, 윙(날개) 형태의 설계로 전방 추진력을 더합니다. PWRRUN PB 폼 + SPEEDROLL과 조합하여 데일리 스피드 트레이닝에 최적화된 라이드를 제공합니다.',
      performanceRating: 8,
      usedInShoes: ['saucony-endorphin-speed-5'],
      characteristics: {
        cushioning: 5,
        responsiveness: 8,
        durability: 8,
        weight: 8,
      },
    },

    // ─── 안정화 (Stability) ───
    {
      id: 'centerpath',
      name: 'CenterPath Technology',
      nameKo: '센터패스',
      category: 'stability',
      year: 2023,
      description:
        '써코니의 안정화 라인 핵심 기술로, 쿠셔닝이 많은 신발에서도 발의 중심 경로를 유지하도록 가이딩하는 안정화 시스템입니다.',
      benefits: [
        '풍부한 쿠셔닝에서도 흔들림 방지',
        '발의 중심 경로(Center Path) 유지',
        '과교정 없이 자연스러운 가이딩',
        'Guide, Hurricane 등 안정화 라인의 코어 기술',
      ],
      scienceExplanation:
        'CenterPath Technology는 써코니의 안정화 라인 핵심 기술입니다. Guide 18, Hurricane 25 등에서 코어 기술로 적용되며, 쿠셔닝이 풍부한 미드솔에서 발이 좌우로 흔들리는 것을 방지하고 중심 경로를 유지하도록 가이딩합니다. 과도한 교정 없이 자연스러운 안정성을 제공하는 것이 특징입니다.',
      performanceRating: 8,
      usedInShoes: ['saucony-guide-18', 'saucony-hurricane-25'],
      characteristics: {
        cushioning: 7,
        responsiveness: 6,
        durability: 9,
        weight: 7,
      },
    },
    {
      id: 'formfit',
      name: 'FORMFIT',
      nameKo: '폼핏',
      category: 'stability',
      year: 2018,
      description:
        '언더풋 크래들, 형태에 맞게 변형되는 쿠셔닝, 어퍼 소재를 결합한 3D 핏 시스템으로, 발 형태에 맞춰 개인화된 착화감을 제공합니다.',
      benefits: [
        '언더풋 크래들로 발을 감싸는 안정감',
        '발 형태에 맞게 변형되는 개인화된 쿠셔닝',
        '어퍼까지 통합된 3D 핏 접근',
        '다양한 발 형태에 적응하는 유연한 설계',
      ],
      scienceExplanation:
        'FORMFIT은 써코니 공식 용어집에서 "언더풋 크래들 + 형태에 맞게 변형되는 쿠셔닝 + 늘고 보호하는 어퍼 소재"를 결합한 3D 핏 접근으로 정의됩니다. 미드솔, 인솔, 어퍼를 통합적으로 설계하여 발 형태에 맞춰 개인화된 착화감을 제공하며, 써코니의 데일리·안정화 라인에 폭넓게 적용됩니다.',
      performanceRating: 7,
      usedInShoes: ['saucony-ride-18', 'saucony-triumph-23', 'saucony-guide-18', 'saucony-hurricane-25'],
      characteristics: {
        cushioning: 7,
        responsiveness: 5,
        durability: 8,
        weight: 7,
      },
    },

    // ─── 아웃솔 (Outsole) ───
    {
      id: 'pwrtrac',
      name: 'PWRTRAC',
      nameKo: 'PWRTRAC',
      category: 'outsole',
      year: 2019,
      description:
        '일반 카본 러버 대비 마찰계수(COF)가 3배인 점착·내구 러버로, 뛰어난 접지력과 내마모성을 동시에 제공합니다.',
      benefits: [
        '일반 카본 러버 대비 COF(마찰계수) 3배(공식 수치)',
        '점착성으로 젖은 노면에서도 안정적 그립',
        '내마모성이 뛰어나 장기간 사용 가능',
        '로드 러닝에 최적화된 접지력',
      ],
      scienceExplanation:
        'PWRTRAC은 써코니 공식 용어집에서 "점착·내구 러버, 접지·내마모 탁월, COF(마찰계수)가 일반 카본 러버의 3배"라고 정의된 고성능 아웃솔 고무입니다. 뛰어난 점착성으로 젖은 노면에서도 안정적인 그립을 제공하며, 내마모성도 우수하여 써코니의 로드 러닝 라인업 전반에 적용됩니다.',
      performanceRating: 8,
      usedInShoes: ['saucony-ride-18', 'saucony-triumph-23', 'saucony-guide-18', 'saucony-kinvara-16', 'saucony-hurricane-25', 'saucony-endorphin-pro-4', 'saucony-endorphin-elite-2', 'saucony-endorphin-speed-5'],
      characteristics: {
        cushioning: 4,
        responsiveness: 6,
        durability: 9,
        weight: 7,
      },
    },
    {
      id: 'xt-900',
      name: 'XT-900',
      nameKo: 'XT-900',
      category: 'outsole',
      year: 2015,
      description:
        '프리미엄급 카본 러버 아웃솔로, 고마모 구간에서 뛰어난 내구성과 접지력을 제공합니다.',
      benefits: [
        '프리미엄 카본 러버로 최고 수준의 내구성',
        '고마모 구간에 전략적 배치',
        '다양한 노면에서 안정적인 접지력',
        '높은 마일리지 러너에게 경제적',
      ],
      scienceExplanation:
        'XT-900은 써코니의 프리미엄 카본 러버 아웃솔입니다. 써코니 공식 용어집에서 "카본 러버 아웃솔 소재(마모·접지 특성)"로 정의되며, XT-600보다 상위의 내구성을 제공합니다. 마모가 집중되는 뒤꿈치와 전족부에 전략적으로 배치되어 신발 수명을 연장합니다.',
      performanceRating: 7,
      usedInShoes: ['saucony-ride-18', 'saucony-guide-18', 'saucony-hurricane-25'],
      characteristics: {
        cushioning: 4,
        responsiveness: 5,
        durability: 10,
        weight: 6,
      },
    },
  ],
};
