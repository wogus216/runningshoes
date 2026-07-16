import { getCardShoes } from '@/lib/data/shoes';

// 정적 export 시 out/shoes-card.json 파일로 생성된다.
// 추천(결과 계산 시)·비교(마운트 시) 페이지가 지연 로드 — 117켤레 rich 데이터를
// 페이지 HTML flight에 싣지 않기 위함 (recommend -187KB, compare -190KB).
export const dynamic = 'force-static';

export async function GET() {
  return Response.json(getCardShoes());
}
