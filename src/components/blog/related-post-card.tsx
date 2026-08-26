import Link from 'next/link';
import Image from 'next/image';
import { BlogCardMeta, categoryLabels } from '@/types/blog';
import { img } from '@/lib/image';

/**
 * 관련글 전용 가로형 카드.
 *
 * 목록용 `BlogCard` 를 관련글에 그대로 쓰면 모바일(390px)에서 카드 하나가 494px 이라
 * 6개가 3.57화면을 먹었다. 글 길이와 무관하게 고정이라 짧은 글에서는 페이지의 33%,
 * 본문 중앙값(3,405자) 글에서도 25% 였다 — 본문보다 관련글이 큰 글이 절반이 넘는다.
 *
 * 그래서 관련글에서는 세 가지를 덜어냈다.
 * - 저자 줄: 252편이 전부 같은 저자라 정보량이 0
 * - 설명: 3줄 → 1줄. 제목이 이미 서술형이라 판단에 충분하다
 * - 썸네일: 폭 전체(188px) → 좌측 96px
 *
 * 링크 자체는 그대로 6개를 노출한다. 개수를 줄이면 내부 링크가 실제로 사라져 pSEO 가 깎인다.
 */
interface RelatedPostCardProps {
  post: BlogCardMeta;
}

export function RelatedPostCard({ post }: RelatedPostCardProps) {
  const thumbnail = post.thumbnail;

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="flex items-start gap-3 rounded-[4px] border border-border bg-background p-3 transition-colors duration-200 hover:bg-[var(--accent-soft)]">
        <div className="relative aspect-[1200/630] w-24 shrink-0 overflow-hidden rounded-[3px] border border-border bg-gray-100">
          {thumbnail ? (
            <Image
              src={img(thumbnail)}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
              loading="lazy"
              unoptimized
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200 text-[10px] text-stone-500">
              {categoryLabels[post.category]}
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2 font-mono text-[11px] tabular-nums text-secondary">
            <span className="font-sans font-semibold text-[var(--signal-dark)]">
              {categoryLabels[post.category]}
            </span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}분 읽기</span>
          </div>

          <h3 className="line-clamp-2 text-[15px] font-bold leading-snug tracking-tight text-primary transition-colors group-hover:text-[var(--signal-dark)]">
            {post.title}
          </h3>

          <p className="mt-1 line-clamp-1 text-xs leading-relaxed text-secondary">
            {post.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
