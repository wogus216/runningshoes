import Link from 'next/link';
import Image from 'next/image';
import { BlogCardMeta, categoryLabels } from '@/types/blog';
import { img } from '@/lib/image';

interface BlogCardProps {
  post: BlogCardMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  const publishDate = new Date(post.publishedAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const thumbnail = post.thumbnail;

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="flex h-full flex-col overflow-hidden rounded-[4px] border border-border bg-background transition-colors duration-200 hover:bg-[var(--accent-soft)]">
        {thumbnail ? (
          <div className="relative aspect-[1200/630] overflow-hidden border-b border-border bg-gray-100">
            <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-[var(--accent)]" />
            <Image
              src={img(thumbnail)}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              unoptimized
            />
          </div>
        ) : (
          <div className="flex aspect-[1200/630] items-center justify-center border-b border-border bg-gradient-to-br from-stone-100 to-stone-200">
            <span className="text-4xl text-stone-400">
              {categoryLabels[post.category]}
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex items-center justify-between gap-3 font-mono text-xs tabular-nums text-slate-500">
            <span className="flex items-center gap-2">
              <span className="font-sans font-semibold text-[var(--signal-dark)]">
                {categoryLabels[post.category]}
              </span>
              <span aria-hidden="true">·</span>
              <span>{publishDate}</span>
            </span>
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
