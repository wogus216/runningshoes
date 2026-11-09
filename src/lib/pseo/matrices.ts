import type { Shoe } from '@/types/shoe';
import { shoes as allShoes } from '@/lib/data/shoes';

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
  evidenceGuide?: boolean;
  faq: FaqItem[];
};

const brandSlugMap: Record<string, string> = {
  Nike: 'nike',
  Adidas: 'adidas',
  Asics: 'asics',
  'New Balance': 'new-balance',
  Hoka: 'hoka',
  Brooks: 'brooks',
  Diadora: 'diadora',
  Saucony: 'saucony',
  On: 'on',
  Mizuno: 'mizuno',
  Prospecs: 'prospecs',
  Puma: 'puma',
  Kiprun: 'kiprun',
  'Li-Ning': 'li-ning',
  Merrell: 'merrell',
  Salomon: 'salomon',
  'Under Armour': 'under-armour',
};

const categorySlugMap: Record<string, string> = {
  입문화: 'beginner',
  데일리: 'daily-trainer',
  쿠션화: 'max-cushion',
  레이싱: 'racing',
  안정화: 'stability',
  트레일: 'trail',
};

const categoryEnglish: Record<string, string> = {
  입문화: 'Beginner',
  데일리: 'Daily Trainer',
  쿠션화: 'Max Cushion',
  레이싱: 'Racing',
  안정화: 'Stability',
  트레일: 'Trail',
};

function hasMinimumData(s: Shoe): boolean {
  return Boolean(s.image && s.price && s.description && s.specs);
}

