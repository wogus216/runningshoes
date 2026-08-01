'use client';

import { useEffect } from 'react';
import { recordShoeView } from '@/lib/recent';

/**
 * 신발 상세 페이지 방문 기록 전용 컴포넌트.
 *
 * 상세 페이지(`src/app/(detail)/shoes/[slug]/page.tsx`)는 서버 컴포넌트라
 * localStorage에 직접 쓸 수 없다. 화면에는 아무것도 그리지 않고, 마운트 시
 * `recordShoeView`만 호출해 홈의 "방금 본 신발" 이어보기 카드가 쓸 데이터를 남긴다.
 */
export function RecordView({
  slug,
  name,
  category,
  image,
}: {
  slug: string;
  name: string;
  category: string;
  image?: string;
}) {
  useEffect(() => {
    recordShoeView({ slug, name, category, image });
  }, [slug, name, category, image]);

  return null;
}
