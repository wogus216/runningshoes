import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-triumph-24',
  slug: 'saucony-triumph-24',
  brand: 'Saucony',
  name: '트라이엄프 24',
  image: '/images/shoes/saucony/triumph24/side.jpg',
  images: ['/images/shoes/saucony/triumph24/side.jpg'],
  category: '쿠션화',
  rating: 4.6,
  status: 'new',
  price: 209000,
  description:
    '전작의 PWRRUN+를 신소재 incrediLUX(초임계 A-TPU)로 교체한 2026년 프리미엄 중립 쿠션화. 스택은 43/33mm로 높아지고 무게는 250g으로 가벼워졌습니다.',
  oneliner: 'incrediLUX 신폼 — 힐 43mm 최대 스택에 250g',
  editorComment:
    '트라이엄프 24의 핵심은 미드솔 교체입니다. 전작까지 쓰던 PWRRUN+를 버리고 초임계 A-TPU 기반 incrediLUX로 갈아끼웠는데, 결과가 "스택은 올리고 무게는 내린다"는 교과서적 개선으로 나왔습니다. 힐 43mm는 써코니 로드 라인 중 가장 높고, 그러면서 250g으로 허리케인 26(262g)보다 가볍습니다.\n\n성격은 명확한 중립입니다. 지지 구조가 들어간 허리케인 26과 같은 209,000원이라 자주 비교되는데, 갈림길은 두 가지입니다 — 지지가 필요한가(허리케인), 그리고 드롭입니다. 트라이엄프 24는 10mm로 뒤꿈치가 확실히 높아 힐 착지 습관이 강한 러너에게 자연스럽고, 허리케인 26은 6mm로 발 전체 착지에 가깝습니다.\n\n사이즈·구매 가이드: 국내 공식몰에 16개 컬러웨이가 풀려 있고 그중 8개가 와이드라 발볼 넓은 러너의 선택지가 넓습니다. 다만 신형이라 2026-08-15 기준 할인이 하나도 없습니다 — 가격을 아끼려면 전 컬러 30% 할인 중인 트라이엄프 23(139,300원)이 현실적인 대안입니다.',
  tags: ['쿠션화', '중립', '맥스쿠션', 'incrediLUX'],

  specs: {
    weight: 250,
    cushioning: 9,
    responsiveness: 7,
    stability: 6,
    drop: 10,
    durability: 600,
  },

  biomechanics: {
    stackHeight: { heel: 43, forefoot: 33 },
    drop: 10,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'incrediLUX (초임계 A-TPU)',
    optimalPace: '5:00-7:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'excellent',
    kneeIssues: 'excellent',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'fair',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  priceAnalysis: {
    msrp: 209000,
    streetPrice: 209000,
    costPerKm: 348,
    valueRating: 7,
    priceTier: 'premium',
    alternatives: ['saucony-triumph-23', 'saucony-hurricane-26', 'nike-vomero-18'],
    valueAdvantages: [
      '힐 43mm — 써코니 로드 라인 최대 스택',
      '신소재 incrediLUX로 스택↑ 무게↓ 동시 달성 (250g)',
      '16개 컬러웨이 중 8개가 와이드',
      '드롭 10mm — 힐 착지 러너에게 자연스러운 구성',
    ],
  },

  targetUsers: {
    recommended: [
      '중립 러너의 장거리·회복주',
      '최대한 푹신한 쿠션을 원하는 러너',
      '뒤꿈치 착지 습관이 강한 러너 (드롭 10mm)',
      '발볼이 넓어 와이드가 필요한 중립 러너',
    ],
    notRecommended: [
      '과내전 지지가 필요한 러너 (중립화 — 허리케인 26/옴니 ST 23 권장)',
      '낮은 드롭을 선호하는 러너 (10mm)',
      '가격을 아끼려는 러너 (신형이라 할인 없음 — 트라이엄프 23 권장)',
      '템포·스피드 훈련용을 찾는 러너',
    ],
  },

  features: [
    '전작 PWRRUN+ → 신소재 incrediLUX(초임계 A-TPU) 전면 교체',
    '스택 43/33mm — 써코니 로드 라인 중 힐 스택 최고',
    '무게 250g으로 허리케인 26(262g)보다 가벼움',
    '드롭 10mm — 써코니 현행 로드 라인 중 가장 높음',
    '국내 16개 컬러웨이 중 8개가 와이드 · 2026-08-15 기준 할인 없음',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 90,
      text: 'incrediLUX 교체가 이 세대의 전부라고 해도 과언이 아닙니다. 초임계 A-TPU 계열로 바뀌면서 힐 스택을 43mm까지 올렸는데 무게는 250g에 묶었습니다. 중립 맥스쿠션 카테고리에서 이 조합은 상위권입니다. 성격은 "푹신하되 무르지 않다" 쪽으로, 회복주와 장거리에서 강점이 뚜렷합니다. 반대로 반발을 기대하고 템포에 투입하면 아쉬울 수 있습니다 — 그 자리는 엔돌핀 스피드 5나 트레이너의 몫입니다. 드롭 10mm는 요즘 흐름(6~8mm)에 비하면 높은 편이라, 낮은 드롭에 적응한 러너는 이질감을 느낄 수 있습니다.',
    },
    {
      userType: '허리케인 26과 비교 — 같은 가격, 다른 목적',
      text: '둘 다 209,000원이고 둘 다 incrediLUX를 쓰지만 목적이 다릅니다. 트라이엄프 24는 지지 구조 없는 순수 중립이고, 허리케인 26은 incrediLUX 아래를 PWRRUN 프레임이 감싸며 안쪽 뒤꿈치·미드풋에서 솟아 미디얼 포스트 역할을 합니다. 즉 발이 안쪽으로 무너지는 러너라면 허리케인, 정렬에 문제가 없고 푹신함만 원하면 트라이엄프입니다. 수치로는 트라이엄프가 12g 가볍고 힐이 2mm 높으며 드롭이 4mm 큽니다(10mm vs 6mm). 이 드롭 차이가 실제 착화감에서 가장 크게 체감되는 부분입니다.',
    },
    {
      userType: '전작 23과 비교 — 지금은 가격이 변수',
      text: '트라이엄프 23은 PWRRUN PB(PEBA) 기반으로 42.3/32.3mm·272g이었고, 24는 incrediLUX로 43/33mm·250g입니다. 스택은 소폭 올랐고 무게는 22g 줄었습니다. 문제는 가격입니다 — 2026-08-15 기준 트라이엄프 23은 국내 공식몰 16개 컬러 전량이 30% 할인된 139,300원인 반면 24는 209,000원 정가입니다. 약 7만 원 차이를 새 폼과 22g 감량에 지불할 가치가 있는지가 판단 기준입니다. 폼 성격 자체가 PEBA에서 A-TPU로 바뀐 것이라 "더 좋아졌다"기보다 "달라졌다"에 가깝다는 점도 감안하세요.',
    },
  ],

  detailedSpecs: {
    weight: '250g (남성 US 9) / 216g (여성 US 8) — 브랜드 공식',
    stackHeight: '힐 43mm / 포어풋 33mm (브랜드 공식)',
    drop: '10mm (브랜드 공식)',
    midsole: 'incrediLUX (초임계 A-TPU) — 전작 PWRRUN+ 대체',
    plate: '없음',
    outsole: '카본 러버 (러버 컷아웃 디자인)',
    upper: '엔지니어드 메쉬',
    width: '표준 · 와이드 — 국내 16종 중 8종이 와이드',
    durability: '600km+',
    price: '209,000원 (2026-08-15 써코니코리아 공식몰 확인, 할인 없음)',
    costPerKm: '약 ₩348/km (600km 기준)',
    footType: '중립 / 정상 아치',
    landingPattern: '힐스트라이크 중심',
  },

  similarShoes: ['saucony-triumph-23', 'saucony-hurricane-26', 'saucony-ride-19'],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=써코니+트라이엄프+24' }],
};
