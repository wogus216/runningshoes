import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'new-balance-hierro-v9',
  slug: 'new-balance-hierro-v9',
  brand: 'New Balance',
  name: '히에로 v9',
  image: '/images/shoes/newbalance/hierrov9/side.webp',
  images: [
    '/images/shoes/newbalance/hierrov9/side.webp',
    '/images/shoes/newbalance/hierrov9/top.webp',
    '/images/shoes/newbalance/hierrov9/detail.webp',
    '/images/shoes/newbalance/hierrov9/outsole.webp',
  ],
  category: '트레일',
  description: 'Fresh Foam X 이중 밀도 · Vibram Megagrip · Toe Protect 구조의 히에로 v9. RunRepeat 실험실 검체 309g·37.3/33.1mm. 한국 현재 정가 미확인.',
  oneliner: 'Fresh Foam X 이중 밀도 · Vibram Megagrip · Toe Protect · 309g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 뉴발란스 한국 실운영 상품 페이지가403·캐시 미스로 열리지 않아 현재 정가·SKU·성별·폭·재고를 미확인으로 남깁니다. 검색 후보나 QA서버값을 공식 판매 사실로 채택하지 않았습니다. 기존189,000원·한국D/B만 판매·7/9 신컬러 확정은 이번 원문으로 재확인하지 못했습니다. 미국 공식 남성310g/여성253g(사이즈 미확인)·드롭약4mm, RR 브랜드33/29mm·4mm·297/234g(사이즈 미확인), RR실측309g·37.3/33.1mm·4.2mm를 구분합니다. 기존 공식42/38mm 확정은 철회합니다. 미국 공식6mm 러그와 RR실측3.3mm, DOR이 재인용한 유통사4.5mm는 다릅니다.4.5mm를 직접 재확인한 실측으로 승격하지 않습니다. 현행RR29.7AC는 기존14.6HA와 직접 비교하지 않습니다.0.9mm 마모·힐패딩5/5는600km 수명이 아닙니다. 저드롭으로 힐 착지 러너의 아킬레스 위험·평발 보호를 확정하지 않습니다. DOR 봄 트레일 roundup의 정확v9 문단에서 David는 여유 있는 전족·볼륨과 니트 고정, 부드러운 로커·이중 밀도 쿠션을 선호했고 무게·평범한 반발을 지적했습니다. 검체 사이즈는 미공시이며 독립 전체 리뷰로 표시하지 않습니다. 도로 접근 혼합·하이킹 활용 의견을 개인 경험으로 남깁니다. RR 내부 최광폭94.7mm·엄지73.4mm·높이26.7mm입니다. 미국 남성D/2E/4E·여성B/D/2E 표시는 한국 현재 폭 판매가 아닙니다. 미국정사이즈안내·RR반사이즈작게 투표·David의 여유 체감은 조건이 다릅니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '트레일',
    '쿠션',
    '올라운드',
    '비브람',
    '장거리',
  ],
  specs: {
    weight: 309,
    cushioning: 8,
    responsiveness: 7,
    stability: 8,
    drop: 4.2,
  },
  biomechanics: {
    stackHeight: {
      heel: 37.3,
      forefoot: 33.1,
    },
    drop: 4.2,
    carbonPlate: false,
    midsoleType: 'Fresh Foam X 이중 밀도 · Vibram Megagrip · Toe Protect',
    plateType: null,
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
  },
  targetUsers: {
    recommended: [
      '이중 밀도 쿠션·로커와 실제 전족 고정을 비교하려는 러너',
      '미국 와이드 정보와 한국 판매 옵션을 구분해 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 내리막 앞코 접촉이나 발등 압박이 남는 경우',
      '제조사 러그6mm와 RR3.3mm를 같은 시험으로 안내하는 설명',
    ],
  },
  features: [
    'Fresh Foam X 이중 밀도 · Vibram Megagrip · Toe Protect',
    '309g · 37.3/33.1mm · 드롭 4.2mm (RunRepeat 실험실 검체)',
    'DOR roundup은 록 플레이트가 없는 구조로 설명합니다. 쿠션·Toe Protect를 모든 돌·암반의 보호 보장으로 읽지 않습니다.',
    'RR 내부 최광폭94.7mm·엄지73.4mm·높이26.7mm입니다. 미국 남성D/2E/4E·여성B/D/2E 표시는 한국 현재 폭 판매가 아닙니다. 미국정사이즈안내·RR반사이즈작게 투표·David의 여유 체감은 조건이 다릅니다.',
  ],
  priceAnalysis: {
    priceTier: 'mid',
    alternatives: [
      'hoka-speedgoat-6',
      'salomon-ultra-glide-4',
    ],
  },
  detailedSpecs: {
    weight: '309g (RunRepeat 실험실 검체). 미국 공식 남성310g/여성253g(사이즈 미확인)·드롭약4mm, RR 브랜드33/29mm·4mm·297/234g(사이즈 미확인), RR실측309g·37.3/33.1mm·4.2mm를 구분합니다. 기존 공식42/38mm 확정은 철회합니다.',
    stackHeight: '37.3/33.1mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '4.2mm (RunRepeat 실험실 검체). 미국 공식 남성310g/여성253g(사이즈 미확인)·드롭약4mm, RR 브랜드33/29mm·4mm·297/234g(사이즈 미확인), RR실측309g·37.3/33.1mm·4.2mm를 구분합니다. 기존 공식42/38mm 확정은 철회합니다.',
    midsole: 'Fresh Foam X 이중 밀도 · Vibram Megagrip · Toe Protect. 주폼 29.7AC, 힐/전족부 SA 131/124·에너지 리턴 61.9/61.4%. 미국 공식6mm 러그와 RR실측3.3mm, DOR이 재인용한 유통사4.5mm는 다릅니다.4.5mm를 직접 재확인한 실측으로 승격하지 않습니다. 현행RR29.7AC는 기존14.6HA와 직접 비교하지 않습니다.0.9mm 마모·힐패딩5/5는600km 수명이 아닙니다. 저드롭으로 힐 착지 러너의 아킬레스 위험·평발 보호를 확정하지 않습니다.',
    plate: 'DOR roundup은 록 플레이트가 없는 구조로 설명합니다. 쿠션·Toe Protect를 모든 돌·암반의 보호 보장으로 읽지 않습니다.',
    width: 'RR 내부 최광폭 94.7mm·엄지 부위 73.4mm·높이 26.7mm. RR 내부 최광폭94.7mm·엄지73.4mm·높이26.7mm입니다. 미국 남성D/2E/4E·여성B/D/2E 표시는 한국 현재 폭 판매가 아닙니다. 미국정사이즈안내·RR반사이즈작게 투표·David의 여유 체감은 조건이 다릅니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '뉴발란스 한국 실운영 상품 페이지가403·캐시 미스로 열리지 않아 현재 정가·SKU·성별·폭·재고를 미확인으로 남깁니다. 검색 후보나 QA서버값을 공식 판매 사실로 채택하지 않았습니다. 기존189,000원·한국D/B만 판매·7/9 신컬러 확정은 이번 원문으로 재확인하지 못했습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/new-balance-fresh-foam-x-hierro-v9',
      text: '미국 공식 남성310g/여성253g(사이즈 미확인)·드롭약4mm, RR 브랜드33/29mm·4mm·297/234g(사이즈 미확인), RR실측309g·37.3/33.1mm·4.2mm를 구분합니다. 기존 공식42/38mm 확정은 철회합니다. 미국 공식6mm 러그와 RR실측3.3mm, DOR이 재인용한 유통사4.5mm는 다릅니다.4.5mm를 직접 재확인한 실측으로 승격하지 않습니다. 현행RR29.7AC는 기존14.6HA와 직접 비교하지 않습니다.0.9mm 마모·힐패딩5/5는600km 수명이 아닙니다. 저드롭으로 힐 착지 러너의 아킬레스 위험·평발 보호를 확정하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/monday-shakeout-spring-2025-trail-shoe/',
      text: 'DOR 봄 트레일 roundup의 정확v9 문단에서 David는 여유 있는 전족·볼륨과 니트 고정, 부드러운 로커·이중 밀도 쿠션을 선호했고 무게·평범한 반발을 지적했습니다. 검체 사이즈는 미공시이며 독립 전체 리뷰로 표시하지 않습니다. 도로 접근 혼합·하이킹 활용 의견을 개인 경험으로 남깁니다.',
    },
  ],
  similarShoes: [
    'hoka-speedgoat-6',
    'salomon-ultra-glide-4',
  ],
  relatedPosts: [
    {
      slug: 'new-balance-hierro-v9-trail-review-2026',
      title: '뉴발 히에로v9 리뷰 — 이중 밀도·러그·한국 판매 확인 범위',
    },
    {
      slug: 'salomon-pulsar-vs-ultra-glide-vs-s-lab-trail-2026',
      title: '살로몬 트레일 3종 — 펄사 vs 울트라 글라이드 4 vs S/LAB',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/GdTrTaDh',
    },
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '뉴발란스 한국 공식 접근 범위',
        url: 'https://www.nbkorea.com/',
        note: '실운영 www/pay 원문 접근 실패. 검색 후보SKU·QA서버값 미채택.',
      },
      {
        label: '미국 공식 남성',
        url: 'https://www.newbalance.com/pd/fresh-foam-x-hierro-v9/MTHIERV9-50176.html?dwvar_MTHIERV9-50176_style=MHIER51M',
        note: '310g·약4mm·러그6mm 주장·해외 폭. 한국 가격 근거 아님.',
      },
      {
        label: '미국 공식 여성',
        url: 'https://www.newbalance.com/pd/fresh-foam-x-hierro-v9/WTHIERV9-50177.html?dwvar_WTHIERV9-50177_style=WHIER2RF',
        note: '253g·약4mm·해외 폭. 한국 판매 미확인.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/new-balance-fresh-foam-x-hierro-v9',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 309g·37.3/33.1mm·4.2mm. 미국 공식6mm 러그와 RR실측3.3mm, DOR이 재인용한 유통사4.5mm는 다릅니다.4.5mm를 직접 재확인한 실측으로 승격하지 않습니다. 현행RR29.7AC는 기존14.6HA와 직접 비교하지 않습니다.0.9mm 마모·힐패딩5/5는600km 수명이 아닙니다. 저드롭으로 힐 착지 러너의 아킬레스 위험·평발 보호를 확정하지 않습니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/monday-shakeout-spring-2025-trail-shoe/',
        note: '미국 공식 남성310g/여성253g(사이즈 미확인)·드롭약4mm, RR 브랜드33/29mm·4mm·297/234g(사이즈 미확인), RR실측309g·37.3/33.1mm·4.2mm를 구분합니다. 기존 공식42/38mm 확정은 철회합니다.',
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
