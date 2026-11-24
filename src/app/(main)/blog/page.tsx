import type { Metadata } from 'next';
import Link from 'next/link';
import { getPostsCardMeta } from '@/lib/data/blog';
import { BLOG_PAGE_SIZE } from '@/types/blog';
import { BlogList } from '@/components/blog/blog-list';

export const metadata: Metadata = {
  title: '러닝 가이드 & 팁',
  description: '한국 러너를 위한 러닝화 리뷰·브랜드 계급도·모델별 비교와 대회 접수 소식을 모았습니다. 실측 스펙, 한국 정가, 사이즈·발볼 정보를 바탕으로 신발을 고르고, 훈련 팁과 마라톤 신청 가이드를 주제별로 찾아보세요.',
  keywords: '러닝 가이드, 러닝화 선택, 러닝 팁, 부상 예방, 러닝화 리뷰',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const allPosts = getPostsCardMeta();
  const archivePosts = allPosts.slice(BLOG_PAGE_SIZE);
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-black tracking-tight text-primary md:text-4xl">러닝 블로그</h1>

      <BlogList initialPosts={allPosts.slice(0, BLOG_PAGE_SIZE)} totalCount={allPosts.length} />

      {/* 전체 글 아카이브 — 크롤러/탐색용 경량 링크 목록 (카드로 렌더하지 않아 HTML 비용 최소) */}
      {archivePosts.length > 0 && (
        <details className="rounded border border-border bg-white p-4">
          <summary className="cursor-pointer font-bold">이전 글 목록 ({archivePosts.length})</summary>
          <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {archivePosts.map((post) => (
              <li key={post.id} className="flex items-baseline gap-2 text-sm leading-6">
                <span className="shrink-0 text-xs tabular-nums text-slate-400">{post.publishedAt}</span>
                <Link href={`/blog/${post.slug}`} className="text-slate-700 hover:text-sky-700 hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
