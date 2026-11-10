import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'diadora-nucleo-2',
  slug: 'diadora-nucleo-2',
  brand: 'Diadora',
  name: '누클레오 2',
  image: '/images/shoes/diadora/nucleo-2/side.webp',
  images: [
    '/images/shoes/diadora/nucleo-2/side.webp',
    '/images/shoes/diadora/nucleo-2/angle.webp',
    '/images/shoes/diadora/nucleo-2/top.webp',
    '/images/shoes/diadora/nucleo-2/outsole.webp',
  ],
  category: '데일리',
  rating: 4,
  description: 'ANIMA EVA · DDATTIVO 인솔 구조의 누클레오 2. RunRepeat 실험실 검체 276g·38.7/30.7mm. 한국 현재 정가 미확인.',
  oneliner: 'ANIMA EVA · DDATTIVO 인솔 · 276g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 한국 공식 캐시: D5151RRN16BLK 성별 명시 미확인 정가219,000원·할인캐시153,300원; D5151RRN06WHT 성별 명시 미확인 정가219,000원·할인캐시129,000원; D5151RRN16WHT 성별 명시 미확인 정가219,000원·할인캐시153,300원; D5151RRN12YLS 성별 명시 미확인 정가219,000원·할인캐시149,000원; D5152RRN16BLK women 정가219,000원·할인캐시129,000원; D5152RRN24PKS women 정가219,000원·할인캐시149,000원. 현재 가격·폭·선택 재고는 미확인입니다. 공통SOLD OUT·장바구니·사이즈 목록을 현재 재고로 보지 않습니다. SKU숫자로 성별을 추정하지 않습니다. DOR 소개280g(남성US9)·35/30mm·5mm, RR 재전재 브랜드275/221g(사이즈 미확인)·38/33mm·5mm와 실제276g·38.7/30.7mm·8mm를 나눕니다. 17.9HA는 구방식이며AC 미확인입니다. 내부 최광폭97.5mm와 엄지72mm는 위치가 다릅니다. stable-neutral 체감은 평발 교정 효과가 아니며600km·질소 발포 아님 확정·가격대별 우위를 제거했습니다. DOR Bach는 핏 본문에서 남성US9.5를 적었지만 같은 글 프로필 평소사이즈는10입니다. 실제 착화 본문9.5를 보존합니다. 슬림하고 약간 낮은 앞발·테이퍼·단단히 고정되는 힐, 편한 착지와 약한 추진·둔한 힐 전환을 적었습니다.20마일은 개인 시험 거리입니다. RR 내부 최광폭 97.5mm·엄지 72mm·높이 25.6mm입니다. 다른 위치인 외부 바닥 폭과 구분하고 실제 규격·양말에서 고정을 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '데일리',
    '컴포트',
    '롱런',
    '넓은 플랫폼',
  ],
  specs: {
    weight: 276,
    cushioning: 8,
    responsiveness: 6,
    stability: 8,
    drop: 8,
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'good',
    summerCompatibility: 'fair',
  },
  targetUsers: {
    recommended: [
      '실제 규격에서 낮은 앞코·중족·힐 고정을 비교하려는 러너',
      '공시·랩·개인 체감과 원문 상충을 구분하려는 러너',
    ],
    notRecommended: [
      '시착에서 압박·마찰·불편한 전환이 남는 경우',
      '국소 마모·개인 경험을 공통 수명·임상 효과로 읽는 경우',
    ],
  },
  features: [
    'ANIMA EVA · DDATTIVO 인솔',
    '276g · 38.7/30.7mm · 드롭 8mm (RunRepeat 실험실 검체)',
    'RR은 non-supercritical EVA, DOR은 supercritical EVA라고 설명해 발포 공정은 미확인으로 남깁니다. 별도 플레이트 존재·재료도 미확인입니다.',
    'RR 내부 최광폭 97.5mm·엄지 72mm·높이 25.6mm입니다. 다른 위치인 외부 바닥 폭과 구분하고 실제 규격·양말에서 고정을 확인하세요.',
  ],
  priceAnalysis: {
    valueRating: 5,
    priceTier: 'premium',
    alternatives: [
      'adidas-supernova-rise-2',
      'asics-novablast-5',
      'new-balance-rebel-v5',
    ],
  },
  detailedSpecs: {
    weight: '276g (RunRepeat 실험실 검체). DOR 소개280g(남성US9)·35/30mm·5mm, RR 재전재 브랜드275/221g(사이즈 미확인)·38/33mm·5mm와 실제276g·38.7/30.7mm·8mm를 나눕니다.',
    stackHeight: '38.7/30.7mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '8mm (RunRepeat 실험실 검체). DOR 소개280g(남성US9)·35/30mm·5mm, RR 재전재 브랜드275/221g(사이즈 미확인)·38/33mm·5mm와 실제276g·38.7/30.7mm·8mm를 나눕니다.',
    midsole: 'ANIMA EVA · DDATTIVO 인솔. 폼 경도 17.9 HA (구방식), AC 미확인. 힐/전족부 SA 132/121·에너지 리턴 47.8/52.2%. 17.9HA는 구방식이며AC 미확인입니다. 내부 최광폭97.5mm와 엄지72mm는 위치가 다릅니다. stable-neutral 체감은 평발 교정 효과가 아니며600km·질소 발포 아님 확정·가격대별 우위를 제거했습니다.',
    plate: 'RR은 non-supercritical EVA, DOR은 supercritical EVA라고 설명해 발포 공정은 미확인으로 남깁니다. 별도 플레이트 존재·재료도 미확인입니다.',
    width: 'RR 내부 최광폭 97.5mm·엄지 부위 72mm·높이 25.6mm. RR 내부 최광폭 97.5mm·엄지 72mm·높이 25.6mm입니다. 다른 위치인 외부 바닥 폭과 구분하고 실제 규격·양말에서 고정을 확인하세요.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식 캐시: D5151RRN16BLK 성별 명시 미확인 정가219,000원·할인캐시153,300원; D5151RRN06WHT 성별 명시 미확인 정가219,000원·할인캐시129,000원; D5151RRN16WHT 성별 명시 미확인 정가219,000원·할인캐시153,300원; D5151RRN12YLS 성별 명시 미확인 정가219,000원·할인캐시149,000원; D5152RRN16BLK women 정가219,000원·할인캐시129,000원; D5152RRN24PKS women 정가219,000원·할인캐시149,000원. 현재 가격·폭·선택 재고는 미확인입니다. 공통SOLD OUT·장바구니·사이즈 목록을 현재 재고로 보지 않습니다. SKU숫자로 성별을 추정하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/diadora-nucleo-2',
      text: 'DOR 소개280g(남성US9)·35/30mm·5mm, RR 재전재 브랜드275/221g(사이즈 미확인)·38/33mm·5mm와 실제276g·38.7/30.7mm·8mm를 나눕니다. 17.9HA는 구방식이며AC 미확인입니다. 내부 최광폭97.5mm와 엄지72mm는 위치가 다릅니다. stable-neutral 체감은 평발 교정 효과가 아니며600km·질소 발포 아님 확정·가격대별 우위를 제거했습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/diadora-nucleo-2-review-2025/',
      text: 'DOR Bach는 핏 본문에서 남성US9.5를 적었지만 같은 글 프로필 평소사이즈는10입니다. 실제 착화 본문9.5를 보존합니다. 슬림하고 약간 낮은 앞발·테이퍼·단단히 고정되는 힐, 편한 착지와 약한 추진·둔한 힐 전환을 적었습니다.20마일은 개인 시험 거리입니다.',
    },
  ],
  similarShoes: [
    'adidas-supernova-rise-2',
    'asics-novablast-5',
    'new-balance-rebel-v5',
  ],
  purchaseLinks: [
    {
      store: '디아도라 공식몰',
      url: 'https://www.diadorakorea.com/product/detail.html?product_no=5194',
      price: 219000,
      isOfficial: true,
    },
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 kr-running',
        url: 'https://diadorakorea.com/project/%EB%9F%AC%EB%8B%9D%ED%99%94/615/',
        note: 'opened_original_cached_body; 정확 모델명별 SKU·판매가·할인판매가와 여성 별도 상품 확인. 리스트 전반 SOLD OUT 표시는 캐시 템플릿이며 현재 재고 판정에 사용하지 않음.',
      },
      {
        label: '한국 공식 kr-nuc-black',
        url: 'https://diadorakorea.com/product/%EB%88%84%ED%81%B4%EB%A0%88%EC%98%A4-2-black/5193/category/615/display/1/',
        note: 'opened_original_cached_body; D5151RRN16BLK,219000/153300. 표기 사이즈250,255,260,265,270,275,280,290. 실제 선택 활성화·재고 미검증.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/diadora-nucleo-2',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 276g·38.7/30.7mm·8mm. 17.9HA는 구방식이며AC 미확인입니다. 내부 최광폭97.5mm와 엄지72mm는 위치가 다릅니다. stable-neutral 체감은 평발 교정 효과가 아니며600km·질소 발포 아님 확정·가격대별 우위를 제거했습니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/diadora-nucleo-2-review-2025/',
        note: 'DOR 소개280g(남성US9)·35/30mm·5mm, RR 재전재 브랜드275/221g(사이즈 미확인)·38/33mm·5mm와 실제276g·38.7/30.7mm·8mm를 나눕니다.',
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
