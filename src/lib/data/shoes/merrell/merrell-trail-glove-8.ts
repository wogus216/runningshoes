import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'merrell-trail-glove-8',
  slug: 'merrell-trail-glove-8',
  brand: 'Merrell',
  name: '트레일 글러브 8',
  image: '/images/shoes/merrell/trail-glove-8/side.webp',
  images: [
    '/images/shoes/merrell/trail-glove-8/side.webp',
    '/images/shoes/merrell/trail-glove-8/angle.webp',
    '/images/shoes/merrell/trail-glove-8/back.webp',
    '/images/shoes/merrell/trail-glove-8/top.webp',
    '/images/shoes/merrell/trail-glove-8/outsole.webp',
  ],
  category: '트레일',
  rating: 4,
  price: 159000,
  description:
    '머렐 베어풋 라인의 트레일 모델. 스택 15mm·드롭 0mm의 미니멀 구조에 8세대에서 Vibram TC5+ 아웃솔을 얹어, 지면 감각을 그대로 느끼며 흙길·임도를 달리는 용도에 맞춘 신발입니다.',
  oneliner: '드롭 0mm 베어풋 트레일 — 넓은 토박스 + Vibram TC5+',
  editorComment:
    '"맨발에 가까운 감각으로 산길을 달려 보고 싶다"는 러너를 위한 미니멀 트레일화입니다. RunRepeat 실측 스택은 힐·전족 모두 15.2mm, 드롭은 정확히 0.0mm로 브랜드 표기(0mm)와 일치합니다. 실측 210g으로 가볍고, 굽힘 저항 9.1N(트레일 평균 14.8N)·비틀림 7.1Nm(평균 15.7Nm)으로 발 움직임을 거의 제한하지 않습니다.\n\n8세대의 핵심 변화는 아웃솔입니다. 7세대의 자체 고무를 Vibram TC5+로 바꾸면서 접지력 계수 0.69(트레일 평균 0.68), 마모 0.8mm로 RunRepeat는 7세대 대비 마모가 거의 절반이라고 평가했습니다. 반면 충격흡수는 힐 61·전족 57 SA로 트레일 평균(122 SA)의 절반 수준이라, 돌이 많은 내리막이나 장거리에서는 발바닥으로 충격이 그대로 올라옵니다.\n\n사이즈·구매 가이드: 실측 토박스 78.3mm(트레일 평균 74.4mm)·토박스 높이 29.8mm로 앞이 넉넉해, 발볼이 넓은 한국 러너도 발가락을 펼 공간이 있습니다. 와이드 버전은 국내에 없지만 표준 폭으로 충분한 경우가 많습니다. 드롭 0mm는 종아리·아킬레스 부하가 크게 늘어나므로, 쿠션 러닝화에서 바로 넘어오면 짧은 거리부터 적응 기간을 두는 것이 전제입니다.',
  tags: ['트레일', '베어풋', '제로드롭', '경량', '넓은 발볼'],

  specs: {
    weight: 210,
    cushioning: 2,
    responsiveness: 6,
    stability: 3,
    drop: 0,
    durability: 500,
  },

  biomechanics: {
    stackHeight: { heel: 15.2, forefoot: 15.2 },
    drop: 0,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'FloatPro 폼 (EVA 계열, 얇은 단일층) · Merrell Barefoot 2 구조',
    optimalPace: '5:30-8:00 min/km (짧은 트레일·임도)',
  },

  injuryPrevention: {
    plantarFasciitis: 'warning',
    achillesTendinopathy: 'warning',
    kneeIssues: 'caution',
    shinSplints: 'warning',
  },

  koreanFootFit: {
    toBoxWidth: 'wide',
    flatFootCompatibility: 'poor',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  targetUsers: {
    recommended: [
      '베어풋·제로드롭 러닝에 이미 적응한 러너',
      '지면 감각을 느끼며 흙길·임도를 가볍게 달리고 싶은 러너',
      '발볼이 넓어 발가락이 눌리는 트레일화가 불편했던 러너',
      '발·종아리 근력 보강용 짧은 보조 러닝',
    ],
    notRecommended: [
      '쿠션 러닝화에서 바로 넘어오는 러너 (드롭 0mm 적응 필요)',
      '아킬레스·족저근막·정강이 통증 이력이 있는 러너',
      '돌이 많은 기술적 내리막·장거리 산행 (충격흡수 61 SA)',
      '평발이라 아치 지지가 필요한 러너',
    ],
  },

  features: [
    '실측 드롭 0.0mm · 스택 15.2mm (RunRepeat, 브랜드 표기 0mm와 일치)',
    '8세대에서 Vibram TC5+ 아웃솔로 교체 — 접지력 0.69, 마모 0.8mm',
    '실측 토박스 78.3mm — 트레일 평균(74.4mm)보다 넓은 앞코',
    '실측 210g 경량, 굽힘·비틀림 저항 모두 트레일 평균의 절반 수준',
    '보호용 토캡 + 버리토 텅(감싸는 텅) 구조',
  ],

  priceAnalysis: {
    msrp: 159000,
    costPerKm: 318,
    valueRating: 7,
    priceTier: 'mid',
    alternatives: ['saucony-peregrine-16', 'merrell-agility-peak-6'],
    valueAdvantages: [
      'Vibram TC5+ 아웃솔을 15만 원대에',
      '넓은 토박스로 와이드 없이도 발볼 대응',
      '흙길과 포장도로를 오가는 겸용성',
    ],
  },

  detailedSpecs: {
    weight: '210g (RunRepeat 실측, 남성 US 9) · 브랜드 공식 220g(한 짝)',
    stackHeight: '힐 15.2mm / 포어풋 15.2mm (RunRepeat 실측, 남성 US 9) · 브랜드 공식 힐 14mm(RunRepeat 인용)',
    drop: '0.0mm (RunRepeat 실측) · 브랜드 공식 0mm',
    midsole: 'FloatPro 폼 (EVA 계열) · 경도 39.1 AC(트레일 평균 38.3 AC) · 냉동 후 11% 단단해짐',
    plate: '없음',
    outsole: 'Vibram TC5+ (머렐 전용) · 러그 3.0mm · 접지력 계수 0.69 · 마모 0.8mm · 두께 1.6mm (RunRepeat 실측)',
    upper: '메시·TPU 어퍼, 버리토 텅, 보호 토캡 · 통기성 4/5 · 토박스 내구성 4/5, 힐 패딩 내구성 2/5 (RunRepeat) · 인솔 일체형(분리 불가)',
    width: '넓은 편 — RunRepeat 실측 토박스 78.3mm(남성 US 9, 트레일 평균 74.4mm), 토박스 높이 29.8mm(평균 27.0mm). 랩 본문: "We recorded 78.3 mm near the big toe, a roomy result." · 국내 와이드 버전 없음',
    durability: '400~600km (아웃솔 마모 0.8mm 실측, 아웃솔 두께 1.6mm로 얇음 — RunRepeat)',
    price: '₩159,000 (머렐 한국 공식몰 정가)',
    costPerKm: '약 ₩318/km (500km 기준)',
    footType: '중립 발 (아치 지지 없음)',
    landingPattern: 'MFS/FFS (미드·앞발 착지)',
  },

  reviews: [
    {
      userType: '예상 적합 — 베어풋 러닝에 적응한 러너의 흙길·임도',
      text: '이미 제로드롭·얇은 밑창에 익숙한 러너라면 이 신발의 성격이 가장 잘 맞습니다. 스택 15.2mm에 굽힘·비틀림 저항이 트레일 평균의 절반 수준이라 발이 노면 굴곡을 그대로 읽고, 210g으로 가벼워 발놀림이 빠릅니다. Vibram TC5+ 접지력 0.69는 트레일 평균 수준이라 마른 흙길·임도에서는 부족함이 적습니다. 다만 충격흡수가 61 SA로 낮아 돌이 많은 내리막이나 10km를 넘는 거리는 발바닥 피로가 빠르게 쌓이는 조건입니다.',
    },
    {
      userType: '예상 적합 — 쿠션화에서 처음 넘어오는 러너는 조건부',
      text: '쿠션 러닝화(드롭 8~10mm, 스택 30mm 이상)에서 바로 넘어오면 종아리와 아킬레스에 걸리는 부하가 크게 늘어납니다. 처음 몇 주는 1~3km 걷기·조깅부터 시작해 거리를 조금씩 늘리는 적응 기간이 전제이고, 아킬레스·족저근막·정강이 통증 이력이 있다면 피하는 편이 안전합니다. 아치를 받쳐 주는 구조가 없어 평발이라 지지가 필요한 경우에도 맞지 않습니다.',
    },
    {
      userType: '예상 적합 — 발볼이 넓어 트레일화 앞코가 늘 답답했던 러너',
      text: '실측 토박스 78.3mm는 트레일 평균(74.4mm)보다 3.9mm 넓고 토박스 높이도 29.8mm로 여유가 있어, 다른 트레일화에서 새끼발가락이 눌렸던 발볼 넓은 러너에게 맞는 형태입니다. 와이드 버전은 국내에 없지만 표준 폭으로 충분한 경우가 많습니다. 반대로 발볼이 좁다면 앞쪽이 헐렁해 내리막에서 발이 앞으로 밀릴 수 있으니 끈을 단단히 조이는 편이 낫습니다.',
    },
  ],

  similarShoes: ['merrell-agility-peak-6', 'saucony-peregrine-16'],
};
