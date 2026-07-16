'use client';

import type { CardShoe } from '@/lib/data/shoes';

// /shoes-card.json 지연 로드 유틸 — 추천·비교 페이지 공용.
// 모듈 스코프 프로미스 캐시로 세션 내 1회만 네트워크를 탄다.
let cached: Promise<CardShoe[]> | null = null;

export function loadCardShoes(): Promise<CardShoe[]> {
  if (!cached) {
    cached = fetch('/shoes-card.json').then((res) => {
      if (!res.ok) {
        cached = null; // 실패 시 다음 호출에서 재시도
        throw new Error(`shoes-card.json ${res.status}`);
      }
      return res.json();
    });
  }
  return cached;
}
