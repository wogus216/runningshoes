import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'hoka-mach-x-3',
  slug: 'hoka-mach-x-3',
  brand: 'Hoka',
  name: '마하 X 3',
  image: '/images/shoes/hoka/machX3/side.webp',
  images: [
    '/images/shoes/hoka/machX3/side.webp',
    '/images/shoes/hoka/machX3/front.webp',
    '/images/shoes/hoka/machX3/top.webp',
    '/images/shoes/hoka/machX3/outsole.webp',
  ],
  category: '쿠션화',
  rating: 5,
  description: 'PEBA 상층 · EVA 하층 · Pebax 플레이트 구조의 마하 X 3. 실험실 264g·힐/전족부 42.9/33.4mm. 한국 현재 정가 미확인.',
  oneliner: '264g 실험실 무게 · PEBA 상층 · EVA 하층 · Pebax 플레이트',
  editorComment: "2026-11-09 원문 재확인. 호카 코리아 공식 링크트리 연결스토어의 여성마하 X3와이드 제목 1168872-NNRS 상품은 할인전 249,000원·표시판매 99,600원·품절이었습니다. 같은상세의상품정보에는 1162410-BCQ로 적혀 정확 SKU 일치가 미해결입니다. 따라서 일반모델정가·확정와이드 필드는 비워두고, 남성현재 상품·전색상재고도 미확인입니다. DOR 소개 남성 289g(US9)·여성 244g(US8),46/41mm·드롭 5mm. RR 브랜드메타는남 252g·여 215g 과 44/39·42/37mm 로 적고, RR 실측 264g·42.9/33.4mm·9.5mm 와 차이가 있어 출처조건을 구분합니다. RR 주폼 32.5AC·보조폼 41.6AC 는 다른 층입니다. 한국제목 SKU 와상품정보코드의충돌을 조용히 덮지 않으며, 표본의마모 0.8mm 를 400km수명으로 바꾸지 않습니다. 힐물집이모두해결됐다는보장·공통최적 페이스·질환보호 등급은 철회합니다. DOR David(남성 US9.5)는 길이가 맞고 힐이 약간 좁으며 발등 볼륨이 밀착됐다고 느꼈습니다. Bach은 길이·앞쪽 공간이 맞고 중족 밀착이 주행 후 완화됐다고 평가했습니다. David는 부드러운 느낌, Bach은 단단한 느낌을 적었고 급한 내리막의 높은 중립 플랫폼과 전방 전환을 한계로 지적했습니다. 한국상품제목은여성와이드지만같은페이지의모델코드가 달라 정확한 변형 일치를 확인하지 못했습니다. RR 내부 최광폭 91.6mm·엄지 70.8mm·높이 28.5mm 를 한국 와이드 치수로 쓰지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.",
  tags: [
    '슈퍼트레이너',
    'PEBA 폼',
    'Pebax 플레이트',
  ],
  specs: {
    weight: 264,
    cushioning: 10,
    responsiveness: 8,
    stability: 7,
    drop: 9.5,
  },
  biomechanics: {
    stackHeight: {
      heel: 42.9,
      forefoot: 33.4,
    },
    drop: 9.5,
    carbonPlate: false,
    plateType: 'Pebax plate (non-carbon)',
    midsoleType: 'PEBA 상층 · EVA 하층 · Pebax 플레이트',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },
  targetUsers: {
    recommended: [
      'Pebax판재와 이중폼의 전환을 시착 비교하려는 러너',
      '정확한 상품코드와 폭을 판매자에게 확인할 수 있는 구매자',
    ],
    notRecommended: [
      '상품제목·모델코드 충돌이 해결되지 않은 매물',
      '실제 착화에서 앞코·발등·내리막 전환이 불편한 경우',
    ],
  },
  features: [
    'PEBA 상층 · EVA 하층 · Pebax 플레이트',
    '264g · 힐/전족부 42.9/33.4mm (RunRepeat)',
    "힐/전족부 SA 151/125 · 에너지 리턴 58.9/69.3% (RunRepeat). RR 주폼 32.5AC·보조폼 41.6AC 는 다른 층입니다. 한국제목 SKU 와상품정보코드의충돌을 조용히 덮지 않으며, 표본의마모 0.8mm 를 400km수명으로 바꾸지 않습니다. 힐물집이모두해결됐다는보장·공통최적 페이스·질환보호 등급은 철회합니다.",
    "한국상품제목은여성와이드지만같은페이지의모델코드가 달라 정확한 변형 일치를 확인하지 못했습니다. RR 내부 최광폭 91.6mm·엄지 70.8mm·높이 28.5mm 를 한국 와이드 치수로 쓰지 않습니다.",
  ],
  priceAnalysis: {
    valueRating: 8,
    priceTier: 'high',
    alternatives: [
      'nike-vomero-18',
      'asics-superblast-2',
      'new-balance-sc-trainer-v3',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/hoka-mach-x-3',
      text: "264g 과 SA 151/125·에너지 리턴 58.9/69.3% 는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR 주폼 32.5AC·보조폼 41.6AC 는 다른 층입니다. 한국제목 SKU 와상품정보코드의충돌을 조용히 덮지 않으며, 표본의마모 0.8mm 를 400km수명으로 바꾸지 않습니다. 힐물집이모두해결됐다는보장·공통최적 페이스·질환보호 등급은 철회합니다. 한국상품제목은여성와이드지만같은페이지의모델코드가 달라 정확한 변형 일치를 확인하지 못했습니다. RR 내부 최광폭 91.6mm·엄지 70.8mm·높이 28.5mm 를 한국 와이드 치수로 쓰지 않습니다.",
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/hoka-mach-x-3-review-2025/',
      text: "DOR David(남성 US9.5)는 길이가 맞고 힐이 약간 좁으며 발등 볼륨이 밀착됐다고 느꼈습니다. Bach은 길이·앞쪽 공간이 맞고 중족 밀착이 주행 후 완화됐다고 평가했습니다. David는 부드러운 느낌, Bach은 단단한 느낌을 적었고 급한 내리막의 높은 중립 플랫폼과 전방 전환을 한계로 지적했습니다.",
    },
  ],
  detailedSpecs: {
    weight: "264g (RunRepeat 공시 검체 정책:남성 US9). DOR 소개 남성 289g(US9)·여성 244g(US8),46/41mm·드롭 5mm. RR 브랜드메타는남 252g·여 215g 과 44/39·42/37mm 로 적고, RR 실측 264g·42.9/33.4mm·9.5mm 와 차이가 있어 출처조건을 구분합니다.",
    stackHeight: '42.9/33.4mm (RunRepeat 힐/전족부 실측)',
    drop: '9.5mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: "PEBA 상층 · EVA 하층 · Pebax 플레이트 · 32.5 AC(Asker C) · 힐/전족부 SA 151/125 · 에너지 리턴 58.9/69.3%. RR 주폼 32.5AC·보조폼 41.6AC 는 다른 층입니다. 한국제목 SKU 와상품정보코드의충돌을 조용히 덮지 않으며, 표본의마모 0.8mm 를 400km수명으로 바꾸지 않습니다. 힐물집이모두해결됐다는보장·공통최적 페이스·질환보호 등급은 철회합니다.",
    plate: '두 폼 사이의 Pebax 플레이트. 카본으로 분류하지 않습니다.',
    width: "RunRepeat 내부 최광폭 91.6mm / 엄지 부위 70.8mm / 엄지 높이 28.5mm. 한국상품제목은여성와이드지만같은페이지의모델코드가 달라 정확한 변형 일치를 확인하지 못했습니다. RR 내부 최광폭 91.6mm·엄지 70.8mm·높이 28.5mm 를 한국 와이드 치수로 쓰지 않습니다.",
    durability: "검증된 공통 수명 km 미확인. 짧은 착화·마모 깊이를 수명 km로 환산하지 않습니다.",
    price: "호카 코리아 공식 링크트리 연결스토어의 여성마하 X3와이드 제목 1168872-NNRS 상품은 할인전 249,000원·표시판매 99,600원·품절이었습니다. 같은상세의상품정보에는 1162410-BCQ로 적혀 정확 SKU 일치가 미해결입니다. 따라서 일반모델정가·확정와이드 필드는 비워두고, 남성현재 상품·전색상재고도 미확인입니다.",
  },
  similarShoes: [
    'asics-superblast-2',
    'nike-vomero-18',
    'new-balance-sc-trainer-v3',
    'puma-deviate-nitro-3',
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/GWWYDEQA',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: "한국 확인 SKU 의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.",
    sources: [
      {
        label: '호카 코리아 공식 스토어 연결',
        url: 'https://linktr.ee/hoka_korea',
        note: "이번 live에서 brand.naver.com/hoka연결을재확인했습니다.",
      },
      {
        label: '한국 공식 women · 와이드 · 1168872-NNRS',
        url: 'https://brand.naver.com/hoka/products/12300727666',
        note: "호카 코리아 공식 링크트리 연결스토어의 여성마하 X3와이드 제목 1168872-NNRS 상품은 할인전 249,000원·표시판매 99,600원·품절이었습니다. 같은상세의상품정보에는 1162410-BCQ로 적혀 정확 SKU 일치가 미해결입니다. 따라서 일반모델정가·확정와이드 필드는 비워두고, 남성현재 상품·전색상재고도 미확인입니다.",
      },
      {
        label: 'RunRepeat 마하 X 3',
        url: 'https://runrepeat.com/hoka-mach-x-3',
        note: "공시 검체 정책:남성 US9. 개별 검체 SKU·폭은 미확인. 264g · 42.9/33.4mm · 드롭 9.5mm. SA 151/125 · ER 58.9/69.3%. RR 주폼 32.5AC·보조폼 41.6AC 는 다른 층입니다. 한국제목 SKU 와상품정보코드의충돌을 조용히 덮지 않으며, 표본의마모 0.8mm 를 400km수명으로 바꾸지 않습니다. 힐물집이모두해결됐다는보장·공통최적 페이스·질환보호 등급은 철회합니다.",
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/hoka-mach-x-3-review-2025/',
        note: "DOR 소개 남성 289g(US9)·여성 244g(US8),46/41mm·드롭 5mm. RR 브랜드메타는남 252g·여 215g 과 44/39·42/37mm 로 적고, RR 실측 264g·42.9/33.4mm·9.5mm 와 차이가 있어 출처조건을 구분합니다.",
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: "내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값입니다. AC 와 HA 는 직접 비교하지 않습니다. 시점·측정법 버전의 차이를 구분하세요.",
      },
    ],
    limitations: [
      "질환 예방·치료 효과, 공통 최적 페이스와 수명 km는 확인하지 못해 관련 등급·수명·km당 비용을 비웁니다.",
      '에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.',
      "판매·재고는 확인한 SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다.",
    ],
  },
};
