'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로깅 (프로덕션에서는 Sentry 등으로 전송)
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warning/10">
          <AlertTriangle className="w-8 h-8 text-warning" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-primary">
            문제가 발생했습니다
          </h1>
          <p className="text-secondary">
            페이지를 불러오는 중 오류가 발생했습니다.
            <br />
            잠시 후 다시 시도해 주세요.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:opacity-90 transition"
          >
            <RotateCcw className="w-4 h-4" />
            다시 시도
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-full font-medium text-primary hover:bg-surface transition"
          >
            <Home className="w-4 h-4" />
            홈으로
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <details className="mt-6 text-left p-4 bg-surface rounded-lg">
            <summary className="text-sm font-medium text-tertiary cursor-pointer">
              오류 상세 (개발 모드)
            </summary>
            <pre className="mt-2 text-xs text-warning overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
