import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'puma-velocity-nitro-5',
  slug: 'puma-velocity-nitro-5',
  brand: 'Puma',
  name: '벨로시티 나이트로 5',
  image: '/images/shoes/puma/velocitynitro5/side.webp',
  images: [
    '/images/shoes/puma/velocitynitro5/side.webp',
    '/images/shoes/puma/velocitynitro5/angle.webp',
    '/images/shoes/puma/velocitynitro5/top.webp',
    '/images/shoes/puma/velocitynitro5/detail.webp',
  ],
  category: '입문화',
  rating: 4,
  status: 'new',
  price: 179000,
  description:
    'ATPU 기반 NITROFOAM으로 폼을 바꾼 푸마의 대표 데일리 트레이너 5세대. 남녀 와이드가 함께 판매되고 한국 정가는 4와 같은 179,000원(kr.puma.com, 2026-10-02 확인)입니다.',
  oneliner: '4와 같은 17만 9천원, 폼을 ATPU NITROFOAM으로 바꾸고 와이드까지 갖춘 데일리',
  editorComment:
    'RunRepeat 랩(2026-09-25 게시, 종합 89점)이 있어 실측 기반으로 정리했습니다. 핵심은 세 가지입니다 — ① 랩 실측 무게 238g로 4(DB 기준 224g)보다 무거워졌고, ② 에너지 리턴은 힐 64.0%·전족부 69.3%로 랩 본문이 4 대비 "약간 낮다"고 적었으며, ③ 힐 충격흡수(SA) 129는 부드러운 쪽입니다. 같은 폼 변화를 Doctors of Running은 "매우 부드럽고 40mm 스택급 쿠션감"이라고 표현했습니다.\n\n' +
    '수치는 출처마다 다르니 기준을 같이 보세요. 스택은 푸마 공식 35/27mm(드롭 8mm), Doctors of Running 33/25mm, RunRepeat 랩 실측 31.3/26.1mm(드롭 5.2mm)로 갈립니다. 무게도 푸마 공식 230g(UK 8, 270mm), Doctors of Running 244g(남성 US 9), RunRepeat 238g으로 기준 사이즈가 다릅니다. 푸마 코리아의 4와 같은 정가 179,000원은 20% 할인 시 143,200원으로 표기되는 것을 확인했습니다(2026-10-02).\n\n' +
    '한국 러너에게 중요한 변화는 핏입니다. 랩 토박스는 72.1mm로 평균(73.2mm)보다 1.1mm 좁은 수준이고, Doctors of Running은 뒤꿈치와 미드풋이 좁고 앞볼은 보통이라며 "조금 더 넓었으면 한다"고 적었습니다. 푸마 코리아에는 남·여 와이드가 따로 올라와 있어(와이드 상품 313690·313691) 발볼이 넓다면 와이드를 먼저 보는 편이 안전합니다.',
  tags: ['입문화', '데일리 트레이너', 'NITROFOAM', '와이드', '신상'],
  specs: {
    weight: 238,
    cushioning: 8,
    responsiveness: 8,
    stability: 6,
    drop: 5,
    durability: 500,
  },
  biomechanics: {
    stackHeight: { heel: 31, forefoot: 26 },
    drop: 5,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'ATPU 기반 NITROFOAM',
    optimalPace: '4:45-6:30 min/km',
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
  targetUsers: {
    recommended: [
      '이지런부터 가벼운 업템포까지 한 켤레로 쓰려는 중립 러너',
      '가성비 좋은 가벼운 데일리를 찾는 러너',
      '발볼이 넓어 와이드가 필요한 러너',
    ],
    notRecommended: [
      '평발·과내전 등 안정 구조가 필요한 러너',
      '뒤꿈치가 좁은 신발이 불편한 러너',
      '맥스 쿠션을 원하는 러너',
    ],
  },
  priceAnalysis: {
    msrp: 179000,
    costPerKm: 358,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['puma-velocity-nitro-4', 'nike-pegasus-42', 'asics-novablast-5'],
  },
  features: [
    'ATPU 기반 NITROFOAM 미드솔',
    'PUMAGRIP 아웃솔',
    '남·여 와이드 별도 판매',
    '랩 실측 에너지 리턴 힐 64.0% · 전족부 69.3%',
  ],
  detailedSpecs: {
    weight: '238g (RunRepeat 랩 실측) / 244g (남성 US 9, Doctors of Running) / 230g (푸마 공식, UK 8·270mm 기준) — 기준 사이즈가 서로 다름',
    stackHeight: '힐 31.3mm / 포어풋 26.1mm (RunRepeat 랩 실측) · 푸마 공식 35/27mm · Doctors of Running 33/25mm — 출처마다 다름',
    drop: '5.2mm (RunRepeat 랩 실측) · 푸마 공식 8mm · Doctors of Running 8mm',
    midsole: 'ATPU 기반 NITROFOAM (4의 폼에서 교체, Doctors of Running 설명)',
    plate: '없음',
    outsole: 'PUMAGRIP 러버 (커버리지 양호 — Doctors of Running)',
    upper: '엔지니어드 메쉬',
    width: '표준 — RunRepeat 랩 토박스 72.1mm(평균 73.2mm보다 1.1mm 좁음). Doctors of Running: "classically fits a touch narrow throughout"이며 뒤꿈치·미드풋은 좁고 앞볼은 보통. 푸마 코리아에 남·여 와이드 별도 상품(313690·313691) 판매 확인(2026-10-02)',
    durability: '500km 안팎(추정) — 아웃솔 마모 0.9mm(RunRepeat 랩)는 측정했으나 km 환산은 공식 없음. 푸마 코리아는 권장 수명 800km로 안내하나 브랜드 표기',
    price: '₩179,000 (kr.puma.com 정가, 2026-10-02 확인 — 20% 할인 시 ₩143,200 표기) · 미국 $139.95 · 4와 같은 정가',
    costPerKm: '약 ₩358/km (500km 가정, 추정)',
    footType: '중립 발',
    landingPattern: '힐스트라이크~미드풋',
  },
  reviews: [
    {
      userType: '에디터 분석 — 랩이 말해 주는 4와의 차이',
      text: 'RunRepeat 랩이 있어 4와의 차이를 수치로 볼 수 있습니다. 무게는 랩 실측 238g로 4(DB 224g)보다 무거워졌고, 에너지 리턴은 힐 64.0%·전족부 69.3%로 랩 본문이 4 대비 "약간 낮다"고 정리했습니다. 대신 힐 SA 129로 쿠션은 부드러운 쪽이고, 토박스는 72.1mm로 평균 수준입니다. 즉 5는 4보다 가볍고 반응적인 쪽이 아니라 더 부드럽고 푹신한 쪽으로 움직인 모델이며, 가격은 179,000원으로 그대로입니다.',
    },
    {
      userType: 'Doctors of Running 관점 — 40mm급 쿠션감의 클래식 데일리',
      text: 'Doctors of Running은 디자인 A-·퍼포먼스 A·가치 A·핏 B+·안정성 B를 매겼고, 33mm 스택인데도 40mm 스택 신발 대부분과 비슷한 쿠션감이라고 평가했습니다. 로커가 거의 없는 전통적인 승차감에 "매우 부드러운" ATPU NITROFOAM이 충격을 흡수하고 약한 반발을 준다는 설명입니다. 핏은 사이즈 정사이즈이고 전반적으로 약간 좁은 편 — 뒤꿈치와 미드풋이 좁고 앞볼은 보통이라, 리뷰어는 폭이 조금 더 넓었으면 한다고 적었습니다. 중립 발에 맞는 이지런용 데일리라는 결론입니다.',
    },
    {
      userType: '예상 적합 — 발볼이 넓은 데일리 입문 러너',
      text: '발볼이 넓어 일반 폭 데일리가 답답했던 입문~중급 러너에게 맞을 가능성이 있습니다. 푸마 코리아에 남·여 와이드가 별도 상품으로 판매되고, 정가는 일반 폭과 같은 179,000원입니다. 랩 토박스 72.1mm는 표준 범위이므로 와이드까지 필요하지 않다면 일반 폭으로도 충분할 수 있습니다. 다만 뒤꿈치가 좁다는 평가가 있어 헐겁게 느끼는 경우는 드물어도 발목 쪽 압박은 시착으로 확인하세요.',
    },
    {
      userType: '비교 관점 — 4를 쓰고 있거나 세일가 4와 고민하는 경우',
      text: '반응성과 무게를 중시했다면 4가 더 맞을 수 있습니다. 4는 DB 기준 224g에 에너지 리턴 67.5%였고, 5는 랩 238g에 에너지 리턴 힐 64.0%·전족부 69.3%로 랩이 4 대비 약간 낮다고 적었습니다. 반대로 쿠션이 더 부드럽고 푹신한 쪽이 좋거나 와이드가 필요하면 5를 볼 만합니다. 정가가 같은 179,000원이라 4의 세일가가 많이 낮다면 비용 면에서는 4가 유리합니다.',
    },
  ],
  similarShoes: ['puma-velocity-nitro-4', 'nike-pegasus-42', 'asics-novablast-5', 'mizuno-wave-rider-30'],
  relatedPosts: [
    { slug: 'puma-running-shoes-lineup-tier-guide-2026', title: '푸마 러닝화 계급도' },
  ],
};
