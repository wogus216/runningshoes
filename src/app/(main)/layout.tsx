import { Header, type HeaderBrandLink } from "@/components/header";
import { getAllBrands } from "@/lib/data/brands";
import { Footer } from "@/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header brandLinks={headerBrandLinks()} />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 md:px-6 py-8 md:py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

/** 헤더 브랜드 메뉴용 slim 목록 — 서버에서만 계산해 클라 번들에 데이터가 실리지 않게 한다 */
function headerBrandLinks(): HeaderBrandLink[] {
  return getAllBrands().map((b) => ({ id: b.id, name: b.name, nameKo: b.nameKo ?? '' }));
}
