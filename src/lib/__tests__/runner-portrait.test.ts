import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { getCharacterPresentation, PRESENTATION_IDS } from '@/lib/runner-analysis/presentation';

// 인물 이미지(S5-C). 경로가 가리키는 파일이 public 에 있어야 하고, 상표처럼 읽히는 표식으로 뺀 14명은 경로가 없어야 한다.
// 표식을 지운 판을 다시 받아 누가 돌아오면 EXCLUDED 와 IMAGE_CREDITS.md 를 같이 고친다.
// 앞 6명은 S5-C 판정, 다음 4명은 리드 판단(2026-10-07), 끝 4명은 리드가 원본 해상도로 확대해 찾은 표식(2026-10-07, S5-D)으로 뺐다.
const PUBLIC = path.join(process.cwd(), 'public');
const EXCLUDED = ['zeus', 'orpheus', 'apollo', 'bellerophon', 'atalanta', 'talos', 'hephaestus', 'ares', 'hector', 'penthesilea', 'hera', 'poseidon', 'penelope', 'sisyphus'];

describe('인물 이미지 경로', () => {
  it('뺀 14명을 빼고 모두 자기 id 의 WebP 를 가리키며 파일이 있다', () => {
    for (const id of PRESENTATION_IDS) {
      const { image } = getCharacterPresentation(id);
      if (EXCLUDED.includes(id)) {
        expect(image, id).toBeUndefined();
        continue;
      }
      expect(image, id).toBe(`/images/running-card/${id}.webp`);
      expect(fs.existsSync(path.join(PUBLIC, image!)), id).toBe(true);
    }
  });

  it('폴더에 경로 없는 이미지가 남아 있지 않다(뺀 14명 포함)', () => {
    const files = fs.readdirSync(path.join(PUBLIC, 'images/running-card')).filter((f) => f.endsWith('.webp'));
    const used = PRESENTATION_IDS.map((id) => getCharacterPresentation(id).image).filter(Boolean);
    expect(files.map((f) => `/images/running-card/${f}`).sort()).toEqual([...used].sort());
    expect(files).toHaveLength(22);
  });
});
