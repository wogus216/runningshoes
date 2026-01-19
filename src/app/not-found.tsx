import Link from 'next/link';
import { Search, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10">
          <Search className="w-10 h-10 text-accent" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">404</h1>
          <h2 className="text-xl font-semibold text-primary">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-secondary">
            요청하신 페이지가 존재하지 않거나
            <br />
            주소가 변경되었을 수 있습니다.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium hover:opacity-90 transition"
          >
            <Home className="w-4 h-4" />
            홈으로 가기
          </Link>
        </div>
      </div>
    </div>
  );
}
