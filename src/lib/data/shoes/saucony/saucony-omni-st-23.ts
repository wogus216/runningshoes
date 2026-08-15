import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-omni-st-23',
  slug: 'saucony-omni-st-23',
  brand: 'Saucony',
  name: '옴니 ST 23',
  image: '/images/shoes/saucony/omnist23/side.jpg',
  images: ['/images/shoes/saucony/omnist23/side.jpg'],
  category: '안정화',
  rating: 4.4,
  status: 'new',
  price: 199000,
  description:
    '써코니가 직접 "최상급 프리미엄 안정화"로 부르는 2026년 현행 모델. PWRRUN PB 상단과 단단한 PWRRUN 하단 사이에 TPU 스태빌리티 프레임을 끼워 미드풋 지지 아치를 만든, 과내전 러너용 플래그십입니다.',
  oneliner: 'TPU 스태빌리티 프레임 + PEBA 듀얼 폼 — 써코니 안정화의 최상위',
  editorComment:
    '써코니 안정화를 "가이드"로만 알고 있었다면 갱신이 필요합니다. 옴니 ST 23은 브랜드가 상품 설명에서 직접 "과내전 러너를 위해 설계된 최상급 프리미엄 안정화"라고 부르는 유일한 현행 모델이고, 써코니 미국 사이트의 Stability 카테고리에도 이 모델이 올라 있습니다. 구조가 가이드와 다릅니다 — 가이드 19가 CENTERPATH로 발의 경로를 "유도"한다면, 옴니 ST 23은 두 폼 층 사이에 TPU 프레임을 물리적으로 끼워 미드풋을 받칩니다. 그만큼 지지가 직접적이고, 286g으로 써코니 로드 라인 중 무거운 축입니다.\n\n주의할 점은 드롭입니다. 가이드 19가 6mm인데 옴니 ST 23은 8mm라, 가이드에서 갈아타면 뒤꿈치가 2mm 높아집니다. 종아리·아킬레스 쪽 감각이 달라질 수 있으니 첫 주는 거리를 줄여 적응하세요.\n\n사이즈·구매 가이드: 국내 공식몰 유통 물량이 4개 컬러웨이뿐인데 그중 3개가 와이드라, 발볼이 넓은 평발 러너에게는 오히려 구하기 쉬운 구성입니다. 정가 199,000원, 500km 기준 km당 약 398원. 같은 최상급 안정화로는 젤 카야노 32·아드레날린 GTS 25가 대안입니다.',
  tags: ['안정화', '과내전', '프리미엄', '평발'],

  specs: {
    weight: 286,
    cushioning: 8,
    responsiveness: 6,
    stability: 9,
    drop: 8,
    durability: 500,
  },

  biomechanics: {
    stackHeight: { heel: 40, forefoot: 32 },
    drop: 8,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN PB + PWRRUN + TPU 스태빌리티 프레임',
    optimalPace: '5:30-7:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'caution',
    kneeIssues: 'excellent',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'excellent',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 199000,
    streetPrice: 199000,
    costPerKm: 398,
    valueRating: 7,
    priceTier: 'premium',
    alternatives: ['saucony-guide-19', 'saucony-hurricane-26', 'asics-gel-kayano-32'],
    valueAdvantages: [
      '브랜드가 직접 "최상급 프리미엄 안정화"로 표기하는 유일한 현행 모델',
      'TPU 스태빌리티 프레임 — 유도형이 아닌 직접 지지 구조',
      '국내 유통 4종 중 3종이 와이드 — 넓은 발볼 접근성이 좋음',
      '카야노 32(199,000원)와 동일 가격대에서 선택지 제공',
    ],
  },

  targetUsers: {
    recommended: [
      '과내전(과회내전)이 뚜렷한 러너',
      '가이드 19로는 지지가 부족하다고 느낀 러너',
      '신발 안쪽 뒤꿈치가 유독 빨리 닳는 러너',
      '평발 + 넓은 발볼로 와이드 안정화를 찾는 러너',
    ],
    notRecommended: [
      '중립 러너 (불필요한 지지로 이물감)',
      '가벼운 신발을 원하는 러너 (286g)',
      '낮은 드롭에 익숙한 러너 (8mm)',
      '컬러 선택지를 중시하는 러너 (국내 4종뿐)',
    ],
  },

  features: [
    '써코니 공식 "최상급 프리미엄 안정화" — Stability 카테고리 등재 모델',
    'TPU 스태빌리티 프레임이 두 폼 층 사이에서 미드풋 지지 아치 형성',
    'PWRRUN PB(PEBA) 상단 + 단단한 PWRRUN 하단 듀얼 폼',
    '스택 40/32mm · 드롭 8mm — 가이드 19(6mm)보다 2mm 높음',
    '국내 정가 199,000원 · 유통 4종 중 3종이 와이드',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 86,
      text: '옴니 ST 23의 성격은 "유도"가 아니라 "지지"입니다. 가이드 19의 CENTERPATH가 미드솔 형상과 넓은 베이스로 발이 가운데 경로를 지나도록 유도하는 방식이라면, 옴니 ST 23은 PWRRUN PB와 PWRRUN 사이에 TPU 프레임을 물리적으로 끼워 미드풋을 직접 받칩니다. 그래서 과내전이 뚜렷한 러너에게는 확실히 체감되지만, 지지가 필요 없는 러너에게는 이물감으로 남습니다. 286g의 무게도 이 구조의 대가입니다. PEBA 계열 폼을 상단에 써서 예전 최상급 안정화들처럼 딱딱하지는 않다는 점이 2026년형의 개선점입니다.',
    },
    {
      userType: '가이드 19와 비교 — 강도와 드롭이 갈린다',
      text: '같은 써코니 안정화 계열이지만 겨냥하는 발이 다릅니다. 브랜드 설명 기준 가이드 19는 "약내전 러너에게도" 편안한 데일리이고, 옴니 ST 23은 "과내전 러너를 위한" 최상급입니다. 수치로도 갈립니다 — 가이드 19가 275g·35/29mm·드롭 6mm, 옴니 ST 23이 286g·40/32mm·드롭 8mm입니다. 옴니가 11g 무겁고 스택은 5mm 높으며 뒤꿈치가 2mm 더 들립니다. 가이드에서 옴니로 옮기면 발밑이 두꺼워지고 뒤꿈치가 높아지는 두 변화를 동시에 받는 셈이라, 첫 주는 거리를 줄여 적응하는 편이 안전합니다.',
    },
    {
      userType: '발볼·유통 적합성 — 와이드가 오히려 흔하다',
      text: '국내 공식몰 기준 옴니 ST 23은 4개 컬러웨이가 유통되는데 그중 3개가 와이드입니다(2026-08-15 확인). 대부분의 모델이 표준 폭 위주로 풀리고 와이드가 소수인 것과 정반대 구성이라, 발볼 넓은 평발 러너에게는 접근성이 좋습니다. 반대로 표준 폭에 특정 색을 원한다면 선택지가 사실상 하나입니다. 지지력은 필요한데 발볼까지 넓다면 가이드 19의 엑스트라 와이드와 함께 놓고 비교해볼 만합니다.',
    },
  ],

  detailedSpecs: {
    weight: '286g (남성 US 9) / 252g (여성 US 8) — 브랜드 공식',
    stackHeight: '힐 40mm / 포어풋 32mm (브랜드 공식)',
    drop: '8mm (브랜드 공식)',
    midsole: 'PWRRUN PB(상단) + PWRRUN(하단) + TPU 스태빌리티 프레임',
    plate: '없음 (TPU 지지 프레임은 플레이트가 아닌 안정화 구조)',
    outsole: '러버 아웃솔',
    upper: '엔지니어드 메쉬',
    width: '표준 · 와이드 — 국내 유통 4종 중 3종이 와이드',
    durability: '500km+',
    price: '199,000원 (2026-08-15 써코니코리아 공식몰 확인)',
    costPerKm: '약 ₩398/km (500km 기준)',
    footType: '과내전(과회내전) / 평발',
    landingPattern: '힐스트라이크 중심',
  },

  similarShoes: ['saucony-guide-19', 'saucony-hurricane-26', 'asics-gel-kayano-32'],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=써코니+옴니+ST+23' }],
};
