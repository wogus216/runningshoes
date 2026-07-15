const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 순수 정적 export — ISR 스토리지를 거치지 않는 정적 파일로 빌드(out/).
  // Vercel ISR Reads 과금 제거 + Cloudflare Pages 배포 전제 조건.
  // ⚠️ export 모드에서는 redirects()/headers()가 동작하지 않으므로
  //    Vercel은 vercel.json, Cloudflare Pages는 public/_redirects·_headers가 대신한다.
  //    규칙 수정 시 두 파일을 함께 갱신할 것.
  output: 'export',
  typedRoutes: true,
  // 이미지 CDN(jsDelivr) 활성화 — 빌드타임에 값을 확정해 클라이언트 번들에 인라인하므로
  // 서버/클라 렌더가 일관(hydration 안전). 우선순위:
  //   1) Vercel 환경변수 NEXT_PUBLIC_IMAGE_CDN 이 있으면 그것(로그인 가능해지면 이걸로 제어)
  //   2) 없으면 '프로덕션 배포'에서만 자동으로 jsDelivr 활성 (VERCEL_ENV === 'production')
  //   3) 로컬·프리뷰는 빈 값 → 상대경로 로컬 폴백
  env: {
    NEXT_PUBLIC_IMAGE_CDN:
      process.env.NEXT_PUBLIC_IMAGE_CDN ||
      (process.env.VERCEL_ENV === 'production'
        ? 'https://cdn.jsdelivr.net/gh/wogus216/runningshoes@main/public'
        : ''),
  },
  images: {
    // Vercel Hobby 무료 한도(Image Optimization Transformations 5K/월) 절약을 위해
    // 사전 WebP 변환된 원본을 그대로 서빙. lazy loading·width/height 자동 처리는 유지됨.
    unoptimized: true,
    // ⚠️ 아래 3개(formats/deviceSizes/imageSizes)는 unoptimized:true 에서는 무시된다.
    // unoptimized 를 끄고 Vercel Image Optimization 을 켤 경우에만 유효해지므로 기준값으로 보존.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [48, 96, 128, 256, 384],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
