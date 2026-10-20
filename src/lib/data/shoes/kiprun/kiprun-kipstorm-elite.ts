import type { Shoe } from '@/types/shoe';

// 2026-10-20 등록 — 출처: 데카트론 한국 공식몰 상품 8961380(남성)·8970785(여성) 상세,
// RunRepeat 랩 https://runrepeat.com/kiprun-kipstorm-elite (2026-06, 남성 US 9 측정).
export const shoe: Shoe = {
  id: 'kiprun-kipstorm-elite',
  slug: 'kiprun-kipstorm-elite',
  brand: 'Kiprun',
  name: '킵스톰 엘리트',
  image: '/images/shoes/kiprun/kipstorm-elite/side.webp',
  images: [
    '/images/shoes/kiprun/kipstorm-elite/side.webp',
    '/images/shoes/kiprun/kipstorm-elite/detail.webp',
    '/images/shoes/kiprun/kipstorm-elite/top.webp',
    '/images/shoes/kiprun/kipstorm-elite/outsole.webp',
  ],
  category: '레이싱',
  rating: 4,
  price: 269000,
  description:
    '데카트론 러닝 브랜드 킵런의 카본 레이싱화. SCF ATPU 컵솔에 SCF PEBA 인서트를 넣은 Fastech+ 미드솔과 카본 플레이트를 썼고, RunRepeat 실측 힐 SA 148·전족부 에너지 리턴 74.8%로 충격흡수와 반발 모두 평균을 크게 웃돕니다. 정가 269,000원.',
  oneliner: '26.9만 원 데카트론 슈퍼슈즈 — 반발 74.8%, 대신 토박스 69.7mm로 좁다',
  editorComment:
    '"30만 원 넘는 슈퍼슈즈는 부담스러운데 카본화는 신어 보고 싶다"는 러너에게 들어온 새 선택지입니다. 데카트론 한국 공식몰 정가 269,000원으로 우리 DB의 엔돌핀 프로 4와 같고, 메타스피드 스카이+(329,000원)·베이퍼플라이 4(309,000원)보다 4만~6만 원 낮습니다. RunRepeat 실측으로 힐 충격흡수 148 SA(평균 131), 전족부 에너지 리턴 74.8%(평균 61.5%)라 쿠션과 반발은 슈퍼슈즈 기준에서도 충분하고, 아웃솔 드레멜 마모 0.4mm(평균 1.1mm)는 랩이 슈퍼슈즈 중 최상위권이라고 적은 수치입니다. 반대로 무게는 218g(남성 US 9 실측)으로 랩도 베이퍼플라이 4·메타스피드 스카이 도쿄 같은 최상위 레이서보다 "눈에 띄게 무겁다"고 평가했고, 반발도 최상위 슈퍼슈즈에는 조금 못 미친다고 봤습니다.\n\n사이즈·구매 가이드: 발볼 넓은 한국 러너가 가장 먼저 확인할 부분은 토박스입니다. 엄지 끝 지점 폭이 69.7mm로 랩 평균(73.2mm)보다 3.5mm 좁고, 랩 본문도 "noticeably tapered toebox"라고 적었습니다. 발 가장 넓은 부위(중족골)는 95.6mm로 평균(95.2mm) 수준이라, 앞발 끝이 눌리는지가 관건입니다. 한국 공식몰은 "보통 발볼" 한 가지 폭만 팔고 와이드가 없으니, 발볼이 넓다면 매장에서 마라톤 거리 기준으로 신어 보고 고르는 편이 안전합니다. 힐 쪽 미드솔 폭이 81.6mm(평균 91.1mm)로 좁고 힐 카운터도 2/5로 부드러워, 뒤꿈치로 크게 착지하는 러너는 후반 흔들림을 염두에 두세요.',
  tags: ['레이싱', '카본 플레이트', '슈퍼슈즈', 'PEBA', '가성비 카본'],

  specs: {
    weight: 218,
    cushioning: 9,
    responsiveness: 8,
    stability: 6,
    drop: 7,
    durability: 350,
  },

  biomechanics: {
    stackHeight: { heel: 38, forefoot: 31 },
    drop: 7,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'Fastech+ (SCF ATPU 컵솔 + SCF PEBA 인서트)',
    optimalPace: '3:30-5:00 min/km (레이스·템포)',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'caution',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'poor',
    wideOptions: false,
    winterCompatibility: 'excellent',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: [
      '30만 원 아래에서 첫 카본 레이싱화를 찾는 서브4~서브3:30 목표 러너',
      '하프·풀코스 레이스와 템포 훈련을 한 켤레로 겸하려는 러너',
      '레이싱화 아웃솔이 빨리 닳는 것이 부담스러운 러너',
    ],
    notRecommended: [
      '발볼이 넓은 러너 (토박스 69.7mm, 와이드 없음)',
      '200g 이하 최경량 레이서를 원하는 러너',
      '뒤꿈치 착지가 강하고 후반 안정성이 필요한 러너',
    ],
  },

  features: [
    'Fastech+ 미드솔 — SCF ATPU(밀도 0.11) 컵솔 + SCF PEBA(밀도 0.10) 인서트 (공식)',
    '카본 플레이트 + 로커 지오메트리',
    '전족부 에너지 리턴 74.8%·힐 SA 148 (RunRepeat 실측)',
    '아웃솔 드레멜 마모 0.4mm — 랩 평균 1.1mm (RunRepeat 실측)',
    '218g (남성 US 9 실측) · 269,000원',
  ],

  priceAnalysis: {
    msrp: 269000,
    streetPrice: 269000,
    costPerKm: 769,
    valueRating: 8,
    priceTier: 'premium',
    alternatives: ['saucony-endorphin-pro-4', 'mizuno-hyperwarp-pro', 'puma-deviate-nitro-elite-3'],
    valueAdvantages: [
      '우리 DB 카본 레이싱화 중 낮은 축의 정가 269,000원 (메타스피드 스카이+ 329,000원·베이퍼플라이 4 309,000원)',
      '아웃솔 마모 0.4mm로 레이싱화치고 오래 쓰는 아웃솔 (RunRepeat 실측)',
      '레이스와 템포 훈련 겸용 — RunRepeat 용도 점수 레이스 88·템포 83',
    ],
  },

  detailedSpecs: {
    weight: '218g (RunRepeat 실측, 남성 US 9) · 데카트론 한국 공식 표기 남성 215g·여성 185g(사이즈 미표기)',
    stackHeight: '힐 38.1mm / 포어풋 31.4mm (RunRepeat 실측) · 공식 39/34mm',
    drop: '6.7mm (RunRepeat 실측) / 5mm (공식)',
    midsole: 'Fastech+ — SCF ATPU(밀도 0.11) 컵솔 + SCF PEBA(밀도 0.10) 인서트. 경도 34.5 AC(평균 35.4), 추위 경화 7%(평균 22%) (RunRepeat 실측)',
    plate: '카본 플레이트',
    outsole: '합성고무 아웃솔 2.5mm(평균 3.1mm), 드레멜 마모 0.4mm(평균 1.1mm) (RunRepeat 실측)',
    upper: '니트 어퍼 + 상단 고정 세미 거싯 텅 (TPU 39%·폴리에스터 61%, 공식)',
    width: '토박스(엄지 끝 지점) 69.7mm — RunRepeat 남성 US 9 실측, 같은 랩 평균 73.2mm보다 3.5mm 좁음 → narrow. 랩 본문 "noticeably tapered toebox, coming in at just 69.7 mm". 발 최대폭 부위 95.6mm(평균 95.2mm). 한국 공식몰 발볼 "보통 발볼"만 판매(와이드 없음)',
    durability: '300~400km (추정 — km 단위 테스트 없음. 아웃솔 마모 0.4mm 실측은 우수하나 PEBA 미드솔 수명은 별개)',
    price: '269,000원 (2026-10-20 데카트론 한국 공식몰 확인, 할인 없음)',
    costPerKm: '약 ₩769/km (350km 기준)',
    footType: '중립 발',
    landingPattern: '미드풋·포어풋 착지 유리 (힐 미드솔 폭 81.6mm, 평균 91.1mm)',
  },

  reviews: [
    {
      userType: '예상 적합 — 첫 카본화를 30만 원 아래에서 고르는 서브4 목표 러너',
      text: '풀코스 서브4나 하프 1시간 50분 안쪽을 노리며 첫 카본화를 고민한다면 가격 대비 근거가 많은 후보입니다. 정가 269,000원으로 30만 원대 슈퍼슈즈보다 4만~6만 원 낮으면서, 전족부 에너지 리턴 74.8%(평균 61.5%)·힐 충격흡수 148 SA(평균 131)로 반발과 쿠션 실측치가 모두 평균을 크게 넘습니다. 다만 218g은 최상위 레이서보다 무거운 편이라, 기록 몇 초가 아쉬운 엘리트급보다는 첫 슈퍼슈즈 입문 쪽에 맞을 가능성이 큽니다.',
    },
    {
      userType: '예상 적합 — 레이스와 템포 훈련을 한 켤레로 겸하려는 러너',
      text: '대회용 한 켤레를 훈련에도 섞어 쓰려는 경우 아웃솔 수치가 의미가 있습니다. RunRepeat 드레멜 마모가 0.4mm로 랩 평균(1.1mm)의 절반 아래라, 레이싱화 아웃솔이 금방 닳는 문제는 덜할 것으로 보입니다. 랩의 용도 점수도 레이스 88·템포 83으로 템포까지는 높게 봤습니다. 반면 데일리 점수는 47로 낮아 회복주·조깅용으로는 맞지 않습니다. 미드솔(PEBA) 수명은 아웃솔과 따로 줄어드니 수명은 300~400km 정도로 보수적으로 잡는 편이 안전합니다.',
    },
    {
      userType: '예상 적합 — 발볼이 넓다면 신중히, 앞발 끝이 눌리는지부터',
      text: '발볼이 넓은 러너에게는 조건부입니다. 엄지 끝 지점 토박스가 69.7mm로 랩 평균(73.2mm)보다 3.5mm 좁고, 랩도 마라톤에서는 이 좁은 앞코가 문제가 될 수 있다고 적었습니다. 발 가장 넓은 부위 폭은 95.6mm로 평균 수준이라, 중족골보다는 발가락 쪽이 붓는 후반 구간에서 압박이 생길 수 있습니다. 한국 공식몰에는 와이드가 없으므로, 풀코스용이라면 매장에서 신어 보고 앞발 끝 여유를 확인한 뒤 고르는 쪽이 현실적입니다.',
    },
  ],

  similarShoes: ['saucony-endorphin-pro-4', 'mizuno-hyperwarp-pro', 'puma-deviate-nitro-elite-3'],
  purchaseLinks: [
    {
      store: '데카트론 공식몰',
      url: 'https://www.decathlon.co.kr/p/%EB%82%A8%EC%84%B1-%EC%B9%B4%EB%B3%B8-%EB%A0%88%EC%9D%B4%EC%8B%B1%ED%99%94-%ED%82%B5%EC%8A%A4%ED%86%B0-%EC%97%98%EB%A6%AC%ED%8A%B8-kiprun-8961380.html',
      price: 269000,
      isOfficial: true,
    },
  ],
};
