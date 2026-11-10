import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { getBrandById, getTechnologiesForShoe } from '@/lib/data/brands';
import { TechnologyList } from './technology-list';

describe('Nike model and technology evidence', () => {
  it('distinguishes Vaporfly 4 mesh from the older Vaporfly 4% Flyknit name', () => {
    const technologies = getTechnologiesForShoe('nike', 'nike-vaporfly-4').map((t) => t.id);
    expect(technologies).toContain('engineered-mesh');
    expect(technologies).toContain('carbon-plate');
    expect(technologies).toContain('zoomx');
    expect(technologies).not.toContain('flyknit');
  });

  it('keeps the Pegasus Plus knit application separate from Pegasus 41 mesh', () => {
    expect(getTechnologiesForShoe('nike', 'nike-pegasus-plus').map((t) => t.id)).toContain('flyknit');
    const pegasus41 = getTechnologiesForShoe('nike', 'nike-pegasus-41').map((t) => t.id);
    expect(pegasus41).toContain('engineered-mesh');
    expect(pegasus41).toContain('air-zoom');
    expect(pegasus41).not.toContain('flyknit');
  });

  it('renders the scope and source for a technology claim without an invented score bar', () => {
    const output = renderToStaticMarkup(React.createElement(TechnologyList, { brand: getBrandById('nike')!, shoes: [] }));
    expect(output).toContain('신발 무게를 맞춘 세 조건');
    expect(output).toContain('https://link.springer.com/article/10.1007/s40279-017-0811-2');
    expect(output).toContain('소재 전체의 독립 성능 순위');
    expect(output).not.toContain('성능 지표');
    expect(output).not.toContain('class="spec-bar"');
  });
  it('renders outsole sections for the navigation anchors as well as the upper and midsole sections', () => {
    const output = renderToStaticMarkup(React.createElement(TechnologyList, { brand: getBrandById('nike')!, shoes: [] }));
    for (const id of ['waffle-outsole', 'high-abrasion-rubber', 'thin-web-rubber']) {
      expect(output).toContain(`href="#${id}"`);
      expect(output).toContain(`id="${id}"`);
    }
  });

});
