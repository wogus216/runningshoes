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
      {/* Velog 스타일 탭 필터 */}
      <div className="flex items-center gap-1 border-b border-gray-200 mb-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-3 text-sm font-semibold transition-colors relative ${
            selectedCategory === 'all'
              ? 'text-gray-900'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          전체
          {selectedCategory === 'all' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
          )}
        </button>
        {categoryOrder.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-3 text-sm font-semibold transition-colors relative ${
              selectedCategory === category
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {categoryLabels[category]}
            {selectedCategory === category && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
            )}
          </button>
        ))}
      </div>

      {/* 포스트 그리드 */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
