const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  async redirects() {
    return [
      {
        // www는 리다이렉트 없이 별도 서빙되고 있었음 — AdSense 사이트 분리(RPM 절반)·GSC/GA 신호 분산 방지
        source: '/:path*',
        has: [{ type: 'host', value: 'www.allrunabout.com' }],
        destination: 'https://allrunabout.com/:path*',
        permanent: true,
      },
      {
        source: '/blog/beginner-running-shoe-guide-2025',
        destination: '/blog/first-running-shoe-guide-2026',
        permanent: true,
      },
      {
        source: '/blog/running-shoe-lifespan-care',
        destination: '/blog/running-shoe-lifespan-replacement-guide',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // 정적 이미지: Vercel 엣지·브라우저가 장기 캐시하도록 하여
        // 오리진 재전송(Fast Origin Transfer) 절감. 이미지는 사실상 불변 자산.
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagservices.com https://adservice.google.com https://www.google-analytics.com https://www.googletagmanager.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://fundingchoicesmessages.google.com; frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://fundingchoicesmessages.google.com; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; connect-src 'self' https://pagead2.googlesyndication.com https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://www.googletagmanager.com https://adservice.google.com https://www.google.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://fundingchoicesmessages.google.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;",
          },
        ],
      },
    ];
  },
};

module.exports = withBundleAnalyzer(nextConfig);
