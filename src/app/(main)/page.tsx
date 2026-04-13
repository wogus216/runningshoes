import { getCardShoes } from "@/lib/data/shoes";
import { HomeContent } from "@/components/home/home-content";

export default function HomePage() {
  const cardShoes = getCardShoes();

  return <HomeContent initialShoes={cardShoes} />;
}
