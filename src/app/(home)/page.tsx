import { getGridShoes, getBrandsFromShoes } from "@/lib/data/shoes";
import { getPostsCardMeta } from "@/lib/data/blog";
import { getGels } from "@/lib/data/gels";
import { categoryOrder } from "@/types/shoe";
import { HomeContent } from "@/components/home/home-content";
import { getHomeStats } from "@/lib/home/stats";
import { getProblemData } from "@/lib/home/problem-counts";
import { getDataStatuses } from "@/lib/home/data-status";

/** 에디토리얼 대표 1 + 목록 6 */
const EDITORIAL_POSTS = 7;

/**
 * 홈은 순회 허브다. 데이터 산출은 전부 여기(서버)에서 하고, HomeContent 에는
 * 배치에 필요한 슬림 값만 내린다 — client 모듈이 데이터 getter 를 import 하면
 * 풀데이터가 클라이언트 번들에 실린다(layout 청크가 712KB 로 불어난 이력).
 */
export default function HomePage() {
  const shoes = getGridShoes();
  const stats = getHomeStats();
  // 에디토리얼은 대표 1 + 목록 6 만 쓴다. 전체(221편) 메타를 내리면 홈 RSC 페이로드에
  // 그대로 실려 index.rsc 가 294KB 까지 부푼다(실측) — 쓰는 만큼만 자른다.
  const posts = getPostsCardMeta().slice(0, EDITORIAL_POSTS);
  const { counts, leadThumbs } = getProblemData();

  return (
    <HomeContent
      shoes={shoes}
      stats={stats}
      posts={posts}
      problemCounts={counts}
      problemThumbs={leadThumbs}
      dataStatuses={getDataStatuses()}
      brandCount={getBrandsFromShoes().length}
      gelCount={getGels().length}
      categoryCount={categoryOrder.length}
    />
  );
}
