import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'nike-pegasus-41',
  slug: 'nike-pegasus-41',
  brand: 'Nike',
  name: '페가수스 41',
  image: '/images/shoes/nike/pegasus41/side.webp',
  images: [
    '/images/shoes/nike/pegasus41/side.webp',
    '/images/shoes/nike/pegasus41/outsole.webp',
    '/images/shoes/nike/pegasus41/top.webp',
    '/images/shoes/nike/pegasus41/pair.webp',
  ],
  category: '입문화',
  rating: 4,
  price: 159000,
  description: 'ReactX · 힐/전족부 Air Zoom 유닛 구조의 페가수스 41. 실험실 281g·힐/전족부 33.6/22.2mm. 한국 확인 정가159,000원.',
  oneliner: '281g 실험실 무게 · ReactX · 힐/전족부 Air Zoom 유닛',
  editorComment: '2026-11-09 원문 재확인. 한국 남성 FD2722-120, 여성 그래픽 에디션 IQ1153-109 원문 정가159,000원 확인. 확인한 색상은 품절이었으며 다른 색상·한국 와이드SKU는 미확인입니다. 한국 남성297g(280mm)·여성251g(250mm),드롭10mm. DOR 소개 남성283g(US9)·37/27mm·10mm. RR281g·11.4mm와 조건이 다릅니다.  DOR의 Matt은 US10에서 길이가 맞지만 낮은 앞쪽 볼륨과 테이퍼를 느꼈으며 맨발 착화의 마찰·속도를 올릴 때 힐 전환을 지적했습니다. David은 신축성 있는 어퍼가 급회전·느슨한 지면에서 고정을 떨어뜨릴 수 있다고 봤습니다. 접지 체감과 RR의 젖은 콘크리트 시험은 다른 조건입니다. 한국 와이드·X-Wide 상품의 현재SKU는 이번에 확인하지 못했습니다. RR 엄지 부위72.9mm를 개인의 발볼이나 한국 와이드 폭과 대입하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '입문화',
    '데일리 러닝',
  ],
  specs: {
    weight: 281,
    cushioning: 8,
    responsiveness: 7,
    stability: 8,
    drop: 11.4,
  },
  biomechanics: {
    stackHeight: {
      heel: 33.6,
      forefoot: 22.2,
    },
    drop: 11.4,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'ReactX · 힐/전족부 Air Zoom 유닛',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },
  targetUsers: {
    recommended: [
      'ReactX와 Air Zoom의 데일리 착화를 비교하려는 러너',
      '한국 확인 정가159,000원 조건의 상품을 살펴보는 러너',
    ],
    notRecommended: [
      '낮은 앞쪽 볼륨·앞코 테이퍼가 맞지 않는 경우',
      '현재 확인 색상 외 재고·와이드 확인이 필요한 경우',
    ],
  },
  features: [
    'ReactX · 힐/전족부 Air Zoom 유닛',
    '281g · 힐/전족부 33.6/22.2mm (RunRepeat)',
    '힐/전족부 SA 125/92 · 에너지 리턴 55.5/61.4% (RunRepeat). ',
    '한국 와이드·X-Wide 상품의 현재SKU는 이번에 확인하지 못했습니다. RR 엄지 부위72.9mm를 개인의 발볼이나 한국 와이드 폭과 대입하지 않습니다.',
  ],
  priceAnalysis: {
    msrp: 159000,
    valueRating: 9,
    priceTier: 'mid',
    alternatives: [
      'asics-gel-nimbus-28',
      'new-balance-880-v15',
      'hoka-clifton-10',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/nike-pegasus-41',
      text: '281g과 SA 125/92·에너지 리턴 55.5/61.4%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다.  한국 와이드·X-Wide 상품의 현재SKU는 이번에 확인하지 못했습니다. RR 엄지 부위72.9mm를 개인의 발볼이나 한국 와이드 폭과 대입하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/nike-pegasus-41-review-2024/',
      text: 'DOR의 Matt은 US10에서 길이가 맞지만 낮은 앞쪽 볼륨과 테이퍼를 느꼈으며 맨발 착화의 마찰·속도를 올릴 때 힐 전환을 지적했습니다. David은 신축성 있는 어퍼가 급회전·느슨한 지면에서 고정을 떨어뜨릴 수 있다고 봤습니다. 접지 체감과 RR의 젖은 콘크리트 시험은 다른 조건입니다.',
    },
  ],
  detailedSpecs: {
    weight: '281g (RunRepeat 공시 검체 정책:남성US9). 한국 남성297g(280mm)·여성251g(250mm),드롭10mm. DOR 소개 남성283g(US9)·37/27mm·10mm. RR281g·11.4mm와 조건이 다릅니다.',
    stackHeight: '33.6/22.2mm (RunRepeat 힐/전족부 실측)',
    drop: '11.4mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'ReactX · 힐/전족부 Air Zoom 유닛 · 35.2 AC(Asker C) · 힐/전족부 SA 125/92 · 에너지 리턴 55.5/61.4%. ',
    plate: '확인한 원문 설명에 전장 카본 플레이트는 보고되지 않음',
    width: 'RunRepeat 내부 최광폭 94.6mm / 엄지 부위 72.9mm / 엄지 높이 26.4mm. 한국 와이드·X-Wide 상품의 현재SKU는 이번에 확인하지 못했습니다. RR 엄지 부위72.9mm를 개인의 발볼이나 한국 와이드 폭과 대입하지 않습니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 남성 FD2722-120, 여성 그래픽 에디션 IQ1153-109 원문 정가159,000원 확인. 확인한 색상은 품절이었으며 다른 색상·한국 와이드SKU는 미확인입니다.',
  },
  similarShoes: [
    'nike-pegasus-42',
    'adidas-supernova-rise-2',
    'asics-gel-nimbus-28',
    'new-balance-880-v15',
    'hoka-clifton-10',
  ],
  relatedPosts: [
    {
      slug: 'novablast-5-vs-pegasus-41-daily-cushion-2026',
      title: '노바블라스트 5 vs 페가수스 41 — 데일리 쿠션 대결',
    },
    {
      slug: 'nike-pegasus-41-vs-42-comparison',
      title: '페가수스 41 vs 42 — 세대 비교',
    },
    {
      slug: 'first-running-shoe-guide-2026',
      title: '첫 러닝화 완벽 가이드',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/5eDHQ0w3',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YUKD3sNU',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 men · FD2722-120',
        url: 'https://www.nike.com/kr/t/나이키-페가수스-41-남성-로드-러닝화-KJOKMFFd/FD2722-120',
        note: '한국 남성 FD2722-120, 여성 그래픽 에디션 IQ1153-109 원문 정가159,000원 확인. 확인한 색상은 품절이었으며 다른 색상·한국 와이드SKU는 미확인입니다.',
      },
      {
        label: '한국 공식 women · IQ1153-109',
        url: 'https://www.nike.com/kr/t/나이키-페가수스-41-여성-로드-러닝화-mzOQVnjR',
        note: '한국 남성 FD2722-120, 여성 그래픽 에디션 IQ1153-109 원문 정가159,000원 확인. 확인한 색상은 품절이었으며 다른 색상·한국 와이드SKU는 미확인입니다.',
      },
      {
        label: 'RunRepeat 페가수스 41',
        url: 'https://runrepeat.com/nike-pegasus-41',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 281g · 33.6/22.2mm · 드롭11.4mm. SA 125/92 · ER 55.5/61.4%. ',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/nike-pegasus-41-review-2024/',
        note: '한국 남성297g(280mm)·여성251g(250mm),드롭10mm. DOR 소개 남성283g(US9)·37/27mm·10mm. RR281g·11.4mm와 조건이 다릅니다.',
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
