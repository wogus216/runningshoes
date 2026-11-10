import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'saucony-paramount-max',
  slug: 'saucony-paramount-max',
  brand: 'Saucony',
  name: '파라마운트 맥스',
  image: '/images/shoes/saucony/paramountmax/side.jpg',
  images: [
    '/images/shoes/saucony/paramountmax/side.jpg',
  ],
  category: '쿠션화',
  description: 'IncrediRUN · 플레이트 없음 · 두꺼운 풋베드 구조의 파라마운트 맥스. RunRepeat 실험실 검체 272g·42.1/36.4mm. 한국 현재 정가 미확인.',
  oneliner: 'IncrediRUN · 플레이트 없음 · 두꺼운 풋베드 · 272g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 한국 공식 캐시: Men S101162-1010 M(일반) 표시259,000원; Men S101162-1009 M(일반) 표시259,000원; Women S101168-1008 M(일반) 표시259,000원; Women S101168-1010 M(일반) 표시259,000원. 현재 가격·선택 재고·숫자 폭 규격은 미확인입니다. 일반 사이즈 환산표·공통2E/4E 내비게이션·장바구니 버튼을 정확 모델 재고나 폭 증거로 쓰지 않습니다. DOR 소개302g(남성US9)/250g(여성US8)·43/37mm·6mm와 Matt 실제US10 286g, RR272g·42.1/36.4mm·5.7mm를 나눕니다. RR 재전재 남성272g도 소개302g과 별도입니다. Matt의 넉넉한 앞발 체감과 RR 엄지70.4mm·높이26.3mm는 다릅니다. 두 테스터 안정감 상충을 지워 모두에게 가장 푹신·안정이라고 보장하지 않습니다.1/5 구방식 통기는BR이 아니며550km·인솔교체의 치료 효과·한국 와이드 부재를 제거했습니다. DOR Matt(남성US10·실제286g)는 넓고 둥근 앞발이지만 낮은 볼륨·오른쪽 힐록 필요와 초기 칼라 자극, 부드러운 바운스·이지롱런과 stable-neutral 체감을 적었습니다. 그러나 같은 글 편집 주석은 Andrea도 시험했고 부드럽고 예측 어려운 바운스에서 큰 안정감 문제를 겪었다고 명시합니다. Andrea 사이즈·별도핏 상세는 미확인입니다. RR 내부 최광폭 97.5mm·엄지 70.4mm·높이 26.3mm입니다. 다른 위치인 외부 바닥 폭과 구분하고 실제 규격·양말에서 고정을 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '쿠션화',
    '맥스쿠션',
    'incrediRUN',
    '회복주',
  ],
  specs: {
    weight: 272,
    cushioning: 10,
    responsiveness: 10,
    stability: 6,
    drop: 5.7,
  },
  biomechanics: {
    stackHeight: {
      heel: 42.1,
      forefoot: 36.4,
    },
    drop: 5.7,
    carbonPlate: false,
    plateType: null,
    midsoleType: 'IncrediRUN · 플레이트 없음 · 두꺼운 풋베드',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
  },
  priceAnalysis: {
    priceTier: 'premium',
    alternatives: [
      'saucony-triumph-24',
      'saucony-hurricane-26',
      'saucony-endorphin-trainer',
    ],
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
    'IncrediRUN · 플레이트 없음 · 두꺼운 풋베드',
    '272g · 42.1/36.4mm · 드롭 5.7mm (RunRepeat 실험실 검체)',
    'RR은 TPEE IncrediRUN·플레이트 없음과 두꺼운 같은 폼 풋베드를 설명합니다. 외부 바닥129.7/108.9mm를 내부 발볼로 바꾸지 않습니다.',
    'RR 내부 최광폭 97.5mm·엄지 70.4mm·높이 26.3mm입니다. 다른 위치인 외부 바닥 폭과 구분하고 실제 규격·양말에서 고정을 확인하세요.',
  ],
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://www.runrepeat.com/saucony-paramount-max',
      text: 'DOR 소개302g(남성US9)/250g(여성US8)·43/37mm·6mm와 Matt 실제US10 286g, RR272g·42.1/36.4mm·5.7mm를 나눕니다. RR 재전재 남성272g도 소개302g과 별도입니다. Matt의 넉넉한 앞발 체감과 RR 엄지70.4mm·높이26.3mm는 다릅니다. 두 테스터 안정감 상충을 지워 모두에게 가장 푹신·안정이라고 보장하지 않습니다.1/5 구방식 통기는BR이 아니며550km·인솔교체의 치료 효과·한국 와이드 부재를 제거했습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/saucony-paramount-max-review-2026/',
      text: 'DOR Matt(남성US10·실제286g)는 넓고 둥근 앞발이지만 낮은 볼륨·오른쪽 힐록 필요와 초기 칼라 자극, 부드러운 바운스·이지롱런과 stable-neutral 체감을 적었습니다. 그러나 같은 글 편집 주석은 Andrea도 시험했고 부드럽고 예측 어려운 바운스에서 큰 안정감 문제를 겪었다고 명시합니다. Andrea 사이즈·별도핏 상세는 미확인입니다.',
    },
  ],
  detailedSpecs: {
    weight: '272g (RunRepeat 실험실 검체). DOR 소개302g(남성US9)/250g(여성US8)·43/37mm·6mm와 Matt 실제US10 286g, RR272g·42.1/36.4mm·5.7mm를 나눕니다. RR 재전재 남성272g도 소개302g과 별도입니다.',
    stackHeight: '42.1/36.4mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '5.7mm (RunRepeat 실험실 검체). DOR 소개302g(남성US9)/250g(여성US8)·43/37mm·6mm와 Matt 실제US10 286g, RR272g·42.1/36.4mm·5.7mm를 나눕니다. RR 재전재 남성272g도 소개302g과 별도입니다.',
    midsole: 'IncrediRUN · 플레이트 없음 · 두꺼운 풋베드. 주폼 28.3AC, 힐/전족부 SA 165/147·에너지 리턴 72.7/80.3%. Matt의 넉넉한 앞발 체감과 RR 엄지70.4mm·높이26.3mm는 다릅니다. 두 테스터 안정감 상충을 지워 모두에게 가장 푹신·안정이라고 보장하지 않습니다.1/5 구방식 통기는BR이 아니며550km·인솔교체의 치료 효과·한국 와이드 부재를 제거했습니다.',
    plate: 'RR은 TPEE IncrediRUN·플레이트 없음과 두꺼운 같은 폼 풋베드를 설명합니다. 외부 바닥129.7/108.9mm를 내부 발볼로 바꾸지 않습니다.',
    width: 'RR 내부 최광폭 97.5mm·엄지 부위 70.4mm·높이 26.3mm. RR 내부 최광폭 97.5mm·엄지 70.4mm·높이 26.3mm입니다. 다른 위치인 외부 바닥 폭과 구분하고 실제 규격·양말에서 고정을 확인하세요.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식 캐시: Men S101162-1010 M(일반) 표시259,000원; Men S101162-1009 M(일반) 표시259,000원; Women S101168-1008 M(일반) 표시259,000원; Women S101168-1010 M(일반) 표시259,000원. 현재 가격·선택 재고·숫자 폭 규격은 미확인입니다. 일반 사이즈 환산표·공통2E/4E 내비게이션·장바구니 버튼을 정확 모델 재고나 폭 증거로 쓰지 않습니다.',
  },
  similarShoes: [
    'saucony-triumph-24',
    'saucony-hurricane-26',
    'saucony-endorphin-trainer',
  ],
  relatedPosts: [
    {
      slug: 'saucony-paramount-max-review',
      title: '파라마운트 맥스 후기 — 302g, 호카 본디 9와 같은 체급',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://search.shopping.naver.com/search/all?query=써코니+파라마운트+맥스',
    },
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 S101162-1010',
        url: 'https://saucony.co.kr/product/detail.html?cate_no=232&display_group=1&product_no=499',
        note: '캐시 6 days ago; M/W숫자규격·현재선택재고 미확인.',
      },
      {
        label: '한국 공식 S101162-1009',
        url: 'https://saucony.co.kr/product/new-남성-파라마운트-맥스-whitemulti/500/category/42/display/1/',
        note: '캐시 last week; M/W숫자규격·현재선택재고 미확인.',
      },
      {
        label: '한국 공식 S101168-1008',
        url: 'https://saucony.co.kr/product/detail.html?cate_no=233&display_group=1&product_no=497',
        note: '캐시 2 weeks ago; M/W숫자규격·현재선택재고 미확인.',
      },
      {
        label: '한국 공식 S101168-1010',
        url: 'https://saucony.co.kr/product/detail.html?cate_no=232&display_group=1&product_no=498',
        note: '캐시 3 weeks ago; M/W숫자규격·현재선택재고 미확인.',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://www.runrepeat.com/saucony-paramount-max',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 272g·42.1/36.4mm·5.7mm. Matt의 넉넉한 앞발 체감과 RR 엄지70.4mm·높이26.3mm는 다릅니다. 두 테스터 안정감 상충을 지워 모두에게 가장 푹신·안정이라고 보장하지 않습니다.1/5 구방식 통기는BR이 아니며550km·인솔교체의 치료 효과·한국 와이드 부재를 제거했습니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/saucony-paramount-max-review-2026/',
        note: 'DOR 소개302g(남성US9)/250g(여성US8)·43/37mm·6mm와 Matt 실제US10 286g, RR272g·42.1/36.4mm·5.7mm를 나눕니다. RR 재전재 남성272g도 소개302g과 별도입니다.',
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
