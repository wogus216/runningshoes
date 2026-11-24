import Link from 'next/link';
import Image from 'next/image';
import { BlogCardMeta, categoryLabels } from '@/types/blog';
import { img } from '@/lib/image';
import { formatDateKo } from '@/lib/format';

interface BlogCardProps {
  post: BlogCardMeta;
}

export function BlogCard({ post }: BlogCardProps) {
  const publishDate = formatDateKo(post.publishedAt);

  const thumbnail = post.thumbnail;

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="grid h-full grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 rounded border border-border bg-background p-3 group-hover:border-accent sm:flex sm:flex-col sm:items-stretch sm:gap-0 sm:overflow-hidden sm:p-0">
        {thumbnail ? (
          <div className="relative aspect-square sm:aspect-[1200/630] overflow-hidden border-b border-border bg-gray-100">
            <Image
              src={img(thumbnail)}
              alt=""
              fill
              sizes="(max-width: 640px) 96px, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              unoptimized
            />
          </div>
        ) : (
          <div className="flex aspect-square sm:aspect-[1200/630] items-center justify-center border-b border-border bg-gradient-to-br from-stone-100 to-stone-200">
            <span className="text-xs text-stone-500 sm:text-xl">
              {categoryLabels[post.category]}
            </span>
          </div>
        )}

        <div className="min-w-0 sm:p-4">
          <p className="text-xs text-secondary">{categoryLabels[post.category]} · {publishDate}</p>
          <h3 className="mt-1 break-keep text-base font-bold leading-snug text-primary sm:text-xl">{post.title}</h3>
          <p className="mt-2 hidden text-sm leading-relaxed text-secondary sm:line-clamp-2">{post.description}</p>
        </div>
      </article>
    </Link>
  );
}
