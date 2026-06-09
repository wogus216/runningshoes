import type { Shoe } from '@/types/shoe';

export const liningShoes: Shoe[] = [
  {
    id: 'li-ning-red-hare-9-ultra',
    slug: 'li-ning-red-hare-9-ultra',
    brand: 'Li-Ning',
    name: '레드헤어 9 울트라',
    image: '/images/shoes/lining/red-hare-9-ultra/side.webp',
    images: [
      '/images/shoes/lining/red-hare-9-ultra/side.webp',
      '/images/shoes/lining/red-hare-9-ultra/angle.webp',
      '/images/shoes/lining/red-hare-9-ultra/top.webp',
      '/images/shoes/lining/red-hare-9-ultra/back.webp',
      '/images/shoes/lining/red-hare-9-ultra/outsole.webp',
    ],
    category: '쿠션화',
    rating: 4.5,
    status: 'new',
    price: 150000,
    description:
      '유리섬유 플레이트와 PEBA 3중 미드솔을 10만 원대에 담은 라이닝의 화제의 맥스쿠션 슈퍼트레이너입니다.',
    oneliner: '10만 원대 PEBA 맥스쿠션 — "카본"은 아니지만 가성비 슈퍼트레이너의 진짜 강자',
    tags: ['쿠션화', '맥스쿠션', '슈퍼트레이너', '가성비', 'PEBA', '중국 러닝화', '장거리', '데일리'],

    specs: {
      weight: 246,
      cushioning: 9,
      responsiveness: 7,
      stability: 5,
      drop: 5,
      durability: 550,
    },

    biomechanics: {
      stackHeight: {
        heel: 47,
        forefoot: 42,
      },
      drop: 5,
      carbonPlate: false,
      plateType: 'flat',
      midsoleType: 'PEBA 3중 + Super Boom Capsule',
      optimalPace: '5:00-6:30 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'good',
      achillesTendinopathy: 'good',
      kneeIssues: 'good',
      shinSplints: 'good',
    },

    koreanFootFit: {
      toBoxWidth: 'narrow',
      flatFootCompatibility: 'poor',
      wideOptions: false,
      winterCompatibility: 'fair',
      summerCompatibility: 'good',
    },

    targetUsers: {
      recommended: [
        '데일리 조깅~LSD·마라톤 훈련에서 푹신하고 바운시한 맥스쿠션을 원하는 러너',
        '슈퍼블라스트·메가블라스트급 스펙을 절반 값에 경험하고 싶은 가성비 러너',
        '발볼이 좁거나 표준이고 중립 주법인 러너',
      ],
      notRecommended: [
        '발볼이 넓은 러너 (와이드 옵션 없음, 전 길이가 좁음)',
        '인터벌·스피드 훈련 중심 러너 (로커 없는 전통적 플렉스, 추진 플레이트 아님)',
        '오버프로네이션이 있거나 안정화가 필요한 러너 (측방 안정성 약함)',
        '국내 AS·정식 유통·즉시 교환이 중요한 러너 (병행·구매대행만 존재)',
      ],
    },

    features: [
      'PEBA 3중 미드솔 + Super Boom 캡슐 (제조사 주장 95% 에너지 리턴)',
      '힐 47mm / 전족 42mm 맥스쿠션 스택 (RTR 실측)',
      '유리섬유(Wing Fiber) 미드풋 안티토션 플레이트 — 카본 플레이트 아님',
      '경쟁 맥스쿠션의 절반 값인 10만 원대 가성비 (병행)',
      '뛰어난 아웃솔 그립·내구성 (RTR 그립 최고 등급)',
    ],

    priceAnalysis: {
      msrp: 150000,
      streetPrice: 130000,
      costPerKm: 273,
      valueRating: 9,
      priceTier: 'mid',
      alternatives: ['asics-superblast-3', 'asics-megablast', 'nike-vomero-premium'],
      valueAdvantages: [
        '아식스 슈퍼블라스트(259,000원)·메가블라스트(299,000원)의 절반 값',
        'PEBA 3중 미드솔 + 46mm급 맥스쿠션을 10만 원대에',
        '아웃솔 내구성·그립이 동급 최상 — km당 비용 부담이 낮음',
      ],
    },

    detailedSpecs: {
      weight: '246g (RTR 실측, EU43/US9.5) · US M9 약 241g',
      stackHeight: '힐 47mm / 전족 42mm (RTR 실측). 제조사 공칭 43/35mm와 차이 있음',
      drop: '5mm (RTR 실측) / 8mm (제조사 공칭)',
      midsole: 'PEBA 3중 구조 — 소프트 펠릿 PEBA + Super Boom 캡슐 + 하드 펠릿 PEBA',
      plate: '유리섬유(Wing Fiber) 미드풋 안티토션 플레이트 — 카본 아님, 추진보다 비틀림 제어 목적',
      outsole: 'CPU(카본 폴리우레탄 계열) 추정, RTR 그립 최고 등급(++++)',
      upper: '엔지니어드 메시 + 거셋(gusseted) 텅',
      width: '좁음(narrow) — 전 길이가 좁고 와이드 옵션 없음',
      durability: '500-600km (WeeViews 약 100km 테스트 후 아웃솔 무마모)',
      price: '13~17만 원 (병행·구매대행) · 한국 미정식출시',
      costPerKm: '약 273원/km',
      footType: '중립~좁은 발. 평발·오버프로네이션에는 비권장',
      landingPattern: '미드풋~힐. 데일리~마라톤 페이스',
    },

    reviews: [
      {
        userType: '산초 에디터 분석',
        rating: 4.5,
        text:
          '커뮤니티가 "이 가격에 카본?"으로 띄웠지만, 핵심은 카본이 아니라 가성비입니다. 유리섬유 안티토션 플레이트 + PEBA 3중 미드솔로 추진보다 푹신함·바운시함에 강점이 있는 맥스쿠션 슈퍼트레이너예요. 슈퍼블라스트·메가블라스트의 절반 값이라는 게 진짜 매력. 단, 발볼이 좁고 와이드가 없어 한국 러너는 사이즈를 여유 있게 봐야 합니다.',
        source: 'editor',
        sourceUrl: 'https://www.roadtrailrun.com/2026/03/2026-chinese-super-trainers-reviewed.html',
      },
      {
        userType: 'Road Trail Run (해외 실측)',
        rating: 4.5,
        text:
          '달리기 재미가 뛰어난 신발이다. 다만 로커형이 아니라 전통적인 전족부 플렉스 라이드에 가깝다. 고에너지 압축-복원 방식은 나이키 줌에어와 비슷하지만 공기가 아니라 고체 폼이라는 점이 다르다. 넓은 아웃솔과 높은 미드솔 사이드월로 높은 스택 대비 안정적이다.',
        source: 'community',
        sourceUrl: 'https://www.roadtrailrun.com/2026/03/2026-chinese-super-trainers-reviewed.html',
      },
      {
        userType: 'WeeViews (약 100km 테스트)',
        rating: 4,
        text:
          '포고스틱처럼 튀는 반발이 인상적이고, 100km를 신어도 아웃솔 마모가 거의 없을 만큼 내구성이 좋다. 다만 핏이 전반적으로 좁아 발볼 넓은 러너에게는 답답할 수 있다.',
        source: 'community',
        sourceUrl: 'https://www.weeviews.com/reviews/4404/li-ning-red-hare-ultra',
      },
    ],

    editorComment:
      '2026년 1월 출시된 신상 + 비주류 브랜드라 RunRepeat 같은 독립 랩의 SA/HA/에너지 리턴 수치가 아직 없습니다. 스택·무게·드롭은 Road Trail Run의 직접 실측(EU43/US9.5)을 기준으로 했고, 제조사 공칭치(43/35mm, 드롭 8mm)와 차이가 있어 detailedSpecs에 함께 적어 두었습니다. "95% 에너지 리턴"은 제조사 자체 측정치이니 참고만 하세요. 한국 정식 유통이 없어 가격은 병행·구매대행가(13~17만 원) 기준입니다.',

    similarShoes: ['asics-superblast-3', 'asics-megablast', 'nike-vomero-premium'],
  },
  {
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
      costPerKm: '약 233원/km',
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
      '2025년 12월 출시된 신상이라 RunRepeat 등 독립 랩 데이터가 없고, 무게·스택은 해외 리테일러(Shopnings·VJsneaker)·사용자 실측 기준입니다. 흔히 "카본 버전"으로 알려졌지만 라이닝 공식 제품 설명은 카본이 아닌 "展翼식 TPU 지지편(아치 서포트)"으로 표기합니다 — T400 카본 주장은 일부 마케팅 페이지에서만 나오고 독립 분해 검증이 없어, 본 DB는 공식 근거대로 TPU(carbonPlate=false)로 기재합니다. 9 Ultra(맥스쿠션 슈퍼트레이너)와 달리 9 PRO는 낮은 스택의 데일리 트레이너입니다.',

    similarShoes: ['li-ning-red-hare-9-ultra', 'hoka-mach-6', 'asics-novablast-5'],
  },
];
