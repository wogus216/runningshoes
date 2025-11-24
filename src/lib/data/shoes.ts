import type { Shoe } from '@/types/shoe';

export const categoryOrder: string[] = ['입문화', '데일리', '쿠션화', '레이싱', '안정화'];

const shoes: Shoe[] = [
  // Nike - 페가수스 41 (완전한 데이터)
  {
    id: 'nike-pegasus-41',
    slug: 'nike-pegasus-41',
    brand: 'Nike',
    name: '페가수스 41',
    category: '입문화',
    rating: 4,
    price: 159000,
    description: '초보부터 중급까지, 모든 러너를 위한 올라운더 러닝화입니다. 편안한 착화감(76% 구매 결정 1순위)과 충분한 쿠셔닝으로 첫 러닝화로 완벽한 선택입니다.',
    tags: ['입문화', '데일리 러닝', '쿠셔닝 우수'],

    specs: {
      weight: 280,
      cushioning: 9,
      responsiveness: 7,
      stability: 8,
      drop: 10,
      durability: 550,
    },

    biomechanics: {
      stackHeight: {
        heel: 32,
        forefoot: 22,
      },
      drop: 10,
      carbonPlate: false,
      plateType: null,
      midsoleType: 'ReactX Foam',
      optimalPace: '5:00-7:00 min/km',
    },

    injuryPrevention: {
      plantarFasciitis: 'excellent',
      achillesTendinopathy: 'excellent',
      kneeIssues: 'caution',
      shinSplints: 'excellent',
    },

    koreanFootFit: {
      toBoxWidth: 'standard',
      flatFootCompatibility: 'good',
      wideOptions: false,
      winterCompatibility: 'good',
    },

    targetUsers: {
      recommended: ['러닝 입문자 (쿠셔닝 중시)', '무릎 보호가 필요한 러너', '장거리 편안함 원하는 분', '가성비 좋은 올라운더 찾는 분', '뒤꿈치 착지(RFS) 러너 (~85%)', '데일리 5-10km 주행'],
      notRecommended: ['마라톤 기록 단축 목표', '초경량 레이싱화 찾는 분', '강한 반발력 원하는 상급자', '대회용 전문 러닝화 필요'],
    },

    features: ['최상급 착화감 (76% 1순위)', '충분한 쿠셔닝 (초보자 최우선)', '적정 무게 (280g)', '뛰어난 가성비 (15만원대)'],

    priceAnalysis: {
      msrp: 159000,
      streetPrice: 135000,
      costPerKm: 280,
      valueRating: 9,
      priceTier: 'mid',
      alternatives: ['아식스 쿠무루스 27', '뉴발란스 880 V14', '호카 클리프턴 10'],
    },

    reviews: [
      {
        userType: '입문 러너',
        rating: 5,
        text: '처음 러닝 시작하면서 구매했는데 발이 너무 편해요. 쿠션이 푹신해서 무릎에 무리가 안 가는 느낌이고, 5km 뛰고 나서도 발이 안 아파서 놀랐습니다. 디자인도 예뻐서 일상에서도 신고 다녀요! 가성비 최고!',
      },
      {
        userType: '중급 러너',
        rating: 4,
        text: '데일리 러닝용으로는 정말 좋습니다. 편안하고 안정적이에요. 다만 마라톤 기록 단축을 원한다면 조금 무거울 수 있어요. 훈련용으로는 최고지만 레이스용은 베이퍼플라이 따로 준비했습니다. 발볼이 표준이라 와이드 옵션 있으면 더 좋겠어요.',
      },
      {
        userType: '가성비 중시',
        rating: 5,
        text: '나이키 페가수스는 "검증된 올라운더"라는 말이 괜히 있는 게 아니에요. 15만원대 가격에 이 정도 성능이면 정말 만족스럽습니다. 500km 넘게 신었는데 아직도 쿠션이 살아있어요. 주변에도 많이 추천했어요! 초보 러너 첫 신발로 강력 추천합니다.',
      },
      {
        userType: '평발 러너',
        rating: 3,
        text: '평발인데 아치 서포트가 적당해서 괜찮았어요. 다만 심한 과내전이 있다면 GT-2000 같은 안정화가 더 나을 것 같아요. 발볼이 넓은 편인데 표준 폭이라 약간 답답했습니다. 와이드 사이즈가 있으면 완벽할 것 같아요.',
      },
    ],

    detailedSpecs: {
      weight: '280g (남성 US 9 기준) / 240g (여성 US 7)',
      stackHeight: '힐 32mm / 포어풋 22mm (최적 범위 초과)',
      drop: '10mm (표준 드롭, 뒤꿈치 착지 유도)',
      midsole: 'ReactX 폼 (EVA보다 우수한 에너지 리턴)',
      plate: '없음 (자연스러운 발 움직임, 초보자 안전)',
      outsole: '고무 + 와플 패턴 (내구성 우수)',
      upper: '엔지니어드 메쉬 (통기성 우수)',
      width: '표준 (와이드 옵션 없음 - 한국인 발에 주의)',
      durability: '500-600km (내구성 우수)',
      price: '₩159,000 (MSRP) / 세일 시 ₩120,000~',
      costPerKm: '약 ₩280/km (550km 기준 - 가성비 우수)',
      footType: '평발 OK / 높은 아치 OK / 발볼 넓음 주의',
      landingPattern: '뒤꿈치 착지(RFS) 최적 (~85% 러너)',
    },

    similarShoes: ['adidas-supernova-rise-2', 'asics-cumulus-27', 'newbalance-880-v14', 'hoka-clifton-10'],
  },
  // Nike - 입문화
  { brand: 'Nike', name: '페가수스 41', category: '입문화', rating: 4 },
  { brand: 'Nike', name: '페가수스 프리미엄', category: '입문화', rating: 4 },

  // Nike - 쿠션화
  { brand: 'Nike', name: '보메로 18', category: '쿠션화', rating: 5 },
  { brand: 'Nike', name: '보메로 플러스', category: '쿠션화', rating: 5 },

  // Nike - 안정화
  { brand: 'Nike', name: '스트럭처 26', category: '안정화', rating: 4 },

  // Nike - 쿠션화
  { brand: 'Nike', name: '올트라플라이 4', category: '쿠션화', rating: 4 },

  // Nike - 데일리
  { brand: 'Nike', name: '라이벌 플라이 4', category: '데일리', rating: 4 },

  // Nike - 레이싱
  { brand: 'Nike', name: '알파플라이 3', category: '레이싱', rating: 5 },
  { brand: 'Nike', name: '줌 플라이 6', category: '레이싱', rating: 4 },
  { brand: 'Nike', name: '베이퍼플라이 3', category: '레이싱', rating: 5 },
  { brand: 'Nike', name: '스트릭플라이 2', category: '레이싱', rating: 4 },

  // Adidas - 입문화
  { brand: 'Adidas', name: '아디스타 3', category: '입문화', rating: 4 },
  { brand: 'Adidas', name: '슈퍼노바 라이즈 2', category: '입문화', rating: 4 },

  // Adidas - 쿠션화
  { brand: 'Adidas', name: '슈퍼노바 프라임', category: '쿠션화', rating: 4 },
  { brand: 'Adidas', name: '슈퍼노바 프라임 X', category: '쿠션화', rating: 4 },

  // Adidas - 데일리
  { brand: 'Adidas', name: '아디제로 SL2', category: '데일리', rating: 4 },

  // Adidas - 안정화
  { brand: 'Adidas', name: '슈퍼노바 솔루션 (안정화)', category: '안정화', rating: 4 },
  { brand: 'Adidas', name: '프라임 X 스트라운드', category: '안정화', rating: 4 },

  // Adidas - 데일리
  { brand: 'Adidas', name: '보스턴 13', category: '데일리', rating: 5 },
  { brand: 'Adidas', name: '아디제로 evo SL', category: '데일리', rating: 4 },

  // Adidas - 레이싱
  { brand: 'Adidas', name: '아디제로 아디오스 프로 4', category: '레이싱', rating: 5 },
  { brand: 'Adidas', name: '타쿠미 센 11', category: '레이싱', rating: 4 },
  { brand: 'Adidas', name: '아디제로 아디오스 8', category: '레이싱', rating: 5 },

  // Asics - 입문화

  // Asics - 쿠션화
  { brand: 'Asics', name: '젤 님버스 27', category: '쿠션화', rating: 4 },

  // Asics - 데일리
  { brand: 'Asics', name: '노바블라스트 5', category: '데일리', rating: 5 },

  // Asics - 안정화
  { brand: 'Asics', name: '젤카야노 32', category: '안정화', rating: 4 },
  { brand: 'Asics', name: 'GT-4000 3', category: '안정화', rating: 4 },
  { brand: 'Asics', name: 'GT-2000 13 (안정화)', category: '안정화', rating: 4 },

  // Asics - 레이싱
  { brand: 'Asics', name: '슈퍼블라스트 2', category: '레이싱', rating: 5 },
  { brand: 'Asics', name: '매직스피드 4', category: '레이싱', rating: 4 },
  { brand: 'Asics', name: '메타스피드 스카이+', category: '레이싱', rating: 5 },
  { brand: 'Asics', name: '메타스피드 엣지+', category: '레이싱', rating: 5 },
  { brand: 'Asics', name: '메타 스피드 레이', category: '레이싱', rating: 4 },

  // New Balance - 입문화
  { brand: 'New Balance', name: '프레시폼 880 V14', category: '입문화', rating: 4 },
  { brand: 'New Balance', name: '퓨얼셀 프로펠 V5', category: '입문화', rating: 4 },
  { brand: 'New Balance', name: '프레시폼 1080 V14', category: '입문화', rating: 5 },

  // New Balance - 쿠션화
  { brand: 'New Balance', name: '프레시폼 모어 V5', category: '쿠션화', rating: 4 },

  // New Balance - 데일리
  { brand: 'New Balance', name: '퓨얼셀 레벨 V5', category: '데일리', rating: 4 },
  { brand: 'New Balance', name: '프레시폼 템포 V2', category: '데일리', rating: 4 },

  // New Balance - 안정화
  { brand: 'New Balance', name: '프레시폼 860 V14', category: '안정화', rating: 4 },
  { brand: 'New Balance', name: '프레시폼 알고 V6', category: '안정화', rating: 4 },

  // New Balance - 쿠션화
  { brand: 'New Balance', name: 'SC 트레이너 V3', category: '쿠션화', rating: 4 },

  // New Balance - 레이싱
  { brand: 'New Balance', name: '퓨얼셀 슈퍼콤프 트레이너 V3', category: '레이싱', rating: 5 },

  // New Balance - 데일리
  { brand: 'New Balance', name: '퓨얼셀 리벨 V4', category: '데일리', rating: 4 },

  // New Balance - 레이싱
  { brand: 'New Balance', name: 'SC 엘리트 V4', category: '레이싱', rating: 5 },
  { brand: 'New Balance', name: 'SC 페이서 V3', category: '레이싱', rating: 4 },

  // New Balance - 레이싱
  { brand: 'New Balance', name: '퓨얼셀 슈퍼콤프 엘리트 V4', category: '레이싱', rating: 5 },
  { brand: 'New Balance', name: 'SC 엘리트 V3', category: '레이싱', rating: 4 },

  // Saucony - 입문화
  { brand: 'Saucony', name: '라이드 18', category: '입문화', rating: 4 },
  { brand: 'Saucony', name: '가이드 18', category: '입문화', rating: 4 },

  // Saucony - 쿠션화
  { brand: 'Saucony', name: '트라이엄프 22', category: '쿠션화', rating: 4 },
  { brand: 'Saucony', name: '템포 넥스트%', category: '쿠션화', rating: 4 },

  // Saucony - 데일리
  { brand: 'Saucony', name: '킨바라 15', category: '데일리', rating: 4 },
  { brand: 'Saucony', name: '스피드 4', category: '데일리', rating: 4 },

  // Saucony - 안정화
  { brand: 'Saucony', name: '가이드 18 (안정화)', category: '안정화', rating: 4 },
  { brand: 'Saucony', name: '템포 2', category: '안정화', rating: 4 },

  // Saucony - 레이싱
  { brand: 'Saucony', name: '엔도르핀 프로 4', category: '레이싱', rating: 5 },

  // Saucony - 레이싱
  { brand: 'Saucony', name: '엔도르핀 엘리트', category: '레이싱', rating: 5 },

  // Saucony - 레이싱
  { brand: 'Saucony', name: '엔도르핀 스피드 4', category: '레이싱', rating: 4 },

  // Puma - 입문화
  { brand: 'Puma', name: '벨로시티 니트로 3', category: '입문화', rating: 4 },

  // Puma - 데일리
  { brand: 'Puma', name: '리벨 니트로 3', category: '데일리', rating: 4 },

  // Puma - 쿠션화
  { brand: 'Puma', name: '메그니파이 니트로 3', category: '쿠션화', rating: 4 },

  // Puma - 쿠션화
  { brand: 'Puma', name: '포에버런 니트로', category: '쿠션화', rating: 4 },

  // Puma - 데일리
  { brand: 'Puma', name: '라피도 니트로 3', category: '데일리', rating: 4 },

  // Puma - 데일리
  { brand: 'Puma', name: '데비에이트 니트로 3', category: '데일리', rating: 4 },

  // Puma - 레이싱
  { brand: 'Puma', name: '데비에이트 니트로 엘리트 3', category: '레이싱', rating: 4 },

  // Puma - 레이싱
  { brand: 'Puma', name: '패스트-R 니트로 엘리트 2', category: '레이싱', rating: 4 },

  // Hoka - 입문화
  { brand: 'Hoka', name: '클리프턴 10', category: '입문화', rating: 5 },
  { brand: 'Hoka', name: '클리프턴 LS', category: '입문화', rating: 4 },

  // Hoka - 쿠션화
  { brand: 'Hoka', name: '본디 9', category: '쿠션화', rating: 4 },
  { brand: 'Hoka', name: '메그니파이 니트로 3', category: '쿠션화', rating: 4 },
  { brand: 'Hoka', name: '트랜스포터 3', category: '쿠션화', rating: 4 },

  // Hoka - 데일리
  { brand: 'Hoka', name: '마하 6', category: '데일리', rating: 4 },
  { brand: 'Hoka', name: '린콘 5', category: '데일리', rating: 4 },

  // Hoka - 안정화
  { brand: 'Hoka', name: '아라히 7', category: '안정화', rating: 4 },
  { brand: 'Hoka', name: '게이터 8', category: '안정화', rating: 4 },

  // Hoka - 레이싱
  { brand: 'Hoka', name: '스카이워드 X', category: '레이싱', rating: 5 },
  { brand: 'Hoka', name: '카본 X4', category: '레이싱', rating: 5 },
  { brand: 'Hoka', name: '마하 6', category: '레이싱', rating: 4 },

  // Hoka - 레이싱
  { brand: 'Hoka', name: '로켓 X2', category: '레이싱', rating: 5 },
  { brand: 'Hoka', name: '시에나 X2', category: '레이싱', rating: 4 },

  // Hoka - 레이싱
  { brand: 'Hoka', name: '카본 엑스 4', category: '레이싱', rating: 5 },

  // Brooks - 입문화
  { brand: 'Brooks', name: '고스트 맥스 2', category: '입문화', rating: 5 },
  { brand: 'Brooks', name: '고스트 17', category: '입문화', rating: 5 },

  // Brooks - 쿠션화
  { brand: 'Brooks', name: '글리세린 22', category: '쿠션화', rating: 5 },

  // Brooks - 데일리
  { brand: 'Brooks', name: '고스트 맥스 3', category: '데일리', rating: 4 },
  { brand: 'Brooks', name: '런치 10', category: '데일리', rating: 4 },

  // Brooks - 안정화
  { brand: 'Brooks', name: '고스트 GTS 17', category: '안정화', rating: 4 },
  { brand: 'Brooks', name: '글리세린 GTS 22', category: '안정화', rating: 4 },

  // Brooks - 데일리
  { brand: 'Brooks', name: '하이퍼리온 2', category: '데일리', rating: 4 },

  // Brooks - 레이싱
  { brand: 'Brooks', name: '하이퍼리온 템포 2', category: '레이싱', rating: 4 },

  // Brooks - 데일리
  { brand: 'Brooks', name: '하이퍼리온 맥스', category: '데일리', rating: 4 },

  // Brooks - 레이싱
  { brand: 'Brooks', name: '하이퍼리온 엘리트 4', category: '레이싱', rating: 4 },

  // Brooks - 레이싱
  { brand: 'Brooks', name: '하이퍼리온 엘리트 4', category: '레이싱', rating: 4 },

  // Mizuno - 입문화
  { brand: 'Mizuno', name: '웨이브 라이더 28', category: '입문화', rating: 4 },
  { brand: 'Mizuno', name: '웨이브 호라이즌 7', category: '입문화', rating: 4 },

  // Mizuno - 쿠션화
  { brand: 'Mizuno', name: '웨이브 스카이 8', category: '쿠션화', rating: 4 },
  { brand: 'Mizuno', name: '네오 코스모', category: '쿠션화', rating: 4 },

  // Mizuno - 데일리
  { brand: 'Mizuno', name: '웨이브 네오 울트라', category: '데일리', rating: 4 },
  { brand: 'Mizuno', name: '웨이브 스카이 플라이 2', category: '데일리', rating: 4 },

  // Mizuno - 안정화
  { brand: 'Mizuno', name: '웨이브 인스파이어 20', category: '안정화', rating: 4 },

  // Mizuno - 쿠션화
  { brand: 'Mizuno', name: '웨이브 스카이 라이즈', category: '쿠션화', rating: 4 },

  // Mizuno - 데일리
  { brand: 'Mizuno', name: '웨이브 듀얼 소닉', category: '데일리', rating: 4 },

  // Mizuno - 데일리
  { brand: 'Mizuno', name: '웨이브 리벨리온 소닉', category: '데일리', rating: 4 },

  // Mizuno - 레이싱
  { brand: 'Mizuno', name: '웨이브 리벨리온 프로 2', category: '레이싱', rating: 5 },
  { brand: 'Mizuno', name: '웨이브 리벨리온 프로 플래시', category: '레이싱', rating: 5 },

  // Mizuno - 레이싱
  { brand: 'Mizuno', name: '웨이브 리벨리온 프로', category: '레이싱', rating: 5 },
  { brand: 'Mizuno', name: '웨이브 듀얼 프로', category: '레이싱', rating: 4 },

  // On - 입문화
  { brand: 'On', name: '클라우드 서퍼 7', category: '입문화', rating: 4 },
  { brand: 'On', name: '클라우드러너 2', category: '입문화', rating: 4 },

  // On - 쿠션화
  { brand: 'On', name: '클라우드몬스터 2', category: '쿠션화', rating: 4 },
  { brand: 'On', name: '클라우드몬스터 하이퍼', category: '쿠션화', rating: 4 },

  // On - 데일리
  { brand: 'On', name: '클라우드스위프트 4', category: '데일리', rating: 4 },
  { brand: 'On', name: '클라우드플로우 4', category: '데일리', rating: 4 },

  // On - 안정화
  { brand: 'On', name: '클라우드스트라토스', category: '안정화', rating: 4 },

  // On - 쿠션화
  { brand: 'On', name: '클라우드울트라', category: '쿠션화', rating: 4 },

  // On - 데일리
  { brand: 'On', name: '클라우드에코', category: '데일리', rating: 4 },

  // On - 레이싱
  { brand: 'On', name: '클라우드스트라토스', category: '레이싱', rating: 5 },

  // On - 데일리
  { brand: 'On', name: '클라우드붐 4', category: '데일리', rating: 4 },

  // On - 레이싱
  { brand: 'On', name: '클라우드붐 스트라이크 LS', category: '레이싱', rating: 4 },

  // On - 레이싱
  { brand: 'On', name: '클라우드붐 에코', category: '레이싱', rating: 4 },
  { brand: 'On', name: '클라우드스파이더', category: '레이싱', rating: 4 },
  { brand: 'On', name: '클라우드플래시', category: '레이싱', rating: 4 },
];

export function getShoes(): Shoe[] {
  return shoes;
}

export function groupShoesByCategory(shoesList: Shoe[] = shoes): Record<string, Shoe[]> {
  return shoesList.reduce<Record<string, Shoe[]>>((acc, shoe) => {
    if (!acc[shoe.category]) {
      acc[shoe.category] = [];
    }
    acc[shoe.category].push(shoe);
    return acc;
  }, {});
}

export function groupShoesByBrand(shoesList: Shoe[] = shoes): Record<string, Shoe[]> {
  return shoesList.reduce<Record<string, Shoe[]>>((acc, shoe) => {
    if (!acc[shoe.brand]) {
      acc[shoe.brand] = [];
    }
    acc[shoe.brand].push(shoe);
    return acc;
  }, {});
}

export function getBrandsFromShoes(shoesList: Shoe[] = shoes): string[] {
  return Array.from(new Set(shoesList.map((shoe) => shoe.brand))).sort();
}

export function getShoeBySlug(slug: string): Shoe | undefined {
  return shoes.find((shoe) => shoe.slug === slug);
}
