import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'hoka-cielo-x1',
  slug: 'hoka-cielo-x1',
  brand: 'Hoka',
  name: '씨엘로 X1',
  image: '/images/shoes/hoka/cielox1/side.webp',
  images: [
    '/images/shoes/hoka/cielox1/side.webp',
  ],
  category: '레이싱',
  description: '초대 2024 X1 이중 밀도 PEBA · 날개형 카본 · 강한 로커 구조의 씨엘로 X1. 실험실 249g·힐/전족부 39.8/30.3mm. 한국 현재 정가 미확인.',
  oneliner: '249g 실험실 무게 · 초대 2024 X1 이중 밀도 PEBA · 날개형 카본 · 강한 로커',
  editorComment: '2026-11-09 원문 재확인. 호카 코리아 공식 연결스토어의 현재 씨엘로 X1검색은 후속 2.0 두 상품만 확인돼 초대 2024 X1의현재 정가·성별·폭·SKU·재고는미확인입니다. 2.0의 329,000원·할인가를원형에 대입하지 않고,미노출을 단종 확정으로 해석하지 않습니다. 원형 RR 실측 249g·39.8/30.3mm·9.5mm 입니다. DOR 소개 264g(남성 US10)·39/32mm 와 210g(여성 US8)·37/30mm,드롭 7mm 는조건을 구분합니다. 기존 2.0의 208g·38.8/28.1mm·10.7mm 를원형 상세에 썼던 오류를 정정합니다. 초대 RR 경도 15.5는 HA 구방식이며 AC 는미확인입니다. HA 를다른 두 모델의 AC 와비교·환산하지 않습니다. 원문 갱신일 2025-01-02이지만후속 추가 시험의 항목별 날짜는 미공시입니다. 기존 2.0수치 혼용·수명 300km·무릎보호·후반 페이스 보장을 제거했습니다. DOR Matt(남성 US10)은 길이가 맞지만 낮은 볼륨과 엄지·다섯째발가락 윗면 압박을느꼈습니다. David(남성 US9.5)는앞쪽에 약간 여유와 좋은 고정을 느꼈으나 경사진 길·가쪽 회전에서 컷아웃 방향으로 기우는 순간을 보고했습니다. Andrea(여성 US9.5)는앞쪽이 편했고 David와같은 불안정을 겪지 않았다고 적었습니다. 개인의 핏·굴림 차이를 모든 러너에게 일반화하지 않습니다. 한국 현재 와이드 SKU 는미확인입니다. 초대 RR 내부 최광폭 93.0mm·엄지 70.9mm·높이 27.9mm 를 2.0의 71.3mm 로 대체하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '레이싱',
    '카본',
    'PEBA',
    '맥시멀',
    '풀마라톤',
  ],
  specs: {
    weight: 249,
    cushioning: 10,
    responsiveness: 10,
    stability: 5,
    drop: 9.5,
  },
  biomechanics: {
    stackHeight: {
      heel: 39.8,
      forefoot: 30.3,
    },
    drop: 9.5,
    carbonPlate: true,
    plateType: 'original 2024 winged carbon plate',
    midsoleType: '초대 2024 X1 이중 밀도 PEBA · 날개형 카본 · 강한 로커',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
  },
  targetUsers: {
    recommended: [
      '초대 X1의날개형카본·강한로커를비교하려는 러너',
      '매물의초대/2.0세대와 정확한 규격을 확인할 수 있는 구매자',
    ],
    notRecommended: [
      '정확한 세대와 품번이 혼용된 매물',
      '실제 착화에서앞코 윗면압박이나 경사로 전환이 불편한 경우',
    ],
  },
  features: [
    '초대 2024 X1 이중 밀도 PEBA · 날개형 카본 · 강한 로커',
    '249g · 힐/전족부 39.8/30.3mm (RunRepeat)',
    '힐/전족부 SA 147/119 · 에너지 리턴 74.4/75.3% (RunRepeat). 초대 RR 경도 15.5는 HA 구방식이며 AC 는미확인입니다. HA 를다른 두 모델의 AC 와비교·환산하지 않습니다. 원문 갱신일 2025-01-02이지만후속 추가 시험의 항목별 날짜는 미공시입니다. 기존 2.0수치 혼용·수명 300km·무릎보호·후반 페이스 보장을 제거했습니다.',
    '한국 현재 와이드 SKU 는미확인입니다. 초대 RR 내부 최광폭 93.0mm·엄지 70.9mm·높이 27.9mm 를 2.0의 71.3mm 로 대체하지 않습니다.',
  ],
  priceAnalysis: {
    priceTier: 'super-premium',
    alternatives: [
      'nike-vaporfly-4',
      'asics-metaspeed-sky-plus',
      'hoka-rocket-x-3',
    ],
  },
  detailedSpecs: {
    weight: '249g (RunRepeat 공시 검체 정책:남성 US9). 원형 RR 실측 249g·39.8/30.3mm·9.5mm 입니다. DOR 소개 264g(남성 US10)·39/32mm 와 210g(여성 US8)·37/30mm,드롭 7mm 는조건을 구분합니다. 기존 2.0의 208g·38.8/28.1mm·10.7mm 를원형 상세에 썼던 오류를 정정합니다.',
    stackHeight: '39.8/30.3mm (RunRepeat 힐/전족부 실측)',
    drop: '9.5mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: '초대 2024 X1 이중 밀도 PEBA · 날개형 카본 · 강한 로커 · 15.5 HA (구방식) · 힐/전족부 SA 147/119 · 에너지 리턴 74.4/75.3%. 초대 RR 경도 15.5는 HA 구방식이며 AC 는미확인입니다. HA 를다른 두 모델의 AC 와비교·환산하지 않습니다. 원문 갱신일 2025-01-02이지만후속 추가 시험의 항목별 날짜는 미공시입니다. 기존 2.0수치 혼용·수명 300km·무릎보호·후반 페이스 보장을 제거했습니다.',
    plate: '원형 2024 X1의 날개형 카본.2.0·3.0의무게·폼·스택을대입하지않습니다.',
    width: 'RunRepeat 내부 최광폭 93mm / 엄지 부위 70.9mm / 엄지 높이 27.9mm. 한국 현재 와이드 SKU 는미확인입니다. 초대 RR 내부 최광폭 93.0mm·엄지 70.9mm·높이 27.9mm 를 2.0의 71.3mm 로 대체하지 않습니다.',
    durability: '검증된 공통 수명 km 미확인. 짧은 착화·마모 깊이를 수명 km로 환산하지 않습니다.',
    price: '호카 코리아 공식 연결스토어의 현재 씨엘로 X1검색은 후속 2.0 두 상품만 확인돼 초대 2024 X1의현재 정가·성별·폭·SKU·재고는미확인입니다. 2.0의 329,000원·할인가를원형에 대입하지 않고,미노출을 단종 확정으로 해석하지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/hoka-cielo-x1',
      text: '249g 과 SA 147/119·에너지 리턴 74.4/75.3% 는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. 초대 RR 경도 15.5는 HA 구방식이며 AC 는미확인입니다. HA 를다른 두 모델의 AC 와비교·환산하지 않습니다. 원문 갱신일 2025-01-02이지만후속 추가 시험의 항목별 날짜는 미공시입니다. 기존 2.0수치 혼용·수명 300km·무릎보호·후반 페이스 보장을 제거했습니다. 한국 현재 와이드 SKU 는미확인입니다. 초대 RR 내부 최광폭 93.0mm·엄지 70.9mm·높이 27.9mm 를 2.0의 71.3mm 로 대체하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/hoka-cielo-x1-review/',
      text: 'DOR Matt(남성 US10)은 길이가 맞지만 낮은 볼륨과 엄지·다섯째발가락 윗면 압박을느꼈습니다. David(남성 US9.5)는앞쪽에 약간 여유와 좋은 고정을 느꼈으나 경사진 길·가쪽 회전에서 컷아웃 방향으로 기우는 순간을 보고했습니다. Andrea(여성 US9.5)는앞쪽이 편했고 David와같은 불안정을 겪지 않았다고 적었습니다. 개인의 핏·굴림 차이를 모든 러너에게 일반화하지 않습니다.',
    },
  ],
  similarShoes: [
    'nike-vaporfly-4',
    'asics-metaspeed-sky-plus',
    'hoka-rocket-x-3',
    'saucony-endorphin-pro-5',
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
      url: 'https://naver.me/51u1uP82',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5YC50ZG1I',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인 SKU 의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '호카 코리아 공식 스토어 연결',
        url: 'https://linktr.ee/hoka_korea',
        note: '이번 live에서 brand.naver.com/hoka연결을재확인했습니다.',
      },
      {
        label: '한국 공식 연결 스토어 · 씨엘로 X1 검색',
        url: 'https://brand.naver.com/hoka/search?q=%EC%94%A8%EC%97%98%EB%A1%9C%20X1',
        note: '호카 코리아 공식 연결스토어의 현재 씨엘로 X1검색은 후속 2.0 두 상품만 확인돼 초대 2024 X1의현재 정가·성별·폭·SKU·재고는미확인입니다. 2.0의 329,000원·할인가를원형에 대입하지 않고,미노출을 단종 확정으로 해석하지 않습니다.',
      },
      {
        label: 'RunRepeat 씨엘로 X1',
        url: 'https://runrepeat.com/hoka-cielo-x1',
        note: '공시 검체 정책:남성 US9. 개별 검체 SKU·폭은 미확인. 249g · 39.8/30.3mm · 드롭 9.5mm. SA 147/119 · ER 74.4/75.3%. 초대 RR 경도 15.5는 HA 구방식이며 AC 는미확인입니다. HA 를다른 두 모델의 AC 와비교·환산하지 않습니다. 원문 갱신일 2025-01-02이지만후속 추가 시험의 항목별 날짜는 미공시입니다. 기존 2.0수치 혼용·수명 300km·무릎보호·후반 페이스 보장을 제거했습니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/hoka-cielo-x1-review/',
        note: '원형 RR 실측 249g·39.8/30.3mm·9.5mm 입니다. DOR 소개 264g(남성 US10)·39/32mm 와 210g(여성 US8)·37/30mm,드롭 7mm 는조건을 구분합니다. 기존 2.0의 208g·38.8/28.1mm·10.7mm 를원형 상세에 썼던 오류를 정정합니다.',
      },
      {
        label: 'RunRepeat 측정법',
        url: 'https://runrepeat.com/testing-methodology',
        note: '내부 최광폭·엄지 너비·외부 플랫폼 폭은 다른 값입니다. AC 와 HA 는 직접 비교하지 않습니다. 시점·측정법 버전의 차이를 구분하세요.',
      },
      {
        label: '초대2024 공식 제품 사진 · 1147910-CSSL',
        url: 'https://dms.deckers.com/hoka/image/upload/1147910-CSSL_1.png',
        note: '2026-11-10 공식 CDN 원본과 HOKA SS24 제품 카탈로그 대조. 기존 3.0 사진1171927-AYL을 초대 사진으로 교체. 다른 기존 갤러리는 세대 미확인으로 노출하지 않음.',
      },
      {
        label: 'HOKA 제조사 초대2024 발표',
        url: 'https://www.prnewswire.com/news-releases/hoka-announces-launch-of-the-cielo-x1-a-pinnacle-expression-of-pure-race-speed-302050483.html',
        note: 'HOKA 발행 2024-02-01 초대 발표. 후속2.0·3.0 구분.',
      },
    ],
    limitations: [
      '질환 예방·치료 효과, 공통 최적 페이스와 수명 km는 확인하지 못해 관련 등급·수명·km당 비용을 비웁니다.',
      '에디터 평점·1~10점·발볼 및 계절 적합성 분류는 실험실 단위나 임상 효과가 아닙니다.',
      '판매·재고는 확인한 SKU·성별·폭·시점에만 적용합니다. 미확인을 미판매·단종·미출시로 해석하지 않습니다.',
    ],
  },
};
