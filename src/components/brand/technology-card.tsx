'use client';

import { useState } from 'react';
import type { BrandTechnology } from '@/types/brand';
import { categoryLabels, categoryColorClasses } from '@/types/brand';
import { ChevronDown, ChevronUp, Sparkles, MousePointerClick } from 'lucide-react';

type TechnologyCardProps = {
  technology: BrandTechnology;
  isSelected?: boolean;
  onSelect?: () => void;
  shoeCount?: number;
};

export function TechnologyCard({ technology, isSelected, onSelect, shoeCount }: TechnologyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryInfo = categoryLabels[technology.category];
  const colorClasses = categoryColorClasses[technology.category];

  return (
    <div
      className={`section-card p-6 transition-all duration-200 cursor-pointer ${
        isSelected
          ? `ring-2 ${colorClasses.border.replace('border-', 'ring-')} ${colorClasses.bg}`
          : 'hover:border-accent/30'
      }`}
      onClick={onSelect}
    >
      {/* 카테고리 배지 & 출시 연도 */}
      <div className="flex items-center justify-between mb-3">
        <span className={`px-2.5 py-1 ${colorClasses.bg} ${colorClasses.text} text-xs font-medium rounded-full`}>
          {categoryInfo.label}
        </span>
        <div className="flex items-center gap-2">
          {technology.year && (
            <span className="text-xs text-tertiary">{technology.year}년</span>
          )}
          {isSelected && (
            <span className={`px-2 py-0.5 ${colorClasses.bg} ${colorClasses.text} text-xs font-medium rounded-full`}>
              선택됨
            </span>
          )}
        </div>
      </div>

      {/* 기술명 */}
      <div className="mb-2">
        <h3 className="text-xl font-bold text-primary">{technology.name}</h3>
        {technology.nameKo && (
          <p className="text-sm text-secondary">{technology.nameKo}</p>
        )}
      </div>

      {/* 한줄 설명 */}
      <p className="text-secondary text-sm leading-relaxed mb-4">
        {technology.description}
      </p>

      {/* 성능 점수 */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1">
          <span className="text-tertiary">성능 점수</span>
          <span className={`${colorClasses.text} font-bold`}>
            {technology.performanceRating}/10
          </span>
        </div>
        <div className="spec-bar">
          <div
            className={`spec-bar-fill ${colorClasses.bg.replace('/10', '')}`}
            style={{ width: `${technology.performanceRating * 10}%` }}
          />
        </div>
      </div>

      {/* 특성 차트 (있는 경우) */}
      {technology.characteristics && (
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          {technology.characteristics.cushioning !== undefined && (
            <div className="flex justify-between">
              <span className="text-tertiary">쿠셔닝</span>
              <span className="text-primary font-medium">{technology.characteristics.cushioning}/10</span>
            </div>
          )}
          {technology.characteristics.responsiveness !== undefined && (
            <div className="flex justify-between">
              <span className="text-tertiary">반발력</span>
              <span className="text-primary font-medium">{technology.characteristics.responsiveness}/10</span>
            </div>
          )}
          {technology.characteristics.durability !== undefined && (
            <div className="flex justify-between">
              <span className="text-tertiary">내구성</span>
              <span className="text-primary font-medium">{technology.characteristics.durability}/10</span>
            </div>
          )}
          {technology.characteristics.weight !== undefined && (
            <div className="flex justify-between">
              <span className="text-tertiary">경량성</span>
              <span className="text-primary font-medium">{technology.characteristics.weight}/10</span>
            </div>
          )}
        </div>
      )}

      {/* 장점 목록 */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-secondary mb-2 flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          주요 장점
        </h4>
        <ul className="space-y-1">
          {technology.benefits.slice(0, isExpanded ? undefined : 2).map((benefit, index) => (
            <li key={index} className="text-xs text-secondary flex items-start gap-2">
              <span className={`mt-1 w-1.5 h-1.5 rounded-full ${colorClasses.bg.replace('/10', '')}`} />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* 적용 신발 수 - 클릭 유도 */}
      {shoeCount !== undefined && shoeCount > 0 && (
        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isSelected ? 'bg-white/50' : colorClasses.bg} mb-4`}>
          <MousePointerClick className={`w-4 h-4 ${colorClasses.text}`} />
          <span className={`text-xs font-medium ${colorClasses.text}`}>
            {shoeCount}개 신발에 적용 · 클릭해서 보기
          </span>
        </div>
      )}

      {/* 상세 설명 (펼치기) */}
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="pt-4 border-t border-border">
          <h4 className="text-sm font-semibold text-primary mb-2">기술 원리</h4>
          <p className="text-xs text-secondary leading-relaxed">
            {technology.scienceExplanation}
          </p>
        </div>
      </div>

      {/* 펼치기/접기 버튼 */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // 카드 선택 이벤트 방지
          setIsExpanded(!isExpanded);
        }}
        className="w-full mt-4 pt-3 border-t border-border flex items-center justify-center gap-1 text-xs text-tertiary hover:text-accent transition"
      >
        {isExpanded ? (
          <>
            접기 <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            기술 원리 보기 <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}
