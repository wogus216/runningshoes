import type { Shoe } from '@/types/shoe';

export const shoe: Shoe = {
  id: 'puma-deviate-nitro-4',
  slug: 'puma-deviate-nitro-4',
  brand: 'Puma',
  name: '디비에이트 나이트로 4',
  image: '/images/shoes/puma/deviatenitro4/side.webp',
  images: [
    '/images/shoes/puma/deviatenitro4/side.webp',
    '/images/shoes/puma/deviatenitro4/front.webp',
    '/images/shoes/puma/deviatenitro4/back.webp',
    '/images/shoes/puma/deviatenitro4/angle.webp',
    '/images/shoes/puma/deviatenitro4/top.webp',
  ],
  category: '쿠션화',
  rating: 4.5,
  price: 219000,
  description: '푸마의 슈퍼트레이너로, 듀얼 레이어 NITROFOAM과 카본 합성 PWRPLATE로 업템포 트레이닝에 최적화된 반응성과 쿠셔닝을 제공합니다. 전작 대비 더 넓어진 핏과 부드러워진 착화감이 특징입니다.',
  oneliner: 'PEBAX 듀얼폼 + 카본 PWRPLATE, 800km 내구성 슈퍼트레이너',
  editorComment: '전작의 좁은 핏이라는 고질적 약점을 해결하면서 800km 내구성을 달성한 것이 v4의 가장 큰 진보입니다. 상단 PEBAX 100% 폼이 착지를 부드럽게 받아주고 하단 PEBA 블렌드가 추진력을 더하는 구조가 합리적입니다. 21만 9천원은 엔돌핀 스피드 5(₩219,000)와 동일 가격이지만, 카본 합성 PWRPLATE와 800km 내구성(스피드5는 500km)에서 차별화됩니다. 드롭이 v3의 10mm에서 8mm로 줄어 더 자연스러운 전환감을 주고, 와이드 옵션까지 있어 한국 러너 발볼 걱정을 덜었습니다. 카본화인데 800km 내구 표기가 가능한 건 PEBAX 블렌드와 아웃솔 조합 덕입니다 — 다만 폼의 반발은 조용히 줄어듭니다. 640km 시점 객관 성능이 20~28% 떨어져도 체감은 2.7%뿐이었다는 연구를 기억하고, 킬로미터 기록으로 관리하세요.\n\n사이즈·구매 가이드: 토박스 너비가 표준(standard)이며 v3 대비 개선된 핏과 와이드 옵션을 제공하므로 발볼 넓은 러너도 착용 가능합니다. 219,000원 ÷ 800km = km당 약 274원으로 카본 슈퍼트레이너 중 최고 가성비입니다. 카본 없이 더 가볍게 쓰고 싶다면 디비에이트 나이트로 퓨어, 같은 가격대에서 반발력을 극대화하려면 엔돌핀 스피드 5를 비교해보세요.',
  tags: ['슈퍼트레이너', 'PWRPLATE', '업템포 러닝', '듀얼폼'],

  specs: {
    weight: 250,
    cushioning: 8,
    responsiveness: 9,
    stability: 7,
    drop: 8,
    durability: 800,
  },

  biomechanics: {
    stackHeight: {
      heel: 38,
      forefoot: 30,
    },
    drop: 8,
    carbonPlate: true,
    plateType: 'curved',
    midsoleType: 'Dual-Layer NITROFOAM (PEBAX + PEBA)',
    optimalPace: '4:00-5:30 min/km',
  },

  injuryPrevention: {
    plantarFasciitis: 'good',
    achillesTendinopathy: 'good',
    kneeIssues: 'good',
    shinSplints: 'good',
  },

  koreanFootFit: {
    toBoxWidth: 'standard',
    flatFootCompatibility: 'good',
    wideOptions: true,
    winterCompatibility: 'good',
    summerCompatibility: 'excellent',
  },

  targetUsers: {
    recommended: ['업템포 트레이닝', '템포 러닝', '하프 마라톤', '중상급 러너', 'PR 추구 러너'],
    notRecommended: ['입문 러너', '느린 회복 러닝', '최대 쿠셔닝 필요'],
  },

  features: ['듀얼 레이어 NITROFOAM (PEBAX/PEBA)', '카본 합성 PWRPLATE', 'PUMAGRIP 아웃솔', '전작 대비 넓어진 핏', '8mm 드롭 (v3 대비 2mm 감소)'],

  priceAnalysis: {
    msrp: 219000,
    streetPrice: 190000,
    costPerKm: 274,
    valueRating: 8,
    priceTier: 'high',
    alternatives: ['saucony-endorphin-speed-5', 'asics-sonicblast', 'nike-zoom-fly-6'],
  },

  reviews: [
    {
        userType: '세대 비교 — v3의 좁은 핏이 해소',
        text: '전작 v3의 최대 불만이던 좁은 핏이 개선된 세대입니다. 표준 사이즈에서 발볼 105mm 수준까지 토박스 여유가 생겼고 와이드 옵션도 있어, 핏 때문에 이 라인을 포기했다면 다시 볼 이유가 됩니다. 미드솔은 상단 PEBAX가 착지를 받고 하단 PEBA가 밀어주는 이중 구조이며, 드롭이 v3의 10mm에서 8mm로 낮아져 전환이 자연스러워졌습니다. 250g에 힐 38mm 스택입니다. 내구성 800km로 경쟁 모델(엔돌핀 스피드 계열 500km)보다 300km 길어, 219,000원 기준 km당 약 274원으로 카본 슈퍼트레이너 중 운용 비용이 가장 낮은 축입니다.',
      },
    {
      userType: 'Believe in the Run',
      rating: 80,
      text: '역대 최고의 Deviate Nitro입니다. 전작의 좁은 핏 문제를 해결했고, 상단에 PEBAX 기반 폼을 배치해 착지감이 부드러워졌습니다. 8mm 드롭으로 v3의 10mm에서 줄어 더 자연스러운 전환감을 제공합니다. 219,000원 가격대에서 엔돌핀 스피드 5, 소닉블라스트와 경쟁해야 하지만, PumaGrip 아웃솔의 뛰어난 접지력과 800km 내구성은 km당 약 274원의 가성비를 만들어냅니다. 한국 러너 관점에서 와이드 옵션이 있다는 점이 큰 장점이고, 발볼 넓어도 토박스 불편함 없이 착용 가능합니다. 38mm 힐 스택의 쿠셔닝이 무릎 관절 보호에 효과적이고, 250g 무게로 데일리 트레이너와 업템포 러닝을 겸하는 만능 슈퍼트레이너입니다. 평발 러너에게도 안정성이 무난하며, 반응성을 동시에 원하는 중상급 러너에게 추천합니다.',
    },
    {
        userType: '예상 적합 — 와이드가 필요한 카본 훈련화',
        text: '카본화 중 와이드 옵션이 있는 드문 모델입니다. 카본 훈련화 상당수가 좁은 라스트에 와이드를 제공하지 않아 반 치수 업으로 대응해야 하는데, 이 모델은 정사이즈에서 발볼 대응이 됩니다. 250g에 힐 38mm 스택으로 하프 페이스 수준의 인터벌을 소화하면서 착지 부담도 줄입니다. 반대로 반발이 뚜렷해 느린 회복 러닝에는 과하게 느껴질 수 있어, 용도를 나눠 쓰는 편이 맞습니다. 219,000원에 내구성 800km로 카본이 들어간 모델 중 운용 비용이 가장 낮은 축입니다.',
      },
  ],

  detailedSpecs: {
    weight: '250g (UK 8 기준, 한국 공식)',
    stackHeight: '힐 38mm / 포어풋 30mm',
    drop: '8mm (v3 대비 2mm 감소)',
    midsole: '듀얼 레이어 NITROFOAM (상단 PEBAX 100%, 하단 PEBA 블렌드)',
    plate: '카본 합성 PWRPLATE',
    outsole: 'PUMAGRIP 러버',
    upper: '엔지니어드 메쉬 + PWRTAPE (20% 재활용 소재)',
    width: '표준 (v3 대비 넓어짐, 와이드 옵션 있음)',
    durability: '800km',
    price: '₩219,000 (MSRP) / 세일 시 ₩190,000~',
    costPerKm: '약 ₩274/km (800km 기준)',
    footType: '표준~넓은 발볼 / 와이드 옵션 있음',
    landingPattern: '힐스트라이크~미드풋',
  },

  similarShoes: ['saucony-endorphin-speed-5', 'asics-sonicblast', 'nike-zoom-fly-6', 'hoka-mach-x-3'],
  relatedPosts: [
    { slug: 'running-shoe-plate-guide-2026', title: '플레이트 완전 해설 — 카본·유리섬유·나일론' },
  ],
  purchaseLinks: [{ store: '네이버', url: 'https://naver.me/xoGoLpeG' }],
};
