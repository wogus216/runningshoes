import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'saucony-endorphin-trainer',
  slug: 'saucony-endorphin-trainer',
  brand: 'Saucony',
  name: '엔돌핀 트레이너',
  image: '/images/shoes/saucony/endorphin_Trainer.webp',
  images: [
    '/images/shoes/saucony/endorphintrainer/main.webp',
    '/images/shoes/saucony/endorphintrainer/side.webp',
    '/images/shoes/saucony/endorphintrainer/heel.webp',
    '/images/shoes/saucony/endorphintrainer/top.webp',
    '/images/shoes/saucony/endorphintrainer/outsole.webp',
  ],
  category: '쿠션화',
  price: 219000,
  description: 'IncrediRUN 상층 + PWRRUN 하층 · 약3/4 카본 구조의 엔돌핀 트레이너. RunRepeat 실험실 검체 285g·38.9/32mm. 한국 확인 가격 219,000원.',
  oneliner: 'IncrediRUN 상층 + PWRRUN 하층 · 약3/4 카본 · 285g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-09 원문 재확인. 한국 남성 일반M S20996-110 정가219,000원·확인시 할인131,400원,250/255/260mm 선택 가능·265~300mm는 품절 표시였습니다. 여성S10996-120·342는2~3개월 전 캐시여서 현재 가격·재고 미확인입니다. 별도 한국 와이드 SKU도 미확인입니다. 한국 남성 표기9.9oz(280g)는 기준 사이즈 미표기입니다. 여성 캐시8.9oz(227g)는 단위쌍이 맞지 않아 조용히 보정하지 않았습니다. DOR소개280g(남성 US9)·252g(여성 US8),41/33mm·8mm, RR브랜드42/34mm·8mm, RR실측285g·38.9/32mm·6.9mm는 별도입니다. 상층19.6AC·하층55.7AC를 분리합니다. DOR는 하층PWRRUN을EVA로 설명하며 전체를 IncrediRUN과 같은 폼이라고 쓰지 않습니다. 구방식 비틀림5/5·통기5/5를Nm·BR로 바꾸지 않습니다. 플랫폼폭·힐SA138을 무릎 보호·발목 치료로, 국소마모0.7mm를600km 수명으로 해석하지 않습니다. DOR Matt(남성 US10)은 정사이즈이지만 약간 밀착·낮은 볼륨·테이퍼, 초기 힐 슬립과 끈 조절 후 고정을 느꼈습니다. 본인은 뻣뻣하고 튀는 앞발을 빠른 훈련에 선호했습니다. Andrea는 평소 여성 US9.5에서 반업했다고 적었지만 실제 숫자 라벨은 미확인입니다. 폭·고정은 편했으나 무게·거친 힐 때문에 쉬운 주행을 선호해 두 용도가 갈렸습니다. 젖은 길 접지는 좋지 않았다는 경험과25마일 노출폼 마모는 보편 수명이 아닙니다. RR 내부 최광폭92.3mm·엄지70.1mm·높이28.9mm와 외부 전족 플랫폼 121.7mm를 구분합니다. 넓은 밑창만으로 한국 평균 발이 편하다고 보장하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '쿠션화',
    '트레이너',
    'IncrediRUN',
    '프리미엄',
  ],
  specs: {
    weight: 285,
    cushioning: 8,
    responsiveness: 10,
    stability: 6,
    drop: 6.9,
  },
  biomechanics: {
    stackHeight: {
      heel: 38.9,
      forefoot: 32,
    },
    drop: 6.9,
    carbonPlate: true,
    plateType: 'three-quarter carbon plate',
    midsoleType: 'IncrediRUN 상층 + PWRRUN 하층 · 약3/4 카본',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
  },
  targetUsers: {
    recommended: [
      '두 폼층과 약3/4 카본의 전환을 시착 비교하려는 러너',
      '낮은 볼륨·앞코·초기 힐 고정을 실제 규격에서 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 압박·힐 슬립·전환 불편이 생기는 경우',
      '수명600km·고정페이스를 구매 보장으로 기대하는 경우',
    ],
  },
  features: [
    'IncrediRUN 상층 + PWRRUN 하층 · 약3/4 카본',
    '285g · 38.9/32mm · 드롭 6.9mm (RunRepeat 실험실 검체)',
    '한국 공식 약3/4 카본 플레이트. DOR·RR의 뒤꿈치 비플레이트 구간 설명과 구분해 기록합니다.',
    'RR 내부 최광폭92.3mm·엄지70.1mm·높이28.9mm와 외부 전족 플랫폼 121.7mm를 구분합니다. 넓은 밑창만으로 한국 평균 발이 편하다고 보장하지 않습니다.',
  ],
  priceAnalysis: {
    msrp: 219000,
    priceTier: 'premium',
    alternatives: [
      'nike-zoom-fly-6',
      'asics-superblast-2',
      'new-balance-sc-trainer-v3',
    ],
  },
  detailedSpecs: {
    weight: '285g (RunRepeat 실험실 검체). 한국 남성 표기9.9oz(280g)는 기준 사이즈 미표기입니다. 여성 캐시8.9oz(227g)는 단위쌍이 맞지 않아 조용히 보정하지 않았습니다. DOR소개280g(남성 US9)·252g(여성 US8),41/33mm·8mm, RR브랜드42/34mm·8mm, RR실측285g·38.9/32mm·6.9mm는 별도입니다.',
    stackHeight: '38.9/32mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '6.9mm (RunRepeat 실험실 검체). 한국 남성 표기9.9oz(280g)는 기준 사이즈 미표기입니다. 여성 캐시8.9oz(227g)는 단위쌍이 맞지 않아 조용히 보정하지 않았습니다. DOR소개280g(남성 US9)·252g(여성 US8),41/33mm·8mm, RR브랜드42/34mm·8mm, RR실측285g·38.9/32mm·6.9mm는 별도입니다.',
    midsole: 'IncrediRUN 상층 + PWRRUN 하층 · 약3/4 카본. 주폼 19.6AC·보조 55.7AC, 힐/전족부 SA 138/112·에너지 리턴 68.8/76.3%. 상층19.6AC·하층55.7AC를 분리합니다. DOR는 하층PWRRUN을EVA로 설명하며 전체를 IncrediRUN과 같은 폼이라고 쓰지 않습니다. 구방식 비틀림5/5·통기5/5를Nm·BR로 바꾸지 않습니다. 플랫폼폭·힐SA138을 무릎 보호·발목 치료로, 국소마모0.7mm를600km 수명으로 해석하지 않습니다.',
    plate: '한국 공식 약3/4 카본 플레이트. DOR·RR의 뒤꿈치 비플레이트 구간 설명과 구분해 기록합니다.',
    width: 'RR 내부 최광폭 92.3mm·엄지 부위 70.1mm·높이 28.9mm. RR 내부 최광폭92.3mm·엄지70.1mm·높이28.9mm와 외부 전족 플랫폼 121.7mm를 구분합니다. 넓은 밑창만으로 한국 평균 발이 편하다고 보장하지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 남성 일반M S20996-110 정가219,000원·확인시 할인131,400원,250/255/260mm 선택 가능·265~300mm는 품절 표시였습니다. 여성S10996-120·342는2~3개월 전 캐시여서 현재 가격·재고 미확인입니다. 별도 한국 와이드 SKU도 미확인입니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/saucony-endorphin-trainer',
      text: '한국 남성 표기9.9oz(280g)는 기준 사이즈 미표기입니다. 여성 캐시8.9oz(227g)는 단위쌍이 맞지 않아 조용히 보정하지 않았습니다. DOR소개280g(남성 US9)·252g(여성 US8),41/33mm·8mm, RR브랜드42/34mm·8mm, RR실측285g·38.9/32mm·6.9mm는 별도입니다. 상층19.6AC·하층55.7AC를 분리합니다. DOR는 하층PWRRUN을EVA로 설명하며 전체를 IncrediRUN과 같은 폼이라고 쓰지 않습니다. 구방식 비틀림5/5·통기5/5를Nm·BR로 바꾸지 않습니다. 플랫폼폭·힐SA138을 무릎 보호·발목 치료로, 국소마모0.7mm를600km 수명으로 해석하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/saucony-endorphin-trainer-review-2025/',
      text: 'DOR Matt(남성 US10)은 정사이즈이지만 약간 밀착·낮은 볼륨·테이퍼, 초기 힐 슬립과 끈 조절 후 고정을 느꼈습니다. 본인은 뻣뻣하고 튀는 앞발을 빠른 훈련에 선호했습니다. Andrea는 평소 여성 US9.5에서 반업했다고 적었지만 실제 숫자 라벨은 미확인입니다. 폭·고정은 편했으나 무게·거친 힐 때문에 쉬운 주행을 선호해 두 용도가 갈렸습니다. 젖은 길 접지는 좋지 않았다는 경험과25마일 노출폼 마모는 보편 수명이 아닙니다.',
    },
  ],
  similarShoes: [
    'asics-superblast-2',
    'new-balance-sc-trainer-v3',
    'hoka-mach-x-3',
    'nike-vomero-18',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설 — 카본·유리섬유·나일론',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/GM323csQ',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5ZhhoqzGC',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 MEN · S20996-110 · M(일반)',
        url: 'https://saucony.co.kr/product/detail.html?cate_no=177&display_group=1&product_no=214',
        note: '확인 상품의 정가·당시 할인·사이즈별 상태만 적용. 결제재고 보장 아님.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/saucony-endorphin-trainer',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 285g·38.9/32mm·6.9mm. 상층19.6AC·하층55.7AC를 분리합니다. DOR는 하층PWRRUN을EVA로 설명하며 전체를 IncrediRUN과 같은 폼이라고 쓰지 않습니다. 구방식 비틀림5/5·통기5/5를Nm·BR로 바꾸지 않습니다. 플랫폼폭·힐SA138을 무릎 보호·발목 치료로, 국소마모0.7mm를600km 수명으로 해석하지 않습니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/saucony-endorphin-trainer-review-2025/',
        note: '한국 남성 표기9.9oz(280g)는 기준 사이즈 미표기입니다. 여성 캐시8.9oz(227g)는 단위쌍이 맞지 않아 조용히 보정하지 않았습니다. DOR소개280g(남성 US9)·252g(여성 US8),41/33mm·8mm, RR브랜드42/34mm·8mm, RR실측285g·38.9/32mm·6.9mm는 별도입니다.',
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
