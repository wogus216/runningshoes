import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'asics-gel-kayano-33',
  slug: 'asics-gel-kayano-33',
  brand: 'Asics',
  name: '젤 카야노 33',
  image: '/images/shoes/asics/kayano33/side.webp',
  images: [
    '/images/shoes/asics/kayano33/side.webp',
    '/images/shoes/asics/kayano33/front.webp',
    '/images/shoes/asics/kayano33/back.webp',
    '/images/shoes/asics/kayano33/angle.webp',
    '/images/shoes/asics/kayano33/outsole.webp',
  ],
  category: '안정화',
  price: 199000,
  description: 'FF BLAST MAX + FF BLAST PLUS 프레임 · FluidSupport · 힐 PureGEL 구조의 젤 카야노 33. 한국 남성 일반1011C167.100·2E1011C227.001·4E1011C229.100, 여성D1012B992.001 정가199,000원. 다른 색상·사이즈 재고는 별도 확인.',
  oneliner: '298g 실험실 무게 · FF BLAST MAX + FF BLAST PLUS 프레임 · FluidSupport · 힐 PureGEL',
  editorComment: '2026-11-09 원문 재확인. 한국 남성 일반1011C167.100·2E1011C227.001·4E1011C229.100, 여성D1012B992.001 정가199,000원. 다른 색상·사이즈 재고는 별도 확인. DOR 소개 남성298g(US9)·39/31mm·드롭8mm. 한국 공식 측정 사이즈는 미확인. RunRepeat 실측 298g,힐/전족부 36.8/28.3mm·드롭8.5mm입니다.  DOR의 Matt은 US10에서 길이가 맞았으나 장거리의 아치 피로와 전작보다 적은 내측 중족부 지지를 지적했습니다. Bach은 새 프레임의 안정감을 더 높게 평가해 의견이 갈립니다. 개인 착화 의견이며 질환별 효과가 아닙니다. 한국 남성2E·4E, 여성D 상품을 확인했습니다. 실험실 내부 치수를 이 폭의 치수로 대입하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '안정화',
    'FLUIDSUPPORT',
    'FF BLAST MAX',
    '듀얼 폼',
  ],
  specs: {
    weight: 298,
    cushioning: 8,
    responsiveness: 7,
    stability: 9,
    drop: 8.5,
  },
  biomechanics: {
    stackHeight: {
      heel: 36.8,
      forefoot: 28.3,
    },
    drop: 8.5,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'FF BLAST MAX + FF BLAST PLUS 프레임 · FluidSupport · 힐 PureGEL',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
    wideOptions: true,
  },
  targetUsers: {
    recommended: [
      '프레임을 이용한 지지 구조를 시착 비교하려는 러너',
      '한국 남성2E·4E 선택지를 찾는 러너',
    ],
    notRecommended: [
      '아치 압박·피로가 생기는 경우',
      '개인에게 강한 중족부 지지가 필요한데 시착이 맞지 않는 경우',
    ],
  },
  features: [
    'FF BLAST MAX + FF BLAST PLUS 프레임 · FluidSupport · 힐 PureGEL',
    '298g (RunRepeat 남성US9 공시 기준)',
    '힐/전족부 SA 132/112 · 에너지 리턴 50/56.6% (RunRepeat)',
    '한국 남성2E·4E, 여성D 상품을 확인했습니다. 실험실 내부 치수를 이 폭의 치수로 대입하지 않습니다.',
  ],
  priceAnalysis: {
    msrp: 199000,
    priceTier: 'premium',
    alternatives: [
      'asics-gel-kayano-32',
      'brooks-adrenaline-gts-25',
      'new-balance-860-v15',
    ],
  },
  detailedSpecs: {
    weight: '298g (RunRepeat 남성US9 공시 기준). DOR 소개 남성298g(US9)·39/31mm·드롭8mm. 한국 공식 측정 사이즈는 미확인.',
    stackHeight: '36.8/28.3mm (RunRepeat 힐/전족부). ',
    drop: '8.5mm (RunRepeat 실측). 공시 조건은 무게 항목에 구분.',
    midsole: 'FF BLAST MAX + FF BLAST PLUS 프레임 · FluidSupport · 힐 PureGEL · 32.8 AC · 힐/전족부 SA 132/112 · 에너지 리턴 50/56.6% (RunRepeat)',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 95.9mm / 엄지 부위 72.4mm / 엄지 높이 28.6mm. 한국 남성2E·4E, 여성D 상품을 확인했습니다. 실험실 내부 치수를 이 폭의 치수로 대입하지 않습니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 남성 일반1011C167.100·2E1011C227.001·4E1011C229.100, 여성D1012B992.001 정가199,000원. 다른 색상·사이즈 재고는 별도 확인.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/asics-gel-kayano-33',
      text: '298g과 SA 132/112·에너지 리턴 50/56.6%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다.  한국 남성2E·4E, 여성D 상품을 확인했습니다. 실험실 내부 치수를 이 폭의 치수로 대입하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-gel-kayano-33-review-2026/',
      text: 'DOR의 Matt은 US10에서 길이가 맞았으나 장거리의 아치 피로와 전작보다 적은 내측 중족부 지지를 지적했습니다. Bach은 새 프레임의 안정감을 더 높게 평가해 의견이 갈립니다. 개인 착화 의견이며 질환별 효과가 아닙니다.',
    },
  ],
  similarShoes: [
    'asics-gel-kayano-32',
    'brooks-adrenaline-gts-25',
    'new-balance-860-v15',
    'hoka-gaviota-6',
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/5kP1X6Dc',
    },
  ],
  relatedPosts: [
    {
      slug: 'asics-gel-kayano-33-review',
      title: '아식스 젤 카야노 33 심층 후기',
    },
    {
      slug: 'kayano-33-vs-glycerin-gts-22-vs-860-v15-2026',
      title: '카야노 33 vs 글리세린 GTS 22 vs 860 v15 — 안정화 3강 비교',
    },
    {
      slug: 'asics-kayano-32-vs-33-comparison',
      title: '카야노 32 vs 33 — 세대 비교',
    },
    {
      slug: 'running-shoe-midsole-foam-guide-2026',
      title: '미드솔 폼 완전 해설 — EVA·TPU·PEBA',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 남성 · unlabeled standard · 1011C167.100',
        url: 'https://asics.co.kr/p/AKR_112630101-100',
        note: '한국 남성 일반1011C167.100·2E1011C227.001·4E1011C229.100, 여성D1012B992.001 정가199,000원. 다른 색상·사이즈 재고는 별도 확인.',
      },
      {
        label: '한국 공식 남성 · 2E · 1011C227.001',
        url: 'https://asics.co.kr/p/AKR_112630102-001',
        note: '한국 남성 일반1011C167.100·2E1011C227.001·4E1011C229.100, 여성D1012B992.001 정가199,000원. 다른 색상·사이즈 재고는 별도 확인.',
      },
      {
        label: '한국 공식 남성 · 4E · 1011C229.100',
        url: 'https://asics.co.kr/p/AKR_112630103-100',
        note: '한국 남성 일반1011C167.100·2E1011C227.001·4E1011C229.100, 여성D1012B992.001 정가199,000원. 다른 색상·사이즈 재고는 별도 확인.',
      },
      {
        label: '한국 공식 여성 · D · 1012B992.001',
        url: 'https://asics.co.kr/p/AKR_112630105-001',
        note: '한국 남성 일반1011C167.100·2E1011C227.001·4E1011C229.100, 여성D1012B992.001 정가199,000원. 다른 색상·사이즈 재고는 별도 확인.',
      },
      {
        label: 'RunRepeat 젤 카야노 33',
        url: 'https://runrepeat.com/asics-gel-kayano-33',
        note: '남성US9 공시 기준. 298g · 36.8/28.3mm · 드롭8.5mm. 힐/전족부 SA 132/112 · ER 50/56.6%. ',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/asics-gel-kayano-33-review-2026/',
        note: 'DOR 소개 남성298g(US9)·39/31mm·드롭8mm. 한국 공식 측정 사이즈는 미확인.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: '검체·측정 위치·버전에 따라 조건이 다릅니다. 내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값이고, AC와HA는 직접 비교하지 않습니다.',
      },
    ],
    limitations: [
      '모델별 질환 예방·치료 효과, 공통 최적 페이스와 수명km를 확인하지 못했습니다. 해당 등급·수명값·km당 비용은 비웁니다.',
      '에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.',
      '확인한 상품·성별·폭·시점의 조건만 적용합니다. 재고·구매가는 판매처에서 다시 확인하세요.',
    ],
  },
};
