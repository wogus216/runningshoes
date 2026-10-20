import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'saucony-paramount-max',
  slug: 'saucony-paramount-max',
  brand: 'Saucony',
  name: '파라마운트 맥스',
  image: '/images/shoes/saucony/paramountmax/side.jpg',
  images: ['/images/shoes/saucony/paramountmax/side.jpg'],
  category: '쿠션화',
  rating: 4.4,
  status: 'new',
  price: 259000,
  description:
    '써코니가 "브랜드 역사상 가장 풍부한 쿠셔닝"으로 소개한 2026년 신작. 엔돌핀 엘리트 계열의 incrediRUN 폼을 데일리용으로 조정해 풀렝스로 깔고, 넓은 베이스와 높은 사이드월로 안정감을 더했습니다.',
  oneliner: 'incrediRUN 풀렝스 — 실측 힐 165 SA, 대신 좁은 토박스',
  editorComment:
    '파라마운트 맥스는 써코니가 "가장 풍부한 쿠셔닝"이라는 표현을 직접 쓴 모델입니다. 엔돌핀 엘리트에 들어가던 incrediRUN을 데일리용으로 살짝 단단하고 내구성 있게 조정해 미드솔 전체에 깔았고, 인솔에도 같은 폼을 썼습니다. 스택은 브랜드 공식 43/37mm·드롭 6mm, RunRepeat 실측(남성 US 9 기준) 42.1/36.4mm·드롭 5.7mm로 앞뒤가 모두 두툼하고, 충격흡수는 힐 165 SA·전족부 147 SA로 평균(131 SA)을 크게 웃돕니다.\n\n무게는 브랜드 공식 302g이지만 RunRepeat 실측은 272g으로, 트라이엄프 24(실측 258g)보다 14g 무겁습니다. 가격은 259,000원으로 트라이엄프 24보다 5만 원 위입니다. 실측 스택도 파라마운트 맥스(힐 42.1mm·전족부 36.4mm)가 트라이엄프 24(41.6mm·33.6mm)보다 두꺼워, "제일 푹신한 걸 하나만"이라면 수치상 파라마운트 맥스 쪽입니다 — 대신 토박스가 좁습니다.\n\n사이즈·구매 가이드: 전족부 미드솔 폭은 RunRepeat 실측 129.7mm(평균 115.1mm)로 넓지만, 토박스는 70.4mm(평균 73.2mm)로 랩이 "confirming a narrow toebox"라고 평가했고 와이드 옵션도 없어 발볼이 넓다면 시착이 필수입니다. 아웃솔 마모는 실측 0.8mm(평균 1.1mm)로 평균보다 적었고, 통기성은 구식 측정 1/5(평균 3.6)로 낮아 한여름에는 더울 수 있습니다. 국내 공식몰 유통은 4개 컬러웨이이고 2026-10-20 기준 할인은 없습니다.',
  tags: ['쿠션화', '맥스쿠션', 'incrediRUN', '회복주'],

  specs: {
    weight: 272,
    cushioning: 10,
    responsiveness: 10,
    stability: 6,
    drop: 6,
    durability: 550,
  },

  biomechanics: {
    stackHeight: { heel: 42.1, forefoot: 36.4 },
    drop: 5.7,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'incrediRUN 풀렝스 (데일리 튜닝) + incrediRUN 인솔',
    optimalPace: '5:30-8:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'good',
    kneeIssues: 'excellent',
    shinSplints: 'excellent',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'good',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 259000,
    streetPrice: 259000,
    costPerKm: 471,
    valueRating: 6,
    priceTier: 'premium',
    alternatives: ['saucony-triumph-24', 'saucony-hurricane-26', 'saucony-endorphin-trainer'],
    valueAdvantages: [
      '브랜드가 "역사상 가장 풍부한 쿠셔닝"으로 포지셔닝한 최상급',
      '엔돌핀 엘리트 계열 incrediRUN을 데일리용으로 조정해 풀렝스 적용',
      '실측 전족 36.4mm·힐 42.1mm — 써코니 로드 라인 중 가장 두꺼운 축(RunRepeat)',
      '넓은 플랫폼 + 높은 사이드월로 맥스쿠션치고 안정적',
    ],
  },

  targetUsers: {
    recommended: [
      '회복주·장거리 전용 쿠션화를 찾는 러너',
      '무릎·정강이 부담이 커 최대 쿠션이 필요한 러너',
      '2시간 이상 장시간 러닝을 자주 하는 러너',
    ],
    notRecommended: [
      '발볼이 넓은 러너 (토박스 70.4mm·와이드 없음)',
      '지지가 필요한 과내전 러너 (RunRepeat은 허리케인 26 권장)',
      '젖은 노면 접지를 중시하는 러너 (CoF 0.50, 평균 0.53)',
      '가성비 우선 러너 (259,000원, 할인 없음)',
    ],
  },

  features: [
    '써코니 공식 "브랜드 역사상 가장 풍부한 쿠셔닝"',
    'incrediRUN 풀렝스 미드솔 + incrediRUN 인솔 — 엘리트 계열 폼의 데일리 튜닝',
    '스택 브랜드 공식 43/37mm · 드롭 6mm (RunRepeat 실측 42.1/36.4mm · 5.7mm)',
    '넓은 베이스 + 높은 사이드월 + 분할 설계 미드솔로 착지 안정',
    '무게 브랜드 공식 302g · RunRepeat 실측 272g · 국내 259,000원',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 85,
      text: 'incrediRUN을 데일리로 내린 것이 이 모델의 정체성입니다. 엔돌핀 엘리트에서 쓰던 폼을 데일리용으로 조정해 미드솔 전체에 깔았고, 인솔까지 같은 폼입니다. RunRepeat 실측으로 충격흡수는 힐 165 SA·전족부 147 SA(평균 131 SA), 에너지 리턴은 힐 72.7%·전족부 80.3%, 경도는 28.3 AC(평균 35.4 AC)라 부드러우면서 반발이 큰 성격이 수치로 확인됩니다. 무게는 브랜드 공식 302g이지만 실측은 272g으로, 랩도 "without an excessive weight penalty"라고 평가했습니다. 아웃솔 마모도 실측 0.8mm(평균 1.1mm)로 평균보다 적었습니다. 약점은 접지력(CoF 0.50, 평균 0.53)과 통기성(구식 측정 1/5)이고, 토박스가 70.4mm로 좁아 발볼이 넓다면 맞지 않을 수 있습니다.',
    },
    {
      userType: '트라이엄프 24와 비교 — 최고 쿠션의 정의가 다르다',
      text: '"써코니에서 제일 푹신한 것"을 RunRepeat 실측으로 비교하면 파라마운트 맥스 쪽입니다. 스택은 힐 42.1mm·전족부 36.4mm로 트라이엄프 24(41.6mm·33.6mm)보다 두껍고, 충격흡수도 힐 165 SA로 트라이엄프 24(152 SA)보다 높습니다. 드롭은 5.7mm vs 8.0mm로 파라마운트 맥스가 낮고, 무게는 272g vs 258g으로 14g 차이입니다. 가격은 259,000원 vs 209,000원. 정리하면 파라마운트 맥스는 "앞뒤 모두 두툼하고 쿠션이 최대인 쪽", 트라이엄프 24는 "뒤꿈치가 상대적으로 높고 조금 가벼운 쪽"입니다. 토박스는 둘 다 좁은 편(70.4mm vs 71.4mm)이라 발볼이 넓다면 와이드 버전이 있는 트라이엄프 24가 선택지가 넓습니다.',
    },
    {
      userType: '예상 적합 — 무릎·정강이 부담이 크고 쿠션을 최우선하는 중립 러너',
      text: '충격 보호를 최우선으로 두는 중립 러너에게 맞을 가능성이 높습니다. 힐 165 SA·전족부 147 SA(RunRepeat 실측)는 평균(131 SA)을 크게 웃돌고, 전족부 에너지 리턴 80.3%라 느린 조깅에서도 반발이 남습니다. RunRepeat은 여러 페이스에서의 활용도도 좋게 봤지만("versatility across different paces"), 폼이 28.3 AC로 매우 부드러워 지지가 필요한 러너에게는 허리케인 26을 권했습니다. 토박스는 70.4mm로 좁고 와이드가 없어 발볼이 넓다면 맞지 않을 수 있고, 통기성이 낮아(구식 측정 1/5) 한여름 장시간 러닝에는 불리할 수 있습니다.',
    },
  ],

  detailedSpecs: {
    weight: '272g (RunRepeat 실측, 남성 US 9 기준) · 브랜드 공식 302g(남성)/250g(여성 US 8)',
    stackHeight: '힐 42.1mm / 포어풋 36.4mm (RunRepeat 실측) · 브랜드 공식 43/37mm',
    drop: '5.7mm (RunRepeat 실측) · 브랜드 공식 6mm',
    midsole: 'incrediRUN 풀렝스 + incrediRUN 인솔 · 경도 28.3 AC · 에너지 리턴 힐 72.7%·전족부 80.3% · 충격흡수 힐 165 SA·전족부 147 SA (RunRepeat 실측)',
    plate: '없음',
    outsole: '러버 · 마모 0.8mm(평균 1.1mm) · 접지력 CoF 0.50(평균 0.53) (RunRepeat 실측)',
    upper: '엔지니어드 메쉬 + 몰드형 힐컵',
    width: '좁음 — RunRepeat 실측 토박스 70.4mm(평균 73.2mm), 랩: "We measured just 70.4 mm near the big toe, confirming a narrow toebox. This pronounced taper limits natural toe splay" · 전족부 미드솔 폭 129.7mm · 국내 와이드 옵션 없음',
    durability: '550km',
    price: '259,000원 (2026-10-20 써코니코리아 공식몰 확인, 할인 없음)',
    costPerKm: '약 ₩471/km (550km 기준)',
    footType: '중립 / 좁은~표준 발볼',
    landingPattern: '미드풋~힐스트라이크',
  },

  similarShoes: ['saucony-triumph-24', 'saucony-hurricane-26', 'saucony-endorphin-trainer'],
  relatedPosts: [
    { slug: 'saucony-paramount-max-review', title: '파라마운트 맥스 후기 — 302g, 호카 본디 9와 같은 체급' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=써코니+파라마운트+맥스' }],
};
