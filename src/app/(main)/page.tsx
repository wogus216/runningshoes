import { getGridShoes } from "@/lib/data/shoes";
import { getAllPosts } from "@/lib/data/blog";
import { HomeContent } from "@/components/home/home-content";

export default function HomePage() {
  const cardShoes = getGridShoes();

  // 데이터 기준일 — 최신 발행 글 기준으로 산출한다.
  // 하드코딩하면 반드시 stale해진다(직전까지 "2026.03"으로 4개월 밀려 있었음).
  const latestPost = getAllPosts()[0];
  const lastUpdated = latestPost?.updatedAt ?? latestPost?.publishedAt ?? null;

  return <HomeContent initialShoes={cardShoes} lastUpdated={lastUpdated} />;
}
