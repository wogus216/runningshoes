'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowLeft, X } from 'lucide-react';
import { getShoes } from '@/lib/data/shoes';
import { EnhancedCompareTable } from '@/components/compare/enhanced-compare-table';
import { CompareRadarChart } from '@/components/compare/compare-radar-chart';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Shoe } from '@/types/shoe';

export default function ComparePage() {
  const allShoes = useMemo(() => getShoes().filter(s => s.specs), []);
  const [selectedShoes, setSelectedShoes] = useState<Shoe[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(true);

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
      setSelectedShoes([...selectedShoes, shoe]);
    }
  };

  const removeShoe = (shoeId: string) => {
    setSelectedShoes(selectedShoes.filter(s => (s.id || s.slug) !== shoeId));
  };

  const clearAll = () => {
    setSelectedShoes([]);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* 헤더 */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" className="rounded-full">
            <ArrowLeft className="h-4 w-4 mr-2" />
            돌아가기
          </Button>
        </Link>
      </div>

      <header className="text-center">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">
          신발 비교
        </h1>
        <p className="mt-2 text-slate-600">
          최대 4개의 신발을 비교해보세요
        </p>
      </header>

      {/* 선택된 신발 */}
      <Card className="border-white/20 bg-white/20 backdrop-blur-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-[#4facfe] border-[#4facfe]">
                {selectedShoes.length}/4 선택됨
              </Badge>
              {selectedShoes.length > 0 && (
                <button onClick={clearAll} className="text-sm text-slate-500 hover:text-red-500">
                  전체 삭제
                </button>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSearch(!showSearch)}
              className="rounded-full"
            >
              {showSearch ? '신발 선택 닫기' : '신발 추가하기'}
            </Button>
          </div>

          {/* 선택된 신발 카드 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {selectedShoes.map(shoe => (
              <div
                key={shoe.id || shoe.slug}
                className="relative rounded-2xl border border-white/30 bg-white/50 p-4"
              >
                <button
                  onClick={() => removeShoe(shoe.id || shoe.slug || '')}
                  className="absolute -top-2 -right-2 p-1 rounded-full bg-red-100 text-red-500 hover:bg-red-200"
                >
                  <X className="h-4 w-4" />
                </button>
                <p className="text-xs font-medium text-slate-500 uppercase">{shoe.brand}</p>
                <p className="font-bold text-slate-900 truncate">{shoe.name}</p>
                <p className="text-xs text-slate-400">{shoe.category}</p>
              </div>
            ))}
            {Array.from({ length: 4 - selectedShoes.length }).map((_, idx) => (
              <div
                key={`empty-${idx}`}
                className="rounded-2xl border-2 border-dashed border-slate-200 p-4 flex items-center justify-center min-h-[80px]"
              >
                <span className="text-sm text-slate-400">빈 슬롯</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 신발 검색/선택 */}
      {showSearch && (
        <Card className="border-white/20 bg-white/20 backdrop-blur-2xl">
          <CardContent className="p-6">
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="신발 이름, 브랜드 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-white/30 bg-white/50 py-3 pl-11 pr-4 text-sm focus:border-[#4facfe]/50 focus:outline-none focus:ring-2 focus:ring-[#4facfe]/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto">
              {filteredShoes.map(shoe => {
                const isSelected = selectedShoes.some(s => (s.id || s.slug) === (shoe.id || shoe.slug));
                const canAdd = selectedShoes.length < 4;

                return (
                  <button
                    key={shoe.id || shoe.slug}
                    onClick={() => !isSelected && canAdd && addShoe(shoe)}
                    disabled={isSelected || !canAdd}
                    className={cn(
                      "text-left rounded-xl border p-4 transition-all",
                      isSelected
                        ? "border-[#4facfe] bg-[#4facfe]/10"
                        : canAdd
                        ? "border-white/30 bg-white/30 hover:border-[#4facfe]/50 hover:bg-[#4facfe]/5"
                        : "border-slate-200 bg-slate-100 opacity-50 cursor-not-allowed"
                    )}
                  >
                    <p className="text-xs font-medium text-slate-500 uppercase">{shoe.brand}</p>
                    <p className="font-bold text-slate-900">{shoe.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-400">{shoe.category}</span>
                      {shoe.priceAnalysis?.msrp && (
                        <span className="text-xs text-slate-400">
                          ₩{shoe.priceAnalysis.msrp.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {isSelected && (
                      <Badge className="mt-2 bg-[#4facfe] text-white text-xs">선택됨</Badge>
                    )}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 비교 결과 */}
      {selectedShoes.length >= 2 && (
        <>
          {/* 레이더 차트 */}
          <Card className="border-white/20 bg-white/95 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">스펙 비교 차트</h2>
              <CompareRadarChart shoes={selectedShoes} />
            </CardContent>
          </Card>

          {/* 상세 비교 테이블 */}
          <Card className="border-white/20 bg-white/95 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">상세 비교</h2>
              <EnhancedCompareTable shoes={selectedShoes} onRemove={removeShoe} />
            </CardContent>
          </Card>
        </>
      )}

      {selectedShoes.length === 1 && (
        <div className="text-center py-12">
          <p className="text-slate-500">비교를 위해 1개 이상의 신발을 추가로 선택해주세요</p>
        </div>
      )}

      {selectedShoes.length === 0 && !showSearch && (
        <div className="text-center py-12">
          <p className="text-slate-500">비교할 신발을 선택해주세요</p>
          <Button
            onClick={() => setShowSearch(true)}
            className="mt-4 rounded-full bg-[#4facfe]"
          >
            신발 선택하기
          </Button>
        </div>
      )}
    </div>
  );
}
