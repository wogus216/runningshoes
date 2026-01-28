'use client';

import Link from "next/link";
import type { Shoe } from "@/types/shoe";
import { ImageSlider } from "./image-slider";
import { Scale, Layers, ArrowDownUp, Footprints, FlaskConical } from "lucide-react";
import { getBrandTechnologyUrl } from "@/lib/data/brands";

type HeroSectionProps = {
  shoe: Shoe;
};

export function HeroSection({ shoe }: HeroSectionProps) {
  const specs = shoe.specs;
  const koreanFootFit = shoe.koreanFootFit;
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
    <section className="section-card p-4 md:p-6 lg:p-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
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
            {getBrandTechnologyUrl(shoe.brand) && (
              <Link
                href={getBrandTechnologyUrl(shoe.brand) as `/brands/${string}/technology`}
                className="flex items-center gap-1 px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded hover:bg-accent/20 transition"
              >
                <FlaskConical className="w-3 h-3" />
                기술
              </Link>
            )}
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
          <div className="flex items-baseline gap-2 md:gap-3 mb-2">
            <span className="text-2xl md:text-3xl font-bold text-primary">
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
            <p className="text-sm text-secondary mb-4">
              예상 수명 {getDurabilityRange()} · 약 ₩{shoe.priceAnalysis.costPerKm}/km
            </p>
          )}

          {/* 핵심 스펙 뱃지 */}
          {specs && (
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-surface rounded-lg p-2 text-center">
                <Scale className="w-4 h-4 mx-auto mb-1 text-tertiary" />
                <p className="text-sm font-bold text-primary">{specs.weight}g</p>
                <p className="text-[10px] text-tertiary">무게</p>
              </div>
              <div className="bg-surface rounded-lg p-2 text-center">
                <Layers className="w-4 h-4 mx-auto mb-1 text-tertiary" />
                <p className="text-sm font-bold text-primary">40mm</p>
                <p className="text-[10px] text-tertiary">스택</p>
              </div>
              <div className="bg-surface rounded-lg p-2 text-center">
                <ArrowDownUp className="w-4 h-4 mx-auto mb-1 text-tertiary" />
                <p className="text-sm font-bold text-primary">{specs.drop || 10}mm</p>
                <p className="text-[10px] text-tertiary">드롭</p>
              </div>
              <div className="bg-surface rounded-lg p-2 text-center">
                <Footprints className="w-4 h-4 mx-auto mb-1 text-tertiary" />
                <p className={`text-sm font-bold ${koreanFootFit?.toBoxWidth === 'wide' ? 'text-positive' : koreanFootFit?.toBoxWidth === 'narrow' ? 'text-warning' : 'text-primary'}`}>
                  {koreanFootFit?.toBoxWidth === 'wide' ? '넓음' : koreanFootFit?.toBoxWidth === 'narrow' ? '좁음' : '표준'}
                </p>
                <p className="text-[10px] text-tertiary">발볼</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
