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

export const categoryLabels: Record<BlogCategory, string> = {
  guide: '가이드',
  review: '리뷰',
  news: '뉴스',
  tips: '팁',
} as const;

export const categoryOrder: BlogCategory[] = ['guide', 'review', 'tips', 'news'];
