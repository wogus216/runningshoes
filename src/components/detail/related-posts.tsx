import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import type { RelatedPost } from '@/types/shoe';

// 신발 상세 → 관련 블로그(비교·후기)로 회유. 세션당 페이지뷰↑ = RPM↑ (GA 2026-07: 후기 이탈률 32~45%)
export function RelatedPosts({ posts }: { posts?: RelatedPost[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="section-card p-5 lg:p-6">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4 text-accent" />
        <h2 className="text-base font-semibold text-primary">더 읽어보기 · 비교·후기</h2>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="block px-3 py-2 text-sm bg-surface hover:bg-white border border-border hover:border-accent rounded transition text-primary font-medium"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
