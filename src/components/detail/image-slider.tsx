'use client';

import { useState, useEffect, useCallback, TouchEvent } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

type ImageSliderProps = {
  images?: string[];
  alt: string;
  autoPlayInterval?: number;
};

export function ImageSlider({ images, alt, autoPlayInterval = 3000 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // 이미지가 없거나 1개면 슬라이더 비활성화
  const hasMultipleImages = images && images.length > 1;
  const totalSlides = images?.length || 0;

  const goToSlide = useCallback((index: number) => {
    if (!hasMultipleImages) return;
    let newIndex = index;
    if (newIndex < 0) newIndex = totalSlides - 1;
    if (newIndex >= totalSlides) newIndex = 0;
    setCurrentIndex(newIndex);
  }, [hasMultipleImages, totalSlides]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // 자동 슬라이드
  useEffect(() => {
    if (!hasMultipleImages || isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [hasMultipleImages, isHovered, nextSlide, autoPlayInterval]);

  // 터치 핸들러
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const threshold = 50;

    if (distance > threshold) {
      nextSlide();
    } else if (distance < -threshold) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // 이미지가 없는 경우
  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-square bg-slate-100 rounded-2xl flex items-center justify-center">
        <ShoppingBag className="w-24 h-24 text-slate-300" />
      </div>
    );
  }

  // 이미지가 1개인 경우
  if (images.length === 1) {
    return (
      <div className="relative aspect-square bg-white rounded-2xl overflow-hidden">
        <Image
          src={images[0]}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-6"
          priority
        />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-square rounded-2xl overflow-hidden bg-white group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 슬라이드 트랙 */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <Image
              src={image}
              alt={`${alt} - ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-6"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* 좌우 화살표 */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        aria-label="이전 이미지"
      >
        <ChevronLeft className="w-5 h-5 text-slate-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        aria-label="다음 이미지"
      >
        <ChevronRight className="w-5 h-5 text-slate-700" />
      </button>

      {/* 인디케이터 닷 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              currentIndex === index
                ? "w-6 bg-stone-600"
                : "w-2 bg-black/20 hover:bg-black/40"
            )}
            aria-label={`${index + 1}번 이미지로 이동`}
          />
        ))}
      </div>
    </div>
  );
}
