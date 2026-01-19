'use client';

import type { Shoe } from "@/types/shoe";
import { ImageSlider } from "./image-slider";

type HeroSectionProps = {
  shoe: Shoe;
};

export function HeroSection({ shoe }: HeroSectionProps) {
  // 이미지 배열 준비 (images가 있으면 사용, 없으면 image를 배열로)
  const images = shoe.images?.length ? shoe.images : (shoe.image ? [shoe.image] : []);

  // 내구성 범위 계산
  const getDurabilityRange = () => {
    const durability = shoe.specs?.durability || 500;
    const min = Math.max(durability - 100, 300);
    const max = durability;
    return `${min}-${max}km`;
  };

  return (
    <section className="section-card p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        {/* 이미지 슬라이더 */}
        <ImageSlider
          images={images}
          alt={`${shoe.brand} ${shoe.name}`}
        />

        {/* 신발 정보 */}
        <div className="flex flex-col justify-center">
          {/* 브랜드 & 카테고리 */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-secondary">{shoe.brand}</span>
            <span className="text-secondary">·</span>
            <span className="text-sm px-2 py-0.5 bg-surface rounded text-primary">{shoe.category}</span>
          </div>

          {/* 이름 */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{shoe.name}</h1>

          {/* 태그 */}
          {shoe.tags && shoe.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {shoe.tags.slice(0, 4).map((tag) => (
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
          {shoe.description && (
            <p className="text-secondary text-sm leading-relaxed mb-6">
              {shoe.description}
            </p>
          )}

          {/* 가격 */}
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-3xl font-bold text-primary">
              ₩{shoe.price?.toLocaleString()}
            </span>
            {shoe.priceAnalysis?.msrp && shoe.priceAnalysis.msrp > (shoe.price || 0) && (
              <span className="text-sm text-tertiary line-through">
                ₩{shoe.priceAnalysis.msrp.toLocaleString()}
              </span>
            )}
          </div>

          {/* 예상 수명 & 코스트 */}
          {shoe.priceAnalysis && (
            <p className="text-sm text-secondary">
              예상 수명 {getDurabilityRange()} · 약 ₩{shoe.priceAnalysis.costPerKm}/km
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
