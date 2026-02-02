'use client';

import type { Gel } from "@/types/gel";
import { Star, Zap, Droplets, Coffee } from "lucide-react";
import Image from "next/image";

type HeroSectionProps = {
  gel: Gel;
};

export function HeroSection({ gel }: HeroSectionProps) {
  const nutrition = gel.nutritionFacts;

  // GI 편안함 등급에 따른 색상
  const getGIColor = () => {
    switch (gel.giTolerance.overall) {
      case 'excellent': return 'text-positive';
      case 'good': return 'text-accent';
      case 'moderate': return 'text-warning';
      case 'poor': return 'text-negative';
      default: return 'text-primary';
    }
  };

  const getGILabel = () => {
    switch (gel.giTolerance.overall) {
      case 'excellent': return '매우 좋음';
      case 'good': return '좋음';
      case 'moderate': return '보통';
      case 'poor': return '주의';
      default: return '보통';
    }
  };

  // 별점 렌더링
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'fill-warning text-warning'
                : 'text-border'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="section-card p-4 md:p-6 lg:p-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
        {/* 이미지 */}
        <div className="flex items-center justify-center bg-surface rounded-2xl p-6 md:p-8">
          {gel.image ? (
            <Image
              src={gel.image}
              alt={`${gel.brand} ${gel.name}`}
              width={400}
              height={400}
              className="w-full h-auto object-contain max-h-[400px]"
            />
          ) : (
            <div className="w-full h-[300px] md:h-[400px] flex items-center justify-center text-tertiary">
              <Zap className="w-16 h-16 opacity-20" />
            </div>
          )}
        </div>

        {/* 젤 정보 */}
        <div className="flex flex-col justify-center">
          {/* 브랜드 & 카테고리 */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-secondary">{gel.brand}</span>
            <span className="text-secondary">·</span>
            <span className="text-sm px-2 py-0.5 bg-surface rounded text-primary">{gel.category}</span>
          </div>

          {/* 이름 */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{gel.name}</h1>

          {/* 별점 */}
          <div className="mb-5">
            {renderStars(gel.rating)}
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

          {/* 빠른 스탯 */}
          <div className="grid grid-cols-5 gap-2">
            <div className="bg-surface rounded-lg p-2 text-center">
              <Zap className="w-4 h-4 mx-auto mb-1 text-tertiary" />
              <p className="text-sm font-bold text-primary">{nutrition.calories}</p>
              <p className="text-[10px] text-tertiary">kcal</p>
            </div>
            <div className="bg-surface rounded-lg p-2 text-center">
              <Droplets className="w-4 h-4 mx-auto mb-1 text-tertiary" />
              <p className="text-sm font-bold text-primary">{nutrition.totalCarbs}g</p>
              <p className="text-[10px] text-tertiary">탄수화물</p>
            </div>
            <div className="bg-surface rounded-lg p-2 text-center">
              <Coffee className="w-4 h-4 mx-auto mb-1 text-tertiary" />
              <p className="text-sm font-bold text-primary">{nutrition.caffeine}</p>
              <p className="text-[10px] text-tertiary">mg</p>
            </div>
            <div className="bg-surface rounded-lg p-2 text-center">
              <div className="w-4 h-4 mx-auto mb-1 text-tertiary flex items-center justify-center">
                <span className="text-xs">🧂</span>
              </div>
              <p className="text-sm font-bold text-primary">{nutrition.sodium}</p>
              <p className="text-[10px] text-tertiary">mg</p>
            </div>
            <div className="bg-surface rounded-lg p-2 text-center">
              <div className="w-4 h-4 mx-auto mb-1 text-tertiary flex items-center justify-center">
                <span className="text-xs">🫃</span>
              </div>
              <p className={`text-sm font-bold ${getGIColor()}`}>{getGILabel()}</p>
              <p className="text-[10px] text-tertiary">위장</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
