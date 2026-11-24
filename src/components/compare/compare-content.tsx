'use client';

import { useState, useMemo, useEffect, DragEvent } from 'react';
import { useCompare } from '@/contexts/compare-context';
import { compactSearch, shoeSearchNames } from '@/lib/shoe-search';
import Image from 'next/image';
import { Search, X, Check, Link2, GripVertical } from 'lucide-react';
import type { CardShoe } from '@/lib/data/shoes';
import { loadCardShoes } from '@/lib/shoes-card-client';
import { EnhancedCompareTable } from '@/components/compare/enhanced-compare-table';
import { CompareRadarChart } from '@/components/compare/compare-radar-chart';
import { cn } from '@/lib/utils';
import { shoeThumbnail } from '@/lib/shoe-thumbnail';
import { recordCompare } from '@/lib/recent';

const comparisonRows = [
  { label: '정가', value: (s: CardShoe) => { const price = s.priceAnalysis?.msrp ?? s.price; return price ? price.toLocaleString('ko-KR') + '원' : '미확인'; } },
  { label: '와이드', value: (s: CardShoe) => s.koreanFootFit?.wideOptions ? '옵션 확인' : '확인 필요' },
  { label: '무게', value: (s: CardShoe) => s.specs?.weight ? s.specs.weight + 'g' : '미확인' },
];

// Suspense 래퍼를 두지 않는다. useSearchParams()를 쓰던 시절엔 정적 export에서
// 페이지가 클라이언트 렌더로 이탈해 스켈레톤만 프리렌더됐다(본문 609자).
// URL은 window.location으로 직접 읽어 셸이 정적 HTML로 남게 한다.
export function CompareContent() {
  return <ComparePageContent />;
}

