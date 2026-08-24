import fs from 'node:fs';
import path from 'node:path';

import type { CourseGpxSource } from '@/types/marathon';

/**
 * 저작 시점에 `scripts/course-map/build.mjs` 가 구워둔 지도 데이터.
 * 좌표는 이미 화면 좌표(viewBox 기준)라 렌더할 때 계산이 없다.
 */
export interface CourseMapData {
  eventId: string;
  source: CourseGpxSource;
  verifiedAt: string;
  sourceNote?: string;
  sourceUrl?: string;
  viewBox: [number, number, number, number];
  /** 배경 지형 SVG 경로. 문서에 인라인하지 않고 <img> 로 부른다 */
  background: string;
  /** 1인칭 주행 데이터 경로 — '타보기'를 누를 때만 받아온다 */
  ride?: string;
  /** 지면 위로 띄운 코스 — 애니메이션과 주자 위치의 기준선 */
  course: string;
  /** 같은 형상을 지면에 붙인 그림자 */
  courseGround: string;
  /** 띄운 선과 그림자를 잇는 받침선 */
  stilts: string[];
  /** 띄운 높이(viewBox px) */
  lift: number;
  markers: { kind: 'start' | 'turn' | 'via'; x: number; y: number; groundY: number; label: string }[];
  landmarks: { name: string; kind: string; x: number; y: number }[];
  /** 코스 위 구간 노트. at 은 경로상 위치(0~1) — 추정 경로라 km 로는 못 적는다 */
  beats: { title: string; note: string; at: number; x: number; y: number }[];
  attribution: string;
}

const cache = new Map<string, CourseMapData | null>();

/**
 * SSG 빌드 중 서버에서만 부른다. 클라이언트 번들에 데이터가 실리지 않도록
 * import 가 아니라 fs 로 읽는다(헤더 검색 인덱스 때 700KB 를 클라에 흘린 전례가 있다).
 */
export function getCourseMap(eventId: string): CourseMapData | null {
  // 개발 중에는 캐시하지 않는다 — 생성기를 다시 돌려도 화면이 안 바뀌어 헤맨다
  const useCache = process.env.NODE_ENV === 'production';
  const hit = useCache ? cache.get(eventId) : undefined;
  if (hit !== undefined) return hit;

  const file = path.join(process.cwd(), 'public/data/course-maps', `${eventId}.json`);
  let data: CourseMapData | null = null;
  try {
    data = JSON.parse(fs.readFileSync(file, 'utf8')) as CourseMapData;
  } catch {
    data = null;
  }
  if (useCache) cache.set(eventId, data);
  return data;
}
