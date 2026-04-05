'use client';

import { useState } from 'react';
import { BlogPost, BlogCategory, categoryLabels, categoryOrder } from '@/types/blog';
import { BlogCard } from './blog-card';

interface BlogListProps {
  allPosts: BlogPost[];
  featuredPosts: BlogPost[];
}

export function BlogList({ allPosts }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');

  const filteredPosts =
    selectedCategory === 'all'
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-[var(--accent-line)] bg-white/82 p-3 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur">
        <div className="mb-3 px-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Category Filter</p>
        </div>
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors relative ${
            selectedCategory === 'all'
              ? 'bg-[var(--navy)] text-white'
              : 'text-gray-500 hover:bg-sky-50 hover:text-gray-700'
          }`}
        >
          전체
        </button>
        {categoryOrder.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors relative ${
              selectedCategory === category
                ? 'bg-[var(--navy)] text-white'
                : 'text-gray-500 hover:bg-sky-50 hover:text-gray-700'
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-gray-400 text-lg">아직 포스트가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
