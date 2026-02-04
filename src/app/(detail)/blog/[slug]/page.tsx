import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/data/blog';
import { categoryLabels } from '@/types/blog';
import { BlogCard } from '@/components/blog/blog-card';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
    <div className="max-w-4xl mx-auto space-y-8">
      {/* 뒤로가기 */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        목록으로 돌아가기
      </Link>

      {/* 헤더 */}
      <header className="section-card p-6 lg:p-8 space-y-4">
        {/* 카테고리 */}
        <div className="flex items-center gap-2">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-md bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            {categoryLabels[post.category]}
          </span>
          {post.featured && (
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-md bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
              추천
            </span>
          )}
        </div>

        {/* 제목 */}
        <h1 className="text-3xl lg:text-4xl font-bold text-primary">{post.title}</h1>

        {/* 설명 */}
        <p className="text-lg text-secondary">{post.description}</p>

        {/* 메타 정보 */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-tertiary pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime}분 읽기</span>
          </div>
        </div>

        {/* 태그 */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Tag className="w-4 h-4 text-tertiary" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* 본문 */}
      <article className="section-card p-6 lg:p-10">
        <div
          className="prose prose-lg prose-slate dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:text-primary
            [&>h2]:text-2xl [&>h2]:mt-24 [&>h2]:mb-8 [&>h2]:pb-4 [&>h2]:border-b [&>h2]:border-border [&>h2]:first:mt-0
            [&>h3]:text-xl [&>h3]:mt-16 [&>h3]:mb-6
            prose-p:text-secondary prose-p:leading-loose prose-p:mb-6
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-primary prose-strong:font-semibold
            prose-ul:my-8 prose-ul:space-y-4 prose-ul:pl-6 prose-li:text-secondary prose-li:leading-relaxed
            prose-ol:my-8 prose-ol:space-y-4 prose-ol:pl-6
            prose-table:my-10 prose-table:w-full prose-table:border-collapse
            prose-th:bg-gray-100 prose-th:dark:bg-gray-800 prose-th:p-3 prose-th:text-left prose-th:font-semibold
            prose-td:p-3 prose-td:border-b prose-td:border-border
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* 관련 포스트 */}
      {relatedPosts.length > 0 && (
        <section className="space-y-4 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold text-primary">관련 포스트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
      )}

      {/* 하단 네비게이션 */}
      <div className="pt-8 border-t border-border">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          목록으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
