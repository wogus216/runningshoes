'use client';

import { useState, useMemo, useEffect, useCallback, Suspense, DragEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Search, X, Check, Link2, GripVertical, Sparkles, Scale, ArrowRightLeft } from 'lucide-react';
import { getShoes, getShoeBySlug } from '@/lib/data/shoes';
import { EnhancedCompareTable } from '@/components/compare/enhanced-compare-table';
import { CompareRadarChart } from '@/components/compare/compare-radar-chart';
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
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="h-14 w-56 animate-pulse rounded-full bg-white/70" />
        <div className="mt-6 h-56 animate-pulse rounded-[32px] bg-white/70" />
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
  const compareSummary = [
    { label: '비교 가능', value: '최대 4개' },
    { label: '현재 선택', value: `${selectedShoes.length}개` },
    { label: '스펙 데이터', value: `${allShoes.length}+` },
  ];

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
    <div className="space-y-5">
      <section className="relative overflow-hidden rounded-[36px] border border-[var(--accent-line)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(240,248,255,0.94)_46%,rgba(228,244,255,0.92)_100%)] px-5 py-6 shadow-[0_28px_70px_-52px_rgba(8,18,38,0.28)] md:px-8 md:py-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-8 top-4 h-32 w-32 rounded-full bg-[rgba(14,165,233,0.16)] blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[rgba(56,189,248,0.12)] blur-3xl" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {compareSummary.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-900/10 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600 backdrop-blur"
                >
                  <span className="text-slate-950">{item.value}</span>
                  {item.label}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-700">Compare Board</p>
              <h1 className="text-balance text-4xl font-black leading-[0.92] tracking-tight text-slate-950 md:text-5xl">
                감이 아니라 나란히 놓고 고르게.
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                무게, 쿠셔닝, 안정성, 발볼, 가격까지 한 번에 올려두고 차이를 빠르게 읽을 수 있게 다시 정리했습니다.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[24px] border border-sky-100 bg-white/86 p-4 shadow-[0_18px_36px_-32px_rgba(8,18,38,0.16)]">
              <Sparkles className="h-5 w-5 text-accent" />
              <p className="mt-4 text-sm font-semibold text-slate-950">추천 조합</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">비어 있는 슬롯은 바로 추가 가능한 후보를 먼저 보여줍니다.</p>
            </div>
            <div className="rounded-[24px] border border-sky-100 bg-white/86 p-4 shadow-[0_18px_36px_-32px_rgba(8,18,38,0.16)]">
              <Scale className="h-5 w-5 text-sky-700" />
              <p className="mt-4 text-sm font-semibold text-slate-950">빠른 판단</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">모바일에서도 핵심 스펙과 부상/핏 정보를 바로 비교합니다.</p>
            </div>
            <div className="rounded-[24px] border border-sky-950/20 bg-[linear-gradient(160deg,rgba(8,18,38,0.98)_0%,rgba(12,74,110,0.96)_100%)] p-4 text-white shadow-[0_22px_40px_-30px_rgba(8,18,38,0.62)]">
              <ArrowRightLeft className="h-5 w-5 text-white" />
              <p className="mt-4 text-sm font-semibold">공유 가능</p>
              <p className="mt-1 text-xs leading-6 text-white/65">선택한 비교 조합을 URL로 복사해 그대로 공유할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Selection Dock</p>
            <h2 className="mt-2 text-xl font-black tracking-tight text-slate-950">
              선택된 신발 <span className="text-accent">({selectedShoes.length}/4)</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {selectedShoes.length >= 2 && (
              <button
                onClick={copyShareUrl}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition",
                  copied
                    ? "bg-sky-50 text-sky-700"
                    : "bg-sky-50 text-secondary hover:bg-sky-100"
                )}
              >
                {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                {copied ? '복사됨' : 'URL 공유'}
              </button>
            )}
            {selectedShoes.length > 0 && (
              <button
                onClick={clearAll}
                className="text-sm text-secondary transition hover:text-negative"
              >
                전체 삭제
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {selectedShoes.map((shoe) => (
            <div
              key={shoe.id || shoe.slug}
              className="group relative rounded-[24px] border border-sky-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(241,248,255,0.94))] p-4 shadow-[0_18px_36px_-34px_rgba(8,18,38,0.16)]"
            >
              <button
                onClick={() => {
                  const shoeId = shoe.id || shoe.slug;
                  if (shoeId) removeShoe(shoeId);
                }}
                className="absolute -top-2 -right-2 p-1 rounded-full bg-negative text-white hover:opacity-80 z-10"
              >
                <X className="h-3 w-3" />
              </button>
              <div className="mb-3 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white">
                {shoe.image ? (
                  <Image src={shoe.image} alt={shoe.name} width={56} height={56} className="object-contain" />
                ) : (
                  <span className="text-xl">👟</span>
                )}
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700">{shoe.brand}</p>
              <p className="mt-1 line-clamp-2 text-sm font-semibold text-slate-950">{shoe.name}</p>
              <p className="mt-2 text-xs text-slate-600">{shoe.category}</p>
            </div>
          ))}
          {/* 빈 슬롯 - 추천 신발 표시 */}
          {Array.from({ length: 4 - selectedShoes.length }).map((_, idx) => {
            const slotIndex = selectedShoes.length + idx;
            const isOver = dragOverSlot === slotIndex;
            // 선택되지 않은 인기 신발 추천
            const suggestedShoe = allShoes
              .filter(s => !selectedShoes.some(sel => (sel.id || sel.slug) === (s.id || s.slug)))
              .slice(idx, idx + 1)[0];

            return (
              <div
                key={`empty-${idx}`}
                onDragOver={(e) => handleDragOver(e, slotIndex)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, slotIndex)}
                className={cn(
                  "flex min-h-[132px] cursor-pointer flex-col items-center justify-center rounded-[24px] border-2 border-dashed p-4 text-center transition-all",
                  isOver
                    ? "scale-105 border-sky-300 bg-sky-50"
                    : "border-sky-100 bg-white/70 hover:border-sky-300 hover:bg-sky-50"
                )}
                onClick={() => suggestedShoe && addShoe(suggestedShoe)}
              >
                {isOver ? (
                    <span className="text-sm font-medium text-accent">여기에 놓기</span>
                ) : suggestedShoe ? (
                  <>
                    <div className="w-10 h-10 bg-white rounded-lg mb-1 flex items-center justify-center overflow-hidden opacity-60">
                      {suggestedShoe.image ? (
                        <Image src={suggestedShoe.image} alt={suggestedShoe.name} width={40} height={40} className="object-contain" />
                      ) : (
                        <span className="text-lg">👟</span>
                      )}
                    </div>
                    <span className="text-xs text-tertiary">{suggestedShoe.brand}</span>
                    <span className="max-w-full truncate text-xs text-secondary">{suggestedShoe.name}</span>
                    <span className="mt-1 text-[10px] text-accent">클릭하여 추가</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm text-tertiary">빈 슬롯</span>
                    <span className="text-xs text-tertiary mt-1">드래그하여 추가</span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Add Shoes</p>
            <h2 className="mt-2 font-black text-xl tracking-tight text-slate-950">비교할 신발 찾기</h2>
          </div>
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
                className="w-full rounded-full border border-sky-100 bg-white py-3 pl-11 pr-4 text-sm focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
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
                      "cursor-pointer select-none rounded-[22px] border p-4 text-left transition-all",
                      isDragging && "opacity-50 scale-95",
                      isSelected
                        ? "border-sky-300 bg-sky-50 cursor-default"
                        : canAdd
                        ? "border-sky-100 bg-white hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_16px_30px_-24px_rgba(8,18,38,0.16)]"
                        : "border-stone-900/10 bg-surface opacity-50 cursor-not-allowed"
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
                        <span className="flex-shrink-0 rounded-full bg-[var(--navy)] px-2 py-1 text-xs text-white">선택됨</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </section>


      {/* 비교 결과 */}
      {selectedShoes.length >= 2 && (
        <>
          <section className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
            <div className="mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Radar View</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">스펙 비교 차트</h2>
            </div>
            <CompareRadarChart shoes={selectedShoes} />
          </section>

          <section className="rounded-[30px] border border-[var(--accent-line)] bg-white/84 p-5 shadow-[0_22px_45px_-38px_rgba(8,18,38,0.16)] backdrop-blur md:p-6">
            <div className="mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700">Detail Rows</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">상세 비교</h2>
            </div>
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
