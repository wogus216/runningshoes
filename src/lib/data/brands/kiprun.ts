import type { Brand } from '@/types/brand';

export const kiprunBrand: Brand = {
  id: 'kiprun',
  name: 'Kiprun',
  nameKo: '킵런',
  tagline: 'Keep Running',
  description:
    '킵런은 프랑스 스포츠 유통사 데카트론(1976년 프랑스 설립)의 러닝 전문 브랜드입니다. 킵런 공식 소개에 따르면 2007년 뉴욕 마라톤 관중의 응원 구호 "KEEP RUNNING!"에서 이름을 따왔고, "고성능 러닝 장비의 대중화"를 내걸고 로드·트랙·트레일용 신발과 의류를 만듭니다. 한국에서는 데카트론 공식몰에서 판매하며, 자체 개발한 Fastech 미드솔 폼 계열과 카본 플레이트를 입문가 레이싱화부터 슈퍼슈즈까지 넓게 쓰는 것이 특징입니다.',
  headquarters: '프랑스 빌뇌브다스크(Villeneuve-d\'Ascq, 데카트론 본사)',
  website: 'https://www.kiprun.com',
  technologies: [
    {
      id: 'kiprun-fastech',
      name: 'Fastech+',
      nameKo: '패스테크+',
      category: 'midsole',
      description: '킵런의 VFOAM을 발전시킨 반응형 미드솔 폼 계열(Fastech·Fastech+·Fastech X) 중 경량·템포 지향 버전입니다.',
      benefits: ['높은 에너지 리턴', '경량', '추운 날 경화가 적음(RunRepeat 실측)'],
      scienceExplanation:
        '킵런 공식 설명에 따르면 Fastech는 VFOAM 기술의 고성능 진화형이고, Fastech+는 "더 가볍고 템포에 맞게" 설계한 단계입니다. 킵서밋 맥스의 Fastech+는 초임계 유체(SCF) 공정으로 100% ATPU를 자체 발포해 이전 킵서밋 대비 에너지 리턴을 21% 높였다고 밝혔고, 킵스톰 엘리트는 SCF ATPU 컵솔 안에 SCF PEBA 인서트를 넣은 구성입니다. RunRepeat 실측 에너지 리턴은 킵서밋 맥스 힐 71.7%·전족부 73.8%, 킵스톰 엘리트 힐 68.9%·전족부 74.8%입니다.',
      performanceRating: 8,
      usedInShoes: ['kiprun-kipstorm-elite', 'kiprun-kipsummit-max'],
    },
    {
      id: 'kiprun-carbon-plate',
      name: 'Carbon Plate',
      nameKo: '카본 플레이트',
      category: 'plate',
      description: '"카본 플레이트를 사치품이 아니게 하겠다"는 킵런의 카본 레이싱 라인에 들어가는 플레이트입니다.',
      benefits: ['추진력 보조', '전족부 안정성', '로커 지오메트리와 결합한 구름'],
      scienceExplanation:
        '킵런은 공식 기술 페이지에서 카본 플레이트의 대중화를 목표로 내걸고, 가장 저렴한 킵스톰 챌린저부터 최상위 킵스톰 라인까지 카본 플레이트를 넣고 있습니다. 킵스톰 엘리트는 카본 플레이트와 로커 형상을 결합했고, RunRepeat 30도 굽힘 강성 21.4N(평균 15.5N)으로 평균보다 단단합니다.',
      performanceRating: 7,
      usedInShoes: ['kiprun-kipstorm-elite'],
    },
  ],
};
