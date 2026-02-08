import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 md:px-6 py-8 md:py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
