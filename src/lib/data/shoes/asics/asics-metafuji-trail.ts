import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'asics-metafuji-trail',
  slug: 'asics-metafuji-trail',
  brand: 'Asics',
  name: '메타후지 트레일',
  image: '/images/shoes/asics/metafujitrail/side.webp',
  images: [
    '/images/shoes/asics/metafujitrail/side.webp',
    '/images/shoes/asics/metafujitrail/front.webp',
    '/images/shoes/asics/metafujitrail/back.webp',
    '/images/shoes/asics/metafujitrail/outsole.webp',
  ],
  category: '트레일',
  description: 'FF Turbo 위층 + FF Blast+ 주층 · 분기형 전장 카본 구조의 메타후지 트레일. RunRepeat 실험실 검체 258g·44.7/34.4mm. 한국 현재 정가 미확인.',
  oneliner: 'FF Turbo 위층 + FF Blast+ 주층 · 분기형 전장 카본 · 258g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 정확 초대 한국 상품은 검색 후보만 있고 본문 추출이 되지 않아 현재 한국 가격·SKU·폭·재고는 미확인입니다. Metafuji Trail2의 319,000원을 초대에 대입하지 않습니다. RR 실측 258g·44.7/34.4mm·10.3mm와 DOR 소개 261g(유니섹스 남성 US9/여성 US10.5)·44/39mm·5mm를 구분합니다. 실제 DOR 테스터 Matt는 남성 US10입니다. RR의 평탄한 울트라 제안과 Matt의 긴 주행 불편을 나란히 둡니다. 리턴 59.7/65.4%·젖은 콘크리트 0.80은 개인 편안함이나 진흙 접지 보장이 아닙니다. 아웃솔 마모 1.2mm·두께 1.1mm는 원문대로 보존하며 수명으로 환산하지 않습니다. 10km·하프·2시간 한계나 발목 염좌 위험 등급은 철회합니다. DOR Matt(남성 US10)는 앞코가 낮고 좁아 짧게 느껴지고 힐 카운터·맨발 내피 마찰이 불편했습니다. 정비된 빠른 트레일에서 강성과 스냅은 좋았지만 오르막 앞발 불편·느리거나 긴 주행의 불편, 기술 구간에서 좁은 힐/중족의 불안정을 적었습니다. 개인 경험을 임상 위험이나 모두의 거리 제한으로 확대하지 않습니다. RR 내부 최광폭 94mm·엄지 69.6mm·높이 24.5mm입니다. 낮은 볼륨·앞코 보강재와 힐 카운터의 접촉을 실제 규격·양말에서 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '트레일',
    '레이싱',
    '카본',
    '평탄트레일',
  ],
  specs: {
    weight: 258,
    drop: 10.3,
  },
  biomechanics: {
    stackHeight: {
      heel: 44.7,
      forefoot: 34.4,
    },
    drop: 10.3,
    carbonPlate: true,
    plateType: 'Full-length forked carbon plate',
    midsoleType: 'FF Turbo 위층 + FF Blast+ 주층 · 분기형 전장 카본',
  },
  koreanFootFit: {
  },
  targetUsers: {
    recommended: [
      '정비된 트레일에서 강한 카본 전환을 비교하려는 러너',
      '실제 규격에서 앞코와 힐 카운터 마찰을 확인하려는 러너',
    ],
    notRecommended: [
      '시착에서 앞발·힐 압박이 남는 경우',
      '평탄한 울트라 제안을 모든 러너의 장거리 편안함 보장으로 읽는 경우',
    ],
  },
  features: [
    'FF Turbo 위층 + FF Blast+ 주층 · 분기형 전장 카본',
    '258g · 44.7/34.4mm · 드롭 10.3mm (RunRepeat 실험실 검체)',
    '분기형 전장 카본과 ASICSGRIP을 사용합니다. 폼 전체가 FF Turbo인 것은 아니며 주층 FF Blast+의 RR 경도는 30.2AC입니다.',
    'RR 내부 최광폭 94mm·엄지 69.6mm·높이 24.5mm입니다. 낮은 볼륨·앞코 보강재와 힐 카운터의 접촉을 실제 규격·양말에서 확인하세요.',
  ],
  priceAnalysis: {
    priceTier: 'super-premium',
    alternatives: [
      'hoka-tecton-x-3',
      'adidas-terrex-agravic-speed-ultra',
    ],
  },
  detailedSpecs: {
    weight: '258g (RunRepeat 실험실 검체). RR 실측 258g·44.7/34.4mm·10.3mm와 DOR 소개 261g(유니섹스 남성 US9/여성 US10.5)·44/39mm·5mm를 구분합니다. 실제 DOR 테스터 Matt는 남성 US10입니다.',
    stackHeight: '44.7/34.4mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '10.3mm (RunRepeat 실험실 검체). RR 실측 258g·44.7/34.4mm·10.3mm와 DOR 소개 261g(유니섹스 남성 US9/여성 US10.5)·44/39mm·5mm를 구분합니다. 실제 DOR 테스터 Matt는 남성 US10입니다.',
    midsole: 'FF Turbo 위층 + FF Blast+ 주층 · 분기형 전장 카본. 주폼 30.2AC, 힐/전족부 SA 153/122·에너지 리턴 59.7/65.4%. RR의 평탄한 울트라 제안과 Matt의 긴 주행 불편을 나란히 둡니다. 리턴 59.7/65.4%·젖은 콘크리트 0.80은 개인 편안함이나 진흙 접지 보장이 아닙니다. 아웃솔 마모 1.2mm·두께 1.1mm는 원문대로 보존하며 수명으로 환산하지 않습니다. 10km·하프·2시간 한계나 발목 염좌 위험 등급은 철회합니다.',
    plate: '분기형 전장 카본과 ASICSGRIP을 사용합니다. 폼 전체가 FF Turbo인 것은 아니며 주층 FF Blast+의 RR 경도는 30.2AC입니다.',
    width: 'RR 내부 최광폭 94mm·엄지 부위 69.6mm·높이 24.5mm. RR 내부 최광폭 94mm·엄지 69.6mm·높이 24.5mm입니다. 낮은 볼륨·앞코 보강재와 힐 카운터의 접촉을 실제 규격·양말에서 확인하세요.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '정확 초대 한국 상품은 검색 후보만 있고 본문 추출이 되지 않아 현재 한국 가격·SKU·폭·재고는 미확인입니다. Metafuji Trail2의 319,000원을 초대에 대입하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/asics-metafuji-trail',
      text: 'RR 실측 258g·44.7/34.4mm·10.3mm와 DOR 소개 261g(유니섹스 남성 US9/여성 US10.5)·44/39mm·5mm를 구분합니다. 실제 DOR 테스터 Matt는 남성 US10입니다. RR의 평탄한 울트라 제안과 Matt의 긴 주행 불편을 나란히 둡니다. 리턴 59.7/65.4%·젖은 콘크리트 0.80은 개인 편안함이나 진흙 접지 보장이 아닙니다. 아웃솔 마모 1.2mm·두께 1.1mm는 원문대로 보존하며 수명으로 환산하지 않습니다. 10km·하프·2시간 한계나 발목 염좌 위험 등급은 철회합니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-metafuji-trail-review-2025/',
      text: 'DOR Matt(남성 US10)는 앞코가 낮고 좁아 짧게 느껴지고 힐 카운터·맨발 내피 마찰이 불편했습니다. 정비된 빠른 트레일에서 강성과 스냅은 좋았지만 오르막 앞발 불편·느리거나 긴 주행의 불편, 기술 구간에서 좁은 힐/중족의 불안정을 적었습니다. 개인 경험을 임상 위험이나 모두의 거리 제한으로 확대하지 않습니다.',
    },
  ],
  similarShoes: [
    'hoka-tecton-x-3',
    'adidas-terrex-agravic-speed-ultra',
  ],
  relatedPosts: [
    {
      slug: 'speedgoat-6-vs-pulsar-vs-metafuji-trail-2026',
      title: '트레일화 3파전 — 스피드고트 6 vs 펄사 vs 메타후지 트레일',
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
        label: '한국 공식 트레일 목록',
        url: 'https://www.asics.co.kr/c/sports_trail_running',
        note: '정확 초대 상품 검색 후보만 확인, 열린 페이지는 추적 iframe 한 줄로 제품 원문 미확보. 2세대 대입 안 함.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/asics-metafuji-trail',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 258g·44.7/34.4mm·10.3mm. RR의 평탄한 울트라 제안과 Matt의 긴 주행 불편을 나란히 둡니다. 리턴 59.7/65.4%·젖은 콘크리트 0.80은 개인 편안함이나 진흙 접지 보장이 아닙니다. 아웃솔 마모 1.2mm·두께 1.1mm는 원문대로 보존하며 수명으로 환산하지 않습니다. 10km·하프·2시간 한계나 발목 염좌 위험 등급은 철회합니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/asics-metafuji-trail-review-2025/',
        note: 'RR 실측 258g·44.7/34.4mm·10.3mm와 DOR 소개 261g(유니섹스 남성 US9/여성 US10.5)·44/39mm·5mm를 구분합니다. 실제 DOR 테스터 Matt는 남성 US10입니다.',
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
