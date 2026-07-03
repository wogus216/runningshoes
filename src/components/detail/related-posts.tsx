import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import type { RelatedPost } from '@/types/shoe';

// 신발 상세 → 관련 블로그(비교·후기)로 회유. 세션당 페이지뷰↑ = RPM↑ (GA 2026-07: 후기 이탈률 32~45%)
export function RelatedPosts({ posts }: { posts?: RelatedPost[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="section-card p-5 lg:p-6">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4 text-accent" />
        <h2 className="text-base font-semibold text-primary">이 신발 비교·후기 더 보기</h2>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group flex items-center justify-between gap-2 px-4 py-3 text-sm bg-accent/5 hover:bg-accent/10 border border-accent/25 hover:border-accent rounded-lg transition text-primary font-semibold"
            >
              <span>{p.title}</span>
              <ArrowRight className="w-4 h-4 text-accent shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
