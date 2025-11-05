export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/20 bg-white/10 backdrop-blur-2xl">
      <div className="container mx-auto max-w-6xl px-6 py-8">
        <p className="text-center text-sm font-medium text-slate-600">
          &copy; {new Date().getFullYear()} 러닝화 계급도. 생동감 있는 러닝화 가이드.
        </p>
      </div>
    </footer>
  );
}
