import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'saucony-endorphin-elite-2',
  slug: 'saucony-endorphin-elite-2',
  brand: 'Saucony',
  name: '엔돌핀 엘리트 2',
  image: '/images/shoes/saucony/endorphin_elite2.webp',
  images: [
    '/images/shoes/saucony/endorphinelite2/side.webp',
    '/images/shoes/saucony/endorphinelite2/top.webp',
    '/images/shoes/saucony/endorphinelite2/outsole.webp',
  ],
  category: '레이싱',
  rating: 5,
  description: 'IncrediRUN · 슬롯형 전장 카본 구조의 엔돌핀 엘리트 2. RunRepeat 실험실 검체 197g·39.9/32.4mm. 한국 현재 정가 미확인.',
  oneliner: 'IncrediRUN · 슬롯형 전장 카본 · 197g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 한국 공식 캐시: unisex S30994-172 M(일반) 정가339,000원·할인캐시220,350원. 현재 가격·폭별 선택 재고는 미확인입니다. 옵션 목록·장바구니·품절 문구를 현재 전체 재고로 해석하지 않습니다. 한국 무게·전체 스택 공시가 없는 제품은 해외 소개로 채우지 않습니다. 할인 기간은 열린 캐시10/26~11/9·검색캐시11/4~11/23으로 상충합니다. DOR 소개199g(남성 US9/여성US10.5)·39.5/31.5mm·8mm와 RR197g·39.9/32.4mm·7.5mm를 나눕니다. 한국199g은 기준 사이즈 미공시입니다. RR 사이즈 투표와 DOR 정사이즈 의견은 같은 집단이 아닙니다. 39.9mm를40mm한계의1mm아래라고 쓴 RR 문구는 산술과 맞지 않아 대회 승인 판정에 쓰지 않습니다. 450km·최적 페이스·질환별 금지 등급을 제거했습니다. DOR 직접403 이후 검색에 노출된 원문 캐시를 확인했습니다. DOR Matt(남성 US10)는 정사이즈여도 낮고 밀착된 앞코와 토가드 접촉을 느꼈고 극도로 부드러운 힐/중족 전환은 불안정했습니다. David(남성 US9.5)는 좁은 앞발·측면 압박에도 쓸림·힐슬립은 없었으며 적응 후 바운스와 앞발 롤을 좋아했습니다. RR 내부 최광폭 95.6mm·엄지 71mm·높이 29.5mm입니다. 전체 발 적합성이나 한국 와이드 규격으로 바꾸지 말고 실제 길이·높이·고정을 함께 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '카본',
    '엘리트',
    '슈퍼화',
    '에너지 리턴',
  ],
  specs: {
    weight: 197,
    cushioning: 10,
    responsiveness: 10,
    stability: 4,
    drop: 7.5,
  },
  biomechanics: {
    stackHeight: {
      heel: 39.9,
      forefoot: 32.4,
    },
    drop: 7.5,
    carbonPlate: true,
    plateType: 'Slotted/forked carbon plate',
    midsoleType: 'IncrediRUN · 슬롯형 전장 카본',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },
  targetUsers: {
    recommended: [
      '실제 규격에서 앞코·중족·힐 고정을 비교하려는 러너',
      '공시와 독립 랩·개인 체감의 차이를 확인하려는 러너',
    ],
    notRecommended: [
      '시착에서 압박·마찰이나 불편한 전환이 남는 경우',
      '국소 마모·개인 경험을 공통 수명이나 임상 효과로 읽는 경우',
    ],
  },
  features: [
    'IncrediRUN · 슬롯형 전장 카본',
    '197g · 39.9/32.4mm · 드롭 7.5mm (RunRepeat 실험실 검체)',
    '한국은 슬롯형 풀 카본, RR은 곡선형 카본으로 설명합니다. IncrediRUN을 TPEE로 설명한 것은 RR이며 독립 조성 분석으로 확인한 것은 아닙니다.',
    'RR 내부 최광폭 95.6mm·엄지 71mm·높이 29.5mm입니다. 전체 발 적합성이나 한국 와이드 규격으로 바꾸지 말고 실제 길이·높이·고정을 함께 확인하세요.',
  ],
  priceAnalysis: {
    valueRating: 5,
    priceTier: 'super-premium',
    alternatives: [
      'nike-alphafly-3',
      'asics-metaspeed-edge-plus',
      'adidas-adios-pro-4',
    ],
  },
  detailedSpecs: {
    weight: '197g (RunRepeat 실험실 검체). DOR 소개199g(남성 US9/여성US10.5)·39.5/31.5mm·8mm와 RR197g·39.9/32.4mm·7.5mm를 나눕니다. 한국199g은 기준 사이즈 미공시입니다.',
    stackHeight: '39.9/32.4mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '7.5mm (RunRepeat 실험실 검체). DOR 소개199g(남성 US9/여성US10.5)·39.5/31.5mm·8mm와 RR197g·39.9/32.4mm·7.5mm를 나눕니다. 한국199g은 기준 사이즈 미공시입니다.',
    midsole: 'IncrediRUN · 슬롯형 전장 카본. 주폼 22.3AC, 힐/전족부 SA 157/123·에너지 리턴 80.6/82.1%. RR 사이즈 투표와 DOR 정사이즈 의견은 같은 집단이 아닙니다. 39.9mm를40mm한계의1mm아래라고 쓴 RR 문구는 산술과 맞지 않아 대회 승인 판정에 쓰지 않습니다. 450km·최적 페이스·질환별 금지 등급을 제거했습니다.',
    plate: '한국은 슬롯형 풀 카본, RR은 곡선형 카본으로 설명합니다. IncrediRUN을 TPEE로 설명한 것은 RR이며 독립 조성 분석으로 확인한 것은 아닙니다.',
    width: 'RR 내부 최광폭 95.6mm·엄지 부위 71mm·높이 29.5mm. RR 내부 최광폭 95.6mm·엄지 71mm·높이 29.5mm입니다. 전체 발 적합성이나 한국 와이드 규격으로 바꾸지 말고 실제 길이·높이·고정을 함께 확인하세요.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식 캐시: unisex S30994-172 M(일반) 정가339,000원·할인캐시220,350원. 현재 가격·폭별 선택 재고는 미확인입니다. 옵션 목록·장바구니·품절 문구를 현재 전체 재고로 해석하지 않습니다. 한국 무게·전체 스택 공시가 없는 제품은 해외 소개로 채우지 않습니다. 할인 기간은 열린 캐시10/26~11/9·검색캐시11/4~11/23으로 상충합니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/saucony-endorphin-elite-2',
      text: 'DOR 소개199g(남성 US9/여성US10.5)·39.5/31.5mm·8mm와 RR197g·39.9/32.4mm·7.5mm를 나눕니다. 한국199g은 기준 사이즈 미공시입니다. RR 사이즈 투표와 DOR 정사이즈 의견은 같은 집단이 아닙니다. 39.9mm를40mm한계의1mm아래라고 쓴 RR 문구는 산술과 맞지 않아 대회 승인 판정에 쓰지 않습니다. 450km·최적 페이스·질환별 금지 등급을 제거했습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/saucony-endorphin-elite-2-review-2025/',
      text: 'DOR 직접403 이후 검색에 노출된 원문 캐시를 확인했습니다. DOR Matt(남성 US10)는 정사이즈여도 낮고 밀착된 앞코와 토가드 접촉을 느꼈고 극도로 부드러운 힐/중족 전환은 불안정했습니다. David(남성 US9.5)는 좁은 앞발·측면 압박에도 쓸림·힐슬립은 없었으며 적응 후 바운스와 앞발 롤을 좋아했습니다.',
    },
  ],
  similarShoes: [
    'nike-alphafly-3',
    'asics-metaspeed-edge-plus',
    'new-balance-sc-elite-v5',
    'puma-fast-r-nitro-elite-3',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
  ],
  purchaseLinks: [
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: 'kr-elite2',
        url: 'https://saucony.co.kr/product/detail.html?cate_no=177&display_group=1&product_no=184',
        note: 'original_opened_cached_web; S30994-172 공용 WHITE/CRIMSON M(일반),339000/220350;220–300,7.0oz(199g)사이즈미공시,슬롯형풀카본.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/saucony-endorphin-elite-2',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 197g·39.9/32.4mm·7.5mm. RR 사이즈 투표와 DOR 정사이즈 의견은 같은 집단이 아닙니다. 39.9mm를40mm한계의1mm아래라고 쓴 RR 문구는 산술과 맞지 않아 대회 승인 판정에 쓰지 않습니다. 450km·최적 페이스·질환별 금지 등급을 제거했습니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/saucony-endorphin-elite-2-review-2025/',
        note: 'DOR 소개199g(남성 US9/여성US10.5)·39.5/31.5mm·8mm와 RR197g·39.9/32.4mm·7.5mm를 나눕니다. 한국199g은 기준 사이즈 미공시입니다.',
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
