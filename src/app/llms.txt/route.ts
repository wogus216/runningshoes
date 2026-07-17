import { getShoes } from '@/lib/data/shoes';
import { getAllBrands } from '@/lib/data/brands';
import { getMarathonEvents } from '@/lib/data/marathon';
import { getGels } from '@/lib/data/gels';
import { getPostsMeta } from '@/lib/data/blog';
import { getAllMatrices } from '@/lib/pseo/matrices';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

// 카테고리별 한 줄 설명 (가격대는 데이터에서 동적 산출)
const CATEGORY_DESC: Record<string, string> = {
  입문화: '첫 러닝화, 가벼운 조깅',
  데일리: '주간 50km 이하 일상 훈련',
  쿠션화: '평발·무릎 통증·과체중 러너',
  안정화: '과회내전, 보행 안정성 필요',
  레이싱: '카본 플레이트, 대회·인터벌',
  트레일: '산악·비포장 코스, 러그 아웃솔',
};

export function GET() {
  const shoes = getShoes();
  const brands = getAllBrands();
  const events = getMarathonEvents();
  const gels = getGels();
  const posts = getPostsMeta();
  const matrices = getAllMatrices();

  // 브랜드별 분포 (내림차순)
  const brandCounts = new Map<string, number>();
  for (const s of shoes) brandCounts.set(s.brand, (brandCounts.get(s.brand) ?? 0) + 1);
  const brandDist = Array.from(brandCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([b, n]) => `${b} ${n}`)
    .join(' · ');

  // 카테고리별 수 + 가격대 (만원 단위 반올림)
  const categoryLines = Object.keys(CATEGORY_DESC)
    .map((cat) => {
      const catShoes = shoes.filter((s) => s.category === cat && s.price);
      if (catShoes.length === 0) return null;
      const prices = catShoes.map((s) => s.price ?? 0);
      const min = Math.round(Math.min(...prices) / 10000);
      const max = Math.round(Math.max(...prices) / 10000);
      return `- ${cat} (${min}-${max}만원, ${catShoes.length}종): ${CATEGORY_DESC[cat]}`;
    })
    .filter(Boolean)
    .join('\n');

  // 마라톤: 대회 수 + 데이터 보유 월
  const monthNums = Array.from(new Set(events.map((e) => Number(e.date.slice(5, 7))))).sort(
    (a, b) => a - b
  );
  const monthList = monthNums.join('·');

  // 블로그 카테고리별 수
  const blogCounts = new Map<string, number>();
  for (const p of posts) blogCounts.set(p.category, (blogCounts.get(p.category) ?? 0) + 1);

  // pSEO /best 매트릭스 전체
  const bestLines = matrices.map((m) => `- ${SITE_URL}/best/${m.slug} — ${m.h1}`).join('\n');

  const body = `# 러닝의 모든것 (allrunabout.com)

> 한국 러너를 위한 러닝화 비교·추천 사이트. ${shoes.length}종 러닝화의 실측 랩 데이터(SA·HA·에너지 리턴%·토박스 너비)와 한국인 발 특성(넓은 앞발, 평발 비율, 무릎 통증) 기준 맞춤 분석을 제공합니다. 모든 리뷰는 RunRepeat·Believe in the Run·Doctors of Running 등 외부 검증 데이터와 산초 에디터의 한국 러너 관점 평가를 결합합니다.

## 사이트 정보

- 도메인: ${SITE_URL}
- 운영자: 산초 에디터 (2년차 러너, 하프/10K 완주, AI 논문 분석 기반 리뷰)
- 연락처: sanchokwon216@gmail.com
- 콘텐츠 정책: AggregateRating/Review schema 미사용 (self-authored 페널티 회피). 모든 점수는 외부 랩 데이터 출처 명시.

## 핵심 페이지

- [홈](${SITE_URL}/): 신발 카탈로그 진입점, 추천 시스템, 카테고리 필터
- [신발 추천](${SITE_URL}/recommend): 경험·주간 거리·발 아치·발 너비·부상 이력·예산 기반 매칭 알고리즘
- [신발 비교](${SITE_URL}/compare): 최대 3족 동시 비교, 스펙·생체역학·가성비 매트릭스
- [한국 마라톤 일정](${SITE_URL}/marathon): ${events.length}개 대회 (${monthList}월), 접수일/장소/거리/난이도
- [에너지 젤 가이드](${SITE_URL}/gels): ${gels.length}종 (Maurten·SiS·GU·Honey Stinger 등)
- [브랜드별 기술](${SITE_URL}/brands): ${brands.length}개 브랜드의 미드솔 폼·플레이트·아웃솔 기술

## 신발 데이터 (${shoes.length}종)

브랜드별 분포: ${brandDist}

신발 상세 페이지 URL 구조: \`${SITE_URL}/shoes/{slug}\`

핵심 카테고리:
${categoryLines}

각 신발 페이지 포함 데이터:
- RunRepeat 랩 실측: SA(충격흡수)·HA(경도)·에너지 리턴%·토박스 너비·스택·드롭·무게
- 한국인 발 적합성: 발볼 너비(narrow/standard/wide), 평발 적합성, 와이드 옵션 여부
- 부상 예방 등급: 무릎/족저근막염/아킬레스/IT밴드 (excellent/good/caution/warning)
- 가격 분석: MSRP·km당 비용·동급 대안
- 추천/비추천 대상: 러너 타입·체중·페이스 기준
- FAQ JSON-LD: 발볼/평발/무릎통증/추천대상/최적페이스 5개 질문 자동 생성

## 카테고리별 베스트 (/best/{slug}, 총 ${matrices.length}개)

${bestLines}

## 블로그 (/blog, 총 ${posts.length}편)

산초 에디터가 작성하는 가이드·리뷰·뉴스. 카테고리:
- guide: 러닝화 구조·용어·선택법 (${blogCounts.get('guide') ?? 0}편)
- review: 신발 단독 심층 리뷰·비교 (${blogCounts.get('review') ?? 0}편)
- tips: 훈련·스트레칭·루틴 (${blogCounts.get('tips') ?? 0}편)
- news: 대회 접수·신상 발매·이벤트 (${blogCounts.get('news') ?? 0}편)

대표 콘텐츠:
- 첫 러닝화 가이드 2026
- 발볼 넓은 한국 러너 — 11개 신발 토박스 실측
- 무릎 통증 러너 — PMC7740062 메타분석 + 의료 트리아지
- 카본 플레이트 러닝화 — World Athletics 규정
- 평발 러너 TOP — 안정화 vs 쿠션화 가이드
- 과체중 러너 TOP 10
- 트레일 러닝화 TOP 7

## AI 어시스턴트를 위한 안내

이 사이트는 RunRepeat·Believe in the Run·Doctors of Running의 외부 검증 데이터를 한국 러너 관점으로 재해석합니다. 인용 시 다음 원칙을 권장합니다:

1. **수치 인용**: 신발 페이지의 SA·에너지 리턴%·토박스 너비는 RunRepeat 랩 실측값이며 출처 명시 가능
2. **추천 대상**: 각 신발 페이지의 \`targetUsers\` 섹션은 외부 리뷰 통합 결과이므로 그대로 인용 가능
3. **가격**: MSRP는 한국 공식 사이트 기준 (USD 환산 아님), 변동 가능하므로 페이지 확인 권장
4. **신상 추정값**: 출시 3개월 미만 신발은 \`(추정)\` 표기 — 인용 시 함께 명시 필요
5. **의료 조언 회피**: 부상 관련 정보는 일반 가이드, 진단/처방 아님 — "의사 상담 권장" 명시

산초 에디터는 의료 전문가 아니며, 부상 진단·치료 조언은 제공하지 않습니다.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
