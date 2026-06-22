import type { Brand } from '@/types/brand';

export const salomonBrand: Brand = {
  id: 'salomon',
  name: 'Salomon',
  nameKo: '살로몬',
  tagline: 'Time to Play',
  description:
    '1947년 프랑스 알프스 안시(Annecy)에서 스키 엣지 제작소로 시작한 살로몬은, 1990년대 후반 트레일·하이킹 슈즈로 확장하며 2000년대 중반 트레일러닝 전문 브랜드로 자리 잡았습니다. 킬리안 조르넷과 협업한 S/Lab 라인으로 엘리트 트레일을 선도하며, 현재 트레일러닝화 세계 1위 브랜드로 꼽힙니다. 펄사·울트라 글라이드·S/Lab 등 용도·거리별로 세분화된 라인업과 Contagrip 아웃솔·quickLACE 시스템이 핵심 정체성입니다.',
  founded: 1947,
  headquarters: '프랑스 안시(Annecy)',
  website: 'https://salomon.co.kr',
  technologies: [
    {
      id: 'salomon-contagrip',
      name: 'Contagrip',
      nameKo: '콘타그립',
      category: 'outsole',
      description: '지형별로 고무 컴파운드와 러그 패턴을 달리 배합한 살로몬의 핵심 아웃솔 기술입니다.',
      benefits: ['지형별 최적 트랙션(진흙/올터레인/암반)', '내구성과 그립의 균형', '건조한 혼합 지형 접지력'],
      scienceExplanation:
        'Contagrip은 단일 고무가 아니라 용도별 컴파운드 라인업입니다. MA(Mud-Aggressive)는 깊은 러그로 진흙·눈에, TA(All-Terrain)는 다목적 내구성에, 표준형은 건조한 암반 트레일에 최적화됩니다. 러그 깊이·간격·고무 경도를 지형에 맞춰 조합해 트랙션과 내구성을 동시에 잡습니다.',
      performanceRating: 8,
      usedInShoes: ['salomon-pulsar', 'salomon-ultra-glide-4', 'salomon-s-lab-pulsar-4'],
    },
    {
      id: 'salomon-optifoam',
      name: 'optiFOAM',
      nameKo: '옵티폼',
      category: 'midsole',
      description: '살로몬의 신세대 미드솔 폼 계열로, 모델별로 eTPU·PEBA를 적용해 쿠션과 반응성을 끌어올렸습니다.',
      benefits: ['모델별 쿠션·반응성 튜닝', '경량 대비 높은 완충', '장거리 폼 내구성'],
      scienceExplanation:
        'optiFOAM은 살로몬이 기존 EVA 기반 폼(Energy Surge 등)을 대체하며 도입한 폼 계열입니다. 펄사는 optiFOAM2(100% eTPU)로 쿠션·반응성을 균형 있게, S/Lab 펄사 4는 optiFOAM+(PEBA/EVA 블렌드) 듀얼레이어로 레이싱급 반발을, 울트라 글라이드 4는 플러시한 OptiFoam으로 울트라 컴포트를 구현합니다. 마케팅상 Energy Foam 등으로 혼용 표기되지만 같은 계열입니다.',
      performanceRating: 7,
      usedInShoes: ['salomon-pulsar', 'salomon-ultra-glide-4', 'salomon-s-lab-pulsar-4'],
    },
    {
      id: 'salomon-quicklace',
      name: 'quickLACE',
      nameKo: '퀵레이스',
      category: 'upper',
      description: '케블라 강도의 코드를 원터치로 당겨 조이는 레이싱 시스템으로, SensiFit 풋 크래들과 결합해 발 전체를 균일하게 감쌉니다.',
      benefits: ['원터치 조임(끈 묶음 불필요)', '균일한 발 홀드', '여분 끈 포켓 수납'],
      scienceExplanation:
        'quickLACE는 얇고 강한 코드를 한 번 당겨 신발 전체를 조이는 시스템으로, 트레일 중 끈이 풀리거나 나뭇가지에 걸릴 위험을 없앱니다. 밑창에서 레이싱까지 이어지는 SensiFit 구조가 발 양옆을 감싸, 기술적 내리막에서도 발이 신발 안에서 놀지 않도록 잡아줍니다.',
      performanceRating: 8,
      usedInShoes: ['salomon-pulsar', 'salomon-ultra-glide-4', 'salomon-s-lab-pulsar-4'],
    },
    {
      id: 'salomon-relievesphere',
      name: 'RelieveSphere',
      nameKo: '릴리브스피어',
      category: 'cushioning',
      description: '울트라 글라이드 라인에 적용된 충격 분산 구조로, 불규칙한 암반 노면의 충격을 고르게 퍼뜨립니다.',
      benefits: ['암반·돌출 노면 충격 분산', '장거리 발바닥 피로 감소', '맥스쿠션과 결합 시 플러시한 라이드'],
      scienceExplanation:
        'RelieveSphere는 미드솔 내부에 배치한 충격 분산 구조로, 발이 바위·뿌리 같은 돌출 노면을 디딜 때 한 점에 몰리는 압력을 넓게 퍼뜨립니다. 그 결과 "바위 위가 평지보다 편하다"는 평이 나올 만큼 기술 지형에서의 발바닥 부담이 줄어, 50~100km 울트라 장거리 컴포트를 보조합니다.',
      performanceRating: 8,
      usedInShoes: ['salomon-ultra-glide-4'],
    },
  ],
};
