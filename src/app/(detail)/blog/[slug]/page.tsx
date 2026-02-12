import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';
import { ChevronLeft } from 'lucide-react';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/data/blog';
import { categoryLabels } from '@/types/blog';
import { SITE_URL } from '@/lib/constants';
import { BlogCard } from '@/components/blog/blog-card';
import { TableOfContents } from '@/components/blog/table-of-contents';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);

  const publishDate = new Date(post.publishedAt).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-[768px] mx-auto xl:max-w-none xl:flex xl:justify-center xl:gap-10">
      {/* 메인 콘텐츠 */}
      <div className="w-full max-w-[768px]">
        {/* 뒤로가기 */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          목록으로
        </Link>

        {/* Velog 스타일 헤더 - 카드 래퍼 없음 */}
        <header className="mb-8">
          {/* 제목 */}
          <h1 className="text-4xl lg:text-[2.75rem] font-extrabold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* 작성자 · 날짜 */}
          <div className="flex items-center gap-2 text-base text-gray-500 mb-4">
            <span className="font-semibold text-gray-900">{post.author}</span>
            <span className="text-gray-300">&middot;</span>
            <span>{publishDate}</span>
          </div>

          {/* 태그 - Velog 스타일 teal pill */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 text-sm font-medium rounded-full bg-teal-50 text-teal-600">
              {categoryLabels[post.category]}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm rounded-full bg-gray-100 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* 구분선 */}
        <hr className="border-gray-200 mb-10" />

        {/* 본문 - 카드 래퍼 없음, 깔끔한 타이포그래피 */}
        <article>
          <div
            data-blog-content
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              [&>h2]:text-[1.5rem] [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:first:mt-0
              [&>h3]:text-xl [&>h3]:mt-8 [&>h3]:mb-3
              prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:mb-4 prose-p:text-[1.0625rem]
              prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:my-4 prose-ul:space-y-2 prose-ul:pl-6 prose-li:text-gray-600 prose-li:leading-relaxed prose-li:text-[1.0625rem]
              prose-ol:my-4 prose-ol:space-y-2 prose-ol:pl-6
              prose-table:my-8 prose-table:w-full prose-table:border-collapse prose-table:text-sm
              prose-th:bg-gray-50 prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-gray-700
              prose-td:p-3 prose-td:border-b prose-td:border-gray-100 prose-td:text-gray-600
              [&_figure]:my-8
              [&_figcaption]:text-center [&_figcaption]:text-sm [&_figcaption]:text-gray-400 [&_figcaption]:mt-3
              [&_img]:rounded-lg
            "
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content, {
              ALLOWED_TAGS: ['h2', 'h3', 'h4', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'a', 'img', 'figure', 'figcaption', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'br', 'blockquote', 'span', 'div', 'sup', 'sub', 'hr'],
              ALLOWED_ATTR: ['href', 'src', 'alt', 'class', 'target', 'rel', 'loading', 'decoding', 'width', 'height'],
            }) }}
          />
        </article>

        {/* 하단 구분선 */}
        <hr className="border-gray-200 my-12" />

        {/* Velog 스타일 작성자 프로필 */}
        <div className="flex items-start gap-4 mb-16">
          <div className="w-16 h-16 rounded-full bg-stone-200 flex items-center justify-center text-xl font-bold text-stone-500 shrink-0">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              러닝화 데이터 분석 에디터 · 하프마라톤 완주<br />
              AI 기반 논문 분석과 RunRepeat 랩 데이터를 활용해 한국 러너 맞춤 리뷰를 작성합니다.
            </p>
          </div>
        </div>

        {/* 관련 포스트 */}
        {relatedPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-bold text-gray-900 mb-6">관심 있을 만한 포스트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}

        {/* 하단 네비게이션 */}
        <div className="pb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            목록으로 돌아가기
          </Link>
        </div>
      </div>

      {/* Velog 스타일 TOC 사이드바 */}
      <TableOfContents />
    </div>
  );
}
