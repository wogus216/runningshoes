'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Brand, BrandTechnology } from '@/types/brand';
import type { Shoe } from '@/types/shoe';
import { categoryLabels, categoryColorClasses } from '@/types/brand';
import { useRef } from 'react';
import { Sparkles, FlaskConical, ChevronRight, ChevronLeft } from 'lucide-react';

type TechnologyListProps = {
  brand: Brand;
  shoes: Shoe[];
};

function TechnologySection({ technology, shoes }: { technology: BrandTechnology; shoes: Shoe[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const categoryInfo = categoryLabels[technology.category];
  const colorClasses = categoryColorClasses[technology.category];

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -280 : 280;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  // 이 기술이 적용된 신발 필터링
  const appliedShoes = shoes.filter((shoe) => technology.usedInShoes.includes(shoe.slug));

  return (
    <section className="section-card overflow-hidden">
      {/* 헤더 - 카테고리 색상 배경 */}
      <div className={`${colorClasses.bg} px-6 py-4 border-b border-border`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 bg-white/80 ${colorClasses.text} text-xs font-bold rounded-full`}>
              {categoryInfo.label}
            </span>
            <h2 className="text-2xl font-black text-primary">{technology.name}</h2>
            {technology.nameKo && (
              <span className="text-lg text-secondary">({technology.nameKo})</span>
            )}
          </div>
          {technology.year && (
            <span className="text-sm text-secondary bg-white/60 px-3 py-1 rounded-full">
              {technology.year}년 출시
            </span>
          )}
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* 한줄 요약 */}
        <p className="text-lg text-primary font-medium leading-relaxed">
          {technology.description}
        </p>

        {/* 기술 원리 */}
        <div className="bg-surface rounded-xl p-5">
          <h3 className="flex items-center gap-2 text-sm font-bold text-primary mb-3">
            <FlaskConical className="w-4 h-4 text-accent" />
            기술 원리
          </h3>
          <p className="text-sm text-secondary leading-relaxed">
            {technology.scienceExplanation}
          </p>
        </div>

        {/* 성능 지표 & 장점 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 성능 지표 */}
          {technology.characteristics && (
            <div>
              <h3 className="text-sm font-bold text-primary mb-3">성능 지표</h3>
              <div className="space-y-3">
                {technology.characteristics.cushioning !== undefined && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-secondary">쿠셔닝</span>
                      <span className={`font-bold ${colorClasses.text}`}>{technology.characteristics.cushioning}/10</span>
                    </div>
                    <div className="spec-bar">
                      <div
                        className={`spec-bar-fill ${colorClasses.bg.replace('/10', '')}`}
                        style={{ width: `${technology.characteristics.cushioning * 10}%` }}
                      />
                    </div>
                  </div>
                )}
                {technology.characteristics.responsiveness !== undefined && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-secondary">반발력</span>
                      <span className={`font-bold ${colorClasses.text}`}>{technology.characteristics.responsiveness}/10</span>
                    </div>
                    <div className="spec-bar">
                      <div
                        className={`spec-bar-fill ${colorClasses.bg.replace('/10', '')}`}
                        style={{ width: `${technology.characteristics.responsiveness * 10}%` }}
                      />
                    </div>
                  </div>
                )}
                {technology.characteristics.durability !== undefined && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-secondary">내구성</span>
                      <span className={`font-bold ${colorClasses.text}`}>{technology.characteristics.durability}/10</span>
                    </div>
                    <div className="spec-bar">
                      <div
                        className={`spec-bar-fill ${colorClasses.bg.replace('/10', '')}`}
                        style={{ width: `${technology.characteristics.durability * 10}%` }}
                      />
                    </div>
                  </div>
                )}
                {technology.characteristics.weight !== undefined && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-secondary">경량성</span>
                      <span className={`font-bold ${colorClasses.text}`}>{technology.characteristics.weight}/10</span>
                    </div>
                    <div className="spec-bar">
                      <div
                        className={`spec-bar-fill ${colorClasses.bg.replace('/10', '')}`}
                        style={{ width: `${technology.characteristics.weight * 10}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 주요 장점 */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-bold text-primary mb-3">
              <Sparkles className="w-4 h-4 text-warning" />
              주요 장점
            </h3>
            <ul className="space-y-2">
              {technology.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-secondary">
                  <span className={`mt-1.5 w-2 h-2 rounded-full ${colorClasses.bg.replace('/10', '')} flex-shrink-0`} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 적용 신발 */}
        {appliedShoes.length > 0 && (
          <div className="pt-4 border-t border-border">
            <h3 className="text-sm font-bold text-primary mb-3">
              이 기술이 적용된 신발 ({appliedShoes.length}개)
            </h3>
            <div className="relative group/scroll">
              <div ref={scrollRef} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {appliedShoes.map((shoe) => (
                  <Link
                    key={shoe.id}
                    href={`/shoes/${shoe.slug}`}
                    className="flex-shrink-0 w-32 group"
                  >
                    <div className="relative aspect-square bg-surface rounded-xl overflow-hidden mb-2">
                      {shoe.image ? (
                        <Image
                          src={shoe.image}
                          alt={`${shoe.brand} ${shoe.name}`}
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition-transform"
                          sizes="128px"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-3xl">
                          👟
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-secondary truncate">{shoe.category}</p>
                    <p className="text-sm font-medium text-primary group-hover:text-accent transition truncate">
                      {shoe.name}
                    </p>
                  </Link>
                ))}
              </div>
              {appliedShoes.length > 4 && (
                <>
                  <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 rounded-full bg-card shadow-md border border-border flex items-center justify-center opacity-0 group-hover/scroll:opacity-100 transition-opacity z-10"
                    aria-label="이전 신발 보기"
                  >
                    <ChevronLeft className="w-4 h-4 text-primary" />
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 rounded-full bg-card shadow-md border border-border flex items-center justify-center opacity-0 group-hover/scroll:opacity-100 transition-opacity z-10"
                    aria-label="다음 신발 보기"
                  >
                    <ChevronRight className="w-4 h-4 text-primary" />
                  </button>
                  <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-card to-transparent pointer-events-none" />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function TechnologyList({ brand, shoes }: TechnologyListProps) {
  // 카테고리별로 기술 그룹화
  const groupedTechnologies = brand.technologies.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }
      acc[tech.category].push(tech);
      return acc;
    },
    {} as Record<string, BrandTechnology[]>
  );

  const categoryOrder = ['midsole', 'plate', 'cushioning', 'stability', 'upper'];
  const sortedCategories = categoryOrder.filter((cat) => groupedTechnologies[cat]?.length > 0);

  return (
    <div className="space-y-6">
      {/* 목차 (빠른 이동) */}
      <nav className="section-card p-4">
        <p className="text-xs text-tertiary mb-2">빠른 이동</p>
        <div className="flex flex-wrap gap-2">
          {brand.technologies.map((tech) => {
            const colorClasses = categoryColorClasses[tech.category];
            return (
              <a
                key={tech.id}
                href={`#${tech.id}`}
                className={`px-3 py-1.5 ${colorClasses.bg} ${colorClasses.text} text-sm font-medium rounded-full hover:opacity-80 transition flex items-center gap-1`}
              >
                {tech.name}
                <ChevronRight className="w-3 h-3" />
              </a>
            );
          })}
        </div>
      </nav>

      {/* 기술 목록 */}
      {sortedCategories.map((category) => (
        <div key={category} className="space-y-4">
          {groupedTechnologies[category].map((technology) => (
            <div key={technology.id} id={technology.id} className="scroll-mt-20">
              <TechnologySection technology={technology} shoes={shoes} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
