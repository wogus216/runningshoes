import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'brooks-glycerin-gts-23',
  slug: 'brooks-glycerin-gts-23',
  brand: 'Brooks',
  name: '글리세린 GTS 23',
  image: '/images/shoes/brooks/glyceringts23/side.webp',
  images: ['/images/shoes/brooks/glyceringts23/side.webp'],
  category: '안정화',
  rating: 4,
  status: 'new',
  price: 209000,
  description:
    '글리세린 23의 질소 주입 쿠션에 GuideRails 안정화 시스템을 얹은 모델. 남녀 모두 와이드·미디엄이 판매되고 한국 정가는 209,000원(브룩스 코리아, 2026-10-02 확인)으로 22와 같습니다.',
  oneliner: '질소 주입 DNA Tuned 쿠션 + GuideRails, 22와 같은 값의 프리미엄 안정화',
  editorComment:
    '2026년 3월 글로벌 출시된 모델이지만 RunRepeat 랩 페이지는 확인한 범위에서 게시되지 않았습니다. 아래 무게·스택·드롭은 Believe in the Run이 적은 값(US M9 306g, 힐 39mm·포어풋 31mm, 드롭 8mm)이고 충격흡수·에너지 리턴·토박스 같은 랩 수치는 확보되지 않았습니다.\n\n' +
    '이 사이트 DB에 기록된 22(스택 38/28mm, 드롭 10mm, 305g)와 비교하면 무게는 1g 차이로 사실상 같고, 스택은 힐 +1mm·포어풋 +3mm로 올라 드롭이 10mm에서 8mm로 내려간 것이 눈에 띄는 변화입니다. Believe in the Run은 B 티어(디자인 C·가치 B·퍼포먼스 A)를 주면서 미드솔이 "스펀지처럼 탄력 있고" 부드럽지만 과하지 않은 승차감이라고 평가했고, 아웃솔은 30마일 정도 달린 시점에 눈에 띄는 마모가 없고 젖은 노면 접지도 좋았다고 적었습니다. 아쉬움으로는 신발끈 고정이 일정하지 않다는 점, 발목 둘레 쿠션이 두꺼워 모든 발에 맞지는 않는다는 점을 꼽았습니다. GuideRails는 "특별하진 않지만 기능적"이라는 평가입니다.\n\n' +
    '한국 러너에게 유리한 점은 선택지입니다. 브룩스 코리아에서 남성·여성 모두 와이드와 미디엄이 판매되고(2026-10-02 확인), 정가는 22와 같은 209,000원이라 가격 부담은 늘지 않았습니다. 다만 토박스 실측이 없어 와이드를 전제로 사이즈를 고르는 편이 안전합니다.',
  tags: ['안정화', '과내전', '평발', 'GuideRails', '와이드'],
  specs: {
    weight: 306,
    cushioning: 9,
    responsiveness: 6,
    stability: 9,
    drop: 8,
    durability: 700,
  },
  biomechanics: {
    stackHeight: { heel: 39, forefoot: 31 },
    drop: 8,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'DNA Tuned (질소 주입) + GuideRails',
    optimalPace: '5:30-7:00 min/km',
  },
  injuryPrevention: {
    plantarFasciitis: 'excellent',
    achillesTendinopathy: 'good',
    kneeIssues: 'excellent',
    shinSplints: 'good',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'excellent',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },
  targetUsers: {
    recommended: [
      '오버프로네이션·평발 성향 러너',
      '부드러운 쿠션의 안정화를 찾는 러너',
      '발볼이 넓어 와이드가 필요한 러너',
    ],
    notRecommended: [
      '가벼운 신발을 선호하는 러너',
      '중립 보행이라 안정 구조가 필요 없는 러너',
      '발목 둘레가 두꺼운 쿠션이 답답한 러너',
    ],
  },
  priceAnalysis: {
    msrp: 209000,
    costPerKm: 299,
    valueRating: 7,
    priceTier: 'premium',
    alternatives: ['brooks-glycerin-gts-22', 'asics-gel-kayano-33', 'mizuno-wave-inspire-22'],
  },
  features: [
    'GuideRails 안정화 시스템',
    '질소 주입 DNA Tuned 쿠셔닝 (토 영역 폼 증량)',
    '남녀 와이드·미디엄 판매',
    '젖은 노면 접지가 좋은 아웃솔',
  ],
  detailedSpecs: {
    weight: '306g (US M9, Believe in the Run) / 272g (US W7.5) — 랩 실측 아님',
    stackHeight: '힐 39mm / 포어풋 31mm (Believe in the Run 표기, 랩 절단 실측 아님)',
    drop: '8mm (Believe in the Run 표기)',
    midsole: 'DNA Tuned (질소 주입, 토 영역 폼 증량) + GuideRails',
    plate: '없음',
    outsole: '고내구 러버 (30마일 사용 후 눈에 띄는 마모 없음 — Believe in the Run)',
    upper: '엔지니어드 메쉬 (발목 둘레 270도 쿠션)',
    width: '표준 추정 — 랩 토박스 미게시. 한국 공식몰 남·여 WIDE·MEDIUM 모두 판매 확인(2026-10-02). 22와 같은 와이드 편성이라 넓은 발은 와이드를 전제로 선택',
    durability: '700km 안팎(추정) — 랩 마모 실측 없음. 리뷰어는 30마일 시점 마모 없음만 보고',
    price: '₩209,000 (브룩스 코리아 공식몰, 2026-10-02 확인, 남·여 동일) · 미국 $180 · 22와 같은 값',
    costPerKm: '약 ₩299/km (700km 가정, 추정)',
    footType: '과내전·평발',
    landingPattern: '힐스트라이크',
  },
  reviews: [
    {
      userType: '에디터 분석 — 랩 미게시 상태에서 확인 가능한 것',
      text: '확정적으로 말할 수 있는 것은 구성 변화와 가격입니다. 22 대비 스택이 포어풋 쪽으로 올라 드롭이 10mm에서 8mm로 내려갔고, 질소 주입 DNA Tuned에 토 영역 폼이 늘었으며, 한국 정가는 209,000원으로 그대로입니다. RunRepeat 랩이 없어 충격흡수·에너지 리턴·토박스 폭은 비교할 수 없어, 쿠션·반발 점수는 22와 같은 선에서 보수적으로 유지했습니다.',
    },
    {
      userType: 'Believe in the Run 리뷰 종합 — 부드럽지만 과하지 않은 안정화',
      text: 'Believe in the Run은 B 티어(디자인 C·가치 B·퍼포먼스 A)를 줬습니다. 미드솔은 "스펀지처럼 탄력 있고" 부드럽지만 과하지 않은 승차감으로 평가했고, 아웃솔은 30마일 정도 사용한 시점에 눈에 띄는 마모가 없었으며 젖거나 얼어붙은 노면에서도 접지가 좋았다고 적었습니다. 이지 런과 장거리에 쓰기 좋은 유연한 데일리 트레이너라는 평입니다. 유보는 끈 고정이 일정하지 않아 핏 균형을 맞추기 어렵다는 점, 발목 둘레 쿠션이 두꺼워 모든 발에 맞지는 않는다는 점, 가격이 기대보다 높다는 점이었습니다. GuideRails는 특별하진 않지만 기능적이라고 봤습니다.',
    },
    {
      userType: '예상 적합 — 평발 성향이고 발볼이 넓은 입문~중급 러너',
      text: '평발 성향이면서 발볼이 넓어 안정화 선택지가 좁았던 입문~중급 러너에게 맞을 가능성이 있습니다. 브룩스 코리아에서 남녀 모두 와이드가 판매되고, GuideRails가 발목의 과한 움직임을 억제하는 방식이라 아치 지지를 중시하는 러너가 고려할 만합니다. 306g의 무게는 가볍지 않아 속도 훈련 비중이 큰 경우에는 맞지 않고, 이지 런과 일상 조깅 위주일 때 단점이 작습니다.',
    },
    {
      userType: '비교 관점 — 22를 신고 있는 경우 갈아탈 가치',
      text: '22를 신고 불편이 없었다면 급하게 갈아탈 이유는 크지 않습니다. 무게는 사실상 같고(305g대와 306g), 가격도 209,000원으로 같아 비용 면의 차이가 없습니다. 바뀐 점은 드롭이 10mm에서 8mm로 내려가고 토 영역 폼이 늘어난 것인데, 랩 수치가 없어 체감 차이를 숫자로 확인할 수 없습니다. 발볼이 넓은데 22 와이드가 부족했거나, 낮아진 드롭을 원했다면 시착해 볼 만합니다.',
    },
  ],
  similarShoes: ['brooks-glycerin-gts-22', 'asics-gel-kayano-33', 'mizuno-wave-inspire-22'],
  relatedPosts: [
    { slug: 'brooks-running-shoes-lineup-tier-guide-2026', title: '브룩스 러닝화 계급도' },
  ],
};
