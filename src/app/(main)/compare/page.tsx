import { getCardShoes } from '@/lib/data/shoes';
import { CompareContent } from '@/components/compare/compare-content';

export default function ComparePage() {
  const allShoes = getCardShoes();
  return <CompareContent allShoes={allShoes} />;
}
