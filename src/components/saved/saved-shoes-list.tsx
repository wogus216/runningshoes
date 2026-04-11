'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Trash2, Scale } from 'lucide-react';
import { useSavedShoes, removeSavedShoe } from '@/lib/saved-shoes';

type MinimalShoe = {
  slug: string;
  brand: string;
  name: string;
  category: string;
  image?: string;
  price?: number;
  rating: number;
  description?: string;
};

type Props = { allShoes: MinimalShoe[] };

export function SavedShoesList({ allShoes }: Props) {
  const savedSlugs = useSavedShoes();

  const savedShoes = useMemo(() => {
    const map = new Map(allShoes.map((s) => [s.slug, s]));
    return savedSlugs
      .map((slug) => map.get(slug))
      .filter((s): s is MinimalShoe => Boolean(s));
  }, [allShoes, savedSlugs]);

  if (savedShoes.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-border bg-surface/50 p-10 text-center">
        <Heart className="mx-auto h-10 w-10 text-tertiary mb-3" />
        <p className="text-lg font-semibold text-primary mb-1">아직 찜한 신발이 없습니다</p>
        <p className="text-sm text-secondary mb-6">
          마음에 드는 신발의 하트 버튼을 누르면 이곳에 모입니다.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
        >
          신발 둘러보기
        </Link>
      </div>
    );
  }

  // 비교 링크: 2개 이상 있을 때만 활성화
  const compareHref =
    savedShoes.length >= 2
      ? `/compare?shoes=${savedShoes
          .slice(0, 4)
          .map((s) => s.slug)
          .join(',')}`
      : null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-secondary">
          총 <span className="font-bold text-primary">{savedShoes.length}</span>개의 찜 목록
        </p>
        {compareHref && (
          <Link
            href={compareHref as never}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            <Scale className="h-4 w-4" />
            한번에 비교
          </Link>
        )}
      </div>

      <ul className="space-y-3">
        {savedShoes.map((shoe) => (
          <li
            key={shoe.slug}
            className="flex gap-4 items-center p-4 bg-white border border-border rounded-xl hover:border-accent/50 transition"
          >
            {shoe.image && (
              <Link
                href={`/shoes/${shoe.slug}`}
                className="relative w-20 h-20 shrink-0 bg-surface rounded-lg"
              >
                <Image
                  src={shoe.image}
                  alt={`${shoe.brand} ${shoe.name}`}
                  fill
                  sizes="80px"
                  className="object-contain p-1"
                />
              </Link>
            )}
            <div className="flex-1 min-w-0">
              <Link href={`/shoes/${shoe.slug}`} className="block group">
                <p className="text-xs text-tertiary uppercase tracking-wide">{shoe.brand}</p>
                <p className="font-semibold text-primary group-hover:text-accent transition">
                  {shoe.name}
                </p>
                <p className="text-xs text-tertiary mt-0.5">
                  {shoe.category}
                  {shoe.price && ` · ${(shoe.price / 10000).toFixed(0)}만원`}
                </p>
              </Link>
            </div>
            <button
              onClick={() => removeSavedShoe(shoe.slug)}
              className="shrink-0 rounded-full p-2 text-tertiary hover:bg-rose-50 hover:text-rose-600 transition"
              aria-label={`${shoe.brand} ${shoe.name} 찜 해제`}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
