import Link from 'next/link';
import { BlogPost, categoryLabels } from '@/types/blog';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const publishDate = new Date(post.publishedAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="section-card overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
        <div className="p-5 space-y-3">
          {/* 카테고리 배지 */}
          <div className="flex items-center gap-2">
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
              {categoryLabels[post.category]}
            </span>
            {post.featured && (
              <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
                추천
              </span>
            )}
          </div>

          {/* 제목 */}
          <h3 className="text-lg font-bold text-primary group-hover:text-accent line-clamp-2 transition-colors">
            {post.title}
          </h3>

          {/* 설명 */}
          <p className="text-sm text-secondary line-clamp-2">{post.description}</p>

          {/* 메타 정보 */}
          <div className="flex items-center gap-4 text-xs text-tertiary pt-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readingTime}분</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
