import type { Metadata } from 'next';
import { getAllPosts, getFeaturedPosts } from '@/lib/data/blog';
import { BlogList } from '@/components/blog/blog-list';

export const metadata: Metadata = {
  title: '러닝 가이드 & 팁',
  description: '러닝화 선택 가이드, 러닝 팁, 부상 예방법, 신제품 리뷰 등 러너를 위한 유용한 정보를 제공합니다.',
  keywords: '러닝 가이드, 러닝화 선택, 러닝 팁, 부상 예방, 러닝화 리뷰',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="space-y-8">
      {/* 헤더 */}
      <section className="text-center py-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-primary">러닝 가이드 & 팁</h1>
        <p className="text-secondary text-sm lg:text-base">
          러닝화 선택부터 부상 예방까지, 러너를 위한 모든 정보
        </p>
      </section>

      {/* 블로그 리스트 */}
      <BlogList allPosts={allPosts} featuredPosts={featuredPosts} />
    </div>
  );
}
