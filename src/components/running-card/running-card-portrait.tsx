import Image from 'next/image';
import { getCharacterPresentation } from '@/lib/runner-analysis/presentation';

// 인물 이미지(S5-C, 운영자 디자인 승인 전 제안). 결과 카드·공유받은 화면의 인물명 위에 그 인물 한 장만 받는다.
// AI 생성 이미지라 대체 텍스트와 화면 표기 둘 다 그렇게 적는다(출처 public/images/running-card/IMAGE_CREDITS.md).
// 틀(.rc-portrait)이 aspect-ratio·max-height 로 먼저 자리를 잡으므로 이미지가 와도 아래가 밀리지 않는다.
// image 가 없는 인물(상표처럼 읽히는 표식으로 뺀 10명, 재생성 대기)은 아무것도 그리지 않는다. 공유 이미지(캔버스)에는 넣지 않는다(D6).
export function RunnerPortrait({ id, name, priority = false }: { id: string; name: string; priority?: boolean }) {
  const { image } = getCharacterPresentation(id);
  if (!image) return null;
  return (
    <figure className="rc-portrait">
      <Image src={image} alt={`${name} 일러스트(AI 생성)`} fill sizes="(max-width: 480px) 100vw, 432px" priority={priority} />
      {/* 대체 텍스트가 이미 'AI 생성'을 읽으므로 화면 표기는 스크린 리더에서 뺀다. */}
      <figcaption aria-hidden="true">AI 생성 이미지</figcaption>
    </figure>
  );
}
