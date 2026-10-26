import type { Shoe } from '@/types/shoe';

// 2026-10-20 등록 — 출처: 프로스펙스 공식몰 상품 PR0UR26F101(BLUE) 상세의 Product Spec·사이즈 가이드 표·Features·
// 상품 상세 정보(제조연월 2026-10, 상세 이미지 2026-10-12 게시). 전작 인피니트 러시(PR0UR26S701, 259,000원)도 판매 중.
// ⚠️ 공식 사이즈 가이드의 뒤꿈치 굽높이가 240mm 35mm·270mm 33mm로 거꾸로 적혀 있다(다른 모델은 모두 240<270).
// 같은 표의 앞꿈치 30mm + 오프셋 5mm 와 맞는 쪽은 35mm라 270mm 뒤꿈치를 35mm로 읽었다 — 재확인 대상.
// RunRepeat 미게시(prospecs-infinite-rush-rev·prospecs-infinite-rush 404, 대조군 nike-pegasus-41 200).
// 점수는 신상 추정 프로토콜 — 우리 DB의 29.9만 원대 카본 레이서 5종(아디오스 프로 4·엔돌핀 프로 5·로켓 X 3·
// 하이페리온 엘리트 5·디비에이트 나이트로 엘리트 4) 중앙값에서 쿠션·반발 1점 하향.
export const shoe: Shoe = {
  id: 'prospecs-infinite-rush-rev',
  slug: 'prospecs-infinite-rush-rev',
  brand: 'Prospecs',
  name: '인피니트 러시 Rev.',
  image: '/images/shoes/prospecs/infinite-rush-rev/side.webp',
  images: [
    '/images/shoes/prospecs/infinite-rush-rev/side.webp',
    '/images/shoes/prospecs/infinite-rush-rev/angle.webp',
    '/images/shoes/prospecs/infinite-rush-rev/top.webp',
    '/images/shoes/prospecs/infinite-rush-rev/back.webp',
    '/images/shoes/prospecs/infinite-rush-rev/outsole.webp',
  ],
  category: '레이싱',
  rating: 4,
  status: 'new',
  price: 299000,
  description:
    '프로스펙스 최상위 레이싱화 인피니트 러시의 개정판입니다. 미드솔을 슈퍼폼+(PEBAX 100%)로 바꾸고 광폭 카본 플레이트를 넣었으며, 270mm 225g·오프셋 5mm로 전작(230g)보다 가벼워졌습니다.',
  oneliner: '29.9만 원 PEBAX 100% 카본 레이서 — 프로스펙스 플래그십 개정판',
  editorComment:
    '2026년 10월 공식몰에 올라온 신상으로, RunRepeat 등 독립 랩 데이터가 이 모델과 전작 모두 없어 아래 점수는 프로스펙스 공식 스펙과 우리 DB의 같은 값대 카본 레이서를 기준으로 한 추정치입니다. 공식으로 확인되는 것은 270mm 기준 225g, 앞꿈치 굽높이 30mm, 오프셋 5mm, 슈퍼폼+(PEBAX 100%) 미드솔과 광폭 카본 플레이트, 토스프링 설계, 슈퍼폼 인솔, 잘 풀리지 않는 신끈입니다. 프로스펙스는 넓은 전·중족부 바닥 설계로 주행 안정감을 챙겼다고 설명합니다. 뒤꿈치 굽높이는 공식 표의 240mm·270mm 칸이 서로 뒤바뀐 것으로 보여, 앞꿈치와 오프셋에 맞는 35mm로 읽었습니다.\n\n같은 값대 카본 레이서와 비교하면 PEBA 계열 폼과 카본 플레이트라는 구성은 같고, 공식 무게 225g은 우리 DB의 아디오스 프로 4(200g)·엔돌핀 프로 5(206g)보다 무겁습니다. 반발과 쿠션은 실측이 없어 수치로 비교할 수 없으므로, 기록용 레이스화를 이 신발 하나로 결정할 근거는 아직 부족합니다. 전작 인피니트 러시(슈퍼폼+ PEBA 활용, 230g)는 259,000원으로 계속 판매 중입니다.\n\n사이즈·구매 가이드: 230~290mm(5mm 단위) 단일 폭입니다. 레이스화는 발을 단단히 잡는 핏이 흔해, 발볼이 넓다면 반드시 시착 후 고르세요.',
  tags: ['인피니트러시', '인피니트 러시', '인피니트 러시 Rev', '프로스펙스', '국산 러닝화', '카본', 'PEBAX', '슈퍼슈즈', '레이싱화', 'Prospecs'],

  specs: {
    weight: 225,
    cushioning: 6,
    responsiveness: 9,
    stability: 6,
    drop: 5,
    durability: 400,
  },

  biomechanics: {
    stackHeight: { heel: 35, forefoot: 30 },
    drop: 5,
    carbonPlate: true,
    plateType: '광폭 카본 플레이트 (프로스펙스 공식 — 형상 미공개)',
    midsoleType: '슈퍼폼+ (PEBAX 100%, 프로스펙스 공식)',
    optimalPace: '3:30-5:00 min/km (추정)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'caution',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 299000,
    costPerKm: 748,
    valueRating: 7,
    priceTier: 'super-premium',
    alternatives: ['adidas-adios-pro-4', 'brooks-hyperion-elite-5', 'puma-deviate-nitro-elite-4'],
    valueAdvantages: [
      'PEBAX 100% 미드솔 + 광폭 카본 플레이트 구성(공식) — 29.9만 원으로 우리 DB 카본 레이서 정가 범위의 중간',
      '전작 대비 무게 230g → 225g(270mm, 공식)',
      '오프라인 매장망이 있는 국내 브랜드 레이서 (모델별 매장 재고는 공식몰 매장안내에서 확인)',
    ],
  },

  targetUsers: {
    recommended: [
      '하프·풀 대회용 카본 레이스화를 찾는 중상급 러너',
      'PEBA 계열 레이서를 30만 원 안쪽에서 고르려는 러너',
      '국내 매장에서 먼저 신어 보고 레이스화를 고르려는 러너',
    ],
    notRecommended: [
      '아킬레스·종아리가 약한 러너 (오프셋 5mm 레이서)',
      '200g 안팎의 초경량 레이서를 원하는 러너 (공식 225g)',
      '랩 실측으로 반발을 확인하고 사고 싶은 러너 (독립 실측 없음)',
    ],
  },

  features: [
    '슈퍼폼+(PEBAX 100%) 미드솔 + 광폭 카본 플레이트(공식)',
    '270mm 225g · 오프셋 5mm · 앞꿈치 30mm(공식)',
    '넓은 전·중족부 바닥 설계, 토스프링 설계(공식)',
    '슈퍼폼 인솔 · 잘 풀리지 않는 신끈(공식)',
    '공식 추천 거리 5~42km',
  ],

  reviews: [
    {
      userType: '예상 적합 — 국내 브랜드로 첫 카본 레이스화를 고르는 러너',
      text: '첫 카본 레이스화를 국내 매장에서 신어 보고 사고 싶은 러너라면 후보가 될 수 있습니다. PEBAX 100% 미드솔과 광폭 카본 플레이트라는 구성은 해외 브랜드 슈퍼슈즈와 같은 계열이고, 정가 29.9만 원은 우리 DB의 카본 레이서 범위 중간입니다. 다만 공식 무게 225g은 같은 값대 레이서보다 무겁고, 반발 수치는 독립 측정이 없어 기록 효과를 비교할 근거가 아직 없습니다.',
    },
    {
      userType: '예상 적합 — 안정감을 중시하는 하프·풀 완주 목표 러너',
      text: '레이스 후반 착지가 흔들리는 게 걱정인 러너에게 공식 설계는 맞는 방향입니다. 프로스펙스는 전·중족부 바닥을 넓게 설계해 주행 안정감을 높였다고 설명하고, 공식 자체 등급에서도 안정성을 5단계 중 4로 표시합니다. 하지만 오프셋이 5mm로 낮아 종아리·아킬레스 부담이 커질 수 있으니, 평소 오프셋 8~10mm 신발을 신어 왔다면 대회 전에 짧은 거리부터 적응 훈련을 하는 편이 안전합니다.',
    },
    {
      userType: '예상 적합 — 인피니트 러시 전작과 개정판 사이에서 고민하는 러너',
      text: '공식몰에 전작 인피니트 러시(259,000원)와 개정판 Rev.(299,000원)가 함께 있습니다. 공식 스펙으로 보면 둘 다 오프셋 5mm·앞꿈치 30mm이고, Rev.는 미드솔을 PEBAX 100%로 바꾸고 플레이트를 광폭으로 키웠으며 무게가 230g에서 225g으로 줄었습니다. 4만 원 차이가 그만한 체감으로 이어지는지는 측정된 자료가 없어, 가격을 우선한다면 전작도 합리적인 선택지입니다.',
    },
  ],

  detailedSpecs: {
    weight: '225g (270mm, 프로스펙스 공식) — 랩 실측 없음',
    stackHeight: '뒤꿈치 35mm (추정 — 공식 표의 270mm 칸은 33mm, 240mm 칸은 35mm로 다른 모델과 반대로 적혀 있어 앞꿈치 30mm + 오프셋 5mm에 맞는 값으로 읽음) / 앞꿈치 30mm (270mm, 공식) · 240mm 앞꿈치 28.2mm',
    drop: '5mm (270mm 공식 오프셋) · 240mm 4.8mm',
    midsole: '슈퍼폼+ — PEBAX 100% (공식). 전작 인피니트 러시는 "PEBA 소재 활용" 표기',
    plate: '광폭 카본 플레이트 (공식). 전작은 "하이퍼 러쉬 대비 30% 넓어진 플레이트"로 소개',
    outsole: '공식 상세에 아웃솔 소재 표기 없음 (불명)',
    upper: '겉감·안감 폴리에스터 (공식 제품소재)',
    width: '토박스 랩 실측 없음 — 공식 폭 옵션: 단일 폭(230~290mm, 5mm 단위). 공식 사이즈 가이드의 "발 너비"(270mm 98.8mm)는 사이즈 선택용 발 치수 안내',
    durability: '350~450km (추정) — 랩 마모 측정 없음, PEBA 카본 레이서 범위로 보수 설정',
    price: '299,000원 (2026-10-20 프로스펙스 공식몰 확인) · 전작 인피니트 러시 259,000원',
    costPerKm: '약 ₩748/km (400km 추정 기준)',
    footType: '중립 · 레이스·고강도 훈련',
    landingPattern: '미드~포어풋 (오프셋 5mm, 추정)',
  },

  similarShoes: ['adidas-adios-pro-4', 'saucony-endorphin-pro-5', 'prospecs-hyper-rush-2-tempo'],
  purchaseLinks: [
    { store: '프로스펙스 공식몰', url: 'https://www.prospecs.com/product.do?cmd=getProductDetail&PROD_CD=PR0UR26F101', price: 299000, isOfficial: true },
  ],
};
