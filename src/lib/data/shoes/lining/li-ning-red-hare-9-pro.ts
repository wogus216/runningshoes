import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'li-ning-red-hare-9-pro',
  slug: 'li-ning-red-hare-9-pro',
  brand: 'Li-Ning',
  name: '레드헤어 9 프로',
  image: '/images/shoes/lining/red-hare-9-pro/side.webp',
  images: [
    '/images/shoes/lining/red-hare-9-pro/side.webp',
    '/images/shoes/lining/red-hare-9-pro/front.webp',
    '/images/shoes/lining/red-hare-9-pro/angle.webp',
    '/images/shoes/lining/red-hare-9-pro/top.webp',
    '/images/shoes/lining/red-hare-9-pro/outsole.webp',
  ],
  category: '데일리',
  rating: 4.5,
  status: 'new',
  price: 140000,
  description:
    '2레이어 Boom 폼과 TPU 지지편을 얹은 라이닝의 가성비 데일리 트레이너입니다. 흔히 "카본 버전"으로 불리지만 실제론 카본이 아닙니다.',
  oneliner: '10만 원대 데일리 트레이너 — "9 Ultra의 카본 버전"이 아니라, 낮고 빠른 가성비 트레이너',
  tags: ['데일리', '데일리 트레이너', '가성비', 'Boom', '중국 러닝화', '템포', '체력검정', '마라톤 훈련'],

  specs: {
    weight: 222,
    cushioning: 7,
    responsiveness: 7,
    stability: 6,
    drop: 8,
    durability: 600,
  },

  biomechanics: {
    stackHeight: {
      heel: 36,
      forefoot: 28,
    },
    drop: 8,
    carbonPlate: false,
    plateType: 'flat',
    midsoleType: '2레이어 Boom (초임계 발포)',
    optimalPace: '4:30-6:00 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'fair',
    wideOptions: false,
    winterCompatibility: 'fair',
    summerCompatibility: 'fair',
  },

  targetUsers: {
    recommended: [
      '주 4~5회 중강도 일상 훈련(이지~템포)을 소화할 다재다능한 데일리화를 찾는 러너',
      '체력검정·트랙 훈련·마라톤 훈련용 서브 슈즈가 필요한 러너',
      '10만 원대로 호카 마하·노바블라스트급 데일리 퍼포먼스를 원하는 입문~중급 러너',
      '발볼이 보통 이하이고 중립 주법인 러너',
    ],
    notRecommended: [
      '발볼이 넓은 러너 (좁은 라스트, 와이드 옵션 없음)',
      '실제 레이스용 카본 슈퍼슈즈를 대체하려는 러너 (카본 레이서가 아님)',
      '고반발·맥스쿠션 장거리 위주 러너 (→ 9 Ultra 권장)',
      '국내 AS·정식 유통·즉시 교환이 중요한 러너 (직구·병행만 존재)',
    ],
  },

  features: [
    '2레이어 Boom 미드솔 (제조사 주장 82% 에너지 리턴)',
    '힐 36mm / 전족 28mm · 드롭 8mm 데일리 트레이너 지오메트리',
    '展翼식 TPU 지지편 — 카본 플레이트 아님(공식 근거)',
    'GCR 아웃솔 — 그립·내마모 강화',
    'CNY 659 / 직구 10만 원대 가성비 (호카 마하 대비 저렴)',
  ],

  priceAnalysis: {
    msrp: 140000,
    streetPrice: 120000,
    costPerKm: 233,
    valueRating: 9,
    priceTier: 'mid',
    alternatives: ['hoka-mach-6', 'asics-novablast-5', 'nike-pegasus-42'],
    valueAdvantages: [
      '호카 마하·노바블라스트·하이페리온 대비 $40~50 저렴 (해외가 기준)',
      '체력검정~마라톤 훈련까지 한 켤레로 소화하는 다목적성',
      'GCR 아웃솔 내마모성 강화로 km당 비용 부담이 낮음',
    ],
  },

  detailedSpecs: {
    weight: '222g (CN42/US9 근사 실측) · 공식 발표 200g',
    stackHeight: '힐 36mm / 전족 28mm (해외 리테일러 리스팅 기준)',
    drop: '8mm (공식)',
    midsole: '2레이어 Boom(䨻) 초임계 발포 폼 — 상층 소프트 탄성 + 하층 안정',
    plate: '展翼식 TPU 지지편(아치 서포트) — 카본 플레이트 여부 공식 미확인. 일부 마케팅의 T400 카본 주장은 독립 검증 없음',
    outsole: 'GCR(Ground Control Rubber) — 경량 논슬립, 전 세대 대비 그립·내마모 강화 주장',
    upper: '엔지니어드 메시 + 통기성 텅 (앞발 통기성은 보통)',
    width: '좁음(narrow) — 좁은 라스트, 와이드 옵션 없음',
    durability: '약 600km (GCR 아웃솔 내마모 강화, 독립 측정치 없음)',
    price: '직구 10만 원대 (CNY 659 정가 / 특가 339, 아마존 $99) · 한국 미정식출시',
    costPerKm: '약 ₩233/km (600km 기준)',
    footType: '중립~좁은 발. 발볼 넓은 러너 비권장',
    landingPattern: '미드풋~힐. 이지~템포 데일리 페이스',
  },

  reviews: [
    {
      userType: '산초 에디터 분석',
      rating: 4.5,
      text:
        '"적토마 9의 카본 버전"으로 알려졌지만, 라이닝 공식 설명은 카본이 아닌 TPU 지지편입니다. 정체는 낮은 스택(36/28mm)의 가성비 데일리 트레이너예요. 9 Ultra가 푹신한 맥스쿠션이라면, 9 PRO는 더 낮고 단단하게 일상 훈련~템포를 소화합니다. 발볼이 좁아 한국 러너는 와이드가 필요하면 피하는 게 좋습니다.',
      source: 'editor',
      sourceUrl: 'https://www.weeviews.com/reviews/4419/li-ning-red-hare-pro-9',
    },
    {
      userType: 'WeeViews (50마일 테스트)',
      rating: 5,
      text:
        '아마존 99달러짜리인데 호카 마하·아식스 노바블라스트·브룩스 하이페리온과 충분히 경쟁하면서 40~50달러 더 싸다. 스텝인 핏이 좋고 50마일을 신어도 힐슬립이 없었으며, 트랙션과 내구성도 인상적이다. 다만 앞발 통기성이 아쉽고 라스트가 좁다.',
      source: 'community',
      sourceUrl: 'https://www.weeviews.com/reviews/4419/li-ning-red-hare-pro-9',
    },
    {
      userType: '중국 사용자 후기 (Shihuo)',
      rating: 4,
      text:
        '생각보다 가볍고 정사이즈로 맞다. 비교적 여유 있는 착화감이라 길들임 없이 신자마자 걷기·달리기 모두 무난하다. 일상 훈련용으로 만족스럽다.',
      source: 'community',
      sourceUrl: 'https://www.shihuo.cn/page/pcGoodsDetail?goodsId=8470464',
    },
  ],

  editorComment:
    '2025년 12월 출시된 신상이라 RunRepeat 등 독립 랩 데이터가 없고, 무게·스택은 해외 리테일러(Shopnings·VJsneaker)·사용자 실측 기준입니다. 흔히 "카본 버전"으로 알려졌지만 라이닝 공식 제품 설명은 카본이 아닌 "展翼식 TPU 지지편(아치 서포트)"으로 표기합니다 — T400 카본 주장은 일부 마케팅 페이지에서만 나오고 독립 분해 검증이 없어, 본 DB는 공식 근거대로 TPU(carbonPlate=false)로 기재합니다. 9 Ultra(맥스쿠션 슈퍼트레이너)와 달리 9 PRO는 낮은 스택의 데일리 트레이너입니다.\n\n사이즈·구매 가이드: 토박스가 좁고 와이드 옵션이 없어 발볼 넓은 러너에게는 맞지 않으며, 발볼이 넓다면 레드헤어 9 베이스(전족 와이드 설계)를 검토하세요. 병행가 140,000원에 내구성 600km 기준 km당 약 233원으로, 데일리 트레이너 중 최고 가성비 수준입니다. 비슷한 데일리 퍼포먼스를 정식 유통으로 원한다면 마하 6나 노바블라스트 5가 대안입니다.',

  similarShoes: ['li-ning-red-hare-9-ultra', 'hoka-mach-6', 'asics-novablast-5'],
};
