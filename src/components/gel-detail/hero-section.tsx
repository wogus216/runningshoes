'use client';

import type { Gel } from "@/types/gel";
import { Star, Zap, ExternalLink } from "lucide-react";
import Image from "next/image";
import { AffiliateDisclosure } from '@/components/detail/affiliate-disclosure';
import { img } from '@/lib/image';

type HeroSectionProps = {
  gel: Gel;
};

export function HeroSection({ gel }: HeroSectionProps) {
  const nutrition = gel.nutritionFacts;

  // 별점 렌더링
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'fill-sky-500 text-sky-500'
                : 'text-border'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="section-card border border-[var(--accent-line)] bg-white/88 p-4 md:p-6 lg:p-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
        {/* 이미지 */}
        <figure className="order-2 md:order-none flex flex-col items-center justify-center rounded-[4px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,240,252,0.92))] p-6 md:p-8">
          {gel.image ? (
            <Image
              src={img(gel.image)}
              alt={`${gel.brand} ${gel.name}`}
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-auto object-contain max-h-36 md:max-h-[400px]"
            />
          ) : (
            <div className="w-full h-[300px] md:h-[400px] flex items-center justify-center text-tertiary">
              <Zap className="w-16 h-16 opacity-20" />
            </div>
          )}
          {gel.imageCaption && (
            <figcaption className="mt-4 text-xs leading-relaxed text-secondary">
              {gel.imageCaption}
              {gel.imageSource && (
                <a href={gel.imageSource.url} target="_blank" rel="noopener noreferrer" className="ml-1 underline">
                  {gel.imageSource.title}
                </a>
              )}
            </figcaption>
          )}
        </figure>

        {/* 젤 정보 */}
        <div className="flex flex-col justify-center">
          {/* 브랜드 & 카테고리 */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium text-sky-700">{gel.brand}</span>
            <span className="text-secondary">·</span>
            <span className="rounded bg-sky-50 px-2 py-0.5 text-sm text-primary">{gel.category}</span>
          </div>

          {/* 이름 */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{gel.name}</h1>

          <div className="mb-4 rounded border border-border p-3">
            <p className="text-sm text-secondary">{nutrition.servingSize != null ? `1회분 ${nutrition.servingSize}${nutrition.servingUnit ?? 'g'} 기준` : '제품별 영양 표시'}</p>
            <dl className="mt-2 grid grid-cols-2 gap-3">
              {([
                ['탄수화물', nutrition.totalCarbs, 'g'],
                ['열량', nutrition.calories, 'kcal'],
                ['카페인', nutrition.caffeine, 'mg'],
                ['나트륨', nutrition.sodium, 'mg'],
              ] as const).map(([label, value, unit]) => <div key={label}>
                <dt className="text-xs text-secondary">{label}</dt>
                <dd className="text-lg font-bold">{value == null ? '미확인' : `${value}${unit}`}</dd>
              </div>)}
            </dl>
          </div>

          {/* 별점 */}
          <div className="mb-5">
            {gel.rating !== undefined && renderStars(gel.rating)}
          </div>

          {/* 태그 */}
          {gel.tags && gel.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {gel.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface rounded-full text-sm text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* 설명 */}
          {gel.description && (
            <p className="text-secondary text-sm leading-relaxed mb-6">
              {gel.description}
            </p>
          )}

          {/* 가격 */}
          {gel.price && (
            <div className="flex items-baseline gap-2 md:gap-3 mb-6">
              <span className="text-2xl md:text-3xl font-bold text-primary">
                ₩{gel.price.toLocaleString()}
              </span>
              <span className="text-sm text-tertiary">/ 개</span>
            </div>
          )}

          {/* 구매 링크 */}
          {gel.purchaseLinks && gel.purchaseLinks.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {gel.purchaseLinks.map((link, i) => (
                <div key={i} className="max-w-sm">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--navy)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--navy-soft)]"
                >
                  {link.store}에서 구매
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {link.note && <p className="mt-1 text-xs leading-relaxed text-secondary">{link.note}</p>}
                </div>
              ))}
            </div>
          )}

          {/* 제휴 링크 고지 */}
          {gel.purchaseLinks && gel.purchaseLinks.length > 0 && (
            <div className="mb-4">
              <AffiliateDisclosure purchaseLinks={gel.purchaseLinks} />
            </div>
          )}


        </div>
      </div>
    </section>
  );
}
