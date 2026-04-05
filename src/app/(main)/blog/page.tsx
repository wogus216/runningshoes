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
  const blogStats = [
    { label: '전체 글', value: `${allPosts.length}+` },
    { label: '추천 글', value: `${featuredPosts.length}` },
    { label: '주제', value: '가이드' },
  ];

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[36px] border border-[var(--accent-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(242,248,255,0.94)_44%,rgba(233,245,255,0.92)_100%)] px-5 py-6 shadow-[0_28px_70px_-52px_rgba(8,18,38,0.28)] md:px-8 md:py-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-6 top-4 h-28 w-28 rounded-full bg-[rgba(14,165,233,0.14)] blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(56,189,248,0.1)] blur-3xl" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {blogStats.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 backdrop-blur"
                >
                  <span className="text-slate-950">{item.value}</span>
                  {item.label}
                </span>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-700">Editorial Notes</p>
              <h1 className="text-balance text-4xl font-black leading-[0.92] tracking-tight text-slate-950 md:text-5xl">
                러닝을 오래 가게 만드는 정보만.
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                러닝화 선택, 부상 예방, 훈련 팁, 신제품 흐름까지 읽기 좋게 정리한 편집형 가이드 섹션입니다.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[24px] border border-sky-100 bg-white/86 p-4 shadow-[0_18px_36px_-32px_rgba(8,18,38,0.16)]">
              <p className="text-sm font-semibold text-slate-950">선택 가이드</p>
              <p className="mt-2 text-xs leading-6 text-slate-600">입문자부터 서브3까지, 지금 필요한 내용부터 빠르게 읽게 구성했습니다.</p>
            </div>
            <div className="rounded-[24px] border border-sky-950/20 bg-[linear-gradient(160deg,rgba(8,18,38,0.98)_0%,rgba(12,74,110,0.96)_100%)] p-4 text-white shadow-[0_22px_40px_-30px_rgba(8,18,38,0.62)]">
              <p className="text-sm font-semibold">읽기 중심</p>
              <p className="mt-2 text-xs leading-6 text-white/65">카드도 더 가볍고 빠르게 훑을 수 있게 밀도를 다시 잡았습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <BlogList allPosts={allPosts} featuredPosts={featuredPosts} />
    </div>
  );
}
