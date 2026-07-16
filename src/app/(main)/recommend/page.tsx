import { shoes } from '@/lib/data/shoes';
import { RecommendContent } from '@/components/recommend/recommend-content';

export default function RecommendPage() {
  // 신발 데이터는 /shoes-card.json 지연 로드 — flight에 117켤레를 싣지 않는다
  return <RecommendContent totalCount={shoes.length} />;
}
