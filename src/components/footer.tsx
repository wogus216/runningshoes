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
              <h4 className="font-medium text-sm mb-3 text-primary">에너지 젤</h4>
              <ul className="space-y-2 text-sm text-secondary">
                <li><Link href="/gels" className="hover:text-primary transition">전체 보기</Link></li>
                <li><Link href="/gels/maurten-gel-100" className="hover:text-primary transition">프리미엄</Link></li>
                <li><Link href="/gels/k-yanggang" className="hover:text-primary transition">양갱</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-3 text-primary">가이드</h4>
              <ul className="space-y-2 text-sm text-secondary">
                <li><Link href="/blog" className="hover:text-primary transition">전체 보기</Link></li>
                <li><Link href="/blog/first-running-shoe-guide-2026" className="hover:text-primary transition">초보자 가이드</Link></li>
                <li><Link href="/blog/wide-feet-running-shoes-korea" className="hover:text-primary transition">발볼 넓은 분</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-3 text-primary">정보</h4>
              <ul className="space-y-2 text-sm text-secondary">
                <li><Link href="/about" className="hover:text-primary transition">사이트 소개</Link></li>
                <li><Link href="/faq" className="hover:text-primary transition">자주 묻는 질문</Link></li>
                <li><Link href="/privacy" className="hover:text-primary transition">개인정보처리방침</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition">문의하기</Link></li>
              </ul>
            </div>
          </div>
        </div>
        {/* 법적 고지 */}
        <div className="border-t border-border mt-8 pt-6">
          <p className="text-xs text-tertiary leading-relaxed max-w-3xl mx-auto text-center mb-4">
            <strong>러닝의 모든것</strong>은 상품 판매 당사자가 아니며, 제휴 업체가 제공하는 상품 정보 및 거래에 대하여 법적 책임을 지지 않습니다.
            상품의 상태, 배송, 환불 및 정품 여부 등에 관한 모든 책임은 실제 판매처에 있습니다.
            이 포스팅은 네이버 쇼핑 커넥트 및 쿠팡 파트너스 활동의 일환으로, 판매 발생 시 수수료를 제공받습니다.{' '}
            <Link href="/legal" className="underline hover:text-secondary">자세히 보기</Link>
          </p>
          <p className="text-center text-xs text-tertiary">
            © {new Date().getFullYear()} 러닝의 모든것
          </p>
        </div>
      </div>
    </footer>
  );
}
