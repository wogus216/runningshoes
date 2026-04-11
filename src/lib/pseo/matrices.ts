import type { Shoe } from '@/types/shoe';
import { shoes as allShoes } from '@/lib/data/shoes';
import { isCompleteShoe } from '@/types/shoe';

export type MatrixGroup =
  | 'category'
  | 'attribute'
  | 'price'
  | 'distance'
  | 'brand-category';

export type FaqItem = { q: string; a: string };

export type MatrixEntry = {
  slug: string;
  group: MatrixGroup;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  filter: (s: Shoe) => boolean;
  faq: FaqItem[];
};

const brandSlugMap: Record<string, string> = {
  Nike: 'nike',
  Adidas: 'adidas',
  Asics: 'asics',
  'New Balance': 'new-balance',
  Hoka: 'hoka',
  Brooks: 'brooks',
  Saucony: 'saucony',
  On: 'on',
  Mizuno: 'mizuno',
  Puma: 'puma',
};

const categorySlugMap: Record<string, string> = {
  입문화: 'beginner',
  데일리: 'daily-trainer',
  쿠션화: 'max-cushion',
  레이싱: 'racing',
  안정화: 'stability',
};

const categoryEnglish: Record<string, string> = {
  입문화: 'Beginner',
  데일리: 'Daily Trainer',
  쿠션화: 'Max Cushion',
  레이싱: 'Racing',
  안정화: 'Stability',
};

function hasMinimumData(s: Shoe): boolean {
  return Boolean(s.image && s.price && s.description && s.specs);
}

