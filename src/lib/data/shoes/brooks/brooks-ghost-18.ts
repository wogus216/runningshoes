import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'brooks-ghost-18',
  slug: 'brooks-ghost-18',
  brand: 'Brooks',
  name: '고스트 18',
  image: '/images/shoes/brooks/ghost18/side.webp',
  images: [
    '/images/shoes/brooks/ghost18/side.webp',
    '/images/shoes/brooks/ghost18/angle.webp',
    '/images/shoes/brooks/ghost18/back.webp',
    '/images/shoes/brooks/ghost18/top.webp',
    '/images/shoes/brooks/ghost18/outsole.webp',
  ],
  category: '입문화',
  rating: 4.5,
  status: 'new',
  price: 169000,
  description:
    '브룩스 대표 입문화 고스트의 18세대. DNA Loft v3 미드솔과 테이퍼드 토박스 등 정체성은 그대로 유지하면서 힐 스택을 소폭 높이고 혀 소재를 니트로 바꿨습니다. 무게는 17세대와 동일한 289g입니다.',
  oneliner: '17세대와 무게(289g)까지 같은, 검증된 것을 다듬은 업데이트',
  editorComment:
    'RunRepeat 랩 실측 기준(2026-06-07 게시, 종합 86점 Great)으로 정리하면, 고스트 18은 17세대의 정체성을 그대로 지키면서 세부만 다듬은 모델입니다. 무게가 289g으로 17세대와 완전히 같고, 힐 스택은 37.3mm로 17세대(36mm)보다 1.3mm 높아졌습니다. 반대로 전족부는 25.1mm로 17세대(26mm)보다 살짝 낮아져, 앞뒤 균형이 미세하게 재조정됐습니다.\n\n눈에 띄는 발견 하나 — RunRepeat이 실측한 드롭은 12.2mm인데, 브랜드 공식 표기는 10mm입니다. 이 사이트는 다른 모델(예: 아식스 소닉블라스트 2)에서도 브랜드 공식 수치와 랩 실측치가 갈리는 경우를 그대로 병기해왔습니다 — 여기서도 실측치를 기준으로 specs를 채웠습니다.\n\n에너지 리턴은 힐 52.4%·전족 58.1%로 카테고리 평균(58.7%)보다 다소 낮아, RunRepeat은 이 부분을 단점으로 꼽았습니다. 대신 유연성(12.3N, 평균 15.5N보다 유연)과 아웃솔 내구성(마모 0.8mm, 평균 1.1mm보다 우수)에서 강점을 보였습니다. 힐 카운터 경직도가 5/5로 뒤꿈치 착지가 강한 러너에게 안정된 잠김감을 주지만, 중등도 이상 과내전이 있다면 브룩스 자체적으로도 안정화 라인인 어드레날린 GTS 25를 권합니다.\n\n토박스는 70.6mm 실측으로 이 사이트 기준(68~75mm) "표준" 구간에 들지만, RunRepeat 자체 평균(73.2mm) 대비로는 좁은 편이라는 평가입니다. 17세대와 마찬가지로 발볼이 넓다면 와이드 옵션을 선택하는 편이 안전합니다.\n\n한국 정가는 169,000원으로 17세대와 동일하고, 남녀 화이트 색상과 와이드(코코넛) 옵션이 brooksrunning.co.kr에 등재돼 있습니다(2026-09-10 확인).',
  tags: ['입문화', '데일리 러닝화', 'DNA Loft v3', '힐스트라이커'],

  specs: {
    weight: 289,
    cushioning: 8,
    responsiveness: 6,
    stability: 7,
    drop: 12,
    durability: 800,
  },

  biomechanics: {
    stackHeight: { heel: 37, forefoot: 25 },
    drop: 12,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'DNA Loft v3',
    optimalPace: '5:30-7:00 min/km',
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
    winterCompatibility: 'fair',
    summerCompatibility: 'fair',
  },

  priceAnalysis: {
    msrp: 169000,
    streetPrice: 169000,
    costPerKm: 211,
    valueRating: 8,
    priceTier: 'budget',
    alternatives: ['brooks-ghost-17', 'nike-pegasus-41', 'asics-gel-nimbus-28'],
    valueAdvantages: [
      '17세대와 동일한 가격(169,000원)으로 세대교체',
      '아웃솔 내구성이 카테고리 평균보다 우수(랩 실측 마모율 기준)',
      '남녀 + 와이드(2E) 옵션까지 한국 공식몰에 등재',
      '유연성이 카테고리 평균보다 좋아 자연스러운 주행감',
    ],
  },

  targetUsers: {
    recommended: [
      '뒤꿈치 착지가 강한 힐 스트라이커',
      '검증된 데일리화를 그대로 이어가려는 기존 고스트 사용자',
      '입문자 — 착지 충격에 관대하고 실패 확률이 낮은 선택',
      '런/워크 겸용으로 편하게 신을 신발을 찾는 러너',
    ],
    notRecommended: [
      '반발력(에너지 리턴)을 중시하는 러너 — 카테고리 평균보다 낮음',
      '중등도 이상 과내전이 있는 러너 — 브룩스 자체가 어드레날린 GTS 25를 권장',
      '발볼이 아주 넓은 러너 — 와이드를 선택해도 기본 토박스 자체는 표준~좁은 편',
      '더 가벼운 신발을 원하는 러너 — 289g은 입문화 중 가벼운 축은 아님',
    ],
  },

  features: [
    'DNA Loft v3 미드솔 — 17세대와 동일 폼, 힐 스택만 소폭 상향(36→37.3mm)',
    '아웃솔 마모율 0.8mm로 카테고리 평균(1.1mm)보다 우수한 내구성(RunRepeat 실측)',
    '혀(tongue) 소재를 니트로 교체, 패딩 9.0mm로 두꺼워져 착화감 개선',
    '힐 카운터 경직도 5/5 — 뒤꿈치 착지 시 안정된 잠김감',
    '289g · 한국 정가 169,000원(17세대와 동일) · 와이드 옵션 있음',
  ],

  reviews: [
    {
      userType: '에디터 분석 (RunRepeat 랩 실측 기반)',
      rating: 86,
      text: '고스트 18은 17세대를 갈아엎기보다 다듬은 업데이트입니다. 무게는 289g으로 완전히 같고, 힐 스택만 1.3mm 높아졌습니다(36→37.3mm). DNA Loft v3 폼을 그대로 쓰면서 혀 소재를 니트로 바꿔 착화감을 개선했습니다. 에너지 리턴이 카테고리 평균보다 낮다는 점은 아쉽지만, 애초에 고스트가 반발력보다 안정된 데일리 주행을 목표로 하는 신발이라는 걸 감안하면 성격에 맞는 트레이드오프입니다. 아웃솔 마모율이 평균보다 우수하게 나온 점은 장거리 데일리화로서 확실한 강점입니다.',
    },
    {
      userType: '17세대와 비교 — 바꿀 이유가 크지 않다',
      text: '17세대를 잘 신고 있다면 18세대로 급히 갈아탈 이유는 크지 않습니다. 무게가 같고 폼도 같은 DNA Loft v3이며, 스택 변화도 힐 +1.3mm·전족 -0.9mm로 체감이 크지 않은 수준입니다. 가격도 169,000원으로 동일합니다. 바뀐 건 혀 소재(니트)와 힐탭 길이 정도라, 새 신발이 필요한 시점에 자연스럽게 세대교체하면 되는 성격입니다.',
    },
    {
      userType: '드롭 표기 차이 — 브랜드 공식 10mm, 랩 실측 12.2mm',
      text: 'RunRepeat이 신발을 절단해 실측한 드롭은 12.2mm인데, 브랜드가 공식적으로 표기하는 수치는 10mm입니다. 이런 차이는 미드솔 형상이나 측정 지점에 따라 종종 발생하며, 이 사이트는 랩 실측치를 기준으로 specs를 채웁니다. 체감상 드롭 차이가 크게 느껴지지 않는다는 평가가 많지만, 드롭에 민감한 러너라면 참고할 만한 수치입니다.',
    },
  ],

  detailedSpecs: {
    weight: '289g (남성 US 9, RunRepeat 실측) — 17세대와 동일',
    stackHeight: '힐 37.3mm / 포어풋 25.1mm (RunRepeat 실측)',
    drop: '12.2mm (RunRepeat 실측) — 브랜드 공식 표기는 10mm',
    midsole: 'DNA Loft v3 — 경도 40.5 HA(카테고리 평균 35.6보다 단단함), 유연성 12.3N(평균 15.5N보다 유연)',
    plate: '없음',
    outsole: '러버 — 습식 그립 0.57(평균 0.52보다 우수), 마모율 0.8mm(평균 1.1mm보다 우수)',
    upper: '엔지니어드 메시 + 니트 혀(신규) + 힐카운터 경직도 5/5',
    width: '토박스 실측 70.6mm(이 사이트 기준 표준 구간, RunRepeat 자체 평균 대비로는 좁은 편) · 국내 와이드(2E) 옵션 있음',
    durability: '800km (추정 — 17세대와 동일 카테고리 기준, 랩 실측 아웃솔 마모율은 평균보다 우수)',
    price: '169,000원 (2026-09-10 brooksrunning.co.kr 확인, 남녀+와이드 등재, 17세대와 동일가)',
    costPerKm: '약 ₩211/km (800km 기준)',
    footType: '중립 · 뒤꿈치 착지에 최적화',
    landingPattern: '힐스트라이크',
  },

  similarShoes: ['brooks-ghost-17', 'nike-pegasus-41', 'asics-gel-nimbus-28'],
  relatedPosts: [
    { slug: 'brooks-ghost-18-review', title: '고스트 18 후기 — 17세대와 무엇이 달라졌나' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://search.shopping.naver.com/search/all?query=브룩스+고스트18' }],
};
