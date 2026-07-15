import { getGridShoes } from "@/lib/data/shoes";
import { HomeContent } from "@/components/home/home-content";

export default function HomePage() {
  const cardShoes = getGridShoes();

  return <HomeContent initialShoes={cardShoes} />;
}
