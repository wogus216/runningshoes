import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'brooks-hyperion-elite-6',
  slug: 'brooks-hyperion-elite-6',
  brand: 'Brooks',
  name: '하이페리온 엘리트 6',
  image: '/images/shoes/brooks/hyperionelite6/side.webp',
  images: [
    '/images/shoes/brooks/hyperionelite6/side.webp',
    '/images/shoes/brooks/hyperionelite6/angle.webp',
    '/images/shoes/brooks/hyperionelite6/detail.webp',
  ],
  category: '레이싱',
  rating: 4,
  status: 'new',
  price: 319000,
  description:
    'DNA Gold(PEBA) 폼과 더 가파르게 재설계한 SpeedVault+ 카본 플레이트를 쓴 브룩스 레이싱화. 드롭이 7mm로 낮아졌고, 한국 정가는 319,000원(브룩스 코리아, 2026-10-02 확인)입니다.',
  oneliner: '198g에 40/33mm 스택, 브룩스가 처음으로 경쟁 가능한 레이서로 평가받은 6세대',
  editorComment:
    '2026년 8월 1일 글로벌 출시 후 두 달 남짓이라 RunRepeat 랩 데이터가 확인한 범위에서 아직 게시되지 않았습니다. 아래 무게·스택·드롭은 Believe in the Run이 적은 값(US M9 198g, 힐 40mm·포어풋 33mm, 드롭 7mm)이고, 충격흡수·에너지 리턴·토박스 너비 같은 랩 수치는 확보되지 않아 점수는 보수적으로 잡았습니다.\n\n' +
    '전작 5(랩 실측 204g, 드롭 11.2mm)와 비교하면 가장 눈에 띄는 변화는 드롭입니다 — 11.2mm에서 7mm로 내려가 전족부 착지 쪽으로 무게가 이동했고, 플레이트도 더 가파른 각도로 재설계됐습니다. Believe in the Run은 이 모델에 A 티어(디자인 A·퍼포먼스 A·가치 C)를 주면서 "브룩스 레이싱화 중 처음으로 실제로 고를 만하다"고 평가했고, 빠른 페이스에서 살아나면서 워밍업 때도 불편하지 않다는 점을 장점으로 꼽았습니다. 반대로 가치는 낮게 봤습니다. 319,000원은 직전작 5의 한국 정가(299,000원)보다 2만원 올랐고, 같은 리뷰어는 이 가격이 "경쟁력 있는 첫 레이싱화"에 비해 과하다고 평가했습니다.\n\n' +
    '한국 러너가 먼저 볼 것은 핏과 사이즈 선택지입니다. 한국 공식몰에는 남녀공용 MEDIUM 폭만 올라와 있고 와이드는 확인되지 않았으며, 토박스 실측도 없어 발볼이 넓다면 매장 착화가 먼저입니다. 같은 리뷰어는 혀(텅)가 고정되지 않아 달리는 중 밀린다는 점도 단점으로 지적했습니다.',
  tags: ['레이싱', '카본 플레이트', 'PEBA', '대회용', '신상'],
  specs: {
    weight: 198,
    cushioning: 7,
    responsiveness: 9,
    stability: 6,
    drop: 7,
    durability: 300,
  },
  biomechanics: {
    stackHeight: { heel: 40, forefoot: 33 },
    drop: 7,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'DNA Gold (PEBA)',
    optimalPace: '3:30-4:45 min/km',
  },
  injuryPrevention: {
    plantarFasciitis: 'caution',
    achillesTendinopathy: 'caution',
    kneeIssues: 'caution',
    shinSplints: 'caution',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'poor',
    wideOptions: false,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },
  targetUsers: {
    recommended: [
      '풀·하프 기록을 노리는 중상급 러너',
      '5처럼 높은 드롭이 부담스러웠던 러너',
      '레이스 외에 워밍업에서도 편한 레이서를 찾는 러너',
    ],
    notRecommended: [
      '입문 러너·훈련용으로 쓰려는 러너',
      '발볼이 넓은 러너 (와이드 미확인)',
      '평발·과내전',
    ],
  },
  priceAnalysis: {
    msrp: 319000,
    costPerKm: 1063,
    valueRating: 5,
    priceTier: 'super-premium',
    alternatives: ['brooks-hyperion-elite-5', 'adidas-adios-pro-5', 'nike-alphafly-4'],
  },
  features: [
    'DNA Gold(PEBA) 폼',
    '더 가파른 각도로 재설계한 SpeedVault+ 카본 플레이트',
    '드롭 7mm로 하향 (전작 5는 랩 11.2mm)',
    '통기성 플랫 니트 어퍼 + 힐 필로우',
  ],
  detailedSpecs: {
    weight: '198g (US M9, Believe in the Run) / 172g (US W7.5) — 랩 실측 아님(추정 대용)',
    stackHeight: '힐 40mm / 포어풋 33mm (Believe in the Run 표기, 랩 절단 실측 아님)',
    drop: '7mm (Believe in the Run 표기) — 전작 5는 RunRepeat 랩 11.2mm',
    midsole: 'DNA Gold (PEBA)',
    plate: 'SpeedVault+ 카본 플레이트 (재설계, 전작보다 가파른 각도)',
    outsole: '미니멀 러버',
    upper: '플랫 니트 어퍼 + 힐 필로우(실리콘 처리)',
    width: '표준 추정 — 랩 토박스 미게시. 한국 공식몰에는 남녀공용 MEDIUM만 확인(와이드 미확인, 2026-10-02). 전작 5의 랩 토박스는 71.5mm(평균 73.2mm보다 1.7mm 좁음)로 레이싱 핏 계열',
    durability: '300km 안팎(추정) — 랩 마모 실측 없음. PEBA 미드솔은 아웃솔보다 폼 성능이 먼저 꺾일 가능성이 있음',
    price: '₩319,000 (브룩스 코리아 공식몰, 2026-10-02 확인) · 미국 $275 · 전작 5는 한국 ₩299,000',
    costPerKm: '약 ₩1,063/km (300km 가정, 추정)',
    footType: '중립~언더프로네이션',
    landingPattern: '미드풋~포어풋',
  },
  reviews: [
    {
      userType: '에디터 분석 — 랩 미게시 상태에서 확인 가능한 것',
      text: '현재 확정적으로 말할 수 있는 것은 설계 변경이지 랩 수치가 아닙니다. 확인된 변경은 세 가지입니다 — 드롭이 전작 5의 랩 실측 11.2mm에서 7mm로 낮아졌고, 카본 플레이트가 더 가파른 각도로 재설계됐으며, 한국 정가가 299,000원에서 319,000원으로 올랐습니다. 독립 랩이 없어 에너지 리턴·충격흡수·토박스 폭은 비교할 수 없고, 점수의 쿠션·반발 항목은 5의 실측(에너지 리턴 76.9%)을 기준선 삼아 보수적으로 잡았습니다.',
    },
    {
      userType: 'Believe in the Run 리뷰 종합 — 처음으로 고를 만한 브룩스 레이서',
      text: 'Believe in the Run은 A 티어(디자인 A·퍼포먼스 A·가치 C)를 줬고, 리뷰어는 이 모델을 "브룩스 레이싱화 중 처음으로 실제로 고를 만하다"고 표현했습니다. 호평은 빠른 페이스에서 살아나는 반응, 워밍업·쿨다운 때도 불편하지 않은 승차감, 통기성 좋은 니트 어퍼와 힐 필로우의 고정력에 모였습니다. 유보는 가격과 개성입니다 — 319,000원이 첫 경쟁력 있는 레이싱화로는 과하다는 평가와, 경쟁 모델처럼 확 끌리는 요소가 없다는 지적이 함께 나왔습니다. 혀가 고정되지 않아 달리는 중 밀린다는 점도 단점으로 적혔습니다.',
    },
    {
      userType: '예상 적합 — 낮은 드롭을 선호하는 풀코스 도전 러너',
      text: '높은 드롭의 5가 발목·종아리에 맞지 않았거나, 전족부 착지 비중이 큰 풀코스 도전 러너에게 맞을 가능성이 있습니다. 힐 40mm·포어풋 33mm 스택에 드롭 7mm라 무게중심이 앞으로 이동하고, 198g이라 후반 구간 부담이 적은 편입니다. 다만 한국 공식몰에는 남녀공용 MEDIUM 폭만 확인되고 토박스 실측이 없어, 발볼이 넓다면 매장 착화가 먼저입니다. 카본 레이서 특성상 아킬레스·종아리 부담은 훈련 이력에 따라 갈립니다.',
    },
    {
      userType: '비적합 — 레이스 횟수가 적고 훈련까지 겸하려는 경우',
      text: '319,000원에 PEBA 폼 수명이 제한적일 가능성이 있어(추정), 연간 대회 횟수가 적고 훈련용으로도 쓰려는 러너에게는 단가 부담이 큽니다. 같은 값이면 한 켤레로 레이스 한두 번과 템포 훈련을 나누는 편이 합리적이고, 속도 훈련 위주라면 플레이트 없는 트레이너가 더 맞습니다. 평발·과내전 성향이라면 좁은 미드풋 구조에서 안정성이 부족할 수 있습니다.',
    },
  ],
  similarShoes: ['brooks-hyperion-elite-5', 'adidas-adios-pro-5', 'nike-alphafly-4'],
  relatedPosts: [
    { slug: 'brooks-running-shoes-lineup-tier-guide-2026', title: '브룩스 러닝화 계급도' },
    { slug: 'running-shoe-plate-guide-2026', title: '플레이트 완전 해설 — 카본·유리섬유·나일론' },
    { slug: 'running-shoe-midsole-foam-guide-2026', title: '미드솔 폼 완전 해설 — EVA·TPU·PEBA' },
  ],
};
