import type { Shoe } from '@/types/shoe';

// 2026-10-20 등록 — 출처: 디아도라 한국 공식몰(diadorakorea.com, 하이라이트브랜즈 운영) 상품 5699·6469 등 판매가,
// RunRepeat 랩 리뷰(runrepeat.com/diadora-atomo-star, 2025-08-10, 남성 US 9 시료). 점수는 랩 수치를 문서 C절 매핑에 대입.
export const shoe: Shoe = {
  id: 'diadora-atomo-star',
  slug: 'diadora-atomo-star',
  brand: 'Diadora',
  name: '아토모 스타',
  image: '/images/shoes/diadora/atomo-star/side.webp',
  images: [
    '/images/shoes/diadora/atomo-star/side.webp',
    '/images/shoes/diadora/atomo-star/angle.webp',
    '/images/shoes/diadora/atomo-star/top.webp',
    '/images/shoes/diadora/atomo-star/outsole.webp',
  ],
  category: '쿠션화',
  rating: 4,
  status: 'new',
  price: 299000,
  description:
    '이탈리아에서 만드는 디아도라의 맥스 쿠션 트레이너. 힐 39.9mm 스택에 질소 주입 EVA 폼 ANIMA N2를 깔아 충격흡수(힐 149 SA)는 최상위권이지만, 반발은 50%대 중반이고 토박스가 70.8mm로 좁습니다. 한국 공식몰 정가 299,000원.',
  oneliner: '힐 149 SA의 이탈리아산 맥스 쿠션 — 대신 토박스 70.8mm로 좁다',
  editorComment:
    '"오래 달려도 발바닥이 편한 신발"을 찾는 질문에 수치로는 강하게 답하는 신발입니다. RunRepeat 랩에서 충격흡수가 힐 149 SA·전족부 125 SA로 측정돼 측정 신발 중 상위권이고, 경도 14.0 HA로 평균보다 부드럽습니다. 힐 스택 39.9mm에 268g이라 같은 두께의 쿠션화 중 무거운 편은 아닙니다. Duratech 5000 아웃솔은 마모 테스트에서 0.4mm만 깎여 내구성이 좋은 쪽입니다.\n\n대신 반발은 힐 53.9%·전족부 57.4%로, RunRepeat가 "가격에 비해 부족하다"고 평가한 수준이라 템포·인터벌용은 아닙니다. 회복주·2시간 이상 이지 롱런에 맞는 성격입니다.\n\n사이즈·구매 가이드: 이 신발의 가장 큰 변수는 발볼입니다. 토박스 폭 70.8mm(RunRepeat 평균 73.2mm), 토박스 높이 22.5mm로 RunRepeat가 "측정한 것 중 가장 타이트한 축"이라고 적었고, 와이드 버전은 한국 공식몰에 없습니다. 발볼 넓은 한국 러너는 반드시 신어 보고 고르세요. 정가 299,000원은 우리 DB의 비슷한 쿠션량 신발(노바블라스트 5 169,000원, 발로스 V1 259,000원)보다 높습니다.',
  tags: ['쿠션화', '맥스쿠션', '회복주', '롱런', '이탈리아 생산'],

  specs: {
    weight: 268,
    cushioning: 9,
    responsiveness: 7,
    stability: 7,
    drop: 8,
    durability: 650,
  },

  biomechanics: {
    stackHeight: { heel: 39.9, forefoot: 32.1 },
    drop: 8,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'ANIMA N2 (질소 주입 EVA)',
    optimalPace: '5:30-7:30 min/km (이지·롱런·회복주)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: [
      '회복주·이지 롱런용 맥스 쿠션을 찾는 러너',
      '발볼이 좁거나 발등이 낮은 러너',
      '아웃솔 내구성을 중시하는 러너',
    ],
    notRecommended: [
      '발볼이 넓은 러너 (토박스 70.8mm, 와이드 없음)',
      '템포·인터벌 겸용 신발을 찾는 러너 (반발 53.9~57.4%)',
      '30만 원 가까운 예산이 부담인 러너',
    ],
  },

  features: [
    'ANIMA N2 미드솔 — 충격흡수 힐 149 SA·전족부 125 SA (RunRepeat)',
    '힐 39.9mm / 전족부 32.1mm 스택, 실측 드롭 7.8mm',
    'Duratech 5000 아웃솔 — 마모 0.4mm, 고무 두께 3.5mm',
    'DDATTIVO 인솔(힐 7.5mm) · 혀 패딩 11.0mm',
    '이탈리아 생산 (RunRepeat "Made in Italy")',
    '에너지 리턴 전족부 57.4% (RunRepeat 실측)',
  ],

  priceAnalysis: {
    msrp: 299000,
    costPerKm: 460,
    valueRating: 4,
    priceTier: 'premium',
    alternatives: ['asics-novablast-5', 'new-balance-balos-v1'],
    valueAdvantages: [
      '충격흡수 힐 149 SA — 측정 신발 중 상위권 (RunRepeat)',
      '아웃솔 마모 0.4mm로 내구성이 좋은 편',
      '스택 39.9mm 대비 268g으로 두께 대비 가벼운 편',
    ],
  },

  detailedSpecs: {
    weight: '268g (RunRepeat 실측, 남성 US 9) / 브랜드 공칭 275g',
    stackHeight: '힐 39.9mm / 전족부 32.1mm (RunRepeat 실측) — 브랜드 공칭 40/34mm',
    drop: '7.8mm (실측) — 브랜드 공칭 6mm',
    midsole: 'ANIMA N2 (질소 주입 EVA) — 경도 14.0 HA, 반발 힐 53.9% / 전족부 57.4%',
    plate: '없음',
    outsole: 'Duratech 5000 고무, 두께 3.5mm, 마모 0.4mm (RunRepeat 드레멜 테스트)',
    upper: '하드 오버레이가 있는 레트로 디자인 어퍼, 혀 패딩 11.0mm',
    width: '좁음 — 토박스 폭 70.8mm·높이 22.5mm (RunRepeat, 남성 US 9). RunRepeat: "The snug fit of the Atomo Star extends into the toebox"',
    durability: '550~750km — 아웃솔 마모 0.4mm로 우수, 힐 패딩 내구성은 RunRepeat "Bad"',
    price: '₩299,000 (2026-10-20 디아도라 한국 공식몰 확인)',
    costPerKm: '약 ₩460/km (내구성 범위 중간값 기준)',
    footType: '중립 발',
    landingPattern: 'MFS/FFS (RunRepeat 표기) — 힐 로커가 있어 RFS 전환도 부드러운 편',
  },

  reviews: [
    {
      userType: '예상 적합 — 강훈련 다음 날 회복주를 뛰는 러너',
      text: '충격흡수가 힐 149 SA·전족부 125 SA로 높고 경도 14.0 HA로 부드러워, 다리가 무거운 날 천천히 뛰는 회복주에 맞는 수치입니다. 힐 쪽 로커가 일찍 시작돼 착지 후 굴러가는 전환이 부드러운 구조입니다. 반발이 50%대 중반이라 페이스를 올리면 밀어주는 느낌은 약할 가능성이 높으니, 빠른 훈련용 신발은 따로 두는 편이 맞습니다.',
    },
    {
      userType: '예상 적합 — 발볼이 좁은 장거리 이지런 러너',
      text: '토박스 폭 70.8mm, 높이 22.5mm로 앞쪽 공간이 좁은 편이라, 다른 신발에서 앞발이 노는 게 불편했던 좁은 발에는 잘 맞을 수 있습니다. 혀 패딩이 11.0mm로 두껍고 인솔도 힐 7.5mm라 발등과 뒤꿈치를 감싸는 쪽입니다. 반대로 발볼이 넓거나 발가락이 높은 발이라면 2시간 넘는 롱런에서 앞쪽 압박이 생길 수 있고 와이드 선택지도 없어, 구매 전 시착이 필수입니다.',
    },
    {
      userType: '예상 적합 — 아웃솔 마모가 적은 쿠션화를 오래 신으려는 러너',
      text: 'RunRepeat 랩에서 아웃솔 마모가 0.4mm로 랩 평균 1.1mm의 절반에도 못 미쳐, 아웃솔 수명을 중시하는 러너에게 맞을 가능성이 있습니다. 토박스 내구성은 3/5로 무난하지만 통기성도 3/5라 가장 더운 날에는 발이 더울 수 있다고 랩이 지적했습니다. 접지 계수는 0.50으로 랩 평균 0.53보다 약간 낮고, 268g은 랩 평균 261g보다 7g 무거운 수준입니다. 랩의 단점 목록에는 에너지 리턴 부족과 높은 가격이 함께 올라 있습니다.',
    },
  ],

  similarShoes: ['new-balance-balos-v1', 'asics-novablast-5', 'nike-vomero-premium'],
  purchaseLinks: [
    { store: '디아도라 공식몰', url: 'https://www.diadorakorea.com/product/detail.html?product_no=5699', price: 299000, isOfficial: true },
  ],
};
