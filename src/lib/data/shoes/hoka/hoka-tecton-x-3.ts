import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'hoka-tecton-x-3',
  slug: 'hoka-tecton-x-3',
  brand: 'Hoka',
  name: '테크톤 X 3',
  image: '/images/shoes/hoka/tectonx3/side.webp',
  images: [
    '/images/shoes/hoka/tectonx3/side.webp',
    '/images/shoes/hoka/tectonx3/front.webp',
    '/images/shoes/hoka/tectonx3/back.webp',
    '/images/shoes/hoka/tectonx3/angle.webp',
    '/images/shoes/hoka/tectonx3/outsole.webp',
  ],
  category: '트레일',
  description: '이중 PEBA · 병렬 윙렛 카본 · MATRYX · Vibram 구조의 테크톤 X 3. RunRepeat 실험실 검체 275g·37.8/30.9mm. 한국 현재 정가 미확인.',
  oneliner: '이중 PEBA · 병렬 윙렛 카본 · MATRYX · Vibram · 275g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 한국 공식 연결 스토어에서 정확 상품 본문을 확보하지 못해 현행 정가·SKU·성별·폭·선택 재고는 미확인입니다. 해외 와이드나 유통가를 한국 공식 정보로 대입하지 않으며 검색 실패를 단종·전국 품절로 해석하지 않습니다. 기존339,000원 리셀러값을 한국 공식 정가로 쓰지 않습니다. 호주 공식 남성283g(사이즈 미확인)·5mm, RR 브랜드40/35mm·5mm·292/244g(사이즈 미확인), 실제275g·37.8/30.9mm·6.9mm를 구분합니다. 현행 RR 원문 경도는16.0HA(구방식 ShoreA)이며 AC는 미확인입니다. 아웃솔88HC와 다르며 변환하지 않습니다.4mm 러그·국소마모0.5mm·리턴69.9/70.2%를450~550km 수명·50/100km 피로 감소·만능 접지로 바꾸지 않습니다. 어퍼 밀림 일괄 보장·급경사 금지·폴 필수는 확인한 범위에서 입증하지 못했습니다. DOR 텍톤X3 독립 리뷰는 미확인입니다. Rocket X Trail 원문의 명시적 비교 문장에서 Matt은 텍톤X3 어퍼가 짧고 표기보다 무겁게 느껴져 자신에게 맞지 않았다고 적었습니다. 이 비교의 텍톤 검체 사이즈는 미확인이고 Rocket의 수치·주행을 옮기지 않았습니다. RR 내부 최광폭92.2mm·엄지73.1mm·높이26.4mm와 외부 플랫폼117mm는 다른 위치입니다. 한국 현재 와이드·개인 사이즈는 미확인입니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '트레일',
    '울트라',
    '카본',
    '반발력',
  ],
  specs: {
    weight: 275,
    drop: 6.9,
  },
  biomechanics: {
    stackHeight: {
      heel: 37.8,
      forefoot: 30.9,
    },
    drop: 6.9,
    carbonPlate: true,
    plateType: 'Parallel carbon fiber plates with winglets',
    midsoleType: '이중 PEBA · 병렬 윙렛 카본 · MATRYX · Vibram',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      '병렬 윙렛 카본의 전환과 실제 고정을 비교하려는 러너',
      'MATRYX·게이터 칼라의 길이·압박을 확인하려는 러너',
    ],
    notRecommended: [
      '실제 규격에서 앞코 압박·힐 슬립이 지속되는 경우',
      '게이터를 방수·모든 지형 보호 보장으로 이해하는 경우',
    ],
  },
  features: [
    '이중 PEBA · 병렬 윙렛 카본 · MATRYX · Vibram',
    '275g · 37.8/30.9mm · 드롭 6.9mm (RunRepeat 실험실 검체)',
    '윙렛이 달린 병렬 카본 섬유 플레이트입니다. HOKA 호주 공식의 이중 PEBA·MATRYX·Vibram Megagrip Litebase와 구분해 읽습니다. 니트 게이터는 방수 인증이 아닙니다.',
    'RR 내부 최광폭92.2mm·엄지73.1mm·높이26.4mm와 외부 플랫폼117mm는 다른 위치입니다. 한국 현재 와이드·개인 사이즈는 미확인입니다.',
  ],
  priceAnalysis: {
    priceTier: 'super-premium',
    alternatives: [
      'asics-metafuji-trail',
      'nike-ultrafly',
    ],
  },
  detailedSpecs: {
    weight: '275g (RunRepeat 실험실 검체). 호주 공식 남성283g(사이즈 미확인)·5mm, RR 브랜드40/35mm·5mm·292/244g(사이즈 미확인), 실제275g·37.8/30.9mm·6.9mm를 구분합니다.',
    stackHeight: '37.8/30.9mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '6.9mm (RunRepeat 실험실 검체). 호주 공식 남성283g(사이즈 미확인)·5mm, RR 브랜드40/35mm·5mm·292/244g(사이즈 미확인), 실제275g·37.8/30.9mm·6.9mm를 구분합니다.',
    midsole: '이중 PEBA · 병렬 윙렛 카본 · MATRYX · Vibram. 폼 경도 16 HA (구방식), AC 미확인. 힐/전족부 SA 139/120·에너지 리턴 69.9/70.2%. 현행 RR 원문 경도는16.0HA(구방식 ShoreA)이며 AC는 미확인입니다. 아웃솔88HC와 다르며 변환하지 않습니다.4mm 러그·국소마모0.5mm·리턴69.9/70.2%를450~550km 수명·50/100km 피로 감소·만능 접지로 바꾸지 않습니다. 어퍼 밀림 일괄 보장·급경사 금지·폴 필수는 확인한 범위에서 입증하지 못했습니다.',
    plate: '윙렛이 달린 병렬 카본 섬유 플레이트입니다. HOKA 호주 공식의 이중 PEBA·MATRYX·Vibram Megagrip Litebase와 구분해 읽습니다. 니트 게이터는 방수 인증이 아닙니다.',
    width: 'RR 내부 최광폭 92.2mm·엄지 부위 73.1mm·높이 26.4mm. RR 내부 최광폭92.2mm·엄지73.1mm·높이26.4mm와 외부 플랫폼117mm는 다른 위치입니다. 한국 현재 와이드·개인 사이즈는 미확인입니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식 연결 스토어에서 정확 상품 본문을 확보하지 못해 현행 정가·SKU·성별·폭·선택 재고는 미확인입니다. 해외 와이드나 유통가를 한국 공식 정보로 대입하지 않으며 검색 실패를 단종·전국 품절로 해석하지 않습니다. 기존339,000원 리셀러값을 한국 공식 정가로 쓰지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/hoka-tecton-x-3',
      text: '호주 공식 남성283g(사이즈 미확인)·5mm, RR 브랜드40/35mm·5mm·292/244g(사이즈 미확인), 실제275g·37.8/30.9mm·6.9mm를 구분합니다. 현행 RR 원문 경도는16.0HA(구방식 ShoreA)이며 AC는 미확인입니다. 아웃솔88HC와 다르며 변환하지 않습니다.4mm 러그·국소마모0.5mm·리턴69.9/70.2%를450~550km 수명·50/100km 피로 감소·만능 접지로 바꾸지 않습니다. 어퍼 밀림 일괄 보장·급경사 금지·폴 필수는 확인한 범위에서 입증하지 못했습니다.',
    },
    {
      userType: '외부 비교 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/hoka-rocket-x-trail-review-2025/',
      text: 'DOR 텍톤X3 독립 리뷰는 미확인입니다. Rocket X Trail 원문의 명시적 비교 문장에서 Matt은 텍톤X3 어퍼가 짧고 표기보다 무겁게 느껴져 자신에게 맞지 않았다고 적었습니다. 이 비교의 텍톤 검체 사이즈는 미확인이고 Rocket의 수치·주행을 옮기지 않았습니다.',
    },
  ],
  similarShoes: [
    'asics-metafuji-trail',
    'nike-ultrafly',
  ],
  relatedPosts: [
    {
      slug: 'tecton-x-3-vs-ultrafly-vs-s-lab-pulsar-carbon-trail-2026',
      title: '카본 트레일 레이서 3파전 — 테크톤 X 3 vs 울트라플라이 vs S/LAB 펄사 4',
    },
    {
      slug: '2026-best-trail-running-shoes',
      title: '2026 트레일 러닝화 TOP 7',
    },
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: 'HOKA 한국 공식 연결 범위',
        url: 'https://linktr.ee/hoka_korea',
        note: '공식 트레일 스토어로 연결됐으나 상품은 robots 차단. 한국 가격·폭 미확인.',
      },
      {
        label: 'HOKA 해외 공식 동세대',
        url: 'https://au.hoka.com/products/m-tecton-x-3-1155112-bhkb-bhkb',
        note: '해외 공시이며 한국 가격·재고 근거 아님.',
      },
      {
        label: 'DOR 비교 문장 한정',
        url: 'https://www.doctorsofrunning.com/hoka-rocket-x-trail-review-2025/',
        note: 'Rocket X Trail 리뷰 중 Matt의 명시적 텍톤X3 비교만. 독립 리뷰·검체 사이즈 미확인.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/hoka-tecton-x-3',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 275g·37.8/30.9mm·6.9mm. 현행 RR 원문 경도는16.0HA(구방식 ShoreA)이며 AC는 미확인입니다. 아웃솔88HC와 다르며 변환하지 않습니다.4mm 러그·국소마모0.5mm·리턴69.9/70.2%를450~550km 수명·50/100km 피로 감소·만능 접지로 바꾸지 않습니다. 어퍼 밀림 일괄 보장·급경사 금지·폴 필수는 확인한 범위에서 입증하지 못했습니다.',
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
      '정확한 동세대 DOR 개별 착화 리뷰 미확인. 다른 세대로 대체하지 않음.',
    ],
  },
};
