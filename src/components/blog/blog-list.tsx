'use client';

import { useState } from 'react';
import { BlogPost, BlogCategory, categoryLabels, categoryOrder } from '@/types/blog';
import { BlogCard } from './blog-card';

interface BlogListProps {
  allPosts: BlogPost[];
  featuredPosts: BlogPost[];
}

export function BlogList({ allPosts, featuredPosts }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');

  const filteredPosts =
    selectedCategory === 'all'
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Featured Posts */}
      {featuredPosts.length > 0 && selectedCategory === 'all' && (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">추천 포스트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          전체
        </button>
        {categoryOrder.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">
          {selectedCategory === 'all' ? '모든 포스트' : categoryLabels[selectedCategory]}
        </h2>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="section-card p-12 text-center">
            <p className="text-secondary">아직 포스트가 없습니다.</p>
          </div>
        )}
      </section>
    </div>
  );
}