function ComparePageContent() {
  const { compareList, restored, replaceCompare } = useCompare();
  // 마운트 시 지연 로드 — CF 엣지 캐시라 수십 ms, 로드 전엔 빈 그리드가 잠깐 보인다
  const [loadFailed, setLoadFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [allShoesProp, setAllShoesProp] = useState<CardShoe[]>([]);
  useEffect(() => {
    setLoadFailed(false);
    loadCardShoes().then(setAllShoesProp).catch(() => setLoadFailed(true));
  }, [attempt]);
  const allShoes = useMemo(() => allShoesProp.filter(s => s.specs), [allShoesProp]);
  const selectedShoes = useMemo(() => compareList.flatMap(item =>
    allShoes.find(shoe => shoe.slug === item.slug) ?? []), [allShoes, compareList]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchExpanded, setShowSearch] = useState<boolean | null>(null);
  const [replaceSlug, setReplaceSlug] = useState<string | null>(null);
  const showSearch = searchExpanded ?? selectedShoes.length < 2;
  const [copied, setCopied] = useState(false);
  const [draggedShoe, setDraggedShoe] = useState<CardShoe | null>(null);
  const [dragOverSlot, setDragOverSlot] = useState<number | null>(null);
  useEffect(() => {
    if (!restored || !allShoes.length) return;
    const readSelection = () => {
      const value = new URLSearchParams(window.location.search).get('shoes');
      if (value === null) return;
      const slugs = Array.from(new Set(value.split(','))).slice(0, 4);
      replaceCompare(slugs.flatMap(slug => allShoes.find(shoe => shoe.slug === slug) ?? []));
    };
    readSelection();
    window.addEventListener('popstate', readSelection);
    return () => window.removeEventListener('popstate', readSelection);
  }, [allShoes, restored, replaceCompare]);

  // 재방문 "이어보기" 기록 — 2개 이상 선택했을 때 (홈의 이어보기 카드용).
  // 이 UI는 4개까지 허용하므로 2개일 때만 기록하면 3~4개를 고른 사용자에게 카드가 안 뜬다.
  // 이름·이미지를 함께 남겨 홈이 신발 메타를 통째로 들고 있지 않아도 되게 한다.
  useEffect(() => {
    if (selectedShoes.length >= 2) {
      recordCompare(
        selectedShoes.map((s) => ({ slug: s.slug, name: s.name, image: s.image })),
      );
    }
  }, [selectedShoes]);

  // URL 업데이트
  const updateSelection = (shoes: CardShoe[]) => {
    replaceCompare(shoes);
    const url = new URL(window.location.href);
    if (shoes.length) url.searchParams.set('shoes', shoes.map(shoe => shoe.slug).join(','));
    else url.searchParams.delete('shoes');
    window.history.replaceState(window.history.state, '', url);
    setShowSearch(null);
    setReplaceSlug(null);
    setSearchQuery('');
  };

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
    const query = compactSearch(searchQuery);
    return allShoes.filter(
      s =>
        shoeSearchNames(s.brand, s.name).some(name => name.includes(query)) || compactSearch(s.category).includes(query)
    ).slice(0, 20);
  }, [allShoes, searchQuery]);

  const addShoe = (shoe: CardShoe) => {
    if (replaceSlug && !selectedShoes.some(item => item.slug === shoe.slug)) {
      updateSelection(selectedShoes.map(item => item.slug === replaceSlug ? shoe : item));
      return;
    }
    if (selectedShoes.length < 4 && !selectedShoes.some(s => (s.id || s.slug) === (shoe.id || shoe.slug))) {
      const newShoes = [...selectedShoes, shoe];
      updateSelection(newShoes);
    }
  };

  const addShoeToSlot = (shoe: CardShoe, slotIndex: number) => {
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
    updateSelection(newShoes);
  };

  const removeShoe = (shoeId: string) => {
    const newShoes = selectedShoes.filter(s => (s.id || s.slug) !== shoeId);
    updateSelection(newShoes);
  };

  const startReplacement = (slug: string) => {
    setReplaceSlug(slug);
    setShowSearch(true);
    requestAnimationFrame(() => document.getElementById('compare-query')?.focus());
  };

  const clearAll = () => {
    updateSelection([]);
  };

  // 드래그 핸들러
  const handleDragStart = (e: DragEvent<HTMLElement>, shoe: CardShoe) => {
    setDraggedShoe(shoe);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', shoe.slug || '');
  };

  const handleDragEnd = () => {
    setDraggedShoe(null);
    setDragOverSlot(null);
  };

  const handleDragOver = (e: DragEvent<HTMLElement>, slotIndex: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverSlot(slotIndex);
  };

  const handleDragLeave = () => {
    setDragOverSlot(null);
  };

  const handleDrop = (e: DragEvent<HTMLElement>, slotIndex: number) => {
    e.preventDefault();
    if (draggedShoe) {
      addShoeToSlot(draggedShoe, slotIndex);
    }
    setDraggedShoe(null);
    setDragOverSlot(null);
  };

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-primary">러닝화 비교</h1>
      {selectedShoes.length > 0 && <section className="rounded border border-border bg-white p-3 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>

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

        {selectedShoes.length > 2 && (
          <ul aria-label="선택한 러닝화" className="grid grid-cols-2 gap-2 sm:hidden">
            {selectedShoes.map(shoe => (
              <li key={shoe.slug} className="relative flex min-w-0 flex-col items-center rounded border border-border px-2 pb-2 pt-9 text-center">
                <button type="button" className="absolute right-0 top-0 grid h-11 w-11 place-items-center" onClick={() => removeShoe(shoe.id || shoe.slug)} aria-label={`${shoe.name} 비교에서 삭제`}>
                  <X size={16} />
                </button>
                <div className="relative h-16 w-full">
                  {shoe.image && <Image src={shoeThumbnail(shoe.image)} alt={shoe.name} fill sizes="(max-width: 639px) 42vw, 192px" className="object-contain object-center" />}
                </div>
                <span className="mt-2 text-xs text-secondary">{shoe.brand}</span>
                <strong className="break-keep text-sm">{shoe.name}</strong>
                <dl className="mt-auto w-full pt-3 text-xs">
                  {comparisonRows.map(row => (
                    <div key={row.label} className="flex flex-wrap justify-between gap-x-1 border-t border-border py-1">
                      <dt className="text-secondary">{row.label}</dt><dd>{row.value(shoe)}</dd>
                    </div>
                  ))}
                </dl>
                {selectedShoes.length === 4 && <button type="button" className="min-h-11 w-full text-xs underline" onClick={() => startReplacement(shoe.slug)} aria-label={`${shoe.name} 교체`}>교체</button>}
              </li>
            ))}
          </ul>
        )}
        <div className={cn('max-w-full overflow-x-auto', selectedShoes.length > 2 && 'hidden sm:block')}>
          <table className="w-full table-fixed text-center text-sm" style={{ minWidth: selectedShoes.length > 2 ? selectedShoes.length * 114 + 62 : undefined }}>
            <caption className="sr-only">선택한 모델의 정가, 와이드 옵션, 무게</caption>
            <thead><tr>
              <td className="w-14" />
              {selectedShoes.map(shoe => (
                <th key={shoe.slug} scope="col" className="px-1 align-top">
                  <div className="flex h-11 justify-end">
                    <button className="flex h-11 w-11 items-center justify-center" onClick={() => removeShoe(shoe.id || shoe.slug)} aria-label={`${shoe.name} 비교에서 삭제`}><X size={16} /></button>
                  </div>
                  {shoe.image && <Image src={shoeThumbnail(shoe.image)} alt={shoe.name} width={192} height={110} className="mx-auto h-16 w-full object-contain sm:h-24" />}
                  <span className="block text-xs font-normal text-secondary">{shoe.brand}</span>
                  <span className="block break-keep">{shoe.name}</span>
                </th>
              ))}
            </tr></thead>
            <tbody>{comparisonRows.map(row => <tr key={row.label} className="border-b border-border">
              <th scope="row" className="sticky left-0 bg-white py-3 text-left text-xs">{row.label}</th>
              {selectedShoes.map(shoe => <td key={shoe.slug}>{row.value(shoe)}</td>)}
            </tr>)}
            {selectedShoes.length === 4 && <tr><td />{selectedShoes.map(shoe => <td key={shoe.slug}>
              <button type="button" className="min-h-11 underline" aria-label={`${shoe.name} 교체`} onClick={() => startReplacement(shoe.slug)}>교체</button>
            </td>)}</tr>}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-secondary">모델별 확인 정가 기준 · 현재 가격과 사이즈별 재고는 판매처에서 확인하세요.</p>
        <div className="mt-3 hidden gap-3 md:flex">
          {/* 빈 슬롯 - 추천 신발 표시 */}
          {Array.from({ length: 4 - selectedShoes.length }).map((_, idx) => {
            const slotIndex = selectedShoes.length + idx;
            const isOver = dragOverSlot === slotIndex;
            // 선택되지 않은 인기 신발 추천
            const suggestedShoe = allShoes
              .filter(s => !selectedShoes.some(sel => (sel.id || sel.slug) === (s.id || s.slug)))
              .slice(idx, idx + 1)[0];

            return (
              <button
                type="button"
                key={`empty-${idx}`}
                onDragOver={(e) => handleDragOver(e, slotIndex)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, slotIndex)}
                className={cn(
                  "flex min-h-[132px] w-full cursor-pointer flex-col items-center justify-center rounded-[4px] border-2 border-dashed p-4 text-center transition-[border-color,background-color,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isOver
                    ? "scale-105 border-sky-300 bg-sky-50"
                    : "border-sky-100 bg-white/70 hover:border-sky-300 hover:bg-sky-50"
                )}
                onClick={() => suggestedShoe && addShoe(suggestedShoe)}
                aria-label={suggestedShoe ? `${suggestedShoe.brand} ${suggestedShoe.name} 비교에 추가` : '빈 비교 슬롯'}
              >
                {isOver ? (
                    <span className="text-sm font-medium text-signal-dark">여기에 놓기</span>
                ) : suggestedShoe ? (
                  <>
                    <div className="w-10 h-10 bg-white rounded-[4px] mb-1 flex items-center justify-center overflow-hidden opacity-60">
                      {suggestedShoe.image ? (
                        <Image src={shoeThumbnail(suggestedShoe.image)} alt={suggestedShoe.name} width={40} height={40} className="object-contain" />
                      ) : (
                        <span className="text-lg">👟</span>
                      )}
                    </div>
                    <span className="text-xs text-tertiary">{suggestedShoe.brand}</span>
                    <span className="max-w-full truncate text-xs text-secondary">{suggestedShoe.name}</span>
                    <span className="mt-1 text-[10px] text-signal-dark">클릭하여 추가</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm text-tertiary">빈 슬롯</span>
                    <span className="text-xs text-tertiary mt-1">드래그하여 추가</span>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </section>}

      <section className="rounded-[4px] border border-[var(--accent-line)] bg-white/84 p-5 backdrop-blur md:p-6">
        <div className="flex items-center justify-between mb-4">
          <div>

            <h2 className="mt-2 font-black text-xl tracking-tight text-slate-950">{replaceSlug ? `${selectedShoes.find(s => s.slug === replaceSlug)?.name} 교체` : '비교할 신발 찾기'}</h2>
          </div>
          <button
            onClick={() => { setShowSearch(!showSearch); setReplaceSlug(null); }}
            className="text-sm text-signal-dark hover:underline"
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
                id="compare-query"
                name="compare-shoe-search"
                autoComplete="off"
                aria-label="비교할 신발 이름 또는 브랜드 검색"
                placeholder="신발 이름, 브랜드 검색…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-sky-100 bg-white py-3 pl-11 pr-4 text-sm focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>

            {loadFailed && <p role="alert">신발 목록을 불러오지 못했습니다. <button type="button" className="underline" onClick={() => setAttempt(n => n + 1)}>다시 불러오기</button></p>}
            {allShoes.length > 0 && searchQuery && !filteredShoes.length && <p role="status">검색 결과가 없습니다. 다른 모델명이나 브랜드를 입력하세요.</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto">
              {filteredShoes.map(shoe => {
                const isSelected = selectedShoes.some(s => (s.id || s.slug) === (shoe.id || shoe.slug));
                const canAdd = selectedShoes.length < 4 || replaceSlug !== null;
                const isDragging = draggedShoe?.slug === shoe.slug;

                return (
                  <button
                    type="button"
                    key={shoe.id || shoe.slug}
                    draggable={!isSelected && canAdd}
                    onDragStart={(e) => handleDragStart(e, shoe)}
                    onDragEnd={handleDragEnd}
                    onClick={() => !isSelected && canAdd && addShoe(shoe)}
                    className={cn(
                      "w-full cursor-pointer select-none rounded-[22px] border p-4 text-left transition-[border-color,background-color,opacity,transform] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isDragging && "opacity-50 scale-95",
                      isSelected
                        ? "border-sky-300 bg-sky-50 cursor-default"
                        : canAdd
                        ? "border-sky-100 bg-white hover:-translate-y-0.5 hover:border-sky-300"
                        : "border-stone-900/10 bg-surface opacity-50 cursor-not-allowed"
                    )}
                    disabled={isSelected || !canAdd}
                    aria-label={`${shoe.brand} ${shoe.name}${isSelected ? ' 선택됨' : ' 비교에 추가'}`}
                  >
                    <div className="flex items-center gap-3">
                      {/* 드래그 핸들 */}
                      {!isSelected && canAdd && (
                        <div className="text-tertiary hover:text-primary cursor-grab active:cursor-grabbing">
                          <GripVertical className="w-4 h-4" />
                        </div>
                      )}
                      <div className="w-10 h-10 bg-white rounded-[4px] flex items-center justify-center overflow-hidden flex-shrink-0">
                        {shoe.image ? (
                          <Image src={shoeThumbnail(shoe.image)} alt={shoe.name} width={40} height={40} className="object-contain" />
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
                  </button>
                );
              })}
            </div>
          </>
        )}
      </section>


      {/* 비교 결과 */}
      {selectedShoes.length >= 2 && (
        <>
          {selectedShoes.every(shoe => shoe.specs?.cushioning !== undefined && shoe.specs.responsiveness !== undefined && shoe.specs.stability !== undefined) ? (
          <section className="rounded-[4px] border border-[var(--accent-line)] bg-white/84 p-5 backdrop-blur md:p-6">
            <div className="mb-6">
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">스펙 비교 차트</h2>
            </div>
            <CompareRadarChart shoes={selectedShoes} />
          </section>
          ) : null}

          <section className="rounded-[4px] border border-[var(--accent-line)] bg-white/84 p-5 backdrop-blur md:p-6">
            <div className="mb-6">
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">상세 비교</h2>
            </div>
            <EnhancedCompareTable shoes={selectedShoes} onRemove={removeShoe} />
          </section>
        </>
      )}

    </div>
  );
}
