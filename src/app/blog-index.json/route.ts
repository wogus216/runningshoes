import { getPostsCardMeta } from '@/lib/data/blog';

// 정적 export 시 out/blog-index.json 파일로 생성된다.
// /blog 인덱스가 초기 24개만 직렬화하고, 카테고리 필터·더보기 시점에 이 파일을 1회 로드한다.
export const dynamic = 'force-static';

export async function GET() {
  return Response.json(getPostsCardMeta());
}