function categoryEntries(): MatrixEntry[] {
  const angles: Record<string, { intro: string; faq: FaqItem[] }> = {
    입문화: {
      intro:
        '러닝을 처음 시작하는 분에게 가장 중요한 건 부드러운 착화감과 너그러운 안정성입니다. 무릎과 발목에 무리가 가지 않도록 충분한 쿠셔닝, 한국인 발볼에 맞는 토박스, 그리고 15만원대 전후의 합리적인 가격이 핵심 기준입니다. 아래는 데이터(RunRepeat 랩 테스트)와 한국 러너 관점을 모두 반영한 입문 러닝화 추천입니다.',
      faq: [
        {
          q: '입문자도 카본화를 신어도 되나요?',
          a: '권장하지 않습니다. 카본 플레이트는 발목·종아리 근력을 빠르게 소모시켜 부상 위험이 높습니다. 최소 6개월간 일반 트레이너로 기초 근력을 다진 뒤 전환하세요.',
        },
        {
          q: '입문화는 얼마나 오래 신을 수 있나요?',
          a: '주간 30km 미만 기준 약 600~800km, 즉 6~10개월이 평균입니다. 미드솔이 압축돼 충격흡수가 떨어지면 무릎 통증으로 이어질 수 있어 교체 시점이 중요합니다.',
        },
        {
          q: '발볼이 넓은데 어떤 모델이 좋은가요?',
          a: '와이드(2E/4E) 옵션이 있는 아식스, 뉴발란스, 브룩스 입문화가 안전합니다. 토박스 너비 75mm 이상을 권장합니다.',
        },
      ],
    },
    데일리: {
      intro:
        '데일리 트레이너는 주 3~5회 일상 훈련의 주력입니다. 너무 무겁지도 가볍지도 않은 균형, 700km 이상의 내구성, 그리고 다양한 페이스(조깅~템포)를 소화하는 다재다능함이 핵심입니다. 한국 러너에게는 고온다습한 여름, 한겨울 빙판까지 고려한 갑피·아웃솔도 중요합니다.',
      faq: [
        {
          q: '데일리화 한 켤레로 모든 훈련이 가능한가요?',
          a: '주 30km 이하라면 가능합니다. 그 이상이면 데일리 + 회복용 쿠션화 또는 + 템포화의 2족 로테이션이 부상 예방과 내구성 면에서 유리합니다.',
        },
        {
          q: '데일리 트레이너와 쿠션화의 차이는?',
          a: '데일리는 반응성과 쿠셔닝의 균형(스택 30~36mm), 쿠션화는 회복·장거리 위주의 두꺼운 폼(스택 36mm+)입니다. 평균 페이스가 km당 5:30 이내라면 데일리, 그보다 느리거나 회복런 위주라면 쿠션화가 어울립니다.',
        },
      ],
    },
    쿠션화: {
      intro:
        '맥스 쿠션 슈즈는 장거리 LSD, 회복런, 그리고 무릎이 약한 러너에게 가장 안전한 선택입니다. 35mm 이상의 두꺼운 폼이 충격을 흡수해 관절 부담을 줄여주지만, 그만큼 무겁고 반응성이 떨어지므로 빠른 페이스에는 부적합합니다.',
      faq: [
        {
          q: '쿠션화가 오히려 무릎에 안 좋다는 얘기가 있던데요?',
          a: '극단적으로 부드러운 폼은 발목 안정성을 떨어뜨려 ITBS(장경인대증후군) 위험을 높일 수 있다는 연구가 있습니다. 평소 안정성에 문제가 없다면 쿠션화는 무릎에 유리합니다.',
        },
        {
          q: '체중이 많이 나가는데 쿠션화가 적합한가요?',
          a: '네. 체중 80kg 이상이면 충격이 더 크므로 두꺼운 쿠션이 유리합니다. 단 폼이 빨리 압축되니 600km 전후 교체를 권장합니다.',
        },
      ],
    },
    레이싱: {
      intro:
        '카본 플레이트 슈즈는 5K~풀마라톤 대회용입니다. World Athletics 규정상 스택 40mm 이하에 카본 플레이트 1개까지 허용됩니다. 일반 트레이너 대비 4~6%의 러닝 이코노미 향상이 입증됐지만, 발목·아킬레스에 부담이 커 충분한 준비가 필요합니다.',
      faq: [
        {
          q: '카본화는 얼마나 자주 신어야 하나요?',
          a: '훈련의 10~20% 이내 권장. 매일 신으면 근력이 약해지고 폼 내구성도 200~300km로 짧아 비효율적입니다.',
        },
        {
          q: '서브 4 러너도 카본화 효과가 있나요?',
          a: 'km당 6:00 이상에서는 효과가 미미하다는 연구가 많습니다. 페이스가 느릴수록 카본 반발 활용이 어려워, 안정적 쿠션화가 더 빠를 수 있습니다.',
        },
      ],
    },
    안정화: {
      intro:
        '안정화는 평발, 오버프로네이션, 또는 발목이 안쪽으로 무너지는 러너를 위한 신발입니다. 과거의 딱딱한 미디얼 포스트 방식에서 최근에는 가이드레일·3D 가이던스 같은 부드러운 안정 시스템으로 진화했습니다.',
      faq: [
        {
          q: '평발이면 무조건 안정화여야 하나요?',
          a: '아닙니다. 통증이 없다면 중립화도 가능합니다. 다만 장거리에서 발목 안쪽 통증이 있다면 안정화로 전환하세요.',
        },
        {
          q: '족저근막염이 있는데 어떤 안정화가 좋을까요?',
          a: '아치 서포트가 강하고 힐 카운터가 단단한 모델, 그리고 드롭 8mm 이상이 유리합니다. 본문 추천 모델 중 족저근막염 등급 excellent/good을 우선 보세요.',
        },
      ],
    },
  };

  return (Object.keys(categorySlugMap) as Array<keyof typeof categorySlugMap>).map((kor) => {
    const slug = `${categorySlugMap[kor]}`;
    const eng = categoryEnglish[kor];
    return {
      slug,
      group: 'category' as const,
      h1: `${kor} 러닝화 추천 TOP — 한국 러너 관점 분석`,
      metaTitle: `${kor} 러닝화 추천 TOP | ${eng} Best Picks 2026`,
      metaDescription: `한국 러너를 위한 ${kor} 러닝화 추천. RunRepeat 랩 테스트 데이터, 발볼·평발 적합성, 가성비를 종합 분석한 TOP 리스트.`,
      intro: angles[kor].intro,
      faq: angles[kor].faq,
      filter: (s) => s.category === kor && hasMinimumData(s),
    };
  });
}

