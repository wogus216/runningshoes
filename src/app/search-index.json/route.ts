import { getSearchIndex } from '@/lib/search-index';

// 정적 export 시 out/search-index.json 파일로 생성된다.
// 헤더 검색 팔레트가 열리는 시점에 1회 로드 — 인덱스를 모든 (main) 페이지 RSC에 싣지 않기 위함.
export const dynamic = 'force-static';

export async function GET() {
  return Response.json(getSearchIndex());
}
