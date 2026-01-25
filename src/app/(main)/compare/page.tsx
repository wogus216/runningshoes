'use client';

import { useState, useMemo, useEffect, useCallback, Suspense, DragEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Search, X, Check, Link2, GripVertical } from 'lucide-react';
import { getShoes, getShoeBySlug } from '@/lib/data/shoes';
import { EnhancedCompareTable } from '@/components/compare/enhanced-compare-table';
import { CompareRadarChart } from '@/components/compare/compare-radar-chart';
import { CompareAd } from '@/components/ads/ad-unit';
import { cn } from '@/lib/utils';
import type { Shoe } from '@/types/shoe';

export default function ComparePage() {
  return (
    <Suspense fallback={<ComparePageSkeleton />}>
      <ComparePageContent />
    </Suspense>
  );
}

function ComparePageSkeleton() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="h-10 w-32 bg-white rounded animate-pulse" />
        <div className="h-40 bg-white rounded-2xl animate-pulse mt-6" />
      </div>
    </div>
  );
}

function ComparePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const allShoes = useMemo(() => getShoes().filter(s => s.specs), []);
  const [selectedShoes, setSelectedShoes] = useState<Shoe[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(true);
  const [copied, setCopied] = useState(false);
  const [draggedShoe, setDraggedShoe] = useState<Shoe | null>(null);
  const [dragOverSlot, setDragOverSlot] = useState<number | null>(null);

  // URL에서 신발 로드 (보안: slug 형식 검증)
  useEffect(() => {
    const shoesParam = searchParams.get('shoes');
    if (shoesParam) {
      const MAX_SLUGS = 4;
      const VALID_SLUG_PATTERN = /^[a-z0-9-]+$/;

      const slugs = shoesParam
        .split(',')
        .slice(0, MAX_SLUGS)
        .filter(slug => VALID_SLUG_PATTERN.test(slug));

      const loadedShoes = slugs
        .map(slug => getShoeBySlug(slug))
        .filter((shoe): shoe is Shoe => shoe !== undefined && shoe.specs !== undefined);
      if (loadedShoes.length > 0) {
        setSelectedShoes(loadedShoes);
      }
    }
  }, [searchParams]);

  // URL 업데이트
  const updateUrl = useCallback((shoes: Shoe[]) => {
    if (shoes.length > 0) {
      const slugs = shoes.map(s => s.slug).join(',');
      router.replace(`/compare?shoes=${slugs}`, { scroll: false });
    } else {
      router.replace('/compare', { scroll: false });
    }
  }, [router]);

  // URL 복사
  const copyShareUrl = () => {
    if (selectedShoes.length === 0) return;
    const slugs = selectedShoes.map(s => s.slug).join(',');
    const url = `${window.location.origin}/compare?shoes=${slugs}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredShoes = useMemo(() => {
    if (!searchQuery) return allShoes.slice(0, 20);
    const query = searchQuery.toLowerCase();
    return allShoes.filter(
      s =>
        s.name.toLowerCase().includes(query) ||
        s.brand.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query)
    ).slice(0, 20);
  }, [allShoes, searchQuery]);

  const addShoe = (shoe: Shoe) => {
    if (selectedShoes.length < 4 && !selectedShoes.some(s => (s.id || s.slug) === (shoe.id || shoe.slug))) {
      const newShoes = [...selectedShoes, shoe];
      setSelectedShoes(newShoes);
      updateUrl(newShoes);
    }
  };

  const addShoeToSlot = (shoe: Shoe, slotIndex: number) => {
    if (selectedShoes.some(s => (s.id || s.slug) === (shoe.id || shoe.slug))) return;

    const newShoes = [...selectedShoes];
    // 슬롯 인덱스가 현재 배열 길이보다 크면 그냥 push
    if (slotIndex >= newShoes.length) {
      newShoes.push(shoe);
    } else {
      // 해당 위치에 삽입
      newShoes.splice(slotIndex, 0, shoe);
    }
    // 최대 4개 유지
    if (newShoes.length > 4) {
      newShoes.pop();
    }
    setSelectedShoes(newShoes);
    updateUrl(newShoes);
  };

  const removeShoe = (shoeId: string) => {
    const newShoes = selectedShoes.filter(s => (s.id || s.slug) !== shoeId);
    setSelectedShoes(newShoes);
    updateUrl(newShoes);
  };

  const clearAll = () => {
    setSelectedShoes([]);
    updateUrl([]);
  };

  // 드래그 핸들러
  const handleDragStart = (e: DragEvent<HTMLDivElement>, shoe: Shoe) => {
    setDraggedShoe(shoe);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', shoe.slug || '');
  };

  const handleDragEnd = () => {
    setDraggedShoe(null);
    setDragOverSlot(null);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>, slotIndex: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverSlot(slotIndex);
  };

  const handleDragLeave = () => {
    setDragOverSlot(null);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, slotIndex: number) => {
    e.preventDefault();
    if (draggedShoe) {
      addShoeToSlot(draggedShoe, slotIndex);
    }
    setDraggedShoe(null);
    setDragOverSlot(null);
  };

  return (
    <div className="space-y-4">
      {/* 타이틀 */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-primary">신발 비교</h1>
        <p className="mt-1 text-sm text-secondary">최대 4개의 신발을 비교해보세요</p>
      </div>

      {/* 선택된 신발 */}
      <section className="section-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-primary">
            선택된 신발 <span className="text-accent">({selectedShoes.length}/4)</span>
          </h2>
          <div className="flex items-center gap-2">
            {selectedShoes.length >= 2 && (
              <button
                onClick={copyShareUrl}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition",
                  copied
                    ? "bg-positive/10 text-positive"
                    : "bg-surface text-secondary hover:bg-border"
                )}
              >
                {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                {copied ? '복사됨' : 'URL 공유'}
              </button>
            )}
            {selectedShoes.length > 0 && (
              <button
                onClick={clearAll}
                className="text-sm text-secondary hover:text-negative transition"
              >
                전체 삭제
              </button>
            )}
          </div>
        </div>

        {/* 선택된 신발 카드 + 빈 슬롯 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {selectedShoes.map((shoe, idx) => (
            <div
              key={shoe.id || shoe.slug}
              className="relative bg-surface rounded-xl p-4 border border-border group"
            >
              <button
                onClick={() => removeShoe(shoe.id || shoe.slug || '')}
                className="absolute -top-2 -right-2 p-1 rounded-full bg-negative text-white hover:opacity-80 z-10"
              >
                <X className="h-3 w-3" />
              </button>
              <div className="w-12 h-12 bg-white rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                {shoe.image ? (
                  <Image src={shoe.image} alt={shoe.name} width={48} height={48} className="object-contain" />
                ) : (
                  <span className="text-xl">👟</span>
                )}
              </div>
              <p className="text-xs text-tertiary">{shoe.brand}</p>
              <p className="font-medium text-sm text-primary truncate">{shoe.name}</p>
            </div>
          ))}
          {/* 빈 슬롯 - 드롭 가능 */}
          {Array.from({ length: 4 - selectedShoes.length }).map((_, idx) => {
            const slotIndex = selectedShoes.length + idx;
            const isOver = dragOverSlot === slotIndex;

            return (
              <div
                key={`empty-${idx}`}
                onDragOver={(e) => handleDragOver(e, slotIndex)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, slotIndex)}
                className={cn(
                  "rounded-xl border-2 border-dashed p-4 flex flex-col items-center justify-center min-h-[100px] transition-all",
                  isOver
                    ? "border-accent bg-accent/10 scale-105"
                    : "border-border"
                )}
              >
                <span className="text-sm text-tertiary">
                  {isOver ? '여기에 놓기' : '빈 슬롯'}
                </span>
                {!isOver && (
                  <span className="text-xs text-tertiary mt-1">드래그하여 추가</span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 신발 검색/선택 - 항상 표시 옵션 */}
      <section className="section-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-primary">신발 선택</h2>
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-sm text-accent hover:underline"
          >
            {showSearch ? '접기' : '펼치기'}
          </button>
        </div>

        {showSearch && (
          <>
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-tertiary" />
              <input
                type="text"
                placeholder="신발 이름, 브랜드 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-white py-3 pl-11 pr-4 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto">
              {filteredShoes.map(shoe => {
                const isSelected = selectedShoes.some(s => (s.id || s.slug) === (shoe.id || shoe.slug));
                const canAdd = selectedShoes.length < 4;
                const isDragging = draggedShoe?.slug === shoe.slug;

                return (
                  <div
                    key={shoe.id || shoe.slug}
                    draggable={!isSelected && canAdd}
                    onDragStart={(e) => handleDragStart(e, shoe)}
                    onDragEnd={handleDragEnd}
                    onClick={() => !isSelected && canAdd && addShoe(shoe)}
                    className={cn(
                      "text-left rounded-xl border p-4 transition-all cursor-pointer select-none",
                      isDragging && "opacity-50 scale-95",
                      isSelected
                        ? "border-accent bg-accent/5 cursor-default"
                        : canAdd
                        ? "border-border bg-white hover:border-accent/50 hover:shadow-md"
                        : "border-border bg-surface opacity-50 cursor-not-allowed"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      {/* 드래그 핸들 */}
                      {!isSelected && canAdd && (
                        <div className="text-tertiary hover:text-primary cursor-grab active:cursor-grabbing">
                          <GripVertical className="w-4 h-4" />
                        </div>
                      )}
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                        {shoe.image ? (
                          <Image src={shoe.image} alt={shoe.name} width={40} height={40} className="object-contain" />
                        ) : (
                          <span className="text-lg">👟</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-tertiary">{shoe.brand}</p>
                        <p className="font-medium text-sm text-primary truncate">{shoe.name}</p>
                        <p className="text-xs text-tertiary">{shoe.category}</p>
                      </div>
                      {isSelected && (
                        <span className="px-2 py-1 bg-accent text-white text-xs rounded-full flex-shrink-0">선택됨</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </section>

      {/* 광고 - 비교 결과 전 */}
      {selectedShoes.length >= 2 && <CompareAd />}

      {/* 비교 결과 */}
      {selectedShoes.length >= 2 && (
        <>
          {/* 레이더 차트 */}
          <section className="section-card p-6">
            <h2 className="font-bold text-primary mb-6">스펙 비교 차트</h2>
            <CompareRadarChart shoes={selectedShoes} />
          </section>

          {/* 상세 비교 테이블 */}
          <section className="section-card p-6">
            <h2 className="font-bold text-primary mb-6">상세 비교</h2>
            <EnhancedCompareTable shoes={selectedShoes} onRemove={removeShoe} />
          </section>
        </>
      )}

      {selectedShoes.length === 1 && (
        <div className="text-center py-8">
          <p className="text-secondary">비교를 위해 1개 이상의 신발을 추가로 선택해주세요</p>
        </div>
      )}

      {selectedShoes.length === 0 && (
        <div className="text-center py-8">
          <p className="text-secondary">위에서 비교할 신발을 선택하거나 드래그해주세요</p>
        </div>
      )}
    </div>
  );
}
