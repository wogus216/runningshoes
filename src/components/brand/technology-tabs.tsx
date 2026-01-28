'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Brand, BrandTechnology, TechnologyCategory } from '@/types/brand';
import type { Shoe } from '@/types/shoe';
import { categoryColorClasses } from '@/types/brand';
import { TechnologyCard } from './technology-card';
import { Layers, Cpu, Zap, Shield, Shirt, X } from 'lucide-react';

type TechnologyTabsProps = {
  brand: Brand;
  shoes: Shoe[];
};

type TabId = 'all' | TechnologyCategory;

const tabs: { id: TabId; label: string; mobileLabel: string; icon: React.ElementType }[] = [
  { id: 'all', label: '전체', mobileLabel: '전체', icon: Layers },
  { id: 'midsole', label: '미드솔', mobileLabel: '미드솔', icon: Layers },
  { id: 'plate', label: '플레이트', mobileLabel: '플레이트', icon: Cpu },
  { id: 'cushioning', label: '쿠셔닝', mobileLabel: '쿠션', icon: Zap },
  { id: 'stability', label: '안정화', mobileLabel: '안정', icon: Shield },
  { id: 'upper', label: '어퍼', mobileLabel: '어퍼', icon: Shirt },
];

export function TechnologyTabs({ brand, shoes }: TechnologyTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const [selectedTech, setSelectedTech] = useState<BrandTechnology | null>(null);

  // 각 카테고리별 기술 수 계산
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: brand.technologies.length };
    brand.technologies.forEach((tech) => {
      counts[tech.category] = (counts[tech.category] || 0) + 1;
    });
    return counts;
  }, [brand.technologies]);

  // 필터링된 기술 목록
  const filteredTechnologies = useMemo(() => {
    if (activeTab === 'all') {
      return brand.technologies;
    }
    return brand.technologies.filter((tech) => tech.category === activeTab);
  }, [brand.technologies, activeTab]);

  // 기술이 있는 탭만 표시
  const availableTabs = tabs.filter((tab) => {
    if (tab.id === 'all') return true;
    return categoryCounts[tab.id] > 0;
  });

  // 선택된 기술이 적용된 신발 필터링
  const filteredShoes = useMemo(() => {
    if (!selectedTech) return [];
    return shoes.filter((shoe) => selectedTech.usedInShoes.includes(shoe.slug));
  }, [selectedTech, shoes]);

  const handleTechSelect = (tech: BrandTechnology) => {
    if (selectedTech?.id === tech.id) {
      setSelectedTech(null); // 같은 기술 클릭 시 선택 해제
    } else {
      setSelectedTech(tech);
    }
  };

  const colorClass = selectedTech ? categoryColorClasses[selectedTech.category] : null;

  return (
    <section className="space-y-4">
      {/* 탭 네비게이션 */}
      <div className="section-card sticky top-14 z-40">
        <div className="flex overflow-x-auto scrollbar-hide border-b border-border">
          {availableTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const count = categoryCounts[tab.id] || 0;
            const tabColorClass = tab.id !== 'all' ? categoryColorClasses[tab.id as TechnologyCategory] : null;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedTech(null); // 탭 변경 시 선택 해제
                }}
                className={`
                  relative flex items-center gap-1.5 px-4 md:px-5 py-3 md:py-4 text-sm font-medium whitespace-nowrap transition-colors
                  ${isActive ? 'text-primary' : 'text-tertiary hover:text-secondary'}
                `}
              >
                <tab.icon className={`w-4 h-4 ${isActive && tabColorClass ? tabColorClass.text : ''}`} />
                <span className="hidden md:inline">{tab.label}</span>
                <span className="md:hidden">{tab.mobileLabel}</span>
                {count > 0 && (
                  <span
                    className={`
                      ml-1 px-1.5 py-0.5 text-xs rounded-full
                      ${isActive ? 'bg-accent/10 text-accent' : 'bg-surface text-tertiary'}
                    `}
                  >
                    {count}
                  </span>
                )}

                {/* 활성 탭 표시선 */}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${tabColorClass ? tabColorClass.bg.replace('/10', '') : 'bg-primary'}`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 선택된 기술 표시 */}
      {selectedTech && (
        <div className={`section-card p-4 ${colorClass?.bg} border-l-4 ${colorClass?.border}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className={`text-lg font-bold ${colorClass?.text}`}>{selectedTech.name}</span>
              <span className="text-sm text-secondary">기술이 적용된 신발 {filteredShoes.length}개</span>
            </div>
            <button
              onClick={() => setSelectedTech(null)}
              className="p-1.5 hover:bg-white/50 rounded-full transition"
            >
              <X className="w-4 h-4 text-secondary" />
            </button>
          </div>
        </div>
      )}

      {/* 기술 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTechnologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isSelected={selectedTech?.id === technology.id}
            onSelect={() => handleTechSelect(technology)}
            shoeCount={shoes.filter((s) => technology.usedInShoes.includes(s.slug)).length}
          />
        ))}
      </div>

      {/* 기술이 없는 경우 */}
      {filteredTechnologies.length === 0 && (
        <div className="section-card p-8 text-center">
          <p className="text-secondary">이 카테고리에 등록된 기술이 없습니다.</p>
        </div>
      )}

      {/* 선택된 기술의 신발 목록 */}
      {selectedTech && filteredShoes.length > 0 && (
        <div className="section-card p-6 animate-fade-in-up">
          <h3 className="text-lg font-bold text-primary mb-4">
            <span className={colorClass?.text}>{selectedTech.name}</span> 적용 신발
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredShoes.map((shoe) => (
              <Link
                key={shoe.id}
                href={`/shoes/${shoe.slug}`}
                className="group block p-4 bg-surface rounded-xl hover:bg-border transition"
              >
                {/* 이미지 */}
                <div className="relative aspect-square mb-3 bg-white rounded-lg overflow-hidden">
                  {shoe.image ? (
                    <Image
                      src={shoe.image}
                      alt={`${shoe.brand} ${shoe.name}`}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">
                      👟
                    </div>
                  )}
                </div>

                {/* 정보 */}
                <div>
                  <p className="text-xs text-secondary mb-1">{shoe.category}</p>
                  <p className="font-medium text-primary group-hover:text-accent transition">
                    {shoe.name}
                  </p>
                  {shoe.price && (
                    <p className="text-sm text-tertiary mt-1">
                      ₩{shoe.price.toLocaleString()}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 선택된 기술에 신발이 없는 경우 */}
      {selectedTech && filteredShoes.length === 0 && (
        <div className="section-card p-8 text-center">
          <p className="text-secondary">
            이 기술이 적용된 신발 데이터가 아직 없습니다.
          </p>
        </div>
      )}
    </section>
  );
}
