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
}

/**
 * 목록/카드용 경량 포스트 메타 (본문 content 제외, thumbnail 사전 해석).
 * 블로그 목록 페이지가 192편 전체 content를 클라이언트로 직렬화하지 않도록 하기 위한 projection.
 */
export type BlogPostMeta = Omit<BlogPost, 'content' | 'thumbnail'> & {
  thumbnail: string | null;
};

export const categoryLabels: Record<BlogCategory, string> = {
  guide: '가이드',
  review: '리뷰',
  news: '뉴스',
  tips: '팁',
} as const;

export const categoryOrder: BlogCategory[] = ['guide', 'review', 'tips', 'news'];
