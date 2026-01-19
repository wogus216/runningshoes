import { getShoes } from "@/lib/data/shoes";
import { HomeContent } from "@/components/home/home-content";

export default function HomePage() {
  // 서버에서 신발 데이터 로드
  const allShoes = getShoes();

  return <HomeContent initialShoes={allShoes} />;
}
