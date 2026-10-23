import type { Shoe } from '@/types/shoe';

// 2026-10-20 등록 — 출처: 프로스펙스 공식몰 상품 PR0UR26S801(BLACK) 상세의 Product Spec·사이즈 가이드 표·Features·
// 상품 상세 정보(제조연월 2026-02). 같은 가격의 하이퍼 러시 2(PR0UR25F201, 2025-08 제조)와 스펙 수치가 같고,
// 공식 Features 상 차이는 "새롭게 적용된" 슈퍼폼 인솔. RunRepeat 미게시(prospecs-hyper-rush-2·-tempo 404,
// 대조군 nike-pegasus-41 200). 점수는 신상 추정 프로토콜 — 우리 DB의 플레이트 트레이너 4종
// (매직 스피드 4·줌 플라이 6·디비에이트 나이트로 4·SC 트레이너 v3) 중앙값에서 쿠션·반발 1점 하향.
export const shoe: Shoe = {
  id: 'prospecs-hyper-rush-2-tempo',
  slug: 'prospecs-hyper-rush-2-tempo',
  brand: 'Prospecs',
  name: '하이퍼 러시 2 템포',
  image: '/images/shoes/prospecs/hyper-rush-2-tempo/side.webp',
  images: [
    '/images/shoes/prospecs/hyper-rush-2-tempo/side.webp',
    '/images/shoes/prospecs/hyper-rush-2-tempo/angle.webp',
    '/images/shoes/prospecs/hyper-rush-2-tempo/top.webp',
    '/images/shoes/prospecs/hyper-rush-2-tempo/back.webp',
    '/images/shoes/prospecs/hyper-rush-2-tempo/outsole.webp',
  ],
  category: '데일리',
  rating: 4,
  status: 'new',
  price: 199000,
  description:
    '슈퍼폼 미드솔에 카본 플레이트("카본 플래쉬")를 넣은 프로스펙스의 슈퍼트레이너입니다. 270mm 210g, 오프셋 9mm, 공식 추천 거리 3~42km로 템포런·인터벌·장거리 훈련을 겨냥합니다.',
  oneliner: '19.9만 원·210g 카본 트레이너 — 템포·인터벌용 프로스펙스',
  editorComment:
    'RunRepeat 등 독립 랩 데이터가 없어, 아래 점수는 프로스펙스 공식 스펙과 우리 DB의 플레이트 트레이너를 기준으로 한 추정치입니다. 공식으로 확인되는 것은 270mm 기준 210g, 굽높이 뒤꿈치 36mm·앞꿈치 27mm, 오프셋 9mm, 슈퍼폼 미드솔과 데일리 트레이너용 카본 플레이트, 초극세사 자카드 메시 어퍼, 그리고 새로 넣은 슈퍼폼 인솔입니다. 프로스펙스는 장거리 러닝·템포런·인터벌에 두루 쓰는 "슈퍼트레이너화"로 소개합니다.\n\n같은 199,000원에 하이퍼 러시 2(2025년 하반기 제조분)도 공식몰에서 함께 팔리는데, 공식 스펙표의 무게·굽높이·오프셋 수치는 둘이 같고 공식 설명상 차이는 템포에 새로 들어간 슈퍼폼 인솔입니다. 우리 DB의 플레이트 트레이너(매직 스피드 4 199,000원·237g, 줌 플라이 6 209,000원·248g)와 비교하면 공식 무게가 가볍지만, 측정 조건이 같다는 보장은 없고 반발·쿠션은 실측이 없어 수치 비교가 불가능합니다.\n\n사이즈·구매 가이드: 230~290mm(5mm 단위) 단일 폭입니다. 토박스 폭 실측이 없으니 발볼이 넓다면 매장 시착을 권합니다.',
  tags: ['하이퍼러시', '하이퍼 러시 2', '하이퍼 러시 2 템포', '프로스펙스', '국산 러닝화', '카본', '슈퍼트레이너', '템포런', 'Prospecs'],

  specs: {
    weight: 210,
    cushioning: 7,
    responsiveness: 8,
    stability: 7,
    drop: 9,
    durability: 500,
  },

  biomechanics: {
    stackHeight: { heel: 36, forefoot: 27 },
    drop: 9,
    carbonPlate: true,
    plateType: '카본 플래쉬 (프로스펙스 공식 명칭 — 형상 미공개)',
    midsoleType: '슈퍼폼 + 슈퍼폼 인솔 (프로스펙스 공식 표기 — 소재 성분 미공개)',
    optimalPace: '4:30-6:00 min/km (추정)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },

  priceAnalysis: {
    msrp: 199000,
    costPerKm: 398,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['asics-magic-speed-4', 'mizuno-wave-rebellion-flash-3', 'asics-novablast-6'],
    valueAdvantages: [
      '카본 플레이트 트레이너를 19.9만 원에 — 우리 DB의 줌 플라이 6(209,000원)보다 1만 원 낮은 정가',
      '270mm 210g — 공식 표기 기준 같은 값대 플레이트 트레이너보다 가벼운 편',
      '공식 추천 거리 3~42km로 훈련부터 장거리까지 한 켤레로 겸용하도록 설계',
    ],
  },

  targetUsers: {
    recommended: [
      '템포런·인터벌을 주 1~2회 넣기 시작한 중급 러너',
      '20만 원 안쪽에서 카본 플레이트 트레이너를 찾는 러너',
      '레이스화와 별도로 빠른 훈련용 한 켤레가 필요한 러너',
    ],
    notRecommended: [
      '아주 느린 회복 조깅 위주의 러너 (플레이트 트레이너는 빠른 페이스용 설계)',
      '발볼이 넓어 와이드 옵션이 꼭 필요한 러너 (단일 폭)',
      '랩 실측으로 반발을 확인하고 사고 싶은 러너 (독립 실측 없음)',
    ],
  },

  features: [
    '카본 플래쉬 — 데일리 트레이너용으로 설계한 카본 플레이트(공식)',
    '슈퍼폼 미드솔 + 새로 적용된 슈퍼폼 인솔(공식)',
    '270mm 210g · 오프셋 9mm · 굽높이 36/27mm(공식)',
    '초극세사 자카드 메시 어퍼(공식)',
    '공식 추천 거리 3~42km — 장거리·템포·인터벌 겸용',
  ],

  reviews: [
    {
      userType: '예상 적합 — 템포런·인터벌을 시작한 중급 러너',
      text: '주 1~2회 템포런이나 인터벌을 넣기 시작한 러너라면 맞을 가능성이 있습니다. 프로스펙스는 슈퍼폼 미드솔과 카본 플레이트 조합으로 페이스가 올라가도 주행 흐름을 잡아 준다고 설명하고, 공식 무게 210g은 빠른 훈련에 부담이 적은 수준입니다. 다만 반발이 얼마나 되는지는 독립 실측이 없어, 같은 값대에서 랩 데이터가 있는 매직 스피드 4(199,000원)와 비교해 보고 고르는 편이 근거가 많습니다.',
    },
    {
      userType: '예상 적합 — 레이스화를 아껴 두고 싶은 하프·풀 준비 러너',
      text: '대회용 카본 레이스화는 따로 두고, 장거리 훈련에서 비슷한 감각을 연습할 신발을 찾는 러너에게 쓸 만할 수 있습니다. 공식 추천 거리가 3~42km이고 오프셋이 9mm라 장거리 후반 종아리 부담이 상대적으로 덜한 구성입니다. 굽높이는 뒤꿈치 36mm로 맥스 쿠션화보다는 낮습니다. 회복 조깅까지 한 켤레로 해결하려는 용도라면 플레이트가 없는 쿠션화가 더 맞을 수 있습니다.',
    },
    {
      userType: '예상 적합 — 하이퍼 러시 2와 템포 사이에서 고민하는 러너',
      text: '공식몰에 같은 199,000원으로 하이퍼 러시 2와 하이퍼 러시 2 템포가 함께 있습니다. 공식 스펙표의 무게(210g)·굽높이(36/27mm)·오프셋(9mm)은 같고, 공식 설명상 차이는 템포에 새로 적용된 슈퍼폼 인솔입니다. 인솔 차이가 체감으로 얼마나 되는지는 측정된 자료가 없으므로, 원하는 색상과 사이즈 재고를 기준으로 골라도 무리가 없는 선택지입니다.',
    },
  ],

  detailedSpecs: {
    weight: '210g (270mm, 프로스펙스 공식) — 랩 실측 없음',
    stackHeight: '뒤꿈치 36mm / 앞꿈치 27mm (270mm, 공식 사이즈 가이드 표) · 240mm 34/25.4mm',
    drop: '9mm (270mm 공식 오프셋) · 240mm 8.6mm',
    midsole: '슈퍼폼 — 공식 "뛰어난 충격 흡수와 편안한 보행감". 슈퍼폼 인솔 신규 적용. 폼 성분·경도는 공식 미공개',
    plate: '카본 플래쉬 — "데일리 트레이너에 최적화된 카본 플레이트"(공식). 길이·형상 미공개',
    outsole: '이 상품 상세에는 아웃솔 표기 없음 (불명). 같은 수치의 하이퍼 러시 2 공식 소개문은 "CPU 아웃솔"로 적음',
    upper: '초극세사 자카드 메시 (JACQUARD MESH, 공식)',
    width: '토박스 랩 실측 없음 — 공식 폭 옵션: 단일 폭(230~290mm, 5mm 단위). 공식 사이즈 가이드의 "발 너비"(270mm 100.3mm)는 사이즈 선택용 발 치수 안내',
    durability: '450~550km (추정) — 랩 마모 측정 없음, 동급 플레이트 트레이너 범위로 보수 설정',
    price: '199,000원 (2026-10-20 프로스펙스 공식몰 확인) · 하이퍼 러시 2도 199,000원',
    costPerKm: '약 ₩398/km (500km 추정 기준)',
    footType: '중립 · 템포·인터벌·장거리 훈련',
    landingPattern: '힐~미드풋 (오프셋 9mm, 추정)',
  },

  similarShoes: ['asics-magic-speed-4', 'nike-zoom-fly-6', 'prospecs-infinite-rush-rev'],
  purchaseLinks: [
    { store: '프로스펙스 공식몰', url: 'https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PR0UR26S801', price: 199000, isOfficial: true },
  ],
};
