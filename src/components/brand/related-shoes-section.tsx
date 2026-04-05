import Link from 'next/link';
import Image from 'next/image';
import type { Brand } from '@/types/brand';
import type { Shoe } from '@/types/shoe';
import { ArrowRight } from 'lucide-react';

type RelatedShoesSectionProps = {
  brand: Brand;
  shoes: Shoe[];
};

export function RelatedShoesSection({ brand, shoes }: RelatedShoesSectionProps) {
  // 최대 6개까지만 표시
  const displayShoes = shoes.slice(0, 6);

  return (
    <section className="section-card border border-[var(--accent-line)] bg-white/84 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-primary">{brand.name} 러닝화</h2>
          <p className="text-sm text-secondary">이 기술들이 적용된 신발을 확인하세요</p>
        </div>
        <span className="px-3 py-1 bg-surface text-sm text-secondary rounded-full">
          {shoes.length}개 모델
        </span>
      </div>

      {/* 신발 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {displayShoes.map((shoe) => (
          <Link
            key={shoe.id}
            href={`/shoes/${shoe.slug}`}
            className="group block rounded-[22px] border border-sky-100 bg-white/84 p-3 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/60"
          >
            {/* 이미지 */}
            <div className="relative aspect-square mb-2 bg-white rounded-lg overflow-hidden">
              {shoe.image ? (
                <Image
                  src={shoe.image}
                  alt={`${shoe.brand} ${shoe.name}`}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-3xl">
                  👟
                </div>
              )}
            </div>

            {/* 정보 */}
            <div>
              <p className="text-xs text-secondary">{shoe.category}</p>
              <p className="truncate text-sm font-medium text-primary transition group-hover:text-sky-700">
                {shoe.name}
              </p>
              {shoe.price && (
                <p className="text-xs text-tertiary mt-1">
                  ₩{shoe.price.toLocaleString()}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* 더보기 링크 */}
      {shoes.length > 6 && (
        <div className="mt-4 pt-4 border-t border-border text-center">
          <Link
            href={`/?brand=${brand.name}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:underline"
          >
            {brand.name} 전체 신발 보기 ({shoes.length}개)
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </section>
  );
}
