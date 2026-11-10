import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { getGelBySlug } from '@/lib/data/gels';
import { GITolerance } from './gi-tolerance';
import { CarbScience } from './carb-science';
import { NutritionSpecs } from './nutrition-specs';
import type { Gel } from '@/types/gel';

const product = getGelBySlug('maurten-gel-100')!;

describe('gel evidence rendering', () => {
  it.each(['필수 (물과 함께)', '권장 (물 150ml)'])('preserves a qualified water instruction: %s', (waterPairing) => {
    const gel: Gel = { ...product, giTolerance: { ...product.giTolerance, waterPairing } };
    const output = renderToStaticMarkup(React.createElement(GITolerance, { gel }));
    expect(output).toContain(waterPairing);
    expect(output).not.toContain('✅ 물 없이도 섭취 가능');
  });

  it('does not turn an unconfirmed GI assessment into a normal or good grade', () => {
    const output = renderToStaticMarkup(React.createElement(GITolerance, { gel: product }));
    expect(output).toContain('독립 비교평가 미확인');
    expect(output).not.toContain('전체 평가');
    expect(output).not.toContain('매우 안정적');
  });

  it('keeps an undisclosed water requirement and source composition unknown', () => {
    const gel = getGelBySlug('up-energy-gel')!;
    const output = renderToStaticMarkup(React.createElement(CarbScience, { gel }));
    expect(output).toContain('제품 포장의 섭취 지시 확인');
    expect(output).toContain('원료 구성 구분 미확인');
    expect(output).not.toContain('단독 섭취 가능');
    expect(output).not.toContain('단일 탄수화물 원료');
  });

  it('distinguishes a verified zero from missing nutrition fields', () => {
    const output = renderToStaticMarkup(React.createElement(NutritionSpecs, { gel: product }));
    expect(output).toContain('0 mg');
    expect(output).toContain('나트륨 미확인');
    expect(output).not.toContain('undefined');
    expect(output).not.toContain('NaN');
  });

  it('does not assign caffeine-free status to an unselected UP variant', () => {
    const gel = getGelBySlug('up-energy-gel')!;
    expect(gel.nutritionFacts.caffeine).toBeUndefined();
    const output = renderToStaticMarkup(React.createElement(NutritionSpecs, { gel }));
    expect(output).toContain('카페인');
    expect(output).toContain('미확인');
    expect(output).not.toContain('0 mg');
  });
});