function attributeEntries(): MatrixEntry[] {
  return [
    {
      slug: 'wide-toebox',
      group: 'attribute',
      h1: '발볼 넓은 러너를 위한 러닝화 추천',
      metaTitle: '발볼 넓은 러닝화 추천 | 와이드 토박스 TOP',
      metaDescription:
        '한국 러너 절반 이상이 발볼 95mm 이상. 토박스가 75mm 이상이거나 와이드(2E/4E) 옵션이 있는 러닝화만 엄선했습니다.',
      intro:
        '한국인의 평균 발볼은 95~100mm로 서양인보다 넓습니다. 좁은 토박스는 모턴 신경종, 무지외반증, 발톱 멍을 유발합니다. 아래는 토박스 너비 75mm 이상이거나 공식 와이드 옵션이 있는 모델만 모았습니다.',
      faq: [
        {
          q: '와이드 옵션과 일반 모델 토박스가 넓은 것 중 어느 게 낫나요?',
          a: '와이드 옵션은 미드풋부터 전체적으로 넓혀 안정감이 좋습니다. 일반 모델 중 토박스만 넓은 경우는 발 앞쪽만 여유가 있어 핏이 다르므로 직접 신어보는 게 안전합니다.',
        },
        {
          q: '발볼이 넓은데 카본화도 가능한가요?',
          a: '나이키 알파플라이는 토박스가 비교적 넓고, 사우코니 엔돌핀 프로 시리즈도 한국 러너에게 평이 좋습니다. 본문 리스트에서 레이싱 카테고리를 확인하세요.',
        },
      ],
      filter: (s) => {
        if (!hasMinimumData(s)) return false;
        const fit = s.koreanFootFit;
        if (!fit) return false;
        return fit.toBoxWidth === 'wide' || fit.wideOptions === true;
      },
    },
    {
      slug: 'flat-feet',
      group: 'attribute',
      h1: '평발 러너를 위한 러닝화 추천',
      metaTitle: '평발 러닝화 추천 | 오버프로네이션 안정화 TOP',
      metaDescription:
        '평발·오버프로네이션 러너를 위한 안정화. 가이드레일, 3D 가이던스 등 부드러운 지지 시스템을 갖춘 모델만 모았습니다.',
      intro:
        '평발 러너는 착지 시 발목이 안쪽으로 무너지면서 무릎·고관절 정렬이 어긋날 수 있습니다. 단단한 미디얼 포스트보다는 가이드레일·3D 가이던스 같은 자연스러운 안정 기술이 최근 표준입니다. 평발 적합성 등급이 excellent/good인 모델만 추렸습니다.',
      faq: [
        {
          q: '평발인데 카본화 신어도 되나요?',
          a: '카본 플레이트가 자연스러운 안정성을 일부 제공하긴 하지만, 통증 이력이 있다면 안정화 + 보조기 조합이 안전합니다.',
        },
      ],
      filter: (s) => {
        if (!hasMinimumData(s)) return false;
        const c = s.koreanFootFit?.flatFootCompatibility;
        return c === 'excellent' || c === 'good';
      },
    },
    {
      slug: 'knee-protection',
      group: 'attribute',
      h1: '무릎 보호 러닝화 추천 — 러너스 니, ITBS 예방',
      metaTitle: '무릎 통증 러닝화 추천 | 러너스 니/ITBS TOP',
      metaDescription:
        '무릎 통증, 러너스 니, 장경인대증후군(ITBS) 예방에 좋은 러닝화. 충격흡수와 안정성을 모두 갖춘 모델 추천.',
      intro:
        '러너의 30~50%가 한 번 이상 무릎 통증을 경험합니다(2020 systematic review, PMC7740062). 두꺼운 쿠션과 적절한 안정성, 그리고 8mm 이상의 드롭이 무릎 부담을 줄이는 핵심 요소입니다. 무릎 부상 예방 등급이 excellent/good인 모델만 모았습니다.',
      faq: [
        {
          q: '무릎이 아픈데 계속 뛰어도 되나요?',
          a: '안 됩니다. 통증이 있다면 먼저 정형외과 진료를 받고 원인을 파악하세요. 신발은 보조 수단일 뿐 치료가 아닙니다.',
        },
        {
          q: '드롭이 낮은 신발이 무릎에 안 좋나요?',
          a: '낮은 드롭(0~4mm)은 종아리·아킬레스 부담은 늘리고 무릎 부담은 줄입니다. 이미 무릎이 약하다면 낮은 드롭이 유리할 수 있지만, 갑작스런 전환은 위험합니다.',
        },
      ],
      filter: (s) => {
        if (!hasMinimumData(s)) return false;
        const k = s.injuryPrevention?.kneeIssues;
        return k === 'excellent' || k === 'good';
      },
    },
    {
      slug: 'plantar-fasciitis',
      group: 'attribute',
      h1: '족저근막염 러닝화 추천',
      metaTitle: '족저근막염 러닝화 추천 | 아치 서포트 TOP',
      metaDescription:
        '족저근막염 러너를 위한 신발. 강한 아치 서포트, 단단한 힐 카운터, 적절한 드롭을 갖춘 모델만 추천.',
      intro:
        '족저근막염은 러너가 가장 많이 호소하는 만성 통증 중 하나입니다. 아치 서포트가 충분하고, 힐 카운터가 단단하며, 8mm 이상의 드롭으로 종아리 긴장을 완화하는 신발이 도움됩니다. 족저근막염 예방 등급 excellent/good 모델만 모았습니다.',
      faq: [
        {
          q: '족저근막염일 때 어떤 신발은 피해야 하나요?',
          a: '드롭 0~4mm의 미니멀화, 아치가 무너진 오래된 신발, 너무 부드러운 폼(폼이 발 아치를 받쳐주지 못함)은 피하세요.',
        },
      ],
      filter: (s) => {
        if (!hasMinimumData(s)) return false;
        const p = s.injuryPrevention?.plantarFasciitis;
        return p === 'excellent' || p === 'good';
      },
    },
    {
      slug: 'achilles',
      group: 'attribute',
      h1: '아킬레스건염 러닝화 추천',
      metaTitle: '아킬레스건염 러닝화 추천 | 드롭 8mm+ TOP',
      metaDescription:
        '아킬레스건염 러너를 위한 신발. 충분한 드롭과 부드러운 힐 영역으로 종아리 부담을 줄여줍니다.',
      intro:
        '아킬레스건염은 종아리 근력 부족과 갑작스런 훈련량 증가가 주원인입니다. 드롭이 높을수록(8~12mm) 아킬레스 부담이 줄어드는 경향이 있습니다. 아킬레스건염 예방 등급 excellent/good 모델만 추렸습니다.',
      faq: [
        {
          q: '제로드롭 신발이 아킬레스에 좋다는 얘기는 뭔가요?',
          a: '장기적으로 종아리 근력을 키우면 그렇지만, 이미 통증이 있는 상태에서 제로드롭으로 갈아타면 악화됩니다. 회복기에는 드롭 10mm 전후를 권장합니다.',
        },
      ],
      filter: (s) => {
        if (!hasMinimumData(s)) return false;
        const a = s.injuryPrevention?.achillesTendinopathy;
        return a === 'excellent' || a === 'good';
      },
    },
    {
      slug: 'shin-splints',
      group: 'attribute',
      h1: '정강이 통증(신 스플린트) 러닝화 추천',
      metaTitle: '정강이 통증 러닝화 추천 | 신 스플린트 예방 TOP',
      metaDescription:
        '신 스플린트(정강이 통증) 예방·회복에 도움되는 러닝화. 충격흡수와 적절한 안정성이 핵심입니다.',
      intro:
        '신 스플린트는 초보 러너와 훈련량을 급격히 늘린 러너에게 흔합니다. 충격흡수가 좋고 안정성이 있는 신발이 정강이 부담을 줄여줍니다. 신 스플린트 예방 등급 excellent/good 모델만 모았습니다.',
      faq: [
        {
          q: '신 스플린트가 있는데 카본화 신어도 되나요?',
          a: '권장하지 않습니다. 카본은 정강이 근육에 부담을 가중시킬 수 있어, 회복기에는 두꺼운 쿠션화가 안전합니다.',
        },
      ],
      filter: (s) => {
        if (!hasMinimumData(s)) return false;
        const sh = s.injuryPrevention?.shinSplints;
        return sh === 'excellent' || sh === 'good';
      },
    },
  ];
}

