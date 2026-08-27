import { Asta_Sans, IBM_Plex_Mono, Newsreader } from 'next/font/google';

// 셋 다 next/font/google — 빌드 시점에 다운로드돼 'self'로 서빙된다.
// 출시 화면에서 fonts.googleapis.com 요청이 나가지 않는다(CSP·렌더블로킹 의존 없음).
//
// ⚠️ Asta Sans 는 latin 서브셋만 존재한다 — 한글 글리프가 없다.
//    그래서 한글 본문은 전역 셀프호스트 Pretendard(--font-pretendard)가 맡고,
//    Asta Sans 는 라틴 라벨·짧은 영문에만 쓴다. 폰트 스택 순서가 그 역할 분담이다.
const astaSans = Asta_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--sat-font-sans',
  // Asta Sans 는 next/font 의 폰트 메트릭 DB에 없어 폴백 보정면을 만들지 못한다
  // (빌드가 `Failed to find font override values` 를 두 번 찍는다).
  // 만들 수 없는 걸 요청하지 않는다 — 폴백은 어차피 Pretendard 가 받는다.
  adjustFontFallback: false,
});

// 큰 에디토리얼 제목·로마자 선수 이름
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--sat-font-serif',
});

// 번호·역할·종목·메타데이터
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--sat-font-mono',
});

export default function AthletesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 상위 (challenge)/layout 이 다크(#060809)다. 이 페이지는 순백 무대라 자기 배경을 직접 깐다.
  return (
    <div
      className={`${astaSans.variable} ${newsreader.variable} ${plexMono.variable}`}
    >
      {children}
    </div>
  );
}
