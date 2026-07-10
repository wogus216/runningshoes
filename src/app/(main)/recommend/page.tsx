import { getCardShoes } from '@/lib/data/shoes';
import { RecommendContent } from '@/components/recommend/recommend-content';

export default function RecommendPage() {
  const allShoes = getCardShoes();
  return <RecommendContent allShoes={allShoes} />;
}
