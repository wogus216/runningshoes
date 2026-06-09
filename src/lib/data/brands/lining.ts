import type { Brand } from '@/types/brand';

export const liningBrand: Brand = {
  id: 'li-ning',
  name: 'Li-Ning',
  nameKo: '라이닝',
  tagline: 'Anything is Possible',
  description:
    '체조 국가대표 리닝(李宁)이 1990년 창립한 중국 최대 스포츠 브랜드입니다. 최근 Boom 계열 PEBA 폼과 카본·유리섬유 플레이트를 앞세운 러닝화로 글로벌 러닝 시장에서 가성비 대안으로 주목받고 있습니다. 적토마(Red Hare)·비전(Feidian) 라인을 통해 데일리 트레이너부터 풀카본 레이싱화까지 폭넓게 운영합니다.',
  founded: 1990,
  headquarters: '중국 베이징',
  website: 'https://www.lining.com',
  technologies: [
    {
      id: 'li-ning-boom',
      name: 'Boom',
      nameKo: '붐 폼',
      category: 'midsole',
      description:
        'PEBA 기반의 펠릿화 슈퍼크리티컬 폼으로, 가벼우면서 높은 에너지 리턴을 노린 라이닝의 핵심 미드솔입니다.',
      benefits: [
        '낮은 무게 대비 높은 반발',
        '장거리에서도 비교적 유지되는 쿠셔닝',
        '경쟁 PEBA 폼 대비 저렴한 가격대',
      ],
      scienceExplanation:
        'PEBA(폴리에테르 블록 아마이드)를 초임계 발포해 펠릿 형태로 성형한 폼입니다. 나일론·EVA 기반 폼보다 밀도 대비 에너지 반환이 높고 가벼워, 슈퍼트레이너·레이싱화 미드솔에 사용됩니다.',
      performanceRating: 8,
      usedInShoes: ['li-ning-red-hare-9-ultra', 'li-ning-red-hare-9-pro'],
    },
    {
      id: 'li-ning-super-boom-capsule',
      name: 'Super Boom Capsule',
      nameKo: '슈퍼 붐 캡슐',
      category: 'cushioning',
      description:
        '미드솔에 삽입한 고반발 폼 캡슐로, 제조사는 95% 에너지 리턴을 주장합니다.',
      benefits: [
        '압축-복원 방식의 강한 바운스',
        '착지 충격 흡수',
        '맥스쿠션 스택과 결합 시 푹신한 라이드',
      ],
      scienceExplanation:
        '나이키 줌에어가 공기 주머니로 에너지를 저장·반환하는 것과 유사하게, Super Boom은 공기 대신 고체 고반발 폼 슬래브를 미드솔에 내장해 압축 시 저장한 에너지를 복원합니다. 다만 95% 에너지 리턴은 제조사 자체 측정치로, 독립 랩 검증은 아직 없습니다.',
      performanceRating: 7,
      usedInShoes: ['li-ning-red-hare-9-ultra'],
    },
    {
      id: 'li-ning-wing-fiber',
      name: 'Wing Fiber',
      nameKo: '윙 파이버',
      category: 'plate',
      description:
        '미드풋에 삽입한 날개형 유리섬유 안티토션 플레이트로, 추진보다 비틀림 제어가 목적입니다.',
      benefits: [
        '미드풋 비틀림(토션) 억제',
        '높은 스택에서의 안정성 보조',
        '카본 대비 부드러운 전환',
      ],
      scienceExplanation:
        '풀카본 추진 플레이트와 달리 미드풋에만 들어가는 유리섬유 플레이트로, 발 전체를 굴려주는 롤링 추진이 아니라 미드솔의 비틀림을 잡아 안정성을 보조합니다. 해외 실측 리뷰는 "주행 중 플레이트 반발이 거의 감지되지 않는다"고 평가합니다.',
      performanceRating: 6,
      usedInShoes: ['li-ning-red-hare-9-ultra'],
    },
  ],
};
