import type { Shoe } from '@/types/shoe';

// 2026-10-20 등록 — 출처: 언더아머 한국 공식 온라인스토어 상품 3027205(유니섹스) 상세,
// RunRepeat 랩 https://runrepeat.com/under-armour-velociti-elite-2 (2025-03, 업데이트 2025-06).
export const shoe: Shoe = {
  id: 'under-armour-velociti-elite-2',
  slug: 'under-armour-velociti-elite-2',
  brand: 'Under Armour',
  name: '벨로시티 엘리트 2',
  image: '/images/shoes/underarmour/velociti-elite-2/side.webp',
  images: [
    '/images/shoes/underarmour/velociti-elite-2/side.webp',
    '/images/shoes/underarmour/velociti-elite-2/detail.webp',
    '/images/shoes/underarmour/velociti-elite-2/angle.webp',
    '/images/shoes/underarmour/velociti-elite-2/top.webp',
    '/images/shoes/underarmour/velociti-elite-2/outsole.webp',
  ],
  category: '레이싱',
  rating: 4,
  price: 299000,
  description:
    '언더아머의 카본 레이싱화. 전족부 Pebax 층과 UA Flow(고무 아웃솔 없는 EVA) 층 사이에 풀렝스 카본 플레이트를 넣었습니다. RunRepeat 실측 에너지 리턴 힐 72.3%·전족부 73.3%에 토박스 74.0mm로 레이싱화치고 앞코가 여유롭지만, 257g으로 무겁고 아웃솔 마모가 빠릅니다.',
  oneliner: '앞코 여유 있는 카본화 — 대신 257g에 아웃솔 마모 6.2mm',
  editorComment:
    '"슈퍼슈즈는 다 앞코가 좁던데 발볼 넓어도 신을 만한 카본화가 있나?"라는 질문에 수치로 답이 되는 몇 안 되는 신발입니다. RunRepeat 실측 토박스(엄지 끝 지점)가 74.0mm로 랩 평균(73.2mm)보다 넓고, 랩은 "대부분의 슈퍼슈즈보다 확실히 여유롭다", "데일리 트레이너에 가까운 공간"이라고 적었습니다. 다만 토박스 높이가 24.9mm로 낮아 위아래로는 조이는 핏입니다. 에너지 리턴은 힐 72.3%·전족부 73.3%로 높지만, 랩은 플레이트 아래 EVA(UA Flow) 층이 반발을 둔하게 만든다고 봤습니다.\n\n약점도 분명합니다. 무게 257g은 랩이 "테스트한 레이싱화 중 가장 무거운 축"이라고 적은 수치이고, 고무 아웃솔 대신 UA Flow 폼이 바닥에 닿는 구조라 드레멜 마모가 6.2mm로 매우 큽니다. 힐 쪽 미드솔 폭도 73.5mm로 좁아 뒤꿈치 착지에는 불리합니다. 한국 공식 정가는 299,000원이고, 2026-10-20 확인 시점에는 30% 할인된 209,300원에 팔리고 있었습니다(색상 1종). 정가 기준으로는 아디오스 프로 4·로켓 X 3와 같은 가격대라 가성비가 낮고, 할인가로 앞코 여유가 필요한 러너에게 의미가 생깁니다.',
  tags: ['레이싱', '카본 플레이트', '슈퍼슈즈', 'Pebax', '넓은 토박스'],

  specs: {
    weight: 257,
    cushioning: 8,
    responsiveness: 8,
    stability: 5,
    drop: 6,
    durability: 250,
  },

  biomechanics: {
    stackHeight: { heel: 38, forefoot: 32 },
    drop: 6,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'Pebax + UA Flow (EVA) 듀얼 레이어',
    optimalPace: '3:45-5:00 min/km (레이스·템포)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'caution',
    kneeIssues: 'caution',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'poor',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: [
      '앞코가 좁은 슈퍼슈즈에서 발가락 압박을 겪은 러너',
      '미드풋 착지로 하프·풀코스 레이스를 뛰는 러너',
      '더운 날 레이스에서 통기성을 중시하는 러너',
    ],
    notRecommended: [
      '200g대 초반 경량 레이서를 원하는 러너 (257g)',
      '레이스화를 훈련에도 오래 섞어 쓰려는 러너 (아웃솔 마모 6.2mm)',
      '뒤꿈치 착지가 강한 러너 (힐 미드솔 폭 73.5mm)',
    ],
  },

  features: [
    'Pebax + UA Flow 듀얼 폼 사이 풀렝스 카본 플레이트',
    'UA Flow — 고무 아웃솔 없이 폼이 바닥을 겸하는 구조 (공식)',
    '토박스 74.0mm — 랩 평균 73.2mm보다 넓음 (RunRepeat 실측)',
    '에너지 리턴 힐 72.3%·전족부 73.3% (RunRepeat 실측)',
    '워프 2.0 어퍼 · TPE 깔창 · 정가 299,000원',
  ],

  priceAnalysis: {
    msrp: 299000,
    streetPrice: 209300,
    costPerKm: 1196,
    valueRating: 5,
    priceTier: 'super-premium',
    alternatives: ['saucony-endorphin-pro-4', 'kiprun-kipstorm-elite', 'adidas-adios-pro-4'],
    valueAdvantages: [
      '슈퍼슈즈 중 드문 표준 이상 토박스(74.0mm, RunRepeat 실측)',
      '2026-10-20 한국 공식몰 할인가 209,300원(정가 대비 30%↓) — 할인가 기준 카본화 중 낮은 축',
      '통기성 5/5 (RunRepeat)',
    ],
  },

  detailedSpecs: {
    weight: '257g (RunRepeat 실측, 측정 사이즈 페이지 미표기 — 랩 방법론상 남성 US 9) · 언더아머 한국 공식 표기 232.47g(사이즈 미표기)',
    stackHeight: '힐 37.9mm / 포어풋 31.9mm (RunRepeat 실측) · 한국 공식 스택 표기 없음',
    drop: '6.0mm (RunRepeat 실측) · 한국 공식 "오프셋 8mm" · RunRepeat가 옮긴 브랜드 스펙 2mm — 출처마다 다름',
    midsole: '전족부 Pebax 층 + UA Flow(EVA) 층 듀얼 구성, 경도 21.5 HA (RunRepeat 실측). 랩: "the EVA foam beneath the plate dulls energy return"',
    plate: '풀사이즈 탄소 섬유 플레이트 (공식) — 랩 "quite stiff"',
    outsole: 'UA Flow (고무 아웃솔 없음) — 드레멜 마모 6.2mm, 경도 48.0 HC (RunRepeat 실측)',
    upper: '워프 2.0 어퍼 + TPE 깔창 (공식) — 통기성 5/5 (RunRepeat)',
    width: '토박스(엄지 끝 지점) 74.0mm — RunRepeat 실측(측정 사이즈 페이지 미표기, 랩 방법론상 남성 US 9), 같은 랩 평균 73.2mm보다 0.8mm 넓음 → standard. 랩 본문 "more accommodating compared to most super shoes", "more in line with a daily trainer". 발 최대폭 부위 94.9mm(평균 95.2mm), 토박스 높이 24.9mm로 낮음. 한국 공식 핏 "레귤러", 와이드 없음',
    durability: '200~300km (추정 — km 단위 테스트 없음. 고무 없는 UA Flow 바닥의 드레멜 마모 6.2mm 실측은 매우 큼)',
    price: '정가 299,000원 · 2026-10-20 언더아머 한국 공식몰 판매가 209,300원(30% 할인, 색상 102만)',
    costPerKm: '약 ₩1,196/km (정가·250km 기준)',
    footType: '중립 발',
    landingPattern: '미드풋 착지 (힐 미드솔 폭 73.5mm로 좁음)',
  },

  reviews: [
    {
      userType: '예상 적합 — 슈퍼슈즈 앞코 압박이 고민인 발볼 넓은 러너',
      text: '레이싱화를 신으면 후반에 발가락이 눌렸던 러너라면 이 신발의 토박스 수치가 의미가 있습니다. 엄지 끝 지점 폭 74.0mm는 랩 평균(73.2mm)보다 넓고, 랩도 대부분의 슈퍼슈즈보다 여유롭다고 적었습니다. 다만 토박스 높이가 24.9mm로 낮아 발등·발가락 위쪽은 조이는 편이고, 한국 공식몰에는 와이드가 없습니다. 폭은 맞는데 높이가 문제인 발이라면 매장에서 확인이 필요합니다.',
    },
    {
      userType: '예상 적합 — 미드풋 착지로 하프를 달리는 러너',
      text: '전족부에 Pebax가 몰려 있고 에너지 리턴이 전족부 73.3%라, 미드풋·포어풋으로 착지하는 러너에게 맞는 구조입니다. 반대로 힐 쪽 미드솔 폭이 73.5mm로 좁고 힐 카운터도 1/5로 매우 부드러워, 뒤꿈치로 크게 착지하는 러너는 후반 흔들림이 생길 수 있습니다. 257g으로 무거운 편이라 기록 단축 폭보다는 하프 정도 거리에서 앞코 여유를 우선하는 선택에 가깝습니다.',
    },
    {
      userType: '예상 적합 — 레이스 전용으로만 쓸 경우',
      text: '훈련까지 겸하려는 러너에게는 맞지 않을 가능성이 큽니다. 고무 아웃솔 없이 UA Flow 폼이 바닥에 닿는 구조라 드레멜 마모가 6.2mm로 매우 크고, 수명은 200~300km 정도로 보수적으로 잡는 것이 안전합니다. 정가 299,000원 기준 km당 약 1,196원으로 비싸고, 할인가 209,300원일 때도 레이스 전용으로 아껴 쓰는 전제가 맞습니다.',
    },
  ],

  similarShoes: ['saucony-endorphin-pro-4', 'kiprun-kipstorm-elite', 'adidas-adios-pro-4'],
  purchaseLinks: [
    {
      store: '언더아머 공식몰',
      url: 'https://www.underarmour.co.kr/ko-kr/p/%EC%8B%A0%EB%B0%9C/ua_%EB%B2%A8%EB%A1%9C%EC%8B%9C%ED%8B%B0_%EC%97%98%EB%A6%AC%ED%8A%B8_2/3027205.html',
      price: 209300,
      isOfficial: true,
    },
  ],
};
