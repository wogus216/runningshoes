'use client';

import { useCallback, useRef, useState } from 'react';
import { BLOG_PAGE_SIZE, BlogCardMeta, BlogCategory, categoryLabels, categoryOrder } from '@/types/blog';
import { BlogCard } from './blog-card';

interface BlogListProps {
  initialPosts: BlogCardMeta[];
  totalCount: number;
}

export function BlogList({ initialPosts, totalCount }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  const [posts, setPosts] = useState<BlogCardMeta[]>(initialPosts);
  const [visibleCount, setVisibleCount] = useState(BLOG_PAGE_SIZE);
  const loadedAll = useRef(initialPosts.length >= totalCount);
  const loading = useRef(false);

  // 전체 목록이 필요한 첫 시점(카테고리 필터·더보기)에 한 번만 정적 JSON 로드
  const ensureAllPosts = useCallback(async () => {
    if (loadedAll.current || loading.current) return;
    loading.current = true;
    try {
      const res = await fetch('/blog-index.json');
      if (res.ok) {
        setPosts(await res.json());
        loadedAll.current = true;
      }
    } finally {
      loading.current = false;
    }
  }, []);

  const selectCategory = (category: BlogCategory | 'all') => {
    setSelectedCategory(category);
    setVisibleCount(BLOG_PAGE_SIZE);
    if (category !== 'all') void ensureAllPosts();
  };

  const filteredPosts =
    selectedCategory === 'all' ? posts : posts.filter((post) => post.category === selectedCategory);
  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length || !loadedAll.current;

  const showMore = async () => {
    await ensureAllPosts();
    setVisibleCount((n) => n + BLOG_PAGE_SIZE);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-[var(--accent-line)] bg-white/82 p-3 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur">
        <div className="mb-3 px-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Category Filter</p>
        </div>
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
        <button
          onClick={() => selectCategory('all')}
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
            onClick={() => selectCategory(category)}
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

      {visiblePosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-gray-400 text-lg">아직 포스트가 없습니다.</p>
        </div>
      )}

      {hasMore && (
        <div className="text-center">
          <button
            onClick={() => void showMore()}
            className="rounded-full border border-[var(--accent-line)] bg-white/82 px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_18px_36px_-32px_rgba(8,18,38,0.16)] transition-colors hover:bg-sky-50 hover:text-sky-700"
          >
            더 보기
          </button>
        </div>
      )}
    </div>
  );
}
