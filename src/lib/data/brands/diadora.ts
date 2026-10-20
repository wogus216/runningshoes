import type { Brand } from '@/types/brand';

// 2026-10-20 등록 — 출처: diadora.com(설립 연도 "since 1948", 본사 Via Montello 80, Caerano di San Marco – Treviso),
// diadora.com/en/kr/history, 러닝 테크 페이지(diadora.com/en/kr/tecnology-running),
// 한국 공식몰(diadorakorea.com) 푸터 라이선스 문구. 신발별 수치는 RunRepeat 랩 리뷰.
export const diadoraBrand: Brand = {
  id: 'diadora',
  name: 'Diadora',
  nameKo: '디아도라',
  tagline: 'Premium Italian Sport',
  description:
    '1948년 등산화를 만드는 공방으로 시작해 스포츠 브랜드로 전환한 디아도라는 이탈리아 트레비소주 카에라노 디 산 마르코(Caerano di San Marco)에 본사를 두고 있고, 지금도 일부 러닝화를 이탈리아에서 생산하며 "Premium Italian Sport"를 내세웁니다. 러닝화는 EVA 기반 ANIMA, 질소 주입 ANIMA N2, 초임계 발포 ANIMA PBX의 세 갈래 미드솔과 Duratech 5000 아웃솔이 축이고, RunRepeat 랩에서는 아웃솔 마모가 적은 대신 토박스가 평균보다 좁게 측정되는 경향이 반복됩니다. 한국에서는 하이라이트브랜즈(Modern Works 사업부)가 디아도라 본사의 라이선스를 받아 공식몰(diadorakorea.com)을 운영합니다.',
  founded: 1948,
  headquarters: '이탈리아 카에라노 디 산 마르코(트레비소)',
  website: 'https://www.diadorakorea.com',
  technologies: [
    {
      id: 'diadora-anima-n2',
      name: 'ANIMA N2',
      nameKo: '아니마 N2',
      category: 'midsole',
      description: '질소를 주입한 디아도라의 경량 미드솔 폼으로, 일반 ANIMA보다 가볍고 부드럽습니다.',
      benefits: ['미드솔 경량화(공식: 무게 40% 감소)', '부드러운 착지감', '높은 충격흡수'],
      scienceExplanation:
        '디아도라 공식 설명에 따르면 ANIMA N2는 미드솔의 반응성을 40% 높이면서 무게를 40% 줄인 컴파운드입니다. RunRepeat 랩에서 아토모 스타는 경도 14.0 HA·힐 충격흡수 149 SA, 프리퀀자 2는 11.8 HA·힐 161 SA로 측정돼 매우 부드럽고 충격흡수가 큰 폼으로 확인됐습니다. 반면 반발은 아토모 스타 53.9~57.4%, 프리퀀자 2 59.4~62.7%로, PEBA 계열 슈퍼폼에는 못 미칩니다.',
      performanceRating: 6,
      usedInShoes: ['diadora-atomo-star', 'diadora-frequenza-2'],
      characteristics: { cushioning: 9, responsiveness: 6, weight: 7 },
    },
    {
      id: 'diadora-anima',
      name: 'ANIMA',
      nameKo: '아니마',
      category: 'midsole',
      description: 'EVA 기반의 디아도라 기본 미드솔 폼으로, 데일리·안정화 라인에 쓰입니다.',
      benefits: ['EVA 라이트 대비 경량화(공식: 20%)', '안정적인 착지감', '가격대가 낮은 라인에 적용'],
      scienceExplanation:
        '디아도라 공식 설명은 ANIMA가 EVA 라이트 컴파운드 대비 반응성을 30% 높이고 미드솔 무게를 20% 줄였으며, 반응성 수준이 60% 안팎이라고 밝힙니다. 다만 RunRepeat 랩 실측 반발은 누클레오 2 힐 47.8%·전족부 52.2%, 미토스 블루실드 볼로 5 힐 42.8%·전족부 47.4%로 공식 수치보다 낮게 나왔습니다. 경도는 17.9~20.0 HA로 ANIMA N2보다 단단합니다.',
      performanceRating: 5,
      usedInShoes: ['diadora-nucleo-2', 'diadora-mythos-blushield-volo-5'],
      characteristics: { cushioning: 7, responsiveness: 4, weight: 6 },
    },
    {
      id: 'diadora-anima-pbx',
      name: 'ANIMA PBX',
      nameKo: '아니마 PBX',
      category: 'midsole',
      description: '초임계 발포로 만든 디아도라의 레이싱용 최상위 폼으로, 카본 레이서 라인에 쓰입니다.',
      benefits: ['초임계 발포 경량 폼', '높은 반응성(공식: 55% 향상)', '카본 플레이트와 결합'],
      scienceExplanation:
        '디아도라 공식 설명에 따르면 ANIMA PBX는 초임계 발포로 만들어 미드솔 반응성을 55% 높이고 무게를 40% 줄였습니다. 카본 플레이트와 함께 쓰여 에너지 리턴 80%를 낸다는 것이 디아도라의 주장입니다. 현재 이 사이트에는 ANIMA PBX를 쓴 모델이 등록돼 있지 않습니다.',
      performanceRating: 8,
      usedInShoes: [],
    },
    {
      id: 'diadora-blushield',
      name: 'Blushield',
      nameKo: '블루실드',
      category: 'stability',
      description: '발 모양에 맞춘 베이스와 충격 완충 코어를 결합해 좌우 비대칭 움직임을 줄이는 디아도라의 지지 구조입니다.',
      benefits: ['좌우 비대칭 움직임 감소(공식)', '거슬리지 않는 지지감', '착지 충격 완화'],
      scienceExplanation:
        '디아도라 공식 설명에 따르면 Blushield는 발의 해부학적 형태를 따라 깎은 모르포 베이스(morpho base)와 그 사이에서 충격을 중재하는 코어(nucleo)를 결합해, 착지 때 발의 비대칭 움직임을 줄입니다. RunRepeat는 미토스 블루실드 볼로 5에서 이 구조가 거슬리지 않는 지지를 준다고 평가했고, 전족부 스택의 일부가 Blushield 구조 높이라 그 부위 충격흡수는 평범하다고 덧붙였습니다.',
      performanceRating: 7,
      usedInShoes: ['diadora-mythos-blushield-volo-5'],
    },
    {
      id: 'diadora-duratech-5000',
      name: 'Duratech 5000',
      nameKo: '듀라테크 5000',
      category: 'outsole',
      description: '일반 고무보다 마모 저항을 높인 디아도라의 아웃솔 고무 컴파운드입니다.',
      benefits: ['높은 마모 저항(공식)', '힐 마모 방지', '접지력'],
      scienceExplanation:
        '디아도라 공식 설명은 Duratech 5000을 표준 고무보다 마모 저항이 훨씬 높은 특수 컴파운드로 소개합니다. RunRepeat 드레멜 마모 테스트에서 아토모 스타 0.4mm, 누클레오 2·프리퀀자 2 0.7mm, 미토스 블루실드 볼로 5 0.8mm로 측정돼, 이 사이트에 등록한 디아도라 4종 모두 마모가 적은 편이었습니다.',
      performanceRating: 8,
      usedInShoes: ['diadora-atomo-star', 'diadora-frequenza-2', 'diadora-nucleo-2', 'diadora-mythos-blushield-volo-5'],
      characteristics: { durability: 9 },
    },
    {
      id: 'diadora-ddattivo',
      name: 'DDATTIVO',
      nameKo: '디아띠보',
      category: 'cushioning',
      description: '통기 구멍을 낸 고밀도 폼 인솔로, 힐 쪽을 두껍게 만들어 쿠션을 보탭니다.',
      benefits: ['고밀도 폼 쿠션(공식)', '통기·흡습', '항균 성분으로 냄새 억제(공식)'],
      scienceExplanation:
        '디아도라 공식 설명에 따르면 DDATTIVO는 흡수·방출 능력이 높은 고밀도 폼에 통기 구멍을 낸 인솔로, 항균 성분을 넣었습니다. RunRepeat는 아토모 스타에서 힐 두께 7.5mm, 미토스 블루실드 볼로 5에서 최대 7.9mm를 측정했고, 힐 쪽에 쿠션 블록을 따로 둔 구조라고 설명했습니다.',
      performanceRating: 6,
      usedInShoes: ['diadora-atomo-star', 'diadora-mythos-blushield-volo-5'],
    },
  ],
};
