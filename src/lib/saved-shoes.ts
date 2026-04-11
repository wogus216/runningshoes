'use client';

import { useSyncExternalStore } from 'react';

const STORAGE_KEY = 'allrunabout:saved-shoes';

type Listener = () => void;
const listeners = new Set<Listener>();

function read(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function write(slugs: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  } catch {
    // localStorage 접근 실패(privacy mode 등) 시 무시
  }
  listeners.forEach((l) => l());
}

export function getSavedShoes(): string[] {
  return read();
}

export function isShoeSaved(slug: string): boolean {
  return read().includes(slug);
}

export function toggleSavedShoe(slug: string): boolean {
  const current = read();
  if (current.includes(slug)) {
    write(current.filter((s) => s !== slug));
    return false;
  }
  write([...current, slug]);
  return true;
}

export function removeSavedShoe(slug: string): void {
  const current = read();
  write(current.filter((s) => s !== slug));
}

function subscribe(callback: Listener): () => void {
  listeners.add(callback);
  // 다른 탭 동기화
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', onStorage);
  }
  return () => {
    listeners.delete(callback);
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', onStorage);
    }
  };
}

function getSnapshot(): string {
  return read().join(',');
}

function getServerSnapshot(): string {
  return '';
}

export function useSavedShoes(): string[] {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return snapshot ? snapshot.split(',') : [];
}
