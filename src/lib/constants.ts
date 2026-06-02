// 사이트 URL 상수
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://allrunabout.com';

// 사이트 정보
export const SITE_NAME = '러닝의 모든것';
// 신발 개수는 layout.tsx 등 호출부에서 getShoes().length로 동적으로 prefix.
export const SITE_DESCRIPTION = '러닝화 스펙·착화감·가성비 분석. 평발, 무릎 통증, 발볼 넓은 러너를 위한 맞춤 추천.';

// OG 이미지
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.png`;

// AdSense 설정
export const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || '';

// AdSense 광고 단위 ID (수동 슬롯)
// 각 슬롯은 AdSense 콘솔에서 별도 생성 → .env.local 또는 Vercel 환경변수에 등록
// 미설정 시 <AdSlot> 컴포넌트는 null 반환 (페이지 정상 렌더, 광고만 미노출)
export const ADSENSE_SLOTS = {
  // 블로그 본문 중간 (첫 절반 후, in-article 형식 — CPC 최고)
  blogInArticle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_IN_ARTICLE || '',
  // 블로그 본문 끝 (관련 글 위, display 형식)
  blogBottom: process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_BOTTOM || '',
  // 신발 상세 본문 중간 (핵심 박스 후, 상세 탭 전 — in-article)
  // 전용 슬롯 미설정 시 블로그 슬롯으로 폴백 → 즉시 노출, 추후 전용 슬롯 등록 시 자동 전환
  shoeInArticle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SHOE_IN_ARTICLE || process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_IN_ARTICLE || '',
  // 신발 상세 하단 (상세 탭 후, 교차 링크 위 — display)
  shoeBottom: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SHOE_BOTTOM || process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_BOTTOM || '',
} as const;

// GA4 설정
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';
