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
    <section className="section-card border border-[var(--accent-line)] p-6 md:p-8">
      {/* 브랜드 헤더 */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl md:text-4xl font-black text-primary">{brand.name}</h1>
            {brand.nameKo && (
              <span className="text-lg text-secondary font-medium">({brand.nameKo})</span>
            )}
          </div>
          <p className="text-lg font-semibold text-sky-700">{brand.tagline}</p>
        </div>

        {/* 기술 수 배지 */}
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-sky-50 px-4 py-2">
            <span className="text-lg font-bold text-sky-700">{techCount}개</span>
            <span className="ml-1 text-sm text-sky-700/80">핵심 기술</span>
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
            className="flex items-center gap-2 text-sky-700 hover:underline"
          >
            <span className="text-lg">🔗</span>
            <span>공식 사이트</span>
          </a>
        )}
      </div>

      {/* 기술 카테고리 요약 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="flex items-center gap-3 rounded-xl bg-sky-50 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
            <Layers className="w-5 h-5 text-sky-700" />
          </div>
          <div>
            <p className="text-xs text-secondary">미드솔</p>
            <p className="text-lg font-bold text-primary">{midsoleCount}개</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-slate-100 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200">
            <Cpu className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <p className="text-xs text-secondary">플레이트</p>
            <p className="text-lg font-bold text-primary">{plateCount}개</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-amber-50 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
            <Zap className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <p className="text-xs text-secondary">쿠셔닝</p>
            <p className="text-lg font-bold text-primary">{cushioningCount}개</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-stone-100 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-stone-200">
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
