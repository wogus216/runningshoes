import type { Shoe } from '@/types/shoe';

// 2026-10-09 등록 — 출처: 미즈노 한국 공식몰 상품 12206·12207(일반), 12204(GTX WIDE) 상세 이미지 스펙표,
// 유럽 공식몰(emea.mizuno.com) 네오 다이치 10·웨이브 다이치 9 페이지. RunRepeat·BITR·RTR·DOR 은 이 모델과
// 직전 모델 모두 미게시(대조군 정상). 점수는 운영자 승인(2026-10-09)한 '보수적 추정' — 동급 트레일화
// 4종(엑소더스 울트라 4·스피드고트 7·페레그린 16·히에로 v9) 중앙값에서 쿠션·반발 1점 하향.
export const shoe: Shoe = {
  id: 'mizuno-neo-daichi-10',
  slug: 'mizuno-neo-daichi-10',
  brand: 'Mizuno',
  name: '네오 다이치 10',
  image: '/images/shoes/mizuno/neo-daichi-10/side.webp',
  images: [
    '/images/shoes/mizuno/neo-daichi-10/side.webp',
    '/images/shoes/mizuno/neo-daichi-10/angle.webp',
    '/images/shoes/mizuno/neo-daichi-10/detail.webp',
    '/images/shoes/mizuno/neo-daichi-10/back.webp',
    '/images/shoes/mizuno/neo-daichi-10/top.webp',
    '/images/shoes/mizuno/neo-daichi-10/outsole.webp',
  ],
  category: '트레일',
  rating: 4,
  status: 'new',
  price: 169000,
  description:
    '미즈노의 트레일 러닝화. 직전 웨이브 다이치 9의 웨이브 구조를 빼고 ENERZY NXT 폼을 솔 전체에 깔아 스택을 3mm 높였고, Vibram 메가그립 아웃솔과 전족부 락 플레이트를 이어받았습니다. 발볼 2E 일반판 169,000원, 고어텍스 3E 와이드판 209,000원.',
  oneliner: '16.9만 원의 Vibram 트레일화 — 웨이브 대신 ENERZY NXT, 스택 +3mm',
  editorComment:
    '2026년 여름 한국에 나온 신상으로, RunRepeat 랩 데이터가 이 모델과 직전 모델(웨이브 다이치 9) 모두 없어 아래 점수는 미즈노 공식 스펙과 비슷한 사양의 트레일화를 기준으로 한 추정치입니다. 확인된 사실부터 보면 — 미즈노 한국 공식 스펙은 27.0cm 한쪽 약 290g, 굽높이 30.5~36.5mm, 드롭 6.0mm이고, 미드솔은 ENERZY NXT(한국 공식 표기 "EVA 버전"), 아웃솔은 Vibram 메가그립에 다방향 4.0mm 러그, 전족부에는 돌 충격을 줄이는 락 플레이트가 들어 있습니다. 미즈노는 전작 대비 스택을 3mm 높였다고 밝혔습니다.\n\n이 신발의 자리는 가격에서 분명해집니다. 우리 DB에서 무게·두께가 비슷한 트레일화(페레그린 16 179,000원, 히에로 v9 189,000원, 엑소더스 울트라 4·스피드고트 7 219,000원)보다 싸면서 같은 Vibram 메가그립을 씁니다. 드롭 6mm에 두께도 로드 데일리화와 비슷해, 로드 러너가 근교 산길로 넘어갈 때 발밑 이질감이 작은 편입니다. 반대로 반발이 얼마나 되는지는 실측이 없어 알 수 없습니다 — 빠른 트레일 레이스용으로 고를 근거는 아직 없습니다.\n\n사이즈·구매 가이드: 일반판은 미즈노 발볼 표기 2E(보통)이고, 3E가 필요하면 고어텍스 어퍼의 GTX WIDE(209,000원, 약 300g, 295 사이즈까지)를 골라야 합니다. 와이드가 방수판에만 있어 여름에 발볼 넓은 러너에게는 선택지가 좁습니다. 토박스 폭은 랩 실측이 없어 mm로 비교할 수 없습니다.',
  tags: ['트레일', '비브람', '락 플레이트', '입문 트레일'],

  specs: {
    weight: 290,
    cushioning: 7,
    responsiveness: 5,
    stability: 7,
    drop: 6,
    durability: 500,
  },

  biomechanics: {
    stackHeight: { heel: 36.5, forefoot: 30.5 },
    drop: 6,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'MIZUNO ENERZY NXT (한국 공식 표기 "EVA 버전") + 전족부 락 플레이트',
    optimalPace: '6:00-9:00 min/km (트레일 기준, 추정)',
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
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },

  priceAnalysis: {
    msrp: 169000,
    streetPrice: 169000,
    costPerKm: 338,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['saucony-peregrine-16', 'new-balance-hierro-v9', 'hoka-speedgoat-6'],
    valueAdvantages: [
      '비교한 동급 트레일화 4종(페레그린 16·히에로 v9·엑소더스 울트라 4·스피드고트 7)보다 낮은 정가(169,000원)에 Vibram 메가그립 아웃솔',
      '전족부 락 플레이트 — 돌·뿌리 충격 완화(미즈노 공식 설명)',
      '드롭 6mm·굽높이 30.5~36.5mm로 로드 데일리화와 비슷한 발밑 감각',
      '3E 와이드는 고어텍스 방수판(GTX WIDE, 209,000원)으로 별도 판매',
    ],
  },

  targetUsers: {
    recommended: [
      '로드 러닝에서 근교 산길·트레일로 처음 넘어가는 러너',
      '20만 원 아래에서 Vibram 아웃솔 트레일화를 찾는 러너',
      '젖은 노면·겨울 산행을 겸할 방수 와이드(GTX WIDE)가 필요한 발볼 넓은 러너',
    ],
    notRecommended: [
      '반발이 검증된 빠른 트레일 레이스화를 찾는 러너 (랩 데이터 없음)',
      '여름용 비방수 와이드가 필요한 러너 (3E는 고어텍스판뿐)',
      '아스팔트 비중이 큰 러너 (4.0mm 다방향 러그는 산길용 설계)',
    ],
  },

  features: [
    'MIZUNO ENERZY NXT 미드솔 — 전작의 웨이브 구조를 빼고 솔 전체에 적용, 스택 3mm 증가(공식)',
    'Vibram 메가그립 아웃솔 + 다방향 4.0mm 러그',
    '전족부 락 플레이트',
    '엔지니어드 우븐 어퍼 + 슈레이스 테이프·고정 밴드',
    '27.0cm 약 290g · 굽높이 30.5~36.5mm · 드롭 6.0mm · 169,000원',
  ],

  reviews: [
    {
      userType: '예상 적합 — 로드에서 트레일로 처음 넘어가는 러너',
      text: '주 2~3회 로드를 달리다 근교 산길로 범위를 넓히려는 러너에게 맞을 가능성이 있습니다. 드롭 6.0mm에 굽높이 30.5~36.5mm로 로드 데일리화와 비슷한 두께라 발밑 감각이 크게 달라지지 않고, Vibram 메가그립과 4.0mm 다방향 러그가 흙길·젖은 바위에서 접지를 맡습니다. 전족부 락 플레이트가 돌 충격을 줄이는 구조입니다. 다만 반발과 충격흡수는 랩 실측이 없어 비교할 수 없고, 정가 169,000원은 동급 트레일화보다 1만~5만 원 낮습니다.',
    },
    {
      userType: '예상 적합 — 비·겨울 산행을 겸하는 발볼 넓은 러너',
      text: '발볼이 넓어 3E가 필요하고 젖은 노면에서도 신을 신발을 찾는다면 GTX WIDE 쪽이 맞을 수 있습니다. 고어텍스 어퍼(미즈노 표기 "생활 방수")에 발볼 3E, 사이즈는 295까지이고 무게는 약 300g으로 일반판보다 10g 무겁습니다. 가격은 209,000원으로 일반판보다 4만 원 높습니다. 방수 어퍼는 여름에 통기가 떨어지는 편이라, 여름 위주라면 2E 일반판을 매장에서 신어 보고 고르는 쪽이 현실적입니다.',
    },
    {
      userType: '예상 적합 — 기록보다 완주가 목표인 트레일 입문 대회 참가자',
      text: '10~20km 트레일 대회를 처음 준비하는 러너에게 무난한 선택일 가능성이 있습니다. 290g은 가볍지 않지만, 두께와 락 플레이트는 긴 내리막의 발바닥 충격을 줄이도록 설계된 구성입니다. 반대로 기록을 노리는 빠른 레이스라면 반발이 검증되지 않은 이 신발보다 랩 데이터가 있는 페레그린 16(278g) 쪽이 판단 근거가 많습니다. 내구성도 실측이 없어 500km는 동급 트레일화 범위 하단으로 잡은 추정입니다.',
    },
  ],

  detailedSpecs: {
    weight: '약 290g (27.0cm 한쪽, 미즈노 한국 공식) — 랩 실측 없음',
    stackHeight: '힐 36.5mm / 포어풋 30.5mm (추정 — 공식 표는 굽높이 30.5~36.5mm만 표기, 두 값의 차이가 드롭 6.0mm와 같아 힐·전족부로 읽음)',
    drop: '6.0mm (미즈노 한국 공식 OFFSET)',
    midsole: 'MIZUNO ENERZY NXT — 한국 공식 "EVA 버전". 전작 웨이브 다이치 9의 웨이브 구조 제거, 스택 3mm 증가(공식). 유럽 공식은 질소 주입 상단 + EVA 하단으로 적어 표기가 엇갈림',
    plate: '전족부 락 플레이트 (유럽 공식몰 "Rock Plate in the forefoot")',
    outsole: 'Vibram 메가그립 · 다방향 4.0mm 러그',
    upper: '엔지니어드 우븐 (갑피 폴리에스터 60%·TPEE 40%) + 슈레이스 테이프·고정 밴드',
    width: '랩 토박스 측정 없음(RunRepeat 미게시) — 미즈노 공식 발볼 표기 2E(보통). 3E는 GTX WIDE(고어텍스, 209,000원)에서만',
    durability: '450~550km (추정) — 랩 마모 측정 없음, 동급 트레일화 범위 하단으로 보수 설정',
    price: '169,000원 (2026-10-09 미즈노 한국 공식몰 확인) · GTX WIDE 209,000원',
    costPerKm: '약 ₩338/km (500km 추정 기준)',
    footType: '중립 / 트레일',
  },

  similarShoes: ['saucony-xodus-ultra-4', 'hoka-speedgoat-7', 'saucony-peregrine-16'],
  // 쿠팡: 품번 J1GM268053(한국 공식 일반판 레이즌 색상) 141,480원 = 정가 84% (2026-10-09 상품 페이지 제목 대조)
  purchaseLinks: [{ store: '쿠팡', url: 'https://link.coupang.com/a/hHrtD4T1Vs' }],
};