function priceEntries(): MatrixEntry[] {
  const tiers = [
    { slug: 'under-150k', limit: 150000, label: '15만원 이하' },
    { slug: 'under-200k', limit: 200000, label: '20만원 이하' },
    { slug: 'under-250k', limit: 250000, label: '25만원 이하' },
  ];
  return tiers.map(({ slug, limit, label }) => ({
    slug,
    group: 'price' as const,
    h1: `${label} 가성비 러닝화 추천`,
    metaTitle: `${label} 러닝화 추천 | 가성비 TOP`,
    metaDescription: `${label} 예산으로 살 수 있는 가성비 최고 러닝화. 한국 공식 사이트 정가 기준, 가성비 점수 8/10 이상 우선.`,
    intro: `예산이 제한적일 때 가장 중요한 건 가격 대비 가치입니다. ${label}로 살 수 있는 러닝화 중 km당 비용, 내구성, 한국 러너 적합성을 모두 고려해 추천했습니다. 가격은 한국 공식 사이트 MSRP 기준이며, 실제 구매는 시즌 할인을 활용하면 더 저렴합니다.`,
    faq: [
      {
        q: '왜 해외 직구 가격이 아닌 한국 공식 정가인가요?',
        a: '직구 가격은 환율·관세·배송비에 따라 변동이 크고 A/S가 어렵습니다. 한국 공식 정가를 기준으로 하되, 실제 구매 시 네이버 쇼핑·ABC마트 등에서 시즌 할인을 비교하세요.',
      },
      {
        q: '저렴한 신발이 부상 위험이 더 높나요?',
        a: '아닙니다. 가격과 부상 예방은 직접적 상관관계가 없습니다. 비싼 카본화가 오히려 부상 위험이 높다는 연구도 있습니다. 본인 발 특성에 맞는 신발이 가장 안전합니다.',
      },
    ],
    filter: (s) => hasMinimumData(s) && (s.price ?? Infinity) <= limit,
  }));
}

