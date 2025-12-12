'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Shoe } from '@/types/shoe';

type CompareContextType = {
  compareList: Shoe[];
  addToCompare: (shoe: Shoe) => void;
  removeFromCompare: (shoeId: string) => void;
  clearCompare: () => void;
  isInCompare: (shoeId: string) => boolean;
  canAddMore: boolean;
};

const CompareContext = createContext<CompareContextType | null>(null);

const MAX_COMPARE_ITEMS = 4;

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareList, setCompareList] = useState<Shoe[]>([]);

  const addToCompare = useCallback((shoe: Shoe) => {
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
