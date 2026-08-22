import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'new-balance-sc-rebel',
  slug: 'new-balance-sc-rebel',
  brand: 'New Balance',
  name: 'SC Rebel V1',
  image: '/images/shoes/newbalance/screbel/side.webp',
  images: [
    '/images/shoes/newbalance/screbel/side.webp',
    '/images/shoes/newbalance/screbel/front.webp',
    '/images/shoes/newbalance/screbel/back.webp',
    '/images/shoes/newbalance/screbel/angle.webp',
    '/images/shoes/newbalance/screbel/outsole.webp',
    '/images/shoes/newbalance/screbel/top.webp',
  ],
  category: '레이싱',
  rating: 5,
  price: 259000,
  description:
    '뉴발란스가 SC 트레이너 v3를 대체하며 내놓은 슈퍼 트레이너입니다. 새 Infinion 폼에 지면 쪽으로 내린 Energy Arc 플레이트를 얹어 218g·스택 40mm를 동시에 잡았고, 훈련과 레이스를 한 켤레로 소화하는 자리를 노립니다.',
  oneliner: '218g에 스택 40mm, 와이드 2E까지 나온 슈퍼 트레이너',
  editorComment:
    '2026-08-22 한국 출시(259,000원)에 맞춰 등록했습니다. RunRepeat 랩 데이터가 아직 게시되지 않아 충격흡수(SA)·에너지 리턴·토박스 실측 mm가 없습니다 — 아래 수치 중 공식 발표(무게·스택·드롭·폼)와 국내 판매 정보는 확정값이고, 성향 점수는 해외 리뷰 3곳의 주행 평가를 옮긴 판단입니다.\n\n이 신발의 설계 핵심은 플레이트 위치입니다. 보통 플레이트는 폼 사이에 끼우는데 SC 레벨은 Energy Arc를 지면 쪽에 깔아 뒤쪽은 미드풋을 잡고 앞쪽은 추진을 담당하게 나눴습니다. Road Trail Run 멀티 테스터가 9.99/10과 9.5/10을, Believe in the Run이 A Tier와 함께 "역대 최고의 뉴발란스 러닝화"라는 표현을 쓴 근거가 여기 있습니다 — 폼이 물러도 플랫폼이 무너지지 않는다는 평가입니다.\n\n포지션은 SC 트레이너 v3의 대체입니다. 278g에서 218g으로 60g을 덜어냈고 스택은 37/30mm에서 40/36mm로 올렸습니다. 이름이 비슷한 퓨얼셀 레벨 v5(220g·33/27mm·무플레이트)와는 계보가 다릅니다 — 레벨 v5가 유연하고 말랑한 데일리라면 이쪽은 단단하게 굴러가는 플레이트 트레이너라, 업그레이드판으로 접근하면 어긋납니다.\n\n사이즈·구매 가이드: Road Trail Run과 Doctors of Running 두 곳이 독립적으로 갑피가 좁다고 지적했습니다(정량 실측은 아직 없습니다). 다만 국내 출시분에 남성 2E 와이드가 함께 나왔으므로, 발볼이 넓다면 처음부터 2E를 보는 편이 낫습니다. 드롭 4mm에 40mm 스택이라 종아리·아킬레스 부담이 있는 구성이고, DOR은 걷기나 오래 서 있는 용도로는 부적합하다고 했습니다. 입문 단계에는 권하지 않습니다.',
  tags: ['레이싱', '슈퍼 트레이너', 'Energy Arc', 'Infinion'],

  specs: {
    weight: 218,
    cushioning: 8,
    responsiveness: 9,
    stability: 5,
    drop: 4,
    durability: 450,
  },

  biomechanics: {
    stackHeight: {
      heel: 40,
      forefoot: 36,
    },
    drop: 4,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'Infinion 폼 + Energy Arc 플레이트 (지면 쪽 배치)',
    optimalPace: '3:50-5:00 min/km',
  },

  detailedSpecs: {
    weight: '218g (공식, 남성 US 9.5) / 174g (여성 US 7) — Road Trail Run 실측은 212g',
    stackHeight: '힐 40mm / 포어풋 36mm (공식)',
    drop: '4mm (공식) — Doctors of Running "체감은 5~6mm에 가깝다"',
    midsole: 'Infinion 폼 (반응성 강화 버전)',
    plate: 'Energy Arc — 폼 사이가 아니라 지면 쪽에 배치',
    outsole: '고무 아웃솔 (마모 실측 미게시)',
    upper: '경량 엔지니어드 메쉬',
    width: '남성 D / 남성 2E(와이드) / 여성 D — 뉴발란스 코리아 2026-08-22 확인',
    durability: '400~500km (추정 — 랩 마모 측정 미게시)',
    price: '259,000원',
    costPerKm: '약 ₩576/km (450km 기준)',
    footType: '중립',
    landingPattern: '중족부/전족부 착지',
  },

  injuryPrevention: {
    plantarFasciitis: 'caution',
    achillesTendinopathy: 'caution',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'narrow',
    flatFootCompatibility: 'poor',
    wideOptions: true,
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },

  priceAnalysis: {
    msrp: 259000,
    streetPrice: 259000,
    costPerKm: 576,
    valueRating: 8,
    priceTier: 'premium',
    alternatives: ['asics-superblast-3', 'adidas-hyperboost-edge', 'new-balance-sc-trainer-v3'],
    valueAdvantages: [
      'SC 트레이너 v3 대비 60g 경량화(278g → 218g)',
      '같은 값의 슈퍼블라스트 3보다 21g 가벼움',
      '슈퍼 트레이너 중 드물게 와이드(2E) 제공',
      '훈련·레이스 겸용이라 신발 한 켤레로 커버되는 범위가 넓음',
    ],
  },

  targetUsers: {
    recommended: [
      '훈련과 레이스를 한 켤레로 해결하고 싶은 러너',
      '슈퍼 트레이너를 원하지만 240g대가 무겁게 느껴지던 러너',
      'SC 트레이너 v3에서 갈아탈 뉴발란스 사용자',
      '발볼이 넓어 슈퍼 트레이너 선택지가 없던 러너(2E 한정)',
    ],
    notRecommended: [
      '러닝 경험이 짧은 입문 러너',
      '아킬레스·종아리 부상 이력이 있는 러너',
      '과내전이 뚜렷해 안정화가 필요한 러너',
      '걷기나 장시간 서 있는 용도를 겸하려는 경우',
    ],
  },

  features: [
    '218g에 힐 40mm — 경량과 스택을 동시에 잡은 구성',
    'Energy Arc 플레이트를 지면 쪽에 배치해 플랫폼 붕괴 억제',
    'Infinion 폼 (반응성 강화 버전)',
    'Road Trail Run 9.99/10 · 9.5/10, Believe in the Run A Tier',
    'SC 트레이너 v3 대비 60g 경량화',
    '국내 남성 2E 와이드 출시',
  ],

  reviews: [
    {
      userType: '에디터 분석',
      rating: 88,
      text: '슈퍼 트레이너에서 가장 흔한 타협은 "스택을 올리면 무거워진다"인데, SC 레벨은 힐 40mm를 얹고 218g에 머뭅니다. 같은 259,000원인 슈퍼블라스트 3(239g)보다 21g 가볍고, 대체 대상인 SC 트레이너 v3(278g)보다는 60g 가볍습니다. 설계상 눈에 띄는 선택은 Energy Arc 플레이트를 폼 사이가 아니라 지면 쪽에 깐 것으로, 해외 테스터들은 "플레이트가 딱딱하게 튀지 않으면서 밀어준다"는 표현으로 이 구조를 평가했습니다. 다만 RunRepeat 랩이 미게시라 충격흡수·에너지 리턴·토박스 실측이 없어 정량 비교는 아직 불가능합니다. 판단이 필요한 지점은 둘입니다 — 드롭 4mm에 40mm 스택이라 종아리·아킬레스 부하가 실재하고, 갑피가 좁다는 지적이 독립된 두 매체에서 나왔습니다. 후자는 국내에 2E가 함께 나오면서 해소 경로가 생겼습니다.',
    },
    {
      userType: '예상 적합 — 훈련과 레이스를 한 켤레로 묶고 싶은 러너',
      text: '주 4~5회 달리면서 템포와 대회를 같은 신발로 소화하려는 경우에 맞을 가능성이 있습니다. 218g의 무게는 레이싱화 영역에 가깝고(SC 엘리트 v5가 198g입니다) 힐 40mm 스택은 장거리 훈련을 버티는 쪽이라, 두 용도의 간극이 좁습니다. 적정 페이스는 3분 50초~5분/km 구간으로 잡히고, 그보다 느린 조깅에서는 플레이트가 주는 이점이 크지 않습니다. 내구성은 400~500km로 추정하는데 랩 마모 측정이 아직 없어 확정값이 아닙니다 — 레이스 전용으로 아끼기보다 훈련에 섞어 쓰는 운용을 전제로 계산하는 편이 현실적입니다.',
    },
    {
      userType: '예상 부적합 — 저드롭이 처음이거나 아킬레스가 약한 러너',
      text: '드롭 4mm는 착지 시 아킬레스와 종아리가 받는 부하를 늘리는 방향이고, 여기에 40mm 스택과 플레이트가 더해집니다. 8mm대 드롭의 데일리에서 곧바로 넘어오면 초반 몇 주에 종아리 뻐근함이 나타나기 쉽습니다. 아킬레스건염이나 족저근막염 이력이 있다면 이 신발을 주력으로 두는 선택은 권하기 어렵고, 굳이 쓴다면 주 1~2회 포인트 훈련으로 제한하는 편이 안전합니다. Doctors of Running은 걷기나 오래 서 있는 용도로는 부적합하다고 명시했습니다.',
    },
    {
      userType: '발볼 관점 — 좁다는 지적과 2E라는 답',
      text: 'Road Trail Run과 Doctors of Running 두 곳이 독립적으로 갑피가 좁다고 평가했습니다. 다만 이 평가는 주관적 착화 소감이고 토박스 실측 mm는 아직 공개되지 않았다는 점을 함께 봐야 합니다. 실질적으로 중요한 변화는 국내 출시분에 남성 2E 와이드가 포함됐다는 것으로, 발볼 때문에 슈퍼 트레이너 선택지가 좁았던 경우 후보에 넣을 수 있게 됐습니다. 같은 뉴발란스 SC 엘리트 v5가 토박스 74.5mm 실측으로 넓은 축이었던 것과 달리 이 모델은 표준폭에서 좁게 느껴진다는 평가가 우세하므로, D 표준폭을 신는 러너도 시착을 거치는 편이 안전합니다.',
    },
  ],

  similarShoes: ['asics-superblast-3', 'adidas-hyperboost-edge', 'new-balance-sc-trainer-v3'],
  relatedPosts: [
    { slug: 'new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026', title: 'SC 레벨 vs 슈퍼블라스트 3 — 같은 값 슈퍼 트레이너' },
    { slug: 'new-balance-sc-rebel-korea-launch-2026', title: 'SC 레벨 한국 출시 — 구매 경로 정리' },
    { slug: 'new-balance-sc-rebel-preview-2026', title: 'SC 레벨 프리뷰 — 해외 리뷰가 이례적으로 높은 이유' },
    { slug: 'new-balance-running-shoes-lineup-tier-guide-2026', title: '뉴발란스 러닝화 계급도' },
    { slug: 'running-shoe-plate-guide-2026', title: '플레이트 완전 해설 — 카본·유리섬유·나일론' },
  ],
};
