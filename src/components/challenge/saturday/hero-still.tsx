import styles from '@/app/(challenge)/saturday/saturday.module.css';

/**
 * 히어로 배경. 영상을 내리고 정지 컷으로 간다.
 *
 * 렌더된 mp4 는 public/ 에서 내렸다(2026-08-20) — 이 페이지가 안 쓰는데 8.2MB 가
 * 배포되고 있었다. 영상은 인스타용 자산이라 로컬(video/saturday-teaser/output/)에만 둔다.
 * 페이지에 영상을 다시 얹기로 하면 그때 필요한 한 개만 올린다.
 *
 * 컷은 크루가 실제로 찍은 일출 사진이다. AI 컷(laces)에서 갈아탔다 —
 * 나머지 화면이 전부 진짜(진짜 대화·진짜 사진)인데 첫 화면만 익명의 생성 이미지였다.
 * 이 사진은 9장 중 유일하게 새벽이고, 팔레트 8토큰 중 4개가 여기서 나왔다.
 * 데스크톱은 해와 러너가 함께 들어오도록 16:9로 잘라 쓰고, 그 아래는 세로 원본을 쓴다.
 */
export function HeroStill() {
  return (
    <div className={styles.heroMedia}>
      <picture>
        <source
          media="(min-width: 900px)"
          srcSet="/images/challenge/saturday/hero-sunrise-wide.webp"
        />
        <img
          className={styles.heroPlate}
          src="/images/challenge/saturday/hero-sunrise.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
      </picture>
      <div className={styles.videoShade} aria-hidden="true" />
    </div>
  );
}
