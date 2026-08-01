import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

/**
 * 홈 전용 레이아웃.
 *
 * `(main)` 레이아웃은 children 을 `max-w-6xl px-4 md:px-6 py-8 md:py-10` 컨테이너로 감싼다.
 * 그 안에서는 홈의 **다크 밴드와 사선 트랙이 화면 끝까지 흐르지 못한다** —
 * 1440 에서 섹션 실폭이 1104px 라 좌우로 168px 씩 밝은 여백이 남았다.
 *
 * 그래서 홈만 컨테이너 없는 레이아웃을 쓴다. 폭 제한은 각 섹션 안쪽의
 * `home-section.module.css` 의 `.wrap`(max-width 1200 · 좌우 32/18/15px)이 담당하고,
 * 섹션 배경은 화면 전체를 덮는다.
 *
 * 라우트 그룹은 URL 에 영향이 없어 `/` 는 그대로다. 나머지 14개 `(main)` 페이지는
 * 기존 레이아웃을 그대로 쓴다.
 */
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="relative z-10 flex w-full flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
