import Image from 'next/image';
import { getCharacterPresentation } from '@/lib/runner-analysis/presentation';

// 인물 이미지(S5-C, 운영자 디자인 승인 전 제안). 결과 카드·공유받은 화면의 인물명 위에 그 인물 한 장만 받는다.
// AI로 만든 가상 인물이라 대체 텍스트와 화면 표기 둘 다 그렇게 적는다(출처 public/images/running-card/IMAGE_CREDITS.md).
// 표기는 'AI 생성 이미지'에서 바꿨다 — 무엇이 만들어진 것인지(실존 인물·공유한 본인이 아님)를 말하게(S5-E, 운영자 결정 2026-10-08).
// 틀(.rc-portrait)이 aspect-ratio·max-height 로 먼저 자리를 잡으므로 이미지가 와도 아래가 밀리지 않는다.
// image 가 없는 인물은 아무것도 그리지 않는다(표식 제거 편집본 14명은 2026-10-08 복원). 공유 이미지 1장째(캔버스)는 medal3d-share.js 가 같은 image 를 따로 그린다(S5-D).
export function RunnerPortrait({ id, name, priority = false }: { id: string; name: string; priority?: boolean }) {
  const { image } = getCharacterPresentation(id);
  if (!image) return null;
  return (
    <figure className="rc-portrait">
      <Image src={image} alt={`${name} — AI로 만든 가상 인물`} fill sizes="(max-width: 480px) 100vw, 432px" priority={priority} />
      {/* 대체 텍스트가 이미 같은 말을 읽으므로 화면 표기는 스크린 리더에서 뺀다. */}
      <figcaption aria-hidden="true">AI로 만든 가상 인물</figcaption>
    </figure>
  );
}
