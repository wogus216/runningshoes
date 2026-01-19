import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-10 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <h3 className="font-bold mb-2 text-primary">러닝의 모든것</h3>
            <p className="text-sm text-secondary">한국 러너를 위한 전문 러닝화 리뷰</p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="font-medium text-sm mb-3 text-primary">카테고리</h4>
              <ul className="space-y-2 text-sm text-secondary">
                <li><Link href="/?category=입문화" className="hover:text-primary transition">입문화</Link></li>
                <li><Link href="/?category=데일리" className="hover:text-primary transition">데일리</Link></li>
                <li><Link href="/?category=레이싱" className="hover:text-primary transition">레이싱</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-3 text-primary">정보</h4>
              <ul className="space-y-2 text-sm text-secondary">
                <li><a href="#" className="hover:text-primary transition">데이터 출처</a></li>
                <li><a href="#" className="hover:text-primary transition">리뷰 기준</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-tertiary">
          © {new Date().getFullYear()} 러닝의 모든것
        </div>
      </div>
    </footer>
  );
}
