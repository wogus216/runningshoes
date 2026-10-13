import { describe, expect, it } from 'vitest';
import { shoeDescription } from '../seo/shoe-description';
import { shoe as kayano } from '../data/shoes/asics/asics-gel-kayano-33';
import { getShoes } from '../data/shoes';

describe('신발 검색 설명', () => {
  it('긴 소개 뒤의 무게·발볼·가격을 자르지 않는다', () => {
    const description = shoeDescription(kayano, '아식스');
    expect(description).toContain('아식스 젤 카야노 33');
    expect(description).toContain('무게 298g');
    expect(description).toContain('발볼 표준');
    expect(description).toContain('정가 199,000원');
    expect(description.endsWith('한국 러너 후기')).toBe(true);
    expect(description.length).toBeLessThanOrEqual(160);
  });

  it('현재 신발 전체에서 필수 구매 정보와 길이를 보존한다', () => {
    for (const shoe of getShoes()) {
      const description = shoeDescription(shoe, shoe.brand);
      expect(description.length, shoe.slug).toBeLessThanOrEqual(160);
      expect(description, shoe.slug).toContain(shoe.name);
      if (shoe.specs?.weight) expect(description, shoe.slug).toContain(`무게 ${shoe.specs.weight}g`);
      if (shoe.price) expect(description, shoe.slug).toContain(`정가 ${shoe.price.toLocaleString('ko-KR')}원`);
    }
  });
});
