import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-10. 확인 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'asics-sonicblast-2',
  slug: 'asics-sonicblast-2',
  brand: 'Asics',
  name: '소닉블라스트 2',
  category: '쿠션화',
  rating: 4.5,
  image: '/images/shoes/asics/sonicblast2/side.webp',
  images: [
    '/images/shoes/asics/sonicblast2/side.webp',
    '/images/shoes/asics/sonicblast2/angle.webp',
    '/images/shoes/asics/sonicblast2/front.webp',
    '/images/shoes/asics/sonicblast2/back.webp',
    '/images/shoes/asics/sonicblast2/top.webp',
    '/images/shoes/asics/sonicblast2/outsole.webp',
  ],
  description: 'FF Turbo2 위층 · FF Blast Max 아래층 · 포크형 Pebax ASTROPLATE 구조의 소닉블라스트 2. RunRepeat 실험실 검체 230g·43.7/36.2mm. 한국 현재 정가 미확인.',
  oneliner: 'FF Turbo2 위층 · FF Blast Max 아래층 · 포크형 Pebax ASTROPLATE · 230g (RunRepeat 실험실 검체)',
  editorComment: '2026-11-10 원문 재확인. 한국 공식 캐시: Men 1011C244.400 폭 미확인 표시229,000원. 현재 가격·선택 재고·숫자 폭 규격은 미확인입니다. 일반 사이즈 환산표·공통2E/4E 내비게이션·장바구니 버튼을 정확 모델 재고나 폭 증거로 쓰지 않습니다. 한국 남성242g은 기준 사이즈 미공시입니다. DOR 소개242g(남성US9)/212g(여성US8)·남46/38mm·여45/37mm·8mm와 RR230g·43.7/36.2mm·7.5mm를 나눕니다. 소개를 DOR 실측이라고 잘못 부르지 않습니다. David와 Andrea의 이지 편안함·가이던스 차이를 모두의 최소 페이스로 합치지 않습니다. 리턴60.3/68.7%로 제조사 포드 주장을 입증·반박하지 않으며 한국 전체 와이드 없음·500km·모두의 감량 보장을 제거했습니다. DOR David(남성US9.5)는 높아진 앞발 볼륨·정사이즈·끈 조임과 일시 발등 압박, 좋아진 힐에도 이지강도에서 중족이 철퍽거린다고 적었습니다. Andrea(여성US9.5)는 이지·본인의 마라톤 강도가 편했지만 역치에서는 무겁고 잔디·불규칙 보도에서 포드가 불안정했습니다.20마일은 개인 관찰입니다. RR 내부 최광폭 97.4mm·엄지 71.3mm·높이 26.8mm입니다. 다른 위치인 외부 바닥 폭과 구분하고 실제 규격·양말에서 고정을 확인하세요. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '템포',
    '슈퍼트레이너',
    '고스택',
    'ASTROPLATE',
    '신상',
  ],
  specs: {
    weight: 230,
    cushioning: 10,
    responsiveness: 8,
    stability: 6,
    drop: 7.5,
  },
  biomechanics: {
    stackHeight: {
      heel: 43.7,
      forefoot: 36.2,
    },
    drop: 7.5,
    carbonPlate: false,
    plateType: 'Forked Pebax ASTROPLATE; not carbon',
    midsoleType: 'FF Turbo2 위층 · FF Blast Max 아래층 · 포크형 Pebax ASTROPLATE',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'excellent',
    summerCompatibility: 'excellent',
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
  priceAnalysis: {
    valueRating: 7,
    priceTier: 'premium',
    alternatives: [
      'asics-sonicblast',
      'asics-superblast-3',
      'new-balance-sc-rebel',
    ],
  },
  features: [
    'FF Turbo2 위층 · FF Blast Max 아래층 · 포크형 Pebax ASTROPLATE',
    '230g · 43.7/36.2mm · 드롭 7.5mm (RunRepeat 실험실 검체)',
    '정확2의 ASTROPLATE는 DOR Pebax·RR 비카본 설명입니다. 초대3/4 길이를2세대 길이로 대입하지 않습니다. 전족 폼 포드와 판을 구분합니다.',
    'RR 내부 최광폭 97.4mm·엄지 71.3mm·높이 26.8mm입니다. 다른 위치인 외부 바닥 폭과 구분하고 실제 규격·양말에서 고정을 확인하세요.',
  ],
  detailedSpecs: {
    weight: '230g (RunRepeat 실험실 검체). 한국 남성242g은 기준 사이즈 미공시입니다. DOR 소개242g(남성US9)/212g(여성US8)·남46/38mm·여45/37mm·8mm와 RR230g·43.7/36.2mm·7.5mm를 나눕니다. 소개를 DOR 실측이라고 잘못 부르지 않습니다.',
    stackHeight: '43.7/36.2mm (RunRepeat 실험실 검체, 힐/전족부). 출처별 다른 공시는 무게 항목 참조.',
    drop: '7.5mm (RunRepeat 실험실 검체). 한국 남성242g은 기준 사이즈 미공시입니다. DOR 소개242g(남성US9)/212g(여성US8)·남46/38mm·여45/37mm·8mm와 RR230g·43.7/36.2mm·7.5mm를 나눕니다. 소개를 DOR 실측이라고 잘못 부르지 않습니다.',
    midsole: 'FF Turbo2 위층 · FF Blast Max 아래층 · 포크형 Pebax ASTROPLATE. 주폼 31.1AC·보조 38.2AC, 힐/전족부 SA 157/141·에너지 리턴 60.3/68.7%. David와 Andrea의 이지 편안함·가이던스 차이를 모두의 최소 페이스로 합치지 않습니다. 리턴60.3/68.7%로 제조사 포드 주장을 입증·반박하지 않으며 한국 전체 와이드 없음·500km·모두의 감량 보장을 제거했습니다.',
    plate: '정확2의 ASTROPLATE는 DOR Pebax·RR 비카본 설명입니다. 초대3/4 길이를2세대 길이로 대입하지 않습니다. 전족 폼 포드와 판을 구분합니다.',
    width: 'RR 내부 최광폭 97.4mm·엄지 부위 71.3mm·높이 26.8mm. RR 내부 최광폭 97.4mm·엄지 71.3mm·높이 26.8mm입니다. 다른 위치인 외부 바닥 폭과 구분하고 실제 규격·양말에서 고정을 확인하세요.',
    durability: '검증된 공통 수명 km 미확인. 국소 마모·짧은 착화 후기를 주행 수명으로 환산하지 않습니다.',
    price: '한국 공식 캐시: Men 1011C244.400 폭 미확인 표시229,000원. 현재 가격·선택 재고·숫자 폭 규격은 미확인입니다. 일반 사이즈 환산표·공통2E/4E 내비게이션·장바구니 버튼을 정확 모델 재고나 폭 증거로 쓰지 않습니다.',
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://www.runrepeat.com/uk/asics-sonicblast-2',
      text: '한국 남성242g은 기준 사이즈 미공시입니다. DOR 소개242g(남성US9)/212g(여성US8)·남46/38mm·여45/37mm·8mm와 RR230g·43.7/36.2mm·7.5mm를 나눕니다. 소개를 DOR 실측이라고 잘못 부르지 않습니다. David와 Andrea의 이지 편안함·가이던스 차이를 모두의 최소 페이스로 합치지 않습니다. 리턴60.3/68.7%로 제조사 포드 주장을 입증·반박하지 않으며 한국 전체 와이드 없음·500km·모두의 감량 보장을 제거했습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/asics-sonicblast-2-review/',
      text: 'DOR David(남성US9.5)는 높아진 앞발 볼륨·정사이즈·끈 조임과 일시 발등 압박, 좋아진 힐에도 이지강도에서 중족이 철퍽거린다고 적었습니다. Andrea(여성US9.5)는 이지·본인의 마라톤 강도가 편했지만 역치에서는 무겁고 잔디·불규칙 보도에서 포드가 불안정했습니다.20마일은 개인 관찰입니다.',
    },
  ],
  similarShoes: [
    'asics-sonicblast',
    'asics-megablast',
    'new-balance-sc-rebel',
    'asics-superblast-3',
    'saucony-endorphin-speed-6',
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/IGsHD4kO',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5Ywh7e3Pg',
    },
  ],
  verification: {
    checkedAt: '2026-11-10',
    scope: '한국 상품 조건, 해외 실험실·제조사 공시와 외부 착화 의견의 확인 범위를 구분했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 1011C244.400',
        url: 'https://www.asics.co.kr/p/AKR_112630206-400',
        note: '캐시 today; Single price229000/total229000; no separateMSRP label in read original',
      },
      {
        label: 'RunRepeat 동세대 실험실 원문',
        url: 'https://www.runrepeat.com/uk/asics-sonicblast-2',
        note: '공시 일반 검체 정책은 남성 US9. 실제 검체 라벨·폭 미확인. 230g·43.7/36.2mm·7.5mm. David와 Andrea의 이지 편안함·가이던스 차이를 모두의 최소 페이스로 합치지 않습니다. 리턴60.3/68.7%로 제조사 포드 주장을 입증·반박하지 않으며 한국 전체 와이드 없음·500km·모두의 감량 보장을 제거했습니다.',
      },
      {
        label: 'Doctors of Running 동세대 원문',
        url: 'https://www.doctorsofrunning.com/asics-sonicblast-2-review/',
        note: '한국 남성242g은 기준 사이즈 미공시입니다. DOR 소개242g(남성US9)/212g(여성US8)·남46/38mm·여45/37mm·8mm와 RR230g·43.7/36.2mm·7.5mm를 나눕니다. 소개를 DOR 실측이라고 잘못 부르지 않습니다.',
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
