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
];
