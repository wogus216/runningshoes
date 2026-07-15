'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
/**
 * 비교함에 저장하는 최소 정보 — 실제 비교 데이터는 /compare 페이지가
 * URL 슬러그(?shoes=...)로 받아 자체 로드하므로 전체 객체가 필요 없다.
 * 카드 표면이 무거운 shoe 객체를 끌고 다니지 않게 하는 결합 해제 장치.
 */
export type CompareItem = {
  id?: string;
  slug: string;
  brand: string;
  name: string;
};

type CompareContextType = {
  compareList: CompareItem[];
  addToCompare: (shoe: CompareItem) => void;
  removeFromCompare: (shoeId: string) => void;
  clearCompare: () => void;
  isInCompare: (shoeId: string) => boolean;
  canAddMore: boolean;
};

const CompareContext = createContext<CompareContextType | null>(null);

const MAX_COMPARE_ITEMS = 4;

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareList, setCompareList] = useState<CompareItem[]>([]);

  const addToCompare = useCallback((shoe: CompareItem) => {
    setCompareList(prev => {
      if (prev.length >= MAX_COMPARE_ITEMS) return prev;
      if (prev.some(s => (s.id || s.slug) === (shoe.id || shoe.slug))) return prev;
      return [...prev, shoe];
    });
  }, []);

  const removeFromCompare = useCallback((shoeId: string) => {
    setCompareList(prev => prev.filter(s => (s.id || s.slug) !== shoeId));
  }, []);

  const clearCompare = useCallback(() => {
    setCompareList([]);
  }, []);

  const isInCompare = useCallback((shoeId: string) => {
    return compareList.some(s => (s.id || s.slug) === shoeId);
  }, [compareList]);

  const canAddMore = compareList.length < MAX_COMPARE_ITEMS;

  return (
    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        canAddMore,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within CompareProvider');
  }
  return context;
}
