import type { Brand } from '@/types/brand';

// 2026-10-20 등록 — 연혁은 운영사 LS네트웍스 공식 연혁(lsnetworks.co.kr/html/info/history.asp),
// 운영사·본사 주소는 프로스펙스 공식몰 하단 사업자 정보, 기술 설명은 프로스펙스 공식몰 각 상품 상세의 Features 문구만 옮겼다.
// 폼 성분·경도·플레이트 형상 등 공식이 밝히지 않은 값은 적지 않는다. performanceRating 은 실측이 아닌 보수적 추정.
export const prospecsBrand: Brand = {
  id: 'prospecs',
  name: 'Prospecs',
  nameKo: '프로스펙스',
  tagline: 'Sports for All, All for Sports',
  description:
    '1981년 9월 국제상사가 개발한 국내 자체 스포츠 브랜드로, 2007년 LS그룹에 편입된 뒤 현재는 LS네트웍스가 운영합니다(LS네트웍스 공식 연혁). 공식몰은 러닝화를 레이싱화·안정화·쿠션화·트레일러닝화로 나눠 팔며, 입문 트레이너 스피드 러시, 카본 플레이트 트레이너 하이퍼 러시, PEBA 계열 카본 레이서 인피니트 러시, G-FRAME 안정화 듀플렉스가 퍼포먼스 러닝 라인의 축입니다. 상품마다 270mm 기준 무게·오프셋과 240·270mm 굽높이를 공식 사이즈 가이드에 공개하는 점이 특징이고, 독립 랩 테스트(RunRepeat 등) 자료는 아직 없습니다.',
  founded: 1981,
  headquarters: '경상남도 김해시 (운영사 LS네트웍스)',
  website: 'https://www.prospecs.com',
  technologies: [
    {
      id: 'prospecs-super-foam',
      name: 'Super Foam',
      nameKo: '슈퍼폼',
      category: 'midsole',
      description: '프로스펙스 러닝화 대부분에 쓰이는 주력 미드솔 폼입니다. 공식은 반발탄성·내구성·충격 흡수를 내세웁니다.',
      benefits: ['반발탄성과 내구성(공식)', '충격 흡수와 편안한 보행감(공식)', '모델에 따라 슈퍼폼 인솔로도 적용'],
      scienceExplanation:
        '프로스펙스는 슈퍼폼을 스피드 러시 3에서는 "뛰어난 반발탄성과 내구성으로 탄탄한 추진감", 하이퍼 러시 2 템포에서는 "뛰어난 충격 흡수와 편안한 보행감"으로 설명합니다. 듀플렉스 GF에서는 슈퍼라이트와 겹친 이중 물성 미드솔의 한 층으로 쓰이고, 하이퍼 러시 2 템포·인피니트 러시 Rev.에는 같은 이름의 인솔이 들어갑니다. 폼 성분과 경도는 공식에 공개돼 있지 않고, 반발·충격흡수를 잰 독립 랩 자료도 아직 없습니다.',
      performanceRating: 6,
      usedInShoes: ['prospecs-speed-rush-3', 'prospecs-hyper-rush-2-tempo', 'prospecs-infinite-rush-rev', 'prospecs-duplex-gf'],
    },
    {
      id: 'prospecs-super-foam-plus',
      name: 'Super Foam+',
      nameKo: '슈퍼폼+',
      category: 'midsole',
      description: '최상위 레이싱화 인피니트 러시 계열에 쓰는 PEBA 계열 폼입니다. 개정판 Rev.는 PEBAX 100%로 표기합니다.',
      benefits: ['PEBAX 100% 소재(Rev., 공식)', '에너지 리턴과 추진력 강조(공식)', '카본 플레이트와 조합'],
      scienceExplanation:
        '공식몰은 전작 인피니트 러시의 슈퍼폼+를 "고반발·고에너지 리턴 소재인 PEBA 소재 활용"으로, 개정판 인피니트 러시 Rev.의 슈퍼폼+를 "PEBAX 100%"로 적습니다. 다만 이 폼의 에너지 리턴·경도를 잰 독립 측정은 아직 없습니다.',
      performanceRating: 7,
      usedInShoes: ['prospecs-infinite-rush-rev'],
    },
    {
      id: 'prospecs-carbon-flash',
      name: 'Carbon Flash',
      nameKo: '카본 플래쉬',
      category: 'plate',
      description: '하이퍼 러시·인피니트 러시 계열에 들어가는 카본 플레이트의 공식 명칭입니다.',
      benefits: ['데일리 트레이너용 카본 플레이트(하이퍼 러시, 공식)', '인피니트 러시 계열은 더 넓은 광폭 플레이트(공식)', '추진력 강조(공식)'],
      scienceExplanation:
        '하이퍼 러시 2 템포에는 "데일리 트레이너에 최적화된 카본 플레이트"로, 전작 인피니트 러시에는 "하이퍼 러쉬 대비 30% 넓어진 플레이트"로 소개됩니다. 인피니트 러시 Rev.는 "광폭 카본 플레이트"로 적습니다. 플레이트의 길이·곡률·두께는 공식에 공개돼 있지 않습니다.',
      performanceRating: 6,
      usedInShoes: ['prospecs-hyper-rush-2-tempo', 'prospecs-infinite-rush-rev'],
    },
    {
      id: 'prospecs-g-frame',
      name: 'G-FRAME',
      nameKo: '지프레임',
      category: 'stability',
      description: '발을 지지하고 움직임을 바로잡도록 설계한 프로스펙스 고유의 안정화 구조입니다.',
      benefits: ['러닝 시 발의 흔들림 제어(공식)', '올바른 밸런스 유지(공식)', '이중 물성 미드솔과 조합(듀플렉스 GF)'],
      scienceExplanation:
        '공식몰은 G-FRAME을 "프로-스펙스의 고유 기술"로, 발을 지지하고 올바른 움직임을 유도하는 구조라고 설명합니다. 듀플렉스 GF에서는 슈퍼폼·슈퍼라이트 이중 물성 미드솔과 함께 쓰입니다. 구조물의 소재·형상과 지지 효과를 잰 독립 측정은 공개돼 있지 않습니다.',
      performanceRating: 6,
      usedInShoes: ['prospecs-duplex-gf'],
    },
  ],
};
