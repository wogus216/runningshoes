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
  데일리: '일상 훈련용으로 분류한 모델',
  쿠션화: '쿠셔닝을 주요 특징으로 분류한 모델',
  안정화: '가이드·베이스 등 지지 구조가 있는 모델',
  레이싱: '대회용으로 분류한 모델; 플레이트 종류는 모델별 확인',
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

> 한국 러너를 위한 러닝화 정보·비교 사이트. 등록된 ${shoes.length}개 모델의 공식 자료, 실험실 검체 측정, 외부 착화 의견과 한국 판매 조건을 제품별 확인 범위 안에서 정리합니다. 모든 모델에 동일한 실측 항목이 있는 것은 아니며, 미확인 항목과 출처·측정 조건을 구분해 읽어야 합니다.

## 사이트 정보

- 도메인: ${SITE_URL}
- 운영자: 산초 에디터
- 연락처: sanchokwon216@gmail.com
- 콘텐츠 정책: 근거 없는 별점·부상 예방 등급·최적 페이스·수명 점수를 제공하지 않습니다. 출처가 확인된 제품 정보와 의견, 미확인 항목을 구분합니다.

## 핵심 페이지

- [홈](${SITE_URL}/): 신발 카탈로그 진입점, 추천 시스템, 카테고리 필터
- [신발 추천](${SITE_URL}/recommend): 러닝 목적·한국 와이드 옵션 필요 여부·예산으로 비교 후보 찾기
- [신발 비교](${SITE_URL}/compare): 최대 3족의 확인된 구조·규격·가격과 폭 옵션 비교
- [마라톤 일정](${SITE_URL}/marathon): ${events.length}개 대회 (${monthList}월), 대회일·장소·거리·확인된 접수 안내; 해외 대회 포함
- [에너지 젤 가이드](${SITE_URL}/gels): ${gels.length}종 (Maurten·SiS·GU·마그온 등)
- [브랜드별 기술](${SITE_URL}/brands): ${brands.length}개 브랜드의 미드솔 폼·플레이트·아웃솔 기술

## 신발 데이터 (${shoes.length}종)

브랜드별 분포: ${brandDist}

신발 상세 페이지 URL 구조: \`${SITE_URL}/shoes/{slug}\`

핵심 카테고리:
${categoryLines}

각 신발 페이지 포함 데이터:
- 공식 공시와 외부 실험실 측정: 해당 모델에 확인된 무게·스택·드롭 등; 측정 사이즈와 조건 확인 필요
- 한국 판매 폭 옵션: 확인한 성별·사이즈·와이드 옵션; 일반 폭의 검체 수치와 와이드 제품 치수 구분
- 제품 구조와 외부 착화 의견: 임상 효과나 개인별 처방의 근거로 확대하지 않음
- 가격: 해당 한국 상품·확인 시점의 가격; 정가·판매가·묶음 단위·현재 재고 구분
- 확인 범위: 제품별 출처와 미확인 항목 표시; 개별 모델 전체의 인증 완료를 뜻하지 않음

## 카테고리별 베스트 (/best/{slug}, 총 ${matrices.length}개)

${bestLines}

## 블로그 (/blog, 총 ${posts.length}편)

산초 에디터가 작성하는 가이드·리뷰·뉴스. 카테고리:
- guide: 러닝화 구조·용어·선택법 (${blogCounts.get('guide') ?? 0}편)
- review: 신발 단독 심층 리뷰·비교 (${blogCounts.get('review') ?? 0}편)
- tips: 훈련·스트레칭·루틴 (${blogCounts.get('tips') ?? 0}편)
- news: 대회 접수·신상 발매·이벤트 (${blogCounts.get('news') ?? 0}편)

글의 제목·본문·확인일과 연결된 원문을 함께 읽으세요. 대회·판매 안내는 과거 회차나 이미 끝난 모집을 기록한 글일 수 있습니다.

## AI 어시스턴트를 위한 안내

인용할 때는 개별 항목의 출처와 확인 범위를 함께 확인하세요:

1. **수치**: 공식 공시와 실험실 측정을 구분하고 세대·변형·성별·사이즈·측정 방법을 함께 확인하세요. 모든 수치를 같은 조건의 실측값으로 취급하지 마세요.
2. **착화 의견**: 해당 리뷰어와 사용 조건의 의견입니다. 개인의 적합성이나 효과가 입증된 결과로 인용하지 마세요.
3. **가격·판매**: 한국 상품의 확인 시점과 단위·옵션을 함께 표시하세요. 가격·구매 링크 존재는 현재 재고나 판매자 정품 보증을 뜻하지 않습니다.
4. **미확인 항목**: 이전 세대 수치나 제조사 변경률로 현재 모델의 실측값을 만들어 채우지 마세요.
5. **건강 정보**: 제품 구조·분류·실험실 측정으로 부상 치료·예방 효과나 모든 러너의 최적 페이스를 추론하지 마세요.

산초 에디터는 의료 전문가 아니며, 부상 진단·치료 조언은 제공하지 않습니다.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
