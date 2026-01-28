import type { Brand } from '@/types/brand';
import { Cpu, Layers, Zap, Building2 } from 'lucide-react';

type BrandTechnologyHeroProps = {
  brand: Brand;
  techCount: number;
};

export function BrandTechnologyHero({ brand, techCount }: BrandTechnologyHeroProps) {
  // 카테고리별 기술 수 계산
  const midsoleCount = brand.technologies.filter((t) => t.category === 'midsole').length;
  const plateCount = brand.technologies.filter((t) => t.category === 'plate').length;
  const cushioningCount = brand.technologies.filter((t) => t.category === 'cushioning').length;
  const upperCount = brand.technologies.filter((t) => t.category === 'upper').length;

  return (
    <section className="section-card p-6 md:p-8">
      {/* 브랜드 헤더 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl md:text-4xl font-black text-primary">{brand.name}</h1>
            {brand.nameKo && (
              <span className="text-lg text-secondary font-medium">({brand.nameKo})</span>
            )}
          </div>
          <p className="text-accent font-semibold text-lg">{brand.tagline}</p>
        </div>

        {/* 기술 수 배지 */}
        <div className="flex items-center gap-2">
          <div className="px-4 py-2 bg-accent/10 rounded-full">
            <span className="text-accent font-bold text-lg">{techCount}개</span>
            <span className="text-accent/80 text-sm ml-1">핵심 기술</span>
          </div>
        </div>
      </div>

      {/* 브랜드 설명 */}
      <p className="text-secondary leading-relaxed mb-6">{brand.description}</p>

      {/* 브랜드 정보 */}
      <div className="flex flex-wrap gap-4 mb-6 text-sm">
        {brand.founded && (
          <div className="flex items-center gap-2 text-secondary">
            <Building2 className="w-4 h-4" />
            <span>설립 {brand.founded}년</span>
          </div>
        )}
        {brand.headquarters && (
          <div className="flex items-center gap-2 text-secondary">
            <span className="text-lg">📍</span>
            <span>{brand.headquarters}</span>
          </div>
        )}
        {brand.website && (
          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent hover:underline"
          >
            <span className="text-lg">🔗</span>
            <span>공식 사이트</span>
          </a>
        )}
      </div>

      {/* 기술 카테고리 요약 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-xl">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Layers className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-xs text-secondary">미드솔</p>
            <p className="text-lg font-bold text-primary">{midsoleCount}개</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-positive/5 rounded-xl">
          <div className="w-10 h-10 bg-positive/10 rounded-lg flex items-center justify-center">
            <Cpu className="w-5 h-5 text-positive" />
          </div>
          <div>
            <p className="text-xs text-secondary">플레이트</p>
            <p className="text-lg font-bold text-primary">{plateCount}개</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-warning/5 rounded-xl">
          <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-warning" />
          </div>
          <div>
            <p className="text-xs text-secondary">쿠셔닝</p>
            <p className="text-lg font-bold text-primary">{cushioningCount}개</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-surface rounded-xl">
          <div className="w-10 h-10 bg-border rounded-lg flex items-center justify-center">
            <span className="text-lg">👟</span>
          </div>
          <div>
            <p className="text-xs text-secondary">어퍼</p>
            <p className="text-lg font-bold text-primary">{upperCount}개</p>
          </div>
        </div>
      </div>
    </section>
  );
}
