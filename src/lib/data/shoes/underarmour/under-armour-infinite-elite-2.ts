import type { Shoe } from '@/types/shoe';

// 2026-10-20 등록 — 출처: 언더아머 한국 공식 온라인스토어 상품 3028169(남성)·3028178(여성) 상세,
// 언더아머 미국 공식 상품 페이지(3028169), RunRepeat 랩 https://runrepeat.com/under-armour-infinite-elite-2
// (2025-08, 업데이트 2026-02).
export const shoe: Shoe = {
  id: 'under-armour-infinite-elite-2',
  slug: 'under-armour-infinite-elite-2',
  brand: 'Under Armour',
  name: '인피니트 엘리트 2',
  image: '/images/shoes/underarmour/infinite-elite-2/side.webp',
  images: [
    '/images/shoes/underarmour/infinite-elite-2/side.webp',
    '/images/shoes/underarmour/infinite-elite-2/detail.webp',
    '/images/shoes/underarmour/infinite-elite-2/angle.webp',
    '/images/shoes/underarmour/infinite-elite-2/top.webp',
    '/images/shoes/underarmour/infinite-elite-2/outsole.webp',
  ],
  category: '쿠션화',
  rating: 4,
  price: 199000,
  description:
    '언더아머의 맥시멀 쿠션 데일리화. 풀렝스 UA HOVR+ 미드솔로 RunRepeat 실측 힐 충격흡수 144 SA·에너지 리턴 힐 72.6%·전족부 74.8%를 기록했고, 힐 미드솔 폭 103.9mm의 넓은 바닥으로 높은 스택에도 안정적입니다. 토박스는 좁은 편입니다.',
  oneliner: '쿠션 144 SA·반발 74.8%에 안정적인 맥시멀 — 앞코는 좁다',
  editorComment:
    '"쿠션 많고 통통 튀면서 흔들리지 않는 데일리화"를 찾는 러너에게 수치가 고르게 받쳐 주는 신발입니다. RunRepeat 실측 힐 충격흡수 144 SA(평균 131)·에너지 리턴 힐 72.6%·전족부 74.8%로 쿠션과 반발 모두 평균을 크게 넘고, 랩의 데일리 러닝 점수 86·안정성 점수 85로 높습니다. 힐 스택 40.1mm인데도 힐 쪽 미드솔 폭이 103.9mm로 넓어, 랩은 "높은 스택에도 뒤꿈치 착지에 매우 안정적"이라고 적었습니다. 아웃솔도 두께 4.0mm에 드레멜 마모 0.7mm로 오래 가는 편입니다. 한국 공식 정가는 199,000원으로 님버스 28과 같고, 2026-10-20 확인 시점에는 30% 할인된 139,300원이었습니다.\n\n사이즈·구매 가이드: 발볼 넓은 한국 러너는 폭을 먼저 확인하세요. 엄지 끝 지점 토박스가 71.9mm로 랩 평균(73.2mm)보다 1.3mm 좁고, 랩 본문은 "toebox feels snug", "좁은 발이나 꽉 잡아 주는 핏을 원하는 러너에게 더 맞다"고 적었습니다. 1세대의 니트 대신 신축성이 적은 엔지니어드 메시로 바뀐 영향이라는 설명입니다. 언더아머 미국 공식 Q&A는 이 모델이 표준 폭만 있고 와이드가 없다고 밝혔고, 한국 공식몰도 "레귤러" 핏 한 가지입니다. 288g(실측)으로 가볍지 않고 굽힘이 거의 없는 단단한 구조라 빠른 페이스보다 장거리·회복주용입니다.',
  tags: ['쿠션화', '맥시멀', 'HOVR+', '데일리', '장거리'],

  specs: {
    weight: 288,
    cushioning: 9,
    responsiveness: 9,
    stability: 8,
    drop: 7,
    durability: 600,
  },

  biomechanics: {
    stackHeight: { heel: 40, forefoot: 33 },
    drop: 7,
    carbonPlate: false,
    plateType: null,
    midsoleType: '풀사이즈 UA HOVR+',
    optimalPace: '5:30-7:00 min/km (데일리·장거리)',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'good',
    kneeIssues: 'excellent',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'good',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: [
      '주 30km 이상 장거리·회복주용 쿠션 데일리화를 찾는 러너',
      '맥시멀 쿠션의 흔들림이 불안했던 뒤꿈치 착지 러너',
      '발볼 보통~좁은 편으로 꽉 잡아 주는 핏을 선호하는 러너',
    ],
    notRecommended: [
      '발볼이 넓은 러너 (토박스 71.9mm·랩 "snug", 와이드 없음)',
      '가벼운 템포·인터벌 겸용화를 원하는 러너 (288g, 템포 점수 51)',
      '유연하게 굽는 신발을 선호하는 러너',
    ],
  },

  features: [
    '풀사이즈 UA HOVR+ 미드솔 (공식)',
    '힐 충격흡수 144 SA·에너지 리턴 힐 72.6%·전족부 74.8% (RunRepeat 실측)',
    '힐 미드솔 폭 103.9mm — 높은 스택에도 안정적 (RunRepeat 실측)',
    '아웃솔 4.0mm·드레멜 마모 0.7mm (RunRepeat 실측)',
    '엔지니어드 메시 어퍼 + 3D 몰딩 삭라이너 · 정가 199,000원',
  ],

  priceAnalysis: {
    msrp: 199000,
    streetPrice: 139300,
    costPerKm: 332,
    valueRating: 8,
    priceTier: 'premium',
    alternatives: ['asics-gel-nimbus-28', 'new-balance-1080-v15', 'saucony-triumph-24'],
    valueAdvantages: [
      '정가 199,000원으로 님버스 28과 같은 가격에 에너지 리턴 72.6~74.8% (RunRepeat 실측)',
      '아웃솔 마모 0.7mm로 오래 쓰는 구조 — 정가·600km 기준 km당 약 332원',
      '2026-10-20 한국 공식몰 할인가 139,300원(30%↓)',
    ],
  },

  detailedSpecs: {
    weight: '288g (RunRepeat 실측, 측정 사이즈 페이지 미표기 — 랩 방법론상 남성 US 9) · 언더아머 한국 공식 남성 306g·여성 240.97g(사이즈 미표기)',
    stackHeight: '힐 40.1mm / 포어풋 33.1mm (RunRepeat 실측) · RunRepeat가 옮긴 브랜드 스펙 36/28mm',
    drop: '7.0mm (RunRepeat 실측) / 8mm (한국·미국 공식 오프셋)',
    midsole: '풀사이즈 UA HOVR+ — 경도 35.0 AC, 추위에서 경도 변화 "Small" (RunRepeat)',
    plate: '없음',
    outsole: '경량 고무 아웃솔(분할형) 4.0mm, 드레멜 마모 0.7mm (RunRepeat 실측)',
    upper: '엔지니어드 메시 어퍼 + 3D 몰딩 삭라이너 (공식) — 통기성 4/5 (RunRepeat)',
    width: '토박스(엄지 끝 지점) 71.9mm — RunRepeat 실측(측정 사이즈 페이지 미표기, 랩 방법론상 남성 US 9), 같은 랩 평균 73.2mm보다 1.3mm 좁음. 랩 본문 "The upper lacks stretch and the toebox feels snug", "a better option for narrow-footed runners or those who prefer a snug, secure fit" → narrow. 발 최대폭 부위 95.0mm(평균 95.2mm). 언더아머 미국 공식 Q&A "standard width and do not come in wide", 한국 공식 핏 "레귤러"',
    durability: '550~650km (추정 — km 단위 테스트 없음. 아웃솔 두께 4.0mm·마모 0.7mm 실측은 우수)',
    price: '정가 199,000원 · 2026-10-20 언더아머 한국 공식몰 판매가 139,300원(30% 할인)',
    costPerKm: '약 ₩332/km (정가·600km 기준)',
    footType: '중립 발',
    landingPattern: '뒤꿈치·미드풋 착지 (힐 미드솔 폭 103.9mm)',
  },

  reviews: [
    {
      userType: '예상 적합 — 장거리·회복주용 쿠션화를 찾는 러너',
      text: '주말 장거리와 평일 회복주를 한 켤레로 소화하려는 러너에게 맞는 성격입니다. 힐 충격흡수 144 SA로 쿠션이 넉넉하고, 에너지 리턴이 힐 72.6%·전족부 74.8%라 쿠션화치고 처지지 않습니다. 랩의 데일리 러닝 점수도 86으로 높습니다. 아웃솔 마모가 0.7mm에 그쳐 마일리지를 많이 쌓아도 바닥이 오래 갈 가능성이 큽니다. 다만 288g이라 페이스를 올리는 날에는 무겁게 느껴질 수 있습니다.',
    },
    {
      userType: '예상 적합 — 맥시멀 쿠션의 흔들림이 걱정인 뒤꿈치 착지 러너',
      text: '높은 쿠션화를 신으면 발목이 흔들려 불안했던 러너에게 근거가 있는 선택입니다. 힐 스택이 40.1mm로 높지만 힐 쪽 미드솔 폭이 103.9mm로 넓어, 랩은 뒤꿈치 착지에 매우 안정적이라고 적었고 안정성 점수도 85입니다. 평발이라도 과내전 교정 장치가 필요한 정도가 아니라면 넓은 바닥이 도움이 될 수 있습니다. 교정이 필요한 과내전이라면 안정화를 따로 보는 편이 맞습니다.',
    },
    {
      userType: '예상 적합 — 발볼이 넓다면 신어 보고 결정',
      text: '발볼이 넓은 러너에게는 조건부입니다. 엄지 끝 지점 토박스가 71.9mm로 평균보다 1.3mm 좁고, 랩은 신축성이 적은 메시 때문에 앞코가 꽉 끼는 느낌이라고 적었습니다. 와이드 버전이 없다고 언더아머가 밝혔으므로, 발볼이 넓다면 매장에서 장거리 후반 발 붓기를 감안해 신어 보는 편이 안전합니다. 같은 가격대에서 토박스 표준인 님버스 28과 비교해 보는 것도 방법입니다.',
    },
  ],

  similarShoes: ['asics-gel-nimbus-28', 'new-balance-1080-v15', 'saucony-triumph-24'],
  purchaseLinks: [
    {
      store: '언더아머 공식몰',
      url: 'https://www.underarmour.co.kr/ko-kr/p/%EC%8B%A0%EB%B0%9C/ua_%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8A%B8_%EC%97%98%EB%A6%AC%ED%8A%B8_2/3028169.html',
      price: 139300,
      isOfficial: true,
    },
  ],
};