function categoryEntries(): MatrixEntry[] {
  // 편집 분류의 뜻을 설명한다. 임상 효과나 일률적 페이스·교체거리 기준으로 확장하지 않는다.
  const angles: Record<string, { intro: string; faq: FaqItem[] }> = {
    입문화: { intro: '처음 고르는 러닝화는 주로 뛸 노면·용도와 예산으로 후보를 좁히고 착화를 비교하세요. 아래는 사이트가 입문화로 분류한 모델입니다. 분류나 높은 쿠셔닝 점수가 개인의 안전을 보장하지는 않습니다.', faq: [{ q: '처음부터 카본화를 신어도 되나요?', a: '플레이트 유무 하나로 입문자의 적합성을 판정하지 않습니다. 가격·용도·착화감과 낯선 구조의 느낌을 함께 비교하세요. 특정 경험 개월 수를 모든 사람의 전환 기준으로 쓰지 않습니다.' }] },
    데일리: { intro: '일상 훈련용으로 분류한 트레이너를 비교합니다. 조깅과 빠른 훈련에서 느껴지는 감각은 모델과 러너마다 다릅니다. 한 켤레의 수명이나 모든 페이스 적합성을 카테고리만으로 보장하지 않습니다.', faq: [{ q: '매일 뛰면 여러 켤레가 필수인가요?', a: '주간 거리 하나로 필요한 켤레 수를 정하지 않습니다. 노면과 훈련 목적이 다른지, 현재 신발이 맞는지, 예산 안에서 관리할 수 있는지를 먼저 확인하세요.' }] },
    쿠션화: { intro: '쿠셔닝을 주요 특징으로 분류한 모델입니다. 폼 두께·경도·충격흡수·에너지 리턴은 서로 다른 항목입니다. 쿠션이 많다는 사실을 무릎 보호나 부상 예방 효과로 해석하지 않습니다.', faq: [{ q: '쿠션이 많으면 무릎 통증에 더 좋은가요?', a: '이 목록으로 모델별 치료·예방 효과를 판정할 수 없습니다. 통증이 있다면 신발의 쿠셔닝 점수만으로 대처하지 말고 증상과 훈련 변화를 함께 상담하세요.' }] },
    레이싱: { intro: '레이스용으로 분류한 모델의 무게·구조·가격을 비교합니다. 카본 플레이트가 있는 모델도 개인 반응은 다르며, 카테고리 전체에 같은 기록 향상률이나 수명을 부여하지 않습니다. 대회 장비 규정은 종목과 해당 모델의 최신 승인 상태를 별도로 확인하세요.', faq: [{ q: '어느 페이스부터 효과가 있나요?', a: '이 데이터는 모든 모델과 러너에 적용되는 페이스 경계값을 입증하지 않습니다. 자신의 훈련 조건에서 착화와 주행 감각을 비교하고, 높은 가격이나 플레이트 유무를 효과 보장으로 읽지 마세요.' }] },
    안정화: { intro: '웨지·가이드레일·넓은 베이스 등 지지 구조를 특징으로 분류한 모델입니다. 안정화 분류와 에디터의 안정성 점수는 평발의 치료나 특정 부상 예방 효과를 뜻하지 않습니다.', faq: [{ q: '평발이면 안정화를 골라야 하나요?', a: '아치 모양 하나로 모델을 처방하지 않습니다. 이 목록은 구조 비교용이며 개인별 임상 적합성을 판정하지 않습니다. 통증이나 보조기 사용이 있다면 착화와 진료 상담을 함께 진행하세요.' }] },
    트레일: { intro: '비포장 주행용으로 분류한 모델입니다. 러그·고무·발 보호 구조와 실제 노면을 함께 비교하세요. 모든 트레일화에 록 플레이트가 있는 것은 아니며, 젖은 바위·빙판 접지를 분류명만으로 보장하지 않습니다.', faq: [{ q: '카본 트레일화면 접지도 더 좋나요?', a: '플레이트와 아웃솔 고무·러그는 서로 다른 구조입니다. 플레이트 유무만으로 접지나 지형 적합성을 판정하지 말고 개별 모델의 구조와 테스트 노면을 확인하세요.' }] },
  };

  return (Object.keys(categorySlugMap) as Array<keyof typeof categorySlugMap>).map((kor) => {
    const slug = `${categorySlugMap[kor]}`;
    const eng = categoryEnglish[kor];
    return {
      slug,
      group: 'category' as const,
      h1: `${kor} 러닝화 추천 TOP — 한국 러너 관점 분석`,
      metaTitle: `${kor} 러닝화 추천 TOP | ${eng} Best Picks 2026`,
      metaDescription: `한국 러너를 위한 ${kor} 러닝화 추천. 입력된 스펙과 에디터 평가로 비교하는 목록입니다. 출처와 측정 조건은 개별 모델에서 확인하세요.`,
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
        '토박스가 넓게 분류되거나 와이드 옵션 정보가 있는 러닝화를 비교합니다. 개인 착화와 판매 폭은 별도로 확인하세요.',
      intro:
        '맨발 너비와 신발 내부 측정 너비는 직접 환산할 수 없습니다. 아래는 너비 등급 또는 와이드 옵션 정보로 모은 비교 후보이며, 개인 착화를 보장하는 목록이 아닙니다.',
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
      slug: "flat-feet",
      group: 'attribute',
      evidenceGuide: true,
      h1: "평발이 있을 때 신발 선택",
      metaTitle: "평발과 러닝화 | 근거와 확인할 점",
      metaDescription: "평발이 있을 때 신발 선택에서 확인할 점과 제품별 효과를 단정할 수 없는 이유를 안내합니다.",
      intro: '신발의 쿠셔닝·드롭·안정성만으로 개별 모델의 치료 또는 부상 예방 효과를 순위로 매길 수 없습니다. 기존 적합 등급에 연결된 모델별 임상 근거가 확인되지 않아 제품 TOP 목록을 제공하지 않습니다.',
      faq: [
        { q: '어떤 신발이 맞는지 어떻게 확인하나요?', a: '현재 신는 신발, 통증이 나타나는 상황, 최근 훈련 변화, 착화 시 압박이나 불편감을 정리해 의료진과 상담하세요. 발 모양이나 특정 드롭 숫자 하나로 신발을 처방하지 않습니다.' },
        { q: '신발 유형 연구가 개별 모델의 효과도 입증하나요?', a: '아닙니다. 2022년 Cochrane 문헌고찰은 신발 유형과 발 자세에 따른 선택을 비교한 연구로, 연구 검색은 2021년 6월까지입니다. 현재 판매 모델별 부상 예방 효과를 평가한 자료가 아닙니다.' },
      ],
      filter: () => false,
    },
    {
      slug: "knee-protection",
      group: 'attribute',
      evidenceGuide: true,
      h1: "무릎 통증이 있을 때 신발 선택",
      metaTitle: "무릎 통증과 러닝화 | 근거와 확인할 점",
      metaDescription: "무릎 통증이 있을 때 신발 선택에서 확인할 점과 제품별 효과를 단정할 수 없는 이유를 안내합니다.",
      intro: '신발의 쿠셔닝·드롭·안정성만으로 개별 모델의 치료 또는 부상 예방 효과를 순위로 매길 수 없습니다. 기존 적합 등급에 연결된 모델별 임상 근거가 확인되지 않아 제품 TOP 목록을 제공하지 않습니다.',
      faq: [
        { q: '어떤 신발이 맞는지 어떻게 확인하나요?', a: '현재 신는 신발, 통증이 나타나는 상황, 최근 훈련 변화, 착화 시 압박이나 불편감을 정리해 의료진과 상담하세요. 발 모양이나 특정 드롭 숫자 하나로 신발을 처방하지 않습니다.' },
        { q: '신발 유형 연구가 개별 모델의 효과도 입증하나요?', a: '아닙니다. 2022년 Cochrane 문헌고찰은 신발 유형과 발 자세에 따른 선택을 비교한 연구로, 연구 검색은 2021년 6월까지입니다. 현재 판매 모델별 부상 예방 효과를 평가한 자료가 아닙니다.' },
      ],
      filter: () => false,
    },
    {
      slug: "plantar-fasciitis",
      group: 'attribute',
      evidenceGuide: true,
      h1: "족저근막염이 있을 때 신발 선택",
      metaTitle: "족저근막염과 러닝화 | 근거와 확인할 점",
      metaDescription: "족저근막염이 있을 때 신발 선택에서 확인할 점과 제품별 효과를 단정할 수 없는 이유를 안내합니다.",
      intro: '신발의 쿠셔닝·드롭·안정성만으로 개별 모델의 치료 또는 부상 예방 효과를 순위로 매길 수 없습니다. 기존 적합 등급에 연결된 모델별 임상 근거가 확인되지 않아 제품 TOP 목록을 제공하지 않습니다.',
      faq: [
        { q: '어떤 신발이 맞는지 어떻게 확인하나요?', a: '현재 신는 신발, 통증이 나타나는 상황, 최근 훈련 변화, 착화 시 압박이나 불편감을 정리해 의료진과 상담하세요. 발 모양이나 특정 드롭 숫자 하나로 신발을 처방하지 않습니다.' },
        { q: '신발 유형 연구가 개별 모델의 효과도 입증하나요?', a: '아닙니다. 2022년 Cochrane 문헌고찰은 신발 유형과 발 자세에 따른 선택을 비교한 연구로, 연구 검색은 2021년 6월까지입니다. 현재 판매 모델별 부상 예방 효과를 평가한 자료가 아닙니다.' },
      ],
      filter: () => false,
    },
    {
      slug: "achilles",
      group: 'attribute',
      evidenceGuide: true,
      h1: "아킬레스건 통증이 있을 때 신발 선택",
      metaTitle: "아킬레스건 통증과 러닝화 | 근거와 확인할 점",
      metaDescription: "아킬레스건 통증이 있을 때 신발 선택에서 확인할 점과 제품별 효과를 단정할 수 없는 이유를 안내합니다.",
      intro: '신발의 쿠셔닝·드롭·안정성만으로 개별 모델의 치료 또는 부상 예방 효과를 순위로 매길 수 없습니다. 기존 적합 등급에 연결된 모델별 임상 근거가 확인되지 않아 제품 TOP 목록을 제공하지 않습니다.',
      faq: [
        { q: '어떤 신발이 맞는지 어떻게 확인하나요?', a: '현재 신는 신발, 통증이 나타나는 상황, 최근 훈련 변화, 착화 시 압박이나 불편감을 정리해 의료진과 상담하세요. 발 모양이나 특정 드롭 숫자 하나로 신발을 처방하지 않습니다.' },
        { q: '신발 유형 연구가 개별 모델의 효과도 입증하나요?', a: '아닙니다. 2022년 Cochrane 문헌고찰은 신발 유형과 발 자세에 따른 선택을 비교한 연구로, 연구 검색은 2021년 6월까지입니다. 현재 판매 모델별 부상 예방 효과를 평가한 자료가 아닙니다.' },
      ],
      filter: () => false,
    },
    {
      slug: "shin-splints",
      group: 'attribute',
      evidenceGuide: true,
      h1: "정강이 통증이 있을 때 신발 선택",
      metaTitle: "정강이 통증과 러닝화 | 근거와 확인할 점",
      metaDescription: "정강이 통증이 있을 때 신발 선택에서 확인할 점과 제품별 효과를 단정할 수 없는 이유를 안내합니다.",
      intro: '신발의 쿠셔닝·드롭·안정성만으로 개별 모델의 치료 또는 부상 예방 효과를 순위로 매길 수 없습니다. 기존 적합 등급에 연결된 모델별 임상 근거가 확인되지 않아 제품 TOP 목록을 제공하지 않습니다.',
      faq: [
        { q: '어떤 신발이 맞는지 어떻게 확인하나요?', a: '현재 신는 신발, 통증이 나타나는 상황, 최근 훈련 변화, 착화 시 압박이나 불편감을 정리해 의료진과 상담하세요. 발 모양이나 특정 드롭 숫자 하나로 신발을 처방하지 않습니다.' },
        { q: '신발 유형 연구가 개별 모델의 효과도 입증하나요?', a: '아닙니다. 2022년 Cochrane 문헌고찰은 신발 유형과 발 자세에 따른 선택을 비교한 연구로, 연구 검색은 2021년 6월까지입니다. 현재 판매 모델별 부상 예방 효과를 평가한 자료가 아닙니다.' },
      ],
      filter: () => false,
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
      intro: '거리별로 비교할 후보를 편집 기준으로 모은 목록입니다. 필터는 임상 효과나 개인의 최적 페이스를 입증한 기준이 아닙니다. 러닝 용도·예산·착화감과 개별 모델의 출처를 함께 확인하세요.',
      faq: [
        {
          q: '서브 4 러너인데 카본화가 의미 있나요?',
          a: '목표 기록이나 거리만으로 특정 모델의 효과와 안전을 보장하지 않습니다. 평소 훈련에서 착화와 주행 감각을 확인한 신발을 비교하고, 낯선 모델을 대회에서 처음 사용하지 않도록 준비하세요.',
        },
        {
          q: '풀마라톤 신발은 얼마나 일찍 적응해야 하나요?',
          a: '목표 기록이나 거리만으로 특정 모델의 효과와 안전을 보장하지 않습니다. 평소 훈련에서 착화와 주행 감각을 확인한 신발을 비교하고, 낯선 모델을 대회에서 처음 사용하지 않도록 준비하세요.',
        },
        {
          q: '대회용과 훈련용을 같은 신발로 써도 되나요?',
          a: '목표 기록이나 거리만으로 특정 모델의 효과와 안전을 보장하지 않습니다. 평소 훈련에서 착화와 주행 감각을 확인한 신발을 비교하고, 낯선 모델을 대회에서 처음 사용하지 않도록 준비하세요.',
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
      intro: '거리별로 비교할 후보를 편집 기준으로 모은 목록입니다. 필터는 임상 효과나 개인의 최적 페이스를 입증한 기준이 아닙니다. 러닝 용도·예산·착화감과 개별 모델의 출처를 함께 확인하세요.',
      faq: [
        {
          q: '하프 첫 출전인데 어떤 신발이 좋을까요?',
          a: '목표 기록이나 거리만으로 특정 모델의 효과와 안전을 보장하지 않습니다. 평소 훈련에서 착화와 주행 감각을 확인한 신발을 비교하고, 낯선 모델을 대회에서 처음 사용하지 않도록 준비하세요.',
        },
        {
          q: '하프에 카본화가 필요한가요?',
          a: '목표 기록이나 거리만으로 특정 모델의 효과와 안전을 보장하지 않습니다. 평소 훈련에서 착화와 주행 감각을 확인한 신발을 비교하고, 낯선 모델을 대회에서 처음 사용하지 않도록 준비하세요.',
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
      intro: '거리별로 비교할 후보를 편집 기준으로 모은 목록입니다. 필터는 임상 효과나 개인의 최적 페이스를 입증한 기준이 아닙니다. 러닝 용도·예산·착화감과 개별 모델의 출처를 함께 확인하세요.',
      faq: [
        {
          q: '10K에 카본화는 과한가요?',
          a: '목표 기록이나 거리만으로 특정 모델의 효과와 안전을 보장하지 않습니다. 평소 훈련에서 착화와 주행 감각을 확인한 신발을 비교하고, 낯선 모델을 대회에서 처음 사용하지 않도록 준비하세요.',
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
        metaDescription: `${brand}의 ${category} 러닝화 라인업을 한국 러너 관점에서 비교 분석. 토박스, 가성비, 제품 구조까지 비교.`,
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
    return m.evidenceGuide || matched.length >= 3;
  });
  return cached;
}

export function getMatrixBySlug(slug: string): MatrixEntry | undefined {
  return getAllMatrices().find((m) => m.slug === slug);
}

export function getMatricesForShoe(shoe: Shoe): MatrixEntry[] {
  return getAllMatrices().filter((m) => m.filter(shoe));
}

/**
 * `/best/[slug]` 가 실제로 렌더하는 신발 수.
 *
 * 필터가 잡는 모집단과 페이지가 보여주는 수는 다르다 — 부상 매트릭스는 등급
 * excellent/good 을 잡느라 75~85% 를 통과시킨다. 그 숫자를 다른 화면에서 "N종"이라 쓰면
 * 눌러 들어온 사용자가 보는 12개와 어긋난다. **모집단이 아니라 이 값을 노출할 것.**
 */
export const BEST_PAGE_SHOE_LIMIT = 12;

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

