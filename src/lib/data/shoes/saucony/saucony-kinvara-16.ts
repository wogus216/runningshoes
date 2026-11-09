import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'saucony-kinvara-16',
  slug: 'saucony-kinvara-16',
  brand: 'Saucony',
  name: '킨바라 16',
  image: '/images/shoes/saucony/kinvara16.webp',
  images: [
    '/images/shoes/saucony/kinvara16/side.webp',
    '/images/shoes/saucony/kinvara16/top.webp',
    '/images/shoes/saucony/kinvara16/outsole.webp',
  ],
  category: '데일리',
  rating: 4,
  price: 159000,
  description: 'PWRRUN · 비플레이트 · 낮은 드롭 구조의 킨바라 16. RunRepeat 실험실 검체 207g·28/23.5mm. 한국 확인 가격 159,000원.',
  oneliner: 'PWRRUN · 비플레이트 · 낮은 드롭 · 207g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-09 원문 재확인. 한국 남성 일반M S21020-155 정가159,000원·확인시 할인111,300원,250~290mm 선택 가능·295/300mm 품절 표시였습니다. 여성 카테고리 카드만으로 현재 SKU·사이즈를 확정하지 않습니다. 별도 한국 와이드 SKU는 미확인입니다. RR브랜드 메타29/25mm·4mm·남성198g/여성179g은 기준 사이즈 미확인입니다. RR검체207g·28.0/23.5mm·4.5mm와 구분합니다. 기존207g을 남성 공식 US9무게로 쓴 표현은 철회했습니다. 현재 원문 경도는27.5HA(구방식)이며 AC는 미확인입니다. 다른 모델 AC와 직접 비교·환산하지 않습니다. 아웃솔 국소마모2.0mm·토박스1/5를500km 교체로, 힐SA109를 무릎·아킬레스 질환 등급으로 바꾸지 않습니다. 정확한 킨바라16의 DOR 개별 착화 리뷰는 확인하지 못했습니다. 15의 의견을16으로 옮기지 않았습니다. 독자 정사이즈 투표와 검체 치수는 다른 정보입니다. 기존 중급근력필수·입문자 일괄금지·10~15km 거리 상한은 확인한 원문에서 보편 기준으로 입증되지 않아 철회했습니다. RR 내부 최광폭94.0mm·엄지70.8mm·높이28.9mm를 모든 넓은 발의 반업 기준으로 쓰지 않습니다. 한국 현재 와이드 미확인을 전세계 옵션 없음으로 확대하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '데일리',
    '경량',
    '로우드롭',
    '내추럴',
  ],
  specs: {
    weight: 207,
    cushioning: 7,
    responsiveness: 6,
    stability: 5,
    drop: 4.5,
  },
  biomechanics: {
    stackHeight: {
      heel: 28,
      forefoot: 23.5,
    },
    drop: 4.5,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN · 비플레이트 · 낮은 드롭',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'fair',
    summerCompatibility: 'good',
  },
  targetUsers: {
    recommended: [
      '낮은 드롭·PWRRUN의 전환을 시착 비교하려는 러너',
      '실제 규격에서 앞코·발등·힐 고정을 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 발가락·종아리 등의 불편이 생기는 경우',
      '27.5HA를 다른 모델 AC와 같은 단위로 비교하는 경우',
    ],
  },
  features: [
    'PWRRUN · 비플레이트 · 낮은 드롭',
    '207g · 28/23.5mm · 드롭 4.5mm (RunRepeat 실험실 검체)',
    '플레이트 없음. 낮은 드롭을 전족 착지 강제나 근력 등급의 근거로 쓰지 않습니다.',
    'RR 내부 최광폭94.0mm·엄지70.8mm·높이28.9mm를 모든 넓은 발의 반업 기준으로 쓰지 않습니다. 한국 현재 와이드 미확인을 전세계 옵션 없음으로 확대하지 않습니다.',
  ],
  priceAnalysis: {
    msrp: 159000,
    valueRating: 7,
    priceTier: 'mid',
    alternatives: [
      'nike-pegasus-41',
      'new-balance-rebel-v5',
      'hoka-mach-6',
    ],
  },
  detailedSpecs: {
    weight: '207g (RunRepeat 실험실 검체). RR브랜드 메타29/25mm·4mm·남성198g/여성179g은 기준 사이즈 미확인입니다. RR검체207g·28.0/23.5mm·4.5mm와 구분합니다. 기존207g을 남성 공식 US9무게로 쓴 표현은 철회했습니다.',
    stackHeight: '28/23.5mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '4.5mm (RunRepeat 실험실 검체). RR브랜드 메타29/25mm·4mm·남성198g/여성179g은 기준 사이즈 미확인입니다. RR검체207g·28.0/23.5mm·4.5mm와 구분합니다. 기존207g을 남성 공식 US9무게로 쓴 표현은 철회했습니다.',
    midsole: 'PWRRUN · 비플레이트 · 낮은 드롭. 폼 경도 27.5 HA (구방식), AC 미확인. 힐/전족부 SA 109/100·에너지 리턴 50.3/53.6%. 현재 원문 경도는27.5HA(구방식)이며 AC는 미확인입니다. 다른 모델 AC와 직접 비교·환산하지 않습니다. 아웃솔 국소마모2.0mm·토박스1/5를500km 교체로, 힐SA109를 무릎·아킬레스 질환 등급으로 바꾸지 않습니다.',
    plate: '플레이트 없음. 낮은 드롭을 전족 착지 강제나 근력 등급의 근거로 쓰지 않습니다.',
    width: 'RR 내부 최광폭 94mm·엄지 부위 70.8mm·높이 28.9mm. RR 내부 최광폭94.0mm·엄지70.8mm·높이28.9mm를 모든 넓은 발의 반업 기준으로 쓰지 않습니다. 한국 현재 와이드 미확인을 전세계 옵션 없음으로 확대하지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 남성 일반M S21020-155 정가159,000원·확인시 할인111,300원,250~290mm 선택 가능·295/300mm 품절 표시였습니다. 여성 카테고리 카드만으로 현재 SKU·사이즈를 확정하지 않습니다. 별도 한국 와이드 SKU는 미확인입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/saucony-kinvara-16',
      text: 'RR브랜드 메타29/25mm·4mm·남성198g/여성179g은 기준 사이즈 미확인입니다. RR검체207g·28.0/23.5mm·4.5mm와 구분합니다. 기존207g을 남성 공식 US9무게로 쓴 표현은 철회했습니다. 현재 원문 경도는27.5HA(구방식)이며 AC는 미확인입니다. 다른 모델 AC와 직접 비교·환산하지 않습니다. 아웃솔 국소마모2.0mm·토박스1/5를500km 교체로, 힐SA109를 무릎·아킬레스 질환 등급으로 바꾸지 않습니다.',
    },
    {
      userType: '원문 기반 확인 범위 · 착화 후기 미확인',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/saucony-kinvara-16',
      text: '정확한 킨바라16의 DOR 개별 착화 리뷰는 확인하지 못했습니다. 15의 의견을16으로 옮기지 않았습니다. 독자 정사이즈 투표와 검체 치수는 다른 정보입니다. 기존 중급근력필수·입문자 일괄금지·10~15km 거리 상한은 확인한 원문에서 보편 기준으로 입증되지 않아 철회했습니다.',
    },
  ],
  similarShoes: [
    'hoka-mach-6',
    'nike-pegasus-41',
    'asics-novablast-5',
    'new-balance-rebel-v5',
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/xy7L7Ihl',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5ZjoxbBi8',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 MEN · S21020-155 · M(일반)',
        url: 'https://saucony.co.kr/product/detail.html?product_no=354&cate_no=122&display_group=1',
        note: '확인 상품의 정가·당시 할인·사이즈별 상태만 적용. 결제재고 보장 아님.',
      },
      {
        label: '한국 카테고리 카드 확인 범위',
        url: 'https://saucony.co.kr/product/list.html?cate_no=122',
        note: '카드는 상품 상세의 SKU·재고 확인과 구분. 전체 목록을 모두 검사한 것은 아님.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/saucony-kinvara-16',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 207g·28/23.5mm·4.5mm. 현재 원문 경도는27.5HA(구방식)이며 AC는 미확인입니다. 다른 모델 AC와 직접 비교·환산하지 않습니다. 아웃솔 국소마모2.0mm·토박스1/5를500km 교체로, 힐SA109를 무릎·아킬레스 질환 등급으로 바꾸지 않습니다.',
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
