import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'asics-gel-kayano-32',
  slug: 'asics-gel-kayano-32',
  brand: 'Asics',
  name: '젤 카야노 32',
  image: '/images/shoes/asics/kayano32/1.webp',
  images: [
    '/images/shoes/asics/kayano32/1.webp',
    '/images/shoes/asics/kayano32/2.webp',
    '/images/shoes/asics/kayano32/3.webp',
    '/images/shoes/asics/kayano32/4.webp',
    '/images/shoes/asics/kayano32/5.webp',
  ],
  category: '안정화',
  rating: 4,
  description: 'FF BLAST PLUS 계열 · PureGEL · 4D Guidance System 구조의 젤 카야노 32. 실험실 295g·힐/전족부 39.9/30.6mm. 한국 현재 정가 미확인.',
  oneliner: '295g 실험실 무게 · FF BLAST PLUS 계열 · PureGEL · 4D Guidance System',
  editorComment: '2026-11-09 원문 재확인. 한국 브랜드 사이트에서 현재 정가·폭·SKU를 확인하지 못했습니다. 아식스코리아 본사 판매자 SSG·SSF 원문에112530101-102/-101·판매가199,000원이 있으나 명시 MSRP와 실시간 재고는 미확인입니다. DOR 소개 남성298g(US9)·여성255g(US8),40/32mm·드롭8mm. Matt 실제US10·314g과 RR295g·9.3mm를 구분.  DOR의 Matt은 US10에서 길이는 맞지만30/31보다 타이트한 니트, 패딩된 단단한 카운터, 단단한 앞쪽과 더 매끄러운 힐 전환을 느꼈습니다. RR의 젖은 콘크리트 접지시험과 Matt의 젖은 보도 미끄러짐 의견은 다른 조건입니다. 전통 미디얼 포스트로 설명하지 않습니다. 한국 와이드·X-Wide의 현재SKU는 미확인입니다. RR 내부최광폭96.6mm·엄지73.9mm·높이27.5mm를 개인핏과 구분하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '안정화',
    '과내전',
    '서포트',
    '장거리',
  ],
  specs: {
    weight: 295,
    cushioning: 8,
    responsiveness: 6,
    stability: 10,
    drop: 9.3,
  },
  biomechanics: {
    stackHeight: {
      heel: 39.9,
      forefoot: 30.6,
    },
    drop: 9.3,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'FF BLAST PLUS 계열 · PureGEL · 4D Guidance System',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    winterCompatibility: 'excellent',
    summerCompatibility: 'poor',
  },
  targetUsers: {
    recommended: [
      '4D Guidance 구조의 착화를 비교하려는 러너',
      '지지감과 앞쪽 굽힘을 함께 확인하려는 러너',
    ],
    notRecommended: [
      '타이트한 어퍼·단단한 카운터가 맞지 않는 경우',
      '높은 반응성·가벼운 무게가 우선인 경우',
    ],
  },
  features: [
    'FF BLAST PLUS 계열 · PureGEL · 4D Guidance System',
    '295g · 힐/전족부 39.9/30.6mm (RunRepeat)',
    '힐/전족부 SA 133/116 · 에너지 리턴 47.8/49.3% (RunRepeat). ',
    '한국 와이드·X-Wide의 현재SKU는 미확인입니다. RR 내부최광폭96.6mm·엄지73.9mm·높이27.5mm를 개인핏과 구분하세요.',
  ],
  priceAnalysis: {
    valueRating: 7,
    priceTier: 'premium',
    alternatives: [
      'brooks-adrenaline-gts-25',
      'new-balance-860-v14',
      'hoka-gaviota-6',
    ],
  },
  detailedSpecs: {
    weight: '295g (RunRepeat 공시 검체 정책:남성US9). DOR 소개 남성298g(US9)·여성255g(US8),40/32mm·드롭8mm. Matt 실제US10·314g과 RR295g·9.3mm를 구분.',
    stackHeight: '39.9/30.6mm (RunRepeat 힐/전족부 실측)',
    drop: '9.3mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'FF BLAST PLUS 계열 · PureGEL · 4D Guidance System · 41.3 AC(Asker C) · 힐/전족부 SA 133/116 · 에너지 리턴 47.8/49.3%. ',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 96.6mm / 엄지 부위 73.9mm / 엄지 높이 27.5mm. 한국 와이드·X-Wide의 현재SKU는 미확인입니다. RR 내부최광폭96.6mm·엄지73.9mm·높이27.5mm를 개인핏과 구분하세요.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 브랜드 사이트에서 현재 정가·폭·SKU를 확인하지 못했습니다. 아식스코리아 본사 판매자 SSG·SSF 원문에112530101-102/-101·판매가199,000원이 있으나 명시 MSRP와 실시간 재고는 미확인입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/asics-gel-kayano-32',
      text: '295g과 SA 133/116·에너지 리턴 47.8/49.3%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다.  한국 와이드·X-Wide의 현재SKU는 미확인입니다. RR 내부최광폭96.6mm·엄지73.9mm·높이27.5mm를 개인핏과 구분하세요.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-gel-kayano-32-review-2025-8mm-drop/',
      text: 'DOR의 Matt은 US10에서 길이는 맞지만30/31보다 타이트한 니트, 패딩된 단단한 카운터, 단단한 앞쪽과 더 매끄러운 힐 전환을 느꼈습니다. RR의 젖은 콘크리트 접지시험과 Matt의 젖은 보도 미끄러짐 의견은 다른 조건입니다. 전통 미디얼 포스트로 설명하지 않습니다.',
    },
  ],
  similarShoes: [
    'asics-gel-kayano-33',
    'brooks-adrenaline-gts-25',
    'new-balance-860-v14',
    'hoka-gaviota-6',
  ],
  relatedPosts: [
    {
      slug: 'bio-based-running-shoe-foam-sugarcane-castor-2026',
      title: '사탕수수·피마자 폼 — 바이오 러닝화 추적',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/F93JaTG9',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '아식스 한국 브랜드 사이트 검색 범위',
        url: 'https://asics.co.kr/',
        note: '현재 카야노32 정확검색0건·구상품홈이동. 국내 전체 단종을 의미하지 않습니다.',
      },
      {
        label: '아식스코리아 본사 판매자 상품 · 112530101-101',
        url: 'https://www.ssfshop.com/ASICS-KOREA/GR3825061329574/good?utag=ref_sch%3A%EC%A0%A4%EC%B9%B4%EC%95%BC%EB%85%B832%24set%3A1%24%24dpos%3A2',
        note: '표시판매가199,000원. 명시 MSRP·실시간재고와 구분.',
      },
      {
        label: '아식스코리아 본사 판매자 상품 · 112530101-102',
        url: 'https://www.ssg.com/item/itemView.ssg?itemId=1000702460828',
        note: '표시판매가199,000원. 명시 MSRP·실시간재고와 구분.',
      },
      {
        label: 'RunRepeat 젤 카야노 32',
        url: 'https://runrepeat.com/asics-gel-kayano-32',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 295g · 39.9/30.6mm · 드롭9.3mm. SA 133/116 · ER 47.8/49.3%. ',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/asics-gel-kayano-32-review-2025-8mm-drop/',
        note: 'DOR 소개 남성298g(US9)·여성255g(US8),40/32mm·드롭8mm. Matt 실제US10·314g과 RR295g·9.3mm를 구분.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: '내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값입니다. AC와HA는 직접 비교하지 않습니다. 시점·측정법 버전의 차이를 구분하세요.',
      },
    ],
    limitations: [
      '질환 예방·치료 효과, 공통 최적 페이스와 수명km는 확인하지 못해 관련 등급·수명·km당 비용을 비웁니다.',
      '에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.',
      '판매·재고는 확인한SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다.',
    ],
  },
};
