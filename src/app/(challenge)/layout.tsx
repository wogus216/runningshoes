import Link from 'next/link';

export default function ChallengeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] bg-[#0a1020] text-white antialiased">
      {children}
      <footer className="border-t border-white/10 px-5 py-8 text-center">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center text-sm text-white/50 transition-colors hover:text-white/80"
        >
          러닝의 모든것에서 만듭니다
        </Link>
      </footer>
    </div>
  );
}
