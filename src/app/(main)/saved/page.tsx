import type { Metadata } from 'next';
import { SavedShoesList } from '@/components/saved/saved-shoes-list';
import { getShoes } from '@/lib/data/shoes';

export const metadata: Metadata = {
  title: '찜한 러닝화',
  description: '내가 찜한 러닝화 목록. 나중에 다시 보거나 비교할 수 있습니다.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/saved' },
};

export default function SavedPage() {
  // 모든 신발 데이터를 클라이언트에 전달 (필터링은 클라이언트에서 localStorage 기반)
  const shoes = getShoes()
    .filter((s) => s.slug)
    .map((s) => ({
      slug: s.slug,
      brand: s.brand,
      name: s.name,
      category: s.category,
      image: s.image,
      price: s.price,
      rating: s.rating,
      description: s.description,
    }));

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">찜한 러닝화</h1>
        <p className="text-secondary">
          브라우저에 저장된 목록입니다. 기기나 브라우저를 바꾸면 유지되지 않습니다.
        </p>
      </header>
      <SavedShoesList allShoes={shoes} />
    </div>
  );
}
