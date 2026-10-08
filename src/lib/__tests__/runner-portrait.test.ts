import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { getCharacterPresentation, PRESENTATION_IDS } from '@/lib/runner-analysis/presentation';

// 표식 제거 편집본 14장을 복원했다(2026-10-08). 모든 인물 경로와 공유용 머리 위치를 검증한다.
const PUBLIC = path.join(process.cwd(), 'public');

describe('인물 이미지 경로', () => {
  it('모든 인물이 자기 id 의 WebP 를 가리키며 파일이 있다', () => {
    for (const id of PRESENTATION_IDS) {
      const { image } = getCharacterPresentation(id);
      expect(image, id).toBe(`/images/running-card/${id}.webp`);
      expect(fs.existsSync(path.join(PUBLIC, image!)), id).toBe(true);
    }
  });

  // 피드 공유 이미지(S5-D)는 imageFocus 로 그림을 자른다. 그림이 돌아오면 머리 위치도 같이 적어야 한다.
  it('그림이 있는 인물은 머리 위치(imageFocus)가 0–1 사이로 있고, 없는 인물은 없다', () => {
    for (const id of PRESENTATION_IDS) {
      const { image, imageFocus } = getCharacterPresentation(id);
      if (!image) {
        expect(imageFocus, id).toBeUndefined();
        continue;
      }
      expect(imageFocus, id).toBeGreaterThan(0);
      expect(imageFocus, id).toBeLessThan(1);
    }
  });

  it('폴더의 36장이 모두 인물 경로에 연결돼 있다', () => {
    const files = fs.readdirSync(path.join(PUBLIC, 'images/running-card')).filter((f) => f.endsWith('.webp'));
    const used = PRESENTATION_IDS.map((id) => getCharacterPresentation(id).image).filter(Boolean);
    expect(files.map((f) => `/images/running-card/${f}`).sort()).toEqual([...used].sort());
    expect(files).toHaveLength(36);
  });
});
