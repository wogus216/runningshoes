import type { Shoe } from '@/types/shoe';

// 2026-10-20 등록 — 출처: 데카트론 한국 공식몰 상품 8970093(남성) 상세, 킵런 공식 제품 페이지
// (kiprun.com/en-GB/c/lp/kipsummit-max-maximum-comfort), RunRepeat 랩
// https://runrepeat.com/kiprun-kipsummit-max (2026-04, 남성 US 9 측정, 트레일 평균 기준).
export const shoe: Shoe = {
  id: 'kiprun-kipsummit-max',
  slug: 'kiprun-kipsummit-max',
  brand: 'Kiprun',
  name: '킵서밋 맥스',
  image: '/images/shoes/kiprun/kipsummit-max/side.webp',
  images: [
    '/images/shoes/kiprun/kipsummit-max/side.webp',
    '/images/shoes/kiprun/kipsummit-max/angle.webp',
    '/images/shoes/kiprun/kipsummit-max/detail.webp',
    '/images/shoes/kiprun/kipsummit-max/top.webp',
    '/images/shoes/kiprun/kipsummit-max/outsole.webp',
  ],
  category: '트레일',
  rating: 4,
  price: 169000,
  description:
    '데카트론 러닝 브랜드 킵런의 쿠션 트레일화. SCF ATPU 기반 Fastech+ 미드솔과 Vibram 메가그립 아웃솔을 16.9만 원에 담았고, RunRepeat 실측 에너지 리턴이 힐 71.7%·전족부 73.8%로 트레일 평균(56.7%·59.7%)을 크게 넘습니다. 대신 토박스가 69.0mm로 좁습니다.',
  oneliner: '16.9만 원 Vibram 트레일화 — 반발 73.8%, 앞코는 좁다',
  editorComment:
    '"20만 원 아래에서 Vibram 아웃솔에 쿠션 좋은 트레일화"를 찾는 러너에게 수치로 가장 설명이 잘 되는 신발입니다. 데카트론 한국 공식몰 정가 169,000원으로 우리 DB의 페레그린 16(179,000원)·스피드고트 7(219,000원)보다 낮고, RunRepeat 실측 에너지 리턴 힐 71.7%·전족부 73.8%는 랩이 "이보다 비싼 몇 안 되는 트레일화에서만 본 수치"라고 적은 값입니다. 충격흡수도 힐 137 SA(트레일 평균 122)로 넉넉하고, 무게는 275g(남성 US 9 실측)으로 트레일 평균 285g보다 가볍습니다. 힐 쪽 미드솔 폭 96.6mm(평균 90.4mm)로 바닥이 넓어 임도·완만한 산길에서 안정적인 구조입니다. 다만 랩은 "진짜 맥스 쿠션은 아니고 일부에겐 단단하게 느껴질 수 있다"고 봤고, 기술 지형 점수는 46으로 낮아 바위·급경사 위주 코스보다는 임도·혼합 노면용입니다.\n\n사이즈·구매 가이드: 발볼 넓은 한국 러너에게는 가장 큰 걸림돌이 폭입니다. 엄지 끝 지점 토박스가 69.0mm로 트레일 평균(74.4mm)보다 5.4mm 좁고, 발 가장 넓은 부위도 93.3mm(평균 95.7mm)로 좁으며, 랩은 "넓은 발에는 맞지 않는다(poor match for wide feet)"고 적었습니다. 한국 공식몰은 남성용 "보통 발볼" 한 가지만 팔고 와이드가 없습니다. 공식 드롭은 6mm지만 랩 실측은 8.1mm였습니다.',
  tags: ['트레일', '비브람', '가성비 트레일', '울트라', '임도'],

  specs: {
    weight: 275,
    cushioning: 8,
    responsiveness: 8,
    stability: 8,
    drop: 8,
    durability: 500,
  },

  biomechanics: {
    stackHeight: { heel: 36, forefoot: 27 },
    drop: 8,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Fastech+ (SCF 공정 100% ATPU)',
    optimalPace: '5:30-8:00 min/km (임도·혼합 트레일 기준)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'good',
    wideOptions: false,
    winterCompatibility: 'excellent',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: [
      '20만 원 아래에서 Vibram 아웃솔 쿠션 트레일화를 찾는 러너',
      '로드에서 임도·근교 산길로 넘어가는 발볼 보통~좁은 러너',
      '트레일 하프~울트라 완주형 장거리 훈련',
    ],
    notRecommended: [
      '발볼이 넓은 러너 (토박스 69.0mm, 와이드 없음)',
      '바위·급경사 위주의 기술 트레일 (랩 기술 지형 점수 46)',
      '아주 푹신한 맥스 쿠션을 기대하는 러너',
    ],
  },

  features: [
    'Fastech+ 미드솔 — SCF 공정 100% ATPU, 이전 킵서밋 대비 에너지 리턴 +21% (공식)',
    'Vibram 메가그립 아웃솔 · 공식 4mm 러그(랩 실측 3.5mm)',
    '에너지 리턴 힐 71.7%·전족부 73.8% (RunRepeat 실측, 트레일 평균 56.7%·59.7%)',
    '275g (남성 US 9 실측) — 트레일 평균 285g보다 가벼움',
    '169,000원 · 남성 255~300mm',
  ],

  priceAnalysis: {
    msrp: 169000,
    streetPrice: 169000,
    costPerKm: 338,
    valueRating: 9,
    priceTier: 'mid',
    alternatives: ['saucony-peregrine-16', 'mizuno-neo-daichi-10', 'hoka-speedgoat-7'],
    valueAdvantages: [
      '169,000원에 Vibram 메가그립 아웃솔 — 페레그린 16(179,000원)·스피드고트 7(219,000원)보다 낮은 정가',
      '에너지 리턴 힐 71.7%·전족부 73.8%로 트레일 평균을 15%p 안팎 상회 (RunRepeat 실측)',
      '토박스·힐 패딩 내구성 4/5 (RunRepeat, 평균 3.1)',
    ],
  },

  detailedSpecs: {
    weight: '275g (RunRepeat 실측, 남성 US 9) · 데카트론 한국 공식 표기는 268g(특성표)과 "265mm 사이즈 기준 280g"(상세 설명)이 함께 적혀 있음',
    stackHeight: '힐 35.5mm / 포어풋 27.4mm (RunRepeat 실측) · 킵런 공식 38.5/32.5mm',
    drop: '8.1mm (RunRepeat 실측) / 6mm (공식)',
    midsole: 'Fastech+ — 킵런 자체 SCF(초임계 발포) 공정 100% ATPU. 경도 43.6 AC(트레일 평균 38.3)로 단단한 편, 추위 경화 9%(평균 22%) (RunRepeat 실측)',
    plate: '없음',
    outsole: 'Vibram 메가그립 · 러그 3.5mm 실측(공식 4mm), 아웃솔 2.0mm, 드레멜 마모 0.8mm(트레일 평균 0.9mm) (RunRepeat 실측)',
    upper: '메시 어퍼 + 세미 거싯 텅 (폴리에스터 71%·TPU 9%·열가소성 폴리에틸렌 20%, 공식)',
    width: '토박스(엄지 끝 지점) 69.0mm — RunRepeat 남성 US 9 실측, 트레일 평균 74.4mm보다 5.4mm 좁음 → narrow. 랩 본문 "coming in at just 69.0 mm. In our view, this makes the shoe a poor match for wide feet". 발 최대폭 부위 93.3mm(평균 95.7mm). 한국 공식몰 남성 "보통 발볼"만 판매(와이드 없음)',
    durability: '450~550km (추정 — km 단위 테스트 없음. 아웃솔 마모 0.8mm 실측은 트레일 평균 수준)',
    price: '169,000원 (2026-10-20 데카트론 한국 공식몰 확인, 할인 없음)',
    costPerKm: '약 ₩338/km (500km 기준)',
    footType: '중립 발',
    landingPattern: '힐·미드풋 착지 (힐 미드솔 폭 96.6mm, 평균 90.4mm)',
  },

  reviews: [
    {
      userType: '예상 적합 — 20만 원 아래 첫 Vibram 트레일화를 찾는 러너',
      text: '로드 러닝을 하다 근교 산길·임도로 넘어가며 첫 본격 트레일화를 찾는다면 가격 대비 근거가 많은 후보입니다. 정가 169,000원에 Vibram 메가그립 아웃솔이 들어갔고, 에너지 리턴 힐 71.7%·전족부 73.8%는 트레일 평균(56.7%·59.7%)보다 크게 높습니다. 힐 쪽 미드솔 폭이 96.6mm로 넓어 착지 때 흔들림이 적은 구조입니다. 다만 앞코가 좁아 발볼 보통~좁은 러너에게 맞을 가능성이 큽니다.',
    },
    {
      userType: '예상 적합 — 트레일 하프~울트라 완주가 목표인 러너',
      text: '긴 거리를 꾸준한 페이스로 가는 트레일 대회 준비에는 맞는 성격입니다. 힐 충격흡수 137 SA(트레일 평균 122)로 쿠션 여유가 있고 275g으로 평균보다 가벼워, 후반 다리 부담을 줄이는 쪽입니다. 랩도 장거리에 편하다고 평가했습니다. 반면 미드솔 경도가 43.6 AC로 평균(38.3 AC)보다 단단하고 랩 기술 지형 점수가 46이라, 바위·급경사가 많은 국내 산악 코스보다는 임도·흙길 비중이 큰 코스에 용도가 맞습니다.',
    },
    {
      userType: '예상 적합 — 발볼이 넓다면 비추천에 가깝다',
      text: '발볼이 넓은 러너에게는 맞지 않을 가능성이 높습니다. 엄지 끝 지점 토박스 69.0mm는 트레일 평균(74.4mm)보다 5.4mm 좁고, 발 가장 넓은 부위도 93.3mm로 평균(95.7mm)보다 좁아 앞발 전체가 조이는 핏입니다. 랩도 넓은 발에는 맞지 않는다고 적었습니다. 한국 공식몰에는 와이드가 없으므로, 발볼이 넓다면 토박스가 표준 이상인 다른 트레일화를 먼저 비교하는 편이 낫습니다.',
    },
  ],

  similarShoes: ['saucony-peregrine-16', 'mizuno-neo-daichi-10', 'hoka-speedgoat-7'],
  purchaseLinks: [
    {
      store: '데카트론 공식몰',
      url: 'https://www.decathlon.co.kr/p/%EB%82%A8%EC%84%B1-%ED%8A%B8%EB%A0%88%EC%9D%BC%EB%9F%AC%EB%8B%9D%ED%99%94-%ED%82%B5%EC%84%9C%EB%B0%8B-%EB%A7%A5%EC%8A%A4-kiprun-8970093.html',
      price: 169000,
      isOfficial: true,
    },
  ],
};
