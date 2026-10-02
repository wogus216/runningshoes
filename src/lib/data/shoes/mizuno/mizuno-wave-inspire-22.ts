import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'mizuno-wave-inspire-22',
  slug: 'mizuno-wave-inspire-22',
  brand: 'Mizuno',
  name: '웨이브 인스파이어 22',
  image: '/images/shoes/mizuno/waveinspire22/side.webp',
  images: ['/images/shoes/mizuno/waveinspire22/side.webp'],
  category: '안정화',
  rating: 4,
  status: 'new',
  price: 169000,
  description:
    'Enerzy NXT(질소 주입) 폼으로 바꾸고 드롭을 낮춘 미즈노의 웨이브 플레이트 안정화 22세대. 한국 소비자가는 21보다 1만원 오른 169,000원(미즈노 코리아, 2026-10-02 확인)이며 SW 라인이 따로 판매됩니다.',
  oneliner: '랩 280g·드롭 7.6mm, 시리즈 처음으로 10oz 아래로 내려온 웨이브 안정화',
  editorComment:
    'RunRepeat 랩(2026-04-03 게시, 종합 83점)이 있어 실측 기반으로 정리했습니다. 21(DB 286g·드롭 12.9mm)과 비교한 핵심 변화는 ① 랩 실측 무게 280g(브랜드 표기 294g), ② 랩 드롭 7.6mm(브랜드 표기 10mm)로 크게 낮아진 것, ③ 전족부 스택이 랩 기준 29mm로 올라간 것입니다(21은 25.1mm). 랩 본문은 "낮아진 드롭과 늘어난 전족부 폼이 이전보다 다재다능하게 만들었다"고 평가했습니다.\n\n' +
    '쿠션은 힐 SA 125·전족부 SA 115로 중간 이상이고, 에너지 리턴은 힐 52.7%·전족부 52.8%로 평범한 수준입니다. 아웃솔 마모는 0.5mm(랩 Dremel 테스트)로 적은 편입니다. 반면 Doctors of Running은 이 모델을 C로 평가했는데, 원인은 뒤꿈치 고정입니다 — 힐 높이가 얕고 폭이 약간 넓어 발이 계속 빠질 듯한 느낌이 있었고 끈 조절이나 두꺼운 양말로도 해결되지 않았다고 적었습니다. 따라서 안정화 성능보다 힐 핏이 구매 판단을 가릅니다.\n\n' +
    '한국에서는 일반 폭 외에 SW가 붙은 상품(J1GC2645·J1GD2645 등)이 별도로 판매됩니다. SW의 의미는 미즈노 코리아 공식 설명 페이지로는 확인하지 못했고, 공식몰 상품 문의 게시판에 "SW가 슈퍼와이드를 뜻하느냐"는 질문이 올라 있으며 블로그 글이 22를 "슈퍼와이드"로 표기하고 있어 와이드 라인일 가능성이 높습니다(추정). 구매 전 공식몰에서 SW의 폭 안내를 확인하세요.',
  tags: ['안정화', '과내전', '평발', 'Wave 플레이트', '신상'],
  specs: {
    weight: 280,
    cushioning: 8,
    responsiveness: 6,
    stability: 7,
    drop: 8,
    durability: 800,
  },
  biomechanics: {
    stackHeight: { heel: 36.6, forefoot: 29 },
    drop: 7.6,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'Enerzy NXT (질소 주입) + Wave 플레이트',
    optimalPace: '5:30-7:30 min/km',
  },
  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },
  targetUsers: {
    recommended: [
      '가벼운 안정 구조(웨이브 플레이트)가 필요한 러너',
      '21의 높은 드롭이 부담스러웠던 러너',
      '매장에서 뒤꿈치 핏을 확인할 수 있는 러너',
    ],
    notRecommended: [
      '뒤꿈치가 얕은 힐 컵에서 쉽게 빠지는 러너',
      '강한 과내전 교정이 필요한 러너',
      '발목 뼈가 튀어나온 러너(Haglund)',
    ],
  },
  priceAnalysis: {
    msrp: 169000,
    costPerKm: 211,
    valueRating: 8,
    priceTier: 'mid',
    alternatives: ['mizuno-wave-inspire-21', 'asics-gel-kayano-33', 'brooks-adrenaline-gts-25'],
  },
  features: [
    'Enerzy NXT(질소 주입) 미드솔',
    'Wave 플레이트 — 뒤꿈치~미드풋 지지',
    '랩 드롭 7.6mm로 하향 (21은 DB 12.9mm)',
    '10oz(남성 US 9) 이하로 내려온 첫 인스파이어',
  ],
  detailedSpecs: {
    weight: '280g (RunRepeat 랩 실측, 남성) / 294g (브랜드 표기) / 9.9oz(약 281g, 남성 US 9, Doctors of Running) — 21(DB 286g)보다 가벼움',
    stackHeight: '힐 36.6mm / 포어풋 29.0mm (RunRepeat 랩 실측) · 브랜드 표기 38.5/28.5mm · Doctors of Running 37/27mm — 출처마다 다름',
    drop: '7.6mm (RunRepeat 랩 실측) · 브랜드 표기 10mm · Doctors of Running 10mm',
    midsole: 'Enerzy NXT (질소 주입 변형, 기존 Enerzy 대체 — Doctors of Running 설명)',
    plate: '웨이브 플레이트 (뒤꿈치~미드풋 강성·가이드, 안쪽 지지 중심에서 진화)',
    outsole: '내마모 러버 (RunRepeat 랩 마모 0.5mm)',
    upper: '엔지니어드 메쉬',
    width: '표준 — RunRepeat 랩 토박스 72.7mm(평균 73.2mm보다 0.5mm 좁음). Doctors of Running은 전체적으로 "slightly wide"이나 뒤꿈치가 얕아 고정이 약하다고 평가. 한국 공식몰에 SW(J1GC2645 계열) 별도 상품 판매 확인 — SW 의미는 공식 설명 미확인(추정: 슈퍼와이드)',
    durability: '800km 안팎(추정) — 아웃솔 마모 0.5mm(RunRepeat 랩)는 측정했으나 km 환산은 공식 없음',
    price: '₩169,000 (미즈노 코리아 소비자가, 2026-10-02 확인 — 할인가 ₩135,200 표기) · 미국 $149.95 · 21은 ₩159,000',
    costPerKm: '약 ₩211/km (800km 가정, 추정)',
    footType: '약한 과내전·중립',
    landingPattern: '힐스트라이크~미드풋',
  },
  reviews: [
    {
      userType: '에디터 분석 — 랩이 말해 주는 21과의 차이',
      text: 'RunRepeat 랩이 있어 21과의 차이를 수치로 볼 수 있습니다. 무게는 랩 실측 280g로 21의 DB 286g보다 가벼워졌고, 드롭은 랩 7.6mm로 21의 DB 12.9mm에서 5mm 넘게 내려왔으며, 전족부 스택은 29mm로 올랐습니다. 즉 힐 착지를 전제로 한 두툼한 안정화에서 전족부까지 쓰는 중립에 가까운 안정화로 이동한 모델입니다. 쿠션(SA 힐 125·전족부 115)과 에너지 리턴(52.7%·52.8%)은 중간 수준이고, 가격은 159,000원에서 169,000원으로 1만원 올랐습니다.',
    },
    {
      userType: 'Doctors of Running 관점 — 가능성은 있지만 힐 핏이 발목을 잡는다',
      text: 'Doctors of Running은 이 모델을 C로 평가했습니다. 새 Enerzy NXT 미드솔은 처음에 단단하지만 주행거리가 쌓이며 나아진다고 봤고, 웨이브 플레이트는 뒤꿈치~미드풋에서 약한 안정성을 준다고 설명했습니다. 결정적 문제는 힐입니다 — 힐 높이가 얕고 폭이 약간 넓어 항상 빠질 듯한 느낌이 들고, 끈 조절이나 두꺼운 양말로도 해결되지 않았다고 적었습니다. 앞·미드풋 핏은 몸에 맞는 편이고, 시리즈 최초로 10oz 아래로 내려온 무게는 의미 있다고 평가했습니다. 구매 전 매장 착화를 권했고 하글룬드 변형이 있거나 보조 깔창이 필요한 러너에게는 권하지 않았습니다.',
    },
    {
      userType: '예상 적합 — 21의 높은 드롭이 불편했던 약한 과내전 러너',
      text: '21의 높은 드롭이 아킬레스나 종아리에 부담이었던 약한 과내전 러너에게 맞을 가능성이 있습니다. 랩 드롭 7.6mm에 전족부 스택이 늘어 착지 전환이 부드러워졌고, 웨이브 플레이트가 뒤꿈치~미드풋을 잡아 줍니다. 280g이라 데일리 이지런과 중간 거리까지 감당하고, 169,000원에 아웃솔 마모가 적어(랩 0.5mm) 운용 비용도 낮은 편입니다. 단 힐 고정이 약하다는 평가가 있어 시착이 먼저입니다.',
    },
    {
      userType: '비교 관점 — 21을 신고 있거나 세일가 21과 고민하는 경우',
      text: '강한 과내전 교정이나 힐 착지 중심의 높은 드롭을 원한다면 21(DB 기준 12.9mm, 평발 대응)이 더 맞을 수 있습니다. 22는 가벼워지고 드롭이 내려가며 안정화의 성격이 약해진 모델이라, 안정성보다 범용성을 원할 때 유리합니다. 21의 힐 핏에 불편이 없었다면 갈아탈 이유는 크지 않고, 22는 힐 컵이 얕아 헐겁게 느낄 수 있다는 점이 변수입니다.',
    },
  ],
  similarShoes: ['mizuno-wave-inspire-21', 'asics-gel-kayano-33', 'brooks-adrenaline-gts-25', 'brooks-glycerin-gts-23'],
  relatedPosts: [
    { slug: 'mizuno-running-shoes-lineup-tier-guide-2026', title: '미즈노 러닝화 계급도' },
  ],
};
