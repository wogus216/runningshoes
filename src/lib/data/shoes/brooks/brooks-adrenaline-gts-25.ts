import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'brooks-adrenaline-gts-25',
  slug: 'brooks-adrenaline-gts-25',
  brand: 'Brooks',
  name: '아드레날린 GTS 25',
  image: '/images/shoes/brooks/adrenalinegts25/side.webp',
  images: [
    '/images/shoes/brooks/adrenalinegts25/side.webp',
    '/images/shoes/brooks/adrenalinegts25/front.webp',
    '/images/shoes/brooks/adrenalinegts25/back.webp',
    '/images/shoes/brooks/adrenalinegts25/top.webp',
    '/images/shoes/brooks/adrenalinegts25/outsole.webp',
  ],
  category: '안정화',
  price: 189000,
  description: '질소 주입 DNA LOFT v3 · GuideRails 구조의 아드레날린 GTS 25. 실험실 295g·힐/전족부 36.1/25.9mm. 한국 확인 정가189,000원.',
  oneliner: '295g 실험실 무게 · 질소 주입 DNA LOFT v3 · GuideRails',
  editorComment: '2026-11-09 원문 재확인. 한국 공식 원문에서 남성 MEDIUM 1104541D033·WIDE 1104542E020·SUPER WIDE 1104544E020, 여성 MEDIUM 1204431B020 정가189,000원 확인. 현재 할인·재고는 미확인. DOR 소개 남성301g(US9)·여성269g(US8),37/27mm·드롭10mm. 실제 Matt 착화 US10과 표제 공시 조건을 구분.  DOR의 Matt은 US10에서 길이가 맞고 앞쪽이 좁아지는 보통 폭이라 평가했으며 따뜻한 어퍼·움직이는 혀·카운터 압박을 지적했습니다. 쉬운 러닝에 활용했으나 반응성은 낮게 느꼈습니다. GuideRails를 전통 미디얼 포스트로 확정하지 않습니다. 한국 남성 MEDIUM·2E·4E와 여성 MEDIUM 상품 확인. 여성 와이드의 정확SKU·재고는 미확인. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  specs: {
    weight: 295,
    drop: 10.2,
  },
  biomechanics: {
    stackHeight: {
      heel: 36.1,
      forefoot: 25.9,
    },
    drop: 10.2,
    carbonPlate: false,
    midsoleType: '질소 주입 DNA LOFT v3 · GuideRails',
  },
  koreanFootFit: {
    wideOptions: true,
  },
  targetUsers: {
    recommended: [
      'GuideRails 지지 구조를 시착 비교하려는 러너',
      '한국 남성2E·4E 판매 상품을 찾는 러너',
    ],
    notRecommended: [
      '힐 카운터·아킬레스 주변 압박이 생기는 경우',
      '가벼운 무게와 빠른 전환이 우선인 경우',
    ],
  },
  features: [
    '질소 주입 DNA LOFT v3 · GuideRails',
    '295g · 힐/전족부 36.1/25.9mm (RunRepeat)',
    '힐/전족부 SA 138/101 · 에너지 리턴 52.1/59.2% (RunRepeat). ',
    '한국 남성 MEDIUM·2E·4E와 여성 MEDIUM 상품 확인. 여성 와이드의 정확SKU·재고는 미확인.',
  ],
  priceAnalysis: {
    msrp: 189000,
    priceTier: 'mid',
    alternatives: [
      'asics-gel-kayano-32',
      'new-balance-860-v14',
      'hoka-gaviota-6',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/brooks-adrenaline-gts-25',
      text: '295g과 SA 138/101·에너지 리턴 52.1/59.2%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다.  한국 남성 MEDIUM·2E·4E와 여성 MEDIUM 상품 확인. 여성 와이드의 정확SKU·재고는 미확인.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/brooks-adrenaline-gts-25-review-2025/?m=0',
      text: 'DOR의 Matt은 US10에서 길이가 맞고 앞쪽이 좁아지는 보통 폭이라 평가했으며 따뜻한 어퍼·움직이는 혀·카운터 압박을 지적했습니다. 쉬운 러닝에 활용했으나 반응성은 낮게 느꼈습니다. GuideRails를 전통 미디얼 포스트로 확정하지 않습니다.',
    },
  ],
  detailedSpecs: {
    weight: '295g (RunRepeat 공시 검체 정책:남성US9). DOR 소개 남성301g(US9)·여성269g(US8),37/27mm·드롭10mm. 실제 Matt 착화 US10과 표제 공시 조건을 구분.',
    stackHeight: '36.1/25.9mm (RunRepeat 힐/전족부 실측)',
    drop: '10.2mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: '질소 주입 DNA LOFT v3 · GuideRails · 34.5 AC(Asker C) · 힐/전족부 SA 138/101 · 에너지 리턴 52.1/59.2%. ',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 96mm / 엄지 부위 72.8mm / 엄지 높이 26.6mm. 한국 남성 MEDIUM·2E·4E와 여성 MEDIUM 상품 확인. 여성 와이드의 정확SKU·재고는 미확인.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 공식 원문에서 남성 MEDIUM 1104541D033·WIDE 1104542E020·SUPER WIDE 1104544E020, 여성 MEDIUM 1204431B020 정가189,000원 확인. 현재 할인·재고는 미확인.',
  },
  similarShoes: [
    'asics-gel-kayano-33',
    'asics-gel-kayano-32',
    'hoka-gaviota-6',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-500km-replacement-myth-2026',
      title: '"500km 교체설"의 진실 — 소재별 수명',
    },
  ],
  purchaseLinks: [
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/h6ZhGujyVg',
    },
  ],
  tags: [
    '안정화',
    'GuideRails',
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 men · MEDIUM · 1104541D033',
        url: 'https://brooksrunning.co.kr/product/detail.html?product_no=666',
        note: '한국 공식 원문에서 남성 MEDIUM 1104541D033·WIDE 1104542E020·SUPER WIDE 1104544E020, 여성 MEDIUM 1204431B020 정가189,000원 확인. 현재 할인·재고는 미확인.',
      },
      {
        label: '한국 공식 men · WIDE · 1104542E020',
        url: 'https://brooksrunning.co.kr/product/%EB%82%A8%EC%84%B1-%EC%95%84%EB%93%9C%EB%A0%88%EB%82%A0%EB%A6%B0gts-25%EB%B8%94%EB%9E%99wide/669/',
        note: '한국 공식 원문에서 남성 MEDIUM 1104541D033·WIDE 1104542E020·SUPER WIDE 1104544E020, 여성 MEDIUM 1204431B020 정가189,000원 확인. 현재 할인·재고는 미확인.',
      },
      {
        label: '한국 공식 men · SUPER WIDE · 1104544E020',
        url: 'https://brooksrunning.co.kr/product/%EB%82%A8%EC%84%B1-%EC%95%84%EB%93%9C%EB%A0%88%EB%82%A0%EB%A6%B0gts-25%EB%B8%94%EB%9E%99super-wide/672/category/130/display/1/',
        note: '한국 공식 원문에서 남성 MEDIUM 1104541D033·WIDE 1104542E020·SUPER WIDE 1104544E020, 여성 MEDIUM 1204431B020 정가189,000원 확인. 현재 할인·재고는 미확인.',
      },
      {
        label: '한국 공식 women · MEDIUM · 1204431B020',
        url: 'https://brooksrunning.co.kr/product/detail.html?product_no=673',
        note: '한국 공식 원문에서 남성 MEDIUM 1104541D033·WIDE 1104542E020·SUPER WIDE 1104544E020, 여성 MEDIUM 1204431B020 정가189,000원 확인. 현재 할인·재고는 미확인.',
      },
      {
        label: 'RunRepeat 아드레날린 GTS 25',
        url: 'https://runrepeat.com/brooks-adrenaline-gts-25',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 295g · 36.1/25.9mm · 드롭10.2mm. SA 138/101 · ER 52.1/59.2%. ',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/brooks-adrenaline-gts-25-review-2025/?m=0',
        note: 'DOR 소개 남성301g(US9)·여성269g(US8),37/27mm·드롭10mm. 실제 Matt 착화 US10과 표제 공시 조건을 구분.',
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
