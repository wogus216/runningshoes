import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'brooks-hyperion-max-3',
  slug: 'brooks-hyperion-max-3',
  brand: 'Brooks',
  name: '하이페리온 맥스 3',
  image: '/images/shoes/brooks/hyperionmax3/side.webp',
  images: [
    '/images/shoes/brooks/hyperionmax3/side.webp',
    '/images/shoes/brooks/hyperionmax3/front.webp',
    '/images/shoes/brooks/hyperionmax3/back.webp',
    '/images/shoes/brooks/hyperionmax3/top.webp',
    '/images/shoes/brooks/hyperionmax3/outsole.webp',
  ],
  category: '쿠션화',
  description: 'DNA GOLD(PEBA) + DNA FLASH v2 · SpeedVault 구조의 하이페리온 맥스 3. RunRepeat 실험실 검체 283g·45.6/35mm. 한국 현재 정가 미확인.',
  oneliner: 'DNA GOLD(PEBA) + DNA FLASH v2 · SpeedVault · 283g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-09 원문 재확인. 한국 공식몰 실시간 연결 실패로 현재 정가·판매 SKU·폭·재고는 미확인입니다. 과거 원본 캐시에는 219,000원과 남성 아웃렛 175,200원이 표시됐지만 현재 가격으로 확정하지 않습니다. 여성 캐시는 5개월 전 자료입니다. 영국 제조사는 6mm·280.7g(사이즈 미표기), RR 브랜드 메타는 46/40mm·6mm, DOR 소개는 45/37mm·8mm·280g(남성 US9/여성 US10.5)입니다. RR 실측 45.6/35.0mm·10.6mm와 구분합니다. 25.7AC 주폼과 40.1AC 보조폼은 층별 수치입니다. 제조사의 100% PEBA는 DNA GOLD를 꾸미는 설명으로 전체 중창이 모두 PEBA라는 뜻은 아닙니다. 저온 변화 17%를 한국 사계절 동일한 주행감으로, 마모 0.9mm를 700km 수명으로 해석하지 않습니다. DOR Matt(남성 US10)은 정사이즈·밀착되는 낮은 볼륨과 좋은 고정, 약간의 앞발 신축성을 느꼈습니다. 반면 Andrea(여성 US9.5)는 힐 패딩이 발을 앞으로 밀고 앞코가 낮으며 메시가 뻣뻣하고 혀가 접혀 자극됐다고 적었습니다. Matt의 여러 훈련 활용과 Andrea의 무게·핏 불편을 하나의 공통 용도로 합치지 않습니다. Matt의 후경골근 부담 경험도 임상 등급이 아닙니다. 한국 현재 와이드 SKU는 미확인입니다. RR 내부 최광폭 94.9mm·엄지 72.6mm·높이 25.0mm를 모든 발의 장거리 무압박 보장으로 쓰지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  specs: {
    weight: 283,
    cushioning: 10,
    responsiveness: 8,
    stability: 6,
    drop: 10.6,
  },
  biomechanics: {
    stackHeight: {
      heel: 45.6,
      forefoot: 35,
    },
    drop: 10.6,
    carbonPlate: false,
    plateType: 'nylon SpeedVault; DOR PEBAX wording conflict retained',
    midsoleType: 'DNA GOLD(PEBA) + DNA FLASH v2 · SpeedVault',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
  },
  targetUsers: {
    recommended: [
      'SpeedVault와 두 폼의 전환을 시착 비교하려는 러너',
      '낮은 앞코·힐 패딩·혀 접힘을 실제 규격에서 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 앞코·발등 자극이나 중족 전환 불편이 생기는 경우',
      '과거 캐시만으로 현재 한국 판매를 확정한 매물',
    ],
  },
  features: [
    'DNA GOLD(PEBA) + DNA FLASH v2 · SpeedVault',
    '283g · 45.6/35mm · 드롭 10.6mm (RunRepeat 실험실 검체)',
    '영국 제조사·RR은 nylon SpeedVault, DOR는 PEBAX라고 적어 출처 차이를 보존합니다. 카본 플레이트로 표시하지 않습니다.',
    '한국 현재 와이드 SKU는 미확인입니다. RR 내부 최광폭 94.9mm·엄지 72.6mm·높이 25.0mm를 모든 발의 장거리 무압박 보장으로 쓰지 않습니다.',
  ],
  priceAnalysis: {
    priceTier: 'premium',
    alternatives: [
      'asics-superblast-2',
      'nike-zoom-fly-6',
      'new-balance-sc-trainer-v3',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/brooks-hyperion-max-3',
      text: '영국 제조사는 6mm·280.7g(사이즈 미표기), RR 브랜드 메타는 46/40mm·6mm, DOR 소개는 45/37mm·8mm·280g(남성 US9/여성 US10.5)입니다. RR 실측 45.6/35.0mm·10.6mm와 구분합니다. 25.7AC 주폼과 40.1AC 보조폼은 층별 수치입니다. 제조사의 100% PEBA는 DNA GOLD를 꾸미는 설명으로 전체 중창이 모두 PEBA라는 뜻은 아닙니다. 저온 변화 17%를 한국 사계절 동일한 주행감으로, 마모 0.9mm를 700km 수명으로 해석하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/brooks-hyperion-max-3-review-2025/',
      text: 'DOR Matt(남성 US10)은 정사이즈·밀착되는 낮은 볼륨과 좋은 고정, 약간의 앞발 신축성을 느꼈습니다. 반면 Andrea(여성 US9.5)는 힐 패딩이 발을 앞으로 밀고 앞코가 낮으며 메시가 뻣뻣하고 혀가 접혀 자극됐다고 적었습니다. Matt의 여러 훈련 활용과 Andrea의 무게·핏 불편을 하나의 공통 용도로 합치지 않습니다. Matt의 후경골근 부담 경험도 임상 등급이 아닙니다.',
    },
  ],
  detailedSpecs: {
    weight: '283g (RunRepeat 실험실 검체). 영국 제조사는 6mm·280.7g(사이즈 미표기), RR 브랜드 메타는 46/40mm·6mm, DOR 소개는 45/37mm·8mm·280g(남성 US9/여성 US10.5)입니다. RR 실측 45.6/35.0mm·10.6mm와 구분합니다.',
    stackHeight: '45.6/35mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '10.6mm (RunRepeat 실험실 검체). 영국 제조사는 6mm·280.7g(사이즈 미표기), RR 브랜드 메타는 46/40mm·6mm, DOR 소개는 45/37mm·8mm·280g(남성 US9/여성 US10.5)입니다. RR 실측 45.6/35.0mm·10.6mm와 구분합니다.',
    midsole: 'DNA GOLD(PEBA) + DNA FLASH v2 · SpeedVault. 주폼 25.7AC·보조 40.1AC, 힐/전족부 SA 151/133·에너지 리턴 63.9/66.2%. 25.7AC 주폼과 40.1AC 보조폼은 층별 수치입니다. 제조사의 100% PEBA는 DNA GOLD를 꾸미는 설명으로 전체 중창이 모두 PEBA라는 뜻은 아닙니다. 저온 변화 17%를 한국 사계절 동일한 주행감으로, 마모 0.9mm를 700km 수명으로 해석하지 않습니다.',
    plate: '영국 제조사·RR은 nylon SpeedVault, DOR는 PEBAX라고 적어 출처 차이를 보존합니다. 카본 플레이트로 표시하지 않습니다.',
    width: 'RR 내부 최광폭 94.9mm·엄지 부위 72.6mm·높이 25mm. 한국 현재 와이드 SKU는 미확인입니다. RR 내부 최광폭 94.9mm·엄지 72.6mm·높이 25.0mm를 모든 발의 장거리 무압박 보장으로 쓰지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식몰 실시간 연결 실패로 현재 정가·판매 SKU·폭·재고는 미확인입니다. 과거 원본 캐시에는 219,000원과 남성 아웃렛 175,200원이 표시됐지만 현재 가격으로 확정하지 않습니다. 여성 캐시는 5개월 전 자료입니다.',
  },
  similarShoes: [
    'asics-superblast-2',
    'nike-zoom-fly-6',
    'puma-magmax-nitro-2',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-midsole-foam-guide-2026',
      title: '미드솔 폼 완전 해설 — EVA·TPU·PEBA',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/FjC6svgS',
    },
  ],
  tags: [
    '슈퍼트레이너',
    'PEBA',
    '맥시멀 쿠션',
    '장거리',
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 아웃렛 과거 캐시 확인 범위',
        url: 'https://brooksrunning.co.kr/product/detail.html?product_no=585',
        note: '정가 219,000원·아웃렛 175,200원은 과거 관찰, 현재 가격·재고 미확인.',
      },
      {
        label: 'Brooks 영국 현재 구조 공시',
        url: 'https://www.brooksrunning.com/en_gb/mens/road-running-shoes/hyperion-max-3/110467.html',
        note: 'nylon SpeedVault·6mm·DNA GOLD와 DNA FLASH v2. 한국 가격 근거 아님.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/brooks-hyperion-max-3',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 283g·45.6/35mm·10.6mm. 25.7AC 주폼과 40.1AC 보조폼은 층별 수치입니다. 제조사의 100% PEBA는 DNA GOLD를 꾸미는 설명으로 전체 중창이 모두 PEBA라는 뜻은 아닙니다. 저온 변화 17%를 한국 사계절 동일한 주행감으로, 마모 0.9mm를 700km 수명으로 해석하지 않습니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/brooks-hyperion-max-3-review-2025/',
        note: '영국 제조사는 6mm·280.7g(사이즈 미표기), RR 브랜드 메타는 46/40mm·6mm, DOR 소개는 45/37mm·8mm·280g(남성 US9/여성 US10.5)입니다. RR 실측 45.6/35.0mm·10.6mm와 구분합니다.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: 'AC·HA·HC, SA·에너지 리턴, BR·구방식1~5와 내부/외부 폭을 구분합니다. 일반 정책은 개별 라벨 확인과 다릅니다.',
      },
    ],
    limitations: [
      '모델별 임상 예방·치료 등급, 공통 최적 페이스·주행 수명·km당 비용은 미확인으로 제거했습니다.',
      '에디터 평점·1~10점·발볼 및 계절 분류·구매 링크는 모든 항목을 새로 검증한 수치나 임상 효과가 아닙니다.',
      '판매 조건은 확인한 상품·시점에 한정합니다. 미확인을 미출시·단종·전국 재고 없음으로 해석하지 않습니다.',
    ],
  },
};
