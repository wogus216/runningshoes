import Link from 'next/link';
import Image from 'next/image';
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
      <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--accent-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,248,255,0.94))] shadow-[0_20px_40px_-34px_rgba(8,18,38,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-34px_rgba(8,18,38,0.24)]">
        {thumbnail ? (
          <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
            <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-[linear-gradient(90deg,#38bdf8_0%,#0ea5e9_58%,#f97316_100%)]" />
            <Image
              src={thumbnail}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              unoptimized
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700 backdrop-blur">
              {categoryLabels[post.category]}
            </div>
          </div>
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200">
            <span className="text-4xl text-stone-400">
              {categoryLabels[post.category]}
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex items-center justify-between gap-3 text-xs text-slate-500">
            <span>{publishDate}</span>
            <span>{post.readingTime}분 읽기</span>
          </div>

          <h3 className="mb-3 line-clamp-2 text-xl font-black tracking-tight text-slate-950 transition-colors group-hover:text-sky-800">
            {post.title}
          </h3>

          <p className="mb-5 flex-1 line-clamp-3 text-sm leading-7 text-slate-600">
            {post.description}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-sky-100 pt-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-50 text-[10px] font-bold text-sky-700">
              {post.author.charAt(0)}
              </div>
              <span>by <b className="font-semibold text-slate-700">{post.author}</b></span>
            </div>
            {post.featured && (
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
                추천
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
