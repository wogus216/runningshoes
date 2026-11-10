import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'saucony-endorphin-azura',
  slug: 'saucony-endorphin-azura',
  brand: 'Saucony',
  name: '엔돌핀 아주라',
  image: '/images/shoes/saucony/endorphinazura/side.webp',
  images: [
    '/images/shoes/saucony/endorphinazura/side.webp',
    '/images/shoes/saucony/endorphinazura/top.webp',
    '/images/shoes/saucony/endorphinazura/outsole.webp',
    '/images/shoes/saucony/endorphinazura/front.webp',
    '/images/shoes/saucony/endorphinazura/back.webp',
  ],
  category: '데일리',
  description: 'PWRRUN PB 비즈 PEBA · SPEEDROLL · 플레이트 없음 구조의 엔돌핀 아주라. RunRepeat 실험실 검체 241g·40.7/32.7mm. 한국 현재 정가 미확인.',
  oneliner: 'PWRRUN PB 비즈 PEBA · SPEEDROLL · 플레이트 없음 · 241g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 한국 공식 캐시: men S101329-1041 M(일반) 정가189,000원; women S11070-124 M(일반) 정가189,000원. 현재 가격·폭별 선택 재고는 미확인입니다. 옵션 목록·장바구니·품절 문구를 현재 전체 재고로 해석하지 않습니다. 한국 무게·전체 스택 공시가 없는 제품은 해외 소개로 채우지 않습니다. DOR 소개240g(남성 US9)/212g(여성 US8)·40/32mm·8mm와 RR241g·40.7/32.7mm·8mm를 구분합니다. 한국 남성240g·여성212g은 기준 사이즈 미공시이고 여성8.5oz표기는 DOR7.5oz와 달라 g값만 그대로 남깁니다. David의 다용도 선호와 Andrea의 단단함·로커 불호를 합쳐 모두에게 편한 데일리라고 정하지 않습니다. BLACK/QUARTZ 170,100원은 검색 캐시 할인이며 열린 캐시와 다르고 현재 가격은 미확인입니다. 반업 일괄 권장·와이드 부재·600km·무릎 보호를 제거했습니다. DOR 직접403 이후 검색에 노출된 원문 캐시를 확인했습니다. DOR David(남성 US9.5)는 정사이즈·보통 폭과 조금 넓은 앞발, 자극 없는 힐을 느끼고 단단한 폼과 늦은 로커를 다용도로 좋아했지만 느린 움직임은 덜 매끄러웠습니다. Andrea는 길이 때문에 반 사이즈 올렸어도 내측 뒤쪽 사이드월과 강한 토스프링이 불편해 짧은 이지런에만 받아들였습니다. Andrea 실제 숫자 사이즈는 미확인입니다. RR 내부 최광폭 94mm·엄지 72.2mm·높이 28.3mm입니다. 전체 발 적합성이나 한국 와이드 규격으로 바꾸지 말고 실제 길이·높이·고정을 함께 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '데일리',
    '퍼포먼스 트레이너',
    '논플레이트',
    '스피드',
  ],
  specs: {
    weight: 241,
    cushioning: 8,
    responsiveness: 9,
    stability: 6,
    drop: 8,
  },
  biomechanics: {
    stackHeight: {
      heel: 40.7,
      forefoot: 32.7,
    },
    drop: 8,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'PWRRUN PB 비즈 PEBA · SPEEDROLL · 플레이트 없음',
  },
  koreanFootFit: {
    toBoxWidth: 'standard',
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
    'PWRRUN PB 비즈 PEBA · SPEEDROLL · 플레이트 없음',
    '241g · 40.7/32.7mm · 드롭 8mm (RunRepeat 실험실 검체)',
    '플레이트와 별도 강성 보강재가 없는 구조입니다. 플레이트 부재를 발목·아킬레스 부담 감소라는 임상 효과로 바꾸지 않습니다.',
    'RR 내부 최광폭 94mm·엄지 72.2mm·높이 28.3mm입니다. 전체 발 적합성이나 한국 와이드 규격으로 바꾸지 말고 실제 길이·높이·고정을 함께 확인하세요.',
  ],
  priceAnalysis: {
    priceTier: 'mid',
    alternatives: [
      'adidas-adizero-evo-sl',
      'new-balance-rebel-v5',
      'puma-velocity-nitro-4',
    ],
  },
  detailedSpecs: {
    weight: '241g (RunRepeat 실험실 검체). DOR 소개240g(남성 US9)/212g(여성 US8)·40/32mm·8mm와 RR241g·40.7/32.7mm·8mm를 구분합니다. 한국 남성240g·여성212g은 기준 사이즈 미공시이고 여성8.5oz표기는 DOR7.5oz와 달라 g값만 그대로 남깁니다.',
    stackHeight: '40.7/32.7mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '8mm (RunRepeat 실험실 검체). DOR 소개240g(남성 US9)/212g(여성 US8)·40/32mm·8mm와 RR241g·40.7/32.7mm·8mm를 구분합니다. 한국 남성240g·여성212g은 기준 사이즈 미공시이고 여성8.5oz표기는 DOR7.5oz와 달라 g값만 그대로 남깁니다.',
    midsole: 'PWRRUN PB 비즈 PEBA · SPEEDROLL · 플레이트 없음. 주폼 40.2AC, 힐/전족부 SA 137/122·에너지 리턴 70.6/74.7%. David의 다용도 선호와 Andrea의 단단함·로커 불호를 합쳐 모두에게 편한 데일리라고 정하지 않습니다. BLACK/QUARTZ 170,100원은 검색 캐시 할인이며 열린 캐시와 다르고 현재 가격은 미확인입니다. 반업 일괄 권장·와이드 부재·600km·무릎 보호를 제거했습니다.',
    plate: '플레이트와 별도 강성 보강재가 없는 구조입니다. 플레이트 부재를 발목·아킬레스 부담 감소라는 임상 효과로 바꾸지 않습니다.',
    width: 'RR 내부 최광폭 94mm·엄지 부위 72.2mm·높이 28.3mm. RR 내부 최광폭 94mm·엄지 72.2mm·높이 28.3mm입니다. 전체 발 적합성이나 한국 와이드 규격으로 바꾸지 말고 실제 길이·높이·고정을 함께 확인하세요.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식 캐시: men S101329-1041 M(일반) 정가189,000원; women S11070-124 M(일반) 정가189,000원. 현재 가격·폭별 선택 재고는 미확인입니다. 옵션 목록·장바구니·품절 문구를 현재 전체 재고로 해석하지 않습니다. 한국 무게·전체 스택 공시가 없는 제품은 해외 소개로 채우지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/saucony-endorphin-azura',
      text: 'DOR 소개240g(남성 US9)/212g(여성 US8)·40/32mm·8mm와 RR241g·40.7/32.7mm·8mm를 구분합니다. 한국 남성240g·여성212g은 기준 사이즈 미공시이고 여성8.5oz표기는 DOR7.5oz와 달라 g값만 그대로 남깁니다. David의 다용도 선호와 Andrea의 단단함·로커 불호를 합쳐 모두에게 편한 데일리라고 정하지 않습니다. BLACK/QUARTZ 170,100원은 검색 캐시 할인이며 열린 캐시와 다르고 현재 가격은 미확인입니다. 반업 일괄 권장·와이드 부재·600km·무릎 보호를 제거했습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/saucony-endorphin-azura-review-2026/',
      text: 'DOR 직접403 이후 검색에 노출된 원문 캐시를 확인했습니다. DOR David(남성 US9.5)는 정사이즈·보통 폭과 조금 넓은 앞발, 자극 없는 힐을 느끼고 단단한 폼과 늦은 로커를 다용도로 좋아했지만 느린 움직임은 덜 매끄러웠습니다. Andrea는 길이 때문에 반 사이즈 올렸어도 내측 뒤쪽 사이드월과 강한 토스프링이 불편해 짧은 이지런에만 받아들였습니다. Andrea 실제 숫자 사이즈는 미확인입니다.',
    },
  ],
  similarShoes: [
    'adidas-adizero-evo-sl',
    'new-balance-rebel-v5',
    'puma-velocity-nitro-4',
    'saucony-endorphin-speed-5',
  ],
  purchaseLinks: [
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5ZeyJm3Cm',
    },
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: 'kr-azura-m',
        url: 'https://www.saucony.co.kr/product/detail.html?cate_no=1&display_group=4&product_no=471',
        note: 'original_opened_cached_web; S101329-1041 남성 WHITE/MULTI M(일반),189000;250–300,8.5oz(240g)사이즈미공시,논플레이트.',
      },
      {
        label: 'kr-azura-w',
        url: 'https://saucony.co.kr/product/detail.html?cate_no=82&display_group=1&product_no=309',
        note: 'original_opened_cached_web; S11070-124 여성 WHITE/SPLASH M(일반),189000;220–255,8.5oz(212g)원문그대로·사이즈미공시.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/saucony-endorphin-azura',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 241g·40.7/32.7mm·8mm. David의 다용도 선호와 Andrea의 단단함·로커 불호를 합쳐 모두에게 편한 데일리라고 정하지 않습니다. BLACK/QUARTZ 170,100원은 검색 캐시 할인이며 열린 캐시와 다르고 현재 가격은 미확인입니다. 반업 일괄 권장·와이드 부재·600km·무릎 보호를 제거했습니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/saucony-endorphin-azura-review-2026/',
        note: 'DOR 소개240g(남성 US9)/212g(여성 US8)·40/32mm·8mm와 RR241g·40.7/32.7mm·8mm를 구분합니다. 한국 남성240g·여성212g은 기준 사이즈 미공시이고 여성8.5oz표기는 DOR7.5oz와 달라 g값만 그대로 남깁니다.',
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
