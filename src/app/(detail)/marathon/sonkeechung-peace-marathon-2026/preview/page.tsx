import type { Metadata } from "next";
import { SonkeechungPreview } from "@/components/marathon/sonkeechung/course-preview";

export const metadata: Metadata = {
  title: "손기정평화마라톤 2026 풀코스 3D 미리보기",
  description:
    "임진각·통일대교·도라산역 방면 반환·리비삼거리 방면 반환을 따라가는 손기정평화마라톤 풀코스 참고용 3D 미리보기입니다.",
  alternates: {
    canonical: "/marathon/sonkeechung-peace-marathon-2026/preview",
  },
};

export default function SonkeechungCoursePage() {
  return <SonkeechungPreview />;
}