function distanceEntries(): MatrixEntry[] {
  return [
    {
      slug: 'marathon',
      group: 'distance',
      h1: '풀마라톤(42.195km) 러닝화 추천',
      metaTitle: '풀마라톤 러닝화 추천 | 42km 카본/쿠션화 TOP',
      metaDescription:
        '풀마라톤 완주·기록 단축에 적합한 러닝화. 카본 슈퍼슈즈와 두꺼운 쿠션화 중 본인 페이스에 맞는 선택 가이드.',
      intro:
        '풀마라톤은 4시간 이상 발에 충격이 가해지는 종목입니다. 서브 3:30 이하 러너에게는 카본 플레이트 슈즈가 4~6% 러닝 이코노미를 향상시키지만, 그 이상 페이스에서는 두꺼운 쿠션화가 후반 페이스 유지에 더 유리할 수 있습니다. 본인 목표 페이스와 발 특성에 맞는 모델을 선택하세요.',
      faq: [
        {
          q: '서브 4 러너인데 카본화가 의미 있나요?',
          a: 'km당 5:40 이상에서는 카본 반발 활용이 어려워 효율이 떨어진다는 연구가 있습니다. 안정적 쿠션화로 후반 페이스 유지가 더 안전한 선택입니다.',
        },
        {
          q: '풀마라톤 신발은 얼마나 일찍 적응해야 하나요?',
          a: '최소 4~6주, 100km 이상 신어 본 신발로 출전하세요. 새 신발로 출전하면 물집·아킬레스 통증 위험이 큽니다.',
        },
        {
          q: '대회용과 훈련용을 같은 신발로 써도 되나요?',
          a: '카본화는 폼 내구성이 200~300km로 짧아 대회 전용을 권장합니다. 일반 쿠션화는 동일 모델로 훈련/대회 모두 가능합니다.',
        },
      ],
      filter: (s) => {
        if (!hasMinimumData(s)) return false;
        if (s.category !== '레이싱' && s.category !== '쿠션화') return false;
        return true;
      },
    },
    {
      slug: 'half-marathon',
      group: 'distance',
      h1: '하프마라톤(21.0975km) 러닝화 추천',
      metaTitle: '하프마라톤 러닝화 추천 | 21km Best Picks',
      metaDescription:
        '하프마라톤에 적합한 러닝화. 가벼운 데일리 트레이너부터 카본화까지 페이스별 추천.',
      intro:
        '하프마라톤은 풀마라톤보다 카본화 적용 폭이 넓습니다. 서브 1:40 이하라면 카본화가 효과적이고, 그 이상이면 가벼운 데일리 트레이너가 안전합니다. 본문 추천은 무게 280g 이하 또는 카본 모델 중심입니다.',
      faq: [
        {
          q: '하프 첫 출전인데 어떤 신발이 좋을까요?',
          a: '무리하지 말고 평소 훈련에 쓰던 데일리 트레이너로 출전하세요. 새 신발이나 카본화는 부상 위험이 있습니다.',
        },
        {
          q: '하프에 카본화가 필요한가요?',
          a: '필수는 아닙니다. PB(개인 최고 기록) 갱신을 노린다면 도움되지만, 완주가 목표라면 일반 트레이너가 더 안전하고 편합니다.',
        },
      ],
      filter: (s) => {
        if (!hasMinimumData(s)) return false;
        if (s.category === '입문화' || s.category === '안정화') return false;
        const w = s.specs?.weight ?? 999;
        return w <= 290 || s.biomechanics?.carbonPlate === true;
      },
    },
    {
      slug: '10k',
      group: 'distance',
      h1: '10K 러닝화 추천 — 가벼움과 반응성',
      metaTitle: '10K 러닝화 추천 | 가벼운 러닝화 TOP',
      metaDescription:
        '10K 대회·인터벌·템포런에 적합한 가볍고 반응성 좋은 러닝화. 무게 270g 이하 또는 카본 슈퍼슈즈.',
      intro:
        '10K는 짧은 거리에 강도가 높아 가벼움과 반응성이 중요합니다. 무게 270g 이하의 가벼운 트레이너 또는 카본 슈퍼슈즈가 적합합니다. 단, 평소 약한 발목·아킬레스라면 무게보다 안정성을 우선하세요.',
      faq: [
        {
          q: '10K에 카본화는 과한가요?',
          a: '대회 PB 노린다면 의미 있습니다. 하지만 km당 5:30 이상이면 효율이 떨어지므로 일반 가벼운 트레이너로 충분합니다.',
        },
      ],
      filter: (s) => {
        if (!hasMinimumData(s)) return false;
        if (s.category === '입문화' || s.category === '안정화') return false;
        const w = s.specs?.weight ?? 999;
        return w <= 270 || s.biomechanics?.carbonPlate === true;
      },
    },
  ];
}

