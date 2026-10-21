import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'merrell-agility-peak-6',
  slug: 'merrell-agility-peak-6',
  brand: 'Merrell',
  name: '어질리티 피크 6',
  image: '/images/shoes/merrell/agility-peak-6/side.webp',
  images: [
    '/images/shoes/merrell/agility-peak-6/side.webp',
    '/images/shoes/merrell/agility-peak-6/angle.webp',
    '/images/shoes/merrell/agility-peak-6/back.webp',
    '/images/shoes/merrell/agility-peak-6/top.webp',
    '/images/shoes/merrell/agility-peak-6/outsole.webp',
  ],
  category: '트레일',
  rating: 4,
  price: 199000,
  description:
    '머렐의 주력 트레일러닝화. 5mm Vibram Megagrip 트랙션 러그와 전족부 록플레이트로 바위·진흙이 섞인 험한 산길에 맞춘 모델이며, 국내 공식몰에 와이드 버전이 함께 판매됩니다.',
  oneliner: '5mm 메가그립 러그 + 록플레이트 — 험로 접지 우선형',
  editorComment:
    '"한국 산처럼 바위와 흙이 번갈아 나오는 길에서 미끄러지지 않는 트레일화"를 찾는 러너에게 맞는 성격입니다. RunRepeat 실측 러그 깊이 5.0mm(트레일 평균 3.5mm)에 Vibram Megagrip 접지력 계수 0.64, 아웃솔 마모 0.6mm(평균 0.9mm)로 그립과 내구성이 이 신발의 중심입니다. 전족부 록플레이트와 넓은 힐(미드솔 폭 97.7mm, 평균 90.4mm) 덕에 기술 구간에서 자세가 안정적인 편입니다.\n\n반대로 쿠션과 반발은 약점입니다. FloatPro(EVA 계열) 미드솔의 충격흡수는 힐 116·전족 85 SA로 트레일 평균(122 SA)보다 낮고, 에너지 리턴은 힐 41.9%·전족 47.0%로 평균(59.7%)에 크게 못 미칩니다. 드롭도 실측 11.5mm로 높아 뒤꿈치 착지 러너에게 맞고, 미드풋 착지 러너에겐 앞이 낮게 느껴질 수 있습니다.\n\n사이즈·구매 가이드: 실측 토박스 70.5mm(트레일 평균 74.4mm)로 앞이 좁아지는 형태라, 발볼이 넓은 한국 러너는 국내 공식몰의 와이드 버전(같은 199,000원)을 먼저 보는 편이 맞습니다. 사이즈는 RunRepeat 집계상 정사이즈입니다. 반발과 쿠션까지 원한다면 같은 브랜드의 MTL 스피드아크 피크, 낮은 드롭의 민첩함을 원한다면 써코니 페레그린 16이 대안입니다.',
  tags: ['트레일', '비브람', '록플레이트', '와이드', '기술적 지형'],

  specs: {
    weight: 278,
    cushioning: 7,
    responsiveness: 5,
    stability: 7,
    drop: 11.5,
    durability: 600,
  },

  biomechanics: {
    stackHeight: { heel: 36.1, forefoot: 24.6 },
    drop: 11.5,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'FloatPro 폼 (EVA 계열) + 전족부 록플레이트',
    optimalPace: '6:00-8:30 min/km (기술적 트레일)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'caution',
    shinSplints: 'caution',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'good',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: [
      '바위·진흙이 섞인 기술적 산길을 주로 달리는 트레일 러너',
      '젖은 노면 접지력이 최우선인 러너',
      '뒤꿈치 착지 위주라 높은 드롭이 편한 러너',
      '발볼이 넓어 트레일화 와이드가 필요한 러너(와이드 버전)',
    ],
    notRecommended: [
      '통통 튀는 반발을 원하는 러너 (에너지 리턴 41.9~47.0%)',
      '발볼이 넓은데 표준 폭을 고르려는 러너',
      '50km 이상 울트라에서 충격 보호가 필요한 러너',
      '한여름 장시간 산행 (통기성 62 BR, 평균 71 BR)',
    ],
  },

  features: [
    'Vibram Megagrip + 트랙션 러그 5.0mm (RunRepeat 실측, 트레일 평균 3.5mm)',
    '전족부 록플레이트로 날카로운 돌 보호',
    '아웃솔 마모 0.6mm — 트레일 평균(0.9mm)보다 덜 닳음',
    '실측 드롭 11.5mm(브랜드 표기 8mm) — 뒤꿈치 착지형',
    '국내 공식몰 와이드 버전 판매',
  ],

  priceAnalysis: {
    msrp: 199000,
    costPerKm: 332,
    valueRating: 7,
    priceTier: 'mid',
    alternatives: ['saucony-peregrine-16', 'new-balance-hierro-v9', 'hoka-speedgoat-7'],
    valueAdvantages: [
      'Vibram Megagrip 아웃솔을 20만 원 안쪽에서',
      '와이드 버전이 같은 가격으로 국내 판매',
      '아웃솔 마모가 적어 험로 위주 사용에서도 오래 씀',
    ],
  },

  detailedSpecs: {
    weight: '278g (RunRepeat 실측, 남성 US 9) · 브랜드 공식 285g(한 짝)',
    stackHeight: '힐 36.1mm / 포어풋 24.6mm (RunRepeat 실측, 남성 US 9) · 브랜드 공식 스택 38mm',
    drop: '11.5mm (RunRepeat 실측) · 브랜드 공식 8mm',
    midsole: 'FloatPro 폼 (EVA 계열) · 경도 36.7 AC(트레일 평균 38.3 AC) · 전 구간 FlexConnect 굴곡 홈',
    plate: '전족부 록플레이트',
    outsole: 'Vibram Megagrip + Traction Lug · 러그 5.0mm · 접지력 계수 0.64 · 마모 0.6mm (RunRepeat 실측)',
    upper: '메시·합성·TPU 어퍼, 벨로우즈 텅 · 통기성 62 BR(트레일 평균 71 BR) · 토박스 내구성 3/5, 힐 패딩 내구성 2/5 (RunRepeat)',
    width: '좁은 편 — RunRepeat 실측 토박스 70.5mm(남성 US 9, 트레일 평균 74.4mm), 토박스 높이 25.7mm(평균 27.0mm). 랩 본문: "the tapered toebox can be restrictive … runners who prefer a roomier forefoot or who have wide feet may struggle here" · 국내 공식몰 와이드 버전 판매',
    durability: '500~700km (아웃솔 마모 0.6mm 실측, 힐 패딩 2/5 — RunRepeat)',
    price: '₩199,000 (머렐 한국 공식몰 정가, 표준·와이드 동일)',
    costPerKm: '약 ₩332/km (600km 기준)',
    footType: '중립 발',
    landingPattern: 'RFS (뒤꿈치 착지)',
  },

  reviews: [
    {
      userType: '예상 적합 — 바위·진흙이 섞인 기술적 산길',
      text: '돌계단과 젖은 흙길이 번갈아 나오는 산길이 주력이라면 이 신발의 장점이 가장 잘 드러나는 조건입니다. 실측 러그 깊이 5.0mm는 트레일 평균(3.5mm)보다 깊어 흙과 낙엽을 파고들고, Vibram Megagrip 접지력 계수 0.64는 젖은 바위에서도 기대할 만한 수준입니다. 전족부 록플레이트가 날카로운 돌을 막아 주고 힐 폭이 넓어 내리막 착지가 안정적인 편입니다. 다만 폼의 반발이 낮아 평탄한 임도에서 페이스를 올리는 용도에는 둔하게 느껴질 수 있습니다.',
    },
    {
      userType: '예상 적합 — 발볼이 넓은 트레일 입문자',
      text: '표준 버전은 실측 토박스가 70.5mm로 트레일 평균(74.4mm)보다 3.9mm 좁고 앞으로 갈수록 좁아지는 형태라, 발볼이 넓다면 장시간 착용 시 새끼발가락 쪽 압박이 생길 수 있습니다. 이 경우 국내 공식몰에서 같은 가격으로 판매하는 와이드 버전을 고르는 편이 맞습니다. 드롭이 11.5mm로 높아 로드 러닝화(보통 8~10mm)에서 넘어오는 입문자도 종아리 부담 변화가 적다는 점은 장점입니다.',
    },
    {
      userType: '예상 적합 — 무릎이 예민한 장거리 러너는 조건부',
      text: '충격흡수가 힐 116·전족 85 SA로 트레일 평균(122 SA)보다 낮고 에너지 리턴도 41.9~47.0%에 그쳐, 하프 이상 장거리에서 다리에 쌓이는 피로를 덜어 주는 성격은 아닙니다. 무릎이나 정강이에 통증 이력이 있다면 30km 이내의 기술 구간 위주로 쓰고, 긴 거리는 쿠션이 두꺼운 모델과 나눠 쓰는 편이 안전합니다. 반대로 높은 드롭은 아킬레스·종아리 부하를 줄이는 쪽이라, 그쪽 이력이 있는 러너에게는 부담이 적습니다.',
    },
  ],

  similarShoes: ['saucony-peregrine-16', 'hoka-speedgoat-7', 'salomon-pulsar'],
};
