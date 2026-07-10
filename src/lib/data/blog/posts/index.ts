import { BlogPost } from '@/types/blog';
import { posts_2026_07 } from './2026-07';
import { posts_2026_06 } from './2026-06';
import { posts_2026_05 } from './2026-05';
import { posts_2026_04 } from './2026-04';
import { posts_2025_01 } from './2025-01';
import { posts_2025_02 } from './2025-02';
import { posts_2026_02 } from './2026-02';

// 월별 파일에서 재조립 — API(blogPosts)는 분할 전과 동일.
export const blogPosts: BlogPost[] = [
  ...posts_2026_07,
  ...posts_2026_06,
  ...posts_2026_05,
  ...posts_2026_04,
  ...posts_2025_01,
  ...posts_2025_02,
  ...posts_2026_02,
];
