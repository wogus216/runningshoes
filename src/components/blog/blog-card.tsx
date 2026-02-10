import Link from 'next/link';
import { BlogPost, categoryLabels } from '@/types/blog';
import { getPostThumbnail } from '@/lib/data/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const publishDate = new Date(post.publishedAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const thumbnail = getPostThumbnail(post);

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* 썸네일 */}
        {thumbnail ? (
          <div className="aspect-[16/9] overflow-hidden bg-gray-100">
            <img
              src={thumbnail}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center">
            <span className="text-4xl text-stone-400">
              {categoryLabels[post.category]}
            </span>
          </div>
        )}

        {/* 콘텐츠 */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-base font-bold text-gray-900 group-hover:text-gray-600 line-clamp-2 transition-colors mb-2">
            {post.title}
          </h3>

          <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-1">
            {post.description}
          </p>

          <div className="text-xs text-gray-400 mt-auto">
            <span>{publishDate}</span>
            <span className="mx-1">&middot;</span>
            <span>{post.readingTime}분 읽기</span>
          </div>
        </div>

        {/* 하단 구분선 + 작성자/태그 */}
        <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center text-[10px] font-bold text-stone-500">
              {post.author.charAt(0)}
            </div>
            <span>by <b className="font-semibold text-gray-700">{post.author}</b></span>
          </div>
          {post.featured && (
            <span className="text-xs font-medium text-teal-600">
              추천
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}
