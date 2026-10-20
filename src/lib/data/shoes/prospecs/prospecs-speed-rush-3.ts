import type { Shoe } from '@/types/shoe';

// 2026-10-20 등록 — 출처: 프로스펙스 공식몰 상품 PR0UR26S111(BLACK) 상세의 Product Spec·사이즈 가이드 표·Features·
// 상품 상세 정보(제조연월 2026-05). RunRepeat 는 이 모델·전작 모두 미게시(runrepeat.com/prospecs-speed-rush-3 404,
// 대조군 nike-pegasus-41 200). 점수는 신상 추정 프로토콜 — 우리 DB의 같은 값대 경량 트레이너 4종
// (아디제로 SL2·라이벌 플라이 4·벨로시티 나이트로 5·라이드 18) 중앙값에서 쿠션·반발 1점 하향.
export const shoe: Shoe = {
  id: 'prospecs-speed-rush-3',
  slug: 'prospecs-speed-rush-3',
  brand: 'Prospecs',
  name: '스피드 러시 3',
  image: '/images/shoes/prospecs/speed-rush-3/side.webp',
  images: [
    '/images/shoes/prospecs/speed-rush-3/side.webp',
    '/images/shoes/prospecs/speed-rush-3/angle.webp',
    '/images/shoes/prospecs/speed-rush-3/top.webp',
    '/images/shoes/prospecs/speed-rush-3/back.webp',
    '/images/shoes/prospecs/speed-rush-3/outsole.webp',
  ],
  category: '입문화',
  rating: 4,
  status: 'new',
  price: 149000,
  description:
    '프로스펙스가 "입문자에게 적합한 트레이닝 러닝화"로 소개하는 14.9만 원 모델입니다. 270mm 224g, 오프셋 8.5mm에 슈퍼폼 미드솔을 쓰고, 전작 스피드 러시 2보다 어퍼의 안정감을 높였다고 밝혔습니다.',
  oneliner: '14.9만 원·224g — 프로스펙스 슈퍼폼 입문 트레이너',
  editorComment:
    'RunRepeat 등 독립 랩 데이터가 이 모델과 전작 모두 없어, 아래 점수는 프로스펙스 공식 스펙과 우리 DB의 같은 값대 경량 트레이너를 기준으로 한 추정치입니다. 공식 스펙으로 확인되는 것은 270mm 기준 224g, 굽높이 뒤꿈치 33.5mm·앞꿈치 25mm, 오프셋 8.5mm, 슈퍼폼 미드솔, 엔지니어드 메시 어퍼이고, 공식 추천 거리는 3~21km입니다. 프로스펙스는 전작보다 어퍼 구조와 이너 패딩을 손봐 착화 시 흔들림을 줄였고 힐탭 고리를 새로 달았다고 설명합니다.\n\n이 신발의 자리는 가격과 무게에서 정해집니다. 우리 DB의 비슷한 값대 트레이너(아디제로 SL2 149,000원·245g, 벨로시티 나이트로 5 179,000원·238g)보다 공식 무게가 가볍습니다. 다만 공식 무게는 270mm 기준이라 다른 브랜드의 US M9(약 270mm) 표기와 거의 같은 조건이지만 측정 방식이 같다는 보장은 없습니다. 쿠션의 부드러움과 반발은 실측이 없어 다른 신발과 수치로 비교할 수 없습니다.\n\n사이즈·구매 가이드: 230~300mm(5mm 단위) 단일 폭으로 나옵니다. 토박스 폭 실측이 없어 발볼이 넓은 러너는 매장에서 신어 보고 고르는 편이 안전합니다.',
  tags: ['스피드러시', '스피드 러시 3', '프로스펙스', '국산 러닝화', '입문화', '가성비', '경량', 'Prospecs'],

  specs: {
    weight: 224,
    cushioning: 6,
    responsiveness: 7,
    stability: 6,
    drop: 8.5,
    durability: 500,
  },

  biomechanics: {
    stackHeight: { heel: 33.5, forefoot: 25 },
    drop: 8.5,
    carbonPlate: false,
    plateType: null,
    midsoleType: '슈퍼폼 (프로스펙스 공식 표기 — 소재 성분 미공개)',
    optimalPace: '5:30-7:00 min/km (추정)',
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
    msrp: 149000,
    costPerKm: 298,
    valueRating: 8,
    priceTier: 'budget',
    alternatives: ['adidas-adizero-sl2', 'nike-rival-fly-4', 'saucony-ride-18'],
    valueAdvantages: [
      '14.9만 원 정가로 우리 DB의 같은 값대 트레이너(아디제로 SL2 149,000원)와 같은 가격',
      '270mm 224g — 공식 표기 기준 같은 값대 트레이너보다 가벼운 편',
      '전작 대비 어퍼·이너 패딩 보강, 힐탭 고리 추가(공식 설명)',
    ],
  },

  targetUsers: {
    recommended: [
      '15만 원 안쪽에서 가벼운 첫 러닝화를 찾는 입문 러너',
      '주 2~3회, 한 번에 5~10km 안팎을 달리는 러너 (공식 추천 거리 3~21km)',
      '무거운 쿠션화가 부담스러워 가벼운 트레이너를 원하는 러너',
    ],
    notRecommended: [
      '하프 이상 장거리를 주력으로 달리는 러너 (공식 추천 거리 상한 21km)',
      '발볼이 넓어 와이드 옵션이 꼭 필요한 러너 (단일 폭)',
      '랩 수치로 쿠션·반발을 비교해 고르고 싶은 러너 (독립 실측 없음)',
    ],
  },

  features: [
    '슈퍼폼 미드솔 — 반발탄성과 내구성을 내세운 프로스펙스 폼(공식)',
    '270mm 224g · 오프셋 8.5mm · 굽높이 33.5/25mm(공식)',
    '전작 대비 안정감을 높인 어퍼, 갑피·설포 일체형 설계(공식)',
    '재설계 이너 패딩 + 힐탭 고리(공식)',
    '공식 추천 거리 3~21km',
  ],

  reviews: [
    {
      userType: '예상 적합 — 첫 러닝화를 고르는 입문 러너',
      text: '러닝을 막 시작해 주 2~3회 5km 안팎을 달리는 러너라면 맞을 가능성이 있습니다. 공식 무게가 270mm 224g으로 가벼운 편이고, 오프셋 8.5mm는 뒤꿈치로 먼저 닿는 입문 러너에게도 무리가 적은 수치입니다. 14.9만 원 정가는 우리 DB의 같은 값대 트레이너와 같은 수준입니다. 다만 쿠션이 얼마나 부드러운지는 실측이 없어, 푹신한 착지감을 우선한다면 랩 데이터가 있는 입문 쿠션화와 매장에서 비교해 보는 편이 좋습니다.',
    },
    {
      userType: '예상 적합 — 가벼운 신발로 페이스를 올려 보려는 러너',
      text: '조깅에 익숙해져 가끔 페이스를 올려 보려는 러너에게 쓸 만할 수 있습니다. 프로스펙스는 슈퍼폼 미드솔의 반발을 주요 기능으로 꼽고, 224g 무게는 빠른 구간에서 다리 부담을 덜어 줄 수 있는 수준입니다. 카본 플레이트는 없어 본격적인 템포·레이스용이라면 같은 브랜드의 하이퍼 러시 2 템포(카본 플레이트, 199,000원)가 공식 설계상 그 자리입니다.',
    },
    {
      userType: '예상 적합 — 발볼이 넓은 러너는 시착 후 결정',
      text: '발볼이 넓은 러너에게 맞을지는 판단 근거가 부족합니다. 스피드 러시 3는 단일 폭으로만 나오고, 토박스 폭을 잰 독립 측정도 없습니다. 공식 사이즈 가이드는 270mm 기준 "발 너비" 98.7mm를 적어 두었지만, 이는 사이즈를 고를 때 쓰는 발 치수 안내이지 신발 안쪽 폭 측정이 아닙니다. 평소 발볼 때문에 반 치수 올려 신는다면 매장 시착이 가장 확실합니다.',
    },
  ],

  detailedSpecs: {
    weight: '224g (270mm, 프로스펙스 공식) — 랩 실측 없음',
    stackHeight: '뒤꿈치 33.5mm / 앞꿈치 25mm (270mm, 공식 사이즈 가이드 표) · 240mm 31.5/23.6mm',
    drop: '8.5mm (270mm 공식 오프셋) · 240mm 7.9mm',
    midsole: '슈퍼폼 — 프로스펙스 공식 "뛰어난 반발탄성과 내구성". 폼 성분·경도는 공식 미공개',
    plate: '없음 (공식 스펙에 플레이트 언급 없음)',
    outsole: '공식 상세에 아웃솔 소재 표기 없음 (불명)',
    upper: 'Engineered Mesh — 갑피·설포 일체형, 재설계 이너 패딩, 힐탭 고리(공식)',
    width: '토박스 랩 실측 없음 — 공식 폭 옵션: 단일 폭(230~300mm, 5mm 단위). 공식 사이즈 가이드의 "발 너비"(270mm 98.7mm)는 사이즈 선택용 발 치수 안내',
    durability: '450~550km (추정) — 랩 마모 측정 없음, 동급 경량 트레이너 범위로 보수 설정',
    price: '149,000원 (2026-10-20 프로스펙스 공식몰 확인)',
    costPerKm: '약 ₩298/km (500km 추정 기준)',
    footType: '중립 · 입문~가벼운 페이스 훈련',
    landingPattern: '힐~미드풋 (오프셋 8.5mm, 추정)',
  },

  similarShoes: ['adidas-adizero-sl2', 'puma-velocity-nitro-5', 'prospecs-hyper-rush-2-tempo'],
  purchaseLinks: [
    { store: '프로스펙스 공식몰', url: 'https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PR0UR26S111', price: 149000, isOfficial: true },
  ],
};
