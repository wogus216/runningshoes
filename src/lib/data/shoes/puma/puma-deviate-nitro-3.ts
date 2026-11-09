import type { Shoe } from '@/types/shoe';

// 원문 재확인:2026-11-09. 명시한 범위와 한계는 verification 참조.
export const shoe: Shoe = {
  id: 'puma-deviate-nitro-3',
  slug: 'puma-deviate-nitro-3',
  brand: 'Puma',
  name: '디비에이트 나이트로 3',
  image: '/images/shoes/puma/deviate_NITRO3.webp',
  images: [
    '/images/shoes/puma/deviatenitro3/side.webp',
    '/images/shoes/puma/deviatenitro3/front.webp',
    '/images/shoes/puma/deviatenitro3/back.webp',
    '/images/shoes/puma/deviatenitro3/top.webp',
    '/images/shoes/puma/deviatenitro3/outsole.webp',
  ],
  category: '쿠션화',
  rating: 4,
  description: 'NITROFOAM 이중 밀도 · 카본 PWRPLATE 구조의 디비에이트 나이트로 3. 실험실 268g·힐/전족부 37.4/27.3mm. 한국 현재 정가 미확인.',
  oneliner: '268g 실험실 무게 · NITROFOAM 이중 밀도 · 카본 PWRPLATE',
  editorComment: '2026-11-09 원문 재확인. 한국 일반형309707_22 공식 원문캐시는219,000원 정가를 보였지만 현재live는 이용 불가여서 현행 일반형 정가·폭·재고는 미확인입니다. 남성 에키덴313422_01은 정가229,000원·판매114,500원·265~290mm 선택 가능을 확인했으며 이 가격을 일반형 정가로 대입하지 않습니다. 여성 에키덴 현재 정보·한국 폭코드는 미확인입니다. 한국 에키덴 공시265g(UK8)·39/29mm·10mm. DOR소개265g(남성US9)·39/29mm·10mm와 RR268g·37.4/27.3mm·10.1mm는 같은SKU·검체로 확인한 것이 아닙니다. RR은 상층NITROElite·하층NITRO라고 설명하고 DOR는 상층 정확 명칭을 확인하지 못했으며 한국 제조사 본문은NITRO명칭만 확인했습니다. 주폼37.7AC·보조37.1AC를 구분합니다. 개인의 적은 마모와 RR Dremel1.5mm를450km수명으로 환산하지 않습니다. DOR의 Matt(남성US10)은 길이가 맞지만 전반적으로 좁고 낮은 볼륨, 약간 신축성 있는 니트메쉬와 거싯혀 고정을 언급했습니다. 유연한 힐카운터는 편했지만 양말 없이 신을 때 내측 로고에 열점이 생겼고 중족 갭에 자갈이 끼었다고 적었습니다. 카본 강성에도 앞쪽 로커 전환은 매끄럽지만 빠른 변속은 둔했다고 느꼈습니다. 한국 와이드 SKU·문자 폭코드는 미확인입니다. RR 내부 최광폭91.5mm·엄지69.7mm·높이24.6mm 때문에 모든 한국 러너에게 반 사이즈 업을 권하지 않습니다. 자체 착화 후기가 아닌 원문 기반 에디터 분석입니다.',
  tags: [
    '슈퍼트레이너',
    'PWRPLATE',
    '템포 러닝',
  ],
  specs: {
    weight: 268,
    cushioning: 8,
    responsiveness: 7,
    stability: 7,
    drop: 10.1,
  },
  biomechanics: {
    stackHeight: {
      heel: 37.4,
      forefoot: 27.3,
    },
    drop: 10.1,
    carbonPlate: true,
    plateType: 'carbon PWRPLATE',
    midsoleType: 'NITROFOAM 이중 밀도 · 카본 PWRPLATE',
  },
  koreanFootFit: {
    toBoxWidth: 'narrow',
    winterCompatibility: 'good',
    summerCompatibility: 'excellent',
  },
  targetUsers: {
    recommended: [
      'NITRO 이중폼과 PWRPLATE 전환을 시착 비교하려는 러너',
      '좁고 낮은 볼륨에서 압박·혀 고정을 확인하려는 러너',
    ],
    notRecommended: [
      '직접 착화에서 내측 열점·앞코 압박이 생기는 경우',
      '중족부 갭·전환이 주행 환경과 맞지 않는 경우',
    ],
  },
  features: [
    'NITROFOAM 이중 밀도 · 카본 PWRPLATE',
    '268g · 힐/전족부 37.4/27.3mm (RunRepeat)',
    '힐/전족부 SA 132/100 · 에너지 리턴 60.7/63.4% (RunRepeat). RR은 상층NITROElite·하층NITRO라고 설명하고 DOR는 상층 정확 명칭을 확인하지 못했으며 한국 제조사 본문은NITRO명칭만 확인했습니다. 주폼37.7AC·보조37.1AC를 구분합니다. 개인의 적은 마모와 RR Dremel1.5mm를450km수명으로 환산하지 않습니다.',
    '한국 와이드 SKU·문자 폭코드는 미확인입니다. RR 내부 최광폭91.5mm·엄지69.7mm·높이24.6mm 때문에 모든 한국 러너에게 반 사이즈 업을 권하지 않습니다.',
  ],
  priceAnalysis: {
    valueRating: 7,
    priceTier: 'high',
    alternatives: [
      'nike-vomero-18',
      'asics-superblast-2',
      'hoka-mach-x-3',
    ],
  },
  reviews: [
    {
      userType: '원문 기반 에디터 분석',
      source: 'editor',
      sourceUrl: 'https://runrepeat.com/puma-deviate-nitro-3',
      text: '268g과 SA 132/100·에너지 리턴 60.7/63.4%는 해외 실험실 검체의 값이며 기록 향상률·임상 효과가 아닙니다. RR은 상층NITROElite·하층NITRO라고 설명하고 DOR는 상층 정확 명칭을 확인하지 못했으며 한국 제조사 본문은NITRO명칭만 확인했습니다. 주폼37.7AC·보조37.1AC를 구분합니다. 개인의 적은 마모와 RR Dremel1.5mm를450km수명으로 환산하지 않습니다. 한국 와이드 SKU·문자 폭코드는 미확인입니다. RR 내부 최광폭91.5mm·엄지69.7mm·높이24.6mm 때문에 모든 한국 러너에게 반 사이즈 업을 권하지 않습니다.',
    },
    {
      userType: '외부 착화 의견 요약 · Doctors of Running',
      source: 'editor',
      sourceUrl: 'https://www.doctorsofrunning.com/puma-deviate-nitro-3-review-2024/',
      text: 'DOR의 Matt(남성US10)은 길이가 맞지만 전반적으로 좁고 낮은 볼륨, 약간 신축성 있는 니트메쉬와 거싯혀 고정을 언급했습니다. 유연한 힐카운터는 편했지만 양말 없이 신을 때 내측 로고에 열점이 생겼고 중족 갭에 자갈이 끼었다고 적었습니다. 카본 강성에도 앞쪽 로커 전환은 매끄럽지만 빠른 변속은 둔했다고 느꼈습니다.',
    },
  ],
  detailedSpecs: {
    weight: '268g (RunRepeat 공시 검체 정책:남성US9). 한국 에키덴 공시265g(UK8)·39/29mm·10mm. DOR소개265g(남성US9)·39/29mm·10mm와 RR268g·37.4/27.3mm·10.1mm는 같은SKU·검체로 확인한 것이 아닙니다.',
    stackHeight: '37.4/27.3mm (RunRepeat 힐/전족부 실측)',
    drop: '10.1mm (RunRepeat 실측). 출처별 공시 조건은 무게 항목에 구분.',
    midsole: 'NITROFOAM 이중 밀도 · 카본 PWRPLATE · 37.7 AC(Asker C) · 힐/전족부 SA 132/100 · 에너지 리턴 60.7/63.4%. RR은 상층NITROElite·하층NITRO라고 설명하고 DOR는 상층 정확 명칭을 확인하지 못했으며 한국 제조사 본문은NITRO명칭만 확인했습니다. 주폼37.7AC·보조37.1AC를 구분합니다. 개인의 적은 마모와 RR Dremel1.5mm를450km수명으로 환산하지 않습니다.',
    plate: '카본 PWRPLATE. 상층을 NITRO Elite로 명명한 RR과 미확인이라고 적은 DOR을 구분합니다.',
    width: 'RunRepeat 내부 최광폭 91.5mm / 엄지 부위 69.7mm / 엄지 높이 24.6mm. 한국 와이드 SKU·문자 폭코드는 미확인입니다. RR 내부 최광폭91.5mm·엄지69.7mm·높이24.6mm 때문에 모든 한국 러너에게 반 사이즈 업을 권하지 않습니다.',
    durability: '검증된 공통 수명km 미확인. 짧은 착화·마모 깊이를 수명km로 환산하지 않습니다.',
    price: '한국 일반형309707_22 공식 원문캐시는219,000원 정가를 보였지만 현재live는 이용 불가여서 현행 일반형 정가·폭·재고는 미확인입니다. 남성 에키덴313422_01은 정가229,000원·판매114,500원·265~290mm 선택 가능을 확인했으며 이 가격을 일반형 정가로 대입하지 않습니다. 여성 에키덴 현재 정보·한국 폭코드는 미확인입니다.',
  },
  similarShoes: [
    'nike-vomero-18',
    'asics-superblast-2',
    'hoka-mach-x-3',
    'saucony-endorphin-speed-5',
  ],
  relatedPosts: [
    {
      slug: 'running-shoe-plate-guide-2026',
      title: '플레이트 완전 해설',
    },
  ],
  purchaseLinks: [
    {
      store: '네이버',
      url: 'https://naver.me/IFEACRXp',
    },
    {
      store: '쿠팡',
      url: 'https://link.coupang.com/a/g5Y8o2LKLc',
    },
  ],
  verification: {
    checkedAt: '2026-11-09',
    scope: '한국 확인SKU의 정가·폭, 해외 실험실 수치·구조·외부 착화 의견을 재확인했습니다. 제품 전체 검증 완료 표지가 아닙니다.',
    sources: [
      {
        label: '한국 공식 men category · null · 313422_01',
        url: 'https://kr.puma.com/kr/ko/pd/디비에이트-나이트로-3-에키덴-%3Cbr%3Edeviate-nitro-3-ekiden/313422.html?dwvar_313422_color=01',
        note: '한국 일반형309707_22 공식 원문캐시는219,000원 정가를 보였지만 현재live는 이용 불가여서 현행 일반형 정가·폭·재고는 미확인입니다. 남성 에키덴313422_01은 정가229,000원·판매114,500원·265~290mm 선택 가능을 확인했으며 이 가격을 일반형 정가로 대입하지 않습니다. 여성 에키덴 현재 정보·한국 폭코드는 미확인입니다.',
      },
      {
        label: '한국 공식 women · null · null',
        url: 'https://kr.puma.com/kr/ko/pd/디비에이트-나이트로-3-에키덴-우먼스-%3Cbr%3Edeviate-nitro-3-ekiden-wns/313423.html?dwvar_313423_color=01',
        note: '한국 일반형309707_22 공식 원문캐시는219,000원 정가를 보였지만 현재live는 이용 불가여서 현행 일반형 정가·폭·재고는 미확인입니다. 남성 에키덴313422_01은 정가229,000원·판매114,500원·265~290mm 선택 가능을 확인했으며 이 가격을 일반형 정가로 대입하지 않습니다. 여성 에키덴 현재 정보·한국 폭코드는 미확인입니다.',
      },
      {
        label: '한국 일반형 접근 확인 범위',
        url: 'https://kr.puma.com/kr/ko/pd/디비에이트-나이트로-3-%3Cbr%3Edeviate-nitro-3/309707.html?dwvar_309707_color=22&dwvar_309707_size=0210',
        note: '한국 일반형309707_22 공식 원문캐시는219,000원 정가를 보였지만 현재live는 이용 불가여서 현행 일반형 정가·폭·재고는 미확인입니다. 남성 에키덴313422_01은 정가229,000원·판매114,500원·265~290mm 선택 가능을 확인했으며 이 가격을 일반형 정가로 대입하지 않습니다. 여성 에키덴 현재 정보·한국 폭코드는 미확인입니다.',
      },
      {
        label: 'RunRepeat 디비에이트 나이트로 3',
        url: 'https://runrepeat.com/puma-deviate-nitro-3',
        note: '공시 검체 정책:남성US9. 개별 검체SKU·폭은 미확인. 268g · 37.4/27.3mm · 드롭10.1mm. SA 132/100 · ER 60.7/63.4%. RR은 상층NITROElite·하층NITRO라고 설명하고 DOR는 상층 정확 명칭을 확인하지 못했으며 한국 제조사 본문은NITRO명칭만 확인했습니다. 주폼37.7AC·보조37.1AC를 구분합니다. 개인의 적은 마모와 RR Dremel1.5mm를450km수명으로 환산하지 않습니다.',
      },
      {
        label: 'Doctors of Running 착화 리뷰',
        url: 'https://www.doctorsofrunning.com/puma-deviate-nitro-3-review-2024/',
        note: '한국 에키덴 공시265g(UK8)·39/29mm·10mm. DOR소개265g(남성US9)·39/29mm·10mm와 RR268g·37.4/27.3mm·10.1mm는 같은SKU·검체로 확인한 것이 아닙니다.',
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
