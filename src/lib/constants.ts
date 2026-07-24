// 사이트 URL 상수
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://allrunabout.com';

// 색인 가드: 기본은 색인 허용(프로덕션). 프리뷰·스테이징·로컬 빌드만 명시적으로 차단한다.
// 과거 `VERCEL_ENV === 'production'`에 의존했으나, Cloudflare 이전(2026-07) 후
// CF 빌드엔 VERCEL_ENV가 주입되지 않아 전 페이지가 noindex로 나가는 사고가 있었다.
// env 유실에 안전하도록 opt-out으로 뒤집는다 — NEXT_PUBLIC_NOINDEX=1일 때만 noindex.
// (미완성·중복 콘텐츠를 감추려는 프리뷰/스테이징 빌드에서만 NEXT_PUBLIC_NOINDEX=1을 설정한다)
export const IS_PRODUCTION_DEPLOY = process.env.NEXT_PUBLIC_NOINDEX !== '1';

// 사이트 정보
export const SITE_NAME = '러닝의 모든것';
// 신발 개수는 layout.tsx 등 호출부에서 getShoes().length로 동적으로 prefix.
export const SITE_DESCRIPTION = '러닝화 스펙·착화감·가성비 분석. 평발, 무릎 통증, 발볼 넓은 러너를 위한 맞춤 추천.';

// OG 이미지
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.png`;

// AdSense 설정
export const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-5040630448523471';

// AdSense 광고 단위 ID (수동 슬롯)
// 각 슬롯은 AdSense 콘솔에서 별도 생성 → .env.local 또는 Vercel 환경변수에 등록
// 미설정 시 <AdSlot> 컴포넌트는 null 반환 (페이지 정상 렌더, 광고만 미노출)
export const ADSENSE_SLOTS = {
  // 블로그 본문 중간 (첫 절반 후, in-article 형식 — CPC 최고)
  blogInArticle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_IN_ARTICLE || '4456671940',
  // 블로그 본문 끝 (관련 글 위, display 형식)
  blogBottom: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_BOTTOM || '1226447608',
  // 신발 상세 본문 중간 (핵심 박스 후, 상세 탭 전 — in-article)
  // 신발 전용 슬롯 등록 완료(2026-06-12). env 미설정 시 하드코딩 전용 ID로 폴백.
  shoeInArticle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SHOE_IN_ARTICLE || '2940495278',
  // 신발 상세 하단 (상세 탭 후, 교차 링크 위 — display)
  shoeBottom: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SHOE_BOTTOM || '9314331932',
  // 마라톤 대회 상세 (73개 페이지 — 본문 중간 in-article + 하단 display)
  // 마라톤 전용 슬롯 등록 완료(2026-07-13). env 미설정 시 하드코딩 전용 ID로 폴백.
  marathonInArticle:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_MARATHON_IN_ARTICLE || '5178793142',
  marathonBottom:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_MARATHON_BOTTOM || '9276417887',
  // 홈 — 결과 그리드와 'Beyond Shoes' 섹션 사이 display 1개 (고정 위치, CLS 안전)
  // 홈 전용 슬롯 등록 완료(2026-07-13). env 미설정 시 하드코딩 전용 ID로 폴백.
  homeBottom:
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_BOTTOM || '8774844686',
} as const;

// GA4 설정
// 하드코딩 폴백(ADSENSE_CLIENT_ID와 동일 패턴) — measurement ID는 HTML에 공개되는 값이라
// 시크릿이 아니다. Cloudflare 이전 후 CF 빌드에 env가 없어 GA 태그가 통째로 누락돼
// 계측이 끊긴 사고(2026-07-15~)가 있어, env 유실에도 계측이 유지되도록 폴백을 둔다.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-ZJZCBW9YMY';
