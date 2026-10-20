import type { Shoe } from '@/types/shoe';

// 2026-10-20 등록 — 출처: 프로스펙스 공식몰 상품 PR0UR26S201(WHITE)·PR0UR26S202 상세의 Product Spec·사이즈 가이드 표·
// Features·상품 상세 정보(제조국 대한민국, 제조연월 2026-02). 2025 하반기 제조분(PR0UR25F301~303)도 같은 이름·가격으로 판매 중.
// RunRepeat 미게시(runrepeat.com/prospecs-duplex-gf 404, 대조군 nike-pegasus-41 200).
// 점수는 신상 추정 프로토콜 — 우리 DB의 15.9만~17.9만 원 안정화 5종(웨이브 인스파이어 21·22·가이드 18·스트럭처 26·
// 860 v14) 중앙값에서 쿠션·반발 1점 하향.
export const shoe: Shoe = {
  id: 'prospecs-duplex-gf',
  slug: 'prospecs-duplex-gf',
  brand: 'Prospecs',
  name: '듀플렉스 GF',
  image: '/images/shoes/prospecs/duplex-gf/side.webp',
  images: [
    '/images/shoes/prospecs/duplex-gf/side.webp',
    '/images/shoes/prospecs/duplex-gf/angle.webp',
    '/images/shoes/prospecs/duplex-gf/top.webp',
    '/images/shoes/prospecs/duplex-gf/back.webp',
    '/images/shoes/prospecs/duplex-gf/outsole.webp',
  ],
  category: '안정화',
  rating: 4,
  status: 'new',
  price: 159000,
  description:
    '프로스펙스 고유의 G-FRAME 지지 구조와 슈퍼폼·슈퍼라이트 이중 물성 미드솔을 쓴 안정화입니다. 270mm 320g, 오프셋 9.5mm, 정가 15.9만 원이며 공식 제조국은 대한민국입니다.',
  oneliner: '15.9만 원 국내 생산 안정화 — G-FRAME + 이중 물성 미드솔',
  editorComment:
    'RunRepeat 등 독립 랩 데이터가 없어, 아래 점수는 프로스펙스 공식 스펙과 우리 DB의 같은 값대 안정화를 기준으로 한 추정치입니다. 공식으로 확인되는 것은 270mm 기준 320g, 굽높이 뒤꿈치 36mm·앞꿈치 26.5mm, 오프셋 9.5mm, 발의 흔들림을 잡는 G-FRAME 구조, 슈퍼폼+슈퍼라이트 이중 물성 미드솔, 모노사 엔지니어드 메시 어퍼와 발등 고정 고무 밴드입니다. 공식 추천 거리는 3~21km이고, 프로스펙스는 입문자부터 숙련 러너의 훈련까지 쓸 수 있다고 소개합니다.\n\n가격으로 보면 우리 DB의 웨이브 인스파이어 21·가이드 18과 같은 15.9만 원으로, 안정화 중 낮은 값대입니다. 반대로 공식 무게 320g은 같은 값대 안정화(가이드 18 272g, 웨이브 인스파이어 22 280g)보다 무겁습니다. G-FRAME이 실제로 얼마나 흔들림을 줄이는지는 독립 측정이 없어 다른 안정화와 수치로 비교할 수 없습니다.\n\n사이즈·구매 가이드: 230~280mm(5mm 단위)와 290·300mm로 나오며 GF에는 와이드가 없습니다. 같은 듀플렉스 라인의 GD(139,000원)에는 공식몰에 "듀플렉스 GD WIDE"가 따로 있습니다. 토박스 폭 실측이 없으니 발볼이 넓다면 시착을 권합니다.',
  tags: ['듀플렉스', '듀플렉스 GF', 'G-FRAME', '프로스펙스', '국산 러닝화', '안정화', '평발', '가성비', 'Prospecs'],

  specs: {
    weight: 320,
    cushioning: 7,
    responsiveness: 5,
    stability: 8,
    drop: 9.5,
    durability: 550,
  },

  biomechanics: {
    stackHeight: { heel: 36, forefoot: 26.5 },
    drop: 9.5,
    carbonPlate: false,
    plateType: null,
    midsoleType: '슈퍼폼 + 슈퍼라이트 이중 물성 (프로스펙스 공식) + G-FRAME 안정화 구조',
    optimalPace: '5:30-7:30 min/km (추정)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },

  priceAnalysis: {
    msrp: 159000,
    costPerKm: 289,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['saucony-guide-18', 'mizuno-wave-inspire-21', 'nike-structure-26'],
    valueAdvantages: [
      '15.9만 원 — 우리 DB 안정화 중 가장 낮은 값대(가이드 18·웨이브 인스파이어 21과 같은 정가)',
      'G-FRAME 지지 구조 + 슈퍼폼·슈퍼라이트 이중 물성 미드솔(공식)',
      '공식 제조국 대한민국',
    ],
  },

  targetUsers: {
    recommended: [
      '발이 안쪽으로 무너지는 편이라 지지형 신발을 찾는 입문 러너',
      '16만 원 안쪽에서 안정화를 고르려는 러너',
      '5~10km 위주로 꾸준히 달리는 러너 (공식 추천 거리 3~21km)',
    ],
    notRecommended: [
      '가벼운 신발을 원하는 러너 (공식 320g)',
      '하프 이상 장거리를 주력으로 달리는 러너 (공식 추천 거리 상한 21km)',
      '발볼이 넓어 와이드가 필요한 러너 (GF는 단일 폭 — 와이드는 GD에만)',
    ],
  },

  features: [
    'G-FRAME 안정화 구조 — 발의 흔들림 제어·밸런스 유지(공식)',
    '슈퍼폼 + 슈퍼라이트 이중 물성 미드솔(공식)',
    '270mm 320g · 오프셋 9.5mm · 굽높이 36/26.5mm(공식)',
    '모노사 엔지니어드 어퍼 + 발등 고정 고무 밴드(공식)',
    '15.9만 원 · 공식 제조국 대한민국',
  ],

  reviews: [
    {
      userType: '예상 적합 — 발이 안쪽으로 무너지는 입문 러너',
      text: '평발 기미가 있거나 달릴 때 발목이 안쪽으로 꺾이는 편이라 지지형 신발이 필요한 입문 러너에게 맞을 가능성이 있습니다. 프로스펙스는 G-FRAME 구조가 발의 흔들림을 제어하고 이중 물성 미드솔이 쿠션과 지지를 함께 준다고 설명하며, 공식 자체 등급에서도 안정성을 5단계 중 5로 표시합니다. 다만 지지력이 실제로 어느 정도인지는 독립 측정이 없어, 랩 데이터가 있는 같은 값대 안정화(가이드 18 등)와 매장에서 비교해 보는 편이 좋습니다.',
    },
    {
      userType: '예상 적합 — 가격을 우선하는 안정화 구매자',
      text: '안정화를 처음 사면서 예산이 16만 원 안쪽이라면 후보가 됩니다. 정가 15.9만 원은 우리 DB 안정화 중 가장 낮은 값대이고, 공식 추천 거리 3~21km는 5~10km 위주 러닝에 맞춘 설계입니다. 대신 공식 무게가 320g으로 같은 값대 안정화보다 40~50g 무거우니, 가벼운 착화감을 중시한다면 감안해야 합니다.',
    },
    {
      userType: '예상 적합 — 발볼이 넓은 러너는 GD WIDE와 비교',
      text: '발볼이 넓은 러너라면 GF만 보고 결정하기보다 같은 라인을 함께 보는 편이 낫습니다. 듀플렉스 GF는 단일 폭이고, 공식몰에는 한 단계 아래 모델인 듀플렉스 GD(139,000원)에 "WIDE" 버전이 따로 있습니다. GF의 토박스 폭은 독립 측정이 없고, 공식 사이즈 가이드의 270mm "발 너비" 99.7mm는 사이즈 선택용 발 치수 안내라 신발 안쪽 폭과는 다릅니다.',
    },
  ],

  detailedSpecs: {
    weight: '320g (270mm, 프로스펙스 공식) — 랩 실측 없음',
    stackHeight: '뒤꿈치 36mm / 앞꿈치 26.5mm (270mm, 공식 사이즈 가이드 표) · 240mm 34.2/25.1mm',
    drop: '9.5mm (270mm 공식 오프셋) · 240mm 9.1mm',
    midsole: '슈퍼폼 + 슈퍼라이트 이중 물성 (공식). 폼 성분·경도는 공식 미공개',
    plate: '없음 — 대신 G-FRAME 안정화 구조(프로스펙스 고유 기술, 공식). 소재·형상 미공개',
    outsole: '공식 상세에 아웃솔 소재 표기 없음 (불명)',
    upper: '모노사 엔지니어드 메시 (ENGINEERED-MESH / PU) + 발등 고정 고무 밴드(공식)',
    width: '토박스 랩 실측 없음 — 공식 폭 옵션: GF는 단일 폭(230~280mm 5mm 단위, 290·300mm). 와이드는 같은 라인 듀플렉스 GD WIDE(139,000원)만. 공식 사이즈 가이드의 "발 너비"(270mm 99.7mm)는 사이즈 선택용 발 치수 안내',
    durability: '500~600km (추정) — 랩 마모 측정 없음, 동급 안정화 범위로 보수 설정',
    price: '159,000원 (2026-10-20 프로스펙스 공식몰 확인)',
    costPerKm: '약 ₩289/km (550km 추정 기준)',
    footType: '과내전·평발 경향 · 입문~훈련',
    landingPattern: '힐~미드풋 (오프셋 9.5mm, 추정)',
  },

  similarShoes: ['saucony-guide-18', 'mizuno-wave-inspire-22', 'nike-structure-26'],
  purchaseLinks: [
    { store: '프로스펙스 공식몰', url: 'https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PR0UR26S201', price: 159000, isOfficial: true },
  ],
};
