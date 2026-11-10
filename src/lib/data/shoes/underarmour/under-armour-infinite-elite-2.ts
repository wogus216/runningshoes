import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'under-armour-infinite-elite-2',
  slug: 'under-armour-infinite-elite-2',
  brand: 'Under Armour',
  name: '인피니트 엘리트 2',
  image: '/images/shoes/underarmour/infinite-elite-2/side.webp',
  images: [
    '/images/shoes/underarmour/infinite-elite-2/side.webp',
    '/images/shoes/underarmour/infinite-elite-2/detail.webp',
    '/images/shoes/underarmour/infinite-elite-2/angle.webp',
    '/images/shoes/underarmour/infinite-elite-2/top.webp',
    '/images/shoes/underarmour/infinite-elite-2/outsole.webp',
  ],
  category: '쿠션화',
  rating: 4,
  description: 'HOVR+ · 엔지니어드 메시 · 고무 밑창 구조의 인피니트 엘리트 2. RunRepeat 실험실 검체 288g·40.1/33.1mm. 한국 현재 정가 미확인.',
  oneliner: 'HOVR+ · 엔지니어드 메시 · 고무 밑창 · 288g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 한국 공식 캐시: 3028169 Men 레귤러 정가 199,000원·판매 139,300원; 3028178 Women 레귤러 정가 199,000원·판매 139,300원. 현재 가격과 선택 재고는 미확인입니다. 레귤러를 D/2E로 바꾸거나 정적 사이즈 목록을 재고로 사용하지 않습니다. RR 288g·40.1/33.1mm·7mm와 한국 남성 306g/여성 240.97g(각 기준 사이즈 미확인)·8mm, RR 재전재 브랜드 36/28mm·8mm를 구분합니다. RR 본문 72.6%의 위치를 확인하지 못해 힐 리턴은 미확인으로 두고 전족 74.8%만 표시했습니다. 구방식 연기 4/5는 BR이 아닙니다. 외부 힐 바닥 103.9mm는 내부 너비가 아니며 600km 수명·현재 와이드 부재를 보장하지 않습니다. 정확 Infinite Elite2의 DOR 개별 착화 리뷰는 이번 범위에서 확인하지 못했습니다. 다른 세대의 경험을 대신 쓰지 않습니다. RR 내부 최광폭 95mm·엄지 71.9mm·높이 27.9mm입니다. 실제 길이·발톱 위 높이·중족 압박·힐 고정을 확인하세요. 한국 다른 성별·폭의 치수로 직접 대입하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '쿠션화',
    '맥시멀',
    'HOVR+',
    '데일리',
    '장거리',
  ],
  specs: {
    weight: 288,
    cushioning: 9,
    responsiveness: 9,
    stability: 8,
    drop: 7,
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'good',
    summerCompatibility: 'good',
  },
  targetUsers: {
    recommended: [
      '실제 규격의 고정과 전환을 비교하려는 러너',
      '개별 공시·검체 조건을 구분해 선택하려는 러너',
    ],
    notRecommended: [
      '시착·주행에서 발등 압박·마찰·불편한 전환이 남는 경우',
    ],
  },
  features: [
    'HOVR+ · 엔지니어드 메시 · 고무 밑창',
    '288g · 40.1/33.1mm · 드롭 7mm (RunRepeat 실험실 검체)',
    'HOVR+의 정확한 폴리머와 판 유무는 이번 원문에서 확정하지 못했습니다. 일반 트레이너라는 이름만으로 판 없음으로 채우지 않습니다.',
    'RR 내부 최광폭 95mm·엄지 71.9mm·높이 27.9mm입니다. 실제 길이·발톱 위 높이·중족 압박·힐 고정을 확인하세요. 한국 다른 성별·폭의 치수로 직접 대입하지 않습니다.',
  ],
  priceAnalysis: {
    valueRating: 8,
    priceTier: 'premium',
    alternatives: [
      'asics-gel-nimbus-28',
      'new-balance-1080-v15',
      'saucony-triumph-24',
    ],
  },
  detailedSpecs: {
    weight: '288g (RunRepeat 실험실 검체). RR 288g·40.1/33.1mm·7mm와 한국 남성 306g/여성 240.97g(각 기준 사이즈 미확인)·8mm, RR 재전재 브랜드 36/28mm·8mm를 구분합니다.',
    stackHeight: '40.1/33.1mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '7mm (RunRepeat 실험실 검체). RR 288g·40.1/33.1mm·7mm와 한국 남성 306g/여성 240.97g(각 기준 사이즈 미확인)·8mm, RR 재전재 브랜드 36/28mm·8mm를 구분합니다.',
    midsole: 'HOVR+ · 엔지니어드 메시 · 고무 밑창. 주폼 35AC, 힐/전족부 SA 144/121·에너지 리턴 미확인/74.8%. RR 본문 72.6%의 위치를 확인하지 못해 힐 리턴은 미확인으로 두고 전족 74.8%만 표시했습니다. 구방식 연기 4/5는 BR이 아닙니다. 외부 힐 바닥 103.9mm는 내부 너비가 아니며 600km 수명·현재 와이드 부재를 보장하지 않습니다.',
    plate: 'HOVR+의 정확한 폴리머와 판 유무는 이번 원문에서 확정하지 못했습니다. 일반 트레이너라는 이름만으로 판 없음으로 채우지 않습니다.',
    width: 'RR 내부 최광폭 95mm·엄지 부위 71.9mm·높이 27.9mm. RR 내부 최광폭 95mm·엄지 71.9mm·높이 27.9mm입니다. 실제 길이·발톱 위 높이·중족 압박·힐 고정을 확인하세요. 한국 다른 성별·폭의 치수로 직접 대입하지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식 캐시: 3028169 Men 레귤러 정가 199,000원·판매 139,300원; 3028178 Women 레귤러 정가 199,000원·판매 139,300원. 현재 가격과 선택 재고는 미확인입니다. 레귤러를 D/2E로 바꾸거나 정적 사이즈 목록을 재고로 사용하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/under-armour-infinite-elite-2',
      text: 'RR 288g·40.1/33.1mm·7mm와 한국 남성 306g/여성 240.97g(각 기준 사이즈 미확인)·8mm, RR 재전재 브랜드 36/28mm·8mm를 구분합니다. RR 본문 72.6%의 위치를 확인하지 못해 힐 리턴은 미확인으로 두고 전족 74.8%만 표시했습니다. 구방식 연기 4/5는 BR이 아닙니다. 외부 힐 바닥 103.9mm는 내부 너비가 아니며 600km 수명·현재 와이드 부재를 보장하지 않습니다.',
    },
    {
      userType: '원문 기반 확인 범위 · 착화 후기 미확인',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/under-armour-infinite-elite-2',
      text: '정확 Infinite Elite2의 DOR 개별 착화 리뷰는 이번 범위에서 확인하지 못했습니다. 다른 세대의 경험을 대신 쓰지 않습니다.',
    },
  ],
  similarShoes: [
    'asics-gel-nimbus-28',
    'new-balance-1080-v15',
    'saucony-triumph-24',
  ],
  purchaseLinks: [
    {
      store: '언더아머 공식몰',
      url: 'https://www.underarmour.co.kr/ko-kr/p/%EC%8B%A0%EB%B0%9C/ua_%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8A%B8_%EC%97%98%EB%A6%AC%ED%8A%B8_2/3028169.html',
      price: 139300,
      isOfficial: true,
    },
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 3028169',
        url: 'https://www.underarmour.co.kr/ko-kr/p/신발/ua_인피니트_엘리트_2/3028169.html',
        note: 'KR PDP cached original title/price/DNA/product information and static size labels, not live variant API.; 현재 선택 재고·실시간 가격 미확인.',
      },
      {
        label: '한국 공식 3028178',
        url: 'https://www.underarmour.co.kr/ko-kr/p/신발/ua_인피니트_엘리트_2/3028178.html',
        note: 'KR PDP cached original title/price/DNA/product information and static size labels, not live variant API.; 현재 선택 재고·실시간 가격 미확인.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://runrepeat.com/under-armour-infinite-elite-2',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 288g·40.1/33.1mm·7mm. RR 본문 72.6%의 위치를 확인하지 못해 힐 리턴은 미확인으로 두고 전족 74.8%만 표시했습니다. 구방식 연기 4/5는 BR이 아닙니다. 외부 힐 바닥 103.9mm는 내부 너비가 아니며 600km 수명·현재 와이드 부재를 보장하지 않습니다.',
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
