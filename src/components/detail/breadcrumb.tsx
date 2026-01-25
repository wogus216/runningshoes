'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

type BreadcrumbProps = {
  brand: string;
  category: string;
  shoeName: string;
};

export function Breadcrumb({ brand, category, shoeName }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1 text-sm text-secondary overflow-x-auto scrollbar-hide">
      <Link href="/" className="flex items-center gap-1 hover:text-primary transition shrink-0">
        <Home className="w-4 h-4" />
        <span className="hidden sm:inline">홈</span>
      </Link>
      <ChevronRight className="w-4 h-4 shrink-0 text-tertiary" />
      <span className="shrink-0">{category}</span>
      <ChevronRight className="w-4 h-4 shrink-0 text-tertiary" />
      <span className="shrink-0">{brand}</span>
      <ChevronRight className="w-4 h-4 shrink-0 text-tertiary" />
      <span className="text-primary font-medium truncate">{shoeName}</span>
    </nav>
  );
}
