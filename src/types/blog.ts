export type BlogCategory = 'guide' | 'review' | 'news' | 'tips';

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogEvent {
  name: string;
  startDate: string;
  endDate?: string;
  location: {
    name: string;
    address?: string;
  };
  organizer?: string;
  url?: string;
  offers?: Array<{
    name: string;
    priceKrw: number;
    availabilityEnds?: string;
    url?: string;
  }>;
}

/** 대회 핵심 카드 한 장 */
export interface RaceFact {
  label: string;   // '대회일'
  value: string;   // '12월 6일'
  sub?: string;    // '일 · 07:30'
}

/** 이 대회만의 것 한 항목 */
export interface RaceHighlight {
  badge: string;   // '3×' · '12월' · '국내 유일' — 순번(01/02/03) 금지
  title: string;
  desc: string;
}

/** 고도 프로파일 한 점 */
export interface RaceElevationPoint {
  km: number;
  m: number;
}

/**
 * 대회 글 구조 데이터. 이 필드가 있는 글만 새 구성 표준으로 렌더되고
 * validate 검사 대상이 된다. 기존 글은 필드가 없어 영향받지 않는다.
 * 날짜는 전부 KST 기준 문자열 — 'YYYY-MM-DD' 또는 'YYYY-MM-DDTHH:mm'.
 */
export interface RaceMeta {
  /** 화면용 제목. 검색용 `title` 과 별개이며 40자 이하 */
  displayTitle: string;
  displaySubtitle?: string;
  raceDate: string;
  registrationStart?: string;
  registrationEnd?: string;
  registrationVia?: string;
  action?: { what: string; how: string };
  facts: RaceFact[];
  highlights: RaceHighlight[];
  elevation?: RaceElevationPoint[];
  /** 고도 수치의 출처. elevation 이 있으면 반드시 함께 적는다 */
  elevationSource?: string;
  marathonId?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: BlogCategory;
  tags: string[];
  readingTime: number;
  featured?: boolean;
  thumbnail?: string;
  faqs?: BlogFaq[];
  event?: BlogEvent;
  raceMeta?: RaceMeta;
}

/**
 * 목록/카드용 경량 포스트 메타 (본문 content 제외, thumbnail 사전 해석).
 * 블로그 목록 페이지가 192편 전체 content를 클라이언트로 직렬화하지 않도록 하기 위한 projection.
 */
export type BlogPostMeta = Omit<BlogPost, 'content' | 'thumbnail' | 'raceMeta'> & {
  thumbnail: string | null;
};

/**
 * /blog 초기 서버 직렬화 카드 수 — 이 수만큼만 HTML/RSC에 실리고,
 * 나머지는 /blog-index.json 지연 로드. ('use client' 모듈에 두면
 * 서버 컴포넌트에서 클라이언트 참조로 변질되므로 여기(공유 모듈)에 정의)
 */
export const BLOG_PAGE_SIZE = 24;

/**
 * 목록 카드가 실제로 쓰는 최소 필드 (faqs/tags 등 제외).
 * /blog 인덱스 초기 직렬화와 /blog-index.json 페이로드 절감용.
 */
export type BlogCardMeta = Pick<
  BlogPostMeta,
  | 'id'
  | 'slug'
  | 'title'
  | 'description'
  | 'author'
  | 'category'
  | 'publishedAt'
  | 'readingTime'
  | 'thumbnail'
  | 'featured'
>;

export const categoryLabels: Record<BlogCategory, string> = {
  guide: '가이드',
  review: '리뷰',
  news: '뉴스',
  tips: '팁',
} as const;

export const categoryOrder: BlogCategory[] = ['guide', 'review', 'tips', 'news'];
