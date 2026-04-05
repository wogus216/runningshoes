export type TechnologyCategory = 'midsole' | 'plate' | 'cushioning' | 'stability' | 'upper' | 'outsole';

export interface BrandTechnology {
  id: string;
  name: string;
  nameKo?: string; // 한글명 (선택)
  category: TechnologyCategory;
  year?: number; // 출시 연도
  description: string; // 한줄 요약
  benefits: string[]; // 장점 목록
  scienceExplanation: string; // 기술 원리 상세 설명
  performanceRating: number; // 성능 점수 (1-10)
  usedInShoes: string[]; // 적용 신발 slug 목록
  image?: string; // 기술 이미지 URL
  characteristics?: {
    cushioning?: number; // 쿠셔닝 점수 (1-10)
    responsiveness?: number; // 반발력 점수 (1-10)
    durability?: number; // 내구성 점수 (1-10)
    weight?: number; // 경량성 점수 (1-10)
  };
}

export interface Brand {
  id: string; // 'nike', 'adidas' (URL용)
  name: string; // 'Nike', 'Adidas' (표시용)
  nameKo?: string; // '나이키' (한글명)
  logo?: string; // 로고 이미지 URL
  tagline: string; // 브랜드 슬로건
  description: string; // 브랜드 설명
  technologies: BrandTechnology[];
  founded?: number; // 설립 연도
  headquarters?: string; // 본사 위치
  website?: string; // 공식 웹사이트
}

// 카테고리 라벨 및 색상
export const categoryLabels: Record<TechnologyCategory, { label: string; color: string }> = {
  midsole: { label: '미드솔', color: 'accent' },
  plate: { label: '플레이트', color: 'positive' },
  cushioning: { label: '쿠셔닝', color: 'warning' },
  stability: { label: '안정화', color: 'negative' },
  upper: { label: '어퍼', color: 'secondary' },
  outsole: { label: '아웃솔', color: 'accent' },
};

// 색상 매핑 (Tailwind 클래스)
export const categoryColorClasses: Record<TechnologyCategory, { bg: string; text: string; border: string }> = {
  midsole: {
    bg: 'bg-sky-50',
    text: 'text-sky-700',
    border: 'border-sky-200',
  },
  plate: {
    bg: 'bg-slate-100',
    text: 'text-slate-700',
    border: 'border-slate-200',
  },
  cushioning: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
  },
  stability: {
    bg: 'bg-cyan-50',
    text: 'text-cyan-700',
    border: 'border-cyan-200',
  },
  upper: {
    bg: 'bg-stone-100',
    text: 'text-stone-700',
    border: 'border-stone-200',
  },
  outsole: {
    bg: 'bg-sky-50',
    text: 'text-sky-700',
    border: 'border-sky-200',
  },
};