function brandCategoryEntries(): MatrixEntry[] {
  const out: MatrixEntry[] = [];
  const brands = Object.keys(brandSlugMap);
  const categories = Object.keys(categorySlugMap);

  for (const brand of brands) {
    for (const category of categories) {
      const matches = allShoes.filter(
        (s) => s.brand === brand && s.category === category && hasMinimumData(s),
      );
      if (matches.length < 3) continue;

      const brandSlug = brandSlugMap[brand];
      const catSlug = categorySlugMap[category];
      const slug = `${brandSlug}-${catSlug}`;

      out.push({
        slug,
        group: 'brand-category',
        h1: `${brand} ${category} 러닝화 추천 TOP`,
        metaTitle: `${brand} ${category} 러닝화 추천 | Best ${brand} ${categoryEnglish[category]}`,
        metaDescription: `${brand}의 ${category} 러닝화 라인업을 한국 러너 관점에서 비교 분석. 토박스, 가성비, 부상 예방까지 종합 평가.`,
        intro: `${brand}는 ${category} 카테고리에서 ${matches.length}개 모델을 운영합니다. 같은 브랜드 안에서도 모델별로 토박스, 쿠셔닝, 가격대가 크게 다르므로 본인 러닝 목적과 발 특성에 맞는 선택이 중요합니다. 아래는 RunRepeat 랩 데이터와 한국 러너 적합성을 종합한 비교입니다.`,
        faq: [
          {
            q: `${brand} ${category} 라인 중 입문자에게 가장 무난한 모델은?`,
            a: `상위 추천 리스트에서 가성비 점수가 가장 높고 토박스가 표준 이상인 모델을 선택하세요. 본문 표를 참고하면 한눈에 비교할 수 있습니다.`,
          },
        ],
        filter: (s) => s.brand === brand && s.category === category && hasMinimumData(s),
      });
    }
  }
  return out;
}

let cached: MatrixEntry[] | null = null;

export function getAllMatrices(): MatrixEntry[] {
  if (cached) return cached;
  const all = [
    ...categoryEntries(),
    ...attributeEntries(),
    ...priceEntries(),
    ...distanceEntries(),
    ...brandCategoryEntries(),
  ];
  cached = all.filter((m) => {
    const matched = allShoes.filter(m.filter);
    return matched.length >= 3;
  });
  return cached;
}

export function getMatrixBySlug(slug: string): MatrixEntry | undefined {
  return getAllMatrices().find((m) => m.slug === slug);
}

export function getMatricesForShoe(shoe: Shoe): MatrixEntry[] {
  return getAllMatrices().filter((m) => m.filter(shoe));
}

export function getMatrixShoes(entry: MatrixEntry): Shoe[] {
  return allShoes
    .filter(entry.filter)
    .sort((a, b) => {
      const av = a.priceAnalysis?.valueRating ?? 0;
      const bv = b.priceAnalysis?.valueRating ?? 0;
      if (bv !== av) return bv - av;
      return (b.rating ?? 0) - (a.rating ?? 0);
    });
}

export { isCompleteShoe };
