import { getShoes } from '@/lib/data/shoes';
import { getAllPosts } from '@/lib/data/blog';

/**
 * 추천 문항 수. src/components/recommend/questionnaire.tsx 의 `questions` 배열 길이(9)와 일치해야 한다.
 * questionnaire.tsx는 'use client' 컴포넌트라 서버 전용인 이 모듈에서 직접 import할 수 없다
 * (client reference로 치환되어 실제 배열을 얻을 수 없음 — 과거 header.tsx가 모듈 스코프에서
 * 데이터 getter를 불러 클라 번들이 712KB로 불어난 사고와 대칭되는 함정).
 * 대신 src/lib/__tests__/home-data.test.ts 가 questionnaire.tsx 소스를 파싱해
 * 이 상수가 실제 문항 수와 어긋나면 테스트가 깨지도록 회귀 검증한다.
 */
const QUESTION_COUNT = 9;

/** 문항당 응답에 걸리는 대략적 시간(초). 문항 수가 늘면 예상 소요 시간도 함께 늘어난다. */
const SECONDS_PER_QUESTION = 7;

/** 카운트를 하드코딩하면 반드시 stale해진다. 전부 데이터 소스에서 산출한다. */
export function getHomeStats() {
  const posts = getAllPosts();
  const latest = posts[0];
  return {
    shoeCount: getShoes().length,
    lastUpdated: latest?.updatedAt ?? latest?.publishedAt ?? null,
    questionCount: QUESTION_COUNT,
    estimatedMinutes: Math.max(1, Math.round((QUESTION_COUNT * SECONDS_PER_QUESTION) / 60)),
  };
}
